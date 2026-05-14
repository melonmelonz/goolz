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
const Cs = false;
var Sr = Array.isArray, Rs = Array.prototype.indexOf, Vt = Array.prototype.includes, In = Array.from, Os = Object.defineProperty, on = Object.getOwnPropertyDescriptor, Fs = Object.getOwnPropertyDescriptors, Is = Object.prototype, js = Array.prototype, Mr = Object.getPrototypeOf, vr = Object.isExtensible;
const Ls = () => {
};
function Ns(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Tr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ds(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const Ae = 2, Gt = 4, jn = 8, Cr = 1 << 24, it = 16, et = 32, At = 64, Vn = 128, ze = 512, be = 1024, Ee = 2048, lt = 4096, Ce = 8192, He = 16384, Bt = 32768, Gn = 1 << 25, Yt = 65536, Yn = 1 << 17, Ps = 1 << 18, Zt = 1 << 19, qs = 1 << 20, st = 1 << 25, Pt = 65536, Tn = 1 << 21, _n = 1 << 22, xt = 1 << 23, An = Symbol("$state"), Bs = Symbol(""), vt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Rr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Us() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ws(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function zs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Hs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Gs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ys() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ks() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Js() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Zs = 1, Qs = 2, Or = 4, $s = 8, ea = 16, ta = 1, na = 2, ge = Symbol(), Fr = "http://www.w3.org/1999/xhtml";
function ra() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function sa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ir(e) {
  return e === this.v;
}
function aa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function jr(e) {
  return !aa(e, this.v);
}
let ia = false, Re = null;
function Kt(e) {
  Re = e;
}
function tt(e, t = false, n) {
  Re = { p: Re, i: false, c: null, e: null, s: e, x: null, r: ne, l: null };
}
function nt(e) {
  var t = Re, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) $r(r);
  }
  return t.i = true, Re = t.p, {};
}
function Lr() {
  return true;
}
let Ot = [];
function Nr() {
  var e = Ot;
  Ot = [], Ns(e);
}
function Et(e) {
  if (Ot.length === 0 && !cn) {
    var t = Ot;
    queueMicrotask(() => {
      t === Ot && Nr();
    });
  }
  Ot.push(e);
}
function la() {
  for (; Ot.length > 0; ) Nr();
}
function Dr(e) {
  var t = ne;
  if (t === null) return ae.f |= xt, e;
  if (!(t.f & Bt) && !(t.f & Gt)) throw e;
  yt(e, t);
}
function yt(e, t) {
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
const oa = -7169;
function pe(e, t) {
  e.f = e.f & oa | t;
}
function nr(e) {
  e.f & ze || e.deps === null ? pe(e, be) : pe(e, lt);
}
function Pr(e) {
  if (e !== null) for (const t of e) !(t.f & Ae) || !(t.f & Pt) || (t.f ^= Pt, Pr(t.deps));
}
function qr(e, t, n) {
  e.f & Ee ? t.add(e) : e.f & lt && n.add(e), Pr(e.deps), pe(e, be);
}
const Ct = /* @__PURE__ */ new Set();
let ee = null, Qe = null, Kn = null, cn = false, Dn = false, zt = null, kn = null;
var dr = 0;
let ca = 1;
class kt {
  id = ca++;
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
  #u = /* @__PURE__ */ new Set();
  #l = /* @__PURE__ */ new Map();
  #v = /* @__PURE__ */ new Set();
  is_fork = false;
  #_ = false;
  #d = /* @__PURE__ */ new Set();
  #f() {
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
      for (var s of r.d) pe(s, Ee), n(s);
      for (s of r.m) pe(s, lt), n(s);
    }
    this.#v.add(t);
  }
  #p() {
    if (dr++ > 1e3 && (Ct.delete(this), fa()), !this.#f()) {
      for (const c of this.#c) this.#u.delete(c), pe(c, Ee), this.schedule(c);
      for (const c of this.#u) pe(c, lt), this.schedule(c);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = zt = [], r = [], s = kn = [];
    for (const c of t) try {
      this.#g(c, n, r);
    } catch (o) {
      throw Wr(c), o;
    }
    if (ee = null, s.length > 0) {
      var a = kt.ensure();
      for (const c of s) a.schedule(c);
    }
    if (zt = null, kn = null, this.#f() || this.#b()) {
      this.#h(r), this.#h(n);
      for (const [c, o] of this.#l) Ur(c, o);
    } else {
      this.#s.size === 0 && Ct.delete(this), this.#c.clear(), this.#u.clear();
      for (const c of this.#n) c(this);
      this.#n.clear(), _r(r), _r(n), this.#a?.resolve();
    }
    var l = ee;
    if (this.#t.length > 0) {
      const c = l ??= this;
      c.#t.push(...this.#t.filter((o) => !c.#t.includes(o)));
    }
    l !== null && (Ct.add(l), l.#p());
  }
  #g(t, n, r) {
    t.f ^= be;
    for (var s = t.first; s !== null; ) {
      var a = s.f, l = (a & (et | At)) !== 0, c = l && (a & be) !== 0, o = c || (a & Ce) !== 0 || this.#l.has(s);
      if (!o && s.fn !== null) {
        l ? s.f ^= be : a & Gt ? n.push(s) : bn(s) && (a & it && this.#u.add(s), Jt(s));
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
    for (var n = 0; n < t.length; n += 1) qr(t[n], this.#c, this.#u);
  }
  capture(t, n, r = false) {
    t.v !== ge && !this.previous.has(t) && this.previous.set(t, t.v), t.f & xt || (this.current.set(t, [n, r]), Qe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    ee = this;
  }
  deactivate() {
    ee = null, Qe = null;
  }
  flush() {
    try {
      Dn = true, ee = this, this.#p();
    } finally {
      dr = 0, Kn = null, zt = null, kn = null, Dn = false, ee = null, Qe = null, It.clear();
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
      for (const [b, [_, A]] of this.current) {
        if (f.current.has(b)) {
          var r = f.current.get(b)[0];
          if (t && _ !== r) f.current.set(b, [_, A]);
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
        for (var c of n) Br(c, s, a, l);
        l = /* @__PURE__ */ new Map();
        var o = [...f.current.keys()].filter((b) => this.current.has(b) ? this.current.get(b)[0] !== b : true);
        for (const b of this.#i) !(b.f & (He | Ce | Yn)) && rr(b, o, l) && (b.f & (_n | it) ? (pe(b, Ee), f.schedule(b)) : f.#c.add(b));
        if (f.#t.length > 0) {
          f.apply();
          for (var v of f.#t) f.#g(v, [], []);
          f.#t = [];
        }
        f.deactivate();
      }
    }
    for (const f of Ct) f.#d.has(this) && (f.#d.delete(this), f.#d.size === 0 && !f.#f() && (f.activate(), f.#p()));
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
    this.#_ || r || (this.#_ = true, Et(() => {
      this.#_ = false, this.flush();
    }));
  }
  transfer_effects(t, n) {
    for (const r of t) this.#c.add(r);
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
    return (this.#a ??= Tr()).promise;
  }
  static ensure() {
    if (ee === null) {
      const t = ee = new kt();
      Dn || (Ct.add(ee), cn || Et(() => {
        ee === t && t.flush();
      }));
    }
    return ee;
  }
  apply() {
    {
      Qe = null;
      return;
    }
  }
  schedule(t) {
    if (Kn = t, t.b?.is_pending && t.f & (Gt | jn | Cr) && !(t.f & Bt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (zt !== null && n === ne && (ae === null || !(ae.f & Ae))) return;
      if (r & (At | et)) {
        if (!(r & be)) return;
        n.f ^= be;
      }
    }
    this.#t.push(n);
  }
}
function ua(e) {
  var t = cn;
  cn = true;
  try {
    for (var n; ; ) {
      if (la(), ee === null) return n;
      ee.flush();
    }
  } finally {
    cn = t;
  }
}
function fa() {
  try {
    Gs();
  } catch (e) {
    yt(e, Kn);
  }
}
let ft = null;
function _r(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (He | Ce)) && bn(r) && (ft = /* @__PURE__ */ new Set(), Jt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ts(r), ft?.size > 0)) {
        It.clear();
        for (const s of ft) {
          if (s.f & (He | Ce)) continue;
          const a = [s];
          let l = s.parent;
          for (; l !== null; ) ft.has(l) && (ft.delete(l), a.push(l)), l = l.parent;
          for (let c = a.length - 1; c >= 0; c--) {
            const o = a[c];
            o.f & (He | Ce) || Jt(o);
          }
        }
        ft.clear();
      }
    }
    ft = null;
  }
}
function Br(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const a = s.f;
    a & Ae ? Br(s, t, n, r) : a & (_n | it) && !(a & Ee) && rr(s, t, r) && (pe(s, Ee), sr(s));
  }
}
function rr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (Vt.call(t, s)) return true;
    if (s.f & Ae && rr(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function sr(e) {
  ee.schedule(e);
}
function Ur(e, t) {
  if (!(e.f & et && e.f & be)) {
    e.f & Ee ? t.d.push(e) : e.f & lt && t.m.push(e), pe(e, be);
    for (var n = e.first; n !== null; ) Ur(n, t), n = n.next;
  }
}
function Wr(e) {
  pe(e, be);
  for (var t = e.first; t !== null; ) Wr(t), t = t.next;
}
function va(e) {
  let t = 0, n = qt(0), r;
  return () => {
    lr() && (i(n), or(() => (t === 0 && (r = gn(() => e(() => un(n)))), t += 1, () => {
      Et(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, un(n));
      });
    })));
  };
}
var da = Yt | Zt;
function _a(e, t, n, r) {
  new pa(e, t, n, r);
}
class pa {
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
  #u = 0;
  #l = 0;
  #v = false;
  #_ = /* @__PURE__ */ new Set();
  #d = /* @__PURE__ */ new Set();
  #f = null;
  #b = va(() => (this.#f = qt(this.#u), () => {
    this.#f = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (a) => {
      var l = ne;
      l.b = this, l.f |= Vn, r(a);
    }, this.parent = ne.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), this.#r = Nn(() => {
      this.#m();
    }, da);
  }
  #p() {
    try {
      this.#a = Be(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #g(t) {
    const n = this.#e.failed;
    n && (this.#i = Be(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = Be(() => t(this.#n)), Et(() => {
      var n = this.#c = document.createDocumentFragment(), r = pt();
      n.append(r), this.#a = this.#y(() => Be(() => this.#s(r))), this.#l === 0 && (this.#n.before(n), this.#c = null, jt(this.#t, () => {
        this.#t = null;
      }), this.#w(ee));
    }));
  }
  #m() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#u = 0, this.#a = Be(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#c = document.createDocumentFragment();
        fr(this.#a, t);
        const n = this.#e.pending;
        this.#t = Be(() => n(this.#n));
      } else this.#w(ee);
    } catch (n) {
      this.error(n);
    }
  }
  #w(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#d);
  }
  defer_effect(t) {
    qr(t, this.#_, this.#d);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #y(t) {
    var n = ne, r = ae, s = Re;
    ot(this.#r), Ge(this.#r), Kt(this.#r.ctx);
    try {
      return kt.ensure(), t();
    } catch (a) {
      return Dr(a), null;
    } finally {
      ot(n), Ge(r), Kt(s);
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
    this.#x(t, n), this.#u += t, !(!this.#f || this.#v) && (this.#v = true, Et(() => {
      this.#v = false, this.#f && Xt(this.#f, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#b(), i(this.#f);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    ee?.is_fork ? (this.#a && ee.skip_effect(this.#a), this.#t && ee.skip_effect(this.#t), this.#i && ee.skip_effect(this.#i), ee.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (Le(this.#a), this.#a = null), this.#t && (Le(this.#t), this.#t = null), this.#i && (Le(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let r = this.#e.failed;
    var s = false, a = false;
    const l = () => {
      if (s) {
        sa();
        return;
      }
      s = true, a && Js(), this.#i !== null && jt(this.#i, () => {
        this.#i = null;
      }), this.#y(() => {
        this.#m();
      });
    }, c = (o) => {
      try {
        a = true, n?.(o, l), a = false;
      } catch (v) {
        yt(v, this.#r && this.#r.parent);
      }
      r && (this.#i = this.#y(() => {
        try {
          return Be(() => {
            var v = ne;
            v.b = this, v.f |= Vn, r(this.#n, () => o, () => l);
          });
        } catch (v) {
          return yt(v, this.#r.parent), null;
        }
      }));
    };
    Et(() => {
      var o;
      try {
        o = this.transform_error(t);
      } catch (v) {
        yt(v, this.#r && this.#r.parent);
        return;
      }
      o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(c, (v) => yt(v, this.#r && this.#r.parent)) : c(o);
    });
  }
}
function ha(e, t, n, r) {
  const s = ar;
  var a = e.filter((_) => !_.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return;
  }
  var l = ne, c = ba(), o = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((_) => _.promise)) : null;
  function v(_) {
    c();
    try {
      r(_);
    } catch (A) {
      l.f & He || yt(A, l);
    }
    Cn();
  }
  if (n.length === 0) {
    o.then(() => v(t.map(s)));
    return;
  }
  var f = zr();
  function b() {
    Promise.all(n.map((_) => ga(_))).then((_) => v([...t.map(s), ..._])).catch((_) => yt(_, l)).finally(() => f());
  }
  o ? o.then(() => {
    c(), b(), Cn();
  }) : b();
}
function ba() {
  var e = ne, t = ae, n = Re, r = ee;
  return function(a = true) {
    ot(e), Ge(t), Kt(n), a && !(e.f & He) && (r?.activate(), r?.apply());
  };
}
function Cn(e = true) {
  ot(null), Ge(null), Kt(null), e && ee?.deactivate();
}
function zr() {
  var e = ne, t = e.b, n = ee, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function ar(e) {
  var t = Ae | Ee;
  return ne !== null && (ne.f |= Zt), { ctx: Re, deps: null, effects: null, equals: Ir, f: t, fn: e, reactions: null, rv: 0, v: ge, wv: 0, parent: ne, ac: null };
}
function ga(e, t, n) {
  let r = ne;
  r === null && Us();
  var s = void 0, a = qt(ge), l = !ae, c = /* @__PURE__ */ new Map();
  return ja(() => {
    var o = ne, v = Tr();
    s = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(Cn);
    } catch (A) {
      v.reject(A), Cn();
    }
    var f = ee;
    if (l) {
      if (o.f & Bt) var b = zr();
      if (r.b.is_rendered()) c.get(f)?.reject(vt), c.delete(f);
      else {
        for (const A of c.values()) A.reject(vt);
        c.clear();
      }
      c.set(f, v);
    }
    const _ = (A, x = void 0) => {
      if (b) {
        var F = x === vt;
        b(F);
      }
      if (!(x === vt || o.f & He)) {
        if (f.activate(), x) a.f |= xt, Xt(a, x);
        else {
          a.f & xt && (a.f ^= xt), Xt(a, A);
          for (const [m, q] of c) {
            if (c.delete(m), m === f) break;
            q.reject(vt);
          }
        }
        f.deactivate();
      }
    };
    v.promise.then(_, (A) => _(null, A || "unknown"));
  }), Qr(() => {
    for (const o of c.values()) o.reject(vt);
  }), new Promise((o) => {
    function v(f) {
      function b() {
        f === s ? o(a) : v(s);
      }
      f.then(b, b);
    }
    v(s);
  });
}
function _t(e) {
  const t = ar(e);
  return ss(t), t;
}
function ma(e) {
  const t = ar(e);
  return t.equals = jr, t;
}
function wa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Le(t[n]);
  }
}
function ir(e) {
  var t, n = ne, r = e.parent;
  if (!St && r !== null && r.f & (He | Ce)) return ra(), e.v;
  ot(r);
  try {
    e.f &= ~Pt, wa(e), t = os(e);
  } finally {
    ot(n);
  }
  return t;
}
function Hr(e) {
  var t = ir(e);
  if (!e.equals(t) && (e.wv = is(), (!ee?.is_fork || e.deps === null) && (ee !== null ? ee.capture(e, t, true) : e.v = t, e.deps === null))) {
    pe(e, be);
    return;
  }
  St || (Qe !== null ? (lr() || ee?.is_fork) && Qe.set(e, t) : nr(e));
}
function ya(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(vt), t.teardown = Ls, t.ac = null, pn(t, 0), cr(t));
}
function Vr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Jt(t);
}
let Xn = /* @__PURE__ */ new Set();
const It = /* @__PURE__ */ new Map();
let Gr = false;
function qt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Ir, rv: 0, wv: 0 };
  return n;
}
function z(e, t) {
  const n = qt(e);
  return ss(n), n;
}
function xa(e, t = false, n = true) {
  const r = qt(e);
  return t || (r.equals = jr), r;
}
function p(e, t, n = false) {
  ae !== null && (!$e || ae.f & Yn) && Lr() && ae.f & (Ae | it | _n | Yn) && (Ve === null || !Vt.call(Ve, e)) && Xs();
  let r = n ? at(t) : t;
  return Xt(e, r, kn);
}
function Xt(e, t, n = null) {
  if (!e.equals(t)) {
    It.set(e, St ? t : e.v);
    var r = kt.ensure();
    if (r.capture(e, t), e.f & Ae) {
      const s = e;
      e.f & Ee && ir(s), Qe === null && nr(s);
    }
    e.wv = is(), Yr(e, Ee, n), ne !== null && ne.f & be && !(ne.f & (et | At)) && (qe === null ? Da([e]) : qe.push(e)), !r.is_fork && Xn.size > 0 && !Gr && Ea();
  }
  return t;
}
function Ea() {
  Gr = false;
  for (const e of Xn) e.f & be && pe(e, lt), bn(e) && Jt(e);
  Xn.clear();
}
function Aa(e, t = 1) {
  var n = i(e), r = t === 1 ? n++ : n--;
  return p(e, n), r;
}
function un(e) {
  p(e, e.v + 1);
}
function Yr(e, t, n) {
  var r = e.reactions;
  if (r !== null) for (var s = r.length, a = 0; a < s; a++) {
    var l = r[a], c = l.f, o = (c & Ee) === 0;
    if (o && pe(l, t), c & Ae) {
      var v = l;
      Qe?.delete(v), c & Pt || (c & ze && (ne === null || !(ne.f & Tn)) && (l.f |= Pt), Yr(v, lt, n));
    } else if (o) {
      var f = l;
      c & it && ft !== null && ft.add(f), n !== null ? n.push(f) : sr(f);
    }
  }
}
function at(e) {
  if (typeof e != "object" || e === null || An in e) return e;
  const t = Mr(e);
  if (t !== Is && t !== js) return e;
  var n = /* @__PURE__ */ new Map(), r = Sr(e), s = z(0), a = Lt, l = (c) => {
    if (Lt === a) return c();
    var o = ae, v = Lt;
    Ge(null), gr(a);
    var f = c();
    return Ge(o), gr(v), f;
  };
  return r && n.set("length", z(e.length)), new Proxy(e, { defineProperty(c, o, v) {
    (!("value" in v) || v.configurable === false || v.enumerable === false || v.writable === false) && Ys();
    var f = n.get(o);
    return f === void 0 ? l(() => {
      var b = z(v.value);
      return n.set(o, b), b;
    }) : p(f, v.value, true), true;
  }, deleteProperty(c, o) {
    var v = n.get(o);
    if (v === void 0) {
      if (o in c) {
        const f = l(() => z(ge));
        n.set(o, f), un(s);
      }
    } else p(v, ge), un(s);
    return true;
  }, get(c, o, v) {
    if (o === An) return e;
    var f = n.get(o), b = o in c;
    if (f === void 0 && (!b || on(c, o)?.writable) && (f = l(() => {
      var A = at(b ? c[o] : ge), x = z(A);
      return x;
    }), n.set(o, f)), f !== void 0) {
      var _ = i(f);
      return _ === ge ? void 0 : _;
    }
    return Reflect.get(c, o, v);
  }, getOwnPropertyDescriptor(c, o) {
    var v = Reflect.getOwnPropertyDescriptor(c, o);
    if (v && "value" in v) {
      var f = n.get(o);
      f && (v.value = i(f));
    } else if (v === void 0) {
      var b = n.get(o), _ = b?.v;
      if (b !== void 0 && _ !== ge) return { enumerable: true, configurable: true, value: _, writable: true };
    }
    return v;
  }, has(c, o) {
    if (o === An) return true;
    var v = n.get(o), f = v !== void 0 && v.v !== ge || Reflect.has(c, o);
    if (v !== void 0 || ne !== null && (!f || on(c, o)?.writable)) {
      v === void 0 && (v = l(() => {
        var _ = f ? at(c[o]) : ge, A = z(_);
        return A;
      }), n.set(o, v));
      var b = i(v);
      if (b === ge) return false;
    }
    return f;
  }, set(c, o, v, f) {
    var b = n.get(o), _ = o in c;
    if (r && o === "length") for (var A = v; A < b.v; A += 1) {
      var x = n.get(A + "");
      x !== void 0 ? p(x, ge) : A in c && (x = l(() => z(ge)), n.set(A + "", x));
    }
    if (b === void 0) (!_ || on(c, o)?.writable) && (b = l(() => z(void 0)), p(b, at(v)), n.set(o, b));
    else {
      _ = b.v !== ge;
      var F = l(() => at(v));
      p(b, F);
    }
    var m = Reflect.getOwnPropertyDescriptor(c, o);
    if (m?.set && m.set.call(f, v), !_) {
      if (r && typeof o == "string") {
        var q = n.get("length"), j = Number(o);
        Number.isInteger(j) && j >= q.v && p(q, j + 1);
      }
      un(s);
    }
    return true;
  }, ownKeys(c) {
    i(s);
    var o = Reflect.ownKeys(c).filter((b) => {
      var _ = n.get(b);
      return _ === void 0 || _.v !== ge;
    });
    for (var [v, f] of n) f.v !== ge && !(v in c) && o.push(v);
    return o;
  }, setPrototypeOf() {
    Ks();
  } });
}
var pr, Kr, Xr, Jr;
function ka() {
  if (pr === void 0) {
    pr = window, Kr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Xr = on(t, "firstChild").get, Jr = on(t, "nextSibling").get, vr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), vr(n) && (n.__t = void 0);
  }
}
function pt(e = "") {
  return document.createTextNode(e);
}
function Rn(e) {
  return Xr.call(e);
}
function hn(e) {
  return Jr.call(e);
}
function u(e, t) {
  return Rn(e);
}
function ht(e, t = false) {
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
function Sa(e) {
  e.textContent = "";
}
function Zr() {
  return false;
}
function Ma(e, t, n) {
  return document.createElementNS(Fr, e, void 0);
}
let hr = false;
function Ta() {
  hr || (hr = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function Ln(e) {
  var t = ae, n = ne;
  Ge(null), ot(null);
  try {
    return e();
  } finally {
    Ge(t), ot(n);
  }
}
function Ca(e, t, n, r = n) {
  e.addEventListener(t, () => Ln(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(true);
  } : e.__on_r = () => r(true), Ta();
}
function Ra(e) {
  ne === null && (ae === null && Vs(), Hs()), St && zs();
}
function Oa(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function bt(e, t) {
  var n = ne;
  n !== null && n.f & Ce && (e |= Ce);
  var r = { ctx: Re, deps: null, nodes: null, f: e | Ee | ze, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  ee?.register_created_effect(r);
  var s = r;
  if (e & Gt) zt !== null ? zt.push(r) : kt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Jt(r);
    } catch (l) {
      throw Le(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & Zt) && (s = s.first, e & it && e & Yt && s !== null && (s.f |= Yt));
  }
  if (s !== null && (s.parent = n, n !== null && Oa(s, n), ae !== null && ae.f & Ae && !(e & At))) {
    var a = ae;
    (a.effects ??= []).push(s);
  }
  return r;
}
function lr() {
  return ae !== null && !$e;
}
function Qr(e) {
  const t = bt(jn, null);
  return pe(t, be), t.teardown = e, t;
}
function je(e) {
  Ra();
  var t = ne.f, n = !ae && (t & et) !== 0 && (t & Bt) === 0;
  if (n) {
    var r = Re;
    (r.e ??= []).push(e);
  } else return $r(e);
}
function $r(e) {
  return bt(Gt | qs, e);
}
function Fa(e) {
  kt.ensure();
  const t = bt(At | Zt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? jt(t, () => {
      Le(t), r(void 0);
    }) : (Le(t), r(void 0));
  });
}
function Ia(e) {
  return bt(Gt, e);
}
function ja(e) {
  return bt(_n | Zt, e);
}
function or(e, t = 0) {
  return bt(jn | t, e);
}
function K(e, t = [], n = [], r = []) {
  ha(r, t, n, (s) => {
    bt(jn, () => e(...s.map(i)));
  });
}
function Nn(e, t = 0) {
  var n = bt(it | t, e);
  return n;
}
function Be(e) {
  return bt(et | Zt, e);
}
function es(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = St, r = ae;
    br(true), Ge(null);
    try {
      t.call(null);
    } finally {
      br(n), Ge(r);
    }
  }
}
function cr(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Ln(() => {
      s.abort(vt);
    });
    var r = n.next;
    n.f & At ? n.parent = null : Le(n, t), n = r;
  }
}
function La(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & et || Le(t), t = n;
  }
}
function Le(e, t = true) {
  var n = false;
  (t || e.f & Ps) && e.nodes !== null && e.nodes.end !== null && (Na(e.nodes.start, e.nodes.end), n = true), pe(e, Gn), cr(e, t && !n), pn(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const a of r) a.stop();
  es(e), e.f ^= Gn, e.f |= He;
  var s = e.parent;
  s !== null && s.first !== null && ts(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Na(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : hn(e);
    e.remove(), e = n;
  }
}
function ts(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jt(e, t, n = true) {
  var r = [];
  ns(e, r, true);
  var s = () => {
    n && Le(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var l = () => --a || s();
    for (var c of r) c.out(l);
  } else s();
}
function ns(e, t, n) {
  if (!(e.f & Ce)) {
    e.f ^= Ce;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const c of r) (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var a = s.next;
      if (!(s.f & At)) {
        var l = (s.f & Yt) !== 0 || (s.f & et) !== 0 && (e.f & it) !== 0;
        ns(s, t, l ? n : false);
      }
      s = a;
    }
  }
}
function ur(e) {
  rs(e, true);
}
function rs(e, t) {
  if (e.f & Ce) {
    e.f ^= Ce, e.f & be || (pe(e, Ee), kt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Yt) !== 0 || (n.f & et) !== 0;
      rs(n, s ? t : false), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (const l of a) (l.is_global || t) && l.in();
  }
}
function fr(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : hn(n);
    t.append(n), n = s;
  }
}
let Sn = false, St = false;
function br(e) {
  St = e;
}
let ae = null, $e = false;
function Ge(e) {
  ae = e;
}
let ne = null;
function ot(e) {
  ne = e;
}
let Ve = null;
function ss(e) {
  ae !== null && (Ve === null ? Ve = [e] : Ve.push(e));
}
let Fe = null, Ne = 0, qe = null;
function Da(e) {
  qe = e;
}
let as = 1, Ft = 0, Lt = Ft;
function gr(e) {
  Lt = e;
}
function is() {
  return ++as;
}
function bn(e) {
  var t = e.f;
  if (t & Ee) return true;
  if (t & Ae && (e.f &= ~Pt), t & lt) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (bn(a) && Hr(a), a.wv > e.wv) return true;
    }
    t & ze && Qe === null && pe(e, be);
  }
  return false;
}
function ls(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(Ve !== null && Vt.call(Ve, e))) for (var s = 0; s < r.length; s++) {
    var a = r[s];
    a.f & Ae ? ls(a, t, false) : t === a && (n ? pe(a, Ee) : a.f & be && pe(a, lt), sr(a));
  }
}
function os(e) {
  var t = Fe, n = Ne, r = qe, s = ae, a = Ve, l = Re, c = $e, o = Lt, v = e.f;
  Fe = null, Ne = 0, qe = null, ae = v & (et | At) ? null : e, Ve = null, Kt(e.ctx), $e = false, Lt = ++Ft, e.ac !== null && (Ln(() => {
    e.ac.abort(vt);
  }), e.ac = null);
  try {
    e.f |= Tn;
    var f = e.fn, b = f();
    e.f |= Bt;
    var _ = e.deps, A = ee?.is_fork;
    if (Fe !== null) {
      var x;
      if (A || pn(e, Ne), _ !== null && Ne > 0) for (_.length = Ne + Fe.length, x = 0; x < Fe.length; x++) _[Ne + x] = Fe[x];
      else e.deps = _ = Fe;
      if (lr() && e.f & ze) for (x = Ne; x < _.length; x++) (_[x].reactions ??= []).push(e);
    } else !A && _ !== null && Ne < _.length && (pn(e, Ne), _.length = Ne);
    if (Lr() && qe !== null && !$e && _ !== null && !(e.f & (Ae | lt | Ee))) for (x = 0; x < qe.length; x++) ls(qe[x], e);
    if (s !== null && s !== e) {
      if (Ft++, s.deps !== null) for (let F = 0; F < n; F += 1) s.deps[F].rv = Ft;
      if (t !== null) for (const F of t) F.rv = Ft;
      qe !== null && (r === null ? r = qe : r.push(...qe));
    }
    return e.f & xt && (e.f ^= xt), b;
  } catch (F) {
    return Dr(F);
  } finally {
    e.f ^= Tn, Fe = t, Ne = n, qe = r, ae = s, Ve = a, Kt(l), $e = c, Lt = o;
  }
}
function Pa(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Rs.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & Ae && (Fe === null || !Vt.call(Fe, t))) {
    var a = t;
    a.f & ze && (a.f ^= ze, a.f &= ~Pt), a.v !== ge && nr(a), ya(a), pn(a, 0);
  }
}
function pn(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Pa(e, n[r]);
}
function Jt(e) {
  var t = e.f;
  if (!(t & He)) {
    pe(e, be);
    var n = ne, r = Sn;
    ne = e, Sn = true;
    try {
      t & (it | Cr) ? La(e) : cr(e), es(e);
      var s = os(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = as;
      var a;
      Cs && ia && e.f & Ee && e.deps;
    } finally {
      Sn = r, ne = n;
    }
  }
}
async function qa() {
  await Promise.resolve(), ua();
}
function i(e) {
  var t = e.f, n = (t & Ae) !== 0;
  if (ae !== null && !$e) {
    var r = ne !== null && (ne.f & He) !== 0;
    if (!r && (Ve === null || !Vt.call(Ve, e))) {
      var s = ae.deps;
      if (ae.f & Tn) e.rv < Ft && (e.rv = Ft, Fe === null && s !== null && s[Ne] === e ? Ne++ : Fe === null ? Fe = [e] : Fe.push(e));
      else {
        (ae.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [ae] : Vt.call(a, ae) || a.push(ae);
      }
    }
  }
  if (St && It.has(e)) return It.get(e);
  if (n) {
    var l = e;
    if (St) {
      var c = l.v;
      return (!(l.f & be) && l.reactions !== null || us(l)) && (c = ir(l)), It.set(l, c), c;
    }
    var o = (l.f & ze) === 0 && !$e && ae !== null && (Sn || (ae.f & ze) !== 0), v = (l.f & Bt) === 0;
    bn(l) && (o && (l.f |= ze), Hr(l)), o && !v && (Vr(l), cs(l));
  }
  if (Qe?.has(e)) return Qe.get(e);
  if (e.f & xt) throw e.v;
  return e.v;
}
function cs(e) {
  if (e.f |= ze, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & Ae && !(t.f & ze) && (Vr(t), cs(t));
}
function us(e) {
  if (e.v === ge) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (It.has(t) || t.f & Ae && us(t)) return true;
  return false;
}
function gn(e) {
  var t = $e;
  try {
    return $e = true, e();
  } finally {
    $e = t;
  }
}
const Ba = ["touchstart", "touchmove"];
function Ua(e) {
  return Ba.includes(e);
}
const nn = Symbol("events"), fs = /* @__PURE__ */ new Set(), Jn = /* @__PURE__ */ new Set();
function Wa(e, t, n, r = {}) {
  function s(a) {
    if (r.capture || Zn.call(t, a), !a.cancelBubble) return Ln(() => n?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Et(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Nt(e, t, n, r, s) {
  var a = { capture: r, passive: s }, l = Wa(e, t, n, a);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Qr(() => {
    t.removeEventListener(e, l, a);
  });
}
function fe(e, t, n) {
  (t[nn] ??= {})[e] = n;
}
function Qt(e) {
  for (var t = 0; t < e.length; t++) fs.add(e[t]);
  for (var n of Jn) n(e);
}
let mr = null;
function Zn(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], a = s[0] || e.target;
  mr = e;
  var l = 0, c = mr === e && e[nn];
  if (c) {
    var o = s.indexOf(c);
    if (o !== -1 && (t === document || t === window)) {
      e[nn] = t;
      return;
    }
    var v = s.indexOf(t);
    if (v === -1) return;
    o <= v && (l = o);
  }
  if (a = s[l] || e.target, a !== t) {
    Os(e, "currentTarget", { configurable: true, get() {
      return a || n;
    } });
    var f = ae, b = ne;
    Ge(null), ot(null);
    try {
      for (var _, A = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var F = a[nn]?.[r];
          F != null && (!a.disabled || e.target === a) && F.call(a, e);
        } catch (m) {
          _ ? A.push(m) : _ = m;
        }
        if (e.cancelBubble || x === t || x === null) break;
        a = x;
      }
      if (_) {
        for (let m of A) queueMicrotask(() => {
          throw m;
        });
        throw _;
      }
    } finally {
      e[nn] = t, delete e.currentTarget, Ge(f), ot(b);
    }
  }
}
const za = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Ha(e) {
  return za?.createHTML(e) ?? e;
}
function Va(e) {
  var t = Ma("template");
  return t.innerHTML = Ha(e.replaceAll("<!>", "<!---->")), t.content;
}
function On(e, t) {
  var n = ne;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function N(e, t) {
  var n = (t & ta) !== 0, r = (t & na) !== 0, s, a = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Va(a ? e : "<!>" + e), n || (s = Rn(s)));
    var l = r || Kr ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var c = Rn(l), o = l.lastChild;
      On(c, o);
    } else On(l, l);
    return l;
  };
}
function Pn(e = "") {
  {
    var t = pt(e + "");
    return On(t, t), t;
  }
}
function Fn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = pt();
  return e.append(t, n), On(t, n), e;
}
function O(e, t) {
  e !== null && e.before(t);
}
function y(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ga(e, t) {
  return Ya(e, t);
}
const En = /* @__PURE__ */ new Map();
function Ya(e, { target: t, anchor: n, props: r = {}, events: s, context: a, intro: l = true, transformError: c }) {
  ka();
  var o = void 0, v = Fa(() => {
    var f = n ?? t.appendChild(pt());
    _a(f, { pending: () => {
    } }, (A) => {
      tt({});
      var x = Re;
      a && (x.c = a), s && (r.$$events = s), o = e(A, r) || {}, nt();
    }, c);
    var b = /* @__PURE__ */ new Set(), _ = (A) => {
      for (var x = 0; x < A.length; x++) {
        var F = A[x];
        if (!b.has(F)) {
          b.add(F);
          var m = Ua(F);
          for (const g of [t, document]) {
            var q = En.get(g);
            q === void 0 && (q = /* @__PURE__ */ new Map(), En.set(g, q));
            var j = q.get(F);
            j === void 0 ? (g.addEventListener(F, Zn, { passive: m }), q.set(F, 1)) : q.set(F, j + 1);
          }
        }
      }
    };
    return _(In(fs)), Jn.add(_), () => {
      for (var A of b) for (const m of [t, document]) {
        var x = En.get(m), F = x.get(A);
        --F == 0 ? (m.removeEventListener(A, Zn), x.delete(A), x.size === 0 && En.delete(m)) : x.set(A, F);
      }
      Jn.delete(_), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Ka.set(o, v), o;
}
let Ka = /* @__PURE__ */ new WeakMap();
class vs {
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
      if (r) ur(r), this.#s.delete(n);
      else {
        var s = this.#e.get(n);
        s && (this.#o.set(n, s.effect), this.#e.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [a, l] of this.#n) {
        if (this.#n.delete(a), a === t) break;
        const c = this.#e.get(l);
        c && (Le(c.effect), this.#e.delete(l));
      }
      for (const [a, l] of this.#o) {
        if (a === n || this.#s.has(a)) continue;
        const c = () => {
          if (Array.from(this.#n.values()).includes(a)) {
            var v = document.createDocumentFragment();
            fr(l, v), v.append(pt()), this.#e.set(a, { effect: l, fragment: v });
          } else Le(l);
          this.#s.delete(a), this.#o.delete(a);
        };
        this.#r || !r ? (this.#s.add(a), jt(l, c, false)) : c();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (Le(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = ee, s = Zr();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var a = document.createDocumentFragment(), l = pt();
      a.append(l), this.#e.set(t, { effect: Be(() => n(l)), fragment: a });
    } else this.#o.set(t, Be(() => n(this.anchor)));
    if (this.#n.set(r, t), s) {
      for (const [c, o] of this.#o) c === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [c, o] of this.#e) c === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(this.#a), r.ondiscard(this.#t);
    } else this.#a(r);
  }
}
function oe(e, t, n = false) {
  var r = new vs(e), s = n ? Yt : 0;
  function a(l, c) {
    r.ensure(l, c);
  }
  Nn(() => {
    var l = false;
    t((c, o = 0) => {
      l = true, a(o, c);
    }), l || a(-1, null);
  }, s);
}
const Xa = Symbol("NaN");
function Ja(e, t, n) {
  var r = new vs(e);
  Nn(() => {
    var s = t();
    s !== s && (s = Xa), r.ensure(s, n);
  });
}
function Ue(e, t) {
  return t;
}
function Za(e, t, n) {
  for (var r = [], s = t.length, a, l = t.length, c = 0; c < s; c++) {
    let b = t[c];
    jt(b, () => {
      if (a) {
        if (a.pending.delete(b), a.done.add(b), a.pending.size === 0) {
          var _ = e.outrogroups;
          Qn(e, In(a.done)), _.delete(a), _.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var o = r.length === 0 && n !== null;
    if (o) {
      var v = n, f = v.parentNode;
      Sa(f), f.append(v), e.items.clear();
    }
    Qn(e, t, !o);
  } else a = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Qn(e, t, n = true) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const c of l) r.add(e.items.get(c).e);
  }
  for (var s = 0; s < t.length; s++) {
    var a = t[s];
    if (r?.has(a)) {
      a.f |= st;
      const l = document.createDocumentFragment();
      fr(a, l);
    } else Le(t[s], n);
  }
}
var wr;
function We(e, t, n, r, s, a = null) {
  var l = e, c = /* @__PURE__ */ new Map(), o = (t & Or) !== 0;
  if (o) {
    var v = e;
    l = v.appendChild(pt());
  }
  var f = null, b = ma(() => {
    var g = n();
    return Sr(g) ? g : g == null ? [] : In(g);
  }), _, A = /* @__PURE__ */ new Map(), x = true;
  function F(g) {
    j.effect.f & He || (j.pending.delete(g), j.fallback = f, Qa(j, _, l, t, r), f !== null && (_.length === 0 ? f.f & st ? (f.f ^= st, rn(f, null, l)) : ur(f) : jt(f, () => {
      f = null;
    })));
  }
  function m(g) {
    j.pending.delete(g);
  }
  var q = Nn(() => {
    _ = i(b);
    for (var g = _.length, C = /* @__PURE__ */ new Set(), D = ee, I = Zr(), L = 0; L < g; L += 1) {
      var X = _[L], te = r(X, L), H = x ? null : c.get(te);
      H ? (H.v && Xt(H.v, X), H.i && Xt(H.i, L), I && D.unskip_effect(H.e)) : (H = $a(c, x ? l : wr ??= pt(), X, te, L, s, t, n), x || (H.e.f |= st), c.set(te, H)), C.add(te);
    }
    if (g === 0 && a && !f && (x ? f = Be(() => a(l)) : (f = Be(() => a(wr ??= pt())), f.f |= st)), g > C.size && Ws(), !x) if (A.set(D, C), I) {
      for (const [re, M] of c) C.has(re) || D.skip_effect(M.e);
      D.oncommit(F), D.ondiscard(m);
    } else F(D);
    i(b);
  }), j = { effect: q, items: c, pending: A, outrogroups: null, fallback: f };
  x = false;
}
function tn(e) {
  for (; e !== null && !(e.f & et); ) e = e.next;
  return e;
}
function Qa(e, t, n, r, s) {
  var a = (r & $s) !== 0, l = t.length, c = e.items, o = tn(e.effect.first), v, f = null, b, _ = [], A = [], x, F, m, q;
  if (a) for (q = 0; q < l; q += 1) x = t[q], F = s(x, q), m = c.get(F).e, m.f & st || (m.nodes?.a?.measure(), (b ??= /* @__PURE__ */ new Set()).add(m));
  for (q = 0; q < l; q += 1) {
    if (x = t[q], F = s(x, q), m = c.get(F).e, e.outrogroups !== null) for (const H of e.outrogroups) H.pending.delete(m), H.done.delete(m);
    if (m.f & Ce && (ur(m), a && (m.nodes?.a?.unfix(), (b ??= /* @__PURE__ */ new Set()).delete(m))), m.f & st) if (m.f ^= st, m === o) rn(m, null, n);
    else {
      var j = f ? f.next : o;
      m === e.effect.last && (e.effect.last = m.prev), m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), mt(e, f, m), mt(e, m, j), rn(m, j, n), f = m, _ = [], A = [], o = tn(f.next);
      continue;
    }
    if (m !== o) {
      if (v !== void 0 && v.has(m)) {
        if (_.length < A.length) {
          var g = A[0], C;
          f = g.prev;
          var D = _[0], I = _[_.length - 1];
          for (C = 0; C < _.length; C += 1) rn(_[C], g, n);
          for (C = 0; C < A.length; C += 1) v.delete(A[C]);
          mt(e, D.prev, I.next), mt(e, f, D), mt(e, I, g), o = g, f = I, q -= 1, _ = [], A = [];
        } else v.delete(m), rn(m, o, n), mt(e, m.prev, m.next), mt(e, m, f === null ? e.effect.first : f.next), mt(e, f, m), f = m;
        continue;
      }
      for (_ = [], A = []; o !== null && o !== m; ) (v ??= /* @__PURE__ */ new Set()).add(o), A.push(o), o = tn(o.next);
      if (o === null) continue;
    }
    m.f & st || _.push(m), f = m, o = tn(m.next);
  }
  if (e.outrogroups !== null) {
    for (const H of e.outrogroups) H.pending.size === 0 && (Qn(e, In(H.done)), e.outrogroups?.delete(H));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || v !== void 0) {
    var L = [];
    if (v !== void 0) for (m of v) m.f & Ce || L.push(m);
    for (; o !== null; ) !(o.f & Ce) && o !== e.fallback && L.push(o), o = tn(o.next);
    var X = L.length;
    if (X > 0) {
      var te = r & Or && l === 0 ? n : null;
      if (a) {
        for (q = 0; q < X; q += 1) L[q].nodes?.a?.measure();
        for (q = 0; q < X; q += 1) L[q].nodes?.a?.fix();
      }
      Za(e, L, te);
    }
  }
  a && Et(() => {
    if (b !== void 0) for (m of b) m.nodes?.a?.apply();
  });
}
function $a(e, t, n, r, s, a, l, c) {
  var o = l & Zs ? l & ea ? qt(n) : xa(n, false, false) : null, v = l & Qs ? qt(s) : null;
  return { v: o, i: v, e: Be(() => (a(t, o ?? n, v ?? s, c), () => {
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
function mt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const yr = [...` 	
\r\f\xA0\v\uFEFF`];
function ei(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var s of Object.keys(n)) if (n[s]) r = r ? r + " " + s : s;
    else if (r.length) for (var a = s.length, l = 0; (l = r.indexOf(s, l)) >= 0; ) {
      var c = l + a;
      (l === 0 || yr.includes(r[l - 1])) && (c === r.length || yr.includes(r[c])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(c + 1) : l = c;
    }
  }
  return r === "" ? null : r;
}
function ti(e, t) {
  return e == null ? null : String(e);
}
function Ze(e, t, n, r, s, a) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var c = ei(n, r, a);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (a && s !== a) for (var o in a) {
    var v = !!a[o];
    (s == null || v !== !!s[o]) && e.classList.toggle(o, v);
  }
  return a;
}
function Ht(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var a = ti(t);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  }
  return r;
}
const ni = Symbol("is custom element"), ri = Symbol("is html");
function Ie(e, t, n, r) {
  var s = si(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Bs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ai(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function si(e) {
  return e.__attributes ??= { [ni]: e.nodeName.includes("-"), [ri]: e.namespaceURI === Fr };
}
var xr = /* @__PURE__ */ new Map();
function ai(e) {
  var t = e.getAttribute("is") || e.nodeName, n = xr.get(t);
  if (n) return n;
  xr.set(t, n = []);
  for (var r, s = e, a = Element.prototype; a !== s; ) {
    r = Fs(s);
    for (var l in r) r[l].set && n.push(l);
    s = Mr(s);
  }
  return n;
}
function ds(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Ca(e, "input", async (s) => {
    var a = s ? e.defaultValue : e.value;
    if (a = qn(e) ? Bn(a) : a, n(a), ee !== null && r.add(ee), await qa(), a !== (a = t())) {
      var l = e.selectionStart, c = e.selectionEnd, o = e.value.length;
      if (e.value = a ?? "", c !== null) {
        var v = e.value.length;
        l === c && c === o && v > o ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = l, e.selectionEnd = Math.min(c, v));
      }
    }
  }), gn(t) == null && e.value && (n(qn(e) ? Bn(e.value) : e.value), ee !== null && r.add(ee)), or(() => {
    var s = t();
    if (e === document.activeElement) {
      var a = ee;
      if (r.has(a)) return;
    }
    qn(e) && s === Bn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function qn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Bn(e) {
  return e === "" ? null : +e;
}
function Er(e, t) {
  return e === t || e?.[An] === t;
}
function Dt(e = {}, t, n, r) {
  var s = Re.r, a = ne;
  return Ia(() => {
    var l, c;
    return or(() => {
      l = c, c = [], gn(() => {
        e !== n(...c) && (t(e, ...c), l && Er(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let o = a;
      for (; o !== s && o.parent !== null && o.parent.f & Gn; ) o = o.parent;
      const v = () => {
        c && Er(n(...c), e) && t(null, ...c);
      }, f = o.teardown;
      o.teardown = () => {
        v(), f?.();
      };
    };
  }), e;
}
function $n(e, t, n, r) {
  var s = r, a = true, l = () => (a && (a = false, s = r), s), c;
  c = e[t], c === void 0 && r !== void 0 && (c = l());
  var o;
  return o = () => {
    var v = e[t];
    return v === void 0 ? l() : (a = true, v);
  }, o;
}
function _s(e) {
  Re === null && Rr(), je(() => {
    const t = gn(e);
    if (typeof t == "function") return t;
  });
}
function ps(e) {
  Re === null && Rr(), _s(() => () => gn(e));
}
const ii = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ii);
function li() {
  G._start();
}
function oi(e) {
  try {
    const s = G.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, G.__wbindgen_export), l = Ye;
    G.decode_wav(s, a, l);
    var t = ve().getInt32(s + 4 * 0, true), n = ve().getInt32(s + 4 * 1, true), r = ve().getInt32(s + 4 * 2, true);
    if (r) throw De(n);
    return De(t);
  } finally {
    G.__wbindgen_add_to_stack_pointer(16);
  }
}
function ci(e) {
  let t, n;
  try {
    const a = G.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, G.__wbindgen_export), c = Ye;
    G.detect_format(a, l, c);
    var r = ve().getInt32(a + 4 * 0, true), s = ve().getInt32(a + 4 * 1, true);
    return t = r, n = s, an(r, s);
  } finally {
    G.__wbindgen_add_to_stack_pointer(16), G.__wbindgen_export3(t, n, 1);
  }
}
function ui(e, t) {
  try {
    const a = G.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, G.__wbindgen_export), c = Ye;
    G.entropy_blocks(a, l, c, t);
    var n = ve().getInt32(a + 4 * 0, true), r = ve().getInt32(a + 4 * 1, true), s = hi(n, r).slice();
    return G.__wbindgen_export3(n, r * 4, 4), s;
  } finally {
    G.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e, t) {
  try {
    const a = G.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, G.__wbindgen_export), c = Ye;
    G.extract_strings(a, l, c, t);
    var n = ve().getInt32(a + 4 * 0, true), r = ve().getInt32(a + 4 * 1, true), s = ve().getInt32(a + 4 * 2, true);
    if (s) throw De(r);
    return De(n);
  } finally {
    G.__wbindgen_add_to_stack_pointer(16);
  }
}
function vi(e, t, n) {
  try {
    const l = G.__wbindgen_add_to_stack_pointer(-16), c = Ut(e, G.__wbindgen_export), o = Ye;
    G.hex_rows(l, c, o, t, n);
    var r = ve().getInt32(l + 4 * 0, true), s = ve().getInt32(l + 4 * 1, true), a = bi(r, s).slice();
    return G.__wbindgen_export3(r, s * 4, 4), a;
  } finally {
    G.__wbindgen_add_to_stack_pointer(16);
  }
}
function di(e) {
  try {
    const s = G.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, G.__wbindgen_export), l = Ye;
    G.parse_elf(s, a, l);
    var t = ve().getInt32(s + 4 * 0, true), n = ve().getInt32(s + 4 * 1, true), r = ve().getInt32(s + 4 * 2, true);
    if (r) throw De(n);
    return De(t);
  } finally {
    G.__wbindgen_add_to_stack_pointer(16);
  }
}
function _i(e) {
  try {
    const s = G.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, G.__wbindgen_export), l = Ye;
    G.parse_gba(s, a, l);
    var t = ve().getInt32(s + 4 * 0, true), n = ve().getInt32(s + 4 * 1, true), r = ve().getInt32(s + 4 * 2, true);
    if (r) throw De(n);
    return De(t);
  } finally {
    G.__wbindgen_add_to_stack_pointer(16);
  }
}
function hs() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(an(t, n));
    return wt(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(Wt(n)), s = Ar(r, G.__wbindgen_export, G.__wbindgen_export2), a = Ye;
    ve().setInt32(t + 4, a, true), ve().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(an(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let r, s;
    try {
      r = t, s = n, console.error(an(t, n));
    } finally {
      G.__wbindgen_export3(r, s, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return wt(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return wt(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return wt(t);
  }, __wbg_set_6be42768c690e380: function(t, n, r) {
    Wt(t)[De(n)] = De(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    Wt(t)[n >>> 0] = De(r);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const r = Wt(n).stack, s = Ar(r, G.__wbindgen_export, G.__wbindgen_export2), a = Ye;
    ve().setInt32(t + 4, a, true), ve().setInt32(t + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return wt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = an(t, n);
    return wt(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return wt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = Wt(t);
    return wt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    De(t);
  } } };
}
function wt(e) {
  vn === dt.length && dt.push(dt.length + 1);
  const t = vn;
  return vn = dt[t], dt[t] = e, t;
}
function pi(e) {
  e < 1028 || (dt[e] = vn, vn = e);
}
function hi(e, t) {
  return e = e >>> 0, gi().subarray(e / 4, e / 4 + t);
}
function bi(e, t) {
  e = e >>> 0;
  const n = ve(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(De(n.getUint32(s, true)));
  return r;
}
let Rt = null;
function ve() {
  return (Rt === null || Rt.buffer.detached === true || Rt.buffer.detached === void 0 && Rt.buffer !== G.memory.buffer) && (Rt = new DataView(G.memory.buffer)), Rt;
}
let sn = null;
function gi() {
  return (sn === null || sn.byteLength === 0) && (sn = new Float32Array(G.memory.buffer)), sn;
}
function an(e, t) {
  return wi(e >>> 0, t);
}
let ln = null;
function fn() {
  return (ln === null || ln.byteLength === 0) && (ln = new Uint8Array(G.memory.buffer)), ln;
}
function Wt(e) {
  return dt[e];
}
let dt = new Array(1024).fill(void 0);
dt.push(void 0, null, true, false);
let vn = dt.length;
function Ut(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return fn().set(e, n / 1), Ye = e.length, n;
}
function Ar(e, t, n) {
  if (n === void 0) {
    const c = dn.encode(e), o = t(c.length, 1) >>> 0;
    return fn().subarray(o, o + c.length).set(c), Ye = c.length, o;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const a = fn();
  let l = 0;
  for (; l < r; l++) {
    const c = e.charCodeAt(l);
    if (c > 127) break;
    a[s + l] = c;
  }
  if (l !== r) {
    l !== 0 && (e = e.slice(l)), s = n(s, r, r = l + e.length * 3, 1) >>> 0;
    const c = fn().subarray(s + l, s + r), o = dn.encodeInto(e, c);
    l += o.written, s = n(s, r, l, 1) >>> 0;
  }
  return Ye = l, s;
}
function De(e) {
  const t = Wt(e);
  return pi(e), t;
}
let Mn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Mn.decode();
const mi = 2146435072;
let Un = 0;
function wi(e, t) {
  return Un += t, Un >= mi && (Mn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Mn.decode(), Un = t), Mn.decode(fn().subarray(e, e + t));
}
const dn = new TextEncoder();
"encodeInto" in dn || (dn.encodeInto = function(e, t) {
  const n = dn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let Ye = 0, G;
function bs(e, t) {
  return G = e.exports, Rt = null, sn = null, ln = null, G.__wbindgen_start(), G;
}
async function yi(e, t) {
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
function xi(e) {
  if (G !== void 0) return G;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = hs();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return bs(n);
}
async function gs(e) {
  if (G !== void 0) return G;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = hs();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await yi(await e, t);
  return bs(n);
}
const Ei = Object.freeze(Object.defineProperty({ __proto__: null, _start: li, decode_wav: oi, default: gs, detect_format: ci, entropy_blocks: ui, extract_strings: fi, hex_rows: vi, initSync: xi, parse_elf: di, parse_gba: _i }, Symbol.toStringTag, { value: "Module" }));
let Wn = null;
function mn() {
  return Wn || (Wn = gs()), Wn.then(() => Ei);
}
const Ai = "scry-theme";
function ms() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ki() {
  const e = ms() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(Ai, e);
  } catch {
  }
  return e;
}
const er = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), zn = 65536, Hn = er.length * 4;
function ws() {
  const n = 84 + Hn, r = new ArrayBuffer(n), s = new DataView(r), a = new Uint8Array(r);
  a[0] = 127, a[1] = 69, a[2] = 76, a[3] = 70, a[4] = 1, a[5] = 1, a[6] = 1, s.setUint16(16, 2, true), s.setUint16(18, 243, true), s.setUint32(20, 1, true), s.setUint32(24, zn, true), s.setUint32(28, 52, true), s.setUint32(32, 0, true), s.setUint32(36, 0, true), s.setUint16(40, 52, true), s.setUint16(42, 32, true), s.setUint16(44, 1, true), s.setUint16(46, 0, true), s.setUint16(48, 0, true), s.setUint16(50, 0, true), s.setUint32(52, 1, true), s.setUint32(56, 84, true), s.setUint32(60, zn, true), s.setUint32(64, zn, true), s.setUint32(68, Hn, true), s.setUint32(72, Hn, true), s.setUint32(76, 5, true), s.setUint32(80, 4096, true);
  for (let l = 0; l < er.length; l++) s.setUint32(84 + l * 4, er[l], true);
  return new Uint8Array(r);
}
const ys = "demo-rv32-spi-i2c.elf", kr = 64 * 1024 * 1024;
function tr(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function xs(e) {
  if (!e) throw new Error("no file");
  if (e.size > kr) throw new Error(`file too large (${tr(e.size)} > ${tr(kr)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var Si = N('<span class="bar svelte-1i6c60u"></span>'), Mi = N('<span class="bar shimmer svelte-1i6c60u"></span>'), Ti = N('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Ci = N('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Ri = N('<p class="loading svelte-1i6c60u"> </p>'), Oi = N('<p class="err svelte-1i6c60u"> </p>'), Fi = N('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Ii(e, t) {
  tt(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let r = z(false), s = z(""), a = z(at([])), l = z(""), c = z(at({}));
  async function o(M) {
    p(s, "");
    try {
      const B = await xs(M);
      t.onfile?.(B);
    } catch (B) {
      p(s, B.message || String(B), true);
    }
  }
  function v(M) {
    M.preventDefault(), p(r, false);
    const B = M.dataTransfer?.files?.[0];
    B && o(B);
  }
  function f(M) {
    M.preventDefault(), p(r, true);
  }
  function b() {
    p(r, false);
  }
  function _(M) {
    const B = M.target.files?.[0];
    B && o(B);
  }
  async function A(M) {
    if (!n.test(M)) {
      p(s, `sample blocked: bad name "${M}"`);
      return;
    }
    p(s, ""), p(l, `fetching ${M}\u2026`);
    try {
      const B = await fetch(`../v1/samples/${encodeURIComponent(M)}`);
      if (!B.ok) {
        p(s, `fetch failed: ${B.status}`), p(l, "");
        return;
      }
      p(l, `reading ${M}\u2026`);
      const Y = new Uint8Array(await B.arrayBuffer());
      p(l, ""), t.onfile?.({ name: M, bytes: Y });
    } catch (B) {
      p(s, String(B), true), p(l, "");
    }
  }
  function x() {
    p(s, ""), t.onfile?.({ name: ys, bytes: ws() });
  }
  je(() => {
    let M = false;
    return (async () => {
      try {
        const B = await fetch("../v1/samples/manifest.json");
        if (!B.ok) return;
        const Y = await B.json();
        if (M || !Array.isArray(Y)) return;
        p(a, Y, true);
        const ie = await mn();
        if (M) return;
        await Promise.all(Y.map(async (w) => {
          if (n.test(w.file)) try {
            const R = await fetch(`../v1/samples/${encodeURIComponent(w.file)}`);
            if (!R.ok) return;
            const k = new Uint8Array(await R.arrayBuffer());
            if (M) return;
            const E = Math.max(1, Math.ceil(k.length / 12)), h = ie.entropy_blocks(k, E);
            p(c, { ...i(c), [w.file]: Array.from(h) }, true);
          } catch {
          }
        }));
      } catch {
      }
    })(), () => {
      M = true;
    };
  });
  var F = Fi(), m = u(F);
  let q;
  var j = d(u(m), 4), g = u(j), C = u(g), D = d(g, 2), I = d(j, 2);
  {
    var L = (M) => {
      var B = Ci(), Y = d(u(B), 2);
      We(Y, 21, () => i(a), Ue, (R, k) => {
        var E = Ti(), h = u(E), S = u(h), P = d(h, 2), Z = u(P);
        {
          var Q = (se) => {
            var W = Fn(), le = ht(W);
            We(le, 17, () => i(c)[i(k).file], Ue, (de, me) => {
              var we = Si();
              K((_e) => Ht(we, `height: ${_e ?? ""}px`), [() => Math.max(2, i(me) * 14)]), O(de, we);
            }), O(se, W);
          }, $ = (se) => {
            var W = Fn(), le = ht(W);
            We(le, 16, () => Array(12), Ue, (de, me, we) => {
              var _e = Mi();
              Ht(_e, `animation-delay: ${we * 40}ms`), O(de, _e);
            }), O(se, W);
          };
          oe(Z, (se) => {
            i(c)[i(k).file] ? se(Q) : se($, -1);
          });
        }
        K(() => {
          Ie(E, "title", i(k).insns > 0 ? `${i(k).desc} \u2014 ${i(k).insns} instructions` : i(k).desc), y(S, i(k).file);
        }), fe("click", E, () => A(i(k).file)), O(R, E);
      });
      var ie = d(Y, 2), w = u(ie);
      K((R) => y(w, R), [() => i(a).map((R) => `${R.file} \u2014 ${R.desc}`).join("  \xB7  ")]), O(M, B);
    };
    oe(I, (M) => {
      i(a).length && M(L);
    });
  }
  var X = d(I, 2);
  {
    var te = (M) => {
      var B = Ri(), Y = u(B);
      K(() => y(Y, i(l))), O(M, B);
    };
    oe(X, (M) => {
      i(l) && M(te);
    });
  }
  var H = d(X, 2);
  {
    var re = (M) => {
      var B = Oi(), Y = u(B);
      K(() => y(Y, i(s))), O(M, B);
    };
    oe(H, (M) => {
      i(s) && M(re);
    });
  }
  K(() => q = Ze(m, 1, "zone svelte-1i6c60u", null, q, { over: i(r) })), Nt("drop", m, v), Nt("dragover", m, f), Nt("dragleave", m, b), fe("change", C, _), fe("click", D, x), O(e, F), nt();
}
Qt(["change", "click"]);
var ji = N('<span class="ct svelte-etynpr"> </span>'), Li = N('<span class="ct svelte-etynpr"> </span>'), Ni = N('<span class="ct svelte-etynpr"> </span>'), Di = N('<span class="ct svelte-etynpr"> </span>'), Pi = N("<button> <!> <!> <!> <!></button>"), qi = N('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), Bi = N('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Ui = N('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Wi = N('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), zi = N('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Hi = N('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Vi = N('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Gi = N('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Yi = N('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), Ki = N('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Xi(e, t) {
  tt(t, true);
  let n = z("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let s = z(""), a = _t(() => {
    if (!t.strings) return [];
    const j = i(s).trim().toLowerCase();
    return j ? t.strings.filter((g) => g.text.toLowerCase().includes(j)) : t.strings;
  });
  const l = 80, c = _t(() => t.report ? Math.max(1, ...t.report.sections.map((j) => Number(j.size) || 0)) : 1);
  function o(j) {
    return "0x" + Number(j).toString(16).toUpperCase().padStart(8, "0");
  }
  var v = Ki(), f = u(v);
  We(f, 21, () => r, Ue, (j, g) => {
    var C = _t(() => Ds(i(g), 2));
    let D = () => i(C)[0], I = () => i(C)[1];
    var L = Pi();
    let X;
    var te = u(L), H = d(te);
    {
      var re = (k) => {
        var E = ji(), h = u(E);
        K(() => y(h, t.report.sections.length)), O(k, E);
      };
      oe(H, (k) => {
        D() === "sections" && k(re);
      });
    }
    var M = d(H, 2);
    {
      var B = (k) => {
        var E = Li(), h = u(E);
        K(() => y(h, t.report.segments.length)), O(k, E);
      };
      oe(M, (k) => {
        D() === "segments" && k(B);
      });
    }
    var Y = d(M, 2);
    {
      var ie = (k) => {
        var E = Ni(), h = u(E);
        K(() => y(h, t.report.symbols.length)), O(k, E);
      };
      oe(Y, (k) => {
        D() === "symbols" && k(ie);
      });
    }
    var w = d(Y, 2);
    {
      var R = (k) => {
        var E = Di(), h = u(E);
        K(() => y(h, t.strings.length)), O(k, E);
      };
      oe(w, (k) => {
        D() === "strings" && t.strings && k(R);
      });
    }
    K(() => {
      X = Ze(L, 1, "tab svelte-etynpr", null, X, { active: i(n) === D() }), y(te, `${I() ?? ""} `);
    }), fe("click", L, () => p(n, D(), true)), O(j, L);
  });
  var b = d(f, 2), _ = u(b);
  {
    var A = (j) => {
      var g = qi(), C = d(u(g), 2), D = u(C), I = d(C, 4), L = u(I), X = d(I, 4), te = u(X), H = d(X, 4), re = u(H), M = d(H, 4), B = u(M), Y = d(M, 4), ie = u(Y), w = d(Y, 4), R = u(w), k = d(w, 4), E = u(k), h = d(k, 4), S = u(h);
      K(() => {
        y(D, t.report.summary.class), y(L, t.report.summary.data), y(te, t.report.summary.osabi), y(re, t.report.summary.kind), y(B, t.report.summary.machine), y(ie, t.report.summary.entry), y(R, t.report.summary.n_sections), y(E, t.report.summary.n_segments), y(S, t.report.summary.n_symbols);
      }), O(j, g);
    }, x = (j) => {
      var g = Ui(), C = d(u(g));
      We(C, 21, () => t.report.sections, Ue, (D, I) => {
        var L = Bi(), X = u(L), te = u(X), H = d(X), re = u(H), M = d(H), B = u(M), Y = d(M), ie = u(Y), w = d(Y), R = u(w), k = d(w), E = u(k), h = d(k), S = u(h), P = d(h), Z = u(P);
        K((Q) => {
          Ie(L, "title", `Jump to offset ${i(I).offset ?? ""} in HEX`), y(te, i(I).idx), y(re, i(I).name || "\u2014"), y(B, i(I).kind), y(ie, i(I).addr), y(R, i(I).offset), y(E, i(I).size), y(S, i(I).flags), Ht(Z, `width: ${Q ?? ""}px`);
        }, [() => Math.max(1, Number(i(I).size) / i(c) * l)]), fe("click", L, () => t.onJumpToOffset?.(parseInt(i(I).offset, 16))), O(D, L);
      }), O(j, g);
    }, F = (j) => {
      var g = zi(), C = d(u(g));
      We(C, 21, () => t.report.segments, Ue, (D, I) => {
        var L = Wi(), X = u(L), te = u(X), H = d(X), re = u(H), M = d(H), B = u(M), Y = d(M), ie = u(Y), w = d(Y), R = u(w), k = d(w), E = u(k), h = d(k), S = u(h);
        K(() => {
          Ie(L, "title", `Jump to offset ${i(I).offset ?? ""} in HEX`), y(te, i(I).idx), y(re, i(I).kind), y(B, i(I).vaddr), y(ie, i(I).offset), y(R, i(I).filesz), y(E, i(I).memsz), y(S, i(I).flags);
        }), fe("click", L, () => t.onJumpToOffset?.(parseInt(i(I).offset, 16))), O(D, L);
      }), O(j, g);
    }, m = (j) => {
      var g = Vi(), C = d(u(g));
      We(C, 21, () => t.report.symbols, Ue, (D, I) => {
        var L = Hi(), X = u(L), te = u(X), H = d(X), re = u(H), M = d(H), B = u(M), Y = d(M), ie = u(Y), w = d(Y), R = u(w);
        K(() => {
          y(te, i(I).name), y(re, i(I).bind), y(B, i(I).kind), y(ie, i(I).value), y(R, i(I).size);
        }), O(D, L);
      }), O(j, g);
    }, q = (j) => {
      var g = Yi(), C = ht(g), D = u(C), I = d(D, 2), L = u(I), X = d(C, 2), te = d(u(X));
      We(te, 21, () => i(a), Ue, (H, re) => {
        var M = Gi(), B = u(M), Y = u(B), ie = d(B), w = u(ie);
        K((R, k) => {
          Ie(M, "title", `Jump to offset ${R ?? ""} in HEX`), y(Y, k), y(w, i(re).text);
        }, [() => o(i(re).offset), () => o(i(re).offset)]), fe("click", M, () => t.onJumpToOffset?.(i(re).offset)), O(H, M);
      }), K(() => y(L, `${i(a).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), ds(D, () => i(s), (H) => p(s, H)), O(j, g);
    };
    oe(_, (j) => {
      i(n) === "summary" ? j(A) : i(n) === "sections" ? j(x, 1) : i(n) === "segments" ? j(F, 2) : i(n) === "symbols" ? j(m, 3) : i(n) === "strings" && j(q, 4);
    });
  }
  O(e, v), nt();
}
Qt(["click"]);
var Ji = N('<span class="strip-col svelte-14j5q0g"></span>'), Zi = N('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), Qi = N('<span role="presentation"> </span>'), $i = N('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <!> <pre class="grid svelte-14j5q0g"></pre></div>');
function el(e, t) {
  tt(t, true);
  let n = $n(t, "jumpTo", 3, null), r = z(0);
  const s = 16 * 32;
  let a = z(at([])), l = z(null), c = z(at([])), o = z(0), v = z(""), f = z(null), b = z(0), _ = z(0), A = z(null);
  const x = 400;
  je(() => {
    let E = false;
    return mn().then((h) => {
      if (E) return;
      p(l, h, true), p(o, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), p(c, t.bytes ? i(l).entropy_blocks(t.bytes, i(o)) : [], true), m();
    }), () => {
      E = true;
    };
  }), je(() => {
    if (n() == null) return;
    const E = Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Number(n()) | 0)), h = Math.floor(E / 16) * 16, S = Math.floor(h / s) * s;
    p(r, S), m(), p(f, h), p(b, performance.now() + x), Aa(_), requestAnimationFrame(() => {
      const P = i(F);
      if (!P) return;
      const Z = P.querySelector(`[data-row-off="${h}"]`);
      if (!Z) return;
      const Q = P.getBoundingClientRect(), se = Z.getBoundingClientRect().top - Q.top - Q.height / 3;
      P.scrollTo({ top: P.scrollTop + se, behavior: "smooth" });
    });
  }), je(() => {
    if (i(_) === 0) return;
    let E = 0;
    const h = () => {
      if (performance.now() >= i(b)) {
        p(f, null);
        return;
      }
      p(_, i(_) + 1 & 4095), E = requestAnimationFrame(h);
    };
    return E = requestAnimationFrame(h), () => cancelAnimationFrame(E);
  });
  let F = z(null);
  function m() {
    !i(l) || !t.bytes || p(a, i(l).hex_rows(t.bytes, i(r), s), true);
  }
  function q(E) {
    p(r, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, i(r) + E)), true), p(r, Math.floor(i(r) / 16) * 16), m();
  }
  function j(E) {
    E.preventDefault();
    let h = i(v).trim();
    if (!h) return;
    (h.startsWith("0x") || h.startsWith("0X")) && (h = h.slice(2));
    const S = parseInt(h, 16);
    Number.isFinite(S) && (p(r, Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, S)), true), p(r, Math.floor(i(r) / 16) * 16), m());
  }
  function g(E) {
    if (!i(c).length || !t.bytes) return;
    const S = E.currentTarget.getBoundingClientRect(), P = Math.max(0, Math.min(1, (E.clientX - S.left) / S.width)), Z = Math.floor(P * t.bytes.length);
    p(r, Math.floor(Z / 16) * 16), m();
  }
  let C = _t(() => t.bytes && t.bytes.length ? i(r) / t.bytes.length : 0);
  function D(E, h) {
    if (i(f) == null || E !== i(f)) return 0;
    const S = i(b) - performance.now();
    return S <= 0 ? 0 : S / x;
  }
  let I = _t(() => {
    const E = [];
    for (let h = 0; h < i(a).length; h++) E.push({ off: i(r) + h * 16, text: i(a)[h] });
    return E;
  });
  var L = $i(), X = u(L), te = d(u(X), 2), H = u(te), re = d(H, 2), M = d(re, 2), B = d(u(M), 2), Y = d(M, 2), ie = d(Y, 2), w = d(X, 2);
  {
    var R = (E) => {
      var h = Zi(), S = d(u(h), 2), P = u(S);
      We(P, 17, () => i(c), Ue, (se, W) => {
        var le = Ji();
        K((de) => Ht(le, `height: ${de ?? ""}%; opacity: ${0.35 + i(W) * 0.65}`), [() => Math.max(2, i(W) * 100)]), O(se, le);
      });
      var Z = d(P, 2), Q = d(S, 2), $ = u(Q);
      K((se) => {
        Ht(Z, `left: ${i(C) * 100}%`), y($, `${se ?? ""} B / col`);
      }, [() => i(o).toLocaleString()]), fe("click", S, g), O(E, h);
    };
    oe(w, (E) => {
      i(c).length > 1 && E(R);
    });
  }
  var k = d(w, 2);
  We(k, 21, () => i(I), Ue, (E, h, S) => {
    var P = Qi();
    let Z;
    var Q = u(P);
    K(($) => {
      Z = Ze(P, 1, "hex-row svelte-14j5q0g", null, Z, { hover: i(A) === S, flash: i(h).off === i(f) }), Ie(P, "data-row-off", i(h).off), Ht(P, $), y(Q, `${i(h).text ?? ""}
`);
    }, [() => i(h).off === i(f) ? `--flash-a: ${D(i(h).off, i(_))}` : ""]), Nt("mouseenter", P, () => p(A, S, true)), Nt("mouseleave", P, () => i(A) === S && p(A, null)), O(E, P);
  }), Dt(k, (E) => p(F, E), () => i(F)), K((E) => Ie(B, "placeholder", E), [() => i(r).toString(16).padStart(8, "0").toUpperCase()]), fe("click", H, () => q(-s)), fe("click", re, () => q(-16)), Nt("submit", M, j), ds(B, () => i(v), (E) => p(v, E)), fe("click", Y, () => q(16)), fe("click", ie, () => q(s)), O(e, L), nt();
}
Qt(["click"]);
var tl = N('<span class="w-meta svelte-59bj26"> </span>'), nl = N('<div class="w-empty svelte-59bj26"> </div>'), rl = N('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), sl = N('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), al = N('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), il = N('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function ll(e, t) {
  tt(t, true);
  let n = z(null), r = z(""), s = z(null), a = z(null), l = null, c = null, o = null, v = 0, f = 0, b = 0, _ = z("0:00 / 0:00");
  function A(w) {
    return "0x" + (Number(w) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function x(w) {
    return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KiB` : `${(w / 1024 / 1024).toFixed(2)} MiB`;
  }
  function F(w) {
    if (w < 1) return `${(w * 1e3).toFixed(0)} ms`;
    if (w < 60) return `${w.toFixed(2)} s`;
    const R = Math.floor(w / 60), k = w - R * 60;
    return `${R}m ${k.toFixed(1)}s`;
  }
  function m(w) {
    return w.replace(/\s+$/g, "");
  }
  async function q(w) {
    if (p(r, ""), !w) {
      p(n, null);
      return;
    }
    try {
      const k = (await mn()).decode_wav(w);
      p(n, k, true), o = null, p(_, `0:00 / ${F(k.duration)}`), requestAnimationFrame(() => j({ playhead: 0 }));
    } catch (R) {
      console.error("[scry/wave] decode failed", R), p(n, null), p(r, String(R?.message || R), true);
    }
  }
  function j({ playhead: w = null } = {}) {
    if (!i(s) || !i(n)) return;
    const R = window.devicePixelRatio || 1, k = i(s).getBoundingClientRect(), E = Math.max(1, Math.floor(k.width * R)), h = Math.max(1, Math.floor(k.height * R));
    i(s).width = E, i(s).height = h;
    const S = getComputedStyle(i(s)), P = S.getPropertyValue("--w-bg").trim() || "#000", Z = S.getPropertyValue("--w-grid").trim() || "#333", Q = S.getPropertyValue("--w-peak").trim() || "#888", $ = S.getPropertyValue("--w-rms").trim() || "#bcd", se = S.getPropertyValue("--w-accent").trim() || "#9fe3c7", W = i(s).getContext("2d");
    W.fillStyle = P, W.fillRect(0, 0, E, h), W.strokeStyle = Z, W.lineWidth = 1;
    const le = h / 2;
    for (const _e of [0.25, 0.5, 0.75]) {
      const U = Math.floor(h * _e) + 0.5;
      W.beginPath(), W.moveTo(0, U), W.lineTo(E, U), W.stroke();
    }
    const de = i(n).envelope, me = de.length, we = E / me;
    for (let _e = 0; _e < me; _e++) {
      const U = de[_e], ue = Math.floor(_e * we), he = Math.max(1, Math.floor(we) - 1), ke = le - U.max * le, Ke = le - U.min * le;
      W.fillStyle = Q, W.fillRect(ue, Math.floor(ke), he, Math.max(1, Math.ceil(Ke - ke)));
      const Xe = U.rms * le;
      W.fillStyle = $, W.fillRect(ue, Math.floor(le - Xe), he, Math.max(1, Math.ceil(2 * Xe)));
    }
    if (w != null) {
      const _e = Math.floor(w * E);
      W.strokeStyle = se, W.lineWidth = 2 * R, W.beginPath(), W.moveTo(_e, 0), W.lineTo(_e, h), W.stroke();
    }
  }
  function g() {
    if (!i(n)) return null;
    if (o) return o;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const w = i(n).samples instanceof Float32Array ? i(n).samples : new Float32Array(i(n).samples);
    return o = l.createBuffer(1, w.length, i(n).fmt.sample_rate), o.copyToChannel(w, 0), o;
  }
  function C() {
    if (!l || !c || !i(n)) {
      b = 0;
      return;
    }
    const w = f + (l.currentTime - v), R = i(n).duration, k = Math.max(0, Math.min(1, w / R));
    j({ playhead: k }), p(_, `${F(Math.min(w, R))} / ${F(R)}`), w < R ? b = requestAnimationFrame(C) : b = 0;
  }
  function D() {
    if (b && (cancelAnimationFrame(b), b = 0), c) {
      try {
        c.stop();
      } catch {
      }
      c.disconnect(), c = null;
    }
  }
  function I(w) {
    if (!i(n)) return;
    const R = g();
    R && (D(), c = l.createBufferSource(), c.buffer = R, c.connect(l.destination), c.onended = () => {
      b && cancelAnimationFrame(b), b = 0, j({ playhead: 0 }), p(_, `0:00 / ${F(i(n).duration)}`), c = null;
    }, l.state === "suspended" && l.resume(), f = Math.max(0, Math.min(i(n).duration - 1e-3, w)), v = l.currentTime, c.start(0, f), b = requestAnimationFrame(C));
  }
  function L(w) {
    if (!i(n)) return;
    const R = i(s).getBoundingClientRect(), k = (w.clientX - R.left) / R.width;
    I(k * i(n).duration);
  }
  je(() => {
    const w = t.bytes;
    return q(w), () => D();
  }), je(() => {
    if (!i(a)) return;
    const w = new ResizeObserver(() => i(n) && j({ playhead: 0 }));
    return w.observe(i(a)), () => w.disconnect();
  });
  var X = il(), te = u(X), H = d(u(te), 2);
  {
    var re = (w) => {
      var R = tl(), k = u(R);
      K((E) => y(k, `${i(n).fmt.channels ?? ""}ch @ ${i(n).fmt.sample_rate ?? ""} Hz \xB7 ${i(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${E ?? ""}`), [() => F(i(n).duration)]), O(w, R);
    };
    oe(H, (w) => {
      i(n) && w(re);
    });
  }
  var M = d(te, 2);
  {
    var B = (w) => {
      var R = nl(), k = u(R);
      K(() => y(k, `Not a parseable WAV: ${i(r) ?? ""}`)), O(w, R);
    }, Y = (w) => {
      var R = rl();
      O(w, R);
    }, ie = (w) => {
      var R = al(), k = ht(R), E = u(k), h = u(E), S = u(h), P = d(u(S)), Z = u(P), Q = d(S, 2), $ = d(u(Q)), se = u($), W = d(Q, 2), le = d(u(W)), de = u(le), me = d(W, 2), we = d(u(me)), _e = u(we), U = d(h, 2), ue = u(U), he = d(u(ue)), ke = u(he), Ke = d(ue, 2), Xe = d(u(Ke)), Mt = u(Xe), T = d(Ke, 2), V = d(u(T)), J = u(V), ye = d(T, 2), xe = d(u(ye)), Je = u(xe), Se = d(U, 2), Me = u(Se), Oe = d(u(Me)), ct = u(Oe), ce = d(Me, 2);
      We(ce, 17, () => i(n).chunks.slice(0, 4), Ue, (ut, en) => {
        var yn = sl(), xn = u(yn), Es = u(xn), As = d(xn), ks = u(As);
        K((Ss, Ms, Ts) => {
          y(Es, Ss), y(ks, `${Ms ?? ""} @ ${Ts ?? ""}`);
        }, [() => m(i(en).id), () => x(i(en).size), () => A(i(en).offset)]), O(ut, yn);
      });
      var Te = d(k, 2), Pe = u(Te), rt = d(Pe, 2), Tt = d(rt, 2), gt = u(Tt), $t = d(Te, 2), wn = u($t);
      Dt(wn, (ut) => p(s, ut), () => i(s)), Dt($t, (ut) => p(a, ut), () => i(a)), K((ut, en, yn, xn) => {
        y(Z, i(n).fmt.format === 1 ? "PCM (int)" : i(n).fmt.format === 3 ? "IEEE float" : `tag ${i(n).fmt.format}`), y(se, i(n).fmt.channels), y(de, `${i(n).fmt.sample_rate ?? ""} Hz`), y(_e, `${i(n).fmt.bits_per_sample ?? ""}-bit`), y(ke, ut), y(Mt, en), y(J, yn), y(Je, `${xn ?? ""}/s`), y(ct, i(n).chunks.length), y(gt, i(_));
      }, [() => Number(i(n).total_frames).toLocaleString(), () => F(i(n).duration), () => x(i(n).data_len), () => x(i(n).fmt.byte_rate)]), fe("click", Pe, () => I(0)), fe("click", rt, () => {
        D(), j({ playhead: 0 }), p(_, `0:00 / ${F(i(n).duration)}`);
      }), fe("click", wn, L), O(w, R);
    };
    oe(M, (w) => {
      i(r) ? w(B) : i(n) ? w(ie, -1) : w(Y, 1);
    });
  }
  O(e, X), nt();
}
Qt(["click"]);
var ol = N('<span class="c-meta svelte-1uww35p"> </span>'), cl = N('<div class="c-empty svelte-1uww35p"> </div>'), ul = N('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), fl = N('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), vl = N(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), dl = N('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function _l(e, t) {
  tt(t, true);
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
  function c(g) {
    return g < 1024 ? `${g} B` : g < 1024 * 1024 ? `${(g / 1024).toFixed(1)} KiB` : `${(g / 1024 / 1024).toFixed(2)} MiB`;
  }
  async function o(g) {
    if (p(r, ""), !g) {
      p(n, null);
      return;
    }
    try {
      const C = await mn();
      p(n, C.parse_gba(g), true);
    } catch (C) {
      console.error("[scry/cart] parse failed", C), p(n, null), p(r, String(C?.message || C), true);
    }
  }
  je(() => {
    const g = t.bytes;
    o(g);
  });
  function v(g) {
    if (!t.bytes) return null;
    const C = t.bytes.subarray(g, Math.min(t.bytes.length, g + 16)), D = [], I = [];
    for (let L = 0; L < C.length; L++) D.push(s(C[L])), I.push(l(C[L])), L === 7 && D.push("");
    return { off: g, hex: D.join(" ").replace(/  /g, "  "), ascii: I.join("") };
  }
  let f = _t(() => {
    if (!t.bytes) return [];
    const g = [];
    for (let C = 160; C < 224; C += 16) {
      const D = v(C);
      D && g.push(D);
    }
    return g;
  });
  var b = dl(), _ = u(b), A = d(u(_), 2);
  {
    var x = (g) => {
      var C = ol(), D = u(C);
      K((I) => y(D, `"${(i(n).title || "(blank)") ?? ""}" \xB7 ${i(n).game_code ?? ""} \xB7 ${I ?? ""}`), [() => c(i(n).rom_size)]), O(g, C);
    };
    oe(A, (g) => {
      i(n) && g(x);
    });
  }
  var F = d(_, 2);
  {
    var m = (g) => {
      var C = cl(), D = u(C);
      K(() => y(D, `parse failed: ${i(r) ?? ""}`)), O(g, C);
    }, q = (g) => {
      var C = ul();
      O(g, C);
    }, j = (g) => {
      var C = vl(), D = u(C), I = d(u(D), 2), L = d(u(I)), X = u(L), te = d(I, 2), H = d(u(te)), re = u(H), M = d(te, 2), B = d(u(M)), Y = u(B), ie = d(M, 2), w = d(u(ie), 2), R = u(w), k = d(ie, 2), E = d(u(k)), h = u(E), S = d(k, 2), P = d(u(S)), Z = u(P), Q = d(S, 2), $ = d(u(Q)), se = u($), W = d(Q, 2), le = d(u(W), 2), de = u(le), me = d(W, 2), we = d(u(me)), _e = u(we), U = d(D, 2), ue = d(u(U), 2);
      We(ue, 21, () => i(f), Ue, (he, ke) => {
        var Ke = fl(), Xe = u(Ke), Mt = u(Xe), T = d(Xe, 2), V = u(T), J = d(T, 2), ye = u(J);
        K((xe) => {
          y(Mt, xe), y(V, i(ke).hex), y(ye, i(ke).ascii);
        }, [() => a(i(ke).off)]), O(he, Ke);
      }), K((he, ke, Ke, Xe, Mt, T, V) => {
        y(X, i(n).title || "(blank)"), y(re, i(n).game_code || "----"), y(Y, i(n).maker_code || "--"), y(R, `0x${he ?? ""} ${i(n).fixed_ok ? "\u2713" : "\u2717"}`), y(h, `0x${ke ?? ""}`), y(Z, `0x${Ke ?? ""}`), y(se, `0x${Xe ?? ""}`), y(de, `stored 0x${Mt ?? ""} \xB7
            computed 0x${T ?? ""}
            ${i(n).checksum_ok ? " \u2713" : " \u2717"}`), y(_e, V);
      }, [() => s(i(n).fixed), () => s(i(n).unit_code), () => s(i(n).device_type), () => s(i(n).version), () => s(i(n).checksum), () => s(i(n).checksum_computed), () => c(i(n).rom_size)]), O(g, C);
    };
    oe(F, (g) => {
      i(r) ? g(m) : i(n) ? g(j, -1) : g(q, 1);
    });
  }
  O(e, b), nt();
}
var pl = N('<section class="mh-host svelte-sq0dz7"><div class="mh-bar svelte-sq0dz7"><span class="mh-title svelte-sq0dz7"> </span> <form class="mh-jumpform svelte-sq0dz7"><span class="mh-jumplab svelte-sq0dz7">JUMP</span> <input type="text" placeholder="0x..." class="mh-jump svelte-sq0dz7" aria-label="jump to offset"/></form></div> <div class="mh-scroll svelte-sq0dz7"><div class="mh-sizer svelte-sq0dz7"></div></div></section>');
function hl(e, t) {
  tt(t, true);
  let n = $n(t, "cursor", 3, null), r = $n(t, "follow", 3, false);
  const s = 16, a = 20, l = 6, c = 14e6;
  let o, v, f, b = 0, _ = [], A = null, x = { physicalPx: 0, scale: 1 }, F = -1;
  function m(h) {
    return (h >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function q(h) {
    return "0x" + (h >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function j(h) {
    return h >= 32 && h <= 126 ? String.fromCharCode(h) : ".";
  }
  function g(h, S) {
    const P = Math.max(0, h * S);
    return P <= c ? { physicalPx: P, scale: 1 } : { physicalPx: c, scale: P / c };
  }
  function C(h, S, P, Z) {
    if (P === 0) return { start: 0, end: 0, topPx: 0 };
    const Q = h * Z, $ = Math.ceil(S / a) + l * 2, se = Math.floor(Q / a) - l, W = Math.max(0, se), le = Math.min(P, W + $);
    let de;
    if (Z === 1) de = W * a;
    else {
      const me = Q - W * a;
      de = h - me / Z;
    }
    return { start: W, end: le, topPx: de };
  }
  function D(h, S) {
    const P = h * s, Z = Math.min(S.byteLength, P + s), Q = S.subarray(P, Z);
    let $ = "", se = "";
    for (let W = 0; W < Q.length; W++) $ += m(Q[W]), se += j(Q[W]), W === 7 ? $ += "  " : W < Q.length - 1 && ($ += " ");
    return { addr: q(P), hex: $, asc: se };
  }
  function I(h) {
    for (; _.length < h; ) {
      const S = document.createElement("div");
      S.className = "mh-row", S.style.position = "absolute", S.style.left = "0", S.style.right = "0", S.style.height = `${a}px`;
      const P = document.createElement("span");
      P.className = "mh-addr";
      const Z = document.createElement("span");
      Z.className = "mh-bytes";
      const Q = document.createElement("span");
      Q.className = "mh-ascii", S.appendChild(P), S.appendChild(Z), S.appendChild(Q), _.push(S);
    }
  }
  function L() {
    const h = t.bytes;
    if (!v) return;
    if (!h || h.byteLength === 0) {
      for (const $ of _) $.parentNode && $.remove();
      v.style.height = "0px";
      return;
    }
    const S = Math.ceil(h.byteLength / s);
    x = g(S, a), v.style.height = `${x.physicalPx}px`;
    const P = C(o.scrollTop, b, S, x.scale), Z = P.end - P.start;
    I(Z);
    for (let $ = Z; $ < _.length; $++) _[$].parentNode && _[$].remove();
    const Q = typeof n() == "number" && n() >= 0 && n() < h.byteLength ? Math.floor(n() / s) : -1;
    for (let $ = 0; $ < Z; $++) {
      const se = P.start + $, W = D(se, h), le = _[$];
      le.style.top = `${P.topPx + $ * a}px`;
      const [de, me, we] = le.children;
      de.textContent = W.addr, me.textContent = W.hex, we.textContent = W.asc, se === Q ? le.classList.add("mh-cursor") : le.classList.remove("mh-cursor"), le.parentNode !== v && v.appendChild(le);
    }
  }
  function X() {
    const h = t.bytes;
    if (!h || typeof n() != "number" || n() < 0 || n() >= h.byteLength || !o) return;
    const Z = Math.floor(n() / s) * a / x.scale, Q = a * 4, $ = o.scrollTop, se = $ + b;
    (Z < $ + Q || Z > se - Q) && (o.scrollTop = Math.max(0, Z - b / 2));
  }
  function te(h) {
    const S = t.bytes;
    if (!S || h < 0 || h >= S.byteLength) return;
    const Q = Math.floor(h / s) * a / x.scale;
    o.scrollTop = Math.max(0, Q - b / 2), L();
  }
  function H(h) {
    h.preventDefault();
    const S = f.value.trim().replace(/^0x/i, ""), P = parseInt(S, 16);
    Number.isFinite(P) && te(P);
  }
  let re;
  _s(() => {
    re = new ResizeObserver(() => {
      b = o.clientHeight, L();
    }), re.observe(o), o.addEventListener("scroll", L, { passive: true }), L();
  }), ps(() => {
    try {
      re?.disconnect();
    } catch {
    }
  }), je(() => {
    t.bytes !== A && (A = t.bytes, F = -1, o && (o.scrollTop = 0), L(), t.bytes && t.bytes.byteLength >= 192 && requestAnimationFrame(() => te(160)));
  }), je(() => {
    const h = n(), S = r();
    if (!t.bytes) return;
    const P = typeof h == "number" && h >= 0 && h < t.bytes.byteLength ? Math.floor(h / s) : -1;
    P !== F && (F = P, L(), S && X());
  });
  var M = pl(), B = u(M), Y = u(B), ie = u(Y), w = d(Y, 2), R = d(u(w), 2);
  Dt(R, (h) => f = h, () => f);
  var k = d(B, 2), E = u(k);
  Dt(E, (h) => v = h, () => v), Dt(k, (h) => o = h, () => o), K((h) => y(ie, h), [() => t.bytes ? `ROM (${t.bytes.byteLength.toLocaleString()} bytes)` : "ROM (empty)"]), Nt("submit", w, H), O(e, M), nt();
}
var bl = N('<span class="g-meta svelte-1kb9ux"> </span>'), gl = N('<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-split svelte-1kb9ux"><div class="g-left svelte-1kb9ux"><div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <button type="button"> </button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div></div> <div class="g-right svelte-1kb9ux"><div class="g-sub-bar svelte-1kb9ux"><span class="g-sub-title svelte-1kb9ux">[ ROM / INSPECTOR ]</span> <span class="g-sub-hint svelte-1kb9ux"><!></span></div> <!></div></div></div>');
function ml(e, t) {
  tt(t, true);
  let n, r = null, s = false, a = z(false), l = z("cart ready \xB7 click PLAY"), c = z(null), o = z(false), v = 0, f = 0;
  const b = 480, _ = 320, A = 134217728, x = 100;
  function F(U) {
    return U < 1024 ? `${U} B` : U < 1024 * 1024 ? `${(U / 1024).toFixed(1)} KiB` : `${(U / (1024 * 1024)).toFixed(2)} MiB`;
  }
  function m() {
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
    return r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((U, ue) => console.warn("[scry/v2/game/gba]", ue)), r.setCanvas(n), console.log("[scry/dbg/v2] post-setCanvas:", "indirectCanvas=", !!r.indirectCanvas, "targetCanvas=", !!r.targetCanvas, "drawCallback=", r.video.drawCallback?.toString().slice(0, 80)), r.setBios(window.biosBin), r;
  }
  async function q() {
    if (t.bytes && !i(a)) {
      if (n.focus(), !s) {
        p(l, "loading ROM\u2026"), await new Promise((U) => requestAnimationFrame(U)), await new Promise((U) => requestAnimationFrame(U));
        try {
          const U = m(), ue = t.bytes.buffer.slice(t.bytes.byteOffset, t.bytes.byteOffset + t.bytes.byteLength);
          if (!U.setRom(ue)) {
            p(l, "rom rejected");
            return;
          }
          s = true, U.runStable(), p(a, true), p(l, "running"), C();
        } catch (U) {
          console.error("[scry/v2/game] load failed", U), p(l, "error: " + (U?.message || U));
        }
        return;
      }
      r.runStable(), p(a, true), p(l, "running"), C();
    }
  }
  function j() {
    !r || !r.hasRom() || (r.pause(), p(a, false), p(l, "paused"), D());
  }
  function g(U) {
    if (v = requestAnimationFrame(g), !i(a) || !r || !t.bytes || U - f < x) return;
    f = U;
    const ue = r.cpu?.gprs?.[15];
    if (typeof ue != "number") return;
    const he = (ue >>> 0) - A;
    p(c, he >= 0 && he < t.bytes.byteLength ? he : null, true);
  }
  function C() {
    v || (f = 0, v = requestAnimationFrame(g));
  }
  function D() {
    v && cancelAnimationFrame(v), v = 0;
  }
  function I() {
    p(o, !i(o));
  }
  function L() {
    if (!r || !t.bytes) return;
    const U = i(a);
    if (U) {
      try {
        r.pause();
      } catch {
      }
      p(a, false);
    }
    D(), p(c, null), s = false, p(l, "cart ready \xB7 click PLAY"), U && q();
  }
  je(() => {
    if (t.bytes) i(a) || p(l, "cart ready \xB7 click PLAY");
    else {
      if (r && i(a)) try {
        r.pause();
      } catch {
      }
      D(), p(c, null), p(o, false), s = false, p(a, false), p(l, "idle");
    }
  }), ps(() => {
    if (r && i(a)) try {
      r.pause();
    } catch {
    }
    D();
  });
  var X = gl(), te = u(X), H = d(u(te), 2);
  {
    var re = (U) => {
      var ue = bl(), he = u(ue);
      K((ke) => y(he, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${ke ?? ""}`), [() => F(t.header.rom_size)]), O(U, ue);
    };
    oe(H, (U) => {
      t.header && U(re);
    });
  }
  var M = d(te, 2), B = u(M), Y = u(B), ie = u(Y);
  Ie(ie, "width", b), Ie(ie, "height", _), Dt(ie, (U) => n = U, () => n);
  var w = d(Y, 2), R = u(w), k = d(R, 2), E = d(k, 2), h = d(E, 2);
  let S;
  var P = u(h), Z = d(h, 2), Q = u(Z), $ = d(B, 2), se = u($), W = d(u(se), 2), le = u(W);
  {
    var de = (U) => {
      var ue = Pn();
      K((he) => y(ue, `PC\u21920x${he ?? ""}`), [() => i(c).toString(16).toUpperCase().padStart(8, "0")]), O(U, ue);
    }, me = (U) => {
      var ue = Pn("PC outside cart");
      O(U, ue);
    }, we = (U) => {
      var ue = Pn("pause \xB7 scroll \xB7 jump 0x...");
      O(U, ue);
    };
    oe(le, (U) => {
      i(c) !== null ? U(de) : i(a) ? U(me, 1) : U(we, -1);
    });
  }
  var _e = d(se, 2);
  hl(_e, { get bytes() {
    return t.bytes;
  }, get cursor() {
    return i(c);
  }, get follow() {
    return i(o);
  } }), K(() => {
    R.disabled = !t.bytes || i(a), k.disabled = !i(a), E.disabled = !t.bytes || !s, S = Ze(h, 1, "g-btn svelte-1kb9ux", null, S, { "g-btn-on": i(o) }), h.disabled = !s, y(P, `FOLLOW ${i(o) ? "ON" : "OFF"}`), y(Q, i(l));
  }), fe("click", R, q), fe("click", k, j), fe("click", E, L), fe("click", h, I), O(e, X), nt();
}
Qt(["click"]);
var wl = N('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), yl = N('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), xl = N('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), El = N('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function Al(e, t) {
  tt(t, true);
  var n = El(), r = u(n);
  {
    var s = (c) => {
      var o = wl();
      O(c, o);
    }, a = (c) => {
      var o = yl(), v = ht(o), f = d(u(v), 2), b = u(f), _ = d(v, 2), A = d(u(_), 2), x = u(A), F = d(_, 2), m = d(u(F), 2), q = u(m);
      K((j, g) => {
        Ie(f, "title", t.file.name), y(b, t.file.name), y(x, j), y(q, g);
      }, [() => tr(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), O(c, o);
    }, l = (c) => {
      var o = xl();
      O(c, o);
    };
    oe(r, (c) => {
      t.parsing ? c(s) : t.file ? c(a, 1) : c(l, -1);
    });
  }
  O(e, n), nt();
}
var kl = N('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function Sl(e, t) {
  tt(t, true);
  let n = z(false), r = 0;
  function s(o) {
    const v = o.dataTransfer;
    if (!v) return false;
    const f = v.types;
    if (!f) return false;
    for (let b = 0; b < f.length; b++) if (f[b] === "Files") return true;
    return false;
  }
  je(() => {
    function o(_) {
      s(_) && (_.preventDefault(), r++, p(n, true));
    }
    function v(_) {
      s(_) && (_.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "copy"));
    }
    function f(_) {
      s(_) && (r = Math.max(0, r - 1), r === 0 && p(n, false));
    }
    async function b(_) {
      if (!s(_)) return;
      _.preventDefault(), r = 0, p(n, false);
      const A = _.dataTransfer?.files?.[0];
      if (A) try {
        const x = await xs(A);
        t.onfile?.(x);
      } catch (x) {
        t.onerror?.(x.message || String(x));
      }
    }
    return window.addEventListener("dragenter", o), window.addEventListener("dragover", v), window.addEventListener("dragleave", f), window.addEventListener("drop", b), () => {
      window.removeEventListener("dragenter", o), window.removeEventListener("dragover", v), window.removeEventListener("dragleave", f), window.removeEventListener("drop", b);
    };
  });
  var a = Fn(), l = ht(a);
  {
    var c = (o) => {
      var v = kl();
      O(o, v);
    };
    oe(l, (o) => {
      i(n) && o(c);
    });
  }
  O(e, a), nt();
}
var Ml = N('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), Tl = N('<span class="s-badge entrance svelte-1n46o8q"> </span>'), Cl = N('<span class="s-summary svelte-1n46o8q"> </span>'), Rl = N('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), Ol = N('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), Fl = N('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Il = N('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), jl = N('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Ll = N('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), Nl = N('<p class="err svelte-1n46o8q"> </p>'), Dl = N('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), Pl = N("<!> <!>", 1), ql = N('<span class="s-hint svelte-1n46o8q"> </span>'), Bl = N('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function Ul(e, t) {
  tt(t, true);
  let n = z(null), r = z(null), s = z(null), a = z(null), l = z(null), c = z(null), o = z(null), v = z(""), f = z("inspect"), b = z(at(ms())), _ = z(false), A = z(null), x = z(""), F = z(false);
  const m = "scry \xB7 awaiting binary", q = "scry-booted-v2", j = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, g = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  je(() => {
    function T(V) {
      if (V.origin !== location.origin) return;
      const J = V.data;
      J && (J.type === "scry-theme" && (J.value === "light" || J.value === "dark") ? (document.documentElement.setAttribute("data-theme", J.value), p(b, J.value, true)) : J.type === "scry-load-demo" && X());
    }
    return window.addEventListener("message", T), () => window.removeEventListener("message", T);
  });
  async function C({ name: T, bytes: V }) {
    p(n, { name: T, bytes: V }, true), p(v, ""), p(s, null), p(a, null), p(l, null), p(c, null), p(r, null), p(o, null), p(_, true);
    try {
      const J = await mn();
      if (p(r, J.detect_format(V), true), i(r) === "elf") p(s, J.parse_elf(V), true), p(f, "inspect");
      else if (i(r) === "wav") {
        try {
          p(a, J.decode_wav(V), true);
        } catch {
        }
        p(f, "wave");
      } else if (i(r) === "gba") {
        try {
          p(l, J.parse_gba(V), true);
        } catch {
        }
        p(f, "game");
      } else p(f, "hex");
      p(c, J.extract_strings(V, 4), true);
      const ye = Math.max(64, Math.ceil(V.length / 256)), xe = J.entropy_blocks(V, ye);
      if (xe.length) {
        let Je = 0;
        for (let Se = 0; Se < xe.length; Se++) Je += xe[Se];
        p(o, Je / xe.length * 8);
      }
    } catch (J) {
      p(v, String(J), true);
    } finally {
      p(_, false);
    }
  }
  function D() {
    p(n, null), p(s, null), p(a, null), p(l, null), p(c, null), p(r, null), p(v, ""), p(o, null);
  }
  function I(T) {
    p(v, T, true);
  }
  function L() {
    p(b, ki(), true);
  }
  function X() {
    C({ name: ys, bytes: ws() });
  }
  function te(T) {
    p(f, "hex"), p(A, { o: T, t: performance.now() }, true);
  }
  let H = _t(() => {
    if (!i(n)) return null;
    if (i(s)) {
      const T = i(s).summary;
      return [i(r)?.toUpperCase(), T.machine, T.class, T.kind].filter(Boolean).join(" \xB7 ");
    }
    return (i(r) || "raw").toUpperCase();
  }), re = _t(() => {
    if (!i(n)) return null;
    if (i(s)) {
      const T = i(s).summary, V = [];
      return T.class && T.machine ? V.push(`${T.class} ${T.machine}`) : T.machine && V.push(T.machine), V.push(`${i(s).sections.length} sections`), V.push(`${i(s).symbols.length} symbols`), i(o) != null && V.push(`avg entropy ${i(o).toFixed(1)} bits`), V.join(" \xB7 ");
    }
    if (i(a)) {
      const T = i(a).fmt, V = i(a).duration < 1 ? `${(i(a).duration * 1e3).toFixed(0)} ms` : `${i(a).duration.toFixed(2)} s`, J = [`${T.channels}ch ${T.sample_rate} Hz`, `${T.bits_per_sample}-bit`, V];
      return i(o) != null && J.push(`avg entropy ${i(o).toFixed(1)} bits`), J.join(" \xB7 ");
    }
    if (i(l)) {
      const T = ["GBA cart", `"${i(l).title || "(blank)"}"`, `code ${i(l).game_code}`];
      return i(o) != null && T.push(`avg entropy ${i(o).toFixed(1)} bits`), T.join(" \xB7 ");
    }
    return i(o) != null ? `bytes only \xB7 entropy ${i(o).toFixed(1)} bits` : null;
  });
  je(() => {
    if (sessionStorage.getItem(q)) {
      p(x, m), p(F, true);
      return;
    }
    let T = 0;
    const V = setInterval(() => {
      if (T++, p(x, m.slice(0, T), true), T >= m.length) {
        clearInterval(V), p(F, true);
        try {
          sessionStorage.setItem(q, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(V);
  });
  var M = Bl(), B = ht(M);
  Sl(B, { onfile: C, onerror: I });
  var Y = d(B, 2);
  let ie;
  var w = u(Y), R = u(w);
  {
    var k = (T) => {
      var V = Ml(), J = u(V);
      let ye;
      K(() => {
        Ie(V, "title", i(n) ? "Clear file \xB7 back to import" : ""), ye = Ze(J, 1, "s-brand svelte-1n46o8q", null, ye, { "s-brand-clickable": !!i(n) });
      }), fe("click", V, D), O(T, V);
    };
    oe(R, (T) => {
      g || T(k);
    });
  }
  var E = d(R, 2);
  {
    var h = (T) => {
      var V = Fl(), J = u(V);
      {
        var ye = (Me) => {
          var Oe = Rl(), ct = u(Oe);
          Ja(ct, () => i(n).name, (Pe) => {
            var rt = Tl(), Tt = u(rt);
            K(() => y(Tt, `[ ${i(H) ?? ""} ]`)), O(Pe, rt);
          });
          var ce = d(ct, 2);
          {
            var Te = (Pe) => {
              var rt = Cl(), Tt = u(rt);
              K(() => y(Tt, i(re))), O(Pe, rt);
            };
            oe(ce, (Pe) => {
              i(re) && Pe(Te);
            });
          }
          O(Me, Oe);
        };
        oe(J, (Me) => {
          i(H) && Me(ye);
        });
      }
      var xe = d(J, 2);
      {
        var Je = (Me) => {
          var Oe = Ol();
          O(Me, Oe);
        };
        oe(xe, (Me) => {
          i(_) && Me(Je);
        });
      }
      var Se = d(xe, 2);
      fe("click", Se, D), O(T, V);
    }, S = (T) => {
      var V = Il();
      O(T, V);
    };
    oe(E, (T) => {
      i(n) ? T(h) : T(S, -1);
    });
  }
  var P = d(E, 2);
  {
    var Z = (T) => {
      var V = jl(), J = u(V), ye = u(J);
      K(() => y(ye, i(b) === "dark" ? "\u263C" : "\u263E")), fe("click", J, L), O(T, V);
    };
    oe(P, (T) => {
      g || T(Z);
    });
  }
  var Q = d(w, 2), $ = u(Q);
  Al($, { get file() {
    return i(n);
  }, get format() {
    return i(r);
  }, get parsing() {
    return i(_);
  } });
  var se = d($, 2), W = u(se);
  {
    var le = (T) => {
      var V = Ll(), J = u(V);
      let ye;
      var xe = d(J, 2);
      let Je;
      var Se = d(xe, 2);
      let Me;
      var Oe = d(Se, 2);
      let ct;
      var ce = d(Oe, 2);
      let Te;
      K(() => {
        J.disabled = i(r) !== "elf", Ie(J, "title", i(r) === "elf" ? "" : "INSPECT is ELF-only"), ye = Ze(J, 1, "svelte-1n46o8q", null, ye, { on: i(f) === "inspect" }), Je = Ze(xe, 1, "svelte-1n46o8q", null, Je, { on: i(f) === "hex" }), Se.disabled = i(r) !== "wav", Ie(Se, "title", i(r) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), Me = Ze(Se, 1, "svelte-1n46o8q", null, Me, { on: i(f) === "wave" }), Oe.disabled = i(r) !== "gba", Ie(Oe, "title", i(r) === "gba" ? "" : "CART is GBA-only"), ct = Ze(Oe, 1, "svelte-1n46o8q", null, ct, { on: i(f) === "cart" }), ce.disabled = i(r) !== "gba", Ie(ce, "title", i(r) === "gba" ? "" : "GAME is GBA-only"), Te = Ze(ce, 1, "svelte-1n46o8q", null, Te, { on: i(f) === "game" });
      }), fe("click", J, () => p(f, "inspect")), fe("click", xe, () => p(f, "hex")), fe("click", Se, () => p(f, "wave")), fe("click", Oe, () => p(f, "cart")), fe("click", ce, () => p(f, "game")), O(T, V);
    };
    oe(W, (T) => {
      i(n) && T(le);
    });
  }
  var de = d(W, 2), me = u(de);
  {
    var we = (T) => {
      Ii(T, { onfile: C });
    }, _e = (T) => {
      var V = Pl(), J = ht(V);
      {
        var ye = (ce) => {
          var Te = Nl(), Pe = u(Te);
          K(() => y(Pe, `parse failed: ${i(v) ?? ""}`)), O(ce, Te);
        };
        oe(J, (ce) => {
          i(v) && ce(ye);
        });
      }
      var xe = d(J, 2);
      {
        var Je = (ce) => {
          var Te = Fn(), Pe = ht(Te);
          {
            var rt = (gt) => {
              Xi(gt, { get report() {
                return i(s);
              }, get strings() {
                return i(c);
              }, onJumpToOffset: te });
            }, Tt = (gt) => {
              var $t = Dl(), wn = d(u($t)), ut = u(wn);
              K(() => y(ut, i(r))), O(gt, $t);
            };
            oe(Pe, (gt) => {
              i(s) ? gt(rt) : i(r) && i(r) !== "elf" && gt(Tt, 1);
            });
          }
          O(ce, Te);
        }, Se = (ce) => {
          {
            let Te = _t(() => i(A)?.o);
            el(ce, { get bytes() {
              return i(n).bytes;
            }, get jumpTo() {
              return i(Te);
            } });
          }
        }, Me = (ce) => {
          ll(ce, { get bytes() {
            return i(n).bytes;
          } });
        }, Oe = (ce) => {
          _l(ce, { get bytes() {
            return i(n).bytes;
          } });
        }, ct = (ce) => {
          ml(ce, { get bytes() {
            return i(n).bytes;
          }, get header() {
            return i(l);
          } });
        };
        oe(xe, (ce) => {
          i(f) === "inspect" ? ce(Je) : i(f) === "hex" ? ce(Se, 1) : i(f) === "wave" ? ce(Me, 2) : i(f) === "cart" ? ce(Oe, 3) : i(f) === "game" && ce(ct, 4);
        });
      }
      O(T, V);
    };
    oe(me, (T) => {
      i(n) ? T(_e, -1) : T(we);
    });
  }
  var U = d(Q, 2), ue = u(U), he = d(u(ue), 1, true), ke = d(ue, 2);
  {
    var Ke = (T) => {
      var V = ql(), J = u(V);
      K(() => y(J, j[i(f)] ?? "")), O(T, V);
    };
    oe(ke, (T) => {
      i(n) && T(Ke);
    });
  }
  var Xe = d(ke, 2), Mt = u(Xe);
  K((T) => {
    ie = Ze(Y, 1, "app svelte-1n46o8q", null, ie, { embedded: g }), y(he, i(n) ? g ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : i(F) ? g ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${i(x)}\u2588`), y(Mt, `MODULE \xB7 ${T ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => i(n) ? i(f).toUpperCase() : "EMPTY"]), O(e, M), nt();
}
Qt(["click"]);
Ga(Ul, { target: document.getElementById("app") });
