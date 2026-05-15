(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const i of r) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && a(l);
  }).observe(document, { childList: true, subtree: true });
  function n(r) {
    const i = {};
    return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function a(r) {
    if (r.ep) return;
    r.ep = true;
    const i = n(r);
    fetch(r.href, i);
  }
})();
const Os = false;
var Nr = Array.isArray, Rs = Array.prototype.indexOf, sn = Array.prototype.includes, zn = Array.from, Ls = Object.defineProperty, gn = Object.getOwnPropertyDescriptor, Fs = Object.getOwnPropertyDescriptors, Ns = Object.prototype, Is = Array.prototype, Ir = Object.getPrototypeOf, yr = Object.isExtensible;
const Bs = () => {
};
function js(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Br() {
  var e, t, n = new Promise((a, r) => {
    e = a, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ps(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const a of e) if (n.push(a), n.length === t) break;
  return n;
}
const Ge = 2, an = 4, qn = 8, jr = 1 << 24, yt = 16, _t = 32, Pt = 64, Qn = 128, it = 512, Ue = 1024, We = 2048, wt = 4096, Xe = 8192, lt = 16384, Qt = 32768, $n = 1 << 25, ln = 65536, er = 1 << 17, Ds = 1 << 18, un = 1 << 19, Us = 1 << 20, mt = 1 << 25, Kt = 65536, Bn = 1 << 21, kn = 1 << 22, Ft = 1 << 23, Ln = Symbol("$state"), zs = Symbol(""), kt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Pr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function qs() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ws(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Hs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Vs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ys() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ks() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Js() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Zs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Qs = 1, $s = 2, Dr = 4, ea = 8, ta = 16, na = 1, ra = 2, ze = Symbol(), Ur = "http://www.w3.org/1999/xhtml";
function sa() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function aa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function zr(e) {
  return e === this.v;
}
function ia(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qr(e) {
  return !ia(e, this.v);
}
let la = false, Ke = null;
function on(e) {
  Ke = e;
}
function ht(e, t = false, n) {
  Ke = { p: Ke, i: false, c: null, e: null, s: e, x: null, r: _e, l: null };
}
function bt(e) {
  var t = Ke, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n) ls(a);
  }
  return t.i = true, Ke = t.p, {};
}
function Wr() {
  return true;
}
let Wt = [];
function Hr() {
  var e = Wt;
  Wt = [], js(e);
}
function Nt(e) {
  if (Wt.length === 0 && !yn) {
    var t = Wt;
    queueMicrotask(() => {
      t === Wt && Hr();
    });
  }
  Wt.push(e);
}
function oa() {
  for (; Wt.length > 0; ) Hr();
}
function Gr(e) {
  var t = _e;
  if (t === null) return be.f |= Ft, e;
  if (!(t.f & Qt) && !(t.f & an)) throw e;
  Lt(e, t);
}
function Lt(e, t) {
  for (; t !== null; ) {
    if (t.f & Qn) {
      if (!(t.f & Qt)) throw e;
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
const ca = -7169;
function Be(e, t) {
  e.f = e.f & ca | t;
}
function or(e) {
  e.f & it || e.deps === null ? Be(e, Ue) : Be(e, wt);
}
function Vr(e) {
  if (e !== null) for (const t of e) !(t.f & Ge) || !(t.f & Kt) || (t.f ^= Kt, Vr(t.deps));
}
function Yr(e, t, n) {
  e.f & We ? t.add(e) : e.f & wt && n.add(e), Vr(e.deps), Be(e, Ue);
}
const zt = /* @__PURE__ */ new Set();
let ue = null, dt = null, tr = null, yn = false, Gn = false, rn = null, Fn = null;
var wr = 0;
let fa = 1;
class Dt {
  id = fa++;
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
  #p = false;
  #d = /* @__PURE__ */ new Set();
  #u() {
    return this.is_fork || this.#r.size > 0;
  }
  #b() {
    for (const a of this.#d) for (const r of a.#r.keys()) {
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
  unskip_effect(t, n = (a) => this.schedule(a)) {
    var a = this.#l.get(t);
    if (a) {
      this.#l.delete(t);
      for (var r of a.d) Be(r, We), n(r);
      for (r of a.m) Be(r, wt), n(r);
    }
    this.#v.add(t);
  }
  #_() {
    if (wr++ > 1e3 && (zt.delete(this), va()), !this.#u()) {
      for (const o of this.#c) this.#f.delete(o), Be(o, We), this.schedule(o);
      for (const o of this.#f) Be(o, wt), this.schedule(o);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = rn = [], a = [], r = Fn = [];
    for (const o of t) try {
      this.#m(o, n, a);
    } catch (c) {
      throw Jr(o), c;
    }
    if (ue = null, r.length > 0) {
      var i = Dt.ensure();
      for (const o of r) i.schedule(o);
    }
    if (rn = null, Fn = null, this.#u() || this.#b()) {
      this.#h(a), this.#h(n);
      for (const [o, c] of this.#l) Kr(o, c);
    } else {
      this.#s.size === 0 && zt.delete(this), this.#c.clear(), this.#f.clear();
      for (const o of this.#n) o(this);
      this.#n.clear(), xr(a), xr(n), this.#a?.resolve();
    }
    var l = ue;
    if (this.#t.length > 0) {
      const o = l ??= this;
      o.#t.push(...this.#t.filter((c) => !o.#t.includes(c)));
    }
    l !== null && (zt.add(l), l.#_());
  }
  #m(t, n, a) {
    t.f ^= Ue;
    for (var r = t.first; r !== null; ) {
      var i = r.f, l = (i & (_t | Pt)) !== 0, o = l && (i & Ue) !== 0, c = o || (i & Xe) !== 0 || this.#l.has(r);
      if (!c && r.fn !== null) {
        l ? r.f ^= Ue : i & an ? n.push(r) : Tn(r) && (i & yt && this.#f.add(r), fn(r));
        var v = r.first;
        if (v !== null) {
          r = v;
          continue;
        }
      }
      for (; r !== null; ) {
        var u = r.next;
        if (u !== null) {
          r = u;
          break;
        }
        r = r.parent;
      }
    }
  }
  #h(t) {
    for (var n = 0; n < t.length; n += 1) Yr(t[n], this.#c, this.#f);
  }
  capture(t, n, a = false) {
    t.v !== ze && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Ft || (this.current.set(t, [n, a]), dt?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    ue = this;
  }
  deactivate() {
    ue = null, dt = null;
  }
  flush() {
    try {
      Gn = true, ue = this, this.#_();
    } finally {
      wr = 0, tr = null, rn = null, Fn = null, Gn = false, ue = null, dt = null, Gt.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), zt.delete(this);
  }
  register_created_effect(t) {
    this.#i.push(t);
  }
  #g() {
    for (const u of zt) {
      var t = u.id < this.id, n = [];
      for (const [m, [h, M]] of this.current) {
        if (u.current.has(m)) {
          var a = u.current.get(m)[0];
          if (t && h !== a) u.current.set(m, [h, M]);
          else continue;
        }
        n.push(m);
      }
      var r = [...u.current.keys()].filter((m) => !this.current.has(m));
      if (r.length === 0) t && u.discard();
      else if (n.length > 0) {
        if (t) for (const m of this.#v) u.unskip_effect(m, (h) => {
          h.f & (yt | kn) ? u.schedule(h) : u.#h([h]);
        });
        u.activate();
        var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n) Xr(o, r, i, l);
        l = /* @__PURE__ */ new Map();
        var c = [...u.current.keys()].filter((m) => this.current.has(m) ? this.current.get(m)[0] !== m : true);
        for (const m of this.#i) !(m.f & (lt | Xe | er)) && cr(m, c, l) && (m.f & (kn | yt) ? (Be(m, We), u.schedule(m)) : u.#c.add(m));
        if (u.#t.length > 0) {
          u.apply();
          for (var v of u.#t) u.#m(v, [], []);
          u.#t = [];
        }
        u.deactivate();
      }
    }
    for (const u of zt) u.#d.has(this) && (u.#d.delete(this), u.#d.size === 0 && !u.#u() && (u.activate(), u.#_()));
  }
  increment(t, n) {
    let a = this.#s.get(n) ?? 0;
    if (this.#s.set(n, a + 1), t) {
      let r = this.#r.get(n) ?? 0;
      this.#r.set(n, r + 1);
    }
  }
  decrement(t, n, a) {
    let r = this.#s.get(n) ?? 0;
    if (r === 1 ? this.#s.delete(n) : this.#s.set(n, r - 1), t) {
      let i = this.#r.get(n) ?? 0;
      i === 1 ? this.#r.delete(n) : this.#r.set(n, i - 1);
    }
    this.#p || a || (this.#p = true, Nt(() => {
      this.#p = false, this.flush();
    }));
  }
  transfer_effects(t, n) {
    for (const a of t) this.#c.add(a);
    for (const a of n) this.#f.add(a);
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
    return (this.#a ??= Br()).promise;
  }
  static ensure() {
    if (ue === null) {
      const t = ue = new Dt();
      Gn || (zt.add(ue), yn || Nt(() => {
        ue === t && t.flush();
      }));
    }
    return ue;
  }
  apply() {
    {
      dt = null;
      return;
    }
  }
  schedule(t) {
    if (tr = t, t.b?.is_pending && t.f & (an | qn | jr) && !(t.f & Qt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var a = n.f;
      if (rn !== null && n === _e && (be === null || !(be.f & Ge))) return;
      if (a & (Pt | _t)) {
        if (!(a & Ue)) return;
        n.f ^= Ue;
      }
    }
    this.#t.push(n);
  }
}
function ua(e) {
  var t = yn;
  yn = true;
  try {
    for (var n; ; ) {
      if (oa(), ue === null) return n;
      ue.flush();
    }
  } finally {
    yn = t;
  }
}
function va() {
  try {
    Ys();
  } catch (e) {
    Lt(e, tr);
  }
}
let At = null;
function xr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if (!(a.f & (lt | Xe)) && Tn(a) && (At = /* @__PURE__ */ new Set(), fn(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && cs(a), At?.size > 0)) {
        Gt.clear();
        for (const r of At) {
          if (r.f & (lt | Xe)) continue;
          const i = [r];
          let l = r.parent;
          for (; l !== null; ) At.has(l) && (At.delete(l), i.push(l)), l = l.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const c = i[o];
            c.f & (lt | Xe) || fn(c);
          }
        }
        At.clear();
      }
    }
    At = null;
  }
}
function Xr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const r of e.reactions) {
    const i = r.f;
    i & Ge ? Xr(r, t, n, a) : i & (kn | yt) && !(i & We) && cr(r, t, a) && (Be(r, We), fr(r));
  }
}
function cr(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null) for (const r of e.deps) {
    if (sn.call(t, r)) return true;
    if (r.f & Ge && cr(r, t, n)) return n.set(r, true), true;
  }
  return n.set(e, false), false;
}
function fr(e) {
  ue.schedule(e);
}
function Kr(e, t) {
  if (!(e.f & _t && e.f & Ue)) {
    e.f & We ? t.d.push(e) : e.f & wt && t.m.push(e), Be(e, Ue);
    for (var n = e.first; n !== null; ) Kr(n, t), n = n.next;
  }
}
function Jr(e) {
  Be(e, Ue);
  for (var t = e.first; t !== null; ) Jr(t), t = t.next;
}
function da(e) {
  let t = 0, n = Jt(0), a;
  return () => {
    dr() && (s(n), pr(() => (t === 0 && (a = Zt(() => e(() => wn(n)))), t += 1, () => {
      Nt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, wn(n));
      });
    })));
  };
}
var pa = ln | un;
function _a(e, t, n, a) {
  new ha(e, t, n, a);
}
class ha {
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
  #p = /* @__PURE__ */ new Set();
  #d = /* @__PURE__ */ new Set();
  #u = null;
  #b = da(() => (this.#u = Jt(this.#f), () => {
    this.#u = null;
  }));
  constructor(t, n, a, r) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var l = _e;
      l.b = this, l.f |= Qn, a(i);
    }, this.parent = _e.b, this.transform_error = r ?? this.parent?.transform_error ?? ((i) => i), this.#r = Hn(() => {
      this.#g();
    }, pa);
  }
  #_() {
    try {
      this.#a = rt(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #m(t) {
    const n = this.#e.failed;
    n && (this.#i = rt(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = rt(() => t(this.#n)), Nt(() => {
      var n = this.#c = document.createDocumentFragment(), a = Mt();
      n.append(a), this.#a = this.#w(() => rt(() => this.#s(a))), this.#l === 0 && (this.#n.before(n), this.#c = null, Vt(this.#t, () => {
        this.#t = null;
      }), this.#y(ue));
    }));
  }
  #g() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#f = 0, this.#a = rt(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#c = document.createDocumentFragment();
        br(this.#a, t);
        const n = this.#e.pending;
        this.#t = rt(() => n(this.#n));
      } else this.#y(ue);
    } catch (n) {
      this.error(n);
    }
  }
  #y(t) {
    this.is_pending = false, t.transfer_effects(this.#p, this.#d);
  }
  defer_effect(t) {
    Yr(t, this.#p, this.#d);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #w(t) {
    var n = _e, a = be, r = Ke;
    xt(this.#r), ft(this.#r), on(this.#r.ctx);
    try {
      return Dt.ensure(), t();
    } catch (i) {
      return Gr(i), null;
    } finally {
      xt(n), ft(a), on(r);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#y(n), this.#t && Vt(this.#t, () => {
      this.#t = null;
    }), this.#c && (this.#n.before(this.#c), this.#c = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#f += t, !(!this.#u || this.#v) && (this.#v = true, Nt(() => {
      this.#v = false, this.#u && cn(this.#u, this.#f);
    }));
  }
  get_effect_pending() {
    return this.#b(), s(this.#u);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    ue?.is_fork ? (this.#a && ue.skip_effect(this.#a), this.#t && ue.skip_effect(this.#t), this.#i && ue.skip_effect(this.#i), ue.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (Ze(this.#a), this.#a = null), this.#t && (Ze(this.#t), this.#t = null), this.#i && (Ze(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let a = this.#e.failed;
    var r = false, i = false;
    const l = () => {
      if (r) {
        aa();
        return;
      }
      r = true, i && Zs(), this.#i !== null && Vt(this.#i, () => {
        this.#i = null;
      }), this.#w(() => {
        this.#g();
      });
    }, o = (c) => {
      try {
        i = true, n?.(c, l), i = false;
      } catch (v) {
        Lt(v, this.#r && this.#r.parent);
      }
      a && (this.#i = this.#w(() => {
        try {
          return rt(() => {
            var v = _e;
            v.b = this, v.f |= Qn, a(this.#n, () => c, () => l);
          });
        } catch (v) {
          return Lt(v, this.#r.parent), null;
        }
      }));
    };
    Nt(() => {
      var c;
      try {
        c = this.transform_error(t);
      } catch (v) {
        Lt(v, this.#r && this.#r.parent);
        return;
      }
      c !== null && typeof c == "object" && typeof c.then == "function" ? c.then(o, (v) => Lt(v, this.#r && this.#r.parent)) : o(c);
    });
  }
}
function ba(e, t, n, a) {
  const r = ur;
  var i = e.filter((h) => !h.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(r));
    return;
  }
  var l = _e, o = ma(), c = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function v(h) {
    o();
    try {
      a(h);
    } catch (M) {
      l.f & lt || Lt(M, l);
    }
    jn();
  }
  if (n.length === 0) {
    c.then(() => v(t.map(r)));
    return;
  }
  var u = Zr();
  function m() {
    Promise.all(n.map((h) => ga(h))).then((h) => v([...t.map(r), ...h])).catch((h) => Lt(h, l)).finally(() => u());
  }
  c ? c.then(() => {
    o(), m(), jn();
  }) : m();
}
function ma() {
  var e = _e, t = be, n = Ke, a = ue;
  return function(i = true) {
    xt(e), ft(t), on(n), i && !(e.f & lt) && (a?.activate(), a?.apply());
  };
}
function jn(e = true) {
  xt(null), ft(null), on(null), e && ue?.deactivate();
}
function Zr() {
  var e = _e, t = e.b, n = ue, a = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(a, e), (r = false) => {
    t.update_pending_count(-1, n), n.decrement(a, e, r);
  };
}
function ur(e) {
  var t = Ge | We;
  return _e !== null && (_e.f |= un), { ctx: Ke, deps: null, effects: null, equals: zr, f: t, fn: e, reactions: null, rv: 0, v: ze, wv: 0, parent: _e, ac: null };
}
function ga(e, t, n) {
  let a = _e;
  a === null && qs();
  var r = void 0, i = Jt(ze), l = !be, o = /* @__PURE__ */ new Map();
  return Ia(() => {
    var c = _e, v = Br();
    r = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(jn);
    } catch (M) {
      v.reject(M), jn();
    }
    var u = ue;
    if (l) {
      if (c.f & Qt) var m = Zr();
      if (a.b.is_rendered()) o.get(u)?.reject(kt), o.delete(u);
      else {
        for (const M of o.values()) M.reject(kt);
        o.clear();
      }
      o.set(u, v);
    }
    const h = (M, E = void 0) => {
      if (m) {
        var O = E === kt;
        m(O);
      }
      if (!(E === kt || c.f & lt)) {
        if (u.activate(), E) i.f |= Ft, cn(i, E);
        else {
          i.f & Ft && (i.f ^= Ft), cn(i, M);
          for (const [A, G] of o) {
            if (o.delete(A), A === u) break;
            G.reject(kt);
          }
        }
        u.deactivate();
      }
    };
    v.promise.then(h, (M) => h(null, M || "unknown"));
  }), is(() => {
    for (const c of o.values()) c.reject(kt);
  }), new Promise((c) => {
    function v(u) {
      function m() {
        u === r ? c(i) : v(r);
      }
      u.then(m, m);
    }
    v(r);
  });
}
function It(e) {
  const t = ur(e);
  return vs(t), t;
}
function ya(e) {
  const t = ur(e);
  return t.equals = qr, t;
}
function wa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Ze(t[n]);
  }
}
function vr(e) {
  var t, n = _e, a = e.parent;
  if (!Ut && a !== null && a.f & (lt | Xe)) return sa(), e.v;
  xt(a);
  try {
    e.f &= ~Kt, wa(e), t = hs(e);
  } finally {
    xt(n);
  }
  return t;
}
function Qr(e) {
  var t = vr(e);
  if (!e.equals(t) && (e.wv = ps(), (!ue?.is_fork || e.deps === null) && (ue !== null ? ue.capture(e, t, true) : e.v = t, e.deps === null))) {
    Be(e, Ue);
    return;
  }
  Ut || (dt !== null ? (dr() || ue?.is_fork) && dt.set(e, t) : or(e));
}
function xa(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(kt), t.teardown = Bs, t.ac = null, Sn(t, 0), _r(t));
}
function $r(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && fn(t);
}
let nr = /* @__PURE__ */ new Set();
const Gt = /* @__PURE__ */ new Map();
let es = false;
function Jt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: zr, rv: 0, wv: 0 };
  return n;
}
function U(e, t) {
  const n = Jt(e);
  return vs(n), n;
}
function Ea(e, t = false, n = true) {
  const a = Jt(e);
  return t || (a.equals = qr), a;
}
function d(e, t, n = false) {
  be !== null && (!pt || be.f & er) && Wr() && be.f & (Ge | yt | kn | er) && (ct === null || !sn.call(ct, e)) && Js();
  let a = n ? gt(t) : t;
  return cn(e, a, Fn);
}
function cn(e, t, n = null) {
  if (!e.equals(t)) {
    Gt.set(e, Ut ? t : e.v);
    var a = Dt.ensure();
    if (a.capture(e, t), e.f & Ge) {
      const r = e;
      e.f & We && vr(r), dt === null && or(r);
    }
    e.wv = ps(), ts(e, We, n), _e !== null && _e.f & Ue && !(_e.f & (_t | Pt)) && (nt === null ? Pa([e]) : nt.push(e)), !a.is_fork && nr.size > 0 && !es && Aa();
  }
  return t;
}
function Aa() {
  es = false;
  for (const e of nr) e.f & Ue && Be(e, wt), Tn(e) && fn(e);
  nr.clear();
}
function ka(e, t = 1) {
  var n = s(e), a = t === 1 ? n++ : n--;
  return d(e, n), a;
}
function wn(e) {
  d(e, e.v + 1);
}
function ts(e, t, n) {
  var a = e.reactions;
  if (a !== null) for (var r = a.length, i = 0; i < r; i++) {
    var l = a[i], o = l.f, c = (o & We) === 0;
    if (c && Be(l, t), o & Ge) {
      var v = l;
      dt?.delete(v), o & Kt || (o & it && (_e === null || !(_e.f & Bn)) && (l.f |= Kt), ts(v, wt, n));
    } else if (c) {
      var u = l;
      o & yt && At !== null && At.add(u), n !== null ? n.push(u) : fr(u);
    }
  }
}
function gt(e) {
  if (typeof e != "object" || e === null || Ln in e) return e;
  const t = Ir(e);
  if (t !== Ns && t !== Is) return e;
  var n = /* @__PURE__ */ new Map(), a = Nr(e), r = U(0), i = Yt, l = (o) => {
    if (Yt === i) return o();
    var c = be, v = Yt;
    ft(null), Sr(i);
    var u = o();
    return ft(c), Sr(v), u;
  };
  return a && n.set("length", U(e.length)), new Proxy(e, { defineProperty(o, c, v) {
    (!("value" in v) || v.configurable === false || v.enumerable === false || v.writable === false) && Xs();
    var u = n.get(c);
    return u === void 0 ? l(() => {
      var m = U(v.value);
      return n.set(c, m), m;
    }) : d(u, v.value, true), true;
  }, deleteProperty(o, c) {
    var v = n.get(c);
    if (v === void 0) {
      if (c in o) {
        const u = l(() => U(ze));
        n.set(c, u), wn(r);
      }
    } else d(v, ze), wn(r);
    return true;
  }, get(o, c, v) {
    if (c === Ln) return e;
    var u = n.get(c), m = c in o;
    if (u === void 0 && (!m || gn(o, c)?.writable) && (u = l(() => {
      var M = gt(m ? o[c] : ze), E = U(M);
      return E;
    }), n.set(c, u)), u !== void 0) {
      var h = s(u);
      return h === ze ? void 0 : h;
    }
    return Reflect.get(o, c, v);
  }, getOwnPropertyDescriptor(o, c) {
    var v = Reflect.getOwnPropertyDescriptor(o, c);
    if (v && "value" in v) {
      var u = n.get(c);
      u && (v.value = s(u));
    } else if (v === void 0) {
      var m = n.get(c), h = m?.v;
      if (m !== void 0 && h !== ze) return { enumerable: true, configurable: true, value: h, writable: true };
    }
    return v;
  }, has(o, c) {
    if (c === Ln) return true;
    var v = n.get(c), u = v !== void 0 && v.v !== ze || Reflect.has(o, c);
    if (v !== void 0 || _e !== null && (!u || gn(o, c)?.writable)) {
      v === void 0 && (v = l(() => {
        var h = u ? gt(o[c]) : ze, M = U(h);
        return M;
      }), n.set(c, v));
      var m = s(v);
      if (m === ze) return false;
    }
    return u;
  }, set(o, c, v, u) {
    var m = n.get(c), h = c in o;
    if (a && c === "length") for (var M = v; M < m.v; M += 1) {
      var E = n.get(M + "");
      E !== void 0 ? d(E, ze) : M in o && (E = l(() => U(ze)), n.set(M + "", E));
    }
    if (m === void 0) (!h || gn(o, c)?.writable) && (m = l(() => U(void 0)), d(m, gt(v)), n.set(c, m));
    else {
      h = m.v !== ze;
      var O = l(() => gt(v));
      d(m, O);
    }
    var A = Reflect.getOwnPropertyDescriptor(o, c);
    if (A?.set && A.set.call(u, v), !h) {
      if (a && typeof c == "string") {
        var G = n.get("length"), j = Number(c);
        Number.isInteger(j) && j >= G.v && d(G, j + 1);
      }
      wn(r);
    }
    return true;
  }, ownKeys(o) {
    s(r);
    var c = Reflect.ownKeys(o).filter((m) => {
      var h = n.get(m);
      return h === void 0 || h.v !== ze;
    });
    for (var [v, u] of n) u.v !== ze && !(v in o) && c.push(v);
    return c;
  }, setPrototypeOf() {
    Ks();
  } });
}
var Er, ns, rs, ss;
function Sa() {
  if (Er === void 0) {
    Er = window, ns = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    rs = gn(t, "firstChild").get, ss = gn(t, "nextSibling").get, yr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), yr(n) && (n.__t = void 0);
  }
}
function Mt(e = "") {
  return document.createTextNode(e);
}
function Pn(e) {
  return rs.call(e);
}
function Cn(e) {
  return ss.call(e);
}
function f(e, t) {
  return Pn(e);
}
function ot(e, t = false) {
  {
    var n = Pn(e);
    return n instanceof Comment && n.data === "" ? Cn(n) : n;
  }
}
function p(e, t = 1, n = false) {
  let a = e;
  for (; t--; ) a = Cn(a);
  return a;
}
function Ma(e) {
  e.textContent = "";
}
function as() {
  return false;
}
function Ca(e, t, n) {
  return document.createElementNS(Ur, e, void 0);
}
let Ar = false;
function Ta() {
  Ar || (Ar = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function Wn(e) {
  var t = be, n = _e;
  ft(null), xt(null);
  try {
    return e();
  } finally {
    ft(t), xt(n);
  }
}
function Oa(e, t, n, a = n) {
  e.addEventListener(t, () => Wn(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), a(true);
  } : e.__on_r = () => a(true), Ta();
}
function Ra(e) {
  _e === null && (be === null && Vs(), Gs()), Ut && Hs();
}
function La(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ct(e, t) {
  var n = _e;
  n !== null && n.f & Xe && (e |= Xe);
  var a = { ctx: Ke, deps: null, nodes: null, f: e | We | it, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  ue?.register_created_effect(a);
  var r = a;
  if (e & an) rn !== null ? rn.push(a) : Dt.ensure().schedule(a);
  else if (t !== null) {
    try {
      fn(a);
    } catch (l) {
      throw Ze(a), l;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && !(r.f & un) && (r = r.first, e & yt && e & ln && r !== null && (r.f |= ln));
  }
  if (r !== null && (r.parent = n, n !== null && La(r, n), be !== null && be.f & Ge && !(e & Pt))) {
    var i = be;
    (i.effects ??= []).push(r);
  }
  return a;
}
function dr() {
  return be !== null && !pt;
}
function is(e) {
  const t = Ct(qn, null);
  return Be(t, Ue), t.teardown = e, t;
}
function He(e) {
  Ra();
  var t = _e.f, n = !be && (t & _t) !== 0 && (t & Qt) === 0;
  if (n) {
    var a = Ke;
    (a.e ??= []).push(e);
  } else return ls(e);
}
function ls(e) {
  return Ct(an | Us, e);
}
function Fa(e) {
  Dt.ensure();
  const t = Ct(Pt | un, e);
  return (n = {}) => new Promise((a) => {
    n.outro ? Vt(t, () => {
      Ze(t), a(void 0);
    }) : (Ze(t), a(void 0));
  });
}
function Na(e) {
  return Ct(an, e);
}
function Ia(e) {
  return Ct(kn | un, e);
}
function pr(e, t = 0) {
  return Ct(qn | t, e);
}
function J(e, t = [], n = [], a = []) {
  ba(a, t, n, (r) => {
    Ct(qn, () => e(...r.map(s)));
  });
}
function Hn(e, t = 0) {
  var n = Ct(yt | t, e);
  return n;
}
function rt(e) {
  return Ct(_t | un, e);
}
function os(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ut, a = be;
    kr(true), ft(null);
    try {
      t.call(null);
    } finally {
      kr(n), ft(a);
    }
  }
}
function _r(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Wn(() => {
      r.abort(kt);
    });
    var a = n.next;
    n.f & Pt ? n.parent = null : Ze(n, t), n = a;
  }
}
function Ba(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & _t || Ze(t), t = n;
  }
}
function Ze(e, t = true) {
  var n = false;
  (t || e.f & Ds) && e.nodes !== null && e.nodes.end !== null && (ja(e.nodes.start, e.nodes.end), n = true), Be(e, $n), _r(e, t && !n), Sn(e, 0);
  var a = e.nodes && e.nodes.t;
  if (a !== null) for (const i of a) i.stop();
  os(e), e.f ^= $n, e.f |= lt;
  var r = e.parent;
  r !== null && r.first !== null && cs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ja(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : Cn(e);
    e.remove(), e = n;
  }
}
function cs(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
function Vt(e, t, n = true) {
  var a = [];
  fs(e, a, true);
  var r = () => {
    n && Ze(e), t && t();
  }, i = a.length;
  if (i > 0) {
    var l = () => --i || r();
    for (var o of a) o.out(l);
  } else r();
}
function fs(e, t, n) {
  if (!(e.f & Xe)) {
    e.f ^= Xe;
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (const o of a) (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var i = r.next;
      if (!(r.f & Pt)) {
        var l = (r.f & ln) !== 0 || (r.f & _t) !== 0 && (e.f & yt) !== 0;
        fs(r, t, l ? n : false);
      }
      r = i;
    }
  }
}
function hr(e) {
  us(e, true);
}
function us(e, t) {
  if (e.f & Xe) {
    e.f ^= Xe, e.f & Ue || (Be(e, We), Dt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, r = (n.f & ln) !== 0 || (n.f & _t) !== 0;
      us(n, r ? t : false), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const l of i) (l.is_global || t) && l.in();
  }
}
function br(e, t) {
  if (e.nodes) for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
    var r = n === a ? null : Cn(n);
    t.append(n), n = r;
  }
}
let Nn = false, Ut = false;
function kr(e) {
  Ut = e;
}
let be = null, pt = false;
function ft(e) {
  be = e;
}
let _e = null;
function xt(e) {
  _e = e;
}
let ct = null;
function vs(e) {
  be !== null && (ct === null ? ct = [e] : ct.push(e));
}
let Je = null, Qe = 0, nt = null;
function Pa(e) {
  nt = e;
}
let ds = 1, Ht = 0, Yt = Ht;
function Sr(e) {
  Yt = e;
}
function ps() {
  return ++ds;
}
function Tn(e) {
  var t = e.f;
  if (t & We) return true;
  if (t & Ge && (e.f &= ~Kt), t & wt) {
    for (var n = e.deps, a = n.length, r = 0; r < a; r++) {
      var i = n[r];
      if (Tn(i) && Qr(i), i.wv > e.wv) return true;
    }
    t & it && dt === null && Be(e, Ue);
  }
  return false;
}
function _s(e, t, n = true) {
  var a = e.reactions;
  if (a !== null && !(ct !== null && sn.call(ct, e))) for (var r = 0; r < a.length; r++) {
    var i = a[r];
    i.f & Ge ? _s(i, t, false) : t === i && (n ? Be(i, We) : i.f & Ue && Be(i, wt), fr(i));
  }
}
function hs(e) {
  var t = Je, n = Qe, a = nt, r = be, i = ct, l = Ke, o = pt, c = Yt, v = e.f;
  Je = null, Qe = 0, nt = null, be = v & (_t | Pt) ? null : e, ct = null, on(e.ctx), pt = false, Yt = ++Ht, e.ac !== null && (Wn(() => {
    e.ac.abort(kt);
  }), e.ac = null);
  try {
    e.f |= Bn;
    var u = e.fn, m = u();
    e.f |= Qt;
    var h = e.deps, M = ue?.is_fork;
    if (Je !== null) {
      var E;
      if (M || Sn(e, Qe), h !== null && Qe > 0) for (h.length = Qe + Je.length, E = 0; E < Je.length; E++) h[Qe + E] = Je[E];
      else e.deps = h = Je;
      if (dr() && e.f & it) for (E = Qe; E < h.length; E++) (h[E].reactions ??= []).push(e);
    } else !M && h !== null && Qe < h.length && (Sn(e, Qe), h.length = Qe);
    if (Wr() && nt !== null && !pt && h !== null && !(e.f & (Ge | wt | We))) for (E = 0; E < nt.length; E++) _s(nt[E], e);
    if (r !== null && r !== e) {
      if (Ht++, r.deps !== null) for (let O = 0; O < n; O += 1) r.deps[O].rv = Ht;
      if (t !== null) for (const O of t) O.rv = Ht;
      nt !== null && (a === null ? a = nt : a.push(...nt));
    }
    return e.f & Ft && (e.f ^= Ft), m;
  } catch (O) {
    return Gr(O);
  } finally {
    e.f ^= Bn, Je = t, Qe = n, nt = a, be = r, ct = i, on(l), pt = o, Yt = c;
  }
}
function Da(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Rs.call(n, e);
    if (a !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[a] = n[r], n.pop());
    }
  }
  if (n === null && t.f & Ge && (Je === null || !sn.call(Je, t))) {
    var i = t;
    i.f & it && (i.f ^= it, i.f &= ~Kt), i.v !== ze && or(i), xa(i), Sn(i, 0);
  }
}
function Sn(e, t) {
  var n = e.deps;
  if (n !== null) for (var a = t; a < n.length; a++) Da(e, n[a]);
}
function fn(e) {
  var t = e.f;
  if (!(t & lt)) {
    Be(e, Ue);
    var n = _e, a = Nn;
    _e = e, Nn = true;
    try {
      t & (yt | jr) ? Ba(e) : _r(e), os(e);
      var r = hs(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = ds;
      var i;
      Os && la && e.f & We && e.deps;
    } finally {
      Nn = a, _e = n;
    }
  }
}
async function Ua() {
  await Promise.resolve(), ua();
}
function s(e) {
  var t = e.f, n = (t & Ge) !== 0;
  if (be !== null && !pt) {
    var a = _e !== null && (_e.f & lt) !== 0;
    if (!a && (ct === null || !sn.call(ct, e))) {
      var r = be.deps;
      if (be.f & Bn) e.rv < Ht && (e.rv = Ht, Je === null && r !== null && r[Qe] === e ? Qe++ : Je === null ? Je = [e] : Je.push(e));
      else {
        (be.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [be] : sn.call(i, be) || i.push(be);
      }
    }
  }
  if (Ut && Gt.has(e)) return Gt.get(e);
  if (n) {
    var l = e;
    if (Ut) {
      var o = l.v;
      return (!(l.f & Ue) && l.reactions !== null || ms(l)) && (o = vr(l)), Gt.set(l, o), o;
    }
    var c = (l.f & it) === 0 && !pt && be !== null && (Nn || (be.f & it) !== 0), v = (l.f & Qt) === 0;
    Tn(l) && (c && (l.f |= it), Qr(l)), c && !v && ($r(l), bs(l));
  }
  if (dt?.has(e)) return dt.get(e);
  if (e.f & Ft) throw e.v;
  return e.v;
}
function bs(e) {
  if (e.f |= it, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & Ge && !(t.f & it) && ($r(t), bs(t));
}
function ms(e) {
  if (e.v === ze) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (Gt.has(t) || t.f & Ge && ms(t)) return true;
  return false;
}
function Zt(e) {
  var t = pt;
  try {
    return pt = true, e();
  } finally {
    pt = t;
  }
}
const za = ["touchstart", "touchmove"];
function qa(e) {
  return za.includes(e);
}
const pn = Symbol("events"), gs = /* @__PURE__ */ new Set(), rr = /* @__PURE__ */ new Set();
function Wa(e, t, n, a = {}) {
  function r(i) {
    if (a.capture || sr.call(t, i), !i.cancelBubble) return Wn(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Nt(() => {
    t.addEventListener(e, r, a);
  }) : t.addEventListener(e, r, a), r;
}
function Bt(e, t, n, a, r) {
  var i = { capture: a, passive: r }, l = Wa(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && is(() => {
    t.removeEventListener(e, l, i);
  });
}
function ge(e, t, n) {
  (t[pn] ??= {})[e] = n;
}
function $t(e) {
  for (var t = 0; t < e.length; t++) gs.add(e[t]);
  for (var n of rr) n(e);
}
let Mr = null;
function sr(e) {
  var t = this, n = t.ownerDocument, a = e.type, r = e.composedPath?.() || [], i = r[0] || e.target;
  Mr = e;
  var l = 0, o = Mr === e && e[pn];
  if (o) {
    var c = r.indexOf(o);
    if (c !== -1 && (t === document || t === window)) {
      e[pn] = t;
      return;
    }
    var v = r.indexOf(t);
    if (v === -1) return;
    c <= v && (l = c);
  }
  if (i = r[l] || e.target, i !== t) {
    Ls(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var u = be, m = _e;
    ft(null), xt(null);
    try {
      for (var h, M = []; i !== null; ) {
        var E = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var O = i[pn]?.[a];
          O != null && (!i.disabled || e.target === i) && O.call(i, e);
        } catch (A) {
          h ? M.push(A) : h = A;
        }
        if (e.cancelBubble || E === t || E === null) break;
        i = E;
      }
      if (h) {
        for (let A of M) queueMicrotask(() => {
          throw A;
        });
        throw h;
      }
    } finally {
      e[pn] = t, delete e.currentTarget, ft(u), xt(m);
    }
  }
}
const Ha = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Ga(e) {
  return Ha?.createHTML(e) ?? e;
}
function Va(e) {
  var t = Ca("template");
  return t.innerHTML = Ga(e.replaceAll("<!>", "<!---->")), t.content;
}
function Dn(e, t) {
  var n = _e;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function P(e, t) {
  var n = (t & na) !== 0, a = (t & ra) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Va(i ? e : "<!>" + e), n || (r = Pn(r)));
    var l = a || ns ? document.importNode(r, true) : r.cloneNode(true);
    if (n) {
      var o = Pn(l), c = l.lastChild;
      Dn(o, c);
    } else Dn(l, l);
    return l;
  };
}
function tn(e = "") {
  {
    var t = Mt(e + "");
    return Dn(t, t), t;
  }
}
function Un() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Mt();
  return e.append(t, n), Dn(t, n), e;
}
function R(e, t) {
  e !== null && e.before(t);
}
function y(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ya(e, t) {
  return Xa(e, t);
}
const Rn = /* @__PURE__ */ new Map();
function Xa(e, { target: t, anchor: n, props: a = {}, events: r, context: i, intro: l = true, transformError: o }) {
  Sa();
  var c = void 0, v = Fa(() => {
    var u = n ?? t.appendChild(Mt());
    _a(u, { pending: () => {
    } }, (M) => {
      ht({});
      var E = Ke;
      i && (E.c = i), r && (a.$$events = r), c = e(M, a) || {}, bt();
    }, o);
    var m = /* @__PURE__ */ new Set(), h = (M) => {
      for (var E = 0; E < M.length; E++) {
        var O = M[E];
        if (!m.has(O)) {
          m.add(O);
          var A = qa(O);
          for (const w of [t, document]) {
            var G = Rn.get(w);
            G === void 0 && (G = /* @__PURE__ */ new Map(), Rn.set(w, G));
            var j = G.get(O);
            j === void 0 ? (w.addEventListener(O, sr, { passive: A }), G.set(O, 1)) : G.set(O, j + 1);
          }
        }
      }
    };
    return h(zn(gs)), rr.add(h), () => {
      for (var M of m) for (const A of [t, document]) {
        var E = Rn.get(A), O = E.get(M);
        --O == 0 ? (A.removeEventListener(M, sr), E.delete(M), E.size === 0 && Rn.delete(A)) : E.set(M, O);
      }
      rr.delete(h), u !== n && u.parentNode?.removeChild(u);
    };
  });
  return Ka.set(c, v), c;
}
let Ka = /* @__PURE__ */ new WeakMap();
class ys {
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
      var n = this.#n.get(t), a = this.#o.get(n);
      if (a) hr(a), this.#s.delete(n);
      else {
        var r = this.#e.get(n);
        r && (this.#o.set(n, r.effect), this.#e.delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), a = r.effect);
      }
      for (const [i, l] of this.#n) {
        if (this.#n.delete(i), i === t) break;
        const o = this.#e.get(l);
        o && (Ze(o.effect), this.#e.delete(l));
      }
      for (const [i, l] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const o = () => {
          if (Array.from(this.#n.values()).includes(i)) {
            var v = document.createDocumentFragment();
            br(l, v), v.append(Mt()), this.#e.set(i, { effect: l, fragment: v });
          } else Ze(l);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !a ? (this.#s.add(i), Vt(l, o, false)) : o();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [a, r] of this.#e) n.includes(a) || (Ze(r.effect), this.#e.delete(a));
  };
  ensure(t, n) {
    var a = ue, r = as();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (r) {
      var i = document.createDocumentFragment(), l = Mt();
      i.append(l), this.#e.set(t, { effect: rt(() => n(l)), fragment: i });
    } else this.#o.set(t, rt(() => n(this.anchor)));
    if (this.#n.set(a, t), r) {
      for (const [o, c] of this.#o) o === t ? a.unskip_effect(c) : a.skip_effect(c);
      for (const [o, c] of this.#e) o === t ? a.unskip_effect(c.effect) : a.skip_effect(c.effect);
      a.oncommit(this.#a), a.ondiscard(this.#t);
    } else this.#a(a);
  }
}
function fe(e, t, n = false) {
  var a = new ys(e), r = n ? ln : 0;
  function i(l, o) {
    a.ensure(l, o);
  }
  Hn(() => {
    var l = false;
    t((o, c = 0) => {
      l = true, i(c, o);
    }), l || i(-1, null);
  }, r);
}
const Ja = Symbol("NaN");
function Za(e, t, n) {
  var a = new ys(e);
  Hn(() => {
    var r = t();
    r !== r && (r = Ja), a.ensure(r, n);
  });
}
function st(e, t) {
  return t;
}
function Qa(e, t, n) {
  for (var a = [], r = t.length, i, l = t.length, o = 0; o < r; o++) {
    let m = t[o];
    Vt(m, () => {
      if (i) {
        if (i.pending.delete(m), i.done.add(m), i.pending.size === 0) {
          var h = e.outrogroups;
          ar(e, zn(i.done)), h.delete(i), h.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var c = a.length === 0 && n !== null;
    if (c) {
      var v = n, u = v.parentNode;
      Ma(u), u.append(v), e.items.clear();
    }
    ar(e, t, !c);
  } else i = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function ar(e, t, n = true) {
  var a;
  if (e.pending.size > 0) {
    a = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const o of l) a.add(e.items.get(o).e);
  }
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (a?.has(i)) {
      i.f |= mt;
      const l = document.createDocumentFragment();
      br(i, l);
    } else Ze(t[r], n);
  }
}
var Cr;
function at(e, t, n, a, r, i = null) {
  var l = e, o = /* @__PURE__ */ new Map(), c = (t & Dr) !== 0;
  if (c) {
    var v = e;
    l = v.appendChild(Mt());
  }
  var u = null, m = ya(() => {
    var w = n();
    return Nr(w) ? w : w == null ? [] : zn(w);
  }), h, M = /* @__PURE__ */ new Map(), E = true;
  function O(w) {
    j.effect.f & lt || (j.pending.delete(w), j.fallback = u, $a(j, h, l, t, a), u !== null && (h.length === 0 ? u.f & mt ? (u.f ^= mt, _n(u, null, l)) : hr(u) : Vt(u, () => {
      u = null;
    })));
  }
  function A(w) {
    j.pending.delete(w);
  }
  var G = Hn(() => {
    h = s(m);
    for (var w = h.length, N = /* @__PURE__ */ new Set(), B = ue, k = as(), W = 0; W < w; W += 1) {
      var Q = h[W], se = a(Q, W), T = E ? null : o.get(se);
      T ? (T.v && cn(T.v, Q), T.i && cn(T.i, W), k && B.unskip_effect(T.e)) : (T = ei(o, E ? l : Cr ??= Mt(), Q, se, W, r, t, n), E || (T.e.f |= mt), o.set(se, T)), N.add(se);
    }
    if (w === 0 && i && !u && (E ? u = rt(() => i(l)) : (u = rt(() => i(Cr ??= Mt())), u.f |= mt)), w > N.size && Ws(), !E) if (M.set(B, N), k) {
      for (const [V, X] of o) N.has(V) || B.skip_effect(X.e);
      B.oncommit(O), B.ondiscard(A);
    } else O(B);
    s(m);
  }), j = { effect: G, items: o, pending: M, outrogroups: null, fallback: u };
  E = false;
}
function dn(e) {
  for (; e !== null && !(e.f & _t); ) e = e.next;
  return e;
}
function $a(e, t, n, a, r) {
  var i = (a & ea) !== 0, l = t.length, o = e.items, c = dn(e.effect.first), v, u = null, m, h = [], M = [], E, O, A, G;
  if (i) for (G = 0; G < l; G += 1) E = t[G], O = r(E, G), A = o.get(O).e, A.f & mt || (A.nodes?.a?.measure(), (m ??= /* @__PURE__ */ new Set()).add(A));
  for (G = 0; G < l; G += 1) {
    if (E = t[G], O = r(E, G), A = o.get(O).e, e.outrogroups !== null) for (const T of e.outrogroups) T.pending.delete(A), T.done.delete(A);
    if (A.f & Xe && (hr(A), i && (A.nodes?.a?.unfix(), (m ??= /* @__PURE__ */ new Set()).delete(A))), A.f & mt) if (A.f ^= mt, A === c) _n(A, null, n);
    else {
      var j = u ? u.next : c;
      A === e.effect.last && (e.effect.last = A.prev), A.prev && (A.prev.next = A.next), A.next && (A.next.prev = A.prev), Ot(e, u, A), Ot(e, A, j), _n(A, j, n), u = A, h = [], M = [], c = dn(u.next);
      continue;
    }
    if (A !== c) {
      if (v !== void 0 && v.has(A)) {
        if (h.length < M.length) {
          var w = M[0], N;
          u = w.prev;
          var B = h[0], k = h[h.length - 1];
          for (N = 0; N < h.length; N += 1) _n(h[N], w, n);
          for (N = 0; N < M.length; N += 1) v.delete(M[N]);
          Ot(e, B.prev, k.next), Ot(e, u, B), Ot(e, k, w), c = w, u = k, G -= 1, h = [], M = [];
        } else v.delete(A), _n(A, c, n), Ot(e, A.prev, A.next), Ot(e, A, u === null ? e.effect.first : u.next), Ot(e, u, A), u = A;
        continue;
      }
      for (h = [], M = []; c !== null && c !== A; ) (v ??= /* @__PURE__ */ new Set()).add(c), M.push(c), c = dn(c.next);
      if (c === null) continue;
    }
    A.f & mt || h.push(A), u = A, c = dn(A.next);
  }
  if (e.outrogroups !== null) {
    for (const T of e.outrogroups) T.pending.size === 0 && (ar(e, zn(T.done)), e.outrogroups?.delete(T));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || v !== void 0) {
    var W = [];
    if (v !== void 0) for (A of v) A.f & Xe || W.push(A);
    for (; c !== null; ) !(c.f & Xe) && c !== e.fallback && W.push(c), c = dn(c.next);
    var Q = W.length;
    if (Q > 0) {
      var se = a & Dr && l === 0 ? n : null;
      if (i) {
        for (G = 0; G < Q; G += 1) W[G].nodes?.a?.measure();
        for (G = 0; G < Q; G += 1) W[G].nodes?.a?.fix();
      }
      Qa(e, W, se);
    }
  }
  i && Nt(() => {
    if (m !== void 0) for (A of m) A.nodes?.a?.apply();
  });
}
function ei(e, t, n, a, r, i, l, o) {
  var c = l & Qs ? l & ta ? Jt(n) : Ea(n, false, false) : null, v = l & $s ? Jt(r) : null;
  return { v: c, i: v, e: rt(() => (i(t, c ?? n, v ?? r, o), () => {
    e.delete(a);
  })) };
}
function _n(e, t, n) {
  if (e.nodes) for (var a = e.nodes.start, r = e.nodes.end, i = t && !(t.f & mt) ? t.nodes.start : n; a !== null; ) {
    var l = Cn(a);
    if (i.before(a), a === r) return;
    a = l;
  }
}
function Ot(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const Tr = [...` 	
\r\f\xA0\v\uFEFF`];
function ti(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (n) {
    for (var r of Object.keys(n)) if (n[r]) a = a ? a + " " + r : r;
    else if (a.length) for (var i = r.length, l = 0; (l = a.indexOf(r, l)) >= 0; ) {
      var o = l + i;
      (l === 0 || Tr.includes(a[l - 1])) && (o === a.length || Tr.includes(a[o])) ? a = (l === 0 ? "" : a.substring(0, l)) + a.substring(o + 1) : l = o;
    }
  }
  return a === "" ? null : a;
}
function ni(e, t) {
  return e == null ? null : String(e);
}
function $e(e, t, n, a, r, i) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var o = ti(n, a, i);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (i && r !== i) for (var c in i) {
    var v = !!i[c];
    (r == null || v !== !!r[c]) && e.classList.toggle(c, v);
  }
  return i;
}
function Mn(e, t, n, a) {
  var r = e.__style;
  if (r !== t) {
    var i = ni(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return a;
}
const ri = Symbol("is custom element"), si = Symbol("is html");
function et(e, t, n, a) {
  var r = ai(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[zs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ii(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function ai(e) {
  return e.__attributes ??= { [ri]: e.nodeName.includes("-"), [si]: e.namespaceURI === Ur };
}
var Or = /* @__PURE__ */ new Map();
function ii(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Or.get(t);
  if (n) return n;
  Or.set(t, n = []);
  for (var a, r = e, i = Element.prototype; i !== r; ) {
    a = Fs(r);
    for (var l in a) a[l].set && n.push(l);
    r = Ir(r);
  }
  return n;
}
function ws(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Oa(e, "input", async (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = Vn(e) ? Yn(i) : i, n(i), ue !== null && a.add(ue), await Ua(), i !== (i = t())) {
      var l = e.selectionStart, o = e.selectionEnd, c = e.value.length;
      if (e.value = i ?? "", o !== null) {
        var v = e.value.length;
        l === o && o === c && v > c ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = l, e.selectionEnd = Math.min(o, v));
      }
    }
  }), Zt(t) == null && e.value && (n(Vn(e) ? Yn(e.value) : e.value), ue !== null && a.add(ue)), pr(() => {
    var r = t();
    if (e === document.activeElement) {
      var i = ue;
      if (a.has(i)) return;
    }
    Vn(e) && r === Yn(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function Vn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Yn(e) {
  return e === "" ? null : +e;
}
function Rr(e, t) {
  return e === t || e?.[Ln] === t;
}
function jt(e = {}, t, n, a) {
  var r = Ke.r, i = _e;
  return Na(() => {
    var l, o;
    return pr(() => {
      l = o, o = [], Zt(() => {
        e !== n(...o) && (t(e, ...o), l && Rr(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let c = i;
      for (; c !== r && c.parent !== null && c.parent.f & $n; ) c = c.parent;
      const v = () => {
        o && Rr(n(...o), e) && t(null, ...o);
      }, u = c.teardown;
      c.teardown = () => {
        v(), u?.();
      };
    };
  }), e;
}
function Xt(e, t, n, a) {
  var r = a, i = true, l = () => (i && (i = false, r = a), r), o;
  o = e[t], o === void 0 && a !== void 0 && (o = l());
  var c;
  return c = () => {
    var v = e[t];
    return v === void 0 ? l() : (i = true, v);
  }, c;
}
function mr(e) {
  Ke === null && Pr(), He(() => {
    const t = Zt(e);
    if (typeof t == "function") return t;
  });
}
function gr(e) {
  Ke === null && Pr(), mr(() => () => Zt(e));
}
const li = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(li);
function oi() {
  Z._start();
}
function ci(e) {
  try {
    const r = Z.__wbindgen_add_to_stack_pointer(-16), i = en(e, Z.__wbindgen_export), l = ut;
    Z.decode_wav(r, i, l);
    var t = Re().getInt32(r + 4 * 0, true), n = Re().getInt32(r + 4 * 1, true), a = Re().getInt32(r + 4 * 2, true);
    if (a) throw tt(n);
    return tt(t);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e) {
  let t, n;
  try {
    const i = Z.__wbindgen_add_to_stack_pointer(-16), l = en(e, Z.__wbindgen_export), o = ut;
    Z.detect_format(i, l, o);
    var a = Re().getInt32(i + 4 * 0, true), r = Re().getInt32(i + 4 * 1, true);
    return t = a, n = r, bn(a, r);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16), Z.__wbindgen_export3(t, n, 1);
  }
}
function ui(e, t) {
  try {
    const i = Z.__wbindgen_add_to_stack_pointer(-16), l = en(e, Z.__wbindgen_export), o = ut;
    Z.entropy_blocks(i, l, o, t);
    var n = Re().getInt32(i + 4 * 0, true), a = Re().getInt32(i + 4 * 1, true), r = bi(n, a).slice();
    return Z.__wbindgen_export3(n, a * 4, 4), r;
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function vi(e, t) {
  try {
    const i = Z.__wbindgen_add_to_stack_pointer(-16), l = en(e, Z.__wbindgen_export), o = ut;
    Z.extract_strings(i, l, o, t);
    var n = Re().getInt32(i + 4 * 0, true), a = Re().getInt32(i + 4 * 1, true), r = Re().getInt32(i + 4 * 2, true);
    if (r) throw tt(a);
    return tt(n);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function di(e, t, n) {
  try {
    const l = Z.__wbindgen_add_to_stack_pointer(-16), o = en(e, Z.__wbindgen_export), c = ut;
    Z.hex_rows(l, o, c, t, n);
    var a = Re().getInt32(l + 4 * 0, true), r = Re().getInt32(l + 4 * 1, true), i = mi(a, r).slice();
    return Z.__wbindgen_export3(a, r * 4, 4), i;
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function pi(e) {
  try {
    const r = Z.__wbindgen_add_to_stack_pointer(-16), i = en(e, Z.__wbindgen_export), l = ut;
    Z.parse_elf(r, i, l);
    var t = Re().getInt32(r + 4 * 0, true), n = Re().getInt32(r + 4 * 1, true), a = Re().getInt32(r + 4 * 2, true);
    if (a) throw tt(n);
    return tt(t);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function _i(e) {
  try {
    const r = Z.__wbindgen_add_to_stack_pointer(-16), i = en(e, Z.__wbindgen_export), l = ut;
    Z.parse_gba(r, i, l);
    var t = Re().getInt32(r + 4 * 0, true), n = Re().getInt32(r + 4 * 1, true), a = Re().getInt32(r + 4 * 2, true);
    if (a) throw tt(n);
    return tt(t);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function xs() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const a = Error(bn(t, n));
    return Rt(a);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const a = String(nn(n)), r = Lr(a, Z.__wbindgen_export, Z.__wbindgen_export2), i = ut;
    Re().setInt32(t + 4, i, true), Re().setInt32(t + 0, r, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(bn(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let a, r;
    try {
      a = t, r = n, console.error(bn(t, n));
    } finally {
      Z.__wbindgen_export3(a, r, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return Rt(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return Rt(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return Rt(t);
  }, __wbg_set_6be42768c690e380: function(t, n, a) {
    nn(t)[tt(n)] = tt(a);
  }, __wbg_set_78ea6a19f4818587: function(t, n, a) {
    nn(t)[n >>> 0] = tt(a);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const a = nn(n).stack, r = Lr(a, Z.__wbindgen_export, Z.__wbindgen_export2), i = ut;
    Re().setInt32(t + 4, i, true), Re().setInt32(t + 0, r, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return Rt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const a = bn(t, n);
    return Rt(a);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return Rt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = nn(t);
    return Rt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    tt(t);
  } } };
}
function Rt(e) {
  En === St.length && St.push(St.length + 1);
  const t = En;
  return En = St[t], St[t] = e, t;
}
function hi(e) {
  e < 1028 || (St[e] = En, En = e);
}
function bi(e, t) {
  return e = e >>> 0, gi().subarray(e / 4, e / 4 + t);
}
function mi(e, t) {
  e = e >>> 0;
  const n = Re(), a = [];
  for (let r = e; r < e + 4 * t; r += 4) a.push(tt(n.getUint32(r, true)));
  return a;
}
let qt = null;
function Re() {
  return (qt === null || qt.buffer.detached === true || qt.buffer.detached === void 0 && qt.buffer !== Z.memory.buffer) && (qt = new DataView(Z.memory.buffer)), qt;
}
let hn = null;
function gi() {
  return (hn === null || hn.byteLength === 0) && (hn = new Float32Array(Z.memory.buffer)), hn;
}
function bn(e, t) {
  return wi(e >>> 0, t);
}
let mn = null;
function xn() {
  return (mn === null || mn.byteLength === 0) && (mn = new Uint8Array(Z.memory.buffer)), mn;
}
function nn(e) {
  return St[e];
}
let St = new Array(1024).fill(void 0);
St.push(void 0, null, true, false);
let En = St.length;
function en(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return xn().set(e, n / 1), ut = e.length, n;
}
function Lr(e, t, n) {
  if (n === void 0) {
    const o = An.encode(e), c = t(o.length, 1) >>> 0;
    return xn().subarray(c, c + o.length).set(o), ut = o.length, c;
  }
  let a = e.length, r = t(a, 1) >>> 0;
  const i = xn();
  let l = 0;
  for (; l < a; l++) {
    const o = e.charCodeAt(l);
    if (o > 127) break;
    i[r + l] = o;
  }
  if (l !== a) {
    l !== 0 && (e = e.slice(l)), r = n(r, a, a = l + e.length * 3, 1) >>> 0;
    const o = xn().subarray(r + l, r + a), c = An.encodeInto(e, o);
    l += c.written, r = n(r, a, l, 1) >>> 0;
  }
  return ut = l, r;
}
function tt(e) {
  const t = nn(e);
  return hi(e), t;
}
let In = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
In.decode();
const yi = 2146435072;
let Xn = 0;
function wi(e, t) {
  return Xn += t, Xn >= yi && (In = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), In.decode(), Xn = t), In.decode(xn().subarray(e, e + t));
}
const An = new TextEncoder();
"encodeInto" in An || (An.encodeInto = function(e, t) {
  const n = An.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let ut = 0, Z;
function Es(e, t) {
  return Z = e.exports, qt = null, hn = null, mn = null, Z.__wbindgen_start(), Z;
}
async function xi(e, t) {
  if (typeof Response == "function" && e instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(e, t);
    } catch (r) {
      if (e.ok && n(e.type) && e.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
      else throw r;
    }
    const a = await e.arrayBuffer();
    return await WebAssembly.instantiate(a, t);
  } else {
    const a = await WebAssembly.instantiate(e, t);
    return a instanceof WebAssembly.Instance ? { instance: a, module: e } : a;
  }
  function n(a) {
    switch (a) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
function Ei(e) {
  if (Z !== void 0) return Z;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = xs();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return Es(n);
}
async function As(e) {
  if (Z !== void 0) return Z;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = xs();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: a } = await xi(await e, t);
  return Es(n);
}
const Ai = Object.freeze(Object.defineProperty({ __proto__: null, _start: oi, decode_wav: ci, default: As, detect_format: fi, entropy_blocks: ui, extract_strings: vi, hex_rows: di, initSync: Ei, parse_elf: pi, parse_gba: _i }, Symbol.toStringTag, { value: "Module" }));
let Kn = null;
function On() {
  return Kn || (Kn = As()), Kn.then(() => Ai);
}
const ki = "scry-theme";
function ks() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Si() {
  const e = ks() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(ki, e);
  } catch {
  }
  return e;
}
const ir = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Jn = 65536, Zn = ir.length * 4;
function Mi() {
  const n = 84 + Zn, a = new ArrayBuffer(n), r = new DataView(a), i = new Uint8Array(a);
  i[0] = 127, i[1] = 69, i[2] = 76, i[3] = 70, i[4] = 1, i[5] = 1, i[6] = 1, r.setUint16(16, 2, true), r.setUint16(18, 243, true), r.setUint32(20, 1, true), r.setUint32(24, Jn, true), r.setUint32(28, 52, true), r.setUint32(32, 0, true), r.setUint32(36, 0, true), r.setUint16(40, 52, true), r.setUint16(42, 32, true), r.setUint16(44, 1, true), r.setUint16(46, 0, true), r.setUint16(48, 0, true), r.setUint16(50, 0, true), r.setUint32(52, 1, true), r.setUint32(56, 84, true), r.setUint32(60, Jn, true), r.setUint32(64, Jn, true), r.setUint32(68, Zn, true), r.setUint32(72, Zn, true), r.setUint32(76, 5, true), r.setUint32(80, 4096, true);
  for (let l = 0; l < ir.length; l++) r.setUint32(84 + l * 4, ir[l], true);
  return new Uint8Array(a);
}
const Ci = "demo-rv32-spi-i2c.elf", Fr = 64 * 1024 * 1024;
function lr(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function Ss(e) {
  if (!e) throw new Error("no file");
  if (e.size > Fr) throw new Error(`file too large (${lr(e.size)} > ${lr(Fr)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var Ti = P('<span class="bar svelte-1i6c60u"></span>'), Oi = P('<span class="bar shimmer svelte-1i6c60u"></span>'), Ri = P('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Li = P('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Fi = P('<p class="loading svelte-1i6c60u"> </p>'), Ni = P('<p class="err svelte-1i6c60u"> </p>'), Ii = P('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Bi(e, t) {
  ht(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let a = U(false), r = U(""), i = U(gt([])), l = U(""), o = U(gt({}));
  async function c(T) {
    d(r, "");
    try {
      const V = await Ss(T);
      t.onfile?.(V);
    } catch (V) {
      d(r, V.message || String(V), true);
    }
  }
  function v(T) {
    T.preventDefault(), T.stopPropagation(), d(a, false);
    const V = T.dataTransfer?.files?.[0];
    V && c(V);
  }
  function u(T) {
    T.preventDefault(), d(a, true);
  }
  function m() {
    d(a, false);
  }
  function h(T) {
    const V = T.target.files?.[0];
    V && c(V);
  }
  async function M(T) {
    if (!n.test(T)) {
      d(r, `sample blocked: bad name "${T}"`);
      return;
    }
    d(r, ""), d(l, `fetching ${T}\u2026`);
    try {
      const V = await fetch(`../v1/samples/${encodeURIComponent(T)}`);
      if (!V.ok) {
        d(r, `fetch failed: ${V.status}`), d(l, "");
        return;
      }
      d(l, `reading ${T}\u2026`);
      const X = new Uint8Array(await V.arrayBuffer());
      d(l, ""), t.onfile?.({ name: T, bytes: X });
    } catch (V) {
      d(r, String(V), true), d(l, "");
    }
  }
  He(() => {
    let T = false;
    return (async () => {
      try {
        const V = await fetch("../v1/samples/manifest.json");
        if (!V.ok) return;
        const X = await V.json();
        if (T || !Array.isArray(X)) return;
        d(i, X, true);
        const me = await On();
        if (T) return;
        await Promise.all(X.map(async (ce) => {
          if (n.test(ce.file)) {
            if (ce.file.endsWith(".gba")) {
              d(o, { ...s(o), [ce.file]: Array(12).fill(0.22) }, true);
              return;
            }
            try {
              const ee = await fetch(`../v1/samples/${encodeURIComponent(ce.file)}`);
              if (!ee.ok) return;
              const S = new Uint8Array(await ee.arrayBuffer());
              if (T) return;
              const D = Math.max(1, Math.ceil(S.length / 12)), H = me.entropy_blocks(S, D);
              d(o, { ...s(o), [ce.file]: Array.from(H) }, true);
            } catch {
            }
          }
        }));
      } catch {
      }
    })(), () => {
      T = true;
    };
  });
  var E = Ii(), O = f(E);
  let A;
  var G = p(f(O), 4), j = f(G), w = f(j), N = p(G, 2);
  {
    var B = (T) => {
      var V = Li(), X = p(f(V), 2);
      at(X, 21, () => s(i), st, (ee, S) => {
        var D = Ri(), H = f(D), ie = f(H), ve = p(H, 2), xe = f(ve);
        {
          var Ae = (Ee) => {
            var Ne = Un(), Pe = ot(Ne);
            at(Pe, 17, () => s(o)[s(S).file], st, (oe, Me) => {
              var Te = Ti();
              J((Ie) => Mn(Te, `height: ${Ie ?? ""}px`), [() => Math.max(2, s(Me) * 14)]), R(oe, Te);
            }), R(Ee, Ne);
          }, je = (Ee) => {
            var Ne = Un(), Pe = ot(Ne);
            at(Pe, 16, () => Array(12), st, (oe, Me, Te) => {
              var Ie = Oi();
              Mn(Ie, `animation-delay: ${Te * 40}ms`), R(oe, Ie);
            }), R(Ee, Ne);
          };
          fe(xe, (Ee) => {
            s(o)[s(S).file] ? Ee(Ae) : Ee(je, -1);
          });
        }
        J(() => {
          et(D, "title", s(S).insns > 0 ? `${s(S).desc} \u2014 ${s(S).insns} instructions` : s(S).desc), y(ie, s(S).file);
        }), ge("click", D, () => M(s(S).file)), R(ee, D);
      });
      var me = p(X, 2), ce = f(me);
      J((ee) => y(ce, ee), [() => s(i).map((ee) => `${ee.file} \u2014 ${ee.desc}`).join("  \xB7  ")]), R(T, V);
    };
    fe(N, (T) => {
      s(i).length && T(B);
    });
  }
  var k = p(N, 2);
  {
    var W = (T) => {
      var V = Fi(), X = f(V);
      J(() => y(X, s(l))), R(T, V);
    };
    fe(k, (T) => {
      s(l) && T(W);
    });
  }
  var Q = p(k, 2);
  {
    var se = (T) => {
      var V = Ni(), X = f(V);
      J(() => y(X, s(r))), R(T, V);
    };
    fe(Q, (T) => {
      s(r) && T(se);
    });
  }
  J(() => A = $e(O, 1, "zone svelte-1i6c60u", null, A, { over: s(a) })), Bt("drop", O, v), Bt("dragover", O, u), Bt("dragleave", O, m), ge("change", w, h), R(e, E), bt();
}
$t(["change", "click"]);
var ji = P('<span class="ct svelte-etynpr"> </span>'), Pi = P('<span class="ct svelte-etynpr"> </span>'), Di = P('<span class="ct svelte-etynpr"> </span>'), Ui = P('<span class="ct svelte-etynpr"> </span>'), zi = P("<button> <!> <!> <!> <!></button>"), qi = P('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), Wi = P('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Hi = P('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Gi = P('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Vi = P('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Yi = P('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Xi = P('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Ki = P('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Ji = P('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), Zi = P('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Qi(e, t) {
  ht(t, true);
  let n = U("summary");
  const a = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let r = U(""), i = It(() => {
    if (!t.strings) return [];
    const j = s(r).trim().toLowerCase();
    return j ? t.strings.filter((w) => w.text.toLowerCase().includes(j)) : t.strings;
  });
  const l = 80, o = It(() => t.report ? Math.max(1, ...t.report.sections.map((j) => Number(j.size) || 0)) : 1);
  function c(j) {
    return "0x" + Number(j).toString(16).toUpperCase().padStart(8, "0");
  }
  var v = Zi(), u = f(v);
  at(u, 21, () => a, st, (j, w) => {
    var N = It(() => Ps(s(w), 2));
    let B = () => s(N)[0], k = () => s(N)[1];
    var W = zi();
    let Q;
    var se = f(W), T = p(se);
    {
      var V = (H) => {
        var ie = ji(), ve = f(ie);
        J(() => y(ve, t.report.sections.length)), R(H, ie);
      };
      fe(T, (H) => {
        B() === "sections" && H(V);
      });
    }
    var X = p(T, 2);
    {
      var me = (H) => {
        var ie = Pi(), ve = f(ie);
        J(() => y(ve, t.report.segments.length)), R(H, ie);
      };
      fe(X, (H) => {
        B() === "segments" && H(me);
      });
    }
    var ce = p(X, 2);
    {
      var ee = (H) => {
        var ie = Di(), ve = f(ie);
        J(() => y(ve, t.report.symbols.length)), R(H, ie);
      };
      fe(ce, (H) => {
        B() === "symbols" && H(ee);
      });
    }
    var S = p(ce, 2);
    {
      var D = (H) => {
        var ie = Ui(), ve = f(ie);
        J(() => y(ve, t.strings.length)), R(H, ie);
      };
      fe(S, (H) => {
        B() === "strings" && t.strings && H(D);
      });
    }
    J(() => {
      Q = $e(W, 1, "tab svelte-etynpr", null, Q, { active: s(n) === B() }), y(se, `${k() ?? ""} `);
    }), ge("click", W, () => d(n, B(), true)), R(j, W);
  });
  var m = p(u, 2), h = f(m);
  {
    var M = (j) => {
      var w = qi(), N = p(f(w), 2), B = f(N), k = p(N, 4), W = f(k), Q = p(k, 4), se = f(Q), T = p(Q, 4), V = f(T), X = p(T, 4), me = f(X), ce = p(X, 4), ee = f(ce), S = p(ce, 4), D = f(S), H = p(S, 4), ie = f(H), ve = p(H, 4), xe = f(ve);
      J(() => {
        y(B, t.report.summary.class), y(W, t.report.summary.data), y(se, t.report.summary.osabi), y(V, t.report.summary.kind), y(me, t.report.summary.machine), y(ee, t.report.summary.entry), y(D, t.report.summary.n_sections), y(ie, t.report.summary.n_segments), y(xe, t.report.summary.n_symbols);
      }), R(j, w);
    }, E = (j) => {
      var w = Hi(), N = p(f(w));
      at(N, 21, () => t.report.sections, st, (B, k) => {
        var W = Wi(), Q = f(W), se = f(Q), T = p(Q), V = f(T), X = p(T), me = f(X), ce = p(X), ee = f(ce), S = p(ce), D = f(S), H = p(S), ie = f(H), ve = p(H), xe = f(ve), Ae = p(ve), je = f(Ae);
        J((Ee) => {
          et(W, "title", `Jump to offset ${s(k).offset ?? ""} in HEX`), y(se, s(k).idx), y(V, s(k).name || "\u2014"), y(me, s(k).kind), y(ee, s(k).addr), y(D, s(k).offset), y(ie, s(k).size), y(xe, s(k).flags), Mn(je, `width: ${Ee ?? ""}px`);
        }, [() => Math.max(1, Number(s(k).size) / s(o) * l)]), ge("click", W, () => t.onJumpToOffset?.(parseInt(s(k).offset, 16))), R(B, W);
      }), R(j, w);
    }, O = (j) => {
      var w = Vi(), N = p(f(w));
      at(N, 21, () => t.report.segments, st, (B, k) => {
        var W = Gi(), Q = f(W), se = f(Q), T = p(Q), V = f(T), X = p(T), me = f(X), ce = p(X), ee = f(ce), S = p(ce), D = f(S), H = p(S), ie = f(H), ve = p(H), xe = f(ve);
        J(() => {
          et(W, "title", `Jump to offset ${s(k).offset ?? ""} in HEX`), y(se, s(k).idx), y(V, s(k).kind), y(me, s(k).vaddr), y(ee, s(k).offset), y(D, s(k).filesz), y(ie, s(k).memsz), y(xe, s(k).flags);
        }), ge("click", W, () => t.onJumpToOffset?.(parseInt(s(k).offset, 16))), R(B, W);
      }), R(j, w);
    }, A = (j) => {
      var w = Xi(), N = p(f(w));
      at(N, 21, () => t.report.symbols, st, (B, k) => {
        var W = Yi(), Q = f(W), se = f(Q), T = p(Q), V = f(T), X = p(T), me = f(X), ce = p(X), ee = f(ce), S = p(ce), D = f(S);
        J(() => {
          y(se, s(k).name), y(V, s(k).bind), y(me, s(k).kind), y(ee, s(k).value), y(D, s(k).size);
        }), R(B, W);
      }), R(j, w);
    }, G = (j) => {
      var w = Ji(), N = ot(w), B = f(N), k = p(B, 2), W = f(k), Q = p(N, 2), se = p(f(Q));
      at(se, 21, () => s(i), st, (T, V) => {
        var X = Ki(), me = f(X), ce = f(me), ee = p(me), S = f(ee);
        J((D, H) => {
          et(X, "title", `Jump to offset ${D ?? ""} in HEX`), y(ce, H), y(S, s(V).text);
        }, [() => c(s(V).offset), () => c(s(V).offset)]), ge("click", X, () => t.onJumpToOffset?.(s(V).offset)), R(T, X);
      }), J(() => y(W, `${s(i).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), ws(B, () => s(r), (T) => d(r, T)), R(j, w);
    };
    fe(h, (j) => {
      s(n) === "summary" ? j(M) : s(n) === "sections" ? j(E, 1) : s(n) === "segments" ? j(O, 2) : s(n) === "symbols" ? j(A, 3) : s(n) === "strings" && j(G, 4);
    });
  }
  R(e, v), bt();
}
$t(["click"]);
var $i = P('<span class="strip-col svelte-14j5q0g"></span>'), el = P('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), tl = P('<span class="d-l svelte-14j5q0g">NOTE</span> <span class="d-v svelte-14j5q0g"> </span>', 1), nl = P('<div class="field svelte-14j5q0g"><span class="d-l svelte-14j5q0g">FIELD</span> <span class="d-v strong svelte-14j5q0g"> </span> <span class="d-l svelte-14j5q0g">OFFSET</span> <span class="d-v svelte-14j5q0g"> </span> <span class="d-l svelte-14j5q0g">VALUE</span> <span class="d-v mint svelte-14j5q0g"> </span> <!></div>'), rl = P('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">GOTO</span> <input type="text" placeholder="0x00000000" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form></div></div> <!> <div class="grid svelte-14j5q0g" tabindex="0" role="grid"><div class="sizer svelte-14j5q0g"></div></div> <div class="detail svelte-14j5q0g"><!></div></div>');
function sl(e, t) {
  ht(t, true);
  let n = Xt(t, "format", 3, "unknown"), a = Xt(t, "jumpTo", 3, null), r = Xt(t, "followTarget", 3, null);
  const i = 20, l = 16, o = 6, c = 2e6, v = 400;
  let u = U(null), m = U(null), h = U(400), M = U(0), E = [], O = { physicalPx: 0, scale: 1 }, A = U(0), G = U(null), j = U(gt([])), w = U(0), N = U(""), B = U(null), k = U(null), W = U(null), Q = U(0), se = U(0);
  const T = [{ offset: 0, size: 4, name: "e_ident.magic", type: "u32be", description: "ELF magic (0x7F ELF)" }, { offset: 4, size: 1, name: "e_ident.class", type: "u8", description: "1 = 32-bit, 2 = 64-bit" }, { offset: 5, size: 1, name: "e_ident.data", type: "u8", description: "1 = little-endian, 2 = big-endian" }, { offset: 6, size: 1, name: "e_ident.version", type: "u8" }, { offset: 7, size: 1, name: "e_ident.osabi", type: "u8" }, { offset: 8, size: 1, name: "e_ident.abiversion", type: "u8" }, { offset: 9, size: 7, name: "e_ident.pad", type: "bytes" }, { offset: 16, size: 2, name: "e_type", type: "u16", description: "2 = EXEC, 3 = DYN" }, { offset: 18, size: 2, name: "e_machine", type: "u16", description: "243 = RISC-V, 62 = x86_64" }, { offset: 20, size: 4, name: "e_version", type: "u32" }, { offset: 24, size: 4, name: "e_entry", type: "u32", description: "Entry-point virtual address" }, { offset: 28, size: 4, name: "e_phoff", type: "u32" }, { offset: 32, size: 4, name: "e_shoff", type: "u32" }, { offset: 36, size: 4, name: "e_flags", type: "u32" }, { offset: 40, size: 2, name: "e_ehsize", type: "u16" }, { offset: 42, size: 2, name: "e_phentsize", type: "u16" }, { offset: 44, size: 2, name: "e_phnum", type: "u16" }, { offset: 46, size: 2, name: "e_shentsize", type: "u16" }, { offset: 48, size: 2, name: "e_shnum", type: "u16" }, { offset: 50, size: 2, name: "e_shstrndx", type: "u16" }], V = [{ offset: 0, size: 4, name: "entry.branch", type: "bytes", description: "ARM branch executed by the BIOS after header validation" }, { offset: 4, size: 156, name: "nintendo.logo", type: "bytes", description: "Fixed Nintendo logo bitmap checked by boot ROM" }, { offset: 160, size: 12, name: "game.title", type: "string", description: "ASCII cartridge title" }, { offset: 172, size: 4, name: "game.code", type: "string", description: "Four-character game code" }, { offset: 176, size: 2, name: "maker.code", type: "string", description: "Two-character maker code" }, { offset: 178, size: 1, name: "fixed.0x96", type: "u8", description: "Fixed value required by the GBA BIOS" }, { offset: 179, size: 1, name: "unit.code", type: "u8", description: "Usually 0x00 for GBA" }, { offset: 180, size: 1, name: "device.type", type: "u8", description: "Device type / debug field" }, { offset: 181, size: 7, name: "reserved", type: "bytes" }, { offset: 188, size: 1, name: "software.version", type: "u8" }, { offset: 189, size: 1, name: "complement.checksum", type: "u8", description: "Header checksum over bytes 0xA0..0xBC" }, { offset: 190, size: 2, name: "reserved.tail", type: "bytes" }];
  function X(_) {
    return (_ >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function me(_) {
    return "0x" + (_ >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function ce(_) {
    return _ >= 32 && _ <= 126 ? String.fromCharCode(_) : ".";
  }
  function ee() {
    return n() === "elf" ? T : n() === "gba" ? V : [];
  }
  function S(_) {
    for (const x of ee()) if (_ >= x.offset && _ < x.offset + x.size) return x;
    return null;
  }
  function D(_) {
    if (!t.bytes || _.offset + _.size > t.bytes.byteLength) return "-";
    if (_.type === "string") return Array.from(t.bytes.subarray(_.offset, _.offset + _.size)).map((x) => x >= 32 && x <= 126 ? String.fromCharCode(x) : ".").join("").trim();
    if (_.type === "u8") return `0x${X(t.bytes[_.offset])} (${t.bytes[_.offset]})`;
    if (_.type === "u16") {
      const x = t.bytes[_.offset] | t.bytes[_.offset + 1] << 8;
      return `0x${x.toString(16).toUpperCase().padStart(4, "0")} (${x})`;
    }
    if (_.type === "u32" || _.type === "u32be") {
      const x = _.type === "u32be" ? (t.bytes[_.offset] << 24 | t.bytes[_.offset + 1] << 16 | t.bytes[_.offset + 2] << 8 | t.bytes[_.offset + 3]) >>> 0 : (t.bytes[_.offset] | t.bytes[_.offset + 1] << 8 | t.bytes[_.offset + 2] << 16 | t.bytes[_.offset + 3] << 24) >>> 0;
      return `0x${x.toString(16).toUpperCase().padStart(8, "0")} (${x})`;
    }
    return Array.from(t.bytes.subarray(_.offset, _.offset + _.size)).map(X).join(" ");
  }
  function H(_) {
    const x = Math.max(0, _ * i);
    return x <= c ? { physicalPx: x, scale: 1 } : { physicalPx: c, scale: x / c };
  }
  function ie() {
    const _ = Math.ceil((t.bytes?.length ?? 0) / l);
    if (_ === 0) return { start: 0, end: 0, topPx: 0 };
    const x = O.scale, Y = s(M) * x, I = Math.ceil(s(h) / i) + o * 2, b = Math.floor(Y / i) - o, F = Math.max(0, b), K = Math.min(_, F + I);
    let ae;
    if (x === 1) ae = F * i;
    else {
      const le = Y - F * i;
      ae = s(M) - le / x;
    }
    return { start: F, end: K, topPx: ae };
  }
  function ve(_) {
    for (; E.length < _; ) {
      const x = document.createElement("div");
      x.className = "hex-row", x.style.position = "absolute", x.style.left = "0", x.style.right = "0", x.style.height = `${i}px`, E.push(x);
    }
  }
  function xe(_) {
    const x = _ * l, Y = Math.min(t.bytes.length, x + l), I = document.createElement("span");
    I.className = "addr", I.textContent = me(x);
    const b = document.createElement("span");
    b.className = "bytes";
    const F = document.createElement("span");
    F.className = "ascii";
    for (let K = x; K < Y; K++) {
      const ae = t.bytes[K], le = S(K), he = document.createElement("button");
      he.type = "button", he.className = "byte", le && he.classList.add("ovr"), s(k) && le === s(k) && he.classList.add("hot"), s(B) === K && he.classList.add("sel"), he.dataset.fi = String(K), he.textContent = X(ae);
      const re = document.createElement("button");
      if (re.type = "button", re.className = "char", le && re.classList.add("ovr"), s(k) && le === s(k) && re.classList.add("hot"), s(B) === K && re.classList.add("sel"), re.dataset.fi = String(K), re.textContent = ce(ae), b.appendChild(he), F.appendChild(re), K - x === 7) {
        const Se = document.createElement("span");
        Se.className = "wide", Se.textContent = " ", b.appendChild(Se);
      }
      K < Y - 1 && b.appendChild(document.createTextNode(" "));
    }
    return [I, b, F];
  }
  function Ae() {
    if (!t.bytes || !s(m)) return;
    const _ = Math.ceil(t.bytes.length / l);
    O = H(_), s(m).style.height = `${O.physicalPx}px`;
    const x = ie(), Y = x.end - x.start;
    ve(Y);
    for (let I = Y; I < E.length; I++) E[I].parentNode && E[I].remove();
    for (let I = 0; I < Y; I++) {
      const b = x.start + I, F = E[I];
      F.style.top = `${x.topPx + I * i}px`, F.dataset.row = String(b), F.dataset.rowOff = String(b * l), F.replaceChildren(...xe(b)), F.parentNode !== s(m) && s(m).appendChild(F);
    }
    je();
  }
  function je() {
    if (t.bytes && t.bytes.length) {
      const _ = s(M) * (O.scale || 1), x = Math.floor(_ / i) * l;
      d(A, Math.max(0, Math.min(1, x / Math.max(1, t.bytes.length))), true);
    } else d(A, 0);
  }
  function Ee(_, x = true) {
    if (!t.bytes || !t.bytes.length || !s(u)) return;
    const Y = Math.max(0, Math.min(t.bytes.length - 1, Number(_) | 0)), I = Math.floor(Y / l), b = Math.max(0, Math.floor(s(h) / 3)), F = I * i, K = Math.max(0, (F - b) / (O.scale || 1));
    try {
      s(u).scrollTo({ top: K, behavior: "smooth" });
    } catch {
      s(u).scrollTop = K;
    }
    x && (d(W, I * l), d(Q, performance.now() + v), ka(se), requestAnimationFrame(() => requestAnimationFrame(Ne)));
  }
  function Ne() {
    if (s(W) == null) return;
    const _ = Math.floor(s(W) / l);
    E.forEach((Y) => {
      Number(Y.dataset.row) === _ && (Y.classList.remove("flash"), Y.offsetWidth, Y.classList.add("flash"), setTimeout(() => Y.classList.remove("flash"), 480));
    });
    const x = s(W) + l;
    s(m) && s(m).querySelectorAll("[data-fi]").forEach((I) => {
      const b = Number(I.dataset.fi);
      b >= s(W) && b < x && (I.classList.remove("flash"), I.offsetWidth, I.classList.add("flash"), setTimeout(() => I.classList.remove("flash"), 480));
    }), d(W, null);
  }
  function Pe(_) {
    if (!t.bytes?.length) return;
    const x = Math.max(1, Math.floor(s(h) / i) - 2), Y = (I) => {
      const b = s(M) * (O.scale || 1), F = Math.max(0, b + I * i);
      s(u).scrollTop = F / (O.scale || 1);
    };
    _.key === "PageDown" ? (_.preventDefault(), Y(x)) : _.key === "PageUp" ? (_.preventDefault(), Y(-x)) : _.key === "ArrowDown" ? (_.preventDefault(), Y(1)) : _.key === "ArrowUp" ? (_.preventDefault(), Y(-1)) : _.key === "Home" ? (_.preventDefault(), s(u).scrollTop = 0) : _.key === "End" && (_.preventDefault(), s(u).scrollTop = O.physicalPx);
  }
  function oe(_) {
    const x = _.target.closest("[data-fi]");
    x && (d(B, Number(x.dataset.fi), true), Ae());
  }
  function Me(_) {
    const x = _.target.closest(".ovr");
    if (!x) return;
    const Y = Number(x.dataset.fi), I = S(Y);
    I && I !== s(k) && (d(k, I, true), Ae());
  }
  function Te() {
    s(k) && (d(k, null), Ae());
  }
  function Ie(_) {
    _.preventDefault();
    let x = s(N).trim();
    if (!x) return;
    (x.startsWith("0x") || x.startsWith("0X")) && (x = x.slice(2));
    const Y = parseInt(x, 16);
    Number.isFinite(Y) && Ee(Y, true);
  }
  function Oe(_) {
    if (!s(j).length || !t.bytes) return;
    const Y = _.currentTarget.getBoundingClientRect(), I = Math.max(0, Math.min(1, (_.clientX - Y.left) / Y.width)), b = Math.floor(I * t.bytes.length);
    Ee(b, true);
  }
  function ke() {
    if (!t.bytes || s(B) == null || s(B) < 0 || s(B) >= t.bytes.length) return null;
    const _ = t.bytes[s(B)], x = _.toString(2).padStart(8, "0"), Y = s(B) + 1 < t.bytes.length ? t.bytes[s(B)] | t.bytes[s(B) + 1] << 8 : null, I = s(B) + 3 < t.bytes.length ? (t.bytes[s(B)] | t.bytes[s(B) + 1] << 8 | t.bytes[s(B) + 2] << 16 | t.bytes[s(B) + 3] << 24) >>> 0 : null, b = [`OFF ${me(s(B))}`, `BYTE 0x${X(_)} (${_})`, `b${x}`, `ASCII '${ce(_)}'`];
    return Y !== null && b.push(`U16LE 0x${Y.toString(16).toUpperCase().padStart(4, "0")}`), I !== null && b.push(`U32LE 0x${I.toString(16).toUpperCase().padStart(8, "0")}`), b.join(" \xB7 ");
  }
  let Le = 0, qe, g;
  mr(() => {
    qe = new ResizeObserver(() => {
      d(h, s(u).clientHeight, true), Ae();
    }), qe.observe(s(u)), g = () => {
      Le || (Le = requestAnimationFrame(() => {
        Le = 0, d(M, s(u).scrollTop, true), Ae();
      }));
    }, s(u).addEventListener("scroll", g, { passive: true }), Ae();
  }), gr(() => {
    try {
      qe?.disconnect();
    } catch {
    }
    s(u) && g && s(u).removeEventListener("scroll", g);
  }), He(() => {
    let _ = false;
    return On().then((x) => {
      if (_) return;
      d(G, x, true), d(w, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), d(j, t.bytes ? s(G).entropy_blocks(t.bytes, s(w)) : [], true), Ae();
    }), () => {
      _ = true;
    };
  });
  let L = null;
  He(() => {
    const _ = t.bytes;
    _ !== L && (L = _, s(u) && (s(u).scrollTop = 0), d(M, 0), d(B, null), d(k, null), E = [], s(G) && (d(w, Math.max(64, Math.ceil((_?.length ?? 0) / 256)), true), d(j, _ ? s(G).entropy_blocks(_, s(w)) : [], true)), Ae());
  }), He(() => {
    n(), Ae();
  }), He(() => {
    if (a() == null) return;
    const _ = typeof a() == "object" ? a().o : a();
    Ee(_, true);
  });
  let z = -1;
  He(() => {
    const _ = r();
    if (!_ || typeof _.offset != "number") {
      z = -1;
      return;
    }
    const x = Math.floor(_.offset / l);
    x !== z && (z = x, Ee(_.offset, false));
  });
  var te = rl(), pe = f(te), $ = p(f(pe), 2), de = f($), ye = p(f(de), 2), Fe = p(pe, 2);
  {
    var C = (_) => {
      var x = el(), Y = p(f(x), 2), I = f(Y);
      at(I, 17, () => s(j), st, (ae, le, he) => {
        var re = $i();
        J((Se, Ye, vt) => {
          Mn(re, `height: ${Se ?? ""}%; opacity: ${0.35 + s(le) * 0.65}`), et(re, "title", `block ${he} \\u00B7 offset 0x${Ye ?? ""} \\u00B7 entropy ${vt ?? ""} bits`);
        }, [() => Math.max(2, s(le) * 100), () => Math.floor(he * (t.bytes?.length ?? 0) / s(j).length).toString(16).toUpperCase(), () => s(le).toFixed(1)]), R(ae, re);
      });
      var b = p(I, 2), F = p(Y, 2), K = f(F);
      J((ae) => {
        Mn(b, `left: ${s(A) * 100}%`), y(K, `${ae ?? ""} B / col`);
      }, [() => s(w).toLocaleString()]), ge("click", Y, Oe), R(_, x);
    };
    fe(Fe, (_) => {
      s(j).length > 1 && _(C);
    });
  }
  var q = p(Fe, 2), ne = f(q);
  jt(ne, (_) => d(m, _), () => s(m)), jt(q, (_) => d(u, _), () => s(u));
  var we = p(q, 2), De = f(we);
  {
    var Ve = (_) => {
      var x = nl(), Y = p(f(x), 2), I = f(Y), b = p(Y, 4), F = f(b), K = p(b, 4), ae = f(K), le = p(K, 2);
      {
        var he = (re) => {
          var Se = tl(), Ye = p(ot(Se), 2), vt = f(Ye);
          J(() => y(vt, s(k).description)), R(re, Se);
        };
        fe(le, (re) => {
          s(k).description && re(he);
        });
      }
      J((re, Se) => {
        y(I, s(k).name), y(F, re), y(ae, Se);
      }, [() => me(s(k).offset), () => D(s(k))]), R(_, x);
    }, Ce = (_) => {
      var x = tn();
      J((Y) => y(x, Y), [() => ke() ?? "select a byte or hover a highlighted field"]), R(_, x);
    };
    fe(De, (_) => {
      s(k) ? _(Ve) : _(Ce, -1);
    });
  }
  Bt("submit", de, Ie), ws(ye, () => s(N), (_) => d(N, _)), ge("keydown", q, Pe), ge("click", q, oe), ge("mouseover", q, Me), Bt("mouseleave", q, Te), Bt("focus", q, Me), R(e, te), bt();
}
$t(["click", "keydown", "mouseover"]);
var al = P('<span class="w-meta svelte-59bj26"> </span>'), il = P('<div class="w-empty svelte-59bj26"> </div>'), ll = P('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), ol = P('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), cl = P('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), fl = P('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function ul(e, t) {
  ht(t, true);
  let n = U(null), a = U(""), r = U(null), i = U(null), l = null, o = null, c = null, v = 0, u = 0, m = 0, h = U("0:00 / 0:00");
  function M(S) {
    return "0x" + (Number(S) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function E(S) {
    return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KiB` : `${(S / 1024 / 1024).toFixed(2)} MiB`;
  }
  function O(S) {
    if (S < 1) return `${(S * 1e3).toFixed(0)} ms`;
    if (S < 60) return `${S.toFixed(2)} s`;
    const D = Math.floor(S / 60), H = S - D * 60;
    return `${D}m ${H.toFixed(1)}s`;
  }
  function A(S) {
    return S.replace(/\s+$/g, "");
  }
  async function G(S) {
    if (d(a, ""), !S) {
      d(n, null);
      return;
    }
    try {
      const H = (await On()).decode_wav(S);
      d(n, H, true), c = null, d(h, `0:00 / ${O(H.duration)}`), requestAnimationFrame(() => j({ playhead: 0 }));
    } catch (D) {
      console.error("[scry/wave] decode failed", D), d(n, null), d(a, String(D?.message || D), true);
    }
  }
  function j({ playhead: S = null } = {}) {
    if (!s(r) || !s(n)) return;
    const D = window.devicePixelRatio || 1, H = s(r).getBoundingClientRect(), ie = Math.max(1, Math.floor(H.width * D)), ve = Math.max(1, Math.floor(H.height * D));
    s(r).width = ie, s(r).height = ve;
    const xe = getComputedStyle(s(r)), Ae = xe.getPropertyValue("--w-bg").trim() || "#000", je = xe.getPropertyValue("--w-grid").trim() || "#333", Ee = xe.getPropertyValue("--w-peak").trim() || "#888", Ne = xe.getPropertyValue("--w-rms").trim() || "#bcd", Pe = xe.getPropertyValue("--w-accent").trim() || "#9fe3c7", oe = s(r).getContext("2d");
    oe.fillStyle = Ae, oe.fillRect(0, 0, ie, ve), oe.strokeStyle = je, oe.lineWidth = 1;
    const Me = ve / 2;
    for (const ke of [0.25, 0.5, 0.75]) {
      const Le = Math.floor(ve * ke) + 0.5;
      oe.beginPath(), oe.moveTo(0, Le), oe.lineTo(ie, Le), oe.stroke();
    }
    const Te = s(n).envelope, Ie = Te.length, Oe = ie / Ie;
    for (let ke = 0; ke < Ie; ke++) {
      const Le = Te[ke], qe = Math.floor(ke * Oe), g = Math.max(1, Math.floor(Oe) - 1), L = Me - Le.max * Me, z = Me - Le.min * Me;
      oe.fillStyle = Ee, oe.fillRect(qe, Math.floor(L), g, Math.max(1, Math.ceil(z - L)));
      const te = Le.rms * Me;
      oe.fillStyle = Ne, oe.fillRect(qe, Math.floor(Me - te), g, Math.max(1, Math.ceil(2 * te)));
    }
    if (S != null) {
      const ke = Math.floor(S * ie);
      oe.strokeStyle = Pe, oe.lineWidth = 2 * D, oe.beginPath(), oe.moveTo(ke, 0), oe.lineTo(ke, ve), oe.stroke();
    }
  }
  function w() {
    if (!s(n)) return null;
    if (c) return c;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const S = s(n).samples instanceof Float32Array ? s(n).samples : new Float32Array(s(n).samples);
    return c = l.createBuffer(1, S.length, s(n).fmt.sample_rate), c.copyToChannel(S, 0), c;
  }
  function N() {
    if (!l || !o || !s(n)) {
      m = 0;
      return;
    }
    const S = u + (l.currentTime - v), D = s(n).duration, H = Math.max(0, Math.min(1, S / D));
    j({ playhead: H }), d(h, `${O(Math.min(S, D))} / ${O(D)}`), S < D ? m = requestAnimationFrame(N) : m = 0;
  }
  function B() {
    if (m && (cancelAnimationFrame(m), m = 0), o) {
      try {
        o.stop();
      } catch {
      }
      o.disconnect(), o = null;
    }
  }
  function k(S) {
    if (!s(n)) return;
    const D = w();
    D && (B(), o = l.createBufferSource(), o.buffer = D, o.connect(l.destination), o.onended = () => {
      m && cancelAnimationFrame(m), m = 0, j({ playhead: 0 }), d(h, `0:00 / ${O(s(n).duration)}`), o = null;
    }, l.state === "suspended" && l.resume(), u = Math.max(0, Math.min(s(n).duration - 1e-3, S)), v = l.currentTime, o.start(0, u), m = requestAnimationFrame(N));
  }
  function W(S) {
    if (!s(n)) return;
    const D = s(r).getBoundingClientRect(), H = (S.clientX - D.left) / D.width;
    k(H * s(n).duration);
  }
  He(() => {
    const S = t.bytes;
    return G(S), () => B();
  }), He(() => {
    if (!s(i)) return;
    const S = new ResizeObserver(() => s(n) && j({ playhead: 0 }));
    return S.observe(s(i)), () => S.disconnect();
  });
  var Q = fl(), se = f(Q), T = p(f(se), 2);
  {
    var V = (S) => {
      var D = al(), H = f(D);
      J((ie) => y(H, `${s(n).fmt.channels ?? ""}ch @ ${s(n).fmt.sample_rate ?? ""} Hz \xB7 ${s(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${ie ?? ""}`), [() => O(s(n).duration)]), R(S, D);
    };
    fe(T, (S) => {
      s(n) && S(V);
    });
  }
  var X = p(se, 2);
  {
    var me = (S) => {
      var D = il(), H = f(D);
      J(() => y(H, `Not a parseable WAV: ${s(a) ?? ""}`)), R(S, D);
    }, ce = (S) => {
      var D = ll();
      R(S, D);
    }, ee = (S) => {
      var D = cl(), H = ot(D), ie = f(H), ve = f(ie), xe = f(ve), Ae = p(f(xe)), je = f(Ae), Ee = p(xe, 2), Ne = p(f(Ee)), Pe = f(Ne), oe = p(Ee, 2), Me = p(f(oe)), Te = f(Me), Ie = p(oe, 2), Oe = p(f(Ie)), ke = f(Oe), Le = p(ve, 2), qe = f(Le), g = p(f(qe)), L = f(g), z = p(qe, 2), te = p(f(z)), pe = f(te), $ = p(z, 2), de = p(f($)), ye = f(de), Fe = p($, 2), C = p(f(Fe)), q = f(C), ne = p(Le, 2), we = f(ne), De = p(f(we)), Ve = f(De), Ce = p(we, 2);
      at(Ce, 17, () => s(n).chunks.slice(0, 4), st, (ae, le) => {
        var he = ol(), re = f(he), Se = f(re), Ye = p(re), vt = f(Ye);
        J((Tt, Et, vn) => {
          y(Se, Tt), y(vt, `${Et ?? ""} @ ${vn ?? ""}`);
        }, [() => A(s(le).id), () => E(s(le).size), () => M(s(le).offset)]), R(ae, he);
      });
      var _ = p(H, 2), x = f(_), Y = p(x, 2), I = p(Y, 2), b = f(I), F = p(_, 2), K = f(F);
      jt(K, (ae) => d(r, ae), () => s(r)), jt(F, (ae) => d(i, ae), () => s(i)), J((ae, le, he, re) => {
        y(je, s(n).fmt.format === 1 ? "PCM (int)" : s(n).fmt.format === 3 ? "IEEE float" : `tag ${s(n).fmt.format}`), y(Pe, s(n).fmt.channels), y(Te, `${s(n).fmt.sample_rate ?? ""} Hz`), y(ke, `${s(n).fmt.bits_per_sample ?? ""}-bit`), y(L, ae), y(pe, le), y(ye, he), y(q, `${re ?? ""}/s`), y(Ve, s(n).chunks.length), y(b, s(h));
      }, [() => Number(s(n).total_frames).toLocaleString(), () => O(s(n).duration), () => E(s(n).data_len), () => E(s(n).fmt.byte_rate)]), ge("click", x, () => k(0)), ge("click", Y, () => {
        B(), j({ playhead: 0 }), d(h, `0:00 / ${O(s(n).duration)}`);
      }), ge("click", K, W), R(S, D);
    };
    fe(X, (S) => {
      s(a) ? S(me) : s(n) ? S(ee, -1) : S(ce, 1);
    });
  }
  R(e, Q), bt();
}
$t(["click"]);
var vl = P('<span class="c-meta svelte-1uww35p"> </span>'), dl = P('<div class="c-empty svelte-1uww35p"> </div>'), pl = P('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), _l = P('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), hl = P(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), bl = P('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function ml(e, t) {
  ht(t, true);
  let n = U(null), a = U("");
  function r(w) {
    return (w >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function i(w) {
    return "0x" + (w >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function l(w) {
    return w >= 32 && w <= 126 ? String.fromCharCode(w) : ".";
  }
  function o(w) {
    return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KiB` : `${(w / 1024 / 1024).toFixed(2)} MiB`;
  }
  async function c(w) {
    if (d(a, ""), !w) {
      d(n, null);
      return;
    }
    try {
      const N = await On();
      d(n, N.parse_gba(w), true);
    } catch (N) {
      console.error("[scry/cart] parse failed", N), d(n, null), d(a, String(N?.message || N), true);
    }
  }
  He(() => {
    const w = t.bytes;
    c(w);
  });
  function v(w) {
    if (!t.bytes) return null;
    const N = t.bytes.subarray(w, Math.min(t.bytes.length, w + 16)), B = [], k = [];
    for (let W = 0; W < N.length; W++) B.push(r(N[W])), k.push(l(N[W])), W === 7 && B.push("");
    return { off: w, hex: B.join(" ").replace(/  /g, "  "), ascii: k.join("") };
  }
  let u = It(() => {
    if (!t.bytes) return [];
    const w = [];
    for (let N = 160; N < 224; N += 16) {
      const B = v(N);
      B && w.push(B);
    }
    return w;
  });
  var m = bl(), h = f(m), M = p(f(h), 2);
  {
    var E = (w) => {
      var N = vl(), B = f(N);
      J((k) => y(B, `"${(s(n).title || "(blank)") ?? ""}" \xB7 ${s(n).game_code ?? ""} \xB7 ${k ?? ""}`), [() => o(s(n).rom_size)]), R(w, N);
    };
    fe(M, (w) => {
      s(n) && w(E);
    });
  }
  var O = p(h, 2);
  {
    var A = (w) => {
      var N = dl(), B = f(N);
      J(() => y(B, `parse failed: ${s(a) ?? ""}`)), R(w, N);
    }, G = (w) => {
      var N = pl();
      R(w, N);
    }, j = (w) => {
      var N = hl(), B = f(N), k = p(f(B), 2), W = p(f(k)), Q = f(W), se = p(k, 2), T = p(f(se)), V = f(T), X = p(se, 2), me = p(f(X)), ce = f(me), ee = p(X, 2), S = p(f(ee), 2), D = f(S), H = p(ee, 2), ie = p(f(H)), ve = f(ie), xe = p(H, 2), Ae = p(f(xe)), je = f(Ae), Ee = p(xe, 2), Ne = p(f(Ee)), Pe = f(Ne), oe = p(Ee, 2), Me = p(f(oe), 2), Te = f(Me), Ie = p(oe, 2), Oe = p(f(Ie)), ke = f(Oe), Le = p(B, 2), qe = p(f(Le), 2);
      at(qe, 21, () => s(u), st, (g, L) => {
        var z = _l(), te = f(z), pe = f(te), $ = p(te, 2), de = f($), ye = p($, 2), Fe = f(ye);
        J((C) => {
          y(pe, C), y(de, s(L).hex), y(Fe, s(L).ascii);
        }, [() => i(s(L).off)]), R(g, z);
      }), J((g, L, z, te, pe, $, de) => {
        y(Q, s(n).title || "(blank)"), y(V, s(n).game_code || "----"), y(ce, s(n).maker_code || "--"), y(D, `0x${g ?? ""} ${s(n).fixed_ok ? "\u2713" : "\u2717"}`), y(ve, `0x${L ?? ""}`), y(je, `0x${z ?? ""}`), y(Pe, `0x${te ?? ""}`), y(Te, `stored 0x${pe ?? ""} \xB7
            computed 0x${$ ?? ""}
            ${s(n).checksum_ok ? " \u2713" : " \u2717"}`), y(ke, de);
      }, [() => r(s(n).fixed), () => r(s(n).unit_code), () => r(s(n).device_type), () => r(s(n).version), () => r(s(n).checksum), () => r(s(n).checksum_computed), () => o(s(n).rom_size)]), R(w, N);
    };
    fe(O, (w) => {
      s(a) ? w(A) : s(n) ? w(j, -1) : w(G, 1);
    });
  }
  R(e, m), bt();
}
var gl = P('<section class="mh-host svelte-sq0dz7"><div class="mh-bar svelte-sq0dz7"><span class="mh-title svelte-sq0dz7"> </span> <form class="mh-jumpform svelte-sq0dz7"><span class="mh-jumplab svelte-sq0dz7">JUMP</span> <input type="text" placeholder="0x..." class="mh-jump svelte-sq0dz7" aria-label="jump to offset"/></form></div> <div class="mh-scroll svelte-sq0dz7" role="grid" tabindex="0"><div class="mh-sizer svelte-sq0dz7"></div></div> <div class="mh-detail svelte-sq0dz7"> </div></section>');
function yl(e, t) {
  ht(t, true);
  let n = Xt(t, "cursor", 3, null), a = Xt(t, "follow", 3, false), r = Xt(t, "onByteClick", 3, null);
  const i = 16, l = 20, o = 6, c = 5e5;
  let v, u, m, h = 0, M = [], E = null, O = { physicalPx: 0, scale: 1 }, A = -1, G = U(null);
  function j(g) {
    return (g >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function w(g) {
    return "0x" + (g >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function N(g) {
    return g >= 32 && g <= 126 ? String.fromCharCode(g) : ".";
  }
  const B = [{ offset: 0, size: 4, name: "entry.branch", type: "bytes", description: "ARM branch" }, { offset: 4, size: 156, name: "nintendo.logo", type: "bytes", description: "Nintendo logo bitmap" }, { offset: 160, size: 12, name: "game.title", type: "string", description: "Cartridge title" }, { offset: 172, size: 4, name: "game.code", type: "string", description: "Game code" }, { offset: 176, size: 2, name: "maker.code", type: "string", description: "Maker code" }, { offset: 178, size: 1, name: "fixed.0x96", type: "u8", description: "BIOS fixed byte" }, { offset: 179, size: 1, name: "unit.code", type: "u8" }, { offset: 180, size: 1, name: "device.type", type: "u8" }, { offset: 181, size: 7, name: "reserved", type: "bytes" }, { offset: 188, size: 1, name: "software.version", type: "u8" }, { offset: 189, size: 1, name: "complement.checksum", type: "u8", description: "Header checksum" }, { offset: 190, size: 2, name: "reserved.tail", type: "bytes" }];
  function k(g) {
    for (const L of B) if (g >= L.offset && g < L.offset + L.size) return L;
    return null;
  }
  function W(g) {
    return !t.bytes || g.offset + g.size > t.bytes.byteLength ? "-" : g.type === "string" ? Array.from(t.bytes.subarray(g.offset, g.offset + g.size)).map((L) => L >= 32 && L <= 126 ? String.fromCharCode(L) : ".").join("").trim() : g.type === "u8" ? `0x${j(t.bytes[g.offset])} (${t.bytes[g.offset]})` : Array.from(t.bytes.subarray(g.offset, g.offset + g.size)).map(j).join(" ");
  }
  let Q = U(null);
  function se(g, L) {
    const z = Math.max(0, g * L);
    return z <= c ? { physicalPx: z, scale: 1 } : { physicalPx: c, scale: z / c };
  }
  function T(g, L, z, te) {
    if (z === 0) return { start: 0, end: 0, topPx: 0 };
    const pe = g * te, $ = Math.ceil(L / l) + o * 2, de = Math.floor(pe / l) - o, ye = Math.max(0, de), Fe = Math.min(z, ye + $);
    let C;
    if (te === 1) C = ye * l;
    else {
      const q = pe - ye * l;
      C = g - q / te;
    }
    return { start: ye, end: Fe, topPx: C };
  }
  function V(g, L) {
    const z = g * i, te = Math.min(L.byteLength, z + i), pe = L.subarray(z, te), $ = [], de = [];
    for (let ye = 0; ye < pe.length; ye++) {
      const Fe = z + ye;
      $.push({ off: Fe, text: j(pe[ye]), gap: ye === 7 ? "wide" : "" }), de.push({ off: Fe, text: N(pe[ye]) });
    }
    return { addr: w(z), hex: $, asc: de };
  }
  function X(g, L, z, te) {
    g.textContent = "";
    for (let pe = 0; pe < L.length; pe++) {
      const $ = L[pe], de = document.createElement("span");
      de.className = z;
      const ye = k($.off);
      ye && de.classList.add("mh-ovr"), s(Q) && ye === s(Q) && de.classList.add("mh-hot"), $.off === s(G) && de.classList.add("mh-selected"), $.off === te && de.classList.add("mh-pc-byte"), de.dataset.off = String($.off), de.textContent = $.text, g.appendChild(de), z === "mh-cell" && pe < L.length - 1 && g.appendChild(document.createTextNode($.gap === "wide" ? "  " : " "));
    }
  }
  function me() {
    const g = s(G) ?? n();
    if (!t.bytes || typeof g != "number" || g < 0 || g >= t.bytes.byteLength) return null;
    const L = k(g);
    if (L) {
      const ye = W(L);
      return `${L.name} \xB7 ${ye}${L.description ? " \xB7 " + L.description : ""}`;
    }
    const z = t.bytes[g], te = z.toString(2).padStart(8, "0"), pe = g + 1 < t.bytes.byteLength ? t.bytes[g] | t.bytes[g + 1] << 8 : null, $ = g + 3 < t.bytes.byteLength ? (t.bytes[g] | t.bytes[g + 1] << 8 | t.bytes[g + 2] << 16 | t.bytes[g + 3] << 24) >>> 0 : null, de = [`OFF ${w(g)}`, `BYTE 0x${j(z)} (${z})`, `b${te}`, `ASCII '${N(z)}'`];
    return pe !== null && de.push(`U16LE 0x${pe.toString(16).toUpperCase().padStart(4, "0")}`), $ !== null && de.push(`U32LE 0x${$.toString(16).toUpperCase().padStart(8, "0")}`), de.join(" \xB7 ");
  }
  function ce(g) {
    for (; M.length < g; ) {
      const L = document.createElement("div");
      L.className = "mh-row", L.style.position = "absolute", L.style.left = "0", L.style.right = "0", L.style.height = `${l}px`;
      const z = document.createElement("span");
      z.className = "mh-addr";
      const te = document.createElement("span");
      te.className = "mh-bytes";
      const pe = document.createElement("span");
      pe.className = "mh-ascii", L.appendChild(z), L.appendChild(te), L.appendChild(pe), M.push(L);
    }
  }
  function ee() {
    const g = t.bytes;
    if (!u) return;
    if (!g || g.byteLength === 0) {
      for (const $ of M) $.parentNode && $.remove();
      u.style.height = "0px";
      return;
    }
    const L = Math.ceil(g.byteLength / i);
    O = se(L, l), u.style.height = `${O.physicalPx}px`;
    const z = T(v.scrollTop, h, L, O.scale), te = z.end - z.start;
    ce(te);
    for (let $ = te; $ < M.length; $++) M[$].parentNode && M[$].remove();
    const pe = typeof n() == "number" && n() >= 0 && n() < g.byteLength ? Math.floor(n() / i) : -1;
    for (let $ = 0; $ < te; $++) {
      const de = z.start + $, ye = V(de, g), Fe = M[$];
      Fe.style.top = `${z.topPx + $ * l}px`;
      const [C, q, ne] = Fe.children;
      C.textContent = ye.addr, X(q, ye.hex, "mh-cell", n()), X(ne, ye.asc, "mh-char", n()), de === pe ? Fe.classList.add("mh-cursor") : Fe.classList.remove("mh-cursor"), Fe.parentNode !== u && u.appendChild(Fe);
    }
  }
  function S() {
    const g = t.bytes;
    if (!g || typeof n() != "number" || n() < 0 || n() >= g.byteLength || !v) return;
    const z = Math.floor(n() / i) * l, te = z / O.scale, pe = l * 4, $ = v.scrollTop, de = $ + h;
    (te < $ + pe || te > de - pe) && (v.scrollTop = Math.max(0, (z - h / 2) / O.scale));
  }
  function D(g) {
    const L = t.bytes;
    if (!L || g < 0 || g >= L.byteLength) return;
    d(G, g, true);
    const te = Math.floor(g / i) * l;
    v.scrollTop = Math.max(0, (te - h / 2) / O.scale), ee();
  }
  function H(g) {
    g.preventDefault();
    const L = m.value.trim().replace(/^0x/i, ""), z = parseInt(L, 16);
    Number.isFinite(z) && D(z);
  }
  function ie(g) {
    const L = g.target.closest("[data-off]");
    if (!L || !t.bytes) return;
    const z = Number(L.dataset.off);
    !Number.isFinite(z) || z < 0 || z >= t.bytes.byteLength || (d(G, z, true), ee(), r()?.(z));
  }
  function ve(g) {
    g.key !== "Enter" && g.key !== " " || !g.target.closest("[data-off]") || (g.preventDefault(), ie(g));
  }
  function xe(g) {
    const L = g.target.closest("[data-off]");
    if (!L || !t.bytes) return;
    const z = Number(L.dataset.off), te = k(z);
    te !== s(Q) && (d(Q, te, true), ee());
  }
  function Ae() {
    s(Q) && (d(Q, null), ee());
  }
  let je;
  mr(() => {
    je = new ResizeObserver(() => {
      h = v.clientHeight, ee();
    }), je.observe(v), v.addEventListener("scroll", ee, { passive: true }), ee();
  }), gr(() => {
    try {
      je?.disconnect();
    } catch {
    }
  }), He(() => {
    t.bytes !== E && (E = t.bytes, A = -1, d(G, null), v && (v.scrollTop = 0), Zt(() => ee()), t.bytes && t.bytes.byteLength >= 192 && requestAnimationFrame(() => D(160)));
  });
  let Ee = false;
  He(() => {
    const g = n(), L = a();
    if (!t.bytes) return;
    const z = typeof g == "number" && g >= 0 && g < t.bytes.byteLength ? Math.floor(g / i) : -1, te = L !== Ee;
    Ee = L, !(z === A && !te) && (A = z, Zt(() => ee()), L && requestAnimationFrame(S));
  });
  var Ne = gl(), Pe = f(Ne), oe = f(Pe), Me = f(oe), Te = p(oe, 2), Ie = p(f(Te), 2);
  jt(Ie, (g) => m = g, () => m);
  var Oe = p(Pe, 2), ke = f(Oe);
  jt(ke, (g) => u = g, () => u), jt(Oe, (g) => v = g, () => v);
  var Le = p(Oe, 2), qe = f(Le);
  J((g, L) => {
    y(Me, g), y(qe, L);
  }, [() => t.bytes ? `ROM (${t.bytes.byteLength.toLocaleString()} bytes)` : "ROM (empty)", () => me() ?? (t.bytes ? "select a byte" : "no ROM loaded")]), Bt("submit", Te, H), ge("click", Oe, ie), ge("keydown", Oe, ve), ge("mouseover", Oe, xe), Bt("mouseleave", Oe, Ae), R(e, Ne), bt();
}
$t(["click", "keydown", "mouseover"]);
const wl = 33554432, xl = [{ start: 0, end: 16384, label: "BIOS" }, { start: 33554432, end: 33816576, label: "EWRAM" }, { start: 50331648, end: 50364416, label: "IWRAM" }, { start: 67108864, end: 67109888, label: "I/O" }, { start: 83886080, end: 83887104, label: "PAL" }, { start: 100663296, end: 100761600, label: "VRAM" }, { start: 117440512, end: 117441536, label: "OAM" }, { start: 234881024, end: 234946560, label: "SRAM" }], El = [{ start: 134217728, label: "ROM0" }, { start: 167772160, label: "ROM1" }, { start: 201326592, label: "ROM2" }];
function Al(e, t = 0) {
  const n = e >>> 0;
  for (const a of El) {
    const r = n - a.start;
    if (r >= 0 && r < wl) return t > 0 ? { address: n, label: a.label, inCart: true, offset: r % t, rawOffset: r, mirrored: r >= t } : { address: n, label: a.label, inCart: false, offset: null, rawOffset: r, mirrored: false };
  }
  for (const a of xl) if (n >= a.start && n < a.end) return { address: n, label: a.label, inCart: false, offset: null, rawOffset: n - a.start, mirrored: false };
  return { address: n, label: "BUS", inCart: false, offset: null, rawOffset: null, mirrored: false };
}
function kl(e) {
  const t = e?.gprs?.[15];
  if (typeof t != "number") return null;
  const n = Number(e?.instructionWidth) || 4;
  return (t >>> 0) - n >>> 0;
}
function Sl(e) {
  return e?.execMode === e?.MODE_THUMB ? "THUMB" : "ARM";
}
var Ml = P('<span class="g-meta svelte-1kb9ux"> </span>'), Cl = P('<div class="g-landmarks svelte-1kb9ux"><span class="g-landmarks-title svelte-1kb9ux">QUICK NAV</span> <button class="g-lm-btn svelte-1kb9ux" type="button" title="Jump to cartridge header"><span class="g-lm-label svelte-1kb9ux">HEADER</span> <span class="g-lm-off svelte-1kb9ux"> </span></button> <button class="g-lm-btn svelte-1kb9ux" type="button" title="Jump to code entry point"><span class="g-lm-label svelte-1kb9ux">ENTRY</span> <span class="g-lm-off svelte-1kb9ux"> </span></button> <button class="g-lm-btn g-lm-demo svelte-1kb9ux" type="button" title="Start emulation with PC follow"><span class="g-lm-label svelte-1kb9ux">RUN + FOLLOW</span></button></div>'), Tl = P(" <!>", 1), Ol = P("<span> <!></span>"), Rl = P("<span> <!></span>"), Ll = P('<button type="button"><span class="g-trail-age svelte-1kb9ux"></span> <span class="g-trail-pc"> </span> <span class="g-trail-off svelte-1kb9ux"> </span> <span class="g-trail-mode svelte-1kb9ux"> </span></button>'), Fl = P('<div class="g-trail-title svelte-1kb9ux">RECENT CART PC</div> <!>', 1), Nl = P('<div class="g-click-note svelte-1kb9ux"> </div>'), Il = P(`<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-split svelte-1kb9ux"><div class="g-left svelte-1kb9ux"><div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <button type="button" title="Auto-scroll the ROM view to wherever the CPU's program counter currently is"><span class="g-follow-led svelte-1kb9ux" aria-hidden="true"></span> <span class="g-follow-lab"> </span></button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div> <!></div> <div class="g-right svelte-1kb9ux"><div class="g-sub-bar svelte-1kb9ux"><span class="g-sub-title svelte-1kb9ux">[ ROM / INSPECTOR ]</span> <span class="g-sub-hint svelte-1kb9ux"><!></span></div> <!> <div class="g-pc-trail svelte-1kb9ux"><!> <!></div></div></div></div>`);
function Bl(e, t) {
  ht(t, true);
  let n = Xt(t, "onPcUpdate", 3, null), a, r = null, i = U(false), l = U(false), o = U("cart ready \xB7 click PLAY"), c = U(null), v = U(null), u = U("ARM"), m = U(false), h = U(true), M = U(gt([])), E = U(""), O = 0, A = 0;
  const G = 480, j = 320, w = 100, N = 8;
  function B(b) {
    return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KiB` : `${(b / (1024 * 1024)).toFixed(2)} MiB`;
  }
  function k(b) {
    return "0x" + (b >>> 0).toString(16).toUpperCase().padStart(8, "0");
  }
  function W(b) {
    if (!b || b.byteLength < 192) return null;
    const F = (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    let K = null;
    if (F >>> 24 === 234) {
      let ae = F & 16777215;
      ae & 8388608 && (ae |= 4278190080);
      const le = 8 + (ae << 2) >>> 0;
      le < b.byteLength && le > 192 && (K = le);
    }
    return { entryOff: K ?? 192 };
  }
  let Q = It(() => W(t.bytes));
  function se() {
    n()?.({ follow: s(h), running: s(l), liveAddress: s(v)?.address ?? null, label: s(v)?.label ?? (s(i) ? "READY" : "IDLE"), mode: s(u), inCart: s(m), offset: s(c), mirrored: !!s(v)?.mirrored, trail: s(M), ts: performance.now() });
  }
  function T(b) {
    if (!b?.inCart || b.offset == null) return;
    const F = s(M)[0];
    F && Math.floor(F.offset / 16) === Math.floor(b.offset / 16) || d(M, [{ address: b.address, offset: b.offset, label: b.label, mode: s(u), mirrored: b.mirrored, ts: performance.now() }, ...s(M)].slice(0, N), true);
  }
  function V(b) {
    if (s(l)) {
      d(E, `ROM ${k(b)} selected while running`);
      return;
    }
    d(E, `ROM ${k(b)} \xB7 bus ${k(134217728 + b)} \xB7 V2 DISASM is not shipped yet`);
  }
  function X() {
    if (r) return r;
    if (typeof window.GameBoyAdvance != "function") throw new Error("gbajs not loaded");
    if (!window.biosBin) throw new Error("biosBin not loaded");
    if (r = new window.GameBoyAdvance(), typeof window.GameBoyAdvanceSoftwareRenderer == "function") {
      try {
        r.video.renderPath?.worker?.terminate?.();
      } catch {
      }
      r.video.renderPath = new window.GameBoyAdvanceSoftwareRenderer();
    }
    return r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((b, F) => console.warn("[scry/v2/game/gba]", F)), r.setCanvas(a), r.setBios(window.biosBin), r;
  }
  async function me() {
    if (t.bytes && !s(l)) {
      if (a.focus(), !s(i)) {
        d(o, "loading ROM\u2026"), await new Promise((b) => requestAnimationFrame(b)), await new Promise((b) => requestAnimationFrame(b));
        try {
          const b = X(), F = t.bytes.buffer.slice(t.bytes.byteOffset, t.bytes.byteOffset + t.bytes.byteLength);
          if (!b.setRom(F)) {
            d(o, "rom rejected");
            return;
          }
          d(i, true), b.runStable(), d(l, true), d(o, "running"), se(), S();
        } catch (b) {
          console.error("[scry/v2/game] load failed", b), d(o, "error: " + (b?.message || b));
        }
        return;
      }
      r.runStable(), d(l, true), d(o, "running"), se(), S();
    }
  }
  function ce() {
    !r || !r.hasRom() || (r.pause(), d(l, false), d(o, "paused"), D(), se());
  }
  function ee(b) {
    if (O = requestAnimationFrame(ee), !s(l) || !r || !t.bytes || b - A < w) return;
    A = b;
    const F = kl(r.cpu);
    F !== null && (d(u, Sl(r.cpu), true), d(v, Al(F, t.bytes.byteLength), true), s(v).inCart && s(v).offset !== null ? (d(c, s(v).offset, true), d(m, true), T(s(v))) : d(m, false), se());
  }
  function S() {
    O || (A = 0, O = requestAnimationFrame(ee));
  }
  function D() {
    O && cancelAnimationFrame(O), O = 0;
  }
  function H() {
    d(h, !s(h)), se();
  }
  function ie() {
    if (!r || !t.bytes) return;
    const b = s(l);
    if (b) {
      try {
        r.pause();
      } catch {
      }
      d(l, false);
    }
    D(), d(c, null), d(v, null), d(m, false), d(i, false), d(o, "cart ready \xB7 click PLAY"), se(), b && me();
  }
  He(() => {
    if (t.bytes) s(l) || d(o, "cart ready \xB7 click PLAY"), s(i) || (d(c, null), d(v, null), d(m, false), d(M, [], true), d(E, ""), se());
    else {
      if (r && s(l)) try {
        r.pause();
      } catch {
      }
      D(), d(c, null), d(v, null), d(m, false), d(h, true), d(M, [], true), d(E, ""), d(i, false), d(l, false), d(o, "idle"), se();
    }
  }), gr(() => {
    if (r && s(l)) try {
      r.pause();
    } catch {
    }
    D();
  });
  var ve = Il(), xe = f(ve), Ae = p(f(xe), 2);
  {
    var je = (b) => {
      var F = Ml(), K = f(F);
      J((ae) => y(K, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${ae ?? ""}`), [() => B(t.header.rom_size)]), R(b, F);
    };
    fe(Ae, (b) => {
      t.header && b(je);
    });
  }
  var Ee = p(xe, 2), Ne = f(Ee), Pe = f(Ne), oe = f(Pe);
  et(oe, "width", G), et(oe, "height", j), jt(oe, (b) => a = b, () => a);
  var Me = p(Pe, 2), Te = f(Me), Ie = p(Te, 2), Oe = p(Ie, 2), ke = p(Oe, 2);
  let Le;
  var qe = p(f(ke), 2), g = f(qe), L = p(ke, 2), z = f(L), te = p(Me, 2);
  {
    var pe = (b) => {
      var F = Cl(), K = p(f(F), 2), ae = p(f(K), 2), le = f(ae), he = p(K, 2), re = p(f(he), 2), Se = f(re), Ye = p(he, 2);
      J((vt, Tt) => {
        y(le, vt), y(Se, Tt);
      }, [() => k(160), () => k(s(Q).entryOff)]), ge("click", K, () => {
        d(c, 160);
      }), ge("click", he, () => {
        d(c, s(Q).entryOff, true);
      }), ge("click", Ye, () => {
        s(h) || d(h, true), s(l) || me(), a.focus(), se();
      }), R(b, F);
    };
    fe(te, (b) => {
      s(Q) && b(pe);
    });
  }
  var $ = p(Ne, 2), de = f($), ye = p(f(de), 2), Fe = f(ye);
  {
    var C = (b) => {
      var F = Ol();
      let K;
      var ae = f(F), le = p(ae);
      {
        var he = (re) => {
          var Se = Tl(), Ye = ot(Se), vt = p(Ye);
          {
            var Tt = (Et) => {
              var vn = tn("\xB7 mirror");
              R(Et, vn);
            };
            fe(vt, (Et) => {
              s(v).mirrored && Et(Tt);
            });
          }
          J((Et) => y(Ye, `\xB7 ROM ${Et ?? ""} `), [() => k(s(v).offset)]), R(re, Se);
        };
        fe(le, (re) => {
          s(v)?.inCart && s(v)?.offset !== null && re(he);
        });
      }
      J((re) => {
        K = $e(F, 1, "svelte-1kb9ux", null, K, { "g-pc-dim": !s(v)?.inCart }), y(ae, `${s(u) ?? ""} PC\u2192${re ?? ""}
              \xB7 ${s(v)?.label ?? "BUS" ?? ""} `);
      }, [() => k(s(v)?.address ?? 0)]), R(b, F);
    }, q = (b) => {
      var F = Rl();
      let K;
      var ae = f(F), le = p(ae);
      {
        var he = (re) => {
          var Se = tn();
          J((Ye) => y(Se, `\xB7 ROM ${Ye ?? ""}`), [() => k(s(v).offset)]), R(re, Se);
        };
        fe(le, (re) => {
          s(v).inCart && s(v).offset !== null && re(he);
        });
      }
      J((re) => {
        K = $e(F, 1, "svelte-1kb9ux", null, K, { "g-pc-dim": !s(v).inCart }), y(ae, `${s(u) ?? ""} PC\u2192${re ?? ""} \xB7 ${s(v).label ?? ""} `);
      }, [() => k(s(v).address)]), R(b, F);
    }, ne = (b) => {
      var F = tn("waiting for first PC sample\u2026");
      R(b, F);
    }, we = (b) => {
      var F = tn("pause \xB7 scroll \xB7 jump 0x...");
      R(b, F);
    };
    fe(Fe, (b) => {
      s(l) && s(c) !== null ? b(C) : s(v) ? b(q, 1) : s(l) ? b(ne, 2) : b(we, -1);
    });
  }
  var De = p(de, 2);
  yl(De, { get bytes() {
    return t.bytes;
  }, get cursor() {
    return s(c);
  }, get follow() {
    return s(h);
  }, onByteClick: V });
  var Ve = p(De, 2), Ce = f(Ve);
  {
    var _ = (b) => {
      var F = Fl(), K = p(ot(F), 2);
      at(K, 17, () => s(M), st, (ae, le, he) => {
        var re = Ll();
        $e(re, 1, "g-trail-row svelte-1kb9ux", null, {}, { hot: he === 0 });
        var Se = f(re);
        Se.textContent = he === 0 ? "NOW" : `-${he}`;
        var Ye = p(Se, 2), vt = f(Ye), Tt = p(Ye, 2), Et = f(Tt), vn = p(Tt, 2), Ms = f(vn);
        J((Cs, Ts) => {
          y(vt, Cs), y(Et, Ts), y(Ms, s(le).mode);
        }, [() => k(s(le).address), () => k(s(le).offset)]), ge("click", re, () => d(c, s(le).offset, true)), R(ae, re);
      }), R(b, F);
    }, x = (b) => {
      var F = tn("PC trail: waiting for cart code");
      R(b, F);
    };
    fe(Ce, (b) => {
      s(M).length ? b(_) : b(x, -1);
    });
  }
  var Y = p(Ce, 2);
  {
    var I = (b) => {
      var F = Nl(), K = f(F);
      J(() => y(K, s(E))), R(b, F);
    };
    fe(Y, (b) => {
      s(E) && b(I);
    });
  }
  J(() => {
    Te.disabled = !t.bytes || s(l), Ie.disabled = !s(l), Oe.disabled = !t.bytes || !s(i), Le = $e(ke, 1, "g-follow svelte-1kb9ux", null, Le, { "g-follow-on": s(h) }), ke.disabled = !s(i), y(g, s(h) ? "FOLLOWING PC" : "FOLLOW PC"), y(z, s(o));
  }), ge("click", Te, me), ge("click", Ie, ce), ge("click", Oe, ie), ge("click", ke, H), R(e, ve), bt();
}
$t(["click"]);
var jl = P('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), Pl = P('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), Dl = P('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), Ul = P('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function zl(e, t) {
  ht(t, true);
  var n = Ul(), a = f(n);
  {
    var r = (o) => {
      var c = jl();
      R(o, c);
    }, i = (o) => {
      var c = Pl(), v = ot(c), u = p(f(v), 2), m = f(u), h = p(v, 2), M = p(f(h), 2), E = f(M), O = p(h, 2), A = p(f(O), 2), G = f(A);
      J((j, w) => {
        et(u, "title", t.file.name), y(m, t.file.name), y(E, j), y(G, w);
      }, [() => lr(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), R(o, c);
    }, l = (o) => {
      var c = Dl();
      R(o, c);
    };
    fe(a, (o) => {
      t.parsing ? o(r) : t.file ? o(i, 1) : o(l, -1);
    });
  }
  R(e, n), bt();
}
var ql = P('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function Wl(e, t) {
  ht(t, true);
  let n = U(false), a = 0;
  function r(c) {
    const v = c.dataTransfer;
    if (!v) return false;
    const u = v.types;
    if (!u) return false;
    for (let m = 0; m < u.length; m++) if (u[m] === "Files") return true;
    return false;
  }
  He(() => {
    function c(h) {
      r(h) && (h.preventDefault(), a++, d(n, true));
    }
    function v(h) {
      r(h) && (h.preventDefault(), h.dataTransfer && (h.dataTransfer.dropEffect = "copy"));
    }
    function u(h) {
      r(h) && (a = Math.max(0, a - 1), a === 0 && d(n, false));
    }
    async function m(h) {
      if (!r(h)) return;
      h.preventDefault(), a = 0, d(n, false);
      const M = h.dataTransfer?.files?.[0];
      if (M) try {
        const E = await Ss(M);
        t.onfile?.(E);
      } catch (E) {
        t.onerror?.(E.message || String(E));
      }
    }
    return window.addEventListener("dragenter", c), window.addEventListener("dragover", v), window.addEventListener("dragleave", u), window.addEventListener("drop", m), () => {
      window.removeEventListener("dragenter", c), window.removeEventListener("dragover", v), window.removeEventListener("dragleave", u), window.removeEventListener("drop", m);
    };
  });
  var i = Un(), l = ot(i);
  {
    var o = (c) => {
      var v = ql();
      R(c, v);
    };
    fe(l, (c) => {
      s(n) && c(o);
    });
  }
  R(e, i), bt();
}
var Hl = P('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), Gl = P('<span class="s-badge entrance svelte-1n46o8q"> </span>'), Vl = P('<span class="s-summary svelte-1n46o8q"> </span>'), Yl = P('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), Xl = P('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), Kl = P('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Jl = P('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), Zl = P('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Ql = P('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), $l = P('<p class="err svelte-1n46o8q"> </p>'), eo = P('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), to = P("<!> <!>", 1), no = P('<span class="s-hint svelte-1n46o8q"> </span>'), ro = P('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function so(e, t) {
  ht(t, true);
  let n = U(null), a = U(null), r = U(null), i = U(null), l = U(null), o = U(null), c = U(null), v = U(""), u = U("inspect"), m = U(gt(ks())), h = U(false), M = U(null), E = U(null), O = U(""), A = U(false);
  const G = "scry \xB7 awaiting binary", j = "scry-booted-v2", w = { inspect: "click a section/segment/string -> jump in HEX", hex: "scroll or PgUp/PgDn, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, N = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  He(() => {
    function C(q) {
      if (q.origin !== location.origin) return;
      const ne = q.data;
      ne && (ne.type === "scry-theme" && (ne.value === "light" || ne.value === "dark") ? (document.documentElement.setAttribute("data-theme", ne.value), d(m, ne.value, true)) : ne.type === "scry-load-demo" && V());
    }
    return window.addEventListener("message", C), () => window.removeEventListener("message", C);
  });
  function B(C) {
    if (!C || C.length === 0) return null;
    const q = 256 * 1024, ne = Math.max(1, Math.ceil(C.length / q)), we = new Uint32Array(256);
    let De = 0;
    for (let Ce = 0; Ce < C.length; Ce += ne) we[C[Ce]]++, De++;
    if (!De) return null;
    let Ve = 0;
    for (let Ce = 0; Ce < we.length; Ce++) {
      const _ = we[Ce];
      if (!_) continue;
      const x = _ / De;
      Ve -= x * Math.log2(x);
    }
    return Ve;
  }
  let k = 0;
  async function W({ name: C, bytes: q }) {
    const ne = ++k;
    d(n, { name: C, bytes: q }, true), d(v, ""), d(r, null), d(i, null), d(l, null), d(o, null), d(a, null), d(c, null), d(E, null), d(h, true);
    try {
      const we = await On();
      if (ne !== k) return;
      if (d(a, we.detect_format(q), true), s(a) === "elf") d(r, we.parse_elf(q), true), d(u, "inspect");
      else if (s(a) === "wav") {
        try {
          d(i, we.decode_wav(q), true);
        } catch {
        }
        d(u, "wave");
      } else if (s(a) === "gba") {
        try {
          d(l, we.parse_gba(q), true);
        } catch {
        }
        d(u, "game");
      } else d(u, "hex");
      if (ne !== k) return;
      s(a) === "elf" && d(o, we.extract_strings(q, 4), true), s(a) !== "gba" && d(c, B(q), true);
    } catch (we) {
      ne === k && d(v, String(we), true);
    } finally {
      ne === k && d(h, false);
    }
  }
  function Q() {
    d(n, null), d(r, null), d(i, null), d(l, null), d(o, null), d(a, null), d(v, ""), d(c, null), d(E, null);
  }
  function se(C) {
    d(v, C, true);
  }
  function T() {
    d(m, Si(), true);
  }
  function V() {
    W({ name: Ci, bytes: Mi() });
  }
  function X(C) {
    d(u, "hex"), d(M, { o: C, t: performance.now() }, true);
  }
  function me(C) {
    d(E, C, true);
  }
  let ce = It(() => {
    if (!s(n)) return null;
    if (s(r)) {
      const C = s(r).summary;
      return [s(a)?.toUpperCase(), C.machine, C.class, C.kind].filter(Boolean).join(" \xB7 ");
    }
    return (s(a) || "raw").toUpperCase();
  }), ee = It(() => {
    if (!s(n)) return null;
    if (s(r)) {
      const C = s(r).summary, q = [];
      return C.class && C.machine ? q.push(`${C.class} ${C.machine}`) : C.machine && q.push(C.machine), q.push(`${s(r).sections.length} sections`), q.push(`${s(r).symbols.length} symbols`), s(c) != null && q.push(`avg entropy ${s(c).toFixed(1)} bits`), q.join(" \xB7 ");
    }
    if (s(i)) {
      const C = s(i).fmt, q = s(i).duration < 1 ? `${(s(i).duration * 1e3).toFixed(0)} ms` : `${s(i).duration.toFixed(2)} s`, ne = [`${C.channels}ch ${C.sample_rate} Hz`, `${C.bits_per_sample}-bit`, q];
      return s(c) != null && ne.push(`avg entropy ${s(c).toFixed(1)} bits`), ne.join(" \xB7 ");
    }
    if (s(l)) {
      const C = ["GBA cart", `"${s(l).title || "(blank)"}"`, `code ${s(l).game_code}`];
      return s(c) != null && C.push(`avg entropy ${s(c).toFixed(1)} bits`), C.join(" \xB7 ");
    }
    return s(c) != null ? `bytes only \xB7 entropy ${s(c).toFixed(1)} bits` : null;
  });
  He(() => {
    if (sessionStorage.getItem(j)) {
      d(O, G), d(A, true);
      return;
    }
    let C = 0;
    const q = setInterval(() => {
      if (C++, d(O, G.slice(0, C), true), C >= G.length) {
        clearInterval(q), d(A, true);
        try {
          sessionStorage.setItem(j, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(q);
  });
  var S = ro(), D = ot(S);
  Wl(D, { onfile: W, onerror: se });
  var H = p(D, 2);
  let ie;
  var ve = f(H), xe = f(ve);
  {
    var Ae = (C) => {
      var q = Hl(), ne = f(q);
      let we;
      J(() => {
        et(q, "title", s(n) ? "Clear file \xB7 back to import" : ""), we = $e(ne, 1, "s-brand svelte-1n46o8q", null, we, { "s-brand-clickable": !!s(n) });
      }), ge("click", q, Q), R(C, q);
    };
    fe(xe, (C) => {
      N || C(Ae);
    });
  }
  var je = p(xe, 2);
  {
    var Ee = (C) => {
      var q = Kl(), ne = f(q);
      {
        var we = (_) => {
          var x = Yl(), Y = f(x);
          Za(Y, () => s(n).name, (F) => {
            var K = Gl(), ae = f(K);
            J(() => y(ae, `[ ${s(ce) ?? ""} ]`)), R(F, K);
          });
          var I = p(Y, 2);
          {
            var b = (F) => {
              var K = Vl(), ae = f(K);
              J(() => y(ae, s(ee))), R(F, K);
            };
            fe(I, (F) => {
              s(ee) && F(b);
            });
          }
          R(_, x);
        };
        fe(ne, (_) => {
          s(ce) && _(we);
        });
      }
      var De = p(ne, 2);
      {
        var Ve = (_) => {
          var x = Xl();
          R(_, x);
        };
        fe(De, (_) => {
          s(h) && _(Ve);
        });
      }
      var Ce = p(De, 2);
      ge("click", Ce, Q), R(C, q);
    }, Ne = (C) => {
      var q = Jl();
      R(C, q);
    };
    fe(je, (C) => {
      s(n) ? C(Ee) : C(Ne, -1);
    });
  }
  var Pe = p(je, 2);
  {
    var oe = (C) => {
      var q = Zl(), ne = f(q), we = f(ne);
      J(() => y(we, s(m) === "dark" ? "\u263C" : "\u263E")), ge("click", ne, T), R(C, q);
    };
    fe(Pe, (C) => {
      N || C(oe);
    });
  }
  var Me = p(ve, 2), Te = f(Me);
  zl(Te, { get file() {
    return s(n);
  }, get format() {
    return s(a);
  }, get parsing() {
    return s(h);
  } });
  var Ie = p(Te, 2), Oe = f(Ie);
  {
    var ke = (C) => {
      var q = Ql(), ne = f(q);
      let we;
      var De = p(ne, 2);
      let Ve;
      var Ce = p(De, 2);
      let _;
      var x = p(Ce, 2);
      let Y;
      var I = p(x, 2);
      let b;
      J(() => {
        ne.disabled = s(a) !== "elf", et(ne, "title", s(a) === "elf" ? "" : "INSPECT is ELF-only"), we = $e(ne, 1, "svelte-1n46o8q", null, we, { on: s(u) === "inspect" }), Ve = $e(De, 1, "svelte-1n46o8q", null, Ve, { on: s(u) === "hex" }), Ce.disabled = s(a) !== "wav", et(Ce, "title", s(a) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), _ = $e(Ce, 1, "svelte-1n46o8q", null, _, { on: s(u) === "wave" }), x.disabled = s(a) !== "gba", et(x, "title", s(a) === "gba" ? "" : "CART is GBA-only"), Y = $e(x, 1, "svelte-1n46o8q", null, Y, { on: s(u) === "cart" }), I.disabled = s(a) !== "gba", et(I, "title", s(a) === "gba" ? "" : "GAME is GBA-only"), b = $e(I, 1, "svelte-1n46o8q", null, b, { on: s(u) === "game" });
      }), ge("click", ne, () => d(u, "inspect")), ge("click", De, () => d(u, "hex")), ge("click", Ce, () => d(u, "wave")), ge("click", x, () => d(u, "cart")), ge("click", I, () => d(u, "game")), R(C, q);
    };
    fe(Oe, (C) => {
      s(n) && C(ke);
    });
  }
  var Le = p(Oe, 2), qe = f(Le);
  {
    var g = (C) => {
      Bi(C, { onfile: W });
    }, L = (C) => {
      var q = to(), ne = ot(q);
      {
        var we = (I) => {
          var b = $l(), F = f(b);
          J(() => y(F, `parse failed: ${s(v) ?? ""}`)), R(I, b);
        };
        fe(ne, (I) => {
          s(v) && I(we);
        });
      }
      var De = p(ne, 2);
      {
        var Ve = (I) => {
          var b = Un(), F = ot(b);
          {
            var K = (le) => {
              Qi(le, { get report() {
                return s(r);
              }, get strings() {
                return s(o);
              }, onJumpToOffset: X });
            }, ae = (le) => {
              var he = eo(), re = p(f(he)), Se = f(re);
              J(() => y(Se, s(a))), R(le, he);
            };
            fe(F, (le) => {
              s(r) ? le(K) : s(a) && s(a) !== "elf" && le(ae, 1);
            });
          }
          R(I, b);
        }, Ce = (I) => {
          {
            let b = It(() => s(E)?.follow && s(E)?.inCart ? s(E) : null);
            sl(I, { get bytes() {
              return s(n).bytes;
            }, get format() {
              return s(a);
            }, get jumpTo() {
              return s(M);
            }, get followTarget() {
              return s(b);
            } });
          }
        }, _ = (I) => {
          ul(I, { get bytes() {
            return s(n).bytes;
          } });
        }, x = (I) => {
          ml(I, { get bytes() {
            return s(n).bytes;
          } });
        }, Y = (I) => {
          Bl(I, { get bytes() {
            return s(n).bytes;
          }, get header() {
            return s(l);
          }, onPcUpdate: me });
        };
        fe(De, (I) => {
          s(u) === "inspect" ? I(Ve) : s(u) === "hex" ? I(Ce, 1) : s(u) === "wave" ? I(_, 2) : s(u) === "cart" ? I(x, 3) : s(u) === "game" && I(Y, 4);
        });
      }
      R(C, q);
    };
    fe(qe, (C) => {
      s(n) ? C(L, -1) : C(g);
    });
  }
  var z = p(Me, 2), te = f(z), pe = p(f(te), 1, true), $ = p(te, 2);
  {
    var de = (C) => {
      var q = no(), ne = f(q);
      J(() => y(ne, w[s(u)] ?? "")), R(C, q);
    };
    fe($, (C) => {
      s(n) && C(de);
    });
  }
  var ye = p($, 2), Fe = f(ye);
  J((C) => {
    ie = $e(H, 1, "app svelte-1n46o8q", null, ie, { embedded: N }), y(pe, s(n) ? N ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : s(A) ? N ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${s(O)}\u2588`), y(Fe, `MODULE \xB7 ${C ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => s(n) ? s(u).toUpperCase() : "EMPTY"]), R(e, S), bt();
}
$t(["click"]);
Ya(so, { target: document.getElementById("app") });
