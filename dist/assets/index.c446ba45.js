var Ct = Object.defineProperty,
  kt = Object.defineProperties;
var St = Object.getOwnPropertyDescriptors;
var fe = Object.getOwnPropertySymbols;
var je = Object.prototype.hasOwnProperty,
  Re = Object.prototype.propertyIsEnumerable;
var Te = (a, s, r) =>
    s in a
      ? Ct(a, s, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (a[s] = r),
  x = (a, s) => {
    for (var r in s || (s = {})) je.call(s, r) && Te(a, r, s[r]);
    if (fe) for (var r of fe(s)) Re.call(s, r) && Te(a, r, s[r]);
    return a;
  },
  R = (a, s) => kt(a, St(s));
var ne = (a, s) => {
  var r = {};
  for (var n in a) je.call(a, n) && s.indexOf(n) < 0 && (r[n] = a[n]);
  if (a != null && fe)
    for (var n of fe(a)) s.indexOf(n) < 0 && Re.call(a, n) && (r[n] = a[n]);
  return r;
};
import {
  r as l,
  u as J,
  j as e,
  a as At,
  C as P,
  p as be,
  N as ce,
  b as De,
  c as t,
  d as Y,
  R as ee,
  e as Lt,
  L as q,
  D as Et,
  A as Mt,
  T as Ze,
  f as Ot,
  g as zt,
  h as Bt,
  P as Ft,
  i as Ht,
  k as Vt,
  l as Pt,
  m as Dt,
  n as Q,
  F as z,
  o as qt,
  q as It,
  s as _e,
  t as jt,
  v as Rt,
  w as Tt,
  M as Zt,
  x as _t,
  y as Ut,
  G as Wt,
  z as Gt,
  B as Jt,
  E as Kt,
  H as I,
  I as Qt,
  J as Yt,
} from './vendor.60ae090e.js';
const Xt = function () {
  const s = document.createElement('link').relList;
  if (s && s.supports && s.supports('modulepreload')) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) n(c);
  new MutationObserver((c) => {
    for (const i of c)
      if (i.type === 'childList')
        for (const o of i.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(c) {
    const i = {};
    return (
      c.integrity && (i.integrity = c.integrity),
      c.referrerpolicy && (i.referrerPolicy = c.referrerpolicy),
      c.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : c.crossorigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function n(c) {
    if (c.ep) return;
    c.ep = !0;
    const i = r(c);
    fetch(c.href, i);
  }
};
Xt();
const B = l.exports.createContext(),
  $t = ({ children: a }) => {
    const s = J(),
      [r, n] = l.exports.useState(!1),
      [c, i] = l.exports.useState(!1),
      [o, d] = l.exports.useState(!1),
      [h, p] = l.exports.useState(!1),
      [m, b] = l.exports.useState(!1),
      [v, A] = l.exports.useState(!1),
      [w, N] = l.exports.useState(!1),
      [k, y] = l.exports.useState(!1),
      [E, O] = l.exports.useState(!1),
      [L, D] = l.exports.useState(!1),
      [j, S] = l.exports.useState(!1),
      [G, g] = l.exports.useState(!1),
      [f, C] = l.exports.useState([]),
      [V, H] = l.exports.useState(!1),
      [ae, le] = l.exports.useState(!1),
      [u, re] = l.exports.useState([]),
      [Le, Ee] = l.exports.useState([]),
      [de, Me] = l.exports.useState(''),
      [Oe, ze] = l.exports.useState([]),
      [me, Be] = l.exports.useState(''),
      [Fe, He] = l.exports.useState([]),
      [he, pe] = l.exports.useState(!0),
      [ue, xe] = l.exports.useState(!0),
      [Ve, Pe] = l.exports.useState([]),
      [tt, at] = l.exports.useState([]),
      [st, lt] = l.exports.useState(!1),
      [rt, it] = l.exports.useState(null),
      [nt, ct] = l.exports.useState(null),
      [ot, dt] = l.exports.useState(null),
      mt = (M) => {
        y((K) => !K);
      };
    function ht() {
      localStorage.removeItem('token'),
        localStorage.removeItem('id'),
        localStorage.removeItem('code'),
        localStorage.removeItem('msg'),
        s('/signin');
    }
    const ie = localStorage.getItem('supplier_id');
    async function pt(M) {
      return fetch('http://supplier.hubmine.mx/api/auth/send_register/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(M),
      })
        .then((K) => K.json())
        .then((K) => {
          if (K.code) {
            C(K);
            let yt = K;
            sessionStorage.setItem('code', yt.code),
              i(!0),
              setTimeout(() => {
                i(!1), s('/code/validation');
              }, 1500);
          } else
            g(!0),
              i(!0),
              setTimeout(() => {
                i(!1), g(!1);
              }, 5e3);
        });
    }
    const ut = async () => {
      fetch(
        `http://supplier.hubmine.mx/api/suppliers/product/list?supplier-id=${ie}`
      )
        .then((M) => M.json())
        .then((M) => {
          re(M);
        }),
        H(!1);
    };
    l.exports.useEffect(() => {
      ut();
    }, [V, ie]);
    const xt = (M) => {
        const K = M.target.value;
        return Me(K);
      },
      ft = (M) => {
        const K = M.target.value;
        return Be(K);
      },
      bt = async () => {
        fetch('http://supplier.hubmine.mx/api/suppliers/list-countries')
          .then((M) => M.json())
          .then((M) => Ee(M));
      };
    l.exports.useEffect(() => {
      bt();
    }, []);
    const vt = async () => {
      fetch(
        `http://supplier.hubmine.mx/api/suppliers/list-states?country-id=${de}`
      )
        .then((M) => M.json())
        .then((M) => {
          ze(M), pe(!1);
        });
    };
    l.exports.useEffect(() => {
      vt();
    }, [de, he]);
    const gt = async () => {
      fetch(
        `http://supplier.hubmine.mx/api/suppliers/list-cities?state-id=${me}`
      )
        .then((M) => M.json())
        .then((M) => {
          He(M), xe(!1);
        });
    };
    l.exports.useEffect(() => {
      gt();
    }, [me, ue]);
    const Nt = async () => {
      fetch('http://supplier.hubmine.mx/api/suppliers/plant/list/type-places/')
        .then((M) => M.json())
        .then((M) => Pe(M));
    };
    l.exports.useEffect(() => {
      Nt();
    }, []);
    const wt = async () => {
      fetch(
        `http://supplier.hubmine.mx/api/suppliers/plant/list?supplier-id=${ie}`
      )
        .then((M) => M.json())
        .then((M) => at(M)),
        le(!1);
    };
    return (
      l.exports.useEffect(() => {
        wt();
      }, [ae, ie]),
      e(B.Provider, {
        value: {
          loading: c,
          setLoading: i,
          eye: k,
          setEye: y,
          toggleEye: mt,
          newsletterModalOpen: E,
          setNewsletterModalOpen: O,
          errorMenssage: j,
          setErrorMenssage: S,
          logout: ht,
          savedCode: f,
          setSavedCode: C,
          codeGenerator: pt,
          errorApi: G,
          setErrorApi: g,
          sidebarOpen: r,
          setSidebarOpen: n,
          formatInvalid: h,
          setFormatInvalid: p,
          sizeInvalid: m,
          setSizeInvalid: b,
          bannerErrorOpen: v,
          setBannerErrorOpen: A,
          bannerSuccessOpen: w,
          setBannerSuccessOpen: N,
          dangerModalOpen: L,
          setDangerModalOpen: D,
          productReload: V,
          setProductReload: H,
          plantReload: ae,
          setPlantReload: le,
          productList: u,
          country: Le,
          handleCountry: xt,
          state: Oe,
          handleState: ft,
          city: Fe,
          stateEnable: he,
          setStateEnable: pe,
          cityEnable: ue,
          setCityEnable: xe,
          placeList: Ve,
          supplierId: ie,
          plantList: tt,
          dropdownOpen: o,
          setDropdownOpen: d,
          requiredFile: st,
          setRequiredFile: lt,
          lng: rt,
          setLng: it,
          lat: nt,
          setLat: ct,
          mapAddress: ot,
          setMapAddress: dt,
        },
        children: a,
      })
    );
  };
const F = () => At('./src/css/tailwind.config.js'),
  oe = (a) => {
    let s = 0,
      r = 0,
      n = 0;
    return (
      a.length === 4
        ? ((s = `0x${a[1]}${a[1]}`),
          (r = `0x${a[2]}${a[2]}`),
          (n = `0x${a[3]}${a[3]}`))
        : a.length === 7 &&
          ((s = `0x${a[1]}${a[2]}`),
          (r = `0x${a[3]}${a[4]}`),
          (n = `0x${a[5]}${a[6]}`)),
      `${+s},${+r},${+n}`
    );
  },
  Ue = (a) =>
    Intl.NumberFormat('en-US', {
      maximumSignificantDigits: 3,
      notation: 'compact',
    }).format(a);
P.register(be);
P.defaults.font.family = '"Inter", sans-serif';
P.defaults.font.weight = '500';
P.defaults.color = F().theme.colors.slate[400];
P.defaults.scale.grid.color = F().theme.colors.slate[100];
P.defaults.plugins.tooltip.titleColor = F().theme.colors.slate[800];
P.defaults.plugins.tooltip.bodyColor = F().theme.colors.slate[800];
P.defaults.plugins.tooltip.backgroundColor = F().theme.colors.white;
P.defaults.plugins.tooltip.borderWidth = 1;
P.defaults.plugins.tooltip.borderColor = F().theme.colors.slate[200];
P.defaults.plugins.tooltip.displayColors = !1;
P.defaults.plugins.tooltip.mode = 'nearest';
P.defaults.plugins.tooltip.intersect = !1;
P.defaults.plugins.tooltip.position = 'nearest';
P.defaults.plugins.tooltip.caretSize = 0;
P.defaults.plugins.tooltip.caretPadding = 20;
P.defaults.plugins.tooltip.cornerRadius = 4;
P.defaults.plugins.tooltip.padding = 8;
P.register({
  id: 'chartAreaPlugin',
  beforeDraw: (a) => {
    if (
      a.config.options.chartArea &&
      a.config.options.chartArea.backgroundColor
    ) {
      const s = a.canvas.getContext('2d'),
        { chartArea: r } = a;
      s.save(),
        (s.fillStyle = a.config.options.chartArea.backgroundColor),
        s.fillRect(r.left, r.top, r.right - r.left, r.bottom - r.top),
        s.restore();
    }
  },
});
function te({ children: a }) {
  return localStorage.getItem('token') ? a : e(ce, { to: '/signin' });
}
function qe({ children: a }) {
  return localStorage.getItem('token') ? e(ce, { to: '/' }) : a;
}
function ea({ children: a }) {
  return sessionStorage.getItem('code') ? a : e(ce, { to: '/signin' });
}
const We = ({ children: a }) =>
    sessionStorage.getItem('id') ? a : e(ce, { to: '/signin' }),
  ta = ({ children: a }) =>
    sessionStorage.getItem('number') ? a : e(ce, { to: '/signin' });
function ve({ children: a, activecondition: s }) {
  const [r, n] = l.exports.useState(s),
    c = () => {
      n(!r);
    };
  return e('li', {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${s && 'bg-slate-900'}`,
    children: a(c, r),
  });
}
function _({ sidebarOpen: a, setSidebarOpen: s }) {
  const r = De(),
    { pathname: n } = r,
    c = l.exports.useRef(null),
    i = l.exports.useRef(null),
    o = localStorage.getItem('sidebar-expanded'),
    [d, h] = l.exports.useState(o === null ? !1 : o === 'true');
  return (
    l.exports.useEffect(() => {
      const p = ({ target: m }) => {
        !i.current ||
          !c.current ||
          !a ||
          i.current.contains(m) ||
          c.current.contains(m) ||
          s(!1);
      };
      return (
        document.addEventListener('click', p),
        () => document.removeEventListener('click', p)
      );
    }),
    l.exports.useEffect(() => {
      const p = ({ keyCode: m }) => {
        !a || m !== 27 || s(!1);
      };
      return (
        document.addEventListener('keydown', p),
        () => document.removeEventListener('keydown', p)
      );
    }),
    l.exports.useEffect(() => {
      localStorage.setItem('sidebar-expanded', d),
        d
          ? document.querySelector('body').classList.add('sidebar-expanded')
          : document.querySelector('body').classList.remove('sidebar-expanded');
    }, [d]),
    t('div', {
      children: [
        e('div', {
          className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
            a ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`,
          'aria-hidden': 'true',
        }),
        t('div', {
          id: 'sidebar',
          ref: i,
          className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
            a ? 'translate-x-0' : '-translate-x-64'
          }`,
          children: [
            t('div', {
              className: 'flex justify-between mb-10 pr-3 sm:px-2',
              children: [
                t('button', {
                  ref: c,
                  className: 'lg:hidden text-slate-500 hover:text-slate-400',
                  onClick: () => s(!a),
                  'aria-controls': 'sidebar',
                  'aria-expanded': a,
                  children: [
                    e('span', {
                      className: 'sr-only',
                      children: 'Close sidebar',
                    }),
                    e('svg', {
                      className: 'w-6 h-6 fill-current',
                      viewBox: '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: e('path', {
                        d: 'M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z',
                      }),
                    }),
                  ],
                }),
                d
                  ? e(Y, {
                      end: !0,
                      to: '/',
                      className: 'block',
                      children: t('svg', {
                        width: '143',
                        height: '32',
                        viewBox: '0 0 143 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          e('path', {
                            d: 'M26.5922 32H5.47462C2.4507 32 0 29.5542 0 26.5363V5.46368C0 2.44581 2.4507 0 5.47462 0H26.5894C29.6134 0 32.0641 2.44581 32.0641 5.46368V26.5363C32.0641 29.5542 29.6134 32 26.5922 32Z',
                            fill: '#0DB1AC',
                          }),
                          e('path', {
                            d: 'M24.4351 22.2469H14.2003C12.3865 22.2469 11.2566 20.3538 12.1732 18.8476L17.2906 10.4352C18.1962 8.94558 20.4364 8.94558 21.3447 10.4352L26.4621 18.8476C27.3787 20.3538 26.2489 22.2469 24.4351 22.2469Z',
                            fill: 'white',
                          }),
                          e('path', {
                            d: 'M17.4347 22.5951H7.54878C5.79867 22.5951 4.70762 20.7656 5.59098 19.3119L10.5339 11.1896C11.409 9.74979 13.5717 9.74979 14.4467 11.1896L19.3897 19.3119C20.2758 20.7684 19.1848 22.5951 17.4347 22.5951Z',
                            fill: '#D8F6F0',
                          }),
                          e('path', {
                            d: 'M39.8646 25.0601V7.77038H43.5201V14.9041H50.9408V7.77038H54.5879V25.0601H50.9408V17.9179H43.5201V25.0601H39.8646ZM65.8498 19.5388V12.0928H69.4462V25.0601H65.9934V22.7046H65.8583C65.5656 23.4645 65.0788 24.0752 64.3978 24.5366C63.7224 24.9981 62.8978 25.2288 61.9242 25.2288C61.0574 25.2288 60.2948 25.0319 59.6364 24.6379C58.9779 24.244 58.4629 23.684 58.0914 22.958C57.7255 22.2319 57.5398 21.3624 57.5342 20.3492V12.0928H61.1305V19.7076C61.1362 20.4731 61.3416 21.0781 61.7469 21.5227C62.1521 21.9674 62.6952 22.1897 63.3762 22.1897C63.8097 22.1897 64.2149 22.0912 64.5919 21.8942C64.969 21.6916 65.2729 21.3933 65.5036 20.9993C65.7401 20.6053 65.8555 20.1185 65.8498 19.5388ZM72.3904 25.0601V7.77038H75.9868V14.2709H76.0965C76.2542 13.922 76.482 13.5674 76.7804 13.2072C77.0843 12.8414 77.4783 12.5375 77.9623 12.2954C78.4519 12.0477 79.0598 11.924 79.7859 11.924C80.7314 11.924 81.6037 12.1716 82.4029 12.6669C83.2021 13.1565 83.8409 13.8966 84.3193 14.8872C84.7977 15.8721 85.0369 17.1075 85.0369 18.5933C85.0369 20.0398 84.8034 21.2611 84.3362 22.2572C83.8747 23.2477 83.2444 23.9991 82.4452 24.5113C81.6515 25.0178 80.7623 25.2711 79.7774 25.2711C79.0795 25.2711 78.4857 25.1557 77.9961 24.9249C77.5121 24.6942 77.1153 24.4044 76.8057 24.0554C76.4962 23.7009 76.2598 23.3435 76.0965 22.9833H75.9362V25.0601H72.3904ZM75.9108 18.5764C75.9108 19.3475 76.0178 20.02 76.2316 20.5941C76.4454 21.1682 76.755 21.6156 77.1602 21.9364C77.5656 22.2516 78.0579 22.4092 78.6377 22.4092C79.223 22.4092 79.7182 22.2487 80.1236 21.9281C80.5288 21.6016 80.8355 21.1513 81.0437 20.5772C81.2576 19.9975 81.3645 19.3305 81.3645 18.5764C81.3645 17.8278 81.2603 17.1694 81.0522 16.601C80.8439 16.0325 80.5372 15.5878 80.1319 15.267C79.7267 14.9462 79.2286 14.7859 78.6377 14.7859C78.0524 14.7859 77.5571 14.9407 77.1519 15.2501C76.7523 15.5597 76.4454 15.9987 76.2316 16.5672C76.0178 17.1356 75.9108 17.8054 75.9108 18.5764Z',
                            fill: 'white',
                          }),
                          e('path', {
                            d: 'M87.4367 25.0601V12.0928H90.8642V14.3807H91.0162C91.2863 13.6209 91.7365 13.0214 92.3669 12.5825C92.9973 12.1435 93.7515 11.924 94.6295 11.924C95.5188 11.924 96.2757 12.1463 96.9004 12.5908C97.5252 13.0298 97.9416 13.6264 98.1499 14.3807H98.2849C98.5494 13.6378 99.0278 13.044 99.7202 12.5993C100.418 12.149 101.243 11.924 102.194 11.924C103.404 11.924 104.386 12.3095 105.14 13.0806C105.9 13.8459 106.28 14.9322 106.28 16.3392V25.0601H102.692V17.0483C102.692 16.328 102.5 15.7877 102.118 15.4275C101.735 15.0672 101.257 14.8872 100.683 14.8872C100.03 14.8872 99.5203 15.0955 99.1545 15.5119C98.7886 15.9228 98.6057 16.4659 98.6057 17.1413V25.0601H95.1191V16.9724C95.1191 16.3365 94.9362 15.8299 94.5703 15.4529C94.2102 15.0757 93.7346 14.8872 93.1437 14.8872C92.744 14.8872 92.3838 14.9885 92.063 15.1911C91.7479 15.388 91.4974 15.6667 91.3117 16.0269C91.126 16.3815 91.0331 16.7979 91.0331 17.2763V25.0601H87.4367ZM109.121 25.0601V12.0928H112.717V25.0601H109.121ZM110.927 10.4213C110.393 10.4213 109.934 10.244 109.551 9.88939C109.174 9.52923 108.986 9.09866 108.986 8.59771C108.986 8.10243 109.174 7.67755 109.551 7.32293C109.934 6.96276 110.393 6.78261 110.927 6.78261C111.462 6.78261 111.918 6.96276 112.295 7.32293C112.678 7.67755 112.869 8.10243 112.869 8.59771C112.869 9.09866 112.678 9.52923 112.295 9.88939C111.918 10.244 111.462 10.4213 110.927 10.4213ZM119.194 17.5634V25.0601H115.598V12.0928H119.025V14.3807H119.177C119.464 13.6264 119.946 13.0298 120.621 12.5908C121.296 12.1463 122.115 11.924 123.078 11.924C123.978 11.924 124.763 12.1209 125.433 12.5149C126.103 12.9089 126.623 13.4718 126.995 14.2033C127.366 14.9293 127.552 15.7961 127.552 16.8036V25.0601H123.956V17.4452C123.961 16.6516 123.759 16.0325 123.348 15.5879C122.937 15.1376 122.371 14.9126 121.651 14.9126C121.167 14.9126 120.739 15.0166 120.368 15.2249C120.002 15.4331 119.715 15.7371 119.507 16.1366C119.304 16.5306 119.2 17.0062 119.194 17.5634ZM136.296 25.3134C134.962 25.3134 133.814 25.0432 132.852 24.5029C131.895 23.957 131.158 23.1859 130.64 22.1897C130.122 21.1879 129.863 20.0032 129.863 18.6356C129.863 17.3016 130.122 16.1309 130.64 15.1236C131.158 14.1162 131.886 13.331 132.826 12.7682C133.772 12.2053 134.881 11.924 136.153 11.924C137.008 11.924 137.804 12.0619 138.542 12.3376C139.285 12.6077 139.932 13.0158 140.483 13.5617C141.041 14.1077 141.474 14.7944 141.784 15.6217C142.093 16.4434 142.248 17.4057 142.248 18.5089V19.4966L133.417 19.505V17.2678H138.863C138.863 16.7501 138.75 16.2914 138.525 15.8918C138.3 15.4922 137.987 15.1799 137.588 14.9547C137.194 14.724 136.735 14.6085 136.212 14.6085C135.666 14.6085 135.182 14.7352 134.76 14.9885C134.343 15.2361 134.017 15.5709 133.78 15.9931C133.544 16.4096 133.423 16.7557 133.417 17.2678V19.505C133.417 20.1467 133.535 20.7011 133.772 21.1682C134.014 21.6354 134.354 21.9956 134.793 22.2487C135.232 22.5021 135.753 22.6287 136.355 22.6287C136.755 22.6287 137.121 22.5725 137.453 22.4598C137.785 22.3473 138.069 22.1785 138.305 21.9533C138.542 21.7282 138.722 21.4525 138.846 21.126L142.172 21.3455C142.003 22.1447 141.657 22.8425 141.134 23.4391C140.616 24.0302 139.946 24.4916 139.124 24.8237C138.308 25.1501 137.365 25.3134 136.296 25.3134Z',
                            fill: 'white',
                          }),
                        ],
                      }),
                    })
                  : e(Y, {
                      end: !0,
                      to: '/',
                      className: 'block',
                      children: t('svg', {
                        width: '33',
                        height: '32',
                        viewBox: '0 0 33 32',
                        fill: 'none',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                          e('path', {
                            d: 'M26.5922 32H5.47462C2.4507 32 0 29.5542 0 26.5363V5.46368C0 2.44581 2.4507 0 5.47462 0H26.5894C29.6134 0 32.0641 2.44581 32.0641 5.46368V26.5363C32.0641 29.5542 29.6134 32 26.5922 32Z',
                            fill: '#0DB1AC',
                          }),
                          e('path', {
                            d: 'M24.4351 22.2469H14.2003C12.3865 22.2469 11.2566 20.3538 12.1732 18.8476L17.2906 10.4352C18.1962 8.94558 20.4364 8.94558 21.3447 10.4352L26.4621 18.8476C27.3787 20.3538 26.2489 22.2469 24.4351 22.2469Z',
                            fill: 'white',
                          }),
                          e('path', {
                            d: 'M17.4347 22.5951H7.54878C5.79867 22.5951 4.70762 20.7656 5.59098 19.3119L10.5339 11.1896C11.409 9.74979 13.5717 9.74979 14.4467 11.1896L19.3897 19.3119C20.2758 20.7684 19.1848 22.5951 17.4347 22.5951Z',
                            fill: '#D8F6F0',
                          }),
                        ],
                      }),
                    }),
              ],
            }),
            e('div', {
              className: 'space-y-8',
              children: e('div', {
                children: t('ul', {
                  className: 'mt-3',
                  children: [
                    e(ve, {
                      activecondition: n === '/' || n.includes('dashboard'),
                      children: (p, m) =>
                        t(ee.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                (n === '/' || n.includes('dashboard')) &&
                                'hover:text-slate-200'
                              }`,
                              onClick: (b) => {
                                b.preventDefault(), d ? p() : h(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              (n === '/' ||
                                                n.includes('dashboard')) &&
                                              '!text-primary'
                                            }`,
                                            d: 'M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              (n === '/' ||
                                                n.includes('dashboard')) &&
                                              'text-secondary'
                                            }`,
                                            d: 'M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              (n === '/' ||
                                                n.includes('dashboard')) &&
                                              'text-white'
                                            }`,
                                            d: 'M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Dashboard',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
                                      }`,
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            e('div', {
                              className:
                                'lg:hidden lg:sidebar-expanded:block 2xl:block',
                              children: e('ul', {
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(Y, {
                                    end: !0,
                                    to: '/',
                                    className: ({ isActive: b }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (b ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'General',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(ve, {
                      activecondition: n.includes('product'),
                      children: (p, m) =>
                        t(ee.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                n.includes('product') && 'hover:text-slate-200'
                              }`,
                              onClick: (b) => {
                                b.preventDefault(), d ? p() : h(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              n.includes('product') &&
                                              'text-slate-400'
                                            }`,
                                            d: 'M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-700 ${
                                              n.includes('product') &&
                                              '!text-secondary'
                                            }`,
                                            d: 'M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              n.includes('product') &&
                                              'text-primary'
                                            }`,
                                            d: 'M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Productos',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
                                      }`,
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            e('div', {
                              className:
                                'lg:hidden lg:sidebar-expanded:block 2xl:block',
                              children: t('ul', {
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: [
                                  e('li', {
                                    className: 'mb-1 last:mb-0',
                                    children: e(Y, {
                                      end: !0,
                                      to: '/products/create',
                                      className: ({ isActive: b }) =>
                                        'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                        (b ? '!text-primary' : ''),
                                      children: e('span', {
                                        className:
                                          'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Crear Productos',
                                      }),
                                    }),
                                  }),
                                  e('li', {
                                    className: 'mb-1 last:mb-0',
                                    children: e(Y, {
                                      end: !0,
                                      to: '/products/list',
                                      className: ({ isActive: b }) =>
                                        'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                        (b ? '!text-primary' : ''),
                                      children: e('span', {
                                        className:
                                          'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Lista de productos',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(ve, {
                      activecondition: n.includes('plant'),
                      children: (p, m) =>
                        t(ee.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                n.includes('plant') && 'hover:text-slate-200'
                              }`,
                              onClick: (b) => {
                                b.preventDefault(), d ? p() : h(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('circle', {
                                            className: `fill-current text-slate-400 ${
                                              n.includes('plant') &&
                                              'text-secondary'
                                            }`,
                                            cx: '18.5',
                                            cy: '5.5',
                                            r: '4.5',
                                          }),
                                          e('circle', {
                                            className: `fill-current text-slate-600 ${
                                              n.includes('plant') &&
                                              'text-primary'
                                            }`,
                                            cx: '5.5',
                                            cy: '5.5',
                                            r: '4.5',
                                          }),
                                          e('circle', {
                                            className: `fill-current text-slate-600 ${
                                              n.includes('plant') &&
                                              'text-primary'
                                            }`,
                                            cx: '18.5',
                                            cy: '18.5',
                                            r: '4.5',
                                          }),
                                          e('circle', {
                                            className: `fill-current text-slate-400 ${
                                              n.includes('plant') &&
                                              'text-secondary'
                                            }`,
                                            cx: '5.5',
                                            cy: '18.5',
                                            r: '4.5',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Planta',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
                                      }`,
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            e('div', {
                              className:
                                'lg:hidden lg:sidebar-expanded:block 2xl:block',
                              children: e('ul', {
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(Y, {
                                    end: !0,
                                    to: '/plant/create',
                                    className: ({ isActive: b }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (b ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'Crear planta recolecci\xF3n',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            e('div', {
                              className:
                                'lg:hidden lg:sidebar-expanded:block 2xl:block',
                              children: e('ul', {
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(Y, {
                                    end: !0,
                                    to: '/plant/list',
                                    className: ({ isActive: b }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (b ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'Lista de plantas',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                    e(ve, {
                      activecondition: n.includes('company'),
                      children: (p, m) =>
                        t(ee.Fragment, {
                          children: [
                            e('a', {
                              href: '#0',
                              className: `block text-slate-200 hover:text-white truncate transition duration-150 ${
                                n.includes('company') && 'hover:text-slate-200'
                              }`,
                              onClick: (b) => {
                                b.preventDefault(), d ? p() : h(!0);
                              },
                              children: t('div', {
                                className: 'flex items-center justify-between',
                                children: [
                                  t('div', {
                                    className: 'flex items-center',
                                    children: [
                                      t('svg', {
                                        className: 'shrink-0 h-6 w-6',
                                        viewBox: '0 0 24 24',
                                        children: [
                                          e('path', {
                                            className: `fill-current text-slate-600 ${
                                              n.includes('company') &&
                                              '!text-primary'
                                            }`,
                                            d: 'M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z',
                                          }),
                                          e('path', {
                                            className: `fill-current text-slate-400 ${
                                              n.includes('company') &&
                                              'text-secondary'
                                            }`,
                                            d: 'M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z',
                                          }),
                                        ],
                                      }),
                                      e('span', {
                                        className:
                                          'text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                        children: 'Mi compa\xF1ia',
                                      }),
                                    ],
                                  }),
                                  e('div', {
                                    className: 'flex shrink-0 ml-2',
                                    children: e('svg', {
                                      className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                        m && 'transform rotate-180'
                                      }`,
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            e('div', {
                              className:
                                'lg:hidden lg:sidebar-expanded:block 2xl:block',
                              children: e('ul', {
                                className: `pl-9 mt-1 ${!m && 'hidden'}`,
                                children: e('li', {
                                  className: 'mb-1 last:mb-0',
                                  children: e(Y, {
                                    end: !0,
                                    to: '/company/profile',
                                    className: ({ isActive: b }) =>
                                      'block text-slate-400 hover:text-slate-200 transition duration-150 truncate ' +
                                      (b ? '!text-primary' : ''),
                                    children: e('span', {
                                      className:
                                        'text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200',
                                      children: 'Perfil',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
            }),
            e('div', {
              className:
                'pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto',
              children: e('div', {
                className: 'px-3 py-2',
                children: t('button', {
                  onClick: () => h(!d),
                  children: [
                    e('span', {
                      className: 'sr-only',
                      children: 'Expand / collapse sidebar',
                    }),
                    t('svg', {
                      className:
                        'w-6 h-6 fill-current sidebar-expanded:rotate-180',
                      viewBox: '0 0 24 24',
                      children: [
                        e('path', {
                          className: 'text-slate-400',
                          d: 'M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z',
                        }),
                        e('path', {
                          className: 'text-slate-600',
                          d: 'M3 23H1V1h2z',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
const Ge = ee.createContext({ parent: {} });
function aa() {
  const a = l.exports.useRef(!0);
  return (
    l.exports.useEffect(() => {
      a.current = !1;
    }, []),
    a.current
  );
}
function Je(v) {
  var A = v,
    {
      show: a,
      enter: s = '',
      enterStart: r = '',
      enterEnd: n = '',
      leave: c = '',
      leaveStart: i = '',
      leaveEnd: o = '',
      appear: d,
      unmountOnExit: h,
      tag: p = 'div',
      children: m,
    } = A,
    b = ne(A, [
      'show',
      'enter',
      'enterStart',
      'enterEnd',
      'leave',
      'leaveStart',
      'leaveEnd',
      'appear',
      'unmountOnExit',
      'tag',
      'children',
    ]);
  const w = s.split(' ').filter((g) => g.length),
    N = r.split(' ').filter((g) => g.length),
    k = n.split(' ').filter((g) => g.length),
    y = c.split(' ').filter((g) => g.length),
    E = i.split(' ').filter((g) => g.length),
    O = o.split(' ').filter((g) => g.length),
    L = h;
  function D(g, f) {
    f.length && g.classList.add(...f);
  }
  function j(g, f) {
    f.length && g.classList.remove(...f);
  }
  const S = ee.useRef(null);
  return e(Lt, {
    appear: d,
    nodeRef: S,
    unmountOnExit: L,
    in: a,
    addEndListener: (g) => {
      S.current.addEventListener('transitionend', g, !1);
    },
    onEnter: () => {
      L || (S.current.style.display = null), D(S.current, [...w, ...N]);
    },
    onEntering: () => {
      j(S.current, N), D(S.current, k);
    },
    onEntered: () => {
      j(S.current, [...k, ...w]);
    },
    onExit: () => {
      D(S.current, [...y, ...E]);
    },
    onExiting: () => {
      j(S.current, E), D(S.current, O);
    },
    onExited: () => {
      j(S.current, [...O, ...y]), L || (S.current.style.display = 'none');
    },
    children: e(
      p,
      R(x({ ref: S }, b), {
        style: { display: L ? null : 'none' },
        children: m,
      })
    ),
  });
}
function T(n) {
  var c = n,
    { show: a, appear: s } = c,
    r = ne(c, ['show', 'appear']);
  const { parent: i } = l.exports.useContext(Ge),
    o = aa();
  return a === void 0
    ? e(Je, x({ appear: i.appear || !i.isInitialRender, show: i.show }, r))
    : e(Ge.Provider, {
        value: { parent: { show: a, isInitialRender: o, appear: s } },
        children: e(Je, x({ appear: s, show: a }, r)),
      });
}
function sa({ align: a }) {
  const [s, r] = l.exports.useState(!1),
    n = l.exports.useRef(null),
    c = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const i = ({ target: o }) => {
        !c.current ||
          !s ||
          c.current.contains(o) ||
          n.current.contains(o) ||
          r(!1);
      };
      return (
        document.addEventListener('click', i),
        () => document.removeEventListener('click', i)
      );
    }),
    l.exports.useEffect(() => {
      const i = ({ keyCode: o }) => {
        !s || o !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }),
    t('div', {
      className: 'relative inline-flex',
      children: [
        t('button', {
          ref: n,
          className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
            s && 'bg-slate-200'
          }`,
          'aria-haspopup': 'true',
          onClick: () => r(!s),
          'aria-expanded': s,
          children: [
            e('span', { className: 'sr-only', children: 'Notifications' }),
            t('svg', {
              className: 'w-4 h-4',
              viewBox: '0 0 16 16',
              xmlns: 'http://www.w3.org/2000/svg',
              children: [
                e('path', {
                  className: 'fill-current text-slate-500',
                  d: 'M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z',
                }),
                e('path', {
                  className: 'fill-current text-slate-400',
                  d: 'M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z',
                }),
              ],
            }),
            e('div', {
              className:
                'absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full',
            }),
          ],
        }),
        e(T, {
          className: `origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            a === 'right' ? 'right-0' : 'left-0'
          }`,
          show: s,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('div', {
            ref: c,
            onFocus: () => r(!0),
            onBlur: () => r(!1),
            children: [
              e('div', {
                className:
                  'text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4',
                children: 'Notifications',
              }),
              t('ul', {
                children: [
                  e('li', {
                    className: 'border-b border-slate-200 last:border-0',
                    children: t(q, {
                      className: 'block py-2 px-4 hover:bg-slate-50',
                      to: '#0',
                      onClick: () => r(!s),
                      children: [
                        t('span', {
                          className: 'block text-sm mb-2',
                          children: [
                            '\u{1F4E3} ',
                            e('span', {
                              className: 'font-medium text-slate-800',
                              children: 'Edit your information in a swipe',
                            }),
                            ' Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
                          ],
                        }),
                        e('span', {
                          className: 'block text-xs font-medium text-slate-400',
                          children: 'Feb 12, 2021',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'border-b border-slate-200 last:border-0',
                    children: t(q, {
                      className: 'block py-2 px-4 hover:bg-slate-50',
                      to: '#0',
                      onClick: () => r(!s),
                      children: [
                        t('span', {
                          className: 'block text-sm mb-2',
                          children: [
                            '\u{1F4E3} ',
                            e('span', {
                              className: 'font-medium text-slate-800',
                              children: 'Edit your information in a swipe',
                            }),
                            ' Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
                          ],
                        }),
                        e('span', {
                          className: 'block text-xs font-medium text-slate-400',
                          children: 'Feb 9, 2021',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'border-b border-slate-200 last:border-0',
                    children: t(q, {
                      className: 'block py-2 px-4 hover:bg-slate-50',
                      to: '#0',
                      onClick: () => r(!s),
                      children: [
                        t('span', {
                          className: 'block text-sm mb-2',
                          children: [
                            '\u{1F680}',
                            e('span', {
                              className: 'font-medium text-slate-800',
                              children: 'Say goodbye to paper receipts!',
                            }),
                            ' Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
                          ],
                        }),
                        e('span', {
                          className: 'block text-xs font-medium text-slate-400',
                          children: 'Jan 24, 2020',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function Ke({ align: a }) {
  const [s, r] = l.exports.useState(!1),
    n = l.exports.useRef(null),
    c = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const i = ({ target: o }) => {
        !c.current ||
          !s ||
          c.current.contains(o) ||
          n.current.contains(o) ||
          r(!1);
      };
      return (
        document.addEventListener('click', i),
        () => document.removeEventListener('click', i)
      );
    }),
    l.exports.useEffect(() => {
      const i = ({ keyCode: o }) => {
        !s || o !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }),
    t('div', {
      className: 'relative inline-flex',
      children: [
        t('button', {
          ref: n,
          className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${
            s && 'bg-slate-200'
          }`,
          'aria-haspopup': 'true',
          onClick: () => r(!s),
          'aria-expanded': s,
          children: [
            e('span', {
              className: 'sr-only',
              children: '\xBFNecesitas ayuda?',
            }),
            e('svg', {
              className: 'w-4 h-4',
              viewBox: '0 0 16 16',
              xmlns: 'http://www.w3.org/2000/svg',
              children: e('path', {
                className: 'fill-current text-slate-500',
                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
              }),
            }),
          ],
        }),
        e(T, {
          className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            a === 'right' ? 'right-0' : 'left-0'
          }`,
          show: s,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('div', {
            ref: c,
            onFocus: () => r(!0),
            onBlur: () => r(!1),
            children: [
              e('div', {
                className:
                  'text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4',
                children: '\xBFNecesitas ayuda?',
              }),
              t('ul', {
                children: [
                  e('li', {
                    children: t(q, {
                      className:
                        'font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3',
                      to: '#0',
                      onClick: () => r(!s),
                      children: [
                        t('svg', {
                          className:
                            'w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2',
                          viewBox: '0 0 12 12',
                          children: [
                            e('rect', {
                              y: '3',
                              width: '12',
                              height: '9',
                              rx: '1',
                            }),
                            e('path', { d: 'M2 0h8v2H2z' }),
                          ],
                        }),
                        e('span', { children: 'Documentaci\xF3n' }),
                      ],
                    }),
                  }),
                  e('li', {
                    children: t(q, {
                      className:
                        'font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3',
                      to: '#0',
                      onClick: () => r(!s),
                      children: [
                        e('svg', {
                          className:
                            'w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2',
                          viewBox: '0 0 12 12',
                          children: e('path', {
                            d: 'M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z',
                          }),
                        }),
                        e('span', { children: 'Soporte' }),
                      ],
                    }),
                  }),
                  e('li', {}),
                ],
              }),
            ],
          }),
        }),
      ],
    })
  );
}
var Qe =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoBAMAAACIy3zmAAAAGFBMVEUZmaj////v7+8Ej6BCq7gOlaXP6eyPzNNPOL5hAAAOS0lEQVR42uzdS1PbyBYA4A6iYRv1eORtpCFkq7q28BZjCFvdtBVvUSBki8ch/P3R27KttvrdrSpOpeqWuRnx1clRP45kCbhloKAM4Y/B89vb7S2o4vb27e35Oft/JBx5+xFIO5bvu96v37dwMpkkSY1OkuxjfHv/9sO1EO2iy7frAgz2A0I8icDpH98ytJ/l2JlEcQxIkeBJeJ+7bUG76O0aT8jgOuGT6PRPXt02oNEviKM+chExniz/BK4F6F/XHXVMTDeeZMWNDKO9axwBpsDR6b/ZEcyh0W/KwtjNdnSfIlNof3w9YSYXMcmSbQTto99OBDgDh19NoP3LF840lzUyOU+1o90vdxEQCrxca0ajJyxozoeRP1rR2agRA+GAk3tOdPW/fvVzqo9IqJzbo8g50++tP3Kgfe9VkjkrkZWvB+1dR0Ba4NNUA9r37iSa80EkVY+WbAbAKdRK0dLNea59tWjvVbq5PBsVotGLAnOmPleJVmPO1Ge+MvSTInM2y3xFitBjHKtCw+hfpAQ9dpSZM3VYqGWj0SIECgNOUwXo1wgojWzgk45+UmzO1NnJSImmW8j6XxzV5qys13I3Ad4iVo4GzjSVin4JgYbAK1ciehQBLYFvkDS058R60FlZS0O/hkBTwJUvCX0RAW2By0WIMFpbcRSpjtdS0PqKoywQJAE9ioDWKEYQQTRaxHrRxcpJEP0QAs3hnCFB9BgD7ZGsBdGbUD8aznwhtO6zsD4Xhbqmus/CKqa+wCbgwkiitwsnHrS3MGOuNox86IfQEBrgM8SJ9hxgLMKUE20u0dkMc4640B4GBiNZc6F/hibRME81M9psogHIF9bMaLOJLhfWrGiTQ0eV6pQZ/RCaRmdLVEa0+UTnYzUjehSaRzv1Yo8WvTBvzlYgbF1TGxJN7pIR0JsYWJFqlp3LOAJWBF4zoO1IdL5bRNRo0zN4a9mUUqM/hbagnTNEi14Aa6Lc4lKgR6E9aGdOibblNCxihqjQXmKRudzB9KM/hTahi1OxH70AVsWSJtO2zIbtWbEX/TO2C+2sUC8aOcCyiP3erukotA0N532bAH8TW4ee9aEvIbAu4rQHfRHahy6n8iPojX3mZlVNQnsWVse2PgjoUWgj2rk5iraxOrb10Y1GiZXoetfVjbazOpr66EbbN7O0twIEtGOpGcTkTI85qgPiiD04uzadaI5VKQxv2YP9OyfwOyKhOfYsuP5iIUsg9nNnSuqa8uxZpi5PsI9SOCVsAj5xjB0rLrTH/JucD91on2c6/M6HZp/EZt1onsUSvNKFjv1ONNeApy3TzroTzbUN15Zp+K0LzXVtSF+m83HqEH3JtcLTlmkA0w403wpvxofm+F3OvAPN11laappcitH1AM15uXN7VZUhAq4756aHaN6u9OSMvTj4vnPupAdo3k0LZK9qj68v68z30e4D76ZlpeU0zNNzcpBp7n34TBcazPa7pvz7cG2ZLpYfO5uAcWh/pvPlxw6a/+oQe6Yvec/5D7togba0vkw3v6rONP8lLX013Uy/FVrggqfGTON0By3QD9OYabzeQX+Kh5Bp+P822hdo8WrMdJ0gIHoe6sx03WUp0ZeJzkxfcqOTtIXmnw/1ZrqaE4Hoeai1pqs5EYieh1ozXe2jgfCdpTozXZ2J5XoaDiXT8XYTIHIebjM9mjTR2u0umh829+gKoJ11gxa6qNVkepPAOrZd63HU/BDPJaDnDVpk8NhmunVixF0dDkcCGhZ3RALh67Qznehynwhor7XgCSGuOtDgOJpwJJrOwrJBU0zizpJ0qWrOnGn3d/eR7ij+BZK6pin+ueA07R3JqDNNHAopumVwXaEpBo/eX8iUaYG+ZDF85OiPIeVMpDjTLqKY5E4qNEWTd+bqyDTFMFZcugV0I96VlkzTSGYVeiEdzZvpfyiWTGV50FSSpkw/UiyZfhRomglKU6Yp0E5adE2/hEPKdN77yNAf40Flel6gP8dDynTesAGB/wqGlOmcAuh2tRZlelagF8PK9LSoaTioTOdXXkBAdWsOIzpUiIZphqbaitOgN9s9yHZ9NW7tTNZS0DhHj2Shve0epMXb7lLuXSloZ52hL2SVh4SgQs8z9KeBoeEHF/g0f9EmNPhflunN0NBXWaaHhs6mREB3V6xNmZ4iQHejt03oOEPDwaEDQHeBuYX+9VbHHxFf52Ho0D+Y0e15ebdVNm4GfNhqqt8dXI4/Mr1ToeEa0F0F2KI/EldAmyipo91Ub36I22uP7sNQoR0OdExCM62n/45F0CMVaKAUPVeDVpvpmyFm+gbQXSTqREMzmYZn4HM8tEzD74Dq71lV0+BKDVptpq/ABgytpsFMBG0o06rQ75nuQN8Nr6aXImhTmT5Vg1ad6evhZXoJ4PBqmjasyjQHOjRe0+zolgKv+dHtw6hHe06ziw79vaY6rqPdVG++4b7TVO8+jCo0OcbNQHTabqo3x5DUVJeL1tVheke/o9/R72gb0EET7Xvtmh/6BtHbbvje80hG27++7U+j7dL31JfTVOdAt7rh0W5TfZP09Kfn3U311mFo0aw7l1HY3HrOuMqDuwumrsMY3W71r6f/sm9j+74b7yiPAfbyVgPsMMH3Xp6+Xt7j8Gp6iFcCMvTPeGg1Db+Bh3hwo8cJuIiHVtPOHNA95/b92rg4ejy8TAvd72GqpjP04EYPnIJLOLSaTlIQmEEL7FxiF/iMaPKt50w3fXcfhgodZmjG2zZb3fCpv3fT9+/76k+7P33f/NglNNUZd+NLF7isN8hePteRijSTOg9DhZ4h4A7u/ukc/c/Q0FcBcGm+b2bV/dMnGVraty90oW8y9HhgaLweINrJ0VT3IluETtIMjRi/cGb6pu/4R/7FYLav9pFv+maK7sNQfbUP5Wi2L1GS70JgCv6bvmcF+lHSKo8pWktTxrsQVgX679gsmi3T8FvxZffRoNDgQ4GmGahp9ojNObb3pJipLxOdP9QIBMFlKDfTf22vAe0+ykgKOn+kYv6YLigX/XjQp5CJzp/ICuie8GcPOr9EmaH9jdyaVouelWiaZ3xbk+niyfOA7hF/1qCL10kAuoea2pPpeYUeh8OpaSet0EEynEwnboWm6NdYg5426M1w0KsaHfRfLLKlpuFJg+4fPmzJdPl3Ad0DZK1Brxt0/5JJJbp5VDoFumx8g4MrD3396SiuAwuguw/Ti56i7csNHunR5P40E7r7ML2OVQvd24Rs9T28vv40Fbr7MI+9g0frNRK9ZyJLh4kOzdVhKl8pV6F7W2OWoKuXOwKX6ky0BD3decvIZhjo6j0j4GDYtBidN2pa6L4z0Q50/ergCt33Bh470NV52Lw5ZzEE9HTvdT+bAaCbdzSDw3WQveiTvUz3nIlWoMsHqrffBpXYj4733wbVs0+0Ab19LVmDPtZmShIW9OcJTqLWH4qH+zXo5Mg/ODw7QB/ZJ2IAPjCgvevdOKX/T0cxiI40l/x9NCL+bXj+49nVFM+XLzF5ajlAk6eXZO1qDPIwtkSHaGLDN3a1BiQ2eTvQxKK2BT0PDtHE3YtmtENeLR2iiUVtCXqJutCfY5vR+WPrO9Ck89YOdL4R70Ajx2Z0nHaiSWtqK0aPYi3dhSa8TsIO9EnQjSZsFJNUp5kw8ha9pQZdr6fJb5RzznSiH0LytZaO940HPmEmn9zqi+uIfKG2E028IjDRF9GxKwCdaPIVgRhq+nN0Vu5EC7xjVW1UO63uTAu9NUwlen4ELfJyR5WR+EfQltZHvQ/vRgcXVtZH3YQgoD1oIzpOj6LtrI+ZexRt5fjh3PSgvcTe6iCiXfvqI1tK96Htqw/nJthH7z1QJkDWjR9x8zScrk1AgfZfLauPfFXahxZ65bGKyJ/K14sWeSO2ipi6FGj/wapUF7da9Wd6bNVQXWyr+9FWTeXlAq8fbdVUXt7gRIFGC7tOQyp08GBNfTgn1Gh7dl3Vc8do0NacivU+iwYdjCNLTsM1AzpYWJHq5r3lVGjfjg1uc6/zPnp/PV19XNgx3u2pSJuAKp4sSDWeIyY08hzz6DBlRAfm13rOmcuKNp/qMGVGG992Od9dZrTxZXU+gzOjDac6TzQ7Ohhj40sldrT/EhodOrjQRgeQ8uk7HGiDY3V1wZUH7RlbgUxTbnRwYWhdjecuPxqZWVc362gSunsTUH80k+pmeeezbAKaj0Z67M7MDUTQRibzaC2INtCOzIc7MXRwqftchPm35gTRvu5zsRjuBNHZak9rgTgrVwI6GOtcgsBy0SGM9p80Fgi+caWgA6RvO1AWhwx0ViCx1uKQgtY2guC5Kw0duK9a1M65LxHtezqmGDhNpaJdHWUd/oso0cdXrtvejfpxD3/tZ9BsAlofkeqyxitXOjpQXNZO8XQB2Wj/i8qyhuHaVYDO1FiZGkZrVwk6CJ4mqsz5SagIjR4UqfG5qwwduC+RGrOvEq1k4MOrNFCJdtGddDVepkgt2vVkqwuzYrSLFv81c8eqDcNAAEALkch8GpJZNyRr4NCuQa3XwNUfkFCstRRj/X5lmlAaGhLZZyfebvE9jtNZtsBO3jw1GowXVLP6OSycGi25Gml5OuCcHA2rTxJ5NmpaGoMD0Hfupy/CVkKtXWUL85a9BFyGkUe3CLs3i7OiYT129PH7F+DM6JGNndv5aHB2NMDHYnCxeVdZg49Aw9YPK7Ymdf5uPj/arlp25WzKUwPwUeg8QLe+dIywU4fyRJJotCZ6KjiXqUl1gxJJonOwia90X5Po3EydhSdA92H0fHtJZrJKdlwiSTSYpl2Qu94muibaVd0B8InQ/W4m+hf+F57Bbq/SEUEkkSQ6X5vUBk1Ev//40TUT7UNfY5BLJInut5DYNCmFcDaHkFKDAnf+E34DNc7HqBJDGNkAAAAASUVORK5CYII=';
const Ye = ({ align: a }) => {
  const [s, r] = l.exports.useState(!1),
    n = J(),
    c = l.exports.useRef(null),
    i = l.exports.useRef(null);
  let o = localStorage.getItem('first_name');
  l.exports.useEffect(() => {
    const h = ({ target: p }) => {
      !i.current ||
        !s ||
        i.current.contains(p) ||
        c.current.contains(p) ||
        r(!1);
    };
    return (
      document.addEventListener('click', h),
      () => document.removeEventListener('click', h)
    );
  }),
    l.exports.useEffect(() => {
      const h = ({ keyCode: p }) => {
        !s || p !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', h),
        () => document.removeEventListener('keydown', h)
      );
    });
  function d() {
    localStorage.removeItem('token'),
      localStorage.removeItem('id'),
      localStorage.removeItem('first_name'),
      localStorage.removeItem('email'),
      localStorage.removeItem('supplier_id'),
      sessionStorage.clear(),
      n('/signin');
  }
  return t('div', {
    className: 'relative inline-flex',
    children: [
      t('button', {
        ref: c,
        className: 'inline-flex justify-center items-center group',
        'aria-haspopup': 'true',
        onClick: () => r(!s),
        'aria-expanded': s,
        children: [
          e('img', {
            className: 'w-8 h-8 rounded-full',
            src: Qe,
            width: '32',
            height: '32',
            alt: 'User',
          }),
          t('div', {
            className: 'flex items-center truncate',
            children: [
              e('span', {
                className:
                  'capitalize truncate ml-2 text-sm font-medium group-hover:text-slate-800',
                children: o,
              }),
              e('svg', {
                className: 'w-3 h-3 shrink-0 ml-1 fill-current text-slate-400',
                viewBox: '0 0 12 12',
                children: e('path', {
                  d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
                }),
              }),
            ],
          }),
        ],
      }),
      e(T, {
        className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          a === 'right' ? 'right-0' : 'left-0'
        }`,
        show: s,
        enter: 'transition ease-out duration-200 transform',
        enterStart: 'opacity-0 -translate-y-2',
        enterEnd: 'opacity-100 translate-y-0',
        leave: 'transition ease-out duration-200',
        leaveStart: 'opacity-100',
        leaveEnd: 'opacity-0',
        children: t('div', {
          ref: i,
          onFocus: () => r(!0),
          onBlur: () => r(!1),
          children: [
            t('div', {
              className: 'pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200',
              children: [
                e('div', {
                  className: 'font-medium text-slate-800 capitalize',
                  children: o,
                }),
                e('div', {
                  className: 'text-xs text-slate-500 italic',
                  children: 'Administrador',
                }),
              ],
            }),
            t('ul', {
              children: [
                e('li', {
                  children: e(q, {
                    className:
                      'font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3',
                    to: '/company/profile',
                    onClick: () => r(!s),
                    children: 'Mi perfil',
                  }),
                }),
                e('li', {
                  children: e('button', {
                    className:
                      'font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3',
                    onClick: () => {
                      r(!s), d();
                    },
                    children: 'Cerrar sesi\xF3n',
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
};
function U({ sidebarOpen: a, setSidebarOpen: s }) {
  return e('header', {
    className: 'sticky top-0 bg-white border-b border-slate-200 z-30',
    children: e('div', {
      className: 'px-4 sm:px-6 lg:px-8',
      children: t('div', {
        className: 'flex items-center justify-between h-16 -mb-px',
        children: [
          e('div', {
            className: 'flex',
            children: t('button', {
              className: 'text-slate-500 hover:text-slate-600 lg:hidden',
              'aria-controls': 'sidebar',
              'aria-expanded': a,
              onClick: () => s(!a),
              children: [
                e('span', { className: 'sr-only', children: 'Open sidebar' }),
                t('svg', {
                  className: 'w-6 h-6 fill-current',
                  viewBox: '0 0 24 24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  children: [
                    e('rect', { x: '4', y: '5', width: '16', height: '2' }),
                    e('rect', { x: '4', y: '11', width: '16', height: '2' }),
                    e('rect', { x: '4', y: '17', width: '16', height: '2' }),
                  ],
                }),
              ],
            }),
          }),
          t('div', {
            className: 'flex items-center space-x-3',
            children: [
              e(Ke, { align: 'right' }),
              e('hr', { className: 'w-px h-6 bg-slate-200 mx-3' }),
              e(Ye, { align: 'right' }),
            ],
          }),
        ],
      }),
    }),
  });
}
function la() {
  return t('div', {
    className:
      'relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8',
    children: [
      e('div', {
        className:
          'absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block',
        'aria-hidden': 'true',
        children: t('svg', {
          width: '319',
          height: '198',
          xmlnsXlink: 'http://www.w3.org/1999/xlink',
          children: [
            t('defs', {
              children: [
                e('path', { id: 'welcome-a', d: 'M64 0l64 128-64-20-64 20z' }),
                e('path', { id: 'welcome-e', d: 'M40 0l40 80-40-12.5L0 80z' }),
                e('path', { id: 'welcome-g', d: 'M40 0l40 80-40-12.5L0 80z' }),
                t('linearGradient', {
                  x1: '50%',
                  y1: '0%',
                  x2: '50%',
                  y2: '100%',
                  id: 'welcome-b',
                  children: [
                    e('stop', { stopColor: '#A5B4FC', offset: '0%' }),
                    e('stop', { stopColor: '#818CF8', offset: '100%' }),
                  ],
                }),
                t('linearGradient', {
                  x1: '50%',
                  y1: '24.537%',
                  x2: '50%',
                  y2: '100%',
                  id: 'welcome-c',
                  children: [
                    e('stop', { stopColor: '#4338CA', offset: '0%' }),
                    e('stop', {
                      stopColor: '#6366F1',
                      stopOpacity: '0',
                      offset: '100%',
                    }),
                  ],
                }),
              ],
            }),
            t('g', {
              fill: 'none',
              fillRule: 'evenodd',
              children: [
                t('g', {
                  transform: 'rotate(64 36.592 105.604)',
                  children: [
                    e('mask', {
                      id: 'welcome-d',
                      fill: '#fff',
                      children: e('use', { xlinkHref: '#welcome-a' }),
                    }),
                    e('use', {
                      fill: 'url(#welcome-b)',
                      xlinkHref: '#welcome-a',
                    }),
                    e('path', {
                      fill: 'url(#welcome-c)',
                      mask: 'url(#welcome-d)',
                      d: 'M64-24h80v152H64z',
                    }),
                  ],
                }),
                t('g', {
                  transform: 'rotate(-51 91.324 -105.372)',
                  children: [
                    e('mask', {
                      id: 'welcome-f',
                      fill: '#fff',
                      children: e('use', { xlinkHref: '#welcome-e' }),
                    }),
                    e('use', {
                      fill: 'url(#welcome-b)',
                      xlinkHref: '#welcome-e',
                    }),
                    e('path', {
                      fill: 'url(#welcome-c)',
                      mask: 'url(#welcome-f)',
                      d: 'M40.333-15.147h50v95h-50z',
                    }),
                  ],
                }),
                t('g', {
                  transform: 'rotate(44 61.546 392.623)',
                  children: [
                    e('mask', {
                      id: 'welcome-h',
                      fill: '#fff',
                      children: e('use', { xlinkHref: '#welcome-g' }),
                    }),
                    e('use', {
                      fill: 'url(#welcome-b)',
                      xlinkHref: '#welcome-g',
                    }),
                    e('path', {
                      fill: 'url(#welcome-c)',
                      mask: 'url(#welcome-h)',
                      d: 'M40.333-15.147h50v95h-50z',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      t('div', {
        className: 'relative',
        children: [
          e('h1', {
            className: 'text-2xl md:text-3xl text-slate-800 font-bold mb-1',
            children: 'Bienvenido a Hubmine supplier system \u{1F44B}',
          }),
          e('p', {
            children:
              'A partir de aqu\xED podr\xE1s crear tus productos y las plantas de recolecci\xF3n.',
          }),
        ],
      }),
    ],
  });
}
P.register(Et, Mt, Ze, be);
P.register(Ot, zt, Bt, Ft, Ht, Ze, be);
function ra({ data: a, width: s, height: r }) {
  const n = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const c = n.current,
        i = new P(c, {
          type: 'line',
          data: a,
          options: {
            layout: { padding: 20 },
            scales: {
              y: {
                beginAtZero: !0,
                grid: { drawBorder: !1 },
                ticks: { callback: (o) => Ue(o) },
              },
              x: {
                type: 'time',
                time: {
                  parser: 'MM-DD-YYYY',
                  unit: 'month',
                  displayFormats: { month: 'MMM YY' },
                },
                grid: { display: !1, drawBorder: !1 },
                ticks: { autoSkipPadding: 48, maxRotation: 0 },
              },
            },
            plugins: {
              legend: { display: !1 },
              tooltip: {
                callbacks: { title: () => !1, label: (o) => Ue(o.parsed.y) },
              },
            },
            interaction: { intersect: !1, mode: 'nearest' },
            maintainAspectRatio: !1,
            resizeDelay: 200,
          },
        });
      return () => i.destroy();
    }, []),
    e('canvas', { ref: n, width: s, height: r })
  );
}
function ia() {
  const a = {
    labels: ['12-01-2020', '01-01-2021', '02-01-2021'],
    datasets: [
      {
        label: 'Current',
        data: [5e3, 8700, 7500],
        fill: !0,
        backgroundColor: `rgba(${oe(F().theme.colors.blue[500])}, 0.08)`,
        borderColor: F().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: F().theme.colors.indigo[500],
        clip: 20,
      },
      {
        label: 'Previous',
        data: [8e3, 5e3, 6500],
        borderColor: F().theme.colors.slate[300],
        fill: !1,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: F().theme.colors.slate[300],
        clip: 20,
      },
    ],
  };
  return t('div', {
    className:
      'flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200',
    children: [
      e('header', {
        className: 'px-5 py-4 border-b border-slate-100 flex items-center',
        children: e('h2', {
          className: 'font-semibold text-slate-800',
          children: 'M\xE9tricas',
        }),
      }),
      e('div', {
        className: 'px-5 py-1',
        children: t('div', {
          className: 'flex flex-wrap',
          children: [
            t('div', {
              className: 'flex items-center py-2',
              children: [
                t('div', {
                  className: 'mr-5',
                  children: [
                    t('div', {
                      className: 'flex items-center',
                      children: [
                        e('div', {
                          className: 'text-3xl font-bold text-slate-800 mr-2',
                          children: '21',
                        }),
                        e('div', {
                          className: 'text-sm font-medium text-emerald-500',
                          children: '+49%',
                        }),
                      ],
                    }),
                    e('div', {
                      className: 'text-sm text-slate-500',
                      children: 'Colaboradores activos',
                    }),
                  ],
                }),
                e('div', {
                  className: 'hidden md:block w-px h-8 bg-slate-200 mr-5',
                  'aria-hidden': 'true',
                }),
              ],
            }),
            t('div', {
              className: 'flex items-center py-2',
              children: [
                t('div', {
                  className: 'mr-5',
                  children: [
                    t('div', {
                      className: 'flex items-center',
                      children: [
                        e('div', {
                          className: 'text-3xl font-bold text-slate-800 mr-2',
                          children: '7',
                        }),
                        e('div', {
                          className: 'text-sm font-medium text-emerald-500',
                          children: '+27%',
                        }),
                      ],
                    }),
                    e('div', {
                      className: 'text-sm text-slate-500',
                      children: 'Contratos firmados',
                    }),
                  ],
                }),
                e('div', {
                  className: 'hidden md:block w-px h-8 bg-slate-200 mr-5',
                  'aria-hidden': 'true',
                }),
              ],
            }),
            e('div', {
              className: 'flex items-center py-2',
              children: t('div', {
                className: 'mr-5',
                children: [
                  t('div', {
                    className: 'flex items-center',
                    children: [
                      e('div', {
                        className: 'text-3xl font-bold text-slate-800 mr-2',
                        children: '54%',
                      }),
                      e('div', {
                        className: 'text-sm font-medium text-amber-500',
                        children: '-7%',
                      }),
                    ],
                  }),
                  e('div', {
                    className: 'text-sm text-slate-500',
                    children: 'Crecimiento de equipo en los \xFAltimos 3 meses',
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      e('div', {
        className: 'grow',
        children: e(ra, { data: a, width: 800, height: 300 }),
      }),
    ],
  });
}
P.register(Vt, Pt, be, Dt);
function na({ data: a, width: s, height: r }) {
  const n = l.exports.useRef(null),
    c = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const i = n.current,
        o = new P(i, {
          type: 'polarArea',
          data: a,
          options: {
            layout: { padding: 24 },
            plugins: { legend: { display: !1 } },
            interaction: { intersect: !1, mode: 'nearest' },
            animation: { duration: 500 },
            maintainAspectRatio: !1,
            resizeDelay: 200,
          },
          plugins: [
            {
              id: 'htmlLegend',
              afterUpdate(d, h, p) {
                const m = c.current;
                if (!m) return;
                for (; m.firstChild; ) m.firstChild.remove();
                d.options.plugins.legend.labels
                  .generateLabels(d)
                  .forEach((v) => {
                    const A = document.createElement('li');
                    A.style.margin = F().theme.margin[1];
                    const w = document.createElement('button');
                    w.classList.add('btn-xs'),
                      (w.style.backgroundColor = F().theme.colors.white),
                      (w.style.borderWidth = F().theme.borderWidth[1]),
                      (w.style.borderColor = F().theme.colors.slate[200]),
                      (w.style.color = F().theme.colors.slate[500]),
                      (w.style.boxShadow = F().theme.boxShadow.md),
                      (w.style.opacity = v.hidden ? '.3' : ''),
                      (w.onclick = () => {
                        d.toggleDataVisibility(v.index, !v.index), d.update();
                      });
                    const N = document.createElement('span');
                    (N.style.display = 'block'),
                      (N.style.width = F().theme.width[2]),
                      (N.style.height = F().theme.height[2]),
                      (N.style.backgroundColor = v.fillStyle),
                      (N.style.borderRadius = F().theme.borderRadius.sm),
                      (N.style.marginRight = F().theme.margin[1]),
                      (N.style.pointerEvents = 'none');
                    const k = document.createElement('span');
                    (k.style.display = 'flex'), (k.style.alignItems = 'center');
                    const y = document.createTextNode(v.text);
                    k.appendChild(y),
                      A.appendChild(w),
                      w.appendChild(N),
                      w.appendChild(k),
                      m.appendChild(A);
                  });
              },
            },
          ],
        });
      return () => o.destroy();
    }, []),
    t('div', {
      className: 'grow flex flex-col justify-center',
      children: [
        e('div', { children: e('canvas', { ref: n, width: s, height: r }) }),
        e('div', {
          className: 'px-5 pt-2 pb-6',
          children: e('ul', {
            ref: c,
            className: 'flex flex-wrap justify-center -m-1',
          }),
        }),
      ],
    })
  );
}
function ca() {
  const a = {
    labels: ['Hombres', 'Mujeres'],
    datasets: [
      {
        label: 'Sessions By Gender',
        data: [13, 8],
        backgroundColor: [
          `rgba(${oe(F().theme.colors.indigo[500])}, 0.8)`,
          `rgba(${oe(F().theme.colors.sky[400])}, 0.8)`,
        ],
        hoverBackgroundColor: [
          `rgba(${oe(F().theme.colors.indigo[600])}, 0.8)`,
          `rgba(${oe(F().theme.colors.sky[500])}, 0.8)`,
        ],
        hoverBorderColor: F().theme.colors.white,
      },
    ],
  };
  return t('div', {
    className:
      'flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200',
    children: [
      e('header', {
        className: 'px-5 py-4 border-b border-slate-100',
        children: e('h2', {
          className: 'font-semibold text-slate-800',
          children: 'Contrataciones por g\xE9nero',
        }),
      }),
      e(na, { data: a, width: 389, height: 260 }),
    ],
  });
}
function oa() {
  const [a, s] = l.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(_, { sidebarOpen: a, setSidebarOpen: s }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden',
        children: [
          e(U, { sidebarOpen: a, setSidebarOpen: s }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e(la, {}),
                t('div', {
                  className: 'grid grid-cols-12 gap-6',
                  children: [e(ia, {}), e(ca, {})],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
var da = '/dash-supplier2.0/assets/404-illustration.a20d59b6.svg';
function ma() {
  return e('div', {
    className: 'flex h-screen overflow-hidden',
    children: e('div', {
      className:
        'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
      children: e('main', {
        children: e('div', {
          className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
          children: e('div', {
            className: 'max-w-2xl m-auto mt-16',
            children: t('div', {
              className: 'text-center px-4',
              children: [
                e('div', {
                  className: 'inline-flex mb-8',
                  children: e('img', {
                    src: da,
                    width: '176',
                    height: '176',
                    alt: '404 illustration',
                  }),
                }),
                e('div', {
                  className: 'mb-6',
                  children:
                    'Hmm... esta p\xE1gina no existe. \xA1Intenta buscar otra cosa!',
                }),
                e(q, {
                  to: '/',
                  className: 'btn bg-primary hover:bg-indigo-600 text-white',
                  children: 'Volver al Inicio',
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
const X = () =>
  t('button', {
    className:
      'btn bg-primary hover:bg-indigo-600 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none',
    disabled: !0,
    children: [
      e('svg', {
        className: 'animate-spin w-4 h-4 fill-current shrink-0',
        viewBox: '0 0 16 16',
        children: e('path', {
          d: 'M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z',
        }),
      }),
      e('span', { className: 'ml-2', children: 'Cargando' }),
    ],
  });
var ge = '/dash-supplier2.0/assets/AuthImage.9cda46fa.jpg',
  se = '/dash-supplier2.0/assets/logohubsupplier.46f30f9d.svg';
function ha() {
  const [a, s] = l.exports.useState(!1),
    [r, n] = l.exports.useState(!1),
    {
      loading: c,
      eye: i,
      setLoading: o,
      toggleEye: d,
    } = l.exports.useContext(B),
    h = J(),
    p = () =>
      a
        ? r
          ? e('div', {
              className: 'mt-5',
              children: t('div', {
                className: 'bg-amber-100 text-amber-600 px-3 py-2 rounded',
                children: [
                  e('svg', {
                    className: 'inline w-4 h-4 shrink-0 fill-current mr-2',
                    viewBox: '0 0 17 17',
                    children: e('path', {
                      d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                    }),
                  }),
                  e('span', {
                    className: 'text-sm',
                    children:
                      'Este sitio es de uso exclusivo para proveedores de Hubmine, si usted es comprador, inicie sesi\xF3n desde la aplicaci\xF3n.',
                  }),
                ],
              }),
            })
          : e('div', {
              className: 'mt-5',
              children: t('div', {
                className: 'bg-red-100 text-red-600 px-3 py-2 rounded',
                children: [
                  e('svg', {
                    className: 'inline w-4 h-4 shrink-0 fill-current mr-2',
                    viewBox: '0 0 17 17',
                    children: e('path', {
                      d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                    }),
                  }),
                  e('span', {
                    className: 'text-sm',
                    children:
                      'Se ha producido un problema al iniciar sesi\xF3n. Comprueba el correo electr\xF3nico y la contrase\xF1a. Si usted es comprador no puede acceder al sitio.',
                  }),
                ],
              }),
            })
        : e('div', {
            className: 'mt-5',
            children: t('div', {
              className: 'bg-amber-100 text-amber-600 px-3 py-2 rounded',
              children: [
                e('svg', {
                  className: 'inline w-4 h-4 shrink-0 fill-current mr-2',
                  viewBox: '0 0 17 17',
                  children: e('path', {
                    d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                  }),
                }),
                e('span', {
                  className: 'text-sm',
                  children:
                    'Este sitio es de uso exclusivo para proveedores de Hubmine, si usted es comprador, inicie sesi\xF3n desde la aplicaci\xF3n.',
                }),
              ],
            }),
          }),
    {
      register: m,
      handleSubmit: b,
      formState: { errors: v },
    } = Q();
  async function A(w) {
    return fetch('http://supplier.hubmine.mx/api/auth/login/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(w),
    })
      .then((N) => N.json())
      .then((N) => {
        if (N.customer_type_id === 2) {
          o(!0);
          let k = N,
            y = N.id,
            E = { token: N.token };
          localStorage.setItem('token', k.token),
            sessionStorage.setItem('token', k.token),
            localStorage.setItem('first_name', k.first_name),
            localStorage.setItem('email', k.email),
            localStorage.setItem('supplier_id', k.supplier_id),
            localStorage.setItem('id', k.id);
          async function O() {
            return fetch(
              `http://supplier.hubmine.mx/api/suppliers/validate/${y}/`,
              {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(E),
              }
            ).then((L) => {
              L.status === 202 &&
                setTimeout(() => {
                  h('/'), o(!1);
                }, 1500);
            });
          }
          O();
        } else
          N.customer_type_id === 1
            ? (o(!0),
              s(!0),
              setTimeout(() => {
                o(!1);
              }, 1500))
            : N.code === 401
            ? (o(!0),
              setTimeout(() => {
                s(!0), o(!1);
              }, 1500))
            : N.code === 403 &&
              (o(!0),
              n(!0),
              s(!0),
              setTimeout(() => {
                sessionStorage.setItem('id', N.id),
                  s(!1),
                  h('/multiStep'),
                  o(!1);
              }, 1500));
      });
  }
  return e('main', {
    className: 'bg-white',
    children: t('div', {
      className: 'relative md:flex',
      children: [
        e('div', {
          className: 'md:w-1/2',
          children: t('div', {
            className: 'min-h-screen h-full flex flex-col after:flex-1',
            children: [
              e('div', {
                className: 'flex-1',
                children: e('div', {
                  className:
                    'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                  children: e('div', {
                    className: 'block',
                    children: e('img', { src: se, alt: '' }),
                  }),
                }),
              }),
              t('div', {
                className: 'max-w-lg mx-auto px-4 py-8',
                children: [
                  e('h1', {
                    className: 'text-3xl text-slate-800 font-bold mb-6',
                    children: 'Hola de nuevo \u2728',
                  }),
                  t('form', {
                    onSubmit: b(A),
                    children: [
                      t('div', {
                        className: 'space-y-4',
                        children: [
                          t('div', {
                            children: [
                              e('label', {
                                className: 'block text-sm font-medium mb-1',
                                htmlFor: 'email',
                                children: 'Correo electr\xF3nico',
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    maxLength: '35',
                                    autoComplete: 'off',
                                    className: 'form-input w-full',
                                    type: 'email',
                                  },
                                  m('email', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              v.email &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: v.email.message,
                                }),
                            ],
                          }),
                          t('div', {
                            className: 'relative',
                            children: [
                              e('label', {
                                className: 'block text-sm font-medium mb-1',
                                htmlFor: 'password',
                                children: 'Contrase\xF1a',
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    maxLength: '35',
                                    className: 'form-input w-full',
                                    type: i ? 'text' : 'password',
                                    autoComplete: 'off',
                                  },
                                  m('password', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                  })
                                )
                              ),
                              v.password &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: v.password.message,
                                }),
                              e('button', {
                                onClick: d,
                                type: 'button',
                                className: 'absolute right-0 top-5 mt-3 mr-4',
                                children: i
                                  ? t('svg', {
                                      width: '24',
                                      height: '24',
                                      viewBox: '0 0 24 24',
                                      fill: 'none',
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      children: [
                                        e('path', {
                                          d: 'M21.27 9.17999C20.98 8.71999 20.67 8.28999 20.35 7.88999C19.98 7.41999 19.28 7.37999 18.86 7.79999L15.86 10.8C16.08 11.46 16.12 12.22 15.92 13.01C15.57 14.42 14.43 15.56 13.02 15.91C12.23 16.11 11.47 16.07 10.81 15.85C10.81 15.85 9.38001 17.28 8.35001 18.31C7.85001 18.81 8.01001 19.69 8.68001 19.95C9.75001 20.36 10.86 20.57 12 20.57C13.78 20.57 15.51 20.05 17.09 19.08C18.7 18.08 20.15 16.61 21.32 14.74C22.27 13.23 22.22 10.69 21.27 9.17999Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M14.02 9.98001L9.98001 14.02C9.47001 13.5 9.14001 12.78 9.14001 12C9.14001 10.43 10.42 9.14001 12 9.14001C12.78 9.14001 13.5 9.47001 14.02 9.98001Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M18.25 5.74999L14.86 9.13999C14.13 8.39999 13.12 7.95999 12 7.95999C9.76 7.95999 7.96 9.76999 7.96 12C7.96 13.12 8.41 14.13 9.14 14.86L5.76 18.25H5.75C4.64 17.35 3.62 16.2 2.75 14.84C1.75 13.27 1.75 10.72 2.75 9.14999C3.91 7.32999 5.33 5.89999 6.91 4.91999C8.49 3.95999 10.22 3.42999 12 3.42999C14.23 3.42999 16.39 4.24999 18.25 5.74999Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M14.86 12C14.86 13.57 13.58 14.86 12 14.86C11.94 14.86 11.89 14.86 11.83 14.84L14.84 11.83C14.86 11.89 14.86 11.94 14.86 12Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L2.23 20.69C1.93 20.99 1.93 21.48 2.23 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23Z',
                                          fill: '#BBC0C9',
                                        }),
                                      ],
                                    })
                                  : t('svg', {
                                      width: '24',
                                      height: '24',
                                      viewBox: '0 0 24 24',
                                      fill: 'none',
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      children: [
                                        e('path', {
                                          d: 'M21.25 9.14999C18.94 5.51999 15.56 3.42999 12 3.42999C10.22 3.42999 8.49 3.94999 6.91 4.91999C5.33 5.89999 3.91 7.32999 2.75 9.14999C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.14999ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.76999 9.76 7.95999 12 7.95999C14.24 7.95999 16.04 9.76999 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z',
                                          fill: '#BBC0C9',
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        className: 'flex items-center mt-6',
                        children: [
                          e('div', {}),
                          c
                            ? e(X, {})
                            : e(z, {
                                children: e('button', {
                                  type: 'submit',
                                  className:
                                    'btn bg-secondary hover:bg-primary hover:text-white text-primary',
                                  children: 'Iniciar sesi\xF3n',
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
                  t('div', {
                    className: 'pt-5 mt-6 border-t border-slate-200',
                    children: [
                      t('div', {
                        className: 'text-sm',
                        children: [
                          '\xBFNo tienes cuenta?',
                          ' ',
                          e(q, {
                            className:
                              'font-medium text-primary hover:text-slate-500',
                            to: '/code/generator',
                            children: 'Registrate',
                          }),
                        ],
                      }),
                      p(),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        e('div', {
          className: 'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
          'aria-hidden': 'true',
          children: e('img', {
            className: 'object-cover object-center w-full h-full',
            src: ge,
            width: '760',
            height: '1024',
            alt: 'Authentication',
          }),
        }),
      ],
    }),
  });
}
var Ne = '/dash-supplier2.0/assets/auth-decoration.a3f89aec.png',
  pa = '/dash-supplier2.0/assets/createAccount.49879497.jpg';
function ua() {
  const {
      eye: a,
      toggleEye: s,
      errorMenssage: r,
      setErrorMenssage: n,
    } = l.exports.useContext(B),
    [c, i] = l.exports.useState(!1),
    o = sessionStorage.getItem('number'),
    {
      register: d,
      handleSubmit: h,
      formState: { errors: p },
    } = Q({
      defaultValues: {
        customer_type_id: 2,
        user_type_id: 2,
        business_name: '',
        rfc: '',
        country_code: '',
        business_type: '',
        phone_number: o,
      },
    }),
    m = () => {
      sessionStorage.removeItem('code'), sessionStorage.removeItem('number');
    },
    b = J();
  async function v(A) {
    return fetch('http://supplier.hubmine.mx/api/auth/register/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(A),
    })
      .then((w) => w.json())
      .then((w) => {
        if (w.code === 201) {
          i(!0);
          let N = w;
          sessionStorage.setItem('id', N.id),
            sessionStorage.setItem('token', N.token),
            sessionStorage.setItem('first_name', N.first_name),
            setTimeout(() => {
              i(!1), b('/multiStep');
            }, 1500);
        } else
          n(!0),
            i(!0),
            setTimeout(() => {
              n(!1), i(!1);
            }, 5e3);
      });
  }
  return e('main', {
    className: 'bg-white',
    children: t('div', {
      className: 'relative md:flex',
      children: [
        e('div', {
          className: 'md:w-1/2',
          children: t('div', {
            className: 'min-h-screen h-full flex flex-col after:flex-1',
            children: [
              e('div', {
                className: 'flex-1',
                children: e('div', {
                  className:
                    'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                  children: e(q, {
                    className: 'block',
                    to: '/signin',
                    onClick: m,
                    children: e('img', { src: se, alt: 'Logo hubmine' }),
                  }),
                }),
              }),
              t('div', {
                className: 'max-w-sm mx-auto py-8 w-full',
                children: [
                  e('h1', {
                    className: 'text-3xl text-slate-800 font-bold mb-6',
                    children: 'Crea tu cuenta \u2728',
                  }),
                  e('p', {
                    className: 'mb-4 text-sm',
                    children:
                      'Vamos a crear una cuenta para que puedas ingresar a nuestro sitio, comp\xE1rtenos los siguientes datos.',
                  }),
                  t('form', {
                    onSubmit: h(v),
                    children: [
                      t('div', {
                        className: 'space-y-4',
                        children: [
                          t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                htmlFor: 'email',
                                children: [
                                  'Nombres ',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    maxLength: '35',
                                    autoComplete: 'off',
                                    className: 'form-input w-full capitalize',
                                    type: 'text',
                                  },
                                  d('first_name', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value: /[a-zA-Z]/,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              p.first_name &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: p.first_name.message,
                                }),
                            ],
                          }),
                          t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Apellidos',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    maxLength: '35',
                                    className: 'form-input w-full capitalize',
                                    autoComplete: 'off',
                                    type: 'text',
                                  },
                                  d('last_name', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value: /[a-zA-Z]/,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              ' ',
                              p.last_name &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: p.last_name.message,
                                }),
                            ],
                          }),
                          t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Numero de telefono',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    disabled: !0,
                                    className:
                                      'form-input w-full capitalize disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none',
                                    autoComplete: 'off',
                                    type: 'number',
                                  },
                                  d('phone_number', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value: /[0-9]/,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              p.phone_number &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: p.phone_number.message,
                                }),
                            ],
                          }),
                          t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Email',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    maxLength: '35',
                                    className: 'form-input w-full',
                                    autoComplete: 'off',
                                    type: 'email',
                                  },
                                  d('email', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value:
                                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              ' ',
                              p.email &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: p.email.message,
                                }),
                            ],
                          }),
                          t('div', {
                            className: 'relative',
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Contrase\xF1a',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    className: 'form-input w-full',
                                    type: a ? 'text' : 'password',
                                    autoComplete: 'off',
                                  },
                                  d('password', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                  })
                                )
                              ),
                              p.password &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: p.password.message,
                                }),
                              e('button', {
                                onClick: s,
                                type: 'button',
                                className: 'absolute right-0 top-5 mt-3 mr-4',
                                children: a
                                  ? t('svg', {
                                      width: '24',
                                      height: '24',
                                      viewBox: '0 0 24 24',
                                      fill: 'none',
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      children: [
                                        e('path', {
                                          d: 'M21.27 9.17999C20.98 8.71999 20.67 8.28999 20.35 7.88999C19.98 7.41999 19.28 7.37999 18.86 7.79999L15.86 10.8C16.08 11.46 16.12 12.22 15.92 13.01C15.57 14.42 14.43 15.56 13.02 15.91C12.23 16.11 11.47 16.07 10.81 15.85C10.81 15.85 9.38001 17.28 8.35001 18.31C7.85001 18.81 8.01001 19.69 8.68001 19.95C9.75001 20.36 10.86 20.57 12 20.57C13.78 20.57 15.51 20.05 17.09 19.08C18.7 18.08 20.15 16.61 21.32 14.74C22.27 13.23 22.22 10.69 21.27 9.17999Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M14.02 9.98001L9.98001 14.02C9.47001 13.5 9.14001 12.78 9.14001 12C9.14001 10.43 10.42 9.14001 12 9.14001C12.78 9.14001 13.5 9.47001 14.02 9.98001Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M18.25 5.74999L14.86 9.13999C14.13 8.39999 13.12 7.95999 12 7.95999C9.76 7.95999 7.96 9.76999 7.96 12C7.96 13.12 8.41 14.13 9.14 14.86L5.76 18.25H5.75C4.64 17.35 3.62 16.2 2.75 14.84C1.75 13.27 1.75 10.72 2.75 9.14999C3.91 7.32999 5.33 5.89999 6.91 4.91999C8.49 3.95999 10.22 3.42999 12 3.42999C14.23 3.42999 16.39 4.24999 18.25 5.74999Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M14.86 12C14.86 13.57 13.58 14.86 12 14.86C11.94 14.86 11.89 14.86 11.83 14.84L14.84 11.83C14.86 11.89 14.86 11.94 14.86 12Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L2.23 20.69C1.93 20.99 1.93 21.48 2.23 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23Z',
                                          fill: '#BBC0C9',
                                        }),
                                      ],
                                    })
                                  : t('svg', {
                                      width: '24',
                                      height: '24',
                                      viewBox: '0 0 24 24',
                                      fill: 'none',
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      children: [
                                        e('path', {
                                          d: 'M21.25 9.14999C18.94 5.51999 15.56 3.42999 12 3.42999C10.22 3.42999 8.49 3.94999 6.91 4.91999C5.33 5.89999 3.91 7.32999 2.75 9.14999C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.14999ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.76999 9.76 7.95999 12 7.95999C14.24 7.95999 16.04 9.76999 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z',
                                          fill: '#BBC0C9',
                                        }),
                                        e('path', {
                                          d: 'M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z',
                                          fill: '#BBC0C9',
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e('div', {
                        className: 'flex items-center justify-center mt-6',
                        children: c
                          ? e(X, {})
                          : e(z, {
                              children: e('button', {
                                type: 'submit',
                                className:
                                  'btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3',
                                children: 'Crear cuenta',
                              }),
                            }),
                      }),
                    ],
                  }),
                  e('div', {
                    className: 'pt-5 mt-6 border-t border-slate-200',
                    children: t('div', {
                      className: 'text-sm',
                      children: [
                        'Tienes una cuenta?',
                        ' ',
                        e(q, {
                          className:
                            'font-medium text-primary hover:text-slate-500',
                          to: '/signin',
                          onClick: m,
                          children: 'Iniciar sesi\xF3n',
                        }),
                      ],
                    }),
                  }),
                  e('div', {
                    className: 'mt-5',
                    children:
                      r &&
                      t('div', {
                        className: 'bg-red-100 text-red-600 px-3 py-2 rounded',
                        children: [
                          e('svg', {
                            className:
                              'inline w-4 h-4 shrink-0 fill-current mr-2',
                            viewBox: '0 0 17 17',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                            }),
                          }),
                          e('span', {
                            className: 'text-sm',
                            children:
                              'Problemas para crear la cuenta, el email ya existe o el n\xFAmero de tel\xE9fono es diferente al que ingresaste al generar el c\xF3digo de verificaci\xF3n.',
                          }),
                        ],
                      }),
                  }),
                ],
              }),
            ],
          }),
        }),
        t('div', {
          className: 'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
          'aria-hidden': 'true',
          children: [
            e('img', {
              className: 'object-cover object-center w-full h-full',
              src: pa,
              width: '760',
              height: '1024',
              alt: 'Authentication',
            }),
            e('img', {
              className:
                'absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block',
              src: Ne,
              width: '218',
              height: '224',
              alt: 'Authentication decoration',
            }),
          ],
        }),
      ],
    }),
  });
}
function xa() {
  return e('main', {
    className: 'bg-white',
    children: t('div', {
      className: 'relative md:flex',
      children: [
        e('div', {
          className: 'md:w-1/2',
          children: t('div', {
            className: 'min-h-screen h-full flex flex-col after:flex-1',
            children: [
              e('div', {
                className: 'flex-1',
                children: e('div', {
                  className:
                    'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                  children: e(q, {
                    className: 'block',
                    to: '/',
                    children: t('svg', {
                      width: '143',
                      height: '33',
                      viewBox: '0 0 143 33',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        e('path', {
                          d: 'M26.5922 33H5.47462C2.4507 33 0 30.5542 0 27.5363V6.46366C0 3.44579 2.4507 0.99998 5.47462 0.99998H26.5894C29.6134 0.99998 32.0641 3.44579 32.0641 6.46366V27.5363C32.0641 30.5542 29.6134 33 26.5922 33Z',
                          fill: '#0DB1AC',
                        }),
                        e('path', {
                          d: 'M24.4351 23.2469H14.2003C12.3865 23.2469 11.2566 21.3538 12.1732 19.8476L17.2906 11.4352C18.1962 9.94556 20.4364 9.94556 21.3447 11.4352L26.4621 19.8476C27.3787 21.3538 26.2489 23.2469 24.4351 23.2469Z',
                          fill: 'white',
                        }),
                        e('path', {
                          d: 'M17.4347 23.5951H7.54878C5.79867 23.5951 4.70762 21.7656 5.59098 20.3119L10.5339 12.1896C11.409 10.7498 13.5717 10.7498 14.4467 12.1896L19.3897 20.3119C20.2758 21.7683 19.1848 23.5951 17.4347 23.5951Z',
                          fill: '#D8F6F0',
                        }),
                        e('path', {
                          d: 'M39.8646 19.06V1.77036H43.5201V8.90407H50.9408V1.77036H54.5879V19.06H50.9408V11.9179H43.5201V19.06H39.8646ZM65.8498 13.5388V6.09274H69.4462V19.06H65.9934V16.7046H65.8583C65.5656 17.4644 65.0788 18.0752 64.3978 18.5366C63.7224 18.9981 62.8978 19.2288 61.9242 19.2288C61.0574 19.2288 60.2948 19.0319 59.6364 18.6379C58.9779 18.244 58.4629 17.684 58.0914 16.9579C57.7255 16.2319 57.5398 15.3624 57.5342 14.3492V6.09274H61.1305V13.7076C61.1362 14.4731 61.3416 15.0781 61.7469 15.5227C62.1521 15.9674 62.6952 16.1897 63.3762 16.1897C63.8097 16.1897 64.2149 16.0911 64.5919 15.8942C64.969 15.6916 65.2729 15.3933 65.5036 14.9993C65.7401 14.6053 65.8555 14.1185 65.8498 13.5388ZM72.3904 19.06V1.77036H75.9868V8.27091H76.0965C76.2542 7.92197 76.482 7.56735 76.7804 7.20718C77.0843 6.84134 77.4783 6.53743 77.9623 6.29534C78.4519 6.0477 79.0598 5.92395 79.7859 5.92395C80.7314 5.92395 81.6037 6.17159 82.4029 6.66687C83.2021 7.15647 83.8409 7.89661 84.3193 8.88717C84.7977 9.87204 85.0369 11.1075 85.0369 12.5933C85.0369 14.0398 84.8034 15.2611 84.3362 16.2572C83.8747 17.2477 83.2444 17.9991 82.4452 18.5113C81.6515 19.0178 80.7623 19.2711 79.7774 19.2711C79.0795 19.2711 78.4857 19.1557 77.9961 18.9249C77.5121 18.6942 77.1153 18.4044 76.8057 18.0553C76.4962 17.7009 76.2598 17.3435 76.0965 16.9833H75.9362V19.06H72.3904ZM75.9108 12.5764C75.9108 13.3474 76.0178 14.02 76.2316 14.5941C76.4454 15.1682 76.755 15.6155 77.1602 15.9364C77.5656 16.2516 78.0579 16.4092 78.6377 16.4092C79.223 16.4092 79.7182 16.2487 80.1236 15.928C80.5288 15.6015 80.8355 15.1513 81.0437 14.5772C81.2576 13.9975 81.3645 13.3305 81.3645 12.5764C81.3645 11.8278 81.2603 11.1694 81.0522 10.601C80.8439 10.0325 80.5372 9.58782 80.1319 9.26701C79.7267 8.9462 79.2286 8.78586 78.6377 8.78586C78.0524 8.78586 77.5571 8.94065 77.1519 9.2501C76.7523 9.55969 76.4454 9.9987 76.2316 10.5671C76.0178 11.1356 75.9108 11.8053 75.9108 12.5764Z',
                          fill: '#2D3139',
                        }),
                        e('path', {
                          d: 'M87.4367 19.0601V6.09276H90.8642V8.38068H91.0162C91.2863 7.62086 91.7365 7.02137 92.3669 6.58249C92.9973 6.14348 93.7515 5.92397 94.6295 5.92397C95.5188 5.92397 96.2757 6.14625 96.9004 6.59081C97.5252 7.02982 97.9416 7.6264 98.1499 8.38068H98.2849C98.5494 7.63776 99.0278 7.04396 99.7202 6.59927C100.418 6.14903 101.243 5.92397 102.194 5.92397C103.404 5.92397 104.386 6.30949 105.14 7.08054C105.9 7.84591 106.28 8.93222 106.28 10.3392V19.0601H102.692V11.0483C102.692 10.328 102.5 9.78766 102.118 9.4275C101.735 9.0672 101.257 8.88718 100.683 8.88718C100.03 8.88718 99.5203 9.09546 99.1545 9.51189C98.7886 9.92277 98.6057 10.4659 98.6057 11.1413V19.0601H95.1191V10.9724C95.1191 10.3364 94.9362 9.82993 94.5703 9.45286C94.2102 9.07565 93.7346 8.88718 93.1437 8.88718C92.744 8.88718 92.3838 8.98848 92.063 9.19109C91.7479 9.38801 91.4974 9.66668 91.3117 10.0269C91.126 10.3815 91.0331 10.7979 91.0331 11.2763V19.0601H87.4367ZM109.121 19.0601V6.09276H112.717V19.0601H109.121ZM110.927 4.42123C110.393 4.42123 109.934 4.24399 109.551 3.88937C109.174 3.52921 108.986 3.09864 108.986 2.59769C108.986 2.10241 109.174 1.67753 109.551 1.32291C109.934 0.962742 110.393 0.782593 110.927 0.782593C111.462 0.782593 111.918 0.962742 112.295 1.32291C112.678 1.67753 112.869 2.10241 112.869 2.59769C112.869 3.09864 112.678 3.52921 112.295 3.88937C111.918 4.24399 111.462 4.42123 110.927 4.42123ZM119.194 11.5634V19.0601H115.598V6.09276H119.025V8.38068H119.177C119.464 7.6264 119.946 7.02982 120.621 6.59081C121.296 6.14625 122.115 5.92397 123.078 5.92397C123.978 5.92397 124.763 6.12089 125.433 6.51487C126.103 6.90885 126.623 7.47175 126.995 8.2033C127.366 8.92931 127.552 9.79611 127.552 10.8036V19.0601H123.956V11.4452C123.961 10.6516 123.759 10.0325 123.348 9.58784C122.937 9.1376 122.371 8.91254 121.651 8.91254C121.167 8.91254 120.739 9.01661 120.368 9.22489C120.002 9.43304 119.715 9.73708 119.507 10.1366C119.304 10.5306 119.2 11.0062 119.194 11.5634ZM136.296 19.3134C134.962 19.3134 133.814 19.0431 132.852 18.5028C131.895 17.957 131.158 17.1859 130.64 16.1897C130.122 15.1879 129.863 14.0032 129.863 12.6356C129.863 11.3016 130.122 10.1309 130.64 9.12359C131.158 8.11613 131.886 7.33095 132.826 6.76819C133.772 6.20529 134.881 5.92397 136.153 5.92397C137.008 5.92397 137.804 6.06185 138.542 6.33763C139.285 6.60772 139.932 7.01583 140.483 7.56169C141.041 8.10768 141.474 8.79433 141.784 9.62164C142.093 10.4434 142.248 11.4057 142.248 12.5089V13.4966L133.417 13.505V11.2678H138.863C138.863 10.7501 138.75 10.2914 138.525 9.89174C138.3 9.49221 137.987 9.17986 137.588 8.95467C137.194 8.72394 136.735 8.60851 136.212 8.60851C135.666 8.60851 135.182 8.73517 134.76 8.98848C134.343 9.23612 134.017 9.57093 133.78 9.99304C133.544 10.4096 133.423 10.7556 133.417 11.2678V13.505C133.417 14.1466 133.535 14.7011 133.772 15.1682C134.014 15.6354 134.354 15.9955 134.793 16.2487C135.232 16.502 135.753 16.6287 136.355 16.6287C136.755 16.6287 137.121 16.5724 137.453 16.4598C137.785 16.3473 138.069 16.1785 138.305 15.9533C138.542 15.7282 138.722 15.4525 138.846 15.126L142.172 15.3455C142.003 16.1446 141.657 16.8425 141.134 17.4391C140.616 18.0301 139.946 18.4916 139.124 18.8236C138.308 19.1501 137.365 19.3134 136.296 19.3134Z',
                          fill: '#0DB1AC',
                        }),
                        e('path', {
                          d: 'M40 30.7407V23.1044H41.6145V26.2551H44.8921V23.1044H46.5029V30.7407H44.8921V27.5862H41.6145V30.7407H40ZM47.8341 30.7407V23.1044H50.8468C51.4235 23.1044 51.9157 23.2075 52.3234 23.4138C52.7335 23.6177 53.0455 23.9073 53.2593 24.2826C53.4756 24.6555 53.5836 25.0943 53.5836 25.5989C53.5836 26.106 53.4743 26.5422 53.2555 26.9076C53.0368 27.2706 52.7198 27.549 52.3047 27.7428C51.8921 27.9368 51.3924 28.0337 50.8058 28.0337H48.7886V26.7361H50.5448C50.853 26.7361 51.1091 26.6939 51.3129 26.6094C51.5167 26.5248 51.6684 26.3981 51.7678 26.2291C51.8697 26.06 51.9206 25.8499 51.9206 25.5989C51.9206 25.3453 51.8697 25.1316 51.7678 24.9576C51.6684 24.7836 51.5155 24.6518 51.3092 24.5623C51.1053 24.4703 50.8481 24.4243 50.5374 24.4243H49.4486V30.7407H47.8341ZM51.9579 27.2656L53.8559 30.7407H52.0736L50.2167 27.2656H51.9579ZM61.2974 25.3005C61.2676 24.9998 61.1396 24.7662 60.9134 24.5996C60.6871 24.433 60.3801 24.3498 59.9924 24.3498C59.7288 24.3498 59.5064 24.387 59.3249 24.4616C59.1434 24.5337 59.0042 24.6344 58.9073 24.7636C58.8128 24.8929 58.7656 25.0395 58.7656 25.2036C58.7607 25.3404 58.7892 25.4597 58.8514 25.5616C58.916 25.6636 59.0043 25.7517 59.1161 25.8263C59.228 25.8984 59.3572 25.9618 59.5039 26.0165C59.6505 26.0687 59.8071 26.1135 59.9737 26.1508L60.6598 26.3148C60.9929 26.3894 61.2986 26.4888 61.577 26.613C61.8554 26.7374 62.0966 26.8903 62.3004 27.0718C62.5043 27.2532 62.6621 27.4669 62.774 27.7131C62.8883 27.9591 62.9467 28.2413 62.9492 28.5594C62.9467 29.0268 62.8274 29.432 62.5913 29.775C62.3576 30.1155 62.0195 30.3803 61.577 30.5692C61.137 30.7557 60.6063 30.8489 59.9849 30.8489C59.3685 30.8489 58.8314 30.7544 58.3741 30.5655C57.9192 30.3765 57.5637 30.097 57.3077 29.7265C57.0542 29.3537 56.9211 28.8925 56.9088 28.3432H58.4711C58.4885 28.5992 58.5617 28.813 58.691 28.9846C58.8227 29.1536 58.998 29.2816 59.2168 29.3686C59.4381 29.4531 59.6879 29.4954 59.9663 29.4954C60.2397 29.4954 60.4771 29.4556 60.6784 29.376C60.8823 29.2965 61.0401 29.1858 61.152 29.0442C61.2639 28.9025 61.3198 28.7397 61.3198 28.5557C61.3198 28.3843 61.2688 28.24 61.1669 28.1232C61.0674 28.0064 60.9208 27.907 60.7269 27.8249C60.5355 27.7429 60.3006 27.6683 60.0222 27.6012L59.1907 27.3924C58.5469 27.2358 58.0386 26.9909 57.6657 26.6578C57.2928 26.3247 57.1076 25.876 57.1101 25.3118C57.1076 24.8494 57.2306 24.4455 57.4792 24.0999C57.7303 23.7544 58.0745 23.4847 58.512 23.2908C58.9496 23.0969 59.4467 23 60.0035 23C60.5703 23 61.065 23.0969 61.4876 23.2908C61.9126 23.4847 62.2433 23.7544 62.4794 24.0999C62.7155 24.4455 62.8373 24.8457 62.8448 25.3005H61.2974ZM64.986 32.8885C64.7847 32.8885 64.5957 32.8723 64.4193 32.84C64.2453 32.8101 64.101 32.7717 63.9867 32.7244L64.3447 31.5387C64.5311 31.5959 64.6989 31.627 64.848 31.6319C64.9997 31.6369 65.1302 31.602 65.2395 31.5275C65.3514 31.4529 65.4422 31.3261 65.5118 31.1472L65.605 30.9048L63.5505 25.0135H65.2209L66.4067 29.2194H66.4663L67.6632 25.0135H69.3449L67.1188 31.3597C67.0119 31.668 66.8665 31.9364 66.6825 32.1651C66.5011 32.3963 66.2712 32.574 65.9928 32.6983C65.7144 32.8251 65.3787 32.8885 64.986 32.8885ZM74.923 26.6466L73.4688 26.7361C73.4439 26.6118 73.3905 26.4999 73.3085 26.4006C73.2264 26.2986 73.1183 26.2179 72.984 26.1582C72.8523 26.0961 72.6945 26.0649 72.5105 26.0649C72.2644 26.0649 72.0569 26.1171 71.8878 26.2215C71.7188 26.3235 71.6343 26.4602 71.6343 26.6317C71.6343 26.7685 71.6889 26.884 71.7984 26.9785C71.9077 27.0729 72.0954 27.1488 72.3614 27.2059L73.3979 27.4147C73.9547 27.5291 74.3699 27.7131 74.6433 27.9666C74.9168 28.2202 75.0535 28.5532 75.0535 28.9659C75.0535 29.3412 74.9429 29.6706 74.7216 29.954C74.5028 30.2373 74.2021 30.4586 73.8193 30.6177C73.439 30.7743 73.0002 30.8526 72.503 30.8526C71.7449 30.8526 71.1408 30.6948 70.6909 30.3791C70.2434 30.0609 69.9812 29.6284 69.9042 29.0815L71.4665 28.9995C71.5137 29.2306 71.628 29.4071 71.8095 29.5289C71.991 29.6482 72.2234 29.7079 72.5068 29.7079C72.7852 29.7079 73.0089 29.6544 73.178 29.5476C73.3495 29.4382 73.4365 29.2978 73.439 29.1262C73.4365 28.9821 73.3756 28.8639 73.2563 28.772C73.137 28.6776 72.953 28.6054 72.7044 28.5557L71.7125 28.3581C71.1533 28.2462 70.7369 28.0524 70.4634 27.7764C70.1925 27.5005 70.057 27.1488 70.057 26.7212C70.057 26.3533 70.1565 26.0364 70.3554 25.7704C70.5567 25.5044 70.8388 25.2994 71.2017 25.1552C71.5671 25.011 71.9947 24.9389 72.4844 24.9389C73.2078 24.9389 73.777 25.0918 74.1921 25.3975C74.6098 25.7033 74.8534 26.1196 74.923 26.6466ZM79.0998 25.0135V26.2066H75.651V25.0135H79.0998ZM76.434 23.6413H78.0221V28.9808C78.0221 29.1275 78.0446 29.2418 78.0896 29.3239C78.1346 29.4034 78.1968 29.4593 78.2763 29.4916C78.3581 29.5239 78.4526 29.5401 78.5591 29.5401C78.6341 29.5401 78.7083 29.5339 78.7833 29.5215C78.8576 29.5065 78.9146 29.4954 78.9543 29.4879L79.2041 30.6699C79.1246 30.6948 79.0128 30.7234 78.8688 30.7557C78.7248 30.7905 78.5493 30.8116 78.3431 30.819C77.9606 30.834 77.6246 30.783 77.3366 30.6662C77.0508 30.5493 76.828 30.3679 76.6689 30.1218C76.5099 29.8757 76.4316 29.565 76.434 29.1896V23.6413ZM82.6833 30.8526C82.0938 30.8526 81.5868 30.7333 81.1623 30.4947C80.7393 30.2536 80.4138 29.913 80.1851 29.473C79.9563 29.0305 79.8423 28.5072 79.8423 27.9032C79.8423 27.3141 79.9563 26.797 80.1851 26.352C80.4138 25.9071 80.7356 25.5603 81.1511 25.3118C81.5681 25.0632 82.0578 24.9389 82.6196 24.9389C82.9976 24.9389 83.3493 24.9998 83.6748 25.1216C84.0033 25.2409 84.2891 25.4211 84.5328 25.6623C84.7788 25.9034 84.9701 26.2066 85.1073 26.5721C85.2438 26.935 85.3121 27.36 85.3121 27.8472V28.2835H80.4761V27.2992H83.8166C83.8166 27.0705 83.7671 26.8679 83.6673 26.6914C83.5683 26.5149 83.4303 26.3769 83.2541 26.2775C83.0801 26.1756 82.8776 26.1246 82.6458 26.1246C82.4051 26.1246 82.1913 26.1805 82.0046 26.2924C81.8208 26.4018 81.6768 26.5497 81.5718 26.7361C81.4676 26.9201 81.4143 27.1251 81.4121 27.3513V28.2873C81.4121 28.5706 81.4638 28.8155 81.5681 29.0218C81.6753 29.2281 81.8261 29.3872 82.0196 29.4991C82.2138 29.611 82.4433 29.6669 82.7096 29.6669C82.8858 29.6669 83.0478 29.642 83.1941 29.5923C83.3411 29.5426 83.4663 29.468 83.5706 29.3686C83.6748 29.2692 83.7543 29.1474 83.8091 29.0031L85.2783 29.1001C85.2041 29.4531 85.0511 29.7613 84.8201 30.0249C84.5913 30.2859 84.2951 30.4897 83.9321 30.6364C83.5721 30.7805 83.1558 30.8526 82.6833 30.8526ZM86.3486 30.7407V25.0135H87.8628V26.0239H87.9296C88.0488 25.6884 88.2476 25.4236 88.5258 25.2297C88.8048 25.0359 89.1378 24.9389 89.5256 24.9389C89.9186 24.9389 90.2523 25.0371 90.5283 25.2335C90.8043 25.4274 90.9881 25.6908 91.0803 26.0239H91.1403C91.2566 25.6958 91.4681 25.4336 91.7741 25.2372C92.0823 25.0383 92.4461 24.9389 92.8661 24.9389C93.4008 24.9389 93.8343 25.1092 94.1673 25.4497C94.5033 25.7878 94.6713 26.2675 94.6713 26.889V30.7407H93.0866V27.2023C93.0866 26.884 93.0018 26.6454 92.8331 26.4863C92.6636 26.3272 92.4528 26.2477 92.1986 26.2477C91.9106 26.2477 91.6856 26.3397 91.5243 26.5236C91.3623 26.7051 91.2813 26.9449 91.2813 27.2432V30.7407H89.7416V27.1687C89.7416 26.8878 89.6606 26.664 89.4993 26.4975C89.3403 26.331 89.1303 26.2477 88.8693 26.2477C88.6931 26.2477 88.5333 26.2924 88.3916 26.3819C88.2528 26.4689 88.1418 26.592 88.0601 26.751C87.9783 26.9076 87.9371 27.0916 87.9371 27.3029V30.7407H86.3486Z',
                          fill: '#8B8A8A',
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              t('div', {
                className: 'max-w-lg mx-auto px-4 py-8',
                children: [
                  e('h1', {
                    className: 'text-3xl text-slate-800 font-bold mb-6',
                    children: 'Recupera tu contrase\xF1a \u2728',
                  }),
                  t('form', {
                    children: [
                      e('div', {
                        className: 'space-y-4',
                        children: t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              htmlFor: 'email',
                              children: [
                                'Correo electr\xF3nico',
                                ' ',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e('input', {
                              id: 'email',
                              className: 'form-input w-full',
                              type: 'email',
                            }),
                          ],
                        }),
                      }),
                      e('div', {
                        className: 'flex justify-end mt-6',
                        children: e('button', {
                          className:
                            'btn bg-secondary hover:bg-primary hover:text-white text-primary whitespace-nowrap',
                          children: 'Enviar link de recuperaci\xF3n',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        t('div', {
          className: 'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
          'aria-hidden': 'true',
          children: [
            e('img', {
              className: 'object-cover object-center w-full h-full',
              src: ge,
              width: '760',
              height: '1024',
              alt: 'Authentication',
            }),
            e('img', {
              className:
                'absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block',
              src: Ne,
              width: '218',
              height: '224',
              alt: 'Authentication decoration',
            }),
          ],
        }),
      ],
    }),
  });
}
const fa = () => {
    const {
        register: a,
        handleSubmit: s,
        control: r,
        formState: { errors: n },
      } = Q(),
      { loading: c, codeGenerator: i, errorApi: o } = l.exports.useContext(B);
    return e('main', {
      className: 'bg-white',
      children: t('div', {
        className: 'relative md:flex',
        children: [
          e('div', {
            className: 'md:w-1/2',
            children: t('div', {
              className: 'min-h-screen h-full flex flex-col after:flex-1',
              children: [
                e('div', {
                  className: 'flex-1',
                  children: e('div', {
                    className:
                      'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                    children: e(q, {
                      to: '/signin',
                      className: 'block',
                      children: e('img', { src: se, alt: 'logo hubmine' }),
                    }),
                  }),
                }),
                t('div', {
                  className: 'max-w-lg mx-auto px-4 py-8',
                  children: [
                    e('h1', {
                      className: 'text-3xl text-slate-800 font-bold mb-6',
                      children: 'Solicita un c\xF3digo \u2728',
                    }),
                    e('div', {
                      children: e('p', {
                        className: 'text-sm',
                        children:
                          'Introduce un n\xFAmero de tel\xE9fono para que puedas generar un c\xF3digo de verificaci\xF3n.',
                      }),
                    }),
                    t('form', {
                      onSubmit: s(i),
                      children: [
                        e('div', {
                          className: 'space-y-4 mt-10',
                          children: t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                htmlFor: 'number',
                                children: [
                                  'N\xFAmero de tel\xE9fono',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(qt, {
                                control: r,
                                name: 'number',
                                rules: { required: !0 },
                                render: (p) => {
                                  var { field: m } = p,
                                    b = m,
                                    { ref: d } = b,
                                    h = ne(b, ['ref']);
                                  return e(
                                    It,
                                    R(x({}, h), {
                                      inputExtraProps: {
                                        ref: d,
                                        required: !0,
                                        autoFocus: !0,
                                      },
                                      country: 'mx',
                                      countryCodeEditable: !1,
                                      specialLabel: 'Player Mobile Number',
                                    })
                                  );
                                },
                              }),
                              n.number &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: n.number.message,
                                }),
                            ],
                          }),
                        }),
                        e('div', {
                          className: 'flex items-center justify-start mt-6',
                          children: c
                            ? e(X, {})
                            : e(z, {
                                children: e('button', {
                                  type: 'submit',
                                  className:
                                    'btn bg-secondary hover:bg-primary hover:text-white text-primary  disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none',
                                  children: 'Generar c\xF3digo',
                                }),
                              }),
                        }),
                      ],
                    }),
                    t('div', {
                      className: 'pt-5 mt-6 ',
                      children: [
                        t('div', {
                          className: 'text-sm',
                          children: [
                            '\xBFTienes cuenta?',
                            ' ',
                            e(q, {
                              className:
                                'font-medium text-primary hover:text-slate-500',
                              to: '/signin',
                              children: 'Iniciar sesi\xF3n',
                            }),
                          ],
                        }),
                        o &&
                          e('div', {
                            className: 'mt-5',
                            children: t('div', {
                              className:
                                'bg-red-100 text-red-600 px-3 py-2 rounded',
                              children: [
                                e('svg', {
                                  className:
                                    'inline w-4 h-4 shrink-0 fill-current mr-2',
                                  viewBox: '0 0 17 17',
                                  children: e('path', {
                                    d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                                  }),
                                }),
                                e('span', {
                                  className: 'text-sm',
                                  children:
                                    'Lo sentimos, al parecer tenemos problemas con nuestro servidor, vuelva a intentar m\xE1s tarde.',
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          e('div', {
            className:
              'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
            'aria-hidden': 'true',
            children: e('img', {
              className: 'object-cover object-center w-full h-full',
              src: ge,
              width: '760',
              height: '1024',
              alt: 'Authentication',
            }),
          }),
        ],
      }),
    });
  },
  ba = () => {
    const a = J(),
      {
        errorApi: s,
        setErrorApi: r,
        savedCode: n,
        codeGenerator: c,
      } = l.exports.useContext(B),
      [i, o] = l.exports.useState(new Array(5).fill('')),
      [d, h] = l.exports.useState(10),
      [p, m] = l.exports.useState(!1),
      [b, v] = l.exports.useState(!1),
      A = () => sessionStorage.removeItem('code');
    l.exports.useEffect(() => {
      if (d) {
        const L = d > 0 && setInterval(() => h(d - 1), 1e3);
        return () => clearInterval(L);
      } else d === 0 && m(!0);
    }, [d]);
    const w = { code: i.join(''), number: n.number },
      N = n.number,
      k = { number: N },
      y = n.code,
      E = (L, D) => {
        if (isNaN(L.value)) return !1;
        o([...i.map((j, S) => (S === D ? L.value : j))]),
          L.nextSibling && L.nextSibling.focus();
      };
    async function O() {
      return fetch('http://supplier.hubmine.mx/api/auth/validate/', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(w),
      })
        .then((L) => L.json())
        .then((L) => {
          if (L.msg === 'Ok') {
            v(!0);
            let D = L;
            sessionStorage.setItem('number', D.number),
              setTimeout(() => {
                v(!1), a('/signup');
              }, 1500);
          } else
            r(!0),
              v(!0),
              setTimeout(() => {
                r(!1), v(!1);
              }, 5e3);
        });
    }
    return e('main', {
      className: 'bg-white',
      children: t('div', {
        className: 'relative md:flex',
        children: [
          e('div', {
            className: 'md:w-1/2',
            children: t('div', {
              className: 'min-h-screen h-full flex flex-col after:flex-1',
              children: [
                e('div', {
                  className: 'flex-1',
                  children: e('div', {
                    className:
                      'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                    children: e(q, {
                      to: '/signin',
                      className: 'block',
                      onClick: A,
                      children: e('img', { src: se, alt: 'logo hubmine' }),
                    }),
                  }),
                }),
                t('div', {
                  className: 'max-w-lg mx-auto px-4 py-8',
                  children: [
                    e('h1', {
                      className: 'text-3xl text-slate-800 font-bold mb-6',
                      children: 'Verificaci\xF3n del c\xF3digo \u2728',
                    }),
                    t('div', {
                      className: ' mb-6 text-center flex flex-col',
                      children: [
                        e('h5', {
                          className: 'text-md text-slate-800 font-bold',
                          children: 'Te enviamos un c\xF3digo al:',
                        }),
                        e('span', {
                          className: 'text-red-500 font-bold',
                          children: N,
                        }),
                        t('span', {
                          className: 'text-red-500 font-bold',
                          children: ['tu codigo: ', y],
                        }),
                      ],
                    }),
                    e('div', {
                      children: e('p', {
                        className: 'text-sm',
                        children:
                          'Introduce el c\xF3digo que te hicimos llegar por mensaje SMS.',
                      }),
                    }),
                    t('form', {
                      children: [
                        e('div', {
                          className:
                            'space-x-10 mt-5 flex justify-center items-center',
                          children: i.map((L, D) =>
                            e(
                              'input',
                              {
                                className: 'form-input w-10 text-xl',
                                type: 'text',
                                name: 'otp',
                                maxLength: '1',
                                value: L,
                                onChange: (j) => E(j.target, D),
                                onFocus: (j) => j.target.select(),
                              },
                              D
                            )
                          ),
                        }),
                        e('div', {
                          className: 'flex items-center justify-end mt-16',
                          children: b
                            ? e(X, {})
                            : e(z, {
                                children: e('button', {
                                  onClick: O,
                                  type: 'button',
                                  className:
                                    'btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3',
                                  children: 'Validar c\xF3digo',
                                }),
                              }),
                        }),
                      ],
                    }),
                    t('div', {
                      className: 'pt-5 mt-6 space-y-6 ',
                      children: [
                        p
                          ? e('div', {
                              className: 'flex justify-center items-center',
                              children: e('button', {
                                onClick: () => {
                                  c(k), m(!1), h(10);
                                },
                                className:
                                  'text-sm font-medium text-primary hover:text-slate-500',
                                children: 'Solicitar c\xF3digo nuevo',
                              }),
                            })
                          : t('div', {
                              className: 'text-sm text-center',
                              children: [
                                'Tu c\xF3digo vence en: ',
                                d,
                                ' segundos',
                              ],
                            }),
                        t('div', {
                          className: 'text-sm text-center',
                          children: [
                            '\xBFEste no es tu n\xFAmero?',
                            ' ',
                            e(q, {
                              onClick: A,
                              className:
                                'font-medium text-primary hover:text-secondary',
                              to: '/code/generator',
                              children: 'Cambiar n\xFAmero',
                            }),
                          ],
                        }),
                        s &&
                          e('div', {
                            className: 'mt-5',
                            children: t('div', {
                              className:
                                'bg-red-100 text-red-600 px-3 py-2 rounded',
                              children: [
                                e('svg', {
                                  className:
                                    'inline w-4 h-4 shrink-0 fill-current mr-2',
                                  viewBox: '0 0 17 17',
                                  children: e('path', {
                                    d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                                  }),
                                }),
                                e('span', {
                                  className: 'text-sm',
                                  children:
                                    'C\xF3digo incorrecto, verifica que tu c\xF3digo que te llego en un mensaje SMS sea el correspondiente.',
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          e('div', {
            className:
              'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
            'aria-hidden': 'true',
            children: e('img', {
              className: 'object-cover object-center w-full h-full',
              src: ge,
              width: '760',
              height: '1024',
              alt: 'Authentication',
            }),
          }),
        ],
      }),
    });
  };
var Xe = '/dash-supplier2.0/assets/question.97bcae66.jpg';
const va = () => {
    const [a, s] = l.exports.useState(0),
      {
        register: r,
        handleSubmit: n,
        formState: { errors: c, isValid: i },
      } = Q({ mode: 'all' }),
      o = J();
    let d = sessionStorage.getItem('id');
    const {
        loading: h,
        setLoading: p,
        errorMenssage: m,
        setErrorMenssage: b,
      } = l.exports.useContext(B),
      v = () => {
        s((k) => k + 1);
      },
      A = () => {
        s((k) => k - 1);
      },
      w = () => {
        if (!(a > 2))
          return a === 2
            ? e('div', {
                children: h
                  ? e(X, {})
                  : e('button', {
                      type: 'button',
                      disabled: !i,
                      onClick: n(N),
                      className:
                        'btn bg-secondary hover:bg-primary hover:text-white text-primary ml-auto disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none',
                      children: 'Finalizar ->',
                    }),
              })
            : e('div', {
                children: e('button', {
                  disabled: !i,
                  type: 'button',
                  onClick: v,
                  className:
                    'btn bg-secondary hover:bg-primary hover:text-white text-primary ml-auto disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none',
                  children: 'Siguiente paso ->',
                }),
              });
      };
    async function N(k) {
      return fetch(`http://supplier.hubmine.mx/api/suppliers/create/${d}/`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(k),
      })
        .then((y) => y.json())
        .then((y) => {
          y.code === 201
            ? (p(!0),
              localStorage.setItem('first_name', y.first_name),
              localStorage.setItem('supplier_id', y.supplier_id),
              localStorage.setItem('token', y.token),
              setTimeout(() => {
                p(!1), o('/multiStep/end');
              }, 1500))
            : (b(!0),
              setTimeout(() => {
                b(!1);
              }, 3e3));
        });
    }
    return e('main', {
      className: 'bg-white',
      children: t('div', {
        className: 'relative flex',
        children: [
          e('div', {
            className: 'w-full md:w-1/2',
            children: t('div', {
              className: 'min-h-screen h-full flex flex-col after:flex-1',
              children: [
                e('div', {
                  className: 'flex-1',
                  children: e('div', {
                    className:
                      'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                    children: e('div', {
                      className: 'block',
                      children: e('img', { src: se, alt: 'Logo hubmine' }),
                    }),
                  }),
                }),
                e('div', {
                  className: 'px-4 py-8',
                  children: t('div', {
                    className: 'max-w-md mx-auto',
                    children: [
                      t('form', {
                        children: [
                          a === 0 &&
                            t(z, {
                              children: [
                                e('div', {
                                  className: 'max-w-md mx-auto w-full mb-12',
                                  children: t('div', {
                                    className: 'relative',
                                    children: [
                                      e('div', {
                                        className:
                                          'absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200',
                                        'aria-hidden': 'true',
                                      }),
                                      t('section', {
                                        className:
                                          'relative flex justify-between w-full',
                                        children: [
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                              children: '1',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500',
                                              children: '2',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500',
                                              children: '3',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500',
                                              children: '4',
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                e('h1', {
                                  className:
                                    'text-3xl text-slate-800 font-bold mb-6',
                                  children:
                                    'Cu\xE9ntanos sobre tu empresa \u2728',
                                }),
                                e('div', {
                                  className: 'space-y-4 mb-8',
                                  children: t('div', {
                                    children: [
                                      t('label', {
                                        className:
                                          'block text-sm font-medium mb-1',
                                        children: [
                                          'Marca comercial (Nombre)',
                                          ' ',
                                          e('span', {
                                            className: 'text-rose-500',
                                            children: '*',
                                          }),
                                        ],
                                      }),
                                      e(
                                        'input',
                                        x(
                                          {
                                            maxLength: '35',
                                            autoComplete: 'off',
                                            className:
                                              'form-input w-full capitalize',
                                            type: 'text',
                                          },
                                          r('commercial_brand', {
                                            required: {
                                              value: !0,
                                              message: 'El campo es requerido',
                                            },
                                            pattern: {
                                              value: /[a-zA-Z]/,
                                              message:
                                                'El formato no es correcto',
                                            },
                                          })
                                        )
                                      ),
                                      c.commercial_brand &&
                                        e('span', {
                                          className: 'text-red-500 text-sm',
                                          children: c.commercial_brand.message,
                                        }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          a === 1 &&
                            t(z, {
                              children: [
                                e('div', {
                                  className: 'max-w-md mx-auto w-full mb-12',
                                  children: t('div', {
                                    className: 'relative',
                                    children: [
                                      e('div', {
                                        className:
                                          'absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200',
                                        'aria-hidden': 'true',
                                      }),
                                      t('section', {
                                        className:
                                          'relative flex justify-between w-full',
                                        children: [
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                              children: '1',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                              children: '2',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500',
                                              children: '3',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500',
                                              children: '4',
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                e('h1', {
                                  className:
                                    'text-3xl text-slate-800 font-bold mb-6',
                                  children: 'Datos fiscales \u2728',
                                }),
                                t('div', {
                                  className: 'space-y-4 mb-8',
                                  children: [
                                    t('div', {
                                      children: [
                                        t('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          children: [
                                            'Raz\xF3n social',
                                            ' ',
                                            e('span', {
                                              className: 'text-rose-500',
                                              children: '*',
                                            }),
                                          ],
                                        }),
                                        e(
                                          'input',
                                          x(
                                            {
                                              maxLength: '35',
                                              autoComplete: 'off',
                                              className:
                                                'form-input w-full uppercase',
                                              type: 'text',
                                            },
                                            r('social_reason', {
                                              required: {
                                                value: !0,
                                                message:
                                                  'El campo es requerido',
                                              },
                                              pattern: {
                                                value: /[a-zA-Z]/,
                                                message:
                                                  'El formato no es correcto',
                                              },
                                            })
                                          )
                                        ),
                                        c.social_reason &&
                                          e('span', {
                                            className: 'text-red-500 text-sm',
                                            children: c.social_reason.message,
                                          }),
                                      ],
                                    }),
                                    t('div', {
                                      children: [
                                        t('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          children: [
                                            'RFC',
                                            e('span', {
                                              className: 'text-rose-500',
                                              children: '*',
                                            }),
                                          ],
                                        }),
                                        e(
                                          'input',
                                          x(
                                            {
                                              maxLength: '13',
                                              className:
                                                'uppercase form-input w-full ',
                                              autoComplete: 'off',
                                              type: 'text',
                                            },
                                            r('rfc', {
                                              required: {
                                                value: !0,
                                                message:
                                                  'El campo es requerido',
                                              },
                                              pattern: {
                                                value: /[a-zA-Z0-9]/,
                                                message:
                                                  'El formato no es correcto',
                                              },
                                              minLength: {
                                                value: 13,
                                                message:
                                                  'El RFC debe de tener 13 caracteres',
                                              },
                                            })
                                          )
                                        ),
                                        ' ',
                                        c.rfc &&
                                          e('span', {
                                            className: 'text-red-500 text-sm',
                                            children: c.rfc.message,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          a === 2 &&
                            t(z, {
                              children: [
                                e('div', {
                                  className: 'max-w-md mx-auto w-full mb-12',
                                  children: t('div', {
                                    className: 'relative',
                                    children: [
                                      e('div', {
                                        className:
                                          'absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200',
                                        'aria-hidden': 'true',
                                      }),
                                      t('section', {
                                        className:
                                          'relative flex justify-between w-full',
                                        children: [
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                              children: '1',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                              children: '2',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold  bg-primary text-white',
                                              children: '3',
                                            }),
                                          }),
                                          e('div', {
                                            children: e('div', {
                                              className:
                                                'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500',
                                              children: '4',
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                e('h1', {
                                  className:
                                    'text-3xl text-slate-800 font-bold mb-6',
                                  children:
                                    'Datos de contacto comercial \u2728',
                                }),
                                t('div', {
                                  className: 'space-y-4 mb-8',
                                  children: [
                                    t('div', {
                                      children: [
                                        t('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          children: [
                                            'Numero de telefono del contacto',
                                            e('span', {
                                              className: 'text-rose-500',
                                              children: '*',
                                            }),
                                          ],
                                        }),
                                        e(
                                          'input',
                                          x(
                                            {
                                              className:
                                                'form-input w-full capitalize',
                                              autoComplete: 'off',
                                              type: 'number',
                                            },
                                            r('bussiness_phone', {
                                              required: {
                                                value: !0,
                                                message:
                                                  'El campo es requerido',
                                              },
                                              pattern: {
                                                value: /[0-9]/,
                                                message:
                                                  'El formato no es correcto',
                                              },
                                            })
                                          )
                                        ),
                                        ' ',
                                        c.bussiness_phone &&
                                          e('span', {
                                            className: 'text-red-500 text-sm',
                                            children: c.bussiness_phone.message,
                                          }),
                                      ],
                                    }),
                                    t('div', {
                                      children: [
                                        t('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          children: [
                                            'Email del contacto',
                                            e('span', {
                                              className: 'text-rose-500',
                                              children: '*',
                                            }),
                                          ],
                                        }),
                                        e(
                                          'input',
                                          x(
                                            {
                                              maxLength: '35',
                                              className: 'form-input w-full',
                                              autoComplete: 'off',
                                              type: 'email',
                                            },
                                            r('bussiness_email', {
                                              required: {
                                                value: !0,
                                                message:
                                                  'El campo es requerido',
                                              },
                                              pattern: {
                                                value:
                                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message:
                                                  'El formato no es correcto',
                                              },
                                            })
                                          )
                                        ),
                                        ' ',
                                        c.bussiness_email &&
                                          e('span', {
                                            className: 'text-red-500 text-sm',
                                            children: c.bussiness_email.message,
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          t('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              a > 0 &&
                                e('div', {
                                  children: e('button', {
                                    type: 'button',
                                    onClick: A,
                                    className:
                                      'text-sm underline hover:no-underline  ',
                                    children: '<- Regresar',
                                  }),
                                }),
                              w(),
                            ],
                          }),
                        ],
                      }),
                      m &&
                        e('div', {
                          className: 'mt-5',
                          children: t('div', {
                            className:
                              'bg-red-100 text-red-600 px-3 py-2 rounded',
                            children: [
                              e('svg', {
                                className:
                                  'inline w-4 h-4 shrink-0 fill-current mr-2',
                                viewBox: '0 0 17 17',
                                children: e('path', {
                                  d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                                }),
                              }),
                              e('span', {
                                className: 'text-sm',
                                children:
                                  'Lo sentimos, al parecer tenemos problemas con nuestro servidor.',
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          }),
          t('div', {
            className:
              'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
            'aria-hidden': 'true',
            children: [
              e('img', {
                className: 'object-cover object-center w-full h-full',
                src: Xe,
                width: '760',
                height: '1024',
                alt: 'Onboarding',
              }),
              e('img', {
                className:
                  'absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block',
                src: Ne,
                width: '218',
                height: '224',
                alt: 'Authentication decoration',
              }),
            ],
          }),
        ],
      }),
    });
  },
  ga = () =>
    e('main', {
      className: 'bg-white',
      children: t('div', {
        className: 'relative flex',
        children: [
          e('div', {
            className: 'w-full md:w-1/2',
            children: t('div', {
              className: 'min-h-screen h-full flex flex-col after:flex-1',
              children: [
                t('div', {
                  className: 'flex-1',
                  children: [
                    e('div', {
                      className:
                        'flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8',
                      children: e('div', {
                        className: 'block',
                        children: e('img', { src: se, alt: 'Logo hubmine' }),
                      }),
                    }),
                    e('div', {
                      className: 'px-4 pt-12 pb-8',
                      children: e('div', {
                        className: 'max-w-md mx-auto w-full',
                        children: t('div', {
                          className: 'relative',
                          children: [
                            e('div', {
                              className:
                                'absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200',
                              'aria-hidden': 'true',
                            }),
                            t('section', {
                              className: 'relative flex justify-between w-full',
                              children: [
                                e('div', {
                                  children: e('div', {
                                    className:
                                      'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                    children: '1',
                                  }),
                                }),
                                e('div', {
                                  children: e('div', {
                                    className:
                                      'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                    children: '2',
                                  }),
                                }),
                                e('div', {
                                  children: e('div', {
                                    className:
                                      'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                    children: '3',
                                  }),
                                }),
                                e('div', {
                                  children: e('div', {
                                    className:
                                      'flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white',
                                    children: '4',
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                e('div', {
                  className: 'px-4 py-8',
                  children: e('div', {
                    className: 'max-w-md mx-auto',
                    children: t('div', {
                      className: 'text-center',
                      children: [
                        t('svg', {
                          className: 'inline-flex w-16 h-16 fill-current mb-6',
                          viewBox: '0 0 64 64',
                          children: [
                            e('circle', {
                              className: 'text-emerald-100',
                              cx: '32',
                              cy: '32',
                              r: '32',
                            }),
                            e('path', {
                              className: 'text-emerald-500',
                              d: 'm28.5 41-8-8 3-3 5 5 12-12 3 3z',
                            }),
                          ],
                        }),
                        t('h1', {
                          className: 'text-3xl text-slate-800 font-bold mb-8',
                          children: [
                            'Ya est\xE1s registrado en Hubmine supplier system',
                            e('p', {
                              className: 'font-normal text-lg ',
                              children:
                                'Ya puedes crear tus plantas de recolecci\xF3n, cargar, ver el sock de tus productos y mucho m\xE1s.',
                            }),
                          ],
                        }),
                        e(q, {
                          className:
                            'btn bg-secondary hover:bg-primary hover:text-white text-primary',
                          to: '/',
                          children: 'Ingresar a proveedores ->',
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
          t('div', {
            className:
              'hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2',
            'aria-hidden': 'true',
            children: [
              e('img', {
                className: 'object-cover object-center w-full h-full',
                src: Xe,
                width: '760',
                height: '1024',
                alt: 'Onboarding',
              }),
              e('img', {
                className:
                  'absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block',
                src: Ne,
                width: '218',
                height: '224',
                alt: 'Authentication decoration',
              }),
            ],
          }),
        ],
      }),
    });
function $({ children: a, id: s, modalOpen: r, setModalOpen: n }) {
  const c = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const i = ({ target: o }) => {
        !r || c.current.contains(o) || n(!1);
      };
      return (
        document.addEventListener('click', i),
        () => document.removeEventListener('click', i)
      );
    }),
    l.exports.useEffect(() => {
      const i = ({ keyCode: o }) => {
        !r || o !== 27 || n(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }),
    t(z, {
      children: [
        e(T, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: r,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(T, {
          id: s,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: r,
          enter: 'transition ease-in-out duration-200',
          enterStart: 'opacity-0 translate-y-4',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-in-out duration-200',
          leaveStart: 'opacity-100 translate-y-0',
          leaveEnd: 'opacity-0 translate-y-4',
          children: e('div', {
            ref: c,
            className:
              'bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full',
            children: a,
          }),
        }),
      ],
    })
  );
}
const Na = () => {
  const { dangerModalOpen: a, setDangerModalOpen: s } = l.exports.useContext(B),
    r = J(),
    n = () => {
      r('/products/list'), s(!1);
    };
  return e('div', {
    className: 'm-1.5',
    children: e($, {
      id: 'danger-modal',
      modalOpen: a,
      setModalOpen: s,
      children: t('div', {
        className: 'p-5 flex space-x-4',
        children: [
          e('div', {
            className:
              'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100',
            children: e('svg', {
              className: 'w-4 h-4 shrink-0 fill-current text-rose-500',
              viewBox: '0 0 16 16',
              children: e('path', {
                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
              }),
            }),
          }),
          t('div', {
            children: [
              e('div', {
                className: 'mb-2',
                children: e('div', {
                  className: 'text-lg font-semibold text-slate-800',
                  children: '\xBFSeguro que quieres dejar esta p\xE1gina?',
                }),
              }),
              e('div', {
                className: 'text-sm mb-10',
                children: e('div', {
                  className: 'space-y-2',
                  children: e('p', {
                    children:
                      'Se perder\xE1n todos los datos capturados y no podr\xE1s recuperarlos.',
                  }),
                }),
              }),
              t('div', {
                className: 'flex flex-wrap justify-end space-x-2',
                children: [
                  e('button', {
                    className:
                      'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                    onClick: (c) => {
                      c.stopPropagation(), s(!1);
                    },
                    children: 'Continuar con la captura',
                  }),
                  e('button', {
                    onClick: (c) => {
                      c.stopPropagation(), n();
                    },
                    type: 'button',
                    className:
                      'btn-sm bg-rose-500 hover:bg-rose-600 text-white',
                    children: 'S\xED, quiero salir',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
};
function Z({ children: a, className: s, type: r, open: n, setOpen: c }) {
  const i = (d) => {
    switch (d) {
      case 'warning':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        });
      case 'error':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        });
      case 'success':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        });
      default:
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
          }),
        });
    }
  };
  return e(z, {
    children:
      n &&
      e('div', {
        className: s,
        children: e('div', {
          className: `px-4 py-2 rounded-sm text-sm text-white ${((d) => {
            switch (d) {
              case 'warning':
                return 'bg-amber-500';
              case 'error':
                return 'bg-rose-500';
              case 'success':
                return 'bg-emerald-500';
              default:
                return 'bg-primary';
            }
          })(r)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  i(r),
                  e('div', { className: 'font-medium', children: a }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => c(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
const wa = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out',
    cursor: 'pointer',
    width: '100%',
  },
  ya = { borderColor: '#0DB1AC' },
  Ca = { borderColor: '#0DB1AC' },
  ka = { borderColor: '#0DB1AC' };
function Sa({ files: a, setFiles: s }) {
  const r = l.exports.useCallback((m) => {
      s(m.map((b) => Object.assign(b, { preview: URL.createObjectURL(b) })));
    }, []),
    {
      getRootProps: n,
      getInputProps: c,
      isDragActive: i,
      isDragAccept: o,
      isDragReject: d,
    } = _e({
      onDrop: r,
      accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] },
      multiple: !1,
    }),
    h = l.exports.useMemo(
      () => x(x(x(x({}, wa), i ? ya : {}), o ? Ca : {}), d ? ka : {}),
      [i, d, o]
    ),
    p = a.map((m) =>
      t(
        'div',
        {
          className: 'mt-5 flex flex-col justify-center items-center',
          children: [
            e('p', {
              className: 'mt-3 font-semibold text-center',
              children: 'Vista previa',
            }),
            e('img', { className: 'w-44 mt-2 ', src: m.preview, alt: m.name }),
            e('p', { className: 'text-center', children: m.name }),
          ],
        },
        m.name
      )
    );
  return (
    l.exports.useEffect(
      () => () => {
        a.forEach((m) => URL.revokeObjectURL(m.preview));
      },
      [a]
    ),
    Q(),
    t('section', {
      className: 'flex flex-col justify-center items-center w-full',
      children: [
        t(
          'label',
          R(x({}, n({ style: h })), {
            children: [
              t('div', {
                className:
                  'flex flex-col justify-center items-center pt-5 pb-6',
                children: [
                  e('svg', {
                    'aria-hidden': 'true',
                    className: 'mb-3 w-10 h-10 text-gray-400',
                    fill: 'none',
                    stroke: 'currentColor',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: e('path', {
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeWidth: '2',
                      d: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
                    }),
                  }),
                  e('p', {
                    className:
                      'mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold',
                    children: 'Click para cargar imagen o arrastra y suelta',
                  }),
                  e('p', {
                    className: 'text-xs text-gray-500 dark:text-gray-400',
                    children:
                      'Puedes cambiar tu imagen haciendo las mismas indicaciones',
                  }),
                ],
              }),
              e('input', x({}, c())),
            ],
          })
        ),
        e('aside', { children: p }),
      ],
    })
  );
}
const Aa = () => {
    const a = J(),
      [s, r] = l.exports.useState([]),
      n = localStorage.getItem('supplier_id'),
      {
        handleSubmit: c,
        register: i,
        setValue: o,
        formState: { errors: d },
      } = Q({ defaultValues: { img_product: s } }),
      {
        setDangerModalOpen: h,
        bannerSuccessOpen: p,
        setBannerSuccessOpen: m,
        bannerErrorOpen: b,
        setBannerErrorOpen: v,
        loading: A,
        setLoading: w,
        setProductReload: N,
        setRequiredFile: k,
      } = l.exports.useContext(B);
    return t(z, {
      children: [
        t('div', {
          className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
          children: [
            e('div', {
              className: 'mb-8',
              children: e('h1', {
                className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                children: 'A\xF1adir Productos \u{1F4E6}',
              }),
            }),
            p
              ? e('div', {
                  className: 'space-y-3',
                  children: e(Z, {
                    type: 'success',
                    open: p,
                    setOpen: m,
                    children: 'Operaci\xF3n exitosa. Redirigiendo...',
                  }),
                })
              : b
              ? e('div', {
                  className: 'space-y-3',
                  children: e(Z, {
                    type: 'error',
                    open: b,
                    setOpen: v,
                    children: 'Debe de cargar una imagen del producto.',
                  }),
                })
              : null,
            e('div', { className: 'border-t border-slate-200' }),
            t('div', {
              className: 'space-y-8 mt-8',
              children: [
                t('article', {
                  className: 'mt-10',
                  children: [
                    e('h2', {
                      className: 'text-2xl text-slate-800 font-bold mb-6',
                      children: 'Datos del producto',
                    }),
                    e('div', { className: 'border-t border-slate-200' }),
                  ],
                }),
                t('form', {
                  onSubmit: c(async (E) => {
                    let O = new FormData();
                    O.append('category_id ', E.category_id),
                      O.append('unity_id', E.unity_id),
                      O.append('name', E.name),
                      O.append('short_description', E.short_description),
                      O.append('description ', E.description),
                      O.append('mark ', E.mark),
                      O.append('currency_id ', E.currency_id),
                      O.append('price ', E.price),
                      O.append('img_product', s[0]),
                      fetch(
                        `http://supplier.hubmine.mx/api/suppliers/product/create/${n}/`,
                        { method: 'POST', body: O }
                      ).then((L) => {
                        L.status === 201
                          ? (m(!0),
                            w(!0),
                            setTimeout(() => {
                              m(!1), w(!1), a('/products/list');
                            }, 1500))
                          : (k(!0),
                            v(!0),
                            w(!0),
                            setTimeout(() => {
                              v(!1), w(!1), k(!1);
                            }, 1500)),
                          N(!0);
                      });
                  }),
                  children: [
                    t('section', {
                      className: 'grid gap-5 md:grid-cols-3',
                      children: [
                        e('div', {
                          children: t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Nombre del producto',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    maxLength: '30',
                                    className: 'form-input w-full ',
                                    autoComplete: 'off',
                                    type: 'text',
                                  },
                                  i('name', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value: /[a-zA-Z0-9]/,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              d.name &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: d.name.message,
                                }),
                            ],
                          }),
                        }),
                        e('div', {
                          children: t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Categoria del producto',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              t(
                                'select',
                                R(
                                  x(
                                    { className: 'form-select w-full' },
                                    i('category_id', {
                                      required: {
                                        value: !0,
                                        message: 'El campo es requerido',
                                      },
                                    })
                                  ),
                                  {
                                    children: [
                                      e('option', {
                                        value: '',
                                        children: 'Selecciona',
                                      }),
                                      e('option', {
                                        value: '1',
                                        children: 'Agregado',
                                      }),
                                      e('option', {
                                        value: '2',
                                        children: 'Cemento',
                                      }),
                                      e('option', {
                                        value: '3',
                                        children: 'Concreto',
                                      }),
                                      e('option', {
                                        value: '4',
                                        children: 'Maquinaria',
                                      }),
                                      e('option', {
                                        value: '5',
                                        children: 'Prefabricados',
                                      }),
                                      e('option', {
                                        value: '6',
                                        children: 'Sanitarios',
                                      }),
                                      e('option', {
                                        value: '7',
                                        children: 'Lavados',
                                      }),
                                      e('option', {
                                        value: '8',
                                        children: 'Pisos',
                                      }),
                                      e('option', {
                                        value: '9',
                                        children: 'Acero',
                                      }),
                                    ],
                                  }
                                )
                              ),
                              d.category_id &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: d.category_id.message,
                                }),
                            ],
                          }),
                        }),
                        e('div', {
                          children: t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Breve descripci\xF3n',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    maxLength: '35',
                                    className: 'form-input w-full',
                                    autoComplete: 'off',
                                    type: 'text',
                                  },
                                  i('short_description', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value: /[a-zA-Z0-9]/,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              ' ',
                              d.short_description &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: d.short_description.message,
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    t('article', {
                      className: 'mt-10',
                      children: [
                        e('h2', {
                          className: 'text-2xl text-slate-800 font-bold mb-6',
                          children: 'Precio y marca',
                        }),
                        e('div', { className: 'border-t border-slate-200' }),
                      ],
                    }),
                    t('section', {
                      className: 'grid gap-5 md:grid-cols-3 mt-8',
                      children: [
                        t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'Moneda',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            t(
                              'select',
                              R(
                                x(
                                  { className: 'form-select w-full' },
                                  i('currency_id', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                  })
                                ),
                                {
                                  children: [
                                    e('option', {
                                      value: '',
                                      children: 'Selecciona',
                                    }),
                                    e('option', {
                                      value: '1',
                                      children: 'Peso mexicano',
                                    }),
                                  ],
                                }
                              )
                            ),
                            d.currency_id &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: d.currency_id.message,
                              }),
                          ],
                        }),
                        t('div', {
                          children: [
                            t('div', {
                              children: [
                                t('label', {
                                  className: 'block text-sm font-medium mb-1',
                                  children: [
                                    'Precio del producto',
                                    e('span', {
                                      className: 'text-rose-500',
                                      children: '*',
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'relative',
                                  children: [
                                    e(
                                      'input',
                                      x(
                                        {
                                          maxLength: '10',
                                          autoComplete: 'off',
                                          className: 'form-input w-full pl-8',
                                          type: 'text',
                                        },
                                        i('price', {
                                          required: {
                                            value: !0,
                                            message: 'El campo es requerido',
                                          },
                                          pattern: {
                                            value: /[0-9/]/,
                                            message:
                                              'El formato no es correcto',
                                          },
                                        })
                                      )
                                    ),
                                    e('div', {
                                      className:
                                        'absolute inset-0 right-auto flex items-center pointer-events-none',
                                      children: e('span', {
                                        className:
                                          'text-sm text-slate-400 font-medium px-3',
                                        children: '$',
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            d.price &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: d.price.message,
                              }),
                          ],
                        }),
                        t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'Marca del producto',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e(
                              'input',
                              x(
                                {
                                  maxLength: '35',
                                  className: 'form-input w-full',
                                  autoComplete: 'off',
                                  type: 'text',
                                },
                                i('mark', {
                                  required: {
                                    value: !0,
                                    message: 'El campo es requerido',
                                  },
                                  pattern: {
                                    value: /[a-zA-Z0-9]/,
                                    message: 'El formato no es correcto',
                                  },
                                })
                              )
                            ),
                            ' ',
                            d.mark &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: d.mark.message,
                              }),
                          ],
                        }),
                        t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'Unidad de medida',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            t(
                              'select',
                              R(
                                x(
                                  { className: 'form-select w-full' },
                                  i('unity_id', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                  })
                                ),
                                {
                                  children: [
                                    e('option', {
                                      value: '',
                                      children: 'Selecciona',
                                    }),
                                    e('option', {
                                      value: '1',
                                      children: 'Tonelada',
                                    }),
                                    e('option', {
                                      value: '2',
                                      children: 'Metro c\xFAbico',
                                    }),
                                    e('option', {
                                      value: '3',
                                      children: 'Unidad',
                                    }),
                                    e('option', {
                                      value: '4',
                                      children: 'Kilogramo',
                                    }),
                                  ],
                                }
                              )
                            ),
                            d.unity_id &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: d.unity_id.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    t('article', {
                      className: 'mt-10',
                      children: [
                        e('h2', {
                          className: 'text-2xl text-slate-800 font-bold mb-6',
                          children: 'Descripci\xF3n e Imagen',
                        }),
                        e('div', { className: 'border-t border-slate-200' }),
                      ],
                    }),
                    e('section', {
                      className: 'mt-8',
                      children: e('div', {
                        children: t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'Descripci\xF3n del producto (funci\xF3n, objetivo, etc)',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e(
                              'textarea',
                              x(
                                {
                                  maxLength: '150',
                                  className: 'form-input w-full',
                                  type: 'text',
                                  autoComplete: 'off',
                                },
                                i('description', {
                                  required: {
                                    value: !0,
                                    message: 'El campo es requerido',
                                  },
                                  maxLength: {
                                    value: 150,
                                    message:
                                      'sol\xF3 se permiten 150 caracteres',
                                  },
                                })
                              )
                            ),
                            d.description &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: d.description.message,
                              }),
                          ],
                        }),
                      }),
                    }),
                    e('section', {
                      children: e('div', {
                        className: 'mt-8 w-full',
                        children: e(
                          Sa,
                          R(
                            x(
                              { files: s, setFiles: r },
                              i('img_product', {
                                required: {
                                  value: !1,
                                  message: 'El campo es requerido',
                                },
                              })
                            ),
                            { onChange: o('img_product', s) }
                          )
                        ),
                      }),
                    }),
                    t('section', {
                      className:
                        'w-full flex space-x-6 justify-center items-center mt-10',
                      children: [
                        e('div', {
                          className: 'm-1.5',
                          children: A
                            ? e(X, {})
                            : e(z, {
                                children: e('button', {
                                  type: 'submit',
                                  className:
                                    'btn bg-emerald-500 hover:bg-emerald-600 text-white',
                                  children: 'Guardar',
                                }),
                              }),
                        }),
                        e('div', {
                          className: 'm-1.5',
                          children: e('button', {
                            onClick: (E) => {
                              E.stopPropagation(), h(!0);
                            },
                            type: 'button',
                            className:
                              'btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50',
                            children: 'Cancelar',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e(Na, {}),
      ],
    });
  },
  La = () => {
    const { sidebarOpen: a, setSidebarOpen: s } = l.exports.useContext(B);
    return t('div', {
      className: 'flex h-screen overflow-hidden',
      children: [
        e(_, { sidebarOpen: a, setSidebarOpen: s }),
        t('div', {
          className:
            'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
          children: [
            e(U, { sidebarOpen: a, setSidebarOpen: s }),
            e('main', { children: e(Aa, {}) }),
          ],
        }),
      ],
    });
  },
  Ea = ({ id: a }) => {
    const {
        dangerModalOpen: s,
        setDangerModalOpen: r,
        setBannerSuccessOpen: n,
        setBannerErrorOpen: c,
        setProductReload: i,
      } = l.exports.useContext(B),
      o = async (d) => {
        fetch(`http://supplier.hubmine.mx/api/suppliers/product/delete/${d}/`, {
          method: 'DELETE',
        }).then((h) => {
          h.status === 204
            ? (n(!0),
              setTimeout(() => {
                n(!1);
              }, 1500))
            : (c(!0),
              setTimeout(() => {
                c(!1);
              }, 1500));
        }),
          i(!0);
      };
    return e('div', {
      className: 'm-1.5',
      children: e($, {
        id: 'danger-modal',
        modalOpen: s,
        setModalOpen: r,
        children: t('div', {
          className: 'p-5 flex space-x-4',
          children: [
            e('div', {
              className:
                'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100',
              children: e('svg', {
                className: 'w-4 h-4 shrink-0 fill-current text-rose-500',
                viewBox: '0 0 16 16',
                children: e('path', {
                  d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                }),
              }),
            }),
            t('div', {
              children: [
                e('div', {
                  className: 'mb-2',
                  children: e('div', {
                    className: 'text-lg font-semibold text-slate-800',
                    children: '\xBFSeguro de quieres eliminar el producto?',
                  }),
                }),
                e('div', {
                  className: 'text-sm mb-10',
                  children: e('div', {
                    className: 'space-y-2',
                    children: e('p', {
                      children:
                        'Al eliminar el producto, ya no se podr\xE1 recuperar la informaci\xF3n.',
                    }),
                  }),
                }),
                t('div', {
                  className: 'flex flex-wrap justify-end space-x-2',
                  children: [
                    e('button', {
                      className:
                        'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                      onClick: (d) => {
                        d.stopPropagation(), r(!1);
                      },
                      children: 'No deseo eliminar',
                    }),
                    e('button', {
                      onClick: (d) => {
                        d.stopPropagation(), o(a), r(!1);
                      },
                      type: 'button',
                      className:
                        'btn-sm bg-rose-500 hover:bg-rose-600 text-white',
                      children: 'S\xED quiero eliminar',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Ma = (a) => {
    const { setDangerModalOpen: s } = l.exports.useContext(B),
      r = (c) => {
        switch (c) {
          case 'Estado Borrador':
            return 'bg-red-100 text-red-600';
          default:
            return 'bg-slate-100 text-slate-500';
        }
      },
      n = () =>
        a.has_stock === !0
          ? e('span', { children: 'Disponible' })
          : e('span', { children: 'Sin producto' });
    return e(z, {
      children: t('tr', {
        children: [
          e('td', {
            className:
              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2',
            children: t('div', {
              className: 'flex items-center',
              children: [
                e('div', {
                  className:
                    'bg-no-repeat bg-cover w-14 h-14 shrink-0 mr-2 sm:mr-3 flex justify-center items-center',
                  children: e('div', {
                    className: 'space-y-3',
                    children: a.image.length
                      ? e('img', {
                          className: 'rounded-md ',
                          src: a.image,
                          width: '72',
                          height: '72',
                          alt: 'foto de perfil',
                        })
                      : t('div', {
                          className:
                            'uppercase rounded-full bg-primary w-10 h-10 flex justify-center items-center text-2xl text-white font-bold',
                          children: ['\u{1F4E6}', ' '],
                        }),
                  }),
                }),
                e('article', {
                  className: 'capitalize flex space-x-1',
                  children: e('div', {
                    className: 'font-medium text-slate-800',
                    children: a.name,
                  }),
                }),
              ],
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-center',
              children: a.category,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-left', children: a.mark }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left',
              children: a.short_description,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-center',
              children: a.currency_badge,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: t('div', {
              className: 'text-left',
              children: ['$', a.price],
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left',
              children: e('div', {
                className: `text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${r(
                  a.state_publication
                )}`,
                children: a.state_publication,
              }),
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-center', children: n() }),
          }),
          e('td', {
            className: 'px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px',
            children: t('div', {
              className: 'flex justify-center items-center',
              children: [
                e('button', {
                  onClick: (c) => {
                    c.stopPropagation(), s(!0);
                  },
                  className:
                    'font-semibold text-red-400 hover:border-b-2 border-slate-500',
                  children: 'Eliminar',
                }),
                e(Ea, { id: a.id }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  Oa = () => {
    const {
      bannerSuccessOpen: a,
      setBannerSuccessOpen: s,
      bannerErrorOpen: r,
      setBannerErrorOpen: n,
      productList: c,
    } = l.exports.useContext(B);
    return t('div', {
      className: 'bg-white',
      children: [
        a
          ? e('div', {
              className: 'space-y-3',
              children: e(Z, {
                type: 'success',
                open: a,
                setOpen: s,
                children: 'operaci\xF3n exitosa. El producto se elimin\xF3.',
              }),
            })
          : r
          ? e('div', {
              className: 'space-y-3',
              children: e(Z, {
                type: 'error',
                open: r,
                setOpen: n,
                children:
                  'Lo sentimos, al parecer tenemos problemas con el servidor vuelva a intentar m\xE1s tarde.',
              }),
            })
          : null,
        c.length
          ? e('div', {
              className: ' mt-24 ',
              children: e('div', {
                className: 'overflow-x-auto',
                children: t('table', {
                  className: 'table-auto w-full',
                  children: [
                    e('thead', {
                      className:
                        'text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200',
                      children: t('tr', {
                        children: [
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Nombre del producto',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Categoria',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Marca',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Descripci\xF3n',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Tipo de moneda',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Precio',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-center',
                              children: 'Estado',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: '\xBFCon stock?',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Opciones',
                            }),
                          }),
                        ],
                      }),
                    }),
                    e('tbody', {
                      className:
                        'text-sm divide-y divide-slate-200 border-b border-slate-200',
                      children: c.map((i) =>
                        e(
                          Ma,
                          {
                            id: i.id,
                            image: i.image,
                            name: i.name,
                            category: i.category,
                            mark: i.mark,
                            short_description: i.short_description,
                            currency_badge: i.currency.badge,
                            price: i.price,
                            state_publication: i.state_publication,
                            has_stock: i.has_stock,
                          },
                          i.id
                        )
                      ),
                    }),
                  ],
                }),
              }),
            })
          : e('div', {
              className: 'border-t border-slate-200',
              children: e('div', {
                className: 'max-w-2xl m-auto mt-16',
                children: t('div', {
                  className: 'text-center px-4',
                  children: [
                    e('div', {
                      className:
                        'inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4',
                      children: t('svg', {
                        className: 'w-5 h-6 fill-current',
                        viewBox: '0 0 20 24',
                        children: [
                          e('path', {
                            className: 'text-slate-500',
                            d: 'M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z',
                          }),
                          e('path', {
                            className: 'text-slate-300',
                            d: 'M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z',
                          }),
                          e('path', {
                            className: 'text-slate-400',
                            d: 'M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z',
                          }),
                        ],
                      }),
                    }),
                    e('h2', {
                      className: 'text-2xl text-slate-800 font-bold mb-2',
                      children: 'A\xF1ade el primer Producto',
                    }),
                    e('div', {
                      className: 'mb-6',
                      children: 'Crea los productos, los cuales vas a vender.',
                    }),
                    e(q, {
                      to: '/products/create',
                      children: t('button', {
                        className:
                          'btn bg-secondary hover:bg-primary hover:text-white text-primary',
                        children: [
                          e('svg', {
                            className:
                              'w-4 h-4 fill-current opacity-50 shrink-0',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
                            }),
                          }),
                          e('span', {
                            className: 'ml-2',
                            children: 'A\xF1adir Producto',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
      ],
    });
  },
  za = () => {
    const { sidebarOpen: a, setSidebarOpen: s } = l.exports.useContext(B);
    return t('div', {
      className: 'flex h-screen overflow-hidden',
      children: [
        e(_, { sidebarOpen: a, setSidebarOpen: s }),
        t('div', {
          className:
            'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
          children: [
            e(U, { sidebarOpen: a, setSidebarOpen: s }),
            e('main', {
              children: t('div', {
                className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
                children: [
                  t('div', {
                    className:
                      'sm:flex sm:justify-between sm:items-center mb-4 md:mb-2',
                    children: [
                      e('div', {
                        className: 'mb-4 sm:mb-0',
                        children: e('h1', {
                          className:
                            'text-2xl md:text-3xl text-slate-800 font-bold',
                          children: 'Lista de productos \u{1F4E6}',
                        }),
                      }),
                      t('div', {
                        className:
                          'grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2',
                        children: [
                          t('div', {
                            className: 'relative',
                            children: [
                              e('label', {
                                htmlFor: 'action-search',
                                className: 'sr-only',
                                children: 'Buscar...',
                              }),
                              e('input', {
                                autoComplete: 'false',
                                id: 'action-search',
                                className:
                                  'form-input pl-9 focus:border-primary',
                                type: 'search',
                                placeholder: 'Buscar...',
                              }),
                              e('div', {
                                className:
                                  'absolute inset-0 mt-2.5 right-auto group',
                                'aria-label': 'Search',
                                children: t('svg', {
                                  className:
                                    'w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2',
                                  viewBox: '0 0 16 16',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: [
                                    e('path', {
                                      d: 'M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z',
                                    }),
                                    e('path', {
                                      d: 'M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          e(q, {
                            to: '/products/create',
                            className:
                              'btn bg-secondary hover:bg-primary text-primary hover:text-white',
                            children: 'A\xF1adir producto',
                          }),
                        ],
                      }),
                    ],
                  }),
                  e(Oa, {}),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  $e = () => {
    const { dangerModalOpen: a, setDangerModalOpen: s } =
        l.exports.useContext(B),
      r = J(),
      n = () => {
        r('/plant/list'), s(!1);
      };
    return e('div', {
      className: 'm-1.5',
      children: e($, {
        id: 'danger-modal',
        modalOpen: a,
        setModalOpen: s,
        children: t('div', {
          className: 'p-5 flex space-x-4',
          children: [
            e('div', {
              className:
                'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100',
              children: e('svg', {
                className: 'w-4 h-4 shrink-0 fill-current text-rose-500',
                viewBox: '0 0 16 16',
                children: e('path', {
                  d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                }),
              }),
            }),
            t('div', {
              children: [
                e('div', {
                  className: 'mb-2',
                  children: e('div', {
                    className: 'text-lg font-semibold text-slate-800',
                    children: '\xBFSeguro que quieres dejar esta p\xE1gina?',
                  }),
                }),
                e('div', {
                  className: 'text-sm mb-10',
                  children: e('div', {
                    className: 'space-y-2',
                    children: e('p', {
                      children:
                        'Se perder\xE1n todos los datos capturados y no podr\xE1s recuperarlos.',
                    }),
                  }),
                }),
                t('div', {
                  className: 'flex flex-wrap justify-end space-x-2',
                  children: [
                    e('button', {
                      className:
                        'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                      onClick: (c) => {
                        c.stopPropagation(), s(!1);
                      },
                      children: 'Continuar con la captura',
                    }),
                    e('button', {
                      onClick: (c) => {
                        c.stopPropagation(), n();
                      },
                      type: 'button',
                      className:
                        'btn-sm bg-rose-500 hover:bg-rose-600 text-white',
                      children: 'S\xED, quiero salir',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
const Ba = () => {
    const { setMapAddress: a, setLng: s, setLat: r } = l.exports.useContext(B),
      n = new jt({
        mapboxgl: Rt,
        accessToken:
          'pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg',
        marker: !0,
        collapsed: !1,
        placeholder: 'Busca tu direcci\xF3n',
        clearAndBlurOnEsc: !0,
      }).on('result', function ({ result: c }) {
        a(c.place_name);
      });
    return (
      Tt(() => n),
      n.on('result', (c) => {
        const i = c.result.geometry.coordinates;
        s(i[0]), r(i[1]);
      }),
      null
    );
  },
  Fa =
    'pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg',
  et = () => {
    const a = l.exports.useRef(),
      { setLat: s, setLng: r, lat: n, lng: c } = l.exports.useContext(B),
      i = async () => {
        !c &&
          !n &&
          fetch('https://ipapi.co/json')
            .then((o) => o.json())
            .then((o) => {
              a.current.flyTo({ center: [o.longitude, o.latitude], zoom: 16 }),
                s(o.latitude),
                r(o.longitude);
            });
      };
    return (
      l.exports.useEffect(() => {
        i();
      }, []),
      e(z, {
        children: e('div', {
          className: 'map-container',
          children: t(Zt, {
            ref: a,
            mapboxAccessToken: Fa,
            initialViewState: { longitude: c, latitude: n, zoom: 8 },
            mapStyle: 'mapbox://styles/mapbox/streets-v11',
            children: [
              e(_t, {
                latitude: n,
                longitude: c,
                draggable: !0,
                onDragEnd: (o) => {
                  r(o.lngLat.lng), s(o.lngLat.lat);
                },
              }),
              e(Ut, { position: 'bottom-right' }),
              e(Wt, {
                position: 'top-left',
                trackUserLocation: !0,
                onGeolocate: (o) => {
                  r(o.coords.longitude), s(o.coords.latitude);
                },
              }),
              e(Ba, {}),
            ],
          }),
        }),
      })
    );
  },
  Ha = () => {
    const a = J(),
      {
        setDangerModalOpen: s,
        bannerSuccessOpen: r,
        setBannerSuccessOpen: n,
        bannerErrorOpen: c,
        setBannerErrorOpen: i,
        loading: o,
        setLoading: d,
        supplierId: h,
        setPlantReload: p,
        country: m,
        state: b,
        handleCountry: v,
        handleState: A,
        city: w,
        stateEnable: N,
        cityEnable: k,
        placeList: y,
        lat: E,
        lng: O,
        mapAddress: L,
        setMapAddress: D,
      } = l.exports.useContext(B),
      {
        handleSubmit: j,
        register: S,
        setValue: G,
        formState: { errors: g },
      } = Q({ defaultValues: { address: '', longitude: '', latitude: '' } });
    async function f(C) {
      return fetch(
        `http://supplier.hubmine.mx/api/suppliers/plant/create/${h}/`,
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(C),
        }
      ).then((V) => {
        V.status === 201
          ? (d(!0),
            n(!0),
            setTimeout(() => {
              a('/plant/list'), d(!1), n(!1);
            }, 1500))
          : (i(!0),
            d(!0),
            setTimeout(() => {
              i(!1), d(!1);
            }, 1500)),
          p(!0);
      });
    }
    return t(z, {
      children: [
        t('div', {
          className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
          children: [
            e('div', {
              className: 'mb-8',
              children: e('h1', {
                className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                children: 'Crear planta de recolecci\xF3n \u{1F3D7}',
              }),
            }),
            r
              ? e('div', {
                  className: 'space-y-3',
                  children: e(Z, {
                    type: 'success',
                    open: r,
                    setOpen: n,
                    children: 'operaci\xF3n exitosa. Redirigiendo...',
                  }),
                })
              : c
              ? e('div', {
                  className: 'space-y-3',
                  children: e(Z, {
                    type: 'error',
                    open: c,
                    setOpen: i,
                    children:
                      'Lo sentimos, al parecer tenemos problema con nuestro servidor, vuelva a intentar m\xE1s tarde.',
                  }),
                })
              : null,
            e('div', { className: 'border-t border-slate-200' }),
            t('div', {
              className: 'space-y-8 mt-8',
              children: [
                t('article', {
                  className: 'mt-10',
                  children: [
                    e('h2', {
                      className: 'text-2xl text-slate-800 font-bold mb-6',
                      children: 'Datos de la planta',
                    }),
                    e('div', { className: 'border-t border-slate-200' }),
                  ],
                }),
                t('form', {
                  onSubmit: j(f),
                  children: [
                    t('section', {
                      className: 'grid gap-5 md:grid-cols-3',
                      children: [
                        e('div', {
                          children: t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Nombre de la planta',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    maxLength: '30',
                                    className: 'form-input w-full ',
                                    autoComplete: 'off',
                                    type: 'text',
                                  },
                                  S('name', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value: /[a-zA-Z]/,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              g.name &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: g.name.message,
                                }),
                            ],
                          }),
                        }),
                        e('div', {
                          children: t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Tel\xE9fono',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    className: 'form-input w-full',
                                    autoComplete: 'off',
                                    type: 'number',
                                  },
                                  S('phone_contact', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value: /[0-9]/,
                                      message: 'El formato no es correcto',
                                    },
                                    minLength: {
                                      value: 10,
                                      message: 'Debe de tener 10 caracteres',
                                    },
                                    maxLength: {
                                      value: 10,
                                      message: 'Debe de tener 10 caracteres',
                                    },
                                  })
                                )
                              ),
                              g.phone_contact &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: g.phone_contact.message,
                                }),
                            ],
                          }),
                        }),
                        e('div', {
                          children: t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Tipo de lugar',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              t(
                                'select',
                                R(
                                  x(
                                    { className: 'form-select w-full' },
                                    S('type_place_id', {
                                      required: {
                                        value: !0,
                                        message: 'El campo es requerido',
                                      },
                                    })
                                  ),
                                  {
                                    children: [
                                      e('option', {
                                        value: '',
                                        children: 'Selecciona',
                                      }),
                                      y.map((C) =>
                                        e(
                                          'option',
                                          {
                                            value: C.id,
                                            children: C.type_place,
                                          },
                                          C.id
                                        )
                                      ),
                                    ],
                                  }
                                )
                              ),
                              g.type_place_id &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: g.type_place_id.message,
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    t('article', {
                      className: 'mt-10',
                      children: [
                        e('h2', {
                          className: 'text-2xl text-slate-800 font-bold mb-6',
                          children: 'Ubicaci\xF3n',
                        }),
                        e('div', { className: 'border-t border-slate-200' }),
                      ],
                    }),
                    t('section', {
                      className: 'grid gap-5 md:grid-cols-3 mt-8',
                      children: [
                        t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'Pais',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            t(
                              'select',
                              R(
                                x(
                                  { className: 'form-select w-full' },
                                  S('country_id', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                  })
                                ),
                                {
                                  onChange: (C) => v(C),
                                  children: [
                                    e('option', {
                                      value: '',
                                      children: 'Selecciona',
                                    }),
                                    m.map((C) =>
                                      e(
                                        'option',
                                        { value: C.id, children: C.country },
                                        C.id
                                      )
                                    ),
                                  ],
                                }
                              )
                            ),
                            g.country_id &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: g.country_id.message,
                              }),
                          ],
                        }),
                        e('div', {
                          children: t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Estado',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              t(
                                'select',
                                R(
                                  x(
                                    {
                                      disabled: N,
                                      className: 'form-select w-full',
                                    },
                                    S('state_id', {
                                      required: {
                                        value: !0,
                                        message: 'El campo es requerido',
                                      },
                                    })
                                  ),
                                  {
                                    onChange: (C) => A(C),
                                    children: [
                                      N
                                        ? e('option', {
                                            value: '',
                                            children: 'Selecciona un pais',
                                          })
                                        : e('option', {
                                            value: '',
                                            children: 'Selecciona',
                                          }),
                                      b.map((C) =>
                                        e(
                                          'option',
                                          { value: C.id, children: C.state },
                                          C.id
                                        )
                                      ),
                                    ],
                                  }
                                )
                              ),
                              g.state_id &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: g.state_id.message,
                                }),
                            ],
                          }),
                        }),
                        t('div', {
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'Ciudad',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            t(
                              'select',
                              R(
                                x(
                                  {
                                    disabled: k,
                                    className: 'form-select w-full',
                                  },
                                  S('city_id', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                  })
                                ),
                                {
                                  children: [
                                    k
                                      ? e('option', {
                                          value: '',
                                          children: 'Selecciona un estado',
                                        })
                                      : e('option', {
                                          value: '',
                                          children: 'Selecciona',
                                        }),
                                    w.map((C) =>
                                      e(
                                        'option',
                                        { value: C.id, children: C.city },
                                        C.id
                                      )
                                    ),
                                  ],
                                }
                              )
                            ),
                            g.city_id &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: g.city_id.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    e('section', { className: 'mt-8', children: e(et, {}) }),
                    t('section', {
                      className: 'grid gap-5 md:grid-cols-3 mt-8',
                      children: [
                        t('div', {
                          className: 'mt-5',
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'Direcci\xF3n',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e(
                              'input',
                              x(
                                {
                                  disabled: !L,
                                  onChange: G('address', L),
                                  className:
                                    'form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed',
                                  autoComplete: 'off',
                                  type: 'text',
                                },
                                S('address', {
                                  required: {
                                    value: !0,
                                    message: 'El campo es requerido',
                                  },
                                  pattern: {
                                    value: /[a-zA-Z]/,
                                    message: 'El formato no es correcto',
                                  },
                                })
                              )
                            ),
                            g.address &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: g.address.message,
                              }),
                          ],
                        }),
                        t('div', {
                          className: 'mt-5',
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'Longitud',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e(
                              'input',
                              x(
                                {
                                  disabled: !0,
                                  onChange: G('longitude', O),
                                  maxLength: '35',
                                  className:
                                    'form-input w-full  disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ',
                                  autoComplete: 'off',
                                  type: 'text',
                                },
                                S('longitude', {
                                  required: {
                                    value: !1,
                                    message: 'El campo es requerido',
                                  },
                                })
                              )
                            ),
                            g.longitude &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: g.longitude.message,
                              }),
                          ],
                        }),
                        t('div', {
                          className: 'mt-5',
                          children: [
                            t('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: [
                                'latitud',
                                e('span', {
                                  className: 'text-rose-500',
                                  children: '*',
                                }),
                              ],
                            }),
                            e(
                              'input',
                              x(
                                {
                                  disabled: !0,
                                  onChange: G('latitude', E),
                                  maxLength: '35',
                                  className:
                                    'form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed',
                                  autoComplete: 'off',
                                  type: 'text',
                                },
                                S('latitude', {
                                  required: {
                                    value: !1,
                                    message: 'El campo es requerido',
                                  },
                                })
                              )
                            ),
                            g.latitude &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: g.latitude.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    t('article', {
                      className: 'mt-10',
                      children: [
                        e('h2', {
                          className: 'text-2xl text-slate-800 font-bold mb-6',
                          children: 'Observaciones',
                        }),
                        e('div', { className: 'border-t border-slate-200' }),
                      ],
                    }),
                    e('section', {
                      className: 'mt-8',
                      children: e('div', {
                        children: t('div', {
                          children: [
                            e('label', {
                              className: 'block text-sm font-medium mb-1',
                              children: 'Referencia de como llegar a la planta',
                            }),
                            e(
                              'textarea',
                              x(
                                {
                                  maxLength: '150',
                                  className: 'form-input w-full',
                                  type: 'text',
                                  autoComplete: 'off',
                                },
                                S('observations', {
                                  required: {
                                    value: !1,
                                    message: 'El campo es requerido',
                                  },
                                  maxLength: {
                                    value: 150,
                                    message:
                                      'sol\xF3 se permiten 150 caracteres',
                                  },
                                })
                              )
                            ),
                            g.observations &&
                              e('span', {
                                className: 'text-red-500 text-sm',
                                children: g.observations.message,
                              }),
                          ],
                        }),
                      }),
                    }),
                    t('section', {
                      className:
                        'w-full flex space-x-6 justify-center items-center mt-10',
                      children: [
                        e('div', {
                          className: 'm-1.5',
                          children: o
                            ? e(X, {})
                            : e(z, {
                                children: e('button', {
                                  type: 'submit',
                                  className:
                                    'btn bg-emerald-500 hover:bg-emerald-600 text-white',
                                  children: 'Guardar',
                                }),
                              }),
                        }),
                        e('div', {
                          className: 'm-1.5',
                          children: e('button', {
                            onClick: (C) => {
                              C.stopPropagation(), s(!0);
                            },
                            type: 'button',
                            className:
                              'btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50',
                            children: 'Cancelar',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e($e, {}),
      ],
    });
  },
  Va = () => {
    const { sidebarOpen: a, setSidebarOpen: s } = l.exports.useContext(B);
    return t('div', {
      className: 'flex h-screen overflow-hidden',
      children: [
        e(_, { sidebarOpen: a, setSidebarOpen: s }),
        t('div', {
          className:
            'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
          children: [
            e(U, { sidebarOpen: a, setSidebarOpen: s }),
            e('main', { children: e(Ha, {}) }),
          ],
        }),
      ],
    });
  },
  Pa = ({ id: a }) => {
    const {
        dangerModalOpen: s,
        setDangerModalOpen: r,
        setBannerSuccessOpen: n,
        setBannerErrorOpen: c,
        setPlantReload: i,
      } = l.exports.useContext(B),
      o = async (d) => {
        fetch(`http://supplier.hubmine.mx/api/suppliers/plant/delete/${d}/`, {
          method: 'DELETE',
        }).then((h) => {
          h.status === 204
            ? (n(!0),
              setTimeout(() => {
                n(!1);
              }, 1500))
            : (c(!0),
              setTimeout(() => {
                c(!1);
              }, 1500));
        }),
          i(!0);
      };
    return e('div', {
      className: 'm-1.5',
      children: e($, {
        id: 'danger-modal',
        modalOpen: s,
        setModalOpen: r,
        children: t('div', {
          className: 'p-5 flex space-x-4',
          children: [
            e('div', {
              className:
                'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100',
              children: e('svg', {
                className: 'w-4 h-4 shrink-0 fill-current text-rose-500',
                viewBox: '0 0 16 16',
                children: e('path', {
                  d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                }),
              }),
            }),
            t('div', {
              children: [
                e('div', {
                  className: 'mb-2',
                  children: e('div', {
                    className: 'text-lg font-semibold text-slate-800',
                    children: '\xBFSeguro que quieres eliminar la planta?',
                  }),
                }),
                e('div', {
                  className: 'text-sm mb-10',
                  children: e('div', {
                    className: 'space-y-2',
                    children: e('p', {
                      children:
                        'Al eliminar la planta, ya no se podr\xE1 recuperar la informaci\xF3n.',
                    }),
                  }),
                }),
                t('div', {
                  className: 'flex flex-wrap justify-end space-x-2',
                  children: [
                    e('button', {
                      className:
                        'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                      onClick: (d) => {
                        d.stopPropagation(), r(!1);
                      },
                      children: 'No deseo eliminar',
                    }),
                    e('button', {
                      onClick: (d) => {
                        d.stopPropagation(), o(a), r(!1);
                      },
                      type: 'button',
                      className:
                        'btn-sm bg-rose-500 hover:bg-rose-600 text-white',
                      children: 'S\xED quiero eliminar',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  Da = (a) => {
    const { setDangerModalOpen: s } = l.exports.useContext(B);
    return e(z, {
      children: t('tr', {
        children: [
          e('td', {
            className:
              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2',
            children: e('div', {
              className: 'flex items-center',
              children: e('article', {
                className: 'capitalize flex space-x-1',
                children: e('div', {
                  className: 'font-medium text-slate-800',
                  children: a.name,
                }),
              }),
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left',
              children: a.phone_contact,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', {
              className: 'text-left',
              children: a.type_place,
            }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-left', children: a.country }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-left', children: a.state }),
          }),
          e('td', {
            className: 'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
            children: e('div', { className: 'text-left', children: a.city }),
          }),
          e('td', {
            className: 'px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px',
            children: t('div', {
              className: 'flex justify-center items-center space-x-1',
              children: [
                e(q, {
                  to: `/plant/update/${a.id}`,
                  className:
                    'font-semibold text-slate-600 hover:border-b-2 border-slate-500',
                  children: 'Editar',
                }),
                e('div', { children: '|' }),
                e('button', {
                  onClick: (r) => {
                    r.stopPropagation(), s(!0);
                  },
                  className:
                    'font-semibold text-red-400 hover:border-b-2 border-slate-500',
                  children: 'Eliminar',
                }),
                e(Pa, { id: a.id }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  qa = () => {
    const {
      bannerSuccessOpen: a,
      setBannerSuccessOpen: s,
      bannerErrorOpen: r,
      setBannerErrorOpen: n,
      plantList: c,
    } = l.exports.useContext(B);
    return t('div', {
      className: 'bg-white',
      children: [
        a
          ? e('div', {
              className: 'space-y-3',
              children: e(Z, {
                type: 'success',
                open: a,
                setOpen: s,
                children: 'operaci\xF3n exitosa. El producto se elimin\xF3.',
              }),
            })
          : r
          ? e('div', {
              className: 'space-y-3',
              children: e(Z, {
                type: 'error',
                open: r,
                setOpen: n,
                children:
                  'Lo sentimos, al parecer tenemos problemas con el servidor vuelva a intentar m\xE1s tarde.',
              }),
            })
          : null,
        c.length
          ? e('div', {
              className: 'mt-24',
              children: e('div', {
                className: 'overflow-x-auto',
                children: t('table', {
                  className: 'table-auto w-full',
                  children: [
                    e('thead', {
                      className:
                        'text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200',
                      children: t('tr', {
                        children: [
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Nombre de la planta',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Tel\xE9fono',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Tipo de lugar',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Pais',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Estado',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-left',
                              children: 'Ciudad',
                            }),
                          }),
                          e('th', {
                            className:
                              'px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap',
                            children: e('div', {
                              className: 'font-semibold text-center',
                              children: 'Opciones',
                            }),
                          }),
                        ],
                      }),
                    }),
                    e('tbody', {
                      className:
                        'text-sm divide-y divide-slate-200 border-b border-slate-200',
                      children: c.map((i) =>
                        e(
                          Da,
                          {
                            id: i.id,
                            name: i.name,
                            phone_contact: i.phone_contact,
                            type_place: i.type_place.type_place,
                            country: i.location.country,
                            state: i.location.state,
                            city: i.location.city,
                          },
                          i.id
                        )
                      ),
                    }),
                  ],
                }),
              }),
            })
          : e('div', {
              className: 'border-t border-slate-200',
              children: e('div', {
                className: 'max-w-2xl m-auto mt-16',
                children: t('div', {
                  className: 'text-center px-4',
                  children: [
                    e('div', {
                      className:
                        'inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4',
                      children: t('svg', {
                        className: 'w-5 h-6 fill-current',
                        viewBox: '0 0 20 24',
                        children: [
                          e('path', {
                            className: 'text-slate-500',
                            d: 'M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z',
                          }),
                          e('path', {
                            className: 'text-slate-300',
                            d: 'M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z',
                          }),
                          e('path', {
                            className: 'text-slate-400',
                            d: 'M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z',
                          }),
                        ],
                      }),
                    }),
                    e('h2', {
                      className: 'text-2xl text-slate-800 font-bold mb-2',
                      children: 'A\xF1ade la primera planta de recolecci\xF3n',
                    }),
                    e('div', {
                      className: 'mb-6',
                      children:
                        'Crea las plantas, las cuales implementaran la log\xEDstica de entrega.',
                    }),
                    e(q, {
                      to: '/plant/create',
                      children: t('button', {
                        className:
                          'btn bg-secondary hover:bg-primary hover:text-white text-primary',
                        children: [
                          e('svg', {
                            className:
                              'w-4 h-4 fill-current opacity-50 shrink-0',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z',
                            }),
                          }),
                          e('span', {
                            className: 'ml-2',
                            children: 'A\xF1adir Planta',
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
      ],
    });
  },
  Ia = () => {
    const { sidebarOpen: a, setSidebarOpen: s } = l.exports.useContext(B);
    return t('div', {
      className: 'flex h-screen overflow-hidden',
      children: [
        e(_, { sidebarOpen: a, setSidebarOpen: s }),
        t('div', {
          className:
            'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
          children: [
            e(U, { sidebarOpen: a, setSidebarOpen: s }),
            e('main', {
              children: t('div', {
                className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
                children: [
                  t('div', {
                    className:
                      'sm:flex sm:justify-between sm:items-center mb-4 md:mb-2',
                    children: [
                      e('div', {
                        className: 'mb-4 sm:mb-0',
                        children: e('h1', {
                          className:
                            'text-2xl md:text-3xl text-slate-800 font-bold',
                          children: 'Lista de Plantas \u{1F3D7}',
                        }),
                      }),
                      t('div', {
                        className:
                          'grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2',
                        children: [
                          t('div', {
                            className: 'relative',
                            children: [
                              e('label', {
                                htmlFor: 'action-search',
                                className: 'sr-only',
                                children: 'Buscar...',
                              }),
                              e('input', {
                                autoComplete: 'false',
                                id: 'action-search',
                                className:
                                  'form-input pl-9 focus:border-primary',
                                type: 'search',
                                placeholder: 'Buscar...',
                              }),
                              e('div', {
                                className:
                                  'absolute inset-0 mt-2.5 right-auto group',
                                'aria-label': 'Search',
                                children: t('svg', {
                                  className:
                                    'w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2',
                                  viewBox: '0 0 16 16',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  children: [
                                    e('path', {
                                      d: 'M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z',
                                    }),
                                    e('path', {
                                      d: 'M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          e(q, {
                            to: '/plant/create',
                            className:
                              'btn bg-secondary hover:bg-primary text-primary hover:text-white',
                            children: 'A\xF1adir Planta',
                          }),
                        ],
                      }),
                    ],
                  }),
                  e(qa, {}),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  ja = () => {
    const [a, s] = l.exports.useState([]),
      r = J(),
      { id: n } = Gt(),
      {
        setDangerModalOpen: c,
        bannerSuccessOpen: i,
        setBannerSuccessOpen: o,
        bannerErrorOpen: d,
        setBannerErrorOpen: h,
        loading: p,
        setLoading: m,
        setPlantReload: b,
        placeList: v,
        handleCountry: A,
        handleState: w,
        country: N,
        state: k,
        city: y,
        stateEnable: E,
        cityEnable: O,
        mapAddress: L,
        setMapAddress: D,
        lat: j,
        lng: S,
        setLat: G,
        setLng: g,
      } = l.exports.useContext(B),
      {
        handleSubmit: f,
        register: C,
        setValue: V,
        formState: { errors: H },
      } = Q(),
      ae = async () => {
        fetch(
          `http://supplier.hubmine.mx/api/suppliers/plant/list/details?plant-id=${n}`
        )
          .then((u) => u.json())
          .then((u) => {
            V('name', u[0].name),
              V('phone_contact', u[0].phone_contact),
              V('type_place', u[0].type_place.type_place),
              V('type_place_id', u[0].type_place.type_place_id),
              V('country', u[0].location.country),
              V('country_id', u[0].location.country_id),
              V('state', u[0].location.state),
              V('state_id', u[0].location.state_id),
              V('city', u[0].location.city),
              V('city_id', u[0].location.city_id),
              V('observations', u[0].location.observations),
              V('latitude', u[0].location.latitude),
              V('longitude', u[0].location.longitude),
              V('address', u[0].location.address),
              s(u),
              D(u[0].location.address),
              g(u[0].location.longitude),
              G(u[0].location.latitude);
          });
      };
    return (
      l.exports.useEffect(() => {
        ae();
      }, []),
      t(z, {
        children: [
          t('div', {
            className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
            children: [
              e('div', {
                className: 'mb-8',
                children: e('h1', {
                  className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                  children: 'Editar planta de recolecci\xF3n \u{1F3D7}',
                }),
              }),
              i
                ? e('div', {
                    className: 'space-y-3',
                    children: e(Z, {
                      type: 'success',
                      open: i,
                      setOpen: o,
                      children: 'operaci\xF3n exitosa. Redirigiendo...',
                    }),
                  })
                : d
                ? e('div', {
                    className: 'space-y-3',
                    children: e(Z, {
                      type: 'error',
                      open: d,
                      setOpen: h,
                      children:
                        'Lo sentimos, al parecer tenemos problema con nuestro servidor, vuelva a intentar m\xE1s tarde.',
                    }),
                  })
                : null,
              e('div', { className: 'border-t border-slate-200' }),
              t('div', {
                className: 'space-y-8 mt-8',
                children: [
                  t('article', {
                    className: 'mt-10',
                    children: [
                      e('h2', {
                        className: 'text-2xl text-slate-800 font-bold mb-6',
                        children: 'Datos de la planta',
                      }),
                      e('div', { className: 'border-t border-slate-200' }),
                    ],
                  }),
                  t('form', {
                    onSubmit: f(async (u) => {
                      fetch(
                        `http://supplier.hubmine.mx/api/suppliers/plant/update/${n}/`,
                        {
                          method: 'PUT',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(u),
                        }
                      ).then((re) => {
                        re.status === 200
                          ? (m(!0),
                            o(!0),
                            setTimeout(() => {
                              m(!1), o(!1), r('/plant/list');
                            }, 1500))
                          : (m(!0),
                            h(!0),
                            setTimeout(() => {
                              m(!1), h(!1);
                            }, 1500)),
                          b(!0);
                      });
                    }),
                    children: [
                      t('section', {
                        className: 'grid gap-5 md:grid-cols-3',
                        children: [
                          e('div', {
                            children: t('div', {
                              children: [
                                t('label', {
                                  className: 'block text-sm font-medium mb-1',
                                  children: [
                                    'Nombre de la planta',
                                    e('span', {
                                      className: 'text-rose-500',
                                      children: '*',
                                    }),
                                  ],
                                }),
                                e(
                                  'input',
                                  x(
                                    {
                                      maxLength: '30',
                                      className: 'form-input w-full ',
                                      autoComplete: 'off',
                                      type: 'text',
                                    },
                                    C('name', {
                                      required: {
                                        value: !0,
                                        message: 'El campo es requerido',
                                      },
                                      pattern: {
                                        value: /[a-zA-Z]/,
                                        message: 'El formato no es correcto',
                                      },
                                    })
                                  )
                                ),
                                H.name &&
                                  e('span', {
                                    className: 'text-red-500 text-sm',
                                    children: H.name.message,
                                  }),
                              ],
                            }),
                          }),
                          e('div', {
                            children: t('div', {
                              children: [
                                t('label', {
                                  className: 'block text-sm font-medium mb-1',
                                  children: [
                                    'Tel\xE9fono',
                                    e('span', {
                                      className: 'text-rose-500',
                                      children: '*',
                                    }),
                                  ],
                                }),
                                e(
                                  'input',
                                  x(
                                    {
                                      className: 'form-input w-full',
                                      autoComplete: 'off',
                                      type: 'number',
                                    },
                                    C('phone_contact', {
                                      required: {
                                        value: !0,
                                        message: 'El campo es requerido',
                                      },
                                      pattern: {
                                        value: /[0-9]/,
                                        message: 'El formato no es correcto',
                                      },
                                      minLength: {
                                        value: 10,
                                        message: 'Debe de tener 10 caracteres',
                                      },
                                      maxLength: {
                                        value: 10,
                                        message: 'Debe de tener 10 caracteres',
                                      },
                                    })
                                  )
                                ),
                                H.phone_contact &&
                                  e('span', {
                                    className: 'text-red-500 text-sm',
                                    children: H.phone_contact.message,
                                  }),
                              ],
                            }),
                          }),
                          e('div', {
                            children: t('div', {
                              children: [
                                t('label', {
                                  className: 'block text-sm font-medium mb-1',
                                  children: [
                                    'Tipo de lugar',
                                    e('span', {
                                      className: 'text-rose-500',
                                      children: '*',
                                    }),
                                  ],
                                }),
                                t(
                                  'select',
                                  R(
                                    x(
                                      { className: 'form-select w-full' },
                                      C('type_place_id', {
                                        required: {
                                          value: !0,
                                          message: 'El campo es requerido',
                                        },
                                      })
                                    ),
                                    {
                                      children: [
                                        a.map((u) =>
                                          e(
                                            'option',
                                            {
                                              value: u.type_place.type_place_id,
                                              children: u.type_place.type_place,
                                            },
                                            u.id
                                          )
                                        ),
                                        e('option', {
                                          disabled: !0,
                                          children:
                                            '--Selecciona el tipo de lugar--',
                                        }),
                                        v.map((u) =>
                                          e(
                                            'option',
                                            {
                                              value: u.id,
                                              children: u.type_place,
                                            },
                                            u.id
                                          )
                                        ),
                                      ],
                                    }
                                  )
                                ),
                                H.type_place_id &&
                                  e('span', {
                                    className: 'text-red-500 text-sm',
                                    children: H.type_place_id.message,
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      t('article', {
                        className: 'mt-10',
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Ubicaci\xF3n',
                          }),
                          e('div', { className: 'border-t border-slate-200' }),
                        ],
                      }),
                      t('section', {
                        className: 'grid gap-5 md:grid-cols-3 mt-8',
                        children: [
                          t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'pais',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              t(
                                'select',
                                R(
                                  x(
                                    { className: 'form-select w-full' },
                                    C('country_id', {
                                      required: {
                                        value: !0,
                                        message: 'El campo es requerido',
                                      },
                                    })
                                  ),
                                  {
                                    onChange: (u) => A(u),
                                    children: [
                                      a.map((u) =>
                                        e(
                                          'option',
                                          {
                                            value: u.location.country_id,
                                            children: u.location.country,
                                          },
                                          u.id
                                        )
                                      ),
                                      e('option', {
                                        disabled: !0,
                                        children: '--Selecciona el pais--',
                                      }),
                                      N.map((u) =>
                                        e(
                                          'option',
                                          { value: u.id, children: u.country },
                                          u.id
                                        )
                                      ),
                                    ],
                                  }
                                )
                              ),
                              H.country_id &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: H.country_id.message,
                                }),
                            ],
                          }),
                          e('div', {
                            children: t('div', {
                              children: [
                                t('label', {
                                  className: 'block text-sm font-medium mb-1',
                                  children: [
                                    'Estado',
                                    e('span', {
                                      className: 'text-rose-500',
                                      children: '*',
                                    }),
                                  ],
                                }),
                                t(
                                  'select',
                                  R(
                                    x(
                                      {
                                        disabled: E,
                                        className: 'form-select w-full',
                                      },
                                      C('state_id', {
                                        required: {
                                          value: !0,
                                          message: 'El campo es requerido',
                                        },
                                      })
                                    ),
                                    {
                                      onChange: (u) => w(u),
                                      children: [
                                        a.map((u) =>
                                          e(
                                            'option',
                                            {
                                              value: u.location.state_id,
                                              children: u.location.state,
                                            },
                                            u.id
                                          )
                                        ),
                                        e('option', {
                                          disabled: !0,
                                          children: '--Selecciona el estado--',
                                        }),
                                        k.map((u) =>
                                          e(
                                            'option',
                                            { value: u.id, children: u.state },
                                            u.id
                                          )
                                        ),
                                      ],
                                    }
                                  )
                                ),
                                H.state_id &&
                                  e('span', {
                                    className: 'text-red-500 text-sm',
                                    children: H.state_id.message,
                                  }),
                              ],
                            }),
                          }),
                          t('div', {
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Ciudad',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              t(
                                'select',
                                R(
                                  x(
                                    {
                                      disabled: O,
                                      className: 'form-select w-full',
                                    },
                                    C('city_id', {
                                      required: {
                                        value: !0,
                                        message: 'El campo es requerido',
                                      },
                                    })
                                  ),
                                  {
                                    children: [
                                      a.map((u) =>
                                        e(
                                          'option',
                                          {
                                            value: u.location.city_id,
                                            children: u.location.city,
                                          },
                                          u.id
                                        )
                                      ),
                                      e('option', {
                                        disabled: !0,
                                        children: '--Selecciona la ciudad--',
                                      }),
                                      y.map((u) =>
                                        e(
                                          'option',
                                          { value: u.id, children: u.city },
                                          u.id
                                        )
                                      ),
                                    ],
                                  }
                                )
                              ),
                              H.city_id &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: H.city_id.message,
                                }),
                            ],
                          }),
                        ],
                      }),
                      e('section', { className: 'mt-8', children: e(et, {}) }),
                      t('section', {
                        className: 'grid gap-5 md:grid-cols-3 mt-8',
                        children: [
                          t('div', {
                            className: 'mt-5',
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Direcci\xF3n',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    onChange: V('address', L),
                                    className:
                                      'form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed',
                                    autoComplete: 'off',
                                    type: 'text',
                                  },
                                  C('address', {
                                    required: {
                                      value: !0,
                                      message: 'El campo es requerido',
                                    },
                                    pattern: {
                                      value: /[a-zA-Z]/,
                                      message: 'El formato no es correcto',
                                    },
                                  })
                                )
                              ),
                              H.address &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: H.address.message,
                                }),
                            ],
                          }),
                          t('div', {
                            className: 'mt-5',
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'Longitud',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    disabled: !0,
                                    onChange: V('longitude', S),
                                    maxLength: '35',
                                    className:
                                      'form-input w-full  disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ',
                                    autoComplete: 'off',
                                    type: 'text',
                                  },
                                  C('longitude', {
                                    required: {
                                      value: !1,
                                      message: 'El campo es requerido',
                                    },
                                  })
                                )
                              ),
                              H.longitude &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: H.longitude.message,
                                }),
                            ],
                          }),
                          t('div', {
                            className: 'mt-5',
                            children: [
                              t('label', {
                                className: 'block text-sm font-medium mb-1',
                                children: [
                                  'latitud',
                                  e('span', {
                                    className: 'text-rose-500',
                                    children: '*',
                                  }),
                                ],
                              }),
                              e(
                                'input',
                                x(
                                  {
                                    disabled: !0,
                                    onChange: V('latitude', j),
                                    maxLength: '35',
                                    className:
                                      'form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed',
                                    autoComplete: 'off',
                                    type: 'text',
                                  },
                                  C('latitude', {
                                    required: {
                                      value: !1,
                                      message: 'El campo es requerido',
                                    },
                                  })
                                )
                              ),
                              H.latitude &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: H.latitude.message,
                                }),
                            ],
                          }),
                        ],
                      }),
                      t('article', {
                        className: 'mt-10',
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Observaciones',
                          }),
                          e('div', { className: 'border-t border-slate-200' }),
                        ],
                      }),
                      e('section', {
                        className: 'mt-8',
                        children: e('div', {
                          children: t('div', {
                            children: [
                              e('label', {
                                className: 'block text-sm font-medium mb-1',
                                children:
                                  'Referencia de como llegar a la planta',
                              }),
                              e(
                                'textarea',
                                x(
                                  {
                                    maxLength: '150',
                                    className: 'form-input w-full',
                                    type: 'text',
                                    autoComplete: 'off',
                                  },
                                  C('observations', {
                                    required: {
                                      value: !1,
                                      message: 'El campo es requerido',
                                    },
                                    maxLength: {
                                      value: 150,
                                      message:
                                        'sol\xF3 se permiten 150 caracteres',
                                    },
                                  })
                                )
                              ),
                              H.observations &&
                                e('span', {
                                  className: 'text-red-500 text-sm',
                                  children: H.observations.message,
                                }),
                            ],
                          }),
                        }),
                      }),
                      t('section', {
                        className:
                          'w-full flex space-x-6 justify-center items-center mt-10',
                        children: [
                          e('div', {
                            className: 'm-1.5',
                            children: p
                              ? e(X, {})
                              : e(z, {
                                  children: e('button', {
                                    type: 'submit',
                                    className:
                                      'btn bg-emerald-500 hover:bg-emerald-600 text-white',
                                    children: 'Guardar',
                                  }),
                                }),
                          }),
                          e('div', {
                            className: 'm-1.5',
                            children: e('button', {
                              onClick: (u) => {
                                u.stopPropagation(), c(!0);
                              },
                              type: 'button',
                              className:
                                'btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50',
                              children: 'Cancelar',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e($e, {}),
        ],
      })
    );
  },
  Ra = () => {
    const { sidebarOpen: a, setSidebarOpen: s } = l.exports.useContext(B);
    return t('div', {
      className: 'flex h-screen overflow-hidden',
      children: [
        e(_, { sidebarOpen: a, setSidebarOpen: s }),
        t('div', {
          className:
            'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
          children: [
            e(U, { sidebarOpen: a, setSidebarOpen: s }),
            e('main', { children: e(ja, {}) }),
          ],
        }),
      ],
    });
  };
function Ta() {
  const a = De(),
    { pathname: s } = a;
  return e('div', {
    className:
      'flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3',
    children: t('div', {
      children: [
        e('div', {
          className: 'text-xs font-semibold text-slate-400 uppercase mb-3',
          children: 'Configuraciones',
        }),
        e('ul', {
          className: 'flex flex-nowrap md:block mr-3 md:mr-0',
          children: e('li', {
            className: 'mr-0.5 md:mr-0 md:mb-0.5',
            children: t(Y, {
              end: !0,
              to: '/company/profile',
              className: `flex items-center px-2.5 py-2 rounded whitespace-nowrap ${
                s.includes('/company/profile') && 'bg-secondary'
              }`,
              children: [
                e('svg', {
                  className: `w-4 h-4 shrink-0 fill-current text-slate-400 mr-2 ${
                    s.includes('/company/profile') && 'text-primary'
                  }`,
                  viewBox: '0 0 16 16',
                  children: e('path', {
                    d: 'M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z',
                  }),
                }),
                e('span', {
                  className: `text-sm font-medium ${
                    s.includes('/company/profile')
                      ? 'text-primary'
                      : 'hover:text-slate-700'
                  }`,
                  children: 'Mi perfil',
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
const Za = {
    padding: '20px',
    width: '80px',
    height: '10px',
    borderRadius: 4,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#D8F6F0',
    color: '#0DB1AC',
    transition: 'border .3s ease-in-out',
    cursor: 'pointer',
  },
  _a = { borderColor: '#0DB1AC' },
  Ua = { borderColor: '#0DB1AC' },
  Wa = { borderColor: '#0DB1AC' };
function Ga({ logo: a, setLogo: s, supplierData: r }) {
  const n = l.exports.useCallback((v) => {
      s(v.map((A) => Object.assign(A, { preview: URL.createObjectURL(A) })));
    }, []),
    {
      getRootProps: c,
      getInputProps: i,
      isDragActive: o,
      isDragAccept: d,
      isDragReject: h,
    } = _e({
      onDrop: n,
      accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] },
      multiple: !1,
    }),
    p = l.exports.useMemo(
      () => x(x(x(x({}, Za), o ? _a : {}), d ? Ua : {}), h ? Wa : {}),
      [o, h, d]
    ),
    m = a.map((v) =>
      e(
        'div',
        {
          children: e('img', {
            className: 'rounded-full w-20 h-20 bg-no-repeat bg-cover',
            src: v.preview,
            alt: 'Logo',
          }),
        },
        v.name
      )
    );
  l.exports.useEffect(
    () => () => {
      a.forEach((v) => URL.revokeObjectURL(v.preview));
    },
    [a]
  ),
    Q();
  const b = () =>
    a.length
      ? e('aside', { children: m })
      : r
      ? e('div', {
          className: 'mr-1',
          children: e('img', {
            name: 'img_product',
            className: 'w-20 h-20 rounded-full',
            src: r,
            width: '80',
            height: '80',
            alt: 'User upload',
          }),
        })
      : e('div', {
          className: 'mr-1',
          children: e('img', {
            name: 'img_product',
            className: 'w-20 h-20 rounded-full',
            src: Qe,
            width: '80',
            height: '80',
            alt: 'User upload',
          }),
        });
  return t('section', {
    className: 'flex flex-row-reverse justify-end items-center',
    children: [
      t(
        'div',
        R(
          x(
            { className: 'flex justify-center items-center ml-5' },
            c({ style: p })
          ),
          {
            children: [
              e('input', x({}, i())),
              e('p', {
                className:
                  'text-primary text-sm font-semibold hover:text-slate-500',
                children: 'Cambiar',
              }),
            ],
          }
        )
      ),
      e('section', { children: e('div', { children: b() }) }),
    ],
  });
}
function Ja() {
  const [a, s] = l.exports.useState([]),
    [r, n] = l.exports.useState([]),
    c = J(),
    {
      bannerErrorOpen: i,
      setBannerErrorOpen: o,
      loading: d,
      setLoading: h,
    } = l.exports.useContext(B),
    {
      handleSubmit: p,
      register: m,
      setValue: b,
      formState: { errors: v },
    } = Q(),
    A = localStorage.getItem('supplier_id'),
    w = async () => {
      let y = new FormData();
      y.append('logo', r[0]),
        fetch(`http://supplier.hubmine.mx/api/suppliers/upload-logo/${A}/`, {
          method: 'POST',
          body: y,
        }).then((E) => E.json());
    },
    N = async () => {
      fetch(`http://supplier.hubmine.mx/api/suppliers/details?supplier-id=${A}`)
        .then((y) => y.json())
        .then((y) => {
          s(y[0].bussiness_logo),
            b('commercial_brand', y[0].commercial_brand),
            b('bussiness_email', y[0].bussiness_email),
            b('bussiness_phone', y[0].bussiness_phone),
            b('rfc', y[0].rfc),
            b('social_reason', y[0].social_reason);
        });
    };
  return (
    l.exports.useEffect(() => {
      N();
    }, []),
    t('div', {
      className: 'grow',
      children: [
        t('div', {
          className: 'p-6 space-y-6',
          children: [
            e('h2', {
              className: 'text-xl text-slate-800 font-bold mb-5',
              children: 'Logo de la compa\xF1ia',
            }),
            i &&
              e('div', {
                className: 'space-y-3',
                children: e(Z, {
                  type: 'error',
                  open: i,
                  setOpen: o,
                  children:
                    'Lo sentimos, al parecer tenemos problema con nuestro servidor, vuelva a intentar m\xE1s tarde.',
                }),
              }),
            e('section', {
              children: e('div', {
                className: 'flex items-center',
                children: e(Ga, { supplierData: a, logo: r, setLogo: n }),
              }),
            }),
          ],
        }),
        e('form', {
          onSubmit: p(async (y) => {
            fetch(`http://supplier.hubmine.mx/api/suppliers/update/${A}/`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(y),
            }).then((E) => {
              E.status === 200
                ? (h(!0),
                  setTimeout(() => {
                    h(!1), c('/company/profile');
                  }, 1500))
                : (h(!0),
                  o(!0),
                  setTimeout(() => {
                    h(!1), o(!1);
                  }, 1500));
            });
          }),
          children: t('div', {
            className: 'p-6 space-y-6',
            children: [
              t('section', {
                children: [
                  e('h2', {
                    className:
                      'text-xl leading-snug text-slate-800 font-bold mb-1',
                    children: 'Perfil del negocio',
                  }),
                  e('p', {
                    className: 'text-sm',
                    children: 'Editas los datos de tu compa\xF1ia.',
                  }),
                  t('div', {
                    className:
                      'sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5',
                    children: [
                      t('div', {
                        className: 'sm:w-1/3',
                        children: [
                          t('label', {
                            className: 'block text-sm font-medium mb-1',
                            children: [
                              'Nombre de la empresa',
                              e('span', {
                                className: 'text-rose-500',
                                children: '*',
                              }),
                            ],
                          }),
                          e(
                            'input',
                            x(
                              {
                                maxLength: '30',
                                className: 'form-input w-full ',
                                autoComplete: 'off',
                                type: 'text',
                              },
                              m('commercial_brand', {
                                required: {
                                  value: !0,
                                  message: 'El campo es requerido',
                                },
                                pattern: {
                                  value: /[a-zA-Z0-9]/,
                                  message: 'El formato no es correcto',
                                },
                              })
                            )
                          ),
                          v.commercial_brand &&
                            e('span', {
                              className: 'text-red-500 text-sm',
                              children: v.commercial_brand.message,
                            }),
                        ],
                      }),
                      t('div', {
                        className: 'sm:w-1/3',
                        children: [
                          t('label', {
                            className: 'block text-sm font-medium mb-1',
                            children: [
                              'Tel\xE9fono',
                              e('span', {
                                className: 'text-rose-500',
                                children: '*',
                              }),
                            ],
                          }),
                          e(
                            'input',
                            x(
                              {
                                className: 'form-input w-full',
                                autoComplete: 'off',
                                type: 'number',
                              },
                              m('bussiness_phone', {
                                required: {
                                  value: !0,
                                  message: 'El campo es requerido',
                                },
                                pattern: {
                                  value: /[0-9]/,
                                  message: 'El formato no es correcto',
                                },
                              })
                            )
                          ),
                          v.bussiness_phone &&
                            e('span', {
                              className: 'text-red-500 text-sm',
                              children: v.bussiness_phone.message,
                            }),
                        ],
                      }),
                      t('div', {
                        className: 'sm:w-1/3',
                        children: [
                          t('label', {
                            className: 'block text-sm font-medium mb-1',
                            children: [
                              'RFC',
                              e('span', {
                                className: 'text-rose-500',
                                children: '*',
                              }),
                            ],
                          }),
                          e(
                            'input',
                            x(
                              {
                                maxLength: '13',
                                className: 'uppercase form-input w-full ',
                                autoComplete: 'off',
                                type: 'text',
                              },
                              m('rfc', {
                                required: {
                                  value: !0,
                                  message: 'El campo es requerido',
                                },
                                pattern: {
                                  value: /[a-zA-Z0-9]/,
                                  message: 'El formato no es correcto',
                                },
                                minLength: {
                                  value: 13,
                                  message: 'El RFC debe de tener 13 caracteres',
                                },
                              })
                            )
                          ),
                          ' ',
                          v.rfc &&
                            e('span', {
                              className: 'text-red-500 text-sm',
                              children: v.rfc.message,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              t('section', {
                children: [
                  e('h2', {
                    className:
                      'text-xl leading-snug text-slate-800 font-bold mb-1',
                    children: 'Correo electr\xF3nico',
                  }),
                  e('div', {
                    className: 'text-sm',
                    children:
                      'Edita el correo electr\xF3nico de tu compa\xF1ia.',
                  }),
                  t('div', {
                    className: 'sm:w-1/3 mt-5',
                    children: [
                      t('label', {
                        className: 'block text-sm font-medium mb-1',
                        children: [
                          'Email',
                          e('span', {
                            className: 'text-rose-500',
                            children: '*',
                          }),
                        ],
                      }),
                      e(
                        'input',
                        x(
                          {
                            maxLength: '35',
                            className: 'form-input w-full',
                            autoComplete: 'off',
                            type: 'email',
                          },
                          m('bussiness_email', {
                            required: {
                              value: !0,
                              message: 'El campo es requerido',
                            },
                            pattern: {
                              value:
                                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                              message: 'El formato no es correcto',
                            },
                          })
                        )
                      ),
                      ' ',
                      v.bussiness_email &&
                        e('span', {
                          className: 'text-red-500 text-sm',
                          children: v.bussiness_email.message,
                        }),
                    ],
                  }),
                ],
              }),
              t('section', {
                children: [
                  e('h2', {
                    className:
                      'text-xl leading-snug text-slate-800 font-bold mb-1',
                    children: 'Raz\xF3n social',
                  }),
                  e('p', {
                    className: 'text-sm',
                    children: 'Edita la raz\xF3n social de tu compa\xF1ia.',
                  }),
                  t('div', {
                    className: 'sm:w-1/3 mt-5',
                    children: [
                      t('label', {
                        className: 'block text-sm font-medium mb-1',
                        children: [
                          'Raz\xF3n social',
                          e('span', {
                            className: 'text-rose-500',
                            children: '*',
                          }),
                        ],
                      }),
                      e(
                        'input',
                        x(
                          {
                            maxLength: '30',
                            className: 'form-input w-full uppercase',
                            autoComplete: 'off',
                            type: 'text',
                          },
                          m('social_reason', {
                            required: {
                              value: !0,
                              message: 'El campo es requerido',
                            },
                            pattern: {
                              value: /[a-zA-Z0-9]/,
                              message: 'El formato no es correcto',
                            },
                          })
                        )
                      ),
                      v.social_reason &&
                        e('span', {
                          className: 'text-red-500 text-sm',
                          children: v.social_reason.message,
                        }),
                    ],
                  }),
                ],
              }),
              e('footer', {
                children: e('div', {
                  className:
                    'flex flex-col px-6 py-5 border-t border-slate-200',
                  children: t('div', {
                    className: 'flex self-end space-x-3',
                    children: [
                      e(q, {
                        to: '/',
                        className:
                          'btn border-slate-200 hover:border-slate-300 text-slate-600',
                        children: 'Salir',
                      }),
                      d
                        ? e(X, {})
                        : e(z, {
                            children: e('button', {
                              onClick: w,
                              type: 'submit',
                              className:
                                'btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3',
                              children: 'Guardar cambios',
                            }),
                          }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
const Ka = () => {
  const { sidebarOpen: a, setSidebarOpen: s } = l.exports.useContext(B);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(_, { sidebarOpen: a, setSidebarOpen: s }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden',
        children: [
          e(U, { sidebarOpen: a, setSidebarOpen: s }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children:
                      'Mi compa\xF1ia \u{1F477}\u{1F3FB}\u200D\u2640\uFE0F\u{1F477}\u{1F3FB}\u200D\u2642\uFE0F',
                  }),
                }),
                e('div', {
                  className: 'bg-white shadow-lg rounded-sm mb-8',
                  children: t('div', {
                    className: 'flex flex-col md:flex-row md:-mr-px',
                    children: [e(Ta, {}), e(Ja, {})],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
};
function W({ children: a, className: s, bg: r, size: n, position: c }) {
  const [i, o] = l.exports.useState(!1),
    d = (m) => {
      switch (m) {
        case 'right':
          return 'left-full top-1/2 transform -translate-y-1/2';
        case 'left':
          return 'right-full top-1/2 transform -translate-y-1/2';
        case 'bottom':
          return 'top-full left-1/2 transform -translate-x-1/2';
        default:
          return 'bottom-full left-1/2 transform -translate-x-1/2';
      }
    },
    h = (m) => {
      switch (m) {
        case 'lg':
          return 'min-w-72  p-3';
        case 'md':
          return 'min-w-56 p-3';
        case 'sm':
          return 'min-w-44 p-2';
        default:
          return 'p-2';
      }
    },
    p = (m) => {
      switch (m) {
        case 'right':
          return 'ml-2';
        case 'left':
          return 'mr-2';
        case 'bottom':
          return 'mt-2';
        default:
          return 'mb-2';
      }
    };
  return t('div', {
    className: `relative ${s}`,
    onMouseEnter: () => o(!0),
    onMouseLeave: () => o(!1),
    onFocus: () => o(!0),
    onBlur: () => o(!1),
    children: [
      e('button', {
        className: 'block',
        'aria-haspopup': 'true',
        'aria-expanded': i,
        onClick: (m) => m.preventDefault(),
        children: e('svg', {
          className: 'w-4 h-4 fill-current text-slate-400',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        }),
      }),
      e('div', {
        className: `z-10 absolute ${d(c)}`,
        children: e(T, {
          show: i,
          tag: 'div',
          className: `rounded overflow-hidden ${
            r === 'dark'
              ? 'bg-slate-800'
              : 'bg-white border border-slate-200 shadow-lg'
          } ${h(n)} ${p(c)}`,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: a,
        }),
      }),
    ],
  });
}
function Qa() {
  const [a, s] = l.exports.useState(!1),
    [r, n] = l.exports.useState(!0),
    [c, i] = l.exports.useState(!1),
    [o, d] = l.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(_, { sidebarOpen: a, setSidebarOpen: s }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(U, { sidebarOpen: a, setSidebarOpen: s }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Form \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Input Types',
                          }),
                          t('div', {
                            className: 'grid gap-5 md:grid-cols-3',
                            children: [
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'default',
                                      children: 'Default',
                                    }),
                                    e('input', {
                                      id: 'default',
                                      className: 'form-input w-full',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('div', {
                                      className:
                                        'flex items-center justify-between',
                                      children: [
                                        e('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          htmlFor: 'tooltip',
                                          children: 'W/ Tooltip',
                                        }),
                                        e(W, {
                                          className: 'ml-2',
                                          bg: 'dark',
                                          size: 'md',
                                          children: e('div', {
                                            className: 'text-sm text-slate-200',
                                            children:
                                              'Excepteur sint occaecat cupidata non proident, sunt.',
                                          }),
                                        }),
                                      ],
                                    }),
                                    e('input', {
                                      id: 'tooltip',
                                      className: 'form-input w-full',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'mandatory',
                                      children: [
                                        'Mandatory ',
                                        e('span', {
                                          className: 'text-rose-500',
                                          children: '*',
                                        }),
                                      ],
                                    }),
                                    e('input', {
                                      id: 'mandatory',
                                      className: 'form-input w-full',
                                      type: 'text',
                                      required: !0,
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'prefix',
                                      children: 'W/ Prefix',
                                    }),
                                    t('div', {
                                      className: 'relative',
                                      children: [
                                        e('input', {
                                          id: 'prefix',
                                          className: 'form-input w-full pl-12',
                                          type: 'text',
                                        }),
                                        e('div', {
                                          className:
                                            'absolute inset-0 right-auto flex items-center pointer-events-none',
                                          children: e('span', {
                                            className:
                                              'text-sm text-slate-400 font-medium px-3',
                                            children: 'USD',
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'suffix',
                                      children: 'W/ Suffix',
                                    }),
                                    t('div', {
                                      className: 'relative',
                                      children: [
                                        e('input', {
                                          id: 'suffix',
                                          className: 'form-input w-full pr-8',
                                          type: 'text',
                                        }),
                                        e('div', {
                                          className:
                                            'absolute inset-0 left-auto flex items-center pointer-events-none',
                                          children: e('span', {
                                            className:
                                              'text-sm text-slate-400 font-medium px-3',
                                            children: '%',
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'placeholder',
                                      children: 'W/ Placeholder',
                                    }),
                                    e('input', {
                                      id: 'placeholder',
                                      className: 'form-input w-full',
                                      type: 'text',
                                      placeholder: 'Something cool...',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('form', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'icon',
                                      children: 'W/ Icon',
                                    }),
                                    t('div', {
                                      className: 'relative',
                                      children: [
                                        e('input', {
                                          id: 'icon',
                                          className: 'form-input w-full pl-9',
                                          type: 'text',
                                        }),
                                        e('div', {
                                          className:
                                            'absolute inset-0 right-auto flex items-center pointer-events-none',
                                          children: e('svg', {
                                            className:
                                              'w-4 h-4 fill-current text-slate-400 shrink-0 ml-3 mr-2',
                                            viewBox: '0 0 16 16',
                                            children: e('path', {
                                              d: 'M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z',
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('div', {
                                      children: [
                                        e('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          htmlFor: 'supporting-text',
                                          children: 'W/ Supporting Text',
                                        }),
                                        e('input', {
                                          id: 'supporting-text',
                                          className: 'form-input w-full',
                                          type: 'text',
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className: 'text-xs mt-1',
                                      children: 'Supporting text goes here!',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('form', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'form-search',
                                      children: 'Search',
                                    }),
                                    t('div', {
                                      className: 'relative',
                                      children: [
                                        e('input', {
                                          id: 'form-search',
                                          className: 'form-input w-full pl-9',
                                          type: 'search',
                                        }),
                                        e('button', {
                                          className:
                                            'absolute inset-0 right-auto group',
                                          type: 'submit',
                                          'aria-label': 'Search',
                                          children: t('svg', {
                                            className:
                                              'w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2',
                                            viewBox: '0 0 16 16',
                                            xmlns: 'http://www.w3.org/2000/svg',
                                            children: [
                                              e('path', {
                                                d: 'M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z',
                                              }),
                                              e('path', {
                                                d: 'M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Input Sizes',
                          }),
                          t('div', {
                            className: 'grid gap-5 md:grid-cols-3',
                            children: [
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'small',
                                      children: 'Small',
                                    }),
                                    e('input', {
                                      id: 'small',
                                      className: 'form-input w-full px-2 py-1',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'normal',
                                      children: 'Default',
                                    }),
                                    e('input', {
                                      id: 'normal',
                                      className: 'form-input w-full',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'large',
                                      children: 'Large',
                                    }),
                                    e('input', {
                                      id: 'large',
                                      className: 'form-input w-full px-4 py-3',
                                      type: 'text',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Input States',
                          }),
                          t('div', {
                            className: 'grid gap-5 md:grid-cols-3',
                            children: [
                              e('div', {
                                children: t('div', {
                                  children: [
                                    e('label', {
                                      className:
                                        'block text-sm font-medium mb-1',
                                      htmlFor: 'disabled',
                                      children: 'Disabled',
                                    }),
                                    e('input', {
                                      id: 'disabled',
                                      className:
                                        'form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed',
                                      type: 'text',
                                      placeholder: 'Something cool...',
                                      disabled: !0,
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('div', {
                                      children: [
                                        t('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          htmlFor: 'error',
                                          children: [
                                            'Error ',
                                            e('span', {
                                              className: 'text-rose-500',
                                              children: '*',
                                            }),
                                          ],
                                        }),
                                        e('input', {
                                          id: 'error',
                                          className:
                                            'form-input w-full border-rose-300',
                                          type: 'text',
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className: 'text-xs mt-1 text-rose-500',
                                      children: 'This field is required!',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                children: t('div', {
                                  children: [
                                    t('div', {
                                      children: [
                                        t('label', {
                                          className:
                                            'block text-sm font-medium mb-1',
                                          htmlFor: 'success',
                                          children: [
                                            'Success ',
                                            e('span', {
                                              className: 'text-rose-500',
                                              children: '*',
                                            }),
                                          ],
                                        }),
                                        e('input', {
                                          id: 'success',
                                          className:
                                            'form-input w-full border-emerald-300',
                                          type: 'text',
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className:
                                        'text-xs mt-1 text-emerald-500',
                                      children: 'Sounds good!',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Select',
                          }),
                          e('label', {
                            className: 'block text-sm font-medium mb-1',
                            htmlFor: 'country',
                            children: 'Country',
                          }),
                          t('select', {
                            id: 'country',
                            className: 'form-select',
                            children: [
                              e('option', { children: 'Italy' }),
                              e('option', { children: 'USA' }),
                              e('option', { children: 'United Kingdom' }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Checkbox',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-3',
                            children: [
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'checkbox',
                                      className: 'form-checkbox',
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Active',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'checkbox',
                                      className: 'form-checkbox',
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Selected',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'checkbox',
                                      className:
                                        'form-checkbox disabled:bg-slate-50',
                                      disabled: !0,
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Disabled',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Radio',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-3',
                            children: [
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'radio',
                                      name: 'radio-buttons',
                                      className: 'form-radio',
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Active',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'radio',
                                      name: 'radio-buttons',
                                      className: 'form-radio',
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Selected',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3',
                                children: t('label', {
                                  className: 'flex items-center',
                                  children: [
                                    e('input', {
                                      type: 'radio',
                                      name: 'radio-buttons',
                                      className:
                                        'form-radio disabled:bg-slate-50',
                                      disabled: !0,
                                    }),
                                    e('span', {
                                      className: 'text-sm ml-2',
                                      children: 'Disabled',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Toggle Switch',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-3',
                            children: [
                              e('div', {
                                className: 'm-3 w-24',
                                children: t('div', {
                                  className: 'flex items-center',
                                  children: [
                                    t('div', {
                                      className: 'form-switch',
                                      children: [
                                        e('input', {
                                          type: 'checkbox',
                                          id: 'switch-1',
                                          className: 'sr-only',
                                          checked: r,
                                          onChange: () => n(!r),
                                        }),
                                        t('label', {
                                          className: 'bg-slate-400',
                                          htmlFor: 'switch-1',
                                          children: [
                                            e('span', {
                                              className: 'bg-white shadow-sm',
                                              'aria-hidden': 'true',
                                            }),
                                            e('span', {
                                              className: 'sr-only',
                                              children: 'Switch label',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm text-slate-400 italic ml-2',
                                      children: r ? 'On' : 'Off',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3 w-24',
                                children: t('div', {
                                  className: 'flex items-center',
                                  children: [
                                    t('div', {
                                      className: 'form-switch',
                                      children: [
                                        e('input', {
                                          type: 'checkbox',
                                          id: 'switch-2',
                                          className: 'sr-only',
                                          checked: c,
                                          onChange: () => i(!c),
                                        }),
                                        t('label', {
                                          className: 'bg-slate-400',
                                          htmlFor: 'switch-2',
                                          children: [
                                            e('span', {
                                              className: 'bg-white shadow-sm',
                                              'aria-hidden': 'true',
                                            }),
                                            e('span', {
                                              className: 'sr-only',
                                              children: 'Switch label',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm text-slate-400 italic ml-2',
                                      children: c ? 'On' : 'Off',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-3 w-32',
                                children: t('div', {
                                  className: 'flex items-center',
                                  children: [
                                    t('div', {
                                      className: 'form-switch',
                                      children: [
                                        e('input', {
                                          type: 'checkbox',
                                          id: 'switch-3',
                                          className: 'sr-only',
                                          checked: o,
                                          onChange: () => d(!o),
                                          disabled: !0,
                                        }),
                                        t('label', {
                                          className: 'bg-slate-400',
                                          htmlFor: 'switch-3',
                                          children: [
                                            e('span', {
                                              className: 'bg-white shadow-sm',
                                              'aria-hidden': 'true',
                                            }),
                                            e('span', {
                                              className: 'sr-only',
                                              children: 'Switch label',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm text-slate-400 italic ml-2',
                                      children: 'Disabled',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Ya() {
  const a = [
      { id: 0, period: 'Today' },
      { id: 1, period: 'Last 7 Days' },
      { id: 2, period: 'Last Month' },
      { id: 3, period: 'Last 12 Months' },
      { id: 4, period: 'All Time' },
    ],
    [s, r] = l.exports.useState(!1),
    [n, c] = l.exports.useState(2),
    i = l.exports.useRef(null),
    o = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const d = ({ target: h }) => {
        !o.current ||
          !s ||
          o.current.contains(h) ||
          i.current.contains(h) ||
          r(!1);
      };
      return (
        document.addEventListener('click', d),
        () => document.removeEventListener('click', d)
      );
    }),
    l.exports.useEffect(() => {
      const d = ({ keyCode: h }) => {
        !s || h !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', d),
        () => document.removeEventListener('keydown', d)
      );
    }),
    t('div', {
      className: 'relative inline-flex',
      children: [
        t('button', {
          ref: i,
          className:
            'btn justify-between min-w-44 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
          'aria-label': 'Select date range',
          'aria-haspopup': 'true',
          onClick: () => r(!s),
          'aria-expanded': s,
          children: [
            e('span', {
              className: 'flex items-center',
              children: e('span', { children: a[n].period }),
            }),
            e('svg', {
              className: 'shrink-0 ml-1 fill-current text-slate-400',
              width: '11',
              height: '7',
              viewBox: '0 0 11 7',
              children: e('path', {
                d: 'M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z',
              }),
            }),
          ],
        }),
        e(T, {
          show: s,
          tag: 'div',
          className:
            'z-10 absolute top-full left-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1',
          enter: 'transition ease-out duration-100 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: e('div', {
            ref: o,
            className: 'font-medium text-sm text-slate-600',
            onFocus: () => r(!0),
            onBlur: () => r(!1),
            children: a.map((d) =>
              t(
                'button',
                {
                  tabIndex: '0',
                  className: `flex items-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer ${
                    d.id === n && 'text-primary'
                  }`,
                  onClick: () => {
                    c(d.id), r(!1);
                  },
                  children: [
                    e('svg', {
                      className: `shrink-0 mr-2 fill-current text-primary ${
                        d.id !== n && 'invisible'
                      }`,
                      width: '12',
                      height: '9',
                      viewBox: '0 0 12 9',
                      children: e('path', {
                        d: 'M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z',
                      }),
                    }),
                    e('span', { children: d.period }),
                  ],
                },
                d.id
              )
            ),
          }),
        }),
      ],
    })
  );
}
function Xa() {
  const a = [
      { id: 0, period: 'Most Popular' },
      { id: 1, period: 'Newest' },
      { id: 2, period: 'Lowest Price' },
      { id: 3, period: 'Highest Price' },
    ],
    [s, r] = l.exports.useState(!1),
    [n, c] = l.exports.useState(0),
    i = l.exports.useRef(null),
    o = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const d = ({ target: h }) => {
        !o.current ||
          !s ||
          o.current.contains(h) ||
          i.current.contains(h) ||
          r(!1);
      };
      return (
        document.addEventListener('click', d),
        () => document.removeEventListener('click', d)
      );
    }),
    l.exports.useEffect(() => {
      const d = ({ keyCode: h }) => {
        !s || h !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', d),
        () => document.removeEventListener('keydown', d)
      );
    }),
    t('div', {
      className: 'relative inline-flex w-full',
      children: [
        t('button', {
          ref: i,
          className:
            'btn w-full justify-between min-w-44 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
          'aria-label': 'Select date range',
          'aria-haspopup': 'true',
          onClick: () => r(!s),
          'aria-expanded': s,
          children: [
            e('span', {
              className: 'flex items-center',
              children: e('span', { children: a[n].period }),
            }),
            e('svg', {
              className: 'shrink-0 ml-1 fill-current text-slate-400',
              width: '11',
              height: '7',
              viewBox: '0 0 11 7',
              children: e('path', {
                d: 'M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z',
              }),
            }),
          ],
        }),
        e(T, {
          show: s,
          tag: 'div',
          className:
            'z-10 absolute top-full left-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1',
          enter: 'transition ease-out duration-100 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: e('div', {
            ref: o,
            className:
              'font-medium text-sm text-slate-600 divide-y divide-slate-200',
            onFocus: () => r(!0),
            onBlur: () => r(!1),
            children: a.map((d) =>
              t(
                'button',
                {
                  tabIndex: '0',
                  className: `flex items-center justify-between w-full hover:bg-slate-50 py-2 px-3 cursor-pointer ${
                    d.id === n && 'text-primary'
                  }`,
                  onClick: () => {
                    c(d.id), r(!1);
                  },
                  children: [
                    e('span', { children: d.period }),
                    e('svg', {
                      className: `shrink-0 mr-2 fill-current text-primary ${
                        d.id !== n && 'invisible'
                      }`,
                      width: '12',
                      height: '9',
                      viewBox: '0 0 12 9',
                      children: e('path', {
                        d: 'M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z',
                      }),
                    }),
                  ],
                },
                d.id
              )
            ),
          }),
        }),
      ],
    })
  );
}
function $a({ align: a }) {
  const [s, r] = l.exports.useState(!1),
    n = l.exports.useRef(null),
    c = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const i = ({ target: o }) => {
        !c.current ||
          !s ||
          c.current.contains(o) ||
          n.current.contains(o) ||
          r(!1);
      };
      return (
        document.addEventListener('click', i),
        () => document.removeEventListener('click', i)
      );
    }),
    l.exports.useEffect(() => {
      const i = ({ keyCode: o }) => {
        !s || o !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }),
    t('div', {
      className: 'relative inline-flex',
      children: [
        t('button', {
          ref: n,
          className:
            'btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
          'aria-haspopup': 'true',
          onClick: () => r(!s),
          'aria-expanded': s,
          children: [
            e('span', { className: 'sr-only', children: 'Filter' }),
            e('wbr', {}),
            e('svg', {
              className: 'w-4 h-4 fill-current',
              viewBox: '0 0 16 16',
              children: e('path', {
                d: 'M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z',
              }),
            }),
          ],
        }),
        e(T, {
          show: s,
          tag: 'div',
          className: `origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            a === 'right' ? 'right-0' : 'left-0'
          }`,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('div', {
            ref: c,
            children: [
              e('div', {
                className:
                  'text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4',
                children: 'Filters',
              }),
              t('ul', {
                className: 'mb-4',
                children: [
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Direct VS Indirect',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Real Time Value',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Top Channels',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Sales VS Refunds',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Last Order',
                        }),
                      ],
                    }),
                  }),
                  e('li', {
                    className: 'py-1 px-3',
                    children: t('label', {
                      className: 'flex items-center',
                      children: [
                        e('input', {
                          type: 'checkbox',
                          className: 'form-checkbox',
                        }),
                        e('span', {
                          className: 'text-sm font-medium ml-2',
                          children: 'Total Spent',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              e('div', {
                className: 'py-2 px-3 border-t border-slate-200 bg-slate-50',
                children: t('ul', {
                  className: 'flex items-center justify-between',
                  children: [
                    e('li', {
                      children: e('button', {
                        className:
                          'btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600',
                        children: 'Clear',
                      }),
                    }),
                    e('li', {
                      children: e('button', {
                        className:
                          'btn-xs bg-primary hover:bg-indigo-600 text-white',
                        onClick: () => r(!1),
                        onBlur: () => r(!1),
                        children: 'Apply',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
var es =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAD/ElEQVR4Ae2axXorRxCFq+by3VyT2NkENTecrC4zMz5A3sIw3mUXfoLQNsywCTOzMSiIhWZ7ZrpSU25NmGFGX/p8UneV8Pzq023E63edg3aWBVHIABgAA2AADIABMAAGwAAYAANw9VU39HTbbQzgurNbNvdv2zKQ6LHbEqBYfAsBerrz27b0b98mGO0FUG+MLi42AJFrdr9je//OHYPJhN1Om7hQehuImCEYAZOJ/M4dA7t2DqaSdnsAFEtvE0+BeQwmaVLJ/O5dA3v2CEbMASqVjzxvQawHEAKCXLJSCXvvnoF9+5x0yo4vgFJe+dv3CMQ4sAQkkCwIYipx2b59gwcOCEYMAeQselPME0tAQNTaGNJzqA4eHDx4yMmk7dgBlMvvKd+TJcBl51oUVrpIJ/OHDg0ePuxkMnaMAFxvfrL6MZBsgnA/i3QlM2kezKTzR444R486WcGIGkBUKLzV8qgllUzCxQPKLuFeWuJFOHp08NhxJ5u1owcold5CvY918kH6oAmF4UCo78dcxj5xwuFLLmdHCTC/0KjVRmUF9L5FSZNuxDFJp4VIROHj2f3Jk0OnTju9ghEBAKtQfDtcAVG4CsGgG11ryp88PpfdyAxnzg719m6MAqDwpvgKP2nkWawShkAo+QlZfunxuWz+7Fnn7PmhC/4Yxkr4h6SIFmZ5EPlKEciVS1KuxyVXvk++y6PyPd/3lL64ynU9Hj3X95Y8d8lnGG/F1wsrp8H6DwHSqesBqJVsZCJEUhRwoGUBIykgkHv0GMzyYFkTIrmbrX+zsPJFz/oKRP8dQCp5HeiDkidFSodFWEhnXbWSREIgt+IyE+IifDFjPb+04ssINvHaNR2dnRcF7nTukaVDjhZpKtAi7Tx8+IL/RWXprpq6dwm/d/+frkA6dR0p0oenUmISpBNJQlQAoS+Ss4Bj1p2oTD87701AqIgArkcLKYi5nJhIIsGAAAmxFSENB7OL46Xa07NL4yCKEmDVynXdnbYEwyImQFRilIH0kW9ZchgBWgA+TM+PFSaf4BFE0QMkE1ezRUAdaH2qy74Ux0ra4NqcHv2q9PjU7Gi8vp1OZ663GACAlAq//xEICb5lcd+YHvlo5PaPxu7Q7uMDYFkrE91XinVAxiC9AgIRDI2p4Xc+vvm9T29tzIzAzxV5hHq6L1+1ar18/CTBRzn1iYHqzeHRiYfqzc8gVOwA5ADFIOcKEclXgMCqNYdHxh6sNbT1WANkUtcSkYW4nKdK7dOR0Qeq9U9BFHeAjo6LV6/pANFk9dOR4ftD620BIN/AIVYqnwyP3F+taevtBLB69fpXXrmxItajkvl/IQNgAAyAATAABsAAGAADYAD+vwDfAQSHHlNp5b1mAAAAAElFTkSuQmCC',
  ts =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAIAAAAn5KxJAAACwUlEQVR4Ae3ZhY4sVRDG8a9GcIfxSwybXhxi133d5QV4i5Umztvg7hDB3dfdd8e9u0/RPYXG0DvTm5z/7mjsl0pVbOjx8xM4CgXw5zRUQzVUQzVUQzVUQzVUQx9+6Ik7bjeOANSyyqdOTJ05NR25w/A1dHv7cyK64/b0mdNTZ89MRyOGT6HZ3EKtlgURQK7y3Nnp8+dnYlHDj8e0vfMFmAlgZgCxiHHh/PSlizOxmOE7KAMMEBG8PK6rvHxpurNzJi5cP0D3D7637ZrnY0ggmS65yq6umZ4eMxE32g9Vyt7d/RoeDES/UfH7MkTTPT0zff1mMmG0DSpt7XzmGRnMoqQ/LoP3RO500/395sCAmUwabYPu7nytHFsmyr8tgUxUkmsDEon04KA5NGymUkYboJZd3T/8QSZKALxnAkAyU4kIzPJNKmkMj5ijY+axYx2tg0pbW5+D8HsEUbOn/+0jyTde7HI7RkdnxieevPPvcUP4P3JsVSk57DjMrBw4jqNs5ShWlrIt23af3Y+WYzccq2FbdffZadQs940d3KiFigi0CpqIPQ5WIEDJRhIoAHZkvF4A2AtMMmArsFG6+n07sA6pBdBQ6Nrbb+uAnBIxiLjpBZouIrkqRhNMqDmrWfudOlZlkK2DxiIPEwVFI2dPEJ184Qllb8uN5f3CmxVrGZBaDI09BvI84gT9fkIEOXaUqotbB6+V6kuQWg8NBELRyEMyNRYmmIhAQlWFyuL69iuFygKkdkHvuP3+cPhaVlCqyST2jM2Z5orzq+sv5krzkNoLjcceBUNum5WSs8nkZ5dWXsgW5iD5Ahp9DM0ZKvaw2fzs/OJzmdwsJJ9Ab73l7muuuVWxAiib+2lu/tnD7E+QfAWNxx9jcCYzOzv/zGFGiPAjNBy6/sOPnjoQ4hVO/86koe1MQzVUQzVUQzVUQzX0ZynAXXojKHwUAAAAAElFTkSuQmCC',
  as =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAIAAAAn5KxJAAACxklEQVR4Ae3Yg3YkXRAA4Ax/7h7Gxjq2bdtO3m5t27bGNuNmtiodP8BMcOsiGX+n6jZFOVV9IfshCJRACZRACXR3ECiBEiiBEmhJaalWo7FYLHsdmpuXl52VZbc73r97azKb9y40NCysq6tLIhZLJGKr1fbm9WujybRH1+jo6NiRo/+DVSqBEMMyePHipd5g3HPQ0rKytNRUKWYVrdDFEpHJZHn69JlOb9hD0NjYuNbWZskaEbVSMWYXvWJYBg8fPdFo9XsCCrap6cl//v4baEL1EQlWyCyG2GAw3bv/QKXRBX8/WldXf+LEMUGJSUWpkFQRTvi/WKc33rpzX6nSBBN67FhKY0MDktAkOJEI/2+mVqBrtLrrN+/+VqqDA5XL5bMzM3K5bFtGRcIyFVaC8CSy0S1RabRXrt3+pVAF4RDa3t6WmJiwWf1N5XaueNszMCnUmouXb/z4pQwoNDU1tbamWqg4bPgCa4dbsiO7kHLhf1gG5y5e+/ZTESDosWPHcnNyOI7lYXAsyzCsMHEMBE3jBI2iMVZWaAobtULRgS59TXVVWFgYK0AxUItUDBaNqEQuWhFJLYOXZgIKlclkvb09IashgMSOA3TgZBkObEgFE0VhboE8v7C0MD8P7wv0xpSYkFBcUsxzPGYUkChEMRBZ/F8oOxr9c/Met3uz4oGGlpWXxcXGQtExeKAhkl0vPc4URXt9fpvNtri0HMxDaP9AH2zCkE8GMgow9DIsNqS6PR44mZqfXwjyITQ6Oqampmo9mzix0BhsrNPlVqs1Pr9/T5yUFBUVpRxLAdwqL+yaMKMOh0OhULg93j10mtc/MPD3X/I1I4bDbv/+44fL5d5jlyKhYS2tzWtI3m6zf/3yxeF07sVLkZy83LQzqRar9fOnj3a7Y+9e3BWXlGjUatjvHPAbEARKoARKoARKoARKoARKoH8AYsIHTwOnSfsAAAAASUVORK5CYII=',
  ss =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAIAAAAn5KxJAAACzElEQVR4Ae3ZQ5QzWRjG8eet5LNtdVgZ27Zt2/ZMKvvZr2a2sz9j27atto3k1n0ab2s3/FLV59x/I05+KUP2OOwszIQ8xCsHdVAHdVAHddDoc1AHddBZJ1ye3OrPACgH++ZdfP/iy4qzlRtbaPjdxxBJbsktv/z+1Vc8MG+bH1Mo635ib4eIADJ3m7/+ygc2X11cWOPHcWYy331CEgAJAAtq/JpritlrgyUpP2bQ7z/RKyIgAILkolTev6648w3BsrQfG+ivX6M8CJDjVooISAGWpvK731jc5+ZgZcaPHorQlH/8nMRYgvFk4qosS+X3vzk45LbSGuVGBgUq334kIgBIqlWvjl2nklem8offXjrmjmBdthAZdGSIIjQCjHGnD1uCeo36RUYG6gl3BqfcVdqYK0QA5dBA+ddvCIA6/AgRKldkOltbn/PPuDs4597SlnyhelBt8NuPdWAShDa1DNArOt0KQX3mppx//r3BpfeXtvl/i5vE/1HFmI6efhgjHMlaE1praW1oaUwlNLZirbGsmLA8+mtHfgdNOGTsws7adY3dC6sGTWZ2gyVFSAtLeBCKBQArEOgUaq0OWF2Kze+o3fzjWws7aqFVASpz5nmb8xB4BMdYtDodkJMzkwKFAOe0/rnim9fntv8JrWrQRGonJBKgtcDUVCqcthQQ6jObf1/21WuzWn6HVmWol9lNQZ7oCoq0k1zRK17Tb3M/eyXR/Bu0CKCJZDK1M0EPoAXGrTK+TCLR9Kv30Yte468Rr0K9LQXMmQMISfEwsRQCwbD+5/DJh/jUw5iujGqIJnK7ja8qPY/GEBAwrP2p8t6zYd3PmCpyaHo3qJQQiK37ufz2U6b2R2gxgcqGtCxaCoYE+OcP5bceN3+OE+MF9XK7Qxj+8YN547Hwj++hxRCKOQuGHnnQ/vEdtn/uPJODRpmDOqiDOqiDOqiDOugwlYBKM1pXDEQAAAAASUVORK5CYII=';
function ls({ align: a }) {
  const [s, r] = l.exports.useState(!1),
    n = l.exports.useRef(null),
    c = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const i = ({ target: o }) => {
        !c.current ||
          !s ||
          c.current.contains(o) ||
          n.current.contains(o) ||
          r(!1);
      };
      return (
        document.addEventListener('click', i),
        () => document.removeEventListener('click', i)
      );
    }),
    l.exports.useEffect(() => {
      const i = ({ keyCode: o }) => {
        !s || o !== 27 || r(!1);
      };
      return (
        document.addEventListener('keydown', i),
        () => document.removeEventListener('keydown', i)
      );
    }),
    t('div', {
      className: 'relative',
      children: [
        t('button', {
          ref: n,
          className: 'grow flex items-center truncate',
          'aria-haspopup': 'true',
          onClick: () => r(!s),
          'aria-expanded': s,
          children: [
            e('img', {
              className: 'w-8 h-8 rounded-full mr-2',
              src: es,
              width: '32',
              height: '32',
              alt: 'Group 01',
            }),
            e('div', {
              className: 'truncate',
              children: e('span', {
                className: 'text-sm font-medium',
                children: 'Acme Inc.',
              }),
            }),
            e('svg', {
              className: 'w-3 h-3 shrink-0 ml-1 fill-current text-slate-400',
              viewBox: '0 0 12 12',
              children: e('path', {
                d: 'M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z',
              }),
            }),
          ],
        }),
        e(T, {
          className: `origin-top-right z-10 absolute top-full min-w-60 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
            a === 'right' ? 'right-0' : 'left-0'
          }`,
          show: s,
          enter: 'transition ease-out duration-200 transform',
          enterStart: 'opacity-0 -translate-y-2',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-out duration-200',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          children: t('ul', {
            ref: c,
            onFocus: () => r(!0),
            onBlur: () => r(!1),
            children: [
              e('li', {
                children: e('a', {
                  className:
                    'font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3',
                  href: '#0',
                  onClick: () => r(!1),
                  children: t('div', {
                    className: 'flex items-center justify-between',
                    children: [
                      t('div', {
                        className: 'grow flex items-center truncate',
                        children: [
                          e('img', {
                            className: 'w-7 h-7 rounded-full mr-2',
                            src: ts,
                            width: '28',
                            height: '28',
                            alt: 'Channel 01',
                          }),
                          e('div', {
                            className: 'truncate',
                            children: 'Acme Inc.',
                          }),
                        ],
                      }),
                      e('svg', {
                        className:
                          'w-3 h-3 shrink-0 fill-current text-primary ml-1',
                        viewBox: '0 0 12 12',
                        children: e('path', {
                          d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              e('li', {
                children: e('a', {
                  className:
                    'font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3',
                  href: '#0',
                  onClick: () => r(!1),
                  children: e('div', {
                    className: 'flex items-center justify-between',
                    children: t('div', {
                      className: 'grow flex items-center truncate',
                      children: [
                        e('img', {
                          className: 'w-7 h-7 rounded-full mr-2',
                          src: as,
                          width: '28',
                          height: '28',
                          alt: 'Channel 02',
                        }),
                        e('div', {
                          className: 'truncate',
                          children: 'Acme Limited',
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              e('li', {
                children: e('a', {
                  className:
                    'font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3',
                  href: '#0',
                  onClick: () => r(!1),
                  children: e('div', {
                    className: 'flex items-center justify-between',
                    children: t('div', {
                      className: 'grow flex items-center truncate',
                      children: [
                        e('img', {
                          className: 'w-7 h-7 rounded-full mr-2',
                          src: ss,
                          width: '28',
                          height: '28',
                          alt: 'Channel 03',
                        }),
                        e('div', {
                          className: 'truncate',
                          children: 'Acme Srl',
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function rs(n) {
  var c = n,
    { children: a, align: s } = c,
    r = ne(c, ['children', 'align']);
  const [i, o] = l.exports.useState(!1),
    d = l.exports.useRef(null),
    h = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const p = ({ target: m }) => {
        !h.current ||
          !i ||
          h.current.contains(m) ||
          d.current.contains(m) ||
          o(!1);
      };
      return (
        document.addEventListener('click', p),
        () => document.removeEventListener('click', p)
      );
    }),
    l.exports.useEffect(() => {
      const p = ({ keyCode: m }) => {
        !i || m !== 27 || o(!1);
      };
      return (
        document.addEventListener('keydown', p),
        () => document.removeEventListener('keydown', p)
      );
    }),
    t(
      'div',
      R(x({}, r), {
        children: [
          t('button', {
            ref: d,
            className: `bg-white text-slate-400 hover:text-slate-500 rounded-full ${
              i && 'bg-slate-100 text-slate-500'
            }`,
            'aria-haspopup': 'true',
            onClick: () => o(!i),
            'aria-expanded': i,
            children: [
              e('span', { className: 'sr-only', children: 'Menu' }),
              t('svg', {
                className: 'w-8 h-8 fill-current',
                viewBox: '0 0 32 32',
                children: [
                  e('circle', { cx: '16', cy: '16', r: '2' }),
                  e('circle', { cx: '10', cy: '16', r: '2' }),
                  e('circle', { cx: '22', cy: '16', r: '2' }),
                ],
              }),
            ],
          }),
          e(T, {
            show: i,
            tag: 'div',
            className: `origin-top-right z-10 absolute top-full min-w-36 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
              s === 'right' ? 'right-0' : 'left-0'
            }`,
            enter: 'transition ease-out duration-200 transform',
            enterStart: 'opacity-0 -translate-y-2',
            enterEnd: 'opacity-100 translate-y-0',
            leave: 'transition ease-out duration-200',
            leaveStart: 'opacity-100',
            leaveEnd: 'opacity-0',
            children: e('ul', {
              ref: h,
              onFocus: () => o(!0),
              onBlur: () => o(!1),
              children: a,
            }),
          }),
        ],
      })
    )
  );
}
function is({ align: a }) {
  const s = {
    mode: 'range',
    static: !0,
    monthSelectorType: 'static',
    dateFormat: 'M j, Y',
    defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
    prevArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow:
      '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (r, n, c) => {
      c.element.value = n.replace('to', '-');
      const i = a || '';
      c.calendarContainer.classList.add(`flatpickr-${i}`);
    },
    onChange: (r, n, c) => {
      c.element.value = n.replace('to', '-');
    },
  };
  return t('div', {
    className: 'relative',
    children: [
      e(Jt, {
        className:
          'form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60',
        options: s,
      }),
      e('div', {
        className:
          'absolute inset-0 right-auto flex items-center pointer-events-none',
        children: e('svg', {
          className: 'w-4 h-4 fill-current text-slate-500 ml-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z',
          }),
        }),
      }),
    ],
  });
}
function ns() {
  const [a, s] = l.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(_, { sidebarOpen: a, setSidebarOpen: s }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(U, { sidebarOpen: a, setSidebarOpen: s }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Dropdown \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8 mb-80',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Classic Dropdown',
                          }),
                          e(Ya, {}),
                        ],
                      }),
                      t('div', {
                        className: 'w-80',
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Full-width Dropdown',
                          }),
                          e(Xa, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Filter',
                          }),
                          e($a, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Profile',
                          }),
                          e(Ye, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Switch Account',
                          }),
                          e(ls, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Notification',
                          }),
                          e(sa, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Help Center',
                          }),
                          e(Ke, {}),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Quick Selection',
                          }),
                          t(rs, {
                            className: 'relative inline-flex',
                            children: [
                              e('li', {
                                children: e('a', {
                                  className:
                                    'font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3',
                                  href: '#0',
                                  children: 'Option 1',
                                }),
                              }),
                              e('li', {
                                children: e('a', {
                                  className:
                                    'font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3',
                                  href: '#0',
                                  children: 'Option 2',
                                }),
                              }),
                              e('li', {
                                children: e('a', {
                                  className:
                                    'font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3',
                                  href: '#0',
                                  children: 'Remove',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          t('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: [
                              'Datepicker (built with',
                              ' ',
                              e('a', {
                                className: 'underline hover:no-underline',
                                href: 'https://github.com/flatpickr/flatpickr',
                                target: '_blank',
                                rel: 'noreferrer',
                                children: 'flatpickr',
                              }),
                              ')',
                            ],
                          }),
                          e(is, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function we({ children: a, className: s, type: r, open: n, setOpen: c }) {
  const i = (d) => {
    switch (d) {
      case 'warning':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        });
      case 'error':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        });
      case 'success':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        });
      default:
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
          }),
        });
    }
  };
  return e(z, {
    children:
      n &&
      e('div', {
        className: s,
        children: e('div', {
          className: `px-4 py-2 rounded-sm text-sm border ${((d) => {
            switch (d) {
              case 'warning':
                return 'bg-amber-100 border-amber-200 text-amber-600';
              case 'error':
                return 'bg-rose-100 border-rose-200 text-rose-600';
              case 'success':
                return 'bg-emerald-100 border-emerald-200 text-emerald-600';
              default:
                return 'bg-indigo-100 border-indigo-200 text-primary';
            }
          })(r)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [i(r), e('div', { children: a })],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => c(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function ye({ children: a, className: s, type: r, open: n, setOpen: c }) {
  const i = (d) => {
    switch (d) {
      case 'warning':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        });
      case 'error':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        });
      case 'success':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        });
      default:
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
          }),
        });
    }
  };
  return e(z, {
    children:
      n &&
      e('div', {
        className: s,
        children: e('div', {
          className: `inline-flex min-w-80 px-4 py-2 rounded-sm text-sm text-white ${((
            d
          ) => {
            switch (d) {
              case 'warning':
                return 'bg-amber-500';
              case 'error':
                return 'bg-rose-500';
              case 'success':
                return 'bg-emerald-500';
              default:
                return 'bg-primary';
            }
          })(r)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  i(r),
                  e('div', { className: 'font-medium', children: a }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => c(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function Ce({ children: a, className: s, type: r, open: n, setOpen: c }) {
  const i = (d) => {
    switch (d) {
      case 'warning':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
          }),
        });
      case 'error':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
          }),
        });
      case 'success':
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
          }),
        });
      default:
        return e('svg', {
          className: 'w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3',
          viewBox: '0 0 16 16',
          children: e('path', {
            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
          }),
        });
    }
  };
  return e(z, {
    children:
      n &&
      e('div', {
        className: s,
        children: e('div', {
          className: `inline-flex min-w-80 px-4 py-2 rounded-sm text-sm border ${((
            d
          ) => {
            switch (d) {
              case 'warning':
                return 'bg-amber-100 border-amber-200 text-amber-600';
              case 'error':
                return 'bg-rose-100 border-rose-200 text-rose-600';
              case 'success':
                return 'bg-emerald-100 border-emerald-200 text-emerald-600';
              default:
                return 'bg-indigo-100 border-indigo-200 text-primary';
            }
          })(r)}`,
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [i(r), e('div', { children: a })],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => c(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function ke({ children: a, className: s, type: r, open: n, setOpen: c }) {
  return e(z, {
    children:
      n &&
      e('div', {
        className: s,
        children: e('div', {
          className:
            'inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-white shadow-lg border border-slate-200 text-slate-600',
          children: t('div', {
            className: 'flex w-full justify-between items-start',
            children: [
              t('div', {
                className: 'flex',
                children: [
                  ((o) => {
                    switch (o) {
                      case 'warning':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-amber-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                          }),
                        });
                      case 'error':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-rose-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                          }),
                        });
                      case 'success':
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-emerald-500 mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
                          }),
                        });
                      default:
                        return e('svg', {
                          className:
                            'w-4 h-4 shrink-0 fill-current text-primary mt-[3px] mr-3',
                          viewBox: '0 0 16 16',
                          children: e('path', {
                            d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
                          }),
                        });
                    }
                  })(r),
                  e('div', { children: a }),
                ],
              }),
              t('button', {
                className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                onClick: () => c(!1),
                children: [
                  e('div', { className: 'sr-only', children: 'Close' }),
                  e('svg', {
                    className: 'w-4 h-4 fill-current',
                    children: e('path', {
                      d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
  });
}
function Se({ children: a, className: s, type: r, open: n, setOpen: c }) {
  return e(z, {
    children:
      n &&
      e('div', {
        className: s,
        children: t('div', {
          className:
            'inline-flex flex-col max-w-lg px-4 py-2 rounded-sm text-sm bg-white shadow-lg border border-slate-200 text-slate-600',
          children: [
            t('div', {
              className: 'flex w-full justify-between items-start',
              children: [
                t('div', {
                  className: 'flex',
                  children: [
                    ((o) => {
                      switch (o) {
                        case 'warning':
                          return e('svg', {
                            className:
                              'w-4 h-4 shrink-0 fill-current text-amber-500 mt-[3px] mr-3',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                            }),
                          });
                        case 'error':
                          return e('svg', {
                            className:
                              'w-4 h-4 shrink-0 fill-current text-rose-500 mt-[3px] mr-3',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z',
                            }),
                          });
                        case 'success':
                          return e('svg', {
                            className:
                              'w-4 h-4 shrink-0 fill-current text-emerald-500 mt-[3px] mr-3',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
                            }),
                          });
                        default:
                          return e('svg', {
                            className:
                              'w-4 h-4 shrink-0 fill-current text-primary mt-[3px] mr-3',
                            viewBox: '0 0 16 16',
                            children: e('path', {
                              d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
                            }),
                          });
                      }
                    })(r),
                    e('div', { children: a }),
                  ],
                }),
                t('button', {
                  className: 'opacity-70 hover:opacity-80 ml-3 mt-[3px]',
                  onClick: () => c(!1),
                  children: [
                    e('div', { className: 'sr-only', children: 'Close' }),
                    e('svg', {
                      className: 'w-4 h-4 fill-current',
                      children: e('path', {
                        d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                      }),
                    }),
                  ],
                }),
              ],
            }),
            e('div', {
              className: 'text-right mt-1',
              children: e('a', {
                className: 'font-medium text-primary hover:text-indigo-600',
                href: '#0',
                children: 'Action ->',
              }),
            }),
          ],
        }),
      }),
  });
}
function cs() {
  const [a, s] = l.exports.useState(!1),
    [r, n] = l.exports.useState(!0),
    [c, i] = l.exports.useState(!0),
    [o, d] = l.exports.useState(!0),
    [h, p] = l.exports.useState(!0),
    [m, b] = l.exports.useState(!0),
    [v, A] = l.exports.useState(!0),
    [w, N] = l.exports.useState(!0),
    [k, y] = l.exports.useState(!0),
    [E, O] = l.exports.useState(!0),
    [L, D] = l.exports.useState(!0),
    [j, S] = l.exports.useState(!0),
    [G, g] = l.exports.useState(!0),
    [f, C] = l.exports.useState(!0),
    [V, H] = l.exports.useState(!0),
    [ae, le] = l.exports.useState(!0),
    [u, re] = l.exports.useState(!0),
    [Le, Ee] = l.exports.useState(!0),
    [de, Me] = l.exports.useState(!0),
    [Oe, ze] = l.exports.useState(!0),
    [me, Be] = l.exports.useState(!0),
    [Fe, He] = l.exports.useState(!0),
    [he, pe] = l.exports.useState(!0),
    [ue, xe] = l.exports.useState(!0),
    [Ve, Pe] = l.exports.useState(!0);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(_, { sidebarOpen: a, setSidebarOpen: s }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(U, { sidebarOpen: a, setSidebarOpen: s }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Alert & Banner \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Banner',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(Z, {
                                type: 'warning',
                                open: r,
                                setOpen: n,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(Z, {
                                type: 'success',
                                open: o,
                                setOpen: d,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(Z, {
                                type: 'error',
                                open: c,
                                setOpen: i,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(Z, {
                                open: h,
                                setOpen: p,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Banner 2',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(we, {
                                type: 'warning',
                                open: m,
                                setOpen: b,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(we, {
                                type: 'success',
                                open: w,
                                setOpen: N,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(we, {
                                type: 'error',
                                open: v,
                                setOpen: A,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                              e(we, {
                                open: k,
                                setOpen: y,
                                children:
                                  'We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Toast',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(ye, {
                                type: 'warning',
                                open: E,
                                setOpen: O,
                                children: 'A warning toast.',
                              }),
                              e(ye, {
                                type: 'success',
                                open: j,
                                setOpen: S,
                                children: 'A successful toast.',
                              }),
                              e(ye, {
                                type: 'error',
                                open: L,
                                setOpen: D,
                                children: 'A dangerous toast.',
                              }),
                              e(ye, {
                                open: G,
                                setOpen: g,
                                children: 'An informational toast.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Toast 2',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(Ce, {
                                type: 'warning',
                                open: f,
                                setOpen: C,
                                children: 'A warning toast.',
                              }),
                              e(Ce, {
                                type: 'success',
                                open: ae,
                                setOpen: le,
                                children: 'A successful toast.',
                              }),
                              e(Ce, {
                                type: 'error',
                                open: V,
                                setOpen: H,
                                children: 'A dangerous toast.',
                              }),
                              e(Ce, {
                                open: u,
                                setOpen: re,
                                children: 'An informational toast.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Toast 3',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              e(ke, {
                                type: 'warning',
                                open: Le,
                                setOpen: Ee,
                                children: 'A warning toast.',
                              }),
                              e(ke, {
                                type: 'success',
                                open: Oe,
                                setOpen: ze,
                                children: 'A successful toast.',
                              }),
                              e(ke, {
                                type: 'error',
                                open: de,
                                setOpen: Me,
                                children: 'A dangerous toast.',
                              }),
                              e(ke, {
                                open: me,
                                setOpen: Be,
                                children: 'An informational toast.',
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Notification',
                          }),
                          t('div', {
                            className: 'space-y-3',
                            children: [
                              t(Se, {
                                type: 'warning',
                                open: Fe,
                                setOpen: He,
                                children: [
                                  e('div', {
                                    className:
                                      'font-medium text-slate-800 mb-1',
                                    children: 'Merged Pull Request',
                                  }),
                                  e('div', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.',
                                  }),
                                ],
                              }),
                              t(Se, {
                                type: 'success',
                                open: ue,
                                setOpen: xe,
                                children: [
                                  e('div', {
                                    className:
                                      'font-medium text-slate-800 mb-1',
                                    children: 'Merged Pull Request',
                                  }),
                                  e('div', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.',
                                  }),
                                ],
                              }),
                              t(Se, {
                                type: 'error',
                                open: he,
                                setOpen: pe,
                                children: [
                                  e('div', {
                                    className:
                                      'font-medium text-slate-800 mb-1',
                                    children: 'Merged Pull Request',
                                  }),
                                  e('div', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.',
                                  }),
                                ],
                              }),
                              t(Se, {
                                open: Ve,
                                setOpen: Pe,
                                children: [
                                  e('div', {
                                    className:
                                      'font-medium text-slate-800 mb-1',
                                    children: 'Merged Pull Request',
                                  }),
                                  e('div', {
                                    children:
                                      'Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Ae({ children: a, id: s, title: r, modalOpen: n, setModalOpen: c }) {
  const i = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const o = ({ target: d }) => {
        !n || i.current.contains(d) || c(!1);
      };
      return (
        document.addEventListener('click', o),
        () => document.removeEventListener('click', o)
      );
    }),
    l.exports.useEffect(() => {
      const o = ({ keyCode: d }) => {
        !n || d !== 27 || c(!1);
      };
      return (
        document.addEventListener('keydown', o),
        () => document.removeEventListener('keydown', o)
      );
    }),
    t(z, {
      children: [
        e(T, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: n,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(T, {
          id: s,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: n,
          enter: 'transition ease-in-out duration-200',
          enterStart: 'opacity-0 translate-y-4',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-in-out duration-200',
          leaveStart: 'opacity-100 translate-y-0',
          leaveEnd: 'opacity-0 translate-y-4',
          children: t('div', {
            ref: i,
            className:
              'bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full',
            children: [
              e('div', {
                className: 'px-5 py-3 border-b border-slate-200',
                children: t('div', {
                  className: 'flex justify-between items-center',
                  children: [
                    e('div', {
                      className: 'font-semibold text-slate-800',
                      children: r,
                    }),
                    t('button', {
                      className: 'text-slate-400 hover:text-slate-500',
                      onClick: (o) => {
                        o.stopPropagation(), c(!1);
                      },
                      children: [
                        e('div', { className: 'sr-only', children: 'Close' }),
                        e('svg', {
                          className: 'w-4 h-4 fill-current',
                          children: e('path', {
                            d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              a,
            ],
          }),
        }),
      ],
    })
  );
}
function os({ children: a, id: s, title: r, modalOpen: n, setModalOpen: c }) {
  const i = l.exports.useRef(null);
  return (
    l.exports.useEffect(() => {
      const o = ({ target: d }) => {
        !n || i.current.contains(d) || c(!1);
      };
      return (
        document.addEventListener('click', o),
        () => document.removeEventListener('click', o)
      );
    }),
    l.exports.useEffect(() => {
      const o = ({ keyCode: d }) => {
        !n || d !== 27 || c(!1);
      };
      return (
        document.addEventListener('keydown', o),
        () => document.removeEventListener('keydown', o)
      );
    }),
    t(z, {
      children: [
        e(T, {
          className:
            'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
          show: n,
          enter: 'transition ease-out duration-200',
          enterStart: 'opacity-0',
          enterEnd: 'opacity-100',
          leave: 'transition ease-out duration-100',
          leaveStart: 'opacity-100',
          leaveEnd: 'opacity-0',
          'aria-hidden': 'true',
        }),
        e(T, {
          id: s,
          className:
            'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
          role: 'dialog',
          'aria-modal': 'true',
          show: n,
          enter: 'transition ease-in-out duration-200',
          enterStart: 'opacity-0 translate-y-4',
          enterEnd: 'opacity-100 translate-y-0',
          leave: 'transition ease-in-out duration-200',
          leaveStart: 'opacity-100 translate-y-0',
          leaveEnd: 'opacity-0 translate-y-4',
          children: e('div', {
            ref: i,
            className:
              'bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full',
            children: t('div', {
              className: 'p-5',
              children: [
                e('div', {
                  className: 'mb-2',
                  children: t('div', {
                    className: 'flex justify-between items-center',
                    children: [
                      e('div', {
                        className: 'text-lg font-semibold text-slate-800',
                        children: r,
                      }),
                      t('button', {
                        className: 'text-slate-400 hover:text-slate-500',
                        onClick: (o) => {
                          o.stopPropagation(), c(!1);
                        },
                        children: [
                          e('div', { className: 'sr-only', children: 'Close' }),
                          e('svg', {
                            className: 'w-4 h-4 fill-current',
                            children: e('path', {
                              d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                a,
              ],
            }),
          }),
        }),
      ],
    })
  );
}
function Ie({ children: a, id: s, modalOpen: r }) {
  const n = l.exports.useRef(null);
  return t(z, {
    children: [
      e(T, {
        className:
          'fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity',
        show: r,
        enter: 'transition ease-out duration-200',
        enterStart: 'opacity-0',
        enterEnd: 'opacity-100',
        leave: 'transition ease-out duration-100',
        leaveStart: 'opacity-100',
        leaveEnd: 'opacity-0',
        'aria-hidden': 'true',
      }),
      e(T, {
        id: s,
        className:
          'fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6',
        role: 'dialog',
        'aria-modal': 'true',
        show: r,
        enter: 'transition ease-in-out duration-200',
        enterStart: 'opacity-0 translate-y-4',
        enterEnd: 'opacity-100 translate-y-0',
        leave: 'transition ease-in-out duration-200',
        leaveStart: 'opacity-100 translate-y-0',
        leaveEnd: 'opacity-0 translate-y-4',
        children: e('div', {
          ref: n,
          className:
            'bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full',
          children: e('div', {
            className: 'p-6',
            children: e('div', { className: 'relative', children: a }),
          }),
        }),
      }),
    ],
  });
}
var ds = '/dash-supplier2.0/assets/announcement-icon.90ad60fe.svg',
  ms = '/dash-supplier2.0/assets/modal-image.f36b2fb4.jpg';
function hs() {
  const [a, s] = l.exports.useState(!1),
    [r, n] = l.exports.useState(!1),
    [c, i] = l.exports.useState(!1),
    [o, d] = l.exports.useState(!1),
    [h, p] = l.exports.useState(!1),
    [m, b] = l.exports.useState(!1),
    [v, A] = l.exports.useState(!1),
    [w, N] = l.exports.useState(!1),
    [k, y] = l.exports.useState(!1),
    [E, O] = l.exports.useState(!1),
    [L, D] = l.exports.useState(!1),
    [j, S] = l.exports.useState(!1),
    [G, g] = l.exports.useState(!1);
  return (
    l.exports.useState(!1),
    t('div', {
      className: 'flex h-screen overflow-hidden',
      children: [
        e(_, { sidebarOpen: a, setSidebarOpen: s }),
        t('div', {
          className:
            'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
          children: [
            e(U, { sidebarOpen: a, setSidebarOpen: s }),
            e('main', {
              children: t('div', {
                className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
                children: [
                  e('div', {
                    className: 'mb-8',
                    children: e('h1', {
                      className:
                        'text-2xl md:text-3xl text-slate-800 font-bold',
                      children: 'Modal \u2728',
                    }),
                  }),
                  e('div', {
                    className: 'border-t border-slate-200',
                    children: t('div', {
                      className: 'space-y-8 mt-8',
                      children: [
                        t('div', {
                          children: [
                            e('h2', {
                              className:
                                'text-2xl text-slate-800 font-bold mb-6',
                              children: 'Basic',
                            }),
                            t('div', {
                              className: 'flex flex-wrap items-center -m-1.5',
                              children: [
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'basic-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), n(!0);
                                      },
                                      children: 'Basic Modal',
                                    }),
                                    t(Ae, {
                                      id: 'basic-modal',
                                      modalOpen: r,
                                      setModalOpen: n,
                                      title: 'Basic Modal',
                                      children: [
                                        e('div', {
                                          className: 'px-5 pt-4 pb-1',
                                          children: t('div', {
                                            className: 'text-sm',
                                            children: [
                                              e('div', {
                                                className:
                                                  'font-medium text-slate-800 mb-2',
                                                children:
                                                  'Let\u2019s Talk Paragraph',
                                              }),
                                              t('div', {
                                                className: 'space-y-2',
                                                children: [
                                                  e('p', {
                                                    children:
                                                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        e('div', {
                                          className: 'px-5 py-4',
                                          children: t('div', {
                                            className:
                                              'flex flex-wrap justify-end space-x-2',
                                            children: [
                                              e('button', {
                                                className:
                                                  'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                onClick: (f) => {
                                                  f.stopPropagation(), n(!1);
                                                },
                                                children: 'Close',
                                              }),
                                              e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                children: 'I Understand',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'scrollbar-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), i(!0);
                                      },
                                      children: 'Modal w/ Scroll Bar',
                                    }),
                                    t(Ae, {
                                      id: 'scrollbar-modal',
                                      modalOpen: c,
                                      setModalOpen: i,
                                      title: 'Modal w/ Scroll Bar',
                                      children: [
                                        e('div', {
                                          className: 'px-5 py-4',
                                          children: t('div', {
                                            className: 'text-sm',
                                            children: [
                                              e('div', {
                                                className:
                                                  'font-medium text-slate-800 mb-2',
                                                children:
                                                  'Let\u2019s Talk Paragraph',
                                              }),
                                              t('div', {
                                                className: 'space-y-2',
                                                children: [
                                                  e('p', {
                                                    children:
                                                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non.',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                        e('div', {
                                          className:
                                            'sticky bottom-0 px-5 py-4 bg-white border-t border-slate-200',
                                          children: t('div', {
                                            className:
                                              'flex flex-wrap justify-end space-x-2',
                                            children: [
                                              e('button', {
                                                className:
                                                  'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                onClick: (f) => {
                                                  f.stopPropagation(), i(!1);
                                                },
                                                children: 'Close',
                                              }),
                                              e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                children: 'I Understand',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'cookies-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), d(!0);
                                      },
                                      children: 'Cookies',
                                    }),
                                    t(os, {
                                      id: 'cookies-modal',
                                      modalOpen: o,
                                      setModalOpen: d,
                                      title: 'We use cookies \u{1F36A}',
                                      children: [
                                        e('div', {
                                          className: 'text-sm mb-5',
                                          children: t('div', {
                                            className: 'space-y-2',
                                            children: [
                                              e('p', {
                                                children:
                                                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                              }),
                                              e('p', {
                                                children:
                                                  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                              }),
                                            ],
                                          }),
                                        }),
                                        t('div', {
                                          className:
                                            'flex flex-wrap justify-end space-x-2',
                                          children: [
                                            e('button', {
                                              className:
                                                'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                              onClick: (f) => {
                                                f.stopPropagation(), d(!1);
                                              },
                                              children: 'Decline',
                                            }),
                                            e('button', {
                                              className:
                                                'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                              onClick: (f) => {
                                                f.stopPropagation(), d(!1);
                                              },
                                              children: 'I Accept',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        t('div', {
                          children: [
                            e('h2', {
                              className:
                                'text-2xl text-slate-800 font-bold mb-6',
                              children: 'Feedback',
                            }),
                            t('div', {
                              className: 'flex flex-wrap items-center -m-1.5',
                              children: [
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'success-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), p(!0);
                                      },
                                      children: 'Success Modal',
                                    }),
                                    e($, {
                                      id: 'success-modal',
                                      modalOpen: h,
                                      setModalOpen: p,
                                      children: t('div', {
                                        className: 'p-5 flex space-x-4',
                                        children: [
                                          e('div', {
                                            className:
                                              'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-emerald-100',
                                            children: e('svg', {
                                              className:
                                                'w-4 h-4 shrink-0 fill-current text-emerald-500',
                                              viewBox: '0 0 16 16',
                                              children: e('path', {
                                                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z',
                                              }),
                                            }),
                                          }),
                                          t('div', {
                                            children: [
                                              e('div', {
                                                className: 'mb-2',
                                                children: e('div', {
                                                  className:
                                                    'text-lg font-semibold text-slate-800',
                                                  children:
                                                    'Upgrade your Subscription?',
                                                }),
                                              }),
                                              e('div', {
                                                className: 'text-sm mb-10',
                                                children: e('div', {
                                                  className: 'space-y-2',
                                                  children: e('p', {
                                                    children:
                                                      'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                                  }),
                                                }),
                                              }),
                                              t('div', {
                                                className:
                                                  'flex flex-wrap justify-end space-x-2',
                                                children: [
                                                  e('button', {
                                                    className:
                                                      'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                    onClick: (f) => {
                                                      f.stopPropagation(),
                                                        p(!1);
                                                    },
                                                    children: 'Cancel',
                                                  }),
                                                  e('button', {
                                                    className:
                                                      'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                    children: 'Yes, Upgrade it',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'danger-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), b(!0);
                                      },
                                      children: 'Danger Modal',
                                    }),
                                    e($, {
                                      id: 'danger-modal',
                                      modalOpen: m,
                                      setModalOpen: b,
                                      children: t('div', {
                                        className: 'p-5 flex space-x-4',
                                        children: [
                                          e('div', {
                                            className:
                                              'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100',
                                            children: e('svg', {
                                              className:
                                                'w-4 h-4 shrink-0 fill-current text-rose-500',
                                              viewBox: '0 0 16 16',
                                              children: e('path', {
                                                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z',
                                              }),
                                            }),
                                          }),
                                          t('div', {
                                            children: [
                                              e('div', {
                                                className: 'mb-2',
                                                children: e('div', {
                                                  className:
                                                    'text-lg font-semibold text-slate-800',
                                                  children:
                                                    'Delete 1 customer?',
                                                }),
                                              }),
                                              e('div', {
                                                className: 'text-sm mb-10',
                                                children: e('div', {
                                                  className: 'space-y-2',
                                                  children: e('p', {
                                                    children:
                                                      'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                                  }),
                                                }),
                                              }),
                                              t('div', {
                                                className:
                                                  'flex flex-wrap justify-end space-x-2',
                                                children: [
                                                  e('button', {
                                                    className:
                                                      'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                    onClick: (f) => {
                                                      f.stopPropagation(),
                                                        b(!1);
                                                    },
                                                    children: 'Cancel',
                                                  }),
                                                  e('button', {
                                                    className:
                                                      'btn-sm bg-rose-500 hover:bg-rose-600 text-white',
                                                    children: 'Yes, Delete it',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'info-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), A(!0);
                                      },
                                      children: 'Info Modal',
                                    }),
                                    e($, {
                                      id: 'info-modal',
                                      modalOpen: v,
                                      setModalOpen: A,
                                      children: t('div', {
                                        className: 'p-5 flex space-x-4',
                                        children: [
                                          e('div', {
                                            className:
                                              'w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-100',
                                            children: e('svg', {
                                              className:
                                                'w-4 h-4 shrink-0 fill-current text-primary',
                                              viewBox: '0 0 16 16',
                                              children: e('path', {
                                                d: 'M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z',
                                              }),
                                            }),
                                          }),
                                          t('div', {
                                            children: [
                                              e('div', {
                                                className: 'mb-2',
                                                children: e('div', {
                                                  className:
                                                    'text-lg font-semibold text-slate-800',
                                                  children: 'Create new Event?',
                                                }),
                                              }),
                                              e('div', {
                                                className: 'text-sm mb-10',
                                                children: e('div', {
                                                  className: 'space-y-2',
                                                  children: e('p', {
                                                    children:
                                                      'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                                  }),
                                                }),
                                              }),
                                              t('div', {
                                                className:
                                                  'flex flex-wrap justify-end space-x-2',
                                                children: [
                                                  e('button', {
                                                    className:
                                                      'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                    onClick: (f) => {
                                                      f.stopPropagation(),
                                                        A(!1);
                                                    },
                                                    children: 'Cancel',
                                                  }),
                                                  e('button', {
                                                    className:
                                                      'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                    children: 'Yes, Create it',
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        t('div', {
                          children: [
                            e('h2', {
                              className:
                                'text-2xl text-slate-800 font-bold mb-6',
                              children: 'Product',
                            }),
                            t('div', {
                              className: 'flex flex-wrap items-center -m-1.5',
                              children: [
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'feedback-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), N(!0);
                                      },
                                      children: 'Send Feedback',
                                    }),
                                    t(Ae, {
                                      id: 'feedback-modal',
                                      modalOpen: w,
                                      setModalOpen: N,
                                      title: 'Send Feedback',
                                      children: [
                                        t('div', {
                                          className: 'px-5 py-4',
                                          children: [
                                            e('div', {
                                              className: 'text-sm',
                                              children: e('div', {
                                                className:
                                                  'font-medium text-slate-800 mb-3',
                                                children:
                                                  'Let us know what you think \u{1F64C}',
                                              }),
                                            }),
                                            t('div', {
                                              className: 'space-y-3',
                                              children: [
                                                t('div', {
                                                  children: [
                                                    t('label', {
                                                      className:
                                                        'block text-sm font-medium mb-1',
                                                      htmlFor: 'name',
                                                      children: [
                                                        'Name ',
                                                        e('span', {
                                                          className:
                                                            'text-rose-500',
                                                          children: '*',
                                                        }),
                                                      ],
                                                    }),
                                                    e('input', {
                                                      id: 'name',
                                                      className:
                                                        'form-input w-full px-2 py-1',
                                                      type: 'text',
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                                t('div', {
                                                  children: [
                                                    t('label', {
                                                      className:
                                                        'block text-sm font-medium mb-1',
                                                      htmlFor: 'email',
                                                      children: [
                                                        'Email ',
                                                        e('span', {
                                                          className:
                                                            'text-rose-500',
                                                          children: '*',
                                                        }),
                                                      ],
                                                    }),
                                                    e('input', {
                                                      id: 'email',
                                                      className:
                                                        'form-input w-full px-2 py-1',
                                                      type: 'email',
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                                t('div', {
                                                  children: [
                                                    t('label', {
                                                      className:
                                                        'block text-sm font-medium mb-1',
                                                      htmlFor: 'feedback',
                                                      children: [
                                                        'Message ',
                                                        e('span', {
                                                          className:
                                                            'text-rose-500',
                                                          children: '*',
                                                        }),
                                                      ],
                                                    }),
                                                    e('textarea', {
                                                      id: 'feedback',
                                                      className:
                                                        'form-textarea w-full px-2 py-1',
                                                      rows: '4',
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        e('div', {
                                          className:
                                            'px-5 py-4 border-t border-slate-200',
                                          children: t('div', {
                                            className:
                                              'flex flex-wrap justify-end space-x-2',
                                            children: [
                                              e('button', {
                                                className:
                                                  'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                onClick: (f) => {
                                                  f.stopPropagation(), N(!1);
                                                },
                                                children: 'Cancel',
                                              }),
                                              e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                children: 'Send',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'newsletter-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), y(!0);
                                      },
                                      children: 'Newsletter',
                                    }),
                                    t(Ie, {
                                      id: 'newsletter-modal',
                                      modalOpen: k,
                                      setModalOpen: y,
                                      children: [
                                        t('div', {
                                          className: 'mb-2 text-center',
                                          children: [
                                            e('div', {
                                              className: 'mb-3',
                                              children: t('svg', {
                                                className:
                                                  'inline-flex w-12 h-12 rounded-full shrink-0 fill-current',
                                                viewBox: '0 0 48 48',
                                                children: [
                                                  e('rect', {
                                                    className:
                                                      'text-indigo-100',
                                                    width: '48',
                                                    height: '48',
                                                    rx: '24',
                                                  }),
                                                  e('path', {
                                                    className:
                                                      'text-indigo-300',
                                                    d: 'M19 16h7a8 8 0 110 16h-7V16z',
                                                  }),
                                                  e('path', {
                                                    className: 'text-primary',
                                                    d: 'M26 24l-7-6v5h-8v2h8v5z',
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e('div', {
                                              className:
                                                'text-lg font-semibold text-slate-800',
                                              children:
                                                'Subscribe to the Newsletter!',
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className: 'text-center',
                                          children: [
                                            e('div', {
                                              className: 'text-sm mb-6',
                                              children:
                                                'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                            }),
                                            t('form', {
                                              className: 'flex max-w-sm m-auto',
                                              children: [
                                                t('div', {
                                                  className: 'grow mr-2',
                                                  children: [
                                                    e('label', {
                                                      htmlFor: 'subscribe-form',
                                                      className: 'sr-only',
                                                      children:
                                                        'Leave your Email',
                                                    }),
                                                    e('input', {
                                                      id: 'subscribe-form',
                                                      className:
                                                        'form-input w-full px-2 py-1',
                                                      type: 'email',
                                                    }),
                                                  ],
                                                }),
                                                e('button', {
                                                  type: 'submit',
                                                  className:
                                                    'btn-sm bg-primary hover:bg-indigo-600 text-white whitespace-nowrap',
                                                  children: 'Subscribe',
                                                }),
                                              ],
                                            }),
                                            e('div', {
                                              className:
                                                'text-xs text-slate-500 italic mt-3',
                                              children:
                                                'I respect your privacy. No spam. Unsubscribe at any time!',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'announcement-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), O(!0);
                                      },
                                      children: 'Announcement',
                                    }),
                                    t(Ie, {
                                      id: 'announcement-modal',
                                      modalOpen: E,
                                      setModalOpen: O,
                                      children: [
                                        t('div', {
                                          className: 'mb-2 text-center',
                                          children: [
                                            e('div', {
                                              className: 'inline-flex mb-2',
                                              children: e('img', {
                                                src: ds,
                                                width: '80',
                                                height: '80',
                                                alt: 'Announcement',
                                              }),
                                            }),
                                            e('div', {
                                              className:
                                                'text-lg font-semibold text-slate-800',
                                              children: 'You Unlocked Level 2!',
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className: 'text-center',
                                          children: [
                                            e('div', {
                                              className: 'text-sm mb-5',
                                              children:
                                                'Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum.',
                                            }),
                                            t('div', {
                                              className: 'space-y-3',
                                              children: [
                                                e('button', {
                                                  className:
                                                    'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                  children:
                                                    'Claim your Reward ->',
                                                }),
                                                e('div', {
                                                  children: e('a', {
                                                    className:
                                                      'font-medium text-sm text-primary hover:text-indigo-600',
                                                    href: '#0',
                                                    onClick: (f) => {
                                                      f.preventDefault(), O(!0);
                                                    },
                                                    children: 'Not Now!',
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'integration-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), D(!0);
                                      },
                                      children: 'Integration',
                                    }),
                                    t(Ie, {
                                      id: 'integration-modal',
                                      modalOpen: L,
                                      setModalOpen: D,
                                      children: [
                                        t('div', {
                                          className: 'mb-5 text-center',
                                          children: [
                                            t('div', {
                                              className:
                                                'inline-flex items-center justify-center space-x-3 mb-4',
                                              children: [
                                                t('svg', {
                                                  width: '48',
                                                  height: '48',
                                                  viewBox: '0 0 32 32',
                                                  children: [
                                                    t('defs', {
                                                      children: [
                                                        t('linearGradient', {
                                                          x1: '28.538%',
                                                          y1: '20.229%',
                                                          x2: '100%',
                                                          y2: '108.156%',
                                                          id: 'nl-a',
                                                          children: [
                                                            e('stop', {
                                                              stopColor:
                                                                '#A5B4FC',
                                                              stopOpacity: '0',
                                                              offset: '0%',
                                                            }),
                                                            e('stop', {
                                                              stopColor:
                                                                '#A5B4FC',
                                                              offset: '100%',
                                                            }),
                                                          ],
                                                        }),
                                                        t('linearGradient', {
                                                          x1: '88.638%',
                                                          y1: '29.267%',
                                                          x2: '22.42%',
                                                          y2: '100%',
                                                          id: 'nl-b',
                                                          children: [
                                                            e('stop', {
                                                              stopColor:
                                                                '#38BDF8',
                                                              stopOpacity: '0',
                                                              offset: '0%',
                                                            }),
                                                            e('stop', {
                                                              stopColor:
                                                                '#38BDF8',
                                                              offset: '100%',
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e('rect', {
                                                      fill: '#6366F1',
                                                      width: '32',
                                                      height: '32',
                                                      rx: '16',
                                                    }),
                                                    e('path', {
                                                      d: 'M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z',
                                                      fill: '#4F46E5',
                                                    }),
                                                    e('path', {
                                                      d: 'M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z',
                                                      fill: 'url(#nl-a)',
                                                    }),
                                                    e('path', {
                                                      d: 'M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z',
                                                      fill: 'url(#nl-b)',
                                                    }),
                                                  ],
                                                }),
                                                e('svg', {
                                                  className:
                                                    'h-4 w-4 fill-current text-slate-400',
                                                  viewBox: '0 0 16 16',
                                                  children: e('path', {
                                                    d: 'M5 3V0L0 4l5 4V5h8a1 1 0 000-2H5zM11 11H3a1 1 0 000 2h8v3l5-4-5-4v3z',
                                                  }),
                                                }),
                                                t('svg', {
                                                  width: '48',
                                                  height: '48',
                                                  viewBox: '0 0 48 48',
                                                  children: [
                                                    e('rect', {
                                                      fill: '#E0E7FF',
                                                      width: '48',
                                                      height: '48',
                                                      rx: '24',
                                                    }),
                                                    e('path', {
                                                      d: 'M34 24c0-1.38-1.126-2.5-2.515-2.5A2.507 2.507 0 0028.97 24c0 1.38 1.126 2.5 2.515 2.5A2.507 2.507 0 0034 24',
                                                      fill: '#34D399',
                                                    }),
                                                    e('path', {
                                                      d: 'M31.112 31.07a10.024 10.024 0 01-4.582 2.615c-.8.205-1.64.315-2.506.315a10.007 10.007 0 01-7.553-3.426A9.943 9.943 0 0114 24c0-2.517.932-4.816 2.471-6.574A10.007 10.007 0 0124.024 14a10.024 10.024 0 017.088 2.93l-3.544 3.535A5.003 5.003 0 0024.024 19a5.006 5.006 0 00-5.012 5l.001.13A5.007 5.007 0 0024.024 29c1.384 0 2.637-.56 3.544-1.465l3.544 3.536z',
                                                      fill: '#6366F1',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            e('div', {
                                              className:
                                                'text-lg font-semibold text-slate-800',
                                              children:
                                                'Connect Mosaic with your Cruip account',
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className: 'text-sm mb-5',
                                          children: [
                                            e('div', {
                                              className:
                                                'font-medium text-slate-800 mb-3',
                                              children: 'Mosaic would like to:',
                                            }),
                                            t('ul', {
                                              className: 'space-y-2 mb-5',
                                              children: [
                                                t('li', {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    e('svg', {
                                                      className:
                                                        'w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2',
                                                      viewBox: '0 0 12 12',
                                                      children: e('path', {
                                                        d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                                                      }),
                                                    }),
                                                    e('div', {
                                                      children:
                                                        'Lorem ipsum dolor sit amet',
                                                    }),
                                                  ],
                                                }),
                                                t('li', {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    e('svg', {
                                                      className:
                                                        'w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2',
                                                      viewBox: '0 0 12 12',
                                                      children: e('path', {
                                                        d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                                                      }),
                                                    }),
                                                    e('div', {
                                                      children:
                                                        'Semper eget duis at tellus at urna',
                                                    }),
                                                  ],
                                                }),
                                                t('li', {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    e('svg', {
                                                      className:
                                                        'w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2',
                                                      viewBox: '0 0 12 12',
                                                      children: e('path', {
                                                        d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                                                      }),
                                                    }),
                                                    e('div', {
                                                      children:
                                                        'Lorem ipsum dolor sit amet',
                                                    }),
                                                  ],
                                                }),
                                                t('li', {
                                                  className:
                                                    'flex items-center',
                                                  children: [
                                                    e('svg', {
                                                      className:
                                                        'w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2',
                                                      viewBox: '0 0 12 12',
                                                      children: e('path', {
                                                        d: 'M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z',
                                                      }),
                                                    }),
                                                    e('div', {
                                                      children:
                                                        'Suspendisse faucibus interdum',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            t('div', {
                                              className:
                                                'text-xs text-slate-500',
                                              children: [
                                                'By clicking on Allow access, you authorize Mosaic to use your information in accordance with its ',
                                                e('a', {
                                                  className:
                                                    'text-primary hover:text-indigo-600',
                                                  href: '#0',
                                                  children: 'Privacy Policy',
                                                }),
                                                '. You can stop it at any time on the integrations page of your Mosaic account.',
                                              ],
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className:
                                            'flex flex-wrap justify-end space-x-2',
                                          children: [
                                            e('button', {
                                              className:
                                                'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                              onClick: (f) => {
                                                f.stopPropagation(), D(!1);
                                              },
                                              children: 'Cancel',
                                            }),
                                            e('button', {
                                              className:
                                                'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                              children: 'Allow Access',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'news-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), S(!0);
                                      },
                                      children: "What's New",
                                    }),
                                    t($, {
                                      id: 'news-modal',
                                      modalOpen: j,
                                      setModalOpen: S,
                                      children: [
                                        t('div', {
                                          className: 'relative',
                                          children: [
                                            e('img', {
                                              className: 'w-full',
                                              src: ms,
                                              width: '460',
                                              height: '200',
                                              alt: 'New on Mosaic',
                                            }),
                                            t('button', {
                                              className:
                                                'absolute top-0 right-0 mt-5 mr-5 text-slate-50 hover:text-white',
                                              onClick: (f) => {
                                                f.stopPropagation(), S(!1);
                                              },
                                              children: [
                                                e('div', {
                                                  className: 'sr-only',
                                                  children: 'Close',
                                                }),
                                                e('svg', {
                                                  className:
                                                    'w-4 h-4 fill-current',
                                                  children: e('path', {
                                                    d: 'M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z',
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        t('div', {
                                          className: 'p-5',
                                          children: [
                                            t('div', {
                                              className: 'mb-2',
                                              children: [
                                                e('div', {
                                                  className: 'mb-3',
                                                  children: e('div', {
                                                    className:
                                                      'text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1',
                                                    children: 'New on Mosaic',
                                                  }),
                                                }),
                                                e('div', {
                                                  className:
                                                    'text-lg font-semibold text-slate-800',
                                                  children:
                                                    'Help your team work faster with X \u{1F3C3}\u200D\u2642\uFE0F',
                                                }),
                                              ],
                                            }),
                                            e('div', {
                                              className: 'text-sm mb-5',
                                              children: t('div', {
                                                className: 'space-y-2',
                                                children: [
                                                  e('p', {
                                                    children:
                                                      'You might not be aware of this fact, but every frame, digital video, canvas, responsive design, and image often has a rectangular shape that is exceptionally precise in proportion (or ratio).',
                                                  }),
                                                  e('p', {
                                                    children:
                                                      'The ratio has to be well-defined to make shapes fit into different and distinct mediums, such as computer, movies, television and camera screens.',
                                                  }),
                                                ],
                                              }),
                                            }),
                                            e('div', {
                                              className:
                                                'flex flex-wrap justify-end space-x-2',
                                              children: e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                onClick: (f) => {
                                                  f.stopPropagation(), S(!1);
                                                },
                                                children: 'Cool, I Got it',
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                t('div', {
                                  className: 'm-1.5',
                                  children: [
                                    e('button', {
                                      className:
                                        'btn bg-primary hover:bg-indigo-600 text-white',
                                      'aria-controls': 'feedback-modal',
                                      onClick: (f) => {
                                        f.stopPropagation(), g(!0);
                                      },
                                      children: 'Change your Plan',
                                    }),
                                    t(Ae, {
                                      id: 'feedback-modal',
                                      modalOpen: G,
                                      setModalOpen: g,
                                      title: 'Change your Plan',
                                      children: [
                                        e('div', {
                                          className: 'px-5 pt-4 pb-1',
                                          children: t('div', {
                                            className: 'text-sm',
                                            children: [
                                              e('div', {
                                                className: 'mb-4',
                                                children:
                                                  'Upgrade or downgrade your plan:',
                                              }),
                                              t('ul', {
                                                className: 'space-y-2 mb-4',
                                                children: [
                                                  e('li', {
                                                    children: e('button', {
                                                      className:
                                                        'w-full h-full text-left py-3 px-4 rounded bg-white border-2 border-indigo-400 shadow-sm duration-150 ease-in-out',
                                                      children: t('div', {
                                                        className:
                                                          'flex items-center',
                                                        children: [
                                                          e('div', {
                                                            className:
                                                              'w-4 h-4 border-4 border-primary rounded-full mr-3',
                                                          }),
                                                          t('div', {
                                                            className: 'grow',
                                                            children: [
                                                              t('div', {
                                                                className:
                                                                  'flex flex-wrap items-center justify-between mb-0.5',
                                                                children: [
                                                                  t('span', {
                                                                    className:
                                                                      'font-medium text-slate-800',
                                                                    children: [
                                                                      'Mosaic Light ',
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'text-xs italic text-slate-500 align-top',
                                                                          children:
                                                                            'Current Plan',
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }),
                                                                  t('span', {
                                                                    children: [
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'font-medium text-emerald-600',
                                                                          children:
                                                                            '$39.00',
                                                                        }
                                                                      ),
                                                                      '/mo',
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              e('div', {
                                                                className:
                                                                  'text-sm',
                                                                children:
                                                                  '2 MB \xB7 1 member \xB7 500 block limits',
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                  e('li', {
                                                    children: e('button', {
                                                      className:
                                                        'w-full h-full text-left py-3 px-4 rounded bg-white border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out',
                                                      children: t('div', {
                                                        className:
                                                          'flex items-center',
                                                        children: [
                                                          e('div', {
                                                            className:
                                                              'w-4 h-4 border-2 border-slate-300 rounded-full mr-3',
                                                          }),
                                                          t('div', {
                                                            className: 'grow',
                                                            children: [
                                                              t('div', {
                                                                className:
                                                                  'flex flex-wrap items-center justify-between mb-0.5',
                                                                children: [
                                                                  t('span', {
                                                                    className:
                                                                      'font-semibold text-slate-800',
                                                                    children: [
                                                                      'Mosaic Basic ',
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'text-xs italic text-primary align-top',
                                                                          children:
                                                                            'Best Value \u2728',
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }),
                                                                  t('span', {
                                                                    children: [
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'font-medium text-emerald-600',
                                                                          children:
                                                                            '$59.00',
                                                                        }
                                                                      ),
                                                                      '/mo',
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              e('div', {
                                                                className:
                                                                  'text-sm',
                                                                children:
                                                                  '5 MB \xB7 2 members \xB7 1000 block limits',
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                  e('li', {
                                                    children: e('button', {
                                                      className:
                                                        'w-full h-full text-left py-3 px-4 rounded bg-white border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out',
                                                      children: t('div', {
                                                        className:
                                                          'flex items-center',
                                                        children: [
                                                          e('div', {
                                                            className:
                                                              'w-4 h-4 border-2 border-slate-300 rounded-full mr-3',
                                                          }),
                                                          t('div', {
                                                            className: 'grow',
                                                            children: [
                                                              t('div', {
                                                                className:
                                                                  'flex flex-wrap items-center justify-between mb-0.5',
                                                                children: [
                                                                  e('span', {
                                                                    className:
                                                                      'font-semibold text-slate-800',
                                                                    children:
                                                                      'Mosaic Plus',
                                                                  }),
                                                                  t('span', {
                                                                    children: [
                                                                      e(
                                                                        'span',
                                                                        {
                                                                          className:
                                                                            'font-medium text-emerald-600',
                                                                          children:
                                                                            '$79.00',
                                                                        }
                                                                      ),
                                                                      '/mo',
                                                                    ],
                                                                  }),
                                                                ],
                                                              }),
                                                              e('div', {
                                                                className:
                                                                  'text-sm',
                                                                children:
                                                                  '10 MB \xB7 5 members \xB7 Unlimited block limits',
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              e('div', {
                                                className:
                                                  'text-xs text-slate-500',
                                                children:
                                                  'Your workspace\u2019s Mosaic Light Plan is set to $39 per month and will renew on August 9, 2021.',
                                              }),
                                            ],
                                          }),
                                        }),
                                        e('div', {
                                          className: 'px-5 py-4',
                                          children: t('div', {
                                            className:
                                              'flex flex-wrap justify-end space-x-2',
                                            children: [
                                              e('button', {
                                                className:
                                                  'btn-sm border-slate-200 hover:border-slate-300 text-slate-600',
                                                onClick: (f) => {
                                                  f.stopPropagation(), g(!1);
                                                },
                                                children: 'Cancel',
                                              }),
                                              e('button', {
                                                className:
                                                  'btn-sm bg-primary hover:bg-indigo-600 text-white',
                                                children: 'Change Plan',
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function ps() {
  const [a, s] = l.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(_, { sidebarOpen: a, setSidebarOpen: s }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(U, { sidebarOpen: a, setSidebarOpen: s }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Tabs \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Simple',
                          }),
                          e('div', {
                            className: 'mb-8 border-b border-slate-200',
                            children: t('ul', {
                              className:
                                'text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar',
                              children: [
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className: 'text-primary whitespace-nowrap',
                                    href: '#0',
                                    children: 'Account',
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                    href: '#0',
                                    children: 'Notifications',
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                    href: '#0',
                                    children: 'Integrations',
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                    href: '#0',
                                    children: 'Plans',
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: e('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                    href: '#0',
                                    children: 'Billing',
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Underline',
                          }),
                          t('div', {
                            className: 'relative mb-8',
                            children: [
                              e('div', {
                                className:
                                  'absolute bottom-0 w-full h-px bg-slate-200',
                                'aria-hidden': 'true',
                              }),
                              t('ul', {
                                className:
                                  'relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar',
                                children: [
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-primary whitespace-nowrap border-b-2 border-primary',
                                      href: '#0',
                                      children: 'Account',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                      href: '#0',
                                      children: 'Notifications',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                      href: '#0',
                                      children: 'Integrations',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                      href: '#0',
                                      children: 'Plans',
                                    }),
                                  }),
                                  e('li', {
                                    className:
                                      'mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                    children: e('a', {
                                      className:
                                        'block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap',
                                      href: '#0',
                                      children: 'Billing',
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Icons',
                          }),
                          e('div', {
                            className: 'mb-8 border-b border-slate-200',
                            children: t('ul', {
                              className:
                                'text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar',
                              children: [
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-primary whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z',
                                        }),
                                      }),
                                      e('span', { children: 'Account' }),
                                    ],
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8zM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1z',
                                        }),
                                      }),
                                      e('span', { children: 'Notifications' }),
                                    ],
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z',
                                        }),
                                      }),
                                      e('span', { children: 'Integrations' }),
                                    ],
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z',
                                        }),
                                      }),
                                      e('span', { children: 'Plans' }),
                                    ],
                                  }),
                                }),
                                e('li', {
                                  className:
                                    'pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8',
                                  children: t('a', {
                                    className:
                                      'text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center',
                                    href: '#0',
                                    children: [
                                      e('svg', {
                                        className:
                                          'w-4 h-4 shrink-0 fill-current text-slate-400 mr-2',
                                        viewBox: ' 0 0 16 16',
                                        children: e('path', {
                                          d: 'M15 4c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h7c.6 0 1 .4 1 1v3h4zM2 3v1h7V2H3c-.6 0-1 .4-1 1zm12 11V6H2v7c0 .6.4 1 1 1h11zm-3-5h2v2h-2V9z',
                                        }),
                                      }),
                                      e('span', { children: 'Billing' }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'With Container',
                          }),
                          t('ul', {
                            className: 'flex flex-wrap -m-1',
                            children: [
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-primary text-white duration-150 ease-in-out',
                                  children: 'Account',
                                }),
                              }),
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out',
                                  children: 'Notifications',
                                }),
                              }),
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out',
                                  children: 'Integrations',
                                }),
                              }),
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out',
                                  children: 'Plans',
                                }),
                              }),
                              e('li', {
                                className: 'm-1',
                                children: e('button', {
                                  className:
                                    'inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out',
                                  children: 'Billing',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function us() {
  const [a, s] = l.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(_, { sidebarOpen: a, setSidebarOpen: s }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(U, { sidebarOpen: a, setSidebarOpen: s }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Badge \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic Small',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Working on',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-sky-100 text-sky-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Exciting news',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Product',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-amber-100 text-amber-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Announcement',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Bug Fix',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Customer Stories',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-1',
                                  children: 'All Stories',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-xs inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1',
                                  children: 'All Stories',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic Large',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Working on',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-sky-100 text-sky-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Exciting news',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Product',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-amber-100 text-amber-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Announcement',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Bug Fix',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1',
                                  children: 'Customer Stories',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-1',
                                  children: 'All Stories',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1',
                                  children: 'All Stories',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic with Icon',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: t('div', {
                                  className:
                                    'inline-flex items-center text-xs font-medium text-slate-100 bg-slate-700 rounded-full text-center px-2 py-0.5',
                                  children: [
                                    e('svg', {
                                      className:
                                        'w-3 h-3 shrink-0 fill-current text-amber-500 mr-1',
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z',
                                      }),
                                    }),
                                    e('span', { children: 'Special Offer' }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: t('div', {
                                  className:
                                    'inline-flex items-center text-sm font-medium text-slate-100 bg-slate-700 rounded-full text-center px-2 py-0.5',
                                  children: [
                                    e('svg', {
                                      className:
                                        'w-3 h-3 shrink-0 fill-current text-amber-500 mr-1',
                                      viewBox: '0 0 12 12',
                                      children: e('path', {
                                        d: 'M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z',
                                      }),
                                    }),
                                    e('span', { children: 'Special Offer' }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Basic for Charts',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-1.5',
                            children: [
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full',
                                  children: '+29%',
                                }),
                              }),
                              e('div', {
                                className: 'm-1.5',
                                children: e('div', {
                                  className:
                                    'text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full',
                                  children: '-14%',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function xs() {
  const [a, s] = l.exports.useState(!1);
  return t('div', {
    className: 'flex h-screen overflow-hidden',
    children: [
      e(_, { sidebarOpen: a, setSidebarOpen: s }),
      t('div', {
        className:
          'relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white',
        children: [
          e(U, { sidebarOpen: a, setSidebarOpen: s }),
          e('main', {
            children: t('div', {
              className: 'px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto',
              children: [
                e('div', {
                  className: 'mb-8',
                  children: e('h1', {
                    className: 'text-2xl md:text-3xl text-slate-800 font-bold',
                    children: 'Tooltip \u2728',
                  }),
                }),
                e('div', {
                  className: 'border-t border-slate-200',
                  children: t('div', {
                    className: 'space-y-8 mt-8',
                    children: [
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Tooltip Types',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-4',
                            children: [
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Label White',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      bg: 'dark',
                                      children: e('div', {
                                        className:
                                          'text-xs text-slate-200 whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Label Dark',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      size: 'md',
                                      children: e('div', {
                                        className: 'text-xs',
                                        children:
                                          'Excepteur sint occaecat cupidata non proident, sunt in.',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Basic White',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      size: 'md',
                                      bg: 'dark',
                                      children: e('div', {
                                        className: 'text-xs text-slate-200',
                                        children:
                                          'Excepteur sint occaecat cupidata non proident, sunt in.',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Basic Dark',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      size: 'lg',
                                      children: e('div', {
                                        className:
                                          'text-sm font-medium text-slate-500',
                                        children:
                                          'Excepteur sint occaecat cupidata non proident, sunt in.',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Large White',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      size: 'lg',
                                      bg: 'dark',
                                      children: e('div', {
                                        className:
                                          'text-sm font-medium text-slate-200',
                                        children:
                                          'Excepteur sint occaecat cupidata non proident, sunt in.',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Large Dark',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      size: 'lg',
                                      children: t('div', {
                                        className: 'text-xs',
                                        children: [
                                          e('div', {
                                            className:
                                              'font-medium text-slate-800 mb-0.5',
                                            children:
                                              'Let\u2019s Talk Paragraph',
                                          }),
                                          e('div', {
                                            children:
                                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          }),
                                        ],
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Rich White',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      size: 'lg',
                                      bg: 'dark',
                                      children: t('div', {
                                        className: 'text-xs',
                                        children: [
                                          e('div', {
                                            className:
                                              'font-medium text-slate-200 mb-0.5',
                                            children:
                                              'Let\u2019s Talk Paragraph',
                                          }),
                                          e('div', {
                                            className: 'text-slate-400',
                                            children:
                                              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                          }),
                                        ],
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Rich Dark',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      t('div', {
                        children: [
                          e('h2', {
                            className: 'text-2xl text-slate-800 font-bold mb-6',
                            children: 'Tooltip Position',
                          }),
                          t('div', {
                            className: 'flex flex-wrap items-center -m-4',
                            children: [
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Top',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      position: 'bottom',
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Bottom',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      position: 'left',
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Left',
                                    }),
                                  ],
                                }),
                              }),
                              e('div', {
                                className: 'm-4',
                                children: t('div', {
                                  className: 'flex items-center space-x-2',
                                  children: [
                                    e(W, {
                                      position: 'right',
                                      children: e('div', {
                                        className: 'text-xs whitespace-nowrap',
                                        children: 'Just a tip',
                                      }),
                                    }),
                                    e('div', {
                                      className:
                                        'text-sm font-medium text-slate-500',
                                      children: 'Right',
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function fs() {
  const a = De();
  return (
    l.exports.useEffect(() => {
      (document.querySelector('html').style.scrollBehavior = 'auto'),
        window.scroll({ top: 0 }),
        (document.querySelector('html').style.scrollBehavior = '');
    }, [a.pathname]),
    e($t, {
      children: t(Kt, {
        children: [
          e(I, { path: '/signin', element: e(qe, { children: e(ha, {}) }) }),
          e(I, {
            path: '/code/generator',
            element: e(qe, { children: e(fa, {}) }),
          }),
          e(I, {
            exact: !0,
            path: '/code/validation',
            element: e(ea, { children: e(ba, {}) }),
          }),
          e(I, { path: '/signup', element: e(ta, { children: e(ua, {}) }) }),
          e(I, {
            path: '/reset-password',
            element: e(qe, { children: e(xa, {}) }),
          }),
          e(I, { path: '/multiStep', element: e(We, { children: e(va, {}) }) }),
          e(I, {
            path: '/multiStep/end',
            element: e(We, { children: e(ga, {}) }),
          }),
          e(I, {
            exact: !0,
            path: '/',
            element: e(te, { children: e(oa, {}) }),
          }),
          e(I, {
            exact: !0,
            path: '/products/create',
            element: e(te, { children: e(La, {}) }),
          }),
          e(I, {
            exact: !0,
            path: '/products/list',
            element: e(te, { children: e(za, {}) }),
          }),
          e(I, {
            exact: !0,
            path: '/plant/create',
            element: e(te, { children: e(Va, {}) }),
          }),
          e(I, {
            exact: !0,
            path: '/plant/list',
            element: e(te, { children: e(Ia, {}) }),
          }),
          e(I, {
            exact: !0,
            path: '/plant/update/:id',
            element: e(te, { children: e(Ra, {}) }),
          }),
          e(I, {
            exact: !0,
            path: '/company/profile',
            element: e(te, { children: e(Ka, {}) }),
          }),
          e(I, { path: '/component/form', element: e(Qa, {}) }),
          e(I, { path: '/component/dropdown', element: e(ns, {}) }),
          e(I, { path: '/component/alert', element: e(cs, {}) }),
          e(I, { path: '/component/modal', element: e(hs, {}) }),
          e(I, { path: '/component/tabs', element: e(ps, {}) }),
          e(I, { path: '/component/badge', element: e(us, {}) }),
          e(I, { path: '/component/tooltip', element: e(xs, {}) }),
          e(I, { path: '*', element: e(ma, {}) }),
        ],
      }),
    })
  );
}
Qt.render(
  e(ee.StrictMode, { children: e(Yt, { children: e(fs, {}) }) }),
  document.getElementById('root')
);
