!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t) {
        var n = (t = t || ee).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(e) {
        var t = !!e && "length" in e && e.length, n = fe.type(e);
        return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function o(e, t, n) {
        return fe.isFunction(t) ? fe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
        }) : t.nodeType ? fe.grep(e, function(e) {
            return e === t !== n;
        }) : "string" != typeof t ? fe.grep(e, function(e) {
            return se.call(t, e) > -1 !== n;
        }) : Se.test(t) ? fe.filter(t, e, n) : (t = fe.filter(t, e), fe.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType;
        }));
    }
    function s(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function r(e) {
        var t = {};
        return fe.each(e.match(Ee) || [], function(e, n) {
            t[n] = !0;
        }), t;
    }
    function a(e) {
        return e;
    }
    function l(e) {
        throw e;
    }
    function c(e, t, n) {
        var i;
        try {
            e && fe.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && fe.isFunction(i = e.then) ? i.call(e, t, n) : t.call(void 0, e);
        } catch (e) {
            n.call(void 0, e);
        }
    }
    function d() {
        ee.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), 
        fe.ready();
    }
    function u() {
        this.expando = fe.expando + u.uid++;
    }
    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Me.test(e) ? JSON.parse(e) : e);
    }
    function f(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(Fe, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = p(n);
            } catch (e) {}
            Ne.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function h(e, t, n, i) {
        var o, s = 1, r = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return fe.css(e, t, "");
        }, l = a(), c = n && n[3] || (fe.cssNumber[t] ? "" : "px"), d = (fe.cssNumber[t] || "px" !== c && +l) && qe.exec(fe.css(e, t));
        if (d && d[3] !== c) {
            c = c || d[3], n = n || [], d = +l || 1;
            do {
                d /= s = s || ".5", fe.style(e, t, d + c);
            } while (s !== (s = a() / l) && 1 !== s && --r);
        }
        return n && (d = +d || +l || 0, o = n[1] ? d + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, 
        i.start = d, i.end = o)), o;
    }
    function g(e) {
        var t, n = e.ownerDocument, i = e.nodeName, o = We[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = fe.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === o && (o = "block"), We[i] = o, o);
    }
    function m(e, t) {
        for (var n, i, o = [], s = 0, r = e.length; s < r; s++) (i = e[s]).style && (n = i.style.display, 
        t ? ("none" === n && (o[s] = Oe.get(i, "display") || null, o[s] || (i.style.display = "")), 
        "" === i.style.display && ze(i) && (o[s] = g(i))) : "none" !== n && (o[s] = "none", 
        Oe.set(i, "display", n)));
        for (s = 0; s < r; s++) null != o[s] && (e[s].style.display = o[s]);
        return e;
    }
    function v(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && fe.nodeName(e, t) ? fe.merge([ e ], n) : n;
    }
    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"));
    }
    function b(e, t, n, i, o) {
        for (var s, r, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++) if ((s = e[f]) || 0 === s) if ("object" === fe.type(s)) fe.merge(p, s.nodeType ? [ s ] : s); else if (Ue.test(s)) {
            for (r = r || u.appendChild(t.createElement("div")), a = (Xe.exec(s) || [ "", "" ])[1].toLowerCase(), 
            l = Ye[a] || Ye._default, r.innerHTML = l[1] + fe.htmlPrefilter(s) + l[2], d = l[0]; d--; ) r = r.lastChild;
            fe.merge(p, r.childNodes), (r = u.firstChild).textContent = "";
        } else p.push(t.createTextNode(s));
        for (u.textContent = "", f = 0; s = p[f++]; ) if (i && fe.inArray(s, i) > -1) o && o.push(s); else if (c = fe.contains(s.ownerDocument, s), 
        r = v(u.appendChild(s), "script"), c && y(r), n) for (d = 0; s = r[d++]; ) _e.test(s.type || "") && n.push(s);
        return u;
    }
    function w() {
        return !0;
    }
    function x() {
        return !1;
    }
    function T() {
        try {
            return ee.activeElement;
        } catch (e) {}
    }
    function S(e, t, n, i, o, s) {
        var r, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) S(e, a, n, i, t[a], s);
            return e;
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, 
        i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = x; else if (!o) return e;
        return 1 === s && (r = o, o = function(e) {
            return fe().off(e), r.apply(this, arguments);
        }, o.guid = r.guid || (r.guid = fe.guid++)), e.each(function() {
            fe.event.add(this, t, o, i, n);
        });
    }
    function k(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e;
    }
    function C(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function $(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function P(e, t) {
        var n, i, o, s, r, a, l, c;
        if (1 === t.nodeType) {
            if (Oe.hasData(e) && (s = Oe.access(e), r = Oe.set(t, s), c = s.events)) {
                delete r.handle, r.events = {};
                for (o in c) for (n = 0, i = c[o].length; n < i; n++) fe.event.add(t, o, c[o][n]);
            }
            Ne.hasData(e) && (a = Ne.access(e), l = fe.extend({}, a), Ne.set(t, l));
        }
    }
    function E(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function A(e, t, i, o) {
        t = ie.apply([], t);
        var s, r, a, l, c, d, u = 0, p = e.length, f = p - 1, h = t[0], g = fe.isFunction(h);
        if (g || p > 1 && "string" == typeof h && !ue.checkClone && et.test(h)) return e.each(function(n) {
            var s = e.eq(n);
            g && (t[0] = h.call(this, n, s.html())), A(s, t, i, o);
        });
        if (p && (s = b(t, e[0].ownerDocument, !1, e, o), r = s.firstChild, 1 === s.childNodes.length && (s = r), 
        r || o)) {
            for (l = (a = fe.map(v(s, "script"), C)).length; u < p; u++) c = s, u !== f && (c = fe.clone(c, !0, !0), 
            l && fe.merge(a, v(c, "script"))), i.call(e[u], c, u);
            if (l) for (d = a[a.length - 1].ownerDocument, fe.map(a, $), u = 0; u < l; u++) c = a[u], 
            _e.test(c.type || "") && !Oe.access(c, "globalEval") && fe.contains(d, c) && (c.src ? fe._evalUrl && fe._evalUrl(c.src) : n(c.textContent.replace(nt, ""), d));
        }
        return e;
    }
    function L(e, t, n) {
        for (var i, o = t ? fe.filter(t, e) : e, s = 0; null != (i = o[s]); s++) n || 1 !== i.nodeType || fe.cleanData(v(i)), 
        i.parentNode && (n && fe.contains(i.ownerDocument, i) && y(v(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function j(e, t, n) {
        var i, o, s, r, a = e.style;
        return (n = n || st(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || fe.contains(e.ownerDocument, e) || (r = fe.style(e, t)), 
        !ue.pixelMarginRight() && ot.test(r) && it.test(t) && (i = a.width, o = a.minWidth, 
        s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, 
        a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r;
    }
    function D(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }
    function O(e) {
        if (e in dt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ct.length; n--; ) if ((e = ct[n] + t) in dt) return e;
    }
    function N(e, t, n) {
        var i = qe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function M(e, t, n, i, o) {
        var s, r = 0;
        for (s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; s < 4; s += 2) "margin" === n && (r += fe.css(e, n + Ie[s], !0, o)), 
        i ? ("content" === n && (r -= fe.css(e, "padding" + Ie[s], !0, o)), "margin" !== n && (r -= fe.css(e, "border" + Ie[s] + "Width", !0, o))) : (r += fe.css(e, "padding" + Ie[s], !0, o), 
        "padding" !== n && (r += fe.css(e, "border" + Ie[s] + "Width", !0, o)));
        return r;
    }
    function F(e, t, n) {
        var i, o = !0, s = st(e), r = "border-box" === fe.css(e, "boxSizing", !1, s);
        if (e.getClientRects().length && (i = e.getBoundingClientRect()[t]), i <= 0 || null == i) {
            if (((i = j(e, t, s)) < 0 || null == i) && (i = e.style[t]), ot.test(i)) return i;
            o = r && (ue.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
        }
        return i + M(e, t, n || (r ? "border" : "content"), o, s) + "px";
    }
    function H(e, t, n, i, o) {
        return new H.prototype.init(e, t, n, i, o);
    }
    function q() {
        pt && (e.requestAnimationFrame(q), fe.fx.tick());
    }
    function I() {
        return e.setTimeout(function() {
            ut = void 0;
        }), ut = fe.now();
    }
    function z(e, t) {
        var n, i = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = Ie[i], o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
    }
    function R(e, t, n) {
        for (var i, o = (B.tweeners[t] || []).concat(B.tweeners["*"]), s = 0, r = o.length; s < r; s++) if (i = o[s].call(n, t, e)) return i;
    }
    function W(e, t) {
        var n, i, o, s, r;
        for (n in e) if (i = fe.camelCase(n), o = t[i], s = e[n], fe.isArray(s) && (o = s[1], 
        s = e[n] = s[0]), n !== i && (e[i] = s, delete e[n]), (r = fe.cssHooks[i]) && "expand" in r) {
            s = r.expand(s), delete e[i];
            for (n in s) n in e || (e[n] = s[n], t[n] = o);
        } else t[i] = o;
    }
    function B(e, t, n) {
        var i, o, s = 0, r = B.prefilters.length, a = fe.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (o) return !1;
            for (var t = ut || I(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(i);
            return a.notifyWith(e, [ c, i, n ]), i < 1 && r ? n : (a.resolveWith(e, [ c ]), 
            !1);
        }, c = a.promise({
            elem: e,
            props: fe.extend({}, t),
            opts: fe.extend(!0, {
                specialEasing: {},
                easing: fe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ut || I(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = fe.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i), i;
            },
            stop: function(t) {
                var n = 0, i = t ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; n < i; n++) c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [ c, 1, 0 ]), a.resolveWith(e, [ c, t ])) : a.rejectWith(e, [ c, t ]), 
                this;
            }
        }), d = c.props;
        for (W(d, c.opts.specialEasing); s < r; s++) if (i = B.prefilters[s].call(c, e, d, c.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(c.elem, c.opts.queue).stop = fe.proxy(i.stop, i)), 
        i;
        return fe.map(d, R, c), fe.isFunction(c.opts.start) && c.opts.start.call(e, c), 
        fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
    }
    function X(e) {
        return (e.match(Ee) || []).join(" ");
    }
    function _(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function Y(e, t, n, i) {
        var o;
        if (fe.isArray(t)) fe.each(t, function(t, o) {
            n || kt.test(e) ? i(e, o) : Y(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i);
        }); else if (n || "object" !== fe.type(t)) i(e, t); else for (o in t) Y(e + "[" + o + "]", t[o], n, i);
    }
    function U(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0, s = t.toLowerCase().match(Ee) || [];
            if (fe.isFunction(n)) for (;i = s[o++]; ) "+" === i[0] ? (i = i.slice(1) || "*", 
            (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function V(e, t, n, i) {
        function o(a) {
            var l;
            return s[a] = !0, fe.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), 
                o(c), !1);
            }), l;
        }
        var s = {}, r = e === Ft;
        return o(t.dataTypes[0]) || !s["*"] && o("*");
    }
    function G(e, t) {
        var n, i, o = fe.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && fe.extend(!0, e, i), e;
    }
    function Q(e, t, n) {
        for (var i, o, s, r, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), 
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (o in a) if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break;
        }
        if (l[0] in n) s = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    s = o;
                    break;
                }
                r || (r = o);
            }
            s = s || r;
        }
        if (s) return s !== l[0] && l.unshift(s), n[s];
    }
    function Z(e, t, n, i) {
        var o, s, r, a, l, c = {}, d = e.dataTypes.slice();
        if (d[1]) for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
        for (s = d.shift(); s; ) if (e.responseFields[s] && (n[e.responseFields[s]] = t), 
        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift()) if ("*" === s) s = l; else if ("*" !== l && l !== s) {
            if (!(r = c[l + " " + s] || c["* " + s])) for (o in c) if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                break;
            }
            if (!0 !== r) if (r && e.throws) t = r(t); else try {
                t = r(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: r ? e : "No conversion from " + l + " to " + s
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    function J(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var K = [], ee = e.document, te = Object.getPrototypeOf, ne = K.slice, ie = K.concat, oe = K.push, se = K.indexOf, re = {}, ae = re.toString, le = re.hasOwnProperty, ce = le.toString, de = ce.call(Object), ue = {}, pe = "3.1.1", fe = function(e, t) {
        return new fe.fn.init(e, t);
    }, he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ge = /^-ms-/, me = /-([a-z])/g, ve = function(e, t) {
        return t.toUpperCase();
    };
    fe.fn = fe.prototype = {
        jquery: pe,
        constructor: fe,
        length: 0,
        toArray: function() {
            return ne.call(this);
        },
        get: function(e) {
            return null == e ? ne.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return fe.each(this, e);
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(ne.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: oe,
        sort: K.sort,
        splice: K.splice
    }, fe.extend = fe.fn.extend = function() {
        var e, t, n, i, o, s, r = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || fe.isFunction(r) || (r = {}), 
        a === l && (r = this, a--); a < l; a++) if (null != (e = arguments[a])) for (t in e) n = r[t], 
        i = e[t], r !== i && (c && i && (fe.isPlainObject(i) || (o = fe.isArray(i))) ? (o ? (o = !1, 
        s = n && fe.isArray(n) ? n : []) : s = n && fe.isPlainObject(n) ? n : {}, r[t] = fe.extend(c, s, i)) : void 0 !== i && (r[t] = i));
        return r;
    }, fe.extend({
        expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = fe.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ae.call(e) || (t = te(e)) && ("function" != typeof (n = le.call(t, "constructor") && t.constructor) || ce.call(n) !== de));
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[ae.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            n(e);
        },
        camelCase: function(e) {
            return e.replace(ge, "ms-").replace(me, ve);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t) {
            var n, o = 0;
            if (i(e)) for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++) ; else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(he, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? fe.merge(n, "string" == typeof e ? [ e ] : e) : oe.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e;
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, s = e.length, r = !n; o < s; o++) !t(e[o], o) !== r && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var o, s, r = 0, a = [];
            if (i(e)) for (o = e.length; r < o; r++) null != (s = t(e[r], r, n)) && a.push(s); else for (r in e) null != (s = t(e[r], r, n)) && a.push(s);
            return ie.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            if ("string" == typeof t && (n = e[t], t = e, e = n), fe.isFunction(e)) return i = ne.call(arguments, 2), 
            o = function() {
                return e.apply(t || this, i.concat(ne.call(arguments)));
            }, o.guid = e.guid = e.guid || fe.guid++, o;
        },
        now: Date.now,
        support: ue
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = K[Symbol.iterator]), 
    fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        re["[object " + t + "]"] = t.toLowerCase();
    });
    var ye = function(e) {
        function t(e, t, n, i) {
            var o, s, r, a, l, d, p, f = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : I) !== j && L(t), t = t || j, O)) {
                if (11 !== h && (l = ge.exec(e))) if (o = l[1]) {
                    if (9 === h) {
                        if (!(r = t.getElementById(o))) return n;
                        if (r.id === o) return n.push(r), n;
                    } else if (f && (r = f.getElementById(o)) && H(t, r) && r.id === o) return n.push(r), 
                    n;
                } else {
                    if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                    if ((o = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), 
                    n;
                }
                if (w.qsa && !X[e + " "] && (!N || !N.test(e))) {
                    if (1 !== h) f = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, we) : t.setAttribute("id", a = q), 
                        s = (d = k(e)).length; s--; ) d[s] = "#" + a + " " + u(d[s]);
                        p = d.join(","), f = me.test(e) && c(t.parentNode) || t;
                    }
                    if (p) try {
                        return Q.apply(n, f.querySelectorAll(p)), n;
                    } catch (e) {} finally {
                        a === q && t.removeAttribute("id");
                    }
                }
            }
            return $(e.replace(se, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[q] = !0, e;
        }
        function o(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function s(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) x.attrHandle[n[i]] = t;
        }
        function r(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function a(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e;
            };
        }
        function l(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var o, s = e([], n.length, t), r = s.length; r--; ) n[o = s[r]] && (n[o] = !(i[o] = n[o]));
                });
            });
        }
        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function d() {}
        function u(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function p(e, t, n) {
            var i = t.dir, o = t.next, s = o || i, r = n && "parentNode" === s, a = R++;
            return t.first ? function(t, n, o) {
                for (;t = t[i]; ) if (1 === t.nodeType || r) return e(t, n, o);
                return !1;
            } : function(t, n, l) {
                var c, d, u, p = [ z, a ];
                if (l) {
                    for (;t = t[i]; ) if ((1 === t.nodeType || r) && e(t, n, l)) return !0;
                } else for (;t = t[i]; ) if (1 === t.nodeType || r) if (u = t[q] || (t[q] = {}), 
                d = u[t.uniqueID] || (u[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t; else {
                    if ((c = d[s]) && c[0] === z && c[1] === a) return p[2] = c[2];
                    if (d[s] = p, p[2] = e(t, n, l)) return !0;
                }
                return !1;
            };
        }
        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var o = e.length; o--; ) if (!e[o](t, n, i)) return !1;
                return !0;
            } : e[0];
        }
        function h(e, n, i) {
            for (var o = 0, s = n.length; o < s; o++) t(e, n[o], i);
            return i;
        }
        function g(e, t, n, i, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++) (s = e[a]) && (n && !n(s, i, o) || (r.push(s), 
            c && t.push(a)));
            return r;
        }
        function m(e, t, n, o, s, r) {
            return o && !o[q] && (o = m(o)), s && !s[q] && (s = m(s, r)), i(function(i, r, a, l) {
                var c, d, u, p = [], f = [], m = r.length, v = i || h(t || "*", a.nodeType ? [ a ] : a, []), y = !e || !i && t ? v : g(v, p, e, a, l), b = n ? s || (i ? e : m || o) ? [] : r : y;
                if (n && n(y, b, a, l), o) for (c = g(b, f), o(c, [], a, l), d = c.length; d--; ) (u = c[d]) && (b[f[d]] = !(y[f[d]] = u));
                if (i) {
                    if (s || e) {
                        if (s) {
                            for (c = [], d = b.length; d--; ) (u = b[d]) && c.push(y[d] = u);
                            s(null, b = [], c, l);
                        }
                        for (d = b.length; d--; ) (u = b[d]) && (c = s ? J(i, u) : p[d]) > -1 && (i[c] = !(r[c] = u));
                    }
                } else b = g(b === r ? b.splice(m, b.length) : b), s ? s(null, r, b, l) : Q.apply(r, b);
            });
        }
        function v(e) {
            for (var t, n, i, o = e.length, s = x.relative[e[0].type], r = s || x.relative[" "], a = s ? 1 : 0, l = p(function(e) {
                return e === t;
            }, r, !0), c = p(function(e) {
                return J(t, e) > -1;
            }, r, !0), d = [ function(e, n, i) {
                var o = !s && (i || n !== P) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null, o;
            } ]; a < o; a++) if (n = x.relative[e[a].type]) d = [ p(f(d), n) ]; else {
                if ((n = x.filter[e[a].type].apply(null, e[a].matches))[q]) {
                    for (i = ++a; i < o && !x.relative[e[i].type]; i++) ;
                    return m(a > 1 && f(d), a > 1 && u(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(se, "$1"), n, a < i && v(e.slice(a, i)), i < o && v(e = e.slice(i)), i < o && u(e));
                }
                d.push(n);
            }
            return f(d);
        }
        function y(e, n) {
            var o = n.length > 0, s = e.length > 0, r = function(i, r, a, l, c) {
                var d, u, p, f = 0, h = "0", m = i && [], v = [], y = P, b = i || s && x.find.TAG("*", c), w = z += null == y ? 1 : Math.random() || .1, T = b.length;
                for (c && (P = r === j || r || c); h !== T && null != (d = b[h]); h++) {
                    if (s && d) {
                        for (u = 0, r || d.ownerDocument === j || (L(d), a = !O); p = e[u++]; ) if (p(d, r || j, a)) {
                            l.push(d);
                            break;
                        }
                        c && (z = w);
                    }
                    o && ((d = !p && d) && f--, i && m.push(d));
                }
                if (f += h, o && h !== f) {
                    for (u = 0; p = n[u++]; ) p(m, v, r, a);
                    if (i) {
                        if (f > 0) for (;h--; ) m[h] || v[h] || (v[h] = V.call(l));
                        v = g(v);
                    }
                    Q.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
                }
                return c && (z = w, P = y), m;
            };
            return o ? i(r) : r;
        }
        var b, w, x, T, S, k, C, $, P, E, A, L, j, D, O, N, M, F, H, q = "sizzle" + 1 * new Date(), I = e.document, z = 0, R = 0, W = n(), B = n(), X = n(), _ = function(e, t) {
            return e === t && (A = !0), 0;
        }, Y = {}.hasOwnProperty, U = [], V = U.pop, G = U.push, Q = U.push, Z = U.slice, J = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", oe = new RegExp(ee + "+", "g"), se = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), re = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ce = new RegExp(ie), de = new RegExp("^" + te + "$"), ue = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, pe = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), ye = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, we = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, xe = function() {
            L();
        }, Te = p(function(e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Q.apply(U = Z.call(I.childNodes), I.childNodes), U[I.childNodes.length].nodeType;
        } catch (e) {
            Q = {
                apply: U.length ? function(e, t) {
                    G.apply(e, Z.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        w = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, L = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : I;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, D = j.documentElement, 
            O = !S(j), I !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), 
            w.attributes = o(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), w.getElementsByTagName = o(function(e) {
                return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length;
            }), w.getElementsByClassName = he.test(j.getElementsByClassName), w.getById = o(function(e) {
                return D.appendChild(e).id = q, !j.getElementsByName || !j.getElementsByName(q).length;
            }), w.getById ? (x.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (x.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }, x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n, i, o, s = t.getElementById(e);
                    if (s) {
                        if ((n = s.getAttributeNode("id")) && n.value === e) return [ s ];
                        for (o = t.getElementsByName(e), i = 0; s = o[i++]; ) if ((n = s.getAttributeNode("id")) && n.value === e) return [ s ];
                    }
                    return [];
                }
            }), x.find.TAG = w.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], o = 0, s = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = s[o++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return s;
            }, x.find.CLASS = w.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e);
            }, M = [], N = [], (w.qsa = he.test(j.querySelectorAll)) && (o(function(e) {
                D.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ee + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || N.push("\\[" + ee + "*(?:value|" + K + ")"), 
                e.querySelectorAll("[id~=" + q + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), 
                e.querySelectorAll("a#" + q + "+*").length || N.push(".#.+[+~]");
            }), o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ee + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"), 
                D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), N.push(",.*:");
            })), (w.matchesSelector = he.test(F = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                w.disconnectedMatch = F.call(e, "*"), F.call(e, "[s!='']:x"), M.push("!=", ie);
            }), N = N.length && new RegExp(N.join("|")), M = M.length && new RegExp(M.join("|")), 
            t = he.test(D.compareDocumentPosition), H = t || he.test(D.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, _ = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === I && H(I, e) ? -1 : t === j || t.ownerDocument === I && H(I, t) ? 1 : E ? J(E, e) - J(E, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0, o = e.parentNode, s = t.parentNode, a = [ e ], l = [ t ];
                if (!o || !s) return e === j ? -1 : t === j ? 1 : o ? -1 : s ? 1 : E ? J(E, e) - J(E, t) : 0;
                if (o === s) return r(e, t);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (n = t; n = n.parentNode; ) l.unshift(n);
                for (;a[i] === l[i]; ) i++;
                return i ? r(a[i], l[i]) : a[i] === I ? -1 : l[i] === I ? 1 : 0;
            }, j) : j;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && L(e), n = n.replace(le, "='$1']"), w.matchesSelector && O && !X[n + " "] && (!M || !M.test(n)) && (!N || !N.test(n))) try {
                var i = F.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
            } catch (e) {}
            return t(n, j, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && L(e), H(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && L(e);
            var n = x.attrHandle[t.toLowerCase()], i = n && Y.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : w.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, t.escape = function(e) {
            return (e + "").replace(be, we);
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (A = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(_), A) {
                for (;t = e[o++]; ) t === e[o] && (i = n.push(o));
                for (;i--; ) e.splice(n[i], 1);
            }
            return E = null, e;
        }, T = t.getText = function(e) {
            var t, n = "", i = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (;t = e[i++]; ) n += T(t);
            return n;
        }, (x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ue,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, i) {
                    return function(o) {
                        var s = t.attr(o, e);
                        return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(e, t, n, i, o) {
                    var s = "nth" !== e.slice(0, 3), r = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === o ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var c, d, u, p, f, h, g = s !== r ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (m) {
                            if (s) {
                                for (;g; ) {
                                    for (p = t; p = p[g]; ) if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ r ? m.firstChild : m.lastChild ], r && y) {
                                for (b = (f = (c = (d = (u = (p = m)[q] || (p[q] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === z && c[1]) && c[2], 
                                p = f && m.childNodes[f]; p = ++f && p && p[g] || (b = f = 0) || h.pop(); ) if (1 === p.nodeType && ++b && p === t) {
                                    d[e] = [ z, f, b ];
                                    break;
                                }
                            } else if (y && (p = t, u = p[q] || (p[q] = {}), d = u[p.uniqueID] || (u[p.uniqueID] = {}), 
                            c = d[e] || [], f = c[0] === z && c[1], b = f), !1 === b) for (;(p = ++f && p && p[g] || (b = f = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (u = p[q] || (p[q] = {}), 
                            d = u[p.uniqueID] || (u[p.uniqueID] = {}), d[e] = [ z, b ]), p !== t)); ) ;
                            return (b -= o) === i || b % i == 0 && b / i >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var o, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return s[q] ? s(n) : s.length > 1 ? (o = [ e, e, "", n ], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, o = s(e, n), r = o.length; r--; ) i = J(e, o[r]), e[i] = !(t[i] = o[r]);
                    }) : function(e) {
                        return s(e, 0, o);
                    }) : s;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], o = C(e.replace(se, "$1"));
                    return o[q] ? i(function(e, t, n, i) {
                        for (var s, r = o(e, null, i, []), a = e.length; a--; ) (s = r[a]) && (e[a] = !(t[a] = s));
                    }) : function(e, i, s) {
                        return t[0] = e, o(t, null, s, n), t[0] = null, !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return e = e.replace(ve, ye), function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, ye).toLowerCase(), 
                    function(t) {
                        var n;
                        do {
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === D;
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !x.pseudos.empty(e);
                },
                header: function(e) {
                    return fe.test(e.nodeName);
                },
                input: function(e) {
                    return pe.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: l(function() {
                    return [ 0 ];
                }),
                last: l(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: l(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                    return e;
                }),
                gt: l(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = x.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }(b);
        for (b in {
            submit: !0,
            reset: !0
        }) x.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }(b);
        return d.prototype = x.filters = x.pseudos, x.setFilters = new d(), k = t.tokenize = function(e, n) {
            var i, o, s, r, a, l, c, d = B[e + " "];
            if (d) return n ? 0 : d.slice(0);
            for (a = e, l = [], c = x.preFilter; a; ) {
                i && !(o = re.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), 
                i = !1, (o = ae.exec(a)) && (i = o.shift(), s.push({
                    value: i,
                    type: o[0].replace(se, " ")
                }), a = a.slice(i.length));
                for (r in x.filter) !(o = ue[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), 
                s.push({
                    value: i,
                    type: r,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length : a ? t.error(e) : B(e, l).slice(0);
        }, C = t.compile = function(e, t) {
            var n, i = [], o = [], s = X[e + " "];
            if (!s) {
                for (t || (t = k(e)), n = t.length; n--; ) (s = v(t[n]))[q] ? i.push(s) : o.push(s);
                (s = X(e, y(o, i))).selector = e;
            }
            return s;
        }, $ = t.select = function(e, t, n, i) {
            var o, s, r, a, l, d = "function" == typeof e && e, p = !i && k(e = d.selector || e);
            if (n = n || [], 1 === p.length) {
                if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (r = s[0]).type && 9 === t.nodeType && O && x.relative[s[1].type]) {
                    if (!(t = (x.find.ID(r.matches[0].replace(ve, ye), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(s.shift().value.length);
                }
                for (o = ue.needsContext.test(e) ? 0 : s.length; o-- && (r = s[o], !x.relative[a = r.type]); ) if ((l = x.find[a]) && (i = l(r.matches[0].replace(ve, ye), me.test(s[0].type) && c(t.parentNode) || t))) {
                    if (s.splice(o, 1), !(e = i.length && u(s))) return Q.apply(n, i), n;
                    break;
                }
            }
            return (d || C(e, p))(i, t, !O, n, !t || me.test(e) && c(t.parentNode) || t), n;
        }, w.sortStable = q.split("").sort(_).join("") === q, w.detectDuplicates = !!A, 
        L(), w.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("fieldset"));
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || s("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), w.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || s("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), o(function(e) {
            return null == e.getAttribute("disabled");
        }) || s(K, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), t;
    }(e);
    fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, 
    fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains, fe.escapeSelector = ye.escape;
    var be = function(e, t, n) {
        for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (o && fe(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, we = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, xe = fe.expr.match.needsContext, Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, Se = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [ i ] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, fe.fn.extend({
        find: function(e) {
            var t, n, i = this.length, o = this;
            if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                for (t = 0; t < i; t++) if (fe.contains(o[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) fe.find(e, o[t], n);
            return i > 1 ? fe.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0));
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && xe.test(e) ? fe(e) : e || [], !1).length;
        }
    });
    var ke, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (fe.fn.init = function(e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || ke, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : Ce.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ee, !0)), 
                Te.test(i[1]) && fe.isPlainObject(t)) for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = ee.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : fe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this);
    }).prototype = fe.fn, ke = fe(ee);
    var $e = /^(?:parents|prev(?:Until|All))/, Pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fe.fn.extend({
        has: function(e) {
            var t = fe(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (fe.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, i = 0, o = this.length, s = [], r = "string" != typeof e && fe(e);
            if (!xe.test(e)) for (;i < o; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                s.push(n);
                break;
            }
            return this.pushStack(s.length > 1 ? fe.uniqueSort(s) : s);
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(fe(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return be(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n);
        },
        next: function(e) {
            return s(e, "nextSibling");
        },
        prev: function(e) {
            return s(e, "previousSibling");
        },
        nextAll: function(e) {
            return be(e, "nextSibling");
        },
        prevAll: function(e) {
            return be(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n);
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return we(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || fe.merge([], e.childNodes);
        }
    }, function(e, t) {
        fe.fn[e] = function(n, i) {
            var o = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = fe.filter(i, o)), 
            this.length > 1 && (Pe[e] || fe.uniqueSort(o), $e.test(e) && o.reverse()), this.pushStack(o);
        };
    });
    var Ee = /[^\x20\t\r\n\f]+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? r(e) : fe.extend({}, e);
        var t, n, i, o, s = [], a = [], l = -1, c = function() {
            for (o = e.once, i = t = !0; a.length; l = -1) for (n = a.shift(); ++l < s.length; ) !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, 
            n = !1);
            e.memory || (n = !1), t = !1, o && (s = n ? [] : "");
        }, d = {
            add: function() {
                return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
                    fe.each(n, function(n, i) {
                        fe.isFunction(i) ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== fe.type(i) && t(i);
                    });
                }(arguments), n && !t && c()), this;
            },
            remove: function() {
                return fe.each(arguments, function(e, t) {
                    for (var n; (n = fe.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? fe.inArray(e, s) > -1 : s.length > 0;
            },
            empty: function() {
                return s && (s = []), this;
            },
            disable: function() {
                return o = a = [], s = n = "", this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return o = a = [], n || t || (s = n = ""), this;
            },
            locked: function() {
                return !!o;
            },
            fireWith: function(e, n) {
                return o || (n = n || [], n = [ e, n.slice ? n.slice() : n ], a.push(n), t || c()), 
                this;
            },
            fire: function() {
                return d.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return d;
    }, fe.extend({
        Deferred: function(t) {
            var n = [ [ "notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2 ], [ "resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", o = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return o.then(null, e);
                },
                pipe: function() {
                    var e = arguments;
                    return fe.Deferred(function(t) {
                        fe.each(n, function(n, i) {
                            var o = fe.isFunction(e[i[4]]) && e[i[4]];
                            s[i[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && fe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                then: function(t, i, o) {
                    function s(t, n, i, o) {
                        return function() {
                            var c = this, d = arguments, u = function() {
                                var e, u;
                                if (!(t < r)) {
                                    if ((e = i.apply(c, d)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                    u = e && ("object" == typeof e || "function" == typeof e) && e.then, fe.isFunction(u) ? o ? u.call(e, s(r, n, a, o), s(r, n, l, o)) : (r++, 
                                    u.call(e, s(r, n, a, o), s(r, n, l, o), s(r, n, a, n.notifyWith))) : (i !== a && (c = void 0, 
                                    d = [ e ]), (o || n.resolveWith)(c, d));
                                }
                            }, p = o ? u : function() {
                                try {
                                    u();
                                } catch (e) {
                                    fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= r && (i !== l && (c = void 0, 
                                    d = [ e ]), n.rejectWith(c, d));
                                }
                            };
                            t ? p() : (fe.Deferred.getStackHook && (p.stackTrace = fe.Deferred.getStackHook()), 
                            e.setTimeout(p));
                        };
                    }
                    var r = 0;
                    return fe.Deferred(function(e) {
                        n[0][3].add(s(0, e, fe.isFunction(o) ? o : a, e.notifyWith)), n[1][3].add(s(0, e, fe.isFunction(t) ? t : a)), 
                        n[2][3].add(s(0, e, fe.isFunction(i) ? i : l));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? fe.extend(e, o) : o;
                }
            }, s = {};
            return fe.each(n, function(e, t) {
                var r = t[2], a = t[5];
                o[t[1]] = r.add, a && r.add(function() {
                    i = a;
                }, n[3 - e][2].disable, n[0][2].lock), r.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                }, s[t[0] + "With"] = r.fireWith;
            }), o.promise(s), t && t.call(s, s), s;
        },
        when: function(e) {
            var t = arguments.length, n = t, i = Array(n), o = ne.call(arguments), s = fe.Deferred(), r = function(e) {
                return function(n) {
                    i[e] = this, o[e] = arguments.length > 1 ? ne.call(arguments) : n, --t || s.resolveWith(i, o);
                };
            };
            if (t <= 1 && (c(e, s.done(r(n)).resolve, s.reject), "pending" === s.state() || fe.isFunction(o[n] && o[n].then))) return s.then();
            for (;n--; ) c(o[n], r(n), s.reject);
            return s.promise();
        }
    });
    var Ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    fe.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ae.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }, fe.readyException = function(t) {
        e.setTimeout(function() {
            throw t;
        });
    };
    var Le = fe.Deferred();
    fe.fn.ready = function(e) {
        return Le.then(e).catch(function(e) {
            fe.readyException(e);
        }), this;
    }, fe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0);
        },
        ready: function(e) {
            (!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || Le.resolveWith(ee, [ fe ]));
        }
    }), fe.ready.then = Le.then, "complete" === ee.readyState || "loading" !== ee.readyState && !ee.documentElement.doScroll ? e.setTimeout(fe.ready) : (ee.addEventListener("DOMContentLoaded", d), 
    e.addEventListener("load", d));
    var je = function(e, t, n, i, o, s, r) {
        var a = 0, l = e.length, c = null == n;
        if ("object" === fe.type(n)) {
            o = !0;
            for (a in n) je(e, t, a, n[a], !0, s, r);
        } else if (void 0 !== i && (o = !0, fe.isFunction(i) || (r = !0), c && (r ? (t.call(e, i), 
        t = null) : (c = t, t = function(e, t, n) {
            return c.call(fe(e), n);
        })), t)) for (;a < l; a++) t(e[a], n, r ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : c ? t.call(e) : l ? t(e[0], n) : s;
    }, De = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    u.uid = 1, u.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, De(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[fe.camelCase(t)] = n; else for (i in t) o[fe.camelCase(i)] = t[i];
            return o;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][fe.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    fe.isArray(t) ? t = t.map(fe.camelCase) : (t = fe.camelCase(t), t = t in i ? [ t ] : t.match(Ee) || []), 
                    n = t.length;
                    for (;n--; ) delete i[t[n]];
                }
                (void 0 === t || fe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !fe.isEmptyObject(t);
        }
    };
    var Oe = new u(), Ne = new u(), Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Fe = /[A-Z]/g;
    fe.extend({
        hasData: function(e) {
            return Ne.hasData(e) || Oe.hasData(e);
        },
        data: function(e, t, n) {
            return Ne.access(e, t, n);
        },
        removeData: function(e, t) {
            Ne.remove(e, t);
        },
        _data: function(e, t, n) {
            return Oe.access(e, t, n);
        },
        _removeData: function(e, t) {
            Oe.remove(e, t);
        }
    }), fe.fn.extend({
        data: function(e, t) {
            var n, i, o, s = this[0], r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = Ne.get(s), 1 === s.nodeType && !Oe.get(s, "hasDataAttrs"))) {
                    for (n = r.length; n--; ) r[n] && 0 === (i = r[n].name).indexOf("data-") && (i = fe.camelCase(i.slice(5)), 
                    f(s, i, o[i]));
                    Oe.set(s, "hasDataAttrs", !0);
                }
                return o;
            }
            return "object" == typeof e ? this.each(function() {
                Ne.set(this, e);
            }) : je(this, function(t) {
                var n;
                if (s && void 0 === t) {
                    if (void 0 !== (n = Ne.get(s, e))) return n;
                    if (void 0 !== (n = f(s, e))) return n;
                } else this.each(function() {
                    Ne.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                Ne.remove(this, e);
            });
        }
    }), fe.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Oe.get(e, t), n && (!i || fe.isArray(n) ? i = Oe.access(e, t, fe.makeArray(n)) : i.push(n)), 
            i || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = fe.queue(e, t), i = n.length, o = n.shift(), s = fe._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), 
            delete s.stop, o.call(e, function() {
                fe.dequeue(e, t);
            }, s)), !i && s && s.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Oe.get(e, n) || Oe.access(e, n, {
                empty: fe.Callbacks("once memory").add(function() {
                    Oe.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), fe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = fe.queue(this, e, t);
                fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, o = fe.Deferred(), s = this, r = this.length, a = function() {
                --i || o.resolveWith(s, [ s ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--; ) (n = Oe.get(s[r], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), o.promise(t);
        }
    });
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, qe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"), Ie = [ "Top", "Right", "Bottom", "Left" ], ze = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display");
    }, Re = function(e, t, n, i) {
        var o, s, r = {};
        for (s in t) r[s] = e.style[s], e.style[s] = t[s];
        o = n.apply(e, i || []);
        for (s in t) e.style[s] = r[s];
        return o;
    }, We = {};
    fe.fn.extend({
        show: function() {
            return m(this, !0);
        },
        hide: function() {
            return m(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ze(this) ? fe(this).show() : fe(this).hide();
            });
        }
    });
    var Be = /^(?:checkbox|radio)$/i, Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, _e = /^$|\/(?:java|ecma)script/i, Ye = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, 
    Ye.th = Ye.td;
    var Ue = /<|&#?\w+;/;
    !function() {
        var e = ee.createDocumentFragment().appendChild(ee.createElement("div")), t = ee.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), ue.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        e.innerHTML = "<textarea>x</textarea>", ue.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Ve = ee.documentElement, Ge = /^key/, Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ze = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var s, r, a, l, c, d, u, p, f, h, g, m = Oe.get(e);
            if (m) for (n.handler && (s = n, n = s.handler, o = s.selector), o && fe.find.matchesSelector(Ve, o), 
            n.guid || (n.guid = fe.guid++), (l = m.events) || (l = m.events = {}), (r = m.handle) || (r = m.handle = function(t) {
                return void 0 !== fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0;
            }), c = (t = (t || "").match(Ee) || [ "" ]).length; c--; ) a = Ze.exec(t[c]) || [], 
            f = g = a[1], h = (a[2] || "").split(".").sort(), f && (u = fe.event.special[f] || {}, 
            f = (o ? u.delegateType : u.bindType) || f, u = fe.event.special[f] || {}, d = fe.extend({
                type: f,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && fe.expr.match.needsContext.test(o),
                namespace: h.join(".")
            }, s), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, r) || e.addEventListener && e.addEventListener(f, r)), 
            u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), 
            fe.event.global[f] = !0);
        },
        remove: function(e, t, n, i, o) {
            var s, r, a, l, c, d, u, p, f, h, g, m = Oe.hasData(e) && Oe.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(Ee) || [ "" ]).length; c--; ) if (a = Ze.exec(t[c]) || [], 
                f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                    for (u = fe.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], 
                    a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--; ) d = p[s], 
                    !o && g !== d.origType || n && n.guid !== d.guid || a && !a.test(d.namespace) || i && i !== d.selector && ("**" !== i || !d.selector) || (p.splice(s, 1), 
                    d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                    r && !p.length && (u.teardown && !1 !== u.teardown.call(e, h, m.handle) || fe.removeEvent(e, f, m.handle), 
                    delete l[f]);
                } else for (f in l) fe.event.remove(e, f + t[c], n, i, !0);
                fe.isEmptyObject(l) && Oe.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, o, s, r, a = fe.event.fix(e), l = new Array(arguments.length), c = (Oe.get(this, "events") || {})[a.type] || [], d = fe.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, a)) {
                for (r = fe.event.handlers.call(this, a, c), t = 0; (o = r[t++]) && !a.isPropagationStopped(); ) for (a.currentTarget = o.elem, 
                n = 0; (s = o.handlers[n++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, 
                a.data = s.data, void 0 !== (i = ((fe.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), 
                a.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(e, t) {
            var n, i, o, s, r, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (;c !== this; c = c.parentNode || this) if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                for (s = [], r = {}, n = 0; n < l; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? fe(o, this).index(c) > -1 : fe.find(o, this, null, [ c ]).length), 
                r[o] && s.push(i);
                s.length && a.push({
                    elem: c,
                    handlers: s
                });
            }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a;
        },
        addProp: function(e, t) {
            Object.defineProperty(fe.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: fe.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e];
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    });
                }
            });
        },
        fix: function(e) {
            return e[fe.expando] ? e : new fe.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && fe.nodeName(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, fe.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, fe.Event = function(e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : x, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void (this[fe.expando] = !0)) : new fe.Event(e, t);
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, fe.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, fe.event.addProp), fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, o = e.relatedTarget, s = e.handleObj;
                return o && (o === i || fe.contains(i, o)) || (e.type = s.origType, n = s.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), fe.fn.extend({
        on: function(e, t, n, i) {
            return S(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return S(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = x), 
            this.each(function() {
                fe.event.remove(this, e, n, t);
            });
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ke = /<script|<style|<link/i, et = /checked\s*(?:[^=]|=\s*.checked.)/i, tt = /^true\/(.*)/, nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, o, s, r, a = e.cloneNode(!0), l = fe.contains(e.ownerDocument, e);
            if (!(ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e))) for (r = v(a), 
            s = v(e), i = 0, o = s.length; i < o; i++) E(s[i], r[i]);
            if (t) if (n) for (s = s || v(e), r = r || v(a), i = 0, o = s.length; i < o; i++) P(s[i], r[i]); else P(e, a);
            return (r = v(a, "script")).length > 0 && y(r, !l && v(e, "script")), a;
        },
        cleanData: function(e) {
            for (var t, n, i, o = fe.event.special, s = 0; void 0 !== (n = e[s]); s++) if (De(n)) {
                if (t = n[Oe.expando]) {
                    if (t.events) for (i in t.events) o[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, t.handle);
                    n[Oe.expando] = void 0;
                }
                n[Ne.expando] && (n[Ne.expando] = void 0);
            }
        }
    }), fe.fn.extend({
        detach: function(e) {
            return L(this, e, !0);
        },
        remove: function(e) {
            return L(this, e);
        },
        text: function(e) {
            return je(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return A(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return A(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return A(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(v(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return fe.clone(this, e, t);
            });
        },
        html: function(e) {
            return je(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ke.test(e) && !Ye[(Xe.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (;n < i; n++) 1 === (t = this[n] || {}).nodeType && (fe.cleanData(v(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return A(this, arguments, function(t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(v(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var n, i = [], o = fe(e), s = o.length - 1, r = 0; r <= s; r++) n = r === s ? this : this.clone(!0), 
            fe(o[r])[t](n), oe.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var it = /^margin/, ot = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"), st = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    };
    !function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", Ve.appendChild(r);
                var t = e.getComputedStyle(a);
                n = "1%" !== t.top, s = "2px" === t.marginLeft, i = "4px" === t.width, a.style.marginRight = "50%", 
                o = "4px" === t.marginRight, Ve.removeChild(r), a = null;
            }
        }
        var n, i, o, s, r = ee.createElement("div"), a = ee.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        ue.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        r.appendChild(a), fe.extend(ue, {
            pixelPosition: function() {
                return t(), n;
            },
            boxSizingReliable: function() {
                return t(), i;
            },
            pixelMarginRight: function() {
                return t(), o;
            },
            reliableMarginLeft: function() {
                return t(), s;
            }
        }));
    }();
    var rt = /^(none|table(?!-c[ea]).+)/, at = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, lt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ct = [ "Webkit", "Moz", "ms" ], dt = ee.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = j(e, "opacity");
                        return "" === n ? "1" : n;
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
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = fe.camelCase(t), l = e.style;
                return t = fe.cssProps[a] || (fe.cssProps[a] = O(a) || a), r = fe.cssHooks[t] || fe.cssHooks[a], 
                void 0 === n ? r && "get" in r && void 0 !== (o = r.get(e, !1, i)) ? o : l[t] : ("string" == (s = typeof n) && (o = qe.exec(n)) && o[1] && (n = h(e, t, o), 
                s = "number"), void (null != n && n === n && ("number" === s && (n += o && o[3] || (fe.cssNumber[a] ? "" : "px")), 
                ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                r && "set" in r && void 0 === (n = r.set(e, n, i)) || (l[t] = n))));
            }
        },
        css: function(e, t, n, i) {
            var o, s, r, a = fe.camelCase(t);
            return t = fe.cssProps[a] || (fe.cssProps[a] = O(a) || a), (r = fe.cssHooks[t] || fe.cssHooks[a]) && "get" in r && (o = r.get(e, !0, n)), 
            void 0 === o && (o = j(e, t, i)), "normal" === o && t in lt && (o = lt[t]), "" === n || n ? (s = parseFloat(o), 
            !0 === n || isFinite(s) ? s || 0 : o) : o;
        }
    }), fe.each([ "height", "width" ], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !rt.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : Re(e, at, function() {
                    return F(e, t, i);
                });
            },
            set: function(e, n, i) {
                var o, s = i && st(e), r = i && M(e, t, i, "border-box" === fe.css(e, "boxSizing", !1, s), s);
                return r && (o = qe.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = fe.css(e, t)), 
                N(0, n, r);
            }
        };
    }), fe.cssHooks.marginLeft = D(ue.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [ n ]; i < 4; i++) o[e + Ie[i] + t] = s[i] || s[i - 2] || s[0];
                return o;
            }
        }, it.test(e) || (fe.cssHooks[e + t].set = N);
    }), fe.fn.extend({
        css: function(e, t) {
            return je(this, function(e, t, n) {
                var i, o, s = {}, r = 0;
                if (fe.isArray(t)) {
                    for (i = st(e), o = t.length; r < o; r++) s[t[r]] = fe.css(e, t[r], !1, i);
                    return s;
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t);
            }, e, t, arguments.length > 1);
        }
    }), fe.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, i, o, s) {
            this.elem = e, this.prop = n, this.easing = o || fe.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = i, this.unit = s || (fe.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : H.propHooks._default.set(this), this;
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, fe.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, fe.fx = H.prototype.init, fe.fx.step = {};
    var ut, pt, ft = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
    fe.Animation = fe.extend(B, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return h(n.elem, e, qe.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            fe.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(Ee);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], B.tweeners[n] = B.tweeners[n] || [], 
            B.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var i, o, s, r, a, l, c, d, u = "width" in t || "height" in t, p = this, f = {}, h = e.style, g = e.nodeType && ze(e), v = Oe.get(e, "fxshow");
            n.queue || (null == (r = fe._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, 
            r.empty.fire = function() {
                r.unqueued || a();
            }), r.unqueued++, p.always(function() {
                p.always(function() {
                    r.unqueued--, fe.queue(e, "fx").length || r.empty.fire();
                });
            }));
            for (i in t) if (o = t[i], ft.test(o)) {
                if (delete t[i], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !v || void 0 === v[i]) continue;
                    g = !0;
                }
                f[i] = v && v[i] || fe.style(e, i);
            }
            if ((l = !fe.isEmptyObject(t)) || !fe.isEmptyObject(f)) {
                u && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
                null == (c = v && v.display) && (c = Oe.get(e, "display")), "none" === (d = fe.css(e, "display")) && (c ? d = c : (m([ e ], !0), 
                c = e.style.display || c, d = fe.css(e, "display"), m([ e ]))), ("inline" === d || "inline-block" === d && null != c) && "none" === fe.css(e, "float") && (l || (p.done(function() {
                    h.display = c;
                }), null == c && (d = h.display, c = "none" === d ? "" : d)), h.display = "inline-block")), 
                n.overflow && (h.overflow = "hidden", p.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
                })), l = !1;
                for (i in f) l || (v ? "hidden" in v && (g = v.hidden) : v = Oe.access(e, "fxshow", {
                    display: c
                }), s && (v.hidden = !g), g && m([ e ], !0), p.done(function() {
                    g || m([ e ]), Oe.remove(e, "fxshow");
                    for (i in f) fe.style(e, i, f[i]);
                })), l = R(g ? v[i] : 0, i, p), i in v || (v[i] = l.start, g && (l.end = l.start, 
                l.start = 0));
            }
        } ],
        prefilter: function(e, t) {
            t ? B.prefilters.unshift(e) : B.prefilters.push(e);
        }
    }), fe.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        return fe.fx.off || ee.hidden ? i.duration = 0 : "number" != typeof i.duration && (i.duration in fe.fx.speeds ? i.duration = fe.fx.speeds[i.duration] : i.duration = fe.fx.speeds._default), 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue);
        }, i;
    }, fe.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ze).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(e, t, n, i) {
            var o = fe.isEmptyObject(e), s = fe.speed(t, n, i), r = function() {
                var t = B(this, fe.extend({}, e), s);
                (o || Oe.get(this, "finish")) && t.stop(!0);
            };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, o = null != e && e + "queueHooks", s = fe.timers, r = Oe.get(this);
                if (o) r[o] && r[o].stop && i(r[o]); else for (o in r) r[o] && r[o].stop && ht.test(o) && i(r[o]);
                for (o = s.length; o--; ) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(n), 
                t = !1, s.splice(o, 1));
                !t && n || fe.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = Oe.get(this), i = n[e + "queue"], o = n[e + "queueHooks"], s = fe.timers, r = i ? i.length : 0;
                for (n.finish = !0, fe.queue(this, e, []), o && o.stop && o.stop.call(this, !0), 
                t = s.length; t--; ) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), 
                s.splice(t, 1));
                for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
            });
        }
    }), fe.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = fe.fn[t];
        fe.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, o);
        };
    }), fe.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        fe.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), fe.timers = [], fe.fx.tick = function() {
        var e, t = 0, n = fe.timers;
        for (ut = fe.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || fe.fx.stop(), ut = void 0;
    }, fe.fx.timer = function(e) {
        fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop();
    }, fe.fx.interval = 13, fe.fx.start = function() {
        pt || (pt = e.requestAnimationFrame ? e.requestAnimationFrame(q) : e.setInterval(fe.fx.tick, fe.fx.interval));
    }, fe.fx.stop = function() {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(pt) : e.clearInterval(pt), pt = null;
    }, fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fe.fn.delay = function(t, n) {
        return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o);
            };
        });
    }, function() {
        var e = ee.createElement("input"), t = ee.createElement("select").appendChild(ee.createElement("option"));
        e.type = "checkbox", ue.checkOn = "" !== e.value, ue.optSelected = t.selected, (e = ee.createElement("input")).value = "t", 
        e.type = "radio", ue.radioValue = "t" === e.value;
    }();
    var gt, mt = fe.expr.attrHandle;
    fe.fn.extend({
        attr: function(e, t) {
            return je(this, fe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e);
            });
        }
    }), fe.extend({
        attr: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return void 0 === e.getAttribute ? fe.prop(e, t, n) : (1 === s && fe.isXMLDoc(e) || (o = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? gt : void 0)), 
            void 0 !== n ? null === n ? void fe.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = fe.find.attr(e, t)) ? void 0 : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0, o = t && t.match(Ee);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) e.removeAttribute(n);
        }
    }), gt = {
        set: function(e, t, n) {
            return !1 === t ? fe.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || fe.find.attr;
        mt[t] = function(e, t, i) {
            var o, s, r = t.toLowerCase();
            return i || (s = mt[r], mt[r] = o, o = null != n(e, t, i) ? r : null, mt[r] = s), 
            o;
        };
    });
    var vt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return je(this, fe.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[fe.propFix[e] || e];
            });
        }
    }), fe.extend({
        prop: function(e, t, n) {
            var i, o, s = e.nodeType;
            if (3 !== s && 8 !== s && 2 !== s) return 1 === s && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, 
            o = fe.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ue.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), fe.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        fe.propFix[this.toLowerCase()] = this;
    }), fe.fn.extend({
        addClass: function(e) {
            var t, n, i, o, s, r, a, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).addClass(e.call(this, t, _(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(Ee) || []; n = this[l++]; ) if (o = _(n), 
            i = 1 === n.nodeType && " " + X(o) + " ") {
                for (r = 0; s = t[r++]; ) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                o !== (a = X(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, i, o, s, r, a, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).removeClass(e.call(this, t, _(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(Ee) || []; n = this[l++]; ) if (o = _(n), 
            i = 1 === n.nodeType && " " + X(o) + " ") {
                for (r = 0; s = t[r++]; ) for (;i.indexOf(" " + s + " ") > -1; ) i = i.replace(" " + s + " ", " ");
                o !== (a = X(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, _(this), t), t);
            }) : this.each(function() {
                var t, i, o, s;
                if ("string" === n) for (i = 0, o = fe(this), s = e.match(Ee) || []; t = s[i++]; ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = _(this)) && Oe.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Oe.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + X(_(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var bt = /\r/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = fe.isFunction(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, fe(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : fe.isArray(o) && (o = fe.map(o, function(e) {
                    return null == e ? "" : e + "";
                })), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
            })) : o ? (t = fe.valHooks[o.type] || fe.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(bt, "") : null == n ? "" : n : void 0;
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : X(fe.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options, s = e.selectedIndex, r = "select-one" === e.type, a = r ? null : [], l = r ? s + 1 : o.length;
                    for (i = s < 0 ? l : r ? s : 0; i < l; i++) if (((n = o[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                        if (t = fe(n).val(), r) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, s = fe.makeArray(t), r = o.length; r--; ) i = o[r], 
                    (i.selected = fe.inArray(fe.valHooks.option.get(i), s) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), s;
                }
            }
        }
    }), fe.each([ "radio", "checkbox" ], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                if (fe.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1;
            }
        }, ue.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var wt = /^(?:focusinfocus|focusoutblur)$/;
    fe.extend(fe.event, {
        trigger: function(t, n, i, o) {
            var s, r, a, l, c, d, u, p = [ i || ee ], f = le.call(t, "type") ? t.type : t, h = le.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = a = i = i || ee, 3 !== i.nodeType && 8 !== i.nodeType && !wt.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), 
            f = h.shift(), h.sort()), c = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), 
            t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : fe.makeArray(n, [ t ]), 
            u = fe.event.special[f] || {}, o || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!o && !u.noBubble && !fe.isWindow(i)) {
                    for (l = u.delegateType || f, wt.test(l + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), 
                    a = r;
                    a === (i.ownerDocument || ee) && p.push(a.defaultView || a.parentWindow || e);
                }
                for (s = 0; (r = p[s++]) && !t.isPropagationStopped(); ) t.type = s > 1 ? l : u.bindType || f, 
                (d = (Oe.get(r, "events") || {})[t.type] && Oe.get(r, "handle")) && d.apply(r, n), 
                (d = c && r[c]) && d.apply && De(r) && (t.result = d.apply(r, n), !1 === t.result && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), n) || !De(i) || c && fe.isFunction(i[f]) && !fe.isWindow(i) && ((a = i[c]) && (i[c] = null), 
                fe.event.triggered = f, i[f](), fe.event.triggered = void 0, a && (i[c] = a)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var i = fe.extend(new fe.Event(), n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(i, null, t);
        }
    }), fe.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return fe.event.trigger(e, t, n, !0);
        }
    }), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), ue.focusin = "onfocusin" in e, ue.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e));
        };
        fe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this, o = Oe.access(i, t);
                o || i.addEventListener(e, n, !0), Oe.access(i, t, (o || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, o = Oe.access(i, t) - 1;
                o ? Oe.access(i, t, o) : (i.removeEventListener(e, n, !0), Oe.remove(i, t));
            }
        };
    });
    var xt = e.location, Tt = fe.now(), St = /\?/;
    fe.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), 
        n;
    };
    var kt = /\[\]$/, Ct = /\r?\n/g, $t = /^(?:submit|button|image|reset|file)$/i, Pt = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, i = [], o = function(e, t) {
            var n = fe.isFunction(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            o(this.name, this.value);
        }); else for (n in e) Y(n, e[n], t, o);
        return i.join("&");
    }, fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && Pt.test(this.nodeName) && !$t.test(e) && (this.checked || !Be.test(e));
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                };
            }).get();
        }
    });
    var Et = /%20/g, At = /#.*$/, Lt = /([?&])_=[^&]*/, jt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ot = /^(?:GET|HEAD)$/, Nt = /^\/\//, Mt = {}, Ft = {}, Ht = "*/".concat("*"), qt = ee.createElement("a");
    qt.href = xt.href, fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: Dt.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
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
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? G(G(e, fe.ajaxSettings), t) : G(fe.ajaxSettings, e);
        },
        ajaxPrefilter: U(Mt),
        ajaxTransport: U(Ft),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var c, p, f, w, x, T = n;
                d || (d = !0, l && e.clearTimeout(l), o = void 0, r = a || "", S.readyState = t > 0 ? 4 : 0, 
                c = t >= 200 && t < 300 || 304 === t, i && (w = Q(h, S, i)), w = Z(h, w, S, c), 
                c ? (h.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (fe.lastModified[s] = x), 
                (x = S.getResponseHeader("etag")) && (fe.etag[s] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, 
                p = w.data, f = w.error, c = !f)) : (f = T, !t && T || (T = "error", t < 0 && (t = 0))), 
                S.status = t, S.statusText = (n || T) + "", c ? v.resolveWith(g, [ p, T, S ]) : v.rejectWith(g, [ S, T, f ]), 
                S.statusCode(b), b = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [ S, h, c ? p : f ]), 
                y.fireWith(g, [ S, T ]), u && (m.trigger("ajaxComplete", [ S, h ]), --fe.active || fe.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, s, r, a, l, c, d, u, p, f, h = fe.ajaxSetup({}, n), g = h.context || h, m = h.context && (g.nodeType || g.jquery) ? fe(g) : fe.event, v = fe.Deferred(), y = fe.Callbacks("once memory"), b = h.statusCode || {}, w = {}, x = {}, T = "canceled", S = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (d) {
                        if (!a) for (a = {}; t = jt.exec(r); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return d ? r : null;
                },
                setRequestHeader: function(e, t) {
                    return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == d && (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (d) S.always(e[S.status]); else for (t in e) b[t] = [ b[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || T;
                    return o && o.abort(t), i(0, t), this;
                }
            };
            if (v.promise(S), h.url = ((t || h.url || xt.href) + "").replace(Nt, xt.protocol + "//"), 
            h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ee) || [ "" ], 
            null == h.crossDomain) {
                c = ee.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = qt.protocol + "//" + qt.host != c.protocol + "//" + c.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = fe.param(h.data, h.traditional)), 
            V(Mt, h, n, S), d) return S;
            (u = fe.event && h.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), 
            h.type = h.type.toUpperCase(), h.hasContent = !Ot.test(h.type), s = h.url.replace(At, ""), 
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Et, "+")) : (f = h.url.slice(s.length), 
            h.data && (s += (St.test(s) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (s = s.replace(Lt, "$1"), 
            f = (St.test(s) ? "&" : "?") + "_=" + Tt++ + f), h.url = s + f), h.ifModified && (fe.lastModified[s] && S.setRequestHeader("If-Modified-Since", fe.lastModified[s]), 
            fe.etag[s] && S.setRequestHeader("If-None-Match", fe.etag[s])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), 
            S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) S.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, S, h) || d)) return S.abort();
            if (T = "abort", y.add(h.complete), S.done(h.success), S.fail(h.error), o = V(Ft, h, n, S)) {
                if (S.readyState = 1, u && m.trigger("ajaxSend", [ S, h ]), d) return S;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    S.abort("timeout");
                }, h.timeout));
                try {
                    d = !1, o.send(w, i);
                } catch (e) {
                    if (d) throw e;
                    i(-1, e);
                }
            } else i(-1, "No Transport");
            return S;
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script");
        }
    }), fe.each([ "get", "post" ], function(e, t) {
        fe[t] = function(e, n, i, o) {
            return fe.isFunction(n) && (o = o || i, i = n, n = void 0), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, fe.isPlainObject(e) && e));
        };
    }), fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, fe.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (fe.isFunction(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(e) {
            return fe.isFunction(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = fe(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = fe.isFunction(e);
            return this.each(function(n) {
                fe(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                fe(this).replaceWith(this.childNodes);
            }), this;
        }
    }), fe.expr.pseudos.hidden = function(e) {
        return !fe.expr.pseudos.visible(e);
    }, fe.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, fe.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var It = {
        0: 200,
        1223: 204
    }, zt = fe.ajaxSettings.xhr();
    ue.cors = !!zt && "withCredentials" in zt, ue.ajax = zt = !!zt, fe.ajaxTransport(function(t) {
        var n, i;
        if (ue.cors || zt && !t.crossDomain) return {
            send: function(o, s) {
                var r, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (r in t.xhrFields) a[r] = t.xhrFields[r];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                for (r in o) a.setRequestHeader(r, o[r]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(It[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        };
    }), fe.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e;
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), fe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, o) {
                    t = fe("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
                    }), ee.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var Rt = [], Wt = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rt.pop() || fe.expando + "_" + Tt++;
            return this[e] = !0, e;
        }
    }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, s, r, a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        a ? t[a] = t[a].replace(Wt, "$1" + o) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), 
        t.converters["script json"] = function() {
            return r || fe.error(o + " was not called"), r[0];
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments;
        }, i.always(function() {
            void 0 === s ? fe(e).removeProp(o) : e[o] = s, t[o] && (t.jsonpCallback = n.jsonpCallback, 
            Rt.push(o)), r && fe.isFunction(s) && s(r[0]), r = s = void 0;
        }), "script";
    }), ue.createHTMLDocument = function() {
        var e = ee.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), fe.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, o, s;
        return t || (ue.createHTMLDocument ? (t = ee.implementation.createHTMLDocument(""), 
        i = t.createElement("base"), i.href = ee.location.href, t.head.appendChild(i)) : t = ee), 
        o = Te.exec(e), s = !n && [], o ? [ t.createElement(o[1]) ] : (o = b([ e ], t, s), 
        s && s.length && fe(s).remove(), fe.merge([], o.childNodes));
    }, fe.fn.load = function(e, t, n) {
        var i, o, s, r = this, a = e.indexOf(" ");
        return a > -1 && (i = X(e.slice(a)), e = e.slice(0, a)), fe.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (o = "POST"), r.length > 0 && fe.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, r.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            r.each(function() {
                n.apply(this, s || [ e.responseText, t, e ]);
            });
        }), this;
    }, fe.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), fe.expr.pseudos.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem;
        }).length;
    }, fe.offset = {
        setOffset: function(e, t, n) {
            var i, o, s, r, a, l, c = fe.css(e, "position"), d = fe(e), u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), s = fe.css(e, "top"), 
            l = fe.css(e, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (i = d.position(), 
            r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))), 
            null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), 
            "using" in t ? t.using.call(e, u) : d.css(u);
        }
    }, fe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                fe.offset.setOffset(this, e, t);
            });
            var t, n, i, o, s = this[0];
            return s ? s.getClientRects().length ? (i = s.getBoundingClientRect()).width || i.height ? (o = s.ownerDocument, 
            n = J(o), t = o.documentElement, {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === fe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), fe.nodeName(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + fe.css(e[0], "borderTopWidth", !0),
                    left: i.left + fe.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - fe.css(n, "marginTop", !0),
                    left: t.left - i.left - fe.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === fe.css(e, "position"); ) e = e.offsetParent;
                return e || Ve;
            });
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        fe.fn[e] = function(i) {
            return je(this, function(e, i, o) {
                var s = J(e);
                return void 0 === o ? s ? s[t] : e[i] : void (s ? s.scrollTo(n ? s.pageXOffset : o, n ? o : s.pageYOffset) : e[i] = o);
            }, e, i, arguments.length);
        };
    }), fe.each([ "top", "left" ], function(e, t) {
        fe.cssHooks[t] = D(ue.pixelPosition, function(e, n) {
            if (n) return n = j(e, t), ot.test(n) ? fe(e).position()[t] + "px" : n;
        });
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            fe.fn[i] = function(o, s) {
                var r = arguments.length && (n || "boolean" != typeof o), a = n || (!0 === o || !0 === s ? "margin" : "border");
                return je(this, function(t, n, o) {
                    var s;
                    return fe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (s = t.documentElement, 
                    Math.max(t.body["scroll" + e], s["scroll" + e], t.body["offset" + e], s["offset" + e], s["client" + e])) : void 0 === o ? fe.css(t, n, a) : fe.style(t, n, o, a);
                }, t, r ? o : void 0, r);
            };
        });
    }), fe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), fe.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe;
    });
    var Bt = e.jQuery, Xt = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = Xt), t && e.jQuery === fe && (e.jQuery = Bt), fe;
    }, t || (e.jQuery = e.$ = fe), fe;
}), function(e) {
    var t;
    jQuery(document).ready(function(e) {
        !function(e) {
            var n = navigator.userAgent.toLowerCase(), i = function(e) {
                return n.indexOf(e) > -1;
            }, o = "gecko", s = "webkit", r = "safari", a = "opera", l = "mobile", c = document.documentElement, d = [ !/opera|webtv/i.test(n) && /msie\s(\d)/.test(n) ? "ie ie" + RegExp.$1 : i("firefox/2") ? o + " ff2" : i("firefox/3.5") ? o + " ff3 ff3_5" : i("firefox/3.6") ? o + " ff3 ff3_6" : i("firefox/3") ? o + " ff3" : i("gecko/") ? o : i("opera") ? a + (/version\/(\d+)/.test(n) ? " " + a + RegExp.$1 : /opera(\s|\/)(\d+)/.test(n) ? " " + a + RegExp.$2 : "") : i("konqueror") ? "konqueror" : i("blackberry") ? l + " blackberry" : i("android") ? l + " android" : i("chrome") ? s + " chrome" : i("iron") ? s + " iron" : i("applewebkit/") ? s + " " + r + (/version\/(\d+)/.test(n) ? " " + r + RegExp.$1 : "") : i("mozilla/") ? o : "", i("j2me") ? l + " j2me" : i("iphone") ? l + " iphone" : i("ipod") ? l + " ipod" : i("ipad") ? l + " ipad" : i("mac") ? "mac" : i("darwin") ? "mac" : i("webtv") ? "webtv" : i("win") ? "win" + (i("windows nt 6.0") ? " vista" : "") : i("freebsd") ? "freebsd" : i("x11") || i("linux") ? "linux" : "", "js" ];
            t = d.join(" "), c.className += " " + t;
        }(), e(window).width() > 770 ? e(".no-flexbox .wk-cols").each(function() {
            items = e(this).children(".wk-col").length, width = 100 / items, e(this).children(".wk-col").css("width", width + "%");
        }) : e(".no-flexbox .wk-cols").each(function() {
            e(this).children(".wk-col").css("width", "100%");
        }), e(".no-flexbox .wk-cols-m").each(function() {
            items = e(this).children('[class~="wk-col"]').length, width = 100 / items, e(this).children('[class~="wk-col"]').css("width", width + "%");
        }), e(window).width() > 415 ? e(".no-flexbox .wk-cols-t").each(function() {
            items = e(this).children('[class~="wk-col"]').length, width = 100 / items, e(this).children('[class^="wk-col"]').css("width", width + "%");
        }) : e(".no-flexbox .wk-cols-t").each(function() {
            e(this).children('[class~="wk-col"]').css("width", "100%");
        }), e(window).on("resize", function() {
            e(window).width() > 770 ? e(".no-flexbox .wk-cols").each(function() {
                items = e(this).children(".wk-col").length, width = 100 / items, e(this).children(".wk-col").css("width", width + "%");
            }) : e(".no-flexbox .wk-cols").each(function() {
                e(this).children(".wk-col").css("width", "100%");
            }), e(".no-flexbox .wk-cols-m").each(function() {
                items = e(this).children('[class~="wk-col"]').length, width = 100 / items, e(this).children('[class~="wk-col"]').css("width", width + "%");
            }), e(window).width() > 415 ? e(".no-flexbox .wk-cols-t").each(function() {
                items = e(this).children('[class~="wk-col"]').length, width = 100 / items, e(this).children('[class^="wk-col"]').css("width", width + "%");
            }) : e(".no-flexbox .wk-cols-t").each(function() {
                e(this).children('[class~="wk-col"]').css("width", "100%");
            });
        }), e(window).scroll(function() {
            e(window).scrollTop() >= 10 ? e("body").addClass("is-scrolled") : e("body").removeClass("is-scrolled");
        }), e(window).on("resize", function() {
            e(this).width() < 770 ? (e("html").addClass("mobile"), e("html").removeClass("desktop")) : (e("html").removeClass("mobile"), 
            e("html").addClass("desktop"));
        }), e(window).width() < 770 && e("html").addClass("mobile"), e(window).width() > 771 && e("html").addClass("desktop");
    });
}(jQuery), function(e, t, n, i) {
    "use strict";
    function o(e) {
        var t = e.currentTarget, i = e.data ? e.data.options : {}, o = i.selector ? n(i.selector) : e.data ? e.data.items : [], s = n(t).attr("data-fancybox") || "", r = 0, a = n.fancybox.getInstance();
        e.preventDefault(), a && a.current.opts.$orig.is(t) || (s ? (o = o.length ? o.filter('[data-fancybox="' + s + '"]') : n('[data-fancybox="' + s + '"]'), 
        (r = o.index(t)) < 0 && (r = 0)) : o = [ t ], n.fancybox.open(o, i, r));
    }
    if (n) {
        if (n.fn.fancybox) return void n.error("fancyBox already initialized");
        var s = {
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
            onInit: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop,
            onActivate: n.noop,
            onDeactivate: n.noop,
            clickContent: function(e, t) {
                return "image" === e.type && "zoom";
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                clickContent: function(e, t) {
                    return "image" === e.type && "toggleControls";
                },
                clickSlide: function(e, t) {
                    return "image" === e.type ? "toggleControls" : "close";
                },
                dblclickContent: function(e, t) {
                    return "image" === e.type && "zoom";
                },
                dblclickSlide: function(e, t) {
                    return "image" === e.type && "zoom";
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
        }, r = n(e), a = n(t), l = 0, c = function(e) {
            return e && e.hasOwnProperty && e instanceof n;
        }, d = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
            return e.setTimeout(t, 1e3 / 60);
        }, u = function() {
            var e, n = t.createElement("fakeelement"), o = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (e in o) if (n.style[e] !== i) return o[e];
        }(), p = function(e) {
            return e && e.length && e[0].offsetHeight;
        }, f = function(e, i, o) {
            var r = this;
            r.opts = n.extend(!0, {
                index: o
            }, s, i || {}), i && n.isArray(i.buttons) && (r.opts.buttons = i.buttons), r.id = r.opts.id || ++l, 
            r.group = [], r.currIndex = parseInt(r.opts.index, 10) || 0, r.prevIndex = null, 
            r.prevPos = null, r.currPos = 0, r.firstRun = null, r.createGroup(e), r.group.length && (r.$lastFocus = n(t.activeElement).blur(), 
            r.slides = {}, r.init(e));
        };
        n.extend(f.prototype, {
            init: function() {
                var e, t, i, o = this, s = o.group[o.currIndex].opts;
                o.scrollTop = a.scrollTop(), o.scrollLeft = a.scrollLeft(), n.fancybox.getInstance() || n.fancybox.isMobile || "hidden" === n("body").css("overflow") || (e = n("body").width(), 
                n("html").addClass("fancybox-enabled"), (e = n("body").width() - e) > 1 && n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + e + "px; }</style>")), 
                i = "", n.each(s.buttons, function(e, t) {
                    i += s.btnTpl[t] || "";
                }), t = n(o.translate(o, s.baseTpl.replace("{{BUTTONS}}", i))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + o.id).addClass(s.baseClass).data("FancyBox", o).prependTo(s.parentEl), 
                o.$refs = {
                    container: t
                }, [ "bg", "inner", "infobar", "toolbar", "stage", "caption" ].forEach(function(e) {
                    o.$refs[e] = t.find(".fancybox-" + e);
                }), (!s.arrows || o.group.length < 2) && t.find(".fancybox-navigation").remove(), 
                s.infobar || o.$refs.infobar.remove(), s.toolbar || o.$refs.toolbar.remove(), o.trigger("onInit"), 
                o.activate(), o.jumpTo(o.currIndex);
            },
            translate: function(e, t) {
                var n = e.opts.i18n[e.opts.lang];
                return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                    var o = n[t];
                    return o === i ? e : o;
                });
            },
            createGroup: function(e) {
                var t = this, o = n.makeArray(e);
                n.each(o, function(e, o) {
                    var s, r, a, l, c = {}, d = {}, u = [];
                    n.isPlainObject(o) ? (c = o, d = o.opts || o) : "object" === n.type(o) && n(o).length ? (s = n(o), 
                    u = s.data(), d = "options" in u ? u.options : {}, d = "object" === n.type(d) ? d : {}, 
                    c.src = "src" in u ? u.src : d.src || s.attr("href"), [ "width", "height", "thumb", "type", "filter" ].forEach(function(e) {
                        e in u && (d[e] = u[e]);
                    }), "srcset" in u && (d.image = {
                        srcset: u.srcset
                    }), d.$orig = s, c.type || c.src || (c.type = "inline", c.src = o)) : c = {
                        type: "html",
                        src: o + ""
                    }, c.opts = n.extend(!0, {}, t.opts, d), n.fancybox.isMobile && (c.opts = n.extend(!0, {}, c.opts, c.opts.mobile)), 
                    r = c.type || c.opts.type, a = c.src || "", !r && a && (a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? r = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? r = "pdf" : "#" === a.charAt(0) && (r = "inline")), 
                    c.type = r, c.index = t.group.length, c.opts.$orig && !c.opts.$orig.length && delete c.opts.$orig, 
                    !c.opts.$thumb && c.opts.$orig && (c.opts.$thumb = c.opts.$orig.find("img:first")), 
                    c.opts.$thumb && !c.opts.$thumb.length && delete c.opts.$thumb, "function" === n.type(c.opts.caption) ? c.opts.caption = c.opts.caption.apply(o, [ t, c ]) : "caption" in u && (c.opts.caption = u.caption), 
                    c.opts.caption = c.opts.caption === i ? "" : c.opts.caption + "", "ajax" === r && (l = a.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), 
                    c.opts.filter = l.shift()), "auto" == c.opts.smallBtn && (n.inArray(r, [ "html", "inline", "ajax" ]) > -1 ? (c.opts.toolbar = !1, 
                    c.opts.smallBtn = !0) : c.opts.smallBtn = !1), "pdf" === r && (c.type = "iframe", 
                    c.opts.iframe.preload = !1), c.opts.modal && (c.opts = n.extend(!0, c.opts, {
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
                    })), t.group.push(c);
                });
            },
            addEvents: function() {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.close(e);
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.previous();
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.next();
                }), r.on("orientationchange.fb resize.fb", function(e) {
                    e && e.originalEvent && "resize" === e.originalEvent.type ? d(function() {
                        i.update();
                    }) : (i.$refs.stage.hide(), setTimeout(function() {
                        i.$refs.stage.show(), i.update();
                    }, 500));
                }), a.on("focusin.fb", function(e) {
                    var o = n.fancybox ? n.fancybox.getInstance() : null;
                    o.isClosing || !o.current || !o.current.opts.trapFocus || n(e.target).hasClass("fancybox-container") || n(e.target).is(t) || o && "fixed" !== n(e.target).css("position") && !o.$refs.container.has(e.target).length && (e.stopPropagation(), 
                    o.focus(), r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft));
                }), a.on("keydown.fb", function(e) {
                    var t = i.current, o = e.keyCode || e.which;
                    if (t && t.opts.keyboard && !n(e.target).is("input") && !n(e.target).is("textarea")) return 8 === o || 27 === o ? (e.preventDefault(), 
                    void i.close(e)) : 37 === o || 38 === o ? (e.preventDefault(), void i.previous()) : 39 === o || 40 === o ? (e.preventDefault(), 
                    void i.next()) : void i.trigger("afterKeydown", e, o);
                }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                    i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1;
                }), i.idleInterval = e.setInterval(function() {
                    i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && (i.isIdle = !0, 
                    i.idleSecondsCounter = 0, i.hideControls());
                }, 1e3));
            },
            removeEvents: function() {
                var t = this;
                r.off("orientationchange.fb resize.fb"), a.off("focusin.fb keydown.fb .fb-idle"), 
                this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (e.clearInterval(t.idleInterval), 
                t.idleInterval = null);
            },
            previous: function(e) {
                return this.jumpTo(this.currPos - 1, e);
            },
            next: function(e) {
                return this.jumpTo(this.currPos + 1, e);
            },
            jumpTo: function(e, t, o) {
                var s, r, a, l, c, d, u, f = this, h = f.group.length;
                if (!(f.isSliding || f.isClosing || f.isAnimating && f.firstRun)) {
                    if (e = parseInt(e, 10), !(r = f.current ? f.current.opts.loop : f.opts.loop) && (e < 0 || e >= h)) return !1;
                    if (s = f.firstRun = null === f.firstRun, !(h < 2 && !s && f.isSliding)) {
                        if (l = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, a = f.createSlide(e), 
                        h > 1 && ((r || a.index > 0) && f.createSlide(e - 1), (r || a.index < h - 1) && f.createSlide(e + 1)), 
                        f.current = a, f.currIndex = a.index, f.currPos = a.pos, f.trigger("beforeShow", s), 
                        f.updateControls(), d = n.fancybox.getTranslate(a.$slide), a.isMoved = (0 !== d.left || 0 !== d.top) && !a.$slide.hasClass("fancybox-animated"), 
                        a.forcedDuration = i, n.isNumeric(t) ? a.forcedDuration = t : t = a.opts[s ? "animationDuration" : "transitionDuration"], 
                        t = parseInt(t, 10), s) return a.opts.animationEffect && t && f.$refs.container.css("transition-duration", t + "ms"), 
                        f.$refs.container.removeClass("fancybox-is-hidden"), p(f.$refs.container), f.$refs.container.addClass("fancybox-is-open"), 
                        a.$slide.addClass("fancybox-slide--current"), f.loadSlide(a), void f.preload();
                        n.each(f.slides, function(e, t) {
                            n.fancybox.stop(t.$slide);
                        }), a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), 
                        a.isMoved ? (c = Math.round(a.$slide.width()), n.each(f.slides, function(e, i) {
                            var o = i.pos - a.pos;
                            n.fancybox.animate(i.$slide, {
                                top: 0,
                                left: o * c + o * i.opts.gutter
                            }, t, function() {
                                i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), 
                                i.pos === f.currPos && (a.isMoved = !1, f.complete());
                            });
                        })) : f.$refs.stage.children().removeAttr("style"), a.isLoaded ? f.revealContent(a) : f.loadSlide(a), 
                        f.preload(), l.pos !== a.pos && (u = "fancybox-slide--" + (l.pos > a.pos ? "next" : "previous"), 
                        l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), 
                        l.isComplete = !1, t && (a.isMoved || a.opts.transitionEffect) && (a.isMoved ? l.$slide.addClass(u) : (u = "fancybox-animated " + u + " fancybox-fx-" + a.opts.transitionEffect, 
                        n.fancybox.animate(l.$slide, u, t, function() {
                            l.$slide.removeClass(u).removeAttr("style");
                        }))));
                    }
                }
            },
            createSlide: function(e) {
                var t, i, o = this;
                return i = e % o.group.length, i = i < 0 ? o.group.length + i : i, !o.slides[e] && o.group[i] && (t = n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), 
                o.slides[e] = n.extend(!0, {}, o.group[i], {
                    pos: e,
                    $slide: t,
                    isLoaded: !1
                }), o.updateSlide(o.slides[e])), o.slides[e];
            },
            scaleToActual: function(e, t, o) {
                var s, r, a, l, c, d = this, u = d.current, p = u.$content, f = parseInt(u.$slide.width(), 10), h = parseInt(u.$slide.height(), 10), g = u.width, m = u.height;
                "image" != u.type || u.hasError || !p || d.isAnimating || (n.fancybox.stop(p), d.isAnimating = !0, 
                e = e === i ? .5 * f : e, t = t === i ? .5 * h : t, s = n.fancybox.getTranslate(p), 
                l = g / s.width, c = m / s.height, r = .5 * f - .5 * g, a = .5 * h - .5 * m, g > f && ((r = s.left * l - (e * l - e)) > 0 && (r = 0), 
                r < f - g && (r = f - g)), m > h && ((a = s.top * c - (t * c - t)) > 0 && (a = 0), 
                a < h - m && (a = h - m)), d.updateCursor(g, m), n.fancybox.animate(p, {
                    top: a,
                    left: r,
                    scaleX: l,
                    scaleY: c
                }, o || 330, function() {
                    d.isAnimating = !1;
                }), d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop());
            },
            scaleToFit: function(e) {
                var t, i = this, o = i.current, s = o.$content;
                "image" != o.type || o.hasError || !s || i.isAnimating || (n.fancybox.stop(s), i.isAnimating = !0, 
                t = i.getFitPos(o), i.updateCursor(t.width, t.height), n.fancybox.animate(s, {
                    top: t.top,
                    left: t.left,
                    scaleX: t.width / s.width(),
                    scaleY: t.height / s.height()
                }, e || 330, function() {
                    i.isAnimating = !1;
                }));
            },
            getFitPos: function(e) {
                var t, i, o, s, a, l = this, c = e.$content, d = e.width, u = e.height, p = e.opts.margin;
                return !(!c || !c.length || !d && !u) && ("number" === n.type(p) && (p = [ p, p ]), 
                2 == p.length && (p = [ p[0], p[1], p[0], p[1] ]), r.width() < 800 && (p = [ 0, 0, 0, 0 ]), 
                t = parseInt(l.$refs.stage.width(), 10) - (p[1] + p[3]), i = parseInt(l.$refs.stage.height(), 10) - (p[0] + p[2]), 
                o = Math.min(1, t / d, i / u), s = Math.floor(o * d), a = Math.floor(o * u), {
                    top: Math.floor(.5 * (i - a)) + p[0],
                    left: Math.floor(.5 * (t - s)) + p[3],
                    width: s,
                    height: a
                });
            },
            update: function() {
                var e = this;
                n.each(e.slides, function(t, n) {
                    e.updateSlide(n);
                });
            },
            updateSlide: function(e) {
                var t = this, i = e.$content;
                i && (e.width || e.height) && (n.fancybox.stop(i), n.fancybox.setTranslate(i, t.getFitPos(e)), 
                e.pos === t.currPos && t.updateCursor()), e.$slide.trigger("refresh"), t.trigger("onUpdate", e);
            },
            updateCursor: function(e, t) {
                var n = this, o = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                n.current && !n.isClosing && (n.isZoomable() ? (o.addClass("fancybox-is-zoomable"), 
                (e !== i && t !== i ? e < n.current.width && t < n.current.height : n.isScaledDown()) ? o.addClass("fancybox-can-zoomIn") : n.current.opts.touch ? o.addClass("fancybox-can-drag") : o.addClass("fancybox-can-zoomOut")) : n.current.opts.touch && o.addClass("fancybox-can-drag"));
            },
            isZoomable: function() {
                var e, t = this, i = t.current;
                if (i && !t.isClosing) return !!("image" === i.type && i.isLoaded && !i.hasError && ("zoom" === i.opts.clickContent || n.isFunction(i.opts.clickContent) && "zoom" === i.opts.clickContent(i)) && (e = t.getFitPos(i), 
                i.width > e.width || i.height > e.height));
            },
            isScaledDown: function() {
                var e = this.current, t = e.$content, i = !1;
                return t && (i = n.fancybox.getTranslate(t), i = i.width < e.width || i.height < e.height), 
                i;
            },
            canPan: function() {
                var e = this, t = e.current, n = t.$content, i = !1;
                return n && (i = e.getFitPos(t), i = Math.abs(n.width() - i.width) > 1 || Math.abs(n.height() - i.height) > 1), 
                i;
            },
            loadSlide: function(e) {
                var t, i, o, s = this;
                if (!e.isLoading && !e.isLoaded) {
                    switch (e.isLoading = !0, s.trigger("beforeLoad", e), t = e.type, (i = e.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(e.opts.slideClass), 
                    t) {
                      case "image":
                        s.setImage(e);
                        break;

                      case "iframe":
                        s.setIframe(e);
                        break;

                      case "html":
                        s.setContent(e, e.src || e.content);
                        break;

                      case "inline":
                        n(e.src).length ? s.setContent(e, n(e.src)) : s.setError(e);
                        break;

                      case "ajax":
                        s.showLoading(e), o = n.ajax(n.extend({}, e.opts.ajax.settings, {
                            url: e.src,
                            success: function(t, n) {
                                "success" === n && s.setContent(e, t);
                            },
                            error: function(t, n) {
                                t && "abort" !== n && s.setError(e);
                            }
                        })), i.one("onReset", function() {
                            o.abort();
                        });
                        break;

                      default:
                        s.setError(e);
                    }
                    return !0;
                }
            },
            setImage: function(t) {
                var i, o, s, r, a = this, l = t.opts.image.srcset;
                if (l) {
                    s = e.devicePixelRatio || 1, r = e.innerWidth * s, (o = l.split(",").map(function(e) {
                        var t = {};
                        return e.trim().split(/\s+/).forEach(function(e, n) {
                            var i = parseInt(e.substring(0, e.length - 1), 10);
                            return 0 === n ? t.url = e : void (i && (t.value = i, t.postfix = e[e.length - 1]));
                        }), t;
                    })).sort(function(e, t) {
                        return e.value - t.value;
                    });
                    for (var c = 0; c < o.length; c++) {
                        var d = o[c];
                        if ("w" === d.postfix && d.value >= r || "x" === d.postfix && d.value >= s) {
                            i = d;
                            break;
                        }
                    }
                    !i && o.length && (i = o[o.length - 1]), i && (t.src = i.url, t.width && t.height && "w" == i.postfix && (t.height = t.width / t.height * i.value, 
                    t.width = i.value));
                }
                t.$content = n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), 
                !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, 
                t.height = t.opts.height, t.$ghost = n("<img />").one("error", function() {
                    n(this).remove(), t.$ghost = null, a.setBigImage(t);
                }).one("load", function() {
                    a.afterLoad(t), a.setBigImage(t);
                }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : a.setBigImage(t);
            },
            setBigImage: function(e) {
                var t = this, i = n("<img />");
                e.$image = i.one("error", function() {
                    t.setError(e);
                }).one("load", function() {
                    clearTimeout(e.timouts), e.timouts = null, t.isClosing || (e.width = this.naturalWidth, 
                    e.height = this.naturalHeight, e.opts.image.srcset && i.attr("sizes", "100vw").attr("srcset", e.opts.image.srcset), 
                    t.hideLoading(e), e.$ghost ? e.timouts = setTimeout(function() {
                        e.timouts = null, e.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, e.height / 1600))) : t.afterLoad(e));
                }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (i[0].complete || "complete" == i[0].readyState) && i[0].naturalWidth && i[0].naturalHeight ? i.trigger("load") : i[0].error ? i.trigger("error") : e.timouts = setTimeout(function() {
                    i[0].complete || e.hasError || t.showLoading(e);
                }, 100);
            },
            setIframe: function(e) {
                var t, o = this, s = e.opts.iframe, r = e.$slide;
                e.$content = n('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(r), 
                t = n(s.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(s.attr).appendTo(e.$content), 
                s.preload ? (o.showLoading(e), t.on("load.fb error.fb", function(t) {
                    this.isReady = 1, e.$slide.trigger("refresh"), o.afterLoad(e);
                }), r.on("refresh.fb", function() {
                    var n, o, r = e.$content, a = s.css.width, l = s.css.height;
                    if (1 === t[0].isReady) {
                        try {
                            o = t.contents().find("body");
                        } catch (e) {}
                        o && o.length && (a === i && (n = t[0].contentWindow.document.documentElement.scrollWidth, 
                        a = Math.ceil(o.outerWidth(!0) + (r.width() - n)), a += r.outerWidth() - r.innerWidth()), 
                        l === i && (l = Math.ceil(o.outerHeight(!0)), l += r.outerHeight() - r.innerHeight()), 
                        a && r.width(a), l && r.height(l)), r.removeClass("fancybox-is-hidden");
                    }
                })) : this.afterLoad(e), t.attr("src", e.src), !0 === e.opts.smallBtn && e.$content.prepend(o.translate(e, e.opts.btnTpl.smallBtn)), 
                r.one("onReset", function() {
                    try {
                        n(this).find("iframe").hide().attr("src", "//about:blank");
                    } catch (e) {}
                    n(this).empty(), e.isLoaded = !1;
                });
            },
            setContent: function(e, t) {
                var i = this;
                i.isClosing || (i.hideLoading(e), e.$slide.empty(), c(t) && t.parent().length ? (t.parent(".fancybox-slide--inline").trigger("onReset"), 
                e.$placeholder = n("<div></div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === n.type(t) && 3 === (t = n("<div>").append(n.trim(t)).contents())[0].nodeType && (t = n("<div>").html(t)), 
                e.opts.filter && (t = n("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
                    e.$placeholder && (e.$placeholder.after(t.hide()).remove(), e.$placeholder = null), 
                    e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (n(this).empty(), 
                    e.isLoaded = !1);
                }), e.$content = n(t).appendTo(e.$slide), e.opts.smallBtn && !e.$smallBtn && (e.$smallBtn = n(i.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content.filter("div").first())), 
                this.afterLoad(e));
            },
            setError: function(e) {
                e.hasError = !0, e.$slide.removeClass("fancybox-slide--" + e.type), this.setContent(e, this.translate(e, e.opts.errorTpl));
            },
            showLoading: function(e) {
                var t = this;
                (e = e || t.current) && !e.$spinner && (e.$spinner = n(t.opts.spinnerTpl).appendTo(e.$slide));
            },
            hideLoading: function(e) {
                var t = this;
                (e = e || t.current) && e.$spinner && (e.$spinner.remove(), delete e.$spinner);
            },
            afterLoad: function(e) {
                var t = this;
                t.isClosing || (e.isLoading = !1, e.isLoaded = !0, t.trigger("afterLoad", e), t.hideLoading(e), 
                e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
                    return 2 == e.button && e.preventDefault(), !0;
                }), "image" === e.type && n('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), 
                t.revealContent(e));
            },
            revealContent: function(e) {
                var t, o, s, r, a, l = this, c = e.$slide, d = !1;
                return t = e.opts[l.firstRun ? "animationEffect" : "transitionEffect"], s = e.opts[l.firstRun ? "animationDuration" : "transitionDuration"], 
                s = parseInt(e.forcedDuration === i ? s : e.forcedDuration, 10), !e.isMoved && e.pos === l.currPos && s || (t = !1), 
                "zoom" !== t || e.pos === l.currPos && s && "image" === e.type && !e.hasError && (d = l.getThumbPos(e)) || (t = "fade"), 
                "zoom" === t ? (a = l.getFitPos(e), a.scaleX = a.width / d.width, a.scaleY = a.height / d.height, 
                delete a.width, delete a.height, "auto" == (r = e.opts.zoomOpacity) && (r = Math.abs(e.width / e.height - d.width / d.height) > .1), 
                r && (d.opacity = .1, a.opacity = 1), n.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), d), 
                p(e.$content), void n.fancybox.animate(e.$content, a, s, function() {
                    l.complete();
                })) : (l.updateSlide(e), t ? (n.fancybox.stop(c), o = "fancybox-animated fancybox-slide--" + (e.pos > l.prevPos ? "next" : "previous") + " fancybox-fx-" + t, 
                c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o), 
                e.$content.removeClass("fancybox-is-hidden"), p(c), void n.fancybox.animate(c, "fancybox-slide--current", s, function(t) {
                    c.removeClass(o).removeAttr("style"), e.pos === l.currPos && l.complete();
                }, !0)) : (p(c), e.$content.removeClass("fancybox-is-hidden"), void (e.pos === l.currPos && l.complete())));
            },
            getThumbPos: function(i) {
                var o, s = this, r = !1, a = i.opts.$thumb, l = a ? a.offset() : 0;
                return l && a[0].ownerDocument === t && function(t) {
                    for (var i = a[0], o = i.getBoundingClientRect(), s = []; null !== i.parentElement; ) "hidden" !== n(i.parentElement).css("overflow") && "auto" !== n(i.parentElement).css("overflow") || s.push(i.parentElement.getBoundingClientRect()), 
                    i = i.parentElement;
                    return s.every(function(e) {
                        var t = Math.min(o.right, e.right) - Math.max(o.left, e.left), n = Math.min(o.bottom, e.bottom) - Math.max(o.top, e.top);
                        return t > 0 && n > 0;
                    }) && o.bottom > 0 && o.right > 0 && o.left < n(e).width() && o.top < n(e).height();
                }() && (o = s.$refs.stage.offset(), r = {
                    top: l.top - o.top + parseFloat(a.css("border-top-width") || 0),
                    left: l.left - o.left + parseFloat(a.css("border-left-width") || 0),
                    width: a.width(),
                    height: a.height(),
                    scaleX: 1,
                    scaleY: 1
                }), r;
            },
            complete: function() {
                var e = this, i = e.current, o = {};
                i.isMoved || !i.isLoaded || i.isComplete || (i.isComplete = !0, i.$slide.siblings().trigger("onReset"), 
                p(i.$slide), i.$slide.addClass("fancybox-slide--complete"), n.each(e.slides, function(t, i) {
                    i.pos >= e.currPos - 1 && i.pos <= e.currPos + 1 ? o[i.pos] = i : i && (n.fancybox.stop(i.$slide), 
                    i.$slide.off().remove());
                }), e.slides = o, e.updateCursor(), e.trigger("afterShow"), (n(t.activeElement).is("[disabled]") || i.opts.autoFocus && "image" != i.type && "iframe" !== i.type) && e.focus());
            },
            preload: function() {
                var e, t, n = this;
                n.group.length < 2 || (e = n.slides[n.currPos + 1], t = n.slides[n.currPos - 1], 
                e && "image" === e.type && n.loadSlide(e), t && "image" === t.type && n.loadSlide(t));
            },
            focus: function() {
                var e, t = this.current;
                this.isClosing || (t && t.isComplete && ((e = t.$slide.find("input[autofocus]:enabled:visible:first")).length || (e = t.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))), 
                (e = e && e.length ? e : this.$refs.container).focus());
            },
            activate: function() {
                var e = this;
                n(".fancybox-container").each(function() {
                    var t = n(this).data("FancyBox");
                    t && t.uid !== e.uid && !t.isClosing && t.trigger("onDeactivate");
                }), e.current && (e.$refs.container.index() > 0 && e.$refs.container.prependTo(t.body), 
                e.updateControls()), e.trigger("onActivate"), e.addEvents();
            },
            close: function(e, t) {
                var i, o, s, r, a, l, c = this, p = c.current, f = function() {
                    c.cleanUp(e);
                };
                return !(c.isClosing || (c.isClosing = !0, !1 === c.trigger("beforeClose", e) ? (c.isClosing = !1, 
                d(function() {
                    c.update();
                }), 1) : (c.removeEvents(), p.timouts && clearTimeout(p.timouts), s = p.$content, 
                i = p.opts.animationEffect, o = n.isNumeric(t) ? t : i ? p.opts.animationDuration : 0, 
                p.$slide.off(u).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), 
                p.$slide.siblings().trigger("onReset").remove(), o && c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), 
                c.hideLoading(p), c.hideControls(), c.updateCursor(), "zoom" !== i || !0 !== e && s && o && "image" === p.type && !p.hasError && (l = c.getThumbPos(p)) || (i = "fade"), 
                "zoom" === i ? (n.fancybox.stop(s), a = n.fancybox.getTranslate(s), a.width = a.width * a.scaleX, 
                a.height = a.height * a.scaleY, "auto" == (r = p.opts.zoomOpacity) && (r = Math.abs(p.width / p.height - l.width / l.height) > .1), 
                r && (l.opacity = 0), a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, 
                a.width = l.width, a.height = l.height, n.fancybox.setTranslate(p.$content, a), 
                n.fancybox.animate(p.$content, l, o, f), 0) : (i && o ? !0 === e ? setTimeout(f, o) : n.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + i, o, f) : f(), 
                0))));
            },
            cleanUp: function(e) {
                var t, i = this;
                i.current.$slide.trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", e), 
                i.$lastFocus && i.current.opts.backFocus && i.$lastFocus.focus(), i.current = null, 
                (t = n.fancybox.getInstance()) ? t.activate() : (r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft), 
                n("html").removeClass("fancybox-enabled"), n("#fancybox-style-noscroll").remove());
            },
            trigger: function(e, t) {
                var i, o = Array.prototype.slice.call(arguments, 1), s = this, r = t && t.opts ? t : s.current;
                return r ? o.unshift(r) : r = s, o.unshift(s), n.isFunction(r.opts[e]) && (i = r.opts[e].apply(r, o)), 
                !1 === i ? i : void ("afterClose" === e ? a.trigger(e + ".fb", o) : s.$refs.container.trigger(e + ".fb", o));
            },
            updateControls: function(e) {
                var t = this, i = t.current, o = i.index, s = i.opts, r = s.caption, a = t.$refs.caption;
                i.$slide.trigger("refresh"), t.$caption = r && r.length ? a.html(r) : null, t.isHiddenControls || t.showControls(), 
                n("[data-fancybox-count]").html(t.group.length), n("[data-fancybox-index]").html(o + 1), 
                n("[data-fancybox-prev]").prop("disabled", !s.loop && o <= 0), n("[data-fancybox-next]").prop("disabled", !s.loop && o >= t.group.length - 1);
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav");
            },
            showControls: function() {
                var e = this, t = e.current ? e.current.opts : e.opts, n = e.$refs.container;
                e.isHiddenControls = !1, e.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && e.group.length > 1)).toggleClass("fancybox-show-nav", !!(t.arrows && e.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal), 
                e.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption");
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls();
            }
        }), n.fancybox = {
            version: "3.1.28",
            defaults: s,
            getInstance: function(e) {
                var t = n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"), i = Array.prototype.slice.call(arguments, 1);
                return t instanceof f && ("string" === n.type(e) ? t[e].apply(t, i) : "function" === n.type(e) && e.apply(t, i), 
                t);
            },
            open: function(e, t, n) {
                return new f(e, t, n);
            },
            close: function(e) {
                var t = this.getInstance();
                t && (t.close(), !0 === e && this.close());
            },
            destroy: function() {
                this.close(!0), a.off("click.fb-start");
            },
            isMobile: t.createTouch !== i && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
            use3d: function() {
                var n = t.createElement("div");
                return e.getComputedStyle && e.getComputedStyle(n).getPropertyValue("transform") && !(t.documentMode && t.documentMode < 11);
            }(),
            getTranslate: function(e) {
                var t;
                if (!e || !e.length) return !1;
                if ((t = e.eq(0).css("transform")) && -1 !== t.indexOf("matrix") ? (t = t.split("(")[1], 
                t = t.split(")")[0], t = t.split(",")) : t = [], t.length) t = t.length > 10 ? [ t[13], t[12], t[0], t[5] ] : [ t[5], t[4], t[0], t[3] ], 
                t = t.map(parseFloat); else {
                    t = [ 0, 0, 1, 1 ];
                    var n = /\.*translate\((.*)px,(.*)px\)/i.exec(e.eq(0).attr("style"));
                    n && (t[0] = parseFloat(n[2]), t[1] = parseFloat(n[1]));
                }
                return {
                    top: t[0],
                    left: t[1],
                    scaleX: t[2],
                    scaleY: t[3],
                    opacity: parseFloat(e.css("opacity")),
                    width: e.width(),
                    height: e.height()
                };
            },
            setTranslate: function(e, t) {
                var n = "", o = {};
                if (e && t) return t.left === i && t.top === i || (n = (t.left === i ? e.position().left : t.left) + "px, " + (t.top === i ? e.position().top : t.top) + "px", 
                n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), t.scaleX !== i && t.scaleY !== i && (n = (n.length ? n + " " : "") + "scale(" + t.scaleX + ", " + t.scaleY + ")"), 
                n.length && (o.transform = n), t.opacity !== i && (o.opacity = t.opacity), t.width !== i && (o.width = t.width), 
                t.height !== i && (o.height = t.height), e.css(o);
            },
            animate: function(e, t, o, s, r) {
                var a = u || "transitionend";
                n.isFunction(o) && (s = o, o = null), n.isPlainObject(t) || e.removeAttr("style"), 
                e.on(a, function(o) {
                    (!o || !o.originalEvent || e.is(o.originalEvent.target) && "z-index" != o.originalEvent.propertyName) && (e.off(a), 
                    n.isPlainObject(t) ? t.scaleX !== i && t.scaleY !== i && (e.css("transition-duration", "0ms"), 
                    t.width = Math.round(e.width() * t.scaleX), t.height = Math.round(e.height() * t.scaleY), 
                    t.scaleX = 1, t.scaleY = 1, n.fancybox.setTranslate(e, t)) : !0 !== r && e.removeClass(t), 
                    n.isFunction(s) && s(o));
                }), n.isNumeric(o) && e.css("transition-duration", o + "ms"), n.isPlainObject(t) ? n.fancybox.setTranslate(e, t) : e.addClass(t), 
                e.data("timer", setTimeout(function() {
                    e.trigger("transitionend");
                }, o + 16));
            },
            stop: function(e) {
                clearTimeout(e.data("timer")), e.off(u);
            }
        }, n.fn.fancybox = function(e) {
            var t;
            return e = e || {}, (t = e.selector || !1) ? n("body").off("click.fb-start", t).on("click.fb-start", t, {
                options: e
            }, o) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: e
            }, o), this;
        }, a.on("click.fb-start", "[data-fancybox]", o);
    }
}(window, document, window.jQuery || jQuery), function(e) {
    "use strict";
    var t = function(t, n, i) {
        if (t) return i = i || "", "object" === e.type(i) && (i = e.param(i, !0)), e.each(n, function(e, n) {
            t = t.replace("$" + e, n || "");
        }), i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i), t;
    }, n = {
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
            url: function(e) {
                return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12]) + "&output=" + (e[12] && e[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(e) {
                return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
            }
        }
    };
    e(document).on("onInit.fb", function(i, o) {
        e.each(o.group, function(i, o) {
            var s, r, a, l, c, d, u, p = o.src || "", f = !1;
            o.type || (s = e.extend(!0, {}, n, o.opts.media), e.each(s, function(n, i) {
                if (a = p.match(i.matcher), d = {}, u = n, a) {
                    if (f = i.type, i.paramPlace && a[i.paramPlace]) {
                        "?" == (c = a[i.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                        for (var s = 0; s < c.length; ++s) {
                            var h = c[s].split("=", 2);
                            2 == h.length && (d[h[0]] = decodeURIComponent(h[1].replace(/\+/g, " ")));
                        }
                    }
                    return l = e.extend(!0, {}, i.params, o.opts[n], d), p = "function" === e.type(i.url) ? i.url.call(this, a, l, o) : t(i.url, a, l), 
                    r = "function" === e.type(i.thumb) ? i.thumb.call(this, a, l, o) : t(i.thumb, a), 
                    "vimeo" === u && (p = p.replace("&%23", "#")), !1;
                }
            }), f ? (o.src = p, o.type = f, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), 
            "iframe" === f && (e.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            }), o.contentProvider = u, o.opts.slideClass += " fancybox-slide--" + ("gmap_place" == u || "gmap_search" == u ? "map" : "video"))) : o.type = "image");
        });
    });
}(window.jQuery), function(e, t, n) {
    "use strict";
    var i = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || function(t) {
        return e.setTimeout(t, 1e3 / 60);
    }, o = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.mozCancelAnimationFrame || e.oCancelAnimationFrame || function(t) {
        e.clearTimeout(t);
    }, s = function(t) {
        var n = [];
        t = (t = t.originalEvent || t || e.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [ t ];
        for (var i in t) t[i].pageX ? n.push({
            x: t[i].pageX,
            y: t[i].pageY
        }) : t[i].clientX && n.push({
            x: t[i].clientX,
            y: t[i].clientY
        });
        return n;
    }, r = function(e, t, n) {
        return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0;
    }, a = function(e) {
        if (e.is("a,button,input,select,textarea,label") || n.isFunction(e.get(0).onclick) || e.data("selectable")) return !0;
        for (var t = 0, i = e[0].attributes, o = i.length; t < o; t++) if ("data-fancybox-" === i[t].nodeName.substr(0, 14)) return !0;
        return !1;
    }, l = function(t) {
        var n = e.getComputedStyle(t)["overflow-y"], i = e.getComputedStyle(t)["overflow-x"], o = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight, s = ("scroll" === i || "auto" === i) && t.scrollWidth > t.clientWidth;
        return o || s;
    }, c = function(e) {
        for (var t = !1; !(t = l(e.get(0))) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"); ) ;
        return t;
    }, d = function(e) {
        var t = this;
        t.instance = e, t.$bg = e.$refs.bg, t.$stage = e.$refs.stage, t.$container = e.$refs.container, 
        t.destroy(), t.$container.on("touchstart.fb.touch mousedown.fb.touch", n.proxy(t, "ontouchstart"));
    };
    d.prototype.destroy = function() {
        this.$container.off(".fb.touch");
    }, d.prototype.ontouchstart = function(i) {
        var o = this, l = n(i.target), d = o.instance, u = d.current, p = u.$content, f = "touchstart" == i.type;
        if (f && o.$container.off("mousedown.fb.touch"), !u || o.instance.isAnimating || o.instance.isClosing) return i.stopPropagation(), 
        void i.preventDefault();
        if ((!i.originalEvent || 2 != i.originalEvent.button) && l.length && !a(l) && !a(l.parent()) && !(i.originalEvent.clientX > l[0].clientWidth + l.offset().left) && (o.startPoints = s(i), 
        o.startPoints && !(o.startPoints.length > 1 && d.isSliding))) {
            if (o.$target = l, o.$content = p, o.canTap = !0, n(t).off(".fb.touch"), n(t).on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", n.proxy(o, "ontouchend")), 
            n(t).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", n.proxy(o, "ontouchmove")), 
            !d.current.opts.touch && !d.canPan() || !l.is(o.$stage) && !o.$stage.find(l).length) return void (l.is("img") && i.preventDefault());
            i.stopPropagation(), n.fancybox.isMobile && (c(o.$target) || c(o.$target.parent())) || i.preventDefault(), 
            o.canvasWidth = Math.round(u.$slide[0].clientWidth), o.canvasHeight = Math.round(u.$slide[0].clientHeight), 
            o.startTime = new Date().getTime(), o.distanceX = o.distanceY = o.distance = 0, 
            o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.sliderStartPos = o.sliderLastPos || {
                top: 0,
                left: 0
            }, o.contentStartPos = n.fancybox.getTranslate(o.$content), o.contentLastPos = null, 
            1 !== o.startPoints.length || o.isZooming || (o.canTap = !d.isSliding, "image" === u.type && (o.contentStartPos.width > o.canvasWidth + 1 || o.contentStartPos.height > o.canvasHeight + 1) ? (n.fancybox.stop(o.$content), 
            o.$content.css("transition-duration", "0ms"), o.isPanning = !0) : o.isSwiping = !0, 
            o.$container.addClass("fancybox-controls--isGrabbing")), 2 !== o.startPoints.length || d.isAnimating || u.hasError || "image" !== u.type || !u.isLoaded && !u.$ghost || (o.isZooming = !0, 
            o.isSwiping = !1, o.isPanning = !1, n.fancybox.stop(o.$content), o.$content.css("transition-duration", "0ms"), 
            o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - n(e).scrollLeft(), 
            o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - n(e).scrollTop(), 
            o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, 
            o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, 
            o.startDistanceBetweenFingers = r(o.startPoints[0], o.startPoints[1]));
        }
    }, d.prototype.ontouchmove = function(e) {
        var t = this;
        if (t.newPoints = s(e), n.fancybox.isMobile && (c(t.$target) || c(t.$target.parent()))) return e.stopPropagation(), 
        void (t.canTap = !1);
        if ((t.instance.current.opts.touch || t.instance.canPan()) && t.newPoints && t.newPoints.length && (t.distanceX = r(t.newPoints[0], t.startPoints[0], "x"), 
        t.distanceY = r(t.newPoints[0], t.startPoints[0], "y"), t.distance = r(t.newPoints[0], t.startPoints[0]), 
        t.distance > 0)) {
            if (!t.$target.is(t.$stage) && !t.$stage.find(t.$target).length) return;
            e.stopPropagation(), e.preventDefault(), t.isSwiping ? t.onSwipe() : t.isPanning ? t.onPan() : t.isZooming && t.onZoom();
        }
    }, d.prototype.onSwipe = function() {
        var t, s = this, r = s.isSwiping, a = s.sliderStartPos.left || 0;
        !0 === r ? Math.abs(s.distance) > 10 && (s.canTap = !1, s.instance.group.length < 2 && s.instance.opts.touch.vertical ? s.isSwiping = "y" : s.instance.isSliding || !1 === s.instance.opts.touch.vertical || "auto" === s.instance.opts.touch.vertical && n(e).width() > 800 ? s.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(s.distanceY, s.distanceX) / Math.PI), 
        s.isSwiping = t > 45 && t < 135 ? "y" : "x"), s.instance.isSliding = s.isSwiping, 
        s.startPoints = s.newPoints, n.each(s.instance.slides, function(e, t) {
            n.fancybox.stop(t.$slide), t.$slide.css("transition-duration", "0ms"), t.inTransition = !1, 
            t.pos === s.instance.current.pos && (s.sliderStartPos.left = n.fancybox.getTranslate(t.$slide).left);
        }), s.instance.SlideShow && s.instance.SlideShow.isActive && s.instance.SlideShow.stop()) : ("x" == r && (s.distanceX > 0 && (s.instance.group.length < 2 || 0 === s.instance.current.index && !s.instance.current.opts.loop) ? a += Math.pow(s.distanceX, .8) : s.distanceX < 0 && (s.instance.group.length < 2 || s.instance.current.index === s.instance.group.length - 1 && !s.instance.current.opts.loop) ? a -= Math.pow(-s.distanceX, .8) : a += s.distanceX), 
        s.sliderLastPos = {
            top: "x" == r ? 0 : s.sliderStartPos.top + s.distanceY,
            left: a
        }, s.requestId && (o(s.requestId), s.requestId = null), s.requestId = i(function() {
            s.sliderLastPos && (n.each(s.instance.slides, function(e, t) {
                var i = t.pos - s.instance.currPos;
                n.fancybox.setTranslate(t.$slide, {
                    top: s.sliderLastPos.top,
                    left: s.sliderLastPos.left + i * s.canvasWidth + i * t.opts.gutter
                });
            }), s.$container.addClass("fancybox-is-sliding"));
        }));
    }, d.prototype.onPan = function() {
        var e, t, s, r = this;
        r.canTap = !1, e = r.contentStartPos.width > r.canvasWidth ? r.contentStartPos.left + r.distanceX : r.contentStartPos.left, 
        t = r.contentStartPos.top + r.distanceY, (s = r.limitMovement(e, t, r.contentStartPos.width, r.contentStartPos.height)).scaleX = r.contentStartPos.scaleX, 
        s.scaleY = r.contentStartPos.scaleY, r.contentLastPos = s, r.requestId && (o(r.requestId), 
        r.requestId = null), r.requestId = i(function() {
            n.fancybox.setTranslate(r.$content, r.contentLastPos);
        });
    }, d.prototype.limitMovement = function(e, t, n, i) {
        var o, s, r, a, l = this, c = l.canvasWidth, d = l.canvasHeight, u = l.contentStartPos.left, p = l.contentStartPos.top, f = l.distanceX, h = l.distanceY;
        return o = Math.max(0, .5 * c - .5 * n), s = Math.max(0, .5 * d - .5 * i), r = Math.min(c - n, .5 * c - .5 * n), 
        a = Math.min(d - i, .5 * d - .5 * i), n > c && (f > 0 && e > o && (e = o - 1 + Math.pow(-o + u + f, .8) || 0), 
        f < 0 && e < r && (e = r + 1 - Math.pow(r - u - f, .8) || 0)), i > d && (h > 0 && t > s && (t = s - 1 + Math.pow(-s + p + h, .8) || 0), 
        h < 0 && t < a && (t = a + 1 - Math.pow(a - p - h, .8) || 0)), {
            top: t,
            left: e
        };
    }, d.prototype.limitPosition = function(e, t, n, i) {
        var o = this, s = o.canvasWidth, r = o.canvasHeight;
        return n > s ? (e = e > 0 ? 0 : e, e = e < s - n ? s - n : e) : e = Math.max(0, s / 2 - n / 2), 
        i > r ? (t = t > 0 ? 0 : t, t = t < r - i ? r - i : t) : t = Math.max(0, r / 2 - i / 2), 
        {
            top: t,
            left: e
        };
    }, d.prototype.onZoom = function() {
        var t = this, s = t.contentStartPos.width, a = t.contentStartPos.height, l = t.contentStartPos.left, c = t.contentStartPos.top, d = r(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers, u = Math.floor(s * d), p = Math.floor(a * d), f = (s - u) * t.percentageOfImageAtPinchPointX, h = (a - p) * t.percentageOfImageAtPinchPointY, g = (t.newPoints[0].x + t.newPoints[1].x) / 2 - n(e).scrollLeft(), m = (t.newPoints[0].y + t.newPoints[1].y) / 2 - n(e).scrollTop(), v = g - t.centerPointStartX, y = {
            top: c + (h + (m - t.centerPointStartY)),
            left: l + (f + v),
            scaleX: t.contentStartPos.scaleX * d,
            scaleY: t.contentStartPos.scaleY * d
        };
        t.canTap = !1, t.newWidth = u, t.newHeight = p, t.contentLastPos = y, t.requestId && (o(t.requestId), 
        t.requestId = null), t.requestId = i(function() {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
        });
    }, d.prototype.ontouchend = function(e) {
        var i = this, r = Math.max(new Date().getTime() - i.startTime, 1), a = i.isSwiping, l = i.isPanning, c = i.isZooming;
        return i.endPoints = s(e), i.$container.removeClass("fancybox-controls--isGrabbing"), 
        n(t).off(".fb.touch"), i.requestId && (o(i.requestId), i.requestId = null), i.isSwiping = !1, 
        i.isPanning = !1, i.isZooming = !1, i.canTap ? i.onTap(e) : (i.speed = 366, i.velocityX = i.distanceX / r * .5, 
        i.velocityY = i.distanceY / r * .5, i.speedX = Math.max(.5 * i.speed, Math.min(1.5 * i.speed, 1 / Math.abs(i.velocityX) * i.speed)), 
        void (l ? i.endPanning() : c ? i.endZooming() : i.endSwiping(a)));
    }, d.prototype.endSwiping = function(e) {
        var t = this, i = !1;
        t.instance.isSliding = !1, t.sliderLastPos = null, "y" == e && Math.abs(t.distanceY) > 50 ? (n.fancybox.animate(t.instance.current.$slide, {
            top: t.sliderStartPos.top + t.distanceY + 150 * t.velocityY,
            opacity: 0
        }, 150), i = t.instance.close(!0, 300)) : "x" == e && t.distanceX > 50 && t.instance.group.length > 1 ? i = t.instance.previous(t.speedX) : "x" == e && t.distanceX < -50 && t.instance.group.length > 1 && (i = t.instance.next(t.speedX)), 
        !1 !== i || "x" != e && "y" != e || t.instance.jumpTo(t.instance.current.index, 150), 
        t.$container.removeClass("fancybox-is-sliding");
    }, d.prototype.endPanning = function() {
        var e, t, i, o = this;
        o.contentLastPos && (!1 === o.instance.current.opts.touch.momentum ? (e = o.contentLastPos.left, 
        t = o.contentLastPos.top) : (e = o.contentLastPos.left + o.velocityX * o.speed, 
        t = o.contentLastPos.top + o.velocityY * o.speed), i = o.limitPosition(e, t, o.contentStartPos.width, o.contentStartPos.height), 
        i.width = o.contentStartPos.width, i.height = o.contentStartPos.height, n.fancybox.animate(o.$content, i, 330));
    }, d.prototype.endZooming = function() {
        var e, t, i, o, s = this, r = s.instance.current, a = s.newWidth, l = s.newHeight;
        s.contentLastPos && (e = s.contentLastPos.left, t = s.contentLastPos.top, o = {
            top: t,
            left: e,
            width: a,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, n.fancybox.setTranslate(s.$content, o), a < s.canvasWidth && l < s.canvasHeight ? s.instance.scaleToFit(150) : a > r.width || l > r.height ? s.instance.scaleToActual(s.centerPointStartX, s.centerPointStartY, 150) : (i = s.limitPosition(e, t, a, l), 
        n.fancybox.setTranslate(s.content, n.fancybox.getTranslate(s.$content)), n.fancybox.animate(s.$content, i, 150)));
    }, d.prototype.onTap = function(e) {
        var t, i = this, o = n(e.target), r = i.instance, a = r.current, l = e && s(e) || i.startPoints, c = l[0] ? l[0].x - i.$stage.offset().left : 0, d = l[0] ? l[0].y - i.$stage.offset().top : 0, u = function(t) {
            var o = a.opts[t];
            if (n.isFunction(o) && (o = o.apply(r, [ a, e ])), o) switch (o) {
              case "close":
                r.close(i.startEvent);
                break;

              case "toggleControls":
                r.toggleControls(!0);
                break;

              case "next":
                r.next();
                break;

              case "nextOrClose":
                r.group.length > 1 ? r.next() : r.close(i.startEvent);
                break;

              case "zoom":
                "image" == a.type && (a.isLoaded || a.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, d) : r.group.length < 2 && r.close(i.startEvent));
            }
        };
        if (!(e.originalEvent && 2 == e.originalEvent.button || r.isSliding || c > o[0].clientWidth + o.offset().left)) {
            if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside"; else if (o.is(".fancybox-slide")) t = "Slide"; else {
                if (!r.current.$content || !r.current.$content.has(e.target).length) return;
                t = "Content";
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, Math.abs(c - i.tapX) > 50 || Math.abs(d - i.tapY) > 50 || r.isSliding) return this;
                u("dblclick" + t);
            } else i.tapX = c, i.tapY = d, a.opts["dblclick" + t] && a.opts["dblclick" + t] !== a.opts["click" + t] ? i.tapped = setTimeout(function() {
                i.tapped = null, u("click" + t);
            }, 300) : u("click" + t);
            return this;
        }
    }, n(t).on("onActivate.fb", function(e, t) {
        t && !t.Guestures && (t.Guestures = new d(t));
    }), n(t).on("beforeClose.fb", function(e, t) {
        t && t.Guestures && t.Guestures.destroy();
    });
}(window, document, window.jQuery), function(e, t) {
    "use strict";
    var n = function(e) {
        this.instance = e, this.init();
    };
    t.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        speed: 3e3,
        init: function() {
            var e = this;
            e.$button = e.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                e.toggle();
            }), (e.instance.group.length < 2 || !e.instance.group[e.instance.currIndex].opts.slideShow) && e.$button.hide();
        },
        set: function() {
            var e = this;
            e.instance && e.instance.current && (e.instance.current.opts.loop || e.instance.currIndex < e.instance.group.length - 1) ? e.timer = setTimeout(function() {
                e.instance.next();
            }, e.instance.current.opts.slideShow.speed || e.speed) : (e.stop(), e.instance.idleSecondsCounter = 0, 
            e.instance.showControls());
        },
        clear: function() {
            var e = this;
            clearTimeout(e.timer), e.timer = null;
        },
        start: function() {
            var e = this, t = e.instance.current;
            e.instance && t && (t.opts.loop || t.index < e.instance.group.length - 1) && (e.isActive = !0, 
            e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), 
            t.isComplete && e.set());
        },
        stop: function() {
            var e = this, t = e.instance.current;
            e.clear(), e.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), 
            e.isActive = !1;
        },
        toggle: function() {
            var e = this;
            e.isActive ? e.stop() : e.start();
        }
    }), t(e).on({
        "onInit.fb": function(e, t) {
            t && !t.SlideShow && (t.SlideShow = new n(t));
        },
        "beforeShow.fb": function(e, t, n, i) {
            var o = t && t.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear();
        },
        "afterShow.fb": function(e, t, n) {
            var i = t && t.SlideShow;
            i && i.isActive && i.set();
        },
        "afterKeydown.fb": function(n, i, o, s, r) {
            var a = i && i.SlideShow;
            !a || !o.opts.slideShow || 80 !== r && 32 !== r || t(e.activeElement).is("button,a,input") || (s.preventDefault(), 
            a.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function(e, t) {
            var n = t && t.SlideShow;
            n && n.stop();
        }
    }), t(e).on("visibilitychange", function() {
        var n = t.fancybox.getInstance(), i = n && n.SlideShow;
        i && i.isActive && (e.hidden ? i.clear() : i.set());
    });
}(document, window.jQuery), function(e, t) {
    "use strict";
    var n = function() {
        var t, n, i, o = [ [ "requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror" ], [ "webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror" ], [ "msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError" ] ], s = {};
        for (n = 0; n < o.length; n++) if ((t = o[n]) && t[1] in e) {
            for (i = 0; i < t.length; i++) s[o[0][i]] = t[i];
            return s;
        }
        return !1;
    }();
    if (n) {
        var i = {
            request: function(t) {
                (t = t || e.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT);
            },
            exit: function() {
                e[n.exitFullscreen]();
            },
            toggle: function(t) {
                t = t || e.documentElement, this.isFullscreen() ? this.exit() : this.request(t);
            },
            isFullscreen: function() {
                return Boolean(e[n.fullscreenElement]);
            },
            enabled: function() {
                return Boolean(e[n.fullscreenEnabled]);
            }
        };
        t(e).on({
            "onInit.fb": function(e, t) {
                var n, o = t.$refs.toolbar.find("[data-fancybox-fullscreen]");
                t && !t.FullScreen && t.group[t.currIndex].opts.fullScreen ? ((n = t.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                    e.stopPropagation(), e.preventDefault(), i.toggle(n[0]);
                }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && i.request(n[0]), 
                t.FullScreen = i) : o.hide();
            },
            "afterKeydown.fb": function(e, t, n, i, o) {
                t && t.FullScreen && 70 === o && (i.preventDefault(), t.FullScreen.toggle(t.$refs.container[0]));
            },
            "beforeClose.fb": function(e) {
                e && e.FullScreen && i.exit();
            }
        }), t(e).on(n.fullscreenchange, function() {
            var e = t.fancybox.getInstance();
            e.current && "image" === e.current.type && e.isAnimating && (e.current.$content.css("transition", "none"), 
            e.isAnimating = !1, e.update(!0, !0, 0)), e.trigger("onFullscreenChange", i.isFullscreen());
        });
    } else t && t.fancybox && (t.fancybox.defaults.btnTpl.fullScreen = !1);
}(document, window.jQuery), function(e, t) {
    "use strict";
    var n = function(e) {
        this.instance = e, this.init();
    };
    t.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        init: function() {
            var e = this, t = e.instance.group[0], n = e.instance.group[1];
            e.$button = e.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), e.instance.group.length > 1 && e.instance.group[e.instance.currIndex].opts.thumbs && ("image" == t.type || t.opts.thumb || t.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (e.$button.on("click", function() {
                e.toggle();
            }), e.isActive = !0) : (e.$button.hide(), e.isActive = !1);
        },
        create: function() {
            var e, n, i = this.instance;
            this.$grid = t('<div class="fancybox-thumbs"></div>').appendTo(i.$refs.container), 
            e = "<ul>", t.each(i.group, function(t, i) {
                (n = i.opts.thumb || (i.opts.$thumb ? i.opts.$thumb.attr("src") : null)) || "image" !== i.type || (n = i.src), 
                n && n.length && (e += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + n + '" /></li>');
            }), e += "</ul>", this.$list = t(e).appendTo(this.$grid).on("click", "li", function() {
                i.jumpTo(t(this).data("index"));
            }), this.$list.find("img").hide().one("load", function() {
                var e, n, i, o, s = t(this).parent().removeClass("fancybox-thumbs-loading"), r = s.outerWidth(), a = s.outerHeight();
                e = this.naturalWidth || this.width, o = (n = this.naturalHeight || this.height) / a, 
                (i = e / r) >= 1 && o >= 1 && (i > o ? (e /= o, n = a) : (e = r, n /= i)), t(this).css({
                    width: Math.floor(e),
                    height: Math.floor(n),
                    "margin-top": Math.min(0, Math.floor(.3 * a - .3 * n)),
                    "margin-left": Math.min(0, Math.floor(.5 * r - .5 * e))
                }).show();
            }).each(function() {
                this.src = t(this).data("src");
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
    }), t(e).on({
        "onInit.fb": function(e, t) {
            t && !t.Thumbs && (t.Thumbs = new n(t));
        },
        "beforeShow.fb": function(e, t, n, i) {
            var o = t && t.Thumbs;
            if (o && o.isActive) {
                if (n.modal) return o.$button.hide(), void o.hide();
                i && !0 === n.opts.thumbs.autoStart && o.show(), o.isVisible && o.focus();
            }
        },
        "afterKeydown.fb": function(e, t, n, i, o) {
            var s = t && t.Thumbs;
            s && s.isActive && 71 === o && (i.preventDefault(), s.toggle());
        },
        "beforeClose.fb": function(e, t) {
            var n = t && t.Thumbs;
            n && n.isVisible && !1 !== t.opts.thumbs.hideOnClose && n.close();
        }
    });
}(document, window.jQuery), function(e, t, n) {
    "use strict";
    function i() {
        var e = t.location.hash.substr(1), n = e.split("-"), i = n.length > 1 && /^\+?\d+$/.test(n[n.length - 1]) ? parseInt(n.pop(-1), 10) || 1 : 1, o = n.join("-");
        return i < 1 && (i = 1), {
            hash: e,
            index: i,
            gallery: o
        };
    }
    function o(e) {
        var t;
        "" !== e.gallery && ((t = n("[data-fancybox='" + n.escapeSelector(e.gallery) + "']").eq(e.index - 1)).length || (t = n("#" + n.escapeSelector(e.gallery))), 
        t.length && (r = !1, t.trigger("click")));
    }
    function s(e) {
        var t;
        return !!e && ((t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") : ""));
    }
    n.escapeSelector || (n.escapeSelector = function(e) {
        var t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        return (e + "").replace(t, function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        });
    });
    var r = !0, a = null, l = null;
    n(function() {
        setTimeout(function() {
            !1 !== n.fancybox.defaults.hash && (n(e).on({
                "onInit.fb": function(e, t) {
                    var n, o;
                    !1 !== t.group[t.currIndex].opts.hash && (n = i(), (o = s(t)) && n.gallery && o == n.gallery && (t.currIndex = n.index - 1));
                },
                "beforeShow.fb": function(n, i, o) {
                    var c;
                    o && !1 !== o.opts.hash && (c = s(i)) && "" !== c && (t.location.hash.indexOf(c) < 0 && (i.opts.origHash = t.location.hash), 
                    a = c + (i.group.length > 1 ? "-" + (o.index + 1) : ""), "replaceState" in t.history ? (l && clearTimeout(l), 
                    l = setTimeout(function() {
                        t.history[r ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + a), 
                        l = null, r = !1;
                    }, 300)) : t.location.hash = a);
                },
                "beforeClose.fb": function(i, o, r) {
                    var c, d;
                    l && clearTimeout(l), !1 !== r.opts.hash && (c = s(o), d = o && o.opts.origHash ? o.opts.origHash : "", 
                    c && "" !== c && ("replaceState" in history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + d) : (t.location.hash = d, 
                    n(t).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))), a = null);
                }
            }), n(t).on("hashchange.fb", function() {
                var e = i();
                n.fancybox.getInstance() ? !a || a === e.gallery + "-" + e.index || 1 === e.index && a == e.gallery || (a = null, 
                n.fancybox.close()) : "" !== e.gallery && o(e);
            }), o(i()));
        }, 50);
    });
}(document, window, window.jQuery), function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(n, i) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(n),
                appendDots: e(n),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, n) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1);
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
            }, s.initials = {
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
            }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, 
            s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, 
            s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, 
            s.rowCount = 1, s.shouldClick = !0, s.$slider = e(n), s.$slidesCache = null, s.transformType = null, 
            s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, 
            s.windowTimer = null, o = e(n).data("slick") || {}, s.options = e.extend({}, s.defaults, i, o), 
            s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", 
            s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", 
            s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), 
            s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), 
            s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), 
            s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), 
            s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), 
            s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, 
            s.registerBreakpoints(), s.init(!0);
        };
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        });
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null; else if (0 > n || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), 
        o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), 
        o.$slideTrack.append(o.$slides), o.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t);
        }), o.$slidesCache = o.$slides, o.reinit();
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed);
        }
    }, t.prototype.animateSlide = function(t, n) {
        var i = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), 
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), 
        e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", 
                o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i));
            },
            complete: function() {
                n && n.call();
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", 
        o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call();
        }, o.options.speed));
    }, t.prototype.getNavTarget = function() {
        var t = this, n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)), n;
    }, t.prototype.asNavFor = function(t) {
        var n = this.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0);
        });
    }, t.prototype.applyTransition = function(e) {
        var t = this, n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, 
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
    }, t.prototype.autoPlayIterator = function() {
        var e = this, t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, 
        e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t));
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), 
        t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), 
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), 
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), 
        !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }));
    }, t.prototype.buildDots = function() {
        var t, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), 
            t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), 
        t.slideCount = t.$slides.length, t.$slides.each(function(t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "");
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), 
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), 
        t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), 
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), 
        t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), 
        !0 === t.options.draggable && t.$list.addClass("draggable");
    }, t.prototype.buildRows = function() {
        var e, t, n, i, o, s, r, a = this;
        if (i = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = e * r + (t * a.options.slidesPerRow + n);
                        s.get(d) && c.appendChild(s.get(d));
                    }
                    l.appendChild(c);
                }
                i.appendChild(l);
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            });
        }
    }, t.prototype.checkResponsive = function(t, n) {
        var i, o, s, r = this, a = !1, l = r.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), 
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            o = null;
            for (i in r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[i] && (o = r.breakpoints[i]) : s > r.breakpoints[i] && (o = r.breakpoints[i]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || n) && (r.activeBreakpoint = o, 
            "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), 
            !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, 
            "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), 
            !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, 
            r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), 
            r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [ r, a ]);
        }
    }, t.prototype.changeSlide = function(t, n) {
        var i, o, s, r = this, a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll != 0, 
        i = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
          case "previous":
            o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
            break;

          case "next":
            o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
            break;

          case "index":
            var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(l), !1, n), a.children().trigger("focus");
            break;

          default:
            return;
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, n;
        if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var i in t) {
            if (e < t[i]) {
                e = n;
                break;
            }
            n = t[i];
        }
        return e;
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), 
        t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), 
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), 
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), 
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), 
        e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), 
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), 
        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), 
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), 
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition);
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), 
        t.$slider.empty().append(e));
    }, t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
    }, t.prototype.destroy = function(t) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), e(".slick-cloned", n.$slider).detach(), 
        n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), 
        n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"));
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), 
        n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), 
        n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), 
        n.unslicked = !0, t || n.$slider.trigger("destroy", [ n ]);
    }, t.prototype.disableTransition = function(e) {
        var t = this, n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
    }, t.prototype.fadeSlide = function(e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function() {
            n.disableTransition(e), t.call();
        }, n.options.speed));
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }));
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), 
        t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay());
            }, 0);
        });
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide;
    }, t.prototype.getDotCount = function() {
        var e = this, t = 0, n = 0, i = 0;
        if (!0 === e.options.infinite) for (;t < e.slideCount; ) ++i, t = n + e.options.slidesToScroll, 
        n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (!0 === e.options.centerMode) i = e.slideCount; else if (e.options.asNavFor) for (;t < e.slideCount; ) ++i, 
        t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1;
    }, t.prototype.getLeft = function(e) {
        var t, n, i, o = this, s = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, 
        s = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, 
        s = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, 
        s = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, 
        s = (e + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, 
        s = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, 
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + s, 
        !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), 
        t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, 
        !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), 
        t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, 
        t += (o.$list.width() - i.outerWidth()) / 2)), t;
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e];
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this, n = 0, i = 0, o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, 
        i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n; ) o.push(n), n = i + t.options.slidesToScroll, 
        i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o;
    }, t.prototype.getSlick = function() {
        return this;
    }, t.prototype.getSlideCount = function() {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, 
        !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(o, s) {
            return s.offsetLeft - n + e(s).outerWidth() / 2 > -1 * i.swipeLeft ? (t = s, !1) : void 0;
        }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll;
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t);
    }, t.prototype.init = function(t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), 
        n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), 
        n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), t && n.$slider.trigger("init", [ n ]), 
        !0 === n.options.accessibility && n.initADA(), n.options.autoplay && (n.paused = !1, 
        n.autoPlay());
    }, t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(n) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + n
            });
        }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(n) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + n,
                id: "slick-slide" + t.instanceUid + n
            });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), 
        t.activateADA();
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide));
    }, t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), 
        t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), 
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), 
        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), 
        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), 
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition);
    }, t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), 
        e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }));
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this), n = e(this).attr("data-lazy"), i = document.createElement("img");
                i.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading");
                        }), s.$slider.trigger("lazyLoaded", [ s, t, n ]);
                    });
                }, i.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
                    s.$slider.trigger("lazyLoadError", [ s, t, n ]);
                }, i.src = n;
            });
        }
        var n, i, o, s = this;
        !0 === s.options.centerMode ? !0 === s.options.infinite ? (i = s.currentSlide + (s.options.slidesToShow / 2 + 1), 
        o = i + s.options.slidesToShow + 2) : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), 
        o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, 
        o = Math.ceil(i + s.options.slidesToShow), !0 === s.options.fade && (i > 0 && i--, 
        o <= s.slideCount && o++)), t(s.$slider.find(".slick-slide").slice(i, o)), s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"), 
        t(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), 
        t(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), 
        t(n));
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
    }, t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        });
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition();
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0;
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1;
    }, t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [ t, e ]), t.animating = !1, t.setPosition(), 
        t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA());
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        });
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault();
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var n, i, o, s = this, r = e("img[data-lazy]", s.$slider);
        r.length ? (n = r.first(), i = n.attr("data-lazy"), o = document.createElement("img"), 
        o.onload = function() {
            n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), 
            s.$slider.trigger("lazyLoaded", [ s, n, i ]), s.progressiveLazyLoad();
        }, o.onerror = function() {
            3 > t ? setTimeout(function() {
                s.progressiveLazyLoad(t + 1);
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), 
            s.$slider.trigger("lazyLoadError", [ s, n, i ]), s.progressiveLazyLoad());
        }, o.src = i) : s.$slider.trigger("allImagesLoaded", [ s ]);
    }, t.prototype.refresh = function(t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > i && (o.currentSlide = i), 
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), n = o.currentSlide, 
        o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: n
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1);
    }, t.prototype.registerBreakpoints = function() {
        var t, n, i, o = this, s = o.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in s) if (i = o.breakpoints.length - 1, n = s[t].breakpoint, s.hasOwnProperty(t)) {
                for (;i >= 0; ) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), 
                i--;
                o.breakpoints.push(n), o.breakpointSettings[n] = s[t].settings;
            }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e;
            });
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, 
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), 
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), 
        t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), 
        t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), 
        t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), 
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), 
        t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [ t ]);
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition();
        }, 50));
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e, 
        !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), 
        i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), 
        i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit());
    }, t.prototype.setCSS = function(e) {
        var t, n, i = this, o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", 
        n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, 
        !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", 
        i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", 
        i.$slideTrack.css(o)));
    }, t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), 
        !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), 
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), 
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
    }, t.prototype.setFade = function() {
        var t, n = this;
        n.$slides.each(function(i, o) {
            t = n.slideWidth * i * -1, !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            });
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        });
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t);
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, n, i, o, s, r = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], 
        o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), 
        "single" === s) r.options[i] = o; else if ("multiple" === s) e.each(i, function(e, t) {
            r.options[e] = t;
        }); else if ("responsive" === s) for (n in o) if ("array" !== e.type(r.options.responsive)) r.options.responsive = [ o[n] ]; else {
            for (t = r.options.responsive.length - 1; t >= 0; ) r.options.responsive[t].breakpoint === o[n].breakpoint && r.options.responsive.splice(t, 1), 
            t--;
            r.options.responsive.push(o[n]);
        }
        a && (r.unload(), r.reinit());
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), 
        e.$slider.trigger("setPosition", [ e ]);
    }, t.prototype.setProps = function() {
        var e = this, t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), 
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), 
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), 
        void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", 
        e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), 
        void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", 
        e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), 
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", 
        e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), 
        void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", 
        e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), 
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", 
        e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType;
    }, t.prototype.setSlideClasses = function(e) {
        var t, n, i, o, s = this;
        n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), 
        s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), 
        !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + e, 
        n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 
        0 === e ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), 
        s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, 
        i = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), 
        "ondemand" === s.options.lazyLoad && s.lazyLoad();
    }, t.prototype.setupInfinite = function() {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, 
        o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, 
            t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1) n = t, e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "");
            });
        }
    }, t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e;
    }, t.prototype.selectHandler = function(t) {
        var n = this, i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"), o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), 
        void n.asNavFor(o)) : void n.slideHandler(o);
    }, t.prototype.slideHandler = function(e, t, n) {
        var i, o, s, r, a, l = null, c = this;
        return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), 
        i = e, l = c.getLeft(i), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, 
        !1 === c.options.infinite && !1 === c.options.centerMode && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void (!1 === c.options.fade && (i = c.currentSlide, 
        !0 !== n ? c.animateSlide(r, function() {
            c.postSlide(i);
        }) : c.postSlide(i))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void (!1 === c.options.fade && (i = c.currentSlide, 
        !0 !== n ? c.animateSlide(r, function() {
            c.postSlide(i);
        }) : c.postSlide(i))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = 0 > i ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + i : i >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : i - c.slideCount : i, 
        c.animating = !0, c.$slider.trigger("beforeChange", [ c, c.currentSlide, o ]), s = c.currentSlide, 
        c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), 
        (a = a.slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), 
        c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== n ? (c.fadeSlideOut(s), 
        c.fadeSlide(o, function() {
            c.postSlide(o);
        })) : c.postSlide(o), void c.animateHeight()) : void (!0 !== n ? c.animateSlide(l, function() {
            c.postSlide(o);
        }) : c.postSlide(o))));
    }, t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), 
        e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), 
        e.$slider.addClass("slick-loading");
    }, t.prototype.swipeDirection = function() {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, 
        n = Math.atan2(t, e), 0 > (i = Math.round(180 * n / Math.PI)) && (i = 360 - Math.abs(i)), 
        45 >= i && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= i && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && 225 >= i ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && 135 >= i ? "down" : "up" : "vertical";
    }, t.prototype.swipeEnd = function(e) {
        var t, n, i = this;
        if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), 
        void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [ i, i.swipeDirection() ]), 
        i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
              case "left":
              case "down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), 
                i.currentDirection = 0;
                break;

              case "right":
              case "up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), 
                i.currentDirection = 1;
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [ i, n ]));
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), 
        i.touchObject = {});
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, 
        t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), 
        e.data.action) {
          case "start":
            t.swipeStart(e);
            break;

          case "move":
            t.swipeMove(e);
            break;

          case "end":
            t.swipeEnd(e);
        }
    }, t.prototype.swipeMove = function(e) {
        var t, n, i, o, s, r = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (t = r.getLeft(r.currentSlide), 
        r.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, 
        r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), 
        !0 === r.options.verticalSwiping && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), 
        "vertical" !== (n = r.swipeDirection()) ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), 
        o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), 
        !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), 
        i = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === n || r.currentSlide >= r.getDotCount() && "left" === n) && (i = r.touchObject.swipeLength * r.options.edgeFriction, 
        r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = t + i * o : r.swipeLeft = t + i * (r.$list.height() / r.listWidth) * o, 
        !0 === r.options.verticalSwiping && (r.swipeLeft = t + i * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, 
        !1) : void r.setCSS(r.swipeLeft))) : void 0);
    }, t.prototype.swipeStart = function(e) {
        var t, n = this;
        return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, 
        !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), 
        n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, 
        n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, 
        void (n.dragging = !0));
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), 
        e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), 
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [ t, e ]), t.destroy();
    }, t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), 
        e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), 
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1);
    }, e.fn.slick = function() {
        var e, n, i = this, o = arguments[0], s = Array.prototype.slice.call(arguments, 1), r = i.length;
        for (e = 0; r > e; e++) if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, s), 
        void 0 !== n) return n;
        return i;
    };
}), jQuery(document).ready(function(e) {
    !function(e, t, n) {
        function i(e, t) {
            return typeof e === t;
        }
        function o() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
        }
        function s(e, t) {
            return !!~("" + e).indexOf(t);
        }
        function r(e) {
            return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase();
            }).replace(/^-/, "");
        }
        function a(e, t) {
            return function() {
                return e.apply(t, arguments);
            };
        }
        function l(e, t, n) {
            var o;
            for (var s in e) if (e[s] in t) return !1 === n ? e[s] : (o = t[e[s]], i(o, "function") ? a(o, n || t) : o);
            return !1;
        }
        function c(e) {
            return e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase();
            }).replace(/^ms-/, "-ms-");
        }
        function d(t, n, i) {
            var o;
            if ("getComputedStyle" in e) {
                o = getComputedStyle.call(e, t, n);
                var s = e.console;
                null !== o ? i && (o = o.getPropertyValue(i)) : s && s[s.error ? "error" : "log"].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
            } else o = !n && t.currentStyle && t.currentStyle[i];
            return o;
        }
        function u() {
            var e = t.body;
            return e || (e = o(T ? "svg" : "body"), e.fake = !0), e;
        }
        function p(e, n, i, s) {
            var r, a, l, c, d = "modernizr", p = o("div"), f = u();
            if (parseInt(i, 10)) for (;i--; ) l = o("div"), l.id = s ? s[i] : d + (i + 1), p.appendChild(l);
            return r = o("style"), r.type = "text/css", r.id = "s" + d, (f.fake ? f : p).appendChild(r), 
            f.appendChild(p), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)), 
            p.id = d, f.fake && (f.style.background = "", f.style.overflow = "hidden", c = x.style.overflow, 
            x.style.overflow = "hidden", x.appendChild(f)), a = n(p, e), f.fake ? (f.parentNode.removeChild(f), 
            x.style.overflow = c, x.offsetHeight) : p.parentNode.removeChild(p), !!a;
        }
        function f(t, i) {
            var o = t.length;
            if ("CSS" in e && "supports" in e.CSS) {
                for (;o--; ) if (e.CSS.supports(c(t[o]), i)) return !0;
                return !1;
            }
            if ("CSSSupportsRule" in e) {
                for (var s = []; o--; ) s.push("(" + c(t[o]) + ":" + i + ")");
                return s = s.join(" or "), p("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == d(e, null, "position");
                });
            }
            return n;
        }
        function h(e, t, a, l) {
            function c() {
                u && (delete L.style, delete L.modElem);
            }
            if (l = !i(l, "undefined") && l, !i(a, "undefined")) {
                var d = f(e, a);
                if (!i(d, "undefined")) return d;
            }
            for (var u, p, h, g, m, v = [ "modernizr", "tspan", "samp" ]; !L.style && v.length; ) u = !0, 
            L.modElem = o(v.shift()), L.style = L.modElem.style;
            for (h = e.length, p = 0; h > p; p++) if (g = e[p], m = L.style[g], s(g, "-") && (g = r(g)), 
            L.style[g] !== n) {
                if (l || i(a, "undefined")) return c(), "pfx" != t || g;
                try {
                    L.style[g] = a;
                } catch (e) {}
                if (L.style[g] != m) return c(), "pfx" != t || g;
            }
            return c(), !1;
        }
        function g(e, t, n, o, s) {
            var r = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + P.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? h(a, t, o, s) : (a = (e + " " + E.join(r + " ") + r).split(" "), 
            l(a, t, n));
        }
        function m(e, t, i) {
            return g(e, n, n, t, i);
        }
        var v = [], y = [], b = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e]);
                }, 0);
            },
            addTest: function(e, t, n) {
                y.push({
                    name: e,
                    fn: t,
                    options: n
                });
            },
            addAsyncTest: function(e) {
                y.push({
                    name: null,
                    fn: e
                });
            }
        }, w = function() {};
        w.prototype = b, w = new w();
        var x = t.documentElement, T = "svg" === x.nodeName.toLowerCase(), S = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [ "", "" ];
        b._prefixes = S, w.addTest("cssgradients", function() {
            for (var e, t = "background-image:", n = "", i = 0, s = S.length - 1; s > i; i++) e = 0 === i ? "to " : "", 
            n += t + S[i] + "linear-gradient(" + e + "left top, #9f9, white);";
            w._config.usePrefixes && (n += t + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
            var r = o("a").style;
            return r.cssText = n, ("" + r.backgroundImage).indexOf("gradient") > -1;
        });
        var k = "CSS" in e && "supports" in e.CSS, C = "supportsCSS" in e;
        w.addTest("supports", k || C);
        var $ = "Moz O ms Webkit", P = b._config.usePrefixes ? $.split(" ") : [];
        b._cssomPrefixes = P;
        var E = b._config.usePrefixes ? $.toLowerCase().split(" ") : [];
        b._domPrefixes = E;
        var A = {
            elem: o("modernizr")
        };
        w._q.push(function() {
            delete A.elem;
        });
        var L = {
            style: A.elem.style
        };
        w._q.unshift(function() {
            delete L.style;
        }), b.testAllProps = g, b.testAllProps = m, w.addTest("cssfilters", function() {
            if (w.supports) return m("filter", "blur(2px)");
            var e = o("a");
            return e.style.cssText = S.join("filter:blur(2px); "), !!e.style.length && (t.documentMode === n || t.documentMode > 9);
        }), w.addTest("flexbox", m("flexBasis", "1px", !0)), function() {
            var e, t, n, o, s, r, a;
            for (var l in y) if (y.hasOwnProperty(l)) {
                if (e = [], (t = y[l]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = i(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) r = e[s], 
                1 === (a = r.split(".")).length ? w[a[0]] = o : (!w[a[0]] || w[a[0]] instanceof Boolean || (w[a[0]] = new Boolean(w[a[0]])), 
                w[a[0]][a[1]] = o), v.push((o ? "" : "no-") + a.join("-"));
            }
        }(), function(e) {
            var t = x.className, n = w._config.classPrefix || "";
            if (T && (t = t.baseVal), w._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(i, "$1" + n + "js$2");
            }
            w._config.enableClasses && (t += " " + n + e.join(" " + n), T ? x.className.baseVal = t : x.className = t);
        }(v), delete b.addTest, delete b.addAsyncTest;
        for (var j = 0; j < w._q.length; j++) w._q[j]();
        e.Modernizr = w;
    }(window, document);
    var t = navigator.userAgent;
    if (-1 == t.indexOf("Speed Insights") && -1 == t.indexOf("PTST")) {
        var n = document.createElement("script"), i = document.createTextNode("\t\t(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\t new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\t j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\t \t'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); \t\t})(window,document,'script','dataLayer','GTM-NBJJC6');\t\t");
        n.appendChild(i), document.head.appendChild(n);
        var o = document.createElement("link");
        o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800", 
        document.head.appendChild(o);
    }
    e(".slider").slick({
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
    }), e(".off-canvas-icon").click(function() {
        e("body").toggleClass("off-canvas-is-active");
    }), e(window).on("resize", function() {
        e(this).width() < 770 || e("body").removeClass("off-canvas-is-active");
    }), e(".off-canvas-menu .ui-menu li a").click(function() {
        setTimeout(function() {
            e("body").removeClass("off-canvas-is-active");
        }, 750);
    }), e(".ui-btn-share").click(function() {
        e(this).toggleClass("is-active");
    });
});

var loadDeferredStyles = function() {
    var e = document.getElementById("deferred-styles"), t = document.createElement("div");
    t.innerHTML = e.textContent, t.firstChild.onload = function() {
        $(".wk-preloading").fadeOut("slow"), $(".slider").slick("refresh"), $(".slider").slick("slickPlay");
    }, document.body.appendChild(t), e.parentElement.removeChild(e);
}, raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;

raf ? raf(function() {
    window.setTimeout(loadDeferredStyles, 0);
}) : window.addEventListener("load", loadDeferredStyles);