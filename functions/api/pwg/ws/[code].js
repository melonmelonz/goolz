// Pages Function: WebSocket relay for Playing With Goolz.
// Hands the upgrade off to a Durable Object instance keyed by the room code.
// The Room DO class is exported from this same file so the Pages Functions
// bundle exposes it; wrangler.toml binds it as `ROOMS`.
//
// Hardening:
//  - max 24 concurrent connections per room (≥ 4 players + spectators)
//  - max 64 KB per inbound message; oversized messages drop the socket
//  - per-socket rate limit: ~25 messages/sec (token bucket); excess drops socket
//  - text fields (name, chat) sanitized to printable ASCII + a small whitelist
//  - reserved control message types are never relayed
//  - sender id is server-stamped; clients cannot spoof identity
//  - server holds host election + game-started flag; non-host start/reset are dropped
//  - AI ghosts ("ai_add") get a server-side controller broadcast, with the
//    host counted as their owner-of-record for cleanup on host-leave

const MAX_CLIENTS_PER_ROOM = 24;
const MAX_MESSAGE_BYTES = 64 * 1024;
const RATE_LIMIT_PER_SEC = 25;
const RATE_LIMIT_BURST = 40;
const NAME_MAX = 16;

function sanitizeName(s) {
  // Allow printable latin, digits, spaces, dash, underscore, dot. Strip everything else.
  return String(s == null ? '' : s)
    .replace(/[^\x20-\x7e\u00a1-\u00ff]/g, '')
    .replace(/[<>"'`\\]/g, '')
    .trim()
    .slice(0, NAME_MAX) || 'wisp';
}

export class Room {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    // ws -> { id, name, color, slot, ai?, tokens, lastTick }
    this.clients = new Map();
    // ai bots not backed by a real ws
    // id -> { id, name, color, slot, ai: true, difficulty, ownerHostId }
    this.aiBots = new Map();
    this.hostId = null;
    this.started = false;
    this.seed = 0;
  }

  async fetch(req) {
    const upgrade = req.headers.get('Upgrade');
    if (upgrade !== 'websocket') return new Response('expected websocket', { status: 426 });
    if (this.clients.size >= MAX_CLIENTS_PER_ROOM) {
      return new Response('room full', { status: 429 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();

    const id = crypto.randomUUID().slice(0, 8);
    const now = Date.now();
    this.clients.set(server, {
      id, name: 'wisp', color: 0, slot: -1,
      tokens: RATE_LIMIT_BURST, lastTick: now,
    });

    server.addEventListener('message', (ev) => this.onMessage(server, ev.data));
    server.addEventListener('close', () => this.onClose(server));
    server.addEventListener('error', () => this.onClose(server));

    server.send(JSON.stringify({
      t: 'welcome', id, roster: this.roster(),
      started: this.started, seed: this.seed, hostId: this.hostId,
    }));

    return new Response(null, { status: 101, webSocket: client });
  }

  roster() {
    const list = [];
    for (const info of this.clients.values()) list.push(stripPrivate(info));
    for (const ai of this.aiBots.values()) list.push(stripPrivate(ai));
    return list;
  }

  broadcast(obj, except) {
    const msg = JSON.stringify(obj);
    for (const ws of this.clients.keys()) {
      if (ws === except) continue;
      try { ws.send(msg); } catch {}
    }
  }

  // Token bucket — refill at RATE_LIMIT_PER_SEC, capped at RATE_LIMIT_BURST.
  // Returns true if the message is allowed; false if rate-limited.
  takeToken(me, now) {
    const dt = (now - me.lastTick) / 1000;
    me.tokens = Math.min(RATE_LIMIT_BURST, me.tokens + dt * RATE_LIMIT_PER_SEC);
    me.lastTick = now;
    if (me.tokens < 1) return false;
    me.tokens -= 1;
    return true;
  }

  onMessage(ws, data) {
    // Size cap: drop the socket if a peer is sending oversized frames.
    if (typeof data === 'string') {
      if (data.length > MAX_MESSAGE_BYTES) { try { ws.close(1009, 'too big'); } catch {} return; }
    } else if (data && data.byteLength != null && data.byteLength > MAX_MESSAGE_BYTES) {
      try { ws.close(1009, 'too big'); } catch {} return;
    }
    let m;
    try { m = JSON.parse(data); } catch { return; }
    if (!m || typeof m !== 'object') return;
    const me = this.clients.get(ws);
    if (!me) return;

    const now = Date.now();
    if (!this.takeToken(me, now)) {
      try { ws.close(1008, 'rate limited'); } catch {}
      return;
    }

    const type = String(m.t || '');

    if (type === 'join') {
      me.name = sanitizeName(m.name);
      me.color = (m.color | 0) & 7;
      if (this.hostId == null) this.hostId = me.id;
      this.broadcast({ t: 'roster', list: this.roster(), hostId: this.hostId, started: this.started });
      return;
    }

    // Reserved control message types must NEVER be peer-relayed.
    if (type === 'roster' || type === 'welcome' || type === 'leave') return;

    if (type === 'claim') {
      if (!this.started) {
        const slot = m.slot | 0;
        if (slot < 0 || slot > 3) return;
        for (const c of this.clients.values()) if (c !== me && c.slot === slot) return;
        for (const ai of this.aiBots.values()) if (ai.slot === slot) return;
        me.slot = slot;
        if (typeof m.color === 'number') me.color = (m.color | 0) & 7;
        this.broadcast({ t: 'roster', list: this.roster(), hostId: this.hostId, started: this.started });
      }
      return;
    }

    if (type === 'unclaim') {
      if (!this.started) {
        me.slot = -1;
        this.broadcast({ t: 'roster', list: this.roster(), hostId: this.hostId, started: this.started });
      }
      return;
    }

    if (type === 'recolor') {
      if (!this.started) {
        me.color = (m.color | 0) & 7;
        this.broadcast({ t: 'roster', list: this.roster(), hostId: this.hostId, started: this.started });
      }
      return;
    }

    if (type === 'ai_add') {
      // Only host may add AI ghosts. Place into the lowest free slot.
      if (me.id !== this.hostId || this.started) return;
      const taken = new Set();
      for (const c of this.clients.values()) if (c.slot >= 0) taken.add(c.slot);
      for (const a of this.aiBots.values()) taken.add(a.slot);
      let freeSlot = -1;
      for (let i = 0; i < 4; i++) if (!taken.has(i)) { freeSlot = i; break; }
      if (freeSlot < 0) return;
      const diff = Math.max(0, Math.min(2, m.difficulty | 0));
      const labels = ['wisp', 'wraith', 'banshee'];
      const aiId = 'ai-' + crypto.randomUUID().slice(0, 6);
      const aiName = labels[diff] + '·' + freeSlot;
      this.aiBots.set(aiId, {
        id: aiId, name: aiName, color: freeSlot, slot: freeSlot,
        ai: true, difficulty: diff, ownerHostId: this.hostId,
      });
      this.broadcast({ t: 'roster', list: this.roster(), hostId: this.hostId, started: this.started });
      return;
    }

    if (type === 'ai_remove') {
      if (me.id !== this.hostId || this.started) return;
      const aiId = String(m.aiId || '');
      if (this.aiBots.has(aiId)) {
        this.aiBots.delete(aiId);
        this.broadcast({ t: 'roster', list: this.roster(), hostId: this.hostId, started: this.started });
      }
      return;
    }

    if (type === 'start') {
      if (me.id === this.hostId && !this.started) {
        const seatedHumans = [...this.clients.values()].filter(r => r.slot >= 0).length;
        const seatedAi = this.aiBots.size;
        if (seatedHumans + seatedAi < 2) return;
        this.started = true;
        this.seed = (Math.random() * 0x7fffffff) | 0;
        this.broadcast({ t: 'start', seed: this.seed, ts: Date.now(), roster: this.roster() });
      }
      return;
    }

    if (type === 'reset') {
      if (me.id === this.hostId) {
        this.started = false;
        this.seed = 0;
        this.broadcast({ t: 'reset' });
        this.broadcast({ t: 'roster', list: this.roster(), hostId: this.hostId, started: false });
      }
      return;
    }

    // Default: relay everything else (pos/bomb/pickup/death/kill/etc.)
    // Stamp sender id so peers can't spoof. Strip dangerous fields.
    const safe = {};
    const allow = ['t', 'x', 'y', 'tx', 'ty', 'dir', 'alive', 'kind', 'power', 't0', 'target'];
    for (const k of allow) if (m[k] !== undefined) safe[k] = m[k];
    safe.id = me.id;
    this.broadcast(safe, ws);
  }

  onClose(ws) {
    const info = this.clients.get(ws);
    if (!info) return;
    this.clients.delete(ws);
    if (this.hostId === info.id) {
      // Promote the next human in the room. AI bots cannot host.
      const next = [...this.clients.values()][0];
      this.hostId = next ? next.id : null;
      // If no humans remain, the AI ghosts depart with the room.
      if (!next) this.aiBots.clear();
    }
    if (this.clients.size === 0) {
      this.started = false;
      this.seed = 0;
      this.aiBots.clear();
    }
    this.broadcast({ t: 'leave', id: info.id });
    this.broadcast({ t: 'roster', list: this.roster(), hostId: this.hostId, started: this.started });
  }
}

function stripPrivate(info) {
  // Don't leak the rate-limit bookkeeping fields to clients.
  return {
    id: info.id, name: info.name, color: info.color, slot: info.slot,
    ...(info.ai ? { ai: true, difficulty: info.difficulty } : {}),
  };
}

export async function onRequest(context) {
  const { request, env, params } = context;
  const upgrade = request.headers.get('Upgrade');
  if (upgrade !== 'websocket') {
    return new Response('expected websocket', { status: 426 });
  }
  const raw = String(params.code || 'LOBBY');
  const code = raw.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8) || 'LOBBY';
  const id = env.ROOMS.idFromName(code);
  const stub = env.ROOMS.get(id);
  return stub.fetch(request);
}
