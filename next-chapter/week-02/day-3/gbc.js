/* ──────────────────────────────────────────────────────────────────────────
   GAME BOY COLOR — every button works
   ──────────────────────────────────────────────────────────────────────────
   D-pad ↑/↓        scroll the LCD
   D-pad ←/→        prev/next page (or cycle cart focus on the menu)
   A                select / page-down
   B                back one level
   START            toggle PAUSED overlay
   SELECT           cycle LCD palette (CLASSIC → POCKET → COLOR)
   Volume wheel     mute/unmute SFX (click)
   Cartridge slot   "eject" → bounce back to /next-chapter/

   Keyboard:  arrows, Z=A, X=B, Enter=Start, Shift=Select, M=mute
   ────────────────────────────────────────────────────────────────────────── */

(() => {
  'use strict';

  const page    = document.body.dataset.page || 'menu';
  const screen  = document.querySelector('.screen-inner');
  const carts   = [...document.querySelectorAll('.cart')];

  /* ── per-page navigation graph ────────────────────────────────────────── */
  const NAV = {
    menu:    { left: null,            right: 'contact.html', back: '/next-chapter/' },
    contact: { left: './',            right: 'greet.html',   back: './' },
    greet:   { left: 'contact.html',  right: 'survey.html',  back: './' },
    survey:  { left: 'greet.html',    right: 'doubler.html', back: './' },
    doubler: { left: 'survey.html',   right: 'splits.html',  back: './' },
    splits:  { left: 'doubler.html',  right: null,           back: './' }
  };
  const nav = NAV[page] || NAV.menu;

  /* ── menu cart focus ─────────────────────────────────────────────────── */
  let focused = 0;
  function focusCart(i) {
    if (!carts.length) return;
    focused = (i + carts.length) % carts.length;
    carts.forEach((c, idx) => c.classList.toggle('focused', idx === focused));
    carts[focused].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  if (page === 'menu') focusCart(0);

  /* ── tiny chiptune SFX via Web Audio  ─────────────────────────────────── */
  let audioCtx = null;
  let muted = (() => {
    try { return localStorage.getItem('gbc-muted') === '1'; } catch (e) { return false; }
  })();
  function setMuted(m) {
    muted = m;
    document.body.classList.toggle('muted', muted);
    try { localStorage.setItem('gbc-muted', muted ? '1' : '0'); } catch (e) {}
  }
  setMuted(muted);

  function beep(freq = 880, ms = 60, type = 'square', gain = 0.06) {
    if (muted) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const t  = audioCtx.currentTime;
      const o  = audioCtx.createOscillator();
      const g  = audioCtx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, t);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(gain, t + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, t + ms / 1000);
      o.connect(g).connect(audioCtx.destination);
      o.start(t);
      o.stop(t + ms / 1000 + 0.02);
    } catch (e) {}
  }
  /* signature blips */
  const SFX = {
    move:    () => beep(660, 40, 'square'),
    select:  () => { beep(880, 50, 'square'); setTimeout(() => beep(1320, 60, 'square'), 55); },
    back:    () => beep(330, 70, 'triangle'),
    pause:   () => { beep(440, 80, 'square'); setTimeout(() => beep(523, 100, 'square'), 90); },
    palette: () => { beep(523, 40, 'square'); setTimeout(() => beep(659, 40, 'square'), 50); setTimeout(() => beep(784, 60, 'square'), 100); },
    error:   () => beep(180, 120, 'sawtooth'),
    mute:    () => beep(220, 80, 'triangle')
  };

  /* ── LCD palette cycling ──────────────────────────────────────────────── */
  const PALETTES = ['classic', 'pocket', 'color'];
  let palIndex = (() => {
    try { return Math.max(0, PALETTES.indexOf(localStorage.getItem('gbc-palette') || 'classic')); }
    catch (e) { return 0; }
  })();
  function applyPalette() {
    document.body.dataset.palette = PALETTES[palIndex];
    try { localStorage.setItem('gbc-palette', PALETTES[palIndex]); } catch (e) {}
  }
  applyPalette();

  /* ── pause overlay (Start) ────────────────────────────────────────────── */
  const pauseOverlay = document.querySelector('.pause-overlay');
  let paused = false;
  function togglePause() {
    paused = !paused;
    if (pauseOverlay) pauseOverlay.classList.toggle('on', paused);
    SFX.pause();
  }

  /* ── press visual feedback on hardware (also when keyboard is used) ───── */
  function flashEl(sel, cls = 'pressing', ms = 110) {
    const el = typeof sel === 'string' ? document.querySelector(sel) : sel;
    if (!el) return;
    el.classList.add(cls);
    setTimeout(() => el.classList.remove(cls), ms);
  }

  /* ── core actions ─────────────────────────────────────────────────────── */
  function dpadUp() {
    flashEl('.dpad .arrow.up');
    if (page === 'menu') { focusCart(focused - 1); SFX.move(); }
    else { screen?.scrollBy({ top: -120, behavior: 'smooth' }); SFX.move(); }
  }
  function dpadDown() {
    flashEl('.dpad .arrow.down');
    if (page === 'menu') { focusCart(focused + 1); SFX.move(); }
    else { screen?.scrollBy({ top: 120, behavior: 'smooth' }); SFX.move(); }
  }
  function dpadLeft() {
    flashEl('.dpad .arrow.left');
    if (nav.left) { SFX.back(); setTimeout(() => location.href = nav.left, 120); }
    else SFX.error();
  }
  function dpadRight() {
    flashEl('.dpad .arrow.right');
    if (nav.right) { SFX.select(); setTimeout(() => location.href = nav.right, 120); }
    else SFX.error();
  }
  function pressA() {
    flashEl('.btn-ab.a', 'press');
    if (page === 'menu' && carts[focused]) {
      SFX.select();
      const href = carts[focused].getAttribute('href');
      if (href) setTimeout(() => location.href = href, 140);
    } else if (screen) {
      // page-down on exercise pages
      const h = screen.clientHeight * 0.85;
      screen.scrollBy({ top: h, behavior: 'smooth' });
      SFX.select();
    }
  }
  function pressB() {
    flashEl('.btn-ab.b', 'press');
    if (paused) { togglePause(); return; }
    if (page !== 'menu' && screen && screen.scrollTop > 4) {
      // first B on a long page = scroll to top, second B = back
      screen.scrollTo({ top: 0, behavior: 'smooth' });
      SFX.back();
    } else if (nav.back) {
      SFX.back();
      setTimeout(() => location.href = nav.back, 140);
    } else SFX.error();
  }
  function pressStart() {
    const btn = document.querySelectorAll('.btn-ss')[1];
    flashEl(btn, 'press');
    togglePause();
  }
  function pressSelect() {
    const btn = document.querySelectorAll('.btn-ss')[0];
    flashEl(btn, 'press');
    palIndex = (palIndex + 1) % PALETTES.length;
    applyPalette();
    SFX.palette();
  }
  function toggleMute() {
    flashEl('.volume-wheel', 'spin', 400);
    setMuted(!muted);
    if (!muted) SFX.mute();
  }
  function ejectCartridge() {
    flashEl('.cart-slot', 'eject', 400);
    SFX.back();
    setTimeout(() => location.href = '/next-chapter/', 350);
  }

  /* ── click bindings ───────────────────────────────────────────────────── */
  document.querySelector('.btn-ab.a')?.addEventListener('click', pressA);
  document.querySelector('.btn-ab.b')?.addEventListener('click', pressB);
  document.querySelectorAll('.dpad .arrow.up').forEach(el => el.addEventListener('click', dpadUp));
  document.querySelectorAll('.dpad .arrow.down').forEach(el => el.addEventListener('click', dpadDown));
  document.querySelectorAll('.dpad .arrow.left').forEach(el => el.addEventListener('click', dpadLeft));
  document.querySelectorAll('.dpad .arrow.right').forEach(el => el.addEventListener('click', dpadRight));
  /* clicking the bars themselves → snap toward that side */
  const dpadEl = document.querySelector('.dpad');
  dpadEl?.addEventListener('click', (e) => {
    if (e.target.closest('.arrow')) return;
    const r = dpadEl.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const dx = x - r.width / 2, dy = y - r.height / 2;
    if (Math.abs(dx) > Math.abs(dy)) (dx < 0 ? dpadLeft : dpadRight)();
    else                              (dy < 0 ? dpadUp   : dpadDown)();
  });

  const ssBtns = document.querySelectorAll('.btn-ss');
  ssBtns[0]?.addEventListener('click', pressSelect);
  ssBtns[1]?.addEventListener('click', pressStart);

  document.querySelector('.volume-wheel')?.addEventListener('click', toggleMute);
  document.querySelector('.cart-slot')?.addEventListener('click', ejectCartridge);

  /* hovering a cart on menu also focuses it */
  carts.forEach((c, i) => {
    c.addEventListener('mouseenter', () => focusCart(i));
    c.addEventListener('focus',      () => focusCart(i));
  });

  /* ── keyboard ─────────────────────────────────────────────────────────── */
  const KMAP = {
    'ArrowUp':    dpadUp,
    'ArrowDown':  dpadDown,
    'ArrowLeft':  dpadLeft,
    'ArrowRight': dpadRight,
    'z':          pressA,    'Z': pressA,
    'x':          pressB,    'X': pressB,
    'Enter':      pressStart,
    'Shift':      pressSelect,
    'm':          toggleMute, 'M': toggleMute
  };
  document.addEventListener('keydown', (e) => {
    /* ignore when user is typing in a real text input */
    const tgt = e.target;
    if (tgt && (tgt.tagName === 'INPUT' || tgt.tagName === 'TEXTAREA' || tgt.isContentEditable)) return;
    const fn = KMAP[e.key];
    if (!fn) return;
    /* Shift fires on its own keydown; ignore auto-repeat to avoid spamming palette */
    if (e.key === 'Shift' && e.repeat) return;
    e.preventDefault();
    fn();
  });

  /* ── make the cart anchors not navigate on click; route through pressA ─ */
  carts.forEach((c, i) => {
    c.addEventListener('click', (e) => {
      e.preventDefault();
      focusCart(i);
      pressA();
    });
  });

  /* ── tiny boot blip ──────────────────────────────────────────────────── */
  /* user-gesture required for audio — wait for first interaction */
  const bootOnce = () => {
    document.removeEventListener('pointerdown', bootOnce);
    document.removeEventListener('keydown', bootOnce);
    /* Game Boy startup ding-ding */
    setTimeout(() => beep(523, 80, 'square'), 0);
    setTimeout(() => beep(784, 140, 'square'), 90);
  };
  document.addEventListener('pointerdown', bootOnce, { once: true });
  document.addEventListener('keydown',     bootOnce, { once: true });

})();
