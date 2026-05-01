// Pages Function: WebSocket relay for Playing With Goolz.
//
// The actual Room Durable Object lives in the standalone `pwg-rooms`
// Worker (../../../../pwg-rooms). Cloudflare Pages does not allow
// inline DO declarations; the goolz Pages project binds to that Worker's
// DO via `script_name = "pwg-rooms"` (see ../../../../wrangler.toml).
//
// This Function just looks up the right DO instance by room code and
// hands the WebSocket upgrade off to it.

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
