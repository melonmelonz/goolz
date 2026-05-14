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
var Sr = Array.isArray, Rs = Array.prototype.indexOf, Vt = Array.prototype.includes, In = Array.from, Os = Object.defineProperty, on = Object.getOwnPropertyDescriptor, Fs = Object.getOwnPropertyDescriptors, Is = Object.prototype, js = Array.prototype, Mr = Object.getPrototypeOf, fr = Object.isExtensible;
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
function Ps(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const ke = 2, Gt = 4, jn = 8, Cr = 1 << 24, it = 16, et = 32, kt = 64, Hn = 128, Ge = 512, we = 1024, Ee = 2048, ot = 4096, Re = 8192, Ye = 16384, Bt = 32768, Vn = 1 << 25, Yt = 65536, Gn = 1 << 17, Ds = 1 << 18, Zt = 1 << 19, qs = 1 << 20, st = 1 << 25, Dt = 65536, Tn = 1 << 21, pn = 1 << 22, Et = 1 << 23, An = Symbol("$state"), Bs = Symbol(""), pt = new class extends Error {
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
const Zs = 1, Qs = 2, Or = 4, $s = 8, ea = 16, ta = 1, na = 2, ye = Symbol(), Fr = "http://www.w3.org/1999/xhtml";
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
let ia = false, Oe = null;
function Kt(e) {
  Oe = e;
}
function tt(e, t = false, n) {
  Oe = { p: Oe, i: false, c: null, e: null, s: e, x: null, r: se, l: null };
}
function nt(e) {
  var t = Oe, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) $r(r);
  }
  return t.i = true, Oe = t.p, {};
}
function Lr() {
  return true;
}
let Ot = [];
function Nr() {
  var e = Ot;
  Ot = [], Ns(e);
}
function At(e) {
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
function Pr(e) {
  var t = se;
  if (t === null) return ie.f |= Et, e;
  if (!(t.f & Bt) && !(t.f & Gt)) throw e;
  xt(e, t);
}
function xt(e, t) {
  for (; t !== null; ) {
    if (t.f & Hn) {
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
function he(e, t) {
  e.f = e.f & oa | t;
}
function tr(e) {
  e.f & Ge || e.deps === null ? he(e, we) : he(e, ot);
}
function Dr(e) {
  if (e !== null) for (const t of e) !(t.f & ke) || !(t.f & Dt) || (t.f ^= Dt, Dr(t.deps));
}
function qr(e, t, n) {
  e.f & Ee ? t.add(e) : e.f & ot && n.add(e), Dr(e.deps), he(e, we);
}
const Ct = /* @__PURE__ */ new Set();
let te = null, Qe = null, Yn = null, cn = false, Pn = false, zt = null, kn = null;
var vr = 0;
let ca = 1;
class St {
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
  #p = false;
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
      for (var s of r.d) he(s, Ee), n(s);
      for (s of r.m) he(s, ot), n(s);
    }
    this.#v.add(t);
  }
  #_() {
    if (vr++ > 1e3 && (Ct.delete(this), fa()), !this.#f()) {
      for (const c of this.#c) this.#u.delete(c), he(c, Ee), this.schedule(c);
      for (const c of this.#u) he(c, ot), this.schedule(c);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = zt = [], r = [], s = kn = [];
    for (const c of t) try {
      this.#g(c, n, r);
    } catch (o) {
      throw Wr(c), o;
    }
    if (te = null, s.length > 0) {
      var a = St.ensure();
      for (const c of s) a.schedule(c);
    }
    if (zt = null, kn = null, this.#f() || this.#b()) {
      this.#h(r), this.#h(n);
      for (const [c, o] of this.#l) Ur(c, o);
    } else {
      this.#s.size === 0 && Ct.delete(this), this.#c.clear(), this.#u.clear();
      for (const c of this.#n) c(this);
      this.#n.clear(), dr(r), dr(n), this.#a?.resolve();
    }
    var l = te;
    if (this.#t.length > 0) {
      const c = l ??= this;
      c.#t.push(...this.#t.filter((o) => !c.#t.includes(o)));
    }
    l !== null && (Ct.add(l), l.#_());
  }
  #g(t, n, r) {
    t.f ^= we;
    for (var s = t.first; s !== null; ) {
      var a = s.f, l = (a & (et | kt)) !== 0, c = l && (a & we) !== 0, o = c || (a & Re) !== 0 || this.#l.has(s);
      if (!o && s.fn !== null) {
        l ? s.f ^= we : a & Gt ? n.push(s) : bn(s) && (a & it && this.#u.add(s), Jt(s));
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
    t.v !== ye && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Et || (this.current.set(t, [n, r]), Qe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    te = this;
  }
  deactivate() {
    te = null, Qe = null;
  }
  flush() {
    try {
      Pn = true, te = this, this.#_();
    } finally {
      vr = 0, Yn = null, zt = null, kn = null, Pn = false, te = null, Qe = null, It.clear();
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
      for (const [h, [_, A]] of this.current) {
        if (f.current.has(h)) {
          var r = f.current.get(h)[0];
          if (t && _ !== r) f.current.set(h, [_, A]);
          else continue;
        }
        n.push(h);
      }
      var s = [...f.current.keys()].filter((h) => !this.current.has(h));
      if (s.length === 0) t && f.discard();
      else if (n.length > 0) {
        if (t) for (const h of this.#v) f.unskip_effect(h, (_) => {
          _.f & (it | pn) ? f.schedule(_) : f.#h([_]);
        });
        f.activate();
        var a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var c of n) Br(c, s, a, l);
        l = /* @__PURE__ */ new Map();
        var o = [...f.current.keys()].filter((h) => this.current.has(h) ? this.current.get(h)[0] !== h : true);
        for (const h of this.#i) !(h.f & (Ye | Re | Gn)) && nr(h, o, l) && (h.f & (pn | it) ? (he(h, Ee), f.schedule(h)) : f.#c.add(h));
        if (f.#t.length > 0) {
          f.apply();
          for (var v of f.#t) f.#g(v, [], []);
          f.#t = [];
        }
        f.deactivate();
      }
    }
    for (const f of Ct) f.#d.has(this) && (f.#d.delete(this), f.#d.size === 0 && !f.#f() && (f.activate(), f.#_()));
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
    this.#p || r || (this.#p = true, At(() => {
      this.#p = false, this.flush();
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
    if (te === null) {
      const t = te = new St();
      Pn || (Ct.add(te), cn || At(() => {
        te === t && t.flush();
      }));
    }
    return te;
  }
  apply() {
    {
      Qe = null;
      return;
    }
  }
  schedule(t) {
    if (Yn = t, t.b?.is_pending && t.f & (Gt | jn | Cr) && !(t.f & Bt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (zt !== null && n === se && (ie === null || !(ie.f & ke))) return;
      if (r & (kt | et)) {
        if (!(r & we)) return;
        n.f ^= we;
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
      if (la(), te === null) return n;
      te.flush();
    }
  } finally {
    cn = t;
  }
}
function fa() {
  try {
    Gs();
  } catch (e) {
    xt(e, Yn);
  }
}
let dt = null;
function dr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (Ye | Re)) && bn(r) && (dt = /* @__PURE__ */ new Set(), Jt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && ts(r), dt?.size > 0)) {
        It.clear();
        for (const s of dt) {
          if (s.f & (Ye | Re)) continue;
          const a = [s];
          let l = s.parent;
          for (; l !== null; ) dt.has(l) && (dt.delete(l), a.push(l)), l = l.parent;
          for (let c = a.length - 1; c >= 0; c--) {
            const o = a[c];
            o.f & (Ye | Re) || Jt(o);
          }
        }
        dt.clear();
      }
    }
    dt = null;
  }
}
function Br(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const a = s.f;
    a & ke ? Br(s, t, n, r) : a & (pn | it) && !(a & Ee) && nr(s, t, r) && (he(s, Ee), rr(s));
  }
}
function nr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (Vt.call(t, s)) return true;
    if (s.f & ke && nr(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function rr(e) {
  te.schedule(e);
}
function Ur(e, t) {
  if (!(e.f & et && e.f & we)) {
    e.f & Ee ? t.d.push(e) : e.f & ot && t.m.push(e), he(e, we);
    for (var n = e.first; n !== null; ) Ur(n, t), n = n.next;
  }
}
function Wr(e) {
  he(e, we);
  for (var t = e.first; t !== null; ) Wr(t), t = t.next;
}
function va(e) {
  let t = 0, n = qt(0), r;
  return () => {
    ir() && (i(n), lr(() => (t === 0 && (r = gn(() => e(() => un(n)))), t += 1, () => {
      At(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, un(n));
      });
    })));
  };
}
var da = Yt | Zt;
function pa(e, t, n, r) {
  new _a(e, t, n, r);
}
class _a {
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
  #p = /* @__PURE__ */ new Set();
  #d = /* @__PURE__ */ new Set();
  #f = null;
  #b = va(() => (this.#f = qt(this.#u), () => {
    this.#f = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (a) => {
      var l = se;
      l.b = this, l.f |= Hn, r(a);
    }, this.parent = se.b, this.transform_error = s ?? this.parent?.transform_error ?? ((a) => a), this.#r = Nn(() => {
      this.#m();
    }, da);
  }
  #_() {
    try {
      this.#a = We(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #g(t) {
    const n = this.#e.failed;
    n && (this.#i = We(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = We(() => t(this.#n)), At(() => {
      var n = this.#c = document.createDocumentFragment(), r = bt();
      n.append(r), this.#a = this.#y(() => We(() => this.#s(r))), this.#l === 0 && (this.#n.before(n), this.#c = null, jt(this.#t, () => {
        this.#t = null;
      }), this.#w(te));
    }));
  }
  #m() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#u = 0, this.#a = We(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#c = document.createDocumentFragment();
        ur(this.#a, t);
        const n = this.#e.pending;
        this.#t = We(() => n(this.#n));
      } else this.#w(te);
    } catch (n) {
      this.error(n);
    }
  }
  #w(t) {
    this.is_pending = false, t.transfer_effects(this.#p, this.#d);
  }
  defer_effect(t) {
    qr(t, this.#p, this.#d);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #y(t) {
    var n = se, r = ie, s = Oe;
    ct(this.#r), Xe(this.#r), Kt(this.#r.ctx);
    try {
      return St.ensure(), t();
    } catch (a) {
      return Pr(a), null;
    } finally {
      ct(n), Xe(r), Kt(s);
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
    this.#x(t, n), this.#u += t, !(!this.#f || this.#v) && (this.#v = true, At(() => {
      this.#v = false, this.#f && Xt(this.#f, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#b(), i(this.#f);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    te?.is_fork ? (this.#a && te.skip_effect(this.#a), this.#t && te.skip_effect(this.#t), this.#i && te.skip_effect(this.#i), te.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (Ne(this.#a), this.#a = null), this.#t && (Ne(this.#t), this.#t = null), this.#i && (Ne(this.#i), this.#i = null);
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
        xt(v, this.#r && this.#r.parent);
      }
      r && (this.#i = this.#y(() => {
        try {
          return We(() => {
            var v = se;
            v.b = this, v.f |= Hn, r(this.#n, () => o, () => l);
          });
        } catch (v) {
          return xt(v, this.#r.parent), null;
        }
      }));
    };
    At(() => {
      var o;
      try {
        o = this.transform_error(t);
      } catch (v) {
        xt(v, this.#r && this.#r.parent);
        return;
      }
      o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(c, (v) => xt(v, this.#r && this.#r.parent)) : c(o);
    });
  }
}
function ha(e, t, n, r) {
  const s = sr;
  var a = e.filter((_) => !_.settled);
  if (n.length === 0 && a.length === 0) {
    r(t.map(s));
    return;
  }
  var l = se, c = ba(), o = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((_) => _.promise)) : null;
  function v(_) {
    c();
    try {
      r(_);
    } catch (A) {
      l.f & Ye || xt(A, l);
    }
    Cn();
  }
  if (n.length === 0) {
    o.then(() => v(t.map(s)));
    return;
  }
  var f = zr();
  function h() {
    Promise.all(n.map((_) => ga(_))).then((_) => v([...t.map(s), ..._])).catch((_) => xt(_, l)).finally(() => f());
  }
  o ? o.then(() => {
    c(), h(), Cn();
  }) : h();
}
function ba() {
  var e = se, t = ie, n = Oe, r = te;
  return function(a = true) {
    ct(e), Xe(t), Kt(n), a && !(e.f & Ye) && (r?.activate(), r?.apply());
  };
}
function Cn(e = true) {
  ct(null), Xe(null), Kt(null), e && te?.deactivate();
}
function zr() {
  var e = se, t = e.b, n = te, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function sr(e) {
  var t = ke | Ee;
  return se !== null && (se.f |= Zt), { ctx: Oe, deps: null, effects: null, equals: Ir, f: t, fn: e, reactions: null, rv: 0, v: ye, wv: 0, parent: se, ac: null };
}
function ga(e, t, n) {
  let r = se;
  r === null && Us();
  var s = void 0, a = qt(ye), l = !ie, c = /* @__PURE__ */ new Map();
  return ja(() => {
    var o = se, v = Tr();
    s = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(Cn);
    } catch (A) {
      v.reject(A), Cn();
    }
    var f = te;
    if (l) {
      if (o.f & Bt) var h = zr();
      if (r.b.is_rendered()) c.get(f)?.reject(pt), c.delete(f);
      else {
        for (const A of c.values()) A.reject(pt);
        c.clear();
      }
      c.set(f, v);
    }
    const _ = (A, x = void 0) => {
      if (h) {
        var I = x === pt;
        h(I);
      }
      if (!(x === pt || o.f & Ye)) {
        if (f.activate(), x) a.f |= Et, Xt(a, x);
        else {
          a.f & Et && (a.f ^= Et), Xt(a, A);
          for (const [g, q] of c) {
            if (c.delete(g), g === f) break;
            q.reject(pt);
          }
        }
        f.deactivate();
      }
    };
    v.promise.then(_, (A) => _(null, A || "unknown"));
  }), Qr(() => {
    for (const o of c.values()) o.reject(pt);
  }), new Promise((o) => {
    function v(f) {
      function h() {
        f === s ? o(a) : v(s);
      }
      f.then(h, h);
    }
    v(s);
  });
}
function ht(e) {
  const t = sr(e);
  return ss(t), t;
}
function ma(e) {
  const t = sr(e);
  return t.equals = jr, t;
}
function wa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Ne(t[n]);
  }
}
function ar(e) {
  var t, n = se, r = e.parent;
  if (!Mt && r !== null && r.f & (Ye | Re)) return ra(), e.v;
  ct(r);
  try {
    e.f &= ~Dt, wa(e), t = os(e);
  } finally {
    ct(n);
  }
  return t;
}
function Hr(e) {
  var t = ar(e);
  if (!e.equals(t) && (e.wv = is(), (!te?.is_fork || e.deps === null) && (te !== null ? te.capture(e, t, true) : e.v = t, e.deps === null))) {
    he(e, we);
    return;
  }
  Mt || (Qe !== null ? (ir() || te?.is_fork) && Qe.set(e, t) : tr(e));
}
function ya(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(pt), t.teardown = Ls, t.ac = null, _n(t, 0), or(t));
}
function Vr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Jt(t);
}
let Kn = /* @__PURE__ */ new Set();
const It = /* @__PURE__ */ new Map();
let Gr = false;
function qt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Ir, rv: 0, wv: 0 };
  return n;
}
function W(e, t) {
  const n = qt(e);
  return ss(n), n;
}
function xa(e, t = false, n = true) {
  const r = qt(e);
  return t || (r.equals = jr), r;
}
function p(e, t, n = false) {
  ie !== null && (!$e || ie.f & Gn) && Lr() && ie.f & (ke | it | pn | Gn) && (Ke === null || !Vt.call(Ke, e)) && Xs();
  let r = n ? at(t) : t;
  return Xt(e, r, kn);
}
function Xt(e, t, n = null) {
  if (!e.equals(t)) {
    It.set(e, Mt ? t : e.v);
    var r = St.ensure();
    if (r.capture(e, t), e.f & ke) {
      const s = e;
      e.f & Ee && ar(s), Qe === null && tr(s);
    }
    e.wv = is(), Yr(e, Ee, n), se !== null && se.f & we && !(se.f & (et | kt)) && (Ue === null ? Pa([e]) : Ue.push(e)), !r.is_fork && Kn.size > 0 && !Gr && Ea();
  }
  return t;
}
function Ea() {
  Gr = false;
  for (const e of Kn) e.f & we && he(e, ot), bn(e) && Jt(e);
  Kn.clear();
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
    if (o && he(l, t), c & ke) {
      var v = l;
      Qe?.delete(v), c & Dt || (c & Ge && (se === null || !(se.f & Tn)) && (l.f |= Dt), Yr(v, ot, n));
    } else if (o) {
      var f = l;
      c & it && dt !== null && dt.add(f), n !== null ? n.push(f) : rr(f);
    }
  }
}
function at(e) {
  if (typeof e != "object" || e === null || An in e) return e;
  const t = Mr(e);
  if (t !== Is && t !== js) return e;
  var n = /* @__PURE__ */ new Map(), r = Sr(e), s = W(0), a = Lt, l = (c) => {
    if (Lt === a) return c();
    var o = ie, v = Lt;
    Xe(null), br(a);
    var f = c();
    return Xe(o), br(v), f;
  };
  return r && n.set("length", W(e.length)), new Proxy(e, { defineProperty(c, o, v) {
    (!("value" in v) || v.configurable === false || v.enumerable === false || v.writable === false) && Ys();
    var f = n.get(o);
    return f === void 0 ? l(() => {
      var h = W(v.value);
      return n.set(o, h), h;
    }) : p(f, v.value, true), true;
  }, deleteProperty(c, o) {
    var v = n.get(o);
    if (v === void 0) {
      if (o in c) {
        const f = l(() => W(ye));
        n.set(o, f), un(s);
      }
    } else p(v, ye), un(s);
    return true;
  }, get(c, o, v) {
    if (o === An) return e;
    var f = n.get(o), h = o in c;
    if (f === void 0 && (!h || on(c, o)?.writable) && (f = l(() => {
      var A = at(h ? c[o] : ye), x = W(A);
      return x;
    }), n.set(o, f)), f !== void 0) {
      var _ = i(f);
      return _ === ye ? void 0 : _;
    }
    return Reflect.get(c, o, v);
  }, getOwnPropertyDescriptor(c, o) {
    var v = Reflect.getOwnPropertyDescriptor(c, o);
    if (v && "value" in v) {
      var f = n.get(o);
      f && (v.value = i(f));
    } else if (v === void 0) {
      var h = n.get(o), _ = h?.v;
      if (h !== void 0 && _ !== ye) return { enumerable: true, configurable: true, value: _, writable: true };
    }
    return v;
  }, has(c, o) {
    if (o === An) return true;
    var v = n.get(o), f = v !== void 0 && v.v !== ye || Reflect.has(c, o);
    if (v !== void 0 || se !== null && (!f || on(c, o)?.writable)) {
      v === void 0 && (v = l(() => {
        var _ = f ? at(c[o]) : ye, A = W(_);
        return A;
      }), n.set(o, v));
      var h = i(v);
      if (h === ye) return false;
    }
    return f;
  }, set(c, o, v, f) {
    var h = n.get(o), _ = o in c;
    if (r && o === "length") for (var A = v; A < h.v; A += 1) {
      var x = n.get(A + "");
      x !== void 0 ? p(x, ye) : A in c && (x = l(() => W(ye)), n.set(A + "", x));
    }
    if (h === void 0) (!_ || on(c, o)?.writable) && (h = l(() => W(void 0)), p(h, at(v)), n.set(o, h));
    else {
      _ = h.v !== ye;
      var I = l(() => at(v));
      p(h, I);
    }
    var g = Reflect.getOwnPropertyDescriptor(c, o);
    if (g?.set && g.set.call(f, v), !_) {
      if (r && typeof o == "string") {
        var q = n.get("length"), L = Number(o);
        Number.isInteger(L) && L >= q.v && p(q, L + 1);
      }
      un(s);
    }
    return true;
  }, ownKeys(c) {
    i(s);
    var o = Reflect.ownKeys(c).filter((h) => {
      var _ = n.get(h);
      return _ === void 0 || _.v !== ye;
    });
    for (var [v, f] of n) f.v !== ye && !(v in c) && o.push(v);
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
    Xr = on(t, "firstChild").get, Jr = on(t, "nextSibling").get, fr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), fr(n) && (n.__t = void 0);
  }
}
function bt(e = "") {
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
function lt(e, t = false) {
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
let _r = false;
function Ta() {
  _r || (_r = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function Ln(e) {
  var t = ie, n = se;
  Xe(null), ct(null);
  try {
    return e();
  } finally {
    Xe(t), ct(n);
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
  se === null && (ie === null && Vs(), Hs()), Mt && zs();
}
function Oa(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function gt(e, t) {
  var n = se;
  n !== null && n.f & Re && (e |= Re);
  var r = { ctx: Oe, deps: null, nodes: null, f: e | Ee | Ge, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  te?.register_created_effect(r);
  var s = r;
  if (e & Gt) zt !== null ? zt.push(r) : St.ensure().schedule(r);
  else if (t !== null) {
    try {
      Jt(r);
    } catch (l) {
      throw Ne(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & Zt) && (s = s.first, e & it && e & Yt && s !== null && (s.f |= Yt));
  }
  if (s !== null && (s.parent = n, n !== null && Oa(s, n), ie !== null && ie.f & ke && !(e & kt))) {
    var a = ie;
    (a.effects ??= []).push(s);
  }
  return r;
}
function ir() {
  return ie !== null && !$e;
}
function Qr(e) {
  const t = gt(jn, null);
  return he(t, we), t.teardown = e, t;
}
function Le(e) {
  Ra();
  var t = se.f, n = !ie && (t & et) !== 0 && (t & Bt) === 0;
  if (n) {
    var r = Oe;
    (r.e ??= []).push(e);
  } else return $r(e);
}
function $r(e) {
  return gt(Gt | qs, e);
}
function Fa(e) {
  St.ensure();
  const t = gt(kt | Zt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? jt(t, () => {
      Ne(t), r(void 0);
    }) : (Ne(t), r(void 0));
  });
}
function Ia(e) {
  return gt(Gt, e);
}
function ja(e) {
  return gt(pn | Zt, e);
}
function lr(e, t = 0) {
  return gt(jn | t, e);
}
function Q(e, t = [], n = [], r = []) {
  ha(r, t, n, (s) => {
    gt(jn, () => e(...s.map(i)));
  });
}
function Nn(e, t = 0) {
  var n = gt(it | t, e);
  return n;
}
function We(e) {
  return gt(et | Zt, e);
}
function es(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Mt, r = ie;
    hr(true), Xe(null);
    try {
      t.call(null);
    } finally {
      hr(n), Xe(r);
    }
  }
}
function or(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && Ln(() => {
      s.abort(pt);
    });
    var r = n.next;
    n.f & kt ? n.parent = null : Ne(n, t), n = r;
  }
}
function La(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & et || Ne(t), t = n;
  }
}
function Ne(e, t = true) {
  var n = false;
  (t || e.f & Ds) && e.nodes !== null && e.nodes.end !== null && (Na(e.nodes.start, e.nodes.end), n = true), he(e, Vn), or(e, t && !n), _n(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const a of r) a.stop();
  es(e), e.f ^= Vn, e.f |= Ye;
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
    n && Ne(e), t && t();
  }, a = r.length;
  if (a > 0) {
    var l = () => --a || s();
    for (var c of r) c.out(l);
  } else s();
}
function ns(e, t, n) {
  if (!(e.f & Re)) {
    e.f ^= Re;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const c of r) (c.is_global || n) && t.push(c);
    for (var s = e.first; s !== null; ) {
      var a = s.next;
      if (!(s.f & kt)) {
        var l = (s.f & Yt) !== 0 || (s.f & et) !== 0 && (e.f & it) !== 0;
        ns(s, t, l ? n : false);
      }
      s = a;
    }
  }
}
function cr(e) {
  rs(e, true);
}
function rs(e, t) {
  if (e.f & Re) {
    e.f ^= Re, e.f & we || (he(e, Ee), St.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Yt) !== 0 || (n.f & et) !== 0;
      rs(n, s ? t : false), n = r;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (const l of a) (l.is_global || t) && l.in();
  }
}
function ur(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : hn(n);
    t.append(n), n = s;
  }
}
let Sn = false, Mt = false;
function hr(e) {
  Mt = e;
}
let ie = null, $e = false;
function Xe(e) {
  ie = e;
}
let se = null;
function ct(e) {
  se = e;
}
let Ke = null;
function ss(e) {
  ie !== null && (Ke === null ? Ke = [e] : Ke.push(e));
}
let Ie = null, Pe = 0, Ue = null;
function Pa(e) {
  Ue = e;
}
let as = 1, Ft = 0, Lt = Ft;
function br(e) {
  Lt = e;
}
function is() {
  return ++as;
}
function bn(e) {
  var t = e.f;
  if (t & Ee) return true;
  if (t & ke && (e.f &= ~Dt), t & ot) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var a = n[s];
      if (bn(a) && Hr(a), a.wv > e.wv) return true;
    }
    t & Ge && Qe === null && he(e, we);
  }
  return false;
}
function ls(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(Ke !== null && Vt.call(Ke, e))) for (var s = 0; s < r.length; s++) {
    var a = r[s];
    a.f & ke ? ls(a, t, false) : t === a && (n ? he(a, Ee) : a.f & we && he(a, ot), rr(a));
  }
}
function os(e) {
  var t = Ie, n = Pe, r = Ue, s = ie, a = Ke, l = Oe, c = $e, o = Lt, v = e.f;
  Ie = null, Pe = 0, Ue = null, ie = v & (et | kt) ? null : e, Ke = null, Kt(e.ctx), $e = false, Lt = ++Ft, e.ac !== null && (Ln(() => {
    e.ac.abort(pt);
  }), e.ac = null);
  try {
    e.f |= Tn;
    var f = e.fn, h = f();
    e.f |= Bt;
    var _ = e.deps, A = te?.is_fork;
    if (Ie !== null) {
      var x;
      if (A || _n(e, Pe), _ !== null && Pe > 0) for (_.length = Pe + Ie.length, x = 0; x < Ie.length; x++) _[Pe + x] = Ie[x];
      else e.deps = _ = Ie;
      if (ir() && e.f & Ge) for (x = Pe; x < _.length; x++) (_[x].reactions ??= []).push(e);
    } else !A && _ !== null && Pe < _.length && (_n(e, Pe), _.length = Pe);
    if (Lr() && Ue !== null && !$e && _ !== null && !(e.f & (ke | ot | Ee))) for (x = 0; x < Ue.length; x++) ls(Ue[x], e);
    if (s !== null && s !== e) {
      if (Ft++, s.deps !== null) for (let I = 0; I < n; I += 1) s.deps[I].rv = Ft;
      if (t !== null) for (const I of t) I.rv = Ft;
      Ue !== null && (r === null ? r = Ue : r.push(...Ue));
    }
    return e.f & Et && (e.f ^= Et), h;
  } catch (I) {
    return Pr(I);
  } finally {
    e.f ^= Tn, Ie = t, Pe = n, Ue = r, ie = s, Ke = a, Kt(l), $e = c, Lt = o;
  }
}
function Da(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Rs.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & ke && (Ie === null || !Vt.call(Ie, t))) {
    var a = t;
    a.f & Ge && (a.f ^= Ge, a.f &= ~Dt), a.v !== ye && tr(a), ya(a), _n(a, 0);
  }
}
function _n(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Da(e, n[r]);
}
function Jt(e) {
  var t = e.f;
  if (!(t & Ye)) {
    he(e, we);
    var n = se, r = Sn;
    se = e, Sn = true;
    try {
      t & (it | Cr) ? La(e) : or(e), es(e);
      var s = os(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = as;
      var a;
      Cs && ia && e.f & Ee && e.deps;
    } finally {
      Sn = r, se = n;
    }
  }
}
async function qa() {
  await Promise.resolve(), ua();
}
function i(e) {
  var t = e.f, n = (t & ke) !== 0;
  if (ie !== null && !$e) {
    var r = se !== null && (se.f & Ye) !== 0;
    if (!r && (Ke === null || !Vt.call(Ke, e))) {
      var s = ie.deps;
      if (ie.f & Tn) e.rv < Ft && (e.rv = Ft, Ie === null && s !== null && s[Pe] === e ? Pe++ : Ie === null ? Ie = [e] : Ie.push(e));
      else {
        (ie.deps ??= []).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [ie] : Vt.call(a, ie) || a.push(ie);
      }
    }
  }
  if (Mt && It.has(e)) return It.get(e);
  if (n) {
    var l = e;
    if (Mt) {
      var c = l.v;
      return (!(l.f & we) && l.reactions !== null || us(l)) && (c = ar(l)), It.set(l, c), c;
    }
    var o = (l.f & Ge) === 0 && !$e && ie !== null && (Sn || (ie.f & Ge) !== 0), v = (l.f & Bt) === 0;
    bn(l) && (o && (l.f |= Ge), Hr(l)), o && !v && (Vr(l), cs(l));
  }
  if (Qe?.has(e)) return Qe.get(e);
  if (e.f & Et) throw e.v;
  return e.v;
}
function cs(e) {
  if (e.f |= Ge, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & ke && !(t.f & Ge) && (Vr(t), cs(t));
}
function us(e) {
  if (e.v === ye) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (It.has(t) || t.f & ke && us(t)) return true;
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
const nn = Symbol("events"), fs = /* @__PURE__ */ new Set(), Xn = /* @__PURE__ */ new Set();
function Wa(e, t, n, r = {}) {
  function s(a) {
    if (r.capture || Jn.call(t, a), !a.cancelBubble) return Ln(() => n?.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? At(() => {
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
  for (var n of Xn) n(e);
}
let gr = null;
function Jn(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], a = s[0] || e.target;
  gr = e;
  var l = 0, c = gr === e && e[nn];
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
    var f = ie, h = se;
    Xe(null), ct(null);
    try {
      for (var _, A = []; a !== null; ) {
        var x = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var I = a[nn]?.[r];
          I != null && (!a.disabled || e.target === a) && I.call(a, e);
        } catch (g) {
          _ ? A.push(g) : _ = g;
        }
        if (e.cancelBubble || x === t || x === null) break;
        a = x;
      }
      if (_) {
        for (let g of A) queueMicrotask(() => {
          throw g;
        });
        throw _;
      }
    } finally {
      e[nn] = t, delete e.currentTarget, Xe(f), ct(h);
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
  var n = se;
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
function mr(e = "") {
  {
    var t = bt(e + "");
    return On(t, t), t;
  }
}
function Fn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = bt();
  return e.append(t, n), On(t, n), e;
}
function R(e, t) {
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
    var f = n ?? t.appendChild(bt());
    pa(f, { pending: () => {
    } }, (A) => {
      tt({});
      var x = Oe;
      a && (x.c = a), s && (r.$$events = s), o = e(A, r) || {}, nt();
    }, c);
    var h = /* @__PURE__ */ new Set(), _ = (A) => {
      for (var x = 0; x < A.length; x++) {
        var I = A[x];
        if (!h.has(I)) {
          h.add(I);
          var g = Ua(I);
          for (const b of [t, document]) {
            var q = En.get(b);
            q === void 0 && (q = /* @__PURE__ */ new Map(), En.set(b, q));
            var L = q.get(I);
            L === void 0 ? (b.addEventListener(I, Jn, { passive: g }), q.set(I, 1)) : q.set(I, L + 1);
          }
        }
      }
    };
    return _(In(fs)), Xn.add(_), () => {
      for (var A of h) for (const g of [t, document]) {
        var x = En.get(g), I = x.get(A);
        --I == 0 ? (g.removeEventListener(A, Jn), x.delete(A), x.size === 0 && En.delete(g)) : x.set(A, I);
      }
      Xn.delete(_), f !== n && f.parentNode?.removeChild(f);
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
      if (r) cr(r), this.#s.delete(n);
      else {
        var s = this.#e.get(n);
        s && (this.#o.set(n, s.effect), this.#e.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [a, l] of this.#n) {
        if (this.#n.delete(a), a === t) break;
        const c = this.#e.get(l);
        c && (Ne(c.effect), this.#e.delete(l));
      }
      for (const [a, l] of this.#o) {
        if (a === n || this.#s.has(a)) continue;
        const c = () => {
          if (Array.from(this.#n.values()).includes(a)) {
            var v = document.createDocumentFragment();
            ur(l, v), v.append(bt()), this.#e.set(a, { effect: l, fragment: v });
          } else Ne(l);
          this.#s.delete(a), this.#o.delete(a);
        };
        this.#r || !r ? (this.#s.add(a), jt(l, c, false)) : c();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (Ne(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = te, s = Zr();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var a = document.createDocumentFragment(), l = bt();
      a.append(l), this.#e.set(t, { effect: We(() => n(l)), fragment: a });
    } else this.#o.set(t, We(() => n(this.anchor)));
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
function He(e, t) {
  return t;
}
function Za(e, t, n) {
  for (var r = [], s = t.length, a, l = t.length, c = 0; c < s; c++) {
    let h = t[c];
    jt(h, () => {
      if (a) {
        if (a.pending.delete(h), a.done.add(h), a.pending.size === 0) {
          var _ = e.outrogroups;
          Zn(e, In(a.done)), _.delete(a), _.size === 0 && (e.outrogroups = null);
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
    Zn(e, t, !o);
  } else a = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(a);
}
function Zn(e, t, n = true) {
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
      ur(a, l);
    } else Ne(t[s], n);
  }
}
var wr;
function Ve(e, t, n, r, s, a = null) {
  var l = e, c = /* @__PURE__ */ new Map(), o = (t & Or) !== 0;
  if (o) {
    var v = e;
    l = v.appendChild(bt());
  }
  var f = null, h = ma(() => {
    var b = n();
    return Sr(b) ? b : b == null ? [] : In(b);
  }), _, A = /* @__PURE__ */ new Map(), x = true;
  function I(b) {
    L.effect.f & Ye || (L.pending.delete(b), L.fallback = f, Qa(L, _, l, t, r), f !== null && (_.length === 0 ? f.f & st ? (f.f ^= st, rn(f, null, l)) : cr(f) : jt(f, () => {
      f = null;
    })));
  }
  function g(b) {
    L.pending.delete(b);
  }
  var q = Nn(() => {
    _ = i(h);
    for (var b = _.length, C = /* @__PURE__ */ new Set(), D = te, F = Zr(), P = 0; P < b; P += 1) {
      var $ = _[P], ne = r($, P), z = x ? null : c.get(ne);
      z ? (z.v && Xt(z.v, $), z.i && Xt(z.i, P), F && D.unskip_effect(z.e)) : (z = $a(c, x ? l : wr ??= bt(), $, ne, P, s, t, n), x || (z.e.f |= st), c.set(ne, z)), C.add(ne);
    }
    if (b === 0 && a && !f && (x ? f = We(() => a(l)) : (f = We(() => a(wr ??= bt())), f.f |= st)), b > C.size && Ws(), !x) if (A.set(D, C), F) {
      for (const [ae, S] of c) C.has(ae) || D.skip_effect(S.e);
      D.oncommit(I), D.ondiscard(g);
    } else I(D);
    i(h);
  }), L = { effect: q, items: c, pending: A, outrogroups: null, fallback: f };
  x = false;
}
function tn(e) {
  for (; e !== null && !(e.f & et); ) e = e.next;
  return e;
}
function Qa(e, t, n, r, s) {
  var a = (r & $s) !== 0, l = t.length, c = e.items, o = tn(e.effect.first), v, f = null, h, _ = [], A = [], x, I, g, q;
  if (a) for (q = 0; q < l; q += 1) x = t[q], I = s(x, q), g = c.get(I).e, g.f & st || (g.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(g));
  for (q = 0; q < l; q += 1) {
    if (x = t[q], I = s(x, q), g = c.get(I).e, e.outrogroups !== null) for (const z of e.outrogroups) z.pending.delete(g), z.done.delete(g);
    if (g.f & Re && (cr(g), a && (g.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(g))), g.f & st) if (g.f ^= st, g === o) rn(g, null, n);
    else {
      var L = f ? f.next : o;
      g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), wt(e, f, g), wt(e, g, L), rn(g, L, n), f = g, _ = [], A = [], o = tn(f.next);
      continue;
    }
    if (g !== o) {
      if (v !== void 0 && v.has(g)) {
        if (_.length < A.length) {
          var b = A[0], C;
          f = b.prev;
          var D = _[0], F = _[_.length - 1];
          for (C = 0; C < _.length; C += 1) rn(_[C], b, n);
          for (C = 0; C < A.length; C += 1) v.delete(A[C]);
          wt(e, D.prev, F.next), wt(e, f, D), wt(e, F, b), o = b, f = F, q -= 1, _ = [], A = [];
        } else v.delete(g), rn(g, o, n), wt(e, g.prev, g.next), wt(e, g, f === null ? e.effect.first : f.next), wt(e, f, g), f = g;
        continue;
      }
      for (_ = [], A = []; o !== null && o !== g; ) (v ??= /* @__PURE__ */ new Set()).add(o), A.push(o), o = tn(o.next);
      if (o === null) continue;
    }
    g.f & st || _.push(g), f = g, o = tn(g.next);
  }
  if (e.outrogroups !== null) {
    for (const z of e.outrogroups) z.pending.size === 0 && (Zn(e, In(z.done)), e.outrogroups?.delete(z));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || v !== void 0) {
    var P = [];
    if (v !== void 0) for (g of v) g.f & Re || P.push(g);
    for (; o !== null; ) !(o.f & Re) && o !== e.fallback && P.push(o), o = tn(o.next);
    var $ = P.length;
    if ($ > 0) {
      var ne = r & Or && l === 0 ? n : null;
      if (a) {
        for (q = 0; q < $; q += 1) P[q].nodes?.a?.measure();
        for (q = 0; q < $; q += 1) P[q].nodes?.a?.fix();
      }
      Za(e, P, ne);
    }
  }
  a && At(() => {
    if (h !== void 0) for (g of h) g.nodes?.a?.apply();
  });
}
function $a(e, t, n, r, s, a, l, c) {
  var o = l & Zs ? l & ea ? qt(n) : xa(n, false, false) : null, v = l & Qs ? qt(s) : null;
  return { v: o, i: v, e: We(() => (a(t, o ?? n, v ?? s, c), () => {
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
function wt(e, t, n) {
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
function ze(e, t, n, r, s, a) {
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
function je(e, t, n, r) {
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
    if (a = Dn(e) ? qn(a) : a, n(a), te !== null && r.add(te), await qa(), a !== (a = t())) {
      var l = e.selectionStart, c = e.selectionEnd, o = e.value.length;
      if (e.value = a ?? "", c !== null) {
        var v = e.value.length;
        l === c && c === o && v > o ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = l, e.selectionEnd = Math.min(c, v));
      }
    }
  }), gn(t) == null && e.value && (n(Dn(e) ? qn(e.value) : e.value), te !== null && r.add(te)), lr(() => {
    var s = t();
    if (e === document.activeElement) {
      var a = te;
      if (r.has(a)) return;
    }
    Dn(e) && s === qn(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Dn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function qn(e) {
  return e === "" ? null : +e;
}
function Er(e, t) {
  return e === t || e?.[An] === t;
}
function Pt(e = {}, t, n, r) {
  var s = Oe.r, a = se;
  return Ia(() => {
    var l, c;
    return lr(() => {
      l = c, c = [], gn(() => {
        e !== n(...c) && (t(e, ...c), l && Er(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let o = a;
      for (; o !== s && o.parent !== null && o.parent.f & Vn; ) o = o.parent;
      const v = () => {
        c && Er(n(...c), e) && t(null, ...c);
      }, f = o.teardown;
      o.teardown = () => {
        v(), f?.();
      };
    };
  }), e;
}
function Qn(e, t, n, r) {
  var s = r, a = true, l = () => (a && (a = false, s = r), s), c;
  c = e[t], c === void 0 && r !== void 0 && (c = l());
  var o;
  return o = () => {
    var v = e[t];
    return v === void 0 ? l() : (a = true, v);
  }, o;
}
function ps(e) {
  Oe === null && Rr(), Le(() => {
    const t = gn(e);
    if (typeof t == "function") return t;
  });
}
function _s(e) {
  Oe === null && Rr(), ps(() => () => gn(e));
}
const ii = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ii);
function li() {
  K._start();
}
function oi(e) {
  try {
    const s = K.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, K.__wbindgen_export), l = Je;
    K.decode_wav(s, a, l);
    var t = pe().getInt32(s + 4 * 0, true), n = pe().getInt32(s + 4 * 1, true), r = pe().getInt32(s + 4 * 2, true);
    if (r) throw De(n);
    return De(t);
  } finally {
    K.__wbindgen_add_to_stack_pointer(16);
  }
}
function ci(e) {
  let t, n;
  try {
    const a = K.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, K.__wbindgen_export), c = Je;
    K.detect_format(a, l, c);
    var r = pe().getInt32(a + 4 * 0, true), s = pe().getInt32(a + 4 * 1, true);
    return t = r, n = s, an(r, s);
  } finally {
    K.__wbindgen_add_to_stack_pointer(16), K.__wbindgen_export3(t, n, 1);
  }
}
function ui(e, t) {
  try {
    const a = K.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, K.__wbindgen_export), c = Je;
    K.entropy_blocks(a, l, c, t);
    var n = pe().getInt32(a + 4 * 0, true), r = pe().getInt32(a + 4 * 1, true), s = hi(n, r).slice();
    return K.__wbindgen_export3(n, r * 4, 4), s;
  } finally {
    K.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e, t) {
  try {
    const a = K.__wbindgen_add_to_stack_pointer(-16), l = Ut(e, K.__wbindgen_export), c = Je;
    K.extract_strings(a, l, c, t);
    var n = pe().getInt32(a + 4 * 0, true), r = pe().getInt32(a + 4 * 1, true), s = pe().getInt32(a + 4 * 2, true);
    if (s) throw De(r);
    return De(n);
  } finally {
    K.__wbindgen_add_to_stack_pointer(16);
  }
}
function vi(e, t, n) {
  try {
    const l = K.__wbindgen_add_to_stack_pointer(-16), c = Ut(e, K.__wbindgen_export), o = Je;
    K.hex_rows(l, c, o, t, n);
    var r = pe().getInt32(l + 4 * 0, true), s = pe().getInt32(l + 4 * 1, true), a = bi(r, s).slice();
    return K.__wbindgen_export3(r, s * 4, 4), a;
  } finally {
    K.__wbindgen_add_to_stack_pointer(16);
  }
}
function di(e) {
  try {
    const s = K.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, K.__wbindgen_export), l = Je;
    K.parse_elf(s, a, l);
    var t = pe().getInt32(s + 4 * 0, true), n = pe().getInt32(s + 4 * 1, true), r = pe().getInt32(s + 4 * 2, true);
    if (r) throw De(n);
    return De(t);
  } finally {
    K.__wbindgen_add_to_stack_pointer(16);
  }
}
function pi(e) {
  try {
    const s = K.__wbindgen_add_to_stack_pointer(-16), a = Ut(e, K.__wbindgen_export), l = Je;
    K.parse_gba(s, a, l);
    var t = pe().getInt32(s + 4 * 0, true), n = pe().getInt32(s + 4 * 1, true), r = pe().getInt32(s + 4 * 2, true);
    if (r) throw De(n);
    return De(t);
  } finally {
    K.__wbindgen_add_to_stack_pointer(16);
  }
}
function hs() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(an(t, n));
    return yt(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(Wt(n)), s = Ar(r, K.__wbindgen_export, K.__wbindgen_export2), a = Je;
    pe().setInt32(t + 4, a, true), pe().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(an(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let r, s;
    try {
      r = t, s = n, console.error(an(t, n));
    } finally {
      K.__wbindgen_export3(r, s, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return yt(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return yt(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return yt(t);
  }, __wbg_set_6be42768c690e380: function(t, n, r) {
    Wt(t)[De(n)] = De(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    Wt(t)[n >>> 0] = De(r);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const r = Wt(n).stack, s = Ar(r, K.__wbindgen_export, K.__wbindgen_export2), a = Je;
    pe().setInt32(t + 4, a, true), pe().setInt32(t + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return yt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = an(t, n);
    return yt(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return yt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = Wt(t);
    return yt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    De(t);
  } } };
}
function yt(e) {
  vn === _t.length && _t.push(_t.length + 1);
  const t = vn;
  return vn = _t[t], _t[t] = e, t;
}
function _i(e) {
  e < 1028 || (_t[e] = vn, vn = e);
}
function hi(e, t) {
  return e = e >>> 0, gi().subarray(e / 4, e / 4 + t);
}
function bi(e, t) {
  e = e >>> 0;
  const n = pe(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(De(n.getUint32(s, true)));
  return r;
}
let Rt = null;
function pe() {
  return (Rt === null || Rt.buffer.detached === true || Rt.buffer.detached === void 0 && Rt.buffer !== K.memory.buffer) && (Rt = new DataView(K.memory.buffer)), Rt;
}
let sn = null;
function gi() {
  return (sn === null || sn.byteLength === 0) && (sn = new Float32Array(K.memory.buffer)), sn;
}
function an(e, t) {
  return wi(e >>> 0, t);
}
let ln = null;
function fn() {
  return (ln === null || ln.byteLength === 0) && (ln = new Uint8Array(K.memory.buffer)), ln;
}
function Wt(e) {
  return _t[e];
}
let _t = new Array(1024).fill(void 0);
_t.push(void 0, null, true, false);
let vn = _t.length;
function Ut(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return fn().set(e, n / 1), Je = e.length, n;
}
function Ar(e, t, n) {
  if (n === void 0) {
    const c = dn.encode(e), o = t(c.length, 1) >>> 0;
    return fn().subarray(o, o + c.length).set(c), Je = c.length, o;
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
  return Je = l, s;
}
function De(e) {
  const t = Wt(e);
  return _i(e), t;
}
let Mn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Mn.decode();
const mi = 2146435072;
let Bn = 0;
function wi(e, t) {
  return Bn += t, Bn >= mi && (Mn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Mn.decode(), Bn = t), Mn.decode(fn().subarray(e, e + t));
}
const dn = new TextEncoder();
"encodeInto" in dn || (dn.encodeInto = function(e, t) {
  const n = dn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let Je = 0, K;
function bs(e, t) {
  return K = e.exports, Rt = null, sn = null, ln = null, K.__wbindgen_start(), K;
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
  if (K !== void 0) return K;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = hs();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return bs(n);
}
async function gs(e) {
  if (K !== void 0) return K;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = hs();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await yi(await e, t);
  return bs(n);
}
const Ei = Object.freeze(Object.defineProperty({ __proto__: null, _start: li, decode_wav: oi, default: gs, detect_format: ci, entropy_blocks: ui, extract_strings: fi, hex_rows: vi, initSync: xi, parse_elf: di, parse_gba: pi }, Symbol.toStringTag, { value: "Module" }));
let Un = null;
function mn() {
  return Un || (Un = gs()), Un.then(() => Ei);
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
const $n = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Wn = 65536, zn = $n.length * 4;
function ws() {
  const n = 84 + zn, r = new ArrayBuffer(n), s = new DataView(r), a = new Uint8Array(r);
  a[0] = 127, a[1] = 69, a[2] = 76, a[3] = 70, a[4] = 1, a[5] = 1, a[6] = 1, s.setUint16(16, 2, true), s.setUint16(18, 243, true), s.setUint32(20, 1, true), s.setUint32(24, Wn, true), s.setUint32(28, 52, true), s.setUint32(32, 0, true), s.setUint32(36, 0, true), s.setUint16(40, 52, true), s.setUint16(42, 32, true), s.setUint16(44, 1, true), s.setUint16(46, 0, true), s.setUint16(48, 0, true), s.setUint16(50, 0, true), s.setUint32(52, 1, true), s.setUint32(56, 84, true), s.setUint32(60, Wn, true), s.setUint32(64, Wn, true), s.setUint32(68, zn, true), s.setUint32(72, zn, true), s.setUint32(76, 5, true), s.setUint32(80, 4096, true);
  for (let l = 0; l < $n.length; l++) s.setUint32(84 + l * 4, $n[l], true);
  return new Uint8Array(r);
}
const ys = "demo-rv32-spi-i2c.elf", kr = 64 * 1024 * 1024;
function er(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function xs(e) {
  if (!e) throw new Error("no file");
  if (e.size > kr) throw new Error(`file too large (${er(e.size)} > ${er(kr)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var Si = N('<span class="bar svelte-1i6c60u"></span>'), Mi = N('<span class="bar shimmer svelte-1i6c60u"></span>'), Ti = N('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Ci = N('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Ri = N('<p class="loading svelte-1i6c60u"> </p>'), Oi = N('<p class="err svelte-1i6c60u"> </p>'), Fi = N('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Ii(e, t) {
  tt(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let r = W(false), s = W(""), a = W(at([])), l = W(""), c = W(at({}));
  async function o(S) {
    p(s, "");
    try {
      const B = await xs(S);
      t.onfile?.(B);
    } catch (B) {
      p(s, B.message || String(B), true);
    }
  }
  function v(S) {
    S.preventDefault(), p(r, false);
    const B = S.dataTransfer?.files?.[0];
    B && o(B);
  }
  function f(S) {
    S.preventDefault(), p(r, true);
  }
  function h() {
    p(r, false);
  }
  function _(S) {
    const B = S.target.files?.[0];
    B && o(B);
  }
  async function A(S) {
    if (!n.test(S)) {
      p(s, `sample blocked: bad name "${S}"`);
      return;
    }
    p(s, ""), p(l, `fetching ${S}\u2026`);
    try {
      const B = await fetch(`../v1/samples/${encodeURIComponent(S)}`);
      if (!B.ok) {
        p(s, `fetch failed: ${B.status}`), p(l, "");
        return;
      }
      p(l, `reading ${S}\u2026`);
      const J = new Uint8Array(await B.arrayBuffer());
      p(l, ""), t.onfile?.({ name: S, bytes: J });
    } catch (B) {
      p(s, String(B), true), p(l, "");
    }
  }
  function x() {
    p(s, ""), t.onfile?.({ name: ys, bytes: ws() });
  }
  Le(() => {
    let S = false;
    return (async () => {
      try {
        const B = await fetch("../v1/samples/manifest.json");
        if (!B.ok) return;
        const J = await B.json();
        if (S || !Array.isArray(J)) return;
        p(a, J, true);
        const le = await mn();
        if (S) return;
        await Promise.all(J.map(async (w) => {
          if (n.test(w.file)) try {
            const O = await fetch(`../v1/samples/${encodeURIComponent(w.file)}`);
            if (!O.ok) return;
            const M = new Uint8Array(await O.arrayBuffer());
            if (S) return;
            const E = Math.max(1, Math.ceil(M.length / 12)), T = le.entropy_blocks(M, E);
            p(c, { ...i(c), [w.file]: Array.from(T) }, true);
          } catch {
          }
        }));
      } catch {
      }
    })(), () => {
      S = true;
    };
  });
  var I = Fi(), g = u(I);
  let q;
  var L = d(u(g), 4), b = u(L), C = u(b), D = d(b, 2), F = d(L, 2);
  {
    var P = (S) => {
      var B = Ci(), J = d(u(B), 2);
      Ve(J, 21, () => i(a), He, (O, M) => {
        var E = Ti(), T = u(E), m = u(T), j = d(T, 2), V = u(j);
        {
          var Z = (X) => {
            var G = Fn(), ee = lt(G);
            Ve(ee, 17, () => i(c)[i(M).file], He, (ve, be) => {
              var ge = Si();
              Q((de) => Ht(ge, `height: ${de ?? ""}px`), [() => Math.max(2, i(be) * 14)]), R(ve, ge);
            }), R(X, G);
          }, re = (X) => {
            var G = Fn(), ee = lt(G);
            Ve(ee, 16, () => Array(12), He, (ve, be, ge) => {
              var de = Mi();
              Ht(de, `animation-delay: ${ge * 40}ms`), R(ve, de);
            }), R(X, G);
          };
          oe(V, (X) => {
            i(c)[i(M).file] ? X(Z) : X(re, -1);
          });
        }
        Q(() => {
          je(E, "title", i(M).insns > 0 ? `${i(M).desc} \u2014 ${i(M).insns} instructions` : i(M).desc), y(m, i(M).file);
        }), fe("click", E, () => A(i(M).file)), R(O, E);
      });
      var le = d(J, 2), w = u(le);
      Q((O) => y(w, O), [() => i(a).map((O) => `${O.file} \u2014 ${O.desc}`).join("  \xB7  ")]), R(S, B);
    };
    oe(F, (S) => {
      i(a).length && S(P);
    });
  }
  var $ = d(F, 2);
  {
    var ne = (S) => {
      var B = Ri(), J = u(B);
      Q(() => y(J, i(l))), R(S, B);
    };
    oe($, (S) => {
      i(l) && S(ne);
    });
  }
  var z = d($, 2);
  {
    var ae = (S) => {
      var B = Oi(), J = u(B);
      Q(() => y(J, i(s))), R(S, B);
    };
    oe(z, (S) => {
      i(s) && S(ae);
    });
  }
  Q(() => q = ze(g, 1, "zone svelte-1i6c60u", null, q, { over: i(r) })), Nt("drop", g, v), Nt("dragover", g, f), Nt("dragleave", g, h), fe("change", C, _), fe("click", D, x), R(e, I), nt();
}
Qt(["change", "click"]);
var ji = N('<span class="ct svelte-etynpr"> </span>'), Li = N('<span class="ct svelte-etynpr"> </span>'), Ni = N('<span class="ct svelte-etynpr"> </span>'), Pi = N('<span class="ct svelte-etynpr"> </span>'), Di = N("<button> <!> <!> <!> <!></button>"), qi = N('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), Bi = N('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Ui = N('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Wi = N('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), zi = N('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Hi = N('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Vi = N('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Gi = N('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Yi = N('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), Ki = N('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Xi(e, t) {
  tt(t, true);
  let n = W("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let s = W(""), a = ht(() => {
    if (!t.strings) return [];
    const L = i(s).trim().toLowerCase();
    return L ? t.strings.filter((b) => b.text.toLowerCase().includes(L)) : t.strings;
  });
  const l = 80, c = ht(() => t.report ? Math.max(1, ...t.report.sections.map((L) => Number(L.size) || 0)) : 1);
  function o(L) {
    return "0x" + Number(L).toString(16).toUpperCase().padStart(8, "0");
  }
  var v = Ki(), f = u(v);
  Ve(f, 21, () => r, He, (L, b) => {
    var C = ht(() => Ps(i(b), 2));
    let D = () => i(C)[0], F = () => i(C)[1];
    var P = Di();
    let $;
    var ne = u(P), z = d(ne);
    {
      var ae = (M) => {
        var E = ji(), T = u(E);
        Q(() => y(T, t.report.sections.length)), R(M, E);
      };
      oe(z, (M) => {
        D() === "sections" && M(ae);
      });
    }
    var S = d(z, 2);
    {
      var B = (M) => {
        var E = Li(), T = u(E);
        Q(() => y(T, t.report.segments.length)), R(M, E);
      };
      oe(S, (M) => {
        D() === "segments" && M(B);
      });
    }
    var J = d(S, 2);
    {
      var le = (M) => {
        var E = Ni(), T = u(E);
        Q(() => y(T, t.report.symbols.length)), R(M, E);
      };
      oe(J, (M) => {
        D() === "symbols" && M(le);
      });
    }
    var w = d(J, 2);
    {
      var O = (M) => {
        var E = Pi(), T = u(E);
        Q(() => y(T, t.strings.length)), R(M, E);
      };
      oe(w, (M) => {
        D() === "strings" && t.strings && M(O);
      });
    }
    Q(() => {
      $ = ze(P, 1, "tab svelte-etynpr", null, $, { active: i(n) === D() }), y(ne, `${F() ?? ""} `);
    }), fe("click", P, () => p(n, D(), true)), R(L, P);
  });
  var h = d(f, 2), _ = u(h);
  {
    var A = (L) => {
      var b = qi(), C = d(u(b), 2), D = u(C), F = d(C, 4), P = u(F), $ = d(F, 4), ne = u($), z = d($, 4), ae = u(z), S = d(z, 4), B = u(S), J = d(S, 4), le = u(J), w = d(J, 4), O = u(w), M = d(w, 4), E = u(M), T = d(M, 4), m = u(T);
      Q(() => {
        y(D, t.report.summary.class), y(P, t.report.summary.data), y(ne, t.report.summary.osabi), y(ae, t.report.summary.kind), y(B, t.report.summary.machine), y(le, t.report.summary.entry), y(O, t.report.summary.n_sections), y(E, t.report.summary.n_segments), y(m, t.report.summary.n_symbols);
      }), R(L, b);
    }, x = (L) => {
      var b = Ui(), C = d(u(b));
      Ve(C, 21, () => t.report.sections, He, (D, F) => {
        var P = Bi(), $ = u(P), ne = u($), z = d($), ae = u(z), S = d(z), B = u(S), J = d(S), le = u(J), w = d(J), O = u(w), M = d(w), E = u(M), T = d(M), m = u(T), j = d(T), V = u(j);
        Q((Z) => {
          je(P, "title", `Jump to offset ${i(F).offset ?? ""} in HEX`), y(ne, i(F).idx), y(ae, i(F).name || "\u2014"), y(B, i(F).kind), y(le, i(F).addr), y(O, i(F).offset), y(E, i(F).size), y(m, i(F).flags), Ht(V, `width: ${Z ?? ""}px`);
        }, [() => Math.max(1, Number(i(F).size) / i(c) * l)]), fe("click", P, () => t.onJumpToOffset?.(parseInt(i(F).offset, 16))), R(D, P);
      }), R(L, b);
    }, I = (L) => {
      var b = zi(), C = d(u(b));
      Ve(C, 21, () => t.report.segments, He, (D, F) => {
        var P = Wi(), $ = u(P), ne = u($), z = d($), ae = u(z), S = d(z), B = u(S), J = d(S), le = u(J), w = d(J), O = u(w), M = d(w), E = u(M), T = d(M), m = u(T);
        Q(() => {
          je(P, "title", `Jump to offset ${i(F).offset ?? ""} in HEX`), y(ne, i(F).idx), y(ae, i(F).kind), y(B, i(F).vaddr), y(le, i(F).offset), y(O, i(F).filesz), y(E, i(F).memsz), y(m, i(F).flags);
        }), fe("click", P, () => t.onJumpToOffset?.(parseInt(i(F).offset, 16))), R(D, P);
      }), R(L, b);
    }, g = (L) => {
      var b = Vi(), C = d(u(b));
      Ve(C, 21, () => t.report.symbols, He, (D, F) => {
        var P = Hi(), $ = u(P), ne = u($), z = d($), ae = u(z), S = d(z), B = u(S), J = d(S), le = u(J), w = d(J), O = u(w);
        Q(() => {
          y(ne, i(F).name), y(ae, i(F).bind), y(B, i(F).kind), y(le, i(F).value), y(O, i(F).size);
        }), R(D, P);
      }), R(L, b);
    }, q = (L) => {
      var b = Yi(), C = lt(b), D = u(C), F = d(D, 2), P = u(F), $ = d(C, 2), ne = d(u($));
      Ve(ne, 21, () => i(a), He, (z, ae) => {
        var S = Gi(), B = u(S), J = u(B), le = d(B), w = u(le);
        Q((O, M) => {
          je(S, "title", `Jump to offset ${O ?? ""} in HEX`), y(J, M), y(w, i(ae).text);
        }, [() => o(i(ae).offset), () => o(i(ae).offset)]), fe("click", S, () => t.onJumpToOffset?.(i(ae).offset)), R(z, S);
      }), Q(() => y(P, `${i(a).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), ds(D, () => i(s), (z) => p(s, z)), R(L, b);
    };
    oe(_, (L) => {
      i(n) === "summary" ? L(A) : i(n) === "sections" ? L(x, 1) : i(n) === "segments" ? L(I, 2) : i(n) === "symbols" ? L(g, 3) : i(n) === "strings" && L(q, 4);
    });
  }
  R(e, v), nt();
}
Qt(["click"]);
var Ji = N('<span class="strip-col svelte-14j5q0g"></span>'), Zi = N('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), Qi = N('<span role="presentation"> </span>'), $i = N('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <!> <pre class="grid svelte-14j5q0g"></pre></div>');
function el(e, t) {
  tt(t, true);
  let n = Qn(t, "jumpTo", 3, null), r = W(0);
  const s = 16 * 32;
  let a = W(at([])), l = W(null), c = W(at([])), o = W(0), v = W(""), f = W(null), h = W(0), _ = W(0), A = W(null);
  const x = 400;
  Le(() => {
    let E = false;
    return mn().then((T) => {
      if (E) return;
      p(l, T, true), p(o, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), p(c, t.bytes ? i(l).entropy_blocks(t.bytes, i(o)) : [], true), g();
    }), () => {
      E = true;
    };
  }), Le(() => {
    if (n() == null) return;
    const E = Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Number(n()) | 0)), T = Math.floor(E / 16) * 16, m = Math.floor(T / s) * s;
    p(r, m), g(), p(f, T), p(h, performance.now() + x), Aa(_), requestAnimationFrame(() => {
      const j = i(I);
      if (!j) return;
      const V = j.querySelector(`[data-row-off="${T}"]`);
      if (!V) return;
      const Z = j.getBoundingClientRect(), X = V.getBoundingClientRect().top - Z.top - Z.height / 3;
      j.scrollTo({ top: j.scrollTop + X, behavior: "smooth" });
    });
  }), Le(() => {
    if (i(_) === 0) return;
    let E = 0;
    const T = () => {
      if (performance.now() >= i(h)) {
        p(f, null);
        return;
      }
      p(_, i(_) + 1 & 4095), E = requestAnimationFrame(T);
    };
    return E = requestAnimationFrame(T), () => cancelAnimationFrame(E);
  });
  let I = W(null);
  function g() {
    !i(l) || !t.bytes || p(a, i(l).hex_rows(t.bytes, i(r), s), true);
  }
  function q(E) {
    p(r, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, i(r) + E)), true), p(r, Math.floor(i(r) / 16) * 16), g();
  }
  function L(E) {
    E.preventDefault();
    let T = i(v).trim();
    if (!T) return;
    (T.startsWith("0x") || T.startsWith("0X")) && (T = T.slice(2));
    const m = parseInt(T, 16);
    Number.isFinite(m) && (p(r, Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, m)), true), p(r, Math.floor(i(r) / 16) * 16), g());
  }
  function b(E) {
    if (!i(c).length || !t.bytes) return;
    const m = E.currentTarget.getBoundingClientRect(), j = Math.max(0, Math.min(1, (E.clientX - m.left) / m.width)), V = Math.floor(j * t.bytes.length);
    p(r, Math.floor(V / 16) * 16), g();
  }
  let C = ht(() => t.bytes && t.bytes.length ? i(r) / t.bytes.length : 0);
  function D(E, T) {
    if (i(f) == null || E !== i(f)) return 0;
    const m = i(h) - performance.now();
    return m <= 0 ? 0 : m / x;
  }
  let F = ht(() => {
    const E = [];
    for (let T = 0; T < i(a).length; T++) E.push({ off: i(r) + T * 16, text: i(a)[T] });
    return E;
  });
  var P = $i(), $ = u(P), ne = d(u($), 2), z = u(ne), ae = d(z, 2), S = d(ae, 2), B = d(u(S), 2), J = d(S, 2), le = d(J, 2), w = d($, 2);
  {
    var O = (E) => {
      var T = Zi(), m = d(u(T), 2), j = u(m);
      Ve(j, 17, () => i(c), He, (X, G) => {
        var ee = Ji();
        Q((ve) => Ht(ee, `height: ${ve ?? ""}%; opacity: ${0.35 + i(G) * 0.65}`), [() => Math.max(2, i(G) * 100)]), R(X, ee);
      });
      var V = d(j, 2), Z = d(m, 2), re = u(Z);
      Q((X) => {
        Ht(V, `left: ${i(C) * 100}%`), y(re, `${X ?? ""} B / col`);
      }, [() => i(o).toLocaleString()]), fe("click", m, b), R(E, T);
    };
    oe(w, (E) => {
      i(c).length > 1 && E(O);
    });
  }
  var M = d(w, 2);
  Ve(M, 21, () => i(F), He, (E, T, m) => {
    var j = Qi();
    let V;
    var Z = u(j);
    Q((re) => {
      V = ze(j, 1, "hex-row svelte-14j5q0g", null, V, { hover: i(A) === m, flash: i(T).off === i(f) }), je(j, "data-row-off", i(T).off), Ht(j, re), y(Z, `${i(T).text ?? ""}
`);
    }, [() => i(T).off === i(f) ? `--flash-a: ${D(i(T).off, i(_))}` : ""]), Nt("mouseenter", j, () => p(A, m, true)), Nt("mouseleave", j, () => i(A) === m && p(A, null)), R(E, j);
  }), Pt(M, (E) => p(I, E), () => i(I)), Q((E) => je(B, "placeholder", E), [() => i(r).toString(16).padStart(8, "0").toUpperCase()]), fe("click", z, () => q(-s)), fe("click", ae, () => q(-16)), Nt("submit", S, L), ds(B, () => i(v), (E) => p(v, E)), fe("click", J, () => q(16)), fe("click", le, () => q(s)), R(e, P), nt();
}
Qt(["click"]);
var tl = N('<span class="w-meta svelte-59bj26"> </span>'), nl = N('<div class="w-empty svelte-59bj26"> </div>'), rl = N('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), sl = N('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), al = N('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), il = N('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function ll(e, t) {
  tt(t, true);
  let n = W(null), r = W(""), s = W(null), a = W(null), l = null, c = null, o = null, v = 0, f = 0, h = 0, _ = W("0:00 / 0:00");
  function A(w) {
    return "0x" + (Number(w) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function x(w) {
    return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KiB` : `${(w / 1024 / 1024).toFixed(2)} MiB`;
  }
  function I(w) {
    if (w < 1) return `${(w * 1e3).toFixed(0)} ms`;
    if (w < 60) return `${w.toFixed(2)} s`;
    const O = Math.floor(w / 60), M = w - O * 60;
    return `${O}m ${M.toFixed(1)}s`;
  }
  function g(w) {
    return w.replace(/\s+$/g, "");
  }
  async function q(w) {
    if (p(r, ""), !w) {
      p(n, null);
      return;
    }
    try {
      const M = (await mn()).decode_wav(w);
      p(n, M, true), o = null, p(_, `0:00 / ${I(M.duration)}`), requestAnimationFrame(() => L({ playhead: 0 }));
    } catch (O) {
      console.error("[scry/wave] decode failed", O), p(n, null), p(r, String(O?.message || O), true);
    }
  }
  function L({ playhead: w = null } = {}) {
    if (!i(s) || !i(n)) return;
    const O = window.devicePixelRatio || 1, M = i(s).getBoundingClientRect(), E = Math.max(1, Math.floor(M.width * O)), T = Math.max(1, Math.floor(M.height * O));
    i(s).width = E, i(s).height = T;
    const m = getComputedStyle(i(s)), j = m.getPropertyValue("--w-bg").trim() || "#000", V = m.getPropertyValue("--w-grid").trim() || "#333", Z = m.getPropertyValue("--w-peak").trim() || "#888", re = m.getPropertyValue("--w-rms").trim() || "#bcd", X = m.getPropertyValue("--w-accent").trim() || "#9fe3c7", G = i(s).getContext("2d");
    G.fillStyle = j, G.fillRect(0, 0, E, T), G.strokeStyle = V, G.lineWidth = 1;
    const ee = T / 2;
    for (const de of [0.25, 0.5, 0.75]) {
      const Se = Math.floor(T * de) + 0.5;
      G.beginPath(), G.moveTo(0, Se), G.lineTo(E, Se), G.stroke();
    }
    const ve = i(n).envelope, be = ve.length, ge = E / be;
    for (let de = 0; de < be; de++) {
      const Se = ve[de], qe = Math.floor(de * ge), H = Math.max(1, Math.floor(ge) - 1), ce = ee - Se.max * ee, _e = ee - Se.min * ee;
      G.fillStyle = Z, G.fillRect(qe, Math.floor(ce), H, Math.max(1, Math.ceil(_e - ce)));
      const Ae = Se.rms * ee;
      G.fillStyle = re, G.fillRect(qe, Math.floor(ee - Ae), H, Math.max(1, Math.ceil(2 * Ae)));
    }
    if (w != null) {
      const de = Math.floor(w * E);
      G.strokeStyle = X, G.lineWidth = 2 * O, G.beginPath(), G.moveTo(de, 0), G.lineTo(de, T), G.stroke();
    }
  }
  function b() {
    if (!i(n)) return null;
    if (o) return o;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const w = i(n).samples instanceof Float32Array ? i(n).samples : new Float32Array(i(n).samples);
    return o = l.createBuffer(1, w.length, i(n).fmt.sample_rate), o.copyToChannel(w, 0), o;
  }
  function C() {
    if (!l || !c || !i(n)) {
      h = 0;
      return;
    }
    const w = f + (l.currentTime - v), O = i(n).duration, M = Math.max(0, Math.min(1, w / O));
    L({ playhead: M }), p(_, `${I(Math.min(w, O))} / ${I(O)}`), w < O ? h = requestAnimationFrame(C) : h = 0;
  }
  function D() {
    if (h && (cancelAnimationFrame(h), h = 0), c) {
      try {
        c.stop();
      } catch {
      }
      c.disconnect(), c = null;
    }
  }
  function F(w) {
    if (!i(n)) return;
    const O = b();
    O && (D(), c = l.createBufferSource(), c.buffer = O, c.connect(l.destination), c.onended = () => {
      h && cancelAnimationFrame(h), h = 0, L({ playhead: 0 }), p(_, `0:00 / ${I(i(n).duration)}`), c = null;
    }, l.state === "suspended" && l.resume(), f = Math.max(0, Math.min(i(n).duration - 1e-3, w)), v = l.currentTime, c.start(0, f), h = requestAnimationFrame(C));
  }
  function P(w) {
    if (!i(n)) return;
    const O = i(s).getBoundingClientRect(), M = (w.clientX - O.left) / O.width;
    F(M * i(n).duration);
  }
  Le(() => {
    const w = t.bytes;
    return q(w), () => D();
  }), Le(() => {
    if (!i(a)) return;
    const w = new ResizeObserver(() => i(n) && L({ playhead: 0 }));
    return w.observe(i(a)), () => w.disconnect();
  });
  var $ = il(), ne = u($), z = d(u(ne), 2);
  {
    var ae = (w) => {
      var O = tl(), M = u(O);
      Q((E) => y(M, `${i(n).fmt.channels ?? ""}ch @ ${i(n).fmt.sample_rate ?? ""} Hz \xB7 ${i(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${E ?? ""}`), [() => I(i(n).duration)]), R(w, O);
    };
    oe(z, (w) => {
      i(n) && w(ae);
    });
  }
  var S = d(ne, 2);
  {
    var B = (w) => {
      var O = nl(), M = u(O);
      Q(() => y(M, `Not a parseable WAV: ${i(r) ?? ""}`)), R(w, O);
    }, J = (w) => {
      var O = rl();
      R(w, O);
    }, le = (w) => {
      var O = al(), M = lt(O), E = u(M), T = u(E), m = u(T), j = d(u(m)), V = u(j), Z = d(m, 2), re = d(u(Z)), X = u(re), G = d(Z, 2), ee = d(u(G)), ve = u(ee), be = d(G, 2), ge = d(u(be)), de = u(ge), Se = d(T, 2), qe = u(Se), H = d(u(qe)), ce = u(H), _e = d(qe, 2), Ae = d(u(_e)), ut = u(Ae), k = d(_e, 2), U = d(u(k)), Y = u(U), me = d(k, 2), xe = d(u(me)), Ze = u(xe), Me = d(Se, 2), Te = u(Me), Fe = d(u(Te)), ft = u(Fe), ue = d(Te, 2);
      Ve(ue, 17, () => i(n).chunks.slice(0, 4), He, (vt, en) => {
        var yn = sl(), xn = u(yn), Es = u(xn), As = d(xn), ks = u(As);
        Q((Ss, Ms, Ts) => {
          y(Es, Ss), y(ks, `${Ms ?? ""} @ ${Ts ?? ""}`);
        }, [() => g(i(en).id), () => x(i(en).size), () => A(i(en).offset)]), R(vt, yn);
      });
      var Ce = d(M, 2), Be = u(Ce), rt = d(Be, 2), Tt = d(rt, 2), mt = u(Tt), $t = d(Ce, 2), wn = u($t);
      Pt(wn, (vt) => p(s, vt), () => i(s)), Pt($t, (vt) => p(a, vt), () => i(a)), Q((vt, en, yn, xn) => {
        y(V, i(n).fmt.format === 1 ? "PCM (int)" : i(n).fmt.format === 3 ? "IEEE float" : `tag ${i(n).fmt.format}`), y(X, i(n).fmt.channels), y(ve, `${i(n).fmt.sample_rate ?? ""} Hz`), y(de, `${i(n).fmt.bits_per_sample ?? ""}-bit`), y(ce, vt), y(ut, en), y(Y, yn), y(Ze, `${xn ?? ""}/s`), y(ft, i(n).chunks.length), y(mt, i(_));
      }, [() => Number(i(n).total_frames).toLocaleString(), () => I(i(n).duration), () => x(i(n).data_len), () => x(i(n).fmt.byte_rate)]), fe("click", Be, () => F(0)), fe("click", rt, () => {
        D(), L({ playhead: 0 }), p(_, `0:00 / ${I(i(n).duration)}`);
      }), fe("click", wn, P), R(w, O);
    };
    oe(S, (w) => {
      i(r) ? w(B) : i(n) ? w(le, -1) : w(J, 1);
    });
  }
  R(e, $), nt();
}
Qt(["click"]);
var ol = N('<span class="c-meta svelte-1uww35p"> </span>'), cl = N('<div class="c-empty svelte-1uww35p"> </div>'), ul = N('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), fl = N('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), vl = N(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), dl = N('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function pl(e, t) {
  tt(t, true);
  let n = W(null), r = W("");
  function s(b) {
    return (b >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function a(b) {
    return "0x" + (b >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function l(b) {
    return b >= 32 && b <= 126 ? String.fromCharCode(b) : ".";
  }
  function c(b) {
    return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KiB` : `${(b / 1024 / 1024).toFixed(2)} MiB`;
  }
  async function o(b) {
    if (p(r, ""), !b) {
      p(n, null);
      return;
    }
    try {
      const C = await mn();
      p(n, C.parse_gba(b), true);
    } catch (C) {
      console.error("[scry/cart] parse failed", C), p(n, null), p(r, String(C?.message || C), true);
    }
  }
  Le(() => {
    const b = t.bytes;
    o(b);
  });
  function v(b) {
    if (!t.bytes) return null;
    const C = t.bytes.subarray(b, Math.min(t.bytes.length, b + 16)), D = [], F = [];
    for (let P = 0; P < C.length; P++) D.push(s(C[P])), F.push(l(C[P])), P === 7 && D.push("");
    return { off: b, hex: D.join(" ").replace(/  /g, "  "), ascii: F.join("") };
  }
  let f = ht(() => {
    if (!t.bytes) return [];
    const b = [];
    for (let C = 160; C < 224; C += 16) {
      const D = v(C);
      D && b.push(D);
    }
    return b;
  });
  var h = dl(), _ = u(h), A = d(u(_), 2);
  {
    var x = (b) => {
      var C = ol(), D = u(C);
      Q((F) => y(D, `"${(i(n).title || "(blank)") ?? ""}" \xB7 ${i(n).game_code ?? ""} \xB7 ${F ?? ""}`), [() => c(i(n).rom_size)]), R(b, C);
    };
    oe(A, (b) => {
      i(n) && b(x);
    });
  }
  var I = d(_, 2);
  {
    var g = (b) => {
      var C = cl(), D = u(C);
      Q(() => y(D, `parse failed: ${i(r) ?? ""}`)), R(b, C);
    }, q = (b) => {
      var C = ul();
      R(b, C);
    }, L = (b) => {
      var C = vl(), D = u(C), F = d(u(D), 2), P = d(u(F)), $ = u(P), ne = d(F, 2), z = d(u(ne)), ae = u(z), S = d(ne, 2), B = d(u(S)), J = u(B), le = d(S, 2), w = d(u(le), 2), O = u(w), M = d(le, 2), E = d(u(M)), T = u(E), m = d(M, 2), j = d(u(m)), V = u(j), Z = d(m, 2), re = d(u(Z)), X = u(re), G = d(Z, 2), ee = d(u(G), 2), ve = u(ee), be = d(G, 2), ge = d(u(be)), de = u(ge), Se = d(D, 2), qe = d(u(Se), 2);
      Ve(qe, 21, () => i(f), He, (H, ce) => {
        var _e = fl(), Ae = u(_e), ut = u(Ae), k = d(Ae, 2), U = u(k), Y = d(k, 2), me = u(Y);
        Q((xe) => {
          y(ut, xe), y(U, i(ce).hex), y(me, i(ce).ascii);
        }, [() => a(i(ce).off)]), R(H, _e);
      }), Q((H, ce, _e, Ae, ut, k, U) => {
        y($, i(n).title || "(blank)"), y(ae, i(n).game_code || "----"), y(J, i(n).maker_code || "--"), y(O, `0x${H ?? ""} ${i(n).fixed_ok ? "\u2713" : "\u2717"}`), y(T, `0x${ce ?? ""}`), y(V, `0x${_e ?? ""}`), y(X, `0x${Ae ?? ""}`), y(ve, `stored 0x${ut ?? ""} \xB7
            computed 0x${k ?? ""}
            ${i(n).checksum_ok ? " \u2713" : " \u2717"}`), y(de, U);
      }, [() => s(i(n).fixed), () => s(i(n).unit_code), () => s(i(n).device_type), () => s(i(n).version), () => s(i(n).checksum), () => s(i(n).checksum_computed), () => c(i(n).rom_size)]), R(b, C);
    };
    oe(I, (b) => {
      i(r) ? b(g) : i(n) ? b(L, -1) : b(q, 1);
    });
  }
  R(e, h), nt();
}
var _l = N('<section class="mh-host svelte-sq0dz7"><div class="mh-bar svelte-sq0dz7"><span class="mh-title svelte-sq0dz7"> </span> <form class="mh-jumpform svelte-sq0dz7"><span class="mh-jumplab svelte-sq0dz7">JUMP</span> <input type="text" placeholder="0x..." class="mh-jump svelte-sq0dz7" aria-label="jump to offset"/></form></div> <div class="mh-scroll svelte-sq0dz7"><div class="mh-sizer svelte-sq0dz7"></div></div></section>');
function hl(e, t) {
  tt(t, true);
  let n = Qn(t, "cursor", 3, null), r = Qn(t, "follow", 3, false);
  const s = 16, a = 20, l = 6, c = 2e6;
  let o, v, f, h = 0, _ = [], A = null, x = { physicalPx: 0, scale: 1 }, I = -1;
  function g(m) {
    return (m >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function q(m) {
    return "0x" + (m >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function L(m) {
    return m >= 32 && m <= 126 ? String.fromCharCode(m) : ".";
  }
  function b(m, j) {
    const V = Math.max(0, m * j);
    return V <= c ? { physicalPx: V, scale: 1 } : { physicalPx: c, scale: V / c };
  }
  function C(m, j, V, Z) {
    if (V === 0) return { start: 0, end: 0, topPx: 0 };
    const re = m * Z, X = Math.ceil(j / a) + l * 2, G = Math.floor(re / a) - l, ee = Math.max(0, G), ve = Math.min(V, ee + X);
    let be;
    if (Z === 1) be = ee * a;
    else {
      const ge = re - ee * a;
      be = m - ge / Z;
    }
    return { start: ee, end: ve, topPx: be };
  }
  function D(m, j) {
    const V = m * s, Z = Math.min(j.byteLength, V + s), re = j.subarray(V, Z);
    let X = "", G = "";
    for (let ee = 0; ee < re.length; ee++) X += g(re[ee]), G += L(re[ee]), ee === 7 ? X += "  " : ee < re.length - 1 && (X += " ");
    return { addr: q(V), hex: X, asc: G };
  }
  function F(m) {
    for (; _.length < m; ) {
      const j = document.createElement("div");
      j.className = "mh-row", j.style.position = "absolute", j.style.left = "0", j.style.right = "0", j.style.height = `${a}px`;
      const V = document.createElement("span");
      V.className = "mh-addr";
      const Z = document.createElement("span");
      Z.className = "mh-bytes";
      const re = document.createElement("span");
      re.className = "mh-ascii", j.appendChild(V), j.appendChild(Z), j.appendChild(re), _.push(j);
    }
  }
  function P() {
    const m = t.bytes;
    if (!v) return;
    if (!m || m.byteLength === 0) {
      for (const X of _) X.parentNode && X.remove();
      v.style.height = "0px";
      return;
    }
    const j = Math.ceil(m.byteLength / s);
    x = b(j, a), v.style.height = `${x.physicalPx}px`;
    const V = C(o.scrollTop, h, j, x.scale), Z = V.end - V.start;
    F(Z);
    for (let X = Z; X < _.length; X++) _[X].parentNode && _[X].remove();
    const re = typeof n() == "number" && n() >= 0 && n() < m.byteLength ? Math.floor(n() / s) : -1;
    for (let X = 0; X < Z; X++) {
      const G = V.start + X, ee = D(G, m), ve = _[X];
      ve.style.top = `${V.topPx + X * a}px`;
      const [be, ge, de] = ve.children;
      be.textContent = ee.addr, ge.textContent = ee.hex, de.textContent = ee.asc, G === re ? ve.classList.add("mh-cursor") : ve.classList.remove("mh-cursor"), ve.parentNode !== v && v.appendChild(ve);
    }
  }
  function $() {
    const m = t.bytes;
    if (!m || typeof n() != "number" || n() < 0 || n() >= m.byteLength || !o) return;
    const Z = Math.floor(n() / s) * a / x.scale, re = a * 4, X = o.scrollTop, G = X + h;
    (Z < X + re || Z > G - re) && (o.scrollTop = Math.max(0, Z - h / 2));
  }
  function ne(m) {
    const j = t.bytes;
    if (!j || m < 0 || m >= j.byteLength) return;
    const re = Math.floor(m / s) * a / x.scale;
    o.scrollTop = Math.max(0, re - h / 2), P();
  }
  function z(m) {
    m.preventDefault();
    const j = f.value.trim().replace(/^0x/i, ""), V = parseInt(j, 16);
    Number.isFinite(V) && ne(V);
  }
  let ae;
  ps(() => {
    ae = new ResizeObserver(() => {
      h = o.clientHeight, P();
    }), ae.observe(o), o.addEventListener("scroll", P, { passive: true }), P();
  }), _s(() => {
    try {
      ae?.disconnect();
    } catch {
    }
  }), Le(() => {
    t.bytes !== A && (A = t.bytes, I = -1, o && (o.scrollTop = 0), P(), t.bytes && t.bytes.byteLength >= 192 && requestAnimationFrame(() => ne(160)));
  });
  let S = false;
  Le(() => {
    const m = n(), j = r();
    if (!t.bytes) return;
    const V = typeof m == "number" && m >= 0 && m < t.bytes.byteLength ? Math.floor(m / s) : -1, Z = j !== S;
    S = j, !(V === I && !Z) && (I = V, P(), j && $());
  });
  var B = _l(), J = u(B), le = u(J), w = u(le), O = d(le, 2), M = d(u(O), 2);
  Pt(M, (m) => f = m, () => f);
  var E = d(J, 2), T = u(E);
  Pt(T, (m) => v = m, () => v), Pt(E, (m) => o = m, () => o), Q((m) => y(w, m), [() => t.bytes ? `ROM (${t.bytes.byteLength.toLocaleString()} bytes)` : "ROM (empty)"]), Nt("submit", O, z), R(e, B), nt();
}
var bl = N('<span class="g-meta svelte-1kb9ux"> </span>'), gl = N('<span class="g-pc-note svelte-1kb9ux">&middot; PC currently outside cart</span>'), ml = N("<span> </span> <!>", 1), wl = N(`<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-split svelte-1kb9ux"><div class="g-left svelte-1kb9ux"><div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <button type="button" title="Auto-scroll the ROM view to wherever the CPU's program counter currently is"><span class="g-follow-led svelte-1kb9ux" aria-hidden="true"></span> <span class="g-follow-lab"> </span></button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div></div> <div class="g-right svelte-1kb9ux"><div class="g-sub-bar svelte-1kb9ux"><span class="g-sub-title svelte-1kb9ux">[ ROM / INSPECTOR ]</span> <span class="g-sub-hint svelte-1kb9ux"><!></span></div> <!></div></div></div>`);
function yl(e, t) {
  tt(t, true);
  let n, r = null, s = false, a = W(false), l = W("cart ready \xB7 click PLAY"), c = W(null), o = W(false), v = W(false), f = 0, h = 0;
  const _ = 480, A = 320, x = 134217728, I = 100;
  function g(H) {
    return H < 1024 ? `${H} B` : H < 1024 * 1024 ? `${(H / 1024).toFixed(1)} KiB` : `${(H / (1024 * 1024)).toFixed(2)} MiB`;
  }
  function q() {
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
    return r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((H, ce) => console.warn("[scry/v2/game/gba]", ce)), r.setCanvas(n), console.log("[scry/dbg/v2] post-setCanvas:", "indirectCanvas=", !!r.indirectCanvas, "targetCanvas=", !!r.targetCanvas, "drawCallback=", r.video.drawCallback?.toString().slice(0, 80)), r.setBios(window.biosBin), r;
  }
  async function L() {
    if (t.bytes && !i(a)) {
      if (n.focus(), !s) {
        p(l, "loading ROM\u2026"), await new Promise((H) => requestAnimationFrame(H)), await new Promise((H) => requestAnimationFrame(H));
        try {
          const H = q(), ce = t.bytes.buffer.slice(t.bytes.byteOffset, t.bytes.byteOffset + t.bytes.byteLength);
          if (!H.setRom(ce)) {
            p(l, "rom rejected");
            return;
          }
          s = true, H.runStable(), p(a, true), p(l, "running"), D();
        } catch (H) {
          console.error("[scry/v2/game] load failed", H), p(l, "error: " + (H?.message || H));
        }
        return;
      }
      r.runStable(), p(a, true), p(l, "running"), D();
    }
  }
  function b() {
    !r || !r.hasRom() || (r.pause(), p(a, false), p(l, "paused"), F());
  }
  function C(H) {
    if (f = requestAnimationFrame(C), !i(a) || !r || !t.bytes || H - h < I) return;
    h = H;
    const ce = r.cpu?.gprs?.[15];
    if (typeof ce != "number") return;
    const _e = (ce >>> 0) - x;
    _e >= 0 && _e < t.bytes.byteLength ? (p(c, _e), p(o, true)) : p(o, false);
  }
  function D() {
    f || (h = 0, f = requestAnimationFrame(C));
  }
  function F() {
    f && cancelAnimationFrame(f), f = 0;
  }
  function P() {
    p(v, !i(v));
  }
  function $() {
    if (!r || !t.bytes) return;
    const H = i(a);
    if (H) {
      try {
        r.pause();
      } catch {
      }
      p(a, false);
    }
    F(), p(c, null), p(o, false), s = false, p(l, "cart ready \xB7 click PLAY"), H && L();
  }
  Le(() => {
    if (t.bytes) i(a) || p(l, "cart ready \xB7 click PLAY");
    else {
      if (r && i(a)) try {
        r.pause();
      } catch {
      }
      F(), p(c, null), p(o, false), p(v, false), s = false, p(a, false), p(l, "idle");
    }
  }), _s(() => {
    if (r && i(a)) try {
      r.pause();
    } catch {
    }
    F();
  });
  var ne = wl(), z = u(ne), ae = d(u(z), 2);
  {
    var S = (H) => {
      var ce = bl(), _e = u(ce);
      Q((Ae) => y(_e, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${Ae ?? ""}`), [() => g(t.header.rom_size)]), R(H, ce);
    };
    oe(ae, (H) => {
      t.header && H(S);
    });
  }
  var B = d(z, 2), J = u(B), le = u(J), w = u(le);
  je(w, "width", _), je(w, "height", A), Pt(w, (H) => n = H, () => n);
  var O = d(le, 2), M = u(O), E = d(M, 2), T = d(E, 2), m = d(T, 2);
  let j;
  var V = d(u(m), 2), Z = u(V), re = d(m, 2), X = u(re), G = d(J, 2), ee = u(G), ve = d(u(ee), 2), be = u(ve);
  {
    var ge = (H) => {
      var ce = ml(), _e = lt(ce);
      let Ae;
      var ut = u(_e), k = d(_e, 2);
      {
        var U = (Y) => {
          var me = gl();
          R(Y, me);
        };
        oe(k, (Y) => {
          i(o) || Y(U);
        });
      }
      Q((Y) => {
        Ae = ze(_e, 1, "svelte-1kb9ux", null, Ae, { "g-pc-dim": !i(o) }), y(ut, `PC\u21920x${Y ?? ""}`);
      }, [() => i(c).toString(16).toUpperCase().padStart(8, "0")]), R(H, ce);
    }, de = (H) => {
      var ce = mr("waiting for PC inside cart\u2026");
      R(H, ce);
    }, Se = (H) => {
      var ce = mr("pause \xB7 scroll \xB7 jump 0x...");
      R(H, ce);
    };
    oe(be, (H) => {
      i(a) && i(c) !== null ? H(ge) : i(a) ? H(de, 1) : H(Se, -1);
    });
  }
  var qe = d(ee, 2);
  hl(qe, { get bytes() {
    return t.bytes;
  }, get cursor() {
    return i(c);
  }, get follow() {
    return i(v);
  } }), Q(() => {
    M.disabled = !t.bytes || i(a), E.disabled = !i(a), T.disabled = !t.bytes || !s, j = ze(m, 1, "g-follow svelte-1kb9ux", null, j, { "g-follow-on": i(v) }), m.disabled = !s, y(Z, i(v) ? "FOLLOWING PC" : "FOLLOW PC"), y(X, i(l));
  }), fe("click", M, L), fe("click", E, b), fe("click", T, $), fe("click", m, P), R(e, ne), nt();
}
Qt(["click"]);
var xl = N('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), El = N('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), Al = N('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), kl = N('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function Sl(e, t) {
  tt(t, true);
  var n = kl(), r = u(n);
  {
    var s = (c) => {
      var o = xl();
      R(c, o);
    }, a = (c) => {
      var o = El(), v = lt(o), f = d(u(v), 2), h = u(f), _ = d(v, 2), A = d(u(_), 2), x = u(A), I = d(_, 2), g = d(u(I), 2), q = u(g);
      Q((L, b) => {
        je(f, "title", t.file.name), y(h, t.file.name), y(x, L), y(q, b);
      }, [() => er(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), R(c, o);
    }, l = (c) => {
      var o = Al();
      R(c, o);
    };
    oe(r, (c) => {
      t.parsing ? c(s) : t.file ? c(a, 1) : c(l, -1);
    });
  }
  R(e, n), nt();
}
var Ml = N('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function Tl(e, t) {
  tt(t, true);
  let n = W(false), r = 0;
  function s(o) {
    const v = o.dataTransfer;
    if (!v) return false;
    const f = v.types;
    if (!f) return false;
    for (let h = 0; h < f.length; h++) if (f[h] === "Files") return true;
    return false;
  }
  Le(() => {
    function o(_) {
      s(_) && (_.preventDefault(), r++, p(n, true));
    }
    function v(_) {
      s(_) && (_.preventDefault(), _.dataTransfer && (_.dataTransfer.dropEffect = "copy"));
    }
    function f(_) {
      s(_) && (r = Math.max(0, r - 1), r === 0 && p(n, false));
    }
    async function h(_) {
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
    return window.addEventListener("dragenter", o), window.addEventListener("dragover", v), window.addEventListener("dragleave", f), window.addEventListener("drop", h), () => {
      window.removeEventListener("dragenter", o), window.removeEventListener("dragover", v), window.removeEventListener("dragleave", f), window.removeEventListener("drop", h);
    };
  });
  var a = Fn(), l = lt(a);
  {
    var c = (o) => {
      var v = Ml();
      R(o, v);
    };
    oe(l, (o) => {
      i(n) && o(c);
    });
  }
  R(e, a), nt();
}
var Cl = N('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), Rl = N('<span class="s-badge entrance svelte-1n46o8q"> </span>'), Ol = N('<span class="s-summary svelte-1n46o8q"> </span>'), Fl = N('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), Il = N('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), jl = N('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Ll = N('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), Nl = N('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Pl = N('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), Dl = N('<p class="err svelte-1n46o8q"> </p>'), ql = N('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), Bl = N("<!> <!>", 1), Ul = N('<span class="s-hint svelte-1n46o8q"> </span>'), Wl = N('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function zl(e, t) {
  tt(t, true);
  let n = W(null), r = W(null), s = W(null), a = W(null), l = W(null), c = W(null), o = W(null), v = W(""), f = W("inspect"), h = W(at(ms())), _ = W(false), A = W(null), x = W(""), I = W(false);
  const g = "scry \xB7 awaiting binary", q = "scry-booted-v2", L = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, b = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  Le(() => {
    function k(U) {
      if (U.origin !== location.origin) return;
      const Y = U.data;
      Y && (Y.type === "scry-theme" && (Y.value === "light" || Y.value === "dark") ? (document.documentElement.setAttribute("data-theme", Y.value), p(h, Y.value, true)) : Y.type === "scry-load-demo" && $());
    }
    return window.addEventListener("message", k), () => window.removeEventListener("message", k);
  });
  async function C({ name: k, bytes: U }) {
    p(n, { name: k, bytes: U }, true), p(v, ""), p(s, null), p(a, null), p(l, null), p(c, null), p(r, null), p(o, null), p(_, true);
    try {
      const Y = await mn();
      if (p(r, Y.detect_format(U), true), i(r) === "elf") p(s, Y.parse_elf(U), true), p(f, "inspect");
      else if (i(r) === "wav") {
        try {
          p(a, Y.decode_wav(U), true);
        } catch {
        }
        p(f, "wave");
      } else if (i(r) === "gba") {
        try {
          p(l, Y.parse_gba(U), true);
        } catch {
        }
        p(f, "game");
      } else p(f, "hex");
      p(c, Y.extract_strings(U, 4), true);
      const me = Math.max(64, Math.ceil(U.length / 256)), xe = Y.entropy_blocks(U, me);
      if (xe.length) {
        let Ze = 0;
        for (let Me = 0; Me < xe.length; Me++) Ze += xe[Me];
        p(o, Ze / xe.length * 8);
      }
    } catch (Y) {
      p(v, String(Y), true);
    } finally {
      p(_, false);
    }
  }
  function D() {
    p(n, null), p(s, null), p(a, null), p(l, null), p(c, null), p(r, null), p(v, ""), p(o, null);
  }
  function F(k) {
    p(v, k, true);
  }
  function P() {
    p(h, ki(), true);
  }
  function $() {
    C({ name: ys, bytes: ws() });
  }
  function ne(k) {
    p(f, "hex"), p(A, { o: k, t: performance.now() }, true);
  }
  let z = ht(() => {
    if (!i(n)) return null;
    if (i(s)) {
      const k = i(s).summary;
      return [i(r)?.toUpperCase(), k.machine, k.class, k.kind].filter(Boolean).join(" \xB7 ");
    }
    return (i(r) || "raw").toUpperCase();
  }), ae = ht(() => {
    if (!i(n)) return null;
    if (i(s)) {
      const k = i(s).summary, U = [];
      return k.class && k.machine ? U.push(`${k.class} ${k.machine}`) : k.machine && U.push(k.machine), U.push(`${i(s).sections.length} sections`), U.push(`${i(s).symbols.length} symbols`), i(o) != null && U.push(`avg entropy ${i(o).toFixed(1)} bits`), U.join(" \xB7 ");
    }
    if (i(a)) {
      const k = i(a).fmt, U = i(a).duration < 1 ? `${(i(a).duration * 1e3).toFixed(0)} ms` : `${i(a).duration.toFixed(2)} s`, Y = [`${k.channels}ch ${k.sample_rate} Hz`, `${k.bits_per_sample}-bit`, U];
      return i(o) != null && Y.push(`avg entropy ${i(o).toFixed(1)} bits`), Y.join(" \xB7 ");
    }
    if (i(l)) {
      const k = ["GBA cart", `"${i(l).title || "(blank)"}"`, `code ${i(l).game_code}`];
      return i(o) != null && k.push(`avg entropy ${i(o).toFixed(1)} bits`), k.join(" \xB7 ");
    }
    return i(o) != null ? `bytes only \xB7 entropy ${i(o).toFixed(1)} bits` : null;
  });
  Le(() => {
    if (sessionStorage.getItem(q)) {
      p(x, g), p(I, true);
      return;
    }
    let k = 0;
    const U = setInterval(() => {
      if (k++, p(x, g.slice(0, k), true), k >= g.length) {
        clearInterval(U), p(I, true);
        try {
          sessionStorage.setItem(q, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(U);
  });
  var S = Wl(), B = lt(S);
  Tl(B, { onfile: C, onerror: F });
  var J = d(B, 2);
  let le;
  var w = u(J), O = u(w);
  {
    var M = (k) => {
      var U = Cl(), Y = u(U);
      let me;
      Q(() => {
        je(U, "title", i(n) ? "Clear file \xB7 back to import" : ""), me = ze(Y, 1, "s-brand svelte-1n46o8q", null, me, { "s-brand-clickable": !!i(n) });
      }), fe("click", U, D), R(k, U);
    };
    oe(O, (k) => {
      b || k(M);
    });
  }
  var E = d(O, 2);
  {
    var T = (k) => {
      var U = jl(), Y = u(U);
      {
        var me = (Te) => {
          var Fe = Fl(), ft = u(Fe);
          Ja(ft, () => i(n).name, (Be) => {
            var rt = Rl(), Tt = u(rt);
            Q(() => y(Tt, `[ ${i(z) ?? ""} ]`)), R(Be, rt);
          });
          var ue = d(ft, 2);
          {
            var Ce = (Be) => {
              var rt = Ol(), Tt = u(rt);
              Q(() => y(Tt, i(ae))), R(Be, rt);
            };
            oe(ue, (Be) => {
              i(ae) && Be(Ce);
            });
          }
          R(Te, Fe);
        };
        oe(Y, (Te) => {
          i(z) && Te(me);
        });
      }
      var xe = d(Y, 2);
      {
        var Ze = (Te) => {
          var Fe = Il();
          R(Te, Fe);
        };
        oe(xe, (Te) => {
          i(_) && Te(Ze);
        });
      }
      var Me = d(xe, 2);
      fe("click", Me, D), R(k, U);
    }, m = (k) => {
      var U = Ll();
      R(k, U);
    };
    oe(E, (k) => {
      i(n) ? k(T) : k(m, -1);
    });
  }
  var j = d(E, 2);
  {
    var V = (k) => {
      var U = Nl(), Y = u(U), me = u(Y);
      Q(() => y(me, i(h) === "dark" ? "\u263C" : "\u263E")), fe("click", Y, P), R(k, U);
    };
    oe(j, (k) => {
      b || k(V);
    });
  }
  var Z = d(w, 2), re = u(Z);
  Sl(re, { get file() {
    return i(n);
  }, get format() {
    return i(r);
  }, get parsing() {
    return i(_);
  } });
  var X = d(re, 2), G = u(X);
  {
    var ee = (k) => {
      var U = Pl(), Y = u(U);
      let me;
      var xe = d(Y, 2);
      let Ze;
      var Me = d(xe, 2);
      let Te;
      var Fe = d(Me, 2);
      let ft;
      var ue = d(Fe, 2);
      let Ce;
      Q(() => {
        Y.disabled = i(r) !== "elf", je(Y, "title", i(r) === "elf" ? "" : "INSPECT is ELF-only"), me = ze(Y, 1, "svelte-1n46o8q", null, me, { on: i(f) === "inspect" }), Ze = ze(xe, 1, "svelte-1n46o8q", null, Ze, { on: i(f) === "hex" }), Me.disabled = i(r) !== "wav", je(Me, "title", i(r) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), Te = ze(Me, 1, "svelte-1n46o8q", null, Te, { on: i(f) === "wave" }), Fe.disabled = i(r) !== "gba", je(Fe, "title", i(r) === "gba" ? "" : "CART is GBA-only"), ft = ze(Fe, 1, "svelte-1n46o8q", null, ft, { on: i(f) === "cart" }), ue.disabled = i(r) !== "gba", je(ue, "title", i(r) === "gba" ? "" : "GAME is GBA-only"), Ce = ze(ue, 1, "svelte-1n46o8q", null, Ce, { on: i(f) === "game" });
      }), fe("click", Y, () => p(f, "inspect")), fe("click", xe, () => p(f, "hex")), fe("click", Me, () => p(f, "wave")), fe("click", Fe, () => p(f, "cart")), fe("click", ue, () => p(f, "game")), R(k, U);
    };
    oe(G, (k) => {
      i(n) && k(ee);
    });
  }
  var ve = d(G, 2), be = u(ve);
  {
    var ge = (k) => {
      Ii(k, { onfile: C });
    }, de = (k) => {
      var U = Bl(), Y = lt(U);
      {
        var me = (ue) => {
          var Ce = Dl(), Be = u(Ce);
          Q(() => y(Be, `parse failed: ${i(v) ?? ""}`)), R(ue, Ce);
        };
        oe(Y, (ue) => {
          i(v) && ue(me);
        });
      }
      var xe = d(Y, 2);
      {
        var Ze = (ue) => {
          var Ce = Fn(), Be = lt(Ce);
          {
            var rt = (mt) => {
              Xi(mt, { get report() {
                return i(s);
              }, get strings() {
                return i(c);
              }, onJumpToOffset: ne });
            }, Tt = (mt) => {
              var $t = ql(), wn = d(u($t)), vt = u(wn);
              Q(() => y(vt, i(r))), R(mt, $t);
            };
            oe(Be, (mt) => {
              i(s) ? mt(rt) : i(r) && i(r) !== "elf" && mt(Tt, 1);
            });
          }
          R(ue, Ce);
        }, Me = (ue) => {
          {
            let Ce = ht(() => i(A)?.o);
            el(ue, { get bytes() {
              return i(n).bytes;
            }, get jumpTo() {
              return i(Ce);
            } });
          }
        }, Te = (ue) => {
          ll(ue, { get bytes() {
            return i(n).bytes;
          } });
        }, Fe = (ue) => {
          pl(ue, { get bytes() {
            return i(n).bytes;
          } });
        }, ft = (ue) => {
          yl(ue, { get bytes() {
            return i(n).bytes;
          }, get header() {
            return i(l);
          } });
        };
        oe(xe, (ue) => {
          i(f) === "inspect" ? ue(Ze) : i(f) === "hex" ? ue(Me, 1) : i(f) === "wave" ? ue(Te, 2) : i(f) === "cart" ? ue(Fe, 3) : i(f) === "game" && ue(ft, 4);
        });
      }
      R(k, U);
    };
    oe(be, (k) => {
      i(n) ? k(de, -1) : k(ge);
    });
  }
  var Se = d(Z, 2), qe = u(Se), H = d(u(qe), 1, true), ce = d(qe, 2);
  {
    var _e = (k) => {
      var U = Ul(), Y = u(U);
      Q(() => y(Y, L[i(f)] ?? "")), R(k, U);
    };
    oe(ce, (k) => {
      i(n) && k(_e);
    });
  }
  var Ae = d(ce, 2), ut = u(Ae);
  Q((k) => {
    le = ze(J, 1, "app svelte-1n46o8q", null, le, { embedded: b }), y(H, i(n) ? b ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : i(I) ? b ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${i(x)}\u2588`), y(ut, `MODULE \xB7 ${k ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => i(n) ? i(f).toUpperCase() : "EMPTY"]), R(e, S), nt();
}
Qt(["click"]);
Ga(zl, { target: document.getElementById("app") });
