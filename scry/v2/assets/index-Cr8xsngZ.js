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
const Ls = false;
var Nr = Array.isArray, Fs = Array.prototype.indexOf, rn = Array.prototype.includes, Un = Array.from, Ns = Object.defineProperty, mn = Object.getOwnPropertyDescriptor, Is = Object.getOwnPropertyDescriptors, Bs = Object.prototype, js = Array.prototype, Ir = Object.getPrototypeOf, gr = Object.isExtensible;
const Ds = () => {
};
function Ps(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Br() {
  var e, t, n = new Promise((a, r) => {
    e = a, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
function zs(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const a of e) if (n.push(a), n.length === t) break;
  return n;
}
const Ve = 2, sn = 4, qn = 8, jr = 1 << 24, gt = 16, _t = 32, Dt = 64, Qn = 128, it = 512, Pe = 1024, He = 2048, wt = 4096, Xe = 8192, lt = 16384, Zt = 32768, $n = 1 << 25, an = 65536, er = 1 << 17, Us = 1 << 18, fn = 1 << 19, qs = 1 << 20, mt = 1 << 25, Kt = 65536, Bn = 1 << 21, An = 1 << 22, Ft = 1 << 23, Ln = Symbol("$state"), Hs = Symbol(""), kt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Dr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ws() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Gs(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Vs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ys() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ks() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Js() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function $s() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ea = 1, ta = 2, Pr = 4, na = 8, ra = 16, sa = 1, aa = 2, ze = Symbol(), zr = "http://www.w3.org/1999/xhtml";
function ia() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function la() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ur(e) {
  return e === this.v;
}
function oa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function qr(e) {
  return !oa(e, this.v);
}
let ca = false, Ke = null;
function ln(e) {
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
function Hr() {
  return true;
}
let Ht = [];
function Wr() {
  var e = Ht;
  Ht = [], Ps(e);
}
function Nt(e) {
  if (Ht.length === 0 && !yn) {
    var t = Ht;
    queueMicrotask(() => {
      t === Ht && Wr();
    });
  }
  Ht.push(e);
}
function fa() {
  for (; Ht.length > 0; ) Wr();
}
function Gr(e) {
  var t = _e;
  if (t === null) return be.f |= Ft, e;
  if (!(t.f & Zt) && !(t.f & sn)) throw e;
  Lt(e, t);
}
function Lt(e, t) {
  for (; t !== null; ) {
    if (t.f & Qn) {
      if (!(t.f & Zt)) throw e;
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
const ua = -7169;
function Ie(e, t) {
  e.f = e.f & ua | t;
}
function or(e) {
  e.f & it || e.deps === null ? Ie(e, Pe) : Ie(e, wt);
}
function Vr(e) {
  if (e !== null) for (const t of e) !(t.f & Ve) || !(t.f & Kt) || (t.f ^= Kt, Vr(t.deps));
}
function Yr(e, t, n) {
  e.f & He ? t.add(e) : e.f & wt && n.add(e), Vr(e.deps), Ie(e, Pe);
}
const Ut = /* @__PURE__ */ new Set();
let ve = null, dt = null, tr = null, yn = false, Gn = false, nn = null, Fn = null;
var wr = 0;
let va = 1;
class Pt {
  id = va++;
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
      for (var r of a.d) Ie(r, He), n(r);
      for (r of a.m) Ie(r, wt), n(r);
    }
    this.#v.add(t);
  }
  #_() {
    if (wr++ > 1e3 && (Ut.delete(this), pa()), !this.#u()) {
      for (const o of this.#c) this.#f.delete(o), Ie(o, He), this.schedule(o);
      for (const o of this.#f) Ie(o, wt), this.schedule(o);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = nn = [], a = [], r = Fn = [];
    for (const o of t) try {
      this.#m(o, n, a);
    } catch (c) {
      throw Jr(o), c;
    }
    if (ve = null, r.length > 0) {
      var i = Pt.ensure();
      for (const o of r) i.schedule(o);
    }
    if (nn = null, Fn = null, this.#u() || this.#b()) {
      this.#h(a), this.#h(n);
      for (const [o, c] of this.#l) Kr(o, c);
    } else {
      this.#s.size === 0 && Ut.delete(this), this.#c.clear(), this.#f.clear();
      for (const o of this.#n) o(this);
      this.#n.clear(), xr(a), xr(n), this.#a?.resolve();
    }
    var l = ve;
    if (this.#t.length > 0) {
      const o = l ??= this;
      o.#t.push(...this.#t.filter((c) => !o.#t.includes(c)));
    }
    l !== null && (Ut.add(l), l.#_());
  }
  #m(t, n, a) {
    t.f ^= Pe;
    for (var r = t.first; r !== null; ) {
      var i = r.f, l = (i & (_t | Dt)) !== 0, o = l && (i & Pe) !== 0, c = o || (i & Xe) !== 0 || this.#l.has(r);
      if (!c && r.fn !== null) {
        l ? r.f ^= Pe : i & sn ? n.push(r) : Cn(r) && (i & gt && this.#f.add(r), cn(r));
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
    ve = this;
  }
  deactivate() {
    ve = null, dt = null;
  }
  flush() {
    try {
      Gn = true, ve = this, this.#_();
    } finally {
      wr = 0, tr = null, nn = null, Fn = null, Gn = false, ve = null, dt = null, Gt.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Ut.delete(this);
  }
  register_created_effect(t) {
    this.#i.push(t);
  }
  #y() {
    for (const u of Ut) {
      var t = u.id < this.id, n = [];
      for (const [m, [h, S]] of this.current) {
        if (u.current.has(m)) {
          var a = u.current.get(m)[0];
          if (t && h !== a) u.current.set(m, [h, S]);
          else continue;
        }
        n.push(m);
      }
      var r = [...u.current.keys()].filter((m) => !this.current.has(m));
      if (r.length === 0) t && u.discard();
      else if (n.length > 0) {
        if (t) for (const m of this.#v) u.unskip_effect(m, (h) => {
          h.f & (gt | An) ? u.schedule(h) : u.#h([h]);
        });
        u.activate();
        var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n) Xr(o, r, i, l);
        l = /* @__PURE__ */ new Map();
        var c = [...u.current.keys()].filter((m) => this.current.has(m) ? this.current.get(m)[0] !== m : true);
        for (const m of this.#i) !(m.f & (lt | Xe | er)) && cr(m, c, l) && (m.f & (An | gt) ? (Ie(m, He), u.schedule(m)) : u.#c.add(m));
        if (u.#t.length > 0) {
          u.apply();
          for (var v of u.#t) u.#m(v, [], []);
          u.#t = [];
        }
        u.deactivate();
      }
    }
    for (const u of Ut) u.#d.has(this) && (u.#d.delete(this), u.#d.size === 0 && !u.#u() && (u.activate(), u.#_()));
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
    if (ve === null) {
      const t = ve = new Pt();
      Gn || (Ut.add(ve), yn || Nt(() => {
        ve === t && t.flush();
      }));
    }
    return ve;
  }
  apply() {
    {
      dt = null;
      return;
    }
  }
  schedule(t) {
    if (tr = t, t.b?.is_pending && t.f & (sn | qn | jr) && !(t.f & Zt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var a = n.f;
      if (nn !== null && n === _e && (be === null || !(be.f & Ve))) return;
      if (a & (Dt | _t)) {
        if (!(a & Pe)) return;
        n.f ^= Pe;
      }
    }
    this.#t.push(n);
  }
}
function da(e) {
  var t = yn;
  yn = true;
  try {
    for (var n; ; ) {
      if (fa(), ve === null) return n;
      ve.flush();
    }
  } finally {
    yn = t;
  }
}
function pa() {
  try {
    Ks();
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
      if (!(a.f & (lt | Xe)) && Cn(a) && (At = /* @__PURE__ */ new Set(), cn(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && cs(a), At?.size > 0)) {
        Gt.clear();
        for (const r of At) {
          if (r.f & (lt | Xe)) continue;
          const i = [r];
          let l = r.parent;
          for (; l !== null; ) At.has(l) && (At.delete(l), i.push(l)), l = l.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const c = i[o];
            c.f & (lt | Xe) || cn(c);
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
    i & Ve ? Xr(r, t, n, a) : i & (An | gt) && !(i & He) && cr(r, t, a) && (Ie(r, He), fr(r));
  }
}
function cr(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null) for (const r of e.deps) {
    if (rn.call(t, r)) return true;
    if (r.f & Ve && cr(r, t, n)) return n.set(r, true), true;
  }
  return n.set(e, false), false;
}
function fr(e) {
  ve.schedule(e);
}
function Kr(e, t) {
  if (!(e.f & _t && e.f & Pe)) {
    e.f & He ? t.d.push(e) : e.f & wt && t.m.push(e), Ie(e, Pe);
    for (var n = e.first; n !== null; ) Kr(n, t), n = n.next;
  }
}
function Jr(e) {
  Ie(e, Pe);
  for (var t = e.first; t !== null; ) Jr(t), t = t.next;
}
function _a(e) {
  let t = 0, n = Jt(0), a;
  return () => {
    dr() && (s(n), pr(() => (t === 0 && (a = Tn(() => e(() => gn(n)))), t += 1, () => {
      Nt(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, gn(n));
      });
    })));
  };
}
var ha = an | fn;
function ba(e, t, n, a) {
  new ma(e, t, n, a);
}
class ma {
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
  #b = _a(() => (this.#u = Jt(this.#f), () => {
    this.#u = null;
  }));
  constructor(t, n, a, r) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var l = _e;
      l.b = this, l.f |= Qn, a(i);
    }, this.parent = _e.b, this.transform_error = r ?? this.parent?.transform_error ?? ((i) => i), this.#r = Wn(() => {
      this.#y();
    }, ha);
  }
  #_() {
    try {
      this.#a = at(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #m(t) {
    const n = this.#e.failed;
    n && (this.#i = at(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = at(() => t(this.#n)), Nt(() => {
      var n = this.#c = document.createDocumentFragment(), a = Mt();
      n.append(a), this.#a = this.#w(() => at(() => this.#s(a))), this.#l === 0 && (this.#n.before(n), this.#c = null, Vt(this.#t, () => {
        this.#t = null;
      }), this.#g(ve));
    }));
  }
  #y() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#f = 0, this.#a = at(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#c = document.createDocumentFragment();
        br(this.#a, t);
        const n = this.#e.pending;
        this.#t = at(() => n(this.#n));
      } else this.#g(ve);
    } catch (n) {
      this.error(n);
    }
  }
  #g(t) {
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
    xt(this.#r), ft(this.#r), ln(this.#r.ctx);
    try {
      return Pt.ensure(), t();
    } catch (i) {
      return Gr(i), null;
    } finally {
      xt(n), ft(a), ln(r);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#g(n), this.#t && Vt(this.#t, () => {
      this.#t = null;
    }), this.#c && (this.#n.before(this.#c), this.#c = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#f += t, !(!this.#u || this.#v) && (this.#v = true, Nt(() => {
      this.#v = false, this.#u && on(this.#u, this.#f);
    }));
  }
  get_effect_pending() {
    return this.#b(), s(this.#u);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    ve?.is_fork ? (this.#a && ve.skip_effect(this.#a), this.#t && ve.skip_effect(this.#t), this.#i && ve.skip_effect(this.#i), ve.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (Qe(this.#a), this.#a = null), this.#t && (Qe(this.#t), this.#t = null), this.#i && (Qe(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let a = this.#e.failed;
    var r = false, i = false;
    const l = () => {
      if (r) {
        la();
        return;
      }
      r = true, i && $s(), this.#i !== null && Vt(this.#i, () => {
        this.#i = null;
      }), this.#w(() => {
        this.#y();
      });
    }, o = (c) => {
      try {
        i = true, n?.(c, l), i = false;
      } catch (v) {
        Lt(v, this.#r && this.#r.parent);
      }
      a && (this.#i = this.#w(() => {
        try {
          return at(() => {
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
function ya(e, t, n, a) {
  const r = ur;
  var i = e.filter((h) => !h.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(r));
    return;
  }
  var l = _e, o = ga(), c = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((h) => h.promise)) : null;
  function v(h) {
    o();
    try {
      a(h);
    } catch (S) {
      l.f & lt || Lt(S, l);
    }
    jn();
  }
  if (n.length === 0) {
    c.then(() => v(t.map(r)));
    return;
  }
  var u = Zr();
  function m() {
    Promise.all(n.map((h) => wa(h))).then((h) => v([...t.map(r), ...h])).catch((h) => Lt(h, l)).finally(() => u());
  }
  c ? c.then(() => {
    o(), m(), jn();
  }) : m();
}
function ga() {
  var e = _e, t = be, n = Ke, a = ve;
  return function(i = true) {
    xt(e), ft(t), ln(n), i && !(e.f & lt) && (a?.activate(), a?.apply());
  };
}
function jn(e = true) {
  xt(null), ft(null), ln(null), e && ve?.deactivate();
}
function Zr() {
  var e = _e, t = e.b, n = ve, a = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(a, e), (r = false) => {
    t.update_pending_count(-1, n), n.decrement(a, e, r);
  };
}
function ur(e) {
  var t = Ve | He;
  return _e !== null && (_e.f |= fn), { ctx: Ke, deps: null, effects: null, equals: Ur, f: t, fn: e, reactions: null, rv: 0, v: ze, wv: 0, parent: _e, ac: null };
}
function wa(e, t, n) {
  let a = _e;
  a === null && Ws();
  var r = void 0, i = Jt(ze), l = !be, o = /* @__PURE__ */ new Map();
  return ja(() => {
    var c = _e, v = Br();
    r = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(jn);
    } catch (S) {
      v.reject(S), jn();
    }
    var u = ve;
    if (l) {
      if (c.f & Zt) var m = Zr();
      if (a.b.is_rendered()) o.get(u)?.reject(kt), o.delete(u);
      else {
        for (const S of o.values()) S.reject(kt);
        o.clear();
      }
      o.set(u, v);
    }
    const h = (S, x = void 0) => {
      if (m) {
        var O = x === kt;
        m(O);
      }
      if (!(x === kt || c.f & lt)) {
        if (u.activate(), x) i.f |= Ft, on(i, x);
        else {
          i.f & Ft && (i.f ^= Ft), on(i, S);
          for (const [E, H] of o) {
            if (o.delete(E), E === u) break;
            H.reject(kt);
          }
        }
        u.deactivate();
      }
    };
    v.promise.then(h, (S) => h(null, S || "unknown"));
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
function xa(e) {
  const t = ur(e);
  return t.equals = qr, t;
}
function Ea(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Qe(t[n]);
  }
}
function vr(e) {
  var t, n = _e, a = e.parent;
  if (!zt && a !== null && a.f & (lt | Xe)) return ia(), e.v;
  xt(a);
  try {
    e.f &= ~Kt, Ea(e), t = hs(e);
  } finally {
    xt(n);
  }
  return t;
}
function Qr(e) {
  var t = vr(e);
  if (!e.equals(t) && (e.wv = ps(), (!ve?.is_fork || e.deps === null) && (ve !== null ? ve.capture(e, t, true) : e.v = t, e.deps === null))) {
    Ie(e, Pe);
    return;
  }
  zt || (dt !== null ? (dr() || ve?.is_fork) && dt.set(e, t) : or(e));
}
function Aa(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(kt), t.teardown = Ds, t.ac = null, kn(t, 0), _r(t));
}
function $r(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && cn(t);
}
let nr = /* @__PURE__ */ new Set();
const Gt = /* @__PURE__ */ new Map();
let es = false;
function Jt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Ur, rv: 0, wv: 0 };
  return n;
}
function q(e, t) {
  const n = Jt(e);
  return vs(n), n;
}
function ka(e, t = false, n = true) {
  const a = Jt(e);
  return t || (a.equals = qr), a;
}
function d(e, t, n = false) {
  be !== null && (!pt || be.f & er) && Hr() && be.f & (Ve | gt | An | er) && (ct === null || !rn.call(ct, e)) && Qs();
  let a = n ? yt(t) : t;
  return on(e, a, Fn);
}
function on(e, t, n = null) {
  if (!e.equals(t)) {
    Gt.set(e, zt ? t : e.v);
    var a = Pt.ensure();
    if (a.capture(e, t), e.f & Ve) {
      const r = e;
      e.f & He && vr(r), dt === null && or(r);
    }
    e.wv = ps(), ts(e, He, n), _e !== null && _e.f & Pe && !(_e.f & (_t | Dt)) && (st === null ? za([e]) : st.push(e)), !a.is_fork && nr.size > 0 && !es && Sa();
  }
  return t;
}
function Sa() {
  es = false;
  for (const e of nr) e.f & Pe && Ie(e, wt), Cn(e) && cn(e);
  nr.clear();
}
function Ma(e, t = 1) {
  var n = s(e), a = t === 1 ? n++ : n--;
  return d(e, n), a;
}
function gn(e) {
  d(e, e.v + 1);
}
function ts(e, t, n) {
  var a = e.reactions;
  if (a !== null) for (var r = a.length, i = 0; i < r; i++) {
    var l = a[i], o = l.f, c = (o & He) === 0;
    if (c && Ie(l, t), o & Ve) {
      var v = l;
      dt?.delete(v), o & Kt || (o & it && (_e === null || !(_e.f & Bn)) && (l.f |= Kt), ts(v, wt, n));
    } else if (c) {
      var u = l;
      o & gt && At !== null && At.add(u), n !== null ? n.push(u) : fr(u);
    }
  }
}
function yt(e) {
  if (typeof e != "object" || e === null || Ln in e) return e;
  const t = Ir(e);
  if (t !== Bs && t !== js) return e;
  var n = /* @__PURE__ */ new Map(), a = Nr(e), r = q(0), i = Yt, l = (o) => {
    if (Yt === i) return o();
    var c = be, v = Yt;
    ft(null), Sr(i);
    var u = o();
    return ft(c), Sr(v), u;
  };
  return a && n.set("length", q(e.length)), new Proxy(e, { defineProperty(o, c, v) {
    (!("value" in v) || v.configurable === false || v.enumerable === false || v.writable === false) && Js();
    var u = n.get(c);
    return u === void 0 ? l(() => {
      var m = q(v.value);
      return n.set(c, m), m;
    }) : d(u, v.value, true), true;
  }, deleteProperty(o, c) {
    var v = n.get(c);
    if (v === void 0) {
      if (c in o) {
        const u = l(() => q(ze));
        n.set(c, u), gn(r);
      }
    } else d(v, ze), gn(r);
    return true;
  }, get(o, c, v) {
    if (c === Ln) return e;
    var u = n.get(c), m = c in o;
    if (u === void 0 && (!m || mn(o, c)?.writable) && (u = l(() => {
      var S = yt(m ? o[c] : ze), x = q(S);
      return x;
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
    if (v !== void 0 || _e !== null && (!u || mn(o, c)?.writable)) {
      v === void 0 && (v = l(() => {
        var h = u ? yt(o[c]) : ze, S = q(h);
        return S;
      }), n.set(c, v));
      var m = s(v);
      if (m === ze) return false;
    }
    return u;
  }, set(o, c, v, u) {
    var m = n.get(c), h = c in o;
    if (a && c === "length") for (var S = v; S < m.v; S += 1) {
      var x = n.get(S + "");
      x !== void 0 ? d(x, ze) : S in o && (x = l(() => q(ze)), n.set(S + "", x));
    }
    if (m === void 0) (!h || mn(o, c)?.writable) && (m = l(() => q(void 0)), d(m, yt(v)), n.set(c, m));
    else {
      h = m.v !== ze;
      var O = l(() => yt(v));
      d(m, O);
    }
    var E = Reflect.getOwnPropertyDescriptor(o, c);
    if (E?.set && E.set.call(u, v), !h) {
      if (a && typeof c == "string") {
        var H = n.get("length"), j = Number(c);
        Number.isInteger(j) && j >= H.v && d(H, j + 1);
      }
      gn(r);
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
    Zs();
  } });
}
var Er, ns, rs, ss;
function Ca() {
  if (Er === void 0) {
    Er = window, ns = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    rs = mn(t, "firstChild").get, ss = mn(t, "nextSibling").get, gr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), gr(n) && (n.__t = void 0);
  }
}
function Mt(e = "") {
  return document.createTextNode(e);
}
function Dn(e) {
  return rs.call(e);
}
function Mn(e) {
  return ss.call(e);
}
function f(e, t) {
  return Dn(e);
}
function ot(e, t = false) {
  {
    var n = Dn(e);
    return n instanceof Comment && n.data === "" ? Mn(n) : n;
  }
}
function p(e, t = 1, n = false) {
  let a = e;
  for (; t--; ) a = Mn(a);
  return a;
}
function Ta(e) {
  e.textContent = "";
}
function as() {
  return false;
}
function Ra(e, t, n) {
  return document.createElementNS(zr, e, void 0);
}
let Ar = false;
function Oa() {
  Ar || (Ar = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function Hn(e) {
  var t = be, n = _e;
  ft(null), xt(null);
  try {
    return e();
  } finally {
    ft(t), xt(n);
  }
}
function La(e, t, n, a = n) {
  e.addEventListener(t, () => Hn(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), a(true);
  } : e.__on_r = () => a(true), Oa();
}
function Fa(e) {
  _e === null && (be === null && Xs(), Ys()), zt && Vs();
}
function Na(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ct(e, t) {
  var n = _e;
  n !== null && n.f & Xe && (e |= Xe);
  var a = { ctx: Ke, deps: null, nodes: null, f: e | He | it, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  ve?.register_created_effect(a);
  var r = a;
  if (e & sn) nn !== null ? nn.push(a) : Pt.ensure().schedule(a);
  else if (t !== null) {
    try {
      cn(a);
    } catch (l) {
      throw Qe(a), l;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && !(r.f & fn) && (r = r.first, e & gt && e & an && r !== null && (r.f |= an));
  }
  if (r !== null && (r.parent = n, n !== null && Na(r, n), be !== null && be.f & Ve && !(e & Dt))) {
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
  return Ie(t, Pe), t.teardown = e, t;
}
function Ge(e) {
  Fa();
  var t = _e.f, n = !be && (t & _t) !== 0 && (t & Zt) === 0;
  if (n) {
    var a = Ke;
    (a.e ??= []).push(e);
  } else return ls(e);
}
function ls(e) {
  return Ct(sn | qs, e);
}
function Ia(e) {
  Pt.ensure();
  const t = Ct(Dt | fn, e);
  return (n = {}) => new Promise((a) => {
    n.outro ? Vt(t, () => {
      Qe(t), a(void 0);
    }) : (Qe(t), a(void 0));
  });
}
function Ba(e) {
  return Ct(sn, e);
}
function ja(e) {
  return Ct(An | fn, e);
}
function pr(e, t = 0) {
  return Ct(qn | t, e);
}
function K(e, t = [], n = [], a = []) {
  ya(a, t, n, (r) => {
    Ct(qn, () => e(...r.map(s)));
  });
}
function Wn(e, t = 0) {
  var n = Ct(gt | t, e);
  return n;
}
function at(e) {
  return Ct(_t | fn, e);
}
function os(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = zt, a = be;
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
    r !== null && Hn(() => {
      r.abort(kt);
    });
    var a = n.next;
    n.f & Dt ? n.parent = null : Qe(n, t), n = a;
  }
}
function Da(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & _t || Qe(t), t = n;
  }
}
function Qe(e, t = true) {
  var n = false;
  (t || e.f & Us) && e.nodes !== null && e.nodes.end !== null && (Pa(e.nodes.start, e.nodes.end), n = true), Ie(e, $n), _r(e, t && !n), kn(e, 0);
  var a = e.nodes && e.nodes.t;
  if (a !== null) for (const i of a) i.stop();
  os(e), e.f ^= $n, e.f |= lt;
  var r = e.parent;
  r !== null && r.first !== null && cs(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Pa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : Mn(e);
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
    n && Qe(e), t && t();
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
      if (!(r.f & Dt)) {
        var l = (r.f & an) !== 0 || (r.f & _t) !== 0 && (e.f & gt) !== 0;
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
    e.f ^= Xe, e.f & Pe || (Ie(e, He), Pt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, r = (n.f & an) !== 0 || (n.f & _t) !== 0;
      us(n, r ? t : false), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const l of i) (l.is_global || t) && l.in();
  }
}
function br(e, t) {
  if (e.nodes) for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
    var r = n === a ? null : Mn(n);
    t.append(n), n = r;
  }
}
let Nn = false, zt = false;
function kr(e) {
  zt = e;
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
let Je = null, $e = 0, st = null;
function za(e) {
  st = e;
}
let ds = 1, Wt = 0, Yt = Wt;
function Sr(e) {
  Yt = e;
}
function ps() {
  return ++ds;
}
function Cn(e) {
  var t = e.f;
  if (t & He) return true;
  if (t & Ve && (e.f &= ~Kt), t & wt) {
    for (var n = e.deps, a = n.length, r = 0; r < a; r++) {
      var i = n[r];
      if (Cn(i) && Qr(i), i.wv > e.wv) return true;
    }
    t & it && dt === null && Ie(e, Pe);
  }
  return false;
}
function _s(e, t, n = true) {
  var a = e.reactions;
  if (a !== null && !(ct !== null && rn.call(ct, e))) for (var r = 0; r < a.length; r++) {
    var i = a[r];
    i.f & Ve ? _s(i, t, false) : t === i && (n ? Ie(i, He) : i.f & Pe && Ie(i, wt), fr(i));
  }
}
function hs(e) {
  var t = Je, n = $e, a = st, r = be, i = ct, l = Ke, o = pt, c = Yt, v = e.f;
  Je = null, $e = 0, st = null, be = v & (_t | Dt) ? null : e, ct = null, ln(e.ctx), pt = false, Yt = ++Wt, e.ac !== null && (Hn(() => {
    e.ac.abort(kt);
  }), e.ac = null);
  try {
    e.f |= Bn;
    var u = e.fn, m = u();
    e.f |= Zt;
    var h = e.deps, S = ve?.is_fork;
    if (Je !== null) {
      var x;
      if (S || kn(e, $e), h !== null && $e > 0) for (h.length = $e + Je.length, x = 0; x < Je.length; x++) h[$e + x] = Je[x];
      else e.deps = h = Je;
      if (dr() && e.f & it) for (x = $e; x < h.length; x++) (h[x].reactions ??= []).push(e);
    } else !S && h !== null && $e < h.length && (kn(e, $e), h.length = $e);
    if (Hr() && st !== null && !pt && h !== null && !(e.f & (Ve | wt | He))) for (x = 0; x < st.length; x++) _s(st[x], e);
    if (r !== null && r !== e) {
      if (Wt++, r.deps !== null) for (let O = 0; O < n; O += 1) r.deps[O].rv = Wt;
      if (t !== null) for (const O of t) O.rv = Wt;
      st !== null && (a === null ? a = st : a.push(...st));
    }
    return e.f & Ft && (e.f ^= Ft), m;
  } catch (O) {
    return Gr(O);
  } finally {
    e.f ^= Bn, Je = t, $e = n, st = a, be = r, ct = i, ln(l), pt = o, Yt = c;
  }
}
function Ua(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Fs.call(n, e);
    if (a !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[a] = n[r], n.pop());
    }
  }
  if (n === null && t.f & Ve && (Je === null || !rn.call(Je, t))) {
    var i = t;
    i.f & it && (i.f ^= it, i.f &= ~Kt), i.v !== ze && or(i), Aa(i), kn(i, 0);
  }
}
function kn(e, t) {
  var n = e.deps;
  if (n !== null) for (var a = t; a < n.length; a++) Ua(e, n[a]);
}
function cn(e) {
  var t = e.f;
  if (!(t & lt)) {
    Ie(e, Pe);
    var n = _e, a = Nn;
    _e = e, Nn = true;
    try {
      t & (gt | jr) ? Da(e) : _r(e), os(e);
      var r = hs(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = ds;
      var i;
      Ls && ca && e.f & He && e.deps;
    } finally {
      Nn = a, _e = n;
    }
  }
}
async function qa() {
  await Promise.resolve(), da();
}
function s(e) {
  var t = e.f, n = (t & Ve) !== 0;
  if (be !== null && !pt) {
    var a = _e !== null && (_e.f & lt) !== 0;
    if (!a && (ct === null || !rn.call(ct, e))) {
      var r = be.deps;
      if (be.f & Bn) e.rv < Wt && (e.rv = Wt, Je === null && r !== null && r[$e] === e ? $e++ : Je === null ? Je = [e] : Je.push(e));
      else {
        (be.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [be] : rn.call(i, be) || i.push(be);
      }
    }
  }
  if (zt && Gt.has(e)) return Gt.get(e);
  if (n) {
    var l = e;
    if (zt) {
      var o = l.v;
      return (!(l.f & Pe) && l.reactions !== null || ms(l)) && (o = vr(l)), Gt.set(l, o), o;
    }
    var c = (l.f & it) === 0 && !pt && be !== null && (Nn || (be.f & it) !== 0), v = (l.f & Zt) === 0;
    Cn(l) && (c && (l.f |= it), Qr(l)), c && !v && ($r(l), bs(l));
  }
  if (dt?.has(e)) return dt.get(e);
  if (e.f & Ft) throw e.v;
  return e.v;
}
function bs(e) {
  if (e.f |= it, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & Ve && !(t.f & it) && ($r(t), bs(t));
}
function ms(e) {
  if (e.v === ze) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (Gt.has(t) || t.f & Ve && ms(t)) return true;
  return false;
}
function Tn(e) {
  var t = pt;
  try {
    return pt = true, e();
  } finally {
    pt = t;
  }
}
const Ha = ["touchstart", "touchmove"];
function Wa(e) {
  return Ha.includes(e);
}
const dn = Symbol("events"), ys = /* @__PURE__ */ new Set(), rr = /* @__PURE__ */ new Set();
function Ga(e, t, n, a = {}) {
  function r(i) {
    if (a.capture || sr.call(t, i), !i.cancelBubble) return Hn(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Nt(() => {
    t.addEventListener(e, r, a);
  }) : t.addEventListener(e, r, a), r;
}
function Bt(e, t, n, a, r) {
  var i = { capture: a, passive: r }, l = Ga(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && is(() => {
    t.removeEventListener(e, l, i);
  });
}
function me(e, t, n) {
  (t[dn] ??= {})[e] = n;
}
function Qt(e) {
  for (var t = 0; t < e.length; t++) ys.add(e[t]);
  for (var n of rr) n(e);
}
let Mr = null;
function sr(e) {
  var t = this, n = t.ownerDocument, a = e.type, r = e.composedPath?.() || [], i = r[0] || e.target;
  Mr = e;
  var l = 0, o = Mr === e && e[dn];
  if (o) {
    var c = r.indexOf(o);
    if (c !== -1 && (t === document || t === window)) {
      e[dn] = t;
      return;
    }
    var v = r.indexOf(t);
    if (v === -1) return;
    c <= v && (l = c);
  }
  if (i = r[l] || e.target, i !== t) {
    Ns(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var u = be, m = _e;
    ft(null), xt(null);
    try {
      for (var h, S = []; i !== null; ) {
        var x = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var O = i[dn]?.[a];
          O != null && (!i.disabled || e.target === i) && O.call(i, e);
        } catch (E) {
          h ? S.push(E) : h = E;
        }
        if (e.cancelBubble || x === t || x === null) break;
        i = x;
      }
      if (h) {
        for (let E of S) queueMicrotask(() => {
          throw E;
        });
        throw h;
      }
    } finally {
      e[dn] = t, delete e.currentTarget, ft(u), xt(m);
    }
  }
}
const Va = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Ya(e) {
  return Va?.createHTML(e) ?? e;
}
function Xa(e) {
  var t = Ra("template");
  return t.innerHTML = Ya(e.replaceAll("<!>", "<!---->")), t.content;
}
function Pn(e, t) {
  var n = _e;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function z(e, t) {
  var n = (t & sa) !== 0, a = (t & aa) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Xa(i ? e : "<!>" + e), n || (r = Dn(r)));
    var l = a || ns ? document.importNode(r, true) : r.cloneNode(true);
    if (n) {
      var o = Dn(l), c = l.lastChild;
      Pn(o, c);
    } else Pn(l, l);
    return l;
  };
}
function en(e = "") {
  {
    var t = Mt(e + "");
    return Pn(t, t), t;
  }
}
function zn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Mt();
  return e.append(t, n), Pn(t, n), e;
}
function R(e, t) {
  e !== null && e.before(t);
}
function w(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ka(e, t) {
  return Ja(e, t);
}
const On = /* @__PURE__ */ new Map();
function Ja(e, { target: t, anchor: n, props: a = {}, events: r, context: i, intro: l = true, transformError: o }) {
  Ca();
  var c = void 0, v = Ia(() => {
    var u = n ?? t.appendChild(Mt());
    ba(u, { pending: () => {
    } }, (S) => {
      ht({});
      var x = Ke;
      i && (x.c = i), r && (a.$$events = r), c = e(S, a) || {}, bt();
    }, o);
    var m = /* @__PURE__ */ new Set(), h = (S) => {
      for (var x = 0; x < S.length; x++) {
        var O = S[x];
        if (!m.has(O)) {
          m.add(O);
          var E = Wa(O);
          for (const g of [t, document]) {
            var H = On.get(g);
            H === void 0 && (H = /* @__PURE__ */ new Map(), On.set(g, H));
            var j = H.get(O);
            j === void 0 ? (g.addEventListener(O, sr, { passive: E }), H.set(O, 1)) : H.set(O, j + 1);
          }
        }
      }
    };
    return h(Un(ys)), rr.add(h), () => {
      for (var S of m) for (const E of [t, document]) {
        var x = On.get(E), O = x.get(S);
        --O == 0 ? (E.removeEventListener(S, sr), x.delete(S), x.size === 0 && On.delete(E)) : x.set(S, O);
      }
      rr.delete(h), u !== n && u.parentNode?.removeChild(u);
    };
  });
  return Za.set(c, v), c;
}
let Za = /* @__PURE__ */ new WeakMap();
class gs {
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
        o && (Qe(o.effect), this.#e.delete(l));
      }
      for (const [i, l] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const o = () => {
          if (Array.from(this.#n.values()).includes(i)) {
            var v = document.createDocumentFragment();
            br(l, v), v.append(Mt()), this.#e.set(i, { effect: l, fragment: v });
          } else Qe(l);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !a ? (this.#s.add(i), Vt(l, o, false)) : o();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [a, r] of this.#e) n.includes(a) || (Qe(r.effect), this.#e.delete(a));
  };
  ensure(t, n) {
    var a = ve, r = as();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (r) {
      var i = document.createDocumentFragment(), l = Mt();
      i.append(l), this.#e.set(t, { effect: at(() => n(l)), fragment: i });
    } else this.#o.set(t, at(() => n(this.anchor)));
    if (this.#n.set(a, t), r) {
      for (const [o, c] of this.#o) o === t ? a.unskip_effect(c) : a.skip_effect(c);
      for (const [o, c] of this.#e) o === t ? a.unskip_effect(c.effect) : a.skip_effect(c.effect);
      a.oncommit(this.#a), a.ondiscard(this.#t);
    } else this.#a(a);
  }
}
function ue(e, t, n = false) {
  var a = new gs(e), r = n ? an : 0;
  function i(l, o) {
    a.ensure(l, o);
  }
  Wn(() => {
    var l = false;
    t((o, c = 0) => {
      l = true, i(c, o);
    }), l || i(-1, null);
  }, r);
}
const Qa = Symbol("NaN");
function $a(e, t, n) {
  var a = new gs(e);
  Wn(() => {
    var r = t();
    r !== r && (r = Qa), a.ensure(r, n);
  });
}
function tt(e, t) {
  return t;
}
function ei(e, t, n) {
  for (var a = [], r = t.length, i, l = t.length, o = 0; o < r; o++) {
    let m = t[o];
    Vt(m, () => {
      if (i) {
        if (i.pending.delete(m), i.done.add(m), i.pending.size === 0) {
          var h = e.outrogroups;
          ar(e, Un(i.done)), h.delete(i), h.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var c = a.length === 0 && n !== null;
    if (c) {
      var v = n, u = v.parentNode;
      Ta(u), u.append(v), e.items.clear();
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
    } else Qe(t[r], n);
  }
}
var Cr;
function nt(e, t, n, a, r, i = null) {
  var l = e, o = /* @__PURE__ */ new Map(), c = (t & Pr) !== 0;
  if (c) {
    var v = e;
    l = v.appendChild(Mt());
  }
  var u = null, m = xa(() => {
    var g = n();
    return Nr(g) ? g : g == null ? [] : Un(g);
  }), h, S = /* @__PURE__ */ new Map(), x = true;
  function O(g) {
    j.effect.f & lt || (j.pending.delete(g), j.fallback = u, ti(j, h, l, t, a), u !== null && (h.length === 0 ? u.f & mt ? (u.f ^= mt, pn(u, null, l)) : hr(u) : Vt(u, () => {
      u = null;
    })));
  }
  function E(g) {
    j.pending.delete(g);
  }
  var H = Wn(() => {
    h = s(m);
    for (var g = h.length, N = /* @__PURE__ */ new Set(), I = ve, M = as(), W = 0; W < g; W += 1) {
      var ee = h[W], ie = a(ee, W), J = x ? null : o.get(ie);
      J ? (J.v && on(J.v, ee), J.i && on(J.i, W), M && I.unskip_effect(J.e)) : (J = ni(o, x ? l : Cr ??= Mt(), ee, ie, W, r, t, n), x || (J.e.f |= mt), o.set(ie, J)), N.add(ie);
    }
    if (g === 0 && i && !u && (x ? u = at(() => i(l)) : (u = at(() => i(Cr ??= Mt())), u.f |= mt)), g > N.size && Gs(), !x) if (S.set(I, N), M) {
      for (const [ye, B] of o) N.has(ye) || I.skip_effect(B.e);
      I.oncommit(O), I.ondiscard(E);
    } else O(I);
    s(m);
  }), j = { effect: H, items: o, pending: S, outrogroups: null, fallback: u };
  x = false;
}
function vn(e) {
  for (; e !== null && !(e.f & _t); ) e = e.next;
  return e;
}
function ti(e, t, n, a, r) {
  var i = (a & na) !== 0, l = t.length, o = e.items, c = vn(e.effect.first), v, u = null, m, h = [], S = [], x, O, E, H;
  if (i) for (H = 0; H < l; H += 1) x = t[H], O = r(x, H), E = o.get(O).e, E.f & mt || (E.nodes?.a?.measure(), (m ??= /* @__PURE__ */ new Set()).add(E));
  for (H = 0; H < l; H += 1) {
    if (x = t[H], O = r(x, H), E = o.get(O).e, e.outrogroups !== null) for (const J of e.outrogroups) J.pending.delete(E), J.done.delete(E);
    if (E.f & Xe && (hr(E), i && (E.nodes?.a?.unfix(), (m ??= /* @__PURE__ */ new Set()).delete(E))), E.f & mt) if (E.f ^= mt, E === c) pn(E, null, n);
    else {
      var j = u ? u.next : c;
      E === e.effect.last && (e.effect.last = E.prev), E.prev && (E.prev.next = E.next), E.next && (E.next.prev = E.prev), Rt(e, u, E), Rt(e, E, j), pn(E, j, n), u = E, h = [], S = [], c = vn(u.next);
      continue;
    }
    if (E !== c) {
      if (v !== void 0 && v.has(E)) {
        if (h.length < S.length) {
          var g = S[0], N;
          u = g.prev;
          var I = h[0], M = h[h.length - 1];
          for (N = 0; N < h.length; N += 1) pn(h[N], g, n);
          for (N = 0; N < S.length; N += 1) v.delete(S[N]);
          Rt(e, I.prev, M.next), Rt(e, u, I), Rt(e, M, g), c = g, u = M, H -= 1, h = [], S = [];
        } else v.delete(E), pn(E, c, n), Rt(e, E.prev, E.next), Rt(e, E, u === null ? e.effect.first : u.next), Rt(e, u, E), u = E;
        continue;
      }
      for (h = [], S = []; c !== null && c !== E; ) (v ??= /* @__PURE__ */ new Set()).add(c), S.push(c), c = vn(c.next);
      if (c === null) continue;
    }
    E.f & mt || h.push(E), u = E, c = vn(E.next);
  }
  if (e.outrogroups !== null) {
    for (const J of e.outrogroups) J.pending.size === 0 && (ar(e, Un(J.done)), e.outrogroups?.delete(J));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || v !== void 0) {
    var W = [];
    if (v !== void 0) for (E of v) E.f & Xe || W.push(E);
    for (; c !== null; ) !(c.f & Xe) && c !== e.fallback && W.push(c), c = vn(c.next);
    var ee = W.length;
    if (ee > 0) {
      var ie = a & Pr && l === 0 ? n : null;
      if (i) {
        for (H = 0; H < ee; H += 1) W[H].nodes?.a?.measure();
        for (H = 0; H < ee; H += 1) W[H].nodes?.a?.fix();
      }
      ei(e, W, ie);
    }
  }
  i && Nt(() => {
    if (m !== void 0) for (E of m) E.nodes?.a?.apply();
  });
}
function ni(e, t, n, a, r, i, l, o) {
  var c = l & ea ? l & ra ? Jt(n) : ka(n, false, false) : null, v = l & ta ? Jt(r) : null;
  return { v: c, i: v, e: at(() => (i(t, c ?? n, v ?? r, o), () => {
    e.delete(a);
  })) };
}
function pn(e, t, n) {
  if (e.nodes) for (var a = e.nodes.start, r = e.nodes.end, i = t && !(t.f & mt) ? t.nodes.start : n; a !== null; ) {
    var l = Mn(a);
    if (i.before(a), a === r) return;
    a = l;
  }
}
function Rt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const Tr = [...` 	
\r\f\xA0\v\uFEFF`];
function ri(e, t, n) {
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
function si(e, t) {
  return e == null ? null : String(e);
}
function et(e, t, n, a, r, i) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var o = ri(n, a, i);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (i && r !== i) for (var c in i) {
    var v = !!i[c];
    (r == null || v !== !!r[c]) && e.classList.toggle(c, v);
  }
  return i;
}
function Sn(e, t, n, a) {
  var r = e.__style;
  if (r !== t) {
    var i = si(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return a;
}
const ai = Symbol("is custom element"), ii = Symbol("is html");
function Ze(e, t, n, a) {
  var r = li(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[Hs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && oi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function li(e) {
  return e.__attributes ??= { [ai]: e.nodeName.includes("-"), [ii]: e.namespaceURI === zr };
}
var Rr = /* @__PURE__ */ new Map();
function oi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Rr.get(t);
  if (n) return n;
  Rr.set(t, n = []);
  for (var a, r = e, i = Element.prototype; i !== r; ) {
    a = Is(r);
    for (var l in a) a[l].set && n.push(l);
    r = Ir(r);
  }
  return n;
}
function ws(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  La(e, "input", async (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = Vn(e) ? Yn(i) : i, n(i), ve !== null && a.add(ve), await qa(), i !== (i = t())) {
      var l = e.selectionStart, o = e.selectionEnd, c = e.value.length;
      if (e.value = i ?? "", o !== null) {
        var v = e.value.length;
        l === o && o === c && v > c ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = l, e.selectionEnd = Math.min(o, v));
      }
    }
  }), Tn(t) == null && e.value && (n(Vn(e) ? Yn(e.value) : e.value), ve !== null && a.add(ve)), pr(() => {
    var r = t();
    if (e === document.activeElement) {
      var i = ve;
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
function Or(e, t) {
  return e === t || e?.[Ln] === t;
}
function jt(e = {}, t, n, a) {
  var r = Ke.r, i = _e;
  return Ba(() => {
    var l, o;
    return pr(() => {
      l = o, o = [], Tn(() => {
        e !== n(...o) && (t(e, ...o), l && Or(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let c = i;
      for (; c !== r && c.parent !== null && c.parent.f & $n; ) c = c.parent;
      const v = () => {
        o && Or(n(...o), e) && t(null, ...o);
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
  Ke === null && Dr(), Ge(() => {
    const t = Tn(e);
    if (typeof t == "function") return t;
  });
}
function yr(e) {
  Ke === null && Dr(), mr(() => () => Tn(e));
}
const ci = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ci);
function fi() {
  Z._start();
}
function ui(e) {
  try {
    const r = Z.__wbindgen_add_to_stack_pointer(-16), i = $t(e, Z.__wbindgen_export), l = ut;
    Z.decode_wav(r, i, l);
    var t = Re().getInt32(r + 4 * 0, true), n = Re().getInt32(r + 4 * 1, true), a = Re().getInt32(r + 4 * 2, true);
    if (a) throw rt(n);
    return rt(t);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function vi(e) {
  let t, n;
  try {
    const i = Z.__wbindgen_add_to_stack_pointer(-16), l = $t(e, Z.__wbindgen_export), o = ut;
    Z.detect_format(i, l, o);
    var a = Re().getInt32(i + 4 * 0, true), r = Re().getInt32(i + 4 * 1, true);
    return t = a, n = r, hn(a, r);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16), Z.__wbindgen_export3(t, n, 1);
  }
}
function di(e, t) {
  try {
    const i = Z.__wbindgen_add_to_stack_pointer(-16), l = $t(e, Z.__wbindgen_export), o = ut;
    Z.entropy_blocks(i, l, o, t);
    var n = Re().getInt32(i + 4 * 0, true), a = Re().getInt32(i + 4 * 1, true), r = yi(n, a).slice();
    return Z.__wbindgen_export3(n, a * 4, 4), r;
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function pi(e, t) {
  try {
    const i = Z.__wbindgen_add_to_stack_pointer(-16), l = $t(e, Z.__wbindgen_export), o = ut;
    Z.extract_strings(i, l, o, t);
    var n = Re().getInt32(i + 4 * 0, true), a = Re().getInt32(i + 4 * 1, true), r = Re().getInt32(i + 4 * 2, true);
    if (r) throw rt(a);
    return rt(n);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function _i(e, t, n) {
  try {
    const l = Z.__wbindgen_add_to_stack_pointer(-16), o = $t(e, Z.__wbindgen_export), c = ut;
    Z.hex_rows(l, o, c, t, n);
    var a = Re().getInt32(l + 4 * 0, true), r = Re().getInt32(l + 4 * 1, true), i = gi(a, r).slice();
    return Z.__wbindgen_export3(a, r * 4, 4), i;
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function hi(e) {
  try {
    const r = Z.__wbindgen_add_to_stack_pointer(-16), i = $t(e, Z.__wbindgen_export), l = ut;
    Z.parse_elf(r, i, l);
    var t = Re().getInt32(r + 4 * 0, true), n = Re().getInt32(r + 4 * 1, true), a = Re().getInt32(r + 4 * 2, true);
    if (a) throw rt(n);
    return rt(t);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function bi(e) {
  try {
    const r = Z.__wbindgen_add_to_stack_pointer(-16), i = $t(e, Z.__wbindgen_export), l = ut;
    Z.parse_gba(r, i, l);
    var t = Re().getInt32(r + 4 * 0, true), n = Re().getInt32(r + 4 * 1, true), a = Re().getInt32(r + 4 * 2, true);
    if (a) throw rt(n);
    return rt(t);
  } finally {
    Z.__wbindgen_add_to_stack_pointer(16);
  }
}
function xs() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const a = Error(hn(t, n));
    return Ot(a);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const a = String(tn(n)), r = Lr(a, Z.__wbindgen_export, Z.__wbindgen_export2), i = ut;
    Re().setInt32(t + 4, i, true), Re().setInt32(t + 0, r, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(hn(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let a, r;
    try {
      a = t, r = n, console.error(hn(t, n));
    } finally {
      Z.__wbindgen_export3(a, r, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return Ot(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return Ot(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return Ot(t);
  }, __wbg_set_6be42768c690e380: function(t, n, a) {
    tn(t)[rt(n)] = rt(a);
  }, __wbg_set_78ea6a19f4818587: function(t, n, a) {
    tn(t)[n >>> 0] = rt(a);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const a = tn(n).stack, r = Lr(a, Z.__wbindgen_export, Z.__wbindgen_export2), i = ut;
    Re().setInt32(t + 4, i, true), Re().setInt32(t + 0, r, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return Ot(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const a = hn(t, n);
    return Ot(a);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return Ot(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = tn(t);
    return Ot(n);
  }, __wbindgen_object_drop_ref: function(t) {
    rt(t);
  } } };
}
function Ot(e) {
  xn === St.length && St.push(St.length + 1);
  const t = xn;
  return xn = St[t], St[t] = e, t;
}
function mi(e) {
  e < 1028 || (St[e] = xn, xn = e);
}
function yi(e, t) {
  return e = e >>> 0, wi().subarray(e / 4, e / 4 + t);
}
function gi(e, t) {
  e = e >>> 0;
  const n = Re(), a = [];
  for (let r = e; r < e + 4 * t; r += 4) a.push(rt(n.getUint32(r, true)));
  return a;
}
let qt = null;
function Re() {
  return (qt === null || qt.buffer.detached === true || qt.buffer.detached === void 0 && qt.buffer !== Z.memory.buffer) && (qt = new DataView(Z.memory.buffer)), qt;
}
let _n = null;
function wi() {
  return (_n === null || _n.byteLength === 0) && (_n = new Float32Array(Z.memory.buffer)), _n;
}
function hn(e, t) {
  return Ei(e >>> 0, t);
}
let bn = null;
function wn() {
  return (bn === null || bn.byteLength === 0) && (bn = new Uint8Array(Z.memory.buffer)), bn;
}
function tn(e) {
  return St[e];
}
let St = new Array(1024).fill(void 0);
St.push(void 0, null, true, false);
let xn = St.length;
function $t(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return wn().set(e, n / 1), ut = e.length, n;
}
function Lr(e, t, n) {
  if (n === void 0) {
    const o = En.encode(e), c = t(o.length, 1) >>> 0;
    return wn().subarray(c, c + o.length).set(o), ut = o.length, c;
  }
  let a = e.length, r = t(a, 1) >>> 0;
  const i = wn();
  let l = 0;
  for (; l < a; l++) {
    const o = e.charCodeAt(l);
    if (o > 127) break;
    i[r + l] = o;
  }
  if (l !== a) {
    l !== 0 && (e = e.slice(l)), r = n(r, a, a = l + e.length * 3, 1) >>> 0;
    const o = wn().subarray(r + l, r + a), c = En.encodeInto(e, o);
    l += c.written, r = n(r, a, l, 1) >>> 0;
  }
  return ut = l, r;
}
function rt(e) {
  const t = tn(e);
  return mi(e), t;
}
let In = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
In.decode();
const xi = 2146435072;
let Xn = 0;
function Ei(e, t) {
  return Xn += t, Xn >= xi && (In = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), In.decode(), Xn = t), In.decode(wn().subarray(e, e + t));
}
const En = new TextEncoder();
"encodeInto" in En || (En.encodeInto = function(e, t) {
  const n = En.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let ut = 0, Z;
function Es(e, t) {
  return Z = e.exports, qt = null, _n = null, bn = null, Z.__wbindgen_start(), Z;
}
async function Ai(e, t) {
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
function ki(e) {
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
  const { instance: n, module: a } = await Ai(await e, t);
  return Es(n);
}
const Si = Object.freeze(Object.defineProperty({ __proto__: null, _start: fi, decode_wav: ui, default: As, detect_format: vi, entropy_blocks: di, extract_strings: pi, hex_rows: _i, initSync: ki, parse_elf: hi, parse_gba: bi }, Symbol.toStringTag, { value: "Module" }));
let Kn = null;
function Rn() {
  return Kn || (Kn = As()), Kn.then(() => Si);
}
const Mi = "scry-theme";
function ks() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ci() {
  const e = ks() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(Mi, e);
  } catch {
  }
  return e;
}
const ir = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Jn = 65536, Zn = ir.length * 4;
function Ss() {
  const n = 84 + Zn, a = new ArrayBuffer(n), r = new DataView(a), i = new Uint8Array(a);
  i[0] = 127, i[1] = 69, i[2] = 76, i[3] = 70, i[4] = 1, i[5] = 1, i[6] = 1, r.setUint16(16, 2, true), r.setUint16(18, 243, true), r.setUint32(20, 1, true), r.setUint32(24, Jn, true), r.setUint32(28, 52, true), r.setUint32(32, 0, true), r.setUint32(36, 0, true), r.setUint16(40, 52, true), r.setUint16(42, 32, true), r.setUint16(44, 1, true), r.setUint16(46, 0, true), r.setUint16(48, 0, true), r.setUint16(50, 0, true), r.setUint32(52, 1, true), r.setUint32(56, 84, true), r.setUint32(60, Jn, true), r.setUint32(64, Jn, true), r.setUint32(68, Zn, true), r.setUint32(72, Zn, true), r.setUint32(76, 5, true), r.setUint32(80, 4096, true);
  for (let l = 0; l < ir.length; l++) r.setUint32(84 + l * 4, ir[l], true);
  return new Uint8Array(a);
}
const Ms = "demo-rv32-spi-i2c.elf", Fr = 64 * 1024 * 1024;
function lr(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function Cs(e) {
  if (!e) throw new Error("no file");
  if (e.size > Fr) throw new Error(`file too large (${lr(e.size)} > ${lr(Fr)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var Ti = z('<span class="bar svelte-1i6c60u"></span>'), Ri = z('<span class="bar shimmer svelte-1i6c60u"></span>'), Oi = z('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Li = z('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Fi = z('<p class="loading svelte-1i6c60u"> </p>'), Ni = z('<p class="err svelte-1i6c60u"> </p>'), Ii = z('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Bi(e, t) {
  ht(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let a = q(false), r = q(""), i = q(yt([])), l = q(""), o = q(yt({}));
  async function c(B) {
    d(r, "");
    try {
      const Y = await Cs(B);
      t.onfile?.(Y);
    } catch (Y) {
      d(r, Y.message || String(Y), true);
    }
  }
  function v(B) {
    B.preventDefault(), d(a, false);
    const Y = B.dataTransfer?.files?.[0];
    Y && c(Y);
  }
  function u(B) {
    B.preventDefault(), d(a, true);
  }
  function m() {
    d(a, false);
  }
  function h(B) {
    const Y = B.target.files?.[0];
    Y && c(Y);
  }
  async function S(B) {
    if (!n.test(B)) {
      d(r, `sample blocked: bad name "${B}"`);
      return;
    }
    d(r, ""), d(l, `fetching ${B}\u2026`);
    try {
      const Y = await fetch(`../v1/samples/${encodeURIComponent(B)}`);
      if (!Y.ok) {
        d(r, `fetch failed: ${Y.status}`), d(l, "");
        return;
      }
      d(l, `reading ${B}\u2026`);
      const se = new Uint8Array(await Y.arrayBuffer());
      d(l, ""), t.onfile?.({ name: B, bytes: se });
    } catch (Y) {
      d(r, String(Y), true), d(l, "");
    }
  }
  function x() {
    d(r, ""), t.onfile?.({ name: Ms, bytes: Ss() });
  }
  Ge(() => {
    let B = false;
    return (async () => {
      try {
        const Y = await fetch("../v1/samples/manifest.json");
        if (!Y.ok) return;
        const se = await Y.json();
        if (B || !Array.isArray(se)) return;
        d(i, se, true);
        const fe = await Rn();
        if (B) return;
        await Promise.all(se.map(async (C) => {
          if (n.test(C.file)) {
            if (C.file.endsWith(".gba")) {
              d(o, { ...s(o), [C.file]: Array(12).fill(0.22) }, true);
              return;
            }
            try {
              const D = await fetch(`../v1/samples/${encodeURIComponent(C.file)}`);
              if (!D.ok) return;
              const P = new Uint8Array(await D.arrayBuffer());
              if (B) return;
              const te = Math.max(1, Math.ceil(P.length / 12)), ce = fe.entropy_blocks(P, te);
              d(o, { ...s(o), [C.file]: Array.from(ce) }, true);
            } catch {
            }
          }
        }));
      } catch {
      }
    })(), () => {
      B = true;
    };
  });
  var O = Ii(), E = f(O);
  let H;
  var j = p(f(E), 4), g = f(j), N = f(g), I = p(g, 2), M = p(j, 2);
  {
    var W = (B) => {
      var Y = Li(), se = p(f(Y), 2);
      nt(se, 21, () => s(i), tt, (D, P) => {
        var te = Oi(), ce = f(te), xe = f(ce), Ae = p(ce, 2), je = f(Ae);
        {
          var Se = (Oe) => {
            var le = zn(), ke = ot(le);
            nt(ke, 17, () => s(o)[s(P).file], tt, (Ne, Be) => {
              var Ee = Ti();
              K((ge) => Sn(Ee, `height: ${ge ?? ""}px`), [() => Math.max(2, s(Be) * 14)]), R(Ne, Ee);
            }), R(Oe, le);
          }, Ue = (Oe) => {
            var le = zn(), ke = ot(le);
            nt(ke, 16, () => Array(12), tt, (Ne, Be, Ee) => {
              var ge = Ri();
              Sn(ge, `animation-delay: ${Ee * 40}ms`), R(Ne, ge);
            }), R(Oe, le);
          };
          ue(je, (Oe) => {
            s(o)[s(P).file] ? Oe(Se) : Oe(Ue, -1);
          });
        }
        K(() => {
          Ze(te, "title", s(P).insns > 0 ? `${s(P).desc} \u2014 ${s(P).insns} instructions` : s(P).desc), w(xe, s(P).file);
        }), me("click", te, () => S(s(P).file)), R(D, te);
      });
      var fe = p(se, 2), C = f(fe);
      K((D) => w(C, D), [() => s(i).map((D) => `${D.file} \u2014 ${D.desc}`).join("  \xB7  ")]), R(B, Y);
    };
    ue(M, (B) => {
      s(i).length && B(W);
    });
  }
  var ee = p(M, 2);
  {
    var ie = (B) => {
      var Y = Fi(), se = f(Y);
      K(() => w(se, s(l))), R(B, Y);
    };
    ue(ee, (B) => {
      s(l) && B(ie);
    });
  }
  var J = p(ee, 2);
  {
    var ye = (B) => {
      var Y = Ni(), se = f(Y);
      K(() => w(se, s(r))), R(B, Y);
    };
    ue(J, (B) => {
      s(r) && B(ye);
    });
  }
  K(() => H = et(E, 1, "zone svelte-1i6c60u", null, H, { over: s(a) })), Bt("drop", E, v), Bt("dragover", E, u), Bt("dragleave", E, m), me("change", N, h), me("click", I, x), R(e, O), bt();
}
Qt(["change", "click"]);
var ji = z('<span class="ct svelte-etynpr"> </span>'), Di = z('<span class="ct svelte-etynpr"> </span>'), Pi = z('<span class="ct svelte-etynpr"> </span>'), zi = z('<span class="ct svelte-etynpr"> </span>'), Ui = z("<button> <!> <!> <!> <!></button>"), qi = z('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), Hi = z('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Wi = z('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Gi = z('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Vi = z('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Yi = z('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Xi = z('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Ki = z('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Ji = z('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), Zi = z('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Qi(e, t) {
  ht(t, true);
  let n = q("summary");
  const a = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let r = q(""), i = It(() => {
    if (!t.strings) return [];
    const j = s(r).trim().toLowerCase();
    return j ? t.strings.filter((g) => g.text.toLowerCase().includes(j)) : t.strings;
  });
  const l = 80, o = It(() => t.report ? Math.max(1, ...t.report.sections.map((j) => Number(j.size) || 0)) : 1);
  function c(j) {
    return "0x" + Number(j).toString(16).toUpperCase().padStart(8, "0");
  }
  var v = Zi(), u = f(v);
  nt(u, 21, () => a, tt, (j, g) => {
    var N = It(() => zs(s(g), 2));
    let I = () => s(N)[0], M = () => s(N)[1];
    var W = Ui();
    let ee;
    var ie = f(W), J = p(ie);
    {
      var ye = (P) => {
        var te = ji(), ce = f(te);
        K(() => w(ce, t.report.sections.length)), R(P, te);
      };
      ue(J, (P) => {
        I() === "sections" && P(ye);
      });
    }
    var B = p(J, 2);
    {
      var Y = (P) => {
        var te = Di(), ce = f(te);
        K(() => w(ce, t.report.segments.length)), R(P, te);
      };
      ue(B, (P) => {
        I() === "segments" && P(Y);
      });
    }
    var se = p(B, 2);
    {
      var fe = (P) => {
        var te = Pi(), ce = f(te);
        K(() => w(ce, t.report.symbols.length)), R(P, te);
      };
      ue(se, (P) => {
        I() === "symbols" && P(fe);
      });
    }
    var C = p(se, 2);
    {
      var D = (P) => {
        var te = zi(), ce = f(te);
        K(() => w(ce, t.strings.length)), R(P, te);
      };
      ue(C, (P) => {
        I() === "strings" && t.strings && P(D);
      });
    }
    K(() => {
      ee = et(W, 1, "tab svelte-etynpr", null, ee, { active: s(n) === I() }), w(ie, `${M() ?? ""} `);
    }), me("click", W, () => d(n, I(), true)), R(j, W);
  });
  var m = p(u, 2), h = f(m);
  {
    var S = (j) => {
      var g = qi(), N = p(f(g), 2), I = f(N), M = p(N, 4), W = f(M), ee = p(M, 4), ie = f(ee), J = p(ee, 4), ye = f(J), B = p(J, 4), Y = f(B), se = p(B, 4), fe = f(se), C = p(se, 4), D = f(C), P = p(C, 4), te = f(P), ce = p(P, 4), xe = f(ce);
      K(() => {
        w(I, t.report.summary.class), w(W, t.report.summary.data), w(ie, t.report.summary.osabi), w(ye, t.report.summary.kind), w(Y, t.report.summary.machine), w(fe, t.report.summary.entry), w(D, t.report.summary.n_sections), w(te, t.report.summary.n_segments), w(xe, t.report.summary.n_symbols);
      }), R(j, g);
    }, x = (j) => {
      var g = Wi(), N = p(f(g));
      nt(N, 21, () => t.report.sections, tt, (I, M) => {
        var W = Hi(), ee = f(W), ie = f(ee), J = p(ee), ye = f(J), B = p(J), Y = f(B), se = p(B), fe = f(se), C = p(se), D = f(C), P = p(C), te = f(P), ce = p(P), xe = f(ce), Ae = p(ce), je = f(Ae);
        K((Se) => {
          Ze(W, "title", `Jump to offset ${s(M).offset ?? ""} in HEX`), w(ie, s(M).idx), w(ye, s(M).name || "\u2014"), w(Y, s(M).kind), w(fe, s(M).addr), w(D, s(M).offset), w(te, s(M).size), w(xe, s(M).flags), Sn(je, `width: ${Se ?? ""}px`);
        }, [() => Math.max(1, Number(s(M).size) / s(o) * l)]), me("click", W, () => t.onJumpToOffset?.(parseInt(s(M).offset, 16))), R(I, W);
      }), R(j, g);
    }, O = (j) => {
      var g = Vi(), N = p(f(g));
      nt(N, 21, () => t.report.segments, tt, (I, M) => {
        var W = Gi(), ee = f(W), ie = f(ee), J = p(ee), ye = f(J), B = p(J), Y = f(B), se = p(B), fe = f(se), C = p(se), D = f(C), P = p(C), te = f(P), ce = p(P), xe = f(ce);
        K(() => {
          Ze(W, "title", `Jump to offset ${s(M).offset ?? ""} in HEX`), w(ie, s(M).idx), w(ye, s(M).kind), w(Y, s(M).vaddr), w(fe, s(M).offset), w(D, s(M).filesz), w(te, s(M).memsz), w(xe, s(M).flags);
        }), me("click", W, () => t.onJumpToOffset?.(parseInt(s(M).offset, 16))), R(I, W);
      }), R(j, g);
    }, E = (j) => {
      var g = Xi(), N = p(f(g));
      nt(N, 21, () => t.report.symbols, tt, (I, M) => {
        var W = Yi(), ee = f(W), ie = f(ee), J = p(ee), ye = f(J), B = p(J), Y = f(B), se = p(B), fe = f(se), C = p(se), D = f(C);
        K(() => {
          w(ie, s(M).name), w(ye, s(M).bind), w(Y, s(M).kind), w(fe, s(M).value), w(D, s(M).size);
        }), R(I, W);
      }), R(j, g);
    }, H = (j) => {
      var g = Ji(), N = ot(g), I = f(N), M = p(I, 2), W = f(M), ee = p(N, 2), ie = p(f(ee));
      nt(ie, 21, () => s(i), tt, (J, ye) => {
        var B = Ki(), Y = f(B), se = f(Y), fe = p(Y), C = f(fe);
        K((D, P) => {
          Ze(B, "title", `Jump to offset ${D ?? ""} in HEX`), w(se, P), w(C, s(ye).text);
        }, [() => c(s(ye).offset), () => c(s(ye).offset)]), me("click", B, () => t.onJumpToOffset?.(s(ye).offset)), R(J, B);
      }), K(() => w(W, `${s(i).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), ws(I, () => s(r), (J) => d(r, J)), R(j, g);
    };
    ue(h, (j) => {
      s(n) === "summary" ? j(S) : s(n) === "sections" ? j(x, 1) : s(n) === "segments" ? j(O, 2) : s(n) === "symbols" ? j(E, 3) : s(n) === "strings" && j(H, 4);
    });
  }
  R(e, v), bt();
}
Qt(["click"]);
var $i = z('<span class="strip-col svelte-14j5q0g"></span>'), el = z('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), tl = z('<span class="d-l svelte-14j5q0g">NOTE</span> <span class="d-v svelte-14j5q0g"> </span>', 1), nl = z('<div class="field svelte-14j5q0g"><span class="d-l svelte-14j5q0g">FIELD</span> <span class="d-v strong svelte-14j5q0g"> </span> <span class="d-l svelte-14j5q0g">OFFSET</span> <span class="d-v svelte-14j5q0g"> </span> <span class="d-l svelte-14j5q0g">VALUE</span> <span class="d-v mint svelte-14j5q0g"> </span> <!></div>'), rl = z('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">GOTO</span> <input type="text" placeholder="0x00000000" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form></div></div> <!> <div class="grid svelte-14j5q0g" tabindex="0" role="grid"><div class="sizer svelte-14j5q0g"></div></div> <div class="detail svelte-14j5q0g"><!></div></div>');
function sl(e, t) {
  ht(t, true);
  let n = Xt(t, "format", 3, "unknown"), a = Xt(t, "jumpTo", 3, null), r = Xt(t, "followTarget", 3, null);
  const i = 20, l = 16, o = 6, c = 2e6, v = 400;
  let u = q(null), m = q(null), h = q(400), S = q(0), x = [], O = { physicalPx: 0, scale: 1 }, E = q(0), H = q(null), j = q(yt([])), g = q(0), N = q(""), I = q(null), M = q(null), W = q(null), ee = q(0), ie = q(0);
  const J = [{ offset: 0, size: 4, name: "e_ident.magic", type: "u32be", description: "ELF magic (0x7F ELF)" }, { offset: 4, size: 1, name: "e_ident.class", type: "u8", description: "1 = 32-bit, 2 = 64-bit" }, { offset: 5, size: 1, name: "e_ident.data", type: "u8", description: "1 = little-endian, 2 = big-endian" }, { offset: 6, size: 1, name: "e_ident.version", type: "u8" }, { offset: 7, size: 1, name: "e_ident.osabi", type: "u8" }, { offset: 8, size: 1, name: "e_ident.abiversion", type: "u8" }, { offset: 9, size: 7, name: "e_ident.pad", type: "bytes" }, { offset: 16, size: 2, name: "e_type", type: "u16", description: "2 = EXEC, 3 = DYN" }, { offset: 18, size: 2, name: "e_machine", type: "u16", description: "243 = RISC-V, 62 = x86_64" }, { offset: 20, size: 4, name: "e_version", type: "u32" }, { offset: 24, size: 4, name: "e_entry", type: "u32", description: "Entry-point virtual address" }, { offset: 28, size: 4, name: "e_phoff", type: "u32" }, { offset: 32, size: 4, name: "e_shoff", type: "u32" }, { offset: 36, size: 4, name: "e_flags", type: "u32" }, { offset: 40, size: 2, name: "e_ehsize", type: "u16" }, { offset: 42, size: 2, name: "e_phentsize", type: "u16" }, { offset: 44, size: 2, name: "e_phnum", type: "u16" }, { offset: 46, size: 2, name: "e_shentsize", type: "u16" }, { offset: 48, size: 2, name: "e_shnum", type: "u16" }, { offset: 50, size: 2, name: "e_shstrndx", type: "u16" }], ye = [{ offset: 0, size: 4, name: "entry.branch", type: "bytes", description: "ARM branch executed by the BIOS after header validation" }, { offset: 4, size: 156, name: "nintendo.logo", type: "bytes", description: "Fixed Nintendo logo bitmap checked by boot ROM" }, { offset: 160, size: 12, name: "game.title", type: "string", description: "ASCII cartridge title" }, { offset: 172, size: 4, name: "game.code", type: "string", description: "Four-character game code" }, { offset: 176, size: 2, name: "maker.code", type: "string", description: "Two-character maker code" }, { offset: 178, size: 1, name: "fixed.0x96", type: "u8", description: "Fixed value required by the GBA BIOS" }, { offset: 179, size: 1, name: "unit.code", type: "u8", description: "Usually 0x00 for GBA" }, { offset: 180, size: 1, name: "device.type", type: "u8", description: "Device type / debug field" }, { offset: 181, size: 7, name: "reserved", type: "bytes" }, { offset: 188, size: 1, name: "software.version", type: "u8" }, { offset: 189, size: 1, name: "complement.checksum", type: "u8", description: "Header checksum over bytes 0xA0..0xBC" }, { offset: 190, size: 2, name: "reserved.tail", type: "bytes" }];
  function B(_) {
    return (_ >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function Y(_) {
    return "0x" + (_ >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function se(_) {
    return _ >= 32 && _ <= 126 ? String.fromCharCode(_) : ".";
  }
  function fe() {
    return n() === "elf" ? J : n() === "gba" ? ye : [];
  }
  function C(_) {
    for (const k of fe()) if (_ >= k.offset && _ < k.offset + k.size) return k;
    return null;
  }
  function D(_) {
    if (!t.bytes || _.offset + _.size > t.bytes.byteLength) return "-";
    if (_.type === "string") return Array.from(t.bytes.subarray(_.offset, _.offset + _.size)).map((k) => k >= 32 && k <= 126 ? String.fromCharCode(k) : ".").join("").trim();
    if (_.type === "u8") return `0x${B(t.bytes[_.offset])} (${t.bytes[_.offset]})`;
    if (_.type === "u16") {
      const k = t.bytes[_.offset] | t.bytes[_.offset + 1] << 8;
      return `0x${k.toString(16).toUpperCase().padStart(4, "0")} (${k})`;
    }
    if (_.type === "u32" || _.type === "u32be") {
      const k = _.type === "u32be" ? (t.bytes[_.offset] << 24 | t.bytes[_.offset + 1] << 16 | t.bytes[_.offset + 2] << 8 | t.bytes[_.offset + 3]) >>> 0 : (t.bytes[_.offset] | t.bytes[_.offset + 1] << 8 | t.bytes[_.offset + 2] << 16 | t.bytes[_.offset + 3] << 24) >>> 0;
      return `0x${k.toString(16).toUpperCase().padStart(8, "0")} (${k})`;
    }
    return Array.from(t.bytes.subarray(_.offset, _.offset + _.size)).map(B).join(" ");
  }
  function P(_) {
    const k = Math.max(0, _ * i);
    return k <= c ? { physicalPx: k, scale: 1 } : { physicalPx: c, scale: k / c };
  }
  function te() {
    const _ = Math.ceil((t.bytes?.length ?? 0) / l);
    if (_ === 0) return { start: 0, end: 0, topPx: 0 };
    const k = O.scale, L = s(S) * k, V = Math.ceil(s(h) / i) + o * 2, b = Math.floor(L / i) - o, T = Math.max(0, b), Q = Math.min(_, T + V);
    let $;
    if (k === 1) $ = T * i;
    else {
      const oe = L - T * i;
      $ = s(S) - oe / k;
    }
    return { start: T, end: Q, topPx: $ };
  }
  function ce(_) {
    for (; x.length < _; ) {
      const k = document.createElement("div");
      k.className = "hex-row", k.style.position = "absolute", k.style.left = "0", k.style.right = "0", k.style.height = `${i}px`, x.push(k);
    }
  }
  function xe(_) {
    const k = _ * l, L = Math.min(t.bytes.length, k + l), V = document.createElement("span");
    V.className = "addr", V.textContent = Y(k);
    const b = document.createElement("span");
    b.className = "bytes";
    const T = document.createElement("span");
    T.className = "ascii";
    for (let Q = k; Q < L; Q++) {
      const $ = t.bytes[Q], oe = C(Q), he = document.createElement("button");
      he.type = "button", he.className = "byte", oe && he.classList.add("ovr"), s(M) && oe === s(M) && he.classList.add("hot"), s(I) === Q && he.classList.add("sel"), he.dataset.fi = String(Q), he.textContent = B($);
      const re = document.createElement("button");
      if (re.type = "button", re.className = "char", oe && re.classList.add("ovr"), s(M) && oe === s(M) && re.classList.add("hot"), s(I) === Q && re.classList.add("sel"), re.dataset.fi = String(Q), re.textContent = se($), b.appendChild(he), T.appendChild(re), Q - k === 7) {
        const Te = document.createElement("span");
        Te.className = "wide", Te.textContent = " ", b.appendChild(Te);
      }
      Q < L - 1 && b.appendChild(document.createTextNode(" "));
    }
    return [V, b, T];
  }
  function Ae() {
    if (!t.bytes || !s(m)) return;
    const _ = Math.ceil(t.bytes.length / l);
    O = P(_), s(m).style.height = `${O.physicalPx}px`;
    const k = te(), L = k.end - k.start;
    ce(L);
    for (let V = L; V < x.length; V++) x[V].parentNode && x[V].remove();
    for (let V = 0; V < L; V++) {
      const b = k.start + V, T = x[V];
      T.style.top = `${k.topPx + V * i}px`, T.dataset.row = String(b), T.dataset.rowOff = String(b * l), T.replaceChildren(...xe(b)), T.parentNode !== s(m) && s(m).appendChild(T);
    }
    je();
  }
  function je() {
    if (t.bytes && t.bytes.length) {
      const _ = s(S) * (O.scale || 1), k = Math.floor(_ / i) * l;
      d(E, Math.max(0, Math.min(1, k / Math.max(1, t.bytes.length))), true);
    } else d(E, 0);
  }
  function Se(_, k = true) {
    if (!t.bytes || !t.bytes.length || !s(u)) return;
    const L = Math.max(0, Math.min(t.bytes.length - 1, Number(_) | 0)), V = Math.floor(L / l), b = Math.max(0, Math.floor(s(h) / 3)), T = V * i, Q = Math.max(0, (T - b) / (O.scale || 1));
    try {
      s(u).scrollTo({ top: Q, behavior: "smooth" });
    } catch {
      s(u).scrollTop = Q;
    }
    k && (d(W, V * l), d(ee, performance.now() + v), Ma(ie), requestAnimationFrame(() => requestAnimationFrame(Ue)));
  }
  function Ue() {
    if (s(W) == null) return;
    const _ = Math.floor(s(W) / l);
    x.forEach((L) => {
      Number(L.dataset.row) === _ && (L.classList.remove("flash"), L.offsetWidth, L.classList.add("flash"), setTimeout(() => L.classList.remove("flash"), 480));
    });
    const k = s(W) + l;
    s(m) && s(m).querySelectorAll("[data-fi]").forEach((V) => {
      const b = Number(V.dataset.fi);
      b >= s(W) && b < k && (V.classList.remove("flash"), V.offsetWidth, V.classList.add("flash"), setTimeout(() => V.classList.remove("flash"), 480));
    }), d(W, null);
  }
  function Oe(_) {
    if (!t.bytes?.length) return;
    const k = Math.max(1, Math.floor(s(h) / i) - 2), L = (V) => {
      const b = s(S) * (O.scale || 1), T = Math.max(0, b + V * i);
      s(u).scrollTop = T / (O.scale || 1);
    };
    _.key === "PageDown" ? (_.preventDefault(), L(k)) : _.key === "PageUp" ? (_.preventDefault(), L(-k)) : _.key === "ArrowDown" ? (_.preventDefault(), L(1)) : _.key === "ArrowUp" ? (_.preventDefault(), L(-1)) : _.key === "Home" ? (_.preventDefault(), s(u).scrollTop = 0) : _.key === "End" && (_.preventDefault(), s(u).scrollTop = O.physicalPx);
  }
  function le(_) {
    const k = _.target.closest("[data-fi]");
    k && (d(I, Number(k.dataset.fi), true), Ae());
  }
  function ke(_) {
    const k = _.target.closest(".ovr");
    if (!k) return;
    const L = Number(k.dataset.fi), V = C(L);
    V && V !== s(M) && (d(M, V, true), Ae());
  }
  function Ne() {
    s(M) && (d(M, null), Ae());
  }
  function Be(_) {
    _.preventDefault();
    let k = s(N).trim();
    if (!k) return;
    (k.startsWith("0x") || k.startsWith("0X")) && (k = k.slice(2));
    const L = parseInt(k, 16);
    Number.isFinite(L) && Se(L, true);
  }
  function Ee(_) {
    if (!s(j).length || !t.bytes) return;
    const L = _.currentTarget.getBoundingClientRect(), V = Math.max(0, Math.min(1, (_.clientX - L.left) / L.width)), b = Math.floor(V * t.bytes.length);
    Se(b, true);
  }
  function ge() {
    if (!t.bytes || s(I) == null || s(I) < 0 || s(I) >= t.bytes.length) return null;
    const _ = t.bytes[s(I)], k = _.toString(2).padStart(8, "0"), L = s(I) + 1 < t.bytes.length ? t.bytes[s(I)] | t.bytes[s(I) + 1] << 8 : null, V = s(I) + 3 < t.bytes.length ? (t.bytes[s(I)] | t.bytes[s(I) + 1] << 8 | t.bytes[s(I) + 2] << 16 | t.bytes[s(I) + 3] << 24) >>> 0 : null, b = [`OFF ${Y(s(I))}`, `BYTE 0x${B(_)} (${_})`, `b${k}`, `ASCII '${se(_)}'`];
    return L !== null && b.push(`U16LE 0x${L.toString(16).toUpperCase().padStart(4, "0")}`), V !== null && b.push(`U32LE 0x${V.toString(16).toUpperCase().padStart(8, "0")}`), b.join(" \xB7 ");
  }
  let Le = 0, qe, y;
  mr(() => {
    qe = new ResizeObserver(() => {
      d(h, s(u).clientHeight, true), Ae();
    }), qe.observe(s(u)), y = () => {
      Le || (Le = requestAnimationFrame(() => {
        Le = 0, d(S, s(u).scrollTop, true), Ae();
      }));
    }, s(u).addEventListener("scroll", y, { passive: true }), Ae();
  }), yr(() => {
    try {
      qe?.disconnect();
    } catch {
    }
    s(u) && y && s(u).removeEventListener("scroll", y);
  }), Ge(() => {
    let _ = false;
    return Rn().then((k) => {
      if (_) return;
      d(H, k, true), d(g, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), d(j, t.bytes ? s(H).entropy_blocks(t.bytes, s(g)) : [], true), Ae();
    }), () => {
      _ = true;
    };
  });
  let F = null;
  Ge(() => {
    const _ = t.bytes;
    _ !== F && (F = _, s(u) && (s(u).scrollTop = 0), d(S, 0), d(I, null), d(M, null), x = [], s(H) && (d(g, Math.max(64, Math.ceil((_?.length ?? 0) / 256)), true), d(j, _ ? s(H).entropy_blocks(_, s(g)) : [], true)), Ae());
  }), Ge(() => {
    n(), Ae();
  }), Ge(() => {
    if (a() == null) return;
    const _ = typeof a() == "object" ? a().o : a();
    Se(_, true);
  });
  let U = -1;
  Ge(() => {
    const _ = r();
    if (!_ || typeof _.offset != "number") {
      U = -1;
      return;
    }
    const k = Math.floor(_.offset / l);
    k !== U && (U = k, Se(_.offset, false));
  });
  var ae = rl(), de = f(ae), ne = p(f(de), 2), pe = f(ne), we = p(f(pe), 2), A = p(de, 2);
  {
    var G = (_) => {
      var k = el(), L = p(f(k), 2), V = f(L);
      nt(V, 17, () => s(j), tt, ($, oe, he) => {
        var re = $i();
        K((Te, Ye, vt) => {
          Sn(re, `height: ${Te ?? ""}%; opacity: ${0.35 + s(oe) * 0.65}`), Ze(re, "title", `block ${he} \\u00B7 offset 0x${Ye ?? ""} \\u00B7 entropy ${vt ?? ""} bits`);
        }, [() => Math.max(2, s(oe) * 100), () => Math.floor(he * (t.bytes?.length ?? 0) / s(j).length).toString(16).toUpperCase(), () => s(oe).toFixed(1)]), R($, re);
      });
      var b = p(V, 2), T = p(L, 2), Q = f(T);
      K(($) => {
        Sn(b, `left: ${s(E) * 100}%`), w(Q, `${$ ?? ""} B / col`);
      }, [() => s(g).toLocaleString()]), me("click", L, Ee), R(_, k);
    };
    ue(A, (_) => {
      s(j).length > 1 && _(G);
    });
  }
  var X = p(A, 2), Me = f(X);
  jt(Me, (_) => d(m, _), () => s(m)), jt(X, (_) => d(u, _), () => s(u));
  var De = p(X, 2), We = f(De);
  {
    var Ce = (_) => {
      var k = nl(), L = p(f(k), 2), V = f(L), b = p(L, 4), T = f(b), Q = p(b, 4), $ = f(Q), oe = p(Q, 2);
      {
        var he = (re) => {
          var Te = tl(), Ye = p(ot(Te), 2), vt = f(Ye);
          K(() => w(vt, s(M).description)), R(re, Te);
        };
        ue(oe, (re) => {
          s(M).description && re(he);
        });
      }
      K((re, Te) => {
        w(V, s(M).name), w(T, re), w($, Te);
      }, [() => Y(s(M).offset), () => D(s(M))]), R(_, k);
    }, Fe = (_) => {
      var k = en();
      K((L) => w(k, L), [() => ge() ?? "select a byte or hover a highlighted field"]), R(_, k);
    };
    ue(We, (_) => {
      s(M) ? _(Ce) : _(Fe, -1);
    });
  }
  Bt("submit", pe, Be), ws(we, () => s(N), (_) => d(N, _)), me("keydown", X, Oe), me("click", X, le), me("mouseover", X, ke), Bt("mouseleave", X, Ne), Bt("focus", X, ke), R(e, ae), bt();
}
Qt(["click", "keydown", "mouseover"]);
var al = z('<span class="w-meta svelte-59bj26"> </span>'), il = z('<div class="w-empty svelte-59bj26"> </div>'), ll = z('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), ol = z('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), cl = z('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), fl = z('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function ul(e, t) {
  ht(t, true);
  let n = q(null), a = q(""), r = q(null), i = q(null), l = null, o = null, c = null, v = 0, u = 0, m = 0, h = q("0:00 / 0:00");
  function S(C) {
    return "0x" + (Number(C) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function x(C) {
    return C < 1024 ? `${C} B` : C < 1024 * 1024 ? `${(C / 1024).toFixed(1)} KiB` : `${(C / 1024 / 1024).toFixed(2)} MiB`;
  }
  function O(C) {
    if (C < 1) return `${(C * 1e3).toFixed(0)} ms`;
    if (C < 60) return `${C.toFixed(2)} s`;
    const D = Math.floor(C / 60), P = C - D * 60;
    return `${D}m ${P.toFixed(1)}s`;
  }
  function E(C) {
    return C.replace(/\s+$/g, "");
  }
  async function H(C) {
    if (d(a, ""), !C) {
      d(n, null);
      return;
    }
    try {
      const P = (await Rn()).decode_wav(C);
      d(n, P, true), c = null, d(h, `0:00 / ${O(P.duration)}`), requestAnimationFrame(() => j({ playhead: 0 }));
    } catch (D) {
      console.error("[scry/wave] decode failed", D), d(n, null), d(a, String(D?.message || D), true);
    }
  }
  function j({ playhead: C = null } = {}) {
    if (!s(r) || !s(n)) return;
    const D = window.devicePixelRatio || 1, P = s(r).getBoundingClientRect(), te = Math.max(1, Math.floor(P.width * D)), ce = Math.max(1, Math.floor(P.height * D));
    s(r).width = te, s(r).height = ce;
    const xe = getComputedStyle(s(r)), Ae = xe.getPropertyValue("--w-bg").trim() || "#000", je = xe.getPropertyValue("--w-grid").trim() || "#333", Se = xe.getPropertyValue("--w-peak").trim() || "#888", Ue = xe.getPropertyValue("--w-rms").trim() || "#bcd", Oe = xe.getPropertyValue("--w-accent").trim() || "#9fe3c7", le = s(r).getContext("2d");
    le.fillStyle = Ae, le.fillRect(0, 0, te, ce), le.strokeStyle = je, le.lineWidth = 1;
    const ke = ce / 2;
    for (const ge of [0.25, 0.5, 0.75]) {
      const Le = Math.floor(ce * ge) + 0.5;
      le.beginPath(), le.moveTo(0, Le), le.lineTo(te, Le), le.stroke();
    }
    const Ne = s(n).envelope, Be = Ne.length, Ee = te / Be;
    for (let ge = 0; ge < Be; ge++) {
      const Le = Ne[ge], qe = Math.floor(ge * Ee), y = Math.max(1, Math.floor(Ee) - 1), F = ke - Le.max * ke, U = ke - Le.min * ke;
      le.fillStyle = Se, le.fillRect(qe, Math.floor(F), y, Math.max(1, Math.ceil(U - F)));
      const ae = Le.rms * ke;
      le.fillStyle = Ue, le.fillRect(qe, Math.floor(ke - ae), y, Math.max(1, Math.ceil(2 * ae)));
    }
    if (C != null) {
      const ge = Math.floor(C * te);
      le.strokeStyle = Oe, le.lineWidth = 2 * D, le.beginPath(), le.moveTo(ge, 0), le.lineTo(ge, ce), le.stroke();
    }
  }
  function g() {
    if (!s(n)) return null;
    if (c) return c;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const C = s(n).samples instanceof Float32Array ? s(n).samples : new Float32Array(s(n).samples);
    return c = l.createBuffer(1, C.length, s(n).fmt.sample_rate), c.copyToChannel(C, 0), c;
  }
  function N() {
    if (!l || !o || !s(n)) {
      m = 0;
      return;
    }
    const C = u + (l.currentTime - v), D = s(n).duration, P = Math.max(0, Math.min(1, C / D));
    j({ playhead: P }), d(h, `${O(Math.min(C, D))} / ${O(D)}`), C < D ? m = requestAnimationFrame(N) : m = 0;
  }
  function I() {
    if (m && (cancelAnimationFrame(m), m = 0), o) {
      try {
        o.stop();
      } catch {
      }
      o.disconnect(), o = null;
    }
  }
  function M(C) {
    if (!s(n)) return;
    const D = g();
    D && (I(), o = l.createBufferSource(), o.buffer = D, o.connect(l.destination), o.onended = () => {
      m && cancelAnimationFrame(m), m = 0, j({ playhead: 0 }), d(h, `0:00 / ${O(s(n).duration)}`), o = null;
    }, l.state === "suspended" && l.resume(), u = Math.max(0, Math.min(s(n).duration - 1e-3, C)), v = l.currentTime, o.start(0, u), m = requestAnimationFrame(N));
  }
  function W(C) {
    if (!s(n)) return;
    const D = s(r).getBoundingClientRect(), P = (C.clientX - D.left) / D.width;
    M(P * s(n).duration);
  }
  Ge(() => {
    const C = t.bytes;
    return H(C), () => I();
  }), Ge(() => {
    if (!s(i)) return;
    const C = new ResizeObserver(() => s(n) && j({ playhead: 0 }));
    return C.observe(s(i)), () => C.disconnect();
  });
  var ee = fl(), ie = f(ee), J = p(f(ie), 2);
  {
    var ye = (C) => {
      var D = al(), P = f(D);
      K((te) => w(P, `${s(n).fmt.channels ?? ""}ch @ ${s(n).fmt.sample_rate ?? ""} Hz \xB7 ${s(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${te ?? ""}`), [() => O(s(n).duration)]), R(C, D);
    };
    ue(J, (C) => {
      s(n) && C(ye);
    });
  }
  var B = p(ie, 2);
  {
    var Y = (C) => {
      var D = il(), P = f(D);
      K(() => w(P, `Not a parseable WAV: ${s(a) ?? ""}`)), R(C, D);
    }, se = (C) => {
      var D = ll();
      R(C, D);
    }, fe = (C) => {
      var D = cl(), P = ot(D), te = f(P), ce = f(te), xe = f(ce), Ae = p(f(xe)), je = f(Ae), Se = p(xe, 2), Ue = p(f(Se)), Oe = f(Ue), le = p(Se, 2), ke = p(f(le)), Ne = f(ke), Be = p(le, 2), Ee = p(f(Be)), ge = f(Ee), Le = p(ce, 2), qe = f(Le), y = p(f(qe)), F = f(y), U = p(qe, 2), ae = p(f(U)), de = f(ae), ne = p(U, 2), pe = p(f(ne)), we = f(pe), A = p(ne, 2), G = p(f(A)), X = f(G), Me = p(Le, 2), De = f(Me), We = p(f(De)), Ce = f(We), Fe = p(De, 2);
      nt(Fe, 17, () => s(n).chunks.slice(0, 4), tt, ($, oe) => {
        var he = ol(), re = f(he), Te = f(re), Ye = p(re), vt = f(Ye);
        K((Tt, Et, un) => {
          w(Te, Tt), w(vt, `${Et ?? ""} @ ${un ?? ""}`);
        }, [() => E(s(oe).id), () => x(s(oe).size), () => S(s(oe).offset)]), R($, he);
      });
      var _ = p(P, 2), k = f(_), L = p(k, 2), V = p(L, 2), b = f(V), T = p(_, 2), Q = f(T);
      jt(Q, ($) => d(r, $), () => s(r)), jt(T, ($) => d(i, $), () => s(i)), K(($, oe, he, re) => {
        w(je, s(n).fmt.format === 1 ? "PCM (int)" : s(n).fmt.format === 3 ? "IEEE float" : `tag ${s(n).fmt.format}`), w(Oe, s(n).fmt.channels), w(Ne, `${s(n).fmt.sample_rate ?? ""} Hz`), w(ge, `${s(n).fmt.bits_per_sample ?? ""}-bit`), w(F, $), w(de, oe), w(we, he), w(X, `${re ?? ""}/s`), w(Ce, s(n).chunks.length), w(b, s(h));
      }, [() => Number(s(n).total_frames).toLocaleString(), () => O(s(n).duration), () => x(s(n).data_len), () => x(s(n).fmt.byte_rate)]), me("click", k, () => M(0)), me("click", L, () => {
        I(), j({ playhead: 0 }), d(h, `0:00 / ${O(s(n).duration)}`);
      }), me("click", Q, W), R(C, D);
    };
    ue(B, (C) => {
      s(a) ? C(Y) : s(n) ? C(fe, -1) : C(se, 1);
    });
  }
  R(e, ee), bt();
}
Qt(["click"]);
var vl = z('<span class="c-meta svelte-1uww35p"> </span>'), dl = z('<div class="c-empty svelte-1uww35p"> </div>'), pl = z('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), _l = z('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), hl = z(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), bl = z('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function ml(e, t) {
  ht(t, true);
  let n = q(null), a = q("");
  function r(g) {
    return (g >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function i(g) {
    return "0x" + (g >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function l(g) {
    return g >= 32 && g <= 126 ? String.fromCharCode(g) : ".";
  }
  function o(g) {
    return g < 1024 ? `${g} B` : g < 1024 * 1024 ? `${(g / 1024).toFixed(1)} KiB` : `${(g / 1024 / 1024).toFixed(2)} MiB`;
  }
  async function c(g) {
    if (d(a, ""), !g) {
      d(n, null);
      return;
    }
    try {
      const N = await Rn();
      d(n, N.parse_gba(g), true);
    } catch (N) {
      console.error("[scry/cart] parse failed", N), d(n, null), d(a, String(N?.message || N), true);
    }
  }
  Ge(() => {
    const g = t.bytes;
    c(g);
  });
  function v(g) {
    if (!t.bytes) return null;
    const N = t.bytes.subarray(g, Math.min(t.bytes.length, g + 16)), I = [], M = [];
    for (let W = 0; W < N.length; W++) I.push(r(N[W])), M.push(l(N[W])), W === 7 && I.push("");
    return { off: g, hex: I.join(" ").replace(/  /g, "  "), ascii: M.join("") };
  }
  let u = It(() => {
    if (!t.bytes) return [];
    const g = [];
    for (let N = 160; N < 224; N += 16) {
      const I = v(N);
      I && g.push(I);
    }
    return g;
  });
  var m = bl(), h = f(m), S = p(f(h), 2);
  {
    var x = (g) => {
      var N = vl(), I = f(N);
      K((M) => w(I, `"${(s(n).title || "(blank)") ?? ""}" \xB7 ${s(n).game_code ?? ""} \xB7 ${M ?? ""}`), [() => o(s(n).rom_size)]), R(g, N);
    };
    ue(S, (g) => {
      s(n) && g(x);
    });
  }
  var O = p(h, 2);
  {
    var E = (g) => {
      var N = dl(), I = f(N);
      K(() => w(I, `parse failed: ${s(a) ?? ""}`)), R(g, N);
    }, H = (g) => {
      var N = pl();
      R(g, N);
    }, j = (g) => {
      var N = hl(), I = f(N), M = p(f(I), 2), W = p(f(M)), ee = f(W), ie = p(M, 2), J = p(f(ie)), ye = f(J), B = p(ie, 2), Y = p(f(B)), se = f(Y), fe = p(B, 2), C = p(f(fe), 2), D = f(C), P = p(fe, 2), te = p(f(P)), ce = f(te), xe = p(P, 2), Ae = p(f(xe)), je = f(Ae), Se = p(xe, 2), Ue = p(f(Se)), Oe = f(Ue), le = p(Se, 2), ke = p(f(le), 2), Ne = f(ke), Be = p(le, 2), Ee = p(f(Be)), ge = f(Ee), Le = p(I, 2), qe = p(f(Le), 2);
      nt(qe, 21, () => s(u), tt, (y, F) => {
        var U = _l(), ae = f(U), de = f(ae), ne = p(ae, 2), pe = f(ne), we = p(ne, 2), A = f(we);
        K((G) => {
          w(de, G), w(pe, s(F).hex), w(A, s(F).ascii);
        }, [() => i(s(F).off)]), R(y, U);
      }), K((y, F, U, ae, de, ne, pe) => {
        w(ee, s(n).title || "(blank)"), w(ye, s(n).game_code || "----"), w(se, s(n).maker_code || "--"), w(D, `0x${y ?? ""} ${s(n).fixed_ok ? "\u2713" : "\u2717"}`), w(ce, `0x${F ?? ""}`), w(je, `0x${U ?? ""}`), w(Oe, `0x${ae ?? ""}`), w(Ne, `stored 0x${de ?? ""} \xB7
            computed 0x${ne ?? ""}
            ${s(n).checksum_ok ? " \u2713" : " \u2717"}`), w(ge, pe);
      }, [() => r(s(n).fixed), () => r(s(n).unit_code), () => r(s(n).device_type), () => r(s(n).version), () => r(s(n).checksum), () => r(s(n).checksum_computed), () => o(s(n).rom_size)]), R(g, N);
    };
    ue(O, (g) => {
      s(a) ? g(E) : s(n) ? g(j, -1) : g(H, 1);
    });
  }
  R(e, m), bt();
}
var yl = z('<section class="mh-host svelte-sq0dz7"><div class="mh-bar svelte-sq0dz7"><span class="mh-title svelte-sq0dz7"> </span> <form class="mh-jumpform svelte-sq0dz7"><span class="mh-jumplab svelte-sq0dz7">JUMP</span> <input type="text" placeholder="0x..." class="mh-jump svelte-sq0dz7" aria-label="jump to offset"/></form></div> <div class="mh-scroll svelte-sq0dz7" role="grid" tabindex="0"><div class="mh-sizer svelte-sq0dz7"></div></div> <div class="mh-detail svelte-sq0dz7"> </div></section>');
function gl(e, t) {
  ht(t, true);
  let n = Xt(t, "cursor", 3, null), a = Xt(t, "follow", 3, false), r = Xt(t, "onByteClick", 3, null);
  const i = 16, l = 20, o = 6, c = 5e5;
  let v, u, m, h = 0, S = [], x = null, O = { physicalPx: 0, scale: 1 }, E = -1, H = q(null);
  function j(y) {
    return (y >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function g(y) {
    return "0x" + (y >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function N(y) {
    return y >= 32 && y <= 126 ? String.fromCharCode(y) : ".";
  }
  const I = [{ offset: 0, size: 4, name: "entry.branch", type: "bytes", description: "ARM branch" }, { offset: 4, size: 156, name: "nintendo.logo", type: "bytes", description: "Nintendo logo bitmap" }, { offset: 160, size: 12, name: "game.title", type: "string", description: "Cartridge title" }, { offset: 172, size: 4, name: "game.code", type: "string", description: "Game code" }, { offset: 176, size: 2, name: "maker.code", type: "string", description: "Maker code" }, { offset: 178, size: 1, name: "fixed.0x96", type: "u8", description: "BIOS fixed byte" }, { offset: 179, size: 1, name: "unit.code", type: "u8" }, { offset: 180, size: 1, name: "device.type", type: "u8" }, { offset: 181, size: 7, name: "reserved", type: "bytes" }, { offset: 188, size: 1, name: "software.version", type: "u8" }, { offset: 189, size: 1, name: "complement.checksum", type: "u8", description: "Header checksum" }, { offset: 190, size: 2, name: "reserved.tail", type: "bytes" }];
  function M(y) {
    for (const F of I) if (y >= F.offset && y < F.offset + F.size) return F;
    return null;
  }
  function W(y) {
    return !t.bytes || y.offset + y.size > t.bytes.byteLength ? "-" : y.type === "string" ? Array.from(t.bytes.subarray(y.offset, y.offset + y.size)).map((F) => F >= 32 && F <= 126 ? String.fromCharCode(F) : ".").join("").trim() : y.type === "u8" ? `0x${j(t.bytes[y.offset])} (${t.bytes[y.offset]})` : Array.from(t.bytes.subarray(y.offset, y.offset + y.size)).map(j).join(" ");
  }
  let ee = q(null);
  function ie(y, F) {
    const U = Math.max(0, y * F);
    return U <= c ? { physicalPx: U, scale: 1 } : { physicalPx: c, scale: U / c };
  }
  function J(y, F, U, ae) {
    if (U === 0) return { start: 0, end: 0, topPx: 0 };
    const de = y * ae, ne = Math.ceil(F / l) + o * 2, pe = Math.floor(de / l) - o, we = Math.max(0, pe), A = Math.min(U, we + ne);
    let G;
    if (ae === 1) G = we * l;
    else {
      const X = de - we * l;
      G = y - X / ae;
    }
    return { start: we, end: A, topPx: G };
  }
  function ye(y, F) {
    const U = y * i, ae = Math.min(F.byteLength, U + i), de = F.subarray(U, ae), ne = [], pe = [];
    for (let we = 0; we < de.length; we++) {
      const A = U + we;
      ne.push({ off: A, text: j(de[we]), gap: we === 7 ? "wide" : "" }), pe.push({ off: A, text: N(de[we]) });
    }
    return { addr: g(U), hex: ne, asc: pe };
  }
  function B(y, F, U, ae) {
    y.textContent = "";
    for (let de = 0; de < F.length; de++) {
      const ne = F[de], pe = document.createElement("span");
      pe.className = U;
      const we = M(ne.off);
      we && pe.classList.add("mh-ovr"), s(ee) && we === s(ee) && pe.classList.add("mh-hot"), ne.off === s(H) && pe.classList.add("mh-selected"), ne.off === ae && pe.classList.add("mh-pc-byte"), pe.dataset.off = String(ne.off), pe.textContent = ne.text, y.appendChild(pe), U === "mh-cell" && de < F.length - 1 && y.appendChild(document.createTextNode(ne.gap === "wide" ? "  " : " "));
    }
  }
  function Y() {
    const y = s(H) ?? n();
    if (!t.bytes || typeof y != "number" || y < 0 || y >= t.bytes.byteLength) return null;
    const F = M(y);
    if (F) {
      const we = W(F);
      return `${F.name} \xB7 ${we}${F.description ? " \xB7 " + F.description : ""}`;
    }
    const U = t.bytes[y], ae = U.toString(2).padStart(8, "0"), de = y + 1 < t.bytes.byteLength ? t.bytes[y] | t.bytes[y + 1] << 8 : null, ne = y + 3 < t.bytes.byteLength ? (t.bytes[y] | t.bytes[y + 1] << 8 | t.bytes[y + 2] << 16 | t.bytes[y + 3] << 24) >>> 0 : null, pe = [`OFF ${g(y)}`, `BYTE 0x${j(U)} (${U})`, `b${ae}`, `ASCII '${N(U)}'`];
    return de !== null && pe.push(`U16LE 0x${de.toString(16).toUpperCase().padStart(4, "0")}`), ne !== null && pe.push(`U32LE 0x${ne.toString(16).toUpperCase().padStart(8, "0")}`), pe.join(" \xB7 ");
  }
  function se(y) {
    for (; S.length < y; ) {
      const F = document.createElement("div");
      F.className = "mh-row", F.style.position = "absolute", F.style.left = "0", F.style.right = "0", F.style.height = `${l}px`;
      const U = document.createElement("span");
      U.className = "mh-addr";
      const ae = document.createElement("span");
      ae.className = "mh-bytes";
      const de = document.createElement("span");
      de.className = "mh-ascii", F.appendChild(U), F.appendChild(ae), F.appendChild(de), S.push(F);
    }
  }
  function fe() {
    const y = t.bytes;
    if (!u) return;
    if (!y || y.byteLength === 0) {
      for (const ne of S) ne.parentNode && ne.remove();
      u.style.height = "0px";
      return;
    }
    const F = Math.ceil(y.byteLength / i);
    O = ie(F, l), u.style.height = `${O.physicalPx}px`;
    const U = J(v.scrollTop, h, F, O.scale), ae = U.end - U.start;
    se(ae);
    for (let ne = ae; ne < S.length; ne++) S[ne].parentNode && S[ne].remove();
    const de = typeof n() == "number" && n() >= 0 && n() < y.byteLength ? Math.floor(n() / i) : -1;
    for (let ne = 0; ne < ae; ne++) {
      const pe = U.start + ne, we = ye(pe, y), A = S[ne];
      A.style.top = `${U.topPx + ne * l}px`;
      const [G, X, Me] = A.children;
      G.textContent = we.addr, B(X, we.hex, "mh-cell", n()), B(Me, we.asc, "mh-char", n()), pe === de ? A.classList.add("mh-cursor") : A.classList.remove("mh-cursor"), A.parentNode !== u && u.appendChild(A);
    }
  }
  function C() {
    const y = t.bytes;
    if (!y || typeof n() != "number" || n() < 0 || n() >= y.byteLength || !v) return;
    const U = Math.floor(n() / i) * l, ae = U / O.scale, de = l * 4, ne = v.scrollTop, pe = ne + h;
    (ae < ne + de || ae > pe - de) && (v.scrollTop = Math.max(0, (U - h / 2) / O.scale));
  }
  function D(y) {
    const F = t.bytes;
    if (!F || y < 0 || y >= F.byteLength) return;
    d(H, y, true);
    const ae = Math.floor(y / i) * l;
    v.scrollTop = Math.max(0, (ae - h / 2) / O.scale), fe();
  }
  function P(y) {
    y.preventDefault();
    const F = m.value.trim().replace(/^0x/i, ""), U = parseInt(F, 16);
    Number.isFinite(U) && D(U);
  }
  function te(y) {
    const F = y.target.closest("[data-off]");
    if (!F || !t.bytes) return;
    const U = Number(F.dataset.off);
    !Number.isFinite(U) || U < 0 || U >= t.bytes.byteLength || (d(H, U, true), fe(), r()?.(U));
  }
  function ce(y) {
    y.key !== "Enter" && y.key !== " " || !y.target.closest("[data-off]") || (y.preventDefault(), te(y));
  }
  function xe(y) {
    const F = y.target.closest("[data-off]");
    if (!F || !t.bytes) return;
    const U = Number(F.dataset.off), ae = M(U);
    ae !== s(ee) && (d(ee, ae, true), fe());
  }
  function Ae() {
    s(ee) && (d(ee, null), fe());
  }
  let je;
  mr(() => {
    je = new ResizeObserver(() => {
      h = v.clientHeight, fe();
    }), je.observe(v), v.addEventListener("scroll", fe, { passive: true }), fe();
  }), yr(() => {
    try {
      je?.disconnect();
    } catch {
    }
  }), Ge(() => {
    t.bytes !== x && (x = t.bytes, E = -1, d(H, null), v && (v.scrollTop = 0), fe(), t.bytes && t.bytes.byteLength >= 192 && requestAnimationFrame(() => D(160)));
  });
  let Se = false;
  Ge(() => {
    const y = n(), F = a();
    if (!t.bytes) return;
    const U = typeof y == "number" && y >= 0 && y < t.bytes.byteLength ? Math.floor(y / i) : -1, ae = F !== Se;
    Se = F, !(U === E && !ae) && (E = U, fe(), F && requestAnimationFrame(C));
  });
  var Ue = yl(), Oe = f(Ue), le = f(Oe), ke = f(le), Ne = p(le, 2), Be = p(f(Ne), 2);
  jt(Be, (y) => m = y, () => m);
  var Ee = p(Oe, 2), ge = f(Ee);
  jt(ge, (y) => u = y, () => u), jt(Ee, (y) => v = y, () => v);
  var Le = p(Ee, 2), qe = f(Le);
  K((y, F) => {
    w(ke, y), w(qe, F);
  }, [() => t.bytes ? `ROM (${t.bytes.byteLength.toLocaleString()} bytes)` : "ROM (empty)", () => Y() ?? (t.bytes ? "select a byte" : "no ROM loaded")]), Bt("submit", Ne, P), me("click", Ee, te), me("keydown", Ee, ce), me("mouseover", Ee, xe), Bt("mouseleave", Ee, Ae), R(e, Ue), bt();
}
Qt(["click", "keydown", "mouseover"]);
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
var Ml = z('<span class="g-meta svelte-1kb9ux"> </span>'), Cl = z('<button class="g-lm-btn svelte-1kb9ux" type="button"><span class="g-lm-label svelte-1kb9ux"> </span> <span class="g-lm-off svelte-1kb9ux"> </span></button>'), Tl = z('<div class="g-landmarks svelte-1kb9ux"><span class="g-landmarks-title svelte-1kb9ux">LANDMARKS</span> <!></div>'), Rl = z(" <!>", 1), Ol = z("<span> <!></span>"), Ll = z("<span> <!></span>"), Fl = z('<button type="button"><span class="g-trail-age svelte-1kb9ux"></span> <span class="g-trail-pc"> </span> <span class="g-trail-off svelte-1kb9ux"> </span> <span class="g-trail-mode svelte-1kb9ux"> </span></button>'), Nl = z('<div class="g-trail-title svelte-1kb9ux">RECENT CART PC</div> <!>', 1), Il = z('<div class="g-click-note svelte-1kb9ux"> </div>'), Bl = z(`<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-split svelte-1kb9ux"><div class="g-left svelte-1kb9ux"><div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <button type="button" title="Auto-scroll the ROM view to wherever the CPU's program counter currently is"><span class="g-follow-led svelte-1kb9ux" aria-hidden="true"></span> <span class="g-follow-lab"> </span></button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div> <!></div> <div class="g-right svelte-1kb9ux"><div class="g-sub-bar svelte-1kb9ux"><span class="g-sub-title svelte-1kb9ux">[ ROM / INSPECTOR ]</span> <span class="g-sub-hint svelte-1kb9ux"><!></span></div> <!> <div class="g-pc-trail svelte-1kb9ux"><!> <!></div></div></div></div>`);
function jl(e, t) {
  ht(t, true);
  let n = Xt(t, "onPcUpdate", 3, null), a, r = null, i = q(false), l = q(false), o = q("cart ready \xB7 click PLAY"), c = q(null), v = q(null), u = q("ARM"), m = q(false), h = q(true), S = q(yt([])), x = q(""), O = 0, E = 0;
  const H = 480, j = 320, g = 100, N = 8;
  function I(b) {
    return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KiB` : `${(b / (1024 * 1024)).toFixed(2)} MiB`;
  }
  function M(b) {
    return "0x" + (b >>> 0).toString(16).toUpperCase().padStart(8, "0");
  }
  function W(b) {
    const T = [];
    if (!b || b.byteLength < 192) return T;
    const Q = (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    if (Q >>> 24 === 234) {
      let $ = Q & 16777215;
      $ & 8388608 && ($ |= 4278190080);
      const oe = 8 + ($ << 2) >>> 0;
      oe < b.byteLength && oe > 192 && T.push({ off: oe, label: "ENTRY", desc: "Code entry point (from branch at 0x00)" });
    }
    return T.push({ off: 0, label: "BRANCH", desc: "ARM branch instruction" }), T.push({ off: 4, label: "LOGO", desc: "Nintendo logo bitmap (156 bytes)" }), T.push({ off: 160, label: "HEADER", desc: "Cartridge header (title, code, checksum)" }), T.push({ off: 192, label: "POST-HDR", desc: "First byte after the header" }), T.sort(($, oe) => $.label === "ENTRY" ? -1 : oe.label === "ENTRY" ? 1 : $.off - oe.off), T;
  }
  let ee = It(() => W(t.bytes));
  function ie() {
    n()?.({ follow: s(h), running: s(l), liveAddress: s(v)?.address ?? null, label: s(v)?.label ?? (s(i) ? "READY" : "IDLE"), mode: s(u), inCart: s(m), offset: s(c), mirrored: !!s(v)?.mirrored, trail: s(S), ts: performance.now() });
  }
  function J(b) {
    if (!b?.inCart || b.offset == null) return;
    const T = s(S)[0];
    T && Math.floor(T.offset / 16) === Math.floor(b.offset / 16) || d(S, [{ address: b.address, offset: b.offset, label: b.label, mode: s(u), mirrored: b.mirrored, ts: performance.now() }, ...s(S)].slice(0, N), true);
  }
  function ye(b) {
    if (s(l)) {
      d(x, `ROM ${M(b)} selected while running`);
      return;
    }
    d(x, `ROM ${M(b)} \xB7 bus ${M(134217728 + b)} \xB7 V2 DISASM is not shipped yet`);
  }
  function B() {
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
    return r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((b, T) => console.warn("[scry/v2/game/gba]", T)), r.setCanvas(a), r.setBios(window.biosBin), r;
  }
  async function Y() {
    if (t.bytes && !s(l)) {
      if (a.focus(), !s(i)) {
        d(o, "loading ROM\u2026"), await new Promise((b) => requestAnimationFrame(b)), await new Promise((b) => requestAnimationFrame(b));
        try {
          const b = B(), T = t.bytes.buffer.slice(t.bytes.byteOffset, t.bytes.byteOffset + t.bytes.byteLength);
          if (!b.setRom(T)) {
            d(o, "rom rejected");
            return;
          }
          d(i, true), b.runStable(), d(l, true), d(o, "running"), ie(), C();
        } catch (b) {
          console.error("[scry/v2/game] load failed", b), d(o, "error: " + (b?.message || b));
        }
        return;
      }
      r.runStable(), d(l, true), d(o, "running"), ie(), C();
    }
  }
  function se() {
    !r || !r.hasRom() || (r.pause(), d(l, false), d(o, "paused"), D(), ie());
  }
  function fe(b) {
    if (O = requestAnimationFrame(fe), !s(l) || !r || !t.bytes || b - E < g) return;
    E = b;
    const T = kl(r.cpu);
    T !== null && (d(u, Sl(r.cpu), true), d(v, Al(T, t.bytes.byteLength), true), s(v).inCart && s(v).offset !== null ? (d(c, s(v).offset, true), d(m, true), J(s(v))) : d(m, false), ie());
  }
  function C() {
    O || (E = 0, O = requestAnimationFrame(fe));
  }
  function D() {
    O && cancelAnimationFrame(O), O = 0;
  }
  function P() {
    d(h, !s(h)), ie();
  }
  function te() {
    if (!r || !t.bytes) return;
    const b = s(l);
    if (b) {
      try {
        r.pause();
      } catch {
      }
      d(l, false);
    }
    D(), d(c, null), d(v, null), d(m, false), d(i, false), d(o, "cart ready \xB7 click PLAY"), ie(), b && Y();
  }
  Ge(() => {
    if (t.bytes) s(l) || d(o, "cart ready \xB7 click PLAY"), s(i) || (d(c, null), d(v, null), d(m, false), d(S, [], true), d(x, ""), ie());
    else {
      if (r && s(l)) try {
        r.pause();
      } catch {
      }
      D(), d(c, null), d(v, null), d(m, false), d(h, true), d(S, [], true), d(x, ""), d(i, false), d(l, false), d(o, "idle"), ie();
    }
  }), yr(() => {
    if (r && s(l)) try {
      r.pause();
    } catch {
    }
    D();
  });
  var ce = Bl(), xe = f(ce), Ae = p(f(xe), 2);
  {
    var je = (b) => {
      var T = Ml(), Q = f(T);
      K(($) => w(Q, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${$ ?? ""}`), [() => I(t.header.rom_size)]), R(b, T);
    };
    ue(Ae, (b) => {
      t.header && b(je);
    });
  }
  var Se = p(xe, 2), Ue = f(Se), Oe = f(Ue), le = f(Oe);
  Ze(le, "width", H), Ze(le, "height", j), jt(le, (b) => a = b, () => a);
  var ke = p(Oe, 2), Ne = f(ke), Be = p(Ne, 2), Ee = p(Be, 2), ge = p(Ee, 2);
  let Le;
  var qe = p(f(ge), 2), y = f(qe), F = p(ge, 2), U = f(F), ae = p(ke, 2);
  {
    var de = (b) => {
      var T = Tl(), Q = p(f(T), 2);
      nt(Q, 17, () => s(ee), tt, ($, oe) => {
        var he = Cl(), re = f(he), Te = f(re), Ye = p(re, 2), vt = f(Ye);
        K((Tt) => {
          Ze(he, "title", s(oe).desc), w(Te, s(oe).label), w(vt, Tt);
        }, [() => M(s(oe).off)]), me("click", he, () => {
          d(c, s(oe).off, true);
        }), R($, he);
      }), R(b, T);
    };
    ue(ae, (b) => {
      s(ee).length && b(de);
    });
  }
  var ne = p(Ue, 2), pe = f(ne), we = p(f(pe), 2), A = f(we);
  {
    var G = (b) => {
      var T = Ol();
      let Q;
      var $ = f(T), oe = p($);
      {
        var he = (re) => {
          var Te = Rl(), Ye = ot(Te), vt = p(Ye);
          {
            var Tt = (Et) => {
              var un = en("\xB7 mirror");
              R(Et, un);
            };
            ue(vt, (Et) => {
              s(v).mirrored && Et(Tt);
            });
          }
          K((Et) => w(Ye, `\xB7 ROM ${Et ?? ""} `), [() => M(s(v).offset)]), R(re, Te);
        };
        ue(oe, (re) => {
          s(v)?.inCart && s(v)?.offset !== null && re(he);
        });
      }
      K((re) => {
        Q = et(T, 1, "svelte-1kb9ux", null, Q, { "g-pc-dim": !s(v)?.inCart }), w($, `${s(u) ?? ""} PC\u2192${re ?? ""}
              \xB7 ${s(v)?.label ?? "BUS" ?? ""} `);
      }, [() => M(s(v)?.address ?? 0)]), R(b, T);
    }, X = (b) => {
      var T = Ll();
      let Q;
      var $ = f(T), oe = p($);
      {
        var he = (re) => {
          var Te = en();
          K((Ye) => w(Te, `\xB7 ROM ${Ye ?? ""}`), [() => M(s(v).offset)]), R(re, Te);
        };
        ue(oe, (re) => {
          s(v).inCart && s(v).offset !== null && re(he);
        });
      }
      K((re) => {
        Q = et(T, 1, "svelte-1kb9ux", null, Q, { "g-pc-dim": !s(v).inCart }), w($, `${s(u) ?? ""} PC\u2192${re ?? ""} \xB7 ${s(v).label ?? ""} `);
      }, [() => M(s(v).address)]), R(b, T);
    }, Me = (b) => {
      var T = en("waiting for first PC sample\u2026");
      R(b, T);
    }, De = (b) => {
      var T = en("pause \xB7 scroll \xB7 jump 0x...");
      R(b, T);
    };
    ue(A, (b) => {
      s(l) && s(c) !== null ? b(G) : s(v) ? b(X, 1) : s(l) ? b(Me, 2) : b(De, -1);
    });
  }
  var We = p(pe, 2);
  gl(We, { get bytes() {
    return t.bytes;
  }, get cursor() {
    return s(c);
  }, get follow() {
    return s(h);
  }, onByteClick: ye });
  var Ce = p(We, 2), Fe = f(Ce);
  {
    var _ = (b) => {
      var T = Nl(), Q = p(ot(T), 2);
      nt(Q, 17, () => s(S), tt, ($, oe, he) => {
        var re = Fl();
        et(re, 1, "g-trail-row svelte-1kb9ux", null, {}, { hot: he === 0 });
        var Te = f(re);
        Te.textContent = he === 0 ? "NOW" : `-${he}`;
        var Ye = p(Te, 2), vt = f(Ye), Tt = p(Ye, 2), Et = f(Tt), un = p(Tt, 2), Ts = f(un);
        K((Rs, Os) => {
          w(vt, Rs), w(Et, Os), w(Ts, s(oe).mode);
        }, [() => M(s(oe).address), () => M(s(oe).offset)]), me("click", re, () => d(c, s(oe).offset, true)), R($, re);
      }), R(b, T);
    }, k = (b) => {
      var T = en("PC trail: waiting for cart code");
      R(b, T);
    };
    ue(Fe, (b) => {
      s(S).length ? b(_) : b(k, -1);
    });
  }
  var L = p(Fe, 2);
  {
    var V = (b) => {
      var T = Il(), Q = f(T);
      K(() => w(Q, s(x))), R(b, T);
    };
    ue(L, (b) => {
      s(x) && b(V);
    });
  }
  K(() => {
    Ne.disabled = !t.bytes || s(l), Be.disabled = !s(l), Ee.disabled = !t.bytes || !s(i), Le = et(ge, 1, "g-follow svelte-1kb9ux", null, Le, { "g-follow-on": s(h) }), ge.disabled = !s(i), w(y, s(h) ? "FOLLOWING PC" : "FOLLOW PC"), w(U, s(o));
  }), me("click", Ne, Y), me("click", Be, se), me("click", Ee, te), me("click", ge, P), R(e, ce), bt();
}
Qt(["click"]);
var Dl = z('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), Pl = z('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), zl = z('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), Ul = z('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function ql(e, t) {
  ht(t, true);
  var n = Ul(), a = f(n);
  {
    var r = (o) => {
      var c = Dl();
      R(o, c);
    }, i = (o) => {
      var c = Pl(), v = ot(c), u = p(f(v), 2), m = f(u), h = p(v, 2), S = p(f(h), 2), x = f(S), O = p(h, 2), E = p(f(O), 2), H = f(E);
      K((j, g) => {
        Ze(u, "title", t.file.name), w(m, t.file.name), w(x, j), w(H, g);
      }, [() => lr(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), R(o, c);
    }, l = (o) => {
      var c = zl();
      R(o, c);
    };
    ue(a, (o) => {
      t.parsing ? o(r) : t.file ? o(i, 1) : o(l, -1);
    });
  }
  R(e, n), bt();
}
var Hl = z('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function Wl(e, t) {
  ht(t, true);
  let n = q(false), a = 0;
  function r(c) {
    const v = c.dataTransfer;
    if (!v) return false;
    const u = v.types;
    if (!u) return false;
    for (let m = 0; m < u.length; m++) if (u[m] === "Files") return true;
    return false;
  }
  Ge(() => {
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
      const S = h.dataTransfer?.files?.[0];
      if (S) try {
        const x = await Cs(S);
        t.onfile?.(x);
      } catch (x) {
        t.onerror?.(x.message || String(x));
      }
    }
    return window.addEventListener("dragenter", c), window.addEventListener("dragover", v), window.addEventListener("dragleave", u), window.addEventListener("drop", m), () => {
      window.removeEventListener("dragenter", c), window.removeEventListener("dragover", v), window.removeEventListener("dragleave", u), window.removeEventListener("drop", m);
    };
  });
  var i = zn(), l = ot(i);
  {
    var o = (c) => {
      var v = Hl();
      R(c, v);
    };
    ue(l, (c) => {
      s(n) && c(o);
    });
  }
  R(e, i), bt();
}
var Gl = z('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), Vl = z('<span class="s-badge entrance svelte-1n46o8q"> </span>'), Yl = z('<span class="s-summary svelte-1n46o8q"> </span>'), Xl = z('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), Kl = z('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), Jl = z('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Zl = z('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), Ql = z('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), $l = z('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), eo = z('<p class="err svelte-1n46o8q"> </p>'), to = z('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), no = z("<!> <!>", 1), ro = z('<span class="s-hint svelte-1n46o8q"> </span>'), so = z('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function ao(e, t) {
  ht(t, true);
  let n = q(null), a = q(null), r = q(null), i = q(null), l = q(null), o = q(null), c = q(null), v = q(""), u = q("inspect"), m = q(yt(ks())), h = q(false), S = q(null), x = q(null), O = q(""), E = q(false);
  const H = "scry \xB7 awaiting binary", j = "scry-booted-v2", g = { inspect: "click a section/segment/string -> jump in HEX", hex: "scroll or PgUp/PgDn, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, N = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  Ge(() => {
    function A(G) {
      if (G.origin !== location.origin) return;
      const X = G.data;
      X && (X.type === "scry-theme" && (X.value === "light" || X.value === "dark") ? (document.documentElement.setAttribute("data-theme", X.value), d(m, X.value, true)) : X.type === "scry-load-demo" && J());
    }
    return window.addEventListener("message", A), () => window.removeEventListener("message", A);
  });
  function I(A) {
    if (!A || A.length === 0) return null;
    const G = 256 * 1024, X = Math.max(1, Math.ceil(A.length / G)), Me = new Uint32Array(256);
    let De = 0;
    for (let Ce = 0; Ce < A.length; Ce += X) Me[A[Ce]]++, De++;
    if (!De) return null;
    let We = 0;
    for (let Ce = 0; Ce < Me.length; Ce++) {
      const Fe = Me[Ce];
      if (!Fe) continue;
      const _ = Fe / De;
      We -= _ * Math.log2(_);
    }
    return We;
  }
  async function M({ name: A, bytes: G }) {
    d(n, { name: A, bytes: G }, true), d(v, ""), d(r, null), d(i, null), d(l, null), d(o, null), d(a, null), d(c, null), d(x, null), d(h, true);
    try {
      const X = await Rn();
      if (d(a, X.detect_format(G), true), s(a) === "elf") d(r, X.parse_elf(G), true), d(u, "inspect");
      else if (s(a) === "wav") {
        try {
          d(i, X.decode_wav(G), true);
        } catch {
        }
        d(u, "wave");
      } else if (s(a) === "gba") {
        try {
          d(l, X.parse_gba(G), true);
        } catch {
        }
        d(u, "game");
      } else d(u, "hex");
      s(a) === "elf" && d(o, X.extract_strings(G, 4), true), s(a) !== "gba" && d(c, I(G), true);
    } catch (X) {
      d(v, String(X), true);
    } finally {
      d(h, false);
    }
  }
  function W() {
    d(n, null), d(r, null), d(i, null), d(l, null), d(o, null), d(a, null), d(v, ""), d(c, null), d(x, null);
  }
  function ee(A) {
    d(v, A, true);
  }
  function ie() {
    d(m, Ci(), true);
  }
  function J() {
    M({ name: Ms, bytes: Ss() });
  }
  function ye(A) {
    d(u, "hex"), d(S, { o: A, t: performance.now() }, true);
  }
  function B(A) {
    d(x, A, true);
  }
  let Y = It(() => {
    if (!s(n)) return null;
    if (s(r)) {
      const A = s(r).summary;
      return [s(a)?.toUpperCase(), A.machine, A.class, A.kind].filter(Boolean).join(" \xB7 ");
    }
    return (s(a) || "raw").toUpperCase();
  }), se = It(() => {
    if (!s(n)) return null;
    if (s(r)) {
      const A = s(r).summary, G = [];
      return A.class && A.machine ? G.push(`${A.class} ${A.machine}`) : A.machine && G.push(A.machine), G.push(`${s(r).sections.length} sections`), G.push(`${s(r).symbols.length} symbols`), s(c) != null && G.push(`avg entropy ${s(c).toFixed(1)} bits`), G.join(" \xB7 ");
    }
    if (s(i)) {
      const A = s(i).fmt, G = s(i).duration < 1 ? `${(s(i).duration * 1e3).toFixed(0)} ms` : `${s(i).duration.toFixed(2)} s`, X = [`${A.channels}ch ${A.sample_rate} Hz`, `${A.bits_per_sample}-bit`, G];
      return s(c) != null && X.push(`avg entropy ${s(c).toFixed(1)} bits`), X.join(" \xB7 ");
    }
    if (s(l)) {
      const A = ["GBA cart", `"${s(l).title || "(blank)"}"`, `code ${s(l).game_code}`];
      return s(c) != null && A.push(`avg entropy ${s(c).toFixed(1)} bits`), A.join(" \xB7 ");
    }
    return s(c) != null ? `bytes only \xB7 entropy ${s(c).toFixed(1)} bits` : null;
  });
  Ge(() => {
    if (sessionStorage.getItem(j)) {
      d(O, H), d(E, true);
      return;
    }
    let A = 0;
    const G = setInterval(() => {
      if (A++, d(O, H.slice(0, A), true), A >= H.length) {
        clearInterval(G), d(E, true);
        try {
          sessionStorage.setItem(j, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(G);
  });
  var fe = so(), C = ot(fe);
  Wl(C, { onfile: M, onerror: ee });
  var D = p(C, 2);
  let P;
  var te = f(D), ce = f(te);
  {
    var xe = (A) => {
      var G = Gl(), X = f(G);
      let Me;
      K(() => {
        Ze(G, "title", s(n) ? "Clear file \xB7 back to import" : ""), Me = et(X, 1, "s-brand svelte-1n46o8q", null, Me, { "s-brand-clickable": !!s(n) });
      }), me("click", G, W), R(A, G);
    };
    ue(ce, (A) => {
      N || A(xe);
    });
  }
  var Ae = p(ce, 2);
  {
    var je = (A) => {
      var G = Jl(), X = f(G);
      {
        var Me = (Fe) => {
          var _ = Xl(), k = f(_);
          $a(k, () => s(n).name, (b) => {
            var T = Vl(), Q = f(T);
            K(() => w(Q, `[ ${s(Y) ?? ""} ]`)), R(b, T);
          });
          var L = p(k, 2);
          {
            var V = (b) => {
              var T = Yl(), Q = f(T);
              K(() => w(Q, s(se))), R(b, T);
            };
            ue(L, (b) => {
              s(se) && b(V);
            });
          }
          R(Fe, _);
        };
        ue(X, (Fe) => {
          s(Y) && Fe(Me);
        });
      }
      var De = p(X, 2);
      {
        var We = (Fe) => {
          var _ = Kl();
          R(Fe, _);
        };
        ue(De, (Fe) => {
          s(h) && Fe(We);
        });
      }
      var Ce = p(De, 2);
      me("click", Ce, W), R(A, G);
    }, Se = (A) => {
      var G = Zl();
      R(A, G);
    };
    ue(Ae, (A) => {
      s(n) ? A(je) : A(Se, -1);
    });
  }
  var Ue = p(Ae, 2);
  {
    var Oe = (A) => {
      var G = Ql(), X = f(G), Me = f(X);
      K(() => w(Me, s(m) === "dark" ? "\u263C" : "\u263E")), me("click", X, ie), R(A, G);
    };
    ue(Ue, (A) => {
      N || A(Oe);
    });
  }
  var le = p(te, 2), ke = f(le);
  ql(ke, { get file() {
    return s(n);
  }, get format() {
    return s(a);
  }, get parsing() {
    return s(h);
  } });
  var Ne = p(ke, 2), Be = f(Ne);
  {
    var Ee = (A) => {
      var G = $l(), X = f(G);
      let Me;
      var De = p(X, 2);
      let We;
      var Ce = p(De, 2);
      let Fe;
      var _ = p(Ce, 2);
      let k;
      var L = p(_, 2);
      let V;
      K(() => {
        X.disabled = s(a) !== "elf", Ze(X, "title", s(a) === "elf" ? "" : "INSPECT is ELF-only"), Me = et(X, 1, "svelte-1n46o8q", null, Me, { on: s(u) === "inspect" }), We = et(De, 1, "svelte-1n46o8q", null, We, { on: s(u) === "hex" }), Ce.disabled = s(a) !== "wav", Ze(Ce, "title", s(a) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), Fe = et(Ce, 1, "svelte-1n46o8q", null, Fe, { on: s(u) === "wave" }), _.disabled = s(a) !== "gba", Ze(_, "title", s(a) === "gba" ? "" : "CART is GBA-only"), k = et(_, 1, "svelte-1n46o8q", null, k, { on: s(u) === "cart" }), L.disabled = s(a) !== "gba", Ze(L, "title", s(a) === "gba" ? "" : "GAME is GBA-only"), V = et(L, 1, "svelte-1n46o8q", null, V, { on: s(u) === "game" });
      }), me("click", X, () => d(u, "inspect")), me("click", De, () => d(u, "hex")), me("click", Ce, () => d(u, "wave")), me("click", _, () => d(u, "cart")), me("click", L, () => d(u, "game")), R(A, G);
    };
    ue(Be, (A) => {
      s(n) && A(Ee);
    });
  }
  var ge = p(Be, 2), Le = f(ge);
  {
    var qe = (A) => {
      Bi(A, { onfile: M });
    }, y = (A) => {
      var G = no(), X = ot(G);
      {
        var Me = (L) => {
          var V = eo(), b = f(V);
          K(() => w(b, `parse failed: ${s(v) ?? ""}`)), R(L, V);
        };
        ue(X, (L) => {
          s(v) && L(Me);
        });
      }
      var De = p(X, 2);
      {
        var We = (L) => {
          var V = zn(), b = ot(V);
          {
            var T = ($) => {
              Qi($, { get report() {
                return s(r);
              }, get strings() {
                return s(o);
              }, onJumpToOffset: ye });
            }, Q = ($) => {
              var oe = to(), he = p(f(oe)), re = f(he);
              K(() => w(re, s(a))), R($, oe);
            };
            ue(b, ($) => {
              s(r) ? $(T) : s(a) && s(a) !== "elf" && $(Q, 1);
            });
          }
          R(L, V);
        }, Ce = (L) => {
          {
            let V = It(() => s(x)?.follow && s(x)?.inCart ? s(x) : null);
            sl(L, { get bytes() {
              return s(n).bytes;
            }, get format() {
              return s(a);
            }, get jumpTo() {
              return s(S);
            }, get followTarget() {
              return s(V);
            } });
          }
        }, Fe = (L) => {
          ul(L, { get bytes() {
            return s(n).bytes;
          } });
        }, _ = (L) => {
          ml(L, { get bytes() {
            return s(n).bytes;
          } });
        }, k = (L) => {
          jl(L, { get bytes() {
            return s(n).bytes;
          }, get header() {
            return s(l);
          }, onPcUpdate: B });
        };
        ue(De, (L) => {
          s(u) === "inspect" ? L(We) : s(u) === "hex" ? L(Ce, 1) : s(u) === "wave" ? L(Fe, 2) : s(u) === "cart" ? L(_, 3) : s(u) === "game" && L(k, 4);
        });
      }
      R(A, G);
    };
    ue(Le, (A) => {
      s(n) ? A(y, -1) : A(qe);
    });
  }
  var F = p(le, 2), U = f(F), ae = p(f(U), 1, true), de = p(U, 2);
  {
    var ne = (A) => {
      var G = ro(), X = f(G);
      K(() => w(X, g[s(u)] ?? "")), R(A, G);
    };
    ue(de, (A) => {
      s(n) && A(ne);
    });
  }
  var pe = p(de, 2), we = f(pe);
  K((A) => {
    P = et(D, 1, "app svelte-1n46o8q", null, P, { embedded: N }), w(ae, s(n) ? N ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : s(E) ? N ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${s(O)}\u2588`), w(we, `MODULE \xB7 ${A ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => s(n) ? s(u).toUpperCase() : "EMPTY"]), R(e, fe), bt();
}
Qt(["click"]);
Ka(ao, { target: document.getElementById("app") });
