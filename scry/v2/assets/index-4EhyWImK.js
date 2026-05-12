(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const i of s) if (i.type === "childList") for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
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
const mr = false;
var On = Array.isArray, wr = Array.prototype.indexOf, tt = Array.prototype.includes, Ft = Array.from, Er = Object.defineProperty, _t = Object.getOwnPropertyDescriptor, xr = Object.getOwnPropertyDescriptors, Ar = Object.prototype, Sr = Array.prototype, In = Object.getPrototypeOf, pn = Object.isExtensible;
const kr = () => {
};
function Tr(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Nn() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function Mr(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const Q = 2, mt = 4, Ut = 8, Dn = 1 << 24, ye = 16, be = 32, Ce = 64, Kt = 128, ue = 512, K = 1024, Z = 2048, me = 4096, ee = 8192, ce = 16384, Xe = 32768, gn = 1 << 25, nt = 65536, Gt = 1 << 17, Or = 1 << 18, at = 1 << 19, Ir = 1 << 20, Se = 1 << 25, Ke = 65536, Nt = 1 << 21, wt = 1 << 22, Re = 1 << 23, jt = Symbol("$state"), xe = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Nr() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Dr(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Rr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Fr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ur() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Lr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function qr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Pr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function jr() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Br = 1, Wr = 2, zr = 16, Vr = 1, Yr = 2, G = Symbol(), Rn = "http://www.w3.org/1999/xhtml";
function Hr() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Kr() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Cn(e) {
  return e === this.v;
}
function Gr(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Fn(e) {
  return !Gr(e, this.v);
}
let Xr = false, ve = null;
function rt(e) {
  ve = e;
}
function xt(e, t = false, n) {
  ve = { p: ve, i: false, c: null, e: null, s: e, x: null, r: k, l: null };
}
function At(e) {
  var t = ve, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) $n(r);
  }
  return t.i = true, ve = t.p, {};
}
function Un() {
  return true;
}
let Je = [];
function Zr() {
  var e = Je;
  Je = [], Tr(e);
}
function ze(e) {
  if (Je.length === 0) {
    var t = Je;
    queueMicrotask(() => {
      t === Je && Zr();
    });
  }
  Je.push(e);
}
function Ln(e) {
  var t = k;
  if (t === null) return M.f |= Re, e;
  if (!(t.f & Xe) && !(t.f & mt)) throw e;
  Ne(e, t);
}
function Ne(e, t) {
  for (; t !== null; ) {
    if (t.f & Kt) {
      if (!(t.f & Xe)) throw e;
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
const Jr = -7169;
function H(e, t) {
  e.f = e.f & Jr | t;
}
function tn(e) {
  e.f & ue || e.deps === null ? H(e, K) : H(e, me);
}
function qn(e) {
  if (e !== null) for (const t of e) !(t.f & Q) || !(t.f & Ke) || (t.f ^= Ke, qn(t.deps));
}
function Pn(e, t, n) {
  e.f & Z ? t.add(e) : e.f & me && n.add(e), qn(e.deps), H(e, K);
}
const Pe = /* @__PURE__ */ new Set();
let N = null, pe = null, Xt = null, Bt = false, Qe = null, Mt = null;
var bn = 0;
let Qr = 1;
class Fe {
  id = Qr++;
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
      for (var s of r.d) H(s, Z), n(s);
      for (s of r.m) H(s, me), n(s);
    }
    this.#d.add(t);
  }
  #h() {
    if (bn++ > 1e3 && (Pe.delete(this), $r()), !this.#c()) {
      for (const a of this.#f) this.#u.delete(a), H(a, Z), this.schedule(a);
      for (const a of this.#u) H(a, me), this.schedule(a);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = Qe = [], r = [], s = Mt = [];
    for (const a of t) try {
      this.#b(a, n, r);
    } catch (o) {
      throw Wn(a), o;
    }
    if (N = null, s.length > 0) {
      var i = Fe.ensure();
      for (const a of s) i.schedule(a);
    }
    if (Qe = null, Mt = null, this.#c() || this.#g()) {
      this.#p(r), this.#p(n);
      for (const [a, o] of this.#l) Bn(a, o);
    } else {
      this.#s.size === 0 && Pe.delete(this), this.#f.clear(), this.#u.clear();
      for (const a of this.#n) a(this);
      this.#n.clear(), yn(r), yn(n), this.#i?.resolve();
    }
    var l = N;
    if (this.#t.length > 0) {
      const a = l ??= this;
      a.#t.push(...this.#t.filter((o) => !a.#t.includes(o)));
    }
    l !== null && (Pe.add(l), l.#h());
  }
  #b(t, n, r) {
    t.f ^= K;
    for (var s = t.first; s !== null; ) {
      var i = s.f, l = (i & (be | Ce)) !== 0, a = l && (i & K) !== 0, o = a || (i & ee) !== 0 || this.#l.has(s);
      if (!o && s.fn !== null) {
        l ? s.f ^= K : i & mt ? n.push(s) : kt(s) && (i & ye && this.#u.add(s), it(s));
        var f = s.first;
        if (f !== null) {
          s = f;
          continue;
        }
      }
      for (; s !== null; ) {
        var u = s.next;
        if (u !== null) {
          s = u;
          break;
        }
        s = s.parent;
      }
    }
  }
  #p(t) {
    for (var n = 0; n < t.length; n += 1) Pn(t[n], this.#f, this.#u);
  }
  capture(t, n, r = false) {
    t.v !== G && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Re || (this.current.set(t, [n, r]), pe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    N = this;
  }
  deactivate() {
    N = null, pe = null;
  }
  flush() {
    try {
      Bt = true, N = this, this.#h();
    } finally {
      bn = 0, Xt = null, Qe = null, Mt = null, Bt = false, N = null, pe = null, Ve.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Pe.delete(this);
  }
  register_created_effect(t) {
    this.#a.push(t);
  }
  #y() {
    for (const u of Pe) {
      var t = u.id < this.id, n = [];
      for (const [v, [d, h]] of this.current) {
        if (u.current.has(v)) {
          var r = u.current.get(v)[0];
          if (t && d !== r) u.current.set(v, [d, h]);
          else continue;
        }
        n.push(v);
      }
      var s = [...u.current.keys()].filter((v) => !this.current.has(v));
      if (s.length === 0) t && u.discard();
      else if (n.length > 0) {
        if (t) for (const v of this.#d) u.unskip_effect(v, (d) => {
          d.f & (ye | wt) ? u.schedule(d) : u.#p([d]);
        });
        u.activate();
        var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var a of n) jn(a, s, i, l);
        l = /* @__PURE__ */ new Map();
        var o = [...u.current.keys()].filter((v) => this.current.has(v) ? this.current.get(v)[0] !== v : true);
        for (const v of this.#a) !(v.f & (ce | ee | Gt)) && nn(v, o, l) && (v.f & (wt | ye) ? (H(v, Z), u.schedule(v)) : u.#f.add(v));
        if (u.#t.length > 0) {
          u.apply();
          for (var f of u.#t) u.#b(f, [], []);
          u.#t = [];
        }
        u.deactivate();
      }
    }
    for (const u of Pe) u.#v.has(this) && (u.#v.delete(this), u.#v.size === 0 && !u.#c() && (u.activate(), u.#h()));
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
    this.#_ || r || (this.#_ = true, ze(() => {
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
    return (this.#i ??= Nn()).promise;
  }
  static ensure() {
    if (N === null) {
      const t = N = new Fe();
      Bt || (Pe.add(N), ze(() => {
        N === t && t.flush();
      }));
    }
    return N;
  }
  apply() {
    {
      pe = null;
      return;
    }
  }
  schedule(t) {
    if (Xt = t, t.b?.is_pending && t.f & (mt | Ut | Dn) && !(t.f & Xe)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var r = n.f;
      if (Qe !== null && n === k && (M === null || !(M.f & Q))) return;
      if (r & (Ce | be)) {
        if (!(r & K)) return;
        n.f ^= K;
      }
    }
    this.#t.push(n);
  }
}
function $r() {
  try {
    Ur();
  } catch (e) {
    Ne(e, Xt);
  }
}
let Ee = null;
function yn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (ce | ee)) && kt(r) && (Ee = /* @__PURE__ */ new Set(), it(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && tr(r), Ee?.size > 0)) {
        Ve.clear();
        for (const s of Ee) {
          if (s.f & (ce | ee)) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; ) Ee.has(l) && (Ee.delete(l), i.push(l)), l = l.parent;
          for (let a = i.length - 1; a >= 0; a--) {
            const o = i[a];
            o.f & (ce | ee) || it(o);
          }
        }
        Ee.clear();
      }
    }
    Ee = null;
  }
}
function jn(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const i = s.f;
    i & Q ? jn(s, t, n, r) : i & (wt | ye) && !(i & Z) && nn(s, t, r) && (H(s, Z), rn(s));
  }
}
function nn(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (tt.call(t, s)) return true;
    if (s.f & Q && nn(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function rn(e) {
  N.schedule(e);
}
function Bn(e, t) {
  if (!(e.f & be && e.f & K)) {
    e.f & Z ? t.d.push(e) : e.f & me && t.m.push(e), H(e, K);
    for (var n = e.first; n !== null; ) Bn(n, t), n = n.next;
  }
}
function Wn(e) {
  H(e, K);
  for (var t = e.first; t !== null; ) Wn(t), t = t.next;
}
function es(e) {
  let t = 0, n = Ge(0), r;
  return () => {
    on() && (_(n), ms(() => (t === 0 && (r = Ss(() => e(() => ht(n)))), t += 1, () => {
      ze(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, ht(n));
      });
    })));
  };
}
var ts = nt | at;
function ns(e, t, n, r) {
  new rs(e, t, n, r);
}
class rs {
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
  #g = es(() => (this.#c = Ge(this.#u), () => {
    this.#c = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var l = k;
      l.b = this, l.f |= Kt, r(i);
    }, this.parent = k.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#r = un(() => {
      this.#y();
    }, ts);
  }
  #h() {
    try {
      this.#i = le(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #b(t) {
    const n = this.#e.failed;
    n && (this.#a = le(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #p() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = le(() => t(this.#n)), ze(() => {
      var n = this.#f = document.createDocumentFragment(), r = ke();
      n.append(r), this.#i = this.#w(() => le(() => this.#s(r))), this.#l === 0 && (this.#n.before(n), this.#f = null, Ye(this.#t, () => {
        this.#t = null;
      }), this.#m(N));
    }));
  }
  #y() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#u = 0, this.#i = le(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#f = document.createDocumentFragment();
        vn(this.#i, t);
        const n = this.#e.pending;
        this.#t = le(() => n(this.#n));
      } else this.#m(N);
    } catch (n) {
      this.error(n);
    }
  }
  #m(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#v);
  }
  defer_effect(t) {
    Pn(t, this.#_, this.#v);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #w(t) {
    var n = k, r = M, s = ve;
    we(this.#r), _e(this.#r), rt(this.#r.ctx);
    try {
      return Fe.ensure(), t();
    } catch (i) {
      return Ln(i), null;
    } finally {
      we(n), _e(r), rt(s);
    }
  }
  #E(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#E(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#m(n), this.#t && Ye(this.#t, () => {
      this.#t = null;
    }), this.#f && (this.#n.before(this.#f), this.#f = null));
  }
  update_pending_count(t, n) {
    this.#E(t, n), this.#u += t, !(!this.#c || this.#d) && (this.#d = true, ze(() => {
      this.#d = false, this.#c && st(this.#c, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#g(), _(this.#c);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    N?.is_fork ? (this.#i && N.skip_effect(this.#i), this.#t && N.skip_effect(this.#t), this.#a && N.skip_effect(this.#a), N.on_fork_commit(() => {
      this.#x(t);
    })) : this.#x(t);
  }
  #x(t) {
    this.#i && (ne(this.#i), this.#i = null), this.#t && (ne(this.#t), this.#t = null), this.#a && (ne(this.#a), this.#a = null);
    var n = this.#e.onerror;
    let r = this.#e.failed;
    var s = false, i = false;
    const l = () => {
      if (s) {
        Kr();
        return;
      }
      s = true, i && jr(), this.#a !== null && Ye(this.#a, () => {
        this.#a = null;
      }), this.#w(() => {
        this.#y();
      });
    }, a = (o) => {
      try {
        i = true, n?.(o, l), i = false;
      } catch (f) {
        Ne(f, this.#r && this.#r.parent);
      }
      r && (this.#a = this.#w(() => {
        try {
          return le(() => {
            var f = k;
            f.b = this, f.f |= Kt, r(this.#n, () => o, () => l);
          });
        } catch (f) {
          return Ne(f, this.#r.parent), null;
        }
      }));
    };
    ze(() => {
      var o;
      try {
        o = this.transform_error(t);
      } catch (f) {
        Ne(f, this.#r && this.#r.parent);
        return;
      }
      o !== null && typeof o == "object" && typeof o.then == "function" ? o.then(a, (f) => Ne(f, this.#r && this.#r.parent)) : a(o);
    });
  }
}
function ss(e, t, n, r) {
  const s = sn;
  var i = e.filter((d) => !d.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var l = k, a = is(), o = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((d) => d.promise)) : null;
  function f(d) {
    a();
    try {
      r(d);
    } catch (h) {
      l.f & ce || Ne(h, l);
    }
    Dt();
  }
  if (n.length === 0) {
    o.then(() => f(t.map(s)));
    return;
  }
  var u = zn();
  function v() {
    Promise.all(n.map((d) => as(d))).then((d) => f([...t.map(s), ...d])).catch((d) => Ne(d, l)).finally(() => u());
  }
  o ? o.then(() => {
    a(), v(), Dt();
  }) : v();
}
function is() {
  var e = k, t = M, n = ve, r = N;
  return function(i = true) {
    we(e), _e(t), rt(n), i && !(e.f & ce) && (r?.activate(), r?.apply());
  };
}
function Dt(e = true) {
  we(null), _e(null), rt(null), e && N?.deactivate();
}
function zn() {
  var e = k, t = e.b, n = N, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function sn(e) {
  var t = Q | Z;
  return k !== null && (k.f |= at), { ctx: ve, deps: null, effects: null, equals: Cn, f: t, fn: e, reactions: null, rv: 0, v: G, wv: 0, parent: k, ac: null };
}
function as(e, t, n) {
  let r = k;
  r === null && Nr();
  var s = void 0, i = Ge(G), l = !M, a = /* @__PURE__ */ new Map();
  return ys(() => {
    var o = k, f = Nn();
    s = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(Dt);
    } catch (h) {
      f.reject(h), Dt();
    }
    var u = N;
    if (l) {
      if (o.f & Xe) var v = zn();
      if (r.b.is_rendered()) a.get(u)?.reject(xe), a.delete(u);
      else {
        for (const h of a.values()) h.reject(xe);
        a.clear();
      }
      a.set(u, f);
    }
    const d = (h, c = void 0) => {
      if (v) {
        var y = c === xe;
        v(y);
      }
      if (!(c === xe || o.f & ce)) {
        if (u.activate(), c) i.f |= Re, st(i, c);
        else {
          i.f & Re && (i.f ^= Re), st(i, h);
          for (const [m, E] of a) {
            if (a.delete(m), m === u) break;
            E.reject(xe);
          }
        }
        u.deactivate();
      }
    };
    f.promise.then(d, (h) => d(null, h || "unknown"));
  }), Qn(() => {
    for (const o of a.values()) o.reject(xe);
  }), new Promise((o) => {
    function f(u) {
      function v() {
        u === s ? o(i) : f(s);
      }
      u.then(v, v);
    }
    f(s);
  });
}
function ls(e) {
  const t = sn(e);
  return sr(t), t;
}
function os(e) {
  const t = sn(e);
  return t.equals = Fn, t;
}
function fs(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) ne(t[n]);
  }
}
function an(e) {
  var t, n = k, r = e.parent;
  if (!Ue && r !== null && r.f & (ce | ee)) return Hr(), e.v;
  we(r);
  try {
    e.f &= ~Ke, fs(e), t = or(e);
  } finally {
    we(n);
  }
  return t;
}
function Vn(e) {
  var t = an(e);
  if (!e.equals(t) && (e.wv = ar(), (!N?.is_fork || e.deps === null) && (N !== null ? N.capture(e, t, true) : e.v = t, e.deps === null))) {
    H(e, K);
    return;
  }
  Ue || (pe !== null ? (on() || N?.is_fork) && pe.set(e, t) : tn(e));
}
function us(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(xe), t.teardown = kr, t.ac = null, Et(t, 0), cn(t));
}
function Yn(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && it(t);
}
let Zt = /* @__PURE__ */ new Set();
const Ve = /* @__PURE__ */ new Map();
let Hn = false;
function Ge(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Cn, rv: 0, wv: 0 };
  return n;
}
function W(e, t) {
  const n = Ge(e);
  return sr(n), n;
}
function cs(e, t = false, n = true) {
  const r = Ge(e);
  return t || (r.equals = Fn), r;
}
function S(e, t, n = false) {
  M !== null && (!ge || M.f & Gt) && Un() && M.f & (Q | ye | wt | Gt) && (de === null || !tt.call(de, e)) && Pr();
  let r = n ? De(t) : t;
  return st(e, r, Mt);
}
function st(e, t, n = null) {
  if (!e.equals(t)) {
    Ve.set(e, Ue ? t : e.v);
    var r = Fe.ensure();
    if (r.capture(e, t), e.f & Q) {
      const s = e;
      e.f & Z && an(s), pe === null && tn(s);
    }
    e.wv = ar(), Kn(e, Z, n), k !== null && k.f & K && !(k.f & (be | Ce)) && (ae === null ? xs([e]) : ae.push(e)), !r.is_fork && Zt.size > 0 && !Hn && ds();
  }
  return t;
}
function ds() {
  Hn = false;
  for (const e of Zt) e.f & K && H(e, me), kt(e) && it(e);
  Zt.clear();
}
function ht(e) {
  S(e, e.v + 1);
}
function Kn(e, t, n) {
  var r = e.reactions;
  if (r !== null) for (var s = r.length, i = 0; i < s; i++) {
    var l = r[i], a = l.f, o = (a & Z) === 0;
    if (o && H(l, t), a & Q) {
      var f = l;
      pe?.delete(f), a & Ke || (a & ue && (k === null || !(k.f & Nt)) && (l.f |= Ke), Kn(f, me, n));
    } else if (o) {
      var u = l;
      a & ye && Ee !== null && Ee.add(u), n !== null ? n.push(u) : rn(u);
    }
  }
}
function De(e) {
  if (typeof e != "object" || e === null || jt in e) return e;
  const t = In(e);
  if (t !== Ar && t !== Sr) return e;
  var n = /* @__PURE__ */ new Map(), r = On(e), s = W(0), i = He, l = (a) => {
    if (He === i) return a();
    var o = M, f = He;
    _e(null), xn(i);
    var u = a();
    return _e(o), xn(f), u;
  };
  return r && n.set("length", W(e.length)), new Proxy(e, { defineProperty(a, o, f) {
    (!("value" in f) || f.configurable === false || f.enumerable === false || f.writable === false) && Lr();
    var u = n.get(o);
    return u === void 0 ? l(() => {
      var v = W(f.value);
      return n.set(o, v), v;
    }) : S(u, f.value, true), true;
  }, deleteProperty(a, o) {
    var f = n.get(o);
    if (f === void 0) {
      if (o in a) {
        const u = l(() => W(G));
        n.set(o, u), ht(s);
      }
    } else S(f, G), ht(s);
    return true;
  }, get(a, o, f) {
    if (o === jt) return e;
    var u = n.get(o), v = o in a;
    if (u === void 0 && (!v || _t(a, o)?.writable) && (u = l(() => {
      var h = De(v ? a[o] : G), c = W(h);
      return c;
    }), n.set(o, u)), u !== void 0) {
      var d = _(u);
      return d === G ? void 0 : d;
    }
    return Reflect.get(a, o, f);
  }, getOwnPropertyDescriptor(a, o) {
    var f = Reflect.getOwnPropertyDescriptor(a, o);
    if (f && "value" in f) {
      var u = n.get(o);
      u && (f.value = _(u));
    } else if (f === void 0) {
      var v = n.get(o), d = v?.v;
      if (v !== void 0 && d !== G) return { enumerable: true, configurable: true, value: d, writable: true };
    }
    return f;
  }, has(a, o) {
    if (o === jt) return true;
    var f = n.get(o), u = f !== void 0 && f.v !== G || Reflect.has(a, o);
    if (f !== void 0 || k !== null && (!u || _t(a, o)?.writable)) {
      f === void 0 && (f = l(() => {
        var d = u ? De(a[o]) : G, h = W(d);
        return h;
      }), n.set(o, f));
      var v = _(f);
      if (v === G) return false;
    }
    return u;
  }, set(a, o, f, u) {
    var v = n.get(o), d = o in a;
    if (r && o === "length") for (var h = f; h < v.v; h += 1) {
      var c = n.get(h + "");
      c !== void 0 ? S(c, G) : h in a && (c = l(() => W(G)), n.set(h + "", c));
    }
    if (v === void 0) (!d || _t(a, o)?.writable) && (v = l(() => W(void 0)), S(v, De(f)), n.set(o, v));
    else {
      d = v.v !== G;
      var y = l(() => De(f));
      S(v, y);
    }
    var m = Reflect.getOwnPropertyDescriptor(a, o);
    if (m?.set && m.set.call(u, f), !d) {
      if (r && typeof o == "string") {
        var E = n.get("length"), g = Number(o);
        Number.isInteger(g) && g >= E.v && S(E, g + 1);
      }
      ht(s);
    }
    return true;
  }, ownKeys(a) {
    _(s);
    var o = Reflect.ownKeys(a).filter((v) => {
      var d = n.get(v);
      return d === void 0 || d.v !== G;
    });
    for (var [f, u] of n) u.v !== G && !(f in a) && o.push(f);
    return o;
  }, setPrototypeOf() {
    qr();
  } });
}
var mn, Gn, Xn, Zn;
function vs() {
  if (mn === void 0) {
    mn = window, Gn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Xn = _t(t, "firstChild").get, Zn = _t(t, "nextSibling").get, pn(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), pn(n) && (n.__t = void 0);
  }
}
function ke(e = "") {
  return document.createTextNode(e);
}
function Rt(e) {
  return Xn.call(e);
}
function St(e) {
  return Zn.call(e);
}
function p(e, t) {
  return Rt(e);
}
function wn(e, t = false) {
  {
    var n = Rt(e);
    return n instanceof Comment && n.data === "" ? St(n) : n;
  }
}
function b(e, t = 1, n = false) {
  let r = e;
  for (; t--; ) r = St(r);
  return r;
}
function _s(e) {
  e.textContent = "";
}
function Jn() {
  return false;
}
function hs(e, t, n) {
  return document.createElementNS(Rn, e, void 0);
}
function ln(e) {
  var t = M, n = k;
  _e(null), we(null);
  try {
    return e();
  } finally {
    _e(t), we(n);
  }
}
function ps(e) {
  k === null && (M === null && Fr(), Cr()), Ue && Rr();
}
function gs(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function qe(e, t) {
  var n = k;
  n !== null && n.f & ee && (e |= ee);
  var r = { ctx: ve, deps: null, nodes: null, f: e | Z | ue, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  N?.register_created_effect(r);
  var s = r;
  if (e & mt) Qe !== null ? Qe.push(r) : Fe.ensure().schedule(r);
  else if (t !== null) {
    try {
      it(r);
    } catch (l) {
      throw ne(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & at) && (s = s.first, e & ye && e & nt && s !== null && (s.f |= nt));
  }
  if (s !== null && (s.parent = n, n !== null && gs(s, n), M !== null && M.f & Q && !(e & Ce))) {
    var i = M;
    (i.effects ??= []).push(s);
  }
  return r;
}
function on() {
  return M !== null && !ge;
}
function Qn(e) {
  const t = qe(Ut, null);
  return H(t, K), t.teardown = e, t;
}
function fn(e) {
  ps();
  var t = k.f, n = !M && (t & be) !== 0 && (t & Xe) === 0;
  if (n) {
    var r = ve;
    (r.e ??= []).push(e);
  } else return $n(e);
}
function $n(e) {
  return qe(mt | Ir, e);
}
function bs(e) {
  Fe.ensure();
  const t = qe(Ce | at, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ye(t, () => {
      ne(t), r(void 0);
    }) : (ne(t), r(void 0));
  });
}
function ys(e) {
  return qe(wt | at, e);
}
function ms(e, t = 0) {
  return qe(Ut | t, e);
}
function Y(e, t = [], n = [], r = []) {
  ss(r, t, n, (s) => {
    qe(Ut, () => e(...s.map(_)));
  });
}
function un(e, t = 0) {
  var n = qe(ye | t, e);
  return n;
}
function le(e) {
  return qe(be | at, e);
}
function er(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Ue, r = M;
    En(true), _e(null);
    try {
      t.call(null);
    } finally {
      En(n), _e(r);
    }
  }
}
function cn(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && ln(() => {
      s.abort(xe);
    });
    var r = n.next;
    n.f & Ce ? n.parent = null : ne(n, t), n = r;
  }
}
function ws(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & be || ne(t), t = n;
  }
}
function ne(e, t = true) {
  var n = false;
  (t || e.f & Or) && e.nodes !== null && e.nodes.end !== null && (Es(e.nodes.start, e.nodes.end), n = true), H(e, gn), cn(e, t && !n), Et(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const i of r) i.stop();
  er(e), e.f ^= gn, e.f |= ce;
  var s = e.parent;
  s !== null && s.first !== null && tr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Es(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : St(e);
    e.remove(), e = n;
  }
}
function tr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Ye(e, t, n = true) {
  var r = [];
  nr(e, r, true);
  var s = () => {
    n && ne(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var a of r) a.out(l);
  } else s();
}
function nr(e, t, n) {
  if (!(e.f & ee)) {
    e.f ^= ee;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const a of r) (a.is_global || n) && t.push(a);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if (!(s.f & Ce)) {
        var l = (s.f & nt) !== 0 || (s.f & be) !== 0 && (e.f & ye) !== 0;
        nr(s, t, l ? n : false);
      }
      s = i;
    }
  }
}
function dn(e) {
  rr(e, true);
}
function rr(e, t) {
  if (e.f & ee) {
    e.f ^= ee, e.f & K || (H(e, Z), Fe.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & nt) !== 0 || (n.f & be) !== 0;
      rr(n, s ? t : false), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const l of i) (l.is_global || t) && l.in();
  }
}
function vn(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : St(n);
    t.append(n), n = s;
  }
}
let Ot = false, Ue = false;
function En(e) {
  Ue = e;
}
let M = null, ge = false;
function _e(e) {
  M = e;
}
let k = null;
function we(e) {
  k = e;
}
let de = null;
function sr(e) {
  M !== null && (de === null ? de = [e] : de.push(e));
}
let te = null, re = 0, ae = null;
function xs(e) {
  ae = e;
}
let ir = 1, Be = 0, He = Be;
function xn(e) {
  He = e;
}
function ar() {
  return ++ir;
}
function kt(e) {
  var t = e.f;
  if (t & Z) return true;
  if (t & Q && (e.f &= ~Ke), t & me) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (kt(i) && Vn(i), i.wv > e.wv) return true;
    }
    t & ue && pe === null && H(e, K);
  }
  return false;
}
function lr(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(de !== null && tt.call(de, e))) for (var s = 0; s < r.length; s++) {
    var i = r[s];
    i.f & Q ? lr(i, t, false) : t === i && (n ? H(i, Z) : i.f & K && H(i, me), rn(i));
  }
}
function or(e) {
  var t = te, n = re, r = ae, s = M, i = de, l = ve, a = ge, o = He, f = e.f;
  te = null, re = 0, ae = null, M = f & (be | Ce) ? null : e, de = null, rt(e.ctx), ge = false, He = ++Be, e.ac !== null && (ln(() => {
    e.ac.abort(xe);
  }), e.ac = null);
  try {
    e.f |= Nt;
    var u = e.fn, v = u();
    e.f |= Xe;
    var d = e.deps, h = N?.is_fork;
    if (te !== null) {
      var c;
      if (h || Et(e, re), d !== null && re > 0) for (d.length = re + te.length, c = 0; c < te.length; c++) d[re + c] = te[c];
      else e.deps = d = te;
      if (on() && e.f & ue) for (c = re; c < d.length; c++) (d[c].reactions ??= []).push(e);
    } else !h && d !== null && re < d.length && (Et(e, re), d.length = re);
    if (Un() && ae !== null && !ge && d !== null && !(e.f & (Q | me | Z))) for (c = 0; c < ae.length; c++) lr(ae[c], e);
    if (s !== null && s !== e) {
      if (Be++, s.deps !== null) for (let y = 0; y < n; y += 1) s.deps[y].rv = Be;
      if (t !== null) for (const y of t) y.rv = Be;
      ae !== null && (r === null ? r = ae : r.push(...ae));
    }
    return e.f & Re && (e.f ^= Re), v;
  } catch (y) {
    return Ln(y);
  } finally {
    e.f ^= Nt, te = t, re = n, ae = r, M = s, de = i, rt(l), ge = a, He = o;
  }
}
function As(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = wr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & Q && (te === null || !tt.call(te, t))) {
    var i = t;
    i.f & ue && (i.f ^= ue, i.f &= ~Ke), i.v !== G && tn(i), us(i), Et(i, 0);
  }
}
function Et(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) As(e, n[r]);
}
function it(e) {
  var t = e.f;
  if (!(t & ce)) {
    H(e, K);
    var n = k, r = Ot;
    k = e, Ot = true;
    try {
      t & (ye | Dn) ? ws(e) : cn(e), er(e);
      var s = or(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = ir;
      var i;
      mr && Xr && e.f & Z && e.deps;
    } finally {
      Ot = r, k = n;
    }
  }
}
function _(e) {
  var t = e.f, n = (t & Q) !== 0;
  if (M !== null && !ge) {
    var r = k !== null && (k.f & ce) !== 0;
    if (!r && (de === null || !tt.call(de, e))) {
      var s = M.deps;
      if (M.f & Nt) e.rv < Be && (e.rv = Be, te === null && s !== null && s[re] === e ? re++ : te === null ? te = [e] : te.push(e));
      else {
        (M.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [M] : tt.call(i, M) || i.push(M);
      }
    }
  }
  if (Ue && Ve.has(e)) return Ve.get(e);
  if (n) {
    var l = e;
    if (Ue) {
      var a = l.v;
      return (!(l.f & K) && l.reactions !== null || ur(l)) && (a = an(l)), Ve.set(l, a), a;
    }
    var o = (l.f & ue) === 0 && !ge && M !== null && (Ot || (M.f & ue) !== 0), f = (l.f & Xe) === 0;
    kt(l) && (o && (l.f |= ue), Vn(l)), o && !f && (Yn(l), fr(l));
  }
  if (pe?.has(e)) return pe.get(e);
  if (e.f & Re) throw e.v;
  return e.v;
}
function fr(e) {
  if (e.f |= ue, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & Q && !(t.f & ue) && (Yn(t), fr(t));
}
function ur(e) {
  if (e.v === G) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (Ve.has(t) || t.f & Q && ur(t)) return true;
  return false;
}
function Ss(e) {
  var t = ge;
  try {
    return ge = true, e();
  } finally {
    ge = t;
  }
}
const ks = ["touchstart", "touchmove"];
function Ts(e) {
  return ks.includes(e);
}
const ut = Symbol("events"), cr = /* @__PURE__ */ new Set(), Jt = /* @__PURE__ */ new Set();
function Ms(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Qt.call(t, i), !i.cancelBubble) return ln(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ze(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Wt(e, t, n, r, s) {
  var i = { capture: r, passive: s }, l = Ms(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Qn(() => {
    t.removeEventListener(e, l, i);
  });
}
function oe(e, t, n) {
  (t[ut] ??= {})[e] = n;
}
function Lt(e) {
  for (var t = 0; t < e.length; t++) cr.add(e[t]);
  for (var n of Jt) n(e);
}
let An = null;
function Qt(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], i = s[0] || e.target;
  An = e;
  var l = 0, a = An === e && e[ut];
  if (a) {
    var o = s.indexOf(a);
    if (o !== -1 && (t === document || t === window)) {
      e[ut] = t;
      return;
    }
    var f = s.indexOf(t);
    if (f === -1) return;
    o <= f && (l = o);
  }
  if (i = s[l] || e.target, i !== t) {
    Er(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var u = M, v = k;
    _e(null), we(null);
    try {
      for (var d, h = []; i !== null; ) {
        var c = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var y = i[ut]?.[r];
          y != null && (!i.disabled || e.target === i) && y.call(i, e);
        } catch (m) {
          d ? h.push(m) : d = m;
        }
        if (e.cancelBubble || c === t || c === null) break;
        i = c;
      }
      if (d) {
        for (let m of h) queueMicrotask(() => {
          throw m;
        });
        throw d;
      }
    } finally {
      e[ut] = t, delete e.currentTarget, _e(u), we(v);
    }
  }
}
const Os = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Is(e) {
  return Os?.createHTML(e) ?? e;
}
function Ns(e) {
  var t = hs("template");
  return t.innerHTML = Is(e.replaceAll("<!>", "<!---->")), t.content;
}
function Ct(e, t) {
  var n = k;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function L(e, t) {
  var n = (t & Vr) !== 0, r = (t & Yr) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Ns(i ? e : "<!>" + e), n || (s = Rt(s)));
    var l = r || Gn ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var a = Rt(l), o = l.lastChild;
      Ct(a, o);
    } else Ct(l, l);
    return l;
  };
}
function Ds(e = "") {
  {
    var t = ke(e + "");
    return Ct(t, t), t;
  }
}
function Rs() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ke();
  return e.append(t, n), Ct(t, n), e;
}
function D(e, t) {
  e !== null && e.before(t);
}
function A(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Cs(e, t) {
  return Fs(e, t);
}
const Tt = /* @__PURE__ */ new Map();
function Fs(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: l = true, transformError: a }) {
  vs();
  var o = void 0, f = bs(() => {
    var u = n ?? t.appendChild(ke());
    ns(u, { pending: () => {
    } }, (h) => {
      xt({});
      var c = ve;
      i && (c.c = i), s && (r.$$events = s), o = e(h, r) || {}, At();
    }, a);
    var v = /* @__PURE__ */ new Set(), d = (h) => {
      for (var c = 0; c < h.length; c++) {
        var y = h[c];
        if (!v.has(y)) {
          v.add(y);
          var m = Ts(y);
          for (const O of [t, document]) {
            var E = Tt.get(O);
            E === void 0 && (E = /* @__PURE__ */ new Map(), Tt.set(O, E));
            var g = E.get(y);
            g === void 0 ? (O.addEventListener(y, Qt, { passive: m }), E.set(y, 1)) : E.set(y, g + 1);
          }
        }
      }
    };
    return d(Ft(cr)), Jt.add(d), () => {
      for (var h of v) for (const m of [t, document]) {
        var c = Tt.get(m), y = c.get(h);
        --y == 0 ? (m.removeEventListener(h, Qt), c.delete(h), c.size === 0 && Tt.delete(m)) : c.set(h, y);
      }
      Jt.delete(d), u !== n && u.parentNode?.removeChild(u);
    };
  });
  return Us.set(o, f), o;
}
let Us = /* @__PURE__ */ new WeakMap();
class Ls {
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
      if (r) dn(r), this.#s.delete(n);
      else {
        var s = this.#e.get(n);
        s && (this.#o.set(n, s.effect), this.#e.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [i, l] of this.#n) {
        if (this.#n.delete(i), i === t) break;
        const a = this.#e.get(l);
        a && (ne(a.effect), this.#e.delete(l));
      }
      for (const [i, l] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const a = () => {
          if (Array.from(this.#n.values()).includes(i)) {
            var f = document.createDocumentFragment();
            vn(l, f), f.append(ke()), this.#e.set(i, { effect: l, fragment: f });
          } else ne(l);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !r ? (this.#s.add(i), Ye(l, a, false)) : a();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (ne(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = N, s = Jn();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var i = document.createDocumentFragment(), l = ke();
      i.append(l), this.#e.set(t, { effect: le(() => n(l)), fragment: i });
    } else this.#o.set(t, le(() => n(this.anchor)));
    if (this.#n.set(r, t), s) {
      for (const [a, o] of this.#o) a === t ? r.unskip_effect(o) : r.skip_effect(o);
      for (const [a, o] of this.#e) a === t ? r.unskip_effect(o.effect) : r.skip_effect(o.effect);
      r.oncommit(this.#i), r.ondiscard(this.#t);
    } else this.#i(r);
  }
}
function J(e, t, n = false) {
  var r = new Ls(e), s = n ? nt : 0;
  function i(l, a) {
    r.ensure(l, a);
  }
  un(() => {
    var l = false;
    t((a, o = 0) => {
      l = true, i(o, a);
    }), l || i(-1, null);
  }, s);
}
function $e(e, t) {
  return t;
}
function qs(e, t, n) {
  for (var r = [], s = t.length, i, l = t.length, a = 0; a < s; a++) {
    let v = t[a];
    Ye(v, () => {
      if (i) {
        if (i.pending.delete(v), i.done.add(v), i.pending.size === 0) {
          var d = e.outrogroups;
          $t(e, Ft(i.done)), d.delete(i), d.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var o = r.length === 0 && n !== null;
    if (o) {
      var f = n, u = f.parentNode;
      _s(u), u.append(f), e.items.clear();
    }
    $t(e, t, !o);
  } else i = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function $t(e, t, n = true) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const a of l) r.add(e.items.get(a).e);
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (r?.has(i)) {
      i.f |= Se;
      const l = document.createDocumentFragment();
      vn(i, l);
    } else ne(t[s], n);
  }
}
var Sn;
function et(e, t, n, r, s, i = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  {
    var o = e;
    l = o.appendChild(ke());
  }
  var f = null, u = os(() => {
    var g = n();
    return On(g) ? g : g == null ? [] : Ft(g);
  }), v, d = /* @__PURE__ */ new Map(), h = true;
  function c(g) {
    E.effect.f & ce || (E.pending.delete(g), E.fallback = f, Ps(E, v, l, t, r), f !== null && (v.length === 0 ? f.f & Se ? (f.f ^= Se, ct(f, null, l)) : dn(f) : Ye(f, () => {
      f = null;
    })));
  }
  function y(g) {
    E.pending.delete(g);
  }
  var m = un(() => {
    v = _(u);
    for (var g = v.length, O = /* @__PURE__ */ new Set(), T = N, z = Jn(), q = 0; q < g; q += 1) {
      var V = v[q], C = r(V, q), j = h ? null : a.get(C);
      j ? (j.v && st(j.v, V), j.i && st(j.i, q), z && T.unskip_effect(j.e)) : (j = js(a, h ? l : Sn ??= ke(), V, C, q, s, t, n), h || (j.e.f |= Se), a.set(C, j)), O.add(C);
    }
    if (g === 0 && i && !f && (h ? f = le(() => i(l)) : (f = le(() => i(Sn ??= ke())), f.f |= Se)), g > O.size && Dr(), !h) if (d.set(T, O), z) {
      for (const [F, B] of a) O.has(F) || T.skip_effect(B.e);
      T.oncommit(c), T.ondiscard(y);
    } else c(T);
    _(u);
  }), E = { effect: m, items: a, pending: d, outrogroups: null, fallback: f };
  h = false;
}
function ft(e) {
  for (; e !== null && !(e.f & be); ) e = e.next;
  return e;
}
function Ps(e, t, n, r, s) {
  var i = t.length, l = e.items, a = ft(e.effect.first), o, f = null, u = [], v = [], d, h, c, y;
  for (y = 0; y < i; y += 1) {
    if (d = t[y], h = s(d, y), c = l.get(h).e, e.outrogroups !== null) for (const C of e.outrogroups) C.pending.delete(c), C.done.delete(c);
    if (c.f & ee && dn(c), c.f & Se) if (c.f ^= Se, c === a) ct(c, null, n);
    else {
      var m = f ? f.next : a;
      c === e.effect.last && (e.effect.last = c.prev), c.prev && (c.prev.next = c.next), c.next && (c.next.prev = c.prev), Oe(e, f, c), Oe(e, c, m), ct(c, m, n), f = c, u = [], v = [], a = ft(f.next);
      continue;
    }
    if (c !== a) {
      if (o !== void 0 && o.has(c)) {
        if (u.length < v.length) {
          var E = v[0], g;
          f = E.prev;
          var O = u[0], T = u[u.length - 1];
          for (g = 0; g < u.length; g += 1) ct(u[g], E, n);
          for (g = 0; g < v.length; g += 1) o.delete(v[g]);
          Oe(e, O.prev, T.next), Oe(e, f, O), Oe(e, T, E), a = E, f = T, y -= 1, u = [], v = [];
        } else o.delete(c), ct(c, a, n), Oe(e, c.prev, c.next), Oe(e, c, f === null ? e.effect.first : f.next), Oe(e, f, c), f = c;
        continue;
      }
      for (u = [], v = []; a !== null && a !== c; ) (o ??= /* @__PURE__ */ new Set()).add(a), v.push(a), a = ft(a.next);
      if (a === null) continue;
    }
    c.f & Se || u.push(c), f = c, a = ft(c.next);
  }
  if (e.outrogroups !== null) {
    for (const C of e.outrogroups) C.pending.size === 0 && ($t(e, Ft(C.done)), e.outrogroups?.delete(C));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || o !== void 0) {
    var z = [];
    if (o !== void 0) for (c of o) c.f & ee || z.push(c);
    for (; a !== null; ) !(a.f & ee) && a !== e.fallback && z.push(a), a = ft(a.next);
    var q = z.length;
    if (q > 0) {
      var V = i === 0 ? n : null;
      qs(e, z, V);
    }
  }
}
function js(e, t, n, r, s, i, l, a) {
  var o = l & Br ? l & zr ? Ge(n) : cs(n, false, false) : null, f = l & Wr ? Ge(s) : null;
  return { v: o, i: f, e: le(() => (i(t, o ?? n, f ?? s, a), () => {
    e.delete(r);
  })) };
}
function ct(e, t, n) {
  if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, i = t && !(t.f & Se) ? t.nodes.start : n; r !== null; ) {
    var l = St(r);
    if (i.before(r), r === s) return;
    r = l;
  }
}
function Oe(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const kn = [...` 	
\r\f\xA0\v\uFEFF`];
function Bs(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var s of Object.keys(n)) if (n[s]) r = r ? r + " " + s : s;
    else if (r.length) for (var i = s.length, l = 0; (l = r.indexOf(s, l)) >= 0; ) {
      var a = l + i;
      (l === 0 || kn.includes(r[l - 1])) && (a === r.length || kn.includes(r[a])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(a + 1) : l = a;
    }
  }
  return r === "" ? null : r;
}
function pt(e, t, n, r, s, i) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var a = Bs(n, r, i);
    a == null ? e.removeAttribute("class") : e.className = a, e.__className = n;
  } else if (i && s !== i) for (var o in i) {
    var f = !!i[o];
    (s == null || f !== !!s[o]) && e.classList.toggle(o, f);
  }
  return i;
}
const Ws = Symbol("is custom element"), zs = Symbol("is html");
function dr(e, t, n, r) {
  var s = Vs(e);
  s[t] !== (s[t] = n) && (n == null ? e.removeAttribute(t) : typeof n != "string" && Ys(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Vs(e) {
  return e.__attributes ??= { [Ws]: e.nodeName.includes("-"), [zs]: e.namespaceURI === Rn };
}
var Tn = /* @__PURE__ */ new Map();
function Ys(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Tn.get(t);
  if (n) return n;
  Tn.set(t, n = []);
  for (var r, s = e, i = Element.prototype; i !== s; ) {
    r = xr(s);
    for (var l in r) r[l].set && n.push(l);
    s = In(s);
  }
  return n;
}
const Hs = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Hs);
function Ks() {
  R._start();
}
function Gs(e) {
  let t, n;
  try {
    const i = R.__wbindgen_add_to_stack_pointer(-16), l = _n(e, R.__wbindgen_export), a = Le;
    R.detect_format(i, l, a);
    var r = fe().getInt32(i + 4 * 0, true), s = fe().getInt32(i + 4 * 1, true);
    return t = r, n = s, dt(r, s);
  } finally {
    R.__wbindgen_add_to_stack_pointer(16), R.__wbindgen_export3(t, n, 1);
  }
}
function Xs(e, t, n) {
  try {
    const l = R.__wbindgen_add_to_stack_pointer(-16), a = _n(e, R.__wbindgen_export), o = Le;
    R.hex_rows(l, a, o, t, n);
    var r = fe().getInt32(l + 4 * 0, true), s = fe().getInt32(l + 4 * 1, true), i = Qs(r, s).slice();
    return R.__wbindgen_export3(r, s * 4, 4), i;
  } finally {
    R.__wbindgen_add_to_stack_pointer(16);
  }
}
function Zs(e) {
  try {
    const s = R.__wbindgen_add_to_stack_pointer(-16), i = _n(e, R.__wbindgen_export), l = Le;
    R.parse_elf(s, i, l);
    var t = fe().getInt32(s + 4 * 0, true), n = fe().getInt32(s + 4 * 1, true), r = fe().getInt32(s + 4 * 2, true);
    if (r) throw We(n);
    return We(t);
  } finally {
    R.__wbindgen_add_to_stack_pointer(16);
  }
}
function vr() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(dt(t, n));
    return Ie(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(Ze(n)), s = Mn(r, R.__wbindgen_export, R.__wbindgen_export2), i = Le;
    fe().setInt32(t + 4, i, true), fe().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(dt(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let r, s;
    try {
      r = t, s = n, console.error(dt(t, n));
    } finally {
      R.__wbindgen_export3(r, s, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return Ie(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return Ie(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return Ie(t);
  }, __wbg_set_6be42768c690e380: function(t, n, r) {
    Ze(t)[We(n)] = We(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    Ze(t)[n >>> 0] = We(r);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const r = Ze(n).stack, s = Mn(r, R.__wbindgen_export, R.__wbindgen_export2), i = Le;
    fe().setInt32(t + 4, i, true), fe().setInt32(t + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return Ie(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = dt(t, n);
    return Ie(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return Ie(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = Ze(t);
    return Ie(n);
  }, __wbindgen_object_drop_ref: function(t) {
    We(t);
  } } };
}
function Ie(e) {
  bt === Ae.length && Ae.push(Ae.length + 1);
  const t = bt;
  return bt = Ae[t], Ae[t] = e, t;
}
function Js(e) {
  e < 1028 || (Ae[e] = bt, bt = e);
}
function Qs(e, t) {
  e = e >>> 0;
  const n = fe(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(We(n.getUint32(s, true)));
  return r;
}
let je = null;
function fe() {
  return (je === null || je.buffer.detached === true || je.buffer.detached === void 0 && je.buffer !== R.memory.buffer) && (je = new DataView(R.memory.buffer)), je;
}
function dt(e, t) {
  return ei(e >>> 0, t);
}
let vt = null;
function gt() {
  return (vt === null || vt.byteLength === 0) && (vt = new Uint8Array(R.memory.buffer)), vt;
}
function Ze(e) {
  return Ae[e];
}
let Ae = new Array(1024).fill(void 0);
Ae.push(void 0, null, true, false);
let bt = Ae.length;
function _n(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return gt().set(e, n / 1), Le = e.length, n;
}
function Mn(e, t, n) {
  if (n === void 0) {
    const a = yt.encode(e), o = t(a.length, 1) >>> 0;
    return gt().subarray(o, o + a.length).set(a), Le = a.length, o;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const i = gt();
  let l = 0;
  for (; l < r; l++) {
    const a = e.charCodeAt(l);
    if (a > 127) break;
    i[s + l] = a;
  }
  if (l !== r) {
    l !== 0 && (e = e.slice(l)), s = n(s, r, r = l + e.length * 3, 1) >>> 0;
    const a = gt().subarray(s + l, s + r), o = yt.encodeInto(e, a);
    l += o.written, s = n(s, r, l, 1) >>> 0;
  }
  return Le = l, s;
}
function We(e) {
  const t = Ze(e);
  return Js(e), t;
}
let It = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
It.decode();
const $s = 2146435072;
let zt = 0;
function ei(e, t) {
  return zt += t, zt >= $s && (It = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), It.decode(), zt = t), It.decode(gt().subarray(e, e + t));
}
const yt = new TextEncoder();
"encodeInto" in yt || (yt.encodeInto = function(e, t) {
  const n = yt.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let Le = 0, R;
function _r(e, t) {
  return R = e.exports, je = null, vt = null, R.__wbindgen_start(), R;
}
async function ti(e, t) {
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
function ni(e) {
  if (R !== void 0) return R;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = vr();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return _r(n);
}
async function hr(e) {
  if (R !== void 0) return R;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-DfU8yE49.wasm", import.meta.url).href, import.meta.url));
  const t = vr();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await ti(await e, t);
  return _r(n);
}
const ri = Object.freeze(Object.defineProperty({ __proto__: null, _start: Ks, default: hr, detect_format: Gs, hex_rows: Xs, initSync: ni, parse_elf: Zs }, Symbol.toStringTag, { value: "Module" }));
let Vt = null;
function pr() {
  return Vt || (Vt = hr()), Vt.then(() => ri);
}
const si = "scry-theme";
function gr() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ii() {
  const e = gr() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(si, e);
  } catch {
  }
  return e;
}
const en = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Yt = 65536, Ht = en.length * 4;
function ai() {
  const n = 84 + Ht, r = new ArrayBuffer(n), s = new DataView(r), i = new Uint8Array(r);
  i[0] = 127, i[1] = 69, i[2] = 76, i[3] = 70, i[4] = 1, i[5] = 1, i[6] = 1, s.setUint16(16, 2, true), s.setUint16(18, 243, true), s.setUint32(20, 1, true), s.setUint32(24, Yt, true), s.setUint32(28, 52, true), s.setUint32(32, 0, true), s.setUint32(36, 0, true), s.setUint16(40, 52, true), s.setUint16(42, 32, true), s.setUint16(44, 1, true), s.setUint16(46, 0, true), s.setUint16(48, 0, true), s.setUint16(50, 0, true), s.setUint32(52, 1, true), s.setUint32(56, 84, true), s.setUint32(60, Yt, true), s.setUint32(64, Yt, true), s.setUint32(68, Ht, true), s.setUint32(72, Ht, true), s.setUint32(76, 5, true), s.setUint32(80, 4096, true);
  for (let l = 0; l < en.length; l++) s.setUint32(84 + l * 4, en[l], true);
  return new Uint8Array(r);
}
const li = "demo-rv32-spi-i2c.elf";
var oi = L('<button type="button" class="sample svelte-1i6c60u"> </button>'), fi = L('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), ui = L('<p class="loading svelte-1i6c60u"> </p>'), ci = L('<p class="err svelte-1i6c60u"> </p>'), di = L('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden=""/> <span>Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function vi(e, t) {
  xt(t, true);
  const n = 64 * 1024 * 1024, r = /^[A-Za-z0-9._-]+\.elf$/;
  let s = W(false), i = W(""), l = W(De([])), a = W("");
  function o(x) {
    return x < 1024 ? x + " B" : x < 1024 * 1024 ? (x / 1024).toFixed(1) + " KiB" : (x / 1024 / 1024).toFixed(1) + " MiB";
  }
  async function f(x) {
    if (S(i, ""), x.size > n) {
      S(i, `file too large (${o(x.size)} > ${o(n)})`);
      return;
    }
    const I = await x.arrayBuffer();
    t.onfile?.({ name: x.name, bytes: new Uint8Array(I) });
  }
  function u(x) {
    x.preventDefault(), S(s, false);
    const I = x.dataTransfer?.files?.[0];
    I && f(I);
  }
  function v(x) {
    x.preventDefault(), S(s, true);
  }
  function d() {
    S(s, false);
  }
  function h(x) {
    const I = x.target.files?.[0];
    I && f(I);
  }
  async function c(x) {
    if (!r.test(x)) {
      S(i, `sample blocked: bad name "${x}"`);
      return;
    }
    S(i, ""), S(a, `fetching ${x}\u2026`);
    try {
      const I = await fetch(`../v1/samples/${encodeURIComponent(x)}`);
      if (!I.ok) {
        S(i, `fetch failed: ${I.status}`), S(a, "");
        return;
      }
      S(a, `reading ${x}\u2026`);
      const w = new Uint8Array(await I.arrayBuffer());
      S(a, ""), t.onfile?.({ name: x, bytes: w });
    } catch (I) {
      S(i, String(I), true), S(a, "");
    }
  }
  function y() {
    S(i, ""), t.onfile?.({ name: li, bytes: ai() });
  }
  fn(() => {
    let x = false;
    return (async () => {
      try {
        const I = await fetch("../v1/samples/manifest.json");
        if (!I.ok) return;
        const w = await I.json();
        !x && Array.isArray(w) && S(l, w, true);
      } catch {
      }
    })(), () => {
      x = true;
    };
  });
  var m = di(), E = p(m);
  let g;
  var O = b(p(E), 4), T = p(O), z = p(T), q = b(T, 2), V = b(O, 2);
  {
    var C = (x) => {
      var I = fi(), w = b(p(I), 2);
      et(w, 21, () => _(l), $e, ($, he) => {
        var se = oi(), lt = p(se);
        Y(() => {
          dr(se, "title", `${_(he).desc ?? ""} \u2014 ${_(he).insns ?? ""} instructions`), A(lt, _(he).file);
        }), oe("click", se, () => c(_(he).file)), D($, se);
      });
      var P = b(w, 2), U = p(P);
      Y(($) => A(U, $), [() => _(l).map(($) => `${$.file} \u2014 ${$.desc}`).join("  \xB7  ")]), D(x, I);
    };
    J(V, (x) => {
      _(l).length && x(C);
    });
  }
  var j = b(V, 2);
  {
    var F = (x) => {
      var I = ui(), w = p(I);
      Y(() => A(w, _(a))), D(x, I);
    };
    J(j, (x) => {
      _(a) && x(F);
    });
  }
  var B = b(j, 2);
  {
    var X = (x) => {
      var I = ci(), w = p(I);
      Y(() => A(w, _(i))), D(x, I);
    };
    J(B, (x) => {
      _(i) && x(X);
    });
  }
  Y(() => g = pt(E, 1, "zone svelte-1i6c60u", null, g, { over: _(s) })), Wt("drop", E, u), Wt("dragover", E, v), Wt("dragleave", E, d), oe("change", z, h), oe("click", q, y), D(e, m), At();
}
Lt(["change", "click"]);
var _i = L('<span class="ct svelte-etynpr"> </span>'), hi = L('<span class="ct svelte-etynpr"> </span>'), pi = L('<span class="ct svelte-etynpr"> </span>'), gi = L("<button> <!> <!> <!></button>"), bi = L('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), yi = L('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), mi = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), wi = L('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Ei = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), xi = L('<tr class="svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Ai = L('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Si = L('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function ki(e, t) {
  xt(t, true);
  let n = W("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"]];
  var s = Si(), i = p(s);
  et(i, 21, () => r, $e, (d, h) => {
    var c = ls(() => Mr(_(h), 2));
    let y = () => _(c)[0], m = () => _(c)[1];
    var E = gi();
    let g;
    var O = p(E), T = b(O);
    {
      var z = (F) => {
        var B = _i(), X = p(B);
        Y(() => A(X, t.report.sections.length)), D(F, B);
      };
      J(T, (F) => {
        y() === "sections" && F(z);
      });
    }
    var q = b(T, 2);
    {
      var V = (F) => {
        var B = hi(), X = p(B);
        Y(() => A(X, t.report.segments.length)), D(F, B);
      };
      J(q, (F) => {
        y() === "segments" && F(V);
      });
    }
    var C = b(q, 2);
    {
      var j = (F) => {
        var B = pi(), X = p(B);
        Y(() => A(X, t.report.symbols.length)), D(F, B);
      };
      J(C, (F) => {
        y() === "symbols" && F(j);
      });
    }
    Y(() => {
      g = pt(E, 1, "tab svelte-etynpr", null, g, { active: _(n) === y() }), A(O, `${m() ?? ""} `);
    }), oe("click", E, () => S(n, y(), true)), D(d, E);
  });
  var l = b(i, 2), a = p(l);
  {
    var o = (d) => {
      var h = bi(), c = b(p(h), 2), y = p(c), m = b(c, 4), E = p(m), g = b(m, 4), O = p(g), T = b(g, 4), z = p(T), q = b(T, 4), V = p(q), C = b(q, 4), j = p(C), F = b(C, 4), B = p(F), X = b(F, 4), x = p(X);
      Y(() => {
        A(y, t.report.summary.class), A(E, t.report.summary.data), A(O, t.report.summary.kind), A(z, t.report.summary.machine), A(V, t.report.summary.entry), A(j, t.report.summary.n_sections), A(B, t.report.summary.n_segments), A(x, t.report.summary.n_symbols);
      }), D(d, h);
    }, f = (d) => {
      var h = mi(), c = b(p(h));
      et(c, 21, () => t.report.sections, $e, (y, m) => {
        var E = yi(), g = p(E), O = p(g), T = b(g), z = p(T), q = b(T), V = p(q), C = b(q), j = p(C), F = b(C), B = p(F), X = b(F), x = p(X), I = b(X), w = p(I);
        Y(() => {
          A(O, _(m).idx), A(z, _(m).name || "\u2014"), A(V, _(m).kind), A(j, _(m).addr), A(B, _(m).offset), A(x, _(m).size), A(w, _(m).flags);
        }), D(y, E);
      }), D(d, h);
    }, u = (d) => {
      var h = Ei(), c = b(p(h));
      et(c, 21, () => t.report.segments, $e, (y, m) => {
        var E = wi(), g = p(E), O = p(g), T = b(g), z = p(T), q = b(T), V = p(q), C = b(q), j = p(C), F = b(C), B = p(F), X = b(F), x = p(X), I = b(X), w = p(I);
        Y(() => {
          A(O, _(m).idx), A(z, _(m).kind), A(V, _(m).vaddr), A(j, _(m).offset), A(B, _(m).filesz), A(x, _(m).memsz), A(w, _(m).flags);
        }), D(y, E);
      }), D(d, h);
    }, v = (d) => {
      var h = Ai(), c = b(p(h));
      et(c, 21, () => t.report.symbols, $e, (y, m) => {
        var E = xi(), g = p(E), O = p(g), T = b(g), z = p(T), q = b(T), V = p(q), C = b(q), j = p(C), F = b(C), B = p(F);
        Y(() => {
          A(O, _(m).name), A(z, _(m).bind), A(V, _(m).kind), A(j, _(m).value), A(B, _(m).size);
        }), D(y, E);
      }), D(d, h);
    };
    J(a, (d) => {
      _(n) === "summary" ? d(o) : _(n) === "sections" ? d(f, 1) : _(n) === "segments" ? d(u, 2) : _(n) === "symbols" && d(v, 3);
    });
  }
  D(e, s), At();
}
Lt(["click"]);
var Ti = L('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <span class="off svelte-14j5q0g"> </span> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <pre class="grid svelte-14j5q0g"></pre></div>');
function Mi(e, t) {
  xt(t, true);
  let n = W(0);
  const r = 16 * 32;
  let s = W(De([])), i = W(null);
  fn(() => {
    let g = false;
    return pr().then((O) => {
      g || (S(i, O, true), l());
    }), () => {
      g = true;
    };
  });
  function l() {
    !_(i) || !t.bytes || S(s, _(i).hex_rows(t.bytes, _(n), r), true);
  }
  function a(g) {
    S(n, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, _(n) + g)), true), l();
  }
  var o = Ti(), f = p(o), u = b(p(f), 2), v = p(u), d = b(v, 2), h = b(d, 2), c = p(h), y = b(h, 2), m = b(y, 2), E = b(f, 2);
  et(E, 21, () => _(s), $e, (g, O) => {
    var T = Ds();
    Y(() => A(T, `${_(O) ?? ""}
`)), D(g, T);
  }), Y((g) => A(c, `@ ${g ?? ""}`), [() => _(n).toString(16).padStart(8, "0").toUpperCase()]), oe("click", v, () => a(-r)), oe("click", d, () => a(-16)), oe("click", y, () => a(16)), oe("click", m, () => a(r)), D(e, o), At();
}
Lt(["click"]);
var Oi = L('<span class="s-brand svelte-1n46o8q">scry</span>'), Ii = L('<span class="s-meta svelte-1n46o8q"><span>FILE<span class="v svelte-1n46o8q"> </span></span> <span>SIZE<span class="v svelte-1n46o8q"> </span></span> <span>FMT<span class="v svelte-1n46o8q"> </span></span> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Ni = L('<span class="s-meta svelte-1n46o8q"><span>WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), Di = L('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Ri = L('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), Ci = L('<p class="err svelte-1n46o8q"> </p>'), Fi = L('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), Ui = L("<!> <!>", 1), Li = L('<footer class="s-status svelte-1n46o8q"><span><span class="dot svelte-1n46o8q"></span>LOCAL &middot; NO UPLOAD &middot; NO LOGIN</span> <span class="s-status-right svelte-1n46o8q">v0.1 &middot; RUST&middot;WASM</span></footer>'), qi = L('<div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <!> <main class="s-main svelte-1n46o8q"><!></main> <!></div>');
function Pi(e, t) {
  xt(t, true);
  let n = W(null), r = W(null), s = W(null), i = W(""), l = W("inspect"), a = W(De(gr()));
  const o = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  fn(() => {
    function w(P) {
      if (P.origin !== location.origin) return;
      const U = P.data;
      U && U.type === "scry-theme" && (U.value === "light" || U.value === "dark") && (document.documentElement.setAttribute("data-theme", U.value), S(a, U.value, true));
    }
    return window.addEventListener("message", w), () => window.removeEventListener("message", w);
  });
  function f(w) {
    return w < 1024 ? w + " B" : w < 1024 * 1024 ? (w / 1024).toFixed(1) + " KiB" : (w / 1024 / 1024).toFixed(1) + " MiB";
  }
  async function u({ name: w, bytes: P }) {
    S(n, { name: w, bytes: P }, true), S(i, ""), S(s, null), S(r, null);
    try {
      const U = await pr();
      S(r, U.detect_format(P), true), _(r) === "elf" && S(s, U.parse_elf(P), true);
    } catch (U) {
      S(i, String(U), true);
    }
  }
  function v() {
    S(n, null), S(s, null), S(r, null), S(i, "");
  }
  function d() {
    S(a, ii(), true);
  }
  var h = qi();
  let c;
  var y = p(h), m = p(y);
  {
    var E = (w) => {
      var P = Oi();
      D(w, P);
    };
    J(m, (w) => {
      o || w(E);
    });
  }
  var g = b(m, 2);
  {
    var O = (w) => {
      var P = Ii(), U = p(P), $ = b(p(U)), he = p($), se = b(U, 2), lt = b(p(se)), ie = p(lt), Te = b(se, 2), ot = b(p(Te)), qt = p(ot), Pt = b(Te, 2);
      Y((Me) => {
        A(he, _(n).name), A(ie, Me), A(qt, _(r) ?? "\u2026");
      }, [() => f(_(n).bytes.length)]), oe("click", Pt, v), D(w, P);
    }, T = (w) => {
      var P = Ni();
      D(w, P);
    };
    J(g, (w) => {
      _(n) ? w(O) : w(T, -1);
    });
  }
  var z = b(g, 2);
  {
    var q = (w) => {
      var P = Di(), U = p(P), $ = p(U);
      Y(() => A($, _(a) === "dark" ? "\u263C" : "\u263E")), oe("click", U, d), D(w, P);
    };
    J(z, (w) => {
      o || w(q);
    });
  }
  var V = b(y, 2);
  {
    var C = (w) => {
      var P = Ri(), U = p(P);
      let $;
      var he = b(U, 2);
      let se;
      Y(() => {
        U.disabled = _(r) !== "elf", dr(U, "title", _(r) === "elf" ? "" : "INSPECT is ELF-only"), $ = pt(U, 1, "svelte-1n46o8q", null, $, { on: _(l) === "inspect" }), se = pt(he, 1, "svelte-1n46o8q", null, se, { on: _(l) === "hex" });
      }), oe("click", U, () => S(l, "inspect")), oe("click", he, () => S(l, "hex")), D(w, P);
    };
    J(V, (w) => {
      _(n) && w(C);
    });
  }
  var j = b(V, 2), F = p(j);
  {
    var B = (w) => {
      vi(w, { onfile: u });
    }, X = (w) => {
      var P = Ui(), U = wn(P);
      {
        var $ = (ie) => {
          var Te = Ci(), ot = p(Te);
          Y(() => A(ot, `parse failed: ${_(i) ?? ""}`)), D(ie, Te);
        };
        J(U, (ie) => {
          _(i) && ie($);
        });
      }
      var he = b(U, 2);
      {
        var se = (ie) => {
          var Te = Rs(), ot = wn(Te);
          {
            var qt = (Me) => {
              ki(Me, { get report() {
                return _(s);
              } });
            }, Pt = (Me) => {
              var hn = Fi(), br = b(p(hn)), yr = p(br);
              Y(() => A(yr, _(r))), D(Me, hn);
            };
            J(ot, (Me) => {
              _(s) ? Me(qt) : _(r) && _(r) !== "elf" && Me(Pt, 1);
            });
          }
          D(ie, Te);
        }, lt = (ie) => {
          Mi(ie, { get bytes() {
            return _(n).bytes;
          } });
        };
        J(he, (ie) => {
          _(l) === "inspect" ? ie(se) : _(l) === "hex" && ie(lt, 1);
        });
      }
      D(w, P);
    };
    J(F, (w) => {
      _(n) ? w(X, -1) : w(B);
    });
  }
  var x = b(j, 2);
  {
    var I = (w) => {
      var P = Li();
      D(w, P);
    };
    J(x, (w) => {
      o || w(I);
    });
  }
  Y(() => c = pt(h, 1, "app svelte-1n46o8q", null, c, { embedded: o })), D(e, h), At();
}
Lt(["click"]);
Cs(Pi, { target: document.getElementById("app") });
