(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const a of s) if (a.type === "childList") for (const l of a.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: true, subtree: true });
  function n(s) {
    const a = {};
    return s.integrity && (a.integrity = s.integrity), s.referrerPolicy && (a.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? a.credentials = "include" : s.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function r(s) {
    if (s.ep) return;
    s.ep = true;
    const a = n(s);
    fetch(s.href, a);
  }
})();
const ks = false;
var Ar = Array.isArray, Ss = Array.prototype.indexOf, Ht = Array.prototype.includes, Fn = Array.from, Ts = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, Ms = Object.getOwnPropertyDescriptors, Cs = Object.prototype, Rs = Array.prototype, kr = Object.getPrototypeOf, fr = Object.isExtensible;
const Os = () => {
};
function Fs(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Sr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function Is(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const ge = 2, zt = 4, In = 8, Tr = 1 << 24, st = 16, Ze = 32, At = 64, Vn = 128, Pe = 512, ve = 1024, he = 2048, at = 4096, xe = 8192, qe = 16384, Bt = 32768, Hn = 1 << 25, Gt = 65536, zn = 1 << 17, js = 1 << 18, Jt = 1 << 19, Ds = 1 << 20, nt = 1 << 25, Nt = 65536, Tn = 1 << 21, dn = 1 << 22, yt = 1 << 23, En = Symbol("$state"), Ns = Symbol(""), vt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Mr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ls() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Bs(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ps(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function qs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Us(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ws() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Hs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function zs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Gs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Ys = 1, Ks = 2, Cr = 4, Xs = 8, Js = 16, Zs = 1, Qs = 2, de = Symbol(), Rr = "http://www.w3.org/1999/xhtml";
function $s() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ea() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Or(e) {
  return e === this.v;
}
function ta(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Fr(e) {
  return !ta(e, this.v);
}
let na = false, Ee = null;
function Yt(e) {
  Ee = e;
}
function lt(e, t = false, n) {
  Ee = { p: Ee, i: false, c: null, e: null, s: e, x: null, r: Z, l: null };
}
function ot(e) {
  var t = Ee, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Zr(r);
  }
  return t.i = true, Ee = t.p, {};
}
function Ir() {
  return true;
}
let Ot = [];
function jr() {
  var e = Ot;
  Ot = [], Fs(e);
}
function xt(e) {
  if (Ot.length === 0 && !on) {
    var t = Ot;
    queueMicrotask(() => {
      t === Ot && jr();
    });
  }
  Ot.push(e);
}
function ra() {
  for (; Ot.length > 0; ) jr();
}
function Dr(e) {
  var t = Z;
  if (t === null) return $.f |= yt, e;
  if (!(t.f & Bt) && !(t.f & zt)) throw e;
  wt(e, t);
}
function wt(e, t) {
  for (; t !== null; ) {
    if (t.f & Vn) {
      if (!(t.f & Bt)) throw e;
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
const sa = -7169;
function oe(e, t) {
  e.f = e.f & sa | t;
}
function er(e) {
  e.f & Pe || e.deps === null ? oe(e, ve) : oe(e, at);
}
function Nr(e) {
  if (e !== null) for (const t of e) !(t.f & ge) || !(t.f & Nt) || (t.f ^= Nt, Nr(t.deps));
}
function Lr(e, t, n) {
  e.f & he ? t.add(e) : e.f & at && n.add(e), Nr(e.deps), oe(e, ve);
}
const Ct = /* @__PURE__ */ new Set();
let K = null, Xe = null, Gn = null, on = false, Nn = false, Ut = null, An = null;
var ur = 0;
let aa = 1;
class kt {
  id = aa++;
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
  #c = /* @__PURE__ */ new Set();
  #f = /* @__PURE__ */ new Set();
  #l = /* @__PURE__ */ new Map();
  #v = /* @__PURE__ */ new Set();
  is_fork = false;
  #_ = false;
  #d = /* @__PURE__ */ new Set();
  #u() {
    return this.is_fork || this.#r.size > 0;
  }
  #g() {
    for (const r of this.#d) for (const s of r.#r.keys()) {
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
    this.#l.has(t) || this.#l.set(t, { d: [], m: [] }), this.#v.delete(t);
  }
  unskip_effect(t, n = (r) => this.schedule(r)) {
    var r = this.#l.get(t);
    if (r) {
      this.#l.delete(t);
      for (var s of r.d) oe(s, he), n(s);
      for (s of r.m) oe(s, at), n(s);
    }
    this.#v.add(t);
  }
  #p() {
    if (ur++ > 1e3 && (Ct.delete(this), la()), !this.#u()) {
      for (const o of this.#c) this.#f.delete(o), oe(o, he), this.schedule(o);
      for (const o of this.#f) oe(o, at), this.schedule(o);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = Ut = [], r = [], s = An = [];
    for (const o of t) try {
      this.#b(o, n, r);
    } catch (c) {
      throw qr(o), c;
    }
    if (K = null, s.length > 0) {
      var a = kt.ensure();
      for (const o of s) a.schedule(o);
    }
    if (Ut = null, An = null, this.#u() || this.#g()) {
      this.#h(r), this.#h(n);
      for (const [o, c] of this.#l) Pr(o, c);
    } else {
      this.#s.size === 0 && Ct.delete(this), this.#c.clear(), this.#f.clear();
      for (const o of this.#n) o(this);
      this.#n.clear(), vr(r), vr(n), this.#a?.resolve();
    }
    var l = K;
    if (this.#t.length > 0) {
      const o = l ??= this;
      o.#t.push(...this.#t.filter((c) => !o.#t.includes(c)));
    }
    l !== null && (Ct.add(l), l.#p());
  }
  #b(t, n, r) {
    t.f ^= ve;
    for (var s = t.first; s !== null; ) {
      var a = s.f, l = (a & (Ze | At)) !== 0, o = l && (a & ve) !== 0, c = o || (a & xe) !== 0 || this.#l.has(s);
      if (!c && s.fn !== null) {
        l ? s.f ^= ve : a & zt ? n.push(s) : hn(s) && (a & st && this.#f.add(s), Xt(s));
        var v = s.first;
        if (v !== null) {
          s = v;
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
  #h(t) {
    for (var n = 0; n < t.length; n += 1) Lr(t[n], this.#c, this.#f);
  }
  capture(t, n, r = false) {
    t.v !== de && !this.previous.has(t) && this.previous.set(t, t.v), t.f & yt || (this.current.set(t, [n, r]), Xe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    K = this;
  }
  deactivate() {
    K = null, Xe = null;
  }
  flush() {
    try {
      Nn = true, K = this, this.#p();
    } finally {
      ur = 0, Gn = null, Ut = null, An = null, Nn = false, K = null, Xe = null, It.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Ct.delete(this);
  }
  register_created_effect(t) {
    this.#i.push(t);
  }
  #m() {
    for (const f of Ct) {
      var t = f.id < this.id, n = [];
      for (const [h, [p, E]] of this.current) {
        if (f.current.has(h)) {
          var r = f.current.get(h)[0];
          if (t && p !== r) f.current.set(h, [p, E]);
          else continue;
        }
        n.push(h);
      }
      var s = [...f.current.keys()].filter((h) => !this.current.has(h));
      if (s.length === 0) t && f.discard();
      else if (n.length > 0) {
        if (t) for (const h of this.#v) f.unskip_effect(h, (p) => {
          p.f & (st | dn) ? f.schedule(p) : f.#h([p]);
        });
        f.activate();
        var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n) Br(o, s, a, l);
        l = /* @__PURE__ */ new Map();
        var c = [...f.current.keys()].filter((h) => this.current.has(h) ? this.current.get(h)[0] !== h : true);
        for (const h of this.#i) !(h.f & (qe | xe | zn)) && tr(h, c, l) && (h.f & (dn | st) ? (oe(h, he), f.schedule(h)) : f.#c.add(h));
        if (f.#t.length > 0) {
          f.apply();
          for (var v of f.#t) f.#b(v, [], []);
          f.#t = [];
        }
        f.deactivate();
      }
    }
    for (const f of Ct) f.#d.has(this) && (f.#d.delete(this), f.#d.size === 0 && !f.#u() && (f.activate(), f.#p()));
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
      let a = this.#r.get(n) ?? 0;
      a === 1 ? this.#r.delete(n) : this.#r.set(n, a - 1);
    }
    this.#_ || r || (this.#_ = true, xt(() => {
      this.#_ = false, this.flush();
    }));
  }
  transfer_effects(t, n) {
    for (const r of t) this.#c.add(r);
    for (const r of n) this.#f.add(r);
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
    if (K === null) {
      const t = K = new kt();
      Nn || (Ct.add(K), on || xt(() => {
        K === t && t.flush();
      }));
    }
    return K;
  }
  apply() {
    {
      Xe = null;
      return;
    }
  }
  schedule(t) {
    if (Gn = t, t.b?.is_pending && t.f & (zt | In | Tr) && !(t.f & Bt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Ut !== null && n === Z && ($ === null || !($.f & ge))) return;
      if (r & (At | Ze)) {
        if (!(r & ve)) return;
        n.f ^= ve;
      }
    }
    this.#t.push(n);
  }
}
function ia(e) {
  var t = on;
  on = true;
  try {
    for (var n; ; ) {
      if (ra(), K === null) return n;
      K.flush();
    }
  } finally {
    on = t;
  }
}
function la() {
  try {
    Ws();
  } catch (e) {
    wt(e, Gn);
  }
}
let ut = null;
function vr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (qe | xe)) && hn(r) && (ut = /* @__PURE__ */ new Set(), Xt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && $r(r), ut?.size > 0)) {
        It.clear();
        for (const s of ut) {
          if (s.f & (qe | xe)) continue;
          const a = [s];
          let l = s.parent;
          for (; l !== null; ) ut.has(l) && (ut.delete(l), a.push(l)), l = l.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const c = a[o];
            c.f & (qe | xe) || Xt(c);
          }
        }
        ut.clear();
      }
    }
    ut = null;
  }
}
function Br(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const a = s.f;
    a & ge ? Br(s, t, n, r) : a & (dn | st) && !(a & he) && tr(s, t, r) && (oe(s, he), nr(s));
  }
}
function tr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (Ht.call(t, s)) return true;
    if (s.f & ge && tr(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function nr(e) {
  K.schedule(e);
}
function Pr(e, t) {
  if (!(e.f & Ze && e.f & ve)) {
    e.f & he ? t.d.push(e) : e.f & at && t.m.push(e), oe(e, ve);
    for (var n = e.first; n !== null; ) Pr(n, t), n = n.next;
  }
}
function qr(e) {
  oe(e, ve);
  for (var t = e.first; t !== null; ) qr(t), t = t.next;
}
function oa(e) {
  let t = 0, n = Lt(0), r;
  return () => {
    ar() && (i(n), ir(() => (t === 0 && (r = gn(() => e(() => cn(n)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, cn(n));
      });
    })));
  };
}
var ca = Gt | Jt;
function fa(e, t, n, r) {
  new ua(e, t, n, r);
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
  #c = null;
  #f = 0;
  #l = 0;
  #v = false;
  #_ = /* @__PURE__ */ new Set();
  #d = /* @__PURE__ */ new Set();
  #u = null;
  #g = oa(() => (this.#u = Lt(this.#f), () => {
    this.#u = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (a) => {
      var l = Z;
      l.b = this, l.f |= Vn, r(a);
    }, this.parent = Z.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), this.#r = Dn(() => {
      this.#m();
    }, ca);
  }
  #p() {
    try {
      this.#a = Ne(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #b(t) {
    const n = this.#e.failed;
    n && (this.#i = Ne(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = Ne(() => t(this.#n)), xt(() => {
      var n = this.#c = document.createDocumentFragment(), r = Et();
      n.append(r), this.#a = this.#y(() => Ne(() => this.#s(r))), this.#l === 0 && (this.#n.before(n), this.#c = null, jt(this.#t, () => {
        this.#t = null;
      }), this.#w(K));
    }));
  }
  #m() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#f = 0, this.#a = Ne(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#c = document.createDocumentFragment();
        cr(this.#a, t);
        const n = this.#e.pending;
        this.#t = Ne(() => n(this.#n));
      } else this.#w(K);
    } catch (n) {
      this.error(n);
    }
  }
  #w(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#d);
  }
  defer_effect(t) {
    Lr(t, this.#_, this.#d);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #y(t) {
    var n = Z, r = $, s = Ee;
    it(this.#r), Ve(this.#r), Yt(this.#r.ctx);
    try {
      return kt.ensure(), t();
    } catch (a) {
      return Dr(a), null;
    } finally {
      it(n), Ve(r), Yt(s);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#w(n), this.#t && jt(this.#t, () => {
      this.#t = null;
    }), this.#c && (this.#n.before(this.#c), this.#c = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#f += t, !(!this.#u || this.#v) && (this.#v = true, xt(() => {
      this.#v = false, this.#u && Kt(this.#u, this.#f);
    }));
  }
  get_effect_pending() {
    return this.#g(), i(this.#u);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    K?.is_fork ? (this.#a && K.skip_effect(this.#a), this.#t && K.skip_effect(this.#t), this.#i && K.skip_effect(this.#i), K.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (Me(this.#a), this.#a = null), this.#t && (Me(this.#t), this.#t = null), this.#i && (Me(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let r = this.#e.failed;
    var s = false, a = false;
    const l = () => {
      if (s) {
        ea();
        return;
      }
      s = true, a && Gs(), this.#i !== null && jt(this.#i, () => {
        this.#i = null;
      }), this.#y(() => {
        this.#m();
      });
    }, o = (c) => {
      try {
        a = true, n?.(c, l), a = false;
      } catch (v) {
        wt(v, this.#r && this.#r.parent);
      }
      r && (this.#i = this.#y(() => {
        try {
          return Ne(() => {
            var v = Z;
            v.b = this, v.f |= Vn, r(this.#n, () => c, () => l);
          });
        } catch (v) {
          return wt(v, this.#r.parent), null;
        }
      }));
    };
    xt(() => {
      var c;
      try {
        c = this.transform_error(t);
      } catch (v) {
        wt(v, this.#r && this.#r.parent);
        return;
      }
      c !== null && typeof c == "object" && typeof c.then == "function" ? c.then(o, (v) => wt(v, this.#r && this.#r.parent)) : o(c);
    });
  }
}
function va(e, t, n, r) {
  const s = rr;
  var a = e.filter((p) => !p.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return;
  }
  var l = Z, o = da(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((p) => p.promise)) : null;
  function v(p) {
    o();
    try {
      r(p);
    } catch (E) {
      l.f & qe || wt(E, l);
    }
    Mn();
  }
  if (n.length === 0) {
    c.then(() => v(t.map(s)));
    return;
  }
  var f = Ur();
  function h() {
    Promise.all(n.map((p) => _a(p))).then((p) => v([...t.map(s), ...p])).catch((p) => wt(p, l)).finally(() => f());
  }
  c ? c.then(() => {
    o(), h(), Mn();
  }) : h();
}
function da() {
  var e = Z, t = $, n = Ee, r = K;
  return function(a = true) {
    it(e), Ve(t), Yt(n), a && !(e.f & qe) && (r?.activate(), r?.apply());
  };
}
function Mn(e = true) {
  it(null), Ve(null), Yt(null), e && K?.deactivate();
}
function Ur() {
  var e = Z, t = e.b, n = K, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function rr(e) {
  var t = ge | he;
  return Z !== null && (Z.f |= Jt), { ctx: Ee, deps: null, effects: null, equals: Or, f: t, fn: e, reactions: null, rv: 0, v: de, wv: 0, parent: Z, ac: null };
}
function _a(e, t, n) {
  let r = Z;
  r === null && Ls();
  var s = void 0, a = Lt(de), l = !$, o = /* @__PURE__ */ new Map();
  return Ra(() => {
    var c = Z, v = Sr();
    s = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(Mn);
    } catch (E) {
      v.reject(E), Mn();
    }
    var f = K;
    if (l) {
      if (c.f & Bt) var h = Ur();
      if (r.b.is_rendered()) o.get(f)?.reject(vt), o.delete(f);
      else {
        for (const E of o.values()) E.reject(vt);
        o.clear();
      }
      o.set(f, v);
    }
    const p = (E, y = void 0) => {
      if (h) {
        var I = y === vt;
        h(I);
      }
      if (!(y === vt || c.f & qe)) {
        if (f.activate(), y) a.f |= yt, Kt(a, y);
        else {
          a.f & yt && (a.f ^= yt), Kt(a, E);
          for (const [b, B] of o) {
            if (o.delete(b), b === f) break;
            B.reject(vt);
          }
        }
        f.deactivate();
      }
    };
    v.promise.then(p, (E) => p(null, E || "unknown"));
  }), Jr(() => {
    for (const c of o.values()) c.reject(vt);
  }), new Promise((c) => {
    function v(f) {
      function h() {
        f === s ? c(a) : v(s);
      }
      f.then(h, h);
    }
    v(s);
  });
}
function _t(e) {
  const t = rr(e);
  return ns(t), t;
}
function pa(e) {
  const t = rr(e);
  return t.equals = Fr, t;
}
function ha(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Me(t[n]);
  }
}
function sr(e) {
  var t, n = Z, r = e.parent;
  if (!St && r !== null && r.f & (qe | xe)) return $s(), e.v;
  it(r);
  try {
    e.f &= ~Nt, ha(e), t = is(e);
  } finally {
    it(n);
  }
  return t;
}
function Wr(e) {
  var t = sr(e);
  if (!e.equals(t) && (e.wv = ss(), (!K?.is_fork || e.deps === null) && (K !== null ? K.capture(e, t, true) : e.v = t, e.deps === null))) {
    oe(e, ve);
    return;
  }
  St || (Xe !== null ? (ar() || K?.is_fork) && Xe.set(e, t) : er(e));
}
function ga(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(vt), t.teardown = Os, t.ac = null, _n(t, 0), lr(t));
}
function Vr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Xt(t);
}
let Yn = /* @__PURE__ */ new Set();
const It = /* @__PURE__ */ new Map();
let Hr = false;
function Lt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Or, rv: 0, wv: 0 };
  return n;
}
function U(e, t) {
  const n = Lt(e);
  return ns(n), n;
}
function ba(e, t = false, n = true) {
  const r = Lt(e);
  return t || (r.equals = Fr), r;
}
function _(e, t, n = false) {
  $ !== null && (!Je || $.f & zn) && Ir() && $.f & (ge | st | dn | zn) && (We === null || !Ht.call(We, e)) && zs();
  let r = n ? rt(t) : t;
  return Kt(e, r, An);
}
function Kt(e, t, n = null) {
  if (!e.equals(t)) {
    It.set(e, St ? t : e.v);
    var r = kt.ensure();
    if (r.capture(e, t), e.f & ge) {
      const s = e;
      e.f & he && sr(s), Xe === null && er(s);
    }
    e.wv = ss(), zr(e, he, n), Z !== null && Z.f & ve && !(Z.f & (Ze | At)) && (De === null ? Ia([e]) : De.push(e)), !r.is_fork && Yn.size > 0 && !Hr && ma();
  }
  return t;
}
function ma() {
  Hr = false;
  for (const e of Yn) e.f & ve && oe(e, at), hn(e) && Xt(e);
  Yn.clear();
}
function wa(e, t = 1) {
  var n = i(e), r = t === 1 ? n++ : n--;
  return _(e, n), r;
}
function cn(e) {
  _(e, e.v + 1);
}
function zr(e, t, n) {
  var r = e.reactions;
  if (r !== null) for (var s = r.length, a = 0; a < s; a++) {
    var l = r[a], o = l.f, c = (o & he) === 0;
    if (c && oe(l, t), o & ge) {
      var v = l;
      Xe?.delete(v), o & Nt || (o & Pe && (Z === null || !(Z.f & Tn)) && (l.f |= Nt), zr(v, at, n));
    } else if (c) {
      var f = l;
      o & st && ut !== null && ut.add(f), n !== null ? n.push(f) : nr(f);
    }
  }
}
function rt(e) {
  if (typeof e != "object" || e === null || En in e) return e;
  const t = kr(e);
  if (t !== Cs && t !== Rs) return e;
  var n = /* @__PURE__ */ new Map(), r = Ar(e), s = U(0), a = Dt, l = (o) => {
    if (Dt === a) return o();
    var c = $, v = Dt;
    Ve(null), hr(a);
    var f = o();
    return Ve(c), hr(v), f;
  };
  return r && n.set("length", U(e.length)), new Proxy(e, { defineProperty(o, c, v) {
    (!("value" in v) || v.configurable === false || v.enumerable === false || v.writable === false) && Vs();
    var f = n.get(c);
    return f === void 0 ? l(() => {
      var h = U(v.value);
      return n.set(c, h), h;
    }) : _(f, v.value, true), true;
  }, deleteProperty(o, c) {
    var v = n.get(c);
    if (v === void 0) {
      if (c in o) {
        const f = l(() => U(de));
        n.set(c, f), cn(s);
      }
    } else _(v, de), cn(s);
    return true;
  }, get(o, c, v) {
    if (c === En) return e;
    var f = n.get(c), h = c in o;
    if (f === void 0 && (!h || ln(o, c)?.writable) && (f = l(() => {
      var E = rt(h ? o[c] : de), y = U(E);
      return y;
    }), n.set(c, f)), f !== void 0) {
      var p = i(f);
      return p === de ? void 0 : p;
    }
    return Reflect.get(o, c, v);
  }, getOwnPropertyDescriptor(o, c) {
    var v = Reflect.getOwnPropertyDescriptor(o, c);
    if (v && "value" in v) {
      var f = n.get(c);
      f && (v.value = i(f));
    } else if (v === void 0) {
      var h = n.get(c), p = h?.v;
      if (h !== void 0 && p !== de) return { enumerable: true, configurable: true, value: p, writable: true };
    }
    return v;
  }, has(o, c) {
    if (c === En) return true;
    var v = n.get(c), f = v !== void 0 && v.v !== de || Reflect.has(o, c);
    if (v !== void 0 || Z !== null && (!f || ln(o, c)?.writable)) {
      v === void 0 && (v = l(() => {
        var p = f ? rt(o[c]) : de, E = U(p);
        return E;
      }), n.set(c, v));
      var h = i(v);
      if (h === de) return false;
    }
    return f;
  }, set(o, c, v, f) {
    var h = n.get(c), p = c in o;
    if (r && c === "length") for (var E = v; E < h.v; E += 1) {
      var y = n.get(E + "");
      y !== void 0 ? _(y, de) : E in o && (y = l(() => U(de)), n.set(E + "", y));
    }
    if (h === void 0) (!p || ln(o, c)?.writable) && (h = l(() => U(void 0)), _(h, rt(v)), n.set(c, h));
    else {
      p = h.v !== de;
      var I = l(() => rt(v));
      _(h, I);
    }
    var b = Reflect.getOwnPropertyDescriptor(o, c);
    if (b?.set && b.set.call(f, v), !p) {
      if (r && typeof c == "string") {
        var B = n.get("length"), j = Number(c);
        Number.isInteger(j) && j >= B.v && _(B, j + 1);
      }
      cn(s);
    }
    return true;
  }, ownKeys(o) {
    i(s);
    var c = Reflect.ownKeys(o).filter((h) => {
      var p = n.get(h);
      return p === void 0 || p.v !== de;
    });
    for (var [v, f] of n) f.v !== de && !(v in o) && c.push(v);
    return c;
  }, setPrototypeOf() {
    Hs();
  } });
}
var dr, Gr, Yr, Kr;
function ya() {
  if (dr === void 0) {
    dr = window, Gr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Yr = ln(t, "firstChild").get, Kr = ln(t, "nextSibling").get, fr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), fr(n) && (n.__t = void 0);
  }
}
function Et(e = "") {
  return document.createTextNode(e);
}
function Cn(e) {
  return Yr.call(e);
}
function pn(e) {
  return Kr.call(e);
}
function u(e, t) {
  return Cn(e);
}
function pt(e, t = false) {
  {
    var n = Cn(e);
    return n instanceof Comment && n.data === "" ? pn(n) : n;
  }
}
function d(e, t = 1, n = false) {
  let r = e;
  for (; t--; ) r = pn(r);
  return r;
}
function xa(e) {
  e.textContent = "";
}
function Xr() {
  return false;
}
function Ea(e, t, n) {
  return document.createElementNS(Rr, e, void 0);
}
let _r = false;
function Aa() {
  _r || (_r = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function jn(e) {
  var t = $, n = Z;
  Ve(null), it(null);
  try {
    return e();
  } finally {
    Ve(t), it(n);
  }
}
function ka(e, t, n, r = n) {
  e.addEventListener(t, () => jn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(true);
  } : e.__on_r = () => r(true), Aa();
}
function Sa(e) {
  Z === null && ($ === null && Us(), qs()), St && Ps();
}
function Ta(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ht(e, t) {
  var n = Z;
  n !== null && n.f & xe && (e |= xe);
  var r = { ctx: Ee, deps: null, nodes: null, f: e | he | Pe, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  K?.register_created_effect(r);
  var s = r;
  if (e & zt) Ut !== null ? Ut.push(r) : kt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Xt(r);
    } catch (l) {
      throw Me(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & Jt) && (s = s.first, e & st && e & Gt && s !== null && (s.f |= Gt));
  }
  if (s !== null && (s.parent = n, n !== null && Ta(s, n), $ !== null && $.f & ge && !(e & At))) {
    var a = $;
    (a.effects ??= []).push(s);
  }
  return r;
}
function ar() {
  return $ !== null && !Je;
}
function Jr(e) {
  const t = ht(In, null);
  return oe(t, ve), t.teardown = e, t;
}
function Ue(e) {
  Sa();
  var t = Z.f, n = !$ && (t & Ze) !== 0 && (t & Bt) === 0;
  if (n) {
    var r = Ee;
    (r.e ??= []).push(e);
  } else return Zr(e);
}
function Zr(e) {
  return ht(zt | Ds, e);
}
function Ma(e) {
  kt.ensure();
  const t = ht(At | Jt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? jt(t, () => {
      Me(t), r(void 0);
    }) : (Me(t), r(void 0));
  });
}
function Ca(e) {
  return ht(zt, e);
}
function Ra(e) {
  return ht(dn | Jt, e);
}
function ir(e, t = 0) {
  return ht(In | t, e);
}
function z(e, t = [], n = [], r = []) {
  va(r, t, n, (s) => {
    ht(In, () => e(...s.map(i)));
  });
}
function Dn(e, t = 0) {
  var n = ht(st | t, e);
  return n;
}
function Ne(e) {
  return ht(Ze | Jt, e);
}
function Qr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = St, r = $;
    pr(true), Ve(null);
    try {
      t.call(null);
    } finally {
      pr(n), Ve(r);
    }
  }
}
function lr(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && jn(() => {
      s.abort(vt);
    });
    var r = n.next;
    n.f & At ? n.parent = null : Me(n, t), n = r;
  }
}
function Oa(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ze || Me(t), t = n;
  }
}
function Me(e, t = true) {
  var n = false;
  (t || e.f & js) && e.nodes !== null && e.nodes.end !== null && (Fa(e.nodes.start, e.nodes.end), n = true), oe(e, Hn), lr(e, t && !n), _n(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const a of r) a.stop();
  Qr(e), e.f ^= Hn, e.f |= qe;
  var s = e.parent;
  s !== null && s.first !== null && $r(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Fa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : pn(e);
    e.remove(), e = n;
  }
}
function $r(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jt(e, t, n = true) {
  var r = [];
  es(e, r, true);
  var s = () => {
    n && Me(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var l = () => --a || s();
    for (var o of r) o.out(l);
  } else s();
}
function es(e, t, n) {
  if (!(e.f & xe)) {
    e.f ^= xe;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const o of r) (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var a = s.next;
      if (!(s.f & At)) {
        var l = (s.f & Gt) !== 0 || (s.f & Ze) !== 0 && (e.f & st) !== 0;
        es(s, t, l ? n : false);
      }
      s = a;
    }
  }
}
function or(e) {
  ts(e, true);
}
function ts(e, t) {
  if (e.f & xe) {
    e.f ^= xe, e.f & ve || (oe(e, he), kt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Gt) !== 0 || (n.f & Ze) !== 0;
      ts(n, s ? t : false), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (const l of a) (l.is_global || t) && l.in();
  }
}
function cr(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : pn(n);
    t.append(n), n = s;
  }
}
let kn = false, St = false;
function pr(e) {
  St = e;
}
let $ = null, Je = false;
function Ve(e) {
  $ = e;
}
let Z = null;
function it(e) {
  Z = e;
}
let We = null;
function ns(e) {
  $ !== null && (We === null ? We = [e] : We.push(e));
}
let Se = null, Fe = 0, De = null;
function Ia(e) {
  De = e;
}
let rs = 1, Ft = 0, Dt = Ft;
function hr(e) {
  Dt = e;
}
function ss() {
  return ++rs;
}
function hn(e) {
  var t = e.f;
  if (t & he) return true;
  if (t & ge && (e.f &= ~Nt), t & at) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (hn(a) && Wr(a), a.wv > e.wv) return true;
    }
    t & Pe && Xe === null && oe(e, ve);
  }
  return false;
}
function as(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(We !== null && Ht.call(We, e))) for (var s = 0; s < r.length; s++) {
    var a = r[s];
    a.f & ge ? as(a, t, false) : t === a && (n ? oe(a, he) : a.f & ve && oe(a, at), nr(a));
  }
}
function is(e) {
  var t = Se, n = Fe, r = De, s = $, a = We, l = Ee, o = Je, c = Dt, v = e.f;
  Se = null, Fe = 0, De = null, $ = v & (Ze | At) ? null : e, We = null, Yt(e.ctx), Je = false, Dt = ++Ft, e.ac !== null && (jn(() => {
    e.ac.abort(vt);
  }), e.ac = null);
  try {
    e.f |= Tn;
    var f = e.fn, h = f();
    e.f |= Bt;
    var p = e.deps, E = K?.is_fork;
    if (Se !== null) {
      var y;
      if (E || _n(e, Fe), p !== null && Fe > 0) for (p.length = Fe + Se.length, y = 0; y < Se.length; y++) p[Fe + y] = Se[y];
      else e.deps = p = Se;
      if (ar() && e.f & Pe) for (y = Fe; y < p.length; y++) (p[y].reactions ??= []).push(e);
    } else !E && p !== null && Fe < p.length && (_n(e, Fe), p.length = Fe);
    if (Ir() && De !== null && !Je && p !== null && !(e.f & (ge | at | he))) for (y = 0; y < De.length; y++) as(De[y], e);
    if (s !== null && s !== e) {
      if (Ft++, s.deps !== null) for (let I = 0; I < n; I += 1) s.deps[I].rv = Ft;
      if (t !== null) for (const I of t) I.rv = Ft;
      De !== null && (r === null ? r = De : r.push(...De));
    }
    return e.f & yt && (e.f ^= yt), h;
  } catch (I) {
    return Dr(I);
  } finally {
    e.f ^= Tn, Se = t, Fe = n, De = r, $ = s, We = a, Yt(l), Je = o, Dt = c;
  }
}
function ja(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ss.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & ge && (Se === null || !Ht.call(Se, t))) {
    var a = t;
    a.f & Pe && (a.f ^= Pe, a.f &= ~Nt), a.v !== de && er(a), ga(a), _n(a, 0);
  }
}
function _n(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) ja(e, n[r]);
}
function Xt(e) {
  var t = e.f;
  if (!(t & qe)) {
    oe(e, ve);
    var n = Z, r = kn;
    Z = e, kn = true;
    try {
      t & (st | Tr) ? Oa(e) : lr(e), Qr(e);
      var s = is(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = rs;
      var a;
      ks && na && e.f & he && e.deps;
    } finally {
      kn = r, Z = n;
    }
  }
}
async function Da() {
  await Promise.resolve(), ia();
}
function i(e) {
  var t = e.f, n = (t & ge) !== 0;
  if ($ !== null && !Je) {
    var r = Z !== null && (Z.f & qe) !== 0;
    if (!r && (We === null || !Ht.call(We, e))) {
      var s = $.deps;
      if ($.f & Tn) e.rv < Ft && (e.rv = Ft, Se === null && s !== null && s[Fe] === e ? Fe++ : Se === null ? Se = [e] : Se.push(e));
      else {
        ($.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [$] : Ht.call(a, $) || a.push($);
      }
    }
  }
  if (St && It.has(e)) return It.get(e);
  if (n) {
    var l = e;
    if (St) {
      var o = l.v;
      return (!(l.f & ve) && l.reactions !== null || os(l)) && (o = sr(l)), It.set(l, o), o;
    }
    var c = (l.f & Pe) === 0 && !Je && $ !== null && (kn || ($.f & Pe) !== 0), v = (l.f & Bt) === 0;
    hn(l) && (c && (l.f |= Pe), Wr(l)), c && !v && (Vr(l), ls(l));
  }
  if (Xe?.has(e)) return Xe.get(e);
  if (e.f & yt) throw e.v;
  return e.v;
}
function ls(e) {
  if (e.f |= Pe, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & ge && !(t.f & Pe) && (Vr(t), ls(t));
}
function os(e) {
  if (e.v === de) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (It.has(t) || t.f & ge && os(t)) return true;
  return false;
}
function gn(e) {
  var t = Je;
  try {
    return Je = true, e();
  } finally {
    Je = t;
  }
}
const Na = ["touchstart", "touchmove"];
function La(e) {
  return Na.includes(e);
}
const tn = Symbol("events"), cs = /* @__PURE__ */ new Set(), Kn = /* @__PURE__ */ new Set();
function Ba(e, t, n, r = {}) {
  function s(a) {
    if (r.capture || Xn.call(t, a), !a.cancelBubble) return jn(() => n?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Wt(e, t, n, r, s) {
  var a = { capture: r, passive: s }, l = Ba(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Jr(() => {
    t.removeEventListener(e, l, a);
  });
}
function re(e, t, n) {
  (t[tn] ??= {})[e] = n;
}
function Zt(e) {
  for (var t = 0; t < e.length; t++) cs.add(e[t]);
  for (var n of Kn) n(e);
}
let gr = null;
function Xn(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], a = s[0] || e.target;
  gr = e;
  var l = 0, o = gr === e && e[tn];
  if (o) {
    var c = s.indexOf(o);
    if (c !== -1 && (t === document || t === window)) {
      e[tn] = t;
      return;
    }
    var v = s.indexOf(t);
    if (v === -1) return;
    c <= v && (l = c);
  }
  if (a = s[l] || e.target, a !== t) {
    Ts(e, "currentTarget", { configurable: true, get() {
      return a || n;
    } });
    var f = $, h = Z;
    Ve(null), it(null);
    try {
      for (var p, E = []; a !== null; ) {
        var y = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var I = a[tn]?.[r];
          I != null && (!a.disabled || e.target === a) && I.call(a, e);
        } catch (b) {
          p ? E.push(b) : p = b;
        }
        if (e.cancelBubble || y === t || y === null) break;
        a = y;
      }
      if (p) {
        for (let b of E) queueMicrotask(() => {
          throw b;
        });
        throw p;
      }
    } finally {
      e[tn] = t, delete e.currentTarget, Ve(f), it(h);
    }
  }
}
const Pa = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function qa(e) {
  return Pa?.createHTML(e) ?? e;
}
function Ua(e) {
  var t = Ea("template");
  return t.innerHTML = qa(e.replaceAll("<!>", "<!---->")), t.content;
}
function Jn(e, t) {
  var n = Z;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function D(e, t) {
  var n = (t & Zs) !== 0, r = (t & Qs) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Ua(a ? e : "<!>" + e), n || (s = Cn(s)));
    var l = r || Gr ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var o = Cn(l), c = l.lastChild;
      Jn(o, c);
    } else Jn(l, l);
    return l;
  };
}
function Rn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Et();
  return e.append(t, n), Jn(t, n), e;
}
function R(e, t) {
  e !== null && e.before(t);
}
function m(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Wa(e, t) {
  return Va(e, t);
}
const xn = /* @__PURE__ */ new Map();
function Va(e, { target: t, anchor: n, props: r = {}, events: s, context: a, intro: l = true, transformError: o }) {
  ya();
  var c = void 0, v = Ma(() => {
    var f = n ?? t.appendChild(Et());
    fa(f, { pending: () => {
    } }, (E) => {
      lt({});
      var y = Ee;
      a && (y.c = a), s && (r.$$events = s), c = e(E, r) || {}, ot();
    }, o);
    var h = /* @__PURE__ */ new Set(), p = (E) => {
      for (var y = 0; y < E.length; y++) {
        var I = E[y];
        if (!h.has(I)) {
          h.add(I);
          var b = La(I);
          for (const g of [t, document]) {
            var B = xn.get(g);
            B === void 0 && (B = /* @__PURE__ */ new Map(), xn.set(g, B));
            var j = B.get(I);
            j === void 0 ? (g.addEventListener(I, Xn, { passive: b }), B.set(I, 1)) : B.set(I, j + 1);
          }
        }
      }
    };
    return p(Fn(cs)), Kn.add(p), () => {
      for (var E of h) for (const b of [t, document]) {
        var y = xn.get(b), I = y.get(E);
        --I == 0 ? (b.removeEventListener(E, Xn), y.delete(E), y.size === 0 && xn.delete(b)) : y.set(E, I);
      }
      Kn.delete(p), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Ha.set(c, v), c;
}
let Ha = /* @__PURE__ */ new WeakMap();
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
      var n = this.#n.get(t), r = this.#o.get(n);
      if (r) or(r), this.#s.delete(n);
      else {
        var s = this.#e.get(n);
        s && (this.#o.set(n, s.effect), this.#e.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [a, l] of this.#n) {
        if (this.#n.delete(a), a === t) break;
        const o = this.#e.get(l);
        o && (Me(o.effect), this.#e.delete(l));
      }
      for (const [a, l] of this.#o) {
        if (a === n || this.#s.has(a)) continue;
        const o = () => {
          if (Array.from(this.#n.values()).includes(a)) {
            var v = document.createDocumentFragment();
            cr(l, v), v.append(Et()), this.#e.set(a, { effect: l, fragment: v });
          } else Me(l);
          this.#s.delete(a), this.#o.delete(a);
        };
        this.#r || !r ? (this.#s.add(a), jt(l, o, false)) : o();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (Me(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = K, s = Xr();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var a = document.createDocumentFragment(), l = Et();
      a.append(l), this.#e.set(t, { effect: Ne(() => n(l)), fragment: a });
    } else this.#o.set(t, Ne(() => n(this.anchor)));
    if (this.#n.set(r, t), s) {
      for (const [o, c] of this.#o) o === t ? r.unskip_effect(c) : r.skip_effect(c);
      for (const [o, c] of this.#e) o === t ? r.unskip_effect(c.effect) : r.skip_effect(c.effect);
      r.oncommit(this.#a), r.ondiscard(this.#t);
    } else this.#a(r);
  }
}
function te(e, t, n = false) {
  var r = new fs(e), s = n ? Gt : 0;
  function a(l, o) {
    r.ensure(l, o);
  }
  Dn(() => {
    var l = false;
    t((o, c = 0) => {
      l = true, a(c, o);
    }), l || a(-1, null);
  }, s);
}
const za = Symbol("NaN");
function Ga(e, t, n) {
  var r = new fs(e);
  Dn(() => {
    var s = t();
    s !== s && (s = za), r.ensure(s, n);
  });
}
function Le(e, t) {
  return t;
}
function Ya(e, t, n) {
  for (var r = [], s = t.length, a, l = t.length, o = 0; o < s; o++) {
    let h = t[o];
    jt(h, () => {
      if (a) {
        if (a.pending.delete(h), a.done.add(h), a.pending.size === 0) {
          var p = e.outrogroups;
          Zn(e, Fn(a.done)), p.delete(a), p.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var c = r.length === 0 && n !== null;
    if (c) {
      var v = n, f = v.parentNode;
      xa(f), f.append(v), e.items.clear();
    }
    Zn(e, t, !c);
  } else a = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Zn(e, t, n = true) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const o of l) r.add(e.items.get(o).e);
  }
  for (var s = 0; s < t.length; s++) {
    var a = t[s];
    if (r?.has(a)) {
      a.f |= nt;
      const l = document.createDocumentFragment();
      cr(a, l);
    } else Me(t[s], n);
  }
}
var br;
function Be(e, t, n, r, s, a = null) {
  var l = e, o = /* @__PURE__ */ new Map(), c = (t & Cr) !== 0;
  if (c) {
    var v = e;
    l = v.appendChild(Et());
  }
  var f = null, h = pa(() => {
    var g = n();
    return Ar(g) ? g : g == null ? [] : Fn(g);
  }), p, E = /* @__PURE__ */ new Map(), y = true;
  function I(g) {
    j.effect.f & qe || (j.pending.delete(g), j.fallback = f, Ka(j, p, l, t, r), f !== null && (p.length === 0 ? f.f & nt ? (f.f ^= nt, nn(f, null, l)) : or(f) : jt(f, () => {
      f = null;
    })));
  }
  function b(g) {
    j.pending.delete(g);
  }
  var B = Dn(() => {
    p = i(h);
    for (var g = p.length, T = /* @__PURE__ */ new Set(), N = K, O = Xr(), L = 0; L < g; L += 1) {
      var G = p[L], Q = r(G, L), x = y ? null : o.get(Q);
      x ? (x.v && Kt(x.v, G), x.i && Kt(x.i, L), O && N.unskip_effect(x.e)) : (x = Xa(o, y ? l : br ??= Et(), G, Q, L, s, t, n), y || (x.e.f |= nt), o.set(Q, x)), T.add(Q);
    }
    if (g === 0 && a && !f && (y ? f = Ne(() => a(l)) : (f = Ne(() => a(br ??= Et())), f.f |= nt)), g > T.size && Bs(), !y) if (E.set(N, T), O) {
      for (const [J, S] of o) T.has(J) || N.skip_effect(S.e);
      N.oncommit(I), N.ondiscard(b);
    } else I(N);
    i(h);
  }), j = { effect: B, items: o, pending: E, outrogroups: null, fallback: f };
  y = false;
}
function en(e) {
  for (; e !== null && !(e.f & Ze); ) e = e.next;
  return e;
}
function Ka(e, t, n, r, s) {
  var a = (r & Xs) !== 0, l = t.length, o = e.items, c = en(e.effect.first), v, f = null, h, p = [], E = [], y, I, b, B;
  if (a) for (B = 0; B < l; B += 1) y = t[B], I = s(y, B), b = o.get(I).e, b.f & nt || (b.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(b));
  for (B = 0; B < l; B += 1) {
    if (y = t[B], I = s(y, B), b = o.get(I).e, e.outrogroups !== null) for (const x of e.outrogroups) x.pending.delete(b), x.done.delete(b);
    if (b.f & xe && (or(b), a && (b.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(b))), b.f & nt) if (b.f ^= nt, b === c) nn(b, null, n);
    else {
      var j = f ? f.next : c;
      b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), bt(e, f, b), bt(e, b, j), nn(b, j, n), f = b, p = [], E = [], c = en(f.next);
      continue;
    }
    if (b !== c) {
      if (v !== void 0 && v.has(b)) {
        if (p.length < E.length) {
          var g = E[0], T;
          f = g.prev;
          var N = p[0], O = p[p.length - 1];
          for (T = 0; T < p.length; T += 1) nn(p[T], g, n);
          for (T = 0; T < E.length; T += 1) v.delete(E[T]);
          bt(e, N.prev, O.next), bt(e, f, N), bt(e, O, g), c = g, f = O, B -= 1, p = [], E = [];
        } else v.delete(b), nn(b, c, n), bt(e, b.prev, b.next), bt(e, b, f === null ? e.effect.first : f.next), bt(e, f, b), f = b;
        continue;
      }
      for (p = [], E = []; c !== null && c !== b; ) (v ??= /* @__PURE__ */ new Set()).add(c), E.push(c), c = en(c.next);
      if (c === null) continue;
    }
    b.f & nt || p.push(b), f = b, c = en(b.next);
  }
  if (e.outrogroups !== null) {
    for (const x of e.outrogroups) x.pending.size === 0 && (Zn(e, Fn(x.done)), e.outrogroups?.delete(x));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || v !== void 0) {
    var L = [];
    if (v !== void 0) for (b of v) b.f & xe || L.push(b);
    for (; c !== null; ) !(c.f & xe) && c !== e.fallback && L.push(c), c = en(c.next);
    var G = L.length;
    if (G > 0) {
      var Q = r & Cr && l === 0 ? n : null;
      if (a) {
        for (B = 0; B < G; B += 1) L[B].nodes?.a?.measure();
        for (B = 0; B < G; B += 1) L[B].nodes?.a?.fix();
      }
      Ya(e, L, Q);
    }
  }
  a && xt(() => {
    if (h !== void 0) for (b of h) b.nodes?.a?.apply();
  });
}
function Xa(e, t, n, r, s, a, l, o) {
  var c = l & Ys ? l & Js ? Lt(n) : ba(n, false, false) : null, v = l & Ks ? Lt(s) : null;
  return { v: c, i: v, e: Ne(() => (a(t, c ?? n, v ?? s, o), () => {
    e.delete(r);
  })) };
}
function nn(e, t, n) {
  if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, a = t && !(t.f & nt) ? t.nodes.start : n; r !== null; ) {
    var l = pn(r);
    if (a.before(r), r === s) return;
    r = l;
  }
}
function bt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const mr = [...` 	
\r\f\xA0\v\uFEFF`];
function Ja(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var s of Object.keys(n)) if (n[s]) r = r ? r + " " + s : s;
    else if (r.length) for (var a = s.length, l = 0; (l = r.indexOf(s, l)) >= 0; ) {
      var o = l + a;
      (l === 0 || mr.includes(r[l - 1])) && (o === r.length || mr.includes(r[o])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(o + 1) : l = o;
    }
  }
  return r === "" ? null : r;
}
function Za(e, t) {
  return e == null ? null : String(e);
}
function tt(e, t, n, r, s, a) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var o = Ja(n, r, a);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (a && s !== a) for (var c in a) {
    var v = !!a[c];
    (s == null || v !== !!s[c]) && e.classList.toggle(c, v);
  }
  return a;
}
function Vt(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var a = Za(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return r;
}
const Qa = Symbol("is custom element"), $a = Symbol("is html");
function Te(e, t, n, r) {
  var s = ei(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Ns] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ti(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ei(e) {
  return e.__attributes ??= { [Qa]: e.nodeName.includes("-"), [$a]: e.namespaceURI === Rr };
}
var wr = /* @__PURE__ */ new Map();
function ti(e) {
  var t = e.getAttribute("is") || e.nodeName, n = wr.get(t);
  if (n) return n;
  wr.set(t, n = []);
  for (var r, s = e, a = Element.prototype; a !== s; ) {
    r = Ms(s);
    for (var l in r) r[l].set && n.push(l);
    s = kr(s);
  }
  return n;
}
function us(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  ka(e, "input", async (s) => {
    var a = s ? e.defaultValue : e.value;
    if (a = Ln(e) ? Bn(a) : a, n(a), K !== null && r.add(K), await Da(), a !== (a = t())) {
      var l = e.selectionStart, o = e.selectionEnd, c = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var v = e.value.length;
        l === o && o === c && v > c ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = l, e.selectionEnd = Math.min(o, v));
      }
    }
  }), gn(t) == null && e.value && (n(Ln(e) ? Bn(e.value) : e.value), K !== null && r.add(K)), ir(() => {
    var s = t();
    if (e === document.activeElement) {
      var a = K;
      if (r.has(a)) return;
    }
    Ln(e) && s === Bn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Ln(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Bn(e) {
  return e === "" ? null : +e;
}
function yr(e, t) {
  return e === t || e?.[En] === t;
}
function On(e = {}, t, n, r) {
  var s = Ee.r, a = Z;
  return Ca(() => {
    var l, o;
    return ir(() => {
      l = o, o = [], gn(() => {
        e !== n(...o) && (t(e, ...o), l && yr(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let c = a;
      for (; c !== s && c.parent !== null && c.parent.f & Hn; ) c = c.parent;
      const v = () => {
        o && yr(n(...o), e) && t(null, ...o);
      }, f = c.teardown;
      c.teardown = () => {
        v(), f?.();
      };
    };
  }), e;
}
function ni(e, t, n, r) {
  var s = r, a = true, l = () => (a && (a = false, s = r), s), o;
  o = e[t], o === void 0 && r !== void 0 && (o = l());
  var c;
  return c = () => {
    var v = e[t];
    return v === void 0 ? l() : (a = true, v);
  }, c;
}
function ri(e) {
  Ee === null && Mr(), Ue(() => {
    const t = gn(e);
    if (typeof t == "function") return t;
  });
}
function si(e) {
  Ee === null && Mr(), ri(() => () => gn(e));
}
const ai = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ai);
function ii() {
  W._start();
}
function li(e) {
  try {
    const s = W.__wbindgen_add_to_stack_pointer(-16), a = Pt(e, W.__wbindgen_export), l = He;
    W.decode_wav(s, a, l);
    var t = ae().getInt32(s + 4 * 0, true), n = ae().getInt32(s + 4 * 1, true), r = ae().getInt32(s + 4 * 2, true);
    if (r) throw Ie(n);
    return Ie(t);
  } finally {
    W.__wbindgen_add_to_stack_pointer(16);
  }
}
function oi(e) {
  let t, n;
  try {
    const a = W.__wbindgen_add_to_stack_pointer(-16), l = Pt(e, W.__wbindgen_export), o = He;
    W.detect_format(a, l, o);
    var r = ae().getInt32(a + 4 * 0, true), s = ae().getInt32(a + 4 * 1, true);
    return t = r, n = s, sn(r, s);
  } finally {
    W.__wbindgen_add_to_stack_pointer(16), W.__wbindgen_export3(t, n, 1);
  }
}
function ci(e, t) {
  try {
    const a = W.__wbindgen_add_to_stack_pointer(-16), l = Pt(e, W.__wbindgen_export), o = He;
    W.entropy_blocks(a, l, o, t);
    var n = ae().getInt32(a + 4 * 0, true), r = ae().getInt32(a + 4 * 1, true), s = pi(n, r).slice();
    return W.__wbindgen_export3(n, r * 4, 4), s;
  } finally {
    W.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e, t) {
  try {
    const a = W.__wbindgen_add_to_stack_pointer(-16), l = Pt(e, W.__wbindgen_export), o = He;
    W.extract_strings(a, l, o, t);
    var n = ae().getInt32(a + 4 * 0, true), r = ae().getInt32(a + 4 * 1, true), s = ae().getInt32(a + 4 * 2, true);
    if (s) throw Ie(r);
    return Ie(n);
  } finally {
    W.__wbindgen_add_to_stack_pointer(16);
  }
}
function ui(e, t, n) {
  try {
    const l = W.__wbindgen_add_to_stack_pointer(-16), o = Pt(e, W.__wbindgen_export), c = He;
    W.hex_rows(l, o, c, t, n);
    var r = ae().getInt32(l + 4 * 0, true), s = ae().getInt32(l + 4 * 1, true), a = hi(r, s).slice();
    return W.__wbindgen_export3(r, s * 4, 4), a;
  } finally {
    W.__wbindgen_add_to_stack_pointer(16);
  }
}
function vi(e) {
  try {
    const s = W.__wbindgen_add_to_stack_pointer(-16), a = Pt(e, W.__wbindgen_export), l = He;
    W.parse_elf(s, a, l);
    var t = ae().getInt32(s + 4 * 0, true), n = ae().getInt32(s + 4 * 1, true), r = ae().getInt32(s + 4 * 2, true);
    if (r) throw Ie(n);
    return Ie(t);
  } finally {
    W.__wbindgen_add_to_stack_pointer(16);
  }
}
function di(e) {
  try {
    const s = W.__wbindgen_add_to_stack_pointer(-16), a = Pt(e, W.__wbindgen_export), l = He;
    W.parse_gba(s, a, l);
    var t = ae().getInt32(s + 4 * 0, true), n = ae().getInt32(s + 4 * 1, true), r = ae().getInt32(s + 4 * 2, true);
    if (r) throw Ie(n);
    return Ie(t);
  } finally {
    W.__wbindgen_add_to_stack_pointer(16);
  }
}
function vs() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(sn(t, n));
    return mt(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(qt(n)), s = xr(r, W.__wbindgen_export, W.__wbindgen_export2), a = He;
    ae().setInt32(t + 4, a, true), ae().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(sn(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let r, s;
    try {
      r = t, s = n, console.error(sn(t, n));
    } finally {
      W.__wbindgen_export3(r, s, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return mt(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return mt(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return mt(t);
  }, __wbg_set_6be42768c690e380: function(t, n, r) {
    qt(t)[Ie(n)] = Ie(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    qt(t)[n >>> 0] = Ie(r);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const r = qt(n).stack, s = xr(r, W.__wbindgen_export, W.__wbindgen_export2), a = He;
    ae().setInt32(t + 4, a, true), ae().setInt32(t + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return mt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = sn(t, n);
    return mt(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return mt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = qt(t);
    return mt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    Ie(t);
  } } };
}
function mt(e) {
  un === dt.length && dt.push(dt.length + 1);
  const t = un;
  return un = dt[t], dt[t] = e, t;
}
function _i(e) {
  e < 1028 || (dt[e] = un, un = e);
}
function pi(e, t) {
  return e = e >>> 0, gi().subarray(e / 4, e / 4 + t);
}
function hi(e, t) {
  e = e >>> 0;
  const n = ae(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(Ie(n.getUint32(s, true)));
  return r;
}
let Rt = null;
function ae() {
  return (Rt === null || Rt.buffer.detached === true || Rt.buffer.detached === void 0 && Rt.buffer !== W.memory.buffer) && (Rt = new DataView(W.memory.buffer)), Rt;
}
let rn = null;
function gi() {
  return (rn === null || rn.byteLength === 0) && (rn = new Float32Array(W.memory.buffer)), rn;
}
function sn(e, t) {
  return mi(e >>> 0, t);
}
let an = null;
function fn() {
  return (an === null || an.byteLength === 0) && (an = new Uint8Array(W.memory.buffer)), an;
}
function qt(e) {
  return dt[e];
}
let dt = new Array(1024).fill(void 0);
dt.push(void 0, null, true, false);
let un = dt.length;
function Pt(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return fn().set(e, n / 1), He = e.length, n;
}
function xr(e, t, n) {
  if (n === void 0) {
    const o = vn.encode(e), c = t(o.length, 1) >>> 0;
    return fn().subarray(c, c + o.length).set(o), He = o.length, c;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const a = fn();
  let l = 0;
  for (; l < r; l++) {
    const o = e.charCodeAt(l);
    if (o > 127) break;
    a[s + l] = o;
  }
  if (l !== r) {
    l !== 0 && (e = e.slice(l)), s = n(s, r, r = l + e.length * 3, 1) >>> 0;
    const o = fn().subarray(s + l, s + r), c = vn.encodeInto(e, o);
    l += c.written, s = n(s, r, l, 1) >>> 0;
  }
  return He = l, s;
}
function Ie(e) {
  const t = qt(e);
  return _i(e), t;
}
let Sn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Sn.decode();
const bi = 2146435072;
let Pn = 0;
function mi(e, t) {
  return Pn += t, Pn >= bi && (Sn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Sn.decode(), Pn = t), Sn.decode(fn().subarray(e, e + t));
}
const vn = new TextEncoder();
"encodeInto" in vn || (vn.encodeInto = function(e, t) {
  const n = vn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let He = 0, W;
function ds(e, t) {
  return W = e.exports, Rt = null, rn = null, an = null, W.__wbindgen_start(), W;
}
async function wi(e, t) {
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
function yi(e) {
  if (W !== void 0) return W;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = vs();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return ds(n);
}
async function _s(e) {
  if (W !== void 0) return W;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = vs();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await wi(await e, t);
  return ds(n);
}
const xi = Object.freeze(Object.defineProperty({ __proto__: null, _start: ii, decode_wav: li, default: _s, detect_format: oi, entropy_blocks: ci, extract_strings: fi, hex_rows: ui, initSync: yi, parse_elf: vi, parse_gba: di }, Symbol.toStringTag, { value: "Module" }));
let qn = null;
function bn() {
  return qn || (qn = _s()), qn.then(() => xi);
}
const Ei = "scry-theme";
function ps() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ai() {
  const e = ps() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(Ei, e);
  } catch {
  }
  return e;
}
const Qn = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Un = 65536, Wn = Qn.length * 4;
function hs() {
  const n = 84 + Wn, r = new ArrayBuffer(n), s = new DataView(r), a = new Uint8Array(r);
  a[0] = 127, a[1] = 69, a[2] = 76, a[3] = 70, a[4] = 1, a[5] = 1, a[6] = 1, s.setUint16(16, 2, true), s.setUint16(18, 243, true), s.setUint32(20, 1, true), s.setUint32(24, Un, true), s.setUint32(28, 52, true), s.setUint32(32, 0, true), s.setUint32(36, 0, true), s.setUint16(40, 52, true), s.setUint16(42, 32, true), s.setUint16(44, 1, true), s.setUint16(46, 0, true), s.setUint16(48, 0, true), s.setUint16(50, 0, true), s.setUint32(52, 1, true), s.setUint32(56, 84, true), s.setUint32(60, Un, true), s.setUint32(64, Un, true), s.setUint32(68, Wn, true), s.setUint32(72, Wn, true), s.setUint32(76, 5, true), s.setUint32(80, 4096, true);
  for (let l = 0; l < Qn.length; l++) s.setUint32(84 + l * 4, Qn[l], true);
  return new Uint8Array(r);
}
const gs = "demo-rv32-spi-i2c.elf", Er = 64 * 1024 * 1024;
function $n(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function bs(e) {
  if (!e) throw new Error("no file");
  if (e.size > Er) throw new Error(`file too large (${$n(e.size)} > ${$n(Er)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var ki = D('<span class="bar svelte-1i6c60u"></span>'), Si = D('<span class="bar shimmer svelte-1i6c60u"></span>'), Ti = D('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Mi = D('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Ci = D('<p class="loading svelte-1i6c60u"> </p>'), Ri = D('<p class="err svelte-1i6c60u"> </p>'), Oi = D('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Fi(e, t) {
  lt(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let r = U(false), s = U(""), a = U(rt([])), l = U(""), o = U(rt({}));
  async function c(S) {
    _(s, "");
    try {
      const P = await bs(S);
      t.onfile?.(P);
    } catch (P) {
      _(s, P.message || String(P), true);
    }
  }
  function v(S) {
    S.preventDefault(), _(r, false);
    const P = S.dataTransfer?.files?.[0];
    P && c(P);
  }
  function f(S) {
    S.preventDefault(), _(r, true);
  }
  function h() {
    _(r, false);
  }
  function p(S) {
    const P = S.target.files?.[0];
    P && c(P);
  }
  async function E(S) {
    if (!n.test(S)) {
      _(s, `sample blocked: bad name "${S}"`);
      return;
    }
    _(s, ""), _(l, `fetching ${S}\u2026`);
    try {
      const P = await fetch(`../v1/samples/${encodeURIComponent(S)}`);
      if (!P.ok) {
        _(s, `fetch failed: ${P.status}`), _(l, "");
        return;
      }
      _(l, `reading ${S}\u2026`);
      const Y = new Uint8Array(await P.arrayBuffer());
      _(l, ""), t.onfile?.({ name: S, bytes: Y });
    } catch (P) {
      _(s, String(P), true), _(l, "");
    }
  }
  function y() {
    _(s, ""), t.onfile?.({ name: gs, bytes: hs() });
  }
  Ue(() => {
    let S = false;
    return (async () => {
      try {
        const P = await fetch("../v1/samples/manifest.json");
        if (!P.ok) return;
        const Y = await P.json();
        if (S || !Array.isArray(Y)) return;
        _(a, Y, true);
        const se = await bn();
        if (S) return;
        await Promise.all(Y.map(async (w) => {
          if (n.test(w.file)) try {
            const F = await fetch(`../v1/samples/${encodeURIComponent(w.file)}`);
            if (!F.ok) return;
            const M = new Uint8Array(await F.arrayBuffer());
            if (S) return;
            const A = Math.max(1, Math.ceil(M.length / 12)), C = se.entropy_blocks(M, A);
            _(o, { ...i(o), [w.file]: Array.from(C) }, true);
          } catch {
          }
        }));
      } catch {
      }
    })(), () => {
      S = true;
    };
  });
  var I = Oi(), b = u(I);
  let B;
  var j = d(u(b), 4), g = u(j), T = u(g), N = d(g, 2), O = d(j, 2);
  {
    var L = (S) => {
      var P = Mi(), Y = d(u(P), 2);
      Be(Y, 21, () => i(a), Le, (F, M) => {
        var A = Ti(), C = u(A), H = u(C), ee = d(C, 2), ie = u(ee);
        {
          var le = (ce) => {
            var X = Rn(), ue = pt(X);
            Be(ue, 17, () => i(o)[i(M).file], Le, (Ae, ze) => {
              var Ce = ki();
              z((fe) => Vt(Ce, `height: ${fe ?? ""}px`), [() => Math.max(2, i(ze) * 14)]), R(Ae, Ce);
            }), R(ce, X);
          }, be = (ce) => {
            var X = Rn(), ue = pt(X);
            Be(ue, 16, () => Array(12), Le, (Ae, ze, Ce) => {
              var fe = Si();
              Vt(fe, `animation-delay: ${Ce * 40}ms`), R(Ae, fe);
            }), R(ce, X);
          };
          te(ie, (ce) => {
            i(o)[i(M).file] ? ce(le) : ce(be, -1);
          });
        }
        z(() => {
          Te(A, "title", i(M).insns > 0 ? `${i(M).desc} \u2014 ${i(M).insns} instructions` : i(M).desc), m(H, i(M).file);
        }), re("click", A, () => E(i(M).file)), R(F, A);
      });
      var se = d(Y, 2), w = u(se);
      z((F) => m(w, F), [() => i(a).map((F) => `${F.file} \u2014 ${F.desc}`).join("  \xB7  ")]), R(S, P);
    };
    te(O, (S) => {
      i(a).length && S(L);
    });
  }
  var G = d(O, 2);
  {
    var Q = (S) => {
      var P = Ci(), Y = u(P);
      z(() => m(Y, i(l))), R(S, P);
    };
    te(G, (S) => {
      i(l) && S(Q);
    });
  }
  var x = d(G, 2);
  {
    var J = (S) => {
      var P = Ri(), Y = u(P);
      z(() => m(Y, i(s))), R(S, P);
    };
    te(x, (S) => {
      i(s) && S(J);
    });
  }
  z(() => B = tt(b, 1, "zone svelte-1i6c60u", null, B, { over: i(r) })), Wt("drop", b, v), Wt("dragover", b, f), Wt("dragleave", b, h), re("change", T, p), re("click", N, y), R(e, I), ot();
}
Zt(["change", "click"]);
var Ii = D('<span class="ct svelte-etynpr"> </span>'), ji = D('<span class="ct svelte-etynpr"> </span>'), Di = D('<span class="ct svelte-etynpr"> </span>'), Ni = D('<span class="ct svelte-etynpr"> </span>'), Li = D("<button> <!> <!> <!> <!></button>"), Bi = D('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), Pi = D('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), qi = D('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Ui = D('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Wi = D('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Vi = D('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Hi = D('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), zi = D('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Gi = D('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), Yi = D('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Ki(e, t) {
  lt(t, true);
  let n = U("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let s = U(""), a = _t(() => {
    if (!t.strings) return [];
    const j = i(s).trim().toLowerCase();
    return j ? t.strings.filter((g) => g.text.toLowerCase().includes(j)) : t.strings;
  });
  const l = 80, o = _t(() => t.report ? Math.max(1, ...t.report.sections.map((j) => Number(j.size) || 0)) : 1);
  function c(j) {
    return "0x" + Number(j).toString(16).toUpperCase().padStart(8, "0");
  }
  var v = Yi(), f = u(v);
  Be(f, 21, () => r, Le, (j, g) => {
    var T = _t(() => Is(i(g), 2));
    let N = () => i(T)[0], O = () => i(T)[1];
    var L = Li();
    let G;
    var Q = u(L), x = d(Q);
    {
      var J = (M) => {
        var A = Ii(), C = u(A);
        z(() => m(C, t.report.sections.length)), R(M, A);
      };
      te(x, (M) => {
        N() === "sections" && M(J);
      });
    }
    var S = d(x, 2);
    {
      var P = (M) => {
        var A = ji(), C = u(A);
        z(() => m(C, t.report.segments.length)), R(M, A);
      };
      te(S, (M) => {
        N() === "segments" && M(P);
      });
    }
    var Y = d(S, 2);
    {
      var se = (M) => {
        var A = Di(), C = u(A);
        z(() => m(C, t.report.symbols.length)), R(M, A);
      };
      te(Y, (M) => {
        N() === "symbols" && M(se);
      });
    }
    var w = d(Y, 2);
    {
      var F = (M) => {
        var A = Ni(), C = u(A);
        z(() => m(C, t.strings.length)), R(M, A);
      };
      te(w, (M) => {
        N() === "strings" && t.strings && M(F);
      });
    }
    z(() => {
      G = tt(L, 1, "tab svelte-etynpr", null, G, { active: i(n) === N() }), m(Q, `${O() ?? ""} `);
    }), re("click", L, () => _(n, N(), true)), R(j, L);
  });
  var h = d(f, 2), p = u(h);
  {
    var E = (j) => {
      var g = Bi(), T = d(u(g), 2), N = u(T), O = d(T, 4), L = u(O), G = d(O, 4), Q = u(G), x = d(G, 4), J = u(x), S = d(x, 4), P = u(S), Y = d(S, 4), se = u(Y), w = d(Y, 4), F = u(w), M = d(w, 4), A = u(M), C = d(M, 4), H = u(C);
      z(() => {
        m(N, t.report.summary.class), m(L, t.report.summary.data), m(Q, t.report.summary.osabi), m(J, t.report.summary.kind), m(P, t.report.summary.machine), m(se, t.report.summary.entry), m(F, t.report.summary.n_sections), m(A, t.report.summary.n_segments), m(H, t.report.summary.n_symbols);
      }), R(j, g);
    }, y = (j) => {
      var g = qi(), T = d(u(g));
      Be(T, 21, () => t.report.sections, Le, (N, O) => {
        var L = Pi(), G = u(L), Q = u(G), x = d(G), J = u(x), S = d(x), P = u(S), Y = d(S), se = u(Y), w = d(Y), F = u(w), M = d(w), A = u(M), C = d(M), H = u(C), ee = d(C), ie = u(ee);
        z((le) => {
          Te(L, "title", `Jump to offset ${i(O).offset ?? ""} in HEX`), m(Q, i(O).idx), m(J, i(O).name || "\u2014"), m(P, i(O).kind), m(se, i(O).addr), m(F, i(O).offset), m(A, i(O).size), m(H, i(O).flags), Vt(ie, `width: ${le ?? ""}px`);
        }, [() => Math.max(1, Number(i(O).size) / i(o) * l)]), re("click", L, () => t.onJumpToOffset?.(parseInt(i(O).offset, 16))), R(N, L);
      }), R(j, g);
    }, I = (j) => {
      var g = Wi(), T = d(u(g));
      Be(T, 21, () => t.report.segments, Le, (N, O) => {
        var L = Ui(), G = u(L), Q = u(G), x = d(G), J = u(x), S = d(x), P = u(S), Y = d(S), se = u(Y), w = d(Y), F = u(w), M = d(w), A = u(M), C = d(M), H = u(C);
        z(() => {
          Te(L, "title", `Jump to offset ${i(O).offset ?? ""} in HEX`), m(Q, i(O).idx), m(J, i(O).kind), m(P, i(O).vaddr), m(se, i(O).offset), m(F, i(O).filesz), m(A, i(O).memsz), m(H, i(O).flags);
        }), re("click", L, () => t.onJumpToOffset?.(parseInt(i(O).offset, 16))), R(N, L);
      }), R(j, g);
    }, b = (j) => {
      var g = Hi(), T = d(u(g));
      Be(T, 21, () => t.report.symbols, Le, (N, O) => {
        var L = Vi(), G = u(L), Q = u(G), x = d(G), J = u(x), S = d(x), P = u(S), Y = d(S), se = u(Y), w = d(Y), F = u(w);
        z(() => {
          m(Q, i(O).name), m(J, i(O).bind), m(P, i(O).kind), m(se, i(O).value), m(F, i(O).size);
        }), R(N, L);
      }), R(j, g);
    }, B = (j) => {
      var g = Gi(), T = pt(g), N = u(T), O = d(N, 2), L = u(O), G = d(T, 2), Q = d(u(G));
      Be(Q, 21, () => i(a), Le, (x, J) => {
        var S = zi(), P = u(S), Y = u(P), se = d(P), w = u(se);
        z((F, M) => {
          Te(S, "title", `Jump to offset ${F ?? ""} in HEX`), m(Y, M), m(w, i(J).text);
        }, [() => c(i(J).offset), () => c(i(J).offset)]), re("click", S, () => t.onJumpToOffset?.(i(J).offset)), R(x, S);
      }), z(() => m(L, `${i(a).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), us(N, () => i(s), (x) => _(s, x)), R(j, g);
    };
    te(p, (j) => {
      i(n) === "summary" ? j(E) : i(n) === "sections" ? j(y, 1) : i(n) === "segments" ? j(I, 2) : i(n) === "symbols" ? j(b, 3) : i(n) === "strings" && j(B, 4);
    });
  }
  R(e, v), ot();
}
Zt(["click"]);
var Xi = D('<span class="strip-col svelte-14j5q0g"></span>'), Ji = D('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), Zi = D('<span role="presentation"> </span>'), Qi = D('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <!> <pre class="grid svelte-14j5q0g"></pre></div>');
function $i(e, t) {
  lt(t, true);
  let n = ni(t, "jumpTo", 3, null), r = U(0);
  const s = 16 * 32;
  let a = U(rt([])), l = U(null), o = U(rt([])), c = U(0), v = U(""), f = U(null), h = U(0), p = U(0), E = U(null);
  const y = 400;
  Ue(() => {
    let A = false;
    return bn().then((C) => {
      if (A) return;
      _(l, C, true), _(c, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), _(o, t.bytes ? i(l).entropy_blocks(t.bytes, i(c)) : [], true), b();
    }), () => {
      A = true;
    };
  }), Ue(() => {
    if (n() == null) return;
    const A = Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Number(n()) | 0)), C = Math.floor(A / 16) * 16, H = Math.floor(C / s) * s;
    _(r, H), b(), _(f, C), _(h, performance.now() + y), wa(p), requestAnimationFrame(() => {
      const ee = i(I);
      if (!ee) return;
      const ie = ee.querySelector(`[data-row-off="${C}"]`);
      if (!ie) return;
      const le = ee.getBoundingClientRect(), ce = ie.getBoundingClientRect().top - le.top - le.height / 3;
      ee.scrollTo({ top: ee.scrollTop + ce, behavior: "smooth" });
    });
  }), Ue(() => {
    if (i(p) === 0) return;
    let A = 0;
    const C = () => {
      if (performance.now() >= i(h)) {
        _(f, null);
        return;
      }
      _(p, i(p) + 1 & 4095), A = requestAnimationFrame(C);
    };
    return A = requestAnimationFrame(C), () => cancelAnimationFrame(A);
  });
  let I = U(null);
  function b() {
    !i(l) || !t.bytes || _(a, i(l).hex_rows(t.bytes, i(r), s), true);
  }
  function B(A) {
    _(r, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, i(r) + A)), true), _(r, Math.floor(i(r) / 16) * 16), b();
  }
  function j(A) {
    A.preventDefault();
    let C = i(v).trim();
    if (!C) return;
    (C.startsWith("0x") || C.startsWith("0X")) && (C = C.slice(2));
    const H = parseInt(C, 16);
    Number.isFinite(H) && (_(r, Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, H)), true), _(r, Math.floor(i(r) / 16) * 16), b());
  }
  function g(A) {
    if (!i(o).length || !t.bytes) return;
    const H = A.currentTarget.getBoundingClientRect(), ee = Math.max(0, Math.min(1, (A.clientX - H.left) / H.width)), ie = Math.floor(ee * t.bytes.length);
    _(r, Math.floor(ie / 16) * 16), b();
  }
  let T = _t(() => t.bytes && t.bytes.length ? i(r) / t.bytes.length : 0);
  function N(A, C) {
    if (i(f) == null || A !== i(f)) return 0;
    const H = i(h) - performance.now();
    return H <= 0 ? 0 : H / y;
  }
  let O = _t(() => {
    const A = [];
    for (let C = 0; C < i(a).length; C++) A.push({ off: i(r) + C * 16, text: i(a)[C] });
    return A;
  });
  var L = Qi(), G = u(L), Q = d(u(G), 2), x = u(Q), J = d(x, 2), S = d(J, 2), P = d(u(S), 2), Y = d(S, 2), se = d(Y, 2), w = d(G, 2);
  {
    var F = (A) => {
      var C = Ji(), H = d(u(C), 2), ee = u(H);
      Be(ee, 17, () => i(o), Le, (ce, X) => {
        var ue = Xi();
        z((Ae) => Vt(ue, `height: ${Ae ?? ""}%; opacity: ${0.35 + i(X) * 0.65}`), [() => Math.max(2, i(X) * 100)]), R(ce, ue);
      });
      var ie = d(ee, 2), le = d(H, 2), be = u(le);
      z((ce) => {
        Vt(ie, `left: ${i(T) * 100}%`), m(be, `${ce ?? ""} B / col`);
      }, [() => i(c).toLocaleString()]), re("click", H, g), R(A, C);
    };
    te(w, (A) => {
      i(o).length > 1 && A(F);
    });
  }
  var M = d(w, 2);
  Be(M, 21, () => i(O), Le, (A, C, H) => {
    var ee = Zi();
    let ie;
    var le = u(ee);
    z((be) => {
      ie = tt(ee, 1, "hex-row svelte-14j5q0g", null, ie, { hover: i(E) === H, flash: i(C).off === i(f) }), Te(ee, "data-row-off", i(C).off), Vt(ee, be), m(le, `${i(C).text ?? ""}
`);
    }, [() => i(C).off === i(f) ? `--flash-a: ${N(i(C).off, i(p))}` : ""]), Wt("mouseenter", ee, () => _(E, H, true)), Wt("mouseleave", ee, () => i(E) === H && _(E, null)), R(A, ee);
  }), On(M, (A) => _(I, A), () => i(I)), z((A) => Te(P, "placeholder", A), [() => i(r).toString(16).padStart(8, "0").toUpperCase()]), re("click", x, () => B(-s)), re("click", J, () => B(-16)), Wt("submit", S, j), us(P, () => i(v), (A) => _(v, A)), re("click", Y, () => B(16)), re("click", se, () => B(s)), R(e, L), ot();
}
Zt(["click"]);
var el = D('<span class="w-meta svelte-59bj26"> </span>'), tl = D('<div class="w-empty svelte-59bj26"> </div>'), nl = D('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), rl = D('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), sl = D('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), al = D('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function il(e, t) {
  lt(t, true);
  let n = U(null), r = U(""), s = U(null), a = U(null), l = null, o = null, c = null, v = 0, f = 0, h = 0, p = U("0:00 / 0:00");
  function E(w) {
    return "0x" + (Number(w) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function y(w) {
    return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KiB` : `${(w / 1024 / 1024).toFixed(2)} MiB`;
  }
  function I(w) {
    if (w < 1) return `${(w * 1e3).toFixed(0)} ms`;
    if (w < 60) return `${w.toFixed(2)} s`;
    const F = Math.floor(w / 60), M = w - F * 60;
    return `${F}m ${M.toFixed(1)}s`;
  }
  function b(w) {
    return w.replace(/\s+$/g, "");
  }
  async function B(w) {
    if (_(r, ""), !w) {
      _(n, null);
      return;
    }
    try {
      const M = (await bn()).decode_wav(w);
      _(n, M, true), c = null, _(p, `0:00 / ${I(M.duration)}`), requestAnimationFrame(() => j({ playhead: 0 }));
    } catch (F) {
      console.error("[scry/wave] decode failed", F), _(n, null), _(r, String(F?.message || F), true);
    }
  }
  function j({ playhead: w = null } = {}) {
    if (!i(s) || !i(n)) return;
    const F = window.devicePixelRatio || 1, M = i(s).getBoundingClientRect(), A = Math.max(1, Math.floor(M.width * F)), C = Math.max(1, Math.floor(M.height * F));
    i(s).width = A, i(s).height = C;
    const H = getComputedStyle(i(s)), ee = H.getPropertyValue("--w-bg").trim() || "#000", ie = H.getPropertyValue("--w-grid").trim() || "#333", le = H.getPropertyValue("--w-peak").trim() || "#888", be = H.getPropertyValue("--w-rms").trim() || "#bcd", ce = H.getPropertyValue("--w-accent").trim() || "#9fe3c7", X = i(s).getContext("2d");
    X.fillStyle = ee, X.fillRect(0, 0, A, C), X.strokeStyle = ie, X.lineWidth = 1;
    const ue = C / 2;
    for (const fe of [0.25, 0.5, 0.75]) {
      const Re = Math.floor(C * fe) + 0.5;
      X.beginPath(), X.moveTo(0, Re), X.lineTo(A, Re), X.stroke();
    }
    const Ae = i(n).envelope, ze = Ae.length, Ce = A / ze;
    for (let fe = 0; fe < ze; fe++) {
      const Re = Ae[fe], Qe = Math.floor(fe * Ce), $e = Math.max(1, Math.floor(Ce) - 1), Oe = ue - Re.max * ue, Ge = ue - Re.min * ue;
      X.fillStyle = le, X.fillRect(Qe, Math.floor(Oe), $e, Math.max(1, Math.ceil(Ge - Oe)));
      const Ye = Re.rms * ue;
      X.fillStyle = be, X.fillRect(Qe, Math.floor(ue - Ye), $e, Math.max(1, Math.ceil(2 * Ye)));
    }
    if (w != null) {
      const fe = Math.floor(w * A);
      X.strokeStyle = ce, X.lineWidth = 2 * F, X.beginPath(), X.moveTo(fe, 0), X.lineTo(fe, C), X.stroke();
    }
  }
  function g() {
    if (!i(n)) return null;
    if (c) return c;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const w = i(n).samples instanceof Float32Array ? i(n).samples : new Float32Array(i(n).samples);
    return c = l.createBuffer(1, w.length, i(n).fmt.sample_rate), c.copyToChannel(w, 0), c;
  }
  function T() {
    if (!l || !o || !i(n)) {
      h = 0;
      return;
    }
    const w = f + (l.currentTime - v), F = i(n).duration, M = Math.max(0, Math.min(1, w / F));
    j({ playhead: M }), _(p, `${I(Math.min(w, F))} / ${I(F)}`), w < F ? h = requestAnimationFrame(T) : h = 0;
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
  function O(w) {
    if (!i(n)) return;
    const F = g();
    F && (N(), o = l.createBufferSource(), o.buffer = F, o.connect(l.destination), o.onended = () => {
      h && cancelAnimationFrame(h), h = 0, j({ playhead: 0 }), _(p, `0:00 / ${I(i(n).duration)}`), o = null;
    }, l.state === "suspended" && l.resume(), f = Math.max(0, Math.min(i(n).duration - 1e-3, w)), v = l.currentTime, o.start(0, f), h = requestAnimationFrame(T));
  }
  function L(w) {
    if (!i(n)) return;
    const F = i(s).getBoundingClientRect(), M = (w.clientX - F.left) / F.width;
    O(M * i(n).duration);
  }
  Ue(() => {
    const w = t.bytes;
    return B(w), () => N();
  }), Ue(() => {
    if (!i(a)) return;
    const w = new ResizeObserver(() => i(n) && j({ playhead: 0 }));
    return w.observe(i(a)), () => w.disconnect();
  });
  var G = al(), Q = u(G), x = d(u(Q), 2);
  {
    var J = (w) => {
      var F = el(), M = u(F);
      z((A) => m(M, `${i(n).fmt.channels ?? ""}ch @ ${i(n).fmt.sample_rate ?? ""} Hz \xB7 ${i(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${A ?? ""}`), [() => I(i(n).duration)]), R(w, F);
    };
    te(x, (w) => {
      i(n) && w(J);
    });
  }
  var S = d(Q, 2);
  {
    var P = (w) => {
      var F = tl(), M = u(F);
      z(() => m(M, `Not a parseable WAV: ${i(r) ?? ""}`)), R(w, F);
    }, Y = (w) => {
      var F = nl();
      R(w, F);
    }, se = (w) => {
      var F = sl(), M = pt(F), A = u(M), C = u(A), H = u(C), ee = d(u(H)), ie = u(ee), le = d(H, 2), be = d(u(le)), ce = u(be), X = d(le, 2), ue = d(u(X)), Ae = u(ue), ze = d(X, 2), Ce = d(u(ze)), fe = u(Ce), Re = d(C, 2), Qe = u(Re), $e = d(u(Qe)), Oe = u($e), Ge = d(Qe, 2), Ye = d(u(Ge)), Tt = u(Ye), k = d(Ge, 2), q = d(u(k)), V = u(q), _e = d(k, 2), pe = d(u(_e)), Ke = u(pe), me = d(Re, 2), we = u(me), ke = d(u(we)), ct = u(ke), ne = d(we, 2);
      Be(ne, 17, () => i(n).chunks.slice(0, 4), Le, (ft, $t) => {
        var wn = rl(), yn = u(wn), ms = u(yn), ws = d(yn), ys = u(ws);
        z((xs, Es, As) => {
          m(ms, xs), m(ys, `${Es ?? ""} @ ${As ?? ""}`);
        }, [() => b(i($t).id), () => y(i($t).size), () => E(i($t).offset)]), R(ft, wn);
      });
      var ye = d(M, 2), je = u(ye), et = d(je, 2), Mt = d(et, 2), gt = u(Mt), Qt = d(ye, 2), mn = u(Qt);
      On(mn, (ft) => _(s, ft), () => i(s)), On(Qt, (ft) => _(a, ft), () => i(a)), z((ft, $t, wn, yn) => {
        m(ie, i(n).fmt.format === 1 ? "PCM (int)" : i(n).fmt.format === 3 ? "IEEE float" : `tag ${i(n).fmt.format}`), m(ce, i(n).fmt.channels), m(Ae, `${i(n).fmt.sample_rate ?? ""} Hz`), m(fe, `${i(n).fmt.bits_per_sample ?? ""}-bit`), m(Oe, ft), m(Tt, $t), m(V, wn), m(Ke, `${yn ?? ""}/s`), m(ct, i(n).chunks.length), m(gt, i(p));
      }, [() => Number(i(n).total_frames).toLocaleString(), () => I(i(n).duration), () => y(i(n).data_len), () => y(i(n).fmt.byte_rate)]), re("click", je, () => O(0)), re("click", et, () => {
        N(), j({ playhead: 0 }), _(p, `0:00 / ${I(i(n).duration)}`);
      }), re("click", mn, L), R(w, F);
    };
    te(S, (w) => {
      i(r) ? w(P) : i(n) ? w(se, -1) : w(Y, 1);
    });
  }
  R(e, G), ot();
}
Zt(["click"]);
var ll = D('<span class="c-meta svelte-1uww35p"> </span>'), ol = D('<div class="c-empty svelte-1uww35p"> </div>'), cl = D('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), fl = D('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), ul = D(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), vl = D('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function dl(e, t) {
  lt(t, true);
  let n = U(null), r = U("");
  function s(g) {
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
  async function c(g) {
    if (_(r, ""), !g) {
      _(n, null);
      return;
    }
    try {
      const T = await bn();
      _(n, T.parse_gba(g), true);
    } catch (T) {
      console.error("[scry/cart] parse failed", T), _(n, null), _(r, String(T?.message || T), true);
    }
  }
  Ue(() => {
    const g = t.bytes;
    c(g);
  });
  function v(g) {
    if (!t.bytes) return null;
    const T = t.bytes.subarray(g, Math.min(t.bytes.length, g + 16)), N = [], O = [];
    for (let L = 0; L < T.length; L++) N.push(s(T[L])), O.push(l(T[L])), L === 7 && N.push("");
    return { off: g, hex: N.join(" ").replace(/  /g, "  "), ascii: O.join("") };
  }
  let f = _t(() => {
    if (!t.bytes) return [];
    const g = [];
    for (let T = 160; T < 224; T += 16) {
      const N = v(T);
      N && g.push(N);
    }
    return g;
  });
  var h = vl(), p = u(h), E = d(u(p), 2);
  {
    var y = (g) => {
      var T = ll(), N = u(T);
      z((O) => m(N, `"${(i(n).title || "(blank)") ?? ""}" \xB7 ${i(n).game_code ?? ""} \xB7 ${O ?? ""}`), [() => o(i(n).rom_size)]), R(g, T);
    };
    te(E, (g) => {
      i(n) && g(y);
    });
  }
  var I = d(p, 2);
  {
    var b = (g) => {
      var T = ol(), N = u(T);
      z(() => m(N, `parse failed: ${i(r) ?? ""}`)), R(g, T);
    }, B = (g) => {
      var T = cl();
      R(g, T);
    }, j = (g) => {
      var T = ul(), N = u(T), O = d(u(N), 2), L = d(u(O)), G = u(L), Q = d(O, 2), x = d(u(Q)), J = u(x), S = d(Q, 2), P = d(u(S)), Y = u(P), se = d(S, 2), w = d(u(se), 2), F = u(w), M = d(se, 2), A = d(u(M)), C = u(A), H = d(M, 2), ee = d(u(H)), ie = u(ee), le = d(H, 2), be = d(u(le)), ce = u(be), X = d(le, 2), ue = d(u(X), 2), Ae = u(ue), ze = d(X, 2), Ce = d(u(ze)), fe = u(Ce), Re = d(N, 2), Qe = d(u(Re), 2);
      Be(Qe, 21, () => i(f), Le, ($e, Oe) => {
        var Ge = fl(), Ye = u(Ge), Tt = u(Ye), k = d(Ye, 2), q = u(k), V = d(k, 2), _e = u(V);
        z((pe) => {
          m(Tt, pe), m(q, i(Oe).hex), m(_e, i(Oe).ascii);
        }, [() => a(i(Oe).off)]), R($e, Ge);
      }), z(($e, Oe, Ge, Ye, Tt, k, q) => {
        m(G, i(n).title || "(blank)"), m(J, i(n).game_code || "----"), m(Y, i(n).maker_code || "--"), m(F, `0x${$e ?? ""} ${i(n).fixed_ok ? "\u2713" : "\u2717"}`), m(C, `0x${Oe ?? ""}`), m(ie, `0x${Ge ?? ""}`), m(ce, `0x${Ye ?? ""}`), m(Ae, `stored 0x${Tt ?? ""} \xB7
            computed 0x${k ?? ""}
            ${i(n).checksum_ok ? " \u2713" : " \u2717"}`), m(fe, q);
      }, [() => s(i(n).fixed), () => s(i(n).unit_code), () => s(i(n).device_type), () => s(i(n).version), () => s(i(n).checksum), () => s(i(n).checksum_computed), () => o(i(n).rom_size)]), R(g, T);
    };
    te(I, (g) => {
      i(r) ? g(b) : i(n) ? g(j, -1) : g(B, 1);
    });
  }
  R(e, h), ot();
}
var _l = D('<span class="g-meta svelte-1kb9ux"> </span>'), pl = D('<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div></div>');
function hl(e, t) {
  lt(t, true);
  let n, r = null, s = false, a = U(false), l = U("cart ready \xB7 click PLAY");
  const o = 480, c = 320;
  function v(x) {
    return x < 1024 ? `${x} B` : x < 1024 * 1024 ? `${(x / 1024).toFixed(1)} KiB` : `${(x / (1024 * 1024)).toFixed(2)} MiB`;
  }
  function f() {
    if (r) return r;
    if (typeof window.GameBoyAdvance != "function") throw new Error("gbajs not loaded");
    if (!window.biosBin) throw new Error("biosBin not loaded");
    if (console.log("[scry/dbg/v2] canvas pre-setCanvas:", "isConnected=", n?.isConnected, "offsetW=", n?.offsetWidth, "offsetH=", n?.offsetHeight, "attrW=", n?.width, "attrH=", n?.height), r = new window.GameBoyAdvance(), typeof window.GameBoyAdvanceSoftwareRenderer == "function") {
      try {
        r.video.renderPath?.worker?.terminate?.();
      } catch {
      }
      r.video.renderPath = new window.GameBoyAdvanceSoftwareRenderer();
    }
    return r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((x, J) => console.warn("[scry/v2/game/gba]", J)), r.setCanvas(n), console.log("[scry/dbg/v2] post-setCanvas:", "indirectCanvas=", !!r.indirectCanvas, "targetCanvas=", !!r.targetCanvas, "drawCallback=", r.video.drawCallback?.toString().slice(0, 80)), r.setBios(window.biosBin), r;
  }
  async function h() {
    if (t.bytes && !i(a)) {
      if (n.focus(), !s) {
        _(l, "loading ROM\u2026"), await new Promise((x) => requestAnimationFrame(x)), await new Promise((x) => requestAnimationFrame(x));
        try {
          const x = f(), J = t.bytes.buffer.slice(t.bytes.byteOffset, t.bytes.byteOffset + t.bytes.byteLength);
          if (!x.setRom(J)) {
            _(l, "rom rejected");
            return;
          }
          s = true, x.runStable(), _(a, true), _(l, "running");
        } catch (x) {
          console.error("[scry/v2/game] load failed", x), _(l, "error: " + (x?.message || x));
        }
        return;
      }
      r.runStable(), _(a, true), _(l, "running");
    }
  }
  function p() {
    !r || !r.hasRom() || (r.pause(), _(a, false), _(l, "paused"));
  }
  function E() {
    if (!r || !t.bytes) return;
    const x = i(a);
    if (x) {
      try {
        r.pause();
      } catch {
      }
      _(a, false);
    }
    s = false, _(l, "cart ready \xB7 click PLAY"), x && h();
  }
  Ue(() => {
    if (t.bytes) i(a) || _(l, "cart ready \xB7 click PLAY");
    else {
      if (r && i(a)) try {
        r.pause();
      } catch {
      }
      s = false, _(a, false), _(l, "idle");
    }
  }), si(() => {
    if (r && i(a)) try {
      r.pause();
    } catch {
    }
  });
  var y = pl(), I = u(y), b = d(u(I), 2);
  {
    var B = (x) => {
      var J = _l(), S = u(J);
      z((P) => m(S, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${P ?? ""}`), [() => v(t.header.rom_size)]), R(x, J);
    };
    te(b, (x) => {
      t.header && x(B);
    });
  }
  var j = d(I, 2), g = u(j);
  Te(g, "width", o), Te(g, "height", c), On(g, (x) => n = x, () => n);
  var T = d(j, 2), N = u(T), O = d(N, 2), L = d(O, 2), G = d(L, 2), Q = u(G);
  z(() => {
    N.disabled = !t.bytes || i(a), O.disabled = !i(a), L.disabled = !t.bytes || !s, m(Q, i(l));
  }), re("click", N, h), re("click", O, p), re("click", L, E), R(e, y), ot();
}
Zt(["click"]);
var gl = D('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), bl = D('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), ml = D('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), wl = D('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function yl(e, t) {
  lt(t, true);
  var n = wl(), r = u(n);
  {
    var s = (o) => {
      var c = gl();
      R(o, c);
    }, a = (o) => {
      var c = bl(), v = pt(c), f = d(u(v), 2), h = u(f), p = d(v, 2), E = d(u(p), 2), y = u(E), I = d(p, 2), b = d(u(I), 2), B = u(b);
      z((j, g) => {
        Te(f, "title", t.file.name), m(h, t.file.name), m(y, j), m(B, g);
      }, [() => $n(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), R(o, c);
    }, l = (o) => {
      var c = ml();
      R(o, c);
    };
    te(r, (o) => {
      t.parsing ? o(s) : t.file ? o(a, 1) : o(l, -1);
    });
  }
  R(e, n), ot();
}
var xl = D('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function El(e, t) {
  lt(t, true);
  let n = U(false), r = 0;
  function s(c) {
    const v = c.dataTransfer;
    if (!v) return false;
    const f = v.types;
    if (!f) return false;
    for (let h = 0; h < f.length; h++) if (f[h] === "Files") return true;
    return false;
  }
  Ue(() => {
    function c(p) {
      s(p) && (p.preventDefault(), r++, _(n, true));
    }
    function v(p) {
      s(p) && (p.preventDefault(), p.dataTransfer && (p.dataTransfer.dropEffect = "copy"));
    }
    function f(p) {
      s(p) && (r = Math.max(0, r - 1), r === 0 && _(n, false));
    }
    async function h(p) {
      if (!s(p)) return;
      p.preventDefault(), r = 0, _(n, false);
      const E = p.dataTransfer?.files?.[0];
      if (E) try {
        const y = await bs(E);
        t.onfile?.(y);
      } catch (y) {
        t.onerror?.(y.message || String(y));
      }
    }
    return window.addEventListener("dragenter", c), window.addEventListener("dragover", v), window.addEventListener("dragleave", f), window.addEventListener("drop", h), () => {
      window.removeEventListener("dragenter", c), window.removeEventListener("dragover", v), window.removeEventListener("dragleave", f), window.removeEventListener("drop", h);
    };
  });
  var a = Rn(), l = pt(a);
  {
    var o = (c) => {
      var v = xl();
      R(c, v);
    };
    te(l, (c) => {
      i(n) && c(o);
    });
  }
  R(e, a), ot();
}
var Al = D('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), kl = D('<span class="s-badge entrance svelte-1n46o8q"> </span>'), Sl = D('<span class="s-summary svelte-1n46o8q"> </span>'), Tl = D('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), Ml = D('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), Cl = D('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Rl = D('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), Ol = D('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Fl = D('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), Il = D('<p class="err svelte-1n46o8q"> </p>'), jl = D('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), Dl = D("<!> <!>", 1), Nl = D('<span class="s-hint svelte-1n46o8q"> </span>'), Ll = D('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function Bl(e, t) {
  lt(t, true);
  let n = U(null), r = U(null), s = U(null), a = U(null), l = U(null), o = U(null), c = U(null), v = U(""), f = U("inspect"), h = U(rt(ps())), p = U(false), E = U(null), y = U(""), I = U(false);
  const b = "scry \xB7 awaiting binary", B = "scry-booted-v2", j = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, g = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  Ue(() => {
    function k(q) {
      if (q.origin !== location.origin) return;
      const V = q.data;
      V && (V.type === "scry-theme" && (V.value === "light" || V.value === "dark") ? (document.documentElement.setAttribute("data-theme", V.value), _(h, V.value, true)) : V.type === "scry-load-demo" && G());
    }
    return window.addEventListener("message", k), () => window.removeEventListener("message", k);
  });
  async function T({ name: k, bytes: q }) {
    _(n, { name: k, bytes: q }, true), _(v, ""), _(s, null), _(a, null), _(l, null), _(o, null), _(r, null), _(c, null), _(p, true);
    try {
      const V = await bn();
      if (_(r, V.detect_format(q), true), i(r) === "elf") _(s, V.parse_elf(q), true), _(f, "inspect");
      else if (i(r) === "wav") {
        try {
          _(a, V.decode_wav(q), true);
        } catch {
        }
        _(f, "wave");
      } else if (i(r) === "gba") {
        try {
          _(l, V.parse_gba(q), true);
        } catch {
        }
        _(f, "game");
      } else _(f, "hex");
      _(o, V.extract_strings(q, 4), true);
      const _e = Math.max(64, Math.ceil(q.length / 256)), pe = V.entropy_blocks(q, _e);
      if (pe.length) {
        let Ke = 0;
        for (let me = 0; me < pe.length; me++) Ke += pe[me];
        _(c, Ke / pe.length * 8);
      }
    } catch (V) {
      _(v, String(V), true);
    } finally {
      _(p, false);
    }
  }
  function N() {
    _(n, null), _(s, null), _(a, null), _(l, null), _(o, null), _(r, null), _(v, ""), _(c, null);
  }
  function O(k) {
    _(v, k, true);
  }
  function L() {
    _(h, Ai(), true);
  }
  function G() {
    T({ name: gs, bytes: hs() });
  }
  function Q(k) {
    _(f, "hex"), _(E, { o: k, t: performance.now() }, true);
  }
  let x = _t(() => {
    if (!i(n)) return null;
    if (i(s)) {
      const k = i(s).summary;
      return [i(r)?.toUpperCase(), k.machine, k.class, k.kind].filter(Boolean).join(" \xB7 ");
    }
    return (i(r) || "raw").toUpperCase();
  }), J = _t(() => {
    if (!i(n)) return null;
    if (i(s)) {
      const k = i(s).summary, q = [];
      return k.class && k.machine ? q.push(`${k.class} ${k.machine}`) : k.machine && q.push(k.machine), q.push(`${i(s).sections.length} sections`), q.push(`${i(s).symbols.length} symbols`), i(c) != null && q.push(`avg entropy ${i(c).toFixed(1)} bits`), q.join(" \xB7 ");
    }
    if (i(a)) {
      const k = i(a).fmt, q = i(a).duration < 1 ? `${(i(a).duration * 1e3).toFixed(0)} ms` : `${i(a).duration.toFixed(2)} s`, V = [`${k.channels}ch ${k.sample_rate} Hz`, `${k.bits_per_sample}-bit`, q];
      return i(c) != null && V.push(`avg entropy ${i(c).toFixed(1)} bits`), V.join(" \xB7 ");
    }
    if (i(l)) {
      const k = ["GBA cart", `"${i(l).title || "(blank)"}"`, `code ${i(l).game_code}`];
      return i(c) != null && k.push(`avg entropy ${i(c).toFixed(1)} bits`), k.join(" \xB7 ");
    }
    return i(c) != null ? `bytes only \xB7 entropy ${i(c).toFixed(1)} bits` : null;
  });
  Ue(() => {
    if (sessionStorage.getItem(B)) {
      _(y, b), _(I, true);
      return;
    }
    let k = 0;
    const q = setInterval(() => {
      if (k++, _(y, b.slice(0, k), true), k >= b.length) {
        clearInterval(q), _(I, true);
        try {
          sessionStorage.setItem(B, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(q);
  });
  var S = Ll(), P = pt(S);
  El(P, { onfile: T, onerror: O });
  var Y = d(P, 2);
  let se;
  var w = u(Y), F = u(w);
  {
    var M = (k) => {
      var q = Al(), V = u(q);
      let _e;
      z(() => {
        Te(q, "title", i(n) ? "Clear file \xB7 back to import" : ""), _e = tt(V, 1, "s-brand svelte-1n46o8q", null, _e, { "s-brand-clickable": !!i(n) });
      }), re("click", q, N), R(k, q);
    };
    te(F, (k) => {
      g || k(M);
    });
  }
  var A = d(F, 2);
  {
    var C = (k) => {
      var q = Cl(), V = u(q);
      {
        var _e = (we) => {
          var ke = Tl(), ct = u(ke);
          Ga(ct, () => i(n).name, (je) => {
            var et = kl(), Mt = u(et);
            z(() => m(Mt, `[ ${i(x) ?? ""} ]`)), R(je, et);
          });
          var ne = d(ct, 2);
          {
            var ye = (je) => {
              var et = Sl(), Mt = u(et);
              z(() => m(Mt, i(J))), R(je, et);
            };
            te(ne, (je) => {
              i(J) && je(ye);
            });
          }
          R(we, ke);
        };
        te(V, (we) => {
          i(x) && we(_e);
        });
      }
      var pe = d(V, 2);
      {
        var Ke = (we) => {
          var ke = Ml();
          R(we, ke);
        };
        te(pe, (we) => {
          i(p) && we(Ke);
        });
      }
      var me = d(pe, 2);
      re("click", me, N), R(k, q);
    }, H = (k) => {
      var q = Rl();
      R(k, q);
    };
    te(A, (k) => {
      i(n) ? k(C) : k(H, -1);
    });
  }
  var ee = d(A, 2);
  {
    var ie = (k) => {
      var q = Ol(), V = u(q), _e = u(V);
      z(() => m(_e, i(h) === "dark" ? "\u263C" : "\u263E")), re("click", V, L), R(k, q);
    };
    te(ee, (k) => {
      g || k(ie);
    });
  }
  var le = d(w, 2), be = u(le);
  yl(be, { get file() {
    return i(n);
  }, get format() {
    return i(r);
  }, get parsing() {
    return i(p);
  } });
  var ce = d(be, 2), X = u(ce);
  {
    var ue = (k) => {
      var q = Fl(), V = u(q);
      let _e;
      var pe = d(V, 2);
      let Ke;
      var me = d(pe, 2);
      let we;
      var ke = d(me, 2);
      let ct;
      var ne = d(ke, 2);
      let ye;
      z(() => {
        V.disabled = i(r) !== "elf", Te(V, "title", i(r) === "elf" ? "" : "INSPECT is ELF-only"), _e = tt(V, 1, "svelte-1n46o8q", null, _e, { on: i(f) === "inspect" }), Ke = tt(pe, 1, "svelte-1n46o8q", null, Ke, { on: i(f) === "hex" }), me.disabled = i(r) !== "wav", Te(me, "title", i(r) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), we = tt(me, 1, "svelte-1n46o8q", null, we, { on: i(f) === "wave" }), ke.disabled = i(r) !== "gba", Te(ke, "title", i(r) === "gba" ? "" : "CART is GBA-only"), ct = tt(ke, 1, "svelte-1n46o8q", null, ct, { on: i(f) === "cart" }), ne.disabled = i(r) !== "gba", Te(ne, "title", i(r) === "gba" ? "" : "GAME is GBA-only"), ye = tt(ne, 1, "svelte-1n46o8q", null, ye, { on: i(f) === "game" });
      }), re("click", V, () => _(f, "inspect")), re("click", pe, () => _(f, "hex")), re("click", me, () => _(f, "wave")), re("click", ke, () => _(f, "cart")), re("click", ne, () => _(f, "game")), R(k, q);
    };
    te(X, (k) => {
      i(n) && k(ue);
    });
  }
  var Ae = d(X, 2), ze = u(Ae);
  {
    var Ce = (k) => {
      Fi(k, { onfile: T });
    }, fe = (k) => {
      var q = Dl(), V = pt(q);
      {
        var _e = (ne) => {
          var ye = Il(), je = u(ye);
          z(() => m(je, `parse failed: ${i(v) ?? ""}`)), R(ne, ye);
        };
        te(V, (ne) => {
          i(v) && ne(_e);
        });
      }
      var pe = d(V, 2);
      {
        var Ke = (ne) => {
          var ye = Rn(), je = pt(ye);
          {
            var et = (gt) => {
              Ki(gt, { get report() {
                return i(s);
              }, get strings() {
                return i(o);
              }, onJumpToOffset: Q });
            }, Mt = (gt) => {
              var Qt = jl(), mn = d(u(Qt)), ft = u(mn);
              z(() => m(ft, i(r))), R(gt, Qt);
            };
            te(je, (gt) => {
              i(s) ? gt(et) : i(r) && i(r) !== "elf" && gt(Mt, 1);
            });
          }
          R(ne, ye);
        }, me = (ne) => {
          {
            let ye = _t(() => i(E)?.o);
            $i(ne, { get bytes() {
              return i(n).bytes;
            }, get jumpTo() {
              return i(ye);
            } });
          }
        }, we = (ne) => {
          il(ne, { get bytes() {
            return i(n).bytes;
          } });
        }, ke = (ne) => {
          dl(ne, { get bytes() {
            return i(n).bytes;
          } });
        }, ct = (ne) => {
          hl(ne, { get bytes() {
            return i(n).bytes;
          }, get header() {
            return i(l);
          } });
        };
        te(pe, (ne) => {
          i(f) === "inspect" ? ne(Ke) : i(f) === "hex" ? ne(me, 1) : i(f) === "wave" ? ne(we, 2) : i(f) === "cart" ? ne(ke, 3) : i(f) === "game" && ne(ct, 4);
        });
      }
      R(k, q);
    };
    te(ze, (k) => {
      i(n) ? k(fe, -1) : k(Ce);
    });
  }
  var Re = d(le, 2), Qe = u(Re), $e = d(u(Qe), 1, true), Oe = d(Qe, 2);
  {
    var Ge = (k) => {
      var q = Nl(), V = u(q);
      z(() => m(V, j[i(f)] ?? "")), R(k, q);
    };
    te(Oe, (k) => {
      i(n) && k(Ge);
    });
  }
  var Ye = d(Oe, 2), Tt = u(Ye);
  z((k) => {
    se = tt(Y, 1, "app svelte-1n46o8q", null, se, { embedded: g }), m($e, i(n) ? g ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : i(I) ? g ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${i(y)}\u2588`), m(Tt, `MODULE \xB7 ${k ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => i(n) ? i(f).toUpperCase() : "EMPTY"]), R(e, S), ot();
}
Zt(["click"]);
Wa(Bl, { target: document.getElementById("app") });
