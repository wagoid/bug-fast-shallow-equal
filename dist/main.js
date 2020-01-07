!(function(e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 4));
})([
  function(e, t, r) {
    "use strict";
    e.exports = r(2);
  },
  function(e, t) {
    var r = Object.keys;
    t.equal = function(e, t) {
      if (e === t) return !0;
      if (!(e instanceof Object && t instanceof Object)) return !1;
      var n = r(e),
        o = n.length;
      for (let e = 0; e < o; e++) if (!(n[e] in t)) return !1;
      for (let r = 0; r < o; r++) if (e[n[r]] !== t[n[r]]) return !1;
      return o === r(t).length;
    };
  },
  function(e, t, r) {
    "use strict";
    /** @license React v16.12.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var n = r(3),
      o = "function" == typeof Symbol && Symbol.for,
      u = o ? Symbol.for("react.element") : 60103,
      c = o ? Symbol.for("react.portal") : 60106,
      f = o ? Symbol.for("react.fragment") : 60107,
      i = o ? Symbol.for("react.strict_mode") : 60108,
      l = o ? Symbol.for("react.profiler") : 60114,
      a = o ? Symbol.for("react.provider") : 60109,
      s = o ? Symbol.for("react.context") : 60110,
      p = o ? Symbol.for("react.forward_ref") : 60112,
      y = o ? Symbol.for("react.suspense") : 60113;
    o && Symbol.for("react.suspense_list");
    var b = o ? Symbol.for("react.memo") : 60115,
      d = o ? Symbol.for("react.lazy") : 60116;
    o && Symbol.for("react.fundamental"),
      o && Symbol.for("react.responder"),
      o && Symbol.for("react.scope");
    var m = "function" == typeof Symbol && Symbol.iterator;
    function v(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var h = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      g = {};
    function j(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = r || h);
    }
    function S() {}
    function O(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = r || h);
    }
    (j.prototype.isReactComponent = {}),
      (j.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(v(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (j.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (S.prototype = j.prototype);
    var _ = (O.prototype = new S());
    (_.constructor = O), n(_, j.prototype), (_.isPureReactComponent = !0);
    var w = { current: null },
      k = { current: null },
      x = Object.prototype.hasOwnProperty,
      E = { key: !0, ref: !0, __self: !0, __source: !0 };
    function P(e, t, r) {
      var n,
        o = {},
        c = null,
        f = null;
      if (null != t)
        for (n in (void 0 !== t.ref && (f = t.ref),
        void 0 !== t.key && (c = "" + t.key),
        t))
          x.call(t, n) && !E.hasOwnProperty(n) && (o[n] = t[n]);
      var i = arguments.length - 2;
      if (1 === i) o.children = r;
      else if (1 < i) {
        for (var l = Array(i), a = 0; a < i; a++) l[a] = arguments[a + 2];
        o.children = l;
      }
      if (e && e.defaultProps)
        for (n in (i = e.defaultProps)) void 0 === o[n] && (o[n] = i[n]);
      return {
        $$typeof: u,
        type: e,
        key: c,
        ref: f,
        props: o,
        _owner: k.current
      };
    }
    function C(e) {
      return "object" == typeof e && null !== e && e.$$typeof === u;
    }
    var R = /\/+/g,
      $ = [];
    function M(e, t, r, n) {
      if ($.length) {
        var o = $.pop();
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = r),
          (o.context = n),
          (o.count = 0),
          o
        );
      }
      return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
    }
    function A(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > $.length && $.push(e);
    }
    function q(e, t, r) {
      return null == e
        ? 0
        : (function e(t, r, n, o) {
            var f = typeof t;
            ("undefined" !== f && "boolean" !== f) || (t = null);
            var i = !1;
            if (null === t) i = !0;
            else
              switch (f) {
                case "string":
                case "number":
                  i = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case u:
                    case c:
                      i = !0;
                  }
              }
            if (i) return n(o, t, "" === r ? "." + I(t, 0) : r), 1;
            if (((i = 0), (r = "" === r ? "." : r + ":"), Array.isArray(t)))
              for (var l = 0; l < t.length; l++) {
                var a = r + I((f = t[l]), l);
                i += e(f, a, n, o);
              }
            else if (
              (null === t || "object" != typeof t
                ? (a = null)
                : (a =
                    "function" == typeof (a = (m && t[m]) || t["@@iterator"])
                      ? a
                      : null),
              "function" == typeof a)
            )
              for (t = a.call(t), l = 0; !(f = t.next()).done; )
                i += e((f = f.value), (a = r + I(f, l++)), n, o);
            else if ("object" === f)
              throw ((n = "" + t),
              Error(
                v(
                  31,
                  "[object Object]" === n
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : n,
                  ""
                )
              ));
            return i;
          })(e, "", t, r);
    }
    function I(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function(e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function T(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function U(e, t, r) {
      var n = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? F(e, n, r, function(e) {
              return e;
            })
          : null != e &&
            (C(e) &&
              (e = (function(e, t) {
                return {
                  $$typeof: u,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner
                };
              })(
                e,
                o +
                  (!e.key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(R, "$&/") + "/") +
                  r
              )),
            n.push(e));
    }
    function F(e, t, r, n, o) {
      var u = "";
      null != r && (u = ("" + r).replace(R, "$&/") + "/"),
        q(e, U, (t = M(t, u, n, o))),
        A(t);
    }
    function L() {
      var e = w.current;
      if (null === e) throw Error(v(321));
      return e;
    }
    var N = {
        Children: {
          map: function(e, t, r) {
            if (null == e) return e;
            var n = [];
            return F(e, n, null, t, r), n;
          },
          forEach: function(e, t, r) {
            if (null == e) return e;
            q(e, T, (t = M(null, null, t, r))), A(t);
          },
          count: function(e) {
            return q(
              e,
              function() {
                return null;
              },
              null
            );
          },
          toArray: function(e) {
            var t = [];
            return (
              F(e, t, null, function(e) {
                return e;
              }),
              t
            );
          },
          only: function(e) {
            if (!C(e)) throw Error(v(143));
            return e;
          }
        },
        createRef: function() {
          return { current: null };
        },
        Component: j,
        PureComponent: O,
        createContext: function(e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: s,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            }).Provider = { $$typeof: a, _context: e }),
            (e.Consumer = e)
          );
        },
        forwardRef: function(e) {
          return { $$typeof: p, render: e };
        },
        lazy: function(e) {
          return { $$typeof: d, _ctor: e, _status: -1, _result: null };
        },
        memo: function(e, t) {
          return { $$typeof: b, type: e, compare: void 0 === t ? null : t };
        },
        useCallback: function(e, t) {
          return L().useCallback(e, t);
        },
        useContext: function(e, t) {
          return L().useContext(e, t);
        },
        useEffect: function(e, t) {
          return L().useEffect(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return L().useImperativeHandle(e, t, r);
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
          return L().useLayoutEffect(e, t);
        },
        useMemo: function(e, t) {
          return L().useMemo(e, t);
        },
        useReducer: function(e, t, r) {
          return L().useReducer(e, t, r);
        },
        useRef: function(e) {
          return L().useRef(e);
        },
        useState: function(e) {
          return L().useState(e);
        },
        Fragment: f,
        Profiler: l,
        StrictMode: i,
        Suspense: y,
        createElement: P,
        cloneElement: function(e, t, r) {
          if (null == e) throw Error(v(267, e));
          var o = n({}, e.props),
            c = e.key,
            f = e.ref,
            i = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((f = t.ref), (i = k.current)),
              void 0 !== t.key && (c = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps;
            for (a in t)
              x.call(t, a) &&
                !E.hasOwnProperty(a) &&
                (o[a] = void 0 === t[a] && void 0 !== l ? l[a] : t[a]);
          }
          var a = arguments.length - 2;
          if (1 === a) o.children = r;
          else if (1 < a) {
            l = Array(a);
            for (var s = 0; s < a; s++) l[s] = arguments[s + 2];
            o.children = l;
          }
          return {
            $$typeof: u,
            type: e.type,
            key: c,
            ref: f,
            props: o,
            _owner: i
          };
        },
        createFactory: function(e) {
          var t = P.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: C,
        version: "16.12.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: w,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: k,
          IsSomeRendererActing: { current: !1 },
          assign: n
        }
      },
      V = { default: N },
      D = (V && N) || V;
    e.exports = D.default || D;
  },
  function(e, t, r) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n =
        Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable;
    function c(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, r = 0; r < 10; r++)
          t["_" + String.fromCharCode(r)] = r;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function(e) {
            n[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (var r, f, i = c(e), l = 1; l < arguments.length; l++) {
            for (var a in (r = Object(arguments[l])))
              o.call(r, a) && (i[a] = r[a]);
            if (n) {
              f = n(r);
              for (var s = 0; s < f.length; s++)
                u.call(r, f[s]) && (i[f[s]] = r[f[s]]);
            }
          }
          return i;
        };
  },
  function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r(0),
      o = function(e) {
        return ++e % 1e6;
      },
      u = function() {
        var e = Object(n.useState)(0)[1];
        return Object(n.useCallback)(function() {
          return e(o);
        }, []);
      };
    function c(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function f(e, t, r) {
      void 0 === e && (e = 0),
        void 0 === t && (t = null),
        void 0 === r && (r = null);
      var o = c(e);
      "number" != typeof o &&
        console.error("initialValue has to be a number, got " + typeof e),
        "number" == typeof r
          ? (o = Math.max(o, r))
          : null !== r &&
            console.error("min has to be a number, got " + typeof r),
        "number" == typeof t
          ? (o = Math.min(o, t))
          : null !== t &&
            console.error("max has to be a number, got " + typeof t);
      var f,
        i,
        l,
        a =
          ((f = o),
          (i = Object(n.useRef)(c(f))),
          (l = u()),
          Object(n.useMemo)(function() {
            return [
              function() {
                return i.current;
              },
              function(e) {
                (i.current = c(e, i.current)), l();
              }
            ];
          }, [])),
        s = a[0],
        p = a[1];
      return [
        s(),
        Object(n.useMemo)(
          function() {
            var e = function(e) {
              var n = s(),
                o = c(e, n);
              n !== o &&
                ("number" == typeof r && (o = Math.max(o, r)),
                "number" == typeof t && (o = Math.min(o, t)),
                n !== o && p(o));
            };
            return {
              get: s,
              set: e,
              inc: function(t) {
                void 0 === t && (t = 1);
                var r = c(t, s());
                "number" != typeof r &&
                  console.error(
                    "delta has to be a number or function returning a number, got " +
                      typeof r
                  ),
                  e(function(e) {
                    return e + r;
                  });
              },
              dec: function(t) {
                void 0 === t && (t = 1);
                var r = c(t, s());
                "number" != typeof r &&
                  console.error(
                    "delta has to be a number or function returning a number, got " +
                      typeof r
                  ),
                  e(function(e) {
                    return e - r;
                  });
              },
              reset: function(t) {
                void 0 === t && (t = o);
                var r = c(t, s());
                "number" != typeof r &&
                  console.error(
                    "value has to be a number or function returning a number, got " +
                      typeof r
                  ),
                  (o = r),
                  e(r);
              }
            };
          },
          [o, r, t]
        )
      ];
    }
    var i = r(1),
      l = function(e, t, r) {
        var o = Object(n.useRef)(void 0);
        (o.current && r(t, o.current)) || (o.current = t),
          Object(n.useEffect)(e, o.current);
      },
      a = function(e, t) {
        return e.every(function(e, r) {
          return Object(i.equal)(e, t[r]);
        });
      },
      s = function(e, t) {
        l(e, t, a);
      };
    function p(e, t) {
      return (
        (function(e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function(e, t) {
          if (
            !(
              Symbol.iterator in Object(e) ||
              "[object Arguments]" === Object.prototype.toString.call(e)
            )
          )
            return;
          var r = [],
            n = !0,
            o = !1,
            u = void 0;
          try {
            for (
              var c, f = e[Symbol.iterator]();
              !(n = (c = f.next()).done) &&
              (r.push(c.value), !t || r.length !== t);
              n = !0
            );
          } catch (e) {
            (o = !0), (u = e);
          } finally {
            try {
              n || null == f.return || f.return();
            } finally {
              if (o) throw u;
            }
          }
          return r;
        })(e, t) ||
        (function() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        })()
      );
    }
    t.default = function() {
      var e = p(f(0), 2),
        t = e[0],
        r = e[1].inc,
        n = { step: 2 };
      return (
        s(
          function() {
            r(n.step);
          },
          [n]
        ),
        React.createElement(
          "div",
          null,
          React.createElement("p", null, "useShallowCompareEffect: ", t)
        )
      );
    };
  }
]);
