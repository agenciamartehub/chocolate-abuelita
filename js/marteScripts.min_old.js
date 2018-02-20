!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t);
    } : e(t);
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    function i(t, e) {
        var i = (e = e || G).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i);
    }
    function n(t) {
        var e = !!t && "length" in t && t.length, i = at.type(t);
        return "function" !== i && !at.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t);
    }
    function s(t, e, i) {
        return at.isFunction(e) ? at.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i;
        }) : e.nodeType ? at.grep(t, function(t) {
            return t === e !== i;
        }) : "string" != typeof e ? at.grep(t, function(t) {
            return tt.call(e, t) > -1 !== i;
        }) : vt.test(e) ? at.filter(e, t, i) : (e = at.filter(e, t), at.grep(t, function(t) {
            return tt.call(e, t) > -1 !== i && 1 === t.nodeType;
        }));
    }
    function o(t, e) {
        for (;(t = t[e]) && 1 !== t.nodeType; ) ;
        return t;
    }
    function r(t) {
        return t;
    }
    function a(t) {
        throw t;
    }
    function l(t, e, i) {
        var n;
        try {
            t && at.isFunction(n = t.promise) ? n.call(t).done(e).fail(i) : t && at.isFunction(n = t.then) ? n.call(t, e, i) : e.call(void 0, t);
        } catch (t) {
            i.call(void 0, t);
        }
    }
    function c() {
        G.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), 
        at.ready();
    }
    function d() {
        this.expando = at.expando + d.uid++;
    }
    function u(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType) if (n = "data-" + e.replace(Lt, "-$&").toLowerCase(), 
        "string" == typeof (i = t.getAttribute(n))) {
            try {
                i = function(t) {
                    return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : At.test(t) ? JSON.parse(t) : t);
                }(i);
            } catch (t) {}
            Pt.set(t, e, i);
        } else i = void 0;
        return i;
    }
    function h(t, e, i, n) {
        var s, o = 1, r = 20, a = n ? function() {
            return n.cur();
        } : function() {
            return at.css(t, e, "");
        }, l = a(), c = i && i[3] || (at.cssNumber[e] ? "" : "px"), d = (at.cssNumber[e] || "px" !== c && +l) && Dt.exec(at.css(t, e));
        if (d && d[3] !== c) {
            c = c || d[3], i = i || [], d = +l || 1;
            do {
                o = o || ".5", d /= o, at.style(t, e, d + c);
            } while (o !== (o = a() / l) && 1 !== o && --r);
        }
        return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, 
        n.start = d, n.end = s)), s;
    }
    function p(t) {
        var e, i = t.ownerDocument, n = t.nodeName, s = Mt[n];
        return s || (e = i.body.appendChild(i.createElement(n)), s = at.css(e, "display"), 
        e.parentNode.removeChild(e), "none" === s && (s = "block"), Mt[n] = s, s);
    }
    function f(t, e) {
        for (var i, n, s = [], o = 0, r = t.length; o < r; o++) (n = t[o]).style && (i = n.style.display, 
        e ? ("none" === i && (s[o] = Et.get(n, "display") || null, s[o] || (n.style.display = "")), 
        "" === n.style.display && Nt(n) && (s[o] = p(n))) : "none" !== i && (s[o] = "none", 
        Et.set(n, "display", i)));
        for (o = 0; o < r; o++) null != s[o] && (t[o].style.display = s[o]);
        return t;
    }
    function g(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], 
        void 0 === e || e && at.nodeName(t, e) ? at.merge([ t ], i) : i;
    }
    function m(t, e) {
        for (var i = 0, n = t.length; i < n; i++) Et.set(t[i], "globalEval", !e || Et.get(e[i], "globalEval"));
    }
    function v(t, e, i, n, s) {
        for (var o, r, a, l, c, d, u = e.createDocumentFragment(), h = [], p = 0, f = t.length; p < f; p++) if ((o = t[p]) || 0 === o) if ("object" === at.type(o)) at.merge(h, o.nodeType ? [ o ] : o); else if (Rt.test(o)) {
            for (r = r || u.appendChild(e.createElement("div")), a = (Ht.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = zt[a] || zt._default, r.innerHTML = l[1] + at.htmlPrefilter(o) + l[2], d = l[0]; d--; ) r = r.lastChild;
            at.merge(h, r.childNodes), (r = u.firstChild).textContent = "";
        } else h.push(e.createTextNode(o));
        for (u.textContent = "", p = 0; o = h[p++]; ) if (n && at.inArray(o, n) > -1) s && s.push(o); else if (c = at.contains(o.ownerDocument, o), 
        r = g(u.appendChild(o), "script"), c && m(r), i) for (d = 0; o = r[d++]; ) qt.test(o.type || "") && i.push(o);
        return u;
    }
    function y() {
        return !0;
    }
    function b() {
        return !1;
    }
    function x() {
        try {
            return G.activeElement;
        } catch (t) {}
    }
    function w(t, e, i, n, s, o) {
        var r, a;
        if ("object" == typeof e) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in e) w(t, a, i, n, e[a], o);
            return t;
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, 
        n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = b; else if (!s) return t;
        return 1 === o && (r = s, s = function(t) {
            return at().off(t), r.apply(this, arguments);
        }, s.guid = r.guid || (r.guid = at.guid++)), t.each(function() {
            at.event.add(this, e, s, n, i);
        });
    }
    function T(t, e) {
        return at.nodeName(t, "table") && at.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t;
    }
    function k(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
    }
    function S(t) {
        var e = Gt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t;
    }
    function C(t, e) {
        var i, n, s, o, r, a, l, c;
        if (1 === e.nodeType) {
            if (Et.hasData(t) && (o = Et.access(t), r = Et.set(e, o), c = o.events)) {
                delete r.handle, r.events = {};
                for (s in c) for (i = 0, n = c[s].length; i < n; i++) at.event.add(e, s, c[s][i]);
            }
            Pt.hasData(t) && (a = Pt.access(t), l = at.extend({}, a), Pt.set(e, l));
        }
    }
    function $(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && Ft.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue);
    }
    function E(t, e, n, s) {
        e = J.apply([], e);
        var o, r, a, l, c, d, u = 0, h = t.length, p = h - 1, f = e[0], m = at.isFunction(f);
        if (m || h > 1 && "string" == typeof f && !rt.checkClone && Vt.test(f)) return t.each(function(i) {
            var o = t.eq(i);
            m && (e[0] = f.call(this, i, o.html())), E(o, e, n, s);
        });
        if (h && (o = v(e, t[0].ownerDocument, !1, t, s), r = o.firstChild, 1 === o.childNodes.length && (o = r), 
        r || s)) {
            for (l = (a = at.map(g(o, "script"), k)).length; u < h; u++) c = o, u !== p && (c = at.clone(c, !0, !0), 
            l && at.merge(a, g(c, "script"))), n.call(t[u], c, u);
            if (l) for (d = a[a.length - 1].ownerDocument, at.map(a, S), u = 0; u < l; u++) c = a[u], 
            qt.test(c.type || "") && !Et.access(c, "globalEval") && at.contains(d, c) && (c.src ? at._evalUrl && at._evalUrl(c.src) : i(c.textContent.replace(Qt, ""), d));
        }
        return t;
    }
    function P(t, e, i) {
        for (var n, s = e ? at.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || at.cleanData(g(n)), 
        n.parentNode && (i && at.contains(n.ownerDocument, n) && m(g(n, "script")), n.parentNode.removeChild(n));
        return t;
    }
    function A(t, e, i) {
        var n, s, o, r, a = t.style;
        return (i = i || Kt(t)) && ("" !== (r = i.getPropertyValue(e) || i[e]) || at.contains(t.ownerDocument, t) || (r = at.style(t, e)), 
        !rt.pixelMarginRight() && Jt.test(r) && Zt.test(e) && (n = a.width, s = a.minWidth, 
        o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, 
        a.minWidth = s, a.maxWidth = o)), void 0 !== r ? r + "" : r;
    }
    function L(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments);
            }
        };
    }
    function j(t) {
        if (t in se) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), i = ne.length; i--; ) if ((t = ne[i] + e) in se) return t;
    }
    function D(t, e, i) {
        var n = Dt.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
    }
    function O(t, e, i, n, s) {
        var o, r = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (r += at.css(t, i + Ot[o], !0, s)), 
        n ? ("content" === i && (r -= at.css(t, "padding" + Ot[o], !0, s)), "margin" !== i && (r -= at.css(t, "border" + Ot[o] + "Width", !0, s))) : (r += at.css(t, "padding" + Ot[o], !0, s), 
        "padding" !== i && (r += at.css(t, "border" + Ot[o] + "Width", !0, s)));
        return r;
    }
    function N(t, e, i) {
        var n, s = !0, o = Kt(t), r = "border-box" === at.css(t, "boxSizing", !1, o);
        if (t.getClientRects().length && (n = t.getBoundingClientRect()[e]), n <= 0 || null == n) {
            if (((n = A(t, e, o)) < 0 || null == n) && (n = t.style[e]), Jt.test(n)) return n;
            s = r && (rt.boxSizingReliable() || n === t.style[e]), n = parseFloat(n) || 0;
        }
        return n + O(t, e, i || (r ? "border" : "content"), s, o) + "px";
    }
    function I(t, e, i, n, s) {
        return new I.prototype.init(t, e, i, n, s);
    }
    function M() {
        re && (t.requestAnimationFrame(M), at.fx.tick());
    }
    function F() {
        return t.setTimeout(function() {
            oe = void 0;
        }), oe = at.now();
    }
    function H(t, e) {
        var i, n = 0, s = {
            height: t
        };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) i = Ot[n], s["margin" + i] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s;
    }
    function q(t, e, i) {
        for (var n, s = (z.tweeners[e] || []).concat(z.tweeners["*"]), o = 0, r = s.length; o < r; o++) if (n = s[o].call(i, e, t)) return n;
    }
    function z(t, e, i) {
        var n, s, o = 0, r = z.prefilters.length, a = at.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (s) return !1;
            for (var e = oe || F(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, r = c.tweens.length; o < r; o++) c.tweens[o].run(n);
            return a.notifyWith(t, [ c, n, i ]), n < 1 && r ? i : (a.resolveWith(t, [ c ]), 
            !1);
        }, c = a.promise({
            elem: t,
            props: at.extend({}, e),
            opts: at.extend(!0, {
                specialEasing: {},
                easing: at.easing._default
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: oe || F(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = at.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(n), n;
            },
            stop: function(e) {
                var i = 0, n = e ? c.tweens.length : 0;
                if (s) return this;
                for (s = !0; i < n; i++) c.tweens[i].run(1);
                return e ? (a.notifyWith(t, [ c, 1, 0 ]), a.resolveWith(t, [ c, e ])) : a.rejectWith(t, [ c, e ]), 
                this;
            }
        }), d = c.props;
        for (function(t, e) {
            var i, n, s, o, r;
            for (i in t) if (n = at.camelCase(i), s = e[n], o = t[i], at.isArray(o) && (s = o[1], 
            o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (r = at.cssHooks[n]) && "expand" in r) {
                o = r.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = s);
            } else e[n] = s;
        }(d, c.opts.specialEasing); o < r; o++) if (n = z.prefilters[o].call(c, t, d, c.opts)) return at.isFunction(n.stop) && (at._queueHooks(c.elem, c.opts.queue).stop = at.proxy(n.stop, n)), 
        n;
        return at.map(d, q, c), at.isFunction(c.opts.start) && c.opts.start.call(t, c), 
        at.fx.timer(at.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    function R(t) {
        return (t.match(Tt) || []).join(" ");
    }
    function B(t) {
        return t.getAttribute && t.getAttribute("class") || "";
    }
    function W(t, e, i, n) {
        var s;
        if (at.isArray(e)) at.each(e, function(e, s) {
            i || ye.test(t) ? n(t, s) : W(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n);
        }); else if (i || "object" !== at.type(e)) n(t, e); else for (s in e) W(t + "[" + s + "]", e[s], i, n);
    }
    function _(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0, o = e.toLowerCase().match(Tt) || [];
            if (at.isFunction(i)) for (;n = o[s++]; ) "+" === n[0] ? (n = n.slice(1) || "*", 
            (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
        };
    }
    function X(t, e, i, n) {
        function s(a) {
            var l;
            return o[a] = !0, at.each(t[a] || [], function(t, a) {
                var c = a(e, i, n);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), 
                s(c), !1);
            }), l;
        }
        var o = {}, r = t === Ae;
        return s(e.dataTypes[0]) || !o["*"] && s("*");
    }
    function Y(t, e) {
        var i, n, s = at.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && at.extend(!0, t, n), t;
    }
    function U(t) {
        return at.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
    }
    var V = [], G = t.document, Q = Object.getPrototypeOf, Z = V.slice, J = V.concat, K = V.push, tt = V.indexOf, et = {}, it = et.toString, nt = et.hasOwnProperty, st = nt.toString, ot = st.call(Object), rt = {}, at = function(t, e) {
        return new at.fn.init(t, e);
    }, lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ct = /^-ms-/, dt = /-([a-z])/g, ut = function(t, e) {
        return e.toUpperCase();
    };
    at.fn = at.prototype = {
        jquery: "3.1.1",
        constructor: at,
        length: 0,
        toArray: function() {
            return Z.call(this);
        },
        get: function(t) {
            return null == t ? Z.call(this) : t < 0 ? this[t + this.length] : this[t];
        },
        pushStack: function(t) {
            var e = at.merge(this.constructor(), t);
            return e.prevObject = this, e;
        },
        each: function(t) {
            return at.each(this, t);
        },
        map: function(t) {
            return this.pushStack(at.map(this, function(e, i) {
                return t.call(e, i, e);
            }));
        },
        slice: function() {
            return this.pushStack(Z.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(t) {
            var e = this.length, i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [ this[i] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: K,
        sort: V.sort,
        splice: V.splice
    }, at.extend = at.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || at.isFunction(r) || (r = {}), 
        a === l && (r = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) i = r[e], 
        n = t[e], r !== n && (c && n && (at.isPlainObject(n) || (s = at.isArray(n))) ? (s ? (s = !1, 
        o = i && at.isArray(i) ? i : []) : o = i && at.isPlainObject(i) ? i : {}, r[e] = at.extend(c, o, n)) : void 0 !== n && (r[e] = n));
        return r;
    }, at.extend({
        expando: "jQuery" + ("3.1.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t);
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === at.type(t);
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window;
        },
        isNumeric: function(t) {
            var e = at.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
        },
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== it.call(t) || (e = Q(t)) && ("function" != typeof (i = nt.call(e, "constructor") && e.constructor) || st.call(i) !== ot));
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0;
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? et[it.call(t)] || "object" : typeof t;
        },
        globalEval: function(t) {
            i(t);
        },
        camelCase: function(t) {
            return t.replace(ct, "ms-").replace(dt, ut);
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
        },
        each: function(t, e) {
            var i, s = 0;
            if (n(t)) for (i = t.length; s < i && !1 !== e.call(t[s], s, t[s]); s++) ; else for (s in t) if (!1 === e.call(t[s], s, t[s])) break;
            return t;
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(lt, "");
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? at.merge(i, "string" == typeof t ? [ t ] : t) : K.call(i, t)), 
            i;
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : tt.call(e, t, i);
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t;
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, o = t.length, r = !i; s < o; s++) !e(t[s], s) !== r && n.push(t[s]);
            return n;
        },
        map: function(t, e, i) {
            var s, o, r = 0, a = [];
            if (n(t)) for (s = t.length; r < s; r++) null != (o = e(t[r], r, i)) && a.push(o); else for (r in t) null != (o = e(t[r], r, i)) && a.push(o);
            return J.apply([], a);
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e], e = t, t = i), at.isFunction(t)) return n = Z.call(arguments, 2), 
            s = function() {
                return t.apply(e || this, n.concat(Z.call(arguments)));
            }, s.guid = t.guid = t.guid || at.guid++, s;
        },
        now: Date.now,
        support: rt
    }), "function" == typeof Symbol && (at.fn[Symbol.iterator] = V[Symbol.iterator]), 
    at.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        et["[object " + e + "]"] = e.toLowerCase();
    });
    var ht = function(t) {
        function e(t, e, i, n) {
            var s, o, r, a, l, c, d, h = e && e.ownerDocument, f = e ? e.nodeType : 9;
            if (i = i || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return i;
            if (!n && ((e ? e.ownerDocument || e : q) !== j && L(e), e = e || j, O)) {
                if (11 !== f && (l = gt.exec(t))) if (s = l[1]) {
                    if (9 === f) {
                        if (!(r = e.getElementById(s))) return i;
                        if (r.id === s) return i.push(r), i;
                    } else if (h && (r = h.getElementById(s)) && F(e, r) && r.id === s) return i.push(r), 
                    i;
                } else {
                    if (l[2]) return Q.apply(i, e.getElementsByTagName(t)), i;
                    if ((s = l[3]) && x.getElementsByClassName && e.getElementsByClassName) return Q.apply(i, e.getElementsByClassName(s)), 
                    i;
                }
                if (x.qsa && !_[t + " "] && (!N || !N.test(t))) {
                    if (1 !== f) h = e, d = t; else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, xt) : e.setAttribute("id", a = H), 
                        o = (c = S(t)).length; o--; ) c[o] = "#" + a + " " + p(c[o]);
                        d = c.join(","), h = mt.test(t) && u(e.parentNode) || e;
                    }
                    if (d) try {
                        return Q.apply(i, h.querySelectorAll(d)), i;
                    } catch (t) {} finally {
                        a === H && e.removeAttribute("id");
                    }
                }
            }
            return $(t.replace(ot, "$1"), e, i, n);
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n;
            }
            var e = [];
            return t;
        }
        function n(t) {
            return t[H] = !0, t;
        }
        function s(t) {
            var e = j.createElement("fieldset");
            try {
                return !!t(e);
            } catch (t) {
                return !1;
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null;
            }
        }
        function o(t, e) {
            for (var i = t.split("|"), n = i.length; n--; ) w.attrHandle[i[n]] = e;
        }
        function r(t, e) {
            var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i) for (;i = i.nextSibling; ) if (i === e) return -1;
            return t ? 1 : -1;
        }
        function a(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t;
            };
        }
        function c(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function d(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var s, o = t([], i.length, e), r = o.length; r--; ) i[s = o[r]] && (i[s] = !(n[s] = i[s]));
                });
            });
        }
        function u(t) {
            return t && void 0 !== t.getElementsByTagName && t;
        }
        function h() {}
        function p(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n;
        }
        function f(t, e, i) {
            var n = e.dir, s = e.next, o = s || n, r = i && "parentNode" === o, a = R++;
            return e.first ? function(e, i, s) {
                for (;e = e[n]; ) if (1 === e.nodeType || r) return t(e, i, s);
                return !1;
            } : function(e, i, l) {
                var c, d, u, h = [ z, a ];
                if (l) {
                    for (;e = e[n]; ) if ((1 === e.nodeType || r) && t(e, i, l)) return !0;
                } else for (;e = e[n]; ) if (1 === e.nodeType || r) if (u = e[H] || (e[H] = {}), 
                d = u[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e; else {
                    if ((c = d[o]) && c[0] === z && c[1] === a) return h[2] = c[2];
                    if (d[o] = h, h[2] = t(e, i, l)) return !0;
                }
                return !1;
            };
        }
        function g(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--; ) if (!t[s](e, i, n)) return !1;
                return !0;
            } : t[0];
        }
        function m(t, e, i, n, s) {
            for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++) (o = t[a]) && (i && !i(o, n, s) || (r.push(o), 
            c && e.push(a)));
            return r;
        }
        function v(t, i, s, o, r, a) {
            return o && !o[H] && (o = v(o)), r && !r[H] && (r = v(r, a)), n(function(n, a, l, c) {
                var d, u, h, p = [], f = [], g = a.length, v = n || function(t, i, n) {
                    for (var s = 0, o = i.length; s < o; s++) e(t, i[s], n);
                    return n;
                }(i || "*", l.nodeType ? [ l ] : l, []), y = !t || !n && i ? v : m(v, p, t, l, c), b = s ? r || (n ? t : g || o) ? [] : a : y;
                if (s && s(y, b, l, c), o) for (d = m(b, f), o(d, [], l, c), u = d.length; u--; ) (h = d[u]) && (b[f[u]] = !(y[f[u]] = h));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (d = [], u = b.length; u--; ) (h = b[u]) && d.push(y[u] = h);
                            r(null, b = [], d, c);
                        }
                        for (u = b.length; u--; ) (h = b[u]) && (d = r ? J(n, h) : p[u]) > -1 && (n[d] = !(a[d] = h));
                    }
                } else b = m(b === a ? b.splice(g, b.length) : b), r ? r(null, a, b, c) : Q.apply(a, b);
            });
        }
        function y(t) {
            for (var e, i, n, s = t.length, o = w.relative[t[0].type], r = o || w.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                return t === e;
            }, r, !0), c = f(function(t) {
                return J(e, t) > -1;
            }, r, !0), d = [ function(t, i, n) {
                var s = !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                return e = null, s;
            } ]; a < s; a++) if (i = w.relative[t[a].type]) d = [ f(g(d), i) ]; else {
                if ((i = w.filter[t[a].type].apply(null, t[a].matches))[H]) {
                    for (n = ++a; n < s && !w.relative[t[n].type]; n++) ;
                    return v(a > 1 && g(d), a > 1 && p(t.slice(0, a - 1).concat({
                        value: " " === t[a - 2].type ? "*" : ""
                    })).replace(ot, "$1"), i, a < n && y(t.slice(a, n)), n < s && y(t = t.slice(n)), n < s && p(t));
                }
                d.push(i);
            }
            return g(d);
        }
        var b, x, w, T, k, S, C, $, E, P, A, L, j, D, O, N, I, M, F, H = "sizzle" + 1 * new Date(), q = t.document, z = 0, R = 0, B = i(), W = i(), _ = i(), X = function(t, e) {
            return t === e && (A = !0), 0;
        }, Y = {}.hasOwnProperty, U = [], V = U.pop, G = U.push, Q = U.push, Z = U.slice, J = function(t, e) {
            for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", tt = "[\\x20\\t\\r\\n\\f]", et = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]", nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", st = new RegExp(tt + "+", "g"), ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"), rt = new RegExp("^" + tt + "*," + tt + "*"), at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"), lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"), ct = new RegExp(nt), dt = new RegExp("^" + et + "$"), ut = {
            ID: new RegExp("^#(" + et + ")"),
            CLASS: new RegExp("^\\.(" + et + ")"),
            TAG: new RegExp("^(" + et + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + nt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
        }, ht = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, ft = /^[^{]+\{\s*\[native \w/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /[+~]/, vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"), yt = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        }, bt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xt = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        }, wt = function() {
            L();
        }, Tt = f(function(t) {
            return !0 === t.disabled && ("form" in t || "label" in t);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Q.apply(U = Z.call(q.childNodes), q.childNodes), U[q.childNodes.length].nodeType;
        } catch (t) {
            Q = {
                apply: U.length ? function(t, e) {
                    G.apply(t, Z.call(e));
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; ) ;
                    t.length = i - 1;
                }
            };
        }
        x = e.support = {}, k = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName;
        }, L = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : q;
            return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, D = j.documentElement, 
            O = !k(j), q !== j && (i = j.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", wt, !1) : i.attachEvent && i.attachEvent("onunload", wt)), 
            x.attributes = s(function(t) {
                return t.className = "i", !t.getAttribute("className");
            }), x.getElementsByTagName = s(function(t) {
                return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length;
            }), x.getElementsByClassName = ft.test(j.getElementsByClassName), x.getById = s(function(t) {
                return D.appendChild(t).id = H, !j.getElementsByName || !j.getElementsByName(H).length;
            }), x.getById ? (w.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    return t.getAttribute("id") === e;
                };
            }, w.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && O) {
                    var i = e.getElementById(t);
                    return i ? [ i ] : [];
                }
            }) : (w.filter.ID = function(t) {
                var e = t.replace(vt, yt);
                return function(t) {
                    var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e;
                };
            }, w.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && O) {
                    var i, n, s, o = e.getElementById(t);
                    if (o) {
                        if ((i = o.getAttributeNode("id")) && i.value === t) return [ o ];
                        for (s = e.getElementsByName(t), n = 0; o = s[n++]; ) if ((i = o.getAttributeNode("id")) && i.value === t) return [ o ];
                    }
                    return [];
                }
            }), w.find.TAG = x.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0;
            } : function(t, e) {
                var i, n = [], s = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (;i = o[s++]; ) 1 === i.nodeType && n.push(i);
                    return n;
                }
                return o;
            }, w.find.CLASS = x.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && O) return e.getElementsByClassName(t);
            }, I = [], N = [], (x.qsa = ft.test(j.querySelectorAll)) && (s(function(t) {
                D.appendChild(t).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), 
                t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + K + ")"), 
                t.querySelectorAll("[id~=" + H + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), 
                t.querySelectorAll("a#" + H + "+*").length || N.push(".#.+[+~]");
            }), s(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = j.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), 
                2 !== t.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), 
                D.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), 
                t.querySelectorAll("*,:x"), N.push(",.*:");
            })), (x.matchesSelector = ft.test(M = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && s(function(t) {
                x.disconnectedMatch = M.call(t, "*"), M.call(t, "[s!='']:x"), I.push("!=", nt);
            }), N = N.length && new RegExp(N.join("|")), I = I.length && new RegExp(I.join("|")), 
            e = ft.test(D.compareDocumentPosition), F = e || ft.test(D.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
            } : function(t, e) {
                if (e) for (;e = e.parentNode; ) if (e === t) return !0;
                return !1;
            }, X = e ? function(t, e) {
                if (t === e) return A = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === j || t.ownerDocument === q && F(q, t) ? -1 : e === j || e.ownerDocument === q && F(q, e) ? 1 : P ? J(P, t) - J(P, e) : 0 : 4 & i ? -1 : 1);
            } : function(t, e) {
                if (t === e) return A = !0, 0;
                var i, n = 0, s = t.parentNode, o = e.parentNode, a = [ t ], l = [ e ];
                if (!s || !o) return t === j ? -1 : e === j ? 1 : s ? -1 : o ? 1 : P ? J(P, t) - J(P, e) : 0;
                if (s === o) return r(t, e);
                for (i = t; i = i.parentNode; ) a.unshift(i);
                for (i = e; i = i.parentNode; ) l.unshift(i);
                for (;a[n] === l[n]; ) n++;
                return n ? r(a[n], l[n]) : a[n] === q ? -1 : l[n] === q ? 1 : 0;
            }, j) : j;
        }, e.matches = function(t, i) {
            return e(t, null, null, i);
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== j && L(t), i = i.replace(lt, "='$1']"), x.matchesSelector && O && !_[i + " "] && (!I || !I.test(i)) && (!N || !N.test(i))) try {
                var n = M.call(t, i);
                if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
            } catch (t) {}
            return e(i, j, null, [ t ]).length > 0;
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== j && L(t), F(t, e);
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== j && L(t);
            var i = w.attrHandle[e.toLowerCase()], n = i && Y.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
            return void 0 !== n ? n : x.attributes || !O ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }, e.escape = function(t) {
            return (t + "").replace(bt, xt);
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t);
        }, e.uniqueSort = function(t) {
            var e, i = [], n = 0, s = 0;
            if (A = !x.detectDuplicates, P = !x.sortStable && t.slice(0), t.sort(X), A) {
                for (;e = t[s++]; ) e === t[s] && (n = i.push(s));
                for (;n--; ) t.splice(i[n], 1);
            }
            return P = null, t;
        }, T = e.getText = function(t) {
            var e, i = "", n = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t);
                } else if (3 === s || 4 === s) return t.nodeValue;
            } else for (;e = t[n++]; ) i += T(e);
            return i;
        }, (w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ut,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), 
                    "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), 
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), 
                    t;
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = S(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), 
                    t[2] = i.slice(0, e)), t.slice(0, 3));
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(vt, yt).toLowerCase();
                    return "*" === t ? function() {
                        return !0;
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    };
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
                    });
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1 : "|=" === i && (o === n || o.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function(t, e, i, n, s) {
                    var o = "nth" !== t.slice(0, 3), r = "last" !== t.slice(-4), a = "of-type" === e;
                    return 1 === n && 0 === s ? function(t) {
                        return !!t.parentNode;
                    } : function(e, i, l) {
                        var c, d, u, h, p, f, g = o !== r ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (o) {
                                for (;g; ) {
                                    for (h = e; h = h[g]; ) if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    f = g = "only" === t && !f && "nextSibling";
                                }
                                return !0;
                            }
                            if (f = [ r ? m.firstChild : m.lastChild ], r && y) {
                                for (b = (p = (c = (d = (u = (h = m)[H] || (h[H] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[t] || [])[0] === z && c[1]) && c[2], 
                                h = p && m.childNodes[p]; h = ++p && h && h[g] || (b = p = 0) || f.pop(); ) if (1 === h.nodeType && ++b && h === e) {
                                    d[t] = [ z, p, b ];
                                    break;
                                }
                            } else if (y && (h = e, u = h[H] || (h[H] = {}), d = u[h.uniqueID] || (u[h.uniqueID] = {}), 
                            c = d[t] || [], p = c[0] === z && c[1], b = p), !1 === b) for (;(h = ++p && h && h[g] || (b = p = 0) || f.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (u = h[H] || (h[H] = {}), 
                            d = u[h.uniqueID] || (u[h.uniqueID] = {}), d[t] = [ z, b ]), h !== e)); ) ;
                            return (b -= s) === n || b % n == 0 && b / n >= 0;
                        }
                    };
                },
                PSEUDO: function(t, i) {
                    var s, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[H] ? o(i) : o.length > 1 ? (s = [ t, t, "", i ], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, s = o(t, i), r = s.length; r--; ) n = J(t, s[r]), t[n] = !(e[n] = s[r]);
                    }) : function(t) {
                        return o(t, 0, s);
                    }) : o;
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [], i = [], s = C(t.replace(ot, "$1"));
                    return s[H] ? n(function(t, e, i, n) {
                        for (var o, r = s(t, null, n, []), a = t.length; a--; ) (o = r[a]) && (t[a] = !(e[a] = o));
                    }) : function(t, n, o) {
                        return e[0] = t, s(e, null, o, i), e[0] = null, !i.pop();
                    };
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0;
                    };
                }),
                contains: n(function(t) {
                    return t = t.replace(vt, yt), function(e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1;
                    };
                }),
                lang: n(function(t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(), 
                    function(e) {
                        var i;
                        do {
                            if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id;
                },
                root: function(t) {
                    return t === D;
                },
                focus: function(t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected;
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(t) {
                    return !w.pseudos.empty(t);
                },
                header: function(t) {
                    return pt.test(t.nodeName);
                },
                input: function(t) {
                    return ht.test(t.nodeName);
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e;
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: d(function() {
                    return [ 0 ];
                }),
                last: d(function(t, e) {
                    return [ e - 1 ];
                }),
                eq: d(function(t, e, i) {
                    return [ i < 0 ? i + e : i ];
                }),
                even: d(function(t, e) {
                    for (var i = 0; i < e; i += 2) t.push(i);
                    return t;
                }),
                odd: d(function(t, e) {
                    for (var i = 1; i < e; i += 2) t.push(i);
                    return t;
                }),
                lt: d(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
                    return t;
                }),
                gt: d(function(t, e, i) {
                    for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                    return t;
                })
            }
        }).pseudos.nth = w.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        }) w.pseudos[b] = l(b);
        return h.prototype = w.filters = w.pseudos, w.setFilters = new h(), S = e.tokenize = function(t, i) {
            var n, s, o, r, a, l, c, d = W[t + " "];
            if (d) return i ? 0 : d.slice(0);
            for (a = t, l = [], c = w.preFilter; a; ) {
                n && !(s = rt.exec(a)) || (s && (a = a.slice(s[0].length) || a), l.push(o = [])), 
                n = !1, (s = at.exec(a)) && (n = s.shift(), o.push({
                    value: n,
                    type: s[0].replace(ot, " ")
                }), a = a.slice(n.length));
                for (r in w.filter) !(s = ut[r].exec(a)) || c[r] && !(s = c[r](s)) || (n = s.shift(), 
                o.push({
                    value: n,
                    type: r,
                    matches: s
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return i ? a.length : a ? e.error(t) : W(t, l).slice(0);
        }, C = e.compile = function(t, i) {
            var s, o = [], r = [], a = _[t + " "];
            if (!a) {
                for (i || (i = S(t)), s = i.length; s--; ) (a = y(i[s]))[H] ? o.push(a) : r.push(a);
                (a = _(t, function(t, i) {
                    var s = i.length > 0, o = t.length > 0, r = function(n, r, a, l, c) {
                        var d, u, h, p = 0, f = "0", g = n && [], v = [], y = E, b = n || o && w.find.TAG("*", c), x = z += null == y ? 1 : Math.random() || .1, T = b.length;
                        for (c && (E = r === j || r || c); f !== T && null != (d = b[f]); f++) {
                            if (o && d) {
                                for (u = 0, r || d.ownerDocument === j || (L(d), a = !O); h = t[u++]; ) if (h(d, r || j, a)) {
                                    l.push(d);
                                    break;
                                }
                                c && (z = x);
                            }
                            s && ((d = !h && d) && p--, n && g.push(d));
                        }
                        if (p += f, s && f !== p) {
                            for (u = 0; h = i[u++]; ) h(g, v, r, a);
                            if (n) {
                                if (p > 0) for (;f--; ) g[f] || v[f] || (v[f] = V.call(l));
                                v = m(v);
                            }
                            Q.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l);
                        }
                        return c && (z = x, E = y), g;
                    };
                    return s ? n(r) : r;
                }(r, o))).selector = t;
            }
            return a;
        }, $ = e.select = function(t, e, i, n) {
            var s, o, r, a, l, c = "function" == typeof t && t, d = !n && S(t = c.selector || t);
            if (i = i || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (r = o[0]).type && 9 === e.nodeType && O && w.relative[o[1].type]) {
                    if (!(e = (w.find.ID(r.matches[0].replace(vt, yt), e) || [])[0])) return i;
                    c && (e = e.parentNode), t = t.slice(o.shift().value.length);
                }
                for (s = ut.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !w.relative[a = r.type]); ) if ((l = w.find[a]) && (n = l(r.matches[0].replace(vt, yt), mt.test(o[0].type) && u(e.parentNode) || e))) {
                    if (o.splice(s, 1), !(t = n.length && p(o))) return Q.apply(i, n), i;
                    break;
                }
            }
            return (c || C(t, d))(n, e, !O, i, !e || mt.test(t) && u(e.parentNode) || e), i;
        }, x.sortStable = H.split("").sort(X).join("") === H, x.detectDuplicates = !!A, 
        L(), x.sortDetached = s(function(t) {
            return 1 & t.compareDocumentPosition(j.createElement("fieldset"));
        }), s(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }), x.attributes && s(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
        }) || o("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
        }), s(function(t) {
            return null == t.getAttribute("disabled");
        }) || o(K, function(t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
        }), e;
    }(t);
    at.find = ht, at.expr = ht.selectors, at.expr[":"] = at.expr.pseudos, at.uniqueSort = at.unique = ht.uniqueSort, 
    at.text = ht.getText, at.isXMLDoc = ht.isXML, at.contains = ht.contains, at.escapeSelector = ht.escape;
    var pt = function(t, e, i) {
        for (var n = [], s = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; ) if (1 === t.nodeType) {
            if (s && at(t).is(i)) break;
            n.push(t);
        }
        return n;
    }, ft = function(t, e) {
        for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
        return i;
    }, gt = at.expr.match.needsContext, mt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, vt = /^.[^:#\[\.,]*$/;
    at.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? at.find.matchesSelector(n, t) ? [ n ] : [] : at.find.matches(t, at.grep(e, function(t) {
            return 1 === t.nodeType;
        }));
    }, at.fn.extend({
        find: function(t) {
            var e, i, n = this.length, s = this;
            if ("string" != typeof t) return this.pushStack(at(t).filter(function() {
                for (e = 0; e < n; e++) if (at.contains(s[e], this)) return !0;
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) at.find(t, s[e], i);
            return n > 1 ? at.uniqueSort(i) : i;
        },
        filter: function(t) {
            return this.pushStack(s(this, t || [], !1));
        },
        not: function(t) {
            return this.pushStack(s(this, t || [], !0));
        },
        is: function(t) {
            return !!s(this, "string" == typeof t && gt.test(t) ? at(t) : t || [], !1).length;
        }
    });
    var yt, bt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (at.fn.init = function(t, e, i) {
        var n, s;
        if (!t) return this;
        if (i = i || yt, "string" == typeof t) {
            if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [ null, t, null ] : bt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (n[1]) {
                if (e = e instanceof at ? e[0] : e, at.merge(this, at.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), 
                mt.test(n[1]) && at.isPlainObject(e)) for (n in e) at.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                return this;
            }
            return (s = G.getElementById(n[2])) && (this[0] = s, this.length = 1), this;
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : at.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(at) : at.makeArray(t, this);
    }).prototype = at.fn, yt = at(G);
    var xt = /^(?:parents|prev(?:Until|All))/, wt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    at.fn.extend({
        has: function(t) {
            var e = at(t, this), i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++) if (at.contains(this, e[t])) return !0;
            });
        },
        closest: function(t, e) {
            var i, n = 0, s = this.length, o = [], r = "string" != typeof t && at(t);
            if (!gt.test(t)) for (;n < s; n++) for (i = this[n]; i && i !== e; i = i.parentNode) if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && at.find.matchesSelector(i, t))) {
                o.push(i);
                break;
            }
            return this.pushStack(o.length > 1 ? at.uniqueSort(o) : o);
        },
        index: function(t) {
            return t ? "string" == typeof t ? tt.call(at(t), this[0]) : tt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(t, e) {
            return this.pushStack(at.uniqueSort(at.merge(this.get(), at(t, e))));
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }
    }), at.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(t) {
            return pt(t, "parentNode");
        },
        parentsUntil: function(t, e, i) {
            return pt(t, "parentNode", i);
        },
        next: function(t) {
            return o(t, "nextSibling");
        },
        prev: function(t) {
            return o(t, "previousSibling");
        },
        nextAll: function(t) {
            return pt(t, "nextSibling");
        },
        prevAll: function(t) {
            return pt(t, "previousSibling");
        },
        nextUntil: function(t, e, i) {
            return pt(t, "nextSibling", i);
        },
        prevUntil: function(t, e, i) {
            return pt(t, "previousSibling", i);
        },
        siblings: function(t) {
            return ft((t.parentNode || {}).firstChild, t);
        },
        children: function(t) {
            return ft(t.firstChild);
        },
        contents: function(t) {
            return t.contentDocument || at.merge([], t.childNodes);
        }
    }, function(t, e) {
        at.fn[t] = function(i, n) {
            var s = at.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = at.filter(n, s)), 
            this.length > 1 && (wt[t] || at.uniqueSort(s), xt.test(t) && s.reverse()), this.pushStack(s);
        };
    });
    var Tt = /[^\x20\t\r\n\f]+/g;
    at.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return at.each(t.match(Tt) || [], function(t, i) {
                e[i] = !0;
            }), e;
        }(t) : at.extend({}, t);
        var e, i, n, s, o = [], r = [], a = -1, l = function() {
            for (s = t.once, n = e = !0; r.length; a = -1) for (i = r.shift(); ++a < o.length; ) !1 === o[a].apply(i[0], i[1]) && t.stopOnFalse && (a = o.length, 
            i = !1);
            t.memory || (i = !1), e = !1, s && (o = i ? [] : "");
        }, c = {
            add: function() {
                return o && (i && !e && (a = o.length - 1, r.push(i)), function e(i) {
                    at.each(i, function(i, n) {
                        at.isFunction(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== at.type(n) && e(n);
                    });
                }(arguments), i && !e && l()), this;
            },
            remove: function() {
                return at.each(arguments, function(t, e) {
                    for (var i; (i = at.inArray(e, o, i)) > -1; ) o.splice(i, 1), i <= a && a--;
                }), this;
            },
            has: function(t) {
                return t ? at.inArray(t, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return s = r = [], o = i = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return s = r = [], i || e || (o = i = ""), this;
            },
            locked: function() {
                return !!s;
            },
            fireWith: function(t, i) {
                return s || (i = i || [], i = [ t, i.slice ? i.slice() : i ], r.push(i), e || l()), 
                this;
            },
            fire: function() {
                return c.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!n;
            }
        };
        return c;
    }, at.extend({
        Deferred: function(e) {
            var i = [ [ "notify", "progress", at.Callbacks("memory"), at.Callbacks("memory"), 2 ], [ "resolve", "done", at.Callbacks("once memory"), at.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", at.Callbacks("once memory"), at.Callbacks("once memory"), 1, "rejected" ] ], n = "pending", s = {
                state: function() {
                    return n;
                },
                always: function() {
                    return o.done(arguments).fail(arguments), this;
                },
                catch: function(t) {
                    return s.then(null, t);
                },
                pipe: function() {
                    var t = arguments;
                    return at.Deferred(function(e) {
                        at.each(i, function(i, n) {
                            var s = at.isFunction(t[n[4]]) && t[n[4]];
                            o[n[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && at.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [ t ] : arguments);
                            });
                        }), t = null;
                    }).promise();
                },
                then: function(e, n, s) {
                    function o(e, i, n, s) {
                        return function() {
                            var c = this, d = arguments, u = function() {
                                var t, u;
                                if (!(e < l)) {
                                    if ((t = n.apply(c, d)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                    u = t && ("object" == typeof t || "function" == typeof t) && t.then, at.isFunction(u) ? s ? u.call(t, o(l, i, r, s), o(l, i, a, s)) : (l++, 
                                    u.call(t, o(l, i, r, s), o(l, i, a, s), o(l, i, r, i.notifyWith))) : (n !== r && (c = void 0, 
                                    d = [ t ]), (s || i.resolveWith)(c, d));
                                }
                            }, h = s ? u : function() {
                                try {
                                    u();
                                } catch (t) {
                                    at.Deferred.exceptionHook && at.Deferred.exceptionHook(t, h.stackTrace), e + 1 >= l && (n !== a && (c = void 0, 
                                    d = [ t ]), i.rejectWith(c, d));
                                }
                            };
                            e ? h() : (at.Deferred.getStackHook && (h.stackTrace = at.Deferred.getStackHook()), 
                            t.setTimeout(h));
                        };
                    }
                    var l = 0;
                    return at.Deferred(function(t) {
                        i[0][3].add(o(0, t, at.isFunction(s) ? s : r, t.notifyWith)), i[1][3].add(o(0, t, at.isFunction(e) ? e : r)), 
                        i[2][3].add(o(0, t, at.isFunction(n) ? n : a));
                    }).promise();
                },
                promise: function(t) {
                    return null != t ? at.extend(t, s) : s;
                }
            }, o = {};
            return at.each(i, function(t, e) {
                var r = e[2], a = e[5];
                s[e[1]] = r.add, a && r.add(function() {
                    n = a;
                }, i[3 - t][2].disable, i[0][2].lock), r.add(e[3].fire), o[e[0]] = function() {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this;
                }, o[e[0] + "With"] = r.fireWith;
            }), s.promise(o), e && e.call(o, o), o;
        },
        when: function(t) {
            var e = arguments.length, i = e, n = Array(i), s = Z.call(arguments), o = at.Deferred(), r = function(t) {
                return function(i) {
                    n[t] = this, s[t] = arguments.length > 1 ? Z.call(arguments) : i, --e || o.resolveWith(n, s);
                };
            };
            if (e <= 1 && (l(t, o.done(r(i)).resolve, o.reject), "pending" === o.state() || at.isFunction(s[i] && s[i].then))) return o.then();
            for (;i--; ) l(s[i], r(i), o.reject);
            return o.promise();
        }
    });
    var kt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    at.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && kt.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i);
    }, at.readyException = function(e) {
        t.setTimeout(function() {
            throw e;
        });
    };
    var St = at.Deferred();
    at.fn.ready = function(t) {
        return St.then(t).catch(function(t) {
            at.readyException(t);
        }), this;
    }, at.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? at.readyWait++ : at.ready(!0);
        },
        ready: function(t) {
            (!0 === t ? --at.readyWait : at.isReady) || (at.isReady = !0, !0 !== t && --at.readyWait > 0 || St.resolveWith(G, [ at ]));
        }
    }), at.ready.then = St.then, "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? t.setTimeout(at.ready) : (G.addEventListener("DOMContentLoaded", c), 
    t.addEventListener("load", c));
    var Ct = function(t, e, i, n, s, o, r) {
        var a = 0, l = t.length, c = null == i;
        if ("object" === at.type(i)) {
            s = !0;
            for (a in i) Ct(t, e, a, i[a], !0, o, r);
        } else if (void 0 !== n && (s = !0, at.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), 
        e = null) : (c = e, e = function(t, e, i) {
            return c.call(at(t), i);
        })), e)) for (;a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
        return s ? t : c ? e.call(t) : l ? e(t[0], i) : o;
    }, $t = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
    d.uid = 1, d.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, $t(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e;
        },
        set: function(t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[at.camelCase(e)] = i; else for (n in e) s[at.camelCase(n)] = e[n];
            return s;
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][at.camelCase(e)];
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), 
            void 0 !== i ? i : e);
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    at.isArray(e) ? e = e.map(at.camelCase) : (e = at.camelCase(e), e = e in n ? [ e ] : e.match(Tt) || []), 
                    i = e.length;
                    for (;i--; ) delete n[e[i]];
                }
                (void 0 === e || at.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !at.isEmptyObject(e);
        }
    };
    var Et = new d(), Pt = new d(), At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Lt = /[A-Z]/g;
    at.extend({
        hasData: function(t) {
            return Pt.hasData(t) || Et.hasData(t);
        },
        data: function(t, e, i) {
            return Pt.access(t, e, i);
        },
        removeData: function(t, e) {
            Pt.remove(t, e);
        },
        _data: function(t, e, i) {
            return Et.access(t, e, i);
        },
        _removeData: function(t, e) {
            Et.remove(t, e);
        }
    }), at.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0], r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = Pt.get(o), 1 === o.nodeType && !Et.get(o, "hasDataAttrs"))) {
                    for (i = r.length; i--; ) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = at.camelCase(n.slice(5)), 
                    u(o, n, s[n]));
                    Et.set(o, "hasDataAttrs", !0);
                }
                return s;
            }
            return "object" == typeof t ? this.each(function() {
                Pt.set(this, t);
            }) : Ct(this, function(e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = Pt.get(o, t))) return i;
                    if (void 0 !== (i = u(o, t))) return i;
                } else this.each(function() {
                    Pt.set(this, t, e);
                });
            }, null, e, arguments.length > 1, null, !0);
        },
        removeData: function(t) {
            return this.each(function() {
                Pt.remove(this, t);
            });
        }
    }), at.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = Et.get(t, e), i && (!n || at.isArray(i) ? n = Et.access(t, e, at.makeArray(i)) : n.push(i)), 
            n || [];
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = at.queue(t, e), n = i.length, s = i.shift(), o = at._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), 
            delete o.stop, s.call(t, function() {
                at.dequeue(t, e);
            }, o)), !n && o && o.empty.fire();
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return Et.get(t, i) || Et.access(t, i, {
                empty: at.Callbacks("once memory").add(function() {
                    Et.remove(t, [ e + "queue", i ]);
                })
            });
        }
    }), at.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? at.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = at.queue(this, t, e);
                at._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && at.dequeue(this, t);
            });
        },
        dequeue: function(t) {
            return this.each(function() {
                at.dequeue(this, t);
            });
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", []);
        },
        promise: function(t, e) {
            var i, n = 1, s = at.Deferred(), o = this, r = this.length, a = function() {
                --n || s.resolveWith(o, [ o ]);
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--; ) (i = Et.get(o[r], t + "queueHooks")) && i.empty && (n++, 
            i.empty.add(a));
            return a(), s.promise(e);
        }
    });
    var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Dt = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"), Ot = [ "Top", "Right", "Bottom", "Left" ], Nt = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && at.contains(t.ownerDocument, t) && "none" === at.css(t, "display");
    }, It = function(t, e, i, n) {
        var s, o, r = {};
        for (o in e) r[o] = t.style[o], t.style[o] = e[o];
        s = i.apply(t, n || []);
        for (o in e) t.style[o] = r[o];
        return s;
    }, Mt = {};
    at.fn.extend({
        show: function() {
            return f(this, !0);
        },
        hide: function() {
            return f(this);
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Nt(this) ? at(this).show() : at(this).hide();
            });
        }
    });
    var Ft = /^(?:checkbox|radio)$/i, Ht = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, qt = /^$|\/(?:java|ecma)script/i, zt = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, 
    zt.th = zt.td;
    var Rt = /<|&#?\w+;/;
    !function() {
        var t = G.createDocumentFragment().appendChild(G.createElement("div")), e = G.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), 
        t.appendChild(e), rt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        t.innerHTML = "<textarea>x</textarea>", rt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var Bt = G.documentElement, Wt = /^key/, _t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Xt = /^([^.]*)(?:\.(.+)|)/;
    at.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, r, a, l, c, d, u, h, p, f, g, m = Et.get(t);
            if (m) for (i.handler && (o = i, i = o.handler, s = o.selector), s && at.find.matchesSelector(Bt, s), 
            i.guid || (i.guid = at.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(e) {
                return void 0 !== at && at.event.triggered !== e.type ? at.event.dispatch.apply(t, arguments) : void 0;
            }), c = (e = (e || "").match(Tt) || [ "" ]).length; c--; ) a = Xt.exec(e[c]) || [], 
            p = g = a[1], f = (a[2] || "").split(".").sort(), p && (u = at.event.special[p] || {}, 
            p = (s ? u.delegateType : u.bindType) || p, u = at.event.special[p] || {}, d = at.extend({
                type: p,
                origType: g,
                data: n,
                handler: i,
                guid: i.guid,
                selector: s,
                needsContext: s && at.expr.match.needsContext.test(s),
                namespace: f.join(".")
            }, o), (h = l[p]) || (h = l[p] = [], h.delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, r) || t.addEventListener && t.addEventListener(p, r)), 
            u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)), s ? h.splice(h.delegateCount++, 0, d) : h.push(d), 
            at.event.global[p] = !0);
        },
        remove: function(t, e, i, n, s) {
            var o, r, a, l, c, d, u, h, p, f, g, m = Et.hasData(t) && Et.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(Tt) || [ "" ]).length; c--; ) if (a = Xt.exec(e[c]) || [], 
                p = g = a[1], f = (a[2] || "").split(".").sort(), p) {
                    for (u = at.event.special[p] || {}, h = l[p = (n ? u.delegateType : u.bindType) || p] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = h.length; o--; ) d = h[o], 
                    !s && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(o, 1), 
                    d.selector && h.delegateCount--, u.remove && u.remove.call(t, d));
                    r && !h.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || at.removeEvent(t, p, m.handle), 
                    delete l[p]);
                } else for (p in l) at.event.remove(t, p + e[c], i, n, !0);
                at.isEmptyObject(l) && Et.remove(t, "handle events");
            }
        },
        dispatch: function(t) {
            var e, i, n, s, o, r, a = at.event.fix(t), l = new Array(arguments.length), c = (Et.get(this, "events") || {})[a.type] || [], d = at.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
                for (r = at.event.handlers.call(this, a, c), e = 0; (s = r[e++]) && !a.isPropagationStopped(); ) for (a.currentTarget = s.elem, 
                i = 0; (o = s.handlers[i++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o, 
                a.data = o.data, void 0 !== (n = ((at.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), 
                a.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, r, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                for (o = [], r = {}, i = 0; i < l; i++) n = e[i], s = n.selector + " ", void 0 === r[s] && (r[s] = n.needsContext ? at(s, this).index(c) > -1 : at.find(s, this, null, [ c ]).length), 
                r[s] && o.push(n);
                o.length && a.push({
                    elem: c,
                    handlers: o
                });
            }
            return c = this, l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }), a;
        },
        addProp: function(t, e) {
            Object.defineProperty(at.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: at.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(t) {
            return t[at.expando] ? t : new at.Event(t);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === x() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && at.nodeName(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(t) {
                    return at.nodeName(t.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                }
            }
        }
    }, at.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i);
    }, at.Event = function(t, e) {
        return this instanceof at.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, 
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? y : b, 
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, 
        this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, 
        e && at.extend(this, e), this.timeStamp = t && t.timeStamp || at.now(), void (this[at.expando] = !0)) : new at.Event(t, e);
    }, at.Event.prototype = {
        constructor: at.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = y, t && !this.isSimulated && t.preventDefault();
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = y, t && !this.isSimulated && t.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y, t && !this.isSimulated && t.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, at.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && Wt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && _t.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
        }
    }, at.event.addProp), at.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        at.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = t.relatedTarget, s = t.handleObj;
                return n && (n === this || at.contains(this, n)) || (t.type = s.origType, i = s.handler.apply(this, arguments), 
                t.type = e), i;
            }
        };
    }), at.fn.extend({
        on: function(t, e, i, n) {
            return w(this, t, e, i, n);
        },
        one: function(t, e, i, n) {
            return w(this, t, e, i, n, 1);
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, at(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), 
            this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this;
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = b), 
            this.each(function() {
                at.event.remove(this, t, i, e);
            });
        }
    });
    var Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ut = /<script|<style|<link/i, Vt = /checked\s*(?:[^=]|=\s*.checked.)/i, Gt = /^true\/(.*)/, Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    at.extend({
        htmlPrefilter: function(t) {
            return t.replace(Yt, "<$1></$2>");
        },
        clone: function(t, e, i) {
            var n, s, o, r, a = t.cloneNode(!0), l = at.contains(t.ownerDocument, t);
            if (!(rt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || at.isXMLDoc(t))) for (r = g(a), 
            o = g(t), n = 0, s = o.length; n < s; n++) $(o[n], r[n]);
            if (e) if (i) for (o = o || g(t), r = r || g(a), n = 0, s = o.length; n < s; n++) C(o[n], r[n]); else C(t, a);
            return (r = g(a, "script")).length > 0 && m(r, !l && g(t, "script")), a;
        },
        cleanData: function(t) {
            for (var e, i, n, s = at.event.special, o = 0; void 0 !== (i = t[o]); o++) if ($t(i)) {
                if (e = i[Et.expando]) {
                    if (e.events) for (n in e.events) s[n] ? at.event.remove(i, n) : at.removeEvent(i, n, e.handle);
                    i[Et.expando] = void 0;
                }
                i[Pt.expando] && (i[Pt.expando] = void 0);
            }
        }
    }), at.fn.extend({
        detach: function(t) {
            return P(this, t, !0);
        },
        remove: function(t) {
            return P(this, t);
        },
        text: function(t) {
            return Ct(this, function(t) {
                return void 0 === t ? at.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
                });
            }, null, t, arguments.length);
        },
        append: function() {
            return E(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    T(this, t).appendChild(t);
                }
            });
        },
        prepend: function() {
            return E(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild);
                }
            });
        },
        before: function() {
            return E(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this);
            });
        },
        after: function() {
            return E(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
            });
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (at.cleanData(g(t, !1)), 
            t.textContent = "");
            return this;
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return at.clone(this, t, e);
            });
        },
        html: function(t) {
            return Ct(this, function(t) {
                var e = this[0] || {}, i = 0, n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Ut.test(t) && !zt[(Ht.exec(t) || [ "", "" ])[1].toLowerCase()]) {
                    t = at.htmlPrefilter(t);
                    try {
                        for (;i < n; i++) 1 === (e = this[i] || {}).nodeType && (at.cleanData(g(e, !1)), 
                        e.innerHTML = t);
                        e = 0;
                    } catch (t) {}
                }
                e && this.empty().append(t);
            }, null, t, arguments.length);
        },
        replaceWith: function() {
            var t = [];
            return E(this, arguments, function(e) {
                var i = this.parentNode;
                at.inArray(this, t) < 0 && (at.cleanData(g(this)), i && i.replaceChild(e, this));
            }, t);
        }
    }), at.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        at.fn[t] = function(t) {
            for (var i, n = [], s = at(t), o = s.length - 1, r = 0; r <= o; r++) i = r === o ? this : this.clone(!0), 
            at(s[r])[e](i), K.apply(n, i.get());
            return this.pushStack(n);
        };
    });
    var Zt = /^margin/, Jt = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"), Kt = function(e) {
        var i = e.ownerDocument.defaultView;
        return i && i.opener || (i = t), i.getComputedStyle(e);
    };
    !function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", Bt.appendChild(r);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, o = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", 
                s = "4px" === e.marginRight, Bt.removeChild(r), a = null;
            }
        }
        var i, n, s, o, r = G.createElement("div"), a = G.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        rt.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        r.appendChild(a), at.extend(rt, {
            pixelPosition: function() {
                return e(), i;
            },
            boxSizingReliable: function() {
                return e(), n;
            },
            pixelMarginRight: function() {
                return e(), s;
            },
            reliableMarginLeft: function() {
                return e(), o;
            }
        }));
    }();
    var te = /^(none|table(?!-c[ea]).+)/, ee = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, ie = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ne = [ "Webkit", "Moz", "ms" ], se = G.createElement("div").style;
    at.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = A(t, "opacity");
                        return "" === i ? "1" : i;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = at.camelCase(e), l = t.style;
                return e = at.cssProps[a] || (at.cssProps[a] = j(a) || a), r = at.cssHooks[e] || at.cssHooks[a], 
                void 0 === i ? r && "get" in r && void 0 !== (s = r.get(t, !1, n)) ? s : l[e] : ("string" === (o = typeof i) && (s = Dt.exec(i)) && s[1] && (i = h(t, e, s), 
                o = "number"), void (null != i && i == i && ("number" === o && (i += s && s[3] || (at.cssNumber[a] ? "" : "px")), 
                rt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), 
                r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))));
            }
        },
        css: function(t, e, i, n) {
            var s, o, r, a = at.camelCase(e);
            return e = at.cssProps[a] || (at.cssProps[a] = j(a) || a), (r = at.cssHooks[e] || at.cssHooks[a]) && "get" in r && (s = r.get(t, !0, i)), 
            void 0 === s && (s = A(t, e, n)), "normal" === s && e in ie && (s = ie[e]), "" === i || i ? (o = parseFloat(s), 
            !0 === i || isFinite(o) ? o || 0 : s) : s;
        }
    }), at.each([ "height", "width" ], function(t, e) {
        at.cssHooks[e] = {
            get: function(t, i, n) {
                if (i) return !te.test(at.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? N(t, e, n) : It(t, ee, function() {
                    return N(t, e, n);
                });
            },
            set: function(t, i, n) {
                var s, o = n && Kt(t), r = n && O(t, e, n, "border-box" === at.css(t, "boxSizing", !1, o), o);
                return r && (s = Dt.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = at.css(t, e)), 
                D(0, i, r);
            }
        };
    }), at.cssHooks.marginLeft = L(rt.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(A(t, "marginLeft")) || t.getBoundingClientRect().left - It(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left;
        })) + "px";
    }), at.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        at.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [ i ]; n < 4; n++) s[t + Ot[n] + e] = o[n] || o[n - 2] || o[0];
                return s;
            }
        }, Zt.test(t) || (at.cssHooks[t + e].set = D);
    }), at.fn.extend({
        css: function(t, e) {
            return Ct(this, function(t, e, i) {
                var n, s, o = {}, r = 0;
                if (at.isArray(e)) {
                    for (n = Kt(t), s = e.length; r < s; r++) o[e[r]] = at.css(t, e[r], !1, n);
                    return o;
                }
                return void 0 !== i ? at.style(t, e, i) : at.css(t, e);
            }, t, e, arguments.length > 1);
        }
    }), at.Tween = I, I.prototype = {
        constructor: I,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || at.easing._default, this.options = e, 
            this.start = this.now = this.cur(), this.end = n, this.unit = o || (at.cssNumber[i] ? "" : "px");
        },
        cur: function() {
            var t = I.propHooks[this.prop];
            return t && t.get ? t.get(this) : I.propHooks._default.get(this);
        },
        run: function(t) {
            var e, i = I.propHooks[this.prop];
            return this.options.duration ? this.pos = e = at.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, 
            this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            i && i.set ? i.set(this) : I.propHooks._default.set(this), this;
        }
    }, I.prototype.init.prototype = I.prototype, I.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = at.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
            },
            set: function(t) {
                at.fx.step[t.prop] ? at.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[at.cssProps[t.prop]] && !at.cssHooks[t.prop] ? t.elem[t.prop] = t.now : at.style(t.elem, t.prop, t.now + t.unit);
            }
        }
    }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        }
    }, at.easing = {
        linear: function(t) {
            return t;
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2;
        },
        _default: "swing"
    }, at.fx = I.prototype.init, at.fx.step = {};
    var oe, re, ae = /^(?:toggle|show|hide)$/, le = /queueHooks$/;
    at.Animation = at.extend(z, {
        tweeners: {
            "*": [ function(t, e) {
                var i = this.createTween(t, e);
                return h(i.elem, t, Dt.exec(e), i), i;
            } ]
        },
        tweener: function(t, e) {
            at.isFunction(t) ? (e = t, t = [ "*" ]) : t = t.match(Tt);
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], z.tweeners[i] = z.tweeners[i] || [], 
            z.tweeners[i].unshift(e);
        },
        prefilters: [ function(t, e, i) {
            var n, s, o, r, a, l, c, d, u = "width" in e || "height" in e, h = this, p = {}, g = t.style, m = t.nodeType && Nt(t), v = Et.get(t, "fxshow");
            i.queue || (null == (r = at._queueHooks(t, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, 
            r.empty.fire = function() {
                r.unqueued || a();
            }), r.unqueued++, h.always(function() {
                h.always(function() {
                    r.unqueued--, at.queue(t, "fx").length || r.empty.fire();
                });
            }));
            for (n in e) if (s = e[n], ae.test(s)) {
                if (delete e[n], o = o || "toggle" === s, s === (m ? "hide" : "show")) {
                    if ("show" !== s || !v || void 0 === v[n]) continue;
                    m = !0;
                }
                p[n] = v && v[n] || at.style(t, n);
            }
            if ((l = !at.isEmptyObject(e)) || !at.isEmptyObject(p)) {
                u && 1 === t.nodeType && (i.overflow = [ g.overflow, g.overflowX, g.overflowY ], 
                null == (c = v && v.display) && (c = Et.get(t, "display")), "none" === (d = at.css(t, "display")) && (c ? d = c : (f([ t ], !0), 
                c = t.style.display || c, d = at.css(t, "display"), f([ t ]))), ("inline" === d || "inline-block" === d && null != c) && "none" === at.css(t, "float") && (l || (h.done(function() {
                    g.display = c;
                }), null == c && (d = g.display, c = "none" === d ? "" : d)), g.display = "inline-block")), 
                i.overflow && (g.overflow = "hidden", h.always(function() {
                    g.overflow = i.overflow[0], g.overflowX = i.overflow[1], g.overflowY = i.overflow[2];
                })), l = !1;
                for (n in p) l || (v ? "hidden" in v && (m = v.hidden) : v = Et.access(t, "fxshow", {
                    display: c
                }), o && (v.hidden = !m), m && f([ t ], !0), h.done(function() {
                    m || f([ t ]), Et.remove(t, "fxshow");
                    for (n in p) at.style(t, n, p[n]);
                })), l = q(m ? v[n] : 0, n, h), n in v || (v[n] = l.start, m && (l.end = l.start, 
                l.start = 0));
            }
        } ],
        prefilter: function(t, e) {
            e ? z.prefilters.unshift(t) : z.prefilters.push(t);
        }
    }), at.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? at.extend({}, t) : {
            complete: i || !i && e || at.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !at.isFunction(e) && e
        };
        return at.fx.off || G.hidden ? n.duration = 0 : "number" != typeof n.duration && (n.duration in at.fx.speeds ? n.duration = at.fx.speeds[n.duration] : n.duration = at.fx.speeds._default), 
        null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            at.isFunction(n.old) && n.old.call(this), n.queue && at.dequeue(this, n.queue);
        }, n;
    }, at.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Nt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n);
        },
        animate: function(t, e, i, n) {
            var s = at.isEmptyObject(t), o = at.speed(e, i, n), r = function() {
                var e = z(this, at.extend({}, t), o);
                (s || Et.get(this, "finish")) && e.stop(!0);
            };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop, e(i);
            };
            return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), 
            this.each(function() {
                var e = !0, s = null != t && t + "queueHooks", o = at.timers, r = Et.get(this);
                if (s) r[s] && r[s].stop && n(r[s]); else for (s in r) r[s] && r[s].stop && le.test(s) && n(r[s]);
                for (s = o.length; s--; ) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), 
                e = !1, o.splice(s, 1));
                !e && i || at.dequeue(this, t);
            });
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"), this.each(function() {
                var e, i = Et.get(this), n = i[t + "queue"], s = i[t + "queueHooks"], o = at.timers, r = n ? n.length : 0;
                for (i.finish = !0, at.queue(this, t, []), s && s.stop && s.stop.call(this, !0), 
                e = o.length; e--; ) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), 
                o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish;
            });
        }
    }), at.each([ "toggle", "show", "hide" ], function(t, e) {
        var i = at.fn[e];
        at.fn[e] = function(t, n, s) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(H(e, !0), t, n, s);
        };
    }), at.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        at.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n);
        };
    }), at.timers = [], at.fx.tick = function() {
        var t, e = 0, i = at.timers;
        for (oe = at.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
        i.length || at.fx.stop(), oe = void 0;
    }, at.fx.timer = function(t) {
        at.timers.push(t), t() ? at.fx.start() : at.timers.pop();
    }, at.fx.interval = 13, at.fx.start = function() {
        re || (re = t.requestAnimationFrame ? t.requestAnimationFrame(M) : t.setInterval(at.fx.tick, at.fx.interval));
    }, at.fx.stop = function() {
        t.cancelAnimationFrame ? t.cancelAnimationFrame(re) : t.clearInterval(re), re = null;
    }, at.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, at.fn.delay = function(e, i) {
        return e = at.fx ? at.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
            var s = t.setTimeout(i, e);
            n.stop = function() {
                t.clearTimeout(s);
            };
        });
    }, function() {
        var t = G.createElement("input"), e = G.createElement("select").appendChild(G.createElement("option"));
        t.type = "checkbox", rt.checkOn = "" !== t.value, rt.optSelected = e.selected, (t = G.createElement("input")).value = "t", 
        t.type = "radio", rt.radioValue = "t" === t.value;
    }();
    var ce, de = at.expr.attrHandle;
    at.fn.extend({
        attr: function(t, e) {
            return Ct(this, at.attr, t, e, arguments.length > 1);
        },
        removeAttr: function(t) {
            return this.each(function() {
                at.removeAttr(this, t);
            });
        }
    }), at.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? at.prop(t, e, i) : (1 === o && at.isXMLDoc(t) || (s = at.attrHooks[e.toLowerCase()] || (at.expr.match.bool.test(e) ? ce : void 0)), 
            void 0 !== i ? null === i ? void at.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), 
            i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = at.find.attr(t, e)) ? void 0 : n);
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!rt.radioValue && "radio" === e && at.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e;
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0, s = e && e.match(Tt);
            if (s && 1 === t.nodeType) for (;i = s[n++]; ) t.removeAttribute(i);
        }
    }), ce = {
        set: function(t, e, i) {
            return !1 === e ? at.removeAttr(t, i) : t.setAttribute(i, i), i;
        }
    }, at.each(at.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = de[e] || at.find.attr;
        de[e] = function(t, e, n) {
            var s, o, r = e.toLowerCase();
            return n || (o = de[r], de[r] = s, s = null != i(t, e, n) ? r : null, de[r] = o), 
            s;
        };
    });
    var ue = /^(?:input|select|textarea|button)$/i, he = /^(?:a|area)$/i;
    at.fn.extend({
        prop: function(t, e) {
            return Ct(this, at.prop, t, e, arguments.length > 1);
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[at.propFix[t] || t];
            });
        }
    }), at.extend({
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && at.isXMLDoc(t) || (e = at.propFix[e] || e, 
            s = at.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e];
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = at.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ue.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), rt.optSelected || (at.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
    }), at.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        at.propFix[this.toLowerCase()] = this;
    }), at.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, r, a, l = 0;
            if (at.isFunction(t)) return this.each(function(e) {
                at(this).addClass(t.call(this, e, B(this)));
            });
            if ("string" == typeof t && t) for (e = t.match(Tt) || []; i = this[l++]; ) if (s = B(i), 
            n = 1 === i.nodeType && " " + R(s) + " ") {
                for (r = 0; o = e[r++]; ) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                s !== (a = R(n)) && i.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(t) {
            var e, i, n, s, o, r, a, l = 0;
            if (at.isFunction(t)) return this.each(function(e) {
                at(this).removeClass(t.call(this, e, B(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(Tt) || []; i = this[l++]; ) if (s = B(i), 
            n = 1 === i.nodeType && " " + R(s) + " ") {
                for (r = 0; o = e[r++]; ) for (;n.indexOf(" " + o + " ") > -1; ) n = n.replace(" " + o + " ", " ");
                s !== (a = R(n)) && i.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : at.isFunction(t) ? this.each(function(i) {
                at(this).toggleClass(t.call(this, i, B(this), e), e);
            }) : this.each(function() {
                var e, n, s, o;
                if ("string" === i) for (n = 0, s = at(this), o = t.match(Tt) || []; e = o[n++]; ) s.hasClass(e) ? s.removeClass(e) : s.addClass(e); else void 0 !== t && "boolean" !== i || ((e = B(this)) && Et.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Et.get(this, "__className__") || ""));
            });
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++]; ) if (1 === i.nodeType && (" " + R(B(i)) + " ").indexOf(e) > -1) return !0;
            return !1;
        }
    });
    var pe = /\r/g;
    at.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = at.isFunction(t), this.each(function(i) {
                var s;
                1 === this.nodeType && (null == (s = n ? t.call(this, i, at(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : at.isArray(s) && (s = at.map(s, function(t) {
                    return null == t ? "" : t + "";
                })), (e = at.valHooks[this.type] || at.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s));
            })) : s ? (e = at.valHooks[s.type] || at.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(pe, "") : null == i ? "" : i : void 0;
        }
    }), at.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = at.find.attr(t, "value");
                    return null != e ? e : R(at.text(t));
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, s = t.options, o = t.selectedIndex, r = "select-one" === t.type, a = r ? null : [], l = r ? o + 1 : s.length;
                    for (n = o < 0 ? l : r ? o : 0; n < l; n++) if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !at.nodeName(i.parentNode, "optgroup"))) {
                        if (e = at(i).val(), r) return e;
                        a.push(e);
                    }
                    return a;
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = at.makeArray(e), r = s.length; r--; ) n = s[r], 
                    (n.selected = at.inArray(at.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o;
                }
            }
        }
    }), at.each([ "radio", "checkbox" ], function() {
        at.valHooks[this] = {
            set: function(t, e) {
                if (at.isArray(e)) return t.checked = at.inArray(at(t).val(), e) > -1;
            }
        }, rt.checkOn || (at.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value;
        });
    });
    var fe = /^(?:focusinfocus|focusoutblur)$/;
    at.extend(at.event, {
        trigger: function(e, i, n, s) {
            var o, r, a, l, c, d, u, h = [ n || G ], p = nt.call(e, "type") ? e.type : e, f = nt.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = a = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !fe.test(p + at.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), 
            p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[at.expando] ? e : new at.Event(p, "object" == typeof e && e), 
            e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), i = null == i ? [ e ] : at.makeArray(i, [ e ]), 
            u = at.event.special[p] || {}, s || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!s && !u.noBubble && !at.isWindow(n)) {
                    for (l = u.delegateType || p, fe.test(l + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), 
                    a = r;
                    a === (n.ownerDocument || G) && h.push(a.defaultView || a.parentWindow || t);
                }
                for (o = 0; (r = h[o++]) && !e.isPropagationStopped(); ) e.type = o > 1 ? l : u.bindType || p, 
                (d = (Et.get(r, "events") || {})[e.type] && Et.get(r, "handle")) && d.apply(r, i), 
                (d = c && r[c]) && d.apply && $t(r) && (e.result = d.apply(r, i), !1 === e.result && e.preventDefault());
                return e.type = p, s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), i) || !$t(n) || c && at.isFunction(n[p]) && !at.isWindow(n) && ((a = n[c]) && (n[c] = null), 
                at.event.triggered = p, n[p](), at.event.triggered = void 0, a && (n[c] = a)), e.result;
            }
        },
        simulate: function(t, e, i) {
            var n = at.extend(new at.Event(), i, {
                type: t,
                isSimulated: !0
            });
            at.event.trigger(n, null, e);
        }
    }), at.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                at.event.trigger(t, e, this);
            });
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return at.event.trigger(t, e, i, !0);
        }
    }), at.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        at.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
        };
    }), at.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t);
        }
    }), rt.focusin = "onfocusin" in t, rt.focusin || at.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            at.event.simulate(e, t.target, at.event.fix(t));
        };
        at.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this, s = Et.access(n, e);
                s || n.addEventListener(t, i, !0), Et.access(n, e, (s || 0) + 1);
            },
            teardown: function() {
                var n = this.ownerDocument || this, s = Et.access(n, e) - 1;
                s ? Et.access(n, e, s) : (n.removeEventListener(t, i, !0), Et.remove(n, e));
            }
        };
    });
    var ge = t.location, me = at.now(), ve = /\?/;
    at.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = new t.DOMParser().parseFromString(e, "text/xml");
        } catch (t) {
            i = void 0;
        }
        return i && !i.getElementsByTagName("parsererror").length || at.error("Invalid XML: " + e), 
        i;
    };
    var ye = /\[\]$/, be = /\r?\n/g, xe = /^(?:submit|button|image|reset|file)$/i, we = /^(?:input|select|textarea|keygen)/i;
    at.param = function(t, e) {
        var i, n = [], s = function(t, e) {
            var i = at.isFunction(e) ? e() : e;
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
        };
        if (at.isArray(t) || t.jquery && !at.isPlainObject(t)) at.each(t, function() {
            s(this.name, this.value);
        }); else for (i in t) W(i, t[i], e, s);
        return n.join("&");
    }, at.fn.extend({
        serialize: function() {
            return at.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var t = at.prop(this, "elements");
                return t ? at.makeArray(t) : this;
            }).filter(function() {
                var t = this.type;
                return this.name && !at(this).is(":disabled") && we.test(this.nodeName) && !xe.test(t) && (this.checked || !Ft.test(t));
            }).map(function(t, e) {
                var i = at(this).val();
                return null == i ? null : at.isArray(i) ? at.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(be, "\r\n")
                    };
                }) : {
                    name: e.name,
                    value: i.replace(be, "\r\n")
                };
            }).get();
        }
    });
    var Te = /%20/g, ke = /#.*$/, Se = /([?&])_=[^&]*/, Ce = /^(.*?):[ \t]*([^\r\n]*)$/gm, $e = /^(?:GET|HEAD)$/, Ee = /^\/\//, Pe = {}, Ae = {}, Le = "*/".concat("*"), je = G.createElement("a");
    je.href = ge.href, at.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ge.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ge.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Le,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": at.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Y(Y(t, at.ajaxSettings), e) : Y(at.ajaxSettings, t);
        },
        ajaxPrefilter: _(Pe),
        ajaxTransport: _(Ae),
        ajax: function(e, i) {
            function n(e, i, n, a) {
                var c, h, p, x, w, T = i;
                d || (d = !0, l && t.clearTimeout(l), s = void 0, r = a || "", k.readyState = e > 0 ? 4 : 0, 
                c = e >= 200 && e < 300 || 304 === e, n && (x = function(t, e, i) {
                    for (var n, s, o, r, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), 
                    void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n) for (s in a) if (a[s] && a[s].test(n)) {
                        l.unshift(s);
                        break;
                    }
                    if (l[0] in i) o = l[0]; else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                o = s;
                                break;
                            }
                            r || (r = s);
                        }
                        o = o || r;
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o];
                }(f, k, n)), x = function(t, e, i, n) {
                    var s, o, r, a, l, c = {}, d = t.dataTypes.slice();
                    if (d[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                    for (o = d.shift(); o; ) if (t.responseFields[o] && (i[t.responseFields[o]] = e), 
                    !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = d.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(r = c[l + " " + o] || c["* " + o])) for (s in c) if ((a = s.split(" "))[1] === o && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            !0 === r ? r = c[s] : !0 !== c[s] && (o = a[0], d.unshift(a[1]));
                            break;
                        }
                        if (!0 !== r) if (r && t.throws) e = r(e); else try {
                            e = r(e);
                        } catch (t) {
                            return {
                                state: "parsererror",
                                error: r ? t : "No conversion from " + l + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: e
                    };
                }(f, x, k, c), c ? (f.ifModified && ((w = k.getResponseHeader("Last-Modified")) && (at.lastModified[o] = w), 
                (w = k.getResponseHeader("etag")) && (at.etag[o] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, 
                h = x.data, p = x.error, c = !p)) : (p = T, !e && T || (T = "error", e < 0 && (e = 0))), 
                k.status = e, k.statusText = (i || T) + "", c ? v.resolveWith(g, [ h, T, k ]) : v.rejectWith(g, [ k, T, p ]), 
                k.statusCode(b), b = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [ k, f, c ? h : p ]), 
                y.fireWith(g, [ k, T ]), u && (m.trigger("ajaxComplete", [ k, f ]), --at.active || at.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var s, o, r, a, l, c, d, u, h, p, f = at.ajaxSetup({}, i), g = f.context || f, m = f.context && (g.nodeType || g.jquery) ? at(g) : at.event, v = at.Deferred(), y = at.Callbacks("once memory"), b = f.statusCode || {}, x = {}, w = {}, T = "canceled", k = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (d) {
                        if (!a) for (a = {}; e = Ce.exec(r); ) a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()];
                    }
                    return null == e ? null : e;
                },
                getAllResponseHeaders: function() {
                    return d ? r : null;
                },
                setRequestHeader: function(t, e) {
                    return null == d && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, x[t] = e), 
                    this;
                },
                overrideMimeType: function(t) {
                    return null == d && (f.mimeType = t), this;
                },
                statusCode: function(t) {
                    var e;
                    if (t) if (d) k.always(t[k.status]); else for (e in t) b[e] = [ b[e], t[e] ];
                    return this;
                },
                abort: function(t) {
                    var e = t || T;
                    return s && s.abort(e), n(0, e), this;
                }
            };
            if (v.promise(k), f.url = ((e || f.url || ge.href) + "").replace(Ee, ge.protocol + "//"), 
            f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Tt) || [ "" ], 
            null == f.crossDomain) {
                c = G.createElement("a");
                try {
                    c.href = f.url, c.href = c.href, f.crossDomain = je.protocol + "//" + je.host != c.protocol + "//" + c.host;
                } catch (t) {
                    f.crossDomain = !0;
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = at.param(f.data, f.traditional)), 
            X(Pe, f, i, k), d) return k;
            (u = at.event && f.global) && 0 == at.active++ && at.event.trigger("ajaxStart"), 
            f.type = f.type.toUpperCase(), f.hasContent = !$e.test(f.type), o = f.url.replace(ke, ""), 
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Te, "+")) : (p = f.url.slice(o.length), 
            f.data && (o += (ve.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(Se, "$1"), 
            p = (ve.test(o) ? "&" : "?") + "_=" + me++ + p), f.url = o + p), f.ifModified && (at.lastModified[o] && k.setRequestHeader("If-Modified-Since", at.lastModified[o]), 
            at.etag[o] && k.setRequestHeader("If-None-Match", at.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && k.setRequestHeader("Content-Type", f.contentType), 
            k.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Le + "; q=0.01" : "") : f.accepts["*"]);
            for (h in f.headers) k.setRequestHeader(h, f.headers[h]);
            if (f.beforeSend && (!1 === f.beforeSend.call(g, k, f) || d)) return k.abort();
            if (T = "abort", y.add(f.complete), k.done(f.success), k.fail(f.error), s = X(Ae, f, i, k)) {
                if (k.readyState = 1, u && m.trigger("ajaxSend", [ k, f ]), d) return k;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    k.abort("timeout");
                }, f.timeout));
                try {
                    d = !1, s.send(x, n);
                } catch (t) {
                    if (d) throw t;
                    n(-1, t);
                }
            } else n(-1, "No Transport");
            return k;
        },
        getJSON: function(t, e, i) {
            return at.get(t, e, i, "json");
        },
        getScript: function(t, e) {
            return at.get(t, void 0, e, "script");
        }
    }), at.each([ "get", "post" ], function(t, e) {
        at[e] = function(t, i, n, s) {
            return at.isFunction(i) && (s = s || n, n = i, i = void 0), at.ajax(at.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, at.isPlainObject(t) && t));
        };
    }), at._evalUrl = function(t) {
        return at.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, at.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (at.isFunction(t) && (t = t.call(this[0])), e = at(t, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                return t;
            }).append(this)), this;
        },
        wrapInner: function(t) {
            return at.isFunction(t) ? this.each(function(e) {
                at(this).wrapInner(t.call(this, e));
            }) : this.each(function() {
                var e = at(this), i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
            });
        },
        wrap: function(t) {
            var e = at.isFunction(t);
            return this.each(function(i) {
                at(this).wrapAll(e ? t.call(this, i) : t);
            });
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                at(this).replaceWith(this.childNodes);
            }), this;
        }
    }), at.expr.pseudos.hidden = function(t) {
        return !at.expr.pseudos.visible(t);
    }, at.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }, at.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest();
        } catch (t) {}
    };
    var De = {
        0: 200,
        1223: 204
    }, Oe = at.ajaxSettings.xhr();
    rt.cors = !!Oe && "withCredentials" in Oe, rt.ajax = Oe = !!Oe, at.ajaxTransport(function(e) {
        var i, n;
        if (rt.cors || Oe && !e.crossDomain) return {
            send: function(s, o) {
                var r, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) a[r] = e.xhrFields[r];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                for (r in s) a.setRequestHeader(r, s[r]);
                i = function(t) {
                    return function() {
                        i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(De[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                    4 === a.readyState && t.setTimeout(function() {
                        i && n();
                    });
                }, i = i("abort");
                try {
                    a.send(e.hasContent && e.data || null);
                } catch (t) {
                    if (i) throw t;
                }
            },
            abort: function() {
                i && i();
            }
        };
    }), at.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1);
    }), at.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return at.globalEval(t), t;
            }
        }
    }), at.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }), at.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, s) {
                    e = at("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type);
                    }), G.head.appendChild(e[0]);
                },
                abort: function() {
                    i && i();
                }
            };
        }
    });
    var Ne = [], Ie = /(=)\?(?=&|$)|\?\?/;
    at.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ne.pop() || at.expando + "_" + me++;
            return this[t] = !0, t;
        }
    }), at.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, o, r, a = !1 !== e.jsonp && (Ie.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = at.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Ie, "$1" + s) : !1 !== e.jsonp && (e.url += (ve.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), 
        e.converters["script json"] = function() {
            return r || at.error(s + " was not called"), r[0];
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            r = arguments;
        }, n.always(function() {
            void 0 === o ? at(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, 
            Ne.push(s)), r && at.isFunction(o) && o(r[0]), r = o = void 0;
        }), "script";
    }), rt.createHTMLDocument = function() {
        var t = G.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length;
    }(), at.parseHTML = function(t, e, i) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (i = e, e = !1);
        var n, s, o;
        return e || (rt.createHTMLDocument ? (e = G.implementation.createHTMLDocument(""), 
        n = e.createElement("base"), n.href = G.location.href, e.head.appendChild(n)) : e = G), 
        s = mt.exec(t), o = !i && [], s ? [ e.createElement(s[1]) ] : (s = v([ t ], e, o), 
        o && o.length && at(o).remove(), at.merge([], s.childNodes));
    }, at.fn.load = function(t, e, i) {
        var n, s, o, r = this, a = t.indexOf(" ");
        return a > -1 && (n = R(t.slice(a)), t = t.slice(0, a)), at.isFunction(e) ? (i = e, 
        e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && at.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, r.html(n ? at("<div>").append(at.parseHTML(t)).find(n) : t);
        }).always(i && function(t, e) {
            r.each(function() {
                i.apply(this, o || [ t.responseText, e, t ]);
            });
        }), this;
    }, at.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(t, e) {
        at.fn[e] = function(t) {
            return this.on(e, t);
        };
    }), at.expr.pseudos.animated = function(t) {
        return at.grep(at.timers, function(e) {
            return t === e.elem;
        }).length;
    }, at.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, r, a, l, c = at.css(t, "position"), d = at(t), u = {};
            "static" === c && (t.style.position = "relative"), a = d.offset(), o = at.css(t, "top"), 
            l = at.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (n = d.position(), 
            r = n.top, s = n.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), at.isFunction(e) && (e = e.call(t, i, at.extend({}, a))), 
            null != e.top && (u.top = e.top - a.top + r), null != e.left && (u.left = e.left - a.left + s), 
            "using" in e ? e.using.call(t, u) : d.css(u);
        }
    }, at.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                at.offset.setOffset(this, t, e);
            });
            var e, i, n, s, o = this[0];
            return o ? o.getClientRects().length ? (n = o.getBoundingClientRect()).width || n.height ? (s = o.ownerDocument, 
            i = U(s), e = s.documentElement, {
                top: n.top + i.pageYOffset - e.clientTop,
                left: n.left + i.pageXOffset - e.clientLeft
            }) : n : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === at.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), 
                e = this.offset(), at.nodeName(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + at.css(t[0], "borderTopWidth", !0),
                    left: n.left + at.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - at.css(i, "marginTop", !0),
                    left: e.left - n.left - at.css(i, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === at.css(t, "position"); ) t = t.offsetParent;
                return t || Bt;
            });
        }
    }), at.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        at.fn[t] = function(n) {
            return Ct(this, function(t, n, s) {
                var o = U(t);
                return void 0 === s ? o ? o[e] : t[n] : void (o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s);
            }, t, n, arguments.length);
        };
    }), at.each([ "top", "left" ], function(t, e) {
        at.cssHooks[e] = L(rt.pixelPosition, function(t, i) {
            if (i) return i = A(t, e), Jt.test(i) ? at(t).position()[e] + "px" : i;
        });
    }), at.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        at.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            at.fn[n] = function(s, o) {
                var r = arguments.length && (i || "boolean" != typeof s), a = i || (!0 === s || !0 === o ? "margin" : "border");
                return Ct(this, function(e, i, s) {
                    var o;
                    return at.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, 
                    Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? at.css(e, i, a) : at.style(e, i, s, a);
                }, e, r ? s : void 0, r);
            };
        });
    }), at.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i);
        },
        unbind: function(t, e) {
            return this.off(t, null, e);
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n);
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
        }
    }), at.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return at;
    });
    var Me = t.jQuery, Fe = t.$;
    return at.noConflict = function(e) {
        return t.$ === at && (t.$ = Fe), e && t.jQuery === at && (t.jQuery = Me), at;
    }, e || (t.jQuery = t.$ = at), at;
}), function(t) {
    var e;
    jQuery(document).ready(function(t) {
        !function(t) {
            var i = navigator.userAgent.toLowerCase(), n = function(t) {
                return i.indexOf(t) > -1;
            }, s = document.documentElement, o = [ !/opera|webtv/i.test(i) && /msie\s(\d)/.test(i) ? "ie ie" + RegExp.$1 : n("firefox/2") ? "gecko ff2" : n("firefox/3.5") ? "gecko ff3 ff3_5" : n("firefox/3.6") ? "gecko ff3 ff3_6" : n("firefox/3") ? "gecko ff3" : n("gecko/") ? "gecko" : n("opera") ? "opera" + (/version\/(\d+)/.test(i) ? " opera" + RegExp.$1 : /opera(\s|\/)(\d+)/.test(i) ? " opera" + RegExp.$2 : "") : n("konqueror") ? "konqueror" : n("blackberry") ? "mobile blackberry" : n("android") ? "mobile android" : n("chrome") ? "webkit chrome" : n("iron") ? "webkit iron" : n("applewebkit/") ? "webkit safari" + (/version\/(\d+)/.test(i) ? " safari" + RegExp.$1 : "") : n("mozilla/") ? "gecko" : "", n("j2me") ? "mobile j2me" : n("iphone") ? "mobile iphone" : n("ipod") ? "mobile ipod" : n("ipad") ? "mobile ipad" : n("mac") ? "mac" : n("darwin") ? "mac" : n("webtv") ? "webtv" : n("win") ? "win" + (n("windows nt 6.0") ? " vista" : "") : n("freebsd") ? "freebsd" : n("x11") || n("linux") ? "linux" : "", "js" ];
            e = o.join(" "), s.className += " " + e;
        }(), t(window).width() > 770 ? t(".no-flexbox .wk-cols").each(function() {
            items = t(this).children(".wk-col").length, width = 100 / items, t(this).children(".wk-col").css("width", width + "%");
        }) : t(".no-flexbox .wk-cols").each(function() {
            t(this).children(".wk-col").css("width", "100%");
        }), t(".no-flexbox .wk-cols-m").each(function() {
            items = t(this).children('[class~="wk-col"]').length, width = 100 / items, t(this).children('[class~="wk-col"]').css("width", width + "%");
        }), t(window).width() > 415 ? t(".no-flexbox .wk-cols-t").each(function() {
            items = t(this).children('[class~="wk-col"]').length, width = 100 / items, t(this).children('[class^="wk-col"]').css("width", width + "%");
        }) : t(".no-flexbox .wk-cols-t").each(function() {
            t(this).children('[class~="wk-col"]').css("width", "100%");
        }), t(window).on("resize", function() {
            t(window).width() > 770 ? t(".no-flexbox .wk-cols").each(function() {
                items = t(this).children(".wk-col").length, width = 100 / items, t(this).children(".wk-col").css("width", width + "%");
            }) : t(".no-flexbox .wk-cols").each(function() {
                t(this).children(".wk-col").css("width", "100%");
            }), t(".no-flexbox .wk-cols-m").each(function() {
                items = t(this).children('[class~="wk-col"]').length, width = 100 / items, t(this).children('[class~="wk-col"]').css("width", width + "%");
            }), t(window).width() > 415 ? t(".no-flexbox .wk-cols-t").each(function() {
                items = t(this).children('[class~="wk-col"]').length, width = 100 / items, t(this).children('[class^="wk-col"]').css("width", width + "%");
            }) : t(".no-flexbox .wk-cols-t").each(function() {
                t(this).children('[class~="wk-col"]').css("width", "100%");
            });
        }), t(window).scroll(function() {
            t(window).scrollTop() >= 10 ? t("body").addClass("is-scrolled") : t("body").removeClass("is-scrolled");
        }), t(window).on("resize", function() {
            t(this).width() < 770 ? (t("html").addClass("mobile"), t("html").removeClass("desktop")) : (t("html").removeClass("mobile"), 
            t("html").addClass("desktop"));
        }), t(window).width() < 770 && t("html").addClass("mobile"), t(window).width() > 771 && t("html").addClass("desktop");
    });
}(jQuery), function(t, e, i, n) {
    "use strict";
    function s(t) {
        var e = t.currentTarget, n = t.data ? t.data.options : {}, s = n.selector ? i(n.selector) : t.data ? t.data.items : [], o = i(e).attr("data-fancybox") || "", r = 0, a = i.fancybox.getInstance();
        t.preventDefault(), a && a.current.opts.$orig.is(e) || (o ? (s = s.length ? s.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]'), 
        (r = s.index(e)) < 0 && (r = 0)) : s = [ e ], i.fancybox.open(s, n, r));
    }
    if (i) {
        if (i.fn.fancybox) return void i.error("fancyBox already initialized");
        var o = {
            loop: !1,
            margin: [ 44, 0 ],
            gutter: 50,
            keyboard: !0,
            arrows: !0,
            infobar: !1,
            toolbar: !0,
            buttons: [ "slideShow", "fullScreen", "thumbs", "close" ],
            idleTime: 4,
            smallBtn: "auto",
            protect: !1,
            modal: !1,
            image: {
                preload: "auto"
            },
            ajax: {
                settings: {
                    data: {
                        fancybox: !0
                    }
                }
            },
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {
                    scrolling: "auto"
                }
            },
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
            btnTpl: {
                slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
            },
            parentEl: "body",
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {
                autoStart: !1
            },
            touch: {
                vertical: !0,
                momentum: !0
            },
            hash: null,
            media: {},
            slideShow: {
                autoStart: !1,
                speed: 4e3
            },
            thumbs: {
                autoStart: !1,
                hideOnClose: !0
            },
            onInit: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop,
            onActivate: i.noop,
            onDeactivate: i.noop,
            clickContent: function(t, e) {
                return "image" === t.type && "zoom";
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                clickContent: function(t, e) {
                    return "image" === t.type && "toggleControls";
                },
                clickSlide: function(t, e) {
                    return "image" === t.type ? "toggleControls" : "close";
                },
                dblclickContent: function(t, e) {
                    return "image" === t.type && "zoom";
                },
                dblclickSlide: function(t, e) {
                    return "image" === t.type && "zoom";
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails"
                },
                de: {
                    CLOSE: "Schliessen",
                    NEXT: "Weiter",
                    PREV: "Zurück",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder"
                }
            }
        }, r = i(t), a = i(e), l = 0, c = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
            return t.setTimeout(e, 1e3 / 60);
        }, d = function() {
            var t, i = e.createElement("fakeelement"), n = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in n) if (void 0 !== i.style[t]) return n[t];
        }(), u = function(t) {
            return t && t.length && t[0].offsetHeight;
        }, h = function(t, n, s) {
            this.opts = i.extend(!0, {
                index: s
            }, o, n || {}), n && i.isArray(n.buttons) && (this.opts.buttons = n.buttons), this.id = this.opts.id || ++l, 
            this.group = [], this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, 
            this.prevPos = null, this.currPos = 0, this.firstRun = null, this.createGroup(t), 
            this.group.length && (this.$lastFocus = i(e.activeElement).blur(), this.slides = {}, 
            this.init(t));
        };
        i.extend(h.prototype, {
            init: function() {
                var t, e, n, s = this, o = s.group[s.currIndex].opts;
                s.scrollTop = a.scrollTop(), s.scrollLeft = a.scrollLeft(), i.fancybox.getInstance() || i.fancybox.isMobile || "hidden" === i("body").css("overflow") || (t = i("body").width(), 
                i("html").addClass("fancybox-enabled"), (t = i("body").width() - t) > 1 && i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), 
                n = "", i.each(o.buttons, function(t, e) {
                    n += o.btnTpl[e] || "";
                }), e = i(s.translate(s, o.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + s.id).addClass(o.baseClass).data("FancyBox", s).prependTo(o.parentEl), 
                s.$refs = {
                    container: e
                }, [ "bg", "inner", "infobar", "toolbar", "stage", "caption" ].forEach(function(t) {
                    s.$refs[t] = e.find(".fancybox-" + t);
                }), (!o.arrows || s.group.length < 2) && e.find(".fancybox-navigation").remove(), 
                o.infobar || s.$refs.infobar.remove(), o.toolbar || s.$refs.toolbar.remove(), s.trigger("onInit"), 
                s.activate(), s.jumpTo(s.currIndex);
            },
            translate: function(t, e) {
                var i = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var n = i[e];
                    return void 0 === n ? t : n;
                });
            },
            createGroup: function(t) {
                var e = this, n = i.makeArray(t);
                i.each(n, function(t, n) {
                    var s, o, r, a, l = {}, c = {}, d = [];
                    i.isPlainObject(n) ? (l = n, c = n.opts || n) : "object" === i.type(n) && i(n).length ? (s = i(n), 
                    d = s.data(), c = "options" in d ? d.options : {}, c = "object" === i.type(c) ? c : {}, 
                    l.src = "src" in d ? d.src : c.src || s.attr("href"), [ "width", "height", "thumb", "type", "filter" ].forEach(function(t) {
                        t in d && (c[t] = d[t]);
                    }), "srcset" in d && (c.image = {
                        srcset: d.srcset
                    }), c.$orig = s, l.type || l.src || (l.type = "inline", l.src = n)) : l = {
                        type: "html",
                        src: n + ""
                    }, l.opts = i.extend(!0, {}, e.opts, c), i.fancybox.isMobile && (l.opts = i.extend(!0, {}, l.opts, l.opts.mobile)), 
                    o = l.type || l.opts.type, r = l.src || "", !o && r && (r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? o = "pdf" : "#" === r.charAt(0) && (o = "inline")), 
                    l.type = o, l.index = e.group.length, l.opts.$orig && !l.opts.$orig.length && delete l.opts.$orig, 
                    !l.opts.$thumb && l.opts.$orig && (l.opts.$thumb = l.opts.$orig.find("img:first")), 
                    l.opts.$thumb && !l.opts.$thumb.length && delete l.opts.$thumb, "function" === i.type(l.opts.caption) ? l.opts.caption = l.opts.caption.apply(n, [ e, l ]) : "caption" in d && (l.opts.caption = d.caption), 
                    l.opts.caption = void 0 === l.opts.caption ? "" : l.opts.caption + "", "ajax" === o && (a = r.split(/\s+/, 2)).length > 1 && (l.src = a.shift(), 
                    l.opts.filter = a.shift()), "auto" == l.opts.smallBtn && (i.inArray(o, [ "html", "inline", "ajax" ]) > -1 ? (l.opts.toolbar = !1, 
                    l.opts.smallBtn = !0) : l.opts.smallBtn = !1), "pdf" === o && (l.type = "iframe", 
                    l.opts.iframe.preload = !1), l.opts.modal && (l.opts = i.extend(!0, l.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), e.group.push(l);
                });
            },
            addEvents: function() {
                var n = this;
                n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.close(t);
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.previous();
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.next();
                }), r.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? c(function() {
                        n.update();
                    }) : (n.$refs.stage.hide(), setTimeout(function() {
                        n.$refs.stage.show(), n.update();
                    }, 500));
                }), a.on("focusin.fb", function(t) {
                    var s = i.fancybox ? i.fancybox.getInstance() : null;
                    s.isClosing || !s.current || !s.current.opts.trapFocus || i(t.target).hasClass("fancybox-container") || i(t.target).is(e) || s && "fixed" !== i(t.target).css("position") && !s.$refs.container.has(t.target).length && (t.stopPropagation(), 
                    s.focus(), r.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft));
                }), a.on("keydown.fb", function(t) {
                    var e = n.current, s = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !i(t.target).is("input") && !i(t.target).is("textarea")) return 8 === s || 27 === s ? (t.preventDefault(), 
                    void n.close(t)) : 37 === s || 38 === s ? (t.preventDefault(), void n.previous()) : 39 === s || 40 === s ? (t.preventDefault(), 
                    void n.next()) : void n.trigger("afterKeydown", t, s);
                }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                    n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1;
                }), n.idleInterval = t.setInterval(function() {
                    n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && (n.isIdle = !0, 
                    n.idleSecondsCounter = 0, n.hideControls());
                }, 1e3));
            },
            removeEvents: function() {
                r.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), 
                this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), 
                this.idleInterval = null);
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t);
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t);
            },
            jumpTo: function(t, e, n) {
                var s, o, r, a, l, c, d, h = this, p = h.group.length;
                if (!(h.isSliding || h.isClosing || h.isAnimating && h.firstRun)) {
                    if (t = parseInt(t, 10), !(o = h.current ? h.current.opts.loop : h.opts.loop) && (t < 0 || t >= p)) return !1;
                    if (s = h.firstRun = null === h.firstRun, !(p < 2 && !s && h.isSliding)) {
                        if (a = h.current, h.prevIndex = h.currIndex, h.prevPos = h.currPos, r = h.createSlide(t), 
                        p > 1 && ((o || r.index > 0) && h.createSlide(t - 1), (o || r.index < p - 1) && h.createSlide(t + 1)), 
                        h.current = r, h.currIndex = r.index, h.currPos = r.pos, h.trigger("beforeShow", s), 
                        h.updateControls(), c = i.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== c.left || 0 !== c.top) && !r.$slide.hasClass("fancybox-animated"), 
                        r.forcedDuration = void 0, i.isNumeric(e) ? r.forcedDuration = e : e = r.opts[s ? "animationDuration" : "transitionDuration"], 
                        e = parseInt(e, 10), s) return r.opts.animationEffect && e && h.$refs.container.css("transition-duration", e + "ms"), 
                        h.$refs.container.removeClass("fancybox-is-hidden"), u(h.$refs.container), h.$refs.container.addClass("fancybox-is-open"), 
                        r.$slide.addClass("fancybox-slide--current"), h.loadSlide(r), void h.preload();
                        i.each(h.slides, function(t, e) {
                            i.fancybox.stop(e.$slide);
                        }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), 
                        r.isMoved ? (l = Math.round(r.$slide.width()), i.each(h.slides, function(t, n) {
                            var s = n.pos - r.pos;
                            i.fancybox.animate(n.$slide, {
                                top: 0,
                                left: s * l + s * n.opts.gutter
                            }, e, function() {
                                n.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), 
                                n.pos === h.currPos && (r.isMoved = !1, h.complete());
                            });
                        })) : h.$refs.stage.children().removeAttr("style"), r.isLoaded ? h.revealContent(r) : h.loadSlide(r), 
                        h.preload(), a.pos !== r.pos && (d = "fancybox-slide--" + (a.pos > r.pos ? "next" : "previous"), 
                        a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), 
                        a.isComplete = !1, e && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? a.$slide.addClass(d) : (d = "fancybox-animated " + d + " fancybox-fx-" + r.opts.transitionEffect, 
                        i.fancybox.animate(a.$slide, d, e, function() {
                            a.$slide.removeClass(d).removeAttr("style");
                        }))));
                    }
                }
            },
            createSlide: function(t) {
                var e, n;
                return n = t % this.group.length, n = n < 0 ? this.group.length + n : n, !this.slides[t] && this.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), 
                this.slides[t] = i.extend(!0, {}, this.group[n], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), this.updateSlide(this.slides[t])), this.slides[t];
            },
            scaleToActual: function(t, e, n) {
                var s, o, r, a, l, c = this, d = c.current, u = d.$content, h = parseInt(d.$slide.width(), 10), p = parseInt(d.$slide.height(), 10), f = d.width, g = d.height;
                "image" != d.type || d.hasError || !u || c.isAnimating || (i.fancybox.stop(u), c.isAnimating = !0, 
                t = void 0 === t ? .5 * h : t, e = void 0 === e ? .5 * p : e, s = i.fancybox.getTranslate(u), 
                a = f / s.width, l = g / s.height, o = .5 * h - .5 * f, r = .5 * p - .5 * g, f > h && ((o = s.left * a - (t * a - t)) > 0 && (o = 0), 
                o < h - f && (o = h - f)), g > p && ((r = s.top * l - (e * l - e)) > 0 && (r = 0), 
                r < p - g && (r = p - g)), c.updateCursor(f, g), i.fancybox.animate(u, {
                    top: r,
                    left: o,
                    scaleX: a,
                    scaleY: l
                }, n || 330, function() {
                    c.isAnimating = !1;
                }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
            },
            scaleToFit: function(t) {
                var e, n = this, s = n.current, o = s.$content;
                "image" != s.type || s.hasError || !o || n.isAnimating || (i.fancybox.stop(o), n.isAnimating = !0, 
                e = n.getFitPos(s), n.updateCursor(e.width, e.height), i.fancybox.animate(o, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / o.width(),
                    scaleY: e.height / o.height()
                }, t || 330, function() {
                    n.isAnimating = !1;
                }));
            },
            getFitPos: function(t) {
                var e, n, s, o, a, l = t.$content, c = t.width, d = t.height, u = t.opts.margin;
                return !(!l || !l.length || !c && !d) && ("number" === i.type(u) && (u = [ u, u ]), 
                2 == u.length && (u = [ u[0], u[1], u[0], u[1] ]), r.width() < 800 && (u = [ 0, 0, 0, 0 ]), 
                e = parseInt(this.$refs.stage.width(), 10) - (u[1] + u[3]), n = parseInt(this.$refs.stage.height(), 10) - (u[0] + u[2]), 
                s = Math.min(1, e / c, n / d), o = Math.floor(s * c), a = Math.floor(s * d), {
                    top: Math.floor(.5 * (n - a)) + u[0],
                    left: Math.floor(.5 * (e - o)) + u[3],
                    width: o,
                    height: a
                });
            },
            update: function() {
                var t = this;
                i.each(t.slides, function(e, i) {
                    t.updateSlide(i);
                });
            },
            updateSlide: function(t) {
                var e = t.$content;
                e && (t.width || t.height) && (i.fancybox.stop(e), i.fancybox.setTranslate(e, this.getFitPos(t)), 
                t.pos === this.currPos && this.updateCursor()), t.$slide.trigger("refresh"), this.trigger("onUpdate", t);
            },
            updateCursor: function(t, e) {
                var i = this.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                this.current && !this.isClosing && (this.isZoomable() ? (i.addClass("fancybox-is-zoomable"), 
                (void 0 !== t && void 0 !== e ? t < this.current.width && e < this.current.height : this.isScaledDown()) ? i.addClass("fancybox-can-zoomIn") : this.current.opts.touch ? i.addClass("fancybox-can-drag") : i.addClass("fancybox-can-zoomOut")) : this.current.opts.touch && i.addClass("fancybox-can-drag"));
            },
            isZoomable: function() {
                var t, e = this.current;
                if (e && !this.isClosing) return !!("image" === e.type && e.isLoaded && !e.hasError && ("zoom" === e.opts.clickContent || i.isFunction(e.opts.clickContent) && "zoom" === e.opts.clickContent(e)) && (t = this.getFitPos(e), 
                e.width > t.width || e.height > t.height));
            },
            isScaledDown: function() {
                var t = this.current, e = t.$content, n = !1;
                return e && (n = i.fancybox.getTranslate(e), n = n.width < t.width || n.height < t.height), 
                n;
            },
            canPan: function() {
                var t = this.current, e = t.$content, i = !1;
                return e && (i = this.getFitPos(t), i = Math.abs(e.width() - i.width) > 1 || Math.abs(e.height() - i.height) > 1), 
                i;
            },
            loadSlide: function(t) {
                var e, n, s, o = this;
                if (!t.isLoading && !t.isLoaded) {
                    switch (t.isLoading = !0, o.trigger("beforeLoad", t), e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (e || "unknown")).addClass(t.opts.slideClass), 
                    e) {
                      case "image":
                        o.setImage(t);
                        break;

                      case "iframe":
                        o.setIframe(t);
                        break;

                      case "html":
                        o.setContent(t, t.src || t.content);
                        break;

                      case "inline":
                        i(t.src).length ? o.setContent(t, i(t.src)) : o.setError(t);
                        break;

                      case "ajax":
                        o.showLoading(t), s = i.ajax(i.extend({}, t.opts.ajax.settings, {
                            url: t.src,
                            success: function(e, i) {
                                "success" === i && o.setContent(t, e);
                            },
                            error: function(e, i) {
                                e && "abort" !== i && o.setError(t);
                            }
                        })), n.one("onReset", function() {
                            s.abort();
                        });
                        break;

                      default:
                        o.setError(t);
                    }
                    return !0;
                }
            },
            setImage: function(e) {
                var n, s, o, r, a = this, l = e.opts.image.srcset;
                if (l) {
                    o = t.devicePixelRatio || 1, r = t.innerWidth * o, (s = l.split(",").map(function(t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function(t, i) {
                            var n = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === i ? e.url = t : void (n && (e.value = n, e.postfix = t[t.length - 1]));
                        }), e;
                    })).sort(function(t, e) {
                        return t.value - e.value;
                    });
                    for (var c = 0; c < s.length; c++) {
                        var d = s[c];
                        if ("w" === d.postfix && d.value >= r || "x" === d.postfix && d.value >= o) {
                            n = d;
                            break;
                        }
                    }
                    !n && s.length && (n = s[s.length - 1]), n && (e.src = n.url, e.width && e.height && "w" == n.postfix && (e.height = e.width / e.height * n.value, 
                    e.width = n.value));
                }
                e.$content = i('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide), 
                !1 !== e.opts.preload && e.opts.width && e.opts.height && (e.opts.thumb || e.opts.$thumb) ? (e.width = e.opts.width, 
                e.height = e.opts.height, e.$ghost = i("<img />").one("error", function() {
                    i(this).remove(), e.$ghost = null, a.setBigImage(e);
                }).one("load", function() {
                    a.afterLoad(e), a.setBigImage(e);
                }).addClass("fancybox-image").appendTo(e.$content).attr("src", e.opts.thumb || e.opts.$thumb.attr("src"))) : a.setBigImage(e);
            },
            setBigImage: function(t) {
                var e = this, n = i("<img />");
                t.$image = n.one("error", function() {
                    e.setError(t);
                }).one("load", function() {
                    clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, 
                    t.height = this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), 
                    e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                        t.timouts = null, t.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t));
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (n[0].complete || "complete" == n[0].readyState) && n[0].naturalWidth && n[0].naturalHeight ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function() {
                    n[0].complete || t.hasError || e.showLoading(t);
                }, 100);
            },
            setIframe: function(t) {
                var e, n = this, s = t.opts.iframe, o = t.$slide;
                t.$content = i('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(o), 
                e = i(s.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(s.attr).appendTo(t.$content), 
                s.preload ? (n.showLoading(t), e.on("load.fb error.fb", function(e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), n.afterLoad(t);
                }), o.on("refresh.fb", function() {
                    var i, n, o = t.$content, r = s.css.width, a = s.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            n = e.contents().find("body");
                        } catch (t) {}
                        n && n.length && (void 0 === r && (i = e[0].contentWindow.document.documentElement.scrollWidth, 
                        r = Math.ceil(n.outerWidth(!0) + (o.width() - i)), r += o.outerWidth() - o.innerWidth()), 
                        void 0 === a && (a = Math.ceil(n.outerHeight(!0)), a += o.outerHeight() - o.innerHeight()), 
                        r && o.width(r), a && o.height(a)), o.removeClass("fancybox-is-hidden");
                    }
                })) : this.afterLoad(t), e.attr("src", t.src), !0 === t.opts.smallBtn && t.$content.prepend(n.translate(t, t.opts.btnTpl.smallBtn)), 
                o.one("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank");
                    } catch (t) {}
                    i(this).empty(), t.isLoaded = !1;
                });
            },
            setContent: function(t, e) {
                this.isClosing || (this.hideLoading(t), t.$slide.empty(), function(t) {
                    return t && t.hasOwnProperty && t instanceof i;
                }(e) && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), 
                t.$placeholder = i("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && 3 === (e = i("<div>").append(i.trim(e)).contents())[0].nodeType && (e = i("<div>").html(e)), 
                t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                    t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), 
                    t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), 
                    t.isLoaded = !1);
                }), t.$content = i(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = i(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div").first())), 
                this.afterLoad(t));
            },
            setError: function(t) {
                t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl));
            },
            showLoading: function(t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = i(this.opts.spinnerTpl).appendTo(t.$slide));
            },
            hideLoading: function(t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner);
            },
            afterLoad: function(t) {
                this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), 
                this.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(), !0;
                }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), 
                this.revealContent(t));
            },
            revealContent: function(t) {
                var e, n, s, o, r, a = this, l = t.$slide, c = !1;
                return e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], s = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], 
                s = parseInt(void 0 === t.forcedDuration ? s : t.forcedDuration, 10), !t.isMoved && t.pos === a.currPos && s || (e = !1), 
                "zoom" !== e || t.pos === a.currPos && s && "image" === t.type && !t.hasError && (c = a.getThumbPos(t)) || (e = "fade"), 
                "zoom" === e ? (r = a.getFitPos(t), r.scaleX = r.width / c.width, r.scaleY = r.height / c.height, 
                delete r.width, delete r.height, "auto" == (o = t.opts.zoomOpacity) && (o = Math.abs(t.width / t.height - c.width / c.height) > .1), 
                o && (c.opacity = .1, r.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), 
                u(t.$content), void i.fancybox.animate(t.$content, r, s, function() {
                    a.complete();
                })) : (a.updateSlide(t), e ? (i.fancybox.stop(l), n = "fancybox-animated fancybox-slide--" + (t.pos > a.prevPos ? "next" : "previous") + " fancybox-fx-" + e, 
                l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), 
                t.$content.removeClass("fancybox-is-hidden"), u(l), void i.fancybox.animate(l, "fancybox-slide--current", s, function(e) {
                    l.removeClass(n).removeAttr("style"), t.pos === a.currPos && a.complete();
                }, !0)) : (u(l), t.$content.removeClass("fancybox-is-hidden"), void (t.pos === a.currPos && a.complete())));
            },
            getThumbPos: function(n) {
                var s, o = !1, r = n.opts.$thumb, a = r ? r.offset() : 0;
                return a && r[0].ownerDocument === e && function(e) {
                    for (var n = e[0], s = n.getBoundingClientRect(), o = []; null !== n.parentElement; ) "hidden" !== i(n.parentElement).css("overflow") && "auto" !== i(n.parentElement).css("overflow") || o.push(n.parentElement.getBoundingClientRect()), 
                    n = n.parentElement;
                    return o.every(function(t) {
                        var e = Math.min(s.right, t.right) - Math.max(s.left, t.left), i = Math.min(s.bottom, t.bottom) - Math.max(s.top, t.top);
                        return e > 0 && i > 0;
                    }) && s.bottom > 0 && s.right > 0 && s.left < i(t).width() && s.top < i(t).height();
                }(r) && (s = this.$refs.stage.offset(), o = {
                    top: a.top - s.top + parseFloat(r.css("border-top-width") || 0),
                    left: a.left - s.left + parseFloat(r.css("border-left-width") || 0),
                    width: r.width(),
                    height: r.height(),
                    scaleX: 1,
                    scaleY: 1
                }), o;
            },
            complete: function() {
                var t = this, n = t.current, s = {};
                n.isMoved || !n.isLoaded || n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), 
                u(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(t.slides, function(e, n) {
                    n.pos >= t.currPos - 1 && n.pos <= t.currPos + 1 ? s[n.pos] = n : n && (i.fancybox.stop(n.$slide), 
                    n.$slide.off().remove());
                }), t.slides = s, t.updateCursor(), t.trigger("afterShow"), (i(e.activeElement).is("[disabled]") || n.opts.autoFocus && "image" != n.type && "iframe" !== n.type) && t.focus());
            },
            preload: function() {
                var t, e;
                this.group.length < 2 || (t = this.slides[this.currPos + 1], e = this.slides[this.currPos - 1], 
                t && "image" === t.type && this.loadSlide(t), e && "image" === e.type && this.loadSlide(e));
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || (e && e.isComplete && ((t = e.$slide.find("input[autofocus]:enabled:visible:first")).length || (t = e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), 
                (t = t && t.length ? t : this.$refs.container).focus());
            },
            activate: function() {
                var t = this;
                i(".fancybox-container").each(function() {
                    var e = i(this).data("FancyBox");
                    e && e.uid !== t.uid && !e.isClosing && e.trigger("onDeactivate");
                }), t.current && (t.$refs.container.index() > 0 && t.$refs.container.prependTo(e.body), 
                t.updateControls()), t.trigger("onActivate"), t.addEvents();
            },
            close: function(t, e) {
                var n, s, o, r, a, l, u = this, h = u.current, p = function() {
                    u.cleanUp(t);
                };
                return !(u.isClosing || (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, 
                c(function() {
                    u.update();
                }), 1) : (u.removeEvents(), h.timouts && clearTimeout(h.timouts), o = h.$content, 
                n = h.opts.animationEffect, s = i.isNumeric(e) ? e : n ? h.opts.animationDuration : 0, 
                h.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), 
                h.$slide.siblings().trigger("onReset").remove(), s && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), 
                u.hideLoading(h), u.hideControls(), u.updateCursor(), "zoom" !== n || !0 !== t && o && s && "image" === h.type && !h.hasError && (l = u.getThumbPos(h)) || (n = "fade"), 
                "zoom" === n ? (i.fancybox.stop(o), a = i.fancybox.getTranslate(o), a.width = a.width * a.scaleX, 
                a.height = a.height * a.scaleY, "auto" == (r = h.opts.zoomOpacity) && (r = Math.abs(h.width / h.height - l.width / l.height) > .1), 
                r && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, 
                a.width = l.width, a.height = l.height, i.fancybox.setTranslate(h.$content, a), 
                i.fancybox.animate(h.$content, l, s, p), 0) : (n && s ? !0 === t ? setTimeout(p, s) : i.fancybox.animate(h.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, s, p) : p(), 
                0))));
            },
            cleanUp: function(t) {
                var e;
                this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", t), 
                this.$lastFocus && this.current.opts.backFocus && this.$lastFocus.focus(), this.current = null, 
                (e = i.fancybox.getInstance()) ? e.activate() : (r.scrollTop(this.scrollTop).scrollLeft(this.scrollLeft), 
                i("html").removeClass("fancybox-enabled"), i("#fancybox-style-noscroll").remove());
            },
            trigger: function(t, e) {
                var n, s = Array.prototype.slice.call(arguments, 1), o = e && e.opts ? e : this.current;
                return o ? s.unshift(o) : o = this, s.unshift(this), i.isFunction(o.opts[t]) && (n = o.opts[t].apply(o, s)), 
                !1 === n ? n : void ("afterClose" === t ? a.trigger(t + ".fb", s) : this.$refs.container.trigger(t + ".fb", s));
            },
            updateControls: function(t) {
                var e = this.current, n = e.index, s = e.opts, o = s.caption, r = this.$refs.caption;
                e.$slide.trigger("refresh"), this.$caption = o && o.length ? r.html(o) : null, this.isHiddenControls || this.showControls(), 
                i("[data-fancybox-count]").html(this.group.length), i("[data-fancybox-index]").html(n + 1), 
                i("[data-fancybox-prev]").prop("disabled", !s.loop && n <= 0), i("[data-fancybox-next]").prop("disabled", !s.loop && n >= this.group.length - 1);
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
            },
            showControls: function() {
                var t = this.current ? this.current.opts : this.opts, e = this.$refs.container;
                this.isHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && this.group.length > 1)).toggleClass("fancybox-show-nav", !!(t.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal), 
                this.$caption ? e.addClass("fancybox-show-caption ") : e.removeClass("fancybox-show-caption");
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls();
            }
        }), i.fancybox = {
            version: "3.1.28",
            defaults: o,
            getInstance: function(t) {
                var e = i('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"), n = Array.prototype.slice.call(arguments, 1);
                return e instanceof h && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), 
                e);
            },
            open: function(t, e, i) {
                return new h(t, e, i);
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close());
            },
            destroy: function() {
                this.close(!0), a.off("click.fb-start");
            },
            isMobile: void 0 !== e.createTouch && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
            use3d: function() {
                var i = e.createElement("div");
                return t.getComputedStyle && t.getComputedStyle(i).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11);
            }(),
            getTranslate: function(t) {
                var e;
                if (!t || !t.length) return !1;
                if ((e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? (e = e.split("(")[1], 
                e = e.split(")")[0], e = e.split(",")) : e = [], e.length) e = e.length > 10 ? [ e[13], e[12], e[0], e[5] ] : [ e[5], e[4], e[0], e[3] ], 
                e = e.map(parseFloat); else {
                    e = [ 0, 0, 1, 1 ];
                    var i = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                    i && (e[0] = parseFloat(i[2]), e[1] = parseFloat(i[1]));
                }
                return {
                    top: e[0],
                    left: e[1],
                    scaleX: e[2],
                    scaleY: e[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: t.width(),
                    height: t.height()
                };
            },
            setTranslate: function(t, e) {
                var i = "", n = {};
                if (t && e) return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", 
                i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY && (i = (i.length ? i + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), 
                i.length && (n.transform = i), void 0 !== e.opacity && (n.opacity = e.opacity), 
                void 0 !== e.width && (n.width = e.width), void 0 !== e.height && (n.height = e.height), 
                t.css(n);
            },
            animate: function(t, e, n, s, o) {
                var r = d || "transitionend";
                i.isFunction(n) && (s = n, n = null), i.isPlainObject(e) || t.removeAttr("style"), 
                t.on(r, function(n) {
                    (!n || !n.originalEvent || t.is(n.originalEvent.target) && "z-index" != n.originalEvent.propertyName) && (t.off(r), 
                    i.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && (t.css("transition-duration", "0ms"), 
                    e.width = Math.round(t.width() * e.scaleX), e.height = Math.round(t.height() * e.scaleY), 
                    e.scaleX = 1, e.scaleY = 1, i.fancybox.setTranslate(t, e)) : !0 !== o && t.removeClass(e), 
                    i.isFunction(s) && s(n));
                }), i.isNumeric(n) && t.css("transition-duration", n + "ms"), i.isPlainObject(e) ? i.fancybox.setTranslate(t, e) : t.addClass(e), 
                t.data("timer", setTimeout(function() {
                    t.trigger("transitionend");
                }, n + 16));
            },
            stop: function(t) {
                clearTimeout(t.data("timer")), t.off(d);
            }
        }, i.fn.fancybox = function(t) {
            var e;
            return t = t || {}, (e = t.selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                options: t
            }, s) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, s), this;
        }, a.on("click.fb-start", "[data-fancybox]", s);
    }
}(window, document, window.jQuery || jQuery), function(t) {
    "use strict";
    var e = function(e, i, n) {
        if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) {
            e = e.replace("$" + t, i || "");
        }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e;
    }, i = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1,
                api: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        metacafe: {
            matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
            type: "iframe",
            url: "//www.metacafe.com/embed/$1/?ap=1"
        },
        dailymotion: {
            matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
            params: {
                additionalInfos: 0,
                autoStart: 1
            },
            type: "iframe",
            url: "//www.dailymotion.com/embed/video/$1"
        },
        vine: {
            matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
            type: "iframe",
            url: "//vine.co/v/$1/embed/simple"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
            }
        }
    };
    t(document).on("onInit.fb", function(n, s) {
        t.each(s.group, function(n, s) {
            var o, r, a, l, c, d, u, h = s.src || "", p = !1;
            s.type || (o = t.extend(!0, {}, i, s.opts.media), t.each(o, function(i, n) {
                if (a = h.match(n.matcher), d = {}, u = i, a) {
                    if (p = n.type, n.paramPlace && a[n.paramPlace]) {
                        "?" == (c = a[n.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                        for (var o = 0; o < c.length; ++o) {
                            var f = c[o].split("=", 2);
                            2 == f.length && (d[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " ")));
                        }
                    }
                    return l = t.extend(!0, {}, n.params, s.opts[i], d), h = "function" === t.type(n.url) ? n.url.call(this, a, l, s) : e(n.url, a, l), 
                    r = "function" === t.type(n.thumb) ? n.thumb.call(this, a, l, s) : e(n.thumb, a), 
                    "vimeo" === u && (h = h.replace("&%23", "#")), !1;
                }
            }), p ? (s.src = h, s.type = p, s.opts.thumb || s.opts.$thumb && s.opts.$thumb.length || (s.opts.thumb = r), 
            "iframe" === p && (t.extend(!0, s.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            }), s.contentProvider = u, s.opts.slideClass += " fancybox-slide--" + ("gmap_place" == u || "gmap_search" == u ? "map" : "video"))) : s.type = "image");
        });
    });
}(window.jQuery), function(t, e, i) {
    "use strict";
    var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
        return t.setTimeout(e, 1e3 / 60);
    }, s = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
        t.clearTimeout(e);
    }, o = function(e) {
        var i = [];
        e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [ e ];
        for (var n in e) e[n].pageX ? i.push({
            x: e[n].pageX,
            y: e[n].pageY
        }) : e[n].clientX && i.push({
            x: e[n].clientX,
            y: e[n].clientY
        });
        return i;
    }, r = function(t, e, i) {
        return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0;
    }, a = function(t) {
        if (t.is("a,button,input,select,textarea,label") || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
        for (var e = 0, n = t[0].attributes, s = n.length; e < s; e++) if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
        return !1;
    }, l = function(e) {
        var i = t.getComputedStyle(e)["overflow-y"], n = t.getComputedStyle(e)["overflow-x"], s = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight, o = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth;
        return s || o;
    }, c = function(t) {
        for (var e = !1; !(e = l(t.get(0))) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")); ) ;
        return e;
    }, d = function(t) {
        this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, 
        this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(this, "ontouchstart"));
    };
    d.prototype.destroy = function() {
        this.$container.off(".fb.touch");
    }, d.prototype.ontouchstart = function(n) {
        var s = i(n.target), l = this.instance, d = l.current, u = d.$content, h = "touchstart" == n.type;
        if (h && this.$container.off("mousedown.fb.touch"), !d || this.instance.isAnimating || this.instance.isClosing) return n.stopPropagation(), 
        void n.preventDefault();
        if ((!n.originalEvent || 2 != n.originalEvent.button) && s.length && !a(s) && !a(s.parent()) && !(n.originalEvent.clientX > s[0].clientWidth + s.offset().left) && (this.startPoints = o(n), 
        this.startPoints && !(this.startPoints.length > 1 && l.isSliding))) {
            if (this.$target = s, this.$content = u, this.canTap = !0, i(e).off(".fb.touch"), 
            i(e).on(h ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(this, "ontouchend")), 
            i(e).on(h ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(this, "ontouchmove")), 
            !l.current.opts.touch && !l.canPan() || !s.is(this.$stage) && !this.$stage.find(s).length) return void (s.is("img") && n.preventDefault());
            n.stopPropagation(), i.fancybox.isMobile && (c(this.$target) || c(this.$target.parent())) || n.preventDefault(), 
            this.canvasWidth = Math.round(d.$slide[0].clientWidth), this.canvasHeight = Math.round(d.$slide[0].clientHeight), 
            this.startTime = new Date().getTime(), this.distanceX = this.distanceY = this.distance = 0, 
            this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.sliderStartPos = this.sliderLastPos || {
                top: 0,
                left: 0
            }, this.contentStartPos = i.fancybox.getTranslate(this.$content), this.contentLastPos = null, 
            1 !== this.startPoints.length || this.isZooming || (this.canTap = !l.isSliding, 
            "image" === d.type && (this.contentStartPos.width > this.canvasWidth + 1 || this.contentStartPos.height > this.canvasHeight + 1) ? (i.fancybox.stop(this.$content), 
            this.$content.css("transition-duration", "0ms"), this.isPanning = !0) : this.isSwiping = !0, 
            this.$container.addClass("fancybox-controls--isGrabbing")), 2 !== this.startPoints.length || l.isAnimating || d.hasError || "image" !== d.type || !d.isLoaded && !d.$ghost || (this.isZooming = !0, 
            this.isSwiping = !1, this.isPanning = !1, i.fancybox.stop(this.$content), this.$content.css("transition-duration", "0ms"), 
            this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - i(t).scrollLeft(), 
            this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - i(t).scrollTop(), 
            this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, 
            this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, 
            this.startDistanceBetweenFingers = r(this.startPoints[0], this.startPoints[1]));
        }
    }, d.prototype.ontouchmove = function(t) {
        if (this.newPoints = o(t), i.fancybox.isMobile && (c(this.$target) || c(this.$target.parent()))) return t.stopPropagation(), 
        void (this.canTap = !1);
        if ((this.instance.current.opts.touch || this.instance.canPan()) && this.newPoints && this.newPoints.length && (this.distanceX = r(this.newPoints[0], this.startPoints[0], "x"), 
        this.distanceY = r(this.newPoints[0], this.startPoints[0], "y"), this.distance = r(this.newPoints[0], this.startPoints[0]), 
        this.distance > 0)) {
            if (!this.$target.is(this.$stage) && !this.$stage.find(this.$target).length) return;
            t.stopPropagation(), t.preventDefault(), this.isSwiping ? this.onSwipe() : this.isPanning ? this.onPan() : this.isZooming && this.onZoom();
        }
    }, d.prototype.onSwipe = function() {
        var e, o = this, r = o.isSwiping, a = o.sliderStartPos.left || 0;
        !0 === r ? Math.abs(o.distance) > 10 && (o.canTap = !1, o.instance.group.length < 2 && o.instance.opts.touch.vertical ? o.isSwiping = "y" : o.instance.isSliding || !1 === o.instance.opts.touch.vertical || "auto" === o.instance.opts.touch.vertical && i(t).width() > 800 ? o.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), 
        o.isSwiping = e > 45 && e < 135 ? "y" : "x"), o.instance.isSliding = o.isSwiping, 
        o.startPoints = o.newPoints, i.each(o.instance.slides, function(t, e) {
            i.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, 
            e.pos === o.instance.current.pos && (o.sliderStartPos.left = i.fancybox.getTranslate(e.$slide).left);
        }), o.instance.SlideShow && o.instance.SlideShow.isActive && o.instance.SlideShow.stop()) : ("x" == r && (o.distanceX > 0 && (o.instance.group.length < 2 || 0 === o.instance.current.index && !o.instance.current.opts.loop) ? a += Math.pow(o.distanceX, .8) : o.distanceX < 0 && (o.instance.group.length < 2 || o.instance.current.index === o.instance.group.length - 1 && !o.instance.current.opts.loop) ? a -= Math.pow(-o.distanceX, .8) : a += o.distanceX), 
        o.sliderLastPos = {
            top: "x" == r ? 0 : o.sliderStartPos.top + o.distanceY,
            left: a
        }, o.requestId && (s(o.requestId), o.requestId = null), o.requestId = n(function() {
            o.sliderLastPos && (i.each(o.instance.slides, function(t, e) {
                var n = e.pos - o.instance.currPos;
                i.fancybox.setTranslate(e.$slide, {
                    top: o.sliderLastPos.top,
                    left: o.sliderLastPos.left + n * o.canvasWidth + n * e.opts.gutter
                });
            }), o.$container.addClass("fancybox-is-sliding"));
        }));
    }, d.prototype.onPan = function() {
        var t, e, o, r = this;
        r.canTap = !1, t = r.contentStartPos.width > r.canvasWidth ? r.contentStartPos.left + r.distanceX : r.contentStartPos.left, 
        e = r.contentStartPos.top + r.distanceY, (o = r.limitMovement(t, e, r.contentStartPos.width, r.contentStartPos.height)).scaleX = r.contentStartPos.scaleX, 
        o.scaleY = r.contentStartPos.scaleY, r.contentLastPos = o, r.requestId && (s(r.requestId), 
        r.requestId = null), r.requestId = n(function() {
            i.fancybox.setTranslate(r.$content, r.contentLastPos);
        });
    }, d.prototype.limitMovement = function(t, e, i, n) {
        var s, o, r, a, l = this.canvasWidth, c = this.canvasHeight, d = this.contentStartPos.left, u = this.contentStartPos.top, h = this.distanceX, p = this.distanceY;
        return s = Math.max(0, .5 * l - .5 * i), o = Math.max(0, .5 * c - .5 * n), r = Math.min(l - i, .5 * l - .5 * i), 
        a = Math.min(c - n, .5 * c - .5 * n), i > l && (h > 0 && t > s && (t = s - 1 + Math.pow(-s + d + h, .8) || 0), 
        h < 0 && t < r && (t = r + 1 - Math.pow(r - d - h, .8) || 0)), n > c && (p > 0 && e > o && (e = o - 1 + Math.pow(-o + u + p, .8) || 0), 
        p < 0 && e < a && (e = a + 1 - Math.pow(a - u - p, .8) || 0)), {
            top: e,
            left: t
        };
    }, d.prototype.limitPosition = function(t, e, i, n) {
        var s = this.canvasWidth, o = this.canvasHeight;
        return i > s ? (t = t > 0 ? 0 : t, t = t < s - i ? s - i : t) : t = Math.max(0, s / 2 - i / 2), 
        n > o ? (e = e > 0 ? 0 : e, e = e < o - n ? o - n : e) : e = Math.max(0, o / 2 - n / 2), 
        {
            top: e,
            left: t
        };
    }, d.prototype.onZoom = function() {
        var e = this, o = e.contentStartPos.width, a = e.contentStartPos.height, l = e.contentStartPos.left, c = e.contentStartPos.top, d = r(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers, u = Math.floor(o * d), h = Math.floor(a * d), p = (o - u) * e.percentageOfImageAtPinchPointX, f = (a - h) * e.percentageOfImageAtPinchPointY, g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(), m = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(), v = g - e.centerPointStartX, y = {
            top: c + (f + (m - e.centerPointStartY)),
            left: l + (p + v),
            scaleX: e.contentStartPos.scaleX * d,
            scaleY: e.contentStartPos.scaleY * d
        };
        e.canTap = !1, e.newWidth = u, e.newHeight = h, e.contentLastPos = y, e.requestId && (s(e.requestId), 
        e.requestId = null), e.requestId = n(function() {
            i.fancybox.setTranslate(e.$content, e.contentLastPos);
        });
    }, d.prototype.ontouchend = function(t) {
        var n = Math.max(new Date().getTime() - this.startTime, 1), r = this.isSwiping, a = this.isPanning, l = this.isZooming;
        return this.endPoints = o(t), this.$container.removeClass("fancybox-controls--isGrabbing"), 
        i(e).off(".fb.touch"), this.requestId && (s(this.requestId), this.requestId = null), 
        this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.canTap ? this.onTap(t) : (this.speed = 366, 
        this.velocityX = this.distanceX / n * .5, this.velocityY = this.distanceY / n * .5, 
        this.speedX = Math.max(.5 * this.speed, Math.min(1.5 * this.speed, 1 / Math.abs(this.velocityX) * this.speed)), 
        void (a ? this.endPanning() : l ? this.endZooming() : this.endSwiping(r)));
    }, d.prototype.endSwiping = function(t) {
        var e = !1;
        this.instance.isSliding = !1, this.sliderLastPos = null, "y" == t && Math.abs(this.distanceY) > 50 ? (i.fancybox.animate(this.instance.current.$slide, {
            top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
            opacity: 0
        }, 150), e = this.instance.close(!0, 300)) : "x" == t && this.distanceX > 50 && this.instance.group.length > 1 ? e = this.instance.previous(this.speedX) : "x" == t && this.distanceX < -50 && this.instance.group.length > 1 && (e = this.instance.next(this.speedX)), 
        !1 !== e || "x" != t && "y" != t || this.instance.jumpTo(this.instance.current.index, 150), 
        this.$container.removeClass("fancybox-is-sliding");
    }, d.prototype.endPanning = function() {
        var t, e, n;
        this.contentLastPos && (!1 === this.instance.current.opts.touch.momentum ? (t = this.contentLastPos.left, 
        e = this.contentLastPos.top) : (t = this.contentLastPos.left + this.velocityX * this.speed, 
        e = this.contentLastPos.top + this.velocityY * this.speed), n = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height), 
        n.width = this.contentStartPos.width, n.height = this.contentStartPos.height, i.fancybox.animate(this.$content, n, 330));
    }, d.prototype.endZooming = function() {
        var t, e, n, s, o = this.instance.current, r = this.newWidth, a = this.newHeight;
        this.contentLastPos && (t = this.contentLastPos.left, e = this.contentLastPos.top, 
        s = {
            top: e,
            left: t,
            width: r,
            height: a,
            scaleX: 1,
            scaleY: 1
        }, i.fancybox.setTranslate(this.$content, s), r < this.canvasWidth && a < this.canvasHeight ? this.instance.scaleToFit(150) : r > o.width || a > o.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (n = this.limitPosition(t, e, r, a), 
        i.fancybox.setTranslate(this.content, i.fancybox.getTranslate(this.$content)), i.fancybox.animate(this.$content, n, 150)));
    }, d.prototype.onTap = function(t) {
        var e, n = this, s = i(t.target), r = n.instance, a = r.current, l = t && o(t) || n.startPoints, c = l[0] ? l[0].x - n.$stage.offset().left : 0, d = l[0] ? l[0].y - n.$stage.offset().top : 0, u = function(e) {
            var s = a.opts[e];
            if (i.isFunction(s) && (s = s.apply(r, [ a, t ])), s) switch (s) {
              case "close":
                r.close(n.startEvent);
                break;

              case "toggleControls":
                r.toggleControls(!0);
                break;

              case "next":
                r.next();
                break;

              case "nextOrClose":
                r.group.length > 1 ? r.next() : r.close(n.startEvent);
                break;

              case "zoom":
                "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, d) : r.group.length < 2 && r.close(n.startEvent));
            }
        };
        if (!(t.originalEvent && 2 == t.originalEvent.button || r.isSliding || c > s[0].clientWidth + s.offset().left)) {
            if (s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside"; else if (s.is(".fancybox-slide")) e = "Slide"; else {
                if (!r.current.$content || !r.current.$content.has(t.target).length) return;
                e = "Content";
            }
            if (n.tapped) {
                if (clearTimeout(n.tapped), n.tapped = null, Math.abs(c - n.tapX) > 50 || Math.abs(d - n.tapY) > 50 || r.isSliding) return this;
                u("dblclick" + e);
            } else n.tapX = c, n.tapY = d, a.opts["dblclick" + e] && a.opts["dblclick" + e] !== a.opts["click" + e] ? n.tapped = setTimeout(function() {
                n.tapped = null, u("click" + e);
            }, 300) : u("click" + e);
            return this;
        }
    }, i(e).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new d(e));
    }), i(e).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy();
    });
}(window, document, window.jQuery), function(t, e) {
    "use strict";
    var i = function(t) {
        this.instance = t, this.init();
    };
    e.extend(i.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        speed: 3e3,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle();
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide();
        },
        set: function() {
            var t = this;
            t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                t.instance.next();
            }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, 
            t.instance.showControls());
        },
        clear: function() {
            clearTimeout(this.timer), this.timer = null;
        },
        start: function() {
            var t = this.instance.current;
            this.instance && t && (t.opts.loop || t.index < this.instance.group.length - 1) && (this.isActive = !0, 
            this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), 
            t.isComplete && this.set());
        },
        stop: function() {
            var t = this.instance.current;
            this.clear(), this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), 
            this.isActive = !1;
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start();
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new i(e));
        },
        "beforeShow.fb": function(t, e, i, n) {
            var s = e && e.SlideShow;
            n ? s && i.opts.slideShow.autoStart && s.start() : s && s.isActive && s.clear();
        },
        "afterShow.fb": function(t, e, i) {
            var n = e && e.SlideShow;
            n && n.isActive && n.set();
        },
        "afterKeydown.fb": function(i, n, s, o, r) {
            var a = n && n.SlideShow;
            !a || !s.opts.slideShow || 80 !== r && 32 !== r || e(t.activeElement).is("button,a,input") || (o.preventDefault(), 
            a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var i = e && e.SlideShow;
            i && i.stop();
        }
    }), e(t).on("visibilitychange", function() {
        var i = e.fancybox.getInstance(), n = i && i.SlideShow;
        n && n.isActive && (t.hidden ? n.clear() : n.set());
    });
}(document, window.jQuery), function(t, e) {
    "use strict";
    var i = function() {
        var e, i, n, s = [ [ "requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror" ], [ "webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror" ], [ "msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError" ] ], o = {};
        for (i = 0; i < s.length; i++) if ((e = s[i]) && e[1] in t) {
            for (n = 0; n < e.length; n++) o[s[0][n]] = e[n];
            return o;
        }
        return !1;
    }();
    if (i) {
        var n = {
            request: function(e) {
                (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
            },
            exit: function() {
                t[i.exitFullscreen]();
            },
            toggle: function(e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e);
            },
            isFullscreen: function() {
                return Boolean(t[i.fullscreenElement]);
            },
            enabled: function() {
                return Boolean(t[i.fullscreenEnabled]);
            }
        };
        e(t).on({
            "onInit.fb": function(t, e) {
                var i, s = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
                e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? ((i = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                    t.stopPropagation(), t.preventDefault(), n.toggle(i[0]);
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(i[0]), 
                e.FullScreen = n) : s.hide();
            },
            "afterKeydown.fb": function(t, e, i, n, s) {
                e && e.FullScreen && 70 === s && (n.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]));
            },
            "beforeClose.fb": function(t) {
                t && t.FullScreen && n.exit();
            }
        }), e(t).on(i.fullscreenchange, function() {
            var t = e.fancybox.getInstance();
            t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), 
            t.isAnimating = !1, t.update(!0, !0, 0)), t.trigger("onFullscreenChange", n.isFullscreen());
        });
    } else e && e.fancybox && (e.fancybox.defaults.btnTpl.fullScreen = !1);
}(document, window.jQuery), function(t, e) {
    "use strict";
    var i = function(t) {
        this.instance = t, this.init();
    };
    e.extend(i.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        init: function() {
            var t = this, e = t.instance.group[0], i = t.instance.group[1];
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), t.instance.group.length > 1 && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == i.type || i.opts.thumb || i.opts.$thumb) ? (t.$button.on("click", function() {
                t.toggle();
            }), t.isActive = !0) : (t.$button.hide(), t.isActive = !1);
        },
        create: function() {
            var t, i, n = this.instance;
            this.$grid = e('<div class="fancybox-thumbs"></div>').appendTo(n.$refs.container), 
            t = "<ul>", e.each(n.group, function(e, n) {
                (i = n.opts.thumb || (n.opts.$thumb ? n.opts.$thumb.attr("src") : null)) || "image" !== n.type || (i = n.src), 
                i && i.length && (t += '<li data-index="' + e + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>');
            }), t += "</ul>", this.$list = e(t).appendTo(this.$grid).on("click", "li", function() {
                n.jumpTo(e(this).data("index"));
            }), this.$list.find("img").hide().one("load", function() {
                var t, i, n, s, o = e(this).parent().removeClass("fancybox-thumbs-loading"), r = o.outerWidth(), a = o.outerHeight();
                t = this.naturalWidth || this.width, s = (i = this.naturalHeight || this.height) / a, 
                (n = t / r) >= 1 && s >= 1 && (n > s ? (t /= s, i = a) : (t = r, i /= n)), e(this).css({
                    width: Math.floor(t),
                    height: Math.floor(i),
                    "margin-top": Math.min(0, Math.floor(.3 * a - .3 * i)),
                    "margin-left": Math.min(0, Math.floor(.5 * r - .5 * t))
                }).show();
            }).each(function() {
                this.src = e(this).data("src");
            });
        },
        focus: function() {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus();
        },
        close: function() {
            this.$grid.hide();
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), 
            this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), 
            this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update();
        },
        hide: function() {
            this.isVisible = !1, this.update();
        },
        show: function() {
            this.isVisible = !0, this.update();
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update();
        }
    }), e(t).on({
        "onInit.fb": function(t, e) {
            e && !e.Thumbs && (e.Thumbs = new i(e));
        },
        "beforeShow.fb": function(t, e, i, n) {
            var s = e && e.Thumbs;
            if (s && s.isActive) {
                if (i.modal) return s.$button.hide(), void s.hide();
                n && !0 === i.opts.thumbs.autoStart && s.show(), s.isVisible && s.focus();
            }
        },
        "afterKeydown.fb": function(t, e, i, n, s) {
            var o = e && e.Thumbs;
            o && o.isActive && 71 === s && (n.preventDefault(), o.toggle());
        },
        "beforeClose.fb": function(t, e) {
            var i = e && e.Thumbs;
            i && i.isVisible && !1 !== e.opts.thumbs.hideOnClose && i.close();
        }
    });
}(document, window.jQuery), function(t, e, i) {
    "use strict";
    function n() {
        var t = e.location.hash.substr(1), i = t.split("-"), n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) ? parseInt(i.pop(-1), 10) || 1 : 1, s = i.join("-");
        return n < 1 && (n = 1), {
            hash: t,
            index: n,
            gallery: s
        };
    }
    function s(t) {
        var e;
        "" !== t.gallery && ((e = i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length || (e = i("#" + i.escapeSelector(t.gallery))), 
        e.length && (r = !1, e.trigger("click")));
    }
    function o(t) {
        var e;
        return !!t && ((e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") : ""));
    }
    i.escapeSelector || (i.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
        });
    });
    var r = !0, a = null, l = null;
    i(function() {
        setTimeout(function() {
            !1 !== i.fancybox.defaults.hash && (i(t).on({
                "onInit.fb": function(t, e) {
                    var i, s;
                    !1 !== e.group[e.currIndex].opts.hash && (i = n(), (s = o(e)) && i.gallery && s == i.gallery && (e.currIndex = i.index - 1));
                },
                "beforeShow.fb": function(i, n, s) {
                    var c;
                    s && !1 !== s.opts.hash && (c = o(n)) && "" !== c && (e.location.hash.indexOf(c) < 0 && (n.opts.origHash = e.location.hash), 
                    a = c + (n.group.length > 1 ? "-" + (s.index + 1) : ""), "replaceState" in e.history ? (l && clearTimeout(l), 
                    l = setTimeout(function() {
                        e.history[r ? "pushState" : "replaceState"]({}, t.title, e.location.pathname + e.location.search + "#" + a), 
                        l = null, r = !1;
                    }, 300)) : e.location.hash = a);
                },
                "beforeClose.fb": function(n, s, r) {
                    var c, d;
                    l && clearTimeout(l), !1 !== r.opts.hash && (c = o(s), d = s && s.opts.origHash ? s.opts.origHash : "", 
                    c && "" !== c && ("replaceState" in history ? e.history.replaceState({}, t.title, e.location.pathname + e.location.search + d) : (e.location.hash = d, 
                    i(e).scrollTop(s.scrollTop).scrollLeft(s.scrollLeft))), a = null);
                }
            }), i(e).on("hashchange.fb", function() {
                var t = n();
                i.fancybox.getInstance() ? !a || a === t.gallery + "-" + t.index || 1 === t.index && a == t.gallery || (a = null, 
                i.fancybox.close()) : "" !== t.gallery && s(t);
            }), s(n()));
        }, 50);
    });
}(document, window, window.jQuery), function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery);
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(i, n) {
            var s;
            this.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(i),
                appendDots: t(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, i) {
                    return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, this.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(this, this.initials), this.activeBreakpoint = null, this.animType = null, 
            this.animProp = null, this.breakpoints = [], this.breakpointSettings = [], this.cssTransitions = !1, 
            this.focussed = !1, this.interrupted = !1, this.hidden = "hidden", this.paused = !0, 
            this.positionProp = null, this.respondTo = null, this.rowCount = 1, this.shouldClick = !0, 
            this.$slider = t(i), this.$slidesCache = null, this.transformType = null, this.transitionType = null, 
            this.visibilityChange = "visibilitychange", this.windowWidth = 0, this.windowTimer = null, 
            s = t(i).data("slick") || {}, this.options = t.extend({}, this.defaults, n, s), 
            this.currentSlide = this.options.initialSlide, this.originalSettings = this.options, 
            void 0 !== document.mozHidden ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (this.hidden = "webkitHidden", 
            this.visibilityChange = "webkitvisibilitychange"), this.autoPlay = t.proxy(this.autoPlay, this), 
            this.autoPlayClear = t.proxy(this.autoPlayClear, this), this.autoPlayIterator = t.proxy(this.autoPlayIterator, this), 
            this.changeSlide = t.proxy(this.changeSlide, this), this.clickHandler = t.proxy(this.clickHandler, this), 
            this.selectHandler = t.proxy(this.selectHandler, this), this.setPosition = t.proxy(this.setPosition, this), 
            this.swipeHandler = t.proxy(this.swipeHandler, this), this.dragHandler = t.proxy(this.dragHandler, this), 
            this.keyHandler = t.proxy(this.keyHandler, this), this.instanceUid = e++, this.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
            this.registerBreakpoints(), this.init(!0);
        };
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        if ("boolean" == typeof i) n = i, i = null; else if (0 > i || i >= this.slideCount) return !1;
        this.unload(), "number" == typeof i ? 0 === i && 0 === this.$slides.length ? t(e).appendTo(this.$slideTrack) : n ? t(e).insertBefore(this.$slides.eq(i)) : t(e).insertAfter(this.$slides.eq(i)) : !0 === n ? t(e).prependTo(this.$slideTrack) : t(e).appendTo(this.$slideTrack), 
        this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(), 
        this.$slideTrack.append(this.$slides), this.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e);
        }), this.$slidesCache = this.$slides, this.reinit();
    }, e.prototype.animateHeight = function() {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.animate({
                height: t
            }, this.options.speed);
        }
    }, e.prototype.animateSlide = function(e, i) {
        var n = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), 
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), 
        t({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(t) {
                t = Math.ceil(t), !1 === s.options.vertical ? (n[s.animType] = "translate(" + t + "px, 0px)", 
                s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(n));
            },
            complete: function() {
                i && i.call();
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? n[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + e + "px, 0px)", 
        s.$slideTrack.css(n), i && setTimeout(function() {
            s.disableTransition(), i.call();
        }, s.options.speed));
    }, e.prototype.getNavTarget = function() {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e;
    }, e.prototype.asNavFor = function(e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0);
        });
    }, e.prototype.applyTransition = function(t) {
        var e = {};
        !1 === this.options.fade ? e[this.transitionType] = this.transformType + " " + this.options.speed + "ms " + this.options.cssEase : e[this.transitionType] = "opacity " + this.options.speed + "ms " + this.options.cssEase, 
        !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e);
    }, e.prototype.autoPlay = function() {
        this.autoPlayClear(), this.slideCount > this.options.slidesToShow && (this.autoPlayTimer = setInterval(this.autoPlayIterator, this.options.autoplaySpeed));
    }, e.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }, e.prototype.autoPlayIterator = function() {
        var t = this.currentSlide + this.options.slidesToScroll;
        this.paused || this.interrupted || this.focussed || (!1 === this.options.infinite && (1 === this.direction && this.currentSlide + 1 === this.slideCount - 1 ? this.direction = 0 : 0 === this.direction && (t = this.currentSlide - this.options.slidesToScroll, 
        this.currentSlide - 1 == 0 && (this.direction = 1))), this.slideHandler(t));
    }, e.prototype.buildArrows = function() {
        !0 === this.options.arrows && (this.$prevArrow = t(this.options.prevArrow).addClass("slick-arrow"), 
        this.$nextArrow = t(this.options.nextArrow).addClass("slick-arrow"), this.slideCount > this.options.slidesToShow ? (this.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        this.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.prependTo(this.options.appendArrows), 
        this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.appendTo(this.options.appendArrows), 
        !0 !== this.options.infinite && this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : this.$prevArrow.add(this.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, e.prototype.buildDots = function() {
        var e, i;
        if (!0 === this.options.dots && this.slideCount > this.options.slidesToShow) {
            for (this.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(this.options.dotsClass), 
            e = 0; e <= this.getDotCount(); e += 1) i.append(t("<li />").append(this.options.customPaging.call(this, this, e)));
            this.$dots = i.appendTo(this.options.appendDots), this.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, e.prototype.buildOut = function() {
        this.$slides = this.$slider.children(this.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        this.slideCount = this.$slides.length, this.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "");
        }), this.$slider.addClass("slick-slider"), this.$slideTrack = 0 === this.slideCount ? t('<div class="slick-track"/>').appendTo(this.$slider) : this.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        this.$list = this.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), 
        this.$slideTrack.css("opacity", 0), (!0 === this.options.centerMode || !0 === this.options.swipeToSlide) && (this.options.slidesToScroll = 1), 
        t("img[data-lazy]", this.$slider).not("[src]").addClass("slick-loading"), this.setupInfinite(), 
        this.buildArrows(), this.buildDots(), this.updateDots(), this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), 
        !0 === this.options.draggable && this.$list.addClass("draggable");
    }, e.prototype.buildRows = function() {
        var t, e, i, n, s, o, r;
        if (n = document.createDocumentFragment(), o = this.$slider.children(), this.options.rows > 1) {
            for (r = this.options.slidesPerRow * this.options.rows, s = Math.ceil(o.length / r), 
            t = 0; s > t; t++) {
                var a = document.createElement("div");
                for (e = 0; e < this.options.rows; e++) {
                    var l = document.createElement("div");
                    for (i = 0; i < this.options.slidesPerRow; i++) {
                        var c = t * r + (e * this.options.slidesPerRow + i);
                        o.get(c) && l.appendChild(o.get(c));
                    }
                    a.appendChild(l);
                }
                n.appendChild(a);
            }
            this.$slider.empty().append(n), this.$slider.children().children().children().css({
                width: 100 / this.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, e.prototype.checkResponsive = function(e, i) {
        var n, s, o, r = !1, a = this.$slider.width(), l = window.innerWidth || t(window).width();
        if ("window" === this.respondTo ? o = l : "slider" === this.respondTo ? o = a : "min" === this.respondTo && (o = Math.min(l, a)), 
        this.options.responsive && this.options.responsive.length && null !== this.options.responsive) {
            s = null;
            for (n in this.breakpoints) this.breakpoints.hasOwnProperty(n) && (!1 === this.originalSettings.mobileFirst ? o < this.breakpoints[n] && (s = this.breakpoints[n]) : o > this.breakpoints[n] && (s = this.breakpoints[n]));
            null !== s ? null !== this.activeBreakpoint ? (s !== this.activeBreakpoint || i) && (this.activeBreakpoint = s, 
            "unslick" === this.breakpointSettings[s] ? this.unslick(s) : (this.options = t.extend({}, this.originalSettings, this.breakpointSettings[s]), 
            !0 === e && (this.currentSlide = this.options.initialSlide), this.refresh(e)), r = s) : (this.activeBreakpoint = s, 
            "unslick" === this.breakpointSettings[s] ? this.unslick(s) : (this.options = t.extend({}, this.originalSettings, this.breakpointSettings[s]), 
            !0 === e && (this.currentSlide = this.options.initialSlide), this.refresh(e)), r = s) : null !== this.activeBreakpoint && (this.activeBreakpoint = null, 
            this.options = this.originalSettings, !0 === e && (this.currentSlide = this.options.initialSlide), 
            this.refresh(e), r = s), e || !1 === r || this.$slider.trigger("breakpoint", [ this, r ]);
        }
    }, e.prototype.changeSlide = function(e, i) {
        var n, s, o, r = t(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), o = this.slideCount % this.options.slidesToScroll != 0, 
        n = o ? 0 : (this.slideCount - this.currentSlide) % this.options.slidesToScroll, 
        e.data.message) {
          case "previous":
            s = 0 === n ? this.options.slidesToScroll : this.options.slidesToShow - n, this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide - s, !1, i);
            break;

          case "next":
            s = 0 === n ? this.options.slidesToScroll : n, this.slideCount > this.options.slidesToShow && this.slideHandler(this.currentSlide + s, !1, i);
            break;

          case "index":
            var a = 0 === e.data.index ? 0 : e.data.index || r.index() * this.options.slidesToScroll;
            this.slideHandler(this.checkNavigable(a), !1, i), r.children().trigger("focus");
            break;

          default:
            return;
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, i;
        if (e = this.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1]; else for (var n in e) {
            if (t < e[n]) {
                t = i;
                break;
            }
            i = e[n];
        }
        return t;
    }, e.prototype.cleanUpEvents = function() {
        this.options.dots && null !== this.$dots && t("li", this.$dots).off("click.slick", this.changeSlide).off("mouseenter.slick", t.proxy(this.interrupt, this, !0)).off("mouseleave.slick", t.proxy(this.interrupt, this, !1)), 
        this.$slider.off("focus.slick blur.slick"), !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow && this.$prevArrow.off("click.slick", this.changeSlide), 
        this.$nextArrow && this.$nextArrow.off("click.slick", this.changeSlide)), this.$list.off("touchstart.slick mousedown.slick", this.swipeHandler), 
        this.$list.off("touchmove.slick mousemove.slick", this.swipeHandler), this.$list.off("touchend.slick mouseup.slick", this.swipeHandler), 
        this.$list.off("touchcancel.slick mouseleave.slick", this.swipeHandler), this.$list.off("click.slick", this.clickHandler), 
        t(document).off(this.visibilityChange, this.visibility), this.cleanUpSlideEvents(), 
        !0 === this.options.accessibility && this.$list.off("keydown.slick", this.keyHandler), 
        !0 === this.options.focusOnSelect && t(this.$slideTrack).children().off("click.slick", this.selectHandler), 
        t(window).off("orientationchange.slick.slick-" + this.instanceUid, this.orientationChange), 
        t(window).off("resize.slick.slick-" + this.instanceUid, this.resize), t("[draggable!=true]", this.$slideTrack).off("dragstart", this.preventDefault), 
        t(window).off("load.slick.slick-" + this.instanceUid, this.setPosition), t(document).off("ready.slick.slick-" + this.instanceUid, this.setPosition);
    }, e.prototype.cleanUpSlideEvents = function() {
        this.$list.off("mouseenter.slick", t.proxy(this.interrupt, this, !0)), this.$list.off("mouseleave.slick", t.proxy(this.interrupt, this, !1));
    }, e.prototype.cleanUpRows = function() {
        var t;
        this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"), 
        this.$slider.empty().append(t));
    }, e.prototype.clickHandler = function(t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
    }, e.prototype.destroy = function(e) {
        this.autoPlayClear(), this.touchObject = {}, this.cleanUpEvents(), t(".slick-cloned", this.$slider).detach(), 
        this.$dots && this.$dots.remove(), this.$prevArrow && this.$prevArrow.length && (this.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove()), this.$nextArrow && this.$nextArrow.length && (this.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove()), this.$slides && (this.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"));
        }), this.$slideTrack.children(this.options.slide).detach(), this.$slideTrack.detach(), 
        this.$list.detach(), this.$slider.append(this.$slides)), this.cleanUpRows(), this.$slider.removeClass("slick-slider"), 
        this.$slider.removeClass("slick-initialized"), this.$slider.removeClass("slick-dotted"), 
        this.unslicked = !0, e || this.$slider.trigger("destroy", [ this ]);
    }, e.prototype.disableTransition = function(t) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e);
    }, e.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function() {
            i.disableTransition(t), e.call();
        }, i.options.speed));
    }, e.prototype.fadeSlideOut = function(t) {
        !1 === this.cssTransitions ? this.$slides.eq(t).animate({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }, this.options.speed, this.options.easing) : (this.applyTransition(t), this.$slides.eq(t).css({
            opacity: 0,
            zIndex: this.options.zIndex - 2
        }));
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        null !== t && (this.$slidesCache = this.$slides, this.unload(), this.$slideTrack.children(this.options.slide).detach(), 
        this.$slidesCache.filter(t).appendTo(this.$slideTrack), this.reinit());
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
            i.stopImmediatePropagation();
            var n = t(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay());
            }, 0);
        });
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, e.prototype.getDotCount = function() {
        var t = 0, e = 0, i = 0;
        if (!0 === this.options.infinite) for (;t < this.slideCount; ) ++i, t = e + this.options.slidesToScroll, 
        e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow; else if (!0 === this.options.centerMode) i = this.slideCount; else if (this.options.asNavFor) for (;t < this.slideCount; ) ++i, 
        t = e + this.options.slidesToScroll, e += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow; else i = 1 + Math.ceil((this.slideCount - this.options.slidesToShow) / this.options.slidesToScroll);
        return i - 1;
    }, e.prototype.getLeft = function(t) {
        var e, i, n, s = 0;
        return this.slideOffset = 0, i = this.$slides.first().outerHeight(!0), !0 === this.options.infinite ? (this.slideCount > this.options.slidesToShow && (this.slideOffset = this.slideWidth * this.options.slidesToShow * -1, 
        s = i * this.options.slidesToShow * -1), this.slideCount % this.options.slidesToScroll != 0 && t + this.options.slidesToScroll > this.slideCount && this.slideCount > this.options.slidesToShow && (t > this.slideCount ? (this.slideOffset = (this.options.slidesToShow - (t - this.slideCount)) * this.slideWidth * -1, 
        s = (this.options.slidesToShow - (t - this.slideCount)) * i * -1) : (this.slideOffset = this.slideCount % this.options.slidesToScroll * this.slideWidth * -1, 
        s = this.slideCount % this.options.slidesToScroll * i * -1))) : t + this.options.slidesToShow > this.slideCount && (this.slideOffset = (t + this.options.slidesToShow - this.slideCount) * this.slideWidth, 
        s = (t + this.options.slidesToShow - this.slideCount) * i), this.slideCount <= this.options.slidesToShow && (this.slideOffset = 0, 
        s = 0), !0 === this.options.centerMode && !0 === this.options.infinite ? this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2) - this.slideWidth : !0 === this.options.centerMode && (this.slideOffset = 0, 
        this.slideOffset += this.slideWidth * Math.floor(this.options.slidesToShow / 2)), 
        e = !1 === this.options.vertical ? t * this.slideWidth * -1 + this.slideOffset : t * i * -1 + s, 
        !0 === this.options.variableWidth && (n = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(t) : this.$slideTrack.children(".slick-slide").eq(t + this.options.slidesToShow), 
        e = !0 === this.options.rtl ? n[0] ? -1 * (this.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, 
        !0 === this.options.centerMode && (n = this.slideCount <= this.options.slidesToShow || !1 === this.options.infinite ? this.$slideTrack.children(".slick-slide").eq(t) : this.$slideTrack.children(".slick-slide").eq(t + this.options.slidesToShow + 1), 
        e = !0 === this.options.rtl ? n[0] ? -1 * (this.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, 
        e += (this.$list.width() - n.outerWidth()) / 2)), e;
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        return this.options[t];
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = 0, i = 0, n = [];
        for (!1 === this.options.infinite ? t = this.slideCount : (e = -1 * this.options.slidesToScroll, 
        i = -1 * this.options.slidesToScroll, t = 2 * this.slideCount); t > e; ) n.push(e), 
        e = i + this.options.slidesToScroll, i += this.options.slidesToScroll <= this.options.slidesToShow ? this.options.slidesToScroll : this.options.slidesToShow;
        return n;
    }, e.prototype.getSlick = function() {
        return this;
    }, e.prototype.getSlideCount = function() {
        var e, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, 
        !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(s, o) {
            return o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * n.swipeLeft ? (e = o, !1) : void 0;
        }), Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll;
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e);
    }, e.prototype.init = function(e) {
        t(this.$slider).hasClass("slick-initialized") || (t(this.$slider).addClass("slick-initialized"), 
        this.buildRows(), this.buildOut(), this.setProps(), this.startLoad(), this.loadSlider(), 
        this.initializeEvents(), this.updateArrows(), this.updateDots(), this.checkResponsive(!0), 
        this.focusHandler()), e && this.$slider.trigger("init", [ this ]), !0 === this.options.accessibility && this.initADA(), 
        this.options.autoplay && (this.paused = !1, this.autoPlay());
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + i
            });
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(i) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + i,
                id: "slick-slide" + e.instanceUid + i
            });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), 
        e.activateADA();
    }, e.prototype.initArrowEvents = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, this.changeSlide), this.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, this.changeSlide));
    }, e.prototype.initDotEvents = function() {
        !0 === this.options.dots && this.slideCount > this.options.slidesToShow && t("li", this.$dots).on("click.slick", {
            message: "index"
        }, this.changeSlide), !0 === this.options.dots && !0 === this.options.pauseOnDotsHover && t("li", this.$dots).on("mouseenter.slick", t.proxy(this.interrupt, this, !0)).on("mouseleave.slick", t.proxy(this.interrupt, this, !1));
    }, e.prototype.initSlideEvents = function() {
        this.options.pauseOnHover && (this.$list.on("mouseenter.slick", t.proxy(this.interrupt, this, !0)), 
        this.$list.on("mouseleave.slick", t.proxy(this.interrupt, this, !1)));
    }, e.prototype.initializeEvents = function() {
        this.initArrowEvents(), this.initDotEvents(), this.initSlideEvents(), this.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, this.swipeHandler), this.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, this.swipeHandler), this.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, this.swipeHandler), this.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, this.swipeHandler), this.$list.on("click.slick", this.clickHandler), t(document).on(this.visibilityChange, t.proxy(this.visibility, this)), 
        !0 === this.options.accessibility && this.$list.on("keydown.slick", this.keyHandler), 
        !0 === this.options.focusOnSelect && t(this.$slideTrack).children().on("click.slick", this.selectHandler), 
        t(window).on("orientationchange.slick.slick-" + this.instanceUid, t.proxy(this.orientationChange, this)), 
        t(window).on("resize.slick.slick-" + this.instanceUid, t.proxy(this.resize, this)), 
        t("[draggable!=true]", this.$slideTrack).on("dragstart", this.preventDefault), t(window).on("load.slick.slick-" + this.instanceUid, this.setPosition), 
        t(document).on("ready.slick.slick-" + this.instanceUid, this.setPosition);
    }, e.prototype.initUI = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.show(), 
        this.$nextArrow.show()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.show();
    }, e.prototype.keyHandler = function(t) {
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === this.options.accessibility ? this.changeSlide({
            data: {
                message: !0 === this.options.rtl ? "next" : "previous"
            }
        }) : 39 === t.keyCode && !0 === this.options.accessibility && this.changeSlide({
            data: {
                message: !0 === this.options.rtl ? "previous" : "next"
            }
        }));
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this), i = t(this).attr("data-lazy"), n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading");
                        }), o.$slider.trigger("lazyLoaded", [ o, e, i ]);
                    });
                }, n.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    o.$slider.trigger("lazyLoadError", [ o, e, i ]);
                }, n.src = i;
            });
        }
        var i, n, s, o = this;
        !0 === o.options.centerMode ? !0 === o.options.infinite ? (n = o.currentSlide + (o.options.slidesToShow / 2 + 1), 
        s = n + o.options.slidesToShow + 2) : (n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), 
        s = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (n = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, 
        s = Math.ceil(n + o.options.slidesToShow), !0 === o.options.fade && (n > 0 && n--, 
        s <= o.slideCount && s++)), e(o.$slider.find(".slick-slide").slice(n, s)), o.slideCount <= o.options.slidesToShow ? (i = o.$slider.find(".slick-slide"), 
        e(i)) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? (i = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), 
        e(i)) : 0 === o.currentSlide && (i = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), 
        e(i));
    }, e.prototype.loadSlider = function() {
        this.setPosition(), this.$slideTrack.css({
            opacity: 1
        }), this.$slider.removeClass("slick-loading"), this.initUI(), "progressive" === this.options.lazyLoad && this.progressiveLazyLoad();
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, e.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
    }, e.prototype.pause = e.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0;
    }, e.prototype.play = e.prototype.slickPlay = function() {
        this.autoPlay(), this.options.autoplay = !0, this.paused = !1, this.focussed = !1, 
        this.interrupted = !1;
    }, e.prototype.postSlide = function(t) {
        this.unslicked || (this.$slider.trigger("afterChange", [ this, t ]), this.animating = !1, 
        this.setPosition(), this.swipeLeft = null, this.options.autoplay && this.autoPlay(), 
        !0 === this.options.accessibility && this.initADA());
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault();
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var i, n, s, o = this, r = t("img[data-lazy]", o.$slider);
        r.length ? (i = r.first(), n = i.attr("data-lazy"), s = document.createElement("img"), 
        s.onload = function() {
            i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), 
            o.$slider.trigger("lazyLoaded", [ o, i, n ]), o.progressiveLazyLoad();
        }, s.onerror = function() {
            3 > e ? setTimeout(function() {
                o.progressiveLazyLoad(e + 1);
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
            o.$slider.trigger("lazyLoadError", [ o, i, n ]), o.progressiveLazyLoad());
        }, s.src = n) : o.$slider.trigger("allImagesLoaded", [ o ]);
    }, e.prototype.refresh = function(e) {
        var i, n;
        n = this.slideCount - this.options.slidesToShow, !this.options.infinite && this.currentSlide > n && (this.currentSlide = n), 
        this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0), i = this.currentSlide, 
        this.destroy(!0), t.extend(this, this.initials, {
            currentSlide: i
        }), this.init(), e || this.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1);
    }, e.prototype.registerBreakpoints = function() {
        var e, i, n, s = this, o = s.options.responsive || null;
        if ("array" === t.type(o) && o.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in o) if (n = s.breakpoints.length - 1, i = o[e].breakpoint, o.hasOwnProperty(e)) {
                for (;n >= 0; ) s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1), 
                n--;
                s.breakpoints.push(i), s.breakpointSettings[i] = o[e].settings;
            }
            s.breakpoints.sort(function(t, e) {
                return s.options.mobileFirst ? t - e : e - t;
            });
        }
    }, e.prototype.reinit = function() {
        this.$slides = this.$slideTrack.children(this.options.slide).addClass("slick-slide"), 
        this.slideCount = this.$slides.length, this.currentSlide >= this.slideCount && 0 !== this.currentSlide && (this.currentSlide = this.currentSlide - this.options.slidesToScroll), 
        this.slideCount <= this.options.slidesToShow && (this.currentSlide = 0), this.registerBreakpoints(), 
        this.setProps(), this.setupInfinite(), this.buildArrows(), this.updateArrows(), 
        this.initArrowEvents(), this.buildDots(), this.updateDots(), this.initDotEvents(), 
        this.cleanUpSlideEvents(), this.initSlideEvents(), this.checkResponsive(!1, !0), 
        !0 === this.options.focusOnSelect && t(this.$slideTrack).children().on("click.slick", this.selectHandler), 
        this.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), 
        this.setPosition(), this.focusHandler(), this.paused = !this.options.autoplay, this.autoPlay(), 
        this.$slider.trigger("reInit", [ this ]);
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50));
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        return "boolean" == typeof t ? (e = t, t = !0 === e ? 0 : this.slideCount - 1) : t = !0 === e ? --t : t, 
        !(this.slideCount < 1 || 0 > t || t > this.slideCount - 1) && (this.unload(), !0 === i ? this.$slideTrack.children().remove() : this.$slideTrack.children(this.options.slide).eq(t).remove(), 
        this.$slides = this.$slideTrack.children(this.options.slide), this.$slideTrack.children(this.options.slide).detach(), 
        this.$slideTrack.append(this.$slides), this.$slidesCache = this.$slides, void this.reinit());
    }, e.prototype.setCSS = function(t) {
        var e, i, n = {};
        !0 === this.options.rtl && (t = -t), e = "left" == this.positionProp ? Math.ceil(t) + "px" : "0px", 
        i = "top" == this.positionProp ? Math.ceil(t) + "px" : "0px", n[this.positionProp] = t, 
        !1 === this.transformsEnabled ? this.$slideTrack.css(n) : (n = {}, !1 === this.cssTransitions ? (n[this.animType] = "translate(" + e + ", " + i + ")", 
        this.$slideTrack.css(n)) : (n[this.animType] = "translate3d(" + e + ", " + i + ", 0px)", 
        this.$slideTrack.css(n)));
    }, e.prototype.setDimensions = function() {
        !1 === this.options.vertical ? !0 === this.options.centerMode && this.$list.css({
            padding: "0px " + this.options.centerPadding
        }) : (this.$list.height(this.$slides.first().outerHeight(!0) * this.options.slidesToShow), 
        !0 === this.options.centerMode && this.$list.css({
            padding: this.options.centerPadding + " 0px"
        })), this.listWidth = this.$list.width(), this.listHeight = this.$list.height(), 
        !1 === this.options.vertical && !1 === this.options.variableWidth ? (this.slideWidth = Math.ceil(this.listWidth / this.options.slidesToShow), 
        this.$slideTrack.width(Math.ceil(this.slideWidth * this.$slideTrack.children(".slick-slide").length))) : !0 === this.options.variableWidth ? this.$slideTrack.width(5e3 * this.slideCount) : (this.slideWidth = Math.ceil(this.listWidth), 
        this.$slideTrack.height(Math.ceil(this.$slides.first().outerHeight(!0) * this.$slideTrack.children(".slick-slide").length)));
        var t = this.$slides.first().outerWidth(!0) - this.$slides.first().width();
        !1 === this.options.variableWidth && this.$slideTrack.children(".slick-slide").width(this.slideWidth - t);
    }, e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(n, s) {
            e = i.slideWidth * n * -1, !0 === i.options.rtl ? t(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            });
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        });
    }, e.prototype.setHeight = function() {
        if (1 === this.options.slidesToShow && !0 === this.options.adaptiveHeight && !1 === this.options.vertical) {
            var t = this.$slides.eq(this.currentSlide).outerHeight(!0);
            this.$list.css("height", t);
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, i, n, s, o, r = this, a = !1;
        if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], 
        s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), 
        "single" === o) r.options[n] = s; else if ("multiple" === o) t.each(n, function(t, e) {
            r.options[t] = e;
        }); else if ("responsive" === o) for (i in s) if ("array" !== t.type(r.options.responsive)) r.options.responsive = [ s[i] ]; else {
            for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === s[i].breakpoint && r.options.responsive.splice(e, 1), 
            e--;
            r.options.responsive.push(s[i]);
        }
        a && (r.unload(), r.reinit());
    }, e.prototype.setPosition = function() {
        this.setDimensions(), this.setHeight(), !1 === this.options.fade ? this.setCSS(this.getLeft(this.currentSlide)) : this.setFade(), 
        this.$slider.trigger("setPosition", [ this ]);
    }, e.prototype.setProps = function() {
        var t = document.body.style;
        this.positionProp = !0 === this.options.vertical ? "top" : "left", "top" === this.positionProp ? this.$slider.addClass("slick-vertical") : this.$slider.removeClass("slick-vertical"), 
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === this.options.useCSS && (this.cssTransitions = !0), 
        this.options.fade && ("number" == typeof this.options.zIndex ? this.options.zIndex < 3 && (this.options.zIndex = 3) : this.options.zIndex = this.defaults.zIndex), 
        void 0 !== t.OTransform && (this.animType = "OTransform", this.transformType = "-o-transform", 
        this.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (this.animType = !1)), 
        void 0 !== t.MozTransform && (this.animType = "MozTransform", this.transformType = "-moz-transform", 
        this.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (this.animType = !1)), 
        void 0 !== t.webkitTransform && (this.animType = "webkitTransform", this.transformType = "-webkit-transform", 
        this.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (this.animType = !1)), 
        void 0 !== t.msTransform && (this.animType = "msTransform", this.transformType = "-ms-transform", 
        this.transitionType = "msTransition", void 0 === t.msTransform && (this.animType = !1)), 
        void 0 !== t.transform && !1 !== this.animType && (this.animType = "transform", 
        this.transformType = "transform", this.transitionType = "transition"), this.transformsEnabled = this.options.useTransform && null !== this.animType && !1 !== this.animType;
    }, e.prototype.setSlideClasses = function(t) {
        var e, i, n, s;
        i = this.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
        this.$slides.eq(t).addClass("slick-current"), !0 === this.options.centerMode ? (e = Math.floor(this.options.slidesToShow / 2), 
        !0 === this.options.infinite && (t >= e && t <= this.slideCount - 1 - e ? this.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = this.options.slidesToShow + t, 
        i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 
        0 === t ? i.eq(i.length - 1 - this.options.slidesToShow).addClass("slick-center") : t === this.slideCount - 1 && i.eq(this.options.slidesToShow).addClass("slick-center")), 
        this.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= this.slideCount - this.options.slidesToShow ? this.$slides.slice(t, t + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= this.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = this.slideCount % this.options.slidesToShow, 
        n = !0 === this.options.infinite ? this.options.slidesToShow + t : t, this.options.slidesToShow == this.options.slidesToScroll && this.slideCount - t < this.options.slidesToShow ? i.slice(n - (this.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + this.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), 
        "ondemand" === this.options.lazyLoad && this.lazyLoad();
    }, e.prototype.setupInfinite = function() {
        var e, i, n;
        if (!0 === this.options.fade && (this.options.centerMode = !1), !0 === this.options.infinite && !1 === this.options.fade && (i = null, 
        this.slideCount > this.options.slidesToShow)) {
            for (n = !0 === this.options.centerMode ? this.options.slidesToShow + 1 : this.options.slidesToShow, 
            e = this.slideCount; e > this.slideCount - n; e -= 1) i = e - 1, t(this.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - this.slideCount).prependTo(this.$slideTrack).addClass("slick-cloned");
            for (e = 0; n > e; e += 1) i = e, t(this.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + this.slideCount).appendTo(this.$slideTrack).addClass("slick-cloned");
            this.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "");
            });
        }
    }, e.prototype.interrupt = function(t) {
        t || this.autoPlay(), this.interrupted = t;
    }, e.prototype.selectHandler = function(e) {
        var i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"), n = parseInt(i.attr("data-slick-index"));
        return n || (n = 0), this.slideCount <= this.options.slidesToShow ? (this.setSlideClasses(n), 
        void this.asNavFor(n)) : void this.slideHandler(n);
    }, e.prototype.slideHandler = function(t, e, i) {
        var n, s, o, r, a, l = null, c = this;
        return e = e || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === e && c.asNavFor(t), 
        n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, 
        !1 === c.options.infinite && !1 === c.options.centerMode && (0 > t || t > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (n = c.currentSlide, 
        !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(n);
        }) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > t || t > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (n = c.currentSlide, 
        !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(n);
        }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), s = 0 > n ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, 
        c.animating = !0, c.$slider.trigger("beforeChange", [ c, c.currentSlide, s ]), o = c.currentSlide, 
        c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), 
        (a = a.slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), 
        c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(o), 
        c.fadeSlide(s, function() {
            c.postSlide(s);
        })) : c.postSlide(s), void c.animateHeight()) : void (!0 !== i ? c.animateSlide(l, function() {
            c.postSlide(s);
        }) : c.postSlide(s))));
    }, e.prototype.startLoad = function() {
        !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && (this.$prevArrow.hide(), 
        this.$nextArrow.hide()), !0 === this.options.dots && this.slideCount > this.options.slidesToShow && this.$dots.hide(), 
        this.$slider.addClass("slick-loading");
    }, e.prototype.swipeDirection = function() {
        var t, e, i, n;
        return t = this.touchObject.startX - this.touchObject.curX, e = this.touchObject.startY - this.touchObject.curY, 
        i = Math.atan2(e, t), 0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)), 
        45 >= n && n >= 0 ? !1 === this.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === this.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === this.options.rtl ? "right" : "left" : !0 === this.options.verticalSwiping ? n >= 35 && 135 >= n ? "down" : "up" : "vertical";
    }, e.prototype.swipeEnd = function(t) {
        var e, i;
        if (this.dragging = !1, this.interrupted = !1, this.shouldClick = !(this.touchObject.swipeLength > 10), 
        void 0 === this.touchObject.curX) return !1;
        if (!0 === this.touchObject.edgeHit && this.$slider.trigger("edge", [ this, this.swipeDirection() ]), 
        this.touchObject.swipeLength >= this.touchObject.minSwipe) {
            switch (i = this.swipeDirection()) {
              case "left":
              case "down":
                e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide + this.getSlideCount()) : this.currentSlide + this.getSlideCount(), 
                this.currentDirection = 0;
                break;

              case "right":
              case "up":
                e = this.options.swipeToSlide ? this.checkNavigable(this.currentSlide - this.getSlideCount()) : this.currentSlide - this.getSlideCount(), 
                this.currentDirection = 1;
            }
            "vertical" != i && (this.slideHandler(e), this.touchObject = {}, this.$slider.trigger("swipe", [ this, i ]));
        } else this.touchObject.startX !== this.touchObject.curX && (this.slideHandler(this.currentSlide), 
        this.touchObject = {});
    }, e.prototype.swipeHandler = function(t) {
        if (!(!1 === this.options.swipe || "ontouchend" in document && !1 === this.options.swipe || !1 === this.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (this.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, 
        this.touchObject.minSwipe = this.listWidth / this.options.touchThreshold, !0 === this.options.verticalSwiping && (this.touchObject.minSwipe = this.listHeight / this.options.touchThreshold), 
        t.data.action) {
          case "start":
            this.swipeStart(t);
            break;

          case "move":
            this.swipeMove(t);
            break;

          case "end":
            this.swipeEnd(t);
        }
    }, e.prototype.swipeMove = function(t) {
        var e, i, n, s, o;
        return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!this.dragging || o && 1 !== o.length) && (e = this.getLeft(this.currentSlide), 
        this.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, this.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, 
        this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2))), 
        !0 === this.options.verticalSwiping && (this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY, 2)))), 
        "vertical" !== (i = this.swipeDirection()) ? (void 0 !== t.originalEvent && this.touchObject.swipeLength > 4 && t.preventDefault(), 
        s = (!1 === this.options.rtl ? 1 : -1) * (this.touchObject.curX > this.touchObject.startX ? 1 : -1), 
        !0 === this.options.verticalSwiping && (s = this.touchObject.curY > this.touchObject.startY ? 1 : -1), 
        n = this.touchObject.swipeLength, this.touchObject.edgeHit = !1, !1 === this.options.infinite && (0 === this.currentSlide && "right" === i || this.currentSlide >= this.getDotCount() && "left" === i) && (n = this.touchObject.swipeLength * this.options.edgeFriction, 
        this.touchObject.edgeHit = !0), !1 === this.options.vertical ? this.swipeLeft = e + n * s : this.swipeLeft = e + n * (this.$list.height() / this.listWidth) * s, 
        !0 === this.options.verticalSwiping && (this.swipeLeft = e + n * s), !0 !== this.options.fade && !1 !== this.options.touchMove && (!0 === this.animating ? (this.swipeLeft = null, 
        !1) : void this.setCSS(this.swipeLeft))) : void 0);
    }, e.prototype.swipeStart = function(t) {
        var e;
        return this.interrupted = !0, 1 !== this.touchObject.fingerCount || this.slideCount <= this.options.slidesToShow ? (this.touchObject = {}, 
        !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), 
        this.touchObject.startX = this.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, 
        this.touchObject.startY = this.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, 
        void (this.dragging = !0));
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        null !== this.$slidesCache && (this.unload(), this.$slideTrack.children(this.options.slide).detach(), 
        this.$slidesCache.appendTo(this.$slideTrack), this.reinit());
    }, e.prototype.unload = function() {
        t(".slick-cloned", this.$slider).remove(), this.$dots && this.$dots.remove(), this.$prevArrow && this.htmlExpr.test(this.options.prevArrow) && this.$prevArrow.remove(), 
        this.$nextArrow && this.htmlExpr.test(this.options.nextArrow) && this.$nextArrow.remove(), 
        this.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, e.prototype.unslick = function(t) {
        this.$slider.trigger("unslick", [ this, t ]), this.destroy();
    }, e.prototype.updateArrows = function() {
        Math.floor(this.options.slidesToShow / 2), !0 === this.options.arrows && this.slideCount > this.options.slidesToShow && !this.options.infinite && (this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
        this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === this.currentSlide ? (this.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        this.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - this.options.slidesToShow && !1 === this.options.centerMode ? (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : this.currentSlide >= this.slideCount - 1 && !0 === this.options.centerMode && (this.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        this.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, e.prototype.updateDots = function() {
        null !== this.$dots && (this.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), 
        this.$dots.find("li").eq(Math.floor(this.currentSlide / this.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, e.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1);
    }, t.fn.slick = function() {
        var t, i, n = arguments[0], s = Array.prototype.slice.call(arguments, 1), o = this.length;
        for (t = 0; o > t; t++) if ("object" == typeof n || void 0 === n ? this[t].slick = new e(this[t], n) : i = this[t].slick[n].apply(this[t].slick, s), 
        void 0 !== i) return i;
        return this;
    };
}), jQuery(document).ready(function(t) {
    !function(t, e, i) {
        function n(t, e) {
            return typeof t === e;
        }
        function s() {
            return "function" != typeof e.createElement ? e.createElement(arguments[0]) : y ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments);
        }
        function o(t, e) {
            return !!~("" + t).indexOf(e);
        }
        function r(t) {
            return t.replace(/([a-z])-([a-z])/g, function(t, e, i) {
                return e + i.toUpperCase();
            }).replace(/^-/, "");
        }
        function a(t, e) {
            return function() {
                return t.apply(e, arguments);
            };
        }
        function l(t) {
            return t.replace(/([A-Z])/g, function(t, e) {
                return "-" + e.toLowerCase();
            }).replace(/^ms-/, "-ms-");
        }
        function c(t, i, n, o) {
            var r, a, l, c, d = s("div"), u = function() {
                var t = e.body;
                return t || (t = s(y ? "svg" : "body"), t.fake = !0), t;
            }();
            if (parseInt(n, 10)) for (;n--; ) l = s("div"), l.id = o ? o[n] : "modernizr" + (n + 1), 
            d.appendChild(l);
            return r = s("style"), r.type = "text/css", r.id = "smodernizr", (u.fake ? u : d).appendChild(r), 
            u.appendChild(d), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(e.createTextNode(t)), 
            d.id = "modernizr", u.fake && (u.style.background = "", u.style.overflow = "hidden", 
            c = v.style.overflow, v.style.overflow = "hidden", v.appendChild(u)), a = i(d, t), 
            u.fake ? (u.parentNode.removeChild(u), v.style.overflow = c, v.offsetHeight) : d.parentNode.removeChild(d), 
            !!a;
        }
        function d(e, n) {
            var s = e.length;
            if ("CSS" in t && "supports" in t.CSS) {
                for (;s--; ) if (t.CSS.supports(l(e[s]), n)) return !0;
                return !1;
            }
            if ("CSSSupportsRule" in t) {
                for (var o = []; s--; ) o.push("(" + l(e[s]) + ":" + n + ")");
                return o = o.join(" or "), c("@supports (" + o + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == function(e, i, n) {
                        var s;
                        if ("getComputedStyle" in t) {
                            s = getComputedStyle.call(t, e, i);
                            var o = t.console;
                            null !== s ? n && (s = s.getPropertyValue(n)) : o && o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
                        } else s = !i && e.currentStyle && e.currentStyle[n];
                        return s;
                    }(e, null, "position");
                });
            }
            return i;
        }
        function u(t, e, l, c, u) {
            var h = t.charAt(0).toUpperCase() + t.slice(1), p = (t + " " + T.join(h + " ") + h).split(" ");
            return n(e, "string") || n(e, "undefined") ? function(t, e, a, l) {
                function c() {
                    h && (delete C.style, delete C.modElem);
                }
                if (l = !n(l, "undefined") && l, !n(a, "undefined")) {
                    var u = d(t, a);
                    if (!n(u, "undefined")) return u;
                }
                for (var h, p, f, g, m, v = [ "modernizr", "tspan", "samp" ]; !C.style && v.length; ) h = !0, 
                C.modElem = s(v.shift()), C.style = C.modElem.style;
                for (f = t.length, p = 0; f > p; p++) if (g = t[p], m = C.style[g], o(g, "-") && (g = r(g)), 
                C.style[g] !== i) {
                    if (l || n(a, "undefined")) return c(), "pfx" != e || g;
                    try {
                        C.style[g] = a;
                    } catch (t) {}
                    if (C.style[g] != m) return c(), "pfx" != e || g;
                }
                return c(), !1;
            }(p, e, c, u) : (p = (t + " " + k.join(h + " ") + h).split(" "), function(t, e, i) {
                var s;
                for (var o in t) if (t[o] in e) return !1 === i ? t[o] : (s = e[t[o]], n(s, "function") ? a(s, i || e) : s);
                return !1;
            }(p, e, l));
        }
        function h(t, e, n) {
            return u(t, i, i, e, n);
        }
        var p = [], f = [], g = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(t, e) {
                var i = this;
                setTimeout(function() {
                    e(i[t]);
                }, 0);
            },
            addTest: function(t, e, i) {
                f.push({
                    name: t,
                    fn: e,
                    options: i
                });
            },
            addAsyncTest: function(t) {
                f.push({
                    name: null,
                    fn: t
                });
            }
        }, m = function() {};
        m.prototype = g, m = new m();
        var v = e.documentElement, y = "svg" === v.nodeName.toLowerCase(), b = g._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [ "", "" ];
        g._prefixes = b, m.addTest("cssgradients", function() {
            for (var t, e = "", i = 0, n = b.length - 1; n > i; i++) t = 0 === i ? "to " : "", 
            e += "background-image:" + b[i] + "linear-gradient(" + t + "left top, #9f9, white);";
            m._config.usePrefixes && (e += "background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
            var o = s("a").style;
            return o.cssText = e, ("" + o.backgroundImage).indexOf("gradient") > -1;
        });
        var x = "CSS" in t && "supports" in t.CSS, w = "supportsCSS" in t;
        m.addTest("supports", x || w);
        var T = g._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];
        g._cssomPrefixes = T;
        var k = g._config.usePrefixes ? "Moz O ms Webkit".toLowerCase().split(" ") : [];
        g._domPrefixes = k;
        var S = {
            elem: s("modernizr")
        };
        m._q.push(function() {
            delete S.elem;
        });
        var C = {
            style: S.elem.style
        };
        m._q.unshift(function() {
            delete C.style;
        }), g.testAllProps = u, g.testAllProps = h, m.addTest("cssfilters", function() {
            if (m.supports) return h("filter", "blur(2px)");
            var t = s("a");
            return t.style.cssText = b.join("filter:blur(2px); "), !!t.style.length && (e.documentMode === i || e.documentMode > 9);
        }), m.addTest("flexbox", h("flexBasis", "1px", !0)), function() {
            var t, e, i, s, o, r, a;
            for (var l in f) if (f.hasOwnProperty(l)) {
                if (t = [], (e = f[l]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
                for (s = n(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) r = t[o], 
                1 === (a = r.split(".")).length ? m[a[0]] = s : (!m[a[0]] || m[a[0]] instanceof Boolean || (m[a[0]] = new Boolean(m[a[0]])), 
                m[a[0]][a[1]] = s), p.push((s ? "" : "no-") + a.join("-"));
            }
        }(), function(t) {
            var e = v.className, i = m._config.classPrefix || "";
            if (y && (e = e.baseVal), m._config.enableJSClass) {
                var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
                e = e.replace(n, "$1" + i + "js$2");
            }
            m._config.enableClasses && (e += " " + i + t.join(" " + i), y ? v.className.baseVal = e : v.className = e);
        }(p), delete g.addTest, delete g.addAsyncTest;
        for (var $ = 0; $ < m._q.length; $++) m._q[$]();
        t.Modernizr = m;
    }(window, document);
    var e = navigator.userAgent;
    if (-1 == e.indexOf("Speed Insights") && -1 == e.indexOf("PTST")) {
        var i = document.createElement("script"), n = document.createTextNode("\t\t(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\t new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\t j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\t \t'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); \t\t})(window,document,'script','dataLayer','GTM-NBJJC6');\t\t");
        i.appendChild(n), document.head.appendChild(i);
        var s = document.createElement("link");
        s.rel = "stylesheet", s.href = "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800", 
        document.head.appendChild(s);
    }
    t(".slider").slick({
        infinite: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !1,
        arrows: !0,
        prevArrow: '<span class="ui-icon fa fa-chevron-left slick-arrow-left"></span>',
        nextArrow: '<span class="ui-icon fa fa-chevron-right slick-arrow-right"></span>',
        adaptiveHeight: !0,
        fade: !0,
        autoplaySpeed: 5e3,
        responsive: [ {
            breakpoint: 770,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1,
                arrows: !1,
                prevArrow: '<span class="fa fa-chevron-left"></span>',
                nextArrow: '<span class="fa fa-chevron-right"></span>'
            }
        } ]
    }), t(".off-canvas-icon").click(function() {
        t("body").toggleClass("off-canvas-is-active");
    }), t(window).on("resize", function() {
        t(this).width() < 770 || t("body").removeClass("off-canvas-is-active");
    }), t(".off-canvas-menu .ui-menu li a").click(function() {
        setTimeout(function() {
            t("body").removeClass("off-canvas-is-active");
        }, 750);
    }), t(".ui-btn-share").click(function() {
        t(this).toggleClass("is-active");
    }), lightbox_0 = new fusepump.lightbox.buynow(20282);
    document.getElementById("lightbox-call-to-action-0").addEventListener("click", function() {
        lightbox_0.show();
    }), lightbox_30 = new fusepump.lightbox.buynow(20282);
    document.getElementById("lightbox-call-to-action-30").addEventListener("click", function() {
        lightbox_30.show();
    }), lightbox_20 = new fusepump.lightbox.buynow(20282);
    if (document.getElementById("lightbox-call-to-action-20").addEventListener("click", function() {
        lightbox_20.show();
    }), t("#lightbox-call-to-action-10").length) {
        lightbox_10 = new fusepump.lightbox.buynow(20184);
        document.getElementById("lightbox-call-to-action-10").addEventListener("click", function() {
            lightbox_10.show();
        });
    }
    if (t("#lightbox-call-to-action-40").length) {
        lightbox_40 = new fusepump.lightbox.buynow(20184);
        document.getElementById("lightbox-call-to-action-40").addEventListener("click", function() {
            lightbox_40.show();
        });
    }
    lightbox_1 = new fusepump.lightbox.buynow(19452);
    document.getElementById("lightbox-call-to-action-1").addEventListener("click", function() {
        lightbox_1.show();
    }), lightbox_2 = new fusepump.lightbox.buynow(20183);
    document.getElementById("lightbox-call-to-action-2").addEventListener("click", function() {
        lightbox_2.show();
    }), lightbox_3 = new fusepump.lightbox.buynow(19453);
    document.getElementById("lightbox-call-to-action-3").addEventListener("click", function() {
        lightbox_3.show();
    }), lightbox_4 = new fusepump.lightbox.buynow(19450);
    document.getElementById("lightbox-call-to-action-4").addEventListener("click", function() {
        lightbox_4.show();
    }), lightbox_5 = new fusepump.lightbox.buynow(19449);
    document.getElementById("lightbox-call-to-action-5").addEventListener("click", function() {
        lightbox_5.show();
    }), lightbox_11 = new fusepump.lightbox.buynow(19452);
    document.getElementById("lightbox-call-to-action-11").addEventListener("click", function() {
        lightbox_11.show();
    }), lightbox_12 = new fusepump.lightbox.buynow(20183);
    document.getElementById("lightbox-call-to-action-12").addEventListener("click", function() {
        lightbox_12.show();
    }), lightbox_13 = new fusepump.lightbox.buynow(19453);
    document.getElementById("lightbox-call-to-action-13").addEventListener("click", function() {
        lightbox_13.show();
    }), lightbox_14 = new fusepump.lightbox.buynow(19450);
    document.getElementById("lightbox-call-to-action-14").addEventListener("click", function() {
        lightbox_14.show();
    }), lightbox_15 = new fusepump.lightbox.buynow(19449);
    document.getElementById("lightbox-call-to-action-15").addEventListener("click", function() {
        lightbox_15.show();
    }), t("#lightbox-call-to-action-0, #lightbox-call-to-action-1, #lightbox-call-to-action-2, #lightbox-call-to-action-3, #lightbox-call-to-action-4, #lightbox-call-to-action-5, #lightbox-call-to-action-6").click(function(t) {
        t.preventDefault();
    }), t("#lightbox-call-to-action-20, #lightbox-call-to-action-11, #lightbox-call-to-action-12, #lightbox-call-to-action-13, #lightbox-call-to-action-14, #lightbox-call-to-action-15, #lightbox-call-to-action-16, #lightbox-call-to-action-20, #lightbox-call-to-action-40").click(function(t) {
        t.preventDefault();
    });
});

var loadDeferredStyles = function() {
    var t = document.getElementById("deferred-styles"), e = document.createElement("div");
    e.innerHTML = t.textContent, e.firstChild.onload = function() {
        $(".wk-preloading").fadeOut("slow"), $(".slider").slick("refresh"), $(".slider").slick("slickPlay");
    }, document.body.appendChild(e), t.parentElement.removeChild(t);
}, raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;

raf ? raf(function() {
    window.setTimeout(loadDeferredStyles, 0);
}) : window.addEventListener("load", loadDeferredStyles), $(window).on("load", function() {
    $(".slick-arrow-right").click(), $(".slick-arrow-right").click(), $("#main-slider .slider .slide.slick-slide").css("width", "100vw!important"), 
    setTimeout(function() {
        $(".wk-preloading").fadeOut("slow");
    }, 1e3);
});