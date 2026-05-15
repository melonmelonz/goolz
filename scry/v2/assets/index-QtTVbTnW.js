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
const Ts = false;
var Or = Array.isArray, Rs = Array.prototype.indexOf, en = Array.prototype.includes, Dn = Array.from, Os = Object.defineProperty, pn = Object.getOwnPropertyDescriptor, Fs = Object.getOwnPropertyDescriptors, Ls = Object.prototype, js = Array.prototype, Fr = Object.getPrototypeOf, br = Object.isExtensible;
const Is = () => {
};
function Ns(e) {
  for (var t = 0; t < e.length; t++) e[t]();
}
function Lr() {
  var e, t, n = new Promise((a, r) => {
    e = a, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
function Ds(e, t) {
  if (Array.isArray(e)) return e;
  if (!(Symbol.iterator in e)) return Array.from(e);
  const n = [];
  for (const a of e) if (n.push(a), n.length === t) break;
  return n;
}
const Ge = 2, tn = 4, Pn = 8, jr = 1 << 24, gt = 16, dt = 32, Lt = 64, Zn = 128, rt = 512, Pe = 1024, ze = 2048, mt = 4096, Xe = 8192, st = 16384, Yt = 32768, Qn = 1 << 25, nn = 65536, $n = 1 << 17, Ps = 1 << 18, ln = 1 << 19, Bs = 1 << 20, bt = 1 << 25, Ht = 65536, Fn = 1 << 21, wn = 1 << 22, Rt = 1 << 23, Cn = Symbol("$state"), qs = Symbol(""), Et = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Ir(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Us() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function zs(e, t, n) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ws(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Hs(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Vs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ys() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Xs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ks() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Js() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Zs = 1, Qs = 2, Nr = 4, $s = 8, ea = 16, ta = 1, na = 2, Be = Symbol(), Dr = "http://www.w3.org/1999/xhtml";
function ra() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function sa() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Pr(e) {
  return e === this.v;
}
function aa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Br(e) {
  return !aa(e, this.v);
}
let ia = false, Ke = null;
function rn(e) {
  Ke = e;
}
function _t(e, t = false, n) {
  Ke = { p: Ke, i: false, c: null, e: null, s: e, x: null, r: de, l: null };
}
function pt(e) {
  var t = Ke, n = t.e;
  if (n !== null) {
    t.e = null;
    for (var a of n) ss(a);
  }
  return t.i = true, Ke = t.p, {};
}
function qr() {
  return true;
}
let Pt = [];
function Ur() {
  var e = Pt;
  Pt = [], Ns(e);
}
function Ot(e) {
  if (Pt.length === 0 && !hn) {
    var t = Pt;
    queueMicrotask(() => {
      t === Pt && Ur();
    });
  }
  Pt.push(e);
}
function la() {
  for (; Pt.length > 0; ) Ur();
}
function zr(e) {
  var t = de;
  if (t === null) return pe.f |= Rt, e;
  if (!(t.f & Yt) && !(t.f & tn)) throw e;
  Tt(e, t);
}
function Tt(e, t) {
  for (; t !== null; ) {
    if (t.f & Zn) {
      if (!(t.f & Yt)) throw e;
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
function je(e, t) {
  e.f = e.f & oa | t;
}
function lr(e) {
  e.f & rt || e.deps === null ? je(e, Pe) : je(e, mt);
}
function Wr(e) {
  if (e !== null) for (const t of e) !(t.f & Ge) || !(t.f & Ht) || (t.f ^= Ht, Wr(t.deps));
}
function Gr(e, t, n) {
  e.f & ze ? t.add(e) : e.f & mt && n.add(e), Wr(e.deps), je(e, Pe);
}
const Nt = /* @__PURE__ */ new Set();
let oe = null, ct = null, er = null, hn = false, Gn = false, Qt = null, Tn = null;
var gr = 0;
let fa = 1;
class jt {
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
  #f = /* @__PURE__ */ new Set();
  #c = /* @__PURE__ */ new Set();
  #l = /* @__PURE__ */ new Map();
  #v = /* @__PURE__ */ new Set();
  is_fork = false;
  #_ = false;
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
      for (var r of a.d) je(r, ze), n(r);
      for (r of a.m) je(r, mt), n(r);
    }
    this.#v.add(t);
  }
  #p() {
    if (gr++ > 1e3 && (Nt.delete(this), ua()), !this.#u()) {
      for (const o of this.#f) this.#c.delete(o), je(o, ze), this.schedule(o);
      for (const o of this.#c) je(o, mt), this.schedule(o);
    }
    const t = this.#t;
    this.#t = [], this.apply();
    var n = Qt = [], a = [], r = Tn = [];
    for (const o of t) try {
      this.#g(o, n, a);
    } catch (f) {
      throw Yr(o), f;
    }
    if (oe = null, r.length > 0) {
      var i = jt.ensure();
      for (const o of r) i.schedule(o);
    }
    if (Qt = null, Tn = null, this.#u() || this.#b()) {
      this.#h(a), this.#h(n);
      for (const [o, f] of this.#l) Vr(o, f);
    } else {
      this.#s.size === 0 && Nt.delete(this), this.#f.clear(), this.#c.clear();
      for (const o of this.#n) o(this);
      this.#n.clear(), mr(a), mr(n), this.#a?.resolve();
    }
    var l = oe;
    if (this.#t.length > 0) {
      const o = l ??= this;
      o.#t.push(...this.#t.filter((f) => !o.#t.includes(f)));
    }
    l !== null && (Nt.add(l), l.#p());
  }
  #g(t, n, a) {
    t.f ^= Pe;
    for (var r = t.first; r !== null; ) {
      var i = r.f, l = (i & (dt | Lt)) !== 0, o = l && (i & Pe) !== 0, f = o || (i & Xe) !== 0 || this.#l.has(r);
      if (!f && r.fn !== null) {
        l ? r.f ^= Pe : i & tn ? n.push(r) : An(r) && (i & gt && this.#c.add(r), an(r));
        var u = r.first;
        if (u !== null) {
          r = u;
          continue;
        }
      }
      for (; r !== null; ) {
        var v = r.next;
        if (v !== null) {
          r = v;
          break;
        }
        r = r.parent;
      }
    }
  }
  #h(t) {
    for (var n = 0; n < t.length; n += 1) Gr(t[n], this.#f, this.#c);
  }
  capture(t, n, a = false) {
    t.v !== Be && !this.previous.has(t) && this.previous.set(t, t.v), t.f & Rt || (this.current.set(t, [n, a]), ct?.set(t, n)), this.is_fork || (t.v = n);
  }
  activate() {
    oe = this;
  }
  deactivate() {
    oe = null, ct = null;
  }
  flush() {
    try {
      Gn = true, oe = this, this.#p();
    } finally {
      gr = 0, er = null, Qt = null, Tn = null, Gn = false, oe = null, ct = null, qt.clear();
    }
  }
  discard() {
    for (const t of this.#o) t(this);
    this.#o.clear(), this.#e.clear(), Nt.delete(this);
  }
  register_created_effect(t) {
    this.#i.push(t);
  }
  #m() {
    for (const v of Nt) {
      var t = v.id < this.id, n = [];
      for (const [h, [p, y]] of this.current) {
        if (v.current.has(h)) {
          var a = v.current.get(h)[0];
          if (t && p !== a) v.current.set(h, [p, y]);
          else continue;
        }
        n.push(h);
      }
      var r = [...v.current.keys()].filter((h) => !this.current.has(h));
      if (r.length === 0) t && v.discard();
      else if (n.length > 0) {
        if (t) for (const h of this.#v) v.unskip_effect(h, (p) => {
          p.f & (gt | wn) ? v.schedule(p) : v.#h([p]);
        });
        v.activate();
        var i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map();
        for (var o of n) Hr(o, r, i, l);
        l = /* @__PURE__ */ new Map();
        var f = [...v.current.keys()].filter((h) => this.current.has(h) ? this.current.get(h)[0] !== h : true);
        for (const h of this.#i) !(h.f & (st | Xe | $n)) && or(h, f, l) && (h.f & (wn | gt) ? (je(h, ze), v.schedule(h)) : v.#f.add(h));
        if (v.#t.length > 0) {
          v.apply();
          for (var u of v.#t) v.#g(u, [], []);
          v.#t = [];
        }
        v.deactivate();
      }
    }
    for (const v of Nt) v.#d.has(this) && (v.#d.delete(this), v.#d.size === 0 && !v.#u() && (v.activate(), v.#p()));
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
    this.#_ || a || (this.#_ = true, Ot(() => {
      this.#_ = false, this.flush();
    }));
  }
  transfer_effects(t, n) {
    for (const a of t) this.#f.add(a);
    for (const a of n) this.#c.add(a);
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
    return (this.#a ??= Lr()).promise;
  }
  static ensure() {
    if (oe === null) {
      const t = oe = new jt();
      Gn || (Nt.add(oe), hn || Ot(() => {
        oe === t && t.flush();
      }));
    }
    return oe;
  }
  apply() {
    {
      ct = null;
      return;
    }
  }
  schedule(t) {
    if (er = t, t.b?.is_pending && t.f & (tn | Pn | jr) && !(t.f & Yt)) {
      t.b.defer_effect(t);
      return;
    }
    for (var n = t; n.parent !== null; ) {
      n = n.parent;
      var a = n.f;
      if (Qt !== null && n === de && (pe === null || !(pe.f & Ge))) return;
      if (a & (Lt | dt)) {
        if (!(a & Pe)) return;
        n.f ^= Pe;
      }
    }
    this.#t.push(n);
  }
}
function ca(e) {
  var t = hn;
  hn = true;
  try {
    for (var n; ; ) {
      if (la(), oe === null) return n;
      oe.flush();
    }
  } finally {
    hn = t;
  }
}
function ua() {
  try {
    Vs();
  } catch (e) {
    Tt(e, er);
  }
}
let xt = null;
function mr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var a = e[n++];
      if (!(a.f & (st | Xe)) && An(a) && (xt = /* @__PURE__ */ new Set(), an(a), a.deps === null && a.first === null && a.nodes === null && a.teardown === null && a.ac === null && is(a), xt?.size > 0)) {
        qt.clear();
        for (const r of xt) {
          if (r.f & (st | Xe)) continue;
          const i = [r];
          let l = r.parent;
          for (; l !== null; ) xt.has(l) && (xt.delete(l), i.push(l)), l = l.parent;
          for (let o = i.length - 1; o >= 0; o--) {
            const f = i[o];
            f.f & (st | Xe) || an(f);
          }
        }
        xt.clear();
      }
    }
    xt = null;
  }
}
function Hr(e, t, n, a) {
  if (!n.has(e) && (n.add(e), e.reactions !== null)) for (const r of e.reactions) {
    const i = r.f;
    i & Ge ? Hr(r, t, n, a) : i & (wn | gt) && !(i & ze) && or(r, t, a) && (je(r, ze), fr(r));
  }
}
function or(e, t, n) {
  const a = n.get(e);
  if (a !== void 0) return a;
  if (e.deps !== null) for (const r of e.deps) {
    if (en.call(t, r)) return true;
    if (r.f & Ge && or(r, t, n)) return n.set(r, true), true;
  }
  return n.set(e, false), false;
}
function fr(e) {
  oe.schedule(e);
}
function Vr(e, t) {
  if (!(e.f & dt && e.f & Pe)) {
    e.f & ze ? t.d.push(e) : e.f & mt && t.m.push(e), je(e, Pe);
    for (var n = e.first; n !== null; ) Vr(n, t), n = n.next;
  }
}
function Yr(e) {
  je(e, Pe);
  for (var t = e.first; t !== null; ) Yr(t), t = t.next;
}
function va(e) {
  let t = 0, n = Vt(0), a;
  return () => {
    vr() && (s(n), dr(() => (t === 0 && (a = kn(() => e(() => bn(n)))), t += 1, () => {
      Ot(() => {
        t -= 1, t === 0 && (a?.(), a = void 0, bn(n));
      });
    })));
  };
}
var da = nn | ln;
function _a(e, t, n, a) {
  new pa(e, t, n, a);
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
  #f = null;
  #c = 0;
  #l = 0;
  #v = false;
  #_ = /* @__PURE__ */ new Set();
  #d = /* @__PURE__ */ new Set();
  #u = null;
  #b = va(() => (this.#u = Vt(this.#c), () => {
    this.#u = null;
  }));
  constructor(t, n, a, r) {
    this.#n = t, this.#e = n, this.#s = (i) => {
      var l = de;
      l.b = this, l.f |= Zn, a(i);
    }, this.parent = de.b, this.transform_error = r ?? this.parent?.transform_error ?? ((i) => i), this.#r = qn(() => {
      this.#m();
    }, da);
  }
  #p() {
    try {
      this.#a = nt(() => this.#s(this.#n));
    } catch (t) {
      this.error(t);
    }
  }
  #g(t) {
    const n = this.#e.failed;
    n && (this.#i = nt(() => {
      n(this.#n, () => t, () => () => {
      });
    }));
  }
  #h() {
    const t = this.#e.pending;
    t && (this.is_pending = true, this.#t = nt(() => t(this.#n)), Ot(() => {
      var n = this.#f = document.createDocumentFragment(), a = kt();
      n.append(a), this.#a = this.#w(() => nt(() => this.#s(a))), this.#l === 0 && (this.#n.before(n), this.#f = null, Ut(this.#t, () => {
        this.#t = null;
      }), this.#y(oe));
    }));
  }
  #m() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#l = 0, this.#c = 0, this.#a = nt(() => {
        this.#s(this.#n);
      }), this.#l > 0) {
        var t = this.#f = document.createDocumentFragment();
        hr(this.#a, t);
        const n = this.#e.pending;
        this.#t = nt(() => n(this.#n));
      } else this.#y(oe);
    } catch (n) {
      this.error(n);
    }
  }
  #y(t) {
    this.is_pending = false, t.transfer_effects(this.#_, this.#d);
  }
  defer_effect(t) {
    Gr(t, this.#_, this.#d);
  }
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  #w(t) {
    var n = de, a = pe, r = Ke;
    yt(this.#r), it(this.#r), rn(this.#r.ctx);
    try {
      return jt.ensure(), t();
    } catch (i) {
      return zr(i), null;
    } finally {
      yt(n), it(a), rn(r);
    }
  }
  #x(t, n) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#x(t, n);
      return;
    }
    this.#l += t, this.#l === 0 && (this.#y(n), this.#t && Ut(this.#t, () => {
      this.#t = null;
    }), this.#f && (this.#n.before(this.#f), this.#f = null));
  }
  update_pending_count(t, n) {
    this.#x(t, n), this.#c += t, !(!this.#u || this.#v) && (this.#v = true, Ot(() => {
      this.#v = false, this.#u && sn(this.#u, this.#c);
    }));
  }
  get_effect_pending() {
    return this.#b(), s(this.#u);
  }
  error(t) {
    if (!this.#e.onerror && !this.#e.failed) throw t;
    oe?.is_fork ? (this.#a && oe.skip_effect(this.#a), this.#t && oe.skip_effect(this.#t), this.#i && oe.skip_effect(this.#i), oe.on_fork_commit(() => {
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
        sa();
        return;
      }
      r = true, i && Js(), this.#i !== null && Ut(this.#i, () => {
        this.#i = null;
      }), this.#w(() => {
        this.#m();
      });
    }, o = (f) => {
      try {
        i = true, n?.(f, l), i = false;
      } catch (u) {
        Tt(u, this.#r && this.#r.parent);
      }
      a && (this.#i = this.#w(() => {
        try {
          return nt(() => {
            var u = de;
            u.b = this, u.f |= Zn, a(this.#n, () => f, () => l);
          });
        } catch (u) {
          return Tt(u, this.#r.parent), null;
        }
      }));
    };
    Ot(() => {
      var f;
      try {
        f = this.transform_error(t);
      } catch (u) {
        Tt(u, this.#r && this.#r.parent);
        return;
      }
      f !== null && typeof f == "object" && typeof f.then == "function" ? f.then(o, (u) => Tt(u, this.#r && this.#r.parent)) : o(f);
    });
  }
}
function ha(e, t, n, a) {
  const r = cr;
  var i = e.filter((p) => !p.settled);
  if (n.length === 0 && i.length === 0) {
    a(t.map(r));
    return;
  }
  var l = de, o = ba(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((p) => p.promise)) : null;
  function u(p) {
    o();
    try {
      a(p);
    } catch (y) {
      l.f & st || Tt(y, l);
    }
    Ln();
  }
  if (n.length === 0) {
    f.then(() => u(t.map(r)));
    return;
  }
  var v = Xr();
  function h() {
    Promise.all(n.map((p) => ga(p))).then((p) => u([...t.map(r), ...p])).catch((p) => Tt(p, l)).finally(() => v());
  }
  f ? f.then(() => {
    o(), h(), Ln();
  }) : h();
}
function ba() {
  var e = de, t = pe, n = Ke, a = oe;
  return function(i = true) {
    yt(e), it(t), rn(n), i && !(e.f & st) && (a?.activate(), a?.apply());
  };
}
function Ln(e = true) {
  yt(null), it(null), rn(null), e && oe?.deactivate();
}
function Xr() {
  var e = de, t = e.b, n = oe, a = t.is_rendered();
  return t.update_pending_count(1, n), n.increment(a, e), (r = false) => {
    t.update_pending_count(-1, n), n.decrement(a, e, r);
  };
}
function cr(e) {
  var t = Ge | ze;
  return de !== null && (de.f |= ln), { ctx: Ke, deps: null, effects: null, equals: Pr, f: t, fn: e, reactions: null, rv: 0, v: Be, wv: 0, parent: de, ac: null };
}
function ga(e, t, n) {
  let a = de;
  a === null && Us();
  var r = void 0, i = Vt(Be), l = !pe, o = /* @__PURE__ */ new Map();
  return ja(() => {
    var f = de, u = Lr();
    r = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).finally(Ln);
    } catch (y) {
      u.reject(y), Ln();
    }
    var v = oe;
    if (l) {
      if (f.f & Yt) var h = Xr();
      if (a.b.is_rendered()) o.get(v)?.reject(Et), o.delete(v);
      else {
        for (const y of o.values()) y.reject(Et);
        o.clear();
      }
      o.set(v, u);
    }
    const p = (y, A = void 0) => {
      if (h) {
        var C = A === Et;
        h(C);
      }
      if (!(A === Et || f.f & st)) {
        if (v.activate(), A) i.f |= Rt, sn(i, A);
        else {
          i.f & Rt && (i.f ^= Rt), sn(i, y);
          for (const [x, q] of o) {
            if (o.delete(x), x === v) break;
            q.reject(Et);
          }
        }
        v.deactivate();
      }
    };
    u.promise.then(p, (y) => p(null, y || "unknown"));
  }), rs(() => {
    for (const f of o.values()) f.reject(Et);
  }), new Promise((f) => {
    function u(v) {
      function h() {
        v === r ? f(i) : u(r);
      }
      v.then(h, h);
    }
    u(r);
  });
}
function Ft(e) {
  const t = cr(e);
  return fs(t), t;
}
function ma(e) {
  const t = cr(e);
  return t.equals = Br, t;
}
function ya(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1) Ze(t[n]);
  }
}
function ur(e) {
  var t, n = de, a = e.parent;
  if (!It && a !== null && a.f & (st | Xe)) return ra(), e.v;
  yt(a);
  try {
    e.f &= ~Ht, ya(e), t = ds(e);
  } finally {
    yt(n);
  }
  return t;
}
function Kr(e) {
  var t = ur(e);
  if (!e.equals(t) && (e.wv = us(), (!oe?.is_fork || e.deps === null) && (oe !== null ? oe.capture(e, t, true) : e.v = t, e.deps === null))) {
    je(e, Pe);
    return;
  }
  It || (ct !== null ? (vr() || oe?.is_fork) && ct.set(e, t) : lr(e));
}
function wa(e) {
  if (e.effects !== null) for (const t of e.effects) (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(Et), t.teardown = Is, t.ac = null, xn(t, 0), _r(t));
}
function Jr(e) {
  if (e.effects !== null) for (const t of e.effects) t.teardown && an(t);
}
let tr = /* @__PURE__ */ new Set();
const qt = /* @__PURE__ */ new Map();
let Zr = false;
function Vt(e, t) {
  var n = { f: 0, v: e, reactions: null, equals: Pr, rv: 0, wv: 0 };
  return n;
}
function U(e, t) {
  const n = Vt(e);
  return fs(n), n;
}
function xa(e, t = false, n = true) {
  const a = Vt(e);
  return t || (a.equals = Br), a;
}
function d(e, t, n = false) {
  pe !== null && (!vt || pe.f & $n) && qr() && pe.f & (Ge | gt | wn | $n) && (at === null || !en.call(at, e)) && Ks();
  let a = n ? ut(t) : t;
  return sn(e, a, Tn);
}
function sn(e, t, n = null) {
  if (!e.equals(t)) {
    qt.set(e, It ? t : e.v);
    var a = jt.ensure();
    if (a.capture(e, t), e.f & Ge) {
      const r = e;
      e.f & ze && ur(r), ct === null && lr(r);
    }
    e.wv = us(), Qr(e, ze, n), de !== null && de.f & Pe && !(de.f & (dt | Lt)) && (tt === null ? Da([e]) : tt.push(e)), !a.is_fork && tr.size > 0 && !Zr && Ea();
  }
  return t;
}
function Ea() {
  Zr = false;
  for (const e of tr) e.f & Pe && je(e, mt), An(e) && an(e);
  tr.clear();
}
function Aa(e, t = 1) {
  var n = s(e), a = t === 1 ? n++ : n--;
  return d(e, n), a;
}
function bn(e) {
  d(e, e.v + 1);
}
function Qr(e, t, n) {
  var a = e.reactions;
  if (a !== null) for (var r = a.length, i = 0; i < r; i++) {
    var l = a[i], o = l.f, f = (o & ze) === 0;
    if (f && je(l, t), o & Ge) {
      var u = l;
      ct?.delete(u), o & Ht || (o & rt && (de === null || !(de.f & Fn)) && (l.f |= Ht), Qr(u, mt, n));
    } else if (f) {
      var v = l;
      o & gt && xt !== null && xt.add(v), n !== null ? n.push(v) : fr(v);
    }
  }
}
function ut(e) {
  if (typeof e != "object" || e === null || Cn in e) return e;
  const t = Fr(e);
  if (t !== Ls && t !== js) return e;
  var n = /* @__PURE__ */ new Map(), a = Or(e), r = U(0), i = zt, l = (o) => {
    if (zt === i) return o();
    var f = pe, u = zt;
    it(null), Er(i);
    var v = o();
    return it(f), Er(u), v;
  };
  return a && n.set("length", U(e.length)), new Proxy(e, { defineProperty(o, f, u) {
    (!("value" in u) || u.configurable === false || u.enumerable === false || u.writable === false) && Ys();
    var v = n.get(f);
    return v === void 0 ? l(() => {
      var h = U(u.value);
      return n.set(f, h), h;
    }) : d(v, u.value, true), true;
  }, deleteProperty(o, f) {
    var u = n.get(f);
    if (u === void 0) {
      if (f in o) {
        const v = l(() => U(Be));
        n.set(f, v), bn(r);
      }
    } else d(u, Be), bn(r);
    return true;
  }, get(o, f, u) {
    if (f === Cn) return e;
    var v = n.get(f), h = f in o;
    if (v === void 0 && (!h || pn(o, f)?.writable) && (v = l(() => {
      var y = ut(h ? o[f] : Be), A = U(y);
      return A;
    }), n.set(f, v)), v !== void 0) {
      var p = s(v);
      return p === Be ? void 0 : p;
    }
    return Reflect.get(o, f, u);
  }, getOwnPropertyDescriptor(o, f) {
    var u = Reflect.getOwnPropertyDescriptor(o, f);
    if (u && "value" in u) {
      var v = n.get(f);
      v && (u.value = s(v));
    } else if (u === void 0) {
      var h = n.get(f), p = h?.v;
      if (h !== void 0 && p !== Be) return { enumerable: true, configurable: true, value: p, writable: true };
    }
    return u;
  }, has(o, f) {
    if (f === Cn) return true;
    var u = n.get(f), v = u !== void 0 && u.v !== Be || Reflect.has(o, f);
    if (u !== void 0 || de !== null && (!v || pn(o, f)?.writable)) {
      u === void 0 && (u = l(() => {
        var p = v ? ut(o[f]) : Be, y = U(p);
        return y;
      }), n.set(f, u));
      var h = s(u);
      if (h === Be) return false;
    }
    return v;
  }, set(o, f, u, v) {
    var h = n.get(f), p = f in o;
    if (a && f === "length") for (var y = u; y < h.v; y += 1) {
      var A = n.get(y + "");
      A !== void 0 ? d(A, Be) : y in o && (A = l(() => U(Be)), n.set(y + "", A));
    }
    if (h === void 0) (!p || pn(o, f)?.writable) && (h = l(() => U(void 0)), d(h, ut(u)), n.set(f, h));
    else {
      p = h.v !== Be;
      var C = l(() => ut(u));
      d(h, C);
    }
    var x = Reflect.getOwnPropertyDescriptor(o, f);
    if (x?.set && x.set.call(v, u), !p) {
      if (a && typeof f == "string") {
        var q = n.get("length"), P = Number(f);
        Number.isInteger(P) && P >= q.v && d(q, P + 1);
      }
      bn(r);
    }
    return true;
  }, ownKeys(o) {
    s(r);
    var f = Reflect.ownKeys(o).filter((h) => {
      var p = n.get(h);
      return p === void 0 || p.v !== Be;
    });
    for (var [u, v] of n) v.v !== Be && !(u in o) && f.push(u);
    return f;
  }, setPrototypeOf() {
    Xs();
  } });
}
var yr, $r, es, ts;
function ka() {
  if (yr === void 0) {
    yr = window, $r = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    es = pn(t, "firstChild").get, ts = pn(t, "nextSibling").get, br(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), br(n) && (n.__t = void 0);
  }
}
function kt(e = "") {
  return document.createTextNode(e);
}
function jn(e) {
  return es.call(e);
}
function En(e) {
  return ts.call(e);
}
function c(e, t) {
  return jn(e);
}
function et(e, t = false) {
  {
    var n = jn(e);
    return n instanceof Comment && n.data === "" ? En(n) : n;
  }
}
function _(e, t = 1, n = false) {
  let a = e;
  for (; t--; ) a = En(a);
  return a;
}
function Sa(e) {
  e.textContent = "";
}
function ns() {
  return false;
}
function Ma(e, t, n) {
  return document.createElementNS(Dr, e, void 0);
}
let wr = false;
function Ca() {
  wr || (wr = true, document.addEventListener("reset", (e) => {
    Promise.resolve().then(() => {
      if (!e.defaultPrevented) for (const t of e.target.elements) t.__on_r?.();
    });
  }, { capture: true }));
}
function Bn(e) {
  var t = pe, n = de;
  it(null), yt(null);
  try {
    return e();
  } finally {
    it(t), yt(n);
  }
}
function Ta(e, t, n, a = n) {
  e.addEventListener(t, () => Bn(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), a(true);
  } : e.__on_r = () => a(true), Ca();
}
function Ra(e) {
  de === null && (pe === null && Hs(), Gs()), It && Ws();
}
function Oa(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function St(e, t) {
  var n = de;
  n !== null && n.f & Xe && (e |= Xe);
  var a = { ctx: Ke, deps: null, nodes: null, f: e | ze | rt, first: null, fn: t, last: null, next: null, parent: n, b: n && n.b, prev: null, teardown: null, wv: 0, ac: null };
  oe?.register_created_effect(a);
  var r = a;
  if (e & tn) Qt !== null ? Qt.push(a) : jt.ensure().schedule(a);
  else if (t !== null) {
    try {
      an(a);
    } catch (l) {
      throw Ze(a), l;
    }
    r.deps === null && r.teardown === null && r.nodes === null && r.first === r.last && !(r.f & ln) && (r = r.first, e & gt && e & nn && r !== null && (r.f |= nn));
  }
  if (r !== null && (r.parent = n, n !== null && Oa(r, n), pe !== null && pe.f & Ge && !(e & Lt))) {
    var i = pe;
    (i.effects ??= []).push(r);
  }
  return a;
}
function vr() {
  return pe !== null && !vt;
}
function rs(e) {
  const t = St(Pn, null);
  return je(t, Pe), t.teardown = e, t;
}
function Ue(e) {
  Ra();
  var t = de.f, n = !pe && (t & dt) !== 0 && (t & Yt) === 0;
  if (n) {
    var a = Ke;
    (a.e ??= []).push(e);
  } else return ss(e);
}
function ss(e) {
  return St(tn | Bs, e);
}
function Fa(e) {
  jt.ensure();
  const t = St(Lt | ln, e);
  return (n = {}) => new Promise((a) => {
    n.outro ? Ut(t, () => {
      Ze(t), a(void 0);
    }) : (Ze(t), a(void 0));
  });
}
function La(e) {
  return St(tn, e);
}
function ja(e) {
  return St(wn | ln, e);
}
function dr(e, t = 0) {
  return St(Pn | t, e);
}
function V(e, t = [], n = [], a = []) {
  ha(a, t, n, (r) => {
    St(Pn, () => e(...r.map(s)));
  });
}
function qn(e, t = 0) {
  var n = St(gt | t, e);
  return n;
}
function nt(e) {
  return St(dt | ln, e);
}
function as(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = It, a = pe;
    xr(true), it(null);
    try {
      t.call(null);
    } finally {
      xr(n), it(a);
    }
  }
}
function _r(e, t = false) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Bn(() => {
      r.abort(Et);
    });
    var a = n.next;
    n.f & Lt ? n.parent = null : Ze(n, t), n = a;
  }
}
function Ia(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & dt || Ze(t), t = n;
  }
}
function Ze(e, t = true) {
  var n = false;
  (t || e.f & Ps) && e.nodes !== null && e.nodes.end !== null && (Na(e.nodes.start, e.nodes.end), n = true), je(e, Qn), _r(e, t && !n), xn(e, 0);
  var a = e.nodes && e.nodes.t;
  if (a !== null) for (const i of a) i.stop();
  as(e), e.f ^= Qn, e.f |= st;
  var r = e.parent;
  r !== null && r.first !== null && is(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Na(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : En(e);
    e.remove(), e = n;
  }
}
function is(e) {
  var t = e.parent, n = e.prev, a = e.next;
  n !== null && (n.next = a), a !== null && (a.prev = n), t !== null && (t.first === e && (t.first = a), t.last === e && (t.last = n));
}
function Ut(e, t, n = true) {
  var a = [];
  ls(e, a, true);
  var r = () => {
    n && Ze(e), t && t();
  }, i = a.length;
  if (i > 0) {
    var l = () => --i || r();
    for (var o of a) o.out(l);
  } else r();
}
function ls(e, t, n) {
  if (!(e.f & Xe)) {
    e.f ^= Xe;
    var a = e.nodes && e.nodes.t;
    if (a !== null) for (const o of a) (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var i = r.next;
      if (!(r.f & Lt)) {
        var l = (r.f & nn) !== 0 || (r.f & dt) !== 0 && (e.f & gt) !== 0;
        ls(r, t, l ? n : false);
      }
      r = i;
    }
  }
}
function pr(e) {
  os(e, true);
}
function os(e, t) {
  if (e.f & Xe) {
    e.f ^= Xe, e.f & Pe || (je(e, ze), jt.ensure().schedule(e));
    for (var n = e.first; n !== null; ) {
      var a = n.next, r = (n.f & nn) !== 0 || (n.f & dt) !== 0;
      os(n, r ? t : false), n = a;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null) for (const l of i) (l.is_global || t) && l.in();
  }
}
function hr(e, t) {
  if (e.nodes) for (var n = e.nodes.start, a = e.nodes.end; n !== null; ) {
    var r = n === a ? null : En(n);
    t.append(n), n = r;
  }
}
let Rn = false, It = false;
function xr(e) {
  It = e;
}
let pe = null, vt = false;
function it(e) {
  pe = e;
}
let de = null;
function yt(e) {
  de = e;
}
let at = null;
function fs(e) {
  pe !== null && (at === null ? at = [e] : at.push(e));
}
let Je = null, Qe = 0, tt = null;
function Da(e) {
  tt = e;
}
let cs = 1, Bt = 0, zt = Bt;
function Er(e) {
  zt = e;
}
function us() {
  return ++cs;
}
function An(e) {
  var t = e.f;
  if (t & ze) return true;
  if (t & Ge && (e.f &= ~Ht), t & mt) {
    for (var n = e.deps, a = n.length, r = 0; r < a; r++) {
      var i = n[r];
      if (An(i) && Kr(i), i.wv > e.wv) return true;
    }
    t & rt && ct === null && je(e, Pe);
  }
  return false;
}
function vs(e, t, n = true) {
  var a = e.reactions;
  if (a !== null && !(at !== null && en.call(at, e))) for (var r = 0; r < a.length; r++) {
    var i = a[r];
    i.f & Ge ? vs(i, t, false) : t === i && (n ? je(i, ze) : i.f & Pe && je(i, mt), fr(i));
  }
}
function ds(e) {
  var t = Je, n = Qe, a = tt, r = pe, i = at, l = Ke, o = vt, f = zt, u = e.f;
  Je = null, Qe = 0, tt = null, pe = u & (dt | Lt) ? null : e, at = null, rn(e.ctx), vt = false, zt = ++Bt, e.ac !== null && (Bn(() => {
    e.ac.abort(Et);
  }), e.ac = null);
  try {
    e.f |= Fn;
    var v = e.fn, h = v();
    e.f |= Yt;
    var p = e.deps, y = oe?.is_fork;
    if (Je !== null) {
      var A;
      if (y || xn(e, Qe), p !== null && Qe > 0) for (p.length = Qe + Je.length, A = 0; A < Je.length; A++) p[Qe + A] = Je[A];
      else e.deps = p = Je;
      if (vr() && e.f & rt) for (A = Qe; A < p.length; A++) (p[A].reactions ??= []).push(e);
    } else !y && p !== null && Qe < p.length && (xn(e, Qe), p.length = Qe);
    if (qr() && tt !== null && !vt && p !== null && !(e.f & (Ge | mt | ze))) for (A = 0; A < tt.length; A++) vs(tt[A], e);
    if (r !== null && r !== e) {
      if (Bt++, r.deps !== null) for (let C = 0; C < n; C += 1) r.deps[C].rv = Bt;
      if (t !== null) for (const C of t) C.rv = Bt;
      tt !== null && (a === null ? a = tt : a.push(...tt));
    }
    return e.f & Rt && (e.f ^= Rt), h;
  } catch (C) {
    return zr(C);
  } finally {
    e.f ^= Fn, Je = t, Qe = n, tt = a, pe = r, at = i, rn(l), vt = o, zt = f;
  }
}
function Pa(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var a = Rs.call(n, e);
    if (a !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[a] = n[r], n.pop());
    }
  }
  if (n === null && t.f & Ge && (Je === null || !en.call(Je, t))) {
    var i = t;
    i.f & rt && (i.f ^= rt, i.f &= ~Ht), i.v !== Be && lr(i), wa(i), xn(i, 0);
  }
}
function xn(e, t) {
  var n = e.deps;
  if (n !== null) for (var a = t; a < n.length; a++) Pa(e, n[a]);
}
function an(e) {
  var t = e.f;
  if (!(t & st)) {
    je(e, Pe);
    var n = de, a = Rn;
    de = e, Rn = true;
    try {
      t & (gt | jr) ? Ia(e) : _r(e), as(e);
      var r = ds(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = cs;
      var i;
      Ts && ia && e.f & ze && e.deps;
    } finally {
      Rn = a, de = n;
    }
  }
}
async function Ba() {
  await Promise.resolve(), ca();
}
function s(e) {
  var t = e.f, n = (t & Ge) !== 0;
  if (pe !== null && !vt) {
    var a = de !== null && (de.f & st) !== 0;
    if (!a && (at === null || !en.call(at, e))) {
      var r = pe.deps;
      if (pe.f & Fn) e.rv < Bt && (e.rv = Bt, Je === null && r !== null && r[Qe] === e ? Qe++ : Je === null ? Je = [e] : Je.push(e));
      else {
        (pe.deps ??= []).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [pe] : en.call(i, pe) || i.push(pe);
      }
    }
  }
  if (It && qt.has(e)) return qt.get(e);
  if (n) {
    var l = e;
    if (It) {
      var o = l.v;
      return (!(l.f & Pe) && l.reactions !== null || ps(l)) && (o = ur(l)), qt.set(l, o), o;
    }
    var f = (l.f & rt) === 0 && !vt && pe !== null && (Rn || (pe.f & rt) !== 0), u = (l.f & Yt) === 0;
    An(l) && (f && (l.f |= rt), Kr(l)), f && !u && (Jr(l), _s(l));
  }
  if (ct?.has(e)) return ct.get(e);
  if (e.f & Rt) throw e.v;
  return e.v;
}
function _s(e) {
  if (e.f |= rt, e.deps !== null) for (const t of e.deps) (t.reactions ??= []).push(e), t.f & Ge && !(t.f & rt) && (Jr(t), _s(t));
}
function ps(e) {
  if (e.v === Be) return true;
  if (e.deps === null) return false;
  for (const t of e.deps) if (qt.has(t) || t.f & Ge && ps(t)) return true;
  return false;
}
function kn(e) {
  var t = vt;
  try {
    return vt = true, e();
  } finally {
    vt = t;
  }
}
const qa = ["touchstart", "touchmove"];
function Ua(e) {
  return qa.includes(e);
}
const cn = Symbol("events"), hs = /* @__PURE__ */ new Set(), nr = /* @__PURE__ */ new Set();
function za(e, t, n, a = {}) {
  function r(i) {
    if (a.capture || rr.call(t, i), !i.cancelBubble) return Bn(() => n?.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Ot(() => {
    t.addEventListener(e, r, a);
  }) : t.addEventListener(e, r, a), r;
}
function ft(e, t, n, a, r) {
  var i = { capture: a, passive: r }, l = za(e, t, n, i);
  (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && rs(() => {
    t.removeEventListener(e, l, i);
  });
}
function be(e, t, n) {
  (t[cn] ??= {})[e] = n;
}
function Xt(e) {
  for (var t = 0; t < e.length; t++) hs.add(e[t]);
  for (var n of nr) n(e);
}
let Ar = null;
function rr(e) {
  var t = this, n = t.ownerDocument, a = e.type, r = e.composedPath?.() || [], i = r[0] || e.target;
  Ar = e;
  var l = 0, o = Ar === e && e[cn];
  if (o) {
    var f = r.indexOf(o);
    if (f !== -1 && (t === document || t === window)) {
      e[cn] = t;
      return;
    }
    var u = r.indexOf(t);
    if (u === -1) return;
    f <= u && (l = f);
  }
  if (i = r[l] || e.target, i !== t) {
    Os(e, "currentTarget", { configurable: true, get() {
      return i || n;
    } });
    var v = pe, h = de;
    it(null), yt(null);
    try {
      for (var p, y = []; i !== null; ) {
        var A = i.assignedSlot || i.parentNode || i.host || null;
        try {
          var C = i[cn]?.[a];
          C != null && (!i.disabled || e.target === i) && C.call(i, e);
        } catch (x) {
          p ? y.push(x) : p = x;
        }
        if (e.cancelBubble || A === t || A === null) break;
        i = A;
      }
      if (p) {
        for (let x of y) queueMicrotask(() => {
          throw x;
        });
        throw p;
      }
    } finally {
      e[cn] = t, delete e.currentTarget, it(v), yt(h);
    }
  }
}
const Wa = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", { createHTML: (e) => e });
function Ga(e) {
  return Wa?.createHTML(e) ?? e;
}
function Ha(e) {
  var t = Ma("template");
  return t.innerHTML = Ga(e.replaceAll("<!>", "<!---->")), t.content;
}
function In(e, t) {
  var n = de;
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
function j(e, t) {
  var n = (t & ta) !== 0, a = (t & na) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Ha(i ? e : "<!>" + e), n || (r = jn(r)));
    var l = a || $r ? document.importNode(r, true) : r.cloneNode(true);
    if (n) {
      var o = jn(l), f = l.lastChild;
      In(o, f);
    } else In(l, l);
    return l;
  };
}
function Jt(e = "") {
  {
    var t = kt(e + "");
    return In(t, t), t;
  }
}
function Nn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = kt();
  return e.append(t, n), In(t, n), e;
}
function M(e, t) {
  e !== null && e.before(t);
}
function m(e, t) {
  var n = t == null ? "" : typeof t == "object" ? `${t}` : t;
  n !== (e.__t ??= e.nodeValue) && (e.__t = n, e.nodeValue = `${n}`);
}
function Va(e, t) {
  return Ya(e, t);
}
const Mn = /* @__PURE__ */ new Map();
function Ya(e, { target: t, anchor: n, props: a = {}, events: r, context: i, intro: l = true, transformError: o }) {
  ka();
  var f = void 0, u = Fa(() => {
    var v = n ?? t.appendChild(kt());
    _a(v, { pending: () => {
    } }, (y) => {
      _t({});
      var A = Ke;
      i && (A.c = i), r && (a.$$events = r), f = e(y, a) || {}, pt();
    }, o);
    var h = /* @__PURE__ */ new Set(), p = (y) => {
      for (var A = 0; A < y.length; A++) {
        var C = y[A];
        if (!h.has(C)) {
          h.add(C);
          var x = Ua(C);
          for (const g of [t, document]) {
            var q = Mn.get(g);
            q === void 0 && (q = /* @__PURE__ */ new Map(), Mn.set(g, q));
            var P = q.get(C);
            P === void 0 ? (g.addEventListener(C, rr, { passive: x }), q.set(C, 1)) : q.set(C, P + 1);
          }
        }
      }
    };
    return p(Dn(hs)), nr.add(p), () => {
      for (var y of h) for (const x of [t, document]) {
        var A = Mn.get(x), C = A.get(y);
        --C == 0 ? (x.removeEventListener(y, rr), A.delete(y), A.size === 0 && Mn.delete(x)) : A.set(y, C);
      }
      nr.delete(p), v !== n && v.parentNode?.removeChild(v);
    };
  });
  return Xa.set(f, u), f;
}
let Xa = /* @__PURE__ */ new WeakMap();
class bs {
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
      if (a) pr(a), this.#s.delete(n);
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
            var u = document.createDocumentFragment();
            hr(l, u), u.append(kt()), this.#e.set(i, { effect: l, fragment: u });
          } else Ze(l);
          this.#s.delete(i), this.#o.delete(i);
        };
        this.#r || !a ? (this.#s.add(i), Ut(l, o, false)) : o();
      }
    }
  };
  #t = (t) => {
    this.#n.delete(t);
    const n = Array.from(this.#n.values());
    for (const [a, r] of this.#e) n.includes(a) || (Ze(r.effect), this.#e.delete(a));
  };
  ensure(t, n) {
    var a = oe, r = ns();
    if (n && !this.#o.has(t) && !this.#e.has(t)) if (r) {
      var i = document.createDocumentFragment(), l = kt();
      i.append(l), this.#e.set(t, { effect: nt(() => n(l)), fragment: i });
    } else this.#o.set(t, nt(() => n(this.anchor)));
    if (this.#n.set(a, t), r) {
      for (const [o, f] of this.#o) o === t ? a.unskip_effect(f) : a.skip_effect(f);
      for (const [o, f] of this.#e) o === t ? a.unskip_effect(f.effect) : a.skip_effect(f.effect);
      a.oncommit(this.#a), a.ondiscard(this.#t);
    } else this.#a(a);
  }
}
function le(e, t, n = false) {
  var a = new bs(e), r = n ? nn : 0;
  function i(l, o) {
    a.ensure(l, o);
  }
  qn(() => {
    var l = false;
    t((o, f = 0) => {
      l = true, i(f, o);
    }), l || i(-1, null);
  }, r);
}
const Ka = Symbol("NaN");
function Ja(e, t, n) {
  var a = new bs(e);
  qn(() => {
    var r = t();
    r !== r && (r = Ka), a.ensure(r, n);
  });
}
function He(e, t) {
  return t;
}
function Za(e, t, n) {
  for (var a = [], r = t.length, i, l = t.length, o = 0; o < r; o++) {
    let h = t[o];
    Ut(h, () => {
      if (i) {
        if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
          var p = e.outrogroups;
          sr(e, Dn(i.done)), p.delete(i), p.size === 0 && (e.outrogroups = null);
        }
      } else l -= 1;
    }, false);
  }
  if (l === 0) {
    var f = a.length === 0 && n !== null;
    if (f) {
      var u = n, v = u.parentNode;
      Sa(v), v.append(u), e.items.clear();
    }
    sr(e, t, !f);
  } else i = { pending: new Set(t), done: /* @__PURE__ */ new Set() }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(i);
}
function sr(e, t, n = true) {
  var a;
  if (e.pending.size > 0) {
    a = /* @__PURE__ */ new Set();
    for (const l of e.pending.values()) for (const o of l) a.add(e.items.get(o).e);
  }
  for (var r = 0; r < t.length; r++) {
    var i = t[r];
    if (a?.has(i)) {
      i.f |= bt;
      const l = document.createDocumentFragment();
      hr(i, l);
    } else Ze(t[r], n);
  }
}
var kr;
function Ve(e, t, n, a, r, i = null) {
  var l = e, o = /* @__PURE__ */ new Map(), f = (t & Nr) !== 0;
  if (f) {
    var u = e;
    l = u.appendChild(kt());
  }
  var v = null, h = ma(() => {
    var g = n();
    return Or(g) ? g : g == null ? [] : Dn(g);
  }), p, y = /* @__PURE__ */ new Map(), A = true;
  function C(g) {
    P.effect.f & st || (P.pending.delete(g), P.fallback = v, Qa(P, p, l, t, a), v !== null && (p.length === 0 ? v.f & bt ? (v.f ^= bt, un(v, null, l)) : pr(v) : Ut(v, () => {
      v = null;
    })));
  }
  function x(g) {
    P.pending.delete(g);
  }
  var q = qn(() => {
    p = s(h);
    for (var g = p.length, F = /* @__PURE__ */ new Set(), H = oe, T = ns(), D = 0; D < g; D += 1) {
      var se = p[D], ce = a(se, D), Y = A ? null : o.get(ce);
      Y ? (Y.v && sn(Y.v, se), Y.i && sn(Y.i, D), T && H.unskip_effect(Y.e)) : (Y = $a(o, A ? l : kr ??= kt(), se, ce, D, r, t, n), A || (Y.e.f |= bt), o.set(ce, Y)), F.add(ce);
    }
    if (g === 0 && i && !v && (A ? v = nt(() => i(l)) : (v = nt(() => i(kr ??= kt())), v.f |= bt)), g > F.size && zs(), !A) if (y.set(H, F), T) {
      for (const [fe, N] of o) F.has(fe) || H.skip_effect(N.e);
      H.oncommit(C), H.ondiscard(x);
    } else C(H);
    s(h);
  }), P = { effect: q, items: o, pending: y, outrogroups: null, fallback: v };
  A = false;
}
function fn(e) {
  for (; e !== null && !(e.f & dt); ) e = e.next;
  return e;
}
function Qa(e, t, n, a, r) {
  var i = (a & $s) !== 0, l = t.length, o = e.items, f = fn(e.effect.first), u, v = null, h, p = [], y = [], A, C, x, q;
  if (i) for (q = 0; q < l; q += 1) A = t[q], C = r(A, q), x = o.get(C).e, x.f & bt || (x.nodes?.a?.measure(), (h ??= /* @__PURE__ */ new Set()).add(x));
  for (q = 0; q < l; q += 1) {
    if (A = t[q], C = r(A, q), x = o.get(C).e, e.outrogroups !== null) for (const Y of e.outrogroups) Y.pending.delete(x), Y.done.delete(x);
    if (x.f & Xe && (pr(x), i && (x.nodes?.a?.unfix(), (h ??= /* @__PURE__ */ new Set()).delete(x))), x.f & bt) if (x.f ^= bt, x === f) un(x, null, n);
    else {
      var P = v ? v.next : f;
      x === e.effect.last && (e.effect.last = x.prev), x.prev && (x.prev.next = x.next), x.next && (x.next.prev = x.prev), Mt(e, v, x), Mt(e, x, P), un(x, P, n), v = x, p = [], y = [], f = fn(v.next);
      continue;
    }
    if (x !== f) {
      if (u !== void 0 && u.has(x)) {
        if (p.length < y.length) {
          var g = y[0], F;
          v = g.prev;
          var H = p[0], T = p[p.length - 1];
          for (F = 0; F < p.length; F += 1) un(p[F], g, n);
          for (F = 0; F < y.length; F += 1) u.delete(y[F]);
          Mt(e, H.prev, T.next), Mt(e, v, H), Mt(e, T, g), f = g, v = T, q -= 1, p = [], y = [];
        } else u.delete(x), un(x, f, n), Mt(e, x.prev, x.next), Mt(e, x, v === null ? e.effect.first : v.next), Mt(e, v, x), v = x;
        continue;
      }
      for (p = [], y = []; f !== null && f !== x; ) (u ??= /* @__PURE__ */ new Set()).add(f), y.push(f), f = fn(f.next);
      if (f === null) continue;
    }
    x.f & bt || p.push(x), v = x, f = fn(x.next);
  }
  if (e.outrogroups !== null) {
    for (const Y of e.outrogroups) Y.pending.size === 0 && (sr(e, Dn(Y.done)), e.outrogroups?.delete(Y));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (f !== null || u !== void 0) {
    var D = [];
    if (u !== void 0) for (x of u) x.f & Xe || D.push(x);
    for (; f !== null; ) !(f.f & Xe) && f !== e.fallback && D.push(f), f = fn(f.next);
    var se = D.length;
    if (se > 0) {
      var ce = a & Nr && l === 0 ? n : null;
      if (i) {
        for (q = 0; q < se; q += 1) D[q].nodes?.a?.measure();
        for (q = 0; q < se; q += 1) D[q].nodes?.a?.fix();
      }
      Za(e, D, ce);
    }
  }
  i && Ot(() => {
    if (h !== void 0) for (x of h) x.nodes?.a?.apply();
  });
}
function $a(e, t, n, a, r, i, l, o) {
  var f = l & Zs ? l & ea ? Vt(n) : xa(n, false, false) : null, u = l & Qs ? Vt(r) : null;
  return { v: f, i: u, e: nt(() => (i(t, f ?? n, u ?? r, o), () => {
    e.delete(a);
  })) };
}
function un(e, t, n) {
  if (e.nodes) for (var a = e.nodes.start, r = e.nodes.end, i = t && !(t.f & bt) ? t.nodes.start : n; a !== null; ) {
    var l = En(a);
    if (i.before(a), a === r) return;
    a = l;
  }
}
function Mt(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
const Sr = [...` 	
\r\f\xA0\v\uFEFF`];
function ei(e, t, n) {
  var a = e == null ? "" : "" + e;
  if (n) {
    for (var r of Object.keys(n)) if (n[r]) a = a ? a + " " + r : r;
    else if (a.length) for (var i = r.length, l = 0; (l = a.indexOf(r, l)) >= 0; ) {
      var o = l + i;
      (l === 0 || Sr.includes(a[l - 1])) && (o === a.length || Sr.includes(a[o])) ? a = (l === 0 ? "" : a.substring(0, l)) + a.substring(o + 1) : l = o;
    }
  }
  return a === "" ? null : a;
}
function ti(e, t) {
  return e == null ? null : String(e);
}
function qe(e, t, n, a, r, i) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var o = ei(n, a, i);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = n;
  } else if (i && r !== i) for (var f in i) {
    var u = !!i[f];
    (r == null || u !== !!r[f]) && e.classList.toggle(f, u);
  }
  return i;
}
function $t(e, t, n, a) {
  var r = e.__style;
  if (r !== t) {
    var i = ti(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  }
  return a;
}
const ni = Symbol("is custom element"), ri = Symbol("is html");
function Ye(e, t, n, a) {
  var r = si(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[qs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ai(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function si(e) {
  return e.__attributes ??= { [ni]: e.nodeName.includes("-"), [ri]: e.namespaceURI === Dr };
}
var Mr = /* @__PURE__ */ new Map();
function ai(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Mr.get(t);
  if (n) return n;
  Mr.set(t, n = []);
  for (var a, r = e, i = Element.prototype; i !== r; ) {
    a = Fs(r);
    for (var l in a) a[l].set && n.push(l);
    r = Fr(r);
  }
  return n;
}
function gs(e, t, n = t) {
  var a = /* @__PURE__ */ new WeakSet();
  Ta(e, "input", async (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = Hn(e) ? Vn(i) : i, n(i), oe !== null && a.add(oe), await Ba(), i !== (i = t())) {
      var l = e.selectionStart, o = e.selectionEnd, f = e.value.length;
      if (e.value = i ?? "", o !== null) {
        var u = e.value.length;
        l === o && o === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(o, u));
      }
    }
  }), kn(t) == null && e.value && (n(Hn(e) ? Vn(e.value) : e.value), oe !== null && a.add(oe)), dr(() => {
    var r = t();
    if (e === document.activeElement) {
      var i = oe;
      if (a.has(i)) return;
    }
    Hn(e) && r === Vn(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r ?? "");
  });
}
function Hn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Vn(e) {
  return e === "" ? null : +e;
}
function Cr(e, t) {
  return e === t || e?.[Cn] === t;
}
function Wt(e = {}, t, n, a) {
  var r = Ke.r, i = de;
  return La(() => {
    var l, o;
    return dr(() => {
      l = o, o = [], kn(() => {
        e !== n(...o) && (t(e, ...o), l && Cr(n(...l), e) && t(null, ...l));
      });
    }), () => {
      let f = i;
      for (; f !== r && f.parent !== null && f.parent.f & Qn; ) f = f.parent;
      const u = () => {
        o && Cr(n(...o), e) && t(null, ...o);
      }, v = f.teardown;
      f.teardown = () => {
        u(), v?.();
      };
    };
  }), e;
}
function Gt(e, t, n, a) {
  var r = a, i = true, l = () => (i && (i = false, r = a), r), o;
  o = e[t], o === void 0 && a !== void 0 && (o = l());
  var f;
  return f = () => {
    var u = e[t];
    return u === void 0 ? l() : (i = true, u);
  }, f;
}
function ms(e) {
  Ke === null && Ir(), Ue(() => {
    const t = kn(e);
    if (typeof t == "function") return t;
  });
}
function ys(e) {
  Ke === null && Ir(), ms(() => () => kn(e));
}
const ii = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(ii);
function li() {
  J._start();
}
function oi(e) {
  try {
    const r = J.__wbindgen_add_to_stack_pointer(-16), i = Kt(e, J.__wbindgen_export), l = lt;
    J.decode_wav(r, i, l);
    var t = Te().getInt32(r + 4 * 0, true), n = Te().getInt32(r + 4 * 1, true), a = Te().getInt32(r + 4 * 2, true);
    if (a) throw $e(n);
    return $e(t);
  } finally {
    J.__wbindgen_add_to_stack_pointer(16);
  }
}
function fi(e) {
  let t, n;
  try {
    const i = J.__wbindgen_add_to_stack_pointer(-16), l = Kt(e, J.__wbindgen_export), o = lt;
    J.detect_format(i, l, o);
    var a = Te().getInt32(i + 4 * 0, true), r = Te().getInt32(i + 4 * 1, true);
    return t = a, n = r, dn(a, r);
  } finally {
    J.__wbindgen_add_to_stack_pointer(16), J.__wbindgen_export3(t, n, 1);
  }
}
function ci(e, t) {
  try {
    const i = J.__wbindgen_add_to_stack_pointer(-16), l = Kt(e, J.__wbindgen_export), o = lt;
    J.entropy_blocks(i, l, o, t);
    var n = Te().getInt32(i + 4 * 0, true), a = Te().getInt32(i + 4 * 1, true), r = hi(n, a).slice();
    return J.__wbindgen_export3(n, a * 4, 4), r;
  } finally {
    J.__wbindgen_add_to_stack_pointer(16);
  }
}
function ui(e, t) {
  try {
    const i = J.__wbindgen_add_to_stack_pointer(-16), l = Kt(e, J.__wbindgen_export), o = lt;
    J.extract_strings(i, l, o, t);
    var n = Te().getInt32(i + 4 * 0, true), a = Te().getInt32(i + 4 * 1, true), r = Te().getInt32(i + 4 * 2, true);
    if (r) throw $e(a);
    return $e(n);
  } finally {
    J.__wbindgen_add_to_stack_pointer(16);
  }
}
function vi(e, t, n) {
  try {
    const l = J.__wbindgen_add_to_stack_pointer(-16), o = Kt(e, J.__wbindgen_export), f = lt;
    J.hex_rows(l, o, f, t, n);
    var a = Te().getInt32(l + 4 * 0, true), r = Te().getInt32(l + 4 * 1, true), i = bi(a, r).slice();
    return J.__wbindgen_export3(a, r * 4, 4), i;
  } finally {
    J.__wbindgen_add_to_stack_pointer(16);
  }
}
function di(e) {
  try {
    const r = J.__wbindgen_add_to_stack_pointer(-16), i = Kt(e, J.__wbindgen_export), l = lt;
    J.parse_elf(r, i, l);
    var t = Te().getInt32(r + 4 * 0, true), n = Te().getInt32(r + 4 * 1, true), a = Te().getInt32(r + 4 * 2, true);
    if (a) throw $e(n);
    return $e(t);
  } finally {
    J.__wbindgen_add_to_stack_pointer(16);
  }
}
function _i(e) {
  try {
    const r = J.__wbindgen_add_to_stack_pointer(-16), i = Kt(e, J.__wbindgen_export), l = lt;
    J.parse_gba(r, i, l);
    var t = Te().getInt32(r + 4 * 0, true), n = Te().getInt32(r + 4 * 1, true), a = Te().getInt32(r + 4 * 2, true);
    if (a) throw $e(n);
    return $e(t);
  } finally {
    J.__wbindgen_add_to_stack_pointer(16);
  }
}
function ws() {
  return { __proto__: null, "./scry_core_bg.js": { __proto__: null, __wbg_Error_bce6d499ff0a4aff: function(t, n) {
    const a = Error(dn(t, n));
    return Ct(a);
  }, __wbg_String_8564e559799eccda: function(t, n) {
    const a = String(Zt(n)), r = Tr(a, J.__wbindgen_export, J.__wbindgen_export2), i = lt;
    Te().setInt32(t + 4, i, true), Te().setInt32(t + 0, r, true);
  }, __wbg___wbindgen_throw_9c31b086c2b26051: function(t, n) {
    throw new Error(dn(t, n));
  }, __wbg_error_a6fa202b58aa1cd3: function(t, n) {
    let a, r;
    try {
      a = t, r = n, console.error(dn(t, n));
    } finally {
      J.__wbindgen_export3(a, r, 1);
    }
  }, __wbg_new_02d162bc6cf02f60: function() {
    const t = new Object();
    return Ct(t);
  }, __wbg_new_227d7c05414eb861: function() {
    const t = new Error();
    return Ct(t);
  }, __wbg_new_310879b66b6e95e1: function() {
    const t = new Array();
    return Ct(t);
  }, __wbg_set_6be42768c690e380: function(t, n, a) {
    Zt(t)[$e(n)] = $e(a);
  }, __wbg_set_78ea6a19f4818587: function(t, n, a) {
    Zt(t)[n >>> 0] = $e(a);
  }, __wbg_stack_3b0d974bbf31e44f: function(t, n) {
    const a = Zt(n).stack, r = Tr(a, J.__wbindgen_export, J.__wbindgen_export2), i = lt;
    Te().setInt32(t + 4, i, true), Te().setInt32(t + 0, r, true);
  }, __wbindgen_cast_0000000000000001: function(t) {
    return Ct(t);
  }, __wbindgen_cast_0000000000000002: function(t, n) {
    const a = dn(t, n);
    return Ct(a);
  }, __wbindgen_cast_0000000000000003: function(t) {
    const n = BigInt.asUintN(64, t);
    return Ct(n);
  }, __wbindgen_object_clone_ref: function(t) {
    const n = Zt(t);
    return Ct(n);
  }, __wbindgen_object_drop_ref: function(t) {
    $e(t);
  } } };
}
function Ct(e) {
  mn === At.length && At.push(At.length + 1);
  const t = mn;
  return mn = At[t], At[t] = e, t;
}
function pi(e) {
  e < 1028 || (At[e] = mn, mn = e);
}
function hi(e, t) {
  return e = e >>> 0, gi().subarray(e / 4, e / 4 + t);
}
function bi(e, t) {
  e = e >>> 0;
  const n = Te(), a = [];
  for (let r = e; r < e + 4 * t; r += 4) a.push($e(n.getUint32(r, true)));
  return a;
}
let Dt = null;
function Te() {
  return (Dt === null || Dt.buffer.detached === true || Dt.buffer.detached === void 0 && Dt.buffer !== J.memory.buffer) && (Dt = new DataView(J.memory.buffer)), Dt;
}
let vn = null;
function gi() {
  return (vn === null || vn.byteLength === 0) && (vn = new Float32Array(J.memory.buffer)), vn;
}
function dn(e, t) {
  return yi(e >>> 0, t);
}
let _n = null;
function gn() {
  return (_n === null || _n.byteLength === 0) && (_n = new Uint8Array(J.memory.buffer)), _n;
}
function Zt(e) {
  return At[e];
}
let At = new Array(1024).fill(void 0);
At.push(void 0, null, true, false);
let mn = At.length;
function Kt(e, t) {
  const n = t(e.length * 1, 1) >>> 0;
  return gn().set(e, n / 1), lt = e.length, n;
}
function Tr(e, t, n) {
  if (n === void 0) {
    const o = yn.encode(e), f = t(o.length, 1) >>> 0;
    return gn().subarray(f, f + o.length).set(o), lt = o.length, f;
  }
  let a = e.length, r = t(a, 1) >>> 0;
  const i = gn();
  let l = 0;
  for (; l < a; l++) {
    const o = e.charCodeAt(l);
    if (o > 127) break;
    i[r + l] = o;
  }
  if (l !== a) {
    l !== 0 && (e = e.slice(l)), r = n(r, a, a = l + e.length * 3, 1) >>> 0;
    const o = gn().subarray(r + l, r + a), f = yn.encodeInto(e, o);
    l += f.written, r = n(r, a, l, 1) >>> 0;
  }
  return lt = l, r;
}
function $e(e) {
  const t = Zt(e);
  return pi(e), t;
}
let On = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
On.decode();
const mi = 2146435072;
let Yn = 0;
function yi(e, t) {
  return Yn += t, Yn >= mi && (On = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }), On.decode(), Yn = t), On.decode(gn().subarray(e, e + t));
}
const yn = new TextEncoder();
"encodeInto" in yn || (yn.encodeInto = function(e, t) {
  const n = yn.encode(e);
  return t.set(n), { read: e.length, written: n.length };
});
let lt = 0, J;
function xs(e, t) {
  return J = e.exports, Dt = null, vn = null, _n = null, J.__wbindgen_start(), J;
}
async function wi(e, t) {
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
function xi(e) {
  if (J !== void 0) return J;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module: e } = e : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const t = ws();
  e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
  const n = new WebAssembly.Instance(e, t);
  return xs(n);
}
async function Es(e) {
  if (J !== void 0) return J;
  e !== void 0 && (Object.getPrototypeOf(e) === Object.prototype ? { module_or_path: e } = e : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), e === void 0 && (e = new URL("" + new URL("scry_core_bg-CVKvtqX5.wasm", import.meta.url).href, import.meta.url));
  const t = ws();
  (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = fetch(e));
  const { instance: n, module: a } = await wi(await e, t);
  return xs(n);
}
const Ei = Object.freeze(Object.defineProperty({ __proto__: null, _start: li, decode_wav: oi, default: Es, detect_format: fi, entropy_blocks: ci, extract_strings: ui, hex_rows: vi, initSync: xi, parse_elf: di, parse_gba: _i }, Symbol.toStringTag, { value: "Module" }));
let Xn = null;
function Sn() {
  return Xn || (Xn = Es()), Xn.then(() => Ei);
}
const Ai = "scry-theme";
function As() {
  const e = document.documentElement.getAttribute("data-theme");
  return e === "light" || e === "dark" ? e : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ki() {
  const e = As() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", e);
  try {
    localStorage.setItem(Ai, e);
  } catch {
  }
  return e;
}
const ar = new Uint32Array([268436151, 174115, 166724883, 10658851, 12756355, 173091, 12756483, 1050259, 13805603, 268600083, 1050387, 14884899, 167774099, 15934499, 205859, 4196371, 16982051, 168822931, 18031651, 8594435, 2098323, 9642019, 115]), Kn = 65536, Jn = ar.length * 4;
function ks() {
  const n = 84 + Jn, a = new ArrayBuffer(n), r = new DataView(a), i = new Uint8Array(a);
  i[0] = 127, i[1] = 69, i[2] = 76, i[3] = 70, i[4] = 1, i[5] = 1, i[6] = 1, r.setUint16(16, 2, true), r.setUint16(18, 243, true), r.setUint32(20, 1, true), r.setUint32(24, Kn, true), r.setUint32(28, 52, true), r.setUint32(32, 0, true), r.setUint32(36, 0, true), r.setUint16(40, 52, true), r.setUint16(42, 32, true), r.setUint16(44, 1, true), r.setUint16(46, 0, true), r.setUint16(48, 0, true), r.setUint16(50, 0, true), r.setUint32(52, 1, true), r.setUint32(56, 84, true), r.setUint32(60, Kn, true), r.setUint32(64, Kn, true), r.setUint32(68, Jn, true), r.setUint32(72, Jn, true), r.setUint32(76, 5, true), r.setUint32(80, 4096, true);
  for (let l = 0; l < ar.length; l++) r.setUint32(84 + l * 4, ar[l], true);
  return new Uint8Array(a);
}
const Ss = "demo-rv32-spi-i2c.elf", Rr = 64 * 1024 * 1024;
function ir(e) {
  return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KiB` : `${(e / (1024 * 1024)).toFixed(1)} MiB`;
}
async function Ms(e) {
  if (!e) throw new Error("no file");
  if (e.size > Rr) throw new Error(`file too large (${ir(e.size)} > ${ir(Rr)})`);
  const t = await e.arrayBuffer();
  return { name: e.name, bytes: new Uint8Array(t) };
}
var Si = j('<span class="bar svelte-1i6c60u"></span>'), Mi = j('<span class="bar shimmer svelte-1i6c60u"></span>'), Ci = j('<button type="button" class="sample svelte-1i6c60u"><span class="sample-name svelte-1i6c60u"> </span> <span class="sparkline svelte-1i6c60u" aria-hidden="true"><!></span></button>'), Ti = j('<div class="samples svelte-1i6c60u"><div class="samples-label svelte-1i6c60u">OR PICK A SAMPLE</div> <div class="samples-row svelte-1i6c60u"></div> <p class="samples-note svelte-1i6c60u"> </p></div>'), Ri = j('<p class="loading svelte-1i6c60u"> </p>'), Oi = j('<p class="err svelte-1i6c60u"> </p>'), Fi = j('<section class="empty svelte-1i6c60u"><div role="region" aria-label="Drop a binary"><h2 class="svelte-1i6c60u">Drop a binary to begin.</h2> <p class="subtitle svelte-1i6c60u">ELF &middot; WAV &middot; GBA &middot; raw bytes &middot; <span class="muted svelte-1i6c60u">(rust \u2192 wasm)</span></p> <div class="actions svelte-1i6c60u"><label class="pick svelte-1i6c60u"><input type="file" hidden="" class="svelte-1i6c60u"/> <span class="svelte-1i6c60u">Choose file</span></label> <button class="pick demo svelte-1i6c60u" type="button">Load RV32 demo</button></div> <!> <!> <!> <p class="legend svelte-1i6c60u">All parsing happens in this tab. Nothing leaves your browser.</p></div></section>');
function Li(e, t) {
  _t(t, true);
  const n = /^[A-Za-z0-9._-]+\.(elf|wav|gba)$/;
  let a = U(false), r = U(""), i = U(ut([])), l = U(""), o = U(ut({}));
  async function f(N) {
    d(r, "");
    try {
      const W = await Ms(N);
      t.onfile?.(W);
    } catch (W) {
      d(r, W.message || String(W), true);
    }
  }
  function u(N) {
    N.preventDefault(), d(a, false);
    const W = N.dataTransfer?.files?.[0];
    W && f(W);
  }
  function v(N) {
    N.preventDefault(), d(a, true);
  }
  function h() {
    d(a, false);
  }
  function p(N) {
    const W = N.target.files?.[0];
    W && f(W);
  }
  async function y(N) {
    if (!n.test(N)) {
      d(r, `sample blocked: bad name "${N}"`);
      return;
    }
    d(r, ""), d(l, `fetching ${N}\u2026`);
    try {
      const W = await fetch(`../v1/samples/${encodeURIComponent(N)}`);
      if (!W.ok) {
        d(r, `fetch failed: ${W.status}`), d(l, "");
        return;
      }
      d(l, `reading ${N}\u2026`);
      const Q = new Uint8Array(await W.arrayBuffer());
      d(l, ""), t.onfile?.({ name: N, bytes: Q });
    } catch (W) {
      d(r, String(W), true), d(l, "");
    }
  }
  function A() {
    d(r, ""), t.onfile?.({ name: Ss, bytes: ks() });
  }
  Ue(() => {
    let N = false;
    return (async () => {
      try {
        const W = await fetch("../v1/samples/manifest.json");
        if (!W.ok) return;
        const Q = await W.json();
        if (N || !Array.isArray(Q)) return;
        d(i, Q, true);
        const ue = await Sn();
        if (N) return;
        await Promise.all(Q.map(async (k) => {
          if (n.test(k.file)) {
            if (k.file.endsWith(".gba")) {
              d(o, { ...s(o), [k.file]: Array(12).fill(0.22) }, true);
              return;
            }
            try {
              const I = await fetch(`../v1/samples/${encodeURIComponent(k.file)}`);
              if (!I.ok) return;
              const L = new Uint8Array(await I.arrayBuffer());
              if (N) return;
              const Z = Math.max(1, Math.ceil(L.length / 12)), ie = ue.entropy_blocks(L, Z);
              d(o, { ...s(o), [k.file]: Array.from(ie) }, true);
            } catch {
            }
          }
        }));
      } catch {
      }
    })(), () => {
      N = true;
    };
  });
  var C = Fi(), x = c(C);
  let q;
  var P = _(c(x), 4), g = c(P), F = c(g), H = _(g, 2), T = _(P, 2);
  {
    var D = (N) => {
      var W = Ti(), Q = _(c(W), 2);
      Ve(Q, 21, () => s(i), He, (I, L) => {
        var Z = Ci(), ie = c(Z), we = c(ie), De = _(ie, 2), Ie = c(De);
        {
          var Ne = (Le) => {
            var te = Nn(), ke = et(te);
            Ve(ke, 17, () => s(o)[s(L).file], He, (E, B) => {
              var z = Si();
              V((X) => $t(z, `height: ${X ?? ""}px`), [() => Math.max(2, s(B) * 14)]), M(E, z);
            }), M(Le, te);
          }, Re = (Le) => {
            var te = Nn(), ke = et(te);
            Ve(ke, 16, () => Array(12), He, (E, B, z) => {
              var X = Mi();
              $t(X, `animation-delay: ${z * 40}ms`), M(E, X);
            }), M(Le, te);
          };
          le(Ie, (Le) => {
            s(o)[s(L).file] ? Le(Ne) : Le(Re, -1);
          });
        }
        V(() => {
          Ye(Z, "title", s(L).insns > 0 ? `${s(L).desc} \u2014 ${s(L).insns} instructions` : s(L).desc), m(we, s(L).file);
        }), be("click", Z, () => y(s(L).file)), M(I, Z);
      });
      var ue = _(Q, 2), k = c(ue);
      V((I) => m(k, I), [() => s(i).map((I) => `${I.file} \u2014 ${I.desc}`).join("  \xB7  ")]), M(N, W);
    };
    le(T, (N) => {
      s(i).length && N(D);
    });
  }
  var se = _(T, 2);
  {
    var ce = (N) => {
      var W = Ri(), Q = c(W);
      V(() => m(Q, s(l))), M(N, W);
    };
    le(se, (N) => {
      s(l) && N(ce);
    });
  }
  var Y = _(se, 2);
  {
    var fe = (N) => {
      var W = Oi(), Q = c(W);
      V(() => m(Q, s(r))), M(N, W);
    };
    le(Y, (N) => {
      s(r) && N(fe);
    });
  }
  V(() => q = qe(x, 1, "zone svelte-1i6c60u", null, q, { over: s(a) })), ft("drop", x, u), ft("dragover", x, v), ft("dragleave", x, h), be("change", F, p), be("click", H, A), M(e, C), pt();
}
Xt(["change", "click"]);
var ji = j('<span class="ct svelte-etynpr"> </span>'), Ii = j('<span class="ct svelte-etynpr"> </span>'), Ni = j('<span class="ct svelte-etynpr"> </span>'), Di = j('<span class="ct svelte-etynpr"> </span>'), Pi = j("<button> <!> <!> <!> <!></button>"), Bi = j('<dl class="kv svelte-etynpr"><dt class="svelte-etynpr">CLASS</dt> <dd> </dd> <dt class="svelte-etynpr">DATA</dt> <dd> </dd> <dt class="svelte-etynpr">OS/ABI</dt> <dd> </dd> <dt class="svelte-etynpr">TYPE</dt> <dd> </dd> <dt class="svelte-etynpr">MACHINE</dt> <dd> </dd> <dt class="svelte-etynpr">ENTRY</dt> <dd class="addr svelte-etynpr"> </dd> <dt class="svelte-etynpr">SECTIONS</dt> <dd> </dd> <dt class="svelte-etynpr">SEGMENTS</dt> <dd> </dd> <dt class="svelte-etynpr">SYMBOLS</dt> <dd> </dd></dl>'), qi = j('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="bar svelte-etynpr"><span class="bar-fill svelte-etynpr"></span></td></tr>'), Ui = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">ADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">SIZE</th><th class="svelte-etynpr">FLAGS</th><th class="bar-h svelte-etynpr">\u2500</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), zi = j('<tr class="clickable svelte-etynpr"><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="num svelte-etynpr"> </td><td class="svelte-etynpr"> </td></tr>'), Wi = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">#</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VADDR</th><th class="svelte-etynpr">OFF</th><th class="svelte-etynpr">FILESZ</th><th class="svelte-etynpr">MEMSZ</th><th class="svelte-etynpr">FLAGS</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Gi = j('<tr class="svelte-etynpr"><td class="name svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="svelte-etynpr"> </td><td class="addr svelte-etynpr"> </td><td class="num svelte-etynpr"> </td></tr>'), Hi = j('<table class="svelte-etynpr"><thead><tr><th class="svelte-etynpr">NAME</th><th class="svelte-etynpr">BIND</th><th class="svelte-etynpr">KIND</th><th class="svelte-etynpr">VALUE</th><th class="svelte-etynpr">SIZE</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>'), Vi = j('<tr class="clickable svelte-etynpr"><td class="addr svelte-etynpr"> </td><td class="str svelte-etynpr"> </td></tr>'), Yi = j('<div class="strings-bar svelte-etynpr"><input class="strings-q svelte-etynpr" type="text" placeholder="filter\u2026"/> <span class="strings-ct svelte-etynpr"> </span></div> <table class="strings-tbl svelte-etynpr"><thead><tr><th class="addr svelte-etynpr">OFFSET</th><th class="svelte-etynpr">TEXT</th></tr></thead><tbody class="svelte-etynpr"></tbody></table>', 1), Xi = j('<div class="wrap svelte-etynpr"><div class="tabs svelte-etynpr"></div> <div class="panel svelte-etynpr"><!></div></div>');
function Ki(e, t) {
  _t(t, true);
  let n = U("summary");
  const a = [["summary", "SUMMARY"], ["sections", "SECTIONS"], ["segments", "SEGMENTS"], ["symbols", "SYMBOLS"], ["strings", "STRINGS"]];
  let r = U(""), i = Ft(() => {
    if (!t.strings) return [];
    const P = s(r).trim().toLowerCase();
    return P ? t.strings.filter((g) => g.text.toLowerCase().includes(P)) : t.strings;
  });
  const l = 80, o = Ft(() => t.report ? Math.max(1, ...t.report.sections.map((P) => Number(P.size) || 0)) : 1);
  function f(P) {
    return "0x" + Number(P).toString(16).toUpperCase().padStart(8, "0");
  }
  var u = Xi(), v = c(u);
  Ve(v, 21, () => a, He, (P, g) => {
    var F = Ft(() => Ds(s(g), 2));
    let H = () => s(F)[0], T = () => s(F)[1];
    var D = Pi();
    let se;
    var ce = c(D), Y = _(ce);
    {
      var fe = (L) => {
        var Z = ji(), ie = c(Z);
        V(() => m(ie, t.report.sections.length)), M(L, Z);
      };
      le(Y, (L) => {
        H() === "sections" && L(fe);
      });
    }
    var N = _(Y, 2);
    {
      var W = (L) => {
        var Z = Ii(), ie = c(Z);
        V(() => m(ie, t.report.segments.length)), M(L, Z);
      };
      le(N, (L) => {
        H() === "segments" && L(W);
      });
    }
    var Q = _(N, 2);
    {
      var ue = (L) => {
        var Z = Ni(), ie = c(Z);
        V(() => m(ie, t.report.symbols.length)), M(L, Z);
      };
      le(Q, (L) => {
        H() === "symbols" && L(ue);
      });
    }
    var k = _(Q, 2);
    {
      var I = (L) => {
        var Z = Di(), ie = c(Z);
        V(() => m(ie, t.strings.length)), M(L, Z);
      };
      le(k, (L) => {
        H() === "strings" && t.strings && L(I);
      });
    }
    V(() => {
      se = qe(D, 1, "tab svelte-etynpr", null, se, { active: s(n) === H() }), m(ce, `${T() ?? ""} `);
    }), be("click", D, () => d(n, H(), true)), M(P, D);
  });
  var h = _(v, 2), p = c(h);
  {
    var y = (P) => {
      var g = Bi(), F = _(c(g), 2), H = c(F), T = _(F, 4), D = c(T), se = _(T, 4), ce = c(se), Y = _(se, 4), fe = c(Y), N = _(Y, 4), W = c(N), Q = _(N, 4), ue = c(Q), k = _(Q, 4), I = c(k), L = _(k, 4), Z = c(L), ie = _(L, 4), we = c(ie);
      V(() => {
        m(H, t.report.summary.class), m(D, t.report.summary.data), m(ce, t.report.summary.osabi), m(fe, t.report.summary.kind), m(W, t.report.summary.machine), m(ue, t.report.summary.entry), m(I, t.report.summary.n_sections), m(Z, t.report.summary.n_segments), m(we, t.report.summary.n_symbols);
      }), M(P, g);
    }, A = (P) => {
      var g = Ui(), F = _(c(g));
      Ve(F, 21, () => t.report.sections, He, (H, T) => {
        var D = qi(), se = c(D), ce = c(se), Y = _(se), fe = c(Y), N = _(Y), W = c(N), Q = _(N), ue = c(Q), k = _(Q), I = c(k), L = _(k), Z = c(L), ie = _(L), we = c(ie), De = _(ie), Ie = c(De);
        V((Ne) => {
          Ye(D, "title", `Jump to offset ${s(T).offset ?? ""} in HEX`), m(ce, s(T).idx), m(fe, s(T).name || "\u2014"), m(W, s(T).kind), m(ue, s(T).addr), m(I, s(T).offset), m(Z, s(T).size), m(we, s(T).flags), $t(Ie, `width: ${Ne ?? ""}px`);
        }, [() => Math.max(1, Number(s(T).size) / s(o) * l)]), be("click", D, () => t.onJumpToOffset?.(parseInt(s(T).offset, 16))), M(H, D);
      }), M(P, g);
    }, C = (P) => {
      var g = Wi(), F = _(c(g));
      Ve(F, 21, () => t.report.segments, He, (H, T) => {
        var D = zi(), se = c(D), ce = c(se), Y = _(se), fe = c(Y), N = _(Y), W = c(N), Q = _(N), ue = c(Q), k = _(Q), I = c(k), L = _(k), Z = c(L), ie = _(L), we = c(ie);
        V(() => {
          Ye(D, "title", `Jump to offset ${s(T).offset ?? ""} in HEX`), m(ce, s(T).idx), m(fe, s(T).kind), m(W, s(T).vaddr), m(ue, s(T).offset), m(I, s(T).filesz), m(Z, s(T).memsz), m(we, s(T).flags);
        }), be("click", D, () => t.onJumpToOffset?.(parseInt(s(T).offset, 16))), M(H, D);
      }), M(P, g);
    }, x = (P) => {
      var g = Hi(), F = _(c(g));
      Ve(F, 21, () => t.report.symbols, He, (H, T) => {
        var D = Gi(), se = c(D), ce = c(se), Y = _(se), fe = c(Y), N = _(Y), W = c(N), Q = _(N), ue = c(Q), k = _(Q), I = c(k);
        V(() => {
          m(ce, s(T).name), m(fe, s(T).bind), m(W, s(T).kind), m(ue, s(T).value), m(I, s(T).size);
        }), M(H, D);
      }), M(P, g);
    }, q = (P) => {
      var g = Yi(), F = et(g), H = c(F), T = _(H, 2), D = c(T), se = _(F, 2), ce = _(c(se));
      Ve(ce, 21, () => s(i), He, (Y, fe) => {
        var N = Vi(), W = c(N), Q = c(W), ue = _(W), k = c(ue);
        V((I, L) => {
          Ye(N, "title", `Jump to offset ${I ?? ""} in HEX`), m(Q, L), m(k, s(fe).text);
        }, [() => f(s(fe).offset), () => f(s(fe).offset)]), be("click", N, () => t.onJumpToOffset?.(s(fe).offset)), M(Y, N);
      }), V(() => m(D, `${s(i).length ?? ""} / ${t.strings?.length ?? 0 ?? ""}`)), gs(H, () => s(r), (Y) => d(r, Y)), M(P, g);
    };
    le(p, (P) => {
      s(n) === "summary" ? P(y) : s(n) === "sections" ? P(A, 1) : s(n) === "segments" ? P(C, 2) : s(n) === "symbols" ? P(x, 3) : s(n) === "strings" && P(q, 4);
    });
  }
  M(e, u), pt();
}
Xt(["click"]);
var Ji = j('<span class="strip-col svelte-14j5q0g"></span>'), Zi = j('<div class="strip-wrap svelte-14j5q0g"><span class="strip-label svelte-14j5q0g">ENTROPY</span> <div class="strip svelte-14j5q0g" role="presentation" title="Click to jump"><!> <span class="strip-cursor svelte-14j5q0g"></span></div> <span class="strip-scale svelte-14j5q0g"> </span></div>'), Qi = j("<span></span>"), $i = j('<button type="button"> </button><!>', 1), el = j('<button type="button"> </button>'), tl = j('<div role="presentation"><span class="addr svelte-14j5q0g"> </span> <span class="bytes svelte-14j5q0g"></span> <span class="ascii svelte-14j5q0g"></span></div>'), nl = j('<span class="d-l svelte-14j5q0g">NOTE</span> <span class="d-v svelte-14j5q0g"> </span>', 1), rl = j('<div class="field svelte-14j5q0g"><span class="d-l svelte-14j5q0g">FIELD</span> <span class="d-v strong svelte-14j5q0g"> </span> <span class="d-l svelte-14j5q0g">OFFSET</span> <span class="d-v svelte-14j5q0g"> </span> <span class="d-l svelte-14j5q0g">VALUE</span> <span class="d-v mint svelte-14j5q0g"> </span> <!></div>'), sl = j('<div class="wrap svelte-14j5q0g"><div class="bar svelte-14j5q0g"><span class="ti svelte-14j5q0g">[ HEX ]</span> <div class="ctl svelte-14j5q0g"><button>&#9664; PAGE</button> <button>&#9650; ROW</button> <form class="goto svelte-14j5q0g"><span class="at svelte-14j5q0g">@</span> <input type="text" aria-label="Jump to hex offset" class="svelte-14j5q0g"/></form> <button>&#9660; ROW</button> <button>PAGE &#9654;</button></div></div> <!> <div class="grid svelte-14j5q0g"></div> <div class="detail svelte-14j5q0g"><!></div></div>');
function al(e, t) {
  _t(t, true);
  let n = Gt(t, "format", 3, "unknown"), a = Gt(t, "jumpTo", 3, null), r = Gt(t, "followTarget", 3, null), i = U(0);
  const l = 16 * 32;
  let o = U(ut([])), f = U(null), u = U(ut([])), v = U(0), h = U(""), p = U(null), y = U(null), A = U(null), C = U(null), x = U(0), q = U(0);
  const P = 400;
  let g = U(null);
  const F = [{ offset: 0, size: 4, name: "e_ident.magic", type: "u32be", description: "ELF magic (0x7F ELF)" }, { offset: 4, size: 1, name: "e_ident.class", type: "u8", description: "1 = 32-bit, 2 = 64-bit" }, { offset: 5, size: 1, name: "e_ident.data", type: "u8", description: "1 = little-endian, 2 = big-endian" }, { offset: 6, size: 1, name: "e_ident.version", type: "u8" }, { offset: 7, size: 1, name: "e_ident.osabi", type: "u8" }, { offset: 8, size: 1, name: "e_ident.abiversion", type: "u8" }, { offset: 9, size: 7, name: "e_ident.pad", type: "bytes" }, { offset: 16, size: 2, name: "e_type", type: "u16", description: "2 = EXEC, 3 = DYN" }, { offset: 18, size: 2, name: "e_machine", type: "u16", description: "243 = RISC-V, 62 = x86_64" }, { offset: 20, size: 4, name: "e_version", type: "u32" }, { offset: 24, size: 4, name: "e_entry", type: "u32", description: "Entry-point virtual address" }, { offset: 28, size: 4, name: "e_phoff", type: "u32" }, { offset: 32, size: 4, name: "e_shoff", type: "u32" }, { offset: 36, size: 4, name: "e_flags", type: "u32" }, { offset: 40, size: 2, name: "e_ehsize", type: "u16" }, { offset: 42, size: 2, name: "e_phentsize", type: "u16" }, { offset: 44, size: 2, name: "e_phnum", type: "u16" }, { offset: 46, size: 2, name: "e_shentsize", type: "u16" }, { offset: 48, size: 2, name: "e_shnum", type: "u16" }, { offset: 50, size: 2, name: "e_shstrndx", type: "u16" }], H = [{ offset: 0, size: 4, name: "entry.branch", type: "bytes", description: "ARM branch executed by the BIOS after header validation" }, { offset: 4, size: 156, name: "nintendo.logo", type: "bytes", description: "Fixed Nintendo logo bitmap checked by boot ROM" }, { offset: 160, size: 12, name: "game.title", type: "string", description: "ASCII cartridge title" }, { offset: 172, size: 4, name: "game.code", type: "string", description: "Four-character game code" }, { offset: 176, size: 2, name: "maker.code", type: "string", description: "Two-character maker code" }, { offset: 178, size: 1, name: "fixed.0x96", type: "u8", description: "Fixed value required by the GBA BIOS" }, { offset: 179, size: 1, name: "unit.code", type: "u8", description: "Usually 0x00 for GBA" }, { offset: 180, size: 1, name: "device.type", type: "u8", description: "Device type / debug field" }, { offset: 181, size: 7, name: "reserved", type: "bytes" }, { offset: 188, size: 1, name: "software.version", type: "u8" }, { offset: 189, size: 1, name: "complement.checksum", type: "u8", description: "Header checksum over bytes 0xA0..0xBC" }, { offset: 190, size: 2, name: "reserved.tail", type: "bytes" }];
  function T(b) {
    return (b >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function D(b) {
    return "0x" + (b >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function se(b) {
    return b >= 32 && b <= 126 ? String.fromCharCode(b) : ".";
  }
  function ce() {
    return n() === "elf" ? F : n() === "gba" ? H : [];
  }
  function Y(b) {
    for (const O of ce()) if (b >= O.offset && b < O.offset + O.size) return O;
    return null;
  }
  function fe(b) {
    if (!t.bytes || b.offset + b.size > t.bytes.byteLength) return "-";
    if (b.type === "string") return Array.from(t.bytes.subarray(b.offset, b.offset + b.size)).map((O) => O >= 32 && O <= 126 ? String.fromCharCode(O) : ".").join("").trim();
    if (b.type === "u8") return `0x${T(t.bytes[b.offset])} (${t.bytes[b.offset]})`;
    if (b.type === "u16") {
      const O = t.bytes[b.offset] | t.bytes[b.offset + 1] << 8;
      return `0x${O.toString(16).toUpperCase().padStart(4, "0")} (${O})`;
    }
    if (b.type === "u32" || b.type === "u32be") {
      const O = b.type === "u32be" ? (t.bytes[b.offset] << 24 | t.bytes[b.offset + 1] << 16 | t.bytes[b.offset + 2] << 8 | t.bytes[b.offset + 3]) >>> 0 : (t.bytes[b.offset] | t.bytes[b.offset + 1] << 8 | t.bytes[b.offset + 2] << 16 | t.bytes[b.offset + 3] << 24) >>> 0;
      return `0x${O.toString(16).toUpperCase().padStart(8, "0")} (${O})`;
    }
    return Array.from(t.bytes.subarray(b.offset, b.offset + b.size)).map(T).join(" ");
  }
  function N() {
    if (!t.bytes) return [];
    const b = Math.min(t.bytes.byteLength, s(i) + l), O = [];
    for (let K = s(i); K < b; K += 16) {
      const _e = Math.min(t.bytes.byteLength, K + 16), Oe = [], S = [];
      for (let R = K; R < _e; R++) {
        const G = Y(R);
        Oe.push({ off: R, value: t.bytes[R], hex: T(t.bytes[R]), field: G, gap: R - K === 7 ? "wide" : "" }), S.push({ off: R, ch: se(t.bytes[R]), field: G });
      }
      O.push({ off: K, cells: Oe, ascii: S });
    }
    return O;
  }
  function W() {
    d(o, N(), true);
  }
  Ue(() => {
    let b = false;
    return Sn().then((O) => {
      if (b) return;
      d(f, O, true), d(v, Math.max(64, Math.ceil((t.bytes?.length ?? 0) / 256)), true), d(u, t.bytes ? s(f).entropy_blocks(t.bytes, s(v)) : [], true), W();
    }), () => {
      b = true;
    };
  }), Ue(() => {
    const b = t.bytes;
    d(i, 0), d(p, null), d(y, null), W(), s(f) && (d(v, Math.max(64, Math.ceil((b?.length ?? 0) / 256)), true), d(u, b ? s(f).entropy_blocks(b, s(v)) : [], true));
  }), Ue(() => {
    n(), W();
  });
  function Q(b, O = true) {
    if (!t.bytes || !t.bytes.length) return;
    const K = Math.max(0, Math.min(t.bytes.length - 1, Number(b) | 0)), _e = Math.floor(K / 16) * 16, Oe = Math.floor(_e / l) * l;
    d(i, Oe), W(), O && (d(C, _e), d(x, performance.now() + P), Aa(q)), requestAnimationFrame(() => {
      if (!s(g)) return;
      const S = s(g).querySelector(`[data-row-off="${_e}"]`);
      if (!S) return;
      const R = s(g).getBoundingClientRect(), ye = S.getBoundingClientRect().top - R.top - R.height / 3;
      s(g).scrollTo({ top: s(g).scrollTop + ye, behavior: "smooth" });
    });
  }
  Ue(() => {
    if (a() == null) return;
    const b = typeof a() == "object" ? a().o : a();
    Q(b, true);
  });
  let ue = -1;
  Ue(() => {
    const b = r();
    if (!b || typeof b.offset != "number") {
      ue = -1;
      return;
    }
    const O = Math.floor(b.offset / 16);
    O !== ue && (ue = O, Q(b.offset, false));
  }), Ue(() => {
    if (s(q) === 0) return;
    let b = 0;
    const O = () => {
      if (performance.now() >= s(x)) {
        d(C, null);
        return;
      }
      d(q, s(q) + 1 & 4095), b = requestAnimationFrame(O);
    };
    return b = requestAnimationFrame(O), () => cancelAnimationFrame(b);
  });
  function k(b) {
    d(i, Math.max(0, Math.min((t.bytes?.length ?? 0) - 1, s(i) + b)), true), d(i, Math.floor(s(i) / 16) * 16), W();
  }
  function I(b) {
    b.preventDefault();
    let O = s(h).trim();
    if (!O) return;
    (O.startsWith("0x") || O.startsWith("0X")) && (O = O.slice(2));
    const K = parseInt(O, 16);
    Number.isFinite(K) && Q(K, true);
  }
  function L(b) {
    if (!s(u).length || !t.bytes) return;
    const K = b.currentTarget.getBoundingClientRect(), _e = Math.max(0, Math.min(1, (b.clientX - K.left) / K.width)), Oe = Math.floor(_e * t.bytes.length);
    Q(Oe, true);
  }
  function Z() {
    if (!t.bytes || s(p) == null || s(p) < 0 || s(p) >= t.bytes.length) return null;
    const b = t.bytes[s(p)], O = s(p) + 1 < t.bytes.length ? t.bytes[s(p)] | t.bytes[s(p) + 1] << 8 : null, K = s(p) + 3 < t.bytes.length ? (t.bytes[s(p)] | t.bytes[s(p) + 1] << 8 | t.bytes[s(p) + 2] << 16 | t.bytes[s(p) + 3] << 24) >>> 0 : null, _e = [`OFF ${D(s(p))}`, `BYTE 0x${T(b)} (${b})`, `ASCII '${se(b)}'`];
    return O !== null && _e.push(`U16LE 0x${O.toString(16).toUpperCase().padStart(4, "0")}`), K !== null && _e.push(`U32LE 0x${K.toString(16).toUpperCase().padStart(8, "0")}`), _e.join(" \xB7 ");
  }
  let ie = Ft(() => t.bytes && t.bytes.length ? s(i) / t.bytes.length : 0);
  function we(b, O) {
    if (s(C) == null || b !== s(C)) return 0;
    const K = s(x) - performance.now();
    return K <= 0 ? 0 : K / P;
  }
  var De = sl(), Ie = c(De), Ne = _(c(Ie), 2), Re = c(Ne), Le = _(Re, 2), te = _(Le, 2), ke = _(c(te), 2), E = _(te, 2), B = _(E, 2), z = _(Ie, 2);
  {
    var X = (b) => {
      var O = Zi(), K = _(c(O), 2), _e = c(K);
      Ve(_e, 17, () => s(u), He, (G, ye) => {
        var xe = Ji();
        V((re) => $t(xe, `height: ${re ?? ""}%; opacity: ${0.35 + s(ye) * 0.65}`), [() => Math.max(2, s(ye) * 100)]), M(G, xe);
      });
      var Oe = _(_e, 2), S = _(K, 2), R = c(S);
      V((G) => {
        $t(Oe, `left: ${s(ie) * 100}%`), m(R, `${G ?? ""} B / col`);
      }, [() => s(v).toLocaleString()]), be("click", K, L), M(b, O);
    };
    le(z, (b) => {
      s(u).length > 1 && b(X);
    });
  }
  var ne = _(z, 2);
  Ve(ne, 21, () => s(o), He, (b, O, K) => {
    var _e = tl();
    let Oe;
    var S = c(_e), R = c(S), G = _(S, 2);
    Ve(G, 21, () => s(O).cells, He, (xe, re, ve) => {
      var Ae = $i(), w = et(Ae);
      let $;
      var ee = c(w), Se = _(w);
      {
        var Fe = (Ce) => {
          var Ee = Qi();
          let Me;
          V(() => Me = qe(Ee, 1, "svelte-14j5q0g", null, Me, { wide: s(re).gap === "wide" })), M(Ce, Ee);
        };
        le(Se, (Ce) => {
          ve < s(O).cells.length - 1 && Ce(Fe);
        });
      }
      V((Ce) => {
        $ = qe(w, 1, "byte svelte-14j5q0g", null, $, { ovr: !!s(re).field, hot: s(y) && s(re).field === s(y), sel: s(p) === s(re).off }), Ye(w, "title", Ce), m(ee, s(re).hex);
      }, [() => s(re).field ? s(re).field.name : `offset ${D(s(re).off)}`]), be("click", w, () => d(p, s(re).off, true)), ft("mouseenter", w, () => d(y, s(re).field, true)), ft("mouseleave", w, () => s(y) === s(re).field && d(y, null)), M(xe, Ae);
    });
    var ye = _(G, 2);
    Ve(ye, 21, () => s(O).ascii, He, (xe, re) => {
      var ve = el();
      let Ae;
      var w = c(ve);
      V(() => {
        Ae = qe(ve, 1, "char svelte-14j5q0g", null, Ae, { ovr: !!s(re).field, hot: s(y) && s(re).field === s(y), sel: s(p) === s(re).off }), m(w, s(re).ch);
      }), be("click", ve, () => d(p, s(re).off, true)), ft("mouseenter", ve, () => d(y, s(re).field, true)), ft("mouseleave", ve, () => s(y) === s(re).field && d(y, null)), M(xe, ve);
    }), V((xe, re) => {
      Oe = qe(_e, 1, "hex-row svelte-14j5q0g", null, Oe, { hover: s(A) === K, flash: s(O).off === s(C) }), Ye(_e, "data-row-off", s(O).off), $t(_e, xe), m(R, re);
    }, [() => s(O).off === s(C) ? `--flash-a: ${we(s(O).off, s(q))}` : "", () => D(s(O).off)]), ft("mouseenter", _e, () => d(A, K, true)), ft("mouseleave", _e, () => s(A) === K && d(A, null)), M(b, _e);
  }), Wt(ne, (b) => d(g, b), () => s(g));
  var ae = _(ne, 2), ge = c(ae);
  {
    var he = (b) => {
      var O = rl(), K = _(c(O), 2), _e = c(K), Oe = _(K, 4), S = c(Oe), R = _(Oe, 4), G = c(R), ye = _(R, 2);
      {
        var xe = (re) => {
          var ve = nl(), Ae = _(et(ve), 2), w = c(Ae);
          V(() => m(w, s(y).description)), M(re, ve);
        };
        le(ye, (re) => {
          s(y).description && re(xe);
        });
      }
      V((re, ve) => {
        m(_e, s(y).name), m(S, re), m(G, ve);
      }, [() => D(s(y).offset), () => fe(s(y))]), M(b, O);
    }, me = (b) => {
      var O = Jt();
      V((K) => m(O, K), [() => Z() ?? "select a byte or hover a highlighted field"]), M(b, O);
    };
    le(ge, (b) => {
      s(y) ? b(he) : b(me, -1);
    });
  }
  V((b) => Ye(ke, "placeholder", b), [() => s(i).toString(16).padStart(8, "0").toUpperCase()]), be("click", Re, () => k(-l)), be("click", Le, () => k(-16)), ft("submit", te, I), gs(ke, () => s(h), (b) => d(h, b)), be("click", E, () => k(16)), be("click", B, () => k(l)), M(e, De), pt();
}
Xt(["click"]);
var il = j('<span class="w-meta svelte-59bj26"> </span>'), ll = j('<div class="w-empty svelte-59bj26"> </div>'), ol = j('<div class="w-empty svelte-59bj26">Decoding\u2026</div>'), fl = j('<div class="w-row svelte-59bj26"><span class="l svelte-59bj26"> </span><span class="v svelte-59bj26"> </span></div>'), cl = j('<div class="w-header svelte-59bj26"><div class="w-grid svelte-59bj26"><div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FORMAT</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHANNELS</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">SAMPLE RATE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BIT DEPTH</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">FRAMES</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DURATION</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">DATA SIZE</span><span class="v svelte-59bj26"> </span></div> <div class="w-row svelte-59bj26"><span class="l svelte-59bj26">BYTE RATE</span><span class="v svelte-59bj26"> </span></div></div> <div class="w-col svelte-59bj26"><div class="w-row svelte-59bj26"><span class="l svelte-59bj26">CHUNKS</span><span class="v svelte-59bj26"> </span></div> <!></div></div></div> <div class="w-controls svelte-59bj26"><button class="w-play svelte-59bj26">PLAY</button> <button class="w-stop svelte-59bj26">STOP</button> <span class="w-clock svelte-59bj26"> </span></div> <div class="w-canvas-wrap svelte-59bj26"><canvas class="w-canvas svelte-59bj26"></canvas></div> <p class="w-note svelte-59bj26">Rust-decoded RIFF/WAVE. PCM \u2192 Float32 envelope (256 buckets) for the canvas; full mono buffer flows into Web Audio. Click the canvas to seek.</p>', 1), ul = j('<div class="w-wrap svelte-59bj26"><div class="w-bar svelte-59bj26"><span class="w-title svelte-59bj26">[ WAVE / PCM AUDIO ]</span> <!></div> <!></div>');
function vl(e, t) {
  _t(t, true);
  let n = U(null), a = U(""), r = U(null), i = U(null), l = null, o = null, f = null, u = 0, v = 0, h = 0, p = U("0:00 / 0:00");
  function y(k) {
    return "0x" + (Number(k) >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function A(k) {
    return k < 1024 ? `${k} B` : k < 1024 * 1024 ? `${(k / 1024).toFixed(1)} KiB` : `${(k / 1024 / 1024).toFixed(2)} MiB`;
  }
  function C(k) {
    if (k < 1) return `${(k * 1e3).toFixed(0)} ms`;
    if (k < 60) return `${k.toFixed(2)} s`;
    const I = Math.floor(k / 60), L = k - I * 60;
    return `${I}m ${L.toFixed(1)}s`;
  }
  function x(k) {
    return k.replace(/\s+$/g, "");
  }
  async function q(k) {
    if (d(a, ""), !k) {
      d(n, null);
      return;
    }
    try {
      const L = (await Sn()).decode_wav(k);
      d(n, L, true), f = null, d(p, `0:00 / ${C(L.duration)}`), requestAnimationFrame(() => P({ playhead: 0 }));
    } catch (I) {
      console.error("[scry/wave] decode failed", I), d(n, null), d(a, String(I?.message || I), true);
    }
  }
  function P({ playhead: k = null } = {}) {
    if (!s(r) || !s(n)) return;
    const I = window.devicePixelRatio || 1, L = s(r).getBoundingClientRect(), Z = Math.max(1, Math.floor(L.width * I)), ie = Math.max(1, Math.floor(L.height * I));
    s(r).width = Z, s(r).height = ie;
    const we = getComputedStyle(s(r)), De = we.getPropertyValue("--w-bg").trim() || "#000", Ie = we.getPropertyValue("--w-grid").trim() || "#333", Ne = we.getPropertyValue("--w-peak").trim() || "#888", Re = we.getPropertyValue("--w-rms").trim() || "#bcd", Le = we.getPropertyValue("--w-accent").trim() || "#9fe3c7", te = s(r).getContext("2d");
    te.fillStyle = De, te.fillRect(0, 0, Z, ie), te.strokeStyle = Ie, te.lineWidth = 1;
    const ke = ie / 2;
    for (const X of [0.25, 0.5, 0.75]) {
      const ne = Math.floor(ie * X) + 0.5;
      te.beginPath(), te.moveTo(0, ne), te.lineTo(Z, ne), te.stroke();
    }
    const E = s(n).envelope, B = E.length, z = Z / B;
    for (let X = 0; X < B; X++) {
      const ne = E[X], ae = Math.floor(X * z), ge = Math.max(1, Math.floor(z) - 1), he = ke - ne.max * ke, me = ke - ne.min * ke;
      te.fillStyle = Ne, te.fillRect(ae, Math.floor(he), ge, Math.max(1, Math.ceil(me - he)));
      const b = ne.rms * ke;
      te.fillStyle = Re, te.fillRect(ae, Math.floor(ke - b), ge, Math.max(1, Math.ceil(2 * b)));
    }
    if (k != null) {
      const X = Math.floor(k * Z);
      te.strokeStyle = Le, te.lineWidth = 2 * I, te.beginPath(), te.moveTo(X, 0), te.lineTo(X, ie), te.stroke();
    }
  }
  function g() {
    if (!s(n)) return null;
    if (f) return f;
    l || (l = new (window.AudioContext || window.webkitAudioContext)());
    const k = s(n).samples instanceof Float32Array ? s(n).samples : new Float32Array(s(n).samples);
    return f = l.createBuffer(1, k.length, s(n).fmt.sample_rate), f.copyToChannel(k, 0), f;
  }
  function F() {
    if (!l || !o || !s(n)) {
      h = 0;
      return;
    }
    const k = v + (l.currentTime - u), I = s(n).duration, L = Math.max(0, Math.min(1, k / I));
    P({ playhead: L }), d(p, `${C(Math.min(k, I))} / ${C(I)}`), k < I ? h = requestAnimationFrame(F) : h = 0;
  }
  function H() {
    if (h && (cancelAnimationFrame(h), h = 0), o) {
      try {
        o.stop();
      } catch {
      }
      o.disconnect(), o = null;
    }
  }
  function T(k) {
    if (!s(n)) return;
    const I = g();
    I && (H(), o = l.createBufferSource(), o.buffer = I, o.connect(l.destination), o.onended = () => {
      h && cancelAnimationFrame(h), h = 0, P({ playhead: 0 }), d(p, `0:00 / ${C(s(n).duration)}`), o = null;
    }, l.state === "suspended" && l.resume(), v = Math.max(0, Math.min(s(n).duration - 1e-3, k)), u = l.currentTime, o.start(0, v), h = requestAnimationFrame(F));
  }
  function D(k) {
    if (!s(n)) return;
    const I = s(r).getBoundingClientRect(), L = (k.clientX - I.left) / I.width;
    T(L * s(n).duration);
  }
  Ue(() => {
    const k = t.bytes;
    return q(k), () => H();
  }), Ue(() => {
    if (!s(i)) return;
    const k = new ResizeObserver(() => s(n) && P({ playhead: 0 }));
    return k.observe(s(i)), () => k.disconnect();
  });
  var se = ul(), ce = c(se), Y = _(c(ce), 2);
  {
    var fe = (k) => {
      var I = il(), L = c(I);
      V((Z) => m(L, `${s(n).fmt.channels ?? ""}ch @ ${s(n).fmt.sample_rate ?? ""} Hz \xB7 ${s(n).fmt.bits_per_sample ?? ""}-bit \xB7 ${Z ?? ""}`), [() => C(s(n).duration)]), M(k, I);
    };
    le(Y, (k) => {
      s(n) && k(fe);
    });
  }
  var N = _(ce, 2);
  {
    var W = (k) => {
      var I = ll(), L = c(I);
      V(() => m(L, `Not a parseable WAV: ${s(a) ?? ""}`)), M(k, I);
    }, Q = (k) => {
      var I = ol();
      M(k, I);
    }, ue = (k) => {
      var I = cl(), L = et(I), Z = c(L), ie = c(Z), we = c(ie), De = _(c(we)), Ie = c(De), Ne = _(we, 2), Re = _(c(Ne)), Le = c(Re), te = _(Ne, 2), ke = _(c(te)), E = c(ke), B = _(te, 2), z = _(c(B)), X = c(z), ne = _(ie, 2), ae = c(ne), ge = _(c(ae)), he = c(ge), me = _(ae, 2), b = _(c(me)), O = c(b), K = _(me, 2), _e = _(c(K)), Oe = c(_e), S = _(K, 2), R = _(c(S)), G = c(R), ye = _(ne, 2), xe = c(ye), re = _(c(xe)), ve = c(re), Ae = _(xe, 2);
      Ve(Ae, 17, () => s(n).chunks.slice(0, 4), He, (Me, We) => {
        var ht = fl(), ot = c(ht), wt = c(ot), on = _(ot), Un = c(on);
        V((zn, Wn, Cs) => {
          m(wt, zn), m(Un, `${Wn ?? ""} @ ${Cs ?? ""}`);
        }, [() => x(s(We).id), () => A(s(We).size), () => y(s(We).offset)]), M(Me, ht);
      });
      var w = _(L, 2), $ = c(w), ee = _($, 2), Se = _(ee, 2), Fe = c(Se), Ce = _(w, 2), Ee = c(Ce);
      Wt(Ee, (Me) => d(r, Me), () => s(r)), Wt(Ce, (Me) => d(i, Me), () => s(i)), V((Me, We, ht, ot) => {
        m(Ie, s(n).fmt.format === 1 ? "PCM (int)" : s(n).fmt.format === 3 ? "IEEE float" : `tag ${s(n).fmt.format}`), m(Le, s(n).fmt.channels), m(E, `${s(n).fmt.sample_rate ?? ""} Hz`), m(X, `${s(n).fmt.bits_per_sample ?? ""}-bit`), m(he, Me), m(O, We), m(Oe, ht), m(G, `${ot ?? ""}/s`), m(ve, s(n).chunks.length), m(Fe, s(p));
      }, [() => Number(s(n).total_frames).toLocaleString(), () => C(s(n).duration), () => A(s(n).data_len), () => A(s(n).fmt.byte_rate)]), be("click", $, () => T(0)), be("click", ee, () => {
        H(), P({ playhead: 0 }), d(p, `0:00 / ${C(s(n).duration)}`);
      }), be("click", Ee, D), M(k, I);
    };
    le(N, (k) => {
      s(a) ? k(W) : s(n) ? k(ue, -1) : k(Q, 1);
    });
  }
  M(e, se), pt();
}
Xt(["click"]);
var dl = j('<span class="c-meta svelte-1uww35p"> </span>'), _l = j('<div class="c-empty svelte-1uww35p"> </div>'), pl = j('<div class="c-empty svelte-1uww35p">Parsing\u2026</div>'), hl = j('<div class="c-hex-row svelte-1uww35p"><span class="addr svelte-1uww35p"> </span> <span class="bytes svelte-1uww35p"> </span> <span class="ascii svelte-1uww35p"> </span></div>'), bl = j(`<div class="c-split svelte-1uww35p"><div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ DECODED HEADER ]</div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">TITLE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">GAME CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">MAKER</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">FIXED</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">UNIT CODE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">DEVICE</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">VERSION</span><span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">CHECKSUM</span> <span class="v svelte-1uww35p"> </span></div> <div class="c-row svelte-1uww35p"><span class="l svelte-1uww35p">SIZE</span><span class="v svelte-1uww35p"> </span></div> <p class="c-note svelte-1uww35p">V2 parses GBA cartridges in Rust (<code class="svelte-1uww35p">scry-core::parse_gba</code>) and verifies the
          one-byte Nintendo header checksum (sum bytes 0xA0..=0xBC, negate, subtract 0x19).
          Emulation lives in V1's GAME pane (vendored <code class="svelte-1uww35p">gbajs</code>); the V2 port is on the roadmap.</p></div> <div class="c-col svelte-1uww35p"><div class="c-section-title svelte-1uww35p">[ HEADER BYTES 0xA0\\u20130xDF ]</div> <div class="c-hex svelte-1uww35p"></div></div></div>`), gl = j('<div class="c-wrap svelte-1uww35p"><div class="c-bar svelte-1uww35p"><span class="c-title svelte-1uww35p">[ GBA / CARTRIDGE ]</span> <!></div> <!></div>');
function ml(e, t) {
  _t(t, true);
  let n = U(null), a = U("");
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
  async function f(g) {
    if (d(a, ""), !g) {
      d(n, null);
      return;
    }
    try {
      const F = await Sn();
      d(n, F.parse_gba(g), true);
    } catch (F) {
      console.error("[scry/cart] parse failed", F), d(n, null), d(a, String(F?.message || F), true);
    }
  }
  Ue(() => {
    const g = t.bytes;
    f(g);
  });
  function u(g) {
    if (!t.bytes) return null;
    const F = t.bytes.subarray(g, Math.min(t.bytes.length, g + 16)), H = [], T = [];
    for (let D = 0; D < F.length; D++) H.push(r(F[D])), T.push(l(F[D])), D === 7 && H.push("");
    return { off: g, hex: H.join(" ").replace(/  /g, "  "), ascii: T.join("") };
  }
  let v = Ft(() => {
    if (!t.bytes) return [];
    const g = [];
    for (let F = 160; F < 224; F += 16) {
      const H = u(F);
      H && g.push(H);
    }
    return g;
  });
  var h = gl(), p = c(h), y = _(c(p), 2);
  {
    var A = (g) => {
      var F = dl(), H = c(F);
      V((T) => m(H, `"${(s(n).title || "(blank)") ?? ""}" \xB7 ${s(n).game_code ?? ""} \xB7 ${T ?? ""}`), [() => o(s(n).rom_size)]), M(g, F);
    };
    le(y, (g) => {
      s(n) && g(A);
    });
  }
  var C = _(p, 2);
  {
    var x = (g) => {
      var F = _l(), H = c(F);
      V(() => m(H, `parse failed: ${s(a) ?? ""}`)), M(g, F);
    }, q = (g) => {
      var F = pl();
      M(g, F);
    }, P = (g) => {
      var F = bl(), H = c(F), T = _(c(H), 2), D = _(c(T)), se = c(D), ce = _(T, 2), Y = _(c(ce)), fe = c(Y), N = _(ce, 2), W = _(c(N)), Q = c(W), ue = _(N, 2), k = _(c(ue), 2), I = c(k), L = _(ue, 2), Z = _(c(L)), ie = c(Z), we = _(L, 2), De = _(c(we)), Ie = c(De), Ne = _(we, 2), Re = _(c(Ne)), Le = c(Re), te = _(Ne, 2), ke = _(c(te), 2), E = c(ke), B = _(te, 2), z = _(c(B)), X = c(z), ne = _(H, 2), ae = _(c(ne), 2);
      Ve(ae, 21, () => s(v), He, (ge, he) => {
        var me = hl(), b = c(me), O = c(b), K = _(b, 2), _e = c(K), Oe = _(K, 2), S = c(Oe);
        V((R) => {
          m(O, R), m(_e, s(he).hex), m(S, s(he).ascii);
        }, [() => i(s(he).off)]), M(ge, me);
      }), V((ge, he, me, b, O, K, _e) => {
        m(se, s(n).title || "(blank)"), m(fe, s(n).game_code || "----"), m(Q, s(n).maker_code || "--"), m(I, `0x${ge ?? ""} ${s(n).fixed_ok ? "\u2713" : "\u2717"}`), m(ie, `0x${he ?? ""}`), m(Ie, `0x${me ?? ""}`), m(Le, `0x${b ?? ""}`), m(E, `stored 0x${O ?? ""} \xB7
            computed 0x${K ?? ""}
            ${s(n).checksum_ok ? " \u2713" : " \u2717"}`), m(X, _e);
      }, [() => r(s(n).fixed), () => r(s(n).unit_code), () => r(s(n).device_type), () => r(s(n).version), () => r(s(n).checksum), () => r(s(n).checksum_computed), () => o(s(n).rom_size)]), M(g, F);
    };
    le(C, (g) => {
      s(a) ? g(x) : s(n) ? g(P, -1) : g(q, 1);
    });
  }
  M(e, h), pt();
}
var yl = j('<section class="mh-host svelte-sq0dz7"><div class="mh-bar svelte-sq0dz7"><span class="mh-title svelte-sq0dz7"> </span> <form class="mh-jumpform svelte-sq0dz7"><span class="mh-jumplab svelte-sq0dz7">JUMP</span> <input type="text" placeholder="0x..." class="mh-jump svelte-sq0dz7" aria-label="jump to offset"/></form></div> <div class="mh-scroll svelte-sq0dz7" role="grid" tabindex="0"><div class="mh-sizer svelte-sq0dz7"></div></div> <div class="mh-detail svelte-sq0dz7"> </div></section>');
function wl(e, t) {
  _t(t, true);
  let n = Gt(t, "cursor", 3, null), a = Gt(t, "follow", 3, false), r = Gt(t, "onByteClick", 3, null);
  const i = 16, l = 20, o = 6, f = 5e5;
  let u, v, h, p = 0, y = [], A = null, C = { physicalPx: 0, scale: 1 }, x = -1, q = U(null);
  function P(E) {
    return (E >>> 0).toString(16).padStart(2, "0").toUpperCase();
  }
  function g(E) {
    return "0x" + (E >>> 0).toString(16).padStart(8, "0").toUpperCase();
  }
  function F(E) {
    return E >= 32 && E <= 126 ? String.fromCharCode(E) : ".";
  }
  function H(E, B) {
    const z = Math.max(0, E * B);
    return z <= f ? { physicalPx: z, scale: 1 } : { physicalPx: f, scale: z / f };
  }
  function T(E, B, z, X) {
    if (z === 0) return { start: 0, end: 0, topPx: 0 };
    const ne = E * X, ae = Math.ceil(B / l) + o * 2, ge = Math.floor(ne / l) - o, he = Math.max(0, ge), me = Math.min(z, he + ae);
    let b;
    if (X === 1) b = he * l;
    else {
      const O = ne - he * l;
      b = E - O / X;
    }
    return { start: he, end: me, topPx: b };
  }
  function D(E, B) {
    const z = E * i, X = Math.min(B.byteLength, z + i), ne = B.subarray(z, X), ae = [], ge = [];
    for (let he = 0; he < ne.length; he++) {
      const me = z + he;
      ae.push({ off: me, text: P(ne[he]), gap: he === 7 ? "wide" : "" }), ge.push({ off: me, text: F(ne[he]) });
    }
    return { addr: g(z), hex: ae, asc: ge };
  }
  function se(E, B, z, X) {
    E.textContent = "";
    for (let ne = 0; ne < B.length; ne++) {
      const ae = B[ne], ge = document.createElement("span");
      ge.className = z, ae.off === s(q) && ge.classList.add("mh-selected"), ae.off === X && ge.classList.add("mh-pc-byte"), ge.dataset.off = String(ae.off), ge.textContent = ae.text, E.appendChild(ge), z === "mh-cell" && ne < B.length - 1 && E.appendChild(document.createTextNode(ae.gap === "wide" ? "  " : " "));
    }
  }
  function ce() {
    const E = s(q) ?? n();
    if (!t.bytes || typeof E != "number" || E < 0 || E >= t.bytes.byteLength) return null;
    const B = t.bytes[E], z = E + 1 < t.bytes.byteLength ? t.bytes[E] | t.bytes[E + 1] << 8 : null, X = E + 3 < t.bytes.byteLength ? (t.bytes[E] | t.bytes[E + 1] << 8 | t.bytes[E + 2] << 16 | t.bytes[E + 3] << 24) >>> 0 : null, ne = [`OFF ${g(E)}`, `BYTE 0x${P(B)} (${B})`, `ASCII '${F(B)}'`];
    return z !== null && ne.push(`U16LE 0x${z.toString(16).toUpperCase().padStart(4, "0")}`), X !== null && ne.push(`U32LE 0x${X.toString(16).toUpperCase().padStart(8, "0")}`), ne.join(" \xB7 ");
  }
  function Y(E) {
    for (; y.length < E; ) {
      const B = document.createElement("div");
      B.className = "mh-row", B.style.position = "absolute", B.style.left = "0", B.style.right = "0", B.style.height = `${l}px`;
      const z = document.createElement("span");
      z.className = "mh-addr";
      const X = document.createElement("span");
      X.className = "mh-bytes";
      const ne = document.createElement("span");
      ne.className = "mh-ascii", B.appendChild(z), B.appendChild(X), B.appendChild(ne), y.push(B);
    }
  }
  function fe() {
    const E = t.bytes;
    if (!v) return;
    if (!E || E.byteLength === 0) {
      for (const ae of y) ae.parentNode && ae.remove();
      v.style.height = "0px";
      return;
    }
    const B = Math.ceil(E.byteLength / i);
    C = H(B, l), v.style.height = `${C.physicalPx}px`;
    const z = T(u.scrollTop, p, B, C.scale), X = z.end - z.start;
    Y(X);
    for (let ae = X; ae < y.length; ae++) y[ae].parentNode && y[ae].remove();
    const ne = typeof n() == "number" && n() >= 0 && n() < E.byteLength ? Math.floor(n() / i) : -1;
    for (let ae = 0; ae < X; ae++) {
      const ge = z.start + ae, he = D(ge, E), me = y[ae];
      me.style.top = `${z.topPx + ae * l}px`;
      const [b, O, K] = me.children;
      b.textContent = he.addr, se(O, he.hex, "mh-cell", n()), se(K, he.asc, "mh-char", n()), ge === ne ? me.classList.add("mh-cursor") : me.classList.remove("mh-cursor"), me.parentNode !== v && v.appendChild(me);
    }
  }
  function N() {
    const E = t.bytes;
    if (!E || typeof n() != "number" || n() < 0 || n() >= E.byteLength || !u) return;
    const z = Math.floor(n() / i) * l, X = z / C.scale, ne = l * 4, ae = u.scrollTop, ge = ae + p;
    (X < ae + ne || X > ge - ne) && (u.scrollTop = Math.max(0, (z - p / 2) / C.scale));
  }
  function W(E) {
    const B = t.bytes;
    if (!B || E < 0 || E >= B.byteLength) return;
    d(q, E, true);
    const X = Math.floor(E / i) * l;
    u.scrollTop = Math.max(0, (X - p / 2) / C.scale), fe();
  }
  function Q(E) {
    E.preventDefault();
    const B = h.value.trim().replace(/^0x/i, ""), z = parseInt(B, 16);
    Number.isFinite(z) && W(z);
  }
  function ue(E) {
    const B = E.target.closest("[data-off]");
    if (!B || !t.bytes) return;
    const z = Number(B.dataset.off);
    !Number.isFinite(z) || z < 0 || z >= t.bytes.byteLength || (d(q, z, true), fe(), r()?.(z));
  }
  function k(E) {
    E.key !== "Enter" && E.key !== " " || !E.target.closest("[data-off]") || (E.preventDefault(), ue(E));
  }
  let I;
  ms(() => {
    I = new ResizeObserver(() => {
      p = u.clientHeight, fe();
    }), I.observe(u), u.addEventListener("scroll", fe, { passive: true }), fe();
  }), ys(() => {
    try {
      I?.disconnect();
    } catch {
    }
  }), Ue(() => {
    t.bytes !== A && (A = t.bytes, x = -1, d(q, null), u && (u.scrollTop = 0), fe(), t.bytes && t.bytes.byteLength >= 192 && requestAnimationFrame(() => W(160)));
  });
  let L = false;
  Ue(() => {
    const E = n(), B = a();
    if (!t.bytes) return;
    const z = typeof E == "number" && E >= 0 && E < t.bytes.byteLength ? Math.floor(E / i) : -1, X = B !== L;
    L = B, !(z === x && !X) && (x = z, fe(), B && requestAnimationFrame(N));
  });
  var Z = yl(), ie = c(Z), we = c(ie), De = c(we), Ie = _(we, 2), Ne = _(c(Ie), 2);
  Wt(Ne, (E) => h = E, () => h);
  var Re = _(ie, 2), Le = c(Re);
  Wt(Le, (E) => v = E, () => v), Wt(Re, (E) => u = E, () => u);
  var te = _(Re, 2), ke = c(te);
  V((E, B) => {
    m(De, E), m(ke, B);
  }, [() => t.bytes ? `ROM (${t.bytes.byteLength.toLocaleString()} bytes)` : "ROM (empty)", () => ce() ?? (t.bytes ? "select a byte" : "no ROM loaded")]), ft("submit", Ie, Q), be("click", Re, ue), be("keydown", Re, k), M(e, Z), pt();
}
Xt(["click", "keydown"]);
const xl = 33554432, El = [{ start: 0, end: 16384, label: "BIOS" }, { start: 33554432, end: 33816576, label: "EWRAM" }, { start: 50331648, end: 50364416, label: "IWRAM" }, { start: 67108864, end: 67109888, label: "I/O" }, { start: 83886080, end: 83887104, label: "PAL" }, { start: 100663296, end: 100761600, label: "VRAM" }, { start: 117440512, end: 117441536, label: "OAM" }, { start: 234881024, end: 234946560, label: "SRAM" }], Al = [{ start: 134217728, label: "ROM0" }, { start: 167772160, label: "ROM1" }, { start: 201326592, label: "ROM2" }];
function kl(e, t = 0) {
  const n = e >>> 0;
  for (const a of Al) {
    const r = n - a.start;
    if (r >= 0 && r < xl) return t > 0 ? { address: n, label: a.label, inCart: true, offset: r % t, rawOffset: r, mirrored: r >= t } : { address: n, label: a.label, inCart: false, offset: null, rawOffset: r, mirrored: false };
  }
  for (const a of El) if (n >= a.start && n < a.end) return { address: n, label: a.label, inCart: false, offset: null, rawOffset: n - a.start, mirrored: false };
  return { address: n, label: "BUS", inCart: false, offset: null, rawOffset: null, mirrored: false };
}
function Sl(e) {
  const t = e?.gprs?.[15];
  if (typeof t != "number") return null;
  const n = Number(e?.instructionWidth) || 4;
  return (t >>> 0) - n >>> 0;
}
function Ml(e) {
  return e?.execMode === e?.MODE_THUMB ? "THUMB" : "ARM";
}
var Cl = j('<span class="g-meta svelte-1kb9ux"> </span>'), Tl = j(" <!>", 1), Rl = j("<span> <!></span>"), Ol = j("<span> <!></span>"), Fl = j('<button type="button"><span class="g-trail-age svelte-1kb9ux"></span> <span class="g-trail-pc"> </span> <span class="g-trail-off svelte-1kb9ux"> </span> <span class="g-trail-mode svelte-1kb9ux"> </span></button>'), Ll = j('<div class="g-trail-title svelte-1kb9ux">RECENT CART PC</div> <!>', 1), jl = j('<div class="g-click-note svelte-1kb9ux"> </div>'), Il = j(`<div class="g-wrap svelte-1kb9ux"><div class="g-bar svelte-1kb9ux"><span class="g-title svelte-1kb9ux">[ GBA / EMULATOR ]</span> <!></div> <div class="g-split svelte-1kb9ux"><div class="g-left svelte-1kb9ux"><div class="g-canvas-wrap svelte-1kb9ux"><canvas tabindex="0" class="g-canvas svelte-1kb9ux"></canvas></div> <div class="g-controls svelte-1kb9ux"><button class="g-btn svelte-1kb9ux" type="button">PLAY</button> <button class="g-btn svelte-1kb9ux" type="button">PAUSE</button> <button class="g-btn svelte-1kb9ux" type="button">RESET</button> <button type="button" title="Auto-scroll the ROM view to wherever the CPU's program counter currently is"><span class="g-follow-led svelte-1kb9ux" aria-hidden="true"></span> <span class="g-follow-lab"> </span></button> <span class="g-status svelte-1kb9ux"> </span> <span class="g-hint svelte-1kb9ux">arrows = D-pad &middot; Z/X = A/B &middot; Enter = Start</span></div></div> <div class="g-right svelte-1kb9ux"><div class="g-sub-bar svelte-1kb9ux"><span class="g-sub-title svelte-1kb9ux">[ ROM / INSPECTOR ]</span> <span class="g-sub-hint svelte-1kb9ux"><!></span></div> <!> <div class="g-pc-trail svelte-1kb9ux"><!> <!></div></div></div></div>`);
function Nl(e, t) {
  _t(t, true);
  let n = Gt(t, "onPcUpdate", 3, null), a, r = null, i = U(false), l = U(false), o = U("cart ready \xB7 click PLAY"), f = U(null), u = U(null), v = U("ARM"), h = U(false), p = U(false), y = U(ut([])), A = U(""), C = 0, x = 0;
  const q = 480, P = 320, g = 100, F = 8;
  function H(w) {
    return w < 1024 ? `${w} B` : w < 1024 * 1024 ? `${(w / 1024).toFixed(1)} KiB` : `${(w / (1024 * 1024)).toFixed(2)} MiB`;
  }
  function T(w) {
    return "0x" + (w >>> 0).toString(16).toUpperCase().padStart(8, "0");
  }
  function D() {
    n()?.({ follow: s(p), running: s(l), liveAddress: s(u)?.address ?? null, label: s(u)?.label ?? (s(i) ? "READY" : "IDLE"), mode: s(v), inCart: s(h), offset: s(f), mirrored: !!s(u)?.mirrored, trail: s(y), ts: performance.now() });
  }
  function se(w) {
    if (!w?.inCart || w.offset == null) return;
    const $ = s(y)[0];
    $ && Math.floor($.offset / 16) === Math.floor(w.offset / 16) || d(y, [{ address: w.address, offset: w.offset, label: w.label, mode: s(v), mirrored: w.mirrored, ts: performance.now() }, ...s(y)].slice(0, F), true);
  }
  function ce(w) {
    if (s(l)) {
      d(A, `ROM ${T(w)} selected while running`);
      return;
    }
    d(A, `ROM ${T(w)} \xB7 bus ${T(134217728 + w)} \xB7 V2 DISASM is not shipped yet`);
  }
  function Y() {
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
    return r.keypad.eatInput = true, r.logLevel = r.LOG_ERROR, r.setLogger((w, $) => console.warn("[scry/v2/game/gba]", $)), r.setCanvas(a), r.setBios(window.biosBin), r;
  }
  async function fe() {
    if (t.bytes && !s(l)) {
      if (a.focus(), !s(i)) {
        d(o, "loading ROM\u2026"), await new Promise((w) => requestAnimationFrame(w)), await new Promise((w) => requestAnimationFrame(w));
        try {
          const w = Y(), $ = t.bytes.buffer.slice(t.bytes.byteOffset, t.bytes.byteOffset + t.bytes.byteLength);
          if (!w.setRom($)) {
            d(o, "rom rejected");
            return;
          }
          d(i, true), w.runStable(), d(l, true), d(o, "running"), D(), Q();
        } catch (w) {
          console.error("[scry/v2/game] load failed", w), d(o, "error: " + (w?.message || w));
        }
        return;
      }
      r.runStable(), d(l, true), d(o, "running"), D(), Q();
    }
  }
  function N() {
    !r || !r.hasRom() || (r.pause(), d(l, false), d(o, "paused"), ue(), D());
  }
  function W(w) {
    if (C = requestAnimationFrame(W), !s(l) || !r || !t.bytes || w - x < g) return;
    x = w;
    const $ = Sl(r.cpu);
    $ !== null && (d(v, Ml(r.cpu), true), d(u, kl($, t.bytes.byteLength), true), s(u).inCart && s(u).offset !== null ? (d(f, s(u).offset, true), d(h, true), se(s(u))) : d(h, false), D());
  }
  function Q() {
    C || (x = 0, C = requestAnimationFrame(W));
  }
  function ue() {
    C && cancelAnimationFrame(C), C = 0;
  }
  function k() {
    d(p, !s(p)), D();
  }
  function I() {
    if (!r || !t.bytes) return;
    const w = s(l);
    if (w) {
      try {
        r.pause();
      } catch {
      }
      d(l, false);
    }
    ue(), d(f, null), d(u, null), d(h, false), d(i, false), d(o, "cart ready \xB7 click PLAY"), D(), w && fe();
  }
  Ue(() => {
    if (t.bytes) s(l) || d(o, "cart ready \xB7 click PLAY"), s(i) || (d(f, null), d(u, null), d(h, false), d(y, [], true), d(A, ""), D());
    else {
      if (r && s(l)) try {
        r.pause();
      } catch {
      }
      ue(), d(f, null), d(u, null), d(h, false), d(p, false), d(y, [], true), d(A, ""), d(i, false), d(l, false), d(o, "idle"), D();
    }
  }), ys(() => {
    if (r && s(l)) try {
      r.pause();
    } catch {
    }
    ue();
  });
  var L = Il(), Z = c(L), ie = _(c(Z), 2);
  {
    var we = (w) => {
      var $ = Cl(), ee = c($);
      V((Se) => m(ee, `"${(t.header.title || "(blank)") ?? ""}" \xB7 ${t.header.game_code ?? ""} \xB7 ${Se ?? ""}`), [() => H(t.header.rom_size)]), M(w, $);
    };
    le(ie, (w) => {
      t.header && w(we);
    });
  }
  var De = _(Z, 2), Ie = c(De), Ne = c(Ie), Re = c(Ne);
  Ye(Re, "width", q), Ye(Re, "height", P), Wt(Re, (w) => a = w, () => a);
  var Le = _(Ne, 2), te = c(Le), ke = _(te, 2), E = _(ke, 2), B = _(E, 2);
  let z;
  var X = _(c(B), 2), ne = c(X), ae = _(B, 2), ge = c(ae), he = _(Ie, 2), me = c(he), b = _(c(me), 2), O = c(b);
  {
    var K = (w) => {
      var $ = Rl();
      let ee;
      var Se = c($), Fe = _(Se);
      {
        var Ce = (Ee) => {
          var Me = Tl(), We = et(Me), ht = _(We);
          {
            var ot = (wt) => {
              var on = Jt("\xB7 mirror");
              M(wt, on);
            };
            le(ht, (wt) => {
              s(u).mirrored && wt(ot);
            });
          }
          V((wt) => m(We, `\xB7 ROM ${wt ?? ""} `), [() => T(s(u).offset)]), M(Ee, Me);
        };
        le(Fe, (Ee) => {
          s(u)?.inCart && s(u)?.offset !== null && Ee(Ce);
        });
      }
      V((Ee) => {
        ee = qe($, 1, "svelte-1kb9ux", null, ee, { "g-pc-dim": !s(u)?.inCart }), m(Se, `${s(v) ?? ""} PC\u2192${Ee ?? ""}
              \xB7 ${s(u)?.label ?? "BUS" ?? ""} `);
      }, [() => T(s(u)?.address ?? 0)]), M(w, $);
    }, _e = (w) => {
      var $ = Ol();
      let ee;
      var Se = c($), Fe = _(Se);
      {
        var Ce = (Ee) => {
          var Me = Jt();
          V((We) => m(Me, `\xB7 ROM ${We ?? ""}`), [() => T(s(u).offset)]), M(Ee, Me);
        };
        le(Fe, (Ee) => {
          s(u).inCart && s(u).offset !== null && Ee(Ce);
        });
      }
      V((Ee) => {
        ee = qe($, 1, "svelte-1kb9ux", null, ee, { "g-pc-dim": !s(u).inCart }), m(Se, `${s(v) ?? ""} PC\u2192${Ee ?? ""} \xB7 ${s(u).label ?? ""} `);
      }, [() => T(s(u).address)]), M(w, $);
    }, Oe = (w) => {
      var $ = Jt("waiting for first PC sample\u2026");
      M(w, $);
    }, S = (w) => {
      var $ = Jt("pause \xB7 scroll \xB7 jump 0x...");
      M(w, $);
    };
    le(O, (w) => {
      s(l) && s(f) !== null ? w(K) : s(u) ? w(_e, 1) : s(l) ? w(Oe, 2) : w(S, -1);
    });
  }
  var R = _(me, 2);
  wl(R, { get bytes() {
    return t.bytes;
  }, get cursor() {
    return s(f);
  }, get follow() {
    return s(p);
  }, onByteClick: ce });
  var G = _(R, 2), ye = c(G);
  {
    var xe = (w) => {
      var $ = Ll(), ee = _(et($), 2);
      Ve(ee, 17, () => s(y), He, (Se, Fe, Ce) => {
        var Ee = Fl();
        qe(Ee, 1, "g-trail-row svelte-1kb9ux", null, {}, { hot: Ce === 0 });
        var Me = c(Ee);
        Me.textContent = Ce === 0 ? "NOW" : `-${Ce}`;
        var We = _(Me, 2), ht = c(We), ot = _(We, 2), wt = c(ot), on = _(ot, 2), Un = c(on);
        V((zn, Wn) => {
          m(ht, zn), m(wt, Wn), m(Un, s(Fe).mode);
        }, [() => T(s(Fe).address), () => T(s(Fe).offset)]), be("click", Ee, () => d(f, s(Fe).offset, true)), M(Se, Ee);
      }), M(w, $);
    }, re = (w) => {
      var $ = Jt("PC trail: waiting for cart code");
      M(w, $);
    };
    le(ye, (w) => {
      s(y).length ? w(xe) : w(re, -1);
    });
  }
  var ve = _(ye, 2);
  {
    var Ae = (w) => {
      var $ = jl(), ee = c($);
      V(() => m(ee, s(A))), M(w, $);
    };
    le(ve, (w) => {
      s(A) && w(Ae);
    });
  }
  V(() => {
    te.disabled = !t.bytes || s(l), ke.disabled = !s(l), E.disabled = !t.bytes || !s(i), z = qe(B, 1, "g-follow svelte-1kb9ux", null, z, { "g-follow-on": s(p) }), B.disabled = !s(i), m(ne, s(p) ? "FOLLOWING PC" : "FOLLOW PC"), m(ge, s(o));
  }), be("click", te, fe), be("click", ke, N), be("click", E, I), be("click", B, k), M(e, L), pt();
}
Xt(["click"]);
var Dl = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Loading</span> <span class="v svelte-g8nmi9">reading\u2026</span></div>'), Pl = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">File</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Size</span> <span class="v svelte-g8nmi9"> </span></div> <div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">Format</span> <span class="v svelte-g8nmi9"> </span></div>', 1), Bl = j('<div class="row svelte-g8nmi9"><span class="l svelte-g8nmi9">No file loaded</span> <span class="v svelte-g8nmi9"><span class="mint svelte-g8nmi9">\xB7</span> drop or pick to begin</span></div>'), ql = j('<aside class="s-rail svelte-g8nmi9"><!></aside>');
function Ul(e, t) {
  _t(t, true);
  var n = ql(), a = c(n);
  {
    var r = (o) => {
      var f = Dl();
      M(o, f);
    }, i = (o) => {
      var f = Pl(), u = et(f), v = _(c(u), 2), h = c(v), p = _(u, 2), y = _(c(p), 2), A = c(y), C = _(p, 2), x = _(c(C), 2), q = c(x);
      V((P, g) => {
        Ye(v, "title", t.file.name), m(h, t.file.name), m(A, P), m(q, g);
      }, [() => ir(t.file.bytes.length), () => t.format ? t.format.toUpperCase() : "\u2014"]), M(o, f);
    }, l = (o) => {
      var f = Bl();
      M(o, f);
    };
    le(a, (o) => {
      t.parsing ? o(r) : t.file ? o(i, 1) : o(l, -1);
    });
  }
  M(e, n), pt();
}
var zl = j('<div class="global-drop svelte-hocphh" aria-hidden="true"><div class="panel svelte-hocphh"><div class="title svelte-hocphh">Release to load</div> <div class="sub svelte-hocphh">drop binary anywhere</div></div></div>');
function Wl(e, t) {
  _t(t, true);
  let n = U(false), a = 0;
  function r(f) {
    const u = f.dataTransfer;
    if (!u) return false;
    const v = u.types;
    if (!v) return false;
    for (let h = 0; h < v.length; h++) if (v[h] === "Files") return true;
    return false;
  }
  Ue(() => {
    function f(p) {
      r(p) && (p.preventDefault(), a++, d(n, true));
    }
    function u(p) {
      r(p) && (p.preventDefault(), p.dataTransfer && (p.dataTransfer.dropEffect = "copy"));
    }
    function v(p) {
      r(p) && (a = Math.max(0, a - 1), a === 0 && d(n, false));
    }
    async function h(p) {
      if (!r(p)) return;
      p.preventDefault(), a = 0, d(n, false);
      const y = p.dataTransfer?.files?.[0];
      if (y) try {
        const A = await Ms(y);
        t.onfile?.(A);
      } catch (A) {
        t.onerror?.(A.message || String(A));
      }
    }
    return window.addEventListener("dragenter", f), window.addEventListener("dragover", u), window.addEventListener("dragleave", v), window.addEventListener("drop", h), () => {
      window.removeEventListener("dragenter", f), window.removeEventListener("dragover", u), window.removeEventListener("dragleave", v), window.removeEventListener("drop", h);
    };
  });
  var i = Nn(), l = et(i);
  {
    var o = (f) => {
      var u = zl();
      M(f, u);
    };
    le(l, (f) => {
      s(n) && f(o);
    });
  }
  M(e, i), pt();
}
var Gl = j('<button class="s-brand-btn svelte-1n46o8q" type="button"><span>scry</span></button>'), Hl = j('<span class="s-badge entrance svelte-1n46o8q"> </span>'), Vl = j('<span class="s-summary svelte-1n46o8q"> </span>'), Yl = j('<span class="badge-wrap svelte-1n46o8q"><!> <!></span>'), Xl = j('<span class="s-parsing svelte-1n46o8q">parsing\u2026</span>'), Kl = j('<span class="s-meta svelte-1n46o8q"><!> <!> <button class="s-close svelte-1n46o8q" type="button">CLOSE</button></span>'), Jl = j('<span class="s-meta svelte-1n46o8q"><span class="svelte-1n46o8q">WORKBENCH &middot; v0.1 &middot; RUST&middot;WASM</span></span>'), Zl = j('<span class="s-right svelte-1n46o8q"><button class="s-theme svelte-1n46o8q" type="button" aria-label="Toggle theme"> </button> <a class="s-back svelte-1n46o8q" href="/">\u21A9 scry root</a></span>'), Ql = j('<nav class="s-tabs svelte-1n46o8q"><button>INSPECT</button> <button>HEX</button> <button>WAVE</button> <button>CART</button> <button>GAME</button> <button disabled="" title="DISASM lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">DISASM</button> <button disabled="" title="EMU lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">EMU</button> <button disabled="" title="TRACE lives in v1 today; v2 port is in flight" class="svelte-1n46o8q">TRACE</button></nav>'), $l = j('<p class="err svelte-1n46o8q"> </p>'), eo = j('<p class="todo svelte-1n46o8q">v2 currently inspects ELF only. Detected: <b class="svelte-1n46o8q"> </b>. PE / Mach-O / WASM headers-only panes are on the roadmap.</p>'), to = j("<!> <!>", 1), no = j('<span class="s-hint svelte-1n46o8q"> </span>'), ro = j('<!> <div><header class="s-header svelte-1n46o8q"><!> <!> <!></header> <div class="s-body svelte-1n46o8q"><!> <div class="s-work svelte-1n46o8q"><!> <main class="s-main svelte-1n46o8q"><!></main></div></div> <footer class="s-status svelte-1n46o8q"><span class="svelte-1n46o8q"><span class="dot svelte-1n46o8q"></span> </span> <!> <span class="s-status-right svelte-1n46o8q"> </span></footer></div>', 1);
function so(e, t) {
  _t(t, true);
  let n = U(null), a = U(null), r = U(null), i = U(null), l = U(null), o = U(null), f = U(null), u = U(""), v = U("inspect"), h = U(ut(As())), p = U(false), y = U(null), A = U(null), C = U(""), x = U(false);
  const q = "scry \xB7 awaiting binary", P = "scry-booted-v2", g = { inspect: "click a section/segment/string -> jump in HEX", hex: "paginate with PAGE/ROW, type a hex offset to jump, click the strip", wave: "click the canvas to seek \xB7 play / stop control the buffer", cart: "rust-decoded header \xB7 switch to GAME to play", game: "play the cart \xB7 arrows \xB7 Z/X = A/B \xB7 Enter = Start" }, F = typeof location < "u" && /[?&]embed=1\b/.test(location.search);
  Ue(() => {
    function S(R) {
      if (R.origin !== location.origin) return;
      const G = R.data;
      G && (G.type === "scry-theme" && (G.value === "light" || G.value === "dark") ? (document.documentElement.setAttribute("data-theme", G.value), d(h, G.value, true)) : G.type === "scry-load-demo" && Y());
    }
    return window.addEventListener("message", S), () => window.removeEventListener("message", S);
  });
  function H(S) {
    if (!S || S.length === 0) return null;
    const R = 256 * 1024, G = Math.max(1, Math.ceil(S.length / R)), ye = new Uint32Array(256);
    let xe = 0;
    for (let ve = 0; ve < S.length; ve += G) ye[S[ve]]++, xe++;
    if (!xe) return null;
    let re = 0;
    for (let ve = 0; ve < ye.length; ve++) {
      const Ae = ye[ve];
      if (!Ae) continue;
      const w = Ae / xe;
      re -= w * Math.log2(w);
    }
    return re;
  }
  async function T({ name: S, bytes: R }) {
    d(n, { name: S, bytes: R }, true), d(u, ""), d(r, null), d(i, null), d(l, null), d(o, null), d(a, null), d(f, null), d(A, null), d(p, true);
    try {
      const G = await Sn();
      if (d(a, G.detect_format(R), true), s(a) === "elf") d(r, G.parse_elf(R), true), d(v, "inspect");
      else if (s(a) === "wav") {
        try {
          d(i, G.decode_wav(R), true);
        } catch {
        }
        d(v, "wave");
      } else if (s(a) === "gba") {
        try {
          d(l, G.parse_gba(R), true);
        } catch {
        }
        d(v, "game");
      } else d(v, "hex");
      s(a) === "elf" && d(o, G.extract_strings(R, 4), true), s(a) !== "gba" && d(f, H(R), true);
    } catch (G) {
      d(u, String(G), true);
    } finally {
      d(p, false);
    }
  }
  function D() {
    d(n, null), d(r, null), d(i, null), d(l, null), d(o, null), d(a, null), d(u, ""), d(f, null), d(A, null);
  }
  function se(S) {
    d(u, S, true);
  }
  function ce() {
    d(h, ki(), true);
  }
  function Y() {
    T({ name: Ss, bytes: ks() });
  }
  function fe(S) {
    d(v, "hex"), d(y, { o: S, t: performance.now() }, true);
  }
  function N(S) {
    d(A, S, true);
  }
  let W = Ft(() => {
    if (!s(n)) return null;
    if (s(r)) {
      const S = s(r).summary;
      return [s(a)?.toUpperCase(), S.machine, S.class, S.kind].filter(Boolean).join(" \xB7 ");
    }
    return (s(a) || "raw").toUpperCase();
  }), Q = Ft(() => {
    if (!s(n)) return null;
    if (s(r)) {
      const S = s(r).summary, R = [];
      return S.class && S.machine ? R.push(`${S.class} ${S.machine}`) : S.machine && R.push(S.machine), R.push(`${s(r).sections.length} sections`), R.push(`${s(r).symbols.length} symbols`), s(f) != null && R.push(`avg entropy ${s(f).toFixed(1)} bits`), R.join(" \xB7 ");
    }
    if (s(i)) {
      const S = s(i).fmt, R = s(i).duration < 1 ? `${(s(i).duration * 1e3).toFixed(0)} ms` : `${s(i).duration.toFixed(2)} s`, G = [`${S.channels}ch ${S.sample_rate} Hz`, `${S.bits_per_sample}-bit`, R];
      return s(f) != null && G.push(`avg entropy ${s(f).toFixed(1)} bits`), G.join(" \xB7 ");
    }
    if (s(l)) {
      const S = ["GBA cart", `"${s(l).title || "(blank)"}"`, `code ${s(l).game_code}`];
      return s(f) != null && S.push(`avg entropy ${s(f).toFixed(1)} bits`), S.join(" \xB7 ");
    }
    return s(f) != null ? `bytes only \xB7 entropy ${s(f).toFixed(1)} bits` : null;
  });
  Ue(() => {
    if (sessionStorage.getItem(P)) {
      d(C, q), d(x, true);
      return;
    }
    let S = 0;
    const R = setInterval(() => {
      if (S++, d(C, q.slice(0, S), true), S >= q.length) {
        clearInterval(R), d(x, true);
        try {
          sessionStorage.setItem(P, "1");
        } catch {
        }
      }
    }, 60);
    return () => clearInterval(R);
  });
  var ue = ro(), k = et(ue);
  Wl(k, { onfile: T, onerror: se });
  var I = _(k, 2);
  let L;
  var Z = c(I), ie = c(Z);
  {
    var we = (S) => {
      var R = Gl(), G = c(R);
      let ye;
      V(() => {
        Ye(R, "title", s(n) ? "Clear file \xB7 back to import" : ""), ye = qe(G, 1, "s-brand svelte-1n46o8q", null, ye, { "s-brand-clickable": !!s(n) });
      }), be("click", R, D), M(S, R);
    };
    le(ie, (S) => {
      F || S(we);
    });
  }
  var De = _(ie, 2);
  {
    var Ie = (S) => {
      var R = Kl(), G = c(R);
      {
        var ye = (Ae) => {
          var w = Yl(), $ = c(w);
          Ja($, () => s(n).name, (Fe) => {
            var Ce = Hl(), Ee = c(Ce);
            V(() => m(Ee, `[ ${s(W) ?? ""} ]`)), M(Fe, Ce);
          });
          var ee = _($, 2);
          {
            var Se = (Fe) => {
              var Ce = Vl(), Ee = c(Ce);
              V(() => m(Ee, s(Q))), M(Fe, Ce);
            };
            le(ee, (Fe) => {
              s(Q) && Fe(Se);
            });
          }
          M(Ae, w);
        };
        le(G, (Ae) => {
          s(W) && Ae(ye);
        });
      }
      var xe = _(G, 2);
      {
        var re = (Ae) => {
          var w = Xl();
          M(Ae, w);
        };
        le(xe, (Ae) => {
          s(p) && Ae(re);
        });
      }
      var ve = _(xe, 2);
      be("click", ve, D), M(S, R);
    }, Ne = (S) => {
      var R = Jl();
      M(S, R);
    };
    le(De, (S) => {
      s(n) ? S(Ie) : S(Ne, -1);
    });
  }
  var Re = _(De, 2);
  {
    var Le = (S) => {
      var R = Zl(), G = c(R), ye = c(G);
      V(() => m(ye, s(h) === "dark" ? "\u263C" : "\u263E")), be("click", G, ce), M(S, R);
    };
    le(Re, (S) => {
      F || S(Le);
    });
  }
  var te = _(Z, 2), ke = c(te);
  Ul(ke, { get file() {
    return s(n);
  }, get format() {
    return s(a);
  }, get parsing() {
    return s(p);
  } });
  var E = _(ke, 2), B = c(E);
  {
    var z = (S) => {
      var R = Ql(), G = c(R);
      let ye;
      var xe = _(G, 2);
      let re;
      var ve = _(xe, 2);
      let Ae;
      var w = _(ve, 2);
      let $;
      var ee = _(w, 2);
      let Se;
      V(() => {
        G.disabled = s(a) !== "elf", Ye(G, "title", s(a) === "elf" ? "" : "INSPECT is ELF-only"), ye = qe(G, 1, "svelte-1n46o8q", null, ye, { on: s(v) === "inspect" }), re = qe(xe, 1, "svelte-1n46o8q", null, re, { on: s(v) === "hex" }), ve.disabled = s(a) !== "wav", Ye(ve, "title", s(a) === "wav" ? "" : "WAVE is RIFF/WAVE-only"), Ae = qe(ve, 1, "svelte-1n46o8q", null, Ae, { on: s(v) === "wave" }), w.disabled = s(a) !== "gba", Ye(w, "title", s(a) === "gba" ? "" : "CART is GBA-only"), $ = qe(w, 1, "svelte-1n46o8q", null, $, { on: s(v) === "cart" }), ee.disabled = s(a) !== "gba", Ye(ee, "title", s(a) === "gba" ? "" : "GAME is GBA-only"), Se = qe(ee, 1, "svelte-1n46o8q", null, Se, { on: s(v) === "game" });
      }), be("click", G, () => d(v, "inspect")), be("click", xe, () => d(v, "hex")), be("click", ve, () => d(v, "wave")), be("click", w, () => d(v, "cart")), be("click", ee, () => d(v, "game")), M(S, R);
    };
    le(B, (S) => {
      s(n) && S(z);
    });
  }
  var X = _(B, 2), ne = c(X);
  {
    var ae = (S) => {
      Li(S, { onfile: T });
    }, ge = (S) => {
      var R = to(), G = et(R);
      {
        var ye = (ee) => {
          var Se = $l(), Fe = c(Se);
          V(() => m(Fe, `parse failed: ${s(u) ?? ""}`)), M(ee, Se);
        };
        le(G, (ee) => {
          s(u) && ee(ye);
        });
      }
      var xe = _(G, 2);
      {
        var re = (ee) => {
          var Se = Nn(), Fe = et(Se);
          {
            var Ce = (Me) => {
              Ki(Me, { get report() {
                return s(r);
              }, get strings() {
                return s(o);
              }, onJumpToOffset: fe });
            }, Ee = (Me) => {
              var We = eo(), ht = _(c(We)), ot = c(ht);
              V(() => m(ot, s(a))), M(Me, We);
            };
            le(Fe, (Me) => {
              s(r) ? Me(Ce) : s(a) && s(a) !== "elf" && Me(Ee, 1);
            });
          }
          M(ee, Se);
        }, ve = (ee) => {
          {
            let Se = Ft(() => s(A)?.follow && s(A)?.inCart ? s(A) : null);
            al(ee, { get bytes() {
              return s(n).bytes;
            }, get format() {
              return s(a);
            }, get jumpTo() {
              return s(y);
            }, get followTarget() {
              return s(Se);
            } });
          }
        }, Ae = (ee) => {
          vl(ee, { get bytes() {
            return s(n).bytes;
          } });
        }, w = (ee) => {
          ml(ee, { get bytes() {
            return s(n).bytes;
          } });
        }, $ = (ee) => {
          Nl(ee, { get bytes() {
            return s(n).bytes;
          }, get header() {
            return s(l);
          }, onPcUpdate: N });
        };
        le(xe, (ee) => {
          s(v) === "inspect" ? ee(re) : s(v) === "hex" ? ee(ve, 1) : s(v) === "wave" ? ee(Ae, 2) : s(v) === "cart" ? ee(w, 3) : s(v) === "game" && ee($, 4);
        });
      }
      M(S, R);
    };
    le(ne, (S) => {
      s(n) ? S(ge, -1) : S(ae);
    });
  }
  var he = _(te, 2), me = c(he), b = _(c(me), 1, true), O = _(me, 2);
  {
    var K = (S) => {
      var R = no(), G = c(R);
      V(() => m(G, g[s(v)] ?? "")), M(S, R);
    };
    le(O, (S) => {
      s(n) && S(K);
    });
  }
  var _e = _(O, 2), Oe = c(_e);
  V((S) => {
    L = qe(I, 1, "app svelte-1n46o8q", null, L, { embedded: F }), m(b, s(n) ? F ? "READY" : "READY \xB7 LOCAL \xB7 NO UPLOAD" : s(x) ? F ? "AWAITING FILE" : "AWAITING FILE \xB7 LOCAL \xB7 NO UPLOAD" : `${s(C)}\u2588`), m(Oe, `MODULE \xB7 ${S ?? ""} \xB7 RUST\xB7WASM v0.1`);
  }, [() => s(n) ? s(v).toUpperCase() : "EMPTY"]), M(e, ue), pt();
}
Xt(["click"]);
Va(so, { target: document.getElementById("app") });
