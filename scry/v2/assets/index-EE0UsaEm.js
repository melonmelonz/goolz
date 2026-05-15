(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && s(l);
  }).observe(document, { childList: true, subtree: true });
  function n(r) {
    const i = {};
    return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function s(r) {
    if (r.ep) return;
    r.ep = true;
    const i = n(r);
    fetch(r.href, i);
  }
})();
const Vs = false;
var Kr = Array.isArray, Ws = Array.prototype.indexOf, dn = Array.prototype.includes, Jn = Array.from, Gs = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, Ys = Object.getOwnPropertyDescriptors, Xs = Object.prototype, Ks = Array.prototype, Jr = Object.getPrototypeOf, Fr = Object.isExtensible;
const Js = () => {
};
function Zs(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Zr() {
  var e, t, n = new Promise((s, r) => {
    e = s, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
function Qs(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const s of e) if (n.push(s), n.length === t) break;
  return n;
}
const Ke = 2, vn = 4, Zn = 8, Qr = 1 << 24, At = 16, wt = 32, Wt = 64, cr = 128, ct = 512, He = 1024, Xe = 2048, kt = 4096, Ze = 8192, ft = 16384, ln = 32768, fr = 1 << 25, pn = 65536, ur = 1 << 17, $s = 1 << 18, bn = 1 << 19, ea = 1 << 20, xt = 1 << 25, sn = 65536, Wn = 1 << 21, On = 1 << 22, Ut = 1 << 23, Un = Symbol("$state"), ta = Symbol(""), Lt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function $r(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function na() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ra(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function sa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function aa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ia(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function la() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function oa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ca() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ua() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const da = 1, va = 2, es = 4, pa = 8, ha = 16, _a = 1, ma = 2, Ve = Symbol(), ts = "http://www.w3.org/1999/xhtml";
function ba() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ga() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ns(e) {
  return e === this.v;
}
function ya(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function rs(e) {
  return !ya(e, this.v);
}
let wa = false, Qe = null;
function hn(e) {
  Qe = e;
}
function ht(e, t = false, n) {
  Qe = { p: Qe, i: false, c: null, e: null, s: e, x: null, r: be, l: null };
}
function _t(e) {
  var t = Qe, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var s of n) xs(s);
  }
  return t.i = true, Qe = t.p, {};
}
function ss() {
  return true;
}
let $t = [];
function as() {
  var e = $t;
  $t = [], Zs(e);
}
function qt(e) {
  if ($t.length === 0 && !Cn) {
    var t = $t;
    queueMicrotask(() => {
      t === $t && as();
    });
  }
  $t.push(e);
}
function xa() {
  for (; $t.length > 0; ) as();
}
function is(e) {
  var t = be;
  if (t === null) return xe.f |= Ut, e;
  if (!(t.f & ln) && !(t.f & vn)) throw e;
  zt(e, t);
}
function zt(e, t) {
  for (; t !== null; ) {
    if (t.f & cr) {
      if (!(t.f & ln)) throw e;
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
const Ea = -7169;
function Ue(e, t) {
  e.f = e.f & Ea | t;
}
function gr(e) {
  e.f & ct || e.deps === null ? Ue(e, He) : Ue(e, kt);
}
function ls(e) {
  if (e !== null) for (const t of e) !(t.f & Ke) || !(t.f & sn) || (t.f ^= sn, ls(t.deps));
}
function os(e, t, n) {
  e.f & Xe ? t.add(e) : e.f & kt && n.add(e), ls(e.deps), Ue(e, He);
}
const Jt = /* @__PURE__ */ new Set();
let pe = null, gt = null, dr = null, Cn = false, nr = false, un = null, qn = null;
var Lr = 0;
let Aa = 1;
class Gt {
  id = Aa++;
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
  #d = /* @__PURE__ */ new Set();
  is_fork = false;
  #p = false;
  #v = /* @__PURE__ */ new Set();
  #u() {
    return this.is_fork || this.#r.size > 0;
  }
  #m() {
    for (const s of this.#v) for (const r of s.#r.keys()) {
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
    this.#l.has(t) || this.#l.set(t, { d: [], m: [] }), this.#d.delete(t);
  }
  unskip_effect(t, n = (s) => this.schedule(s)) {
    var s = this.#l.get(t);
    if (s) {
      this.#l.delete(t);
      for (var r of s.d) Ue(r, Xe), n(r);
      for (r of s.m) Ue(r, kt), n(r);
    }
    this.#d.add(t);
  }
  #h() {
    if (Lr++ > 1e3 && (Jt.delete(this), ka()), !this.#u()) {
      for (const c of this.#c) this.#f.delete(c), Ue(c, Xe), this.schedule(c);
      for (const c of this.#f) Ue(c, kt), this.schedule(c);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = un = [], s = [], r = qn = [];
    for (const c of t) try {
      this.#b(c, n, s);
    } catch (f) {
      throw us(c), f;
    }
    if (pe = null, r.length > 0) {
      var i = Gt.ensure();
      for (const c of r) i.schedule(c);
    }
    if (un = null, qn = null, this.#u() || this.#m()) {
      this.#_(s), this.#_(n);
      for (const [c, f] of this.#l) fs(c, f);
    } else {
      this.#s.size === 0 && Jt.delete(this), this.#c.clear(), this.#f.clear();
      for (const c of this.#n) c(this);
      this.#n.clear(), Rr(s), Rr(n), this.#a?.resolve();
    }
    var l = pe;
    if (this.#t.length > 0) {
      const c = l ??= this;
      c.#t.push(...this.#t.filter((f) => !c.#t.includes(f)));
    }
    l !== null && (Jt.add(l), l.#h());
  }
  #b(t, n, s) {
    t.f ^= He;
    for (var r = t.first; r !== null; ) {
      var i = r.f, l = (i & (wt | Wt)) !== 0, c = l && (i & He) !== 0, f = c || (i & Ze) !== 0 || this.#l.has(r);
      if (!f && r.fn !== null) {
        l ? r.f ^= He : i & vn ? n.push(r) : Bn(r) && (i & At && this.#f.add(r), mn(r));
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      }
      for (; r !== null; ) {
        var o = r.next;
        if (o !== null) {
          r = o;
          break;
        }
        r = r.parent;
      }
    }
  }
  #_(t) {
    for (var n = 0; n < t.length; n += 1) os(t[n], this.#c, this.#f);
  }
  capture(t, n, s = false) {
    t.v !== Ve && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Ut || (this.current.set(t, [n, s]), gt?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    pe = this;
  }
  deactivate() {
    pe = null, gt = null;
  }
  flush() {
    try {
      nr = true, pe = this, this.#h();
    } finally {
      Lr = 0, dr = null, un = null, qn = null, nr = false, pe = null, gt = null, tn.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Jt.delete(this);
  }
  register_created_effect(t) {
    this.#i.push(t);
  }
  #g() {
    for (const o of Jt) {
      var t = o.id < this.id, n = [];
      for (const [h, [v, w]] of this.current) {
        if (o.current.has(h)) {
          var s = o.current.get(h)[0];
          if (t && v !== s) o.current.set(h, [v, w]);
          else continue;
        }
        n.push(h);
      }
      var r = [...o.current.keys()].filter((h) => !this.current.has(h));
      if (r.length === 0) t && o.discard();
      else if (n.length > 0) {
        if (t) for (const h of this.#d) o.unskip_effect(h, (v) => {
          v.f & (At | On) ? o.schedule(v) : o.#_([v]);
        });
        o.activate();
        var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var c of n) cs(c, r, i, l);
        l = /* @__PURE__ */ new Map();
        var f = [...o.current.keys()].filter((h) => this.current.has(h) ? this.current.get(h)[0] !== h : true);
        for (const h of this.#i) !(h.f & (ft | Ze | ur)) && yr(h, f, l) && (h.f & (On | At) ? (Ue(h, Xe), o.schedule(h)) : o.#c.add(h));
        if (o.#t.length > 0) {
          o.apply();
          for (var u of o.#t) o.#b(u, [], []);
          o.#t = [];
        }
        o.deactivate();
      }
    }
    for (const o of Jt) o.#v.has(this) && (o.#v.delete(this), o.#v.size === 0 && !o.#u() && (o.activate(), o.#h()));
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
      let i = this.#r.get(n) ?? 0;
      i === 1 ? this.#r.delete(n) : this.#r.set(n, i - 1);
    }
    this.#p || s || (this.#p = true, qt(() => {
      this.#p = false, this.flush();
    }));
  }
  transfer_effects(t, n) {
    for (const s of t) this.#c.add(s);
    for (const s of n) this.#f.add(s);
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
    return (this.#a ??= Zr()).promise;
  }
  static ensure() {
    if (pe === null) {
      const t = pe = new Gt();
      nr || (Jt.add(pe), Cn || qt(() => {
        pe === t && t.flush();
      }));
    }
    return pe;
  }
  apply() {
    {
      gt = null;
      return;
    }
  }
  schedule(t) {
    if (dr = t, t.b?.is_pending && t.f & (vn | Zn | Qr) && !(t.f & ln)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var s = n.f;
      if (un !== null && n === be && (xe === null || !(xe.f & Ke))) return;
      if (s & (Wt | wt)) {
        if (!(s & He)) return;
        n.f ^= He;
      }
    }
    this.#t.push(n);
  }
}
function Sa(e) {
  var t = Cn;
  Cn = true;
  try {
    for (var n; ; ) {
      if (xa(), pe === null) return n;
      pe.flush();
    }
  } finally {
    Cn = t;
  }
}
function ka() {
  try {
    la();
  } catch (e) {
    zt(e, dr);
  }
}
let Ft = null;
function Rr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var s = e[n++];
      if (!(s.f & (ft | Ze)) && Bn(s) && (Ft = /* @__PURE__ */ new Set(), mn(s), s.deps === null && s.first === null && s.nodes === null && s.teardown === null && s.ac === null && As(s), Ft?.size > 0)) {
        tn.clear();
        for (const r of Ft) {
          if (r.f & (ft | Ze)) continue;
          const i = [r];
          let l = r.parent;
          for (; l !== null; ) Ft.has(l) && (Ft.delete(l), i.push(l)), l = l.parent;
          for (let c = i.length - 1; c >= 0; c--) {
            const f = i[c];
            f.f & (ft | Ze) || mn(f);
          }
        }
        Ft.clear();
      }
    }
    Ft = null;
  }
}
function cs(e, t, n, s) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const r of e.reactions) {
    const i = r.f;
    i & Ke ? cs(r, t, n, s) : i & (On | At) && !(i & Xe) && yr(r, t, s) && (Ue(r, Xe), wr(r));
  }
}
function yr(e, t, n) {
  const s = n.get(e);
  if (s !== void 0) return s;
  if (e.deps !== null) for (const r of e.deps) {
    if (dn.call(t, r)) return true;
    if (r.f & Ke && yr(r, t, n)) return n.set(r, true), true;
  }
  return n.set(e, false), false;
}
function wr(e) {
  pe.schedule(e);
}
function fs(e, t) {
  if (!(e.f & wt && e.f & He)) {
    e.f & Xe ? t.d.push(e) : e.f & kt && t.m.push(e), Ue(e, He);
    for (var n = e.first; n !== null; ) fs(n, t), n = n.next;
  }
}
function us(e) {
  Ue(e, He);
  for (var t = e.first; t !== null; ) us(t), t = t.next;
}
function Ma(e) {
  let t = 0, n = an(0), s;
  return () => {
    Ar() && (a(n), Sr(() => (t === 0 && (s = Xt(() => e(() => Tn(n)))), t += 1, () => {
      qt(() => {
        t -= 1, t === 0 && (s?.(), s = void 0, Tn(n));
      });
    })));
  };
}
var Ca = pn | bn;
function Ta(e, t, n, s) {
  new Fa(e, t, n, s);
}
class Fa {
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
  #d = false;
  #p = /* @__PURE__ */ new Set();
  #v = /* @__PURE__ */ new Set();
  #u = null;
  #m = Ma(() => (this.#u = an(this.#f), () => {
    this.#u = null;
  }));
  constructor(t, n, s, r) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var l = be;
      l.b = this, l.f |= cr, s(i);
    }, this.parent = be.b, this.transform_error = r ?? this.parent?.transform_error ?? ((i) => i), this.#r = $n(() => {
      this.#g();
    }, Ca);
  }
  #h() {
    try {
      this.#a = it(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #b(t) {
    const n = this.#e.failed;
    n && (this.#i = it(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #_() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = it(() => t(this.#n)), qt(() => {
      var n = this.#c = document.createDocumentFragment(), s = Ot();
      n.append(s), this.#a = this.#w(() => it(() => this.#s(s))), this.#l === 0 && (this.#n.before(n), this.#c = null, nn(this.#t, () => {
        this.#t = null;
      }), this.#y(pe));
    }));
  }
  #g() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#f = 0, this.#a = it(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#c = document.createDocumentFragment();
        Cr(this.#a, t);
        const n = this.#e.pending;
        this.#t = it(() => n(this.#n));
      } else this.#y(pe);
    } catch (n) {
      this.error(n);
    }
  }
  #y(t) {
    this.is_pending = false, t.transfer_effects(this.#p, this.#v);
  }
  defer_effect(t) {
    os(t, this.#p, this.#v);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #w(t) {
    var n = be, s = xe, r = Qe;
    Mt(this.#r), vt(this.#r), hn(this.#r.ctx);
    try {
      return Gt.ensure(), t();
    } catch (i) {
      return is(i), null;
    } finally {
      Mt(n), vt(s), hn(r);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#y(n), this.#t && nn(this.#t, () => {
      this.#t = null;
    }), this.#c && (this.#n.before(this.#c), this.#c = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#f += t, !(!this.#u || this.#d) && (this.#d = true, qt(() => {
      this.#d = false, this.#u && _n(this.#u, this.#f);
    }));
  }
  get_effect_pending() {
    return this.#m(), a(this.#u);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    pe?.is_fork ? (this.#a && pe.skip_effect(this.#a), this.#t && pe.skip_effect(this.#t), this.#i && pe.skip_effect(this.#i), pe.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (nt(this.#a), this.#a = null), this.#t && (nt(this.#t), this.#t = null), this.#i && (nt(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let s = this.#e.failed;
    var r = false, i = false;
    const l = () => {
      if (r) {
        ga();
        return;
      }
      r = true, i && ua(), this.#i !== null && nn(this.#i, () => {
        this.#i = null;
      }), this.#w(() => {
        this.#g();
      });
    }, c = (f) => {
      try {
        i = true, n?.(f, l), i = false;
      } catch (u) {
        zt(u, this.#r && this.#r.parent);
      }
      s && (this.#i = this.#w(() => {
        try {
          return it(() => {
            var u = be;
            u.b = this, u.f |= cr, s(this.#n, () => f, () => l);
          });
        } catch (u) {
          return zt(u, this.#r.parent), null;
        }
      }));
    };
    qt(() => {
      var f;
      try {
        f = this.transform_error(t);
      } catch (u) {
        zt(u, this.#r && this.#r.parent);
        return;
      }
      f !== null && typeof f == "object" && typeof f.then == "function" ? f.then(c, (u) => zt(u, this.#r && this.#r.parent)) : c(f);
    });
  }
}
function La(e, t, n, s) {
  const r = xr;
  var i = e.filter((v) => !v.settled);
  if (n.length === 0 && i.length === 0) {
    s(t.map(r));
    return;
  }
  var l = be, c = Ra(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((v) => v.promise)) : null;
  function u(v) {
    c();
    try {
      s(v);
    } catch (w) {
      l.f & ft || zt(w, l);
    }
    Gn();
  }
  if (n.length === 0) {
    f.then(() => u(t.map(r)));
    return;
  }
  var o = ds();
  function h() {
    Promise.all(n.map((v) => Oa(v))).then((v) => u([...t.map(r), ...v])).catch((v) => zt(v, l)).finally(() => o());
  }
  f ? f.then(() => {
    c(), h(), Gn();
  }) : h();
}
function Ra() {
  var e = be, t = xe, n = Qe, s = pe;
  return function(i = true) {
    Mt(e), vt(t), hn(n), i && !(e.f & ft) && (s?.activate(), s?.apply());
  };
}
function Gn(e = true) {
  Mt(null), vt(null), hn(null), e && pe?.deactivate();
}
function ds() {
  var e = be, t = e.b, n = pe, s = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(s, e), (r = false) => {
    t.update_pending_count(-1, n), n.decrement(s, e, r);
  };
}
function xr(e) {
  var t = Ke | Xe;
  return be !== null && (be.f |= bn), { ctx: Qe, deps: null, effects: null, equals: ns, f: t, fn: e, reactions: null, rv: 0, v: Ve, wv: 0, parent: be, ac: null };
}
function Oa(e, t, n) {
  let s = be;
  s === null && na();
  var r = void 0, i = an(Ve), l = !xe, c = /* @__PURE__ */ new Map();
  return Ka(() => {
    var f = be, u = Zr();
    r = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Gn);
    } catch (w) {
      u.reject(w), Gn();
    }
    var o = pe;
    if (l) {
      if (f.f & ln) var h = ds();
      if (s.b.is_rendered()) c.get(o)?.reject(Lt), c.delete(o);
      else {
        for (const w of c.values()) w.reject(Lt);
        c.clear();
      }
      c.set(o, u);
    }
    const v = (w, x = void 0) => {
      if (h) {
        var L = x === Lt;
        h(L);
      }
      if (!(x === Lt || f.f & ft)) {
        if (o.activate(), x) i.f |= Ut, _n(i, x);
        else {
          i.f & Ut && (i.f ^= Ut), _n(i, w);
          for (const [k, H] of c) {
            if (c.delete(k), k === o) break;
            H.reject(Lt);
          }
        }
        o.deactivate();
      }
    };
    u.promise.then(v, (w) => v(null, w || "unknown"));
  }), ws(() => {
    for (const f of c.values()) f.reject(Lt);
  }), new Promise((f) => {
    function u(o) {
      function h() {
        o === r ? f(i) : u(r);
      }
      o.then(h, h);
    }
    u(r);
  });
}
function Ht(e) {
  const t = xr(e);
  return Ms(t), t;
}
function Na(e) {
  const t = xr(e);
  return t.equals = rs, t;
}
function Ia(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) nt(t[n]);
  }
}
function Er(e) {
  var t, n = be, s = e.parent;
  if (!Yt && s !== null && s.f & (ft | Ze)) return ba(), e.v;
  Mt(s);
  try {
    e.f &= ~sn, Ia(e), t = Ls(e);
  } finally {
    Mt(n);
  }
  return t;
}
function vs(e) {
  var t = Er(e);
  if (!e.equals(t) && (e.wv = Ts(), (!pe?.is_fork || e.deps === null) && (pe !== null ? pe.capture(e, t, true) : e.v = t, e.deps === null))) {
    Ue(e, He);
    return;
  }
  Yt || (gt !== null ? (Ar() || pe?.is_fork) && gt.set(e, t) : gr(e));
}
function Pa(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Lt), t.teardown = Js, t.ac = null, Nn(t, 0), kr(t));
}
function ps(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && mn(t);
}
let vr = /* @__PURE__ */ new Set();
const tn = /* @__PURE__ */ new Map();
let hs = false;
function an(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: ns, rv: 0, wv: 0 };
  return n;
}
function V(e, t) {
  const n = an(e);
  return Ms(n), n;
}
function Ba(e, t = false, n = true) {
  const s = an(e);
  return t || (s.equals = rs), s;
}
function p(e, t, n = false) {
  xe !== null && (!yt || xe.f & ur) && ss() && xe.f & (Ke | At | On | ur) && (dt === null || !dn.call(dt, e)) && fa();
  let s = n ? Et(t) : t;
  return _n(e, s, qn);
}
function _n(e, t, n = null) {
  if (!e.equals(t)) {
    tn.set(e, Yt ? t : e.v);
    var s = Gt.ensure();
    if (s.capture(e, t), e.f & Ke) {
      const r = e;
      e.f & Xe && Er(r), gt === null && gr(r);
    }
    e.wv = Ts(), _s(e, Xe, n), be !== null && be.f & He && !(be.f & (wt | Wt)) && (at === null ? Qa([e]) : at.push(e)), !s.is_fork && vr.size > 0 && !hs && Da();
  }
  return t;
}
function Da() {
  hs = false;
  for (const e of vr) e.f & He && Ue(e, kt), Bn(e) && mn(e);
  vr.clear();
}
function ja(e, t = 1) {
  var n = a(e), s = t === 1 ? n++ : n--;
  return p(e, n), s;
}
function Tn(e) {
  p(e, e.v + 1);
}
function _s(e, t, n) {
  var s = e.reactions;
  if (s !== null) for (var r = s.length, i = 0; i < r; i++) {
    var l = s[i], c = l.f, f = (c & Xe) === 0;
    if (f && Ue(l, t), c & Ke) {
      var u = l;
      gt?.delete(u), c & sn || (c & ct && (be === null || !(be.f & Wn)) && (l.f |= sn), _s(u, kt, n));
    } else if (f) {
      var o = l;
      c & At && Ft !== null && Ft.add(o), n !== null ? n.push(o) : wr(o);
    }
  }
}
function Et(e) {
  if (typeof e != "object" || e === null || Un in e) return e;
  const t = Jr(e);
  if (t !== Xs && t !== Ks) return e;
  var n = /* @__PURE__ */ new Map(), s = Kr(e), r = V(0), i = rn, l = (c) => {
    if (rn === i) return c();
    var f = xe, u = rn;
    vt(null), Pr(i);
    var o = c();
    return vt(f), Pr(u), o;
  };
  return s && n.set("length", V(e.length)), new Proxy(e, { defineProperty(c, f, u) {
    (!("value" in u) || u.configurable === false || u.enumerable === false || u.writable === false) && oa();
    var o = n.get(f);
    return o === void 0 ? l(() => {
      var h = V(u.value);
      return n.set(f, h), h;
    }) : p(o, u.value, true), true;
  }, deleteProperty(c, f) {
    var u = n.get(f);
    if (u === void 0) {
      if (f in c) {
        const o = l(() => V(Ve));
        n.set(f, o), Tn(r);
      }
    } else p(u, Ve), Tn(r);
    return true;
  }, get(c, f, u) {
    if (f === Un) return e;
    var o = n.get(f), h = f in c;
    if (o === void 0 && (!h || Mn(c, f)?.writable) && (o = l(() => {
      var w = Et(h ? c[f] : Ve), x = V(w);
      return x;
    }), n.set(f, o)), o !== void 0) {
      var v = a(o);
      return v === Ve ? void 0 : v;
    }
    return Reflect.get(c, f, u);
  }, getOwnPropertyDescriptor(c, f) {
    var u = Reflect.getOwnPropertyDescriptor(c, f);
    if (u && "value" in u) {
      var o = n.get(f);
      o && (u.value = a(o));
    } else if (u === void 0) {
      var h = n.get(f), v = h?.v;
      if (h !== void 0 && v !== Ve) return { enumerable: true, configurable: true, value: v, writable: true };
    }
    return u;
  }, has(c, f) {
    if (f === Un) return true;
    var u = n.get(f), o = u !== void 0 && u.v !== Ve || Reflect.has(c, f);
    if (u !== void 0 || be !== null && (!o || Mn(c, f)?.writable)) {
      u === void 0 && (u = l(() => {
        var v = o ? Et(c[f]) : Ve, w = V(v);
        return w;
      }), n.set(f, u));
      var h = a(u);
      if (h === Ve) return false;
    }
    return o;
  }, set(c, f, u, o) {
    var h = n.get(f), v = f in c;
    if (s && f === "length") for (var w = u; w < h.v; w += 1) {
      var x = n.get(w + "");
      x !== void 0 ? p(x, Ve) : w in c && (x = l(() => V(Ve)), n.set(w + "", x));
    }
    if (h === void 0) (!v || Mn(c, f)?.writable) && (h = l(() => V(void 0)), p(h, Et(u)), n.set(f, h));
    else {
      v = h.v !== Ve;
      var L = l(() => Et(u));
      p(h, L);
    }
    var k = Reflect.getOwnPropertyDescriptor(c, f);
    if (k?.set && k.set.call(o, u), !v) {
      if (s && typeof f == "string") {
        var H = n.get("length"), U = Number(f);
        Number.isInteger(U) && U >= H.v && p(H, U + 1);
      }
      Tn(r);
    }
    return true;
  }, ownKeys(c) {
    a(r);
    var f = Reflect.ownKeys(c).filter((h) => {
      var v = n.get(h);
      return v === void 0 || v.v !== Ve;
    });
    for (var [u, o] of n) o.v !== Ve && !(u in c) && f.push(u);
    return f;
  }, setPrototypeOf() {
    ca();
  } });
}
var Or, ms, bs, gs;
function za() {
  if (Or === void 0) {
    Or = window, ms = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    bs = Mn(t, "firstChild").get, gs = Mn(t, "nextSibling").get, Fr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fr(n) && (n.__t = void 0);
  }
}
function Ot(e = "") {
  return document.createTextNode(e);
}
function Yn(e) {
  return bs.call(e);
}
function Pn(e) {
  return gs.call(e);
}
function d(e, t) {
  return Yn(e);
}
function ut(e, t = false) {
  {
    var n = Yn(e);
    return n instanceof Comment && n.data === "" ? Pn(n) : n;
  }
}
function _(e, t = 1, n = false) {
  let s = e;
  for (; t--; ) s = Pn(s);
  return s;
}
function Ua(e) {
  e.textContent = "";
}
function ys() {
  return false;
}
function qa(e, t, n) {
  return document.createElementNS(ts, e, void 0);
}
let Nr = false;
function Ha() {
  Nr || (Nr = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function Qn(e) {
  var t = xe, n = be;
  vt(null), Mt(null);
  try {
    return e();
  } finally {
    vt(t), Mt(n);
  }
}
function Va(e, t, n, s = n) {
  e.addEventListener(t, () => Qn(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), s(true);
  } : e.__on_r = () => s(true), Ha();
}
function Wa(e) {
  be === null && (xe === null && ia(), aa()), Yt && sa();
}
function Ga(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function It(e, t) {
  var n = be;
  n !== null && n.f & Ze && (e |= Ze);
  var s = { ctx: Qe, deps: null, nodes: null, f: e | Xe | ct, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  pe?.register_created_effect(s);
  var r = s;
  if (e & vn) un !== null ? un.push(s) : Gt.ensure().schedule(s);
  else if (t !== null) {
    try {
      mn(s);
    } catch (l) {
      throw nt(s), l;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && !(r.f & bn) && (r = r.first, e & At && e & pn && r !== null && (r.f |= pn));
  }
  if (r !== null && (r.parent = n, n !== null && Ga(r, n), xe !== null && xe.f & Ke && !(e & Wt))) {
    var i = xe;
    (i.effects ??= []).push(r);
  }
  return s;
}
function Ar() {
  return xe !== null && !yt;
}
function ws(e) {
  const t = It(Zn, null);
  return Ue(t, He), t.teardown = e, t;
}
function Ye(e) {
  Wa();
  var t = be.f, n = !xe && (t & wt) !== 0 && (t & ln) === 0;
  if (n) {
    var s = Qe;
    (s.e ??= []).push(e);
  } else return xs(e);
}
function xs(e) {
  return It(vn | ea, e);
}
function Ya(e) {
  Gt.ensure();
  const t = It(Wt | bn, e);
  return (n = {}) => new Promise((s) => {
    n.outro ? nn(t, () => {
      nt(t), s(void 0);
    }) : (nt(t), s(void 0));
  });
}
function Xa(e) {
  return It(vn, e);
}
function Ka(e) {
  return It(On | bn, e);
}
function Sr(e, t = 0) {
  return It(Zn | t, e);
}
function ne(e, t = [], n = [], s = []) {
  La(s, t, n, (r) => {
    It(Zn, () => e(...r.map(a)));
  });
}
function $n(e, t = 0) {
  var n = It(At | t, e);
  return n;
}
function it(e) {
  return It(wt | bn, e);
}
function Es(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Yt, s = xe;
    Ir(true), vt(null);
    try {
      t.call(null);
    } finally {
      Ir(n), vt(s);
    }
  }
}
function kr(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Qn(() => {
      r.abort(Lt);
    });
    var s = n.next;
    n.f & Wt ? n.parent = null : nt(n, t), n = s;
  }
}
function Ja(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & wt || nt(t), t = n;
  }
}
function nt(e, t = true) {
  var n = false;
  (t || e.f & $s) && e.nodes !== null && e.nodes.end !== null && (Za(e.nodes.start, e.nodes.end), n = true), Ue(e, fr), kr(e, t && !n), Nn(e, 0);
  var s = e.nodes && e.nodes.t;
  if (s !== null) for (const i of s) i.stop();
  Es(e), e.f ^= fr, e.f |= ft;
  var r = e.parent;
  r !== null && r.first !== null && As(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Za(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : Pn(e);
    e.remove(), e = n;
  }
}
function As(e) {
  var t = e.parent, n = e.prev, s = e.next;
  n !== null && (n.next = s), s !== null && (s.prev = n), t !== null && (t.first === e && (t.first = s), t.last === e && (t.last = n));
}
function nn(e, t, n = true) {
  var s = [];
  Ss(e, s, true);
  var r = () => {
    n && nt(e), t && t();
  }, i = s.length;
  if (i > 0) {
    var l = () => --i || r();
    for (var c of s) c.out(l);
  } else r();
}
function Ss(e, t, n) {
  if (!(e.f & Ze)) {
    e.f ^= Ze;
    var s = e.nodes && e.nodes.t;
    if (s !== null) for (const c of s) (c.is_global || n) && t.push(c);
    for (var r = e.first; r !== null; ) {
      var i = r.next;
      if (!(r.f & Wt)) {
        var l = (r.f & pn) !== 0 || (r.f & wt) !== 0 && (e.f & At) !== 0;
        Ss(r, t, l ? n : false);
      }
      r = i;
    }
  }
}
function Mr(e) {
  ks(e, true);
}
function ks(e, t) {
  if (e.f & Ze) {
    e.f ^= Ze, e.f & He || (Ue(e, Xe), Gt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var s = n.next, r = (n.f & pn) !== 0 || (n.f & wt) !== 0;
      ks(n, r ? t : false), n = s;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const l of i) (l.is_global || t) && l.in();
  }
}
function Cr(e, t) {
  if (e.nodes) for (var n = e.nodes.start, s = e.nodes.end; n !== null; ) {
    var r = n === s ? null : Pn(n);
    t.append(n), n = r;
  }
}
let Hn = false, Yt = false;
function Ir(e) {
  Yt = e;
}
let xe = null, yt = false;
function vt(e) {
  xe = e;
}
let be = null;
function Mt(e) {
  be = e;
}
let dt = null;
function Ms(e) {
  xe !== null && (dt === null ? dt = [e] : dt.push(e));
}
let $e = null, rt = 0, at = null;
function Qa(e) {
  at = e;
}
let Cs = 1, en = 0, rn = en;
function Pr(e) {
  rn = e;
}
function Ts() {
  return ++Cs;
}
function Bn(e) {
  var t = e.f;
  if (t & Xe) return true;
  if (t & Ke && (e.f &= ~sn), t & kt) {
    for (var n = e.deps, s = n.length, r = 0; r < s; r++) {
      var i = n[r];
      if (Bn(i) && vs(i), i.wv > e.wv) return true;
    }
    t & ct && gt === null && Ue(e, He);
  }
  return false;
}
function Fs(e, t, n = true) {
  var s = e.reactions;
  if (s !== null && !(dt !== null && dn.call(dt, e))) for (var r = 0; r < s.length; r++) {
    var i = s[r];
    i.f & Ke ? Fs(i, t, false) : t === i && (n ? Ue(i, Xe) : i.f & He && Ue(i, kt), wr(i));
  }
}
function Ls(e) {
  var t = $e, n = rt, s = at, r = xe, i = dt, l = Qe, c = yt, f = rn, u = e.f;
  $e = null, rt = 0, at = null, xe = u & (wt | Wt) ? null : e, dt = null, hn(e.ctx), yt = false, rn = ++en, e.ac !== null && (Qn(() => {
    e.ac.abort(Lt);
  }), e.ac = null);
  try {
    e.f |= Wn;
    var o = e.fn, h = o();
    e.f |= ln;
    var v = e.deps, w = pe?.is_fork;
    if ($e !== null) {
      var x;
      if (w || Nn(e, rt), v !== null && rt > 0) for (v.length = rt + $e.length, x = 0; x < $e.length; x++) v[rt + x] = $e[x];
      else e.deps = v = $e;
      if (Ar() && e.f & ct) for (x = rt; x < v.length; x++) (v[x].reactions ??= []).push(e);
    } else !w && v !== null && rt < v.length && (Nn(e, rt), v.length = rt);
    if (ss() && at !== null && !yt && v !== null && !(e.f & (Ke | kt | Xe))) for (x = 0; x < at.length; x++) Fs(at[x], e);
    if (r !== null && r !== e) {
      if (en++, r.deps !== null) for (let L = 0; L < n; L += 1) r.deps[L].rv = en;
      if (t !== null) for (const L of t) L.rv = en;
      at !== null && (s === null ? s = at : s.push(...at));
    }
    return e.f & Ut && (e.f ^= Ut), h;
  } catch (L) {
    return is(L);
  } finally {
    e.f ^= Wn, $e = t, rt = n, at = s, xe = r, dt = i, hn(l), yt = c, rn = f;
  }
}
function $a(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var s = Ws.call(n, e);
    if (s !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[s] = n[r], n.pop());
    }
  }
  if (n === null && t.f & Ke && ($e === null || !dn.call($e, t))) {
    var i = t;
    i.f & ct && (i.f ^= ct, i.f &= ~sn), i.v !== Ve && gr(i), Pa(i), Nn(i, 0);
  }
}
function Nn(e, t) {
  var n = e.deps;
  if (n !== null) for (var s = t; s < n.length; s++) $a(e, n[s]);
}
function mn(e) {
  var t = e.f;
  if (!(t & ft)) {
    Ue(e, He);
    var n = be, s = Hn;
    be = e, Hn = true;
    try {
      t & (At | Qr) ? Ja(e) : kr(e), Es(e);
      var r = Ls(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = Cs;
      var i;
      Vs && wa && e.f & Xe && e.deps;
    } finally {
      Hn = s, be = n;
    }
  }
}
async function ei() {
  await Promise.resolve(), Sa();
}
function a(e) {
  var t = e.f, n = (t & Ke) !== 0;
  if (xe !== null && !yt) {
    var s = be !== null && (be.f & ft) !== 0;
    if (!s && (dt === null || !dn.call(dt, e))) {
      var r = xe.deps;
      if (xe.f & Wn) e.rv < en && (e.rv = en, $e === null && r !== null && r[rt] === e ? rt++ : $e === null ? $e = [e] : $e.push(e));
      else {
        (xe.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [xe] : dn.call(i, xe) || i.push(xe);
      }
    }
  }
  if (Yt && tn.has(e)) return tn.get(e);
  if (n) {
    var l = e;
    if (Yt) {
      var c = l.v;
      return (!(l.f & He) && l.reactions !== null || Os(l)) && (c = Er(l)), tn.set(l, c), c;
    }
    var f = (l.f & ct) === 0 && !yt && xe !== null && (Hn || (xe.f & ct) !== 0), u = (l.f & ln) === 0;
    Bn(l) && (f && (l.f |= ct), vs(l)), f && !u && (ps(l), Rs(l));
  }
  if (gt?.has(e)) return gt.get(e);
  if (e.f & Ut) throw e.v;
  return e.v;
}
function Rs(e) {
  if (e.f |= ct, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & Ke && !(t.f & ct) && (ps(t), Rs(t));
}
function Os(e) {
  if (e.v === Ve) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (tn.has(t) || t.f & Ke && Os(t)) return true;
  return false;
}
function Xt(e) {
  var t = yt;
  try {
    return yt = true, e();
  } finally {
    yt = t;
  }
}
const ti = ["touchstart", "touchmove"];
function ni(e) {
  return ti.includes(e);
}
const xn = Symbol("events"), Ns = /* @__PURE__ */ new Set(), pr = /* @__PURE__ */ new Set();
function ri(e, t, n, s = {}) {
  function r(i) {
    if (s.capture || hr.call(t, i), !i.cancelBubble) return Qn(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? qt(() => {
    t.addEventListener(e, r, s);
  }) : t.addEventListener(e, r, s), r;
}
function Nt(e, t, n, s, r) {
  var i = { capture: s, passive: r }, l = ri(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && ws(() => {
    t.removeEventListener(e, l, i);
  });
}
function ge(e, t, n) {
  (t[xn] ??= {})[e] = n;
}
function Kt(e) {
  for (var t = 0; t < e.length; t++) Ns.add(e[t]);
  for (var n of pr) n(e);
}
let Br = null;
function hr(e) {
  var t = this, n = t.ownerDocument, s = e.type, r = e.composedPath?.() || [], i = r[0] || e.target;
  Br = e;
  var l = 0, c = Br === e && e[xn];
  if (c) {
    var f = r.indexOf(c);
    if (f !== -1 && (t === document || t === window)) {
      e[xn] = t;
      return;
    }
    var u = r.indexOf(t);
    if (u === -1) return;
    f <= u && (l = f);
  }
  if (i = r[l] || e.target, i !== t) {
    Gs(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var o = xe, h = be;
    vt(null), Mt(null);
    try {
      for (var v, w = []; i !== null; ) {
        var x = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var L = i[xn]?.[s];
          L != null && (!i.disabled || e.target === i) && L.call(i, e);
        } catch (k) {
          v ? w.push(k) : v = k;
        }
        if (e.cancelBubble || x === t || x === null) break;
        i = x;
      }
      if (v) {
        for (let k of w) queueMicrotask(() => {
          throw k;
        });
        throw v;
      }
    } finally {
      e[xn] = t, delete e.currentTarget, vt(o), Mt(h);
    }
  }
}
const si = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function ai(e) {
  return si?.createHTML(e) ?? e;
}
function ii(e) {
  var t = qa("template");
  return t.innerHTML = ai(e.replaceAll("<!>", "<!---->")), t.content;
}
function Xn(e, t) {
  var n = be;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function q(e, t) {
  var n = (t & _a) !== 0, s = (t & ma) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = ii(i ? e : "<!>" + e), n || (r = Yn(r)));
    var l = s || ms ? document.importNode(r, true) : r.cloneNode(true);
    if (n) {
      var c = Yn(l), f = l.lastChild;
      Xn(c, f);
    } else Xn(l, l);
    return l;
  };
}
function cn(e = "") {
  {
    var t = Ot(e + "");
    return Xn(t, t), t;
  }
}
function Kn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ot();
  return e.append(t, n), Xn(t, n), e;
}
function D(e, t) {
  e !== null && e.before(t);
}
function C(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function li(e, t) {
  return oi(e, t);
}
const jn = /* @__PURE__ */ new Map();
function oi(e, { target: t, anchor: n, props: s = {}, events: r, context: i, intro: l = true, transformError: c }) {
  za();
  var f = void 0, u = Ya(() => {
    var o = n ?? t.appendChild(Ot());
    Ta(o, { pending: () => {
    } }, (w) => {
      ht({});
      var x = Qe;
      i && (x.c = i), r && (s.$$events = r), f = e(w, s) || {}, _t();
    }, c);
    var h = /* @__PURE__ */ new Set(), v = (w) => {
      for (var x = 0; x < w.length; x++) {
        var L = w[x];
        if (!h.has(L)) {
          h.add(L);
          var k = ni(L);
          for (const E of [t, document]) {
            var H = jn.get(E);
            H === void 0 && (H = /* @__PURE__ */ new Map(), jn.set(E, H));
            var U = H.get(L);
            U === void 0 ? (E.addEventListener(L, hr, { passive: k }), H.set(L, 1)) : H.set(L, U + 1);
          }
        }
      }
    };
    return v(Jn(Ns)), pr.add(v), () => {
      for (var w of h) for (const k of [t, document]) {
        var x = jn.get(k), L = x.get(w);
        --L == 0 ? (k.removeEventListener(w, hr), x.delete(w), x.size === 0 && jn.delete(k)) : x.set(w, L);
      }
      pr.delete(v), o !== n && o.parentNode?.removeChild(o);
    };
  });
  return ci.set(f, u), f;
}
let ci = /* @__PURE__ */ new WeakMap();
class Is {
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
      if (s) Mr(s), this.#s.delete(n);
      else {
        var r = this.#e.get(n);
        r && (this.#o.set(n, r.effect), this.#e.delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), s = r.effect);
      }
      for (const [i, l] of this.#n) {
        if (this.#n.delete(i), i === t) break;
        const c = this.#e.get(l);
        c && (nt(c.effect), this.#e.delete(l));
      }
      for (const [i, l] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const c = () => {
          if (Array.from(this.#n.values()).includes(i)) {
            var u = document.createDocumentFragment();
            Cr(l, u), u.append(Ot()), this.#e.set(i, { effect: l, fragment: u });
          } else nt(l);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !s ? (this.#s.add(i), nn(l, c, false)) : c();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [s, r] of this.#e) n.includes(s) || (nt(r.effect), this.#e.delete(s));
  };
  ensure(t, n) {
    var s = pe, r = ys();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (r) {
      var i = document.createDocumentFragment(), l = Ot();
      i.append(l), this.#e.set(t, { effect: it(() => n(l)), fragment: i });
    } else this.#o.set(t, it(() => n(this.anchor)));
    if (this.#n.set(s, t), r) {
      for (const [c, f] of this.#o) c === t ? s.unskip_effect(f) : s.skip_effect(f);
      for (const [c, f] of this.#e) c === t ? s.unskip_effect(f.effect) : s.skip_effect(f.effect);
      s.oncommit(this.#a), s.ondiscard(this.#t);
    } else this.#a(s);
  }
}
function ve(e, t, n = false) {
  var s = new Is(e), r = n ? pn : 0;
  function i(l, c) {
    s.ensure(l, c);
  }
  $n(() => {
    var l = false;
    t((c, f = 0) => {
      l = true, i(f, c);
    }), l || i(-1, null);
  }, r);
}
const fi = Symbol("NaN");
function ui(e, t, n) {
  var s = new Is(e);
  $n(() => {
    var r = t();
    r !== r && (r = fi), s.ensure(r, n);
  });
}
function lt(e, t) {
  return t;
}
function di(e, t, n) {
  for (var s = [], r = t.length, i, l = t.length, c = 0; c < r; c++) {
    let h = t[c];
    nn(h, () => {
      if (i) {
        if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
          var v = e.outrogroups;
          _r(e, Jn(i.done)), v.delete(i), v.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var f = s.length === 0 && n !== null;
    if (f) {
      var u = n, o = u.parentNode;
      Ua(o), o.append(u), e.items.clear();
    }
    _r(e, t, !f);
  } else i = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function _r(e, t, n = true) {
  var s;
  if (e.pending.size > 0) {
    s = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const c of l) s.add(e.items.get(c).e);
  }
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (s?.has(i)) {
      i.f |= xt;
      const l = document.createDocumentFragment();
      Cr(i, l);
    } else nt(t[r], n);
  }
}
var Dr;
function ot(e, t, n, s, r, i = null) {
  var l = e, c = /* @__PURE__ */ new Map(), f = (t & es) !== 0;
  if (f) {
    var u = e;
    l = u.appendChild(Ot());
  }
  var o = null, h = Na(() => {
    var E = n();
    return Kr(E) ? E : E == null ? [] : Jn(E);
  }), v, w = /* @__PURE__ */ new Map(), x = true;
  function L(E) {
    U.effect.f & ft || (U.pending.delete(E), U.fallback = o, vi(U, v, l, t, s), o !== null && (v.length === 0 ? o.f & xt ? (o.f ^= xt, En(o, null, l)) : Mr(o) : nn(o, () => {
      o = null;
    })));
  }
  function k(E) {
    U.pending.delete(E);
  }
  var H = $n(() => {
    v = a(h);
    for (var E = v.length, I = /* @__PURE__ */ new Set(), z = pe, F = ys(), A = 0; A < E; A += 1) {
      var M = v[A], X = s(M, A), R = x ? null : c.get(X);
      R ? (R.v && _n(R.v, M), R.i && _n(R.i, A), F && z.unskip_effect(R.e)) : (R = pi(c, x ? l : Dr ??= Ot(), M, X, A, r, t, n), x || (R.e.f |= xt), c.set(X, R)), I.add(X);
    }
    if (E === 0 && i && !o && (x ? o = it(() => i(l)) : (o = it(() => i(Dr ??= Ot())), o.f |= xt)), E > I.size && ra(), !x) if (w.set(z, I), F) {
      for (const [K, Z] of c) I.has(K) || z.skip_effect(Z.e);
      z.oncommit(L), z.ondiscard(k);
    } else L(z);
    a(h);
  }), U = { effect: H, items: c, pending: w, outrogroups: null, fallback: o };
  x = false;
}
function yn(e) {
  for (; e !== null && !(e.f & wt); ) e = e.next;
  return e;
}
function vi(e, t, n, s, r) {
  var i = (s & pa) !== 0, l = t.length, c = e.items, f = yn(e.effect.first), u, o = null, h, v = [], w = [], x, L, k, H;
  if (i) for (H = 0; H < l; H += 1) x = t[H], L = r(x, H), k = c.get(L).e, k.f & xt || (k.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(k));
  for (H = 0; H < l; H += 1) {
    if (x = t[H], L = r(x, H), k = c.get(L).e, e.outrogroups !== null) for (const R of e.outrogroups) R.pending.delete(k), R.done.delete(k);
    if (k.f & Ze && (Mr(k), i && (k.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(k))), k.f & xt) if (k.f ^= xt, k === f) En(k, null, n);
    else {
      var U = o ? o.next : f;
      k === e.effect.last && (e.effect.last = k.prev), k.prev && (k.prev.next = k.next), k.next && (k.next.prev = k.prev), Bt(e, o, k), Bt(e, k, U), En(k, U, n), o = k, v = [], w = [], f = yn(o.next);
      continue;
    }
    if (k !== f) {
      if (u !== void 0 && u.has(k)) {
        if (v.length < w.length) {
          var E = w[0], I;
          o = E.prev;
          var z = v[0], F = v[v.length - 1];
          for (I = 0; I < v.length; I += 1) En(v[I], E, n);
          for (I = 0; I < w.length; I += 1) u.delete(w[I]);
          Bt(e, z.prev, F.next), Bt(e, o, z), Bt(e, F, E), f = E, o = F, H -= 1, v = [], w = [];
        } else u.delete(k), En(k, f, n), Bt(e, k.prev, k.next), Bt(e, k, o === null ? e.effect.first : o.next), Bt(e, o, k), o = k;
        continue;
      }
      for (v = [], w = []; f !== null && f !== k; ) (u ??= /* @__PURE__ */ new Set()).add(f), w.push(f), f = yn(f.next);
      if (f === null) continue;
    }
    k.f & xt || v.push(k), o = k, f = yn(k.next);
  }
  if (e.outrogroups !== null) {
    for (const R of e.outrogroups) R.pending.size === 0 && (_r(e, Jn(R.done)), e.outrogroups?.delete(R));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || u !== void 0) {
    var A = [];
    if (u !== void 0) for (k of u) k.f & Ze || A.push(k);
    for (; f !== null; ) !(f.f & Ze) && f !== e.fallback && A.push(f), f = yn(f.next);
    var M = A.length;
    if (M > 0) {
      var X = s & es && l === 0 ? n : null;
      if (i) {
        for (H = 0; H < M; H += 1) A[H].nodes?.a?.measure();
        for (H = 0; H < M; H += 1) A[H].nodes?.a?.fix();
      }
      di(e, A, X);
    }
  }
  i && qt(() => {
    if (h !== void 0) for (k of h) k.nodes?.a?.apply();
  });
}
function pi(e, t, n, s, r, i, l, c) {
  var f = l & da ? l & ha ? an(n) : Ba(n, false, false) : null, u = l & va ? an(r) : null;
  return { v: f, i: u, e: it(() => (i(t, f ?? n, u ?? r, c), () => {
    e.delete(s);
  })) };
}
function En(e, t, n) {
  if (e.nodes) for (var s = e.nodes.start, r = e.nodes.end, i = t && !(t.f & xt) ? t.nodes.start : n; s !== null; ) {
    var l = Pn(s);
    if (i.before(s), s === r) return;
    s = l;
  }
}
function Bt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const jr = [...` 	
\r\f\xA0\v\uFEFF`];
function hi(e, t, n) {
  var s = e == null ? "" : "" + e;
  if (n) {
    for (var r of Object.keys(n)) if (n[r]) s = s ? s + " " + r : r;
    else if (s.length) for (var i = r.length, l = 0; (l = s.indexOf(r, l)) >= 0; ) {
      var c = l + i;
      (l === 0 || jr.includes(s[l - 1])) && (c === s.length || jr.includes(s[c])) ? s = (l === 0 ? "" : s.substring(0, l)) + s.substring(c + 1) : l = c;
    }
  }
  return s === "" ? null : s;
}
function _i(e, t) {
  return e == null ? null : String(e);
}
function et(e, t, n, s, r, i) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var c = hi(n, s, i);
    c == null ? e.removeAttribute("class") : e.className = c, e.__className = n;
  } else if (i && r !== i) for (var f in i) {
    var u = !!i[f];
    (r == null || u !== !!r[f]) && e.classList.toggle(f, u);
  }
  return i;
}
function In(e, t, n, s) {
  var r = e.__style;
  if (r !== t) {
    var i = _i(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return s;
}
const mi = Symbol("is custom element"), bi = Symbol("is html");
function tt(e, t, n, s) {
  var r = gi(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[ta] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && yi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function gi(e) {
  return e.__attributes ??= { [mi]: e.nodeName.includes("-"), [bi]: e.namespaceURI === ts };
}
var zr = /* @__PURE__ */ new Map();
function yi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = zr.get(t);
  if (n) return n;
  zr.set(t, n = []);
  for (var s, r = e, i = Element.prototype; i !== r; ) {
    s = Ys(r);
    for (var l in s) s[l].set && n.push(l);
    r = Jr(r);
  }
  return n;
}
function Tr(e, t, n = t) {
  var s = /* @__PURE__ */ new WeakSet();
  Va(e, "input", async (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = rr(e) ? sr(i) : i, n(i), pe !== null && s.add(pe), await ei(), i !== (i = t())) {
      var l = e.selectionStart, c = e.selectionEnd, f = e.value.length;
      if (e.value = i ?? "", c !== null) {
        var u = e.value.length;
        l === c && c === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(c, u));
      }
    }
  }), Xt(t) == null && e.value && (n(rr(e) ? sr(e.value) : e.value), pe !== null && s.add(pe)), Sr(() => {
    var r = t();
    if (e === document.activeElement) {
      var i = pe;
      if (s.has(i)) return;
    }
    rr(e) && r === sr(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function rr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function sr(e) {
  return e === "" ? null : +e;
}
function Ur(e, t) {
  return e === t || e?.[Un] === t;
}
function St(e = {}, t, n, s) {
  var r = Qe.r, i = be;
  return Xa(() => {
    var l, c;
    return Sr(() => {
      l = c, c = [], Xt(() => {
        e !== n(...c) && (t(e, ...c), l && Ur(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let f = i;
      for (; f !== r && f.parent !== null && f.parent.f & fr; ) f = f.parent;
      const u = () => {
        c && Ur(n(...c), e) && t(null, ...c);
      }, o = f.teardown;
      f.teardown = () => {
        u(), o?.();
      };
    };
  }), e;
}
function Vt(e, t, n, s) {
  var r = s, i = true, l = () => (i && (i = false, r = s), r), c;
  c = e[t], c === void 0 && s !== void 0 && (c = l());
  var f;
  return f = () => {
    var u = e[t];
    return u === void 0 ? l() : (i = true, u);
  }, f;
}
function er(e) {
  Qe === null && $r(), Ye(() => {
    const t = Xt(e);
    if (typeof t == "function") return t;
  });
}
function tr(e) {
  Qe === null && $r(), er(() => () => Xt(e));
}
const wi = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(wi);
function xi() {
  ae._start();
}
function Ei(e) {
  try {
    const r = ae.__wbindgen_add_to_stack_pointer(-16), i = on(e, ae.__wbindgen_export), l = pt;
    ae.decode_wav(r, i, l);
    var t = De().getInt32(r + 4 * 0, true), n = De().getInt32(r + 4 * 1, true), s = De().getInt32(r + 4 * 2, true);
    if (s) throw st(n);
    return st(t);
  } finally {
    ae.__wbindgen_add_to_stack_pointer(16);
  }
}
function Ai(e) {
  let t, n;
  try {
    const i = ae.__wbindgen_add_to_stack_pointer(-16), l = on(e, ae.__wbindgen_export), c = pt;
    ae.detect_format(i, l, c);
    var s = De().getInt32(i + 4 * 0, true), r = De().getInt32(i + 4 * 1, true);
    return t = s, n = r, Sn(s, r);
  } finally {
    ae.__wbindgen_add_to_stack_pointer(16), ae.__wbindgen_export3(t, n, 1);
  }
}
function Si(e, t) {
  try {
    const i = ae.__wbindgen_add_to_stack_pointer(-16), l = on(e, ae.__wbindgen_export), c = pt;
    ae.entropy_blocks(i, l, c, t);
    var n = De().getInt32(i + 4 * 0, true), s = De().getInt32(i + 4 * 1, true), r = Li(n, s).slice();
    return ae.__wbindgen_export3(n, s * 4, 4), r;
  } finally {
    ae.__wbindgen_add_to_stack_pointer(16);
  }
}
function ki(e, t) {
  try {
    const i = ae.__wbindgen_add_to_stack_pointer(-16), l = on(e, ae.__wbindgen_export), c = pt;
    ae.extract_strings(i, l, c, t);
    var n = De().getInt32(i + 4 * 0, true), s = De().getInt32(i + 4 * 1, true), r = De().getInt32(i + 4 * 2, true);
    if (r) throw st(s);
    return st(n);
  } finally {
    ae.__wbindgen_add_to_stack_pointer(16);
  }
}
function Mi(e, t, n) {
  try {
    const l = ae.__wbindgen_add_to_stack_pointer(-16), c = on(e, ae.__wbindgen_export), f = pt;
    ae.hex_rows(l, c, f, t, n);
    var s = De().getInt32(l + 4 * 0, true), r = De().getInt32(l + 4 * 1, true), i = Ri(s, r).slice();
    return ae.__wbindgen_export3(s, r * 4, 4), i;
  } finally {
    ae.__wbindgen_add_to_stack_pointer(16);
  }
}
function Ci(e) {
  try {
    const r = ae.__wbindgen_add_to_stack_pointer(-16), i = on(e, ae.__wbindgen_export), l = pt;
    ae.parse_elf(r, i, l);
    var t = De().getInt32(r + 4 * 0, true), n = De().getInt32(r + 4 * 1, true), s = De().getInt32(r + 4 * 2, true);
    if (s) throw st(n);
    return st(t);
  } finally {
    ae.__wbindgen_add_to_stack_pointer(16);
  }
}
function Ti(e) {
  try {
    const r = ae.__wbindgen_add_to_stack_pointer(-16), i = on(e, ae.__wbindgen_export), l = pt;
    ae.parse_gba(r, i, l);
    var t = De().getInt32(r + 4 * 0, true), n = De().getInt32(r + 4 * 1, true), s = De().getInt32(r + 4 * 2, true);
    if (s) throw st(n);
    return st(t);
  } finally {
    ae.__wbindgen_add_to_stack_pointer(16);
  }
}
function Ps() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const s = Error(Sn(t, n));
    return Dt(s);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const s = String(fn(n)), r = qr(s, ae.__wbindgen_export, ae.__wbindgen_export2), i = pt;
    De().setInt32(t + 4, i, true), De().setInt32(t + 0, r, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(Sn(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let s, r;
    try {
      s = t, r = n, console.error(Sn(t, n));
    } finally {
      ae.__wbindgen_export3(s, r, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return Dt(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return Dt(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return Dt(t);
  }, __wbg_set_6be42768c690e380: function(t, n, s) {
    fn(t)[st(n)] = st(s);
  }, __wbg_set_78ea6a19f4818587: function(t, n, s) {
    fn(t)[n >>> 0] = st(s);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const s = fn(n).stack, r = qr(s, ae.__wbindgen_export, ae.__wbindgen_export2), i = pt;
    De().setInt32(t + 4, i, true), De().setInt32(t + 0, r, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return Dt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const s = Sn(t, n);
    return Dt(s);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return Dt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = fn(t);
    return Dt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    st(t);
  } } };
}
function Dt(e) {
  Ln === Rt.length && Rt.push(Rt.length + 1);
  const t = Ln;
  return Ln = Rt[t], Rt[t] = e, t;
}
function Fi(e) {
  e < 1028 || (Rt[e] = Ln, Ln = e);
}
function Li(e, t) {
  return e = e >>> 0, Oi().subarray(e / 4, e / 4 + t);
}
function Ri(e, t) {
  e = e >>> 0;
  const n = De(), s = [];
  for (let r = e; r < e + 4 * t; r += 4) s.push(st(n.getUint32(r, true)));
  return s;
}
let Qt = null;
function De() {
  return (Qt === null || Qt.buffer.detached === true || Qt.buffer.detached === void 0 && Qt.buffer !== ae.memory.buffer) && (Qt = new DataView(ae.memory.buffer)), Qt;
}
let An = null;
function Oi() {
  return (An === null || An.byteLength === 0) && (An = new Float32Array(ae.memory.buffer)), An;
}
function Sn(e, t) {
  return Ii(e >>> 0, t);
}
let kn = null;
function Fn() {
  return (kn === null || kn.byteLength === 0) && (kn = new Uint8Array(ae.memory.buffer)), kn;
}
function fn(e) {
  return Rt[e];
}
let Rt = new Array(1024).fill(void 0);
Rt.push(void 0, null, true, false);
let Ln = Rt.length;
function on(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return Fn().set(e, n / 1), pt = e.length, n;
}
function qr(e, t, n) {
  if (n === void 0) {
    const c = Rn.encode(e), f = t(c.length, 1) >>> 0;
    return Fn().subarray(f, f + c.length).set(c), pt = c.length, f;
  }
  let s = e.length, r = t(s, 1) >>> 0;
  const i = Fn();
  let l = 0;
  for (; l < s; l++) {
    const c = e.charCodeAt(l);
    if (c > 127) break;
    i[r + l] = c;
  }
  if (l !== s) {
    l !== 0 && (e = e.slice(l)), r = n(r, s, s = l + e.length * 3, 1) >>> 0;
    const c = Fn().subarray(r + l, r + s), f = Rn.encodeInto(e, c);
    l += f.written, r = n(r, s, l, 1) >>> 0;
  }
  return pt = l, r;
}
function st(e) {
  const t = fn(e);
  return Fi(e), t;
}
let Vn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
Vn.decode();
const Ni = 2146435072;
let ar = 0;
function Ii(e, t) {
  return ar += t, ar >= Ni && (Vn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), Vn.decode(), ar = t), Vn.decode(Fn().subarray(e, e + t));
}
const Rn = new TextEncoder();
"encodeInto" in Rn || (Rn.encodeInto = function(e, t) {
  const n = Rn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let pt = 0, ae;
function Bs(e, t) {
  return ae = e.exports, Qt = null, An = null, kn = null, ae.__wbindgen_start(), ae;
}
async function Pi(e, t) {
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
function Bi(e) {
  if (ae !== void 0) return ae;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = Ps();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return Bs(n);
}
async function Ds(e) {
  if (ae !== void 0) return ae;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = Ps();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: s } = await Pi(await e, t);
  return Bs(n);
}
const Di = Object.freeze(Object.defineProperty({ __proto__: null, _start: xi, decode_wav: Ei, default: Ds, detect_format: Ai, entropy_blocks: Si, extract_strings: ki, hex_rows: Mi, initSync: Bi, parse_elf: Ci, parse_gba: Ti }, Symbol.toStringTag, { value: "Module" }));
let ir = null;
function Dn() {
  return ir || (ir = Ds()), ir.then(() => Di);
}
const ji = "scry-theme";
function js() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function zi() {
  const e = js() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(ji, e);
  } catch {
  }
  return e;
}
const mr = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), lr = 65536, or = mr.length * 4;
function Ui() {
  const n = 84 + or, s = new ArrayBuffer(n), r = new DataView(s), i = new Uint8Array(s);
  i[0] = 127, i[1] = 69, i[2] = 76, i[3] = 70, i[4] = 1, i[5] = 1, i[6] = 1, r.setUint16(16, 2, true), r.setUint16(18, 243, true), r.setUint32(20, 1, true), r.setUint32(24, lr, true), r.setUint32(28, 52, true), r.setUint32(32, 0, true), r.setUint32(36, 0, true), r.setUint16(40, 52, true), r.setUint16(42, 32, true), r.setUint16(44, 1, true), r.setUint16(46, 0, true), r.setUint16(48, 0, true), r.setUint16(50, 0, true), r.setUint32(52, 1, true), r.setUint32(56, 84, true), r.setUint32(60, lr, true), r.setUint32(64, lr, true), r.setUint32(68, or, true), r.setUint32(72, or, true), r.setUint32(76, 5, true), r.setUint32(80, 4096, true);
  for (let l = 0; l < mr.length; l++) r.setUint32(84 + l * 4, mr[l], true);
  return new Uint8Array(s);
}
const qi = "demo-rv32-spi-i2c.elf", Hr = 64 * 1024 * 1024;
function br(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function zs(e) {
  if (!e) throw new Error("no file");
  if (e.size > Hr) throw new Error(`file too large (${br(e.size)} > ${br(Hr)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var Hi = q('<span class="bar svelte-1i6c60u"></span>'), Vi = q('<span class="bar shimmer svelte-1i6c60u"></span>'), Wi = q('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Gi = q('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Yi = q('<p class="loading svelte-1i6c60u"> </p>'), Xi = q('<p class="err svelte-1i6c60u"> </p>'), Ki = q('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Ji(e, t) {
  ht(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let s = V(false), r = V(""), i = V(Et([])), l = V(""), c = V(Et({}));
  async function f(R) {
    p(r, "");
    try {
      const K = await zs(R);
      t.onfile?.(K);
    } catch (K) {
      p(r, K.message || String(K), true);
    }
  }
  function u(R) {
    R.preventDefault(), R.stopPropagation(), p(s, false);
    const K = R.dataTransfer?.files?.[0];
    K && f(K);
  }
  function o(R) {
    R.preventDefault(), p(s, true);
  }
  function h() {
    p(s, false);
  }
  function v(R) {
    const K = R.target.files?.[0];
    K && f(K);
  }
  async function w(R) {
    if (!n.test(R)) {
      p(r, `sample blocked: bad name "${R}"`);
      return;
    }
    p(r, ""), p(l, `fetching ${R}\u2026`);
    try {
      const K = await fetch(`../v1/samples/${encodeURIComponent(R)}`);
      if (!K.ok) {
        p(r, `fetch failed: ${K.status}`), p(l, "");
        return;
      }
      p(l, `reading ${R}\u2026`);
      const Z = new Uint8Array(await K.arrayBuffer());
      p(l, ""), t.onfile?.({ name: R, bytes: Z });
    } catch (K) {
      p(r, String(K), true), p(l, "");
    }
  }
  Ye(() => {
    let R = false;
    return (async () => {
      try {
        const K = await fetch("../v1/samples/manifest.json");
        if (!K.ok) return;
        const Z = await K.json();
        if (R || !Array.isArray(Z)) return;
        p(i, Z, true);
        const _e = await Dn();
        if (R) return;
        await Promise.all(Z.map(async (oe) => {
          if (n.test(oe.file)) {
            if (oe.file.endsWith(".gba")) {
              p(c, { ...a(c), [oe.file]: Array(12).fill(0.22) }, true);
              return;
            }
            try {
              const te = await fetch(`../v1/samples/${encodeURIComponent(oe.file)}`);
              if (!te.ok) return;
              const S = new Uint8Array(await te.arrayBuffer());
              if (R) return;
              const j = Math.max(1, Math.ceil(S.length / 12)), G = _e.entropy_blocks(S, j);
              p(c, { ...a(c), [oe.file]: Array.from(G) }, true);
            } catch {
            }
          }
        }));
      } catch {
      }
    })(), () => {
      R = true;
    };
  });
  var x = Ki(), L = d(x);
  let k;
  var H = _(d(L), 4), U = d(H), E = d(U), I = _(H, 2);
  {
    var z = (R) => {
      var K = Gi(), Z = _(d(K), 2);
      ot(Z, 21, () => a(i), lt, (te, S) => {
        var j = Wi(), G = d(j), ce = d(G), ue = _(G, 2), ye = d(ue);
        {
          var Se = (Ae) => {
            var Re = Kn(), je = ut(Re);
            ot(je, 17, () => a(c)[a(S).file], lt, (de, Ce) => {
              var Te = Hi();
              ne((Oe) => In(Te, `height: ${Oe ?? ""}px`), [() => Math.max(2, a(Ce) * 14)]), D(de, Te);
            }), D(Ae, Re);
          }, Pe = (Ae) => {
            var Re = Kn(), je = ut(Re);
            ot(je, 16, () => Array(12), lt, (de, Ce, Te) => {
              var Oe = Vi();
              In(Oe, `animation-delay: ${Te * 40}ms`), D(de, Oe);
            }), D(Ae, Re);
          };
          ve(ye, (Ae) => {
            a(c)[a(S).file] ? Ae(Se) : Ae(Pe, -1);
          });
        }
        ne(() => {
          tt(j, "title", a(S).insns > 0 ? `${a(S).desc} \u2014 ${a(S).insns} instructions` : a(S).desc), C(ce, a(S).file);
        }), ge("click", j, () => w(a(S).file)), D(te, j);
      });
      var _e = _(Z, 2), oe = d(_e);
      ne((te) => C(oe, te), [() => a(i).map((te) => `${te.file} \u2014 ${te.desc}`).join("  \xB7  ")]), D(R, K);
    };
    ve(I, (R) => {
      a(i).length && R(z);
    });
  }
  var F = _(I, 2);
  {
    var A = (R) => {
      var K = Yi(), Z = d(K);
      ne(() => C(Z, a(l))), D(R, K);
    };
    ve(F, (R) => {
      a(l) && R(A);
    });
  }
  var M = _(F, 2);
  {
    var X = (R) => {
      var K = Xi(), Z = d(K);
      ne(() => C(Z, a(r))), D(R, K);
    };
    ve(M, (R) => {
      a(r) && R(X);
    });
  }
  ne(() => k = et(L, 1, "zone svelte-1i6c60u", null, k, { over: a(s) })), Nt("drop", L, u), Nt("dragover", L, o), Nt("dragleave", L, h), ge("change", E, v), D(e, x), _t();
}
Kt(["change", "click"]);
var Zi = q('<span class="ct svelte-etynpr"> </span>'), Qi = q('<span class="ct svelte-etynpr"> </span>'), $i = q('<span class="ct svelte-etynpr"> </span>'), el = q('<span class="ct svelte-etynpr"> </span>'), tl = q("<button> <!> <!> <!> <!></button>"), nl = q('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), rl = q('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), sl = q('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), al = q('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), il = q('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), ll = q('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), ol = q('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), cl = q('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), fl = q('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), ul = q('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function dl(e, t) {
  ht(t, true);
  let n = V("summary");
  const s = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let r = V(""), i = Ht(() => {
    if (!t.strings) return [];
    const U = a(r).trim().toLowerCase();
    return U ? t.strings.filter((E) => E.text.toLowerCase().includes(U)) : t.strings;
  });
  const l = 80, c = Ht(() => t.report ? Math.max(1, ...t.report.sections.map((U) => Number(U.size) || 0)) : 1);
  function f(U) {
    return "0x" + Number(U).toString(16).toUpperCase().padStart(8, "0");
  }
  var u = ul(), o = d(u);
  ot(o, 21, () => s, lt, (U, E) => {
    var I = Ht(() => Qs(a(E), 2));
    let z = () => a(I)[0], F = () => a(I)[1];
    var A = tl();
    let M;
    var X = d(A), R = _(X);
    {
      var K = (G) => {
        var ce = Zi(), ue = d(ce);
        ne(() => C(ue, t.report.sections.length)), D(G, ce);
      };
      ve(R, (G) => {
        z() === "sections" && G(K);
      });
    }
    var Z = _(R, 2);
    {
      var _e = (G) => {
        var ce = Qi(), ue = d(ce);
        ne(() => C(ue, t.report.segments.length)), D(G, ce);
      };
      ve(Z, (G) => {
        z() === "segments" && G(_e);
      });
    }
    var oe = _(Z, 2);
    {
      var te = (G) => {
        var ce = $i(), ue = d(ce);
        ne(() => C(ue, t.report.symbols.length)), D(G, ce);
      };
      ve(oe, (G) => {
        z() === "symbols" && G(te);
      });
    }
    var S = _(oe, 2);
    {
      var j = (G) => {
        var ce = el(), ue = d(ce);
        ne(() => C(ue, t.strings.length)), D(G, ce);
      };
      ve(S, (G) => {
        z() === "strings" && t.strings && G(j);
      });
    }
    ne(() => {
      M = et(A, 1, "tab svelte-etynpr", null, M, { active: a(n) === z() }), C(X, `${F() ?? ""} `);
    }), ge("click", A, () => p(n, z(), true)), D(U, A);
  });
  var h = _(o, 2), v = d(h);
  {
    var w = (U) => {
      var E = nl(), I = _(d(E), 2), z = d(I), F = _(I, 4), A = d(F), M = _(F, 4), X = d(M), R = _(M, 4), K = d(R), Z = _(R, 4), _e = d(Z), oe = _(Z, 4), te = d(oe), S = _(oe, 4), j = d(S), G = _(S, 4), ce = d(G), ue = _(G, 4), ye = d(ue);
      ne(() => {
        C(z, t.report.summary.class), C(A, t.report.summary.data), C(X, t.report.summary.osabi), C(K, t.report.summary.kind), C(_e, t.report.summary.machine), C(te, t.report.summary.entry), C(j, t.report.summary.n_sections), C(ce, t.report.summary.n_segments), C(ye, t.report.summary.n_symbols);
      }), D(U, E);
    }, x = (U) => {
      var E = sl(), I = _(d(E));
      ot(I, 21, () => t.report.sections, lt, (z, F) => {
        var A = rl(), M = d(A), X = d(M), R = _(M), K = d(R), Z = _(R), _e = d(Z), oe = _(Z), te = d(oe), S = _(oe), j = d(S), G = _(S), ce = d(G), ue = _(G), ye = d(ue), Se = _(ue), Pe = d(Se);
        ne((Ae) => {
          tt(A, "title", `Jump to offset ${a(F).offset ?? ""} in HEX`), C(X, a(F).idx), C(K, a(F).name || "\u2014"), C(_e, a(F).kind), C(te, a(F).addr), C(j, a(F).offset), C(ce, a(F).size), C(ye, a(F).flags), In(Pe, `width: ${Ae ?? ""}px`);
        }, [() => Math.max(1, Number(a(F).size) / a(c) * l)]), ge("click", A, () => t.onJumpToOffset?.(parseInt(a(F).offset, 16))), D(z, A);
      }), D(U, E);
    }, L = (U) => {
      var E = il(), I = _(d(E));
      ot(I, 21, () => t.report.segments, lt, (z, F) => {
        var A = al(), M = d(A), X = d(M), R = _(M), K = d(R), Z = _(R), _e = d(Z), oe = _(Z), te = d(oe), S = _(oe), j = d(S), G = _(S), ce = d(G), ue = _(G), ye = d(ue);
        ne(() => {
          tt(A, "title", `Jump to offset ${a(F).offset ?? ""} in HEX`), C(X, a(F).idx), C(K, a(F).kind), C(_e, a(F).vaddr), C(te, a(F).offset), C(j, a(F).filesz), C(ce, a(F).memsz), C(ye, a(F).flags);
        }), ge("click", A, () => t.onJumpToOffset?.(parseInt(a(F).offset, 16))), D(z, A);
      }), D(U, E);
    }, k = (U) => {
      var E = ol(), I = _(d(E));
      ot(I, 21, () => t.report.symbols, lt, (z, F) => {
        var A = ll(), M = d(A), X = d(M), R = _(M), K = d(R), Z = _(R), _e = d(Z), oe = _(Z), te = d(oe), S = _(oe), j = d(S);
        ne(() => {
          C(X, a(F).name), C(K, a(F).bind), C(_e, a(F).kind), C(te, a(F).value), C(j, a(F).size);
        }), D(z, A);
      }), D(U, E);
    }, H = (U) => {
      var E = fl(), I = ut(E), z = d(I), F = _(z, 2), A = d(F), M = _(I, 2), X = _(d(M));
      ot(X, 21, () => a(i), lt, (R, K) => {
        var Z = cl(), _e = d(Z), oe = d(_e), te = _(_e), S = d(te);
        ne((j, G) => {
          tt(Z, "title", `Jump to offset ${j ?? ""} in HEX`), C(oe, G), C(S, a(K).text);
        }, [() => f(a(K).offset), () => f(a(K).offset)]), ge("click", Z, () => t.onJumpToOffset?.(a(K).offset)), D(R, Z);
      }), ne(() => C(A, `${a(i).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), Tr(z, () => a(r), (R) => p(r, R)), D(U, E);
    };
    ve(v, (U) => {
      a(n) === "summary" ? U(w) : a(n) === "sections" ? U(x, 1) : a(n) === "segments" ? U(L, 2) : a(n) === "symbols" ? U(k, 3) : a(n) === "strings" && U(H, 4);
    });
  }
  D(e, u), _t();
}
Kt(["click"]);
var vl = q('<span class="strip-col svelte-14j5q0g"></span>'), pl = q('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), hl = q('<span class="d-l svelte-14j5q0g">NOTE</span> <span class="d-v svelte-14j5q0g"> </span>', 1), _l = q('<div class="field svelte-14j5q0g"><span class="d-l svelte-14j5q0g">FIELD</span> <span class="d-v strong svelte-14j5q0g"> </span> <span class="d-l svelte-14j5q0g">OFFSET</span> <span class="d-v svelte-14j5q0g"> </span> <span class="d-l svelte-14j5q0g">VALUE</span> <span class="d-v mint svelte-14j5q0g"> </span> <!></div>'), ml = q('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">GOTO</span> <input type="text" placeholder="0x00000000" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form></div></div> <!> <div class="grid svelte-14j5q0g" tabindex="0" role="grid"><div class="sizer svelte-14j5q0g"></div></div> <div class="detail svelte-14j5q0g"><!></div></div>');
function bl(e, t) {
  ht(t, true);
  let n = Vt(t, "format", 3, "unknown"), s = Vt(t, "jumpTo", 3, null), r = Vt(t, "followTarget", 3, null);
  const i = 20, l = 16, c = 6, f = 2e6, u = 400;
  let o = V(null), h = V(null), v = V(400), w = V(0), x = [], L = { physicalPx: 0, scale: 1 }, k = V(0), H = V(null), U = V(Et([])), E = V(0), I = V(""), z = V(null), F = V(null), A = V(null), M = V(0), X = V(0);
  const R = [{ offset: 0, size: 4, name: "e_ident.magic", type: "u32be", description: "ELF magic (0x7F ELF)" }, { offset: 4, size: 1, name: "e_ident.class", type: "u8", description: "1 = 32-bit, 2 = 64-bit" }, { offset: 5, size: 1, name: "e_ident.data", type: "u8", description: "1 = little-endian, 2 = big-endian" }, { offset: 6, size: 1, name: "e_ident.version", type: "u8" }, { offset: 7, size: 1, name: "e_ident.osabi", type: "u8" }, { offset: 8, size: 1, name: "e_ident.abiversion", type: "u8" }, { offset: 9, size: 7, name: "e_ident.pad", type: "bytes" }, { offset: 16, size: 2, name: "e_type", type: "u16", description: "2 = EXEC, 3 = DYN" }, { offset: 18, size: 2, name: "e_machine", type: "u16", description: "243 = RISC-V, 62 = x86_64" }, { offset: 20, size: 4, name: "e_version", type: "u32" }, { offset: 24, size: 4, name: "e_entry", type: "u32", description: "Entry-point virtual address" }, { offset: 28, size: 4, name: "e_phoff", type: "u32" }, { offset: 32, size: 4, name: "e_shoff", type: "u32" }, { offset: 36, size: 4, name: "e_flags", type: "u32" }, { offset: 40, size: 2, name: "e_ehsize", type: "u16" }, { offset: 42, size: 2, name: "e_phentsize", type: "u16" }, { offset: 44, size: 2, name: "e_phnum", type: "u16" }, { offset: 46, size: 2, name: "e_shentsize", type: "u16" }, { offset: 48, size: 2, name: "e_shnum", type: "u16" }, { offset: 50, size: 2, name: "e_shstrndx", type: "u16" }], K = [{ offset: 0, size: 4, name: "entry.branch", type: "bytes", description: "ARM branch executed by the BIOS after header validation" }, { offset: 4, size: 156, name: "nintendo.logo", type: "bytes", description: "Fixed Nintendo logo bitmap checked by boot ROM" }, { offset: 160, size: 12, name: "game.title", type: "string", description: "ASCII cartridge title" }, { offset: 172, size: 4, name: "game.code", type: "string", description: "Four-character game code" }, { offset: 176, size: 2, name: "maker.code", type: "string", description: "Two-character maker code" }, { offset: 178, size: 1, name: "fixed.0x96", type: "u8", description: "Fixed value required by the GBA BIOS" }, { offset: 179, size: 1, name: "unit.code", type: "u8", description: "Usually 0x00 for GBA" }, { offset: 180, size: 1, name: "device.type", type: "u8", description: "Device type / debug field" }, { offset: 181, size: 7, name: "reserved", type: "bytes" }, { offset: 188, size: 1, name: "software.version", type: "u8" }, { offset: 189, size: 1, name: "complement.checksum", type: "u8", description: "Header checksum over bytes 0xA0..0xBC" }, { offset: 190, size: 2, name: "reserved.tail", type: "bytes" }];
  function Z(g) {
    return (g >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function _e(g) {
    return "0x" + (g >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function oe(g) {
    return g >= 32 && g <= 126 ? String.fromCharCode(g) : ".";
  }
  function te() {
    return n() === "elf" ? R : n() === "gba" ? K : [];
  }
  function S(g) {
    for (const T of te()) if (g >= T.offset && g < T.offset + T.size) return T;
    return null;
  }
  function j(g) {
    if (!t.bytes || g.offset + g.size > t.bytes.byteLength) return "-";
    if (g.type === "string") return Array.from(t.bytes.subarray(g.offset, g.offset + g.size)).map((T) => T >= 32 && T <= 126 ? String.fromCharCode(T) : ".").join("").trim();
    if (g.type === "u8") return `0x${Z(t.bytes[g.offset])} (${t.bytes[g.offset]})`;
    if (g.type === "u16") {
      const T = t.bytes[g.offset] | t.bytes[g.offset + 1] << 8;
      return `0x${T.toString(16).toUpperCase().padStart(4, "0")} (${T})`;
    }
    if (g.type === "u32" || g.type === "u32be") {
      const T = g.type === "u32be" ? (t.bytes[g.offset] << 24 | t.bytes[g.offset + 1] << 16 | t.bytes[g.offset + 2] << 8 | t.bytes[g.offset + 3]) >>> 0 : (t.bytes[g.offset] | t.bytes[g.offset + 1] << 8 | t.bytes[g.offset + 2] << 16 | t.bytes[g.offset + 3] << 24) >>> 0;
      return `0x${T.toString(16).toUpperCase().padStart(8, "0")} (${T})`;
    }
    return Array.from(t.bytes.subarray(g.offset, g.offset + g.size)).map(Z).join(" ");
  }
  function G(g) {
    const T = Math.max(0, g * i);
    return T <= f ? { physicalPx: T, scale: 1 } : { physicalPx: f, scale: T / f };
  }
  function ce() {
    const g = Math.ceil((t.bytes?.length ?? 0) / l);
    if (g === 0) return { start: 0, end: 0, topPx: 0 };
    const T = L.scale, J = a(w) * T, Q = Math.ceil(a(v) / i) + c * 2, b = Math.floor(J / i) - c, N = Math.max(0, b), $ = Math.min(g, N + Q);
    let fe;
    if (T === 1) fe = N * i;
    else {
      const me = J - N * i;
      fe = a(w) - me / T;
    }
    return { start: N, end: $, topPx: fe };
  }
  function ue(g) {
    for (; x.length < g; ) {
      const T = document.createElement("div");
      T.className = "hex-row", T.style.position = "absolute", T.style.left = "0", T.style.right = "0", T.style.height = `${i}px`, x.push(T);
    }
  }
  function ye(g) {
    const T = g * l, J = Math.min(t.bytes.length, T + l), Q = document.createElement("span");
    Q.className = "addr", Q.textContent = _e(T);
    const b = document.createElement("span");
    b.className = "bytes";
    const N = document.createElement("span");
    N.className = "ascii";
    for (let $ = T; $ < J; $++) {
      const fe = t.bytes[$], me = S($), he = document.createElement("button");
      he.type = "button", he.className = "byte", me && he.classList.add("ovr"), a(F) && me === a(F) && he.classList.add("hot"), a(z) === $ && he.classList.add("sel"), he.dataset.fi = String($), he.textContent = Z(fe);
      const ie = document.createElement("button");
      if (ie.type = "button", ie.className = "char", me && ie.classList.add("ovr"), a(F) && me === a(F) && ie.classList.add("hot"), a(z) === $ && ie.classList.add("sel"), ie.dataset.fi = String($), ie.textContent = oe(fe), b.appendChild(he), N.appendChild(ie), $ - T === 7) {
        const Le = document.createElement("span");
        Le.className = "wide", Le.textContent = " ", b.appendChild(Le);
      }
      $ < J - 1 && b.appendChild(document.createTextNode(" "));
    }
    return [Q, b, N];
  }
  function Se() {
    if (!t.bytes || !a(h)) return;
    const g = Math.ceil(t.bytes.length / l);
    L = G(g), a(h).style.height = `${L.physicalPx}px`;
    const T = ce(), J = T.end - T.start;
    ue(J);
    for (let Q = J; Q < x.length; Q++) x[Q].parentNode && x[Q].remove();
    for (let Q = 0; Q < J; Q++) {
      const b = T.start + Q, N = x[Q];
      N.style.top = `${T.topPx + Q * i}px`, N.dataset.row = String(b), N.dataset.rowOff = String(b * l), N.replaceChildren(...ye(b)), N.parentNode !== a(h) && a(h).appendChild(N);
    }
    Pe();
  }
  function Pe() {
    if (t.bytes && t.bytes.length) {
      const g = a(w) * (L.scale || 1), T = Math.floor(g / i) * l;
      p(k, Math.max(0, Math.min(1, T / Math.max(1, t.bytes.length))), true);
    } else p(k, 0);
  }
  function Ae(g, T = true) {
    if (!t.bytes || !t.bytes.length || !a(o)) return;
    const J = Math.max(0, Math.min(t.bytes.length - 1, Number(g) | 0)), Q = Math.floor(J / l), b = Math.max(0, Math.floor(a(v) / 3)), N = Q * i, $ = Math.max(0, (N - b) / (L.scale || 1));
    try {
      a(o).scrollTo({ top: $, behavior: "smooth" });
    } catch {
      a(o).scrollTop = $;
    }
    T && (p(A, Q * l), p(M, performance.now() + u), ja(X), requestAnimationFrame(() => requestAnimationFrame(Re)));
  }
  function Re() {
    if (a(A) == null) return;
    const g = Math.floor(a(A) / l);
    x.forEach((J) => {
      Number(J.dataset.row) === g && (J.classList.remove("flash"), J.offsetWidth, J.classList.add("flash"), setTimeout(() => J.classList.remove("flash"), 480));
    });
    const T = a(A) + l;
    a(h) && a(h).querySelectorAll("[data-fi]").forEach((Q) => {
      const b = Number(Q.dataset.fi);
      b >= a(A) && b < T && (Q.classList.remove("flash"), Q.offsetWidth, Q.classList.add("flash"), setTimeout(() => Q.classList.remove("flash"), 480));
    }), p(A, null);
  }
  function je(g) {
    if (!t.bytes?.length) return;
    const T = Math.max(1, Math.floor(a(v) / i) - 2), J = (Q) => {
      const b = a(w) * (L.scale || 1), N = Math.max(0, b + Q * i);
      a(o).scrollTop = N / (L.scale || 1);
    };
    g.key === "PageDown" ? (g.preventDefault(), J(T)) : g.key === "PageUp" ? (g.preventDefault(), J(-T)) : g.key === "ArrowDown" ? (g.preventDefault(), J(1)) : g.key === "ArrowUp" ? (g.preventDefault(), J(-1)) : g.key === "Home" ? (g.preventDefault(), a(o).scrollTop = 0) : g.key === "End" && (g.preventDefault(), a(o).scrollTop = L.physicalPx);
  }
  function de(g) {
    const T = g.target.closest("[data-fi]");
    T && (p(z, Number(T.dataset.fi), true), Se());
  }
  function Ce(g) {
    const T = g.target.closest(".ovr");
    if (!T) return;
    const J = Number(T.dataset.fi), Q = S(J);
    Q && Q !== a(F) && (p(F, Q, true), Se());
  }
  function Te() {
    a(F) && (p(F, null), Se());
  }
  function Oe(g) {
    g.preventDefault();
    let T = a(I).trim();
    if (!T) return;
    (T.startsWith("0x") || T.startsWith("0X")) && (T = T.slice(2));
    const J = parseInt(T, 16);
    Number.isFinite(J) && Ae(J, true);
  }
  function Fe(g) {
    if (!a(U).length || !t.bytes) return;
    const J = g.currentTarget.getBoundingClientRect(), Q = Math.max(0, Math.min(1, (g.clientX - J.left) / J.width)), b = Math.floor(Q * t.bytes.length);
    Ae(b, true);
  }
  function Me() {
    if (!t.bytes || a(z) == null || a(z) < 0 || a(z) >= t.bytes.length) return null;
    const g = t.bytes[a(z)], T = g.toString(2).padStart(8, "0"), J = a(z) + 1 < t.bytes.length ? t.bytes[a(z)] | t.bytes[a(z) + 1] << 8 : null, Q = a(z) + 3 < t.bytes.length ? (t.bytes[a(z)] | t.bytes[a(z) + 1] << 8 | t.bytes[a(z) + 2] << 16 | t.bytes[a(z) + 3] << 24) >>> 0 : null, b = [`OFF ${_e(a(z))}`, `BYTE 0x${Z(g)} (${g})`, `b${T}`, `ASCII '${oe(g)}'`];
    return J !== null && b.push(`U16LE 0x${J.toString(16).toUpperCase().padStart(4, "0")}`), Q !== null && b.push(`U32LE 0x${Q.toString(16).toUpperCase().padStart(8, "0")}`), b.join(" \xB7 ");
  }
  let Ne = 0, P, m;
  er(() => {
    P = new ResizeObserver(() => {
      p(v, a(o).clientHeight, true), Se();
    }), P.observe(a(o)), m = () => {
      Ne || (Ne = requestAnimationFrame(() => {
        Ne = 0, p(w, a(o).scrollTop, true), Se();
      }));
    }, a(o).addEventListener("scroll", m, { passive: true }), Se();
  }), tr(() => {
    try {
      P?.disconnect();
    } catch {
    }
    a(o) && m && a(o).removeEventListener("scroll", m);
  }), Ye(() => {
    let g = false;
    return Dn().then((T) => {
      if (g) return;
      p(H, T, true), p(E, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), p(U, t.bytes ? a(H).entropy_blocks(t.bytes, a(E)) : [], true), Se();
    }), () => {
      g = true;
    };
  });
  let y = null;
  Ye(() => {
    const g = t.bytes;
    g !== y && (y = g, a(o) && (a(o).scrollTop = 0), p(w, 0), p(z, null), p(F, null), x = [], a(H) && (p(E, Math.max(64, Math.ceil((g?.length ?? 0) / 256)), true), p(U, g ? a(H).entropy_blocks(g, a(E)) : [], true)), Se());
  }), Ye(() => {
    n(), Se();
  }), Ye(() => {
    if (s() == null) return;
    const g = typeof s() == "object" ? s().o : s();
    Ae(g, true);
  });
  let B = -1;
  Ye(() => {
    const g = r();
    if (!g || typeof g.offset != "number") {
      B = -1;
      return;
    }
    const T = Math.floor(g.offset / l);
    T !== B && (B = T, Ae(g.offset, false));
  });
  var ee = ml(), se = d(ee), W = _(d(se), 2), re = d(W), Ee = _(d(re), 2), ze = _(se, 2);
  {
    var O = (g) => {
      var T = pl(), J = _(d(T), 2), Q = d(J);
      ot(Q, 17, () => a(U), lt, (fe, me, he) => {
        var ie = vl();
        ne((Le, We, mt) => {
          In(ie, `height: ${Le ?? ""}%; opacity: ${0.35 + a(me) * 0.65}`), tt(ie, "title", `block ${he} \\u00B7 offset 0x${We ?? ""} \\u00B7 entropy ${mt ?? ""} bits`);
        }, [() => Math.max(2, a(me) * 100), () => Math.floor(he * (t.bytes?.length ?? 0) / a(U).length).toString(16).toUpperCase(), () => a(me).toFixed(1)]), D(fe, ie);
      });
      var b = _(Q, 2), N = _(J, 2), $ = d(N);
      ne((fe) => {
        In(b, `left: ${a(k) * 100}%`), C($, `${fe ?? ""} B / col`);
      }, [() => a(E).toLocaleString()]), ge("click", J, Fe), D(g, T);
    };
    ve(ze, (g) => {
      a(U).length > 1 && g(O);
    });
  }
  var Y = _(ze, 2), le = d(Y);
  St(le, (g) => p(h, g), () => a(h)), St(Y, (g) => p(o, g), () => a(o));
  var ke = _(Y, 2), qe = d(ke);
  {
    var Je = (g) => {
      var T = _l(), J = _(d(T), 2), Q = d(J), b = _(J, 4), N = d(b), $ = _(b, 4), fe = d($), me = _($, 2);
      {
        var he = (ie) => {
          var Le = hl(), We = _(ut(Le), 2), mt = d(We);
          ne(() => C(mt, a(F).description)), D(ie, Le);
        };
        ve(me, (ie) => {
          a(F).description && ie(he);
        });
      }
      ne((ie, Le) => {
        C(Q, a(F).name), C(N, ie), C(fe, Le);
      }, [() => _e(a(F).offset), () => j(a(F))]), D(g, T);
    }, Ie = (g) => {
      var T = cn();
      ne((J) => C(T, J), [() => Me() ?? "select a byte or hover a highlighted field"]), D(g, T);
    };
    ve(qe, (g) => {
      a(F) ? g(Je) : g(Ie, -1);
    });
  }
  Nt("submit", re, Oe), Tr(Ee, () => a(I), (g) => p(I, g)), ge("keydown", Y, je), ge("click", Y, de), ge("mouseover", Y, Ce), Nt("mouseleave", Y, Te), Nt("focus", Y, Ce), D(e, ee), _t();
}
Kt(["click", "keydown", "mouseover"]);
var gl = q('<span class="w-meta svelte-59bj26"> </span>'), yl = q('<div class="w-empty svelte-59bj26"> </div>'), wl = q('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), xl = q('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), El = q('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), Al = q('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function Sl(e, t) {
  ht(t, true);
  let n = V(null), s = V(""), r = V(null), i = V(null), l = null, c = null, f = null, u = 0, o = 0, h = 0, v = V("0:00 / 0:00");
  function w(S) {
    return "0x" + (Number(S) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function x(S) {
    return S < 1024 ? `${S} B` : S < 1024 * 1024 ? `${(S / 1024).toFixed(1)} KiB` : `${(S / 1024 / 1024).toFixed(2)} MiB`;
  }
  function L(S) {
    if (S < 1) return `${(S * 1e3).toFixed(0)} ms`;
    if (S < 60) return `${S.toFixed(2)} s`;
    const j = Math.floor(S / 60), G = S - j * 60;
    return `${j}m ${G.toFixed(1)}s`;
  }
  function k(S) {
    return S.replace(/\s+$/g, "");
  }
  async function H(S) {
    if (p(s, ""), !S) {
      p(n, null);
      return;
    }
    try {
      const G = (await Dn()).decode_wav(S);
      p(n, G, true), f = null, p(v, `0:00 / ${L(G.duration)}`), requestAnimationFrame(() => U({ playhead: 0 }));
    } catch (j) {
      console.error("[scry/wave] decode failed", j), p(n, null), p(s, String(j?.message || j), true);
    }
  }
  function U({ playhead: S = null } = {}) {
    if (!a(r) || !a(n)) return;
    const j = window.devicePixelRatio || 1, G = a(r).getBoundingClientRect(), ce = Math.max(1, Math.floor(G.width * j)), ue = Math.max(1, Math.floor(G.height * j));
    a(r).width = ce, a(r).height = ue;
    const ye = getComputedStyle(a(r)), Se = ye.getPropertyValue("--w-bg").trim() || "#000", Pe = ye.getPropertyValue("--w-grid").trim() || "#333", Ae = ye.getPropertyValue("--w-peak").trim() || "#888", Re = ye.getPropertyValue("--w-rms").trim() || "#bcd", je = ye.getPropertyValue("--w-accent").trim() || "#9fe3c7", de = a(r).getContext("2d");
    de.fillStyle = Se, de.fillRect(0, 0, ce, ue), de.strokeStyle = Pe, de.lineWidth = 1;
    const Ce = ue / 2;
    for (const Me of [0.25, 0.5, 0.75]) {
      const Ne = Math.floor(ue * Me) + 0.5;
      de.beginPath(), de.moveTo(0, Ne), de.lineTo(ce, Ne), de.stroke();
    }
    const Te = a(n).envelope, Oe = Te.length, Fe = ce / Oe;
    for (let Me = 0; Me < Oe; Me++) {
      const Ne = Te[Me], P = Math.floor(Me * Fe), m = Math.max(1, Math.floor(Fe) - 1), y = Ce - Ne.max * Ce, B = Ce - Ne.min * Ce;
      de.fillStyle = Ae, de.fillRect(P, Math.floor(y), m, Math.max(1, Math.ceil(B - y)));
      const ee = Ne.rms * Ce;
      de.fillStyle = Re, de.fillRect(P, Math.floor(Ce - ee), m, Math.max(1, Math.ceil(2 * ee)));
    }
    if (S != null) {
      const Me = Math.floor(S * ce);
      de.strokeStyle = je, de.lineWidth = 2 * j, de.beginPath(), de.moveTo(Me, 0), de.lineTo(Me, ue), de.stroke();
    }
  }
  function E() {
    if (!a(n)) return null;
    if (f) return f;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const S = a(n).samples instanceof Float32Array ? a(n).samples : new Float32Array(a(n).samples);
    return f = l.createBuffer(1, S.length, a(n).fmt.sample_rate), f.copyToChannel(S, 0), f;
  }
  function I() {
    if (!l || !c || !a(n)) {
      h = 0;
      return;
    }
    const S = o + (l.currentTime - u), j = a(n).duration, G = Math.max(0, Math.min(1, S / j));
    U({ playhead: G }), p(v, `${L(Math.min(S, j))} / ${L(j)}`), S < j ? h = requestAnimationFrame(I) : h = 0;
  }
  function z() {
    if (h && (cancelAnimationFrame(h), h = 0), c) {
      try {
        c.stop();
      } catch {
      }
      c.disconnect(), c = null;
    }
  }
  function F(S) {
    if (!a(n)) return;
    const j = E();
    j && (z(), c = l.createBufferSource(), c.buffer = j, c.connect(l.destination), c.onended = () => {
      h && cancelAnimationFrame(h), h = 0, U({ playhead: 0 }), p(v, `0:00 / ${L(a(n).duration)}`), c = null;
    }, l.state === "suspended" && l.resume(), o = Math.max(0, Math.min(a(n).duration - 1e-3, S)), u = l.currentTime, c.start(0, o), h = requestAnimationFrame(I));
  }
  function A(S) {
    if (!a(n)) return;
    const j = a(r).getBoundingClientRect(), G = (S.clientX - j.left) / j.width;
    F(G * a(n).duration);
  }
  Ye(() => {
    const S = t.bytes;
    return H(S), () => z();
  }), Ye(() => {
    if (!a(i)) return;
    const S = new ResizeObserver(() => a(n) && U({ playhead: 0 }));
    return S.observe(a(i)), () => S.disconnect();
  });
  var M = Al(), X = d(M), R = _(d(X), 2);
  {
    var K = (S) => {
      var j = gl(), G = d(j);
      ne((ce) => C(G, `${a(n).fmt.channels ?? ""}ch @ ${a(n).fmt.sample_rate ?? ""} Hz \xB7 ${a(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${ce ?? ""}`), [() => L(a(n).duration)]), D(S, j);
    };
    ve(R, (S) => {
      a(n) && S(K);
    });
  }
  var Z = _(X, 2);
  {
    var _e = (S) => {
      var j = yl(), G = d(j);
      ne(() => C(G, `Not a parseable WAV: ${a(s) ?? ""}`)), D(S, j);
    }, oe = (S) => {
      var j = wl();
      D(S, j);
    }, te = (S) => {
      var j = El(), G = ut(j), ce = d(G), ue = d(ce), ye = d(ue), Se = _(d(ye)), Pe = d(Se), Ae = _(ye, 2), Re = _(d(Ae)), je = d(Re), de = _(Ae, 2), Ce = _(d(de)), Te = d(Ce), Oe = _(de, 2), Fe = _(d(Oe)), Me = d(Fe), Ne = _(ue, 2), P = d(Ne), m = _(d(P)), y = d(m), B = _(P, 2), ee = _(d(B)), se = d(ee), W = _(B, 2), re = _(d(W)), Ee = d(re), ze = _(W, 2), O = _(d(ze)), Y = d(O), le = _(Ne, 2), ke = d(le), qe = _(d(ke)), Je = d(qe), Ie = _(ke, 2);
      ot(Ie, 17, () => a(n).chunks.slice(0, 4), lt, (fe, me) => {
        var he = xl(), ie = d(he), Le = d(ie), We = _(ie), mt = d(We);
        ne((Pt, Ct, gn) => {
          C(Le, Pt), C(mt, `${Ct ?? ""} @ ${gn ?? ""}`);
        }, [() => k(a(me).id), () => x(a(me).size), () => w(a(me).offset)]), D(fe, he);
      });
      var g = _(G, 2), T = d(g), J = _(T, 2), Q = _(J, 2), b = d(Q), N = _(g, 2), $ = d(N);
      St($, (fe) => p(r, fe), () => a(r)), St(N, (fe) => p(i, fe), () => a(i)), ne((fe, me, he, ie) => {
        C(Pe, a(n).fmt.format === 1 ? "PCM (int)" : a(n).fmt.format === 3 ? "IEEE float" : `tag ${a(n).fmt.format}`), C(je, a(n).fmt.channels), C(Te, `${a(n).fmt.sample_rate ?? ""} Hz`), C(Me, `${a(n).fmt.bits_per_sample ?? ""}-bit`), C(y, fe), C(se, me), C(Ee, he), C(Y, `${ie ?? ""}/s`), C(Je, a(n).chunks.length), C(b, a(v));
      }, [() => Number(a(n).total_frames).toLocaleString(), () => L(a(n).duration), () => x(a(n).data_len), () => x(a(n).fmt.byte_rate)]), ge("click", T, () => F(0)), ge("click", J, () => {
        z(), U({ playhead: 0 }), p(v, `0:00 / ${L(a(n).duration)}`);
      }), ge("click", $, A), D(S, j);
    };
    ve(Z, (S) => {
      a(s) ? S(_e) : a(n) ? S(te, -1) : S(oe, 1);
    });
  }
  D(e, M), _t();
}
Kt(["click"]);
var kl = q('<span class="c-meta svelte-1uww35p"> </span>'), Ml = q('<div class="c-empty svelte-1uww35p"> </div>'), Cl = q('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), Tl = q('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), Fl = q(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), Ll = q('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function Rl(e, t) {
  ht(t, true);
  let n = V(null), s = V("");
  function r(E) {
    return (E >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function i(E) {
    return "0x" + (E >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function l(E) {
    return E >= 32 && E <= 126 ? String.fromCharCode(E) : ".";
  }
  function c(E) {
    return E < 1024 ? `${E} B` : E < 1024 * 1024 ? `${(E / 1024).toFixed(1)} KiB` : `${(E / 1024 / 1024).toFixed(2)} MiB`;
  }
  async function f(E) {
    if (p(s, ""), !E) {
      p(n, null);
      return;
    }
    try {
      const I = await Dn();
      p(n, I.parse_gba(E), true);
    } catch (I) {
      console.error("[scry/cart] parse failed", I), p(n, null), p(s, String(I?.message || I), true);
    }
  }
  Ye(() => {
    const E = t.bytes;
    f(E);
  });
  function u(E) {
    if (!t.bytes) return null;
    const I = t.bytes.subarray(E, Math.min(t.bytes.length, E + 16)), z = [], F = [];
    for (let A = 0; A < I.length; A++) z.push(r(I[A])), F.push(l(I[A])), A === 7 && z.push("");
    return { off: E, hex: z.join(" ").replace(/  /g, "  "), ascii: F.join("") };
  }
  let o = Ht(() => {
    if (!t.bytes) return [];
    const E = [];
    for (let I = 160; I < 224; I += 16) {
      const z = u(I);
      z && E.push(z);
    }
    return E;
  });
  var h = Ll(), v = d(h), w = _(d(v), 2);
  {
    var x = (E) => {
      var I = kl(), z = d(I);
      ne((F) => C(z, `"${(a(n).title || "(blank)") ?? ""}" \xB7 ${a(n).game_code ?? ""} \xB7 ${F ?? ""}`), [() => c(a(n).rom_size)]), D(E, I);
    };
    ve(w, (E) => {
      a(n) && E(x);
    });
  }
  var L = _(v, 2);
  {
    var k = (E) => {
      var I = Ml(), z = d(I);
      ne(() => C(z, `parse failed: ${a(s) ?? ""}`)), D(E, I);
    }, H = (E) => {
      var I = Cl();
      D(E, I);
    }, U = (E) => {
      var I = Fl(), z = d(I), F = _(d(z), 2), A = _(d(F)), M = d(A), X = _(F, 2), R = _(d(X)), K = d(R), Z = _(X, 2), _e = _(d(Z)), oe = d(_e), te = _(Z, 2), S = _(d(te), 2), j = d(S), G = _(te, 2), ce = _(d(G)), ue = d(ce), ye = _(G, 2), Se = _(d(ye)), Pe = d(Se), Ae = _(ye, 2), Re = _(d(Ae)), je = d(Re), de = _(Ae, 2), Ce = _(d(de), 2), Te = d(Ce), Oe = _(de, 2), Fe = _(d(Oe)), Me = d(Fe), Ne = _(z, 2), P = _(d(Ne), 2);
      ot(P, 21, () => a(o), lt, (m, y) => {
        var B = Tl(), ee = d(B), se = d(ee), W = _(ee, 2), re = d(W), Ee = _(W, 2), ze = d(Ee);
        ne((O) => {
          C(se, O), C(re, a(y).hex), C(ze, a(y).ascii);
        }, [() => i(a(y).off)]), D(m, B);
      }), ne((m, y, B, ee, se, W, re) => {
        C(M, a(n).title || "(blank)"), C(K, a(n).game_code || "----"), C(oe, a(n).maker_code || "--"), C(j, `0x${m ?? ""} ${a(n).fixed_ok ? "\u2713" : "\u2717"}`), C(ue, `0x${y ?? ""}`), C(Pe, `0x${B ?? ""}`), C(je, `0x${ee ?? ""}`), C(Te, `stored 0x${se ?? ""} \xB7
            computed 0x${W ?? ""}
            ${a(n).checksum_ok ? " \u2713" : " \u2717"}`), C(Me, re);
      }, [() => r(a(n).fixed), () => r(a(n).unit_code), () => r(a(n).device_type), () => r(a(n).version), () => r(a(n).checksum), () => r(a(n).checksum_computed), () => c(a(n).rom_size)]), D(E, I);
    };
    ve(L, (E) => {
      a(s) ? E(k) : a(n) ? E(U, -1) : E(H, 1);
    });
  }
  D(e, h), _t();
}
var Ol = q('<section class="mh-host svelte-sq0dz7"><div class="mh-bar svelte-sq0dz7"><span class="mh-title svelte-sq0dz7"> </span> <form class="mh-jumpform svelte-sq0dz7"><span class="mh-jumplab svelte-sq0dz7">JUMP</span> <input type="text" placeholder="0x..." class="mh-jump svelte-sq0dz7" aria-label="jump to offset"/></form></div> <div class="mh-scroll svelte-sq0dz7" role="grid" tabindex="0"><div class="mh-sizer svelte-sq0dz7"></div></div> <div class="mh-detail svelte-sq0dz7"> </div></section>');
function Nl(e, t) {
  ht(t, true);
  let n = Vt(t, "cursor", 3, null), s = Vt(t, "follow", 3, false), r = Vt(t, "onByteClick", 3, null);
  const i = 16, l = 20, c = 6, f = 5e5;
  let u, o, h, v = 0, w = [], x = null, L = { physicalPx: 0, scale: 1 }, k = -1, H = V(null);
  function U(m) {
    return (m >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function E(m) {
    return "0x" + (m >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function I(m) {
    return m >= 32 && m <= 126 ? String.fromCharCode(m) : ".";
  }
  const z = [{ offset: 0, size: 4, name: "entry.branch", type: "bytes", description: "ARM branch" }, { offset: 4, size: 156, name: "nintendo.logo", type: "bytes", description: "Nintendo logo bitmap" }, { offset: 160, size: 12, name: "game.title", type: "string", description: "Cartridge title" }, { offset: 172, size: 4, name: "game.code", type: "string", description: "Game code" }, { offset: 176, size: 2, name: "maker.code", type: "string", description: "Maker code" }, { offset: 178, size: 1, name: "fixed.0x96", type: "u8", description: "BIOS fixed byte" }, { offset: 179, size: 1, name: "unit.code", type: "u8" }, { offset: 180, size: 1, name: "device.type", type: "u8" }, { offset: 181, size: 7, name: "reserved", type: "bytes" }, { offset: 188, size: 1, name: "software.version", type: "u8" }, { offset: 189, size: 1, name: "complement.checksum", type: "u8", description: "Header checksum" }, { offset: 190, size: 2, name: "reserved.tail", type: "bytes" }];
  function F(m) {
    for (const y of z) if (m >= y.offset && m < y.offset + y.size) return y;
    return null;
  }
  function A(m) {
    return !t.bytes || m.offset + m.size > t.bytes.byteLength ? "-" : m.type === "string" ? Array.from(t.bytes.subarray(m.offset, m.offset + m.size)).map((y) => y >= 32 && y <= 126 ? String.fromCharCode(y) : ".").join("").trim() : m.type === "u8" ? `0x${U(t.bytes[m.offset])} (${t.bytes[m.offset]})` : Array.from(t.bytes.subarray(m.offset, m.offset + m.size)).map(U).join(" ");
  }
  let M = V(null);
  function X(m, y) {
    const B = Math.max(0, m * y);
    return B <= f ? { physicalPx: B, scale: 1 } : { physicalPx: f, scale: B / f };
  }
  function R(m, y, B, ee) {
    if (B === 0) return { start: 0, end: 0, topPx: 0 };
    const se = m * ee, W = Math.ceil(y / l) + c * 2, re = Math.floor(se / l) - c, Ee = Math.max(0, re), ze = Math.min(B, Ee + W);
    let O;
    if (ee === 1) O = Ee * l;
    else {
      const Y = se - Ee * l;
      O = m - Y / ee;
    }
    return { start: Ee, end: ze, topPx: O };
  }
  function K(m, y) {
    const B = m * i, ee = Math.min(y.byteLength, B + i), se = y.subarray(B, ee), W = [], re = [];
    for (let Ee = 0; Ee < se.length; Ee++) {
      const ze = B + Ee;
      W.push({ off: ze, text: U(se[Ee]), gap: Ee === 7 ? "wide" : "" }), re.push({ off: ze, text: I(se[Ee]) });
    }
    return { addr: E(B), hex: W, asc: re };
  }
  function Z(m, y, B, ee) {
    m.textContent = "";
    for (let se = 0; se < y.length; se++) {
      const W = y[se], re = document.createElement("span");
      re.className = B;
      const Ee = F(W.off);
      Ee && re.classList.add("mh-ovr"), a(M) && Ee === a(M) && re.classList.add("mh-hot"), W.off === a(H) && re.classList.add("mh-selected"), W.off === ee && re.classList.add("mh-pc-byte"), re.dataset.off = String(W.off), re.textContent = W.text, m.appendChild(re), B === "mh-cell" && se < y.length - 1 && m.appendChild(document.createTextNode(W.gap === "wide" ? "  " : " "));
    }
  }
  function _e() {
    const m = a(H) ?? n();
    if (!t.bytes || typeof m != "number" || m < 0 || m >= t.bytes.byteLength) return null;
    const y = F(m);
    if (y) {
      const Ee = A(y);
      return `${y.name} \xB7 ${Ee}${y.description ? " \xB7 " + y.description : ""}`;
    }
    const B = t.bytes[m], ee = B.toString(2).padStart(8, "0"), se = m + 1 < t.bytes.byteLength ? t.bytes[m] | t.bytes[m + 1] << 8 : null, W = m + 3 < t.bytes.byteLength ? (t.bytes[m] | t.bytes[m + 1] << 8 | t.bytes[m + 2] << 16 | t.bytes[m + 3] << 24) >>> 0 : null, re = [`OFF ${E(m)}`, `BYTE 0x${U(B)} (${B})`, `b${ee}`, `ASCII '${I(B)}'`];
    return se !== null && re.push(`U16LE 0x${se.toString(16).toUpperCase().padStart(4, "0")}`), W !== null && re.push(`U32LE 0x${W.toString(16).toUpperCase().padStart(8, "0")}`), re.join(" \xB7 ");
  }
  function oe(m) {
    for (; w.length < m; ) {
      const y = document.createElement("div");
      y.className = "mh-row", y.style.position = "absolute", y.style.left = "0", y.style.right = "0", y.style.height = `${l}px`;
      const B = document.createElement("span");
      B.className = "mh-addr";
      const ee = document.createElement("span");
      ee.className = "mh-bytes";
      const se = document.createElement("span");
      se.className = "mh-ascii", y.appendChild(B), y.appendChild(ee), y.appendChild(se), w.push(y);
    }
  }
  function te() {
    const m = t.bytes;
    if (!o) return;
    if (!m || m.byteLength === 0) {
      for (const W of w) W.parentNode && W.remove();
      o.style.height = "0px";
      return;
    }
    const y = Math.ceil(m.byteLength / i);
    L = X(y, l), o.style.height = `${L.physicalPx}px`;
    const B = R(u.scrollTop, v, y, L.scale), ee = B.end - B.start;
    oe(ee);
    for (let W = ee; W < w.length; W++) w[W].parentNode && w[W].remove();
    const se = typeof n() == "number" && n() >= 0 && n() < m.byteLength ? Math.floor(n() / i) : -1;
    for (let W = 0; W < ee; W++) {
      const re = B.start + W, Ee = K(re, m), ze = w[W];
      ze.style.top = `${B.topPx + W * l}px`;
      const [O, Y, le] = ze.children;
      O.textContent = Ee.addr, Z(Y, Ee.hex, "mh-cell", n()), Z(le, Ee.asc, "mh-char", n()), re === se ? ze.classList.add("mh-cursor") : ze.classList.remove("mh-cursor"), ze.parentNode !== o && o.appendChild(ze);
    }
  }
  function S() {
    const m = t.bytes;
    if (!m || typeof n() != "number" || n() < 0 || n() >= m.byteLength || !u) return;
    const B = Math.floor(n() / i) * l, ee = B / L.scale, se = l * 4, W = u.scrollTop, re = W + v;
    (ee < W + se || ee > re - se) && (u.scrollTop = Math.max(0, (B - v / 2) / L.scale));
  }
  function j(m) {
    const y = t.bytes;
    if (!y || m < 0 || m >= y.byteLength) return;
    p(H, m, true);
    const ee = Math.floor(m / i) * l;
    u.scrollTop = Math.max(0, (ee - v / 2) / L.scale), te();
  }
  function G(m) {
    m.preventDefault();
    const y = h.value.trim().replace(/^0x/i, ""), B = parseInt(y, 16);
    Number.isFinite(B) && j(B);
  }
  function ce(m) {
    const y = m.target.closest("[data-off]");
    if (!y || !t.bytes) return;
    const B = Number(y.dataset.off);
    !Number.isFinite(B) || B < 0 || B >= t.bytes.byteLength || (p(H, B, true), te(), r()?.(B));
  }
  function ue(m) {
    m.key !== "Enter" && m.key !== " " || !m.target.closest("[data-off]") || (m.preventDefault(), ce(m));
  }
  function ye(m) {
    const y = m.target.closest("[data-off]");
    if (!y || !t.bytes) return;
    const B = Number(y.dataset.off), ee = F(B);
    ee !== a(M) && (p(M, ee, true), te());
  }
  function Se() {
    a(M) && (p(M, null), te());
  }
  let Pe;
  er(() => {
    Pe = new ResizeObserver(() => {
      v = u.clientHeight, te();
    }), Pe.observe(u), u.addEventListener("scroll", te, { passive: true }), te();
  }), tr(() => {
    try {
      Pe?.disconnect();
    } catch {
    }
  }), Ye(() => {
    t.bytes !== x && (x = t.bytes, k = -1, p(H, null), u && (u.scrollTop = 0), Xt(() => te()), t.bytes && t.bytes.byteLength >= 192 && requestAnimationFrame(() => j(160)));
  });
  let Ae = false;
  Ye(() => {
    const m = n(), y = s();
    if (!t.bytes) return;
    const B = typeof m == "number" && m >= 0 && m < t.bytes.byteLength ? Math.floor(m / i) : -1, ee = y !== Ae;
    Ae = y, !(B === k && !ee) && (k = B, Xt(() => te()), y && requestAnimationFrame(S));
  });
  var Re = Ol(), je = d(Re), de = d(je), Ce = d(de), Te = _(de, 2), Oe = _(d(Te), 2);
  St(Oe, (m) => h = m, () => h);
  var Fe = _(je, 2), Me = d(Fe);
  St(Me, (m) => o = m, () => o), St(Fe, (m) => u = m, () => u);
  var Ne = _(Fe, 2), P = d(Ne);
  ne((m, y) => {
    C(Ce, m), C(P, y);
  }, [() => t.bytes ? `ROM (${t.bytes.byteLength.toLocaleString()} bytes)` : "ROM (empty)", () => _e() ?? (t.bytes ? "select a byte" : "no ROM loaded")]), Nt("submit", Te, G), ge("click", Fe, ce), ge("keydown", Fe, ue), ge("mouseover", Fe, ye), Nt("mouseleave", Fe, Se), D(e, Re), _t();
}
Kt(["click", "keydown", "mouseover"]);
const Il = 33554432, Pl = [{ start: 0, end: 16384, label: "BIOS" }, { start: 33554432, end: 33816576, label: "EWRAM" }, { start: 50331648, end: 50364416, label: "IWRAM" }, { start: 67108864, end: 67109888, label: "I/O" }, { start: 83886080, end: 83887104, label: "PAL" }, { start: 100663296, end: 100761600, label: "VRAM" }, { start: 117440512, end: 117441536, label: "OAM" }, { start: 234881024, end: 234946560, label: "SRAM" }], Bl = [{ start: 134217728, label: "ROM0" }, { start: 167772160, label: "ROM1" }, { start: 201326592, label: "ROM2" }];
function Dl(e, t = 0) {
  const n = e >>> 0;
  for (const s of Bl) {
    const r = n - s.start;
    if (r >= 0 && r < Il) return t > 0 ? { address: n, label: s.label, inCart: true, offset: r % t, rawOffset: r, mirrored: r >= t } : { address: n, label: s.label, inCart: false, offset: null, rawOffset: r, mirrored: false };
  }
  for (const s of Pl) if (n >= s.start && n < s.end) return { address: n, label: s.label, inCart: false, offset: null, rawOffset: n - s.start, mirrored: false };
  return { address: n, label: "BUS", inCart: false, offset: null, rawOffset: null, mirrored: false };
}
function jl(e) {
  const t = e?.gprs?.[15];
  if (typeof t != "number") return null;
  const n = Number(e?.instructionWidth) || 4;
  return (t >>> 0) - n >>> 0;
}
function zl(e) {
  return e?.execMode === e?.MODE_THUMB ? "THUMB" : "ARM";
}
var Ul = q('<span class="g-meta svelte-1kb9ux"> </span>'), ql = q('<div class="g-landmarks svelte-1kb9ux"><span class="g-landmarks-title svelte-1kb9ux">QUICK NAV</span> <button class="g-lm-btn svelte-1kb9ux" type="button" title="Jump to cartridge header"><span class="g-lm-label svelte-1kb9ux">HEADER</span> <span class="g-lm-off svelte-1kb9ux"> </span></button> <button class="g-lm-btn svelte-1kb9ux" type="button" title="Jump to code entry point"><span class="g-lm-label svelte-1kb9ux">ENTRY</span> <span class="g-lm-off svelte-1kb9ux"> </span></button> <button class="g-lm-btn g-lm-demo svelte-1kb9ux" type="button" title="Start emulation with PC follow"><span class="g-lm-label svelte-1kb9ux">RUN + FOLLOW</span></button></div>'), Hl = q(" <!>", 1), Vl = q("<span> <!></span>"), Wl = q("<span> <!></span>"), Gl = q('<button type="button"><span class="g-trail-age svelte-1kb9ux"></span> <span class="g-trail-pc"> </span> <span class="g-trail-off svelte-1kb9ux"> </span> <span class="g-trail-mode svelte-1kb9ux"> </span></button>'), Yl = q('<div class="g-trail-title svelte-1kb9ux">RECENT CART PC</div> <!>', 1), Xl = q('<div class="g-click-note svelte-1kb9ux"> </div>'), Kl = q(`<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-split svelte-1kb9ux"><div class="g-left svelte-1kb9ux"><div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <button type="button" title="Auto-scroll the ROM view to wherever the CPU's program counter currently is"><span class="g-follow-led svelte-1kb9ux" aria-hidden="true"></span> <span class="g-follow-lab"> </span></button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div> <!></div> <div class="g-right svelte-1kb9ux"><div class="g-sub-bar svelte-1kb9ux"><span class="g-sub-title svelte-1kb9ux">[ ROM / INSPECTOR ]</span> <span class="g-sub-hint svelte-1kb9ux"><!></span></div> <!> <div class="g-pc-trail svelte-1kb9ux"><!> <!></div></div></div></div>`);
function Jl(e, t) {
  ht(t, true);
  let n = Vt(t, "onPcUpdate", 3, null), s, r = null, i = V(false), l = V(false), c = V("cart ready \xB7 click PLAY"), f = V(null), u = V(null), o = V("ARM"), h = V(false), v = V(true), w = V(Et([])), x = V(""), L = 0, k = 0;
  const H = 480, U = 320, E = 100, I = 8;
  function z(b) {
    return b < 1024 ? `${b} B` : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KiB` : `${(b / (1024 * 1024)).toFixed(2)} MiB`;
  }
  function F(b) {
    return "0x" + (b >>> 0).toString(16).toUpperCase().padStart(8, "0");
  }
  function A(b) {
    if (!b || b.byteLength < 192) return null;
    const N = (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0;
    let $ = null;
    if (N >>> 24 === 234) {
      let fe = N & 16777215;
      fe & 8388608 && (fe |= 4278190080);
      const me = 8 + (fe << 2) >>> 0;
      me < b.byteLength && me > 192 && ($ = me);
    }
    return { entryOff: $ ?? 192 };
  }
  let M = Ht(() => A(t.bytes));
  function X() {
    n()?.({ follow: a(v), running: a(l), liveAddress: a(u)?.address ?? null, label: a(u)?.label ?? (a(i) ? "READY" : "IDLE"), mode: a(o), inCart: a(h), offset: a(f), mirrored: !!a(u)?.mirrored, trail: a(w), ts: performance.now() });
  }
  function R(b) {
    if (!b?.inCart || b.offset == null) return;
    const N = a(w)[0];
    N && Math.floor(N.offset / 16) === Math.floor(b.offset / 16) || p(w, [{ address: b.address, offset: b.offset, label: b.label, mode: a(o), mirrored: b.mirrored, ts: performance.now() }, ...a(w)].slice(0, I), true);
  }
  function K(b) {
    if (a(l)) {
      p(x, `ROM ${F(b)} selected while running`);
      return;
    }
    p(x, `ROM ${F(b)} \xB7 bus ${F(134217728 + b)} \xB7 V2 DISASM is not shipped yet`);
  }
  function Z() {
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
    return r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((b, N) => console.warn("[scry/v2/game/gba]", N)), r.setCanvas(s), r.setBios(window.biosBin), r;
  }
  async function _e() {
    if (t.bytes && !a(l)) {
      if (s.focus(), !a(i)) {
        p(c, "loading ROM\u2026"), await new Promise((b) => requestAnimationFrame(b)), await new Promise((b) => requestAnimationFrame(b));
        try {
          const b = Z(), N = t.bytes.buffer.slice(t.bytes.byteOffset, t.bytes.byteOffset + t.bytes.byteLength);
          if (!b.setRom(N)) {
            p(c, "rom rejected");
            return;
          }
          p(i, true), b.runStable(), p(l, true), p(c, "running"), X(), S();
        } catch (b) {
          console.error("[scry/v2/game] load failed", b), p(c, "error: " + (b?.message || b));
        }
        return;
      }
      r.runStable(), p(l, true), p(c, "running"), X(), S();
    }
  }
  function oe() {
    !r || !r.hasRom() || (r.pause(), p(l, false), p(c, "paused"), j(), X());
  }
  function te(b) {
    if (L = requestAnimationFrame(te), !a(l) || !r || !t.bytes || b - k < E) return;
    k = b;
    const N = jl(r.cpu);
    N !== null && (p(o, zl(r.cpu), true), p(u, Dl(N, t.bytes.byteLength), true), a(u).inCart && a(u).offset !== null ? (p(f, a(u).offset, true), p(h, true), R(a(u))) : p(h, false), X());
  }
  function S() {
    L || (k = 0, L = requestAnimationFrame(te));
  }
  function j() {
    L && cancelAnimationFrame(L), L = 0;
  }
  function G() {
    p(v, !a(v)), X();
  }
  function ce() {
    if (!r || !t.bytes) return;
    const b = a(l);
    if (b) {
      try {
        r.pause();
      } catch {
      }
      p(l, false);
    }
    j(), p(f, null), p(u, null), p(h, false), p(i, false), p(c, "cart ready \xB7 click PLAY"), X(), b && _e();
  }
  Ye(() => {
    if (t.bytes) a(l) || p(c, "cart ready \xB7 click PLAY"), a(i) || (p(f, null), p(u, null), p(h, false), p(w, [], true), p(x, ""), X());
    else {
      if (r && a(l)) try {
        r.pause();
      } catch {
      }
      j(), p(f, null), p(u, null), p(h, false), p(v, true), p(w, [], true), p(x, ""), p(i, false), p(l, false), p(c, "idle"), X();
    }
  }), tr(() => {
    if (r && a(l)) try {
      r.pause();
    } catch {
    }
    j();
  });
  var ue = Kl(), ye = d(ue), Se = _(d(ye), 2);
  {
    var Pe = (b) => {
      var N = Ul(), $ = d(N);
      ne((fe) => C($, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${fe ?? ""}`), [() => z(t.header.rom_size)]), D(b, N);
    };
    ve(Se, (b) => {
      t.header && b(Pe);
    });
  }
  var Ae = _(ye, 2), Re = d(Ae), je = d(Re), de = d(je);
  tt(de, "width", H), tt(de, "height", U), St(de, (b) => s = b, () => s);
  var Ce = _(je, 2), Te = d(Ce), Oe = _(Te, 2), Fe = _(Oe, 2), Me = _(Fe, 2);
  let Ne;
  var P = _(d(Me), 2), m = d(P), y = _(Me, 2), B = d(y), ee = _(Ce, 2);
  {
    var se = (b) => {
      var N = ql(), $ = _(d(N), 2), fe = _(d($), 2), me = d(fe), he = _($, 2), ie = _(d(he), 2), Le = d(ie), We = _(he, 2);
      ne((mt, Pt) => {
        C(me, mt), C(Le, Pt);
      }, [() => F(160), () => F(a(M).entryOff)]), ge("click", $, () => {
        p(f, 160);
      }), ge("click", he, () => {
        p(f, a(M).entryOff, true);
      }), ge("click", We, () => {
        a(v) || p(v, true), a(l) || _e(), s.focus(), X();
      }), D(b, N);
    };
    ve(ee, (b) => {
      a(M) && b(se);
    });
  }
  var W = _(Re, 2), re = d(W), Ee = _(d(re), 2), ze = d(Ee);
  {
    var O = (b) => {
      var N = Vl();
      let $;
      var fe = d(N), me = _(fe);
      {
        var he = (ie) => {
          var Le = Hl(), We = ut(Le), mt = _(We);
          {
            var Pt = (Ct) => {
              var gn = cn("\xB7 mirror");
              D(Ct, gn);
            };
            ve(mt, (Ct) => {
              a(u).mirrored && Ct(Pt);
            });
          }
          ne((Ct) => C(We, `\xB7 ROM ${Ct ?? ""} `), [() => F(a(u).offset)]), D(ie, Le);
        };
        ve(me, (ie) => {
          a(u)?.inCart && a(u)?.offset !== null && ie(he);
        });
      }
      ne((ie) => {
        $ = et(N, 1, "svelte-1kb9ux", null, $, { "g-pc-dim": !a(u)?.inCart }), C(fe, `${a(o) ?? ""} PC\u2192${ie ?? ""}
              \xB7 ${a(u)?.label ?? "BUS" ?? ""} `);
      }, [() => F(a(u)?.address ?? 0)]), D(b, N);
    }, Y = (b) => {
      var N = Wl();
      let $;
      var fe = d(N), me = _(fe);
      {
        var he = (ie) => {
          var Le = cn();
          ne((We) => C(Le, `\xB7 ROM ${We ?? ""}`), [() => F(a(u).offset)]), D(ie, Le);
        };
        ve(me, (ie) => {
          a(u).inCart && a(u).offset !== null && ie(he);
        });
      }
      ne((ie) => {
        $ = et(N, 1, "svelte-1kb9ux", null, $, { "g-pc-dim": !a(u).inCart }), C(fe, `${a(o) ?? ""} PC\u2192${ie ?? ""} \xB7 ${a(u).label ?? ""} `);
      }, [() => F(a(u).address)]), D(b, N);
    }, le = (b) => {
      var N = cn("waiting for first PC sample\u2026");
      D(b, N);
    }, ke = (b) => {
      var N = cn("pause \xB7 scroll \xB7 jump 0x...");
      D(b, N);
    };
    ve(ze, (b) => {
      a(l) && a(f) !== null ? b(O) : a(u) ? b(Y, 1) : a(l) ? b(le, 2) : b(ke, -1);
    });
  }
  var qe = _(re, 2);
  Nl(qe, { get bytes() {
    return t.bytes;
  }, get cursor() {
    return a(f);
  }, get follow() {
    return a(v);
  }, onByteClick: K });
  var Je = _(qe, 2), Ie = d(Je);
  {
    var g = (b) => {
      var N = Yl(), $ = _(ut(N), 2);
      ot($, 17, () => a(w), lt, (fe, me, he) => {
        var ie = Gl();
        et(ie, 1, "g-trail-row svelte-1kb9ux", null, {}, { hot: he === 0 });
        var Le = d(ie);
        Le.textContent = he === 0 ? "NOW" : `-${he}`;
        var We = _(Le, 2), mt = d(We), Pt = _(We, 2), Ct = d(Pt), gn = _(Pt, 2), Us = d(gn);
        ne((qs, Hs) => {
          C(mt, qs), C(Ct, Hs), C(Us, a(me).mode);
        }, [() => F(a(me).address), () => F(a(me).offset)]), ge("click", ie, () => p(f, a(me).offset, true)), D(fe, ie);
      }), D(b, N);
    }, T = (b) => {
      var N = cn("PC trail: waiting for cart code");
      D(b, N);
    };
    ve(Ie, (b) => {
      a(w).length ? b(g) : b(T, -1);
    });
  }
  var J = _(Ie, 2);
  {
    var Q = (b) => {
      var N = Xl(), $ = d(N);
      ne(() => C($, a(x))), D(b, N);
    };
    ve(J, (b) => {
      a(x) && b(Q);
    });
  }
  ne(() => {
    Te.disabled = !t.bytes || a(l), Oe.disabled = !a(l), Fe.disabled = !t.bytes || !a(i), Ne = et(Me, 1, "g-follow svelte-1kb9ux", null, Ne, { "g-follow-on": a(v) }), Me.disabled = !a(i), C(m, a(v) ? "FOLLOWING PC" : "FOLLOW PC"), C(B, a(c));
  }), ge("click", Te, _e), ge("click", Oe, oe), ge("click", Fe, ce), ge("click", Me, G), D(e, ue), _t();
}
Kt(["click"]);
const Zl = 4, Ql = 5, $l = 1, Vr = 2, Wr = 1, eo = 2, Gr = 65535, Yr = 65535, to = 1e6;
function no(e) {
  if (e.byteLength < 16) throw new Error("not ELF (too small)");
  if (e[0] !== 127 || e[1] !== 69 || e[2] !== 76 || e[3] !== 70) throw new Error("not ELF (bad magic)");
  const t = e[Zl], n = e[Ql];
  if (t !== $l && t !== Vr) throw new Error("unknown ELF class");
  if (n !== Wr && n !== eo) throw new Error("unknown ELF data encoding");
  const s = t === Vr, r = n === Wr, i = new DataView(e.buffer, e.byteOffset, e.byteLength), l = e.byteLength;
  function c(A, M, X) {
    if (A < 0 || M < 0 || A + M > l) throw new Error(`malformed ELF: ${X} out of range (off=${A} len=${M} total=${l})`);
  }
  function f(A, M) {
    const X = Math.max(0, Math.min(A, l)), R = Math.max(X, Math.min(A + M, l));
    return e.subarray(X, R);
  }
  function u(A) {
    return c(A, 2, "u16"), i.getUint16(A, r);
  }
  function o(A) {
    return c(A, 4, "u32"), i.getUint32(A, r);
  }
  function h(A) {
    c(A, 8, "u64");
    const M = i.getBigUint64(A, r);
    return M > BigInt(Number.MAX_SAFE_INTEGER) ? M : Number(M);
  }
  const v = s ? { e_ident: e.subarray(0, 16), e_type: u(16), e_machine: u(18), e_version: o(20), e_entry: h(24), e_phoff: h(32), e_shoff: h(40), e_flags: o(48), e_ehsize: u(52), e_phentsize: u(54), e_phnum: u(56), e_shentsize: u(58), e_shnum: u(60), e_shstrndx: u(62) } : { e_ident: e.subarray(0, 16), e_type: u(16), e_machine: u(18), e_version: o(20), e_entry: o(24), e_phoff: o(28), e_shoff: o(32), e_flags: o(36), e_ehsize: u(40), e_phentsize: u(42), e_phnum: u(44), e_shentsize: u(46), e_shnum: u(48), e_shstrndx: u(50) }, w = s ? 64 : 40;
  if (v.e_shnum > Gr) throw new Error(`malformed ELF: e_shnum=${v.e_shnum} exceeds cap ${Gr}`);
  if (v.e_shnum > 0 && v.e_shentsize < w) throw new Error(`malformed ELF: e_shentsize=${v.e_shentsize} smaller than minimum ${w}`);
  const x = [];
  for (let A = 0; A < v.e_shnum; A++) {
    const M = Number(v.e_shoff) + A * v.e_shentsize, X = s ? { sh_name: o(M + 0), sh_type: o(M + 4), sh_flags: h(M + 8), sh_addr: h(M + 16), sh_offset: h(M + 24), sh_size: h(M + 32), sh_link: o(M + 40), sh_info: o(M + 44), sh_addralign: h(M + 48), sh_entsize: h(M + 56) } : { sh_name: o(M + 0), sh_type: o(M + 4), sh_flags: o(M + 8), sh_addr: o(M + 12), sh_offset: o(M + 16), sh_size: o(M + 20), sh_link: o(M + 24), sh_info: o(M + 28), sh_addralign: o(M + 32), sh_entsize: o(M + 36) };
    x.push(X);
  }
  let L = null;
  if (v.e_shstrndx < x.length) {
    const A = x[v.e_shstrndx];
    L = f(Number(A.sh_offset), Number(A.sh_size));
  }
  function k(A, M) {
    if (!A || M < 0 || M >= A.byteLength) return "";
    let X = M;
    for (; X < A.byteLength && A[X] !== 0; ) X++;
    return new TextDecoder().decode(A.subarray(M, X));
  }
  for (const A of x) A.name = k(L, A.sh_name);
  const H = s ? 56 : 32;
  if (v.e_phnum > Yr) throw new Error(`malformed ELF: e_phnum=${v.e_phnum} exceeds cap ${Yr}`);
  if (v.e_phnum > 0 && v.e_phentsize < H) throw new Error(`malformed ELF: e_phentsize=${v.e_phentsize} smaller than minimum ${H}`);
  const U = [];
  for (let A = 0; A < v.e_phnum; A++) {
    const M = Number(v.e_phoff) + A * v.e_phentsize, X = s ? { p_type: o(M + 0), p_flags: o(M + 4), p_offset: h(M + 8), p_vaddr: h(M + 16), p_paddr: h(M + 24), p_filesz: h(M + 32), p_memsz: h(M + 40), p_align: h(M + 48) } : { p_type: o(M + 0), p_offset: o(M + 4), p_vaddr: o(M + 8), p_paddr: o(M + 12), p_filesz: o(M + 16), p_memsz: o(M + 20), p_flags: o(M + 24), p_align: o(M + 28) };
    U.push(X);
  }
  const E = [], I = 2, z = 11;
  let F = to;
  for (const A of x) {
    if (A.sh_type !== I && A.sh_type !== z) continue;
    const M = x[A.sh_link], X = M ? f(Number(M.sh_offset), Number(M.sh_size)) : null, R = s ? 24 : 16, K = Math.floor(Number(A.sh_size) / R), Z = Number(A.sh_offset), _e = Math.max(0, Math.floor((l - Z) / R)), oe = Math.min(K, _e, F);
    F -= oe;
    for (let te = 0; te < oe; te++) {
      const S = Z + te * R, j = s ? { st_name: o(S + 0), st_info: e[S + 4], st_other: e[S + 5], st_shndx: u(S + 6), st_value: h(S + 8), st_size: h(S + 16) } : { st_name: o(S + 0), st_value: o(S + 4), st_size: o(S + 8), st_info: e[S + 12], st_other: e[S + 13], st_shndx: u(S + 14) };
      j.name = k(X, j.st_name), j.bind = j.st_info >> 4, j.type = j.st_info & 15, j.fromSection = A.name, E.push(j);
    }
  }
  return { is64: s, le: r, header: v, sections: x, segments: U, symbols: E };
}
const we = ["zero", "ra", "sp", "gp", "tp", "t0", "t1", "t2", "s0", "s1", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "t3", "t4", "t5", "t6"];
function Be(e) {
  return e >>> 7 & 31;
}
function Ge(e) {
  return e >>> 15 & 31;
}
function Zt(e) {
  return e >>> 20 & 31;
}
function bt(e) {
  return e >>> 12 & 7;
}
function zn(e) {
  return e >>> 25 & 127;
}
function ro(e) {
  return e & 127;
}
function jt(e) {
  return e >> 20;
}
function so(e) {
  return e >> 25 << 5 | e >>> 7 & 31;
}
function ao(e) {
  return e >> 31 << 12 | (e >>> 7 & 1) << 11 | (e >>> 25 & 63) << 5 | (e >>> 8 & 15) << 1;
}
function Xr(e) {
  return e & 4294963200;
}
function io(e) {
  return e >> 31 << 20 | (e >>> 12 & 255) << 12 | (e >>> 20 & 1) << 11 | (e >>> 21 & 1023) << 1;
}
function Tt(e, t = 8) {
  return "0x" + (e >>> 0).toString(16).toUpperCase().padStart(t, "0");
}
function wn(e) {
  return (e < 0 ? "-" : "") + Math.abs(e).toString();
}
function lo(e, t) {
  const n = e | 0, s = ro(n), r = (h, v) => o(h, `${we[Be(n)]}, ${we[Ge(n)]}, ${we[Zt(n)]}`, "op", null, v), i = (h) => o(h, `${we[Be(n)]}, ${we[Ge(n)]}, ${wn(jt(n))}`, "op"), l = (h, v) => o(h, `${we[Be(n)]}, ${we[Ge(n)]}, ${v}`, "op"), c = (h) => o(h, `${we[Be(n)]}, ${wn(jt(n))}(${we[Ge(n)]})`, "load"), f = (h) => o(h, `${we[Zt(n)]}, ${wn(so(n))}(${we[Ge(n)]})`, "store"), u = (h) => {
    const v = ao(n), w = t + v >>> 0;
    return o(h, `${we[Ge(n)]}, ${we[Zt(n)]}, ${Tt(w, 8)}`, "branch", w);
  };
  function o(h, v, w = "op", x = null, L) {
    return { pc: t, raw: n >>> 0, mnemonic: h, operands: v, kind: w, target: x, comment: L };
  }
  switch (s) {
    case 55:
      return o("lui", `${we[Be(n)]}, ${Tt(Xr(n) >>> 12, 5)}`, "op");
    case 23:
      return o("auipc", `${we[Be(n)]}, ${Tt(Xr(n) >>> 12, 5)}`, "op");
    case 111: {
      const h = io(n), v = t + h >>> 0, w = Be(n) === 0 ? "j" : (Be(n) === 1, "jal"), x = Be(n) === 0 ? Tt(v, 8) : `${we[Be(n)]}, ${Tt(v, 8)}`;
      return o(w, x, "jump", v);
    }
    case 103:
      return Be(n) === 0 && Ge(n) === 1 && jt(n) === 0 ? o("ret", "", "jump", null) : o("jalr", `${we[Be(n)]}, ${wn(jt(n))}(${we[Ge(n)]})`, "jump", null);
    case 99:
      switch (bt(n)) {
        case 0:
          return u("beq");
        case 1:
          return u("bne");
        case 4:
          return u("blt");
        case 5:
          return u("bge");
        case 6:
          return u("bltu");
        case 7:
          return u("bgeu");
        default:
          return o("branch?", `funct3=${bt(n)}`, "unknown");
      }
    case 3:
      switch (bt(n)) {
        case 0:
          return c("lb");
        case 1:
          return c("lh");
        case 2:
          return c("lw");
        case 4:
          return c("lbu");
        case 5:
          return c("lhu");
        default:
          return o("load?", `funct3=${bt(n)}`, "unknown");
      }
    case 35:
      switch (bt(n)) {
        case 0:
          return f("sb");
        case 1:
          return f("sh");
        case 2:
          return f("sw");
        default:
          return o("store?", `funct3=${bt(n)}`, "unknown");
      }
    case 19: {
      switch (bt(n)) {
        case 0:
          return n === 19 ? o("nop", "", "op") : jt(n) === 0 && Be(n) !== 0 ? o("mv", `${we[Be(n)]}, ${we[Ge(n)]}`, "op") : Ge(n) === 0 && Be(n) !== 0 ? o("li", `${we[Be(n)]}, ${wn(jt(n))}`, "op") : i("addi");
        case 1:
          return l("slli", Zt(n));
        case 2:
          return i("slti");
        case 3:
          return i("sltiu");
        case 4:
          return i("xori");
        case 5:
          return zn(n) === 32 ? l("srai", Zt(n)) : l("srli", Zt(n));
        case 6:
          return i("ori");
        case 7:
          return i("andi");
      }
      return o("op-imm?", "", "unknown");
    }
    case 51: {
      if (zn(n) === 1) switch (bt(n)) {
        case 0:
          return r("mul");
        case 1:
          return r("mulh");
        case 2:
          return r("mulhsu");
        case 3:
          return r("mulhu");
        case 4:
          return r("div");
        case 5:
          return r("divu");
        case 6:
          return r("rem");
        case 7:
          return r("remu");
      }
      switch (bt(n)) {
        case 0:
          return zn(n) === 32 ? r("sub") : r("add");
        case 1:
          return r("sll");
        case 2:
          return r("slt");
        case 3:
          return r("sltu");
        case 4:
          return r("xor");
        case 5:
          return zn(n) === 32 ? r("sra") : r("srl");
        case 6:
          return r("or");
        case 7:
          return r("and");
      }
      return o("op?", "", "unknown");
    }
    case 15:
      return o("fence", "", "op");
    case 115: {
      if (bt(n) === 0) {
        const w = jt(n) & 4095;
        return w === 0 ? o("ecall", "", "system") : w === 1 ? o("ebreak", "", "system") : w === 770 ? o("mret", "", "system") : w === 258 ? o("sret", "", "system") : w === 2 ? o("uret", "", "system") : w === 261 ? o("wfi", "", "system") : o("system?", Tt(w, 3), "unknown");
      }
      const h = jt(n) & 4095, v = Tt(h, 3);
      switch (bt(n)) {
        case 1:
          return o("csrrw", `${we[Be(n)]}, ${v}, ${we[Ge(n)]}`, "system");
        case 2:
          return o("csrrs", `${we[Be(n)]}, ${v}, ${we[Ge(n)]}`, "system");
        case 3:
          return o("csrrc", `${we[Be(n)]}, ${v}, ${we[Ge(n)]}`, "system");
        case 5:
          return o("csrrwi", `${we[Be(n)]}, ${v}, ${Ge(n)}`, "system");
        case 6:
          return o("csrrsi", `${we[Be(n)]}, ${v}, ${Ge(n)}`, "system");
        case 7:
          return o("csrrci", `${we[Be(n)]}, ${v}, ${Ge(n)}`, "system");
      }
      return o("system?", "", "unknown");
    }
    case 47: {
      const h = n >>> 27 & 31, w = { 2: "lr.w", 3: "sc.w", 1: "amoswap.w", 0: "amoadd.w", 4: "amoxor.w", 12: "amoand.w", 8: "amoor.w", 16: "amomin.w", 20: "amomax.w", 24: "amominu.w", 28: "amomaxu.w" }[h] ?? "amo?";
      return o(w, `${we[Be(n)]}, ${we[Zt(n)]}, (${we[Ge(n)]})`, "op");
    }
  }
  return (n & 3) !== 3 ? o("(c)", Tt(n & 65535, 4), "unknown") : o("(unknown)", Tt(n, 8), "unknown");
}
function oo(e, t, n, s) {
  const r = new DataView(e.buffer, e.byteOffset, e.byteLength), i = [], l = Math.min(t + n, e.byteLength) - 3;
  for (let c = t; c < l; c += 4) {
    const f = r.getUint32(c, true), u = s + (c - t) >>> 0;
    i.push(lo(f, u));
  }
  return i;
}
var co = q('<p class="d-warn svelte-1wng8hg"> </p>'), fo = q('<section class="d-wrap svelte-1wng8hg"><header class="d-bar svelte-1wng8hg"><span class="d-title svelte-1wng8hg">DISASM</span> <span class="d-arch svelte-1wng8hg">RV32IMA</span> <span class="d-sect svelte-1wng8hg"> </span> <form class="d-goto svelte-1wng8hg"><label class="d-goto-l svelte-1wng8hg">GOTO</label> <input type="text" placeholder="0x00010000" spellcheck="false" autocomplete="off" class="svelte-1wng8hg"/></form></header> <!> <div class="d-scroll svelte-1wng8hg" tabindex="0"><div class="d-sizer svelte-1wng8hg"></div></div></section>');
function uo(e, t) {
  ht(t, true);
  let n = Vt(t, "format", 3, "unknown");
  const s = 22, r = 6, i = 2e6;
  let l, c, f = 400, u = [], o = { physicalPx: 0, scale: 1 }, h = null, v = null, w = 0, x = 0, L = 0, k = 0, H = /* @__PURE__ */ new Map(), U = false, E = V(""), I = V(""), z = V("");
  function F(P, m = 8) {
    return "0x" + (P >>> 0).toString(16).toUpperCase().padStart(m, "0");
  }
  function A(P) {
    return [P >>> 0 & 255, P >>> 8 & 255, P >>> 16 & 255, P >>> 24 & 255].map((y) => y.toString(16).padStart(2, "0").toUpperCase()).join(" ");
  }
  function M(P) {
    let m = P.sections.find((y) => y.name === ".text");
    if (m || (m = P.sections.find((y) => y.sh_type === 1 && Number(y.sh_flags) & 4)), !m && P.segments) {
      const y = P.segments.find((B) => B.p_type === 1 && Number(B.p_flags) & 1);
      y && Number(y.p_filesz) > 0 && (m = { name: "(PT_LOAD)", sh_offset: Number(y.p_offset), sh_size: Number(y.p_filesz), sh_addr: Number(y.p_vaddr), sh_type: 1, sh_flags: 6 });
    }
    return m;
  }
  function X(P) {
    const m = /* @__PURE__ */ new Map();
    for (const y of P.symbols) {
      if (!y.name || !y.name.length || y.type !== 2 && y.type !== 0) continue;
      const B = Number(y.st_value);
      B !== 0 && (m.has(B) || m.set(B, []), m.get(B).push(y.name));
    }
    return m;
  }
  function R(P) {
    const m = Math.max(0, P * s);
    return m <= i ? { physicalPx: m, scale: 1 } : { physicalPx: i, scale: m / i };
  }
  function K(P) {
    if (k === 0) return { start: 0, end: 0, topPx: 0 };
    const m = o.scale, y = P * m, B = Math.ceil(f / s) + r * 2, ee = Math.floor(y / s) - r, se = Math.max(0, ee), W = Math.min(k, se + B);
    let re;
    if (m === 1) re = se * s;
    else {
      const Ee = y - se * s;
      re = P - Ee / m;
    }
    return { start: se, end: W, topPx: re };
  }
  function Z(P) {
    for (; u.length < P; ) u.push(document.createElement("div"));
  }
  function _e(P) {
    const m = H.get(P);
    return m ? m.join(", ") : null;
  }
  function oe(P) {
    const m = _e(P.pc), y = document.createElement("span");
    y.className = "c addr", y.textContent = F(P.pc);
    const B = document.createElement("span");
    B.className = "c bytes", B.textContent = A(P.raw);
    const ee = document.createElement("span");
    ee.className = `c mn k-${P.kind}`, ee.textContent = P.mnemonic;
    const se = document.createElement("span");
    se.className = "c ops", se.textContent = P.operands || "";
    const W = document.createElement("span");
    return W.className = "c label", m && (W.textContent = "<" + m + ">"), [y, B, ee, se, W];
  }
  function te() {
    if (!t.bytes || !c || k === 0) {
      for (const W of u) W.parentNode && W.remove();
      c && (c.style.height = "0px");
      return;
    }
    o = R(k), c.style.height = `${o.physicalPx}px`;
    const P = l ? l.scrollTop : 0, m = K(P), y = m.end - m.start;
    Z(y);
    const B = x + m.start * 4, ee = y * 4, se = oo(t.bytes, B, ee, w + m.start * 4);
    for (let W = y; W < u.length; W++) u[W].parentNode && u[W].remove();
    for (let W = 0; W < y; W++) {
      const re = u[W];
      re.className = "d-row", re.style.position = "absolute", re.style.left = "0", re.style.right = "0", re.style.top = `${m.topPx + W * s}px`, re.style.height = `${s}px`, re.replaceChildren(...oe(se[W])), re.parentNode !== c && c.appendChild(re);
    }
  }
  function S(P) {
    if (k === 0) return false;
    const m = Math.floor((P - w) / 4);
    if (m < 0 || m >= k) return false;
    const y = m * s;
    return l.scrollTop = y / (o.scale || 1), true;
  }
  function j(P) {
    P.preventDefault();
    const m = a(z).trim();
    if (!m) return;
    const y = parseInt(m.replace(/^0x/i, ""), 16);
    !Number.isFinite(y) || y < 0 || S(y >>> 0);
  }
  function G(P) {
    if (!t.bytes || k === 0) return;
    const m = Math.max(1, Math.floor(f / s) - 2), y = (B) => {
      const ee = l.scrollTop * (o.scale || 1), se = Math.max(0, ee + B * s);
      l.scrollTop = se / (o.scale || 1);
    };
    P.key === "PageDown" ? (P.preventDefault(), y(m)) : P.key === "PageUp" ? (P.preventDefault(), y(-m)) : P.key === "Home" ? (P.preventDefault(), l.scrollTop = 0) : P.key === "End" && (P.preventDefault(), l.scrollTop = o.physicalPx);
  }
  function ce() {
    if (h = null, v = null, w = 0, x = 0, L = 0, k = 0, H = /* @__PURE__ */ new Map(), U = false, !t.bytes) {
      p(E, ""), p(I, "");
      for (const P of u) P.parentNode && P.remove();
      c && (c.style.height = "0px");
      return;
    }
    if (n() === "elf") try {
      h = no(t.bytes), v = M(h), H = X(h), U = h.header.e_machine === 243, v ? (x = Number(v.sh_offset), L = Number(v.sh_size), w = Number(v.sh_addr), k = Math.floor(L / 4), p(I, `${v.name} \xB7 ${L.toLocaleString()} bytes \xB7 @ ${F(w)}`)) : p(I, "(no .text or executable section)");
    } catch (P) {
      p(E, `ELF parse failed: ${P.message}`);
    }
    else x = 0, L = t.bytes.byteLength, w = 0, k = Math.floor(L / 4), p(I, `(raw bytes) \xB7 ${t.bytes.byteLength.toLocaleString()} bytes`);
    h && !U ? p(E, `This file is ${h.header.e_machine === 62 ? "x86_64" : "machine " + h.header.e_machine}. Disassembly is RV32IMA only -- output below is the .text bytes decoded as if they were RISC-V (will look like noise on non-RISC-V binaries).`) : p(E, ""), l && (l.scrollTop = 0), u = [];
  }
  let ue = 0, ye, Se;
  er(() => {
    ye = new ResizeObserver(() => {
      f = l.clientHeight, te();
    }), ye.observe(l), Se = () => {
      ue || (ue = requestAnimationFrame(() => {
        ue = 0, te();
      }));
    }, l.addEventListener("scroll", Se, { passive: true }), te();
  }), tr(() => {
    try {
      ye?.disconnect();
    } catch {
    }
    l && Se && l.removeEventListener("scroll", Se);
  });
  let Pe = null;
  Ye(() => {
    const P = t.bytes;
    n(), P !== Pe && (Pe = P, ce(), Xt(() => te()));
  });
  var Ae = fo(), Re = d(Ae), je = _(d(Re), 4), de = d(je), Ce = _(je, 2), Te = _(d(Ce), 2), Oe = _(Re, 2);
  {
    var Fe = (P) => {
      var m = co(), y = d(m);
      ne(() => C(y, a(E))), D(P, m);
    };
    ve(Oe, (P) => {
      a(E) && P(Fe);
    });
  }
  var Me = _(Oe, 2), Ne = d(Me);
  St(Ne, (P) => c = P, () => c), St(Me, (P) => l = P, () => l), ne(() => C(de, a(I))), Nt("submit", Ce, j), Tr(Te, () => a(z), (P) => p(z, P)), ge("keydown", Me, G), D(e, Ae), _t();
}
Kt(["keydown"]);
var vo = q('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), po = q('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), ho = q('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), _o = q('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function mo(e, t) {
  ht(t, true);
  var n = _o(), s = d(n);
  {
    var r = (c) => {
      var f = vo();
      D(c, f);
    }, i = (c) => {
      var f = po(), u = ut(f), o = _(d(u), 2), h = d(o), v = _(u, 2), w = _(d(v), 2), x = d(w), L = _(v, 2), k = _(d(L), 2), H = d(k);
      ne((U, E) => {
        tt(o, "title", t.file.name), C(h, t.file.name), C(x, U), C(H, E);
      }, [() => br(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), D(c, f);
    }, l = (c) => {
      var f = ho();
      D(c, f);
    };
    ve(s, (c) => {
      t.parsing ? c(r) : t.file ? c(i, 1) : c(l, -1);
    });
  }
  D(e, n), _t();
}
var bo = q('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function go(e, t) {
  ht(t, true);
  let n = V(false), s = 0;
  function r(f) {
    const u = f.dataTransfer;
    if (!u) return false;
    const o = u.types;
    if (!o) return false;
    for (let h = 0; h < o.length; h++) if (o[h] === "Files") return true;
    return false;
  }
  Ye(() => {
    function f(v) {
      r(v) && (v.preventDefault(), s++, p(n, true));
    }
    function u(v) {
      r(v) && (v.preventDefault(), v.dataTransfer && (v.dataTransfer.dropEffect = "copy"));
    }
    function o(v) {
      r(v) && (s = Math.max(0, s - 1), s === 0 && p(n, false));
    }
    async function h(v) {
      if (!r(v)) return;
      v.preventDefault(), s = 0, p(n, false);
      const w = v.dataTransfer?.files?.[0];
      if (w) try {
        const x = await zs(w);
        t.onfile?.(x);
      } catch (x) {
        t.onerror?.(x.message || String(x));
      }
    }
    return window.addEventListener("dragenter", f), window.addEventListener("dragover", u), window.addEventListener("dragleave", o), window.addEventListener("drop", h), () => {
      window.removeEventListener("dragenter", f), window.removeEventListener("dragover", u), window.removeEventListener("dragleave", o), window.removeEventListener("drop", h);
    };
  });
  var i = Kn(), l = ut(i);
  {
    var c = (f) => {
      var u = bo();
      D(f, u);
    };
    ve(l, (f) => {
      a(n) && f(c);
    });
  }
  D(e, i), _t();
}
var yo = q('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), wo = q('<span class="s-badge entrance svelte-1n46o8q"> </span>'), xo = q('<span class="s-summary svelte-1n46o8q"> </span>'), Eo = q('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), Ao = q('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), So = q('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), ko = q('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), Mo = q('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Co = q('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button>DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), To = q('<p class="err svelte-1n46o8q"> </p>'), Fo = q('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), Lo = q("<!> <!>", 1), Ro = q('<span class="s-hint svelte-1n46o8q"> </span>'), Oo = q('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function No(e, t) {
  ht(t, true);
  let n = V(null), s = V(null), r = V(null), i = V(null), l = V(null), c = V(null), f = V(null), u = V(""), o = V("inspect"), h = V(Et(js())), v = V(false), w = V(null), x = V(null), L = V(""), k = V(false);
  const H = "scry \xB7 awaiting binary", U = "scry-booted-v2", E = { inspect: "click a section/segment/string -> jump in HEX", hex: "scroll or PgUp/PgDn, type a hex offset to jump, click the strip", disasm: "RV32IMA disassembly \xB7 PgUp/PgDn/Home/End to navigate \xB7 GOTO to jump by address", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, I = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  Ye(() => {
    function O(Y) {
      if (Y.origin !== location.origin) return;
      const le = Y.data;
      le && (le.type === "scry-theme" && (le.value === "light" || le.value === "dark") ? (document.documentElement.setAttribute("data-theme", le.value), p(h, le.value, true)) : le.type === "scry-load-demo" && K());
    }
    return window.addEventListener("message", O), () => window.removeEventListener("message", O);
  });
  function z(O) {
    if (!O || O.length === 0) return null;
    const Y = 256 * 1024, le = Math.max(1, Math.ceil(O.length / Y)), ke = new Uint32Array(256);
    let qe = 0;
    for (let Ie = 0; Ie < O.length; Ie += le) ke[O[Ie]]++, qe++;
    if (!qe) return null;
    let Je = 0;
    for (let Ie = 0; Ie < ke.length; Ie++) {
      const g = ke[Ie];
      if (!g) continue;
      const T = g / qe;
      Je -= T * Math.log2(T);
    }
    return Je;
  }
  let F = 0;
  async function A({ name: O, bytes: Y }) {
    const le = ++F;
    p(n, { name: O, bytes: Y }, true), p(u, ""), p(r, null), p(i, null), p(l, null), p(c, null), p(s, null), p(f, null), p(x, null), p(v, true);
    try {
      const ke = await Dn();
      if (le !== F) return;
      if (p(s, ke.detect_format(Y), true), a(s) === "elf") p(r, ke.parse_elf(Y), true), p(o, "inspect");
      else if (a(s) === "wav") {
        try {
          p(i, ke.decode_wav(Y), true);
        } catch {
        }
        p(o, "wave");
      } else if (a(s) === "gba") {
        try {
          p(l, ke.parse_gba(Y), true);
        } catch {
        }
        p(o, "game");
      } else p(o, "hex");
      if (le !== F) return;
      a(s) === "elf" && p(c, ke.extract_strings(Y, 4), true), a(s) !== "gba" && p(f, z(Y), true);
    } catch (ke) {
      le === F && p(u, String(ke), true);
    } finally {
      le === F && p(v, false);
    }
  }
  function M() {
    p(n, null), p(r, null), p(i, null), p(l, null), p(c, null), p(s, null), p(u, ""), p(f, null), p(x, null);
  }
  function X(O) {
    p(u, O, true);
  }
  function R() {
    p(h, zi(), true);
  }
  function K() {
    A({ name: qi, bytes: Ui() });
  }
  function Z(O) {
    p(o, "hex"), p(w, { o: O, t: performance.now() }, true);
  }
  function _e(O) {
    p(x, O, true);
  }
  let oe = Ht(() => {
    if (!a(n)) return null;
    if (a(r)) {
      const O = a(r).summary;
      return [a(s)?.toUpperCase(), O.machine, O.class, O.kind].filter(Boolean).join(" \xB7 ");
    }
    return (a(s) || "raw").toUpperCase();
  }), te = Ht(() => {
    if (!a(n)) return null;
    if (a(r)) {
      const O = a(r).summary, Y = [];
      return O.class && O.machine ? Y.push(`${O.class} ${O.machine}`) : O.machine && Y.push(O.machine), Y.push(`${a(r).sections.length} sections`), Y.push(`${a(r).symbols.length} symbols`), a(f) != null && Y.push(`avg entropy ${a(f).toFixed(1)} bits`), Y.join(" \xB7 ");
    }
    if (a(i)) {
      const O = a(i).fmt, Y = a(i).duration < 1 ? `${(a(i).duration * 1e3).toFixed(0)} ms` : `${a(i).duration.toFixed(2)} s`, le = [`${O.channels}ch ${O.sample_rate} Hz`, `${O.bits_per_sample}-bit`, Y];
      return a(f) != null && le.push(`avg entropy ${a(f).toFixed(1)} bits`), le.join(" \xB7 ");
    }
    if (a(l)) {
      const O = ["GBA cart", `"${a(l).title || "(blank)"}"`, `code ${a(l).game_code}`];
      return a(f) != null && O.push(`avg entropy ${a(f).toFixed(1)} bits`), O.join(" \xB7 ");
    }
    return a(f) != null ? `bytes only \xB7 entropy ${a(f).toFixed(1)} bits` : null;
  });
  Ye(() => {
    if (sessionStorage.getItem(U)) {
      p(L, H), p(k, true);
      return;
    }
    let O = 0;
    const Y = setInterval(() => {
      if (O++, p(L, H.slice(0, O), true), O >= H.length) {
        clearInterval(Y), p(k, true);
        try {
          sessionStorage.setItem(U, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(Y);
  });
  var S = Oo(), j = ut(S);
  go(j, { onfile: A, onerror: X });
  var G = _(j, 2);
  let ce;
  var ue = d(G), ye = d(ue);
  {
    var Se = (O) => {
      var Y = yo(), le = d(Y);
      let ke;
      ne(() => {
        tt(Y, "title", a(n) ? "Clear file \xB7 back to import" : ""), ke = et(le, 1, "s-brand svelte-1n46o8q", null, ke, { "s-brand-clickable": !!a(n) });
      }), ge("click", Y, M), D(O, Y);
    };
    ve(ye, (O) => {
      I || O(Se);
    });
  }
  var Pe = _(ye, 2);
  {
    var Ae = (O) => {
      var Y = So(), le = d(Y);
      {
        var ke = (g) => {
          var T = Eo(), J = d(T);
          ui(J, () => a(n).name, (N) => {
            var $ = wo(), fe = d($);
            ne(() => C(fe, `[ ${a(oe) ?? ""} ]`)), D(N, $);
          });
          var Q = _(J, 2);
          {
            var b = (N) => {
              var $ = xo(), fe = d($);
              ne(() => C(fe, a(te))), D(N, $);
            };
            ve(Q, (N) => {
              a(te) && N(b);
            });
          }
          D(g, T);
        };
        ve(le, (g) => {
          a(oe) && g(ke);
        });
      }
      var qe = _(le, 2);
      {
        var Je = (g) => {
          var T = Ao();
          D(g, T);
        };
        ve(qe, (g) => {
          a(v) && g(Je);
        });
      }
      var Ie = _(qe, 2);
      ge("click", Ie, M), D(O, Y);
    }, Re = (O) => {
      var Y = ko();
      D(O, Y);
    };
    ve(Pe, (O) => {
      a(n) ? O(Ae) : O(Re, -1);
    });
  }
  var je = _(Pe, 2);
  {
    var de = (O) => {
      var Y = Mo(), le = d(Y), ke = d(le);
      ne(() => C(ke, a(h) === "dark" ? "\u263C" : "\u263E")), ge("click", le, R), D(O, Y);
    };
    ve(je, (O) => {
      I || O(de);
    });
  }
  var Ce = _(ue, 2), Te = d(Ce);
  mo(Te, { get file() {
    return a(n);
  }, get format() {
    return a(s);
  }, get parsing() {
    return a(v);
  } });
  var Oe = _(Te, 2), Fe = d(Oe);
  {
    var Me = (O) => {
      var Y = Co(), le = d(Y);
      let ke;
      var qe = _(le, 2);
      let Je;
      var Ie = _(qe, 2);
      let g;
      var T = _(Ie, 2);
      let J;
      var Q = _(T, 2);
      let b;
      var N = _(Q, 2);
      let $;
      ne(() => {
        le.disabled = a(s) !== "elf", tt(le, "title", a(s) === "elf" ? "" : "INSPECT is ELF-only"), ke = et(le, 1, "svelte-1n46o8q", null, ke, { on: a(o) === "inspect" }), Je = et(qe, 1, "svelte-1n46o8q", null, Je, { on: a(o) === "hex" }), Ie.disabled = a(s) !== "wav", tt(Ie, "title", a(s) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), g = et(Ie, 1, "svelte-1n46o8q", null, g, { on: a(o) === "wave" }), T.disabled = a(s) !== "gba", tt(T, "title", a(s) === "gba" ? "" : "CART is GBA-only"), J = et(T, 1, "svelte-1n46o8q", null, J, { on: a(o) === "cart" }), Q.disabled = a(s) !== "gba", tt(Q, "title", a(s) === "gba" ? "" : "GAME is GBA-only"), b = et(Q, 1, "svelte-1n46o8q", null, b, { on: a(o) === "game" }), N.disabled = a(s) !== "elf", tt(N, "title", a(s) === "elf" ? "" : "DISASM is ELF-only (RV32)"), $ = et(N, 1, "svelte-1n46o8q", null, $, { on: a(o) === "disasm" });
      }), ge("click", le, () => p(o, "inspect")), ge("click", qe, () => p(o, "hex")), ge("click", Ie, () => p(o, "wave")), ge("click", T, () => p(o, "cart")), ge("click", Q, () => p(o, "game")), ge("click", N, () => p(o, "disasm")), D(O, Y);
    };
    ve(Fe, (O) => {
      a(n) && O(Me);
    });
  }
  var Ne = _(Fe, 2), P = d(Ne);
  {
    var m = (O) => {
      Ji(O, { onfile: A });
    }, y = (O) => {
      var Y = Lo(), le = ut(Y);
      {
        var ke = (b) => {
          var N = To(), $ = d(N);
          ne(() => C($, `parse failed: ${a(u) ?? ""}`)), D(b, N);
        };
        ve(le, (b) => {
          a(u) && b(ke);
        });
      }
      var qe = _(le, 2);
      {
        var Je = (b) => {
          var N = Kn(), $ = ut(N);
          {
            var fe = (he) => {
              dl(he, { get report() {
                return a(r);
              }, get strings() {
                return a(c);
              }, onJumpToOffset: Z });
            }, me = (he) => {
              var ie = Fo(), Le = _(d(ie)), We = d(Le);
              ne(() => C(We, a(s))), D(he, ie);
            };
            ve($, (he) => {
              a(r) ? he(fe) : a(s) && a(s) !== "elf" && he(me, 1);
            });
          }
          D(b, N);
        }, Ie = (b) => {
          {
            let N = Ht(() => a(x)?.follow && a(x)?.inCart ? a(x) : null);
            bl(b, { get bytes() {
              return a(n).bytes;
            }, get format() {
              return a(s);
            }, get jumpTo() {
              return a(w);
            }, get followTarget() {
              return a(N);
            } });
          }
        }, g = (b) => {
          uo(b, { get bytes() {
            return a(n).bytes;
          }, get format() {
            return a(s);
          } });
        }, T = (b) => {
          Sl(b, { get bytes() {
            return a(n).bytes;
          } });
        }, J = (b) => {
          Rl(b, { get bytes() {
            return a(n).bytes;
          } });
        }, Q = (b) => {
          Jl(b, { get bytes() {
            return a(n).bytes;
          }, get header() {
            return a(l);
          }, onPcUpdate: _e });
        };
        ve(qe, (b) => {
          a(o) === "inspect" ? b(Je) : a(o) === "hex" ? b(Ie, 1) : a(o) === "disasm" ? b(g, 2) : a(o) === "wave" ? b(T, 3) : a(o) === "cart" ? b(J, 4) : a(o) === "game" && b(Q, 5);
        });
      }
      D(O, Y);
    };
    ve(P, (O) => {
      a(n) ? O(y, -1) : O(m);
    });
  }
  var B = _(Ce, 2), ee = d(B), se = _(d(ee), 1, true), W = _(ee, 2);
  {
    var re = (O) => {
      var Y = Ro(), le = d(Y);
      ne(() => C(le, E[a(o)] ?? "")), D(O, Y);
    };
    ve(W, (O) => {
      a(n) && O(re);
    });
  }
  var Ee = _(W, 2), ze = d(Ee);
  ne((O) => {
    ce = et(G, 1, "app svelte-1n46o8q", null, ce, { embedded: I }), C(se, a(n) ? I ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : a(k) ? I ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${a(L)}\u2588`), C(ze, `MODULE \xB7 ${O ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => a(n) ? a(o).toUpperCase() : "EMPTY"]), D(e, S), _t();
}
Kt(["click"]);
li(No, { target: document.getElementById("app") });
