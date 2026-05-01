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
║   one repo · one Pages project · three surfaces · zero frameworks   ║
╚══════════════════════════════════════════════════════════════════════╝
```

> *The Goolz Society at the root, a Win95 desktop tucked at*
> *`/next-chapter`, and a small parlour game at `/games/pwg`.*
> *One Cloudflare Pages project. One sibling Worker. Two KV stores.*
> *No framework, no build step on the Society side, `wasm-pack` for*
> *the two WASM modules under the desktop.*

**[▶ goolz.org](https://goolz.org)** · **[▶ The Society](https://goolz.org/)** · **[▶ /next-chapter](https://goolz.org/next-chapter/)** · **[▶ Playing With Goolz](https://goolz.org/games/pwg/)**

---

## ░░ ✦ PLAYING WITH GOOLZ ░░

```
┌──────────────────────────────────────────────────────────────────────┐
│   four lanterns enter.   one drifts home.                            │
│                                                                      │
│   /games/pwg/      standalone client (full screen, mobile, audio)    │
│   GOOLZ.exe        embedded native window inside /next-chapter       │
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
✦ AI ghosts (solo mode)        wisp · wraith · banshee  (3 difficulties)
✦ mobile virtual D-pad         pointer:coarse → on-screen controls
✦ deeplinks + reconnect        ?room=CODE auto-joins; rejoin hint cached
✦ sudden-death tempo nudge     last seconds tighten the chiptune loop
✦ COPY LINK · audio toggle     one-tap share, one-tap silence (♪ key)
✦ fullscreen                   F key or ⛶ button; aspect-ratio preserved
✦ static OG card               games/pwg/og.png (1200×630, ~165 KB)
✦ a11y                         prefers-reduced-motion respected
```

**Embedded version** — inside `goolz.org/next-chapter`

The same game ships as a native Win95 app window (`#win-pwg`,
desktop icon `GOOLZ.exe`, candle glyph). Lighter reskin — palette
+ copy + glyph swap; no chat, no mobile D-pad, no AI roster. Speaks
the same relay.

**Server (`pwg-rooms` Worker)** — Durable Object per room, hardened:

```
≤ 24 concurrent clients per room
≤ 64 KB per inbound message  (oversized → drop socket)
~25 msg/s, burst 40 token bucket  (excess → drop socket)
sender id is server-stamped         (no spoofing)
allow-listed relay fields            (t, x, y, dir, alive, kind, …)
reserved control types never relayed (roster, welcome, leave)
host-only:                           start, reset, ai_add, ai_remove
names sanitized to printable ASCII   (quotes/backticks/angles stripped)
AI ghosts tracked on the DO, cleared if no humans remain
```

**Why a separate Worker?** Cloudflare Pages cannot declare Durable
Objects inline — `[[migrations]]` and DO bindings without `script_name`
are rejected at deploy time. So the `Room` DO lives in
`./pwg-rooms/`, deployed first; the goolz Pages project binds it via
`script_name = "pwg-rooms"`. The Pages Function at
`/api/pwg/ws/[code].js` only forwards the upgrade.

**Architecture note** — the game is client-authoritative. Map gen and
barrel loot stay seed-based (xmur3 + mulberry32) so all clients agree
on powerup drops without trusting any peer. The DO only gates seat
changes, stamps sender id, and broadcasts AI roster entries. AI
movement runs on the host client (or the solo player) and is not
networked.

---

## ░░ THE THREE SURFACES ░░

```
┌─────────────────────────────────────────────────────────────────────┐
│  PATH                APP                                            │
├─────────────────────────────────────────────────────────────────────┤
│  /                   The Goolz Society — quiet, period-flavored     │
│  /next-chapter/      Win95 desktop · AI literacy course             │
│  /games/pwg/         Playing With Goolz — standalone client         │
└─────────────────────────────────────────────────────────────────────┘
```

1. **The Goolz Society** *(root)* — a small voluntary society for the
   documentation and ethical observation of *goolz*: the small green
   creatures of forest and footnote. Established 1893. Six static
   pages, one shared stylesheet, zero JavaScript. Tone is dry,
   slightly absurd, period-flavored. No emoji anywhere on the
   Society pages. The maintainer appears only as "the caretaker."
2. **`/next-chapter`** — a Windows 95 faux-desktop AI literacy
   course, served as a real path on the same domain. Has its own
   apps, filesystem, notepad, calculator, plasma demo, Minesweeper,
   and a four-player parlour game.
3. **`/games/pwg`** — Playing With Goolz, see the section above.

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
├── about.html               the caretaker + a single muted lantern
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
├── next-chapter/            ← the Win95 desktop, served as a real path
│   ├── index.html           full desktop (~380 KB; CF gzips → ~95 KB)
│   ├── calculator/          Rust → WASM scientific calculator
│   │   ├── src/lib.rs
│   │   ├── Cargo.toml
│   │   └── pkg/             built WASM (.js + .wasm)
│   └── demo/                Rust → WASM plasma renderer
│       ├── src/lib.rs
│       ├── Cargo.toml
│       └── pkg/
│
├── pwg-rooms/               ← sibling Worker — Room Durable Object
│   ├── wrangler.toml        defines ROOMS DO + v1 migration
│   └── src/worker.js        Room class + relay + fetch handler
│
└── .github/workflows/deploy.yml   deploys Worker first, then Pages
```

The frontend is HTML/CSS for the Society pages and one big
`index.html` for the desktop. `functions/` compiles automatically as
**Pages Functions** — no separate Worker needed for KV-backed APIs.
The scientific calculator and demo plasma both call into **Rust/WASM**,
with pure-JS fallbacks. The PWG multiplayer relay is the one piece
that *does* need a separate Worker, because Pages can't host the DO.

---

## ░░ ROUTES ░░

```
GET   /                          The Goolz Society landing
GET   /bestiary, /lore, ...      Society pages
GET   /next-chapter/             the Win95 desktop (real path)
GET   /next-chapter/calculator/pkg/...   WASM assets
GET   /next-chapter/demo/pkg/...         WASM assets
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

## ░░ APP INTERNALS (the desktop) ░░

Each window is registered with a small lifecycle registry:

```
APPS = {
  'win-id': { init: ()=>…,  onOpen: ()=>…,  teardown: ()=>… }
}
```

- `init()`     — runs once, first time the window opens (lazy boot)
- `onOpen()`   — runs every open (resume animation loops, refresh data)
- `teardown()` — runs on close (kill timers + RAF loops, free memory)

This pattern was added in NCD v2.x after a memory-leak audit caught
three apps (Demo, Minesweeper, the old PWF3 iframe) leaving timers
and RAF loops running after their windows closed. Sessions bricking
after ~10 minutes — fixed.

PWG's embedded version (`#win-pwg`) honours the same lifecycle: the
WebSocket and game RAF tear down on window close, so leaving the app
doesn't leave a socket open in the background.

---

## ░░ WHAT'S ON THE DESKTOP ░░

```
┌─────────────────────────────────────────────────────────────────────┐
│  ICON     APP                  DESCRIPTION                          │
├─────────────────────────────────────────────────────────────────────┤
│  💻       My Computer          drives, properties, system info      │
│  📚       Course Files         Week 1 Days 1–4 lesson notepads      │
│  📄       Week 1 Day 1–4       daily labs with exercises            │
│  🌐       Internet Explorer    fake browser, real-feeling nav       │
│  📝       Notepad              KV-backed; docs persist server-side  │
│  🖩       Calculator           Rust→WASM scientific + tax/tip       │
│  🌀       Demo.exe             VELOCICÁLIA · 5-act frutiger demo    │
│  💣       Minesweeper          full mouse + keyboard implementation │
│  🕯       GOOLZ.exe            Playing With Goolz, native window    │
│  📊       Report Card          version log + study tracker          │
│  📄       [saved docs]         live icons; appear when you save     │
│  🗑       Recycle Bin          does what it should                  │
└─────────────────────────────────────────────────────────────────────┘
```

Plus easter eggs scattered through the chrome for anyone who pokes.
The desktop's WASM modules are loaded with relative imports
(`./calculator/pkg/calculator.js`, `./demo/pkg/demo.js`), so the whole
thing works the same locally and at `/next-chapter/`.

---

## ░░ DEMO.EXE — VELOCICÁLIA ░░

A 5-act frutiger-breakcore demoscene production running as a native
window.

```
HORIZON DRIFT  →  CORAL BLAZE  →  JUNGLE PULSE  →  NEON TUNNEL  →  KALEIDOCALIA
   dawn pink         noon blue       dusk magenta      night violet     aurora rainbow
```

**Effects pipeline** — all act-aware:
- Per-act sky LUT + aurora curtains
- 90 roadside obstacles (cones, glowing totems, crystals, neon rings, chevrons)
- Reactive dodge magnetism — car leans aside as obstacles approach
- Scripted jump arcs, camera roll/tilt, beat-locked vignette pulse
- Per-act forward-flying particles (mist → pollen → fireflies → sparks → confetti)
- Anamorphic lens flare across screen when the sun is on-camera
- Synthwave wireframe grid retracts during CORAL BLAZE
- RGB scanline displacement during JUNGLE PULSE break drops
- Mode-7 tunnel mirror with neon ribs in NEON TUNNEL
- Procedural LED slogans on totem signs (15-word demoscene pool)

**Audio engine** — original frutiger-breakcore synth, all Web Audio:
- FM bell arps, sidechain pads, amen-style break drums
- Hyperpop chord stabs, side-stick rim ticks
- Per-mode master EQ: muffled tunnel, top-open splash, warm sundown break

**Plasma core** lives in `next-chapter/demo/src/lib.rs`, compiled to
~15 KB of WASM. Status line shows `[Rust/WASM]` or `[JS]` depending on
which path runs.

---

## ░░ NOTEPAD + CLOUDFLARE KV ░░

Documents are stored globally in **Cloudflare KV** (`NOTEPAD_DOCS`).
Saving a file immediately updates the **live desktop icons** on the
right side of the desktop. Icons also auto-refresh every 30 seconds to
pick up saves from other browsers.

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

**Keyboard shortcuts:** `Ctrl+S` save · `Ctrl+N` new · `Ctrl+O` open

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

## ░░ REPORT CARD ░░

Daily study tracker for the AI literacy course (LeetCode + math
fundamentals). Lives inside `/next-chapter`.

```
┌─ Today ──────────────────────────────────────────┐
│  □  LeetCode (1 problem)                         │
│  □  Math fundamentals (15 min)                   │
└──────────────────────────────────────────────────┘

Tabs:  Today  ·  Week  ·  Log  ·  Grade
Menu:  Export · Import · Reset · Help
```

State is local-first (`localStorage` key `ncd-rc-v1`).
Import schema is validated field-by-field — no prototype pollution surface.

---

## ░░ KV BINDINGS ░░

| Binding         | Used by              | Purpose                          |
|-----------------|----------------------|----------------------------------|
| `GOOLZ_KV`      | `/api/visit`         | visitor counter + per-IP dedup   |
| `NOTEPAD_DOCS`  | `/api/docs[/...]`    | desktop's notepad document store |

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
✓  Window registry prevents double-init re-entrance
✓  All timers + RAF loops torn down on window close
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

### Rebuilding the WASM modules

```bash
cd next-chapter/calculator && wasm-pack build --target web --out-dir pkg
cd next-chapter/demo       && wasm-pack build --target web --out-dir pkg
```

Built artifacts (`pkg/*.js` and `pkg/*.wasm`) are committed so the
deploy never has to compile Rust. `target/` is gitignored.

---

## ░░ CHANGELOG ░░

```
┌────────┬────────────┬────────────────────────────────────────────────┐
│ DATE   │ CHANGE                                                      │
├────────┼────────────┼────────────────────────────────────────────────┤
│ 2026-05-01 │ pwg-rooms Worker split out — fix CF Pages DO deploy     │
│ 2026-05-01 │ Reset history; clean main; OG image; F-key fullscreen   │
│ 2026-05-01 │ Playing With Goolz reskin (violet/sage/candle/bone)     │
│            │   + AI ghosts · mobile D-pad · audio toggle · deeplink  │
│ 2026-05-01 │ /games/pwf3* → /games/pwg* 301; PWF3 standalone retired │
│ 2026-04-30 │ NCD v2.2.0 — VELOCICÁLIA novel-effects pass             │
│ 2026-04-30 │ NCD v2.1.0 — VELOCICÁLIA dodges, jumps, roll            │
│ 2026-04-30 │ NCD v2.0.0 — VELOCICÁLIA 5-act demo · Report Card       │
│            │   · timer-leak audit · API CSRF lockdown                │
│ 2026-04-30 │ NCD v1.9.0 — Demo.exe plasma → Rust/WASM build pipeline │
│ 2026-04-30 │ NCD v1.8.0 — Demo.exe · live desktop docs · start menu  │
│ 2026-04-30 │ NCD v1.7.0 — Notepad · Cloudflare KV global persistence │
│ 2026-04-30 │ NCD v1.6.0 — Week 1 Day 4 — Human Lane vs. AI Lane      │
│ 2026-04-29 │ NCD v1.5.x — Tip calculator · pre/post-tax · split      │
│ 2026-04-28 │ NCD v1.4.0 — Scientific calculator                      │
│ 2026-04-27 │ NCD v1.3.0 — Week 1 Day 3 — sequence/selection/iter     │
│ 2026-04-26 │ NCD v1.2.0 — Internet Explorer window                   │
│ 2026-04-25 │ NCD v1.1.0 — Week 1 Day 2 — Prompts & Code              │
│ 2026-04-24 │ NCD v1.0.0 — Initial release (then-standalone)          │
│ 2026-04   │ Merged NCD into goolz at /next-chapter ("one hegemony") │
│ 1893    · │ The Goolz Society convenes for the first time          │
└────────┴────────────────────────────────────────────────────────────┘
```

---

## ░░ ROADMAP ░░

```
[x] Demo.exe → Rust/WASM plasma core
[x] VELOCICÁLIA — full 5-act demoscene capstone
[x] Report Card — daily study tracker
[x] Memory-leak audit (window teardown lifecycle)
[x] CORS / CSRF lockdown on KV API
[x] Merge NCD into goolz at /next-chapter
[x] PWF3 → Playing With Goolz reskin + rename
[x] Split DO into sibling pwg-rooms Worker
[ ] Week 2 course content
[ ] Rust-in-Linux contribution alongside the WASM build
[ ] Audio sync visualizer for Demo.exe
[ ] PWG: spectator mode for the embedded Win95 window
```

---

## ░░ WHY ONE PROJECT ░░

The desktop and the Society used to live in two separate Pages
projects, which meant `goolz.org/next-chapter` had to be a redirect or
a proxy. Merging them gave a real `/next-chapter` URL, a single deploy
pipeline, and one set of headers to think about. They share a domain,
a CSP, and a caretaker — but nothing else; the surfaces stay distinct.

## ░░ WHY GOOLZ.ORG ░░

ICANN opened `.org` to general use in 2003. It is not restricted to
nonprofits. The Society uses it because it feels right for a small
voluntary society on a small voluntary subject. The desktop tucked at
`/next-chapter` is unrelated to the goolz, but happens to share a
caretaker.

---

```
        .-""""-.
       /  o  o  \
      |    --    |
       \________/
        gool kindly
```
