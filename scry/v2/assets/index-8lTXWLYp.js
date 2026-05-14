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
const Ms = false;
var Ar = Array.isArray, Ts = Array.prototype.indexOf, Vt = Array.prototype.includes, In = Array.from, Cs = Object.defineProperty, on = Object.getOwnPropertyDescriptor, Rs = Object.getOwnPropertyDescriptors, Os = Object.prototype, Is = Array.prototype, kr = Object.getPrototypeOf, fr = Object.isExtensible;
const js = () => {
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
function Ns(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const ge = 2, Gt = 4, jn = 8, Mr = 1 << 24, it = 16, Ze = 32, At = 64, zn = 128, Be = 512, de = 1024, be = 2048, lt = 4096, xe = 8192, Ue = 16384, Bt = 32768, Hn = 1 << 25, Yt = 65536, Vn = 1 << 17, Ls = 1 << 18, Zt = 1 << 19, Ds = 1 << 20, st = 1 << 25, Pt = 65536, Tn = 1 << 21, _n = 1 << 22, yt = 1 << 23, An = Symbol("$state"), Ps = Symbol(""), vt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Tr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function qs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Bs(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Us(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ws() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Hs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Vs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ys() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ks() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Xs = 1, Js = 2, Cr = 4, Zs = 8, Qs = 16, $s = 1, ea = 2, _e = Symbol(), Rr = "http://www.w3.org/1999/xhtml";
function ta() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function na() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Or(e) {
  return e === this.v;
}
function ra(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ir(e) {
  return !ra(e, this.v);
}
let sa = false, Ee = null;
function Kt(e) {
  Ee = e;
}
function Qe(e, t = false, n) {
  Ee = { p: Ee, i: false, c: null, e: null, s: e, x: null, r: $, l: null };
}
function $e(e) {
  var t = Ee, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Zr(r);
  }
  return t.i = true, Ee = t.p, {};
}
function jr() {
  return true;
}
let Ot = [];
function Fr() {
  var e = Ot;
  Ot = [], Fs(e);
}
function xt(e) {
  if (Ot.length === 0 && !cn) {
    var t = Ot;
    queueMicrotask(() => {
      t === Ot && Fr();
    });
  }
  Ot.push(e);
}
function aa() {
  for (; Ot.length > 0; ) Fr();
}
function Nr(e) {
  var t = $;
  if (t === null) return te.f |= yt, e;
  if (!(t.f & Bt) && !(t.f & Gt)) throw e;
  wt(e, t);
}
function wt(e, t) {
  for (; t !== null; ) {
    if (t.f & zn) {
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
const ia = -7169;
function fe(e, t) {
  e.f = e.f & ia | t;
}
function er(e) {
  e.f & Be || e.deps === null ? fe(e, de) : fe(e, lt);
}
function Lr(e) {
  if (e !== null) for (const t of e) !(t.f & ge) || !(t.f & Pt) || (t.f ^= Pt, Lr(t.deps));
}
function Dr(e, t, n) {
  e.f & be ? t.add(e) : e.f & lt && n.add(e), Lr(e.deps), fe(e, de);
}
const Ct = /* @__PURE__ */ new Set();
let J = null, Xe = null, Gn = null, cn = false, Ln = false, zt = null, kn = null;
var ur = 0;
let la = 1;
class kt {
  id = la++;
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
  #b() {
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
      for (var s of r.d) fe(s, be), n(s);
      for (s of r.m) fe(s, lt), n(s);
    }
    this.#v.add(t);
  }
  #p() {
    if (ur++ > 1e3 && (Ct.delete(this), ca()), !this.#u()) {
      for (const o of this.#c) this.#f.delete(o), fe(o, be), this.schedule(o);
      for (const o of this.#f) fe(o, lt), this.schedule(o);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = zt = [], r = [], s = kn = [];
    for (const o of t) try {
      this.#g(o, n, r);
    } catch (c) {
      throw Br(o), c;
    }
    if (J = null, s.length > 0) {
      var a = kt.ensure();
      for (const o of s) a.schedule(o);
    }
    if (zt = null, kn = null, this.#u() || this.#b()) {
      this.#h(r), this.#h(n);
      for (const [o, c] of this.#l) qr(o, c);
    } else {
      this.#s.size === 0 && Ct.delete(this), this.#c.clear(), this.#f.clear();
      for (const o of this.#n) o(this);
      this.#n.clear(), vr(r), vr(n), this.#a?.resolve();
    }
    var l = J;
    if (this.#t.length > 0) {
      const o = l ??= this;
      o.#t.push(...this.#t.filter((c) => !o.#t.includes(c)));
    }
    l !== null && (Ct.add(l), l.#p());
  }
  #g(t, n, r) {
    t.f ^= de;
    for (var s = t.first; s !== null; ) {
      var a = s.f, l = (a & (Ze | At)) !== 0, o = l && (a & de) !== 0, c = o || (a & xe) !== 0 || this.#l.has(s);
      if (!c && s.fn !== null) {
        l ? s.f ^= de : a & Gt ? n.push(s) : bn(s) && (a & it && this.#f.add(s), Jt(s));
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
    for (var n = 0; n < t.length; n += 1) Dr(t[n], this.#c, this.#f);
  }
  capture(t, n, r = false) {
    t.v !== _e && !this.previous.has(t) && this.previous.set(t, t.v), t.f & yt || (this.current.set(t, [n, r]), Xe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    J = this;
  }
  deactivate() {
    J = null, Xe = null;
  }
  flush() {
    try {
      Ln = true, J = this, this.#p();
    } finally {
      ur = 0, Gn = null, zt = null, kn = null, Ln = false, J = null, Xe = null, jt.clear();
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
      for (const [b, [_, S]] of this.current) {
        if (f.current.has(b)) {
          var r = f.current.get(b)[0];
          if (t && _ !== r) f.current.set(b, [_, S]);
          else continue;
        }
        n.push(b);
      }
      var s = [...f.current.keys()].filter((b) => !this.current.has(b));
      if (s.length === 0) t && f.discard();
      else if (n.length > 0) {
        if (t) for (const b of this.#v) f.unskip_effect(b, (_) => {
          _.f & (it | _n) ? f.schedule(_) : f.#h([_]);
        });
        f.activate();
        var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n) Pr(o, s, a, l);
        l = /* @__PURE__ */ new Map();
        var c = [...f.current.keys()].filter((b) => this.current.has(b) ? this.current.get(b)[0] !== b : true);
        for (const b of this.#i) !(b.f & (Ue | xe | Vn)) && tr(b, c, l) && (b.f & (_n | it) ? (fe(b, be), f.schedule(b)) : f.#c.add(b));
        if (f.#t.length > 0) {
          f.apply();
          for (var v of f.#t) f.#g(v, [], []);
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
    if (J === null) {
      const t = J = new kt();
      Ln || (Ct.add(J), cn || xt(() => {
        J === t && t.flush();
      }));
    }
    return J;
  }
  apply() {
    {
      Xe = null;
      return;
    }
  }
  schedule(t) {
    if (Gn = t, t.b?.is_pending && t.f & (Gt | jn | Mr) && !(t.f & Bt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (zt !== null && n === $ && (te === null || !(te.f & ge))) return;
      if (r & (At | Ze)) {
        if (!(r & de)) return;
        n.f ^= de;
      }
    }
    this.#t.push(n);
  }
}
function oa(e) {
  var t = cn;
  cn = true;
  try {
    for (var n; ; ) {
      if (aa(), J === null) return n;
      J.flush();
    }
  } finally {
    cn = t;
  }
}
function ca() {
  try {
    Hs();
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
      if (!(r.f & (Ue | xe)) && bn(r) && (ut = /* @__PURE__ */ new Set(), Jt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && $r(r), ut?.size > 0)) {
        jt.clear();
        for (const s of ut) {
          if (s.f & (Ue | xe)) continue;
          const a = [s];
          let l = s.parent;
          for (; l !== null; ) ut.has(l) && (ut.delete(l), a.push(l)), l = l.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const c = a[o];
            c.f & (Ue | xe) || Jt(c);
          }
        }
        ut.clear();
      }
    }
    ut = null;
  }
}
function Pr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const a = s.f;
    a & ge ? Pr(s, t, n, r) : a & (_n | it) && !(a & be) && tr(s, t, r) && (fe(s, be), nr(s));
  }
}
function tr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (Vt.call(t, s)) return true;
    if (s.f & ge && tr(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function nr(e) {
  J.schedule(e);
}
function qr(e, t) {
  if (!(e.f & Ze && e.f & de)) {
    e.f & be ? t.d.push(e) : e.f & lt && t.m.push(e), fe(e, de);
    for (var n = e.first; n !== null; ) qr(n, t), n = n.next;
  }
}
function Br(e) {
  fe(e, de);
  for (var t = e.first; t !== null; ) Br(t), t = t.next;
}
function fa(e) {
  let t = 0, n = qt(0), r;
  return () => {
    ar() && (i(n), ir(() => (t === 0 && (r = gn(() => e(() => fn(n)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, fn(n));
      });
    })));
  };
}
var ua = Yt | Zt;
function va(e, t, n, r) {
  new da(e, t, n, r);
}
class da {
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
  #b = fa(() => (this.#u = qt(this.#f), () => {
    this.#u = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (a) => {
      var l = $;
      l.b = this, l.f |= zn, r(a);
    }, this.parent = $.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), this.#r = Nn(() => {
      this.#m();
    }, ua);
  }
  #p() {
    try {
      this.#a = De(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #g(t) {
    const n = this.#e.failed;
    n && (this.#i = De(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = De(() => t(this.#n)), xt(() => {
      var n = this.#c = document.createDocumentFragment(), r = Et();
      n.append(r), this.#a = this.#y(() => De(() => this.#s(r))), this.#l === 0 && (this.#n.before(n), this.#c = null, Ft(this.#t, () => {
        this.#t = null;
      }), this.#w(J));
    }));
  }
  #m() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#f = 0, this.#a = De(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#c = document.createDocumentFragment();
        cr(this.#a, t);
        const n = this.#e.pending;
        this.#t = De(() => n(this.#n));
      } else this.#w(J);
    } catch (n) {
      this.error(n);
    }
  }
  #w(t) {
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
  #y(t) {
    var n = $, r = te, s = Ee;
    ot(this.#r), ze(this.#r), Kt(this.#r.ctx);
    try {
      return kt.ensure(), t();
    } catch (a) {
      return Nr(a), null;
    } finally {
      ot(n), ze(r), Kt(s);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#w(n), this.#t && Ft(this.#t, () => {
      this.#t = null;
    }), this.#c && (this.#n.before(this.#c), this.#c = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#f += t, !(!this.#u || this.#v) && (this.#v = true, xt(() => {
      this.#v = false, this.#u && Xt(this.#u, this.#f);
    }));
  }
  get_effect_pending() {
    return this.#b(), i(this.#u);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    J?.is_fork ? (this.#a && J.skip_effect(this.#a), this.#t && J.skip_effect(this.#t), this.#i && J.skip_effect(this.#i), J.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (Te(this.#a), this.#a = null), this.#t && (Te(this.#t), this.#t = null), this.#i && (Te(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let r = this.#e.failed;
    var s = false, a = false;
    const l = () => {
      if (s) {
        na();
        return;
      }
      s = true, a && Ks(), this.#i !== null && Ft(this.#i, () => {
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
          return De(() => {
            var v = $;
            v.b = this, v.f |= zn, r(this.#n, () => c, () => l);
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
function _a(e, t, n, r) {
  const s = rr;
  var a = e.filter((_) => !_.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return;
  }
  var l = $, o = pa(), c = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((_) => _.promise)) : null;
  function v(_) {
    o();
    try {
      r(_);
    } catch (S) {
      l.f & Ue || wt(S, l);
    }
    Cn();
  }
  if (n.length === 0) {
    c.then(() => v(t.map(s)));
    return;
  }
  var f = Ur();
  function b() {
    Promise.all(n.map((_) => ha(_))).then((_) => v([...t.map(s), ..._])).catch((_) => wt(_, l)).finally(() => f());
  }
  c ? c.then(() => {
    o(), b(), Cn();
  }) : b();
}
function pa() {
  var e = $, t = te, n = Ee, r = J;
  return function(a = true) {
    ot(e), ze(t), Kt(n), a && !(e.f & Ue) && (r?.activate(), r?.apply());
  };
}
function Cn(e = true) {
  ot(null), ze(null), Kt(null), e && J?.deactivate();
}
function Ur() {
  var e = $, t = e.b, n = J, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function rr(e) {
  var t = ge | be;
  return $ !== null && ($.f |= Zt), { ctx: Ee, deps: null, effects: null, equals: Or, f: t, fn: e, reactions: null, rv: 0, v: _e, wv: 0, parent: $, ac: null };
}
function ha(e, t, n) {
  let r = $;
  r === null && qs();
  var s = void 0, a = qt(_e), l = !te, o = /* @__PURE__ */ new Map();
  return Ia(() => {
    var c = $, v = Sr();
    s = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(Cn);
    } catch (S) {
      v.reject(S), Cn();
    }
    var f = J;
    if (l) {
      if (c.f & Bt) var b = Ur();
      if (r.b.is_rendered()) o.get(f)?.reject(vt), o.delete(f);
      else {
        for (const S of o.values()) S.reject(vt);
        o.clear();
      }
      o.set(f, v);
    }
    const _ = (S, k = void 0) => {
      if (b) {
        var I = k === vt;
        b(I);
      }
      if (!(k === vt || c.f & Ue)) {
        if (f.activate(), k) a.f |= yt, Xt(a, k);
        else {
          a.f & yt && (a.f ^= yt), Xt(a, S);
          for (const [m, P] of o) {
            if (o.delete(m), m === f) break;
            P.reject(vt);
          }
        }
        f.deactivate();
      }
    };
    v.promise.then(_, (S) => _(null, S || "unknown"));
  }), Jr(() => {
    for (const c of o.values()) c.reject(vt);
  }), new Promise((c) => {
    function v(f) {
      function b() {
        f === s ? c(a) : v(s);
      }
      f.then(b, b);
    }
    v(s);
  });
}
function _t(e) {
  const t = rr(e);
  return ns(t), t;
}
function ba(e) {
  const t = rr(e);
  return t.equals = Ir, t;
}
function ga(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Te(t[n]);
  }
}
function sr(e) {
  var t, n = $, r = e.parent;
  if (!St && r !== null && r.f & (Ue | xe)) return ta(), e.v;
  ot(r);
  try {
    e.f &= ~Pt, ga(e), t = is(e);
  } finally {
    ot(n);
  }
  return t;
}
function Wr(e) {
  var t = sr(e);
  if (!e.equals(t) && (e.wv = ss(), (!J?.is_fork || e.deps === null) && (J !== null ? J.capture(e, t, true) : e.v = t, e.deps === null))) {
    fe(e, de);
    return;
  }
  St || (Xe !== null ? (ar() || J?.is_fork) && Xe.set(e, t) : er(e));
}
function ma(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(vt), t.teardown = js, t.ac = null, pn(t, 0), lr(t));
}
function zr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Jt(t);
}
let Yn = /* @__PURE__ */ new Set();
const jt = /* @__PURE__ */ new Map();
let Hr = false;
function qt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Or, rv: 0, wv: 0 };
  return n;
}
function z(e, t) {
  const n = qt(e);
  return ns(n), n;
}
function wa(e, t = false, n = true) {
  const r = qt(e);
  return t || (r.equals = Ir), r;
}
function h(e, t, n = false) {
  te !== null && (!Je || te.f & Vn) && jr() && te.f & (ge | it | _n | Vn) && (We === null || !Vt.call(We, e)) && Ys();
  let r = n ? at(t) : t;
  return Xt(e, r, kn);
}
function Xt(e, t, n = null) {
  if (!e.equals(t)) {
    jt.set(e, St ? t : e.v);
    var r = kt.ensure();
    if (r.capture(e, t), e.f & ge) {
      const s = e;
      e.f & be && sr(s), Xe === null && er(s);
    }
    e.wv = ss(), Vr(e, be, n), $ !== null && $.f & de && !($.f & (Ze | At)) && (Le === null ? Na([e]) : Le.push(e)), !r.is_fork && Yn.size > 0 && !Hr && ya();
  }
  return t;
}
function ya() {
  Hr = false;
  for (const e of Yn) e.f & de && fe(e, lt), bn(e) && Jt(e);
  Yn.clear();
}
function xa(e, t = 1) {
  var n = i(e), r = t === 1 ? n++ : n--;
  return h(e, n), r;
}
function fn(e) {
  h(e, e.v + 1);
}
function Vr(e, t, n) {
  var r = e.reactions;
  if (r !== null) for (var s = r.length, a = 0; a < s; a++) {
    var l = r[a], o = l.f, c = (o & be) === 0;
    if (c && fe(l, t), o & ge) {
      var v = l;
      Xe?.delete(v), o & Pt || (o & Be && ($ === null || !($.f & Tn)) && (l.f |= Pt), Vr(v, lt, n));
    } else if (c) {
      var f = l;
      o & it && ut !== null && ut.add(f), n !== null ? n.push(f) : nr(f);
    }
  }
}
function at(e) {
  if (typeof e != "object" || e === null || An in e) return e;
  const t = kr(e);
  if (t !== Os && t !== Is) return e;
  var n = /* @__PURE__ */ new Map(), r = Ar(e), s = z(0), a = Nt, l = (o) => {
    if (Nt === a) return o();
    var c = te, v = Nt;
    ze(null), hr(a);
    var f = o();
    return ze(c), hr(v), f;
  };
  return r && n.set("length", z(e.length)), new Proxy(e, { defineProperty(o, c, v) {
    (!("value" in v) || v.configurable === false || v.enumerable === false || v.writable === false) && Vs();
    var f = n.get(c);
    return f === void 0 ? l(() => {
      var b = z(v.value);
      return n.set(c, b), b;
    }) : h(f, v.value, true), true;
  }, deleteProperty(o, c) {
    var v = n.get(c);
    if (v === void 0) {
      if (c in o) {
        const f = l(() => z(_e));
        n.set(c, f), fn(s);
      }
    } else h(v, _e), fn(s);
    return true;
  }, get(o, c, v) {
    if (c === An) return e;
    var f = n.get(c), b = c in o;
    if (f === void 0 && (!b || on(o, c)?.writable) && (f = l(() => {
      var S = at(b ? o[c] : _e), k = z(S);
      return k;
    }), n.set(c, f)), f !== void 0) {
      var _ = i(f);
      return _ === _e ? void 0 : _;
    }
    return Reflect.get(o, c, v);
  }, getOwnPropertyDescriptor(o, c) {
    var v = Reflect.getOwnPropertyDescriptor(o, c);
    if (v && "value" in v) {
      var f = n.get(c);
      f && (v.value = i(f));
    } else if (v === void 0) {
      var b = n.get(c), _ = b?.v;
      if (b !== void 0 && _ !== _e) return { enumerable: true, configurable: true, value: _, writable: true };
    }
    return v;
  }, has(o, c) {
    if (c === An) return true;
    var v = n.get(c), f = v !== void 0 && v.v !== _e || Reflect.has(o, c);
    if (v !== void 0 || $ !== null && (!f || on(o, c)?.writable)) {
      v === void 0 && (v = l(() => {
        var _ = f ? at(o[c]) : _e, S = z(_);
        return S;
      }), n.set(c, v));
      var b = i(v);
      if (b === _e) return false;
    }
    return f;
  }, set(o, c, v, f) {
    var b = n.get(c), _ = c in o;
    if (r && c === "length") for (var S = v; S < b.v; S += 1) {
      var k = n.get(S + "");
      k !== void 0 ? h(k, _e) : S in o && (k = l(() => z(_e)), n.set(S + "", k));
    }
    if (b === void 0) (!_ || on(o, c)?.writable) && (b = l(() => z(void 0)), h(b, at(v)), n.set(c, b));
    else {
      _ = b.v !== _e;
      var I = l(() => at(v));
      h(b, I);
    }
    var m = Reflect.getOwnPropertyDescriptor(o, c);
    if (m?.set && m.set.call(f, v), !_) {
      if (r && typeof c == "string") {
        var P = n.get("length"), F = Number(c);
        Number.isInteger(F) && F >= P.v && h(P, F + 1);
      }
      fn(s);
    }
    return true;
  }, ownKeys(o) {
    i(s);
    var c = Reflect.ownKeys(o).filter((b) => {
      var _ = n.get(b);
      return _ === void 0 || _.v !== _e;
    });
    for (var [v, f] of n) f.v !== _e && !(v in o) && c.push(v);
    return c;
  }, setPrototypeOf() {
    Gs();
  } });
}
var dr, Gr, Yr, Kr;
function Ea() {
  if (dr === void 0) {
    dr = window, Gr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Yr = on(t, "firstChild").get, Kr = on(t, "nextSibling").get, fr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), fr(n) && (n.__t = void 0);
  }
}
function Et(e = "") {
  return document.createTextNode(e);
}
function Rn(e) {
  return Yr.call(e);
}
function hn(e) {
  return Kr.call(e);
}
function u(e, t) {
  return Rn(e);
}
function pt(e, t = false) {
  {
    var n = Rn(e);
    return n instanceof Comment && n.data === "" ? hn(n) : n;
  }
}
function d(e, t = 1, n = false) {
  let r = e;
  for (; t--; ) r = hn(r);
  return r;
}
function Aa(e) {
  e.textContent = "";
}
function Xr() {
  return false;
}
function ka(e, t, n) {
  return document.createElementNS(Rr, e, void 0);
}
let _r = false;
function Sa() {
  _r || (_r = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function Fn(e) {
  var t = te, n = $;
  ze(null), ot(null);
  try {
    return e();
  } finally {
    ze(t), ot(n);
  }
}
function Ma(e, t, n, r = n) {
  e.addEventListener(t, () => Fn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(true);
  } : e.__on_r = () => r(true), Sa();
}
function Ta(e) {
  $ === null && (te === null && zs(), Ws()), St && Us();
}
function Ca(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ht(e, t) {
  var n = $;
  n !== null && n.f & xe && (e |= xe);
  var r = { ctx: Ee, deps: null, nodes: null, f: e | be | Be, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  J?.register_created_effect(r);
  var s = r;
  if (e & Gt) zt !== null ? zt.push(r) : kt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Jt(r);
    } catch (l) {
      throw Te(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & Zt) && (s = s.first, e & it && e & Yt && s !== null && (s.f |= Yt));
  }
  if (s !== null && (s.parent = n, n !== null && Ca(s, n), te !== null && te.f & ge && !(e & At))) {
    var a = te;
    (a.effects ??= []).push(s);
  }
  return r;
}
function ar() {
  return te !== null && !Je;
}
function Jr(e) {
  const t = ht(jn, null);
  return fe(t, de), t.teardown = e, t;
}
function Fe(e) {
  Ta();
  var t = $.f, n = !te && (t & Ze) !== 0 && (t & Bt) === 0;
  if (n) {
    var r = Ee;
    (r.e ??= []).push(e);
  } else return Zr(e);
}
function Zr(e) {
  return ht(Gt | Ds, e);
}
function Ra(e) {
  kt.ensure();
  const t = ht(At | Zt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ft(t, () => {
      Te(t), r(void 0);
    }) : (Te(t), r(void 0));
  });
}
function Oa(e) {
  return ht(Gt, e);
}
function Ia(e) {
  return ht(_n | Zt, e);
}
function ir(e, t = 0) {
  return ht(jn | t, e);
}
function Y(e, t = [], n = [], r = []) {
  _a(r, t, n, (s) => {
    ht(jn, () => e(...s.map(i)));
  });
}
function Nn(e, t = 0) {
  var n = ht(it | t, e);
  return n;
}
function De(e) {
  return ht(Ze | Zt, e);
}
function Qr(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = St, r = te;
    pr(true), ze(null);
    try {
      t.call(null);
    } finally {
      pr(n), ze(r);
    }
  }
}
function lr(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Fn(() => {
      s.abort(vt);
    });
    var r = n.next;
    n.f & At ? n.parent = null : Te(n, t), n = r;
  }
}
function ja(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ze || Te(t), t = n;
  }
}
function Te(e, t = true) {
  var n = false;
  (t || e.f & Ls) && e.nodes !== null && e.nodes.end !== null && (Fa(e.nodes.start, e.nodes.end), n = true), fe(e, Hn), lr(e, t && !n), pn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const a of r) a.stop();
  Qr(e), e.f ^= Hn, e.f |= Ue;
  var s = e.parent;
  s !== null && s.first !== null && $r(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Fa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : hn(e);
    e.remove(), e = n;
  }
}
function $r(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ft(e, t, n = true) {
  var r = [];
  es(e, r, true);
  var s = () => {
    n && Te(e), t && t();
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
        var l = (s.f & Yt) !== 0 || (s.f & Ze) !== 0 && (e.f & it) !== 0;
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
    e.f ^= xe, e.f & de || (fe(e, be), kt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Yt) !== 0 || (n.f & Ze) !== 0;
      ts(n, s ? t : false), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (const l of a) (l.is_global || t) && l.in();
  }
}
function cr(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : hn(n);
    t.append(n), n = s;
  }
}
let Sn = false, St = false;
function pr(e) {
  St = e;
}
let te = null, Je = false;
function ze(e) {
  te = e;
}
let $ = null;
function ot(e) {
  $ = e;
}
let We = null;
function ns(e) {
  te !== null && (We === null ? We = [e] : We.push(e));
}
let Se = null, Ie = 0, Le = null;
function Na(e) {
  Le = e;
}
let rs = 1, It = 0, Nt = It;
function hr(e) {
  Nt = e;
}
function ss() {
  return ++rs;
}
function bn(e) {
  var t = e.f;
  if (t & be) return true;
  if (t & ge && (e.f &= ~Pt), t & lt) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (bn(a) && Wr(a), a.wv > e.wv) return true;
    }
    t & Be && Xe === null && fe(e, de);
  }
  return false;
}
function as(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(We !== null && Vt.call(We, e))) for (var s = 0; s < r.length; s++) {
    var a = r[s];
    a.f & ge ? as(a, t, false) : t === a && (n ? fe(a, be) : a.f & de && fe(a, lt), nr(a));
  }
}
function is(e) {
  var t = Se, n = Ie, r = Le, s = te, a = We, l = Ee, o = Je, c = Nt, v = e.f;
  Se = null, Ie = 0, Le = null, te = v & (Ze | At) ? null : e, We = null, Kt(e.ctx), Je = false, Nt = ++It, e.ac !== null && (Fn(() => {
    e.ac.abort(vt);
  }), e.ac = null);
  try {
    e.f |= Tn;
    var f = e.fn, b = f();
    e.f |= Bt;
    var _ = e.deps, S = J?.is_fork;
    if (Se !== null) {
      var k;
      if (S || pn(e, Ie), _ !== null && Ie > 0) for (_.length = Ie + Se.length, k = 0; k < Se.length; k++) _[Ie + k] = Se[k];
      else e.deps = _ = Se;
      if (ar() && e.f & Be) for (k = Ie; k < _.length; k++) (_[k].reactions ??= []).push(e);
    } else !S && _ !== null && Ie < _.length && (pn(e, Ie), _.length = Ie);
    if (jr() && Le !== null && !Je && _ !== null && !(e.f & (ge | lt | be))) for (k = 0; k < Le.length; k++) as(Le[k], e);
    if (s !== null && s !== e) {
      if (It++, s.deps !== null) for (let I = 0; I < n; I += 1) s.deps[I].rv = It;
      if (t !== null) for (const I of t) I.rv = It;
      Le !== null && (r === null ? r = Le : r.push(...Le));
    }
    return e.f & yt && (e.f ^= yt), b;
  } catch (I) {
    return Nr(I);
  } finally {
    e.f ^= Tn, Se = t, Ie = n, Le = r, te = s, We = a, Kt(l), Je = o, Nt = c;
  }
}
function La(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Ts.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & ge && (Se === null || !Vt.call(Se, t))) {
    var a = t;
    a.f & Be && (a.f ^= Be, a.f &= ~Pt), a.v !== _e && er(a), ma(a), pn(a, 0);
  }
}
function pn(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) La(e, n[r]);
}
function Jt(e) {
  var t = e.f;
  if (!(t & Ue)) {
    fe(e, de);
    var n = $, r = Sn;
    $ = e, Sn = true;
    try {
      t & (it | Mr) ? ja(e) : lr(e), Qr(e);
      var s = is(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = rs;
      var a;
      Ms && sa && e.f & be && e.deps;
    } finally {
      Sn = r, $ = n;
    }
  }
}
async function Da() {
  await Promise.resolve(), oa();
}
function i(e) {
  var t = e.f, n = (t & ge) !== 0;
  if (te !== null && !Je) {
    var r = $ !== null && ($.f & Ue) !== 0;
    if (!r && (We === null || !Vt.call(We, e))) {
      var s = te.deps;
      if (te.f & Tn) e.rv < It && (e.rv = It, Se === null && s !== null && s[Ie] === e ? Ie++ : Se === null ? Se = [e] : Se.push(e));
      else {
        (te.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [te] : Vt.call(a, te) || a.push(te);
      }
    }
  }
  if (St && jt.has(e)) return jt.get(e);
  if (n) {
    var l = e;
    if (St) {
      var o = l.v;
      return (!(l.f & de) && l.reactions !== null || os(l)) && (o = sr(l)), jt.set(l, o), o;
    }
    var c = (l.f & Be) === 0 && !Je && te !== null && (Sn || (te.f & Be) !== 0), v = (l.f & Bt) === 0;
    bn(l) && (c && (l.f |= Be), Wr(l)), c && !v && (zr(l), ls(l));
  }
  if (Xe?.has(e)) return Xe.get(e);
  if (e.f & yt) throw e.v;
  return e.v;
}
function ls(e) {
  if (e.f |= Be, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & ge && !(t.f & Be) && (zr(t), ls(t));
}
function os(e) {
  if (e.v === _e) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (jt.has(t) || t.f & ge && os(t)) return true;
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
const Pa = ["touchstart", "touchmove"];
function qa(e) {
  return Pa.includes(e);
}
const nn = Symbol("events"), cs = /* @__PURE__ */ new Set(), Kn = /* @__PURE__ */ new Set();
function Ba(e, t, n, r = {}) {
  function s(a) {
    if (r.capture || Xn.call(t, a), !a.cancelBubble) return Fn(() => n?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Lt(e, t, n, r, s) {
  var a = { capture: r, passive: s }, l = Ba(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Jr(() => {
    t.removeEventListener(e, l, a);
  });
}
function ae(e, t, n) {
  (t[nn] ??= {})[e] = n;
}
function Qt(e) {
  for (var t = 0; t < e.length; t++) cs.add(e[t]);
  for (var n of Kn) n(e);
}
let br = null;
function Xn(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], a = s[0] || e.target;
  br = e;
  var l = 0, o = br === e && e[nn];
  if (o) {
    var c = s.indexOf(o);
    if (c !== -1 && (t === document || t === window)) {
      e[nn] = t;
      return;
    }
    var v = s.indexOf(t);
    if (v === -1) return;
    c <= v && (l = c);
  }
  if (a = s[l] || e.target, a !== t) {
    Cs(e, "currentTarget", { configurable: true, get() {
      return a || n;
    } });
    var f = te, b = $;
    ze(null), ot(null);
    try {
      for (var _, S = []; a !== null; ) {
        var k = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var I = a[nn]?.[r];
          I != null && (!a.disabled || e.target === a) && I.call(a, e);
        } catch (m) {
          _ ? S.push(m) : _ = m;
        }
        if (e.cancelBubble || k === t || k === null) break;
        a = k;
      }
      if (_) {
        for (let m of S) queueMicrotask(() => {
          throw m;
        });
        throw _;
      }
    } finally {
      e[nn] = t, delete e.currentTarget, ze(f), ot(b);
    }
  }
}
const Ua = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Wa(e) {
  return Ua?.createHTML(e) ?? e;
}
function za(e) {
  var t = ka("template");
  return t.innerHTML = Wa(e.replaceAll("<!>", "<!---->")), t.content;
}
function Jn(e, t) {
  var n = $;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function L(e, t) {
  var n = (t & $s) !== 0, r = (t & ea) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = za(a ? e : "<!>" + e), n || (s = Rn(s)));
    var l = r || Gr ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var o = Rn(l), c = l.lastChild;
      Jn(o, c);
    } else Jn(l, l);
    return l;
  };
}
function On() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Et();
  return e.append(t, n), Jn(t, n), e;
}
function O(e, t) {
  e !== null && e.before(t);
}
function A(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ha(e, t) {
  return Va(e, t);
}
const En = /* @__PURE__ */ new Map();
function Va(e, { target: t, anchor: n, props: r = {}, events: s, context: a, intro: l = true, transformError: o }) {
  Ea();
  var c = void 0, v = Ra(() => {
    var f = n ?? t.appendChild(Et());
    va(f, { pending: () => {
    } }, (S) => {
      Qe({});
      var k = Ee;
      a && (k.c = a), s && (r.$$events = s), c = e(S, r) || {}, $e();
    }, o);
    var b = /* @__PURE__ */ new Set(), _ = (S) => {
      for (var k = 0; k < S.length; k++) {
        var I = S[k];
        if (!b.has(I)) {
          b.add(I);
          var m = qa(I);
          for (const g of [t, document]) {
            var P = En.get(g);
            P === void 0 && (P = /* @__PURE__ */ new Map(), En.set(g, P));
            var F = P.get(I);
            F === void 0 ? (g.addEventListener(I, Xn, { passive: m }), P.set(I, 1)) : P.set(I, F + 1);
          }
        }
      }
    };
    return _(In(cs)), Kn.add(_), () => {
      for (var S of b) for (const m of [t, document]) {
        var k = En.get(m), I = k.get(S);
        --I == 0 ? (m.removeEventListener(S, Xn), k.delete(S), k.size === 0 && En.delete(m)) : k.set(S, I);
      }
      Kn.delete(_), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Ga.set(c, v), c;
}
let Ga = /* @__PURE__ */ new WeakMap();
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
        o && (Te(o.effect), this.#e.delete(l));
      }
      for (const [a, l] of this.#o) {
        if (a === n || this.#s.has(a)) continue;
        const o = () => {
          if (Array.from(this.#n.values()).includes(a)) {
            var v = document.createDocumentFragment();
            cr(l, v), v.append(Et()), this.#e.set(a, { effect: l, fragment: v });
          } else Te(l);
          this.#s.delete(a), this.#o.delete(a);
        };
        this.#r || !r ? (this.#s.add(a), Ft(l, o, false)) : o();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (Te(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = J, s = Xr();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var a = document.createDocumentFragment(), l = Et();
      a.append(l), this.#e.set(t, { effect: De(() => n(l)), fragment: a });
    } else this.#o.set(t, De(() => n(this.anchor)));
    if (this.#n.set(r, t), s) {
      for (const [o, c] of this.#o) o === t ? r.unskip_effect(c) : r.skip_effect(c);
      for (const [o, c] of this.#e) o === t ? r.unskip_effect(c.effect) : r.skip_effect(c.effect);
      r.oncommit(this.#a), r.ondiscard(this.#t);
    } else this.#a(r);
  }
}
function re(e, t, n = false) {
  var r = new fs(e), s = n ? Yt : 0;
  function a(l, o) {
    r.ensure(l, o);
  }
  Nn(() => {
    var l = false;
    t((o, c = 0) => {
      l = true, a(c, o);
    }), l || a(-1, null);
  }, s);
}
const Ya = Symbol("NaN");
function Ka(e, t, n) {
  var r = new fs(e);
  Nn(() => {
    var s = t();
    s !== s && (s = Ya), r.ensure(s, n);
  });
}
function Pe(e, t) {
  return t;
}
function Xa(e, t, n) {
  for (var r = [], s = t.length, a, l = t.length, o = 0; o < s; o++) {
    let b = t[o];
    Ft(b, () => {
      if (a) {
        if (a.pending.delete(b), a.done.add(b), a.pending.size === 0) {
          var _ = e.outrogroups;
          Zn(e, In(a.done)), _.delete(a), _.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var c = r.length === 0 && n !== null;
    if (c) {
      var v = n, f = v.parentNode;
      Aa(f), f.append(v), e.items.clear();
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
      a.f |= st;
      const l = document.createDocumentFragment();
      cr(a, l);
    } else Te(t[s], n);
  }
}
var gr;
function qe(e, t, n, r, s, a = null) {
  var l = e, o = /* @__PURE__ */ new Map(), c = (t & Cr) !== 0;
  if (c) {
    var v = e;
    l = v.appendChild(Et());
  }
  var f = null, b = ba(() => {
    var g = n();
    return Ar(g) ? g : g == null ? [] : In(g);
  }), _, S = /* @__PURE__ */ new Map(), k = true;
  function I(g) {
    F.effect.f & Ue || (F.pending.delete(g), F.fallback = f, Ja(F, _, l, t, r), f !== null && (_.length === 0 ? f.f & st ? (f.f ^= st, rn(f, null, l)) : or(f) : Ft(f, () => {
      f = null;
    })));
  }
  function m(g) {
    F.pending.delete(g);
  }
  var P = Nn(() => {
    _ = i(b);
    for (var g = _.length, M = /* @__PURE__ */ new Set(), D = J, j = Xr(), N = 0; N < g; N += 1) {
      var V = _[N], X = r(V, N), B = k ? null : o.get(X);
      B ? (B.v && Xt(B.v, V), B.i && Xt(B.i, N), j && D.unskip_effect(B.e)) : (B = Za(o, k ? l : gr ??= Et(), V, X, N, s, t, n), k || (B.e.f |= st), o.set(X, B)), M.add(X);
    }
    if (g === 0 && a && !f && (k ? f = De(() => a(l)) : (f = De(() => a(gr ??= Et())), f.f |= st)), g > M.size && Bs(), !k) if (S.set(D, M), j) {
      for (const [ne, T] of o) M.has(ne) || D.skip_effect(T.e);
      D.oncommit(I), D.ondiscard(m);
    } else I(D);
    i(b);
  }), F = { effect: P, items: o, pending: S, outrogroups: null, fallback: f };
  k = false;
}
function tn(e) {
  for (; e !== null && !(e.f & Ze); ) e = e.next;
  return e;
}
function Ja(e, t, n, r, s) {
  var a = (r & Zs) !== 0, l = t.length, o = e.items, c = tn(e.effect.first), v, f = null, b, _ = [], S = [], k, I, m, P;
  if (a) for (P = 0; P < l; P += 1) k = t[P], I = s(k, P), m = o.get(I).e, m.f & st || (m.nodes?.a?.measure(), (b ??= /* @__PURE__ */ new Set()).add(m));
  for (P = 0; P < l; P += 1) {
    if (k = t[P], I = s(k, P), m = o.get(I).e, e.outrogroups !== null) for (const B of e.outrogroups) B.pending.delete(m), B.done.delete(m);
    if (m.f & xe && (or(m), a && (m.nodes?.a?.unfix(), (b ??= /* @__PURE__ */ new Set()).delete(m))), m.f & st) if (m.f ^= st, m === c) rn(m, null, n);
    else {
      var F = f ? f.next : c;
      m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), gt(e, f, m), gt(e, m, F), rn(m, F, n), f = m, _ = [], S = [], c = tn(f.next);
      continue;
    }
    if (m !== c) {
      if (v !== void 0 && v.has(m)) {
        if (_.length < S.length) {
          var g = S[0], M;
          f = g.prev;
          var D = _[0], j = _[_.length - 1];
          for (M = 0; M < _.length; M += 1) rn(_[M], g, n);
          for (M = 0; M < S.length; M += 1) v.delete(S[M]);
          gt(e, D.prev, j.next), gt(e, f, D), gt(e, j, g), c = g, f = j, P -= 1, _ = [], S = [];
        } else v.delete(m), rn(m, c, n), gt(e, m.prev, m.next), gt(e, m, f === null ? e.effect.first : f.next), gt(e, f, m), f = m;
        continue;
      }
      for (_ = [], S = []; c !== null && c !== m; ) (v ??= /* @__PURE__ */ new Set()).add(c), S.push(c), c = tn(c.next);
      if (c === null) continue;
    }
    m.f & st || _.push(m), f = m, c = tn(m.next);
  }
  if (e.outrogroups !== null) {
    for (const B of e.outrogroups) B.pending.size === 0 && (Zn(e, In(B.done)), e.outrogroups?.delete(B));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || v !== void 0) {
    var N = [];
    if (v !== void 0) for (m of v) m.f & xe || N.push(m);
    for (; c !== null; ) !(c.f & xe) && c !== e.fallback && N.push(c), c = tn(c.next);
    var V = N.length;
    if (V > 0) {
      var X = r & Cr && l === 0 ? n : null;
      if (a) {
        for (P = 0; P < V; P += 1) N[P].nodes?.a?.measure();
        for (P = 0; P < V; P += 1) N[P].nodes?.a?.fix();
      }
      Xa(e, N, X);
    }
  }
  a && xt(() => {
    if (b !== void 0) for (m of b) m.nodes?.a?.apply();
  });
}
function Za(e, t, n, r, s, a, l, o) {
  var c = l & Xs ? l & Qs ? qt(n) : wa(n, false, false) : null, v = l & Js ? qt(s) : null;
  return { v: c, i: v, e: De(() => (a(t, c ?? n, v ?? s, o), () => {
    e.delete(r);
  })) };
}
function rn(e, t, n) {
  if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, a = t && !(t.f & st) ? t.nodes.start : n; r !== null; ) {
    var l = hn(r);
    if (a.before(r), r === s) return;
    r = l;
  }
}
function gt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const mr = [...` 	
\r\f\xA0\v\uFEFF`];
function Qa(e, t, n) {
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
function $a(e, t) {
  return e == null ? null : String(e);
}
function rt(e, t, n, r, s, a) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var o = Qa(n, r, a);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (a && s !== a) for (var c in a) {
    var v = !!a[c];
    (s == null || v !== !!s[c]) && e.classList.toggle(c, v);
  }
  return a;
}
function Ht(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var a = $a(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return r;
}
const ei = Symbol("is custom element"), ti = Symbol("is html");
function Me(e, t, n, r) {
  var s = ni(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Ps] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ri(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ni(e) {
  return e.__attributes ??= { [ei]: e.nodeName.includes("-"), [ti]: e.namespaceURI === Rr };
}
var wr = /* @__PURE__ */ new Map();
function ri(e) {
  var t = e.getAttribute("is") || e.nodeName, n = wr.get(t);
  if (n) return n;
  wr.set(t, n = []);
  for (var r, s = e, a = Element.prototype; a !== s; ) {
    r = Rs(s);
    for (var l in r) r[l].set && n.push(l);
    s = kr(s);
  }
  return n;
}
function us(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Ma(e, "input", async (s) => {
    var a = s ? e.defaultValue : e.value;
    if (a = Dn(e) ? Pn(a) : a, n(a), J !== null && r.add(J), await Da(), a !== (a = t())) {
      var l = e.selectionStart, o = e.selectionEnd, c = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var v = e.value.length;
        l === o && o === c && v > c ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = l, e.selectionEnd = Math.min(o, v));
      }
    }
  }), gn(t) == null && e.value && (n(Dn(e) ? Pn(e.value) : e.value), J !== null && r.add(J)), ir(() => {
    var s = t();
    if (e === document.activeElement) {
      var a = J;
      if (r.has(a)) return;
    }
    Dn(e) && s === Pn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Dn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Pn(e) {
  return e === "" ? null : +e;
}
function yr(e, t) {
  return e === t || e?.[An] === t;
}
function Dt(e = {}, t, n, r) {
  var s = Ee.r, a = $;
  return Oa(() => {
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
function si(e, t, n, r) {
  var s = r, a = true, l = () => (a && (a = false, s = r), s), o;
  o = e[t], o === void 0 && r !== void 0 && (o = l());
  var c;
  return c = () => {
    var v = e[t];
    return v === void 0 ? l() : (a = true, v);
  }, c;
}
function vs(e) {
  Ee === null && Tr(), Fe(() => {
    const t = gn(e);
    if (typeof t == "function") return t;
  });
}
function ds(e) {
  Ee === null && Tr(), vs(() => () => gn(e));
}
const ai = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ai);
function ii() {
  H._start();
}
function li(e) {
  try {
    const s = H.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, H.__wbindgen_export), l = He;
    H.decode_wav(s, a, l);
    var t = le().getInt32(s + 4 * 0, true), n = le().getInt32(s + 4 * 1, true), r = le().getInt32(s + 4 * 2, true);
    if (r) throw je(n);
    return je(t);
  } finally {
    H.__wbindgen_add_to_stack_pointer(16);
  }
}
function oi(e) {
  let t, n;
  try {
    const a = H.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, H.__wbindgen_export), o = He;
    H.detect_format(a, l, o);
    var r = le().getInt32(a + 4 * 0, true), s = le().getInt32(a + 4 * 1, true);
    return t = r, n = s, an(r, s);
  } finally {
    H.__wbindgen_add_to_stack_pointer(16), H.__wbindgen_export3(t, n, 1);
  }
}
function ci(e, t) {
  try {
    const a = H.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, H.__wbindgen_export), o = He;
    H.entropy_blocks(a, l, o, t);
    var n = le().getInt32(a + 4 * 0, true), r = le().getInt32(a + 4 * 1, true), s = pi(n, r).slice();
    return H.__wbindgen_export3(n, r * 4, 4), s;
  } finally {
    H.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e, t) {
  try {
    const a = H.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, H.__wbindgen_export), o = He;
    H.extract_strings(a, l, o, t);
    var n = le().getInt32(a + 4 * 0, true), r = le().getInt32(a + 4 * 1, true), s = le().getInt32(a + 4 * 2, true);
    if (s) throw je(r);
    return je(n);
  } finally {
    H.__wbindgen_add_to_stack_pointer(16);
  }
}
function ui(e, t, n) {
  try {
    const l = H.__wbindgen_add_to_stack_pointer(-16), o = Ut(e, H.__wbindgen_export), c = He;
    H.hex_rows(l, o, c, t, n);
    var r = le().getInt32(l + 4 * 0, true), s = le().getInt32(l + 4 * 1, true), a = hi(r, s).slice();
    return H.__wbindgen_export3(r, s * 4, 4), a;
  } finally {
    H.__wbindgen_add_to_stack_pointer(16);
  }
}
function vi(e) {
  try {
    const s = H.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, H.__wbindgen_export), l = He;
    H.parse_elf(s, a, l);
    var t = le().getInt32(s + 4 * 0, true), n = le().getInt32(s + 4 * 1, true), r = le().getInt32(s + 4 * 2, true);
    if (r) throw je(n);
    return je(t);
  } finally {
    H.__wbindgen_add_to_stack_pointer(16);
  }
}
function di(e) {
  try {
    const s = H.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, H.__wbindgen_export), l = He;
    H.parse_gba(s, a, l);
    var t = le().getInt32(s + 4 * 0, true), n = le().getInt32(s + 4 * 1, true), r = le().getInt32(s + 4 * 2, true);
    if (r) throw je(n);
    return je(t);
  } finally {
    H.__wbindgen_add_to_stack_pointer(16);
  }
}
function _s() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(an(t, n));
    return mt(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(Wt(n)), s = xr(r, H.__wbindgen_export, H.__wbindgen_export2), a = He;
    le().setInt32(t + 4, a, true), le().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(an(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let r, s;
    try {
      r = t, s = n, console.error(an(t, n));
    } finally {
      H.__wbindgen_export3(r, s, 1);
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
    Wt(t)[je(n)] = je(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    Wt(t)[n >>> 0] = je(r);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const r = Wt(n).stack, s = xr(r, H.__wbindgen_export, H.__wbindgen_export2), a = He;
    le().setInt32(t + 4, a, true), le().setInt32(t + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return mt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = an(t, n);
    return mt(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return mt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = Wt(t);
    return mt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    je(t);
  } } };
}
function mt(e) {
  vn === dt.length && dt.push(dt.length + 1);
  const t = vn;
  return vn = dt[t], dt[t] = e, t;
}
function _i(e) {
  e < 1028 || (dt[e] = vn, vn = e);
}
function pi(e, t) {
  return e = e >>> 0, bi().subarray(e / 4, e / 4 + t);
}
function hi(e, t) {
  e = e >>> 0;
  const n = le(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(je(n.getUint32(s, true)));
  return r;
}
let Rt = null;
function le() {
  return (Rt === null || Rt.buffer.detached === true || Rt.buffer.detached === void 0 && Rt.buffer !== H.memory.buffer) && (Rt = new DataView(H.memory.buffer)), Rt;
}
let sn = null;
function bi() {
  return (sn === null || sn.byteLength === 0) && (sn = new Float32Array(H.memory.buffer)), sn;
}
function an(e, t) {
  return mi(e >>> 0, t);
}
let ln = null;
function un() {
  return (ln === null || ln.byteLength === 0) && (ln = new Uint8Array(H.memory.buffer)), ln;
}
function Wt(e) {
  return dt[e];
}
let dt = new Array(1024).fill(void 0);
dt.push(void 0, null, true, false);
let vn = dt.length;
function Ut(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return un().set(e, n / 1), He = e.length, n;
}
function xr(e, t, n) {
  if (n === void 0) {
    const o = dn.encode(e), c = t(o.length, 1) >>> 0;
    return un().subarray(c, c + o.length).set(o), He = o.length, c;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const a = un();
  let l = 0;
  for (; l < r; l++) {
    const o = e.charCodeAt(l);
    if (o > 127) break;
    a[s + l] = o;
  }
  if (l !== r) {
    l !== 0 && (e = e.slice(l)), s = n(s, r, r = l + e.length * 3, 1) >>> 0;
    const o = un().subarray(s + l, s + r), c = dn.encodeInto(e, o);
    l += c.written, s = n(s, r, l, 1) >>> 0;
  }
  return He = l, s;
}
function je(e) {
  const t = Wt(e);
  return _i(e), t;
}
let Mn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Mn.decode();
const gi = 2146435072;
let qn = 0;
function mi(e, t) {
  return qn += t, qn >= gi && (Mn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Mn.decode(), qn = t), Mn.decode(un().subarray(e, e + t));
}
const dn = new TextEncoder();
"encodeInto" in dn || (dn.encodeInto = function(e, t) {
  const n = dn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let He = 0, H;
function ps(e, t) {
  return H = e.exports, Rt = null, sn = null, ln = null, H.__wbindgen_start(), H;
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
  if (H !== void 0) return H;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = _s();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return ps(n);
}
async function hs(e) {
  if (H !== void 0) return H;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = _s();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await wi(await e, t);
  return ps(n);
}
const xi = Object.freeze(Object.defineProperty({ __proto__: null, _start: ii, decode_wav: li, default: hs, detect_format: oi, entropy_blocks: ci, extract_strings: fi, hex_rows: ui, initSync: yi, parse_elf: vi, parse_gba: di }, Symbol.toStringTag, { value: "Module" }));
let Bn = null;
function mn() {
  return Bn || (Bn = hs()), Bn.then(() => xi);
}
const Ei = "scry-theme";
function bs() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ai() {
  const e = bs() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(Ei, e);
  } catch {
  }
  return e;
}
const Qn = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Un = 65536, Wn = Qn.length * 4;
function gs() {
  const n = 84 + Wn, r = new ArrayBuffer(n), s = new DataView(r), a = new Uint8Array(r);
  a[0] = 127, a[1] = 69, a[2] = 76, a[3] = 70, a[4] = 1, a[5] = 1, a[6] = 1, s.setUint16(16, 2, true), s.setUint16(18, 243, true), s.setUint32(20, 1, true), s.setUint32(24, Un, true), s.setUint32(28, 52, true), s.setUint32(32, 0, true), s.setUint32(36, 0, true), s.setUint16(40, 52, true), s.setUint16(42, 32, true), s.setUint16(44, 1, true), s.setUint16(46, 0, true), s.setUint16(48, 0, true), s.setUint16(50, 0, true), s.setUint32(52, 1, true), s.setUint32(56, 84, true), s.setUint32(60, Un, true), s.setUint32(64, Un, true), s.setUint32(68, Wn, true), s.setUint32(72, Wn, true), s.setUint32(76, 5, true), s.setUint32(80, 4096, true);
  for (let l = 0; l < Qn.length; l++) s.setUint32(84 + l * 4, Qn[l], true);
  return new Uint8Array(r);
}
const ms = "demo-rv32-spi-i2c.elf", Er = 64 * 1024 * 1024;
function $n(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function ws(e) {
  if (!e) throw new Error("no file");
  if (e.size > Er) throw new Error(`file too large (${$n(e.size)} > ${$n(Er)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var ki = L('<span class="bar svelte-1i6c60u"></span>'), Si = L('<span class="bar shimmer svelte-1i6c60u"></span>'), Mi = L('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Ti = L('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Ci = L('<p class="loading svelte-1i6c60u"> </p>'), Ri = L('<p class="err svelte-1i6c60u"> </p>'), Oi = L('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Ii(e, t) {
  Qe(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let r = z(false), s = z(""), a = z(at([])), l = z(""), o = z(at({}));
  async function c(T) {
    h(s, "");
    try {
      const q = await ws(T);
      t.onfile?.(q);
    } catch (q) {
      h(s, q.message || String(q), true);
    }
  }
  function v(T) {
    T.preventDefault(), h(r, false);
    const q = T.dataTransfer?.files?.[0];
    q && c(q);
  }
  function f(T) {
    T.preventDefault(), h(r, true);
  }
  function b() {
    h(r, false);
  }
  function _(T) {
    const q = T.target.files?.[0];
    q && c(q);
  }
  async function S(T) {
    if (!n.test(T)) {
      h(s, `sample blocked: bad name "${T}"`);
      return;
    }
    h(s, ""), h(l, `fetching ${T}\u2026`);
    try {
      const q = await fetch(`../v1/samples/${encodeURIComponent(T)}`);
      if (!q.ok) {
        h(s, `fetch failed: ${q.status}`), h(l, "");
        return;
      }
      h(l, `reading ${T}\u2026`);
      const C = new Uint8Array(await q.arrayBuffer());
      h(l, ""), t.onfile?.({ name: T, bytes: C });
    } catch (q) {
      h(s, String(q), true), h(l, "");
    }
  }
  function k() {
    h(s, ""), t.onfile?.({ name: ms, bytes: gs() });
  }
  Fe(() => {
    let T = false;
    return (async () => {
      try {
        const q = await fetch("../v1/samples/manifest.json");
        if (!q.ok) return;
        const C = await q.json();
        if (T || !Array.isArray(C)) return;
        h(a, C, true);
        const ee = await mn();
        if (T) return;
        await Promise.all(C.map(async (p) => {
          if (n.test(p.file)) try {
            const y = await fetch(`../v1/samples/${encodeURIComponent(p.file)}`);
            if (!y.ok) return;
            const x = new Uint8Array(await y.arrayBuffer());
            if (T) return;
            const E = Math.max(1, Math.ceil(x.length / 12)), w = ee.entropy_blocks(x, E);
            h(o, { ...i(o), [p.file]: Array.from(w) }, true);
          } catch {
          }
        }));
      } catch {
      }
    })(), () => {
      T = true;
    };
  });
  var I = Oi(), m = u(I);
  let P;
  var F = d(u(m), 4), g = u(F), M = u(g), D = d(g, 2), j = d(F, 2);
  {
    var N = (T) => {
      var q = Ti(), C = d(u(q), 2);
      qe(C, 21, () => i(a), Pe, (y, x) => {
        var E = Mi(), w = u(E), U = u(w), K = d(w, 2), Q = u(K);
        {
          var ie = (oe) => {
            var Z = On(), ve = pt(Z);
            qe(ve, 17, () => i(o)[i(x).file], Pe, (Ae, Ve) => {
              var Ce = ki();
              Y((ue) => Ht(Ce, `height: ${ue ?? ""}px`), [() => Math.max(2, i(Ve) * 14)]), O(Ae, Ce);
            }), O(oe, Z);
          }, ce = (oe) => {
            var Z = On(), ve = pt(Z);
            qe(ve, 16, () => Array(12), Pe, (Ae, Ve, Ce) => {
              var ue = Si();
              Ht(ue, `animation-delay: ${Ce * 40}ms`), O(Ae, ue);
            }), O(oe, Z);
          };
          re(Q, (oe) => {
            i(o)[i(x).file] ? oe(ie) : oe(ce, -1);
          });
        }
        Y(() => {
          Me(E, "title", i(x).insns > 0 ? `${i(x).desc} \u2014 ${i(x).insns} instructions` : i(x).desc), A(U, i(x).file);
        }), ae("click", E, () => S(i(x).file)), O(y, E);
      });
      var ee = d(C, 2), p = u(ee);
      Y((y) => A(p, y), [() => i(a).map((y) => `${y.file} \u2014 ${y.desc}`).join("  \xB7  ")]), O(T, q);
    };
    re(j, (T) => {
      i(a).length && T(N);
    });
  }
  var V = d(j, 2);
  {
    var X = (T) => {
      var q = Ci(), C = u(q);
      Y(() => A(C, i(l))), O(T, q);
    };
    re(V, (T) => {
      i(l) && T(X);
    });
  }
  var B = d(V, 2);
  {
    var ne = (T) => {
      var q = Ri(), C = u(q);
      Y(() => A(C, i(s))), O(T, q);
    };
    re(B, (T) => {
      i(s) && T(ne);
    });
  }
  Y(() => P = rt(m, 1, "zone svelte-1i6c60u", null, P, { over: i(r) })), Lt("drop", m, v), Lt("dragover", m, f), Lt("dragleave", m, b), ae("change", M, _), ae("click", D, k), O(e, I), $e();
}
Qt(["change", "click"]);
var ji = L('<span class="ct svelte-etynpr"> </span>'), Fi = L('<span class="ct svelte-etynpr"> </span>'), Ni = L('<span class="ct svelte-etynpr"> </span>'), Li = L('<span class="ct svelte-etynpr"> </span>'), Di = L("<button> <!> <!> <!> <!></button>"), Pi = L('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), qi = L('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Bi = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Ui = L('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Wi = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), zi = L('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Hi = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Vi = L('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Gi = L('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), Yi = L('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Ki(e, t) {
  Qe(t, true);
  let n = z("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let s = z(""), a = _t(() => {
    if (!t.strings) return [];
    const F = i(s).trim().toLowerCase();
    return F ? t.strings.filter((g) => g.text.toLowerCase().includes(F)) : t.strings;
  });
  const l = 80, o = _t(() => t.report ? Math.max(1, ...t.report.sections.map((F) => Number(F.size) || 0)) : 1);
  function c(F) {
    return "0x" + Number(F).toString(16).toUpperCase().padStart(8, "0");
  }
  var v = Yi(), f = u(v);
  qe(f, 21, () => r, Pe, (F, g) => {
    var M = _t(() => Ns(i(g), 2));
    let D = () => i(M)[0], j = () => i(M)[1];
    var N = Di();
    let V;
    var X = u(N), B = d(X);
    {
      var ne = (x) => {
        var E = ji(), w = u(E);
        Y(() => A(w, t.report.sections.length)), O(x, E);
      };
      re(B, (x) => {
        D() === "sections" && x(ne);
      });
    }
    var T = d(B, 2);
    {
      var q = (x) => {
        var E = Fi(), w = u(E);
        Y(() => A(w, t.report.segments.length)), O(x, E);
      };
      re(T, (x) => {
        D() === "segments" && x(q);
      });
    }
    var C = d(T, 2);
    {
      var ee = (x) => {
        var E = Ni(), w = u(E);
        Y(() => A(w, t.report.symbols.length)), O(x, E);
      };
      re(C, (x) => {
        D() === "symbols" && x(ee);
      });
    }
    var p = d(C, 2);
    {
      var y = (x) => {
        var E = Li(), w = u(E);
        Y(() => A(w, t.strings.length)), O(x, E);
      };
      re(p, (x) => {
        D() === "strings" && t.strings && x(y);
      });
    }
    Y(() => {
      V = rt(N, 1, "tab svelte-etynpr", null, V, { active: i(n) === D() }), A(X, `${j() ?? ""} `);
    }), ae("click", N, () => h(n, D(), true)), O(F, N);
  });
  var b = d(f, 2), _ = u(b);
  {
    var S = (F) => {
      var g = Pi(), M = d(u(g), 2), D = u(M), j = d(M, 4), N = u(j), V = d(j, 4), X = u(V), B = d(V, 4), ne = u(B), T = d(B, 4), q = u(T), C = d(T, 4), ee = u(C), p = d(C, 4), y = u(p), x = d(p, 4), E = u(x), w = d(x, 4), U = u(w);
      Y(() => {
        A(D, t.report.summary.class), A(N, t.report.summary.data), A(X, t.report.summary.osabi), A(ne, t.report.summary.kind), A(q, t.report.summary.machine), A(ee, t.report.summary.entry), A(y, t.report.summary.n_sections), A(E, t.report.summary.n_segments), A(U, t.report.summary.n_symbols);
      }), O(F, g);
    }, k = (F) => {
      var g = Bi(), M = d(u(g));
      qe(M, 21, () => t.report.sections, Pe, (D, j) => {
        var N = qi(), V = u(N), X = u(V), B = d(V), ne = u(B), T = d(B), q = u(T), C = d(T), ee = u(C), p = d(C), y = u(p), x = d(p), E = u(x), w = d(x), U = u(w), K = d(w), Q = u(K);
        Y((ie) => {
          Me(N, "title", `Jump to offset ${i(j).offset ?? ""} in HEX`), A(X, i(j).idx), A(ne, i(j).name || "\u2014"), A(q, i(j).kind), A(ee, i(j).addr), A(y, i(j).offset), A(E, i(j).size), A(U, i(j).flags), Ht(Q, `width: ${ie ?? ""}px`);
        }, [() => Math.max(1, Number(i(j).size) / i(o) * l)]), ae("click", N, () => t.onJumpToOffset?.(parseInt(i(j).offset, 16))), O(D, N);
      }), O(F, g);
    }, I = (F) => {
      var g = Wi(), M = d(u(g));
      qe(M, 21, () => t.report.segments, Pe, (D, j) => {
        var N = Ui(), V = u(N), X = u(V), B = d(V), ne = u(B), T = d(B), q = u(T), C = d(T), ee = u(C), p = d(C), y = u(p), x = d(p), E = u(x), w = d(x), U = u(w);
        Y(() => {
          Me(N, "title", `Jump to offset ${i(j).offset ?? ""} in HEX`), A(X, i(j).idx), A(ne, i(j).kind), A(q, i(j).vaddr), A(ee, i(j).offset), A(y, i(j).filesz), A(E, i(j).memsz), A(U, i(j).flags);
        }), ae("click", N, () => t.onJumpToOffset?.(parseInt(i(j).offset, 16))), O(D, N);
      }), O(F, g);
    }, m = (F) => {
      var g = Hi(), M = d(u(g));
      qe(M, 21, () => t.report.symbols, Pe, (D, j) => {
        var N = zi(), V = u(N), X = u(V), B = d(V), ne = u(B), T = d(B), q = u(T), C = d(T), ee = u(C), p = d(C), y = u(p);
        Y(() => {
          A(X, i(j).name), A(ne, i(j).bind), A(q, i(j).kind), A(ee, i(j).value), A(y, i(j).size);
        }), O(D, N);
      }), O(F, g);
    }, P = (F) => {
      var g = Gi(), M = pt(g), D = u(M), j = d(D, 2), N = u(j), V = d(M, 2), X = d(u(V));
      qe(X, 21, () => i(a), Pe, (B, ne) => {
        var T = Vi(), q = u(T), C = u(q), ee = d(q), p = u(ee);
        Y((y, x) => {
          Me(T, "title", `Jump to offset ${y ?? ""} in HEX`), A(C, x), A(p, i(ne).text);
        }, [() => c(i(ne).offset), () => c(i(ne).offset)]), ae("click", T, () => t.onJumpToOffset?.(i(ne).offset)), O(B, T);
      }), Y(() => A(N, `${i(a).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), us(D, () => i(s), (B) => h(s, B)), O(F, g);
    };
    re(_, (F) => {
      i(n) === "summary" ? F(S) : i(n) === "sections" ? F(k, 1) : i(n) === "segments" ? F(I, 2) : i(n) === "symbols" ? F(m, 3) : i(n) === "strings" && F(P, 4);
    });
  }
  O(e, v), $e();
}
Qt(["click"]);
var Xi = L('<span class="strip-col svelte-14j5q0g"></span>'), Ji = L('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), Zi = L('<span role="presentation"> </span>'), Qi = L('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <!> <pre class="grid svelte-14j5q0g"></pre></div>');
function $i(e, t) {
  Qe(t, true);
  let n = si(t, "jumpTo", 3, null), r = z(0);
  const s = 16 * 32;
  let a = z(at([])), l = z(null), o = z(at([])), c = z(0), v = z(""), f = z(null), b = z(0), _ = z(0), S = z(null);
  const k = 400;
  Fe(() => {
    let E = false;
    return mn().then((w) => {
      if (E) return;
      h(l, w, true), h(c, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), h(o, t.bytes ? i(l).entropy_blocks(t.bytes, i(c)) : [], true), m();
    }), () => {
      E = true;
    };
  }), Fe(() => {
    if (n() == null) return;
    const E = Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Number(n()) | 0)), w = Math.floor(E / 16) * 16, U = Math.floor(w / s) * s;
    h(r, U), m(), h(f, w), h(b, performance.now() + k), xa(_), requestAnimationFrame(() => {
      const K = i(I);
      if (!K) return;
      const Q = K.querySelector(`[data-row-off="${w}"]`);
      if (!Q) return;
      const ie = K.getBoundingClientRect(), oe = Q.getBoundingClientRect().top - ie.top - ie.height / 3;
      K.scrollTo({ top: K.scrollTop + oe, behavior: "smooth" });
    });
  }), Fe(() => {
    if (i(_) === 0) return;
    let E = 0;
    const w = () => {
      if (performance.now() >= i(b)) {
        h(f, null);
        return;
      }
      h(_, i(_) + 1 & 4095), E = requestAnimationFrame(w);
    };
    return E = requestAnimationFrame(w), () => cancelAnimationFrame(E);
  });
  let I = z(null);
  function m() {
    !i(l) || !t.bytes || h(a, i(l).hex_rows(t.bytes, i(r), s), true);
  }
  function P(E) {
    h(r, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, i(r) + E)), true), h(r, Math.floor(i(r) / 16) * 16), m();
  }
  function F(E) {
    E.preventDefault();
    let w = i(v).trim();
    if (!w) return;
    (w.startsWith("0x") || w.startsWith("0X")) && (w = w.slice(2));
    const U = parseInt(w, 16);
    Number.isFinite(U) && (h(r, Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, U)), true), h(r, Math.floor(i(r) / 16) * 16), m());
  }
  function g(E) {
    if (!i(o).length || !t.bytes) return;
    const U = E.currentTarget.getBoundingClientRect(), K = Math.max(0, Math.min(1, (E.clientX - U.left) / U.width)), Q = Math.floor(K * t.bytes.length);
    h(r, Math.floor(Q / 16) * 16), m();
  }
  let M = _t(() => t.bytes && t.bytes.length ? i(r) / t.bytes.length : 0);
  function D(E, w) {
    if (i(f) == null || E !== i(f)) return 0;
    const U = i(b) - performance.now();
    return U <= 0 ? 0 : U / k;
  }
  let j = _t(() => {
    const E = [];
    for (let w = 0; w < i(a).length; w++) E.push({ off: i(r) + w * 16, text: i(a)[w] });
    return E;
  });
  var N = Qi(), V = u(N), X = d(u(V), 2), B = u(X), ne = d(B, 2), T = d(ne, 2), q = d(u(T), 2), C = d(T, 2), ee = d(C, 2), p = d(V, 2);
  {
    var y = (E) => {
      var w = Ji(), U = d(u(w), 2), K = u(U);
      qe(K, 17, () => i(o), Pe, (oe, Z) => {
        var ve = Xi();
        Y((Ae) => Ht(ve, `height: ${Ae ?? ""}%; opacity: ${0.35 + i(Z) * 0.65}`), [() => Math.max(2, i(Z) * 100)]), O(oe, ve);
      });
      var Q = d(K, 2), ie = d(U, 2), ce = u(ie);
      Y((oe) => {
        Ht(Q, `left: ${i(M) * 100}%`), A(ce, `${oe ?? ""} B / col`);
      }, [() => i(c).toLocaleString()]), ae("click", U, g), O(E, w);
    };
    re(p, (E) => {
      i(o).length > 1 && E(y);
    });
  }
  var x = d(p, 2);
  qe(x, 21, () => i(j), Pe, (E, w, U) => {
    var K = Zi();
    let Q;
    var ie = u(K);
    Y((ce) => {
      Q = rt(K, 1, "hex-row svelte-14j5q0g", null, Q, { hover: i(S) === U, flash: i(w).off === i(f) }), Me(K, "data-row-off", i(w).off), Ht(K, ce), A(ie, `${i(w).text ?? ""}
`);
    }, [() => i(w).off === i(f) ? `--flash-a: ${D(i(w).off, i(_))}` : ""]), Lt("mouseenter", K, () => h(S, U, true)), Lt("mouseleave", K, () => i(S) === U && h(S, null)), O(E, K);
  }), Dt(x, (E) => h(I, E), () => i(I)), Y((E) => Me(q, "placeholder", E), [() => i(r).toString(16).padStart(8, "0").toUpperCase()]), ae("click", B, () => P(-s)), ae("click", ne, () => P(-16)), Lt("submit", T, F), us(q, () => i(v), (E) => h(v, E)), ae("click", C, () => P(16)), ae("click", ee, () => P(s)), O(e, N), $e();
}
Qt(["click"]);
var el = L('<span class="w-meta svelte-59bj26"> </span>'), tl = L('<div class="w-empty svelte-59bj26"> </div>'), nl = L('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), rl = L('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), sl = L('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), al = L('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function il(e, t) {
  Qe(t, true);
  let n = z(null), r = z(""), s = z(null), a = z(null), l = null, o = null, c = null, v = 0, f = 0, b = 0, _ = z("0:00 / 0:00");
  function S(p) {
    return "0x" + (Number(p) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function k(p) {
    return p < 1024 ? `${p} B` : p < 1024 * 1024 ? `${(p / 1024).toFixed(1)} KiB` : `${(p / 1024 / 1024).toFixed(2)} MiB`;
  }
  function I(p) {
    if (p < 1) return `${(p * 1e3).toFixed(0)} ms`;
    if (p < 60) return `${p.toFixed(2)} s`;
    const y = Math.floor(p / 60), x = p - y * 60;
    return `${y}m ${x.toFixed(1)}s`;
  }
  function m(p) {
    return p.replace(/\s+$/g, "");
  }
  async function P(p) {
    if (h(r, ""), !p) {
      h(n, null);
      return;
    }
    try {
      const x = (await mn()).decode_wav(p);
      h(n, x, true), c = null, h(_, `0:00 / ${I(x.duration)}`), requestAnimationFrame(() => F({ playhead: 0 }));
    } catch (y) {
      console.error("[scry/wave] decode failed", y), h(n, null), h(r, String(y?.message || y), true);
    }
  }
  function F({ playhead: p = null } = {}) {
    if (!i(s) || !i(n)) return;
    const y = window.devicePixelRatio || 1, x = i(s).getBoundingClientRect(), E = Math.max(1, Math.floor(x.width * y)), w = Math.max(1, Math.floor(x.height * y));
    i(s).width = E, i(s).height = w;
    const U = getComputedStyle(i(s)), K = U.getPropertyValue("--w-bg").trim() || "#000", Q = U.getPropertyValue("--w-grid").trim() || "#333", ie = U.getPropertyValue("--w-peak").trim() || "#888", ce = U.getPropertyValue("--w-rms").trim() || "#bcd", oe = U.getPropertyValue("--w-accent").trim() || "#9fe3c7", Z = i(s).getContext("2d");
    Z.fillStyle = K, Z.fillRect(0, 0, E, w), Z.strokeStyle = Q, Z.lineWidth = 1;
    const ve = w / 2;
    for (const ue of [0.25, 0.5, 0.75]) {
      const Re = Math.floor(w * ue) + 0.5;
      Z.beginPath(), Z.moveTo(0, Re), Z.lineTo(E, Re), Z.stroke();
    }
    const Ae = i(n).envelope, Ve = Ae.length, Ce = E / Ve;
    for (let ue = 0; ue < Ve; ue++) {
      const Re = Ae[ue], et = Math.floor(ue * Ce), tt = Math.max(1, Math.floor(Ce) - 1), Oe = ve - Re.max * ve, Ge = ve - Re.min * ve;
      Z.fillStyle = ie, Z.fillRect(et, Math.floor(Oe), tt, Math.max(1, Math.ceil(Ge - Oe)));
      const Ye = Re.rms * ve;
      Z.fillStyle = ce, Z.fillRect(et, Math.floor(ve - Ye), tt, Math.max(1, Math.ceil(2 * Ye)));
    }
    if (p != null) {
      const ue = Math.floor(p * E);
      Z.strokeStyle = oe, Z.lineWidth = 2 * y, Z.beginPath(), Z.moveTo(ue, 0), Z.lineTo(ue, w), Z.stroke();
    }
  }
  function g() {
    if (!i(n)) return null;
    if (c) return c;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const p = i(n).samples instanceof Float32Array ? i(n).samples : new Float32Array(i(n).samples);
    return c = l.createBuffer(1, p.length, i(n).fmt.sample_rate), c.copyToChannel(p, 0), c;
  }
  function M() {
    if (!l || !o || !i(n)) {
      b = 0;
      return;
    }
    const p = f + (l.currentTime - v), y = i(n).duration, x = Math.max(0, Math.min(1, p / y));
    F({ playhead: x }), h(_, `${I(Math.min(p, y))} / ${I(y)}`), p < y ? b = requestAnimationFrame(M) : b = 0;
  }
  function D() {
    if (b && (cancelAnimationFrame(b), b = 0), o) {
      try {
        o.stop();
      } catch {
      }
      o.disconnect(), o = null;
    }
  }
  function j(p) {
    if (!i(n)) return;
    const y = g();
    y && (D(), o = l.createBufferSource(), o.buffer = y, o.connect(l.destination), o.onended = () => {
      b && cancelAnimationFrame(b), b = 0, F({ playhead: 0 }), h(_, `0:00 / ${I(i(n).duration)}`), o = null;
    }, l.state === "suspended" && l.resume(), f = Math.max(0, Math.min(i(n).duration - 1e-3, p)), v = l.currentTime, o.start(0, f), b = requestAnimationFrame(M));
  }
  function N(p) {
    if (!i(n)) return;
    const y = i(s).getBoundingClientRect(), x = (p.clientX - y.left) / y.width;
    j(x * i(n).duration);
  }
  Fe(() => {
    const p = t.bytes;
    return P(p), () => D();
  }), Fe(() => {
    if (!i(a)) return;
    const p = new ResizeObserver(() => i(n) && F({ playhead: 0 }));
    return p.observe(i(a)), () => p.disconnect();
  });
  var V = al(), X = u(V), B = d(u(X), 2);
  {
    var ne = (p) => {
      var y = el(), x = u(y);
      Y((E) => A(x, `${i(n).fmt.channels ?? ""}ch @ ${i(n).fmt.sample_rate ?? ""} Hz \xB7 ${i(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${E ?? ""}`), [() => I(i(n).duration)]), O(p, y);
    };
    re(B, (p) => {
      i(n) && p(ne);
    });
  }
  var T = d(X, 2);
  {
    var q = (p) => {
      var y = tl(), x = u(y);
      Y(() => A(x, `Not a parseable WAV: ${i(r) ?? ""}`)), O(p, y);
    }, C = (p) => {
      var y = nl();
      O(p, y);
    }, ee = (p) => {
      var y = sl(), x = pt(y), E = u(x), w = u(E), U = u(w), K = d(u(U)), Q = u(K), ie = d(U, 2), ce = d(u(ie)), oe = u(ce), Z = d(ie, 2), ve = d(u(Z)), Ae = u(ve), Ve = d(Z, 2), Ce = d(u(Ve)), ue = u(Ce), Re = d(w, 2), et = u(Re), tt = d(u(et)), Oe = u(tt), Ge = d(et, 2), Ye = d(u(Ge)), Mt = u(Ye), R = d(Ge, 2), W = d(u(R)), G = u(W), pe = d(R, 2), he = d(u(pe)), Ke = u(he), me = d(Re, 2), we = u(me), ke = d(u(we)), ct = u(ke), se = d(we, 2);
      qe(se, 17, () => i(n).chunks.slice(0, 4), Pe, (ft, en) => {
        var yn = rl(), xn = u(yn), ys = u(xn), xs = d(xn), Es = u(xs);
        Y((As, ks, Ss) => {
          A(ys, As), A(Es, `${ks ?? ""} @ ${Ss ?? ""}`);
        }, [() => m(i(en).id), () => k(i(en).size), () => S(i(en).offset)]), O(ft, yn);
      });
      var ye = d(x, 2), Ne = u(ye), nt = d(Ne, 2), Tt = d(nt, 2), bt = u(Tt), $t = d(ye, 2), wn = u($t);
      Dt(wn, (ft) => h(s, ft), () => i(s)), Dt($t, (ft) => h(a, ft), () => i(a)), Y((ft, en, yn, xn) => {
        A(Q, i(n).fmt.format === 1 ? "PCM (int)" : i(n).fmt.format === 3 ? "IEEE float" : `tag ${i(n).fmt.format}`), A(oe, i(n).fmt.channels), A(Ae, `${i(n).fmt.sample_rate ?? ""} Hz`), A(ue, `${i(n).fmt.bits_per_sample ?? ""}-bit`), A(Oe, ft), A(Mt, en), A(G, yn), A(Ke, `${xn ?? ""}/s`), A(ct, i(n).chunks.length), A(bt, i(_));
      }, [() => Number(i(n).total_frames).toLocaleString(), () => I(i(n).duration), () => k(i(n).data_len), () => k(i(n).fmt.byte_rate)]), ae("click", Ne, () => j(0)), ae("click", nt, () => {
        D(), F({ playhead: 0 }), h(_, `0:00 / ${I(i(n).duration)}`);
      }), ae("click", wn, N), O(p, y);
    };
    re(T, (p) => {
      i(r) ? p(q) : i(n) ? p(ee, -1) : p(C, 1);
    });
  }
  O(e, V), $e();
}
Qt(["click"]);
var ll = L('<span class="c-meta svelte-1uww35p"> </span>'), ol = L('<div class="c-empty svelte-1uww35p"> </div>'), cl = L('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), fl = L('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), ul = L(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), vl = L('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function dl(e, t) {
  Qe(t, true);
  let n = z(null), r = z("");
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
    if (h(r, ""), !g) {
      h(n, null);
      return;
    }
    try {
      const M = await mn();
      h(n, M.parse_gba(g), true);
    } catch (M) {
      console.error("[scry/cart] parse failed", M), h(n, null), h(r, String(M?.message || M), true);
    }
  }
  Fe(() => {
    const g = t.bytes;
    c(g);
  });
  function v(g) {
    if (!t.bytes) return null;
    const M = t.bytes.subarray(g, Math.min(t.bytes.length, g + 16)), D = [], j = [];
    for (let N = 0; N < M.length; N++) D.push(s(M[N])), j.push(l(M[N])), N === 7 && D.push("");
    return { off: g, hex: D.join(" ").replace(/  /g, "  "), ascii: j.join("") };
  }
  let f = _t(() => {
    if (!t.bytes) return [];
    const g = [];
    for (let M = 160; M < 224; M += 16) {
      const D = v(M);
      D && g.push(D);
    }
    return g;
  });
  var b = vl(), _ = u(b), S = d(u(_), 2);
  {
    var k = (g) => {
      var M = ll(), D = u(M);
      Y((j) => A(D, `"${(i(n).title || "(blank)") ?? ""}" \xB7 ${i(n).game_code ?? ""} \xB7 ${j ?? ""}`), [() => o(i(n).rom_size)]), O(g, M);
    };
    re(S, (g) => {
      i(n) && g(k);
    });
  }
  var I = d(_, 2);
  {
    var m = (g) => {
      var M = ol(), D = u(M);
      Y(() => A(D, `parse failed: ${i(r) ?? ""}`)), O(g, M);
    }, P = (g) => {
      var M = cl();
      O(g, M);
    }, F = (g) => {
      var M = ul(), D = u(M), j = d(u(D), 2), N = d(u(j)), V = u(N), X = d(j, 2), B = d(u(X)), ne = u(B), T = d(X, 2), q = d(u(T)), C = u(q), ee = d(T, 2), p = d(u(ee), 2), y = u(p), x = d(ee, 2), E = d(u(x)), w = u(E), U = d(x, 2), K = d(u(U)), Q = u(K), ie = d(U, 2), ce = d(u(ie)), oe = u(ce), Z = d(ie, 2), ve = d(u(Z), 2), Ae = u(ve), Ve = d(Z, 2), Ce = d(u(Ve)), ue = u(Ce), Re = d(D, 2), et = d(u(Re), 2);
      qe(et, 21, () => i(f), Pe, (tt, Oe) => {
        var Ge = fl(), Ye = u(Ge), Mt = u(Ye), R = d(Ye, 2), W = u(R), G = d(R, 2), pe = u(G);
        Y((he) => {
          A(Mt, he), A(W, i(Oe).hex), A(pe, i(Oe).ascii);
        }, [() => a(i(Oe).off)]), O(tt, Ge);
      }), Y((tt, Oe, Ge, Ye, Mt, R, W) => {
        A(V, i(n).title || "(blank)"), A(ne, i(n).game_code || "----"), A(C, i(n).maker_code || "--"), A(y, `0x${tt ?? ""} ${i(n).fixed_ok ? "\u2713" : "\u2717"}`), A(w, `0x${Oe ?? ""}`), A(Q, `0x${Ge ?? ""}`), A(oe, `0x${Ye ?? ""}`), A(Ae, `stored 0x${Mt ?? ""} \xB7
            computed 0x${R ?? ""}
            ${i(n).checksum_ok ? " \u2713" : " \u2717"}`), A(ue, W);
      }, [() => s(i(n).fixed), () => s(i(n).unit_code), () => s(i(n).device_type), () => s(i(n).version), () => s(i(n).checksum), () => s(i(n).checksum_computed), () => o(i(n).rom_size)]), O(g, M);
    };
    re(I, (g) => {
      i(r) ? g(m) : i(n) ? g(F, -1) : g(P, 1);
    });
  }
  O(e, b), $e();
}
var _l = L('<section class="mh-host svelte-sq0dz7"><div class="mh-bar svelte-sq0dz7"><span class="mh-title svelte-sq0dz7"> </span> <form class="mh-jumpform svelte-sq0dz7"><span class="mh-jumplab svelte-sq0dz7">JUMP</span> <input type="text" placeholder="0x..." class="mh-jump svelte-sq0dz7" aria-label="jump to offset"/></form></div> <div class="mh-scroll svelte-sq0dz7"><div class="mh-sizer svelte-sq0dz7"></div></div></section>');
function pl(e, t) {
  Qe(t, true);
  const n = 16, r = 20, s = 6, a = 14e6;
  let l, o, c, v = 0, f = [], b = null, _ = { physicalPx: 0, scale: 1 };
  function S(p) {
    return (p >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function k(p) {
    return "0x" + (p >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function I(p) {
    return p >= 32 && p <= 126 ? String.fromCharCode(p) : ".";
  }
  function m(p, y) {
    const x = Math.max(0, p * y);
    return x <= a ? { physicalPx: x, scale: 1 } : { physicalPx: a, scale: x / a };
  }
  function P(p, y, x, E) {
    if (x === 0) return { start: 0, end: 0, topPx: 0 };
    const w = p * E, U = Math.ceil(y / r) + s * 2, K = Math.floor(w / r) - s, Q = Math.max(0, K), ie = Math.min(x, Q + U);
    let ce;
    if (E === 1) ce = Q * r;
    else {
      const oe = w - Q * r;
      ce = p - oe / E;
    }
    return { start: Q, end: ie, topPx: ce };
  }
  function F(p, y) {
    const x = p * n, E = Math.min(y.byteLength, x + n), w = y.subarray(x, E);
    let U = "", K = "";
    for (let Q = 0; Q < w.length; Q++) U += S(w[Q]), K += I(w[Q]), Q === 7 ? U += "  " : Q < w.length - 1 && (U += " ");
    return { addr: k(x), hex: U, asc: K };
  }
  function g(p) {
    for (; f.length < p; ) {
      const y = document.createElement("div");
      y.className = "mh-row", y.style.position = "absolute", y.style.left = "0", y.style.right = "0", y.style.height = `${r}px`;
      const x = document.createElement("span");
      x.className = "mh-addr";
      const E = document.createElement("span");
      E.className = "mh-bytes";
      const w = document.createElement("span");
      w.className = "mh-ascii", y.appendChild(x), y.appendChild(E), y.appendChild(w), f.push(y);
    }
  }
  function M() {
    const p = t.bytes;
    if (!o) return;
    if (!p || p.byteLength === 0) {
      for (const w of f) w.parentNode && w.remove();
      o.style.height = "0px";
      return;
    }
    const y = Math.ceil(p.byteLength / n);
    _ = m(y, r), o.style.height = `${_.physicalPx}px`;
    const x = P(l.scrollTop, v, y, _.scale), E = x.end - x.start;
    g(E);
    for (let w = E; w < f.length; w++) f[w].parentNode && f[w].remove();
    for (let w = 0; w < E; w++) {
      const U = F(x.start + w, p), K = f[w];
      K.style.top = `${x.topPx + w * r}px`;
      const [Q, ie, ce] = K.children;
      Q.textContent = U.addr, ie.textContent = U.hex, ce.textContent = U.asc, K.parentNode !== o && o.appendChild(K);
    }
  }
  function D(p) {
    const y = t.bytes;
    if (!y || p < 0 || p >= y.byteLength) return;
    const w = Math.floor(p / n) * r / _.scale;
    l.scrollTop = Math.max(0, w - v / 2), M();
  }
  function j(p) {
    p.preventDefault();
    const y = c.value.trim().replace(/^0x/i, ""), x = parseInt(y, 16);
    Number.isFinite(x) && D(x);
  }
  let N;
  vs(() => {
    N = new ResizeObserver(() => {
      v = l.clientHeight, M();
    }), N.observe(l), l.addEventListener("scroll", M, { passive: true }), M();
  }), ds(() => {
    try {
      N?.disconnect();
    } catch {
    }
  }), Fe(() => {
    t.bytes !== b && (b = t.bytes, l && (l.scrollTop = 0), M(), t.bytes && t.bytes.byteLength >= 192 && requestAnimationFrame(() => D(160)));
  });
  var V = _l(), X = u(V), B = u(X), ne = u(B), T = d(B, 2), q = d(u(T), 2);
  Dt(q, (p) => c = p, () => c);
  var C = d(X, 2), ee = u(C);
  Dt(ee, (p) => o = p, () => o), Dt(C, (p) => l = p, () => l), Y((p) => A(ne, p), [() => t.bytes ? `ROM (${t.bytes.byteLength.toLocaleString()} bytes)` : "ROM (empty)"]), Lt("submit", T, j), O(e, V), $e();
}
var hl = L('<span class="g-meta svelte-1kb9ux"> </span>'), bl = L('<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-split svelte-1kb9ux"><div class="g-left svelte-1kb9ux"><div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div></div> <div class="g-right svelte-1kb9ux"><div class="g-sub-bar svelte-1kb9ux"><span class="g-sub-title svelte-1kb9ux">[ ROM / INSPECTOR ]</span> <span class="g-sub-hint svelte-1kb9ux">pause &middot; scroll &middot; jump 0x...</span></div> <!></div></div></div>');
function gl(e, t) {
  Qe(t, true);
  let n, r = null, s = false, a = z(false), l = z("cart ready \xB7 click PLAY");
  const o = 480, c = 320;
  function v(C) {
    return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KiB` : `${(C / (1024 * 1024)).toFixed(2)} MiB`;
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
    return r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((C, ee) => console.warn("[scry/v2/game/gba]", ee)), r.setCanvas(n), console.log("[scry/dbg/v2] post-setCanvas:", "indirectCanvas=", !!r.indirectCanvas, "targetCanvas=", !!r.targetCanvas, "drawCallback=", r.video.drawCallback?.toString().slice(0, 80)), r.setBios(window.biosBin), r;
  }
  async function b() {
    if (t.bytes && !i(a)) {
      if (n.focus(), !s) {
        h(l, "loading ROM\u2026"), await new Promise((C) => requestAnimationFrame(C)), await new Promise((C) => requestAnimationFrame(C));
        try {
          const C = f(), ee = t.bytes.buffer.slice(t.bytes.byteOffset, t.bytes.byteOffset + t.bytes.byteLength);
          if (!C.setRom(ee)) {
            h(l, "rom rejected");
            return;
          }
          s = true, C.runStable(), h(a, true), h(l, "running");
        } catch (C) {
          console.error("[scry/v2/game] load failed", C), h(l, "error: " + (C?.message || C));
        }
        return;
      }
      r.runStable(), h(a, true), h(l, "running");
    }
  }
  function _() {
    !r || !r.hasRom() || (r.pause(), h(a, false), h(l, "paused"));
  }
  function S() {
    if (!r || !t.bytes) return;
    const C = i(a);
    if (C) {
      try {
        r.pause();
      } catch {
      }
      h(a, false);
    }
    s = false, h(l, "cart ready \xB7 click PLAY"), C && b();
  }
  Fe(() => {
    if (t.bytes) i(a) || h(l, "cart ready \xB7 click PLAY");
    else {
      if (r && i(a)) try {
        r.pause();
      } catch {
      }
      s = false, h(a, false), h(l, "idle");
    }
  }), ds(() => {
    if (r && i(a)) try {
      r.pause();
    } catch {
    }
  });
  var k = bl(), I = u(k), m = d(u(I), 2);
  {
    var P = (C) => {
      var ee = hl(), p = u(ee);
      Y((y) => A(p, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${y ?? ""}`), [() => v(t.header.rom_size)]), O(C, ee);
    };
    re(m, (C) => {
      t.header && C(P);
    });
  }
  var F = d(I, 2), g = u(F), M = u(g), D = u(M);
  Me(D, "width", o), Me(D, "height", c), Dt(D, (C) => n = C, () => n);
  var j = d(M, 2), N = u(j), V = d(N, 2), X = d(V, 2), B = d(X, 2), ne = u(B), T = d(g, 2), q = d(u(T), 2);
  pl(q, { get bytes() {
    return t.bytes;
  } }), Y(() => {
    N.disabled = !t.bytes || i(a), V.disabled = !i(a), X.disabled = !t.bytes || !s, A(ne, i(l));
  }), ae("click", N, b), ae("click", V, _), ae("click", X, S), O(e, k), $e();
}
Qt(["click"]);
var ml = L('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), wl = L('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), yl = L('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), xl = L('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function El(e, t) {
  Qe(t, true);
  var n = xl(), r = u(n);
  {
    var s = (o) => {
      var c = ml();
      O(o, c);
    }, a = (o) => {
      var c = wl(), v = pt(c), f = d(u(v), 2), b = u(f), _ = d(v, 2), S = d(u(_), 2), k = u(S), I = d(_, 2), m = d(u(I), 2), P = u(m);
      Y((F, g) => {
        Me(f, "title", t.file.name), A(b, t.file.name), A(k, F), A(P, g);
      }, [() => $n(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), O(o, c);
    }, l = (o) => {
      var c = yl();
      O(o, c);
    };
    re(r, (o) => {
      t.parsing ? o(s) : t.file ? o(a, 1) : o(l, -1);
    });
  }
  O(e, n), $e();
}
var Al = L('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function kl(e, t) {
  Qe(t, true);
  let n = z(false), r = 0;
  function s(c) {
    const v = c.dataTransfer;
    if (!v) return false;
    const f = v.types;
    if (!f) return false;
    for (let b = 0; b < f.length; b++) if (f[b] === "Files") return true;
    return false;
  }
  Fe(() => {
    function c(_) {
      s(_) && (_.preventDefault(), r++, h(n, true));
    }
    function v(_) {
      s(_) && (_.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "copy"));
    }
    function f(_) {
      s(_) && (r = Math.max(0, r - 1), r === 0 && h(n, false));
    }
    async function b(_) {
      if (!s(_)) return;
      _.preventDefault(), r = 0, h(n, false);
      const S = _.dataTransfer?.files?.[0];
      if (S) try {
        const k = await ws(S);
        t.onfile?.(k);
      } catch (k) {
        t.onerror?.(k.message || String(k));
      }
    }
    return window.addEventListener("dragenter", c), window.addEventListener("dragover", v), window.addEventListener("dragleave", f), window.addEventListener("drop", b), () => {
      window.removeEventListener("dragenter", c), window.removeEventListener("dragover", v), window.removeEventListener("dragleave", f), window.removeEventListener("drop", b);
    };
  });
  var a = On(), l = pt(a);
  {
    var o = (c) => {
      var v = Al();
      O(c, v);
    };
    re(l, (c) => {
      i(n) && c(o);
    });
  }
  O(e, a), $e();
}
var Sl = L('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), Ml = L('<span class="s-badge entrance svelte-1n46o8q"> </span>'), Tl = L('<span class="s-summary svelte-1n46o8q"> </span>'), Cl = L('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), Rl = L('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), Ol = L('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Il = L('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), jl = L('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Fl = L('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), Nl = L('<p class="err svelte-1n46o8q"> </p>'), Ll = L('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), Dl = L("<!> <!>", 1), Pl = L('<span class="s-hint svelte-1n46o8q"> </span>'), ql = L('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function Bl(e, t) {
  Qe(t, true);
  let n = z(null), r = z(null), s = z(null), a = z(null), l = z(null), o = z(null), c = z(null), v = z(""), f = z("inspect"), b = z(at(bs())), _ = z(false), S = z(null), k = z(""), I = z(false);
  const m = "scry \xB7 awaiting binary", P = "scry-booted-v2", F = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, g = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  Fe(() => {
    function R(W) {
      if (W.origin !== location.origin) return;
      const G = W.data;
      G && (G.type === "scry-theme" && (G.value === "light" || G.value === "dark") ? (document.documentElement.setAttribute("data-theme", G.value), h(b, G.value, true)) : G.type === "scry-load-demo" && V());
    }
    return window.addEventListener("message", R), () => window.removeEventListener("message", R);
  });
  async function M({ name: R, bytes: W }) {
    h(n, { name: R, bytes: W }, true), h(v, ""), h(s, null), h(a, null), h(l, null), h(o, null), h(r, null), h(c, null), h(_, true);
    try {
      const G = await mn();
      if (h(r, G.detect_format(W), true), i(r) === "elf") h(s, G.parse_elf(W), true), h(f, "inspect");
      else if (i(r) === "wav") {
        try {
          h(a, G.decode_wav(W), true);
        } catch {
        }
        h(f, "wave");
      } else if (i(r) === "gba") {
        try {
          h(l, G.parse_gba(W), true);
        } catch {
        }
        h(f, "game");
      } else h(f, "hex");
      h(o, G.extract_strings(W, 4), true);
      const pe = Math.max(64, Math.ceil(W.length / 256)), he = G.entropy_blocks(W, pe);
      if (he.length) {
        let Ke = 0;
        for (let me = 0; me < he.length; me++) Ke += he[me];
        h(c, Ke / he.length * 8);
      }
    } catch (G) {
      h(v, String(G), true);
    } finally {
      h(_, false);
    }
  }
  function D() {
    h(n, null), h(s, null), h(a, null), h(l, null), h(o, null), h(r, null), h(v, ""), h(c, null);
  }
  function j(R) {
    h(v, R, true);
  }
  function N() {
    h(b, Ai(), true);
  }
  function V() {
    M({ name: ms, bytes: gs() });
  }
  function X(R) {
    h(f, "hex"), h(S, { o: R, t: performance.now() }, true);
  }
  let B = _t(() => {
    if (!i(n)) return null;
    if (i(s)) {
      const R = i(s).summary;
      return [i(r)?.toUpperCase(), R.machine, R.class, R.kind].filter(Boolean).join(" \xB7 ");
    }
    return (i(r) || "raw").toUpperCase();
  }), ne = _t(() => {
    if (!i(n)) return null;
    if (i(s)) {
      const R = i(s).summary, W = [];
      return R.class && R.machine ? W.push(`${R.class} ${R.machine}`) : R.machine && W.push(R.machine), W.push(`${i(s).sections.length} sections`), W.push(`${i(s).symbols.length} symbols`), i(c) != null && W.push(`avg entropy ${i(c).toFixed(1)} bits`), W.join(" \xB7 ");
    }
    if (i(a)) {
      const R = i(a).fmt, W = i(a).duration < 1 ? `${(i(a).duration * 1e3).toFixed(0)} ms` : `${i(a).duration.toFixed(2)} s`, G = [`${R.channels}ch ${R.sample_rate} Hz`, `${R.bits_per_sample}-bit`, W];
      return i(c) != null && G.push(`avg entropy ${i(c).toFixed(1)} bits`), G.join(" \xB7 ");
    }
    if (i(l)) {
      const R = ["GBA cart", `"${i(l).title || "(blank)"}"`, `code ${i(l).game_code}`];
      return i(c) != null && R.push(`avg entropy ${i(c).toFixed(1)} bits`), R.join(" \xB7 ");
    }
    return i(c) != null ? `bytes only \xB7 entropy ${i(c).toFixed(1)} bits` : null;
  });
  Fe(() => {
    if (sessionStorage.getItem(P)) {
      h(k, m), h(I, true);
      return;
    }
    let R = 0;
    const W = setInterval(() => {
      if (R++, h(k, m.slice(0, R), true), R >= m.length) {
        clearInterval(W), h(I, true);
        try {
          sessionStorage.setItem(P, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(W);
  });
  var T = ql(), q = pt(T);
  kl(q, { onfile: M, onerror: j });
  var C = d(q, 2);
  let ee;
  var p = u(C), y = u(p);
  {
    var x = (R) => {
      var W = Sl(), G = u(W);
      let pe;
      Y(() => {
        Me(W, "title", i(n) ? "Clear file \xB7 back to import" : ""), pe = rt(G, 1, "s-brand svelte-1n46o8q", null, pe, { "s-brand-clickable": !!i(n) });
      }), ae("click", W, D), O(R, W);
    };
    re(y, (R) => {
      g || R(x);
    });
  }
  var E = d(y, 2);
  {
    var w = (R) => {
      var W = Ol(), G = u(W);
      {
        var pe = (we) => {
          var ke = Cl(), ct = u(ke);
          Ka(ct, () => i(n).name, (Ne) => {
            var nt = Ml(), Tt = u(nt);
            Y(() => A(Tt, `[ ${i(B) ?? ""} ]`)), O(Ne, nt);
          });
          var se = d(ct, 2);
          {
            var ye = (Ne) => {
              var nt = Tl(), Tt = u(nt);
              Y(() => A(Tt, i(ne))), O(Ne, nt);
            };
            re(se, (Ne) => {
              i(ne) && Ne(ye);
            });
          }
          O(we, ke);
        };
        re(G, (we) => {
          i(B) && we(pe);
        });
      }
      var he = d(G, 2);
      {
        var Ke = (we) => {
          var ke = Rl();
          O(we, ke);
        };
        re(he, (we) => {
          i(_) && we(Ke);
        });
      }
      var me = d(he, 2);
      ae("click", me, D), O(R, W);
    }, U = (R) => {
      var W = Il();
      O(R, W);
    };
    re(E, (R) => {
      i(n) ? R(w) : R(U, -1);
    });
  }
  var K = d(E, 2);
  {
    var Q = (R) => {
      var W = jl(), G = u(W), pe = u(G);
      Y(() => A(pe, i(b) === "dark" ? "\u263C" : "\u263E")), ae("click", G, N), O(R, W);
    };
    re(K, (R) => {
      g || R(Q);
    });
  }
  var ie = d(p, 2), ce = u(ie);
  El(ce, { get file() {
    return i(n);
  }, get format() {
    return i(r);
  }, get parsing() {
    return i(_);
  } });
  var oe = d(ce, 2), Z = u(oe);
  {
    var ve = (R) => {
      var W = Fl(), G = u(W);
      let pe;
      var he = d(G, 2);
      let Ke;
      var me = d(he, 2);
      let we;
      var ke = d(me, 2);
      let ct;
      var se = d(ke, 2);
      let ye;
      Y(() => {
        G.disabled = i(r) !== "elf", Me(G, "title", i(r) === "elf" ? "" : "INSPECT is ELF-only"), pe = rt(G, 1, "svelte-1n46o8q", null, pe, { on: i(f) === "inspect" }), Ke = rt(he, 1, "svelte-1n46o8q", null, Ke, { on: i(f) === "hex" }), me.disabled = i(r) !== "wav", Me(me, "title", i(r) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), we = rt(me, 1, "svelte-1n46o8q", null, we, { on: i(f) === "wave" }), ke.disabled = i(r) !== "gba", Me(ke, "title", i(r) === "gba" ? "" : "CART is GBA-only"), ct = rt(ke, 1, "svelte-1n46o8q", null, ct, { on: i(f) === "cart" }), se.disabled = i(r) !== "gba", Me(se, "title", i(r) === "gba" ? "" : "GAME is GBA-only"), ye = rt(se, 1, "svelte-1n46o8q", null, ye, { on: i(f) === "game" });
      }), ae("click", G, () => h(f, "inspect")), ae("click", he, () => h(f, "hex")), ae("click", me, () => h(f, "wave")), ae("click", ke, () => h(f, "cart")), ae("click", se, () => h(f, "game")), O(R, W);
    };
    re(Z, (R) => {
      i(n) && R(ve);
    });
  }
  var Ae = d(Z, 2), Ve = u(Ae);
  {
    var Ce = (R) => {
      Ii(R, { onfile: M });
    }, ue = (R) => {
      var W = Dl(), G = pt(W);
      {
        var pe = (se) => {
          var ye = Nl(), Ne = u(ye);
          Y(() => A(Ne, `parse failed: ${i(v) ?? ""}`)), O(se, ye);
        };
        re(G, (se) => {
          i(v) && se(pe);
        });
      }
      var he = d(G, 2);
      {
        var Ke = (se) => {
          var ye = On(), Ne = pt(ye);
          {
            var nt = (bt) => {
              Ki(bt, { get report() {
                return i(s);
              }, get strings() {
                return i(o);
              }, onJumpToOffset: X });
            }, Tt = (bt) => {
              var $t = Ll(), wn = d(u($t)), ft = u(wn);
              Y(() => A(ft, i(r))), O(bt, $t);
            };
            re(Ne, (bt) => {
              i(s) ? bt(nt) : i(r) && i(r) !== "elf" && bt(Tt, 1);
            });
          }
          O(se, ye);
        }, me = (se) => {
          {
            let ye = _t(() => i(S)?.o);
            $i(se, { get bytes() {
              return i(n).bytes;
            }, get jumpTo() {
              return i(ye);
            } });
          }
        }, we = (se) => {
          il(se, { get bytes() {
            return i(n).bytes;
          } });
        }, ke = (se) => {
          dl(se, { get bytes() {
            return i(n).bytes;
          } });
        }, ct = (se) => {
          gl(se, { get bytes() {
            return i(n).bytes;
          }, get header() {
            return i(l);
          } });
        };
        re(he, (se) => {
          i(f) === "inspect" ? se(Ke) : i(f) === "hex" ? se(me, 1) : i(f) === "wave" ? se(we, 2) : i(f) === "cart" ? se(ke, 3) : i(f) === "game" && se(ct, 4);
        });
      }
      O(R, W);
    };
    re(Ve, (R) => {
      i(n) ? R(ue, -1) : R(Ce);
    });
  }
  var Re = d(ie, 2), et = u(Re), tt = d(u(et), 1, true), Oe = d(et, 2);
  {
    var Ge = (R) => {
      var W = Pl(), G = u(W);
      Y(() => A(G, F[i(f)] ?? "")), O(R, W);
    };
    re(Oe, (R) => {
      i(n) && R(Ge);
    });
  }
  var Ye = d(Oe, 2), Mt = u(Ye);
  Y((R) => {
    ee = rt(C, 1, "app svelte-1n46o8q", null, ee, { embedded: g }), A(tt, i(n) ? g ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : i(I) ? g ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${i(k)}\u2588`), A(Mt, `MODULE \xB7 ${R ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => i(n) ? i(f).toUpperCase() : "EMPTY"]), O(e, T), $e();
}
Qt(["click"]);
Ha(Bl, { target: document.getElementById("app") });
