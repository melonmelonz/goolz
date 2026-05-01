# goolz.org

One repo. One Cloudflare Pages project. Two surfaces:

1. **The Goolz Society** — the public root of the site. A small,
   voluntary society for the documentation and ethical observation of
   *goolz* (the small green creatures of forest and footnote). Est. 1893.
2. **`/next-chapter`** — a Windows 95 faux-desktop AI literacy course,
   served as a real path under the same domain. Has its own apps,
   filesystem, notepad, calculator, plasma demo, Minesweeper, and a
   networked four-player game.
3. **`/games/pwg`** — *Playing With Goolz*, a small four-wisp parlour
   game. Bomberman-shaped bones, a haunted-tower reskin, original
   chiptune in Phrygian mode, single-player against AI ghosts, and
   mobile-friendly controls.

Pure HTML/CSS for the Society pages (zero JS, zero deps). Vanilla JS +
Rust→WASM for the desktop. Cloudflare Pages + Functions + KV. No
framework. No build step on the Society side. `wasm-pack` for the two
WASM modules.

```
goolz/
├── index.html               Society landing
├── bestiary.html            seven recognized species
├── sightings.html           member-submitted reports
├── catching.html            catch-and-release protocol Σ-7
├── lore.html                origin myths · regional names
├── about.html               the caretaker + contact (subtle link to /next-chapter)
├── styles.css               shared retro stylesheet
├── _headers                 CSP, HSTS, Permissions-Policy, cache-control
├── wrangler.toml            two KV bindings + ROOMS Durable Object (PWG)
│
├── functions/api/
│   ├── visit.js             POST → +1 (per-IP dedup, 6h TTL)
│   ├── docs.js              GET list / POST save (notepad)
│   ├── docs/[name].js       GET fetch / DELETE one doc
│   └── pwg/ws/[code].js     PWG WebSocket relay + Room DO class
│                            (rate-limited, sanitized, AI-ghost aware)
│
├── games/
│   └── pwg/                 Playing With Goolz
│       ├── index.html       standalone client (lobby, audio, mobile, AI)
│       └── og.png           static Open Graph card
│
├── next-chapter/            ← the Win95 desktop, served as a real path
│   ├── index.html           full desktop (~380 KB; CF gzips → ~95 KB)
│   ├── calculator/          Rust → WASM scientific calculator
│   │   ├── src/lib.rs
│   │   ├── Cargo.toml
│   │   └── pkg/             built WASM (.js + .wasm)
│   └── demo/                Rust → WASM plasma renderer (Velocicalia)
│       ├── src/lib.rs
│       ├── Cargo.toml
│       └── pkg/
│
└── .github/workflows/deploy.yml   auto-deploy on push to main
```

## Routes

```
GET   /                          The Goolz Society landing
GET   /bestiary, /lore, ...      Society pages
GET   /next-chapter/             the Win95 desktop (real path, not a redirect)
GET   /next-chapter/calculator/pkg/...   WASM assets
GET   /next-chapter/demo/pkg/...         WASM assets
GET   /games/pwg/                        Playing With Goolz standalone client

GET   /api/visit                 read visitor count
POST  /api/visit                 +1 visit (per-IP dedup, 6h)
GET   /api/docs                  list saved notepad docs
POST  /api/docs                  save a notepad doc
GET   /api/docs/:name            fetch one
DEL   /api/docs/:name            delete one
WS    /api/pwg/ws/:code          PWG room WebSocket (DO-backed)
```

Old `/games/pwf3` paths 301 to `/games/pwg` via `_redirects`.

## The Society (root /)

Six static HTML pages with one shared stylesheet. The tone is dry,
slightly absurd, period-flavored. No emoji anywhere. The maintainer
appears only as "the caretaker." A subtle muted-green link at the
bottom of `about.html` ("a small lantern, kept elsewhere") is the only
pointer to `/next-chapter`.

### Visitor counter
Real, KV-backed (`GOOLZ_KV`), with per-IP dedup over a 6-hour rolling
window so a refresh doesn't bump the counter. SHA-256-hashed IP keys
mean no raw IPs are stored. Seeded at **1893** to match the Society's
founding year. Hard cap at 10 million as a sanity guard.

### Weekly rotation
A Claude Code cron job (durable, weekly) rotates "This Week's Goolz"
on the landing page and prepends 2-3 new sightings to `sightings.html`
every Monday morning.

## /next-chapter — the Win95 desktop

A complete faux-desktop in a single 8000-line `index.html` plus two
Rust→WASM modules. Apps that ship with the desktop:

- **My Computer** — drives, properties, system info
- **Course Files** — Week 1 Days 1–4 lesson notepads
- **Internet Explorer** — fake browser, real-feeling navigation
- **Notepad** — backed by `NOTEPAD_DOCS` KV; documents persist server-side
- **Calculator** — Rust→WASM scientific calculator with tax/tip mode
- **Demo.exe** — Velocicalia, a Rust→WASM plasma renderer with audio
- **Minesweeper** — full mouse/keyboard implementation
- **Playing With Goolz** — a four-wisp parlour game (Bomberman-shaped),
  embedded natively as a Win95 app window; speaks same-origin `wss://` to
  the Pages Function + Durable Object at `/api/pwg/ws/[code]`. Also
  available standalone at `/games/pwg/` with original chiptune music,
  AI ghosts for solo play, and mobile-friendly virtual controls.
- **Report Card / Study Plan** — version log + progress tracker
- **Recycle Bin** — does what it should

Plus easter eggs scattered through the chrome for anyone who pokes.

The desktop's WASM modules are loaded with relative imports
(`./calculator/pkg/calculator.js`, `./demo/pkg/demo.js`), so the whole
thing works the same locally and at `/next-chapter/`.

## Security headers

`_headers` applies a strict CSP plus HSTS, Permissions-Policy, and
nosniff to every route. The CSP is broad enough to allow:

- WebAssembly instantiation (`'wasm-unsafe-eval'`)
- The PWG WebSocket relay (same-origin `wss://goolz.org` + `wss://*.pages.dev`
  for previews) — served by the Pages Function at `/api/pwg/ws/[code]`
- `blob:` for canvas/audio buffers and any worker the WASM glue spawns

…but otherwise stays `'self'`-only. No third-party scripts, no
analytics, no ad networks, no Google fonts.

## Deploying

### Automatic (preferred)
A GitHub Action deploys on every push to `main` —
see `.github/workflows/deploy.yml`. It uses
`cloudflare/wrangler-action@v3` and needs two repo secrets:

```
CLOUDFLARE_API_TOKEN   (create one with Pages: Edit on this account)
CLOUDFLARE_ACCOUNT_ID  (already set)
```

Push to `main`, the workflow runs, the site is live.

### Manual
```bash
npx wrangler pages deploy . --project-name goolz --branch main \
  --commit-dirty=true --commit-message "release"
```

## Rebuilding the WASM modules

```bash
cd next-chapter/calculator && wasm-pack build --target web --out-dir pkg
cd next-chapter/demo       && wasm-pack build --target web --out-dir pkg
```

Built artifacts (`pkg/*.js` and `pkg/*.wasm`) are committed so the
deploy never has to compile Rust. `target/` is gitignored.

## KV bindings

Two namespaces, both bound in `wrangler.toml`:

| Binding         | Used by              | Purpose                          |
|-----------------|----------------------|----------------------------------|
| `GOOLZ_KV`      | `/api/visit`         | visitor counter + per-IP dedup   |
| `NOTEPAD_DOCS`  | `/api/docs[/...]`    | desktop's notepad document store |

## Why one project

The desktop and the Society used to live in two separate Pages
projects, which meant `goolz.org/next-chapter` had to be a redirect or
a proxy. Merging them gave a real `/next-chapter` URL, a single deploy
pipeline, and one set of headers to think about. They share a domain,
a CSP, and a caretaker — but nothing else; the surfaces stay distinct.

## Why goolz.org

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
