(function(e) {
  function t(t) {
    for (
      var o, i, s = t[0], c = t[1], u = t[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (i = s[d]), a[i] && p.push(a[i][0]), (a[i] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    l && l(t);
    while (p.length) p.shift()();
    return r.push.apply(r, u || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== a[c] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var o = {},
    a = { app: 0 },
    r = [];
  function i(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/beautify-js-web/");
  var s = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var l = c;
  r.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("56d7");
  },
  "430b": function(e, t) {},
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("cadf"), n("551c"), n("f751"), n("097d"), n("5abe");
    var o = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("main-area");
      },
      a = [],
      r = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [
          e._m(0),
          n("div", { staticClass: "container main", attrs: { id: "app" } }, [
            n("div", { staticClass: "columns is-full" }, [
              n(
                "div",
                { staticClass: "column is-5" },
                [
                  n("original-area", {
                    attrs: { text: e.text, selected: e.selected, mode: e.mode },
                    on: {
                      textChange: e.onTextChange,
                      selectedChange: e.onSelectedChange
                    }
                  })
                ],
                1
              ),
              n(
                "div",
                [
                  n(
                    "b-field",
                    { attrs: { "label-for": "original", label: "options" } },
                    [
                      n("div", { staticClass: "column is-4" }, [
                        n(
                          "section",
                          [
                            n(
                              "b-checkbox",
                              {
                                on: { input: e.onOptionChanged },
                                model: {
                                  value: e.options.renameVariable,
                                  callback: function(t) {
                                    e.$set(e.options, "renameVariable", t);
                                  },
                                  expression: "options.renameVariable"
                                }
                              },
                              [e._v("rename variable")]
                            )
                          ],
                          1
                        ),
                        n(
                          "section",
                          [
                            n(
                              "b-checkbox",
                              {
                                on: { input: e.onOptionChanged },
                                model: {
                                  value: e.options.renameFunName,
                                  callback: function(t) {
                                    e.$set(e.options, "renameFunName", t);
                                  },
                                  expression: "options.renameFunName"
                                }
                              },
                              [e._v("rename function name")]
                            )
                          ],
                          1
                        ),
                        n(
                          "section",
                          [
                            n(
                              "b-checkbox",
                              {
                                on: { input: e.onOptionChanged },
                                model: {
                                  value: e.options.renameFunParam,
                                  callback: function(t) {
                                    e.$set(e.options, "renameFunParam", t);
                                  },
                                  expression: "options.renameFunParam"
                                }
                              },
                              [e._v("rename function param")]
                            )
                          ],
                          1
                        ),
                        n(
                          "section",
                          [
                            n(
                              "b-checkbox",
                              {
                                on: { input: e.onOptionChanged },
                                model: {
                                  value: e.options.renameRequire,
                                  callback: function(t) {
                                    e.$set(e.options, "renameRequire", t);
                                  },
                                  expression: "options.renameRequire"
                                }
                              },
                              [e._v("rename require")]
                            )
                          ],
                          1
                        ),
                        n(
                          "section",
                          [
                            n(
                              "b-checkbox",
                              {
                                on: { input: e.onOptionChanged },
                                model: {
                                  value: e.options.renameExport,
                                  callback: function(t) {
                                    e.$set(e.options, "renameExport", t);
                                  },
                                  expression: "options.renameExport"
                                }
                              },
                              [e._v("rename export")]
                            )
                          ],
                          1
                        ),
                        n(
                          "section",
                          [
                            n(
                              "b-checkbox",
                              {
                                on: { input: e.onOptionChanged },
                                model: {
                                  value: e.options.renameLambda,
                                  callback: function(t) {
                                    e.$set(e.options, "renameLambda", t);
                                  },
                                  expression: "options.renameLambda"
                                }
                              },
                              [e._v("rename Lambda")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ],
                1
              ),
              n(
                "div",
                { staticClass: "column is-5" },
                [
                  n("quiz-area", {
                    attrs: {
                      text: e.text,
                      selected: e.selected,
                      mode: e.mode,
                      options: e.options
                    },
                    on: { modeChange: e.onModeChange }
                  })
                ],
                1
              )
            ])
          ])
        ]);
      },
      i = [
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
      s = function() {
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
                  ? n("div", { staticClass: "text__selection has-text-left" })
                  : n("b-input", {
                      attrs: {
                        id: "original",
                        rows: "30",
                        type: "textarea",
                        value: e.text
                      },
                      on: { input: e.emitTextChange }
                    })
              ],
              1
            ),
            n("div", { staticClass: "buttons has-addons is-centered" }, [
              n(
                "button",
                {
                  staticClass: "button is-warning",
                  attrs: { disabled: e.pasteDisabled },
                  on: {
                    click: function(t) {
                      return e.reset();
                    }
                  }
                },
                [e._v("\n      Reset\n    ")]
              )
            ])
          ],
          1
        );
      },
      c = [],
      u = (n("20d6"), n("75fc")),
      l = (n("430b"), n("8da4")),
      d = {
        name: "OriginalArea",
        props: {
          mode: { type: String, default: "" },
          selected: {
            type: Array,
            default: function() {
              return [];
            }
          },
          text: { type: String, default: l }
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
            var o = Object(u["a"])(this.selected),
              a = o.findIndex(function(e) {
                return e.word === n;
              });
            -1 !== a
              ? o.splice(a, 1)
              : o.push({ sentenceIndex: e, wordIndex: t, word: n }),
              this.emitSelectedChange(o);
          },
          currentlySelected: function(e, t, n) {
            return (
              this.selected.length > 0 &&
              -1 !==
                this.selected.findIndex(function(o) {
                  return (
                    o.sentenceIndex === e && o.wordIndex === t && o.word === n
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
          },
          reset: function() {
            this.text = l;
          }
        }
      },
      p = d,
      m = n("2877"),
      f = Object(m["a"])(p, s, c, !1, null, "0072dd0b", null),
      h = f.exports,
      b = function() {
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
                    rows: "30",
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
      g = [],
      x = (n("a481"), n("2ef0"), n("a318"), n("d0ea")),
      v = n.n(x),
      C = {
        name: "QuizArea",
        props: {
          mode: { type: String, default: "" },
          selected: {
            type: Array,
            default: function() {
              return [];
            }
          },
          text: { type: String, default: "" },
          options: { default: null }
        },
        data: function() {
          return {
            recompute: null,
            checkbox: !1,
            checkboxCustom: "Yes",
            checked: !0
          };
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
            if ((this.recompute, this.text))
              return this.transformCode(this.text);
          }
        },
        methods: {
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
          },
          onOptionChanged: function() {
            console.log("QuizArea onOptionChanged"),
              this.recompute,
              (this.text = this.text);
          },
          transformCode: function(e) {
            var t = {
              code: e,
              filename: "",
              bRenameLocalVariable: this.options.renameVariable,
              bRenameFunctionName: this.options.renameFunName,
              bRenameFunctionParam: this.options.renameFunParam,
              bRenameRequire: this.options.renameRequire,
              bRenameExport: this.options.renameExport,
              bRenameLambda: this.options.renameLambda
            };
            return v.a.transformCode(t), 0 != t.errCode ? t.errStr : t.result;
          }
        }
      },
      y = C,
      _ = Object(m["a"])(y, b, g, !1, null, "0c8bed5b", null),
      $ = _.exports,
      O = n("8da4"),
      w = {
        name: "Main",
        components: { "original-area": h, "quiz-area": $ },
        data: function() {
          return {
            text: O,
            mode: "random",
            selected: [],
            options: {
              renameVariable: !1,
              renameFunName: !1,
              renameFunParam: !1,
              renameRequire: !1,
              renameExport: !1,
              renameLambda: !0
            }
          };
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
          onOptionChanged: function() {
            console.log("onOptionChanged");
            for (var e = 0; e <= 2; ++e)
              this.$children[e] &&
                this.$children[e].onOptionChanged &&
                this.$children[e].onOptionChanged();
          }
        }
      },
      k = w,
      q = (n("a006"), Object(m["a"])(k, r, i, !1, null, null, null)),
      S = q.exports,
      j = { name: "App", components: { "main-area": S } },
      E = j,
      R = Object(m["a"])(E, o, a, !1, null, null, null),
      F = R.exports,
      P = n("21ce"),
      T = n.n(P),
      z = n("3e88"),
      L = n.n(z),
      M = n("5584"),
      A = n.n(M),
      I = n("3799"),
      N = n.n(I),
      V = n("9e32"),
      D = n.n(V),
      J = n("2b0e");
    J["default"].use(T.a),
      J["default"].use(L.a),
      J["default"].use(A.a),
      J["default"].use(N.a),
      J["default"].use(D.a),
      (J["default"].config.productionTip = !1),
      new J["default"]({
        render: function(e) {
          return e(F);
        }
      }).$mount("#app");
  },
  "8da4": function(e, t) {
    e.exports =
      'var j = require("http-server");\nvar a = 1,b = 2,c = 3;  \nfunction s (dd) {   \n    if(a) return console.log("1"),bar(),null;\n}\n\n\n(function(a,b){\n  console.log("input1= "+a),b();\n})(b,function(){\n  console.log("bbb");\n  (function (a){\n    console.log("intput2 a = " + a);\n  })(c);\n});\n\nfunction f(a){\n   var b = function(a){\n      console.log(a);  \n    };\n    b(0);\n}\n\nexports.log = s;\n';
  },
  a006: function(e, t, n) {
    "use strict";
    var o = n("b2d9"),
      a = n.n(o);
    a.a;
  },
  b2d9: function(e, t, n) {}
});
//# sourceMappingURL=app.30039e3d.js.map
