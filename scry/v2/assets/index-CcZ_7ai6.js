(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: true, subtree: true });
  function n(s) {
    const i = {};
    return s.integrity && (i.integrity = s.integrity), s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? i.credentials = "include" : s.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(s) {
    if (s.ep) return;
    s.ep = true;
    const i = n(s);
    fetch(s.href, i);
  }
})();
const dr = false;
var pn = Array.isArray, vr = Array.prototype.indexOf, Ge = Array.prototype.includes, Nt = Array.from, _r = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, hr = Object.prototype, pr = Array.prototype, gr = Object.getPrototypeOf, an = Object.isExtensible;
const br = () => {
};
function yr(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function gn() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function mr(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const H = 2, dt = 4, Dt = 8, bn = 1 << 24, ue = 16, oe = 32, xe = 64, qt = 128, te = 512, W = 1024, Y = 2048, de = 4096, G = 8192, ne = 16384, We = 32768, ln = 1 << 25, Ke = 65536, jt = 1 << 17, wr = 1 << 18, Qe = 1 << 19, Er = 1 << 20, ge = 1 << 25, qe = 65536, At = 1 << 21, vt = 1 << 22, Ee = 1 << 23, It = Symbol("$state"), he = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function xr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function kr(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ar(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Tr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Mr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Or() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Nr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Dr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Rr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ir = 1, Fr = 2, Cr = 16, Lr = 1, Pr = 2, z = Symbol(), qr = "http://www.w3.org/1999/xhtml";
function jr() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Br() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function yn(e) {
  return e === this.v;
}
function Wr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function mn(e) {
  return !Wr(e, this.v);
}
let zr = false, se = null;
function Ze(e) {
  se = e;
}
function ht(e, t = false, n) {
  se = { p: se, i: false, c: null, e: null, s: e, x: null, r: T, l: null };
}
function pt(e) {
  var t = se, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) jn(r);
  }
  return t.i = true, se = t.p, {};
}
function wn() {
  return true;
}
let Ye = [];
function Ur() {
  var e = Ye;
  Ye = [], yr(e);
}
function Fe(e) {
  if (Ye.length === 0) {
    var t = Ye;
    queueMicrotask(() => {
      t === Ye && Ur();
    });
  }
  Ye.push(e);
}
function En(e) {
  var t = T;
  if (t === null) return M.f |= Ee, e;
  if (!(t.f & We) && !(t.f & dt)) throw e;
  we(e, t);
}
function we(e, t) {
  for (; t !== null; ) {
    if (t.f & qt) {
      if (!(t.f & We)) throw e;
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    }
    t = t.parent;
  }
  throw e;
}
const Vr = -7169;
function q(e, t) {
  e.f = e.f & Vr | t;
}
function Yt(e) {
  e.f & te || e.deps === null ? q(e, W) : q(e, de);
}
function xn(e) {
  if (e !== null) for (const t of e) !(t.f & H) || !(t.f & qe) || (t.f ^= qe, xn(t.deps));
}
function kn(e, t, n) {
  e.f & Y ? t.add(e) : e.f & de && n.add(e), xn(e.deps), q(e, W);
}
const Me = /* @__PURE__ */ new Set();
let N = null, ae = null, Bt = null, Ft = false, He = null, wt = null;
var on = 0;
let Yr = 1;
class ke {
  id = Yr++;
  current = /* @__PURE__ */ new Map();
  previous = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  #o = /* @__PURE__ */ new Set();
  #e = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Map();
  #r = /* @__PURE__ */ new Map();
  #i = null;
  #t = [];
  #a = [];
  #f = /* @__PURE__ */ new Set();
  #u = /* @__PURE__ */ new Set();
  #l = /* @__PURE__ */ new Map();
  #d = /* @__PURE__ */ new Set();
  is_fork = false;
  #_ = false;
  #v = /* @__PURE__ */ new Set();
  #c() {
    return this.is_fork || this.#r.size > 0;
  }
  #g() {
    for (const r of this.#v) for (const s of r.#r.keys()) {
      for (var t = false, n = s; n.parent !== null; ) {
        if (this.#l.has(n)) {
          t = true;
          break;
        }
        n = n.parent;
      }
      if (!t) return true;
    }
    return false;
  }
  skip_effect(t) {
    this.#l.has(t) || this.#l.set(t, { d: [], m: [] }), this.#d.delete(t);
  }
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = this.#l.get(t);
    if (r) {
      this.#l.delete(t);
      for (var s of r.d) q(s, Y), n(s);
      for (s of r.m) q(s, de), n(s);
    }
    this.#d.add(t);
  }
  #h() {
    if (on++ > 1e3 && (Me.delete(this), Hr()), !this.#c()) {
      for (const a of this.#f) this.#u.delete(a), q(a, Y), this.schedule(a);
      for (const a of this.#u) q(a, de), this.schedule(a);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = He = [], r = [], s = wt = [];
    for (const a of t) try {
      this.#b(a, n, r);
    } catch (o) {
      throw Tn(a), o;
    }
    if (N = null, s.length > 0) {
      var i = ke.ensure();
      for (const a of s) i.schedule(a);
    }
    if (He = null, wt = null, this.#c() || this.#g()) {
      this.#p(r), this.#p(n);
      for (const [a, o] of this.#l) Sn(a, o);
    } else {
      this.#s.size === 0 && Me.delete(this), this.#f.clear(), this.#u.clear();
      for (const a of this.#n) a(this);
      this.#n.clear(), fn(r), fn(n), this.#i?.resolve();
    }
    var l = N;
    if (this.#t.length > 0) {
      const a = l ??= this;
      a.#t.push(...this.#t.filter((o) => !a.#t.includes(o)));
    }
    l !== null && (Me.add(l), l.#h());
  }
  #b(t, n, r) {
    t.f ^= W;
    for (var s = t.first; s !== null; ) {
      var i = s.f, l = (i & (oe | xe)) !== 0, a = l && (i & W) !== 0, o = a || (i & G) !== 0 || this.#l.has(s);
      if (!o && s.fn !== null) {
        l ? s.f ^= W : i & dt ? n.push(s) : bt(s) && (i & ue && this.#u.add(s), Je(s));
        var f = s.first;
        if (f !== null) {
          s = f;
          continue;
        }
      }
      for (; s !== null; ) {
        var u = s.next;
        if (u !== null) {
          s = u;
          break;
        }
        s = s.parent;
      }
    }
  }
  #p(t) {
    for (var n = 0; n < t.length; n += 1) kn(t[n], this.#f, this.#u);
  }
  capture(t, n, r = false) {
    t.v !== z && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Ee || (this.current.set(t, [n, r]), ae?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    N = this;
  }
  deactivate() {
    N = null, ae = null;
  }
  flush() {
    try {
      Ft = true, N = this, this.#h();
    } finally {
      on = 0, Bt = null, He = null, wt = null, Ft = false, N = null, ae = null, Ce.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Me.delete(this);
  }
  register_created_effect(t) {
    this.#a.push(t);
  }
  #y() {
    for (const u of Me) {
      var t = u.id < this.id, n = [];
      for (const [d, [v, _]] of this.current) {
        if (u.current.has(d)) {
          var r = u.current.get(d)[0];
          if (t && v !== r) u.current.set(d, [v, _]);
          else continue;
        }
        n.push(d);
      }
      var s = [...u.current.keys()].filter((d) => !this.current.has(d));
      if (s.length === 0) t && u.discard();
      else if (n.length > 0) {
        if (t) for (const d of this.#d) u.unskip_effect(d, (v) => {
          v.f & (ue | vt) ? u.schedule(v) : u.#p([v]);
        });
        u.activate();
        var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var a of n) An(a, s, i, l);
        l = /* @__PURE__ */ new Map();
        var o = [...u.current.keys()].filter((d) => this.current.has(d) ? this.current.get(d)[0] !== d : true);
        for (const d of this.#a) !(d.f & (ne | G | jt)) && Ht(d, o, l) && (d.f & (vt | ue) ? (q(d, Y), u.schedule(d)) : u.#f.add(d));
        if (u.#t.length > 0) {
          u.apply();
          for (var f of u.#t) u.#b(f, [], []);
          u.#t = [];
        }
        u.deactivate();
      }
    }
    for (const u of Me) u.#v.has(this) && (u.#v.delete(this), u.#v.size === 0 && !u.#c() && (u.activate(), u.#h()));
  }
  increment(t, n) {
    let r = this.#s.get(n) ?? 0;
    if (this.#s.set(n, r + 1), t) {
      let s = this.#r.get(n) ?? 0;
      this.#r.set(n, s + 1);
    }
  }
  decrement(t, n, r) {
    let s = this.#s.get(n) ?? 0;
    if (s === 1 ? this.#s.delete(n) : this.#s.set(n, s - 1), t) {
      let i = this.#r.get(n) ?? 0;
      i === 1 ? this.#r.delete(n) : this.#r.set(n, i - 1);
    }
    this.#_ || r || (this.#_ = true, Fe(() => {
      this.#_ = false, this.flush();
    }));
  }
  transfer_effects(t, n) {
    for (const r of t) this.#f.add(r);
    for (const r of n) this.#u.add(r);
    t.clear(), n.clear();
  }
  oncommit(t) {
    this.#n.add(t);
  }
  ondiscard(t) {
    this.#o.add(t);
  }
  on_fork_commit(t) {
    this.#e.add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of this.#e) t(this);
    this.#e.clear();
  }
  settled() {
    return (this.#i ??= gn()).promise;
  }
  static ensure() {
    if (N === null) {
      const t = N = new ke();
      Ft || (Me.add(N), Fe(() => {
        N === t && t.flush();
      }));
    }
    return N;
  }
  apply() {
    {
      ae = null;
      return;
    }
  }
  schedule(t) {
    if (Bt = t, t.b?.is_pending && t.f & (dt | Dt | bn) && !(t.f & We)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (He !== null && n === T && (M === null || !(M.f & H))) return;
      if (r & (xe | oe)) {
        if (!(r & W)) return;
        n.f ^= W;
      }
    }
    this.#t.push(n);
  }
}
function Hr() {
  try {
    Mr();
  } catch (e) {
    we(e, Bt);
  }
}
let _e = null;
function fn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (ne | G)) && bt(r) && (_e = /* @__PURE__ */ new Set(), Je(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Wn(r), _e?.size > 0)) {
        Ce.clear();
        for (const s of _e) {
          if (s.f & (ne | G)) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; ) _e.has(l) && (_e.delete(l), i.push(l)), l = l.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const o = i[a];
            o.f & (ne | G) || Je(o);
          }
        }
        _e.clear();
      }
    }
    _e = null;
  }
}
function An(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const i = s.f;
    i & H ? An(s, t, n, r) : i & (vt | ue) && !(i & Y) && Ht(s, t, r) && (q(s, Y), Gt(s));
  }
}
function Ht(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (Ge.call(t, s)) return true;
    if (s.f & H && Ht(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function Gt(e) {
  N.schedule(e);
}
function Sn(e, t) {
  if (!(e.f & oe && e.f & W)) {
    e.f & Y ? t.d.push(e) : e.f & de && t.m.push(e), q(e, W);
    for (var n = e.first; n !== null; ) Sn(n, t), n = n.next;
  }
}
function Tn(e) {
  q(e, W);
  for (var t = e.first; t !== null; ) Tn(t), t = t.next;
}
function Gr(e) {
  let t = 0, n = je(0), r;
  return () => {
    Jt() && (h(n), vs(() => (t === 0 && (r = bs(() => e(() => ot(n)))), t += 1, () => {
      Fe(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, ot(n));
      });
    })));
  };
}
var Kr = Ke | Qe;
function Zr(e, t, n, r) {
  new Xr(e, t, n, r);
}
class Xr {
  parent;
  is_pending = false;
  transform_error;
  #n;
  #o = null;
  #e;
  #s;
  #r;
  #i = null;
  #t = null;
  #a = null;
  #f = null;
  #u = 0;
  #l = 0;
  #d = false;
  #_ = /* @__PURE__ */ new Set();
  #v = /* @__PURE__ */ new Set();
  #c = null;
  #g = Gr(() => (this.#c = je(this.#u), () => {
    this.#c = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var l = T;
      l.b = this, l.f |= qt, r(i);
    }, this.parent = T.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#r = Qt(() => {
      this.#y();
    }, Kr);
  }
  #h() {
    try {
      this.#i = ee(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #b(t) {
    const n = this.#e.failed;
    n && (this.#a = ee(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #p() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = ee(() => t(this.#n)), Fe(() => {
      var n = this.#f = document.createDocumentFragment(), r = be();
      n.append(r), this.#i = this.#w(() => ee(() => this.#s(r))), this.#l === 0 && (this.#n.before(n), this.#f = null, Le(this.#t, () => {
        this.#t = null;
      }), this.#m(N));
    }));
  }
  #y() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#u = 0, this.#i = ee(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#f = document.createDocumentFragment();
        tn(this.#i, t);
        const n = this.#e.pending;
        this.#t = ee(() => n(this.#n));
      } else this.#m(N);
    } catch (n) {
      this.error(n);
    }
  }
  #m(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#v);
  }
  defer_effect(t) {
    kn(t, this.#_, this.#v);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #w(t) {
    var n = T, r = M, s = se;
    ve(this.#r), ie(this.#r), Ze(this.#r.ctx);
    try {
      return ke.ensure(), t();
    } catch (i) {
      return En(i), null;
    } finally {
      ve(n), ie(r), Ze(s);
    }
  }
  #E(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#E(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#m(n), this.#t && Le(this.#t, () => {
      this.#t = null;
    }), this.#f && (this.#n.before(this.#f), this.#f = null));
  }
  update_pending_count(t, n) {
    this.#E(t, n), this.#u += t, !(!this.#c || this.#d) && (this.#d = true, Fe(() => {
      this.#d = false, this.#c && Xe(this.#c, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#g(), h(this.#c);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    N?.is_fork ? (this.#i && N.skip_effect(this.#i), this.#t && N.skip_effect(this.#t), this.#a && N.skip_effect(this.#a), N.on_fork_commit(() => {
      this.#x(t);
    })) : this.#x(t);
  }
  #x(t) {
    this.#i && (X(this.#i), this.#i = null), this.#t && (X(this.#t), this.#t = null), this.#a && (X(this.#a), this.#a = null);
    var n = this.#e.onerror;
    let r = this.#e.failed;
    var s = false, i = false;
    const l = () => {
      if (s) {
        Br();
        return;
      }
      s = true, i && Rr(), this.#a !== null && Le(this.#a, () => {
        this.#a = null;
      }), this.#w(() => {
        this.#y();
      });
    }, a = (o) => {
      try {
        i = true, n?.(o, l), i = false;
      } catch (f) {
        we(f, this.#r && this.#r.parent);
      }
      r && (this.#a = this.#w(() => {
        try {
          return ee(() => {
            var f = T;
            f.b = this, f.f |= qt, r(this.#n, () => o, () => l);
          });
        } catch (f) {
          return we(f, this.#r.parent), null;
        }
      }));
    };
    Fe(() => {
      var o;
      try {
        o = this.transform_error(t);
      } catch (f) {
        we(f, this.#r && this.#r.parent);
        return;
      }
      o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(a, (f) => we(f, this.#r && this.#r.parent)) : a(o);
    });
  }
}
function Jr(e, t, n, r) {
  const s = Kt;
  var i = e.filter((v) => !v.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var l = T, a = Qr(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function f(v) {
    a();
    try {
      r(v);
    } catch (_) {
      l.f & ne || we(_, l);
    }
    St();
  }
  if (n.length === 0) {
    o.then(() => f(t.map(s)));
    return;
  }
  var u = Mn();
  function d() {
    Promise.all(n.map((v) => $r(v))).then((v) => f([...t.map(s), ...v])).catch((v) => we(v, l)).finally(() => u());
  }
  o ? o.then(() => {
    a(), d(), St();
  }) : d();
}
function Qr() {
  var e = T, t = M, n = se, r = N;
  return function(i = true) {
    ve(e), ie(t), Ze(n), i && !(e.f & ne) && (r?.activate(), r?.apply());
  };
}
function St(e = true) {
  ve(null), ie(null), Ze(null), e && N?.deactivate();
}
function Mn() {
  var e = T, t = e.b, n = N, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function Kt(e) {
  var t = H | Y;
  return T !== null && (T.f |= Qe), { ctx: se, deps: null, effects: null, equals: yn, f: t, fn: e, reactions: null, rv: 0, v: z, wv: 0, parent: T, ac: null };
}
function $r(e, t, n) {
  let r = T;
  r === null && xr();
  var s = void 0, i = je(z), l = !M, a = /* @__PURE__ */ new Map();
  return ds(() => {
    var o = T, f = gn();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(St);
    } catch (_) {
      f.reject(_), St();
    }
    var u = N;
    if (l) {
      if (o.f & We) var d = Mn();
      if (r.b.is_rendered()) a.get(u)?.reject(he), a.delete(u);
      else {
        for (const _ of a.values()) _.reject(he);
        a.clear();
      }
      a.set(u, f);
    }
    const v = (_, c = void 0) => {
      if (d) {
        var y = c === he;
        d(y);
      }
      if (!(c === he || o.f & ne)) {
        if (u.activate(), c) i.f |= Ee, Xe(i, c);
        else {
          i.f & Ee && (i.f ^= Ee), Xe(i, _);
          for (const [m, g] of a) {
            if (a.delete(m), m === u) break;
            g.reject(he);
          }
        }
        u.deactivate();
      }
    };
    f.promise.then(v, (_) => v(null, _ || "unknown"));
  }), Pn(() => {
    for (const o of a.values()) o.reject(he);
  }), new Promise((o) => {
    function f(u) {
      function d() {
        u === s ? o(i) : f(s);
      }
      u.then(d, d);
    }
    f(s);
  });
}
function es(e) {
  const t = Kt(e);
  return Vn(t), t;
}
function ts(e) {
  const t = Kt(e);
  return t.equals = mn, t;
}
function ns(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) X(t[n]);
  }
}
function Zt(e) {
  var t, n = T, r = e.parent;
  if (!Ae && r !== null && r.f & (ne | G)) return jr(), e.v;
  ve(r);
  try {
    e.f &= ~qe, ns(e), t = Kn(e);
  } finally {
    ve(n);
  }
  return t;
}
function On(e) {
  var t = Zt(e);
  if (!e.equals(t) && (e.wv = Hn(), (!N?.is_fork || e.deps === null) && (N !== null ? N.capture(e, t, true) : e.v = t, e.deps === null))) {
    q(e, W);
    return;
  }
  Ae || (ae !== null ? (Jt() || N?.is_fork) && ae.set(e, t) : Yt(e));
}
function rs(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(he), t.teardown = br, t.ac = null, _t(t, 0), $t(t));
}
function Nn(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Je(t);
}
let Wt = /* @__PURE__ */ new Set();
const Ce = /* @__PURE__ */ new Map();
let Dn = false;
function je(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: yn, rv: 0, wv: 0 };
  return n;
}
function j(e, t) {
  const n = je(e);
  return Vn(n), n;
}
function ss(e, t = false, n = true) {
  const r = je(e);
  return t || (r.equals = mn), r;
}
function O(e, t, n = false) {
  M !== null && (!le || M.f & jt) && wn() && M.f & (H | ue | vt | jt) && (re === null || !Ge.call(re, e)) && Dr();
  let r = n ? De(t) : t;
  return Xe(e, r, wt);
}
function Xe(e, t, n = null) {
  if (!e.equals(t)) {
    Ce.set(e, Ae ? t : e.v);
    var r = ke.ensure();
    if (r.capture(e, t), e.f & H) {
      const s = e;
      e.f & Y && Zt(s), ae === null && Yt(s);
    }
    e.wv = Hn(), Rn(e, Y, n), T !== null && T.f & W && !(T.f & (oe | xe)) && ($ === null ? ps([e]) : $.push(e)), !r.is_fork && Wt.size > 0 && !Dn && is();
  }
  return t;
}
function is() {
  Dn = false;
  for (const e of Wt) e.f & W && q(e, de), bt(e) && Je(e);
  Wt.clear();
}
function ot(e) {
  O(e, e.v + 1);
}
function Rn(e, t, n) {
  var r = e.reactions;
  if (r !== null) for (var s = r.length, i = 0; i < s; i++) {
    var l = r[i], a = l.f, o = (a & Y) === 0;
    if (o && q(l, t), a & H) {
      var f = l;
      ae?.delete(f), a & qe || (a & te && (T === null || !(T.f & At)) && (l.f |= qe), Rn(f, de, n));
    } else if (o) {
      var u = l;
      a & ue && _e !== null && _e.add(u), n !== null ? n.push(u) : Gt(u);
    }
  }
}
function De(e) {
  if (typeof e != "object" || e === null || It in e) return e;
  const t = gr(e);
  if (t !== hr && t !== pr) return e;
  var n = /* @__PURE__ */ new Map(), r = pn(e), s = j(0), i = Pe, l = (a) => {
    if (Pe === i) return a();
    var o = M, f = Pe;
    ie(null), dn(i);
    var u = a();
    return ie(o), dn(f), u;
  };
  return r && n.set("length", j(e.length)), new Proxy(e, { defineProperty(a, o, f) {
    (!("value" in f) || f.configurable === false || f.enumerable === false || f.writable === false) && Or();
    var u = n.get(o);
    return u === void 0 ? l(() => {
      var d = j(f.value);
      return n.set(o, d), d;
    }) : O(u, f.value, true), true;
  }, deleteProperty(a, o) {
    var f = n.get(o);
    if (f === void 0) {
      if (o in a) {
        const u = l(() => j(z));
        n.set(o, u), ot(s);
      }
    } else O(f, z), ot(s);
    return true;
  }, get(a, o, f) {
    if (o === It) return e;
    var u = n.get(o), d = o in a;
    if (u === void 0 && (!d || lt(a, o)?.writable) && (u = l(() => {
      var _ = De(d ? a[o] : z), c = j(_);
      return c;
    }), n.set(o, u)), u !== void 0) {
      var v = h(u);
      return v === z ? void 0 : v;
    }
    return Reflect.get(a, o, f);
  }, getOwnPropertyDescriptor(a, o) {
    var f = Reflect.getOwnPropertyDescriptor(a, o);
    if (f && "value" in f) {
      var u = n.get(o);
      u && (f.value = h(u));
    } else if (f === void 0) {
      var d = n.get(o), v = d?.v;
      if (d !== void 0 && v !== z) return { enumerable: true, configurable: true, value: v, writable: true };
    }
    return f;
  }, has(a, o) {
    if (o === It) return true;
    var f = n.get(o), u = f !== void 0 && f.v !== z || Reflect.has(a, o);
    if (f !== void 0 || T !== null && (!u || lt(a, o)?.writable)) {
      f === void 0 && (f = l(() => {
        var v = u ? De(a[o]) : z, _ = j(v);
        return _;
      }), n.set(o, f));
      var d = h(f);
      if (d === z) return false;
    }
    return u;
  }, set(a, o, f, u) {
    var d = n.get(o), v = o in a;
    if (r && o === "length") for (var _ = f; _ < d.v; _ += 1) {
      var c = n.get(_ + "");
      c !== void 0 ? O(c, z) : _ in a && (c = l(() => j(z)), n.set(_ + "", c));
    }
    if (d === void 0) (!v || lt(a, o)?.writable) && (d = l(() => j(void 0)), O(d, De(f)), n.set(o, d));
    else {
      v = d.v !== z;
      var y = l(() => De(f));
      O(d, y);
    }
    var m = Reflect.getOwnPropertyDescriptor(a, o);
    if (m?.set && m.set.call(u, f), !v) {
      if (r && typeof o == "string") {
        var g = n.get("length"), p = Number(o);
        Number.isInteger(p) && p >= g.v && O(g, p + 1);
      }
      ot(s);
    }
    return true;
  }, ownKeys(a) {
    h(s);
    var o = Reflect.ownKeys(a).filter((d) => {
      var v = n.get(d);
      return v === void 0 || v.v !== z;
    });
    for (var [f, u] of n) u.v !== z && !(f in a) && o.push(f);
    return o;
  }, setPrototypeOf() {
    Nr();
  } });
}
var un, In, Fn, Cn;
function as() {
  if (un === void 0) {
    un = window, In = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Fn = lt(t, "firstChild").get, Cn = lt(t, "nextSibling").get, an(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), an(n) && (n.__t = void 0);
  }
}
function be(e = "") {
  return document.createTextNode(e);
}
function Tt(e) {
  return Fn.call(e);
}
function gt(e) {
  return Cn.call(e);
}
function b(e, t) {
  return Tt(e);
}
function yt(e, t = false) {
  {
    var n = Tt(e);
    return n instanceof Comment && n.data === "" ? gt(n) : n;
  }
}
function w(e, t = 1, n = false) {
  let r = e;
  for (; t--; ) r = gt(r);
  return r;
}
function ls(e) {
  e.textContent = "";
}
function Ln() {
  return false;
}
function os(e, t, n) {
  return document.createElementNS(qr, e, void 0);
}
function Xt(e) {
  var t = M, n = T;
  ie(null), ve(null);
  try {
    return e();
  } finally {
    ie(t), ve(n);
  }
}
function fs(e) {
  T === null && (M === null && Tr(), Sr()), Ae && Ar();
}
function us(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Se(e, t) {
  var n = T;
  n !== null && n.f & G && (e |= G);
  var r = { ctx: se, deps: null, nodes: null, f: e | Y | te, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  N?.register_created_effect(r);
  var s = r;
  if (e & dt) He !== null ? He.push(r) : ke.ensure().schedule(r);
  else if (t !== null) {
    try {
      Je(r);
    } catch (l) {
      throw X(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & Qe) && (s = s.first, e & ue && e & Ke && s !== null && (s.f |= Ke));
  }
  if (s !== null && (s.parent = n, n !== null && us(s, n), M !== null && M.f & H && !(e & xe))) {
    var i = M;
    (i.effects ??= []).push(s);
  }
  return r;
}
function Jt() {
  return M !== null && !le;
}
function Pn(e) {
  const t = Se(Dt, null);
  return q(t, W), t.teardown = e, t;
}
function qn(e) {
  fs();
  var t = T.f, n = !M && (t & oe) !== 0 && (t & We) === 0;
  if (n) {
    var r = se;
    (r.e ??= []).push(e);
  } else return jn(e);
}
function jn(e) {
  return Se(dt | Er, e);
}
function cs(e) {
  ke.ensure();
  const t = Se(xe | Qe, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Le(t, () => {
      X(t), r(void 0);
    }) : (X(t), r(void 0));
  });
}
function ds(e) {
  return Se(vt | Qe, e);
}
function vs(e, t = 0) {
  return Se(Dt | t, e);
}
function U(e, t = [], n = [], r = []) {
  Jr(r, t, n, (s) => {
    Se(Dt, () => e(...s.map(h)));
  });
}
function Qt(e, t = 0) {
  var n = Se(ue | t, e);
  return n;
}
function ee(e) {
  return Se(oe | Qe, e);
}
function Bn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ae, r = M;
    cn(true), ie(null);
    try {
      t.call(null);
    } finally {
      cn(n), ie(r);
    }
  }
}
function $t(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Xt(() => {
      s.abort(he);
    });
    var r = n.next;
    n.f & xe ? n.parent = null : X(n, t), n = r;
  }
}
function _s(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & oe || X(t), t = n;
  }
}
function X(e, t = true) {
  var n = false;
  (t || e.f & wr) && e.nodes !== null && e.nodes.end !== null && (hs(e.nodes.start, e.nodes.end), n = true), q(e, ln), $t(e, t && !n), _t(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const i of r) i.stop();
  Bn(e), e.f ^= ln, e.f |= ne;
  var s = e.parent;
  s !== null && s.first !== null && Wn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function hs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : gt(e);
    e.remove(), e = n;
  }
}
function Wn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Le(e, t, n = true) {
  var r = [];
  zn(e, r, true);
  var s = () => {
    n && X(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var a of r) a.out(l);
  } else s();
}
function zn(e, t, n) {
  if (!(e.f & G)) {
    e.f ^= G;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const a of r) (a.is_global || n) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if (!(s.f & xe)) {
        var l = (s.f & Ke) !== 0 || (s.f & oe) !== 0 && (e.f & ue) !== 0;
        zn(s, t, l ? n : false);
      }
      s = i;
    }
  }
}
function en(e) {
  Un(e, true);
}
function Un(e, t) {
  if (e.f & G) {
    e.f ^= G, e.f & W || (q(e, Y), ke.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Ke) !== 0 || (n.f & oe) !== 0;
      Un(n, s ? t : false), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const l of i) (l.is_global || t) && l.in();
  }
}
function tn(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : gt(n);
    t.append(n), n = s;
  }
}
let Et = false, Ae = false;
function cn(e) {
  Ae = e;
}
let M = null, le = false;
function ie(e) {
  M = e;
}
let T = null;
function ve(e) {
  T = e;
}
let re = null;
function Vn(e) {
  M !== null && (re === null ? re = [e] : re.push(e));
}
let Z = null, J = 0, $ = null;
function ps(e) {
  $ = e;
}
let Yn = 1, Re = 0, Pe = Re;
function dn(e) {
  Pe = e;
}
function Hn() {
  return ++Yn;
}
function bt(e) {
  var t = e.f;
  if (t & Y) return true;
  if (t & H && (e.f &= ~qe), t & de) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (bt(i) && On(i), i.wv > e.wv) return true;
    }
    t & te && ae === null && q(e, W);
  }
  return false;
}
function Gn(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(re !== null && Ge.call(re, e))) for (var s = 0; s < r.length; s++) {
    var i = r[s];
    i.f & H ? Gn(i, t, false) : t === i && (n ? q(i, Y) : i.f & W && q(i, de), Gt(i));
  }
}
function Kn(e) {
  var t = Z, n = J, r = $, s = M, i = re, l = se, a = le, o = Pe, f = e.f;
  Z = null, J = 0, $ = null, M = f & (oe | xe) ? null : e, re = null, Ze(e.ctx), le = false, Pe = ++Re, e.ac !== null && (Xt(() => {
    e.ac.abort(he);
  }), e.ac = null);
  try {
    e.f |= At;
    var u = e.fn, d = u();
    e.f |= We;
    var v = e.deps, _ = N?.is_fork;
    if (Z !== null) {
      var c;
      if (_ || _t(e, J), v !== null && J > 0) for (v.length = J + Z.length, c = 0; c < Z.length; c++) v[J + c] = Z[c];
      else e.deps = v = Z;
      if (Jt() && e.f & te) for (c = J; c < v.length; c++) (v[c].reactions ??= []).push(e);
    } else !_ && v !== null && J < v.length && (_t(e, J), v.length = J);
    if (wn() && $ !== null && !le && v !== null && !(e.f & (H | de | Y))) for (c = 0; c < $.length; c++) Gn($[c], e);
    if (s !== null && s !== e) {
      if (Re++, s.deps !== null) for (let y = 0; y < n; y += 1) s.deps[y].rv = Re;
      if (t !== null) for (const y of t) y.rv = Re;
      $ !== null && (r === null ? r = $ : r.push(...$));
    }
    return e.f & Ee && (e.f ^= Ee), d;
  } catch (y) {
    return En(y);
  } finally {
    e.f ^= At, Z = t, J = n, $ = r, M = s, re = i, Ze(l), le = a, Pe = o;
  }
}
function gs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = vr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & H && (Z === null || !Ge.call(Z, t))) {
    var i = t;
    i.f & te && (i.f ^= te, i.f &= ~qe), i.v !== z && Yt(i), rs(i), _t(i, 0);
  }
}
function _t(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) gs(e, n[r]);
}
function Je(e) {
  var t = e.f;
  if (!(t & ne)) {
    q(e, W);
    var n = T, r = Et;
    T = e, Et = true;
    try {
      t & (ue | bn) ? _s(e) : $t(e), Bn(e);
      var s = Kn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Yn;
      var i;
      dr && zr && e.f & Y && e.deps;
    } finally {
      Et = r, T = n;
    }
  }
}
function h(e) {
  var t = e.f, n = (t & H) !== 0;
  if (M !== null && !le) {
    var r = T !== null && (T.f & ne) !== 0;
    if (!r && (re === null || !Ge.call(re, e))) {
      var s = M.deps;
      if (M.f & At) e.rv < Re && (e.rv = Re, Z === null && s !== null && s[J] === e ? J++ : Z === null ? Z = [e] : Z.push(e));
      else {
        (M.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [M] : Ge.call(i, M) || i.push(M);
      }
    }
  }
  if (Ae && Ce.has(e)) return Ce.get(e);
  if (n) {
    var l = e;
    if (Ae) {
      var a = l.v;
      return (!(l.f & W) && l.reactions !== null || Xn(l)) && (a = Zt(l)), Ce.set(l, a), a;
    }
    var o = (l.f & te) === 0 && !le && M !== null && (Et || (M.f & te) !== 0), f = (l.f & We) === 0;
    bt(l) && (o && (l.f |= te), On(l)), o && !f && (Nn(l), Zn(l));
  }
  if (ae?.has(e)) return ae.get(e);
  if (e.f & Ee) throw e.v;
  return e.v;
}
function Zn(e) {
  if (e.f |= te, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & H && !(t.f & te) && (Nn(t), Zn(t));
}
function Xn(e) {
  if (e.v === z) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (Ce.has(t) || t.f & H && Xn(t)) return true;
  return false;
}
function bs(e) {
  var t = le;
  try {
    return le = true, e();
  } finally {
    le = t;
  }
}
const ys = ["touchstart", "touchmove"];
function ms(e) {
  return ys.includes(e);
}
const tt = Symbol("events"), Jn = /* @__PURE__ */ new Set(), zt = /* @__PURE__ */ new Set();
function ws(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Ut.call(t, i), !i.cancelBubble) return Xt(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fe(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Ct(e, t, n, r, s) {
  var i = { capture: r, passive: s }, l = ws(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Pn(() => {
    t.removeEventListener(e, l, i);
  });
}
function fe(e, t, n) {
  (t[tt] ??= {})[e] = n;
}
function Rt(e) {
  for (var t = 0; t < e.length; t++) Jn.add(e[t]);
  for (var n of zt) n(e);
}
let vn = null;
function Ut(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], i = s[0] || e.target;
  vn = e;
  var l = 0, a = vn === e && e[tt];
  if (a) {
    var o = s.indexOf(a);
    if (o !== -1 && (t === document || t === window)) {
      e[tt] = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1) return;
    o <= f && (l = o);
  }
  if (i = s[l] || e.target, i !== t) {
    _r(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var u = M, d = T;
    ie(null), ve(null);
    try {
      for (var v, _ = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var y = i[tt]?.[r];
          y != null && (!i.disabled || e.target === i) && y.call(i, e);
        } catch (m) {
          v ? _.push(m) : v = m;
        }
        if (e.cancelBubble || c === t || c === null) break;
        i = c;
      }
      if (v) {
        for (let m of _) queueMicrotask(() => {
          throw m;
        });
        throw v;
      }
    } finally {
      e[tt] = t, delete e.currentTarget, ie(u), ve(d);
    }
  }
}
const Es = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function xs(e) {
  return Es?.createHTML(e) ?? e;
}
function ks(e) {
  var t = os("template");
  return t.innerHTML = xs(e.replaceAll("<!>", "<!---->")), t.content;
}
function Mt(e, t) {
  var n = T;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function L(e, t) {
  var n = (t & Lr) !== 0, r = (t & Pr) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ks(i ? e : "<!>" + e), n || (s = Tt(s)));
    var l = r || In ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var a = Tt(l), o = l.lastChild;
      Mt(a, o);
    } else Mt(l, l);
    return l;
  };
}
function As(e = "") {
  {
    var t = be(e + "");
    return Mt(t, t), t;
  }
}
function Ss() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = be();
  return e.append(t, n), Mt(t, n), e;
}
function F(e, t) {
  e !== null && e.before(t);
}
function A(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ts(e, t) {
  return Ms(e, t);
}
const mt = /* @__PURE__ */ new Map();
function Ms(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: l = true, transformError: a }) {
  as();
  var o = void 0, f = cs(() => {
    var u = n ?? t.appendChild(be());
    Zr(u, { pending: () => {
    } }, (_) => {
      ht({});
      var c = se;
      i && (c.c = i), s && (r.$$events = s), o = e(_, r) || {}, pt();
    }, a);
    var d = /* @__PURE__ */ new Set(), v = (_) => {
      for (var c = 0; c < _.length; c++) {
        var y = _[c];
        if (!d.has(y)) {
          d.add(y);
          var m = ms(y);
          for (const D of [t, document]) {
            var g = mt.get(D);
            g === void 0 && (g = /* @__PURE__ */ new Map(), mt.set(D, g));
            var p = g.get(y);
            p === void 0 ? (D.addEventListener(y, Ut, { passive: m }), g.set(y, 1)) : g.set(y, p + 1);
          }
        }
      }
    };
    return v(Nt(Jn)), zt.add(v), () => {
      for (var _ of d) for (const m of [t, document]) {
        var c = mt.get(m), y = c.get(_);
        --y == 0 ? (m.removeEventListener(_, Ut), c.delete(_), c.size === 0 && mt.delete(m)) : c.set(_, y);
      }
      zt.delete(v), u !== n && u.parentNode?.removeChild(u);
    };
  });
  return Os.set(o, f), o;
}
let Os = /* @__PURE__ */ new WeakMap();
class Ns {
  anchor;
  #n = /* @__PURE__ */ new Map();
  #o = /* @__PURE__ */ new Map();
  #e = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Set();
  #r = true;
  constructor(t, n = true) {
    this.anchor = t, this.#r = n;
  }
  #i = (t) => {
    if (this.#n.has(t)) {
      var n = this.#n.get(t), r = this.#o.get(n);
      if (r) en(r), this.#s.delete(n);
      else {
        var s = this.#e.get(n);
        s && (this.#o.set(n, s.effect), this.#e.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [i, l] of this.#n) {
        if (this.#n.delete(i), i === t) break;
        const a = this.#e.get(l);
        a && (X(a.effect), this.#e.delete(l));
      }
      for (const [i, l] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const a = () => {
          if (Array.from(this.#n.values()).includes(i)) {
            var f = document.createDocumentFragment();
            tn(l, f), f.append(be()), this.#e.set(i, { effect: l, fragment: f });
          } else X(l);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !r ? (this.#s.add(i), Le(l, a, false)) : a();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (X(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = N, s = Ln();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var i = document.createDocumentFragment(), l = be();
      i.append(l), this.#e.set(t, { effect: ee(() => n(l)), fragment: i });
    } else this.#o.set(t, ee(() => n(this.anchor)));
    if (this.#n.set(r, t), s) {
      for (const [a, o] of this.#o) a === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [a, o] of this.#e) a === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(this.#i), r.ondiscard(this.#t);
    } else this.#i(r);
  }
}
function Q(e, t, n = false) {
  var r = new Ns(e), s = n ? Ke : 0;
  function i(l, a) {
    r.ensure(l, a);
  }
  Qt(() => {
    var l = false;
    t((a, o = 0) => {
      l = true, i(o, a);
    }), l || i(-1, null);
  }, s);
}
function nt(e, t) {
  return t;
}
function Ds(e, t, n) {
  for (var r = [], s = t.length, i, l = t.length, a = 0; a < s; a++) {
    let d = t[a];
    Le(d, () => {
      if (i) {
        if (i.pending.delete(d), i.done.add(d), i.pending.size === 0) {
          var v = e.outrogroups;
          Vt(e, Nt(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var o = r.length === 0 && n !== null;
    if (o) {
      var f = n, u = f.parentNode;
      ls(u), u.append(f), e.items.clear();
    }
    Vt(e, t, !o);
  } else i = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Vt(e, t, n = true) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const a of l) r.add(e.items.get(a).e);
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (r?.has(i)) {
      i.f |= ge;
      const l = document.createDocumentFragment();
      tn(i, l);
    } else X(t[s], n);
  }
}
var _n;
function rt(e, t, n, r, s, i = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  {
    var o = e;
    l = o.appendChild(be());
  }
  var f = null, u = ts(() => {
    var p = n();
    return pn(p) ? p : p == null ? [] : Nt(p);
  }), d, v = /* @__PURE__ */ new Map(), _ = true;
  function c(p) {
    g.effect.f & ne || (g.pending.delete(p), g.fallback = f, Rs(g, d, l, t, r), f !== null && (d.length === 0 ? f.f & ge ? (f.f ^= ge, st(f, null, l)) : en(f) : Le(f, () => {
      f = null;
    })));
  }
  function y(p) {
    g.pending.delete(p);
  }
  var m = Qt(() => {
    d = h(u);
    for (var p = d.length, D = /* @__PURE__ */ new Set(), R = N, B = Ln(), C = 0; C < p; C += 1) {
      var k = d[C], E = r(k, C), x = _ ? null : a.get(E);
      x ? (x.v && Xe(x.v, k), x.i && Xe(x.i, C), B && R.unskip_effect(x.e)) : (x = Is(a, _ ? l : _n ??= be(), k, E, C, s, t, n), _ || (x.e.f |= ge), a.set(E, x)), D.add(E);
    }
    if (p === 0 && i && !f && (_ ? f = ee(() => i(l)) : (f = ee(() => i(_n ??= be())), f.f |= ge)), p > D.size && kr(), !_) if (v.set(R, D), B) {
      for (const [S, P] of a) D.has(S) || R.skip_effect(P.e);
      R.oncommit(c), R.ondiscard(y);
    } else c(R);
    h(u);
  }), g = { effect: m, items: a, pending: v, outrogroups: null, fallback: f };
  _ = false;
}
function et(e) {
  for (; e !== null && !(e.f & oe); ) e = e.next;
  return e;
}
function Rs(e, t, n, r, s) {
  var i = t.length, l = e.items, a = et(e.effect.first), o, f = null, u = [], d = [], v, _, c, y;
  for (y = 0; y < i; y += 1) {
    if (v = t[y], _ = s(v, y), c = l.get(_).e, e.outrogroups !== null) for (const E of e.outrogroups) E.pending.delete(c), E.done.delete(c);
    if (c.f & G && en(c), c.f & ge) if (c.f ^= ge, c === a) st(c, null, n);
    else {
      var m = f ? f.next : a;
      c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), me(e, f, c), me(e, c, m), st(c, m, n), f = c, u = [], d = [], a = et(f.next);
      continue;
    }
    if (c !== a) {
      if (o !== void 0 && o.has(c)) {
        if (u.length < d.length) {
          var g = d[0], p;
          f = g.prev;
          var D = u[0], R = u[u.length - 1];
          for (p = 0; p < u.length; p += 1) st(u[p], g, n);
          for (p = 0; p < d.length; p += 1) o.delete(d[p]);
          me(e, D.prev, R.next), me(e, f, D), me(e, R, g), a = g, f = R, y -= 1, u = [], d = [];
        } else o.delete(c), st(c, a, n), me(e, c.prev, c.next), me(e, c, f === null ? e.effect.first : f.next), me(e, f, c), f = c;
        continue;
      }
      for (u = [], d = []; a !== null && a !== c; ) (o ??= /* @__PURE__ */ new Set()).add(a), d.push(a), a = et(a.next);
      if (a === null) continue;
    }
    c.f & ge || u.push(c), f = c, a = et(c.next);
  }
  if (e.outrogroups !== null) {
    for (const E of e.outrogroups) E.pending.size === 0 && (Vt(e, Nt(E.done)), e.outrogroups?.delete(E));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || o !== void 0) {
    var B = [];
    if (o !== void 0) for (c of o) c.f & G || B.push(c);
    for (; a !== null; ) !(a.f & G) && a !== e.fallback && B.push(a), a = et(a.next);
    var C = B.length;
    if (C > 0) {
      var k = i === 0 ? n : null;
      Ds(e, B, k);
    }
  }
}
function Is(e, t, n, r, s, i, l, a) {
  var o = l & Ir ? l & Cr ? je(n) : ss(n, false, false) : null, f = l & Fr ? je(s) : null;
  return { v: o, i: f, e: ee(() => (i(t, o ?? n, f ?? s, a), () => {
    e.delete(r);
  })) };
}
function st(e, t, n) {
  if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, i = t && !(t.f & ge) ? t.nodes.start : n; r !== null; ) {
    var l = gt(r);
    if (i.before(r), r === s) return;
    r = l;
  }
}
function me(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const hn = [...` 	
\r\f\xA0\v\uFEFF`];
function Fs(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var s of Object.keys(n)) if (n[s]) r = r ? r + " " + s : s;
    else if (r.length) for (var i = s.length, l = 0; (l = r.indexOf(s, l)) >= 0; ) {
      var a = l + i;
      (l === 0 || hn.includes(r[l - 1])) && (a === r.length || hn.includes(r[a])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(a + 1) : l = a;
    }
  }
  return r === "" ? null : r;
}
function Ot(e, t, n, r, s, i) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var a = Fs(n, r, i);
    a == null ? e.removeAttribute("class") : e.className = a, e.__className = n;
  } else if (i && s !== i) for (var o in i) {
    var f = !!i[o];
    (s == null || f !== !!s[o]) && e.classList.toggle(o, f);
  }
  return i;
}
const Cs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Cs);
function Ls() {
  I._start();
}
function Ps(e) {
  let t, n;
  try {
    const i = I.__wbindgen_add_to_stack_pointer(-16), l = nn(e, I.__wbindgen_export), a = Be;
    I.detect_format(i, l, a);
    var r = ce().getInt32(i + 4 * 0, true), s = ce().getInt32(i + 4 * 1, true);
    return t = r, n = s, xt(r, s);
  } finally {
    I.__wbindgen_add_to_stack_pointer(16), I.__wbindgen_export3(t, n, 1);
  }
}
function qs(e, t, n) {
  try {
    const l = I.__wbindgen_add_to_stack_pointer(-16), a = nn(e, I.__wbindgen_export), o = Be;
    I.hex_rows(l, a, o, t, n);
    var r = ce().getInt32(l + 4 * 0, true), s = ce().getInt32(l + 4 * 1, true), i = Ws(r, s).slice();
    return I.__wbindgen_export3(r, s * 4, 4), i;
  } finally {
    I.__wbindgen_add_to_stack_pointer(16);
  }
}
function js(e) {
  try {
    const s = I.__wbindgen_add_to_stack_pointer(-16), i = nn(e, I.__wbindgen_export), l = Be;
    I.parse_elf(s, i, l);
    var t = ce().getInt32(s + 4 * 0, true), n = ce().getInt32(s + 4 * 1, true), r = ce().getInt32(s + 4 * 2, true);
    if (r) throw Ie(n);
    return Ie(t);
  } finally {
    I.__wbindgen_add_to_stack_pointer(16);
  }
}
function Qn() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(xt(t, n));
    return Oe(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(at(n)), s = zs(r, I.__wbindgen_export, I.__wbindgen_export2), i = Be;
    ce().setInt32(t + 4, i, true), ce().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(xt(t, n));
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return Oe(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return Oe(t);
  }, __wbg_set_6be42768c690e380: function(t, n, r) {
    at(t)[Ie(n)] = Ie(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    at(t)[n >>> 0] = Ie(r);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return Oe(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = xt(t, n);
    return Oe(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return Oe(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = at(t);
    return Oe(n);
  }, __wbindgen_object_drop_ref: function(t) {
    Ie(t);
  } } };
}
function Oe(e) {
  ut === pe.length && pe.push(pe.length + 1);
  const t = ut;
  return ut = pe[t], pe[t] = e, t;
}
function Bs(e) {
  e < 1028 || (pe[e] = ut, ut = e);
}
function Ws(e, t) {
  e = e >>> 0;
  const n = ce(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(Ie(n.getUint32(s, true)));
  return r;
}
let Ne = null;
function ce() {
  return (Ne === null || Ne.buffer.detached === true || Ne.buffer.detached === void 0 && Ne.buffer !== I.memory.buffer) && (Ne = new DataView(I.memory.buffer)), Ne;
}
function xt(e, t) {
  return Vs(e >>> 0, t);
}
let it = null;
function ft() {
  return (it === null || it.byteLength === 0) && (it = new Uint8Array(I.memory.buffer)), it;
}
function at(e) {
  return pe[e];
}
let pe = new Array(1024).fill(void 0);
pe.push(void 0, null, true, false);
let ut = pe.length;
function nn(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return ft().set(e, n / 1), Be = e.length, n;
}
function zs(e, t, n) {
  if (n === void 0) {
    const a = ct.encode(e), o = t(a.length, 1) >>> 0;
    return ft().subarray(o, o + a.length).set(a), Be = a.length, o;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const i = ft();
  let l = 0;
  for (; l < r; l++) {
    const a = e.charCodeAt(l);
    if (a > 127) break;
    i[s + l] = a;
  }
  if (l !== r) {
    l !== 0 && (e = e.slice(l)), s = n(s, r, r = l + e.length * 3, 1) >>> 0;
    const a = ft().subarray(s + l, s + r), o = ct.encodeInto(e, a);
    l += o.written, s = n(s, r, l, 1) >>> 0;
  }
  return Be = l, s;
}
function Ie(e) {
  const t = at(e);
  return Bs(e), t;
}
let kt = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
kt.decode();
const Us = 2146435072;
let Lt = 0;
function Vs(e, t) {
  return Lt += t, Lt >= Us && (kt = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), kt.decode(), Lt = t), kt.decode(ft().subarray(e, e + t));
}
const ct = new TextEncoder();
"encodeInto" in ct || (ct.encodeInto = function(e, t) {
  const n = ct.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let Be = 0, I;
function $n(e, t) {
  return I = e.exports, Ne = null, it = null, I.__wbindgen_start(), I;
}
async function Ys(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (s) {
      if (e.ok && n(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", s);
      else throw s;
    }
    const r = await e.arrayBuffer();
    return await WebAssembly.instantiate(r, t);
  } else {
    const r = await WebAssembly.instantiate(e, t);
    return r instanceof WebAssembly.Instance ? { instance: r, module: e } : r;
  }
  function n(r) {
    switch (r) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function Hs(e) {
  if (I !== void 0) return I;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = Qn();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return $n(n);
}
async function er(e) {
  if (I !== void 0) return I;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-DqZbL9aM.wasm", import.meta.url).href, import.meta.url));
  const t = Qn();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await Ys(await e, t);
  return $n(n);
}
const Gs = Object.freeze(Object.defineProperty({ __proto__: null, _start: Ls, default: er, detect_format: Ps, hex_rows: qs, initSync: Hs, parse_elf: js }, Symbol.toStringTag, { value: "Module" }));
let Pt = null;
function tr() {
  return Pt || (Pt = er()), Pt.then(() => Gs);
}
const Ks = "scry-theme";
function nr() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Zs() {
  const e = nr() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(Ks, e);
  } catch {
  }
  return e;
}
var Xs = L('<p class="err svelte-1i6c60u"> </p>'), Js = L('<div role="region" aria-label="Drop a binary"><p class="ti svelte-1i6c60u">[ DROP A BINARY ]</p> <p class="sub svelte-1i6c60u">Drag an ELF onto this panel, or use the picker.</p> <label class="pick svelte-1i6c60u"><input type="file" hidden=""/> <span class="svelte-1i6c60u">Choose file</span></label> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div>');
function Qs(e, t) {
  ht(t, true);
  const n = 64 * 1024 * 1024;
  let r = j(false), s = j("");
  function i(g) {
    return g < 1024 ? g + " B" : g < 1024 * 1024 ? (g / 1024).toFixed(1) + " KiB" : (g / 1024 / 1024).toFixed(1) + " MiB";
  }
  async function l(g) {
    if (O(s, ""), g.size > n) {
      O(s, `file too large (${i(g.size)} > ${i(n)})`);
      return;
    }
    const p = await g.arrayBuffer();
    t.onfile?.({ name: g.name, bytes: new Uint8Array(p) });
  }
  function a(g) {
    g.preventDefault(), O(r, false);
    const p = g.dataTransfer?.files?.[0];
    p && l(p);
  }
  function o(g) {
    g.preventDefault(), O(r, true);
  }
  function f() {
    O(r, false);
  }
  function u(g) {
    const p = g.target.files?.[0];
    p && l(p);
  }
  var d = Js();
  let v;
  var _ = w(b(d), 4), c = b(_), y = w(_, 2);
  {
    var m = (g) => {
      var p = Xs(), D = b(p);
      U(() => A(D, h(s))), F(g, p);
    };
    Q(y, (g) => {
      h(s) && g(m);
    });
  }
  U(() => v = Ot(d, 1, "drop svelte-1i6c60u", null, v, { hover: h(r) })), Ct("drop", d, a), Ct("dragover", d, o), Ct("dragleave", d, f), fe("change", c, u), F(e, d), pt();
}
Rt(["change"]);
var $s = L('<span class="ct svelte-etynpr"> </span>'), ei = L('<span class="ct svelte-etynpr"> </span>'), ti = L('<span class="ct svelte-etynpr"> </span>'), ni = L("<button> <!> <!> <!></button>"), ri = L('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), si = L('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), ii = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ai = L('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), li = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), oi = L('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), fi = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ui = L('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function ci(e, t) {
  ht(t, true);
  let n = j("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"]];
  var s = ui(), i = b(s);
  rt(i, 21, () => r, nt, (v, _) => {
    var c = es(() => mr(h(_), 2));
    let y = () => h(c)[0], m = () => h(c)[1];
    var g = ni();
    let p;
    var D = b(g), R = w(D);
    {
      var B = (S) => {
        var P = $s(), V = b(P);
        U(() => A(V, t.report.sections.length)), F(S, P);
      };
      Q(R, (S) => {
        y() === "sections" && S(B);
      });
    }
    var C = w(R, 2);
    {
      var k = (S) => {
        var P = ei(), V = b(P);
        U(() => A(V, t.report.segments.length)), F(S, P);
      };
      Q(C, (S) => {
        y() === "segments" && S(k);
      });
    }
    var E = w(C, 2);
    {
      var x = (S) => {
        var P = ti(), V = b(P);
        U(() => A(V, t.report.symbols.length)), F(S, P);
      };
      Q(E, (S) => {
        y() === "symbols" && S(x);
      });
    }
    U(() => {
      p = Ot(g, 1, "tab svelte-etynpr", null, p, { active: h(n) === y() }), A(D, `${m() ?? ""} `);
    }), fe("click", g, () => O(n, y(), true)), F(v, g);
  });
  var l = w(i, 2), a = b(l);
  {
    var o = (v) => {
      var _ = ri(), c = w(b(_), 2), y = b(c), m = w(c, 4), g = b(m), p = w(m, 4), D = b(p), R = w(p, 4), B = b(R), C = w(R, 4), k = b(C), E = w(C, 4), x = b(E), S = w(E, 4), P = b(S), V = w(S, 4), Te = b(V);
      U(() => {
        A(y, t.report.summary.class), A(g, t.report.summary.data), A(D, t.report.summary.kind), A(B, t.report.summary.machine), A(k, t.report.summary.entry), A(x, t.report.summary.n_sections), A(P, t.report.summary.n_segments), A(Te, t.report.summary.n_symbols);
      }), F(v, _);
    }, f = (v) => {
      var _ = ii(), c = w(b(_));
      rt(c, 21, () => t.report.sections, nt, (y, m) => {
        var g = si(), p = b(g), D = b(p), R = w(p), B = b(R), C = w(R), k = b(C), E = w(C), x = b(E), S = w(E), P = b(S), V = w(S), Te = b(V), ze = w(V), Ue = b(ze);
        U(() => {
          A(D, h(m).idx), A(B, h(m).name || "\u2014"), A(k, h(m).kind), A(x, h(m).addr), A(P, h(m).offset), A(Te, h(m).size), A(Ue, h(m).flags);
        }), F(y, g);
      }), F(v, _);
    }, u = (v) => {
      var _ = li(), c = w(b(_));
      rt(c, 21, () => t.report.segments, nt, (y, m) => {
        var g = ai(), p = b(g), D = b(p), R = w(p), B = b(R), C = w(R), k = b(C), E = w(C), x = b(E), S = w(E), P = b(S), V = w(S), Te = b(V), ze = w(V), Ue = b(ze);
        U(() => {
          A(D, h(m).idx), A(B, h(m).kind), A(k, h(m).vaddr), A(x, h(m).offset), A(P, h(m).filesz), A(Te, h(m).memsz), A(Ue, h(m).flags);
        }), F(y, g);
      }), F(v, _);
    }, d = (v) => {
      var _ = fi(), c = w(b(_));
      rt(c, 21, () => t.report.symbols, nt, (y, m) => {
        var g = oi(), p = b(g), D = b(p), R = w(p), B = b(R), C = w(R), k = b(C), E = w(C), x = b(E), S = w(E), P = b(S);
        U(() => {
          A(D, h(m).name), A(B, h(m).bind), A(k, h(m).kind), A(x, h(m).value), A(P, h(m).size);
        }), F(y, g);
      }), F(v, _);
    };
    Q(a, (v) => {
      h(n) === "summary" ? v(o) : h(n) === "sections" ? v(f, 1) : h(n) === "segments" ? v(u, 2) : h(n) === "symbols" && v(d, 3);
    });
  }
  F(e, s), pt();
}
Rt(["click"]);
var di = L('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <span class="off svelte-14j5q0g"> </span> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <pre class="grid svelte-14j5q0g"></pre></div>');
function vi(e, t) {
  ht(t, true);
  let n = j(0);
  const r = 16 * 32;
  let s = j(De([])), i = j(null);
  qn(() => {
    let p = false;
    return tr().then((D) => {
      p || (O(i, D, true), l());
    }), () => {
      p = true;
    };
  });
  function l() {
    !h(i) || !t.bytes || O(s, h(i).hex_rows(t.bytes, h(n), r), true);
  }
  function a(p) {
    O(n, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, h(n) + p)), true), l();
  }
  var o = di(), f = b(o), u = w(b(f), 2), d = b(u), v = w(d, 2), _ = w(v, 2), c = b(_), y = w(_, 2), m = w(y, 2), g = w(f, 2);
  rt(g, 21, () => h(s), nt, (p, D) => {
    var R = As();
    U(() => A(R, `${h(D) ?? ""}
`)), F(p, R);
  }), U((p) => A(c, `@ ${p ?? ""}`), [() => h(n).toString(16).padStart(8, "0").toUpperCase()]), fe("click", d, () => a(-r)), fe("click", v, () => a(-16)), fe("click", y, () => a(16)), fe("click", m, () => a(r)), F(e, o), pt();
}
Rt(["click"]);
var _i = L('<span class="brand svelte-1n46o8q">scry / v2</span>'), hi = L('<span class="file svelte-1n46o8q"> </span> <button>Close</button>', 1), pi = L('<button class="theme svelte-1n46o8q" aria-label="Toggle theme"> </button> <a class="back svelte-1n46o8q" href="/">\u21A9 scry root</a>', 1), gi = L('<main class="empty svelte-1n46o8q"><!></main>'), bi = L('<span class="why svelte-1n46o8q" title="ELF only in v2 for now"> </span>'), yi = L('<p class="err svelte-1n46o8q"> </p>'), mi = L('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b> </b>. PE / Mach-O / WASM coming after the RV32 disassembler lands.</p>'), wi = L('<nav class="tabs svelte-1n46o8q"><button>INSPECT <!></button> <button>HEX</button></nav> <main class="body svelte-1n46o8q"><!> <!></main>', 1), Ei = L('<div class="shell svelte-1n46o8q"><header class="hd svelte-1n46o8q"><!> <span class="sub svelte-1n46o8q">rust \u2192 wasm \xB7 svelte 5</span> <span class="spacer svelte-1n46o8q"></span> <!> <!></header> <!> <footer class="ft svelte-1n46o8q"><span>LOCAL \xB7 NO UPLOAD</span> <span>v0.1 \xB7 scaffolding</span></footer></div>');
function xi(e, t) {
  ht(t, true);
  let n = j(null), r = j(null), s = j(null), i = j(""), l = j("inspect"), a = j(De(nr()));
  const o = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  qn(() => {
    function k(E) {
      if (E.origin !== location.origin) return;
      const x = E.data;
      x && x.type === "scry-theme" && (x.value === "light" || x.value === "dark") && (document.documentElement.setAttribute("data-theme", x.value), O(a, x.value, true));
    }
    return window.addEventListener("message", k), () => window.removeEventListener("message", k);
  });
  async function f({ name: k, bytes: E }) {
    O(n, { name: k, bytes: E }, true), O(i, ""), O(s, null), O(r, null);
    try {
      const x = await tr();
      O(r, x.detect_format(E), true), h(r) === "elf" && O(s, x.parse_elf(E), true);
    } catch (x) {
      O(i, String(x), true);
    }
  }
  function u() {
    O(n, null), O(s, null), O(r, null), O(i, "");
  }
  function d() {
    O(a, Zs(), true);
  }
  var v = Ei(), _ = b(v), c = b(_);
  {
    var y = (k) => {
      var E = _i();
      F(k, E);
    };
    Q(c, (k) => {
      o || k(y);
    });
  }
  var m = w(c, 6);
  {
    var g = (k) => {
      var E = hi(), x = yt(E), S = b(x), P = w(x, 2);
      U((V) => A(S, `${h(n).name ?? ""} \xB7 ${V ?? ""} B \xB7 ${h(r) ?? "\u2026" ?? ""}`), [() => h(n).bytes.length.toLocaleString()]), fe("click", P, u), F(k, E);
    };
    Q(m, (k) => {
      h(n) && k(g);
    });
  }
  var p = w(m, 2);
  {
    var D = (k) => {
      var E = pi(), x = yt(E), S = b(x);
      U(() => A(S, h(a) === "dark" ? "\u263C" : "\u263E")), fe("click", x, d), F(k, E);
    };
    Q(p, (k) => {
      o || k(D);
    });
  }
  var R = w(_, 2);
  {
    var B = (k) => {
      var E = gi(), x = b(E);
      Qs(x, { onfile: f }), F(k, E);
    }, C = (k) => {
      var E = wi(), x = yt(E), S = b(x);
      let P;
      var V = w(b(S));
      {
        var Te = (K) => {
          var ye = bi(), $e = b(ye);
          U(() => A($e, `\xB7${h(r) ?? ""}`)), F(K, ye);
        };
        Q(V, (K) => {
          h(r) !== "elf" && K(Te);
        });
      }
      var ze = w(S, 2);
      let Ue;
      var rr = w(x, 2), rn = b(rr);
      {
        var sr = (K) => {
          var ye = yi(), $e = b(ye);
          U(() => A($e, `parse failed: ${h(i) ?? ""}`)), F(K, ye);
        };
        Q(rn, (K) => {
          h(i) && K(sr);
        });
      }
      var ir = w(rn, 2);
      {
        var ar = (K) => {
          var ye = Ss(), $e = yt(ye);
          {
            var or = (Ve) => {
              ci(Ve, { get report() {
                return h(s);
              } });
            }, fr = (Ve) => {
              var sn = mi(), ur = w(b(sn)), cr = b(ur);
              U(() => A(cr, h(r))), F(Ve, sn);
            };
            Q($e, (Ve) => {
              h(s) ? Ve(or) : h(r) && h(r) !== "elf" && Ve(fr, 1);
            });
          }
          F(K, ye);
        }, lr = (K) => {
          vi(K, { get bytes() {
            return h(n).bytes;
          } });
        };
        Q(ir, (K) => {
          h(l) === "inspect" ? K(ar) : h(l) === "hex" && K(lr, 1);
        });
      }
      U(() => {
        S.disabled = h(r) !== "elf", P = Ot(S, 1, "svelte-1n46o8q", null, P, { active: h(l) === "inspect" }), Ue = Ot(ze, 1, "svelte-1n46o8q", null, Ue, { active: h(l) === "hex" });
      }), fe("click", S, () => O(l, "inspect")), fe("click", ze, () => O(l, "hex")), F(k, E);
    };
    Q(R, (k) => {
      h(n) ? k(C, -1) : k(B);
    });
  }
  F(e, v), pt();
}
Rt(["click"]);
Ts(xi, { target: document.getElementById("app") });
