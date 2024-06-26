/*! For license information please see app.js.LICENSE.txt */
(() => {
    var t = {
            577: function (t, e, r) {
                var o = r(755);
                t.exports = (function () {
                    "use strict";
                    const t = new Map(),
                        e = {
                            set(e, r, o) {
                                t.has(e) || t.set(e, new Map());
                                const n = t.get(e);
                                n.has(r) || 0 === n.size
                                    ? n.set(r, o)
                                    : console.error(
                                          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                                              Array.from(n.keys())[0]
                                          }.`
                                      );
                            },
                            get: (e, r) =>
                                (t.has(e) && t.get(e).get(r)) || null,
                            remove(e, r) {
                                if (!t.has(e)) return;
                                const o = t.get(e);
                                o.delete(r), 0 === o.size && t.delete(e);
                            },
                        },
                        r = 1e6,
                        n = 1e3,
                        i = "transitionend",
                        a = (t) => (
                            t &&
                                window.CSS &&
                                window.CSS.escape &&
                                (t = t.replace(
                                    /#([^\s"#']+)/g,
                                    (t, e) => `#${CSS.escape(e)}`
                                )),
                            t
                        ),
                        s = (t) =>
                            null == t
                                ? `${t}`
                                : Object.prototype.toString
                                      .call(t)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase(),
                        l = (t) => {
                            do {
                                t += Math.floor(Math.random() * r);
                            } while (document.getElementById(t));
                            return t;
                        },
                        d = (t) => {
                            if (!t) return 0;
                            let { transitionDuration: e, transitionDelay: r } =
                                window.getComputedStyle(t);
                            const o = Number.parseFloat(e),
                                i = Number.parseFloat(r);
                            return o || i
                                ? ((e = e.split(",")[0]),
                                  (r = r.split(",")[0]),
                                  (Number.parseFloat(e) +
                                      Number.parseFloat(r)) *
                                      n)
                                : 0;
                        },
                        c = (t) => {
                            t.dispatchEvent(new Event(i));
                        },
                        p = (t) =>
                            !(!t || "object" != typeof t) &&
                            (void 0 !== t.jquery && (t = t[0]),
                            void 0 !== t.nodeType),
                        b = (t) =>
                            p(t)
                                ? t.jquery
                                    ? t[0]
                                    : t
                                : "string" == typeof t && t.length > 0
                                ? document.querySelector(a(t))
                                : null,
                        m = (t) => {
                            if (!p(t) || 0 === t.getClientRects().length)
                                return !1;
                            const e =
                                    "visible" ===
                                    getComputedStyle(t).getPropertyValue(
                                        "visibility"
                                    ),
                                r = t.closest("details:not([open])");
                            if (!r) return e;
                            if (r !== t) {
                                const e = t.closest("summary");
                                if (e && e.parentNode !== r) return !1;
                                if (null === e) return !1;
                            }
                            return e;
                        },
                        g = (t) =>
                            !t ||
                            t.nodeType !== Node.ELEMENT_NODE ||
                            !!t.classList.contains("disabled") ||
                            (void 0 !== t.disabled
                                ? t.disabled
                                : t.hasAttribute("disabled") &&
                                  "false" !== t.getAttribute("disabled")),
                        f = (t) => {
                            if (!document.documentElement.attachShadow)
                                return null;
                            if ("function" == typeof t.getRootNode) {
                                const e = t.getRootNode();
                                return e instanceof ShadowRoot ? e : null;
                            }
                            return t instanceof ShadowRoot
                                ? t
                                : t.parentNode
                                ? f(t.parentNode)
                                : null;
                        },
                        u = () => {},
                        h = (t) => {
                            t.offsetHeight;
                        },
                        v = () =>
                            o &&
                            !document.body.hasAttribute("data-bs-no-jquery")
                                ? o
                                : null,
                        x = [],
                        w = (t) => {
                            "loading" === document.readyState
                                ? (x.length ||
                                      document.addEventListener(
                                          "DOMContentLoaded",
                                          () => {
                                              for (const t of x) t();
                                          }
                                      ),
                                  x.push(t))
                                : t();
                        },
                        y = () => "rtl" === document.documentElement.dir,
                        k = (t) => {
                            w(() => {
                                const e = v();
                                if (e) {
                                    const r = t.NAME,
                                        o = e.fn[r];
                                    (e.fn[r] = t.jQueryInterface),
                                        (e.fn[r].Constructor = t),
                                        (e.fn[r].noConflict = () => (
                                            (e.fn[r] = o), t.jQueryInterface
                                        ));
                                }
                            });
                        },
                        _ = (t, e = [], r = t) =>
                            "function" == typeof t ? t(...e) : r,
                        E = (t, e, r = !0) => {
                            if (!r) return void _(t);
                            const o = 5,
                                n = d(e) + o;
                            let a = !1;
                            const s = ({ target: r }) => {
                                r === e &&
                                    ((a = !0),
                                    e.removeEventListener(i, s),
                                    _(t));
                            };
                            e.addEventListener(i, s),
                                setTimeout(() => {
                                    a || c(e);
                                }, n);
                        },
                        C = (t, e, r, o) => {
                            const n = t.length;
                            let i = t.indexOf(e);
                            return -1 === i
                                ? !r && o
                                    ? t[n - 1]
                                    : t[0]
                                : ((i += r ? 1 : -1),
                                  o && (i = (i + n) % n),
                                  t[Math.max(0, Math.min(i, n - 1))]);
                        },
                        T = /[^.]*(?=\..*)\.|.*/,
                        A = /\..*/,
                        j = /::\d+$/,
                        z = {};
                    let S = 1;
                    const O = {
                            mouseenter: "mouseover",
                            mouseleave: "mouseout",
                        },
                        D = new Set([
                            "click",
                            "dblclick",
                            "mouseup",
                            "mousedown",
                            "contextmenu",
                            "mousewheel",
                            "DOMMouseScroll",
                            "mouseover",
                            "mouseout",
                            "mousemove",
                            "selectstart",
                            "selectend",
                            "keydown",
                            "keypress",
                            "keyup",
                            "orientationchange",
                            "touchstart",
                            "touchmove",
                            "touchend",
                            "touchcancel",
                            "pointerdown",
                            "pointermove",
                            "pointerup",
                            "pointerleave",
                            "pointercancel",
                            "gesturestart",
                            "gesturechange",
                            "gestureend",
                            "focus",
                            "blur",
                            "change",
                            "reset",
                            "select",
                            "submit",
                            "focusin",
                            "focusout",
                            "load",
                            "unload",
                            "beforeunload",
                            "resize",
                            "move",
                            "DOMContentLoaded",
                            "readystatechange",
                            "error",
                            "abort",
                            "scroll",
                        ]);
                    function L(t, e) {
                        return (e && `${e}::${S++}`) || t.uidEvent || S++;
                    }
                    function N(t) {
                        const e = L(t);
                        return (t.uidEvent = e), (z[e] = z[e] || {}), z[e];
                    }
                    function M(t, e) {
                        return function r(o) {
                            return (
                                W(o, { delegateTarget: t }),
                                r.oneOff && F.off(t, o.type, e),
                                e.apply(t, [o])
                            );
                        };
                    }
                    function P(t, e, r) {
                        return function o(n) {
                            const i = t.querySelectorAll(e);
                            for (
                                let { target: a } = n;
                                a && a !== this;
                                a = a.parentNode
                            )
                                for (const s of i)
                                    if (s === a)
                                        return (
                                            W(n, { delegateTarget: a }),
                                            o.oneOff && F.off(t, n.type, e, r),
                                            r.apply(a, [n])
                                        );
                        };
                    }
                    function I(t, e, r = null) {
                        return Object.values(t).find(
                            (t) =>
                                t.callable === e && t.delegationSelector === r
                        );
                    }
                    function $(t, e, r) {
                        const o = "string" == typeof e,
                            n = o ? r : e || r;
                        let i = q(t);
                        return D.has(i) || (i = t), [o, n, i];
                    }
                    function R(t, e, r, o, n) {
                        if ("string" != typeof e || !t) return;
                        let [i, a, s] = $(e, r, o);
                        if (e in O) {
                            const t = (t) =>
                                function (e) {
                                    if (
                                        !e.relatedTarget ||
                                        (e.relatedTarget !== e.delegateTarget &&
                                            !e.delegateTarget.contains(
                                                e.relatedTarget
                                            ))
                                    )
                                        return t.call(this, e);
                                };
                            a = t(a);
                        }
                        const l = N(t),
                            d = l[s] || (l[s] = {}),
                            c = I(d, a, i ? r : null);
                        if (c) return void (c.oneOff = c.oneOff && n);
                        const p = L(a, e.replace(T, "")),
                            b = i ? P(t, r, a) : M(t, a);
                        (b.delegationSelector = i ? r : null),
                            (b.callable = a),
                            (b.oneOff = n),
                            (b.uidEvent = p),
                            (d[p] = b),
                            t.addEventListener(s, b, i);
                    }
                    function B(t, e, r, o, n) {
                        const i = I(e[r], o, n);
                        i &&
                            (t.removeEventListener(r, i, Boolean(n)),
                            delete e[r][i.uidEvent]);
                    }
                    function H(t, e, r, o) {
                        const n = e[r] || {};
                        for (const [i, a] of Object.entries(n))
                            i.includes(o) &&
                                B(t, e, r, a.callable, a.delegationSelector);
                    }
                    function q(t) {
                        return (t = t.replace(A, "")), O[t] || t;
                    }
                    const F = {
                        on(t, e, r, o) {
                            R(t, e, r, o, !1);
                        },
                        one(t, e, r, o) {
                            R(t, e, r, o, !0);
                        },
                        off(t, e, r, o) {
                            if ("string" != typeof e || !t) return;
                            const [n, i, a] = $(e, r, o),
                                s = a !== e,
                                l = N(t),
                                d = l[a] || {},
                                c = e.startsWith(".");
                            if (void 0 === i) {
                                if (c)
                                    for (const r of Object.keys(l))
                                        H(t, l, r, e.slice(1));
                                for (const [r, o] of Object.entries(d)) {
                                    const n = r.replace(j, "");
                                    (s && !e.includes(n)) ||
                                        B(
                                            t,
                                            l,
                                            a,
                                            o.callable,
                                            o.delegationSelector
                                        );
                                }
                            } else {
                                if (!Object.keys(d).length) return;
                                B(t, l, a, i, n ? r : null);
                            }
                        },
                        trigger(t, e, r) {
                            if ("string" != typeof e || !t) return null;
                            const o = v();
                            let n = null,
                                i = !0,
                                a = !0,
                                s = !1;
                            e !== q(e) &&
                                o &&
                                ((n = o.Event(e, r)),
                                o(t).trigger(n),
                                (i = !n.isPropagationStopped()),
                                (a = !n.isImmediatePropagationStopped()),
                                (s = n.isDefaultPrevented()));
                            const l = W(
                                new Event(e, { bubbles: i, cancelable: !0 }),
                                r
                            );
                            return (
                                s && l.preventDefault(),
                                a && t.dispatchEvent(l),
                                l.defaultPrevented && n && n.preventDefault(),
                                l
                            );
                        },
                    };
                    function W(t, e = {}) {
                        for (const [r, o] of Object.entries(e))
                            try {
                                t[r] = o;
                            } catch (e) {
                                Object.defineProperty(t, r, {
                                    configurable: !0,
                                    get: () => o,
                                });
                            }
                        return t;
                    }
                    function X(t) {
                        if ("true" === t) return !0;
                        if ("false" === t) return !1;
                        if (t === Number(t).toString()) return Number(t);
                        if ("" === t || "null" === t) return null;
                        if ("string" != typeof t) return t;
                        try {
                            return JSON.parse(decodeURIComponent(t));
                        } catch (e) {
                            return t;
                        }
                    }
                    function G(t) {
                        return t.replace(
                            /[A-Z]/g,
                            (t) => `-${t.toLowerCase()}`
                        );
                    }
                    const U = {
                        setDataAttribute(t, e, r) {
                            t.setAttribute(`data-bs-${G(e)}`, r);
                        },
                        removeDataAttribute(t, e) {
                            t.removeAttribute(`data-bs-${G(e)}`);
                        },
                        getDataAttributes(t) {
                            if (!t) return {};
                            const e = {},
                                r = Object.keys(t.dataset).filter(
                                    (t) =>
                                        t.startsWith("bs") &&
                                        !t.startsWith("bsConfig")
                                );
                            for (const o of r) {
                                let r = o.replace(/^bs/, "");
                                (r =
                                    r.charAt(0).toLowerCase() +
                                    r.slice(1, r.length)),
                                    (e[r] = X(t.dataset[o]));
                            }
                            return e;
                        },
                        getDataAttribute: (t, e) =>
                            X(t.getAttribute(`data-bs-${G(e)}`)),
                    };
                    class V {
                        static get Default() {
                            return {};
                        }
                        static get DefaultType() {
                            return {};
                        }
                        static get NAME() {
                            throw new Error(
                                'You have to implement the static method "NAME", for each component!'
                            );
                        }
                        _getConfig(t) {
                            return (
                                (t = this._mergeConfigObj(t)),
                                (t = this._configAfterMerge(t)),
                                this._typeCheckConfig(t),
                                t
                            );
                        }
                        _configAfterMerge(t) {
                            return t;
                        }
                        _mergeConfigObj(t, e) {
                            const r = p(e)
                                ? U.getDataAttribute(e, "config")
                                : {};
                            return {
                                ...this.constructor.Default,
                                ...("object" == typeof r ? r : {}),
                                ...(p(e) ? U.getDataAttributes(e) : {}),
                                ...("object" == typeof t ? t : {}),
                            };
                        }
                        _typeCheckConfig(t, e = this.constructor.DefaultType) {
                            for (const [r, o] of Object.entries(e)) {
                                const e = t[r],
                                    n = p(e) ? "element" : s(e);
                                if (!new RegExp(o).test(n))
                                    throw new TypeError(
                                        `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${n}" but expected type "${o}".`
                                    );
                            }
                        }
                    }
                    const Y = "5.3.2";
                    class K extends V {
                        constructor(t, r) {
                            super(),
                                (t = b(t)) &&
                                    ((this._element = t),
                                    (this._config = this._getConfig(r)),
                                    e.set(
                                        this._element,
                                        this.constructor.DATA_KEY,
                                        this
                                    ));
                        }
                        dispose() {
                            e.remove(this._element, this.constructor.DATA_KEY),
                                F.off(
                                    this._element,
                                    this.constructor.EVENT_KEY
                                );
                            for (const t of Object.getOwnPropertyNames(this))
                                this[t] = null;
                        }
                        _queueCallback(t, e, r = !0) {
                            E(t, e, r);
                        }
                        _getConfig(t) {
                            return (
                                (t = this._mergeConfigObj(t, this._element)),
                                (t = this._configAfterMerge(t)),
                                this._typeCheckConfig(t),
                                t
                            );
                        }
                        static getInstance(t) {
                            return e.get(b(t), this.DATA_KEY);
                        }
                        static getOrCreateInstance(t, e = {}) {
                            return (
                                this.getInstance(t) ||
                                new this(t, "object" == typeof e ? e : null)
                            );
                        }
                        static get VERSION() {
                            return Y;
                        }
                        static get DATA_KEY() {
                            return `bs.${this.NAME}`;
                        }
                        static get EVENT_KEY() {
                            return `.${this.DATA_KEY}`;
                        }
                        static eventName(t) {
                            return `${t}${this.EVENT_KEY}`;
                        }
                    }
                    const Q = (t) => {
                            let e = t.getAttribute("data-bs-target");
                            if (!e || "#" === e) {
                                let r = t.getAttribute("href");
                                if (
                                    !r ||
                                    (!r.includes("#") && !r.startsWith("."))
                                )
                                    return null;
                                r.includes("#") &&
                                    !r.startsWith("#") &&
                                    (r = `#${r.split("#")[1]}`),
                                    (e = r && "#" !== r ? a(r.trim()) : null);
                            }
                            return e;
                        },
                        J = {
                            find: (t, e = document.documentElement) =>
                                [].concat(
                                    ...Element.prototype.querySelectorAll.call(
                                        e,
                                        t
                                    )
                                ),
                            findOne: (t, e = document.documentElement) =>
                                Element.prototype.querySelector.call(e, t),
                            children: (t, e) =>
                                []
                                    .concat(...t.children)
                                    .filter((t) => t.matches(e)),
                            parents(t, e) {
                                const r = [];
                                let o = t.parentNode.closest(e);
                                for (; o; )
                                    r.push(o), (o = o.parentNode.closest(e));
                                return r;
                            },
                            prev(t, e) {
                                let r = t.previousElementSibling;
                                for (; r; ) {
                                    if (r.matches(e)) return [r];
                                    r = r.previousElementSibling;
                                }
                                return [];
                            },
                            next(t, e) {
                                let r = t.nextElementSibling;
                                for (; r; ) {
                                    if (r.matches(e)) return [r];
                                    r = r.nextElementSibling;
                                }
                                return [];
                            },
                            focusableChildren(t) {
                                const e = [
                                    "a",
                                    "button",
                                    "input",
                                    "textarea",
                                    "select",
                                    "details",
                                    "[tabindex]",
                                    '[contenteditable="true"]',
                                ]
                                    .map((t) => `${t}:not([tabindex^="-"])`)
                                    .join(",");
                                return this.find(e, t).filter(
                                    (t) => !g(t) && m(t)
                                );
                            },
                            getSelectorFromElement(t) {
                                const e = Q(t);
                                return e && J.findOne(e) ? e : null;
                            },
                            getElementFromSelector(t) {
                                const e = Q(t);
                                return e ? J.findOne(e) : null;
                            },
                            getMultipleElementsFromSelector(t) {
                                const e = Q(t);
                                return e ? J.find(e) : [];
                            },
                        },
                        Z = (t, e = "hide") => {
                            const r = `click.dismiss${t.EVENT_KEY}`,
                                o = t.NAME;
                            F.on(
                                document,
                                r,
                                `[data-bs-dismiss="${o}"]`,
                                function (r) {
                                    if (
                                        (["A", "AREA"].includes(this.tagName) &&
                                            r.preventDefault(),
                                        g(this))
                                    )
                                        return;
                                    const n =
                                        J.getElementFromSelector(this) ||
                                        this.closest(`.${o}`);
                                    t.getOrCreateInstance(n)[e]();
                                }
                            );
                        },
                        tt = "alert",
                        et = ".bs.alert",
                        rt = `close${et}`,
                        ot = `closed${et}`,
                        nt = "fade",
                        it = "show";
                    class at extends K {
                        static get NAME() {
                            return tt;
                        }
                        close() {
                            if (F.trigger(this._element, rt).defaultPrevented)
                                return;
                            this._element.classList.remove(it);
                            const t = this._element.classList.contains(nt);
                            this._queueCallback(
                                () => this._destroyElement(),
                                this._element,
                                t
                            );
                        }
                        _destroyElement() {
                            this._element.remove(),
                                F.trigger(this._element, ot),
                                this.dispose();
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = at.getOrCreateInstance(this);
                                if ("string" == typeof t) {
                                    if (
                                        void 0 === e[t] ||
                                        t.startsWith("_") ||
                                        "constructor" === t
                                    )
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    e[t](this);
                                }
                            });
                        }
                    }
                    Z(at, "close"), k(at);
                    const st = "button",
                        lt = "active",
                        dt = '[data-bs-toggle="button"]',
                        ct = "click.bs.button.data-api";
                    class pt extends K {
                        static get NAME() {
                            return st;
                        }
                        toggle() {
                            this._element.setAttribute(
                                "aria-pressed",
                                this._element.classList.toggle(lt)
                            );
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = pt.getOrCreateInstance(this);
                                "toggle" === t && e[t]();
                            });
                        }
                    }
                    F.on(document, ct, dt, (t) => {
                        t.preventDefault();
                        const e = t.target.closest(dt);
                        pt.getOrCreateInstance(e).toggle();
                    }),
                        k(pt);
                    const bt = "swipe",
                        mt = ".bs.swipe",
                        gt = `touchstart${mt}`,
                        ft = `touchmove${mt}`,
                        ut = `touchend${mt}`,
                        ht = `pointerdown${mt}`,
                        vt = `pointerup${mt}`,
                        xt = "touch",
                        wt = "pen",
                        yt = "pointer-event",
                        kt = 40,
                        _t = {
                            endCallback: null,
                            leftCallback: null,
                            rightCallback: null,
                        },
                        Et = {
                            endCallback: "(function|null)",
                            leftCallback: "(function|null)",
                            rightCallback: "(function|null)",
                        };
                    class Ct extends V {
                        constructor(t, e) {
                            super(),
                                (this._element = t),
                                t &&
                                    Ct.isSupported() &&
                                    ((this._config = this._getConfig(e)),
                                    (this._deltaX = 0),
                                    (this._supportPointerEvents = Boolean(
                                        window.PointerEvent
                                    )),
                                    this._initEvents());
                        }
                        static get Default() {
                            return _t;
                        }
                        static get DefaultType() {
                            return Et;
                        }
                        static get NAME() {
                            return bt;
                        }
                        dispose() {
                            F.off(this._element, mt);
                        }
                        _start(t) {
                            this._supportPointerEvents
                                ? this._eventIsPointerPenTouch(t) &&
                                  (this._deltaX = t.clientX)
                                : (this._deltaX = t.touches[0].clientX);
                        }
                        _end(t) {
                            this._eventIsPointerPenTouch(t) &&
                                (this._deltaX = t.clientX - this._deltaX),
                                this._handleSwipe(),
                                _(this._config.endCallback);
                        }
                        _move(t) {
                            this._deltaX =
                                t.touches && t.touches.length > 1
                                    ? 0
                                    : t.touches[0].clientX - this._deltaX;
                        }
                        _handleSwipe() {
                            const t = Math.abs(this._deltaX);
                            if (t <= kt) return;
                            const e = t / this._deltaX;
                            (this._deltaX = 0),
                                e &&
                                    _(
                                        e > 0
                                            ? this._config.rightCallback
                                            : this._config.leftCallback
                                    );
                        }
                        _initEvents() {
                            this._supportPointerEvents
                                ? (F.on(this._element, ht, (t) =>
                                      this._start(t)
                                  ),
                                  F.on(this._element, vt, (t) => this._end(t)),
                                  this._element.classList.add(yt))
                                : (F.on(this._element, gt, (t) =>
                                      this._start(t)
                                  ),
                                  F.on(this._element, ft, (t) => this._move(t)),
                                  F.on(this._element, ut, (t) => this._end(t)));
                        }
                        _eventIsPointerPenTouch(t) {
                            return (
                                this._supportPointerEvents &&
                                (t.pointerType === wt || t.pointerType === xt)
                            );
                        }
                        static isSupported() {
                            return (
                                "ontouchstart" in document.documentElement ||
                                navigator.maxTouchPoints > 0
                            );
                        }
                    }
                    const Tt = "carousel",
                        At = ".bs.carousel",
                        jt = ".data-api",
                        zt = 500,
                        St = "next",
                        Ot = "prev",
                        Dt = "left",
                        Lt = "right",
                        Nt = `slide${At}`,
                        Mt = `slid${At}`,
                        Pt = `keydown${At}`,
                        It = `mouseenter${At}`,
                        $t = `mouseleave${At}`,
                        Rt = `dragstart${At}`,
                        Bt = `load${At}${jt}`,
                        Ht = `click${At}${jt}`,
                        qt = "carousel",
                        Ft = "active",
                        Wt = "slide",
                        Xt = "carousel-item-end",
                        Gt = "carousel-item-start",
                        Ut = "carousel-item-next",
                        Vt = "carousel-item-prev",
                        Yt = ".active",
                        Kt = ".carousel-item",
                        Qt = Yt + Kt,
                        Jt = ".carousel-item img",
                        Zt = ".carousel-indicators",
                        te = "[data-bs-slide], [data-bs-slide-to]",
                        ee = '[data-bs-ride="carousel"]',
                        re = { ArrowLeft: Lt, ArrowRight: Dt },
                        oe = {
                            interval: 5e3,
                            keyboard: !0,
                            pause: "hover",
                            ride: !1,
                            touch: !0,
                            wrap: !0,
                        },
                        ne = {
                            interval: "(number|boolean)",
                            keyboard: "boolean",
                            pause: "(string|boolean)",
                            ride: "(boolean|string)",
                            touch: "boolean",
                            wrap: "boolean",
                        };
                    class ie extends K {
                        constructor(t, e) {
                            super(t, e),
                                (this._interval = null),
                                (this._activeElement = null),
                                (this._isSliding = !1),
                                (this.touchTimeout = null),
                                (this._swipeHelper = null),
                                (this._indicatorsElement = J.findOne(
                                    Zt,
                                    this._element
                                )),
                                this._addEventListeners(),
                                this._config.ride === qt && this.cycle();
                        }
                        static get Default() {
                            return oe;
                        }
                        static get DefaultType() {
                            return ne;
                        }
                        static get NAME() {
                            return Tt;
                        }
                        next() {
                            this._slide(St);
                        }
                        nextWhenVisible() {
                            !document.hidden && m(this._element) && this.next();
                        }
                        prev() {
                            this._slide(Ot);
                        }
                        pause() {
                            this._isSliding && c(this._element),
                                this._clearInterval();
                        }
                        cycle() {
                            this._clearInterval(),
                                this._updateInterval(),
                                (this._interval = setInterval(
                                    () => this.nextWhenVisible(),
                                    this._config.interval
                                ));
                        }
                        _maybeEnableCycle() {
                            this._config.ride &&
                                (this._isSliding
                                    ? F.one(this._element, Mt, () =>
                                          this.cycle()
                                      )
                                    : this.cycle());
                        }
                        to(t) {
                            const e = this._getItems();
                            if (t > e.length - 1 || t < 0) return;
                            if (this._isSliding)
                                return void F.one(this._element, Mt, () =>
                                    this.to(t)
                                );
                            const r = this._getItemIndex(this._getActive());
                            if (r === t) return;
                            const o = t > r ? St : Ot;
                            this._slide(o, e[t]);
                        }
                        dispose() {
                            this._swipeHelper && this._swipeHelper.dispose(),
                                super.dispose();
                        }
                        _configAfterMerge(t) {
                            return (t.defaultInterval = t.interval), t;
                        }
                        _addEventListeners() {
                            this._config.keyboard &&
                                F.on(this._element, Pt, (t) =>
                                    this._keydown(t)
                                ),
                                "hover" === this._config.pause &&
                                    (F.on(this._element, It, () =>
                                        this.pause()
                                    ),
                                    F.on(this._element, $t, () =>
                                        this._maybeEnableCycle()
                                    )),
                                this._config.touch &&
                                    Ct.isSupported() &&
                                    this._addTouchEventListeners();
                        }
                        _addTouchEventListeners() {
                            for (const t of J.find(Jt, this._element))
                                F.on(t, Rt, (t) => t.preventDefault());
                            const t = {
                                leftCallback: () =>
                                    this._slide(this._directionToOrder(Dt)),
                                rightCallback: () =>
                                    this._slide(this._directionToOrder(Lt)),
                                endCallback: () => {
                                    "hover" === this._config.pause &&
                                        (this.pause(),
                                        this.touchTimeout &&
                                            clearTimeout(this.touchTimeout),
                                        (this.touchTimeout = setTimeout(
                                            () => this._maybeEnableCycle(),
                                            zt + this._config.interval
                                        )));
                                },
                            };
                            this._swipeHelper = new Ct(this._element, t);
                        }
                        _keydown(t) {
                            if (/input|textarea/i.test(t.target.tagName))
                                return;
                            const e = re[t.key];
                            e &&
                                (t.preventDefault(),
                                this._slide(this._directionToOrder(e)));
                        }
                        _getItemIndex(t) {
                            return this._getItems().indexOf(t);
                        }
                        _setActiveIndicatorElement(t) {
                            if (!this._indicatorsElement) return;
                            const e = J.findOne(Yt, this._indicatorsElement);
                            e.classList.remove(Ft),
                                e.removeAttribute("aria-current");
                            const r = J.findOne(
                                `[data-bs-slide-to="${t}"]`,
                                this._indicatorsElement
                            );
                            r &&
                                (r.classList.add(Ft),
                                r.setAttribute("aria-current", "true"));
                        }
                        _updateInterval() {
                            const t = this._activeElement || this._getActive();
                            if (!t) return;
                            const e = Number.parseInt(
                                t.getAttribute("data-bs-interval"),
                                10
                            );
                            this._config.interval =
                                e || this._config.defaultInterval;
                        }
                        _slide(t, e = null) {
                            if (this._isSliding) return;
                            const r = this._getActive(),
                                o = t === St,
                                n =
                                    e ||
                                    C(
                                        this._getItems(),
                                        r,
                                        o,
                                        this._config.wrap
                                    );
                            if (n === r) return;
                            const i = this._getItemIndex(n),
                                a = (e) =>
                                    F.trigger(this._element, e, {
                                        relatedTarget: n,
                                        direction: this._orderToDirection(t),
                                        from: this._getItemIndex(r),
                                        to: i,
                                    });
                            if (a(Nt).defaultPrevented) return;
                            if (!r || !n) return;
                            const s = Boolean(this._interval);
                            this.pause(),
                                (this._isSliding = !0),
                                this._setActiveIndicatorElement(i),
                                (this._activeElement = n);
                            const l = o ? Gt : Xt,
                                d = o ? Ut : Vt;
                            n.classList.add(d),
                                h(n),
                                r.classList.add(l),
                                n.classList.add(l);
                            const c = () => {
                                n.classList.remove(l, d),
                                    n.classList.add(Ft),
                                    r.classList.remove(Ft, d, l),
                                    (this._isSliding = !1),
                                    a(Mt);
                            };
                            this._queueCallback(c, r, this._isAnimated()),
                                s && this.cycle();
                        }
                        _isAnimated() {
                            return this._element.classList.contains(Wt);
                        }
                        _getActive() {
                            return J.findOne(Qt, this._element);
                        }
                        _getItems() {
                            return J.find(Kt, this._element);
                        }
                        _clearInterval() {
                            this._interval &&
                                (clearInterval(this._interval),
                                (this._interval = null));
                        }
                        _directionToOrder(t) {
                            return y()
                                ? t === Dt
                                    ? Ot
                                    : St
                                : t === Dt
                                ? St
                                : Ot;
                        }
                        _orderToDirection(t) {
                            return y()
                                ? t === Ot
                                    ? Dt
                                    : Lt
                                : t === Ot
                                ? Lt
                                : Dt;
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = ie.getOrCreateInstance(this, t);
                                if ("number" != typeof t) {
                                    if ("string" == typeof t) {
                                        if (
                                            void 0 === e[t] ||
                                            t.startsWith("_") ||
                                            "constructor" === t
                                        )
                                            throw new TypeError(
                                                `No method named "${t}"`
                                            );
                                        e[t]();
                                    }
                                } else e.to(t);
                            });
                        }
                    }
                    F.on(document, Ht, te, function (t) {
                        const e = J.getElementFromSelector(this);
                        if (!e || !e.classList.contains(qt)) return;
                        t.preventDefault();
                        const r = ie.getOrCreateInstance(e),
                            o = this.getAttribute("data-bs-slide-to");
                        return o
                            ? (r.to(o), void r._maybeEnableCycle())
                            : "next" === U.getDataAttribute(this, "slide")
                            ? (r.next(), void r._maybeEnableCycle())
                            : (r.prev(), void r._maybeEnableCycle());
                    }),
                        F.on(window, Bt, () => {
                            const t = J.find(ee);
                            for (const e of t) ie.getOrCreateInstance(e);
                        }),
                        k(ie);
                    const ae = "collapse",
                        se = ".bs.collapse",
                        le = `show${se}`,
                        de = `shown${se}`,
                        ce = `hide${se}`,
                        pe = `hidden${se}`,
                        be = `click${se}.data-api`,
                        me = "show",
                        ge = "collapse",
                        fe = "collapsing",
                        ue = "collapsed",
                        he = `:scope .${ge} .${ge}`,
                        ve = "collapse-horizontal",
                        xe = "width",
                        we = "height",
                        ye = ".collapse.show, .collapse.collapsing",
                        ke = '[data-bs-toggle="collapse"]',
                        _e = { parent: null, toggle: !0 },
                        Ee = { parent: "(null|element)", toggle: "boolean" };
                    class Ce extends K {
                        constructor(t, e) {
                            super(t, e),
                                (this._isTransitioning = !1),
                                (this._triggerArray = []);
                            const r = J.find(ke);
                            for (const t of r) {
                                const e = J.getSelectorFromElement(t),
                                    r = J.find(e).filter(
                                        (t) => t === this._element
                                    );
                                null !== e &&
                                    r.length &&
                                    this._triggerArray.push(t);
                            }
                            this._initializeChildren(),
                                this._config.parent ||
                                    this._addAriaAndCollapsedClass(
                                        this._triggerArray,
                                        this._isShown()
                                    ),
                                this._config.toggle && this.toggle();
                        }
                        static get Default() {
                            return _e;
                        }
                        static get DefaultType() {
                            return Ee;
                        }
                        static get NAME() {
                            return ae;
                        }
                        toggle() {
                            this._isShown() ? this.hide() : this.show();
                        }
                        show() {
                            if (this._isTransitioning || this._isShown())
                                return;
                            let t = [];
                            if (
                                (this._config.parent &&
                                    (t = this._getFirstLevelChildren(ye)
                                        .filter((t) => t !== this._element)
                                        .map((t) =>
                                            Ce.getOrCreateInstance(t, {
                                                toggle: !1,
                                            })
                                        )),
                                t.length && t[0]._isTransitioning)
                            )
                                return;
                            if (F.trigger(this._element, le).defaultPrevented)
                                return;
                            for (const e of t) e.hide();
                            const e = this._getDimension();
                            this._element.classList.remove(ge),
                                this._element.classList.add(fe),
                                (this._element.style[e] = 0),
                                this._addAriaAndCollapsedClass(
                                    this._triggerArray,
                                    !0
                                ),
                                (this._isTransitioning = !0);
                            const r = () => {
                                    (this._isTransitioning = !1),
                                        this._element.classList.remove(fe),
                                        this._element.classList.add(ge, me),
                                        (this._element.style[e] = ""),
                                        F.trigger(this._element, de);
                                },
                                o = `scroll${e[0].toUpperCase() + e.slice(1)}`;
                            this._queueCallback(r, this._element, !0),
                                (this._element.style[
                                    e
                                ] = `${this._element[o]}px`);
                        }
                        hide() {
                            if (this._isTransitioning || !this._isShown())
                                return;
                            if (F.trigger(this._element, ce).defaultPrevented)
                                return;
                            const t = this._getDimension();
                            (this._element.style[t] = `${
                                this._element.getBoundingClientRect()[t]
                            }px`),
                                h(this._element),
                                this._element.classList.add(fe),
                                this._element.classList.remove(ge, me);
                            for (const t of this._triggerArray) {
                                const e = J.getElementFromSelector(t);
                                e &&
                                    !this._isShown(e) &&
                                    this._addAriaAndCollapsedClass([t], !1);
                            }
                            this._isTransitioning = !0;
                            const e = () => {
                                (this._isTransitioning = !1),
                                    this._element.classList.remove(fe),
                                    this._element.classList.add(ge),
                                    F.trigger(this._element, pe);
                            };
                            (this._element.style[t] = ""),
                                this._queueCallback(e, this._element, !0);
                        }
                        _isShown(t = this._element) {
                            return t.classList.contains(me);
                        }
                        _configAfterMerge(t) {
                            return (
                                (t.toggle = Boolean(t.toggle)),
                                (t.parent = b(t.parent)),
                                t
                            );
                        }
                        _getDimension() {
                            return this._element.classList.contains(ve)
                                ? xe
                                : we;
                        }
                        _initializeChildren() {
                            if (!this._config.parent) return;
                            const t = this._getFirstLevelChildren(ke);
                            for (const e of t) {
                                const t = J.getElementFromSelector(e);
                                t &&
                                    this._addAriaAndCollapsedClass(
                                        [e],
                                        this._isShown(t)
                                    );
                            }
                        }
                        _getFirstLevelChildren(t) {
                            const e = J.find(he, this._config.parent);
                            return J.find(t, this._config.parent).filter(
                                (t) => !e.includes(t)
                            );
                        }
                        _addAriaAndCollapsedClass(t, e) {
                            if (t.length)
                                for (const r of t)
                                    r.classList.toggle(ue, !e),
                                        r.setAttribute("aria-expanded", e);
                        }
                        static jQueryInterface(t) {
                            const e = {};
                            return (
                                "string" == typeof t &&
                                    /show|hide/.test(t) &&
                                    (e.toggle = !1),
                                this.each(function () {
                                    const r = Ce.getOrCreateInstance(this, e);
                                    if ("string" == typeof t) {
                                        if (void 0 === r[t])
                                            throw new TypeError(
                                                `No method named "${t}"`
                                            );
                                        r[t]();
                                    }
                                })
                            );
                        }
                    }
                    F.on(document, be, ke, function (t) {
                        ("A" === t.target.tagName ||
                            (t.delegateTarget &&
                                "A" === t.delegateTarget.tagName)) &&
                            t.preventDefault();
                        for (const t of J.getMultipleElementsFromSelector(this))
                            Ce.getOrCreateInstance(t, { toggle: !1 }).toggle();
                    }),
                        k(Ce);
                    var Te = "top",
                        Ae = "bottom",
                        je = "right",
                        ze = "left",
                        Se = "auto",
                        Oe = [Te, Ae, je, ze],
                        De = "start",
                        Le = "end",
                        Ne = "clippingParents",
                        Me = "viewport",
                        Pe = "popper",
                        Ie = "reference",
                        $e = Oe.reduce(function (t, e) {
                            return t.concat([e + "-" + De, e + "-" + Le]);
                        }, []),
                        Re = [].concat(Oe, [Se]).reduce(function (t, e) {
                            return t.concat([e, e + "-" + De, e + "-" + Le]);
                        }, []),
                        Be = "beforeRead",
                        He = "read",
                        qe = "afterRead",
                        Fe = "beforeMain",
                        We = "main",
                        Xe = "afterMain",
                        Ge = "beforeWrite",
                        Ue = "write",
                        Ve = "afterWrite",
                        Ye = [Be, He, qe, Fe, We, Xe, Ge, Ue, Ve];
                    function Ke(t) {
                        return t ? (t.nodeName || "").toLowerCase() : null;
                    }
                    function Qe(t) {
                        if (null == t) return window;
                        if ("[object Window]" !== t.toString()) {
                            var e = t.ownerDocument;
                            return (e && e.defaultView) || window;
                        }
                        return t;
                    }
                    function Je(t) {
                        return (
                            t instanceof Qe(t).Element || t instanceof Element
                        );
                    }
                    function Ze(t) {
                        return (
                            t instanceof Qe(t).HTMLElement ||
                            t instanceof HTMLElement
                        );
                    }
                    function tr(t) {
                        return (
                            "undefined" != typeof ShadowRoot &&
                            (t instanceof Qe(t).ShadowRoot ||
                                t instanceof ShadowRoot)
                        );
                    }
                    function er(t) {
                        var e = t.state;
                        Object.keys(e.elements).forEach(function (t) {
                            var r = e.styles[t] || {},
                                o = e.attributes[t] || {},
                                n = e.elements[t];
                            Ze(n) &&
                                Ke(n) &&
                                (Object.assign(n.style, r),
                                Object.keys(o).forEach(function (t) {
                                    var e = o[t];
                                    !1 === e
                                        ? n.removeAttribute(t)
                                        : n.setAttribute(t, !0 === e ? "" : e);
                                }));
                        });
                    }
                    function rr(t) {
                        var e = t.state,
                            r = {
                                popper: {
                                    position: e.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0",
                                },
                                arrow: { position: "absolute" },
                                reference: {},
                            };
                        return (
                            Object.assign(e.elements.popper.style, r.popper),
                            (e.styles = r),
                            e.elements.arrow &&
                                Object.assign(e.elements.arrow.style, r.arrow),
                            function () {
                                Object.keys(e.elements).forEach(function (t) {
                                    var o = e.elements[t],
                                        n = e.attributes[t] || {},
                                        i = Object.keys(
                                            e.styles.hasOwnProperty(t)
                                                ? e.styles[t]
                                                : r[t]
                                        ).reduce(function (t, e) {
                                            return (t[e] = ""), t;
                                        }, {});
                                    Ze(o) &&
                                        Ke(o) &&
                                        (Object.assign(o.style, i),
                                        Object.keys(n).forEach(function (t) {
                                            o.removeAttribute(t);
                                        }));
                                });
                            }
                        );
                    }
                    const or = {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: er,
                        effect: rr,
                        requires: ["computeStyles"],
                    };
                    function nr(t) {
                        return t.split("-")[0];
                    }
                    var ir = Math.max,
                        ar = Math.min,
                        sr = Math.round;
                    function lr() {
                        var t = navigator.userAgentData;
                        return null != t && t.brands && Array.isArray(t.brands)
                            ? t.brands
                                  .map(function (t) {
                                      return t.brand + "/" + t.version;
                                  })
                                  .join(" ")
                            : navigator.userAgent;
                    }
                    function dr() {
                        return !/^((?!chrome|android).)*safari/i.test(lr());
                    }
                    function cr(t, e, r) {
                        void 0 === e && (e = !1), void 0 === r && (r = !1);
                        var o = t.getBoundingClientRect(),
                            n = 1,
                            i = 1;
                        e &&
                            Ze(t) &&
                            ((n =
                                (t.offsetWidth > 0 &&
                                    sr(o.width) / t.offsetWidth) ||
                                1),
                            (i =
                                (t.offsetHeight > 0 &&
                                    sr(o.height) / t.offsetHeight) ||
                                1));
                        var a = (Je(t) ? Qe(t) : window).visualViewport,
                            s = !dr() && r,
                            l = (o.left + (s && a ? a.offsetLeft : 0)) / n,
                            d = (o.top + (s && a ? a.offsetTop : 0)) / i,
                            c = o.width / n,
                            p = o.height / i;
                        return {
                            width: c,
                            height: p,
                            top: d,
                            right: l + c,
                            bottom: d + p,
                            left: l,
                            x: l,
                            y: d,
                        };
                    }
                    function pr(t) {
                        var e = cr(t),
                            r = t.offsetWidth,
                            o = t.offsetHeight;
                        return (
                            Math.abs(e.width - r) <= 1 && (r = e.width),
                            Math.abs(e.height - o) <= 1 && (o = e.height),
                            {
                                x: t.offsetLeft,
                                y: t.offsetTop,
                                width: r,
                                height: o,
                            }
                        );
                    }
                    function br(t, e) {
                        var r = e.getRootNode && e.getRootNode();
                        if (t.contains(e)) return !0;
                        if (r && tr(r)) {
                            var o = e;
                            do {
                                if (o && t.isSameNode(o)) return !0;
                                o = o.parentNode || o.host;
                            } while (o);
                        }
                        return !1;
                    }
                    function mr(t) {
                        return Qe(t).getComputedStyle(t);
                    }
                    function gr(t) {
                        return ["table", "td", "th"].indexOf(Ke(t)) >= 0;
                    }
                    function fr(t) {
                        return (
                            (Je(t) ? t.ownerDocument : t.document) ||
                            window.document
                        ).documentElement;
                    }
                    function ur(t) {
                        return "html" === Ke(t)
                            ? t
                            : t.assignedSlot ||
                                  t.parentNode ||
                                  (tr(t) ? t.host : null) ||
                                  fr(t);
                    }
                    function hr(t) {
                        return Ze(t) && "fixed" !== mr(t).position
                            ? t.offsetParent
                            : null;
                    }
                    function vr(t) {
                        var e = /firefox/i.test(lr());
                        if (
                            /Trident/i.test(lr()) &&
                            Ze(t) &&
                            "fixed" === mr(t).position
                        )
                            return null;
                        var r = ur(t);
                        for (
                            tr(r) && (r = r.host);
                            Ze(r) && ["html", "body"].indexOf(Ke(r)) < 0;

                        ) {
                            var o = mr(r);
                            if (
                                "none" !== o.transform ||
                                "none" !== o.perspective ||
                                "paint" === o.contain ||
                                -1 !==
                                    ["transform", "perspective"].indexOf(
                                        o.willChange
                                    ) ||
                                (e && "filter" === o.willChange) ||
                                (e && o.filter && "none" !== o.filter)
                            )
                                return r;
                            r = r.parentNode;
                        }
                        return null;
                    }
                    function xr(t) {
                        for (
                            var e = Qe(t), r = hr(t);
                            r && gr(r) && "static" === mr(r).position;

                        )
                            r = hr(r);
                        return r &&
                            ("html" === Ke(r) ||
                                ("body" === Ke(r) &&
                                    "static" === mr(r).position))
                            ? e
                            : r || vr(t) || e;
                    }
                    function wr(t) {
                        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
                    }
                    function yr(t, e, r) {
                        return ir(t, ar(e, r));
                    }
                    function kr(t, e, r) {
                        var o = yr(t, e, r);
                        return o > r ? r : o;
                    }
                    function _r() {
                        return { top: 0, right: 0, bottom: 0, left: 0 };
                    }
                    function Er(t) {
                        return Object.assign({}, _r(), t);
                    }
                    function Cr(t, e) {
                        return e.reduce(function (e, r) {
                            return (e[r] = t), e;
                        }, {});
                    }
                    var Tr = function (t, e) {
                        return Er(
                            "number" !=
                                typeof (t =
                                    "function" == typeof t
                                        ? t(
                                              Object.assign({}, e.rects, {
                                                  placement: e.placement,
                                              })
                                          )
                                        : t)
                                ? t
                                : Cr(t, Oe)
                        );
                    };
                    function Ar(t) {
                        var e,
                            r = t.state,
                            o = t.name,
                            n = t.options,
                            i = r.elements.arrow,
                            a = r.modifiersData.popperOffsets,
                            s = nr(r.placement),
                            l = wr(s),
                            d = [ze, je].indexOf(s) >= 0 ? "height" : "width";
                        if (i && a) {
                            var c = Tr(n.padding, r),
                                p = pr(i),
                                b = "y" === l ? Te : ze,
                                m = "y" === l ? Ae : je,
                                g =
                                    r.rects.reference[d] +
                                    r.rects.reference[l] -
                                    a[l] -
                                    r.rects.popper[d],
                                f = a[l] - r.rects.reference[l],
                                u = xr(i),
                                h = u
                                    ? "y" === l
                                        ? u.clientHeight || 0
                                        : u.clientWidth || 0
                                    : 0,
                                v = g / 2 - f / 2,
                                x = c[b],
                                w = h - p[d] - c[m],
                                y = h / 2 - p[d] / 2 + v,
                                k = yr(x, y, w),
                                _ = l;
                            r.modifiersData[o] =
                                (((e = {})[_] = k),
                                (e.centerOffset = k - y),
                                e);
                        }
                    }
                    function jr(t) {
                        var e = t.state,
                            r = t.options.element,
                            o = void 0 === r ? "[data-popper-arrow]" : r;
                        null != o &&
                            ("string" != typeof o ||
                                (o = e.elements.popper.querySelector(o))) &&
                            br(e.elements.popper, o) &&
                            (e.elements.arrow = o);
                    }
                    const zr = {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: Ar,
                        effect: jr,
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"],
                    };
                    function Sr(t) {
                        return t.split("-")[1];
                    }
                    var Or = {
                        top: "auto",
                        right: "auto",
                        bottom: "auto",
                        left: "auto",
                    };
                    function Dr(t, e) {
                        var r = t.x,
                            o = t.y,
                            n = e.devicePixelRatio || 1;
                        return { x: sr(r * n) / n || 0, y: sr(o * n) / n || 0 };
                    }
                    function Lr(t) {
                        var e,
                            r = t.popper,
                            o = t.popperRect,
                            n = t.placement,
                            i = t.variation,
                            a = t.offsets,
                            s = t.position,
                            l = t.gpuAcceleration,
                            d = t.adaptive,
                            c = t.roundOffsets,
                            p = t.isFixed,
                            b = a.x,
                            m = void 0 === b ? 0 : b,
                            g = a.y,
                            f = void 0 === g ? 0 : g,
                            u =
                                "function" == typeof c
                                    ? c({ x: m, y: f })
                                    : { x: m, y: f };
                        (m = u.x), (f = u.y);
                        var h = a.hasOwnProperty("x"),
                            v = a.hasOwnProperty("y"),
                            x = ze,
                            w = Te,
                            y = window;
                        if (d) {
                            var k = xr(r),
                                _ = "clientHeight",
                                E = "clientWidth";
                            k === Qe(r) &&
                                "static" !== mr((k = fr(r))).position &&
                                "absolute" === s &&
                                ((_ = "scrollHeight"), (E = "scrollWidth")),
                                (n === Te ||
                                    ((n === ze || n === je) && i === Le)) &&
                                    ((w = Ae),
                                    (f -=
                                        (p && k === y && y.visualViewport
                                            ? y.visualViewport.height
                                            : k[_]) - o.height),
                                    (f *= l ? 1 : -1)),
                                (n !== ze &&
                                    ((n !== Te && n !== Ae) || i !== Le)) ||
                                    ((x = je),
                                    (m -=
                                        (p && k === y && y.visualViewport
                                            ? y.visualViewport.width
                                            : k[E]) - o.width),
                                    (m *= l ? 1 : -1));
                        }
                        var C,
                            T = Object.assign({ position: s }, d && Or),
                            A =
                                !0 === c
                                    ? Dr({ x: m, y: f }, Qe(r))
                                    : { x: m, y: f };
                        return (
                            (m = A.x),
                            (f = A.y),
                            l
                                ? Object.assign(
                                      {},
                                      T,
                                      (((C = {})[w] = v ? "0" : ""),
                                      (C[x] = h ? "0" : ""),
                                      (C.transform =
                                          (y.devicePixelRatio || 1) <= 1
                                              ? "translate(" +
                                                m +
                                                "px, " +
                                                f +
                                                "px)"
                                              : "translate3d(" +
                                                m +
                                                "px, " +
                                                f +
                                                "px, 0)"),
                                      C)
                                  )
                                : Object.assign(
                                      {},
                                      T,
                                      (((e = {})[w] = v ? f + "px" : ""),
                                      (e[x] = h ? m + "px" : ""),
                                      (e.transform = ""),
                                      e)
                                  )
                        );
                    }
                    function Nr(t) {
                        var e = t.state,
                            r = t.options,
                            o = r.gpuAcceleration,
                            n = void 0 === o || o,
                            i = r.adaptive,
                            a = void 0 === i || i,
                            s = r.roundOffsets,
                            l = void 0 === s || s,
                            d = {
                                placement: nr(e.placement),
                                variation: Sr(e.placement),
                                popper: e.elements.popper,
                                popperRect: e.rects.popper,
                                gpuAcceleration: n,
                                isFixed: "fixed" === e.options.strategy,
                            };
                        null != e.modifiersData.popperOffsets &&
                            (e.styles.popper = Object.assign(
                                {},
                                e.styles.popper,
                                Lr(
                                    Object.assign({}, d, {
                                        offsets: e.modifiersData.popperOffsets,
                                        position: e.options.strategy,
                                        adaptive: a,
                                        roundOffsets: l,
                                    })
                                )
                            )),
                            null != e.modifiersData.arrow &&
                                (e.styles.arrow = Object.assign(
                                    {},
                                    e.styles.arrow,
                                    Lr(
                                        Object.assign({}, d, {
                                            offsets: e.modifiersData.arrow,
                                            position: "absolute",
                                            adaptive: !1,
                                            roundOffsets: l,
                                        })
                                    )
                                )),
                            (e.attributes.popper = Object.assign(
                                {},
                                e.attributes.popper,
                                { "data-popper-placement": e.placement }
                            ));
                    }
                    const Mr = {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: Nr,
                        data: {},
                    };
                    var Pr = { passive: !0 };
                    function Ir(t) {
                        var e = t.state,
                            r = t.instance,
                            o = t.options,
                            n = o.scroll,
                            i = void 0 === n || n,
                            a = o.resize,
                            s = void 0 === a || a,
                            l = Qe(e.elements.popper),
                            d = [].concat(
                                e.scrollParents.reference,
                                e.scrollParents.popper
                            );
                        return (
                            i &&
                                d.forEach(function (t) {
                                    t.addEventListener("scroll", r.update, Pr);
                                }),
                            s && l.addEventListener("resize", r.update, Pr),
                            function () {
                                i &&
                                    d.forEach(function (t) {
                                        t.removeEventListener(
                                            "scroll",
                                            r.update,
                                            Pr
                                        );
                                    }),
                                    s &&
                                        l.removeEventListener(
                                            "resize",
                                            r.update,
                                            Pr
                                        );
                            }
                        );
                    }
                    const $r = {
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function () {},
                        effect: Ir,
                        data: {},
                    };
                    var Rr = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom",
                    };
                    function Br(t) {
                        return t.replace(
                            /left|right|bottom|top/g,
                            function (t) {
                                return Rr[t];
                            }
                        );
                    }
                    var Hr = { start: "end", end: "start" };
                    function qr(t) {
                        return t.replace(/start|end/g, function (t) {
                            return Hr[t];
                        });
                    }
                    function Fr(t) {
                        var e = Qe(t);
                        return {
                            scrollLeft: e.pageXOffset,
                            scrollTop: e.pageYOffset,
                        };
                    }
                    function Wr(t) {
                        return cr(fr(t)).left + Fr(t).scrollLeft;
                    }
                    function Xr(t, e) {
                        var r = Qe(t),
                            o = fr(t),
                            n = r.visualViewport,
                            i = o.clientWidth,
                            a = o.clientHeight,
                            s = 0,
                            l = 0;
                        if (n) {
                            (i = n.width), (a = n.height);
                            var d = dr();
                            (d || (!d && "fixed" === e)) &&
                                ((s = n.offsetLeft), (l = n.offsetTop));
                        }
                        return { width: i, height: a, x: s + Wr(t), y: l };
                    }
                    function Gr(t) {
                        var e,
                            r = fr(t),
                            o = Fr(t),
                            n = null == (e = t.ownerDocument) ? void 0 : e.body,
                            i = ir(
                                r.scrollWidth,
                                r.clientWidth,
                                n ? n.scrollWidth : 0,
                                n ? n.clientWidth : 0
                            ),
                            a = ir(
                                r.scrollHeight,
                                r.clientHeight,
                                n ? n.scrollHeight : 0,
                                n ? n.clientHeight : 0
                            ),
                            s = -o.scrollLeft + Wr(t),
                            l = -o.scrollTop;
                        return (
                            "rtl" === mr(n || r).direction &&
                                (s +=
                                    ir(r.clientWidth, n ? n.clientWidth : 0) -
                                    i),
                            { width: i, height: a, x: s, y: l }
                        );
                    }
                    function Ur(t) {
                        var e = mr(t),
                            r = e.overflow,
                            o = e.overflowX,
                            n = e.overflowY;
                        return /auto|scroll|overlay|hidden/.test(r + n + o);
                    }
                    function Vr(t) {
                        return ["html", "body", "#document"].indexOf(Ke(t)) >= 0
                            ? t.ownerDocument.body
                            : Ze(t) && Ur(t)
                            ? t
                            : Vr(ur(t));
                    }
                    function Yr(t, e) {
                        var r;
                        void 0 === e && (e = []);
                        var o = Vr(t),
                            n =
                                o ===
                                (null == (r = t.ownerDocument)
                                    ? void 0
                                    : r.body),
                            i = Qe(o),
                            a = n
                                ? [i].concat(
                                      i.visualViewport || [],
                                      Ur(o) ? o : []
                                  )
                                : o,
                            s = e.concat(a);
                        return n ? s : s.concat(Yr(ur(a)));
                    }
                    function Kr(t) {
                        return Object.assign({}, t, {
                            left: t.x,
                            top: t.y,
                            right: t.x + t.width,
                            bottom: t.y + t.height,
                        });
                    }
                    function Qr(t, e) {
                        var r = cr(t, !1, "fixed" === e);
                        return (
                            (r.top = r.top + t.clientTop),
                            (r.left = r.left + t.clientLeft),
                            (r.bottom = r.top + t.clientHeight),
                            (r.right = r.left + t.clientWidth),
                            (r.width = t.clientWidth),
                            (r.height = t.clientHeight),
                            (r.x = r.left),
                            (r.y = r.top),
                            r
                        );
                    }
                    function Jr(t, e, r) {
                        return e === Me
                            ? Kr(Xr(t, r))
                            : Je(e)
                            ? Qr(e, r)
                            : Kr(Gr(fr(t)));
                    }
                    function Zr(t) {
                        var e = Yr(ur(t)),
                            r =
                                ["absolute", "fixed"].indexOf(mr(t).position) >=
                                    0 && Ze(t)
                                    ? xr(t)
                                    : t;
                        return Je(r)
                            ? e.filter(function (t) {
                                  return Je(t) && br(t, r) && "body" !== Ke(t);
                              })
                            : [];
                    }
                    function to(t, e, r, o) {
                        var n = "clippingParents" === e ? Zr(t) : [].concat(e),
                            i = [].concat(n, [r]),
                            a = i[0],
                            s = i.reduce(function (e, r) {
                                var n = Jr(t, r, o);
                                return (
                                    (e.top = ir(n.top, e.top)),
                                    (e.right = ar(n.right, e.right)),
                                    (e.bottom = ar(n.bottom, e.bottom)),
                                    (e.left = ir(n.left, e.left)),
                                    e
                                );
                            }, Jr(t, a, o));
                        return (
                            (s.width = s.right - s.left),
                            (s.height = s.bottom - s.top),
                            (s.x = s.left),
                            (s.y = s.top),
                            s
                        );
                    }
                    function eo(t) {
                        var e,
                            r = t.reference,
                            o = t.element,
                            n = t.placement,
                            i = n ? nr(n) : null,
                            a = n ? Sr(n) : null,
                            s = r.x + r.width / 2 - o.width / 2,
                            l = r.y + r.height / 2 - o.height / 2;
                        switch (i) {
                            case Te:
                                e = { x: s, y: r.y - o.height };
                                break;
                            case Ae:
                                e = { x: s, y: r.y + r.height };
                                break;
                            case je:
                                e = { x: r.x + r.width, y: l };
                                break;
                            case ze:
                                e = { x: r.x - o.width, y: l };
                                break;
                            default:
                                e = { x: r.x, y: r.y };
                        }
                        var d = i ? wr(i) : null;
                        if (null != d) {
                            var c = "y" === d ? "height" : "width";
                            switch (a) {
                                case De:
                                    e[d] = e[d] - (r[c] / 2 - o[c] / 2);
                                    break;
                                case Le:
                                    e[d] = e[d] + (r[c] / 2 - o[c] / 2);
                            }
                        }
                        return e;
                    }
                    function ro(t, e) {
                        void 0 === e && (e = {});
                        var r = e,
                            o = r.placement,
                            n = void 0 === o ? t.placement : o,
                            i = r.strategy,
                            a = void 0 === i ? t.strategy : i,
                            s = r.boundary,
                            l = void 0 === s ? Ne : s,
                            d = r.rootBoundary,
                            c = void 0 === d ? Me : d,
                            p = r.elementContext,
                            b = void 0 === p ? Pe : p,
                            m = r.altBoundary,
                            g = void 0 !== m && m,
                            f = r.padding,
                            u = void 0 === f ? 0 : f,
                            h = Er("number" != typeof u ? u : Cr(u, Oe)),
                            v = b === Pe ? Ie : Pe,
                            x = t.rects.popper,
                            w = t.elements[g ? v : b],
                            y = to(
                                Je(w)
                                    ? w
                                    : w.contextElement || fr(t.elements.popper),
                                l,
                                c,
                                a
                            ),
                            k = cr(t.elements.reference),
                            _ = eo({
                                reference: k,
                                element: x,
                                strategy: "absolute",
                                placement: n,
                            }),
                            E = Kr(Object.assign({}, x, _)),
                            C = b === Pe ? E : k,
                            T = {
                                top: y.top - C.top + h.top,
                                bottom: C.bottom - y.bottom + h.bottom,
                                left: y.left - C.left + h.left,
                                right: C.right - y.right + h.right,
                            },
                            A = t.modifiersData.offset;
                        if (b === Pe && A) {
                            var j = A[n];
                            Object.keys(T).forEach(function (t) {
                                var e = [je, Ae].indexOf(t) >= 0 ? 1 : -1,
                                    r = [Te, Ae].indexOf(t) >= 0 ? "y" : "x";
                                T[t] += j[r] * e;
                            });
                        }
                        return T;
                    }
                    function oo(t, e) {
                        void 0 === e && (e = {});
                        var r = e,
                            o = r.placement,
                            n = r.boundary,
                            i = r.rootBoundary,
                            a = r.padding,
                            s = r.flipVariations,
                            l = r.allowedAutoPlacements,
                            d = void 0 === l ? Re : l,
                            c = Sr(o),
                            p = c
                                ? s
                                    ? $e
                                    : $e.filter(function (t) {
                                          return Sr(t) === c;
                                      })
                                : Oe,
                            b = p.filter(function (t) {
                                return d.indexOf(t) >= 0;
                            });
                        0 === b.length && (b = p);
                        var m = b.reduce(function (e, r) {
                            return (
                                (e[r] = ro(t, {
                                    placement: r,
                                    boundary: n,
                                    rootBoundary: i,
                                    padding: a,
                                })[nr(r)]),
                                e
                            );
                        }, {});
                        return Object.keys(m).sort(function (t, e) {
                            return m[t] - m[e];
                        });
                    }
                    function no(t) {
                        if (nr(t) === Se) return [];
                        var e = Br(t);
                        return [qr(t), e, qr(e)];
                    }
                    function io(t) {
                        var e = t.state,
                            r = t.options,
                            o = t.name;
                        if (!e.modifiersData[o]._skip) {
                            for (
                                var n = r.mainAxis,
                                    i = void 0 === n || n,
                                    a = r.altAxis,
                                    s = void 0 === a || a,
                                    l = r.fallbackPlacements,
                                    d = r.padding,
                                    c = r.boundary,
                                    p = r.rootBoundary,
                                    b = r.altBoundary,
                                    m = r.flipVariations,
                                    g = void 0 === m || m,
                                    f = r.allowedAutoPlacements,
                                    u = e.options.placement,
                                    h = nr(u),
                                    v = l || (h !== u && g ? no(u) : [Br(u)]),
                                    x = [u].concat(v).reduce(function (t, r) {
                                        return t.concat(
                                            nr(r) === Se
                                                ? oo(e, {
                                                      placement: r,
                                                      boundary: c,
                                                      rootBoundary: p,
                                                      padding: d,
                                                      flipVariations: g,
                                                      allowedAutoPlacements: f,
                                                  })
                                                : r
                                        );
                                    }, []),
                                    w = e.rects.reference,
                                    y = e.rects.popper,
                                    k = new Map(),
                                    _ = !0,
                                    E = x[0],
                                    C = 0;
                                C < x.length;
                                C++
                            ) {
                                var T = x[C],
                                    A = nr(T),
                                    j = Sr(T) === De,
                                    z = [Te, Ae].indexOf(A) >= 0,
                                    S = z ? "width" : "height",
                                    O = ro(e, {
                                        placement: T,
                                        boundary: c,
                                        rootBoundary: p,
                                        altBoundary: b,
                                        padding: d,
                                    }),
                                    D = z ? (j ? je : ze) : j ? Ae : Te;
                                w[S] > y[S] && (D = Br(D));
                                var L = Br(D),
                                    N = [];
                                if (
                                    (i && N.push(O[A] <= 0),
                                    s && N.push(O[D] <= 0, O[L] <= 0),
                                    N.every(function (t) {
                                        return t;
                                    }))
                                ) {
                                    (E = T), (_ = !1);
                                    break;
                                }
                                k.set(T, N);
                            }
                            if (_)
                                for (
                                    var M = function (t) {
                                            var e = x.find(function (e) {
                                                var r = k.get(e);
                                                if (r)
                                                    return r
                                                        .slice(0, t)
                                                        .every(function (t) {
                                                            return t;
                                                        });
                                            });
                                            if (e) return (E = e), "break";
                                        },
                                        P = g ? 3 : 1;
                                    P > 0 && "break" !== M(P);
                                    P--
                                );
                            e.placement !== E &&
                                ((e.modifiersData[o]._skip = !0),
                                (e.placement = E),
                                (e.reset = !0));
                        }
                    }
                    const ao = {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: io,
                        requiresIfExists: ["offset"],
                        data: { _skip: !1 },
                    };
                    function so(t, e, r) {
                        return (
                            void 0 === r && (r = { x: 0, y: 0 }),
                            {
                                top: t.top - e.height - r.y,
                                right: t.right - e.width + r.x,
                                bottom: t.bottom - e.height + r.y,
                                left: t.left - e.width - r.x,
                            }
                        );
                    }
                    function lo(t) {
                        return [Te, je, Ae, ze].some(function (e) {
                            return t[e] >= 0;
                        });
                    }
                    function co(t) {
                        var e = t.state,
                            r = t.name,
                            o = e.rects.reference,
                            n = e.rects.popper,
                            i = e.modifiersData.preventOverflow,
                            a = ro(e, { elementContext: "reference" }),
                            s = ro(e, { altBoundary: !0 }),
                            l = so(a, o),
                            d = so(s, n, i),
                            c = lo(l),
                            p = lo(d);
                        (e.modifiersData[r] = {
                            referenceClippingOffsets: l,
                            popperEscapeOffsets: d,
                            isReferenceHidden: c,
                            hasPopperEscaped: p,
                        }),
                            (e.attributes.popper = Object.assign(
                                {},
                                e.attributes.popper,
                                {
                                    "data-popper-reference-hidden": c,
                                    "data-popper-escaped": p,
                                }
                            ));
                    }
                    const po = {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: co,
                    };
                    function bo(t, e, r) {
                        var o = nr(t),
                            n = [ze, Te].indexOf(o) >= 0 ? -1 : 1,
                            i =
                                "function" == typeof r
                                    ? r(Object.assign({}, e, { placement: t }))
                                    : r,
                            a = i[0],
                            s = i[1];
                        return (
                            (a = a || 0),
                            (s = (s || 0) * n),
                            [ze, je].indexOf(o) >= 0
                                ? { x: s, y: a }
                                : { x: a, y: s }
                        );
                    }
                    function mo(t) {
                        var e = t.state,
                            r = t.options,
                            o = t.name,
                            n = r.offset,
                            i = void 0 === n ? [0, 0] : n,
                            a = Re.reduce(function (t, r) {
                                return (t[r] = bo(r, e.rects, i)), t;
                            }, {}),
                            s = a[e.placement],
                            l = s.x,
                            d = s.y;
                        null != e.modifiersData.popperOffsets &&
                            ((e.modifiersData.popperOffsets.x += l),
                            (e.modifiersData.popperOffsets.y += d)),
                            (e.modifiersData[o] = a);
                    }
                    const go = {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: mo,
                    };
                    function fo(t) {
                        var e = t.state,
                            r = t.name;
                        e.modifiersData[r] = eo({
                            reference: e.rects.reference,
                            element: e.rects.popper,
                            strategy: "absolute",
                            placement: e.placement,
                        });
                    }
                    const uo = {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: fo,
                        data: {},
                    };
                    function ho(t) {
                        return "x" === t ? "y" : "x";
                    }
                    function vo(t) {
                        var e = t.state,
                            r = t.options,
                            o = t.name,
                            n = r.mainAxis,
                            i = void 0 === n || n,
                            a = r.altAxis,
                            s = void 0 !== a && a,
                            l = r.boundary,
                            d = r.rootBoundary,
                            c = r.altBoundary,
                            p = r.padding,
                            b = r.tether,
                            m = void 0 === b || b,
                            g = r.tetherOffset,
                            f = void 0 === g ? 0 : g,
                            u = ro(e, {
                                boundary: l,
                                rootBoundary: d,
                                padding: p,
                                altBoundary: c,
                            }),
                            h = nr(e.placement),
                            v = Sr(e.placement),
                            x = !v,
                            w = wr(h),
                            y = ho(w),
                            k = e.modifiersData.popperOffsets,
                            _ = e.rects.reference,
                            E = e.rects.popper,
                            C =
                                "function" == typeof f
                                    ? f(
                                          Object.assign({}, e.rects, {
                                              placement: e.placement,
                                          })
                                      )
                                    : f,
                            T =
                                "number" == typeof C
                                    ? { mainAxis: C, altAxis: C }
                                    : Object.assign(
                                          { mainAxis: 0, altAxis: 0 },
                                          C
                                      ),
                            A = e.modifiersData.offset
                                ? e.modifiersData.offset[e.placement]
                                : null,
                            j = { x: 0, y: 0 };
                        if (k) {
                            if (i) {
                                var z,
                                    S = "y" === w ? Te : ze,
                                    O = "y" === w ? Ae : je,
                                    D = "y" === w ? "height" : "width",
                                    L = k[w],
                                    N = L + u[S],
                                    M = L - u[O],
                                    P = m ? -E[D] / 2 : 0,
                                    I = v === De ? _[D] : E[D],
                                    $ = v === De ? -E[D] : -_[D],
                                    R = e.elements.arrow,
                                    B =
                                        m && R
                                            ? pr(R)
                                            : { width: 0, height: 0 },
                                    H = e.modifiersData["arrow#persistent"]
                                        ? e.modifiersData["arrow#persistent"]
                                              .padding
                                        : _r(),
                                    q = H[S],
                                    F = H[O],
                                    W = yr(0, _[D], B[D]),
                                    X = x
                                        ? _[D] / 2 - P - W - q - T.mainAxis
                                        : I - W - q - T.mainAxis,
                                    G = x
                                        ? -_[D] / 2 + P + W + F + T.mainAxis
                                        : $ + W + F + T.mainAxis,
                                    U =
                                        e.elements.arrow &&
                                        xr(e.elements.arrow),
                                    V = U
                                        ? "y" === w
                                            ? U.clientTop || 0
                                            : U.clientLeft || 0
                                        : 0,
                                    Y =
                                        null != (z = null == A ? void 0 : A[w])
                                            ? z
                                            : 0,
                                    K = L + G - Y,
                                    Q = yr(
                                        m ? ar(N, L + X - Y - V) : N,
                                        L,
                                        m ? ir(M, K) : M
                                    );
                                (k[w] = Q), (j[w] = Q - L);
                            }
                            if (s) {
                                var J,
                                    Z = "x" === w ? Te : ze,
                                    tt = "x" === w ? Ae : je,
                                    et = k[y],
                                    rt = "y" === y ? "height" : "width",
                                    ot = et + u[Z],
                                    nt = et - u[tt],
                                    it = -1 !== [Te, ze].indexOf(h),
                                    at =
                                        null != (J = null == A ? void 0 : A[y])
                                            ? J
                                            : 0,
                                    st = it
                                        ? ot
                                        : et - _[rt] - E[rt] - at + T.altAxis,
                                    lt = it
                                        ? et + _[rt] + E[rt] - at - T.altAxis
                                        : nt,
                                    dt =
                                        m && it
                                            ? kr(st, et, lt)
                                            : yr(m ? st : ot, et, m ? lt : nt);
                                (k[y] = dt), (j[y] = dt - et);
                            }
                            e.modifiersData[o] = j;
                        }
                    }
                    const xo = {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: vo,
                        requiresIfExists: ["offset"],
                    };
                    function wo(t) {
                        return {
                            scrollLeft: t.scrollLeft,
                            scrollTop: t.scrollTop,
                        };
                    }
                    function yo(t) {
                        return t !== Qe(t) && Ze(t) ? wo(t) : Fr(t);
                    }
                    function ko(t) {
                        var e = t.getBoundingClientRect(),
                            r = sr(e.width) / t.offsetWidth || 1,
                            o = sr(e.height) / t.offsetHeight || 1;
                        return 1 !== r || 1 !== o;
                    }
                    function _o(t, e, r) {
                        void 0 === r && (r = !1);
                        var o = Ze(e),
                            n = Ze(e) && ko(e),
                            i = fr(e),
                            a = cr(t, n, r),
                            s = { scrollLeft: 0, scrollTop: 0 },
                            l = { x: 0, y: 0 };
                        return (
                            (o || (!o && !r)) &&
                                (("body" !== Ke(e) || Ur(i)) && (s = yo(e)),
                                Ze(e)
                                    ? (((l = cr(e, !0)).x += e.clientLeft),
                                      (l.y += e.clientTop))
                                    : i && (l.x = Wr(i))),
                            {
                                x: a.left + s.scrollLeft - l.x,
                                y: a.top + s.scrollTop - l.y,
                                width: a.width,
                                height: a.height,
                            }
                        );
                    }
                    function Eo(t) {
                        var e = new Map(),
                            r = new Set(),
                            o = [];
                        function n(t) {
                            r.add(t.name),
                                []
                                    .concat(
                                        t.requires || [],
                                        t.requiresIfExists || []
                                    )
                                    .forEach(function (t) {
                                        if (!r.has(t)) {
                                            var o = e.get(t);
                                            o && n(o);
                                        }
                                    }),
                                o.push(t);
                        }
                        return (
                            t.forEach(function (t) {
                                e.set(t.name, t);
                            }),
                            t.forEach(function (t) {
                                r.has(t.name) || n(t);
                            }),
                            o
                        );
                    }
                    function Co(t) {
                        var e = Eo(t);
                        return Ye.reduce(function (t, r) {
                            return t.concat(
                                e.filter(function (t) {
                                    return t.phase === r;
                                })
                            );
                        }, []);
                    }
                    function To(t) {
                        var e;
                        return function () {
                            return (
                                e ||
                                    (e = new Promise(function (r) {
                                        Promise.resolve().then(function () {
                                            (e = void 0), r(t());
                                        });
                                    })),
                                e
                            );
                        };
                    }
                    function Ao(t) {
                        var e = t.reduce(function (t, e) {
                            var r = t[e.name];
                            return (
                                (t[e.name] = r
                                    ? Object.assign({}, r, e, {
                                          options: Object.assign(
                                              {},
                                              r.options,
                                              e.options
                                          ),
                                          data: Object.assign(
                                              {},
                                              r.data,
                                              e.data
                                          ),
                                      })
                                    : e),
                                t
                            );
                        }, {});
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    }
                    var jo = {
                        placement: "bottom",
                        modifiers: [],
                        strategy: "absolute",
                    };
                    function zo() {
                        for (
                            var t = arguments.length, e = new Array(t), r = 0;
                            r < t;
                            r++
                        )
                            e[r] = arguments[r];
                        return !e.some(function (t) {
                            return !(
                                t &&
                                "function" == typeof t.getBoundingClientRect
                            );
                        });
                    }
                    function So(t) {
                        void 0 === t && (t = {});
                        var e = t,
                            r = e.defaultModifiers,
                            o = void 0 === r ? [] : r,
                            n = e.defaultOptions,
                            i = void 0 === n ? jo : n;
                        return function (t, e, r) {
                            void 0 === r && (r = i);
                            var n = {
                                    placement: "bottom",
                                    orderedModifiers: [],
                                    options: Object.assign({}, jo, i),
                                    modifiersData: {},
                                    elements: { reference: t, popper: e },
                                    attributes: {},
                                    styles: {},
                                },
                                a = [],
                                s = !1,
                                l = {
                                    state: n,
                                    setOptions: function (r) {
                                        var a =
                                            "function" == typeof r
                                                ? r(n.options)
                                                : r;
                                        c(),
                                            (n.options = Object.assign(
                                                {},
                                                i,
                                                n.options,
                                                a
                                            )),
                                            (n.scrollParents = {
                                                reference: Je(t)
                                                    ? Yr(t)
                                                    : t.contextElement
                                                    ? Yr(t.contextElement)
                                                    : [],
                                                popper: Yr(e),
                                            });
                                        var s = Co(
                                            Ao(
                                                [].concat(
                                                    o,
                                                    n.options.modifiers
                                                )
                                            )
                                        );
                                        return (
                                            (n.orderedModifiers = s.filter(
                                                function (t) {
                                                    return t.enabled;
                                                }
                                            )),
                                            d(),
                                            l.update()
                                        );
                                    },
                                    forceUpdate: function () {
                                        if (!s) {
                                            var t = n.elements,
                                                e = t.reference,
                                                r = t.popper;
                                            if (zo(e, r)) {
                                                (n.rects = {
                                                    reference: _o(
                                                        e,
                                                        xr(r),
                                                        "fixed" ===
                                                            n.options.strategy
                                                    ),
                                                    popper: pr(r),
                                                }),
                                                    (n.reset = !1),
                                                    (n.placement =
                                                        n.options.placement),
                                                    n.orderedModifiers.forEach(
                                                        function (t) {
                                                            return (n.modifiersData[
                                                                t.name
                                                            ] = Object.assign(
                                                                {},
                                                                t.data
                                                            ));
                                                        }
                                                    );
                                                for (
                                                    var o = 0;
                                                    o <
                                                    n.orderedModifiers.length;
                                                    o++
                                                )
                                                    if (!0 !== n.reset) {
                                                        var i =
                                                                n
                                                                    .orderedModifiers[
                                                                    o
                                                                ],
                                                            a = i.fn,
                                                            d = i.options,
                                                            c =
                                                                void 0 === d
                                                                    ? {}
                                                                    : d,
                                                            p = i.name;
                                                        "function" ==
                                                            typeof a &&
                                                            (n =
                                                                a({
                                                                    state: n,
                                                                    options: c,
                                                                    name: p,
                                                                    instance: l,
                                                                }) || n);
                                                    } else
                                                        (n.reset = !1),
                                                            (o = -1);
                                            }
                                        }
                                    },
                                    update: To(function () {
                                        return new Promise(function (t) {
                                            l.forceUpdate(), t(n);
                                        });
                                    }),
                                    destroy: function () {
                                        c(), (s = !0);
                                    },
                                };
                            if (!zo(t, e)) return l;
                            function d() {
                                n.orderedModifiers.forEach(function (t) {
                                    var e = t.name,
                                        r = t.options,
                                        o = void 0 === r ? {} : r,
                                        i = t.effect;
                                    if ("function" == typeof i) {
                                        var s = i({
                                                state: n,
                                                name: e,
                                                instance: l,
                                                options: o,
                                            }),
                                            d = function () {};
                                        a.push(s || d);
                                    }
                                });
                            }
                            function c() {
                                a.forEach(function (t) {
                                    return t();
                                }),
                                    (a = []);
                            }
                            return (
                                l.setOptions(r).then(function (t) {
                                    !s && r.onFirstUpdate && r.onFirstUpdate(t);
                                }),
                                l
                            );
                        };
                    }
                    var Oo = So(),
                        Do = So({ defaultModifiers: [$r, uo, Mr, or] }),
                        Lo = So({
                            defaultModifiers: [
                                $r,
                                uo,
                                Mr,
                                or,
                                go,
                                ao,
                                xo,
                                zr,
                                po,
                            ],
                        });
                    const No = Object.freeze(
                            Object.defineProperty(
                                {
                                    __proto__: null,
                                    afterMain: Xe,
                                    afterRead: qe,
                                    afterWrite: Ve,
                                    applyStyles: or,
                                    arrow: zr,
                                    auto: Se,
                                    basePlacements: Oe,
                                    beforeMain: Fe,
                                    beforeRead: Be,
                                    beforeWrite: Ge,
                                    bottom: Ae,
                                    clippingParents: Ne,
                                    computeStyles: Mr,
                                    createPopper: Lo,
                                    createPopperBase: Oo,
                                    createPopperLite: Do,
                                    detectOverflow: ro,
                                    end: Le,
                                    eventListeners: $r,
                                    flip: ao,
                                    hide: po,
                                    left: ze,
                                    main: We,
                                    modifierPhases: Ye,
                                    offset: go,
                                    placements: Re,
                                    popper: Pe,
                                    popperGenerator: So,
                                    popperOffsets: uo,
                                    preventOverflow: xo,
                                    read: He,
                                    reference: Ie,
                                    right: je,
                                    start: De,
                                    top: Te,
                                    variationPlacements: $e,
                                    viewport: Me,
                                    write: Ue,
                                },
                                Symbol.toStringTag,
                                { value: "Module" }
                            )
                        ),
                        Mo = "dropdown",
                        Po = ".bs.dropdown",
                        Io = ".data-api",
                        $o = "Escape",
                        Ro = "Tab",
                        Bo = "ArrowUp",
                        Ho = "ArrowDown",
                        qo = 2,
                        Fo = `hide${Po}`,
                        Wo = `hidden${Po}`,
                        Xo = `show${Po}`,
                        Go = `shown${Po}`,
                        Uo = `click${Po}${Io}`,
                        Vo = `keydown${Po}${Io}`,
                        Yo = `keyup${Po}${Io}`,
                        Ko = "show",
                        Qo = "dropup",
                        Jo = "dropend",
                        Zo = "dropstart",
                        tn = "dropup-center",
                        en = "dropdown-center",
                        rn =
                            '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
                        on = `${rn}.${Ko}`,
                        nn = ".dropdown-menu",
                        an = ".navbar",
                        sn = ".navbar-nav",
                        ln =
                            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                        dn = y() ? "top-end" : "top-start",
                        cn = y() ? "top-start" : "top-end",
                        pn = y() ? "bottom-end" : "bottom-start",
                        bn = y() ? "bottom-start" : "bottom-end",
                        mn = y() ? "left-start" : "right-start",
                        gn = y() ? "right-start" : "left-start",
                        fn = "top",
                        un = "bottom",
                        hn = {
                            autoClose: !0,
                            boundary: "clippingParents",
                            display: "dynamic",
                            offset: [0, 2],
                            popperConfig: null,
                            reference: "toggle",
                        },
                        vn = {
                            autoClose: "(boolean|string)",
                            boundary: "(string|element)",
                            display: "string",
                            offset: "(array|string|function)",
                            popperConfig: "(null|object|function)",
                            reference: "(string|element|object)",
                        };
                    class xn extends K {
                        constructor(t, e) {
                            super(t, e),
                                (this._popper = null),
                                (this._parent = this._element.parentNode),
                                (this._menu =
                                    J.next(this._element, nn)[0] ||
                                    J.prev(this._element, nn)[0] ||
                                    J.findOne(nn, this._parent)),
                                (this._inNavbar = this._detectNavbar());
                        }
                        static get Default() {
                            return hn;
                        }
                        static get DefaultType() {
                            return vn;
                        }
                        static get NAME() {
                            return Mo;
                        }
                        toggle() {
                            return this._isShown() ? this.hide() : this.show();
                        }
                        show() {
                            if (g(this._element) || this._isShown()) return;
                            const t = { relatedTarget: this._element };
                            if (
                                !F.trigger(this._element, Xo, t)
                                    .defaultPrevented
                            ) {
                                if (
                                    (this._createPopper(),
                                    "ontouchstart" in
                                        document.documentElement &&
                                        !this._parent.closest(sn))
                                )
                                    for (const t of [].concat(
                                        ...document.body.children
                                    ))
                                        F.on(t, "mouseover", u);
                                this._element.focus(),
                                    this._element.setAttribute(
                                        "aria-expanded",
                                        !0
                                    ),
                                    this._menu.classList.add(Ko),
                                    this._element.classList.add(Ko),
                                    F.trigger(this._element, Go, t);
                            }
                        }
                        hide() {
                            if (g(this._element) || !this._isShown()) return;
                            const t = { relatedTarget: this._element };
                            this._completeHide(t);
                        }
                        dispose() {
                            this._popper && this._popper.destroy(),
                                super.dispose();
                        }
                        update() {
                            (this._inNavbar = this._detectNavbar()),
                                this._popper && this._popper.update();
                        }
                        _completeHide(t) {
                            if (
                                !F.trigger(this._element, Fo, t)
                                    .defaultPrevented
                            ) {
                                if ("ontouchstart" in document.documentElement)
                                    for (const t of [].concat(
                                        ...document.body.children
                                    ))
                                        F.off(t, "mouseover", u);
                                this._popper && this._popper.destroy(),
                                    this._menu.classList.remove(Ko),
                                    this._element.classList.remove(Ko),
                                    this._element.setAttribute(
                                        "aria-expanded",
                                        "false"
                                    ),
                                    U.removeDataAttribute(this._menu, "popper"),
                                    F.trigger(this._element, Wo, t);
                            }
                        }
                        _getConfig(t) {
                            if (
                                "object" ==
                                    typeof (t = super._getConfig(t))
                                        .reference &&
                                !p(t.reference) &&
                                "function" !=
                                    typeof t.reference.getBoundingClientRect
                            )
                                throw new TypeError(
                                    `${Mo.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                                );
                            return t;
                        }
                        _createPopper() {
                            if (void 0 === No)
                                throw new TypeError(
                                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                                );
                            let t = this._element;
                            "parent" === this._config.reference
                                ? (t = this._parent)
                                : p(this._config.reference)
                                ? (t = b(this._config.reference))
                                : "object" == typeof this._config.reference &&
                                  (t = this._config.reference);
                            const e = this._getPopperConfig();
                            this._popper = Lo(t, this._menu, e);
                        }
                        _isShown() {
                            return this._menu.classList.contains(Ko);
                        }
                        _getPlacement() {
                            const t = this._parent;
                            if (t.classList.contains(Jo)) return mn;
                            if (t.classList.contains(Zo)) return gn;
                            if (t.classList.contains(tn)) return fn;
                            if (t.classList.contains(en)) return un;
                            const e =
                                "end" ===
                                getComputedStyle(this._menu)
                                    .getPropertyValue("--bs-position")
                                    .trim();
                            return t.classList.contains(Qo)
                                ? e
                                    ? cn
                                    : dn
                                : e
                                ? bn
                                : pn;
                        }
                        _detectNavbar() {
                            return null !== this._element.closest(an);
                        }
                        _getOffset() {
                            const { offset: t } = this._config;
                            return "string" == typeof t
                                ? t
                                      .split(",")
                                      .map((t) => Number.parseInt(t, 10))
                                : "function" == typeof t
                                ? (e) => t(e, this._element)
                                : t;
                        }
                        _getPopperConfig() {
                            const t = {
                                placement: this._getPlacement(),
                                modifiers: [
                                    {
                                        name: "preventOverflow",
                                        options: {
                                            boundary: this._config.boundary,
                                        },
                                    },
                                    {
                                        name: "offset",
                                        options: { offset: this._getOffset() },
                                    },
                                ],
                            };
                            return (
                                (this._inNavbar ||
                                    "static" === this._config.display) &&
                                    (U.setDataAttribute(
                                        this._menu,
                                        "popper",
                                        "static"
                                    ),
                                    (t.modifiers = [
                                        { name: "applyStyles", enabled: !1 },
                                    ])),
                                { ...t, ..._(this._config.popperConfig, [t]) }
                            );
                        }
                        _selectMenuItem({ key: t, target: e }) {
                            const r = J.find(ln, this._menu).filter((t) =>
                                m(t)
                            );
                            r.length &&
                                C(r, e, t === Ho, !r.includes(e)).focus();
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = xn.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t])
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    e[t]();
                                }
                            });
                        }
                        static clearMenus(t) {
                            if (
                                t.button === qo ||
                                ("keyup" === t.type && t.key !== Ro)
                            )
                                return;
                            const e = J.find(on);
                            for (const r of e) {
                                const e = xn.getInstance(r);
                                if (!e || !1 === e._config.autoClose) continue;
                                const o = t.composedPath(),
                                    n = o.includes(e._menu);
                                if (
                                    o.includes(e._element) ||
                                    ("inside" === e._config.autoClose && !n) ||
                                    ("outside" === e._config.autoClose && n)
                                )
                                    continue;
                                if (
                                    e._menu.contains(t.target) &&
                                    (("keyup" === t.type && t.key === Ro) ||
                                        /input|select|option|textarea|form/i.test(
                                            t.target.tagName
                                        ))
                                )
                                    continue;
                                const i = { relatedTarget: e._element };
                                "click" === t.type && (i.clickEvent = t),
                                    e._completeHide(i);
                            }
                        }
                        static dataApiKeydownHandler(t) {
                            const e = /input|textarea/i.test(t.target.tagName),
                                r = t.key === $o,
                                o = [Bo, Ho].includes(t.key);
                            if (!o && !r) return;
                            if (e && !r) return;
                            t.preventDefault();
                            const n = this.matches(rn)
                                    ? this
                                    : J.prev(this, rn)[0] ||
                                      J.next(this, rn)[0] ||
                                      J.findOne(
                                          rn,
                                          t.delegateTarget.parentNode
                                      ),
                                i = xn.getOrCreateInstance(n);
                            if (o)
                                return (
                                    t.stopPropagation(),
                                    i.show(),
                                    void i._selectMenuItem(t)
                                );
                            i._isShown() &&
                                (t.stopPropagation(), i.hide(), n.focus());
                        }
                    }
                    F.on(document, Vo, rn, xn.dataApiKeydownHandler),
                        F.on(document, Vo, nn, xn.dataApiKeydownHandler),
                        F.on(document, Uo, xn.clearMenus),
                        F.on(document, Yo, xn.clearMenus),
                        F.on(document, Uo, rn, function (t) {
                            t.preventDefault(),
                                xn.getOrCreateInstance(this).toggle();
                        }),
                        k(xn);
                    const wn = "backdrop",
                        yn = "fade",
                        kn = "show",
                        _n = `mousedown.bs.${wn}`,
                        En = {
                            className: "modal-backdrop",
                            clickCallback: null,
                            isAnimated: !1,
                            isVisible: !0,
                            rootElement: "body",
                        },
                        Cn = {
                            className: "string",
                            clickCallback: "(function|null)",
                            isAnimated: "boolean",
                            isVisible: "boolean",
                            rootElement: "(element|string)",
                        };
                    class Tn extends V {
                        constructor(t) {
                            super(),
                                (this._config = this._getConfig(t)),
                                (this._isAppended = !1),
                                (this._element = null);
                        }
                        static get Default() {
                            return En;
                        }
                        static get DefaultType() {
                            return Cn;
                        }
                        static get NAME() {
                            return wn;
                        }
                        show(t) {
                            if (!this._config.isVisible) return void _(t);
                            this._append();
                            const e = this._getElement();
                            this._config.isAnimated && h(e),
                                e.classList.add(kn),
                                this._emulateAnimation(() => {
                                    _(t);
                                });
                        }
                        hide(t) {
                            this._config.isVisible
                                ? (this._getElement().classList.remove(kn),
                                  this._emulateAnimation(() => {
                                      this.dispose(), _(t);
                                  }))
                                : _(t);
                        }
                        dispose() {
                            this._isAppended &&
                                (F.off(this._element, _n),
                                this._element.remove(),
                                (this._isAppended = !1));
                        }
                        _getElement() {
                            if (!this._element) {
                                const t = document.createElement("div");
                                (t.className = this._config.className),
                                    this._config.isAnimated &&
                                        t.classList.add(yn),
                                    (this._element = t);
                            }
                            return this._element;
                        }
                        _configAfterMerge(t) {
                            return (t.rootElement = b(t.rootElement)), t;
                        }
                        _append() {
                            if (this._isAppended) return;
                            const t = this._getElement();
                            this._config.rootElement.append(t),
                                F.on(t, _n, () => {
                                    _(this._config.clickCallback);
                                }),
                                (this._isAppended = !0);
                        }
                        _emulateAnimation(t) {
                            E(t, this._getElement(), this._config.isAnimated);
                        }
                    }
                    const An = "focustrap",
                        jn = ".bs.focustrap",
                        zn = `focusin${jn}`,
                        Sn = `keydown.tab${jn}`,
                        On = "Tab",
                        Dn = "forward",
                        Ln = "backward",
                        Nn = { autofocus: !0, trapElement: null },
                        Mn = { autofocus: "boolean", trapElement: "element" };
                    class Pn extends V {
                        constructor(t) {
                            super(),
                                (this._config = this._getConfig(t)),
                                (this._isActive = !1),
                                (this._lastTabNavDirection = null);
                        }
                        static get Default() {
                            return Nn;
                        }
                        static get DefaultType() {
                            return Mn;
                        }
                        static get NAME() {
                            return An;
                        }
                        activate() {
                            this._isActive ||
                                (this._config.autofocus &&
                                    this._config.trapElement.focus(),
                                F.off(document, jn),
                                F.on(document, zn, (t) =>
                                    this._handleFocusin(t)
                                ),
                                F.on(document, Sn, (t) =>
                                    this._handleKeydown(t)
                                ),
                                (this._isActive = !0));
                        }
                        deactivate() {
                            this._isActive &&
                                ((this._isActive = !1), F.off(document, jn));
                        }
                        _handleFocusin(t) {
                            const { trapElement: e } = this._config;
                            if (
                                t.target === document ||
                                t.target === e ||
                                e.contains(t.target)
                            )
                                return;
                            const r = J.focusableChildren(e);
                            0 === r.length
                                ? e.focus()
                                : this._lastTabNavDirection === Ln
                                ? r[r.length - 1].focus()
                                : r[0].focus();
                        }
                        _handleKeydown(t) {
                            t.key === On &&
                                (this._lastTabNavDirection = t.shiftKey
                                    ? Ln
                                    : Dn);
                        }
                    }
                    const In =
                            ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        $n = ".sticky-top",
                        Rn = "padding-right",
                        Bn = "margin-right";
                    class Hn {
                        constructor() {
                            this._element = document.body;
                        }
                        getWidth() {
                            const t = document.documentElement.clientWidth;
                            return Math.abs(window.innerWidth - t);
                        }
                        hide() {
                            const t = this.getWidth();
                            this._disableOverFlow(),
                                this._setElementAttributes(
                                    this._element,
                                    Rn,
                                    (e) => e + t
                                ),
                                this._setElementAttributes(
                                    In,
                                    Rn,
                                    (e) => e + t
                                ),
                                this._setElementAttributes(
                                    $n,
                                    Bn,
                                    (e) => e - t
                                );
                        }
                        reset() {
                            this._resetElementAttributes(
                                this._element,
                                "overflow"
                            ),
                                this._resetElementAttributes(this._element, Rn),
                                this._resetElementAttributes(In, Rn),
                                this._resetElementAttributes($n, Bn);
                        }
                        isOverflowing() {
                            return this.getWidth() > 0;
                        }
                        _disableOverFlow() {
                            this._saveInitialAttribute(
                                this._element,
                                "overflow"
                            ),
                                (this._element.style.overflow = "hidden");
                        }
                        _setElementAttributes(t, e, r) {
                            const o = this.getWidth(),
                                n = (t) => {
                                    if (
                                        t !== this._element &&
                                        window.innerWidth > t.clientWidth + o
                                    )
                                        return;
                                    this._saveInitialAttribute(t, e);
                                    const n = window
                                        .getComputedStyle(t)
                                        .getPropertyValue(e);
                                    t.style.setProperty(
                                        e,
                                        `${r(Number.parseFloat(n))}px`
                                    );
                                };
                            this._applyManipulationCallback(t, n);
                        }
                        _saveInitialAttribute(t, e) {
                            const r = t.style.getPropertyValue(e);
                            r && U.setDataAttribute(t, e, r);
                        }
                        _resetElementAttributes(t, e) {
                            const r = (t) => {
                                const r = U.getDataAttribute(t, e);
                                null !== r
                                    ? (U.removeDataAttribute(t, e),
                                      t.style.setProperty(e, r))
                                    : t.style.removeProperty(e);
                            };
                            this._applyManipulationCallback(t, r);
                        }
                        _applyManipulationCallback(t, e) {
                            if (p(t)) e(t);
                            else for (const r of J.find(t, this._element)) e(r);
                        }
                    }
                    const qn = "modal",
                        Fn = ".bs.modal",
                        Wn = "Escape",
                        Xn = `hide${Fn}`,
                        Gn = `hidePrevented${Fn}`,
                        Un = `hidden${Fn}`,
                        Vn = `show${Fn}`,
                        Yn = `shown${Fn}`,
                        Kn = `resize${Fn}`,
                        Qn = `click.dismiss${Fn}`,
                        Jn = `mousedown.dismiss${Fn}`,
                        Zn = `keydown.dismiss${Fn}`,
                        ti = `click${Fn}.data-api`,
                        ei = "modal-open",
                        ri = "fade",
                        oi = "show",
                        ni = "modal-static",
                        ii = ".modal.show",
                        ai = ".modal-dialog",
                        si = ".modal-body",
                        li = '[data-bs-toggle="modal"]',
                        di = { backdrop: !0, focus: !0, keyboard: !0 },
                        ci = {
                            backdrop: "(boolean|string)",
                            focus: "boolean",
                            keyboard: "boolean",
                        };
                    class pi extends K {
                        constructor(t, e) {
                            super(t, e),
                                (this._dialog = J.findOne(ai, this._element)),
                                (this._backdrop = this._initializeBackDrop()),
                                (this._focustrap = this._initializeFocusTrap()),
                                (this._isShown = !1),
                                (this._isTransitioning = !1),
                                (this._scrollBar = new Hn()),
                                this._addEventListeners();
                        }
                        static get Default() {
                            return di;
                        }
                        static get DefaultType() {
                            return ci;
                        }
                        static get NAME() {
                            return qn;
                        }
                        toggle(t) {
                            return this._isShown ? this.hide() : this.show(t);
                        }
                        show(t) {
                            this._isShown ||
                                this._isTransitioning ||
                                F.trigger(this._element, Vn, {
                                    relatedTarget: t,
                                }).defaultPrevented ||
                                ((this._isShown = !0),
                                (this._isTransitioning = !0),
                                this._scrollBar.hide(),
                                document.body.classList.add(ei),
                                this._adjustDialog(),
                                this._backdrop.show(() =>
                                    this._showElement(t)
                                ));
                        }
                        hide() {
                            this._isShown &&
                                !this._isTransitioning &&
                                (F.trigger(this._element, Xn)
                                    .defaultPrevented ||
                                    ((this._isShown = !1),
                                    (this._isTransitioning = !0),
                                    this._focustrap.deactivate(),
                                    this._element.classList.remove(oi),
                                    this._queueCallback(
                                        () => this._hideModal(),
                                        this._element,
                                        this._isAnimated()
                                    )));
                        }
                        dispose() {
                            F.off(window, Fn),
                                F.off(this._dialog, Fn),
                                this._backdrop.dispose(),
                                this._focustrap.deactivate(),
                                super.dispose();
                        }
                        handleUpdate() {
                            this._adjustDialog();
                        }
                        _initializeBackDrop() {
                            return new Tn({
                                isVisible: Boolean(this._config.backdrop),
                                isAnimated: this._isAnimated(),
                            });
                        }
                        _initializeFocusTrap() {
                            return new Pn({ trapElement: this._element });
                        }
                        _showElement(t) {
                            document.body.contains(this._element) ||
                                document.body.append(this._element),
                                (this._element.style.display = "block"),
                                this._element.removeAttribute("aria-hidden"),
                                this._element.setAttribute("aria-modal", !0),
                                this._element.setAttribute("role", "dialog"),
                                (this._element.scrollTop = 0);
                            const e = J.findOne(si, this._dialog);
                            e && (e.scrollTop = 0),
                                h(this._element),
                                this._element.classList.add(oi);
                            const r = () => {
                                this._config.focus &&
                                    this._focustrap.activate(),
                                    (this._isTransitioning = !1),
                                    F.trigger(this._element, Yn, {
                                        relatedTarget: t,
                                    });
                            };
                            this._queueCallback(
                                r,
                                this._dialog,
                                this._isAnimated()
                            );
                        }
                        _addEventListeners() {
                            F.on(this._element, Zn, (t) => {
                                t.key === Wn &&
                                    (this._config.keyboard
                                        ? this.hide()
                                        : this._triggerBackdropTransition());
                            }),
                                F.on(window, Kn, () => {
                                    this._isShown &&
                                        !this._isTransitioning &&
                                        this._adjustDialog();
                                }),
                                F.on(this._element, Jn, (t) => {
                                    F.one(this._element, Qn, (e) => {
                                        this._element === t.target &&
                                            this._element === e.target &&
                                            ("static" !== this._config.backdrop
                                                ? this._config.backdrop &&
                                                  this.hide()
                                                : this._triggerBackdropTransition());
                                    });
                                });
                        }
                        _hideModal() {
                            (this._element.style.display = "none"),
                                this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                (this._isTransitioning = !1),
                                this._backdrop.hide(() => {
                                    document.body.classList.remove(ei),
                                        this._resetAdjustments(),
                                        this._scrollBar.reset(),
                                        F.trigger(this._element, Un);
                                });
                        }
                        _isAnimated() {
                            return this._element.classList.contains(ri);
                        }
                        _triggerBackdropTransition() {
                            if (F.trigger(this._element, Gn).defaultPrevented)
                                return;
                            const t =
                                    this._element.scrollHeight >
                                    document.documentElement.clientHeight,
                                e = this._element.style.overflowY;
                            "hidden" === e ||
                                this._element.classList.contains(ni) ||
                                (t ||
                                    (this._element.style.overflowY = "hidden"),
                                this._element.classList.add(ni),
                                this._queueCallback(() => {
                                    this._element.classList.remove(ni),
                                        this._queueCallback(() => {
                                            this._element.style.overflowY = e;
                                        }, this._dialog);
                                }, this._dialog),
                                this._element.focus());
                        }
                        _adjustDialog() {
                            const t =
                                    this._element.scrollHeight >
                                    document.documentElement.clientHeight,
                                e = this._scrollBar.getWidth(),
                                r = e > 0;
                            if (r && !t) {
                                const t = y() ? "paddingLeft" : "paddingRight";
                                this._element.style[t] = `${e}px`;
                            }
                            if (!r && t) {
                                const t = y() ? "paddingRight" : "paddingLeft";
                                this._element.style[t] = `${e}px`;
                            }
                        }
                        _resetAdjustments() {
                            (this._element.style.paddingLeft = ""),
                                (this._element.style.paddingRight = "");
                        }
                        static jQueryInterface(t, e) {
                            return this.each(function () {
                                const r = pi.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === r[t])
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    r[t](e);
                                }
                            });
                        }
                    }
                    F.on(document, ti, li, function (t) {
                        const e = J.getElementFromSelector(this);
                        ["A", "AREA"].includes(this.tagName) &&
                            t.preventDefault(),
                            F.one(e, Vn, (t) => {
                                t.defaultPrevented ||
                                    F.one(e, Un, () => {
                                        m(this) && this.focus();
                                    });
                            });
                        const r = J.findOne(ii);
                        r && pi.getInstance(r).hide(),
                            pi.getOrCreateInstance(e).toggle(this);
                    }),
                        Z(pi),
                        k(pi);
                    const bi = "offcanvas",
                        mi = ".bs.offcanvas",
                        gi = ".data-api",
                        fi = `load${mi}${gi}`,
                        ui = "Escape",
                        hi = "show",
                        vi = "showing",
                        xi = "hiding",
                        wi = "offcanvas-backdrop",
                        yi = ".offcanvas.show",
                        ki = `show${mi}`,
                        _i = `shown${mi}`,
                        Ei = `hide${mi}`,
                        Ci = `hidePrevented${mi}`,
                        Ti = `hidden${mi}`,
                        Ai = `resize${mi}`,
                        ji = `click${mi}${gi}`,
                        zi = `keydown.dismiss${mi}`,
                        Si = '[data-bs-toggle="offcanvas"]',
                        Oi = { backdrop: !0, keyboard: !0, scroll: !1 },
                        Di = {
                            backdrop: "(boolean|string)",
                            keyboard: "boolean",
                            scroll: "boolean",
                        };
                    class Li extends K {
                        constructor(t, e) {
                            super(t, e),
                                (this._isShown = !1),
                                (this._backdrop = this._initializeBackDrop()),
                                (this._focustrap = this._initializeFocusTrap()),
                                this._addEventListeners();
                        }
                        static get Default() {
                            return Oi;
                        }
                        static get DefaultType() {
                            return Di;
                        }
                        static get NAME() {
                            return bi;
                        }
                        toggle(t) {
                            return this._isShown ? this.hide() : this.show(t);
                        }
                        show(t) {
                            if (this._isShown) return;
                            if (
                                F.trigger(this._element, ki, {
                                    relatedTarget: t,
                                }).defaultPrevented
                            )
                                return;
                            (this._isShown = !0),
                                this._backdrop.show(),
                                this._config.scroll || new Hn().hide(),
                                this._element.setAttribute("aria-modal", !0),
                                this._element.setAttribute("role", "dialog"),
                                this._element.classList.add(vi);
                            const e = () => {
                                (this._config.scroll &&
                                    !this._config.backdrop) ||
                                    this._focustrap.activate(),
                                    this._element.classList.add(hi),
                                    this._element.classList.remove(vi),
                                    F.trigger(this._element, _i, {
                                        relatedTarget: t,
                                    });
                            };
                            this._queueCallback(e, this._element, !0);
                        }
                        hide() {
                            if (!this._isShown) return;
                            if (F.trigger(this._element, Ei).defaultPrevented)
                                return;
                            this._focustrap.deactivate(),
                                this._element.blur(),
                                (this._isShown = !1),
                                this._element.classList.add(xi),
                                this._backdrop.hide();
                            const t = () => {
                                this._element.classList.remove(hi, xi),
                                    this._element.removeAttribute("aria-modal"),
                                    this._element.removeAttribute("role"),
                                    this._config.scroll || new Hn().reset(),
                                    F.trigger(this._element, Ti);
                            };
                            this._queueCallback(t, this._element, !0);
                        }
                        dispose() {
                            this._backdrop.dispose(),
                                this._focustrap.deactivate(),
                                super.dispose();
                        }
                        _initializeBackDrop() {
                            const t = () => {
                                    "static" !== this._config.backdrop
                                        ? this.hide()
                                        : F.trigger(this._element, Ci);
                                },
                                e = Boolean(this._config.backdrop);
                            return new Tn({
                                className: wi,
                                isVisible: e,
                                isAnimated: !0,
                                rootElement: this._element.parentNode,
                                clickCallback: e ? t : null,
                            });
                        }
                        _initializeFocusTrap() {
                            return new Pn({ trapElement: this._element });
                        }
                        _addEventListeners() {
                            F.on(this._element, zi, (t) => {
                                t.key === ui &&
                                    (this._config.keyboard
                                        ? this.hide()
                                        : F.trigger(this._element, Ci));
                            });
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = Li.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (
                                        void 0 === e[t] ||
                                        t.startsWith("_") ||
                                        "constructor" === t
                                    )
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    e[t](this);
                                }
                            });
                        }
                    }
                    F.on(document, ji, Si, function (t) {
                        const e = J.getElementFromSelector(this);
                        if (
                            (["A", "AREA"].includes(this.tagName) &&
                                t.preventDefault(),
                            g(this))
                        )
                            return;
                        F.one(e, Ti, () => {
                            m(this) && this.focus();
                        });
                        const r = J.findOne(yi);
                        r && r !== e && Li.getInstance(r).hide(),
                            Li.getOrCreateInstance(e).toggle(this);
                    }),
                        F.on(window, fi, () => {
                            for (const t of J.find(yi))
                                Li.getOrCreateInstance(t).show();
                        }),
                        F.on(window, Ai, () => {
                            for (const t of J.find(
                                "[aria-modal][class*=show][class*=offcanvas-]"
                            ))
                                "fixed" !== getComputedStyle(t).position &&
                                    Li.getOrCreateInstance(t).hide();
                        }),
                        Z(Li),
                        k(Li);
                    const Ni = {
                            "*": [
                                "class",
                                "dir",
                                "id",
                                "lang",
                                "role",
                                /^aria-[\w-]*$/i,
                            ],
                            a: ["target", "href", "title", "rel"],
                            area: [],
                            b: [],
                            br: [],
                            col: [],
                            code: [],
                            div: [],
                            em: [],
                            hr: [],
                            h1: [],
                            h2: [],
                            h3: [],
                            h4: [],
                            h5: [],
                            h6: [],
                            i: [],
                            img: [
                                "src",
                                "srcset",
                                "alt",
                                "title",
                                "width",
                                "height",
                            ],
                            li: [],
                            ol: [],
                            p: [],
                            pre: [],
                            s: [],
                            small: [],
                            span: [],
                            sub: [],
                            sup: [],
                            strong: [],
                            u: [],
                            ul: [],
                        },
                        Mi = new Set([
                            "background",
                            "cite",
                            "href",
                            "itemtype",
                            "longdesc",
                            "poster",
                            "src",
                            "xlink:href",
                        ]),
                        Pi =
                            /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
                        Ii = (t, e) => {
                            const r = t.nodeName.toLowerCase();
                            return e.includes(r)
                                ? !Mi.has(r) || Boolean(Pi.test(t.nodeValue))
                                : e
                                      .filter((t) => t instanceof RegExp)
                                      .some((t) => t.test(r));
                        };
                    function $i(t, e, r) {
                        if (!t.length) return t;
                        if (r && "function" == typeof r) return r(t);
                        const o = new window.DOMParser().parseFromString(
                                t,
                                "text/html"
                            ),
                            n = [].concat(...o.body.querySelectorAll("*"));
                        for (const t of n) {
                            const r = t.nodeName.toLowerCase();
                            if (!Object.keys(e).includes(r)) {
                                t.remove();
                                continue;
                            }
                            const o = [].concat(...t.attributes),
                                n = [].concat(e["*"] || [], e[r] || []);
                            for (const e of o)
                                Ii(e, n) || t.removeAttribute(e.nodeName);
                        }
                        return o.body.innerHTML;
                    }
                    const Ri = "TemplateFactory",
                        Bi = {
                            allowList: Ni,
                            content: {},
                            extraClass: "",
                            html: !1,
                            sanitize: !0,
                            sanitizeFn: null,
                            template: "<div></div>",
                        },
                        Hi = {
                            allowList: "object",
                            content: "object",
                            extraClass: "(string|function)",
                            html: "boolean",
                            sanitize: "boolean",
                            sanitizeFn: "(null|function)",
                            template: "string",
                        },
                        qi = {
                            entry: "(string|element|function|null)",
                            selector: "(string|element)",
                        };
                    class Fi extends V {
                        constructor(t) {
                            super(), (this._config = this._getConfig(t));
                        }
                        static get Default() {
                            return Bi;
                        }
                        static get DefaultType() {
                            return Hi;
                        }
                        static get NAME() {
                            return Ri;
                        }
                        getContent() {
                            return Object.values(this._config.content)
                                .map((t) => this._resolvePossibleFunction(t))
                                .filter(Boolean);
                        }
                        hasContent() {
                            return this.getContent().length > 0;
                        }
                        changeContent(t) {
                            return (
                                this._checkContent(t),
                                (this._config.content = {
                                    ...this._config.content,
                                    ...t,
                                }),
                                this
                            );
                        }
                        toHtml() {
                            const t = document.createElement("div");
                            t.innerHTML = this._maybeSanitize(
                                this._config.template
                            );
                            for (const [e, r] of Object.entries(
                                this._config.content
                            ))
                                this._setContent(t, r, e);
                            const e = t.children[0],
                                r = this._resolvePossibleFunction(
                                    this._config.extraClass
                                );
                            return r && e.classList.add(...r.split(" ")), e;
                        }
                        _typeCheckConfig(t) {
                            super._typeCheckConfig(t),
                                this._checkContent(t.content);
                        }
                        _checkContent(t) {
                            for (const [e, r] of Object.entries(t))
                                super._typeCheckConfig(
                                    { selector: e, entry: r },
                                    qi
                                );
                        }
                        _setContent(t, e, r) {
                            const o = J.findOne(r, t);
                            o &&
                                ((e = this._resolvePossibleFunction(e))
                                    ? p(e)
                                        ? this._putElementInTemplate(b(e), o)
                                        : this._config.html
                                        ? (o.innerHTML = this._maybeSanitize(e))
                                        : (o.textContent = e)
                                    : o.remove());
                        }
                        _maybeSanitize(t) {
                            return this._config.sanitize
                                ? $i(
                                      t,
                                      this._config.allowList,
                                      this._config.sanitizeFn
                                  )
                                : t;
                        }
                        _resolvePossibleFunction(t) {
                            return _(t, [this]);
                        }
                        _putElementInTemplate(t, e) {
                            if (this._config.html)
                                return (e.innerHTML = ""), void e.append(t);
                            e.textContent = t.textContent;
                        }
                    }
                    const Wi = "tooltip",
                        Xi = new Set(["sanitize", "allowList", "sanitizeFn"]),
                        Gi = "fade",
                        Ui = "show",
                        Vi = ".tooltip-inner",
                        Yi = ".modal",
                        Ki = "hide.bs.modal",
                        Qi = "hover",
                        Ji = "focus",
                        Zi = "click",
                        ta = "manual",
                        ea = "hide",
                        ra = "hidden",
                        oa = "show",
                        na = "shown",
                        ia = "inserted",
                        aa = "click",
                        sa = "focusin",
                        la = "focusout",
                        da = "mouseenter",
                        ca = "mouseleave",
                        pa = {
                            AUTO: "auto",
                            TOP: "top",
                            RIGHT: y() ? "left" : "right",
                            BOTTOM: "bottom",
                            LEFT: y() ? "right" : "left",
                        },
                        ba = {
                            allowList: Ni,
                            animation: !0,
                            boundary: "clippingParents",
                            container: !1,
                            customClass: "",
                            delay: 0,
                            fallbackPlacements: [
                                "top",
                                "right",
                                "bottom",
                                "left",
                            ],
                            html: !1,
                            offset: [0, 6],
                            placement: "top",
                            popperConfig: null,
                            sanitize: !0,
                            sanitizeFn: null,
                            selector: !1,
                            template:
                                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                            title: "",
                            trigger: "hover focus",
                        },
                        ma = {
                            allowList: "object",
                            animation: "boolean",
                            boundary: "(string|element)",
                            container: "(string|element|boolean)",
                            customClass: "(string|function)",
                            delay: "(number|object)",
                            fallbackPlacements: "array",
                            html: "boolean",
                            offset: "(array|string|function)",
                            placement: "(string|function)",
                            popperConfig: "(null|object|function)",
                            sanitize: "boolean",
                            sanitizeFn: "(null|function)",
                            selector: "(string|boolean)",
                            template: "string",
                            title: "(string|element|function)",
                            trigger: "string",
                        };
                    class ga extends K {
                        constructor(t, e) {
                            if (void 0 === No)
                                throw new TypeError(
                                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                                );
                            super(t, e),
                                (this._isEnabled = !0),
                                (this._timeout = 0),
                                (this._isHovered = null),
                                (this._activeTrigger = {}),
                                (this._popper = null),
                                (this._templateFactory = null),
                                (this._newContent = null),
                                (this.tip = null),
                                this._setListeners(),
                                this._config.selector || this._fixTitle();
                        }
                        static get Default() {
                            return ba;
                        }
                        static get DefaultType() {
                            return ma;
                        }
                        static get NAME() {
                            return Wi;
                        }
                        enable() {
                            this._isEnabled = !0;
                        }
                        disable() {
                            this._isEnabled = !1;
                        }
                        toggleEnabled() {
                            this._isEnabled = !this._isEnabled;
                        }
                        toggle() {
                            this._isEnabled &&
                                ((this._activeTrigger.click =
                                    !this._activeTrigger.click),
                                this._isShown()
                                    ? this._leave()
                                    : this._enter());
                        }
                        dispose() {
                            clearTimeout(this._timeout),
                                F.off(
                                    this._element.closest(Yi),
                                    Ki,
                                    this._hideModalHandler
                                ),
                                this._element.getAttribute(
                                    "data-bs-original-title"
                                ) &&
                                    this._element.setAttribute(
                                        "title",
                                        this._element.getAttribute(
                                            "data-bs-original-title"
                                        )
                                    ),
                                this._disposePopper(),
                                super.dispose();
                        }
                        show() {
                            if ("none" === this._element.style.display)
                                throw new Error(
                                    "Please use show on visible elements"
                                );
                            if (!this._isWithContent() || !this._isEnabled)
                                return;
                            const t = F.trigger(
                                    this._element,
                                    this.constructor.eventName(oa)
                                ),
                                e = (
                                    f(this._element) ||
                                    this._element.ownerDocument.documentElement
                                ).contains(this._element);
                            if (t.defaultPrevented || !e) return;
                            this._disposePopper();
                            const r = this._getTipElement();
                            this._element.setAttribute(
                                "aria-describedby",
                                r.getAttribute("id")
                            );
                            const { container: o } = this._config;
                            if (
                                (this._element.ownerDocument.documentElement.contains(
                                    this.tip
                                ) ||
                                    (o.append(r),
                                    F.trigger(
                                        this._element,
                                        this.constructor.eventName(ia)
                                    )),
                                (this._popper = this._createPopper(r)),
                                r.classList.add(Ui),
                                "ontouchstart" in document.documentElement)
                            )
                                for (const t of [].concat(
                                    ...document.body.children
                                ))
                                    F.on(t, "mouseover", u);
                            const n = () => {
                                F.trigger(
                                    this._element,
                                    this.constructor.eventName(na)
                                ),
                                    !1 === this._isHovered && this._leave(),
                                    (this._isHovered = !1);
                            };
                            this._queueCallback(
                                n,
                                this.tip,
                                this._isAnimated()
                            );
                        }
                        hide() {
                            if (!this._isShown()) return;
                            if (
                                F.trigger(
                                    this._element,
                                    this.constructor.eventName(ea)
                                ).defaultPrevented
                            )
                                return;
                            if (
                                (this._getTipElement().classList.remove(Ui),
                                "ontouchstart" in document.documentElement)
                            )
                                for (const t of [].concat(
                                    ...document.body.children
                                ))
                                    F.off(t, "mouseover", u);
                            (this._activeTrigger[Zi] = !1),
                                (this._activeTrigger[Ji] = !1),
                                (this._activeTrigger[Qi] = !1),
                                (this._isHovered = null);
                            const t = () => {
                                this._isWithActiveTrigger() ||
                                    (this._isHovered || this._disposePopper(),
                                    this._element.removeAttribute(
                                        "aria-describedby"
                                    ),
                                    F.trigger(
                                        this._element,
                                        this.constructor.eventName(ra)
                                    ));
                            };
                            this._queueCallback(
                                t,
                                this.tip,
                                this._isAnimated()
                            );
                        }
                        update() {
                            this._popper && this._popper.update();
                        }
                        _isWithContent() {
                            return Boolean(this._getTitle());
                        }
                        _getTipElement() {
                            return (
                                this.tip ||
                                    (this.tip = this._createTipElement(
                                        this._newContent ||
                                            this._getContentForTemplate()
                                    )),
                                this.tip
                            );
                        }
                        _createTipElement(t) {
                            const e = this._getTemplateFactory(t).toHtml();
                            if (!e) return null;
                            e.classList.remove(Gi, Ui),
                                e.classList.add(
                                    `bs-${this.constructor.NAME}-auto`
                                );
                            const r = l(this.constructor.NAME).toString();
                            return (
                                e.setAttribute("id", r),
                                this._isAnimated() && e.classList.add(Gi),
                                e
                            );
                        }
                        setContent(t) {
                            (this._newContent = t),
                                this._isShown() &&
                                    (this._disposePopper(), this.show());
                        }
                        _getTemplateFactory(t) {
                            return (
                                this._templateFactory
                                    ? this._templateFactory.changeContent(t)
                                    : (this._templateFactory = new Fi({
                                          ...this._config,
                                          content: t,
                                          extraClass:
                                              this._resolvePossibleFunction(
                                                  this._config.customClass
                                              ),
                                      })),
                                this._templateFactory
                            );
                        }
                        _getContentForTemplate() {
                            return { [Vi]: this._getTitle() };
                        }
                        _getTitle() {
                            return (
                                this._resolvePossibleFunction(
                                    this._config.title
                                ) ||
                                this._element.getAttribute(
                                    "data-bs-original-title"
                                )
                            );
                        }
                        _initializeOnDelegatedTarget(t) {
                            return this.constructor.getOrCreateInstance(
                                t.delegateTarget,
                                this._getDelegateConfig()
                            );
                        }
                        _isAnimated() {
                            return (
                                this._config.animation ||
                                (this.tip && this.tip.classList.contains(Gi))
                            );
                        }
                        _isShown() {
                            return this.tip && this.tip.classList.contains(Ui);
                        }
                        _createPopper(t) {
                            const e = _(this._config.placement, [
                                    this,
                                    t,
                                    this._element,
                                ]),
                                r = pa[e.toUpperCase()];
                            return Lo(
                                this._element,
                                t,
                                this._getPopperConfig(r)
                            );
                        }
                        _getOffset() {
                            const { offset: t } = this._config;
                            return "string" == typeof t
                                ? t
                                      .split(",")
                                      .map((t) => Number.parseInt(t, 10))
                                : "function" == typeof t
                                ? (e) => t(e, this._element)
                                : t;
                        }
                        _resolvePossibleFunction(t) {
                            return _(t, [this._element]);
                        }
                        _getPopperConfig(t) {
                            const e = {
                                placement: t,
                                modifiers: [
                                    {
                                        name: "flip",
                                        options: {
                                            fallbackPlacements:
                                                this._config.fallbackPlacements,
                                        },
                                    },
                                    {
                                        name: "offset",
                                        options: { offset: this._getOffset() },
                                    },
                                    {
                                        name: "preventOverflow",
                                        options: {
                                            boundary: this._config.boundary,
                                        },
                                    },
                                    {
                                        name: "arrow",
                                        options: {
                                            element: `.${this.constructor.NAME}-arrow`,
                                        },
                                    },
                                    {
                                        name: "preSetPlacement",
                                        enabled: !0,
                                        phase: "beforeMain",
                                        fn: (t) => {
                                            this._getTipElement().setAttribute(
                                                "data-popper-placement",
                                                t.state.placement
                                            );
                                        },
                                    },
                                ],
                            };
                            return {
                                ...e,
                                ..._(this._config.popperConfig, [e]),
                            };
                        }
                        _setListeners() {
                            const t = this._config.trigger.split(" ");
                            for (const e of t)
                                if ("click" === e)
                                    F.on(
                                        this._element,
                                        this.constructor.eventName(aa),
                                        this._config.selector,
                                        (t) => {
                                            this._initializeOnDelegatedTarget(
                                                t
                                            ).toggle();
                                        }
                                    );
                                else if (e !== ta) {
                                    const t =
                                            e === Qi
                                                ? this.constructor.eventName(da)
                                                : this.constructor.eventName(
                                                      sa
                                                  ),
                                        r =
                                            e === Qi
                                                ? this.constructor.eventName(ca)
                                                : this.constructor.eventName(
                                                      la
                                                  );
                                    F.on(
                                        this._element,
                                        t,
                                        this._config.selector,
                                        (t) => {
                                            const e =
                                                this._initializeOnDelegatedTarget(
                                                    t
                                                );
                                            (e._activeTrigger[
                                                "focusin" === t.type ? Ji : Qi
                                            ] = !0),
                                                e._enter();
                                        }
                                    ),
                                        F.on(
                                            this._element,
                                            r,
                                            this._config.selector,
                                            (t) => {
                                                const e =
                                                    this._initializeOnDelegatedTarget(
                                                        t
                                                    );
                                                (e._activeTrigger[
                                                    "focusout" === t.type
                                                        ? Ji
                                                        : Qi
                                                ] = e._element.contains(
                                                    t.relatedTarget
                                                )),
                                                    e._leave();
                                            }
                                        );
                                }
                            (this._hideModalHandler = () => {
                                this._element && this.hide();
                            }),
                                F.on(
                                    this._element.closest(Yi),
                                    Ki,
                                    this._hideModalHandler
                                );
                        }
                        _fixTitle() {
                            const t = this._element.getAttribute("title");
                            t &&
                                (this._element.getAttribute("aria-label") ||
                                    this._element.textContent.trim() ||
                                    this._element.setAttribute("aria-label", t),
                                this._element.setAttribute(
                                    "data-bs-original-title",
                                    t
                                ),
                                this._element.removeAttribute("title"));
                        }
                        _enter() {
                            this._isShown() || this._isHovered
                                ? (this._isHovered = !0)
                                : ((this._isHovered = !0),
                                  this._setTimeout(() => {
                                      this._isHovered && this.show();
                                  }, this._config.delay.show));
                        }
                        _leave() {
                            this._isWithActiveTrigger() ||
                                ((this._isHovered = !1),
                                this._setTimeout(() => {
                                    this._isHovered || this.hide();
                                }, this._config.delay.hide));
                        }
                        _setTimeout(t, e) {
                            clearTimeout(this._timeout),
                                (this._timeout = setTimeout(t, e));
                        }
                        _isWithActiveTrigger() {
                            return Object.values(this._activeTrigger).includes(
                                !0
                            );
                        }
                        _getConfig(t) {
                            const e = U.getDataAttributes(this._element);
                            for (const t of Object.keys(e))
                                Xi.has(t) && delete e[t];
                            return (
                                (t = {
                                    ...e,
                                    ...("object" == typeof t && t ? t : {}),
                                }),
                                (t = this._mergeConfigObj(t)),
                                (t = this._configAfterMerge(t)),
                                this._typeCheckConfig(t),
                                t
                            );
                        }
                        _configAfterMerge(t) {
                            return (
                                (t.container =
                                    !1 === t.container
                                        ? document.body
                                        : b(t.container)),
                                "number" == typeof t.delay &&
                                    (t.delay = {
                                        show: t.delay,
                                        hide: t.delay,
                                    }),
                                "number" == typeof t.title &&
                                    (t.title = t.title.toString()),
                                "number" == typeof t.content &&
                                    (t.content = t.content.toString()),
                                t
                            );
                        }
                        _getDelegateConfig() {
                            const t = {};
                            for (const [e, r] of Object.entries(this._config))
                                this.constructor.Default[e] !== r && (t[e] = r);
                            return (t.selector = !1), (t.trigger = "manual"), t;
                        }
                        _disposePopper() {
                            this._popper &&
                                (this._popper.destroy(), (this._popper = null)),
                                this.tip &&
                                    (this.tip.remove(), (this.tip = null));
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = ga.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t])
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    e[t]();
                                }
                            });
                        }
                    }
                    k(ga);
                    const fa = "popover",
                        ua = ".popover-header",
                        ha = ".popover-body",
                        va = {
                            ...ga.Default,
                            content: "",
                            offset: [0, 8],
                            placement: "right",
                            template:
                                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                            trigger: "click",
                        },
                        xa = {
                            ...ga.DefaultType,
                            content: "(null|string|element|function)",
                        };
                    class wa extends ga {
                        static get Default() {
                            return va;
                        }
                        static get DefaultType() {
                            return xa;
                        }
                        static get NAME() {
                            return fa;
                        }
                        _isWithContent() {
                            return this._getTitle() || this._getContent();
                        }
                        _getContentForTemplate() {
                            return {
                                [ua]: this._getTitle(),
                                [ha]: this._getContent(),
                            };
                        }
                        _getContent() {
                            return this._resolvePossibleFunction(
                                this._config.content
                            );
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = wa.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t])
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    e[t]();
                                }
                            });
                        }
                    }
                    k(wa);
                    const ya = "scrollspy",
                        ka = ".bs.scrollspy",
                        _a = `activate${ka}`,
                        Ea = `click${ka}`,
                        Ca = `load${ka}.data-api`,
                        Ta = "dropdown-item",
                        Aa = "active",
                        ja = '[data-bs-spy="scroll"]',
                        za = "[href]",
                        Sa = ".nav, .list-group",
                        Oa = ".nav-link",
                        Da = `${Oa}, .nav-item > ${Oa}, .list-group-item`,
                        La = ".dropdown",
                        Na = ".dropdown-toggle",
                        Ma = {
                            offset: null,
                            rootMargin: "0px 0px -25%",
                            smoothScroll: !1,
                            target: null,
                            threshold: [0.1, 0.5, 1],
                        },
                        Pa = {
                            offset: "(number|null)",
                            rootMargin: "string",
                            smoothScroll: "boolean",
                            target: "element",
                            threshold: "array",
                        };
                    class Ia extends K {
                        constructor(t, e) {
                            super(t, e),
                                (this._targetLinks = new Map()),
                                (this._observableSections = new Map()),
                                (this._rootElement =
                                    "visible" ===
                                    getComputedStyle(this._element).overflowY
                                        ? null
                                        : this._element),
                                (this._activeTarget = null),
                                (this._observer = null),
                                (this._previousScrollData = {
                                    visibleEntryTop: 0,
                                    parentScrollTop: 0,
                                }),
                                this.refresh();
                        }
                        static get Default() {
                            return Ma;
                        }
                        static get DefaultType() {
                            return Pa;
                        }
                        static get NAME() {
                            return ya;
                        }
                        refresh() {
                            this._initializeTargetsAndObservables(),
                                this._maybeEnableSmoothScroll(),
                                this._observer
                                    ? this._observer.disconnect()
                                    : (this._observer = this._getNewObserver());
                            for (const t of this._observableSections.values())
                                this._observer.observe(t);
                        }
                        dispose() {
                            this._observer.disconnect(), super.dispose();
                        }
                        _configAfterMerge(t) {
                            return (
                                (t.target = b(t.target) || document.body),
                                (t.rootMargin = t.offset
                                    ? `${t.offset}px 0px -30%`
                                    : t.rootMargin),
                                "string" == typeof t.threshold &&
                                    (t.threshold = t.threshold
                                        .split(",")
                                        .map((t) => Number.parseFloat(t))),
                                t
                            );
                        }
                        _maybeEnableSmoothScroll() {
                            this._config.smoothScroll &&
                                (F.off(this._config.target, Ea),
                                F.on(this._config.target, Ea, za, (t) => {
                                    const e = this._observableSections.get(
                                        t.target.hash
                                    );
                                    if (e) {
                                        t.preventDefault();
                                        const r = this._rootElement || window,
                                            o =
                                                e.offsetTop -
                                                this._element.offsetTop;
                                        if (r.scrollTo)
                                            return void r.scrollTo({
                                                top: o,
                                                behavior: "smooth",
                                            });
                                        r.scrollTop = o;
                                    }
                                }));
                        }
                        _getNewObserver() {
                            const t = {
                                root: this._rootElement,
                                threshold: this._config.threshold,
                                rootMargin: this._config.rootMargin,
                            };
                            return new IntersectionObserver(
                                (t) => this._observerCallback(t),
                                t
                            );
                        }
                        _observerCallback(t) {
                            const e = (t) =>
                                    this._targetLinks.get(`#${t.target.id}`),
                                r = (t) => {
                                    (this._previousScrollData.visibleEntryTop =
                                        t.target.offsetTop),
                                        this._process(e(t));
                                },
                                o = (
                                    this._rootElement ||
                                    document.documentElement
                                ).scrollTop,
                                n =
                                    o >=
                                    this._previousScrollData.parentScrollTop;
                            this._previousScrollData.parentScrollTop = o;
                            for (const i of t) {
                                if (!i.isIntersecting) {
                                    (this._activeTarget = null),
                                        this._clearActiveClass(e(i));
                                    continue;
                                }
                                const t =
                                    i.target.offsetTop >=
                                    this._previousScrollData.visibleEntryTop;
                                if (n && t) {
                                    if ((r(i), !o)) return;
                                } else n || t || r(i);
                            }
                        }
                        _initializeTargetsAndObservables() {
                            (this._targetLinks = new Map()),
                                (this._observableSections = new Map());
                            const t = J.find(za, this._config.target);
                            for (const e of t) {
                                if (!e.hash || g(e)) continue;
                                const t = J.findOne(
                                    decodeURI(e.hash),
                                    this._element
                                );
                                m(t) &&
                                    (this._targetLinks.set(
                                        decodeURI(e.hash),
                                        e
                                    ),
                                    this._observableSections.set(e.hash, t));
                            }
                        }
                        _process(t) {
                            this._activeTarget !== t &&
                                (this._clearActiveClass(this._config.target),
                                (this._activeTarget = t),
                                t.classList.add(Aa),
                                this._activateParents(t),
                                F.trigger(this._element, _a, {
                                    relatedTarget: t,
                                }));
                        }
                        _activateParents(t) {
                            if (t.classList.contains(Ta))
                                J.findOne(Na, t.closest(La)).classList.add(Aa);
                            else
                                for (const e of J.parents(t, Sa))
                                    for (const t of J.prev(e, Da))
                                        t.classList.add(Aa);
                        }
                        _clearActiveClass(t) {
                            t.classList.remove(Aa);
                            const e = J.find(`${za}.${Aa}`, t);
                            for (const t of e) t.classList.remove(Aa);
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = Ia.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (
                                        void 0 === e[t] ||
                                        t.startsWith("_") ||
                                        "constructor" === t
                                    )
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    e[t]();
                                }
                            });
                        }
                    }
                    F.on(window, Ca, () => {
                        for (const t of J.find(ja)) Ia.getOrCreateInstance(t);
                    }),
                        k(Ia);
                    const $a = "tab",
                        Ra = ".bs.tab",
                        Ba = `hide${Ra}`,
                        Ha = `hidden${Ra}`,
                        qa = `show${Ra}`,
                        Fa = `shown${Ra}`,
                        Wa = `click${Ra}`,
                        Xa = `keydown${Ra}`,
                        Ga = `load${Ra}`,
                        Ua = "ArrowLeft",
                        Va = "ArrowRight",
                        Ya = "ArrowUp",
                        Ka = "ArrowDown",
                        Qa = "Home",
                        Ja = "End",
                        Za = "active",
                        ts = "fade",
                        es = "show",
                        rs = "dropdown",
                        os = ".dropdown-toggle",
                        ns = ".dropdown-menu",
                        is = `:not(${os})`,
                        as = '.list-group, .nav, [role="tablist"]',
                        ss = ".nav-item, .list-group-item",
                        ls =
                            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
                        ds = `.nav-link${is}, .list-group-item${is}, [role="tab"]${is}, ${ls}`,
                        cs = `.${Za}[data-bs-toggle="tab"], .${Za}[data-bs-toggle="pill"], .${Za}[data-bs-toggle="list"]`;
                    class ps extends K {
                        constructor(t) {
                            super(t),
                                (this._parent = this._element.closest(as)),
                                this._parent &&
                                    (this._setInitialAttributes(
                                        this._parent,
                                        this._getChildren()
                                    ),
                                    F.on(this._element, Xa, (t) =>
                                        this._keydown(t)
                                    ));
                        }
                        static get NAME() {
                            return $a;
                        }
                        show() {
                            const t = this._element;
                            if (this._elemIsActive(t)) return;
                            const e = this._getActiveElem(),
                                r = e
                                    ? F.trigger(e, Ba, { relatedTarget: t })
                                    : null;
                            F.trigger(t, qa, { relatedTarget: e })
                                .defaultPrevented ||
                                (r && r.defaultPrevented) ||
                                (this._deactivate(e, t), this._activate(t, e));
                        }
                        _activate(t, e) {
                            if (!t) return;
                            t.classList.add(Za),
                                this._activate(J.getElementFromSelector(t));
                            const r = () => {
                                "tab" === t.getAttribute("role")
                                    ? (t.removeAttribute("tabindex"),
                                      t.setAttribute("aria-selected", !0),
                                      this._toggleDropDown(t, !0),
                                      F.trigger(t, Fa, { relatedTarget: e }))
                                    : t.classList.add(es);
                            };
                            this._queueCallback(r, t, t.classList.contains(ts));
                        }
                        _deactivate(t, e) {
                            if (!t) return;
                            t.classList.remove(Za),
                                t.blur(),
                                this._deactivate(J.getElementFromSelector(t));
                            const r = () => {
                                "tab" === t.getAttribute("role")
                                    ? (t.setAttribute("aria-selected", !1),
                                      t.setAttribute("tabindex", "-1"),
                                      this._toggleDropDown(t, !1),
                                      F.trigger(t, Ha, { relatedTarget: e }))
                                    : t.classList.remove(es);
                            };
                            this._queueCallback(r, t, t.classList.contains(ts));
                        }
                        _keydown(t) {
                            if (![Ua, Va, Ya, Ka, Qa, Ja].includes(t.key))
                                return;
                            t.stopPropagation(), t.preventDefault();
                            const e = this._getChildren().filter((t) => !g(t));
                            let r;
                            if ([Qa, Ja].includes(t.key))
                                r = e[t.key === Qa ? 0 : e.length - 1];
                            else {
                                const o = [Va, Ka].includes(t.key);
                                r = C(e, t.target, o, !0);
                            }
                            r &&
                                (r.focus({ preventScroll: !0 }),
                                ps.getOrCreateInstance(r).show());
                        }
                        _getChildren() {
                            return J.find(ds, this._parent);
                        }
                        _getActiveElem() {
                            return (
                                this._getChildren().find((t) =>
                                    this._elemIsActive(t)
                                ) || null
                            );
                        }
                        _setInitialAttributes(t, e) {
                            this._setAttributeIfNotExists(t, "role", "tablist");
                            for (const t of e)
                                this._setInitialAttributesOnChild(t);
                        }
                        _setInitialAttributesOnChild(t) {
                            t = this._getInnerElement(t);
                            const e = this._elemIsActive(t),
                                r = this._getOuterElement(t);
                            t.setAttribute("aria-selected", e),
                                r !== t &&
                                    this._setAttributeIfNotExists(
                                        r,
                                        "role",
                                        "presentation"
                                    ),
                                e || t.setAttribute("tabindex", "-1"),
                                this._setAttributeIfNotExists(t, "role", "tab"),
                                this._setInitialAttributesOnTargetPanel(t);
                        }
                        _setInitialAttributesOnTargetPanel(t) {
                            const e = J.getElementFromSelector(t);
                            e &&
                                (this._setAttributeIfNotExists(
                                    e,
                                    "role",
                                    "tabpanel"
                                ),
                                t.id &&
                                    this._setAttributeIfNotExists(
                                        e,
                                        "aria-labelledby",
                                        `${t.id}`
                                    ));
                        }
                        _toggleDropDown(t, e) {
                            const r = this._getOuterElement(t);
                            if (!r.classList.contains(rs)) return;
                            const o = (t, o) => {
                                const n = J.findOne(t, r);
                                n && n.classList.toggle(o, e);
                            };
                            o(os, Za),
                                o(ns, es),
                                r.setAttribute("aria-expanded", e);
                        }
                        _setAttributeIfNotExists(t, e, r) {
                            t.hasAttribute(e) || t.setAttribute(e, r);
                        }
                        _elemIsActive(t) {
                            return t.classList.contains(Za);
                        }
                        _getInnerElement(t) {
                            return t.matches(ds) ? t : J.findOne(ds, t);
                        }
                        _getOuterElement(t) {
                            return t.closest(ss) || t;
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = ps.getOrCreateInstance(this);
                                if ("string" == typeof t) {
                                    if (
                                        void 0 === e[t] ||
                                        t.startsWith("_") ||
                                        "constructor" === t
                                    )
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    e[t]();
                                }
                            });
                        }
                    }
                    F.on(document, Wa, ls, function (t) {
                        ["A", "AREA"].includes(this.tagName) &&
                            t.preventDefault(),
                            g(this) || ps.getOrCreateInstance(this).show();
                    }),
                        F.on(window, Ga, () => {
                            for (const t of J.find(cs))
                                ps.getOrCreateInstance(t);
                        }),
                        k(ps);
                    const bs = "toast",
                        ms = ".bs.toast",
                        gs = `mouseover${ms}`,
                        fs = `mouseout${ms}`,
                        us = `focusin${ms}`,
                        hs = `focusout${ms}`,
                        vs = `hide${ms}`,
                        xs = `hidden${ms}`,
                        ws = `show${ms}`,
                        ys = `shown${ms}`,
                        ks = "fade",
                        _s = "hide",
                        Es = "show",
                        Cs = "showing",
                        Ts = {
                            animation: "boolean",
                            autohide: "boolean",
                            delay: "number",
                        },
                        As = { animation: !0, autohide: !0, delay: 5e3 };
                    class js extends K {
                        constructor(t, e) {
                            super(t, e),
                                (this._timeout = null),
                                (this._hasMouseInteraction = !1),
                                (this._hasKeyboardInteraction = !1),
                                this._setListeners();
                        }
                        static get Default() {
                            return As;
                        }
                        static get DefaultType() {
                            return Ts;
                        }
                        static get NAME() {
                            return bs;
                        }
                        show() {
                            if (F.trigger(this._element, ws).defaultPrevented)
                                return;
                            this._clearTimeout(),
                                this._config.animation &&
                                    this._element.classList.add(ks);
                            const t = () => {
                                this._element.classList.remove(Cs),
                                    F.trigger(this._element, ys),
                                    this._maybeScheduleHide();
                            };
                            this._element.classList.remove(_s),
                                h(this._element),
                                this._element.classList.add(Es, Cs),
                                this._queueCallback(
                                    t,
                                    this._element,
                                    this._config.animation
                                );
                        }
                        hide() {
                            if (!this.isShown()) return;
                            if (F.trigger(this._element, vs).defaultPrevented)
                                return;
                            const t = () => {
                                this._element.classList.add(_s),
                                    this._element.classList.remove(Cs, Es),
                                    F.trigger(this._element, xs);
                            };
                            this._element.classList.add(Cs),
                                this._queueCallback(
                                    t,
                                    this._element,
                                    this._config.animation
                                );
                        }
                        dispose() {
                            this._clearTimeout(),
                                this.isShown() &&
                                    this._element.classList.remove(Es),
                                super.dispose();
                        }
                        isShown() {
                            return this._element.classList.contains(Es);
                        }
                        _maybeScheduleHide() {
                            this._config.autohide &&
                                (this._hasMouseInteraction ||
                                    this._hasKeyboardInteraction ||
                                    (this._timeout = setTimeout(() => {
                                        this.hide();
                                    }, this._config.delay)));
                        }
                        _onInteraction(t, e) {
                            switch (t.type) {
                                case "mouseover":
                                case "mouseout":
                                    this._hasMouseInteraction = e;
                                    break;
                                case "focusin":
                                case "focusout":
                                    this._hasKeyboardInteraction = e;
                            }
                            if (e) return void this._clearTimeout();
                            const r = t.relatedTarget;
                            this._element === r ||
                                this._element.contains(r) ||
                                this._maybeScheduleHide();
                        }
                        _setListeners() {
                            F.on(this._element, gs, (t) =>
                                this._onInteraction(t, !0)
                            ),
                                F.on(this._element, fs, (t) =>
                                    this._onInteraction(t, !1)
                                ),
                                F.on(this._element, us, (t) =>
                                    this._onInteraction(t, !0)
                                ),
                                F.on(this._element, hs, (t) =>
                                    this._onInteraction(t, !1)
                                );
                        }
                        _clearTimeout() {
                            clearTimeout(this._timeout), (this._timeout = null);
                        }
                        static jQueryInterface(t) {
                            return this.each(function () {
                                const e = js.getOrCreateInstance(this, t);
                                if ("string" == typeof t) {
                                    if (void 0 === e[t])
                                        throw new TypeError(
                                            `No method named "${t}"`
                                        );
                                    e[t](this);
                                }
                            });
                        }
                    }
                    return (
                        Z(js),
                        k(js),
                        {
                            Alert: at,
                            Button: pt,
                            Carousel: ie,
                            Collapse: Ce,
                            Dropdown: xn,
                            Modal: pi,
                            Offcanvas: Li,
                            Popover: wa,
                            ScrollSpy: Ia,
                            Tab: ps,
                            Toast: js,
                            Tooltip: ga,
                        }
                    );
                })();
            },
            346: (t, e, r) => {
                "use strict";
                r.d(e, { Z: () => i });
                var o = r(645),
                    n = r.n(o)()(function (t) {
                        return t[1];
                    });
                n.push([
                    t.id,
                    "@charset \"UTF-8\";/*!\n * Bootstrap  v5.3.2 (https://getbootstrap.com/)\n * Copyright 2011-2023 The Bootstrap Authors\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root,[data-bs-theme=light]{--bs-blue:#0d6efd;--bs-indigo:#6610f2;--bs-purple:#6f42c1;--bs-pink:#d63384;--bs-red:#dc3545;--bs-orange:#fd7e14;--bs-yellow:#ffc107;--bs-green:#198754;--bs-teal:#20c997;--bs-cyan:#0dcaf0;--bs-black:#000;--bs-white:#fff;--bs-gray:#6c757d;--bs-gray-dark:#343a40;--bs-gray-100:#f8f9fa;--bs-gray-200:#e9ecef;--bs-gray-300:#dee2e6;--bs-gray-400:#ced4da;--bs-gray-500:#adb5bd;--bs-gray-600:#6c757d;--bs-gray-700:#495057;--bs-gray-800:#343a40;--bs-gray-900:#212529;--bs-primary:#0d6efd;--bs-secondary:#6c757d;--bs-success:#198754;--bs-info:#0dcaf0;--bs-warning:#ffc107;--bs-danger:#dc3545;--bs-light:#f8f9fa;--bs-dark:#212529;--bs-primary-rgb:13,110,253;--bs-secondary-rgb:108,117,125;--bs-success-rgb:25,135,84;--bs-info-rgb:13,202,240;--bs-warning-rgb:255,193,7;--bs-danger-rgb:220,53,69;--bs-light-rgb:248,249,250;--bs-dark-rgb:33,37,41;--bs-primary-text-emphasis:#052c65;--bs-secondary-text-emphasis:#2b2f32;--bs-success-text-emphasis:#0a3622;--bs-info-text-emphasis:#055160;--bs-warning-text-emphasis:#664d03;--bs-danger-text-emphasis:#58151c;--bs-light-text-emphasis:#495057;--bs-dark-text-emphasis:#495057;--bs-primary-bg-subtle:#cfe2ff;--bs-secondary-bg-subtle:#e2e3e5;--bs-success-bg-subtle:#d1e7dd;--bs-info-bg-subtle:#cff4fc;--bs-warning-bg-subtle:#fff3cd;--bs-danger-bg-subtle:#f8d7da;--bs-light-bg-subtle:#fcfcfd;--bs-dark-bg-subtle:#ced4da;--bs-primary-border-subtle:#9ec5fe;--bs-secondary-border-subtle:#c4c8cb;--bs-success-border-subtle:#a3cfbb;--bs-info-border-subtle:#9eeaf9;--bs-warning-border-subtle:#ffe69c;--bs-danger-border-subtle:#f1aeb5;--bs-light-border-subtle:#e9ecef;--bs-dark-border-subtle:#adb5bd;--bs-white-rgb:255,255,255;--bs-black-rgb:0,0,0;--bs-font-sans-serif:system-ui,-apple-system,\"Segoe UI\",Roboto,\"Helvetica Neue\",\"Noto Sans\",\"Liberation Sans\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--bs-font-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--bs-gradient:linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));--bs-body-font-family:var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight:400;--bs-body-line-height:1.5;--bs-body-color:#212529;--bs-body-color-rgb:33,37,41;--bs-body-bg:#fff;--bs-body-bg-rgb:255,255,255;--bs-emphasis-color:#000;--bs-emphasis-color-rgb:0,0,0;--bs-secondary-color:rgba(33,37,41,.75);--bs-secondary-color-rgb:33,37,41;--bs-secondary-bg:#e9ecef;--bs-secondary-bg-rgb:233,236,239;--bs-tertiary-color:rgba(33,37,41,.5);--bs-tertiary-color-rgb:33,37,41;--bs-tertiary-bg:#f8f9fa;--bs-tertiary-bg-rgb:248,249,250;--bs-heading-color:inherit;--bs-link-color:#0d6efd;--bs-link-color-rgb:13,110,253;--bs-link-decoration:underline;--bs-link-hover-color:#0a58ca;--bs-link-hover-color-rgb:10,88,202;--bs-code-color:#d63384;--bs-highlight-color:#212529;--bs-highlight-bg:#fff3cd;--bs-border-width:1px;--bs-border-style:solid;--bs-border-color:#dee2e6;--bs-border-color-translucent:rgba(0,0,0,.175);--bs-border-radius:0.375rem;--bs-border-radius-sm:0.25rem;--bs-border-radius-lg:0.5rem;--bs-border-radius-xl:1rem;--bs-border-radius-xxl:2rem;--bs-border-radius-2xl:var(--bs-border-radius-xxl);--bs-border-radius-pill:50rem;--bs-box-shadow:0 0.5rem 1rem rgba(0,0,0,.15);--bs-box-shadow-sm:0 0.125rem 0.25rem rgba(0,0,0,.075);--bs-box-shadow-lg:0 1rem 3rem rgba(0,0,0,.175);--bs-box-shadow-inset:inset 0 1px 2px rgba(0,0,0,.075);--bs-focus-ring-width:0.25rem;--bs-focus-ring-opacity:0.25;--bs-focus-ring-color:rgba(13,110,253,.25);--bs-form-valid-color:#198754;--bs-form-valid-border-color:#198754;--bs-form-invalid-color:#dc3545;--bs-form-invalid-border-color:#dc3545}[data-bs-theme=dark]{--bs-body-color:#dee2e6;--bs-body-color-rgb:222,226,230;--bs-body-bg:#212529;--bs-body-bg-rgb:33,37,41;--bs-emphasis-color:#fff;--bs-emphasis-color-rgb:255,255,255;--bs-secondary-color:rgba(222,226,230,.75);--bs-secondary-color-rgb:222,226,230;--bs-secondary-bg:#343a40;--bs-secondary-bg-rgb:52,58,64;--bs-tertiary-color:rgba(222,226,230,.5);--bs-tertiary-color-rgb:222,226,230;--bs-tertiary-bg:#2b3035;--bs-tertiary-bg-rgb:43,48,53;--bs-primary-text-emphasis:#6ea8fe;--bs-secondary-text-emphasis:#a7acb1;--bs-success-text-emphasis:#75b798;--bs-info-text-emphasis:#6edff6;--bs-warning-text-emphasis:#ffda6a;--bs-danger-text-emphasis:#ea868f;--bs-light-text-emphasis:#f8f9fa;--bs-dark-text-emphasis:#dee2e6;--bs-primary-bg-subtle:#031633;--bs-secondary-bg-subtle:#161719;--bs-success-bg-subtle:#051b11;--bs-info-bg-subtle:#032830;--bs-warning-bg-subtle:#332701;--bs-danger-bg-subtle:#2c0b0e;--bs-light-bg-subtle:#343a40;--bs-dark-bg-subtle:#1a1d20;--bs-primary-border-subtle:#084298;--bs-secondary-border-subtle:#41464b;--bs-success-border-subtle:#0f5132;--bs-info-border-subtle:#087990;--bs-warning-border-subtle:#997404;--bs-danger-border-subtle:#842029;--bs-light-border-subtle:#495057;--bs-dark-border-subtle:#343a40;--bs-heading-color:inherit;--bs-link-color:#6ea8fe;--bs-link-hover-color:#8bb9fe;--bs-link-color-rgb:110,168,254;--bs-link-hover-color-rgb:139,185,254;--bs-code-color:#e685b5;--bs-highlight-color:#dee2e6;--bs-highlight-bg:#664d03;--bs-border-color:#495057;--bs-border-color-translucent:hsla(0,0%,100%,.15);--bs-form-valid-color:#75b798;--bs-form-valid-border-color:#75b798;--bs-form-invalid-color:#ea868f;--bs-form-invalid-border-color:#ea868f;color-scheme:dark}*,:after,:before{box-sizing:border-box}@media (prefers-reduced-motion:no-preference){:root{scroll-behavior:smooth}}body{-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;background-color:var(--bs-body-bg);color:var(--bs-body-color);font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);margin:0;text-align:var(--bs-body-text-align)}hr{border:0;border-top:var(--bs-border-width) solid;color:inherit;margin:1rem 0;opacity:.25}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{color:var(--bs-heading-color);font-weight:500;line-height:1.2;margin-bottom:.5rem;margin-top:0}.h1,h1{font-size:calc(1.375rem + 1.5vw)}@media (min-width:1200px){.h1,h1{font-size:2.5rem}}.h2,h2{font-size:calc(1.325rem + .9vw)}@media (min-width:1200px){.h2,h2{font-size:2rem}}.h3,h3{font-size:calc(1.3rem + .6vw)}@media (min-width:1200px){.h3,h3{font-size:1.75rem}}.h4,h4{font-size:calc(1.275rem + .3vw)}@media (min-width:1200px){.h4,h4{font-size:1.5rem}}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}p{margin-bottom:1rem;margin-top:0}abbr[title]{cursor:help;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{font-style:normal;line-height:inherit;margin-bottom:1rem}ol,ul{padding-left:2rem}dl,ol,ul{margin-bottom:1rem;margin-top:0}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}.small,small{font-size:.875em}.mark,mark{background-color:var(--bs-highlight-bg);color:var(--bs-highlight-color);padding:.1875em}sub,sup{font-size:.75em;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,1));text-decoration:underline}a:hover{--bs-link-color-rgb:var(--bs-link-hover-color-rgb)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;font-size:.875em;margin-bottom:1rem;margin-top:0;overflow:auto}pre code{color:inherit;font-size:inherit;word-break:normal}code{word-wrap:break-word;color:var(--bs-code-color);font-size:.875em}a>code{color:inherit}kbd{background-color:var(--bs-body-color);border-radius:.25rem;color:var(--bs-body-bg);font-size:.875em;padding:.1875rem .375rem}kbd kbd{font-size:1em;padding:0}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{border-collapse:collapse;caption-side:bottom}caption{color:var(--bs-secondary-color);padding-bottom:.5rem;padding-top:.5rem;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}tbody,td,tfoot,th,thead,tr{border:0 solid;border-color:inherit}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}button,input,optgroup,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;margin:0}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none!important}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}::-moz-focus-inner{border-style:none;padding:0}textarea{resize:vertical}fieldset{border:0;margin:0;min-width:0;padding:0}legend{float:left;font-size:calc(1.275rem + .3vw);line-height:inherit;margin-bottom:.5rem;padding:0;width:100%}@media (min-width:1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-text,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{-webkit-appearance:button;font:inherit}output{display:inline-block}iframe{border:0}summary{cursor:pointer;display:list-item}progress{vertical-align:baseline}[hidden]{display:none!important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media (min-width:1200px){.display-6{font-size:2.5rem}}.list-inline,.list-unstyled{list-style:none;padding-left:0}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:.875em;text-transform:uppercase}.blockquote{font-size:1.25rem;margin-bottom:1rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{color:#6c757d;font-size:.875em;margin-bottom:1rem;margin-top:-1rem}.blockquote-footer:before{content:\"— \"}.img-fluid,.img-thumbnail{height:auto;max-width:100%}.img-thumbnail{background-color:var(--bs-body-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);padding:.25rem}.figure{display:inline-block}.figure-img{line-height:1;margin-bottom:.5rem}.figure-caption{color:var(--bs-secondary-color);font-size:.875em}.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{--bs-gutter-x:1.5rem;--bs-gutter-y:0;margin-left:auto;margin-right:auto;padding-left:calc(var(--bs-gutter-x)*.5);padding-right:calc(var(--bs-gutter-x)*.5);width:100%}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}@media (min-width:1400px){.container,.container-lg,.container-md,.container-sm,.container-xl,.container-xxl{max-width:1320px}}:root{--bs-breakpoint-xs:0;--bs-breakpoint-sm:576px;--bs-breakpoint-md:768px;--bs-breakpoint-lg:992px;--bs-breakpoint-xl:1200px;--bs-breakpoint-xxl:1400px}.row{--bs-gutter-x:1.5rem;--bs-gutter-y:0;display:flex;flex-wrap:wrap;margin-left:calc(var(--bs-gutter-x)*-.5);margin-right:calc(var(--bs-gutter-x)*-.5);margin-top:calc(var(--bs-gutter-y)*-1)}.row>*{flex-shrink:0;margin-top:var(--bs-gutter-y);max-width:100%;padding-left:calc(var(--bs-gutter-x)*.5);padding-right:calc(var(--bs-gutter-x)*.5);width:100%}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.66666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x:0}.g-0,.gy-0{--bs-gutter-y:0}.g-1,.gx-1{--bs-gutter-x:0.25rem}.g-1,.gy-1{--bs-gutter-y:0.25rem}.g-2,.gx-2{--bs-gutter-x:0.5rem}.g-2,.gy-2{--bs-gutter-y:0.5rem}.g-3,.gx-3{--bs-gutter-x:1rem}.g-3,.gy-3{--bs-gutter-y:1rem}.g-4,.gx-4{--bs-gutter-x:1.5rem}.g-4,.gy-4{--bs-gutter-y:1.5rem}.g-5,.gx-5{--bs-gutter-x:3rem}.g-5,.gy-5{--bs-gutter-y:3rem}@media (min-width:576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.66666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x:0}.g-sm-0,.gy-sm-0{--bs-gutter-y:0}.g-sm-1,.gx-sm-1{--bs-gutter-x:0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y:0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x:0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y:0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x:1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y:1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x:1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y:1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x:3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y:3rem}}@media (min-width:768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.66666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x:0}.g-md-0,.gy-md-0{--bs-gutter-y:0}.g-md-1,.gx-md-1{--bs-gutter-x:0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y:0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x:0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y:0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x:1rem}.g-md-3,.gy-md-3{--bs-gutter-y:1rem}.g-md-4,.gx-md-4{--bs-gutter-x:1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y:1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x:3rem}.g-md-5,.gy-md-5{--bs-gutter-y:3rem}}@media (min-width:992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.66666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x:0}.g-lg-0,.gy-lg-0{--bs-gutter-y:0}.g-lg-1,.gx-lg-1{--bs-gutter-x:0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y:0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x:0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y:0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x:1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y:1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x:1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y:1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x:3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y:3rem}}@media (min-width:1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.66666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x:0}.g-xl-0,.gy-xl-0{--bs-gutter-y:0}.g-xl-1,.gx-xl-1{--bs-gutter-x:0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y:0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x:0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y:0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x:1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y:1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x:1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y:1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x:3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y:3rem}}@media (min-width:1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.33333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.66666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x:0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y:0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x:0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y:0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x:0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y:0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x:1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y:1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x:1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y:1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x:3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y:3rem}}.table{--bs-table-color-type:initial;--bs-table-bg-type:initial;--bs-table-color-state:initial;--bs-table-bg-state:initial;--bs-table-color:var(--bs-emphasis-color);--bs-table-bg:var(--bs-body-bg);--bs-table-border-color:var(--bs-border-color);--bs-table-accent-bg:transparent;--bs-table-striped-color:var(--bs-emphasis-color);--bs-table-striped-bg:rgba(var(--bs-emphasis-color-rgb),0.05);--bs-table-active-color:var(--bs-emphasis-color);--bs-table-active-bg:rgba(var(--bs-emphasis-color-rgb),0.1);--bs-table-hover-color:var(--bs-emphasis-color);--bs-table-hover-bg:rgba(var(--bs-emphasis-color-rgb),0.075);border-color:var(--bs-table-border-color);margin-bottom:1rem;vertical-align:top;width:100%}.table>:not(caption)>*>*{background-color:var(--bs-table-bg);border-bottom-width:var(--bs-border-width);box-shadow:inset 0 0 0 9999px var(--bs-table-bg-state,var(--bs-table-bg-type,var(--bs-table-accent-bg)));color:var(--bs-table-color-state,var(--bs-table-color-type,var(--bs-table-color)));padding:.5rem}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:calc(var(--bs-border-width)*2) solid}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem}.table-bordered>:not(caption)>*{border-width:var(--bs-border-width) 0}.table-bordered>:not(caption)>*>*{border-width:0 var(--bs-border-width)}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped-columns>:not(caption)>tr>:nth-child(2n),.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-color-type:var(--bs-table-striped-color);--bs-table-bg-type:var(--bs-table-striped-bg)}.table-active{--bs-table-color-state:var(--bs-table-active-color);--bs-table-bg-state:var(--bs-table-active-bg)}.table-hover>tbody>tr:hover>*{--bs-table-color-state:var(--bs-table-hover-color);--bs-table-bg-state:var(--bs-table-hover-bg)}.table-primary{--bs-table-color:#000;--bs-table-bg:#cfe2ff;--bs-table-border-color:#a6b5cc;--bs-table-striped-bg:#c5d7f2;--bs-table-striped-color:#000;--bs-table-active-bg:#bacbe6;--bs-table-active-color:#000;--bs-table-hover-bg:#bfd1ec;--bs-table-hover-color:#000}.table-primary,.table-secondary{border-color:var(--bs-table-border-color);color:var(--bs-table-color)}.table-secondary{--bs-table-color:#000;--bs-table-bg:#e2e3e5;--bs-table-border-color:#b5b6b7;--bs-table-striped-bg:#d7d8da;--bs-table-striped-color:#000;--bs-table-active-bg:#cbccce;--bs-table-active-color:#000;--bs-table-hover-bg:#d1d2d4;--bs-table-hover-color:#000}.table-success{--bs-table-color:#000;--bs-table-bg:#d1e7dd;--bs-table-border-color:#a7b9b1;--bs-table-striped-bg:#c7dbd2;--bs-table-striped-color:#000;--bs-table-active-bg:#bcd0c7;--bs-table-active-color:#000;--bs-table-hover-bg:#c1d6cc;--bs-table-hover-color:#000}.table-info,.table-success{border-color:var(--bs-table-border-color);color:var(--bs-table-color)}.table-info{--bs-table-color:#000;--bs-table-bg:#cff4fc;--bs-table-border-color:#a6c3ca;--bs-table-striped-bg:#c5e8ef;--bs-table-striped-color:#000;--bs-table-active-bg:#badce3;--bs-table-active-color:#000;--bs-table-hover-bg:#bfe2e9;--bs-table-hover-color:#000}.table-warning{--bs-table-color:#000;--bs-table-bg:#fff3cd;--bs-table-border-color:#ccc2a4;--bs-table-striped-bg:#f2e7c3;--bs-table-striped-color:#000;--bs-table-active-bg:#e6dbb9;--bs-table-active-color:#000;--bs-table-hover-bg:#ece1be;--bs-table-hover-color:#000}.table-danger,.table-warning{border-color:var(--bs-table-border-color);color:var(--bs-table-color)}.table-danger{--bs-table-color:#000;--bs-table-bg:#f8d7da;--bs-table-border-color:#c6acae;--bs-table-striped-bg:#eccccf;--bs-table-striped-color:#000;--bs-table-active-bg:#dfc2c4;--bs-table-active-color:#000;--bs-table-hover-bg:#e5c7ca;--bs-table-hover-color:#000}.table-light{--bs-table-color:#000;--bs-table-bg:#f8f9fa;--bs-table-border-color:#c6c7c8;--bs-table-striped-bg:#ecedee;--bs-table-striped-color:#000;--bs-table-active-bg:#dfe0e1;--bs-table-active-color:#000;--bs-table-hover-bg:#e5e6e7;--bs-table-hover-color:#000}.table-dark,.table-light{border-color:var(--bs-table-border-color);color:var(--bs-table-color)}.table-dark{--bs-table-color:#fff;--bs-table-bg:#212529;--bs-table-border-color:#4d5154;--bs-table-striped-bg:#2c3034;--bs-table-striped-color:#fff;--bs-table-active-bg:#373b3e;--bs-table-active-color:#fff;--bs-table-hover-bg:#323539;--bs-table-hover-color:#fff}.table-responsive{-webkit-overflow-scrolling:touch;overflow-x:auto}@media (max-width:575.98px){.table-responsive-sm{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:767.98px){.table-responsive-md{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:991.98px){.table-responsive-lg{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:1199.98px){.table-responsive-xl{-webkit-overflow-scrolling:touch;overflow-x:auto}}@media (max-width:1399.98px){.table-responsive-xxl{-webkit-overflow-scrolling:touch;overflow-x:auto}}.form-label{margin-bottom:.5rem}.col-form-label{font-size:inherit;line-height:1.5;margin-bottom:0;padding-bottom:calc(.375rem + var(--bs-border-width));padding-top:calc(.375rem + var(--bs-border-width))}.col-form-label-lg{font-size:1.25rem;padding-bottom:calc(.5rem + var(--bs-border-width));padding-top:calc(.5rem + var(--bs-border-width))}.col-form-label-sm{font-size:.875rem;padding-bottom:calc(.25rem + var(--bs-border-width));padding-top:calc(.25rem + var(--bs-border-width))}.form-text{color:var(--bs-secondary-color);font-size:.875em;margin-top:.25rem}.form-control{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-clip:padding-box;background-color:var(--bs-body-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);color:var(--bs-body-color);display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{background-color:var(--bs-body-bg);border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);color:var(--bs-body-color);outline:0}.form-control::-webkit-date-and-time-value{height:1.5em;margin:0;min-width:85px}.form-control::-webkit-datetime-edit{display:block;padding:0}.form-control::-moz-placeholder{color:var(--bs-secondary-color);opacity:1}.form-control::placeholder{color:var(--bs-secondary-color);opacity:1}.form-control:disabled{background-color:var(--bs-secondary-bg);opacity:1}.form-control::file-selector-button{background-color:var(--bs-tertiary-bg);border:0 solid;border-color:inherit;border-inline-end-width:var(--bs-border-width);border-radius:0;color:var(--bs-body-color);margin:-.375rem -.75rem;margin-inline-end:.75rem;padding:.375rem .75rem;pointer-events:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:var(--bs-secondary-bg)}.form-control-plaintext{background-color:transparent;border:solid transparent;border-width:var(--bs-border-width) 0;color:var(--bs-body-color);display:block;line-height:1.5;margin-bottom:0;padding:.375rem 0;width:100%}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm{padding-left:0;padding-right:0}.form-control-sm{border-radius:var(--bs-border-radius-sm);font-size:.875rem;min-height:calc(1.5em + .5rem + var(--bs-border-width)*2);padding:.25rem .5rem}.form-control-sm::file-selector-button{margin:-.25rem -.5rem;margin-inline-end:.5rem;padding:.25rem .5rem}.form-control-lg{border-radius:var(--bs-border-radius-lg);font-size:1.25rem;min-height:calc(1.5em + 1rem + var(--bs-border-width)*2);padding:.5rem 1rem}.form-control-lg::file-selector-button{margin:-.5rem -1rem;margin-inline-end:1rem;padding:.5rem 1rem}textarea.form-control{min-height:calc(1.5em + .75rem + var(--bs-border-width)*2)}textarea.form-control-sm{min-height:calc(1.5em + .5rem + var(--bs-border-width)*2)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + var(--bs-border-width)*2)}.form-control-color{height:calc(1.5em + .75rem + var(--bs-border-width)*2);padding:.375rem;width:3rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0!important;border-radius:var(--bs-border-radius)}.form-control-color::-webkit-color-swatch{border:0!important;border-radius:var(--bs-border-radius)}.form-control-color.form-control-sm{height:calc(1.5em + .5rem + var(--bs-border-width)*2)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + var(--bs-border-width)*2)}.form-select{--bs-form-select-bg-img:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\");-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon,none);background-position:right .75rem center;background-repeat:no-repeat;background-size:16px 12px;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);color:var(--bs-body-color);display:block;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem 2.25rem .375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-select[multiple],.form-select[size]:not([size=\"1\"]){background-image:none;padding-right:.75rem}.form-select:disabled{background-color:var(--bs-secondary-bg)}.form-select:-moz-focusring{color:transparent;text-shadow:0 0 0 var(--bs-body-color)}.form-select-sm{border-radius:var(--bs-border-radius-sm);font-size:.875rem;padding-bottom:.25rem;padding-left:.5rem;padding-top:.25rem}.form-select-lg{border-radius:var(--bs-border-radius-lg);font-size:1.25rem;padding-bottom:.5rem;padding-left:1rem;padding-top:.5rem}[data-bs-theme=dark] .form-select{--bs-form-select-bg-img:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E\")}.form-check{display:block;margin-bottom:.125rem;min-height:1.5rem;padding-left:1.5em}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-left:0;padding-right:1.5em;text-align:right}.form-check-reverse .form-check-input{float:right;margin-left:0;margin-right:-1.5em}.form-check-input{--bs-form-check-bg:var(--bs-body-bg);-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--bs-form-check-bg);background-image:var(--bs-form-check-bg-image);background-position:50%;background-repeat:no-repeat;background-size:contain;border:var(--bs-border-width) solid var(--bs-border-color);flex-shrink:0;height:1em;margin-top:.25em;-webkit-print-color-adjust:exact;print-color-adjust:exact;vertical-align:top;width:1em}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{--bs-form-check-bg-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3E%3C/svg%3E\")}.form-check-input:checked[type=radio]{--bs-form-check-bg-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='2' fill='%23fff'/%3E%3C/svg%3E\")}.form-check-input[type=checkbox]:indeterminate{--bs-form-check-bg-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3E%3C/svg%3E\");background-color:#0d6efd;border-color:#0d6efd}.form-check-input:disabled{filter:none;opacity:.5;pointer-events:none}.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{--bs-form-switch-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(0, 0, 0, 0.25)'/%3E%3C/svg%3E\");background-image:var(--bs-form-switch-bg);background-position:0;border-radius:2em;margin-left:-2.5em;transition:background-position .15s ease-in-out;width:2em}@media (prefers-reduced-motion:reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{--bs-form-switch-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%2386b7fe'/%3E%3C/svg%3E\")}.form-switch .form-check-input:checked{--bs-form-switch-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");background-position:100%}.form-switch.form-check-reverse{padding-left:0;padding-right:2.5em}.form-switch.form-check-reverse .form-check-input{margin-left:0;margin-right:-2.5em}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{clip:rect(0,0,0,0);pointer-events:none;position:absolute}.btn-check:disabled+.btn,.btn-check[disabled]+.btn{filter:none;opacity:.65;pointer-events:none}[data-bs-theme=dark] .form-switch .form-check-input:not(:checked):not(:focus){--bs-form-switch-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='rgba(255, 255, 255, 0.25)'/%3E%3C/svg%3E\")}.form-range{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;height:1.5rem;padding:0;width:100%}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;margin-top:-.25rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.form-range::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{background-color:var(--bs-secondary-bg);border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range::-moz-range-thumb{-moz-appearance:none;appearance:none;background-color:#0d6efd;border:0;border-radius:1rem;height:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:1rem}@media (prefers-reduced-motion:reduce){.form-range::-moz-range-thumb{-moz-transition:none;transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{background-color:var(--bs-secondary-bg);border-color:transparent;border-radius:1rem;color:transparent;cursor:pointer;height:.5rem;width:100%}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:var(--bs-secondary-color)}.form-range:disabled::-moz-range-thumb{background-color:var(--bs-secondary-color)}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + var(--bs-border-width)*2);line-height:1.25;min-height:calc(3.5rem + var(--bs-border-width)*2)}.form-floating>label{border:var(--bs-border-width) solid transparent;height:100%;left:0;overflow:hidden;padding:1rem .75rem;pointer-events:none;position:absolute;text-align:start;text-overflow:ellipsis;top:0;transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out;white-space:nowrap;z-index:2}@media (prefers-reduced-motion:reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control-plaintext::-moz-placeholder,.form-floating>.form-control::-moz-placeholder{color:transparent}.form-floating>.form-control-plaintext::placeholder,.form-floating>.form-control::placeholder{color:transparent}.form-floating>.form-control-plaintext:not(:-moz-placeholder-shown),.form-floating>.form-control:not(:-moz-placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown),.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown){padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control-plaintext:-webkit-autofill,.form-floating>.form-control:-webkit-autofill{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-select{padding-bottom:.625rem;padding-top:1.625rem}.form-floating>.form-control:not(:-moz-placeholder-shown)~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label,.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-select~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control:not(:-moz-placeholder-shown)~label:after{background-color:var(--bs-body-bg);border-radius:var(--bs-border-radius);content:\"\";height:1.5em;inset:1rem .375rem;position:absolute;z-index:-1}.form-floating>.form-control-plaintext~label:after,.form-floating>.form-control:focus~label:after,.form-floating>.form-control:not(:placeholder-shown)~label:after,.form-floating>.form-select~label:after{background-color:var(--bs-body-bg);border-radius:var(--bs-border-radius);content:\"\";height:1.5em;inset:1rem .375rem;position:absolute;z-index:-1}.form-floating>.form-control:-webkit-autofill~label{color:rgba(var(--bs-body-color-rgb),.65);transform:scale(.85) translateY(-.5rem) translateX(.15rem)}.form-floating>.form-control-plaintext~label{border-width:var(--bs-border-width) 0}.form-floating>.form-control:disabled~label,.form-floating>:disabled~label{color:#6c757d}.form-floating>.form-control:disabled~label:after,.form-floating>:disabled~label:after{background-color:var(--bs-secondary-bg)}.input-group{align-items:stretch;display:flex;flex-wrap:wrap;position:relative;width:100%}.input-group>.form-control,.input-group>.form-floating,.input-group>.form-select{flex:1 1 auto;min-width:0;position:relative;width:1%}.input-group>.form-control:focus,.input-group>.form-floating:focus-within,.input-group>.form-select:focus{z-index:5}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:5}.input-group-text{align-items:center;background-color:var(--bs-tertiary-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);color:var(--bs-body-color);display:flex;font-size:1rem;font-weight:400;line-height:1.5;padding:.375rem .75rem;text-align:center;white-space:nowrap}.input-group-lg>.btn,.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text{border-radius:var(--bs-border-radius-lg);font-size:1.25rem;padding:.5rem 1rem}.input-group-sm>.btn,.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text{border-radius:var(--bs-border-radius-sm);font-size:.875rem;padding:.25rem .5rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select,.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select,.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating){border-bottom-right-radius:0;border-top-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:calc(var(--bs-border-width)*-1)}.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{border-bottom-left-radius:0;border-top-left-radius:0}.valid-feedback{color:var(--bs-form-valid-color);display:none;font-size:.875em;margin-top:.25rem;width:100%}.valid-tooltip{background-color:var(--bs-success);border-radius:var(--bs-border-radius);color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip{display:block}.form-control.is-valid,.was-validated .form-control:valid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:var(--bs-form-valid-border-color);padding-right:calc(1.5em + .75rem)}.form-control.is-valid:focus,.was-validated .form-control:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-valid,.was-validated .form-select:valid{border-color:var(--bs-form-valid-border-color)}.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"],.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"]{--bs-form-select-bg-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-valid:focus,.was-validated .form-select:valid:focus{border-color:var(--bs-form-valid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-control-color.is-valid,.was-validated .form-control-color:valid{width:calc(3.75rem + 1.5em)}.form-check-input.is-valid,.was-validated .form-check-input:valid{border-color:var(--bs-form-valid-border-color)}.form-check-input.is-valid:checked,.was-validated .form-check-input:valid:checked{background-color:var(--bs-form-valid-color)}.form-check-input.is-valid:focus,.was-validated .form-check-input:valid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:var(--bs-form-valid-color)}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-valid,.input-group>.form-floating:not(:focus-within).is-valid,.input-group>.form-select:not(:focus).is-valid,.was-validated .input-group>.form-control:not(:focus):valid,.was-validated .input-group>.form-floating:not(:focus-within):valid,.was-validated .input-group>.form-select:not(:focus):valid{z-index:3}.invalid-feedback{color:var(--bs-form-invalid-color);display:none;font-size:.875em;margin-top:.25rem;width:100%}.invalid-tooltip{background-color:var(--bs-danger);border-radius:var(--bs-border-radius);color:#fff;display:none;font-size:.875rem;margin-top:.1rem;max-width:100%;padding:.25rem .5rem;position:absolute;top:100%;z-index:5}.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip{display:block}.form-control.is-invalid,.was-validated .form-control:invalid{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right calc(.375em + .1875rem) center;background-repeat:no-repeat;background-size:calc(.75em + .375rem) calc(.75em + .375rem);border-color:var(--bs-form-invalid-border-color);padding-right:calc(1.5em + .75rem)}.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem);padding-right:calc(1.5em + .75rem)}.form-select.is-invalid,.was-validated .form-select:invalid{border-color:var(--bs-form-invalid-border-color)}.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"],.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"]{--bs-form-select-bg-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3E%3C/svg%3E\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(.75em + .375rem) calc(.75em + .375rem);padding-right:4.125rem}.form-select.is-invalid:focus,.was-validated .form-select:invalid:focus{border-color:var(--bs-form-invalid-border-color);box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-control-color.is-invalid,.was-validated .form-control-color:invalid{width:calc(3.75rem + 1.5em)}.form-check-input.is-invalid,.was-validated .form-check-input:invalid{border-color:var(--bs-form-invalid-border-color)}.form-check-input.is-invalid:checked,.was-validated .form-check-input:invalid:checked{background-color:var(--bs-form-invalid-color)}.form-check-input.is-invalid:focus,.was-validated .form-check-input:invalid:focus{box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:var(--bs-form-invalid-color)}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.input-group>.form-control:not(:focus).is-invalid,.input-group>.form-floating:not(:focus-within).is-invalid,.input-group>.form-select:not(:focus).is-invalid,.was-validated .input-group>.form-control:not(:focus):invalid,.was-validated .input-group>.form-floating:not(:focus-within):invalid,.was-validated .input-group>.form-select:not(:focus):invalid{z-index:4}.btn{--bs-btn-padding-x:0.75rem;--bs-btn-padding-y:0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight:400;--bs-btn-line-height:1.5;--bs-btn-color:var(--bs-body-color);--bs-btn-bg:transparent;--bs-btn-border-width:var(--bs-border-width);--bs-btn-border-color:transparent;--bs-btn-border-radius:var(--bs-border-radius);--bs-btn-hover-border-color:transparent;--bs-btn-box-shadow:inset 0 1px 0 hsla(0,0%,100%,.15),0 1px 1px rgba(0,0,0,.075);--bs-btn-disabled-opacity:0.65;--bs-btn-focus-box-shadow:0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb),.5);background-color:var(--bs-btn-bg);border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);color:var(--bs-btn-color);cursor:pointer;display:inline-block;font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);text-align:center;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}@media (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:hover{background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);color:var(--bs-btn-hover-color)}.btn-check+.btn:hover{background-color:var(--bs-btn-bg);border-color:var(--bs-btn-border-color);color:var(--bs-btn-color)}.btn:focus-visible{background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);box-shadow:var(--bs-btn-focus-box-shadow);color:var(--bs-btn-hover-color);outline:0}.btn-check:focus-visible+.btn{border-color:var(--bs-btn-hover-border-color);box-shadow:var(--bs-btn-focus-box-shadow);outline:0}.btn-check:checked+.btn,.btn.active,.btn.show,.btn:first-child:active,:not(.btn-check)+.btn:active{background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color);color:var(--bs-btn-active-color)}.btn-check:checked+.btn:focus-visible,.btn.active:focus-visible,.btn.show:focus-visible,.btn:first-child:active:focus-visible,:not(.btn-check)+.btn:active:focus-visible{box-shadow:var(--bs-btn-focus-box-shadow)}.btn.disabled,.btn:disabled,fieldset:disabled .btn{background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);color:var(--bs-btn-disabled-color);opacity:var(--bs-btn-disabled-opacity);pointer-events:none}.btn-primary{--bs-btn-color:#fff;--bs-btn-bg:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0b5ed7;--bs-btn-hover-border-color:#0a58ca;--bs-btn-focus-shadow-rgb:49,132,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0a58ca;--bs-btn-active-border-color:#0a53be;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#0d6efd;--bs-btn-disabled-border-color:#0d6efd}.btn-secondary{--bs-btn-color:#fff;--bs-btn-bg:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#5c636a;--bs-btn-hover-border-color:#565e64;--bs-btn-focus-shadow-rgb:130,138,145;--bs-btn-active-color:#fff;--bs-btn-active-bg:#565e64;--bs-btn-active-border-color:#51585e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#6c757d;--bs-btn-disabled-border-color:#6c757d}.btn-success{--bs-btn-color:#fff;--bs-btn-bg:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#157347;--bs-btn-hover-border-color:#146c43;--bs-btn-focus-shadow-rgb:60,153,110;--bs-btn-active-color:#fff;--bs-btn-active-bg:#146c43;--bs-btn-active-border-color:#13653f;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#198754;--bs-btn-disabled-border-color:#198754}.btn-info{--bs-btn-color:#000;--bs-btn-bg:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#31d2f2;--bs-btn-hover-border-color:#25cff2;--bs-btn-focus-shadow-rgb:11,172,204;--bs-btn-active-color:#000;--bs-btn-active-bg:#3dd5f3;--bs-btn-active-border-color:#25cff2;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#0dcaf0;--bs-btn-disabled-border-color:#0dcaf0}.btn-warning{--bs-btn-color:#000;--bs-btn-bg:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffca2c;--bs-btn-hover-border-color:#ffc720;--bs-btn-focus-shadow-rgb:217,164,6;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffcd39;--bs-btn-active-border-color:#ffc720;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#ffc107;--bs-btn-disabled-border-color:#ffc107}.btn-danger{--bs-btn-color:#fff;--bs-btn-bg:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#bb2d3b;--bs-btn-hover-border-color:#b02a37;--bs-btn-focus-shadow-rgb:225,83,97;--bs-btn-active-color:#fff;--bs-btn-active-bg:#b02a37;--bs-btn-active-border-color:#a52834;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#dc3545;--bs-btn-disabled-border-color:#dc3545}.btn-light{--bs-btn-color:#000;--bs-btn-bg:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#d3d4d5;--bs-btn-hover-border-color:#c6c7c8;--bs-btn-focus-shadow-rgb:211,212,213;--bs-btn-active-color:#000;--bs-btn-active-bg:#c6c7c8;--bs-btn-active-border-color:#babbbc;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#000;--bs-btn-disabled-bg:#f8f9fa;--bs-btn-disabled-border-color:#f8f9fa}.btn-dark{--bs-btn-color:#fff;--bs-btn-bg:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#424649;--bs-btn-hover-border-color:#373b3e;--bs-btn-focus-shadow-rgb:66,70,73;--bs-btn-active-color:#fff;--bs-btn-active-bg:#4d5154;--bs-btn-active-border-color:#373b3e;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#fff;--bs-btn-disabled-bg:#212529;--bs-btn-disabled-border-color:#212529}.btn-outline-primary{--bs-btn-color:#0d6efd;--bs-btn-border-color:#0d6efd;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#0d6efd;--bs-btn-hover-border-color:#0d6efd;--bs-btn-focus-shadow-rgb:13,110,253;--bs-btn-active-color:#fff;--bs-btn-active-bg:#0d6efd;--bs-btn-active-border-color:#0d6efd;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#0d6efd;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0d6efd;--bs-gradient:none}.btn-outline-secondary{--bs-btn-color:#6c757d;--bs-btn-border-color:#6c757d;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#6c757d;--bs-btn-hover-border-color:#6c757d;--bs-btn-focus-shadow-rgb:108,117,125;--bs-btn-active-color:#fff;--bs-btn-active-bg:#6c757d;--bs-btn-active-border-color:#6c757d;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#6c757d;--bs-gradient:none}.btn-outline-success{--bs-btn-color:#198754;--bs-btn-border-color:#198754;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#198754;--bs-btn-hover-border-color:#198754;--bs-btn-focus-shadow-rgb:25,135,84;--bs-btn-active-color:#fff;--bs-btn-active-bg:#198754;--bs-btn-active-border-color:#198754;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#198754;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#198754;--bs-gradient:none}.btn-outline-info{--bs-btn-color:#0dcaf0;--bs-btn-border-color:#0dcaf0;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#0dcaf0;--bs-btn-hover-border-color:#0dcaf0;--bs-btn-focus-shadow-rgb:13,202,240;--bs-btn-active-color:#000;--bs-btn-active-bg:#0dcaf0;--bs-btn-active-border-color:#0dcaf0;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#0dcaf0;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#0dcaf0;--bs-gradient:none}.btn-outline-warning{--bs-btn-color:#ffc107;--bs-btn-border-color:#ffc107;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#ffc107;--bs-btn-hover-border-color:#ffc107;--bs-btn-focus-shadow-rgb:255,193,7;--bs-btn-active-color:#000;--bs-btn-active-bg:#ffc107;--bs-btn-active-border-color:#ffc107;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#ffc107;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#ffc107;--bs-gradient:none}.btn-outline-danger{--bs-btn-color:#dc3545;--bs-btn-border-color:#dc3545;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#dc3545;--bs-btn-hover-border-color:#dc3545;--bs-btn-focus-shadow-rgb:220,53,69;--bs-btn-active-color:#fff;--bs-btn-active-bg:#dc3545;--bs-btn-active-border-color:#dc3545;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#dc3545;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#dc3545;--bs-gradient:none}.btn-outline-light{--bs-btn-color:#f8f9fa;--bs-btn-border-color:#f8f9fa;--bs-btn-hover-color:#000;--bs-btn-hover-bg:#f8f9fa;--bs-btn-hover-border-color:#f8f9fa;--bs-btn-focus-shadow-rgb:248,249,250;--bs-btn-active-color:#000;--bs-btn-active-bg:#f8f9fa;--bs-btn-active-border-color:#f8f9fa;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#f8f9fa;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#f8f9fa;--bs-gradient:none}.btn-outline-dark{--bs-btn-color:#212529;--bs-btn-border-color:#212529;--bs-btn-hover-color:#fff;--bs-btn-hover-bg:#212529;--bs-btn-hover-border-color:#212529;--bs-btn-focus-shadow-rgb:33,37,41;--bs-btn-active-color:#fff;--bs-btn-active-bg:#212529;--bs-btn-active-border-color:#212529;--bs-btn-active-shadow:inset 0 3px 5px rgba(0,0,0,.125);--bs-btn-disabled-color:#212529;--bs-btn-disabled-bg:transparent;--bs-btn-disabled-border-color:#212529;--bs-gradient:none}.btn-link{--bs-btn-font-weight:400;--bs-btn-color:var(--bs-link-color);--bs-btn-bg:transparent;--bs-btn-border-color:transparent;--bs-btn-hover-color:var(--bs-link-hover-color);--bs-btn-hover-border-color:transparent;--bs-btn-active-color:var(--bs-link-hover-color);--bs-btn-active-border-color:transparent;--bs-btn-disabled-color:#6c757d;--bs-btn-disabled-border-color:transparent;--bs-btn-box-shadow:0 0 0 #000;--bs-btn-focus-shadow-rgb:49,132,253;text-decoration:underline}.btn-link:focus-visible{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-group-lg>.btn,.btn-lg{--bs-btn-padding-y:0.5rem;--bs-btn-padding-x:1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius:var(--bs-border-radius-lg)}.btn-group-sm>.btn,.btn-sm{--bs-btn-padding-y:0.25rem;--bs-btn-padding-x:0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius:var(--bs-border-radius-sm)}.fade{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{height:auto;transition:width .35s ease;width:0}@media (prefers-reduced-motion:reduce){.collapsing.collapse-horizontal{transition:none}}.dropdown,.dropdown-center,.dropend,.dropstart,.dropup,.dropup-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle:after{border-bottom:0;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:.3em solid;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropdown-toggle:empty:after{margin-left:0}.dropdown-menu{--bs-dropdown-zindex:1000;--bs-dropdown-min-width:10rem;--bs-dropdown-padding-x:0;--bs-dropdown-padding-y:0.5rem;--bs-dropdown-spacer:0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color:var(--bs-body-color);--bs-dropdown-bg:var(--bs-body-bg);--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-border-radius:var(--bs-border-radius);--bs-dropdown-border-width:var(--bs-border-width);--bs-dropdown-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y:0.5rem;--bs-dropdown-box-shadow:var(--bs-box-shadow);--bs-dropdown-link-color:var(--bs-body-color);--bs-dropdown-link-hover-color:var(--bs-body-color);--bs-dropdown-link-hover-bg:var(--bs-tertiary-bg);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:var(--bs-tertiary-color);--bs-dropdown-item-padding-x:1rem;--bs-dropdown-item-padding-y:0.25rem;--bs-dropdown-header-color:#6c757d;--bs-dropdown-header-padding-x:1rem;--bs-dropdown-header-padding-y:0.5rem;background-clip:padding-box;background-color:var(--bs-dropdown-bg);border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius);color:var(--bs-dropdown-color);display:none;font-size:var(--bs-dropdown-font-size);list-style:none;margin:0;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);position:absolute;text-align:left;z-index:var(--bs-dropdown-zindex)}.dropdown-menu[data-bs-popper]{left:0;margin-top:var(--bs-dropdown-spacer);top:100%}.dropdown-menu-start{--bs-position:start}.dropdown-menu-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-end{--bs-position:end}.dropdown-menu-end[data-bs-popper]{left:auto;right:0}@media (min-width:576px){.dropdown-menu-sm-start{--bs-position:start}.dropdown-menu-sm-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-sm-end{--bs-position:end}.dropdown-menu-sm-end[data-bs-popper]{left:auto;right:0}}@media (min-width:768px){.dropdown-menu-md-start{--bs-position:start}.dropdown-menu-md-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-md-end{--bs-position:end}.dropdown-menu-md-end[data-bs-popper]{left:auto;right:0}}@media (min-width:992px){.dropdown-menu-lg-start{--bs-position:start}.dropdown-menu-lg-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-lg-end{--bs-position:end}.dropdown-menu-lg-end[data-bs-popper]{left:auto;right:0}}@media (min-width:1200px){.dropdown-menu-xl-start{--bs-position:start}.dropdown-menu-xl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xl-end{--bs-position:end}.dropdown-menu-xl-end[data-bs-popper]{left:auto;right:0}}@media (min-width:1400px){.dropdown-menu-xxl-start{--bs-position:start}.dropdown-menu-xxl-start[data-bs-popper]{left:0;right:auto}.dropdown-menu-xxl-end{--bs-position:end}.dropdown-menu-xxl-end[data-bs-popper]{left:auto;right:0}}.dropup .dropdown-menu[data-bs-popper]{bottom:100%;margin-bottom:var(--bs-dropdown-spacer);margin-top:0;top:auto}.dropup .dropdown-toggle:after{border-bottom:.3em solid;border-left:.3em solid transparent;border-right:.3em solid transparent;border-top:0;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropup .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{left:100%;margin-left:var(--bs-dropdown-spacer);margin-top:0;right:auto;top:0}.dropend .dropdown-toggle:after{border-bottom:.3em solid transparent;border-left:.3em solid;border-right:0;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-left:.255em;vertical-align:.255em}.dropend .dropdown-toggle:empty:after{margin-left:0}.dropend .dropdown-toggle:after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{left:auto;margin-right:var(--bs-dropdown-spacer);margin-top:0;right:100%;top:0}.dropstart .dropdown-toggle:after{content:\"\";display:inline-block;display:none;margin-left:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:before{border-bottom:.3em solid transparent;border-right:.3em solid;border-top:.3em solid transparent;content:\"\";display:inline-block;margin-right:.255em;vertical-align:.255em}.dropstart .dropdown-toggle:empty:after{margin-left:0}.dropstart .dropdown-toggle:before{vertical-align:0}.dropdown-divider{border-top:1px solid var(--bs-dropdown-divider-bg);height:0;margin:var(--bs-dropdown-divider-margin-y) 0;opacity:1;overflow:hidden}.dropdown-item{background-color:transparent;border:0;border-radius:var(--bs-dropdown-item-border-radius,0);clear:both;color:var(--bs-dropdown-link-color);display:block;font-weight:400;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);text-align:inherit;text-decoration:none;white-space:nowrap;width:100%}.dropdown-item:focus,.dropdown-item:hover{background-color:var(--bs-dropdown-link-hover-bg);color:var(--bs-dropdown-link-hover-color)}.dropdown-item.active,.dropdown-item:active{background-color:var(--bs-dropdown-link-active-bg);color:var(--bs-dropdown-link-active-color);text-decoration:none}.dropdown-item.disabled,.dropdown-item:disabled{background-color:transparent;color:var(--bs-dropdown-link-disabled-color);pointer-events:none}.dropdown-menu.show{display:block}.dropdown-header{color:var(--bs-dropdown-header-color);display:block;font-size:.875rem;margin-bottom:0;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);white-space:nowrap}.dropdown-item-text{color:var(--bs-dropdown-link-color);display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x)}.dropdown-menu-dark{--bs-dropdown-color:#dee2e6;--bs-dropdown-bg:#343a40;--bs-dropdown-border-color:var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color:#dee2e6;--bs-dropdown-link-hover-color:#fff;--bs-dropdown-divider-bg:var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg:hsla(0,0%,100%,.15);--bs-dropdown-link-active-color:#fff;--bs-dropdown-link-active-bg:#0d6efd;--bs-dropdown-link-disabled-color:#adb5bd;--bs-dropdown-header-color:#adb5bd}.btn-group,.btn-group-vertical{display:inline-flex;position:relative;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{flex:1 1 auto;position:relative}.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:var(--bs-border-radius)}.btn-group>.btn-group:not(:first-child),.btn-group>:not(.btn-check:first-child)+.btn{margin-left:calc(var(--bs-border-width)*-1)}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn{border-bottom-left-radius:0;border-top-left-radius:0}.dropdown-toggle-split{padding-left:.5625rem;padding-right:.5625rem}.dropdown-toggle-split:after,.dropend .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after{margin-left:0}.dropstart .dropdown-toggle-split:before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-left:.375rem;padding-right:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-left:.75rem;padding-right:.75rem}.btn-group-vertical{align-items:flex-start;flex-direction:column;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child){margin-top:calc(var(--bs-border-width)*-1)}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn~.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x:1rem;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-link-color);--bs-nav-link-hover-color:var(--bs-link-hover-color);--bs-nav-link-disabled-color:var(--bs-secondary-color);display:flex;flex-wrap:wrap;list-style:none;margin-bottom:0;padding-left:0}.nav-link{background:0 0;border:0;color:var(--bs-nav-link-color);display:block;font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media (prefers-reduced-motion:reduce){.nav-link{transition:none}}.nav-link:focus,.nav-link:hover{color:var(--bs-nav-link-hover-color)}.nav-link:focus-visible{box-shadow:0 0 0 .25rem rgba(13,110,253,.25);outline:0}.nav-link.disabled,.nav-link:disabled{color:var(--bs-nav-link-disabled-color);cursor:default;pointer-events:none}.nav-tabs{--bs-nav-tabs-border-width:var(--bs-border-width);--bs-nav-tabs-border-color:var(--bs-border-color);--bs-nav-tabs-border-radius:var(--bs-border-radius);--bs-nav-tabs-link-hover-border-color:var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color);--bs-nav-tabs-link-active-color:var(--bs-emphasis-color);--bs-nav-tabs-link-active-bg:var(--bs-body-bg);--bs-nav-tabs-link-active-border-color:var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg);border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{border:var(--bs-nav-tabs-border-width) solid transparent;border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius);margin-bottom:calc(var(--bs-nav-tabs-border-width)*-1)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:var(--bs-nav-tabs-link-hover-border-color);isolation:isolate}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color);color:var(--bs-nav-tabs-link-active-color)}.nav-tabs .dropdown-menu{border-top-left-radius:0;border-top-right-radius:0;margin-top:calc(var(--bs-nav-tabs-border-width)*-1)}.nav-pills{--bs-nav-pills-border-radius:var(--bs-border-radius);--bs-nav-pills-link-active-color:#fff;--bs-nav-pills-link-active-bg:#0d6efd}.nav-pills .nav-link{border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{background-color:var(--bs-nav-pills-link-active-bg);color:var(--bs-nav-pills-link-active-color)}.nav-underline{--bs-nav-underline-gap:1rem;--bs-nav-underline-border-width:0.125rem;--bs-nav-underline-link-active-color:var(--bs-emphasis-color);gap:var(--bs-nav-underline-gap)}.nav-underline .nav-link{border-bottom:var(--bs-nav-underline-border-width) solid transparent;padding-left:0;padding-right:0}.nav-underline .nav-link:focus,.nav-underline .nav-link:hover{border-bottom-color:currentcolor}.nav-underline .nav-link.active,.nav-underline .show>.nav-link{border-bottom-color:currentcolor;color:var(--bs-nav-underline-link-active-color);font-weight:700}.nav-fill .nav-item,.nav-fill>.nav-link{flex:1 1 auto;text-align:center}.nav-justified .nav-item,.nav-justified>.nav-link{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x:0;--bs-navbar-padding-y:0.5rem;--bs-navbar-color:rgba(var(--bs-emphasis-color-rgb),0.65);--bs-navbar-hover-color:rgba(var(--bs-emphasis-color-rgb),0.8);--bs-navbar-disabled-color:rgba(var(--bs-emphasis-color-rgb),0.3);--bs-navbar-active-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-brand-padding-y:0.3125rem;--bs-navbar-brand-margin-end:1rem;--bs-navbar-brand-font-size:1.25rem;--bs-navbar-brand-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-brand-hover-color:rgba(var(--bs-emphasis-color-rgb),1);--bs-navbar-nav-link-padding-x:0.5rem;--bs-navbar-toggler-padding-y:0.25rem;--bs-navbar-toggler-padding-x:0.75rem;--bs-navbar-toggler-font-size:1.25rem;--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(33, 37, 41, 0.75)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\");--bs-navbar-toggler-border-color:rgba(var(--bs-emphasis-color-rgb),0.15);--bs-navbar-toggler-border-radius:var(--bs-border-radius);--bs-navbar-toggler-focus-width:0.25rem;--bs-navbar-toggler-transition:box-shadow 0.15s ease-in-out;align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x);position:relative}.navbar>.container,.navbar>.container-fluid,.navbar>.container-lg,.navbar>.container-md,.navbar>.container-sm,.navbar>.container-xl,.navbar>.container-xxl{align-items:center;display:flex;flex-wrap:inherit;justify-content:space-between}.navbar-brand{color:var(--bs-navbar-brand-color);font-size:var(--bs-navbar-brand-font-size);margin-right:var(--bs-navbar-brand-margin-end);padding-bottom:var(--bs-navbar-brand-padding-y);padding-top:var(--bs-navbar-brand-padding-y);text-decoration:none;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x:0;--bs-nav-link-padding-y:0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color:var(--bs-navbar-color);--bs-nav-link-hover-color:var(--bs-navbar-hover-color);--bs-nav-link-disabled-color:var(--bs-navbar-disabled-color);display:flex;flex-direction:column;list-style:none;margin-bottom:0;padding-left:0}.navbar-nav .nav-link.active,.navbar-nav .nav-link.show{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{color:var(--bs-navbar-color);padding-bottom:.5rem;padding-top:.5rem}.navbar-text a,.navbar-text a:focus,.navbar-text a:hover{color:var(--bs-navbar-active-color)}.navbar-collapse{align-items:center;flex-basis:100%;flex-grow:1}.navbar-toggler{background-color:transparent;border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);color:var(--bs-navbar-color);font-size:var(--bs-navbar-toggler-font-size);line-height:1;padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);transition:var(--bs-navbar-toggler-transition)}@media (prefers-reduced-motion:reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width);outline:0;text-decoration:none}.navbar-toggler-icon{background-image:var(--bs-navbar-toggler-icon-bg);background-position:50%;background-repeat:no-repeat;background-size:100%;display:inline-block;height:1.5em;vertical-align:middle;width:1.5em}.navbar-nav-scroll{max-height:var(--bs-scroll-height,75vh);overflow-y:auto}@media (min-width:576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (min-width:1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-left:var(--bs-navbar-nav-link-padding-x);padding-right:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{background-color:transparent!important;border:0!important;flex-grow:1;height:auto!important;position:static;transform:none!important;transition:none;visibility:visible!important;width:auto!important;z-index:auto}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;overflow-y:visible;padding:0}.navbar-dark,.navbar[data-bs-theme=dark]{--bs-navbar-color:hsla(0,0%,100%,.55);--bs-navbar-hover-color:hsla(0,0%,100%,.75);--bs-navbar-disabled-color:hsla(0,0%,100%,.25);--bs-navbar-active-color:#fff;--bs-navbar-brand-color:#fff;--bs-navbar-brand-hover-color:#fff;--bs-navbar-toggler-border-color:hsla(0,0%,100%,.1)}.navbar-dark,.navbar[data-bs-theme=dark],[data-bs-theme=dark] .navbar-toggler-icon{--bs-navbar-toggler-icon-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.55)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\")}.card{--bs-card-spacer-y:1rem;--bs-card-spacer-x:1rem;--bs-card-title-spacer-y:0.5rem;--bs-card-title-color: ;--bs-card-subtitle-color: ;--bs-card-border-width:var(--bs-border-width);--bs-card-border-color:var(--bs-border-color-translucent);--bs-card-border-radius:var(--bs-border-radius);--bs-card-box-shadow: ;--bs-card-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-card-cap-padding-y:0.5rem;--bs-card-cap-padding-x:1rem;--bs-card-cap-bg:rgba(var(--bs-body-color-rgb),0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg:var(--bs-body-bg);--bs-card-img-overlay-padding:1rem;--bs-card-group-margin:0.75rem;word-wrap:break-word;background-clip:border-box;background-color:var(--bs-card-bg);border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius);color:var(--bs-body-color);display:flex;flex-direction:column;height:var(--bs-card-height);min-width:0;position:relative}.card>hr{margin-left:0;margin-right:0}.card>.list-group{border-bottom:inherit;border-top:inherit}.card>.list-group:first-child{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius);border-top-width:0}.card>.list-group:last-child{border-bottom-left-radius:var(--bs-card-inner-border-radius);border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-width:0}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{color:var(--bs-card-color);flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x)}.card-title{color:var(--bs-card-title-color);margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{color:var(--bs-card-subtitle-color);margin-top:calc(var(--bs-card-title-spacer-y)*-.5)}.card-subtitle,.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color);color:var(--bs-card-cap-color);margin-bottom:0;padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color);color:var(--bs-card-cap-color);padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{border-bottom:0;margin-bottom:calc(var(--bs-card-cap-padding-y)*-1);margin-left:calc(var(--bs-card-cap-padding-x)*-.5);margin-right:calc(var(--bs-card-cap-padding-x)*-.5)}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-left:calc(var(--bs-card-cap-padding-x)*-.5);margin-right:calc(var(--bs-card-cap-padding-x)*-.5)}.card-img-overlay{border-radius:var(--bs-card-inner-border-radius);bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);position:absolute;right:0;top:0}.card-img,.card-img-bottom,.card-img-top{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-left-radius:var(--bs-card-inner-border-radius);border-bottom-right-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media (min-width:576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{border-left:0;margin-left:0}.card-group>.card:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom{border-bottom-left-radius:0}}.accordion{--bs-accordion-color:var(--bs-body-color);--bs-accordion-bg:var(--bs-body-bg);--bs-accordion-transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out,border-radius 0.15s ease;--bs-accordion-border-color:var(--bs-border-color);--bs-accordion-border-width:var(--bs-border-width);--bs-accordion-border-radius:var(--bs-border-radius);--bs-accordion-inner-border-radius:calc(var(--bs-border-radius) - var(--bs-border-width));--bs-accordion-btn-padding-x:1.25rem;--bs-accordion-btn-padding-y:1rem;--bs-accordion-btn-color:var(--bs-body-color);--bs-accordion-btn-bg:var(--bs-accordion-bg);--bs-accordion-btn-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\");--bs-accordion-btn-icon-width:1.25rem;--bs-accordion-btn-icon-transform:rotate(-180deg);--bs-accordion-btn-icon-transition:transform 0.2s ease-in-out;--bs-accordion-btn-active-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23052c65'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\");--bs-accordion-btn-focus-border-color:#86b7fe;--bs-accordion-btn-focus-box-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-accordion-body-padding-x:1.25rem;--bs-accordion-body-padding-y:1rem;--bs-accordion-active-color:var(--bs-primary-text-emphasis);--bs-accordion-active-bg:var(--bs-primary-bg-subtle)}.accordion-button{align-items:center;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;color:var(--bs-accordion-btn-color);display:flex;font-size:1rem;overflow-anchor:none;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);position:relative;text-align:left;transition:var(--bs-accordion-transition);width:100%}@media (prefers-reduced-motion:reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(var(--bs-accordion-border-width)*-1) 0 var(--bs-accordion-border-color);color:var(--bs-accordion-active-color)}.accordion-button:not(.collapsed):after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button:after{background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);content:\"\";flex-shrink:0;height:var(--bs-accordion-btn-icon-width);margin-left:auto;transition:var(--bs-accordion-btn-icon-transition);width:var(--bs-accordion-btn-icon-width)}@media (prefers-reduced-motion:reduce){.accordion-button:after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{border-color:var(--bs-accordion-btn-focus-border-color);box-shadow:var(--bs-accordion-btn-focus-box-shadow);outline:0;z-index:3}.accordion-header{margin-bottom:0}.accordion-item{background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color);color:var(--bs-accordion-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-left-radius:var(--bs-accordion-border-radius);border-bottom-right-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-left-radius:var(--bs-accordion-inner-border-radius);border-bottom-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-left-radius:var(--bs-accordion-border-radius);border-bottom-right-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-left:0;border-radius:0;border-right:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button,.accordion-flush .accordion-item .accordion-button.collapsed{border-radius:0}[data-bs-theme=dark] .accordion-button:after{--bs-accordion-btn-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\");--bs-accordion-btn-active-icon:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%236ea8fe'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\")}.breadcrumb{--bs-breadcrumb-padding-x:0;--bs-breadcrumb-padding-y:0;--bs-breadcrumb-margin-bottom:1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color:var(--bs-secondary-color);--bs-breadcrumb-item-padding-x:0.5rem;--bs-breadcrumb-item-active-color:var(--bs-secondary-color);background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius);display:flex;flex-wrap:wrap;font-size:var(--bs-breadcrumb-font-size);list-style:none;margin-bottom:var(--bs-breadcrumb-margin-bottom);padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item:before{color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider,\"/\");float:left;padding-right:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x:0.75rem;--bs-pagination-padding-y:0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color:var(--bs-link-color);--bs-pagination-bg:var(--bs-body-bg);--bs-pagination-border-width:var(--bs-border-width);--bs-pagination-border-color:var(--bs-border-color);--bs-pagination-border-radius:var(--bs-border-radius);--bs-pagination-hover-color:var(--bs-link-hover-color);--bs-pagination-hover-bg:var(--bs-tertiary-bg);--bs-pagination-hover-border-color:var(--bs-border-color);--bs-pagination-focus-color:var(--bs-link-hover-color);--bs-pagination-focus-bg:var(--bs-secondary-bg);--bs-pagination-focus-box-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-pagination-active-color:#fff;--bs-pagination-active-bg:#0d6efd;--bs-pagination-active-border-color:#0d6efd;--bs-pagination-disabled-color:var(--bs-secondary-color);--bs-pagination-disabled-bg:var(--bs-secondary-bg);--bs-pagination-disabled-border-color:var(--bs-border-color);display:flex;list-style:none;padding-left:0}.page-link{background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);color:var(--bs-pagination-color);display:block;font-size:var(--bs-pagination-font-size);padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);position:relative;text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.page-link{transition:none}}.page-link:hover{background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color);color:var(--bs-pagination-hover-color);z-index:2}.page-link:focus{background-color:var(--bs-pagination-focus-bg);box-shadow:var(--bs-pagination-focus-box-shadow);color:var(--bs-pagination-focus-color);outline:0;z-index:3}.active>.page-link,.page-link.active{background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color);color:var(--bs-pagination-active-color);z-index:3}.disabled>.page-link,.page-link.disabled{background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color);color:var(--bs-pagination-disabled-color);pointer-events:none}.page-item:not(:first-child) .page-link{margin-left:calc(var(--bs-border-width)*-1)}.page-item:first-child .page-link{border-bottom-left-radius:var(--bs-pagination-border-radius);border-top-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-bottom-right-radius:var(--bs-pagination-border-radius);border-top-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x:1.5rem;--bs-pagination-padding-y:0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius:var(--bs-border-radius-lg)}.pagination-sm{--bs-pagination-padding-x:0.5rem;--bs-pagination-padding-y:0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius:var(--bs-border-radius-sm)}.badge{--bs-badge-padding-x:0.65em;--bs-badge-padding-y:0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight:700;--bs-badge-color:#fff;--bs-badge-border-radius:var(--bs-border-radius);border-radius:var(--bs-badge-border-radius);color:var(--bs-badge-color);display:inline-block;font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);text-align:center;vertical-align:baseline;white-space:nowrap}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg:transparent;--bs-alert-padding-x:1rem;--bs-alert-padding-y:1rem;--bs-alert-margin-bottom:1rem;--bs-alert-color:inherit;--bs-alert-border-color:transparent;--bs-alert-border:var(--bs-border-width) solid var(--bs-alert-border-color);--bs-alert-border-radius:var(--bs-border-radius);--bs-alert-link-color:inherit;background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius);color:var(--bs-alert-color);margin-bottom:var(--bs-alert-margin-bottom);padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);position:relative}.alert-heading{color:inherit}.alert-link{color:var(--bs-alert-link-color);font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{padding:1.25rem 1rem;position:absolute;right:0;top:0;z-index:2}.alert-primary{--bs-alert-color:var(--bs-primary-text-emphasis);--bs-alert-bg:var(--bs-primary-bg-subtle);--bs-alert-border-color:var(--bs-primary-border-subtle);--bs-alert-link-color:var(--bs-primary-text-emphasis)}.alert-secondary{--bs-alert-color:var(--bs-secondary-text-emphasis);--bs-alert-bg:var(--bs-secondary-bg-subtle);--bs-alert-border-color:var(--bs-secondary-border-subtle);--bs-alert-link-color:var(--bs-secondary-text-emphasis)}.alert-success{--bs-alert-color:var(--bs-success-text-emphasis);--bs-alert-bg:var(--bs-success-bg-subtle);--bs-alert-border-color:var(--bs-success-border-subtle);--bs-alert-link-color:var(--bs-success-text-emphasis)}.alert-info{--bs-alert-color:var(--bs-info-text-emphasis);--bs-alert-bg:var(--bs-info-bg-subtle);--bs-alert-border-color:var(--bs-info-border-subtle);--bs-alert-link-color:var(--bs-info-text-emphasis)}.alert-warning{--bs-alert-color:var(--bs-warning-text-emphasis);--bs-alert-bg:var(--bs-warning-bg-subtle);--bs-alert-border-color:var(--bs-warning-border-subtle);--bs-alert-link-color:var(--bs-warning-text-emphasis)}.alert-danger{--bs-alert-color:var(--bs-danger-text-emphasis);--bs-alert-bg:var(--bs-danger-bg-subtle);--bs-alert-border-color:var(--bs-danger-border-subtle);--bs-alert-link-color:var(--bs-danger-text-emphasis)}.alert-light{--bs-alert-color:var(--bs-light-text-emphasis);--bs-alert-bg:var(--bs-light-bg-subtle);--bs-alert-border-color:var(--bs-light-border-subtle);--bs-alert-link-color:var(--bs-light-text-emphasis)}.alert-dark{--bs-alert-color:var(--bs-dark-text-emphasis);--bs-alert-bg:var(--bs-dark-bg-subtle);--bs-alert-border-color:var(--bs-dark-border-subtle);--bs-alert-link-color:var(--bs-dark-text-emphasis)}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress,.progress-stacked{--bs-progress-height:1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg:var(--bs-secondary-bg);--bs-progress-border-radius:var(--bs-border-radius);--bs-progress-box-shadow:var(--bs-box-shadow-inset);--bs-progress-bar-color:#fff;--bs-progress-bar-bg:#0d6efd;--bs-progress-bar-transition:width 0.6s ease;background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius);display:flex;font-size:var(--bs-progress-font-size);height:var(--bs-progress-height);overflow:hidden}.progress-bar{background-color:var(--bs-progress-bar-bg);color:var(--bs-progress-bar-color);display:flex;flex-direction:column;justify-content:center;overflow:hidden;text-align:center;transition:var(--bs-progress-bar-transition);white-space:nowrap}@media (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-stacked>.progress{overflow:visible}.progress-stacked>.progress>.progress-bar{width:100%}.progress-bar-animated{animation:progress-bar-stripes 1s linear infinite}@media (prefers-reduced-motion:reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color:var(--bs-body-color);--bs-list-group-bg:var(--bs-body-bg);--bs-list-group-border-color:var(--bs-border-color);--bs-list-group-border-width:var(--bs-border-width);--bs-list-group-border-radius:var(--bs-border-radius);--bs-list-group-item-padding-x:1rem;--bs-list-group-item-padding-y:0.5rem;--bs-list-group-action-color:var(--bs-secondary-color);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-tertiary-bg);--bs-list-group-action-active-color:var(--bs-body-color);--bs-list-group-action-active-bg:var(--bs-secondary-bg);--bs-list-group-disabled-color:var(--bs-secondary-color);--bs-list-group-disabled-bg:var(--bs-body-bg);--bs-list-group-active-color:#fff;--bs-list-group-active-bg:#0d6efd;--bs-list-group-active-border-color:#0d6efd;border-radius:var(--bs-list-group-border-radius);display:flex;flex-direction:column;margin-bottom:0;padding-left:0}.list-group-numbered{counter-reset:section;list-style-type:none}.list-group-numbered>.list-group-item:before{content:counters(section,\".\") \". \";counter-increment:section}.list-group-item-action{color:var(--bs-list-group-action-color);text-align:inherit;width:100%}.list-group-item-action:focus,.list-group-item-action:hover{background-color:var(--bs-list-group-action-hover-bg);color:var(--bs-list-group-action-hover-color);text-decoration:none;z-index:1}.list-group-item-action:active{background-color:var(--bs-list-group-action-active-bg);color:var(--bs-list-group-action-active-color)}.list-group-item{background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);color:var(--bs-list-group-color);display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);position:relative;text-decoration:none}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{background-color:var(--bs-list-group-disabled-bg);color:var(--bs-list-group-disabled-color);pointer-events:none}.list-group-item.active{background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color);color:var(--bs-list-group-active-color);z-index:2}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{border-top-width:var(--bs-list-group-border-width);margin-top:calc(var(--bs-list-group-border-width)*-1)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}@media (min-width:576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-md>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}@media (min-width:1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child:not(:last-child){border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child:not(:first-child){border-bottom-left-radius:0;border-top-right-radius:var(--bs-list-group-border-radius)}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-left-width:0;border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{border-left-width:var(--bs-list-group-border-width);margin-left:calc(var(--bs-list-group-border-width)*-1)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{--bs-list-group-color:var(--bs-primary-text-emphasis);--bs-list-group-bg:var(--bs-primary-bg-subtle);--bs-list-group-border-color:var(--bs-primary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-primary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-primary-border-subtle);--bs-list-group-active-color:var(--bs-primary-bg-subtle);--bs-list-group-active-bg:var(--bs-primary-text-emphasis);--bs-list-group-active-border-color:var(--bs-primary-text-emphasis)}.list-group-item-secondary{--bs-list-group-color:var(--bs-secondary-text-emphasis);--bs-list-group-bg:var(--bs-secondary-bg-subtle);--bs-list-group-border-color:var(--bs-secondary-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-secondary-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-secondary-border-subtle);--bs-list-group-active-color:var(--bs-secondary-bg-subtle);--bs-list-group-active-bg:var(--bs-secondary-text-emphasis);--bs-list-group-active-border-color:var(--bs-secondary-text-emphasis)}.list-group-item-success{--bs-list-group-color:var(--bs-success-text-emphasis);--bs-list-group-bg:var(--bs-success-bg-subtle);--bs-list-group-border-color:var(--bs-success-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-success-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-success-border-subtle);--bs-list-group-active-color:var(--bs-success-bg-subtle);--bs-list-group-active-bg:var(--bs-success-text-emphasis);--bs-list-group-active-border-color:var(--bs-success-text-emphasis)}.list-group-item-info{--bs-list-group-color:var(--bs-info-text-emphasis);--bs-list-group-bg:var(--bs-info-bg-subtle);--bs-list-group-border-color:var(--bs-info-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-info-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-info-border-subtle);--bs-list-group-active-color:var(--bs-info-bg-subtle);--bs-list-group-active-bg:var(--bs-info-text-emphasis);--bs-list-group-active-border-color:var(--bs-info-text-emphasis)}.list-group-item-warning{--bs-list-group-color:var(--bs-warning-text-emphasis);--bs-list-group-bg:var(--bs-warning-bg-subtle);--bs-list-group-border-color:var(--bs-warning-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-warning-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-warning-border-subtle);--bs-list-group-active-color:var(--bs-warning-bg-subtle);--bs-list-group-active-bg:var(--bs-warning-text-emphasis);--bs-list-group-active-border-color:var(--bs-warning-text-emphasis)}.list-group-item-danger{--bs-list-group-color:var(--bs-danger-text-emphasis);--bs-list-group-bg:var(--bs-danger-bg-subtle);--bs-list-group-border-color:var(--bs-danger-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-danger-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-danger-border-subtle);--bs-list-group-active-color:var(--bs-danger-bg-subtle);--bs-list-group-active-bg:var(--bs-danger-text-emphasis);--bs-list-group-active-border-color:var(--bs-danger-text-emphasis)}.list-group-item-light{--bs-list-group-color:var(--bs-light-text-emphasis);--bs-list-group-bg:var(--bs-light-bg-subtle);--bs-list-group-border-color:var(--bs-light-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-light-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-light-border-subtle);--bs-list-group-active-color:var(--bs-light-bg-subtle);--bs-list-group-active-bg:var(--bs-light-text-emphasis);--bs-list-group-active-border-color:var(--bs-light-text-emphasis)}.list-group-item-dark{--bs-list-group-color:var(--bs-dark-text-emphasis);--bs-list-group-bg:var(--bs-dark-bg-subtle);--bs-list-group-border-color:var(--bs-dark-border-subtle);--bs-list-group-action-hover-color:var(--bs-emphasis-color);--bs-list-group-action-hover-bg:var(--bs-dark-border-subtle);--bs-list-group-action-active-color:var(--bs-emphasis-color);--bs-list-group-action-active-bg:var(--bs-dark-border-subtle);--bs-list-group-active-color:var(--bs-dark-bg-subtle);--bs-list-group-active-bg:var(--bs-dark-text-emphasis);--bs-list-group-active-border-color:var(--bs-dark-text-emphasis)}.btn-close{--bs-btn-close-color:#000;--bs-btn-close-bg:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3E%3C/svg%3E\");--bs-btn-close-opacity:0.5;--bs-btn-close-hover-opacity:0.75;--bs-btn-close-focus-shadow:0 0 0 0.25rem rgba(13,110,253,.25);--bs-btn-close-focus-opacity:1;--bs-btn-close-disabled-opacity:0.25;--bs-btn-close-white-filter:invert(1) grayscale(100%) brightness(200%);background:transparent var(--bs-btn-close-bg) center/1em auto no-repeat;border:0;border-radius:.375rem;box-sizing:content-box;height:1em;opacity:var(--bs-btn-close-opacity);padding:.25em;width:1em}.btn-close,.btn-close:hover{color:var(--bs-btn-close-color)}.btn-close:hover{opacity:var(--bs-btn-close-hover-opacity);text-decoration:none}.btn-close:focus{box-shadow:var(--bs-btn-close-focus-shadow);opacity:var(--bs-btn-close-focus-opacity);outline:0}.btn-close.disabled,.btn-close:disabled{opacity:var(--bs-btn-close-disabled-opacity);pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.btn-close-white,[data-bs-theme=dark] .btn-close{filter:var(--bs-btn-close-white-filter)}.toast{--bs-toast-zindex:1090;--bs-toast-padding-x:0.75rem;--bs-toast-padding-y:0.5rem;--bs-toast-spacing:1.5rem;--bs-toast-max-width:350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg:rgba(var(--bs-body-bg-rgb),0.85);--bs-toast-border-width:var(--bs-border-width);--bs-toast-border-color:var(--bs-border-color-translucent);--bs-toast-border-radius:var(--bs-border-radius);--bs-toast-box-shadow:var(--bs-box-shadow);--bs-toast-header-color:var(--bs-secondary-color);--bs-toast-header-bg:rgba(var(--bs-body-bg-rgb),0.85);--bs-toast-header-border-color:var(--bs-border-color-translucent);background-clip:padding-box;background-color:var(--bs-toast-bg);border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);border-radius:var(--bs-toast-border-radius);box-shadow:var(--bs-toast-box-shadow);color:var(--bs-toast-color);font-size:var(--bs-toast-font-size);max-width:100%;pointer-events:auto;width:var(--bs-toast-max-width)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{--bs-toast-zindex:1090;max-width:100%;pointer-events:none;position:absolute;width:-moz-max-content;width:max-content;z-index:var(--bs-toast-zindex)}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{align-items:center;background-clip:padding-box;background-color:var(--bs-toast-header-bg);border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));color:var(--bs-toast-header-color);display:flex;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x)}.toast-header .btn-close{margin-left:var(--bs-toast-padding-x);margin-right:calc(var(--bs-toast-padding-x)*-.5)}.toast-body{word-wrap:break-word;padding:var(--bs-toast-padding-x)}.modal{--bs-modal-zindex:1055;--bs-modal-width:500px;--bs-modal-padding:1rem;--bs-modal-margin:0.5rem;--bs-modal-color: ;--bs-modal-bg:var(--bs-body-bg);--bs-modal-border-color:var(--bs-border-color-translucent);--bs-modal-border-width:var(--bs-border-width);--bs-modal-border-radius:var(--bs-border-radius-lg);--bs-modal-box-shadow:var(--bs-box-shadow-sm);--bs-modal-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-modal-header-padding-x:1rem;--bs-modal-header-padding-y:1rem;--bs-modal-header-padding:1rem 1rem;--bs-modal-header-border-color:var(--bs-border-color);--bs-modal-header-border-width:var(--bs-border-width);--bs-modal-title-line-height:1.5;--bs-modal-footer-gap:0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color:var(--bs-border-color);--bs-modal-footer-border-width:var(--bs-border-width);display:none;height:100%;left:0;outline:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100%;z-index:var(--bs-modal-zindex)}.modal-dialog{margin:var(--bs-modal-margin);pointer-events:none;position:relative;width:auto}.modal.fade .modal-dialog{transform:translateY(-50px);transition:transform .3s ease-out}@media (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin)*2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{align-items:center;display:flex;min-height:calc(100% - var(--bs-modal-margin)*2)}.modal-content{background-clip:padding-box;background-color:var(--bs-modal-bg);border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);color:var(--bs-modal-color);display:flex;flex-direction:column;outline:0;pointer-events:auto;position:relative;width:100%}.modal-backdrop{--bs-backdrop-zindex:1050;--bs-backdrop-bg:#000;--bs-backdrop-opacity:0.5;background-color:var(--bs-backdrop-bg);height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:var(--bs-backdrop-zindex)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{align-items:center;border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius);display:flex;flex-shrink:0;justify-content:space-between;padding:var(--bs-modal-header-padding)}.modal-header .btn-close{margin:calc(var(--bs-modal-header-padding-y)*-.5) calc(var(--bs-modal-header-padding-x)*-.5) calc(var(--bs-modal-header-padding-y)*-.5) auto;padding:calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5)}.modal-title{line-height:var(--bs-modal-title-line-height);margin-bottom:0}.modal-body{flex:1 1 auto;padding:var(--bs-modal-padding);position:relative}.modal-footer{align-items:center;background-color:var(--bs-modal-footer-bg);border-bottom-left-radius:var(--bs-modal-inner-border-radius);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap)*.5)}@media (min-width:576px){.modal{--bs-modal-margin:1.75rem;--bs-modal-box-shadow:var(--bs-box-shadow)}.modal-dialog{margin-left:auto;margin-right:auto;max-width:var(--bs-modal-width)}.modal-sm{--bs-modal-width:300px}}@media (min-width:992px){.modal-lg,.modal-xl{--bs-modal-width:800px}}@media (min-width:1200px){.modal-xl{--bs-modal-width:1140px}}.modal-fullscreen{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen .modal-footer,.modal-fullscreen .modal-header{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media (max-width:575.98px){.modal-fullscreen-sm-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-sm-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-sm-down .modal-footer,.modal-fullscreen-sm-down .modal-header{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media (max-width:767.98px){.modal-fullscreen-md-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-md-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-md-down .modal-footer,.modal-fullscreen-md-down .modal-header{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media (max-width:991.98px){.modal-fullscreen-lg-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-lg-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-lg-down .modal-footer,.modal-fullscreen-lg-down .modal-header{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media (max-width:1199.98px){.modal-fullscreen-xl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xl-down .modal-footer,.modal-fullscreen-xl-down .modal-header{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media (max-width:1399.98px){.modal-fullscreen-xxl-down{height:100%;margin:0;max-width:none;width:100vw}.modal-fullscreen-xxl-down .modal-content{border:0;border-radius:0;height:100%}.modal-fullscreen-xxl-down .modal-footer,.modal-fullscreen-xxl-down .modal-header{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex:1080;--bs-tooltip-max-width:200px;--bs-tooltip-padding-x:0.5rem;--bs-tooltip-padding-y:0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color:var(--bs-body-bg);--bs-tooltip-bg:var(--bs-emphasis-color);--bs-tooltip-border-radius:var(--bs-border-radius);--bs-tooltip-opacity:0.9;--bs-tooltip-arrow-width:0.8rem;--bs-tooltip-arrow-height:0.4rem;word-wrap:break-word;display:block;font-family:var(--bs-font-sans-serif);font-size:var(--bs-tooltip-font-size);font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;margin:var(--bs-tooltip-margin);opacity:0;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:var(--bs-tooltip-zindex)}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;height:var(--bs-tooltip-arrow-height);width:var(--bs-tooltip-arrow-width)}.tooltip .tooltip-arrow:before{border-color:transparent;border-style:solid;content:\"\";position:absolute}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow,.bs-tooltip-top .tooltip-arrow{bottom:calc(var(--bs-tooltip-arrow-height)*-1)}.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow:before,.bs-tooltip-top .tooltip-arrow:before{border-top-color:var(--bs-tooltip-bg);border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;top:-1px}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow,.bs-tooltip-end .tooltip-arrow{height:var(--bs-tooltip-arrow-width);left:calc(var(--bs-tooltip-arrow-height)*-1);width:var(--bs-tooltip-arrow-height)}.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow:before,.bs-tooltip-end .tooltip-arrow:before{border-right-color:var(--bs-tooltip-bg);border-width:calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;right:-1px}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow,.bs-tooltip-bottom .tooltip-arrow{top:calc(var(--bs-tooltip-arrow-height)*-1)}.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow:before,.bs-tooltip-bottom .tooltip-arrow:before{border-bottom-color:var(--bs-tooltip-bg);border-width:0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);bottom:-1px}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow,.bs-tooltip-start .tooltip-arrow{height:var(--bs-tooltip-arrow-width);right:calc(var(--bs-tooltip-arrow-height)*-1);width:var(--bs-tooltip-arrow-height)}.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow:before,.bs-tooltip-start .tooltip-arrow:before{border-left-color:var(--bs-tooltip-bg);border-width:calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);left:-1px}.tooltip-inner{background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius);color:var(--bs-tooltip-color);max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);text-align:center}.popover{--bs-popover-zindex:1070;--bs-popover-max-width:276px;--bs-popover-font-size:0.875rem;--bs-popover-bg:var(--bs-body-bg);--bs-popover-border-width:var(--bs-border-width);--bs-popover-border-color:var(--bs-border-color-translucent);--bs-popover-border-radius:var(--bs-border-radius-lg);--bs-popover-inner-border-radius:calc(var(--bs-border-radius-lg) - var(--bs-border-width));--bs-popover-box-shadow:var(--bs-box-shadow);--bs-popover-header-padding-x:1rem;--bs-popover-header-padding-y:0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color:inherit;--bs-popover-header-bg:var(--bs-secondary-bg);--bs-popover-body-padding-x:1rem;--bs-popover-body-padding-y:1rem;--bs-popover-body-color:var(--bs-body-color);--bs-popover-arrow-width:1rem;--bs-popover-arrow-height:0.5rem;--bs-popover-arrow-border:var(--bs-popover-border-color);word-wrap:break-word;background-clip:padding-box;background-color:var(--bs-popover-bg);border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius);display:block;font-family:var(--bs-font-sans-serif);font-size:var(--bs-popover-font-size);font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;max-width:var(--bs-popover-max-width);text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;z-index:var(--bs-popover-zindex)}.popover .popover-arrow{display:block;height:var(--bs-popover-arrow-height);width:var(--bs-popover-arrow-width)}.popover .popover-arrow:after,.popover .popover-arrow:before{border:0 solid transparent;content:\"\";display:block;position:absolute}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow,.bs-popover-top>.popover-arrow{bottom:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:after,.bs-popover-top>.popover-arrow:before{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:before,.bs-popover-top>.popover-arrow:before{border-top-color:var(--bs-popover-arrow-border);bottom:0}.bs-popover-auto[data-popper-placement^=top]>.popover-arrow:after,.bs-popover-top>.popover-arrow:after{border-top-color:var(--bs-popover-bg);bottom:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow,.bs-popover-end>.popover-arrow{height:var(--bs-popover-arrow-width);left:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:after,.bs-popover-end>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:before,.bs-popover-end>.popover-arrow:before{border-right-color:var(--bs-popover-arrow-border);left:0}.bs-popover-auto[data-popper-placement^=right]>.popover-arrow:after,.bs-popover-end>.popover-arrow:after{border-right-color:var(--bs-popover-bg);left:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow,.bs-popover-bottom>.popover-arrow{top:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width))}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:before{border-width:0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:before,.bs-popover-bottom>.popover-arrow:before{border-bottom-color:var(--bs-popover-arrow-border);top:0}.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow:after,.bs-popover-bottom>.popover-arrow:after{border-bottom-color:var(--bs-popover-bg);top:var(--bs-popover-border-width)}.bs-popover-auto[data-popper-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before{border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg);content:\"\";display:block;left:50%;margin-left:calc(var(--bs-popover-arrow-width)*-.5);position:absolute;top:0;width:var(--bs-popover-arrow-width)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow,.bs-popover-start>.popover-arrow{height:var(--bs-popover-arrow-width);right:calc((var(--bs-popover-arrow-height))*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:after,.bs-popover-start>.popover-arrow:before{border-width:calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:before,.bs-popover-start>.popover-arrow:before{border-left-color:var(--bs-popover-arrow-border);right:0}.bs-popover-auto[data-popper-placement^=left]>.popover-arrow:after,.bs-popover-start>.popover-arrow:after{border-left-color:var(--bs-popover-bg);right:var(--bs-popover-border-width)}.popover-header{background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius);color:var(--bs-popover-header-color);font-size:var(--bs-popover-header-font-size);margin-bottom:0;padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x)}.popover-header:empty{display:none}.popover-body{color:var(--bs-popover-body-color);padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{overflow:hidden;position:relative;width:100%}.carousel-inner:after{clear:both;content:\"\";display:block}.carousel-item{backface-visibility:hidden;display:none;float:left;margin-right:-100%;position:relative;transition:transform .6s ease-in-out;width:100%}@media (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.active.carousel-item-end,.carousel-item-next:not(.carousel-item-start){transform:translateX(100%)}.active.carousel-item-start,.carousel-item-prev:not(.carousel-item-end){transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transform:none;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end,.carousel-fade .carousel-item.active{opacity:1;z-index:1}.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{opacity:0;transition:opacity 0s .6s;z-index:0}@media (prefers-reduced-motion:reduce){.carousel-fade .active.carousel-item-end,.carousel-fade .active.carousel-item-start{transition:none}}.carousel-control-next,.carousel-control-prev{align-items:center;background:0 0;border:0;bottom:0;color:#fff;display:flex;justify-content:center;opacity:.5;padding:0;position:absolute;text-align:center;top:0;transition:opacity .15s ease;width:15%;z-index:1}@media (prefers-reduced-motion:reduce){.carousel-control-next,.carousel-control-prev{transition:none}}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;opacity:.9;outline:0;text-decoration:none}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{background-position:50%;background-repeat:no-repeat;background-size:100% 100%;display:inline-block;height:2rem;width:2rem}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3E%3C/svg%3E\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3E%3Cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E\")}.carousel-indicators{bottom:0;display:flex;justify-content:center;left:0;margin-bottom:1rem;margin-left:15%;margin-right:15%;padding:0;position:absolute;right:0;z-index:2}.carousel-indicators [data-bs-target]{background-clip:padding-box;background-color:#fff;border:0;border-bottom:10px solid transparent;border-top:10px solid transparent;box-sizing:content-box;cursor:pointer;flex:0 1 auto;height:3px;margin-left:3px;margin-right:3px;opacity:.5;padding:0;text-indent:-999px;transition:opacity .6s ease;width:30px}@media (prefers-reduced-motion:reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{bottom:1.25rem;color:#fff;left:15%;padding-bottom:1.25rem;padding-top:1.25rem;position:absolute;right:15%;text-align:center}.carousel-dark .carousel-control-next-icon,.carousel-dark .carousel-control-prev-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}[data-bs-theme=dark] .carousel .carousel-control-next-icon,[data-bs-theme=dark] .carousel .carousel-control-prev-icon,[data-bs-theme=dark].carousel .carousel-control-next-icon,[data-bs-theme=dark].carousel .carousel-control-prev-icon{filter:invert(1) grayscale(100)}[data-bs-theme=dark] .carousel .carousel-indicators [data-bs-target],[data-bs-theme=dark].carousel .carousel-indicators [data-bs-target]{background-color:#000}[data-bs-theme=dark] .carousel .carousel-caption,[data-bs-theme=dark].carousel .carousel-caption{color:#000}.spinner-border,.spinner-grow{animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name);border-radius:50%;display:inline-block;height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);width:var(--bs-spinner-width)}@keyframes spinner-border{to{transform:rotate(1turn)}}.spinner-border{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-border-width:0.25em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-border;border-right-color:currentcolor;border:var(--bs-spinner-border-width) solid;border-right:var(--bs-spinner-border-width) solid transparent}.spinner-border-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem;--bs-spinner-border-width:0.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width:2rem;--bs-spinner-height:2rem;--bs-spinner-vertical-align:-0.125em;--bs-spinner-animation-speed:0.75s;--bs-spinner-animation-name:spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width:1rem;--bs-spinner-height:1rem}@media (prefers-reduced-motion:reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed:1.5s}}.offcanvas,.offcanvas-lg,.offcanvas-md,.offcanvas-sm,.offcanvas-xl,.offcanvas-xxl{--bs-offcanvas-zindex:1045;--bs-offcanvas-width:400px;--bs-offcanvas-height:30vh;--bs-offcanvas-padding-x:1rem;--bs-offcanvas-padding-y:1rem;--bs-offcanvas-color:var(--bs-body-color);--bs-offcanvas-bg:var(--bs-body-bg);--bs-offcanvas-border-width:var(--bs-border-width);--bs-offcanvas-border-color:var(--bs-border-color-translucent);--bs-offcanvas-box-shadow:var(--bs-box-shadow-sm);--bs-offcanvas-transition:transform 0.3s ease-in-out;--bs-offcanvas-title-line-height:1.5}@media (max-width:575.98px){.offcanvas-sm{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:575.98px) and (prefers-reduced-motion:reduce){.offcanvas-sm{transition:none}}@media (max-width:575.98px){.offcanvas-sm.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-sm.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-sm.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-sm.offcanvas-bottom,.offcanvas-sm.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-sm.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-sm.show:not(.hiding),.offcanvas-sm.showing{transform:none}.offcanvas-sm.hiding,.offcanvas-sm.show,.offcanvas-sm.showing{visibility:visible}}@media (min-width:576px){.offcanvas-sm{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:767.98px){.offcanvas-md{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:767.98px) and (prefers-reduced-motion:reduce){.offcanvas-md{transition:none}}@media (max-width:767.98px){.offcanvas-md.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-md.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-md.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-md.offcanvas-bottom,.offcanvas-md.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-md.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-md.show:not(.hiding),.offcanvas-md.showing{transform:none}.offcanvas-md.hiding,.offcanvas-md.show,.offcanvas-md.showing{visibility:visible}}@media (min-width:768px){.offcanvas-md{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:991.98px){.offcanvas-lg{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:991.98px) and (prefers-reduced-motion:reduce){.offcanvas-lg{transition:none}}@media (max-width:991.98px){.offcanvas-lg.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-lg.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-lg.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-lg.offcanvas-bottom,.offcanvas-lg.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-lg.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-lg.show:not(.hiding),.offcanvas-lg.showing{transform:none}.offcanvas-lg.hiding,.offcanvas-lg.show,.offcanvas-lg.showing{visibility:visible}}@media (min-width:992px){.offcanvas-lg{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:1199.98px){.offcanvas-xl{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:1199.98px) and (prefers-reduced-motion:reduce){.offcanvas-xl{transition:none}}@media (max-width:1199.98px){.offcanvas-xl.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-xl.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-xl.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-xl.offcanvas-bottom,.offcanvas-xl.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-xl.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xl.show:not(.hiding),.offcanvas-xl.showing{transform:none}.offcanvas-xl.hiding,.offcanvas-xl.show,.offcanvas-xl.showing{visibility:visible}}@media (min-width:1200px){.offcanvas-xl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}@media (max-width:1399.98px){.offcanvas-xxl{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}}@media (max-width:1399.98px) and (prefers-reduced-motion:reduce){.offcanvas-xxl{transition:none}}@media (max-width:1399.98px){.offcanvas-xxl.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas-xxl.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas-xxl.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas-xxl.offcanvas-bottom,.offcanvas-xxl.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas-xxl.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas-xxl.show:not(.hiding),.offcanvas-xxl.showing{transform:none}.offcanvas-xxl.hiding,.offcanvas-xxl.show,.offcanvas-xxl.showing{visibility:visible}}@media (min-width:1400px){.offcanvas-xxl{--bs-offcanvas-height:auto;--bs-offcanvas-border-width:0;background-color:transparent!important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{background-color:transparent!important;display:flex;flex-grow:0;overflow-y:visible;padding:0}}.offcanvas{background-clip:padding-box;background-color:var(--bs-offcanvas-bg);bottom:0;color:var(--bs-offcanvas-color);display:flex;flex-direction:column;max-width:100%;outline:0;position:fixed;transition:var(--bs-offcanvas-transition);visibility:hidden;z-index:var(--bs-offcanvas-zindex)}@media (prefers-reduced-motion:reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);left:0;top:0;transform:translateX(-100%);width:var(--bs-offcanvas-width)}.offcanvas.offcanvas-end{border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);right:0;top:0;transform:translateX(100%);width:var(--bs-offcanvas-width)}.offcanvas.offcanvas-top{border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);top:0;transform:translateY(-100%)}.offcanvas.offcanvas-bottom,.offcanvas.offcanvas-top{height:var(--bs-offcanvas-height);left:0;max-height:100%;right:0}.offcanvas.offcanvas-bottom{border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.show:not(.hiding),.offcanvas.showing{transform:none}.offcanvas.hiding,.offcanvas.show,.offcanvas.showing{visibility:visible}.offcanvas-backdrop{background-color:#000;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1040}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{align-items:center;display:flex;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{margin-bottom:calc(var(--bs-offcanvas-padding-y)*-.5);margin-right:calc(var(--bs-offcanvas-padding-x)*-.5);margin-top:calc(var(--bs-offcanvas-padding-y)*-.5);padding:calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5)}.offcanvas-title{line-height:var(--bs-offcanvas-title-line-height);margin-bottom:0}.offcanvas-body{flex-grow:1;overflow-y:auto;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.placeholder{background-color:currentcolor;cursor:wait;display:inline-block;min-height:1em;opacity:.5;vertical-align:middle}.placeholder.btn:before{content:\"\";display:inline-block}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{animation:placeholder-wave 2s linear infinite;-webkit-mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);mask-image:linear-gradient(130deg,#000 55%,rgba(0,0,0,.8) 75%,#000 95%);-webkit-mask-size:200% 100%;mask-size:200% 100%}@keyframes placeholder-wave{to{-webkit-mask-position:-200% 0;mask-position:-200% 0}}.clearfix:after{clear:both;content:\"\";display:block}.text-bg-primary{background-color:RGBA(var(--bs-primary-rgb),var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-secondary{background-color:RGBA(var(--bs-secondary-rgb),var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-success{background-color:RGBA(var(--bs-success-rgb),var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-info{background-color:RGBA(var(--bs-info-rgb),var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-warning{background-color:RGBA(var(--bs-warning-rgb),var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-danger{background-color:RGBA(var(--bs-danger-rgb),var(--bs-bg-opacity,1))!important;color:#fff!important}.text-bg-light{background-color:RGBA(var(--bs-light-rgb),var(--bs-bg-opacity,1))!important;color:#000!important}.text-bg-dark{background-color:RGBA(var(--bs-dark-rgb),var(--bs-bg-opacity,1))!important;color:#fff!important}.link-primary{color:RGBA(var(--bs-primary-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-primary-rgb),var(--bs-link-underline-opacity,1))!important}.link-primary:focus,.link-primary:hover{color:RGBA(10,88,202,var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(10,88,202,var(--bs-link-underline-opacity,1))!important}.link-secondary{color:RGBA(var(--bs-secondary-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-secondary-rgb),var(--bs-link-underline-opacity,1))!important}.link-secondary:focus,.link-secondary:hover{color:RGBA(86,94,100,var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(86,94,100,var(--bs-link-underline-opacity,1))!important}.link-success{color:RGBA(var(--bs-success-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-success-rgb),var(--bs-link-underline-opacity,1))!important}.link-success:focus,.link-success:hover{color:RGBA(20,108,67,var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(20,108,67,var(--bs-link-underline-opacity,1))!important}.link-info{color:RGBA(var(--bs-info-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-info-rgb),var(--bs-link-underline-opacity,1))!important}.link-info:focus,.link-info:hover{color:RGBA(61,213,243,var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(61,213,243,var(--bs-link-underline-opacity,1))!important}.link-warning{color:RGBA(var(--bs-warning-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-warning-rgb),var(--bs-link-underline-opacity,1))!important}.link-warning:focus,.link-warning:hover{color:RGBA(255,205,57,var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(255,205,57,var(--bs-link-underline-opacity,1))!important}.link-danger{color:RGBA(var(--bs-danger-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-danger-rgb),var(--bs-link-underline-opacity,1))!important}.link-danger:focus,.link-danger:hover{color:RGBA(176,42,55,var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(176,42,55,var(--bs-link-underline-opacity,1))!important}.link-light{color:RGBA(var(--bs-light-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-light-rgb),var(--bs-link-underline-opacity,1))!important}.link-light:focus,.link-light:hover{color:RGBA(249,250,251,var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(249,250,251,var(--bs-link-underline-opacity,1))!important}.link-dark{color:RGBA(var(--bs-dark-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-dark-rgb),var(--bs-link-underline-opacity,1))!important}.link-dark:focus,.link-dark:hover{color:RGBA(26,30,33,var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(26,30,33,var(--bs-link-underline-opacity,1))!important}.link-body-emphasis{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,1))!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-body-emphasis:focus,.link-body-emphasis:hover{color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-opacity,.75))!important;text-decoration-color:RGBA(var(--bs-emphasis-color-rgb),var(--bs-link-underline-opacity,.75))!important}.focus-ring:focus{box-shadow:var(--bs-focus-ring-x,0) var(--bs-focus-ring-y,0) var(--bs-focus-ring-blur,0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);outline:0}.icon-link{align-items:center;backface-visibility:hidden;display:inline-flex;gap:.375rem;text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-opacity,.5));text-underline-offset:.25em}.icon-link>.bi{fill:currentcolor;flex-shrink:0;height:1em;transition:transform .2s ease-in-out;width:1em}@media (prefers-reduced-motion:reduce){.icon-link>.bi{transition:none}}.icon-link-hover:focus-visible>.bi,.icon-link-hover:hover>.bi{transform:var(--bs-icon-link-transform,translate3d(.25em,0,0))}.ratio{position:relative;width:100%}.ratio:before{content:\"\";display:block;padding-top:var(--bs-aspect-ratio)}.ratio>*{height:100%;left:0;position:absolute;top:0;width:100%}.ratio-1x1{--bs-aspect-ratio:100%}.ratio-4x3{--bs-aspect-ratio:75%}.ratio-16x9{--bs-aspect-ratio:56.25%}.ratio-21x9{--bs-aspect-ratio:42.8571428571%}.fixed-top{top:0}.fixed-bottom,.fixed-top{left:0;position:fixed;right:0;z-index:1030}.fixed-bottom{bottom:0}.sticky-top{top:0}.sticky-bottom,.sticky-top{position:sticky;z-index:1020}.sticky-bottom{bottom:0}@media (min-width:576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}.sticky-sm-bottom{bottom:0;position:sticky;z-index:1020}}@media (min-width:768px){.sticky-md-top{position:sticky;top:0;z-index:1020}.sticky-md-bottom{bottom:0;position:sticky;z-index:1020}}@media (min-width:992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}.sticky-lg-bottom{bottom:0;position:sticky;z-index:1020}}@media (min-width:1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}.sticky-xl-bottom{bottom:0;position:sticky;z-index:1020}}@media (min-width:1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{bottom:0;position:sticky;z-index:1020}}.hstack{align-items:center;flex-direction:row}.hstack,.vstack{align-self:stretch;display:flex}.vstack{flex:1 1 auto;flex-direction:column}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){clip:rect(0,0,0,0)!important;border:0!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;white-space:nowrap!important;width:1px!important}.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption),.visually-hidden:not(caption){position:absolute!important}.stretched-link:after{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:1}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{align-self:stretch;background-color:currentcolor;display:inline-block;min-height:1em;opacity:.25;width:var(--bs-border-width)}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.float-start{float:left!important}.float-end{float:right!important}.float-none{float:none!important}.object-fit-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-none{-o-object-fit:none!important;object-fit:none!important}.opacity-0{opacity:0!important}.opacity-25{opacity:.25!important}.opacity-50{opacity:.5!important}.opacity-75{opacity:.75!important}.opacity-100{opacity:1!important}.overflow-auto{overflow:auto!important}.overflow-hidden{overflow:hidden!important}.overflow-visible{overflow:visible!important}.overflow-scroll{overflow:scroll!important}.overflow-x-auto{overflow-x:auto!important}.overflow-x-hidden{overflow-x:hidden!important}.overflow-x-visible{overflow-x:visible!important}.overflow-x-scroll{overflow-x:scroll!important}.overflow-y-auto{overflow-y:auto!important}.overflow-y-hidden{overflow-y:hidden!important}.overflow-y-visible{overflow-y:visible!important}.overflow-y-scroll{overflow-y:scroll!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-grid{display:grid!important}.d-inline-grid{display:inline-grid!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:flex!important}.d-inline-flex{display:inline-flex!important}.d-none{display:none!important}.shadow{box-shadow:var(--bs-box-shadow)!important}.shadow-sm{box-shadow:var(--bs-box-shadow-sm)!important}.shadow-lg{box-shadow:var(--bs-box-shadow-lg)!important}.shadow-none{box-shadow:none!important}.focus-ring-primary{--bs-focus-ring-color:rgba(var(--bs-primary-rgb),var(--bs-focus-ring-opacity))}.focus-ring-secondary{--bs-focus-ring-color:rgba(var(--bs-secondary-rgb),var(--bs-focus-ring-opacity))}.focus-ring-success{--bs-focus-ring-color:rgba(var(--bs-success-rgb),var(--bs-focus-ring-opacity))}.focus-ring-info{--bs-focus-ring-color:rgba(var(--bs-info-rgb),var(--bs-focus-ring-opacity))}.focus-ring-warning{--bs-focus-ring-color:rgba(var(--bs-warning-rgb),var(--bs-focus-ring-opacity))}.focus-ring-danger{--bs-focus-ring-color:rgba(var(--bs-danger-rgb),var(--bs-focus-ring-opacity))}.focus-ring-light{--bs-focus-ring-color:rgba(var(--bs-light-rgb),var(--bs-focus-ring-opacity))}.focus-ring-dark{--bs-focus-ring-color:rgba(var(--bs-dark-rgb),var(--bs-focus-ring-opacity))}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:sticky!important}.top-0{top:0!important}.top-50{top:50%!important}.top-100{top:100%!important}.bottom-0{bottom:0!important}.bottom-50{bottom:50%!important}.bottom-100{bottom:100%!important}.start-0{left:0!important}.start-50{left:50%!important}.start-100{left:100%!important}.end-0{right:0!important}.end-50{right:50%!important}.end-100{right:100%!important}.translate-middle{transform:translate(-50%,-50%)!important}.translate-middle-x{transform:translateX(-50%)!important}.translate-middle-y{transform:translateY(-50%)!important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-0{border:0!important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-top-0{border-top:0!important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-end-0{border-right:0!important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-bottom-0{border-bottom:0!important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color)!important}.border-start-0{border-left:0!important}.border-primary{--bs-border-opacity:1;border-color:rgba(var(--bs-primary-rgb),var(--bs-border-opacity))!important}.border-secondary{--bs-border-opacity:1;border-color:rgba(var(--bs-secondary-rgb),var(--bs-border-opacity))!important}.border-success{--bs-border-opacity:1;border-color:rgba(var(--bs-success-rgb),var(--bs-border-opacity))!important}.border-info{--bs-border-opacity:1;border-color:rgba(var(--bs-info-rgb),var(--bs-border-opacity))!important}.border-warning{--bs-border-opacity:1;border-color:rgba(var(--bs-warning-rgb),var(--bs-border-opacity))!important}.border-danger{--bs-border-opacity:1;border-color:rgba(var(--bs-danger-rgb),var(--bs-border-opacity))!important}.border-light{--bs-border-opacity:1;border-color:rgba(var(--bs-light-rgb),var(--bs-border-opacity))!important}.border-dark{--bs-border-opacity:1;border-color:rgba(var(--bs-dark-rgb),var(--bs-border-opacity))!important}.border-black{--bs-border-opacity:1;border-color:rgba(var(--bs-black-rgb),var(--bs-border-opacity))!important}.border-white{--bs-border-opacity:1;border-color:rgba(var(--bs-white-rgb),var(--bs-border-opacity))!important}.border-primary-subtle{border-color:var(--bs-primary-border-subtle)!important}.border-secondary-subtle{border-color:var(--bs-secondary-border-subtle)!important}.border-success-subtle{border-color:var(--bs-success-border-subtle)!important}.border-info-subtle{border-color:var(--bs-info-border-subtle)!important}.border-warning-subtle{border-color:var(--bs-warning-border-subtle)!important}.border-danger-subtle{border-color:var(--bs-danger-border-subtle)!important}.border-light-subtle{border-color:var(--bs-light-border-subtle)!important}.border-dark-subtle{border-color:var(--bs-dark-border-subtle)!important}.border-1{border-width:1px!important}.border-2{border-width:2px!important}.border-3{border-width:3px!important}.border-4{border-width:4px!important}.border-5{border-width:5px!important}.border-opacity-10{--bs-border-opacity:0.1}.border-opacity-25{--bs-border-opacity:0.25}.border-opacity-50{--bs-border-opacity:0.5}.border-opacity-75{--bs-border-opacity:0.75}.border-opacity-100{--bs-border-opacity:1}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.mw-100{max-width:100%!important}.vw-100{width:100vw!important}.min-vw-100{min-width:100vw!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mh-100{max-height:100%!important}.vh-100{height:100vh!important}.min-vh-100{min-height:100vh!important}.flex-fill{flex:1 1 auto!important}.flex-row{flex-direction:row!important}.flex-column{flex-direction:column!important}.flex-row-reverse{flex-direction:row-reverse!important}.flex-column-reverse{flex-direction:column-reverse!important}.flex-grow-0{flex-grow:0!important}.flex-grow-1{flex-grow:1!important}.flex-shrink-0{flex-shrink:0!important}.flex-shrink-1{flex-shrink:1!important}.flex-wrap{flex-wrap:wrap!important}.flex-nowrap{flex-wrap:nowrap!important}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.justify-content-center{justify-content:center!important}.justify-content-between{justify-content:space-between!important}.justify-content-around{justify-content:space-around!important}.justify-content-evenly{justify-content:space-evenly!important}.align-items-start{align-items:flex-start!important}.align-items-end{align-items:flex-end!important}.align-items-center{align-items:center!important}.align-items-baseline{align-items:baseline!important}.align-items-stretch{align-items:stretch!important}.align-content-start{align-content:flex-start!important}.align-content-end{align-content:flex-end!important}.align-content-center{align-content:center!important}.align-content-between{align-content:space-between!important}.align-content-around{align-content:space-around!important}.align-content-stretch{align-content:stretch!important}.align-self-auto{align-self:auto!important}.align-self-start{align-self:flex-start!important}.align-self-end{align-self:flex-end!important}.align-self-center{align-self:center!important}.align-self-baseline{align-self:baseline!important}.align-self-stretch{align-self:stretch!important}.order-first{order:-1!important}.order-0{order:0!important}.order-1{order:1!important}.order-2{order:2!important}.order-3{order:3!important}.order-4{order:4!important}.order-5{order:5!important}.order-last{order:6!important}.m-0{margin:0!important}.m-1{margin:.25rem!important}.m-2{margin:.5rem!important}.m-3{margin:1rem!important}.m-4{margin:1.5rem!important}.m-5{margin:3rem!important}.m-auto{margin:auto!important}.mx-0{margin-left:0!important;margin-right:0!important}.mx-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-3{margin-left:1rem!important;margin-right:1rem!important}.mx-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-5{margin-left:3rem!important;margin-right:3rem!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.my-0{margin-bottom:0!important;margin-top:0!important}.my-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mt-2{margin-top:.5rem!important}.mt-3{margin-top:1rem!important}.mt-4{margin-top:1.5rem!important}.mt-5{margin-top:3rem!important}.mt-auto{margin-top:auto!important}.me-0{margin-right:0!important}.me-1{margin-right:.25rem!important}.me-2{margin-right:.5rem!important}.me-3{margin-right:1rem!important}.me-4{margin-right:1.5rem!important}.me-5{margin-right:3rem!important}.me-auto{margin-right:auto!important}.mb-0{margin-bottom:0!important}.mb-1{margin-bottom:.25rem!important}.mb-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mb-4{margin-bottom:1.5rem!important}.mb-5{margin-bottom:3rem!important}.mb-auto{margin-bottom:auto!important}.ms-0{margin-left:0!important}.ms-1{margin-left:.25rem!important}.ms-2{margin-left:.5rem!important}.ms-3{margin-left:1rem!important}.ms-4{margin-left:1.5rem!important}.ms-5{margin-left:3rem!important}.ms-auto{margin-left:auto!important}.p-0{padding:0!important}.p-1{padding:.25rem!important}.p-2{padding:.5rem!important}.p-3{padding:1rem!important}.p-4{padding:1.5rem!important}.p-5{padding:3rem!important}.px-0{padding-left:0!important;padding-right:0!important}.px-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-3{padding-left:1rem!important;padding-right:1rem!important}.px-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-5{padding-left:3rem!important;padding-right:3rem!important}.py-0{padding-bottom:0!important;padding-top:0!important}.py-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-0{padding-top:0!important}.pt-1{padding-top:.25rem!important}.pt-2{padding-top:.5rem!important}.pt-3{padding-top:1rem!important}.pt-4{padding-top:1.5rem!important}.pt-5{padding-top:3rem!important}.pe-0{padding-right:0!important}.pe-1{padding-right:.25rem!important}.pe-2{padding-right:.5rem!important}.pe-3{padding-right:1rem!important}.pe-4{padding-right:1.5rem!important}.pe-5{padding-right:3rem!important}.pb-0{padding-bottom:0!important}.pb-1{padding-bottom:.25rem!important}.pb-2{padding-bottom:.5rem!important}.pb-3{padding-bottom:1rem!important}.pb-4{padding-bottom:1.5rem!important}.pb-5{padding-bottom:3rem!important}.ps-0{padding-left:0!important}.ps-1{padding-left:.25rem!important}.ps-2{padding-left:.5rem!important}.ps-3{padding-left:1rem!important}.ps-4{padding-left:1.5rem!important}.ps-5{padding-left:3rem!important}.gap-0{gap:0!important}.gap-1{gap:.25rem!important}.gap-2{gap:.5rem!important}.gap-3{gap:1rem!important}.gap-4{gap:1.5rem!important}.gap-5{gap:3rem!important}.row-gap-0{row-gap:0!important}.row-gap-1{row-gap:.25rem!important}.row-gap-2{row-gap:.5rem!important}.row-gap-3{row-gap:1rem!important}.row-gap-4{row-gap:1.5rem!important}.row-gap-5{row-gap:3rem!important}.column-gap-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.font-monospace{font-family:var(--bs-font-monospace)!important}.fs-1{font-size:calc(1.375rem + 1.5vw)!important}.fs-2{font-size:calc(1.325rem + .9vw)!important}.fs-3{font-size:calc(1.3rem + .6vw)!important}.fs-4{font-size:calc(1.275rem + .3vw)!important}.fs-5{font-size:1.25rem!important}.fs-6{font-size:1rem!important}.fst-italic{font-style:italic!important}.fst-normal{font-style:normal!important}.fw-lighter{font-weight:lighter!important}.fw-light{font-weight:300!important}.fw-normal{font-weight:400!important}.fw-medium{font-weight:500!important}.fw-semibold{font-weight:600!important}.fw-bold{font-weight:700!important}.fw-bolder{font-weight:bolder!important}.lh-1{line-height:1!important}.lh-sm{line-height:1.25!important}.lh-base{line-height:1.5!important}.lh-lg{line-height:2!important}.text-start{text-align:left!important}.text-end{text-align:right!important}.text-center{text-align:center!important}.text-decoration-none{text-decoration:none!important}.text-decoration-underline{text-decoration:underline!important}.text-decoration-line-through{text-decoration:line-through!important}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.text-wrap{white-space:normal!important}.text-nowrap{white-space:nowrap!important}.text-break{word-wrap:break-word!important;word-break:break-word!important}.text-primary{--bs-text-opacity:1;color:rgba(var(--bs-primary-rgb),var(--bs-text-opacity))!important}.text-secondary{--bs-text-opacity:1;color:rgba(var(--bs-secondary-rgb),var(--bs-text-opacity))!important}.text-success{--bs-text-opacity:1;color:rgba(var(--bs-success-rgb),var(--bs-text-opacity))!important}.text-info{--bs-text-opacity:1;color:rgba(var(--bs-info-rgb),var(--bs-text-opacity))!important}.text-warning{--bs-text-opacity:1;color:rgba(var(--bs-warning-rgb),var(--bs-text-opacity))!important}.text-danger{--bs-text-opacity:1;color:rgba(var(--bs-danger-rgb),var(--bs-text-opacity))!important}.text-light{--bs-text-opacity:1;color:rgba(var(--bs-light-rgb),var(--bs-text-opacity))!important}.text-dark{--bs-text-opacity:1;color:rgba(var(--bs-dark-rgb),var(--bs-text-opacity))!important}.text-black{--bs-text-opacity:1;color:rgba(var(--bs-black-rgb),var(--bs-text-opacity))!important}.text-white{--bs-text-opacity:1;color:rgba(var(--bs-white-rgb),var(--bs-text-opacity))!important}.text-body{--bs-text-opacity:1;color:rgba(var(--bs-body-color-rgb),var(--bs-text-opacity))!important}.text-muted{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}.text-black-50{--bs-text-opacity:1;color:rgba(0,0,0,.5)!important}.text-white-50{--bs-text-opacity:1;color:hsla(0,0%,100%,.5)!important}.text-body-secondary{--bs-text-opacity:1;color:var(--bs-secondary-color)!important}.text-body-tertiary{--bs-text-opacity:1;color:var(--bs-tertiary-color)!important}.text-body-emphasis{--bs-text-opacity:1;color:var(--bs-emphasis-color)!important}.text-reset{--bs-text-opacity:1;color:inherit!important}.text-opacity-25{--bs-text-opacity:0.25}.text-opacity-50{--bs-text-opacity:0.5}.text-opacity-75{--bs-text-opacity:0.75}.text-opacity-100{--bs-text-opacity:1}.text-primary-emphasis{color:var(--bs-primary-text-emphasis)!important}.text-secondary-emphasis{color:var(--bs-secondary-text-emphasis)!important}.text-success-emphasis{color:var(--bs-success-text-emphasis)!important}.text-info-emphasis{color:var(--bs-info-text-emphasis)!important}.text-warning-emphasis{color:var(--bs-warning-text-emphasis)!important}.text-danger-emphasis{color:var(--bs-danger-text-emphasis)!important}.text-light-emphasis{color:var(--bs-light-text-emphasis)!important}.text-dark-emphasis{color:var(--bs-dark-text-emphasis)!important}.link-opacity-10,.link-opacity-10-hover:hover{--bs-link-opacity:0.1}.link-opacity-25,.link-opacity-25-hover:hover{--bs-link-opacity:0.25}.link-opacity-50,.link-opacity-50-hover:hover{--bs-link-opacity:0.5}.link-opacity-75,.link-opacity-75-hover:hover{--bs-link-opacity:0.75}.link-opacity-100,.link-opacity-100-hover:hover{--bs-link-opacity:1}.link-offset-1,.link-offset-1-hover:hover{text-underline-offset:.125em!important}.link-offset-2,.link-offset-2-hover:hover{text-underline-offset:.25em!important}.link-offset-3,.link-offset-3-hover:hover{text-underline-offset:.375em!important}.link-underline-primary{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-primary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-secondary{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-secondary-rgb),var(--bs-link-underline-opacity))!important}.link-underline-success{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-success-rgb),var(--bs-link-underline-opacity))!important}.link-underline-info{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-info-rgb),var(--bs-link-underline-opacity))!important}.link-underline-warning{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-warning-rgb),var(--bs-link-underline-opacity))!important}.link-underline-danger{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-danger-rgb),var(--bs-link-underline-opacity))!important}.link-underline-light{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-light-rgb),var(--bs-link-underline-opacity))!important}.link-underline-dark{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-dark-rgb),var(--bs-link-underline-opacity))!important}.link-underline{--bs-link-underline-opacity:1;text-decoration-color:rgba(var(--bs-link-color-rgb),var(--bs-link-underline-opacity,1))!important}.link-underline-opacity-0,.link-underline-opacity-0-hover:hover{--bs-link-underline-opacity:0}.link-underline-opacity-10,.link-underline-opacity-10-hover:hover{--bs-link-underline-opacity:0.1}.link-underline-opacity-25,.link-underline-opacity-25-hover:hover{--bs-link-underline-opacity:0.25}.link-underline-opacity-50,.link-underline-opacity-50-hover:hover{--bs-link-underline-opacity:0.5}.link-underline-opacity-75,.link-underline-opacity-75-hover:hover{--bs-link-underline-opacity:0.75}.link-underline-opacity-100,.link-underline-opacity-100-hover:hover{--bs-link-underline-opacity:1}.bg-primary{--bs-bg-opacity:1;background-color:rgba(var(--bs-primary-rgb),var(--bs-bg-opacity))!important}.bg-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-rgb),var(--bs-bg-opacity))!important}.bg-success{--bs-bg-opacity:1;background-color:rgba(var(--bs-success-rgb),var(--bs-bg-opacity))!important}.bg-info{--bs-bg-opacity:1;background-color:rgba(var(--bs-info-rgb),var(--bs-bg-opacity))!important}.bg-warning{--bs-bg-opacity:1;background-color:rgba(var(--bs-warning-rgb),var(--bs-bg-opacity))!important}.bg-danger{--bs-bg-opacity:1;background-color:rgba(var(--bs-danger-rgb),var(--bs-bg-opacity))!important}.bg-light{--bs-bg-opacity:1;background-color:rgba(var(--bs-light-rgb),var(--bs-bg-opacity))!important}.bg-dark{--bs-bg-opacity:1;background-color:rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important}.bg-black{--bs-bg-opacity:1;background-color:rgba(var(--bs-black-rgb),var(--bs-bg-opacity))!important}.bg-white{--bs-bg-opacity:1;background-color:rgba(var(--bs-white-rgb),var(--bs-bg-opacity))!important}.bg-body{--bs-bg-opacity:1;background-color:rgba(var(--bs-body-bg-rgb),var(--bs-bg-opacity))!important}.bg-transparent{--bs-bg-opacity:1;background-color:transparent!important}.bg-body-secondary{--bs-bg-opacity:1;background-color:rgba(var(--bs-secondary-bg-rgb),var(--bs-bg-opacity))!important}.bg-body-tertiary{--bs-bg-opacity:1;background-color:rgba(var(--bs-tertiary-bg-rgb),var(--bs-bg-opacity))!important}.bg-opacity-10{--bs-bg-opacity:0.1}.bg-opacity-25{--bs-bg-opacity:0.25}.bg-opacity-50{--bs-bg-opacity:0.5}.bg-opacity-75{--bs-bg-opacity:0.75}.bg-opacity-100{--bs-bg-opacity:1}.bg-primary-subtle{background-color:var(--bs-primary-bg-subtle)!important}.bg-secondary-subtle{background-color:var(--bs-secondary-bg-subtle)!important}.bg-success-subtle{background-color:var(--bs-success-bg-subtle)!important}.bg-info-subtle{background-color:var(--bs-info-bg-subtle)!important}.bg-warning-subtle{background-color:var(--bs-warning-bg-subtle)!important}.bg-danger-subtle{background-color:var(--bs-danger-bg-subtle)!important}.bg-light-subtle{background-color:var(--bs-light-bg-subtle)!important}.bg-dark-subtle{background-color:var(--bs-dark-bg-subtle)!important}.bg-gradient{background-image:var(--bs-gradient)!important}.user-select-all{-webkit-user-select:all!important;-moz-user-select:all!important;user-select:all!important}.user-select-auto{-webkit-user-select:auto!important;-moz-user-select:auto!important;user-select:auto!important}.user-select-none{-webkit-user-select:none!important;-moz-user-select:none!important;user-select:none!important}.pe-none{pointer-events:none!important}.pe-auto{pointer-events:auto!important}.rounded{border-radius:var(--bs-border-radius)!important}.rounded-0{border-radius:0!important}.rounded-1{border-radius:var(--bs-border-radius-sm)!important}.rounded-2{border-radius:var(--bs-border-radius)!important}.rounded-3{border-radius:var(--bs-border-radius-lg)!important}.rounded-4{border-radius:var(--bs-border-radius-xl)!important}.rounded-5{border-radius:var(--bs-border-radius-xxl)!important}.rounded-circle{border-radius:50%!important}.rounded-pill{border-radius:var(--bs-border-radius-pill)!important}.rounded-top{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-0{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-top-1{border-top-left-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-top-2{border-top-left-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-top-3{border-top-left-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-top-4{border-top-left-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-top-5{border-top-left-radius:var(--bs-border-radius-xxl)!important;border-top-right-radius:var(--bs-border-radius-xxl)!important}.rounded-top-circle{border-top-left-radius:50%!important;border-top-right-radius:50%!important}.rounded-top-pill{border-top-left-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-end{border-bottom-right-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-end-0{border-bottom-right-radius:0!important;border-top-right-radius:0!important}.rounded-end-1{border-bottom-right-radius:var(--bs-border-radius-sm)!important;border-top-right-radius:var(--bs-border-radius-sm)!important}.rounded-end-2{border-bottom-right-radius:var(--bs-border-radius)!important;border-top-right-radius:var(--bs-border-radius)!important}.rounded-end-3{border-bottom-right-radius:var(--bs-border-radius-lg)!important;border-top-right-radius:var(--bs-border-radius-lg)!important}.rounded-end-4{border-bottom-right-radius:var(--bs-border-radius-xl)!important;border-top-right-radius:var(--bs-border-radius-xl)!important}.rounded-end-5{border-bottom-right-radius:var(--bs-border-radius-xxl)!important;border-top-right-radius:var(--bs-border-radius-xxl)!important}.rounded-end-circle{border-bottom-right-radius:50%!important;border-top-right-radius:50%!important}.rounded-end-pill{border-bottom-right-radius:var(--bs-border-radius-pill)!important;border-top-right-radius:var(--bs-border-radius-pill)!important}.rounded-bottom{border-bottom-left-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-bottom-0{border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.rounded-bottom-1{border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-bottom-right-radius:var(--bs-border-radius-sm)!important}.rounded-bottom-2{border-bottom-left-radius:var(--bs-border-radius)!important;border-bottom-right-radius:var(--bs-border-radius)!important}.rounded-bottom-3{border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-bottom-right-radius:var(--bs-border-radius-lg)!important}.rounded-bottom-4{border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-bottom-right-radius:var(--bs-border-radius-xl)!important}.rounded-bottom-5{border-bottom-left-radius:var(--bs-border-radius-xxl)!important;border-bottom-right-radius:var(--bs-border-radius-xxl)!important}.rounded-bottom-circle{border-bottom-left-radius:50%!important;border-bottom-right-radius:50%!important}.rounded-bottom-pill{border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-bottom-right-radius:var(--bs-border-radius-pill)!important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-0{border-bottom-left-radius:0!important;border-top-left-radius:0!important}.rounded-start-1{border-bottom-left-radius:var(--bs-border-radius-sm)!important;border-top-left-radius:var(--bs-border-radius-sm)!important}.rounded-start-2{border-bottom-left-radius:var(--bs-border-radius)!important;border-top-left-radius:var(--bs-border-radius)!important}.rounded-start-3{border-bottom-left-radius:var(--bs-border-radius-lg)!important;border-top-left-radius:var(--bs-border-radius-lg)!important}.rounded-start-4{border-bottom-left-radius:var(--bs-border-radius-xl)!important;border-top-left-radius:var(--bs-border-radius-xl)!important}.rounded-start-5{border-bottom-left-radius:var(--bs-border-radius-xxl)!important;border-top-left-radius:var(--bs-border-radius-xxl)!important}.rounded-start-circle{border-bottom-left-radius:50%!important;border-top-left-radius:50%!important}.rounded-start-pill{border-bottom-left-radius:var(--bs-border-radius-pill)!important;border-top-left-radius:var(--bs-border-radius-pill)!important}.visible{visibility:visible!important}.invisible{visibility:hidden!important}.z-n1{z-index:-1!important}.z-0{z-index:0!important}.z-1{z-index:1!important}.z-2{z-index:2!important}.z-3{z-index:3!important}@media (min-width:576px){.float-sm-start{float:left!important}.float-sm-end{float:right!important}.float-sm-none{float:none!important}.object-fit-sm-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-sm-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-sm-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-sm-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-sm-none{-o-object-fit:none!important;object-fit:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-grid{display:grid!important}.d-sm-inline-grid{display:inline-grid!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:flex!important}.d-sm-inline-flex{display:inline-flex!important}.d-sm-none{display:none!important}.flex-sm-fill{flex:1 1 auto!important}.flex-sm-row{flex-direction:row!important}.flex-sm-column{flex-direction:column!important}.flex-sm-row-reverse{flex-direction:row-reverse!important}.flex-sm-column-reverse{flex-direction:column-reverse!important}.flex-sm-grow-0{flex-grow:0!important}.flex-sm-grow-1{flex-grow:1!important}.flex-sm-shrink-0{flex-shrink:0!important}.flex-sm-shrink-1{flex-shrink:1!important}.flex-sm-wrap{flex-wrap:wrap!important}.flex-sm-nowrap{flex-wrap:nowrap!important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-sm-start{justify-content:flex-start!important}.justify-content-sm-end{justify-content:flex-end!important}.justify-content-sm-center{justify-content:center!important}.justify-content-sm-between{justify-content:space-between!important}.justify-content-sm-around{justify-content:space-around!important}.justify-content-sm-evenly{justify-content:space-evenly!important}.align-items-sm-start{align-items:flex-start!important}.align-items-sm-end{align-items:flex-end!important}.align-items-sm-center{align-items:center!important}.align-items-sm-baseline{align-items:baseline!important}.align-items-sm-stretch{align-items:stretch!important}.align-content-sm-start{align-content:flex-start!important}.align-content-sm-end{align-content:flex-end!important}.align-content-sm-center{align-content:center!important}.align-content-sm-between{align-content:space-between!important}.align-content-sm-around{align-content:space-around!important}.align-content-sm-stretch{align-content:stretch!important}.align-self-sm-auto{align-self:auto!important}.align-self-sm-start{align-self:flex-start!important}.align-self-sm-end{align-self:flex-end!important}.align-self-sm-center{align-self:center!important}.align-self-sm-baseline{align-self:baseline!important}.align-self-sm-stretch{align-self:stretch!important}.order-sm-first{order:-1!important}.order-sm-0{order:0!important}.order-sm-1{order:1!important}.order-sm-2{order:2!important}.order-sm-3{order:3!important}.order-sm-4{order:4!important}.order-sm-5{order:5!important}.order-sm-last{order:6!important}.m-sm-0{margin:0!important}.m-sm-1{margin:.25rem!important}.m-sm-2{margin:.5rem!important}.m-sm-3{margin:1rem!important}.m-sm-4{margin:1.5rem!important}.m-sm-5{margin:3rem!important}.m-sm-auto{margin:auto!important}.mx-sm-0{margin-left:0!important;margin-right:0!important}.mx-sm-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-sm-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-sm-3{margin-left:1rem!important;margin-right:1rem!important}.mx-sm-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-sm-5{margin-left:3rem!important;margin-right:3rem!important}.mx-sm-auto{margin-left:auto!important;margin-right:auto!important}.my-sm-0{margin-bottom:0!important;margin-top:0!important}.my-sm-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-sm-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-sm-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-sm-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-sm-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-sm-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-sm-0{margin-top:0!important}.mt-sm-1{margin-top:.25rem!important}.mt-sm-2{margin-top:.5rem!important}.mt-sm-3{margin-top:1rem!important}.mt-sm-4{margin-top:1.5rem!important}.mt-sm-5{margin-top:3rem!important}.mt-sm-auto{margin-top:auto!important}.me-sm-0{margin-right:0!important}.me-sm-1{margin-right:.25rem!important}.me-sm-2{margin-right:.5rem!important}.me-sm-3{margin-right:1rem!important}.me-sm-4{margin-right:1.5rem!important}.me-sm-5{margin-right:3rem!important}.me-sm-auto{margin-right:auto!important}.mb-sm-0{margin-bottom:0!important}.mb-sm-1{margin-bottom:.25rem!important}.mb-sm-2{margin-bottom:.5rem!important}.mb-sm-3{margin-bottom:1rem!important}.mb-sm-4{margin-bottom:1.5rem!important}.mb-sm-5{margin-bottom:3rem!important}.mb-sm-auto{margin-bottom:auto!important}.ms-sm-0{margin-left:0!important}.ms-sm-1{margin-left:.25rem!important}.ms-sm-2{margin-left:.5rem!important}.ms-sm-3{margin-left:1rem!important}.ms-sm-4{margin-left:1.5rem!important}.ms-sm-5{margin-left:3rem!important}.ms-sm-auto{margin-left:auto!important}.p-sm-0{padding:0!important}.p-sm-1{padding:.25rem!important}.p-sm-2{padding:.5rem!important}.p-sm-3{padding:1rem!important}.p-sm-4{padding:1.5rem!important}.p-sm-5{padding:3rem!important}.px-sm-0{padding-left:0!important;padding-right:0!important}.px-sm-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-sm-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-sm-3{padding-left:1rem!important;padding-right:1rem!important}.px-sm-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-sm-5{padding-left:3rem!important;padding-right:3rem!important}.py-sm-0{padding-bottom:0!important;padding-top:0!important}.py-sm-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-sm-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-sm-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-sm-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-sm-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-sm-0{padding-top:0!important}.pt-sm-1{padding-top:.25rem!important}.pt-sm-2{padding-top:.5rem!important}.pt-sm-3{padding-top:1rem!important}.pt-sm-4{padding-top:1.5rem!important}.pt-sm-5{padding-top:3rem!important}.pe-sm-0{padding-right:0!important}.pe-sm-1{padding-right:.25rem!important}.pe-sm-2{padding-right:.5rem!important}.pe-sm-3{padding-right:1rem!important}.pe-sm-4{padding-right:1.5rem!important}.pe-sm-5{padding-right:3rem!important}.pb-sm-0{padding-bottom:0!important}.pb-sm-1{padding-bottom:.25rem!important}.pb-sm-2{padding-bottom:.5rem!important}.pb-sm-3{padding-bottom:1rem!important}.pb-sm-4{padding-bottom:1.5rem!important}.pb-sm-5{padding-bottom:3rem!important}.ps-sm-0{padding-left:0!important}.ps-sm-1{padding-left:.25rem!important}.ps-sm-2{padding-left:.5rem!important}.ps-sm-3{padding-left:1rem!important}.ps-sm-4{padding-left:1.5rem!important}.ps-sm-5{padding-left:3rem!important}.gap-sm-0{gap:0!important}.gap-sm-1{gap:.25rem!important}.gap-sm-2{gap:.5rem!important}.gap-sm-3{gap:1rem!important}.gap-sm-4{gap:1.5rem!important}.gap-sm-5{gap:3rem!important}.row-gap-sm-0{row-gap:0!important}.row-gap-sm-1{row-gap:.25rem!important}.row-gap-sm-2{row-gap:.5rem!important}.row-gap-sm-3{row-gap:1rem!important}.row-gap-sm-4{row-gap:1.5rem!important}.row-gap-sm-5{row-gap:3rem!important}.column-gap-sm-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-sm-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-sm-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-sm-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-sm-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-sm-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-sm-start{text-align:left!important}.text-sm-end{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.float-md-start{float:left!important}.float-md-end{float:right!important}.float-md-none{float:none!important}.object-fit-md-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-md-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-md-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-md-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-md-none{-o-object-fit:none!important;object-fit:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-grid{display:grid!important}.d-md-inline-grid{display:inline-grid!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:flex!important}.d-md-inline-flex{display:inline-flex!important}.d-md-none{display:none!important}.flex-md-fill{flex:1 1 auto!important}.flex-md-row{flex-direction:row!important}.flex-md-column{flex-direction:column!important}.flex-md-row-reverse{flex-direction:row-reverse!important}.flex-md-column-reverse{flex-direction:column-reverse!important}.flex-md-grow-0{flex-grow:0!important}.flex-md-grow-1{flex-grow:1!important}.flex-md-shrink-0{flex-shrink:0!important}.flex-md-shrink-1{flex-shrink:1!important}.flex-md-wrap{flex-wrap:wrap!important}.flex-md-nowrap{flex-wrap:nowrap!important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-md-start{justify-content:flex-start!important}.justify-content-md-end{justify-content:flex-end!important}.justify-content-md-center{justify-content:center!important}.justify-content-md-between{justify-content:space-between!important}.justify-content-md-around{justify-content:space-around!important}.justify-content-md-evenly{justify-content:space-evenly!important}.align-items-md-start{align-items:flex-start!important}.align-items-md-end{align-items:flex-end!important}.align-items-md-center{align-items:center!important}.align-items-md-baseline{align-items:baseline!important}.align-items-md-stretch{align-items:stretch!important}.align-content-md-start{align-content:flex-start!important}.align-content-md-end{align-content:flex-end!important}.align-content-md-center{align-content:center!important}.align-content-md-between{align-content:space-between!important}.align-content-md-around{align-content:space-around!important}.align-content-md-stretch{align-content:stretch!important}.align-self-md-auto{align-self:auto!important}.align-self-md-start{align-self:flex-start!important}.align-self-md-end{align-self:flex-end!important}.align-self-md-center{align-self:center!important}.align-self-md-baseline{align-self:baseline!important}.align-self-md-stretch{align-self:stretch!important}.order-md-first{order:-1!important}.order-md-0{order:0!important}.order-md-1{order:1!important}.order-md-2{order:2!important}.order-md-3{order:3!important}.order-md-4{order:4!important}.order-md-5{order:5!important}.order-md-last{order:6!important}.m-md-0{margin:0!important}.m-md-1{margin:.25rem!important}.m-md-2{margin:.5rem!important}.m-md-3{margin:1rem!important}.m-md-4{margin:1.5rem!important}.m-md-5{margin:3rem!important}.m-md-auto{margin:auto!important}.mx-md-0{margin-left:0!important;margin-right:0!important}.mx-md-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-md-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-md-3{margin-left:1rem!important;margin-right:1rem!important}.mx-md-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-md-5{margin-left:3rem!important;margin-right:3rem!important}.mx-md-auto{margin-left:auto!important;margin-right:auto!important}.my-md-0{margin-bottom:0!important;margin-top:0!important}.my-md-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-md-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-md-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-md-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-md-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-md-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-md-0{margin-top:0!important}.mt-md-1{margin-top:.25rem!important}.mt-md-2{margin-top:.5rem!important}.mt-md-3{margin-top:1rem!important}.mt-md-4{margin-top:1.5rem!important}.mt-md-5{margin-top:3rem!important}.mt-md-auto{margin-top:auto!important}.me-md-0{margin-right:0!important}.me-md-1{margin-right:.25rem!important}.me-md-2{margin-right:.5rem!important}.me-md-3{margin-right:1rem!important}.me-md-4{margin-right:1.5rem!important}.me-md-5{margin-right:3rem!important}.me-md-auto{margin-right:auto!important}.mb-md-0{margin-bottom:0!important}.mb-md-1{margin-bottom:.25rem!important}.mb-md-2{margin-bottom:.5rem!important}.mb-md-3{margin-bottom:1rem!important}.mb-md-4{margin-bottom:1.5rem!important}.mb-md-5{margin-bottom:3rem!important}.mb-md-auto{margin-bottom:auto!important}.ms-md-0{margin-left:0!important}.ms-md-1{margin-left:.25rem!important}.ms-md-2{margin-left:.5rem!important}.ms-md-3{margin-left:1rem!important}.ms-md-4{margin-left:1.5rem!important}.ms-md-5{margin-left:3rem!important}.ms-md-auto{margin-left:auto!important}.p-md-0{padding:0!important}.p-md-1{padding:.25rem!important}.p-md-2{padding:.5rem!important}.p-md-3{padding:1rem!important}.p-md-4{padding:1.5rem!important}.p-md-5{padding:3rem!important}.px-md-0{padding-left:0!important;padding-right:0!important}.px-md-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-md-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-md-3{padding-left:1rem!important;padding-right:1rem!important}.px-md-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-md-5{padding-left:3rem!important;padding-right:3rem!important}.py-md-0{padding-bottom:0!important;padding-top:0!important}.py-md-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-md-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-md-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-md-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-md-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-md-0{padding-top:0!important}.pt-md-1{padding-top:.25rem!important}.pt-md-2{padding-top:.5rem!important}.pt-md-3{padding-top:1rem!important}.pt-md-4{padding-top:1.5rem!important}.pt-md-5{padding-top:3rem!important}.pe-md-0{padding-right:0!important}.pe-md-1{padding-right:.25rem!important}.pe-md-2{padding-right:.5rem!important}.pe-md-3{padding-right:1rem!important}.pe-md-4{padding-right:1.5rem!important}.pe-md-5{padding-right:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pb-md-2{padding-bottom:.5rem!important}.pb-md-3{padding-bottom:1rem!important}.pb-md-4{padding-bottom:1.5rem!important}.pb-md-5{padding-bottom:3rem!important}.ps-md-0{padding-left:0!important}.ps-md-1{padding-left:.25rem!important}.ps-md-2{padding-left:.5rem!important}.ps-md-3{padding-left:1rem!important}.ps-md-4{padding-left:1.5rem!important}.ps-md-5{padding-left:3rem!important}.gap-md-0{gap:0!important}.gap-md-1{gap:.25rem!important}.gap-md-2{gap:.5rem!important}.gap-md-3{gap:1rem!important}.gap-md-4{gap:1.5rem!important}.gap-md-5{gap:3rem!important}.row-gap-md-0{row-gap:0!important}.row-gap-md-1{row-gap:.25rem!important}.row-gap-md-2{row-gap:.5rem!important}.row-gap-md-3{row-gap:1rem!important}.row-gap-md-4{row-gap:1.5rem!important}.row-gap-md-5{row-gap:3rem!important}.column-gap-md-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-md-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-md-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-md-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-md-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-md-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-md-start{text-align:left!important}.text-md-end{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.float-lg-start{float:left!important}.float-lg-end{float:right!important}.float-lg-none{float:none!important}.object-fit-lg-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-lg-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-lg-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-lg-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-lg-none{-o-object-fit:none!important;object-fit:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-grid{display:grid!important}.d-lg-inline-grid{display:inline-grid!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:flex!important}.d-lg-inline-flex{display:inline-flex!important}.d-lg-none{display:none!important}.flex-lg-fill{flex:1 1 auto!important}.flex-lg-row{flex-direction:row!important}.flex-lg-column{flex-direction:column!important}.flex-lg-row-reverse{flex-direction:row-reverse!important}.flex-lg-column-reverse{flex-direction:column-reverse!important}.flex-lg-grow-0{flex-grow:0!important}.flex-lg-grow-1{flex-grow:1!important}.flex-lg-shrink-0{flex-shrink:0!important}.flex-lg-shrink-1{flex-shrink:1!important}.flex-lg-wrap{flex-wrap:wrap!important}.flex-lg-nowrap{flex-wrap:nowrap!important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-lg-start{justify-content:flex-start!important}.justify-content-lg-end{justify-content:flex-end!important}.justify-content-lg-center{justify-content:center!important}.justify-content-lg-between{justify-content:space-between!important}.justify-content-lg-around{justify-content:space-around!important}.justify-content-lg-evenly{justify-content:space-evenly!important}.align-items-lg-start{align-items:flex-start!important}.align-items-lg-end{align-items:flex-end!important}.align-items-lg-center{align-items:center!important}.align-items-lg-baseline{align-items:baseline!important}.align-items-lg-stretch{align-items:stretch!important}.align-content-lg-start{align-content:flex-start!important}.align-content-lg-end{align-content:flex-end!important}.align-content-lg-center{align-content:center!important}.align-content-lg-between{align-content:space-between!important}.align-content-lg-around{align-content:space-around!important}.align-content-lg-stretch{align-content:stretch!important}.align-self-lg-auto{align-self:auto!important}.align-self-lg-start{align-self:flex-start!important}.align-self-lg-end{align-self:flex-end!important}.align-self-lg-center{align-self:center!important}.align-self-lg-baseline{align-self:baseline!important}.align-self-lg-stretch{align-self:stretch!important}.order-lg-first{order:-1!important}.order-lg-0{order:0!important}.order-lg-1{order:1!important}.order-lg-2{order:2!important}.order-lg-3{order:3!important}.order-lg-4{order:4!important}.order-lg-5{order:5!important}.order-lg-last{order:6!important}.m-lg-0{margin:0!important}.m-lg-1{margin:.25rem!important}.m-lg-2{margin:.5rem!important}.m-lg-3{margin:1rem!important}.m-lg-4{margin:1.5rem!important}.m-lg-5{margin:3rem!important}.m-lg-auto{margin:auto!important}.mx-lg-0{margin-left:0!important;margin-right:0!important}.mx-lg-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-lg-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-lg-3{margin-left:1rem!important;margin-right:1rem!important}.mx-lg-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-lg-5{margin-left:3rem!important;margin-right:3rem!important}.mx-lg-auto{margin-left:auto!important;margin-right:auto!important}.my-lg-0{margin-bottom:0!important;margin-top:0!important}.my-lg-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-lg-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-lg-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-lg-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-lg-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-lg-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-lg-0{margin-top:0!important}.mt-lg-1{margin-top:.25rem!important}.mt-lg-2{margin-top:.5rem!important}.mt-lg-3{margin-top:1rem!important}.mt-lg-4{margin-top:1.5rem!important}.mt-lg-5{margin-top:3rem!important}.mt-lg-auto{margin-top:auto!important}.me-lg-0{margin-right:0!important}.me-lg-1{margin-right:.25rem!important}.me-lg-2{margin-right:.5rem!important}.me-lg-3{margin-right:1rem!important}.me-lg-4{margin-right:1.5rem!important}.me-lg-5{margin-right:3rem!important}.me-lg-auto{margin-right:auto!important}.mb-lg-0{margin-bottom:0!important}.mb-lg-1{margin-bottom:.25rem!important}.mb-lg-2{margin-bottom:.5rem!important}.mb-lg-3{margin-bottom:1rem!important}.mb-lg-4{margin-bottom:1.5rem!important}.mb-lg-5{margin-bottom:3rem!important}.mb-lg-auto{margin-bottom:auto!important}.ms-lg-0{margin-left:0!important}.ms-lg-1{margin-left:.25rem!important}.ms-lg-2{margin-left:.5rem!important}.ms-lg-3{margin-left:1rem!important}.ms-lg-4{margin-left:1.5rem!important}.ms-lg-5{margin-left:3rem!important}.ms-lg-auto{margin-left:auto!important}.p-lg-0{padding:0!important}.p-lg-1{padding:.25rem!important}.p-lg-2{padding:.5rem!important}.p-lg-3{padding:1rem!important}.p-lg-4{padding:1.5rem!important}.p-lg-5{padding:3rem!important}.px-lg-0{padding-left:0!important;padding-right:0!important}.px-lg-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-lg-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-lg-3{padding-left:1rem!important;padding-right:1rem!important}.px-lg-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-lg-5{padding-left:3rem!important;padding-right:3rem!important}.py-lg-0{padding-bottom:0!important;padding-top:0!important}.py-lg-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-lg-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-lg-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-lg-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-lg-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-lg-0{padding-top:0!important}.pt-lg-1{padding-top:.25rem!important}.pt-lg-2{padding-top:.5rem!important}.pt-lg-3{padding-top:1rem!important}.pt-lg-4{padding-top:1.5rem!important}.pt-lg-5{padding-top:3rem!important}.pe-lg-0{padding-right:0!important}.pe-lg-1{padding-right:.25rem!important}.pe-lg-2{padding-right:.5rem!important}.pe-lg-3{padding-right:1rem!important}.pe-lg-4{padding-right:1.5rem!important}.pe-lg-5{padding-right:3rem!important}.pb-lg-0{padding-bottom:0!important}.pb-lg-1{padding-bottom:.25rem!important}.pb-lg-2{padding-bottom:.5rem!important}.pb-lg-3{padding-bottom:1rem!important}.pb-lg-4{padding-bottom:1.5rem!important}.pb-lg-5{padding-bottom:3rem!important}.ps-lg-0{padding-left:0!important}.ps-lg-1{padding-left:.25rem!important}.ps-lg-2{padding-left:.5rem!important}.ps-lg-3{padding-left:1rem!important}.ps-lg-4{padding-left:1.5rem!important}.ps-lg-5{padding-left:3rem!important}.gap-lg-0{gap:0!important}.gap-lg-1{gap:.25rem!important}.gap-lg-2{gap:.5rem!important}.gap-lg-3{gap:1rem!important}.gap-lg-4{gap:1.5rem!important}.gap-lg-5{gap:3rem!important}.row-gap-lg-0{row-gap:0!important}.row-gap-lg-1{row-gap:.25rem!important}.row-gap-lg-2{row-gap:.5rem!important}.row-gap-lg-3{row-gap:1rem!important}.row-gap-lg-4{row-gap:1.5rem!important}.row-gap-lg-5{row-gap:3rem!important}.column-gap-lg-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-lg-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-lg-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-lg-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-lg-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-lg-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-lg-start{text-align:left!important}.text-lg-end{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.float-xl-start{float:left!important}.float-xl-end{float:right!important}.float-xl-none{float:none!important}.object-fit-xl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xl-none{-o-object-fit:none!important;object-fit:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-grid{display:grid!important}.d-xl-inline-grid{display:inline-grid!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:flex!important}.d-xl-inline-flex{display:inline-flex!important}.d-xl-none{display:none!important}.flex-xl-fill{flex:1 1 auto!important}.flex-xl-row{flex-direction:row!important}.flex-xl-column{flex-direction:column!important}.flex-xl-row-reverse{flex-direction:row-reverse!important}.flex-xl-column-reverse{flex-direction:column-reverse!important}.flex-xl-grow-0{flex-grow:0!important}.flex-xl-grow-1{flex-grow:1!important}.flex-xl-shrink-0{flex-shrink:0!important}.flex-xl-shrink-1{flex-shrink:1!important}.flex-xl-wrap{flex-wrap:wrap!important}.flex-xl-nowrap{flex-wrap:nowrap!important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xl-start{justify-content:flex-start!important}.justify-content-xl-end{justify-content:flex-end!important}.justify-content-xl-center{justify-content:center!important}.justify-content-xl-between{justify-content:space-between!important}.justify-content-xl-around{justify-content:space-around!important}.justify-content-xl-evenly{justify-content:space-evenly!important}.align-items-xl-start{align-items:flex-start!important}.align-items-xl-end{align-items:flex-end!important}.align-items-xl-center{align-items:center!important}.align-items-xl-baseline{align-items:baseline!important}.align-items-xl-stretch{align-items:stretch!important}.align-content-xl-start{align-content:flex-start!important}.align-content-xl-end{align-content:flex-end!important}.align-content-xl-center{align-content:center!important}.align-content-xl-between{align-content:space-between!important}.align-content-xl-around{align-content:space-around!important}.align-content-xl-stretch{align-content:stretch!important}.align-self-xl-auto{align-self:auto!important}.align-self-xl-start{align-self:flex-start!important}.align-self-xl-end{align-self:flex-end!important}.align-self-xl-center{align-self:center!important}.align-self-xl-baseline{align-self:baseline!important}.align-self-xl-stretch{align-self:stretch!important}.order-xl-first{order:-1!important}.order-xl-0{order:0!important}.order-xl-1{order:1!important}.order-xl-2{order:2!important}.order-xl-3{order:3!important}.order-xl-4{order:4!important}.order-xl-5{order:5!important}.order-xl-last{order:6!important}.m-xl-0{margin:0!important}.m-xl-1{margin:.25rem!important}.m-xl-2{margin:.5rem!important}.m-xl-3{margin:1rem!important}.m-xl-4{margin:1.5rem!important}.m-xl-5{margin:3rem!important}.m-xl-auto{margin:auto!important}.mx-xl-0{margin-left:0!important;margin-right:0!important}.mx-xl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xl-auto{margin-left:auto!important;margin-right:auto!important}.my-xl-0{margin-bottom:0!important;margin-top:0!important}.my-xl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xl-0{margin-top:0!important}.mt-xl-1{margin-top:.25rem!important}.mt-xl-2{margin-top:.5rem!important}.mt-xl-3{margin-top:1rem!important}.mt-xl-4{margin-top:1.5rem!important}.mt-xl-5{margin-top:3rem!important}.mt-xl-auto{margin-top:auto!important}.me-xl-0{margin-right:0!important}.me-xl-1{margin-right:.25rem!important}.me-xl-2{margin-right:.5rem!important}.me-xl-3{margin-right:1rem!important}.me-xl-4{margin-right:1.5rem!important}.me-xl-5{margin-right:3rem!important}.me-xl-auto{margin-right:auto!important}.mb-xl-0{margin-bottom:0!important}.mb-xl-1{margin-bottom:.25rem!important}.mb-xl-2{margin-bottom:.5rem!important}.mb-xl-3{margin-bottom:1rem!important}.mb-xl-4{margin-bottom:1.5rem!important}.mb-xl-5{margin-bottom:3rem!important}.mb-xl-auto{margin-bottom:auto!important}.ms-xl-0{margin-left:0!important}.ms-xl-1{margin-left:.25rem!important}.ms-xl-2{margin-left:.5rem!important}.ms-xl-3{margin-left:1rem!important}.ms-xl-4{margin-left:1.5rem!important}.ms-xl-5{margin-left:3rem!important}.ms-xl-auto{margin-left:auto!important}.p-xl-0{padding:0!important}.p-xl-1{padding:.25rem!important}.p-xl-2{padding:.5rem!important}.p-xl-3{padding:1rem!important}.p-xl-4{padding:1.5rem!important}.p-xl-5{padding:3rem!important}.px-xl-0{padding-left:0!important;padding-right:0!important}.px-xl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xl-0{padding-bottom:0!important;padding-top:0!important}.py-xl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xl-0{padding-top:0!important}.pt-xl-1{padding-top:.25rem!important}.pt-xl-2{padding-top:.5rem!important}.pt-xl-3{padding-top:1rem!important}.pt-xl-4{padding-top:1.5rem!important}.pt-xl-5{padding-top:3rem!important}.pe-xl-0{padding-right:0!important}.pe-xl-1{padding-right:.25rem!important}.pe-xl-2{padding-right:.5rem!important}.pe-xl-3{padding-right:1rem!important}.pe-xl-4{padding-right:1.5rem!important}.pe-xl-5{padding-right:3rem!important}.pb-xl-0{padding-bottom:0!important}.pb-xl-1{padding-bottom:.25rem!important}.pb-xl-2{padding-bottom:.5rem!important}.pb-xl-3{padding-bottom:1rem!important}.pb-xl-4{padding-bottom:1.5rem!important}.pb-xl-5{padding-bottom:3rem!important}.ps-xl-0{padding-left:0!important}.ps-xl-1{padding-left:.25rem!important}.ps-xl-2{padding-left:.5rem!important}.ps-xl-3{padding-left:1rem!important}.ps-xl-4{padding-left:1.5rem!important}.ps-xl-5{padding-left:3rem!important}.gap-xl-0{gap:0!important}.gap-xl-1{gap:.25rem!important}.gap-xl-2{gap:.5rem!important}.gap-xl-3{gap:1rem!important}.gap-xl-4{gap:1.5rem!important}.gap-xl-5{gap:3rem!important}.row-gap-xl-0{row-gap:0!important}.row-gap-xl-1{row-gap:.25rem!important}.row-gap-xl-2{row-gap:.5rem!important}.row-gap-xl-3{row-gap:1rem!important}.row-gap-xl-4{row-gap:1.5rem!important}.row-gap-xl-5{row-gap:3rem!important}.column-gap-xl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xl-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xl-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xl-start{text-align:left!important}.text-xl-end{text-align:right!important}.text-xl-center{text-align:center!important}}@media (min-width:1400px){.float-xxl-start{float:left!important}.float-xxl-end{float:right!important}.float-xxl-none{float:none!important}.object-fit-xxl-contain{-o-object-fit:contain!important;object-fit:contain!important}.object-fit-xxl-cover{-o-object-fit:cover!important;object-fit:cover!important}.object-fit-xxl-fill{-o-object-fit:fill!important;object-fit:fill!important}.object-fit-xxl-scale{-o-object-fit:scale-down!important;object-fit:scale-down!important}.object-fit-xxl-none{-o-object-fit:none!important;object-fit:none!important}.d-xxl-inline{display:inline!important}.d-xxl-inline-block{display:inline-block!important}.d-xxl-block{display:block!important}.d-xxl-grid{display:grid!important}.d-xxl-inline-grid{display:inline-grid!important}.d-xxl-table{display:table!important}.d-xxl-table-row{display:table-row!important}.d-xxl-table-cell{display:table-cell!important}.d-xxl-flex{display:flex!important}.d-xxl-inline-flex{display:inline-flex!important}.d-xxl-none{display:none!important}.flex-xxl-fill{flex:1 1 auto!important}.flex-xxl-row{flex-direction:row!important}.flex-xxl-column{flex-direction:column!important}.flex-xxl-row-reverse{flex-direction:row-reverse!important}.flex-xxl-column-reverse{flex-direction:column-reverse!important}.flex-xxl-grow-0{flex-grow:0!important}.flex-xxl-grow-1{flex-grow:1!important}.flex-xxl-shrink-0{flex-shrink:0!important}.flex-xxl-shrink-1{flex-shrink:1!important}.flex-xxl-wrap{flex-wrap:wrap!important}.flex-xxl-nowrap{flex-wrap:nowrap!important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-xxl-start{justify-content:flex-start!important}.justify-content-xxl-end{justify-content:flex-end!important}.justify-content-xxl-center{justify-content:center!important}.justify-content-xxl-between{justify-content:space-between!important}.justify-content-xxl-around{justify-content:space-around!important}.justify-content-xxl-evenly{justify-content:space-evenly!important}.align-items-xxl-start{align-items:flex-start!important}.align-items-xxl-end{align-items:flex-end!important}.align-items-xxl-center{align-items:center!important}.align-items-xxl-baseline{align-items:baseline!important}.align-items-xxl-stretch{align-items:stretch!important}.align-content-xxl-start{align-content:flex-start!important}.align-content-xxl-end{align-content:flex-end!important}.align-content-xxl-center{align-content:center!important}.align-content-xxl-between{align-content:space-between!important}.align-content-xxl-around{align-content:space-around!important}.align-content-xxl-stretch{align-content:stretch!important}.align-self-xxl-auto{align-self:auto!important}.align-self-xxl-start{align-self:flex-start!important}.align-self-xxl-end{align-self:flex-end!important}.align-self-xxl-center{align-self:center!important}.align-self-xxl-baseline{align-self:baseline!important}.align-self-xxl-stretch{align-self:stretch!important}.order-xxl-first{order:-1!important}.order-xxl-0{order:0!important}.order-xxl-1{order:1!important}.order-xxl-2{order:2!important}.order-xxl-3{order:3!important}.order-xxl-4{order:4!important}.order-xxl-5{order:5!important}.order-xxl-last{order:6!important}.m-xxl-0{margin:0!important}.m-xxl-1{margin:.25rem!important}.m-xxl-2{margin:.5rem!important}.m-xxl-3{margin:1rem!important}.m-xxl-4{margin:1.5rem!important}.m-xxl-5{margin:3rem!important}.m-xxl-auto{margin:auto!important}.mx-xxl-0{margin-left:0!important;margin-right:0!important}.mx-xxl-1{margin-left:.25rem!important;margin-right:.25rem!important}.mx-xxl-2{margin-left:.5rem!important;margin-right:.5rem!important}.mx-xxl-3{margin-left:1rem!important;margin-right:1rem!important}.mx-xxl-4{margin-left:1.5rem!important;margin-right:1.5rem!important}.mx-xxl-5{margin-left:3rem!important;margin-right:3rem!important}.mx-xxl-auto{margin-left:auto!important;margin-right:auto!important}.my-xxl-0{margin-bottom:0!important;margin-top:0!important}.my-xxl-1{margin-bottom:.25rem!important;margin-top:.25rem!important}.my-xxl-2{margin-bottom:.5rem!important;margin-top:.5rem!important}.my-xxl-3{margin-bottom:1rem!important;margin-top:1rem!important}.my-xxl-4{margin-bottom:1.5rem!important;margin-top:1.5rem!important}.my-xxl-5{margin-bottom:3rem!important;margin-top:3rem!important}.my-xxl-auto{margin-bottom:auto!important;margin-top:auto!important}.mt-xxl-0{margin-top:0!important}.mt-xxl-1{margin-top:.25rem!important}.mt-xxl-2{margin-top:.5rem!important}.mt-xxl-3{margin-top:1rem!important}.mt-xxl-4{margin-top:1.5rem!important}.mt-xxl-5{margin-top:3rem!important}.mt-xxl-auto{margin-top:auto!important}.me-xxl-0{margin-right:0!important}.me-xxl-1{margin-right:.25rem!important}.me-xxl-2{margin-right:.5rem!important}.me-xxl-3{margin-right:1rem!important}.me-xxl-4{margin-right:1.5rem!important}.me-xxl-5{margin-right:3rem!important}.me-xxl-auto{margin-right:auto!important}.mb-xxl-0{margin-bottom:0!important}.mb-xxl-1{margin-bottom:.25rem!important}.mb-xxl-2{margin-bottom:.5rem!important}.mb-xxl-3{margin-bottom:1rem!important}.mb-xxl-4{margin-bottom:1.5rem!important}.mb-xxl-5{margin-bottom:3rem!important}.mb-xxl-auto{margin-bottom:auto!important}.ms-xxl-0{margin-left:0!important}.ms-xxl-1{margin-left:.25rem!important}.ms-xxl-2{margin-left:.5rem!important}.ms-xxl-3{margin-left:1rem!important}.ms-xxl-4{margin-left:1.5rem!important}.ms-xxl-5{margin-left:3rem!important}.ms-xxl-auto{margin-left:auto!important}.p-xxl-0{padding:0!important}.p-xxl-1{padding:.25rem!important}.p-xxl-2{padding:.5rem!important}.p-xxl-3{padding:1rem!important}.p-xxl-4{padding:1.5rem!important}.p-xxl-5{padding:3rem!important}.px-xxl-0{padding-left:0!important;padding-right:0!important}.px-xxl-1{padding-left:.25rem!important;padding-right:.25rem!important}.px-xxl-2{padding-left:.5rem!important;padding-right:.5rem!important}.px-xxl-3{padding-left:1rem!important;padding-right:1rem!important}.px-xxl-4{padding-left:1.5rem!important;padding-right:1.5rem!important}.px-xxl-5{padding-left:3rem!important;padding-right:3rem!important}.py-xxl-0{padding-bottom:0!important;padding-top:0!important}.py-xxl-1{padding-bottom:.25rem!important;padding-top:.25rem!important}.py-xxl-2{padding-bottom:.5rem!important;padding-top:.5rem!important}.py-xxl-3{padding-bottom:1rem!important;padding-top:1rem!important}.py-xxl-4{padding-bottom:1.5rem!important;padding-top:1.5rem!important}.py-xxl-5{padding-bottom:3rem!important;padding-top:3rem!important}.pt-xxl-0{padding-top:0!important}.pt-xxl-1{padding-top:.25rem!important}.pt-xxl-2{padding-top:.5rem!important}.pt-xxl-3{padding-top:1rem!important}.pt-xxl-4{padding-top:1.5rem!important}.pt-xxl-5{padding-top:3rem!important}.pe-xxl-0{padding-right:0!important}.pe-xxl-1{padding-right:.25rem!important}.pe-xxl-2{padding-right:.5rem!important}.pe-xxl-3{padding-right:1rem!important}.pe-xxl-4{padding-right:1.5rem!important}.pe-xxl-5{padding-right:3rem!important}.pb-xxl-0{padding-bottom:0!important}.pb-xxl-1{padding-bottom:.25rem!important}.pb-xxl-2{padding-bottom:.5rem!important}.pb-xxl-3{padding-bottom:1rem!important}.pb-xxl-4{padding-bottom:1.5rem!important}.pb-xxl-5{padding-bottom:3rem!important}.ps-xxl-0{padding-left:0!important}.ps-xxl-1{padding-left:.25rem!important}.ps-xxl-2{padding-left:.5rem!important}.ps-xxl-3{padding-left:1rem!important}.ps-xxl-4{padding-left:1.5rem!important}.ps-xxl-5{padding-left:3rem!important}.gap-xxl-0{gap:0!important}.gap-xxl-1{gap:.25rem!important}.gap-xxl-2{gap:.5rem!important}.gap-xxl-3{gap:1rem!important}.gap-xxl-4{gap:1.5rem!important}.gap-xxl-5{gap:3rem!important}.row-gap-xxl-0{row-gap:0!important}.row-gap-xxl-1{row-gap:.25rem!important}.row-gap-xxl-2{row-gap:.5rem!important}.row-gap-xxl-3{row-gap:1rem!important}.row-gap-xxl-4{row-gap:1.5rem!important}.row-gap-xxl-5{row-gap:3rem!important}.column-gap-xxl-0{-moz-column-gap:0!important;column-gap:0!important}.column-gap-xxl-1{-moz-column-gap:.25rem!important;column-gap:.25rem!important}.column-gap-xxl-2{-moz-column-gap:.5rem!important;column-gap:.5rem!important}.column-gap-xxl-3{-moz-column-gap:1rem!important;column-gap:1rem!important}.column-gap-xxl-4{-moz-column-gap:1.5rem!important;column-gap:1.5rem!important}.column-gap-xxl-5{-moz-column-gap:3rem!important;column-gap:3rem!important}.text-xxl-start{text-align:left!important}.text-xxl-end{text-align:right!important}.text-xxl-center{text-align:center!important}}@media (min-width:1200px){.fs-1{font-size:2.5rem!important}.fs-2{font-size:2rem!important}.fs-3{font-size:1.75rem!important}.fs-4{font-size:1.5rem!important}}@media print{.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-grid{display:grid!important}.d-print-inline-grid{display:inline-grid!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:flex!important}.d-print-inline-flex{display:inline-flex!important}.d-print-none{display:none!important}}",
                    "",
                ]);
                const i = n;
            },
            645: (t) => {
                "use strict";
                t.exports = function (t) {
                    var e = [];
                    return (
                        (e.toString = function () {
                            return this.map(function (e) {
                                var r = t(e);
                                return e[2]
                                    ? "@media "
                                          .concat(e[2], " {")
                                          .concat(r, "}")
                                    : r;
                            }).join("");
                        }),
                        (e.i = function (t, r, o) {
                            "string" == typeof t && (t = [[null, t, ""]]);
                            var n = {};
                            if (o)
                                for (var i = 0; i < this.length; i++) {
                                    var a = this[i][0];
                                    null != a && (n[a] = !0);
                                }
                            for (var s = 0; s < t.length; s++) {
                                var l = [].concat(t[s]);
                                (o && n[l[0]]) ||
                                    (r &&
                                        (l[2]
                                            ? (l[2] = ""
                                                  .concat(r, " and ")
                                                  .concat(l[2]))
                                            : (l[2] = r)),
                                    e.push(l));
                            }
                        }),
                        e
                    );
                };
            },
            755: function (t, e) {
                var r;
                !(function (e, r) {
                    "use strict";
                    "object" == typeof t.exports
                        ? (t.exports = e.document
                              ? r(e, !0)
                              : function (t) {
                                    if (!t.document)
                                        throw new Error(
                                            "jQuery requires a window with a document"
                                        );
                                    return r(t);
                                })
                        : r(e);
                })(
                    "undefined" != typeof window ? window : this,
                    function (o, n) {
                        "use strict";
                        var i = [],
                            a = Object.getPrototypeOf,
                            s = i.slice,
                            l = i.flat
                                ? function (t) {
                                      return i.flat.call(t);
                                  }
                                : function (t) {
                                      return i.concat.apply([], t);
                                  },
                            d = i.push,
                            c = i.indexOf,
                            p = {},
                            b = p.toString,
                            m = p.hasOwnProperty,
                            g = m.toString,
                            f = g.call(Object),
                            u = {},
                            h = function (t) {
                                return (
                                    "function" == typeof t &&
                                    "number" != typeof t.nodeType &&
                                    "function" != typeof t.item
                                );
                            },
                            v = function (t) {
                                return null != t && t === t.window;
                            },
                            x = o.document,
                            w = { type: !0, src: !0, nonce: !0, noModule: !0 };
                        function y(t, e, r) {
                            var o,
                                n,
                                i = (r = r || x).createElement("script");
                            if (((i.text = t), e))
                                for (o in w)
                                    (n =
                                        e[o] ||
                                        (e.getAttribute &&
                                            e.getAttribute(o))) &&
                                        i.setAttribute(o, n);
                            r.head.appendChild(i).parentNode.removeChild(i);
                        }
                        function k(t) {
                            return null == t
                                ? t + ""
                                : "object" == typeof t || "function" == typeof t
                                ? p[b.call(t)] || "object"
                                : typeof t;
                        }
                        var _ = "3.7.1",
                            E = /HTML$/i,
                            C = function (t, e) {
                                return new C.fn.init(t, e);
                            };
                        function T(t) {
                            var e = !!t && "length" in t && t.length,
                                r = k(t);
                            return (
                                !h(t) &&
                                !v(t) &&
                                ("array" === r ||
                                    0 === e ||
                                    ("number" == typeof e &&
                                        e > 0 &&
                                        e - 1 in t))
                            );
                        }
                        function A(t, e) {
                            return (
                                t.nodeName &&
                                t.nodeName.toLowerCase() === e.toLowerCase()
                            );
                        }
                        (C.fn = C.prototype =
                            {
                                jquery: _,
                                constructor: C,
                                length: 0,
                                toArray: function () {
                                    return s.call(this);
                                },
                                get: function (t) {
                                    return null == t
                                        ? s.call(this)
                                        : t < 0
                                        ? this[t + this.length]
                                        : this[t];
                                },
                                pushStack: function (t) {
                                    var e = C.merge(this.constructor(), t);
                                    return (e.prevObject = this), e;
                                },
                                each: function (t) {
                                    return C.each(this, t);
                                },
                                map: function (t) {
                                    return this.pushStack(
                                        C.map(this, function (e, r) {
                                            return t.call(e, r, e);
                                        })
                                    );
                                },
                                slice: function () {
                                    return this.pushStack(
                                        s.apply(this, arguments)
                                    );
                                },
                                first: function () {
                                    return this.eq(0);
                                },
                                last: function () {
                                    return this.eq(-1);
                                },
                                even: function () {
                                    return this.pushStack(
                                        C.grep(this, function (t, e) {
                                            return (e + 1) % 2;
                                        })
                                    );
                                },
                                odd: function () {
                                    return this.pushStack(
                                        C.grep(this, function (t, e) {
                                            return e % 2;
                                        })
                                    );
                                },
                                eq: function (t) {
                                    var e = this.length,
                                        r = +t + (t < 0 ? e : 0);
                                    return this.pushStack(
                                        r >= 0 && r < e ? [this[r]] : []
                                    );
                                },
                                end: function () {
                                    return (
                                        this.prevObject || this.constructor()
                                    );
                                },
                                push: d,
                                sort: i.sort,
                                splice: i.splice,
                            }),
                            (C.extend = C.fn.extend =
                                function () {
                                    var t,
                                        e,
                                        r,
                                        o,
                                        n,
                                        i,
                                        a = arguments[0] || {},
                                        s = 1,
                                        l = arguments.length,
                                        d = !1;
                                    for (
                                        "boolean" == typeof a &&
                                            ((d = a),
                                            (a = arguments[s] || {}),
                                            s++),
                                            "object" == typeof a ||
                                                h(a) ||
                                                (a = {}),
                                            s === l && ((a = this), s--);
                                        s < l;
                                        s++
                                    )
                                        if (null != (t = arguments[s]))
                                            for (e in t)
                                                (o = t[e]),
                                                    "__proto__" !== e &&
                                                        a !== o &&
                                                        (d &&
                                                        o &&
                                                        (C.isPlainObject(o) ||
                                                            (n =
                                                                Array.isArray(
                                                                    o
                                                                )))
                                                            ? ((r = a[e]),
                                                              (i =
                                                                  n &&
                                                                  !Array.isArray(
                                                                      r
                                                                  )
                                                                      ? []
                                                                      : n ||
                                                                        C.isPlainObject(
                                                                            r
                                                                        )
                                                                      ? r
                                                                      : {}),
                                                              (n = !1),
                                                              (a[e] = C.extend(
                                                                  d,
                                                                  i,
                                                                  o
                                                              )))
                                                            : void 0 !== o &&
                                                              (a[e] = o));
                                    return a;
                                }),
                            C.extend({
                                expando:
                                    "jQuery" +
                                    (_ + Math.random()).replace(/\D/g, ""),
                                isReady: !0,
                                error: function (t) {
                                    throw new Error(t);
                                },
                                noop: function () {},
                                isPlainObject: function (t) {
                                    var e, r;
                                    return (
                                        !(
                                            !t ||
                                            "[object Object]" !== b.call(t)
                                        ) &&
                                        (!(e = a(t)) ||
                                            ("function" ==
                                                typeof (r =
                                                    m.call(e, "constructor") &&
                                                    e.constructor) &&
                                                g.call(r) === f))
                                    );
                                },
                                isEmptyObject: function (t) {
                                    var e;
                                    for (e in t) return !1;
                                    return !0;
                                },
                                globalEval: function (t, e, r) {
                                    y(t, { nonce: e && e.nonce }, r);
                                },
                                each: function (t, e) {
                                    var r,
                                        o = 0;
                                    if (T(t))
                                        for (
                                            r = t.length;
                                            o < r &&
                                            !1 !== e.call(t[o], o, t[o]);
                                            o++
                                        );
                                    else
                                        for (o in t)
                                            if (!1 === e.call(t[o], o, t[o]))
                                                break;
                                    return t;
                                },
                                text: function (t) {
                                    var e,
                                        r = "",
                                        o = 0,
                                        n = t.nodeType;
                                    if (!n)
                                        for (; (e = t[o++]); ) r += C.text(e);
                                    return 1 === n || 11 === n
                                        ? t.textContent
                                        : 9 === n
                                        ? t.documentElement.textContent
                                        : 3 === n || 4 === n
                                        ? t.nodeValue
                                        : r;
                                },
                                makeArray: function (t, e) {
                                    var r = e || [];
                                    return (
                                        null != t &&
                                            (T(Object(t))
                                                ? C.merge(
                                                      r,
                                                      "string" == typeof t
                                                          ? [t]
                                                          : t
                                                  )
                                                : d.call(r, t)),
                                        r
                                    );
                                },
                                inArray: function (t, e, r) {
                                    return null == e ? -1 : c.call(e, t, r);
                                },
                                isXMLDoc: function (t) {
                                    var e = t && t.namespaceURI,
                                        r =
                                            t &&
                                            (t.ownerDocument || t)
                                                .documentElement;
                                    return !E.test(
                                        e || (r && r.nodeName) || "HTML"
                                    );
                                },
                                merge: function (t, e) {
                                    for (
                                        var r = +e.length, o = 0, n = t.length;
                                        o < r;
                                        o++
                                    )
                                        t[n++] = e[o];
                                    return (t.length = n), t;
                                },
                                grep: function (t, e, r) {
                                    for (
                                        var o = [], n = 0, i = t.length, a = !r;
                                        n < i;
                                        n++
                                    )
                                        !e(t[n], n) !== a && o.push(t[n]);
                                    return o;
                                },
                                map: function (t, e, r) {
                                    var o,
                                        n,
                                        i = 0,
                                        a = [];
                                    if (T(t))
                                        for (o = t.length; i < o; i++)
                                            null != (n = e(t[i], i, r)) &&
                                                a.push(n);
                                    else
                                        for (i in t)
                                            null != (n = e(t[i], i, r)) &&
                                                a.push(n);
                                    return l(a);
                                },
                                guid: 1,
                                support: u,
                            }),
                            "function" == typeof Symbol &&
                                (C.fn[Symbol.iterator] = i[Symbol.iterator]),
                            C.each(
                                "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                                    " "
                                ),
                                function (t, e) {
                                    p["[object " + e + "]"] = e.toLowerCase();
                                }
                            );
                        var j = i.pop,
                            z = i.sort,
                            S = i.splice,
                            O = "[\\x20\\t\\r\\n\\f]",
                            D = new RegExp(
                                "^" +
                                    O +
                                    "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                                    O +
                                    "+$",
                                "g"
                            );
                        C.contains = function (t, e) {
                            var r = e && e.parentNode;
                            return (
                                t === r ||
                                !(
                                    !r ||
                                    1 !== r.nodeType ||
                                    !(t.contains
                                        ? t.contains(r)
                                        : t.compareDocumentPosition &&
                                          16 & t.compareDocumentPosition(r))
                                )
                            );
                        };
                        var L = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                        function N(t, e) {
                            return e
                                ? "\0" === t
                                    ? "�"
                                    : t.slice(0, -1) +
                                      "\\" +
                                      t.charCodeAt(t.length - 1).toString(16) +
                                      " "
                                : "\\" + t;
                        }
                        C.escapeSelector = function (t) {
                            return (t + "").replace(L, N);
                        };
                        var M = x,
                            P = d;
                        !(function () {
                            var t,
                                e,
                                r,
                                n,
                                a,
                                l,
                                d,
                                p,
                                b,
                                g,
                                f = P,
                                h = C.expando,
                                v = 0,
                                x = 0,
                                w = tt(),
                                y = tt(),
                                k = tt(),
                                _ = tt(),
                                E = function (t, e) {
                                    return t === e && (a = !0), 0;
                                },
                                T =
                                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                L =
                                    "(?:\\\\[\\da-fA-F]{1,6}" +
                                    O +
                                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                                N =
                                    "\\[" +
                                    O +
                                    "*(" +
                                    L +
                                    ")(?:" +
                                    O +
                                    "*([*^$|!~]?=)" +
                                    O +
                                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                                    L +
                                    "))|)" +
                                    O +
                                    "*\\]",
                                I =
                                    ":(" +
                                    L +
                                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                                    N +
                                    ")*)|.*)\\)|)",
                                $ = new RegExp(O + "+", "g"),
                                R = new RegExp("^" + O + "*," + O + "*"),
                                B = new RegExp(
                                    "^" + O + "*([>+~]|" + O + ")" + O + "*"
                                ),
                                H = new RegExp(O + "|>"),
                                q = new RegExp(I),
                                F = new RegExp("^" + L + "$"),
                                W = {
                                    ID: new RegExp("^#(" + L + ")"),
                                    CLASS: new RegExp("^\\.(" + L + ")"),
                                    TAG: new RegExp("^(" + L + "|[*])"),
                                    ATTR: new RegExp("^" + N),
                                    PSEUDO: new RegExp("^" + I),
                                    CHILD: new RegExp(
                                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                                            O +
                                            "*(even|odd|(([+-]|)(\\d*)n|)" +
                                            O +
                                            "*(?:([+-]|)" +
                                            O +
                                            "*(\\d+)|))" +
                                            O +
                                            "*\\)|)",
                                        "i"
                                    ),
                                    bool: new RegExp("^(?:" + T + ")$", "i"),
                                    needsContext: new RegExp(
                                        "^" +
                                            O +
                                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                            O +
                                            "*((?:-\\d)?\\d*)" +
                                            O +
                                            "*\\)|)(?=[^-]|$)",
                                        "i"
                                    ),
                                },
                                X = /^(?:input|select|textarea|button)$/i,
                                G = /^h\d$/i,
                                U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                V = /[+~]/,
                                Y = new RegExp(
                                    "\\\\[\\da-fA-F]{1,6}" +
                                        O +
                                        "?|\\\\([^\\r\\n\\f])",
                                    "g"
                                ),
                                K = function (t, e) {
                                    var r = "0x" + t.slice(1) - 65536;
                                    return (
                                        e ||
                                        (r < 0
                                            ? String.fromCharCode(r + 65536)
                                            : String.fromCharCode(
                                                  (r >> 10) | 55296,
                                                  (1023 & r) | 56320
                                              ))
                                    );
                                },
                                Q = function () {
                                    lt();
                                },
                                J = bt(
                                    function (t) {
                                        return (
                                            !0 === t.disabled &&
                                            A(t, "fieldset")
                                        );
                                    },
                                    { dir: "parentNode", next: "legend" }
                                );
                            try {
                                f.apply(
                                    (i = s.call(M.childNodes)),
                                    M.childNodes
                                ),
                                    i[M.childNodes.length].nodeType;
                            } catch (t) {
                                f = {
                                    apply: function (t, e) {
                                        P.apply(t, s.call(e));
                                    },
                                    call: function (t) {
                                        P.apply(t, s.call(arguments, 1));
                                    },
                                };
                            }
                            function Z(t, e, r, o) {
                                var n,
                                    i,
                                    a,
                                    s,
                                    d,
                                    c,
                                    m,
                                    g = e && e.ownerDocument,
                                    v = e ? e.nodeType : 9;
                                if (
                                    ((r = r || []),
                                    "string" != typeof t ||
                                        !t ||
                                        (1 !== v && 9 !== v && 11 !== v))
                                )
                                    return r;
                                if (!o && (lt(e), (e = e || l), p)) {
                                    if (11 !== v && (d = U.exec(t)))
                                        if ((n = d[1])) {
                                            if (9 === v) {
                                                if (!(a = e.getElementById(n)))
                                                    return r;
                                                if (a.id === n)
                                                    return f.call(r, a), r;
                                            } else if (
                                                g &&
                                                (a = g.getElementById(n)) &&
                                                Z.contains(e, a) &&
                                                a.id === n
                                            )
                                                return f.call(r, a), r;
                                        } else {
                                            if (d[2])
                                                return (
                                                    f.apply(
                                                        r,
                                                        e.getElementsByTagName(
                                                            t
                                                        )
                                                    ),
                                                    r
                                                );
                                            if (
                                                (n = d[3]) &&
                                                e.getElementsByClassName
                                            )
                                                return (
                                                    f.apply(
                                                        r,
                                                        e.getElementsByClassName(
                                                            n
                                                        )
                                                    ),
                                                    r
                                                );
                                        }
                                    if (!(_[t + " "] || (b && b.test(t)))) {
                                        if (
                                            ((m = t),
                                            (g = e),
                                            1 === v && (H.test(t) || B.test(t)))
                                        ) {
                                            for (
                                                ((g =
                                                    (V.test(t) &&
                                                        st(e.parentNode)) ||
                                                    e) == e &&
                                                    u.scope) ||
                                                    ((s = e.getAttribute("id"))
                                                        ? (s =
                                                              C.escapeSelector(
                                                                  s
                                                              ))
                                                        : e.setAttribute(
                                                              "id",
                                                              (s = h)
                                                          )),
                                                    i = (c = ct(t)).length;
                                                i--;

                                            )
                                                c[i] =
                                                    (s ? "#" + s : ":scope") +
                                                    " " +
                                                    pt(c[i]);
                                            m = c.join(",");
                                        }
                                        try {
                                            return (
                                                f.apply(
                                                    r,
                                                    g.querySelectorAll(m)
                                                ),
                                                r
                                            );
                                        } catch (e) {
                                            _(t, !0);
                                        } finally {
                                            s === h && e.removeAttribute("id");
                                        }
                                    }
                                }
                                return vt(t.replace(D, "$1"), e, r, o);
                            }
                            function tt() {
                                var t = [];
                                return function r(o, n) {
                                    return (
                                        t.push(o + " ") > e.cacheLength &&
                                            delete r[t.shift()],
                                        (r[o + " "] = n)
                                    );
                                };
                            }
                            function et(t) {
                                return (t[h] = !0), t;
                            }
                            function rt(t) {
                                var e = l.createElement("fieldset");
                                try {
                                    return !!t(e);
                                } catch (t) {
                                    return !1;
                                } finally {
                                    e.parentNode && e.parentNode.removeChild(e),
                                        (e = null);
                                }
                            }
                            function ot(t) {
                                return function (e) {
                                    return A(e, "input") && e.type === t;
                                };
                            }
                            function nt(t) {
                                return function (e) {
                                    return (
                                        (A(e, "input") || A(e, "button")) &&
                                        e.type === t
                                    );
                                };
                            }
                            function it(t) {
                                return function (e) {
                                    return "form" in e
                                        ? e.parentNode && !1 === e.disabled
                                            ? "label" in e
                                                ? "label" in e.parentNode
                                                    ? e.parentNode.disabled ===
                                                      t
                                                    : e.disabled === t
                                                : e.isDisabled === t ||
                                                  (e.isDisabled !== !t &&
                                                      J(e) === t)
                                            : e.disabled === t
                                        : "label" in e && e.disabled === t;
                                };
                            }
                            function at(t) {
                                return et(function (e) {
                                    return (
                                        (e = +e),
                                        et(function (r, o) {
                                            for (
                                                var n,
                                                    i = t([], r.length, e),
                                                    a = i.length;
                                                a--;

                                            )
                                                r[(n = i[a])] &&
                                                    (r[n] = !(o[n] = r[n]));
                                        })
                                    );
                                });
                            }
                            function st(t) {
                                return (
                                    t && void 0 !== t.getElementsByTagName && t
                                );
                            }
                            function lt(t) {
                                var r,
                                    o = t ? t.ownerDocument || t : M;
                                return o != l &&
                                    9 === o.nodeType &&
                                    o.documentElement
                                    ? ((d = (l = o).documentElement),
                                      (p = !C.isXMLDoc(l)),
                                      (g =
                                          d.matches ||
                                          d.webkitMatchesSelector ||
                                          d.msMatchesSelector),
                                      d.msMatchesSelector &&
                                          M != l &&
                                          (r = l.defaultView) &&
                                          r.top !== r &&
                                          r.addEventListener("unload", Q),
                                      (u.getById = rt(function (t) {
                                          return (
                                              (d.appendChild(t).id = C.expando),
                                              !l.getElementsByName ||
                                                  !l.getElementsByName(
                                                      C.expando
                                                  ).length
                                          );
                                      })),
                                      (u.disconnectedMatch = rt(function (t) {
                                          return g.call(t, "*");
                                      })),
                                      (u.scope = rt(function () {
                                          return l.querySelectorAll(":scope");
                                      })),
                                      (u.cssHas = rt(function () {
                                          try {
                                              return (
                                                  l.querySelector(
                                                      ":has(*,:jqfake)"
                                                  ),
                                                  !1
                                              );
                                          } catch (t) {
                                              return !0;
                                          }
                                      })),
                                      u.getById
                                          ? ((e.filter.ID = function (t) {
                                                var e = t.replace(Y, K);
                                                return function (t) {
                                                    return (
                                                        t.getAttribute("id") ===
                                                        e
                                                    );
                                                };
                                            }),
                                            (e.find.ID = function (t, e) {
                                                if (
                                                    void 0 !==
                                                        e.getElementById &&
                                                    p
                                                ) {
                                                    var r = e.getElementById(t);
                                                    return r ? [r] : [];
                                                }
                                            }))
                                          : ((e.filter.ID = function (t) {
                                                var e = t.replace(Y, K);
                                                return function (t) {
                                                    var r =
                                                        void 0 !==
                                                            t.getAttributeNode &&
                                                        t.getAttributeNode(
                                                            "id"
                                                        );
                                                    return r && r.value === e;
                                                };
                                            }),
                                            (e.find.ID = function (t, e) {
                                                if (
                                                    void 0 !==
                                                        e.getElementById &&
                                                    p
                                                ) {
                                                    var r,
                                                        o,
                                                        n,
                                                        i = e.getElementById(t);
                                                    if (i) {
                                                        if (
                                                            (r =
                                                                i.getAttributeNode(
                                                                    "id"
                                                                )) &&
                                                            r.value === t
                                                        )
                                                            return [i];
                                                        for (
                                                            n =
                                                                e.getElementsByName(
                                                                    t
                                                                ),
                                                                o = 0;
                                                            (i = n[o++]);

                                                        )
                                                            if (
                                                                (r =
                                                                    i.getAttributeNode(
                                                                        "id"
                                                                    )) &&
                                                                r.value === t
                                                            )
                                                                return [i];
                                                    }
                                                    return [];
                                                }
                                            })),
                                      (e.find.TAG = function (t, e) {
                                          return void 0 !==
                                              e.getElementsByTagName
                                              ? e.getElementsByTagName(t)
                                              : e.querySelectorAll(t);
                                      }),
                                      (e.find.CLASS = function (t, e) {
                                          if (
                                              void 0 !==
                                                  e.getElementsByClassName &&
                                              p
                                          )
                                              return e.getElementsByClassName(
                                                  t
                                              );
                                      }),
                                      (b = []),
                                      rt(function (t) {
                                          var e;
                                          (d.appendChild(t).innerHTML =
                                              "<a id='" +
                                              h +
                                              "' href='' disabled='disabled'></a><select id='" +
                                              h +
                                              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                                              t.querySelectorAll("[selected]")
                                                  .length ||
                                                  b.push(
                                                      "\\[" +
                                                          O +
                                                          "*(?:value|" +
                                                          T +
                                                          ")"
                                                  ),
                                              t.querySelectorAll(
                                                  "[id~=" + h + "-]"
                                              ).length || b.push("~="),
                                              t.querySelectorAll(
                                                  "a#" + h + "+*"
                                              ).length || b.push(".#.+[+~]"),
                                              t.querySelectorAll(":checked")
                                                  .length || b.push(":checked"),
                                              (e =
                                                  l.createElement(
                                                      "input"
                                                  )).setAttribute(
                                                  "type",
                                                  "hidden"
                                              ),
                                              t
                                                  .appendChild(e)
                                                  .setAttribute("name", "D"),
                                              (d.appendChild(t).disabled = !0),
                                              2 !==
                                                  t.querySelectorAll(
                                                      ":disabled"
                                                  ).length &&
                                                  b.push(
                                                      ":enabled",
                                                      ":disabled"
                                                  ),
                                              (e =
                                                  l.createElement(
                                                      "input"
                                                  )).setAttribute("name", ""),
                                              t.appendChild(e),
                                              t.querySelectorAll("[name='']")
                                                  .length ||
                                                  b.push(
                                                      "\\[" +
                                                          O +
                                                          "*name" +
                                                          O +
                                                          "*=" +
                                                          O +
                                                          "*(?:''|\"\")"
                                                  );
                                      }),
                                      u.cssHas || b.push(":has"),
                                      (b = b.length && new RegExp(b.join("|"))),
                                      (E = function (t, e) {
                                          if (t === e) return (a = !0), 0;
                                          var r =
                                              !t.compareDocumentPosition -
                                              !e.compareDocumentPosition;
                                          return (
                                              r ||
                                              (1 &
                                                  (r =
                                                      (t.ownerDocument || t) ==
                                                      (e.ownerDocument || e)
                                                          ? t.compareDocumentPosition(
                                                                e
                                                            )
                                                          : 1) ||
                                              (!u.sortDetached &&
                                                  e.compareDocumentPosition(
                                                      t
                                                  ) === r)
                                                  ? t === l ||
                                                    (t.ownerDocument == M &&
                                                        Z.contains(M, t))
                                                      ? -1
                                                      : e === l ||
                                                        (e.ownerDocument == M &&
                                                            Z.contains(M, e))
                                                      ? 1
                                                      : n
                                                      ? c.call(n, t) -
                                                        c.call(n, e)
                                                      : 0
                                                  : 4 & r
                                                  ? -1
                                                  : 1)
                                          );
                                      }),
                                      l)
                                    : l;
                            }
                            for (t in ((Z.matches = function (t, e) {
                                return Z(t, null, null, e);
                            }),
                            (Z.matchesSelector = function (t, e) {
                                if (
                                    (lt(t),
                                    p && !_[e + " "] && (!b || !b.test(e)))
                                )
                                    try {
                                        var r = g.call(t, e);
                                        if (
                                            r ||
                                            u.disconnectedMatch ||
                                            (t.document &&
                                                11 !== t.document.nodeType)
                                        )
                                            return r;
                                    } catch (t) {
                                        _(e, !0);
                                    }
                                return Z(e, l, null, [t]).length > 0;
                            }),
                            (Z.contains = function (t, e) {
                                return (
                                    (t.ownerDocument || t) != l && lt(t),
                                    C.contains(t, e)
                                );
                            }),
                            (Z.attr = function (t, r) {
                                (t.ownerDocument || t) != l && lt(t);
                                var o = e.attrHandle[r.toLowerCase()],
                                    n =
                                        o &&
                                        m.call(e.attrHandle, r.toLowerCase())
                                            ? o(t, r, !p)
                                            : void 0;
                                return void 0 !== n ? n : t.getAttribute(r);
                            }),
                            (Z.error = function (t) {
                                throw new Error(
                                    "Syntax error, unrecognized expression: " +
                                        t
                                );
                            }),
                            (C.uniqueSort = function (t) {
                                var e,
                                    r = [],
                                    o = 0,
                                    i = 0;
                                if (
                                    ((a = !u.sortStable),
                                    (n = !u.sortStable && s.call(t, 0)),
                                    z.call(t, E),
                                    a)
                                ) {
                                    for (; (e = t[i++]); )
                                        e === t[i] && (o = r.push(i));
                                    for (; o--; ) S.call(t, r[o], 1);
                                }
                                return (n = null), t;
                            }),
                            (C.fn.uniqueSort = function () {
                                return this.pushStack(
                                    C.uniqueSort(s.apply(this))
                                );
                            }),
                            (e = C.expr =
                                {
                                    cacheLength: 50,
                                    createPseudo: et,
                                    match: W,
                                    attrHandle: {},
                                    find: {},
                                    relative: {
                                        ">": { dir: "parentNode", first: !0 },
                                        " ": { dir: "parentNode" },
                                        "+": {
                                            dir: "previousSibling",
                                            first: !0,
                                        },
                                        "~": { dir: "previousSibling" },
                                    },
                                    preFilter: {
                                        ATTR: function (t) {
                                            return (
                                                (t[1] = t[1].replace(Y, K)),
                                                (t[3] = (
                                                    t[3] ||
                                                    t[4] ||
                                                    t[5] ||
                                                    ""
                                                ).replace(Y, K)),
                                                "~=" === t[2] &&
                                                    (t[3] = " " + t[3] + " "),
                                                t.slice(0, 4)
                                            );
                                        },
                                        CHILD: function (t) {
                                            return (
                                                (t[1] = t[1].toLowerCase()),
                                                "nth" === t[1].slice(0, 3)
                                                    ? (t[3] || Z.error(t[0]),
                                                      (t[4] = +(t[4]
                                                          ? t[5] + (t[6] || 1)
                                                          : 2 *
                                                            ("even" === t[3] ||
                                                                "odd" ===
                                                                    t[3]))),
                                                      (t[5] = +(
                                                          t[7] + t[8] ||
                                                          "odd" === t[3]
                                                      )))
                                                    : t[3] && Z.error(t[0]),
                                                t
                                            );
                                        },
                                        PSEUDO: function (t) {
                                            var e,
                                                r = !t[6] && t[2];
                                            return W.CHILD.test(t[0])
                                                ? null
                                                : (t[3]
                                                      ? (t[2] =
                                                            t[4] || t[5] || "")
                                                      : r &&
                                                        q.test(r) &&
                                                        (e = ct(r, !0)) &&
                                                        (e =
                                                            r.indexOf(
                                                                ")",
                                                                r.length - e
                                                            ) - r.length) &&
                                                        ((t[0] = t[0].slice(
                                                            0,
                                                            e
                                                        )),
                                                        (t[2] = r.slice(0, e))),
                                                  t.slice(0, 3));
                                        },
                                    },
                                    filter: {
                                        TAG: function (t) {
                                            var e = t
                                                .replace(Y, K)
                                                .toLowerCase();
                                            return "*" === t
                                                ? function () {
                                                      return !0;
                                                  }
                                                : function (t) {
                                                      return A(t, e);
                                                  };
                                        },
                                        CLASS: function (t) {
                                            var e = w[t + " "];
                                            return (
                                                e ||
                                                ((e = new RegExp(
                                                    "(^|" +
                                                        O +
                                                        ")" +
                                                        t +
                                                        "(" +
                                                        O +
                                                        "|$)"
                                                )) &&
                                                    w(t, function (t) {
                                                        return e.test(
                                                            ("string" ==
                                                                typeof t.className &&
                                                                t.className) ||
                                                                (void 0 !==
                                                                    t.getAttribute &&
                                                                    t.getAttribute(
                                                                        "class"
                                                                    )) ||
                                                                ""
                                                        );
                                                    }))
                                            );
                                        },
                                        ATTR: function (t, e, r) {
                                            return function (o) {
                                                var n = Z.attr(o, t);
                                                return null == n
                                                    ? "!=" === e
                                                    : !e ||
                                                          ((n += ""),
                                                          "=" === e
                                                              ? n === r
                                                              : "!=" === e
                                                              ? n !== r
                                                              : "^=" === e
                                                              ? r &&
                                                                0 ===
                                                                    n.indexOf(r)
                                                              : "*=" === e
                                                              ? r &&
                                                                n.indexOf(r) >
                                                                    -1
                                                              : "$=" === e
                                                              ? r &&
                                                                n.slice(
                                                                    -r.length
                                                                ) === r
                                                              : "~=" === e
                                                              ? (
                                                                    " " +
                                                                    n.replace(
                                                                        $,
                                                                        " "
                                                                    ) +
                                                                    " "
                                                                ).indexOf(r) >
                                                                -1
                                                              : "|=" === e &&
                                                                (n === r ||
                                                                    n.slice(
                                                                        0,
                                                                        r.length +
                                                                            1
                                                                    ) ===
                                                                        r +
                                                                            "-"));
                                            };
                                        },
                                        CHILD: function (t, e, r, o, n) {
                                            var i = "nth" !== t.slice(0, 3),
                                                a = "last" !== t.slice(-4),
                                                s = "of-type" === e;
                                            return 1 === o && 0 === n
                                                ? function (t) {
                                                      return !!t.parentNode;
                                                  }
                                                : function (e, r, l) {
                                                      var d,
                                                          c,
                                                          p,
                                                          b,
                                                          m,
                                                          g =
                                                              i !== a
                                                                  ? "nextSibling"
                                                                  : "previousSibling",
                                                          f = e.parentNode,
                                                          u =
                                                              s &&
                                                              e.nodeName.toLowerCase(),
                                                          x = !l && !s,
                                                          w = !1;
                                                      if (f) {
                                                          if (i) {
                                                              for (; g; ) {
                                                                  for (
                                                                      p = e;
                                                                      (p =
                                                                          p[g]);

                                                                  )
                                                                      if (
                                                                          s
                                                                              ? A(
                                                                                    p,
                                                                                    u
                                                                                )
                                                                              : 1 ===
                                                                                p.nodeType
                                                                      )
                                                                          return !1;
                                                                  m = g =
                                                                      "only" ===
                                                                          t &&
                                                                      !m &&
                                                                      "nextSibling";
                                                              }
                                                              return !0;
                                                          }
                                                          if (
                                                              ((m = [
                                                                  a
                                                                      ? f.firstChild
                                                                      : f.lastChild,
                                                              ]),
                                                              a && x)
                                                          ) {
                                                              for (
                                                                  w =
                                                                      (b =
                                                                          (d =
                                                                              (c =
                                                                                  f[
                                                                                      h
                                                                                  ] ||
                                                                                  (f[
                                                                                      h
                                                                                  ] =
                                                                                      {}))[
                                                                                  t
                                                                              ] ||
                                                                              [])[0] ===
                                                                              v &&
                                                                          d[1]) &&
                                                                      d[2],
                                                                      p =
                                                                          b &&
                                                                          f
                                                                              .childNodes[
                                                                              b
                                                                          ];
                                                                  (p =
                                                                      (++b &&
                                                                          p &&
                                                                          p[
                                                                              g
                                                                          ]) ||
                                                                      (w = b =
                                                                          0) ||
                                                                      m.pop());

                                                              )
                                                                  if (
                                                                      1 ===
                                                                          p.nodeType &&
                                                                      ++w &&
                                                                      p === e
                                                                  ) {
                                                                      c[t] = [
                                                                          v,
                                                                          b,
                                                                          w,
                                                                      ];
                                                                      break;
                                                                  }
                                                          } else if (
                                                              (x &&
                                                                  (w = b =
                                                                      (d =
                                                                          (c =
                                                                              e[
                                                                                  h
                                                                              ] ||
                                                                              (e[
                                                                                  h
                                                                              ] =
                                                                                  {}))[
                                                                              t
                                                                          ] ||
                                                                          [])[0] ===
                                                                          v &&
                                                                      d[1]),
                                                              !1 === w)
                                                          )
                                                              for (
                                                                  ;
                                                                  (p =
                                                                      (++b &&
                                                                          p &&
                                                                          p[
                                                                              g
                                                                          ]) ||
                                                                      (w = b =
                                                                          0) ||
                                                                      m.pop()) &&
                                                                  (!(s
                                                                      ? A(p, u)
                                                                      : 1 ===
                                                                        p.nodeType) ||
                                                                      !++w ||
                                                                      (x &&
                                                                          ((c =
                                                                              p[
                                                                                  h
                                                                              ] ||
                                                                              (p[
                                                                                  h
                                                                              ] =
                                                                                  {}))[
                                                                              t
                                                                          ] = [
                                                                              v,
                                                                              w,
                                                                          ]),
                                                                      p !== e));

                                                              );
                                                          return (
                                                              (w -= n) === o ||
                                                              (w % o == 0 &&
                                                                  w / o >= 0)
                                                          );
                                                      }
                                                  };
                                        },
                                        PSEUDO: function (t, r) {
                                            var o,
                                                n =
                                                    e.pseudos[t] ||
                                                    e.setFilters[
                                                        t.toLowerCase()
                                                    ] ||
                                                    Z.error(
                                                        "unsupported pseudo: " +
                                                            t
                                                    );
                                            return n[h]
                                                ? n(r)
                                                : n.length > 1
                                                ? ((o = [t, t, "", r]),
                                                  e.setFilters.hasOwnProperty(
                                                      t.toLowerCase()
                                                  )
                                                      ? et(function (t, e) {
                                                            for (
                                                                var o,
                                                                    i = n(t, r),
                                                                    a =
                                                                        i.length;
                                                                a--;

                                                            )
                                                                t[
                                                                    (o = c.call(
                                                                        t,
                                                                        i[a]
                                                                    ))
                                                                ] = !(e[o] =
                                                                    i[a]);
                                                        })
                                                      : function (t) {
                                                            return n(t, 0, o);
                                                        })
                                                : n;
                                        },
                                    },
                                    pseudos: {
                                        not: et(function (t) {
                                            var e = [],
                                                r = [],
                                                o = ht(t.replace(D, "$1"));
                                            return o[h]
                                                ? et(function (t, e, r, n) {
                                                      for (
                                                          var i,
                                                              a = o(
                                                                  t,
                                                                  null,
                                                                  n,
                                                                  []
                                                              ),
                                                              s = t.length;
                                                          s--;

                                                      )
                                                          (i = a[s]) &&
                                                              (t[s] = !(e[s] =
                                                                  i));
                                                  })
                                                : function (t, n, i) {
                                                      return (
                                                          (e[0] = t),
                                                          o(e, null, i, r),
                                                          (e[0] = null),
                                                          !r.pop()
                                                      );
                                                  };
                                        }),
                                        has: et(function (t) {
                                            return function (e) {
                                                return Z(t, e).length > 0;
                                            };
                                        }),
                                        contains: et(function (t) {
                                            return (
                                                (t = t.replace(Y, K)),
                                                function (e) {
                                                    return (
                                                        (
                                                            e.textContent ||
                                                            C.text(e)
                                                        ).indexOf(t) > -1
                                                    );
                                                }
                                            );
                                        }),
                                        lang: et(function (t) {
                                            return (
                                                F.test(t || "") ||
                                                    Z.error(
                                                        "unsupported lang: " + t
                                                    ),
                                                (t = t
                                                    .replace(Y, K)
                                                    .toLowerCase()),
                                                function (e) {
                                                    var r;
                                                    do {
                                                        if (
                                                            (r = p
                                                                ? e.lang
                                                                : e.getAttribute(
                                                                      "xml:lang"
                                                                  ) ||
                                                                  e.getAttribute(
                                                                      "lang"
                                                                  ))
                                                        )
                                                            return (
                                                                (r =
                                                                    r.toLowerCase()) ===
                                                                    t ||
                                                                0 ===
                                                                    r.indexOf(
                                                                        t + "-"
                                                                    )
                                                            );
                                                    } while (
                                                        (e = e.parentNode) &&
                                                        1 === e.nodeType
                                                    );
                                                    return !1;
                                                }
                                            );
                                        }),
                                        target: function (t) {
                                            var e =
                                                o.location && o.location.hash;
                                            return e && e.slice(1) === t.id;
                                        },
                                        root: function (t) {
                                            return t === d;
                                        },
                                        focus: function (t) {
                                            return (
                                                t ===
                                                    (function () {
                                                        try {
                                                            return l.activeElement;
                                                        } catch (t) {}
                                                    })() &&
                                                l.hasFocus() &&
                                                !!(
                                                    t.type ||
                                                    t.href ||
                                                    ~t.tabIndex
                                                )
                                            );
                                        },
                                        enabled: it(!1),
                                        disabled: it(!0),
                                        checked: function (t) {
                                            return (
                                                (A(t, "input") &&
                                                    !!t.checked) ||
                                                (A(t, "option") && !!t.selected)
                                            );
                                        },
                                        selected: function (t) {
                                            return (
                                                t.parentNode &&
                                                    t.parentNode.selectedIndex,
                                                !0 === t.selected
                                            );
                                        },
                                        empty: function (t) {
                                            for (
                                                t = t.firstChild;
                                                t;
                                                t = t.nextSibling
                                            )
                                                if (t.nodeType < 6) return !1;
                                            return !0;
                                        },
                                        parent: function (t) {
                                            return !e.pseudos.empty(t);
                                        },
                                        header: function (t) {
                                            return G.test(t.nodeName);
                                        },
                                        input: function (t) {
                                            return X.test(t.nodeName);
                                        },
                                        button: function (t) {
                                            return (
                                                (A(t, "input") &&
                                                    "button" === t.type) ||
                                                A(t, "button")
                                            );
                                        },
                                        text: function (t) {
                                            var e;
                                            return (
                                                A(t, "input") &&
                                                "text" === t.type &&
                                                (null ==
                                                    (e =
                                                        t.getAttribute(
                                                            "type"
                                                        )) ||
                                                    "text" === e.toLowerCase())
                                            );
                                        },
                                        first: at(function () {
                                            return [0];
                                        }),
                                        last: at(function (t, e) {
                                            return [e - 1];
                                        }),
                                        eq: at(function (t, e, r) {
                                            return [r < 0 ? r + e : r];
                                        }),
                                        even: at(function (t, e) {
                                            for (var r = 0; r < e; r += 2)
                                                t.push(r);
                                            return t;
                                        }),
                                        odd: at(function (t, e) {
                                            for (var r = 1; r < e; r += 2)
                                                t.push(r);
                                            return t;
                                        }),
                                        lt: at(function (t, e, r) {
                                            var o;
                                            for (
                                                o =
                                                    r < 0
                                                        ? r + e
                                                        : r > e
                                                        ? e
                                                        : r;
                                                --o >= 0;

                                            )
                                                t.push(o);
                                            return t;
                                        }),
                                        gt: at(function (t, e, r) {
                                            for (
                                                var o = r < 0 ? r + e : r;
                                                ++o < e;

                                            )
                                                t.push(o);
                                            return t;
                                        }),
                                    },
                                }),
                            (e.pseudos.nth = e.pseudos.eq),
                            {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0,
                            }))
                                e.pseudos[t] = ot(t);
                            for (t in { submit: !0, reset: !0 })
                                e.pseudos[t] = nt(t);
                            function dt() {}
                            function ct(t, r) {
                                var o,
                                    n,
                                    i,
                                    a,
                                    s,
                                    l,
                                    d,
                                    c = y[t + " "];
                                if (c) return r ? 0 : c.slice(0);
                                for (s = t, l = [], d = e.preFilter; s; ) {
                                    for (a in ((o && !(n = R.exec(s))) ||
                                        (n && (s = s.slice(n[0].length) || s),
                                        l.push((i = []))),
                                    (o = !1),
                                    (n = B.exec(s)) &&
                                        ((o = n.shift()),
                                        i.push({
                                            value: o,
                                            type: n[0].replace(D, " "),
                                        }),
                                        (s = s.slice(o.length))),
                                    e.filter))
                                        !(n = W[a].exec(s)) ||
                                            (d[a] && !(n = d[a](n))) ||
                                            ((o = n.shift()),
                                            i.push({
                                                value: o,
                                                type: a,
                                                matches: n,
                                            }),
                                            (s = s.slice(o.length)));
                                    if (!o) break;
                                }
                                return r
                                    ? s.length
                                    : s
                                    ? Z.error(t)
                                    : y(t, l).slice(0);
                            }
                            function pt(t) {
                                for (
                                    var e = 0, r = t.length, o = "";
                                    e < r;
                                    e++
                                )
                                    o += t[e].value;
                                return o;
                            }
                            function bt(t, e, r) {
                                var o = e.dir,
                                    n = e.next,
                                    i = n || o,
                                    a = r && "parentNode" === i,
                                    s = x++;
                                return e.first
                                    ? function (e, r, n) {
                                          for (; (e = e[o]); )
                                              if (1 === e.nodeType || a)
                                                  return t(e, r, n);
                                          return !1;
                                      }
                                    : function (e, r, l) {
                                          var d,
                                              c,
                                              p = [v, s];
                                          if (l) {
                                              for (; (e = e[o]); )
                                                  if (
                                                      (1 === e.nodeType || a) &&
                                                      t(e, r, l)
                                                  )
                                                      return !0;
                                          } else
                                              for (; (e = e[o]); )
                                                  if (1 === e.nodeType || a)
                                                      if (
                                                          ((c =
                                                              e[h] ||
                                                              (e[h] = {})),
                                                          n && A(e, n))
                                                      )
                                                          e = e[o] || e;
                                                      else {
                                                          if (
                                                              (d = c[i]) &&
                                                              d[0] === v &&
                                                              d[1] === s
                                                          )
                                                              return (p[2] =
                                                                  d[2]);
                                                          if (
                                                              ((c[i] = p),
                                                              (p[2] = t(
                                                                  e,
                                                                  r,
                                                                  l
                                                              )))
                                                          )
                                                              return !0;
                                                      }
                                          return !1;
                                      };
                            }
                            function mt(t) {
                                return t.length > 1
                                    ? function (e, r, o) {
                                          for (var n = t.length; n--; )
                                              if (!t[n](e, r, o)) return !1;
                                          return !0;
                                      }
                                    : t[0];
                            }
                            function gt(t, e, r, o, n) {
                                for (
                                    var i,
                                        a = [],
                                        s = 0,
                                        l = t.length,
                                        d = null != e;
                                    s < l;
                                    s++
                                )
                                    (i = t[s]) &&
                                        ((r && !r(i, o, n)) ||
                                            (a.push(i), d && e.push(s)));
                                return a;
                            }
                            function ft(t, e, r, o, n, i) {
                                return (
                                    o && !o[h] && (o = ft(o)),
                                    n && !n[h] && (n = ft(n, i)),
                                    et(function (i, a, s, l) {
                                        var d,
                                            p,
                                            b,
                                            m,
                                            g = [],
                                            u = [],
                                            h = a.length,
                                            v =
                                                i ||
                                                (function (t, e, r) {
                                                    for (
                                                        var o = 0, n = e.length;
                                                        o < n;
                                                        o++
                                                    )
                                                        Z(t, e[o], r);
                                                    return r;
                                                })(
                                                    e || "*",
                                                    s.nodeType ? [s] : s,
                                                    []
                                                ),
                                            x =
                                                !t || (!i && e)
                                                    ? v
                                                    : gt(v, g, t, s, l);
                                        if (
                                            (r
                                                ? r(
                                                      x,
                                                      (m =
                                                          n || (i ? t : h || o)
                                                              ? []
                                                              : a),
                                                      s,
                                                      l
                                                  )
                                                : (m = x),
                                            o)
                                        )
                                            for (
                                                d = gt(m, u),
                                                    o(d, [], s, l),
                                                    p = d.length;
                                                p--;

                                            )
                                                (b = d[p]) &&
                                                    (m[u[p]] = !(x[u[p]] = b));
                                        if (i) {
                                            if (n || t) {
                                                if (n) {
                                                    for (
                                                        d = [], p = m.length;
                                                        p--;

                                                    )
                                                        (b = m[p]) &&
                                                            d.push((x[p] = b));
                                                    n(null, (m = []), d, l);
                                                }
                                                for (p = m.length; p--; )
                                                    (b = m[p]) &&
                                                        (d = n
                                                            ? c.call(i, b)
                                                            : g[p]) > -1 &&
                                                        (i[d] = !(a[d] = b));
                                            }
                                        } else (m = gt(m === a ? m.splice(h, m.length) : m)), n ? n(null, a, m, l) : f.apply(a, m);
                                    })
                                );
                            }
                            function ut(t) {
                                for (
                                    var o,
                                        n,
                                        i,
                                        a = t.length,
                                        s = e.relative[t[0].type],
                                        l = s || e.relative[" "],
                                        d = s ? 1 : 0,
                                        p = bt(
                                            function (t) {
                                                return t === o;
                                            },
                                            l,
                                            !0
                                        ),
                                        b = bt(
                                            function (t) {
                                                return c.call(o, t) > -1;
                                            },
                                            l,
                                            !0
                                        ),
                                        m = [
                                            function (t, e, n) {
                                                var i =
                                                    (!s && (n || e != r)) ||
                                                    ((o = e).nodeType
                                                        ? p(t, e, n)
                                                        : b(t, e, n));
                                                return (o = null), i;
                                            },
                                        ];
                                    d < a;
                                    d++
                                )
                                    if ((n = e.relative[t[d].type]))
                                        m = [bt(mt(m), n)];
                                    else {
                                        if (
                                            (n = e.filter[t[d].type].apply(
                                                null,
                                                t[d].matches
                                            ))[h]
                                        ) {
                                            for (
                                                i = ++d;
                                                i < a && !e.relative[t[i].type];
                                                i++
                                            );
                                            return ft(
                                                d > 1 && mt(m),
                                                d > 1 &&
                                                    pt(
                                                        t
                                                            .slice(0, d - 1)
                                                            .concat({
                                                                value:
                                                                    " " ===
                                                                    t[d - 2]
                                                                        .type
                                                                        ? "*"
                                                                        : "",
                                                            })
                                                    ).replace(D, "$1"),
                                                n,
                                                d < i && ut(t.slice(d, i)),
                                                i < a && ut((t = t.slice(i))),
                                                i < a && pt(t)
                                            );
                                        }
                                        m.push(n);
                                    }
                                return mt(m);
                            }
                            function ht(t, o) {
                                var n,
                                    i = [],
                                    a = [],
                                    s = k[t + " "];
                                if (!s) {
                                    for (o || (o = ct(t)), n = o.length; n--; )
                                        (s = ut(o[n]))[h]
                                            ? i.push(s)
                                            : a.push(s);
                                    (s = k(
                                        t,
                                        (function (t, o) {
                                            var n = o.length > 0,
                                                i = t.length > 0,
                                                a = function (a, s, d, c, b) {
                                                    var m,
                                                        g,
                                                        u,
                                                        h = 0,
                                                        x = "0",
                                                        w = a && [],
                                                        y = [],
                                                        k = r,
                                                        _ =
                                                            a ||
                                                            (i &&
                                                                e.find.TAG(
                                                                    "*",
                                                                    b
                                                                )),
                                                        E = (v +=
                                                            null == k
                                                                ? 1
                                                                : Math.random() ||
                                                                  0.1),
                                                        T = _.length;
                                                    for (
                                                        b &&
                                                        (r = s == l || s || b);
                                                        x !== T &&
                                                        null != (m = _[x]);
                                                        x++
                                                    ) {
                                                        if (i && m) {
                                                            for (
                                                                g = 0,
                                                                    s ||
                                                                        m.ownerDocument ==
                                                                            l ||
                                                                        (lt(m),
                                                                        (d =
                                                                            !p));
                                                                (u = t[g++]);

                                                            )
                                                                if (
                                                                    u(
                                                                        m,
                                                                        s || l,
                                                                        d
                                                                    )
                                                                ) {
                                                                    f.call(
                                                                        c,
                                                                        m
                                                                    );
                                                                    break;
                                                                }
                                                            b && (v = E);
                                                        }
                                                        n &&
                                                            ((m = !u && m) &&
                                                                h--,
                                                            a && w.push(m));
                                                    }
                                                    if (
                                                        ((h += x), n && x !== h)
                                                    ) {
                                                        for (
                                                            g = 0;
                                                            (u = o[g++]);

                                                        )
                                                            u(w, y, s, d);
                                                        if (a) {
                                                            if (h > 0)
                                                                for (; x--; )
                                                                    w[x] ||
                                                                        y[x] ||
                                                                        (y[x] =
                                                                            j.call(
                                                                                c
                                                                            ));
                                                            y = gt(y);
                                                        }
                                                        f.apply(c, y),
                                                            b &&
                                                                !a &&
                                                                y.length > 0 &&
                                                                h + o.length >
                                                                    1 &&
                                                                C.uniqueSort(c);
                                                    }
                                                    return (
                                                        b && ((v = E), (r = k)),
                                                        w
                                                    );
                                                };
                                            return n ? et(a) : a;
                                        })(a, i)
                                    )),
                                        (s.selector = t);
                                }
                                return s;
                            }
                            function vt(t, r, o, n) {
                                var i,
                                    a,
                                    s,
                                    l,
                                    d,
                                    c = "function" == typeof t && t,
                                    b = !n && ct((t = c.selector || t));
                                if (((o = o || []), 1 === b.length)) {
                                    if (
                                        (a = b[0] = b[0].slice(0)).length > 2 &&
                                        "ID" === (s = a[0]).type &&
                                        9 === r.nodeType &&
                                        p &&
                                        e.relative[a[1].type]
                                    ) {
                                        if (
                                            !(r = (e.find.ID(
                                                s.matches[0].replace(Y, K),
                                                r
                                            ) || [])[0])
                                        )
                                            return o;
                                        c && (r = r.parentNode),
                                            (t = t.slice(
                                                a.shift().value.length
                                            ));
                                    }
                                    for (
                                        i = W.needsContext.test(t)
                                            ? 0
                                            : a.length;
                                        i-- &&
                                        ((s = a[i]), !e.relative[(l = s.type)]);

                                    )
                                        if (
                                            (d = e.find[l]) &&
                                            (n = d(
                                                s.matches[0].replace(Y, K),
                                                (V.test(a[0].type) &&
                                                    st(r.parentNode)) ||
                                                    r
                                            ))
                                        ) {
                                            if (
                                                (a.splice(i, 1),
                                                !(t = n.length && pt(a)))
                                            )
                                                return f.apply(o, n), o;
                                            break;
                                        }
                                }
                                return (
                                    (c || ht(t, b))(
                                        n,
                                        r,
                                        !p,
                                        o,
                                        !r ||
                                            (V.test(t) && st(r.parentNode)) ||
                                            r
                                    ),
                                    o
                                );
                            }
                            (dt.prototype = e.filters = e.pseudos),
                                (e.setFilters = new dt()),
                                (u.sortStable =
                                    h.split("").sort(E).join("") === h),
                                lt(),
                                (u.sortDetached = rt(function (t) {
                                    return (
                                        1 &
                                        t.compareDocumentPosition(
                                            l.createElement("fieldset")
                                        )
                                    );
                                })),
                                (C.find = Z),
                                (C.expr[":"] = C.expr.pseudos),
                                (C.unique = C.uniqueSort),
                                (Z.compile = ht),
                                (Z.select = vt),
                                (Z.setDocument = lt),
                                (Z.tokenize = ct),
                                (Z.escape = C.escapeSelector),
                                (Z.getText = C.text),
                                (Z.isXML = C.isXMLDoc),
                                (Z.selectors = C.expr),
                                (Z.support = C.support),
                                (Z.uniqueSort = C.uniqueSort);
                        })();
                        var I = function (t, e, r) {
                                for (
                                    var o = [], n = void 0 !== r;
                                    (t = t[e]) && 9 !== t.nodeType;

                                )
                                    if (1 === t.nodeType) {
                                        if (n && C(t).is(r)) break;
                                        o.push(t);
                                    }
                                return o;
                            },
                            $ = function (t, e) {
                                for (var r = []; t; t = t.nextSibling)
                                    1 === t.nodeType && t !== e && r.push(t);
                                return r;
                            },
                            R = C.expr.match.needsContext,
                            B =
                                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                        function H(t, e, r) {
                            return h(e)
                                ? C.grep(t, function (t, o) {
                                      return !!e.call(t, o, t) !== r;
                                  })
                                : e.nodeType
                                ? C.grep(t, function (t) {
                                      return (t === e) !== r;
                                  })
                                : "string" != typeof e
                                ? C.grep(t, function (t) {
                                      return c.call(e, t) > -1 !== r;
                                  })
                                : C.filter(e, t, r);
                        }
                        (C.filter = function (t, e, r) {
                            var o = e[0];
                            return (
                                r && (t = ":not(" + t + ")"),
                                1 === e.length && 1 === o.nodeType
                                    ? C.find.matchesSelector(o, t)
                                        ? [o]
                                        : []
                                    : C.find.matches(
                                          t,
                                          C.grep(e, function (t) {
                                              return 1 === t.nodeType;
                                          })
                                      )
                            );
                        }),
                            C.fn.extend({
                                find: function (t) {
                                    var e,
                                        r,
                                        o = this.length,
                                        n = this;
                                    if ("string" != typeof t)
                                        return this.pushStack(
                                            C(t).filter(function () {
                                                for (e = 0; e < o; e++)
                                                    if (C.contains(n[e], this))
                                                        return !0;
                                            })
                                        );
                                    for (
                                        r = this.pushStack([]), e = 0;
                                        e < o;
                                        e++
                                    )
                                        C.find(t, n[e], r);
                                    return o > 1 ? C.uniqueSort(r) : r;
                                },
                                filter: function (t) {
                                    return this.pushStack(H(this, t || [], !1));
                                },
                                not: function (t) {
                                    return this.pushStack(H(this, t || [], !0));
                                },
                                is: function (t) {
                                    return !!H(
                                        this,
                                        "string" == typeof t && R.test(t)
                                            ? C(t)
                                            : t || [],
                                        !1
                                    ).length;
                                },
                            });
                        var q,
                            F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                        ((C.fn.init = function (t, e, r) {
                            var o, n;
                            if (!t) return this;
                            if (((r = r || q), "string" == typeof t)) {
                                if (
                                    !(o =
                                        "<" === t[0] &&
                                        ">" === t[t.length - 1] &&
                                        t.length >= 3
                                            ? [null, t, null]
                                            : F.exec(t)) ||
                                    (!o[1] && e)
                                )
                                    return !e || e.jquery
                                        ? (e || r).find(t)
                                        : this.constructor(e).find(t);
                                if (o[1]) {
                                    if (
                                        ((e = e instanceof C ? e[0] : e),
                                        C.merge(
                                            this,
                                            C.parseHTML(
                                                o[1],
                                                e && e.nodeType
                                                    ? e.ownerDocument || e
                                                    : x,
                                                !0
                                            )
                                        ),
                                        B.test(o[1]) && C.isPlainObject(e))
                                    )
                                        for (o in e)
                                            h(this[o])
                                                ? this[o](e[o])
                                                : this.attr(o, e[o]);
                                    return this;
                                }
                                return (
                                    (n = x.getElementById(o[2])) &&
                                        ((this[0] = n), (this.length = 1)),
                                    this
                                );
                            }
                            return t.nodeType
                                ? ((this[0] = t), (this.length = 1), this)
                                : h(t)
                                ? void 0 !== r.ready
                                    ? r.ready(t)
                                    : t(C)
                                : C.makeArray(t, this);
                        }).prototype = C.fn),
                            (q = C(x));
                        var W = /^(?:parents|prev(?:Until|All))/,
                            X = {
                                children: !0,
                                contents: !0,
                                next: !0,
                                prev: !0,
                            };
                        function G(t, e) {
                            for (; (t = t[e]) && 1 !== t.nodeType; );
                            return t;
                        }
                        C.fn.extend({
                            has: function (t) {
                                var e = C(t, this),
                                    r = e.length;
                                return this.filter(function () {
                                    for (var t = 0; t < r; t++)
                                        if (C.contains(this, e[t])) return !0;
                                });
                            },
                            closest: function (t, e) {
                                var r,
                                    o = 0,
                                    n = this.length,
                                    i = [],
                                    a = "string" != typeof t && C(t);
                                if (!R.test(t))
                                    for (; o < n; o++)
                                        for (
                                            r = this[o];
                                            r && r !== e;
                                            r = r.parentNode
                                        )
                                            if (
                                                r.nodeType < 11 &&
                                                (a
                                                    ? a.index(r) > -1
                                                    : 1 === r.nodeType &&
                                                      C.find.matchesSelector(
                                                          r,
                                                          t
                                                      ))
                                            ) {
                                                i.push(r);
                                                break;
                                            }
                                return this.pushStack(
                                    i.length > 1 ? C.uniqueSort(i) : i
                                );
                            },
                            index: function (t) {
                                return t
                                    ? "string" == typeof t
                                        ? c.call(C(t), this[0])
                                        : c.call(this, t.jquery ? t[0] : t)
                                    : this[0] && this[0].parentNode
                                    ? this.first().prevAll().length
                                    : -1;
                            },
                            add: function (t, e) {
                                return this.pushStack(
                                    C.uniqueSort(C.merge(this.get(), C(t, e)))
                                );
                            },
                            addBack: function (t) {
                                return this.add(
                                    null == t
                                        ? this.prevObject
                                        : this.prevObject.filter(t)
                                );
                            },
                        }),
                            C.each(
                                {
                                    parent: function (t) {
                                        var e = t.parentNode;
                                        return e && 11 !== e.nodeType
                                            ? e
                                            : null;
                                    },
                                    parents: function (t) {
                                        return I(t, "parentNode");
                                    },
                                    parentsUntil: function (t, e, r) {
                                        return I(t, "parentNode", r);
                                    },
                                    next: function (t) {
                                        return G(t, "nextSibling");
                                    },
                                    prev: function (t) {
                                        return G(t, "previousSibling");
                                    },
                                    nextAll: function (t) {
                                        return I(t, "nextSibling");
                                    },
                                    prevAll: function (t) {
                                        return I(t, "previousSibling");
                                    },
                                    nextUntil: function (t, e, r) {
                                        return I(t, "nextSibling", r);
                                    },
                                    prevUntil: function (t, e, r) {
                                        return I(t, "previousSibling", r);
                                    },
                                    siblings: function (t) {
                                        return $(
                                            (t.parentNode || {}).firstChild,
                                            t
                                        );
                                    },
                                    children: function (t) {
                                        return $(t.firstChild);
                                    },
                                    contents: function (t) {
                                        return null != t.contentDocument &&
                                            a(t.contentDocument)
                                            ? t.contentDocument
                                            : (A(t, "template") &&
                                                  (t = t.content || t),
                                              C.merge([], t.childNodes));
                                    },
                                },
                                function (t, e) {
                                    C.fn[t] = function (r, o) {
                                        var n = C.map(this, e, r);
                                        return (
                                            "Until" !== t.slice(-5) && (o = r),
                                            o &&
                                                "string" == typeof o &&
                                                (n = C.filter(o, n)),
                                            this.length > 1 &&
                                                (X[t] || C.uniqueSort(n),
                                                W.test(t) && n.reverse()),
                                            this.pushStack(n)
                                        );
                                    };
                                }
                            );
                        var U = /[^\x20\t\r\n\f]+/g;
                        function V(t) {
                            return t;
                        }
                        function Y(t) {
                            throw t;
                        }
                        function K(t, e, r, o) {
                            var n;
                            try {
                                t && h((n = t.promise))
                                    ? n.call(t).done(e).fail(r)
                                    : t && h((n = t.then))
                                    ? n.call(t, e, r)
                                    : e.apply(void 0, [t].slice(o));
                            } catch (t) {
                                r.apply(void 0, [t]);
                            }
                        }
                        (C.Callbacks = function (t) {
                            t =
                                "string" == typeof t
                                    ? (function (t) {
                                          var e = {};
                                          return (
                                              C.each(
                                                  t.match(U) || [],
                                                  function (t, r) {
                                                      e[r] = !0;
                                                  }
                                              ),
                                              e
                                          );
                                      })(t)
                                    : C.extend({}, t);
                            var e,
                                r,
                                o,
                                n,
                                i = [],
                                a = [],
                                s = -1,
                                l = function () {
                                    for (
                                        n = n || t.once, o = e = !0;
                                        a.length;
                                        s = -1
                                    )
                                        for (r = a.shift(); ++s < i.length; )
                                            !1 === i[s].apply(r[0], r[1]) &&
                                                t.stopOnFalse &&
                                                ((s = i.length), (r = !1));
                                    t.memory || (r = !1),
                                        (e = !1),
                                        n && (i = r ? [] : "");
                                },
                                d = {
                                    add: function () {
                                        return (
                                            i &&
                                                (r &&
                                                    !e &&
                                                    ((s = i.length - 1),
                                                    a.push(r)),
                                                (function e(r) {
                                                    C.each(r, function (r, o) {
                                                        h(o)
                                                            ? (t.unique &&
                                                                  d.has(o)) ||
                                                              i.push(o)
                                                            : o &&
                                                              o.length &&
                                                              "string" !==
                                                                  k(o) &&
                                                              e(o);
                                                    });
                                                })(arguments),
                                                r && !e && l()),
                                            this
                                        );
                                    },
                                    remove: function () {
                                        return (
                                            C.each(arguments, function (t, e) {
                                                for (
                                                    var r;
                                                    (r = C.inArray(e, i, r)) >
                                                    -1;

                                                )
                                                    i.splice(r, 1),
                                                        r <= s && s--;
                                            }),
                                            this
                                        );
                                    },
                                    has: function (t) {
                                        return t
                                            ? C.inArray(t, i) > -1
                                            : i.length > 0;
                                    },
                                    empty: function () {
                                        return i && (i = []), this;
                                    },
                                    disable: function () {
                                        return (n = a = []), (i = r = ""), this;
                                    },
                                    disabled: function () {
                                        return !i;
                                    },
                                    lock: function () {
                                        return (
                                            (n = a = []),
                                            r || e || (i = r = ""),
                                            this
                                        );
                                    },
                                    locked: function () {
                                        return !!n;
                                    },
                                    fireWith: function (t, r) {
                                        return (
                                            n ||
                                                ((r = [
                                                    t,
                                                    (r = r || []).slice
                                                        ? r.slice()
                                                        : r,
                                                ]),
                                                a.push(r),
                                                e || l()),
                                            this
                                        );
                                    },
                                    fire: function () {
                                        return (
                                            d.fireWith(this, arguments), this
                                        );
                                    },
                                    fired: function () {
                                        return !!o;
                                    },
                                };
                            return d;
                        }),
                            C.extend({
                                Deferred: function (t) {
                                    var e = [
                                            [
                                                "notify",
                                                "progress",
                                                C.Callbacks("memory"),
                                                C.Callbacks("memory"),
                                                2,
                                            ],
                                            [
                                                "resolve",
                                                "done",
                                                C.Callbacks("once memory"),
                                                C.Callbacks("once memory"),
                                                0,
                                                "resolved",
                                            ],
                                            [
                                                "reject",
                                                "fail",
                                                C.Callbacks("once memory"),
                                                C.Callbacks("once memory"),
                                                1,
                                                "rejected",
                                            ],
                                        ],
                                        r = "pending",
                                        n = {
                                            state: function () {
                                                return r;
                                            },
                                            always: function () {
                                                return (
                                                    i
                                                        .done(arguments)
                                                        .fail(arguments),
                                                    this
                                                );
                                            },
                                            catch: function (t) {
                                                return n.then(null, t);
                                            },
                                            pipe: function () {
                                                var t = arguments;
                                                return C.Deferred(function (r) {
                                                    C.each(e, function (e, o) {
                                                        var n =
                                                            h(t[o[4]]) &&
                                                            t[o[4]];
                                                        i[o[1]](function () {
                                                            var t =
                                                                n &&
                                                                n.apply(
                                                                    this,
                                                                    arguments
                                                                );
                                                            t && h(t.promise)
                                                                ? t
                                                                      .promise()
                                                                      .progress(
                                                                          r.notify
                                                                      )
                                                                      .done(
                                                                          r.resolve
                                                                      )
                                                                      .fail(
                                                                          r.reject
                                                                      )
                                                                : r[
                                                                      o[0] +
                                                                          "With"
                                                                  ](
                                                                      this,
                                                                      n
                                                                          ? [t]
                                                                          : arguments
                                                                  );
                                                        });
                                                    }),
                                                        (t = null);
                                                }).promise();
                                            },
                                            then: function (t, r, n) {
                                                var i = 0;
                                                function a(t, e, r, n) {
                                                    return function () {
                                                        var s = this,
                                                            l = arguments,
                                                            d = function () {
                                                                var o, d;
                                                                if (!(t < i)) {
                                                                    if (
                                                                        (o =
                                                                            r.apply(
                                                                                s,
                                                                                l
                                                                            )) ===
                                                                        e.promise()
                                                                    )
                                                                        throw new TypeError(
                                                                            "Thenable self-resolution"
                                                                        );
                                                                    (d =
                                                                        o &&
                                                                        ("object" ==
                                                                            typeof o ||
                                                                            "function" ==
                                                                                typeof o) &&
                                                                        o.then),
                                                                        h(d)
                                                                            ? n
                                                                                ? d.call(
                                                                                      o,
                                                                                      a(
                                                                                          i,
                                                                                          e,
                                                                                          V,
                                                                                          n
                                                                                      ),
                                                                                      a(
                                                                                          i,
                                                                                          e,
                                                                                          Y,
                                                                                          n
                                                                                      )
                                                                                  )
                                                                                : (i++,
                                                                                  d.call(
                                                                                      o,
                                                                                      a(
                                                                                          i,
                                                                                          e,
                                                                                          V,
                                                                                          n
                                                                                      ),
                                                                                      a(
                                                                                          i,
                                                                                          e,
                                                                                          Y,
                                                                                          n
                                                                                      ),
                                                                                      a(
                                                                                          i,
                                                                                          e,
                                                                                          V,
                                                                                          e.notifyWith
                                                                                      )
                                                                                  ))
                                                                            : (r !==
                                                                                  V &&
                                                                                  ((s =
                                                                                      void 0),
                                                                                  (l =
                                                                                      [
                                                                                          o,
                                                                                      ])),
                                                                              (
                                                                                  n ||
                                                                                  e.resolveWith
                                                                              )(
                                                                                  s,
                                                                                  l
                                                                              ));
                                                                }
                                                            },
                                                            c = n
                                                                ? d
                                                                : function () {
                                                                      try {
                                                                          d();
                                                                      } catch (o) {
                                                                          C
                                                                              .Deferred
                                                                              .exceptionHook &&
                                                                              C.Deferred.exceptionHook(
                                                                                  o,
                                                                                  c.error
                                                                              ),
                                                                              t +
                                                                                  1 >=
                                                                                  i &&
                                                                                  (r !==
                                                                                      Y &&
                                                                                      ((s =
                                                                                          void 0),
                                                                                      (l =
                                                                                          [
                                                                                              o,
                                                                                          ])),
                                                                                  e.rejectWith(
                                                                                      s,
                                                                                      l
                                                                                  ));
                                                                      }
                                                                  };
                                                        t
                                                            ? c()
                                                            : (C.Deferred
                                                                  .getErrorHook
                                                                  ? (c.error =
                                                                        C.Deferred.getErrorHook())
                                                                  : C.Deferred
                                                                        .getStackHook &&
                                                                    (c.error =
                                                                        C.Deferred.getStackHook()),
                                                              o.setTimeout(c));
                                                    };
                                                }
                                                return C.Deferred(function (o) {
                                                    e[0][3].add(
                                                        a(
                                                            0,
                                                            o,
                                                            h(n) ? n : V,
                                                            o.notifyWith
                                                        )
                                                    ),
                                                        e[1][3].add(
                                                            a(
                                                                0,
                                                                o,
                                                                h(t) ? t : V
                                                            )
                                                        ),
                                                        e[2][3].add(
                                                            a(
                                                                0,
                                                                o,
                                                                h(r) ? r : Y
                                                            )
                                                        );
                                                }).promise();
                                            },
                                            promise: function (t) {
                                                return null != t
                                                    ? C.extend(t, n)
                                                    : n;
                                            },
                                        },
                                        i = {};
                                    return (
                                        C.each(e, function (t, o) {
                                            var a = o[2],
                                                s = o[5];
                                            (n[o[1]] = a.add),
                                                s &&
                                                    a.add(
                                                        function () {
                                                            r = s;
                                                        },
                                                        e[3 - t][2].disable,
                                                        e[3 - t][3].disable,
                                                        e[0][2].lock,
                                                        e[0][3].lock
                                                    ),
                                                a.add(o[3].fire),
                                                (i[o[0]] = function () {
                                                    return (
                                                        i[o[0] + "With"](
                                                            this === i
                                                                ? void 0
                                                                : this,
                                                            arguments
                                                        ),
                                                        this
                                                    );
                                                }),
                                                (i[o[0] + "With"] = a.fireWith);
                                        }),
                                        n.promise(i),
                                        t && t.call(i, i),
                                        i
                                    );
                                },
                                when: function (t) {
                                    var e = arguments.length,
                                        r = e,
                                        o = Array(r),
                                        n = s.call(arguments),
                                        i = C.Deferred(),
                                        a = function (t) {
                                            return function (r) {
                                                (o[t] = this),
                                                    (n[t] =
                                                        arguments.length > 1
                                                            ? s.call(arguments)
                                                            : r),
                                                    --e || i.resolveWith(o, n);
                                            };
                                        };
                                    if (
                                        e <= 1 &&
                                        (K(
                                            t,
                                            i.done(a(r)).resolve,
                                            i.reject,
                                            !e
                                        ),
                                        "pending" === i.state() ||
                                            h(n[r] && n[r].then))
                                    )
                                        return i.then();
                                    for (; r--; ) K(n[r], a(r), i.reject);
                                    return i.promise();
                                },
                            });
                        var Q =
                            /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                        (C.Deferred.exceptionHook = function (t, e) {
                            o.console &&
                                o.console.warn &&
                                t &&
                                Q.test(t.name) &&
                                o.console.warn(
                                    "jQuery.Deferred exception: " + t.message,
                                    t.stack,
                                    e
                                );
                        }),
                            (C.readyException = function (t) {
                                o.setTimeout(function () {
                                    throw t;
                                });
                            });
                        var J = C.Deferred();
                        function Z() {
                            x.removeEventListener("DOMContentLoaded", Z),
                                o.removeEventListener("load", Z),
                                C.ready();
                        }
                        (C.fn.ready = function (t) {
                            return (
                                J.then(t).catch(function (t) {
                                    C.readyException(t);
                                }),
                                this
                            );
                        }),
                            C.extend({
                                isReady: !1,
                                readyWait: 1,
                                ready: function (t) {
                                    (!0 === t ? --C.readyWait : C.isReady) ||
                                        ((C.isReady = !0),
                                        (!0 !== t && --C.readyWait > 0) ||
                                            J.resolveWith(x, [C]));
                                },
                            }),
                            (C.ready.then = J.then),
                            "complete" === x.readyState ||
                            ("loading" !== x.readyState &&
                                !x.documentElement.doScroll)
                                ? o.setTimeout(C.ready)
                                : (x.addEventListener("DOMContentLoaded", Z),
                                  o.addEventListener("load", Z));
                        var tt = function (t, e, r, o, n, i, a) {
                                var s = 0,
                                    l = t.length,
                                    d = null == r;
                                if ("object" === k(r))
                                    for (s in ((n = !0), r))
                                        tt(t, e, s, r[s], !0, i, a);
                                else if (
                                    void 0 !== o &&
                                    ((n = !0),
                                    h(o) || (a = !0),
                                    d &&
                                        (a
                                            ? (e.call(t, o), (e = null))
                                            : ((d = e),
                                              (e = function (t, e, r) {
                                                  return d.call(C(t), r);
                                              }))),
                                    e)
                                )
                                    for (; s < l; s++)
                                        e(
                                            t[s],
                                            r,
                                            a ? o : o.call(t[s], s, e(t[s], r))
                                        );
                                return n
                                    ? t
                                    : d
                                    ? e.call(t)
                                    : l
                                    ? e(t[0], r)
                                    : i;
                            },
                            et = /^-ms-/,
                            rt = /-([a-z])/g;
                        function ot(t, e) {
                            return e.toUpperCase();
                        }
                        function nt(t) {
                            return t.replace(et, "ms-").replace(rt, ot);
                        }
                        var it = function (t) {
                            return (
                                1 === t.nodeType ||
                                9 === t.nodeType ||
                                !+t.nodeType
                            );
                        };
                        function at() {
                            this.expando = C.expando + at.uid++;
                        }
                        (at.uid = 1),
                            (at.prototype = {
                                cache: function (t) {
                                    var e = t[this.expando];
                                    return (
                                        e ||
                                            ((e = {}),
                                            it(t) &&
                                                (t.nodeType
                                                    ? (t[this.expando] = e)
                                                    : Object.defineProperty(
                                                          t,
                                                          this.expando,
                                                          {
                                                              value: e,
                                                              configurable: !0,
                                                          }
                                                      ))),
                                        e
                                    );
                                },
                                set: function (t, e, r) {
                                    var o,
                                        n = this.cache(t);
                                    if ("string" == typeof e) n[nt(e)] = r;
                                    else for (o in e) n[nt(o)] = e[o];
                                    return n;
                                },
                                get: function (t, e) {
                                    return void 0 === e
                                        ? this.cache(t)
                                        : t[this.expando] &&
                                              t[this.expando][nt(e)];
                                },
                                access: function (t, e, r) {
                                    return void 0 === e ||
                                        (e &&
                                            "string" == typeof e &&
                                            void 0 === r)
                                        ? this.get(t, e)
                                        : (this.set(t, e, r),
                                          void 0 !== r ? r : e);
                                },
                                remove: function (t, e) {
                                    var r,
                                        o = t[this.expando];
                                    if (void 0 !== o) {
                                        if (void 0 !== e) {
                                            r = (e = Array.isArray(e)
                                                ? e.map(nt)
                                                : (e = nt(e)) in o
                                                ? [e]
                                                : e.match(U) || []).length;
                                            for (; r--; ) delete o[e[r]];
                                        }
                                        (void 0 === e || C.isEmptyObject(o)) &&
                                            (t.nodeType
                                                ? (t[this.expando] = void 0)
                                                : delete t[this.expando]);
                                    }
                                },
                                hasData: function (t) {
                                    var e = t[this.expando];
                                    return void 0 !== e && !C.isEmptyObject(e);
                                },
                            });
                        var st = new at(),
                            lt = new at(),
                            dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            ct = /[A-Z]/g;
                        function pt(t, e, r) {
                            var o;
                            if (void 0 === r && 1 === t.nodeType)
                                if (
                                    ((o =
                                        "data-" +
                                        e.replace(ct, "-$&").toLowerCase()),
                                    "string" == typeof (r = t.getAttribute(o)))
                                ) {
                                    try {
                                        r = (function (t) {
                                            return (
                                                "true" === t ||
                                                ("false" !== t &&
                                                    ("null" === t
                                                        ? null
                                                        : t === +t + ""
                                                        ? +t
                                                        : dt.test(t)
                                                        ? JSON.parse(t)
                                                        : t))
                                            );
                                        })(r);
                                    } catch (t) {}
                                    lt.set(t, e, r);
                                } else r = void 0;
                            return r;
                        }
                        C.extend({
                            hasData: function (t) {
                                return lt.hasData(t) || st.hasData(t);
                            },
                            data: function (t, e, r) {
                                return lt.access(t, e, r);
                            },
                            removeData: function (t, e) {
                                lt.remove(t, e);
                            },
                            _data: function (t, e, r) {
                                return st.access(t, e, r);
                            },
                            _removeData: function (t, e) {
                                st.remove(t, e);
                            },
                        }),
                            C.fn.extend({
                                data: function (t, e) {
                                    var r,
                                        o,
                                        n,
                                        i = this[0],
                                        a = i && i.attributes;
                                    if (void 0 === t) {
                                        if (
                                            this.length &&
                                            ((n = lt.get(i)),
                                            1 === i.nodeType &&
                                                !st.get(i, "hasDataAttrs"))
                                        ) {
                                            for (r = a.length; r--; )
                                                a[r] &&
                                                    0 ===
                                                        (o = a[r].name).indexOf(
                                                            "data-"
                                                        ) &&
                                                    ((o = nt(o.slice(5))),
                                                    pt(i, o, n[o]));
                                            st.set(i, "hasDataAttrs", !0);
                                        }
                                        return n;
                                    }
                                    return "object" == typeof t
                                        ? this.each(function () {
                                              lt.set(this, t);
                                          })
                                        : tt(
                                              this,
                                              function (e) {
                                                  var r;
                                                  if (i && void 0 === e)
                                                      return void 0 !==
                                                          (r = lt.get(i, t)) ||
                                                          void 0 !==
                                                              (r = pt(i, t))
                                                          ? r
                                                          : void 0;
                                                  this.each(function () {
                                                      lt.set(this, t, e);
                                                  });
                                              },
                                              null,
                                              e,
                                              arguments.length > 1,
                                              null,
                                              !0
                                          );
                                },
                                removeData: function (t) {
                                    return this.each(function () {
                                        lt.remove(this, t);
                                    });
                                },
                            }),
                            C.extend({
                                queue: function (t, e, r) {
                                    var o;
                                    if (t)
                                        return (
                                            (e = (e || "fx") + "queue"),
                                            (o = st.get(t, e)),
                                            r &&
                                                (!o || Array.isArray(r)
                                                    ? (o = st.access(
                                                          t,
                                                          e,
                                                          C.makeArray(r)
                                                      ))
                                                    : o.push(r)),
                                            o || []
                                        );
                                },
                                dequeue: function (t, e) {
                                    e = e || "fx";
                                    var r = C.queue(t, e),
                                        o = r.length,
                                        n = r.shift(),
                                        i = C._queueHooks(t, e);
                                    "inprogress" === n &&
                                        ((n = r.shift()), o--),
                                        n &&
                                            ("fx" === e &&
                                                r.unshift("inprogress"),
                                            delete i.stop,
                                            n.call(
                                                t,
                                                function () {
                                                    C.dequeue(t, e);
                                                },
                                                i
                                            )),
                                        !o && i && i.empty.fire();
                                },
                                _queueHooks: function (t, e) {
                                    var r = e + "queueHooks";
                                    return (
                                        st.get(t, r) ||
                                        st.access(t, r, {
                                            empty: C.Callbacks(
                                                "once memory"
                                            ).add(function () {
                                                st.remove(t, [e + "queue", r]);
                                            }),
                                        })
                                    );
                                },
                            }),
                            C.fn.extend({
                                queue: function (t, e) {
                                    var r = 2;
                                    return (
                                        "string" != typeof t &&
                                            ((e = t), (t = "fx"), r--),
                                        arguments.length < r
                                            ? C.queue(this[0], t)
                                            : void 0 === e
                                            ? this
                                            : this.each(function () {
                                                  var r = C.queue(this, t, e);
                                                  C._queueHooks(this, t),
                                                      "fx" === t &&
                                                          "inprogress" !==
                                                              r[0] &&
                                                          C.dequeue(this, t);
                                              })
                                    );
                                },
                                dequeue: function (t) {
                                    return this.each(function () {
                                        C.dequeue(this, t);
                                    });
                                },
                                clearQueue: function (t) {
                                    return this.queue(t || "fx", []);
                                },
                                promise: function (t, e) {
                                    var r,
                                        o = 1,
                                        n = C.Deferred(),
                                        i = this,
                                        a = this.length,
                                        s = function () {
                                            --o || n.resolveWith(i, [i]);
                                        };
                                    for (
                                        "string" != typeof t &&
                                            ((e = t), (t = void 0)),
                                            t = t || "fx";
                                        a--;

                                    )
                                        (r = st.get(i[a], t + "queueHooks")) &&
                                            r.empty &&
                                            (o++, r.empty.add(s));
                                    return s(), n.promise(e);
                                },
                            });
                        var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            mt = new RegExp(
                                "^(?:([+-])=|)(" + bt + ")([a-z%]*)$",
                                "i"
                            ),
                            gt = ["Top", "Right", "Bottom", "Left"],
                            ft = x.documentElement,
                            ut = function (t) {
                                return C.contains(t.ownerDocument, t);
                            },
                            ht = { composed: !0 };
                        ft.getRootNode &&
                            (ut = function (t) {
                                return (
                                    C.contains(t.ownerDocument, t) ||
                                    t.getRootNode(ht) === t.ownerDocument
                                );
                            });
                        var vt = function (t, e) {
                            return (
                                "none" === (t = e || t).style.display ||
                                ("" === t.style.display &&
                                    ut(t) &&
                                    "none" === C.css(t, "display"))
                            );
                        };
                        function xt(t, e, r, o) {
                            var n,
                                i,
                                a = 20,
                                s = o
                                    ? function () {
                                          return o.cur();
                                      }
                                    : function () {
                                          return C.css(t, e, "");
                                      },
                                l = s(),
                                d = (r && r[3]) || (C.cssNumber[e] ? "" : "px"),
                                c =
                                    t.nodeType &&
                                    (C.cssNumber[e] || ("px" !== d && +l)) &&
                                    mt.exec(C.css(t, e));
                            if (c && c[3] !== d) {
                                for (l /= 2, d = d || c[3], c = +l || 1; a--; )
                                    C.style(t, e, c + d),
                                        (1 - i) * (1 - (i = s() / l || 0.5)) <=
                                            0 && (a = 0),
                                        (c /= i);
                                (c *= 2), C.style(t, e, c + d), (r = r || []);
                            }
                            return (
                                r &&
                                    ((c = +c || +l || 0),
                                    (n = r[1] ? c + (r[1] + 1) * r[2] : +r[2]),
                                    o &&
                                        ((o.unit = d),
                                        (o.start = c),
                                        (o.end = n))),
                                n
                            );
                        }
                        var wt = {};
                        function yt(t) {
                            var e,
                                r = t.ownerDocument,
                                o = t.nodeName,
                                n = wt[o];
                            return (
                                n ||
                                ((e = r.body.appendChild(r.createElement(o))),
                                (n = C.css(e, "display")),
                                e.parentNode.removeChild(e),
                                "none" === n && (n = "block"),
                                (wt[o] = n),
                                n)
                            );
                        }
                        function kt(t, e) {
                            for (
                                var r, o, n = [], i = 0, a = t.length;
                                i < a;
                                i++
                            )
                                (o = t[i]).style &&
                                    ((r = o.style.display),
                                    e
                                        ? ("none" === r &&
                                              ((n[i] =
                                                  st.get(o, "display") || null),
                                              n[i] || (o.style.display = "")),
                                          "" === o.style.display &&
                                              vt(o) &&
                                              (n[i] = yt(o)))
                                        : "none" !== r &&
                                          ((n[i] = "none"),
                                          st.set(o, "display", r)));
                            for (i = 0; i < a; i++)
                                null != n[i] && (t[i].style.display = n[i]);
                            return t;
                        }
                        C.fn.extend({
                            show: function () {
                                return kt(this, !0);
                            },
                            hide: function () {
                                return kt(this);
                            },
                            toggle: function (t) {
                                return "boolean" == typeof t
                                    ? t
                                        ? this.show()
                                        : this.hide()
                                    : this.each(function () {
                                          vt(this)
                                              ? C(this).show()
                                              : C(this).hide();
                                      });
                            },
                        });
                        var _t,
                            Et,
                            Ct = /^(?:checkbox|radio)$/i,
                            Tt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                            At = /^$|^module$|\/(?:java|ecma)script/i;
                        (_t = x
                            .createDocumentFragment()
                            .appendChild(x.createElement("div"))),
                            (Et = x.createElement("input")).setAttribute(
                                "type",
                                "radio"
                            ),
                            Et.setAttribute("checked", "checked"),
                            Et.setAttribute("name", "t"),
                            _t.appendChild(Et),
                            (u.checkClone = _t
                                .cloneNode(!0)
                                .cloneNode(!0).lastChild.checked),
                            (_t.innerHTML = "<textarea>x</textarea>"),
                            (u.noCloneChecked = !!_t.cloneNode(!0).lastChild
                                .defaultValue),
                            (_t.innerHTML = "<option></option>"),
                            (u.option = !!_t.lastChild);
                        var jt = {
                            thead: [1, "<table>", "</table>"],
                            col: [
                                2,
                                "<table><colgroup>",
                                "</colgroup></table>",
                            ],
                            tr: [2, "<table><tbody>", "</tbody></table>"],
                            td: [
                                3,
                                "<table><tbody><tr>",
                                "</tr></tbody></table>",
                            ],
                            _default: [0, "", ""],
                        };
                        function zt(t, e) {
                            var r;
                            return (
                                (r =
                                    void 0 !== t.getElementsByTagName
                                        ? t.getElementsByTagName(e || "*")
                                        : void 0 !== t.querySelectorAll
                                        ? t.querySelectorAll(e || "*")
                                        : []),
                                void 0 === e || (e && A(t, e))
                                    ? C.merge([t], r)
                                    : r
                            );
                        }
                        function St(t, e) {
                            for (var r = 0, o = t.length; r < o; r++)
                                st.set(
                                    t[r],
                                    "globalEval",
                                    !e || st.get(e[r], "globalEval")
                                );
                        }
                        (jt.tbody =
                            jt.tfoot =
                            jt.colgroup =
                            jt.caption =
                                jt.thead),
                            (jt.th = jt.td),
                            u.option ||
                                (jt.optgroup = jt.option =
                                    [
                                        1,
                                        "<select multiple='multiple'>",
                                        "</select>",
                                    ]);
                        var Ot = /<|&#?\w+;/;
                        function Dt(t, e, r, o, n) {
                            for (
                                var i,
                                    a,
                                    s,
                                    l,
                                    d,
                                    c,
                                    p = e.createDocumentFragment(),
                                    b = [],
                                    m = 0,
                                    g = t.length;
                                m < g;
                                m++
                            )
                                if ((i = t[m]) || 0 === i)
                                    if ("object" === k(i))
                                        C.merge(b, i.nodeType ? [i] : i);
                                    else if (Ot.test(i)) {
                                        for (
                                            a =
                                                a ||
                                                p.appendChild(
                                                    e.createElement("div")
                                                ),
                                                s = (Tt.exec(i) || [
                                                    "",
                                                    "",
                                                ])[1].toLowerCase(),
                                                l = jt[s] || jt._default,
                                                a.innerHTML =
                                                    l[1] +
                                                    C.htmlPrefilter(i) +
                                                    l[2],
                                                c = l[0];
                                            c--;

                                        )
                                            a = a.lastChild;
                                        C.merge(b, a.childNodes),
                                            ((a = p.firstChild).textContent =
                                                "");
                                    } else b.push(e.createTextNode(i));
                            for (p.textContent = "", m = 0; (i = b[m++]); )
                                if (o && C.inArray(i, o) > -1) n && n.push(i);
                                else if (
                                    ((d = ut(i)),
                                    (a = zt(p.appendChild(i), "script")),
                                    d && St(a),
                                    r)
                                )
                                    for (c = 0; (i = a[c++]); )
                                        At.test(i.type || "") && r.push(i);
                            return p;
                        }
                        var Lt = /^([^.]*)(?:\.(.+)|)/;
                        function Nt() {
                            return !0;
                        }
                        function Mt() {
                            return !1;
                        }
                        function Pt(t, e, r, o, n, i) {
                            var a, s;
                            if ("object" == typeof e) {
                                for (s in ("string" != typeof r &&
                                    ((o = o || r), (r = void 0)),
                                e))
                                    Pt(t, s, r, o, e[s], i);
                                return t;
                            }
                            if (
                                (null == o && null == n
                                    ? ((n = r), (o = r = void 0))
                                    : null == n &&
                                      ("string" == typeof r
                                          ? ((n = o), (o = void 0))
                                          : ((n = o), (o = r), (r = void 0))),
                                !1 === n)
                            )
                                n = Mt;
                            else if (!n) return t;
                            return (
                                1 === i &&
                                    ((a = n),
                                    (n = function (t) {
                                        return (
                                            C().off(t), a.apply(this, arguments)
                                        );
                                    }),
                                    (n.guid = a.guid || (a.guid = C.guid++))),
                                t.each(function () {
                                    C.event.add(this, e, n, o, r);
                                })
                            );
                        }
                        function It(t, e, r) {
                            r
                                ? (st.set(t, e, !1),
                                  C.event.add(t, e, {
                                      namespace: !1,
                                      handler: function (t) {
                                          var r,
                                              o = st.get(this, e);
                                          if (1 & t.isTrigger && this[e]) {
                                              if (o)
                                                  (C.event.special[e] || {})
                                                      .delegateType &&
                                                      t.stopPropagation();
                                              else if (
                                                  ((o = s.call(arguments)),
                                                  st.set(this, e, o),
                                                  this[e](),
                                                  (r = st.get(this, e)),
                                                  st.set(this, e, !1),
                                                  o !== r)
                                              )
                                                  return (
                                                      t.stopImmediatePropagation(),
                                                      t.preventDefault(),
                                                      r
                                                  );
                                          } else
                                              o &&
                                                  (st.set(
                                                      this,
                                                      e,
                                                      C.event.trigger(
                                                          o[0],
                                                          o.slice(1),
                                                          this
                                                      )
                                                  ),
                                                  t.stopPropagation(),
                                                  (t.isImmediatePropagationStopped =
                                                      Nt));
                                      },
                                  }))
                                : void 0 === st.get(t, e) &&
                                  C.event.add(t, e, Nt);
                        }
                        (C.event = {
                            global: {},
                            add: function (t, e, r, o, n) {
                                var i,
                                    a,
                                    s,
                                    l,
                                    d,
                                    c,
                                    p,
                                    b,
                                    m,
                                    g,
                                    f,
                                    u = st.get(t);
                                if (it(t))
                                    for (
                                        r.handler &&
                                            ((r = (i = r).handler),
                                            (n = i.selector)),
                                            n && C.find.matchesSelector(ft, n),
                                            r.guid || (r.guid = C.guid++),
                                            (l = u.events) ||
                                                (l = u.events =
                                                    Object.create(null)),
                                            (a = u.handle) ||
                                                (a = u.handle =
                                                    function (e) {
                                                        return void 0 !== C &&
                                                            C.event
                                                                .triggered !==
                                                                e.type
                                                            ? C.event.dispatch.apply(
                                                                  t,
                                                                  arguments
                                                              )
                                                            : void 0;
                                                    }),
                                            d = (e = (e || "").match(U) || [""])
                                                .length;
                                        d--;

                                    )
                                        (m = f = (s = Lt.exec(e[d]) || [])[1]),
                                            (g = (s[2] || "")
                                                .split(".")
                                                .sort()),
                                            m &&
                                                ((p = C.event.special[m] || {}),
                                                (m =
                                                    (n
                                                        ? p.delegateType
                                                        : p.bindType) || m),
                                                (p = C.event.special[m] || {}),
                                                (c = C.extend(
                                                    {
                                                        type: m,
                                                        origType: f,
                                                        data: o,
                                                        handler: r,
                                                        guid: r.guid,
                                                        selector: n,
                                                        needsContext:
                                                            n &&
                                                            C.expr.match.needsContext.test(
                                                                n
                                                            ),
                                                        namespace: g.join("."),
                                                    },
                                                    i
                                                )),
                                                (b = l[m]) ||
                                                    (((b = l[m] =
                                                        []).delegateCount = 0),
                                                    (p.setup &&
                                                        !1 !==
                                                            p.setup.call(
                                                                t,
                                                                o,
                                                                g,
                                                                a
                                                            )) ||
                                                        (t.addEventListener &&
                                                            t.addEventListener(
                                                                m,
                                                                a
                                                            ))),
                                                p.add &&
                                                    (p.add.call(t, c),
                                                    c.handler.guid ||
                                                        (c.handler.guid =
                                                            r.guid)),
                                                n
                                                    ? b.splice(
                                                          b.delegateCount++,
                                                          0,
                                                          c
                                                      )
                                                    : b.push(c),
                                                (C.event.global[m] = !0));
                            },
                            remove: function (t, e, r, o, n) {
                                var i,
                                    a,
                                    s,
                                    l,
                                    d,
                                    c,
                                    p,
                                    b,
                                    m,
                                    g,
                                    f,
                                    u = st.hasData(t) && st.get(t);
                                if (u && (l = u.events)) {
                                    for (
                                        d = (e = (e || "").match(U) || [""])
                                            .length;
                                        d--;

                                    )
                                        if (
                                            ((m = f =
                                                (s = Lt.exec(e[d]) || [])[1]),
                                            (g = (s[2] || "")
                                                .split(".")
                                                .sort()),
                                            m)
                                        ) {
                                            for (
                                                p = C.event.special[m] || {},
                                                    b =
                                                        l[
                                                            (m =
                                                                (o
                                                                    ? p.delegateType
                                                                    : p.bindType) ||
                                                                m)
                                                        ] || [],
                                                    s =
                                                        s[2] &&
                                                        new RegExp(
                                                            "(^|\\.)" +
                                                                g.join(
                                                                    "\\.(?:.*\\.|)"
                                                                ) +
                                                                "(\\.|$)"
                                                        ),
                                                    a = i = b.length;
                                                i--;

                                            )
                                                (c = b[i]),
                                                    (!n && f !== c.origType) ||
                                                        (r &&
                                                            r.guid !==
                                                                c.guid) ||
                                                        (s &&
                                                            !s.test(
                                                                c.namespace
                                                            )) ||
                                                        (o &&
                                                            o !== c.selector &&
                                                            ("**" !== o ||
                                                                !c.selector)) ||
                                                        (b.splice(i, 1),
                                                        c.selector &&
                                                            b.delegateCount--,
                                                        p.remove &&
                                                            p.remove.call(
                                                                t,
                                                                c
                                                            ));
                                            a &&
                                                !b.length &&
                                                ((p.teardown &&
                                                    !1 !==
                                                        p.teardown.call(
                                                            t,
                                                            g,
                                                            u.handle
                                                        )) ||
                                                    C.removeEvent(
                                                        t,
                                                        m,
                                                        u.handle
                                                    ),
                                                delete l[m]);
                                        } else
                                            for (m in l)
                                                C.event.remove(
                                                    t,
                                                    m + e[d],
                                                    r,
                                                    o,
                                                    !0
                                                );
                                    C.isEmptyObject(l) &&
                                        st.remove(t, "handle events");
                                }
                            },
                            dispatch: function (t) {
                                var e,
                                    r,
                                    o,
                                    n,
                                    i,
                                    a,
                                    s = new Array(arguments.length),
                                    l = C.event.fix(t),
                                    d =
                                        (st.get(this, "events") ||
                                            Object.create(null))[l.type] || [],
                                    c = C.event.special[l.type] || {};
                                for (s[0] = l, e = 1; e < arguments.length; e++)
                                    s[e] = arguments[e];
                                if (
                                    ((l.delegateTarget = this),
                                    !c.preDispatch ||
                                        !1 !== c.preDispatch.call(this, l))
                                ) {
                                    for (
                                        a = C.event.handlers.call(this, l, d),
                                            e = 0;
                                        (n = a[e++]) &&
                                        !l.isPropagationStopped();

                                    )
                                        for (
                                            l.currentTarget = n.elem, r = 0;
                                            (i = n.handlers[r++]) &&
                                            !l.isImmediatePropagationStopped();

                                        )
                                            (l.rnamespace &&
                                                !1 !== i.namespace &&
                                                !l.rnamespace.test(
                                                    i.namespace
                                                )) ||
                                                ((l.handleObj = i),
                                                (l.data = i.data),
                                                void 0 !==
                                                    (o = (
                                                        (
                                                            C.event.special[
                                                                i.origType
                                                            ] || {}
                                                        ).handle || i.handler
                                                    ).apply(n.elem, s)) &&
                                                    !1 === (l.result = o) &&
                                                    (l.preventDefault(),
                                                    l.stopPropagation()));
                                    return (
                                        c.postDispatch &&
                                            c.postDispatch.call(this, l),
                                        l.result
                                    );
                                }
                            },
                            handlers: function (t, e) {
                                var r,
                                    o,
                                    n,
                                    i,
                                    a,
                                    s = [],
                                    l = e.delegateCount,
                                    d = t.target;
                                if (
                                    l &&
                                    d.nodeType &&
                                    !("click" === t.type && t.button >= 1)
                                )
                                    for (; d !== this; d = d.parentNode || this)
                                        if (
                                            1 === d.nodeType &&
                                            ("click" !== t.type ||
                                                !0 !== d.disabled)
                                        ) {
                                            for (
                                                i = [], a = {}, r = 0;
                                                r < l;
                                                r++
                                            )
                                                void 0 ===
                                                    a[
                                                        (n =
                                                            (o = e[r])
                                                                .selector + " ")
                                                    ] &&
                                                    (a[n] = o.needsContext
                                                        ? C(n, this).index(d) >
                                                          -1
                                                        : C.find(
                                                              n,
                                                              this,
                                                              null,
                                                              [d]
                                                          ).length),
                                                    a[n] && i.push(o);
                                            i.length &&
                                                s.push({
                                                    elem: d,
                                                    handlers: i,
                                                });
                                        }
                                return (
                                    (d = this),
                                    l < e.length &&
                                        s.push({
                                            elem: d,
                                            handlers: e.slice(l),
                                        }),
                                    s
                                );
                            },
                            addProp: function (t, e) {
                                Object.defineProperty(C.Event.prototype, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    get: h(e)
                                        ? function () {
                                              if (this.originalEvent)
                                                  return e(this.originalEvent);
                                          }
                                        : function () {
                                              if (this.originalEvent)
                                                  return this.originalEvent[t];
                                          },
                                    set: function (e) {
                                        Object.defineProperty(this, t, {
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                            value: e,
                                        });
                                    },
                                });
                            },
                            fix: function (t) {
                                return t[C.expando] ? t : new C.Event(t);
                            },
                            special: {
                                load: { noBubble: !0 },
                                click: {
                                    setup: function (t) {
                                        var e = this || t;
                                        return (
                                            Ct.test(e.type) &&
                                                e.click &&
                                                A(e, "input") &&
                                                It(e, "click", !0),
                                            !1
                                        );
                                    },
                                    trigger: function (t) {
                                        var e = this || t;
                                        return (
                                            Ct.test(e.type) &&
                                                e.click &&
                                                A(e, "input") &&
                                                It(e, "click"),
                                            !0
                                        );
                                    },
                                    _default: function (t) {
                                        var e = t.target;
                                        return (
                                            (Ct.test(e.type) &&
                                                e.click &&
                                                A(e, "input") &&
                                                st.get(e, "click")) ||
                                            A(e, "a")
                                        );
                                    },
                                },
                                beforeunload: {
                                    postDispatch: function (t) {
                                        void 0 !== t.result &&
                                            t.originalEvent &&
                                            (t.originalEvent.returnValue =
                                                t.result);
                                    },
                                },
                            },
                        }),
                            (C.removeEvent = function (t, e, r) {
                                t.removeEventListener &&
                                    t.removeEventListener(e, r);
                            }),
                            (C.Event = function (t, e) {
                                if (!(this instanceof C.Event))
                                    return new C.Event(t, e);
                                t && t.type
                                    ? ((this.originalEvent = t),
                                      (this.type = t.type),
                                      (this.isDefaultPrevented =
                                          t.defaultPrevented ||
                                          (void 0 === t.defaultPrevented &&
                                              !1 === t.returnValue)
                                              ? Nt
                                              : Mt),
                                      (this.target =
                                          t.target && 3 === t.target.nodeType
                                              ? t.target.parentNode
                                              : t.target),
                                      (this.currentTarget = t.currentTarget),
                                      (this.relatedTarget = t.relatedTarget))
                                    : (this.type = t),
                                    e && C.extend(this, e),
                                    (this.timeStamp =
                                        (t && t.timeStamp) || Date.now()),
                                    (this[C.expando] = !0);
                            }),
                            (C.Event.prototype = {
                                constructor: C.Event,
                                isDefaultPrevented: Mt,
                                isPropagationStopped: Mt,
                                isImmediatePropagationStopped: Mt,
                                isSimulated: !1,
                                preventDefault: function () {
                                    var t = this.originalEvent;
                                    (this.isDefaultPrevented = Nt),
                                        t &&
                                            !this.isSimulated &&
                                            t.preventDefault();
                                },
                                stopPropagation: function () {
                                    var t = this.originalEvent;
                                    (this.isPropagationStopped = Nt),
                                        t &&
                                            !this.isSimulated &&
                                            t.stopPropagation();
                                },
                                stopImmediatePropagation: function () {
                                    var t = this.originalEvent;
                                    (this.isImmediatePropagationStopped = Nt),
                                        t &&
                                            !this.isSimulated &&
                                            t.stopImmediatePropagation(),
                                        this.stopPropagation();
                                },
                            }),
                            C.each(
                                {
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
                                    code: !0,
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
                                    which: !0,
                                },
                                C.event.addProp
                            ),
                            C.each(
                                { focus: "focusin", blur: "focusout" },
                                function (t, e) {
                                    function r(t) {
                                        if (x.documentMode) {
                                            var r = st.get(this, "handle"),
                                                o = C.event.fix(t);
                                            (o.type =
                                                "focusin" === t.type
                                                    ? "focus"
                                                    : "blur"),
                                                (o.isSimulated = !0),
                                                r(t),
                                                o.target === o.currentTarget &&
                                                    r(o);
                                        } else
                                            C.event.simulate(
                                                e,
                                                t.target,
                                                C.event.fix(t)
                                            );
                                    }
                                    (C.event.special[t] = {
                                        setup: function () {
                                            var o;
                                            if (
                                                (It(this, t, !0),
                                                !x.documentMode)
                                            )
                                                return !1;
                                            (o = st.get(this, e)) ||
                                                this.addEventListener(e, r),
                                                st.set(this, e, (o || 0) + 1);
                                        },
                                        trigger: function () {
                                            return It(this, t), !0;
                                        },
                                        teardown: function () {
                                            var t;
                                            if (!x.documentMode) return !1;
                                            (t = st.get(this, e) - 1)
                                                ? st.set(this, e, t)
                                                : (this.removeEventListener(
                                                      e,
                                                      r
                                                  ),
                                                  st.remove(this, e));
                                        },
                                        _default: function (e) {
                                            return st.get(e.target, t);
                                        },
                                        delegateType: e,
                                    }),
                                        (C.event.special[e] = {
                                            setup: function () {
                                                var o =
                                                        this.ownerDocument ||
                                                        this.document ||
                                                        this,
                                                    n = x.documentMode
                                                        ? this
                                                        : o,
                                                    i = st.get(n, e);
                                                i ||
                                                    (x.documentMode
                                                        ? this.addEventListener(
                                                              e,
                                                              r
                                                          )
                                                        : o.addEventListener(
                                                              t,
                                                              r,
                                                              !0
                                                          )),
                                                    st.set(n, e, (i || 0) + 1);
                                            },
                                            teardown: function () {
                                                var o =
                                                        this.ownerDocument ||
                                                        this.document ||
                                                        this,
                                                    n = x.documentMode
                                                        ? this
                                                        : o,
                                                    i = st.get(n, e) - 1;
                                                i
                                                    ? st.set(n, e, i)
                                                    : (x.documentMode
                                                          ? this.removeEventListener(
                                                                e,
                                                                r
                                                            )
                                                          : o.removeEventListener(
                                                                t,
                                                                r,
                                                                !0
                                                            ),
                                                      st.remove(n, e));
                                            },
                                        });
                                }
                            ),
                            C.each(
                                {
                                    mouseenter: "mouseover",
                                    mouseleave: "mouseout",
                                    pointerenter: "pointerover",
                                    pointerleave: "pointerout",
                                },
                                function (t, e) {
                                    C.event.special[t] = {
                                        delegateType: e,
                                        bindType: e,
                                        handle: function (t) {
                                            var r,
                                                o = t.relatedTarget,
                                                n = t.handleObj;
                                            return (
                                                (o &&
                                                    (o === this ||
                                                        C.contains(this, o))) ||
                                                    ((t.type = n.origType),
                                                    (r = n.handler.apply(
                                                        this,
                                                        arguments
                                                    )),
                                                    (t.type = e)),
                                                r
                                            );
                                        },
                                    };
                                }
                            ),
                            C.fn.extend({
                                on: function (t, e, r, o) {
                                    return Pt(this, t, e, r, o);
                                },
                                one: function (t, e, r, o) {
                                    return Pt(this, t, e, r, o, 1);
                                },
                                off: function (t, e, r) {
                                    var o, n;
                                    if (t && t.preventDefault && t.handleObj)
                                        return (
                                            (o = t.handleObj),
                                            C(t.delegateTarget).off(
                                                o.namespace
                                                    ? o.origType +
                                                          "." +
                                                          o.namespace
                                                    : o.origType,
                                                o.selector,
                                                o.handler
                                            ),
                                            this
                                        );
                                    if ("object" == typeof t) {
                                        for (n in t) this.off(n, e, t[n]);
                                        return this;
                                    }
                                    return (
                                        (!1 !== e && "function" != typeof e) ||
                                            ((r = e), (e = void 0)),
                                        !1 === r && (r = Mt),
                                        this.each(function () {
                                            C.event.remove(this, t, r, e);
                                        })
                                    );
                                },
                            });
                        var $t = /<script|<style|<link/i,
                            Rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            Bt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                        function Ht(t, e) {
                            return (
                                (A(t, "table") &&
                                    A(
                                        11 !== e.nodeType ? e : e.firstChild,
                                        "tr"
                                    ) &&
                                    C(t).children("tbody")[0]) ||
                                t
                            );
                        }
                        function qt(t) {
                            return (
                                (t.type =
                                    (null !== t.getAttribute("type")) +
                                    "/" +
                                    t.type),
                                t
                            );
                        }
                        function Ft(t) {
                            return (
                                "true/" === (t.type || "").slice(0, 5)
                                    ? (t.type = t.type.slice(5))
                                    : t.removeAttribute("type"),
                                t
                            );
                        }
                        function Wt(t, e) {
                            var r, o, n, i, a, s;
                            if (1 === e.nodeType) {
                                if (st.hasData(t) && (s = st.get(t).events))
                                    for (n in (st.remove(e, "handle events"),
                                    s))
                                        for (r = 0, o = s[n].length; r < o; r++)
                                            C.event.add(e, n, s[n][r]);
                                lt.hasData(t) &&
                                    ((i = lt.access(t)),
                                    (a = C.extend({}, i)),
                                    lt.set(e, a));
                            }
                        }
                        function Xt(t, e) {
                            var r = e.nodeName.toLowerCase();
                            "input" === r && Ct.test(t.type)
                                ? (e.checked = t.checked)
                                : ("input" !== r && "textarea" !== r) ||
                                  (e.defaultValue = t.defaultValue);
                        }
                        function Gt(t, e, r, o) {
                            e = l(e);
                            var n,
                                i,
                                a,
                                s,
                                d,
                                c,
                                p = 0,
                                b = t.length,
                                m = b - 1,
                                g = e[0],
                                f = h(g);
                            if (
                                f ||
                                (b > 1 &&
                                    "string" == typeof g &&
                                    !u.checkClone &&
                                    Rt.test(g))
                            )
                                return t.each(function (n) {
                                    var i = t.eq(n);
                                    f && (e[0] = g.call(this, n, i.html())),
                                        Gt(i, e, r, o);
                                });
                            if (
                                b &&
                                ((i = (n = Dt(e, t[0].ownerDocument, !1, t, o))
                                    .firstChild),
                                1 === n.childNodes.length && (n = i),
                                i || o)
                            ) {
                                for (
                                    s = (a = C.map(zt(n, "script"), qt)).length;
                                    p < b;
                                    p++
                                )
                                    (d = n),
                                        p !== m &&
                                            ((d = C.clone(d, !0, !0)),
                                            s && C.merge(a, zt(d, "script"))),
                                        r.call(t[p], d, p);
                                if (s)
                                    for (
                                        c = a[a.length - 1].ownerDocument,
                                            C.map(a, Ft),
                                            p = 0;
                                        p < s;
                                        p++
                                    )
                                        (d = a[p]),
                                            At.test(d.type || "") &&
                                                !st.access(d, "globalEval") &&
                                                C.contains(c, d) &&
                                                (d.src &&
                                                "module" !==
                                                    (d.type || "").toLowerCase()
                                                    ? C._evalUrl &&
                                                      !d.noModule &&
                                                      C._evalUrl(
                                                          d.src,
                                                          {
                                                              nonce:
                                                                  d.nonce ||
                                                                  d.getAttribute(
                                                                      "nonce"
                                                                  ),
                                                          },
                                                          c
                                                      )
                                                    : y(
                                                          d.textContent.replace(
                                                              Bt,
                                                              ""
                                                          ),
                                                          d,
                                                          c
                                                      ));
                            }
                            return t;
                        }
                        function Ut(t, e, r) {
                            for (
                                var o, n = e ? C.filter(e, t) : t, i = 0;
                                null != (o = n[i]);
                                i++
                            )
                                r || 1 !== o.nodeType || C.cleanData(zt(o)),
                                    o.parentNode &&
                                        (r && ut(o) && St(zt(o, "script")),
                                        o.parentNode.removeChild(o));
                            return t;
                        }
                        C.extend({
                            htmlPrefilter: function (t) {
                                return t;
                            },
                            clone: function (t, e, r) {
                                var o,
                                    n,
                                    i,
                                    a,
                                    s = t.cloneNode(!0),
                                    l = ut(t);
                                if (
                                    !(
                                        u.noCloneChecked ||
                                        (1 !== t.nodeType &&
                                            11 !== t.nodeType) ||
                                        C.isXMLDoc(t)
                                    )
                                )
                                    for (
                                        a = zt(s),
                                            o = 0,
                                            n = (i = zt(t)).length;
                                        o < n;
                                        o++
                                    )
                                        Xt(i[o], a[o]);
                                if (e)
                                    if (r)
                                        for (
                                            i = i || zt(t),
                                                a = a || zt(s),
                                                o = 0,
                                                n = i.length;
                                            o < n;
                                            o++
                                        )
                                            Wt(i[o], a[o]);
                                    else Wt(t, s);
                                return (
                                    (a = zt(s, "script")).length > 0 &&
                                        St(a, !l && zt(t, "script")),
                                    s
                                );
                            },
                            cleanData: function (t) {
                                for (
                                    var e, r, o, n = C.event.special, i = 0;
                                    void 0 !== (r = t[i]);
                                    i++
                                )
                                    if (it(r)) {
                                        if ((e = r[st.expando])) {
                                            if (e.events)
                                                for (o in e.events)
                                                    n[o]
                                                        ? C.event.remove(r, o)
                                                        : C.removeEvent(
                                                              r,
                                                              o,
                                                              e.handle
                                                          );
                                            r[st.expando] = void 0;
                                        }
                                        r[lt.expando] &&
                                            (r[lt.expando] = void 0);
                                    }
                            },
                        }),
                            C.fn.extend({
                                detach: function (t) {
                                    return Ut(this, t, !0);
                                },
                                remove: function (t) {
                                    return Ut(this, t);
                                },
                                text: function (t) {
                                    return tt(
                                        this,
                                        function (t) {
                                            return void 0 === t
                                                ? C.text(this)
                                                : this.empty().each(
                                                      function () {
                                                          (1 !==
                                                              this.nodeType &&
                                                              11 !==
                                                                  this
                                                                      .nodeType &&
                                                              9 !==
                                                                  this
                                                                      .nodeType) ||
                                                              (this.textContent =
                                                                  t);
                                                      }
                                                  );
                                        },
                                        null,
                                        t,
                                        arguments.length
                                    );
                                },
                                append: function () {
                                    return Gt(this, arguments, function (t) {
                                        (1 !== this.nodeType &&
                                            11 !== this.nodeType &&
                                            9 !== this.nodeType) ||
                                            Ht(this, t).appendChild(t);
                                    });
                                },
                                prepend: function () {
                                    return Gt(this, arguments, function (t) {
                                        if (
                                            1 === this.nodeType ||
                                            11 === this.nodeType ||
                                            9 === this.nodeType
                                        ) {
                                            var e = Ht(this, t);
                                            e.insertBefore(t, e.firstChild);
                                        }
                                    });
                                },
                                before: function () {
                                    return Gt(this, arguments, function (t) {
                                        this.parentNode &&
                                            this.parentNode.insertBefore(
                                                t,
                                                this
                                            );
                                    });
                                },
                                after: function () {
                                    return Gt(this, arguments, function (t) {
                                        this.parentNode &&
                                            this.parentNode.insertBefore(
                                                t,
                                                this.nextSibling
                                            );
                                    });
                                },
                                empty: function () {
                                    for (
                                        var t, e = 0;
                                        null != (t = this[e]);
                                        e++
                                    )
                                        1 === t.nodeType &&
                                            (C.cleanData(zt(t, !1)),
                                            (t.textContent = ""));
                                    return this;
                                },
                                clone: function (t, e) {
                                    return (
                                        (t = null != t && t),
                                        (e = null == e ? t : e),
                                        this.map(function () {
                                            return C.clone(this, t, e);
                                        })
                                    );
                                },
                                html: function (t) {
                                    return tt(
                                        this,
                                        function (t) {
                                            var e = this[0] || {},
                                                r = 0,
                                                o = this.length;
                                            if (
                                                void 0 === t &&
                                                1 === e.nodeType
                                            )
                                                return e.innerHTML;
                                            if (
                                                "string" == typeof t &&
                                                !$t.test(t) &&
                                                !jt[
                                                    (Tt.exec(t) || [
                                                        "",
                                                        "",
                                                    ])[1].toLowerCase()
                                                ]
                                            ) {
                                                t = C.htmlPrefilter(t);
                                                try {
                                                    for (; r < o; r++)
                                                        1 ===
                                                            (e = this[r] || {})
                                                                .nodeType &&
                                                            (C.cleanData(
                                                                zt(e, !1)
                                                            ),
                                                            (e.innerHTML = t));
                                                    e = 0;
                                                } catch (t) {}
                                            }
                                            e && this.empty().append(t);
                                        },
                                        null,
                                        t,
                                        arguments.length
                                    );
                                },
                                replaceWith: function () {
                                    var t = [];
                                    return Gt(
                                        this,
                                        arguments,
                                        function (e) {
                                            var r = this.parentNode;
                                            C.inArray(this, t) < 0 &&
                                                (C.cleanData(zt(this)),
                                                r && r.replaceChild(e, this));
                                        },
                                        t
                                    );
                                },
                            }),
                            C.each(
                                {
                                    appendTo: "append",
                                    prependTo: "prepend",
                                    insertBefore: "before",
                                    insertAfter: "after",
                                    replaceAll: "replaceWith",
                                },
                                function (t, e) {
                                    C.fn[t] = function (t) {
                                        for (
                                            var r,
                                                o = [],
                                                n = C(t),
                                                i = n.length - 1,
                                                a = 0;
                                            a <= i;
                                            a++
                                        )
                                            (r =
                                                a === i
                                                    ? this
                                                    : this.clone(!0)),
                                                C(n[a])[e](r),
                                                d.apply(o, r.get());
                                        return this.pushStack(o);
                                    };
                                }
                            );
                        var Vt = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
                            Yt = /^--/,
                            Kt = function (t) {
                                var e = t.ownerDocument.defaultView;
                                return (
                                    (e && e.opener) || (e = o),
                                    e.getComputedStyle(t)
                                );
                            },
                            Qt = function (t, e, r) {
                                var o,
                                    n,
                                    i = {};
                                for (n in e)
                                    (i[n] = t.style[n]), (t.style[n] = e[n]);
                                for (n in ((o = r.call(t)), e))
                                    t.style[n] = i[n];
                                return o;
                            },
                            Jt = new RegExp(gt.join("|"), "i");
                        function Zt(t, e, r) {
                            var o,
                                n,
                                i,
                                a,
                                s = Yt.test(e),
                                l = t.style;
                            return (
                                (r = r || Kt(t)) &&
                                    ((a = r.getPropertyValue(e) || r[e]),
                                    s &&
                                        a &&
                                        (a = a.replace(D, "$1") || void 0),
                                    "" !== a || ut(t) || (a = C.style(t, e)),
                                    !u.pixelBoxStyles() &&
                                        Vt.test(a) &&
                                        Jt.test(e) &&
                                        ((o = l.width),
                                        (n = l.minWidth),
                                        (i = l.maxWidth),
                                        (l.minWidth = l.maxWidth = l.width = a),
                                        (a = r.width),
                                        (l.width = o),
                                        (l.minWidth = n),
                                        (l.maxWidth = i))),
                                void 0 !== a ? a + "" : a
                            );
                        }
                        function te(t, e) {
                            return {
                                get: function () {
                                    if (!t())
                                        return (this.get = e).apply(
                                            this,
                                            arguments
                                        );
                                    delete this.get;
                                },
                            };
                        }
                        !(function () {
                            function t() {
                                if (c) {
                                    (d.style.cssText =
                                        "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                        (c.style.cssText =
                                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                        ft.appendChild(d).appendChild(c);
                                    var t = o.getComputedStyle(c);
                                    (r = "1%" !== t.top),
                                        (l = 12 === e(t.marginLeft)),
                                        (c.style.right = "60%"),
                                        (a = 36 === e(t.right)),
                                        (n = 36 === e(t.width)),
                                        (c.style.position = "absolute"),
                                        (i = 12 === e(c.offsetWidth / 3)),
                                        ft.removeChild(d),
                                        (c = null);
                                }
                            }
                            function e(t) {
                                return Math.round(parseFloat(t));
                            }
                            var r,
                                n,
                                i,
                                a,
                                s,
                                l,
                                d = x.createElement("div"),
                                c = x.createElement("div");
                            c.style &&
                                ((c.style.backgroundClip = "content-box"),
                                (c.cloneNode(!0).style.backgroundClip = ""),
                                (u.clearCloneStyle =
                                    "content-box" === c.style.backgroundClip),
                                C.extend(u, {
                                    boxSizingReliable: function () {
                                        return t(), n;
                                    },
                                    pixelBoxStyles: function () {
                                        return t(), a;
                                    },
                                    pixelPosition: function () {
                                        return t(), r;
                                    },
                                    reliableMarginLeft: function () {
                                        return t(), l;
                                    },
                                    scrollboxSize: function () {
                                        return t(), i;
                                    },
                                    reliableTrDimensions: function () {
                                        var t, e, r, n;
                                        return (
                                            null == s &&
                                                ((t = x.createElement("table")),
                                                (e = x.createElement("tr")),
                                                (r = x.createElement("div")),
                                                (t.style.cssText =
                                                    "position:absolute;left:-11111px;border-collapse:separate"),
                                                (e.style.cssText =
                                                    "box-sizing:content-box;border:1px solid"),
                                                (e.style.height = "1px"),
                                                (r.style.height = "9px"),
                                                (r.style.display = "block"),
                                                ft
                                                    .appendChild(t)
                                                    .appendChild(e)
                                                    .appendChild(r),
                                                (n = o.getComputedStyle(e)),
                                                (s =
                                                    parseInt(n.height, 10) +
                                                        parseInt(
                                                            n.borderTopWidth,
                                                            10
                                                        ) +
                                                        parseInt(
                                                            n.borderBottomWidth,
                                                            10
                                                        ) ===
                                                    e.offsetHeight),
                                                ft.removeChild(t)),
                                            s
                                        );
                                    },
                                }));
                        })();
                        var ee = ["Webkit", "Moz", "ms"],
                            re = x.createElement("div").style,
                            oe = {};
                        function ne(t) {
                            var e = C.cssProps[t] || oe[t];
                            return (
                                e ||
                                (t in re
                                    ? t
                                    : (oe[t] =
                                          (function (t) {
                                              for (
                                                  var e =
                                                          t[0].toUpperCase() +
                                                          t.slice(1),
                                                      r = ee.length;
                                                  r--;

                                              )
                                                  if ((t = ee[r] + e) in re)
                                                      return t;
                                          })(t) || t))
                            );
                        }
                        var ie = /^(none|table(?!-c[ea]).+)/,
                            ae = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block",
                            },
                            se = { letterSpacing: "0", fontWeight: "400" };
                        function le(t, e, r) {
                            var o = mt.exec(e);
                            return o
                                ? Math.max(0, o[2] - (r || 0)) + (o[3] || "px")
                                : e;
                        }
                        function de(t, e, r, o, n, i) {
                            var a = "width" === e ? 1 : 0,
                                s = 0,
                                l = 0,
                                d = 0;
                            if (r === (o ? "border" : "content")) return 0;
                            for (; a < 4; a += 2)
                                "margin" === r &&
                                    (d += C.css(t, r + gt[a], !0, n)),
                                    o
                                        ? ("content" === r &&
                                              (l -= C.css(
                                                  t,
                                                  "padding" + gt[a],
                                                  !0,
                                                  n
                                              )),
                                          "margin" !== r &&
                                              (l -= C.css(
                                                  t,
                                                  "border" + gt[a] + "Width",
                                                  !0,
                                                  n
                                              )))
                                        : ((l += C.css(
                                              t,
                                              "padding" + gt[a],
                                              !0,
                                              n
                                          )),
                                          "padding" !== r
                                              ? (l += C.css(
                                                    t,
                                                    "border" + gt[a] + "Width",
                                                    !0,
                                                    n
                                                ))
                                              : (s += C.css(
                                                    t,
                                                    "border" + gt[a] + "Width",
                                                    !0,
                                                    n
                                                )));
                            return (
                                !o &&
                                    i >= 0 &&
                                    (l +=
                                        Math.max(
                                            0,
                                            Math.ceil(
                                                t[
                                                    "offset" +
                                                        e[0].toUpperCase() +
                                                        e.slice(1)
                                                ] -
                                                    i -
                                                    l -
                                                    s -
                                                    0.5
                                            )
                                        ) || 0),
                                l + d
                            );
                        }
                        function ce(t, e, r) {
                            var o = Kt(t),
                                n =
                                    (!u.boxSizingReliable() || r) &&
                                    "border-box" ===
                                        C.css(t, "boxSizing", !1, o),
                                i = n,
                                a = Zt(t, e, o),
                                s = "offset" + e[0].toUpperCase() + e.slice(1);
                            if (Vt.test(a)) {
                                if (!r) return a;
                                a = "auto";
                            }
                            return (
                                ((!u.boxSizingReliable() && n) ||
                                    (!u.reliableTrDimensions() && A(t, "tr")) ||
                                    "auto" === a ||
                                    (!parseFloat(a) &&
                                        "inline" ===
                                            C.css(t, "display", !1, o))) &&
                                    t.getClientRects().length &&
                                    ((n =
                                        "border-box" ===
                                        C.css(t, "boxSizing", !1, o)),
                                    (i = s in t) && (a = t[s])),
                                (a = parseFloat(a) || 0) +
                                    de(
                                        t,
                                        e,
                                        r || (n ? "border" : "content"),
                                        i,
                                        o,
                                        a
                                    ) +
                                    "px"
                            );
                        }
                        function pe(t, e, r, o, n) {
                            return new pe.prototype.init(t, e, r, o, n);
                        }
                        C.extend({
                            cssHooks: {
                                opacity: {
                                    get: function (t, e) {
                                        if (e) {
                                            var r = Zt(t, "opacity");
                                            return "" === r ? "1" : r;
                                        }
                                    },
                                },
                            },
                            cssNumber: {
                                animationIterationCount: !0,
                                aspectRatio: !0,
                                borderImageSlice: !0,
                                columnCount: !0,
                                flexGrow: !0,
                                flexShrink: !0,
                                fontWeight: !0,
                                gridArea: !0,
                                gridColumn: !0,
                                gridColumnEnd: !0,
                                gridColumnStart: !0,
                                gridRow: !0,
                                gridRowEnd: !0,
                                gridRowStart: !0,
                                lineHeight: !0,
                                opacity: !0,
                                order: !0,
                                orphans: !0,
                                scale: !0,
                                widows: !0,
                                zIndex: !0,
                                zoom: !0,
                                fillOpacity: !0,
                                floodOpacity: !0,
                                stopOpacity: !0,
                                strokeMiterlimit: !0,
                                strokeOpacity: !0,
                            },
                            cssProps: {},
                            style: function (t, e, r, o) {
                                if (
                                    t &&
                                    3 !== t.nodeType &&
                                    8 !== t.nodeType &&
                                    t.style
                                ) {
                                    var n,
                                        i,
                                        a,
                                        s = nt(e),
                                        l = Yt.test(e),
                                        d = t.style;
                                    if (
                                        (l || (e = ne(s)),
                                        (a = C.cssHooks[e] || C.cssHooks[s]),
                                        void 0 === r)
                                    )
                                        return a &&
                                            "get" in a &&
                                            void 0 !== (n = a.get(t, !1, o))
                                            ? n
                                            : d[e];
                                    "string" === (i = typeof r) &&
                                        (n = mt.exec(r)) &&
                                        n[1] &&
                                        ((r = xt(t, e, n)), (i = "number")),
                                        null != r &&
                                            r == r &&
                                            ("number" !== i ||
                                                l ||
                                                (r +=
                                                    (n && n[3]) ||
                                                    (C.cssNumber[s]
                                                        ? ""
                                                        : "px")),
                                            u.clearCloneStyle ||
                                                "" !== r ||
                                                0 !== e.indexOf("background") ||
                                                (d[e] = "inherit"),
                                            (a &&
                                                "set" in a &&
                                                void 0 ===
                                                    (r = a.set(t, r, o))) ||
                                                (l
                                                    ? d.setProperty(e, r)
                                                    : (d[e] = r)));
                                }
                            },
                            css: function (t, e, r, o) {
                                var n,
                                    i,
                                    a,
                                    s = nt(e);
                                return (
                                    Yt.test(e) || (e = ne(s)),
                                    (a = C.cssHooks[e] || C.cssHooks[s]) &&
                                        "get" in a &&
                                        (n = a.get(t, !0, r)),
                                    void 0 === n && (n = Zt(t, e, o)),
                                    "normal" === n && e in se && (n = se[e]),
                                    "" === r || r
                                        ? ((i = parseFloat(n)),
                                          !0 === r || isFinite(i) ? i || 0 : n)
                                        : n
                                );
                            },
                        }),
                            C.each(["height", "width"], function (t, e) {
                                C.cssHooks[e] = {
                                    get: function (t, r, o) {
                                        if (r)
                                            return !ie.test(
                                                C.css(t, "display")
                                            ) ||
                                                (t.getClientRects().length &&
                                                    t.getBoundingClientRect()
                                                        .width)
                                                ? ce(t, e, o)
                                                : Qt(t, ae, function () {
                                                      return ce(t, e, o);
                                                  });
                                    },
                                    set: function (t, r, o) {
                                        var n,
                                            i = Kt(t),
                                            a =
                                                !u.scrollboxSize() &&
                                                "absolute" === i.position,
                                            s =
                                                (a || o) &&
                                                "border-box" ===
                                                    C.css(
                                                        t,
                                                        "boxSizing",
                                                        !1,
                                                        i
                                                    ),
                                            l = o ? de(t, e, o, s, i) : 0;
                                        return (
                                            s &&
                                                a &&
                                                (l -= Math.ceil(
                                                    t[
                                                        "offset" +
                                                            e[0].toUpperCase() +
                                                            e.slice(1)
                                                    ] -
                                                        parseFloat(i[e]) -
                                                        de(
                                                            t,
                                                            e,
                                                            "border",
                                                            !1,
                                                            i
                                                        ) -
                                                        0.5
                                                )),
                                            l &&
                                                (n = mt.exec(r)) &&
                                                "px" !== (n[3] || "px") &&
                                                ((t.style[e] = r),
                                                (r = C.css(t, e))),
                                            le(0, r, l)
                                        );
                                    },
                                };
                            }),
                            (C.cssHooks.marginLeft = te(
                                u.reliableMarginLeft,
                                function (t, e) {
                                    if (e)
                                        return (
                                            (parseFloat(Zt(t, "marginLeft")) ||
                                                t.getBoundingClientRect().left -
                                                    Qt(
                                                        t,
                                                        { marginLeft: 0 },
                                                        function () {
                                                            return t.getBoundingClientRect()
                                                                .left;
                                                        }
                                                    )) + "px"
                                        );
                                }
                            )),
                            C.each(
                                { margin: "", padding: "", border: "Width" },
                                function (t, e) {
                                    (C.cssHooks[t + e] = {
                                        expand: function (r) {
                                            for (
                                                var o = 0,
                                                    n = {},
                                                    i =
                                                        "string" == typeof r
                                                            ? r.split(" ")
                                                            : [r];
                                                o < 4;
                                                o++
                                            )
                                                n[t + gt[o] + e] =
                                                    i[o] || i[o - 2] || i[0];
                                            return n;
                                        },
                                    }),
                                        "margin" !== t &&
                                            (C.cssHooks[t + e].set = le);
                                }
                            ),
                            C.fn.extend({
                                css: function (t, e) {
                                    return tt(
                                        this,
                                        function (t, e, r) {
                                            var o,
                                                n,
                                                i = {},
                                                a = 0;
                                            if (Array.isArray(e)) {
                                                for (
                                                    o = Kt(t), n = e.length;
                                                    a < n;
                                                    a++
                                                )
                                                    i[e[a]] = C.css(
                                                        t,
                                                        e[a],
                                                        !1,
                                                        o
                                                    );
                                                return i;
                                            }
                                            return void 0 !== r
                                                ? C.style(t, e, r)
                                                : C.css(t, e);
                                        },
                                        t,
                                        e,
                                        arguments.length > 1
                                    );
                                },
                            }),
                            (C.Tween = pe),
                            (pe.prototype = {
                                constructor: pe,
                                init: function (t, e, r, o, n, i) {
                                    (this.elem = t),
                                        (this.prop = r),
                                        (this.easing = n || C.easing._default),
                                        (this.options = e),
                                        (this.start = this.now = this.cur()),
                                        (this.end = o),
                                        (this.unit =
                                            i || (C.cssNumber[r] ? "" : "px"));
                                },
                                cur: function () {
                                    var t = pe.propHooks[this.prop];
                                    return t && t.get
                                        ? t.get(this)
                                        : pe.propHooks._default.get(this);
                                },
                                run: function (t) {
                                    var e,
                                        r = pe.propHooks[this.prop];
                                    return (
                                        this.options.duration
                                            ? (this.pos = e =
                                                  C.easing[this.easing](
                                                      t,
                                                      this.options.duration * t,
                                                      0,
                                                      1,
                                                      this.options.duration
                                                  ))
                                            : (this.pos = e = t),
                                        (this.now =
                                            (this.end - this.start) * e +
                                            this.start),
                                        this.options.step &&
                                            this.options.step.call(
                                                this.elem,
                                                this.now,
                                                this
                                            ),
                                        r && r.set
                                            ? r.set(this)
                                            : pe.propHooks._default.set(this),
                                        this
                                    );
                                },
                            }),
                            (pe.prototype.init.prototype = pe.prototype),
                            (pe.propHooks = {
                                _default: {
                                    get: function (t) {
                                        var e;
                                        return 1 !== t.elem.nodeType ||
                                            (null != t.elem[t.prop] &&
                                                null == t.elem.style[t.prop])
                                            ? t.elem[t.prop]
                                            : (e = C.css(t.elem, t.prop, "")) &&
                                              "auto" !== e
                                            ? e
                                            : 0;
                                    },
                                    set: function (t) {
                                        C.fx.step[t.prop]
                                            ? C.fx.step[t.prop](t)
                                            : 1 !== t.elem.nodeType ||
                                              (!C.cssHooks[t.prop] &&
                                                  null ==
                                                      t.elem.style[ne(t.prop)])
                                            ? (t.elem[t.prop] = t.now)
                                            : C.style(
                                                  t.elem,
                                                  t.prop,
                                                  t.now + t.unit
                                              );
                                    },
                                },
                            }),
                            (pe.propHooks.scrollTop = pe.propHooks.scrollLeft =
                                {
                                    set: function (t) {
                                        t.elem.nodeType &&
                                            t.elem.parentNode &&
                                            (t.elem[t.prop] = t.now);
                                    },
                                }),
                            (C.easing = {
                                linear: function (t) {
                                    return t;
                                },
                                swing: function (t) {
                                    return 0.5 - Math.cos(t * Math.PI) / 2;
                                },
                                _default: "swing",
                            }),
                            (C.fx = pe.prototype.init),
                            (C.fx.step = {});
                        var be,
                            me,
                            ge = /^(?:toggle|show|hide)$/,
                            fe = /queueHooks$/;
                        function ue() {
                            me &&
                                (!1 === x.hidden && o.requestAnimationFrame
                                    ? o.requestAnimationFrame(ue)
                                    : o.setTimeout(ue, C.fx.interval),
                                C.fx.tick());
                        }
                        function he() {
                            return (
                                o.setTimeout(function () {
                                    be = void 0;
                                }),
                                (be = Date.now())
                            );
                        }
                        function ve(t, e) {
                            var r,
                                o = 0,
                                n = { height: t };
                            for (e = e ? 1 : 0; o < 4; o += 2 - e)
                                n["margin" + (r = gt[o])] = n["padding" + r] =
                                    t;
                            return e && (n.opacity = n.width = t), n;
                        }
                        function xe(t, e, r) {
                            for (
                                var o,
                                    n = (we.tweeners[e] || []).concat(
                                        we.tweeners["*"]
                                    ),
                                    i = 0,
                                    a = n.length;
                                i < a;
                                i++
                            )
                                if ((o = n[i].call(r, e, t))) return o;
                        }
                        function we(t, e, r) {
                            var o,
                                n,
                                i = 0,
                                a = we.prefilters.length,
                                s = C.Deferred().always(function () {
                                    delete l.elem;
                                }),
                                l = function () {
                                    if (n) return !1;
                                    for (
                                        var e = be || he(),
                                            r = Math.max(
                                                0,
                                                d.startTime + d.duration - e
                                            ),
                                            o = 1 - (r / d.duration || 0),
                                            i = 0,
                                            a = d.tweens.length;
                                        i < a;
                                        i++
                                    )
                                        d.tweens[i].run(o);
                                    return (
                                        s.notifyWith(t, [d, o, r]),
                                        o < 1 && a
                                            ? r
                                            : (a || s.notifyWith(t, [d, 1, 0]),
                                              s.resolveWith(t, [d]),
                                              !1)
                                    );
                                },
                                d = s.promise({
                                    elem: t,
                                    props: C.extend({}, e),
                                    opts: C.extend(
                                        !0,
                                        {
                                            specialEasing: {},
                                            easing: C.easing._default,
                                        },
                                        r
                                    ),
                                    originalProperties: e,
                                    originalOptions: r,
                                    startTime: be || he(),
                                    duration: r.duration,
                                    tweens: [],
                                    createTween: function (e, r) {
                                        var o = C.Tween(
                                            t,
                                            d.opts,
                                            e,
                                            r,
                                            d.opts.specialEasing[e] ||
                                                d.opts.easing
                                        );
                                        return d.tweens.push(o), o;
                                    },
                                    stop: function (e) {
                                        var r = 0,
                                            o = e ? d.tweens.length : 0;
                                        if (n) return this;
                                        for (n = !0; r < o; r++)
                                            d.tweens[r].run(1);
                                        return (
                                            e
                                                ? (s.notifyWith(t, [d, 1, 0]),
                                                  s.resolveWith(t, [d, e]))
                                                : s.rejectWith(t, [d, e]),
                                            this
                                        );
                                    },
                                }),
                                c = d.props;
                            for (
                                !(function (t, e) {
                                    var r, o, n, i, a;
                                    for (r in t)
                                        if (
                                            ((n = e[(o = nt(r))]),
                                            (i = t[r]),
                                            Array.isArray(i) &&
                                                ((n = i[1]), (i = t[r] = i[0])),
                                            r !== o &&
                                                ((t[o] = i), delete t[r]),
                                            (a = C.cssHooks[o]) &&
                                                ("expand" in a))
                                        )
                                            for (r in ((i = a.expand(i)),
                                            delete t[o],
                                            i))
                                                (r in t) ||
                                                    ((t[r] = i[r]), (e[r] = n));
                                        else e[o] = n;
                                })(c, d.opts.specialEasing);
                                i < a;
                                i++
                            )
                                if (
                                    (o = we.prefilters[i].call(d, t, c, d.opts))
                                )
                                    return (
                                        h(o.stop) &&
                                            (C._queueHooks(
                                                d.elem,
                                                d.opts.queue
                                            ).stop = o.stop.bind(o)),
                                        o
                                    );
                            return (
                                C.map(c, xe, d),
                                h(d.opts.start) && d.opts.start.call(t, d),
                                d
                                    .progress(d.opts.progress)
                                    .done(d.opts.done, d.opts.complete)
                                    .fail(d.opts.fail)
                                    .always(d.opts.always),
                                C.fx.timer(
                                    C.extend(l, {
                                        elem: t,
                                        anim: d,
                                        queue: d.opts.queue,
                                    })
                                ),
                                d
                            );
                        }
                        (C.Animation = C.extend(we, {
                            tweeners: {
                                "*": [
                                    function (t, e) {
                                        var r = this.createTween(t, e);
                                        return xt(r.elem, t, mt.exec(e), r), r;
                                    },
                                ],
                            },
                            tweener: function (t, e) {
                                h(t)
                                    ? ((e = t), (t = ["*"]))
                                    : (t = t.match(U));
                                for (var r, o = 0, n = t.length; o < n; o++)
                                    (r = t[o]),
                                        (we.tweeners[r] = we.tweeners[r] || []),
                                        we.tweeners[r].unshift(e);
                            },
                            prefilters: [
                                function (t, e, r) {
                                    var o,
                                        n,
                                        i,
                                        a,
                                        s,
                                        l,
                                        d,
                                        c,
                                        p = "width" in e || "height" in e,
                                        b = this,
                                        m = {},
                                        g = t.style,
                                        f = t.nodeType && vt(t),
                                        u = st.get(t, "fxshow");
                                    for (o in (r.queue ||
                                        (null ==
                                            (a = C._queueHooks(t, "fx"))
                                                .unqueued &&
                                            ((a.unqueued = 0),
                                            (s = a.empty.fire),
                                            (a.empty.fire = function () {
                                                a.unqueued || s();
                                            })),
                                        a.unqueued++,
                                        b.always(function () {
                                            b.always(function () {
                                                a.unqueued--,
                                                    C.queue(t, "fx").length ||
                                                        a.empty.fire();
                                            });
                                        })),
                                    e))
                                        if (((n = e[o]), ge.test(n))) {
                                            if (
                                                (delete e[o],
                                                (i = i || "toggle" === n),
                                                n === (f ? "hide" : "show"))
                                            ) {
                                                if (
                                                    "show" !== n ||
                                                    !u ||
                                                    void 0 === u[o]
                                                )
                                                    continue;
                                                f = !0;
                                            }
                                            m[o] = (u && u[o]) || C.style(t, o);
                                        }
                                    if (
                                        (l = !C.isEmptyObject(e)) ||
                                        !C.isEmptyObject(m)
                                    )
                                        for (o in (p &&
                                            1 === t.nodeType &&
                                            ((r.overflow = [
                                                g.overflow,
                                                g.overflowX,
                                                g.overflowY,
                                            ]),
                                            null == (d = u && u.display) &&
                                                (d = st.get(t, "display")),
                                            "none" ===
                                                (c = C.css(t, "display")) &&
                                                (d
                                                    ? (c = d)
                                                    : (kt([t], !0),
                                                      (d =
                                                          t.style.display || d),
                                                      (c = C.css(t, "display")),
                                                      kt([t]))),
                                            ("inline" === c ||
                                                ("inline-block" === c &&
                                                    null != d)) &&
                                                "none" === C.css(t, "float") &&
                                                (l ||
                                                    (b.done(function () {
                                                        g.display = d;
                                                    }),
                                                    null == d &&
                                                        ((c = g.display),
                                                        (d =
                                                            "none" === c
                                                                ? ""
                                                                : c))),
                                                (g.display = "inline-block"))),
                                        r.overflow &&
                                            ((g.overflow = "hidden"),
                                            b.always(function () {
                                                (g.overflow = r.overflow[0]),
                                                    (g.overflowX =
                                                        r.overflow[1]),
                                                    (g.overflowY =
                                                        r.overflow[2]);
                                            })),
                                        (l = !1),
                                        m))
                                            l ||
                                                (u
                                                    ? "hidden" in u &&
                                                      (f = u.hidden)
                                                    : (u = st.access(
                                                          t,
                                                          "fxshow",
                                                          { display: d }
                                                      )),
                                                i && (u.hidden = !f),
                                                f && kt([t], !0),
                                                b.done(function () {
                                                    for (o in (f || kt([t]),
                                                    st.remove(t, "fxshow"),
                                                    m))
                                                        C.style(t, o, m[o]);
                                                })),
                                                (l = xe(f ? u[o] : 0, o, b)),
                                                o in u ||
                                                    ((u[o] = l.start),
                                                    f &&
                                                        ((l.end = l.start),
                                                        (l.start = 0)));
                                },
                            ],
                            prefilter: function (t, e) {
                                e
                                    ? we.prefilters.unshift(t)
                                    : we.prefilters.push(t);
                            },
                        })),
                            (C.speed = function (t, e, r) {
                                var o =
                                    t && "object" == typeof t
                                        ? C.extend({}, t)
                                        : {
                                              complete:
                                                  r || (!r && e) || (h(t) && t),
                                              duration: t,
                                              easing:
                                                  (r && e) || (e && !h(e) && e),
                                          };
                                return (
                                    C.fx.off
                                        ? (o.duration = 0)
                                        : "number" != typeof o.duration &&
                                          (o.duration in C.fx.speeds
                                              ? (o.duration =
                                                    C.fx.speeds[o.duration])
                                              : (o.duration =
                                                    C.fx.speeds._default)),
                                    (null != o.queue && !0 !== o.queue) ||
                                        (o.queue = "fx"),
                                    (o.old = o.complete),
                                    (o.complete = function () {
                                        h(o.old) && o.old.call(this),
                                            o.queue && C.dequeue(this, o.queue);
                                    }),
                                    o
                                );
                            }),
                            C.fn.extend({
                                fadeTo: function (t, e, r, o) {
                                    return this.filter(vt)
                                        .css("opacity", 0)
                                        .show()
                                        .end()
                                        .animate({ opacity: e }, t, r, o);
                                },
                                animate: function (t, e, r, o) {
                                    var n = C.isEmptyObject(t),
                                        i = C.speed(e, r, o),
                                        a = function () {
                                            var e = we(
                                                this,
                                                C.extend({}, t),
                                                i
                                            );
                                            (n || st.get(this, "finish")) &&
                                                e.stop(!0);
                                        };
                                    return (
                                        (a.finish = a),
                                        n || !1 === i.queue
                                            ? this.each(a)
                                            : this.queue(i.queue, a)
                                    );
                                },
                                stop: function (t, e, r) {
                                    var o = function (t) {
                                        var e = t.stop;
                                        delete t.stop, e(r);
                                    };
                                    return (
                                        "string" != typeof t &&
                                            ((r = e), (e = t), (t = void 0)),
                                        e && this.queue(t || "fx", []),
                                        this.each(function () {
                                            var e = !0,
                                                n =
                                                    null != t &&
                                                    t + "queueHooks",
                                                i = C.timers,
                                                a = st.get(this);
                                            if (n) a[n] && a[n].stop && o(a[n]);
                                            else
                                                for (n in a)
                                                    a[n] &&
                                                        a[n].stop &&
                                                        fe.test(n) &&
                                                        o(a[n]);
                                            for (n = i.length; n--; )
                                                i[n].elem !== this ||
                                                    (null != t &&
                                                        i[n].queue !== t) ||
                                                    (i[n].anim.stop(r),
                                                    (e = !1),
                                                    i.splice(n, 1));
                                            (!e && r) || C.dequeue(this, t);
                                        })
                                    );
                                },
                                finish: function (t) {
                                    return (
                                        !1 !== t && (t = t || "fx"),
                                        this.each(function () {
                                            var e,
                                                r = st.get(this),
                                                o = r[t + "queue"],
                                                n = r[t + "queueHooks"],
                                                i = C.timers,
                                                a = o ? o.length : 0;
                                            for (
                                                r.finish = !0,
                                                    C.queue(this, t, []),
                                                    n &&
                                                        n.stop &&
                                                        n.stop.call(this, !0),
                                                    e = i.length;
                                                e--;

                                            )
                                                i[e].elem === this &&
                                                    i[e].queue === t &&
                                                    (i[e].anim.stop(!0),
                                                    i.splice(e, 1));
                                            for (e = 0; e < a; e++)
                                                o[e] &&
                                                    o[e].finish &&
                                                    o[e].finish.call(this);
                                            delete r.finish;
                                        })
                                    );
                                },
                            }),
                            C.each(["toggle", "show", "hide"], function (t, e) {
                                var r = C.fn[e];
                                C.fn[e] = function (t, o, n) {
                                    return null == t || "boolean" == typeof t
                                        ? r.apply(this, arguments)
                                        : this.animate(ve(e, !0), t, o, n);
                                };
                            }),
                            C.each(
                                {
                                    slideDown: ve("show"),
                                    slideUp: ve("hide"),
                                    slideToggle: ve("toggle"),
                                    fadeIn: { opacity: "show" },
                                    fadeOut: { opacity: "hide" },
                                    fadeToggle: { opacity: "toggle" },
                                },
                                function (t, e) {
                                    C.fn[t] = function (t, r, o) {
                                        return this.animate(e, t, r, o);
                                    };
                                }
                            ),
                            (C.timers = []),
                            (C.fx.tick = function () {
                                var t,
                                    e = 0,
                                    r = C.timers;
                                for (be = Date.now(); e < r.length; e++)
                                    (t = r[e])() ||
                                        r[e] !== t ||
                                        r.splice(e--, 1);
                                r.length || C.fx.stop(), (be = void 0);
                            }),
                            (C.fx.timer = function (t) {
                                C.timers.push(t), C.fx.start();
                            }),
                            (C.fx.interval = 13),
                            (C.fx.start = function () {
                                me || ((me = !0), ue());
                            }),
                            (C.fx.stop = function () {
                                me = null;
                            }),
                            (C.fx.speeds = {
                                slow: 600,
                                fast: 200,
                                _default: 400,
                            }),
                            (C.fn.delay = function (t, e) {
                                return (
                                    (t = (C.fx && C.fx.speeds[t]) || t),
                                    (e = e || "fx"),
                                    this.queue(e, function (e, r) {
                                        var n = o.setTimeout(e, t);
                                        r.stop = function () {
                                            o.clearTimeout(n);
                                        };
                                    })
                                );
                            }),
                            (function () {
                                var t = x.createElement("input"),
                                    e = x
                                        .createElement("select")
                                        .appendChild(x.createElement("option"));
                                (t.type = "checkbox"),
                                    (u.checkOn = "" !== t.value),
                                    (u.optSelected = e.selected),
                                    ((t = x.createElement("input")).value =
                                        "t"),
                                    (t.type = "radio"),
                                    (u.radioValue = "t" === t.value);
                            })();
                        var ye,
                            ke = C.expr.attrHandle;
                        C.fn.extend({
                            attr: function (t, e) {
                                return tt(
                                    this,
                                    C.attr,
                                    t,
                                    e,
                                    arguments.length > 1
                                );
                            },
                            removeAttr: function (t) {
                                return this.each(function () {
                                    C.removeAttr(this, t);
                                });
                            },
                        }),
                            C.extend({
                                attr: function (t, e, r) {
                                    var o,
                                        n,
                                        i = t.nodeType;
                                    if (3 !== i && 8 !== i && 2 !== i)
                                        return void 0 === t.getAttribute
                                            ? C.prop(t, e, r)
                                            : ((1 === i && C.isXMLDoc(t)) ||
                                                  (n =
                                                      C.attrHooks[
                                                          e.toLowerCase()
                                                      ] ||
                                                      (C.expr.match.bool.test(e)
                                                          ? ye
                                                          : void 0)),
                                              void 0 !== r
                                                  ? null === r
                                                      ? void C.removeAttr(t, e)
                                                      : n &&
                                                        "set" in n &&
                                                        void 0 !==
                                                            (o = n.set(t, r, e))
                                                      ? o
                                                      : (t.setAttribute(
                                                            e,
                                                            r + ""
                                                        ),
                                                        r)
                                                  : n &&
                                                    "get" in n &&
                                                    null !== (o = n.get(t, e))
                                                  ? o
                                                  : null ==
                                                    (o = C.find.attr(t, e))
                                                  ? void 0
                                                  : o);
                                },
                                attrHooks: {
                                    type: {
                                        set: function (t, e) {
                                            if (
                                                !u.radioValue &&
                                                "radio" === e &&
                                                A(t, "input")
                                            ) {
                                                var r = t.value;
                                                return (
                                                    t.setAttribute("type", e),
                                                    r && (t.value = r),
                                                    e
                                                );
                                            }
                                        },
                                    },
                                },
                                removeAttr: function (t, e) {
                                    var r,
                                        o = 0,
                                        n = e && e.match(U);
                                    if (n && 1 === t.nodeType)
                                        for (; (r = n[o++]); )
                                            t.removeAttribute(r);
                                },
                            }),
                            (ye = {
                                set: function (t, e, r) {
                                    return (
                                        !1 === e
                                            ? C.removeAttr(t, r)
                                            : t.setAttribute(r, r),
                                        r
                                    );
                                },
                            }),
                            C.each(
                                C.expr.match.bool.source.match(/\w+/g),
                                function (t, e) {
                                    var r = ke[e] || C.find.attr;
                                    ke[e] = function (t, e, o) {
                                        var n,
                                            i,
                                            a = e.toLowerCase();
                                        return (
                                            o ||
                                                ((i = ke[a]),
                                                (ke[a] = n),
                                                (n =
                                                    null != r(t, e, o)
                                                        ? a
                                                        : null),
                                                (ke[a] = i)),
                                            n
                                        );
                                    };
                                }
                            );
                        var _e = /^(?:input|select|textarea|button)$/i,
                            Ee = /^(?:a|area)$/i;
                        function Ce(t) {
                            return (t.match(U) || []).join(" ");
                        }
                        function Te(t) {
                            return (
                                (t.getAttribute && t.getAttribute("class")) ||
                                ""
                            );
                        }
                        function Ae(t) {
                            return Array.isArray(t)
                                ? t
                                : ("string" == typeof t && t.match(U)) || [];
                        }
                        C.fn.extend({
                            prop: function (t, e) {
                                return tt(
                                    this,
                                    C.prop,
                                    t,
                                    e,
                                    arguments.length > 1
                                );
                            },
                            removeProp: function (t) {
                                return this.each(function () {
                                    delete this[C.propFix[t] || t];
                                });
                            },
                        }),
                            C.extend({
                                prop: function (t, e, r) {
                                    var o,
                                        n,
                                        i = t.nodeType;
                                    if (3 !== i && 8 !== i && 2 !== i)
                                        return (
                                            (1 === i && C.isXMLDoc(t)) ||
                                                ((e = C.propFix[e] || e),
                                                (n = C.propHooks[e])),
                                            void 0 !== r
                                                ? n &&
                                                  "set" in n &&
                                                  void 0 !==
                                                      (o = n.set(t, r, e))
                                                    ? o
                                                    : (t[e] = r)
                                                : n &&
                                                  "get" in n &&
                                                  null !== (o = n.get(t, e))
                                                ? o
                                                : t[e]
                                        );
                                },
                                propHooks: {
                                    tabIndex: {
                                        get: function (t) {
                                            var e = C.find.attr(t, "tabindex");
                                            return e
                                                ? parseInt(e, 10)
                                                : _e.test(t.nodeName) ||
                                                  (Ee.test(t.nodeName) &&
                                                      t.href)
                                                ? 0
                                                : -1;
                                        },
                                    },
                                },
                                propFix: { for: "htmlFor", class: "className" },
                            }),
                            u.optSelected ||
                                (C.propHooks.selected = {
                                    get: function (t) {
                                        var e = t.parentNode;
                                        return (
                                            e &&
                                                e.parentNode &&
                                                e.parentNode.selectedIndex,
                                            null
                                        );
                                    },
                                    set: function (t) {
                                        var e = t.parentNode;
                                        e &&
                                            (e.selectedIndex,
                                            e.parentNode &&
                                                e.parentNode.selectedIndex);
                                    },
                                }),
                            C.each(
                                [
                                    "tabIndex",
                                    "readOnly",
                                    "maxLength",
                                    "cellSpacing",
                                    "cellPadding",
                                    "rowSpan",
                                    "colSpan",
                                    "useMap",
                                    "frameBorder",
                                    "contentEditable",
                                ],
                                function () {
                                    C.propFix[this.toLowerCase()] = this;
                                }
                            ),
                            C.fn.extend({
                                addClass: function (t) {
                                    var e, r, o, n, i, a;
                                    return h(t)
                                        ? this.each(function (e) {
                                              C(this).addClass(
                                                  t.call(this, e, Te(this))
                                              );
                                          })
                                        : (e = Ae(t)).length
                                        ? this.each(function () {
                                              if (
                                                  ((o = Te(this)),
                                                  (r =
                                                      1 === this.nodeType &&
                                                      " " + Ce(o) + " "))
                                              ) {
                                                  for (i = 0; i < e.length; i++)
                                                      (n = e[i]),
                                                          r.indexOf(
                                                              " " + n + " "
                                                          ) < 0 &&
                                                              (r += n + " ");
                                                  (a = Ce(r)),
                                                      o !== a &&
                                                          this.setAttribute(
                                                              "class",
                                                              a
                                                          );
                                              }
                                          })
                                        : this;
                                },
                                removeClass: function (t) {
                                    var e, r, o, n, i, a;
                                    return h(t)
                                        ? this.each(function (e) {
                                              C(this).removeClass(
                                                  t.call(this, e, Te(this))
                                              );
                                          })
                                        : arguments.length
                                        ? (e = Ae(t)).length
                                            ? this.each(function () {
                                                  if (
                                                      ((o = Te(this)),
                                                      (r =
                                                          1 === this.nodeType &&
                                                          " " + Ce(o) + " "))
                                                  ) {
                                                      for (
                                                          i = 0;
                                                          i < e.length;
                                                          i++
                                                      )
                                                          for (
                                                              n = e[i];
                                                              r.indexOf(
                                                                  " " + n + " "
                                                              ) > -1;

                                                          )
                                                              r = r.replace(
                                                                  " " + n + " ",
                                                                  " "
                                                              );
                                                      (a = Ce(r)),
                                                          o !== a &&
                                                              this.setAttribute(
                                                                  "class",
                                                                  a
                                                              );
                                                  }
                                              })
                                            : this
                                        : this.attr("class", "");
                                },
                                toggleClass: function (t, e) {
                                    var r,
                                        o,
                                        n,
                                        i,
                                        a = typeof t,
                                        s = "string" === a || Array.isArray(t);
                                    return h(t)
                                        ? this.each(function (r) {
                                              C(this).toggleClass(
                                                  t.call(this, r, Te(this), e),
                                                  e
                                              );
                                          })
                                        : "boolean" == typeof e && s
                                        ? e
                                            ? this.addClass(t)
                                            : this.removeClass(t)
                                        : ((r = Ae(t)),
                                          this.each(function () {
                                              if (s)
                                                  for (
                                                      i = C(this), n = 0;
                                                      n < r.length;
                                                      n++
                                                  )
                                                      (o = r[n]),
                                                          i.hasClass(o)
                                                              ? i.removeClass(o)
                                                              : i.addClass(o);
                                              else
                                                  (void 0 !== t &&
                                                      "boolean" !== a) ||
                                                      ((o = Te(this)) &&
                                                          st.set(
                                                              this,
                                                              "__className__",
                                                              o
                                                          ),
                                                      this.setAttribute &&
                                                          this.setAttribute(
                                                              "class",
                                                              o || !1 === t
                                                                  ? ""
                                                                  : st.get(
                                                                        this,
                                                                        "__className__"
                                                                    ) || ""
                                                          ));
                                          }));
                                },
                                hasClass: function (t) {
                                    var e,
                                        r,
                                        o = 0;
                                    for (e = " " + t + " "; (r = this[o++]); )
                                        if (
                                            1 === r.nodeType &&
                                            (" " + Ce(Te(r)) + " ").indexOf(e) >
                                                -1
                                        )
                                            return !0;
                                    return !1;
                                },
                            });
                        var je = /\r/g;
                        C.fn.extend({
                            val: function (t) {
                                var e,
                                    r,
                                    o,
                                    n = this[0];
                                return arguments.length
                                    ? ((o = h(t)),
                                      this.each(function (r) {
                                          var n;
                                          1 === this.nodeType &&
                                              (null ==
                                              (n = o
                                                  ? t.call(
                                                        this,
                                                        r,
                                                        C(this).val()
                                                    )
                                                  : t)
                                                  ? (n = "")
                                                  : "number" == typeof n
                                                  ? (n += "")
                                                  : Array.isArray(n) &&
                                                    (n = C.map(n, function (t) {
                                                        return null == t
                                                            ? ""
                                                            : t + "";
                                                    })),
                                              ((e =
                                                  C.valHooks[this.type] ||
                                                  C.valHooks[
                                                      this.nodeName.toLowerCase()
                                                  ]) &&
                                                  "set" in e &&
                                                  void 0 !==
                                                      e.set(
                                                          this,
                                                          n,
                                                          "value"
                                                      )) ||
                                                  (this.value = n));
                                      }))
                                    : n
                                    ? (e =
                                          C.valHooks[n.type] ||
                                          C.valHooks[
                                              n.nodeName.toLowerCase()
                                          ]) &&
                                      "get" in e &&
                                      void 0 !== (r = e.get(n, "value"))
                                        ? r
                                        : "string" == typeof (r = n.value)
                                        ? r.replace(je, "")
                                        : null == r
                                        ? ""
                                        : r
                                    : void 0;
                            },
                        }),
                            C.extend({
                                valHooks: {
                                    option: {
                                        get: function (t) {
                                            var e = C.find.attr(t, "value");
                                            return null != e
                                                ? e
                                                : Ce(C.text(t));
                                        },
                                    },
                                    select: {
                                        get: function (t) {
                                            var e,
                                                r,
                                                o,
                                                n = t.options,
                                                i = t.selectedIndex,
                                                a = "select-one" === t.type,
                                                s = a ? null : [],
                                                l = a ? i + 1 : n.length;
                                            for (
                                                o = i < 0 ? l : a ? i : 0;
                                                o < l;
                                                o++
                                            )
                                                if (
                                                    ((r = n[o]).selected ||
                                                        o === i) &&
                                                    !r.disabled &&
                                                    (!r.parentNode.disabled ||
                                                        !A(
                                                            r.parentNode,
                                                            "optgroup"
                                                        ))
                                                ) {
                                                    if (((e = C(r).val()), a))
                                                        return e;
                                                    s.push(e);
                                                }
                                            return s;
                                        },
                                        set: function (t, e) {
                                            for (
                                                var r,
                                                    o,
                                                    n = t.options,
                                                    i = C.makeArray(e),
                                                    a = n.length;
                                                a--;

                                            )
                                                ((o = n[a]).selected =
                                                    C.inArray(
                                                        C.valHooks.option.get(
                                                            o
                                                        ),
                                                        i
                                                    ) > -1) && (r = !0);
                                            return (
                                                r || (t.selectedIndex = -1), i
                                            );
                                        },
                                    },
                                },
                            }),
                            C.each(["radio", "checkbox"], function () {
                                (C.valHooks[this] = {
                                    set: function (t, e) {
                                        if (Array.isArray(e))
                                            return (t.checked =
                                                C.inArray(C(t).val(), e) > -1);
                                    },
                                }),
                                    u.checkOn ||
                                        (C.valHooks[this].get = function (t) {
                                            return null ===
                                                t.getAttribute("value")
                                                ? "on"
                                                : t.value;
                                        });
                            });
                        var ze = o.location,
                            Se = { guid: Date.now() },
                            Oe = /\?/;
                        C.parseXML = function (t) {
                            var e, r;
                            if (!t || "string" != typeof t) return null;
                            try {
                                e = new o.DOMParser().parseFromString(
                                    t,
                                    "text/xml"
                                );
                            } catch (t) {}
                            return (
                                (r =
                                    e &&
                                    e.getElementsByTagName("parsererror")[0]),
                                (e && !r) ||
                                    C.error(
                                        "Invalid XML: " +
                                            (r
                                                ? C.map(
                                                      r.childNodes,
                                                      function (t) {
                                                          return t.textContent;
                                                      }
                                                  ).join("\n")
                                                : t)
                                    ),
                                e
                            );
                        };
                        var De = /^(?:focusinfocus|focusoutblur)$/,
                            Le = function (t) {
                                t.stopPropagation();
                            };
                        C.extend(C.event, {
                            trigger: function (t, e, r, n) {
                                var i,
                                    a,
                                    s,
                                    l,
                                    d,
                                    c,
                                    p,
                                    b,
                                    g = [r || x],
                                    f = m.call(t, "type") ? t.type : t,
                                    u = m.call(t, "namespace")
                                        ? t.namespace.split(".")
                                        : [];
                                if (
                                    ((a = b = s = r = r || x),
                                    3 !== r.nodeType &&
                                        8 !== r.nodeType &&
                                        !De.test(f + C.event.triggered) &&
                                        (f.indexOf(".") > -1 &&
                                            ((u = f.split(".")),
                                            (f = u.shift()),
                                            u.sort()),
                                        (d = f.indexOf(":") < 0 && "on" + f),
                                        ((t = t[C.expando]
                                            ? t
                                            : new C.Event(
                                                  f,
                                                  "object" == typeof t && t
                                              )).isTrigger = n ? 2 : 3),
                                        (t.namespace = u.join(".")),
                                        (t.rnamespace = t.namespace
                                            ? new RegExp(
                                                  "(^|\\.)" +
                                                      u.join("\\.(?:.*\\.|)") +
                                                      "(\\.|$)"
                                              )
                                            : null),
                                        (t.result = void 0),
                                        t.target || (t.target = r),
                                        (e =
                                            null == e
                                                ? [t]
                                                : C.makeArray(e, [t])),
                                        (p = C.event.special[f] || {}),
                                        n ||
                                            !p.trigger ||
                                            !1 !== p.trigger.apply(r, e)))
                                ) {
                                    if (!n && !p.noBubble && !v(r)) {
                                        for (
                                            l = p.delegateType || f,
                                                De.test(l + f) ||
                                                    (a = a.parentNode);
                                            a;
                                            a = a.parentNode
                                        )
                                            g.push(a), (s = a);
                                        s === (r.ownerDocument || x) &&
                                            g.push(
                                                s.defaultView ||
                                                    s.parentWindow ||
                                                    o
                                            );
                                    }
                                    for (
                                        i = 0;
                                        (a = g[i++]) &&
                                        !t.isPropagationStopped();

                                    )
                                        (b = a),
                                            (t.type =
                                                i > 1 ? l : p.bindType || f),
                                            (c =
                                                (st.get(a, "events") ||
                                                    Object.create(null))[
                                                    t.type
                                                ] && st.get(a, "handle")) &&
                                                c.apply(a, e),
                                            (c = d && a[d]) &&
                                                c.apply &&
                                                it(a) &&
                                                ((t.result = c.apply(a, e)),
                                                !1 === t.result &&
                                                    t.preventDefault());
                                    return (
                                        (t.type = f),
                                        n ||
                                            t.isDefaultPrevented() ||
                                            (p._default &&
                                                !1 !==
                                                    p._default.apply(
                                                        g.pop(),
                                                        e
                                                    )) ||
                                            !it(r) ||
                                            (d &&
                                                h(r[f]) &&
                                                !v(r) &&
                                                ((s = r[d]) && (r[d] = null),
                                                (C.event.triggered = f),
                                                t.isPropagationStopped() &&
                                                    b.addEventListener(f, Le),
                                                r[f](),
                                                t.isPropagationStopped() &&
                                                    b.removeEventListener(
                                                        f,
                                                        Le
                                                    ),
                                                (C.event.triggered = void 0),
                                                s && (r[d] = s))),
                                        t.result
                                    );
                                }
                            },
                            simulate: function (t, e, r) {
                                var o = C.extend(new C.Event(), r, {
                                    type: t,
                                    isSimulated: !0,
                                });
                                C.event.trigger(o, null, e);
                            },
                        }),
                            C.fn.extend({
                                trigger: function (t, e) {
                                    return this.each(function () {
                                        C.event.trigger(t, e, this);
                                    });
                                },
                                triggerHandler: function (t, e) {
                                    var r = this[0];
                                    if (r) return C.event.trigger(t, e, r, !0);
                                },
                            });
                        var Ne = /\[\]$/,
                            Me = /\r?\n/g,
                            Pe = /^(?:submit|button|image|reset|file)$/i,
                            Ie = /^(?:input|select|textarea|keygen)/i;
                        function $e(t, e, r, o) {
                            var n;
                            if (Array.isArray(e))
                                C.each(e, function (e, n) {
                                    r || Ne.test(t)
                                        ? o(t, n)
                                        : $e(
                                              t +
                                                  "[" +
                                                  ("object" == typeof n &&
                                                  null != n
                                                      ? e
                                                      : "") +
                                                  "]",
                                              n,
                                              r,
                                              o
                                          );
                                });
                            else if (r || "object" !== k(e)) o(t, e);
                            else for (n in e) $e(t + "[" + n + "]", e[n], r, o);
                        }
                        (C.param = function (t, e) {
                            var r,
                                o = [],
                                n = function (t, e) {
                                    var r = h(e) ? e() : e;
                                    o[o.length] =
                                        encodeURIComponent(t) +
                                        "=" +
                                        encodeURIComponent(null == r ? "" : r);
                                };
                            if (null == t) return "";
                            if (
                                Array.isArray(t) ||
                                (t.jquery && !C.isPlainObject(t))
                            )
                                C.each(t, function () {
                                    n(this.name, this.value);
                                });
                            else for (r in t) $e(r, t[r], e, n);
                            return o.join("&");
                        }),
                            C.fn.extend({
                                serialize: function () {
                                    return C.param(this.serializeArray());
                                },
                                serializeArray: function () {
                                    return this.map(function () {
                                        var t = C.prop(this, "elements");
                                        return t ? C.makeArray(t) : this;
                                    })
                                        .filter(function () {
                                            var t = this.type;
                                            return (
                                                this.name &&
                                                !C(this).is(":disabled") &&
                                                Ie.test(this.nodeName) &&
                                                !Pe.test(t) &&
                                                (this.checked || !Ct.test(t))
                                            );
                                        })
                                        .map(function (t, e) {
                                            var r = C(this).val();
                                            return null == r
                                                ? null
                                                : Array.isArray(r)
                                                ? C.map(r, function (t) {
                                                      return {
                                                          name: e.name,
                                                          value: t.replace(
                                                              Me,
                                                              "\r\n"
                                                          ),
                                                      };
                                                  })
                                                : {
                                                      name: e.name,
                                                      value: r.replace(
                                                          Me,
                                                          "\r\n"
                                                      ),
                                                  };
                                        })
                                        .get();
                                },
                            });
                        var Re = /%20/g,
                            Be = /#.*$/,
                            He = /([?&])_=[^&]*/,
                            qe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                            Fe = /^(?:GET|HEAD)$/,
                            We = /^\/\//,
                            Xe = {},
                            Ge = {},
                            Ue = "*/".concat("*"),
                            Ve = x.createElement("a");
                        function Ye(t) {
                            return function (e, r) {
                                "string" != typeof e && ((r = e), (e = "*"));
                                var o,
                                    n = 0,
                                    i = e.toLowerCase().match(U) || [];
                                if (h(r))
                                    for (; (o = i[n++]); )
                                        "+" === o[0]
                                            ? ((o = o.slice(1) || "*"),
                                              (t[o] = t[o] || []).unshift(r))
                                            : (t[o] = t[o] || []).push(r);
                            };
                        }
                        function Ke(t, e, r, o) {
                            var n = {},
                                i = t === Ge;
                            function a(s) {
                                var l;
                                return (
                                    (n[s] = !0),
                                    C.each(t[s] || [], function (t, s) {
                                        var d = s(e, r, o);
                                        return "string" != typeof d || i || n[d]
                                            ? i
                                                ? !(l = d)
                                                : void 0
                                            : (e.dataTypes.unshift(d),
                                              a(d),
                                              !1);
                                    }),
                                    l
                                );
                            }
                            return a(e.dataTypes[0]) || (!n["*"] && a("*"));
                        }
                        function Qe(t, e) {
                            var r,
                                o,
                                n = C.ajaxSettings.flatOptions || {};
                            for (r in e)
                                void 0 !== e[r] &&
                                    ((n[r] ? t : o || (o = {}))[r] = e[r]);
                            return o && C.extend(!0, t, o), t;
                        }
                        (Ve.href = ze.href),
                            C.extend({
                                active: 0,
                                lastModified: {},
                                etag: {},
                                ajaxSettings: {
                                    url: ze.href,
                                    type: "GET",
                                    isLocal:
                                        /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                            ze.protocol
                                        ),
                                    global: !0,
                                    processData: !0,
                                    async: !0,
                                    contentType:
                                        "application/x-www-form-urlencoded; charset=UTF-8",
                                    accepts: {
                                        "*": Ue,
                                        text: "text/plain",
                                        html: "text/html",
                                        xml: "application/xml, text/xml",
                                        json: "application/json, text/javascript",
                                    },
                                    contents: {
                                        xml: /\bxml\b/,
                                        html: /\bhtml/,
                                        json: /\bjson\b/,
                                    },
                                    responseFields: {
                                        xml: "responseXML",
                                        text: "responseText",
                                        json: "responseJSON",
                                    },
                                    converters: {
                                        "* text": String,
                                        "text html": !0,
                                        "text json": JSON.parse,
                                        "text xml": C.parseXML,
                                    },
                                    flatOptions: { url: !0, context: !0 },
                                },
                                ajaxSetup: function (t, e) {
                                    return e
                                        ? Qe(Qe(t, C.ajaxSettings), e)
                                        : Qe(C.ajaxSettings, t);
                                },
                                ajaxPrefilter: Ye(Xe),
                                ajaxTransport: Ye(Ge),
                                ajax: function (t, e) {
                                    "object" == typeof t &&
                                        ((e = t), (t = void 0)),
                                        (e = e || {});
                                    var r,
                                        n,
                                        i,
                                        a,
                                        s,
                                        l,
                                        d,
                                        c,
                                        p,
                                        b,
                                        m = C.ajaxSetup({}, e),
                                        g = m.context || m,
                                        f =
                                            m.context &&
                                            (g.nodeType || g.jquery)
                                                ? C(g)
                                                : C.event,
                                        u = C.Deferred(),
                                        h = C.Callbacks("once memory"),
                                        v = m.statusCode || {},
                                        w = {},
                                        y = {},
                                        k = "canceled",
                                        _ = {
                                            readyState: 0,
                                            getResponseHeader: function (t) {
                                                var e;
                                                if (d) {
                                                    if (!a)
                                                        for (
                                                            a = {};
                                                            (e = qe.exec(i));

                                                        )
                                                            a[
                                                                e[1].toLowerCase() +
                                                                    " "
                                                            ] = (
                                                                a[
                                                                    e[1].toLowerCase() +
                                                                        " "
                                                                ] || []
                                                            ).concat(e[2]);
                                                    e =
                                                        a[
                                                            t.toLowerCase() +
                                                                " "
                                                        ];
                                                }
                                                return null == e
                                                    ? null
                                                    : e.join(", ");
                                            },
                                            getAllResponseHeaders: function () {
                                                return d ? i : null;
                                            },
                                            setRequestHeader: function (t, e) {
                                                return (
                                                    null == d &&
                                                        ((t = y[
                                                            t.toLowerCase()
                                                        ] =
                                                            y[
                                                                t.toLowerCase()
                                                            ] || t),
                                                        (w[t] = e)),
                                                    this
                                                );
                                            },
                                            overrideMimeType: function (t) {
                                                return (
                                                    null == d &&
                                                        (m.mimeType = t),
                                                    this
                                                );
                                            },
                                            statusCode: function (t) {
                                                var e;
                                                if (t)
                                                    if (d)
                                                        _.always(t[_.status]);
                                                    else
                                                        for (e in t)
                                                            v[e] = [v[e], t[e]];
                                                return this;
                                            },
                                            abort: function (t) {
                                                var e = t || k;
                                                return (
                                                    r && r.abort(e),
                                                    E(0, e),
                                                    this
                                                );
                                            },
                                        };
                                    if (
                                        (u.promise(_),
                                        (m.url = (
                                            (t || m.url || ze.href) + ""
                                        ).replace(We, ze.protocol + "//")),
                                        (m.type =
                                            e.method ||
                                            e.type ||
                                            m.method ||
                                            m.type),
                                        (m.dataTypes = (m.dataType || "*")
                                            .toLowerCase()
                                            .match(U) || [""]),
                                        null == m.crossDomain)
                                    ) {
                                        l = x.createElement("a");
                                        try {
                                            (l.href = m.url),
                                                (l.href = l.href),
                                                (m.crossDomain =
                                                    Ve.protocol +
                                                        "//" +
                                                        Ve.host !=
                                                    l.protocol + "//" + l.host);
                                        } catch (t) {
                                            m.crossDomain = !0;
                                        }
                                    }
                                    if (
                                        (m.data &&
                                            m.processData &&
                                            "string" != typeof m.data &&
                                            (m.data = C.param(
                                                m.data,
                                                m.traditional
                                            )),
                                        Ke(Xe, m, e, _),
                                        d)
                                    )
                                        return _;
                                    for (p in ((c = C.event && m.global) &&
                                        0 == C.active++ &&
                                        C.event.trigger("ajaxStart"),
                                    (m.type = m.type.toUpperCase()),
                                    (m.hasContent = !Fe.test(m.type)),
                                    (n = m.url.replace(Be, "")),
                                    m.hasContent
                                        ? m.data &&
                                          m.processData &&
                                          0 ===
                                              (m.contentType || "").indexOf(
                                                  "application/x-www-form-urlencoded"
                                              ) &&
                                          (m.data = m.data.replace(Re, "+"))
                                        : ((b = m.url.slice(n.length)),
                                          m.data &&
                                              (m.processData ||
                                                  "string" == typeof m.data) &&
                                              ((n +=
                                                  (Oe.test(n) ? "&" : "?") +
                                                  m.data),
                                              delete m.data),
                                          !1 === m.cache &&
                                              ((n = n.replace(He, "$1")),
                                              (b =
                                                  (Oe.test(n) ? "&" : "?") +
                                                  "_=" +
                                                  Se.guid++ +
                                                  b)),
                                          (m.url = n + b)),
                                    m.ifModified &&
                                        (C.lastModified[n] &&
                                            _.setRequestHeader(
                                                "If-Modified-Since",
                                                C.lastModified[n]
                                            ),
                                        C.etag[n] &&
                                            _.setRequestHeader(
                                                "If-None-Match",
                                                C.etag[n]
                                            )),
                                    ((m.data &&
                                        m.hasContent &&
                                        !1 !== m.contentType) ||
                                        e.contentType) &&
                                        _.setRequestHeader(
                                            "Content-Type",
                                            m.contentType
                                        ),
                                    _.setRequestHeader(
                                        "Accept",
                                        m.dataTypes[0] &&
                                            m.accepts[m.dataTypes[0]]
                                            ? m.accepts[m.dataTypes[0]] +
                                                  ("*" !== m.dataTypes[0]
                                                      ? ", " + Ue + "; q=0.01"
                                                      : "")
                                            : m.accepts["*"]
                                    ),
                                    m.headers))
                                        _.setRequestHeader(p, m.headers[p]);
                                    if (
                                        m.beforeSend &&
                                        (!1 === m.beforeSend.call(g, _, m) || d)
                                    )
                                        return _.abort();
                                    if (
                                        ((k = "abort"),
                                        h.add(m.complete),
                                        _.done(m.success),
                                        _.fail(m.error),
                                        (r = Ke(Ge, m, e, _)))
                                    ) {
                                        if (
                                            ((_.readyState = 1),
                                            c && f.trigger("ajaxSend", [_, m]),
                                            d)
                                        )
                                            return _;
                                        m.async &&
                                            m.timeout > 0 &&
                                            (s = o.setTimeout(function () {
                                                _.abort("timeout");
                                            }, m.timeout));
                                        try {
                                            (d = !1), r.send(w, E);
                                        } catch (t) {
                                            if (d) throw t;
                                            E(-1, t);
                                        }
                                    } else E(-1, "No Transport");
                                    function E(t, e, a, l) {
                                        var p,
                                            b,
                                            x,
                                            w,
                                            y,
                                            k = e;
                                        d ||
                                            ((d = !0),
                                            s && o.clearTimeout(s),
                                            (r = void 0),
                                            (i = l || ""),
                                            (_.readyState = t > 0 ? 4 : 0),
                                            (p =
                                                (t >= 200 && t < 300) ||
                                                304 === t),
                                            a &&
                                                (w = (function (t, e, r) {
                                                    for (
                                                        var o,
                                                            n,
                                                            i,
                                                            a,
                                                            s = t.contents,
                                                            l = t.dataTypes;
                                                        "*" === l[0];

                                                    )
                                                        l.shift(),
                                                            void 0 === o &&
                                                                (o =
                                                                    t.mimeType ||
                                                                    e.getResponseHeader(
                                                                        "Content-Type"
                                                                    ));
                                                    if (o)
                                                        for (n in s)
                                                            if (
                                                                s[n] &&
                                                                s[n].test(o)
                                                            ) {
                                                                l.unshift(n);
                                                                break;
                                                            }
                                                    if (l[0] in r) i = l[0];
                                                    else {
                                                        for (n in r) {
                                                            if (
                                                                !l[0] ||
                                                                t.converters[
                                                                    n +
                                                                        " " +
                                                                        l[0]
                                                                ]
                                                            ) {
                                                                i = n;
                                                                break;
                                                            }
                                                            a || (a = n);
                                                        }
                                                        i = i || a;
                                                    }
                                                    if (i)
                                                        return (
                                                            i !== l[0] &&
                                                                l.unshift(i),
                                                            r[i]
                                                        );
                                                })(m, _, a)),
                                            !p &&
                                                C.inArray(
                                                    "script",
                                                    m.dataTypes
                                                ) > -1 &&
                                                C.inArray("json", m.dataTypes) <
                                                    0 &&
                                                (m.converters["text script"] =
                                                    function () {}),
                                            (w = (function (t, e, r, o) {
                                                var n,
                                                    i,
                                                    a,
                                                    s,
                                                    l,
                                                    d = {},
                                                    c = t.dataTypes.slice();
                                                if (c[1])
                                                    for (a in t.converters)
                                                        d[a.toLowerCase()] =
                                                            t.converters[a];
                                                for (i = c.shift(); i; )
                                                    if (
                                                        (t.responseFields[i] &&
                                                            (r[
                                                                t.responseFields[
                                                                    i
                                                                ]
                                                            ] = e),
                                                        !l &&
                                                            o &&
                                                            t.dataFilter &&
                                                            (e = t.dataFilter(
                                                                e,
                                                                t.dataType
                                                            )),
                                                        (l = i),
                                                        (i = c.shift()))
                                                    )
                                                        if ("*" === i) i = l;
                                                        else if (
                                                            "*" !== l &&
                                                            l !== i
                                                        ) {
                                                            if (
                                                                !(a =
                                                                    d[
                                                                        l +
                                                                            " " +
                                                                            i
                                                                    ] ||
                                                                    d["* " + i])
                                                            )
                                                                for (n in d)
                                                                    if (
                                                                        (s =
                                                                            n.split(
                                                                                " "
                                                                            ))[1] ===
                                                                            i &&
                                                                        (a =
                                                                            d[
                                                                                l +
                                                                                    " " +
                                                                                    s[0]
                                                                            ] ||
                                                                            d[
                                                                                "* " +
                                                                                    s[0]
                                                                            ])
                                                                    ) {
                                                                        !0 === a
                                                                            ? (a =
                                                                                  d[
                                                                                      n
                                                                                  ])
                                                                            : !0 !==
                                                                                  d[
                                                                                      n
                                                                                  ] &&
                                                                              ((i =
                                                                                  s[0]),
                                                                              c.unshift(
                                                                                  s[1]
                                                                              ));
                                                                        break;
                                                                    }
                                                            if (!0 !== a)
                                                                if (
                                                                    a &&
                                                                    t.throws
                                                                )
                                                                    e = a(e);
                                                                else
                                                                    try {
                                                                        e =
                                                                            a(
                                                                                e
                                                                            );
                                                                    } catch (t) {
                                                                        return {
                                                                            state: "parsererror",
                                                                            error: a
                                                                                ? t
                                                                                : "No conversion from " +
                                                                                  l +
                                                                                  " to " +
                                                                                  i,
                                                                        };
                                                                    }
                                                        }
                                                return {
                                                    state: "success",
                                                    data: e,
                                                };
                                            })(m, w, _, p)),
                                            p
                                                ? (m.ifModified &&
                                                      ((y =
                                                          _.getResponseHeader(
                                                              "Last-Modified"
                                                          )) &&
                                                          (C.lastModified[n] =
                                                              y),
                                                      (y =
                                                          _.getResponseHeader(
                                                              "etag"
                                                          )) &&
                                                          (C.etag[n] = y)),
                                                  204 === t || "HEAD" === m.type
                                                      ? (k = "nocontent")
                                                      : 304 === t
                                                      ? (k = "notmodified")
                                                      : ((k = w.state),
                                                        (b = w.data),
                                                        (p = !(x = w.error))))
                                                : ((x = k),
                                                  (!t && k) ||
                                                      ((k = "error"),
                                                      t < 0 && (t = 0))),
                                            (_.status = t),
                                            (_.statusText = (e || k) + ""),
                                            p
                                                ? u.resolveWith(g, [b, k, _])
                                                : u.rejectWith(g, [_, k, x]),
                                            _.statusCode(v),
                                            (v = void 0),
                                            c &&
                                                f.trigger(
                                                    p
                                                        ? "ajaxSuccess"
                                                        : "ajaxError",
                                                    [_, m, p ? b : x]
                                                ),
                                            h.fireWith(g, [_, k]),
                                            c &&
                                                (f.trigger("ajaxComplete", [
                                                    _,
                                                    m,
                                                ]),
                                                --C.active ||
                                                    C.event.trigger(
                                                        "ajaxStop"
                                                    )));
                                    }
                                    return _;
                                },
                                getJSON: function (t, e, r) {
                                    return C.get(t, e, r, "json");
                                },
                                getScript: function (t, e) {
                                    return C.get(t, void 0, e, "script");
                                },
                            }),
                            C.each(["get", "post"], function (t, e) {
                                C[e] = function (t, r, o, n) {
                                    return (
                                        h(r) &&
                                            ((n = n || o),
                                            (o = r),
                                            (r = void 0)),
                                        C.ajax(
                                            C.extend(
                                                {
                                                    url: t,
                                                    type: e,
                                                    dataType: n,
                                                    data: r,
                                                    success: o,
                                                },
                                                C.isPlainObject(t) && t
                                            )
                                        )
                                    );
                                };
                            }),
                            C.ajaxPrefilter(function (t) {
                                var e;
                                for (e in t.headers)
                                    "content-type" === e.toLowerCase() &&
                                        (t.contentType = t.headers[e] || "");
                            }),
                            (C._evalUrl = function (t, e, r) {
                                return C.ajax({
                                    url: t,
                                    type: "GET",
                                    dataType: "script",
                                    cache: !0,
                                    async: !1,
                                    global: !1,
                                    converters: {
                                        "text script": function () {},
                                    },
                                    dataFilter: function (t) {
                                        C.globalEval(t, e, r);
                                    },
                                });
                            }),
                            C.fn.extend({
                                wrapAll: function (t) {
                                    var e;
                                    return (
                                        this[0] &&
                                            (h(t) && (t = t.call(this[0])),
                                            (e = C(t, this[0].ownerDocument)
                                                .eq(0)
                                                .clone(!0)),
                                            this[0].parentNode &&
                                                e.insertBefore(this[0]),
                                            e
                                                .map(function () {
                                                    for (
                                                        var t = this;
                                                        t.firstElementChild;

                                                    )
                                                        t = t.firstElementChild;
                                                    return t;
                                                })
                                                .append(this)),
                                        this
                                    );
                                },
                                wrapInner: function (t) {
                                    return h(t)
                                        ? this.each(function (e) {
                                              C(this).wrapInner(
                                                  t.call(this, e)
                                              );
                                          })
                                        : this.each(function () {
                                              var e = C(this),
                                                  r = e.contents();
                                              r.length
                                                  ? r.wrapAll(t)
                                                  : e.append(t);
                                          });
                                },
                                wrap: function (t) {
                                    var e = h(t);
                                    return this.each(function (r) {
                                        C(this).wrapAll(
                                            e ? t.call(this, r) : t
                                        );
                                    });
                                },
                                unwrap: function (t) {
                                    return (
                                        this.parent(t)
                                            .not("body")
                                            .each(function () {
                                                C(this).replaceWith(
                                                    this.childNodes
                                                );
                                            }),
                                        this
                                    );
                                },
                            }),
                            (C.expr.pseudos.hidden = function (t) {
                                return !C.expr.pseudos.visible(t);
                            }),
                            (C.expr.pseudos.visible = function (t) {
                                return !!(
                                    t.offsetWidth ||
                                    t.offsetHeight ||
                                    t.getClientRects().length
                                );
                            }),
                            (C.ajaxSettings.xhr = function () {
                                try {
                                    return new o.XMLHttpRequest();
                                } catch (t) {}
                            });
                        var Je = { 0: 200, 1223: 204 },
                            Ze = C.ajaxSettings.xhr();
                        (u.cors = !!Ze && "withCredentials" in Ze),
                            (u.ajax = Ze = !!Ze),
                            C.ajaxTransport(function (t) {
                                var e, r;
                                if (u.cors || (Ze && !t.crossDomain))
                                    return {
                                        send: function (n, i) {
                                            var a,
                                                s = t.xhr();
                                            if (
                                                (s.open(
                                                    t.type,
                                                    t.url,
                                                    t.async,
                                                    t.username,
                                                    t.password
                                                ),
                                                t.xhrFields)
                                            )
                                                for (a in t.xhrFields)
                                                    s[a] = t.xhrFields[a];
                                            for (a in (t.mimeType &&
                                                s.overrideMimeType &&
                                                s.overrideMimeType(t.mimeType),
                                            t.crossDomain ||
                                                n["X-Requested-With"] ||
                                                (n["X-Requested-With"] =
                                                    "XMLHttpRequest"),
                                            n))
                                                s.setRequestHeader(a, n[a]);
                                            (e = function (t) {
                                                return function () {
                                                    e &&
                                                        ((e =
                                                            r =
                                                            s.onload =
                                                            s.onerror =
                                                            s.onabort =
                                                            s.ontimeout =
                                                            s.onreadystatechange =
                                                                null),
                                                        "abort" === t
                                                            ? s.abort()
                                                            : "error" === t
                                                            ? "number" !=
                                                              typeof s.status
                                                                ? i(0, "error")
                                                                : i(
                                                                      s.status,
                                                                      s.statusText
                                                                  )
                                                            : i(
                                                                  Je[
                                                                      s.status
                                                                  ] || s.status,
                                                                  s.statusText,
                                                                  "text" !==
                                                                      (s.responseType ||
                                                                          "text") ||
                                                                      "string" !=
                                                                          typeof s.responseText
                                                                      ? {
                                                                            binary: s.response,
                                                                        }
                                                                      : {
                                                                            text: s.responseText,
                                                                        },
                                                                  s.getAllResponseHeaders()
                                                              ));
                                                };
                                            }),
                                                (s.onload = e()),
                                                (r =
                                                    s.onerror =
                                                    s.ontimeout =
                                                        e("error")),
                                                void 0 !== s.onabort
                                                    ? (s.onabort = r)
                                                    : (s.onreadystatechange =
                                                          function () {
                                                              4 ===
                                                                  s.readyState &&
                                                                  o.setTimeout(
                                                                      function () {
                                                                          e &&
                                                                              r();
                                                                      }
                                                                  );
                                                          }),
                                                (e = e("abort"));
                                            try {
                                                s.send(
                                                    (t.hasContent && t.data) ||
                                                        null
                                                );
                                            } catch (t) {
                                                if (e) throw t;
                                            }
                                        },
                                        abort: function () {
                                            e && e();
                                        },
                                    };
                            }),
                            C.ajaxPrefilter(function (t) {
                                t.crossDomain && (t.contents.script = !1);
                            }),
                            C.ajaxSetup({
                                accepts: {
                                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                                },
                                contents: { script: /\b(?:java|ecma)script\b/ },
                                converters: {
                                    "text script": function (t) {
                                        return C.globalEval(t), t;
                                    },
                                },
                            }),
                            C.ajaxPrefilter("script", function (t) {
                                void 0 === t.cache && (t.cache = !1),
                                    t.crossDomain && (t.type = "GET");
                            }),
                            C.ajaxTransport("script", function (t) {
                                var e, r;
                                if (t.crossDomain || t.scriptAttrs)
                                    return {
                                        send: function (o, n) {
                                            (e = C("<script>")
                                                .attr(t.scriptAttrs || {})
                                                .prop({
                                                    charset: t.scriptCharset,
                                                    src: t.url,
                                                })
                                                .on(
                                                    "load error",
                                                    (r = function (t) {
                                                        e.remove(),
                                                            (r = null),
                                                            t &&
                                                                n(
                                                                    "error" ===
                                                                        t.type
                                                                        ? 404
                                                                        : 200,
                                                                    t.type
                                                                );
                                                    })
                                                )),
                                                x.head.appendChild(e[0]);
                                        },
                                        abort: function () {
                                            r && r();
                                        },
                                    };
                            });
                        var tr,
                            er = [],
                            rr = /(=)\?(?=&|$)|\?\?/;
                        C.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function () {
                                var t = er.pop() || C.expando + "_" + Se.guid++;
                                return (this[t] = !0), t;
                            },
                        }),
                            C.ajaxPrefilter("json jsonp", function (t, e, r) {
                                var n,
                                    i,
                                    a,
                                    s =
                                        !1 !== t.jsonp &&
                                        (rr.test(t.url)
                                            ? "url"
                                            : "string" == typeof t.data &&
                                              0 ===
                                                  (t.contentType || "").indexOf(
                                                      "application/x-www-form-urlencoded"
                                                  ) &&
                                              rr.test(t.data) &&
                                              "data");
                                if (s || "jsonp" === t.dataTypes[0])
                                    return (
                                        (n = t.jsonpCallback =
                                            h(t.jsonpCallback)
                                                ? t.jsonpCallback()
                                                : t.jsonpCallback),
                                        s
                                            ? (t[s] = t[s].replace(
                                                  rr,
                                                  "$1" + n
                                              ))
                                            : !1 !== t.jsonp &&
                                              (t.url +=
                                                  (Oe.test(t.url) ? "&" : "?") +
                                                  t.jsonp +
                                                  "=" +
                                                  n),
                                        (t.converters["script json"] =
                                            function () {
                                                return (
                                                    a ||
                                                        C.error(
                                                            n +
                                                                " was not called"
                                                        ),
                                                    a[0]
                                                );
                                            }),
                                        (t.dataTypes[0] = "json"),
                                        (i = o[n]),
                                        (o[n] = function () {
                                            a = arguments;
                                        }),
                                        r.always(function () {
                                            void 0 === i
                                                ? C(o).removeProp(n)
                                                : (o[n] = i),
                                                t[n] &&
                                                    ((t.jsonpCallback =
                                                        e.jsonpCallback),
                                                    er.push(n)),
                                                a && h(i) && i(a[0]),
                                                (a = i = void 0);
                                        }),
                                        "script"
                                    );
                            }),
                            (u.createHTMLDocument =
                                (((tr =
                                    x.implementation.createHTMLDocument(
                                        ""
                                    ).body).innerHTML =
                                    "<form></form><form></form>"),
                                2 === tr.childNodes.length)),
                            (C.parseHTML = function (t, e, r) {
                                return "string" != typeof t
                                    ? []
                                    : ("boolean" == typeof e &&
                                          ((r = e), (e = !1)),
                                      e ||
                                          (u.createHTMLDocument
                                              ? (((o = (e =
                                                    x.implementation.createHTMLDocument(
                                                        ""
                                                    )).createElement(
                                                    "base"
                                                )).href = x.location.href),
                                                e.head.appendChild(o))
                                              : (e = x)),
                                      (i = !r && []),
                                      (n = B.exec(t))
                                          ? [e.createElement(n[1])]
                                          : ((n = Dt([t], e, i)),
                                            i && i.length && C(i).remove(),
                                            C.merge([], n.childNodes)));
                                var o, n, i;
                            }),
                            (C.fn.load = function (t, e, r) {
                                var o,
                                    n,
                                    i,
                                    a = this,
                                    s = t.indexOf(" ");
                                return (
                                    s > -1 &&
                                        ((o = Ce(t.slice(s))),
                                        (t = t.slice(0, s))),
                                    h(e)
                                        ? ((r = e), (e = void 0))
                                        : e &&
                                          "object" == typeof e &&
                                          (n = "POST"),
                                    a.length > 0 &&
                                        C.ajax({
                                            url: t,
                                            type: n || "GET",
                                            dataType: "html",
                                            data: e,
                                        })
                                            .done(function (t) {
                                                (i = arguments),
                                                    a.html(
                                                        o
                                                            ? C("<div>")
                                                                  .append(
                                                                      C.parseHTML(
                                                                          t
                                                                      )
                                                                  )
                                                                  .find(o)
                                                            : t
                                                    );
                                            })
                                            .always(
                                                r &&
                                                    function (t, e) {
                                                        a.each(function () {
                                                            r.apply(
                                                                this,
                                                                i || [
                                                                    t.responseText,
                                                                    e,
                                                                    t,
                                                                ]
                                                            );
                                                        });
                                                    }
                                            ),
                                    this
                                );
                            }),
                            (C.expr.pseudos.animated = function (t) {
                                return C.grep(C.timers, function (e) {
                                    return t === e.elem;
                                }).length;
                            }),
                            (C.offset = {
                                setOffset: function (t, e, r) {
                                    var o,
                                        n,
                                        i,
                                        a,
                                        s,
                                        l,
                                        d = C.css(t, "position"),
                                        c = C(t),
                                        p = {};
                                    "static" === d &&
                                        (t.style.position = "relative"),
                                        (s = c.offset()),
                                        (i = C.css(t, "top")),
                                        (l = C.css(t, "left")),
                                        ("absolute" === d || "fixed" === d) &&
                                        (i + l).indexOf("auto") > -1
                                            ? ((a = (o = c.position()).top),
                                              (n = o.left))
                                            : ((a = parseFloat(i) || 0),
                                              (n = parseFloat(l) || 0)),
                                        h(e) &&
                                            (e = e.call(t, r, C.extend({}, s))),
                                        null != e.top &&
                                            (p.top = e.top - s.top + a),
                                        null != e.left &&
                                            (p.left = e.left - s.left + n),
                                        "using" in e
                                            ? e.using.call(t, p)
                                            : c.css(p);
                                },
                            }),
                            C.fn.extend({
                                offset: function (t) {
                                    if (arguments.length)
                                        return void 0 === t
                                            ? this
                                            : this.each(function (e) {
                                                  C.offset.setOffset(
                                                      this,
                                                      t,
                                                      e
                                                  );
                                              });
                                    var e,
                                        r,
                                        o = this[0];
                                    return o
                                        ? o.getClientRects().length
                                            ? ((e = o.getBoundingClientRect()),
                                              (r = o.ownerDocument.defaultView),
                                              {
                                                  top: e.top + r.pageYOffset,
                                                  left: e.left + r.pageXOffset,
                                              })
                                            : { top: 0, left: 0 }
                                        : void 0;
                                },
                                position: function () {
                                    if (this[0]) {
                                        var t,
                                            e,
                                            r,
                                            o = this[0],
                                            n = { top: 0, left: 0 };
                                        if ("fixed" === C.css(o, "position"))
                                            e = o.getBoundingClientRect();
                                        else {
                                            for (
                                                e = this.offset(),
                                                    r = o.ownerDocument,
                                                    t =
                                                        o.offsetParent ||
                                                        r.documentElement;
                                                t &&
                                                (t === r.body ||
                                                    t === r.documentElement) &&
                                                "static" ===
                                                    C.css(t, "position");

                                            )
                                                t = t.parentNode;
                                            t &&
                                                t !== o &&
                                                1 === t.nodeType &&
                                                (((n = C(t).offset()).top +=
                                                    C.css(
                                                        t,
                                                        "borderTopWidth",
                                                        !0
                                                    )),
                                                (n.left += C.css(
                                                    t,
                                                    "borderLeftWidth",
                                                    !0
                                                )));
                                        }
                                        return {
                                            top:
                                                e.top -
                                                n.top -
                                                C.css(o, "marginTop", !0),
                                            left:
                                                e.left -
                                                n.left -
                                                C.css(o, "marginLeft", !0),
                                        };
                                    }
                                },
                                offsetParent: function () {
                                    return this.map(function () {
                                        for (
                                            var t = this.offsetParent;
                                            t &&
                                            "static" === C.css(t, "position");

                                        )
                                            t = t.offsetParent;
                                        return t || ft;
                                    });
                                },
                            }),
                            C.each(
                                {
                                    scrollLeft: "pageXOffset",
                                    scrollTop: "pageYOffset",
                                },
                                function (t, e) {
                                    var r = "pageYOffset" === e;
                                    C.fn[t] = function (o) {
                                        return tt(
                                            this,
                                            function (t, o, n) {
                                                var i;
                                                if (
                                                    (v(t)
                                                        ? (i = t)
                                                        : 9 === t.nodeType &&
                                                          (i = t.defaultView),
                                                    void 0 === n)
                                                )
                                                    return i ? i[e] : t[o];
                                                i
                                                    ? i.scrollTo(
                                                          r ? i.pageXOffset : n,
                                                          r ? n : i.pageYOffset
                                                      )
                                                    : (t[o] = n);
                                            },
                                            t,
                                            o,
                                            arguments.length
                                        );
                                    };
                                }
                            ),
                            C.each(["top", "left"], function (t, e) {
                                C.cssHooks[e] = te(
                                    u.pixelPosition,
                                    function (t, r) {
                                        if (r)
                                            return (
                                                (r = Zt(t, e)),
                                                Vt.test(r)
                                                    ? C(t).position()[e] + "px"
                                                    : r
                                            );
                                    }
                                );
                            }),
                            C.each(
                                { Height: "height", Width: "width" },
                                function (t, e) {
                                    C.each(
                                        {
                                            padding: "inner" + t,
                                            content: e,
                                            "": "outer" + t,
                                        },
                                        function (r, o) {
                                            C.fn[o] = function (n, i) {
                                                var a =
                                                        arguments.length &&
                                                        (r ||
                                                            "boolean" !=
                                                                typeof n),
                                                    s =
                                                        r ||
                                                        (!0 === n || !0 === i
                                                            ? "margin"
                                                            : "border");
                                                return tt(
                                                    this,
                                                    function (e, r, n) {
                                                        var i;
                                                        return v(e)
                                                            ? 0 ===
                                                              o.indexOf("outer")
                                                                ? e["inner" + t]
                                                                : e.document
                                                                      .documentElement[
                                                                      "client" +
                                                                          t
                                                                  ]
                                                            : 9 === e.nodeType
                                                            ? ((i =
                                                                  e.documentElement),
                                                              Math.max(
                                                                  e.body[
                                                                      "scroll" +
                                                                          t
                                                                  ],
                                                                  i[
                                                                      "scroll" +
                                                                          t
                                                                  ],
                                                                  e.body[
                                                                      "offset" +
                                                                          t
                                                                  ],
                                                                  i[
                                                                      "offset" +
                                                                          t
                                                                  ],
                                                                  i[
                                                                      "client" +
                                                                          t
                                                                  ]
                                                              ))
                                                            : void 0 === n
                                                            ? C.css(e, r, s)
                                                            : C.style(
                                                                  e,
                                                                  r,
                                                                  n,
                                                                  s
                                                              );
                                                    },
                                                    e,
                                                    a ? n : void 0,
                                                    a
                                                );
                                            };
                                        }
                                    );
                                }
                            ),
                            C.each(
                                [
                                    "ajaxStart",
                                    "ajaxStop",
                                    "ajaxComplete",
                                    "ajaxError",
                                    "ajaxSuccess",
                                    "ajaxSend",
                                ],
                                function (t, e) {
                                    C.fn[e] = function (t) {
                                        return this.on(e, t);
                                    };
                                }
                            ),
                            C.fn.extend({
                                bind: function (t, e, r) {
                                    return this.on(t, null, e, r);
                                },
                                unbind: function (t, e) {
                                    return this.off(t, null, e);
                                },
                                delegate: function (t, e, r, o) {
                                    return this.on(e, t, r, o);
                                },
                                undelegate: function (t, e, r) {
                                    return 1 === arguments.length
                                        ? this.off(t, "**")
                                        : this.off(e, t || "**", r);
                                },
                                hover: function (t, e) {
                                    return this.on("mouseenter", t).on(
                                        "mouseleave",
                                        e || t
                                    );
                                },
                            }),
                            C.each(
                                "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                                    " "
                                ),
                                function (t, e) {
                                    C.fn[e] = function (t, r) {
                                        return arguments.length > 0
                                            ? this.on(e, null, t, r)
                                            : this.trigger(e);
                                    };
                                }
                            );
                        var or =
                            /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                        (C.proxy = function (t, e) {
                            var r, o, n;
                            if (
                                ("string" == typeof e &&
                                    ((r = t[e]), (e = t), (t = r)),
                                h(t))
                            )
                                return (
                                    (o = s.call(arguments, 2)),
                                    (n = function () {
                                        return t.apply(
                                            e || this,
                                            o.concat(s.call(arguments))
                                        );
                                    }),
                                    (n.guid = t.guid = t.guid || C.guid++),
                                    n
                                );
                        }),
                            (C.holdReady = function (t) {
                                t ? C.readyWait++ : C.ready(!0);
                            }),
                            (C.isArray = Array.isArray),
                            (C.parseJSON = JSON.parse),
                            (C.nodeName = A),
                            (C.isFunction = h),
                            (C.isWindow = v),
                            (C.camelCase = nt),
                            (C.type = k),
                            (C.now = Date.now),
                            (C.isNumeric = function (t) {
                                var e = C.type(t);
                                return (
                                    ("number" === e || "string" === e) &&
                                    !isNaN(t - parseFloat(t))
                                );
                            }),
                            (C.trim = function (t) {
                                return null == t
                                    ? ""
                                    : (t + "").replace(or, "$1");
                            }),
                            void 0 ===
                                (r = function () {
                                    return C;
                                }.apply(e, [])) || (t.exports = r);
                        var nr = o.jQuery,
                            ir = o.$;
                        return (
                            (C.noConflict = function (t) {
                                return (
                                    o.$ === C && (o.$ = ir),
                                    t && o.jQuery === C && (o.jQuery = nr),
                                    C
                                );
                            }),
                            void 0 === n && (o.jQuery = o.$ = C),
                            C
                        );
                    }
                );
            },
            650: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => s });
                var o = r(379),
                    n = r.n(o),
                    i = r(346),
                    a = { insert: "head", singleton: !1 };
                n()(i.Z, a);
                const s = i.Z.locals || {};
            },
            379: (t, e, r) => {
                "use strict";
                var o,
                    n = function () {
                        return (
                            void 0 === o &&
                                (o = Boolean(
                                    window &&
                                        document &&
                                        document.all &&
                                        !window.atob
                                )),
                            o
                        );
                    },
                    i = (function () {
                        var t = {};
                        return function (e) {
                            if (void 0 === t[e]) {
                                var r = document.querySelector(e);
                                if (
                                    window.HTMLIFrameElement &&
                                    r instanceof window.HTMLIFrameElement
                                )
                                    try {
                                        r = r.contentDocument.head;
                                    } catch (t) {
                                        r = null;
                                    }
                                t[e] = r;
                            }
                            return t[e];
                        };
                    })(),
                    a = [];
                function s(t) {
                    for (var e = -1, r = 0; r < a.length; r++)
                        if (a[r].identifier === t) {
                            e = r;
                            break;
                        }
                    return e;
                }
                function l(t, e) {
                    for (var r = {}, o = [], n = 0; n < t.length; n++) {
                        var i = t[n],
                            l = e.base ? i[0] + e.base : i[0],
                            d = r[l] || 0,
                            c = "".concat(l, " ").concat(d);
                        r[l] = d + 1;
                        var p = s(c),
                            b = { css: i[1], media: i[2], sourceMap: i[3] };
                        -1 !== p
                            ? (a[p].references++, a[p].updater(b))
                            : a.push({
                                  identifier: c,
                                  updater: u(b, e),
                                  references: 1,
                              }),
                            o.push(c);
                    }
                    return o;
                }
                function d(t) {
                    var e = document.createElement("style"),
                        o = t.attributes || {};
                    if (void 0 === o.nonce) {
                        var n = r.nc;
                        n && (o.nonce = n);
                    }
                    if (
                        (Object.keys(o).forEach(function (t) {
                            e.setAttribute(t, o[t]);
                        }),
                        "function" == typeof t.insert)
                    )
                        t.insert(e);
                    else {
                        var a = i(t.insert || "head");
                        if (!a)
                            throw new Error(
                                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                            );
                        a.appendChild(e);
                    }
                    return e;
                }
                var c,
                    p =
                        ((c = []),
                        function (t, e) {
                            return (c[t] = e), c.filter(Boolean).join("\n");
                        });
                function b(t, e, r, o) {
                    var n = r
                        ? ""
                        : o.media
                        ? "@media ".concat(o.media, " {").concat(o.css, "}")
                        : o.css;
                    if (t.styleSheet) t.styleSheet.cssText = p(e, n);
                    else {
                        var i = document.createTextNode(n),
                            a = t.childNodes;
                        a[e] && t.removeChild(a[e]),
                            a.length
                                ? t.insertBefore(i, a[e])
                                : t.appendChild(i);
                    }
                }
                function m(t, e, r) {
                    var o = r.css,
                        n = r.media,
                        i = r.sourceMap;
                    if (
                        (n
                            ? t.setAttribute("media", n)
                            : t.removeAttribute("media"),
                        i &&
                            "undefined" != typeof btoa &&
                            (o +=
                                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(i)
                                            )
                                        )
                                    ),
                                    " */"
                                )),
                        t.styleSheet)
                    )
                        t.styleSheet.cssText = o;
                    else {
                        for (; t.firstChild; ) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(o));
                    }
                }
                var g = null,
                    f = 0;
                function u(t, e) {
                    var r, o, n;
                    if (e.singleton) {
                        var i = f++;
                        (r = g || (g = d(e))),
                            (o = b.bind(null, r, i, !1)),
                            (n = b.bind(null, r, i, !0));
                    } else
                        (r = d(e)),
                            (o = m.bind(null, r, e)),
                            (n = function () {
                                !(function (t) {
                                    if (null === t.parentNode) return !1;
                                    t.parentNode.removeChild(t);
                                })(r);
                            });
                    return (
                        o(t),
                        function (e) {
                            if (e) {
                                if (
                                    e.css === t.css &&
                                    e.media === t.media &&
                                    e.sourceMap === t.sourceMap
                                )
                                    return;
                                o((t = e));
                            } else n();
                        }
                    );
                }
                t.exports = function (t, e) {
                    (e = e || {}).singleton ||
                        "boolean" == typeof e.singleton ||
                        (e.singleton = n());
                    var r = l((t = t || []), e);
                    return function (t) {
                        if (
                            ((t = t || []),
                            "[object Array]" ===
                                Object.prototype.toString.call(t))
                        ) {
                            for (var o = 0; o < r.length; o++) {
                                var n = s(r[o]);
                                a[n].references--;
                            }
                            for (var i = l(t, e), d = 0; d < r.length; d++) {
                                var c = s(r[d]);
                                0 === a[c].references &&
                                    (a[c].updater(), a.splice(c, 1));
                            }
                            r = i;
                        }
                    };
                };
            },
        },
        e = {};
    function r(o) {
        var n = e[o];
        if (void 0 !== n) return n.exports;
        var i = (e[o] = { id: o, exports: {} });
        return t[o].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, { a: e }), e;
    }),
        (r.d = (t, e) => {
            for (var o in e)
                r.o(e, o) &&
                    !r.o(t, o) &&
                    Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
        }),
        (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (r.r = (t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (r.nc = void 0),
        r(577),
        r(650);
})();
