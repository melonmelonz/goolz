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
var Ar = Array.isArray, Ss = Array.prototype.indexOf, Ut = Array.prototype.includes, Sn = Array.from, ks = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, Ts = Object.getOwnPropertyDescriptors, Ms = Object.prototype, Os = Array.prototype, Sr = Object.getPrototypeOf, ur = Object.isExtensible;
const Fs = () => {
};
function js(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function kr() {
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
const pe = 2, Bt = 4, kn = 8, Tr = 1 << 24, Ke = 16, ze = 32, dt = 64, Pn = 128, Ie = 512, fe = 1024, _e = 2048, Xe = 4096, me = 8192, Re = 16384, It = 32768, Un = 1 << 25, Wt = 65536, Bn = 1 << 17, Rs = 1 << 18, Yt = 1 << 19, Cs = 1 << 20, Ye = 1 << 25, Ft = 65536, wn = 1 << 21, fn = 1 << 22, ft = 1 << 23, gn = Symbol("$state"), Ns = Symbol(""), et = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Ds() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ls(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function qs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ps() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Us(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Bs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ws() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function zs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Hs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ys = 1, Gs = 2, Mr = 4, Ks = 8, Xs = 16, Js = 1, Zs = 2, ve = Symbol(), Or = "http://www.w3.org/1999/xhtml";
function Qs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function $s() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Fr(e) {
  return e === this.v;
}
function ea(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function jr(e) {
  return !ea(e, this.v);
}
let ta = false, Ae = null;
function zt(e) {
  Ae = e;
}
function ht(e, t = false, n) {
  Ae = { p: Ae, i: false, c: null, e: null, s: e, x: null, r: K, l: null };
}
function gt(e) {
  var t = Ae, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var s of n) Jr(s);
  }
  return t.i = true, Ae = t.p, {};
}
function Ir() {
  return true;
}
let At = [];
function Rr() {
  var e = At;
  At = [], js(e);
}
function ut(e) {
  if (At.length === 0 && !rn) {
    var t = At;
    queueMicrotask(() => {
      t === At && Rr();
    });
  }
  At.push(e);
}
function na() {
  for (; At.length > 0; ) Rr();
}
function Cr(e) {
  var t = K;
  if (t === null) return J.f |= ft, e;
  if (!(t.f & It) && !(t.f & Bt)) throw e;
  ot(e, t);
}
function ot(e, t) {
  for (; t !== null; ) {
    if (t.f & Pn) {
      if (!(t.f & It)) throw e;
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
function se(e, t) {
  e.f = e.f & ra | t;
}
function Zn(e) {
  e.f & Ie || e.deps === null ? se(e, fe) : se(e, Xe);
}
function Nr(e) {
  if (e !== null) for (const t of e) !(t.f & pe) || !(t.f & Ft) || (t.f ^= Ft, Nr(t.deps));
}
function Dr(e, t, n) {
  e.f & _e ? t.add(e) : e.f & Xe && n.add(e), Nr(e.deps), se(e, fe);
}
const xt = /* @__PURE__ */ new Set();
let W = null, Ue = null, Wn = null, rn = false, In = false, Lt = null, mn = null;
var cr = 0;
let sa = 1;
class _t {
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
  #u = /* @__PURE__ */ new Set();
  #l = /* @__PURE__ */ new Map();
  #v = /* @__PURE__ */ new Set();
  is_fork = false;
  #_ = false;
  #d = /* @__PURE__ */ new Set();
  #c() {
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
      for (var r of s.d) se(r, _e), n(r);
      for (r of s.m) se(r, Xe), n(r);
    }
    this.#v.add(t);
  }
  #p() {
    if (cr++ > 1e3 && (xt.delete(this), ia()), !this.#c()) {
      for (const o of this.#f) this.#u.delete(o), se(o, _e), this.schedule(o);
      for (const o of this.#u) se(o, Xe), this.schedule(o);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = Lt = [], s = [], r = mn = [];
    for (const o of t) try {
      this.#m(o, n, s);
    } catch (f) {
      throw Pr(o), f;
    }
    if (W = null, r.length > 0) {
      var a = _t.ensure();
      for (const o of r) a.schedule(o);
    }
    if (Lt = null, mn = null, this.#c() || this.#g()) {
      this.#h(s), this.#h(n);
      for (const [o, f] of this.#l) qr(o, f);
    } else {
      this.#s.size === 0 && xt.delete(this), this.#f.clear(), this.#u.clear();
      for (const o of this.#n) o(this);
      this.#n.clear(), vr(s), vr(n), this.#a?.resolve();
    }
    var l = W;
    if (this.#t.length > 0) {
      const o = l ??= this;
      o.#t.push(...this.#t.filter((f) => !o.#t.includes(f)));
    }
    l !== null && (xt.add(l), l.#p());
  }
  #m(t, n, s) {
    t.f ^= fe;
    for (var r = t.first; r !== null; ) {
      var a = r.f, l = (a & (ze | dt)) !== 0, o = l && (a & fe) !== 0, f = o || (a & me) !== 0 || this.#l.has(r);
      if (!f && r.fn !== null) {
        l ? r.f ^= fe : a & Bt ? n.push(r) : vn(r) && (a & Ke && this.#u.add(r), Ht(r));
        var u = r.first;
        if (u !== null) {
          r = u;
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
    for (var n = 0; n < t.length; n += 1) Dr(t[n], this.#f, this.#u);
  }
  capture(t, n, s = false) {
    t.v !== ve && !this.previous.has(t) && this.previous.set(t, t.v), t.f & ft || (this.current.set(t, [n, s]), Ue?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    W = this;
  }
  deactivate() {
    W = null, Ue = null;
  }
  flush() {
    try {
      In = true, W = this, this.#p();
    } finally {
      cr = 0, Wn = null, Lt = null, mn = null, In = false, W = null, Ue = null, Tt.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), xt.delete(this);
  }
  register_created_effect(t) {
    this.#i.push(t);
  }
  #b() {
    for (const c of xt) {
      var t = c.id < this.id, n = [];
      for (const [p, [d, y]] of this.current) {
        if (c.current.has(p)) {
          var s = c.current.get(p)[0];
          if (t && d !== s) c.current.set(p, [d, y]);
          else continue;
        }
        n.push(p);
      }
      var r = [...c.current.keys()].filter((p) => !this.current.has(p));
      if (r.length === 0) t && c.discard();
      else if (n.length > 0) {
        if (t) for (const p of this.#v) c.unskip_effect(p, (d) => {
          d.f & (Ke | fn) ? c.schedule(d) : c.#h([d]);
        });
        c.activate();
        var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n) Lr(o, r, a, l);
        l = /* @__PURE__ */ new Map();
        var f = [...c.current.keys()].filter((p) => this.current.has(p) ? this.current.get(p)[0] !== p : true);
        for (const p of this.#i) !(p.f & (Re | me | Bn)) && Qn(p, f, l) && (p.f & (fn | Ke) ? (se(p, _e), c.schedule(p)) : c.#f.add(p));
        if (c.#t.length > 0) {
          c.apply();
          for (var u of c.#t) c.#m(u, [], []);
          c.#t = [];
        }
        c.deactivate();
      }
    }
    for (const c of xt) c.#d.has(this) && (c.#d.delete(this), c.#d.size === 0 && !c.#c() && (c.activate(), c.#p()));
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
    this.#_ || s || (this.#_ = true, ut(() => {
      this.#_ = false, this.flush();
    }));
  }
  transfer_effects(t, n) {
    for (const s of t) this.#f.add(s);
    for (const s of n) this.#u.add(s);
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
    return (this.#a ??= kr()).promise;
  }
  static ensure() {
    if (W === null) {
      const t = W = new _t();
      In || (xt.add(W), rn || ut(() => {
        W === t && t.flush();
      }));
    }
    return W;
  }
  apply() {
    {
      Ue = null;
      return;
    }
  }
  schedule(t) {
    if (Wn = t, t.b?.is_pending && t.f & (Bt | kn | Tr) && !(t.f & It)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var s = n.f;
      if (Lt !== null && n === K && (J === null || !(J.f & pe))) return;
      if (s & (dt | ze)) {
        if (!(s & fe)) return;
        n.f ^= fe;
      }
    }
    this.#t.push(n);
  }
}
function aa(e) {
  var t = rn;
  rn = true;
  try {
    for (var n; ; ) {
      if (na(), W === null) return n;
      W.flush();
    }
  } finally {
    rn = t;
  }
}
function ia() {
  try {
    Bs();
  } catch (e) {
    ot(e, Wn);
  }
}
let $e = null;
function vr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var s = e[n++];
      if (!(s.f & (Re | me)) && vn(s) && ($e = /* @__PURE__ */ new Set(), Ht(s), s.deps === null && s.first === null && s.nodes === null && s.teardown === null && s.ac === null && Qr(s), $e?.size > 0)) {
        Tt.clear();
        for (const r of $e) {
          if (r.f & (Re | me)) continue;
          const a = [r];
          let l = r.parent;
          for (; l !== null; ) $e.has(l) && ($e.delete(l), a.push(l)), l = l.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const f = a[o];
            f.f & (Re | me) || Ht(f);
          }
        }
        $e.clear();
      }
    }
    $e = null;
  }
}
function Lr(e, t, n, s) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const r of e.reactions) {
    const a = r.f;
    a & pe ? Lr(r, t, n, s) : a & (fn | Ke) && !(a & _e) && Qn(r, t, s) && (se(r, _e), $n(r));
  }
}
function Qn(e, t, n) {
  const s = n.get(e);
  if (s !== void 0) return s;
  if (e.deps !== null) for (const r of e.deps) {
    if (Ut.call(t, r)) return true;
    if (r.f & pe && Qn(r, t, n)) return n.set(r, true), true;
  }
  return n.set(e, false), false;
}
function $n(e) {
  W.schedule(e);
}
function qr(e, t) {
  if (!(e.f & ze && e.f & fe)) {
    e.f & _e ? t.d.push(e) : e.f & Xe && t.m.push(e), se(e, fe);
    for (var n = e.first; n !== null; ) qr(n, t), n = n.next;
  }
}
function Pr(e) {
  se(e, fe);
  for (var t = e.first; t !== null; ) Pr(t), t = t.next;
}
function la(e) {
  let t = 0, n = jt(0), s;
  return () => {
    nr() && (i(n), rr(() => (t === 0 && (s = lr(() => e(() => sn(n)))), t += 1, () => {
      ut(() => {
        t -= 1, t === 0 && (s?.(), s = void 0, sn(n));
      });
    })));
  };
}
var oa = Wt | Yt;
function fa(e, t, n, s) {
  new ua(e, t, n, s);
}
class ua {
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
  #u = 0;
  #l = 0;
  #v = false;
  #_ = /* @__PURE__ */ new Set();
  #d = /* @__PURE__ */ new Set();
  #c = null;
  #g = la(() => (this.#c = jt(this.#u), () => {
    this.#c = null;
  }));
  constructor(t, n, s, r) {
    this.#n = t, this.#e = n, this.#s = (a) => {
      var l = K;
      l.b = this, l.f |= Pn, s(a);
    }, this.parent = K.b, this.transform_error = r ?? this.parent?.transform_error ?? ((a) => a), this.#r = Mn(() => {
      this.#b();
    }, oa);
  }
  #p() {
    try {
      this.#a = je(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #m(t) {
    const n = this.#e.failed;
    n && (this.#i = je(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = je(() => t(this.#n)), ut(() => {
      var n = this.#f = document.createDocumentFragment(), s = vt();
      n.append(s), this.#a = this.#w(() => je(() => this.#s(s))), this.#l === 0 && (this.#n.before(n), this.#f = null, Mt(this.#t, () => {
        this.#t = null;
      }), this.#y(W));
    }));
  }
  #b() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#u = 0, this.#a = je(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#f = document.createDocumentFragment();
        ir(this.#a, t);
        const n = this.#e.pending;
        this.#t = je(() => n(this.#n));
      } else this.#y(W);
    } catch (n) {
      this.error(n);
    }
  }
  #y(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#d);
  }
  defer_effect(t) {
    Dr(t, this.#_, this.#d);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #w(t) {
    var n = K, s = J, r = Ae;
    Je(this.#r), Ne(this.#r), zt(this.#r.ctx);
    try {
      return _t.ensure(), t();
    } catch (a) {
      return Cr(a), null;
    } finally {
      Je(n), Ne(s), zt(r);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#y(n), this.#t && Mt(this.#t, () => {
      this.#t = null;
    }), this.#f && (this.#n.before(this.#f), this.#f = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#u += t, !(!this.#c || this.#v) && (this.#v = true, ut(() => {
      this.#v = false, this.#c && Vt(this.#c, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#g(), i(this.#c);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    W?.is_fork ? (this.#a && W.skip_effect(this.#a), this.#t && W.skip_effect(this.#t), this.#i && W.skip_effect(this.#i), W.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (xe(this.#a), this.#a = null), this.#t && (xe(this.#t), this.#t = null), this.#i && (xe(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let s = this.#e.failed;
    var r = false, a = false;
    const l = () => {
      if (r) {
        $s();
        return;
      }
      r = true, a && Hs(), this.#i !== null && Mt(this.#i, () => {
        this.#i = null;
      }), this.#w(() => {
        this.#b();
      });
    }, o = (f) => {
      try {
        a = true, n?.(f, l), a = false;
      } catch (u) {
        ot(u, this.#r && this.#r.parent);
      }
      s && (this.#i = this.#w(() => {
        try {
          return je(() => {
            var u = K;
            u.b = this, u.f |= Pn, s(this.#n, () => f, () => l);
          });
        } catch (u) {
          return ot(u, this.#r.parent), null;
        }
      }));
    };
    ut(() => {
      var f;
      try {
        f = this.transform_error(t);
      } catch (u) {
        ot(u, this.#r && this.#r.parent);
        return;
      }
      f !== null && typeof f == "object" && typeof f.then == "function" ? f.then(o, (u) => ot(u, this.#r && this.#r.parent)) : o(f);
    });
  }
}
function ca(e, t, n, s) {
  const r = er;
  var a = e.filter((d) => !d.settled);
  if (n.length === 0 && a.length === 0) {
    s(t.map(r));
    return;
  }
  var l = K, o = va(), f = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((d) => d.promise)) : null;
  function u(d) {
    o();
    try {
      s(d);
    } catch (y) {
      l.f & Re || ot(y, l);
    }
    xn();
  }
  if (n.length === 0) {
    f.then(() => u(t.map(r)));
    return;
  }
  var c = Ur();
  function p() {
    Promise.all(n.map((d) => da(d))).then((d) => u([...t.map(r), ...d])).catch((d) => ot(d, l)).finally(() => c());
  }
  f ? f.then(() => {
    o(), p(), xn();
  }) : p();
}
function va() {
  var e = K, t = J, n = Ae, s = W;
  return function(a = true) {
    Je(e), Ne(t), zt(n), a && !(e.f & Re) && (s?.activate(), s?.apply());
  };
}
function xn(e = true) {
  Je(null), Ne(null), zt(null), e && W?.deactivate();
}
function Ur() {
  var e = K, t = e.b, n = W, s = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(s, e), (r = false) => {
    t.update_pending_count(-1, n), n.decrement(s, e, r);
  };
}
function er(e) {
  var t = pe | _e;
  return K !== null && (K.f |= Yt), { ctx: Ae, deps: null, effects: null, equals: Fr, f: t, fn: e, reactions: null, rv: 0, v: ve, wv: 0, parent: K, ac: null };
}
function da(e, t, n) {
  let s = K;
  s === null && Ds();
  var r = void 0, a = jt(ve), l = !J, o = /* @__PURE__ */ new Map();
  return Oa(() => {
    var f = K, u = kr();
    r = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(xn);
    } catch (y) {
      u.reject(y), xn();
    }
    var c = W;
    if (l) {
      if (f.f & It) var p = Ur();
      if (s.b.is_rendered()) o.get(c)?.reject(et), o.delete(c);
      else {
        for (const y of o.values()) y.reject(et);
        o.clear();
      }
      o.set(c, u);
    }
    const d = (y, b = void 0) => {
      if (p) {
        var O = b === et;
        p(O);
      }
      if (!(b === et || f.f & Re)) {
        if (c.activate(), b) a.f |= ft, Vt(a, b);
        else {
          a.f & ft && (a.f ^= ft), Vt(a, y);
          for (const [g, C] of o) {
            if (o.delete(g), g === c) break;
            C.reject(et);
          }
        }
        c.deactivate();
      }
    };
    u.promise.then(d, (y) => d(null, y || "unknown"));
  }), Xr(() => {
    for (const f of o.values()) f.reject(et);
  }), new Promise((f) => {
    function u(c) {
      function p() {
        c === r ? f(a) : u(r);
      }
      c.then(p, p);
    }
    u(r);
  });
}
function ct(e) {
  const t = er(e);
  return ts(t), t;
}
function _a(e) {
  const t = er(e);
  return t.equals = jr, t;
}
function pa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) xe(t[n]);
  }
}
function tr(e) {
  var t, n = K, s = e.parent;
  if (!pt && s !== null && s.f & (Re | me)) return Qs(), e.v;
  Je(s);
  try {
    e.f &= ~Ft, pa(e), t = as(e);
  } finally {
    Je(n);
  }
  return t;
}
function Br(e) {
  var t = tr(e);
  if (!e.equals(t) && (e.wv = rs(), (!W?.is_fork || e.deps === null) && (W !== null ? W.capture(e, t, true) : e.v = t, e.deps === null))) {
    se(e, fe);
    return;
  }
  pt || (Ue !== null ? (nr() || W?.is_fork) && Ue.set(e, t) : Zn(e));
}
function ha(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(et), t.teardown = Fs, t.ac = null, un(t, 0), sr(t));
}
function Wr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Ht(t);
}
let zn = /* @__PURE__ */ new Set();
const Tt = /* @__PURE__ */ new Map();
let zr = false;
function jt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Fr, rv: 0, wv: 0 };
  return n;
}
function L(e, t) {
  const n = jt(e);
  return ts(n), n;
}
function ga(e, t = false, n = true) {
  const s = jt(e);
  return t || (s.equals = jr), s;
}
function h(e, t, n = false) {
  J !== null && (!Be || J.f & Bn) && Ir() && J.f & (pe | Ke | fn | Bn) && (Ce === null || !Ut.call(Ce, e)) && Vs();
  let s = n ? Ge(t) : t;
  return Vt(e, s, mn);
}
function Vt(e, t, n = null) {
  if (!e.equals(t)) {
    Tt.set(e, pt ? t : e.v);
    var s = _t.ensure();
    if (s.capture(e, t), e.f & pe) {
      const r = e;
      e.f & _e && tr(r), Ue === null && Zn(r);
    }
    e.wv = rs(), Vr(e, _e, n), K !== null && K.f & fe && !(K.f & (ze | dt)) && (Fe === null ? Ia([e]) : Fe.push(e)), !s.is_fork && zn.size > 0 && !zr && ma();
  }
  return t;
}
function ma() {
  zr = false;
  for (const e of zn) e.f & fe && se(e, Xe), vn(e) && Ht(e);
  zn.clear();
}
function ba(e, t = 1) {
  var n = i(e), s = t === 1 ? n++ : n--;
  return h(e, n), s;
}
function sn(e) {
  h(e, e.v + 1);
}
function Vr(e, t, n) {
  var s = e.reactions;
  if (s !== null) for (var r = s.length, a = 0; a < r; a++) {
    var l = s[a], o = l.f, f = (o & _e) === 0;
    if (f && se(l, t), o & pe) {
      var u = l;
      Ue?.delete(u), o & Ft || (o & Ie && (K === null || !(K.f & wn)) && (l.f |= Ft), Vr(u, Xe, n));
    } else if (f) {
      var c = l;
      o & Ke && $e !== null && $e.add(c), n !== null ? n.push(c) : $n(c);
    }
  }
}
function Ge(e) {
  if (typeof e != "object" || e === null || gn in e) return e;
  const t = Sr(e);
  if (t !== Ms && t !== Os) return e;
  var n = /* @__PURE__ */ new Map(), s = Ar(e), r = L(0), a = Ot, l = (o) => {
    if (Ot === a) return o();
    var f = J, u = Ot;
    Ne(null), hr(a);
    var c = o();
    return Ne(f), hr(u), c;
  };
  return s && n.set("length", L(e.length)), new Proxy(e, { defineProperty(o, f, u) {
    (!("value" in u) || u.configurable === false || u.enumerable === false || u.writable === false) && Ws();
    var c = n.get(f);
    return c === void 0 ? l(() => {
      var p = L(u.value);
      return n.set(f, p), p;
    }) : h(c, u.value, true), true;
  }, deleteProperty(o, f) {
    var u = n.get(f);
    if (u === void 0) {
      if (f in o) {
        const c = l(() => L(ve));
        n.set(f, c), sn(r);
      }
    } else h(u, ve), sn(r);
    return true;
  }, get(o, f, u) {
    if (f === gn) return e;
    var c = n.get(f), p = f in o;
    if (c === void 0 && (!p || nn(o, f)?.writable) && (c = l(() => {
      var y = Ge(p ? o[f] : ve), b = L(y);
      return b;
    }), n.set(f, c)), c !== void 0) {
      var d = i(c);
      return d === ve ? void 0 : d;
    }
    return Reflect.get(o, f, u);
  }, getOwnPropertyDescriptor(o, f) {
    var u = Reflect.getOwnPropertyDescriptor(o, f);
    if (u && "value" in u) {
      var c = n.get(f);
      c && (u.value = i(c));
    } else if (u === void 0) {
      var p = n.get(f), d = p?.v;
      if (p !== void 0 && d !== ve) return { enumerable: true, configurable: true, value: d, writable: true };
    }
    return u;
  }, has(o, f) {
    if (f === gn) return true;
    var u = n.get(f), c = u !== void 0 && u.v !== ve || Reflect.has(o, f);
    if (u !== void 0 || K !== null && (!c || nn(o, f)?.writable)) {
      u === void 0 && (u = l(() => {
        var d = c ? Ge(o[f]) : ve, y = L(d);
        return y;
      }), n.set(f, u));
      var p = i(u);
      if (p === ve) return false;
    }
    return c;
  }, set(o, f, u, c) {
    var p = n.get(f), d = f in o;
    if (s && f === "length") for (var y = u; y < p.v; y += 1) {
      var b = n.get(y + "");
      b !== void 0 ? h(b, ve) : y in o && (b = l(() => L(ve)), n.set(y + "", b));
    }
    if (p === void 0) (!d || nn(o, f)?.writable) && (p = l(() => L(void 0)), h(p, Ge(u)), n.set(f, p));
    else {
      d = p.v !== ve;
      var O = l(() => Ge(u));
      h(p, O);
    }
    var g = Reflect.getOwnPropertyDescriptor(o, f);
    if (g?.set && g.set.call(c, u), !d) {
      if (s && typeof f == "string") {
        var C = n.get("length"), T = Number(f);
        Number.isInteger(T) && T >= C.v && h(C, T + 1);
      }
      sn(r);
    }
    return true;
  }, ownKeys(o) {
    i(r);
    var f = Reflect.ownKeys(o).filter((p) => {
      var d = n.get(p);
      return d === void 0 || d.v !== ve;
    });
    for (var [u, c] of n) c.v !== ve && !(u in o) && f.push(u);
    return f;
  }, setPrototypeOf() {
    zs();
  } });
}
var dr, Hr, Yr, Gr;
function ya() {
  if (dr === void 0) {
    dr = window, Hr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Yr = nn(t, "firstChild").get, Gr = nn(t, "nextSibling").get, ur(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), ur(n) && (n.__t = void 0);
  }
}
function vt(e = "") {
  return document.createTextNode(e);
}
function En(e) {
  return Yr.call(e);
}
function cn(e) {
  return Gr.call(e);
}
function v(e, t) {
  return En(e);
}
function nt(e, t = false) {
  {
    var n = En(e);
    return n instanceof Comment && n.data === "" ? cn(n) : n;
  }
}
function _(e, t = 1, n = false) {
  let s = e;
  for (; t--; ) s = cn(s);
  return s;
}
function wa(e) {
  e.textContent = "";
}
function Kr() {
  return false;
}
function xa(e, t, n) {
  return document.createElementNS(Or, e, void 0);
}
let _r = false;
function Ea() {
  _r || (_r = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function Tn(e) {
  var t = J, n = K;
  Ne(null), Je(null);
  try {
    return e();
  } finally {
    Ne(t), Je(n);
  }
}
function Aa(e, t, n, s = n) {
  e.addEventListener(t, () => Tn(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), s(true);
  } : e.__on_r = () => s(true), Ea();
}
function Sa(e) {
  K === null && (J === null && Us(), Ps()), pt && qs();
}
function ka(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function at(e, t) {
  var n = K;
  n !== null && n.f & me && (e |= me);
  var s = { ctx: Ae, deps: null, nodes: null, f: e | _e | Ie, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  W?.register_created_effect(s);
  var r = s;
  if (e & Bt) Lt !== null ? Lt.push(s) : _t.ensure().schedule(s);
  else if (t !== null) {
    try {
      Ht(s);
    } catch (l) {
      throw xe(s), l;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && !(r.f & Yt) && (r = r.first, e & Ke && e & Wt && r !== null && (r.f |= Wt));
  }
  if (r !== null && (r.parent = n, n !== null && ka(r, n), J !== null && J.f & pe && !(e & dt))) {
    var a = J;
    (a.effects ??= []).push(r);
  }
  return s;
}
function nr() {
  return J !== null && !Be;
}
function Xr(e) {
  const t = at(kn, null);
  return se(t, fe), t.teardown = e, t;
}
function rt(e) {
  Sa();
  var t = K.f, n = !J && (t & ze) !== 0 && (t & It) === 0;
  if (n) {
    var s = Ae;
    (s.e ??= []).push(e);
  } else return Jr(e);
}
function Jr(e) {
  return at(Bt | Cs, e);
}
function Ta(e) {
  _t.ensure();
  const t = at(dt | Yt, e);
  return (n = {}) => new Promise((s) => {
    n.outro ? Mt(t, () => {
      xe(t), s(void 0);
    }) : (xe(t), s(void 0));
  });
}
function Ma(e) {
  return at(Bt, e);
}
function Oa(e) {
  return at(fn | Yt, e);
}
function rr(e, t = 0) {
  return at(kn | t, e);
}
function X(e, t = [], n = [], s = []) {
  ca(s, t, n, (r) => {
    at(kn, () => e(...r.map(i)));
  });
}
function Mn(e, t = 0) {
  var n = at(Ke | t, e);
  return n;
}
function je(e) {
  return at(ze | Yt, e);
}
function Zr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = pt, s = J;
    pr(true), Ne(null);
    try {
      t.call(null);
    } finally {
      pr(n), Ne(s);
    }
  }
}
function sr(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Tn(() => {
      r.abort(et);
    });
    var s = n.next;
    n.f & dt ? n.parent = null : xe(n, t), n = s;
  }
}
function Fa(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & ze || xe(t), t = n;
  }
}
function xe(e, t = true) {
  var n = false;
  (t || e.f & Rs) && e.nodes !== null && e.nodes.end !== null && (ja(e.nodes.start, e.nodes.end), n = true), se(e, Un), sr(e, t && !n), un(e, 0);
  var s = e.nodes && e.nodes.t;
  if (s !== null) for (const a of s) a.stop();
  Zr(e), e.f ^= Un, e.f |= Re;
  var r = e.parent;
  r !== null && r.first !== null && Qr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ja(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : cn(e);
    e.remove(), e = n;
  }
}
function Qr(e) {
  var t = e.parent, n = e.prev, s = e.next;
  n !== null && (n.next = s), s !== null && (s.prev = n), t !== null && (t.first === e && (t.first = s), t.last === e && (t.last = n));
}
function Mt(e, t, n = true) {
  var s = [];
  $r(e, s, true);
  var r = () => {
    n && xe(e), t && t();
  }, a = s.length;
  if (a > 0) {
    var l = () => --a || r();
    for (var o of s) o.out(l);
  } else r();
}
function $r(e, t, n) {
  if (!(e.f & me)) {
    e.f ^= me;
    var s = e.nodes && e.nodes.t;
    if (s !== null) for (const o of s) (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var a = r.next;
      if (!(r.f & dt)) {
        var l = (r.f & Wt) !== 0 || (r.f & ze) !== 0 && (e.f & Ke) !== 0;
        $r(r, t, l ? n : false);
      }
      r = a;
    }
  }
}
function ar(e) {
  es(e, true);
}
function es(e, t) {
  if (e.f & me) {
    e.f ^= me, e.f & fe || (se(e, _e), _t.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var s = n.next, r = (n.f & Wt) !== 0 || (n.f & ze) !== 0;
      es(n, r ? t : false), n = s;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (const l of a) (l.is_global || t) && l.in();
  }
}
function ir(e, t) {
  if (e.nodes) for (var n = e.nodes.start, s = e.nodes.end; n !== null; ) {
    var r = n === s ? null : cn(n);
    t.append(n), n = r;
  }
}
let bn = false, pt = false;
function pr(e) {
  pt = e;
}
let J = null, Be = false;
function Ne(e) {
  J = e;
}
let K = null;
function Je(e) {
  K = e;
}
let Ce = null;
function ts(e) {
  J !== null && (Ce === null ? Ce = [e] : Ce.push(e));
}
let we = null, Ee = 0, Fe = null;
function Ia(e) {
  Fe = e;
}
let ns = 1, St = 0, Ot = St;
function hr(e) {
  Ot = e;
}
function rs() {
  return ++ns;
}
function vn(e) {
  var t = e.f;
  if (t & _e) return true;
  if (t & pe && (e.f &= ~Ft), t & Xe) {
    for (var n = e.deps, s = n.length, r = 0; r < s; r++) {
      var a = n[r];
      if (vn(a) && Br(a), a.wv > e.wv) return true;
    }
    t & Ie && Ue === null && se(e, fe);
  }
  return false;
}
function ss(e, t, n = true) {
  var s = e.reactions;
  if (s !== null && !(Ce !== null && Ut.call(Ce, e))) for (var r = 0; r < s.length; r++) {
    var a = s[r];
    a.f & pe ? ss(a, t, false) : t === a && (n ? se(a, _e) : a.f & fe && se(a, Xe), $n(a));
  }
}
function as(e) {
  var t = we, n = Ee, s = Fe, r = J, a = Ce, l = Ae, o = Be, f = Ot, u = e.f;
  we = null, Ee = 0, Fe = null, J = u & (ze | dt) ? null : e, Ce = null, zt(e.ctx), Be = false, Ot = ++St, e.ac !== null && (Tn(() => {
    e.ac.abort(et);
  }), e.ac = null);
  try {
    e.f |= wn;
    var c = e.fn, p = c();
    e.f |= It;
    var d = e.deps, y = W?.is_fork;
    if (we !== null) {
      var b;
      if (y || un(e, Ee), d !== null && Ee > 0) for (d.length = Ee + we.length, b = 0; b < we.length; b++) d[Ee + b] = we[b];
      else e.deps = d = we;
      if (nr() && e.f & Ie) for (b = Ee; b < d.length; b++) (d[b].reactions ??= []).push(e);
    } else !y && d !== null && Ee < d.length && (un(e, Ee), d.length = Ee);
    if (Ir() && Fe !== null && !Be && d !== null && !(e.f & (pe | Xe | _e))) for (b = 0; b < Fe.length; b++) ss(Fe[b], e);
    if (r !== null && r !== e) {
      if (St++, r.deps !== null) for (let O = 0; O < n; O += 1) r.deps[O].rv = St;
      if (t !== null) for (const O of t) O.rv = St;
      Fe !== null && (s === null ? s = Fe : s.push(...Fe));
    }
    return e.f & ft && (e.f ^= ft), p;
  } catch (O) {
    return Cr(O);
  } finally {
    e.f ^= wn, we = t, Ee = n, Fe = s, J = r, Ce = a, zt(l), Be = o, Ot = f;
  }
}
function Ra(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var s = Ss.call(n, e);
    if (s !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[s] = n[r], n.pop());
    }
  }
  if (n === null && t.f & pe && (we === null || !Ut.call(we, t))) {
    var a = t;
    a.f & Ie && (a.f ^= Ie, a.f &= ~Ft), a.v !== ve && Zn(a), ha(a), un(a, 0);
  }
}
function un(e, t) {
  var n = e.deps;
  if (n !== null) for (var s = t; s < n.length; s++) Ra(e, n[s]);
}
function Ht(e) {
  var t = e.f;
  if (!(t & Re)) {
    se(e, fe);
    var n = K, s = bn;
    K = e, bn = true;
    try {
      t & (Ke | Tr) ? Fa(e) : sr(e), Zr(e);
      var r = as(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = ns;
      var a;
      As && ta && e.f & _e && e.deps;
    } finally {
      bn = s, K = n;
    }
  }
}
async function Ca() {
  await Promise.resolve(), aa();
}
function i(e) {
  var t = e.f, n = (t & pe) !== 0;
  if (J !== null && !Be) {
    var s = K !== null && (K.f & Re) !== 0;
    if (!s && (Ce === null || !Ut.call(Ce, e))) {
      var r = J.deps;
      if (J.f & wn) e.rv < St && (e.rv = St, we === null && r !== null && r[Ee] === e ? Ee++ : we === null ? we = [e] : we.push(e));
      else {
        (J.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [J] : Ut.call(a, J) || a.push(J);
      }
    }
  }
  if (pt && Tt.has(e)) return Tt.get(e);
  if (n) {
    var l = e;
    if (pt) {
      var o = l.v;
      return (!(l.f & fe) && l.reactions !== null || ls(l)) && (o = tr(l)), Tt.set(l, o), o;
    }
    var f = (l.f & Ie) === 0 && !Be && J !== null && (bn || (J.f & Ie) !== 0), u = (l.f & It) === 0;
    vn(l) && (f && (l.f |= Ie), Br(l)), f && !u && (Wr(l), is(l));
  }
  if (Ue?.has(e)) return Ue.get(e);
  if (e.f & ft) throw e.v;
  return e.v;
}
function is(e) {
  if (e.f |= Ie, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & pe && !(t.f & Ie) && (Wr(t), is(t));
}
function ls(e) {
  if (e.v === ve) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (Tt.has(t) || t.f & pe && ls(t)) return true;
  return false;
}
function lr(e) {
  var t = Be;
  try {
    return Be = true, e();
  } finally {
    Be = t;
  }
}
const Na = ["touchstart", "touchmove"];
function Da(e) {
  return Na.includes(e);
}
const Zt = Symbol("events"), os = /* @__PURE__ */ new Set(), Vn = /* @__PURE__ */ new Set();
function La(e, t, n, s = {}) {
  function r(a) {
    if (s.capture || Hn.call(t, a), !a.cancelBubble) return Tn(() => n?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ut(() => {
    t.addEventListener(e, r, s);
  }) : t.addEventListener(e, r, s), r;
}
function qt(e, t, n, s, r) {
  var a = { capture: s, passive: r }, l = La(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Xr(() => {
    t.removeEventListener(e, l, a);
  });
}
function ie(e, t, n) {
  (t[Zt] ??= {})[e] = n;
}
function dn(e) {
  for (var t = 0; t < e.length; t++) os.add(e[t]);
  for (var n of Vn) n(e);
}
let gr = null;
function Hn(e) {
  var t = this, n = t.ownerDocument, s = e.type, r = e.composedPath?.() || [], a = r[0] || e.target;
  gr = e;
  var l = 0, o = gr === e && e[Zt];
  if (o) {
    var f = r.indexOf(o);
    if (f !== -1 && (t === document || t === window)) {
      e[Zt] = t;
      return;
    }
    var u = r.indexOf(t);
    if (u === -1) return;
    f <= u && (l = f);
  }
  if (a = r[l] || e.target, a !== t) {
    ks(e, "currentTarget", { configurable: true, get() {
      return a || n;
    } });
    var c = J, p = K;
    Ne(null), Je(null);
    try {
      for (var d, y = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var O = a[Zt]?.[s];
          O != null && (!a.disabled || e.target === a) && O.call(a, e);
        } catch (g) {
          d ? y.push(g) : d = g;
        }
        if (e.cancelBubble || b === t || b === null) break;
        a = b;
      }
      if (d) {
        for (let g of y) queueMicrotask(() => {
          throw g;
        });
        throw d;
      }
    } finally {
      e[Zt] = t, delete e.currentTarget, Ne(c), Je(p);
    }
  }
}
const qa = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Pa(e) {
  return qa?.createHTML(e) ?? e;
}
function Ua(e) {
  var t = xa("template");
  return t.innerHTML = Pa(e.replaceAll("<!>", "<!---->")), t.content;
}
function Yn(e, t) {
  var n = K;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function I(e, t) {
  var n = (t & Js) !== 0, s = (t & Zs) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Ua(a ? e : "<!>" + e), n || (r = En(r)));
    var l = s || Hr ? document.importNode(r, true) : r.cloneNode(true);
    if (n) {
      var o = En(l), f = l.lastChild;
      Yn(o, f);
    } else Yn(l, l);
    return l;
  };
}
function An() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = vt();
  return e.append(t, n), Yn(t, n), e;
}
function F(e, t) {
  e !== null && e.before(t);
}
function x(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ba(e, t) {
  return Wa(e, t);
}
const hn = /* @__PURE__ */ new Map();
function Wa(e, { target: t, anchor: n, props: s = {}, events: r, context: a, intro: l = true, transformError: o }) {
  ya();
  var f = void 0, u = Ta(() => {
    var c = n ?? t.appendChild(vt());
    fa(c, { pending: () => {
    } }, (y) => {
      ht({});
      var b = Ae;
      a && (b.c = a), r && (s.$$events = r), f = e(y, s) || {}, gt();
    }, o);
    var p = /* @__PURE__ */ new Set(), d = (y) => {
      for (var b = 0; b < y.length; b++) {
        var O = y[b];
        if (!p.has(O)) {
          p.add(O);
          var g = Da(O);
          for (const j of [t, document]) {
            var C = hn.get(j);
            C === void 0 && (C = /* @__PURE__ */ new Map(), hn.set(j, C));
            var T = C.get(O);
            T === void 0 ? (j.addEventListener(O, Hn, { passive: g }), C.set(O, 1)) : C.set(O, T + 1);
          }
        }
      }
    };
    return d(Sn(os)), Vn.add(d), () => {
      for (var y of p) for (const g of [t, document]) {
        var b = hn.get(g), O = b.get(y);
        --O == 0 ? (g.removeEventListener(y, Hn), b.delete(y), b.size === 0 && hn.delete(g)) : b.set(y, O);
      }
      Vn.delete(d), c !== n && c.parentNode?.removeChild(c);
    };
  });
  return za.set(f, u), f;
}
let za = /* @__PURE__ */ new WeakMap();
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
      if (s) ar(s), this.#s.delete(n);
      else {
        var r = this.#e.get(n);
        r && (this.#o.set(n, r.effect), this.#e.delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
      }
      for (const [a, l] of this.#n) {
        if (this.#n.delete(a), a === t) break;
        const o = this.#e.get(l);
        o && (xe(o.effect), this.#e.delete(l));
      }
      for (const [a, l] of this.#o) {
        if (a === n || this.#s.has(a)) continue;
        const o = () => {
          if (Array.from(this.#n.values()).includes(a)) {
            var u = document.createDocumentFragment();
            ir(l, u), u.append(vt()), this.#e.set(a, { effect: l, fragment: u });
          } else xe(l);
          this.#s.delete(a), this.#o.delete(a);
        };
        this.#r || !s ? (this.#s.add(a), Mt(l, o, false)) : o();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [s, r] of this.#e) n.includes(s) || (xe(r.effect), this.#e.delete(s));
  };
  ensure(t, n) {
    var s = W, r = Kr();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (r) {
      var a = document.createDocumentFragment(), l = vt();
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
  var s = new fs(e), r = n ? Wt : 0;
  function a(l, o) {
    s.ensure(l, o);
  }
  Mn(() => {
    var l = false;
    t((o, f = 0) => {
      l = true, a(f, o);
    }), l || a(-1, null);
  }, r);
}
const Va = Symbol("NaN");
function Ha(e, t, n) {
  var s = new fs(e);
  Mn(() => {
    var r = t();
    r !== r && (r = Va), s.ensure(r, n);
  });
}
function qe(e, t) {
  return t;
}
function Ya(e, t, n) {
  for (var s = [], r = t.length, a, l = t.length, o = 0; o < r; o++) {
    let p = t[o];
    Mt(p, () => {
      if (a) {
        if (a.pending.delete(p), a.done.add(p), a.pending.size === 0) {
          var d = e.outrogroups;
          Gn(e, Sn(a.done)), d.delete(a), d.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var f = s.length === 0 && n !== null;
    if (f) {
      var u = n, c = u.parentNode;
      wa(c), c.append(u), e.items.clear();
    }
    Gn(e, t, !f);
  } else a = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Gn(e, t, n = true) {
  var s;
  if (e.pending.size > 0) {
    s = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const o of l) s.add(e.items.get(o).e);
  }
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    if (s?.has(a)) {
      a.f |= Ye;
      const l = document.createDocumentFragment();
      ir(a, l);
    } else xe(t[r], n);
  }
}
var mr;
function Pe(e, t, n, s, r, a = null) {
  var l = e, o = /* @__PURE__ */ new Map(), f = (t & Mr) !== 0;
  if (f) {
    var u = e;
    l = u.appendChild(vt());
  }
  var c = null, p = _a(() => {
    var j = n();
    return Ar(j) ? j : j == null ? [] : Sn(j);
  }), d, y = /* @__PURE__ */ new Map(), b = true;
  function O(j) {
    T.effect.f & Re || (T.pending.delete(j), T.fallback = c, Ga(T, d, l, t, s), c !== null && (d.length === 0 ? c.f & Ye ? (c.f ^= Ye, Qt(c, null, l)) : ar(c) : Mt(c, () => {
      c = null;
    })));
  }
  function g(j) {
    T.pending.delete(j);
  }
  var C = Mn(() => {
    d = i(p);
    for (var j = d.length, z = /* @__PURE__ */ new Set(), V = W, R = Kr(), q = 0; q < j; q += 1) {
      var G = d[q], Q = s(G, q), D = b ? null : o.get(Q);
      D ? (D.v && Vt(D.v, G), D.i && Vt(D.i, q), R && V.unskip_effect(D.e)) : (D = Ka(o, b ? l : mr ??= vt(), G, Q, q, r, t, n), b || (D.e.f |= Ye), o.set(Q, D)), z.add(Q);
    }
    if (j === 0 && a && !c && (b ? c = je(() => a(l)) : (c = je(() => a(mr ??= vt())), c.f |= Ye)), j > z.size && Ls(), !b) if (y.set(V, z), R) {
      for (const [ee, E] of o) z.has(ee) || V.skip_effect(E.e);
      V.oncommit(O), V.ondiscard(g);
    } else O(V);
    i(p);
  }), T = { effect: C, items: o, pending: y, outrogroups: null, fallback: c };
  b = false;
}
function Jt(e) {
  for (; e !== null && !(e.f & ze); ) e = e.next;
  return e;
}
function Ga(e, t, n, s, r) {
  var a = (s & Ks) !== 0, l = t.length, o = e.items, f = Jt(e.effect.first), u, c = null, p, d = [], y = [], b, O, g, C;
  if (a) for (C = 0; C < l; C += 1) b = t[C], O = r(b, C), g = o.get(O).e, g.f & Ye || (g.nodes?.a?.measure(), (p ??= /* @__PURE__ */ new Set()).add(g));
  for (C = 0; C < l; C += 1) {
    if (b = t[C], O = r(b, C), g = o.get(O).e, e.outrogroups !== null) for (const D of e.outrogroups) D.pending.delete(g), D.done.delete(g);
    if (g.f & me && (ar(g), a && (g.nodes?.a?.unfix(), (p ??= /* @__PURE__ */ new Set()).delete(g))), g.f & Ye) if (g.f ^= Ye, g === f) Qt(g, null, n);
    else {
      var T = c ? c.next : f;
      g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), it(e, c, g), it(e, g, T), Qt(g, T, n), c = g, d = [], y = [], f = Jt(c.next);
      continue;
    }
    if (g !== f) {
      if (u !== void 0 && u.has(g)) {
        if (d.length < y.length) {
          var j = y[0], z;
          c = j.prev;
          var V = d[0], R = d[d.length - 1];
          for (z = 0; z < d.length; z += 1) Qt(d[z], j, n);
          for (z = 0; z < y.length; z += 1) u.delete(y[z]);
          it(e, V.prev, R.next), it(e, c, V), it(e, R, j), f = j, c = R, C -= 1, d = [], y = [];
        } else u.delete(g), Qt(g, f, n), it(e, g.prev, g.next), it(e, g, c === null ? e.effect.first : c.next), it(e, c, g), c = g;
        continue;
      }
      for (d = [], y = []; f !== null && f !== g; ) (u ??= /* @__PURE__ */ new Set()).add(f), y.push(f), f = Jt(f.next);
      if (f === null) continue;
    }
    g.f & Ye || d.push(g), c = g, f = Jt(g.next);
  }
  if (e.outrogroups !== null) {
    for (const D of e.outrogroups) D.pending.size === 0 && (Gn(e, Sn(D.done)), e.outrogroups?.delete(D));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || u !== void 0) {
    var q = [];
    if (u !== void 0) for (g of u) g.f & me || q.push(g);
    for (; f !== null; ) !(f.f & me) && f !== e.fallback && q.push(f), f = Jt(f.next);
    var G = q.length;
    if (G > 0) {
      var Q = s & Mr && l === 0 ? n : null;
      if (a) {
        for (C = 0; C < G; C += 1) q[C].nodes?.a?.measure();
        for (C = 0; C < G; C += 1) q[C].nodes?.a?.fix();
      }
      Ya(e, q, Q);
    }
  }
  a && ut(() => {
    if (p !== void 0) for (g of p) g.nodes?.a?.apply();
  });
}
function Ka(e, t, n, s, r, a, l, o) {
  var f = l & Ys ? l & Xs ? jt(n) : ga(n, false, false) : null, u = l & Gs ? jt(r) : null;
  return { v: f, i: u, e: je(() => (a(t, f ?? n, u ?? r, o), () => {
    e.delete(s);
  })) };
}
function Qt(e, t, n) {
  if (e.nodes) for (var s = e.nodes.start, r = e.nodes.end, a = t && !(t.f & Ye) ? t.nodes.start : n; s !== null; ) {
    var l = cn(s);
    if (a.before(s), s === r) return;
    s = l;
  }
}
function it(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const br = [...` 	
\r\f\xA0\v\uFEFF`];
function Xa(e, t, n) {
  var s = e == null ? "" : "" + e;
  if (n) {
    for (var r of Object.keys(n)) if (n[r]) s = s ? s + " " + r : r;
    else if (s.length) for (var a = r.length, l = 0; (l = s.indexOf(r, l)) >= 0; ) {
      var o = l + a;
      (l === 0 || br.includes(s[l - 1])) && (o === s.length || br.includes(s[o])) ? s = (l === 0 ? "" : s.substring(0, l)) + s.substring(o + 1) : l = o;
    }
  }
  return s === "" ? null : s;
}
function Ja(e, t) {
  return e == null ? null : String(e);
}
function kt(e, t, n, s, r, a) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var o = Xa(n, s, a);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (a && r !== a) for (var f in a) {
    var u = !!a[f];
    (r == null || u !== !!r[f]) && e.classList.toggle(f, u);
  }
  return a;
}
function Pt(e, t, n, s) {
  var r = e.__style;
  if (r !== t) {
    var a = Ja(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return s;
}
const Za = Symbol("is custom element"), Qa = Symbol("is html");
function st(e, t, n, s) {
  var r = $a(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[Ns] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ei(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function $a(e) {
  return e.__attributes ??= { [Za]: e.nodeName.includes("-"), [Qa]: e.namespaceURI === Or };
}
var yr = /* @__PURE__ */ new Map();
function ei(e) {
  var t = e.getAttribute("is") || e.nodeName, n = yr.get(t);
  if (n) return n;
  yr.set(t, n = []);
  for (var s, r = e, a = Element.prototype; a !== r; ) {
    s = Ts(r);
    for (var l in s) s[l].set && n.push(l);
    r = Sr(r);
  }
  return n;
}
function us(e, t, n = t) {
  var s = /* @__PURE__ */ new WeakSet();
  Aa(e, "input", async (r) => {
    var a = r ? e.defaultValue : e.value;
    if (a = Rn(e) ? Cn(a) : a, n(a), W !== null && s.add(W), await Ca(), a !== (a = t())) {
      var l = e.selectionStart, o = e.selectionEnd, f = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var u = e.value.length;
        l === o && o === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(o, u));
      }
    }
  }), lr(t) == null && e.value && (n(Rn(e) ? Cn(e.value) : e.value), W !== null && s.add(W)), rr(() => {
    var r = t();
    if (e === document.activeElement) {
      var a = W;
      if (s.has(a)) return;
    }
    Rn(e) && r === Cn(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function Rn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Cn(e) {
  return e === "" ? null : +e;
}
function wr(e, t) {
  return e === t || e?.[gn] === t;
}
function Kn(e = {}, t, n, s) {
  var r = Ae.r, a = K;
  return Ma(() => {
    var l, o;
    return rr(() => {
      l = o, o = [], lr(() => {
        e !== n(...o) && (t(e, ...o), l && wr(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let f = a;
      for (; f !== r && f.parent !== null && f.parent.f & Un; ) f = f.parent;
      const u = () => {
        o && wr(n(...o), e) && t(null, ...o);
      }, c = f.teardown;
      f.teardown = () => {
        u(), c?.();
      };
    };
  }), e;
}
function ti(e, t, n, s) {
  var r = s, a = true, l = () => (a && (a = false, r = s), r), o;
  o = e[t], o === void 0 && s !== void 0 && (o = l());
  var f;
  return f = () => {
    var u = e[t];
    return u === void 0 ? l() : (a = true, u);
  }, f;
}
const ni = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ni);
function ri() {
  U._start();
}
function si(e) {
  try {
    const r = U.__wbindgen_add_to_stack_pointer(-16), a = Gt(e, U.__wbindgen_export), l = Ve;
    U.decode_wav(r, a, l);
    var t = le().getInt32(r + 4 * 0, true), n = le().getInt32(r + 4 * 1, true), s = le().getInt32(r + 4 * 2, true);
    if (s) throw We(n);
    return We(t);
  } finally {
    U.__wbindgen_add_to_stack_pointer(16);
  }
}
function ai(e) {
  let t, n;
  try {
    const a = U.__wbindgen_add_to_stack_pointer(-16), l = Gt(e, U.__wbindgen_export), o = Ve;
    U.detect_format(a, l, o);
    var s = le().getInt32(a + 4 * 0, true), r = le().getInt32(a + 4 * 1, true);
    return t = s, n = r, en(s, r);
  } finally {
    U.__wbindgen_add_to_stack_pointer(16), U.__wbindgen_export3(t, n, 1);
  }
}
function ii(e, t) {
  try {
    const a = U.__wbindgen_add_to_stack_pointer(-16), l = Gt(e, U.__wbindgen_export), o = Ve;
    U.entropy_blocks(a, l, o, t);
    var n = le().getInt32(a + 4 * 0, true), s = le().getInt32(a + 4 * 1, true), r = ci(n, s).slice();
    return U.__wbindgen_export3(n, s * 4, 4), r;
  } finally {
    U.__wbindgen_add_to_stack_pointer(16);
  }
}
function li(e, t) {
  try {
    const a = U.__wbindgen_add_to_stack_pointer(-16), l = Gt(e, U.__wbindgen_export), o = Ve;
    U.extract_strings(a, l, o, t);
    var n = le().getInt32(a + 4 * 0, true), s = le().getInt32(a + 4 * 1, true), r = le().getInt32(a + 4 * 2, true);
    if (r) throw We(s);
    return We(n);
  } finally {
    U.__wbindgen_add_to_stack_pointer(16);
  }
}
function oi(e, t, n) {
  try {
    const l = U.__wbindgen_add_to_stack_pointer(-16), o = Gt(e, U.__wbindgen_export), f = Ve;
    U.hex_rows(l, o, f, t, n);
    var s = le().getInt32(l + 4 * 0, true), r = le().getInt32(l + 4 * 1, true), a = vi(s, r).slice();
    return U.__wbindgen_export3(s, r * 4, 4), a;
  } finally {
    U.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e) {
  try {
    const r = U.__wbindgen_add_to_stack_pointer(-16), a = Gt(e, U.__wbindgen_export), l = Ve;
    U.parse_elf(r, a, l);
    var t = le().getInt32(r + 4 * 0, true), n = le().getInt32(r + 4 * 1, true), s = le().getInt32(r + 4 * 2, true);
    if (s) throw We(n);
    return We(t);
  } finally {
    U.__wbindgen_add_to_stack_pointer(16);
  }
}
function cs() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const s = Error(en(t, n));
    return lt(s);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const s = String(Dt(n)), r = xr(s, U.__wbindgen_export, U.__wbindgen_export2), a = Ve;
    le().setInt32(t + 4, a, true), le().setInt32(t + 0, r, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(en(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let s, r;
    try {
      s = t, r = n, console.error(en(t, n));
    } finally {
      U.__wbindgen_export3(s, r, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return lt(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return lt(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return lt(t);
  }, __wbg_set_6be42768c690e380: function(t, n, s) {
    Dt(t)[We(n)] = We(s);
  }, __wbg_set_78ea6a19f4818587: function(t, n, s) {
    Dt(t)[n >>> 0] = We(s);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const s = Dt(n).stack, r = xr(s, U.__wbindgen_export, U.__wbindgen_export2), a = Ve;
    le().setInt32(t + 4, a, true), le().setInt32(t + 0, r, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return lt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const s = en(t, n);
    return lt(s);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return lt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = Dt(t);
    return lt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    We(t);
  } } };
}
function lt(e) {
  ln === tt.length && tt.push(tt.length + 1);
  const t = ln;
  return ln = tt[t], tt[t] = e, t;
}
function ui(e) {
  e < 1028 || (tt[e] = ln, ln = e);
}
function ci(e, t) {
  return e = e >>> 0, di().subarray(e / 4, e / 4 + t);
}
function vi(e, t) {
  e = e >>> 0;
  const n = le(), s = [];
  for (let r = e; r < e + 4 * t; r += 4) s.push(We(n.getUint32(r, true)));
  return s;
}
let Et = null;
function le() {
  return (Et === null || Et.buffer.detached === true || Et.buffer.detached === void 0 && Et.buffer !== U.memory.buffer) && (Et = new DataView(U.memory.buffer)), Et;
}
let $t = null;
function di() {
  return ($t === null || $t.byteLength === 0) && ($t = new Float32Array(U.memory.buffer)), $t;
}
function en(e, t) {
  return pi(e >>> 0, t);
}
let tn = null;
function an() {
  return (tn === null || tn.byteLength === 0) && (tn = new Uint8Array(U.memory.buffer)), tn;
}
function Dt(e) {
  return tt[e];
}
let tt = new Array(1024).fill(void 0);
tt.push(void 0, null, true, false);
let ln = tt.length;
function Gt(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return an().set(e, n / 1), Ve = e.length, n;
}
function xr(e, t, n) {
  if (n === void 0) {
    const o = on.encode(e), f = t(o.length, 1) >>> 0;
    return an().subarray(f, f + o.length).set(o), Ve = o.length, f;
  }
  let s = e.length, r = t(s, 1) >>> 0;
  const a = an();
  let l = 0;
  for (; l < s; l++) {
    const o = e.charCodeAt(l);
    if (o > 127) break;
    a[r + l] = o;
  }
  if (l !== s) {
    l !== 0 && (e = e.slice(l)), r = n(r, s, s = l + e.length * 3, 1) >>> 0;
    const o = an().subarray(r + l, r + s), f = on.encodeInto(e, o);
    l += f.written, r = n(r, s, l, 1) >>> 0;
  }
  return Ve = l, r;
}
function We(e) {
  const t = Dt(e);
  return ui(e), t;
}
let yn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
yn.decode();
const _i = 2146435072;
let Nn = 0;
function pi(e, t) {
  return Nn += t, Nn >= _i && (yn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), yn.decode(), Nn = t), yn.decode(an().subarray(e, e + t));
}
const on = new TextEncoder();
"encodeInto" in on || (on.encodeInto = function(e, t) {
  const n = on.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let Ve = 0, U;
function vs(e, t) {
  return U = e.exports, Et = null, $t = null, tn = null, U.__wbindgen_start(), U;
}
async function hi(e, t) {
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
function gi(e) {
  if (U !== void 0) return U;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = cs();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return vs(n);
}
async function ds(e) {
  if (U !== void 0) return U;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-Cml4fO_b.wasm", import.meta.url).href, import.meta.url));
  const t = cs();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: s } = await hi(await e, t);
  return vs(n);
}
const mi = Object.freeze(Object.defineProperty({ __proto__: null, _start: ri, decode_wav: si, default: ds, detect_format: ai, entropy_blocks: ii, extract_strings: li, hex_rows: oi, initSync: gi, parse_elf: fi }, Symbol.toStringTag, { value: "Module" }));
let Dn = null;
function On() {
  return Dn || (Dn = ds()), Dn.then(() => mi);
}
const bi = "scry-theme";
function _s() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function yi() {
  const e = _s() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(bi, e);
  } catch {
  }
  return e;
}
const Xn = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Ln = 65536, qn = Xn.length * 4;
function ps() {
  const n = 84 + qn, s = new ArrayBuffer(n), r = new DataView(s), a = new Uint8Array(s);
  a[0] = 127, a[1] = 69, a[2] = 76, a[3] = 70, a[4] = 1, a[5] = 1, a[6] = 1, r.setUint16(16, 2, true), r.setUint16(18, 243, true), r.setUint32(20, 1, true), r.setUint32(24, Ln, true), r.setUint32(28, 52, true), r.setUint32(32, 0, true), r.setUint32(36, 0, true), r.setUint16(40, 52, true), r.setUint16(42, 32, true), r.setUint16(44, 1, true), r.setUint16(46, 0, true), r.setUint16(48, 0, true), r.setUint16(50, 0, true), r.setUint32(52, 1, true), r.setUint32(56, 84, true), r.setUint32(60, Ln, true), r.setUint32(64, Ln, true), r.setUint32(68, qn, true), r.setUint32(72, qn, true), r.setUint32(76, 5, true), r.setUint32(80, 4096, true);
  for (let l = 0; l < Xn.length; l++) r.setUint32(84 + l * 4, Xn[l], true);
  return new Uint8Array(s);
}
const hs = "demo-rv32-spi-i2c.elf", Er = 64 * 1024 * 1024;
function Jn(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function gs(e) {
  if (!e) throw new Error("no file");
  if (e.size > Er) throw new Error(`file too large (${Jn(e.size)} > ${Jn(Er)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var wi = I('<span class="bar svelte-1i6c60u"></span>'), xi = I('<span class="bar shimmer svelte-1i6c60u"></span>'), Ei = I('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Ai = I('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Si = I('<p class="loading svelte-1i6c60u"> </p>'), ki = I('<p class="err svelte-1i6c60u"> </p>'), Ti = I('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Mi(e, t) {
  ht(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav)$/;
  let s = L(false), r = L(""), a = L(Ge([])), l = L(""), o = L(Ge({}));
  async function f(E) {
    h(r, "");
    try {
      const N = await gs(E);
      t.onfile?.(N);
    } catch (N) {
      h(r, N.message || String(N), true);
    }
  }
  function u(E) {
    E.preventDefault(), h(s, false);
    const N = E.dataTransfer?.files?.[0];
    N && f(N);
  }
  function c(E) {
    E.preventDefault(), h(s, true);
  }
  function p() {
    h(s, false);
  }
  function d(E) {
    const N = E.target.files?.[0];
    N && f(N);
  }
  async function y(E) {
    if (!n.test(E)) {
      h(r, `sample blocked: bad name "${E}"`);
      return;
    }
    h(r, ""), h(l, `fetching ${E}\u2026`);
    try {
      const N = await fetch(`../v1/samples/${encodeURIComponent(E)}`);
      if (!N.ok) {
        h(r, `fetch failed: ${N.status}`), h(l, "");
        return;
      }
      h(l, `reading ${E}\u2026`);
      const H = new Uint8Array(await N.arrayBuffer());
      h(l, ""), t.onfile?.({ name: E, bytes: H });
    } catch (N) {
      h(r, String(N), true), h(l, "");
    }
  }
  function b() {
    h(r, ""), t.onfile?.({ name: hs, bytes: ps() });
  }
  rt(() => {
    let E = false;
    return (async () => {
      try {
        const N = await fetch("../v1/samples/manifest.json");
        if (!N.ok) return;
        const H = await N.json();
        if (E || !Array.isArray(H)) return;
        h(a, H, true);
        const ne = await On();
        if (E) return;
        await Promise.all(H.map(async (m) => {
          if (n.test(m.file)) try {
            const M = await fetch(`../v1/samples/${encodeURIComponent(m.file)}`);
            if (!M.ok) return;
            const k = new Uint8Array(await M.arrayBuffer());
            if (E) return;
            const w = Math.max(1, Math.ceil(k.length / 12)), A = ne.entropy_blocks(k, w);
            h(o, { ...i(o), [m.file]: Array.from(A) }, true);
          } catch {
          }
        }));
      } catch {
      }
    })(), () => {
      E = true;
    };
  });
  var O = Ti(), g = v(O);
  let C;
  var T = _(v(g), 4), j = v(T), z = v(j), V = _(j, 2), R = _(T, 2);
  {
    var q = (E) => {
      var N = Ai(), H = _(v(N), 2);
      Pe(H, 21, () => i(a), qe, (M, k) => {
        var w = Ei(), A = v(w), B = v(A), $ = _(A, 2), ae = v($);
        {
          var ue = (oe) => {
            var Z = An(), de = nt(Z);
            Pe(de, 17, () => i(o)[i(k).file], qe, (ke, Ze) => {
              var De = wi();
              X((ce) => Pt(De, `height: ${ce ?? ""}px`), [() => Math.max(2, i(Ze) * 14)]), F(ke, De);
            }), F(oe, Z);
          }, Se = (oe) => {
            var Z = An(), de = nt(Z);
            Pe(de, 16, () => Array(12), qe, (ke, Ze, De) => {
              var ce = xi();
              Pt(ce, `animation-delay: ${De * 40}ms`), F(ke, ce);
            }), F(oe, Z);
          };
          te(ae, (oe) => {
            i(o)[i(k).file] ? oe(ue) : oe(Se, -1);
          });
        }
        X(() => {
          st(w, "title", i(k).insns > 0 ? `${i(k).desc} \u2014 ${i(k).insns} instructions` : i(k).desc), x(B, i(k).file);
        }), ie("click", w, () => y(i(k).file)), F(M, w);
      });
      var ne = _(H, 2), m = v(ne);
      X((M) => x(m, M), [() => i(a).map((M) => `${M.file} \u2014 ${M.desc}`).join("  \xB7  ")]), F(E, N);
    };
    te(R, (E) => {
      i(a).length && E(q);
    });
  }
  var G = _(R, 2);
  {
    var Q = (E) => {
      var N = Si(), H = v(N);
      X(() => x(H, i(l))), F(E, N);
    };
    te(G, (E) => {
      i(l) && E(Q);
    });
  }
  var D = _(G, 2);
  {
    var ee = (E) => {
      var N = ki(), H = v(N);
      X(() => x(H, i(r))), F(E, N);
    };
    te(D, (E) => {
      i(r) && E(ee);
    });
  }
  X(() => C = kt(g, 1, "zone svelte-1i6c60u", null, C, { over: i(s) })), qt("drop", g, u), qt("dragover", g, c), qt("dragleave", g, p), ie("change", z, d), ie("click", V, b), F(e, O), gt();
}
dn(["change", "click"]);
var Oi = I('<span class="ct svelte-etynpr"> </span>'), Fi = I('<span class="ct svelte-etynpr"> </span>'), ji = I('<span class="ct svelte-etynpr"> </span>'), Ii = I('<span class="ct svelte-etynpr"> </span>'), Ri = I("<button> <!> <!> <!> <!></button>"), Ci = I('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), Ni = I('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Di = I('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Li = I('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), qi = I('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Pi = I('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Ui = I('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Bi = I('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Wi = I('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), zi = I('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Vi(e, t) {
  ht(t, true);
  let n = L("summary");
  const s = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let r = L(""), a = ct(() => {
    if (!t.strings) return [];
    const T = i(r).trim().toLowerCase();
    return T ? t.strings.filter((j) => j.text.toLowerCase().includes(T)) : t.strings;
  });
  const l = 80, o = ct(() => t.report ? Math.max(1, ...t.report.sections.map((T) => Number(T.size) || 0)) : 1);
  function f(T) {
    return "0x" + Number(T).toString(16).toUpperCase().padStart(8, "0");
  }
  var u = zi(), c = v(u);
  Pe(c, 21, () => s, qe, (T, j) => {
    var z = ct(() => Is(i(j), 2));
    let V = () => i(z)[0], R = () => i(z)[1];
    var q = Ri();
    let G;
    var Q = v(q), D = _(Q);
    {
      var ee = (k) => {
        var w = Oi(), A = v(w);
        X(() => x(A, t.report.sections.length)), F(k, w);
      };
      te(D, (k) => {
        V() === "sections" && k(ee);
      });
    }
    var E = _(D, 2);
    {
      var N = (k) => {
        var w = Fi(), A = v(w);
        X(() => x(A, t.report.segments.length)), F(k, w);
      };
      te(E, (k) => {
        V() === "segments" && k(N);
      });
    }
    var H = _(E, 2);
    {
      var ne = (k) => {
        var w = ji(), A = v(w);
        X(() => x(A, t.report.symbols.length)), F(k, w);
      };
      te(H, (k) => {
        V() === "symbols" && k(ne);
      });
    }
    var m = _(H, 2);
    {
      var M = (k) => {
        var w = Ii(), A = v(w);
        X(() => x(A, t.strings.length)), F(k, w);
      };
      te(m, (k) => {
        V() === "strings" && t.strings && k(M);
      });
    }
    X(() => {
      G = kt(q, 1, "tab svelte-etynpr", null, G, { active: i(n) === V() }), x(Q, `${R() ?? ""} `);
    }), ie("click", q, () => h(n, V(), true)), F(T, q);
  });
  var p = _(c, 2), d = v(p);
  {
    var y = (T) => {
      var j = Ci(), z = _(v(j), 2), V = v(z), R = _(z, 4), q = v(R), G = _(R, 4), Q = v(G), D = _(G, 4), ee = v(D), E = _(D, 4), N = v(E), H = _(E, 4), ne = v(H), m = _(H, 4), M = v(m), k = _(m, 4), w = v(k), A = _(k, 4), B = v(A);
      X(() => {
        x(V, t.report.summary.class), x(q, t.report.summary.data), x(Q, t.report.summary.osabi), x(ee, t.report.summary.kind), x(N, t.report.summary.machine), x(ne, t.report.summary.entry), x(M, t.report.summary.n_sections), x(w, t.report.summary.n_segments), x(B, t.report.summary.n_symbols);
      }), F(T, j);
    }, b = (T) => {
      var j = Di(), z = _(v(j));
      Pe(z, 21, () => t.report.sections, qe, (V, R) => {
        var q = Ni(), G = v(q), Q = v(G), D = _(G), ee = v(D), E = _(D), N = v(E), H = _(E), ne = v(H), m = _(H), M = v(m), k = _(m), w = v(k), A = _(k), B = v(A), $ = _(A), ae = v($);
        X((ue) => {
          st(q, "title", `Jump to offset ${i(R).offset ?? ""} in HEX`), x(Q, i(R).idx), x(ee, i(R).name || "\u2014"), x(N, i(R).kind), x(ne, i(R).addr), x(M, i(R).offset), x(w, i(R).size), x(B, i(R).flags), Pt(ae, `width: ${ue ?? ""}px`);
        }, [() => Math.max(1, Number(i(R).size) / i(o) * l)]), ie("click", q, () => t.onJumpToOffset?.(parseInt(i(R).offset, 16))), F(V, q);
      }), F(T, j);
    }, O = (T) => {
      var j = qi(), z = _(v(j));
      Pe(z, 21, () => t.report.segments, qe, (V, R) => {
        var q = Li(), G = v(q), Q = v(G), D = _(G), ee = v(D), E = _(D), N = v(E), H = _(E), ne = v(H), m = _(H), M = v(m), k = _(m), w = v(k), A = _(k), B = v(A);
        X(() => {
          st(q, "title", `Jump to offset ${i(R).offset ?? ""} in HEX`), x(Q, i(R).idx), x(ee, i(R).kind), x(N, i(R).vaddr), x(ne, i(R).offset), x(M, i(R).filesz), x(w, i(R).memsz), x(B, i(R).flags);
        }), ie("click", q, () => t.onJumpToOffset?.(parseInt(i(R).offset, 16))), F(V, q);
      }), F(T, j);
    }, g = (T) => {
      var j = Ui(), z = _(v(j));
      Pe(z, 21, () => t.report.symbols, qe, (V, R) => {
        var q = Pi(), G = v(q), Q = v(G), D = _(G), ee = v(D), E = _(D), N = v(E), H = _(E), ne = v(H), m = _(H), M = v(m);
        X(() => {
          x(Q, i(R).name), x(ee, i(R).bind), x(N, i(R).kind), x(ne, i(R).value), x(M, i(R).size);
        }), F(V, q);
      }), F(T, j);
    }, C = (T) => {
      var j = Wi(), z = nt(j), V = v(z), R = _(V, 2), q = v(R), G = _(z, 2), Q = _(v(G));
      Pe(Q, 21, () => i(a), qe, (D, ee) => {
        var E = Bi(), N = v(E), H = v(N), ne = _(N), m = v(ne);
        X((M, k) => {
          st(E, "title", `Jump to offset ${M ?? ""} in HEX`), x(H, k), x(m, i(ee).text);
        }, [() => f(i(ee).offset), () => f(i(ee).offset)]), ie("click", E, () => t.onJumpToOffset?.(i(ee).offset)), F(D, E);
      }), X(() => x(q, `${i(a).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), us(V, () => i(r), (D) => h(r, D)), F(T, j);
    };
    te(d, (T) => {
      i(n) === "summary" ? T(y) : i(n) === "sections" ? T(b, 1) : i(n) === "segments" ? T(O, 2) : i(n) === "symbols" ? T(g, 3) : i(n) === "strings" && T(C, 4);
    });
  }
  F(e, u), gt();
}
dn(["click"]);
var Hi = I('<span class="strip-col svelte-14j5q0g"></span>'), Yi = I('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), Gi = I('<span role="presentation"> </span>'), Ki = I('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <!> <pre class="grid svelte-14j5q0g"></pre></div>');
function Xi(e, t) {
  ht(t, true);
  let n = ti(t, "jumpTo", 3, null), s = L(0);
  const r = 16 * 32;
  let a = L(Ge([])), l = L(null), o = L(Ge([])), f = L(0), u = L(""), c = L(null), p = L(0), d = L(0), y = L(null);
  const b = 400;
  rt(() => {
    let w = false;
    return On().then((A) => {
      if (w) return;
      h(l, A, true), h(f, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), h(o, t.bytes ? i(l).entropy_blocks(t.bytes, i(f)) : [], true), g();
    }), () => {
      w = true;
    };
  }), rt(() => {
    if (n() == null) return;
    const w = Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Number(n()) | 0)), A = Math.floor(w / 16) * 16, B = Math.floor(A / r) * r;
    h(s, B), g(), h(c, A), h(p, performance.now() + b), ba(d), requestAnimationFrame(() => {
      const $ = i(O);
      if (!$) return;
      const ae = $.querySelector(`[data-row-off="${A}"]`);
      if (!ae) return;
      const ue = $.getBoundingClientRect(), oe = ae.getBoundingClientRect().top - ue.top - ue.height / 3;
      $.scrollTo({ top: $.scrollTop + oe, behavior: "smooth" });
    });
  }), rt(() => {
    if (i(d) === 0) return;
    let w = 0;
    const A = () => {
      if (performance.now() >= i(p)) {
        h(c, null);
        return;
      }
      h(d, i(d) + 1 & 4095), w = requestAnimationFrame(A);
    };
    return w = requestAnimationFrame(A), () => cancelAnimationFrame(w);
  });
  let O = L(null);
  function g() {
    !i(l) || !t.bytes || h(a, i(l).hex_rows(t.bytes, i(s), r), true);
  }
  function C(w) {
    h(s, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, i(s) + w)), true), h(s, Math.floor(i(s) / 16) * 16), g();
  }
  function T(w) {
    w.preventDefault();
    let A = i(u).trim();
    if (!A) return;
    (A.startsWith("0x") || A.startsWith("0X")) && (A = A.slice(2));
    const B = parseInt(A, 16);
    Number.isFinite(B) && (h(s, Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, B)), true), h(s, Math.floor(i(s) / 16) * 16), g());
  }
  function j(w) {
    if (!i(o).length || !t.bytes) return;
    const B = w.currentTarget.getBoundingClientRect(), $ = Math.max(0, Math.min(1, (w.clientX - B.left) / B.width)), ae = Math.floor($ * t.bytes.length);
    h(s, Math.floor(ae / 16) * 16), g();
  }
  let z = ct(() => t.bytes && t.bytes.length ? i(s) / t.bytes.length : 0);
  function V(w, A) {
    if (i(c) == null || w !== i(c)) return 0;
    const B = i(p) - performance.now();
    return B <= 0 ? 0 : B / b;
  }
  let R = ct(() => {
    const w = [];
    for (let A = 0; A < i(a).length; A++) w.push({ off: i(s) + A * 16, text: i(a)[A] });
    return w;
  });
  var q = Ki(), G = v(q), Q = _(v(G), 2), D = v(Q), ee = _(D, 2), E = _(ee, 2), N = _(v(E), 2), H = _(E, 2), ne = _(H, 2), m = _(G, 2);
  {
    var M = (w) => {
      var A = Yi(), B = _(v(A), 2), $ = v(B);
      Pe($, 17, () => i(o), qe, (oe, Z) => {
        var de = Hi();
        X((ke) => Pt(de, `height: ${ke ?? ""}%; opacity: ${0.35 + i(Z) * 0.65}`), [() => Math.max(2, i(Z) * 100)]), F(oe, de);
      });
      var ae = _($, 2), ue = _(B, 2), Se = v(ue);
      X((oe) => {
        Pt(ae, `left: ${i(z) * 100}%`), x(Se, `${oe ?? ""} B / col`);
      }, [() => i(f).toLocaleString()]), ie("click", B, j), F(w, A);
    };
    te(m, (w) => {
      i(o).length > 1 && w(M);
    });
  }
  var k = _(m, 2);
  Pe(k, 21, () => i(R), qe, (w, A, B) => {
    var $ = Gi();
    let ae;
    var ue = v($);
    X((Se) => {
      ae = kt($, 1, "hex-row svelte-14j5q0g", null, ae, { hover: i(y) === B, flash: i(A).off === i(c) }), st($, "data-row-off", i(A).off), Pt($, Se), x(ue, `${i(A).text ?? ""}
`);
    }, [() => i(A).off === i(c) ? `--flash-a: ${V(i(A).off, i(d))}` : ""]), qt("mouseenter", $, () => h(y, B, true)), qt("mouseleave", $, () => i(y) === B && h(y, null)), F(w, $);
  }), Kn(k, (w) => h(O, w), () => i(O)), X((w) => st(N, "placeholder", w), [() => i(s).toString(16).padStart(8, "0").toUpperCase()]), ie("click", D, () => C(-r)), ie("click", ee, () => C(-16)), qt("submit", E, T), us(N, () => i(u), (w) => h(u, w)), ie("click", H, () => C(16)), ie("click", ne, () => C(r)), F(e, q), gt();
}
dn(["click"]);
var Ji = I('<span class="w-meta svelte-59bj26"> </span>'), Zi = I('<div class="w-empty svelte-59bj26"> </div>'), Qi = I('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), $i = I('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), el = I('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), tl = I('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function nl(e, t) {
  ht(t, true);
  let n = L(null), s = L(""), r = L(null), a = L(null), l = null, o = null, f = null, u = 0, c = 0, p = 0, d = L("0:00 / 0:00");
  function y(m) {
    return "0x" + (Number(m) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function b(m) {
    return m < 1024 ? `${m} B` : m < 1024 * 1024 ? `${(m / 1024).toFixed(1)} KiB` : `${(m / 1024 / 1024).toFixed(2)} MiB`;
  }
  function O(m) {
    if (m < 1) return `${(m * 1e3).toFixed(0)} ms`;
    if (m < 60) return `${m.toFixed(2)} s`;
    const M = Math.floor(m / 60), k = m - M * 60;
    return `${M}m ${k.toFixed(1)}s`;
  }
  function g(m) {
    return m.replace(/\s+$/g, "");
  }
  async function C() {
    if (h(s, ""), !t.bytes) {
      h(n, null);
      return;
    }
    try {
      const M = (await On()).decode_wav(t.bytes);
      h(n, M, true), f = null, h(d, `0:00 / ${O(M.duration)}`), requestAnimationFrame(() => T({ playhead: 0 }));
    } catch (m) {
      h(n, null), h(s, String(m?.message || m), true);
    }
  }
  function T({ playhead: m = null } = {}) {
    if (!i(r) || !i(n)) return;
    const M = window.devicePixelRatio || 1, k = i(r).getBoundingClientRect(), w = Math.max(1, Math.floor(k.width * M)), A = Math.max(1, Math.floor(k.height * M));
    i(r).width = w, i(r).height = A;
    const B = getComputedStyle(i(r)), $ = B.getPropertyValue("--w-bg").trim() || "#000", ae = B.getPropertyValue("--w-grid").trim() || "#333", ue = B.getPropertyValue("--w-peak").trim() || "#888", Se = B.getPropertyValue("--w-rms").trim() || "#bcd", oe = B.getPropertyValue("--w-accent").trim() || "#9fe3c7", Z = i(r).getContext("2d");
    Z.fillStyle = $, Z.fillRect(0, 0, w, A), Z.strokeStyle = ae, Z.lineWidth = 1;
    const de = A / 2;
    for (const ce of [0.25, 0.5, 0.75]) {
      const Te = Math.floor(A * ce) + 0.5;
      Z.beginPath(), Z.moveTo(0, Te), Z.lineTo(w, Te), Z.stroke();
    }
    const ke = i(n).envelope, Ze = ke.length, De = w / Ze;
    for (let ce = 0; ce < Ze; ce++) {
      const Te = ke[ce], mt = Math.floor(ce * De), bt = Math.max(1, Math.floor(De) - 1), Rt = de - Te.max * de, Ct = de - Te.min * de;
      Z.fillStyle = ue, Z.fillRect(mt, Math.floor(Rt), bt, Math.max(1, Math.ceil(Ct - Rt)));
      const Nt = Te.rms * de;
      Z.fillStyle = Se, Z.fillRect(mt, Math.floor(de - Nt), bt, Math.max(1, Math.ceil(2 * Nt)));
    }
    if (m != null) {
      const ce = Math.floor(m * w);
      Z.strokeStyle = oe, Z.lineWidth = 2 * M, Z.beginPath(), Z.moveTo(ce, 0), Z.lineTo(ce, A), Z.stroke();
    }
  }
  function j() {
    if (!i(n)) return null;
    if (f) return f;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const m = i(n).samples instanceof Float32Array ? i(n).samples : new Float32Array(i(n).samples);
    return f = l.createBuffer(1, m.length, i(n).fmt.sample_rate), f.copyToChannel(m, 0), f;
  }
  function z() {
    if (!l || !o || !i(n)) {
      p = 0;
      return;
    }
    const m = c + (l.currentTime - u), M = i(n).duration, k = Math.max(0, Math.min(1, m / M));
    T({ playhead: k }), h(d, `${O(Math.min(m, M))} / ${O(M)}`), m < M ? p = requestAnimationFrame(z) : p = 0;
  }
  function V() {
    if (p && (cancelAnimationFrame(p), p = 0), o) {
      try {
        o.stop();
      } catch {
      }
      o.disconnect(), o = null;
    }
  }
  function R(m) {
    if (!i(n)) return;
    const M = j();
    M && (V(), o = l.createBufferSource(), o.buffer = M, o.connect(l.destination), o.onended = () => {
      p && cancelAnimationFrame(p), p = 0, T({ playhead: 0 }), h(d, `0:00 / ${O(i(n).duration)}`), o = null;
    }, l.state === "suspended" && l.resume(), c = Math.max(0, Math.min(i(n).duration - 1e-3, m)), u = l.currentTime, o.start(0, c), p = requestAnimationFrame(z));
  }
  function q(m) {
    if (!i(n)) return;
    const M = i(r).getBoundingClientRect(), k = (m.clientX - M.left) / M.width;
    R(k * i(n).duration);
  }
  rt(() => (C(), () => V())), rt(() => {
    if (!i(a)) return;
    const m = new ResizeObserver(() => i(n) && T({ playhead: 0 }));
    return m.observe(i(a)), () => m.disconnect();
  });
  var G = tl(), Q = v(G), D = _(v(Q), 2);
  {
    var ee = (m) => {
      var M = Ji(), k = v(M);
      X((w) => x(k, `${i(n).fmt.channels ?? ""}ch @ ${i(n).fmt.sample_rate ?? ""} Hz \xB7 ${i(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${w ?? ""}`), [() => O(i(n).duration)]), F(m, M);
    };
    te(D, (m) => {
      i(n) && m(ee);
    });
  }
  var E = _(Q, 2);
  {
    var N = (m) => {
      var M = Zi(), k = v(M);
      X(() => x(k, `Not a parseable WAV: ${i(s) ?? ""}`)), F(m, M);
    }, H = (m) => {
      var M = Qi();
      F(m, M);
    }, ne = (m) => {
      var M = el(), k = nt(M), w = v(k), A = v(w), B = v(A), $ = _(v(B)), ae = v($), ue = _(B, 2), Se = _(v(ue)), oe = v(Se), Z = _(ue, 2), de = _(v(Z)), ke = v(de), Ze = _(Z, 2), De = _(v(Ze)), ce = v(De), Te = _(A, 2), mt = v(Te), bt = _(v(mt)), Rt = v(bt), Ct = _(mt, 2), Nt = _(v(Ct)), S = v(Nt), P = _(Ct, 2), Y = _(v(P)), Me = v(Y), he = _(P, 2), Le = _(v(he)), be = v(Le), ye = _(Te, 2), re = v(ye), Oe = _(v(re)), yt = v(Oe), Kt = _(re, 2);
      Pe(Kt, 17, () => i(n).chunks.slice(0, 4), qe, (wt, Xt) => {
        var _n = $i(), pn = v(_n), ms = v(pn), bs = _(pn), ys = v(bs);
        X((ws, xs, Es) => {
          x(ms, ws), x(ys, `${xs ?? ""} @ ${Es ?? ""}`);
        }, [() => g(i(Xt).id), () => b(i(Xt).size), () => y(i(Xt).offset)]), F(wt, _n);
      });
      var He = _(k, 2), ge = v(He), Qe = _(ge, 2), Fn = _(Qe, 2), jn = v(Fn), or = _(He, 2), fr = v(or);
      Kn(fr, (wt) => h(r, wt), () => i(r)), Kn(or, (wt) => h(a, wt), () => i(a)), X((wt, Xt, _n, pn) => {
        x(ae, i(n).fmt.format === 1 ? "PCM (int)" : i(n).fmt.format === 3 ? "IEEE float" : `tag ${i(n).fmt.format}`), x(oe, i(n).fmt.channels), x(ke, `${i(n).fmt.sample_rate ?? ""} Hz`), x(ce, `${i(n).fmt.bits_per_sample ?? ""}-bit`), x(Rt, wt), x(S, Xt), x(Me, _n), x(be, `${pn ?? ""}/s`), x(yt, i(n).chunks.length), x(jn, i(d));
      }, [() => Number(i(n).total_frames).toLocaleString(), () => O(i(n).duration), () => b(i(n).data_len), () => b(i(n).fmt.byte_rate)]), ie("click", ge, () => R(0)), ie("click", Qe, () => {
        V(), T({ playhead: 0 }), h(d, `0:00 / ${O(i(n).duration)}`);
      }), ie("click", fr, q), F(m, M);
    };
    te(E, (m) => {
      i(s) ? m(N) : i(n) ? m(ne, -1) : m(H, 1);
    });
  }
  F(e, G), gt();
}
dn(["click"]);
var rl = I('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), sl = I('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), al = I('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), il = I('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function ll(e, t) {
  ht(t, true);
  var n = il(), s = v(n);
  {
    var r = (o) => {
      var f = rl();
      F(o, f);
    }, a = (o) => {
      var f = sl(), u = nt(f), c = _(v(u), 2), p = v(c), d = _(u, 2), y = _(v(d), 2), b = v(y), O = _(d, 2), g = _(v(O), 2), C = v(g);
      X((T, j) => {
        st(c, "title", t.file.name), x(p, t.file.name), x(b, T), x(C, j);
      }, [() => Jn(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), F(o, f);
    }, l = (o) => {
      var f = al();
      F(o, f);
    };
    te(s, (o) => {
      t.parsing ? o(r) : t.file ? o(a, 1) : o(l, -1);
    });
  }
  F(e, n), gt();
}
var ol = I('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function fl(e, t) {
  ht(t, true);
  let n = L(false), s = 0;
  function r(f) {
    const u = f.dataTransfer;
    if (!u) return false;
    const c = u.types;
    if (!c) return false;
    for (let p = 0; p < c.length; p++) if (c[p] === "Files") return true;
    return false;
  }
  rt(() => {
    function f(d) {
      r(d) && (d.preventDefault(), s++, h(n, true));
    }
    function u(d) {
      r(d) && (d.preventDefault(), d.dataTransfer && (d.dataTransfer.dropEffect = "copy"));
    }
    function c(d) {
      r(d) && (s = Math.max(0, s - 1), s === 0 && h(n, false));
    }
    async function p(d) {
      if (!r(d)) return;
      d.preventDefault(), s = 0, h(n, false);
      const y = d.dataTransfer?.files?.[0];
      if (y) try {
        const b = await gs(y);
        t.onfile?.(b);
      } catch (b) {
        t.onerror?.(b.message || String(b));
      }
    }
    return window.addEventListener("dragenter", f), window.addEventListener("dragover", u), window.addEventListener("dragleave", c), window.addEventListener("drop", p), () => {
      window.removeEventListener("dragenter", f), window.removeEventListener("dragover", u), window.removeEventListener("dragleave", c), window.removeEventListener("drop", p);
    };
  });
  var a = An(), l = nt(a);
  {
    var o = (f) => {
      var u = ol();
      F(f, u);
    };
    te(l, (f) => {
      i(n) && f(o);
    });
  }
  F(e, a), gt();
}
var ul = I('<span class="s-brand svelte-1n46o8q">scry</span>'), cl = I('<span class="s-badge entrance svelte-1n46o8q"> </span>'), vl = I('<span class="s-summary svelte-1n46o8q"> </span>'), dl = I('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), _l = I('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), pl = I('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), hl = I('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), gl = I('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), ml = I('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), bl = I('<p class="err svelte-1n46o8q"> </p>'), yl = I('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), wl = I("<!> <!>", 1), xl = I('<span class="s-hint svelte-1n46o8q"> </span>'), El = I('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function Al(e, t) {
  ht(t, true);
  let n = L(null), s = L(null), r = L(null), a = L(null), l = L(null), o = L(null), f = L(""), u = L("inspect"), c = L(Ge(_s())), p = L(false), d = L(null), y = L(""), b = L(false);
  const O = "scry \xB7 awaiting binary", g = "scry-booted-v2", C = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer" }, T = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  rt(() => {
    function S(P) {
      if (P.origin !== location.origin) return;
      const Y = P.data;
      Y && (Y.type === "scry-theme" && (Y.value === "light" || Y.value === "dark") ? (document.documentElement.setAttribute("data-theme", Y.value), h(c, Y.value, true)) : Y.type === "scry-load-demo" && q());
    }
    return window.addEventListener("message", S), () => window.removeEventListener("message", S);
  });
  async function j({ name: S, bytes: P }) {
    h(n, { name: S, bytes: P }, true), h(f, ""), h(r, null), h(a, null), h(l, null), h(s, null), h(o, null), h(p, true);
    try {
      const Y = await On();
      if (h(s, Y.detect_format(P), true), i(s) === "elf") h(r, Y.parse_elf(P), true), h(u, "inspect");
      else if (i(s) === "wav") {
        try {
          h(a, Y.decode_wav(P), true);
        } catch {
        }
        h(u, "wave");
      } else h(u, "hex");
      h(l, Y.extract_strings(P, 4), true);
      const Me = Math.max(64, Math.ceil(P.length / 256)), he = Y.entropy_blocks(P, Me);
      if (he.length) {
        let Le = 0;
        for (let be = 0; be < he.length; be++) Le += he[be];
        h(o, Le / he.length * 8);
      }
    } catch (Y) {
      h(f, String(Y), true);
    } finally {
      h(p, false);
    }
  }
  function z() {
    h(n, null), h(r, null), h(a, null), h(l, null), h(s, null), h(f, ""), h(o, null);
  }
  function V(S) {
    h(f, S, true);
  }
  function R() {
    h(c, yi(), true);
  }
  function q() {
    j({ name: hs, bytes: ps() });
  }
  function G(S) {
    h(u, "hex"), h(d, { o: S, t: performance.now() }, true);
  }
  let Q = ct(() => {
    if (!i(n)) return null;
    if (i(r)) {
      const S = i(r).summary;
      return [i(s)?.toUpperCase(), S.machine, S.class, S.kind].filter(Boolean).join(" \xB7 ");
    }
    return (i(s) || "raw").toUpperCase();
  }), D = ct(() => {
    if (!i(n)) return null;
    if (i(r)) {
      const S = i(r).summary, P = [];
      return S.class && S.machine ? P.push(`${S.class} ${S.machine}`) : S.machine && P.push(S.machine), P.push(`${i(r).sections.length} sections`), P.push(`${i(r).symbols.length} symbols`), i(o) != null && P.push(`avg entropy ${i(o).toFixed(1)} bits`), P.join(" \xB7 ");
    }
    if (i(a)) {
      const S = i(a).fmt, P = i(a).duration < 1 ? `${(i(a).duration * 1e3).toFixed(0)} ms` : `${i(a).duration.toFixed(2)} s`, Y = [`${S.channels}ch ${S.sample_rate} Hz`, `${S.bits_per_sample}-bit`, P];
      return i(o) != null && Y.push(`avg entropy ${i(o).toFixed(1)} bits`), Y.join(" \xB7 ");
    }
    return i(o) != null ? `bytes only \xB7 entropy ${i(o).toFixed(1)} bits` : null;
  });
  rt(() => {
    if (sessionStorage.getItem(g)) {
      h(y, O), h(b, true);
      return;
    }
    let S = 0;
    const P = setInterval(() => {
      if (S++, h(y, O.slice(0, S), true), S >= O.length) {
        clearInterval(P), h(b, true);
        try {
          sessionStorage.setItem(g, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(P);
  });
  var ee = El(), E = nt(ee);
  fl(E, { onfile: j, onerror: V });
  var N = _(E, 2);
  let H;
  var ne = v(N), m = v(ne);
  {
    var M = (S) => {
      var P = ul();
      F(S, P);
    };
    te(m, (S) => {
      T || S(M);
    });
  }
  var k = _(m, 2);
  {
    var w = (S) => {
      var P = pl(), Y = v(P);
      {
        var Me = (ye) => {
          var re = dl(), Oe = v(re);
          Ha(Oe, () => i(n).name, (He) => {
            var ge = cl(), Qe = v(ge);
            X(() => x(Qe, `[ ${i(Q) ?? ""} ]`)), F(He, ge);
          });
          var yt = _(Oe, 2);
          {
            var Kt = (He) => {
              var ge = vl(), Qe = v(ge);
              X(() => x(Qe, i(D))), F(He, ge);
            };
            te(yt, (He) => {
              i(D) && He(Kt);
            });
          }
          F(ye, re);
        };
        te(Y, (ye) => {
          i(Q) && ye(Me);
        });
      }
      var he = _(Y, 2);
      {
        var Le = (ye) => {
          var re = _l();
          F(ye, re);
        };
        te(he, (ye) => {
          i(p) && ye(Le);
        });
      }
      var be = _(he, 2);
      ie("click", be, z), F(S, P);
    }, A = (S) => {
      var P = hl();
      F(S, P);
    };
    te(k, (S) => {
      i(n) ? S(w) : S(A, -1);
    });
  }
  var B = _(k, 2);
  {
    var $ = (S) => {
      var P = gl(), Y = v(P), Me = v(Y);
      X(() => x(Me, i(c) === "dark" ? "\u263C" : "\u263E")), ie("click", Y, R), F(S, P);
    };
    te(B, (S) => {
      T || S($);
    });
  }
  var ae = _(ne, 2), ue = v(ae);
  ll(ue, { get file() {
    return i(n);
  }, get format() {
    return i(s);
  }, get parsing() {
    return i(p);
  } });
  var Se = _(ue, 2), oe = v(Se);
  {
    var Z = (S) => {
      var P = ml(), Y = v(P);
      let Me;
      var he = _(Y, 2);
      let Le;
      var be = _(he, 2);
      let ye;
      X(() => {
        Y.disabled = i(s) !== "elf", st(Y, "title", i(s) === "elf" ? "" : "INSPECT is ELF-only"), Me = kt(Y, 1, "svelte-1n46o8q", null, Me, { on: i(u) === "inspect" }), Le = kt(he, 1, "svelte-1n46o8q", null, Le, { on: i(u) === "hex" }), be.disabled = i(s) !== "wav", st(be, "title", i(s) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), ye = kt(be, 1, "svelte-1n46o8q", null, ye, { on: i(u) === "wave" });
      }), ie("click", Y, () => h(u, "inspect")), ie("click", he, () => h(u, "hex")), ie("click", be, () => h(u, "wave")), F(S, P);
    };
    te(oe, (S) => {
      i(n) && S(Z);
    });
  }
  var de = _(oe, 2), ke = v(de);
  {
    var Ze = (S) => {
      Mi(S, { onfile: j });
    }, De = (S) => {
      var P = wl(), Y = nt(P);
      {
        var Me = (re) => {
          var Oe = bl(), yt = v(Oe);
          X(() => x(yt, `parse failed: ${i(f) ?? ""}`)), F(re, Oe);
        };
        te(Y, (re) => {
          i(f) && re(Me);
        });
      }
      var he = _(Y, 2);
      {
        var Le = (re) => {
          var Oe = An(), yt = nt(Oe);
          {
            var Kt = (ge) => {
              Vi(ge, { get report() {
                return i(r);
              }, get strings() {
                return i(l);
              }, onJumpToOffset: G });
            }, He = (ge) => {
              var Qe = yl(), Fn = _(v(Qe)), jn = v(Fn);
              X(() => x(jn, i(s))), F(ge, Qe);
            };
            te(yt, (ge) => {
              i(r) ? ge(Kt) : i(s) && i(s) !== "elf" && ge(He, 1);
            });
          }
          F(re, Oe);
        }, be = (re) => {
          {
            let Oe = ct(() => i(d)?.o);
            Xi(re, { get bytes() {
              return i(n).bytes;
            }, get jumpTo() {
              return i(Oe);
            } });
          }
        }, ye = (re) => {
          nl(re, { get bytes() {
            return i(n).bytes;
          } });
        };
        te(he, (re) => {
          i(u) === "inspect" ? re(Le) : i(u) === "hex" ? re(be, 1) : i(u) === "wave" && re(ye, 2);
        });
      }
      F(S, P);
    };
    te(ke, (S) => {
      i(n) ? S(De, -1) : S(Ze);
    });
  }
  var ce = _(ae, 2), Te = v(ce), mt = _(v(Te), 1, true), bt = _(Te, 2);
  {
    var Rt = (S) => {
      var P = xl(), Y = v(P);
      X(() => x(Y, C[i(u)] ?? "")), F(S, P);
    };
    te(bt, (S) => {
      i(n) && S(Rt);
    });
  }
  var Ct = _(bt, 2), Nt = v(Ct);
  X((S) => {
    H = kt(N, 1, "app svelte-1n46o8q", null, H, { embedded: T }), x(mt, i(n) ? "READY \xB7 LOCAL \xB7 NO UPLOAD" : i(b) ? "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${i(y)}\u2588`), x(Nt, `MODULE \xB7 ${S ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => i(n) ? i(u).toUpperCase() : "EMPTY"]), F(e, ee), gt();
}
dn(["click"]);
Ba(Al, { target: document.getElementById("app") });
