(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [585],
  {
    3717: function (e, s, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/details/[id]',
        function () {
          return i(5538);
        },
      ]);
    },
    9482: function (e, s, i) {
      'use strict';
      var n = i(5893);
      i(7294);
      var a = i(4215),
        t = i.n(a);
      s.Z = () =>
        (0, n.jsx)('div', {
          className: t().loader,
          children: (0, n.jsx)('div', { className: t().spinner }),
        });
    },
    5538: function (e, s, i) {
      'use strict';
      i.r(s);
      var n = i(5893),
        a = i(7294),
        t = i(1163),
        r = i(3927),
        l = i(5007),
        c = i(4468),
        d = i(8114),
        _ = i(3611),
        o = i.n(_),
        h = i(9482);
      s.default = () => {
        let e = (0, t.useRouter)(),
          { id: s } = e.query,
          { data: i, isLoading: _ } = (0, r.jv)(s),
          u = (0, l.I0)(),
          { theme: x } = (0, d.F)();
        return ((0, a.useEffect)(() => {
          i && u((0, c.oN)(i));
        }, [i, u]),
        _)
          ? (0, n.jsx)(h.Z, {})
          : i
            ? (0, n.jsxs)('div', {
                className: ''
                  .concat(o().details, ' ')
                  .concat('dark' === x ? o().dark : o().light),
                children: [
                  (0, n.jsx)('button', {
                    onClick: () => {
                      e.push('/');
                    },
                    className: o().closeButton,
                    children: 'Close',
                  }),
                  (0, n.jsx)('h2', { children: i.name }),
                  (0, n.jsxs)('div', {
                    className: o().container,
                    children: [
                      (0, n.jsx)('div', {
                        className: o().box,
                        children: (0, n.jsx)('img', {
                          src: i.image,
                          alt: i.name,
                          className: o().image,
                        }),
                      }),
                      (0, n.jsxs)('div', {
                        className: o().description,
                        children: [
                          (0, n.jsxs)('p', {
                            children: [
                              (0, n.jsx)('b', { children: 'Birth Year:' }),
                              ' ',
                              i.description,
                            ],
                          }),
                          (0, n.jsxs)('p', {
                            children: [
                              (0, n.jsx)('b', { children: 'Height:' }),
                              ' ',
                              i.height,
                            ],
                          }),
                          (0, n.jsxs)('p', {
                            children: [
                              (0, n.jsx)('b', { children: 'Weight:' }),
                              ' ',
                              i.mass,
                            ],
                          }),
                          (0, n.jsxs)('p', {
                            children: [
                              (0, n.jsx)('b', { children: 'Gender:' }),
                              ' ',
                              i.gender,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, n.jsx)('p', { children: 'Details not available' });
      };
    },
    4215: function (e) {
      e.exports = {
        loader: 'Loader_loader__gANhr',
        spinner: 'Loader_spinner__RHv3O',
        spin: 'Loader_spin__p8FlS',
      };
    },
    3611: function (e) {
      e.exports = {
        details: 'details_details__17JQK',
        light: 'details_light__8nAsE',
        dark: 'details_dark__8WgOe',
        closeButton: 'details_closeButton__scAuz',
        image: 'details_image__oB45x',
        flex: 'details_flex__ieaq8',
        container: 'details_container__VscRF',
        description: 'details_description__QuJmh',
      };
    },
    1163: function (e, s, i) {
      e.exports = i(9090);
    },
  },
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 3717));
    }),
      (_N_E = e.O());
  },
]);
