```
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║      ░██████╗░░█████╗░░█████╗░██╗░░░░░███████╗                      ║
║      ██╔════╝░██╔══██╗██╔══██╗██║░░░░░╚════██║                      ║
║      ██║░░██╗░██║░░██║██║░░██║██║░░░░░░░███╔═╝                      ║
║      ██║░░╚██╗██║░░██║██║░░██║██║░░░░░██╔══╝░                       ║
║      ╚██████╔╝╚█████╔╝╚█████╔╝███████╗███████╗                      ║
║      ░╚═════╝░░╚════╝░░╚════╝░╚══════╝╚══════╝                      ║
║                                                                      ║
║      ░█▀▀░█▀█░█▀▀░░░█░█░█▀▀░█▀▀░█▀▀░█▄█░█▀█░█▀█░█░█                ║
║      ░█░░░█░█░█▀▀░░░█▀█░█▀▀░█░█░█▀▀░█░█░█░█░█░█░░█░                ║
║      ░▀▀▀░▀░▀░▀▀▀░░░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░▀░░▀░                ║
║                                                                      ║
║   one repo · one Pages project · two surfaces · zero frameworks    ║
╚══════════════════════════════════════════════════════════════════════╝
```

> *The Goolz Society at the root, and a small parlour game at*
> *`/games/pwg`. One Cloudflare Pages project. One sibling Worker.*
> *Two KV stores. No framework, no build step.*

**[▶ goolz.org](https://goolz.org)** · **[▶ The Society](https://goolz.org/)** · **[▶ Playing With Goolz](https://goolz.org/games/pwg/)**

---

## ░░ ✦ PLAYING WITH GOOLZ ░░

```
┌──────────────────────────────────────────────────────────────────────┐
│   four lanterns enter.   one drifts home.                            │
│                                                                      │
│   /games/pwg/      standalone client (full screen, mobile, audio)    │
│   /api/pwg/ws/:c   same-origin WebSocket → pwg-rooms Durable Object  │
└──────────────────────────────────────────────────────────────────────┘
```

A small four-wisp parlour game. Bomberman-shaped bones; ghostly
Lavender-Town reskin in violet, sage, candleflame, and bone. Originally
shipped as **Playing With Fire 3** on a separate Worker; renamed and
folded into goolz in May 2026. Old `/games/pwf3` paths 301 to
`/games/pwg` via `_redirects`.

**Standalone client** — `goolz.org/games/pwg/`

```
✦ haunted-tower palette        violet · sage · candle · bone
✦ original chiptune            D-Phrygian, Web Audio API, no files
✦ AI ghosts (solo mode)        wraith · banshee · phantom (one tuned planner)
✦ mobile virtual D-pad         pointer:coarse → on-screen controls
✦ deeplinks + reconnect        ?room=CODE auto-joins; rejoin hint cached
✦ sudden-death tempo nudge     last seconds tighten the chiptune loop
✦ COPY LINK · audio toggle     one-tap share, one-tap silence (♪ key)
✦ fullscreen                   F key or ⛶ button; aspect-ratio preserved
✦ static OG card               games/pwg/og.png (1200×630, ~165 KB)
✦ a11y                         prefers-reduced-motion respected
```

---

## ░░ BOT AI DESIGN ░░

```
┌──────────────────────────────────────────────────────────────────────┐
│  full-blown survival-first Bomberman planner                         │
│  · timed threat windows · time-aware BFS · two hard invariants       │
└──────────────────────────────────────────────────────────────────────┘
```

The earlier bots had a fatal flaw: they'd reach a barrel, drop a candle,
and walk straight into their own blast. The fix isn't "smarter heuristics" —
the heuristics were fine. The fix is making *survival a structural
invariant* of the planner, not a side effect.

### Why naive Bomberman bots die

A simple "is this tile in some bomb's blast?" check is **spatial only**.
It treats a fuse 0.1 s away the same as one 2.3 s away, and it can't
distinguish "I'll walk into this lane and out before it goes off" from
"the fire arrives the moment I step in." Worse, when the bot is *standing
on its own bomb*, every cardinal neighbour is in the blast — so the
spatial flee-check returns no escape and the bot defaults to its prior
intent (which was to drop the bomb in the first place). Suicide.

The whole-world fix is to **plan in time**, not just space. Bomberman is
a small game; the search is cheap.

### Threat model

For each bomb `b`:
- Detonation time:  `t_det(b) = b.fuseUntil`
- Blast tiles:      `aiBlastSet(b)` — cardinals out to `b.power`,
                    stopping at the **first wall or barrel** (this is
                    the bug the old embedded planner had — it stopped
                    only at walls and so over-counted real danger).
- Threat window on each blast tile:  `[t_det(b), t_det(b) + FIRE_TIME]`

**Chain reactions** are simulated to fixpoint. If bomb A's blast covers
bomb B's tile and `t_det(A) < t_det(B)`, then bomb B detonates at A's
time. Iterate until nothing changes (≤ 8 passes — `MAX_BOMBS = 9`).

**Active fires** already on the floor contribute `[0, f.until]`.

A **hypothetical bomb** the planner is considering dropping adds
`[now + BOMB_FUSE, now + BOMB_FUSE + FIRE_TIME]` *to its own tile* and
the propagated set. This is what lets the bot ask "if I drop here,
can I still survive?" before committing.

### Time-aware BFS

Every search is over the state space `(tile, hop)`:

```
arrival(h)   = now + h * tileTime
occupancy(h) = [arrival(h), arrival(h+1)]      ← bot is in tile during this
tileTime     = 1 / (BASE_SPEED + speedTier * SPEED_STEP)
```

Two predicates do all the work:

```
aiTileSafeAtHop(t, h)        no threat window on t overlaps occupancy(h)
aiTileFinallySafe(t, h)      every threat window on t has ended by arrival(h)
```

`SafeAtHop` controls **edges** (can the bot move into this tile at this
hop?). `FinallySafe` controls **goals** (can the bot stop on this tile
forever and live?). The escape BFS terminates only on a `FinallySafe`
node, which is what makes "I escaped" mean what it should.

### Two hard invariants

```
I1  Step gate     A bot will not step into a tile unsafe at hop 1.
                  Enforced both at planner edges and at aiTick/aiMove
                  before the actual movement vector is applied.

I2  Bomb gate     A bot will not drop a bomb unless aiTimedEscape with
                  the hypothetical bomb included finds a finally-safe
                  tile reachable in time.  Suicide-bombs become
                  structurally impossible — there is no code path that
                  drops a bomb without first proving an escape exists.
```

These two invariants are why the bots stopped killing themselves.
Everything else is just routing.

### The seven priorities

The planner walks them in order and returns the first match:

```
1.  in danger now           →  step toward nearest finally-safe tile
2.  powerup nearby          →  walk to it via timed-safe BFS
3.  enemy in bomb-line      →  if aiCanBomb, drop
4.  adjacent barrel         →  if aiCanBomb, drop
5.  nearest barrel          →  walk to it via timed-safe BFS
6.  nearest enemy           →  walk to it via timed-safe BFS
7.  none of the above       →  stand still (idling beats dying)
```

Idle as the *terminal* fallthrough is intentional. The previous version
fell back on "any open neighbour," which was a great way to walk into a
firelane the planner hadn't considered.

### Tunables

```
AI_THINK_INTERVAL = 0.18 s    (180 ms in the embedded build)
AI_ESCAPE_HOPS    = 12        deep enough to clear a 2-tile blast through
                              corridor geometry on a 15×11 map
AI_NAV_HOPS       = 30        long-haul barrel/enemy nav
```

Faster re-planning is the single biggest quality lever. At 180 ms a bot
re-decides about five times per tile-step — fast enough that "the lane
just got dangerous" becomes "flee" before the bot commits.

### One implementation

The planner lives only in `/games/pwg/index.html`, which uses
**discrete tile-step movement** (logical `tileX/tileY` plus an animated
step state); the planner returns a `{dir, bomb}` and the step engine
walks one tile at a time. One client, one planner — there is no second
port to keep in sync.

The five primitives that do all the work:

```
aiBlastSet · aiBuildThreats · aiTileSafeAtHop · aiTileFinallySafe ·
aiTimedEscape  +  aiSafeNavStep  +  aiCanBomb  +  aiPlan(Intent)
```

`AI_SPEED_FACTOR = 0.62` scales bot dt + step duration so ghosts move
at 62% of player speed without disturbing the timing math the planner
relies on (`aiTileTime` is rescaled in lockstep). Both `aiInDangerNow`
and `aiSafeNavStep` evaluate edges with `aiTileFinallySafe`, which is
why bots no longer juke after dropping a bomb or step back into their
own fire trail.

### Things deliberately left out

- **Difficulty levels.** The previous build had wisp/wraith/banshee
  tiers that mostly tuned think rate. With a planner that can prove its
  own survival, "easy mode" amounts to making it slower at thinking,
  which makes it *die more* — the opposite of what a casual player wants.
  One tuned planner, three named ghosts (wraith, banshee, phantom).
- **Predicting humans.** Bots reason about *bombs*, not future enemy
  positions. Predicting a human's path adds complexity for a game where
  bombs already make the future legible enough.
- **Powerup hoarding.** Priority 2 grabs *the nearest* safe powerup; the
  bot doesn't strategise about which kind. Bomberman powerups all
  compound, so greed beats picking.
- **Co-op AI.** Multiple AI bots in the same room don't coordinate.
  They each plan independently. Their survival invariants prevent them
  from bombing each other into a corner, which is enough.

---

## ░░ THE TWO SURFACES ░░

```
┌─────────────────────────────────────────────────────────────────────┐
│  PATH                APP                                            │
├─────────────────────────────────────────────────────────────────────┤
│  /                   The Goolz Society — quiet, period-flavored     │
│  /games/pwg/         Playing With Goolz — standalone client         │
└─────────────────────────────────────────────────────────────────────┘
```

1. **The Goolz Society** *(root)* — a small voluntary society for the
   documentation and ethical observation of *goolz*: the small green
   creatures of forest and footnote. Established 1893. Six static
   pages, one shared stylesheet, zero JavaScript. Tone is dry,
   slightly absurd, period-flavored. No emoji anywhere on the
   Society pages. The maintainer appears only as "the caretaker."
2. **`/games/pwg`** — Playing With Goolz, see the section above.

---

## ░░ ARCHITECTURE ░░

```
goolz/
│
├── index.html               Society landing
├── bestiary.html            seven recognized species
├── sightings.html           member-submitted reports
├── catching.html            catch-and-release protocol Σ-7
├── lore.html                origin myths · regional names
├── about.html               the caretaker
├── 404.html                 a courteous miss
├── styles.css               shared retro stylesheet
├── _headers                 CSP, HSTS, Permissions-Policy, cache
├── _redirects               /games/pwf3* → /games/pwg* (301)
├── robots.txt · sitemap.xml
├── wrangler.toml            two KV bindings + ROOMS via script_name
│
├── functions/api/
│   ├── visit.js             GET read · POST +1 (per-IP dedup, 6h TTL)
│   ├── docs.js              GET list · POST save (notepad)
│   ├── docs/[name].js       GET fetch · DELETE one doc
│   └── pwg/ws/[code].js     forwarder to the pwg-rooms DO
│
├── games/
│   └── pwg/                 Playing With Goolz
│       ├── index.html       standalone client (~3200 lines)
│       └── og.png           1200×630 Open Graph card
│
├── pwg-rooms/               ← sibling Worker — Room Durable Object
│   ├── wrangler.toml        defines ROOMS DO + v1 migration
│   └── src/worker.js        Room class + relay + fetch handler
│
└── .github/workflows/deploy.yml   deploys Worker first, then Pages
```

The frontend is plain HTML/CSS for the Society pages and one big
`index.html` for the game. `functions/` compiles automatically as
**Pages Functions** — no separate Worker needed for KV-backed APIs.
The PWG multiplayer relay is the one piece that *does* need a separate
Worker, because Pages can't host the DO.

---

## ░░ ROUTES ░░

```
GET   /                          The Goolz Society landing
GET   /bestiary, /lore, ...      Society pages
GET   /games/pwg/                Playing With Goolz standalone client

GET   /api/visit                 read visitor count
POST  /api/visit                 +1 visit (per-IP dedup, 6h)
GET   /api/docs                  list saved notepad docs
POST  /api/docs                  save a notepad doc
GET   /api/docs/:name            fetch one
DEL   /api/docs/:name            delete one
WS    /api/pwg/ws/:code          PWG room WebSocket (DO-backed)

301   /games/pwf3*               → /games/pwg*  (legacy redirect)
```

---

## ░░ NOTEPAD + CLOUDFLARE KV ░░

A small KV-backed document store (`NOTEPAD_DOCS`), exposed as four
same-origin JSON routes under `/api/docs`.

```
GET    /api/docs           → { docs: string[] }
POST   /api/docs           → { name, content }  →  { ok: true, name }
GET    /api/docs/:name     → { name, content }
DELETE /api/docs/:name     → { ok: true }
```

**Constraints enforced server-side:**

```
Name    → /^[\w\s\-\.()]+$/u  ·  max 80 chars
Content → max 200 KB
Origin  → allowlist (CSRF-safe; unknown browser origins → 403)
```

---

## ░░ VISITOR COUNTER ░░

Real, KV-backed (`GOOLZ_KV`), with per-IP dedup over a 6-hour rolling
window so a refresh doesn't bump the counter. SHA-256-hashed IP keys
mean no raw IPs are stored. Seeded at **1893** to match the Society's
founding year. Hard cap at 10 million as a sanity guard.

A Claude Code cron job (durable, weekly) rotates "This Week's Goolz"
on the landing page and prepends 2-3 new sightings to `sightings.html`
every Monday morning.

---

## ░░ KV BINDINGS ░░

| Binding         | Used by              | Purpose                          |
|-----------------|----------------------|----------------------------------|
| `GOOLZ_KV`      | `/api/visit`         | visitor counter + per-IP dedup   |
| `NOTEPAD_DOCS`  | `/api/docs[/...]`    | notepad document store           |

| DO Binding | Defined in        | Purpose                                |
|------------|-------------------|----------------------------------------|
| `ROOMS`    | `pwg-rooms` Worker | one DO instance per Playing With Goolz room |

---

## ░░ SECURITY POSTURE ░░

`_headers` applies a strict CSP plus HSTS, Permissions-Policy, and
nosniff to every route. The CSP is broad enough to allow:

- WebAssembly instantiation (`'wasm-unsafe-eval'`)
- The PWG WebSocket relay (same-origin `wss://goolz.org` + `wss://*.pages.dev` for previews)
- `blob:` for canvas/audio buffers and any worker the WASM glue spawns

…but otherwise stays `'self'`-only. No third-party scripts, no
analytics, no ad networks, no Google fonts.

```
✓  Strict CSP · HSTS · Permissions-Policy · nosniff on every route
✓  CORS allowlist on all API routes (no wildcard)
✓  Origin-based CSRF protection — unknown browsers get 403
✓  Server-side name + content validation (regex + length cap)
✓  KV writes idempotent; no auth surface beyond same-origin
✓  PWG relay: per-room cap, message size cap, token-bucket rate limit
✓  PWG relay: sender id server-stamped; allow-listed fields only
✓  PWG relay: reserved control types ('roster','welcome','leave') never relayed
✓  Notepad save guarded against double-POST race
✓  X-Frame-Options: SAMEORIGIN + frame-ancestors 'self' — no
   third-party embed
✓  JSON imports validated against prototype pollution
```

---

## ░░ BUILD + DEPLOY ░░

### Automatic (preferred)

A single GitHub Action handles everything on push to `main`. It runs
two steps:

1. **Deploy `pwg-rooms` Worker** — owns the `Room` DO + `v1` migration
2. **Deploy goolz Pages** — binds `ROOMS` via `script_name = "pwg-rooms"`

Step 1 must succeed first — Pages won't accept the DO binding unless
the Worker exists. Required repo secrets:

```
CLOUDFLARE_API_TOKEN   (Pages: Edit + Workers: Edit on this account)
CLOUDFLARE_ACCOUNT_ID  (already set)
```

### Manual

```bash
# 1. Deploy the Durable Object Worker first
cd pwg-rooms && npx wrangler deploy && cd ..

# 2. Then deploy Pages
npx wrangler pages deploy . --project-name goolz --branch main \
  --commit-dirty=true --commit-message "release"
```

### Local dev

```bash
# Pages + Functions + KV (serves source directly)
npx wrangler pages dev . --kv NOTEPAD_DOCS --kv GOOLZ_KV

# Worker (for PWG multiplayer testing)
cd pwg-rooms && npx wrangler dev
```

> Local KV is ephemeral — it does not sync with production.

---

## ░░ CHANGELOG ░░

```
┌────────┬────────────┬────────────────────────────────────────────────┐
│ DATE   │ CHANGE                                                      │
├────────┼────────────┼────────────────────────────────────────────────┤
│ 2026-05-01 │ AI cautious-pass — fixed BFS off-by-one (startStep sets │
│            │   p.tileX immediately so logical occupancy began one    │
│            │   tileTime EARLIER than the planner thought; bots were  │
│            │   walking onto fires that "should have just expired");  │
│            │   AI_SAFETY_PAD widens every threat window by 0.20s;    │
│            │   aiCanBomb requires escape in ≤6 hops (was 12); 1.20s  │
│ 2026-05-01 │ AI hardening — BFS now treats live bodies as walls; nav │
│            │   targets bomb-line tiles (not enemy tile); bomb-line   │
│            │   check blocks on bodies; I1 gate stalls instead of     │
│            │   force-replan (kills the juke-into-fire loop); host    │
│            │   broadcasts AI kill claims so victims ratify deaths    │
│ 2026-05-01 │ AI rework — survival-first time-aware planner; ghosts   │
│            │   walk only via finally-safe tiles; AI_SPEED_FACTOR     │
│            │   slows bots to 62%; ghosts now drive in network rooms  │
│            │   (host relays via aiId, host-only "BOOT" button)       │
│ 2026-05-01 │ pwg-rooms Worker split out — fix CF Pages DO deploy     │
│ 2026-05-01 │ Reset history; clean main; OG image; F-key fullscreen   │
│ 2026-05-01 │ Playing With Goolz reskin (violet/sage/candle/bone)     │
│            │   + AI ghosts · mobile D-pad · audio toggle · deeplink  │
│ 2026-05-01 │ /games/pwf3* → /games/pwg* 301; PWF3 standalone retired │
│            │   · timer-leak audit · API CSRF lockdown                │
│ 1893    · │ The Goolz Society convenes for the first time          │
└────────┴────────────────────────────────────────────────────────────┘
```

---

## ░░ ROADMAP ░░

```
[x] CORS / CSRF lockdown on KV API
[x] PWF3 → Playing With Goolz reskin + rename
[x] Split DO into sibling pwg-rooms Worker
[ ] PWG: spectator mode
```

---

```
        .-""""-.
       /  o  o  \
      |    --    |
       \________/
        gool kindly
```
