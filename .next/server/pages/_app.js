(() => {
  var e = {};
  (e.id = 888),
    (e.ids = [888]),
    (e.modules = {
      8114: (e, t, r) => {
        'use strict';
        r.d(t, { f: () => l, F: () => u });
        var a = r(997),
          s = r(6689);
        let i = 'light',
          c = (0, s.createContext)(void 0),
          l = ({ children: e }) => {
            let [t, r] = (0, s.useState)(i);
            return a.jsx(c.Provider, {
              value: {
                theme: t,
                toggleTheme: () => {
                  r((e) => (e === i ? 'dark' : i));
                },
              },
              children: e,
            });
          },
          u = () => {
            let e = (0, s.useContext)(c);
            if (!e) throw Error('useTheme must be used within a ThemeProvider');
            return e;
          };
      },
      3893: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.r(t), r.d(t, { default: () => d });
            var s = r(997);
            r(6689);
            var i = r(3291),
              c = r(540);
            r(2636);
            var l = r(8114),
              u = e([i, c]);
            [i, c] = u.then ? (await u)() : u;
            let d = function ({ Component: e, pageProps: t }) {
              return s.jsx(i.Provider, {
                store: c.Z,
                children: s.jsx(l.f, { children: s.jsx(e, { ...t }) }),
              });
            };
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      4975: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { AQ: () => l, Ue: () => c, jv: () => u });
            var s = r(9943),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createApi)({
                reducerPath: 'searchApi',
                baseQuery: (0, s.fetchBaseQuery)({
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
              { useSearchCharactersQuery: l, useGetCharacterDetailsQuery: u } =
                c;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      4468: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, {
              Cl: () => u,
              D4: () => n,
              Sc: () => l,
              ZP: () => h,
              oN: () => o,
            });
            var s = r(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createSlice)({
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
                    let { page: r, results: a } = t.payload;
                    e.resultsByPage[r] = a;
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
                setSearchResults: l,
                setSearchTerm: u,
                setIsLoading: d,
                setCurrentPage: n,
                setCharacterDetails: o,
              } = c.actions,
              h = c.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      825: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { LD: () => u, Pq: () => l, ZP: () => d });
            var s = r(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createSlice)({
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
              { toggleSelectItem: l, setSelectedItems: u } = c.actions,
              d = c.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      540: (e, t, r) => {
        'use strict';
        r.a(e, async (e, a) => {
          try {
            r.d(t, { Z: () => o });
            var s = r(3258),
              i = r(4975),
              c = r(4468),
              l = r(825),
              u = r(3826),
              d = e([s, i, c, l, u]);
            [s, i, c, l, u] = d.then ? (await d)() : d;
            let n = (0, s.configureStore)({
              reducer: {
                search: c.ZP,
                selected: l.ZP,
                [i.Ue.reducerPath]: i.Ue.reducer,
              },
              middleware: (e) => e().concat(i.Ue.middleware),
            });
            (0, u.setupListeners)(n.dispatch);
            let o = n;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      2636: () => {},
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
    });
  var t = require('../webpack-runtime.js');
  t.C(e);
  var r = t((t.s = 3893));
  module.exports = r;
})();
