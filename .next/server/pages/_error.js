(() => {
  var e = {};
  (e.id = 820),
    (e.ids = [820, 888, 660]),
    (e.modules = {
      1323: (e, t) => {
        'use strict';
        Object.defineProperty(t, 'l', {
          enumerable: !0,
          get: function () {
            return function e(t, r) {
              return r in t
                ? t[r]
                : 'then' in t && 'function' == typeof t.then
                  ? t.then((t) => e(t, r))
                  : 'function' == typeof t && 'default' === r
                    ? t
                    : void 0;
            };
          },
        });
      },
      4258: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => m,
                default: () => p,
                getServerSideProps: () => g,
                getStaticPaths: () => h,
                getStaticProps: () => f,
                reportWebVitals: () => y,
                routeModule: () => j,
                unstable_getServerProps: () => x,
                unstable_getServerSideProps: () => _,
                unstable_getStaticParams: () => v,
                unstable_getStaticPaths: () => b,
                unstable_getStaticProps: () => P,
              });
            var a = r(7093),
              s = r(5244),
              i = r(1323),
              o = r(2899),
              l = r.n(o),
              u = r(3893),
              c = r(6971),
              d = e([u]);
            u = (d.then ? (await d)() : d)[0];
            let p = (0, i.l)(c, 'default'),
              f = (0, i.l)(c, 'getStaticProps'),
              h = (0, i.l)(c, 'getStaticPaths'),
              g = (0, i.l)(c, 'getServerSideProps'),
              m = (0, i.l)(c, 'config'),
              y = (0, i.l)(c, 'reportWebVitals'),
              P = (0, i.l)(c, 'unstable_getStaticProps'),
              b = (0, i.l)(c, 'unstable_getStaticPaths'),
              v = (0, i.l)(c, 'unstable_getStaticParams'),
              x = (0, i.l)(c, 'unstable_getServerProps'),
              _ = (0, i.l)(c, 'unstable_getServerSideProps'),
              j = new a.PagesRouteModule({
                definition: {
                  kind: s.x.PAGES,
                  page: '/_error',
                  pathname: '/_error',
                  bundlePath: '',
                  filename: '',
                },
                components: { App: u.default, Document: l() },
                userland: c,
              });
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      6971: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return c;
            },
          });
        let n = r(167),
          a = r(997),
          s = n._(r(6689)),
          i = n._(r(7828)),
          o = {
            400: 'Bad Request',
            404: 'This page could not be found',
            405: 'Method Not Allowed',
            500: 'Internal Server Error',
          };
        function l(e) {
          let { res: t, err: r } = e;
          return {
            statusCode:
              t && t.statusCode ? t.statusCode : r ? r.statusCode : 404,
          };
        }
        let u = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: '100vh',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          },
          desc: { lineHeight: '48px' },
          h1: {
            display: 'inline-block',
            margin: '0 20px 0 0',
            paddingRight: 23,
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: 'top',
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: '28px' },
          wrap: { display: 'inline-block' },
        };
        class c extends s.default.Component {
          render() {
            let { statusCode: e, withDarkMode: t = !0 } = this.props,
              r =
                this.props.title || o[e] || 'An unexpected error has occurred';
            return (0, a.jsxs)('div', {
              style: u.error,
              children: [
                (0, a.jsx)(i.default, {
                  children: (0, a.jsx)('title', {
                    children: e
                      ? e + ': ' + r
                      : 'Application error: a client-side exception has occurred',
                  }),
                }),
                (0, a.jsxs)('div', {
                  style: u.desc,
                  children: [
                    (0, a.jsx)('style', {
                      dangerouslySetInnerHTML: {
                        __html:
                          'body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}' +
                          (t
                            ? '@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}'
                            : ''),
                      },
                    }),
                    e
                      ? (0, a.jsx)('h1', {
                          className: 'next-error-h1',
                          style: u.h1,
                          children: e,
                        })
                      : null,
                    (0, a.jsx)('div', {
                      style: u.wrap,
                      children: (0, a.jsxs)('h2', {
                        style: u.h2,
                        children: [
                          this.props.title || e
                            ? r
                            : (0, a.jsx)(a.Fragment, {
                                children:
                                  'Application error: a client-side exception has occurred (see the browser console for more information)',
                              }),
                          '.',
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        (c.displayName = 'ErrorPage'),
          (c.getInitialProps = l),
          (c.origGetInitialProps = l),
          ('function' == typeof t.default ||
            ('object' == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, '__esModule', { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      5495: (e, t) => {
        'use strict';
        function r(e) {
          let {
            ampFirst: t = !1,
            hybrid: r = !1,
            hasQuery: n = !1,
          } = void 0 === e ? {} : e;
          return t || (r && n);
        }
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'isInAmpMode', {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
      },
      7828: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (function (e, t) {
            for (var r in t)
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          })(t, {
            default: function () {
              return g;
            },
            defaultHead: function () {
              return d;
            },
          });
        let n = r(167),
          a = r(8760),
          s = r(997),
          i = a._(r(6689)),
          o = n._(r(7215)),
          l = r(8039),
          u = r(1988),
          c = r(5495);
        function d(e) {
          void 0 === e && (e = !1);
          let t = [(0, s.jsx)('meta', { charSet: 'utf-8' })];
          return (
            e ||
              t.push(
                (0, s.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width',
                }),
              ),
            t
          );
        }
        function p(e, t) {
          return 'string' == typeof t || 'number' == typeof t
            ? e
            : t.type === i.default.Fragment
              ? e.concat(
                  i.default.Children.toArray(t.props.children).reduce(
                    (e, t) =>
                      'string' == typeof t || 'number' == typeof t
                        ? e
                        : e.concat(t),
                    [],
                  ),
                )
              : e.concat(t);
        }
        r(1997);
        let f = ['name', 'httpEquiv', 'charSet', 'itemProp'];
        function h(e, t) {
          let { inAmpMode: r } = t;
          return e
            .reduce(p, [])
            .reverse()
            .concat(d(r).reverse())
            .filter(
              (function () {
                let e = new Set(),
                  t = new Set(),
                  r = new Set(),
                  n = {};
                return (a) => {
                  let s = !0,
                    i = !1;
                  if (
                    a.key &&
                    'number' != typeof a.key &&
                    a.key.indexOf('$') > 0
                  ) {
                    i = !0;
                    let t = a.key.slice(a.key.indexOf('$') + 1);
                    e.has(t) ? (s = !1) : e.add(t);
                  }
                  switch (a.type) {
                    case 'title':
                    case 'base':
                      t.has(a.type) ? (s = !1) : t.add(a.type);
                      break;
                    case 'meta':
                      for (let e = 0, t = f.length; e < t; e++) {
                        let t = f[e];
                        if (a.props.hasOwnProperty(t)) {
                          if ('charSet' === t) r.has(t) ? (s = !1) : r.add(t);
                          else {
                            let e = a.props[t],
                              r = n[t] || new Set();
                            ('name' !== t || !i) && r.has(e)
                              ? (s = !1)
                              : (r.add(e), (n[t] = r));
                          }
                        }
                      }
                  }
                  return s;
                };
              })(),
            )
            .reverse()
            .map((e, t) => {
              let n = e.key || t;
              if (
                !r &&
                'link' === e.type &&
                e.props.href &&
                [
                  'https://fonts.googleapis.com/css',
                  'https://use.typekit.net/',
                ].some((t) => e.props.href.startsWith(t))
              ) {
                let t = { ...(e.props || {}) };
                return (
                  (t['data-href'] = t.href),
                  (t.href = void 0),
                  (t['data-optimized-fonts'] = !0),
                  i.default.cloneElement(e, t)
                );
              }
              return i.default.cloneElement(e, { key: n });
            });
        }
        let g = function (e) {
          let { children: t } = e,
            r = (0, i.useContext)(l.AmpStateContext),
            n = (0, i.useContext)(u.HeadManagerContext);
          return (0, s.jsx)(o.default, {
            reduceComponentsToState: h,
            headManager: n,
            inAmpMode: (0, c.isInAmpMode)(r),
            children: t,
          });
        };
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      7215: (e, t, r) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'default', {
            enumerable: !0,
            get: function () {
              return i;
            },
          });
        let n = r(6689),
          a = () => {},
          s = () => {};
        function i(e) {
          var t;
          let { headManager: r, reduceComponentsToState: i } = e;
          function o() {
            if (r && r.mountedInstances) {
              let t = n.Children.toArray(
                Array.from(r.mountedInstances).filter(Boolean),
              );
              r.updateHead(i(t, e));
            }
          }
          return (
            null == r || null == (t = r.mountedInstances) || t.add(e.children),
            o(),
            a(() => {
              var t;
              return (
                null == r ||
                  null == (t = r.mountedInstances) ||
                  t.add(e.children),
                () => {
                  var t;
                  null == r ||
                    null == (t = r.mountedInstances) ||
                    t.delete(e.children);
                }
              );
            }),
            a(
              () => (
                r && (r._pendingUpdate = o),
                () => {
                  r && (r._pendingUpdate = o);
                }
              ),
            ),
            s(
              () => (
                r &&
                  r._pendingUpdate &&
                  (r._pendingUpdate(), (r._pendingUpdate = null)),
                () => {
                  r &&
                    r._pendingUpdate &&
                    (r._pendingUpdate(), (r._pendingUpdate = null));
                }
              ),
            ),
            null
          );
        }
      },
      1997: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          Object.defineProperty(t, 'warnOnce', {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let r = (e) => {};
      },
      8114: (e, t, r) => {
        'use strict';
        r.d(t, { f: () => o, F: () => l });
        var n = r(997),
          a = r(6689);
        let s = 'light',
          i = (0, a.createContext)(void 0),
          o = ({ children: e }) => {
            let [t, r] = (0, a.useState)(s);
            return n.jsx(i.Provider, {
              value: {
                theme: t,
                toggleTheme: () => {
                  r((e) => (e === s ? 'dark' : s));
                },
              },
              children: e,
            });
          },
          l = () => {
            let e = (0, a.useContext)(i);
            if (!e) throw Error('useTheme must be used within a ThemeProvider');
            return e;
          };
      },
      3893: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.r(t), r.d(t, { default: () => u });
            var a = r(997);
            r(6689);
            var s = r(3291),
              i = r(540);
            r(2636);
            var o = r(8114),
              l = e([s, i]);
            [s, i] = l.then ? (await l)() : l;
            let u = function ({ Component: e, pageProps: t }) {
              return a.jsx(s.Provider, {
                store: i.Z,
                children: a.jsx(o.f, { children: a.jsx(e, { ...t }) }),
              });
            };
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      4975: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { AQ: () => o, Ue: () => i, jv: () => l });
            var a = r(9943),
              s = e([a]);
            a = (s.then ? (await s)() : s)[0];
            let i = (0, a.createApi)({
                reducerPath: 'searchApi',
                baseQuery: (0, a.fetchBaseQuery)({
                  baseUrl: 'https://swapi.dev/api/',
                }),
                endpoints: (e) => ({
                  searchCharacters: e.query({
                    query: ({ searchTerm: e, page: t }) =>
                      e ? `people/?search=${e}&page=${t}` : `people/?page=${t}`,
                    transformResponse: (e) =>
                      e.results.map((e) => {
                        let t = e.url.match(/\/([0-9]*)\/$/),
                          r = t ? t[1] : 'unknown';
                        return {
                          id: r,
                          name: e.name,
                          description: e.birth_year,
                          image: `https://starwars-visualguide.com/assets/img/characters/${r}.jpg`,
                          age: e.birth_year,
                          height: e.height,
                          mass: e.mass,
                          gender: e.gender,
                          films: e.films,
                        };
                      }),
                  }),
                  getCharacterDetails: e.query({
                    query: (e) => `people/${e}/`,
                    transformResponse: (e) => {
                      let t = e.url.match(/\/([0-9]*)\/$/),
                        r = t ? t[1] : 'unknown';
                      return {
                        id: r,
                        name: e.name,
                        description: e.birth_year,
                        image: `https://starwars-visualguide.com/assets/img/characters/${r}.jpg`,
                        age: e.birth_year,
                        height: e.height,
                        mass: e.mass,
                        gender: e.gender,
                        films: e.films,
                      };
                    },
                  }),
                }),
              }),
              { useSearchCharactersQuery: o, useGetCharacterDetailsQuery: l } =
                i;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      4468: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, {
              Cl: () => l,
              D4: () => c,
              Sc: () => o,
              ZP: () => p,
              oN: () => d,
            });
            var a = r(3258),
              s = e([a]);
            a = (s.then ? (await s)() : s)[0];
            let i = (0, a.createSlice)({
                name: 'search',
                initialState: {
                  searchResults: [],
                  searchTerm: '',
                  isLoading: !1,
                  currentPage: 1,
                  characterDetails: null,
                  resultsByPage: {},
                },
                reducers: {
                  setSearchResults(e, t) {
                    let { page: r, results: n } = t.payload;
                    e.resultsByPage[r] = n;
                  },
                  setSearchTerm(e, t) {
                    e.searchTerm = t.payload;
                  },
                  setIsLoading(e, t) {
                    e.isLoading = t.payload;
                  },
                  setCurrentPage(e, t) {
                    e.currentPage = t.payload;
                  },
                  setCharacterDetails(e, t) {
                    e.characterDetails = t.payload;
                  },
                },
              }),
              {
                setSearchResults: o,
                setSearchTerm: l,
                setIsLoading: u,
                setCurrentPage: c,
                setCharacterDetails: d,
              } = i.actions,
              p = i.reducer;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      825: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { LD: () => l, Pq: () => o, ZP: () => u });
            var a = r(3258),
              s = e([a]);
            a = (s.then ? (await s)() : s)[0];
            let i = (0, a.createSlice)({
                name: 'selected',
                initialState: { selectedItems: [] },
                reducers: {
                  toggleSelectItem: (e, t) => {
                    let r = e.selectedItems.findIndex(
                      (e) => e.id === t.payload.id,
                    );
                    r >= 0
                      ? e.selectedItems.splice(r, 1)
                      : e.selectedItems.push(t.payload);
                  },
                  setSelectedItems: (e, t) => {
                    e.selectedItems = t.payload;
                  },
                },
              }),
              { toggleSelectItem: o, setSelectedItems: l } = i.actions,
              u = i.reducer;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      540: (e, t, r) => {
        'use strict';
        r.a(e, async (e, n) => {
          try {
            r.d(t, { Z: () => d });
            var a = r(3258),
              s = r(4975),
              i = r(4468),
              o = r(825),
              l = r(3826),
              u = e([a, s, i, o, l]);
            [a, s, i, o, l] = u.then ? (await u)() : u;
            let c = (0, a.configureStore)({
              reducer: {
                search: i.ZP,
                selected: o.ZP,
                [s.Ue.reducerPath]: s.Ue.reducer,
              },
              middleware: (e) => e().concat(s.Ue.middleware),
            });
            (0, l.setupListeners)(c.dispatch);
            let d = c;
            n();
          } catch (e) {
            n(e);
          }
        });
      },
      2636: () => {},
      5244: (e, t) => {
        'use strict';
        var r;
        Object.defineProperty(t, 'x', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
          (function (e) {
            (e.PAGES = 'PAGES'),
              (e.PAGES_API = 'PAGES_API'),
              (e.APP_PAGE = 'APP_PAGE'),
              (e.APP_ROUTE = 'APP_ROUTE');
          })(r || (r = {}));
      },
      8039: (e, t, r) => {
        'use strict';
        e.exports = r(7093).vendored.contexts.AmpContext;
      },
      1988: (e, t, r) => {
        'use strict';
        e.exports = r(7093).vendored.contexts.HeadManagerContext;
      },
      2785: (e) => {
        'use strict';
        e.exports = require('next/dist/compiled/next-server/pages.runtime.prod.js');
      },
      6689: (e) => {
        'use strict';
        e.exports = require('react');
      },
      997: (e) => {
        'use strict';
        e.exports = require('react/jsx-runtime');
      },
      3258: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit');
      },
      3826: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit/query');
      },
      9943: (e) => {
        'use strict';
        e.exports = import('@reduxjs/toolkit/query/react');
      },
      3291: (e) => {
        'use strict';
        e.exports = import('react-redux');
      },
      1017: (e) => {
        'use strict';
        e.exports = require('path');
      },
      8760: (e, t) => {
        'use strict';
        function r(e) {
          if ('function' != typeof WeakMap) return null;
          var t = new WeakMap(),
            n = new WeakMap();
          return (r = function (e) {
            return e ? n : t;
          })(e);
        }
        t._ = t._interop_require_wildcard = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (null === e || ('object' != typeof e && 'function' != typeof e))
            return { default: e };
          var n = r(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var i in e)
            if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
              var o = s ? Object.getOwnPropertyDescriptor(e, i) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(a, i, o)
                : (a[i] = e[i]);
            }
          return (a.default = e), n && n.set(e, a), a;
        };
      },
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [899], () => r(4258));
  module.exports = n;
})();
