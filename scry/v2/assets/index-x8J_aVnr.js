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
const Yr = false;
var Xn = Array.isArray, Gr = Array.prototype.indexOf, dt = Array.prototype.includes, Qt = Array.from, Kr = Object.defineProperty, St = Object.getOwnPropertyDescriptor, Xr = Object.getOwnPropertyDescriptors, Jr = Object.prototype, Zr = Array.prototype, Jn = Object.getPrototypeOf, Ln = Object.isExtensible;
const Qr = () => {
};
function $r(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Zn() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function es(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const ae = 2, Ct = 4, $t = 8, Qn = 1 << 24, ke = 16, Ee = 32, Ve = 64, pn = 128, pe = 512, ee = 1024, se = 2048, Te = 4096, le = 8192, ge = 16384, it = 32768, qn = 1 << 25, vt = 65536, gn = 1 << 17, ts = 1 << 18, gt = 1 << 19, ns = 1 << 20, Se = 1 << 25, rt = 65536, Gt = 1 << 21, Rt = 1 << 22, ze = 1 << 23, on = Symbol("$state"), rs = Symbol(""), Ne = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function ss() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function is(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function as(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ls() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function os(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function fs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function us() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function cs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ds() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function vs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const _s = 1, hs = 2, $n = 4, ps = 8, gs = 16, bs = 1, ys = 2, te = Symbol(), er = "http://www.w3.org/1999/xhtml";
function ms() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ws() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function tr(e) {
  return e === this.v;
}
function xs(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function nr(e) {
  return !xs(e, this.v);
}
let Es = false, ye = null;
function _t(e) {
  ye = e;
}
function Ft(e, t = false, n) {
  ye = { p: ye, i: false, c: null, e: null, s: e, x: null, r: P, l: null };
}
function Lt(e) {
  var t = ye, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) wr(r);
  }
  return t.i = true, ye = t.p, {};
}
function rr() {
  return true;
}
let Qe = [];
function sr() {
  var e = Qe;
  Qe = [], $r(e);
}
function He(e) {
  if (Qe.length === 0 && !kt) {
    var t = Qe;
    queueMicrotask(() => {
      t === Qe && sr();
    });
  }
  Qe.push(e);
}
function As() {
  for (; Qe.length > 0; ) sr();
}
function ir(e) {
  var t = P;
  if (t === null) return B.f |= ze, e;
  if (!(t.f & it) && !(t.f & Ct)) throw e;
  We(e, t);
}
function We(e, t) {
  for (; t !== null; ) {
    if (t.f & pn) {
      if (!(t.f & it)) throw e;
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
const Ss = -7169;
function Q(e, t) {
  e.f = e.f & Ss | t;
}
function kn(e) {
  e.f & pe || e.deps === null ? Q(e, ee) : Q(e, Te);
}
function ar(e) {
  if (e !== null) for (const t of e) !(t.f & ae) || !(t.f & rt) || (t.f ^= rt, ar(t.deps));
}
function lr(e, t, n) {
  e.f & se ? t.add(e) : e.f & Te && n.add(e), ar(e.deps), Q(e, ee);
}
const Je = /* @__PURE__ */ new Set();
let L = null, we = null, bn = null, kt = false, fn = false, ft = null, zt = null;
var Un = 0;
let ks = 1;
class Ye {
  id = ks++;
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
      for (var s of r.d) Q(s, se), n(s);
      for (s of r.m) Q(s, Te), n(s);
    }
    this.#d.add(t);
  }
  #h() {
    if (Un++ > 1e3 && (Je.delete(this), Ms()), !this.#c()) {
      for (const l of this.#f) this.#u.delete(l), Q(l, se), this.schedule(l);
      for (const l of this.#u) Q(l, Te), this.schedule(l);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = ft = [], r = [], s = zt = [];
    for (const l of t) try {
      this.#b(l, n, r);
    } catch (o) {
      throw ur(l), o;
    }
    if (L = null, s.length > 0) {
      var i = Ye.ensure();
      for (const l of s) i.schedule(l);
    }
    if (ft = null, zt = null, this.#c() || this.#g()) {
      this.#p(r), this.#p(n);
      for (const [l, o] of this.#l) fr(l, o);
    } else {
      this.#s.size === 0 && Je.delete(this), this.#f.clear(), this.#u.clear();
      for (const l of this.#n) l(this);
      this.#n.clear(), jn(r), jn(n), this.#i?.resolve();
    }
    var a = L;
    if (this.#t.length > 0) {
      const l = a ??= this;
      l.#t.push(...this.#t.filter((o) => !l.#t.includes(o)));
    }
    a !== null && (Je.add(a), a.#h());
  }
  #b(t, n, r) {
    t.f ^= ee;
    for (var s = t.first; s !== null; ) {
      var i = s.f, a = (i & (Ee | Ve)) !== 0, l = a && (i & ee) !== 0, o = l || (i & le) !== 0 || this.#l.has(s);
      if (!o && s.fn !== null) {
        a ? s.f ^= ee : i & Ct ? n.push(s) : Ut(s) && (i & ke && this.#u.add(s), pt(s));
        var u = s.first;
        if (u !== null) {
          s = u;
          continue;
        }
      }
      for (; s !== null; ) {
        var f = s.next;
        if (f !== null) {
          s = f;
          break;
        }
        s = s.parent;
      }
    }
  }
  #p(t) {
    for (var n = 0; n < t.length; n += 1) lr(t[n], this.#f, this.#u);
  }
  capture(t, n, r = false) {
    t.v !== te && !this.previous.has(t) && this.previous.set(t, t.v), t.f & ze || (this.current.set(t, [n, r]), we?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    L = this;
  }
  deactivate() {
    L = null, we = null;
  }
  flush() {
    try {
      fn = true, L = this, this.#h();
    } finally {
      Un = 0, bn = null, ft = null, zt = null, fn = false, L = null, we = null, et.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Je.delete(this);
  }
  register_created_effect(t) {
    this.#a.push(t);
  }
  #y() {
    for (const f of Je) {
      var t = f.id < this.id, n = [];
      for (const [_, [d, m]] of this.current) {
        if (f.current.has(_)) {
          var r = f.current.get(_)[0];
          if (t && d !== r) f.current.set(_, [d, m]);
          else continue;
        }
        n.push(_);
      }
      var s = [...f.current.keys()].filter((_) => !this.current.has(_));
      if (s.length === 0) t && f.discard();
      else if (n.length > 0) {
        if (t) for (const _ of this.#d) f.unskip_effect(_, (d) => {
          d.f & (ke | Rt) ? f.schedule(d) : f.#p([d]);
        });
        f.activate();
        var i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
        for (var l of n) or(l, s, i, a);
        a = /* @__PURE__ */ new Map();
        var o = [...f.current.keys()].filter((_) => this.current.has(_) ? this.current.get(_)[0] !== _ : true);
        for (const _ of this.#a) !(_.f & (ge | le | gn)) && Tn(_, o, a) && (_.f & (Rt | ke) ? (Q(_, se), f.schedule(_)) : f.#f.add(_));
        if (f.#t.length > 0) {
          f.apply();
          for (var u of f.#t) f.#b(u, [], []);
          f.#t = [];
        }
        f.deactivate();
      }
    }
    for (const f of Je) f.#v.has(this) && (f.#v.delete(this), f.#v.size === 0 && !f.#c() && (f.activate(), f.#h()));
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
    this.#_ || r || (this.#_ = true, He(() => {
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
    return (this.#i ??= Zn()).promise;
  }
  static ensure() {
    if (L === null) {
      const t = L = new Ye();
      fn || (Je.add(L), kt || He(() => {
        L === t && t.flush();
      }));
    }
    return L;
  }
  apply() {
    {
      we = null;
      return;
    }
  }
  schedule(t) {
    if (bn = t, t.b?.is_pending && t.f & (Ct | $t | Qn) && !(t.f & it)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (ft !== null && n === P && (B === null || !(B.f & ae))) return;
      if (r & (Ve | Ee)) {
        if (!(r & ee)) return;
        n.f ^= ee;
      }
    }
    this.#t.push(n);
  }
}
function Ts(e) {
  var t = kt;
  kt = true;
  try {
    for (var n; ; ) {
      if (As(), L === null) return n;
      L.flush();
    }
  } finally {
    kt = t;
  }
}
function Ms() {
  try {
    fs();
  } catch (e) {
    We(e, bn);
  }
}
let Ie = null;
function jn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (ge | le)) && Ut(r) && (Ie = /* @__PURE__ */ new Set(), pt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ar(r), Ie?.size > 0)) {
        et.clear();
        for (const s of Ie) {
          if (s.f & (ge | le)) continue;
          const i = [s];
          let a = s.parent;
          for (; a !== null; ) Ie.has(a) && (Ie.delete(a), i.push(a)), a = a.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const o = i[l];
            o.f & (ge | le) || pt(o);
          }
        }
        Ie.clear();
      }
    }
    Ie = null;
  }
}
function or(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const i = s.f;
    i & ae ? or(s, t, n, r) : i & (Rt | ke) && !(i & se) && Tn(s, t, r) && (Q(s, se), Mn(s));
  }
}
function Tn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (dt.call(t, s)) return true;
    if (s.f & ae && Tn(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function Mn(e) {
  L.schedule(e);
}
function fr(e, t) {
  if (!(e.f & Ee && e.f & ee)) {
    e.f & se ? t.d.push(e) : e.f & Te && t.m.push(e), Q(e, ee);
    for (var n = e.first; n !== null; ) fr(n, t), n = n.next;
  }
}
function ur(e) {
  Q(e, ee);
  for (var t = e.first; t !== null; ) ur(t), t = t.next;
}
function Os(e) {
  let t = 0, n = st(0), r;
  return () => {
    Nn() && (c(n), xr(() => (t === 0 && (r = Dr(() => e(() => Tt(n)))), t += 1, () => {
      He(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Tt(n));
      });
    })));
  };
}
var Is = vt | gt;
function Ns(e, t, n, r) {
  new Cs(e, t, n, r);
}
class Cs {
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
  #g = Os(() => (this.#c = st(this.#u), () => {
    this.#c = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var a = P;
      a.b = this, a.f |= pn, r(i);
    }, this.parent = P.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#r = Cn(() => {
      this.#y();
    }, Is);
  }
  #h() {
    try {
      this.#i = he(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #b(t) {
    const n = this.#e.failed;
    n && (this.#a = he(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #p() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = he(() => t(this.#n)), He(() => {
      var n = this.#f = document.createDocumentFragment(), r = Fe();
      n.append(r), this.#i = this.#w(() => he(() => this.#s(r))), this.#l === 0 && (this.#n.before(n), this.#f = null, tt(this.#t, () => {
        this.#t = null;
      }), this.#m(L));
    }));
  }
  #y() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#u = 0, this.#i = he(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#f = document.createDocumentFragment();
        Fn(this.#i, t);
        const n = this.#e.pending;
        this.#t = he(() => n(this.#n));
      } else this.#m(L);
    } catch (n) {
      this.error(n);
    }
  }
  #m(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#v);
  }
  defer_effect(t) {
    lr(t, this.#_, this.#v);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #w(t) {
    var n = P, r = B, s = ye;
    Me(this.#r), me(this.#r), _t(this.#r.ctx);
    try {
      return Ye.ensure(), t();
    } catch (i) {
      return ir(i), null;
    } finally {
      Me(n), me(r), _t(s);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#m(n), this.#t && tt(this.#t, () => {
      this.#t = null;
    }), this.#f && (this.#n.before(this.#f), this.#f = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#u += t, !(!this.#c || this.#d) && (this.#d = true, He(() => {
      this.#d = false, this.#c && ht(this.#c, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#g(), c(this.#c);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    L?.is_fork ? (this.#i && L.skip_effect(this.#i), this.#t && L.skip_effect(this.#t), this.#a && L.skip_effect(this.#a), L.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#i && (fe(this.#i), this.#i = null), this.#t && (fe(this.#t), this.#t = null), this.#a && (fe(this.#a), this.#a = null);
    var n = this.#e.onerror;
    let r = this.#e.failed;
    var s = false, i = false;
    const a = () => {
      if (s) {
        ws();
        return;
      }
      s = true, i && vs(), this.#a !== null && tt(this.#a, () => {
        this.#a = null;
      }), this.#w(() => {
        this.#y();
      });
    }, l = (o) => {
      try {
        i = true, n?.(o, a), i = false;
      } catch (u) {
        We(u, this.#r && this.#r.parent);
      }
      r && (this.#a = this.#w(() => {
        try {
          return he(() => {
            var u = P;
            u.b = this, u.f |= pn, r(this.#n, () => o, () => a);
          });
        } catch (u) {
          return We(u, this.#r.parent), null;
        }
      }));
    };
    He(() => {
      var o;
      try {
        o = this.transform_error(t);
      } catch (u) {
        We(u, this.#r && this.#r.parent);
        return;
      }
      o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(l, (u) => We(u, this.#r && this.#r.parent)) : l(o);
    });
  }
}
function Rs(e, t, n, r) {
  const s = On;
  var i = e.filter((d) => !d.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var a = P, l = Ds(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((d) => d.promise)) : null;
  function u(d) {
    l();
    try {
      r(d);
    } catch (m) {
      a.f & ge || We(m, a);
    }
    Kt();
  }
  if (n.length === 0) {
    o.then(() => u(t.map(s)));
    return;
  }
  var f = cr();
  function _() {
    Promise.all(n.map((d) => Fs(d))).then((d) => u([...t.map(s), ...d])).catch((d) => We(d, a)).finally(() => f());
  }
  o ? o.then(() => {
    l(), _(), Kt();
  }) : _();
}
function Ds() {
  var e = P, t = B, n = ye, r = L;
  return function(i = true) {
    Me(e), me(t), _t(n), i && !(e.f & ge) && (r?.activate(), r?.apply());
  };
}
function Kt(e = true) {
  Me(null), me(null), _t(null), e && L?.deactivate();
}
function cr() {
  var e = P, t = e.b, n = L, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function On(e) {
  var t = ae | se;
  return P !== null && (P.f |= gt), { ctx: ye, deps: null, effects: null, equals: tr, f: t, fn: e, reactions: null, rv: 0, v: te, wv: 0, parent: P, ac: null };
}
function Fs(e, t, n) {
  let r = P;
  r === null && ss();
  var s = void 0, i = st(te), a = !B, l = /* @__PURE__ */ new Map();
  return Xs(() => {
    var o = P, u = Zn();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Kt);
    } catch (m) {
      u.reject(m), Kt();
    }
    var f = L;
    if (a) {
      if (o.f & it) var _ = cr();
      if (r.b.is_rendered()) l.get(f)?.reject(Ne), l.delete(f);
      else {
        for (const m of l.values()) m.reject(Ne);
        l.clear();
      }
      l.set(f, u);
    }
    const d = (m, b = void 0) => {
      if (_) {
        var O = b === Ne;
        _(O);
      }
      if (!(b === Ne || o.f & ge)) {
        if (f.activate(), b) i.f |= ze, ht(i, b);
        else {
          i.f & ze && (i.f ^= ze), ht(i, m);
          for (const [h, T] of l) {
            if (l.delete(h), h === f) break;
            T.reject(Ne);
          }
        }
        f.deactivate();
      }
    };
    u.promise.then(d, (m) => d(null, m || "unknown"));
  }), mr(() => {
    for (const o of l.values()) o.reject(Ne);
  }), new Promise((o) => {
    function u(f) {
      function _() {
        f === s ? o(i) : u(s);
      }
      f.then(_, _);
    }
    u(s);
  });
}
function ut(e) {
  const t = On(e);
  return Tr(t), t;
}
function Ls(e) {
  const t = On(e);
  return t.equals = nr, t;
}
function qs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) fe(t[n]);
  }
}
function In(e) {
  var t, n = P, r = e.parent;
  if (!Ge && r !== null && r.f & (ge | le)) return ms(), e.v;
  Me(r);
  try {
    e.f &= ~rt, qs(e), t = Nr(e);
  } finally {
    Me(n);
  }
  return t;
}
function dr(e) {
  var t = In(e);
  if (!e.equals(t) && (e.wv = Or(), (!L?.is_fork || e.deps === null) && (L !== null ? L.capture(e, t, true) : e.v = t, e.deps === null))) {
    Q(e, ee);
    return;
  }
  Ge || (we !== null ? (Nn() || L?.is_fork) && we.set(e, t) : kn(e));
}
function Us(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Ne), t.teardown = Qr, t.ac = null, Dt(t, 0), Rn(t));
}
function vr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && pt(t);
}
let yn = /* @__PURE__ */ new Set();
const et = /* @__PURE__ */ new Map();
let _r = false;
function st(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: tr, rv: 0, wv: 0 };
  return n;
}
function V(e, t) {
  const n = st(e);
  return Tr(n), n;
}
function js(e, t = false, n = true) {
  const r = st(e);
  return t || (r.equals = nr), r;
}
function y(e, t, n = false) {
  B !== null && (!xe || B.f & gn) && rr() && B.f & (ae | ke | Rt | gn) && (be === null || !dt.call(be, e)) && ds();
  let r = n ? Re(t) : t;
  return ht(e, r, zt);
}
function ht(e, t, n = null) {
  if (!e.equals(t)) {
    et.set(e, Ge ? t : e.v);
    var r = Ye.ensure();
    if (r.capture(e, t), e.f & ae) {
      const s = e;
      e.f & se && In(s), we === null && kn(s);
    }
    e.wv = Or(), hr(e, se, n), P !== null && P.f & ee && !(P.f & (Ee | Ve)) && (_e === null ? Qs([e]) : _e.push(e)), !r.is_fork && yn.size > 0 && !_r && Ps();
  }
  return t;
}
function Ps() {
  _r = false;
  for (const e of yn) e.f & ee && Q(e, Te), Ut(e) && pt(e);
  yn.clear();
}
function Tt(e) {
  y(e, e.v + 1);
}
function hr(e, t, n) {
  var r = e.reactions;
  if (r !== null) for (var s = r.length, i = 0; i < s; i++) {
    var a = r[i], l = a.f, o = (l & se) === 0;
    if (o && Q(a, t), l & ae) {
      var u = a;
      we?.delete(u), l & rt || (l & pe && (P === null || !(P.f & Gt)) && (a.f |= rt), hr(u, Te, n));
    } else if (o) {
      var f = a;
      l & ke && Ie !== null && Ie.add(f), n !== null ? n.push(f) : Mn(f);
    }
  }
}
function Re(e) {
  if (typeof e != "object" || e === null || on in e) return e;
  const t = Jn(e);
  if (t !== Jr && t !== Zr) return e;
  var n = /* @__PURE__ */ new Map(), r = Xn(e), s = V(0), i = nt, a = (l) => {
    if (nt === i) return l();
    var o = B, u = nt;
    me(null), zn(i);
    var f = l();
    return me(o), zn(u), f;
  };
  return r && n.set("length", V(e.length)), new Proxy(e, { defineProperty(l, o, u) {
    (!("value" in u) || u.configurable === false || u.enumerable === false || u.writable === false) && us();
    var f = n.get(o);
    return f === void 0 ? a(() => {
      var _ = V(u.value);
      return n.set(o, _), _;
    }) : y(f, u.value, true), true;
  }, deleteProperty(l, o) {
    var u = n.get(o);
    if (u === void 0) {
      if (o in l) {
        const f = a(() => V(te));
        n.set(o, f), Tt(s);
      }
    } else y(u, te), Tt(s);
    return true;
  }, get(l, o, u) {
    if (o === on) return e;
    var f = n.get(o), _ = o in l;
    if (f === void 0 && (!_ || St(l, o)?.writable) && (f = a(() => {
      var m = Re(_ ? l[o] : te), b = V(m);
      return b;
    }), n.set(o, f)), f !== void 0) {
      var d = c(f);
      return d === te ? void 0 : d;
    }
    return Reflect.get(l, o, u);
  }, getOwnPropertyDescriptor(l, o) {
    var u = Reflect.getOwnPropertyDescriptor(l, o);
    if (u && "value" in u) {
      var f = n.get(o);
      f && (u.value = c(f));
    } else if (u === void 0) {
      var _ = n.get(o), d = _?.v;
      if (_ !== void 0 && d !== te) return { enumerable: true, configurable: true, value: d, writable: true };
    }
    return u;
  }, has(l, o) {
    if (o === on) return true;
    var u = n.get(o), f = u !== void 0 && u.v !== te || Reflect.has(l, o);
    if (u !== void 0 || P !== null && (!f || St(l, o)?.writable)) {
      u === void 0 && (u = a(() => {
        var d = f ? Re(l[o]) : te, m = V(d);
        return m;
      }), n.set(o, u));
      var _ = c(u);
      if (_ === te) return false;
    }
    return f;
  }, set(l, o, u, f) {
    var _ = n.get(o), d = o in l;
    if (r && o === "length") for (var m = u; m < _.v; m += 1) {
      var b = n.get(m + "");
      b !== void 0 ? y(b, te) : m in l && (b = a(() => V(te)), n.set(m + "", b));
    }
    if (_ === void 0) (!d || St(l, o)?.writable) && (_ = a(() => V(void 0)), y(_, Re(u)), n.set(o, _));
    else {
      d = _.v !== te;
      var O = a(() => Re(u));
      y(_, O);
    }
    var h = Reflect.getOwnPropertyDescriptor(l, o);
    if (h?.set && h.set.call(f, u), !d) {
      if (r && typeof o == "string") {
        var T = n.get("length"), A = Number(o);
        Number.isInteger(A) && A >= T.v && y(T, A + 1);
      }
      Tt(s);
    }
    return true;
  }, ownKeys(l) {
    c(s);
    var o = Reflect.ownKeys(l).filter((_) => {
      var d = n.get(_);
      return d === void 0 || d.v !== te;
    });
    for (var [u, f] of n) f.v !== te && !(u in l) && o.push(u);
    return o;
  }, setPrototypeOf() {
    cs();
  } });
}
var Pn, pr, gr, br;
function Bs() {
  if (Pn === void 0) {
    Pn = window, pr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    gr = St(t, "firstChild").get, br = St(t, "nextSibling").get, Ln(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ln(n) && (n.__t = void 0);
  }
}
function Fe(e = "") {
  return document.createTextNode(e);
}
function Xt(e) {
  return gr.call(e);
}
function qt(e) {
  return br.call(e);
}
function v(e, t) {
  return Xt(e);
}
function mn(e, t = false) {
  {
    var n = Xt(e);
    return n instanceof Comment && n.data === "" ? qt(n) : n;
  }
}
function p(e, t = 1, n = false) {
  let r = e;
  for (; t--; ) r = qt(r);
  return r;
}
function Ws(e) {
  e.textContent = "";
}
function yr() {
  return false;
}
function zs(e, t, n) {
  return document.createElementNS(er, e, void 0);
}
let Bn = false;
function Hs() {
  Bn || (Bn = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function en(e) {
  var t = B, n = P;
  me(null), Me(null);
  try {
    return e();
  } finally {
    me(t), Me(n);
  }
}
function Vs(e, t, n, r = n) {
  e.addEventListener(t, () => en(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(true);
  } : e.__on_r = () => r(true), Hs();
}
function Ys(e) {
  P === null && (B === null && os(), ls()), Ge && as();
}
function Gs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ke(e, t) {
  var n = P;
  n !== null && n.f & le && (e |= le);
  var r = { ctx: ye, deps: null, nodes: null, f: e | se | pe, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  L?.register_created_effect(r);
  var s = r;
  if (e & Ct) ft !== null ? ft.push(r) : Ye.ensure().schedule(r);
  else if (t !== null) {
    try {
      pt(r);
    } catch (a) {
      throw fe(r), a;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & gt) && (s = s.first, e & ke && e & vt && s !== null && (s.f |= vt));
  }
  if (s !== null && (s.parent = n, n !== null && Gs(s, n), B !== null && B.f & ae && !(e & Ve))) {
    var i = B;
    (i.effects ??= []).push(s);
  }
  return r;
}
function Nn() {
  return B !== null && !xe;
}
function mr(e) {
  const t = Ke($t, null);
  return Q(t, ee), t.teardown = e, t;
}
function Jt(e) {
  Ys();
  var t = P.f, n = !B && (t & Ee) !== 0 && (t & it) === 0;
  if (n) {
    var r = ye;
    (r.e ??= []).push(e);
  } else return wr(e);
}
function wr(e) {
  return Ke(Ct | ns, e);
}
function Ks(e) {
  Ye.ensure();
  const t = Ke(Ve | gt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? tt(t, () => {
      fe(t), r(void 0);
    }) : (fe(t), r(void 0));
  });
}
function Xs(e) {
  return Ke(Rt | gt, e);
}
function xr(e, t = 0) {
  return Ke($t | t, e);
}
function Y(e, t = [], n = [], r = []) {
  Rs(r, t, n, (s) => {
    Ke($t, () => e(...s.map(c)));
  });
}
function Cn(e, t = 0) {
  var n = Ke(ke | t, e);
  return n;
}
function he(e) {
  return Ke(Ee | gt, e);
}
function Er(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ge, r = B;
    Wn(true), me(null);
    try {
      t.call(null);
    } finally {
      Wn(n), me(r);
    }
  }
}
function Rn(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && en(() => {
      s.abort(Ne);
    });
    var r = n.next;
    n.f & Ve ? n.parent = null : fe(n, t), n = r;
  }
}
function Js(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ee || fe(t), t = n;
  }
}
function fe(e, t = true) {
  var n = false;
  (t || e.f & ts) && e.nodes !== null && e.nodes.end !== null && (Zs(e.nodes.start, e.nodes.end), n = true), Q(e, qn), Rn(e, t && !n), Dt(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const i of r) i.stop();
  Er(e), e.f ^= qn, e.f |= ge;
  var s = e.parent;
  s !== null && s.first !== null && Ar(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Zs(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : qt(e);
    e.remove(), e = n;
  }
}
function Ar(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function tt(e, t, n = true) {
  var r = [];
  Sr(e, r, true);
  var s = () => {
    n && fe(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var a = () => --i || s();
    for (var l of r) l.out(a);
  } else s();
}
function Sr(e, t, n) {
  if (!(e.f & le)) {
    e.f ^= le;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const l of r) (l.is_global || n) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if (!(s.f & Ve)) {
        var a = (s.f & vt) !== 0 || (s.f & Ee) !== 0 && (e.f & ke) !== 0;
        Sr(s, t, a ? n : false);
      }
      s = i;
    }
  }
}
function Dn(e) {
  kr(e, true);
}
function kr(e, t) {
  if (e.f & le) {
    e.f ^= le, e.f & ee || (Q(e, se), Ye.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & vt) !== 0 || (n.f & Ee) !== 0;
      kr(n, s ? t : false), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const a of i) (a.is_global || t) && a.in();
  }
}
function Fn(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : qt(n);
    t.append(n), n = s;
  }
}
let Ht = false, Ge = false;
function Wn(e) {
  Ge = e;
}
let B = null, xe = false;
function me(e) {
  B = e;
}
let P = null;
function Me(e) {
  P = e;
}
let be = null;
function Tr(e) {
  B !== null && (be === null ? be = [e] : be.push(e));
}
let oe = null, ue = 0, _e = null;
function Qs(e) {
  _e = e;
}
let Mr = 1, $e = 0, nt = $e;
function zn(e) {
  nt = e;
}
function Or() {
  return ++Mr;
}
function Ut(e) {
  var t = e.f;
  if (t & se) return true;
  if (t & ae && (e.f &= ~rt), t & Te) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (Ut(i) && dr(i), i.wv > e.wv) return true;
    }
    t & pe && we === null && Q(e, ee);
  }
  return false;
}
function Ir(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(be !== null && dt.call(be, e))) for (var s = 0; s < r.length; s++) {
    var i = r[s];
    i.f & ae ? Ir(i, t, false) : t === i && (n ? Q(i, se) : i.f & ee && Q(i, Te), Mn(i));
  }
}
function Nr(e) {
  var t = oe, n = ue, r = _e, s = B, i = be, a = ye, l = xe, o = nt, u = e.f;
  oe = null, ue = 0, _e = null, B = u & (Ee | Ve) ? null : e, be = null, _t(e.ctx), xe = false, nt = ++$e, e.ac !== null && (en(() => {
    e.ac.abort(Ne);
  }), e.ac = null);
  try {
    e.f |= Gt;
    var f = e.fn, _ = f();
    e.f |= it;
    var d = e.deps, m = L?.is_fork;
    if (oe !== null) {
      var b;
      if (m || Dt(e, ue), d !== null && ue > 0) for (d.length = ue + oe.length, b = 0; b < oe.length; b++) d[ue + b] = oe[b];
      else e.deps = d = oe;
      if (Nn() && e.f & pe) for (b = ue; b < d.length; b++) (d[b].reactions ??= []).push(e);
    } else !m && d !== null && ue < d.length && (Dt(e, ue), d.length = ue);
    if (rr() && _e !== null && !xe && d !== null && !(e.f & (ae | Te | se))) for (b = 0; b < _e.length; b++) Ir(_e[b], e);
    if (s !== null && s !== e) {
      if ($e++, s.deps !== null) for (let O = 0; O < n; O += 1) s.deps[O].rv = $e;
      if (t !== null) for (const O of t) O.rv = $e;
      _e !== null && (r === null ? r = _e : r.push(..._e));
    }
    return e.f & ze && (e.f ^= ze), _;
  } catch (O) {
    return ir(O);
  } finally {
    e.f ^= Gt, oe = t, ue = n, _e = r, B = s, be = i, _t(a), xe = l, nt = o;
  }
}
function $s(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Gr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & ae && (oe === null || !dt.call(oe, t))) {
    var i = t;
    i.f & pe && (i.f ^= pe, i.f &= ~rt), i.v !== te && kn(i), Us(i), Dt(i, 0);
  }
}
function Dt(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) $s(e, n[r]);
}
function pt(e) {
  var t = e.f;
  if (!(t & ge)) {
    Q(e, ee);
    var n = P, r = Ht;
    P = e, Ht = true;
    try {
      t & (ke | Qn) ? Js(e) : Rn(e), Er(e);
      var s = Nr(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = Mr;
      var i;
      Yr && Es && e.f & se && e.deps;
    } finally {
      Ht = r, P = n;
    }
  }
}
async function ei() {
  await Promise.resolve(), Ts();
}
function c(e) {
  var t = e.f, n = (t & ae) !== 0;
  if (B !== null && !xe) {
    var r = P !== null && (P.f & ge) !== 0;
    if (!r && (be === null || !dt.call(be, e))) {
      var s = B.deps;
      if (B.f & Gt) e.rv < $e && (e.rv = $e, oe === null && s !== null && s[ue] === e ? ue++ : oe === null ? oe = [e] : oe.push(e));
      else {
        (B.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [B] : dt.call(i, B) || i.push(B);
      }
    }
  }
  if (Ge && et.has(e)) return et.get(e);
  if (n) {
    var a = e;
    if (Ge) {
      var l = a.v;
      return (!(a.f & ee) && a.reactions !== null || Rr(a)) && (l = In(a)), et.set(a, l), l;
    }
    var o = (a.f & pe) === 0 && !xe && B !== null && (Ht || (B.f & pe) !== 0), u = (a.f & it) === 0;
    Ut(a) && (o && (a.f |= pe), dr(a)), o && !u && (vr(a), Cr(a));
  }
  if (we?.has(e)) return we.get(e);
  if (e.f & ze) throw e.v;
  return e.v;
}
function Cr(e) {
  if (e.f |= pe, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & ae && !(t.f & pe) && (vr(t), Cr(t));
}
function Rr(e) {
  if (e.v === te) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (et.has(t) || t.f & ae && Rr(t)) return true;
  return false;
}
function Dr(e) {
  var t = xe;
  try {
    return xe = true, e();
  } finally {
    xe = t;
  }
}
const ti = ["touchstart", "touchmove"];
function ni(e) {
  return ti.includes(e);
}
const mt = Symbol("events"), Fr = /* @__PURE__ */ new Set(), wn = /* @__PURE__ */ new Set();
function ri(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || xn.call(t, i), !i.cancelBubble) return en(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? He(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Vt(e, t, n, r, s) {
  var i = { capture: r, passive: s }, a = ri(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && mr(() => {
    t.removeEventListener(e, a, i);
  });
}
function ie(e, t, n) {
  (t[mt] ??= {})[e] = n;
}
function tn(e) {
  for (var t = 0; t < e.length; t++) Fr.add(e[t]);
  for (var n of wn) n(e);
}
let Hn = null;
function xn(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], i = s[0] || e.target;
  Hn = e;
  var a = 0, l = Hn === e && e[mt];
  if (l) {
    var o = s.indexOf(l);
    if (o !== -1 && (t === document || t === window)) {
      e[mt] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1) return;
    o <= u && (a = o);
  }
  if (i = s[a] || e.target, i !== t) {
    Kr(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var f = B, _ = P;
    me(null), Me(null);
    try {
      for (var d, m = []; i !== null; ) {
        var b = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var O = i[mt]?.[r];
          O != null && (!i.disabled || e.target === i) && O.call(i, e);
        } catch (h) {
          d ? m.push(h) : d = h;
        }
        if (e.cancelBubble || b === t || b === null) break;
        i = b;
      }
      if (d) {
        for (let h of m) queueMicrotask(() => {
          throw h;
        });
        throw d;
      }
    } finally {
      e[mt] = t, delete e.currentTarget, me(f), Me(_);
    }
  }
}
const si = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ii(e) {
  return si?.createHTML(e) ?? e;
}
function ai(e) {
  var t = zs("template");
  return t.innerHTML = ii(e.replaceAll("<!>", "<!---->")), t.content;
}
function Zt(e, t) {
  var n = P;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function j(e, t) {
  var n = (t & bs) !== 0, r = (t & ys) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = ai(i ? e : "<!>" + e), n || (s = Xt(s)));
    var a = r || pr ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var l = Xt(a), o = a.lastChild;
      Zt(l, o);
    } else Zt(a, a);
    return a;
  };
}
function li(e = "") {
  {
    var t = Fe(e + "");
    return Zt(t, t), t;
  }
}
function oi() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Fe();
  return e.append(t, n), Zt(t, n), e;
}
function q(e, t) {
  e !== null && e.before(t);
}
function w(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function fi(e, t) {
  return ui(e, t);
}
const Wt = /* @__PURE__ */ new Map();
function ui(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: a = true, transformError: l }) {
  Bs();
  var o = void 0, u = Ks(() => {
    var f = n ?? t.appendChild(Fe());
    Ns(f, { pending: () => {
    } }, (m) => {
      Ft({});
      var b = ye;
      i && (b.c = i), s && (r.$$events = s), o = e(m, r) || {}, Lt();
    }, l);
    var _ = /* @__PURE__ */ new Set(), d = (m) => {
      for (var b = 0; b < m.length; b++) {
        var O = m[b];
        if (!_.has(O)) {
          _.add(O);
          var h = ni(O);
          for (const E of [t, document]) {
            var T = Wt.get(E);
            T === void 0 && (T = /* @__PURE__ */ new Map(), Wt.set(E, T));
            var A = T.get(O);
            A === void 0 ? (E.addEventListener(O, xn, { passive: h }), T.set(O, 1)) : T.set(O, A + 1);
          }
        }
      }
    };
    return d(Qt(Fr)), wn.add(d), () => {
      for (var m of _) for (const h of [t, document]) {
        var b = Wt.get(h), O = b.get(m);
        --O == 0 ? (h.removeEventListener(m, xn), b.delete(m), b.size === 0 && Wt.delete(h)) : b.set(m, O);
      }
      wn.delete(d), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return ci.set(o, u), o;
}
let ci = /* @__PURE__ */ new WeakMap();
class di {
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
      if (r) Dn(r), this.#s.delete(n);
      else {
        var s = this.#e.get(n);
        s && (this.#o.set(n, s.effect), this.#e.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [i, a] of this.#n) {
        if (this.#n.delete(i), i === t) break;
        const l = this.#e.get(a);
        l && (fe(l.effect), this.#e.delete(a));
      }
      for (const [i, a] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const l = () => {
          if (Array.from(this.#n.values()).includes(i)) {
            var u = document.createDocumentFragment();
            Fn(a, u), u.append(Fe()), this.#e.set(i, { effect: a, fragment: u });
          } else fe(a);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !r ? (this.#s.add(i), tt(a, l, false)) : l();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (fe(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = L, s = yr();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var i = document.createDocumentFragment(), a = Fe();
      i.append(a), this.#e.set(t, { effect: he(() => n(a)), fragment: i });
    } else this.#o.set(t, he(() => n(this.anchor)));
    if (this.#n.set(r, t), s) {
      for (const [l, o] of this.#o) l === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [l, o] of this.#e) l === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(this.#i), r.ondiscard(this.#t);
    } else this.#i(r);
  }
}
function $(e, t, n = false) {
  var r = new di(e), s = n ? vt : 0;
  function i(a, l) {
    r.ensure(a, l);
  }
  Cn(() => {
    var a = false;
    t((l, o = 0) => {
      a = true, i(o, l);
    }), a || i(-1, null);
  }, s);
}
function Pe(e, t) {
  return t;
}
function vi(e, t, n) {
  for (var r = [], s = t.length, i, a = t.length, l = 0; l < s; l++) {
    let _ = t[l];
    tt(_, () => {
      if (i) {
        if (i.pending.delete(_), i.done.add(_), i.pending.size === 0) {
          var d = e.outrogroups;
          En(e, Qt(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
        }
      } else a -= 1;
    }, false);
  }
  if (a === 0) {
    var o = r.length === 0 && n !== null;
    if (o) {
      var u = n, f = u.parentNode;
      Ws(f), f.append(u), e.items.clear();
    }
    En(e, t, !o);
  } else i = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function En(e, t, n = true) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const a of e.pending.values()) for (const l of a) r.add(e.items.get(l).e);
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (r?.has(i)) {
      i.f |= Se;
      const a = document.createDocumentFragment();
      Fn(i, a);
    } else fe(t[s], n);
  }
}
var Vn;
function Be(e, t, n, r, s, i = null) {
  var a = e, l = /* @__PURE__ */ new Map(), o = (t & $n) !== 0;
  if (o) {
    var u = e;
    a = u.appendChild(Fe());
  }
  var f = null, _ = Ls(() => {
    var E = n();
    return Xn(E) ? E : E == null ? [] : Qt(E);
  }), d, m = /* @__PURE__ */ new Map(), b = true;
  function O(E) {
    A.effect.f & ge || (A.pending.delete(E), A.fallback = f, _i(A, d, a, t, r), f !== null && (d.length === 0 ? f.f & Se ? (f.f ^= Se, wt(f, null, a)) : Dn(f) : tt(f, () => {
      f = null;
    })));
  }
  function h(E) {
    A.pending.delete(E);
  }
  var T = Cn(() => {
    d = c(_);
    for (var E = d.length, D = /* @__PURE__ */ new Set(), U = L, S = yr(), M = 0; M < E; M += 1) {
      var W = d[M], G = r(W, M), N = b ? null : l.get(G);
      N ? (N.v && ht(N.v, W), N.i && ht(N.i, M), S && U.unskip_effect(N.e)) : (N = hi(l, b ? a : Vn ??= Fe(), W, G, M, s, t, n), b || (N.e.f |= Se), l.set(G, N)), D.add(G);
    }
    if (E === 0 && i && !f && (b ? f = he(() => i(a)) : (f = he(() => i(Vn ??= Fe())), f.f |= Se)), E > D.size && is(), !b) if (m.set(U, D), S) {
      for (const [I, C] of l) D.has(I) || U.skip_effect(C.e);
      U.oncommit(O), U.ondiscard(h);
    } else O(U);
    c(_);
  }), A = { effect: T, items: l, pending: m, outrogroups: null, fallback: f };
  b = false;
}
function yt(e) {
  for (; e !== null && !(e.f & Ee); ) e = e.next;
  return e;
}
function _i(e, t, n, r, s) {
  var i = (r & ps) !== 0, a = t.length, l = e.items, o = yt(e.effect.first), u, f = null, _, d = [], m = [], b, O, h, T;
  if (i) for (T = 0; T < a; T += 1) b = t[T], O = s(b, T), h = l.get(O).e, h.f & Se || (h.nodes?.a?.measure(), (_ ??= /* @__PURE__ */ new Set()).add(h));
  for (T = 0; T < a; T += 1) {
    if (b = t[T], O = s(b, T), h = l.get(O).e, e.outrogroups !== null) for (const N of e.outrogroups) N.pending.delete(h), N.done.delete(h);
    if (h.f & le && (Dn(h), i && (h.nodes?.a?.unfix(), (_ ??= /* @__PURE__ */ new Set()).delete(h))), h.f & Se) if (h.f ^= Se, h === o) wt(h, null, n);
    else {
      var A = f ? f.next : o;
      h === e.effect.last && (e.effect.last = h.prev), h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), Ue(e, f, h), Ue(e, h, A), wt(h, A, n), f = h, d = [], m = [], o = yt(f.next);
      continue;
    }
    if (h !== o) {
      if (u !== void 0 && u.has(h)) {
        if (d.length < m.length) {
          var E = m[0], D;
          f = E.prev;
          var U = d[0], S = d[d.length - 1];
          for (D = 0; D < d.length; D += 1) wt(d[D], E, n);
          for (D = 0; D < m.length; D += 1) u.delete(m[D]);
          Ue(e, U.prev, S.next), Ue(e, f, U), Ue(e, S, E), o = E, f = S, T -= 1, d = [], m = [];
        } else u.delete(h), wt(h, o, n), Ue(e, h.prev, h.next), Ue(e, h, f === null ? e.effect.first : f.next), Ue(e, f, h), f = h;
        continue;
      }
      for (d = [], m = []; o !== null && o !== h; ) (u ??= /* @__PURE__ */ new Set()).add(o), m.push(o), o = yt(o.next);
      if (o === null) continue;
    }
    h.f & Se || d.push(h), f = h, o = yt(h.next);
  }
  if (e.outrogroups !== null) {
    for (const N of e.outrogroups) N.pending.size === 0 && (En(e, Qt(N.done)), e.outrogroups?.delete(N));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || u !== void 0) {
    var M = [];
    if (u !== void 0) for (h of u) h.f & le || M.push(h);
    for (; o !== null; ) !(o.f & le) && o !== e.fallback && M.push(o), o = yt(o.next);
    var W = M.length;
    if (W > 0) {
      var G = r & $n && a === 0 ? n : null;
      if (i) {
        for (T = 0; T < W; T += 1) M[T].nodes?.a?.measure();
        for (T = 0; T < W; T += 1) M[T].nodes?.a?.fix();
      }
      vi(e, M, G);
    }
  }
  i && He(() => {
    if (_ !== void 0) for (h of _) h.nodes?.a?.apply();
  });
}
function hi(e, t, n, r, s, i, a, l) {
  var o = a & _s ? a & gs ? st(n) : js(n, false, false) : null, u = a & hs ? st(s) : null;
  return { v: o, i: u, e: he(() => (i(t, o ?? n, u ?? s, l), () => {
    e.delete(r);
  })) };
}
function wt(e, t, n) {
  if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, i = t && !(t.f & Se) ? t.nodes.start : n; r !== null; ) {
    var a = qt(r);
    if (i.before(r), r === s) return;
    r = a;
  }
}
function Ue(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const Yn = [...` 	
\r\f\xA0\v\uFEFF`];
function pi(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var s of Object.keys(n)) if (n[s]) r = r ? r + " " + s : s;
    else if (r.length) for (var i = s.length, a = 0; (a = r.indexOf(s, a)) >= 0; ) {
      var l = a + i;
      (a === 0 || Yn.includes(r[a - 1])) && (l === r.length || Yn.includes(r[l])) ? r = (a === 0 ? "" : r.substring(0, a)) + r.substring(l + 1) : a = l;
    }
  }
  return r === "" ? null : r;
}
function gi(e, t) {
  return e == null ? null : String(e);
}
function Mt(e, t, n, r, s, i) {
  var a = e.__className;
  if (a !== n || a === void 0) {
    var l = pi(n, r, i);
    l == null ? e.removeAttribute("class") : e.className = l, e.__className = n;
  } else if (i && s !== i) for (var o in i) {
    var u = !!i[o];
    (s == null || u !== !!s[o]) && e.classList.toggle(o, u);
  }
  return i;
}
function An(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var i = gi(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return r;
}
const bi = Symbol("is custom element"), yi = Symbol("is html");
function ct(e, t, n, r) {
  var s = mi(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[rs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && wi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function mi(e) {
  return e.__attributes ??= { [bi]: e.nodeName.includes("-"), [yi]: e.namespaceURI === er };
}
var Gn = /* @__PURE__ */ new Map();
function wi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Gn.get(t);
  if (n) return n;
  Gn.set(t, n = []);
  for (var r, s = e, i = Element.prototype; i !== s; ) {
    r = Xr(s);
    for (var a in r) r[a].set && n.push(a);
    s = Jn(s);
  }
  return n;
}
function Lr(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Vs(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = un(e) ? cn(i) : i, n(i), L !== null && r.add(L), await ei(), i !== (i = t())) {
      var a = e.selectionStart, l = e.selectionEnd, o = e.value.length;
      if (e.value = i ?? "", l !== null) {
        var u = e.value.length;
        a === l && l === o && u > o ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = a, e.selectionEnd = Math.min(l, u));
      }
    }
  }), Dr(t) == null && e.value && (n(un(e) ? cn(e.value) : e.value), L !== null && r.add(L)), xr(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = L;
      if (r.has(i)) return;
    }
    un(e) && s === cn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function un(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function cn(e) {
  return e === "" ? null : +e;
}
function xi(e, t, n, r) {
  var s = r, i = true, a = () => (i && (i = false, s = r), s), l;
  l = e[t], l === void 0 && r !== void 0 && (l = a());
  var o;
  return o = () => {
    var u = e[t];
    return u === void 0 ? a() : (i = true, u);
  }, o;
}
const Ei = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ei);
function Ai() {
  R._start();
}
function Si(e) {
  let t, n;
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16), a = jt(e, R.__wbindgen_export), l = Oe;
    R.detect_format(i, a, l);
    var r = re().getInt32(i + 4 * 0, true), s = re().getInt32(i + 4 * 1, true);
    return t = r, n = s, Et(r, s);
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export3(t, n, 1);
  }
}
function ki(e, t) {
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16), a = jt(e, R.__wbindgen_export), l = Oe;
    R.entropy_blocks(i, a, l, t);
    var n = re().getInt32(i + 4 * 0, true), r = re().getInt32(i + 4 * 1, true), s = Ni(n, r).slice();
    return R.__wbindgen_export3(n, r * 4, 4), s;
  } finally {
    R.__wbindgen_add_to_stack_pointer(16);
  }
}
function Ti(e, t) {
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16), a = jt(e, R.__wbindgen_export), l = Oe;
    R.extract_strings(i, a, l, t);
    var n = re().getInt32(i + 4 * 0, true), r = re().getInt32(i + 4 * 1, true), s = re().getInt32(i + 4 * 2, true);
    if (s) throw De(r);
    return De(n);
  } finally {
    R.__wbindgen_add_to_stack_pointer(16);
  }
}
function Mi(e, t, n) {
  try {
    const a = R.__wbindgen_add_to_stack_pointer(-16), l = jt(e, R.__wbindgen_export), o = Oe;
    R.hex_rows(a, l, o, t, n);
    var r = re().getInt32(a + 4 * 0, true), s = re().getInt32(a + 4 * 1, true), i = Ci(r, s).slice();
    return R.__wbindgen_export3(r, s * 4, 4), i;
  } finally {
    R.__wbindgen_add_to_stack_pointer(16);
  }
}
function Oi(e) {
  try {
    const s = R.__wbindgen_add_to_stack_pointer(-16), i = jt(e, R.__wbindgen_export), a = Oe;
    R.parse_elf(s, i, a);
    var t = re().getInt32(s + 4 * 0, true), n = re().getInt32(s + 4 * 1, true), r = re().getInt32(s + 4 * 2, true);
    if (r) throw De(n);
    return De(t);
  } finally {
    R.__wbindgen_add_to_stack_pointer(16);
  }
}
function qr() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(Et(t, n));
    return je(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(ot(n)), s = Kn(r, R.__wbindgen_export, R.__wbindgen_export2), i = Oe;
    re().setInt32(t + 4, i, true), re().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(Et(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let r, s;
    try {
      r = t, s = n, console.error(Et(t, n));
    } finally {
      R.__wbindgen_export3(r, s, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return je(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return je(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return je(t);
  }, __wbg_set_6be42768c690e380: function(t, n, r) {
    ot(t)[De(n)] = De(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    ot(t)[n >>> 0] = De(r);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const r = ot(n).stack, s = Kn(r, R.__wbindgen_export, R.__wbindgen_export2), i = Oe;
    re().setInt32(t + 4, i, true), re().setInt32(t + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return je(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = Et(t, n);
    return je(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return je(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = ot(t);
    return je(n);
  }, __wbindgen_object_drop_ref: function(t) {
    De(t);
  } } };
}
function je(e) {
  It === Ce.length && Ce.push(Ce.length + 1);
  const t = It;
  return It = Ce[t], Ce[t] = e, t;
}
function Ii(e) {
  e < 1028 || (Ce[e] = It, It = e);
}
function Ni(e, t) {
  return e = e >>> 0, Ri().subarray(e / 4, e / 4 + t);
}
function Ci(e, t) {
  e = e >>> 0;
  const n = re(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(De(n.getUint32(s, true)));
  return r;
}
let Ze = null;
function re() {
  return (Ze === null || Ze.buffer.detached === true || Ze.buffer.detached === void 0 && Ze.buffer !== R.memory.buffer) && (Ze = new DataView(R.memory.buffer)), Ze;
}
let xt = null;
function Ri() {
  return (xt === null || xt.byteLength === 0) && (xt = new Float32Array(R.memory.buffer)), xt;
}
function Et(e, t) {
  return Fi(e >>> 0, t);
}
let At = null;
function Ot() {
  return (At === null || At.byteLength === 0) && (At = new Uint8Array(R.memory.buffer)), At;
}
function ot(e) {
  return Ce[e];
}
let Ce = new Array(1024).fill(void 0);
Ce.push(void 0, null, true, false);
let It = Ce.length;
function jt(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return Ot().set(e, n / 1), Oe = e.length, n;
}
function Kn(e, t, n) {
  if (n === void 0) {
    const l = Nt.encode(e), o = t(l.length, 1) >>> 0;
    return Ot().subarray(o, o + l.length).set(l), Oe = l.length, o;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const i = Ot();
  let a = 0;
  for (; a < r; a++) {
    const l = e.charCodeAt(a);
    if (l > 127) break;
    i[s + a] = l;
  }
  if (a !== r) {
    a !== 0 && (e = e.slice(a)), s = n(s, r, r = a + e.length * 3, 1) >>> 0;
    const l = Ot().subarray(s + a, s + r), o = Nt.encodeInto(e, l);
    a += o.written, s = n(s, r, a, 1) >>> 0;
  }
  return Oe = a, s;
}
function De(e) {
  const t = ot(e);
  return Ii(e), t;
}
let Yt = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Yt.decode();
const Di = 2146435072;
let dn = 0;
function Fi(e, t) {
  return dn += t, dn >= Di && (Yt = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Yt.decode(), dn = t), Yt.decode(Ot().subarray(e, e + t));
}
const Nt = new TextEncoder();
"encodeInto" in Nt || (Nt.encodeInto = function(e, t) {
  const n = Nt.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let Oe = 0, R;
function Ur(e, t) {
  return R = e.exports, Ze = null, xt = null, At = null, R.__wbindgen_start(), R;
}
async function Li(e, t) {
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
function qi(e) {
  if (R !== void 0) return R;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = qr();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return Ur(n);
}
async function jr(e) {
  if (R !== void 0) return R;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-ChW3TUjf.wasm", import.meta.url).href, import.meta.url));
  const t = qr();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await Li(await e, t);
  return Ur(n);
}
const Ui = Object.freeze(Object.defineProperty({ __proto__: null, _start: Ai, default: jr, detect_format: Si, entropy_blocks: ki, extract_strings: Ti, hex_rows: Mi, initSync: qi, parse_elf: Oi }, Symbol.toStringTag, { value: "Module" }));
let vn = null;
function Pr() {
  return vn || (vn = jr()), vn.then(() => Ui);
}
const ji = "scry-theme";
function Br() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Pi() {
  const e = Br() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(ji, e);
  } catch {
  }
  return e;
}
const Sn = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), _n = 65536, hn = Sn.length * 4;
function Wr() {
  const n = 84 + hn, r = new ArrayBuffer(n), s = new DataView(r), i = new Uint8Array(r);
  i[0] = 127, i[1] = 69, i[2] = 76, i[3] = 70, i[4] = 1, i[5] = 1, i[6] = 1, s.setUint16(16, 2, true), s.setUint16(18, 243, true), s.setUint32(20, 1, true), s.setUint32(24, _n, true), s.setUint32(28, 52, true), s.setUint32(32, 0, true), s.setUint32(36, 0, true), s.setUint16(40, 52, true), s.setUint16(42, 32, true), s.setUint16(44, 1, true), s.setUint16(46, 0, true), s.setUint16(48, 0, true), s.setUint16(50, 0, true), s.setUint32(52, 1, true), s.setUint32(56, 84, true), s.setUint32(60, _n, true), s.setUint32(64, _n, true), s.setUint32(68, hn, true), s.setUint32(72, hn, true), s.setUint32(76, 5, true), s.setUint32(80, 4096, true);
  for (let a = 0; a < Sn.length; a++) s.setUint32(84 + a * 4, Sn[a], true);
  return new Uint8Array(r);
}
const zr = "demo-rv32-spi-i2c.elf";
var Bi = j('<button type="button" class="sample svelte-1i6c60u"> </button>'), Wi = j('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), zi = j('<p class="loading svelte-1i6c60u"> </p>'), Hi = j('<p class="err svelte-1i6c60u"> </p>'), Vi = j('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden=""/> <span>Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Yi(e, t) {
  Ft(t, true);
  const n = 64 * 1024 * 1024, r = /^[A-Za-z0-9._-]+\.elf$/;
  let s = V(false), i = V(""), a = V(Re([])), l = V("");
  function o(g) {
    return g < 1024 ? g + " B" : g < 1024 * 1024 ? (g / 1024).toFixed(1) + " KiB" : (g / 1024 / 1024).toFixed(1) + " MiB";
  }
  async function u(g) {
    if (y(i, ""), g.size > n) {
      y(i, `file too large (${o(g.size)} > ${o(n)})`);
      return;
    }
    const x = await g.arrayBuffer();
    t.onfile?.({ name: g.name, bytes: new Uint8Array(x) });
  }
  function f(g) {
    g.preventDefault(), y(s, false);
    const x = g.dataTransfer?.files?.[0];
    x && u(x);
  }
  function _(g) {
    g.preventDefault(), y(s, true);
  }
  function d() {
    y(s, false);
  }
  function m(g) {
    const x = g.target.files?.[0];
    x && u(x);
  }
  async function b(g) {
    if (!r.test(g)) {
      y(i, `sample blocked: bad name "${g}"`);
      return;
    }
    y(i, ""), y(l, `fetching ${g}\u2026`);
    try {
      const x = await fetch(`../v1/samples/${encodeURIComponent(g)}`);
      if (!x.ok) {
        y(i, `fetch failed: ${x.status}`), y(l, "");
        return;
      }
      y(l, `reading ${g}\u2026`);
      const H = new Uint8Array(await x.arrayBuffer());
      y(l, ""), t.onfile?.({ name: g, bytes: H });
    } catch (x) {
      y(i, String(x), true), y(l, "");
    }
  }
  function O() {
    y(i, ""), t.onfile?.({ name: zr, bytes: Wr() });
  }
  Jt(() => {
    let g = false;
    return (async () => {
      try {
        const x = await fetch("../v1/samples/manifest.json");
        if (!x.ok) return;
        const H = await x.json();
        !g && Array.isArray(H) && y(a, H, true);
      } catch {
      }
    })(), () => {
      g = true;
    };
  });
  var h = Vi(), T = v(h);
  let A;
  var E = p(v(T), 4), D = v(E), U = v(D), S = p(D, 2), M = p(E, 2);
  {
    var W = (g) => {
      var x = Wi(), H = p(v(x), 2);
      Be(H, 21, () => c(a), Pe, (F, K) => {
        var J = Bi(), ce = v(J);
        Y(() => {
          ct(J, "title", `${c(K).desc ?? ""} \u2014 ${c(K).insns ?? ""} instructions`), w(ce, c(K).file);
        }), ie("click", J, () => b(c(K).file)), q(F, J);
      });
      var Z = p(H, 2), ne = v(Z);
      Y((F) => w(ne, F), [() => c(a).map((F) => `${F.file} \u2014 ${F.desc}`).join("  \xB7  ")]), q(g, x);
    };
    $(M, (g) => {
      c(a).length && g(W);
    });
  }
  var G = p(M, 2);
  {
    var N = (g) => {
      var x = zi(), H = v(x);
      Y(() => w(H, c(l))), q(g, x);
    };
    $(G, (g) => {
      c(l) && g(N);
    });
  }
  var I = p(G, 2);
  {
    var C = (g) => {
      var x = Hi(), H = v(x);
      Y(() => w(H, c(i))), q(g, x);
    };
    $(I, (g) => {
      c(i) && g(C);
    });
  }
  Y(() => A = Mt(T, 1, "zone svelte-1i6c60u", null, A, { over: c(s) })), Vt("drop", T, f), Vt("dragover", T, _), Vt("dragleave", T, d), ie("change", U, m), ie("click", S, O), q(e, h), Lt();
}
tn(["change", "click"]);
var Gi = j('<span class="ct svelte-etynpr"> </span>'), Ki = j('<span class="ct svelte-etynpr"> </span>'), Xi = j('<span class="ct svelte-etynpr"> </span>'), Ji = j('<span class="ct svelte-etynpr"> </span>'), Zi = j("<button> <!> <!> <!> <!></button>"), Qi = j('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), $i = j('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), ea = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ta = j('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), na = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ra = j('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), sa = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ia = j('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), aa = j('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), la = j('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function oa(e, t) {
  Ft(t, true);
  let n = V("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let s = V(""), i = ut(() => {
    if (!t.strings) return [];
    const A = c(s).trim().toLowerCase();
    return A ? t.strings.filter((E) => E.text.toLowerCase().includes(A)) : t.strings;
  });
  const a = 80, l = ut(() => t.report ? Math.max(1, ...t.report.sections.map((A) => Number(A.size) || 0)) : 1);
  function o(A) {
    return "0x" + Number(A).toString(16).toUpperCase().padStart(8, "0");
  }
  var u = la(), f = v(u);
  Be(f, 21, () => r, Pe, (A, E) => {
    var D = ut(() => es(c(E), 2));
    let U = () => c(D)[0], S = () => c(D)[1];
    var M = Zi();
    let W;
    var G = v(M), N = p(G);
    {
      var I = (F) => {
        var K = Gi(), J = v(K);
        Y(() => w(J, t.report.sections.length)), q(F, K);
      };
      $(N, (F) => {
        U() === "sections" && F(I);
      });
    }
    var C = p(N, 2);
    {
      var g = (F) => {
        var K = Ki(), J = v(K);
        Y(() => w(J, t.report.segments.length)), q(F, K);
      };
      $(C, (F) => {
        U() === "segments" && F(g);
      });
    }
    var x = p(C, 2);
    {
      var H = (F) => {
        var K = Xi(), J = v(K);
        Y(() => w(J, t.report.symbols.length)), q(F, K);
      };
      $(x, (F) => {
        U() === "symbols" && F(H);
      });
    }
    var Z = p(x, 2);
    {
      var ne = (F) => {
        var K = Ji(), J = v(K);
        Y(() => w(J, t.strings.length)), q(F, K);
      };
      $(Z, (F) => {
        U() === "strings" && t.strings && F(ne);
      });
    }
    Y(() => {
      W = Mt(M, 1, "tab svelte-etynpr", null, W, { active: c(n) === U() }), w(G, `${S() ?? ""} `);
    }), ie("click", M, () => y(n, U(), true)), q(A, M);
  });
  var _ = p(f, 2), d = v(_);
  {
    var m = (A) => {
      var E = Qi(), D = p(v(E), 2), U = v(D), S = p(D, 4), M = v(S), W = p(S, 4), G = v(W), N = p(W, 4), I = v(N), C = p(N, 4), g = v(C), x = p(C, 4), H = v(x), Z = p(x, 4), ne = v(Z), F = p(Z, 4), K = v(F), J = p(F, 4), ce = v(J);
      Y(() => {
        w(U, t.report.summary.class), w(M, t.report.summary.data), w(G, t.report.summary.osabi), w(I, t.report.summary.kind), w(g, t.report.summary.machine), w(H, t.report.summary.entry), w(ne, t.report.summary.n_sections), w(K, t.report.summary.n_segments), w(ce, t.report.summary.n_symbols);
      }), q(A, E);
    }, b = (A) => {
      var E = ea(), D = p(v(E));
      Be(D, 21, () => t.report.sections, Pe, (U, S) => {
        var M = $i(), W = v(M), G = v(W), N = p(W), I = v(N), C = p(N), g = v(C), x = p(C), H = v(x), Z = p(x), ne = v(Z), F = p(Z), K = v(F), J = p(F), ce = v(J), nn = p(J), Pt = v(nn);
        Y((rn) => {
          ct(M, "title", `Jump to offset ${c(S).offset ?? ""} in HEX`), w(G, c(S).idx), w(I, c(S).name || "\u2014"), w(g, c(S).kind), w(H, c(S).addr), w(ne, c(S).offset), w(K, c(S).size), w(ce, c(S).flags), An(Pt, `width: ${rn ?? ""}px`);
        }, [() => Math.max(1, Number(c(S).size) / c(l) * a)]), ie("click", M, () => t.onJumpToOffset?.(parseInt(c(S).offset, 16))), q(U, M);
      }), q(A, E);
    }, O = (A) => {
      var E = na(), D = p(v(E));
      Be(D, 21, () => t.report.segments, Pe, (U, S) => {
        var M = ta(), W = v(M), G = v(W), N = p(W), I = v(N), C = p(N), g = v(C), x = p(C), H = v(x), Z = p(x), ne = v(Z), F = p(Z), K = v(F), J = p(F), ce = v(J);
        Y(() => {
          ct(M, "title", `Jump to offset ${c(S).offset ?? ""} in HEX`), w(G, c(S).idx), w(I, c(S).kind), w(g, c(S).vaddr), w(H, c(S).offset), w(ne, c(S).filesz), w(K, c(S).memsz), w(ce, c(S).flags);
        }), ie("click", M, () => t.onJumpToOffset?.(parseInt(c(S).offset, 16))), q(U, M);
      }), q(A, E);
    }, h = (A) => {
      var E = sa(), D = p(v(E));
      Be(D, 21, () => t.report.symbols, Pe, (U, S) => {
        var M = ra(), W = v(M), G = v(W), N = p(W), I = v(N), C = p(N), g = v(C), x = p(C), H = v(x), Z = p(x), ne = v(Z);
        Y(() => {
          w(G, c(S).name), w(I, c(S).bind), w(g, c(S).kind), w(H, c(S).value), w(ne, c(S).size);
        }), q(U, M);
      }), q(A, E);
    }, T = (A) => {
      var E = aa(), D = mn(E), U = v(D), S = p(U, 2), M = v(S), W = p(D, 2), G = p(v(W));
      Be(G, 21, () => c(i), Pe, (N, I) => {
        var C = ia(), g = v(C), x = v(g), H = p(g), Z = v(H);
        Y((ne, F) => {
          ct(C, "title", `Jump to offset ${ne ?? ""} in HEX`), w(x, F), w(Z, c(I).text);
        }, [() => o(c(I).offset), () => o(c(I).offset)]), ie("click", C, () => t.onJumpToOffset?.(c(I).offset)), q(N, C);
      }), Y(() => w(M, `${c(i).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), Lr(U, () => c(s), (N) => y(s, N)), q(A, E);
    };
    $(d, (A) => {
      c(n) === "summary" ? A(m) : c(n) === "sections" ? A(b, 1) : c(n) === "segments" ? A(O, 2) : c(n) === "symbols" ? A(h, 3) : c(n) === "strings" && A(T, 4);
    });
  }
  q(e, u), Lt();
}
tn(["click"]);
var fa = j('<span class="strip-col svelte-14j5q0g"></span>'), ua = j('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), ca = j('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <!> <pre class="grid svelte-14j5q0g"></pre></div>');
function da(e, t) {
  Ft(t, true);
  let n = xi(t, "jumpTo", 3, null), r = V(0);
  const s = 16 * 32;
  let i = V(Re([])), a = V(null), l = V(Re([])), o = V(0), u = V("");
  Jt(() => {
    let I = false;
    return Pr().then((C) => {
      if (I) return;
      y(a, C, true), y(o, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), y(l, t.bytes ? c(a).entropy_blocks(t.bytes, c(o)) : [], true), f();
    }), () => {
      I = true;
    };
  }), Jt(() => {
    if (n() == null) return;
    const I = Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Number(n()) | 0));
    y(r, Math.floor(I / 16) * 16), f();
  });
  function f() {
    !c(a) || !t.bytes || y(i, c(a).hex_rows(t.bytes, c(r), s), true);
  }
  function _(I) {
    y(r, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, c(r) + I)), true), y(r, Math.floor(c(r) / 16) * 16), f();
  }
  function d(I) {
    I.preventDefault();
    let C = c(u).trim();
    if (!C) return;
    (C.startsWith("0x") || C.startsWith("0X")) && (C = C.slice(2));
    const g = parseInt(C, 16);
    Number.isFinite(g) && (y(r, Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, g)), true), y(r, Math.floor(c(r) / 16) * 16), f());
  }
  function m(I) {
    if (!c(l).length || !t.bytes) return;
    const g = I.currentTarget.getBoundingClientRect(), x = Math.max(0, Math.min(1, (I.clientX - g.left) / g.width)), H = Math.floor(x * t.bytes.length);
    y(r, Math.floor(H / 16) * 16), f();
  }
  let b = ut(() => t.bytes && t.bytes.length ? c(r) / t.bytes.length : 0);
  var O = ca(), h = v(O), T = p(v(h), 2), A = v(T), E = p(A, 2), D = p(E, 2), U = p(v(D), 2), S = p(D, 2), M = p(S, 2), W = p(h, 2);
  {
    var G = (I) => {
      var C = ua(), g = p(v(C), 2), x = v(g);
      Be(x, 17, () => c(l), Pe, (F, K) => {
        var J = fa();
        Y((ce) => An(J, `height: ${ce ?? ""}%; opacity: ${0.35 + c(K) * 0.65}`), [() => Math.max(2, c(K) * 100)]), q(F, J);
      });
      var H = p(x, 2), Z = p(g, 2), ne = v(Z);
      Y((F) => {
        An(H, `left: ${c(b) * 100}%`), w(ne, `${F ?? ""} B / col`);
      }, [() => c(o).toLocaleString()]), ie("click", g, m), q(I, C);
    };
    $(W, (I) => {
      c(l).length > 1 && I(G);
    });
  }
  var N = p(W, 2);
  Be(N, 21, () => c(i), Pe, (I, C) => {
    var g = li();
    Y(() => w(g, `${c(C) ?? ""}
`)), q(I, g);
  }), Y((I) => ct(U, "placeholder", I), [() => c(r).toString(16).padStart(8, "0").toUpperCase()]), ie("click", A, () => _(-s)), ie("click", E, () => _(-16)), Vt("submit", D, d), Lr(U, () => c(u), (I) => y(u, I)), ie("click", S, () => _(16)), ie("click", M, () => _(s)), q(e, O), Lt();
}
tn(["click"]);
var va = j('<span class="s-brand svelte-1n46o8q">scry</span>'), _a = j('<span class="s-badge svelte-1n46o8q"> </span>'), ha = j('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), pa = j('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">FILE<span class="v svelte-1n46o8q"> </span></span> <span class="svelte-1n46o8q">SIZE<span class="v svelte-1n46o8q"> </span></span> <!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), ga = j('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), ba = j('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), ya = j('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), ma = j('<p class="err svelte-1n46o8q"> </p>'), wa = j('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), xa = j("<!> <!>", 1), Ea = j('<span class="s-hint svelte-1n46o8q"> </span>'), Aa = j('<div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <!> <main class="s-main svelte-1n46o8q"><!></main> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>');
function Sa(e, t) {
  Ft(t, true);
  let n = V(null), r = V(null), s = V(null), i = V(null), a = V(""), l = V("inspect"), o = V(Re(Br())), u = V(false), f = V(null);
  const _ = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip" }, d = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  Jt(() => {
    function k(X) {
      if (X.origin !== location.origin) return;
      const z = X.data;
      z && (z.type === "scry-theme" && (z.value === "light" || z.value === "dark") ? (document.documentElement.setAttribute("data-theme", z.value), y(o, z.value, true)) : z.type === "scry-load-demo" && T());
    }
    return window.addEventListener("message", k), () => window.removeEventListener("message", k);
  });
  function m(k) {
    return k < 1024 ? k + " B" : k < 1024 * 1024 ? (k / 1024).toFixed(1) + " KiB" : (k / 1024 / 1024).toFixed(1) + " MiB";
  }
  async function b({ name: k, bytes: X }) {
    y(n, { name: k, bytes: X }, true), y(a, ""), y(s, null), y(i, null), y(r, null), y(u, true);
    try {
      const z = await Pr();
      y(r, z.detect_format(X), true), c(r) === "elf" && y(s, z.parse_elf(X), true), y(i, z.extract_strings(X, 4), true);
    } catch (z) {
      y(a, String(z), true);
    } finally {
      y(u, false);
    }
  }
  function O() {
    y(n, null), y(s, null), y(i, null), y(r, null), y(a, "");
  }
  function h() {
    y(o, Pi(), true);
  }
  function T() {
    b({ name: zr, bytes: Wr() });
  }
  function A(k) {
    y(l, "hex"), y(f, { o: k, t: performance.now() }, true);
  }
  let E = ut(() => {
    if (!c(n)) return null;
    if (c(s)) {
      const k = c(s).summary;
      return [c(r)?.toUpperCase(), k.machine, k.class, k.kind].filter(Boolean).join(" \xB7 ");
    }
    return (c(r) || "raw").toUpperCase();
  });
  var D = Aa();
  let U;
  var S = v(D), M = v(S);
  {
    var W = (k) => {
      var X = va();
      q(k, X);
    };
    $(M, (k) => {
      d || k(W);
    });
  }
  var G = p(M, 2);
  {
    var N = (k) => {
      var X = pa(), z = v(X), Le = p(v(z)), at = v(Le), Xe = p(z, 2), sn = p(v(Xe)), de = v(sn), Ae = p(Xe, 2);
      {
        var bt = (ve) => {
          var lt = _a(), ln = v(lt);
          Y(() => w(ln, `[ ${c(E) ?? ""} ]`)), q(ve, lt);
        };
        $(Ae, (ve) => {
          c(E) && ve(bt);
        });
      }
      var Bt = p(Ae, 2);
      {
        var an = (ve) => {
          var lt = ha();
          q(ve, lt);
        };
        $(Bt, (ve) => {
          c(u) && ve(an);
        });
      }
      var qe = p(Bt, 2);
      Y((ve) => {
        w(at, c(n).name), w(de, ve);
      }, [() => m(c(n).bytes.length)]), ie("click", qe, O), q(k, X);
    }, I = (k) => {
      var X = ga();
      q(k, X);
    };
    $(G, (k) => {
      c(n) ? k(N) : k(I, -1);
    });
  }
  var C = p(G, 2);
  {
    var g = (k) => {
      var X = ba(), z = v(X), Le = v(z);
      Y(() => w(Le, c(o) === "dark" ? "\u263C" : "\u263E")), ie("click", z, h), q(k, X);
    };
    $(C, (k) => {
      d || k(g);
    });
  }
  var x = p(S, 2);
  {
    var H = (k) => {
      var X = ya(), z = v(X);
      let Le;
      var at = p(z, 2);
      let Xe;
      Y(() => {
        z.disabled = c(r) !== "elf", ct(z, "title", c(r) === "elf" ? "" : "INSPECT is ELF-only"), Le = Mt(z, 1, "svelte-1n46o8q", null, Le, { on: c(l) === "inspect" }), Xe = Mt(at, 1, "svelte-1n46o8q", null, Xe, { on: c(l) === "hex" });
      }), ie("click", z, () => y(l, "inspect")), ie("click", at, () => y(l, "hex")), q(k, X);
    };
    $(x, (k) => {
      c(n) && k(H);
    });
  }
  var Z = p(x, 2), ne = v(Z);
  {
    var F = (k) => {
      Yi(k, { onfile: b });
    }, K = (k) => {
      var X = xa(), z = mn(X);
      {
        var Le = (de) => {
          var Ae = ma(), bt = v(Ae);
          Y(() => w(bt, `parse failed: ${c(a) ?? ""}`)), q(de, Ae);
        };
        $(z, (de) => {
          c(a) && de(Le);
        });
      }
      var at = p(z, 2);
      {
        var Xe = (de) => {
          var Ae = oi(), bt = mn(Ae);
          {
            var Bt = (qe) => {
              oa(qe, { get report() {
                return c(s);
              }, get strings() {
                return c(i);
              }, onJumpToOffset: A });
            }, an = (qe) => {
              var ve = wa(), lt = p(v(ve)), ln = v(lt);
              Y(() => w(ln, c(r))), q(qe, ve);
            };
            $(bt, (qe) => {
              c(s) ? qe(Bt) : c(r) && c(r) !== "elf" && qe(an, 1);
            });
          }
          q(de, Ae);
        }, sn = (de) => {
          {
            let Ae = ut(() => c(f)?.o);
            da(de, { get bytes() {
              return c(n).bytes;
            }, get jumpTo() {
              return c(Ae);
            } });
          }
        };
        $(at, (de) => {
          c(l) === "inspect" ? de(Xe) : c(l) === "hex" && de(sn, 1);
        });
      }
      q(k, X);
    };
    $(ne, (k) => {
      c(n) ? k(K, -1) : k(F);
    });
  }
  var J = p(Z, 2), ce = v(J), nn = p(v(ce)), Pt = p(ce, 2);
  {
    var rn = (k) => {
      var X = Ea(), z = v(X);
      Y(() => w(z, _[c(l)] ?? "")), q(k, X);
    };
    $(Pt, (k) => {
      c(n) && k(rn);
    });
  }
  var Hr = p(Pt, 2), Vr = v(Hr);
  Y((k) => {
    U = Mt(D, 1, "app svelte-1n46o8q", null, U, { embedded: d }), w(nn, `${c(n) ? "READY" : "AWAITING FILE"} \xB7 LOCAL \xB7 NO UPLOAD`), w(Vr, `MODULE \xB7 ${k ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => c(n) ? c(l).toUpperCase() : "EMPTY"]), q(e, D), Lt();
}
tn(["click"]);
fi(Sa, { target: document.getElementById("app") });
