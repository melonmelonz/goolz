(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const a of r) if (a.type === "childList") for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && s(l);
  }).observe(document, { childList: true, subtree: true });
  function n(r) {
    const a = {};
    return r.integrity && (a.integrity = r.integrity), r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function s(r) {
    if (r.ep) return;
    r.ep = true;
    const a = n(r);
    fetch(r.href, a);
  }
})();
const As = false;
var Ar = Array.isArray, ks = Array.prototype.indexOf, Vt = Array.prototype.includes, On = Array.from, Ss = Object.defineProperty, rn = Object.getOwnPropertyDescriptor, Ts = Object.getOwnPropertyDescriptors, Ms = Object.prototype, Cs = Array.prototype, kr = Object.getPrototypeOf, cr = Object.isExtensible;
const Os = () => {
};
function Fs(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Sr() {
  var e, t, n = new Promise((s, r) => {
    e = s, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
function Is(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const s of e) if (n.push(s), n.length === t) break;
  return n;
}
const ge = 2, zt = 4, Fn = 8, Tr = 1 << 24, rt = 16, Je = 32, Et = 64, Bn = 128, Le = 512, ve = 1024, he = 2048, at = 4096, ye = 8192, qe = 16384, Lt = 32768, Wn = 1 << 25, Ht = 65536, Vn = 1 << 17, Rs = 1 << 18, Xt = 1 << 19, js = 1 << 20, tt = 1 << 25, Dt = 65536, Sn = 1 << 21, cn = 1 << 22, wt = 1 << 23, xn = Symbol("$state"), Ds = Symbol(""), ot = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Ns() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ls(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function qs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Us() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ps(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ws() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Gs = 1, Ys = 2, Mr = 4, Ks = 8, Xs = 16, Js = 1, Zs = 2, de = Symbol(), Cr = "http://www.w3.org/1999/xhtml";
function Qs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function $s() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Or(e) {
  return e === this.v;
}
function ea(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Fr(e) {
  return !ea(e, this.v);
}
let ta = false, Fe = null;
function Gt(e) {
  Fe = e;
}
function dt(e, t = false, n) {
  Fe = { p: Fe, i: false, c: null, e: null, s: e, x: null, r: J, l: null };
}
function _t(e) {
  var t = Fe, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var s of n) Jr(s);
  }
  return t.i = true, Fe = t.p, {};
}
function Ir() {
  return true;
}
let Ot = [];
function Rr() {
  var e = Ot;
  Ot = [], Fs(e);
}
function yt(e) {
  if (Ot.length === 0 && !sn) {
    var t = Ot;
    queueMicrotask(() => {
      t === Ot && Rr();
    });
  }
  Ot.push(e);
}
function na() {
  for (; Ot.length > 0; ) Rr();
}
function jr(e) {
  var t = J;
  if (t === null) return Z.f |= wt, e;
  if (!(t.f & Lt) && !(t.f & zt)) throw e;
  mt(e, t);
}
function mt(e, t) {
  for (; t !== null; ) {
    if (t.f & Bn) {
      if (!(t.f & Lt)) throw e;
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
const ra = -7169;
function oe(e, t) {
  e.f = e.f & ra | t;
}
function $n(e) {
  e.f & Le || e.deps === null ? oe(e, ve) : oe(e, at);
}
function Dr(e) {
  if (e !== null) for (const t of e) !(t.f & ge) || !(t.f & Dt) || (t.f ^= Dt, Dr(t.deps));
}
function Nr(e, t, n) {
  e.f & he ? t.add(e) : e.f & at && n.add(e), Dr(e.deps), oe(e, ve);
}
const Mt = /* @__PURE__ */ new Set();
let Y = null, Ye = null, zn = null, sn = false, jn = false, Pt = null, En = null;
var ur = 0;
let sa = 1;
class At {
  id = sa++;
  current = /* @__PURE__ */ new Map();
  previous = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  #o = /* @__PURE__ */ new Set();
  #e = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Map();
  #r = /* @__PURE__ */ new Map();
  #a = null;
  #t = [];
  #i = [];
  #f = /* @__PURE__ */ new Set();
  #c = /* @__PURE__ */ new Set();
  #l = /* @__PURE__ */ new Map();
  #v = /* @__PURE__ */ new Set();
  is_fork = false;
  #_ = false;
  #d = /* @__PURE__ */ new Set();
  #u() {
    return this.is_fork || this.#r.size > 0;
  }
  #g() {
    for (const s of this.#d) for (const r of s.#r.keys()) {
      for (var t = false, n = r; n.parent !== null; ) {
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
    this.#l.has(t) || this.#l.set(t, { d: [], m: [] }), this.#v.delete(t);
  }
  unskip_effect(t, n = (s) => this.schedule(s)) {
    var s = this.#l.get(t);
    if (s) {
      this.#l.delete(t);
      for (var r of s.d) oe(r, he), n(r);
      for (r of s.m) oe(r, at), n(r);
    }
    this.#v.add(t);
  }
  #p() {
    if (ur++ > 1e3 && (Mt.delete(this), ia()), !this.#u()) {
      for (const o of this.#f) this.#c.delete(o), oe(o, he), this.schedule(o);
      for (const o of this.#c) oe(o, at), this.schedule(o);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = Pt = [], s = [], r = En = [];
    for (const o of t) try {
      this.#b(o, n, s);
    } catch (f) {
      throw Ur(o), f;
    }
    if (Y = null, r.length > 0) {
      var a = At.ensure();
      for (const o of r) a.schedule(o);
    }
    if (Pt = null, En = null, this.#u() || this.#g()) {
      this.#h(s), this.#h(n);
      for (const [o, f] of this.#l) qr(o, f);
    } else {
      this.#s.size === 0 && Mt.delete(this), this.#f.clear(), this.#c.clear();
      for (const o of this.#n) o(this);
      this.#n.clear(), vr(s), vr(n), this.#a?.resolve();
    }
    var l = Y;
    if (this.#t.length > 0) {
      const o = l ??= this;
      o.#t.push(...this.#t.filter((f) => !o.#t.includes(f)));
    }
    l !== null && (Mt.add(l), l.#p());
  }
  #b(t, n, s) {
    t.f ^= ve;
    for (var r = t.first; r !== null; ) {
      var a = r.f, l = (a & (Je | Et)) !== 0, o = l && (a & ve) !== 0, f = o || (a & ye) !== 0 || this.#l.has(r);
      if (!f && r.fn !== null) {
        l ? r.f ^= ve : a & zt ? n.push(r) : dn(r) && (a & rt && this.#c.add(r), Kt(r));
        var v = r.first;
        if (v !== null) {
          r = v;
          continue;
        }
      }
      for (; r !== null; ) {
        var c = r.next;
        if (c !== null) {
          r = c;
          break;
        }
        r = r.parent;
      }
    }
  }
  #h(t) {
    for (var n = 0; n < t.length; n += 1) Nr(t[n], this.#f, this.#c);
  }
  capture(t, n, s = false) {
    t.v !== de && !this.previous.has(t) && this.previous.set(t, t.v), t.f & wt || (this.current.set(t, [n, s]), Ye?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    Y = this;
  }
  deactivate() {
    Y = null, Ye = null;
  }
  flush() {
    try {
      jn = true, Y = this, this.#p();
    } finally {
      ur = 0, zn = null, Pt = null, En = null, jn = false, Y = null, Ye = null, It.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Mt.delete(this);
  }
  register_created_effect(t) {
    this.#i.push(t);
  }
  #m() {
    for (const c of Mt) {
      var t = c.id < this.id, n = [];
      for (const [h, [_, E]] of this.current) {
        if (c.current.has(h)) {
          var s = c.current.get(h)[0];
          if (t && _ !== s) c.current.set(h, [_, E]);
          else continue;
        }
        n.push(h);
      }
      var r = [...c.current.keys()].filter((h) => !this.current.has(h));
      if (r.length === 0) t && c.discard();
      else if (n.length > 0) {
        if (t) for (const h of this.#v) c.unskip_effect(h, (_) => {
          _.f & (rt | cn) ? c.schedule(_) : c.#h([_]);
        });
        c.activate();
        var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n) Lr(o, r, a, l);
        l = /* @__PURE__ */ new Map();
        var f = [...c.current.keys()].filter((h) => this.current.has(h) ? this.current.get(h)[0] !== h : true);
        for (const h of this.#i) !(h.f & (qe | ye | Vn)) && er(h, f, l) && (h.f & (cn | rt) ? (oe(h, he), c.schedule(h)) : c.#f.add(h));
        if (c.#t.length > 0) {
          c.apply();
          for (var v of c.#t) c.#b(v, [], []);
          c.#t = [];
        }
        c.deactivate();
      }
    }
    for (const c of Mt) c.#d.has(this) && (c.#d.delete(this), c.#d.size === 0 && !c.#u() && (c.activate(), c.#p()));
  }
  increment(t, n) {
    let s = this.#s.get(n) ?? 0;
    if (this.#s.set(n, s + 1), t) {
      let r = this.#r.get(n) ?? 0;
      this.#r.set(n, r + 1);
    }
  }
  decrement(t, n, s) {
    let r = this.#s.get(n) ?? 0;
    if (r === 1 ? this.#s.delete(n) : this.#s.set(n, r - 1), t) {
      let a = this.#r.get(n) ?? 0;
      a === 1 ? this.#r.delete(n) : this.#r.set(n, a - 1);
    }
    this.#_ || s || (this.#_ = true, yt(() => {
      this.#_ = false, this.flush();
    }));
  }
  transfer_effects(t, n) {
    for (const s of t) this.#f.add(s);
    for (const s of n) this.#c.add(s);
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
    return (this.#a ??= Sr()).promise;
  }
  static ensure() {
    if (Y === null) {
      const t = Y = new At();
      jn || (Mt.add(Y), sn || yt(() => {
        Y === t && t.flush();
      }));
    }
    return Y;
  }
  apply() {
    {
      Ye = null;
      return;
    }
  }
  schedule(t) {
    if (zn = t, t.b?.is_pending && t.f & (zt | Fn | Tr) && !(t.f & Lt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var s = n.f;
      if (Pt !== null && n === J && (Z === null || !(Z.f & ge))) return;
      if (s & (Et | Je)) {
        if (!(s & ve)) return;
        n.f ^= ve;
      }
    }
    this.#t.push(n);
  }
}
function aa(e) {
  var t = sn;
  sn = true;
  try {
    for (var n; ; ) {
      if (na(), Y === null) return n;
      Y.flush();
    }
  } finally {
    sn = t;
  }
}
function ia() {
  try {
    Bs();
  } catch (e) {
    mt(e, zn);
  }
}
let lt = null;
function vr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var s = e[n++];
      if (!(s.f & (qe | ye)) && dn(s) && (lt = /* @__PURE__ */ new Set(), Kt(s), s.deps === null && s.first === null && s.nodes === null && s.teardown === null && s.ac === null && Qr(s), lt?.size > 0)) {
        It.clear();
        for (const r of lt) {
          if (r.f & (qe | ye)) continue;
          const a = [r];
          let l = r.parent;
          for (; l !== null; ) lt.has(l) && (lt.delete(l), a.push(l)), l = l.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const f = a[o];
            f.f & (qe | ye) || Kt(f);
          }
        }
        lt.clear();
      }
    }
    lt = null;
  }
}
function Lr(e, t, n, s) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const r of e.reactions) {
    const a = r.f;
    a & ge ? Lr(r, t, n, s) : a & (cn | rt) && !(a & he) && er(r, t, s) && (oe(r, he), tr(r));
  }
}
function er(e, t, n) {
  const s = n.get(e);
  if (s !== void 0) return s;
  if (e.deps !== null) for (const r of e.deps) {
    if (Vt.call(t, r)) return true;
    if (r.f & ge && er(r, t, n)) return n.set(r, true), true;
  }
  return n.set(e, false), false;
}
function tr(e) {
  Y.schedule(e);
}
function qr(e, t) {
  if (!(e.f & Je && e.f & ve)) {
    e.f & he ? t.d.push(e) : e.f & at && t.m.push(e), oe(e, ve);
    for (var n = e.first; n !== null; ) qr(n, t), n = n.next;
  }
}
function Ur(e) {
  oe(e, ve);
  for (var t = e.first; t !== null; ) Ur(t), t = t.next;
}
function la(e) {
  let t = 0, n = Nt(0), s;
  return () => {
    sr() && (i(n), ar(() => (t === 0 && (s = fr(() => e(() => an(n)))), t += 1, () => {
      yt(() => {
        t -= 1, t === 0 && (s?.(), s = void 0, an(n));
      });
    })));
  };
}
var oa = Ht | Xt;
function fa(e, t, n, s) {
  new ca(e, t, n, s);
}
class ca {
  parent;
  is_pending = false;
  transform_error;
  #n;
  #o = null;
  #e;
  #s;
  #r;
  #a = null;
  #t = null;
  #i = null;
  #f = null;
  #c = 0;
  #l = 0;
  #v = false;
  #_ = /* @__PURE__ */ new Set();
  #d = /* @__PURE__ */ new Set();
  #u = null;
  #g = la(() => (this.#u = Nt(this.#c), () => {
    this.#u = null;
  }));
  constructor(t, n, s, r) {
    this.#n = t, this.#e = n, this.#s = (a) => {
      var l = J;
      l.b = this, l.f |= Bn, s(a);
    }, this.parent = J.b, this.transform_error = r ?? this.parent?.transform_error ?? ((a) => a), this.#r = Rn(() => {
      this.#m();
    }, oa);
  }
  #p() {
    try {
      this.#a = je(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #b(t) {
    const n = this.#e.failed;
    n && (this.#i = je(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = je(() => t(this.#n)), yt(() => {
      var n = this.#f = document.createDocumentFragment(), s = xt();
      n.append(s), this.#a = this.#y(() => je(() => this.#s(s))), this.#l === 0 && (this.#n.before(n), this.#f = null, Rt(this.#t, () => {
        this.#t = null;
      }), this.#w(Y));
    }));
  }
  #m() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#c = 0, this.#a = je(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#f = document.createDocumentFragment();
        or(this.#a, t);
        const n = this.#e.pending;
        this.#t = je(() => n(this.#n));
      } else this.#w(Y);
    } catch (n) {
      this.error(n);
    }
  }
  #w(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#d);
  }
  defer_effect(t) {
    Nr(t, this.#_, this.#d);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #y(t) {
    var n = J, s = Z, r = Fe;
    it(this.#r), Pe(this.#r), Gt(this.#r.ctx);
    try {
      return At.ensure(), t();
    } catch (a) {
      return jr(a), null;
    } finally {
      it(n), Pe(s), Gt(r);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#w(n), this.#t && Rt(this.#t, () => {
      this.#t = null;
    }), this.#f && (this.#n.before(this.#f), this.#f = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#c += t, !(!this.#u || this.#v) && (this.#v = true, yt(() => {
      this.#v = false, this.#u && Yt(this.#u, this.#c);
    }));
  }
  get_effect_pending() {
    return this.#g(), i(this.#u);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    Y?.is_fork ? (this.#a && Y.skip_effect(this.#a), this.#t && Y.skip_effect(this.#t), this.#i && Y.skip_effect(this.#i), Y.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (Ae(this.#a), this.#a = null), this.#t && (Ae(this.#t), this.#t = null), this.#i && (Ae(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let s = this.#e.failed;
    var r = false, a = false;
    const l = () => {
      if (r) {
        $s();
        return;
      }
      r = true, a && Hs(), this.#i !== null && Rt(this.#i, () => {
        this.#i = null;
      }), this.#y(() => {
        this.#m();
      });
    }, o = (f) => {
      try {
        a = true, n?.(f, l), a = false;
      } catch (v) {
        mt(v, this.#r && this.#r.parent);
      }
      s && (this.#i = this.#y(() => {
        try {
          return je(() => {
            var v = J;
            v.b = this, v.f |= Bn, s(this.#n, () => f, () => l);
          });
        } catch (v) {
          return mt(v, this.#r.parent), null;
        }
      }));
    };
    yt(() => {
      var f;
      try {
        f = this.transform_error(t);
      } catch (v) {
        mt(v, this.#r && this.#r.parent);
        return;
      }
      f !== null && typeof f == "object" && typeof f.then == "function" ? f.then(o, (v) => mt(v, this.#r && this.#r.parent)) : o(f);
    });
  }
}
function ua(e, t, n, s) {
  const r = nr;
  var a = e.filter((_) => !_.settled);
  if (n.length === 0 && a.length === 0) {
    s(t.map(r));
    return;
  }
  var l = J, o = va(), f = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((_) => _.promise)) : null;
  function v(_) {
    o();
    try {
      s(_);
    } catch (E) {
      l.f & qe || mt(E, l);
    }
    Tn();
  }
  if (n.length === 0) {
    f.then(() => v(t.map(r)));
    return;
  }
  var c = Pr();
  function h() {
    Promise.all(n.map((_) => da(_))).then((_) => v([...t.map(r), ..._])).catch((_) => mt(_, l)).finally(() => c());
  }
  f ? f.then(() => {
    o(), h(), Tn();
  }) : h();
}
function va() {
  var e = J, t = Z, n = Fe, s = Y;
  return function(a = true) {
    it(e), Pe(t), Gt(n), a && !(e.f & qe) && (s?.activate(), s?.apply());
  };
}
function Tn(e = true) {
  it(null), Pe(null), Gt(null), e && Y?.deactivate();
}
function Pr() {
  var e = J, t = e.b, n = Y, s = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(s, e), (r = false) => {
    t.update_pending_count(-1, n), n.decrement(s, e, r);
  };
}
function nr(e) {
  var t = ge | he;
  return J !== null && (J.f |= Xt), { ctx: Fe, deps: null, effects: null, equals: Or, f: t, fn: e, reactions: null, rv: 0, v: de, wv: 0, parent: J, ac: null };
}
function da(e, t, n) {
  let s = J;
  s === null && Ns();
  var r = void 0, a = Nt(de), l = !Z, o = /* @__PURE__ */ new Map();
  return Ca(() => {
    var f = J, v = Sr();
    r = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(Tn);
    } catch (E) {
      v.reject(E), Tn();
    }
    var c = Y;
    if (l) {
      if (f.f & Lt) var h = Pr();
      if (s.b.is_rendered()) o.get(c)?.reject(ot), o.delete(c);
      else {
        for (const E of o.values()) E.reject(ot);
        o.clear();
      }
      o.set(c, v);
    }
    const _ = (E, y = void 0) => {
      if (h) {
        var F = y === ot;
        h(F);
      }
      if (!(y === ot || f.f & qe)) {
        if (c.activate(), y) a.f |= wt, Yt(a, y);
        else {
          a.f & wt && (a.f ^= wt), Yt(a, E);
          for (const [b, D] of o) {
            if (o.delete(b), b === c) break;
            D.reject(ot);
          }
        }
        c.deactivate();
      }
    };
    v.promise.then(_, (E) => _(null, E || "unknown"));
  }), Xr(() => {
    for (const f of o.values()) f.reject(ot);
  }), new Promise((f) => {
    function v(c) {
      function h() {
        c === r ? f(a) : v(r);
      }
      c.then(h, h);
    }
    v(r);
  });
}
function ut(e) {
  const t = nr(e);
  return ts(t), t;
}
function _a(e) {
  const t = nr(e);
  return t.equals = Fr, t;
}
function pa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Ae(t[n]);
  }
}
function rr(e) {
  var t, n = J, s = e.parent;
  if (!kt && s !== null && s.f & (qe | ye)) return Qs(), e.v;
  it(s);
  try {
    e.f &= ~Dt, pa(e), t = as(e);
  } finally {
    it(n);
  }
  return t;
}
function Br(e) {
  var t = rr(e);
  if (!e.equals(t) && (e.wv = rs(), (!Y?.is_fork || e.deps === null) && (Y !== null ? Y.capture(e, t, true) : e.v = t, e.deps === null))) {
    oe(e, ve);
    return;
  }
  kt || (Ye !== null ? (sr() || Y?.is_fork) && Ye.set(e, t) : $n(e));
}
function ha(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(ot), t.teardown = Os, t.ac = null, un(t, 0), ir(t));
}
function Wr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Kt(t);
}
let Hn = /* @__PURE__ */ new Set();
const It = /* @__PURE__ */ new Map();
let Vr = false;
function Nt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Or, rv: 0, wv: 0 };
  return n;
}
function P(e, t) {
  const n = Nt(e);
  return ts(n), n;
}
function ga(e, t = false, n = true) {
  const s = Nt(e);
  return t || (s.equals = Fr), s;
}
function p(e, t, n = false) {
  Z !== null && (!Ke || Z.f & Vn) && Ir() && Z.f & (ge | rt | cn | Vn) && (Ue === null || !Vt.call(Ue, e)) && zs();
  let s = n ? nt(t) : t;
  return Yt(e, s, En);
}
function Yt(e, t, n = null) {
  if (!e.equals(t)) {
    It.set(e, kt ? t : e.v);
    var s = At.ensure();
    if (s.capture(e, t), e.f & ge) {
      const r = e;
      e.f & he && rr(r), Ye === null && $n(r);
    }
    e.wv = rs(), zr(e, he, n), J !== null && J.f & ve && !(J.f & (Je | Et)) && (Re === null ? Ia([e]) : Re.push(e)), !s.is_fork && Hn.size > 0 && !Vr && ba();
  }
  return t;
}
function ba() {
  Vr = false;
  for (const e of Hn) e.f & ve && oe(e, at), dn(e) && Kt(e);
  Hn.clear();
}
function ma(e, t = 1) {
  var n = i(e), s = t === 1 ? n++ : n--;
  return p(e, n), s;
}
function an(e) {
  p(e, e.v + 1);
}
function zr(e, t, n) {
  var s = e.reactions;
  if (s !== null) for (var r = s.length, a = 0; a < r; a++) {
    var l = s[a], o = l.f, f = (o & he) === 0;
    if (f && oe(l, t), o & ge) {
      var v = l;
      Ye?.delete(v), o & Dt || (o & Le && (J === null || !(J.f & Sn)) && (l.f |= Dt), zr(v, at, n));
    } else if (f) {
      var c = l;
      o & rt && lt !== null && lt.add(c), n !== null ? n.push(c) : tr(c);
    }
  }
}
function nt(e) {
  if (typeof e != "object" || e === null || xn in e) return e;
  const t = kr(e);
  if (t !== Ms && t !== Cs) return e;
  var n = /* @__PURE__ */ new Map(), s = Ar(e), r = P(0), a = jt, l = (o) => {
    if (jt === a) return o();
    var f = Z, v = jt;
    Pe(null), hr(a);
    var c = o();
    return Pe(f), hr(v), c;
  };
  return s && n.set("length", P(e.length)), new Proxy(e, { defineProperty(o, f, v) {
    (!("value" in v) || v.configurable === false || v.enumerable === false || v.writable === false) && Ws();
    var c = n.get(f);
    return c === void 0 ? l(() => {
      var h = P(v.value);
      return n.set(f, h), h;
    }) : p(c, v.value, true), true;
  }, deleteProperty(o, f) {
    var v = n.get(f);
    if (v === void 0) {
      if (f in o) {
        const c = l(() => P(de));
        n.set(f, c), an(r);
      }
    } else p(v, de), an(r);
    return true;
  }, get(o, f, v) {
    if (f === xn) return e;
    var c = n.get(f), h = f in o;
    if (c === void 0 && (!h || rn(o, f)?.writable) && (c = l(() => {
      var E = nt(h ? o[f] : de), y = P(E);
      return y;
    }), n.set(f, c)), c !== void 0) {
      var _ = i(c);
      return _ === de ? void 0 : _;
    }
    return Reflect.get(o, f, v);
  }, getOwnPropertyDescriptor(o, f) {
    var v = Reflect.getOwnPropertyDescriptor(o, f);
    if (v && "value" in v) {
      var c = n.get(f);
      c && (v.value = i(c));
    } else if (v === void 0) {
      var h = n.get(f), _ = h?.v;
      if (h !== void 0 && _ !== de) return { enumerable: true, configurable: true, value: _, writable: true };
    }
    return v;
  }, has(o, f) {
    if (f === xn) return true;
    var v = n.get(f), c = v !== void 0 && v.v !== de || Reflect.has(o, f);
    if (v !== void 0 || J !== null && (!c || rn(o, f)?.writable)) {
      v === void 0 && (v = l(() => {
        var _ = c ? nt(o[f]) : de, E = P(_);
        return E;
      }), n.set(f, v));
      var h = i(v);
      if (h === de) return false;
    }
    return c;
  }, set(o, f, v, c) {
    var h = n.get(f), _ = f in o;
    if (s && f === "length") for (var E = v; E < h.v; E += 1) {
      var y = n.get(E + "");
      y !== void 0 ? p(y, de) : E in o && (y = l(() => P(de)), n.set(E + "", y));
    }
    if (h === void 0) (!_ || rn(o, f)?.writable) && (h = l(() => P(void 0)), p(h, nt(v)), n.set(f, h));
    else {
      _ = h.v !== de;
      var F = l(() => nt(v));
      p(h, F);
    }
    var b = Reflect.getOwnPropertyDescriptor(o, f);
    if (b?.set && b.set.call(c, v), !_) {
      if (s && typeof f == "string") {
        var D = n.get("length"), R = Number(f);
        Number.isInteger(R) && R >= D.v && p(D, R + 1);
      }
      an(r);
    }
    return true;
  }, ownKeys(o) {
    i(r);
    var f = Reflect.ownKeys(o).filter((h) => {
      var _ = n.get(h);
      return _ === void 0 || _.v !== de;
    });
    for (var [v, c] of n) c.v !== de && !(v in o) && f.push(v);
    return f;
  }, setPrototypeOf() {
    Vs();
  } });
}
var dr, Hr, Gr, Yr;
function wa() {
  if (dr === void 0) {
    dr = window, Hr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Gr = rn(t, "firstChild").get, Yr = rn(t, "nextSibling").get, cr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), cr(n) && (n.__t = void 0);
  }
}
function xt(e = "") {
  return document.createTextNode(e);
}
function Mn(e) {
  return Gr.call(e);
}
function vn(e) {
  return Yr.call(e);
}
function u(e, t) {
  return Mn(e);
}
function vt(e, t = false) {
  {
    var n = Mn(e);
    return n instanceof Comment && n.data === "" ? vn(n) : n;
  }
}
function d(e, t = 1, n = false) {
  let s = e;
  for (; t--; ) s = vn(s);
  return s;
}
function ya(e) {
  e.textContent = "";
}
function Kr() {
  return false;
}
function xa(e, t, n) {
  return document.createElementNS(Cr, e, void 0);
}
let _r = false;
function Ea() {
  _r || (_r = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function In(e) {
  var t = Z, n = J;
  Pe(null), it(null);
  try {
    return e();
  } finally {
    Pe(t), it(n);
  }
}
function Aa(e, t, n, s = n) {
  e.addEventListener(t, () => In(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), s(true);
  } : e.__on_r = () => s(true), Ea();
}
function ka(e) {
  J === null && (Z === null && Ps(), Us()), kt && qs();
}
function Sa(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function pt(e, t) {
  var n = J;
  n !== null && n.f & ye && (e |= ye);
  var s = { ctx: Fe, deps: null, nodes: null, f: e | he | Le, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  Y?.register_created_effect(s);
  var r = s;
  if (e & zt) Pt !== null ? Pt.push(s) : At.ensure().schedule(s);
  else if (t !== null) {
    try {
      Kt(s);
    } catch (l) {
      throw Ae(s), l;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && !(r.f & Xt) && (r = r.first, e & rt && e & Ht && r !== null && (r.f |= Ht));
  }
  if (r !== null && (r.parent = n, n !== null && Sa(r, n), Z !== null && Z.f & ge && !(e & Et))) {
    var a = Z;
    (a.effects ??= []).push(r);
  }
  return s;
}
function sr() {
  return Z !== null && !Ke;
}
function Xr(e) {
  const t = pt(Fn, null);
  return oe(t, ve), t.teardown = e, t;
}
function st(e) {
  ka();
  var t = J.f, n = !Z && (t & Je) !== 0 && (t & Lt) === 0;
  if (n) {
    var s = Fe;
    (s.e ??= []).push(e);
  } else return Jr(e);
}
function Jr(e) {
  return pt(zt | js, e);
}
function Ta(e) {
  At.ensure();
  const t = pt(Et | Xt, e);
  return (n = {}) => new Promise((s) => {
    n.outro ? Rt(t, () => {
      Ae(t), s(void 0);
    }) : (Ae(t), s(void 0));
  });
}
function Ma(e) {
  return pt(zt, e);
}
function Ca(e) {
  return pt(cn | Xt, e);
}
function ar(e, t = 0) {
  return pt(Fn | t, e);
}
function G(e, t = [], n = [], s = []) {
  ua(s, t, n, (r) => {
    pt(Fn, () => e(...r.map(i)));
  });
}
function Rn(e, t = 0) {
  var n = pt(rt | t, e);
  return n;
}
function je(e) {
  return pt(Je | Xt, e);
}
function Zr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = kt, s = Z;
    pr(true), Pe(null);
    try {
      t.call(null);
    } finally {
      pr(n), Pe(s);
    }
  }
}
function ir(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && In(() => {
      r.abort(ot);
    });
    var s = n.next;
    n.f & Et ? n.parent = null : Ae(n, t), n = s;
  }
}
function Oa(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Je || Ae(t), t = n;
  }
}
function Ae(e, t = true) {
  var n = false;
  (t || e.f & Rs) && e.nodes !== null && e.nodes.end !== null && (Fa(e.nodes.start, e.nodes.end), n = true), oe(e, Wn), ir(e, t && !n), un(e, 0);
  var s = e.nodes && e.nodes.t;
  if (s !== null) for (const a of s) a.stop();
  Zr(e), e.f ^= Wn, e.f |= qe;
  var r = e.parent;
  r !== null && r.first !== null && Qr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Fa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : vn(e);
    e.remove(), e = n;
  }
}
function Qr(e) {
  var t = e.parent, n = e.prev, s = e.next;
  n !== null && (n.next = s), s !== null && (s.prev = n), t !== null && (t.first === e && (t.first = s), t.last === e && (t.last = n));
}
function Rt(e, t, n = true) {
  var s = [];
  $r(e, s, true);
  var r = () => {
    n && Ae(e), t && t();
  }, a = s.length;
  if (a > 0) {
    var l = () => --a || r();
    for (var o of s) o.out(l);
  } else r();
}
function $r(e, t, n) {
  if (!(e.f & ye)) {
    e.f ^= ye;
    var s = e.nodes && e.nodes.t;
    if (s !== null) for (const o of s) (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var a = r.next;
      if (!(r.f & Et)) {
        var l = (r.f & Ht) !== 0 || (r.f & Je) !== 0 && (e.f & rt) !== 0;
        $r(r, t, l ? n : false);
      }
      r = a;
    }
  }
}
function lr(e) {
  es(e, true);
}
function es(e, t) {
  if (e.f & ye) {
    e.f ^= ye, e.f & ve || (oe(e, he), At.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var s = n.next, r = (n.f & Ht) !== 0 || (n.f & Je) !== 0;
      es(n, r ? t : false), n = s;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (const l of a) (l.is_global || t) && l.in();
  }
}
function or(e, t) {
  if (e.nodes) for (var n = e.nodes.start, s = e.nodes.end; n !== null; ) {
    var r = n === s ? null : vn(n);
    t.append(n), n = r;
  }
}
let An = false, kt = false;
function pr(e) {
  kt = e;
}
let Z = null, Ke = false;
function Pe(e) {
  Z = e;
}
let J = null;
function it(e) {
  J = e;
}
let Ue = null;
function ts(e) {
  Z !== null && (Ue === null ? Ue = [e] : Ue.push(e));
}
let Ee = null, Ce = 0, Re = null;
function Ia(e) {
  Re = e;
}
let ns = 1, Ft = 0, jt = Ft;
function hr(e) {
  jt = e;
}
function rs() {
  return ++ns;
}
function dn(e) {
  var t = e.f;
  if (t & he) return true;
  if (t & ge && (e.f &= ~Dt), t & at) {
    for (var n = e.deps, s = n.length, r = 0; r < s; r++) {
      var a = n[r];
      if (dn(a) && Br(a), a.wv > e.wv) return true;
    }
    t & Le && Ye === null && oe(e, ve);
  }
  return false;
}
function ss(e, t, n = true) {
  var s = e.reactions;
  if (s !== null && !(Ue !== null && Vt.call(Ue, e))) for (var r = 0; r < s.length; r++) {
    var a = s[r];
    a.f & ge ? ss(a, t, false) : t === a && (n ? oe(a, he) : a.f & ve && oe(a, at), tr(a));
  }
}
function as(e) {
  var t = Ee, n = Ce, s = Re, r = Z, a = Ue, l = Fe, o = Ke, f = jt, v = e.f;
  Ee = null, Ce = 0, Re = null, Z = v & (Je | Et) ? null : e, Ue = null, Gt(e.ctx), Ke = false, jt = ++Ft, e.ac !== null && (In(() => {
    e.ac.abort(ot);
  }), e.ac = null);
  try {
    e.f |= Sn;
    var c = e.fn, h = c();
    e.f |= Lt;
    var _ = e.deps, E = Y?.is_fork;
    if (Ee !== null) {
      var y;
      if (E || un(e, Ce), _ !== null && Ce > 0) for (_.length = Ce + Ee.length, y = 0; y < Ee.length; y++) _[Ce + y] = Ee[y];
      else e.deps = _ = Ee;
      if (sr() && e.f & Le) for (y = Ce; y < _.length; y++) (_[y].reactions ??= []).push(e);
    } else !E && _ !== null && Ce < _.length && (un(e, Ce), _.length = Ce);
    if (Ir() && Re !== null && !Ke && _ !== null && !(e.f & (ge | at | he))) for (y = 0; y < Re.length; y++) ss(Re[y], e);
    if (r !== null && r !== e) {
      if (Ft++, r.deps !== null) for (let F = 0; F < n; F += 1) r.deps[F].rv = Ft;
      if (t !== null) for (const F of t) F.rv = Ft;
      Re !== null && (s === null ? s = Re : s.push(...Re));
    }
    return e.f & wt && (e.f ^= wt), h;
  } catch (F) {
    return jr(F);
  } finally {
    e.f ^= Sn, Ee = t, Ce = n, Re = s, Z = r, Ue = a, Gt(l), Ke = o, jt = f;
  }
}
function Ra(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var s = ks.call(n, e);
    if (s !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[s] = n[r], n.pop());
    }
  }
  if (n === null && t.f & ge && (Ee === null || !Vt.call(Ee, t))) {
    var a = t;
    a.f & Le && (a.f ^= Le, a.f &= ~Dt), a.v !== de && $n(a), ha(a), un(a, 0);
  }
}
function un(e, t) {
  var n = e.deps;
  if (n !== null) for (var s = t; s < n.length; s++) Ra(e, n[s]);
}
function Kt(e) {
  var t = e.f;
  if (!(t & qe)) {
    oe(e, ve);
    var n = J, s = An;
    J = e, An = true;
    try {
      t & (rt | Tr) ? Oa(e) : ir(e), Zr(e);
      var r = as(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = ns;
      var a;
      As && ta && e.f & he && e.deps;
    } finally {
      An = s, J = n;
    }
  }
}
async function ja() {
  await Promise.resolve(), aa();
}
function i(e) {
  var t = e.f, n = (t & ge) !== 0;
  if (Z !== null && !Ke) {
    var s = J !== null && (J.f & qe) !== 0;
    if (!s && (Ue === null || !Vt.call(Ue, e))) {
      var r = Z.deps;
      if (Z.f & Sn) e.rv < Ft && (e.rv = Ft, Ee === null && r !== null && r[Ce] === e ? Ce++ : Ee === null ? Ee = [e] : Ee.push(e));
      else {
        (Z.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [Z] : Vt.call(a, Z) || a.push(Z);
      }
    }
  }
  if (kt && It.has(e)) return It.get(e);
  if (n) {
    var l = e;
    if (kt) {
      var o = l.v;
      return (!(l.f & ve) && l.reactions !== null || ls(l)) && (o = rr(l)), It.set(l, o), o;
    }
    var f = (l.f & Le) === 0 && !Ke && Z !== null && (An || (Z.f & Le) !== 0), v = (l.f & Lt) === 0;
    dn(l) && (f && (l.f |= Le), Br(l)), f && !v && (Wr(l), is(l));
  }
  if (Ye?.has(e)) return Ye.get(e);
  if (e.f & wt) throw e.v;
  return e.v;
}
function is(e) {
  if (e.f |= Le, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & ge && !(t.f & Le) && (Wr(t), is(t));
}
function ls(e) {
  if (e.v === de) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (It.has(t) || t.f & ge && ls(t)) return true;
  return false;
}
function fr(e) {
  var t = Ke;
  try {
    return Ke = true, e();
  } finally {
    Ke = t;
  }
}
const Da = ["touchstart", "touchmove"];
function Na(e) {
  return Da.includes(e);
}
const Qt = Symbol("events"), os = /* @__PURE__ */ new Set(), Gn = /* @__PURE__ */ new Set();
function La(e, t, n, s = {}) {
  function r(a) {
    if (s.capture || Yn.call(t, a), !a.cancelBubble) return In(() => n?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? yt(() => {
    t.addEventListener(e, r, s);
  }) : t.addEventListener(e, r, s), r;
}
function Bt(e, t, n, s, r) {
  var a = { capture: s, passive: r }, l = La(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Xr(() => {
    t.removeEventListener(e, l, a);
  });
}
function ae(e, t, n) {
  (t[Qt] ??= {})[e] = n;
}
function _n(e) {
  for (var t = 0; t < e.length; t++) os.add(e[t]);
  for (var n of Gn) n(e);
}
let gr = null;
function Yn(e) {
  var t = this, n = t.ownerDocument, s = e.type, r = e.composedPath?.() || [], a = r[0] || e.target;
  gr = e;
  var l = 0, o = gr === e && e[Qt];
  if (o) {
    var f = r.indexOf(o);
    if (f !== -1 && (t === document || t === window)) {
      e[Qt] = t;
      return;
    }
    var v = r.indexOf(t);
    if (v === -1) return;
    f <= v && (l = f);
  }
  if (a = r[l] || e.target, a !== t) {
    Ss(e, "currentTarget", { configurable: true, get() {
      return a || n;
    } });
    var c = Z, h = J;
    Pe(null), it(null);
    try {
      for (var _, E = []; a !== null; ) {
        var y = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var F = a[Qt]?.[s];
          F != null && (!a.disabled || e.target === a) && F.call(a, e);
        } catch (b) {
          _ ? E.push(b) : _ = b;
        }
        if (e.cancelBubble || y === t || y === null) break;
        a = y;
      }
      if (_) {
        for (let b of E) queueMicrotask(() => {
          throw b;
        });
        throw _;
      }
    } finally {
      e[Qt] = t, delete e.currentTarget, Pe(c), it(h);
    }
  }
}
const qa = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Ua(e) {
  return qa?.createHTML(e) ?? e;
}
function Pa(e) {
  var t = xa("template");
  return t.innerHTML = Ua(e.replaceAll("<!>", "<!---->")), t.content;
}
function Kn(e, t) {
  var n = J;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function j(e, t) {
  var n = (t & Js) !== 0, s = (t & Zs) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Pa(a ? e : "<!>" + e), n || (r = Mn(r)));
    var l = s || Hr ? document.importNode(r, true) : r.cloneNode(true);
    if (n) {
      var o = Mn(l), f = l.lastChild;
      Kn(o, f);
    } else Kn(l, l);
    return l;
  };
}
function Cn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = xt();
  return e.append(t, n), Kn(t, n), e;
}
function O(e, t) {
  e !== null && e.before(t);
}
function w(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ba(e, t) {
  return Wa(e, t);
}
const yn = /* @__PURE__ */ new Map();
function Wa(e, { target: t, anchor: n, props: s = {}, events: r, context: a, intro: l = true, transformError: o }) {
  wa();
  var f = void 0, v = Ta(() => {
    var c = n ?? t.appendChild(xt());
    fa(c, { pending: () => {
    } }, (E) => {
      dt({});
      var y = Fe;
      a && (y.c = a), r && (s.$$events = r), f = e(E, s) || {}, _t();
    }, o);
    var h = /* @__PURE__ */ new Set(), _ = (E) => {
      for (var y = 0; y < E.length; y++) {
        var F = E[y];
        if (!h.has(F)) {
          h.add(F);
          var b = Na(F);
          for (const g of [t, document]) {
            var D = yn.get(g);
            D === void 0 && (D = /* @__PURE__ */ new Map(), yn.set(g, D));
            var R = D.get(F);
            R === void 0 ? (g.addEventListener(F, Yn, { passive: b }), D.set(F, 1)) : D.set(F, R + 1);
          }
        }
      }
    };
    return _(On(os)), Gn.add(_), () => {
      for (var E of h) for (const b of [t, document]) {
        var y = yn.get(b), F = y.get(E);
        --F == 0 ? (b.removeEventListener(E, Yn), y.delete(E), y.size === 0 && yn.delete(b)) : y.set(E, F);
      }
      Gn.delete(_), c !== n && c.parentNode?.removeChild(c);
    };
  });
  return Va.set(f, v), f;
}
let Va = /* @__PURE__ */ new WeakMap();
class fs {
  anchor;
  #n = /* @__PURE__ */ new Map();
  #o = /* @__PURE__ */ new Map();
  #e = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Set();
  #r = true;
  constructor(t, n = true) {
    this.anchor = t, this.#r = n;
  }
  #a = (t) => {
    if (this.#n.has(t)) {
      var n = this.#n.get(t), s = this.#o.get(n);
      if (s) lr(s), this.#s.delete(n);
      else {
        var r = this.#e.get(n);
        r && (this.#o.set(n, r.effect), this.#e.delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
      }
      for (const [a, l] of this.#n) {
        if (this.#n.delete(a), a === t) break;
        const o = this.#e.get(l);
        o && (Ae(o.effect), this.#e.delete(l));
      }
      for (const [a, l] of this.#o) {
        if (a === n || this.#s.has(a)) continue;
        const o = () => {
          if (Array.from(this.#n.values()).includes(a)) {
            var v = document.createDocumentFragment();
            or(l, v), v.append(xt()), this.#e.set(a, { effect: l, fragment: v });
          } else Ae(l);
          this.#s.delete(a), this.#o.delete(a);
        };
        this.#r || !s ? (this.#s.add(a), Rt(l, o, false)) : o();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [s, r] of this.#e) n.includes(s) || (Ae(r.effect), this.#e.delete(s));
  };
  ensure(t, n) {
    var s = Y, r = Kr();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (r) {
      var a = document.createDocumentFragment(), l = xt();
      a.append(l), this.#e.set(t, { effect: je(() => n(l)), fragment: a });
    } else this.#o.set(t, je(() => n(this.anchor)));
    if (this.#n.set(s, t), r) {
      for (const [o, f] of this.#o) o === t ? s.unskip_effect(f) : s.skip_effect(f);
      for (const [o, f] of this.#e) o === t ? s.unskip_effect(f.effect) : s.skip_effect(f.effect);
      s.oncommit(this.#a), s.ondiscard(this.#t);
    } else this.#a(s);
  }
}
function te(e, t, n = false) {
  var s = new fs(e), r = n ? Ht : 0;
  function a(l, o) {
    s.ensure(l, o);
  }
  Rn(() => {
    var l = false;
    t((o, f = 0) => {
      l = true, a(f, o);
    }), l || a(-1, null);
  }, r);
}
const za = Symbol("NaN");
function Ha(e, t, n) {
  var s = new fs(e);
  Rn(() => {
    var r = t();
    r !== r && (r = za), s.ensure(r, n);
  });
}
function De(e, t) {
  return t;
}
function Ga(e, t, n) {
  for (var s = [], r = t.length, a, l = t.length, o = 0; o < r; o++) {
    let h = t[o];
    Rt(h, () => {
      if (a) {
        if (a.pending.delete(h), a.done.add(h), a.pending.size === 0) {
          var _ = e.outrogroups;
          Xn(e, On(a.done)), _.delete(a), _.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var f = s.length === 0 && n !== null;
    if (f) {
      var v = n, c = v.parentNode;
      ya(c), c.append(v), e.items.clear();
    }
    Xn(e, t, !f);
  } else a = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Xn(e, t, n = true) {
  var s;
  if (e.pending.size > 0) {
    s = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const o of l) s.add(e.items.get(o).e);
  }
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    if (s?.has(a)) {
      a.f |= tt;
      const l = document.createDocumentFragment();
      or(a, l);
    } else Ae(t[r], n);
  }
}
var br;
function Ne(e, t, n, s, r, a = null) {
  var l = e, o = /* @__PURE__ */ new Map(), f = (t & Mr) !== 0;
  if (f) {
    var v = e;
    l = v.appendChild(xt());
  }
  var c = null, h = _a(() => {
    var g = n();
    return Ar(g) ? g : g == null ? [] : On(g);
  }), _, E = /* @__PURE__ */ new Map(), y = true;
  function F(g) {
    R.effect.f & qe || (R.pending.delete(g), R.fallback = c, Ya(R, _, l, t, s), c !== null && (_.length === 0 ? c.f & tt ? (c.f ^= tt, $t(c, null, l)) : lr(c) : Rt(c, () => {
      c = null;
    })));
  }
  function b(g) {
    R.pending.delete(g);
  }
  var D = Rn(() => {
    _ = i(h);
    for (var g = _.length, T = /* @__PURE__ */ new Set(), N = Y, I = Kr(), L = 0; L < g; L += 1) {
      var K = _[L], Q = s(K, L), W = y ? null : o.get(Q);
      W ? (W.v && Yt(W.v, K), W.i && Yt(W.i, L), I && N.unskip_effect(W.e)) : (W = Ka(o, y ? l : br ??= xt(), K, Q, L, r, t, n), y || (W.e.f |= tt), o.set(Q, W)), T.add(Q);
    }
    if (g === 0 && a && !c && (y ? c = je(() => a(l)) : (c = je(() => a(br ??= xt())), c.f |= tt)), g > T.size && Ls(), !y) if (E.set(N, T), I) {
      for (const [ee, k] of o) T.has(ee) || N.skip_effect(k.e);
      N.oncommit(F), N.ondiscard(b);
    } else F(N);
    i(h);
  }), R = { effect: D, items: o, pending: E, outrogroups: null, fallback: c };
  y = false;
}
function Zt(e) {
  for (; e !== null && !(e.f & Je); ) e = e.next;
  return e;
}
function Ya(e, t, n, s, r) {
  var a = (s & Ks) !== 0, l = t.length, o = e.items, f = Zt(e.effect.first), v, c = null, h, _ = [], E = [], y, F, b, D;
  if (a) for (D = 0; D < l; D += 1) y = t[D], F = r(y, D), b = o.get(F).e, b.f & tt || (b.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(b));
  for (D = 0; D < l; D += 1) {
    if (y = t[D], F = r(y, D), b = o.get(F).e, e.outrogroups !== null) for (const W of e.outrogroups) W.pending.delete(b), W.done.delete(b);
    if (b.f & ye && (lr(b), a && (b.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(b))), b.f & tt) if (b.f ^= tt, b === f) $t(b, null, n);
    else {
      var R = c ? c.next : f;
      b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), gt(e, c, b), gt(e, b, R), $t(b, R, n), c = b, _ = [], E = [], f = Zt(c.next);
      continue;
    }
    if (b !== f) {
      if (v !== void 0 && v.has(b)) {
        if (_.length < E.length) {
          var g = E[0], T;
          c = g.prev;
          var N = _[0], I = _[_.length - 1];
          for (T = 0; T < _.length; T += 1) $t(_[T], g, n);
          for (T = 0; T < E.length; T += 1) v.delete(E[T]);
          gt(e, N.prev, I.next), gt(e, c, N), gt(e, I, g), f = g, c = I, D -= 1, _ = [], E = [];
        } else v.delete(b), $t(b, f, n), gt(e, b.prev, b.next), gt(e, b, c === null ? e.effect.first : c.next), gt(e, c, b), c = b;
        continue;
      }
      for (_ = [], E = []; f !== null && f !== b; ) (v ??= /* @__PURE__ */ new Set()).add(f), E.push(f), f = Zt(f.next);
      if (f === null) continue;
    }
    b.f & tt || _.push(b), c = b, f = Zt(b.next);
  }
  if (e.outrogroups !== null) {
    for (const W of e.outrogroups) W.pending.size === 0 && (Xn(e, On(W.done)), e.outrogroups?.delete(W));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || v !== void 0) {
    var L = [];
    if (v !== void 0) for (b of v) b.f & ye || L.push(b);
    for (; f !== null; ) !(f.f & ye) && f !== e.fallback && L.push(f), f = Zt(f.next);
    var K = L.length;
    if (K > 0) {
      var Q = s & Mr && l === 0 ? n : null;
      if (a) {
        for (D = 0; D < K; D += 1) L[D].nodes?.a?.measure();
        for (D = 0; D < K; D += 1) L[D].nodes?.a?.fix();
      }
      Ga(e, L, Q);
    }
  }
  a && yt(() => {
    if (h !== void 0) for (b of h) b.nodes?.a?.apply();
  });
}
function Ka(e, t, n, s, r, a, l, o) {
  var f = l & Gs ? l & Xs ? Nt(n) : ga(n, false, false) : null, v = l & Ys ? Nt(r) : null;
  return { v: f, i: v, e: je(() => (a(t, f ?? n, v ?? r, o), () => {
    e.delete(s);
  })) };
}
function $t(e, t, n) {
  if (e.nodes) for (var s = e.nodes.start, r = e.nodes.end, a = t && !(t.f & tt) ? t.nodes.start : n; s !== null; ) {
    var l = vn(s);
    if (a.before(s), s === r) return;
    s = l;
  }
}
function gt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const mr = [...` 	
\r\f\xA0\v\uFEFF`];
function Xa(e, t, n) {
  var s = e == null ? "" : "" + e;
  if (n) {
    for (var r of Object.keys(n)) if (n[r]) s = s ? s + " " + r : r;
    else if (s.length) for (var a = r.length, l = 0; (l = s.indexOf(r, l)) >= 0; ) {
      var o = l + a;
      (l === 0 || mr.includes(s[l - 1])) && (o === s.length || mr.includes(s[o])) ? s = (l === 0 ? "" : s.substring(0, l)) + s.substring(o + 1) : l = o;
    }
  }
  return s === "" ? null : s;
}
function Ja(e, t) {
  return e == null ? null : String(e);
}
function ft(e, t, n, s, r, a) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var o = Xa(n, s, a);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (a && r !== a) for (var f in a) {
    var v = !!a[f];
    (r == null || v !== !!r[f]) && e.classList.toggle(f, v);
  }
  return a;
}
function Wt(e, t, n, s) {
  var r = e.__style;
  if (r !== t) {
    var a = Ja(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return s;
}
const Za = Symbol("is custom element"), Qa = Symbol("is html");
function Xe(e, t, n, s) {
  var r = $a(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[Ds] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ei(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function $a(e) {
  return e.__attributes ??= { [Za]: e.nodeName.includes("-"), [Qa]: e.namespaceURI === Cr };
}
var wr = /* @__PURE__ */ new Map();
function ei(e) {
  var t = e.getAttribute("is") || e.nodeName, n = wr.get(t);
  if (n) return n;
  wr.set(t, n = []);
  for (var s, r = e, a = Element.prototype; a !== r; ) {
    s = Ts(r);
    for (var l in s) s[l].set && n.push(l);
    r = kr(r);
  }
  return n;
}
function cs(e, t, n = t) {
  var s = /* @__PURE__ */ new WeakSet();
  Aa(e, "input", async (r) => {
    var a = r ? e.defaultValue : e.value;
    if (a = Dn(e) ? Nn(a) : a, n(a), Y !== null && s.add(Y), await ja(), a !== (a = t())) {
      var l = e.selectionStart, o = e.selectionEnd, f = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var v = e.value.length;
        l === o && o === f && v > f ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = l, e.selectionEnd = Math.min(o, v));
      }
    }
  }), fr(t) == null && e.value && (n(Dn(e) ? Nn(e.value) : e.value), Y !== null && s.add(Y)), ar(() => {
    var r = t();
    if (e === document.activeElement) {
      var a = Y;
      if (s.has(a)) return;
    }
    Dn(e) && r === Nn(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function Dn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Nn(e) {
  return e === "" ? null : +e;
}
function yr(e, t) {
  return e === t || e?.[xn] === t;
}
function Jn(e = {}, t, n, s) {
  var r = Fe.r, a = J;
  return Ma(() => {
    var l, o;
    return ar(() => {
      l = o, o = [], fr(() => {
        e !== n(...o) && (t(e, ...o), l && yr(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let f = a;
      for (; f !== r && f.parent !== null && f.parent.f & Wn; ) f = f.parent;
      const v = () => {
        o && yr(n(...o), e) && t(null, ...o);
      }, c = f.teardown;
      f.teardown = () => {
        v(), c?.();
      };
    };
  }), e;
}
function ti(e, t, n, s) {
  var r = s, a = true, l = () => (a && (a = false, r = s), r), o;
  o = e[t], o === void 0 && s !== void 0 && (o = l());
  var f;
  return f = () => {
    var v = e[t];
    return v === void 0 ? l() : (a = true, v);
  }, f;
}
const ni = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ni);
function ri() {
  B._start();
}
function si(e) {
  try {
    const r = B.__wbindgen_add_to_stack_pointer(-16), a = qt(e, B.__wbindgen_export), l = Be;
    B.decode_wav(r, a, l);
    var t = se().getInt32(r + 4 * 0, true), n = se().getInt32(r + 4 * 1, true), s = se().getInt32(r + 4 * 2, true);
    if (s) throw Oe(n);
    return Oe(t);
  } finally {
    B.__wbindgen_add_to_stack_pointer(16);
  }
}
function ai(e) {
  let t, n;
  try {
    const a = B.__wbindgen_add_to_stack_pointer(-16), l = qt(e, B.__wbindgen_export), o = Be;
    B.detect_format(a, l, o);
    var s = se().getInt32(a + 4 * 0, true), r = se().getInt32(a + 4 * 1, true);
    return t = s, n = r, tn(s, r);
  } finally {
    B.__wbindgen_add_to_stack_pointer(16), B.__wbindgen_export3(t, n, 1);
  }
}
function ii(e, t) {
  try {
    const a = B.__wbindgen_add_to_stack_pointer(-16), l = qt(e, B.__wbindgen_export), o = Be;
    B.entropy_blocks(a, l, o, t);
    var n = se().getInt32(a + 4 * 0, true), s = se().getInt32(a + 4 * 1, true), r = vi(n, s).slice();
    return B.__wbindgen_export3(n, s * 4, 4), r;
  } finally {
    B.__wbindgen_add_to_stack_pointer(16);
  }
}
function li(e, t) {
  try {
    const a = B.__wbindgen_add_to_stack_pointer(-16), l = qt(e, B.__wbindgen_export), o = Be;
    B.extract_strings(a, l, o, t);
    var n = se().getInt32(a + 4 * 0, true), s = se().getInt32(a + 4 * 1, true), r = se().getInt32(a + 4 * 2, true);
    if (r) throw Oe(s);
    return Oe(n);
  } finally {
    B.__wbindgen_add_to_stack_pointer(16);
  }
}
function oi(e, t, n) {
  try {
    const l = B.__wbindgen_add_to_stack_pointer(-16), o = qt(e, B.__wbindgen_export), f = Be;
    B.hex_rows(l, o, f, t, n);
    var s = se().getInt32(l + 4 * 0, true), r = se().getInt32(l + 4 * 1, true), a = di(s, r).slice();
    return B.__wbindgen_export3(s, r * 4, 4), a;
  } finally {
    B.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e) {
  try {
    const r = B.__wbindgen_add_to_stack_pointer(-16), a = qt(e, B.__wbindgen_export), l = Be;
    B.parse_elf(r, a, l);
    var t = se().getInt32(r + 4 * 0, true), n = se().getInt32(r + 4 * 1, true), s = se().getInt32(r + 4 * 2, true);
    if (s) throw Oe(n);
    return Oe(t);
  } finally {
    B.__wbindgen_add_to_stack_pointer(16);
  }
}
function ci(e) {
  try {
    const r = B.__wbindgen_add_to_stack_pointer(-16), a = qt(e, B.__wbindgen_export), l = Be;
    B.parse_gba(r, a, l);
    var t = se().getInt32(r + 4 * 0, true), n = se().getInt32(r + 4 * 1, true), s = se().getInt32(r + 4 * 2, true);
    if (s) throw Oe(n);
    return Oe(t);
  } finally {
    B.__wbindgen_add_to_stack_pointer(16);
  }
}
function us() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const s = Error(tn(t, n));
    return bt(s);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const s = String(Ut(n)), r = xr(s, B.__wbindgen_export, B.__wbindgen_export2), a = Be;
    se().setInt32(t + 4, a, true), se().setInt32(t + 0, r, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(tn(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let s, r;
    try {
      s = t, r = n, console.error(tn(t, n));
    } finally {
      B.__wbindgen_export3(s, r, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return bt(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return bt(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return bt(t);
  }, __wbg_set_6be42768c690e380: function(t, n, s) {
    Ut(t)[Oe(n)] = Oe(s);
  }, __wbg_set_78ea6a19f4818587: function(t, n, s) {
    Ut(t)[n >>> 0] = Oe(s);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const s = Ut(n).stack, r = xr(s, B.__wbindgen_export, B.__wbindgen_export2), a = Be;
    se().setInt32(t + 4, a, true), se().setInt32(t + 0, r, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return bt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const s = tn(t, n);
    return bt(s);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return bt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = Ut(t);
    return bt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    Oe(t);
  } } };
}
function bt(e) {
  on === ct.length && ct.push(ct.length + 1);
  const t = on;
  return on = ct[t], ct[t] = e, t;
}
function ui(e) {
  e < 1028 || (ct[e] = on, on = e);
}
function vi(e, t) {
  return e = e >>> 0, _i().subarray(e / 4, e / 4 + t);
}
function di(e, t) {
  e = e >>> 0;
  const n = se(), s = [];
  for (let r = e; r < e + 4 * t; r += 4) s.push(Oe(n.getUint32(r, true)));
  return s;
}
let Ct = null;
function se() {
  return (Ct === null || Ct.buffer.detached === true || Ct.buffer.detached === void 0 && Ct.buffer !== B.memory.buffer) && (Ct = new DataView(B.memory.buffer)), Ct;
}
let en = null;
function _i() {
  return (en === null || en.byteLength === 0) && (en = new Float32Array(B.memory.buffer)), en;
}
function tn(e, t) {
  return hi(e >>> 0, t);
}
let nn = null;
function ln() {
  return (nn === null || nn.byteLength === 0) && (nn = new Uint8Array(B.memory.buffer)), nn;
}
function Ut(e) {
  return ct[e];
}
let ct = new Array(1024).fill(void 0);
ct.push(void 0, null, true, false);
let on = ct.length;
function qt(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return ln().set(e, n / 1), Be = e.length, n;
}
function xr(e, t, n) {
  if (n === void 0) {
    const o = fn.encode(e), f = t(o.length, 1) >>> 0;
    return ln().subarray(f, f + o.length).set(o), Be = o.length, f;
  }
  let s = e.length, r = t(s, 1) >>> 0;
  const a = ln();
  let l = 0;
  for (; l < s; l++) {
    const o = e.charCodeAt(l);
    if (o > 127) break;
    a[r + l] = o;
  }
  if (l !== s) {
    l !== 0 && (e = e.slice(l)), r = n(r, s, s = l + e.length * 3, 1) >>> 0;
    const o = ln().subarray(r + l, r + s), f = fn.encodeInto(e, o);
    l += f.written, r = n(r, s, l, 1) >>> 0;
  }
  return Be = l, r;
}
function Oe(e) {
  const t = Ut(e);
  return ui(e), t;
}
let kn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
kn.decode();
const pi = 2146435072;
let Ln = 0;
function hi(e, t) {
  return Ln += t, Ln >= pi && (kn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), kn.decode(), Ln = t), kn.decode(ln().subarray(e, e + t));
}
const fn = new TextEncoder();
"encodeInto" in fn || (fn.encodeInto = function(e, t) {
  const n = fn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let Be = 0, B;
function vs(e, t) {
  return B = e.exports, Ct = null, en = null, nn = null, B.__wbindgen_start(), B;
}
async function gi(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (r) {
      if (e.ok && n(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const s = await e.arrayBuffer();
    return await WebAssembly.instantiate(s, t);
  } else {
    const s = await WebAssembly.instantiate(e, t);
    return s instanceof WebAssembly.Instance ? { instance: s, module: e } : s;
  }
  function n(s) {
    switch (s) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function bi(e) {
  if (B !== void 0) return B;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = us();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return vs(n);
}
async function ds(e) {
  if (B !== void 0) return B;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = us();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: s } = await gi(await e, t);
  return vs(n);
}
const mi = Object.freeze(Object.defineProperty({ __proto__: null, _start: ri, decode_wav: si, default: ds, detect_format: ai, entropy_blocks: ii, extract_strings: li, hex_rows: oi, initSync: bi, parse_elf: fi, parse_gba: ci }, Symbol.toStringTag, { value: "Module" }));
let qn = null;
function pn() {
  return qn || (qn = ds()), qn.then(() => mi);
}
const wi = "scry-theme";
function _s() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function yi() {
  const e = _s() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(wi, e);
  } catch {
  }
  return e;
}
const Zn = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Un = 65536, Pn = Zn.length * 4;
function ps() {
  const n = 84 + Pn, s = new ArrayBuffer(n), r = new DataView(s), a = new Uint8Array(s);
  a[0] = 127, a[1] = 69, a[2] = 76, a[3] = 70, a[4] = 1, a[5] = 1, a[6] = 1, r.setUint16(16, 2, true), r.setUint16(18, 243, true), r.setUint32(20, 1, true), r.setUint32(24, Un, true), r.setUint32(28, 52, true), r.setUint32(32, 0, true), r.setUint32(36, 0, true), r.setUint16(40, 52, true), r.setUint16(42, 32, true), r.setUint16(44, 1, true), r.setUint16(46, 0, true), r.setUint16(48, 0, true), r.setUint16(50, 0, true), r.setUint32(52, 1, true), r.setUint32(56, 84, true), r.setUint32(60, Un, true), r.setUint32(64, Un, true), r.setUint32(68, Pn, true), r.setUint32(72, Pn, true), r.setUint32(76, 5, true), r.setUint32(80, 4096, true);
  for (let l = 0; l < Zn.length; l++) r.setUint32(84 + l * 4, Zn[l], true);
  return new Uint8Array(s);
}
const hs = "demo-rv32-spi-i2c.elf", Er = 64 * 1024 * 1024;
function Qn(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function gs(e) {
  if (!e) throw new Error("no file");
  if (e.size > Er) throw new Error(`file too large (${Qn(e.size)} > ${Qn(Er)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var xi = j('<span class="bar svelte-1i6c60u"></span>'), Ei = j('<span class="bar shimmer svelte-1i6c60u"></span>'), Ai = j('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), ki = j('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Si = j('<p class="loading svelte-1i6c60u"> </p>'), Ti = j('<p class="err svelte-1i6c60u"> </p>'), Mi = j('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Ci(e, t) {
  dt(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let s = P(false), r = P(""), a = P(nt([])), l = P(""), o = P(nt({}));
  async function f(k) {
    p(r, "");
    try {
      const q = await gs(k);
      t.onfile?.(q);
    } catch (q) {
      p(r, q.message || String(q), true);
    }
  }
  function v(k) {
    k.preventDefault(), p(s, false);
    const q = k.dataTransfer?.files?.[0];
    q && f(q);
  }
  function c(k) {
    k.preventDefault(), p(s, true);
  }
  function h() {
    p(s, false);
  }
  function _(k) {
    const q = k.target.files?.[0];
    q && f(q);
  }
  async function E(k) {
    if (!n.test(k)) {
      p(r, `sample blocked: bad name "${k}"`);
      return;
    }
    p(r, ""), p(l, `fetching ${k}\u2026`);
    try {
      const q = await fetch(`../v1/samples/${encodeURIComponent(k)}`);
      if (!q.ok) {
        p(r, `fetch failed: ${q.status}`), p(l, "");
        return;
      }
      p(l, `reading ${k}\u2026`);
      const H = new Uint8Array(await q.arrayBuffer());
      p(l, ""), t.onfile?.({ name: k, bytes: H });
    } catch (q) {
      p(r, String(q), true), p(l, "");
    }
  }
  function y() {
    p(r, ""), t.onfile?.({ name: hs, bytes: ps() });
  }
  st(() => {
    let k = false;
    return (async () => {
      try {
        const q = await fetch("../v1/samples/manifest.json");
        if (!q.ok) return;
        const H = await q.json();
        if (k || !Array.isArray(H)) return;
        p(a, H, true);
        const ne = await pn();
        if (k) return;
        await Promise.all(H.map(async (m) => {
          if (n.test(m.file)) try {
            const C = await fetch(`../v1/samples/${encodeURIComponent(m.file)}`);
            if (!C.ok) return;
            const S = new Uint8Array(await C.arrayBuffer());
            if (k) return;
            const x = Math.max(1, Math.ceil(S.length / 12)), M = ne.entropy_blocks(S, x);
            p(o, { ...i(o), [m.file]: Array.from(M) }, true);
          } catch {
          }
        }));
      } catch {
      }
    })(), () => {
      k = true;
    };
  });
  var F = Mi(), b = u(F);
  let D;
  var R = d(u(b), 4), g = u(R), T = u(g), N = d(g, 2), I = d(R, 2);
  {
    var L = (k) => {
      var q = ki(), H = d(u(q), 2);
      Ne(H, 21, () => i(a), De, (C, S) => {
        var x = Ai(), M = u(x), z = u(M), $ = d(M, 2), ie = u($);
        {
          var le = (fe) => {
            var X = Cn(), ue = vt(X);
            Ne(ue, 17, () => i(o)[i(S).file], De, (xe, We) => {
              var ke = xi();
              G((ce) => Wt(ke, `height: ${ce ?? ""}px`), [() => Math.max(2, i(We) * 14)]), O(xe, ke);
            }), O(fe, X);
          }, be = (fe) => {
            var X = Cn(), ue = vt(X);
            Ne(ue, 16, () => Array(12), De, (xe, We, ke) => {
              var ce = Ei();
              Wt(ce, `animation-delay: ${ke * 40}ms`), O(xe, ce);
            }), O(fe, X);
          };
          te(ie, (fe) => {
            i(o)[i(S).file] ? fe(le) : fe(be, -1);
          });
        }
        G(() => {
          Xe(x, "title", i(S).insns > 0 ? `${i(S).desc} \u2014 ${i(S).insns} instructions` : i(S).desc), w(z, i(S).file);
        }), ae("click", x, () => E(i(S).file)), O(C, x);
      });
      var ne = d(H, 2), m = u(ne);
      G((C) => w(m, C), [() => i(a).map((C) => `${C.file} \u2014 ${C.desc}`).join("  \xB7  ")]), O(k, q);
    };
    te(I, (k) => {
      i(a).length && k(L);
    });
  }
  var K = d(I, 2);
  {
    var Q = (k) => {
      var q = Si(), H = u(q);
      G(() => w(H, i(l))), O(k, q);
    };
    te(K, (k) => {
      i(l) && k(Q);
    });
  }
  var W = d(K, 2);
  {
    var ee = (k) => {
      var q = Ti(), H = u(q);
      G(() => w(H, i(r))), O(k, q);
    };
    te(W, (k) => {
      i(r) && k(ee);
    });
  }
  G(() => D = ft(b, 1, "zone svelte-1i6c60u", null, D, { over: i(s) })), Bt("drop", b, v), Bt("dragover", b, c), Bt("dragleave", b, h), ae("change", T, _), ae("click", N, y), O(e, F), _t();
}
_n(["change", "click"]);
var Oi = j('<span class="ct svelte-etynpr"> </span>'), Fi = j('<span class="ct svelte-etynpr"> </span>'), Ii = j('<span class="ct svelte-etynpr"> </span>'), Ri = j('<span class="ct svelte-etynpr"> </span>'), ji = j("<button> <!> <!> <!> <!></button>"), Di = j('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), Ni = j('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Li = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), qi = j('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Ui = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Pi = j('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Bi = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Wi = j('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Vi = j('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), zi = j('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Hi(e, t) {
  dt(t, true);
  let n = P("summary");
  const s = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let r = P(""), a = ut(() => {
    if (!t.strings) return [];
    const R = i(r).trim().toLowerCase();
    return R ? t.strings.filter((g) => g.text.toLowerCase().includes(R)) : t.strings;
  });
  const l = 80, o = ut(() => t.report ? Math.max(1, ...t.report.sections.map((R) => Number(R.size) || 0)) : 1);
  function f(R) {
    return "0x" + Number(R).toString(16).toUpperCase().padStart(8, "0");
  }
  var v = zi(), c = u(v);
  Ne(c, 21, () => s, De, (R, g) => {
    var T = ut(() => Is(i(g), 2));
    let N = () => i(T)[0], I = () => i(T)[1];
    var L = ji();
    let K;
    var Q = u(L), W = d(Q);
    {
      var ee = (S) => {
        var x = Oi(), M = u(x);
        G(() => w(M, t.report.sections.length)), O(S, x);
      };
      te(W, (S) => {
        N() === "sections" && S(ee);
      });
    }
    var k = d(W, 2);
    {
      var q = (S) => {
        var x = Fi(), M = u(x);
        G(() => w(M, t.report.segments.length)), O(S, x);
      };
      te(k, (S) => {
        N() === "segments" && S(q);
      });
    }
    var H = d(k, 2);
    {
      var ne = (S) => {
        var x = Ii(), M = u(x);
        G(() => w(M, t.report.symbols.length)), O(S, x);
      };
      te(H, (S) => {
        N() === "symbols" && S(ne);
      });
    }
    var m = d(H, 2);
    {
      var C = (S) => {
        var x = Ri(), M = u(x);
        G(() => w(M, t.strings.length)), O(S, x);
      };
      te(m, (S) => {
        N() === "strings" && t.strings && S(C);
      });
    }
    G(() => {
      K = ft(L, 1, "tab svelte-etynpr", null, K, { active: i(n) === N() }), w(Q, `${I() ?? ""} `);
    }), ae("click", L, () => p(n, N(), true)), O(R, L);
  });
  var h = d(c, 2), _ = u(h);
  {
    var E = (R) => {
      var g = Di(), T = d(u(g), 2), N = u(T), I = d(T, 4), L = u(I), K = d(I, 4), Q = u(K), W = d(K, 4), ee = u(W), k = d(W, 4), q = u(k), H = d(k, 4), ne = u(H), m = d(H, 4), C = u(m), S = d(m, 4), x = u(S), M = d(S, 4), z = u(M);
      G(() => {
        w(N, t.report.summary.class), w(L, t.report.summary.data), w(Q, t.report.summary.osabi), w(ee, t.report.summary.kind), w(q, t.report.summary.machine), w(ne, t.report.summary.entry), w(C, t.report.summary.n_sections), w(x, t.report.summary.n_segments), w(z, t.report.summary.n_symbols);
      }), O(R, g);
    }, y = (R) => {
      var g = Li(), T = d(u(g));
      Ne(T, 21, () => t.report.sections, De, (N, I) => {
        var L = Ni(), K = u(L), Q = u(K), W = d(K), ee = u(W), k = d(W), q = u(k), H = d(k), ne = u(H), m = d(H), C = u(m), S = d(m), x = u(S), M = d(S), z = u(M), $ = d(M), ie = u($);
        G((le) => {
          Xe(L, "title", `Jump to offset ${i(I).offset ?? ""} in HEX`), w(Q, i(I).idx), w(ee, i(I).name || "\u2014"), w(q, i(I).kind), w(ne, i(I).addr), w(C, i(I).offset), w(x, i(I).size), w(z, i(I).flags), Wt(ie, `width: ${le ?? ""}px`);
        }, [() => Math.max(1, Number(i(I).size) / i(o) * l)]), ae("click", L, () => t.onJumpToOffset?.(parseInt(i(I).offset, 16))), O(N, L);
      }), O(R, g);
    }, F = (R) => {
      var g = Ui(), T = d(u(g));
      Ne(T, 21, () => t.report.segments, De, (N, I) => {
        var L = qi(), K = u(L), Q = u(K), W = d(K), ee = u(W), k = d(W), q = u(k), H = d(k), ne = u(H), m = d(H), C = u(m), S = d(m), x = u(S), M = d(S), z = u(M);
        G(() => {
          Xe(L, "title", `Jump to offset ${i(I).offset ?? ""} in HEX`), w(Q, i(I).idx), w(ee, i(I).kind), w(q, i(I).vaddr), w(ne, i(I).offset), w(C, i(I).filesz), w(x, i(I).memsz), w(z, i(I).flags);
        }), ae("click", L, () => t.onJumpToOffset?.(parseInt(i(I).offset, 16))), O(N, L);
      }), O(R, g);
    }, b = (R) => {
      var g = Bi(), T = d(u(g));
      Ne(T, 21, () => t.report.symbols, De, (N, I) => {
        var L = Pi(), K = u(L), Q = u(K), W = d(K), ee = u(W), k = d(W), q = u(k), H = d(k), ne = u(H), m = d(H), C = u(m);
        G(() => {
          w(Q, i(I).name), w(ee, i(I).bind), w(q, i(I).kind), w(ne, i(I).value), w(C, i(I).size);
        }), O(N, L);
      }), O(R, g);
    }, D = (R) => {
      var g = Vi(), T = vt(g), N = u(T), I = d(N, 2), L = u(I), K = d(T, 2), Q = d(u(K));
      Ne(Q, 21, () => i(a), De, (W, ee) => {
        var k = Wi(), q = u(k), H = u(q), ne = d(q), m = u(ne);
        G((C, S) => {
          Xe(k, "title", `Jump to offset ${C ?? ""} in HEX`), w(H, S), w(m, i(ee).text);
        }, [() => f(i(ee).offset), () => f(i(ee).offset)]), ae("click", k, () => t.onJumpToOffset?.(i(ee).offset)), O(W, k);
      }), G(() => w(L, `${i(a).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), cs(N, () => i(r), (W) => p(r, W)), O(R, g);
    };
    te(_, (R) => {
      i(n) === "summary" ? R(E) : i(n) === "sections" ? R(y, 1) : i(n) === "segments" ? R(F, 2) : i(n) === "symbols" ? R(b, 3) : i(n) === "strings" && R(D, 4);
    });
  }
  O(e, v), _t();
}
_n(["click"]);
var Gi = j('<span class="strip-col svelte-14j5q0g"></span>'), Yi = j('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), Ki = j('<span role="presentation"> </span>'), Xi = j('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <!> <pre class="grid svelte-14j5q0g"></pre></div>');
function Ji(e, t) {
  dt(t, true);
  let n = ti(t, "jumpTo", 3, null), s = P(0);
  const r = 16 * 32;
  let a = P(nt([])), l = P(null), o = P(nt([])), f = P(0), v = P(""), c = P(null), h = P(0), _ = P(0), E = P(null);
  const y = 400;
  st(() => {
    let x = false;
    return pn().then((M) => {
      if (x) return;
      p(l, M, true), p(f, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), p(o, t.bytes ? i(l).entropy_blocks(t.bytes, i(f)) : [], true), b();
    }), () => {
      x = true;
    };
  }), st(() => {
    if (n() == null) return;
    const x = Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Number(n()) | 0)), M = Math.floor(x / 16) * 16, z = Math.floor(M / r) * r;
    p(s, z), b(), p(c, M), p(h, performance.now() + y), ma(_), requestAnimationFrame(() => {
      const $ = i(F);
      if (!$) return;
      const ie = $.querySelector(`[data-row-off="${M}"]`);
      if (!ie) return;
      const le = $.getBoundingClientRect(), fe = ie.getBoundingClientRect().top - le.top - le.height / 3;
      $.scrollTo({ top: $.scrollTop + fe, behavior: "smooth" });
    });
  }), st(() => {
    if (i(_) === 0) return;
    let x = 0;
    const M = () => {
      if (performance.now() >= i(h)) {
        p(c, null);
        return;
      }
      p(_, i(_) + 1 & 4095), x = requestAnimationFrame(M);
    };
    return x = requestAnimationFrame(M), () => cancelAnimationFrame(x);
  });
  let F = P(null);
  function b() {
    !i(l) || !t.bytes || p(a, i(l).hex_rows(t.bytes, i(s), r), true);
  }
  function D(x) {
    p(s, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, i(s) + x)), true), p(s, Math.floor(i(s) / 16) * 16), b();
  }
  function R(x) {
    x.preventDefault();
    let M = i(v).trim();
    if (!M) return;
    (M.startsWith("0x") || M.startsWith("0X")) && (M = M.slice(2));
    const z = parseInt(M, 16);
    Number.isFinite(z) && (p(s, Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, z)), true), p(s, Math.floor(i(s) / 16) * 16), b());
  }
  function g(x) {
    if (!i(o).length || !t.bytes) return;
    const z = x.currentTarget.getBoundingClientRect(), $ = Math.max(0, Math.min(1, (x.clientX - z.left) / z.width)), ie = Math.floor($ * t.bytes.length);
    p(s, Math.floor(ie / 16) * 16), b();
  }
  let T = ut(() => t.bytes && t.bytes.length ? i(s) / t.bytes.length : 0);
  function N(x, M) {
    if (i(c) == null || x !== i(c)) return 0;
    const z = i(h) - performance.now();
    return z <= 0 ? 0 : z / y;
  }
  let I = ut(() => {
    const x = [];
    for (let M = 0; M < i(a).length; M++) x.push({ off: i(s) + M * 16, text: i(a)[M] });
    return x;
  });
  var L = Xi(), K = u(L), Q = d(u(K), 2), W = u(Q), ee = d(W, 2), k = d(ee, 2), q = d(u(k), 2), H = d(k, 2), ne = d(H, 2), m = d(K, 2);
  {
    var C = (x) => {
      var M = Yi(), z = d(u(M), 2), $ = u(z);
      Ne($, 17, () => i(o), De, (fe, X) => {
        var ue = Gi();
        G((xe) => Wt(ue, `height: ${xe ?? ""}%; opacity: ${0.35 + i(X) * 0.65}`), [() => Math.max(2, i(X) * 100)]), O(fe, ue);
      });
      var ie = d($, 2), le = d(z, 2), be = u(le);
      G((fe) => {
        Wt(ie, `left: ${i(T) * 100}%`), w(be, `${fe ?? ""} B / col`);
      }, [() => i(f).toLocaleString()]), ae("click", z, g), O(x, M);
    };
    te(m, (x) => {
      i(o).length > 1 && x(C);
    });
  }
  var S = d(m, 2);
  Ne(S, 21, () => i(I), De, (x, M, z) => {
    var $ = Ki();
    let ie;
    var le = u($);
    G((be) => {
      ie = ft($, 1, "hex-row svelte-14j5q0g", null, ie, { hover: i(E) === z, flash: i(M).off === i(c) }), Xe($, "data-row-off", i(M).off), Wt($, be), w(le, `${i(M).text ?? ""}
`);
    }, [() => i(M).off === i(c) ? `--flash-a: ${N(i(M).off, i(_))}` : ""]), Bt("mouseenter", $, () => p(E, z, true)), Bt("mouseleave", $, () => i(E) === z && p(E, null)), O(x, $);
  }), Jn(S, (x) => p(F, x), () => i(F)), G((x) => Xe(q, "placeholder", x), [() => i(s).toString(16).padStart(8, "0").toUpperCase()]), ae("click", W, () => D(-r)), ae("click", ee, () => D(-16)), Bt("submit", k, R), cs(q, () => i(v), (x) => p(v, x)), ae("click", H, () => D(16)), ae("click", ne, () => D(r)), O(e, L), _t();
}
_n(["click"]);
var Zi = j('<span class="w-meta svelte-59bj26"> </span>'), Qi = j('<div class="w-empty svelte-59bj26"> </div>'), $i = j('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), el = j('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), tl = j('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), nl = j('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function rl(e, t) {
  dt(t, true);
  let n = P(null), s = P(""), r = P(null), a = P(null), l = null, o = null, f = null, v = 0, c = 0, h = 0, _ = P("0:00 / 0:00");
  function E(m) {
    return "0x" + (Number(m) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function y(m) {
    return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KiB` : `${(m / 1024 / 1024).toFixed(2)} MiB`;
  }
  function F(m) {
    if (m < 1) return `${(m * 1e3).toFixed(0)} ms`;
    if (m < 60) return `${m.toFixed(2)} s`;
    const C = Math.floor(m / 60), S = m - C * 60;
    return `${C}m ${S.toFixed(1)}s`;
  }
  function b(m) {
    return m.replace(/\s+$/g, "");
  }
  async function D(m) {
    if (p(s, ""), !m) {
      p(n, null);
      return;
    }
    try {
      const S = (await pn()).decode_wav(m);
      p(n, S, true), f = null, p(_, `0:00 / ${F(S.duration)}`), requestAnimationFrame(() => R({ playhead: 0 }));
    } catch (C) {
      console.error("[scry/wave] decode failed", C), p(n, null), p(s, String(C?.message || C), true);
    }
  }
  function R({ playhead: m = null } = {}) {
    if (!i(r) || !i(n)) return;
    const C = window.devicePixelRatio || 1, S = i(r).getBoundingClientRect(), x = Math.max(1, Math.floor(S.width * C)), M = Math.max(1, Math.floor(S.height * C));
    i(r).width = x, i(r).height = M;
    const z = getComputedStyle(i(r)), $ = z.getPropertyValue("--w-bg").trim() || "#000", ie = z.getPropertyValue("--w-grid").trim() || "#333", le = z.getPropertyValue("--w-peak").trim() || "#888", be = z.getPropertyValue("--w-rms").trim() || "#bcd", fe = z.getPropertyValue("--w-accent").trim() || "#9fe3c7", X = i(r).getContext("2d");
    X.fillStyle = $, X.fillRect(0, 0, x, M), X.strokeStyle = ie, X.lineWidth = 1;
    const ue = M / 2;
    for (const ce of [0.25, 0.5, 0.75]) {
      const Se = Math.floor(M * ce) + 0.5;
      X.beginPath(), X.moveTo(0, Se), X.lineTo(x, Se), X.stroke();
    }
    const xe = i(n).envelope, We = xe.length, ke = x / We;
    for (let ce = 0; ce < We; ce++) {
      const Se = xe[ce], Ze = Math.floor(ce * ke), Qe = Math.max(1, Math.floor(ke) - 1), Te = ue - Se.max * ue, Ve = ue - Se.min * ue;
      X.fillStyle = le, X.fillRect(Ze, Math.floor(Te), Qe, Math.max(1, Math.ceil(Ve - Te)));
      const ze = Se.rms * ue;
      X.fillStyle = be, X.fillRect(Ze, Math.floor(ue - ze), Qe, Math.max(1, Math.ceil(2 * ze)));
    }
    if (m != null) {
      const ce = Math.floor(m * x);
      X.strokeStyle = fe, X.lineWidth = 2 * C, X.beginPath(), X.moveTo(ce, 0), X.lineTo(ce, M), X.stroke();
    }
  }
  function g() {
    if (!i(n)) return null;
    if (f) return f;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const m = i(n).samples instanceof Float32Array ? i(n).samples : new Float32Array(i(n).samples);
    return f = l.createBuffer(1, m.length, i(n).fmt.sample_rate), f.copyToChannel(m, 0), f;
  }
  function T() {
    if (!l || !o || !i(n)) {
      h = 0;
      return;
    }
    const m = c + (l.currentTime - v), C = i(n).duration, S = Math.max(0, Math.min(1, m / C));
    R({ playhead: S }), p(_, `${F(Math.min(m, C))} / ${F(C)}`), m < C ? h = requestAnimationFrame(T) : h = 0;
  }
  function N() {
    if (h && (cancelAnimationFrame(h), h = 0), o) {
      try {
        o.stop();
      } catch {
      }
      o.disconnect(), o = null;
    }
  }
  function I(m) {
    if (!i(n)) return;
    const C = g();
    C && (N(), o = l.createBufferSource(), o.buffer = C, o.connect(l.destination), o.onended = () => {
      h && cancelAnimationFrame(h), h = 0, R({ playhead: 0 }), p(_, `0:00 / ${F(i(n).duration)}`), o = null;
    }, l.state === "suspended" && l.resume(), c = Math.max(0, Math.min(i(n).duration - 1e-3, m)), v = l.currentTime, o.start(0, c), h = requestAnimationFrame(T));
  }
  function L(m) {
    if (!i(n)) return;
    const C = i(r).getBoundingClientRect(), S = (m.clientX - C.left) / C.width;
    I(S * i(n).duration);
  }
  st(() => {
    const m = t.bytes;
    return D(m), () => N();
  }), st(() => {
    if (!i(a)) return;
    const m = new ResizeObserver(() => i(n) && R({ playhead: 0 }));
    return m.observe(i(a)), () => m.disconnect();
  });
  var K = nl(), Q = u(K), W = d(u(Q), 2);
  {
    var ee = (m) => {
      var C = Zi(), S = u(C);
      G((x) => w(S, `${i(n).fmt.channels ?? ""}ch @ ${i(n).fmt.sample_rate ?? ""} Hz \xB7 ${i(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${x ?? ""}`), [() => F(i(n).duration)]), O(m, C);
    };
    te(W, (m) => {
      i(n) && m(ee);
    });
  }
  var k = d(Q, 2);
  {
    var q = (m) => {
      var C = Qi(), S = u(C);
      G(() => w(S, `Not a parseable WAV: ${i(s) ?? ""}`)), O(m, C);
    }, H = (m) => {
      var C = $i();
      O(m, C);
    }, ne = (m) => {
      var C = tl(), S = vt(C), x = u(S), M = u(x), z = u(M), $ = d(u(z)), ie = u($), le = d(z, 2), be = d(u(le)), fe = u(be), X = d(le, 2), ue = d(u(X)), xe = u(ue), We = d(X, 2), ke = d(u(We)), ce = u(ke), Se = d(M, 2), Ze = u(Se), Qe = d(u(Ze)), Te = u(Qe), Ve = d(Ze, 2), ze = d(u(Ve)), St = u(ze), A = d(Ve, 2), U = d(u(A)), V = u(U), _e = d(A, 2), pe = d(u(_e)), He = u(pe), me = d(Se, 2), we = u(me), Me = d(u(we)), re = u(Me), Ge = d(we, 2);
      Ne(Ge, 17, () => i(n).chunks.slice(0, 4), De, (Tt, Jt) => {
        var mn = el(), wn = u(mn), bs = u(wn), ms = d(wn), ws = u(ms);
        G((ys, xs, Es) => {
          w(bs, ys), w(ws, `${xs ?? ""} @ ${Es ?? ""}`);
        }, [() => b(i(Jt).id), () => y(i(Jt).size), () => E(i(Jt).offset)]), O(Tt, mn);
      });
      var ht = d(S, 2), $e = u(ht), et = d($e, 2), Ie = d(et, 2), hn = u(Ie), gn = d(ht, 2), bn = u(gn);
      Jn(bn, (Tt) => p(r, Tt), () => i(r)), Jn(gn, (Tt) => p(a, Tt), () => i(a)), G((Tt, Jt, mn, wn) => {
        w(ie, i(n).fmt.format === 1 ? "PCM (int)" : i(n).fmt.format === 3 ? "IEEE float" : `tag ${i(n).fmt.format}`), w(fe, i(n).fmt.channels), w(xe, `${i(n).fmt.sample_rate ?? ""} Hz`), w(ce, `${i(n).fmt.bits_per_sample ?? ""}-bit`), w(Te, Tt), w(St, Jt), w(V, mn), w(He, `${wn ?? ""}/s`), w(re, i(n).chunks.length), w(hn, i(_));
      }, [() => Number(i(n).total_frames).toLocaleString(), () => F(i(n).duration), () => y(i(n).data_len), () => y(i(n).fmt.byte_rate)]), ae("click", $e, () => I(0)), ae("click", et, () => {
        N(), R({ playhead: 0 }), p(_, `0:00 / ${F(i(n).duration)}`);
      }), ae("click", bn, L), O(m, C);
    };
    te(k, (m) => {
      i(s) ? m(q) : i(n) ? m(ne, -1) : m(H, 1);
    });
  }
  O(e, K), _t();
}
_n(["click"]);
var sl = j('<span class="c-meta svelte-1uww35p"> </span>'), al = j('<div class="c-empty svelte-1uww35p"> </div>'), il = j('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), ll = j('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), ol = j(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), fl = j('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function cl(e, t) {
  dt(t, true);
  let n = P(null), s = P("");
  function r(g) {
    return (g >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function a(g) {
    return "0x" + (g >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function l(g) {
    return g >= 32 && g <= 126 ? String.fromCharCode(g) : ".";
  }
  function o(g) {
    return g < 1024 ? `${g} B` : g < 1024 * 1024 ? `${(g / 1024).toFixed(1)} KiB` : `${(g / 1024 / 1024).toFixed(2)} MiB`;
  }
  async function f(g) {
    if (p(s, ""), !g) {
      p(n, null);
      return;
    }
    try {
      const T = await pn();
      p(n, T.parse_gba(g), true);
    } catch (T) {
      console.error("[scry/cart] parse failed", T), p(n, null), p(s, String(T?.message || T), true);
    }
  }
  st(() => {
    const g = t.bytes;
    f(g);
  });
  function v(g) {
    if (!t.bytes) return null;
    const T = t.bytes.subarray(g, Math.min(t.bytes.length, g + 16)), N = [], I = [];
    for (let L = 0; L < T.length; L++) N.push(r(T[L])), I.push(l(T[L])), L === 7 && N.push("");
    return { off: g, hex: N.join(" ").replace(/  /g, "  "), ascii: I.join("") };
  }
  let c = ut(() => {
    if (!t.bytes) return [];
    const g = [];
    for (let T = 160; T < 224; T += 16) {
      const N = v(T);
      N && g.push(N);
    }
    return g;
  });
  var h = fl(), _ = u(h), E = d(u(_), 2);
  {
    var y = (g) => {
      var T = sl(), N = u(T);
      G((I) => w(N, `"${(i(n).title || "(blank)") ?? ""}" \xB7 ${i(n).game_code ?? ""} \xB7 ${I ?? ""}`), [() => o(i(n).rom_size)]), O(g, T);
    };
    te(E, (g) => {
      i(n) && g(y);
    });
  }
  var F = d(_, 2);
  {
    var b = (g) => {
      var T = al(), N = u(T);
      G(() => w(N, `parse failed: ${i(s) ?? ""}`)), O(g, T);
    }, D = (g) => {
      var T = il();
      O(g, T);
    }, R = (g) => {
      var T = ol(), N = u(T), I = d(u(N), 2), L = d(u(I)), K = u(L), Q = d(I, 2), W = d(u(Q)), ee = u(W), k = d(Q, 2), q = d(u(k)), H = u(q), ne = d(k, 2), m = d(u(ne), 2), C = u(m), S = d(ne, 2), x = d(u(S)), M = u(x), z = d(S, 2), $ = d(u(z)), ie = u($), le = d(z, 2), be = d(u(le)), fe = u(be), X = d(le, 2), ue = d(u(X), 2), xe = u(ue), We = d(X, 2), ke = d(u(We)), ce = u(ke), Se = d(N, 2), Ze = d(u(Se), 2);
      Ne(Ze, 21, () => i(c), De, (Qe, Te) => {
        var Ve = ll(), ze = u(Ve), St = u(ze), A = d(ze, 2), U = u(A), V = d(A, 2), _e = u(V);
        G((pe) => {
          w(St, pe), w(U, i(Te).hex), w(_e, i(Te).ascii);
        }, [() => a(i(Te).off)]), O(Qe, Ve);
      }), G((Qe, Te, Ve, ze, St, A, U) => {
        w(K, i(n).title || "(blank)"), w(ee, i(n).game_code || "----"), w(H, i(n).maker_code || "--"), w(C, `0x${Qe ?? ""} ${i(n).fixed_ok ? "\u2713" : "\u2717"}`), w(M, `0x${Te ?? ""}`), w(ie, `0x${Ve ?? ""}`), w(fe, `0x${ze ?? ""}`), w(xe, `stored 0x${St ?? ""} \xB7
            computed 0x${A ?? ""}
            ${i(n).checksum_ok ? " \u2713" : " \u2717"}`), w(ce, U);
      }, [() => r(i(n).fixed), () => r(i(n).unit_code), () => r(i(n).device_type), () => r(i(n).version), () => r(i(n).checksum), () => r(i(n).checksum_computed), () => o(i(n).rom_size)]), O(g, T);
    };
    te(F, (g) => {
      i(s) ? g(b) : i(n) ? g(R, -1) : g(D, 1);
    });
  }
  O(e, h), _t();
}
var ul = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), vl = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), dl = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), _l = j('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function pl(e, t) {
  dt(t, true);
  var n = _l(), s = u(n);
  {
    var r = (o) => {
      var f = ul();
      O(o, f);
    }, a = (o) => {
      var f = vl(), v = vt(f), c = d(u(v), 2), h = u(c), _ = d(v, 2), E = d(u(_), 2), y = u(E), F = d(_, 2), b = d(u(F), 2), D = u(b);
      G((R, g) => {
        Xe(c, "title", t.file.name), w(h, t.file.name), w(y, R), w(D, g);
      }, [() => Qn(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), O(o, f);
    }, l = (o) => {
      var f = dl();
      O(o, f);
    };
    te(s, (o) => {
      t.parsing ? o(r) : t.file ? o(a, 1) : o(l, -1);
    });
  }
  O(e, n), _t();
}
var hl = j('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function gl(e, t) {
  dt(t, true);
  let n = P(false), s = 0;
  function r(f) {
    const v = f.dataTransfer;
    if (!v) return false;
    const c = v.types;
    if (!c) return false;
    for (let h = 0; h < c.length; h++) if (c[h] === "Files") return true;
    return false;
  }
  st(() => {
    function f(_) {
      r(_) && (_.preventDefault(), s++, p(n, true));
    }
    function v(_) {
      r(_) && (_.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "copy"));
    }
    function c(_) {
      r(_) && (s = Math.max(0, s - 1), s === 0 && p(n, false));
    }
    async function h(_) {
      if (!r(_)) return;
      _.preventDefault(), s = 0, p(n, false);
      const E = _.dataTransfer?.files?.[0];
      if (E) try {
        const y = await gs(E);
        t.onfile?.(y);
      } catch (y) {
        t.onerror?.(y.message || String(y));
      }
    }
    return window.addEventListener("dragenter", f), window.addEventListener("dragover", v), window.addEventListener("dragleave", c), window.addEventListener("drop", h), () => {
      window.removeEventListener("dragenter", f), window.removeEventListener("dragover", v), window.removeEventListener("dragleave", c), window.removeEventListener("drop", h);
    };
  });
  var a = Cn(), l = vt(a);
  {
    var o = (f) => {
      var v = hl();
      O(f, v);
    };
    te(l, (f) => {
      i(n) && f(o);
    });
  }
  O(e, a), _t();
}
var bl = j('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), ml = j('<span class="s-badge entrance svelte-1n46o8q"> </span>'), wl = j('<span class="s-summary svelte-1n46o8q"> </span>'), yl = j('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), xl = j('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), El = j('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Al = j('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), kl = j('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Sl = j('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), Tl = j('<p class="err svelte-1n46o8q"> </p>'), Ml = j('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), Cl = j("<!> <!>", 1), Ol = j('<span class="s-hint svelte-1n46o8q"> </span>'), Fl = j('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function Il(e, t) {
  dt(t, true);
  let n = P(null), s = P(null), r = P(null), a = P(null), l = P(null), o = P(null), f = P(null), v = P(""), c = P("inspect"), h = P(nt(_s())), _ = P(false), E = P(null), y = P(""), F = P(false);
  const b = "scry \xB7 awaiting binary", D = "scry-booted-v2", R = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 emulator lives in V1" }, g = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  st(() => {
    function A(U) {
      if (U.origin !== location.origin) return;
      const V = U.data;
      V && (V.type === "scry-theme" && (V.value === "light" || V.value === "dark") ? (document.documentElement.setAttribute("data-theme", V.value), p(h, V.value, true)) : V.type === "scry-load-demo" && K());
    }
    return window.addEventListener("message", A), () => window.removeEventListener("message", A);
  });
  async function T({ name: A, bytes: U }) {
    p(n, { name: A, bytes: U }, true), p(v, ""), p(r, null), p(a, null), p(l, null), p(o, null), p(s, null), p(f, null), p(_, true);
    try {
      const V = await pn();
      if (p(s, V.detect_format(U), true), i(s) === "elf") p(r, V.parse_elf(U), true), p(c, "inspect");
      else if (i(s) === "wav") {
        try {
          p(a, V.decode_wav(U), true);
        } catch {
        }
        p(c, "wave");
      } else if (i(s) === "gba") {
        try {
          p(l, V.parse_gba(U), true);
        } catch {
        }
        p(c, "cart");
      } else p(c, "hex");
      p(o, V.extract_strings(U, 4), true);
      const _e = Math.max(64, Math.ceil(U.length / 256)), pe = V.entropy_blocks(U, _e);
      if (pe.length) {
        let He = 0;
        for (let me = 0; me < pe.length; me++) He += pe[me];
        p(f, He / pe.length * 8);
      }
    } catch (V) {
      p(v, String(V), true);
    } finally {
      p(_, false);
    }
  }
  function N() {
    p(n, null), p(r, null), p(a, null), p(l, null), p(o, null), p(s, null), p(v, ""), p(f, null);
  }
  function I(A) {
    p(v, A, true);
  }
  function L() {
    p(h, yi(), true);
  }
  function K() {
    T({ name: hs, bytes: ps() });
  }
  function Q(A) {
    p(c, "hex"), p(E, { o: A, t: performance.now() }, true);
  }
  let W = ut(() => {
    if (!i(n)) return null;
    if (i(r)) {
      const A = i(r).summary;
      return [i(s)?.toUpperCase(), A.machine, A.class, A.kind].filter(Boolean).join(" \xB7 ");
    }
    return (i(s) || "raw").toUpperCase();
  }), ee = ut(() => {
    if (!i(n)) return null;
    if (i(r)) {
      const A = i(r).summary, U = [];
      return A.class && A.machine ? U.push(`${A.class} ${A.machine}`) : A.machine && U.push(A.machine), U.push(`${i(r).sections.length} sections`), U.push(`${i(r).symbols.length} symbols`), i(f) != null && U.push(`avg entropy ${i(f).toFixed(1)} bits`), U.join(" \xB7 ");
    }
    if (i(a)) {
      const A = i(a).fmt, U = i(a).duration < 1 ? `${(i(a).duration * 1e3).toFixed(0)} ms` : `${i(a).duration.toFixed(2)} s`, V = [`${A.channels}ch ${A.sample_rate} Hz`, `${A.bits_per_sample}-bit`, U];
      return i(f) != null && V.push(`avg entropy ${i(f).toFixed(1)} bits`), V.join(" \xB7 ");
    }
    if (i(l)) {
      const A = ["GBA cart", `"${i(l).title || "(blank)"}"`, `code ${i(l).game_code}`];
      return i(f) != null && A.push(`avg entropy ${i(f).toFixed(1)} bits`), A.join(" \xB7 ");
    }
    return i(f) != null ? `bytes only \xB7 entropy ${i(f).toFixed(1)} bits` : null;
  });
  st(() => {
    if (sessionStorage.getItem(D)) {
      p(y, b), p(F, true);
      return;
    }
    let A = 0;
    const U = setInterval(() => {
      if (A++, p(y, b.slice(0, A), true), A >= b.length) {
        clearInterval(U), p(F, true);
        try {
          sessionStorage.setItem(D, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(U);
  });
  var k = Fl(), q = vt(k);
  gl(q, { onfile: T, onerror: I });
  var H = d(q, 2);
  let ne;
  var m = u(H), C = u(m);
  {
    var S = (A) => {
      var U = bl(), V = u(U);
      let _e;
      G(() => {
        Xe(U, "title", i(n) ? "Clear file \xB7 back to import" : ""), _e = ft(V, 1, "s-brand svelte-1n46o8q", null, _e, { "s-brand-clickable": !!i(n) });
      }), ae("click", U, N), O(A, U);
    };
    te(C, (A) => {
      g || A(S);
    });
  }
  var x = d(C, 2);
  {
    var M = (A) => {
      var U = El(), V = u(U);
      {
        var _e = (we) => {
          var Me = yl(), re = u(Me);
          Ha(re, () => i(n).name, ($e) => {
            var et = ml(), Ie = u(et);
            G(() => w(Ie, `[ ${i(W) ?? ""} ]`)), O($e, et);
          });
          var Ge = d(re, 2);
          {
            var ht = ($e) => {
              var et = wl(), Ie = u(et);
              G(() => w(Ie, i(ee))), O($e, et);
            };
            te(Ge, ($e) => {
              i(ee) && $e(ht);
            });
          }
          O(we, Me);
        };
        te(V, (we) => {
          i(W) && we(_e);
        });
      }
      var pe = d(V, 2);
      {
        var He = (we) => {
          var Me = xl();
          O(we, Me);
        };
        te(pe, (we) => {
          i(_) && we(He);
        });
      }
      var me = d(pe, 2);
      ae("click", me, N), O(A, U);
    }, z = (A) => {
      var U = Al();
      O(A, U);
    };
    te(x, (A) => {
      i(n) ? A(M) : A(z, -1);
    });
  }
  var $ = d(x, 2);
  {
    var ie = (A) => {
      var U = kl(), V = u(U), _e = u(V);
      G(() => w(_e, i(h) === "dark" ? "\u263C" : "\u263E")), ae("click", V, L), O(A, U);
    };
    te($, (A) => {
      g || A(ie);
    });
  }
  var le = d(m, 2), be = u(le);
  pl(be, { get file() {
    return i(n);
  }, get format() {
    return i(s);
  }, get parsing() {
    return i(_);
  } });
  var fe = d(be, 2), X = u(fe);
  {
    var ue = (A) => {
      var U = Sl(), V = u(U);
      let _e;
      var pe = d(V, 2);
      let He;
      var me = d(pe, 2);
      let we;
      var Me = d(me, 2);
      let re;
      G(() => {
        V.disabled = i(s) !== "elf", Xe(V, "title", i(s) === "elf" ? "" : "INSPECT is ELF-only"), _e = ft(V, 1, "svelte-1n46o8q", null, _e, { on: i(c) === "inspect" }), He = ft(pe, 1, "svelte-1n46o8q", null, He, { on: i(c) === "hex" }), me.disabled = i(s) !== "wav", Xe(me, "title", i(s) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), we = ft(me, 1, "svelte-1n46o8q", null, we, { on: i(c) === "wave" }), Me.disabled = i(s) !== "gba", Xe(Me, "title", i(s) === "gba" ? "" : "CART is GBA-only"), re = ft(Me, 1, "svelte-1n46o8q", null, re, { on: i(c) === "cart" });
      }), ae("click", V, () => p(c, "inspect")), ae("click", pe, () => p(c, "hex")), ae("click", me, () => p(c, "wave")), ae("click", Me, () => p(c, "cart")), O(A, U);
    };
    te(X, (A) => {
      i(n) && A(ue);
    });
  }
  var xe = d(X, 2), We = u(xe);
  {
    var ke = (A) => {
      Ci(A, { onfile: T });
    }, ce = (A) => {
      var U = Cl(), V = vt(U);
      {
        var _e = (re) => {
          var Ge = Tl(), ht = u(Ge);
          G(() => w(ht, `parse failed: ${i(v) ?? ""}`)), O(re, Ge);
        };
        te(V, (re) => {
          i(v) && re(_e);
        });
      }
      var pe = d(V, 2);
      {
        var He = (re) => {
          var Ge = Cn(), ht = vt(Ge);
          {
            var $e = (Ie) => {
              Hi(Ie, { get report() {
                return i(r);
              }, get strings() {
                return i(o);
              }, onJumpToOffset: Q });
            }, et = (Ie) => {
              var hn = Ml(), gn = d(u(hn)), bn = u(gn);
              G(() => w(bn, i(s))), O(Ie, hn);
            };
            te(ht, (Ie) => {
              i(r) ? Ie($e) : i(s) && i(s) !== "elf" && Ie(et, 1);
            });
          }
          O(re, Ge);
        }, me = (re) => {
          {
            let Ge = ut(() => i(E)?.o);
            Ji(re, { get bytes() {
              return i(n).bytes;
            }, get jumpTo() {
              return i(Ge);
            } });
          }
        }, we = (re) => {
          rl(re, { get bytes() {
            return i(n).bytes;
          } });
        }, Me = (re) => {
          cl(re, { get bytes() {
            return i(n).bytes;
          } });
        };
        te(pe, (re) => {
          i(c) === "inspect" ? re(He) : i(c) === "hex" ? re(me, 1) : i(c) === "wave" ? re(we, 2) : i(c) === "cart" && re(Me, 3);
        });
      }
      O(A, U);
    };
    te(We, (A) => {
      i(n) ? A(ce, -1) : A(ke);
    });
  }
  var Se = d(le, 2), Ze = u(Se), Qe = d(u(Ze), 1, true), Te = d(Ze, 2);
  {
    var Ve = (A) => {
      var U = Ol(), V = u(U);
      G(() => w(V, R[i(c)] ?? "")), O(A, U);
    };
    te(Te, (A) => {
      i(n) && A(Ve);
    });
  }
  var ze = d(Te, 2), St = u(ze);
  G((A) => {
    ne = ft(H, 1, "app svelte-1n46o8q", null, ne, { embedded: g }), w(Qe, i(n) ? "READY \xB7 LOCAL \xB7 NO UPLOAD" : i(F) ? "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${i(y)}\u2588`), w(St, `MODULE \xB7 ${A ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => i(n) ? i(c).toUpperCase() : "EMPTY"]), O(e, k), _t();
}
_n(["click"]);
Ba(Il, { target: document.getElementById("app") });
