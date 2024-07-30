(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return a(2979);
        },
      ]);
    },
    9482: function (e, t, a) {
      'use strict';
      var r = a(5893);
      a(7294);
      var A = a(4215),
        s = a.n(A);
      t.Z = () =>
        (0, r.jsx)('div', {
          className: s().loader,
          children: (0, r.jsx)('div', { className: s().spinner }),
        });
    },
    2979: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, {
          default: function () {
            return U;
          },
        });
      var r = a(5893),
        A = a(7294),
        s = a(1163),
        n = a(5007),
        c = a(4468),
        o = a(1263),
        i = a.n(o),
        l = (e) => {
          let { onSearch: t } = e,
            a = (0, n.I0)(),
            s = (0, n.v9)((e) => e.search.searchTerm),
            [o, l] = A.useState(s);
          return (
            A.useEffect(() => {
              l(s);
            }, [s]),
            (0, r.jsx)('div', {
              children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                  e.preventDefault(), a((0, c.Cl)(o)), t(o);
                },
                className: i().search,
                children: [
                  (0, r.jsx)('input', {
                    type: 'text',
                    value: o,
                    onChange: (e) => {
                      l(e.target.value);
                    },
                    placeholder: 'Search...',
                    className: i().input,
                  }),
                  (0, r.jsx)('button', {
                    type: 'submit',
                    className: i().button,
                    children: 'Search',
                  }),
                ],
              }),
            })
          );
        };
      class h extends A.Component {
        static getDerivedStateFromError(e) {
          return { hasError: !0, error: e };
        }
        componentDidCatch(e) {
          console.error('Error caught by ErrorBoundary:', e),
            this.setState({ hasError: !0, error: e });
        }
        render() {
          let { FallbackComponent: e, children: t } = this.props,
            { hasError: a, error: A } = this.state;
          return a
            ? (0, r.jsx)(e, {
                error: A,
                resetErrorBoundary: this.resetErrorBoundary,
              })
            : t || null;
        }
        constructor(e) {
          super(e),
            (this.resetErrorBoundary = () => {
              this.setState({ hasError: !1, error: null });
            }),
            (this.state = { hasError: !1, error: null });
        }
      }
      var d = (e) => {
          let { error: t, resetErrorBoundary: a } = e;
          return (0, r.jsxs)('div', {
            children: [
              (0, r.jsx)('h2', { children: 'Something went wrong.' }),
              (0, r.jsx)('p', { children: t.message }),
              (0, r.jsx)('button', { onClick: a, children: 'Try Again' }),
              (0, r.jsxs)('p', {
                children: [
                  'Alternatively, you can',
                  ' ',
                  (0, r.jsx)('a', {
                    href: '/',
                    onClick: (e) => {
                      e.preventDefault(), window.location.reload();
                    },
                    children: 'reload the page',
                  }),
                  '.',
                ],
              }),
            ],
          });
        },
        g = a(9618),
        u = a.n(g),
        _ = () =>
          (0, r.jsx)('button', {
            className: u().button,
            onClick: () => {
              throw Error('This is a test error');
            },
            children: 'Throw Error',
          }),
        m = a(8650),
        x = a.n(m),
        p = a(5032),
        j = a.n(p),
        C = a(825),
        k = a(1054),
        v = a.n(k),
        b = a(8114),
        E = (e) => {
          let { character: t, onClick: a } = e,
            A = (0, n.I0)(),
            { theme: s } = (0, b.F)(),
            c = (0, n.v9)((e) => e.selected.selectedItems).some(
              (e) => e.id === t.id,
            );
          return (0, r.jsxs)('div', {
            'data-testid': 'card',
            className: ''
              .concat(v().card, ' ')
              .concat('dark' === s ? v().dark : v().light),
            onClick: (e) => {
              'checkbox' !== e.target.type && a();
            },
            children: [
              (0, r.jsx)('img', {
                src: t.image,
                alt: t.name,
                className: v().cardImage,
              }),
              (0, r.jsxs)('div', {
                className: v().cardContent,
                children: [
                  (0, r.jsx)('h3', { children: t.name }),
                  (0, r.jsx)('p', { children: t.description }),
                  (0, r.jsxs)('p', {
                    children: [
                      (0, r.jsx)('strong', { children: 'Age:' }),
                      ' ',
                      t.age,
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: v().checkboxContainer,
                children: [
                  (0, r.jsx)('input', {
                    type: 'checkbox',
                    checked: c,
                    onChange: (e) => {
                      e.stopPropagation(), A((0, C.Pq)(t));
                    },
                  }),
                  (0, r.jsx)('label', {
                    className: v().checkboxLabel,
                    children: 'Add to Favorites',
                  }),
                ],
              }),
            ],
          });
        },
        B = (e) => {
          let { results: t, onItemClick: a } = e;
          return 0 === t.length
            ? (0, r.jsx)('p', { children: 'No cards available' })
            : (0, r.jsxs)('div', {
                className: j().searchResults,
                children: [
                  (0, r.jsx)('h2', { children: 'Search Results' }),
                  (0, r.jsx)('div', {
                    className: j().cardContainer,
                    children: t.map((e) =>
                      (0, r.jsx)(
                        E,
                        { character: e, onClick: () => a(e.id) },
                        e.id,
                      ),
                    ),
                  }),
                ],
              });
        },
        f = a(9482),
        Q = a(1047),
        S = a.n(Q),
        y = (e) => {
          let {
              currentPage: t,
              totalPages: a,
              onPageChange: A,
              searchTerm: s,
            } = e,
            n = '' !== s.trim();
          return (0, r.jsxs)('div', {
            className: S().pagination,
            children: [
              (0, r.jsx)('button', {
                className: S().prevNext,
                onClick: () => {
                  t > 1 && A(t - 1);
                },
                disabled: n || 1 === t,
                children: 'Previous',
              }),
              (0, r.jsx)('div', { className: S().currentPage, children: t }),
              (0, r.jsx)('button', {
                className: S().prevNext,
                onClick: () => {
                  t < a && A(t + 1);
                },
                disabled: n || t === a,
                children: 'Next',
              }),
            ],
          });
        },
        N = {
          src: '/_next/static/media/1625667391_7-kartinkin-com-p-zvezdnie-voini-oboi-krasivie-8.3515c7a9.jpg',
          height: 750,
          width: 1200,
          blurDataURL:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKQV/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIDBAAFEhMVQv/aAAgBAQABPwDi7HV7VKZiFYSOrDzsAOf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCv/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=',
          blurWidth: 8,
          blurHeight: 5,
        },
        I = {
          src: '/_next/static/media/star-wars-background-vdgqv4b95q9ur6ak.19c432cd.jpg',
          height: 1080,
          width: 1920,
          blurDataURL:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALRR/8QAHBAAAgICAwAAAAAAAAAAAAAAAgMEBQABBhFC/9oACAEBAAE/AINYvj0+tr457Pta3tZv2R5//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z',
          blurWidth: 8,
          blurHeight: 5,
        },
        w = a(1215),
        D = a.n(w),
        T = () => {
          let e = (0, n.I0)(),
            t = (0, n.v9)((e) => e.selected.selectedItems),
            { theme: a } = (0, b.F)(),
            [s, c] = (0, A.useState)(null),
            o = (0, A.useRef)(null);
          return ((0, A.useEffect)(() => {
            s && o.current && (o.current.click(), c(null));
          }, [s]),
          0 === t.length)
            ? null
            : (0, r.jsxs)('div', {
                className: ''
                  .concat(D().flyout, ' ')
                  .concat('dark' === a ? D().dark : D().light),
                children: [
                  (0, r.jsx)('button', {
                    onClick: () => {
                      e((0, C.LD)([]));
                    },
                    children: 'Unselect all',
                  }),
                  (0, r.jsxs)('p', {
                    children: [t.length, ' items are selected'],
                  }),
                  (0, r.jsx)('button', {
                    onClick: () => {
                      c(
                        encodeURI(
                          'data:text/csv;charset=utf-8,' +
                            t
                              .map((e) =>
                                ''
                                  .concat(e.name, ',')
                                  .concat(e.description, ',')
                                  .concat(e.image, ',')
                                  .concat(e.age, ',')
                                  .concat(e.height, ',')
                                  .concat(e.mass, ',')
                                  .concat(e.gender, ',')
                                  .concat(e.films.join(' | ')),
                              )
                              .join('\n'),
                        ),
                      );
                    },
                    children: 'Download',
                  }),
                  s &&
                    (0, r.jsx)('a', {
                      ref: o,
                      href: s,
                      download: ''.concat(t.length, '_items.csv'),
                      style: { display: 'none' },
                      children: 'Download Link',
                    }),
                ],
              });
        },
        P = a(3927),
        F = a(9250),
        R = a(334),
        L = a.n(R),
        M = () => {
          let { theme: e, toggleTheme: t } = (0, b.F)();
          return (0, r.jsxs)('div', {
            className: L().themeToggle,
            children: [
              (0, r.jsxs)('label', {
                className: 'light' === e ? L().active : '',
                children: [
                  (0, r.jsx)('input', {
                    type: 'radio',
                    name: 'theme',
                    value: 'light',
                    checked: 'light' === e,
                    onChange: t,
                  }),
                  'Light',
                ],
              }),
              (0, r.jsxs)('label', {
                className: 'dark' === e ? L().active : '',
                children: [
                  (0, r.jsx)('input', {
                    type: 'radio',
                    name: 'theme',
                    value: 'dark',
                    checked: 'dark' === e,
                    onChange: t,
                  }),
                  'Dark',
                ],
              }),
            ],
          });
        },
        U = () => {
          let e = (0, s.useRouter)(),
            t = (0, n.I0)(),
            { theme: a } = (0, b.F)(),
            o = (0, n.v9)((e) => e.search.searchTerm),
            i = (0, n.v9)((e) => e.search.currentPage),
            g = (0, n.v9)((e) => e.search.resultsByPage),
            u = (0, n.v9)((e) => e.search.isLoading),
            { data: m, isFetching: p } = (0, P.AQ)({ searchTerm: o, page: i });
          return (
            A.useEffect(() => {
              let { searchTerm: a = '', page: r = 1 } = e.query;
              t((0, c.Cl)(String(a))), t((0, c.D4)(Number(r)));
            }, [e.query, t]),
            A.useEffect(() => {
              m && t((0, c.Sc)({ page: i, results: m }));
            }, [m, i, t]),
            (0, r.jsx)('div', {
              className: ''
                .concat(x().main, ' ')
                .concat('dark' === a ? x().dark : x().light),
              style: {
                backgroundImage: 'url('.concat('dark' === a ? I : N, ')'),
              },
              children: (0, r.jsxs)(h, {
                FallbackComponent: d,
                children: [
                  (0, r.jsx)(M, {}),
                  (0, r.jsx)('div', {
                    className: x().topSection,
                    children: (0, r.jsx)(l, {
                      onSearch: (a) => {
                        t((0, c.Cl)(a.trim())),
                          t((0, c.D4)(1)),
                          e.push('/?searchTerm='.concat(a.trim(), '&page=1'));
                      },
                      searchTerm: o,
                    }),
                  }),
                  (0, r.jsxs)('div', {
                    className: x().bottomSection,
                    children: [
                      (0, r.jsxs)('div', {
                        className: x().leftSection,
                        onClick: () => {
                          e.pathname.startsWith('/details/') &&
                            e.push(
                              '/?searchTerm='.concat(o, '&page=').concat(i),
                            );
                        },
                        children: [
                          u || p
                            ? (0, r.jsx)(f.Z, {})
                            : (0, r.jsx)(B, {
                                results: g[i] || [],
                                onItemClick: (t) => {
                                  e.push(
                                    '/details/'
                                      .concat(t, '?frontpage=')
                                      .concat(i),
                                  );
                                },
                              }),
                          !u &&
                            g[i] &&
                            g[i].length > 0 &&
                            (0, r.jsx)(y, {
                              currentPage: i,
                              totalPages: 9,
                              onPageChange: (a) => {
                                t((0, c.D4)(a)),
                                  e.push(
                                    '/?searchTerm='
                                      .concat(o, '&page=')
                                      .concat(a),
                                  );
                              },
                              searchTerm: o,
                            }),
                        ],
                      }),
                      e.pathname.startsWith('/details/') &&
                        (0, r.jsx)('div', {
                          className: x().rightSection,
                          children: (0, r.jsx)(F.j3, {}),
                        }),
                    ],
                  }),
                  (0, r.jsx)(_, {}),
                  (0, r.jsx)(T, {}),
                ],
              }),
            })
          );
        };
    },
    1054: function (e) {
      e.exports = {
        card: 'Card_card__RlVbj',
        cardImage: 'Card_cardImage__Vr_Xc',
        cardContent: 'Card_cardContent__WtWu_',
        checkboxContainer: 'Card_checkboxContainer__2AQbL',
        checkboxLabel: 'Card_checkboxLabel__6kTTH',
        light: 'Card_light__Fkbbg',
        dark: 'Card_dark___aMFt',
      };
    },
    9618: function (e) {
      e.exports = { button: 'ErrorTestButton_button__PYyIW' };
    },
    1215: function (e) {
      e.exports = {
        flyout: 'Flyout_flyout__tuxCz',
        light: 'Flyout_light__DZUYx',
        dark: 'Flyout_dark__lQ02r',
      };
    },
    4215: function (e) {
      e.exports = {
        loader: 'Loader_loader__gANhr',
        spinner: 'Loader_spinner__RHv3O',
        spin: 'Loader_spin__p8FlS',
      };
    },
    1047: function (e) {
      e.exports = {
        pagination: 'Pagination_pagination__c7olK',
        prevNext: 'Pagination_prevNext__vhJsk',
        currentPage: 'Pagination_currentPage__Ol4TJ',
      };
    },
    5032: function (e) {
      e.exports = {
        searchResults: 'SearchResults_searchResults__cz9DS',
        cardContainer: 'SearchResults_cardContainer__gWi2q',
      };
    },
    1263: function (e) {
      e.exports = {
        search: 'Search_search__y4cRQ',
        input: 'Search_input__lDrmm',
        button: 'Search_button__50o72',
      };
    },
    334: function (e) {
      e.exports = {
        themeToggle: 'ThemeToggle_themeToggle__KUJZY',
        active: 'ThemeToggle_active__nB1cK',
      };
    },
    8650: function (e) {
      e.exports = {
        main: 'styles_main__8wAdZ',
        topSection: 'styles_topSection__jJhg4',
        bottomSection: 'styles_bottomSection__ubeog',
        leftSection: 'styles_leftSection__RngzN',
        rightSection: 'styles_rightSection__7jRuz',
        closeButton: 'styles_closeButton__8aHRJ',
        light: 'styles_light___nVIj',
        dark: 'styles_dark__OMw8M',
        themeToggle: 'styles_themeToggle__MqjVd',
        mainContent: 'styles_mainContent__WUBSZ',
        blur: 'styles_blur__r_30j',
      };
    },
  },
  function (e) {
    e.O(0, [644, 451, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
