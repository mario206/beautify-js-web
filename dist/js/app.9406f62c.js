(function(e) {
  function t(t) {
    for (
      var r, s, i = t[0], c = t[1], u = t[2], d = 0, f = [];
      d < i.length;
      d++
    )
      (s = i[d]), o[s] && f.push(o[s][0]), (o[s] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    l && l(t);
    while (f.length) f.shift()();
    return a.push.apply(a, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== o[c] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    a = [];
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = r),
    (s.d = function(e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function(e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/beautify-js-web/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = i.push.bind(i);
  (i.push = t), (i = i.slice());
  for (var u = 0; u < i.length; u++) t(i[u]);
  var l = c;
  a.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "430b": function(e, t) {},
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("cadf"), n("551c"), n("f751"), n("097d"), n("5abe");
    var r = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("main-area");
      },
      o = [],
      a = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          e._m(0),
          n("div", { staticClass: "container main", attrs: { id: "app" } }, [
            n("div", { staticClass: "columns is-centered" }, [
              n(
                "div",
                { staticClass: "column is-half" },
                [
                  n("original-area", {
                    attrs: { text: e.text, selected: e.selected, mode: e.mode },
                    on: {
                      textChange: e.onTextChange,
                      selectedChange: e.onSelectedChange
                    }
                  }),
                  n(
                    "button",
                    {
                      staticClass: "button is-text",
                      on: { click: e.loadDemo }
                    },
                    [e._v("Reset")]
                  )
                ],
                1
              ),
              n(
                "div",
                { staticClass: "column is-half" },
                [
                  n("quiz-area", {
                    attrs: { text: e.text, selected: e.selected, mode: e.mode },
                    on: { modeChange: e.onModeChange }
                  })
                ],
                1
              )
            ])
          ])
        ]);
      },
      s = [
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("section", { staticClass: "hero has-text-centered" }, [
            n("div", { staticClass: "hero-body" }, [
              n("div", { staticClass: "container" }, [
                n("h1", { staticClass: "title" }, [e._v("beautify-js")]),
                n("h2", { staticClass: "subtitle" })
              ])
            ])
          ]);
        }
      ],
      i = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "b-field",
              { attrs: { "label-for": "original", label: "SourceCode" } },
              [
                "selection" === e.mode
                  ? n(
                      "div",
                      { staticClass: "text__selection has-text-left" },
                      e._l(
                        e.text.split("\n").map(function(e) {
                          return e.split(" ");
                        }),
                        function(t, r) {
                          return n(
                            "p",
                            { key: r },
                            e._l(t, function(t, o) {
                              return n(
                                "span",
                                {
                                  key: o,
                                  staticClass: "is-unselectable",
                                  on: {
                                    click: function(n) {
                                      return e.select(r, o, t);
                                    }
                                  }
                                },
                                [
                                  e._v(e._s(" ") + "\n          "),
                                  n("span", {
                                    class: [
                                      "text__word",
                                      e.currentlySelected(r, o, t)
                                        ? "text__word--selected"
                                        : ""
                                    ],
                                    domProps: { textContent: e._s(t) }
                                  }),
                                  e._v(e._s(" ") + "\n        ")
                                ]
                              );
                            }),
                            0
                          );
                        }
                      ),
                      0
                    )
                  : n("b-input", {
                      attrs: {
                        id: "original",
                        rows: "10",
                        type: "textarea",
                        value: e.text
                      },
                      on: { input: e.emitTextChange }
                    })
              ],
              1
            ),
            n("div", { staticClass: "buttons has-addons is-centered" }, [
              n("button", { staticClass: "button", on: { click: e.clear } }, [
                e._v("Clear")
              ]),
              n(
                "button",
                {
                  staticClass: "button is-warning",
                  attrs: { disabled: e.pasteDisabled },
                  on: {
                    click: function(t) {
                      return e.paste();
                    }
                  }
                },
                [e._v("\n      Paste\n    ")]
              )
            ])
          ],
          1
        );
      },
      c = [],
      u = (n("20d6"), n("75fc")),
      l = (n("430b"),
      {
        name: "OriginalArea",
        props: {
          mode: { type: String, default: "" },
          selected: {
            type: Array,
            default: function() {
              return [];
            }
          },
          text: { type: String, default: "" }
        },
        data: function() {
          return { pasteDisabled: !1 };
        },
        methods: {
          emitTextChange: function(e) {
            this.$emit("textChange", e);
          },
          emitSelectedChange: function(e) {
            this.$emit("selectedChange", e);
          },
          select: function(e, t, n) {
            var r = Object(u["a"])(this.selected),
              o = r.findIndex(function(e) {
                return e.word === n;
              });
            -1 !== o
              ? r.splice(o, 1)
              : r.push({ sentenceIndex: e, wordIndex: t, word: n }),
              this.emitSelectedChange(r);
          },
          currentlySelected: function(e, t, n) {
            return (
              this.selected.length > 0 &&
              -1 !==
                this.selected.findIndex(function(r) {
                  return (
                    r.sentenceIndex === e && r.wordIndex === t && r.word === n
                  );
                })
            );
          },
          clear: function() {
            this.$emit("selectedChange", []), this.$emit("textChange", "");
          },
          paste: function() {
            var e = this;
            navigator.permissions
              .query({ name: "clipboard-read" })
              .then(function(t) {
                ("granted" != t.state && "prompt" != t.state) ||
                  navigator.clipboard.readText().then(function(t) {
                    e.emitTextChange(t.trim()), e.emitSelectedChange([]);
                  });
              })
              .catch(function() {
                (e.pasteDisabled = !0),
                  e.$toast.open({
                    message: "Your browser doesn't support paste button!",
                    type: "is-warning",
                    position: "is-bottom"
                  });
              });
          }
        }
      }),
      d = l,
      f = n("2877"),
      p = Object(f["a"])(d, i, c, !1, null, "48f5575d", null),
      h = p.exports,
      m = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          [
            n(
              "b-field",
              { attrs: { "label-for": "quiz", label: "Transformed" } },
              [
                n("b-input", {
                  ref: "quiz",
                  attrs: {
                    id: "quiz",
                    rows: "10",
                    type: "textarea",
                    value: e.transform
                  }
                })
              ],
              1
            ),
            n("div", { staticClass: "buttons has-addons is-centered" }, [
              n(
                "button",
                {
                  staticClass: "button is-success",
                  attrs: { disabled: !e.transform },
                  on: { click: e.copy }
                },
                [e._v("\n      Copy\n    ")]
              )
            ])
          ],
          1
        );
      },
      b = [],
      g = (n("a481"), n("ac6a"), n("3b2b"), n("386d"), n("28a5"), n("2ef0")),
      x = n("a318"),
      v = n.n(x),
      w = n("d0ea"),
      C = n.n(w),
      y = {
        name: "QuizArea",
        props: {
          mode: { type: String, default: "" },
          selected: {
            type: Array,
            default: function() {
              return [];
            }
          },
          text: { type: String, default: "" }
        },
        data: function() {
          return { recompute: null };
        },
        computed: {
          radio: {
            set: function(e) {
              this.$emit("modeChange", e);
            },
            get: function() {
              return this.mode;
            }
          },
          transform: function() {
            if ((this.recompute, this.text)) {
              var e = { code: this.text, filename: "" };
              return C.a.transformCode(e), 0 != e.errCode ? e.errStr : e.result;
            }
          }
        },
        methods: {
          linesMode: function(e) {
            return {
              sentences: Object(g["shuffle"])(e),
              words: Object(g["shuffle"])(
                e.map(function(e, t) {
                  return "".concat(t + 1);
                })
              )
            };
          },
          startMode: function(e) {
            var t = this,
              n = e.map(function(e) {
                return t.clean(e.split(" ")[0]);
              });
            return (
              (e = e.map(function(e, r) {
                var o = e.indexOf(n[r]);
                return t.replaceWord(e, o, o + n[r].length);
              })),
              { sentences: e, words: Object(g["shuffle"])(n) }
            );
          },
          endMode: function(e) {
            var t = this,
              n = e.map(function(e) {
                return t.clean(e.split(" ").pop());
              });
            return (
              (e = e.map(function(e, r) {
                var o = e.lastIndexOf(n[r]);
                return t.replaceWord(e, o, o + n[r].length);
              })),
              { sentences: e, words: Object(g["shuffle"])(n) }
            );
          },
          randomMode: function(e) {
            var t = this,
              n = e.map(function(e) {
                var n = e.split(" ");
                return t.clean(Object(g["sample"])(n));
              });
            return (
              (e = e.map(function(e, r) {
                var o = e.search(new RegExp("\\b".concat(v()(n[r]), "\\b")));
                return t.replaceWord(e, o, o + n[r].length);
              })),
              { sentences: e, words: Object(g["shuffle"])(n) }
            );
          },
          selectionMode: function(e) {
            var t = this,
              n = this.selected.map(function(e) {
                return t.clean(e.word);
              }),
              r = Object(u["a"])(e);
            return (
              this.selected.forEach(function(e, o) {
                var a = e.sentenceIndex,
                  s = r[a],
                  i = s.search(new RegExp("\\b".concat(v()(n[o]), "\\b")));
                r[a] = t.replaceWord(s, i, i + n[o].length);
              }),
              { sentences: r, words: Object(g["shuffle"])(n) }
            );
          },
          createOutput: function(e, t) {
            var n = e.join("\n"),
              r = t
                .map(function(e, t) {
                  return "".concat(t + 1, ") ").concat(e);
                })
                .join("  ");
            return "".concat(n, "\n\n").concat(r);
          },
          onModeChange: function(e) {
            this.$emit("modeChange", e);
          },
          copy: function() {
            var e = this;
            this.transform &&
              navigator.permissions
                .query({ name: "clipboard-write" })
                .then(function(t) {
                  ("granted" != t.state && "prompt" != t.state) ||
                    navigator.clipboard
                      .writeText(e.transform)
                      .then(e.onCopy, e.onError);
                })
                .catch(function() {
                  e.$refs.quiz.$refs.textarea.select();
                  var t = document.execCommand("copy");
                  e.$refs.quiz.$refs.textarea.blur(),
                    t ? e.onCopy() : e.onError();
                });
          },
          onCopy: function() {
            this.$toast.open({
              message: "Copied!",
              type: "is-success",
              position: "is-bottom"
            });
          },
          onError: function() {
            this.$toast.open({
              message: "Error!",
              type: "is-danger",
              position: "is-bottom"
            });
          },
          replaceWord: function(e, t, n) {
            return "".concat(e.substring(0, t), "(  )").concat(e.substring(n));
          },
          clean: function(e) {
            return e.replace(/[^\w\s']|_/g, "").replace(/\s+/g, " ");
          }
        }
      },
      _ = y,
      O = Object(f["a"])(_, m, b, !1, null, "e98d7132", null),
      j = O.exports,
      I =
        '/// 1\nvar a = 1,b = 2,c = 3;\n///2\nfunction test () {\n    if(a) return console.log("1"),bar(),null;\n}\n///3\n(function(){\n  console.log("aaa");\n})(a,function(){\n  console.log("bbb");\n  (function (){\n    console.log("ccc");\n  })(a);\n});',
      $ = {
        name: "Main",
        components: { "original-area": h, "quiz-area": j },
        data: function() {
          return { text: I, mode: "random", selected: [] };
        },
        methods: {
          onTextChange: function(e) {
            this.text = e;
          },
          onSelectedChange: function(e) {
            this.selected = e;
          },
          onModeChange: function(e) {
            this.mode = e;
          },
          loadDemo: function() {
            (this.text = I),
              (this.selected = [
                { sentenceIndex: 2, wordIndex: 8, word: "worker" },
                { sentenceIndex: 5, wordIndex: 6, word: "you" },
                { sentenceIndex: 5, wordIndex: 10, word: "kitchen," },
                { sentenceIndex: 6, wordIndex: 4, word: "table." },
                { sentenceIndex: 4, wordIndex: 1, word: "smile," },
                { sentenceIndex: 1, wordIndex: 2, word: "world." },
                { sentenceIndex: 3, wordIndex: 7, word: "collapses." }
              ]);
          }
        }
      },
      S = $,
      M = (n("a006"), Object(f["a"])(S, a, s, !1, null, null, null)),
      k = M.exports,
      E = { name: "App", components: { "main-area": k } },
      T = E,
      q = Object(f["a"])(T, r, o, !1, null, null, null),
      z = q.exports,
      P = n("21ce"),
      A = n.n(P),
      D = n("3e88"),
      W = n.n(D),
      R = n("5584"),
      J = n.n(R),
      Q = n("3799"),
      Y = n.n(Q),
      B = n("2b0e");
    B["default"].use(A.a),
      B["default"].use(W.a),
      B["default"].use(J.a),
      B["default"].use(Y.a),
      (B["default"].config.productionTip = !1),
      new B["default"]({
        render: function(e) {
          return e(z);
        }
      }).$mount("#app");
  },
  a006: function(e, t, n) {
    "use strict";
    var r = n("b2d9"),
      o = n.n(r);
    o.a;
  },
  b2d9: function(e, t, n) {}
});
//# sourceMappingURL=app.9406f62c.js.map
