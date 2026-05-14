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
const As = false;
var Ar = Array.isArray, ks = Array.prototype.indexOf, zt = Array.prototype.includes, On = Array.from, Ss = Object.defineProperty, ln = Object.getOwnPropertyDescriptor, Ts = Object.getOwnPropertyDescriptors, Ms = Object.prototype, Rs = Array.prototype, kr = Object.getPrototypeOf, fr = Object.isExtensible;
const Cs = () => {
};
function Os(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Sr() {
  var e, t, n = new Promise((r, s) => {
    e = r, t = s;
  });
  return { promise: n, resolve: e, reject: t };
}
function Fs(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const r of e) if (n.push(r), n.length === t) break;
  return n;
}
const ge = 2, Gt = 4, Fn = 8, Tr = 1 << 24, st = 16, Ze = 32, At = 64, Wn = 128, Be = 512, ve = 1024, he = 2048, at = 4096, xe = 8192, Pe = 16384, qt = 32768, Vn = 1 << 25, Ht = 65536, zn = 1 << 17, Is = 1 << 18, Jt = 1 << 19, js = 1 << 20, nt = 1 << 25, Nt = 65536, Sn = 1 << 21, dn = 1 << 22, yt = 1 << 23, xn = Symbol("$state"), Ds = Symbol(""), vt = new class extends Error {
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
function Bs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ps(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Us() {
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
function Gs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Hs = 1, Ys = 2, Mr = 4, Ks = 8, Xs = 16, Js = 1, Zs = 2, de = Symbol(), Rr = "http://www.w3.org/1999/xhtml";
function Qs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function $s() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Cr(e) {
  return e === this.v;
}
function ea(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Or(e) {
  return !ea(e, this.v);
}
let ta = false, Ie = null;
function Yt(e) {
  Ie = e;
}
function lt(e, t = false, n) {
  Ie = { p: Ie, i: false, c: null, e: null, s: e, x: null, r: Z, l: null };
}
function ot(e) {
  var t = Ie, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n) Jr(r);
  }
  return t.i = true, Ie = t.p, {};
}
function Fr() {
  return true;
}
let Ot = [];
function Ir() {
  var e = Ot;
  Ot = [], Os(e);
}
function xt(e) {
  if (Ot.length === 0 && !on) {
    var t = Ot;
    queueMicrotask(() => {
      t === Ot && Ir();
    });
  }
  Ot.push(e);
}
function na() {
  for (; Ot.length > 0; ) Ir();
}
function jr(e) {
  var t = Z;
  if (t === null) return $.f |= yt, e;
  if (!(t.f & qt) && !(t.f & Gt)) throw e;
  wt(e, t);
}
function wt(e, t) {
  for (; t !== null; ) {
    if (t.f & Wn) {
      if (!(t.f & qt)) throw e;
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
  e.f & Be || e.deps === null ? oe(e, ve) : oe(e, at);
}
function Dr(e) {
  if (e !== null) for (const t of e) !(t.f & ge) || !(t.f & Nt) || (t.f ^= Nt, Dr(t.deps));
}
function Nr(e, t, n) {
  e.f & he ? t.add(e) : e.f & at && n.add(e), Dr(e.deps), oe(e, ve);
}
const Rt = /* @__PURE__ */ new Set();
let X = null, Xe = null, Gn = null, on = false, Dn = false, Ut = null, En = null;
var ur = 0;
let sa = 1;
class kt {
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
    if (ur++ > 1e3 && (Rt.delete(this), ia()), !this.#u()) {
      for (const o of this.#c) this.#f.delete(o), oe(o, he), this.schedule(o);
      for (const o of this.#f) oe(o, at), this.schedule(o);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = Ut = [], r = [], s = En = [];
    for (const o of t) try {
      this.#b(o, n, r);
    } catch (c) {
      throw Br(o), c;
    }
    if (X = null, s.length > 0) {
      var i = kt.ensure();
      for (const o of s) i.schedule(o);
    }
    if (Ut = null, En = null, this.#u() || this.#g()) {
      this.#h(r), this.#h(n);
      for (const [o, c] of this.#l) qr(o, c);
    } else {
      this.#s.size === 0 && Rt.delete(this), this.#c.clear(), this.#f.clear();
      for (const o of this.#n) o(this);
      this.#n.clear(), vr(r), vr(n), this.#a?.resolve();
    }
    var l = X;
    if (this.#t.length > 0) {
      const o = l ??= this;
      o.#t.push(...this.#t.filter((c) => !o.#t.includes(c)));
    }
    l !== null && (Rt.add(l), l.#p());
  }
  #b(t, n, r) {
    t.f ^= ve;
    for (var s = t.first; s !== null; ) {
      var i = s.f, l = (i & (Ze | At)) !== 0, o = l && (i & ve) !== 0, c = o || (i & xe) !== 0 || this.#l.has(s);
      if (!c && s.fn !== null) {
        l ? s.f ^= ve : i & Gt ? n.push(s) : hn(s) && (i & st && this.#f.add(s), Xt(s));
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
    for (var n = 0; n < t.length; n += 1) Nr(t[n], this.#c, this.#f);
  }
  capture(t, n, r = false) {
    t.v !== de && !this.previous.has(t) && this.previous.set(t, t.v), t.f & yt || (this.current.set(t, [n, r]), Xe?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    X = this;
  }
  deactivate() {
    X = null, Xe = null;
  }
  flush() {
    try {
      Dn = true, X = this, this.#p();
    } finally {
      ur = 0, Gn = null, Ut = null, En = null, Dn = false, X = null, Xe = null, It.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Rt.delete(this);
  }
  register_created_effect(t) {
    this.#i.push(t);
  }
  #m() {
    for (const f of Rt) {
      var t = f.id < this.id, n = [];
      for (const [h, [_, E]] of this.current) {
        if (f.current.has(h)) {
          var r = f.current.get(h)[0];
          if (t && _ !== r) f.current.set(h, [_, E]);
          else continue;
        }
        n.push(h);
      }
      var s = [...f.current.keys()].filter((h) => !this.current.has(h));
      if (s.length === 0) t && f.discard();
      else if (n.length > 0) {
        if (t) for (const h of this.#v) f.unskip_effect(h, (_) => {
          _.f & (st | dn) ? f.schedule(_) : f.#h([_]);
        });
        f.activate();
        var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n) Lr(o, s, i, l);
        l = /* @__PURE__ */ new Map();
        var c = [...f.current.keys()].filter((h) => this.current.has(h) ? this.current.get(h)[0] !== h : true);
        for (const h of this.#i) !(h.f & (Pe | xe | zn)) && er(h, c, l) && (h.f & (dn | st) ? (oe(h, he), f.schedule(h)) : f.#c.add(h));
        if (f.#t.length > 0) {
          f.apply();
          for (var v of f.#t) f.#b(v, [], []);
          f.#t = [];
        }
        f.deactivate();
      }
    }
    for (const f of Rt) f.#d.has(this) && (f.#d.delete(this), f.#d.size === 0 && !f.#u() && (f.activate(), f.#p()));
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
    if (X === null) {
      const t = X = new kt();
      Dn || (Rt.add(X), on || xt(() => {
        X === t && t.flush();
      }));
    }
    return X;
  }
  apply() {
    {
      Xe = null;
      return;
    }
  }
  schedule(t) {
    if (Gn = t, t.b?.is_pending && t.f & (Gt | Fn | Tr) && !(t.f & qt)) {
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
function aa(e) {
  var t = on;
  on = true;
  try {
    for (var n; ; ) {
      if (na(), X === null) return n;
      X.flush();
    }
  } finally {
    on = t;
  }
}
function ia() {
  try {
    Us();
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
      if (!(r.f & (Pe | xe)) && hn(r) && (ut = /* @__PURE__ */ new Set(), Xt(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Qr(r), ut?.size > 0)) {
        It.clear();
        for (const s of ut) {
          if (s.f & (Pe | xe)) continue;
          const i = [s];
          let l = s.parent;
          for (; l !== null; ) ut.has(l) && (ut.delete(l), i.push(l)), l = l.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const c = i[o];
            c.f & (Pe | xe) || Xt(c);
          }
        }
        ut.clear();
      }
    }
    ut = null;
  }
}
function Lr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const s of e.reactions) {
    const i = s.f;
    i & ge ? Lr(s, t, n, r) : i & (dn | st) && !(i & he) && er(s, t, r) && (oe(s, he), tr(s));
  }
}
function er(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null) for (const s of e.deps) {
    if (zt.call(t, s)) return true;
    if (s.f & ge && er(s, t, n)) return n.set(s, true), true;
  }
  return n.set(e, false), false;
}
function tr(e) {
  X.schedule(e);
}
function qr(e, t) {
  if (!(e.f & Ze && e.f & ve)) {
    e.f & he ? t.d.push(e) : e.f & at && t.m.push(e), oe(e, ve);
    for (var n = e.first; n !== null; ) qr(n, t), n = n.next;
  }
}
function Br(e) {
  oe(e, ve);
  for (var t = e.first; t !== null; ) Br(t), t = t.next;
}
function la(e) {
  let t = 0, n = Lt(0), r;
  return () => {
    sr() && (a(n), ar(() => (t === 0 && (r = cr(() => e(() => cn(n)))), t += 1, () => {
      xt(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, cn(n));
      });
    })));
  };
}
var oa = Ht | Jt;
function ca(e, t, n, r) {
  new fa(e, t, n, r);
}
class fa {
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
  #g = la(() => (this.#u = Lt(this.#f), () => {
    this.#u = null;
  }));
  constructor(t, n, r, s) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var l = Z;
      l.b = this, l.f |= Wn, r(i);
    }, this.parent = Z.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), this.#r = jn(() => {
      this.#m();
    }, oa);
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
      }), this.#w(X));
    }));
  }
  #m() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#f = 0, this.#a = Ne(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#c = document.createDocumentFragment();
        or(this.#a, t);
        const n = this.#e.pending;
        this.#t = Ne(() => n(this.#n));
      } else this.#w(X);
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
    var n = Z, r = $, s = Ie;
    it(this.#r), Ve(this.#r), Yt(this.#r.ctx);
    try {
      return kt.ensure(), t();
    } catch (i) {
      return jr(i), null;
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
    return this.#g(), a(this.#u);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    X?.is_fork ? (this.#a && X.skip_effect(this.#a), this.#t && X.skip_effect(this.#t), this.#i && X.skip_effect(this.#i), X.on_fork_commit(() => {
      this.#E(t);
    })) : this.#E(t);
  }
  #E(t) {
    this.#a && (Te(this.#a), this.#a = null), this.#t && (Te(this.#t), this.#t = null), this.#i && (Te(this.#i), this.#i = null);
    var n = this.#e.onerror;
    let r = this.#e.failed;
    var s = false, i = false;
    const l = () => {
      if (s) {
        $s();
        return;
      }
      s = true, i && Gs(), this.#i !== null && jt(this.#i, () => {
        this.#i = null;
      }), this.#y(() => {
        this.#m();
      });
    }, o = (c) => {
      try {
        i = true, n?.(c, l), i = false;
      } catch (v) {
        wt(v, this.#r && this.#r.parent);
      }
      r && (this.#i = this.#y(() => {
        try {
          return Ne(() => {
            var v = Z;
            v.b = this, v.f |= Wn, r(this.#n, () => c, () => l);
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
function ua(e, t, n, r) {
  const s = nr;
  var i = e.filter((_) => !_.settled);
  if (n.length === 0 && i.length === 0) {
    r(t.map(s));
    return;
  }
  var l = Z, o = va(), c = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function v(_) {
    o();
    try {
      r(_);
    } catch (E) {
      l.f & Pe || wt(E, l);
    }
    Tn();
  }
  if (n.length === 0) {
    c.then(() => v(t.map(s)));
    return;
  }
  var f = Pr();
  function h() {
    Promise.all(n.map((_) => da(_))).then((_) => v([...t.map(s), ..._])).catch((_) => wt(_, l)).finally(() => f());
  }
  c ? c.then(() => {
    o(), h(), Tn();
  }) : h();
}
function va() {
  var e = Z, t = $, n = Ie, r = X;
  return function(i = true) {
    it(e), Ve(t), Yt(n), i && !(e.f & Pe) && (r?.activate(), r?.apply());
  };
}
function Tn(e = true) {
  it(null), Ve(null), Yt(null), e && X?.deactivate();
}
function Pr() {
  var e = Z, t = e.b, n = X, r = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(r, e), (s = false) => {
    t.update_pending_count(-1, n), n.decrement(r, e, s);
  };
}
function nr(e) {
  var t = ge | he;
  return Z !== null && (Z.f |= Jt), { ctx: Ie, deps: null, effects: null, equals: Cr, f: t, fn: e, reactions: null, rv: 0, v: de, wv: 0, parent: Z, ac: null };
}
function da(e, t, n) {
  let r = Z;
  r === null && Ns();
  var s = void 0, i = Lt(de), l = !$, o = /* @__PURE__ */ new Map();
  return Ra(() => {
    var c = Z, v = Sr();
    s = v.promise;
    try {
      Promise.resolve(e()).then(v.resolve, v.reject).finally(Tn);
    } catch (E) {
      v.reject(E), Tn();
    }
    var f = X;
    if (l) {
      if (c.f & qt) var h = Pr();
      if (r.b.is_rendered()) o.get(f)?.reject(vt), o.delete(f);
      else {
        for (const E of o.values()) E.reject(vt);
        o.clear();
      }
      o.set(f, v);
    }
    const _ = (E, x = void 0) => {
      if (h) {
        var F = x === vt;
        h(F);
      }
      if (!(x === vt || c.f & Pe)) {
        if (f.activate(), x) i.f |= yt, Kt(i, x);
        else {
          i.f & yt && (i.f ^= yt), Kt(i, E);
          for (const [b, L] of o) {
            if (o.delete(b), b === f) break;
            L.reject(vt);
          }
        }
        f.deactivate();
      }
    };
    v.promise.then(_, (E) => _(null, E || "unknown"));
  }), Xr(() => {
    for (const c of o.values()) c.reject(vt);
  }), new Promise((c) => {
    function v(f) {
      function h() {
        f === s ? c(i) : v(s);
      }
      f.then(h, h);
    }
    v(s);
  });
}
function _t(e) {
  const t = nr(e);
  return ts(t), t;
}
function _a(e) {
  const t = nr(e);
  return t.equals = Or, t;
}
function pa(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Te(t[n]);
  }
}
function rr(e) {
  var t, n = Z, r = e.parent;
  if (!St && r !== null && r.f & (Pe | xe)) return Qs(), e.v;
  it(r);
  try {
    e.f &= ~Nt, pa(e), t = as(e);
  } finally {
    it(n);
  }
  return t;
}
function Ur(e) {
  var t = rr(e);
  if (!e.equals(t) && (e.wv = rs(), (!X?.is_fork || e.deps === null) && (X !== null ? X.capture(e, t, true) : e.v = t, e.deps === null))) {
    oe(e, ve);
    return;
  }
  St || (Xe !== null ? (sr() || X?.is_fork) && Xe.set(e, t) : $n(e));
}
function ha(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(vt), t.teardown = Cs, t.ac = null, _n(t, 0), ir(t));
}
function Wr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && Xt(t);
}
let Hn = /* @__PURE__ */ new Set();
const It = /* @__PURE__ */ new Map();
let Vr = false;
function Lt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Cr, rv: 0, wv: 0 };
  return n;
}
function U(e, t) {
  const n = Lt(e);
  return ts(n), n;
}
function ga(e, t = false, n = true) {
  const r = Lt(e);
  return t || (r.equals = Or), r;
}
function p(e, t, n = false) {
  $ !== null && (!Je || $.f & zn) && Fr() && $.f & (ge | st | dn | zn) && (We === null || !zt.call(We, e)) && zs();
  let r = n ? rt(t) : t;
  return Kt(e, r, En);
}
function Kt(e, t, n = null) {
  if (!e.equals(t)) {
    It.set(e, St ? t : e.v);
    var r = kt.ensure();
    if (r.capture(e, t), e.f & ge) {
      const s = e;
      e.f & he && rr(s), Xe === null && $n(s);
    }
    e.wv = rs(), zr(e, he, n), Z !== null && Z.f & ve && !(Z.f & (Ze | At)) && (De === null ? Fa([e]) : De.push(e)), !r.is_fork && Hn.size > 0 && !Vr && ba();
  }
  return t;
}
function ba() {
  Vr = false;
  for (const e of Hn) e.f & ve && oe(e, at), hn(e) && Xt(e);
  Hn.clear();
}
function ma(e, t = 1) {
  var n = a(e), r = t === 1 ? n++ : n--;
  return p(e, n), r;
}
function cn(e) {
  p(e, e.v + 1);
}
function zr(e, t, n) {
  var r = e.reactions;
  if (r !== null) for (var s = r.length, i = 0; i < s; i++) {
    var l = r[i], o = l.f, c = (o & he) === 0;
    if (c && oe(l, t), o & ge) {
      var v = l;
      Xe?.delete(v), o & Nt || (o & Be && (Z === null || !(Z.f & Sn)) && (l.f |= Nt), zr(v, at, n));
    } else if (c) {
      var f = l;
      o & st && ut !== null && ut.add(f), n !== null ? n.push(f) : tr(f);
    }
  }
}
function rt(e) {
  if (typeof e != "object" || e === null || xn in e) return e;
  const t = kr(e);
  if (t !== Ms && t !== Rs) return e;
  var n = /* @__PURE__ */ new Map(), r = Ar(e), s = U(0), i = Dt, l = (o) => {
    if (Dt === i) return o();
    var c = $, v = Dt;
    Ve(null), hr(i);
    var f = o();
    return Ve(c), hr(v), f;
  };
  return r && n.set("length", U(e.length)), new Proxy(e, { defineProperty(o, c, v) {
    (!("value" in v) || v.configurable === false || v.enumerable === false || v.writable === false) && Ws();
    var f = n.get(c);
    return f === void 0 ? l(() => {
      var h = U(v.value);
      return n.set(c, h), h;
    }) : p(f, v.value, true), true;
  }, deleteProperty(o, c) {
    var v = n.get(c);
    if (v === void 0) {
      if (c in o) {
        const f = l(() => U(de));
        n.set(c, f), cn(s);
      }
    } else p(v, de), cn(s);
    return true;
  }, get(o, c, v) {
    if (c === xn) return e;
    var f = n.get(c), h = c in o;
    if (f === void 0 && (!h || ln(o, c)?.writable) && (f = l(() => {
      var E = rt(h ? o[c] : de), x = U(E);
      return x;
    }), n.set(c, f)), f !== void 0) {
      var _ = a(f);
      return _ === de ? void 0 : _;
    }
    return Reflect.get(o, c, v);
  }, getOwnPropertyDescriptor(o, c) {
    var v = Reflect.getOwnPropertyDescriptor(o, c);
    if (v && "value" in v) {
      var f = n.get(c);
      f && (v.value = a(f));
    } else if (v === void 0) {
      var h = n.get(c), _ = h?.v;
      if (h !== void 0 && _ !== de) return { enumerable: true, configurable: true, value: _, writable: true };
    }
    return v;
  }, has(o, c) {
    if (c === xn) return true;
    var v = n.get(c), f = v !== void 0 && v.v !== de || Reflect.has(o, c);
    if (v !== void 0 || Z !== null && (!f || ln(o, c)?.writable)) {
      v === void 0 && (v = l(() => {
        var _ = f ? rt(o[c]) : de, E = U(_);
        return E;
      }), n.set(c, v));
      var h = a(v);
      if (h === de) return false;
    }
    return f;
  }, set(o, c, v, f) {
    var h = n.get(c), _ = c in o;
    if (r && c === "length") for (var E = v; E < h.v; E += 1) {
      var x = n.get(E + "");
      x !== void 0 ? p(x, de) : E in o && (x = l(() => U(de)), n.set(E + "", x));
    }
    if (h === void 0) (!_ || ln(o, c)?.writable) && (h = l(() => U(void 0)), p(h, rt(v)), n.set(c, h));
    else {
      _ = h.v !== de;
      var F = l(() => rt(v));
      p(h, F);
    }
    var b = Reflect.getOwnPropertyDescriptor(o, c);
    if (b?.set && b.set.call(f, v), !_) {
      if (r && typeof c == "string") {
        var L = n.get("length"), I = Number(c);
        Number.isInteger(I) && I >= L.v && p(L, I + 1);
      }
      cn(s);
    }
    return true;
  }, ownKeys(o) {
    a(s);
    var c = Reflect.ownKeys(o).filter((h) => {
      var _ = n.get(h);
      return _ === void 0 || _.v !== de;
    });
    for (var [v, f] of n) f.v !== de && !(v in o) && c.push(v);
    return c;
  }, setPrototypeOf() {
    Vs();
  } });
}
var dr, Gr, Hr, Yr;
function wa() {
  if (dr === void 0) {
    dr = window, Gr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Hr = ln(t, "firstChild").get, Yr = ln(t, "nextSibling").get, fr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), fr(n) && (n.__t = void 0);
  }
}
function Et(e = "") {
  return document.createTextNode(e);
}
function Mn(e) {
  return Hr.call(e);
}
function pn(e) {
  return Yr.call(e);
}
function u(e, t) {
  return Mn(e);
}
function pt(e, t = false) {
  {
    var n = Mn(e);
    return n instanceof Comment && n.data === "" ? pn(n) : n;
  }
}
function d(e, t = 1, n = false) {
  let r = e;
  for (; t--; ) r = pn(r);
  return r;
}
function ya(e) {
  e.textContent = "";
}
function Kr() {
  return false;
}
function xa(e, t, n) {
  return document.createElementNS(Rr, e, void 0);
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
  var t = $, n = Z;
  Ve(null), it(null);
  try {
    return e();
  } finally {
    Ve(t), it(n);
  }
}
function Aa(e, t, n, r = n) {
  e.addEventListener(t, () => In(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(true);
  } : e.__on_r = () => r(true), Ea();
}
function ka(e) {
  Z === null && ($ === null && Ps(), Bs()), St && qs();
}
function Sa(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function ht(e, t) {
  var n = Z;
  n !== null && n.f & xe && (e |= xe);
  var r = { ctx: Ie, deps: null, nodes: null, f: e | he | Be, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  X?.register_created_effect(r);
  var s = r;
  if (e & Gt) Ut !== null ? Ut.push(r) : kt.ensure().schedule(r);
  else if (t !== null) {
    try {
      Xt(r);
    } catch (l) {
      throw Te(r), l;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && !(s.f & Jt) && (s = s.first, e & st && e & Ht && s !== null && (s.f |= Ht));
  }
  if (s !== null && (s.parent = n, n !== null && Sa(s, n), $ !== null && $.f & ge && !(e & At))) {
    var i = $;
    (i.effects ??= []).push(s);
  }
  return r;
}
function sr() {
  return $ !== null && !Je;
}
function Xr(e) {
  const t = ht(Fn, null);
  return oe(t, ve), t.teardown = e, t;
}
function Ue(e) {
  ka();
  var t = Z.f, n = !$ && (t & Ze) !== 0 && (t & qt) === 0;
  if (n) {
    var r = Ie;
    (r.e ??= []).push(e);
  } else return Jr(e);
}
function Jr(e) {
  return ht(Gt | js, e);
}
function Ta(e) {
  kt.ensure();
  const t = ht(At | Jt, e);
  return (n = {}) => new Promise((r) => {
    n.outro ? jt(t, () => {
      Te(t), r(void 0);
    }) : (Te(t), r(void 0));
  });
}
function Ma(e) {
  return ht(Gt, e);
}
function Ra(e) {
  return ht(dn | Jt, e);
}
function ar(e, t = 0) {
  return ht(Fn | t, e);
}
function K(e, t = [], n = [], r = []) {
  ua(r, t, n, (s) => {
    ht(Fn, () => e(...s.map(a)));
  });
}
function jn(e, t = 0) {
  var n = ht(st | t, e);
  return n;
}
function Ne(e) {
  return ht(Ze | Jt, e);
}
function Zr(e) {
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
function ir(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const s = n.ac;
    s !== null && In(() => {
      s.abort(vt);
    });
    var r = n.next;
    n.f & At ? n.parent = null : Te(n, t), n = r;
  }
}
function Ca(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Ze || Te(t), t = n;
  }
}
function Te(e, t = true) {
  var n = false;
  (t || e.f & Is) && e.nodes !== null && e.nodes.end !== null && (Oa(e.nodes.start, e.nodes.end), n = true), oe(e, Vn), ir(e, t && !n), _n(e, 0);
  var r = e.nodes && e.nodes.t;
  if (r !== null) for (const i of r) i.stop();
  Zr(e), e.f ^= Vn, e.f |= Pe;
  var s = e.parent;
  s !== null && s.first !== null && Qr(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Oa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : pn(e);
    e.remove(), e = n;
  }
}
function Qr(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function jt(e, t, n = true) {
  var r = [];
  $r(e, r, true);
  var s = () => {
    n && Te(e), t && t();
  }, i = r.length;
  if (i > 0) {
    var l = () => --i || s();
    for (var o of r) o.out(l);
  } else s();
}
function $r(e, t, n) {
  if (!(e.f & xe)) {
    e.f ^= xe;
    var r = e.nodes && e.nodes.t;
    if (r !== null) for (const o of r) (o.is_global || n) && t.push(o);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if (!(s.f & At)) {
        var l = (s.f & Ht) !== 0 || (s.f & Ze) !== 0 && (e.f & st) !== 0;
        $r(s, t, l ? n : false);
      }
      s = i;
    }
  }
}
function lr(e) {
  es(e, true);
}
function es(e, t) {
  if (e.f & xe) {
    e.f ^= xe, e.f & ve || (oe(e, he), kt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Ht) !== 0 || (n.f & Ze) !== 0;
      es(n, s ? t : false), n = r;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const l of i) (l.is_global || t) && l.in();
  }
}
function or(e, t) {
  if (e.nodes) for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
    var s = n === r ? null : pn(n);
    t.append(n), n = s;
  }
}
let An = false, St = false;
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
function ts(e) {
  $ !== null && (We === null ? We = [e] : We.push(e));
}
let ke = null, Oe = 0, De = null;
function Fa(e) {
  De = e;
}
let ns = 1, Ft = 0, Dt = Ft;
function hr(e) {
  Dt = e;
}
function rs() {
  return ++ns;
}
function hn(e) {
  var t = e.f;
  if (t & he) return true;
  if (t & ge && (e.f &= ~Nt), t & at) {
    for (var n = e.deps, r = n.length, s = 0; s < r; s++) {
      var i = n[s];
      if (hn(i) && Ur(i), i.wv > e.wv) return true;
    }
    t & Be && Xe === null && oe(e, ve);
  }
  return false;
}
function ss(e, t, n = true) {
  var r = e.reactions;
  if (r !== null && !(We !== null && zt.call(We, e))) for (var s = 0; s < r.length; s++) {
    var i = r[s];
    i.f & ge ? ss(i, t, false) : t === i && (n ? oe(i, he) : i.f & ve && oe(i, at), tr(i));
  }
}
function as(e) {
  var t = ke, n = Oe, r = De, s = $, i = We, l = Ie, o = Je, c = Dt, v = e.f;
  ke = null, Oe = 0, De = null, $ = v & (Ze | At) ? null : e, We = null, Yt(e.ctx), Je = false, Dt = ++Ft, e.ac !== null && (In(() => {
    e.ac.abort(vt);
  }), e.ac = null);
  try {
    e.f |= Sn;
    var f = e.fn, h = f();
    e.f |= qt;
    var _ = e.deps, E = X?.is_fork;
    if (ke !== null) {
      var x;
      if (E || _n(e, Oe), _ !== null && Oe > 0) for (_.length = Oe + ke.length, x = 0; x < ke.length; x++) _[Oe + x] = ke[x];
      else e.deps = _ = ke;
      if (sr() && e.f & Be) for (x = Oe; x < _.length; x++) (_[x].reactions ??= []).push(e);
    } else !E && _ !== null && Oe < _.length && (_n(e, Oe), _.length = Oe);
    if (Fr() && De !== null && !Je && _ !== null && !(e.f & (ge | at | he))) for (x = 0; x < De.length; x++) ss(De[x], e);
    if (s !== null && s !== e) {
      if (Ft++, s.deps !== null) for (let F = 0; F < n; F += 1) s.deps[F].rv = Ft;
      if (t !== null) for (const F of t) F.rv = Ft;
      De !== null && (r === null ? r = De : r.push(...De));
    }
    return e.f & yt && (e.f ^= yt), h;
  } catch (F) {
    return jr(F);
  } finally {
    e.f ^= Sn, ke = t, Oe = n, De = r, $ = s, We = i, Yt(l), Je = o, Dt = c;
  }
}
function Ia(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = ks.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  if (n === null && t.f & ge && (ke === null || !zt.call(ke, t))) {
    var i = t;
    i.f & Be && (i.f ^= Be, i.f &= ~Nt), i.v !== de && $n(i), ha(i), _n(i, 0);
  }
}
function _n(e, t) {
  var n = e.deps;
  if (n !== null) for (var r = t; r < n.length; r++) Ia(e, n[r]);
}
function Xt(e) {
  var t = e.f;
  if (!(t & Pe)) {
    oe(e, ve);
    var n = Z, r = An;
    Z = e, An = true;
    try {
      t & (st | Tr) ? Ca(e) : ir(e), Zr(e);
      var s = as(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = ns;
      var i;
      As && ta && e.f & he && e.deps;
    } finally {
      An = r, Z = n;
    }
  }
}
async function ja() {
  await Promise.resolve(), aa();
}
function a(e) {
  var t = e.f, n = (t & ge) !== 0;
  if ($ !== null && !Je) {
    var r = Z !== null && (Z.f & Pe) !== 0;
    if (!r && (We === null || !zt.call(We, e))) {
      var s = $.deps;
      if ($.f & Sn) e.rv < Ft && (e.rv = Ft, ke === null && s !== null && s[Oe] === e ? Oe++ : ke === null ? ke = [e] : ke.push(e));
      else {
        ($.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [$] : zt.call(i, $) || i.push($);
      }
    }
  }
  if (St && It.has(e)) return It.get(e);
  if (n) {
    var l = e;
    if (St) {
      var o = l.v;
      return (!(l.f & ve) && l.reactions !== null || ls(l)) && (o = rr(l)), It.set(l, o), o;
    }
    var c = (l.f & Be) === 0 && !Je && $ !== null && (An || ($.f & Be) !== 0), v = (l.f & qt) === 0;
    hn(l) && (c && (l.f |= Be), Ur(l)), c && !v && (Wr(l), is(l));
  }
  if (Xe?.has(e)) return Xe.get(e);
  if (e.f & yt) throw e.v;
  return e.v;
}
function is(e) {
  if (e.f |= Be, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & ge && !(t.f & Be) && (Wr(t), is(t));
}
function ls(e) {
  if (e.v === de) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (It.has(t) || t.f & ge && ls(t)) return true;
  return false;
}
function cr(e) {
  var t = Je;
  try {
    return Je = true, e();
  } finally {
    Je = t;
  }
}
const Da = ["touchstart", "touchmove"];
function Na(e) {
  return Da.includes(e);
}
const tn = Symbol("events"), os = /* @__PURE__ */ new Set(), Yn = /* @__PURE__ */ new Set();
function La(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Kn.call(t, i), !i.cancelBubble) return In(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? xt(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function Wt(e, t, n, r, s) {
  var i = { capture: r, passive: s }, l = La(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && Xr(() => {
    t.removeEventListener(e, l, i);
  });
}
function se(e, t, n) {
  (t[tn] ??= {})[e] = n;
}
function Zt(e) {
  for (var t = 0; t < e.length; t++) os.add(e[t]);
  for (var n of Yn) n(e);
}
let gr = null;
function Kn(e) {
  var t = this, n = t.ownerDocument, r = e.type, s = e.composedPath?.() || [], i = s[0] || e.target;
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
  if (i = s[l] || e.target, i !== t) {
    Ss(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var f = $, h = Z;
    Ve(null), it(null);
    try {
      for (var _, E = []; i !== null; ) {
        var x = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var F = i[tn]?.[r];
          F != null && (!i.disabled || e.target === i) && F.call(i, e);
        } catch (b) {
          _ ? E.push(b) : _ = b;
        }
        if (e.cancelBubble || x === t || x === null) break;
        i = x;
      }
      if (_) {
        for (let b of E) queueMicrotask(() => {
          throw b;
        });
        throw _;
      }
    } finally {
      e[tn] = t, delete e.currentTarget, Ve(f), it(h);
    }
  }
}
const qa = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Ba(e) {
  return qa?.createHTML(e) ?? e;
}
function Pa(e) {
  var t = xa("template");
  return t.innerHTML = Ba(e.replaceAll("<!>", "<!---->")), t.content;
}
function Xn(e, t) {
  var n = Z;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function j(e, t) {
  var n = (t & Js) !== 0, r = (t & Zs) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = Pa(i ? e : "<!>" + e), n || (s = Mn(s)));
    var l = r || Gr ? document.importNode(s, true) : s.cloneNode(true);
    if (n) {
      var o = Mn(l), c = l.lastChild;
      Xn(o, c);
    } else Xn(l, l);
    return l;
  };
}
function Rn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Et();
  return e.append(t, n), Xn(t, n), e;
}
function R(e, t) {
  e !== null && e.before(t);
}
function m(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Ua(e, t) {
  return Wa(e, t);
}
const yn = /* @__PURE__ */ new Map();
function Wa(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: l = true, transformError: o }) {
  wa();
  var c = void 0, v = Ta(() => {
    var f = n ?? t.appendChild(Et());
    ca(f, { pending: () => {
    } }, (E) => {
      lt({});
      var x = Ie;
      i && (x.c = i), s && (r.$$events = s), c = e(E, r) || {}, ot();
    }, o);
    var h = /* @__PURE__ */ new Set(), _ = (E) => {
      for (var x = 0; x < E.length; x++) {
        var F = E[x];
        if (!h.has(F)) {
          h.add(F);
          var b = Na(F);
          for (const g of [t, document]) {
            var L = yn.get(g);
            L === void 0 && (L = /* @__PURE__ */ new Map(), yn.set(g, L));
            var I = L.get(F);
            I === void 0 ? (g.addEventListener(F, Kn, { passive: b }), L.set(F, 1)) : L.set(F, I + 1);
          }
        }
      }
    };
    return _(On(os)), Yn.add(_), () => {
      for (var E of h) for (const b of [t, document]) {
        var x = yn.get(b), F = x.get(E);
        --F == 0 ? (b.removeEventListener(E, Kn), x.delete(E), x.size === 0 && yn.delete(b)) : x.set(E, F);
      }
      Yn.delete(_), f !== n && f.parentNode?.removeChild(f);
    };
  });
  return Va.set(c, v), c;
}
let Va = /* @__PURE__ */ new WeakMap();
class cs {
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
      if (r) lr(r), this.#s.delete(n);
      else {
        var s = this.#e.get(n);
        s && (this.#o.set(n, s.effect), this.#e.delete(n), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), r = s.effect);
      }
      for (const [i, l] of this.#n) {
        if (this.#n.delete(i), i === t) break;
        const o = this.#e.get(l);
        o && (Te(o.effect), this.#e.delete(l));
      }
      for (const [i, l] of this.#o) {
        if (i === n || this.#s.has(i)) continue;
        const o = () => {
          if (Array.from(this.#n.values()).includes(i)) {
            var v = document.createDocumentFragment();
            or(l, v), v.append(Et()), this.#e.set(i, { effect: l, fragment: v });
          } else Te(l);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !r ? (this.#s.add(i), jt(l, o, false)) : o();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [r, s] of this.#e) n.includes(r) || (Te(s.effect), this.#e.delete(r));
  };
  ensure(t, n) {
    var r = X, s = Kr();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (s) {
      var i = document.createDocumentFragment(), l = Et();
      i.append(l), this.#e.set(t, { effect: Ne(() => n(l)), fragment: i });
    } else this.#o.set(t, Ne(() => n(this.anchor)));
    if (this.#n.set(r, t), s) {
      for (const [o, c] of this.#o) o === t ? r.unskip_effect(c) : r.skip_effect(c);
      for (const [o, c] of this.#e) o === t ? r.unskip_effect(c.effect) : r.skip_effect(c.effect);
      r.oncommit(this.#a), r.ondiscard(this.#t);
    } else this.#a(r);
  }
}
function ne(e, t, n = false) {
  var r = new cs(e), s = n ? Ht : 0;
  function i(l, o) {
    r.ensure(l, o);
  }
  jn(() => {
    var l = false;
    t((o, c = 0) => {
      l = true, i(c, o);
    }), l || i(-1, null);
  }, s);
}
const za = Symbol("NaN");
function Ga(e, t, n) {
  var r = new cs(e);
  jn(() => {
    var s = t();
    s !== s && (s = za), r.ensure(s, n);
  });
}
function Le(e, t) {
  return t;
}
function Ha(e, t, n) {
  for (var r = [], s = t.length, i, l = t.length, o = 0; o < s; o++) {
    let h = t[o];
    jt(h, () => {
      if (i) {
        if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
          var _ = e.outrogroups;
          Jn(e, On(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var c = r.length === 0 && n !== null;
    if (c) {
      var v = n, f = v.parentNode;
      ya(f), f.append(v), e.items.clear();
    }
    Jn(e, t, !c);
  } else i = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function Jn(e, t, n = true) {
  var r;
  if (e.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const o of l) r.add(e.items.get(o).e);
  }
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (r?.has(i)) {
      i.f |= nt;
      const l = document.createDocumentFragment();
      or(i, l);
    } else Te(t[s], n);
  }
}
var br;
function qe(e, t, n, r, s, i = null) {
  var l = e, o = /* @__PURE__ */ new Map(), c = (t & Mr) !== 0;
  if (c) {
    var v = e;
    l = v.appendChild(Et());
  }
  var f = null, h = _a(() => {
    var g = n();
    return Ar(g) ? g : g == null ? [] : On(g);
  }), _, E = /* @__PURE__ */ new Map(), x = true;
  function F(g) {
    I.effect.f & Pe || (I.pending.delete(g), I.fallback = f, Ya(I, _, l, t, r), f !== null && (_.length === 0 ? f.f & nt ? (f.f ^= nt, nn(f, null, l)) : lr(f) : jt(f, () => {
      f = null;
    })));
  }
  function b(g) {
    I.pending.delete(g);
  }
  var L = jn(() => {
    _ = a(h);
    for (var g = _.length, S = /* @__PURE__ */ new Set(), q = X, C = Kr(), D = 0; D < g; D += 1) {
      var H = _[D], Q = r(H, D), W = x ? null : o.get(Q);
      W ? (W.v && Kt(W.v, H), W.i && Kt(W.i, D), C && q.unskip_effect(W.e)) : (W = Ka(o, x ? l : br ??= Et(), H, Q, D, s, t, n), x || (W.e.f |= nt), o.set(Q, W)), S.add(Q);
    }
    if (g === 0 && i && !f && (x ? f = Ne(() => i(l)) : (f = Ne(() => i(br ??= Et())), f.f |= nt)), g > S.size && Ls(), !x) if (E.set(q, S), C) {
      for (const [B, y] of o) S.has(B) || q.skip_effect(y.e);
      q.oncommit(F), q.ondiscard(b);
    } else F(q);
    a(h);
  }), I = { effect: L, items: o, pending: E, outrogroups: null, fallback: f };
  x = false;
}
function en(e) {
  for (; e !== null && !(e.f & Ze); ) e = e.next;
  return e;
}
function Ya(e, t, n, r, s) {
  var i = (r & Ks) !== 0, l = t.length, o = e.items, c = en(e.effect.first), v, f = null, h, _ = [], E = [], x, F, b, L;
  if (i) for (L = 0; L < l; L += 1) x = t[L], F = s(x, L), b = o.get(F).e, b.f & nt || (b.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(b));
  for (L = 0; L < l; L += 1) {
    if (x = t[L], F = s(x, L), b = o.get(F).e, e.outrogroups !== null) for (const W of e.outrogroups) W.pending.delete(b), W.done.delete(b);
    if (b.f & xe && (lr(b), i && (b.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(b))), b.f & nt) if (b.f ^= nt, b === c) nn(b, null, n);
    else {
      var I = f ? f.next : c;
      b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), bt(e, f, b), bt(e, b, I), nn(b, I, n), f = b, _ = [], E = [], c = en(f.next);
      continue;
    }
    if (b !== c) {
      if (v !== void 0 && v.has(b)) {
        if (_.length < E.length) {
          var g = E[0], S;
          f = g.prev;
          var q = _[0], C = _[_.length - 1];
          for (S = 0; S < _.length; S += 1) nn(_[S], g, n);
          for (S = 0; S < E.length; S += 1) v.delete(E[S]);
          bt(e, q.prev, C.next), bt(e, f, q), bt(e, C, g), c = g, f = C, L -= 1, _ = [], E = [];
        } else v.delete(b), nn(b, c, n), bt(e, b.prev, b.next), bt(e, b, f === null ? e.effect.first : f.next), bt(e, f, b), f = b;
        continue;
      }
      for (_ = [], E = []; c !== null && c !== b; ) (v ??= /* @__PURE__ */ new Set()).add(c), E.push(c), c = en(c.next);
      if (c === null) continue;
    }
    b.f & nt || _.push(b), f = b, c = en(b.next);
  }
  if (e.outrogroups !== null) {
    for (const W of e.outrogroups) W.pending.size === 0 && (Jn(e, On(W.done)), e.outrogroups?.delete(W));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (c !== null || v !== void 0) {
    var D = [];
    if (v !== void 0) for (b of v) b.f & xe || D.push(b);
    for (; c !== null; ) !(c.f & xe) && c !== e.fallback && D.push(c), c = en(c.next);
    var H = D.length;
    if (H > 0) {
      var Q = r & Mr && l === 0 ? n : null;
      if (i) {
        for (L = 0; L < H; L += 1) D[L].nodes?.a?.measure();
        for (L = 0; L < H; L += 1) D[L].nodes?.a?.fix();
      }
      Ha(e, D, Q);
    }
  }
  i && xt(() => {
    if (h !== void 0) for (b of h) b.nodes?.a?.apply();
  });
}
function Ka(e, t, n, r, s, i, l, o) {
  var c = l & Hs ? l & Xs ? Lt(n) : ga(n, false, false) : null, v = l & Ys ? Lt(s) : null;
  return { v: c, i: v, e: Ne(() => (i(t, c ?? n, v ?? s, o), () => {
    e.delete(r);
  })) };
}
function nn(e, t, n) {
  if (e.nodes) for (var r = e.nodes.start, s = e.nodes.end, i = t && !(t.f & nt) ? t.nodes.start : n; r !== null; ) {
    var l = pn(r);
    if (i.before(r), r === s) return;
    r = l;
  }
}
function bt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const mr = [...` 	
\r\f\xA0\v\uFEFF`];
function Xa(e, t, n) {
  var r = e == null ? "" : "" + e;
  if (n) {
    for (var s of Object.keys(n)) if (n[s]) r = r ? r + " " + s : s;
    else if (r.length) for (var i = s.length, l = 0; (l = r.indexOf(s, l)) >= 0; ) {
      var o = l + i;
      (l === 0 || mr.includes(r[l - 1])) && (o === r.length || mr.includes(r[o])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(o + 1) : l = o;
    }
  }
  return r === "" ? null : r;
}
function Ja(e, t) {
  return e == null ? null : String(e);
}
function tt(e, t, n, r, s, i) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var o = Xa(n, r, i);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (i && s !== i) for (var c in i) {
    var v = !!i[c];
    (s == null || v !== !!s[c]) && e.classList.toggle(c, v);
  }
  return i;
}
function Vt(e, t, n, r) {
  var s = e.__style;
  if (s !== t) {
    var i = Ja(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return r;
}
const Za = Symbol("is custom element"), Qa = Symbol("is html");
function Se(e, t, n, r) {
  var s = $a(e);
  s[t] !== (s[t] = n) && (t === "loading" && (e[Ds] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ei(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function $a(e) {
  return e.__attributes ??= { [Za]: e.nodeName.includes("-"), [Qa]: e.namespaceURI === Rr };
}
var wr = /* @__PURE__ */ new Map();
function ei(e) {
  var t = e.getAttribute("is") || e.nodeName, n = wr.get(t);
  if (n) return n;
  wr.set(t, n = []);
  for (var r, s = e, i = Element.prototype; i !== s; ) {
    r = Ts(s);
    for (var l in r) r[l].set && n.push(l);
    s = kr(s);
  }
  return n;
}
function fs(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Aa(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Nn(e) ? Ln(i) : i, n(i), X !== null && r.add(X), await ja(), i !== (i = t())) {
      var l = e.selectionStart, o = e.selectionEnd, c = e.value.length;
      if (e.value = i ?? "", o !== null) {
        var v = e.value.length;
        l === o && o === c && v > c ? (e.selectionStart = v, e.selectionEnd = v) : (e.selectionStart = l, e.selectionEnd = Math.min(o, v));
      }
    }
  }), cr(t) == null && e.value && (n(Nn(e) ? Ln(e.value) : e.value), X !== null && r.add(X)), ar(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = X;
      if (r.has(i)) return;
    }
    Nn(e) && s === Ln(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Nn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ln(e) {
  return e === "" ? null : +e;
}
function yr(e, t) {
  return e === t || e?.[xn] === t;
}
function Cn(e = {}, t, n, r) {
  var s = Ie.r, i = Z;
  return Ma(() => {
    var l, o;
    return ar(() => {
      l = o, o = [], cr(() => {
        e !== n(...o) && (t(e, ...o), l && yr(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let c = i;
      for (; c !== s && c.parent !== null && c.parent.f & Vn; ) c = c.parent;
      const v = () => {
        o && yr(n(...o), e) && t(null, ...o);
      }, f = c.teardown;
      c.teardown = () => {
        v(), f?.();
      };
    };
  }), e;
}
function ti(e, t, n, r) {
  var s = r, i = true, l = () => (i && (i = false, s = r), s), o;
  o = e[t], o === void 0 && r !== void 0 && (o = l());
  var c;
  return c = () => {
    var v = e[t];
    return v === void 0 ? l() : (i = true, v);
  }, c;
}
const ni = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ni);
function ri() {
  V._start();
}
function si(e) {
  try {
    const s = V.__wbindgen_add_to_stack_pointer(-16), i = Bt(e, V.__wbindgen_export), l = ze;
    V.decode_wav(s, i, l);
    var t = ae().getInt32(s + 4 * 0, true), n = ae().getInt32(s + 4 * 1, true), r = ae().getInt32(s + 4 * 2, true);
    if (r) throw Fe(n);
    return Fe(t);
  } finally {
    V.__wbindgen_add_to_stack_pointer(16);
  }
}
function ai(e) {
  let t, n;
  try {
    const i = V.__wbindgen_add_to_stack_pointer(-16), l = Bt(e, V.__wbindgen_export), o = ze;
    V.detect_format(i, l, o);
    var r = ae().getInt32(i + 4 * 0, true), s = ae().getInt32(i + 4 * 1, true);
    return t = r, n = s, sn(r, s);
  } finally {
    V.__wbindgen_add_to_stack_pointer(16), V.__wbindgen_export3(t, n, 1);
  }
}
function ii(e, t) {
  try {
    const i = V.__wbindgen_add_to_stack_pointer(-16), l = Bt(e, V.__wbindgen_export), o = ze;
    V.entropy_blocks(i, l, o, t);
    var n = ae().getInt32(i + 4 * 0, true), r = ae().getInt32(i + 4 * 1, true), s = vi(n, r).slice();
    return V.__wbindgen_export3(n, r * 4, 4), s;
  } finally {
    V.__wbindgen_add_to_stack_pointer(16);
  }
}
function li(e, t) {
  try {
    const i = V.__wbindgen_add_to_stack_pointer(-16), l = Bt(e, V.__wbindgen_export), o = ze;
    V.extract_strings(i, l, o, t);
    var n = ae().getInt32(i + 4 * 0, true), r = ae().getInt32(i + 4 * 1, true), s = ae().getInt32(i + 4 * 2, true);
    if (s) throw Fe(r);
    return Fe(n);
  } finally {
    V.__wbindgen_add_to_stack_pointer(16);
  }
}
function oi(e, t, n) {
  try {
    const l = V.__wbindgen_add_to_stack_pointer(-16), o = Bt(e, V.__wbindgen_export), c = ze;
    V.hex_rows(l, o, c, t, n);
    var r = ae().getInt32(l + 4 * 0, true), s = ae().getInt32(l + 4 * 1, true), i = di(r, s).slice();
    return V.__wbindgen_export3(r, s * 4, 4), i;
  } finally {
    V.__wbindgen_add_to_stack_pointer(16);
  }
}
function ci(e) {
  try {
    const s = V.__wbindgen_add_to_stack_pointer(-16), i = Bt(e, V.__wbindgen_export), l = ze;
    V.parse_elf(s, i, l);
    var t = ae().getInt32(s + 4 * 0, true), n = ae().getInt32(s + 4 * 1, true), r = ae().getInt32(s + 4 * 2, true);
    if (r) throw Fe(n);
    return Fe(t);
  } finally {
    V.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e) {
  try {
    const s = V.__wbindgen_add_to_stack_pointer(-16), i = Bt(e, V.__wbindgen_export), l = ze;
    V.parse_gba(s, i, l);
    var t = ae().getInt32(s + 4 * 0, true), n = ae().getInt32(s + 4 * 1, true), r = ae().getInt32(s + 4 * 2, true);
    if (r) throw Fe(n);
    return Fe(t);
  } finally {
    V.__wbindgen_add_to_stack_pointer(16);
  }
}
function us() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const r = Error(sn(t, n));
    return mt(r);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const r = String(Pt(n)), s = xr(r, V.__wbindgen_export, V.__wbindgen_export2), i = ze;
    ae().setInt32(t + 4, i, true), ae().setInt32(t + 0, s, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(sn(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let r, s;
    try {
      r = t, s = n, console.error(sn(t, n));
    } finally {
      V.__wbindgen_export3(r, s, 1);
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
    Pt(t)[Fe(n)] = Fe(r);
  }, __wbg_set_78ea6a19f4818587: function(t, n, r) {
    Pt(t)[n >>> 0] = Fe(r);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const r = Pt(n).stack, s = xr(r, V.__wbindgen_export, V.__wbindgen_export2), i = ze;
    ae().setInt32(t + 4, i, true), ae().setInt32(t + 0, s, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return mt(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const r = sn(t, n);
    return mt(r);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return mt(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = Pt(t);
    return mt(n);
  }, __wbindgen_object_drop_ref: function(t) {
    Fe(t);
  } } };
}
function mt(e) {
  un === dt.length && dt.push(dt.length + 1);
  const t = un;
  return un = dt[t], dt[t] = e, t;
}
function ui(e) {
  e < 1028 || (dt[e] = un, un = e);
}
function vi(e, t) {
  return e = e >>> 0, _i().subarray(e / 4, e / 4 + t);
}
function di(e, t) {
  e = e >>> 0;
  const n = ae(), r = [];
  for (let s = e; s < e + 4 * t; s += 4) r.push(Fe(n.getUint32(s, true)));
  return r;
}
let Ct = null;
function ae() {
  return (Ct === null || Ct.buffer.detached === true || Ct.buffer.detached === void 0 && Ct.buffer !== V.memory.buffer) && (Ct = new DataView(V.memory.buffer)), Ct;
}
let rn = null;
function _i() {
  return (rn === null || rn.byteLength === 0) && (rn = new Float32Array(V.memory.buffer)), rn;
}
function sn(e, t) {
  return hi(e >>> 0, t);
}
let an = null;
function fn() {
  return (an === null || an.byteLength === 0) && (an = new Uint8Array(V.memory.buffer)), an;
}
function Pt(e) {
  return dt[e];
}
let dt = new Array(1024).fill(void 0);
dt.push(void 0, null, true, false);
let un = dt.length;
function Bt(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return fn().set(e, n / 1), ze = e.length, n;
}
function xr(e, t, n) {
  if (n === void 0) {
    const o = vn.encode(e), c = t(o.length, 1) >>> 0;
    return fn().subarray(c, c + o.length).set(o), ze = o.length, c;
  }
  let r = e.length, s = t(r, 1) >>> 0;
  const i = fn();
  let l = 0;
  for (; l < r; l++) {
    const o = e.charCodeAt(l);
    if (o > 127) break;
    i[s + l] = o;
  }
  if (l !== r) {
    l !== 0 && (e = e.slice(l)), s = n(s, r, r = l + e.length * 3, 1) >>> 0;
    const o = fn().subarray(s + l, s + r), c = vn.encodeInto(e, o);
    l += c.written, s = n(s, r, l, 1) >>> 0;
  }
  return ze = l, s;
}
function Fe(e) {
  const t = Pt(e);
  return ui(e), t;
}
let kn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
kn.decode();
const pi = 2146435072;
let qn = 0;
function hi(e, t) {
  return qn += t, qn >= pi && (kn = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), kn.decode(), qn = t), kn.decode(fn().subarray(e, e + t));
}
const vn = new TextEncoder();
"encodeInto" in vn || (vn.encodeInto = function(e, t) {
  const n = vn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let ze = 0, V;
function vs(e, t) {
  return V = e.exports, Ct = null, rn = null, an = null, V.__wbindgen_start(), V;
}
async function gi(e, t) {
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
function bi(e) {
  if (V !== void 0) return V;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = us();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return vs(n);
}
async function ds(e) {
  if (V !== void 0) return V;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = us();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: r } = await gi(await e, t);
  return vs(n);
}
const mi = Object.freeze(Object.defineProperty({ __proto__: null, _start: ri, decode_wav: si, default: ds, detect_format: ai, entropy_blocks: ii, extract_strings: li, hex_rows: oi, initSync: bi, parse_elf: ci, parse_gba: fi }, Symbol.toStringTag, { value: "Module" }));
let Bn = null;
function gn() {
  return Bn || (Bn = ds()), Bn.then(() => mi);
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
const Zn = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Pn = 65536, Un = Zn.length * 4;
function ps() {
  const n = 84 + Un, r = new ArrayBuffer(n), s = new DataView(r), i = new Uint8Array(r);
  i[0] = 127, i[1] = 69, i[2] = 76, i[3] = 70, i[4] = 1, i[5] = 1, i[6] = 1, s.setUint16(16, 2, true), s.setUint16(18, 243, true), s.setUint32(20, 1, true), s.setUint32(24, Pn, true), s.setUint32(28, 52, true), s.setUint32(32, 0, true), s.setUint32(36, 0, true), s.setUint16(40, 52, true), s.setUint16(42, 32, true), s.setUint16(44, 1, true), s.setUint16(46, 0, true), s.setUint16(48, 0, true), s.setUint16(50, 0, true), s.setUint32(52, 1, true), s.setUint32(56, 84, true), s.setUint32(60, Pn, true), s.setUint32(64, Pn, true), s.setUint32(68, Un, true), s.setUint32(72, Un, true), s.setUint32(76, 5, true), s.setUint32(80, 4096, true);
  for (let l = 0; l < Zn.length; l++) s.setUint32(84 + l * 4, Zn[l], true);
  return new Uint8Array(r);
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
function Ri(e, t) {
  lt(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let r = U(false), s = U(""), i = U(rt([])), l = U(""), o = U(rt({}));
  async function c(y) {
    p(s, "");
    try {
      const N = await gs(y);
      t.onfile?.(N);
    } catch (N) {
      p(s, N.message || String(N), true);
    }
  }
  function v(y) {
    y.preventDefault(), p(r, false);
    const N = y.dataTransfer?.files?.[0];
    N && c(N);
  }
  function f(y) {
    y.preventDefault(), p(r, true);
  }
  function h() {
    p(r, false);
  }
  function _(y) {
    const N = y.target.files?.[0];
    N && c(N);
  }
  async function E(y) {
    if (!n.test(y)) {
      p(s, `sample blocked: bad name "${y}"`);
      return;
    }
    p(s, ""), p(l, `fetching ${y}\u2026`);
    try {
      const N = await fetch(`../v1/samples/${encodeURIComponent(y)}`);
      if (!N.ok) {
        p(s, `fetch failed: ${N.status}`), p(l, "");
        return;
      }
      p(l, `reading ${y}\u2026`);
      const z = new Uint8Array(await N.arrayBuffer());
      p(l, ""), t.onfile?.({ name: y, bytes: z });
    } catch (N) {
      p(s, String(N), true), p(l, "");
    }
  }
  function x() {
    p(s, ""), t.onfile?.({ name: hs, bytes: ps() });
  }
  Ue(() => {
    let y = false;
    return (async () => {
      try {
        const N = await fetch("../v1/samples/manifest.json");
        if (!N.ok) return;
        const z = await N.json();
        if (y || !Array.isArray(z)) return;
        p(i, z, true);
        const te = await gn();
        if (y) return;
        await Promise.all(z.map(async (w) => {
          if (n.test(w.file)) try {
            const O = await fetch(`../v1/samples/${encodeURIComponent(w.file)}`);
            if (!O.ok) return;
            const T = new Uint8Array(await O.arrayBuffer());
            if (y) return;
            const A = Math.max(1, Math.ceil(T.length / 12)), M = te.entropy_blocks(T, A);
            p(o, { ...a(o), [w.file]: Array.from(M) }, true);
          } catch {
          }
        }));
      } catch {
      }
    })(), () => {
      y = true;
    };
  });
  var F = Mi(), b = u(F);
  let L;
  var I = d(u(b), 4), g = u(I), S = u(g), q = d(g, 2), C = d(I, 2);
  {
    var D = (y) => {
      var N = ki(), z = d(u(N), 2);
      qe(z, 21, () => a(i), Le, (O, T) => {
        var A = Ai(), M = u(A), Y = u(M), ee = d(M, 2), ie = u(ee);
        {
          var le = (ce) => {
            var J = Rn(), ue = pt(J);
            qe(ue, 17, () => a(o)[a(T).file], Le, (Ee, Ge) => {
              var Me = xi();
              K((fe) => Vt(Me, `height: ${fe ?? ""}px`), [() => Math.max(2, a(Ge) * 14)]), R(Ee, Me);
            }), R(ce, J);
          }, be = (ce) => {
            var J = Rn(), ue = pt(J);
            qe(ue, 16, () => Array(12), Le, (Ee, Ge, Me) => {
              var fe = Ei();
              Vt(fe, `animation-delay: ${Me * 40}ms`), R(Ee, fe);
            }), R(ce, J);
          };
          ne(ie, (ce) => {
            a(o)[a(T).file] ? ce(le) : ce(be, -1);
          });
        }
        K(() => {
          Se(A, "title", a(T).insns > 0 ? `${a(T).desc} \u2014 ${a(T).insns} instructions` : a(T).desc), m(Y, a(T).file);
        }), se("click", A, () => E(a(T).file)), R(O, A);
      });
      var te = d(z, 2), w = u(te);
      K((O) => m(w, O), [() => a(i).map((O) => `${O.file} \u2014 ${O.desc}`).join("  \xB7  ")]), R(y, N);
    };
    ne(C, (y) => {
      a(i).length && y(D);
    });
  }
  var H = d(C, 2);
  {
    var Q = (y) => {
      var N = Si(), z = u(N);
      K(() => m(z, a(l))), R(y, N);
    };
    ne(H, (y) => {
      a(l) && y(Q);
    });
  }
  var W = d(H, 2);
  {
    var B = (y) => {
      var N = Ti(), z = u(N);
      K(() => m(z, a(s))), R(y, N);
    };
    ne(W, (y) => {
      a(s) && y(B);
    });
  }
  K(() => L = tt(b, 1, "zone svelte-1i6c60u", null, L, { over: a(r) })), Wt("drop", b, v), Wt("dragover", b, f), Wt("dragleave", b, h), se("change", S, _), se("click", q, x), R(e, F), ot();
}
Zt(["change", "click"]);
var Ci = j('<span class="ct svelte-etynpr"> </span>'), Oi = j('<span class="ct svelte-etynpr"> </span>'), Fi = j('<span class="ct svelte-etynpr"> </span>'), Ii = j('<span class="ct svelte-etynpr"> </span>'), ji = j("<button> <!> <!> <!> <!></button>"), Di = j('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), Ni = j('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Li = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), qi = j('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Bi = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Pi = j('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Ui = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Wi = j('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Vi = j('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), zi = j('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Gi(e, t) {
  lt(t, true);
  let n = U("summary");
  const r = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let s = U(""), i = _t(() => {
    if (!t.strings) return [];
    const I = a(s).trim().toLowerCase();
    return I ? t.strings.filter((g) => g.text.toLowerCase().includes(I)) : t.strings;
  });
  const l = 80, o = _t(() => t.report ? Math.max(1, ...t.report.sections.map((I) => Number(I.size) || 0)) : 1);
  function c(I) {
    return "0x" + Number(I).toString(16).toUpperCase().padStart(8, "0");
  }
  var v = zi(), f = u(v);
  qe(f, 21, () => r, Le, (I, g) => {
    var S = _t(() => Fs(a(g), 2));
    let q = () => a(S)[0], C = () => a(S)[1];
    var D = ji();
    let H;
    var Q = u(D), W = d(Q);
    {
      var B = (T) => {
        var A = Ci(), M = u(A);
        K(() => m(M, t.report.sections.length)), R(T, A);
      };
      ne(W, (T) => {
        q() === "sections" && T(B);
      });
    }
    var y = d(W, 2);
    {
      var N = (T) => {
        var A = Oi(), M = u(A);
        K(() => m(M, t.report.segments.length)), R(T, A);
      };
      ne(y, (T) => {
        q() === "segments" && T(N);
      });
    }
    var z = d(y, 2);
    {
      var te = (T) => {
        var A = Fi(), M = u(A);
        K(() => m(M, t.report.symbols.length)), R(T, A);
      };
      ne(z, (T) => {
        q() === "symbols" && T(te);
      });
    }
    var w = d(z, 2);
    {
      var O = (T) => {
        var A = Ii(), M = u(A);
        K(() => m(M, t.strings.length)), R(T, A);
      };
      ne(w, (T) => {
        q() === "strings" && t.strings && T(O);
      });
    }
    K(() => {
      H = tt(D, 1, "tab svelte-etynpr", null, H, { active: a(n) === q() }), m(Q, `${C() ?? ""} `);
    }), se("click", D, () => p(n, q(), true)), R(I, D);
  });
  var h = d(f, 2), _ = u(h);
  {
    var E = (I) => {
      var g = Di(), S = d(u(g), 2), q = u(S), C = d(S, 4), D = u(C), H = d(C, 4), Q = u(H), W = d(H, 4), B = u(W), y = d(W, 4), N = u(y), z = d(y, 4), te = u(z), w = d(z, 4), O = u(w), T = d(w, 4), A = u(T), M = d(T, 4), Y = u(M);
      K(() => {
        m(q, t.report.summary.class), m(D, t.report.summary.data), m(Q, t.report.summary.osabi), m(B, t.report.summary.kind), m(N, t.report.summary.machine), m(te, t.report.summary.entry), m(O, t.report.summary.n_sections), m(A, t.report.summary.n_segments), m(Y, t.report.summary.n_symbols);
      }), R(I, g);
    }, x = (I) => {
      var g = Li(), S = d(u(g));
      qe(S, 21, () => t.report.sections, Le, (q, C) => {
        var D = Ni(), H = u(D), Q = u(H), W = d(H), B = u(W), y = d(W), N = u(y), z = d(y), te = u(z), w = d(z), O = u(w), T = d(w), A = u(T), M = d(T), Y = u(M), ee = d(M), ie = u(ee);
        K((le) => {
          Se(D, "title", `Jump to offset ${a(C).offset ?? ""} in HEX`), m(Q, a(C).idx), m(B, a(C).name || "\u2014"), m(N, a(C).kind), m(te, a(C).addr), m(O, a(C).offset), m(A, a(C).size), m(Y, a(C).flags), Vt(ie, `width: ${le ?? ""}px`);
        }, [() => Math.max(1, Number(a(C).size) / a(o) * l)]), se("click", D, () => t.onJumpToOffset?.(parseInt(a(C).offset, 16))), R(q, D);
      }), R(I, g);
    }, F = (I) => {
      var g = Bi(), S = d(u(g));
      qe(S, 21, () => t.report.segments, Le, (q, C) => {
        var D = qi(), H = u(D), Q = u(H), W = d(H), B = u(W), y = d(W), N = u(y), z = d(y), te = u(z), w = d(z), O = u(w), T = d(w), A = u(T), M = d(T), Y = u(M);
        K(() => {
          Se(D, "title", `Jump to offset ${a(C).offset ?? ""} in HEX`), m(Q, a(C).idx), m(B, a(C).kind), m(N, a(C).vaddr), m(te, a(C).offset), m(O, a(C).filesz), m(A, a(C).memsz), m(Y, a(C).flags);
        }), se("click", D, () => t.onJumpToOffset?.(parseInt(a(C).offset, 16))), R(q, D);
      }), R(I, g);
    }, b = (I) => {
      var g = Ui(), S = d(u(g));
      qe(S, 21, () => t.report.symbols, Le, (q, C) => {
        var D = Pi(), H = u(D), Q = u(H), W = d(H), B = u(W), y = d(W), N = u(y), z = d(y), te = u(z), w = d(z), O = u(w);
        K(() => {
          m(Q, a(C).name), m(B, a(C).bind), m(N, a(C).kind), m(te, a(C).value), m(O, a(C).size);
        }), R(q, D);
      }), R(I, g);
    }, L = (I) => {
      var g = Vi(), S = pt(g), q = u(S), C = d(q, 2), D = u(C), H = d(S, 2), Q = d(u(H));
      qe(Q, 21, () => a(i), Le, (W, B) => {
        var y = Wi(), N = u(y), z = u(N), te = d(N), w = u(te);
        K((O, T) => {
          Se(y, "title", `Jump to offset ${O ?? ""} in HEX`), m(z, T), m(w, a(B).text);
        }, [() => c(a(B).offset), () => c(a(B).offset)]), se("click", y, () => t.onJumpToOffset?.(a(B).offset)), R(W, y);
      }), K(() => m(D, `${a(i).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), fs(q, () => a(s), (W) => p(s, W)), R(I, g);
    };
    ne(_, (I) => {
      a(n) === "summary" ? I(E) : a(n) === "sections" ? I(x, 1) : a(n) === "segments" ? I(F, 2) : a(n) === "symbols" ? I(b, 3) : a(n) === "strings" && I(L, 4);
    });
  }
  R(e, v), ot();
}
Zt(["click"]);
var Hi = j('<span class="strip-col svelte-14j5q0g"></span>'), Yi = j('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), Ki = j('<span role="presentation"> </span>'), Xi = j('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>\u25C0 PAGE</button> <button>\u25B2 ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>\u25BC ROW</button> <button>PAGE \u25B6</button></div></div> <!> <pre class="grid svelte-14j5q0g"></pre></div>');
function Ji(e, t) {
  lt(t, true);
  let n = ti(t, "jumpTo", 3, null), r = U(0);
  const s = 16 * 32;
  let i = U(rt([])), l = U(null), o = U(rt([])), c = U(0), v = U(""), f = U(null), h = U(0), _ = U(0), E = U(null);
  const x = 400;
  Ue(() => {
    let A = false;
    return gn().then((M) => {
      if (A) return;
      p(l, M, true), p(c, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), p(o, t.bytes ? a(l).entropy_blocks(t.bytes, a(c)) : [], true), b();
    }), () => {
      A = true;
    };
  }), Ue(() => {
    if (n() == null) return;
    const A = Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Number(n()) | 0)), M = Math.floor(A / 16) * 16, Y = Math.floor(M / s) * s;
    p(r, Y), b(), p(f, M), p(h, performance.now() + x), ma(_), requestAnimationFrame(() => {
      const ee = a(F);
      if (!ee) return;
      const ie = ee.querySelector(`[data-row-off="${M}"]`);
      if (!ie) return;
      const le = ee.getBoundingClientRect(), ce = ie.getBoundingClientRect().top - le.top - le.height / 3;
      ee.scrollTo({ top: ee.scrollTop + ce, behavior: "smooth" });
    });
  }), Ue(() => {
    if (a(_) === 0) return;
    let A = 0;
    const M = () => {
      if (performance.now() >= a(h)) {
        p(f, null);
        return;
      }
      p(_, a(_) + 1 & 4095), A = requestAnimationFrame(M);
    };
    return A = requestAnimationFrame(M), () => cancelAnimationFrame(A);
  });
  let F = U(null);
  function b() {
    !a(l) || !t.bytes || p(i, a(l).hex_rows(t.bytes, a(r), s), true);
  }
  function L(A) {
    p(r, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, a(r) + A)), true), p(r, Math.floor(a(r) / 16) * 16), b();
  }
  function I(A) {
    A.preventDefault();
    let M = a(v).trim();
    if (!M) return;
    (M.startsWith("0x") || M.startsWith("0X")) && (M = M.slice(2));
    const Y = parseInt(M, 16);
    Number.isFinite(Y) && (p(r, Math.max(0, Math.min((t.bytes?.length ?? 1) - 1, Y)), true), p(r, Math.floor(a(r) / 16) * 16), b());
  }
  function g(A) {
    if (!a(o).length || !t.bytes) return;
    const Y = A.currentTarget.getBoundingClientRect(), ee = Math.max(0, Math.min(1, (A.clientX - Y.left) / Y.width)), ie = Math.floor(ee * t.bytes.length);
    p(r, Math.floor(ie / 16) * 16), b();
  }
  let S = _t(() => t.bytes && t.bytes.length ? a(r) / t.bytes.length : 0);
  function q(A, M) {
    if (a(f) == null || A !== a(f)) return 0;
    const Y = a(h) - performance.now();
    return Y <= 0 ? 0 : Y / x;
  }
  let C = _t(() => {
    const A = [];
    for (let M = 0; M < a(i).length; M++) A.push({ off: a(r) + M * 16, text: a(i)[M] });
    return A;
  });
  var D = Xi(), H = u(D), Q = d(u(H), 2), W = u(Q), B = d(W, 2), y = d(B, 2), N = d(u(y), 2), z = d(y, 2), te = d(z, 2), w = d(H, 2);
  {
    var O = (A) => {
      var M = Yi(), Y = d(u(M), 2), ee = u(Y);
      qe(ee, 17, () => a(o), Le, (ce, J) => {
        var ue = Hi();
        K((Ee) => Vt(ue, `height: ${Ee ?? ""}%; opacity: ${0.35 + a(J) * 0.65}`), [() => Math.max(2, a(J) * 100)]), R(ce, ue);
      });
      var ie = d(ee, 2), le = d(Y, 2), be = u(le);
      K((ce) => {
        Vt(ie, `left: ${a(S) * 100}%`), m(be, `${ce ?? ""} B / col`);
      }, [() => a(c).toLocaleString()]), se("click", Y, g), R(A, M);
    };
    ne(w, (A) => {
      a(o).length > 1 && A(O);
    });
  }
  var T = d(w, 2);
  qe(T, 21, () => a(C), Le, (A, M, Y) => {
    var ee = Ki();
    let ie;
    var le = u(ee);
    K((be) => {
      ie = tt(ee, 1, "hex-row svelte-14j5q0g", null, ie, { hover: a(E) === Y, flash: a(M).off === a(f) }), Se(ee, "data-row-off", a(M).off), Vt(ee, be), m(le, `${a(M).text ?? ""}
`);
    }, [() => a(M).off === a(f) ? `--flash-a: ${q(a(M).off, a(_))}` : ""]), Wt("mouseenter", ee, () => p(E, Y, true)), Wt("mouseleave", ee, () => a(E) === Y && p(E, null)), R(A, ee);
  }), Cn(T, (A) => p(F, A), () => a(F)), K((A) => Se(N, "placeholder", A), [() => a(r).toString(16).padStart(8, "0").toUpperCase()]), se("click", W, () => L(-s)), se("click", B, () => L(-16)), Wt("submit", y, I), fs(N, () => a(v), (A) => p(v, A)), se("click", z, () => L(16)), se("click", te, () => L(s)), R(e, D), ot();
}
Zt(["click"]);
var Zi = j('<span class="w-meta svelte-59bj26"> </span>'), Qi = j('<div class="w-empty svelte-59bj26"> </div>'), $i = j('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), el = j('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), tl = j('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), nl = j('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function rl(e, t) {
  lt(t, true);
  let n = U(null), r = U(""), s = U(null), i = U(null), l = null, o = null, c = null, v = 0, f = 0, h = 0, _ = U("0:00 / 0:00");
  function E(w) {
    return "0x" + (Number(w) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function x(w) {
    return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KiB` : `${(w / 1024 / 1024).toFixed(2)} MiB`;
  }
  function F(w) {
    if (w < 1) return `${(w * 1e3).toFixed(0)} ms`;
    if (w < 60) return `${w.toFixed(2)} s`;
    const O = Math.floor(w / 60), T = w - O * 60;
    return `${O}m ${T.toFixed(1)}s`;
  }
  function b(w) {
    return w.replace(/\s+$/g, "");
  }
  async function L(w) {
    if (p(r, ""), !w) {
      p(n, null);
      return;
    }
    try {
      const T = (await gn()).decode_wav(w);
      p(n, T, true), c = null, p(_, `0:00 / ${F(T.duration)}`), requestAnimationFrame(() => I({ playhead: 0 }));
    } catch (O) {
      console.error("[scry/wave] decode failed", O), p(n, null), p(r, String(O?.message || O), true);
    }
  }
  function I({ playhead: w = null } = {}) {
    if (!a(s) || !a(n)) return;
    const O = window.devicePixelRatio || 1, T = a(s).getBoundingClientRect(), A = Math.max(1, Math.floor(T.width * O)), M = Math.max(1, Math.floor(T.height * O));
    a(s).width = A, a(s).height = M;
    const Y = getComputedStyle(a(s)), ee = Y.getPropertyValue("--w-bg").trim() || "#000", ie = Y.getPropertyValue("--w-grid").trim() || "#333", le = Y.getPropertyValue("--w-peak").trim() || "#888", be = Y.getPropertyValue("--w-rms").trim() || "#bcd", ce = Y.getPropertyValue("--w-accent").trim() || "#9fe3c7", J = a(s).getContext("2d");
    J.fillStyle = ee, J.fillRect(0, 0, A, M), J.strokeStyle = ie, J.lineWidth = 1;
    const ue = M / 2;
    for (const fe of [0.25, 0.5, 0.75]) {
      const Re = Math.floor(M * fe) + 0.5;
      J.beginPath(), J.moveTo(0, Re), J.lineTo(A, Re), J.stroke();
    }
    const Ee = a(n).envelope, Ge = Ee.length, Me = A / Ge;
    for (let fe = 0; fe < Ge; fe++) {
      const Re = Ee[fe], Qe = Math.floor(fe * Me), $e = Math.max(1, Math.floor(Me) - 1), Ce = ue - Re.max * ue, He = ue - Re.min * ue;
      J.fillStyle = le, J.fillRect(Qe, Math.floor(Ce), $e, Math.max(1, Math.ceil(He - Ce)));
      const Ye = Re.rms * ue;
      J.fillStyle = be, J.fillRect(Qe, Math.floor(ue - Ye), $e, Math.max(1, Math.ceil(2 * Ye)));
    }
    if (w != null) {
      const fe = Math.floor(w * A);
      J.strokeStyle = ce, J.lineWidth = 2 * O, J.beginPath(), J.moveTo(fe, 0), J.lineTo(fe, M), J.stroke();
    }
  }
  function g() {
    if (!a(n)) return null;
    if (c) return c;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const w = a(n).samples instanceof Float32Array ? a(n).samples : new Float32Array(a(n).samples);
    return c = l.createBuffer(1, w.length, a(n).fmt.sample_rate), c.copyToChannel(w, 0), c;
  }
  function S() {
    if (!l || !o || !a(n)) {
      h = 0;
      return;
    }
    const w = f + (l.currentTime - v), O = a(n).duration, T = Math.max(0, Math.min(1, w / O));
    I({ playhead: T }), p(_, `${F(Math.min(w, O))} / ${F(O)}`), w < O ? h = requestAnimationFrame(S) : h = 0;
  }
  function q() {
    if (h && (cancelAnimationFrame(h), h = 0), o) {
      try {
        o.stop();
      } catch {
      }
      o.disconnect(), o = null;
    }
  }
  function C(w) {
    if (!a(n)) return;
    const O = g();
    O && (q(), o = l.createBufferSource(), o.buffer = O, o.connect(l.destination), o.onended = () => {
      h && cancelAnimationFrame(h), h = 0, I({ playhead: 0 }), p(_, `0:00 / ${F(a(n).duration)}`), o = null;
    }, l.state === "suspended" && l.resume(), f = Math.max(0, Math.min(a(n).duration - 1e-3, w)), v = l.currentTime, o.start(0, f), h = requestAnimationFrame(S));
  }
  function D(w) {
    if (!a(n)) return;
    const O = a(s).getBoundingClientRect(), T = (w.clientX - O.left) / O.width;
    C(T * a(n).duration);
  }
  Ue(() => {
    const w = t.bytes;
    return L(w), () => q();
  }), Ue(() => {
    if (!a(i)) return;
    const w = new ResizeObserver(() => a(n) && I({ playhead: 0 }));
    return w.observe(a(i)), () => w.disconnect();
  });
  var H = nl(), Q = u(H), W = d(u(Q), 2);
  {
    var B = (w) => {
      var O = Zi(), T = u(O);
      K((A) => m(T, `${a(n).fmt.channels ?? ""}ch @ ${a(n).fmt.sample_rate ?? ""} Hz \xB7 ${a(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${A ?? ""}`), [() => F(a(n).duration)]), R(w, O);
    };
    ne(W, (w) => {
      a(n) && w(B);
    });
  }
  var y = d(Q, 2);
  {
    var N = (w) => {
      var O = Qi(), T = u(O);
      K(() => m(T, `Not a parseable WAV: ${a(r) ?? ""}`)), R(w, O);
    }, z = (w) => {
      var O = $i();
      R(w, O);
    }, te = (w) => {
      var O = tl(), T = pt(O), A = u(T), M = u(A), Y = u(M), ee = d(u(Y)), ie = u(ee), le = d(Y, 2), be = d(u(le)), ce = u(be), J = d(le, 2), ue = d(u(J)), Ee = u(ue), Ge = d(J, 2), Me = d(u(Ge)), fe = u(Me), Re = d(M, 2), Qe = u(Re), $e = d(u(Qe)), Ce = u($e), He = d(Qe, 2), Ye = d(u(He)), Tt = u(Ye), k = d(He, 2), P = d(u(k)), G = u(P), _e = d(k, 2), pe = d(u(_e)), Ke = u(pe), me = d(Re, 2), we = u(me), Ae = d(u(we)), ct = u(Ae), re = d(we, 2);
      qe(re, 17, () => a(n).chunks.slice(0, 4), Le, (ft, $t) => {
        var mn = el(), wn = u(mn), bs = u(wn), ms = d(wn), ws = u(ms);
        K((ys, xs, Es) => {
          m(bs, ys), m(ws, `${xs ?? ""} @ ${Es ?? ""}`);
        }, [() => b(a($t).id), () => x(a($t).size), () => E(a($t).offset)]), R(ft, mn);
      });
      var ye = d(T, 2), je = u(ye), et = d(je, 2), Mt = d(et, 2), gt = u(Mt), Qt = d(ye, 2), bn = u(Qt);
      Cn(bn, (ft) => p(s, ft), () => a(s)), Cn(Qt, (ft) => p(i, ft), () => a(i)), K((ft, $t, mn, wn) => {
        m(ie, a(n).fmt.format === 1 ? "PCM (int)" : a(n).fmt.format === 3 ? "IEEE float" : `tag ${a(n).fmt.format}`), m(ce, a(n).fmt.channels), m(Ee, `${a(n).fmt.sample_rate ?? ""} Hz`), m(fe, `${a(n).fmt.bits_per_sample ?? ""}-bit`), m(Ce, ft), m(Tt, $t), m(G, mn), m(Ke, `${wn ?? ""}/s`), m(ct, a(n).chunks.length), m(gt, a(_));
      }, [() => Number(a(n).total_frames).toLocaleString(), () => F(a(n).duration), () => x(a(n).data_len), () => x(a(n).fmt.byte_rate)]), se("click", je, () => C(0)), se("click", et, () => {
        q(), I({ playhead: 0 }), p(_, `0:00 / ${F(a(n).duration)}`);
      }), se("click", bn, D), R(w, O);
    };
    ne(y, (w) => {
      a(r) ? w(N) : a(n) ? w(te, -1) : w(z, 1);
    });
  }
  R(e, H), ot();
}
Zt(["click"]);
var sl = j('<span class="c-meta svelte-1uww35p"> </span>'), al = j('<div class="c-empty svelte-1uww35p"> </div>'), il = j('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), ll = j('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), ol = j(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), cl = j('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function fl(e, t) {
  lt(t, true);
  let n = U(null), r = U("");
  function s(g) {
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
    if (p(r, ""), !g) {
      p(n, null);
      return;
    }
    try {
      const S = await gn();
      p(n, S.parse_gba(g), true);
    } catch (S) {
      console.error("[scry/cart] parse failed", S), p(n, null), p(r, String(S?.message || S), true);
    }
  }
  Ue(() => {
    const g = t.bytes;
    c(g);
  });
  function v(g) {
    if (!t.bytes) return null;
    const S = t.bytes.subarray(g, Math.min(t.bytes.length, g + 16)), q = [], C = [];
    for (let D = 0; D < S.length; D++) q.push(s(S[D])), C.push(l(S[D])), D === 7 && q.push("");
    return { off: g, hex: q.join(" ").replace(/  /g, "  "), ascii: C.join("") };
  }
  let f = _t(() => {
    if (!t.bytes) return [];
    const g = [];
    for (let S = 160; S < 224; S += 16) {
      const q = v(S);
      q && g.push(q);
    }
    return g;
  });
  var h = cl(), _ = u(h), E = d(u(_), 2);
  {
    var x = (g) => {
      var S = sl(), q = u(S);
      K((C) => m(q, `"${(a(n).title || "(blank)") ?? ""}" \xB7 ${a(n).game_code ?? ""} \xB7 ${C ?? ""}`), [() => o(a(n).rom_size)]), R(g, S);
    };
    ne(E, (g) => {
      a(n) && g(x);
    });
  }
  var F = d(_, 2);
  {
    var b = (g) => {
      var S = al(), q = u(S);
      K(() => m(q, `parse failed: ${a(r) ?? ""}`)), R(g, S);
    }, L = (g) => {
      var S = il();
      R(g, S);
    }, I = (g) => {
      var S = ol(), q = u(S), C = d(u(q), 2), D = d(u(C)), H = u(D), Q = d(C, 2), W = d(u(Q)), B = u(W), y = d(Q, 2), N = d(u(y)), z = u(N), te = d(y, 2), w = d(u(te), 2), O = u(w), T = d(te, 2), A = d(u(T)), M = u(A), Y = d(T, 2), ee = d(u(Y)), ie = u(ee), le = d(Y, 2), be = d(u(le)), ce = u(be), J = d(le, 2), ue = d(u(J), 2), Ee = u(ue), Ge = d(J, 2), Me = d(u(Ge)), fe = u(Me), Re = d(q, 2), Qe = d(u(Re), 2);
      qe(Qe, 21, () => a(f), Le, ($e, Ce) => {
        var He = ll(), Ye = u(He), Tt = u(Ye), k = d(Ye, 2), P = u(k), G = d(k, 2), _e = u(G);
        K((pe) => {
          m(Tt, pe), m(P, a(Ce).hex), m(_e, a(Ce).ascii);
        }, [() => i(a(Ce).off)]), R($e, He);
      }), K(($e, Ce, He, Ye, Tt, k, P) => {
        m(H, a(n).title || "(blank)"), m(B, a(n).game_code || "----"), m(z, a(n).maker_code || "--"), m(O, `0x${$e ?? ""} ${a(n).fixed_ok ? "\u2713" : "\u2717"}`), m(M, `0x${Ce ?? ""}`), m(ie, `0x${He ?? ""}`), m(ce, `0x${Ye ?? ""}`), m(Ee, `stored 0x${Tt ?? ""} \xB7
            computed 0x${k ?? ""}
            ${a(n).checksum_ok ? " \u2713" : " \u2717"}`), m(fe, P);
      }, [() => s(a(n).fixed), () => s(a(n).unit_code), () => s(a(n).device_type), () => s(a(n).version), () => s(a(n).checksum), () => s(a(n).checksum_computed), () => o(a(n).rom_size)]), R(g, S);
    };
    ne(F, (g) => {
      a(r) ? g(b) : a(n) ? g(I, -1) : g(L, 1);
    });
  }
  R(e, h), ot();
}
var ul = j('<span class="g-meta svelte-1kb9ux"> </span>'), vl = j('<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div></div>');
function dl(e, t) {
  lt(t, true);
  let n, r = null, s = U(false), i = U("idle"), l = U(false);
  const o = 480, c = 320;
  function v(B) {
    return B < 1024 ? `${B} B` : B < 1024 * 1024 ? `${(B / 1024).toFixed(1)} KiB` : `${(B / (1024 * 1024)).toFixed(2)} MiB`;
  }
  function f() {
    if (r) return r;
    if (typeof window.GameBoyAdvance != "function") throw new Error("gbajs not loaded");
    if (!window.biosBin) throw new Error("biosBin not loaded");
    return r = new window.GameBoyAdvance(), r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((B, y) => console.warn("[scry/v2/game/gba]", y)), r.setCanvas(n), r.setBios(window.biosBin), r;
  }
  async function h(B) {
    p(i, "booting\u2026"), await new Promise((y) => requestAnimationFrame(y));
    try {
      const y = f();
      p(i, "copying ROM\u2026"), await new Promise((te) => requestAnimationFrame(te));
      const N = B.buffer.slice(B.byteOffset, B.byteOffset + B.byteLength);
      if (p(i, "parsing cart\u2026"), await new Promise((te) => requestAnimationFrame(te)), !y.setRom(N)) {
        p(i, "rom rejected");
        return;
      }
      p(i, "paused \xB7 click PLAY"), p(s, false), p(l, true);
    } catch (y) {
      console.error("[scry/v2/game] load failed", y), p(i, "error: " + (y?.message || y));
    }
  }
  function _() {
    !r || !r.hasRom() || a(s) || (n.focus(), r.runStable(), p(s, true), p(i, "running"));
  }
  function E() {
    !r || !r.hasRom() || (r.pause(), p(s, false), p(i, "paused"));
  }
  function x() {
    if (!r || !t.bytes) return;
    const B = a(s);
    E(), h(t.bytes).then(() => {
      B && _();
    });
  }
  Ue(() => {
    const B = t.bytes;
    n && B && (a(l) && r && r.hasRom() || requestAnimationFrame(() => h(B)));
  }), Ue(() => () => {
    if (r && a(s)) try {
      r.pause();
    } catch {
    }
  });
  var F = vl(), b = u(F), L = d(u(b), 2);
  {
    var I = (B) => {
      var y = ul(), N = u(y);
      K((z) => m(N, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${z ?? ""}`), [() => v(t.header.rom_size)]), R(B, y);
    };
    ne(L, (B) => {
      t.header && B(I);
    });
  }
  var g = d(b, 2), S = u(g);
  Se(S, "width", o), Se(S, "height", c), Cn(S, (B) => n = B, () => n);
  var q = d(g, 2), C = u(q), D = d(C, 2), H = d(D, 2), Q = d(H, 2), W = u(Q);
  K(() => {
    C.disabled = !a(l) || a(s), D.disabled = !a(l) || !a(s), H.disabled = !a(l), m(W, a(i));
  }), se("click", C, _), se("click", D, E), se("click", H, x), R(e, F), ot();
}
Zt(["click"]);
var _l = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), pl = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), hl = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), gl = j('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function bl(e, t) {
  lt(t, true);
  var n = gl(), r = u(n);
  {
    var s = (o) => {
      var c = _l();
      R(o, c);
    }, i = (o) => {
      var c = pl(), v = pt(c), f = d(u(v), 2), h = u(f), _ = d(v, 2), E = d(u(_), 2), x = u(E), F = d(_, 2), b = d(u(F), 2), L = u(b);
      K((I, g) => {
        Se(f, "title", t.file.name), m(h, t.file.name), m(x, I), m(L, g);
      }, [() => Qn(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), R(o, c);
    }, l = (o) => {
      var c = hl();
      R(o, c);
    };
    ne(r, (o) => {
      t.parsing ? o(s) : t.file ? o(i, 1) : o(l, -1);
    });
  }
  R(e, n), ot();
}
var ml = j('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function wl(e, t) {
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
    function c(_) {
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
      const E = _.dataTransfer?.files?.[0];
      if (E) try {
        const x = await gs(E);
        t.onfile?.(x);
      } catch (x) {
        t.onerror?.(x.message || String(x));
      }
    }
    return window.addEventListener("dragenter", c), window.addEventListener("dragover", v), window.addEventListener("dragleave", f), window.addEventListener("drop", h), () => {
      window.removeEventListener("dragenter", c), window.removeEventListener("dragover", v), window.removeEventListener("dragleave", f), window.removeEventListener("drop", h);
    };
  });
  var i = Rn(), l = pt(i);
  {
    var o = (c) => {
      var v = ml();
      R(c, v);
    };
    ne(l, (c) => {
      a(n) && c(o);
    });
  }
  R(e, i), ot();
}
var yl = j('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), xl = j('<span class="s-badge entrance svelte-1n46o8q"> </span>'), El = j('<span class="s-summary svelte-1n46o8q"> </span>'), Al = j('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), kl = j('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), Sl = j('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Tl = j('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), Ml = j('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Rl = j('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), Cl = j('<p class="err svelte-1n46o8q"> </p>'), Ol = j('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), Fl = j("<!> <!>", 1), Il = j('<span class="s-hint svelte-1n46o8q"> </span>'), jl = j('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function Dl(e, t) {
  lt(t, true);
  let n = U(null), r = U(null), s = U(null), i = U(null), l = U(null), o = U(null), c = U(null), v = U(""), f = U("inspect"), h = U(rt(_s())), _ = U(false), E = U(null), x = U(""), F = U(false);
  const b = "scry \xB7 awaiting binary", L = "scry-booted-v2", I = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, g = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  Ue(() => {
    function k(P) {
      if (P.origin !== location.origin) return;
      const G = P.data;
      G && (G.type === "scry-theme" && (G.value === "light" || G.value === "dark") ? (document.documentElement.setAttribute("data-theme", G.value), p(h, G.value, true)) : G.type === "scry-load-demo" && H());
    }
    return window.addEventListener("message", k), () => window.removeEventListener("message", k);
  });
  async function S({ name: k, bytes: P }) {
    p(n, { name: k, bytes: P }, true), p(v, ""), p(s, null), p(i, null), p(l, null), p(o, null), p(r, null), p(c, null), p(_, true);
    try {
      const G = await gn();
      if (p(r, G.detect_format(P), true), a(r) === "elf") p(s, G.parse_elf(P), true), p(f, "inspect");
      else if (a(r) === "wav") {
        try {
          p(i, G.decode_wav(P), true);
        } catch {
        }
        p(f, "wave");
      } else if (a(r) === "gba") {
        try {
          p(l, G.parse_gba(P), true);
        } catch {
        }
        p(f, "game");
      } else p(f, "hex");
      p(o, G.extract_strings(P, 4), true);
      const _e = Math.max(64, Math.ceil(P.length / 256)), pe = G.entropy_blocks(P, _e);
      if (pe.length) {
        let Ke = 0;
        for (let me = 0; me < pe.length; me++) Ke += pe[me];
        p(c, Ke / pe.length * 8);
      }
    } catch (G) {
      p(v, String(G), true);
    } finally {
      p(_, false);
    }
  }
  function q() {
    p(n, null), p(s, null), p(i, null), p(l, null), p(o, null), p(r, null), p(v, ""), p(c, null);
  }
  function C(k) {
    p(v, k, true);
  }
  function D() {
    p(h, yi(), true);
  }
  function H() {
    S({ name: hs, bytes: ps() });
  }
  function Q(k) {
    p(f, "hex"), p(E, { o: k, t: performance.now() }, true);
  }
  let W = _t(() => {
    if (!a(n)) return null;
    if (a(s)) {
      const k = a(s).summary;
      return [a(r)?.toUpperCase(), k.machine, k.class, k.kind].filter(Boolean).join(" \xB7 ");
    }
    return (a(r) || "raw").toUpperCase();
  }), B = _t(() => {
    if (!a(n)) return null;
    if (a(s)) {
      const k = a(s).summary, P = [];
      return k.class && k.machine ? P.push(`${k.class} ${k.machine}`) : k.machine && P.push(k.machine), P.push(`${a(s).sections.length} sections`), P.push(`${a(s).symbols.length} symbols`), a(c) != null && P.push(`avg entropy ${a(c).toFixed(1)} bits`), P.join(" \xB7 ");
    }
    if (a(i)) {
      const k = a(i).fmt, P = a(i).duration < 1 ? `${(a(i).duration * 1e3).toFixed(0)} ms` : `${a(i).duration.toFixed(2)} s`, G = [`${k.channels}ch ${k.sample_rate} Hz`, `${k.bits_per_sample}-bit`, P];
      return a(c) != null && G.push(`avg entropy ${a(c).toFixed(1)} bits`), G.join(" \xB7 ");
    }
    if (a(l)) {
      const k = ["GBA cart", `"${a(l).title || "(blank)"}"`, `code ${a(l).game_code}`];
      return a(c) != null && k.push(`avg entropy ${a(c).toFixed(1)} bits`), k.join(" \xB7 ");
    }
    return a(c) != null ? `bytes only \xB7 entropy ${a(c).toFixed(1)} bits` : null;
  });
  Ue(() => {
    if (sessionStorage.getItem(L)) {
      p(x, b), p(F, true);
      return;
    }
    let k = 0;
    const P = setInterval(() => {
      if (k++, p(x, b.slice(0, k), true), k >= b.length) {
        clearInterval(P), p(F, true);
        try {
          sessionStorage.setItem(L, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(P);
  });
  var y = jl(), N = pt(y);
  wl(N, { onfile: S, onerror: C });
  var z = d(N, 2);
  let te;
  var w = u(z), O = u(w);
  {
    var T = (k) => {
      var P = yl(), G = u(P);
      let _e;
      K(() => {
        Se(P, "title", a(n) ? "Clear file \xB7 back to import" : ""), _e = tt(G, 1, "s-brand svelte-1n46o8q", null, _e, { "s-brand-clickable": !!a(n) });
      }), se("click", P, q), R(k, P);
    };
    ne(O, (k) => {
      g || k(T);
    });
  }
  var A = d(O, 2);
  {
    var M = (k) => {
      var P = Sl(), G = u(P);
      {
        var _e = (we) => {
          var Ae = Al(), ct = u(Ae);
          Ga(ct, () => a(n).name, (je) => {
            var et = xl(), Mt = u(et);
            K(() => m(Mt, `[ ${a(W) ?? ""} ]`)), R(je, et);
          });
          var re = d(ct, 2);
          {
            var ye = (je) => {
              var et = El(), Mt = u(et);
              K(() => m(Mt, a(B))), R(je, et);
            };
            ne(re, (je) => {
              a(B) && je(ye);
            });
          }
          R(we, Ae);
        };
        ne(G, (we) => {
          a(W) && we(_e);
        });
      }
      var pe = d(G, 2);
      {
        var Ke = (we) => {
          var Ae = kl();
          R(we, Ae);
        };
        ne(pe, (we) => {
          a(_) && we(Ke);
        });
      }
      var me = d(pe, 2);
      se("click", me, q), R(k, P);
    }, Y = (k) => {
      var P = Tl();
      R(k, P);
    };
    ne(A, (k) => {
      a(n) ? k(M) : k(Y, -1);
    });
  }
  var ee = d(A, 2);
  {
    var ie = (k) => {
      var P = Ml(), G = u(P), _e = u(G);
      K(() => m(_e, a(h) === "dark" ? "\u263C" : "\u263E")), se("click", G, D), R(k, P);
    };
    ne(ee, (k) => {
      g || k(ie);
    });
  }
  var le = d(w, 2), be = u(le);
  bl(be, { get file() {
    return a(n);
  }, get format() {
    return a(r);
  }, get parsing() {
    return a(_);
  } });
  var ce = d(be, 2), J = u(ce);
  {
    var ue = (k) => {
      var P = Rl(), G = u(P);
      let _e;
      var pe = d(G, 2);
      let Ke;
      var me = d(pe, 2);
      let we;
      var Ae = d(me, 2);
      let ct;
      var re = d(Ae, 2);
      let ye;
      K(() => {
        G.disabled = a(r) !== "elf", Se(G, "title", a(r) === "elf" ? "" : "INSPECT is ELF-only"), _e = tt(G, 1, "svelte-1n46o8q", null, _e, { on: a(f) === "inspect" }), Ke = tt(pe, 1, "svelte-1n46o8q", null, Ke, { on: a(f) === "hex" }), me.disabled = a(r) !== "wav", Se(me, "title", a(r) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), we = tt(me, 1, "svelte-1n46o8q", null, we, { on: a(f) === "wave" }), Ae.disabled = a(r) !== "gba", Se(Ae, "title", a(r) === "gba" ? "" : "CART is GBA-only"), ct = tt(Ae, 1, "svelte-1n46o8q", null, ct, { on: a(f) === "cart" }), re.disabled = a(r) !== "gba", Se(re, "title", a(r) === "gba" ? "" : "GAME is GBA-only"), ye = tt(re, 1, "svelte-1n46o8q", null, ye, { on: a(f) === "game" });
      }), se("click", G, () => p(f, "inspect")), se("click", pe, () => p(f, "hex")), se("click", me, () => p(f, "wave")), se("click", Ae, () => p(f, "cart")), se("click", re, () => p(f, "game")), R(k, P);
    };
    ne(J, (k) => {
      a(n) && k(ue);
    });
  }
  var Ee = d(J, 2), Ge = u(Ee);
  {
    var Me = (k) => {
      Ri(k, { onfile: S });
    }, fe = (k) => {
      var P = Fl(), G = pt(P);
      {
        var _e = (re) => {
          var ye = Cl(), je = u(ye);
          K(() => m(je, `parse failed: ${a(v) ?? ""}`)), R(re, ye);
        };
        ne(G, (re) => {
          a(v) && re(_e);
        });
      }
      var pe = d(G, 2);
      {
        var Ke = (re) => {
          var ye = Rn(), je = pt(ye);
          {
            var et = (gt) => {
              Gi(gt, { get report() {
                return a(s);
              }, get strings() {
                return a(o);
              }, onJumpToOffset: Q });
            }, Mt = (gt) => {
              var Qt = Ol(), bn = d(u(Qt)), ft = u(bn);
              K(() => m(ft, a(r))), R(gt, Qt);
            };
            ne(je, (gt) => {
              a(s) ? gt(et) : a(r) && a(r) !== "elf" && gt(Mt, 1);
            });
          }
          R(re, ye);
        }, me = (re) => {
          {
            let ye = _t(() => a(E)?.o);
            Ji(re, { get bytes() {
              return a(n).bytes;
            }, get jumpTo() {
              return a(ye);
            } });
          }
        }, we = (re) => {
          rl(re, { get bytes() {
            return a(n).bytes;
          } });
        }, Ae = (re) => {
          fl(re, { get bytes() {
            return a(n).bytes;
          } });
        }, ct = (re) => {
          dl(re, { get bytes() {
            return a(n).bytes;
          }, get header() {
            return a(l);
          } });
        };
        ne(pe, (re) => {
          a(f) === "inspect" ? re(Ke) : a(f) === "hex" ? re(me, 1) : a(f) === "wave" ? re(we, 2) : a(f) === "cart" ? re(Ae, 3) : a(f) === "game" && re(ct, 4);
        });
      }
      R(k, P);
    };
    ne(Ge, (k) => {
      a(n) ? k(fe, -1) : k(Me);
    });
  }
  var Re = d(le, 2), Qe = u(Re), $e = d(u(Qe), 1, true), Ce = d(Qe, 2);
  {
    var He = (k) => {
      var P = Il(), G = u(P);
      K(() => m(G, I[a(f)] ?? "")), R(k, P);
    };
    ne(Ce, (k) => {
      a(n) && k(He);
    });
  }
  var Ye = d(Ce, 2), Tt = u(Ye);
  K((k) => {
    te = tt(z, 1, "app svelte-1n46o8q", null, te, { embedded: g }), m($e, a(n) ? g ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : a(F) ? g ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${a(x)}\u2588`), m(Tt, `MODULE \xB7 ${k ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => a(n) ? a(f).toUpperCase() : "EMPTY"]), R(e, y), ot();
}
Zt(["click"]);
Ua(Dl, { target: document.getElementById("app") });
