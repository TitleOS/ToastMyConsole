/*! billboard v1.0.0 (Prod) - 2017-10-16 14:34:05 */


/*

This script is a modifed version of the beacon.js script xdash fetches during normal operation.
At around line 6086, a function is called to do a GET request that requires either the console or user token. This skips us the work of having to figure out how to use the token authentication functions ourselves.
In that function, the url is changed to point to my server, with the token attached as a header. That header is read and stored server side. Allowing me to get the active user's retail token.
*/




function initBeacon(a) {
    var a = a || window.location.search.substring(1);
    "undefined" != typeof mediaApp && (console.log("purging previously used mediaApp from memory"), delete mediaApp), beacon = new Beacon.App({
        queryString: a
    }), "ar" != navigator.language.split("-")[0] && "he" != navigator.language.split("-")[0] || $("html").attr("dir", "rtl"), beacon.initialize(), console.info("Initialized application and history.")
}! function(a, b) {
    function c(a) {
        var b = a.length,
            c = fa.type(a);
        return fa.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }

    function d(a) {
        var b = oa[a] = {};
        return fa.each(a.match(ha) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function e() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = fa.expando + Math.random()
    }

    function f(a, c, d) {
        var e;
        if (d === b && 1 === a.nodeType)
            if (e = "data-" + c.replace(sa, "-$1").toLowerCase(), d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : ra.test(d) ? JSON.parse(d) : d
                } catch (f) {}
                pa.set(a, c, d)
            } else d = b;
        return d
    }

    function g() {
        return !0
    }

    function h() {
        return !1
    }

    function i() {
        try {
            return T.activeElement
        } catch (a) {}
    }

    function j(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function k(a, b, c) {
        if (fa.isFunction(b)) return fa.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return fa.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (Ca.test(b)) return fa.filter(b, a, c);
            b = fa.filter(b, a)
        }
        return fa.grep(a, function(a) {
            return ba.call(b, a) >= 0 !== c
        })
    }

    function l(a, b) {
        return fa.nodeName(a, "table") && fa.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function m(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function n(a) {
        var b = Na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function o(a, b) {
        for (var c = a.length, d = 0; c > d; d++) qa.set(a[d], "globalEval", !b || qa.get(b[d], "globalEval"))
    }

    function p(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (qa.hasData(a) && (f = qa.access(a), g = qa.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) fa.event.add(b, e, j[e][c])
            }
            pa.hasData(a) && (h = pa.access(a), i = fa.extend({}, h), pa.set(b, i))
        }
    }

    function q(a, c) {
        var d = a.getElementsByTagName ? a.getElementsByTagName(c || "*") : a.querySelectorAll ? a.querySelectorAll(c || "*") : [];
        return c === b || c && fa.nodeName(a, c) ? fa.merge([a], d) : d
    }

    function r(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && Ka.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function s(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = _a.length; e--;)
            if (b = _a[e] + c, b in a) return b;
        return d
    }

    function t(a, b) {
        return a = b || a, "none" === fa.css(a, "display") || !fa.contains(a.ownerDocument, a)
    }

    function u(b) {
        return a.getComputedStyle(b, null)
    }

    function v(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = qa.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && t(d) && (f[g] = qa.access(d, "olddisplay", z(d.nodeName)))) : f[g] || (e = t(d), (c && "none" !== c || !e) && qa.set(d, "olddisplay", e ? c : fa.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function w(a, b, c) {
        var d = Ua.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function x(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += fa.css(a, c + $a[f], !0, e)), d ? ("content" === c && (g -= fa.css(a, "padding" + $a[f], !0, e)), "margin" !== c && (g -= fa.css(a, "border" + $a[f] + "Width", !0, e))) : (g += fa.css(a, "padding" + $a[f], !0, e), "padding" !== c && (g += fa.css(a, "border" + $a[f] + "Width", !0, e)));
        return g
    }

    function y(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = u(a),
            g = fa.support.boxSizing && "border-box" === fa.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Qa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Va.test(e)) return e;
            d = g && (fa.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + x(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function z(a) {
        var b = T,
            c = Xa[a];
        return c || (c = A(a, b), "none" !== c && c || (Ra = (Ra || fa("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (Ra[0].contentWindow || Ra[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = A(a, b), Ra.detach()), Xa[a] = c), c
    }

    function A(a, b) {
        var c = fa(b.createElement(a)).appendTo(b.body),
            d = fa.css(c[0], "display");
        return c.remove(), d
    }

    function B(a, b, c, d) {
        var e;
        if (fa.isArray(b)) fa.each(b, function(b, e) {
            c || bb.test(a) ? d(a, e) : B(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== fa.type(b)) d(a, b);
        else
            for (e in b) B(a + "[" + e + "]", b[e], c, d)
    }

    function C(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ha) || [];
            if (fa.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function D(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, fa.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), f(k), !1)
            }), j
        }
        var g = {},
            h = a === sb;
        return f(c.dataTypes[0]) || !g["*"] && f("*")
    }

    function E(a, c) {
        var d, e, f = fa.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
        return e && fa.extend(!0, a, e), a
    }

    function F(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes;
            "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("Content-Type"));
        if (e)
            for (f in i)
                if (i[f] && i[f].test(e)) {
                    j.unshift(f);
                    break
                } if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b
    }

    function G(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    } if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function H() {
        return setTimeout(function() {
            Bb = b
        }), Bb = fa.now()
    }

    function I(a, b, c) {
        for (var d, e = (Hb[b] || []).concat(Hb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function J(a, b, c) {
        var d, e, f = 0,
            g = Gb.length,
            h = fa.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Bb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: fa.extend({}, b),
                opts: fa.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Bb || H(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = fa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (K(k, j.opts.specialEasing); g > f; f++)
            if (d = Gb[f].call(j, a, k, j.opts)) return d;
        return fa.map(k, I, j), fa.isFunction(j.opts.start) && j.opts.start.call(a, j), fa.fx.timer(fa.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function K(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = fa.camelCase(c), e = b[d], f = a[c], fa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = fa.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function L(a, c, d) {
        var e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && t(a),
            o = qa.get(a, "fxshow");
        d.queue || (i = fa._queueHooks(a, "fx"), null == i.unqueued && (i.unqueued = 0, j = i.empty.fire, i.empty.fire = function() {
            i.unqueued || j()
        }), i.unqueued++, k.always(function() {
            k.always(function() {
                i.unqueued--, fa.queue(a, "fx").length || i.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in c || "width" in c) && (d.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === fa.css(a, "display") && "none" === fa.css(a, "float") && (m.display = "inline-block")), d.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = d.overflow[0], m.overflowX = d.overflow[1], m.overflowY = d.overflow[2]
        }));
        for (e in c)
            if (f = c[e], Db.exec(f)) {
                if (delete c[e], g = g || "toggle" === f, f === (n ? "hide" : "show")) {
                    if ("show" !== f || !o || o[e] === b) continue;
                    n = !0
                }
                l[e] = o && o[e] || fa.style(a, e)
            } if (!fa.isEmptyObject(l)) {
            o ? "hidden" in o && (n = o.hidden) : o = qa.access(a, "fxshow", {}), g && (o.hidden = !n), n ? fa(a).show() : k.done(function() {
                fa(a).hide()
            }), k.done(function() {
                var b;
                qa.remove(a, "fxshow");
                for (b in l) fa.style(a, b, l[b])
            });
            for (e in l) h = I(n ? o[e] : 0, e, k), e in o || (o[e] = h.start, n && (h.end = h.start, h.start = "width" === e || "height" === e ? 1 : 0))
        }
    }

    function M(a, b, c, d, e) {
        return new M.prototype.init(a, b, c, d, e)
    }

    function N(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = $a[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function O(a) {
        return fa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var P, Q, R = typeof b,
        S = a.location,
        T = a.document,
        U = T.documentElement,
        V = a.jQuery,
        W = a.$,
        X = {},
        Y = [],
        Z = "2.0.3",
        $ = Y.concat,
        _ = Y.push,
        aa = Y.slice,
        ba = Y.indexOf,
        ca = X.toString,
        da = X.hasOwnProperty,
        ea = Z.trim,
        fa = function(a, b) {
            return new fa.fn.init(a, b, P)
        },
        ga = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ha = /\S+/g,
        ia = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ja = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ka = /^-ms-/,
        la = /-([\da-z])/gi,
        ma = function(a, b) {
            return b.toUpperCase()
        },
        na = function() {
            T.removeEventListener("DOMContentLoaded", na, !1), a.removeEventListener("load", na, !1), fa.ready()
        };
    fa.fn = fa.prototype = {
            jquery: Z,
            constructor: fa,
            init: function(a, c, d) {
                var e, f;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : ia.exec(a), !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                    if (e[1]) {
                        if (c = c instanceof fa ? c[0] : c, fa.merge(this, fa.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : T, !0)), ja.test(e[1]) && fa.isPlainObject(c))
                            for (e in c) fa.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                        return this
                    }
                    return f = T.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = T, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : fa.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), fa.makeArray(a, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return aa.call(this)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a) {
                var b = fa.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return fa.each(this, a, b)
            },
            ready: function(a) {
                return fa.ready.promise().done(a), this
            },
            slice: function() {
                return this.pushStack(aa.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            map: function(a) {
                return this.pushStack(fa.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: _,
            sort: [].sort,
            splice: [].splice
        }, fa.fn.init.prototype = fa.fn, fa.extend = fa.fn.extend = function() {
            var a, c, d, e, f, g, h = arguments[0] || {},
                i = 1,
                j = arguments.length,
                k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || fa.isFunction(h) || (h = {}), j === i && (h = this, --i); j > i; i++)
                if (null != (a = arguments[i]))
                    for (c in a) d = h[c], e = a[c], h !== e && (k && e && (fa.isPlainObject(e) || (f = fa.isArray(e))) ? (f ? (f = !1, g = d && fa.isArray(d) ? d : []) : g = d && fa.isPlainObject(d) ? d : {}, h[c] = fa.extend(k, g, e)) : e !== b && (h[c] = e));
            return h
        }, fa.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            noConflict: function(b) {
                return a.$ === fa && (a.$ = W), b && a.jQuery === fa && (a.jQuery = V), fa
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? fa.readyWait++ : fa.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --fa.readyWait : fa.isReady) || (fa.isReady = !0, a !== !0 && --fa.readyWait > 0 || (Q.resolveWith(T, [fa]), fa.fn.trigger && fa(T).trigger("ready").off("ready")))
            },
            isFunction: function(a) {
                return "function" === fa.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? X[ca.call(a)] || "object" : typeof a
            },
            isPlainObject: function(a) {
                if ("object" !== fa.type(a) || a.nodeType || fa.isWindow(a)) return !1;
                try {
                    if (a.constructor && !da.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (b) {
                    return !1
                }
                return !0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            error: function(a) {
                throw Error(a)
            },
            parseHTML: function(a, b, c) {
                if (!a || "string" != typeof a) return null;
                "boolean" == typeof b && (c = b, b = !1), b = b || T;
                var d = ja.exec(a),
                    e = !c && [];
                return d ? [b.createElement(d[1])] : (d = fa.buildFragment([a], b, e), e && fa(e).remove(), fa.merge([], d.childNodes))
            },
            parseJSON: JSON.parse,
            parseXML: function(a) {
                var c, d;
                if (!a || "string" != typeof a) return null;
                try {
                    d = new DOMParser, c = d.parseFromString(a, "text/xml")
                } catch (e) {
                    c = b
                }
                return (!c || c.getElementsByTagName("parsererror").length) && fa.error("Invalid XML: " + a), c
            },
            noop: function() {},
            globalEval: function(a) {
                var b, c = eval;
                a = fa.trim(a), a && (1 === a.indexOf("use strict") ? (b = T.createElement("script"), b.text = a, T.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(ka, "ms-").replace(la, ma)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : ea.call(a)
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? fa.merge(d, "string" == typeof a ? [a] : a) : _.call(d, a)), d
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : ba.call(b, a, c)
            },
            merge: function(a, c) {
                var d = c.length,
                    e = a.length,
                    f = 0;
                if ("number" == typeof d)
                    for (; d > f; f++) a[e++] = c[f];
                else
                    for (; c[f] !== b;) a[e++] = c[f++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                var d, e = [],
                    f = 0,
                    g = a.length;
                for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                return e
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && (i[i.length] = e);
                return $.apply([], i)
            },
            guid: 1,
            proxy: function(a, c) {
                var d, e, f;
                return "string" == typeof c && (d = a[c], c = a, a = d), fa.isFunction(a) ? (e = aa.call(arguments, 2), f = function() {
                    return a.apply(c || this, e.concat(aa.call(arguments)))
                }, f.guid = a.guid = a.guid || fa.guid++, f) : b
            },
            access: function(a, c, d, e, f, g, h) {
                var i = 0,
                    j = a.length,
                    k = null == d;
                if ("object" === fa.type(d)) {
                    f = !0;
                    for (i in d) fa.access(a, c, i, d[i], !0, g, h)
                } else if (e !== b && (f = !0, fa.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), c = null) : (k = c, c = function(a, b, c) {
                        return k.call(fa(a), c)
                    })), c))
                    for (; j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
                return f ? a : k ? c.call(a) : j ? c(a[0], d) : g
            },
            now: Date.now,
            swap: function(a, b, c, d) {
                var e, f, g = {};
                for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                e = c.apply(a, d || []);
                for (f in b) a.style[f] = g[f];
                return e
            }
        }), fa.ready.promise = function(b) {
            return Q || (Q = fa.Deferred(), "complete" === T.readyState ? setTimeout(fa.ready) : (T.addEventListener("DOMContentLoaded", na, !1), a.addEventListener("load", na, !1))), Q.promise(b)
        }, fa.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            X["[object " + b + "]"] = b.toLowerCase()
        }), P = fa(T),
        function(a, b) {
            function c(a, b, c, d) {
                var e, f, g, h, i, j, k, l, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
                if (1 !== (h = b.nodeType) && 9 !== h) return [];
                if (I && !d) {
                    if (e = ta.exec(a))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return aa.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return aa.apply(c, b.getElementsByClassName(g)), c
                        } if (x.qsa && (!J || !J.test(a))) {
                        if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wa, "\\$&") : b.setAttribute("id", l), l = "[id='" + l + "'] ", i = j.length; i--;) j[i] = l + n(j[i]);
                            o = na.test(a) && b.parentNode || b, p = j.join(",")
                        }
                        if (p) try {
                            return aa.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            k || b.removeAttribute("id")
                        }
                    }
                }
                return v(a.replace(ka, "$1"), b, c, d)
            }

            function d() {
                function a(c, d) {
                    return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d
                }
                var b = [];
                return a
            }

            function e(a) {
                return a[N] = !0, a
            }

            function f(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function g(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) z.attrHandle[c[d]] = b
            }

            function h(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function i(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function j(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function k(a) {
                return e(function(b) {
                    return b = +b, e(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function l() {}

            function m(a, b) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return b ? 0 : k.slice(0);
                for (h = a, i = [], j = z.preFilter; h;) {
                    (!d || (e = la.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ma.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ka, " ")
                    }), h = h.slice(d.length));
                    for (g in z.filter) !(e = ra[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return b ? h.length : h ? c.error(a) : S(a, i).slice(0)
            }

            function n(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function o(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j, k = P + " " + f;
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e)
                                if (j = b[N] || (b[N] = {}), (i = j[d]) && i[0] === k) {
                                    if ((h = i[1]) === !0 || h === y) return h === !0
                                } else if (i = j[d] = [k], i[1] = a(b, c, g) || y, i[1] === !0) return !0
                }
            }

            function p(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, d, f, g) {
                return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = e || u(b || "*", h.nodeType ? [h] : h, []),
                        r = !a || !e && b ? p : q(p, m, a, h, i),
                        s = c ? f || (e ? a : o || d) ? [] : g : r;
                    if (c && c(r, s, h, i), d)
                        for (j = q(s, n), d(j, [], h, i), k = j.length; k--;)(l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                    if (e) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = s.length; k--;)(l = s[k]) && j.push(r[k] = l);
                                f(null, s = [], j, i)
                            }
                            for (k = s.length; k--;)(l = s[k]) && (j = f ? ca.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l))
                        }
                    } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : aa.apply(g, s)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                        return a === b
                    }, g, !0), j = o(function(a) {
                        return ca.call(b, a) > -1
                    }, g, !0), k = [function(a, c, d) {
                        return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                    }]; e > h; h++)
                    if (c = z.relative[a[h].type]) k = [o(p(k), c)];
                    else {
                        if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !z.relative[a[d].type]; d++);
                            return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ka, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a))
                        }
                        k.push(c)
                    } return p(k)
            }

            function t(a, b) {
                var d = 0,
                    f = b.length > 0,
                    g = a.length > 0,
                    h = function(e, h, i, j, k) {
                        var l, m, n, o = [],
                            p = 0,
                            r = "0",
                            s = e && [],
                            t = null != k,
                            u = D,
                            v = e || g && z.find.TAG("*", k && h.parentNode || h),
                            w = P += null == u ? 1 : Math.random() || .1;
                        for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                            if (g && l) {
                                for (m = 0; n = a[m++];)
                                    if (n(l, h, i)) {
                                        j.push(l);
                                        break
                                    } t && (P = w, y = ++d)
                            }
                            f && ((l = !n && l) && p--, e && s.push(l))
                        }
                        if (p += r, f && r !== p) {
                            for (m = 0; n = b[m++];) n(s, o, h, i);
                            if (e) {
                                if (p > 0)
                                    for (; r--;) s[r] || o[r] || (o[r] = $.call(j));
                                o = q(o)
                            }
                            aa.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j)
                        }
                        return t && (P = w, D = u), s
                    };
                return f ? e(h) : h
            }

            function u(a, b, d) {
                for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
                return d
            }

            function v(a, b, c, d) {
                var e, f, g, h, i, j = m(a);
                if (!d && 1 === j.length) {
                    if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                        if (b = (z.find.ID(g.matches[0].replace(xa, ya), b) || [])[0], !b) return c;
                        a = a.slice(f.shift().value.length)
                    }
                    for (e = ra.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]);)
                        if ((i = z.find[h]) && (d = i(g.matches[0].replace(xa, ya), na.test(f[0].type) && b.parentNode || b))) {
                            if (f.splice(e, 1), a = d.length && n(f), !a) return aa.apply(c, d), c;
                            break
                        }
                }
                return C(a, j)(d, b, !I, c, na.test(a)), c
            }
            var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = d(),
                S = d(),
                T = d(),
                U = !1,
                V = function(a, b) {
                    return a === b ? (U = !0, 0) : 0
                },
                W = typeof b,
                X = 1 << 31,
                Y = {}.hasOwnProperty,
                Z = [],
                $ = Z.pop,
                _ = Z.push,
                aa = Z.push,
                ba = Z.slice,
                ca = Z.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                da = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ea = "[\\x20\\t\\r\\n\\f]",
                ga = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ha = ga.replace("w", "w#"),
                ia = "\\[" + ea + "*(" + ga + ")" + ea + "*(?:([*^$|!~]?=)" + ea + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ha + ")|)|)" + ea + "*\\]",
                ja = ":(" + ga + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ia.replace(3, 8) + ")*)|.*)\\)|)",
                ka = RegExp("^" + ea + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ea + "+$", "g"),
                la = RegExp("^" + ea + "*," + ea + "*"),
                ma = RegExp("^" + ea + "*([>+~]|" + ea + ")" + ea + "*"),
                na = RegExp(ea + "*[+~]"),
                oa = RegExp("=" + ea + "*([^\\]'\"]*)" + ea + "*\\]", "g"),
                pa = RegExp(ja),
                qa = RegExp("^" + ha + "$"),
                ra = {
                    ID: RegExp("^#(" + ga + ")"),
                    CLASS: RegExp("^\\.(" + ga + ")"),
                    TAG: RegExp("^(" + ga.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + ia),
                    PSEUDO: RegExp("^" + ja),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ea + "*(even|odd|(([+-]|)(\\d*)n|)" + ea + "*(?:([+-]|)" + ea + "*(\\d+)|))" + ea + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + da + ")$", "i"),
                    needsContext: RegExp("^" + ea + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ea + "*((?:-\\d)?\\d*)" + ea + "*\\)|)(?=[^-]|$)", "i")
                },
                sa = /^[^{]+\{\s*\[native \w/,
                ta = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ua = /^(?:input|select|textarea|button)$/i,
                va = /^h\d$/i,
                wa = /'|\\/g,
                xa = RegExp("\\\\([\\da-f]{1,6}" + ea + "?|(" + ea + ")|.)", "ig"),
                ya = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d)
                };
            try {
                aa.apply(Z = ba.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType
            } catch (za) {
                aa = {
                    apply: Z.length ? function(a, b) {
                        _.apply(a, ba.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            B = c.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, x = c.support = {}, F = c.setDocument = function(a) {
                var c = a ? a.ownerDocument || a : O,
                    d = c.defaultView;
                return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !B(c), d && d.attachEvent && d !== d.top && d.attachEvent("onbeforeunload", function() {
                    F()
                }), x.attributes = f(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), x.getElementsByTagName = f(function(a) {
                    return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
                }), x.getElementsByClassName = f(function(a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), x.getById = f(function(a) {
                    return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
                }), x.getById ? (z.find.ID = function(a, b) {
                    if (typeof b.getElementById !== W && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, z.filter.ID = function(a) {
                    var b = a.replace(xa, ya);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete z.find.ID, z.filter.ID = function(a) {
                    var b = a.replace(xa, ya);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), z.find.TAG = x.getElementsByTagName ? function(a, c) {
                    return typeof c.getElementsByTagName !== W ? c.getElementsByTagName(a) : b
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, z.find.CLASS = x.getElementsByClassName && function(a, c) {
                    return typeof c.getElementsByClassName !== W && I ? c.getElementsByClassName(a) : b
                }, K = [], J = [], (x.qsa = sa.test(c.querySelectorAll)) && (f(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + ea + "*(?:value|" + da + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
                }), f(function(a) {
                    var b = c.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + ea + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (x.matchesSelector = sa.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                    x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ja)
                }), J = J.length && RegExp(J.join("|")), K = K.length && RegExp(K.join("|")), M = sa.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, V = H.compareDocumentPosition ? function(a, b) {
                    if (a === b) return U = !0, 0;
                    var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                    return d ? 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || M(O, a) ? -1 : b === c || M(O, b) ? 1 : E ? ca.call(E, a) - ca.call(E, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
                } : function(a, b) {
                    var d, e = 0,
                        f = a.parentNode,
                        g = b.parentNode,
                        i = [a],
                        j = [b];
                    if (a === b) return U = !0, 0;
                    if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : E ? ca.call(E, a) - ca.call(E, b) : 0;
                    if (f === g) return h(a, b);
                    for (d = a; d = d.parentNode;) i.unshift(d);
                    for (d = b; d = d.parentNode;) j.unshift(d);
                    for (; i[e] === j[e];) e++;
                    return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, c) : G
            }, c.matches = function(a, b) {
                return c(a, null, null, b)
            }, c.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== G && F(a), b = b.replace(oa, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                    var d = L.call(a, b);
                    if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return c(b, G, null, [a]).length > 0
            }, c.contains = function(a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, c.attr = function(a, c) {
                (a.ownerDocument || a) !== G && F(a);
                var d = z.attrHandle[c.toLowerCase()],
                    e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
                return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e
            }, c.error = function(a) {
                throw Error("Syntax error, unrecognized expression: " + a)
            }, c.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return a
            }, A = c.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += A(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d]; d++) c += A(b);
                return c
            }, z = c.selectors = {
                cacheLength: 50,
                createPseudo: e,
                match: ra,
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
                    ATTR: function(a) {
                        return a[1] = a[1].replace(xa, ya), a[3] = (a[4] || a[5] || "").replace(xa, ya), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var c, d = !a[5] && a[2];
                        return ra.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pa.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), a[2] = d.slice(0, c)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(xa, ya).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = R[a + " "];
                        return b || (b = RegExp("(^|" + ea + ")" + a + "(" + ea + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, d) {
                        return function(e) {
                            var f = c.attr(e, a);
                            return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || 0 === m % d && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                        return f[N] ? f(b) : f.length > 1 ? (d = [a, a, "", b], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                            for (var d, e = f(a, b), g = e.length; g--;) d = ca.call(a, e[g]), a[d] = !(c[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, d)
                        }) : f
                    }
                },
                pseudos: {
                    not: e(function(a) {
                        var b = [],
                            c = [],
                            d = C(a.replace(ka, "$1"));
                        return d[N] ? e(function(a, b, c, e) {
                            for (var f, g = d(a, null, e, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: e(function(a) {
                        return function(b) {
                            return c(a, b).length > 0
                        }
                    }),
                    contains: e(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || A(b)).indexOf(a) > -1
                        }
                    }),
                    lang: e(function(a) {
                        return qa.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xa, ya).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === H
                    },
                    focus: function(a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !z.pseudos.empty(a)
                    },
                    header: function(a) {
                        return va.test(a.nodeName)
                    },
                    input: function(a) {
                        return ua.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type)
                    },
                    first: k(function() {
                        return [0]
                    }),
                    last: k(function(a, b) {
                        return [b - 1]
                    }),
                    eq: k(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: k(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: k(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: k(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; b > ++d;) a.push(d);
                        return a
                    })
                }
            }, z.pseudos.nth = z.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) z.pseudos[w] = i(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) z.pseudos[w] = j(w);
            l.prototype = z.filters = z.pseudos, z.setFilters = new l, C = c.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = m(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d))
                }
                return f
            }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), x.sortDetached = f(function(a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), f(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || g("type|href|height|width", function(a, c, d) {
                return d ? b : a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2)
            }), x.attributes && f(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || g("value", function(a, c, d) {
                return d || "input" !== a.nodeName.toLowerCase() ? b : a.defaultValue
            }), f(function(a) {
                return null == a.getAttribute("disabled")
            }) || g(da, function(a, c, d) {
                var e;
                return d ? b : (e = a.getAttributeNode(c)) && e.specified ? e.value : a[c] === !0 ? c.toLowerCase() : null
            }), fa.find = c, fa.expr = c.selectors, fa.expr[":"] = fa.expr.pseudos, fa.unique = c.uniqueSort, fa.text = c.getText, fa.isXMLDoc = c.isXML, fa.contains = c.contains
        }(a);
    var oa = {};
    fa.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || d(a) : fa.extend({}, a);
        var c, e, f, g, h, i, j = [],
            k = !a.once && [],
            l = function(b) {
                for (c = a.memory && b, e = !0, i = g || 0, g = 0, h = j.length, f = !0; j && h > i; i++)
                    if (j[i].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    } f = !1, j && (k ? k.length && l(k.shift()) : c ? j = [] : m.disable())
            },
            m = {
                add: function() {
                    if (j) {
                        var b = j.length;
                        ! function d(b) {
                            fa.each(b, function(b, c) {
                                var e = fa.type(c);
                                "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c)
                            })
                        }(arguments), f ? h = j.length : c && (g = b, l(c))
                    }
                    return this
                },
                remove: function() {
                    return j && fa.each(arguments, function(a, b) {
                        for (var c;
                            (c = fa.inArray(b, j, c)) > -1;) j.splice(c, 1), f && (h >= c && h--, i >= c && i--)
                    }), this
                },
                has: function(a) {
                    return a ? fa.inArray(a, j) > -1 : !(!j || !j.length)
                },
                empty: function() {
                    return j = [], h = 0, this
                },
                disable: function() {
                    return j = k = c = b, this
                },
                disabled: function() {
                    return !j
                },
                lock: function() {
                    return k = b, c || m.disable(), this
                },
                locked: function() {
                    return !k
                },
                fireWith: function(a, b) {
                    return !j || e && !k || (b = b || [], b = [a, b.slice ? b.slice() : b], f ? k.push(b) : l(b)), this
                },
                fire: function() {
                    return m.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return m
    }, fa.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", fa.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", fa.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", fa.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return fa.Deferred(function(c) {
                            fa.each(b, function(b, f) {
                                var g = f[0],
                                    h = fa.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = h && h.apply(this, arguments);
                                    a && fa.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? fa.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, fa.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = aa.call(arguments),
                g = f.length,
                h = 1 !== g || a && fa.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : fa.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? aa.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && fa.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    }), fa.support = function(b) {
        var c = T.createElement("input"),
            d = T.createDocumentFragment(),
            e = T.createElement("div"),
            f = T.createElement("select"),
            g = f.appendChild(T.createElement("option"));
        return c.type ? (c.type = "checkbox", b.checkOn = "" !== c.value, b.optSelected = g.selected, b.reliableMarginRight = !0, b.boxSizingReliable = !0, b.pixelPosition = !1, c.checked = !0, b.noCloneChecked = c.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !g.disabled, c = T.createElement("input"), c.value = "t", c.type = "radio", b.radioValue = "t" === c.value, c.setAttribute("checked", "t"), c.setAttribute("name", "t"), d.appendChild(c), b.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked, b.focusinBubbles = "onfocusin" in a, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", b.clearCloneStyle = "content-box" === e.style.backgroundClip, fa(function() {
            var c, d, f = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                g = T.getElementsByTagName("body")[0];
            g && (c = T.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", g.appendChild(c).appendChild(e), e.innerHTML = "", e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", fa.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === e.offsetWidth
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(e, null) || {}).top, b.boxSizingReliable = "4px" === (a.getComputedStyle(e, null) || {
                width: "4px"
            }).width, d = e.appendChild(T.createElement("div")), d.style.cssText = e.style.cssText = f, d.style.marginRight = d.style.width = "0", e.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), g.removeChild(c))
        }), b) : b
    }({});
    var pa, qa, ra = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sa = /([A-Z])/g;
    e.uid = 1, e.accepts = function(a) {
        return a.nodeType ? 1 === a.nodeType || 9 === a.nodeType : !0
    }, e.prototype = {
        key: function(a) {
            if (!e.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = e.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, fa.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (fa.isEmptyObject(f)) fa.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, c) {
            var d = this.cache[this.key(a)];
            return c === b ? d : d[c]
        },
        access: function(a, c, d) {
            var e;
            return c === b || c && "string" == typeof c && d === b ? (e = this.get(a, c), e !== b ? e : this.get(a, fa.camelCase(c))) : (this.set(a, c, d), d !== b ? d : c)
        },
        remove: function(a, c) {
            var d, e, f, g = this.key(a),
                h = this.cache[g];
            if (c === b) this.cache[g] = {};
            else {
                fa.isArray(c) ? e = c.concat(c.map(fa.camelCase)) : (f = fa.camelCase(c), c in h ? e = [c, f] : (e = f, e = e in h ? [e] : e.match(ha) || [])), d = e.length;
                for (; d--;) delete h[e[d]]
            }
        },
        hasData: function(a) {
            return !fa.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    }, pa = new e, qa = new e, fa.extend({
        acceptData: e.accepts,
        hasData: function(a) {
            return pa.hasData(a) || qa.hasData(a)
        },
        data: function(a, b, c) {
            return pa.access(a, b, c)
        },
        removeData: function(a, b) {
            pa.remove(a, b)
        },
        _data: function(a, b, c) {
            return qa.access(a, b, c)
        },
        _removeData: function(a, b) {
            qa.remove(a, b)
        }
    }), fa.fn.extend({
        data: function(a, c) {
            var d, e, g = this[0],
                h = 0,
                i = null;
            if (a === b) {
                if (this.length && (i = pa.get(g), 1 === g.nodeType && !qa.get(g, "hasDataAttrs"))) {
                    for (d = g.attributes; d.length > h; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = fa.camelCase(e.slice(5)), f(g, e, i[e]));
                    qa.set(g, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof a ? this.each(function() {
                pa.set(this, a)
            }) : fa.access(this, function(c) {
                var d, e = fa.camelCase(a);
                if (g && c === b) {
                    if (d = pa.get(g, a), d !== b) return d;
                    if (d = pa.get(g, e), d !== b) return d;
                    if (d = f(g, e, b), d !== b) return d
                } else this.each(function() {
                    var d = pa.get(this, e);
                    pa.set(this, e, c), -1 !== a.indexOf("-") && d !== b && pa.set(this, a, c)
                })
            }, null, c, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                pa.remove(this, a)
            })
        }
    }), fa.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = qa.get(a, c), d && (!e || fa.isArray(d) ? e = qa.access(a, c, fa.makeArray(d)) : e.push(d)), e || []) : b
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = fa.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = fa._queueHooks(a, b),
                g = function() {
                    fa.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return qa.get(a, c) || qa.access(a, c, {
                empty: fa.Callbacks("once memory").add(function() {
                    qa.remove(a, [b + "queue", c])
                })
            })
        }
    }), fa.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? fa.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = fa.queue(this, a, c);
                fa._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && fa.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                fa.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = fa.fx ? fa.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var d, e = 1,
                f = fa.Deferred(),
                g = this,
                h = this.length,
                i = function() {
                    --e || f.resolveWith(g, [g])
                };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--;) d = qa.get(g[h], a + "queueHooks"), d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c)
        }
    });
    var ta, ua, va = /[\t\r\n\f]/g,
        wa = /\r/g,
        xa = /^(?:input|select|textarea|button)$/i;
    fa.fn.extend({
        attr: function(a, b) {
            return fa.access(this, fa.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                fa.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return fa.access(this, fa.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[fa.propFix[a] || a]
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = "string" == typeof a && a;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).addClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(ha) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(va, " ") : " ")) {
                        for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                        c.className = fa.trim(d)
                    } return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0,
                h = this.length,
                i = 0 === arguments.length || "string" == typeof a && a;
            if (fa.isFunction(a)) return this.each(function(b) {
                fa(this).removeClass(a.call(this, b, this.className))
            });
            if (i)
                for (b = (a || "").match(ha) || []; h > g; g++)
                    if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(va, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        c.className = a ? fa.trim(d) : ""
                    } return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : fa.isFunction(a) ? this.each(function(c) {
                fa(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, e = fa(this), f = a.match(ha) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === R || "boolean" === c) && (this.className && qa.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : qa.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(va, " ").indexOf(b) >= 0) return !0;
            return !1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = fa.isFunction(a), this.each(function(d) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, d, fa(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : fa.isArray(f) && (f = fa.map(f, function(a) {
                    return null == a ? "" : a + ""
                })), c = fa.valHooks[this.type] || fa.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (c = fa.valHooks[f.type] || fa.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(wa, "") : null == d ? "" : d)) : void 0
        }
    }), fa.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (fa.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && fa.nodeName(c.parentNode, "optgroup"))) {
                            if (b = fa(c).val(), f) return b;
                            g.push(b)
                        } return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = fa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = fa.inArray(fa(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === R ? fa.prop(a, c, d) : (1 === g && fa.isXMLDoc(a) || (c = c.toLowerCase(), e = fa.attrHooks[c] || (fa.expr.match.bool.test(c) ? ua : ta)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = fa.find.attr(a, c), null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), d) : (fa.removeAttr(a, c), b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(ha);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = fa.propFix[c] || c, fa.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!fa.support.radioValue && "radio" === b && fa.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !fa.isXMLDoc(a), g && (c = fa.propFix[c] || c, f = fa.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || xa.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), ua = {
        set: function(a, b, c) {
            return b === !1 ? fa.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, fa.each(fa.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = fa.expr.attrHandle[c] || fa.find.attr;
        fa.expr.attrHandle[c] = function(a, c, e) {
            var f = fa.expr.attrHandle[c],
                g = e ? b : (fa.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return fa.expr.attrHandle[c] = f, g
        }
    }), fa.support.optSelected || (fa.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), fa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fa.propFix[this.toLowerCase()] = this
    }), fa.each(["radio", "checkbox"], function() {
        fa.valHooks[this] = {
            set: function(a, c) {
                return fa.isArray(c) ? a.checked = fa.inArray(fa(a).val(), c) >= 0 : b
            }
        }, fa.support.checkOn || (fa.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var ya = /^key/,
        za = /^(?:mouse|contextmenu)|click/,
        Aa = /^(?:focusinfocus|focusoutblur)$/,
        Ba = /^([^.]*)(?:\.(.+)|)$/;
    fa.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = qa.get(a);
            if (r) {
                for (d.handler && (g = d, d = g.handler, f = g.selector), d.guid || (d.guid = fa.guid++), (j = r.events) || (j = r.events = {}), (h = r.handle) || (h = r.handle = function(a) {
                        return typeof fa === R || a && fa.event.triggered === a.type ? b : fa.event.dispatch.apply(h.elem, arguments)
                    }, h.elem = a), c = (c || "").match(ha) || [""], k = c.length; k--;) i = Ba.exec(c[k]) || [], o = q = i[1], p = (i[2] || "").split(".").sort(), o && (m = fa.event.special[o] || {}, o = (f ? m.delegateType : m.bindType) || o, m = fa.event.special[o] || {}, l = fa.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && fa.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, g), (n = j[o]) || (n = j[o] = [], n.delegateCount = 0, m.setup && m.setup.call(a, e, p, h) !== !1 || a.addEventListener && a.addEventListener(o, h, !1)), m.add && (m.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, l) : n.push(l), fa.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = qa.hasData(a) && qa.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(ha) || [""], j = b.length; j--;)
                    if (h = Ba.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = fa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || fa.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) fa.event.remove(a, n + b[j], c, d, !0);
                fa.isEmptyObject(i) && (delete q.handle, qa.remove(a, "events"))
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [e || T],
                o = da.call(c, "type") ? c.type : c,
                p = da.call(c, "namespace") ? c.namespace.split(".") : [];
            if (h = i = e = e || T, 3 !== e.nodeType && 8 !== e.nodeType && !Aa.test(o + fa.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), o = p.shift(), p.sort()), k = 0 > o.indexOf(":") && "on" + o, c = c[fa.expando] ? c : new fa.Event(o, "object" == typeof c && c), c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c.result = b, c.target || (c.target = e), d = null == d ? [c] : fa.makeArray(d, [c]), m = fa.event.special[o] || {}, f || !m.trigger || m.trigger.apply(e, d) !== !1)) {
                if (!f && !m.noBubble && !fa.isWindow(e)) {
                    for (j = m.delegateType || o, Aa.test(j + o) || (h = h.parentNode); h; h = h.parentNode) n.push(h), i = h;
                    i === (e.ownerDocument || T) && n.push(i.defaultView || i.parentWindow || a)
                }
                for (g = 0;
                    (h = n[g++]) && !c.isPropagationStopped();) c.type = g > 1 ? j : m.bindType || o, l = (qa.get(h, "events") || {})[c.type] && qa.get(h, "handle"), l && l.apply(h, d), l = k && h[k], l && fa.acceptData(h) && l.apply && l.apply(h, d) === !1 && c.preventDefault();
                return c.type = o, f || c.isDefaultPrevented() || m._default && m._default.apply(n.pop(), d) !== !1 || !fa.acceptData(e) || k && fa.isFunction(e[o]) && !fa.isWindow(e) && (i = e[k], i && (e[k] = null), fa.event.triggered = o, e[o](), fa.event.triggered = b, i && (e[k] = i)), c.result
            }
        },
        dispatch: function(a) {
            a = fa.event.fix(a);
            var c, d, e, f, g, h = [],
                i = aa.call(arguments),
                j = (qa.get(this, "events") || {})[a.type] || [],
                k = fa.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = fa.event.handlers.call(this, a, j), c = 0;
                    (f = h[c++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = f.elem, d = 0;
                        (g = f.handlers[d++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((fa.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), e !== b && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [],
                i = c.delegateCount,
                j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type))
                for (; j !== this; j = j.parentNode || this)
                    if (j.disabled !== !0 || "click" !== a.type) {
                        for (e = [], d = 0; i > d; d++) g = c[d], f = g.selector + " ", e[f] === b && (e[f] = g.needsContext ? fa(f, this).index(j) >= 0 : fa.find(f, this, null, [j]).length), e[f] && e.push(g);
                        e.length && h.push({
                            elem: j,
                            handlers: e
                        })
                    } return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || T, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[fa.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = za.test(e) ? this.mouseHooks : ya.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new fa.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = T), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== i() && this.focus ? (this.focus(), !1) : b
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === i() && this.blur ? (this.blur(), !1) : b
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && fa.nodeName(this, "input") ? (this.click(), !1) : b
                },
                _default: function(a) {
                    return fa.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = fa.extend(new fa.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? fa.event.trigger(e, null, b) : fa.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, fa.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, fa.Event = function(a, c) {
        return this instanceof fa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? g : h) : this.type = a, c && fa.extend(this, c), this.timeStamp = a && a.timeStamp || fa.now(), this[fa.expando] = !0, b) : new fa.Event(a, c)
    }, fa.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = g, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = g, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g, this.stopPropagation()
        }
    }, fa.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        fa.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !fa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), fa.support.focusinBubbles || fa.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0,
            d = function(a) {
                fa.event.simulate(b, a.target, fa.event.fix(a), !0)
            };
        fa.event.special[b] = {
            setup: function() {
                0 === c++ && T.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && T.removeEventListener(a, d, !0)
            }
        }
    }), fa.fn.extend({
        on: function(a, c, d, e, f) {
            var g, i;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (i in a) this.on(i, c, d, a[i], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = h;
            else if (!e) return this;
            return 1 === f && (g = e, e = function(a) {
                return fa().off(a), g.apply(this, arguments)
            }, e.guid = g.guid || (g.guid = fa.guid++)), this.each(function() {
                fa.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, fa(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = h), this.each(function() {
                fa.event.remove(this, a, d, c)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                fa.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? fa.event.trigger(a, c, d, !0) : b
        }
    });
    var Ca = /^.[^:#\[\.,]*$/,
        Da = /^(?:parents|prev(?:Until|All))/,
        Ea = fa.expr.match.needsContext,
        Fa = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fa.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(fa(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (fa.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) fa.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? fa.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        has: function(a) {
            var b = fa(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (fa.contains(this, b[a])) return !0
            })
        },
        not: function(a) {
            return this.pushStack(k(this, a || [], !0))
        },
        filter: function(a) {
            return this.pushStack(k(this, a || [], !1))
        },
        is: function(a) {
            return !!k(this, "string" == typeof a && Ea.test(a) ? fa(a) : a || [], !1).length
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Ea.test(a) || "string" != typeof a ? fa(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && fa.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    } return this.pushStack(f.length > 1 ? fa.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? ba.call(fa(a), this[0]) : ba.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? fa(a, b) : fa.makeArray(a && a.nodeType ? [a] : a),
                d = fa.merge(this.get(), c);
            return this.pushStack(fa.unique(d))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), fa.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return fa.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return fa.dir(a, "parentNode", c)
        },
        next: function(a) {
            return j(a, "nextSibling")
        },
        prev: function(a) {
            return j(a, "previousSibling")
        },
        nextAll: function(a) {
            return fa.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return fa.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return fa.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return fa.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return fa.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return fa.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || fa.merge([], a.childNodes)
        }
    }, function(a, b) {
        fa.fn[a] = function(c, d) {
            var e = fa.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = fa.filter(d, e)), this.length > 1 && (Fa[a] || fa.unique(e), Da.test(a) && e.reverse()), this.pushStack(e)
        }
    }), fa.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? fa.find.matchesSelector(d, a) ? [d] : [] : fa.find.matches(a, fa.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        },
        dir: function(a, c, d) {
            for (var e = [], f = d !== b;
                (a = a[c]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (f && fa(a).is(d)) break;
                    e.push(a)
                } return e
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var Ga = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ha = /<([\w:]+)/,
        Ia = /<|&#?\w+;/,
        Ja = /<(?:script|style|link)/i,
        Ka = /^(?:checkbox|radio)$/i,
        La = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ma = /^$|\/(?:java|ecma)script/i,
        Na = /^true\/(.*)/,
        Oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Pa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pa.optgroup = Pa.option, Pa.tbody = Pa.tfoot = Pa.colgroup = Pa.caption = Pa.thead, Pa.th = Pa.td, fa.fn.extend({
        text: function(a) {
            return fa.access(this, function(a) {
                return a === b ? fa.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = l(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? fa.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || fa.cleanData(q(c)), c.parentNode && (b && fa.contains(c.ownerDocument, c) && o(q(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (fa.cleanData(q(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return fa.clone(this, a, b)
            })
        },
        html: function(a) {
            return fa.access(this, function(a) {
                var c = this[0] || {},
                    d = 0,
                    e = this.length;
                if (a === b && 1 === c.nodeType) return c.innerHTML;
                if ("string" == typeof a && !Ja.test(a) && !Pa[(Ha.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ga, "<$1></$2>");
                    try {
                        for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (fa.cleanData(q(c, !1)), c.innerHTML = a);
                        c = 0
                    } catch (f) {}
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = fa.map(this, function(a) {
                    return [a.nextSibling, a.parentNode]
                }),
                b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++],
                    e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), fa(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b, c) {
            a = $.apply([], a);
            var d, e, f, g, h, i, j = 0,
                k = this.length,
                l = this,
                o = k - 1,
                p = a[0],
                r = fa.isFunction(p);
            if (r || !(1 >= k || "string" != typeof p || fa.support.checkClone) && La.test(p)) return this.each(function(d) {
                var e = l.eq(d);
                r && (a[0] = p.call(this, d, e.html())), e.domManip(a, b, c)
            });
            if (k && (d = fa.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, 1 === d.childNodes.length && (d = e), e)) {
                for (f = fa.map(q(d, "script"), m), g = f.length; k > j; j++) h = d, j !== o && (h = fa.clone(h, !0, !0), g && fa.merge(f, q(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, fa.map(f, n), j = 0; g > j; j++) h = f[j], Ma.test(h.type || "") && !qa.access(h, "globalEval") && fa.contains(i, h) && (h.src ? fa._evalUrl(h.src) : fa.globalEval(h.textContent.replace(Oa, "")))
            }
            return this
        }
    }), fa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        fa.fn[a] = function(a) {
            for (var c, d = [], e = fa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), fa(e[g])[b](c), _.apply(d, c.get());
            return this.pushStack(d)
        }
    }), fa.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = fa.contains(a.ownerDocument, a);
            if (!(fa.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || fa.isXMLDoc(a)))
                for (g = q(h), f = q(a), d = 0, e = f.length; e > d; d++) r(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || q(a), g = g || q(h), d = 0, e = f.length; e > d; d++) p(f[d], g[d]);
                else p(a, h);
            return g = q(h, "script"), g.length > 0 && o(g, !i && q(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = []; l > k; k++)
                if (e = a[k], e || 0 === e)
                    if ("object" === fa.type(e)) fa.merge(n, e.nodeType ? [e] : e);
                    else if (Ia.test(e)) {
                for (f = f || m.appendChild(b.createElement("div")), g = (Ha.exec(e) || ["", ""])[1].toLowerCase(), h = Pa[g] || Pa._default, f.innerHTML = h[1] + e.replace(Ga, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                fa.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
            } else n.push(b.createTextNode(e));
            for (m.textContent = "", k = 0; e = n[k++];)
                if ((!d || -1 === fa.inArray(e, d)) && (i = fa.contains(e.ownerDocument, e), f = q(m.appendChild(e), "script"), i && o(f), c))
                    for (j = 0; e = f[j++];) Ma.test(e.type || "") && c.push(e);
            return m
        },
        cleanData: function(a) {
            for (var c, d, f, g, h, i, j = fa.event.special, k = 0;
                (d = a[k]) !== b; k++) {
                if (e.accepts(d) && (h = d[qa.expando], h && (c = qa.cache[h]))) {
                    if (f = Object.keys(c.events || {}), f.length)
                        for (i = 0;
                            (g = f[i]) !== b; i++) j[g] ? fa.event.remove(d, g) : fa.removeEvent(d, g, c.handle);
                    qa.cache[h] && delete qa.cache[h]
                }
                delete pa.cache[d[pa.expando]]
            }
        },
        _evalUrl: function(a) {
            return fa.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), fa.fn.extend({
        wrapAll: function(a) {
            var b;
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = fa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return fa.isFunction(a) ? this.each(function(b) {
                fa(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = fa(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = fa.isFunction(a);
            return this.each(function(c) {
                fa(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fa.nodeName(this, "body") || fa(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Qa, Ra, Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = /^margin/,
        Ua = RegExp("^(" + ga + ")(.*)$", "i"),
        Va = RegExp("^(" + ga + ")(?!px)[a-z%]+$", "i"),
        Wa = RegExp("^([+-])=(" + ga + ")", "i"),
        Xa = {
            BODY: "block"
        },
        Ya = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Za = {
            letterSpacing: 0,
            fontWeight: 400
        },
        $a = ["Top", "Right", "Bottom", "Left"],
        _a = ["Webkit", "O", "Moz", "ms"];
    fa.fn.extend({
        css: function(a, c) {
            return fa.access(this, function(a, c, d) {
                var e, f, g = {},
                    h = 0;
                if (fa.isArray(c)) {
                    for (e = u(a), f = c.length; f > h; h++) g[c[h]] = fa.css(a, c[h], !1, e);
                    return g
                }
                return d !== b ? fa.style(a, c, d) : fa.css(a, c)
            }, a, c, arguments.length > 1)
        },
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                t(this) ? fa(this).show() : fa(this).hide()
            })
        }
    }), fa.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Qa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
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
            "float": "cssFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = fa.camelCase(c),
                    j = a.style;
                return c = fa.cssProps[i] || (fa.cssProps[i] = s(j, i)), h = fa.cssHooks[c] || fa.cssHooks[i], d === b ? h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c] : (g = typeof d, "string" === g && (f = Wa.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(fa.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d) || ("number" !== g || fa.cssNumber[i] || (d += "px"), fa.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), h && "set" in h && (d = h.set(a, d, e)) === b || (j[c] = d)), b)
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = fa.camelCase(c);
            return c = fa.cssProps[i] || (fa.cssProps[i] = s(a.style, i)), h = fa.cssHooks[c] || fa.cssHooks[i], h && "get" in h && (f = h.get(a, !0, d)), f === b && (f = Qa(a, c, e)), "normal" === f && c in Za && (f = Za[c]), "" === d || d ? (g = parseFloat(f), d === !0 || fa.isNumeric(g) ? g || 0 : f) : f
        }
    }), Qa = function(a, c, d) {
        var e, f, g, h = d || u(a),
            i = h ? h.getPropertyValue(c) || h[c] : b,
            j = a.style;
        return h && ("" !== i || fa.contains(a.ownerDocument, a) || (i = fa.style(a, c)), Va.test(i) && Ta.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i
    }, fa.each(["height", "width"], function(a, c) {
        fa.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && Sa.test(fa.css(a, "display")) ? fa.swap(a, Ya, function() {
                    return y(a, c, e)
                }) : y(a, c, e) : b
            },
            set: function(a, b, d) {
                var e = d && u(a);
                return w(a, b, d ? x(a, c, d, fa.support.boxSizing && "border-box" === fa.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), fa(function() {
        fa.support.reliableMarginRight || (fa.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? fa.swap(a, {
                    display: "inline-block"
                }, Qa, [a, "marginRight"]) : b
            }
        }), !fa.support.pixelPosition && fa.fn.position && fa.each(["top", "left"], function(a, c) {
            fa.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = Qa(a, c), Va.test(d) ? fa(a).position()[c] + "px" : d) : b
                }
            }
        })
    }), fa.expr && fa.expr.filters && (fa.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    }, fa.expr.filters.visible = function(a) {
        return !fa.expr.filters.hidden(a)
    }), fa.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        fa.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + $a[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ta.test(a) || (fa.cssHooks[a + b].set = w)
    });
    var ab = /%20/g,
        bb = /\[\]$/,
        cb = /\r?\n/g,
        db = /^(?:submit|button|image|reset|file)$/i,
        eb = /^(?:input|select|textarea|keygen)/i;
    fa.fn.extend({
        serialize: function() {
            return fa.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = fa.prop(this, "elements");
                return a ? fa.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !fa(this).is(":disabled") && eb.test(this.nodeName) && !db.test(a) && (this.checked || !Ka.test(a))
            }).map(function(a, b) {
                var c = fa(this).val();
                return null == c ? null : fa.isArray(c) ? fa.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(cb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(cb, "\r\n")
                }
            }).get()
        }
    }), fa.param = function(a, c) {
        var d, e = [],
            f = function(a, b) {
                b = fa.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (c === b && (c = fa.ajaxSettings && fa.ajaxSettings.traditional), fa.isArray(a) || a.jquery && !fa.isPlainObject(a)) fa.each(a, function() {
            f(this.name, this.value)
        });
        else
            for (d in a) B(d, a[d], c, f);
        return e.join("&").replace(ab, "+")
    }, fa.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        fa.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), fa.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var fb, gb, hb = fa.now(),
        ib = /\?/,
        jb = /#.*$/,
        kb = /([?&])_=[^&]*/,
        lb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        nb = /^(?:GET|HEAD)$/,
        ob = /^\/\//,
        pb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        qb = fa.fn.load,
        rb = {},
        sb = {},
        tb = "*/".concat("*");
    try {
        gb = S.href
    } catch (ub) {
        gb = T.createElement("a"), gb.href = "", gb = gb.href
    }
    fb = pb.exec(gb.toLowerCase()) || [], fa.fn.load = function(a, c, d) {
        if ("string" != typeof a && qb) return qb.apply(this, arguments);
        var e, f, g, h = this,
            i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i), a = a.slice(0, i)), fa.isFunction(c) ? (d = c, c = b) : c && "object" == typeof c && (f = "POST"), h.length > 0 && fa.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c
        }).done(function(a) {
            g = arguments, h.html(e ? fa("<div>").append(fa.parseHTML(a)).find(e) : a)
        }).complete(d && function(a, b) {
            h.each(d, g || [a.responseText, b, a])
        }), this
    }, fa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        fa.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), fa.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gb,
            type: "GET",
            isLocal: mb.test(fb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fa.parseJSON,
                "text xml": fa.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? E(E(a, fa.ajaxSettings), b) : E(fa.ajaxSettings, a)
        },
        ajaxPrefilter: C(rb),
        ajaxTransport: C(sb),
        ajax: function(a, c) {
            function d(a, c, d, h) {
                var j, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), e = b, g = h || "", w.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, d && (t = F(m, w, d)), t = G(m, t, w, j), j ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (fa.lastModified[f] = v), v = w.getResponseHeader("etag"), v && (fa.etag[f] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, l = t.data, s = t.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), w.status = a, w.statusText = (c || x) + "", j ? p.resolveWith(n, [l, x, w]) : p.rejectWith(n, [w, x, s]), w.statusCode(r), r = b, k && o.trigger(j ? "ajaxSuccess" : "ajaxError", [w, m, j ? l : s]), q.fireWith(n, [w, x]), k && (o.trigger("ajaxComplete", [w, m]), --fa.active || fa.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = fa.ajaxSetup({}, c),
                n = m.context || m,
                o = m.context && (n.nodeType || n.jquery) ? fa(n) : fa.event,
                p = fa.Deferred(),
                q = fa.Callbacks("once memory"),
                r = m.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!h)
                                for (h = {}; b = lb.exec(g);) h[b[1].toLowerCase()] = b[2];
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return e && e.abort(b), d(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || gb) + "").replace(jb, "").replace(ob, fb[1] + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = fa.trim(m.dataType || "*").toLowerCase().match(ha) || [""], null == m.crossDomain && (j = pb.exec(m.url.toLowerCase()), m.crossDomain = !(!j || j[1] === fb[1] && j[2] === fb[2] && (j[3] || ("http:" === j[1] ? "80" : "443")) === (fb[3] || ("http:" === fb[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = fa.param(m.data, m.traditional)), D(rb, m, c, w), 2 === u) return w;
            k = m.global, k && 0 === fa.active++ && fa.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !nb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (ib.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = kb.test(f) ? f.replace(kb, "$1_=" + hb++) : f + (ib.test(f) ? "&" : "?") + "_=" + hb++)), m.ifModified && (fa.lastModified[f] && w.setRequestHeader("If-Modified-Since", fa.lastModified[f]), fa.etag[f] && w.setRequestHeader("If-None-Match", fa.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) w.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[l](m[l]);
            if (e = D(sb, m, c, w)) {
                w.readyState = 1, k && o.trigger("ajaxSend", [w, m]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout")
                }, m.timeout));
                try {
                    u = 1, e.send(s, d)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x)
                }
            } else d(-1, "No Transport");
            return w
        },
        getJSON: function(a, b, c) {
            return fa.get(a, b, c, "json")
        },
        getScript: function(a, c) {
            return fa.get(a, b, c, "script")
        }
    }), fa.each(["get", "post"], function(a, c) {
        fa[c] = function(a, d, e, f) {
            return fa.isFunction(d) && (f = f || e, e = d, d = b), fa.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            })
        }
    }), fa.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return fa.globalEval(a), a
            }
        }
    }), fa.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), fa.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = fa("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), T.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var vb = [],
        wb = /(=)\?(?=&|$)|\?\?/;
    fa.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = vb.pop() || fa.expando + "_" + hb++;
            return this[a] = !0, a
        }
    }), fa.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (wb.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && wb.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = fa.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, i ? c[i] = c[i].replace(wb, "$1" + f) : c.jsonp !== !1 && (c.url += (ib.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), c.converters["script json"] = function() {
            return h || fa.error(f + " was not called"), h[0]
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, vb.push(f)), h && fa.isFunction(g) && g(h[0]), h = g = b
        }), "script") : b
    }), fa.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var xb = fa.ajaxSettings.xhr(),
        yb = {
            0: 200,
            1223: 204
        },
        zb = 0,
        Ab = {};
    a.ActiveXObject && fa(a).on("unload", function() {
        for (var a in Ab) Ab[a]();
        Ab = b
    }), fa.support.cors = !!xb && "withCredentials" in xb, fa.support.ajax = xb = !!xb, fa.ajaxTransport(function(a) {
        var c;
        return fa.support.cors || xb && !a.crossDomain ? {
            send: function(d, e) {
                var f, g, h = a.xhr();
                if (h.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (f in a.xhrFields) h[f] = a.xhrFields[f];
                a.mimeType && h.overrideMimeType && h.overrideMimeType(a.mimeType), a.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                for (f in d) h.setRequestHeader(f, d[f]);
                c = function(a) {
                    return function() {
                        c && (delete Ab[g], c = h.onload = h.onerror = null, "abort" === a ? h.abort() : "error" === a ? e(h.status || 404, h.statusText) : e(yb[h.status] || h.status, h.statusText, "string" == typeof h.responseText ? {
                            text: h.responseText
                        } : b, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), h.onerror = c("error"), c = Ab[g = zb++] = c("abort"), h.send(a.hasContent && a.data || null)
            },
            abort: function() {
                c && c()
            }
        } : b
    });
    var Bb, Cb, Db = /^(?:toggle|show|hide)$/,
        Eb = RegExp("^(?:([+-])=|)(" + ga + ")([a-z%]*)$", "i"),
        Fb = /queueHooks$/,
        Gb = [L],
        Hb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Eb.exec(b),
                    f = e && e[3] || (fa.cssNumber[a] ? "" : "px"),
                    g = (fa.cssNumber[a] || "px" !== f && +d) && Eb.exec(fa.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, fa.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    fa.Animation = fa.extend(J, {
        tweener: function(a, b) {
            fa.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Hb[c] = Hb[c] || [], Hb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Gb.unshift(a) : Gb.push(a)
        }
    }), fa.Tween = M, M.prototype = {
        constructor: M,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (fa.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = M.propHooks[this.prop];
            return a && a.get ? a.get(this) : M.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = M.propHooks[this.prop];
            return this.pos = b = this.options.duration ? fa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = fa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                fa.fx.step[a.prop] ? fa.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[fa.cssProps[a.prop]] || fa.cssHooks[a.prop]) ? fa.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, fa.each(["toggle", "show", "hide"], function(a, b) {
        var c = fa.fn[b];
        fa.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(N(b, !0), a, d, e)
        }
    }), fa.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(t).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = fa.isEmptyObject(a),
                f = fa.speed(b, c, d),
                g = function() {
                    var b = J(this, fa.extend({}, a), f);
                    (e || qa.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d)
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    c = null != a && a + "queueHooks",
                    f = fa.timers,
                    g = qa.get(this);
                if (c) g[c] && g[c].stop && e(g[c]);
                else
                    for (c in g) g[c] && g[c].stop && Fb.test(c) && e(g[c]);
                for (c = f.length; c--;) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), b = !1, f.splice(c, 1));
                (b || !d) && fa.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = qa.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = fa.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, fa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), fa.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        fa.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), fa.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? fa.extend({}, a) : {
            complete: c || !c && b || fa.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !fa.isFunction(b) && b
        };
        return d.duration = fa.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in fa.fx.speeds ? fa.fx.speeds[d.duration] : fa.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            fa.isFunction(d.old) && d.old.call(this), d.queue && fa.dequeue(this, d.queue)
        }, d
    }, fa.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, fa.timers = [], fa.fx = M.prototype.init, fa.fx.tick = function() {
        var a, c = fa.timers,
            d = 0;
        for (Bb = fa.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || fa.fx.stop(), Bb = b
    }, fa.fx.timer = function(a) {
        a() && fa.timers.push(a) && fa.fx.start()
    }, fa.fx.interval = 13, fa.fx.start = function() {
        Cb || (Cb = setInterval(fa.fx.tick, fa.fx.interval))
    }, fa.fx.stop = function() {
        clearInterval(Cb), Cb = null
    }, fa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, fa.fx.step = {}, fa.expr && fa.expr.filters && (fa.expr.filters.animated = function(a) {
        return fa.grep(fa.timers, function(b) {
            return a === b.elem
        }).length
    }), fa.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            fa.offset.setOffset(this, a, b)
        });
        var c, d, e = this[0],
            f = {
                top: 0,
                left: 0
            },
            g = e && e.ownerDocument;
        return g ? (c = g.documentElement, fa.contains(c, e) ? (typeof e.getBoundingClientRect !== R && (f = e.getBoundingClientRect()), d = O(g), {
            top: f.top + d.pageYOffset - c.clientTop,
            left: f.left + d.pageXOffset - c.clientLeft
        }) : f) : void 0
    }, fa.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = fa.css(a, "position"),
                l = fa(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = fa.css(a, "top"), i = fa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), fa.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, fa.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === fa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), fa.nodeName(a[0], "html") || (d = a.offset()), d.top += fa.css(a[0], "borderTopWidth", !0), d.left += fa.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - fa.css(c, "marginTop", !0),
                    left: b.left - d.left - fa.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || U; a && !fa.nodeName(a, "html") && "static" === fa.css(a, "position");) a = a.offsetParent;
                return a || U
            })
        }
    }), fa.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(c, d) {
        var e = "pageYOffset" === d;
        fa.fn[c] = function(f) {
            return fa.access(this, function(c, f, g) {
                var h = O(c);
                return g === b ? h ? h[d] : c[f] : (h ? h.scrollTo(e ? a.pageXOffset : g, e ? g : a.pageYOffset) : c[f] = g, b)
            }, c, f, arguments.length, null)
        }
    }), fa.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        fa.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            fa.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e),
                    h = d || (e === !0 || f === !0 ? "margin" : "border");
                return fa.access(this, function(c, d, e) {
                    var f;
                    return fa.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? fa.css(c, d, h) : fa.style(c, d, e, h)
                }, c, g ? e : b, g, null)
            }
        })
    }), fa.fn.size = function() {
        return this.length
    }, fa.fn.andSelf = fa.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = fa : "function" == typeof define && define.amd && define("jquery", [], function() {
        return fa
    }), "object" == typeof a && "object" == typeof a.document && (a.jQuery = a.$ = fa)
}(window), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return 1 > b ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function(a, b, c) {
        "function" == typeof define && define.amd ? define(["jquery"], function(d) {
            return c(d, a, b), d.mobile
        }) : c(a.jQuery, a, b)
    }(this, document, function(a, b, c, d) {
        ! function(a, b, c, d) {
            function e(a) {
                for (; a && "undefined" != typeof a.originalEvent;) a = a.originalEvent;
                return a
            }

            function f(b, c) {
                var f, g, h, i, j, k, l, m, n, o = b.type;
                if (b = a.Event(b), b.type = c, f = b.originalEvent, g = a.event.props, o.search(/^(mouse|click)/) > -1 && (g = E), f)
                    for (l = g.length, i; l;) i = g[--l], b[i] = f[i];
                if (o.search(/mouse(down|up)|click/) > -1 && !b.which && (b.which = 1), -1 !== o.search(/^touch/) && (h = e(f), o = h.touches, j = h.changedTouches, k = o && o.length ? o[0] : j && j.length ? j[0] : d, k))
                    for (m = 0, n = C.length; n > m; m++) i = C[m], b[i] = k[i];
                return b
            }

            function g(b) {
                for (var c, d, e = {}; b;) {
                    c = a.data(b, z);
                    for (d in c) c[d] && (e[d] = e.hasVirtualBinding = !0);
                    b = b.parentNode
                }
                return e
            }

            function h(b, c) {
                for (var d; b;) {
                    if (d = a.data(b, z), d && (!c || d[c])) return b;
                    b = b.parentNode
                }
                return null
            }

            function i() {
                M = !1
            }

            function j() {
                M = !0
            }

            function k() {
                Q = 0, K.length = 0, L = !1, j()
            }

            function l() {
                i()
            }

            function m() {
                n(), G = setTimeout(function() {
                    G = 0, k()
                }, a.vmouse.resetTimerDuration)
            }

            function n() {
                G && (clearTimeout(G), G = 0)
            }

            function o(b, c, d) {
                var e;
                return (d && d[b] || !d && h(c.target, b)) && (e = f(c, b), a(c.target).trigger(e)), e
            }

            function p(b) {
                var c, d = a.data(b.target, A);
                !L && (!Q || Q !== d) && (c = o("v" + b.type, b), c && (c.isDefaultPrevented() && b.preventDefault(), c.isPropagationStopped() && b.stopPropagation(), c.isImmediatePropagationStopped() && b.stopImmediatePropagation()))
            }

            function q(b) {
                var c, d, f, h = e(b).touches;
                h && 1 === h.length && (c = b.target, d = g(c), d.hasVirtualBinding && (Q = P++, a.data(c, A, Q), n(), l(), J = !1, f = e(b).touches[0], H = f.pageX, I = f.pageY, o("vmouseover", b, d), o("vmousedown", b, d)))
            }

            function r(a) {
                M || (J || o("vmousecancel", a, g(a.target)), J = !0, m())
            }

            function s(b) {
                if (!M) {
                    var c = e(b).touches[0],
                        d = J,
                        f = a.vmouse.moveDistanceThreshold,
                        h = g(b.target);
                    J = J || Math.abs(c.pageX - H) > f || Math.abs(c.pageY - I) > f, J && !d && o("vmousecancel", b, h), o("vmousemove", b, h), m()
                }
            }

            function t(a) {
                if (!M) {
                    j();
                    var b, c, d = g(a.target);
                    o("vmouseup", a, d), J || (b = o("vclick", a, d), b && b.isDefaultPrevented() && (c = e(a).changedTouches[0], K.push({
                        touchID: Q,
                        x: c.clientX,
                        y: c.clientY
                    }), L = !0)), o("vmouseout", a, d), J = !1, m()
                }
            }

            function u(b) {
                var c, d = a.data(b, z);
                if (d)
                    for (c in d)
                        if (d[c]) return !0;
                return !1
            }

            function v() {}

            function w(b) {
                var c = b.substr(1);
                return {
                    setup: function() {
                        u(this) || a.data(this, z, {});
                        var d = a.data(this, z);
                        d[b] = !0, F[b] = (F[b] || 0) + 1, 1 === F[b] && O.bind(c, p), a(this).bind(c, v), N && (F.touchstart = (F.touchstart || 0) + 1, 1 === F.touchstart && O.bind("touchstart", q).bind("touchend", t).bind("touchmove", s).bind("scroll", r))
                    },
                    teardown: function() {
                        --F[b], F[b] || O.unbind(c, p), N && (--F.touchstart, F.touchstart || O.unbind("touchstart", q).unbind("touchmove", s).unbind("touchend", t).unbind("scroll", r));
                        var d = a(this),
                            e = a.data(this, z);
                        e && (e[b] = !1), d.unbind(c, v), u(this) || d.removeData(z)
                    }
                }
            }
            var x, y, z = "virtualMouseBindings",
                A = "virtualTouchID",
                B = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
                C = "clientX clientY pageX pageY screenX screenY".split(" "),
                D = a.event.mouseHooks ? a.event.mouseHooks.props : [],
                E = a.event.props.concat(D),
                F = {},
                G = 0,
                H = 0,
                I = 0,
                J = !1,
                K = [],
                L = !1,
                M = !1,
                N = "addEventListener" in c,
                O = a(c),
                P = 1,
                Q = 0;
            for (a.vmouse = {
                    moveDistanceThreshold: 10,
                    clickDistanceThreshold: 10,
                    resetTimerDuration: 1500
                }, y = 0; y < B.length; y++) a.event.special[B[y]] = w(B[y]);
            N && c.addEventListener("click", function(b) {
                var c, d, e, f, g, h, i = K.length,
                    j = b.target;
                if (i)
                    for (c = b.clientX, d = b.clientY, x = a.vmouse.clickDistanceThreshold, e = j; e;) {
                        for (f = 0; i > f; f++)
                            if (g = K[f], h = 0, e === j && Math.abs(g.x - c) < x && Math.abs(g.y - d) < x || a.data(e, A) === g.touchID) return b.preventDefault(), void b.stopPropagation();
                        e = e.parentNode
                    }
            }, !0)
        }(a, b, c),
        function(a) {
            a.mobile = {}
        }(a),
        function(a, b) {
            var d = {
                touch: "ontouchend" in c
            };
            a.mobile.support = a.mobile.support || {}, a.extend(a.support, d), a.extend(a.mobile.support, d)
        }(a),
        function(a, b, d) {
            function e(b, c, e, f) {
                var g = e.type;
                e.type = c, f ? a.event.trigger(e, d, b) : a.event.dispatch.call(b, e), e.type = g
            }
            var f = a(c),
                g = a.mobile.support.touch,
                h = "touchmove scroll",
                i = g ? "touchstart" : "mousedown",
                j = g ? "touchend" : "mouseup",
                k = g ? "touchmove" : "mousemove";
            a.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(b, c) {
                a.fn[c] = function(a) {
                    return a ? this.bind(c, a) : this.trigger(c)
                }, a.attrFn && (a.attrFn[c] = !0)
            }), a.event.special.scrollstart = {
                enabled: !0,
                setup: function() {
                    function b(a, b) {
                        c = b, e(f, c ? "scrollstart" : "scrollstop", a)
                    }
                    var c, d, f = this,
                        g = a(f);
                    g.bind(h, function(e) {
                        a.event.special.scrollstart.enabled && (c || b(e, !0), clearTimeout(d), d = setTimeout(function() {
                            b(e, !1)
                        }, 50))
                    })
                },
                teardown: function() {
                    a(this).unbind(h)
                }
            }, a.event.special.tap = {
                tapholdThreshold: 750,
                emitTapOnTaphold: !0,
                setup: function() {
                    var b = this,
                        c = a(b),
                        d = !1;
                    c.bind("vmousedown", function(g) {
                        function h() {
                            clearTimeout(k)
                        }

                        function i() {
                            h(), c.unbind("vclick", j).unbind("vmouseup", h), f.unbind("vmousecancel", i)
                        }

                        function j(a) {
                            i(), d || l !== a.target ? d && a.stopPropagation() : e(b, "tap", a)
                        }
                        if (d = !1, g.which && 1 !== g.which) return !1;
                        var k, l = g.target;
                        c.bind("vmouseup", h).bind("vclick", j), f.bind("vmousecancel", i), k = setTimeout(function() {
                            a.event.special.tap.emitTapOnTaphold || (d = !0), e(b, "taphold", a.Event("taphold", {
                                target: l
                            }))
                        }, a.event.special.tap.tapholdThreshold)
                    })
                },
                teardown: function() {
                    a(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), f.unbind("vmousecancel")
                }
            }, a.event.special.swipe = {
                scrollSupressionThreshold: 30,
                durationThreshold: 1e3,
                horizontalDistanceThreshold: 30,
                verticalDistanceThreshold: 30,
                getLocation: function(a) {
                    var c = b.pageXOffset,
                        d = b.pageYOffset,
                        e = a.clientX,
                        f = a.clientY;
                    return 0 === a.pageY && Math.floor(f) > Math.floor(a.pageY) || 0 === a.pageX && Math.floor(e) > Math.floor(a.pageX) ? (e -= c, f -= d) : (f < a.pageY - d || e < a.pageX - c) && (e = a.pageX - c, f = a.pageY - d), {
                        x: e,
                        y: f
                    }
                },
                start: function(b) {
                    var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b,
                        d = a.event.special.swipe.getLocation(c);
                    return {
                        time: (new Date).getTime(),
                        coords: [d.x, d.y],
                        origin: a(b.target)
                    }
                },
                stop: function(b) {
                    var c = b.originalEvent.touches ? b.originalEvent.touches[0] : b,
                        d = a.event.special.swipe.getLocation(c);
                    return {
                        time: (new Date).getTime(),
                        coords: [d.x, d.y]
                    }
                },
                handleSwipe: function(b, c, d, f) {
                    if (c.time - b.time < a.event.special.swipe.durationThreshold && Math.abs(b.coords[0] - c.coords[0]) > a.event.special.swipe.horizontalDistanceThreshold && Math.abs(b.coords[1] - c.coords[1]) < a.event.special.swipe.verticalDistanceThreshold) {
                        var g = b.coords[0] > c.coords[0] ? "swipeleft" : "swiperight";
                        return e(d, "swipe", a.Event("swipe", {
                            target: f,
                            swipestart: b,
                            swipestop: c
                        }), !0), e(d, g, a.Event(g, {
                            target: f,
                            swipestart: b,
                            swipestop: c
                        }), !0), !0
                    }
                    return !1
                },
                eventInProgress: !1,
                setup: function() {
                    var b, c = this,
                        d = a(c),
                        e = {};
                    b = a.data(this, "mobile-events"), b || (b = {
                        length: 0
                    }, a.data(this, "mobile-events", b)), b.length++, b.swipe = e, e.start = function(b) {
                        if (!a.event.special.swipe.eventInProgress) {
                            a.event.special.swipe.eventInProgress = !0;
                            var d, g = a.event.special.swipe.start(b),
                                h = b.target,
                                i = !1;
                            e.move = function(b) {
                                g && (d = a.event.special.swipe.stop(b), i || (i = a.event.special.swipe.handleSwipe(g, d, c, h), i && (a.event.special.swipe.eventInProgress = !1)), Math.abs(g.coords[0] - d.coords[0]) > a.event.special.swipe.scrollSupressionThreshold && b.preventDefault())
                            }, e.stop = function() {
                                i = !0, a.event.special.swipe.eventInProgress = !1, f.off(k, e.move), e.move = null
                            }, f.on(k, e.move).one(j, e.stop)
                        }
                    }, d.on(i, e.start)
                },
                teardown: function() {
                    var b, c;
                    b = a.data(this, "mobile-events"), b && (c = b.swipe, delete b.swipe, b.length--, 0 === b.length && a.removeData(this, "mobile-events")), c && (c.start && a(this).off(i, c.start), c.move && f.off(k, c.move), c.stop && f.off(j, c.stop))
                }
            }, a.each({
                scrollstop: "scrollstart",
                taphold: "tap",
                swipeleft: "swipe",
                swiperight: "swipe"
            }, function(b, c) {
                a.event.special[b] = {
                    setup: function() {
                        a(this).bind(c, a.noop)
                    },
                    teardown: function() {
                        a(this).unbind(c)
                    }
                }
            })
        }(a, this)
    }),
    function() {
        var a = this,
            b = a._,
            c = Array.prototype,
            d = Object.prototype,
            e = Function.prototype,
            f = c.push,
            g = c.slice,
            h = c.concat,
            i = d.toString,
            j = d.hasOwnProperty,
            k = Array.isArray,
            l = Object.keys,
            m = e.bind,
            n = function(a) {
                return a instanceof n ? a : this instanceof n ? void(this._wrapped = a) : new n(a)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n, n.VERSION = "1.7.0";
        var o = function(a, b, c) {
            if (void 0 === b) return a;
            switch (null == c ? 3 : c) {
                case 1:
                    return function(c) {
                        return a.call(b, c)
                    };
                case 2:
                    return function(c, d) {
                        return a.call(b, c, d)
                    };
                case 3:
                    return function(c, d, e) {
                        return a.call(b, c, d, e)
                    };
                case 4:
                    return function(c, d, e, f) {
                        return a.call(b, c, d, e, f)
                    }
            }
            return function() {
                return a.apply(b, arguments)
            }
        };
        n.iteratee = function(a, b, c) {
            return null == a ? n.identity : n.isFunction(a) ? o(a, b, c) : n.isObject(a) ? n.matches(a) : n.property(a)
        }, n.each = n.forEach = function(a, b, c) {
            if (null == a) return a;
            b = o(b, c);
            var d, e = a.length;
            if (e === +e)
                for (d = 0; e > d; d++) b(a[d], d, a);
            else {
                var f = n.keys(a);
                for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a)
            }
            return a
        }, n.map = n.collect = function(a, b, c) {
            if (null == a) return [];
            b = n.iteratee(b, c);
            for (var d, e = a.length !== +a.length && n.keys(a), f = (e || a).length, g = Array(f), h = 0; f > h; h++) d = e ? e[h] : h, g[h] = b(a[d], d, a);
            return g
        };
        var p = "Reduce of empty array with no initial value";
        n.reduce = n.foldl = n.inject = function(a, b, c, d) {
            null == a && (a = []), b = o(b, d, 4);
            var e, f = a.length !== +a.length && n.keys(a),
                g = (f || a).length,
                h = 0;
            if (arguments.length < 3) {
                if (!g) throw new TypeError(p);
                c = a[f ? f[h++] : h++]
            }
            for (; g > h; h++) e = f ? f[h] : h, c = b(c, a[e], e, a);
            return c
        }, n.reduceRight = n.foldr = function(a, b, c, d) {
            null == a && (a = []), b = o(b, d, 4);
            var e, f = a.length !== +a.length && n.keys(a),
                g = (f || a).length;
            if (arguments.length < 3) {
                if (!g) throw new TypeError(p);
                c = a[f ? f[--g] : --g]
            }
            for (; g--;) e = f ? f[g] : g, c = b(c, a[e], e, a);
            return c
        }, n.find = n.detect = function(a, b, c) {
            var d;
            return b = n.iteratee(b, c), n.some(a, function(a, c, e) {
                return b(a, c, e) ? (d = a, !0) : void 0
            }), d
        }, n.filter = n.select = function(a, b, c) {
            var d = [];
            return null == a ? d : (b = n.iteratee(b, c), n.each(a, function(a, c, e) {
                b(a, c, e) && d.push(a)
            }), d)
        }, n.reject = function(a, b, c) {
            return n.filter(a, n.negate(n.iteratee(b)), c)
        }, n.every = n.all = function(a, b, c) {
            if (null == a) return !0;
            b = n.iteratee(b, c);
            var d, e, f = a.length !== +a.length && n.keys(a),
                g = (f || a).length;
            for (d = 0; g > d; d++)
                if (e = f ? f[d] : d, !b(a[e], e, a)) return !1;
            return !0
        }, n.some = n.any = function(a, b, c) {
            if (null == a) return !1;
            b = n.iteratee(b, c);
            var d, e, f = a.length !== +a.length && n.keys(a),
                g = (f || a).length;
            for (d = 0; g > d; d++)
                if (e = f ? f[d] : d, b(a[e], e, a)) return !0;
            return !1
        }, n.contains = n.include = function(a, b) {
            return null == a ? !1 : (a.length !== +a.length && (a = n.values(a)), n.indexOf(a, b) >= 0)
        }, n.invoke = function(a, b) {
            var c = g.call(arguments, 2),
                d = n.isFunction(b);
            return n.map(a, function(a) {
                return (d ? b : a[b]).apply(a, c)
            })
        }, n.pluck = function(a, b) {
            return n.map(a, n.property(b))
        }, n.where = function(a, b) {
            return n.filter(a, n.matches(b))
        }, n.findWhere = function(a, b) {
            return n.find(a, n.matches(b))
        }, n.max = function(a, b, c) {
            var d, e, f = -(1 / 0),
                g = -(1 / 0);
            if (null == b && null != a) {
                a = a.length === +a.length ? a : n.values(a);
                for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d)
            } else b = n.iteratee(b, c), n.each(a, function(a, c, d) {
                e = b(a, c, d), (e > g || e === -(1 / 0) && f === -(1 / 0)) && (f = a, g = e)
            });
            return f
        }, n.min = function(a, b, c) {
            var d, e, f = 1 / 0,
                g = 1 / 0;
            if (null == b && null != a) {
                a = a.length === +a.length ? a : n.values(a);
                for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d)
            } else b = n.iteratee(b, c), n.each(a, function(a, c, d) {
                e = b(a, c, d), (g > e || e === 1 / 0 && f === 1 / 0) && (f = a, g = e)
            });
            return f
        }, n.shuffle = function(a) {
            for (var b, c = a && a.length === +a.length ? a : n.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = n.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
            return e
        }, n.sample = function(a, b, c) {
            return null == b || c ? (a.length !== +a.length && (a = n.values(a)), a[n.random(a.length - 1)]) : n.shuffle(a).slice(0, Math.max(0, b))
        }, n.sortBy = function(a, b, c) {
            return b = n.iteratee(b, c), n.pluck(n.map(a, function(a, c, d) {
                return {
                    value: a,
                    index: c,
                    criteria: b(a, c, d)
                }
            }).sort(function(a, b) {
                var c = a.criteria,
                    d = b.criteria;
                if (c !== d) {
                    if (c > d || void 0 === c) return 1;
                    if (d > c || void 0 === d) return -1
                }
                return a.index - b.index
            }), "value")
        };
        var q = function(a) {
            return function(b, c, d) {
                var e = {};
                return c = n.iteratee(c, d), n.each(b, function(d, f) {
                    var g = c(d, f, b);
                    a(e, d, g)
                }), e
            }
        };
        n.groupBy = q(function(a, b, c) {
            n.has(a, c) ? a[c].push(b) : a[c] = [b]
        }), n.indexBy = q(function(a, b, c) {
            a[c] = b
        }), n.countBy = q(function(a, b, c) {
            n.has(a, c) ? a[c]++ : a[c] = 1
        }), n.sortedIndex = function(a, b, c, d) {
            c = n.iteratee(c, d, 1);
            for (var e = c(b), f = 0, g = a.length; g > f;) {
                var h = f + g >>> 1;
                c(a[h]) < e ? f = h + 1 : g = h
            }
            return f
        }, n.toArray = function(a) {
            return a ? n.isArray(a) ? g.call(a) : a.length === +a.length ? n.map(a, n.identity) : n.values(a) : []
        }, n.size = function(a) {
            return null == a ? 0 : a.length === +a.length ? a.length : n.keys(a).length
        }, n.partition = function(a, b, c) {
            b = n.iteratee(b, c);
            var d = [],
                e = [];
            return n.each(a, function(a, c, f) {
                (b(a, c, f) ? d : e).push(a)
            }), [d, e]
        }, n.first = n.head = n.take = function(a, b, c) {
            return null != a ? null == b || c ? a[0] : 0 > b ? [] : g.call(a, 0, b) : void 0
        }, n.initial = function(a, b, c) {
            return g.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
        }, n.last = function(a, b, c) {
            return null != a ? null == b || c ? a[a.length - 1] : g.call(a, Math.max(a.length - b, 0)) : void 0
        }, n.rest = n.tail = n.drop = function(a, b, c) {
            return g.call(a, null == b || c ? 1 : b)
        }, n.compact = function(a) {
            return n.filter(a, n.identity)
        };
        var r = function(a, b, c, d) {
            if (b && n.every(a, n.isArray)) return h.apply(d, a);
            for (var e = 0, g = a.length; g > e; e++) {
                var i = a[e];
                n.isArray(i) || n.isArguments(i) ? b ? f.apply(d, i) : r(i, b, c, d) : c || d.push(i)
            }
            return d
        };
        n.flatten = function(a, b) {
            return r(a, b, !1, [])
        }, n.without = function(a) {
            return n.difference(a, g.call(arguments, 1))
        }, n.uniq = n.unique = function(a, b, c, d) {
            if (null == a) return [];
            n.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = n.iteratee(c, d));
            for (var e = [], f = [], g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (b) g && f === i || e.push(i), f = i;
                else if (c) {
                    var j = c(i, g, a);
                    n.indexOf(f, j) < 0 && (f.push(j), e.push(i))
                } else n.indexOf(e, i) < 0 && e.push(i)
            }
            return e
        }, n.union = function() {
            return n.uniq(r(arguments, !0, !0, []))
        }, n.intersection = function(a) {
            if (null == a) return [];
            for (var b = [], c = arguments.length, d = 0, e = a.length; e > d; d++) {
                var f = a[d];
                if (!n.contains(b, f)) {
                    for (var g = 1; c > g && n.contains(arguments[g], f); g++);
                    g === c && b.push(f)
                }
            }
            return b
        }, n.difference = function(a) {
            var b = r(g.call(arguments, 1), !0, !0, []);
            return n.filter(a, function(a) {
                return !n.contains(b, a)
            })
        }, n.zip = function(a) {
            if (null == a) return [];
            for (var b = n.max(arguments, "length").length, c = Array(b), d = 0; b > d; d++) c[d] = n.pluck(arguments, d);
            return c
        }, n.object = function(a, b) {
            if (null == a) return {};
            for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
            return c
        }, n.indexOf = function(a, b, c) {
            if (null == a) return -1;
            var d = 0,
                e = a.length;
            if (c) {
                if ("number" != typeof c) return d = n.sortedIndex(a, b), a[d] === b ? d : -1;
                d = 0 > c ? Math.max(0, e + c) : c
            }
            for (; e > d; d++)
                if (a[d] === b) return d;
            return -1
        }, n.lastIndexOf = function(a, b, c) {
            if (null == a) return -1;
            var d = a.length;
            for ("number" == typeof c && (d = 0 > c ? d + c + 1 : Math.min(d, c + 1)); --d >= 0;)
                if (a[d] === b) return d;
            return -1
        }, n.range = function(a, b, c) {
            arguments.length <= 1 && (b = a || 0, a = 0), c = c || 1;
            for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
            return e
        };
        var s = function() {};
        n.bind = function(a, b) {
            var c, d;
            if (m && a.bind === m) return m.apply(a, g.call(arguments, 1));
            if (!n.isFunction(a)) throw new TypeError("Bind must be called on a function");
            return c = g.call(arguments, 2), d = function() {
                if (!(this instanceof d)) return a.apply(b, c.concat(g.call(arguments)));
                s.prototype = a.prototype;
                var e = new s;
                s.prototype = null;
                var f = a.apply(e, c.concat(g.call(arguments)));
                return n.isObject(f) ? f : e
            }
        }, n.partial = function(a) {
            var b = g.call(arguments, 1);
            return function() {
                for (var c = 0, d = b.slice(), e = 0, f = d.length; f > e; e++) d[e] === n && (d[e] = arguments[c++]);
                for (; c < arguments.length;) d.push(arguments[c++]);
                return a.apply(this, d)
            }
        }, n.bindAll = function(a) {
            var b, c, d = arguments.length;
            if (1 >= d) throw new Error("bindAll must be passed function names");
            for (b = 1; d > b; b++) c = arguments[b], a[c] = n.bind(a[c], a);
            return a
        }, n.memoize = function(a, b) {
            var c = function(d) {
                var e = c.cache,
                    f = b ? b.apply(this, arguments) : d;
                return n.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
            };
            return c.cache = {}, c
        }, n.delay = function(a, b) {
            var c = g.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(null, c)
            }, b)
        }, n.defer = function(a) {
            return n.delay.apply(n, [a, 1].concat(g.call(arguments, 1)))
        }, n.throttle = function(a, b, c) {
            var d, e, f, g = null,
                h = 0;
            c || (c = {});
            var i = function() {
                h = c.leading === !1 ? 0 : n.now(), g = null, f = a.apply(d, e), g || (d = e = null)
            };
            return function() {
                var j = n.now();
                h || c.leading !== !1 || (h = j);
                var k = b - (j - h);
                return d = this, e = arguments, 0 >= k || k > b ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
            }
        }, n.debounce = function(a, b, c) {
            var d, e, f, g, h, i = function() {
                var j = n.now() - g;
                b > j && j > 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
            };
            return function() {
                f = this, e = arguments, g = n.now();
                var j = c && !d;
                return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
            }
        }, n.wrap = function(a, b) {
            return n.partial(b, a)
        }, n.negate = function(a) {
            return function() {
                return !a.apply(this, arguments)
            }
        }, n.compose = function() {
            var a = arguments,
                b = a.length - 1;
            return function() {
                for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
                return d
            }
        }, n.after = function(a, b) {
            return function() {
                return --a < 1 ? b.apply(this, arguments) : void 0
            }
        }, n.before = function(a, b) {
            var c;
            return function() {
                return --a > 0 ? c = b.apply(this, arguments) : b = null, c
            }
        }, n.once = n.partial(n.before, 2), n.keys = function(a) {
            if (!n.isObject(a)) return [];
            if (l) return l(a);
            var b = [];
            for (var c in a) n.has(a, c) && b.push(c);
            return b
        }, n.values = function(a) {
            for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
            return d
        }, n.pairs = function(a) {
            for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
            return d
        }, n.invert = function(a) {
            for (var b = {}, c = n.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
            return b
        }, n.functions = n.methods = function(a) {
            var b = [];
            for (var c in a) n.isFunction(a[c]) && b.push(c);
            return b.sort()
        }, n.extend = function(a) {
            if (!n.isObject(a)) return a;
            for (var b, c, d = 1, e = arguments.length; e > d; d++) {
                b = arguments[d];
                for (c in b) j.call(b, c) && (a[c] = b[c])
            }
            return a
        }, n.pick = function(a, b, c) {
            var d, e = {};
            if (null == a) return e;
            if (n.isFunction(b)) {
                b = o(b, c);
                for (d in a) {
                    var f = a[d];
                    b(f, d, a) && (e[d] = f)
                }
            } else {
                var i = h.apply([], g.call(arguments, 1));
                a = new Object(a);
                for (var j = 0, k = i.length; k > j; j++) d = i[j], d in a && (e[d] = a[d])
            }
            return e
        }, n.omit = function(a, b, c) {
            if (n.isFunction(b)) b = n.negate(b);
            else {
                var d = n.map(h.apply([], g.call(arguments, 1)), String);
                b = function(a, b) {
                    return !n.contains(d, b)
                }
            }
            return n.pick(a, b, c)
        }, n.defaults = function(a) {
            if (!n.isObject(a)) return a;
            for (var b = 1, c = arguments.length; c > b; b++) {
                var d = arguments[b];
                for (var e in d) void 0 === a[e] && (a[e] = d[e])
            }
            return a
        }, n.clone = function(a) {
            return n.isObject(a) ? n.isArray(a) ? a.slice() : n.extend({}, a) : a
        }, n.tap = function(a, b) {
            return b(a), a
        };
        var t = function(a, b, c, d) {
            if (a === b) return 0 !== a || 1 / a === 1 / b;
            if (null == a || null == b) return a === b;
            a instanceof n && (a = a._wrapped), b instanceof n && (b = b._wrapped);
            var e = i.call(a);
            if (e !== i.call(b)) return !1;
            switch (e) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + a == "" + b;
                case "[object Number]":
                    return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a === +b
            }
            if ("object" != typeof a || "object" != typeof b) return !1;
            for (var f = c.length; f--;)
                if (c[f] === a) return d[f] === b;
            var g = a.constructor,
                h = b.constructor;
            if (g !== h && "constructor" in a && "constructor" in b && !(n.isFunction(g) && g instanceof g && n.isFunction(h) && h instanceof h)) return !1;
            c.push(a), d.push(b);
            var j, k;
            if ("[object Array]" === e) {
                if (j = a.length, k = j === b.length)
                    for (; j-- && (k = t(a[j], b[j], c, d)););
            } else {
                var l, m = n.keys(a);
                if (j = m.length, k = n.keys(b).length === j)
                    for (; j-- && (l = m[j], k = n.has(b, l) && t(a[l], b[l], c, d)););
            }
            return c.pop(), d.pop(), k
        };
        n.isEqual = function(a, b) {
            return t(a, b, [], [])
        }, n.isEmpty = function(a) {
            if (null == a) return !0;
            if (n.isArray(a) || n.isString(a) || n.isArguments(a)) return 0 === a.length;
            for (var b in a)
                if (n.has(a, b)) return !1;
            return !0
        }, n.isElement = function(a) {
            return !(!a || 1 !== a.nodeType)
        }, n.isArray = k || function(a) {
            return "[object Array]" === i.call(a)
        }, n.isObject = function(a) {
            var b = typeof a;
            return "function" === b || "object" === b && !!a
        }, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
            n["is" + a] = function(b) {
                return i.call(b) === "[object " + a + "]"
            }
        }), n.isArguments(arguments) || (n.isArguments = function(a) {
            return n.has(a, "callee")
        }), "function" != typeof /./ && (n.isFunction = function(a) {
            return "function" == typeof a || !1
        }), n.isFinite = function(a) {
            return isFinite(a) && !isNaN(parseFloat(a))
        }, n.isNaN = function(a) {
            return n.isNumber(a) && a !== +a
        }, n.isBoolean = function(a) {
            return a === !0 || a === !1 || "[object Boolean]" === i.call(a)
        }, n.isNull = function(a) {
            return null === a
        }, n.isUndefined = function(a) {
            return void 0 === a
        }, n.has = function(a, b) {
            return null != a && j.call(a, b)
        }, n.noConflict = function() {
            return a._ = b, this
        }, n.identity = function(a) {
            return a
        }, n.constant = function(a) {
            return function() {
                return a
            }
        }, n.noop = function() {}, n.property = function(a) {
            return function(b) {
                return b[a]
            }
        }, n.matches = function(a) {
            var b = n.pairs(a),
                c = b.length;
            return function(a) {
                if (null == a) return !c;
                a = new Object(a);
                for (var d = 0; c > d; d++) {
                    var e = b[d],
                        f = e[0];
                    if (e[1] !== a[f] || !(f in a)) return !1
                }
                return !0
            }
        }, n.times = function(a, b, c) {
            var d = Array(Math.max(0, a));
            b = o(b, c, 1);
            for (var e = 0; a > e; e++) d[e] = b(e);
            return d
        }, n.random = function(a, b) {
            return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
        }, n.now = Date.now || function() {
            return (new Date).getTime()
        };
        var u = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            v = n.invert(u),
            w = function(a) {
                var b = function(b) {
                        return a[b]
                    },
                    c = "(?:" + n.keys(a).join("|") + ")",
                    d = RegExp(c),
                    e = RegExp(c, "g");
                return function(a) {
                    return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
                }
            };
        n.escape = w(u), n.unescape = w(v), n.result = function(a, b) {
            if (null != a) {
                var c = a[b];
                return n.isFunction(c) ? a[b]() : c
            }
        };
        var x = 0;
        n.uniqueId = function(a) {
            var b = ++x + "";
            return a ? a + b : b
        }, n.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var y = /(.)^/,
            z = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            A = /\\|'|\r|\n|\u2028|\u2029/g,
            B = function(a) {
                return "\\" + z[a]
            };
        n.template = function(a, b, c) {
            !b && c && (b = c), b = n.defaults({}, b, n.templateSettings);
            var d = RegExp([(b.escape || y).source, (b.interpolate || y).source, (b.evaluate || y).source].join("|") + "|$", "g"),
                e = 0,
                f = "__p+='";
            a.replace(d, function(b, c, d, g, h) {
                return f += a.slice(e, h).replace(A, B), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
            }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
            try {
                var g = new Function(b.variable || "obj", "_", f)
            } catch (h) {
                throw h.source = f, h
            }
            var i = function(a) {
                    return g.call(this, a, n)
                },
                j = b.variable || "obj";
            return i.source = "function(" + j + "){\n" + f + "}", i
        }, n.chain = function(a) {
            var b = n(a);
            return b._chain = !0, b
        };
        var C = function(a) {
            return this._chain ? n(a).chain() : a
        };
        n.mixin = function(a) {
            n.each(n.functions(a), function(b) {
                var c = n[b] = a[b];
                n.prototype[b] = function() {
                    var a = [this._wrapped];
                    return f.apply(a, arguments), C.call(this, c.apply(n, a))
                }
            })
        }, n.mixin(n), n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
            var b = c[a];
            n.prototype[a] = function() {
                var c = this._wrapped;
                return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], C.call(this, c)
            }
        }), n.each(["concat", "join", "slice"], function(a) {
            var b = c[a];
            n.prototype[a] = function() {
                return C.call(this, b.apply(this._wrapped, arguments))
            }
        }), n.prototype.value = function() {
            return this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return n
        })
    }.call(this),
    function(a, b) {
        if ("function" == typeof define && define.amd) define(["underscore", "jquery", "exports"], function(c, d, e) {
            a.Backbone = b(a, e, c, d)
        });
        else if ("undefined" != typeof exports) {
            var c = require("underscore");
            b(a, exports, c)
        } else a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender || a.$)
    }(this, function(a, b, c, d) {
        var e = a.Backbone,
            f = [],
            g = (f.push, f.slice);
        f.splice;
        b.VERSION = "1.1.2", b.$ = d, b.noConflict = function() {
            return a.Backbone = e, this
        }, b.emulateHTTP = !1, b.emulateJSON = !1;
        var h = b.Events = {
                on: function(a, b, c) {
                    if (!j(this, "on", a, [b, c]) || !b) return this;
                    this._events || (this._events = {});
                    var d = this._events[a] || (this._events[a] = []);
                    return d.push({
                        callback: b,
                        context: c,
                        ctx: c || this
                    }), this
                },
                once: function(a, b, d) {
                    if (!j(this, "once", a, [b, d]) || !b) return this;
                    var e = this,
                        f = c.once(function() {
                            e.off(a, f), b.apply(this, arguments)
                        });
                    return f._callback = b, this.on(a, f, d)
                },
                off: function(a, b, d) {
                    var e, f, g, h, i, k, l, m;
                    if (!this._events || !j(this, "off", a, [b, d])) return this;
                    if (!a && !b && !d) return this._events = void 0, this;
                    for (h = a ? [a] : c.keys(this._events), i = 0, k = h.length; k > i; i++)
                        if (a = h[i], g = this._events[a]) {
                            if (this._events[a] = e = [], b || d)
                                for (l = 0, m = g.length; m > l; l++) f = g[l], (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) && e.push(f);
                            e.length || delete this._events[a]
                        } return this
                },
                trigger: function(a) {
                    if (!this._events) return this;
                    var b = g.call(arguments, 1);
                    if (!j(this, "trigger", a, b)) return this;
                    var c = this._events[a],
                        d = this._events.all;
                    return c && k(c, b), d && k(d, arguments), this
                },
                stopListening: function(a, b, d) {
                    var e = this._listeningTo;
                    if (!e) return this;
                    var f = !b && !d;
                    d || "object" != typeof b || (d = this), a && ((e = {})[a._listenId] = a);
                    for (var g in e) a = e[g], a.off(b, d, this), (f || c.isEmpty(a._events)) && delete this._listeningTo[g];
                    return this
                }
            },
            i = /\s+/,
            j = function(a, b, c, d) {
                if (!c) return !0;
                if ("object" == typeof c) {
                    for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
                    return !1
                }
                if (i.test(c)) {
                    for (var f = c.split(i), g = 0, h = f.length; h > g; g++) a[b].apply(a, [f[g]].concat(d));
                    return !1
                }
                return !0
            },
            k = function(a, b) {
                var c, d = -1,
                    e = a.length,
                    f = b[0],
                    g = b[1],
                    h = b[2];
                switch (b.length) {
                    case 0:
                        for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                        return;
                    case 1:
                        for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f);
                        return;
                    case 2:
                        for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g);
                        return;
                    case 3:
                        for (; ++d < e;)(c = a[d]).callback.call(c.ctx, f, g, h);
                        return;
                    default:
                        for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b);
                        return
                }
            },
            l = {
                listenTo: "on",
                listenToOnce: "once"
            };
        c.each(l, function(a, b) {
            h[b] = function(b, d, e) {
                var f = this._listeningTo || (this._listeningTo = {}),
                    g = b._listenId || (b._listenId = c.uniqueId("l"));
                return f[g] = b, e || "object" != typeof d || (e = this), b[a](d, e, this), this
            }
        }), h.bind = h.on, h.unbind = h.off, c.extend(b, h);
        var m = b.Model = function(a, b) {
            var d = a || {};
            b || (b = {}), this.cid = c.uniqueId("c"), this.attributes = {}, b.collection && (this.collection = b.collection), b.parse && (d = this.parse(d, b) || {}), d = c.defaults({}, d, c.result(this, "defaults")), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
        };
        c.extend(m.prototype, h, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(a) {
                return c.clone(this.attributes)
            },
            sync: function() {
                return b.sync.apply(this, arguments)
            },
            get: function(a) {
                return this.attributes[a]
            },
            escape: function(a) {
                return c.escape(this.get(a))
            },
            has: function(a) {
                return null != this.get(a)
            },
            set: function(a, b, d) {
                var e, f, g, h, i, j, k, l;
                if (null == a) return this;
                if ("object" == typeof a ? (f = a, d = b) : (f = {})[a] = b, d || (d = {}), !this._validate(f, d)) return !1;
                g = d.unset, i = d.silent, h = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = c.clone(this.attributes), this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in f && (this.id = f[this.idAttribute]);
                for (e in f) b = f[e], c.isEqual(l[e], b) || h.push(e), c.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b, g ? delete l[e] : l[e] = b;
                if (!i) {
                    h.length && (this._pending = d);
                    for (var m = 0, n = h.length; n > m; m++) this.trigger("change:" + h[m], this, l[h[m]], d)
                }
                if (j) return this;
                if (!i)
                    for (; this._pending;) d = this._pending, this._pending = !1, this.trigger("change", this, d);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(a, b) {
                return this.set(a, void 0, c.extend({}, b, {
                    unset: !0
                }))
            },
            clear: function(a) {
                var b = {};
                for (var d in this.attributes) b[d] = void 0;
                return this.set(b, c.extend({}, a, {
                    unset: !0
                }))
            },
            hasChanged: function(a) {
                return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
            },
            changedAttributes: function(a) {
                if (!a) return this.hasChanged() ? c.clone(this.changed) : !1;
                var b, d = !1,
                    e = this._changing ? this._previousAttributes : this.attributes;
                for (var f in a) c.isEqual(e[f], b = a[f]) || ((d || (d = {}))[f] = b);
                return d
            },
            previous: function(a) {
                return null != a && this._previousAttributes ? this._previousAttributes[a] : null
            },
            previousAttributes: function() {
                return c.clone(this._previousAttributes)
            },
            fetch: function(a) {
                a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                var b = this,
                    d = a.success;
                return a.success = function(c) {
                    return b.set(b.parse(c, a), a) ? (d && d(b, c, a), void b.trigger("sync", b, c, a)) : !1
                }, L(this, a), this.sync("read", this, a)
            },
            save: function(a, b, d) {
                var e, f, g, h = this.attributes;
                if (null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, d = c.extend({
                        validate: !0
                    }, d), e && !d.wait) {
                    if (!this.set(e, d)) return !1
                } else if (!this._validate(e, d)) return !1;
                e && d.wait && (this.attributes = c.extend({}, h, e)), void 0 === d.parse && (d.parse = !0);
                var i = this,
                    j = d.success;
                return d.success = function(a) {
                    i.attributes = h;
                    var b = i.parse(a, d);
                    return d.wait && (b = c.extend(e || {}, b)), c.isObject(b) && !i.set(b, d) ? !1 : (j && j(i, a, d), void i.trigger("sync", i, a, d))
                }, L(this, d), f = this.isNew() ? "create" : d.patch ? "patch" : "update", "patch" === f && (d.attrs = e), g = this.sync(f, this, d), e && d.wait && (this.attributes = h), g
            },
            destroy: function(a) {
                a = a ? c.clone(a) : {};
                var b = this,
                    d = a.success,
                    e = function() {
                        b.trigger("destroy", b, b.collection, a)
                    };
                if (a.success = function(c) {
                        (a.wait || b.isNew()) && e(), d && d(b, c, a), b.isNew() || b.trigger("sync", b, c, a)
                    }, this.isNew()) return a.success(), !1;
                L(this, a);
                var f = this.sync("delete", this, a);
                return a.wait || e(), f
            },
            url: function() {
                var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || K();
                return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
            },
            parse: function(a, b) {
                return a
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(a) {
                return this._validate({}, c.extend(a || {}, {
                    validate: !0
                }))
            },
            _validate: function(a, b) {
                if (!b.validate || !this.validate) return !0;
                a = c.extend({}, this.attributes, a);
                var d = this.validationError = this.validate(a, b) || null;
                return d ? (this.trigger("invalid", this, d, c.extend(b, {
                    validationError: d
                })), !1) : !0
            }
        });
        var n = ["keys", "values", "pairs", "invert", "pick", "omit"];
        c.each(n, function(a) {
            m.prototype[a] = function() {
                var b = g.call(arguments);
                return b.unshift(this.attributes), c[a].apply(c, b)
            }
        });
        var o = b.Collection = function(a, b) {
                b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({
                    silent: !0
                }, b))
            },
            p = {
                add: !0,
                remove: !0,
                merge: !0
            },
            q = {
                add: !0,
                remove: !1
            };
        c.extend(o.prototype, h, {
            model: m,
            initialize: function() {},
            toJSON: function(a) {
                return this.map(function(b) {
                    return b.toJSON(a)
                })
            },
            sync: function() {
                return b.sync.apply(this, arguments)
            },
            add: function(a, b) {
                return this.set(a, c.extend({
                    merge: !1
                }, b, q))
            },
            remove: function(a, b) {
                var d = !c.isArray(a);
                a = d ? [a] : c.clone(a), b || (b = {});
                var e, f, g, h;
                for (e = 0, f = a.length; f > e; e++) h = a[e] = this.get(a[e]), h && (delete this._byId[h.id], delete this._byId[h.cid], g = this.indexOf(h), this.models.splice(g, 1), this.length--, b.silent || (b.index = g, h.trigger("remove", h, this, b)), this._removeReference(h, b));
                return d ? a[0] : a
            },
            set: function(a, b) {
                b = c.defaults({}, b, p), b.parse && (a = this.parse(a, b));
                var d = !c.isArray(a);
                a = d ? a ? [a] : [] : c.clone(a);
                var e, f, g, h, i, j, k, l = b.at,
                    n = this.model,
                    o = this.comparator && null == l && b.sort !== !1,
                    q = c.isString(this.comparator) ? this.comparator : null,
                    r = [],
                    s = [],
                    t = {},
                    u = b.add,
                    v = b.merge,
                    w = b.remove,
                    x = !o && u && w ? [] : !1;
                for (e = 0, f = a.length; f > e; e++) {
                    if (i = a[e] || {}, g = i instanceof m ? h = i : i[n.prototype.idAttribute || "id"], j = this.get(g)) w && (t[j.cid] = !0), v && (i = i === h ? h.attributes : i, b.parse && (i = j.parse(i, b)), j.set(i, b), o && !k && j.hasChanged(q) && (k = !0)), a[e] = j;
                    else if (u) {
                        if (h = a[e] = this._prepareModel(i, b), !h) continue;
                        r.push(h), this._addReference(h, b)
                    }
                    h = j || h, !x || !h.isNew() && t[h.id] || x.push(h), t[h.id] = !0
                }
                if (w) {
                    for (e = 0, f = this.length; f > e; ++e) t[(h = this.models[e]).cid] || s.push(h);
                    s.length && this.remove(s, b)
                }
                if (r.length || x && x.length)
                    if (o && (k = !0), this.length += r.length, null != l)
                        for (e = 0, f = r.length; f > e; e++) this.models.splice(l + e, 0, r[e]);
                    else {
                        x && (this.models.length = 0);
                        var y = x || r;
                        for (e = 0, f = y.length; f > e; e++) this.models.push(y[e])
                    } if (k && this.sort({
                        silent: !0
                    }), !b.silent) {
                    for (e = 0, f = r.length; f > e; e++)(h = r[e]).trigger("add", h, this, b);
                    (k || x && x.length) && this.trigger("sort", this, b)
                }
                return d ? a[0] : a
            },
            reset: function(a, b) {
                b || (b = {});
                for (var d = 0, e = this.models.length; e > d; d++) this._removeReference(this.models[d], b);
                return b.previousModels = this.models, this._reset(), a = this.add(a, c.extend({
                    silent: !0
                }, b)), b.silent || this.trigger("reset", this, b), a
            },
            push: function(a, b) {
                return this.add(a, c.extend({
                    at: this.length
                }, b))
            },
            pop: function(a) {
                var b = this.at(this.length - 1);
                return this.remove(b, a), b
            },
            unshift: function(a, b) {
                return this.add(a, c.extend({
                    at: 0
                }, b))
            },
            shift: function(a) {
                var b = this.at(0);
                return this.remove(b, a), b
            },
            slice: function() {
                return g.apply(this.models, arguments)
            },
            get: function(a) {
                return null != a ? this._byId[a] || this._byId[a.id] || this._byId[a.cid] : void 0
            },
            at: function(a) {
                return this.models[a]
            },
            where: function(a, b) {
                return c.isEmpty(a) ? b ? void 0 : [] : this[b ? "find" : "filter"](function(b) {
                    for (var c in a)
                        if (a[c] !== b.get(c)) return !1;
                    return !0
                })
            },
            findWhere: function(a) {
                return this.where(a, !0)
            },
            sort: function(a) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return a || (a = {}), c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
            },
            pluck: function(a) {
                return c.invoke(this.models, "get", a)
            },
            fetch: function(a) {
                a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                var b = a.success,
                    d = this;
                return a.success = function(c) {
                    var e = a.reset ? "reset" : "set";
                    d[e](c, a), b && b(d, c, a), d.trigger("sync", d, c, a)
                }, L(this, a), this.sync("read", this, a)
            },
            create: function(a, b) {
                if (b = b ? c.clone(b) : {}, !(a = this._prepareModel(a, b))) return !1;
                b.wait || this.add(a, b);
                var d = this,
                    e = b.success;
                return b.success = function(a, c) {
                    b.wait && d.add(a, b), e && e(a, c, b)
                }, a.save(null, b), a
            },
            parse: function(a, b) {
                return a
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(a, b) {
                if (a instanceof m) return a;
                b = b ? c.clone(b) : {}, b.collection = this;
                var d = new this.model(a, b);
                return d.validationError ? (this.trigger("invalid", this, d.validationError, b), !1) : d
            },
            _addReference: function(a, b) {
                this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a), a.collection || (a.collection = this), a.on("all", this._onModelEvent, this)
            },
            _removeReference: function(a, b) {
                this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(a, b, c, d) {
                ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
            }
        });
        var r = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
        c.each(r, function(a) {
            o.prototype[a] = function() {
                var b = g.call(arguments);
                return b.unshift(this.models), c[a].apply(c, b)
            }
        });
        var s = ["groupBy", "countBy", "sortBy", "indexBy"];
        c.each(s, function(a) {
            o.prototype[a] = function(b, d) {
                var e = c.isFunction(b) ? b : function(a) {
                    return a.get(b)
                };
                return c[a](this.models, e, d)
            }
        });
        var t = b.View = function(a) {
                this.cid = c.uniqueId("view"), a || (a = {}), c.extend(this, c.pick(a, v)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            u = /^(\S+)\s*(.*)$/,
            v = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        c.extend(t.prototype, h, {
            tagName: "div",
            $: function(a) {
                return this.$el.find(a)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(a, c) {
                return this.$el && this.undelegateEvents(), this.$el = a instanceof b.$ ? a : b.$(a), this.el = this.$el[0], c !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(a) {
                if (!a && !(a = c.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var b in a) {
                    var d = a[b];
                    if (c.isFunction(d) || (d = this[a[b]]), d) {
                        var e = b.match(u),
                            f = e[1],
                            g = e[2];
                        d = c.bind(d, this), f += ".delegateEvents" + this.cid, "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _ensureElement: function() {
                if (this.el) this.setElement(c.result(this, "el"), !1);
                else {
                    var a = c.extend({}, c.result(this, "attributes"));
                    this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className"));
                    var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
                    this.setElement(d, !1)
                }
            }
        }), b.sync = function(a, d, e) {
            var f = x[a];
            c.defaults(e || (e = {}), {
                emulateHTTP: b.emulateHTTP,
                emulateJSON: b.emulateJSON
            });
            var g = {
                type: f,
                dataType: "json"
            };
            if (e.url || (g.url = c.result(d, "url") || K()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {
                    model: g.data
                } : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
                g.type = "POST", e.emulateJSON && (g.data._method = f);
                var h = e.beforeSend;
                e.beforeSend = function(a) {
                    return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) : void 0
                }
            }
            "GET" === g.type || e.emulateJSON || (g.processData = !1), "PATCH" === g.type && w && (g.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var i = e.xhr = b.ajax(c.extend(g, e));
            return d.trigger("request", d, i, e), i
        };
        var w = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
            x = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
        b.ajax = function() {
            return b.$.ajax.apply(b.$, arguments)
        };
        var y = b.Router = function(a) {
                a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            z = /\((.*?)\)/g,
            A = /(\(\?)?:\w+/g,
            B = /\*\w+/g,
            C = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        c.extend(y.prototype, h, {
            initialize: function() {},
            route: function(a, d, e) {
                c.isRegExp(a) || (a = this._routeToRegExp(a)), c.isFunction(d) && (e = d, d = ""), e || (e = this[d]);
                var f = this;
                return b.history.route(a, function(c) {
                    var g = f._extractParameters(a, c);
                    f.execute(e, g), f.trigger.apply(f, ["route:" + d].concat(g)), f.trigger("route", d, g), b.history.trigger("route", f, d, g)
                }), this
            },
            execute: function(a, b) {
                a && a.apply(this, b)
            },
            navigate: function(a, c) {
                return b.history.navigate(a, c), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = c.result(this, "routes");
                    for (var a, b = c.keys(this.routes); null != (a = b.pop());) this.route(a, this.routes[a])
                }
            },
            _routeToRegExp: function(a) {
                return a = a.replace(C, "\\$&").replace(z, "(?:$1)?").replace(A, function(a, b) {
                    return b ? a : "([^/?]+)"
                }).replace(B, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(a, b) {
                var d = a.exec(b).slice(1);
                return c.map(d, function(a, b) {
                    return b === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
                })
            }
        });
        var D = b.History = function() {
                this.handlers = [], c.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            E = /^[#\/]|\s+$/g,
            F = /^\/+|\/+$/g,
            G = /msie [\w.]+/,
            H = /\/$/,
            I = /#.*$/;
        D.started = !1, c.extend(D.prototype, h, {
            interval: 50,
            atRoot: function() {
                return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
            },
            getHash: function(a) {
                var b = (a || this).location.href.match(/#(.*)$/);
                return b ? b[1] : ""
            },
            getFragment: function(a, b) {
                if (null == a)
                    if (this._hasPushState || !this._wantsHashChange || b) {
                        a = decodeURI(this.location.pathname + this.location.search);
                        var c = this.root.replace(H, "");
                        a.indexOf(c) || (a = a.slice(c.length))
                    } else a = this.getHash();
                return a.replace(E, "")
            },
            start: function(a) {
                if (D.started) throw new Error("Backbone.history has already been started");
                D.started = !0, this.options = c.extend({
                    root: "/"
                }, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var d = this.getFragment(),
                    e = document.documentMode,
                    f = G.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
                if (this.root = ("/" + this.root + "/").replace(F, "/"), f && this._wantsHashChange) {
                    var g = b.$('<iframe src="javascript:0" tabindex="-1">');
                    this.iframe = g.hide().appendTo("body")[0].contentWindow, this.navigate(d)
                }
                this._hasPushState ? b.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !f ? b.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = d;
                var h = this.location;
                if (this._wantsHashChange && this._wantsPushState) {
                    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                    this._hasPushState && this.atRoot() && h.hash && (this.fragment = this.getHash().replace(E, ""), this.history.replaceState({}, document.title, this.root + this.fragment))
                }
                return this.options.silent ? void 0 : this.loadUrl()
            },
            stop: function() {
                b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), this._checkUrlInterval && clearInterval(this._checkUrlInterval), D.started = !1
            },
            route: function(a, b) {
                this.handlers.unshift({
                    route: a,
                    callback: b
                })
            },
            checkUrl: function(a) {
                var b = this.getFragment();
                return b === this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))), b === this.fragment ? !1 : (this.iframe && this.navigate(b), void this.loadUrl())
            },
            loadUrl: function(a) {
                return a = this.fragment = this.getFragment(a), c.any(this.handlers, function(b) {
                    return b.route.test(a) ? (b.callback(a), !0) : void 0
                })
            },
            navigate: function(a, b) {
                if (!D.started) return !1;
                b && b !== !0 || (b = {
                    trigger: !!b
                });
                var c = this.root + (a = this.getFragment(a || ""));
                if (a = a.replace(I, ""), this.fragment !== a) {
                    if (this.fragment = a, "" === a && "/" !== c && (c = c.slice(0, -1)),
                        this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(c);
                        this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                    }
                    return b.trigger ? this.loadUrl(a) : void 0
                }
            },
            _updateHash: function(a, b, c) {
                if (c) {
                    var d = a.href.replace(/(javascript:|#).*$/, "");
                    a.replace(d + "#" + b)
                } else a.hash = "#" + b
            }
        }), b.history = new D;
        var J = function(a, b) {
            var d, e = this;
            d = a && c.has(a, "constructor") ? a.constructor : function() {
                return e.apply(this, arguments)
            }, c.extend(d, e, b);
            var f = function() {
                this.constructor = d
            };
            return f.prototype = e.prototype, d.prototype = new f, a && c.extend(d.prototype, a), d.__super__ = e.prototype, d
        };
        m.extend = o.extend = y.extend = t.extend = D.extend = J;
        var K = function() {
                throw new Error('A "url" property or function must be specified')
            },
            L = function(a, b) {
                var c = b.error;
                b.error = function(d) {
                    c && c(a, d, b), a.trigger("error", a, d, b)
                }
            };
        return b
    });
var aButton = document.createEvent("Event");
aButton.initEvent("aButton", !0, !0);
var bButton = document.createEvent("Event");
bButton.initEvent("bButton", !0, !0);
var xButton = document.createEvent("Event");
xButton.initEvent("xButton", !0, !0);
var yButton = document.createEvent("Event");
yButton.initEvent("yButton", !0, !0);
var rShoulder = document.createEvent("Event");
rShoulder.initEvent("rShoulder", !0, !0);
var lShoulder = document.createEvent("Event");
lShoulder.initEvent("lShoulder", !0, !0);
var lTrigger = document.createEvent("Event");
lTrigger.initEvent("lTrigger", !0, !0);
var lTriggerUp = document.createEvent("Event");
lTriggerUp.initEvent("lTriggerUp", !0, !0);
var rTrigger = document.createEvent("Event");
rTrigger.initEvent("rTrigger", !0, !0);
var rTriggerUp = document.createEvent("Event");
rTriggerUp.initEvent("rTriggerUp", !0, !0);
var dPadUp = document.createEvent("Event");
dPadUp.initEvent("dPadUp", !0, !0);
var dPadDown = document.createEvent("Event");
dPadDown.initEvent("dPadDown", !0, !0);
var dPadLeft = document.createEvent("Event");
dPadLeft.initEvent("dPadLeft", !0, !0);
var dPadRight = document.createEvent("Event");
dPadRight.initEvent("dPadRight", !0, !0);
var menuBtn = document.createEvent("Event");
menuBtn.initEvent("menuBtn", !0, !0);
var viewBtn = document.createEvent("Event");
viewBtn.initEvent("viewBtn", !0, !0);
var lStickPress = document.createEvent("Event");
lStickPress.initEvent("lStickPress", !0, !0);
var rStickPress = document.createEvent("Event");
rStickPress.initEvent("rStickPress", !0, !0);
var lStickUp = document.createEvent("Event");
lStickUp.initEvent("lStickUp", !0, !0);
var lStickDown = document.createEvent("Event");
lStickDown.initEvent("lStickDown", !0, !0);
var lStickRight = document.createEvent("Event");
lStickRight.initEvent("lStickRight", !0, !0);
var lStickLeft = document.createEvent("Event");
lStickLeft.initEvent("lStickLeft", !0, !0);
var rStickUp = document.createEvent("Event");
rStickUp.initEvent("rStickUp", !0, !0);
var rStickDown = document.createEvent("Event");
rStickDown.initEvent("rStickDown", !0, !0);
var rStickRight = document.createEvent("Event");
rStickRight.initEvent("rStickRight", !0, !0);
var rStickLeft = document.createEvent("Event");
rStickLeft.initEvent("rStickLeft", !0, !0);
var tabNext = document.createEvent("Event");
tabNext.initEvent("tabNext", !0, !0);
var tabPrev = document.createEvent("Event");
tabPrev.initEvent("tabPrev", !0, !0), "undefined" != typeof Windows ? (window.addEventListener("keydown", function(a) {
    switch (a.keyCode) {
        case 195:
            document.dispatchEvent(aButton);
            break;
        case 197:
            document.dispatchEvent(xButton);
            break;
        case 198:
            document.dispatchEvent(yButton);
            break;
        case 199:
            document.dispatchEvent(rShoulder);
            break;
        case 200:
            document.dispatchEvent(lShoulder);
            break;
        case 201:
            document.dispatchEvent(lTrigger);
            break;
        case 202:
            document.dispatchEvent(rTrigger);
            break;
        case 203:
            document.dispatchEvent(dPadUp);
            break;
        case 204:
            document.dispatchEvent(dPadDown);
            break;
        case 205:
            document.dispatchEvent(dPadLeft);
            break;
        case 206:
            document.dispatchEvent(dPadRight);
            break;
        case 207:
            document.dispatchEvent(menuBtn);
            break;
        case 208:
            document.dispatchEvent(viewBtn);
            break;
        case 209:
            document.dispatchEvent(lStickPress);
            break;
        case 210:
            document.dispatchEvent(rStickPress);
            break;
        case 211:
            document.dispatchEvent(lStickUp);
            break;
        case 212:
            document.dispatchEvent(lStickDown);
            break;
        case 213:
            document.dispatchEvent(lStickRight);
            break;
        case 214:
            document.dispatchEvent(lStickLeft);
            break;
        case 215:
            document.dispatchEvent(rStickUp);
            break;
        case 216:
            document.dispatchEvent(rStickDown);
            break;
        case 217:
            document.dispatchEvent(rStickRight);
            break;
        case 218:
            document.dispatchEvent(rStickLeft);
            break;
        case 9:
            1 == a.shiftKey ? document.dispatchEvent(tabPrev) : document.dispatchEvent(tabNext)
    }
}, !1), window.addEventListener("keyup", function(a) {
    switch (a.keyCode) {
        case 196:
            document.dispatchEvent(bButton);
            break;
        case 201:
            document.dispatchEvent(lTriggerUp);
            break;
        case 201:
            document.dispatchEvent(rTriggerUp)
    }
}, !1)) : (console.log("windows API not found, using keyboard layout for controls"), window.addEventListener("keydown", function(a) {
    switch (a.keyCode) {
        case 65:
            document.dispatchEvent(aButton);
            break;
        case 88:
            document.dispatchEvent(xButton);
            break;
        case 89:
            document.dispatchEvent(yButton);
            break;
        case 54:
            document.dispatchEvent(menuBtn);
            break;
        case 55:
            document.dispatchEvent(viewButton);
            break;
        case 37:
            document.dispatchEvent(dPadLeft);
            break;
        case 38:
            document.dispatchEvent(dPadUp);
            break;
        case 39:
            document.dispatchEvent(dPadRight);
            break;
        case 40:
            document.dispatchEvent(dPadDown);
            break;
        case 83:
            document.dispatchEvent(lStickPress);
            break;
        case 68:
            document.dispatchEvent(lStickLeft);
            break;
        case 82:
            document.dispatchEvent(lStickUp);
            break;
        case 70:
            document.dispatchEvent(lStickRight);
            break;
        case 67:
            document.dispatchEvent(lStickDown);
            break;
        case 76:
            document.dispatchEvent(rStickPress);
            break;
        case 74:
            document.dispatchEvent(rStickLeft);
            break;
        case 73:
            document.dispatchEvent(rStickUp);
            break;
        case 75:
            document.dispatchEvent(rStickRight);
            break;
        case 77:
            document.dispatchEvent(rStickDown);
            break;
        case 49:
            document.dispatchEvent(lTrigger);
            break;
        case 50:
            document.dispatchEvent(lShoulder);
            break;
        case 57:
            document.dispatchEvent(rShoulder);
            break;
        case 48:
            document.dispatchEvent(rTrigger)
    }
}, !1), window.addEventListener("keyup", function(a) {
    switch (a.keyCode) {
        case 66:
            document.dispatchEvent(bButton)
    }
}, !1));
var Beacon = Beacon || {};
Beacon.Model || (Beacon.Model = {}), Beacon.Collection || (Beacon.Collection = {}), Beacon.Router || (Beacon.Router = {}), Beacon.View || (Beacon.View = {}), Beacon.View.Layer || (Beacon.View.Layer = {}), Beacon.View.Section || (Beacon.View.Section = {}), Beacon.View.Popup || (Beacon.View.Popup = {}), Beacon.View.Module || (Beacon.View.Module = {});
var Templates = Templates || {};
Templates.layers || (Templates.layers = {}), Templates.sections || (Templates.sections = {}), Templates.popups || (Templates.popups = {}), Templates.modules || (Templates.modules = {}), Backbone.View.prototype.close = function() {
        var a = this;
        return a.options && a.options.permanent && 1 == a.options.permanent ? !1 : (a.stopListening(), delete beacon.currentPopup, a.options.fadeOut = a.options.fadeOut || 0, a.$el.animate({
            opacity: 0
        }, a.options.fadeOut, function() {
            a.remove(), a.$el.css("opacity", 1), a.onClose && a.onClose(), a.$el.find("video").each(function() {
                $(this).get(0).pause(), $(this).get(0).src = "", $(this).get(0).load()
            }), a.$el.find("audio").each(function() {
                $(this).get(0).pause(), $(this).get(0).src = "", $(this).get(0).load()
            }), a.childViews && _.each(a.childViews, function(a) {
                a.close()
            })
        }), void(a.model && clearTimeout(a.timer)))
    }, Backbone.View.prototype.codeExec = function() {
        var a = this;
        clearTimeout(a.codeTimer), a.codeTimer = setTimeout(function() {
            $("#beacon-media").find("#_code_stage").animate({
                opacity: 0
            }, 500, "swing", function() {
                $(this).remove(), beacon.codeDuration = 1.5 * beacon.codeDuration
            })
        }, beacon.codeDuration), $("#beacon-media").prepend("<div id='_code_stage'><div id='_code_path'><div id='_code_object'></div></div></div>"), $("#beacon-media").find("#_code_stage").animate({
            opacity: 1
        }, 500, "swing")
    }, Backbone.View.prototype.returnToParent = function() {
        var a = this;
        if (a.clearState(), "undefined" != typeof a.options.parent) var b = beacon.content.layer_views[a.options.parent.model.get("name")];
        else {
            var b = beacon.content.layer_views[beacon.content.config.get("layers")[0]];
            a.options.parent = b
        }
        if (a == b) a.exitME();
        else if ("SECTION" != a.$el.prop("tagName") && ("SECTION" == a.options.parent.$el.prop("tagName") && (b = beacon.content.layer_views[a.options.parent.$el.attr("data-parent")]), a.playUISound("back"), beacon.showLayer(b), "undefined" != typeof a.options.parent.focusContent)) {
            a.options.parent.childViews[a.options.parent.state.nav].state.nav = a.state.slide, a.options.parent.focusContent();
            var c = a.options.parent.childViews[a.options.parent.state.nav].state.nav * (-1 * a.options.parent.childViews[a.options.parent.state.nav].model.get("slideIncrement"));
            a.options.parent.childViews[a.options.parent.state.nav].$el.css("left", c)
        }
    }, Backbone.View.prototype.playUISound = function(a, b) {
        var b = b || 1;
        $("#" + beacon.currentLayerView.model.get("name") + "-ui-sound-" + a).length > 0 ? ($("#" + beacon.currentLayerView.model.get("name") + "-ui-sound-" + a).get(0).volume = b, $("#" + beacon.currentLayerView.model.get("name") + "-ui-sound-" + a).get(0).play()) : beacon.playUISound(a, b)
    }, Backbone.View.prototype.play = function(a) {
        var b = this;
        0 != this.autoplay && (this.$el.find("video").each(function() {
            $(this).stop(!0, !1), this.paused || 0 == $(this).get(0).volume ? $(this).get(0).volume = 0 : $(this).animate({
                volume: 0
            }, 400, "swing"), $(this).get(0).currentTime > 0 ? ($(this).get(0).play(), "undefined" != typeof a && a.muted || $(this).animate({
                volume: 1
            }, 400, "swing")) : 4 == $(this).get(0).readyState ? ($(this).get(0).play(), "undefined" != typeof a && a.muted || $(this).animate({
                volume: 1
            }, 400, "swing")) : $(this).get(0).oncanplay = function() {
                $(this).get(0).play(), "undefined" == typeof $(this).attr("data-played") && ($(this).attr("data-played", 1), "undefined" != typeof a && a.muted || $(this).animate({
                    volume: 1
                }, 400, "swing"))
            }, $(this).get(0).onended = function() {
                b.trigger("video:ended")
            }
        }), b.$el.find("audio").each(function() {
            $(this).get(0).currentTime > 0 ? ($(this).get(0).play(), $(this).animate({
                volume: 1
            }, 400, "swing")) : 4 == $(this).get(0).readyState ? ($(this).get(0).play(), $(this).animate({
                volume: 1
            }, 400, "swing")) : $(this).get(0).oncanplay = function() {
                $(this).get(0).play(), $(this).animate({
                    volume: 1
                }, 400, "swing")
            }
        }))
    }, Backbone.View.prototype.pause = function() {
        var a = this;
        a.$el.find("video").each(function() {
            $(this).stop(!0, !1), $(this).animate({
                volume: 0
            }, 400, "swing", function() {
                $(this).get(0).pause()
            })
        }), a.$el.find("audio").each(function() {
            $(this).stop(!0, !1), $(this).animate({
                volume: 0
            }, 400, "swing", function() {
                $(this).get(0).pause()
            })
        })
    }, Backbone.View.prototype.include = function() {
        var a = this;
        return a.render({
            context: "include"
        }), a.$el
    }, Backbone.View.prototype.saveState = function(a) {
        var b = this,
            c = "state_" + b.model.get("name"),
            a = a || b.state;
        Object.keys(a).length > 0 && (localStorage.setItem(c, JSON.stringify(a)), console.log('saved "' + b.model.get("name") + '" state in localstorage.'))
    }, Backbone.View.prototype.loadState = function() {
        var a = this;
        localStorage.getItem("state_" + a.model.get("name")) && (a.state = $.extend(a.state, JSON.parse(localStorage.getItem("state_" + a.model.get("name")))), console.log('loaded "' + a.model.get("name") + '" state from localstorage.'), a.clearState())
    }, Backbone.View.prototype.clearState = function() {
        var a = this;
        localStorage.removeItem("state_" + a.model.get("name")), console.log('cleared "' + a.model.get("name") + '" state from localstorage.')
    }, Backbone.View.prototype.setActiveSection = function(a) {
        var b = this;
        beacon.currentLayerView == b && (beacon.currentSectionView && beacon.currentSectionView.stopListening(), beacon.currentSectionView = a, beacon.currentSectionView.initControls(), b.trigger("changed:currentSection"))
    }, Backbone.View.prototype.beforeSectionChange = function() {
        for (var a = this, b = 0; b < a.childViews.length; b++) {
            a.childViews[b].stopListening();
            var c = a.shouldPlayVideo(b);
            1 == c ? a.childViews[b].play() : 2 == c && a.childViews[b].play({
                muted: !0
            })
        }
    }, Backbone.View.prototype.afterSectionChange = function() {
        for (var a = this, b = 0; b < a.childViews.length; b++) {
            var c = a.shouldPlayVideo(b);
            0 == c && a.childViews[b].pause()
        }
    }, Backbone.View.prototype.focusSectionNav = function() {
        var a = this;
        a.$el.find("ul.buttons > li").removeClass("selected active"), beacon.currentSectionView.$el.find("ul.buttons > li:eq(" + beacon.currentSectionView.state.nav + ")").addClass("selected")
    }, Backbone.View.prototype.goToURL = function() {
        var a = this,
            b = a.$el.find(".selected"),
            c = {
                extURI: $(b).attr("data-url")
            };
        "undefined" != typeof $(b).attr("data-target-pfn") && (c.targetPFN = $(b).attr("data-target-pfn")), "console" == beacon.environment && beacon.launcher(c)
    }, Backbone.View.prototype.exitME = function() {
        console.log("exitME was fired, so exiting"), "console" == beacon.environment && Windows.Xbox.System.Launcher.navigateBackAsync()
    }, Backbone.View.prototype.openProfile = function() {
        var a = this;
        a.$el.find(".selected");
        "console" == beacon.environment
    }, Backbone.View.prototype.relinquishControl = function() {
        beacon.currentLayerView.initControls(), beacon.currentSectionView ? (beacon.currentSectionView.initControls(), beacon.currentSectionView.play()) : "introduction" == beacon.currentLayerView.model.get("plugin") && 1 == beacon.currentLayerView.state.complete || beacon.currentLayerView.play()
    }, Backbone.View.prototype.showFriends = function() {
        var a = this;
        beacon.content.friends.length > 0 ? (beacon.content.friendslist.parent = a, beacon.showPopup(beacon.content.friendslist)) : console.log("not enough friends for friends pane")
    }, Backbone.Router.prototype.before = function() {}, Backbone.Router.prototype.after = function() {}, Backbone.View.prototype.navNext = function(a) {
        function b() {
            e++, d.$el.find("ul.buttons > li:eq(" + e + ")").hasClass("disabled") ? "rtl" != $("html").attr("dir") ? b() : c() : 0 == d.$el.find("ul.buttons > li:eq(" + e + ")").length ? 1 == d.model.get("circularNav") ? (e = -1, "rtl" != $("html").attr("dir") ? b() : c()) : d.trigger("navBoundary:end") : (d.$el.find("ul.buttons > li").removeClass("selected").removeClass("active"), d.$el.find("ul.buttons > li:eq(" + e + ")").addClass("selected"), "tabNext" != a.action && d.$el.find("ul.buttons > li:eq(" + e + ")").focus(), "undefined" != typeof d.state && "undefined" != typeof d.state.nav && (d.state.nav = e), d.trigger("changed:currentNav"), d.playUISound("move"))
        }

        function c() {
            e--, d.$el.find("ul.buttons > li:eq(" + e + ")").hasClass("disabled") ? "rtl" != $("html").attr("dir") ? c() : b() : e >= 0 ? (d.$el.find("ul.buttons > li").removeClass("selected").removeClass("active"), d.$el.find("ul.buttons > li:eq(" + e + ")").addClass("selected"), "tabPrev" != a.action && d.$el.find("ul.buttons > li:eq(" + e + ")").focus(), "undefined" != typeof d.state && "undefined" != typeof d.state.nav && (d.state.nav = e), d.trigger("changed:currentNav"), d.playUISound("move")) : 1 == d.model.get("circularNav") ? (e = d.$el.find("ul.buttons > li").length, "rtl" != $("html").attr("dir") ? c() : b()) : d.trigger("navBoundary:start")
        }
        var d = this,
            e = d.$el.find("ul.buttons > li.selected").index();
        d.$el.find("ul.buttons").hasClass("inactive") || ("rtl" != $("html").attr("dir") ? b() : c())
    }, Backbone.View.prototype.navPrev = function(a) {
        function b() {
            e++, d.$el.find("ul.buttons > li:eq(" + e + ")").hasClass("disabled") ? "rtl" != $("html").attr("dir") ? b() : c() : 0 == d.$el.find("ul.buttons > li:eq(" + e + ")").length ? 1 == d.model.get("circularNav") ? (e = -1, "rtl" != $("html").attr("dir") ? b() : c()) : d.trigger("navBoundary:end") : (d.$el.find("ul.buttons > li").removeClass("selected").removeClass("active"), d.$el.find("ul.buttons > li:eq(" + e + ")").addClass("selected"), "tabNext" != a.action && d.$el.find("ul.buttons > li:eq(" + e + ")").focus(), "undefined" != typeof d.state && "undefined" != typeof d.state.nav && (d.state.nav = e), d.trigger("changed:currentNav"), d.playUISound("move"))
        }

        function c() {
            e--, d.$el.find("ul.buttons > li:eq(" + e + ")").hasClass("disabled") ? "rtl" != $("html").attr("dir") ? c() : b() : e >= 0 ? (d.$el.find("ul.buttons > li").removeClass("selected").removeClass("active"), d.$el.find("ul.buttons > li:eq(" + e + ")").addClass("selected"), "tabPrev" != a.action && d.$el.find("ul.buttons > li:eq(" + e + ")").focus(), "undefined" != typeof d.state && "undefined" != typeof d.state.nav && (d.state.nav = e), d.trigger("changed:currentNav"), d.playUISound("move")) : 1 == d.model.get("circularNav") ? (e = d.$el.find("ul.buttons > li").length, "rtl" != $("html").attr("dir") ? c() : b()) : d.trigger("navBoundary:start")
        }
        var d = this,
            e = d.$el.find("ul.buttons > li.selected").index();
        d.$el.find("ul.buttons").hasClass("inactive") || ("rtl" != $("html").attr("dir") ? c() : b())
    }, Beacon.Model.BI = Backbone.Model.extend({
        defaults: {
            startTime: (new Date).getTime(),
            campaignId: "ME",
            layerTime: {},
            videoTime: {}
        },
        initialize: function() {}
    }), Beacon.Model.Compass = Backbone.Model.extend({
        initialize: function() {
            this.set("loc", beacon.lingo), this.set("env", beacon.environment.toLowerCase())
        }
    }), Beacon.Model.Config = Backbone.Model.extend({
        defaults: {
            layers: [],
            uiSounds: [{
                label: "click",
                src: "shared/audio/click.mp3"
            }, {
                label: "move",
                src: "shared/audio/move.mp3"
            }, {
                label: "back",
                src: "shared/audio/back.mp3"
            }],
            sharedStrings: {}
        },
        initialize: function() {
            this.set("loc", beacon.lingo), this.set("env", beacon.environment.toLowerCase())
        }
    }), Beacon.Model.Layer = Backbone.Model.extend({
        defaults: {
            circularNav: !1
        },
        initialize: function() {
            if (this.set("loc", beacon.lingo), this.set("env", beacon.environment.toLowerCase()), "undefined" != typeof this.get("buttons")) {
                "undefined" == typeof this.get("orientation") && this.set("orientation", "horizontal");
                for (var a = [], b = 0; b < this.get("buttons").length; b++) {
                    var c = {
                        label: this.get("buttons")[b].label,
                        "action-label": this.get("buttons")[b].label
                    };
                    c.text = this.get("buttons")[b].text, "undefined" != typeof this.get("buttons")[b].action && ("linkaction" == this.get("buttons")[b].action["#Type"] ? (null == this.get("buttons")[b].action.urls.match(/\:\/\//g) ? c.action = this.get("buttons")[b].action.urls : (c.action = "goToURL", c.url = this.get("buttons")[b].action.urls), "undefined" != typeof this.get("buttons")[b].action.TargetPFN && "" != this.get("buttons")[b].action.TargetPFN && (c.pfn = this.get("buttons")[b].action.TargetPFN), "undefined" != typeof this.get("buttons")[b].action.altUrl && (c.altUrl = this.get("buttons")[b].action.altUrl)) : "video" == this.get("buttons")[b].action["#Type"] ? (c.action = "playVideo", c.fullVideo = {
                        label: this.get("buttons")[b].label,
                        duration: this.get("buttons")[b].action.duration,
                        previewLink: {},
                        directLink: {}
                    }) : "popup" == this.get("buttons")[b].action["#Type"] && (c.action = "showScroller", c.popup = {
                        title: this.get("buttons")[b].action.title,
                        text: this.get("buttons")[b].action.text,
                        buttons: [{
                            label: "back",
                            text: this.get("buttons")[b].action.backtext,
                            background: "",
                            action: "close"
                        }, {
                            label: "scrollUp",
                            text: "",
                            background: "https://dlassets-ssl.xboxlive.com/public/content/me/programming/shared/beacon/v1/media/images/scroll-up.png",
                            action: "scrollUp"
                        }, {
                            label: "scrollDown",
                            text: "",
                            background: "https://dlassets-ssl.xboxlive.com/public/content/me/programming/shared/beacon/v1/media/images/scroll-down.png",
                            action: "scrollDown"
                        }]
                    }, this.set("popup", c.popup))), "undefined" != typeof this.get("buttons")[b].buttons && (c.buttons = this.get("buttons")[b].buttons), a.push(c)
                }
                this.set("buttons", a)
            }
        }
    }), Beacon.Model.Person = Backbone.Model.extend({
        defaults: {
            userId: "0101010101010",
            lastPlayed: "10/2/2016",
            progress: "1155/6000",
            pctDone: "41%",
            displayPicRaw: "https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/shared/images/defaultUser.jpg",
            xuid: "0101010101010",
            displayName: "WilfordBrimley",
            friendsPlaying: "0",
            userColor: {
                primaryColor: "107C10",
                secondaryColor: "032400",
                tertiaryColor: "032400"
            }
        },
        initialize: function(a) {
            var b = this;
            a && a.gamertag && b.set("displayName", a.gamertag), a && a.xboxUserId && b.set("xuid", a.xboxUserId), a && a.xboxUserId && b.set("userId", a.xboxUserId), a && a.id && 1 == a.activeUser && "0101010101010" != a.xboxUserId && beacon.proxyRequest("https://peoplehub.xboxlive.com/users/me/people/xuids(" + b.get("xuid") + ")/decoration/broadcast,detail,follower,preferredcolor", "setGamerpic", b)
        },
        doIt: function(a) {},
        setGamerpic: function(a) {
            var b = this;
            b.set("displayPicRaw", a.people[0].displayPicRaw), (new Image).src = b.get("displayPicRaw"), beacon.ready(), beacon.proxyRequest("https://titlehub.xboxlive.com/users/xuid(" + b.get("xuid") + ")/titles/titleid(" + beacon.content.config.get("social").titleID + ")/decoration/achievement,alternateTitleId,detail,image,titleHistory", "setTitleHistory", b)
        },
        updateGamerpic: function(a) {
            var b = this;
            b.set("displayPicRaw", a.people[0].displayPicRaw), (new Image).src = b.get("displayPicRaw"), beacon.currentLayerView.render(), "0101010101010" != b.get("xuid") && beacon.proxyRequest("https://titlehub.xboxlive.com/users/xuid(" + b.get("xuid") + ")/titles/titleid(" + beacon.content.config.get("social").titleID + ")/decoration/achievement,alternateTitleId,detail,image,titleHistory", "setTitleHistory", b)
        },
        setTitleHistory: function(a) {
            var b = this,
                c = a;
            if (c.titles.length > 0) {
                var d = new Date(c.titles[0].titleHistory.lastPlayed);
                b.set("lastPlayed", d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear()), b.set("progress", c.titles[0].achievment.currentGamerscore + "/" + c.titles[0].achievment.totalGamerscore), b.set("pctDone", c.titles[0].achievment.progressPercentage + "%")
            } else console.log("title history is empty, not calculating stats");
            1 == beacon.content.config.get("social").showFriendsPlaying ? (console.log("config.social.showFriendsPlaying is true, now running getFriends"), beacon.proxyRequest("https://peoplehub.xboxlive.com/users/me/people/social/decoration/titlehistory(" + beacon.content.config.get("social").titleID + ")?orderby=roster", "setFriends", b)) : console.log("config.social.showFriendsPlaying is false, not running getFriends")
        },
        setFriends: function(a) {
            JSON.parse(a)
        }
    }), Beacon.Model.Section = Backbone.Model.extend({
        defaults: {
            circularNav: !1
        },
        initialize: function() {
            this.set("loc", beacon.lingo), this.set("env", beacon.environment.toLowerCase())
        }
    }), Beacon.Collection.Friends = Backbone.Collection.extend({
        comparator: function(a) {
            return -a.get("presenceState")
        },
        model: Beacon.Model.Person
    }), Beacon.Collection.Layers = Backbone.Collection.extend({
        model: Beacon.Model.Layer
    }), Templates.layers.billboard = ["<div class='billboard_inner'>", "<% if (typeof bgAudio != 'undefined') { %>", "<audio loop src='https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/<%= bgAudio %>'></audio>", "<% } %>", "<% if (typeof bgVideo != 'undefined') { %>", "<video <% if (typeof bgAudio != 'undefined') { %>muted<% } %> loop class='background' poster='https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/<%= bgImg %>' src='https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/<%= bgVideo %>'></video>", "<% } else { %>", "<% if (typeof bgImg != 'undefined') { %>", "<% if (bgImg.indexOf('http://') !== -1 || bgImg.indexOf('https://') !== -1) { %>", "<img class='background' src='<%= bgImg %>'>", "<% } else { %>", "<img class='background' src='https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/<%= bgImg %>'>", "<% } %>", "<% } %>", "<% } %>", "<% if (typeof header[loc] != 'undefined' && header[loc].length !== 0) { %>", "<h2><%= header[loc] %></h2>", "<% } %>", "<% if (typeof description[loc] != 'undefined' && description[loc].length !== 0) { %>", "<p class='description'><%= description[loc] %></p>", "<% } %>", "<% if (typeof accessibility[loc] != 'undefined' && accessibility[loc].length !== 0) { %>", "<div class='accessibility_text'><%= accessibility[loc] %></div>", "<% } %>", "<div class='image_overlay'></div>", "<% if (buttons.length !== 0) { %>", "<ul class='buttons <%= orientation %>'>", "<% _.each(buttons, function(button,i){ %>", "<% if (typeof button.text[loc] != 'undefined') { %>", "<li tabindex='<%= i %>' class='button_<%= button.label %> mouseable <%= loc %>' data-action='<%= button.action %>' <% if (typeof button['action-label'] != 'undefined') { %>data-action-label='<%= button['action-label'] %>'<% } %> data-label='<%= button.label %>'<% if (typeof button.url !== 'undefined' && loc == 'en') { %>data-url='<%= button.url %>'<% } else if (typeof button.altUrl !== 'undefined') { %>data-url='<%= button.altUrl %>'<% } %><% if (typeof button.privID !== 'undefined') { %>data-privid='<%= button.privID %>'<% } %> <% if (typeof button['pfn'] != 'undefined') { %>data-target-pfn='<%= button['pfn'] %>'<% } %>><span><%= button.text[loc] %></span></li>", "<% } %>", "<% }); %>", "</ul>", "<% } %>", "<h3><%= guide[loc] %></h3>", "</div>"].join("\n"), Beacon.View.Layer.Billboard = Backbone.View.extend({
        el: $("<div>", {
            "class": "layer_billboard"
        }),
        state: {
            complete: "false",
            nav: 0,
            exitOnFocus: "false"
        },
        initialize: function(a) {
            var b = this;
            this.options = a || {}, this.childViews = [], b.childViews.push(new Beacon.View.Popup.Scroller({
                parent: b,
                model: new Beacon.Model.Section(b.model.get("popup")),
                fadeIn: 250,
                fadeOut: 250
            }))
        },
        initControls: function() {
            var a = this;
            a.listenTo(Backbone, {
                controllerEvent: a.focusNav,
                appFocusChange: a.maybeExit
            }), a.listenTo(Backbone, {
                mouseHover: a.mouseHover,
                mouseClick: a.aButton
            })
        },
        maybeExit: function(a) {
            var b = this;
            "gainedfocus" == a.type && "true" == b.state.exitOnFocus && (b.state.exitOnFocus = "false", b.exitME())
        },
        focusNav: function(a) {
            var b = this;
            "bButton" == a.action ? ($("body").find("#narrator").blur().remove(), b.bButton(a)) : "undefined" != typeof Windows && "narrator" == $(document.activeElement).attr("id") && 1 == Windows.Xbox.System.Internal.Accessibility.NarratorProperties.enabled ? b.$el.find("ul.buttons > li:not(.disabled):eq(" + b.state.nav + ")").focus() : "vertical" == b.model.get("orientation") || (["rStickLeft", "lShoulder", "dPadLeft", "lStickLeft", "tabPrev"].indexOf(a.action) > -1 ? b.navPrev(a) : ["rStickRight", "rShoulder", "dPadRight", "lStickRight", "tabNext"].indexOf(a.action) > -1 ? b.navNext(a) : "aButton" == a.action && b.aButton(a))
        },
        mouseHover: function(a) {
            var b = this;
            $(".mouseable").removeClass("selected"), a.target.addClass("selected"), b.state.nav = a.target.index()
        },
        bButton: function() {
            var a = this;
            a.exitME()
        },
        goToLanding: function() {
            var a = this;
            371594669 == Windows.Xbox.System.Internal.Power.PowerProperties.instantOnTitleID ? beacon.launcher({
                extURI: "ms-xbox-livetv://"
            }) : a.exitME()
        },
        sayItNow: function(a) {},
        aButton: function(a) {
            var b = this;
            b.$el.find(".selected").addClass("active"), b.playUISound("click"), setTimeout(function() {
                beacon.clickAction(b.$el.find(".selected").data("action")), "Watch the video" == b.$el.find(".selected").data("label") && "en" == b.model.get("loc") && (b.state.exitOnFocus = "true"), b.$el.find(".selected").removeClass("active")
            }, 200)
        },
        useData: function(a) {
            console.log("got titleID: "), console.log(a), 0 == a ? beacon.launcher("showStartView") : 371594669 == a && (console.log("passing URI ms-xbox-livetv://"), beacon.launcher("ms-xbox-livetv://"))
        },
        exitToTV: function() {
            var a = this;
            a.goToLanding()
        },
        showTitleId: function(a) {
            console.log(a), beacon.launcher("GoBack")
        },
        playVideo: function() {
            var a = this;
            beacon.fullScreenVideo(a.model.get("buttons")[a.$el.find(".selected").index()].fullVideo)
        },
        showScroller: function() {
            var a = this;
            a.pause(), beacon.showPopup(a.childViews[0])
        },
        render: function(a) {
            var b = this;
            if (b.model.set("loc", beacon.lingo.split("-")[0]), b.template = _.template(Templates.layers.billboard), "undefined" != typeof b.model.get("popup") && "" != b.model.get("popup") && b.childViews.push(new Beacon.View.Popup.Scroller({
                    parent: b,
                    model: new Beacon.Model.Section(b.model.get("popup")),
                    fadeIn: 250,
                    fadeOut: 250
                })), b.$el.html(b.template(b.model.toJSON())), b.$el.prepend('<div class="background_image"></div>'), "undefined" != typeof a && "include" == a.context || (b.$el.attr("id", b.model.get("name")).find("ul.buttons > li:eq(" + b.state.nav + ")").addClass("selected"), b.play()), "undefined" != typeof b.model.get("accessibility") && b.model.get("accessibility").length) var c = b.model.get("accessibility");
            else var c = b.$el.find("div.billboard_inner h2").text() + b.$el.find("div.billboard_inner p.description").text();
            beacon.narrator(c)
        },
        beforeRender: function() {},
        afterRender: function() {},
        onClose: function() {}
    }), Templates.layers.videoplayer = ["<video src='<%= source %>' type='video/mp4'></video>"].join("\n"), Beacon.View.Layer.VideoPlayer = Backbone.View.extend({
        el: $("<div>", {
            "class": "layer_videoplayer"
        }),
        state: {},
        initialize: function(a) {
            this.options = a || {}, this.childViews = [], this.template = _.template(Templates.layers.videoplayer)
        },
        initControls: function() {
            var a = this;
            a.listenTo(Backbone, {
                bButton: a.bButton
            }), a.$el.find("video")[0].onended = function(b) {
                a.bButton({
                    method: "video-end"
                })
            }
        },
        render: function(a) {
            var b = this;
            b.$el.html(b.template(b.model.toJSON())), b.play()
        },
        beforeRender: function() {},
        afterRender: function() {
            var a = this;
            beacon.startVideoTimer(a.model.get("source"))
        },
        onClose: function() {
            var a = this;
            beacon.stopVideoTimer(a.model.get("source"))
        }
    }), Beacon.View.Module.Clickback = Backbone.View.extend({
        el: $("<div>", {
            id: "module_clickback"
        }),
        initialize: function(a) {
            this.options = a || {}
        },
        render: function(a) {
            var b = this;
            return b.listenTo(Backbone, {
                mouseMove: b.mouseMove
            }), b
        },
        mouseMove: function() {
            var a = this;
            clearTimeout(a.mouseTimer), a.mouseTimer = setTimeout(function() {
                a.$el.removeClass("visible")
            }, 1e3), a.$el.addClass("visible")
        },
        onClose: function() {
            var a = this;
            a.$el.css("opacity", "")
        }
    }), Beacon.View.Module.Icon = Backbone.View.extend({
        el: $("<div>", {
            id: "module_status_icon"
        }),
        initialize: function(a) {
            this.options = a || {}
        },
        render: function(a) {
            var b = this;
            return b
        },
        show: function(a) {
            var b = this;
            switch (a) {
                case "loading":
                    b.$el.css("background-position", "20px 20px");
                    break;
                case "testing":
                    b.$el.css("background-position", "10px 10px")
            }
            b.$el.addClass("visible")
        },
        hide: function() {
            var a = this;
            a.$el.removeClass("visible")
        },
        onClose: function() {
            var a = this;
            a.$el.css("opacity", "")
        }
    }), Templates.modules.log = ["<section class='output'>", "</section>"].join("\n"), Beacon.View.Module.Log = Backbone.View.extend({
        el: $("<div>", {
            "class": "module_dev_log"
        }),
        state: {},
        initialize: function(a) {
            this.options = a || {}, this.childViews = [], this.template = _.template(Templates.modules.log)
        },
        initControls: function() {},
        update: function(a) {
            var b = this;
            $(b.el).find(".output").append(a + "<br>");
            var c = $(b.el).find(".output").html().split("<br>");
            c.pop(), $(b.el).height() > 720 && (c.shift(), c.push(""), $(b.el).find(".output").html(c.join("<br>")))
        },
        render: function(a) {
            var b = this;
            b.$el.html(b.template()), b.$el.hover(function() {
                b.$el.animate({
                    opacity: .2
                }, 150)
            }, function() {
                b.$el.animate({
                    opacity: 1
                }, 150)
            })
        },
        beforeRender: function() {},
        afterRender: function() {},
        onClose: function() {}
    }), Templates.modules.preroll_image = ["<img src='https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/<%= image %>'>"].join("\n"), Templates.modules.preroll_video = ["<% if (video.includes('http://')) { %>", "<video src='<%= video %>' type='video/mp4'></video>", "<% } else { %>", "<video src='https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/<%= video %>' type='video/mp4'></video>", "<% } %>", "<% if (skip_cta !== '' && typeof skip_cta[loc] != 'undefined') { %>", "<ul class='buttons'>", "<li id='skip_cta' class='selected mouseable' <%= loc %>' ><span><%= skip_cta[loc] %></span></li>", "</ul>", "<% } %>"].join("\n"), Beacon.View.Module.Preroll = Backbone.View.extend({
        el: $("<div>", {
            "class": "module_preroll"
        }),
        state: {},
        initialize: function(a) {
            var b = this;
            this.options = a || {}, this.childViews = [], "undefined" != typeof b.model.get("video") ? (b.type = "video", "undefined" != typeof b.model.get("skip_cta")[beacon.lingo] && (b.listenTo(Backbone, {
                aButton: b.skipPreroll,
                bButton: b.exitME
            }), b.listenTo(Backbone, {
                mouseClick: b.skipPreroll
            })), this.template = _.template(Templates.modules.preroll_video)) : (b.type = "image", this.template = _.template(Templates.modules.preroll_image))
        },
        mouseHover: function(a) {
            var b = this;
            $(".mouseable").removeClass("selected"), a.target.addClass("selected"), b.state.nav = a.target.index()
        },
        aButton: function(a) {
            var b = this;
            b.$el.find(".selected").addClass("active"), b.playUISound("click"), setTimeout(function() {
                beacon.clickAction(b.$el.find(".selected").data("action")), b.$el.find(".selected").removeClass("active")
            }, 200)
        },
        skipPreroll: function() {
            var a = this;
            "video" == a.type && (a.$el.find("#skip_cta").addClass("active"), setTimeout(function() {
                a.trigger("ended:prerollVideo"), a.$el.find("#skip_cta").removeClass("active")
            }, 200))
        },
        render: function(a) {
            var b = this;
            b.$el.html(b.template(b.model.toJSON())), $("body").prepend(b.el), "video" == b.type && (b.play(), b.$el.find("video")[0].onended = function() {
                b.trigger("ended:prerollVideo")
            })
        },
        fadeOut: function() {
            var a = this;
            a.$el.animate({
                opacity: 0
            }, 300, function() {
                a.close()
            })
        },
        beforeRender: function() {},
        afterRender: function() {},
        onClose: function() {}
    }), Templates.modules.social = ["<section class='blab'>", "<ul class='friends'></ul>", "</section>"].join("\n"), Templates.modules.social_friend = ["<div class='gamerpic'><div class='img' style='background-image:url(<%= displayPicRaw %>&w=128&h=128)'></div></div>", "<div class='info'>", "<p class='player-name'><%= displayName %></p>", "<% if (typeof friendsPlaying != 'undefined') { %><p class='friends-playing'><%= friendsPlaying %> <%= beacon.content.config.get('sharedStrings')['friendsPlaying'][beacon.lingo] %></p><% } %>", "<p class='last-played'><%= beacon.content.config.get('sharedStrings')['lastPlayed'][beacon.lingo] %> <%= lastPlayed %></p>", "<div class='progress-labels'>", "<span class='gs-logo'>G</span>", "<span class='gs-points'><%= progress %></span>", "<span class='gs-percent'><%= pctDone %></span>", "</div>", "<div class='achievement-progress-outer'><div class='achievement-progress-inner' style='width:<%= pctDone %>'></div></div>", "</div>"].join("\n"),
    Beacon.View.Module.Social = Backbone.View.extend({
        el: $("<div>", {
            "class": "social_slider stage1"
        }),
        initialize: function(a) {
            this.options = a || {}, this.childViews = [], this.state = 0, this.template = _.template(Templates.modules.social)
        },
        render: function(a) {
            var b = this;
            b.listenTo(beacon.content.friendslist, {
                "friends:opened": function() {
                    $(b.$el.animate({
                        opacity: 0
                    }, 400))
                },
                "friends:closed": function() {
                    $(b.$el.animate({
                        opacity: 1
                    }, 400))
                }
            }), b.$el.html(b.template()), beacon.currentUser ? beacon.currentUser.set("friendsPlaying", beacon.content.friends.length) : beacon.currentUser = new Beacon.Model.Person;
            var c = new Beacon.View.Module.SocialFriend({
                model: beacon.currentUser,
                parent: b
            });
            return b.$el.find("ul.friends").append($(c.render().el).removeClass("friend").addClass("me")), beacon.content.friends.forEach(function(a) {
                var c = new Beacon.View.Module.SocialFriend({
                    model: a,
                    parent: b
                });
                b.$el.find("ul.friends").append(c.render().el)
            }), setTimeout(function() {
                b.socialProgress(), setTimeout(function() {
                    b.socialProgress(), b.progressInterval = setInterval(function() {
                        b.socialProgress()
                    }, 4e3)
                }, 2e3)
            }, 5e3), b
        },
        socialProgress: function() {
            var a = this;
            0 == a.state ? (a.state++, $(a.$el.find("ul.friends > li.me > .info")).animate({
                opacity: 0
            }, 400, function() {
                $(a.$el).removeClass("stage1").addClass("stage2")
            })) : 1 == a.state ? (a.state++, $(a.$el).removeClass("stage2").addClass("stage3"), setTimeout(function() {
                $(a.$el).find("ul.friends > li.me").remove(), a.state++, $(a.$el).removeClass("stage3").addClass("stage4"), $(a.$el).find("ul.friends > li:last-child").addClass("current")
            }, 400)) : 3 == a.state && $(a.$el.find("ul.friends")).animate({
                opacity: 0
            }, 400, function() {
                var b = $(a.$el).find("ul.friends > li.current").index();
                $(a.$el).find("ul.friends > li").removeClass("current"), b >= 1 ? b-- : b = $(a.$el).find("ul.friends > li:last-child").index(), $(a.$el).find("ul.friends").css("right", -575), $(a.$el).find("ul.friends > li:eq(" + b + ")").addClass("current"), $(a.$el.find("ul.friends")).css("opacity", 100).animate({
                    right: 0
                }, 400)
            })
        },
        mouseMove: function() {},
        onClose: function() {
            var a = this;
            clearInterval(a.progressInterval)
        }
    }), Beacon.View.Module.SocialFriend = Backbone.View.extend({
        tagName: "li",
        className: "friend",
        initialize: function(a) {
            this.template = _.template(Templates.modules.social_friend)
        },
        render: function(a) {
            var b = this,
                c = b.model.toJSON();
            return b.$el.html(b.template(c)), b
        }
    }), Templates.popups.friendslist = ["<section class='sidebar'>", "<div class='ui'><div class='close_modal mouseable' data-action='close'></div>", "</div><div class='content'><ul class='friends'></ul></div>", "</section>"].join("\n"), Templates.popups.friend = ["<div class='blip'></div>", "<div class='gamerpic'><div class='img' style='background-image:url(<%= displayPicRaw %>&w=128&h=128)'></div></div>", "<div class='info'>", "<div class='row'><span class='gamertag'><%= displayName %></span><span class='realname'><%= realName %></span></div>", "<div class='row'><span class='presence'><%= presenceText %></span></div>", "</div>"].join("\n"), Beacon.View.Popup.Friend = Backbone.View.extend({
        tagName: "li",
        className: "friend mouseable",
        initialize: function(a) {
            this.template = _.template(Templates.popups.friend)
        },
        render: function(a) {
            var b = this,
                c = b.model.toJSON();
            return "Offline" == c.presenceState ? b.$el.addClass("offline") : b.$el.addClass("online"), b.$el.attr("data-xuid", c.xuid).html(b.template(c)), b.$el.hasClass("online") && 0 == beacon.content.friendslist.$el.find(".online > .header").length ? b.$el.prepend("<div class=header>" + beacon.content.config.get("sharedStrings").online[beacon.lingo] + "</div>") : b.$el.hasClass("offline") && 0 == beacon.content.friendslist.$el.find(".offline > .header").length && b.$el.prepend("<div class=header>" + beacon.content.config.get("sharedStrings").offline[beacon.lingo] + "</div>"), b.$el.attr("data-action", "openProfile"), b.$el.attr("data-label", "friend-xuid-" + c.xuid), b
        }
    }), Beacon.View.Popup.FriendsList = Backbone.View.extend({
        el: $("<div>", {
            "class": "popup_friends"
        }),
        displayAt: "layer",
        state: {},
        initialize: function(a) {
            this.options = a || {}, this.childViews = [], this.template = _.template(Templates.popups.friendslist), (new Image).src = "https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/shared/images/menu_x.png"
        },
        initControls: function() {
            var a = this;
            a.listenTo(Backbone, {
                "rStickDown rTrigger dPadDown lStickDown": a.nextFriend,
                "rStickUp lTrigger dPadUp lStickUp": a.prevFriend,
                "rStickLeft lShoulder dPadLeft lStickLeft": a.navLeft,
                "rStickRight rShoulder dPadRight lStickRight": a.navRight,
                bButton: a.clickElement,
                aButton: a.aButton
            }), a.listenTo(Backbone, {
                mouseHover: a.mouseHover,
                mouseClick: a.aButton
            })
        },
        nextFriend: function(a) {
            function b() {
                d++, c.$el.find("ul.friends > li:eq(" + d + ")").hasClass("disabled") ? b() : c.$el.find("ul.friends > li:eq(" + d + ")").length > 0 && (c.$el.find("ul.friends > li").removeClass("selected"), c.$el.find("ul.friends > li:eq(" + d + ")").addClass("selected"), c.playUISound("move"))
            }
            var c = this;
            if (c.$el.find(".selected").hasClass("friend")) {
                var d = c.$el.find("ul.friends > li.selected").index();
                b()
            }
        },
        prevFriend: function(a) {
            function b() {
                d--, c.$el.find("ul.friends > li:eq(" + d + ")").hasClass("disabled") ? b() : d >= 0 && (c.$el.find("ul.friends > li").removeClass("selected"), c.$el.find("ul.friends > li:eq(" + d + ")").addClass("selected"), c.playUISound("move"))
            }
            var c = this;
            if (c.$el.find(".selected").hasClass("friend")) {
                var d = c.$el.find("ul.friends > li.selected").index();
                b()
            }
        },
        navLeft: function(a) {
            var b = this;
            b.$el.find(".selected").hasClass("friend") && (b.$el.find(".mouseable").removeClass("selected"), b.$el.find(".close_modal").addClass("selected"))
        },
        navRight: function(a) {
            var b = this;
            b.$el.find(".selected").hasClass("close_modal") && (b.$el.find(".mouseable").removeClass("selected"), b.$el.find("ul.friends > li:first-child").addClass("selected"))
        },
        aButton: function(a) {
            var b = this;
            b.$el.find(".selected").addClass("active"), setTimeout(function() {
                var a = b.$el.find(".selected").data("action");
                "close" == a ? (b.playUISound("back"), b.$el.find(".sidebar").animate({
                    right: "-35%"
                }, 200, "linear", function() {
                    b[a](), b.trigger("friends:closed"), b.relinquishControl()
                })) : b[a](), b.$el.find(".selected").removeClass("active")
            }, 200)
        },
        clickElement: function(a) {
            var b = this;
            "undefined" != typeof a ? -1 === ["rStickDown", "rTrigger", "dPadDown", "lStickDown", "mousewheelDown"].indexOf(a.action) || b.$el.find(".button_scrollDown").hasClass("disabled") ? -1 === ["rStickUp", "lTrigger", "dPadUp", "lStickUp", "mousewheelUp"].indexOf(a.action) || b.$el.find(".button_scrollUp").hasClass("disabled") ? "bButton" == a.action && (b.$el.find(".mouseable").removeClass("selected"), b.$el.find(".close_modal").addClass("selected"), b.aButton()) : (b.$el.find(".mouseable").removeClass("selected"), b.$el.find(".button_scrollUp").addClass("selected"), b.aButton()) : (b.$el.find(".mouseable").removeClass("selected"), b.$el.find(".button_scrollDown").addClass("selected"), b.aButton()) : b.$el.find(".sidebar").animate({
                right: "-35%"
            }, 200, "linear", function() {
                b.close(), b.trigger("friends:closed"), b.relinquishControl()
            })
        },
        mouseHover: function(a) {
            var b = this;
            b.$el.find(".mouseable").removeClass("selected"), a.target.addClass("selected")
        },
        render: function(a) {
            var b = this,
                c = 0;
            return b.$el.html(b.template()), beacon.content.friends.forEach(function(a) {
                if (10 > c) {
                    var d = new Beacon.View.Popup.Friend({
                        model: a,
                        parent: b
                    });
                    b.$el.find("ul.friends").append(d.render().el), c++
                }
            }), b.$el.find("ul.friends > li:eq(0)").addClass("selected"), b.$el.find("ul.friends > li.online > div.header").append(" (" + b.$el.find("ul.friends > li.online").length + ")"), b.$el.find("ul.friends > li.offline > div.header").append(" (" + b.$el.find("ul.friends > li.offline").length + ")"), b
        },
        beforeRender: function() {},
        afterRender: function() {
            var a = this;
            a.trigger("friends:opened"), a.$el.find(".sidebar").animate({
                right: "0px"
            }, 200, "linear", function() {})
        },
        onClose: function() {}
    }), Templates.popups.scroller = ["<section class='b-band'>", "<div class='title'>", "<h2><%= title %></h2>", "<hr>", "</div>", "<div class='content'>", "<div class='scroller'>", "<%= text %>", "</div>", "</div>", "<ul class='buttons'>", "<% _.each(buttons, function(button,i){ %>", "<li class='button_<%= button.label %> mouseable <%= loc %>' <% if (button.background !== '') { %>style='background-image:url(<%= button.background %>)' <% } %> data-action='<%= button.action %>'><% if (typeof button.text !== 'undefined') { %> <%= button.text %> <% } %></li>", "<% }); %>", "</ul>", "</section>"].join("\n"), Beacon.View.Popup.Scroller = Backbone.View.extend({
        el: $("<div>", {
            "class": "popup_scroller"
        }),
        options: {
            fadeIn: 0,
            fadeOut: 0
        },
        initialize: function(a) {
            this.options = a || {}, this.childViews = [], this.template = _.template(Templates.popups.scroller)
        },
        initControls: function() {
            var a = this;
            a.listenTo(Backbone, {
                "rStickDown rTrigger dPadDown lStickDown": a.clickElement,
                "rStickUp lTrigger dPadUp lStickUp": a.clickElement,
                "rStickLeft lShoulder dPadLeft lStickLeft": a.navPrev,
                "rStickRight rShoulder dPadRight lStickRight": a.navNext,
                bButton: a.clickElement,
                aButton: a.aButton
            }), a.listenTo(Backbone, {
                mouseHover: a.mouseHover,
                mouseClick: a.aButton
            })
        },
        aButton: function(a) {
            var b = this;
            b.$el.find(".selected").addClass("active"), setTimeout(function() {
                var a = b.$el.find(".selected").data("action");
                b[a](), "close" == a && b.relinquishControl(), b.$el.find(".selected").removeClass("active")
            }, 200)
        },
        clickElement: function(a) {
            var b = this;
            "undefined" != typeof a ? -1 === ["rStickDown", "rTrigger", "dPadDown", "lStickDown", "mousewheelDown"].indexOf(a.action) || b.$el.find(".button_scrollDown").hasClass("disabled") ? -1 === ["rStickUp", "lTrigger", "dPadUp", "lStickUp", "mousewheelUp"].indexOf(a.action) || b.$el.find(".button_scrollUp").hasClass("disabled") ? "bButton" == a.action && (b.$el.find(".mouseable").removeClass("selected"), b.$el.find(".button_back").addClass("selected"), b.aButton()) : (b.$el.find(".mouseable").removeClass("selected"), b.$el.find(".button_scrollUp").addClass("selected"), b.aButton()) : (b.$el.find(".mouseable").removeClass("selected"), b.$el.find(".button_scrollDown").addClass("selected"), b.aButton()) : (b.$el.find(".mouseable").removeClass("selected"), b.$el.find(".button_back").addClass("selected"), b.aButton())
        },
        scrollDown: function() {
            var a = this,
                b = parseInt(a.$el.find(".scroller").css("margin-top")) || 0; - 1 * b < a.$el.find(".scroller").outerHeight() - a.$el.find(".content").outerHeight() && (b = 300 * Math.ceil(b / 300) - 300, a.$el.find(".scroller").animate({
                "margin-top": b
            }, 250), a.$el.find("ul.buttons > li.button_scrollUp").removeClass("disabled"), -1 * b >= a.$el.find(".scroller").outerHeight() - a.$el.find(".content").outerHeight() && (a.$el.find("ul.buttons > li.button_scrollDown").addClass("disabled"), a.$el.find(".mouseable").removeClass("selected"), a.$el.find(".button_scrollUp").addClass("selected")))
        },
        scrollUp: function() {
            var a = this,
                b = parseInt(a.$el.find(".scroller").css("margin-top")) || 0;
            0 > b && (b = 300 * Math.floor(b / 300) + 300, a.$el.find(".scroller").animate({
                "margin-top": b
            }, 250), a.$el.find("ul.buttons > li.button_scrollDown").removeClass("disabled"), 0 == b && (a.$el.find("ul.buttons > li.button_scrollUp").addClass("disabled"), a.$el.find(".mouseable").removeClass("selected"), a.$el.find(".button_scrollDown").addClass("selected")))
        },
        mouseHover: function(a) {
            var b = this;
            b.$el.find(".mouseable").removeClass("selected"), a.target.addClass("selected")
        },
        render: function(a) {
            var b = this;
            return b.$el.html(b.template(b.model.toJSON())), b.$el.find("ul.buttons > li:eq(0)").addClass("selected"), b.$el.find("ul.buttons > li.button_scrollUp").addClass("disabled"), b
        },
        beforeRender: function() {},
        afterRender: function() {
            var a = this;
            a.$el.css("opacity", 0).animate({
                opacity: 1
            }, a.options.fadeIn), a.$el.find(".scroller").outerHeight() <= a.$el.find(".content").outerHeight() && a.$el.find("ul.buttons > li.button_scrollDown").addClass("disabled")
        },
        onClose: function() {}
    }), Beacon.Router = Backbone.Router.extend({
        initialize: function(a) {},
        routes: {
            "*_anyRoute": "goToLayer"
        },
        goToLayer: function() {
            function a() {
                if (beacon.content.layer_views[c.layer]) beacon.showLayer(beacon.content.layer_views[c.layer], c);
                else {
                    if ("undefined" != typeof beacon.content.config.get("landing")) var a = beacon.content.config.get("landing");
                    else var a = beacon.content.config.get("layers")[0] + "(default)";
                    c.layer ? console.error('Could not find matching view for layer "' + c.layer + '". Redirecting to landing: "' + a + '".') : console.log('No layer specified. Going to landing: "' + a + '".'), beacon.content.layer_views[a] ? beacon.showLayer(beacon.content.layer_views[a], c) : (console.error('Specified landing layer not found. Defaulting to "' + beacon.content.config.get("layers")[0] + '".'), beacon.showLayer(beacon.content.layer_views[beacon.content.config.get("layers")[0]], c))
                }
                $("#pgLoad").remove(), $("#beacon-media > img").remove()
            }
            var b = this,
                c = {};
            beacon.queryString && (c = b.getQueryParameters(beacon.queryString)), c.preroll && "false" == c.preroll || "undefined" == typeof beacon.content.layer_views.preroll || "false" == localStorage.getItem(beacon.content.config.get("biGroupID") + "Preroll") ? a() : (beacon.content.layer_views.preroll.render(), "image" == beacon.content.layer_views.preroll.type ? setTimeout(function() {
                a(), beacon.content.layer_views.preroll.fadeOut()
            }, beacon.content.layer_models.preroll.get("delay")) : b.listenTo(beacon.content.layer_views.preroll, {
                "ended:prerollVideo": function() {
                    a(), beacon.content.layer_views.preroll.fadeOut()
                }
            }))
        },
        getQueryParameters: function(a) {
            return (a || document.location.search).replace(/(^\?)/, "").split("&").map(function(a) {
                return a = a.split("="), this[a[0]] = a[1], this
            }.bind({}))[0]
        }
    }), Beacon.App = function(a) {
        return _.extend({
            content: {
                ctrlLog: []
            },
            queryString: a.queryString,
            ctrlCooldown: !1,
            ctrlLog: [],
            codeLog: [],
            preloadQueue: [],
            preloadCache: [],
            codeDuration: 6e3,
            proxyRequests: {},
            version: "1508189646834",
            focusChange: function(a) {
                var b = this;
                try {
                    a.aumid == beacon.appFocus || (-1 === a.aumid.indexOf(Windows.ApplicationModel.Package.current.id.name) ? (Backbone.trigger("appFocusChange", {
                        type: "lostfocus"
                    }), console.log("switching focus from " + beacon.appFocus + " to " + a.aumid)) : (Backbone.trigger("appFocusChange", {
                        type: "gainedfocus"
                    }), setTimeout(function() {
                        null == Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser && "0101010101010" != b.currentUser.get("xuid") ? b.launcher({
                            appFunction: "GetUser"
                        }, "updateCurrentUser", beacon) : null != Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser && "0101010101010" == b.currentUser.get("xuid") ? b.launcher({
                            appFunction: "GetUser"
                        }, "updateCurrentUser", beacon) : b.currentUser.get("xuid") != Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser.xboxUserId && b.launcher({
                            appFunction: "GetUser"
                        }, "updateCurrentUser", beacon)
                    }, 100), console.log("switching focus from " + beacon.appFocus + " to " + a.aumid + ". hey, that's me!"), "undefined" != typeof Windows.Xbox.System.Internal.Personalization && "undefined" != typeof beacon.content.config && ("dark" == beacon.content.config.get("theme") && 1 == Windows.Xbox.System.Internal.Personalization.SystemPersonalization.defaultSystemTheme || "light" == beacon.content.config.get("theme") && 0 == Windows.Xbox.System.Internal.Personalization.SystemPersonalization.defaultSystemTheme ? (console.log("reloading JSON from Compass because the theme changed"), beacon.loadData()) : console.log("the theme did not change, so json was not re-fetched"))), beacon.appFocus = a.aumid)
                } catch (c) {
                    console.log(c)
                }
            },
            initialize: function() {
                var a = this;
                a.router = new Beacon.Router, "undefined" != typeof Windows && "undefined" != typeof Windows.Xbox ? (a.appFocus = Windows.ApplicationModel.Package.current.id.name, a.environment = "console", Windows.Xbox.ApplicationModel.ApplicationFocusManagement.removeEventListener("focusedappchanged", function(b) {
                    a.focusChange(b)
                }, !1), Windows.Xbox.ApplicationModel.ApplicationFocusManagement.addEventListener("focusedappchanged", function(b) {
                    a.focusChange(b)
                }, !1)) : "undefined" == typeof Windows && (a.environment = "browser"), a.content.stockCSS = $("head").find("style").text();
                var b = a.router.getQueryParameters(beacon.queryString);
                "true" == b.dev && (a.devMode = !0, a.content.log = new Beacon.View.Module.Log({}), a.content.log.render(), $("body").prepend(a.content.log.el)), "true" == b.clear && localStorage.clear(), "undefined" != typeof Windows && "undefined" != typeof Windows.Xbox && "undefined" == typeof b.lingo ? b.lingo = Windows.Xbox.System.Internal.Console.ConsoleProperties.currentLanguage : b.lingo = "en-us", -1 != b.lingo.indexOf(";") && (b.lingo = b.lingo.split(";")[1]), a.lingo = b.lingo.toLowerCase(), a.loadData(), $(document).focusin(function() {
                    "narrator" == $(document.activeElement).attr("id") || $("body").find("#narrator").remove()
                })
            },
            controllerEvent: function(a) {
                function b() {
                    clearTimeout(beacon.ctrlLogCooldown), beacon.ctrlLog = []
                }

                function c() {
                    clearTimeout(beacon.codeLogCooldown), beacon.codeLog = []
                }
                var d = this;
                beacon.ctrlLogCooldown && clearTimeout(beacon.ctrlLogCooldown), beacon.ctrlLogCooldown = setTimeout(b, 1e3), beacon.codeLogCooldown && clearTimeout(beacon.codeLogCooldown), beacon.codeLogCooldown = setTimeout(c, 1e3), beacon.ctrlLog.push(a.type), beacon.ctrlLog.length > 3 && beacon.ctrlLog.shift(), beacon.codeLog.push(a.type), beacon.codeLog.length > 10 && beacon.codeLog.shift(), beacon.ctrlLog.toString() == ["lTrigger", "rTrigger", "yButton"].toString() ? (console.log("reloading JSON from Compass..."), beacon.loadData({
                    icon: "reloading"
                })) : beacon.ctrlLog.toString() == ["lTrigger", "rTrigger", "xButton"].toString() && (console.log("clearing localstorage..."), localStorage.clear(), beacon.currentLayerView.render()), beacon.codeLog.toString() == ["dPadUp", "dPadUp", "dPadDown", "dPadDown", "dPadLeft", "dPadRight", "dPadLeft", "dPadRight", "bButton", "aButton"].toString() && beacon.currentLayerView.codeExec(), d.ctrlCooldown || (d.ctrlCooldown = !0, beacon.codeLog.toString() == ["dPadUp", "dPadUp", "dPadDown", "dPadDown", "dPadLeft", "dPadRight", "dPadLeft", "dPadRight", "bButton"].toString() || (Backbone.trigger(a.type, {
                    action: a.type,
                    method: "controller"
                }), Backbone.trigger("controllerEvent", {
                    action: a.type
                })), setTimeout(function() {
                    d.ctrlCooldown = !1
                }, 200))
            },
            kbmEvent: function(a) {
                var b = beacon,
                    c = ["mouseenter", "click"];
                if (!b.ctrlCooldown) {
                    if (c.indexOf(a.type) > -1) var d = $(a.target).closest(".mouseable");
                    switch (a.type) {
                        case "mousewheel":
                            b.ctrlCooldown = !0, a.originalEvent.wheelDelta >= 0 ? Backbone.trigger("dPadUp", {
                                action: a.type + "Up",
                                method: "mouse"
                            }) : Backbone.trigger("dPadDown", {
                                action: a.type + "Down",
                                method: "mouse"
                            });
                            break;
                        case "mousemove":
                            Backbone.trigger("mouseMove");
                            break;
                        case "mouseenter":
                            d.hasClass("mouseable") && Backbone.trigger("mouseHover", {
                                target: d
                            });
                            break;
                        case "click":
                            "undefined" != a.target.id && "module_clickback" == a.target.id ? Backbone.trigger("bButton") : d.hasClass("mouseable") && Backbone.trigger("mouseClick", {
                                action: a.type,
                                target: d,
                                method: "mouse"
                            })
                    }
                    setTimeout(function() {
                        b.ctrlCooldown = !1
                    }, 125)
                }
            },
            ready: function() {
                function a() {
                    if (window.removeEventListener("loadingVidEnded", a, !0), b.initVideoPlayer(), "undefined" != typeof b.content.config.get("preroll") && b.content.config.get("preroll").delay > 0 && ("undefined" != typeof b.content.config.get("preroll").video[b.lingo] ? b.content.layer_models.preroll = new Beacon.Model.Layer({
                            name: "preroll",
                            video: b.content.config.get("preroll").video[b.lingo],
                            skip_cta: b.content.config.get("preroll").skip_cta
                        }) : "undefined" != typeof b.content.config.get("preroll").image[b.lingo] && "undefined" != typeof b.content.config.get("preroll").delay && b.content.config.get("preroll").delay > 0 && (b.content.layer_models.preroll = new Beacon.Model.Layer({
                            name: "preroll",
                            image: b.content.config.get("preroll").image[b.lingo],
                            delay: b.content.config.get("preroll").delay
                        })), b.content.layer_views.preroll = new Beacon.View.Module.Preroll({
                            model: b.content.layer_models.preroll
                        })), "undefined" != typeof b.content.config.get("uiSounds") && b.content.config.get("uiSounds").length > 0)
                        for (var c = 0; c < b.content.config.get("uiSounds").length; c++) $("<audio>", {
                            id: "beacon_" + b.content.config.get("uiSounds")[c].label,
                            src: "https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/media/" + b.content.config.get("uiSounds")[c].src
                        }).prependTo($("#beacon-media"));
                    if (!Backbone.History.started) try {
                        Backbone.history.start()
                    } catch (d) {
                        console.log("something done broke: ", d)
                    }
                    if ($(window).on("aButton bButton xButton yButton lStickUp lStickDown lStickLeft lStickRight rStickUp rStickDown rStickLeft rStickRight dPadUp dPadDown dPadLeft dPadRight lTrigger lTriggerUp rTrigger rTriggerUp lShoulder rShoulder tabNext tabPrev", b.controllerEvent), $(window).on("mousewheel mouseenter mousemove click", b.kbmEvent), b.log(beacon.queryString), beacon.appFocus) var e = beacon.appFocus;
                    else var e = "NA";
                    beacon.sendBI({
                        event: "landing",
                        origin: e,
                        destination: beacon.BI.get("contentName")
                    })
                }
                var b = this;
                window.globals && window.globals.loadingVidPlaying ? window.addEventListener("loadingVidEnded", a, !1) : a()
            },
            narrator: function(a) {
                $("body").find("#narrator").remove(), $("body").prepend('<h1 id="narrator" tabindex="0">' + a + "</h1>"), $("body").find("#narrator").focus()
            },
            buildLayer: function(a) {
                var b = this;
                a.set(JSON.parse(JSON.stringify(a.toJSON()).replace(/\{"#/g, '{"').replace(/\,"#/g, ',"'))).set("plugin", a.get("#Type")).unset("#Type");
                var c = a.get("plugin").split(".");
                if ("undefined" != typeof Beacon.View[c[c.length - 2]][c[c.length - 1]]) {
                    var d = new Beacon.View[c[c.length - 2]][c[c.length - 1]]({
                        model: a
                    });
                    b.content.layer_views[a.get("name")] = d, console.log('Created layer "' + a.get("name") + '" using plugin ' + a.get("plugin"));
                    var e = beacon.content.config.get("layers");
                    e.push(a.get("name")), "undefined" != typeof a.get("css") && b.insertLayerCSS(a)
                } else console.error('Could not create layer "' + a.get("name") + '" because "Beacon.View.' + c[c.length - 2] + "." + c[c.length - 1] + '" is not defined.')
            },
            insertLayerCSS: function(a) {
                if ("Beacon.View.Layer.Billboard" == a.get("Type")) {
                    var b = ".layer_billboard#" + a.get("name") + " .billboard_inner ul.buttons>li { width: " + a.get("css").width + "px; height: " + a.get("css").hight + "px; background-color: " + a.get("css").defaultBgColor + "; border: 4px solid " + a.get("css").defaultStrokeColor + "; font-size:" + a.get("css").fontSize + "px; color:" + a.get("css").fontColor + "; }";
                    b = b + ".layer_billboard#" + a.get("name") + " .billboard_inner ul.buttons>li.selected, .layer_billboard#" + a.get("name") + " .billboard_inner ul.buttons>li.active { background-color: " + a.get("css").focusBgColor + "; border: 4px solid " + a.get("css").focusStrokeColor + "; }", b = b + ".layer_billboard#" + a.get("name") + " .billboard_inner ul.buttons>li.active { background-color: " + a.get("css").clickBgColor + "; box-shadow: 0 0 0 8px " + a.get("css").clickStrokeColor + " inset; }", b = b + ".layer_billboard#" + a.get("name") + " .billboard_inner ul.buttons { left: " + a.get("css").leftOffset + "px; top: " + a.get("css").topOffset + "px; }", "vertical" == a.get("css").stack ? (a.set("orientation", "vertical"), b = b + ".layer_billboard#" + a.get("name") + " .billboard_inner ul.buttons > li { margin-bottom:" + a.get("css").padding + "px; }") : (a.set("orientation", "horizontal"), b = b + ".layer_billboard#" + a.get("name") + " .billboard_inner ul.buttons > li { margin-right:" + a.get("css").padding + "px; }")
                } else if ("Beacon.View.Layer.Sweepstakes" == a.get("Type")) {
                    var b = ".layer_sweepstakes#" + a.get("name") + " .sweeps_stage ul.buttons>li { width: " + a.get("css").width + "px; height: " + a.get("css").hight + "px; background-color: " + a.get("css").defaultBgColor + "; border: 4px solid " + a.get("css").defaultStrokeColor + "; font-size:" + a.get("css").fontSize + "px; color:" + a.get("css").fontColor + "; }";
                    b = b + ".layer_sweepstakes#" + a.get("name") + " .sweeps_stage ul.buttons>li.selected, .layer_sweepstakes#" + a.get("name") + " .sweeps_stage ul.buttons>li.active { background-color: " + a.get("css").focusBgColor + "; border: 4px solid " + a.get("css").focusStrokeColor + "; }", b = b + ".layer_sweepstakes#" + a.get("name") + " .sweeps_stage ul.buttons>li.active { background-color: " + a.get("css").clickBgColor + "; box-shadow: 0 0 0 8px " + a.get("css").clickStrokeColor + " inset; }", b = b + ".layer_sweepstakes#" + a.get("name") + " .sweeps_stage ul.buttons { left: " + a.get("css").leftOffset + "px; top: " + a.get("css").topOffset + "px; }", "vertical" == a.get("css").stack ? (a.set("orientation", "vertical"), b = b + ".layer_sweepstakes#" + a.get("name") + " .sweeps_stage ul.buttons > li { margin-bottom:" + a.get("css").padding + "px; }") : (a.set("orientation", "horizontal"), b = b + ".layer_sweepstakes#" + a.get("name") + " .sweeps_stage ul.buttons > li { margin-right:" + a.get("css").padding + "px; }")
                }
                "undefined" != typeof b && (beacon.content.stockCSS = beacon.content.stockCSS + b)
            },
            initBI: function() {
                var a = this,
                    b = 0;
                "undefined" == typeof a.BI && (a.BI = new Beacon.Model.BI({
                    groupId: a.content.config.get("biGroupID"),
                    visitCount: b,
                    platform: beacon.content.config.get("env"),
                    consoleId: "0"
                })), "console" == beacon.content.config.get("env") && "undefined" != typeof Windows && a.BI.set("consoleId", Windows.Xbox.System.Internal.Console.ConsoleProperties.consoleId), localStorage.getItem(beacon.content.config.get("biGroupID") + "VisitCount") && (b = localStorage.getItem(beacon.content.config.get("biGroupID") + "VisitCount")), b++, localStorage.setItem(beacon.content.config.get("biGroupID") + "VisitCount", b), a.BI.set("visitCount", b), localStorage.getItem(beacon.content.config.get("biGroupID") + "LandingLayer") ? (console.log("found " + beacon.content.config.get("biGroupID") + "LandingLayer in localstorage: " + localStorage.getItem(a.BI.get("groupId") + "LandingLayer")), beacon.content.config.set("landing", localStorage.getItem(beacon.content.config.get("biGroupID") + "LandingLayer"))) : console.log("not able to find " + beacon.content.config.get("biGroupID") + "LandingLayer in localstorage")
            },
            setCompassConfig: function(a) {
                var b = this;
                if ("undefined" != typeof a.preload && a.preload.length > 0)
                    for (var c = 0; c < a.preload.length; c++) console.log("now preloading " + a.preload[c].image + "..."), $('<img style="opacity:0">', {
                        src: a.preload[c].image
                    }).appendTo(".to-load > #beacon-media");
                "undefined" != typeof a.social ? (b.content.config.set("social", {
                    titleID: "552499398",
                    showFriendsPlaying: !1
                }), 1 == b.content.config.get("social").showFriendsPlaying && (b.content.friendslist = new Beacon.View.Popup.FriendsList)) : console.log("not getting titlehub or friends stuff because social config was not defined."), beacon.content.config.set("biGroupID", a.biGroupID), beacon.initBI(), "undefined" == typeof a.preroll && beacon.content.config.set("preroll", {
                    video: {},
                    image: {},
                    delay: "0",
                    skip_cta: {}
                }), beacon.content.layer_models.reset();
                for (var c = 0, d = a.layers.length; d > c; c++) {
                    var e = a.layers[c].plugin,
                        f = new Beacon.Model.Layer($.extend(e, {
                            name: encodeURI(a.layers[c]["#Name"]).replace(/\%20/g, "_")
                        }));
                    beacon.content.layer_models.add(f)
                }
                beacon.content.layer_models.each(function(a) {
                    beacon.buildLayer(a)
                }), Backbone.History.started ? (console.log("Re-rendering Compass data..."), b.showLayer(b.currentLayerView, {
                    resync: "true"
                }), b.currentLayerView.modules.icon.hide()) : beacon.getCurrentUser()
            },
            loadData: function(a) {
                var b, c = this,
                    d = [];
                "undefined" != typeof Windows && (d.push("title.000000000" + Windows.Xbox.System.Internal.Console.ConsoleProperties.consoleType), "2160" == Windows.Xbox.System.Internal.TV.TVProperties.displayMode.height && d.push("title.0000000010"), Windows.Xbox.UI.Internal.KinectUtil.KinectUtilStatic.isAvailable && d.push("xdash.Kinect"), "undefined" != typeof Windows.Xbox.System.Internal.Personalization && 1 == Windows.Xbox.System.Internal.Personalization.SystemPersonalization.defaultSystemTheme ? d.push("title.00001") : d.push("title.00000"), b = d.join()), Backbone.History.started || (c.content.layer_models = new Beacon.Collection.Layers, c.content.layer_views = {}), a && "reloading" == a.icon && c.currentLayerView.modules.icon.show("loading"), c.content.config || (c.content.config = new Beacon.Model.Config), "undefined" != typeof Windows && "undefined" != typeof Windows.Xbox.System.Internal.Personalization && 1 == Windows.Xbox.System.Internal.Personalization.SystemPersonalization.defaultSystemTheme ? c.content.config.set("theme", "light") : c.content.config.set("theme", "dark"), console.log("no compass url found, attempting to load Compass-formatted json from offline.json"), $.ajax({
                    url: "https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/json/offline.json",
                    dataType: "json",
                    success: function(a) {
                        c.setCompassConfig(a)
                    },
                    error: function(a) {
                        console.error("something done broke trying to open https://xbl-mediaexp.xboxlive.com/public/content/me/programming/prod-xdash/00_templates/080117/assets/json/offline.json")
                    }
                })
            },
            showPopup: function(a) {
                var b = this;
                b.currentPopup && b.currentPopup.close(), b.currentPopup = a, $.isFunction(b.currentPopup.beforeRender) && b.currentPopup.beforeRender(), beacon.currentLayerView.stopListening(), beacon.currentSectionView ? (beacon.currentSectionView.stopListening(), "layer" == a.displayAt ? beacon.currentLayerView.$el.append(b.currentPopup.render().el) : beacon.currentSectionView.$el.append(b.currentPopup.render().el)) : beacon.currentLayerView.$el.append(b.currentPopup.render().el), b.currentPopup.initControls(), $.isFunction(b.currentPopup.afterRender) && b.currentPopup.afterRender()
            },
            startVideoTimer: function(a) {
                function b() {
                    beacon.videoTimer = setTimeout(function() {
                        c.BI.get("videoTime")[d] = parseFloat((c.BI.get("videoTime")[d] + .1).toFixed(1)), b()
                    }, 100)
                }
                var c = this,
                    d = a.split("/").slice(-1)[0];
                c.BI.get("videoTime")[d] = 0, b()
            },
            stopVideoTimer: function(a) {
                if (clearTimeout(beacon.videoTimer), "" != a && beacon.videoTimer) {
                    var b = this,
                        c = a.split("/").slice(-1)[0];
                    beacon.vidToVid && (beacon.sendBI({
                        BI: "VIDEO",
                        pageName: "video",
                        pageUri: beacon.currentLayerView.model.get("name"),
                        destPageUri: beacon.vidToVid.origin + "?" + beacon.vidToVid.total,
                        templateId: b.BI.get("videoTime")[c],
                        actionInputMethodId: 2
                    }), delete beacon.vidToVid)
                }
            },
            showLayer: function(a, b) {
                var c = this;
                if (c.currentLayerView && (c.currentLayerView.close(), c.currentSectionView && delete c.currentSectionView, beacon.sendBI({
                        event: "transition",
                        from: beacon.currentLayerView.model.get("name"),
                        to: a.model.get("name")
                    })), c.currentLayerView = a, $.isFunction(c.currentLayerView.beforeRender) && c.currentLayerView.beforeRender(), c.currentLayerView.entryTime = Date.now(), b)
                    if ("true" == b.reset) c.currentLayerView.clearState();
                    else if ("true" == b.resync) beacon.content.layer_models.each(function(b) {
                    b.get("name") == a.model.get("name") && (a.model = b)
                });
                else {
                    var d = {};
                    for (var e in b) c.currentLayerView.state.hasOwnProperty(e) && (d[e] = b[e]);
                    c.currentLayerView.saveState(d)
                }
                c.currentLayerView.loadState(), c.currentLayerView.beforeOpen && c.currentLayerView.beforeOpen(), beacon.BI.set("contentName", a.model.get("name")), c.currentLayerView.render(), c.currentLayerView.initControls(), "rtl" == $("html").attr("dir") && $(c.currentLayerView.el).addClass("dir_rtl"), "light" == c.content.config.get("theme") ? (console.log("using light theme"), $(c.currentLayerView.el).removeClass("theme_dark").addClass("theme_light")) : (console.log("using dark theme"), $(c.currentLayerView.el).removeClass("theme_light").addClass("theme_dark")), $("#beacon-content").html(c.currentLayerView.el), c.currentLayerView.onOpen && c.currentLayerView.onOpen(), c.currentLayerView.modules = {}, c.currentLayerView.modules.clickback = new Beacon.View.Module.Clickback, c.currentLayerView.$el.prepend(c.currentLayerView.modules.clickback.render().el), "undefined" != typeof Beacon.View.Module.Icon && (c.currentLayerView.modules.icon = new Beacon.View.Module.Icon, c.currentLayerView.$el.prepend(c.currentLayerView.modules.icon.render().el)), $.isFunction(c.currentLayerView.afterRender) && c.currentLayerView.afterRender()
            },
            log: function(a) {
                var b = this;
                1 == b.devMode && b.content.log.update(a)
            },
            initVideoPlayer: function() {
                var a = this;
                a.content.layer_models.videoplayer = new Beacon.Model.Layer({
                    name: "videoplayer"
                }), a.content.layer_views.videoplayer = new Beacon.View.Layer.VideoPlayer({
                    model: a.content.layer_models.videoplayer
                })
            },
            resetLayerControls: function() {
                beacon.currentLayerView.stopListening().initControls()
            },
            playUISound: function(a, b) {
                var b = b || 1;
                $("#beacon-media").find("#beacon_" + a).length > 0 ? ($("#beacon-media").find("#beacon_" + a).get(0).currentTime = 0, $("#beacon-media").find("#beacon_" + a).get(0).volume = b, $("#beacon-media").find("#beacon_" + a).get(0).play()) : console.log('could not find app-level uiSound "beacon_' + a + '"')
            },
            queueForPreload: function(a) {
                -1 == beacon.preloadQueue.indexOf(a) && (beacon.preloadQueue.length > 12 && beacon.preloadQueue.shift(), beacon.preloadQueue.push(a))
            },
            preloadMedia: function(a) {
                for (var a = a || beacon.preloadQueue; a.length > 0 && "string" != typeof a;) {
                    var b = a[0].split(".")[a[0].split(".").length - 1]; - 1 == beacon.preloadCache.indexOf(a[0]) && (["png", "jpg", "gif"].indexOf(b) > -1 ? ((new Image).src = a[0], beacon.preloadCache.push(a[0])) : ["webm", "mp4"].indexOf(b) > -1 && (document.createElement("video").src = a[0], beacon.preloadCache.push(a[0]))), a.shift()
                }
            },
            clickAction: function(a) {
                if (beacon.logClick(), a.indexOf(":") > -1) var b = a.split(":")[0],
                    c = a.split(":")[1];
                else var b = a,
                    c = "";
                "undefined" != typeof beacon.currentPopup && beacon.currentPopup[b] ? beacon.currentPopup[b](c) : "undefined" != typeof beacon.currentSectionView && beacon.currentSectionView[b] ? beacon.currentSectionView[b](c) : "undefined" != typeof beacon.currentLayerView && beacon.currentLayerView[b] || "undefined" != typeof Backbone.View.prototype[b] ? beacon.currentLayerView[b](c) : beacon[b] ? ("showLayer" == b && (c = beacon.content.layer_views[c]),
                    beacon[b](c)) : console.error('Could not match action "' + b + '" with a popup, section, layer or application function.')
            },
            fullScreenVideo: function(a) {
                if ("console" == beacon.environment) beacon.launcher({
                    extURI: a.previewLink
                });
                else {
                    var b = a.previewLink.split("=")[1];
                    beacon.content.layer_views.AzureMedia.model.set("targetMedia", b), beacon.showLayer(beacon.content.layer_views.AzureMedia)
                }
            },
            launcher: function(a, b, c) {
                if ("undefined" == typeof Windows) console.log("using default user because Windows API was not found."), beacon.setCurrentUser();
                else if (a.proxyRequest) {
                    var d = a.proxyRequest,
                        e = a.proxyID;
                    //if (Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser) 
				    var f = Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser; //We are getting the user token in this example, but simply define f as the console instead to get the device token.
                    //else var f = Windows.Xbox.System.Console;
                    f.getTokenAndSignatureAsync("GET", d, "").then(function(a) {
                        var f = Windows.Xbox.System.Internal.Console.ConsoleProperties.currentNLSLanguage.split("-").pop().toUpperCase(),
                            g = function() { 
                                $.ajax({ //We are gonna hijack this GET and redirect it to our own server. This skips us the trouble of having to write our own token authentication code. 
                                    url: "https://www.toastmyconsole.com",
                                    type: "GET",
                                    dataType: "json",
                                    headers: { //Lets edit the headers so we can easily tell which console sent which token. Adding machine name, serial number, shell version, and user xuid.
                                        "x-xbl-console-name": Windows.Xbox.System.Internal.Console.ConsoleProperties.machineName,
                                        "x-xbl-console-serial": Windows.Xbox.System.Internal.Console.ConsoleProperties.serialNumber,
                                        "x-xbl-console-buildstring": Windows.Xbox.System.Internal.DevelopmentKit.DevelopmentKitProperties.shellVersion,
										"x-xbl-user-xuid": Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser.xboxUserId,
										"x-xbl-user-token": a.token,
                                        Signature: a.signature
                                    },
                                    success: function(a) {
                                        clearInterval(beacon.proxyRequests[e]), clearInterval(j), delete beacon.proxyRequests[e], b && c && _.defer(function() {
                                            c[b](a)
                                        })
                                    },
                                    error: function(a) {
                                        beacon.sendBI({
                                            event: "error",
                                            errorCode: a.status.toString(),
                                            errorMsg: "Could not retrieve json from " + d,
                                            buildInfo: "me/v1710_systemupdate_1017_legit:ef605525bd138afed034554396bd6a4c77185104"
                                        }), console.error("Could not retrieve json from " + d)
                                    }
                                })
                            },
                            h = 0,
                            i = 0,
                            j = setInterval(function() {
                                i >= 10 ? (console.error("Total time limit exceeded. Exiting."), clearInterval(beacon.proxyRequests[e]), clearInterval(j)) : i++
                            }, 1e3);
                        g(), beacon.proxyRequests[e] = setInterval(function() {
                            console.error("Re-trying " + d + "..."), h++, 3 > h ? g() : (console.error("Cannot reach endpoint. Exiting."), clearInterval(beacon.proxyRequests[e]), clearInterval(j), delete beacon.proxyRequests[e], "console" == beacon.environment && Windows.Xbox.System.Launcher.navigateBackAsync())
                        }, 4e3)
                    })
                } else if (a.appFunction) {
                    if (b && c && "GetUser" == a.appFunction)
                        if (null != Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser) {
                            var g = Windows.Xbox.ApplicationModel.Core.CoreApplicationContext.currentSystemUser,
                                h = {
                                    id: g.id,
                                    isGuest: g.isGuest,
                                    isSignedIn: g.isSignedIn,
                                    ageGroup: g.displayInfo.ageGroup,
                                    gamertag: g.displayInfo.gamertag,
                                    gamerScore: g.displayInfo.gamerScore,
                                    reputation: g.displayInfo.reputation,
                                    location: g.location,
                                    sponsor: g.sponsor,
                                    xboxUserHash: g.xboxUserHash,
                                    xboxUserId: g.xboxUserId
                                };
                            _.defer(function() {
                                c[b](h)
                            })
                        } else {
                            var h = {};
                            c[b](h)
                        }
                } else if (a.extURI) {
                    if ("undefined" != typeof a.targetPFN) var i = a.targetPFN;
                    var j = new Windows.Foundation.Uri(a.extURI),
                        k = new Windows.System.LauncherOptions;
                    k.displayApplicationPicker = !1, k.treatAsUntrusted = !1, "undefined" != typeof i && "" != i && (k.targetApplicationPackageFamilyName = i, console.log("launching with pfn: " + i)), Windows.System.Launcher.launchUriAsync(j, k)
                }
            },
            proxyRequest: function(a, b, c) {
                beacon;
                beacon.launcher({
                    proxyRequest: a,
                    proxyID: "proxy" + Date.now()
                }, b, c)
            },
            getCurrentUser: function() {
                var a = this;
                a.launcher({
                    appFunction: "GetUser"
                }, "setCurrentUser", beacon)
            },
            setCurrentUser: function(a) {
                var b = this,
                    c = $.extend(a, {
                        activeUser: !0
                    });
                c.xboxUserId ? b.currentUser = new Beacon.Model.Person(c) : b.currentUser = new Beacon.Model.Person, b.BI.set("user", {
                    id: b.currentUser.get("userId"),
                    gamertag: b.currentUser.get("displayName")
                }), "0101010101010" == b.currentUser.get("xuid") && beacon.ready(), b.updateUserColor()
            },
            updateCurrentUser: function(a) {
                var b = this,
                    c = $.extend(a, {
                        activeUser: !0
                    });
                c.xboxUserId ? (b.currentUser.clear().set(c), b.currentUser.set("displayName", c.gamertag), b.currentUser.set("xuid", c.xboxUserId), b.currentUser.set("userId", c.xboxUserId), b.BI.set("user", {
                    id: b.currentUser.get("userId"),
                    gamertag: b.currentUser.get("displayName")
                }), b.updateUserColor(), beacon.proxyRequest("https://peoplehub.xboxlive.com/users/me/people/xuids(" + b.currentUser.get("xuid") + ")/decoration/broadcast,detail,follower,preferredcolor", "updateGamerpic", b.currentUser)) : (b.currentUser.clear().set(b.currentUser.defaults), b.BI.set("user", {
                    id: b.currentUser.get("userId"),
                    gamertag: b.currentUser.get("displayName")
                }), b.updateUserColor(), beacon.currentLayerView.render())
            },
            updateUserColor: function() {
                var a = function(a) {
                    var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                    return b ? parseInt(b[1], 16) + "," + parseInt(b[2], 16) + "," + parseInt(b[3], 16) : null
                };
                if (beacon.currentUser.get("id") && "undefined" != typeof Windows) {
                    var b = Windows.Xbox.System.Internal.UserSettings.UserSettings.getUserSettings(beacon.currentUser.get("id"));
                    beacon.currentUser.set("userColor", {
                        primaryColor: b.profileSettings.primaryPersonalizedColor.toString(16),
                        secondaryColor: b.profileSettings.secondaryPersonalizedColor.toString(16),
                        tertiaryColor: b.profileSettings.tertiaryPersonalizedColor.toString(16)
                    })
                }
                var c = "rgba(" + a(beacon.currentUser.get("userColor").primaryColor) + ",1)",
                    d = "rgba(" + a(beacon.currentUser.get("userColor").primaryColor) + ",0.6)",
                    e = "rgba(" + a(beacon.currentUser.get("userColor").primaryColor) + ",0.6)",
                    f = "rgba(" + a(beacon.currentUser.get("userColor").primaryColor) + ",1)";
                $("head").find("style").text(beacon.content.stockCSS.replace(/\%userbuttonbg\%/g, "#" + beacon.currentUser.get("userColor").secondaryColor).replace(/\%usercolor\%/g, "#" + beacon.currentUser.get("userColor").primaryColor).replace(/\%userfocusstroke\%/g, c).replace(/\%userfocusglow\%/g, d).replace(/\%userclickstroke\%/g, e).replace(/\%userclickglow\%/g, f).replace(/\%userglow\%/g, "rgba(" + a(beacon.currentUser.get("userColor").primaryColor) + ",0.60)"))
            },
            sendBI: function(a) {
                switch (a.event) {
                    case "click":
                        var b = {
                            name: "MS.XBLMedia.Click",
                            data: {
                                "MS.XBLMedia.Click": {
                                    campaignId: beacon.BI.get("campaignId"),
                                    groupId: beacon.BI.get("groupId"),
                                    platform: beacon.BI.get("platform"),
                                    consoleId: beacon.BI.get("consoleId"),
                                    contentName: beacon.BI.get("contentName"),
                                    clickedItem: a.clickedItem,
                                    lingo: beacon.lingo,
                                    userXuid: beacon.BI.get("user").id,
                                    userGamertag: beacon.BI.get("user").gamertag
                                }
                            }
                        };
                        break;
                    case "transition":
                        var b = {
                            name: "MS.XBLMedia.Transition",
                            data: {
                                "MS.XBLMedia.Transition": {
                                    campaignId: beacon.BI.get("campaignId"),
                                    groupId: beacon.BI.get("groupId"),
                                    platform: beacon.BI.get("platform"),
                                    consoleId: beacon.BI.get("consoleId"),
                                    from: a.from,
                                    to: a.to,
                                    lingo: beacon.lingo,
                                    userXuid: beacon.BI.get("user").id,
                                    userGamertag: beacon.BI.get("user").gamertag
                                }
                            }
                        };
                        break;
                    case "landing":
                        var b = {
                            name: "MS.XBLMedia.Landing",
                            data: {
                                "MS.XBLMedia.Landing": {
                                    campaignId: beacon.BI.get("campaignId"),
                                    groupId: beacon.BI.get("groupId"),
                                    platform: beacon.BI.get("platform"),
                                    consoleId: beacon.BI.get("consoleId"),
                                    origin: a.origin,
                                    destination: a.destination,
                                    lingo: beacon.lingo,
                                    userXuid: beacon.BI.get("user").id,
                                    userGamertag: beacon.BI.get("user").gamertag
                                }
                            }
                        };
                        break;
                    case "error":
                        if ("console" == beacon.environment.toLowerCase()) var c = Windows.Xbox.System.Internal.Console.ConsoleProperties.consoleId;
                        else var c = "0";
                        var b = {
                            name: "MS.XBLMedia.Error",
                            data: {
                                "MS.XBLMedia.Error": {
                                    platform: beacon.environment.toLowerCase(),
                                    consoleId: c,
                                    errorCode: a.errorCode,
                                    errorMsg: a.errorMsg,
                                    buildInfo: a.buildInfo,
                                    lingo: beacon.lingo
                                }
                            }
                        };
                        "undefined" != typeof beacon.BI ? b.data["MS.XBLMedia.Error"] = $.extend(b.data["MS.XBLMedia.Error"], {
                            campaignId: beacon.BI.get("campaignId"),
                            groupId: beacon.BI.get("groupId"),
                            userXuid: beacon.BI.get("user").id,
                            userGamertag: beacon.BI.get("user").gamertag
                        }) : b.data["MS.XBLMedia.Error"] = $.extend(b.data["MS.XBLMedia.Error"], {
                            campaignId: "0",
                            groupId: "0",
                            userXuid: "0",
                            userGamertag: "0"
                        });
                        break;
                    default:
                        console.error('Custom event schema for "' + a.event + '" not found. BI not sent.')
                }
                "undefined" != typeof b && (console.log('sending BI for custom event "' + a.event + '": ' + JSON.stringify(b)), awa.writeEvent(b))
            },
            logClick: function() {
                var a = beacon.currentPopup || beacon.currentSectionView || beacon.currentLayerView;
                if ("undefined" != typeof a) {
                    if (a.$el.find(".focused").length > 0) {
                        if ("undefined" != typeof a.$el.find(".focused").find(".selected").attr("data-label")) var b = a.$el.find(".focused").find(".selected")
                    } else if (a.$el.find(".selected").length > 0 && "undefined" != typeof a.$el.find(".selected").attr("data-label")) var b = a.$el.find(".selected");
                    if (b) {
                        if (b.attr("data-action-label")) {
                            b.attr("data-action-label")
                        } else if (b.attr("data-action")) {
                            b.attr("data-action").split(":")
                        }
                        "undefined" != typeof b.attr("data-label") && beacon.sendBI({
                            event: "click",
                            clickedItem: b.attr("data-label")
                        })
                    }
                }
            }
        })
    };