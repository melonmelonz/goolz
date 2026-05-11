(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s) if (i.type === "childList") for (const a of i.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
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
const or = false;
var hn = Array.isArray, fr = Array.prototype.indexOf, He = Array.prototype.includes, Ot = Array.from, ur = Object.defineProperty, at = Object.getOwnPropertyDescriptor, cr = Object.prototype, dr = Array.prototype, vr = Object.getPrototypeOf, sn = Object.isExtensible;
const _r = () => {
};
function hr(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function pn() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function pr(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const H = 2, dt = 4, Nt = 8, gn = 1 << 24, ue = 16, oe = 32, xe = 64, qt = 128, ee = 512, W = 1024, V = 2048, de = 4096, G = 8192, te = 16384, We = 32768, ln = 1 << 25, Ge = 65536, jt = 1 << 17, gr = 1 << 18, Je = 1 << 19, br = 1 << 20, ge = 1 << 25, qe = 65536, kt = 1 << 21, vt = 1 << 22, Ee = 1 << 23, Rt = Symbol("$state"), he = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function yr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function mr(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function wr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Er() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ar() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Sr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Tr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Mr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Or = 1, Nr = 2, Dr = 16, Rr = 1, Ir = 2, z = Symbol(), Fr = "http://www.w3.org/1999/xhtml";
function Cr() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Lr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function bn(e) {
  return e === this.v;
}
function Pr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function yn(e) {
  return !Pr(e, this.v);
}
let qr = false, re = null;
function Ke(e) {
  re = e;
}
function ht(e, t = false, n) {
  re = { p: re, i: false, c: null, e: null, s: e, x: null, r: A, l: null };
}
function pt(e) {
  var t = re, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Pn(r);
  }
  return t.i = true, re = t.p, {};
}
function mn() {
  return true;
}
let Ve = [];
function jr() {
  var e = Ve;
  Ve = [], hr(e);
}
function Fe(e) {
  if (Ve.length === 0) {
    var t = Ve;
    queueMicrotask(() => {
      t === Ve && jr();
    });
  }
  Ve.push(e);
}
function wn(e) {
  var t = A;
  if (t === null) return S.f |= Ee, e;
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
const Br = -7169;
function j(e, t) {
  e.f = e.f & Br | t;
}
function Yt(e) {
  e.f & ee || e.deps === null ? j(e, W) : j(e, de);
}
function En(e) {
  if (e !== null) for (const t of e) !(t.f & H) || !(t.f & qe) || (t.f ^= qe, En(t.deps));
}
function xn(e, t, n) {
  e.f & V ? t.add(e) : e.f & de && n.add(e), En(e.deps), j(e, W);
}
const Me = /* @__PURE__ */ new Set();
let T = null, le = null, Bt = null, It = false, Ye = null, mt = null;
var an = 0;
let Wr = 1;
class ke {
  id = Wr++;
  current = /* @__PURE__ */ new Map();
  previous = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  #o = /* @__PURE__ */ new Set();
  #e = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Map();
  #r = /* @__PURE__ */ new Map();
  #i = null;
  #t = [];
  #l = [];
  #f = /* @__PURE__ */ new Set();
  #u = /* @__PURE__ */ new Set();
  #a = /* @__PURE__ */ new Map();
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
        if (this.#a.has(n)) {
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
    this.#a.has(t) || this.#a.set(t, { d: [], m: [] }), this.#d.delete(t);
  }
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = this.#a.get(t);
    if (r) {
      this.#a.delete(t);
      for (var s of r.d) j(s, V), n(s);
      for (s of r.m) j(s, de), n(s);
    }
    this.#d.add(t);
  }
  #h() {
    if (an++ > 1e3 && (Me.delete(this), zr()), !this.#c()) {
      for (const l of this.#f) this.#u.delete(l), j(l, V), this.schedule(l);
      for (const l of this.#u) j(l, de), this.schedule(l);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = Ye = [], r = [], s = mt = [];
    for (const l of t) try {
      this.#b(l, n, r);
    } catch (o) {
      throw Sn(l), o;
    }
    if (T = null, s.length > 0) {
      var i = ke.ensure();
      for (const l of s) i.schedule(l);
    }
    if (Ye = null, mt = null, this.#c() || this.#g()) {
      this.#p(r), this.#p(n);
      for (const [l, o] of this.#a) An(l, o);
    } else {
      this.#s.size === 0 && Me.delete(this), this.#f.clear(), this.#u.clear();
      for (const l of this.#n) l(this);
      this.#n.clear(), on(r), on(n), this.#i?.resolve();
    }
    var a = T;
    if (this.#t.length > 0) {
      const l = a ??= this;
      l.#t.push(...this.#t.filter((o) => !l.#t.includes(o)));
    }
    a !== null && (Me.add(a), a.#h());
  }
  #b(t, n, r) {
    t.f ^= W;
    for (var s = t.first; s !== null; ) {
      var i = s.f, a = (i & (oe | xe)) !== 0, l = a && (i & W) !== 0, o = l || (i & G) !== 0 || this.#a.has(s);
      if (!o && s.fn !== null) {
        a ? s.f ^= W : i & dt ? n.push(s) : bt(s) && (i & ue && this.#u.add(s), Xe(s));
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
    for (var n = 0; n < t.length; n += 1) xn(t[n], this.#f, this.#u);
  }
  capture(t, n, r = false) {
    t.v !== z && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Ee || (this.current.set(t, [n, r]), le?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    T = this;
  }
  deactivate() {
    T = null, le = null;
  }
  flush() {
    try {
      It = true, T = this, this.#h();
    } finally {
      an = 0, Bt = null, Ye = null, mt = null, It = false, T = null, le = null, Ce.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Me.delete(this);
  }
  register_created_effect(t) {
    this.#l.push(t);
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
        var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var l of n) kn(l, s, i, a);
        a = /* @__PURE__ */ new Map();
        var o = [...u.current.keys()].filter((d) => this.current.has(d) ? this.current.get(d)[0] !== d : true);
        for (const d of this.#l) !(d.f & (te | G | jt)) && Ht(d, o, a) && (d.f & (vt | ue) ? (j(d, V), u.schedule(d)) : u.#f.add(d));
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
    return (this.#i ??= pn()).promise;
  }
  static ensure() {
    if (T === null) {
      const t = T = new ke();
      It || (Me.add(T), Fe(() => {
        T === t && t.flush();
      }));
    }
    return T;
  }
  apply() {
    {
      le = null;
      return;
    }
  }
  schedule(t) {
    if (Bt = t, t.b?.is_pending && t.f & (dt | Nt | gn) && !(t.f & We)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ye !== null && n === A && (S === null || !(S.f & H))) return;
      if (r & (xe | oe)) {
        if (!(r & W)) return;
        n.f ^= W;
      }
    }
    this.#t.push(n);
  }
}
function zr() {
  try {
    kr();
  } catch (e) {
    we(e, Bt);
  }
}
let _e = null;
function on(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (te | G)) && bt(r) && (_e = /* @__PURE__ */ new Set(), Xe(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && jn(r), _e?.size > 0)) {
        Ce.clear();
        for (const s of _e) {
          if (s.f & (te | G)) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; ) _e.has(a) && (_e.delete(a), i.push(a)), a = a.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            o.f & (te | G) || Xe(o);
          }
        }
        _e.clear();
      }
    }
    _e = null;
  }
}
function kn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const i = s.f;
    i & H ? kn(s, t, n, r) : i & (vt | ue) && !(i & V) && Ht(s, t, r) && (j(s, V), Gt(s));
  }
}
function Ht(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (He.call(t, s)) return true;
    if (s.f & H && Ht(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function Gt(e) {
  T.schedule(e);
}
function An(e, t) {
  if (!(e.f & oe && e.f & W)) {
    e.f & V ? t.d.push(e) : e.f & de && t.m.push(e), j(e, W);
    for (var n = e.first; n !== null; ) An(n, t), n = n.next;
  }
}
function Sn(e) {
  j(e, W);
  for (var t = e.first; t !== null; ) Sn(t), t = t.next;
}
function Ur(e) {
  let t = 0, n = je(0), r;
  return () => {
    Jt() && (h(n), us(() => (t === 0 && (r = hs(() => e(() => ot(n)))), t += 1, () => {
      Fe(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, ot(n));
      });
    })));
  };
}
var Vr = Ge | Je;
function Yr(e, t, n, r) {
  new Hr(e, t, n, r);
}
class Hr {
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
  #l = null;
  #f = null;
  #u = 0;
  #a = 0;
  #d = false;
  #_ = /* @__PURE__ */ new Set();
  #v = /* @__PURE__ */ new Set();
  #c = null;
  #g = Ur(() => (this.#c = je(this.#u), () => {
    this.#c = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var a = A;
      a.b = this, a.f |= qt, r(i);
    }, this.parent = A.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#r = Qt(() => {
      this.#y();
    }, Vr);
  }
  #h() {
    try {
      this.#i = $(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #b(t) {
    const n = this.#e.failed;
    n && (this.#l = $(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #p() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = $(() => t(this.#n)), Fe(() => {
      var n = this.#f = document.createDocumentFragment(), r = be();
      n.append(r), this.#i = this.#w(() => $(() => this.#s(r))), this.#a === 0 && (this.#n.before(n), this.#f = null, Le(this.#t, () => {
        this.#t = null;
      }), this.#m(T));
    }));
  }
  #y() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#a = 0, this.#u = 0, this.#i = $(() => {
        this.#s(this.#n);
      }), this.#a > 0) {
        var t = this.#f = document.createDocumentFragment();
        tn(this.#i, t);
        const n = this.#e.pending;
        this.#t = $(() => n(this.#n));
      } else this.#m(T);
    } catch (n) {
      this.error(n);
    }
  }
  #m(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#v);
  }
  defer_effect(t) {
    xn(t, this.#_, this.#v);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #w(t) {
    var n = A, r = S, s = re;
    ve(this.#r), se(this.#r), Ke(this.#r.ctx);
    try {
      return ke.ensure(), t();
    } catch (i) {
      return wn(i), null;
    } finally {
      ve(n), se(r), Ke(s);
    }
  }
  #E(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#E(t, n);
      return;
    }
    this.#a += t, this.#a === 0 && (this.#m(n), this.#t && Le(this.#t, () => {
      this.#t = null;
    }), this.#f && (this.#n.before(this.#f), this.#f = null));
  }
  update_pending_count(t, n) {
    this.#E(t, n), this.#u += t, !(!this.#c || this.#d) && (this.#d = true, Fe(() => {
      this.#d = false, this.#c && Ze(this.#c, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#g(), h(this.#c);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    T?.is_fork ? (this.#i && T.skip_effect(this.#i), this.#t && T.skip_effect(this.#t), this.#l && T.skip_effect(this.#l), T.on_fork_commit(() => {
      this.#x(t);
    })) : this.#x(t);
  }
  #x(t) {
    this.#i && (X(this.#i), this.#i = null), this.#t && (X(this.#t), this.#t = null), this.#l && (X(this.#l), this.#l = null);
    var n = this.#e.onerror;
    let r = this.#e.failed;
    var s = false, i = false;
    const a = () => {
      if (s) {
        Lr();
        return;
      }
      s = true, i && Mr(), this.#l !== null && Le(this.#l, () => {
        this.#l = null;
      }), this.#w(() => {
        this.#y();
      });
    }, l = (o) => {
      try {
        i = true, n?.(o, a), i = false;
      } catch (f) {
        we(f, this.#r && this.#r.parent);
      }
      r && (this.#l = this.#w(() => {
        try {
          return $(() => {
            var f = A;
            f.b = this, f.f |= qt, r(this.#n, () => o, () => a);
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
      o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(l, (f) => we(f, this.#r && this.#r.parent)) : l(o);
    });
  }
}
function Gr(e, t, n, r) {
  const s = Kt;
  var i = e.filter((v) => !v.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var a = A, l = Kr(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function f(v) {
    l();
    try {
      r(v);
    } catch (_) {
      a.f & te || we(_, a);
    }
    At();
  }
  if (n.length === 0) {
    o.then(() => f(t.map(s)));
    return;
  }
  var u = Tn();
  function d() {
    Promise.all(n.map((v) => Zr(v))).then((v) => f([...t.map(s), ...v])).catch((v) => we(v, a)).finally(() => u());
  }
  o ? o.then(() => {
    l(), d(), At();
  }) : d();
}
function Kr() {
  var e = A, t = S, n = re, r = T;
  return function(i = true) {
    ve(e), se(t), Ke(n), i && !(e.f & te) && (r?.activate(), r?.apply());
  };
}
function At(e = true) {
  ve(null), se(null), Ke(null), e && T?.deactivate();
}
function Tn() {
  var e = A, t = e.b, n = T, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function Kt(e) {
  var t = H | V;
  return A !== null && (A.f |= Je), { ctx: re, deps: null, effects: null, equals: bn, f: t, fn: e, reactions: null, rv: 0, v: z, wv: 0, parent: A, ac: null };
}
function Zr(e, t, n) {
  let r = A;
  r === null && yr();
  var s = void 0, i = je(z), a = !S, l = /* @__PURE__ */ new Map();
  return fs(() => {
    var o = A, f = pn();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(At);
    } catch (_) {
      f.reject(_), At();
    }
    var u = T;
    if (a) {
      if (o.f & We) var d = Tn();
      if (r.b.is_rendered()) l.get(u)?.reject(he), l.delete(u);
      else {
        for (const _ of l.values()) _.reject(he);
        l.clear();
      }
      l.set(u, f);
    }
    const v = (_, c = void 0) => {
      if (d) {
        var y = c === he;
        d(y);
      }
      if (!(c === he || o.f & te)) {
        if (u.activate(), c) i.f |= Ee, Ze(i, c);
        else {
          i.f & Ee && (i.f ^= Ee), Ze(i, _);
          for (const [m, g] of l) {
            if (l.delete(m), m === u) break;
            g.reject(he);
          }
        }
        u.deactivate();
      }
    };
    f.promise.then(v, (_) => v(null, _ || "unknown"));
  }), Ln(() => {
    for (const o of l.values()) o.reject(he);
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
function Xr(e) {
  const t = Kt(e);
  return zn(t), t;
}
function Jr(e) {
  const t = Kt(e);
  return t.equals = yn, t;
}
function Qr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) X(t[n]);
  }
}
function Zt(e) {
  var t, n = A, r = e.parent;
  if (!Ae && r !== null && r.f & (te | G)) return Cr(), e.v;
  ve(r);
  try {
    e.f &= ~qe, Qr(e), t = Hn(e);
  } finally {
    ve(n);
  }
  return t;
}
function Mn(e) {
  var t = Zt(e);
  if (!e.equals(t) && (e.wv = Vn(), (!T?.is_fork || e.deps === null) && (T !== null ? T.capture(e, t, true) : e.v = t, e.deps === null))) {
    j(e, W);
    return;
  }
  Ae || (le !== null ? (Jt() || T?.is_fork) && le.set(e, t) : Yt(e));
}
function $r(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(he), t.teardown = _r, t.ac = null, _t(t, 0), $t(t));
}
function On(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Xe(t);
}
let Wt = /* @__PURE__ */ new Set();
const Ce = /* @__PURE__ */ new Map();
let Nn = false;
function je(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: bn, rv: 0, wv: 0 };
  return n;
}
function B(e, t) {
  const n = je(e);
  return zn(n), n;
}
function es(e, t = false, n = true) {
  const r = je(e);
  return t || (r.equals = yn), r;
}
function D(e, t, n = false) {
  S !== null && (!ae || S.f & jt) && mn() && S.f & (H | ue | vt | jt) && (ne === null || !He.call(ne, e)) && Tr();
  let r = n ? De(t) : t;
  return Ze(e, r, mt);
}
function Ze(e, t, n = null) {
  if (!e.equals(t)) {
    Ce.set(e, Ae ? t : e.v);
    var r = ke.ensure();
    if (r.capture(e, t), e.f & H) {
      const s = e;
      e.f & V && Zt(s), le === null && Yt(s);
    }
    e.wv = Vn(), Dn(e, V, n), A !== null && A.f & W && !(A.f & (oe | xe)) && (Q === null ? vs([e]) : Q.push(e)), !r.is_fork && Wt.size > 0 && !Nn && ts();
  }
  return t;
}
function ts() {
  Nn = false;
  for (const e of Wt) e.f & W && j(e, de), bt(e) && Xe(e);
  Wt.clear();
}
function ot(e) {
  D(e, e.v + 1);
}
function Dn(e, t, n) {
  var r = e.reactions;
  if (r !== null) for (var s = r.length, i = 0; i < s; i++) {
    var a = r[i], l = a.f, o = (l & V) === 0;
    if (o && j(a, t), l & H) {
      var f = a;
      le?.delete(f), l & qe || (l & ee && (A === null || !(A.f & kt)) && (a.f |= qe), Dn(f, de, n));
    } else if (o) {
      var u = a;
      l & ue && _e !== null && _e.add(u), n !== null ? n.push(u) : Gt(u);
    }
  }
}
function De(e) {
  if (typeof e != "object" || e === null || Rt in e) return e;
  const t = vr(e);
  if (t !== cr && t !== dr) return e;
  var n = /* @__PURE__ */ new Map(), r = hn(e), s = B(0), i = Pe, a = (l) => {
    if (Pe === i) return l();
    var o = S, f = Pe;
    se(null), cn(i);
    var u = l();
    return se(o), cn(f), u;
  };
  return r && n.set("length", B(e.length)), new Proxy(e, { defineProperty(l, o, f) {
    (!("value" in f) || f.configurable === false || f.enumerable === false || f.writable === false) && Ar();
    var u = n.get(o);
    return u === void 0 ? a(() => {
      var d = B(f.value);
      return n.set(o, d), d;
    }) : D(u, f.value, true), true;
  }, deleteProperty(l, o) {
    var f = n.get(o);
    if (f === void 0) {
      if (o in l) {
        const u = a(() => B(z));
        n.set(o, u), ot(s);
      }
    } else D(f, z), ot(s);
    return true;
  }, get(l, o, f) {
    if (o === Rt) return e;
    var u = n.get(o), d = o in l;
    if (u === void 0 && (!d || at(l, o)?.writable) && (u = a(() => {
      var _ = De(d ? l[o] : z), c = B(_);
      return c;
    }), n.set(o, u)), u !== void 0) {
      var v = h(u);
      return v === z ? void 0 : v;
    }
    return Reflect.get(l, o, f);
  }, getOwnPropertyDescriptor(l, o) {
    var f = Reflect.getOwnPropertyDescriptor(l, o);
    if (f && "value" in f) {
      var u = n.get(o);
      u && (f.value = h(u));
    } else if (f === void 0) {
      var d = n.get(o), v = d?.v;
      if (d !== void 0 && v !== z) return { enumerable: true, configurable: true, value: v, writable: true };
    }
    return f;
  }, has(l, o) {
    if (o === Rt) return true;
    var f = n.get(o), u = f !== void 0 && f.v !== z || Reflect.has(l, o);
    if (f !== void 0 || A !== null && (!u || at(l, o)?.writable)) {
      f === void 0 && (f = a(() => {
        var v = u ? De(l[o]) : z, _ = B(v);
        return _;
      }), n.set(o, f));
      var d = h(f);
      if (d === z) return false;
    }
    return u;
  }, set(l, o, f, u) {
    var d = n.get(o), v = o in l;
    if (r && o === "length") for (var _ = f; _ < d.v; _ += 1) {
      var c = n.get(_ + "");
      c !== void 0 ? D(c, z) : _ in l && (c = a(() => B(z)), n.set(_ + "", c));
    }
    if (d === void 0) (!v || at(l, o)?.writable) && (d = a(() => B(void 0)), D(d, De(f)), n.set(o, d));
    else {
      v = d.v !== z;
      var y = a(() => De(f));
      D(d, y);
    }
    var m = Reflect.getOwnPropertyDescriptor(l, o);
    if (m?.set && m.set.call(u, f), !v) {
      if (r && typeof o == "string") {
        var g = n.get("length"), p = Number(o);
        Number.isInteger(p) && p >= g.v && D(g, p + 1);
      }
      ot(s);
    }
    return true;
  }, ownKeys(l) {
    h(s);
    var o = Reflect.ownKeys(l).filter((d) => {
      var v = n.get(d);
      return v === void 0 || v.v !== z;
    });
    for (var [f, u] of n) u.v !== z && !(f in l) && o.push(f);
    return o;
  }, setPrototypeOf() {
    Sr();
  } });
}
var fn, Rn, In, Fn;
function ns() {
  if (fn === void 0) {
    fn = window, Rn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    In = at(t, "firstChild").get, Fn = at(t, "nextSibling").get, sn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), sn(n) && (n.__t = void 0);
  }
}
function be(e = "") {
  return document.createTextNode(e);
}
function St(e) {
  return In.call(e);
}
function gt(e) {
  return Fn.call(e);
}
function b(e, t) {
  return St(e);
}
function Ft(e, t = false) {
  {
    var n = St(e);
    return n instanceof Comment && n.data === "" ? gt(n) : n;
  }
}
function w(e, t = 1, n = false) {
  let r = e;
  for (; t--; ) r = gt(r);
  return r;
}
function rs(e) {
  e.textContent = "";
}
function Cn() {
  return false;
}
function ss(e, t, n) {
  return document.createElementNS(Fr, e, void 0);
}
function Xt(e) {
  var t = S, n = A;
  se(null), ve(null);
  try {
    return e();
  } finally {
    se(t), ve(n);
  }
}
function is(e) {
  A === null && (S === null && xr(), Er()), Ae && wr();
}
function ls(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Se(e, t) {
  var n = A;
  n !== null && n.f & G && (e |= G);
  var r = { ctx: re, deps: null, nodes: null, f: e | V | ee, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  T?.register_created_effect(r);
  var s = r;
  if (e & dt) Ye !== null ? Ye.push(r) : ke.ensure().schedule(r);
  else if (t !== null) {
    try {
      Xe(r);
    } catch (a) {
      throw X(r), a;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & Je) && (s = s.first, e & ue && e & Ge && s !== null && (s.f |= Ge));
  }
  if (s !== null && (s.parent = n, n !== null && ls(s, n), S !== null && S.f & H && !(e & xe))) {
    var i = S;
    (i.effects ??= []).push(s);
  }
  return r;
}
function Jt() {
  return S !== null && !ae;
}
function Ln(e) {
  const t = Se(Nt, null);
  return j(t, W), t.teardown = e, t;
}
function as(e) {
  is();
  var t = A.f, n = !S && (t & oe) !== 0 && (t & We) === 0;
  if (n) {
    var r = re;
    (r.e ??= []).push(e);
  } else return Pn(e);
}
function Pn(e) {
  return Se(dt | br, e);
}
function os(e) {
  ke.ensure();
  const t = Se(xe | Je, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Le(t, () => {
      X(t), r(void 0);
    }) : (X(t), r(void 0));
  });
}
function fs(e) {
  return Se(vt | Je, e);
}
function us(e, t = 0) {
  return Se(Nt | t, e);
}
function U(e, t = [], n = [], r = []) {
  Gr(r, t, n, (s) => {
    Se(Nt, () => e(...s.map(h)));
  });
}
function Qt(e, t = 0) {
  var n = Se(ue | t, e);
  return n;
}
function $(e) {
  return Se(oe | Je, e);
}
function qn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ae, r = S;
    un(true), se(null);
    try {
      t.call(null);
    } finally {
      un(n), se(r);
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
function cs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & oe || X(t), t = n;
  }
}
function X(e, t = true) {
  var n = false;
  (t || e.f & gr) && e.nodes !== null && e.nodes.end !== null && (ds(e.nodes.start, e.nodes.end), n = true), j(e, ln), $t(e, t && !n), _t(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const i of r) i.stop();
  qn(e), e.f ^= ln, e.f |= te;
  var s = e.parent;
  s !== null && s.first !== null && jn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ds(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : gt(e);
    e.remove(), e = n;
  }
}
function jn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Le(e, t, n = true) {
  var r = [];
  Bn(e, r, true);
  var s = () => {
    n && X(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var a = () => --i || s();
    for (var l of r) l.out(a);
  } else s();
}
function Bn(e, t, n) {
  if (!(e.f & G)) {
    e.f ^= G;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const l of r) (l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if (!(s.f & xe)) {
        var a = (s.f & Ge) !== 0 || (s.f & oe) !== 0 && (e.f & ue) !== 0;
        Bn(s, t, a ? n : false);
      }
      s = i;
    }
  }
}
function en(e) {
  Wn(e, true);
}
function Wn(e, t) {
  if (e.f & G) {
    e.f ^= G, e.f & W || (j(e, V), ke.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Ge) !== 0 || (n.f & oe) !== 0;
      Wn(n, s ? t : false), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const a of i) (a.is_global || t) && a.in();
  }
}
function tn(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : gt(n);
    t.append(n), n = s;
  }
}
let wt = false, Ae = false;
function un(e) {
  Ae = e;
}
let S = null, ae = false;
function se(e) {
  S = e;
}
let A = null;
function ve(e) {
  A = e;
}
let ne = null;
function zn(e) {
  S !== null && (ne === null ? ne = [e] : ne.push(e));
}
let Z = null, J = 0, Q = null;
function vs(e) {
  Q = e;
}
let Un = 1, Re = 0, Pe = Re;
function cn(e) {
  Pe = e;
}
function Vn() {
  return ++Un;
}
function bt(e) {
  var t = e.f;
  if (t & V) return true;
  if (t & H && (e.f &= ~qe), t & de) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (bt(i) && Mn(i), i.wv > e.wv) return true;
    }
    t & ee && le === null && j(e, W);
  }
  return false;
}
function Yn(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(ne !== null && He.call(ne, e))) for (var s = 0; s < r.length; s++) {
    var i = r[s];
    i.f & H ? Yn(i, t, false) : t === i && (n ? j(i, V) : i.f & W && j(i, de), Gt(i));
  }
}
function Hn(e) {
  var t = Z, n = J, r = Q, s = S, i = ne, a = re, l = ae, o = Pe, f = e.f;
  Z = null, J = 0, Q = null, S = f & (oe | xe) ? null : e, ne = null, Ke(e.ctx), ae = false, Pe = ++Re, e.ac !== null && (Xt(() => {
    e.ac.abort(he);
  }), e.ac = null);
  try {
    e.f |= kt;
    var u = e.fn, d = u();
    e.f |= We;
    var v = e.deps, _ = T?.is_fork;
    if (Z !== null) {
      var c;
      if (_ || _t(e, J), v !== null && J > 0) for (v.length = J + Z.length, c = 0; c < Z.length; c++) v[J + c] = Z[c];
      else e.deps = v = Z;
      if (Jt() && e.f & ee) for (c = J; c < v.length; c++) (v[c].reactions ??= []).push(e);
    } else !_ && v !== null && J < v.length && (_t(e, J), v.length = J);
    if (mn() && Q !== null && !ae && v !== null && !(e.f & (H | de | V))) for (c = 0; c < Q.length; c++) Yn(Q[c], e);
    if (s !== null && s !== e) {
      if (Re++, s.deps !== null) for (let y = 0; y < n; y += 1) s.deps[y].rv = Re;
      if (t !== null) for (const y of t) y.rv = Re;
      Q !== null && (r === null ? r = Q : r.push(...Q));
    }
    return e.f & Ee && (e.f ^= Ee), d;
  } catch (y) {
    return wn(y);
  } finally {
    e.f ^= kt, Z = t, J = n, Q = r, S = s, ne = i, Ke(a), ae = l, Pe = o;
  }
}
function _s(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = fr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & H && (Z === null || !He.call(Z, t))) {
    var i = t;
    i.f & ee && (i.f ^= ee, i.f &= ~qe), i.v !== z && Yt(i), $r(i), _t(i, 0);
  }
}
function _t(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) _s(e, n[r]);
}
function Xe(e) {
  var t = e.f;
  if (!(t & te)) {
    j(e, W);
    var n = A, r = wt;
    A = e, wt = true;
    try {
      t & (ue | gn) ? cs(e) : $t(e), qn(e);
      var s = Hn(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Un;
      var i;
      or && qr && e.f & V && e.deps;
    } finally {
      wt = r, A = n;
    }
  }
}
function h(e) {
  var t = e.f, n = (t & H) !== 0;
  if (S !== null && !ae) {
    var r = A !== null && (A.f & te) !== 0;
    if (!r && (ne === null || !He.call(ne, e))) {
      var s = S.deps;
      if (S.f & kt) e.rv < Re && (e.rv = Re, Z === null && s !== null && s[J] === e ? J++ : Z === null ? Z = [e] : Z.push(e));
      else {
        (S.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [S] : He.call(i, S) || i.push(S);
      }
    }
  }
  if (Ae && Ce.has(e)) return Ce.get(e);
  if (n) {
    var a = e;
    if (Ae) {
      var l = a.v;
      return (!(a.f & W) && a.reactions !== null || Kn(a)) && (l = Zt(a)), Ce.set(a, l), l;
    }
    var o = (a.f & ee) === 0 && !ae && S !== null && (wt || (S.f & ee) !== 0), f = (a.f & We) === 0;
    bt(a) && (o && (a.f |= ee), Mn(a)), o && !f && (On(a), Gn(a));
  }
  if (le?.has(e)) return le.get(e);
  if (e.f & Ee) throw e.v;
  return e.v;
}
function Gn(e) {
  if (e.f |= ee, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & H && !(t.f & ee) && (On(t), Gn(t));
}
function Kn(e) {
  if (e.v === z) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (Ce.has(t) || t.f & H && Kn(t)) return true;
  return false;
}
function hs(e) {
  var t = ae;
  try {
    return ae = true, e();
  } finally {
    ae = t;
  }
}
const ps = ["touchstart", "touchmove"];
function gs(e) {
  return ps.includes(e);
}
const tt = Symbol("events"), Zn = /* @__PURE__ */ new Set(), zt = /* @__PURE__ */ new Set();
function bs(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Ut.call(t, i), !i.cancelBubble) return Xt(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Fe(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Ct(e, t, n, r, s) {
  var i = { capture: r, passive: s }, a = bs(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Ln(() => {
    t.removeEventListener(e, a, i);
  });
}
function fe(e, t, n) {
  (t[tt] ??= {})[e] = n;
}
function Dt(e) {
  for (var t = 0; t < e.length; t++) Zn.add(e[t]);
  for (var n of zt) n(e);
}
let dn = null;
function Ut(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], i = s[0] || e.target;
  dn = e;
  var a = 0, l = dn === e && e[tt];
  if (l) {
    var o = s.indexOf(l);
    if (o !== -1 && (t === document || t === window)) {
      e[tt] = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1) return;
    o <= f && (a = o);
  }
  if (i = s[a] || e.target, i !== t) {
    ur(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var u = S, d = A;
    se(null), ve(null);
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
      e[tt] = t, delete e.currentTarget, se(u), ve(d);
    }
  }
}
const ys = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ms(e) {
  return ys?.createHTML(e) ?? e;
}
function ws(e) {
  var t = ss("template");
  return t.innerHTML = ms(e.replaceAll("<!>", "<!---->")), t.content;
}
function Tt(e, t) {
  var n = A;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function P(e, t) {
  var n = (t & Rr) !== 0, r = (t & Ir) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ws(i ? e : "<!>" + e), n || (s = St(s)));
    var a = r || Rn ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var l = St(a), o = a.lastChild;
      Tt(l, o);
    } else Tt(a, a);
    return a;
  };
}
function Es(e = "") {
  {
    var t = be(e + "");
    return Tt(t, t), t;
  }
}
function xs() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = be();
  return e.append(t, n), Tt(t, n), e;
}
function F(e, t) {
  e !== null && e.before(t);
}
function x(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function ks(e, t) {
  return As(e, t);
}
const yt = /* @__PURE__ */ new Map();
function As(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: a = true, transformError: l }) {
  ns();
  var o = void 0, f = os(() => {
    var u = n ?? t.appendChild(be());
    Yr(u, { pending: () => {
    } }, (_) => {
      ht({});
      var c = re;
      i && (c.c = i), s && (r.$$events = s), o = e(_, r) || {}, pt();
    }, l);
    var d = /* @__PURE__ */ new Set(), v = (_) => {
      for (var c = 0; c < _.length; c++) {
        var y = _[c];
        if (!d.has(y)) {
          d.add(y);
          var m = gs(y);
          for (const M of [t, document]) {
            var g = yt.get(M);
            g === void 0 && (g = /* @__PURE__ */ new Map(), yt.set(M, g));
            var p = g.get(y);
            p === void 0 ? (M.addEventListener(y, Ut, { passive: m }), g.set(y, 1)) : g.set(y, p + 1);
          }
        }
      }
    };
    return v(Ot(Zn)), zt.add(v), () => {
      for (var _ of d) for (const m of [t, document]) {
        var c = yt.get(m), y = c.get(_);
        --y == 0 ? (m.removeEventListener(_, Ut), c.delete(_), c.size === 0 && yt.delete(m)) : c.set(_, y);
      }
      zt.delete(v), u !== n && u.parentNode?.removeChild(u);
    };
  });
  return Ss.set(o, f), o;
}
let Ss = /* @__PURE__ */ new WeakMap();
class Ts {
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
      for (const [i, a] of this.#n) {
        if (this.#n.delete(i), i === t) break;
        const l = this.#e.get(a);
        l && (X(l.effect), this.#e.delete(a));
      }
      for (const [i, a] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const l = () => {
          if (Array.from(this.#n.values()).includes(i)) {
            var f = document.createDocumentFragment();
            tn(a, f), f.append(be()), this.#e.set(i, { effect: a, fragment: f });
          } else X(a);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !r ? (this.#s.add(i), Le(a, l, false)) : l();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (X(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = T, s = Cn();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var i = document.createDocumentFragment(), a = be();
      i.append(a), this.#e.set(t, { effect: $(() => n(a)), fragment: i });
    } else this.#o.set(t, $(() => n(this.anchor)));
    if (this.#n.set(r, t), s) {
      for (const [l, o] of this.#o) l === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [l, o] of this.#e) l === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(this.#i), r.ondiscard(this.#t);
    } else this.#i(r);
  }
}
function ie(e, t, n = false) {
  var r = new Ts(e), s = n ? Ge : 0;
  function i(a, l) {
    r.ensure(a, l);
  }
  Qt(() => {
    var a = false;
    t((l, o = 0) => {
      a = true, i(o, l);
    }), a || i(-1, null);
  }, s);
}
function nt(e, t) {
  return t;
}
function Ms(e, t, n) {
  for (var r = [], s = t.length, i, a = t.length, l = 0; l < s; l++) {
    let d = t[l];
    Le(d, () => {
      if (i) {
        if (i.pending.delete(d), i.done.add(d), i.pending.size === 0) {
          var v = e.outrogroups;
          Vt(e, Ot(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
        }
      } else a -= 1;
    }, false);
  }
  if (a === 0) {
    var o = r.length === 0 && n !== null;
    if (o) {
      var f = n, u = f.parentNode;
      rs(u), u.append(f), e.items.clear();
    }
    Vt(e, t, !o);
  } else i = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Vt(e, t, n = true) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const a of e.pending.values()) for (const l of a) r.add(e.items.get(l).e);
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (r?.has(i)) {
      i.f |= ge;
      const a = document.createDocumentFragment();
      tn(i, a);
    } else X(t[s], n);
  }
}
var vn;
function rt(e, t, n, r, s, i = null) {
  var a = e, l = /* @__PURE__ */ new Map();
  {
    var o = e;
    a = o.appendChild(be());
  }
  var f = null, u = Jr(() => {
    var p = n();
    return hn(p) ? p : p == null ? [] : Ot(p);
  }), d, v = /* @__PURE__ */ new Map(), _ = true;
  function c(p) {
    g.effect.f & te || (g.pending.delete(p), g.fallback = f, Os(g, d, a, t, r), f !== null && (d.length === 0 ? f.f & ge ? (f.f ^= ge, st(f, null, a)) : en(f) : Le(f, () => {
      f = null;
    })));
  }
  function y(p) {
    g.pending.delete(p);
  }
  var m = Qt(() => {
    d = h(u);
    for (var p = d.length, M = /* @__PURE__ */ new Set(), E = T, O = Cn(), k = 0; k < p; k += 1) {
      var C = d[k], N = r(C, k), L = _ ? null : l.get(N);
      L ? (L.v && Ze(L.v, C), L.i && Ze(L.i, k), O && E.unskip_effect(L.e)) : (L = Ns(l, _ ? a : vn ??= be(), C, N, k, s, t, n), _ || (L.e.f |= ge), l.set(N, L)), M.add(N);
    }
    if (p === 0 && i && !f && (_ ? f = $(() => i(a)) : (f = $(() => i(vn ??= be())), f.f |= ge)), p > M.size && mr(), !_) if (v.set(E, M), O) {
      for (const [I, q] of l) M.has(I) || E.skip_effect(q.e);
      E.oncommit(c), E.ondiscard(y);
    } else c(E);
    h(u);
  }), g = { effect: m, items: l, pending: v, outrogroups: null, fallback: f };
  _ = false;
}
function et(e) {
  for (; e !== null && !(e.f & oe); ) e = e.next;
  return e;
}
function Os(e, t, n, r, s) {
  var i = t.length, a = e.items, l = et(e.effect.first), o, f = null, u = [], d = [], v, _, c, y;
  for (y = 0; y < i; y += 1) {
    if (v = t[y], _ = s(v, y), c = a.get(_).e, e.outrogroups !== null) for (const N of e.outrogroups) N.pending.delete(c), N.done.delete(c);
    if (c.f & G && en(c), c.f & ge) if (c.f ^= ge, c === l) st(c, null, n);
    else {
      var m = f ? f.next : l;
      c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), me(e, f, c), me(e, c, m), st(c, m, n), f = c, u = [], d = [], l = et(f.next);
      continue;
    }
    if (c !== l) {
      if (o !== void 0 && o.has(c)) {
        if (u.length < d.length) {
          var g = d[0], p;
          f = g.prev;
          var M = u[0], E = u[u.length - 1];
          for (p = 0; p < u.length; p += 1) st(u[p], g, n);
          for (p = 0; p < d.length; p += 1) o.delete(d[p]);
          me(e, M.prev, E.next), me(e, f, M), me(e, E, g), l = g, f = E, y -= 1, u = [], d = [];
        } else o.delete(c), st(c, l, n), me(e, c.prev, c.next), me(e, c, f === null ? e.effect.first : f.next), me(e, f, c), f = c;
        continue;
      }
      for (u = [], d = []; l !== null && l !== c; ) (o ??= /* @__PURE__ */ new Set()).add(l), d.push(l), l = et(l.next);
      if (l === null) continue;
    }
    c.f & ge || u.push(c), f = c, l = et(c.next);
  }
  if (e.outrogroups !== null) {
    for (const N of e.outrogroups) N.pending.size === 0 && (Vt(e, Ot(N.done)), e.outrogroups?.delete(N));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || o !== void 0) {
    var O = [];
    if (o !== void 0) for (c of o) c.f & G || O.push(c);
    for (; l !== null; ) !(l.f & G) && l !== e.fallback && O.push(l), l = et(l.next);
    var k = O.length;
    if (k > 0) {
      var C = i === 0 ? n : null;
      Ms(e, O, C);
    }
  }
}
function Ns(e, t, n, r, s, i, a, l) {
  var o = a & Or ? a & Dr ? je(n) : es(n, false, false) : null, f = a & Nr ? je(s) : null;
  return { v: o, i: f, e: $(() => (i(t, o ?? n, f ?? s, l), () => {
    e.delete(r);
  })) };
}
function st(e, t, n) {
  if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, i = t && !(t.f & ge) ? t.nodes.start : n; r !== null; ) {
    var a = gt(r);
    if (i.before(r), r === s) return;
    r = a;
  }
}
function me(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const _n = [...` 	
\r\f\xA0\v\uFEFF`];
function Ds(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var s of Object.keys(n)) if (n[s]) r = r ? r + " " + s : s;
    else if (r.length) for (var i = s.length, a = 0; (a = r.indexOf(s, a)) >= 0; ) {
      var l = a + i;
      (a === 0 || _n.includes(r[a - 1])) && (l === r.length || _n.includes(r[l])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(l + 1) : a = l;
    }
  }
  return r === "" ? null : r;
}
function Mt(e, t, n, r, s, i) {
  var a = e.__className;
  if (a !== n || a === void 0) {
    var l = Ds(n, r, i);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = n;
  } else if (i && s !== i) for (var o in i) {
    var f = !!i[o];
    (s == null || f !== !!s[o]) && e.classList.toggle(o, f);
  }
  return i;
}
const Rs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Rs);
function Is() {
  R._start();
}
function Fs(e) {
  let t, n;
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16), a = nn(e, R.__wbindgen_export), l = Be;
    R.detect_format(i, a, l);
    var r = ce().getInt32(i + 4 * 0, true), s = ce().getInt32(i + 4 * 1, true);
    return t = r, n = s, Et(r, s);
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export3(t, n, 1);
  }
}
function Cs(e, t, n) {
  try {
    const a = R.__wbindgen_add_to_stack_pointer(-16), l = nn(e, R.__wbindgen_export), o = Be;
    R.hex_rows(a, l, o, t, n);
    var r = ce().getInt32(a + 4 * 0, true), s = ce().getInt32(a + 4 * 1, true), i = qs(r, s).slice();
    return R.__wbindgen_export3(r, s * 4, 4), i;
  } finally {
    R.__wbindgen_add_to_stack_pointer(16);
  }
}
function Ls(e) {
  try {
    const s = R.__wbindgen_add_to_stack_pointer(-16), i = nn(e, R.__wbindgen_export), a = Be;
    R.parse_elf(s, i, a);
    var t = ce().getInt32(s + 4 * 0, true), n = ce().getInt32(s + 4 * 1, true), r = ce().getInt32(s + 4 * 2, true);
    if (r) throw Ie(n);
    return Ie(t);
  } finally {
    R.__wbindgen_add_to_stack_pointer(16);
  }
}
function Xn() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(Et(t, n));
    return Oe(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(lt(n)), s = js(r, R.__wbindgen_export, R.__wbindgen_export2), i = Be;
    ce().setInt32(t + 4, i, true), ce().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(Et(t, n));
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return Oe(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return Oe(t);
  }, __wbg_set_6be42768c690e380: function(t, n, r) {
    lt(t)[Ie(n)] = Ie(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    lt(t)[n >>> 0] = Ie(r);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return Oe(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = Et(t, n);
    return Oe(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return Oe(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = lt(t);
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
function Ps(e) {
  e < 1028 || (pe[e] = ut, ut = e);
}
function qs(e, t) {
  e = e >>> 0;
  const n = ce(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(Ie(n.getUint32(s, true)));
  return r;
}
let Ne = null;
function ce() {
  return (Ne === null || Ne.buffer.detached === true || Ne.buffer.detached === void 0 && Ne.buffer !== R.memory.buffer) && (Ne = new DataView(R.memory.buffer)), Ne;
}
function Et(e, t) {
  return Ws(e >>> 0, t);
}
let it = null;
function ft() {
  return (it === null || it.byteLength === 0) && (it = new Uint8Array(R.memory.buffer)), it;
}
function lt(e) {
  return pe[e];
}
let pe = new Array(1024).fill(void 0);
pe.push(void 0, null, true, false);
let ut = pe.length;
function nn(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return ft().set(e, n / 1), Be = e.length, n;
}
function js(e, t, n) {
  if (n === void 0) {
    const l = ct.encode(e), o = t(l.length, 1) >>> 0;
    return ft().subarray(o, o + l.length).set(l), Be = l.length, o;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const i = ft();
  let a = 0;
  for (; a < r; a++) {
    const l = e.charCodeAt(a);
    if (l > 127) break;
    i[s + a] = l;
  }
  if (a !== r) {
    a !== 0 && (e = e.slice(a)), s = n(s, r, r = a + e.length * 3, 1) >>> 0;
    const l = ft().subarray(s + a, s + r), o = ct.encodeInto(e, l);
    a += o.written, s = n(s, r, a, 1) >>> 0;
  }
  return Be = a, s;
}
function Ie(e) {
  const t = lt(e);
  return Ps(e), t;
}
let xt = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
xt.decode();
const Bs = 2146435072;
let Lt = 0;
function Ws(e, t) {
  return Lt += t, Lt >= Bs && (xt = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), xt.decode(), Lt = t), xt.decode(ft().subarray(e, e + t));
}
const ct = new TextEncoder();
"encodeInto" in ct || (ct.encodeInto = function(e, t) {
  const n = ct.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let Be = 0, R;
function Jn(e, t) {
  return R = e.exports, Ne = null, it = null, R.__wbindgen_start(), R;
}
async function zs(e, t) {
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
function Us(e) {
  if (R !== void 0) return R;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = Xn();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return Jn(n);
}
async function Qn(e) {
  if (R !== void 0) return R;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("/v2/assets/scry_core_bg-DqZbL9aM.wasm", import.meta.url));
  const t = Xn();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await zs(await e, t);
  return Jn(n);
}
const Vs = Object.freeze(Object.defineProperty({ __proto__: null, _start: Is, default: Qn, detect_format: Fs, hex_rows: Cs, initSync: Us, parse_elf: Ls }, Symbol.toStringTag, { value: "Module" }));
let Pt = null;
function $n() {
  return Pt || (Pt = Qn()), Pt.then(() => Vs);
}
const Ys = "scry-theme";
function er() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Hs() {
  const e = er() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(Ys, e);
  } catch {
  }
  return e;
}
var Gs = P('<p class="err svelte-1i6c60u"> </p>'), Ks = P('<div role="region" aria-label="Drop a binary"><p class="ti svelte-1i6c60u">[ DROP A BINARY ]</p> <p class="sub svelte-1i6c60u">Drag an ELF onto this panel, or use the picker.</p> <label class="pick svelte-1i6c60u"><input type="file" hidden=""/> <span class="svelte-1i6c60u">Choose file</span></label> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div>');
function Zs(e, t) {
  ht(t, true);
  const n = 64 * 1024 * 1024;
  let r = B(false), s = B("");
  function i(g) {
    return g < 1024 ? g + " B" : g < 1024 * 1024 ? (g / 1024).toFixed(1) + " KiB" : (g / 1024 / 1024).toFixed(1) + " MiB";
  }
  async function a(g) {
    if (D(s, ""), g.size > n) {
      D(s, `file too large (${i(g.size)} > ${i(n)})`);
      return;
    }
    const p = await g.arrayBuffer();
    t.onfile?.({ name: g.name, bytes: new Uint8Array(p) });
  }
  function l(g) {
    g.preventDefault(), D(r, false);
    const p = g.dataTransfer?.files?.[0];
    p && a(p);
  }
  function o(g) {
    g.preventDefault(), D(r, true);
  }
  function f() {
    D(r, false);
  }
  function u(g) {
    const p = g.target.files?.[0];
    p && a(p);
  }
  var d = Ks();
  let v;
  var _ = w(b(d), 4), c = b(_), y = w(_, 2);
  {
    var m = (g) => {
      var p = Gs(), M = b(p);
      U(() => x(M, h(s))), F(g, p);
    };
    ie(y, (g) => {
      h(s) && g(m);
    });
  }
  U(() => v = Mt(d, 1, "drop svelte-1i6c60u", null, v, { hover: h(r) })), Ct("drop", d, l), Ct("dragover", d, o), Ct("dragleave", d, f), fe("change", c, u), F(e, d), pt();
}
Dt(["change"]);
var Xs = P('<span class="ct svelte-etynpr"> </span>'), Js = P('<span class="ct svelte-etynpr"> </span>'), Qs = P('<span class="ct svelte-etynpr"> </span>'), $s = P("<button> <!> <!> <!></button>"), ei = P('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), ti = P('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), ni = P('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ri = P('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), si = P('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ii = P('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), li = P('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ai = P('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function oi(e, t) {
  ht(t, true);
  let n = B("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"]];
  var s = ai(), i = b(s);
  rt(i, 21, () => r, nt, (v, _) => {
    var c = Xr(() => pr(h(_), 2));
    let y = () => h(c)[0], m = () => h(c)[1];
    var g = $s();
    let p;
    var M = b(g), E = w(M);
    {
      var O = (I) => {
        var q = Xs(), Y = b(q);
        U(() => x(Y, t.report.sections.length)), F(I, q);
      };
      ie(E, (I) => {
        y() === "sections" && I(O);
      });
    }
    var k = w(E, 2);
    {
      var C = (I) => {
        var q = Js(), Y = b(q);
        U(() => x(Y, t.report.segments.length)), F(I, q);
      };
      ie(k, (I) => {
        y() === "segments" && I(C);
      });
    }
    var N = w(k, 2);
    {
      var L = (I) => {
        var q = Qs(), Y = b(q);
        U(() => x(Y, t.report.symbols.length)), F(I, q);
      };
      ie(N, (I) => {
        y() === "symbols" && I(L);
      });
    }
    U(() => {
      p = Mt(g, 1, "tab svelte-etynpr", null, p, { active: h(n) === y() }), x(M, `${m() ?? ""} `);
    }), fe("click", g, () => D(n, y(), true)), F(v, g);
  });
  var a = w(i, 2), l = b(a);
  {
    var o = (v) => {
      var _ = ei(), c = w(b(_), 2), y = b(c), m = w(c, 4), g = b(m), p = w(m, 4), M = b(p), E = w(p, 4), O = b(E), k = w(E, 4), C = b(k), N = w(k, 4), L = b(N), I = w(N, 4), q = b(I), Y = w(I, 4), Te = b(Y);
      U(() => {
        x(y, t.report.summary.class), x(g, t.report.summary.data), x(M, t.report.summary.kind), x(O, t.report.summary.machine), x(C, t.report.summary.entry), x(L, t.report.summary.n_sections), x(q, t.report.summary.n_segments), x(Te, t.report.summary.n_symbols);
      }), F(v, _);
    }, f = (v) => {
      var _ = ni(), c = w(b(_));
      rt(c, 21, () => t.report.sections, nt, (y, m) => {
        var g = ti(), p = b(g), M = b(p), E = w(p), O = b(E), k = w(E), C = b(k), N = w(k), L = b(N), I = w(N), q = b(I), Y = w(I), Te = b(Y), ze = w(Y), Qe = b(ze);
        U(() => {
          x(M, h(m).idx), x(O, h(m).name || "\u2014"), x(C, h(m).kind), x(L, h(m).addr), x(q, h(m).offset), x(Te, h(m).size), x(Qe, h(m).flags);
        }), F(y, g);
      }), F(v, _);
    }, u = (v) => {
      var _ = si(), c = w(b(_));
      rt(c, 21, () => t.report.segments, nt, (y, m) => {
        var g = ri(), p = b(g), M = b(p), E = w(p), O = b(E), k = w(E), C = b(k), N = w(k), L = b(N), I = w(N), q = b(I), Y = w(I), Te = b(Y), ze = w(Y), Qe = b(ze);
        U(() => {
          x(M, h(m).idx), x(O, h(m).kind), x(C, h(m).vaddr), x(L, h(m).offset), x(q, h(m).filesz), x(Te, h(m).memsz), x(Qe, h(m).flags);
        }), F(y, g);
      }), F(v, _);
    }, d = (v) => {
      var _ = li(), c = w(b(_));
      rt(c, 21, () => t.report.symbols, nt, (y, m) => {
        var g = ii(), p = b(g), M = b(p), E = w(p), O = b(E), k = w(E), C = b(k), N = w(k), L = b(N), I = w(N), q = b(I);
        U(() => {
          x(M, h(m).name), x(O, h(m).bind), x(C, h(m).kind), x(L, h(m).value), x(q, h(m).size);
        }), F(y, g);
      }), F(v, _);
    };
    ie(l, (v) => {
      h(n) === "summary" ? v(o) : h(n) === "sections" ? v(f, 1) : h(n) === "segments" ? v(u, 2) : h(n) === "symbols" && v(d, 3);
    });
  }
  F(e, s), pt();
}
Dt(["click"]);
var fi = P('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <span class="off svelte-14j5q0g"> </span> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <pre class="grid svelte-14j5q0g"></pre></div>');
function ui(e, t) {
  ht(t, true);
  let n = B(0);
  const r = 16 * 32;
  let s = B(De([])), i = B(null);
  as(() => {
    let p = false;
    return $n().then((M) => {
      p || (D(i, M, true), a());
    }), () => {
      p = true;
    };
  });
  function a() {
    !h(i) || !t.bytes || D(s, h(i).hex_rows(t.bytes, h(n), r), true);
  }
  function l(p) {
    D(n, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, h(n) + p)), true), a();
  }
  var o = fi(), f = b(o), u = w(b(f), 2), d = b(u), v = w(d, 2), _ = w(v, 2), c = b(_), y = w(_, 2), m = w(y, 2), g = w(f, 2);
  rt(g, 21, () => h(s), nt, (p, M) => {
    var E = Es();
    U(() => x(E, `${h(M) ?? ""}
`)), F(p, E);
  }), U((p) => x(c, `@ ${p ?? ""}`), [() => h(n).toString(16).padStart(8, "0").toUpperCase()]), fe("click", d, () => l(-r)), fe("click", v, () => l(-16)), fe("click", y, () => l(16)), fe("click", m, () => l(r)), F(e, o), pt();
}
Dt(["click"]);
var ci = P('<span class="file svelte-1n46o8q"> </span> <button>Close</button>', 1), di = P('<main class="empty svelte-1n46o8q"><!></main>'), vi = P('<span class="why svelte-1n46o8q" title="ELF only in v2 for now"> </span>'), _i = P('<p class="err svelte-1n46o8q"> </p>'), hi = P('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b> </b>. PE / Mach-O / WASM coming after the RV32 disassembler lands.</p>'), pi = P('<nav class="tabs svelte-1n46o8q"><button>INSPECT <!></button> <button>HEX</button></nav> <main class="body svelte-1n46o8q"><!> <!></main>', 1), gi = P('<div class="shell svelte-1n46o8q"><header class="hd svelte-1n46o8q"><span class="brand svelte-1n46o8q">scry / v2</span> <span class="sub svelte-1n46o8q">rust \u2192 wasm \xB7 svelte 5</span> <span class="spacer svelte-1n46o8q"></span> <!> <button class="theme svelte-1n46o8q" aria-label="Toggle theme"> </button> <a class="back svelte-1n46o8q" href="/">\u21A9 scry root</a></header> <!> <footer class="ft svelte-1n46o8q"><span>LOCAL \xB7 NO UPLOAD</span> <span>v0.1 \xB7 scaffolding</span></footer></div>');
function bi(e, t) {
  ht(t, true);
  let n = B(null), r = B(null), s = B(null), i = B(""), a = B("inspect"), l = B(De(er()));
  async function o({ name: E, bytes: O }) {
    D(n, { name: E, bytes: O }, true), D(i, ""), D(s, null), D(r, null);
    try {
      const k = await $n();
      D(r, k.detect_format(O), true), h(r) === "elf" && D(s, k.parse_elf(O), true);
    } catch (k) {
      D(i, String(k), true);
    }
  }
  function f() {
    D(n, null), D(s, null), D(r, null), D(i, "");
  }
  function u() {
    D(l, Hs(), true);
  }
  var d = gi(), v = b(d), _ = w(b(v), 6);
  {
    var c = (E) => {
      var O = ci(), k = Ft(O), C = b(k), N = w(k, 2);
      U((L) => x(C, `${h(n).name ?? ""} \xB7 ${L ?? ""} B \xB7 ${h(r) ?? "\u2026" ?? ""}`), [() => h(n).bytes.length.toLocaleString()]), fe("click", N, f), F(E, O);
    };
    ie(_, (E) => {
      h(n) && E(c);
    });
  }
  var y = w(_, 2), m = b(y), g = w(v, 2);
  {
    var p = (E) => {
      var O = di(), k = b(O);
      Zs(k, { onfile: o }), F(E, O);
    }, M = (E) => {
      var O = pi(), k = Ft(O), C = b(k);
      let N;
      var L = w(b(C));
      {
        var I = (K) => {
          var ye = vi(), $e = b(ye);
          U(() => x($e, `\xB7${h(r) ?? ""}`)), F(K, ye);
        };
        ie(L, (K) => {
          h(r) !== "elf" && K(I);
        });
      }
      var q = w(C, 2);
      let Y;
      var Te = w(k, 2), ze = b(Te);
      {
        var Qe = (K) => {
          var ye = _i(), $e = b(ye);
          U(() => x($e, `parse failed: ${h(i) ?? ""}`)), F(K, ye);
        };
        ie(ze, (K) => {
          h(i) && K(Qe);
        });
      }
      var tr = w(ze, 2);
      {
        var nr = (K) => {
          var ye = xs(), $e = Ft(ye);
          {
            var sr = (Ue) => {
              oi(Ue, { get report() {
                return h(s);
              } });
            }, ir = (Ue) => {
              var rn = hi(), lr = w(b(rn)), ar = b(lr);
              U(() => x(ar, h(r))), F(Ue, rn);
            };
            ie($e, (Ue) => {
              h(s) ? Ue(sr) : h(r) && h(r) !== "elf" && Ue(ir, 1);
            });
          }
          F(K, ye);
        }, rr = (K) => {
          ui(K, { get bytes() {
            return h(n).bytes;
          } });
        };
        ie(tr, (K) => {
          h(a) === "inspect" ? K(nr) : h(a) === "hex" && K(rr, 1);
        });
      }
      U(() => {
        C.disabled = h(r) !== "elf", N = Mt(C, 1, "svelte-1n46o8q", null, N, { active: h(a) === "inspect" }), Y = Mt(q, 1, "svelte-1n46o8q", null, Y, { active: h(a) === "hex" });
      }), fe("click", C, () => D(a, "inspect")), fe("click", q, () => D(a, "hex")), F(E, O);
    };
    ie(g, (E) => {
      h(n) ? E(M, -1) : E(p);
    });
  }
  U(() => x(m, h(l) === "dark" ? "\u263C" : "\u263E")), fe("click", y, u), F(e, d), pt();
}
Dt(["click"]);
ks(bi, { target: document.getElementById("app") });
