var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { r as react, u as useNavigate, j as jsxDevRuntime, a as resolveConfig_1, C as Chart, p as plugin_tooltip, N as Navigate, b as useLocation, c as NavLink, R as React, d as ReactCSSTransition, L as Link, e as LineController, f as LineElement, g as plugin_filler, P as PointElement, h as LinearScale, T as TimeScale, i as PolarAreaController, k as RadialLinearScale, l as plugin_legend, m as useForm, n as Controller, o as lib, q as useDropzone, s as lib$1, t as mapboxgl, v as useControl, M as Map, w as Marker, x as NavigationControl, G as GeolocateControl, y as useParams, F as Flatpickr, z as Routes, A as Route, B as ReactDOM, D as BrowserRouter } from "./vendor.783f3589.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const StateContext = react.exports.createContext();
var _jsxFileName$1b = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/context/StateProvider.jsx";
const StateProvider = ({
  children
}) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  const [loading, setLoading] = react.exports.useState(false);
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const [formatInvalid, setFormatInvalid] = react.exports.useState(false);
  const [sizeInvalid, setSizeInvalid] = react.exports.useState(false);
  const [bannerErrorOpen, setBannerErrorOpen] = react.exports.useState(false);
  const [bannerSuccessOpen, setBannerSuccessOpen] = react.exports.useState(false);
  const [eye, setEye] = react.exports.useState(false);
  const [newsletterModalOpen, setNewsletterModalOpen] = react.exports.useState(false);
  const [dangerModalOpen, setDangerModalOpen] = react.exports.useState(false);
  const [errorMenssage, setErrorMenssage] = react.exports.useState(false);
  const [errorApi, setErrorApi] = react.exports.useState(false);
  const [savedCode, setSavedCode] = react.exports.useState([]);
  const [productReload, setProductReload] = react.exports.useState(false);
  const [plantReload, setPlantReload] = react.exports.useState(false);
  const [productList, setProductList] = react.exports.useState([]);
  const [country, setCountry] = react.exports.useState([]);
  const [countryId, setCountryId] = react.exports.useState("");
  const [state, setState] = react.exports.useState([]);
  const [stateId, setStateId] = react.exports.useState("");
  const [city, setCity] = react.exports.useState([]);
  const [stateEnable, setStateEnable] = react.exports.useState(true);
  const [cityEnable, setCityEnable] = react.exports.useState(true);
  const [placeList, setPlaceList] = react.exports.useState([]);
  const [plantList, setPlantList] = react.exports.useState([]);
  const [requiredFile, setRequiredFile] = react.exports.useState(false);
  const [lng, setLng] = react.exports.useState(null);
  const [lat, setLat] = react.exports.useState(null);
  const [mapAddress, setMapAddress] = react.exports.useState(null);
  const toggleEye = (prevState) => {
    setEye((prevState2) => !prevState2);
  };
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("code");
    localStorage.removeItem("msg");
    navigate("/signin");
  }
  const supplierId = localStorage.getItem("supplier_id");
  async function codeGenerator(phone) {
    return fetch("http://supplier.hubmine.mx/api/auth/send_register/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(phone)
    }).then((response) => response.json()).then((json) => {
      if (json.code) {
        setSavedCode(json);
        let result = json;
        sessionStorage.setItem("code", result.code);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/code/validation");
        }, 1500);
      } else {
        setErrorApi(true);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setErrorApi(false);
        }, 5e3);
      }
    });
  }
  const getProductList = async () => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/product/list?supplier-id=${supplierId}`).then((response) => response.json()).then((json) => {
      setProductList(json);
    });
    setProductReload(false);
  };
  react.exports.useEffect(() => {
    getProductList();
  }, [productReload, supplierId]);
  const handleCountry = (event) => {
    const getCountryId = event.target.value;
    return setCountryId(getCountryId);
  };
  const handleState = (event) => {
    const getStateId = event.target.value;
    return setStateId(getStateId);
  };
  const getCountry = async () => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/list-countries`).then((response) => response.json()).then((json) => setCountry(json));
  };
  react.exports.useEffect(() => {
    getCountry();
  }, []);
  const getState = async () => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/list-states?country-id=${countryId}`).then((response) => response.json()).then((json) => {
      setState(json);
      setStateEnable(false);
    });
  };
  react.exports.useEffect(() => {
    getState();
  }, [countryId, stateEnable]);
  const getCity = async () => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/list-cities?state-id=${stateId}`).then((response) => response.json()).then((json) => {
      setCity(json);
      setCityEnable(false);
    });
  };
  react.exports.useEffect(() => {
    getCity();
  }, [stateId, cityEnable]);
  const getPlaceList = async () => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/plant/list/type-places/`).then((response) => response.json()).then((json) => setPlaceList(json));
  };
  react.exports.useEffect(() => {
    getPlaceList();
  }, []);
  const getPlantList = async () => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/plant/list?supplier-id=${supplierId}`).then((response) => response.json()).then((json) => setPlantList(json));
    setPlantReload(false);
  };
  react.exports.useEffect(() => {
    getPlantList();
  }, [plantReload, supplierId]);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(StateContext.Provider, {
    value: {
      loading,
      setLoading,
      eye,
      setEye,
      toggleEye,
      newsletterModalOpen,
      setNewsletterModalOpen,
      errorMenssage,
      setErrorMenssage,
      logout,
      savedCode,
      setSavedCode,
      codeGenerator,
      errorApi,
      setErrorApi,
      sidebarOpen,
      setSidebarOpen,
      formatInvalid,
      setFormatInvalid,
      sizeInvalid,
      setSizeInvalid,
      bannerErrorOpen,
      setBannerErrorOpen,
      bannerSuccessOpen,
      setBannerSuccessOpen,
      dangerModalOpen,
      setDangerModalOpen,
      productReload,
      setProductReload,
      plantReload,
      setPlantReload,
      productList,
      country,
      handleCountry,
      state,
      handleState,
      city,
      stateEnable,
      setStateEnable,
      cityEnable,
      setCityEnable,
      placeList,
      supplierId,
      plantList,
      dropdownOpen,
      setDropdownOpen,
      requiredFile,
      setRequiredFile,
      lng,
      setLng,
      lat,
      setLat,
      mapAddress,
      setMapAddress
    },
    children
  }, void 0, false, {
    fileName: _jsxFileName$1b,
    lineNumber: 229,
    columnNumber: 5
  }, globalThis);
};
var style$1 = "";
const tailwindConfig = () => {
  return resolveConfig_1("./src/css/tailwind.config.js");
};
const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};
const formatThousands = (value) => Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
  notation: "compact"
}).format(value);
Chart.register(plugin_tooltip);
Chart.defaults.font.family = '"Inter", sans-serif';
Chart.defaults.font.weight = "500";
Chart.defaults.color = tailwindConfig().theme.colors.slate[400];
Chart.defaults.scale.grid.color = tailwindConfig().theme.colors.slate[100];
Chart.defaults.plugins.tooltip.titleColor = tailwindConfig().theme.colors.slate[800];
Chart.defaults.plugins.tooltip.bodyColor = tailwindConfig().theme.colors.slate[800];
Chart.defaults.plugins.tooltip.backgroundColor = tailwindConfig().theme.colors.white;
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.borderColor = tailwindConfig().theme.colors.slate[200];
Chart.defaults.plugins.tooltip.displayColors = false;
Chart.defaults.plugins.tooltip.mode = "nearest";
Chart.defaults.plugins.tooltip.intersect = false;
Chart.defaults.plugins.tooltip.position = "nearest";
Chart.defaults.plugins.tooltip.caretSize = 0;
Chart.defaults.plugins.tooltip.caretPadding = 20;
Chart.defaults.plugins.tooltip.cornerRadius = 4;
Chart.defaults.plugins.tooltip.padding = 8;
Chart.register({
  id: "chartAreaPlugin",
  beforeDraw: (chart) => {
    if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
      const ctx = chart.canvas.getContext("2d");
      const {
        chartArea
      } = chart;
      ctx.save();
      ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
      ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      ctx.restore();
    }
  }
});
var _jsxFileName$1a = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/routes/PrivateRoute.jsx";
function PrivateRoute({
  children
}) {
  const token = localStorage.getItem("token");
  if (!token) {
    return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Navigate, {
      to: "/signin"
    }, void 0, false, {
      fileName: _jsxFileName$1a,
      lineNumber: 8,
      columnNumber: 12
    }, this);
  }
  return children;
}
var _jsxFileName$19 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/routes/PublicRoute.jsx";
function PublicRoute({
  children
}) {
  const token = localStorage.getItem("token");
  if (token) {
    return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Navigate, {
      to: "/"
    }, void 0, false, {
      fileName: _jsxFileName$19,
      lineNumber: 8,
      columnNumber: 12
    }, this);
  }
  return children;
}
var _jsxFileName$18 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/routes/PrivateCodeValidation.jsx";
function PrivateCodeValidation({
  children
}) {
  let code = sessionStorage.getItem("code");
  if (!code) {
    return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Navigate, {
      to: "/signin"
    }, void 0, false, {
      fileName: _jsxFileName$18,
      lineNumber: 8,
      columnNumber: 12
    }, this);
  }
  return children;
}
var _jsxFileName$17 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/routes/PrivateMultistepForm.jsx";
const PrivateMultistepForm = ({
  children
}) => {
  let id = sessionStorage.getItem("id");
  if (!id) {
    return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Navigate, {
      to: "/signin"
    }, void 0, false, {
      fileName: _jsxFileName$17,
      lineNumber: 8,
      columnNumber: 12
    }, globalThis);
  }
  return children;
};
var _jsxFileName$16 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/routes/PrivateSignup.jsx";
const PrivateSignup = ({
  children
}) => {
  let number = sessionStorage.getItem("number");
  if (!number) {
    return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Navigate, {
      to: "/signin"
    }, void 0, false, {
      fileName: _jsxFileName$16,
      lineNumber: 8,
      columnNumber: 12
    }, globalThis);
  }
  return children;
};
var _jsxFileName$15 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/SidebarLinkGroup.jsx";
function SidebarLinkGroup({
  children,
  activecondition
}) {
  const [open, setOpen] = react.exports.useState(activecondition);
  const handleClick = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
    className: `px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && "bg-slate-900"}`,
    children: children(handleClick, open)
  }, void 0, false, {
    fileName: _jsxFileName$15,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var _jsxFileName$14 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/Sidebar.jsx";
function Sidebar({
  sidebarOpen,
  setSidebarOpen
}) {
  const location = useLocation();
  const {
    pathname
  } = location;
  const trigger = react.exports.useRef(null);
  const sidebar = react.exports.useRef(null);
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = react.exports.useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === "true");
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!sidebar.current || !trigger.current)
        return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target))
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!sidebarOpen || keyCode !== 27)
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  react.exports.useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: `fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`,
      "aria-hidden": "true"
    }, void 0, false, {
      fileName: _jsxFileName$14,
      lineNumber: 55,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      id: "sidebar",
      ref: sidebar,
      className: `flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "flex justify-between mb-10 pr-3 sm:px-2",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
          ref: trigger,
          className: "lg:hidden text-slate-500 hover:text-slate-400",
          onClick: () => setSidebarOpen(!sidebarOpen),
          "aria-controls": "sidebar",
          "aria-expanded": sidebarOpen,
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
            className: "sr-only",
            children: "Close sidebar"
          }, void 0, false, {
            fileName: _jsxFileName$14,
            lineNumber: 77,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            className: "w-6 h-6 fill-current",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 82,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$14,
            lineNumber: 78,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$14,
          lineNumber: 71,
          columnNumber: 11
        }, this), sidebarExpanded ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
          end: true,
          to: "/",
          className: "block",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            width: "143",
            height: "32",
            viewBox: "0 0 143 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M26.5922 32H5.47462C2.4507 32 0 29.5542 0 26.5363V5.46368C0 2.44581 2.4507 0 5.47462 0H26.5894C29.6134 0 32.0641 2.44581 32.0641 5.46368V26.5363C32.0641 29.5542 29.6134 32 26.5922 32Z",
              fill: "#0DB1AC"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 95,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M24.4351 22.2469H14.2003C12.3865 22.2469 11.2566 20.3538 12.1732 18.8476L17.2906 10.4352C18.1962 8.94558 20.4364 8.94558 21.3447 10.4352L26.4621 18.8476C27.3787 20.3538 26.2489 22.2469 24.4351 22.2469Z",
              fill: "white"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 99,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M17.4347 22.5951H7.54878C5.79867 22.5951 4.70762 20.7656 5.59098 19.3119L10.5339 11.1896C11.409 9.74979 13.5717 9.74979 14.4467 11.1896L19.3897 19.3119C20.2758 20.7684 19.1848 22.5951 17.4347 22.5951Z",
              fill: "#D8F6F0"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 103,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M39.8646 25.0601V7.77038H43.5201V14.9041H50.9408V7.77038H54.5879V25.0601H50.9408V17.9179H43.5201V25.0601H39.8646ZM65.8498 19.5388V12.0928H69.4462V25.0601H65.9934V22.7046H65.8583C65.5656 23.4645 65.0788 24.0752 64.3978 24.5366C63.7224 24.9981 62.8978 25.2288 61.9242 25.2288C61.0574 25.2288 60.2948 25.0319 59.6364 24.6379C58.9779 24.244 58.4629 23.684 58.0914 22.958C57.7255 22.2319 57.5398 21.3624 57.5342 20.3492V12.0928H61.1305V19.7076C61.1362 20.4731 61.3416 21.0781 61.7469 21.5227C62.1521 21.9674 62.6952 22.1897 63.3762 22.1897C63.8097 22.1897 64.2149 22.0912 64.5919 21.8942C64.969 21.6916 65.2729 21.3933 65.5036 20.9993C65.7401 20.6053 65.8555 20.1185 65.8498 19.5388ZM72.3904 25.0601V7.77038H75.9868V14.2709H76.0965C76.2542 13.922 76.482 13.5674 76.7804 13.2072C77.0843 12.8414 77.4783 12.5375 77.9623 12.2954C78.4519 12.0477 79.0598 11.924 79.7859 11.924C80.7314 11.924 81.6037 12.1716 82.4029 12.6669C83.2021 13.1565 83.8409 13.8966 84.3193 14.8872C84.7977 15.8721 85.0369 17.1075 85.0369 18.5933C85.0369 20.0398 84.8034 21.2611 84.3362 22.2572C83.8747 23.2477 83.2444 23.9991 82.4452 24.5113C81.6515 25.0178 80.7623 25.2711 79.7774 25.2711C79.0795 25.2711 78.4857 25.1557 77.9961 24.9249C77.5121 24.6942 77.1153 24.4044 76.8057 24.0554C76.4962 23.7009 76.2598 23.3435 76.0965 22.9833H75.9362V25.0601H72.3904ZM75.9108 18.5764C75.9108 19.3475 76.0178 20.02 76.2316 20.5941C76.4454 21.1682 76.755 21.6156 77.1602 21.9364C77.5656 22.2516 78.0579 22.4092 78.6377 22.4092C79.223 22.4092 79.7182 22.2487 80.1236 21.9281C80.5288 21.6016 80.8355 21.1513 81.0437 20.5772C81.2576 19.9975 81.3645 19.3305 81.3645 18.5764C81.3645 17.8278 81.2603 17.1694 81.0522 16.601C80.8439 16.0325 80.5372 15.5878 80.1319 15.267C79.7267 14.9462 79.2286 14.7859 78.6377 14.7859C78.0524 14.7859 77.5571 14.9407 77.1519 15.2501C76.7523 15.5597 76.4454 15.9987 76.2316 16.5672C76.0178 17.1356 75.9108 17.8054 75.9108 18.5764Z",
              fill: "white"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 107,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M87.4367 25.0601V12.0928H90.8642V14.3807H91.0162C91.2863 13.6209 91.7365 13.0214 92.3669 12.5825C92.9973 12.1435 93.7515 11.924 94.6295 11.924C95.5188 11.924 96.2757 12.1463 96.9004 12.5908C97.5252 13.0298 97.9416 13.6264 98.1499 14.3807H98.2849C98.5494 13.6378 99.0278 13.044 99.7202 12.5993C100.418 12.149 101.243 11.924 102.194 11.924C103.404 11.924 104.386 12.3095 105.14 13.0806C105.9 13.8459 106.28 14.9322 106.28 16.3392V25.0601H102.692V17.0483C102.692 16.328 102.5 15.7877 102.118 15.4275C101.735 15.0672 101.257 14.8872 100.683 14.8872C100.03 14.8872 99.5203 15.0955 99.1545 15.5119C98.7886 15.9228 98.6057 16.4659 98.6057 17.1413V25.0601H95.1191V16.9724C95.1191 16.3365 94.9362 15.8299 94.5703 15.4529C94.2102 15.0757 93.7346 14.8872 93.1437 14.8872C92.744 14.8872 92.3838 14.9885 92.063 15.1911C91.7479 15.388 91.4974 15.6667 91.3117 16.0269C91.126 16.3815 91.0331 16.7979 91.0331 17.2763V25.0601H87.4367ZM109.121 25.0601V12.0928H112.717V25.0601H109.121ZM110.927 10.4213C110.393 10.4213 109.934 10.244 109.551 9.88939C109.174 9.52923 108.986 9.09866 108.986 8.59771C108.986 8.10243 109.174 7.67755 109.551 7.32293C109.934 6.96276 110.393 6.78261 110.927 6.78261C111.462 6.78261 111.918 6.96276 112.295 7.32293C112.678 7.67755 112.869 8.10243 112.869 8.59771C112.869 9.09866 112.678 9.52923 112.295 9.88939C111.918 10.244 111.462 10.4213 110.927 10.4213ZM119.194 17.5634V25.0601H115.598V12.0928H119.025V14.3807H119.177C119.464 13.6264 119.946 13.0298 120.621 12.5908C121.296 12.1463 122.115 11.924 123.078 11.924C123.978 11.924 124.763 12.1209 125.433 12.5149C126.103 12.9089 126.623 13.4718 126.995 14.2033C127.366 14.9293 127.552 15.7961 127.552 16.8036V25.0601H123.956V17.4452C123.961 16.6516 123.759 16.0325 123.348 15.5879C122.937 15.1376 122.371 14.9126 121.651 14.9126C121.167 14.9126 120.739 15.0166 120.368 15.2249C120.002 15.4331 119.715 15.7371 119.507 16.1366C119.304 16.5306 119.2 17.0062 119.194 17.5634ZM136.296 25.3134C134.962 25.3134 133.814 25.0432 132.852 24.5029C131.895 23.957 131.158 23.1859 130.64 22.1897C130.122 21.1879 129.863 20.0032 129.863 18.6356C129.863 17.3016 130.122 16.1309 130.64 15.1236C131.158 14.1162 131.886 13.331 132.826 12.7682C133.772 12.2053 134.881 11.924 136.153 11.924C137.008 11.924 137.804 12.0619 138.542 12.3376C139.285 12.6077 139.932 13.0158 140.483 13.5617C141.041 14.1077 141.474 14.7944 141.784 15.6217C142.093 16.4434 142.248 17.4057 142.248 18.5089V19.4966L133.417 19.505V17.2678H138.863C138.863 16.7501 138.75 16.2914 138.525 15.8918C138.3 15.4922 137.987 15.1799 137.588 14.9547C137.194 14.724 136.735 14.6085 136.212 14.6085C135.666 14.6085 135.182 14.7352 134.76 14.9885C134.343 15.2361 134.017 15.5709 133.78 15.9931C133.544 16.4096 133.423 16.7557 133.417 17.2678V19.505C133.417 20.1467 133.535 20.7011 133.772 21.1682C134.014 21.6354 134.354 21.9956 134.793 22.2487C135.232 22.5021 135.753 22.6287 136.355 22.6287C136.755 22.6287 137.121 22.5725 137.453 22.4598C137.785 22.3473 138.069 22.1785 138.305 21.9533C138.542 21.7282 138.722 21.4525 138.846 21.126L142.172 21.3455C142.003 22.1447 141.657 22.8425 141.134 23.4391C140.616 24.0302 139.946 24.4916 139.124 24.8237C138.308 25.1501 137.365 25.3134 136.296 25.3134Z",
              fill: "white"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 111,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$14,
            lineNumber: 89,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$14,
          lineNumber: 88,
          columnNumber: 13
        }, this) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
          end: true,
          to: "/",
          className: "block",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            width: "33",
            height: "32",
            viewBox: "0 0 33 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M26.5922 32H5.47462C2.4507 32 0 29.5542 0 26.5363V5.46368C0 2.44581 2.4507 0 5.47462 0H26.5894C29.6134 0 32.0641 2.44581 32.0641 5.46368V26.5363C32.0641 29.5542 29.6134 32 26.5922 32Z",
              fill: "#0DB1AC"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 125,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M24.4351 22.2469H14.2003C12.3865 22.2469 11.2566 20.3538 12.1732 18.8476L17.2906 10.4352C18.1962 8.94558 20.4364 8.94558 21.3447 10.4352L26.4621 18.8476C27.3787 20.3538 26.2489 22.2469 24.4351 22.2469Z",
              fill: "white"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 129,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M17.4347 22.5951H7.54878C5.79867 22.5951 4.70762 20.7656 5.59098 19.3119L10.5339 11.1896C11.409 9.74979 13.5717 9.74979 14.4467 11.1896L19.3897 19.3119C20.2758 20.7684 19.1848 22.5951 17.4347 22.5951Z",
              fill: "#D8F6F0"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 133,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$14,
            lineNumber: 119,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$14,
          lineNumber: 118,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$14,
        lineNumber: 69,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-8",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
            className: "mt-3",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(SidebarLinkGroup, {
              activecondition: pathname === "/" || pathname.includes("dashboard"),
              children: (handleClick, open) => {
                return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(React.Fragment, {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                    href: "#0",
                    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${(pathname === "/" || pathname.includes("dashboard")) && "hover:text-slate-200"}`,
                    onClick: (e) => {
                      e.preventDefault();
                      sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                    },
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center justify-between",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "shrink-0 h-6 w-6",
                          viewBox: "0 0 24 24",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            className: `fill-current text-slate-400 ${(pathname === "/" || pathname.includes("dashboard")) && "!text-primary"}`,
                            d: "M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 173,
                            columnNumber: 31
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            className: `fill-current text-slate-600 ${(pathname === "/" || pathname.includes("dashboard")) && "text-secondary"}`,
                            d: "M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 181,
                            columnNumber: 31
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            className: `fill-current text-slate-400 ${(pathname === "/" || pathname.includes("dashboard")) && "text-white"}`,
                            d: "M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 189,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$14,
                          lineNumber: 170,
                          columnNumber: 29
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                          children: "Dashboard"
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 198,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$14,
                        lineNumber: 169,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex shrink-0 ml-2",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
                          viewBox: "0 0 12 12",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 209,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 204,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 203,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$14,
                      lineNumber: 168,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 155,
                    columnNumber: 23
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "lg:hidden lg:sidebar-expanded:block 2xl:block",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                      className: `pl-9 mt-1 ${!open && "hidden"}`,
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                        className: "mb-1 last:mb-0",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
                          end: true,
                          to: "/",
                          className: ({
                            isActive
                          }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-primary" : ""),
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                            children: "General"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 224,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 217,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 216,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$14,
                      lineNumber: 215,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 214,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$14,
                  lineNumber: 154,
                  columnNumber: 21
                }, this);
              }
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 148,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(SidebarLinkGroup, {
              activecondition: pathname.includes("product"),
              children: (handleClick, open) => {
                return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(React.Fragment, {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                    href: "#0",
                    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("product") && "hover:text-slate-200"}`,
                    onClick: (e) => {
                      e.preventDefault();
                      sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                    },
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center justify-between",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "shrink-0 h-6 w-6",
                          viewBox: "0 0 24 24",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            className: `fill-current text-slate-400 ${pathname.includes("product") && "text-slate-400"}`,
                            d: "M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 257,
                            columnNumber: 31
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            className: `fill-current text-slate-700 ${pathname.includes("product") && "!text-secondary"}`,
                            d: "M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 264,
                            columnNumber: 31
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            className: `fill-current text-slate-600 ${pathname.includes("product") && "text-primary"}`,
                            d: "M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 271,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$14,
                          lineNumber: 254,
                          columnNumber: 29
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                          children: "Productos"
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 278,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$14,
                        lineNumber: 253,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex shrink-0 ml-2",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
                          viewBox: "0 0 12 12",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 289,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 284,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 283,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$14,
                      lineNumber: 252,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 241,
                    columnNumber: 23
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "lg:hidden lg:sidebar-expanded:block 2xl:block",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                      className: `pl-9 mt-1 ${!open && "hidden"}`,
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                        className: "mb-1 last:mb-0",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
                          end: true,
                          to: "/products/create",
                          className: ({
                            isActive
                          }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-primary" : ""),
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                            children: "Crear Productos"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 304,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 297,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 296,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                        className: "mb-1 last:mb-0",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
                          end: true,
                          to: "/products/list",
                          className: ({
                            isActive
                          }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-primary" : ""),
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                            children: "Lista de productos"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 317,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 310,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 309,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$14,
                      lineNumber: 295,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 294,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$14,
                  lineNumber: 240,
                  columnNumber: 21
                }, this);
              }
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 237,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(SidebarLinkGroup, {
              activecondition: pathname.includes("plant"),
              children: (handleClick, open) => {
                return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(React.Fragment, {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                    href: "#0",
                    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("plant") && "hover:text-slate-200"}`,
                    onClick: (e) => {
                      e.preventDefault();
                      sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                    },
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center justify-between",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "shrink-0 h-6 w-6",
                          viewBox: "0 0 24 24",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("circle", {
                            className: `fill-current text-slate-400 ${pathname.includes("plant") && "text-secondary"}`,
                            cx: "18.5",
                            cy: "5.5",
                            r: "4.5"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 349,
                            columnNumber: 31
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("circle", {
                            className: `fill-current text-slate-600 ${pathname.includes("plant") && "text-primary"}`,
                            cx: "5.5",
                            cy: "5.5",
                            r: "4.5"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 357,
                            columnNumber: 31
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("circle", {
                            className: `fill-current text-slate-600 ${pathname.includes("plant") && "text-primary"}`,
                            cx: "18.5",
                            cy: "18.5",
                            r: "4.5"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 365,
                            columnNumber: 31
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("circle", {
                            className: `fill-current text-slate-400 ${pathname.includes("plant") && "text-secondary"}`,
                            cx: "5.5",
                            cy: "18.5",
                            r: "4.5"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 373,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$14,
                          lineNumber: 346,
                          columnNumber: 29
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                          children: "Planta"
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 382,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$14,
                        lineNumber: 345,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex shrink-0 ml-2",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
                          viewBox: "0 0 12 12",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 393,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 388,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 387,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$14,
                      lineNumber: 344,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 333,
                    columnNumber: 23
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "lg:hidden lg:sidebar-expanded:block 2xl:block",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                      className: `pl-9 mt-1 ${!open && "hidden"}`,
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                        className: "mb-1 last:mb-0",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
                          end: true,
                          to: "/plant/create",
                          className: ({
                            isActive
                          }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-primary" : ""),
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                            children: "Crear planta recolecci\xF3n"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 408,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 401,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 400,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$14,
                      lineNumber: 399,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 398,
                    columnNumber: 23
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "lg:hidden lg:sidebar-expanded:block 2xl:block",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                      className: `pl-9 mt-1 ${!open && "hidden"}`,
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                        className: "mb-1 last:mb-0",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
                          end: true,
                          to: "/plant/list",
                          className: ({
                            isActive
                          }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-primary" : ""),
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                            children: "Lista de plantas"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 425,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 418,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 417,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$14,
                      lineNumber: 416,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 415,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$14,
                  lineNumber: 332,
                  columnNumber: 21
                }, this);
              }
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 329,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(SidebarLinkGroup, {
              activecondition: pathname.includes("company"),
              children: (handleClick, open) => {
                return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(React.Fragment, {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                    href: "#0",
                    className: `block text-slate-200 hover:text-white truncate transition duration-150 ${pathname.includes("company") && "hover:text-slate-200"}`,
                    onClick: (e) => {
                      e.preventDefault();
                      sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                    },
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center justify-between",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "shrink-0 h-6 w-6",
                          viewBox: "0 0 24 24",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            className: `fill-current text-slate-600 ${pathname.includes("company") && "!text-primary"}`,
                            d: "M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 457,
                            columnNumber: 31
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            className: `fill-current text-slate-400 ${pathname.includes("company") && "text-secondary"}`,
                            d: "M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 464,
                            columnNumber: 31
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$14,
                          lineNumber: 454,
                          columnNumber: 29
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                          children: "Mi compa\xF1ia"
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 472,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$14,
                        lineNumber: 453,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex shrink-0 ml-2",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: `w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && "transform rotate-180"}`,
                          viewBox: "0 0 12 12",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 483,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 478,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 477,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$14,
                      lineNumber: 452,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 441,
                    columnNumber: 23
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "lg:hidden lg:sidebar-expanded:block 2xl:block",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                      className: `pl-9 mt-1 ${!open && "hidden"}`,
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                        className: "mb-1 last:mb-0",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
                          end: true,
                          to: "/company/profile",
                          className: ({
                            isActive
                          }) => "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " + (isActive ? "!text-primary" : ""),
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200",
                            children: "Perfil"
                          }, void 0, false, {
                            fileName: _jsxFileName$14,
                            lineNumber: 498,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$14,
                          lineNumber: 491,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$14,
                        lineNumber: 490,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$14,
                      lineNumber: 489,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$14,
                    lineNumber: 488,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$14,
                  lineNumber: 440,
                  columnNumber: 21
                }, this);
              }
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 437,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$14,
            lineNumber: 146,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$14,
          lineNumber: 145,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$14,
        lineNumber: 143,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-3 py-2",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            onClick: () => setSidebarExpanded(!sidebarExpanded),
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
              className: "sr-only",
              children: "Expand / collapse sidebar"
            }, void 0, false, {
              fileName: _jsxFileName$14,
              lineNumber: 517,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-6 h-6 fill-current sidebar-expanded:rotate-180",
              viewBox: "0 0 24 24",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                className: "text-slate-400",
                d: "M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
              }, void 0, false, {
                fileName: _jsxFileName$14,
                lineNumber: 521,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                className: "text-slate-600",
                d: "M3 23H1V1h2z"
              }, void 0, false, {
                fileName: _jsxFileName$14,
                lineNumber: 525,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$14,
              lineNumber: 518,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$14,
            lineNumber: 516,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$14,
          lineNumber: 515,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$14,
        lineNumber: 514,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$14,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$14,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
var _jsxFileName$13 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/utils/Transition.jsx";
const TransitionContext = React.createContext({
  parent: {}
});
function useIsInitialRender() {
  const isInitialRender = react.exports.useRef(true);
  react.exports.useEffect(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}
function CSSTransition(_a) {
  var _b = _a, {
    show,
    enter = "",
    enterStart = "",
    enterEnd = "",
    leave = "",
    leaveStart = "",
    leaveEnd = "",
    appear,
    unmountOnExit,
    tag = "div",
    children
  } = _b, rest = __objRest(_b, [
    "show",
    "enter",
    "enterStart",
    "enterEnd",
    "leave",
    "leaveStart",
    "leaveEnd",
    "appear",
    "unmountOnExit",
    "tag",
    "children"
  ]);
  const enterClasses = enter.split(" ").filter((s) => s.length);
  const enterStartClasses = enterStart.split(" ").filter((s) => s.length);
  const enterEndClasses = enterEnd.split(" ").filter((s) => s.length);
  const leaveClasses = leave.split(" ").filter((s) => s.length);
  const leaveStartClasses = leaveStart.split(" ").filter((s) => s.length);
  const leaveEndClasses = leaveEnd.split(" ").filter((s) => s.length);
  const removeFromDom = unmountOnExit;
  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }
  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }
  const nodeRef = React.useRef(null);
  const Component = tag;
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ReactCSSTransition, {
    appear,
    nodeRef,
    unmountOnExit: removeFromDom,
    in: show,
    addEndListener: (done) => {
      nodeRef.current.addEventListener("transitionend", done, false);
    },
    onEnter: () => {
      if (!removeFromDom)
        nodeRef.current.style.display = null;
      addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
    },
    onEntering: () => {
      removeClasses(nodeRef.current, enterStartClasses);
      addClasses(nodeRef.current, enterEndClasses);
    },
    onEntered: () => {
      removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
    },
    onExit: () => {
      addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
    },
    onExiting: () => {
      removeClasses(nodeRef.current, leaveStartClasses);
      addClasses(nodeRef.current, leaveEndClasses);
    },
    onExited: () => {
      removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
      if (!removeFromDom)
        nodeRef.current.style.display = "none";
    },
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Component, __spreadProps(__spreadValues({
      ref: nodeRef
    }, rest), {
      style: {
        display: !removeFromDom ? "none" : null
      },
      children
    }), void 0, false, {
      fileName: _jsxFileName$13,
      lineNumber: 81,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$13,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
function Transition(_c) {
  var _d = _c, {
    show,
    appear
  } = _d, rest = __objRest(_d, [
    "show",
    "appear"
  ]);
  const {
    parent
  } = react.exports.useContext(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === void 0;
  if (isChild) {
    return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(CSSTransition, __spreadValues({
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show
    }, rest), void 0, false, {
      fileName: _jsxFileName$13,
      lineNumber: 93,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    },
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(CSSTransition, __spreadValues({
      appear,
      show
    }, rest), void 0, false, {
      fileName: _jsxFileName$13,
      lineNumber: 111,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$13,
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
var _jsxFileName$12 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/DropdownNotifications.jsx";
function DropdownNotifications({
  align
}) {
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const trigger = react.exports.useRef(null);
  const dropdown = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative inline-flex",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      ref: trigger,
      className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
        className: "sr-only",
        children: "Notifications"
      }, void 0, false, {
        fileName: _jsxFileName$12,
        lineNumber: 44,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "w-4 h-4",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          className: "fill-current text-slate-500",
          d: "M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
        }, void 0, false, {
          fileName: _jsxFileName$12,
          lineNumber: 46,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          className: "fill-current text-slate-400",
          d: "M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
        }, void 0, false, {
          fileName: _jsxFileName$12,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$12,
        lineNumber: 45,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"
      }, void 0, false, {
        fileName: _jsxFileName$12,
        lineNumber: 49,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$12,
      lineNumber: 37,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      className: `origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
      show: dropdownOpen,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4",
          children: "Notifications"
        }, void 0, false, {
          fileName: _jsxFileName$12,
          lineNumber: 67,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "border-b border-slate-200 last:border-0",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
              className: "block py-2 px-4 hover:bg-slate-50",
              to: "#0",
              onClick: () => setDropdownOpen(!dropdownOpen),
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "block text-sm mb-2",
                children: ["\u{1F4E3} ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "font-medium text-slate-800",
                  children: "Edit your information in a swipe"
                }, void 0, false, {
                  fileName: _jsxFileName$12,
                  lineNumber: 75,
                  columnNumber: 57
                }, this), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]
              }, void 0, true, {
                fileName: _jsxFileName$12,
                lineNumber: 75,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "block text-xs font-medium text-slate-400",
                children: "Feb 12, 2021"
              }, void 0, false, {
                fileName: _jsxFileName$12,
                lineNumber: 76,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$12,
              lineNumber: 70,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$12,
            lineNumber: 69,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "border-b border-slate-200 last:border-0",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
              className: "block py-2 px-4 hover:bg-slate-50",
              to: "#0",
              onClick: () => setDropdownOpen(!dropdownOpen),
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "block text-sm mb-2",
                children: ["\u{1F4E3} ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "font-medium text-slate-800",
                  children: "Edit your information in a swipe"
                }, void 0, false, {
                  fileName: _jsxFileName$12,
                  lineNumber: 85,
                  columnNumber: 57
                }, this), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]
              }, void 0, true, {
                fileName: _jsxFileName$12,
                lineNumber: 85,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "block text-xs font-medium text-slate-400",
                children: "Feb 9, 2021"
              }, void 0, false, {
                fileName: _jsxFileName$12,
                lineNumber: 86,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$12,
              lineNumber: 80,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$12,
            lineNumber: 79,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "border-b border-slate-200 last:border-0",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
              className: "block py-2 px-4 hover:bg-slate-50",
              to: "#0",
              onClick: () => setDropdownOpen(!dropdownOpen),
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "block text-sm mb-2",
                children: ["\u{1F680}", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "font-medium text-slate-800",
                  children: "Say goodbye to paper receipts!"
                }, void 0, false, {
                  fileName: _jsxFileName$12,
                  lineNumber: 95,
                  columnNumber: 56
                }, this), " Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."]
              }, void 0, true, {
                fileName: _jsxFileName$12,
                lineNumber: 95,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "block text-xs font-medium text-slate-400",
                children: "Jan 24, 2020"
              }, void 0, false, {
                fileName: _jsxFileName$12,
                lineNumber: 96,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$12,
              lineNumber: 90,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$12,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$12,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$12,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$12,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$12,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
var _jsxFileName$11 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/DropdownHelp.jsx";
function DropdownHelp({
  align
}) {
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const trigger = react.exports.useRef(null);
  const dropdown = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative inline-flex",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      ref: trigger,
      className: `w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && "bg-slate-200"}`,
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
        className: "sr-only",
        children: "\xBFNecesitas ayuda?"
      }, void 0, false, {
        fileName: _jsxFileName$11,
        lineNumber: 47,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "w-4 h-4",
        viewBox: "0 0 16 16",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          className: "fill-current text-slate-500",
          d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
        }, void 0, false, {
          fileName: _jsxFileName$11,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$11,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$11,
      lineNumber: 39,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
      show: dropdownOpen,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4",
          children: "\xBFNecesitas ayuda?"
        }, void 0, false, {
          fileName: _jsxFileName$11,
          lineNumber: 74,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
              className: "font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3",
              to: "#0",
              onClick: () => setDropdownOpen(!dropdownOpen),
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
                viewBox: "0 0 12 12",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("rect", {
                  y: "3",
                  width: "12",
                  height: "9",
                  rx: "1"
                }, void 0, false, {
                  fileName: _jsxFileName$11,
                  lineNumber: 86,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                  d: "M2 0h8v2H2z"
                }, void 0, false, {
                  fileName: _jsxFileName$11,
                  lineNumber: 87,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$11,
                lineNumber: 83,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                children: "Documentaci\xF3n"
              }, void 0, false, {
                fileName: _jsxFileName$11,
                lineNumber: 89,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$11,
              lineNumber: 79,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$11,
            lineNumber: 78,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
              className: "font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3",
              to: "#0",
              onClick: () => setDropdownOpen(!dropdownOpen),
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                className: "w-3 h-3 fill-current text-indigo-300 shrink-0 mr-2",
                viewBox: "0 0 12 12",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                  d: "M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z"
                }, void 0, false, {
                  fileName: _jsxFileName$11,
                  lineNumber: 100,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$11,
                lineNumber: 97,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                children: "Soporte"
              }, void 0, false, {
                fileName: _jsxFileName$11,
                lineNumber: 102,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$11,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$11,
            lineNumber: 92,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {}, void 0, false, {
            fileName: _jsxFileName$11,
            lineNumber: 105,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$11,
          lineNumber: 77,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$11,
        lineNumber: 70,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$11,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$11,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
var sinLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAAFoBAMAAACIy3zmAAAAGFBMVEUZmaj////v7+8Ej6BCq7gOlaXP6eyPzNNPOL5hAAAOS0lEQVR42uzdS1PbyBYA4A6iYRv1eORtpCFkq7q28BZjCFvdtBVvUSBki8ch/P3R27KttvrdrSpOpeqWuRnx1clRP45kCbhloKAM4Y/B89vb7S2o4vb27e35Oft/JBx5+xFIO5bvu96v37dwMpkkSY1OkuxjfHv/9sO1EO2iy7frAgz2A0I8icDpH98ytJ/l2JlEcQxIkeBJeJ+7bUG76O0aT8jgOuGT6PRPXt02oNEviKM+chExniz/BK4F6F/XHXVMTDeeZMWNDKO9axwBpsDR6b/ZEcyh0W/KwtjNdnSfIlNof3w9YSYXMcmSbQTto99OBDgDh19NoP3LF840lzUyOU+1o90vdxEQCrxca0ajJyxozoeRP1rR2agRA+GAk3tOdPW/fvVzqo9IqJzbo8g50++tP3Kgfe9VkjkrkZWvB+1dR0Ba4NNUA9r37iSa80EkVY+WbAbAKdRK0dLNea59tWjvVbq5PBsVotGLAnOmPleJVmPO1Ge+MvSTInM2y3xFitBjHKtCw+hfpAQ9dpSZM3VYqGWj0SIECgNOUwXo1wgojWzgk45+UmzO1NnJSImmW8j6XxzV5qys13I3Ad4iVo4GzjSVin4JgYbAK1ciehQBLYFvkDS058R60FlZS0O/hkBTwJUvCX0RAW2By0WIMFpbcRSpjtdS0PqKoywQJAE9ioDWKEYQQTRaxHrRxcpJEP0QAs3hnCFB9BgD7ZGsBdGbUD8aznwhtO6zsD4Xhbqmus/CKqa+wCbgwkiitwsnHrS3MGOuNox86IfQEBrgM8SJ9hxgLMKUE20u0dkMc4640B4GBiNZc6F/hibRME81M9psogHIF9bMaLOJLhfWrGiTQ0eV6pQZ/RCaRmdLVEa0+UTnYzUjehSaRzv1Yo8WvTBvzlYgbF1TGxJN7pIR0JsYWJFqlp3LOAJWBF4zoO1IdL5bRNRo0zN4a9mUUqM/hbagnTNEi14Aa6Lc4lKgR6E9aGdOibblNCxihqjQXmKRudzB9KM/hTahi1OxH70AVsWSJtO2zIbtWbEX/TO2C+2sUC8aOcCyiP3erukotA0N532bAH8TW4ee9aEvIbAu4rQHfRHahy6n8iPojX3mZlVNQnsWVse2PgjoUWgj2rk5iraxOrb10Y1GiZXoetfVjbazOpr66EbbN7O0twIEtGOpGcTkTI85qgPiiD04uzadaI5VKQxv2YP9OyfwOyKhOfYsuP5iIUsg9nNnSuqa8uxZpi5PsI9SOCVsAj5xjB0rLrTH/JucD91on2c6/M6HZp/EZt1onsUSvNKFjv1ONNeApy3TzroTzbUN15Zp+K0LzXVtSF+m83HqEH3JtcLTlmkA0w403wpvxofm+F3OvAPN11laappcitH1AM15uXN7VZUhAq4756aHaN6u9OSMvTj4vnPupAdo3k0LZK9qj68v68z30e4D76ZlpeU0zNNzcpBp7n34TBcazPa7pvz7cG2ZLpYfO5uAcWh/pvPlxw6a/+oQe6Yvec/5D7togba0vkw3v6rONP8lLX013Uy/FVrggqfGTON0By3QD9OYabzeQX+Kh5Bp+P822hdo8WrMdJ0gIHoe6sx03WUp0ZeJzkxfcqOTtIXmnw/1ZrqaE4Hoeai1pqs5EYieh1ozXe2jgfCdpTozXZ2J5XoaDiXT8XYTIHIebjM9mjTR2u0umh829+gKoJ11gxa6qNVkepPAOrZd63HU/BDPJaDnDVpk8NhmunVixF0dDkcCGhZ3RALh67Qznehynwhor7XgCSGuOtDgOJpwJJrOwrJBU0zizpJ0qWrOnGn3d/eR7ij+BZK6pin+ueA07R3JqDNNHAopumVwXaEpBo/eX8iUaYG+ZDF85OiPIeVMpDjTLqKY5E4qNEWTd+bqyDTFMFZcugV0I96VlkzTSGYVeiEdzZvpfyiWTGV50FSSpkw/UiyZfhRomglKU6Yp0E5adE2/hEPKdN77yNAf40Flel6gP8dDynTesAGB/wqGlOmcAuh2tRZlelagF8PK9LSoaTioTOdXXkBAdWsOIzpUiIZphqbaitOgN9s9yHZ9NW7tTNZS0DhHj2Shve0epMXb7lLuXSloZ52hL2SVh4SgQs8z9KeBoeEHF/g0f9EmNPhflunN0NBXWaaHhs6mREB3V6xNmZ4iQHejt03oOEPDwaEDQHeBuYX+9VbHHxFf52Ho0D+Y0e15ebdVNm4GfNhqqt8dXI4/Mr1ToeEa0F0F2KI/EldAmyipo91Ub36I22uP7sNQoR0OdExCM62n/45F0CMVaKAUPVeDVpvpmyFm+gbQXSTqREMzmYZn4HM8tEzD74Dq71lV0+BKDVptpq/ABgytpsFMBG0o06rQ75nuQN8Nr6aXImhTmT5Vg1ad6evhZXoJ4PBqmjasyjQHOjRe0+zolgKv+dHtw6hHe06ziw79vaY6rqPdVG++4b7TVO8+jCo0OcbNQHTabqo3x5DUVJeL1tVheke/o9/R72gb0EET7Xvtmh/6BtHbbvje80hG27++7U+j7dL31JfTVOdAt7rh0W5TfZP09Kfn3U311mFo0aw7l1HY3HrOuMqDuwumrsMY3W71r6f/sm9j+74b7yiPAfbyVgPsMMH3Xp6+Xt7j8Gp6iFcCMvTPeGg1Db+Bh3hwo8cJuIiHVtPOHNA95/b92rg4ejy8TAvd72GqpjP04EYPnIJLOLSaTlIQmEEL7FxiF/iMaPKt50w3fXcfhgodZmjG2zZb3fCpv3fT9+/76k+7P33f/NglNNUZd+NLF7isN8hePteRijSTOg9DhZ4h4A7u/ukc/c/Q0FcBcGm+b2bV/dMnGVraty90oW8y9HhgaLweINrJ0VT3IluETtIMjRi/cGb6pu/4R/7FYLav9pFv+maK7sNQfbUP5Wi2L1GS70JgCv6bvmcF+lHSKo8pWktTxrsQVgX679gsmi3T8FvxZffRoNDgQ4GmGahp9ojNObb3pJipLxOdP9QIBMFlKDfTf22vAe0+ykgKOn+kYv6YLigX/XjQp5CJzp/ICuie8GcPOr9EmaH9jdyaVouelWiaZ3xbk+niyfOA7hF/1qCL10kAuoea2pPpeYUeh8OpaSet0EEynEwnboWm6NdYg5426M1w0KsaHfRfLLKlpuFJg+4fPmzJdPl3Ad0DZK1Brxt0/5JJJbp5VDoFumx8g4MrD3396SiuAwuguw/Ti56i7csNHunR5P40E7r7ML2OVQvd24Rs9T28vv40Fbr7MI+9g0frNRK9ZyJLh4kOzdVhKl8pV6F7W2OWoKuXOwKX6ky0BD3decvIZhjo6j0j4GDYtBidN2pa6L4z0Q50/ergCt33Bh470NV52Lw5ZzEE9HTvdT+bAaCbdzSDw3WQveiTvUz3nIlWoMsHqrffBpXYj4733wbVs0+0Ab19LVmDPtZmShIW9OcJTqLWH4qH+zXo5Mg/ODw7QB/ZJ2IAPjCgvevdOKX/T0cxiI40l/x9NCL+bXj+49nVFM+XLzF5ajlAk6eXZO1qDPIwtkSHaGLDN3a1BiQ2eTvQxKK2BT0PDtHE3YtmtENeLR2iiUVtCXqJutCfY5vR+WPrO9Ck89YOdL4R70Ajx2Z0nHaiSWtqK0aPYi3dhSa8TsIO9EnQjSZsFJNUp5kw8ha9pQZdr6fJb5RzznSiH0LytZaO940HPmEmn9zqi+uIfKG2E028IjDRF9GxKwCdaPIVgRhq+nN0Vu5EC7xjVW1UO63uTAu9NUwlen4ELfJyR5WR+EfQltZHvQ/vRgcXVtZH3YQgoD1oIzpOj6LtrI+ZexRt5fjh3PSgvcTe6iCiXfvqI1tK96Htqw/nJthH7z1QJkDWjR9x8zScrk1AgfZfLauPfFXahxZ65bGKyJ/K14sWeSO2ipi6FGj/wapUF7da9Wd6bNVQXWyr+9FWTeXlAq8fbdVUXt7gRIFGC7tOQyp08GBNfTgn1Gh7dl3Vc8do0NacivU+iwYdjCNLTsM1AzpYWJHq5r3lVGjfjg1uc6/zPnp/PV19XNgx3u2pSJuAKp4sSDWeIyY08hzz6DBlRAfm13rOmcuKNp/qMGVGG992Od9dZrTxZXU+gzOjDac6TzQ7Ohhj40sldrT/EhodOrjQRgeQ8uk7HGiDY3V1wZUH7RlbgUxTbnRwYWhdjecuPxqZWVc362gSunsTUH80k+pmeeezbAKaj0Z67M7MDUTQRibzaC2INtCOzIc7MXRwqftchPm35gTRvu5zsRjuBNHZak9rgTgrVwI6GOtcgsBy0SGM9p80Fgi+caWgA6RvO1AWhwx0ViCx1uKQgtY2guC5Kw0duK9a1M65LxHtezqmGDhNpaJdHWUd/oso0cdXrtvejfpxD3/tZ9BsAlofkeqyxitXOjpQXNZO8XQB2Wj/i8qyhuHaVYDO1FiZGkZrVwk6CJ4mqsz5SagIjR4UqfG5qwwduC+RGrOvEq1k4MOrNFCJdtGddDVepkgt2vVkqwuzYrSLFv81c8eqDcNAAEALkch8GpJZNyRr4NCuQa3XwNUfkFCstRRj/X5lmlAaGhLZZyfebvE9jtNZtsBO3jw1GowXVLP6OSycGi25Gml5OuCcHA2rTxJ5NmpaGoMD0Hfupy/CVkKtXWUL85a9BFyGkUe3CLs3i7OiYT129PH7F+DM6JGNndv5aHB2NMDHYnCxeVdZg49Aw9YPK7Ymdf5uPj/arlp25WzKUwPwUeg8QLe+dIywU4fyRJJotCZ6KjiXqUl1gxJJonOwia90X5Po3EydhSdA92H0fHtJZrJKdlwiSTSYpl2Qu94muibaVd0B8InQ/W4m+hf+F57Bbq/SEUEkkSQ6X5vUBk1Ev//40TUT7UNfY5BLJInut5DYNCmFcDaHkFKDAnf+E34DNc7HqBJDGNkAAAAASUVORK5CYII=";
var _jsxFileName$10 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/Logout.jsx";
const Logout = ({
  align
}) => {
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const navigate = useNavigate();
  const trigger = react.exports.useRef(null);
  const dropdown = react.exports.useRef(null);
  let username = localStorage.getItem("first_name");
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  function Logout2() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("first_name");
    localStorage.removeItem("email");
    localStorage.removeItem("supplier_id");
    sessionStorage.clear();
    navigate("/signin");
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative inline-flex",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      ref: trigger,
      className: "inline-flex justify-center items-center group",
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
        className: "w-8 h-8 rounded-full",
        src: sinLogo,
        width: "32",
        height: "32",
        alt: "User"
      }, void 0, false, {
        fileName: _jsxFileName$10,
        lineNumber: 60,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "flex items-center truncate",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
          className: "capitalize truncate ml-2 text-sm font-medium group-hover:text-slate-800",
          children: username
        }, void 0, false, {
          fileName: _jsxFileName$10,
          lineNumber: 69,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",
          viewBox: "0 0 12 12",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
          }, void 0, false, {
            fileName: _jsxFileName$10,
            lineNumber: 75,
            columnNumber: 13
          }, globalThis)
        }, void 0, false, {
          fileName: _jsxFileName$10,
          lineNumber: 72,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$10,
        lineNumber: 68,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$10,
      lineNumber: 54,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      className: `origin-top-right z-10 absolute top-full min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
      show: dropdownOpen,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "font-medium text-slate-800 capitalize",
            children: username
          }, void 0, false, {
            fileName: _jsxFileName$10,
            lineNumber: 96,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "text-xs text-slate-500 italic",
            children: "Administrador"
          }, void 0, false, {
            fileName: _jsxFileName$10,
            lineNumber: 99,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$10,
          lineNumber: 95,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
              className: "font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3",
              to: "/company/profile",
              onClick: () => setDropdownOpen(!dropdownOpen),
              children: "Mi perfil"
            }, void 0, false, {
              fileName: _jsxFileName$10,
              lineNumber: 103,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$10,
            lineNumber: 102,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              className: "font-medium text-sm text-black-500 hover:text-primary flex items-center py-1 px-3",
              onClick: () => {
                setDropdownOpen(!dropdownOpen);
                Logout2();
              },
              children: "Cerrar sesi\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName$10,
              lineNumber: 111,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$10,
            lineNumber: 110,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$10,
          lineNumber: 101,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$10,
        lineNumber: 91,
        columnNumber: 9
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$10,
      lineNumber: 80,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$10,
    lineNumber: 53,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$$ = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/Header.jsx";
function Header({
  sidebarOpen,
  setSidebarOpen
}) {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("header", {
    className: "sticky top-0 bg-white border-b border-slate-200 z-30",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "px-4 sm:px-6 lg:px-8",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "flex items-center justify-between h-16 -mb-px",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            className: "text-slate-500 hover:text-slate-600 lg:hidden",
            "aria-controls": "sidebar",
            "aria-expanded": sidebarOpen,
            onClick: () => setSidebarOpen(!sidebarOpen),
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
              className: "sr-only",
              children: "Open sidebar"
            }, void 0, false, {
              fileName: _jsxFileName$$,
              lineNumber: 21,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-6 h-6 fill-current",
              viewBox: "0 0 24 24",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("rect", {
                x: "4",
                y: "5",
                width: "16",
                height: "2"
              }, void 0, false, {
                fileName: _jsxFileName$$,
                lineNumber: 26,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("rect", {
                x: "4",
                y: "11",
                width: "16",
                height: "2"
              }, void 0, false, {
                fileName: _jsxFileName$$,
                lineNumber: 27,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("rect", {
                x: "4",
                y: "17",
                width: "16",
                height: "2"
              }, void 0, false, {
                fileName: _jsxFileName$$,
                lineNumber: 28,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$$,
              lineNumber: 22,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$$,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$$,
          lineNumber: 14,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex items-center space-x-3",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownHelp, {
            align: "right"
          }, void 0, false, {
            fileName: _jsxFileName$$,
            lineNumber: 35,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("hr", {
            className: "w-px h-6 bg-slate-200 mx-3"
          }, void 0, false, {
            fileName: _jsxFileName$$,
            lineNumber: 37,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Logout, {
            align: "right"
          }, void 0, false, {
            fileName: _jsxFileName$$,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$$,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$$,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$$,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$$,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var _jsxFileName$_ = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/dashboard/WelcomeBanner.jsx";
function WelcomeBanner() {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block",
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        width: "319",
        height: "198",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("defs", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            id: "welcome-a",
            d: "M64 0l64 128-64-20-64 20z"
          }, void 0, false, {
            fileName: _jsxFileName$_,
            lineNumber: 12,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            id: "welcome-e",
            d: "M40 0l40 80-40-12.5L0 80z"
          }, void 0, false, {
            fileName: _jsxFileName$_,
            lineNumber: 13,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            id: "welcome-g",
            d: "M40 0l40 80-40-12.5L0 80z"
          }, void 0, false, {
            fileName: _jsxFileName$_,
            lineNumber: 14,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("linearGradient", {
            x1: "50%",
            y1: "0%",
            x2: "50%",
            y2: "100%",
            id: "welcome-b",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("stop", {
              stopColor: "#A5B4FC",
              offset: "0%"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 16,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("stop", {
              stopColor: "#818CF8",
              offset: "100%"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$_,
            lineNumber: 15,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("linearGradient", {
            x1: "50%",
            y1: "24.537%",
            x2: "50%",
            y2: "100%",
            id: "welcome-c",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("stop", {
              stopColor: "#4338CA",
              offset: "0%"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 25,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("stop", {
              stopColor: "#6366F1",
              stopOpacity: "0",
              offset: "100%"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 26,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$_,
            lineNumber: 19,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$_,
          lineNumber: 11,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("g", {
          fill: "none",
          fillRule: "evenodd",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("g", {
            transform: "rotate(64 36.592 105.604)",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("mask", {
              id: "welcome-d",
              fill: "#fff",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("use", {
                xlinkHref: "#welcome-a"
              }, void 0, false, {
                fileName: _jsxFileName$_,
                lineNumber: 32,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 31,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("use", {
              fill: "url(#welcome-b)",
              xlinkHref: "#welcome-a"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 34,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              fill: "url(#welcome-c)",
              mask: "url(#welcome-d)",
              d: "M64-24h80v152H64z"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 35,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$_,
            lineNumber: 30,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("g", {
            transform: "rotate(-51 91.324 -105.372)",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("mask", {
              id: "welcome-f",
              fill: "#fff",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("use", {
                xlinkHref: "#welcome-e"
              }, void 0, false, {
                fileName: _jsxFileName$_,
                lineNumber: 43,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 42,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("use", {
              fill: "url(#welcome-b)",
              xlinkHref: "#welcome-e"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 45,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              fill: "url(#welcome-c)",
              mask: "url(#welcome-f)",
              d: "M40.333-15.147h50v95h-50z"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 46,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$_,
            lineNumber: 41,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("g", {
            transform: "rotate(44 61.546 392.623)",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("mask", {
              id: "welcome-h",
              fill: "#fff",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("use", {
                xlinkHref: "#welcome-g"
              }, void 0, false, {
                fileName: _jsxFileName$_,
                lineNumber: 54,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 53,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("use", {
              fill: "url(#welcome-b)",
              xlinkHref: "#welcome-g"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 56,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              fill: "url(#welcome-c)",
              mask: "url(#welcome-h)",
              d: "M40.333-15.147h50v95h-50z"
            }, void 0, false, {
              fileName: _jsxFileName$_,
              lineNumber: 57,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$_,
            lineNumber: 52,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$_,
          lineNumber: 29,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$_,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$_,
      lineNumber: 7,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
        className: "text-2xl md:text-3xl text-slate-800 font-bold mb-1",
        children: "Bienvenido a Hubmine supplier system \u{1F44B}"
      }, void 0, false, {
        fileName: _jsxFileName$_,
        lineNumber: 69,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
        children: "A partir de aqu\xED podr\xE1s crear tus productos y las plantas de recolecci\xF3n."
      }, void 0, false, {
        fileName: _jsxFileName$_,
        lineNumber: 72,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$_,
      lineNumber: 68,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$_,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var _jsxFileName$Z = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/charts/LineChart03.jsx";
Chart.register(LineController, LineElement, plugin_filler, PointElement, LinearScale, TimeScale, plugin_tooltip);
function LineChart03({
  data,
  width,
  height
}) {
  const canvas = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const ctx = canvas.current;
    const chart = new Chart(ctx, {
      type: "line",
      data,
      options: {
        layout: {
          padding: 20
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              drawBorder: false
            },
            ticks: {
              callback: (value) => formatThousands(value)
            }
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY"
              }
            },
            grid: {
              display: false,
              drawBorder: false
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              title: () => false,
              label: (context) => formatThousands(context.parsed.y)
            }
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        maintainAspectRatio: false,
        resizeDelay: 200
      }
    });
    return () => chart.destroy();
  }, []);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("canvas", {
    ref: canvas,
    width,
    height
  }, void 0, false, {
    fileName: _jsxFileName$Z,
    lineNumber: 84,
    columnNumber: 5
  }, this);
}
var _jsxFileName$Y = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/analytics/AnalyticsCard01.jsx";
function AnalyticsCard01() {
  const chartData = {
    labels: ["12-01-2020", "01-01-2021", "02-01-2021"],
    datasets: [
      {
        label: "Current",
        data: [5e3, 8700, 7500],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        clip: 20
      },
      {
        label: "Previous",
        data: [8e3, 5e3, 6500],
        borderColor: tailwindConfig().theme.colors.slate[300],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.slate[300],
        clip: 20
      }
    ]
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex flex-col col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("header", {
      className: "px-5 py-4 border-b border-slate-100 flex items-center",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
        className: "font-semibold text-slate-800",
        children: "M\xE9tricas"
      }, void 0, false, {
        fileName: _jsxFileName$Y,
        lineNumber: 51,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$Y,
      lineNumber: 50,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "px-5 py-1",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "flex flex-wrap",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex items-center py-2",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mr-5",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-3xl font-bold text-slate-800 mr-2",
                children: "21"
              }, void 0, false, {
                fileName: _jsxFileName$Y,
                lineNumber: 59,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-sm font-medium text-emerald-500",
                children: "+49%"
              }, void 0, false, {
                fileName: _jsxFileName$Y,
                lineNumber: 60,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$Y,
              lineNumber: 58,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "text-sm text-slate-500",
              children: "Colaboradores activos"
            }, void 0, false, {
              fileName: _jsxFileName$Y,
              lineNumber: 62,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$Y,
            lineNumber: 57,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "hidden md:block w-px h-8 bg-slate-200 mr-5",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName$Y,
            lineNumber: 64,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$Y,
          lineNumber: 56,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex items-center py-2",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mr-5",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-3xl font-bold text-slate-800 mr-2",
                children: "7"
              }, void 0, false, {
                fileName: _jsxFileName$Y,
                lineNumber: 70,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-sm font-medium text-emerald-500",
                children: "+27%"
              }, void 0, false, {
                fileName: _jsxFileName$Y,
                lineNumber: 71,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$Y,
              lineNumber: 69,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "text-sm text-slate-500",
              children: "Contratos firmados"
            }, void 0, false, {
              fileName: _jsxFileName$Y,
              lineNumber: 73,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$Y,
            lineNumber: 68,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "hidden md:block w-px h-8 bg-slate-200 mr-5",
            "aria-hidden": "true"
          }, void 0, false, {
            fileName: _jsxFileName$Y,
            lineNumber: 75,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$Y,
          lineNumber: 67,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex items-center py-2",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mr-5",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-3xl font-bold text-slate-800 mr-2",
                children: "54%"
              }, void 0, false, {
                fileName: _jsxFileName$Y,
                lineNumber: 81,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-sm font-medium text-amber-500",
                children: "-7%"
              }, void 0, false, {
                fileName: _jsxFileName$Y,
                lineNumber: 82,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$Y,
              lineNumber: 80,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "text-sm text-slate-500",
              children: "Crecimiento de equipo en los \xFAltimos 3 meses"
            }, void 0, false, {
              fileName: _jsxFileName$Y,
              lineNumber: 84,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$Y,
            lineNumber: 79,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$Y,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$Y,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$Y,
      lineNumber: 53,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "grow",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LineChart03, {
        data: chartData,
        width: 800,
        height: 300
      }, void 0, false, {
        fileName: _jsxFileName$Y,
        lineNumber: 92,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$Y,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$Y,
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
var _jsxFileName$X = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/charts/PolarChart.jsx";
Chart.register(PolarAreaController, RadialLinearScale, plugin_tooltip, plugin_legend);
function PolarChart({
  data,
  width,
  height
}) {
  const canvas = react.exports.useRef(null);
  const legend = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const ctx = canvas.current;
    const chart = new Chart(ctx, {
      type: "polarArea",
      data,
      options: {
        layout: {
          padding: 24
        },
        plugins: {
          legend: {
            display: false
          }
        },
        interaction: {
          intersect: false,
          mode: "nearest"
        },
        animation: {
          duration: 500
        },
        maintainAspectRatio: false,
        resizeDelay: 200
      },
      plugins: [{
        id: "htmlLegend",
        afterUpdate(c, args, options) {
          const ul = legend.current;
          if (!ul)
            return;
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
          const items = c.options.plugins.legend.labels.generateLabels(c);
          items.forEach((item) => {
            const li = document.createElement("li");
            li.style.margin = tailwindConfig().theme.margin[1];
            const button = document.createElement("button");
            button.classList.add("btn-xs");
            button.style.backgroundColor = tailwindConfig().theme.colors.white;
            button.style.borderWidth = tailwindConfig().theme.borderWidth[1];
            button.style.borderColor = tailwindConfig().theme.colors.slate[200];
            button.style.color = tailwindConfig().theme.colors.slate[500];
            button.style.boxShadow = tailwindConfig().theme.boxShadow.md;
            button.style.opacity = item.hidden ? ".3" : "";
            button.onclick = () => {
              c.toggleDataVisibility(item.index, !item.index);
              c.update();
            };
            const box = document.createElement("span");
            box.style.display = "block";
            box.style.width = tailwindConfig().theme.width[2];
            box.style.height = tailwindConfig().theme.height[2];
            box.style.backgroundColor = item.fillStyle;
            box.style.borderRadius = tailwindConfig().theme.borderRadius.sm;
            box.style.marginRight = tailwindConfig().theme.margin[1];
            box.style.pointerEvents = "none";
            const label = document.createElement("span");
            label.style.display = "flex";
            label.style.alignItems = "center";
            const labelText = document.createTextNode(item.text);
            label.appendChild(labelText);
            li.appendChild(button);
            button.appendChild(box);
            button.appendChild(label);
            ul.appendChild(li);
          });
        }
      }]
    });
    return () => chart.destroy();
  }, []);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "grow flex flex-col justify-center",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("canvas", {
        ref: canvas,
        width,
        height
      }, void 0, false, {
        fileName: _jsxFileName$X,
        lineNumber: 104,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$X,
      lineNumber: 103,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "px-5 pt-2 pb-6",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
        ref: legend,
        className: "flex flex-wrap justify-center -m-1"
      }, void 0, false, {
        fileName: _jsxFileName$X,
        lineNumber: 107,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$X,
      lineNumber: 106,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$X,
    lineNumber: 102,
    columnNumber: 5
  }, this);
}
var _jsxFileName$W = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/analytics/AnalyticsCard10.jsx";
function AnalyticsCard10() {
  const chartData = {
    labels: ["Hombres", "Mujeres"],
    datasets: [{
      label: "Sessions By Gender",
      data: [13, 8],
      backgroundColor: [`rgba(${hexToRGB(tailwindConfig().theme.colors.indigo[500])}, 0.8)`, `rgba(${hexToRGB(tailwindConfig().theme.colors.sky[400])}, 0.8)`],
      hoverBackgroundColor: [`rgba(${hexToRGB(tailwindConfig().theme.colors.indigo[600])}, 0.8)`, `rgba(${hexToRGB(tailwindConfig().theme.colors.sky[500])}, 0.8)`],
      hoverBorderColor: tailwindConfig().theme.colors.white
    }]
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("header", {
      className: "px-5 py-4 border-b border-slate-100",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
        className: "font-semibold text-slate-800",
        children: "Contrataciones por g\xE9nero"
      }, void 0, false, {
        fileName: _jsxFileName$W,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$W,
      lineNumber: 34,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PolarChart, {
      data: chartData,
      width: 389,
      height: 260
    }, void 0, false, {
      fileName: _jsxFileName$W,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$W,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
var _jsxFileName$V = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/Dashboard.jsx";
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$V,
      lineNumber: 16,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$V,
        lineNumber: 21,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(WelcomeBanner, {}, void 0, false, {
            fileName: _jsxFileName$V,
            lineNumber: 26,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "grid grid-cols-12 gap-6",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(AnalyticsCard01, {}, void 0, false, {
              fileName: _jsxFileName$V,
              lineNumber: 31,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(AnalyticsCard10, {}, void 0, false, {
              fileName: _jsxFileName$V,
              lineNumber: 33,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$V,
            lineNumber: 29,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$V,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$V,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$V,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$V,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var NotFoundImage = "/assets/404-illustration.a20d59b6.svg";
var _jsxFileName$U = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/utility/PageNotFound.jsx";
function PageNotFound() {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "max-w-2xl m-auto mt-16",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "text-center px-4",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "inline-flex mb-8",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  src: NotFoundImage,
                  width: "176",
                  height: "176",
                  alt: "404 illustration"
                }, void 0, false, {
                  fileName: _jsxFileName$U,
                  lineNumber: 19,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$U,
                lineNumber: 18,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "mb-6",
                children: "Hmm... esta p\xE1gina no existe. \xA1Intenta buscar otra cosa!"
              }, void 0, false, {
                fileName: _jsxFileName$U,
                lineNumber: 26,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                to: "/",
                className: "btn bg-primary hover:bg-indigo-600 text-white",
                children: "Volver al Inicio"
              }, void 0, false, {
                fileName: _jsxFileName$U,
                lineNumber: 29,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$U,
              lineNumber: 17,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$U,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$U,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$U,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$U,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$U,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var _jsxFileName$T = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/helpers/LoadingButton.jsx";
const LoadingButton = () => {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
    className: "btn bg-primary hover:bg-indigo-600 text-white disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none",
    disabled: true,
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
      className: "animate-spin w-4 h-4 fill-current shrink-0",
      viewBox: "0 0 16 16",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
        d: "M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"
      }, void 0, false, {
        fileName: _jsxFileName$T,
        lineNumber: 11,
        columnNumber: 9
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$T,
      lineNumber: 8,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
      className: "ml-2",
      children: "Cargando"
    }, void 0, false, {
      fileName: _jsxFileName$T,
      lineNumber: 13,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$T,
    lineNumber: 5,
    columnNumber: 5
  }, globalThis);
};
var AuthImage = "/assets/AuthImage.9cda46fa.jpg";
var logohubsupplier = "/assets/logohubsupplier.46f30f9d.svg";
var _jsxFileName$S = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/Signin.jsx";
function Signin() {
  const [locked, setLocked] = react.exports.useState(false);
  const [accountValidate, setAccountValidate] = react.exports.useState(false);
  const {
    loading,
    eye,
    setLoading,
    toggleEye
  } = react.exports.useContext(StateContext);
  const navigate = useNavigate();
  const warningAccount = () => {
    if (!locked) {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "mt-5",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "bg-amber-100 text-amber-600 px-3 py-2 rounded",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            className: "inline w-4 h-4 shrink-0 fill-current mr-2",
            viewBox: "0 0 17 17",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            }, void 0, false, {
              fileName: _jsxFileName$S,
              lineNumber: 27,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$S,
            lineNumber: 24,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
            className: "text-sm",
            children: "Este sitio es de uso exclusivo para proveedores de Hubmine, si usted es comprador, inicie sesi\xF3n desde la aplicaci\xF3n."
          }, void 0, false, {
            fileName: _jsxFileName$S,
            lineNumber: 29,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$S,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$S,
        lineNumber: 22,
        columnNumber: 9
      }, this);
    } else if (accountValidate) {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "mt-5",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "bg-amber-100 text-amber-600 px-3 py-2 rounded",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            className: "inline w-4 h-4 shrink-0 fill-current mr-2",
            viewBox: "0 0 17 17",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            }, void 0, false, {
              fileName: _jsxFileName$S,
              lineNumber: 43,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$S,
            lineNumber: 40,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
            className: "text-sm",
            children: "Este sitio es de uso exclusivo para proveedores de Hubmine, si usted es comprador, inicie sesi\xF3n desde la aplicaci\xF3n."
          }, void 0, false, {
            fileName: _jsxFileName$S,
            lineNumber: 45,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$S,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$S,
        lineNumber: 38,
        columnNumber: 9
      }, this);
    } else {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "mt-5",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "bg-red-100 text-red-600 px-3 py-2 rounded",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            className: "inline w-4 h-4 shrink-0 fill-current mr-2",
            viewBox: "0 0 17 17",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
            }, void 0, false, {
              fileName: _jsxFileName$S,
              lineNumber: 59,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$S,
            lineNumber: 56,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
            className: "text-sm",
            children: "Se ha producido un problema al iniciar sesi\xF3n. Comprueba el correo electr\xF3nico y la contrase\xF1a. Si usted es comprador no puede acceder al sitio."
          }, void 0, false, {
            fileName: _jsxFileName$S,
            lineNumber: 61,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$S,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$S,
        lineNumber: 54,
        columnNumber: 9
      }, this);
    }
  };
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();
  async function loginUser(credentials) {
    return fetch("http://supplier.hubmine.mx/api/auth/login/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    }).then((response) => response.json()).then((json) => {
      if (json.customer_type_id === 2) {
        setLoading(true);
        let result = json;
        let supplierId = json.id;
        let supplierToken = {
          token: json.token
        };
        localStorage.setItem("token", result.token);
        sessionStorage.setItem("token", result.token);
        localStorage.setItem("first_name", result.first_name);
        localStorage.setItem("email", result.email);
        localStorage.setItem("supplier_id", result.supplier_id);
        localStorage.setItem("id", result.id);
        async function codeValidation() {
          return fetch(`http://supplier.hubmine.mx/api/suppliers/validate/${supplierId}/`, {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(supplierToken)
          }).then((response) => {
            if (response.status === 202) {
              setTimeout(() => {
                navigate("/");
                setLoading(false);
              }, 1500);
            }
          });
        }
        codeValidation();
      } else if (json.customer_type_id === 1) {
        setLoading(true);
        setLocked(true);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      } else if (json.code === 401) {
        setLoading(true);
        setTimeout(() => {
          setLocked(true);
          setLoading(false);
        }, 1500);
      } else if (json.code === 403) {
        setLoading(true);
        setAccountValidate(true);
        setLocked(true);
        setTimeout(() => {
          sessionStorage.setItem("id", json.id);
          setLocked(false);
          navigate("/multiStep");
          setLoading(false);
        }, 1500);
      }
    });
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
    className: "bg-white",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative md:flex",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "min-h-screen h-full flex flex-col after:flex-1",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex-1",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "block",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  src: logohubsupplier,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName$S,
                  lineNumber: 158,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$S,
                lineNumber: 157,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$S,
              lineNumber: 155,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$S,
            lineNumber: 154,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "max-w-lg mx-auto px-4 py-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-3xl text-slate-800 font-bold mb-6",
              children: "Hola de nuevo \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$S,
              lineNumber: 164,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
              onSubmit: handleSubmit(loginUser),
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "space-y-4",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    htmlFor: "email",
                    children: "Correo electr\xF3nico"
                  }, void 0, false, {
                    fileName: _jsxFileName$S,
                    lineNumber: 171,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                    maxLength: "35",
                    autoComplete: "off",
                    className: "form-input w-full",
                    type: "email"
                  }, register("email", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El formato no es correcto"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName$S,
                    lineNumber: 176,
                    columnNumber: 21
                  }, this), errors.email && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-red-500 text-sm",
                    children: errors.email.message
                  }, void 0, false, {
                    fileName: _jsxFileName$S,
                    lineNumber: 193,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$S,
                  lineNumber: 170,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "relative",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    htmlFor: "password",
                    children: "Contrase\xF1a"
                  }, void 0, false, {
                    fileName: _jsxFileName$S,
                    lineNumber: 199,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                    maxLength: "35",
                    className: "form-input w-full",
                    type: eye ? "text" : "password",
                    autoComplete: "off"
                  }, register("password", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName$S,
                    lineNumber: 204,
                    columnNumber: 21
                  }, this), errors.password && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-red-500 text-sm",
                    children: errors.password.message
                  }, void 0, false, {
                    fileName: _jsxFileName$S,
                    lineNumber: 217,
                    columnNumber: 23
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                    onClick: toggleEye,
                    type: "button",
                    className: "absolute right-0 top-5 mt-3 mr-4",
                    children: eye ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M21.27 9.17999C20.98 8.71999 20.67 8.28999 20.35 7.88999C19.98 7.41999 19.28 7.37999 18.86 7.79999L15.86 10.8C16.08 11.46 16.12 12.22 15.92 13.01C15.57 14.42 14.43 15.56 13.02 15.91C12.23 16.11 11.47 16.07 10.81 15.85C10.81 15.85 9.38001 17.28 8.35001 18.31C7.85001 18.81 8.01001 19.69 8.68001 19.95C9.75001 20.36 10.86 20.57 12 20.57C13.78 20.57 15.51 20.05 17.09 19.08C18.7 18.08 20.15 16.61 21.32 14.74C22.27 13.23 22.22 10.69 21.27 9.17999Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$S,
                        lineNumber: 232,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M14.02 9.98001L9.98001 14.02C9.47001 13.5 9.14001 12.78 9.14001 12C9.14001 10.43 10.42 9.14001 12 9.14001C12.78 9.14001 13.5 9.47001 14.02 9.98001Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$S,
                        lineNumber: 236,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M18.25 5.74999L14.86 9.13999C14.13 8.39999 13.12 7.95999 12 7.95999C9.76 7.95999 7.96 9.76999 7.96 12C7.96 13.12 8.41 14.13 9.14 14.86L5.76 18.25H5.75C4.64 17.35 3.62 16.2 2.75 14.84C1.75 13.27 1.75 10.72 2.75 9.14999C3.91 7.32999 5.33 5.89999 6.91 4.91999C8.49 3.95999 10.22 3.42999 12 3.42999C14.23 3.42999 16.39 4.24999 18.25 5.74999Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$S,
                        lineNumber: 240,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M14.86 12C14.86 13.57 13.58 14.86 12 14.86C11.94 14.86 11.89 14.86 11.83 14.84L14.84 11.83C14.86 11.89 14.86 11.94 14.86 12Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$S,
                        lineNumber: 244,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L2.23 20.69C1.93 20.99 1.93 21.48 2.23 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$S,
                        lineNumber: 248,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$S,
                      lineNumber: 226,
                      columnNumber: 25
                    }, this) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M21.25 9.14999C18.94 5.51999 15.56 3.42999 12 3.42999C10.22 3.42999 8.49 3.94999 6.91 4.91999C5.33 5.89999 3.91 7.32999 2.75 9.14999C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.14999ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.76999 9.76 7.95999 12 7.95999C14.24 7.95999 16.04 9.76999 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$S,
                        lineNumber: 260,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$S,
                        lineNumber: 264,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$S,
                      lineNumber: 254,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$S,
                    lineNumber: 221,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$S,
                  lineNumber: 198,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$S,
                lineNumber: 169,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "flex items-center mt-6",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {}, void 0, false, {
                  fileName: _jsxFileName$S,
                  lineNumber: 274,
                  columnNumber: 19
                }, this), loading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
                  fileName: _jsxFileName$S,
                  lineNumber: 282,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                    type: "submit",
                    className: "btn bg-secondary hover:bg-primary hover:text-white text-primary",
                    children: "Iniciar sesi\xF3n"
                  }, void 0, false, {
                    fileName: _jsxFileName$S,
                    lineNumber: 285,
                    columnNumber: 23
                  }, this)
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName$S,
                lineNumber: 273,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$S,
              lineNumber: 168,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "pt-5 mt-6 border-t border-slate-200",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-sm",
                children: ["\xBFNo tienes cuenta?", " ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                  className: "font-medium text-primary hover:text-slate-500",
                  to: "/code/generator",
                  children: "Registrate"
                }, void 0, false, {
                  fileName: _jsxFileName$S,
                  lineNumber: 299,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$S,
                lineNumber: 297,
                columnNumber: 17
              }, this), warningAccount()]
            }, void 0, true, {
              fileName: _jsxFileName$S,
              lineNumber: 295,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$S,
            lineNumber: 163,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$S,
          lineNumber: 152,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$S,
        lineNumber: 151,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "object-cover object-center w-full h-full",
          src: AuthImage,
          width: "760",
          height: "1024",
          alt: "Authentication"
        }, void 0, false, {
          fileName: _jsxFileName$S,
          lineNumber: 315,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$S,
        lineNumber: 312,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$S,
      lineNumber: 149,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$S,
    lineNumber: 148,
    columnNumber: 5
  }, this);
}
var AuthDecoration = "/assets/auth-decoration.a3f89aec.png";
var CreateAccount = "/assets/createAccount.49879497.jpg";
var _jsxFileName$R = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/Signup.jsx";
function Signup() {
  const {
    eye,
    toggleEye,
    errorMenssage,
    setErrorMenssage
  } = react.exports.useContext(StateContext);
  const [reloading, setReloading] = react.exports.useState(false);
  const number = sessionStorage.getItem("number");
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      customer_type_id: 2,
      user_type_id: 2,
      business_name: "",
      rfc: "",
      country_code: "",
      business_type: "",
      phone_number: number
    }
  });
  const cleanLocalStorage = () => {
    sessionStorage.removeItem("code");
    sessionStorage.removeItem("number");
  };
  const navigate = useNavigate();
  async function createAccount(data) {
    return fetch("http://supplier.hubmine.mx/api/auth/register/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => response.json()).then((json) => {
      if (json.code === 201) {
        setReloading(true);
        let result = json;
        sessionStorage.setItem("id", result.id);
        sessionStorage.setItem("token", result.token);
        sessionStorage.setItem("first_name", result.first_name);
        setTimeout(() => {
          setReloading(false);
          navigate("/multiStep");
        }, 1500);
      } else {
        setErrorMenssage(true);
        setReloading(true);
        setTimeout(() => {
          setErrorMenssage(false);
          setReloading(false);
        }, 5e3);
      }
    });
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
    className: "bg-white",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative md:flex",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "min-h-screen h-full flex flex-col after:flex-1",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex-1",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                className: "block",
                to: "/signin",
                onClick: cleanLocalStorage,
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  src: logohubsupplier,
                  alt: "Logo hubmine"
                }, void 0, false, {
                  fileName: _jsxFileName$R,
                  lineNumber: 88,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$R,
                lineNumber: 84,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$R,
              lineNumber: 82,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$R,
            lineNumber: 81,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "max-w-sm mx-auto py-8 w-full",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-3xl text-slate-800 font-bold mb-6",
              children: "Crea tu cuenta \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$R,
              lineNumber: 94,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
              className: "mb-4 text-sm",
              children: "Vamos a crear una cuenta para que puedas ingresar a nuestro sitio, comp\xE1rtenos los siguientes datos."
            }, void 0, false, {
              fileName: _jsxFileName$R,
              lineNumber: 97,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
              onSubmit: handleSubmit(createAccount),
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "space-y-4",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    htmlFor: "email",
                    children: ["Nombres ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                      className: "text-rose-500",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName$R,
                      lineNumber: 108,
                      columnNumber: 31
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$R,
                    lineNumber: 105,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                    maxLength: "35",
                    autoComplete: "off",
                    className: "form-input w-full capitalize",
                    type: "text"
                  }, register("first_name", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: "El formato no es correcto"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 110,
                    columnNumber: 21
                  }, this), errors.first_name && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-red-500 text-sm",
                    children: errors.first_name.message
                  }, void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 127,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$R,
                  lineNumber: 104,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    children: ["Apellidos", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                      className: "text-rose-500",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName$R,
                      lineNumber: 135,
                      columnNumber: 32
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$R,
                    lineNumber: 134,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                    maxLength: "35",
                    className: "form-input w-full capitalize",
                    autoComplete: "off",
                    type: "text"
                  }, register("last_name", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    },
                    pattern: {
                      value: /[a-zA-Z]/,
                      message: "El formato no es correcto"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 137,
                    columnNumber: 21
                  }, this), " ", errors.last_name && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-red-500 text-sm",
                    children: errors.last_name.message
                  }, void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 154,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$R,
                  lineNumber: 133,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    children: ["Numero de telefono", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                      className: "text-rose-500",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName$R,
                      lineNumber: 162,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$R,
                    lineNumber: 161,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                    disabled: true,
                    className: "form-input w-full capitalize disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none",
                    autoComplete: "off",
                    type: "number"
                  }, register("phone_number", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    },
                    pattern: {
                      value: /[0-9]/,
                      message: "El formato no es correcto"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 164,
                    columnNumber: 21
                  }, this), errors.phone_number && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-red-500 text-sm",
                    children: errors.phone_number.message
                  }, void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 182,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$R,
                  lineNumber: 160,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    children: ["Email", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                      className: "text-rose-500",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName$R,
                      lineNumber: 190,
                      columnNumber: 28
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$R,
                    lineNumber: 189,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                    maxLength: "35",
                    className: "form-input w-full",
                    autoComplete: "off",
                    type: "email"
                  }, register("email", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "El formato no es correcto"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 192,
                    columnNumber: 21
                  }, this), " ", errors.email && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-red-500 text-sm",
                    children: errors.email.message
                  }, void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 209,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$R,
                  lineNumber: 188,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "relative",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    children: ["Contrase\xF1a", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                      className: "text-rose-500",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName$R,
                      lineNumber: 217,
                      columnNumber: 33
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$R,
                    lineNumber: 216,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                    className: "form-input w-full",
                    type: eye ? "text" : "password",
                    autoComplete: "off"
                  }, register("password", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 219,
                    columnNumber: 21
                  }, this), errors.password && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-red-500 text-sm",
                    children: errors.password.message
                  }, void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 231,
                    columnNumber: 23
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                    onClick: toggleEye,
                    type: "button",
                    className: "absolute right-0 top-5 mt-3 mr-4",
                    children: eye ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M21.27 9.17999C20.98 8.71999 20.67 8.28999 20.35 7.88999C19.98 7.41999 19.28 7.37999 18.86 7.79999L15.86 10.8C16.08 11.46 16.12 12.22 15.92 13.01C15.57 14.42 14.43 15.56 13.02 15.91C12.23 16.11 11.47 16.07 10.81 15.85C10.81 15.85 9.38001 17.28 8.35001 18.31C7.85001 18.81 8.01001 19.69 8.68001 19.95C9.75001 20.36 10.86 20.57 12 20.57C13.78 20.57 15.51 20.05 17.09 19.08C18.7 18.08 20.15 16.61 21.32 14.74C22.27 13.23 22.22 10.69 21.27 9.17999Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$R,
                        lineNumber: 246,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M14.02 9.98001L9.98001 14.02C9.47001 13.5 9.14001 12.78 9.14001 12C9.14001 10.43 10.42 9.14001 12 9.14001C12.78 9.14001 13.5 9.47001 14.02 9.98001Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$R,
                        lineNumber: 250,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M18.25 5.74999L14.86 9.13999C14.13 8.39999 13.12 7.95999 12 7.95999C9.76 7.95999 7.96 9.76999 7.96 12C7.96 13.12 8.41 14.13 9.14 14.86L5.76 18.25H5.75C4.64 17.35 3.62 16.2 2.75 14.84C1.75 13.27 1.75 10.72 2.75 9.14999C3.91 7.32999 5.33 5.89999 6.91 4.91999C8.49 3.95999 10.22 3.42999 12 3.42999C14.23 3.42999 16.39 4.24999 18.25 5.74999Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$R,
                        lineNumber: 254,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M14.86 12C14.86 13.57 13.58 14.86 12 14.86C11.94 14.86 11.89 14.86 11.83 14.84L14.84 11.83C14.86 11.89 14.86 11.94 14.86 12Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$R,
                        lineNumber: 258,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M21.77 2.23C21.47 1.93 20.98 1.93 20.68 2.23L2.23 20.69C1.93 20.99 1.93 21.48 2.23 21.78C2.38 21.92 2.57 22 2.77 22C2.97 22 3.16 21.92 3.31 21.77L21.77 3.31C22.08 3.01 22.08 2.53 21.77 2.23Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$R,
                        lineNumber: 262,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$R,
                      lineNumber: 240,
                      columnNumber: 25
                    }, this) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M21.25 9.14999C18.94 5.51999 15.56 3.42999 12 3.42999C10.22 3.42999 8.49 3.94999 6.91 4.91999C5.33 5.89999 3.91 7.32999 2.75 9.14999C1.75 10.72 1.75 13.27 2.75 14.84C5.06 18.48 8.44 20.56 12 20.56C13.78 20.56 15.51 20.04 17.09 19.07C18.67 18.09 20.09 16.66 21.25 14.84C22.25 13.28 22.25 10.72 21.25 9.14999ZM12 16.04C9.76 16.04 7.96 14.23 7.96 12C7.96 9.76999 9.76 7.95999 12 7.95999C14.24 7.95999 16.04 9.76999 16.04 12C16.04 14.23 14.24 16.04 12 16.04Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$R,
                        lineNumber: 274,
                        columnNumber: 27
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                        d: "M12 9.14001C10.43 9.14001 9.15002 10.42 9.15002 12C9.15002 13.57 10.43 14.85 12 14.85C13.57 14.85 14.86 13.57 14.86 12C14.86 10.43 13.57 9.14001 12 9.14001Z",
                        fill: "#BBC0C9"
                      }, void 0, false, {
                        fileName: _jsxFileName$R,
                        lineNumber: 278,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$R,
                      lineNumber: 268,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 235,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$R,
                  lineNumber: 215,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$R,
                lineNumber: 103,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "flex items-center justify-center mt-6",
                children: reloading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
                  fileName: _jsxFileName$R,
                  lineNumber: 289,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                    type: "submit",
                    className: "btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3",
                    children: "Crear cuenta"
                  }, void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 292,
                    columnNumber: 23
                  }, this)
                }, void 0, false)
              }, void 0, false, {
                fileName: _jsxFileName$R,
                lineNumber: 287,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$R,
              lineNumber: 102,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "pt-5 mt-6 border-t border-slate-200",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-sm",
                children: ["Tienes una cuenta?", " ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                  className: "font-medium text-primary hover:text-slate-500",
                  to: "/signin",
                  onClick: cleanLocalStorage,
                  children: "Iniciar sesi\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName$R,
                  lineNumber: 305,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$R,
                lineNumber: 303,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$R,
              lineNumber: 302,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mt-5",
              children: errorMenssage && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "bg-red-100 text-red-600 px-3 py-2 rounded",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                  className: "inline w-4 h-4 shrink-0 fill-current mr-2",
                  viewBox: "0 0 17 17",
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
                  }, void 0, false, {
                    fileName: _jsxFileName$R,
                    lineNumber: 319,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName$R,
                  lineNumber: 316,
                  columnNumber: 21
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-sm",
                  children: "Problemas para crear la cuenta, el email ya existe o el n\xFAmero de tel\xE9fono es diferente al que ingresaste al generar el c\xF3digo de verificaci\xF3n."
                }, void 0, false, {
                  fileName: _jsxFileName$R,
                  lineNumber: 321,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$R,
                lineNumber: 315,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$R,
              lineNumber: 313,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$R,
            lineNumber: 93,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$R,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$R,
        lineNumber: 78,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
        "aria-hidden": "true",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "object-cover object-center w-full h-full",
          src: CreateAccount,
          width: "760",
          height: "1024",
          alt: "Authentication"
        }, void 0, false, {
          fileName: _jsxFileName$R,
          lineNumber: 337,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block",
          src: AuthDecoration,
          width: "218",
          height: "224",
          alt: "Authentication decoration"
        }, void 0, false, {
          fileName: _jsxFileName$R,
          lineNumber: 344,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$R,
        lineNumber: 334,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$R,
      lineNumber: 76,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$R,
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
var _jsxFileName$Q = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/ResetPassword.jsx";
function ResetPassword() {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
    className: "bg-white",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative md:flex",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "min-h-screen h-full flex flex-col after:flex-1",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex-1",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                className: "block",
                to: "/",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                  width: "143",
                  height: "33",
                  viewBox: "0 0 143 33",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    d: "M26.5922 33H5.47462C2.4507 33 0 30.5542 0 27.5363V6.46366C0 3.44579 2.4507 0.99998 5.47462 0.99998H26.5894C29.6134 0.99998 32.0641 3.44579 32.0641 6.46366V27.5363C32.0641 30.5542 29.6134 33 26.5922 33Z",
                    fill: "#0DB1AC"
                  }, void 0, false, {
                    fileName: _jsxFileName$Q,
                    lineNumber: 25,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    d: "M24.4351 23.2469H14.2003C12.3865 23.2469 11.2566 21.3538 12.1732 19.8476L17.2906 11.4352C18.1962 9.94556 20.4364 9.94556 21.3447 11.4352L26.4621 19.8476C27.3787 21.3538 26.2489 23.2469 24.4351 23.2469Z",
                    fill: "white"
                  }, void 0, false, {
                    fileName: _jsxFileName$Q,
                    lineNumber: 29,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    d: "M17.4347 23.5951H7.54878C5.79867 23.5951 4.70762 21.7656 5.59098 20.3119L10.5339 12.1896C11.409 10.7498 13.5717 10.7498 14.4467 12.1896L19.3897 20.3119C20.2758 21.7683 19.1848 23.5951 17.4347 23.5951Z",
                    fill: "#D8F6F0"
                  }, void 0, false, {
                    fileName: _jsxFileName$Q,
                    lineNumber: 33,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    d: "M39.8646 19.06V1.77036H43.5201V8.90407H50.9408V1.77036H54.5879V19.06H50.9408V11.9179H43.5201V19.06H39.8646ZM65.8498 13.5388V6.09274H69.4462V19.06H65.9934V16.7046H65.8583C65.5656 17.4644 65.0788 18.0752 64.3978 18.5366C63.7224 18.9981 62.8978 19.2288 61.9242 19.2288C61.0574 19.2288 60.2948 19.0319 59.6364 18.6379C58.9779 18.244 58.4629 17.684 58.0914 16.9579C57.7255 16.2319 57.5398 15.3624 57.5342 14.3492V6.09274H61.1305V13.7076C61.1362 14.4731 61.3416 15.0781 61.7469 15.5227C62.1521 15.9674 62.6952 16.1897 63.3762 16.1897C63.8097 16.1897 64.2149 16.0911 64.5919 15.8942C64.969 15.6916 65.2729 15.3933 65.5036 14.9993C65.7401 14.6053 65.8555 14.1185 65.8498 13.5388ZM72.3904 19.06V1.77036H75.9868V8.27091H76.0965C76.2542 7.92197 76.482 7.56735 76.7804 7.20718C77.0843 6.84134 77.4783 6.53743 77.9623 6.29534C78.4519 6.0477 79.0598 5.92395 79.7859 5.92395C80.7314 5.92395 81.6037 6.17159 82.4029 6.66687C83.2021 7.15647 83.8409 7.89661 84.3193 8.88717C84.7977 9.87204 85.0369 11.1075 85.0369 12.5933C85.0369 14.0398 84.8034 15.2611 84.3362 16.2572C83.8747 17.2477 83.2444 17.9991 82.4452 18.5113C81.6515 19.0178 80.7623 19.2711 79.7774 19.2711C79.0795 19.2711 78.4857 19.1557 77.9961 18.9249C77.5121 18.6942 77.1153 18.4044 76.8057 18.0553C76.4962 17.7009 76.2598 17.3435 76.0965 16.9833H75.9362V19.06H72.3904ZM75.9108 12.5764C75.9108 13.3474 76.0178 14.02 76.2316 14.5941C76.4454 15.1682 76.755 15.6155 77.1602 15.9364C77.5656 16.2516 78.0579 16.4092 78.6377 16.4092C79.223 16.4092 79.7182 16.2487 80.1236 15.928C80.5288 15.6015 80.8355 15.1513 81.0437 14.5772C81.2576 13.9975 81.3645 13.3305 81.3645 12.5764C81.3645 11.8278 81.2603 11.1694 81.0522 10.601C80.8439 10.0325 80.5372 9.58782 80.1319 9.26701C79.7267 8.9462 79.2286 8.78586 78.6377 8.78586C78.0524 8.78586 77.5571 8.94065 77.1519 9.2501C76.7523 9.55969 76.4454 9.9987 76.2316 10.5671C76.0178 11.1356 75.9108 11.8053 75.9108 12.5764Z",
                    fill: "#2D3139"
                  }, void 0, false, {
                    fileName: _jsxFileName$Q,
                    lineNumber: 37,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    d: "M87.4367 19.0601V6.09276H90.8642V8.38068H91.0162C91.2863 7.62086 91.7365 7.02137 92.3669 6.58249C92.9973 6.14348 93.7515 5.92397 94.6295 5.92397C95.5188 5.92397 96.2757 6.14625 96.9004 6.59081C97.5252 7.02982 97.9416 7.6264 98.1499 8.38068H98.2849C98.5494 7.63776 99.0278 7.04396 99.7202 6.59927C100.418 6.14903 101.243 5.92397 102.194 5.92397C103.404 5.92397 104.386 6.30949 105.14 7.08054C105.9 7.84591 106.28 8.93222 106.28 10.3392V19.0601H102.692V11.0483C102.692 10.328 102.5 9.78766 102.118 9.4275C101.735 9.0672 101.257 8.88718 100.683 8.88718C100.03 8.88718 99.5203 9.09546 99.1545 9.51189C98.7886 9.92277 98.6057 10.4659 98.6057 11.1413V19.0601H95.1191V10.9724C95.1191 10.3364 94.9362 9.82993 94.5703 9.45286C94.2102 9.07565 93.7346 8.88718 93.1437 8.88718C92.744 8.88718 92.3838 8.98848 92.063 9.19109C91.7479 9.38801 91.4974 9.66668 91.3117 10.0269C91.126 10.3815 91.0331 10.7979 91.0331 11.2763V19.0601H87.4367ZM109.121 19.0601V6.09276H112.717V19.0601H109.121ZM110.927 4.42123C110.393 4.42123 109.934 4.24399 109.551 3.88937C109.174 3.52921 108.986 3.09864 108.986 2.59769C108.986 2.10241 109.174 1.67753 109.551 1.32291C109.934 0.962742 110.393 0.782593 110.927 0.782593C111.462 0.782593 111.918 0.962742 112.295 1.32291C112.678 1.67753 112.869 2.10241 112.869 2.59769C112.869 3.09864 112.678 3.52921 112.295 3.88937C111.918 4.24399 111.462 4.42123 110.927 4.42123ZM119.194 11.5634V19.0601H115.598V6.09276H119.025V8.38068H119.177C119.464 7.6264 119.946 7.02982 120.621 6.59081C121.296 6.14625 122.115 5.92397 123.078 5.92397C123.978 5.92397 124.763 6.12089 125.433 6.51487C126.103 6.90885 126.623 7.47175 126.995 8.2033C127.366 8.92931 127.552 9.79611 127.552 10.8036V19.0601H123.956V11.4452C123.961 10.6516 123.759 10.0325 123.348 9.58784C122.937 9.1376 122.371 8.91254 121.651 8.91254C121.167 8.91254 120.739 9.01661 120.368 9.22489C120.002 9.43304 119.715 9.73708 119.507 10.1366C119.304 10.5306 119.2 11.0062 119.194 11.5634ZM136.296 19.3134C134.962 19.3134 133.814 19.0431 132.852 18.5028C131.895 17.957 131.158 17.1859 130.64 16.1897C130.122 15.1879 129.863 14.0032 129.863 12.6356C129.863 11.3016 130.122 10.1309 130.64 9.12359C131.158 8.11613 131.886 7.33095 132.826 6.76819C133.772 6.20529 134.881 5.92397 136.153 5.92397C137.008 5.92397 137.804 6.06185 138.542 6.33763C139.285 6.60772 139.932 7.01583 140.483 7.56169C141.041 8.10768 141.474 8.79433 141.784 9.62164C142.093 10.4434 142.248 11.4057 142.248 12.5089V13.4966L133.417 13.505V11.2678H138.863C138.863 10.7501 138.75 10.2914 138.525 9.89174C138.3 9.49221 137.987 9.17986 137.588 8.95467C137.194 8.72394 136.735 8.60851 136.212 8.60851C135.666 8.60851 135.182 8.73517 134.76 8.98848C134.343 9.23612 134.017 9.57093 133.78 9.99304C133.544 10.4096 133.423 10.7556 133.417 11.2678V13.505C133.417 14.1466 133.535 14.7011 133.772 15.1682C134.014 15.6354 134.354 15.9955 134.793 16.2487C135.232 16.502 135.753 16.6287 136.355 16.6287C136.755 16.6287 137.121 16.5724 137.453 16.4598C137.785 16.3473 138.069 16.1785 138.305 15.9533C138.542 15.7282 138.722 15.4525 138.846 15.126L142.172 15.3455C142.003 16.1446 141.657 16.8425 141.134 17.4391C140.616 18.0301 139.946 18.4916 139.124 18.8236C138.308 19.1501 137.365 19.3134 136.296 19.3134Z",
                    fill: "#0DB1AC"
                  }, void 0, false, {
                    fileName: _jsxFileName$Q,
                    lineNumber: 41,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    d: "M40 30.7407V23.1044H41.6145V26.2551H44.8921V23.1044H46.5029V30.7407H44.8921V27.5862H41.6145V30.7407H40ZM47.8341 30.7407V23.1044H50.8468C51.4235 23.1044 51.9157 23.2075 52.3234 23.4138C52.7335 23.6177 53.0455 23.9073 53.2593 24.2826C53.4756 24.6555 53.5836 25.0943 53.5836 25.5989C53.5836 26.106 53.4743 26.5422 53.2555 26.9076C53.0368 27.2706 52.7198 27.549 52.3047 27.7428C51.8921 27.9368 51.3924 28.0337 50.8058 28.0337H48.7886V26.7361H50.5448C50.853 26.7361 51.1091 26.6939 51.3129 26.6094C51.5167 26.5248 51.6684 26.3981 51.7678 26.2291C51.8697 26.06 51.9206 25.8499 51.9206 25.5989C51.9206 25.3453 51.8697 25.1316 51.7678 24.9576C51.6684 24.7836 51.5155 24.6518 51.3092 24.5623C51.1053 24.4703 50.8481 24.4243 50.5374 24.4243H49.4486V30.7407H47.8341ZM51.9579 27.2656L53.8559 30.7407H52.0736L50.2167 27.2656H51.9579ZM61.2974 25.3005C61.2676 24.9998 61.1396 24.7662 60.9134 24.5996C60.6871 24.433 60.3801 24.3498 59.9924 24.3498C59.7288 24.3498 59.5064 24.387 59.3249 24.4616C59.1434 24.5337 59.0042 24.6344 58.9073 24.7636C58.8128 24.8929 58.7656 25.0395 58.7656 25.2036C58.7607 25.3404 58.7892 25.4597 58.8514 25.5616C58.916 25.6636 59.0043 25.7517 59.1161 25.8263C59.228 25.8984 59.3572 25.9618 59.5039 26.0165C59.6505 26.0687 59.8071 26.1135 59.9737 26.1508L60.6598 26.3148C60.9929 26.3894 61.2986 26.4888 61.577 26.613C61.8554 26.7374 62.0966 26.8903 62.3004 27.0718C62.5043 27.2532 62.6621 27.4669 62.774 27.7131C62.8883 27.9591 62.9467 28.2413 62.9492 28.5594C62.9467 29.0268 62.8274 29.432 62.5913 29.775C62.3576 30.1155 62.0195 30.3803 61.577 30.5692C61.137 30.7557 60.6063 30.8489 59.9849 30.8489C59.3685 30.8489 58.8314 30.7544 58.3741 30.5655C57.9192 30.3765 57.5637 30.097 57.3077 29.7265C57.0542 29.3537 56.9211 28.8925 56.9088 28.3432H58.4711C58.4885 28.5992 58.5617 28.813 58.691 28.9846C58.8227 29.1536 58.998 29.2816 59.2168 29.3686C59.4381 29.4531 59.6879 29.4954 59.9663 29.4954C60.2397 29.4954 60.4771 29.4556 60.6784 29.376C60.8823 29.2965 61.0401 29.1858 61.152 29.0442C61.2639 28.9025 61.3198 28.7397 61.3198 28.5557C61.3198 28.3843 61.2688 28.24 61.1669 28.1232C61.0674 28.0064 60.9208 27.907 60.7269 27.8249C60.5355 27.7429 60.3006 27.6683 60.0222 27.6012L59.1907 27.3924C58.5469 27.2358 58.0386 26.9909 57.6657 26.6578C57.2928 26.3247 57.1076 25.876 57.1101 25.3118C57.1076 24.8494 57.2306 24.4455 57.4792 24.0999C57.7303 23.7544 58.0745 23.4847 58.512 23.2908C58.9496 23.0969 59.4467 23 60.0035 23C60.5703 23 61.065 23.0969 61.4876 23.2908C61.9126 23.4847 62.2433 23.7544 62.4794 24.0999C62.7155 24.4455 62.8373 24.8457 62.8448 25.3005H61.2974ZM64.986 32.8885C64.7847 32.8885 64.5957 32.8723 64.4193 32.84C64.2453 32.8101 64.101 32.7717 63.9867 32.7244L64.3447 31.5387C64.5311 31.5959 64.6989 31.627 64.848 31.6319C64.9997 31.6369 65.1302 31.602 65.2395 31.5275C65.3514 31.4529 65.4422 31.3261 65.5118 31.1472L65.605 30.9048L63.5505 25.0135H65.2209L66.4067 29.2194H66.4663L67.6632 25.0135H69.3449L67.1188 31.3597C67.0119 31.668 66.8665 31.9364 66.6825 32.1651C66.5011 32.3963 66.2712 32.574 65.9928 32.6983C65.7144 32.8251 65.3787 32.8885 64.986 32.8885ZM74.923 26.6466L73.4688 26.7361C73.4439 26.6118 73.3905 26.4999 73.3085 26.4006C73.2264 26.2986 73.1183 26.2179 72.984 26.1582C72.8523 26.0961 72.6945 26.0649 72.5105 26.0649C72.2644 26.0649 72.0569 26.1171 71.8878 26.2215C71.7188 26.3235 71.6343 26.4602 71.6343 26.6317C71.6343 26.7685 71.6889 26.884 71.7984 26.9785C71.9077 27.0729 72.0954 27.1488 72.3614 27.2059L73.3979 27.4147C73.9547 27.5291 74.3699 27.7131 74.6433 27.9666C74.9168 28.2202 75.0535 28.5532 75.0535 28.9659C75.0535 29.3412 74.9429 29.6706 74.7216 29.954C74.5028 30.2373 74.2021 30.4586 73.8193 30.6177C73.439 30.7743 73.0002 30.8526 72.503 30.8526C71.7449 30.8526 71.1408 30.6948 70.6909 30.3791C70.2434 30.0609 69.9812 29.6284 69.9042 29.0815L71.4665 28.9995C71.5137 29.2306 71.628 29.4071 71.8095 29.5289C71.991 29.6482 72.2234 29.7079 72.5068 29.7079C72.7852 29.7079 73.0089 29.6544 73.178 29.5476C73.3495 29.4382 73.4365 29.2978 73.439 29.1262C73.4365 28.9821 73.3756 28.8639 73.2563 28.772C73.137 28.6776 72.953 28.6054 72.7044 28.5557L71.7125 28.3581C71.1533 28.2462 70.7369 28.0524 70.4634 27.7764C70.1925 27.5005 70.057 27.1488 70.057 26.7212C70.057 26.3533 70.1565 26.0364 70.3554 25.7704C70.5567 25.5044 70.8388 25.2994 71.2017 25.1552C71.5671 25.011 71.9947 24.9389 72.4844 24.9389C73.2078 24.9389 73.777 25.0918 74.1921 25.3975C74.6098 25.7033 74.8534 26.1196 74.923 26.6466ZM79.0998 25.0135V26.2066H75.651V25.0135H79.0998ZM76.434 23.6413H78.0221V28.9808C78.0221 29.1275 78.0446 29.2418 78.0896 29.3239C78.1346 29.4034 78.1968 29.4593 78.2763 29.4916C78.3581 29.5239 78.4526 29.5401 78.5591 29.5401C78.6341 29.5401 78.7083 29.5339 78.7833 29.5215C78.8576 29.5065 78.9146 29.4954 78.9543 29.4879L79.2041 30.6699C79.1246 30.6948 79.0128 30.7234 78.8688 30.7557C78.7248 30.7905 78.5493 30.8116 78.3431 30.819C77.9606 30.834 77.6246 30.783 77.3366 30.6662C77.0508 30.5493 76.828 30.3679 76.6689 30.1218C76.5099 29.8757 76.4316 29.565 76.434 29.1896V23.6413ZM82.6833 30.8526C82.0938 30.8526 81.5868 30.7333 81.1623 30.4947C80.7393 30.2536 80.4138 29.913 80.1851 29.473C79.9563 29.0305 79.8423 28.5072 79.8423 27.9032C79.8423 27.3141 79.9563 26.797 80.1851 26.352C80.4138 25.9071 80.7356 25.5603 81.1511 25.3118C81.5681 25.0632 82.0578 24.9389 82.6196 24.9389C82.9976 24.9389 83.3493 24.9998 83.6748 25.1216C84.0033 25.2409 84.2891 25.4211 84.5328 25.6623C84.7788 25.9034 84.9701 26.2066 85.1073 26.5721C85.2438 26.935 85.3121 27.36 85.3121 27.8472V28.2835H80.4761V27.2992H83.8166C83.8166 27.0705 83.7671 26.8679 83.6673 26.6914C83.5683 26.5149 83.4303 26.3769 83.2541 26.2775C83.0801 26.1756 82.8776 26.1246 82.6458 26.1246C82.4051 26.1246 82.1913 26.1805 82.0046 26.2924C81.8208 26.4018 81.6768 26.5497 81.5718 26.7361C81.4676 26.9201 81.4143 27.1251 81.4121 27.3513V28.2873C81.4121 28.5706 81.4638 28.8155 81.5681 29.0218C81.6753 29.2281 81.8261 29.3872 82.0196 29.4991C82.2138 29.611 82.4433 29.6669 82.7096 29.6669C82.8858 29.6669 83.0478 29.642 83.1941 29.5923C83.3411 29.5426 83.4663 29.468 83.5706 29.3686C83.6748 29.2692 83.7543 29.1474 83.8091 29.0031L85.2783 29.1001C85.2041 29.4531 85.0511 29.7613 84.8201 30.0249C84.5913 30.2859 84.2951 30.4897 83.9321 30.6364C83.5721 30.7805 83.1558 30.8526 82.6833 30.8526ZM86.3486 30.7407V25.0135H87.8628V26.0239H87.9296C88.0488 25.6884 88.2476 25.4236 88.5258 25.2297C88.8048 25.0359 89.1378 24.9389 89.5256 24.9389C89.9186 24.9389 90.2523 25.0371 90.5283 25.2335C90.8043 25.4274 90.9881 25.6908 91.0803 26.0239H91.1403C91.2566 25.6958 91.4681 25.4336 91.7741 25.2372C92.0823 25.0383 92.4461 24.9389 92.8661 24.9389C93.4008 24.9389 93.8343 25.1092 94.1673 25.4497C94.5033 25.7878 94.6713 26.2675 94.6713 26.889V30.7407H93.0866V27.2023C93.0866 26.884 93.0018 26.6454 92.8331 26.4863C92.6636 26.3272 92.4528 26.2477 92.1986 26.2477C91.9106 26.2477 91.6856 26.3397 91.5243 26.5236C91.3623 26.7051 91.2813 26.9449 91.2813 27.2432V30.7407H89.7416V27.1687C89.7416 26.8878 89.6606 26.664 89.4993 26.4975C89.3403 26.331 89.1303 26.2477 88.8693 26.2477C88.6931 26.2477 88.5333 26.2924 88.3916 26.3819C88.2528 26.4689 88.1418 26.592 88.0601 26.751C87.9783 26.9076 87.9371 27.0916 87.9371 27.3029V30.7407H86.3486Z",
                    fill: "#8B8A8A"
                  }, void 0, false, {
                    fileName: _jsxFileName$Q,
                    lineNumber: 45,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$Q,
                  lineNumber: 19,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$Q,
                lineNumber: 18,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$Q,
              lineNumber: 16,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$Q,
            lineNumber: 15,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "max-w-lg mx-auto px-4 py-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-3xl text-slate-800 font-bold mb-6",
              children: "Recupera tu contrase\xF1a \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$Q,
              lineNumber: 55,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "space-y-4",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    htmlFor: "email",
                    children: ["Correo electr\xF3nico", " ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                      className: "text-rose-500",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName$Q,
                      lineNumber: 66,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$Q,
                    lineNumber: 62,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                    id: "email",
                    className: "form-input w-full",
                    type: "email"
                  }, void 0, false, {
                    fileName: _jsxFileName$Q,
                    lineNumber: 68,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$Q,
                  lineNumber: 61,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$Q,
                lineNumber: 60,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "flex justify-end mt-6",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                  className: "btn bg-secondary hover:bg-primary hover:text-white text-primary whitespace-nowrap",
                  children: "Enviar link de recuperaci\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName$Q,
                  lineNumber: 76,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$Q,
                lineNumber: 75,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$Q,
              lineNumber: 59,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$Q,
            lineNumber: 54,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$Q,
          lineNumber: 13,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$Q,
        lineNumber: 12,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
        "aria-hidden": "true",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "object-cover object-center w-full h-full",
          src: AuthImage,
          width: "760",
          height: "1024",
          alt: "Authentication"
        }, void 0, false, {
          fileName: _jsxFileName$Q,
          lineNumber: 89,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block",
          src: AuthDecoration,
          width: "218",
          height: "224",
          alt: "Authentication decoration"
        }, void 0, false, {
          fileName: _jsxFileName$Q,
          lineNumber: 96,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$Q,
        lineNumber: 86,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$Q,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$Q,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var style = "";
var customPhoneNumberInput = "";
var _jsxFileName$P = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/PhoneCodeGenerator.jsx";
function PhoneCodeGenerator() {
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors
    }
  } = useForm();
  const {
    loading,
    codeGenerator,
    errorApi
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
    className: "bg-white",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative md:flex",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "min-h-screen h-full flex flex-col after:flex-1",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex-1",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                to: "/signin",
                className: "block",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  src: logohubsupplier,
                  alt: "logo hubmine"
                }, void 0, false, {
                  fileName: _jsxFileName$P,
                  lineNumber: 34,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$P,
                lineNumber: 33,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$P,
              lineNumber: 31,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$P,
            lineNumber: 30,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "max-w-lg mx-auto px-4 py-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-3xl text-slate-800 font-bold mb-6",
              children: "Solicita un c\xF3digo \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$P,
              lineNumber: 40,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                className: "text-sm",
                children: "Introduce un n\xFAmero de tel\xE9fono para que puedas generar un c\xF3digo de verificaci\xF3n."
              }, void 0, false, {
                fileName: _jsxFileName$P,
                lineNumber: 44,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$P,
              lineNumber: 43,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
              onSubmit: handleSubmit(codeGenerator),
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "space-y-4 mt-10",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                    className: "block text-sm font-medium mb-1",
                    htmlFor: "number",
                    children: ["N\xFAmero de tel\xE9fono", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                      className: "text-rose-500",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName$P,
                      lineNumber: 56,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$P,
                    lineNumber: 53,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Controller, {
                    control,
                    name: "number",
                    rules: {
                      required: true
                    },
                    render: (_a) => {
                      var {
                        field: _b
                      } = _a, _c = _b, {
                        ref
                      } = _c, field = __objRest(_c, [
                        "ref"
                      ]);
                      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(lib, __spreadProps(__spreadValues({}, field), {
                        inputExtraProps: {
                          ref,
                          required: true,
                          autoFocus: true
                        },
                        country: "mx",
                        countryCodeEditable: false,
                        specialLabel: "Player Mobile Number"
                      }), void 0, false, {
                        fileName: _jsxFileName$P,
                        lineNumber: 63,
                        columnNumber: 25
                      }, this);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName$P,
                    lineNumber: 58,
                    columnNumber: 21
                  }, this), errors.number && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-red-500 text-sm",
                    children: errors.number.message
                  }, void 0, false, {
                    fileName: _jsxFileName$P,
                    lineNumber: 77,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$P,
                  lineNumber: 52,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$P,
                lineNumber: 51,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "flex items-center justify-start mt-6",
                children: loading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
                  fileName: _jsxFileName$P,
                  lineNumber: 85,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                    type: "submit",
                    className: "btn bg-secondary hover:bg-primary hover:text-white text-primary  disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none",
                    children: "Generar c\xF3digo"
                  }, void 0, false, {
                    fileName: _jsxFileName$P,
                    lineNumber: 88,
                    columnNumber: 23
                  }, this)
                }, void 0, false)
              }, void 0, false, {
                fileName: _jsxFileName$P,
                lineNumber: 83,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$P,
              lineNumber: 50,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "pt-5 mt-6 ",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-sm",
                children: ["\xBFTienes cuenta?", " ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                  className: "font-medium text-primary hover:text-slate-500",
                  to: "/signin",
                  children: "Iniciar sesi\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName$P,
                  lineNumber: 102,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$P,
                lineNumber: 100,
                columnNumber: 17
              }, this), errorApi && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "mt-5",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "bg-red-100 text-red-600 px-3 py-2 rounded",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                    className: "inline w-4 h-4 shrink-0 fill-current mr-2",
                    viewBox: "0 0 17 17",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
                    }, void 0, false, {
                      fileName: _jsxFileName$P,
                      lineNumber: 115,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$P,
                    lineNumber: 112,
                    columnNumber: 23
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-sm",
                    children: "Lo sentimos, al parecer tenemos problemas con nuestro servidor, vuelva a intentar m\xE1s tarde."
                  }, void 0, false, {
                    fileName: _jsxFileName$P,
                    lineNumber: 117,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$P,
                  lineNumber: 111,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$P,
                lineNumber: 110,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$P,
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$P,
            lineNumber: 39,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$P,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$P,
        lineNumber: 27,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "object-cover object-center w-full h-full",
          src: AuthImage,
          width: "760",
          height: "1024",
          alt: "Authentication"
        }, void 0, false, {
          fileName: _jsxFileName$P,
          lineNumber: 133,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$P,
        lineNumber: 130,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$P,
      lineNumber: 25,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$P,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var _jsxFileName$O = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/ValidationCode.jsx";
const ValidationCode = () => {
  const navigate = useNavigate();
  const {
    errorApi,
    setErrorApi,
    savedCode,
    codeGenerator
  } = react.exports.useContext(StateContext);
  const [otp, setOtp] = react.exports.useState(new Array(5).fill(""));
  const [counter, setCounter] = react.exports.useState(10);
  const [containerChange, setContainerChange] = react.exports.useState(false);
  const [buttonLoading, setButtonLoading] = react.exports.useState(false);
  const deleteCodeLocalStorage = () => sessionStorage.removeItem("code");
  react.exports.useEffect(() => {
    if (counter) {
      const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1e3);
      return () => clearInterval(timer);
    } else if (counter === 0) {
      setContainerChange(true);
    }
  }, [counter]);
  const codeValue = {
    code: otp.join(""),
    number: savedCode.number
  };
  const phoneUser = savedCode.number;
  const newCode = {
    number: phoneUser
  };
  const code = savedCode.code;
  const handleChange = (element, index2) => {
    if (isNaN(element.value))
      return false;
    setOtp([...otp.map((d, idx) => idx === index2 ? element.value : d)]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  async function codeValidation() {
    return fetch("http://supplier.hubmine.mx/api/auth/validate/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(codeValue)
    }).then((response) => response.json()).then((json) => {
      if (json.msg === "Ok") {
        setButtonLoading(true);
        let result = json;
        sessionStorage.setItem("number", result.number);
        setTimeout(() => {
          setButtonLoading(false);
          navigate("/signup");
        }, 1500);
      } else {
        setErrorApi(true);
        setButtonLoading(true);
        setTimeout(() => {
          setErrorApi(false);
          setButtonLoading(false);
        }, 5e3);
      }
    });
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
    className: "bg-white",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative md:flex",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "min-h-screen h-full flex flex-col after:flex-1",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex-1",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                to: "/signin",
                className: "block",
                onClick: deleteCodeLocalStorage,
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  src: logohubsupplier,
                  alt: "logo hubmine"
                }, void 0, false, {
                  fileName: _jsxFileName$O,
                  lineNumber: 91,
                  columnNumber: 19
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$O,
                lineNumber: 87,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$O,
              lineNumber: 85,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$O,
            lineNumber: 84,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "max-w-lg mx-auto px-4 py-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-3xl text-slate-800 font-bold mb-6",
              children: "Verificaci\xF3n del c\xF3digo \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$O,
              lineNumber: 97,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: " mb-6 text-center flex flex-col",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h5", {
                className: "text-md text-slate-800 font-bold",
                children: "Te enviamos un c\xF3digo al:"
              }, void 0, false, {
                fileName: _jsxFileName$O,
                lineNumber: 101,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 font-bold",
                children: phoneUser
              }, void 0, false, {
                fileName: _jsxFileName$O,
                lineNumber: 104,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 font-bold",
                children: ["tu codigo: ", code]
              }, void 0, true, {
                fileName: _jsxFileName$O,
                lineNumber: 105,
                columnNumber: 17
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$O,
              lineNumber: 100,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                className: "text-sm",
                children: "Introduce el c\xF3digo que te hicimos llegar por mensaje SMS."
              }, void 0, false, {
                fileName: _jsxFileName$O,
                lineNumber: 110,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$O,
              lineNumber: 109,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "space-x-10 mt-5 flex justify-center items-center",
                children: otp.map((data, index2) => {
                  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                    className: "form-input w-10 text-xl",
                    type: "text",
                    name: "otp",
                    maxLength: "1",
                    value: data,
                    onChange: (e) => handleChange(e.target, index2),
                    onFocus: (e) => e.target.select()
                  }, index2, false, {
                    fileName: _jsxFileName$O,
                    lineNumber: 119,
                    columnNumber: 23
                  }, globalThis);
                })
              }, void 0, false, {
                fileName: _jsxFileName$O,
                lineNumber: 116,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "flex items-center justify-end mt-16",
                children: buttonLoading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
                  fileName: _jsxFileName$O,
                  lineNumber: 134,
                  columnNumber: 21
                }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                    onClick: codeValidation,
                    type: "button",
                    className: "btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3",
                    children: "Validar c\xF3digo"
                  }, void 0, false, {
                    fileName: _jsxFileName$O,
                    lineNumber: 137,
                    columnNumber: 23
                  }, globalThis)
                }, void 0, false)
              }, void 0, false, {
                fileName: _jsxFileName$O,
                lineNumber: 132,
                columnNumber: 17
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$O,
              lineNumber: 115,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "pt-5 mt-6 space-y-6 ",
              children: [!containerChange ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-sm text-center",
                children: ["Tu c\xF3digo vence en: ", counter, " segundos"]
              }, void 0, true, {
                fileName: _jsxFileName$O,
                lineNumber: 150,
                columnNumber: 19
              }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "flex justify-center items-center",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                  onClick: () => {
                    codeGenerator(newCode);
                    setContainerChange(false);
                    setCounter(10);
                  },
                  className: "text-sm font-medium text-primary hover:text-slate-500",
                  children: "Solicitar c\xF3digo nuevo"
                }, void 0, false, {
                  fileName: _jsxFileName$O,
                  lineNumber: 155,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$O,
                lineNumber: 154,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-sm text-center",
                children: ["\xBFEste no es tu n\xFAmero?", " ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                  onClick: deleteCodeLocalStorage,
                  className: "font-medium text-primary hover:text-secondary",
                  to: "/code/generator",
                  children: "Cambiar n\xFAmero"
                }, void 0, false, {
                  fileName: _jsxFileName$O,
                  lineNumber: 169,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$O,
                lineNumber: 167,
                columnNumber: 17
              }, globalThis), errorApi && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "mt-5",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "bg-red-100 text-red-600 px-3 py-2 rounded",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                    className: "inline w-4 h-4 shrink-0 fill-current mr-2",
                    viewBox: "0 0 17 17",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
                    }, void 0, false, {
                      fileName: _jsxFileName$O,
                      lineNumber: 183,
                      columnNumber: 25
                    }, globalThis)
                  }, void 0, false, {
                    fileName: _jsxFileName$O,
                    lineNumber: 180,
                    columnNumber: 23
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-sm",
                    children: "C\xF3digo incorrecto, verifica que tu c\xF3digo que te llego en un mensaje SMS sea el correspondiente."
                  }, void 0, false, {
                    fileName: _jsxFileName$O,
                    lineNumber: 185,
                    columnNumber: 23
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$O,
                  lineNumber: 179,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$O,
                lineNumber: 178,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$O,
              lineNumber: 148,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$O,
            lineNumber: 96,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$O,
          lineNumber: 82,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$O,
        lineNumber: 81,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
        "aria-hidden": "true",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "object-cover object-center w-full h-full",
          src: AuthImage,
          width: "760",
          height: "1024",
          alt: "Authentication"
        }, void 0, false, {
          fileName: _jsxFileName$O,
          lineNumber: 201,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$O,
        lineNumber: 198,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$O,
      lineNumber: 79,
      columnNumber: 7
    }, globalThis)
  }, void 0, false, {
    fileName: _jsxFileName$O,
    lineNumber: 78,
    columnNumber: 5
  }, globalThis);
};
var Question = "/assets/question.97bcae66.jpg";
var _jsxFileName$N = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/MultiStepForm.jsx";
const MultiStepForm = () => {
  const [step, setStep] = react.exports.useState(0);
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid
    }
  } = useForm({
    mode: "all"
  });
  const navigate = useNavigate();
  let userId = sessionStorage.getItem("id");
  const {
    loading,
    setLoading,
    errorMenssage,
    setErrorMenssage
  } = react.exports.useContext(StateContext);
  const completeFormStep = () => {
    setStep((cur) => cur + 1);
  };
  const previousFormStep = () => {
    setStep((cur) => cur - 1);
  };
  const renderButton = () => {
    if (step > 2) {
      return void 0;
    } else if (step === 2) {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        children: loading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
          fileName: _jsxFileName$N,
          lineNumber: 48,
          columnNumber: 13
        }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
          type: "button",
          disabled: !isValid,
          onClick: handleSubmit(userQuestion),
          className: "btn bg-secondary hover:bg-primary hover:text-white text-primary ml-auto disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none",
          children: "Finalizar ->"
        }, void 0, false, {
          fileName: _jsxFileName$N,
          lineNumber: 50,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$N,
        lineNumber: 46,
        columnNumber: 9
      }, globalThis);
    } else {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
          disabled: !isValid,
          type: "button",
          onClick: completeFormStep,
          className: "btn bg-secondary hover:bg-primary hover:text-white text-primary ml-auto disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed shadow-none",
          children: "Siguiente paso ->"
        }, void 0, false, {
          fileName: _jsxFileName$N,
          lineNumber: 63,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$N,
        lineNumber: 62,
        columnNumber: 9
      }, globalThis);
    }
  };
  async function userQuestion(dataMulti) {
    return fetch(`http://supplier.hubmine.mx/api/suppliers/create/${userId}/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(dataMulti)
    }).then((response) => response.json()).then((json) => {
      if (json.code === 201) {
        setLoading(true);
        localStorage.setItem("first_name", json.first_name);
        localStorage.setItem("supplier_id", json.supplier_id);
        localStorage.setItem("token", json.token);
        setTimeout(() => {
          setLoading(false);
          navigate("/multiStep/end");
        }, 1500);
      } else {
        setErrorMenssage(true);
        setTimeout(() => {
          setErrorMenssage(false);
        }, 3e3);
      }
    });
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
    className: "bg-white",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "w-full md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "min-h-screen h-full flex flex-col after:flex-1",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex-1",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "block",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  src: logohubsupplier,
                  alt: "Logo hubmine"
                }, void 0, false, {
                  fileName: _jsxFileName$N,
                  lineNumber: 113,
                  columnNumber: 19
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$N,
                lineNumber: 112,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$N,
              lineNumber: 110,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$N,
            lineNumber: 108,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "px-4 py-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "max-w-md mx-auto",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
                children: [step === 0 && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "max-w-md mx-auto w-full mb-12",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "relative",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 126,
                        columnNumber: 27
                      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
                        className: "relative flex justify-between w-full",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                            children: "1"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 131,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 130,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500",
                            children: "2"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 136,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 135,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500",
                            children: "3"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 141,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 140,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500",
                            children: "4"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 146,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 145,
                          columnNumber: 29
                        }, globalThis)]
                      }, void 0, true, {
                        fileName: _jsxFileName$N,
                        lineNumber: 129,
                        columnNumber: 27
                      }, globalThis)]
                    }, void 0, true, {
                      fileName: _jsxFileName$N,
                      lineNumber: 125,
                      columnNumber: 25
                    }, globalThis)
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 124,
                    columnNumber: 23
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
                    className: "text-3xl text-slate-800 font-bold mb-6",
                    children: "Cu\xE9ntanos sobre tu empresa \u2728"
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 153,
                    columnNumber: 23
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "space-y-4 mb-8",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        children: ["Marca comercial (Nombre)", " ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-rose-500",
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 161,
                          columnNumber: 29
                        }, globalThis)]
                      }, void 0, true, {
                        fileName: _jsxFileName$N,
                        lineNumber: 159,
                        columnNumber: 27
                      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                        maxLength: "35",
                        autoComplete: "off",
                        className: "form-input w-full capitalize",
                        type: "text"
                      }, register("commercial_brand", {
                        required: {
                          value: true,
                          message: "El campo es requerido"
                        },
                        pattern: {
                          value: /[a-zA-Z]/,
                          message: "El formato no es correcto"
                        }
                      })), void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 163,
                        columnNumber: 27
                      }, globalThis), errors.commercial_brand && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-red-500 text-sm",
                        children: errors.commercial_brand.message
                      }, void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 180,
                        columnNumber: 29
                      }, globalThis)]
                    }, void 0, true, {
                      fileName: _jsxFileName$N,
                      lineNumber: 158,
                      columnNumber: 25
                    }, globalThis)
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 156,
                    columnNumber: 23
                  }, globalThis)]
                }, void 0, true), step === 1 && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "max-w-md mx-auto w-full mb-12",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "relative",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 192,
                        columnNumber: 27
                      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
                        className: "relative flex justify-between w-full",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                            children: "1"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 197,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 196,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                            children: "2"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 202,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 201,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500",
                            children: "3"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 207,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 206,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500",
                            children: "4"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 212,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 211,
                          columnNumber: 29
                        }, globalThis)]
                      }, void 0, true, {
                        fileName: _jsxFileName$N,
                        lineNumber: 195,
                        columnNumber: 27
                      }, globalThis)]
                    }, void 0, true, {
                      fileName: _jsxFileName$N,
                      lineNumber: 191,
                      columnNumber: 25
                    }, globalThis)
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 190,
                    columnNumber: 23
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
                    className: "text-3xl text-slate-800 font-bold mb-6",
                    children: "Datos fiscales \u2728"
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 219,
                    columnNumber: 23
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "space-y-4 mb-8",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        children: ["Raz\xF3n social", " ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-rose-500",
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 227,
                          columnNumber: 29
                        }, globalThis)]
                      }, void 0, true, {
                        fileName: _jsxFileName$N,
                        lineNumber: 225,
                        columnNumber: 27
                      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                        maxLength: "35",
                        autoComplete: "off",
                        className: "form-input w-full uppercase",
                        type: "text"
                      }, register("social_reason", {
                        required: {
                          value: true,
                          message: "El campo es requerido"
                        },
                        pattern: {
                          value: /[a-zA-Z]/,
                          message: "El formato no es correcto"
                        }
                      })), void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 229,
                        columnNumber: 27
                      }, globalThis), errors.social_reason && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-red-500 text-sm",
                        children: errors.social_reason.message
                      }, void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 246,
                        columnNumber: 29
                      }, globalThis)]
                    }, void 0, true, {
                      fileName: _jsxFileName$N,
                      lineNumber: 224,
                      columnNumber: 25
                    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        children: ["RFC", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-rose-500",
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 254,
                          columnNumber: 32
                        }, globalThis)]
                      }, void 0, true, {
                        fileName: _jsxFileName$N,
                        lineNumber: 253,
                        columnNumber: 27
                      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                        maxLength: "13",
                        className: "uppercase form-input w-full ",
                        autoComplete: "off",
                        type: "text"
                      }, register("rfc", {
                        required: {
                          value: true,
                          message: "El campo es requerido"
                        },
                        pattern: {
                          value: /[a-zA-Z0-9]/,
                          message: "El formato no es correcto"
                        },
                        minLength: {
                          value: 13,
                          message: "El RFC debe de tener 13 caracteres"
                        }
                      })), void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 256,
                        columnNumber: 27
                      }, globalThis), " ", errors.rfc && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-red-500 text-sm",
                        children: errors.rfc.message
                      }, void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 277,
                        columnNumber: 29
                      }, globalThis)]
                    }, void 0, true, {
                      fileName: _jsxFileName$N,
                      lineNumber: 252,
                      columnNumber: 25
                    }, globalThis)]
                  }, void 0, true, {
                    fileName: _jsxFileName$N,
                    lineNumber: 222,
                    columnNumber: 23
                  }, globalThis)]
                }, void 0, true), step === 2 && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "max-w-md mx-auto w-full mb-12",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "relative",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200",
                        "aria-hidden": "true"
                      }, void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 289,
                        columnNumber: 27
                      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
                        className: "relative flex justify-between w-full",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                            children: "1"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 294,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 293,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                            children: "2"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 299,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 298,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold  bg-primary text-white",
                            children: "3"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 304,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 303,
                          columnNumber: 29
                        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 text-slate-500",
                            children: "4"
                          }, void 0, false, {
                            fileName: _jsxFileName$N,
                            lineNumber: 309,
                            columnNumber: 31
                          }, globalThis)
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 308,
                          columnNumber: 29
                        }, globalThis)]
                      }, void 0, true, {
                        fileName: _jsxFileName$N,
                        lineNumber: 292,
                        columnNumber: 27
                      }, globalThis)]
                    }, void 0, true, {
                      fileName: _jsxFileName$N,
                      lineNumber: 288,
                      columnNumber: 25
                    }, globalThis)
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 287,
                    columnNumber: 23
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
                    className: "text-3xl text-slate-800 font-bold mb-6",
                    children: "Datos de contacto comercial \u2728"
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 316,
                    columnNumber: 23
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "space-y-4 mb-8",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        children: ["Numero de telefono del contacto", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-rose-500",
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 324,
                          columnNumber: 29
                        }, globalThis)]
                      }, void 0, true, {
                        fileName: _jsxFileName$N,
                        lineNumber: 322,
                        columnNumber: 27
                      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                        className: "form-input w-full capitalize",
                        autoComplete: "off",
                        type: "number"
                      }, register("bussiness_phone", {
                        required: {
                          value: true,
                          message: "El campo es requerido"
                        },
                        pattern: {
                          value: /[0-9]/,
                          message: "El formato no es correcto"
                        }
                      })), void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 326,
                        columnNumber: 27
                      }, globalThis), " ", errors.bussiness_phone && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-red-500 text-sm",
                        children: errors.bussiness_phone.message
                      }, void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 342,
                        columnNumber: 29
                      }, globalThis)]
                    }, void 0, true, {
                      fileName: _jsxFileName$N,
                      lineNumber: 321,
                      columnNumber: 25
                    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        children: ["Email del contacto", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-rose-500",
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName$N,
                          lineNumber: 351,
                          columnNumber: 29
                        }, globalThis)]
                      }, void 0, true, {
                        fileName: _jsxFileName$N,
                        lineNumber: 349,
                        columnNumber: 27
                      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                        maxLength: "35",
                        className: "form-input w-full",
                        autoComplete: "off",
                        type: "email"
                      }, register("bussiness_email", {
                        required: {
                          value: true,
                          message: "El campo es requerido"
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "El formato no es correcto"
                        }
                      })), void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 353,
                        columnNumber: 27
                      }, globalThis), " ", errors.bussiness_email && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-red-500 text-sm",
                        children: errors.bussiness_email.message
                      }, void 0, false, {
                        fileName: _jsxFileName$N,
                        lineNumber: 371,
                        columnNumber: 29
                      }, globalThis)]
                    }, void 0, true, {
                      fileName: _jsxFileName$N,
                      lineNumber: 348,
                      columnNumber: 25
                    }, globalThis)]
                  }, void 0, true, {
                    fileName: _jsxFileName$N,
                    lineNumber: 319,
                    columnNumber: 23
                  }, globalThis)]
                }, void 0, true), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex items-center justify-between",
                  children: [step > 0 && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      type: "button",
                      onClick: previousFormStep,
                      className: "text-sm underline hover:no-underline  ",
                      children: "<- Regresar"
                    }, void 0, false, {
                      fileName: _jsxFileName$N,
                      lineNumber: 382,
                      columnNumber: 25
                    }, globalThis)
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 381,
                    columnNumber: 23
                  }, globalThis), renderButton()]
                }, void 0, true, {
                  fileName: _jsxFileName$N,
                  lineNumber: 379,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$N,
                lineNumber: 121,
                columnNumber: 17
              }, globalThis), errorMenssage && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "mt-5",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "bg-red-100 text-red-600 px-3 py-2 rounded",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                    className: "inline w-4 h-4 shrink-0 fill-current mr-2",
                    viewBox: "0 0 17 17",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
                    }, void 0, false, {
                      fileName: _jsxFileName$N,
                      lineNumber: 399,
                      columnNumber: 25
                    }, globalThis)
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 396,
                    columnNumber: 23
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-sm",
                    children: "Lo sentimos, al parecer tenemos problemas con nuestro servidor."
                  }, void 0, false, {
                    fileName: _jsxFileName$N,
                    lineNumber: 401,
                    columnNumber: 23
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$N,
                  lineNumber: 395,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$N,
                lineNumber: 394,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$N,
              lineNumber: 119,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$N,
            lineNumber: 118,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$N,
          lineNumber: 107,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$N,
        lineNumber: 106,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
        "aria-hidden": "true",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "object-cover object-center w-full h-full",
          src: Question,
          width: "760",
          height: "1024",
          alt: "Onboarding"
        }, void 0, false, {
          fileName: _jsxFileName$N,
          lineNumber: 417,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block",
          src: AuthDecoration,
          width: "218",
          height: "224",
          alt: "Authentication decoration"
        }, void 0, false, {
          fileName: _jsxFileName$N,
          lineNumber: 424,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$N,
        lineNumber: 414,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$N,
      lineNumber: 104,
      columnNumber: 7
    }, globalThis)
  }, void 0, false, {
    fileName: _jsxFileName$N,
    lineNumber: 103,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$M = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/MultiStepFormEnd.jsx";
const MultiStepFormEnd = () => {
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
    className: "bg-white",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "w-full md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "min-h-screen h-full flex flex-col after:flex-1",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex-1",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "block",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  src: logohubsupplier,
                  alt: "Logo hubmine"
                }, void 0, false, {
                  fileName: _jsxFileName$M,
                  lineNumber: 19,
                  columnNumber: 19
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$M,
                lineNumber: 18,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$M,
              lineNumber: 16,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "px-4 pt-12 pb-8",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "max-w-md mx-auto w-full",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "relative",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName$M,
                    lineNumber: 27,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
                    className: "relative flex justify-between w-full",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                        children: "1"
                      }, void 0, false, {
                        fileName: _jsxFileName$M,
                        lineNumber: 32,
                        columnNumber: 25
                      }, globalThis)
                    }, void 0, false, {
                      fileName: _jsxFileName$M,
                      lineNumber: 31,
                      columnNumber: 23
                    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                        children: "2"
                      }, void 0, false, {
                        fileName: _jsxFileName$M,
                        lineNumber: 37,
                        columnNumber: 25
                      }, globalThis)
                    }, void 0, false, {
                      fileName: _jsxFileName$M,
                      lineNumber: 36,
                      columnNumber: 23
                    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                        children: "3"
                      }, void 0, false, {
                        fileName: _jsxFileName$M,
                        lineNumber: 42,
                        columnNumber: 25
                      }, globalThis)
                    }, void 0, false, {
                      fileName: _jsxFileName$M,
                      lineNumber: 41,
                      columnNumber: 23
                    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-primary text-white",
                        children: "4"
                      }, void 0, false, {
                        fileName: _jsxFileName$M,
                        lineNumber: 47,
                        columnNumber: 25
                      }, globalThis)
                    }, void 0, false, {
                      fileName: _jsxFileName$M,
                      lineNumber: 46,
                      columnNumber: 23
                    }, globalThis)]
                  }, void 0, true, {
                    fileName: _jsxFileName$M,
                    lineNumber: 30,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$M,
                  lineNumber: 26,
                  columnNumber: 19
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$M,
                lineNumber: 25,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$M,
              lineNumber: 24,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$M,
            lineNumber: 14,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "px-4 py-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "max-w-md mx-auto",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-center",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                  className: "inline-flex w-16 h-16 fill-current mb-6",
                  viewBox: "0 0 64 64",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("circle", {
                    className: "text-emerald-100",
                    cx: "32",
                    cy: "32",
                    r: "32"
                  }, void 0, false, {
                    fileName: _jsxFileName$M,
                    lineNumber: 63,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    className: "text-emerald-500",
                    d: "m28.5 41-8-8 3-3 5 5 12-12 3 3z"
                  }, void 0, false, {
                    fileName: _jsxFileName$M,
                    lineNumber: 69,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$M,
                  lineNumber: 60,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
                  className: "text-3xl text-slate-800 font-bold mb-8",
                  children: ["Ya est\xE1s registrado en Hubmine supplier system", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                    className: "font-normal text-lg ",
                    children: "Ya puedes crear tus plantas de recolecci\xF3n, cargar, ver el sock de tus productos y mucho m\xE1s."
                  }, void 0, false, {
                    fileName: _jsxFileName$M,
                    lineNumber: 76,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$M,
                  lineNumber: 74,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                  className: "btn bg-secondary hover:bg-primary hover:text-white text-primary",
                  to: "/",
                  children: "Ingresar a proveedores ->"
                }, void 0, false, {
                  fileName: _jsxFileName$M,
                  lineNumber: 82,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$M,
                lineNumber: 59,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$M,
              lineNumber: 58,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$M,
            lineNumber: 57,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$M,
          lineNumber: 13,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$M,
        lineNumber: 12,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2",
        "aria-hidden": "true",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "object-cover object-center w-full h-full",
          src: Question,
          width: "760",
          height: "1024",
          alt: "Onboarding"
        }, void 0, false, {
          fileName: _jsxFileName$M,
          lineNumber: 97,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          className: "absolute top-1/4 left-0 transform -translate-x-1/2 ml-8 hidden lg:block",
          src: AuthDecoration,
          width: "218",
          height: "224",
          alt: "Authentication decoration"
        }, void 0, false, {
          fileName: _jsxFileName$M,
          lineNumber: 104,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$M,
        lineNumber: 94,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$M,
      lineNumber: 10,
      columnNumber: 7
    }, globalThis)
  }, void 0, false, {
    fileName: _jsxFileName$M,
    lineNumber: 9,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$L = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/ModalBlank.jsx";
function ModalBlank({
  children,
  id,
  modalOpen,
  setModalOpen
}) {
  const modalContent = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!modalOpen || modalContent.current.contains(target))
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!modalOpen || keyCode !== 27)
        return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
      show: modalOpen,
      enter: "transition ease-out duration-200",
      enterStart: "opacity-0",
      enterEnd: "opacity-100",
      leave: "transition ease-out duration-100",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      "aria-hidden": "true"
    }, void 0, false, {
      fileName: _jsxFileName$L,
      lineNumber: 36,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      id,
      className: "fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6",
      role: "dialog",
      "aria-modal": "true",
      show: modalOpen,
      enter: "transition ease-in-out duration-200",
      enterStart: "opacity-0 translate-y-4",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-in-out duration-200",
      leaveStart: "opacity-100 translate-y-0",
      leaveEnd: "opacity-0 translate-y-4",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: modalContent,
        className: "bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full",
        children
      }, void 0, false, {
        fileName: _jsxFileName$L,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$L,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
var _jsxFileName$K = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/products/helpers/ModalConfirmAndReturn.jsx";
const ModalConfirmAndReturn = () => {
  const {
    dangerModalOpen,
    setDangerModalOpen
  } = react.exports.useContext(StateContext);
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/products/list");
    setDangerModalOpen(false);
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "m-1.5",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBlank, {
      id: "danger-modal",
      modalOpen: dangerModalOpen,
      setModalOpen: setDangerModalOpen,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "p-5 flex space-x-4",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            className: "w-4 h-4 shrink-0 fill-current text-rose-500",
            viewBox: "0 0 16 16",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            }, void 0, false, {
              fileName: _jsxFileName$K,
              lineNumber: 29,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$K,
            lineNumber: 26,
            columnNumber: 13
          }, globalThis)
        }, void 0, false, {
          fileName: _jsxFileName$K,
          lineNumber: 25,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-2",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "text-lg font-semibold text-slate-800",
              children: "\xBFSeguro que quieres dejar esta p\xE1gina?"
            }, void 0, false, {
              fileName: _jsxFileName$K,
              lineNumber: 36,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$K,
            lineNumber: 35,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "text-sm mb-10",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-2",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                children: "Se perder\xE1n todos los datos capturados y no podr\xE1s recuperarlos."
              }, void 0, false, {
                fileName: _jsxFileName$K,
                lineNumber: 43,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$K,
              lineNumber: 42,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$K,
            lineNumber: 41,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex flex-wrap justify-end space-x-2",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
              onClick: (e) => {
                e.stopPropagation();
                setDangerModalOpen(false);
              },
              children: "Continuar con la captura"
            }, void 0, false, {
              fileName: _jsxFileName$K,
              lineNumber: 51,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              onClick: (e) => {
                e.stopPropagation();
                backPage();
              },
              type: "button",
              className: "btn-sm bg-rose-500 hover:bg-rose-600 text-white",
              children: "S\xED, quiero salir"
            }, void 0, false, {
              fileName: _jsxFileName$K,
              lineNumber: 59,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$K,
            lineNumber: 50,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$K,
          lineNumber: 33,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$K,
        lineNumber: 23,
        columnNumber: 9
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$K,
      lineNumber: 19,
      columnNumber: 7
    }, globalThis)
  }, void 0, false, {
    fileName: _jsxFileName$K,
    lineNumber: 17,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$J = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/Banner.jsx";
function Banner({
  children,
  className,
  type,
  open,
  setOpen
}) {
  const typeIcon = (type2) => {
    switch (type2) {
      case "warning":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
          }, void 0, false, {
            fileName: _jsxFileName$J,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$J,
          lineNumber: 15,
          columnNumber: 11
        }, this);
      case "error":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
          }, void 0, false, {
            fileName: _jsxFileName$J,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$J,
          lineNumber: 21,
          columnNumber: 11
        }, this);
      case "success":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
          }, void 0, false, {
            fileName: _jsxFileName$J,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$J,
          lineNumber: 27,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
          }, void 0, false, {
            fileName: _jsxFileName$J,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$J,
          lineNumber: 33,
          columnNumber: 11
        }, this);
    }
  };
  const typeColor = (type2) => {
    switch (type2) {
      case "warning":
        return "bg-amber-500";
      case "error":
        return "bg-rose-500";
      case "success":
        return "bg-emerald-500";
      default:
        return "bg-primary";
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: open && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: `px-4 py-2 rounded-sm text-sm text-white ${typeColor(type)}`,
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex w-full justify-between items-start",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex",
            children: [typeIcon(type), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "font-medium",
              children
            }, void 0, false, {
              fileName: _jsxFileName$J,
              lineNumber: 61,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$J,
            lineNumber: 59,
            columnNumber: 15
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            className: "opacity-70 hover:opacity-80 ml-3 mt-[3px]",
            onClick: () => setOpen(false),
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sr-only",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName$J,
              lineNumber: 66,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-4 h-4 fill-current",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
              }, void 0, false, {
                fileName: _jsxFileName$J,
                lineNumber: 68,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$J,
              lineNumber: 67,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$J,
            lineNumber: 65,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$J,
          lineNumber: 58,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$J,
        lineNumber: 57,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$J,
      lineNumber: 56,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
var _jsxFileName$I = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/products/helpers/ImageDropzone.jsx";
const baseStyle$1 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 4,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  transition: "border .3s ease-in-out",
  cursor: "pointer",
  width: "100%"
};
const activeStyle$1 = {
  borderColor: "#0DB1AC"
};
const acceptStyle$1 = {
  borderColor: "#0DB1AC"
};
const rejectStyle$1 = {
  borderColor: "#0DB1AC"
};
function ImageDropzone({
  files,
  setFiles
}) {
  const onDrop = react.exports.useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"]
    },
    multiple: false
  });
  const style2 = react.exports.useMemo(() => __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, baseStyle$1), isDragActive ? activeStyle$1 : {}), isDragAccept ? acceptStyle$1 : {}), isDragReject ? rejectStyle$1 : {}), [isDragActive, isDragReject, isDragAccept]);
  const thumbs = files.map((file) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "mt-5 flex flex-col justify-center items-center",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
      className: "mt-3 font-semibold text-center",
      children: "Vista previa"
    }, void 0, false, {
      fileName: _jsxFileName$I,
      lineNumber: 73,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
      className: "w-44 mt-2 ",
      src: file.preview,
      alt: file.name
    }, void 0, false, {
      fileName: _jsxFileName$I,
      lineNumber: 74,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
      className: "text-center",
      children: file.name
    }, void 0, false, {
      fileName: _jsxFileName$I,
      lineNumber: 75,
      columnNumber: 7
    }, this)]
  }, file.name, true, {
    fileName: _jsxFileName$I,
    lineNumber: 70,
    columnNumber: 5
  }, this));
  react.exports.useEffect(() => () => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  useForm();
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
    className: "flex flex-col justify-center items-center w-full",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", __spreadProps(__spreadValues({}, getRootProps({
      style: style2
    })), {
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "flex flex-col justify-center items-center pt-5 pb-6",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          "aria-hidden": "true",
          className: "mb-3 w-10 h-10 text-gray-400",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          }, void 0, false, {
            fileName: _jsxFileName$I,
            lineNumber: 105,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$I,
          lineNumber: 98,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
          className: "mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold",
          children: "Click para cargar imagen o arrastra y suelta"
        }, void 0, false, {
          fileName: _jsxFileName$I,
          lineNumber: 111,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
          className: "text-xs text-gray-500 dark:text-gray-400",
          children: "Puedes cambiar tu imagen haciendo las mismas indicaciones"
        }, void 0, false, {
          fileName: _jsxFileName$I,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$I,
        lineNumber: 97,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({}, getInputProps()), void 0, false, {
        fileName: _jsxFileName$I,
        lineNumber: 118,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName$I,
      lineNumber: 96,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("aside", {
      children: thumbs
    }, void 0, false, {
      fileName: _jsxFileName$I,
      lineNumber: 121,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$I,
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
var _jsxFileName$H = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/products/CreateProductForm.jsx";
const CreateProductForm = () => {
  const navigate = useNavigate();
  const [files, setFiles] = react.exports.useState([]);
  const supplierId = localStorage.getItem("supplier_id");
  const {
    handleSubmit,
    register,
    setValue,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      img_product: files
    }
  });
  const {
    setDangerModalOpen,
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading,
    setProductReload,
    setRequiredFile
  } = react.exports.useContext(StateContext);
  const newProduct = async (data) => {
    let formData = new FormData();
    formData.append("category_id ", data.category_id);
    formData.append("unity_id", data.unity_id);
    formData.append("name", data.name);
    formData.append("short_description", data.short_description);
    formData.append("description ", data.description);
    formData.append("mark ", data.mark);
    formData.append("currency_id ", data.currency_id);
    formData.append("price ", data.price);
    formData.append("img_product", files[0]);
    fetch(`http://supplier.hubmine.mx/api/suppliers/product/create/${supplierId}/`, {
      method: "POST",
      body: formData
    }).then((response) => {
      if (response.status === 201) {
        setBannerSuccessOpen(true);
        setLoading(true);
        setTimeout(() => {
          setBannerSuccessOpen(false);
          setLoading(false);
          navigate("/products/list");
        }, 1500);
      } else {
        setRequiredFile(true);
        setBannerErrorOpen(true);
        setLoading(true);
        setTimeout(() => {
          setBannerErrorOpen(false);
          setLoading(false);
          setRequiredFile(false);
        }, 1500);
      }
      setProductReload(true);
    });
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "mb-8",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
          className: "text-2xl md:text-3xl text-slate-800 font-bold",
          children: "A\xF1adir Productos \u{1F4E6}"
        }, void 0, false, {
          fileName: _jsxFileName$H,
          lineNumber: 88,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$H,
        lineNumber: 87,
        columnNumber: 9
      }, globalThis), bannerSuccessOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-3",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
          type: "success",
          open: bannerSuccessOpen,
          setOpen: setBannerSuccessOpen,
          children: "Operaci\xF3n exitosa. Redirigiendo..."
        }, void 0, false, {
          fileName: _jsxFileName$H,
          lineNumber: 95,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$H,
        lineNumber: 94,
        columnNumber: 11
      }, globalThis) : bannerErrorOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-3",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
          type: "error",
          open: bannerErrorOpen,
          setOpen: setBannerErrorOpen,
          children: "Debe de cargar una imagen del producto."
        }, void 0, false, {
          fileName: _jsxFileName$H,
          lineNumber: 104,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$H,
        lineNumber: 103,
        columnNumber: 11
      }, globalThis) : null, /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "border-t border-slate-200"
      }, void 0, false, {
        fileName: _jsxFileName$H,
        lineNumber: 113,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-8 mt-8",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
          className: "mt-10",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
            className: "text-2xl text-slate-800 font-bold mb-6",
            children: "Datos del producto"
          }, void 0, false, {
            fileName: _jsxFileName$H,
            lineNumber: 116,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200"
          }, void 0, false, {
            fileName: _jsxFileName$H,
            lineNumber: 119,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$H,
          lineNumber: 115,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
          onSubmit: handleSubmit(newProduct),
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "grid gap-5 md:grid-cols-3",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Nombre del producto", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 127,
                    columnNumber: 40
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$H,
                  lineNumber: 126,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                  maxLength: "30",
                  className: "form-input w-full ",
                  autoComplete: "off",
                  type: "text"
                }, register("name", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  pattern: {
                    value: /[a-zA-Z0-9]/,
                    message: "El formato no es correcto"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 129,
                  columnNumber: 19
                }, globalThis), errors.name && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.name.message
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 146,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 125,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 123,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Categoria del producto", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 157,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$H,
                  lineNumber: 155,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                  className: "form-select w-full"
                }, register("category_id", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  }
                })), {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "",
                    children: "Selecciona"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 167,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "1",
                    children: "Agregado"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 168,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "2",
                    children: "Cemento"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 169,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "3",
                    children: "Concreto"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 170,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "4",
                    children: "Maquinaria"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 171,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "5",
                    children: "Prefabricados"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 172,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "6",
                    children: "Sanitarios"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 173,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "7",
                    children: "Lavados"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 174,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "8",
                    children: "Pisos"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 175,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "9",
                    children: "Acero"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 176,
                    columnNumber: 21
                  }, globalThis)]
                }), void 0, true, {
                  fileName: _jsxFileName$H,
                  lineNumber: 159,
                  columnNumber: 19
                }, globalThis), errors.category_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.category_id.message
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 179,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 154,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 152,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Breve descripci\xF3n", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 189,
                    columnNumber: 38
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$H,
                  lineNumber: 188,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                  maxLength: "35",
                  className: "form-input w-full",
                  autoComplete: "off",
                  type: "text"
                }, register("short_description", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  pattern: {
                    value: /[a-zA-Z0-9]/,
                    message: "El formato no es correcto"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 191,
                  columnNumber: 19
                }, globalThis), " ", errors.short_description && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.short_description.message
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 208,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 187,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 185,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$H,
            lineNumber: 122,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
            className: "mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
              className: "text-2xl text-slate-800 font-bold mb-6",
              children: "Precio y marca"
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 216,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "border-t border-slate-200"
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 219,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$H,
            lineNumber: 215,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "grid gap-5 md:grid-cols-3 mt-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Moneda", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 226,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 224,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                className: "form-select w-full"
              }, register("currency_id", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                }
              })), {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "",
                  children: "Selecciona"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 236,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "1",
                  children: "Peso mexicano"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 237,
                  columnNumber: 19
                }, globalThis)]
              }), void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 228,
                columnNumber: 17
              }, globalThis), errors.currency_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.currency_id.message
              }, void 0, false, {
                fileName: _jsxFileName$H,
                lineNumber: 240,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$H,
              lineNumber: 223,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Precio del producto", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 249,
                    columnNumber: 40
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$H,
                  lineNumber: 248,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "relative",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                    maxLength: "10",
                    autoComplete: "off",
                    className: "form-input w-full pl-8",
                    type: "text"
                  }, register("price", {
                    required: {
                      value: true,
                      message: "El campo es requerido"
                    },
                    pattern: {
                      value: /[0-9/]/,
                      message: "El formato no es correcto"
                    }
                  })), void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 252,
                    columnNumber: 21
                  }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "absolute inset-0 right-auto flex items-center pointer-events-none",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                      className: "text-sm text-slate-400 font-medium px-3",
                      children: "$"
                    }, void 0, false, {
                      fileName: _jsxFileName$H,
                      lineNumber: 269,
                      columnNumber: 23
                    }, globalThis)
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 268,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$H,
                  lineNumber: 251,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 247,
                columnNumber: 17
              }, globalThis), errors.price && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.price.message
              }, void 0, false, {
                fileName: _jsxFileName$H,
                lineNumber: 276,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$H,
              lineNumber: 245,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Marca del producto", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 284,
                  columnNumber: 37
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 283,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                maxLength: "35",
                className: "form-input w-full",
                autoComplete: "off",
                type: "text"
              }, register("mark", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: "El formato no es correcto"
                }
              })), void 0, false, {
                fileName: _jsxFileName$H,
                lineNumber: 286,
                columnNumber: 17
              }, globalThis), " ", errors.mark && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.mark.message
              }, void 0, false, {
                fileName: _jsxFileName$H,
                lineNumber: 303,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$H,
              lineNumber: 282,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Unidad de medida", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 313,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 311,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                className: "form-select w-full"
              }, register("unity_id", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                }
              })), {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "",
                  children: "Selecciona"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 323,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "1",
                  children: "Tonelada"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 324,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "2",
                  children: "Metro c\xFAbico"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 325,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "3",
                  children: "Unidad"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 326,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "4",
                  children: "Kilogramo"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 327,
                  columnNumber: 19
                }, globalThis)]
              }), void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 315,
                columnNumber: 17
              }, globalThis), errors.unity_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.unity_id.message
              }, void 0, false, {
                fileName: _jsxFileName$H,
                lineNumber: 330,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$H,
              lineNumber: 310,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$H,
            lineNumber: 221,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
            className: "mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
              className: "text-2xl text-slate-800 font-bold mb-6",
              children: "Descripci\xF3n e Imagen"
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 338,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "border-t border-slate-200"
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 341,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$H,
            lineNumber: 337,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "mt-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Descripci\xF3n del producto (funci\xF3n, objetivo, etc)", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$H,
                    lineNumber: 349,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$H,
                  lineNumber: 347,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("textarea", __spreadValues({
                  maxLength: "150",
                  className: "form-input w-full",
                  type: "text",
                  autoComplete: "off"
                }, register("description", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  maxLength: {
                    value: 150,
                    message: "sol\xF3 se permiten 150 caracteres"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 351,
                  columnNumber: 19
                }, globalThis), errors.description && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.description.message
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 368,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$H,
                lineNumber: 346,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 344,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$H,
            lineNumber: 343,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mt-8 w-full",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ImageDropzone, __spreadProps(__spreadValues({
                files,
                setFiles
              }, register("img_product", {
                required: {
                  value: false,
                  message: "El campo es requerido"
                }
              })), {
                onChange: setValue("img_product", files)
              }), void 0, false, {
                fileName: _jsxFileName$H,
                lineNumber: 379,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 378,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$H,
            lineNumber: 375,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "w-full flex space-x-6 justify-center items-center mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "m-1.5",
              children: loading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
                fileName: _jsxFileName$H,
                lineNumber: 395,
                columnNumber: 19
              }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                  type: "submit",
                  className: "btn bg-emerald-500 hover:bg-emerald-600 text-white",
                  children: "Guardar"
                }, void 0, false, {
                  fileName: _jsxFileName$H,
                  lineNumber: 398,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false)
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 393,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "m-1.5",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setDangerModalOpen(true);
                },
                type: "button",
                className: "btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50",
                children: "Cancelar"
              }, void 0, false, {
                fileName: _jsxFileName$H,
                lineNumber: 407,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$H,
              lineNumber: 406,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$H,
            lineNumber: 392,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$H,
          lineNumber: 121,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$H,
        lineNumber: 114,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$H,
      lineNumber: 85,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalConfirmAndReturn, {}, void 0, false, {
      fileName: _jsxFileName$H,
      lineNumber: 422,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true);
};
var _jsxFileName$G = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/products/ProductCreate.jsx";
const ProductCreate = () => {
  const {
    sidebarOpen,
    setSidebarOpen
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$G,
      lineNumber: 14,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$G,
        lineNumber: 19,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(CreateProductForm, {}, void 0, false, {
          fileName: _jsxFileName$G,
          lineNumber: 22,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$G,
        lineNumber: 21,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$G,
      lineNumber: 17,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$G,
    lineNumber: 12,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$F = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/products/helpers/ModalProductDelete.jsx";
const ModalProductDelete = ({
  id
}) => {
  const {
    dangerModalOpen,
    setDangerModalOpen,
    setBannerSuccessOpen,
    setBannerErrorOpen,
    setProductReload
  } = react.exports.useContext(StateContext);
  const ProductDelete = async (id2) => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/product/delete/${id2}/`, {
      method: "DELETE"
    }).then((response) => {
      if (response.status === 204) {
        setBannerSuccessOpen(true);
        setTimeout(() => {
          setBannerSuccessOpen(false);
        }, 1500);
      } else {
        setBannerErrorOpen(true);
        setTimeout(() => {
          setBannerErrorOpen(false);
        }, 1500);
      }
    });
    setProductReload(true);
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "m-1.5",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBlank, {
      id: "danger-modal",
      modalOpen: dangerModalOpen,
      setModalOpen: setDangerModalOpen,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "p-5 flex space-x-4",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            className: "w-4 h-4 shrink-0 fill-current text-rose-500",
            viewBox: "0 0 16 16",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            }, void 0, false, {
              fileName: _jsxFileName$F,
              lineNumber: 46,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$F,
            lineNumber: 43,
            columnNumber: 13
          }, globalThis)
        }, void 0, false, {
          fileName: _jsxFileName$F,
          lineNumber: 42,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-2",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "text-lg font-semibold text-slate-800",
              children: "\xBFSeguro de quieres eliminar el producto?"
            }, void 0, false, {
              fileName: _jsxFileName$F,
              lineNumber: 53,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$F,
            lineNumber: 52,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "text-sm mb-10",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-2",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                children: "Al eliminar el producto, ya no se podr\xE1 recuperar la informaci\xF3n."
              }, void 0, false, {
                fileName: _jsxFileName$F,
                lineNumber: 60,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$F,
              lineNumber: 59,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$F,
            lineNumber: 58,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex flex-wrap justify-end space-x-2",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
              onClick: (e) => {
                e.stopPropagation();
                setDangerModalOpen(false);
              },
              children: "No deseo eliminar"
            }, void 0, false, {
              fileName: _jsxFileName$F,
              lineNumber: 68,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              onClick: (e) => {
                e.stopPropagation();
                ProductDelete(id);
                setDangerModalOpen(false);
              },
              type: "button",
              className: "btn-sm bg-rose-500 hover:bg-rose-600 text-white",
              children: "S\xED quiero eliminar"
            }, void 0, false, {
              fileName: _jsxFileName$F,
              lineNumber: 76,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$F,
            lineNumber: 67,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$F,
          lineNumber: 50,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$F,
        lineNumber: 40,
        columnNumber: 9
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$F,
      lineNumber: 36,
      columnNumber: 7
    }, globalThis)
  }, void 0, false, {
    fileName: _jsxFileName$F,
    lineNumber: 34,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$E = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/products/ProductListTableItem.jsx";
const ProductListTableItem = (props) => {
  const {
    setDangerModalOpen
  } = react.exports.useContext(StateContext);
  const statusColor = (status) => {
    switch (status) {
      case "Estado Borrador":
        return "bg-red-100 text-red-600";
      default:
        return "bg-slate-100 text-slate-500";
    }
  };
  const hasStock = () => {
    if (props.has_stock === true) {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
        children: "Disponible"
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 20,
        columnNumber: 14
      }, globalThis);
    } else {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
        children: "Sin producto"
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 22,
        columnNumber: 14
      }, globalThis);
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("tr", {
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex items-center",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "bg-no-repeat bg-cover w-14 h-14 shrink-0 mr-2 sm:mr-3 flex justify-center items-center",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-3",
              children: props.image.length ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                className: "rounded-md ",
                src: props.image,
                width: "72",
                height: "72",
                alt: "foto de perfil"
              }, void 0, false, {
                fileName: _jsxFileName$E,
                lineNumber: 34,
                columnNumber: 19
              }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "uppercase rounded-full bg-primary w-10 h-10 flex justify-center items-center text-2xl text-white font-bold",
                children: ["\u{1F4E6}", " "]
              }, void 0, true, {
                fileName: _jsxFileName$E,
                lineNumber: 42,
                columnNumber: 19
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$E,
              lineNumber: 32,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$E,
            lineNumber: 31,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
            className: "capitalize flex space-x-1",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "font-medium text-slate-800",
              children: props.name
            }, void 0, false, {
              fileName: _jsxFileName$E,
              lineNumber: 49,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$E,
            lineNumber: 48,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$E,
          lineNumber: 30,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 29,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-center",
          children: props.category
        }, void 0, false, {
          fileName: _jsxFileName$E,
          lineNumber: 54,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 53,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: props.mark
        }, void 0, false, {
          fileName: _jsxFileName$E,
          lineNumber: 57,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 56,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: props.short_description
        }, void 0, false, {
          fileName: _jsxFileName$E,
          lineNumber: 60,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 59,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-center",
          children: props.currency_badge
        }, void 0, false, {
          fileName: _jsxFileName$E,
          lineNumber: 63,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 62,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: ["$", props.price]
        }, void 0, true, {
          fileName: _jsxFileName$E,
          lineNumber: 66,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 65,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: `text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1 ${statusColor(props.state_publication)}`,
            children: props.state_publication
          }, void 0, false, {
            fileName: _jsxFileName$E,
            lineNumber: 70,
            columnNumber: 13
          }, globalThis)
        }, void 0, false, {
          fileName: _jsxFileName$E,
          lineNumber: 69,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 68,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-center",
          children: hasStock()
        }, void 0, false, {
          fileName: _jsxFileName$E,
          lineNumber: 79,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 78,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-3 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex justify-center items-center",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            onClick: (e) => {
              e.stopPropagation();
              setDangerModalOpen(true);
            },
            className: "font-semibold text-red-400 hover:border-b-2 border-slate-500",
            children: "Eliminar"
          }, void 0, false, {
            fileName: _jsxFileName$E,
            lineNumber: 83,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalProductDelete, {
            id: props.id
          }, void 0, false, {
            fileName: _jsxFileName$E,
            lineNumber: 92,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$E,
          lineNumber: 82,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$E,
        lineNumber: 81,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$E,
      lineNumber: 28,
      columnNumber: 7
    }, globalThis)
  }, void 0, false);
};
var _jsxFileName$D = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/products/ProductListTable.jsx";
const ProductListTable = () => {
  const {
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    productList
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "bg-white",
    children: [bannerSuccessOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "space-y-3",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
        type: "success",
        open: bannerSuccessOpen,
        setOpen: setBannerSuccessOpen,
        children: "operaci\xF3n exitosa. El producto se elimin\xF3."
      }, void 0, false, {
        fileName: _jsxFileName$D,
        lineNumber: 19,
        columnNumber: 11
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$D,
      lineNumber: 18,
      columnNumber: 9
    }, globalThis) : bannerErrorOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "space-y-3",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
        type: "error",
        open: bannerErrorOpen,
        setOpen: setBannerErrorOpen,
        children: "Lo sentimos, al parecer tenemos problemas con el servidor vuelva a intentar m\xE1s tarde."
      }, void 0, false, {
        fileName: _jsxFileName$D,
        lineNumber: 28,
        columnNumber: 11
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$D,
      lineNumber: 27,
      columnNumber: 9
    }, globalThis) : null, productList.length ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: " mt-24 ",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "overflow-x-auto",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("table", {
          className: "table-auto w-full",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("thead", {
            className: "text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("tr", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Nombre del producto"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 46,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 45,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Categoria"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 51,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 50,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Marca"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 54,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 53,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Descripci\xF3n"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 57,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 56,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Tipo de moneda"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 60,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 59,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Precio"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 65,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 64,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-center",
                  children: "Estado"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 68,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 67,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "\xBFCon stock?"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 71,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 70,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Opciones"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 74,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 73,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$D,
              lineNumber: 44,
              columnNumber: 17
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$D,
            lineNumber: 43,
            columnNumber: 15
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("tbody", {
            className: "text-sm divide-y divide-slate-200 border-b border-slate-200",
            children: productList.map((product) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ProductListTableItem, {
              id: product.id,
              image: product.image,
              name: product.name,
              category: product.category,
              mark: product.mark,
              short_description: product.short_description,
              currency_badge: product.currency.badge,
              price: product.price,
              state_publication: product.state_publication,
              has_stock: product.has_stock
            }, product.id, false, {
              fileName: _jsxFileName$D,
              lineNumber: 81,
              columnNumber: 19
            }, globalThis))
          }, void 0, false, {
            fileName: _jsxFileName$D,
            lineNumber: 79,
            columnNumber: 15
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$D,
          lineNumber: 41,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$D,
        lineNumber: 40,
        columnNumber: 11
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$D,
      lineNumber: 38,
      columnNumber: 9
    }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "border-t border-slate-200",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "max-w-2xl m-auto mt-16",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-center px-4",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-5 h-6 fill-current",
              viewBox: "0 0 20 24",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                className: "text-slate-500",
                d: "M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z"
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 105,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                className: "text-slate-300",
                d: "M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z"
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 109,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                className: "text-slate-400",
                d: "M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z"
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 113,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$D,
              lineNumber: 104,
              columnNumber: 17
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$D,
            lineNumber: 103,
            columnNumber: 15
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
            className: "text-2xl text-slate-800 font-bold mb-2",
            children: "A\xF1ade el primer Producto"
          }, void 0, false, {
            fileName: _jsxFileName$D,
            lineNumber: 119,
            columnNumber: 15
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-6",
            children: "Crea los productos, los cuales vas a vender."
          }, void 0, false, {
            fileName: _jsxFileName$D,
            lineNumber: 122,
            columnNumber: 15
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
            to: "/products/create",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              className: "btn bg-secondary hover:bg-primary hover:text-white text-primary",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                className: "w-4 h-4 fill-current opacity-50 shrink-0",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                  d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
                }, void 0, false, {
                  fileName: _jsxFileName$D,
                  lineNumber: 130,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 127,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "ml-2",
                children: "A\xF1adir Producto"
              }, void 0, false, {
                fileName: _jsxFileName$D,
                lineNumber: 132,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$D,
              lineNumber: 126,
              columnNumber: 17
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$D,
            lineNumber: 125,
            columnNumber: 15
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$D,
          lineNumber: 102,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$D,
        lineNumber: 101,
        columnNumber: 11
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$D,
      lineNumber: 100,
      columnNumber: 9
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$D,
    lineNumber: 16,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$C = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/products/ProductList.jsx";
const ProductList = () => {
  const {
    sidebarOpen,
    setSidebarOpen
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$C,
      lineNumber: 15,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$C,
        lineNumber: 20,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "sm:flex sm:justify-between sm:items-center mb-4 md:mb-2",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mb-4 sm:mb-0",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
                className: "text-2xl md:text-3xl text-slate-800 font-bold",
                children: "Lista de productos \u{1F4E6}"
              }, void 0, false, {
                fileName: _jsxFileName$C,
                lineNumber: 29,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$C,
              lineNumber: 28,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "relative",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  htmlFor: "action-search",
                  className: "sr-only",
                  children: "Buscar..."
                }, void 0, false, {
                  fileName: _jsxFileName$C,
                  lineNumber: 38,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                  autoComplete: "false",
                  id: "action-search",
                  className: "form-input pl-9 focus:border-primary",
                  type: "search",
                  placeholder: "Buscar..."
                }, void 0, false, {
                  fileName: _jsxFileName$C,
                  lineNumber: 41,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "absolute inset-0 mt-2.5 right-auto group",
                  "aria-label": "Search",
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                    className: "w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                      d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                    }, void 0, false, {
                      fileName: _jsxFileName$C,
                      lineNumber: 55,
                      columnNumber: 23
                    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                      d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                    }, void 0, false, {
                      fileName: _jsxFileName$C,
                      lineNumber: 56,
                      columnNumber: 23
                    }, globalThis)]
                  }, void 0, true, {
                    fileName: _jsxFileName$C,
                    lineNumber: 51,
                    columnNumber: 21
                  }, globalThis)
                }, void 0, false, {
                  fileName: _jsxFileName$C,
                  lineNumber: 48,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$C,
                lineNumber: 37,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                to: "/products/create",
                className: "btn bg-secondary hover:bg-primary text-primary hover:text-white",
                children: "A\xF1adir producto"
              }, void 0, false, {
                fileName: _jsxFileName$C,
                lineNumber: 62,
                columnNumber: 17
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$C,
              lineNumber: 35,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$C,
            lineNumber: 26,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ProductListTable, {}, void 0, false, {
            fileName: _jsxFileName$C,
            lineNumber: 71,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$C,
          lineNumber: 24,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$C,
        lineNumber: 22,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$C,
      lineNumber: 18,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$C,
    lineNumber: 13,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$B = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/helpers/ModalCorfirmAndReturnPlant.jsx";
const ModalCorfirmAndReturnPlant = () => {
  const {
    dangerModalOpen,
    setDangerModalOpen
  } = react.exports.useContext(StateContext);
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/plant/list");
    setDangerModalOpen(false);
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "m-1.5",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBlank, {
      id: "danger-modal",
      modalOpen: dangerModalOpen,
      setModalOpen: setDangerModalOpen,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "p-5 flex space-x-4",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            className: "w-4 h-4 shrink-0 fill-current text-rose-500",
            viewBox: "0 0 16 16",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            }, void 0, false, {
              fileName: _jsxFileName$B,
              lineNumber: 29,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$B,
            lineNumber: 26,
            columnNumber: 13
          }, globalThis)
        }, void 0, false, {
          fileName: _jsxFileName$B,
          lineNumber: 25,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-2",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "text-lg font-semibold text-slate-800",
              children: "\xBFSeguro que quieres dejar esta p\xE1gina?"
            }, void 0, false, {
              fileName: _jsxFileName$B,
              lineNumber: 36,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$B,
            lineNumber: 35,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "text-sm mb-10",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-2",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                children: "Se perder\xE1n todos los datos capturados y no podr\xE1s recuperarlos."
              }, void 0, false, {
                fileName: _jsxFileName$B,
                lineNumber: 43,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$B,
              lineNumber: 42,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$B,
            lineNumber: 41,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex flex-wrap justify-end space-x-2",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
              onClick: (e) => {
                e.stopPropagation();
                setDangerModalOpen(false);
              },
              children: "Continuar con la captura"
            }, void 0, false, {
              fileName: _jsxFileName$B,
              lineNumber: 51,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              onClick: (e) => {
                e.stopPropagation();
                backPage();
              },
              type: "button",
              className: "btn-sm bg-rose-500 hover:bg-rose-600 text-white",
              children: "S\xED, quiero salir"
            }, void 0, false, {
              fileName: _jsxFileName$B,
              lineNumber: 59,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$B,
            lineNumber: 50,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$B,
          lineNumber: 33,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$B,
        lineNumber: 23,
        columnNumber: 9
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$B,
      lineNumber: 19,
      columnNumber: 7
    }, globalThis)
  }, void 0, false, {
    fileName: _jsxFileName$B,
    lineNumber: 17,
    columnNumber: 5
  }, globalThis);
};
var mapboxGlGeocoder = "";
var mapboxGl = "";
const Geocoder = () => {
  const {
    setMapAddress,
    setLng,
    setLat
  } = react.exports.useContext(StateContext);
  const ctrl = new lib$1({
    mapboxgl,
    accessToken: "pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg",
    marker: true,
    collapsed: false,
    placeholder: "Busca tu direcci\xF3n",
    clearAndBlurOnEsc: true
  }).on("result", function({
    result
  }) {
    setMapAddress(result.place_name);
  });
  useControl(() => ctrl);
  ctrl.on("result", (e) => {
    const coords = e.result.geometry.coordinates;
    setLng(coords[0]);
    setLat(coords[1]);
  });
  return null;
};
var _jsxFileName$A = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/helpers/MyMap.jsx";
const accessToken = "pk.eyJ1IjoiaGV2ZXJydWJpbyIsImEiOiJjbDNkYmExMnowNnNwM2pwaDNqNTZkN2t5In0.GW80M6LLLu-oPpNtrptwcg";
const MyMap = () => {
  const mapRef = react.exports.useRef();
  const {
    setLat,
    setLng,
    lat,
    lng
  } = react.exports.useContext(StateContext);
  const getMap = async () => {
    if (!lng && !lat) {
      fetch("https://ipapi.co/json").then((response) => response.json()).then((data) => {
        mapRef.current.flyTo({
          center: [data.longitude, data.latitude],
          zoom: 16
        });
        setLat(data.latitude);
        setLng(data.longitude);
      });
    }
  };
  react.exports.useEffect(() => {
    getMap();
  }, []);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "map-container",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Map, {
        ref: mapRef,
        mapboxAccessToken: accessToken,
        initialViewState: {
          longitude: lng,
          latitude: lat,
          zoom: 8
        },
        mapStyle: "mapbox://styles/mapbox/streets-v11",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Marker, {
          latitude: lat,
          longitude: lng,
          draggable: true,
          onDragEnd: (e) => {
            setLng(e.lngLat.lng);
            setLat(e.lngLat.lat);
          }
        }, void 0, false, {
          fileName: _jsxFileName$A,
          lineNumber: 50,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavigationControl, {
          position: "bottom-right"
        }, void 0, false, {
          fileName: _jsxFileName$A,
          lineNumber: 60,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(GeolocateControl, {
          position: "top-left",
          trackUserLocation: true,
          onGeolocate: (e) => {
            setLng(e.coords.longitude);
            setLat(e.coords.latitude);
          }
        }, void 0, false, {
          fileName: _jsxFileName$A,
          lineNumber: 61,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Geocoder, {}, void 0, false, {
          fileName: _jsxFileName$A,
          lineNumber: 70,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$A,
        lineNumber: 45,
        columnNumber: 9
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$A,
      lineNumber: 44,
      columnNumber: 7
    }, globalThis)
  }, void 0, false);
};
var _jsxFileName$z = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/PlantCreateForm.jsx";
const PlantCreateForm = () => {
  const navigate = useNavigate();
  const {
    setDangerModalOpen,
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading,
    supplierId,
    setPlantReload,
    country,
    state,
    handleCountry,
    handleState,
    city,
    stateEnable,
    cityEnable,
    placeList,
    lat,
    lng,
    mapAddress,
    setMapAddress
  } = react.exports.useContext(StateContext);
  const {
    handleSubmit,
    register,
    setValue,
    formState: {
      errors
    }
  } = useForm({
    defaultValues: {
      address: "",
      longitude: "",
      latitude: ""
    }
  });
  async function createPlant(plantData) {
    return fetch(`http://supplier.hubmine.mx/api/suppliers/plant/create/${supplierId}/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(plantData)
    }).then((response) => {
      if (response.status === 201) {
        setLoading(true);
        setBannerSuccessOpen(true);
        setTimeout(() => {
          navigate("/plant/list");
          setLoading(false);
          setBannerSuccessOpen(false);
        }, 1500);
      } else {
        setBannerErrorOpen(true);
        setLoading(true);
        setTimeout(() => {
          setBannerErrorOpen(false);
          setLoading(false);
        }, 1500);
      }
      setPlantReload(true);
    });
  }
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "mb-8",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
          className: "text-2xl md:text-3xl text-slate-800 font-bold",
          children: "Crear planta de recolecci\xF3n \u{1F3D7}"
        }, void 0, false, {
          fileName: _jsxFileName$z,
          lineNumber: 87,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$z,
        lineNumber: 86,
        columnNumber: 9
      }, globalThis), bannerSuccessOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-3",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
          type: "success",
          open: bannerSuccessOpen,
          setOpen: setBannerSuccessOpen,
          children: "operaci\xF3n exitosa. Redirigiendo..."
        }, void 0, false, {
          fileName: _jsxFileName$z,
          lineNumber: 94,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$z,
        lineNumber: 93,
        columnNumber: 11
      }, globalThis) : bannerErrorOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-3",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
          type: "error",
          open: bannerErrorOpen,
          setOpen: setBannerErrorOpen,
          children: "Lo sentimos, al parecer tenemos problema con nuestro servidor, vuelva a intentar m\xE1s tarde."
        }, void 0, false, {
          fileName: _jsxFileName$z,
          lineNumber: 103,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$z,
        lineNumber: 102,
        columnNumber: 11
      }, globalThis) : null, /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "border-t border-slate-200"
      }, void 0, false, {
        fileName: _jsxFileName$z,
        lineNumber: 113,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-8 mt-8",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
          className: "mt-10",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
            className: "text-2xl text-slate-800 font-bold mb-6",
            children: "Datos de la planta"
          }, void 0, false, {
            fileName: _jsxFileName$z,
            lineNumber: 116,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200"
          }, void 0, false, {
            fileName: _jsxFileName$z,
            lineNumber: 119,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$z,
          lineNumber: 115,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
          onSubmit: handleSubmit(createPlant),
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "grid gap-5 md:grid-cols-3",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Nombre de la planta", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 127,
                    columnNumber: 40
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$z,
                  lineNumber: 126,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                  maxLength: "30",
                  className: "form-input w-full ",
                  autoComplete: "off",
                  type: "text"
                }, register("name", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  pattern: {
                    value: /[a-zA-Z]/,
                    message: "El formato no es correcto"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 129,
                  columnNumber: 19
                }, globalThis), errors.name && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.name.message
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 146,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 125,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 123,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Tel\xE9fono", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 157,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$z,
                  lineNumber: 155,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                  className: "form-input w-full",
                  autoComplete: "off",
                  type: "number"
                }, register("phone_contact", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  pattern: {
                    value: /[0-9]/,
                    message: "El formato no es correcto"
                  },
                  minLength: {
                    value: 10,
                    message: "Debe de tener 10 caracteres"
                  },
                  maxLength: {
                    value: 10,
                    message: "Debe de tener 10 caracteres"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 159,
                  columnNumber: 19
                }, globalThis), errors.phone_contact && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.phone_contact.message
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 183,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 154,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 152,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Tipo de lugar", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 194,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$z,
                  lineNumber: 192,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                  className: "form-select w-full"
                }, register("type_place_id", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  }
                })), {
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "",
                    children: "Selecciona"
                  }, void 0, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 204,
                    columnNumber: 21
                  }, globalThis), placeList.map((place) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: place.id,
                    children: place.type_place
                  }, place.id, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 206,
                    columnNumber: 23
                  }, globalThis))]
                }), void 0, true, {
                  fileName: _jsxFileName$z,
                  lineNumber: 196,
                  columnNumber: 19
                }, globalThis), errors.type_place_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.type_place_id.message
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 212,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 191,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 189,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$z,
            lineNumber: 122,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
            className: "mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
              className: "text-2xl text-slate-800 font-bold mb-6",
              children: "Ubicaci\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 220,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "border-t border-slate-200"
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 223,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$z,
            lineNumber: 219,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "grid gap-5 md:grid-cols-3 mt-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Pais", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 230,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 228,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                className: "form-select w-full"
              }, register("country_id", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                }
              })), {
                onChange: (e) => handleCountry(e),
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "",
                  children: "Selecciona"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 241,
                  columnNumber: 19
                }, globalThis), country.map((country2) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: country2.id,
                  children: country2.country
                }, country2.id, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 243,
                  columnNumber: 21
                }, globalThis))]
              }), void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 232,
                columnNumber: 17
              }, globalThis), errors.country_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.country_id.message
              }, void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 249,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$z,
              lineNumber: 227,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Estado", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 259,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$z,
                  lineNumber: 257,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                  disabled: stateEnable,
                  className: "form-select w-full"
                }, register("state_id", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  }
                })), {
                  onChange: (e) => handleState(e),
                  children: [!stateEnable ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "",
                    children: "Selecciona"
                  }, void 0, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 272,
                    columnNumber: 23
                  }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: "",
                    children: "Selecciona un pais"
                  }, void 0, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 274,
                    columnNumber: 23
                  }, globalThis), state.map((state2) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: state2.id,
                    children: state2.state
                  }, state2.id, false, {
                    fileName: _jsxFileName$z,
                    lineNumber: 277,
                    columnNumber: 23
                  }, globalThis))]
                }), void 0, true, {
                  fileName: _jsxFileName$z,
                  lineNumber: 261,
                  columnNumber: 19
                }, globalThis), errors.state_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.state_id.message
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 283,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 256,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 254,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Ciudad", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 293,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 291,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                disabled: cityEnable,
                className: "form-select w-full"
              }, register("city_id", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                }
              })), {
                children: [!cityEnable ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "",
                  children: "Selecciona"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 305,
                  columnNumber: 21
                }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: "",
                  children: "Selecciona un estado"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 307,
                  columnNumber: 21
                }, globalThis), city.map((city2) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: city2.id,
                  children: city2.city
                }, city2.id, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 310,
                  columnNumber: 21
                }, globalThis))]
              }), void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 295,
                columnNumber: 17
              }, globalThis), errors.city_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.city_id.message
              }, void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 316,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$z,
              lineNumber: 290,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$z,
            lineNumber: 225,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "mt-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(MyMap, {}, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 324,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$z,
            lineNumber: 323,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "grid gap-5 md:grid-cols-3 mt-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mt-5",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Direcci\xF3n", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 330,
                  columnNumber: 28
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 329,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                disabled: !mapAddress,
                onChange: setValue("address", mapAddress),
                className: "form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed",
                autoComplete: "off",
                type: "text"
              }, register("address", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
                pattern: {
                  value: /[a-zA-Z]/,
                  message: "El formato no es correcto"
                }
              })), void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 332,
                columnNumber: 17
              }, globalThis), errors.address && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.address.message
              }, void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 351,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$z,
              lineNumber: 328,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mt-5",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Longitud", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 359,
                  columnNumber: 27
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 358,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                disabled: true,
                onChange: setValue("longitude", lng),
                maxLength: "35",
                className: "form-input w-full  disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ",
                autoComplete: "off",
                type: "text"
              }, register("longitude", {
                required: {
                  value: false,
                  message: "El campo es requerido"
                }
              })), void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 361,
                columnNumber: 17
              }, globalThis), errors.longitude && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.longitude.message
              }, void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 376,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$z,
              lineNumber: 357,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mt-5",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["latitud", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 384,
                  columnNumber: 26
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 383,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                disabled: true,
                onChange: setValue("latitude", lat),
                maxLength: "35",
                className: "form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed",
                autoComplete: "off",
                type: "text"
              }, register("latitude", {
                required: {
                  value: false,
                  message: "El campo es requerido"
                }
              })), void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 386,
                columnNumber: 17
              }, globalThis), errors.latitude && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.latitude.message
              }, void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 401,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$z,
              lineNumber: 382,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$z,
            lineNumber: 326,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
            className: "mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
              className: "text-2xl text-slate-800 font-bold mb-6",
              children: "Observaciones"
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 408,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "border-t border-slate-200"
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 411,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$z,
            lineNumber: 407,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "mt-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: "Referencia de como llegar a la planta"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 417,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("textarea", __spreadValues({
                  maxLength: "150",
                  className: "form-input w-full",
                  type: "text",
                  autoComplete: "off"
                }, register("observations", {
                  required: {
                    value: false,
                    message: "El campo es requerido"
                  },
                  maxLength: {
                    value: 150,
                    message: "sol\xF3 se permiten 150 caracteres"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 420,
                  columnNumber: 19
                }, globalThis), errors.observations && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.observations.message
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 437,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$z,
                lineNumber: 416,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 414,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$z,
            lineNumber: 413,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "w-full flex space-x-6 justify-center items-center mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "m-1.5",
              children: loading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 447,
                columnNumber: 19
              }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                  type: "submit",
                  className: "btn bg-emerald-500 hover:bg-emerald-600 text-white",
                  children: "Guardar"
                }, void 0, false, {
                  fileName: _jsxFileName$z,
                  lineNumber: 450,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false)
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 445,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "m-1.5",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setDangerModalOpen(true);
                },
                type: "button",
                className: "btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50",
                children: "Cancelar"
              }, void 0, false, {
                fileName: _jsxFileName$z,
                lineNumber: 459,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$z,
              lineNumber: 458,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$z,
            lineNumber: 444,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$z,
          lineNumber: 121,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$z,
        lineNumber: 114,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$z,
      lineNumber: 84,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalCorfirmAndReturnPlant, {}, void 0, false, {
      fileName: _jsxFileName$z,
      lineNumber: 474,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true);
};
var _jsxFileName$y = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/PlantCreate.jsx";
const PlantCreate = () => {
  const {
    sidebarOpen,
    setSidebarOpen
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$y,
      lineNumber: 13,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$y,
        lineNumber: 18,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PlantCreateForm, {}, void 0, false, {
          fileName: _jsxFileName$y,
          lineNumber: 21,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$y,
        lineNumber: 20,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$y,
      lineNumber: 16,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$y,
    lineNumber: 11,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$x = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/helpers/ModalPlantDelete.jsx";
const ModalPlantDelete = ({
  id
}) => {
  const {
    dangerModalOpen,
    setDangerModalOpen,
    setBannerSuccessOpen,
    setBannerErrorOpen,
    setPlantReload
  } = react.exports.useContext(StateContext);
  const PlantDelete = async (id2) => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/plant/delete/${id2}/`, {
      method: "DELETE"
    }).then((response) => {
      if (response.status === 204) {
        setBannerSuccessOpen(true);
        setTimeout(() => {
          setBannerSuccessOpen(false);
        }, 1500);
      } else {
        setBannerErrorOpen(true);
        setTimeout(() => {
          setBannerErrorOpen(false);
        }, 1500);
      }
    });
    setPlantReload(true);
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "m-1.5",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBlank, {
      id: "danger-modal",
      modalOpen: dangerModalOpen,
      setModalOpen: setDangerModalOpen,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "p-5 flex space-x-4",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
            className: "w-4 h-4 shrink-0 fill-current text-rose-500",
            viewBox: "0 0 16 16",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            }, void 0, false, {
              fileName: _jsxFileName$x,
              lineNumber: 45,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$x,
            lineNumber: 42,
            columnNumber: 13
          }, globalThis)
        }, void 0, false, {
          fileName: _jsxFileName$x,
          lineNumber: 41,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-2",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "text-lg font-semibold text-slate-800",
              children: "\xBFSeguro que quieres eliminar la planta?"
            }, void 0, false, {
              fileName: _jsxFileName$x,
              lineNumber: 52,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$x,
            lineNumber: 51,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "text-sm mb-10",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-2",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                children: "Al eliminar la planta, ya no se podr\xE1 recuperar la informaci\xF3n."
              }, void 0, false, {
                fileName: _jsxFileName$x,
                lineNumber: 59,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$x,
              lineNumber: 58,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$x,
            lineNumber: 57,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex flex-wrap justify-end space-x-2",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
              onClick: (e) => {
                e.stopPropagation();
                setDangerModalOpen(false);
              },
              children: "No deseo eliminar"
            }, void 0, false, {
              fileName: _jsxFileName$x,
              lineNumber: 67,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              onClick: (e) => {
                e.stopPropagation();
                PlantDelete(id);
                setDangerModalOpen(false);
              },
              type: "button",
              className: "btn-sm bg-rose-500 hover:bg-rose-600 text-white",
              children: "S\xED quiero eliminar"
            }, void 0, false, {
              fileName: _jsxFileName$x,
              lineNumber: 75,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$x,
            lineNumber: 66,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$x,
          lineNumber: 49,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$x,
        lineNumber: 39,
        columnNumber: 9
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$x,
      lineNumber: 35,
      columnNumber: 7
    }, globalThis)
  }, void 0, false, {
    fileName: _jsxFileName$x,
    lineNumber: 33,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$w = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/PlantListTableItem.jsx";
const PlantListTableItem = (props) => {
  const {
    setDangerModalOpen
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("tr", {
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap md:w-1/2",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex items-center",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
            className: "capitalize flex space-x-1",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "font-medium text-slate-800",
              children: props.name
            }, void 0, false, {
              fileName: _jsxFileName$w,
              lineNumber: 14,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$w,
            lineNumber: 13,
            columnNumber: 13
          }, globalThis)
        }, void 0, false, {
          fileName: _jsxFileName$w,
          lineNumber: 12,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$w,
        lineNumber: 11,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: props.phone_contact
        }, void 0, false, {
          fileName: _jsxFileName$w,
          lineNumber: 19,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$w,
        lineNumber: 18,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: props.type_place
        }, void 0, false, {
          fileName: _jsxFileName$w,
          lineNumber: 22,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$w,
        lineNumber: 21,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: props.country
        }, void 0, false, {
          fileName: _jsxFileName$w,
          lineNumber: 25,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$w,
        lineNumber: 24,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: props.state
        }, void 0, false, {
          fileName: _jsxFileName$w,
          lineNumber: 28,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$w,
        lineNumber: 27,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-left",
          children: props.city
        }, void 0, false, {
          fileName: _jsxFileName$w,
          lineNumber: 31,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$w,
        lineNumber: 30,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("td", {
        className: "px-6 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex justify-center items-center space-x-1",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
            to: `/plant/update/${props.id}`,
            className: "font-semibold text-slate-600 hover:border-b-2 border-slate-500",
            children: "Editar"
          }, void 0, false, {
            fileName: _jsxFileName$w,
            lineNumber: 35,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            children: "|"
          }, void 0, false, {
            fileName: _jsxFileName$w,
            lineNumber: 40,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            onClick: (e) => {
              e.stopPropagation();
              setDangerModalOpen(true);
            },
            className: "font-semibold text-red-400 hover:border-b-2 border-slate-500",
            children: "Eliminar"
          }, void 0, false, {
            fileName: _jsxFileName$w,
            lineNumber: 41,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalPlantDelete, {
            id: props.id
          }, void 0, false, {
            fileName: _jsxFileName$w,
            lineNumber: 50,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$w,
          lineNumber: 34,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$w,
        lineNumber: 33,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$w,
      lineNumber: 10,
      columnNumber: 7
    }, globalThis)
  }, void 0, false);
};
var _jsxFileName$v = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/PlantListTable.jsx";
const PlantListTable = () => {
  const {
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    plantList
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "bg-white",
    children: [bannerSuccessOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "space-y-3",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
        type: "success",
        open: bannerSuccessOpen,
        setOpen: setBannerSuccessOpen,
        children: "operaci\xF3n exitosa. El producto se elimin\xF3."
      }, void 0, false, {
        fileName: _jsxFileName$v,
        lineNumber: 20,
        columnNumber: 11
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$v,
      lineNumber: 19,
      columnNumber: 9
    }, globalThis) : bannerErrorOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "space-y-3",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
        type: "error",
        open: bannerErrorOpen,
        setOpen: setBannerErrorOpen,
        children: "Lo sentimos, al parecer tenemos problemas con el servidor vuelva a intentar m\xE1s tarde."
      }, void 0, false, {
        fileName: _jsxFileName$v,
        lineNumber: 29,
        columnNumber: 11
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$v,
      lineNumber: 28,
      columnNumber: 9
    }, globalThis) : null, plantList.length ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "mt-24",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "overflow-x-auto",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("table", {
          className: "table-auto w-full",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("thead", {
            className: "text-xs font-semibold uppercase text-slate-500 border-t border-b border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("tr", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Nombre de la planta"
                }, void 0, false, {
                  fileName: _jsxFileName$v,
                  lineNumber: 47,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 46,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Tel\xE9fono"
                }, void 0, false, {
                  fileName: _jsxFileName$v,
                  lineNumber: 52,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 51,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Tipo de lugar"
                }, void 0, false, {
                  fileName: _jsxFileName$v,
                  lineNumber: 55,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 54,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Pais"
                }, void 0, false, {
                  fileName: _jsxFileName$v,
                  lineNumber: 58,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 57,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Estado"
                }, void 0, false, {
                  fileName: _jsxFileName$v,
                  lineNumber: 61,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 60,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-left",
                  children: "Ciudad"
                }, void 0, false, {
                  fileName: _jsxFileName$v,
                  lineNumber: 64,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 63,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("th", {
                className: "px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "font-semibold text-center",
                  children: "Opciones"
                }, void 0, false, {
                  fileName: _jsxFileName$v,
                  lineNumber: 67,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 66,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$v,
              lineNumber: 45,
              columnNumber: 17
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$v,
            lineNumber: 44,
            columnNumber: 15
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("tbody", {
            className: "text-sm divide-y divide-slate-200 border-b border-slate-200",
            children: plantList.map((plant) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PlantListTableItem, {
              id: plant.id,
              name: plant.name,
              phone_contact: plant.phone_contact,
              type_place: plant.type_place.type_place,
              country: plant.location.country,
              state: plant.location.state,
              city: plant.location.city
            }, plant.id, false, {
              fileName: _jsxFileName$v,
              lineNumber: 74,
              columnNumber: 19
            }, globalThis))
          }, void 0, false, {
            fileName: _jsxFileName$v,
            lineNumber: 72,
            columnNumber: 15
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$v,
          lineNumber: 42,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$v,
        lineNumber: 41,
        columnNumber: 11
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$v,
      lineNumber: 39,
      columnNumber: 9
    }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "border-t border-slate-200",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "max-w-2xl m-auto mt-16",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-center px-4",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-t from-slate-200 to-slate-100 mb-4",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-5 h-6 fill-current",
              viewBox: "0 0 20 24",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                className: "text-slate-500",
                d: "M10 10.562l9-5-8.514-4.73a1 1 0 00-.972 0L1 5.562l9 5z"
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 95,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                className: "text-slate-300",
                d: "M9 12.294l-9-5v10.412a1 1 0 00.514.874L9 23.294v-11z"
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 99,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                className: "text-slate-400",
                d: "M11 12.294v11l8.486-4.714a1 1 0 00.514-.874V7.295l-9 4.999z"
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 103,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$v,
              lineNumber: 94,
              columnNumber: 17
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$v,
            lineNumber: 93,
            columnNumber: 15
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
            className: "text-2xl text-slate-800 font-bold mb-2",
            children: "A\xF1ade la primera planta de recolecci\xF3n"
          }, void 0, false, {
            fileName: _jsxFileName$v,
            lineNumber: 109,
            columnNumber: 15
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-6",
            children: "Crea las plantas, las cuales implementaran la log\xEDstica de entrega."
          }, void 0, false, {
            fileName: _jsxFileName$v,
            lineNumber: 112,
            columnNumber: 15
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
            to: "/plant/create",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              className: "btn bg-secondary hover:bg-primary hover:text-white text-primary",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                className: "w-4 h-4 fill-current opacity-50 shrink-0",
                viewBox: "0 0 16 16",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                  d: "M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
                }, void 0, false, {
                  fileName: _jsxFileName$v,
                  lineNumber: 121,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 118,
                columnNumber: 19
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "ml-2",
                children: "A\xF1adir Planta"
              }, void 0, false, {
                fileName: _jsxFileName$v,
                lineNumber: 123,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$v,
              lineNumber: 117,
              columnNumber: 17
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$v,
            lineNumber: 116,
            columnNumber: 15
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$v,
          lineNumber: 92,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$v,
        lineNumber: 91,
        columnNumber: 11
      }, globalThis)
    }, void 0, false, {
      fileName: _jsxFileName$v,
      lineNumber: 90,
      columnNumber: 9
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$v,
    lineNumber: 17,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$u = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/PlantList.jsx";
const PlantList = () => {
  const {
    sidebarOpen,
    setSidebarOpen
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$u,
      lineNumber: 13,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$u,
        lineNumber: 18,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "sm:flex sm:justify-between sm:items-center mb-4 md:mb-2",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mb-4 sm:mb-0",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
                className: "text-2xl md:text-3xl text-slate-800 font-bold",
                children: "Lista de Plantas \u{1F3D7}"
              }, void 0, false, {
                fileName: _jsxFileName$u,
                lineNumber: 27,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$u,
              lineNumber: 26,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "relative",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  htmlFor: "action-search",
                  className: "sr-only",
                  children: "Buscar..."
                }, void 0, false, {
                  fileName: _jsxFileName$u,
                  lineNumber: 36,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                  autoComplete: "false",
                  id: "action-search",
                  className: "form-input pl-9 focus:border-primary",
                  type: "search",
                  placeholder: "Buscar..."
                }, void 0, false, {
                  fileName: _jsxFileName$u,
                  lineNumber: 39,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "absolute inset-0 mt-2.5 right-auto group",
                  "aria-label": "Search",
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                    className: "w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2",
                    viewBox: "0 0 16 16",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                      d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                    }, void 0, false, {
                      fileName: _jsxFileName$u,
                      lineNumber: 53,
                      columnNumber: 23
                    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                      d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                    }, void 0, false, {
                      fileName: _jsxFileName$u,
                      lineNumber: 54,
                      columnNumber: 23
                    }, globalThis)]
                  }, void 0, true, {
                    fileName: _jsxFileName$u,
                    lineNumber: 49,
                    columnNumber: 21
                  }, globalThis)
                }, void 0, false, {
                  fileName: _jsxFileName$u,
                  lineNumber: 46,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$u,
                lineNumber: 35,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                to: "/plant/create",
                className: "btn bg-secondary hover:bg-primary text-primary hover:text-white",
                children: "A\xF1adir Planta"
              }, void 0, false, {
                fileName: _jsxFileName$u,
                lineNumber: 60,
                columnNumber: 17
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$u,
              lineNumber: 33,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$u,
            lineNumber: 24,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PlantListTable, {}, void 0, false, {
            fileName: _jsxFileName$u,
            lineNumber: 69,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$u,
          lineNumber: 22,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$u,
        lineNumber: 20,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$u,
      lineNumber: 16,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$u,
    lineNumber: 11,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$t = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/PlantUpdateForm.jsx";
const PlantUpdateForm = () => {
  const [dataPlant, setDataPlant] = react.exports.useState([]);
  const navigate = useNavigate();
  const {
    id
  } = useParams();
  const {
    setDangerModalOpen,
    bannerSuccessOpen,
    setBannerSuccessOpen,
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading,
    setPlantReload,
    placeList,
    handleCountry,
    handleState,
    country,
    state,
    city,
    stateEnable,
    cityEnable,
    mapAddress,
    setMapAddress,
    lat,
    lng,
    setLat,
    setLng
  } = react.exports.useContext(StateContext);
  const {
    handleSubmit,
    register,
    setValue,
    formState: {
      errors
    }
  } = useForm();
  const getPlantDetails = async () => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/plant/list/details?plant-id=${id}`).then((response) => response.json()).then((json) => {
      setValue("name", json[0].name);
      setValue("phone_contact", json[0].phone_contact);
      setValue("type_place", json[0].type_place.type_place);
      setValue("type_place_id", json[0].type_place.type_place_id);
      setValue("country", json[0].location.country);
      setValue("country_id", json[0].location.country_id);
      setValue("state", json[0].location.state);
      setValue("state_id", json[0].location.state_id);
      setValue("city", json[0].location.city);
      setValue("city_id", json[0].location.city_id);
      setValue("observations", json[0].location.observations);
      setValue("latitude", json[0].location.latitude);
      setValue("longitude", json[0].location.longitude);
      setValue("address", json[0].location.address);
      setDataPlant(json);
      setMapAddress(json[0].location.address);
      setLng(json[0].location.longitude);
      setLat(json[0].location.latitude);
    });
  };
  react.exports.useEffect(() => {
    getPlantDetails();
  }, []);
  const plantUpdate = async (data) => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/plant/update/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status === 200) {
        setLoading(true);
        setBannerSuccessOpen(true);
        setTimeout(() => {
          setLoading(false);
          setBannerSuccessOpen(false);
          navigate("/plant/list");
        }, 1500);
      } else {
        setLoading(true);
        setBannerErrorOpen(true);
        setTimeout(() => {
          setLoading(false);
          setBannerErrorOpen(false);
        }, 1500);
      }
      setPlantReload(true);
    });
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "mb-8",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
          className: "text-2xl md:text-3xl text-slate-800 font-bold",
          children: "Editar planta de recolecci\xF3n \u{1F3D7}"
        }, void 0, false, {
          fileName: _jsxFileName$t,
          lineNumber: 113,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$t,
        lineNumber: 112,
        columnNumber: 9
      }, globalThis), bannerSuccessOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-3",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
          type: "success",
          open: bannerSuccessOpen,
          setOpen: setBannerSuccessOpen,
          children: "operaci\xF3n exitosa. Redirigiendo..."
        }, void 0, false, {
          fileName: _jsxFileName$t,
          lineNumber: 120,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$t,
        lineNumber: 119,
        columnNumber: 11
      }, globalThis) : bannerErrorOpen ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-3",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
          type: "error",
          open: bannerErrorOpen,
          setOpen: setBannerErrorOpen,
          children: "Lo sentimos, al parecer tenemos problema con nuestro servidor, vuelva a intentar m\xE1s tarde."
        }, void 0, false, {
          fileName: _jsxFileName$t,
          lineNumber: 129,
          columnNumber: 13
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$t,
        lineNumber: 128,
        columnNumber: 11
      }, globalThis) : null, /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "border-t border-slate-200"
      }, void 0, false, {
        fileName: _jsxFileName$t,
        lineNumber: 139,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-8 mt-8",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
          className: "mt-10",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
            className: "text-2xl text-slate-800 font-bold mb-6",
            children: "Datos de la planta"
          }, void 0, false, {
            fileName: _jsxFileName$t,
            lineNumber: 142,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200"
          }, void 0, false, {
            fileName: _jsxFileName$t,
            lineNumber: 145,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$t,
          lineNumber: 141,
          columnNumber: 11
        }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
          onSubmit: handleSubmit(plantUpdate),
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "grid gap-5 md:grid-cols-3",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Nombre de la planta", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 153,
                    columnNumber: 40
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$t,
                  lineNumber: 152,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                  maxLength: "30",
                  className: "form-input w-full ",
                  autoComplete: "off",
                  type: "text"
                }, register("name", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  pattern: {
                    value: /[a-zA-Z]/,
                    message: "El formato no es correcto"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 155,
                  columnNumber: 19
                }, globalThis), errors.name && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.name.message
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 172,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 151,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 149,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Tel\xE9fono", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 183,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$t,
                  lineNumber: 181,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                  className: "form-input w-full",
                  autoComplete: "off",
                  type: "number"
                }, register("phone_contact", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  },
                  pattern: {
                    value: /[0-9]/,
                    message: "El formato no es correcto"
                  },
                  minLength: {
                    value: 10,
                    message: "Debe de tener 10 caracteres"
                  },
                  maxLength: {
                    value: 10,
                    message: "Debe de tener 10 caracteres"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 185,
                  columnNumber: 19
                }, globalThis), errors.phone_contact && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.phone_contact.message
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 209,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 180,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 178,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Tipo de lugar", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 220,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$t,
                  lineNumber: 218,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                  className: "form-select w-full"
                }, register("type_place_id", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  }
                })), {
                  children: [dataPlant.map((place) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: place.type_place.type_place_id,
                    children: place.type_place.type_place
                  }, place.id, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 231,
                    columnNumber: 23
                  }, globalThis)), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    disabled: true,
                    children: "--Selecciona el tipo de lugar--"
                  }, void 0, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 237,
                    columnNumber: 21
                  }, globalThis), placeList.map((place) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: place.id,
                    children: place.type_place
                  }, place.id, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 239,
                    columnNumber: 23
                  }, globalThis))]
                }), void 0, true, {
                  fileName: _jsxFileName$t,
                  lineNumber: 222,
                  columnNumber: 19
                }, globalThis), errors.type_place_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.type_place_id.message
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 245,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 217,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 215,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$t,
            lineNumber: 148,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
            className: "mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
              className: "text-2xl text-slate-800 font-bold mb-6",
              children: "Ubicaci\xF3n"
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 253,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "border-t border-slate-200"
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 256,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$t,
            lineNumber: 252,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "grid gap-5 md:grid-cols-3 mt-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["pais", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 263,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 261,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                className: "form-select w-full"
              }, register("country_id", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                }
              })), {
                onChange: (e) => handleCountry(e),
                children: [dataPlant.map((countryDetails) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: countryDetails.location.country_id,
                  children: countryDetails.location.country
                }, countryDetails.id, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 275,
                  columnNumber: 21
                }, globalThis)), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  disabled: true,
                  children: "--Selecciona el pais--"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 281,
                  columnNumber: 19
                }, globalThis), country.map((country2) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: country2.id,
                  children: country2.country
                }, country2.id, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 283,
                  columnNumber: 21
                }, globalThis))]
              }), void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 265,
                columnNumber: 17
              }, globalThis), errors.country_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.country_id.message
              }, void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 289,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$t,
              lineNumber: 260,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: ["Estado", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                    className: "text-rose-500",
                    children: "*"
                  }, void 0, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 299,
                    columnNumber: 21
                  }, globalThis)]
                }, void 0, true, {
                  fileName: _jsxFileName$t,
                  lineNumber: 297,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                  disabled: stateEnable,
                  className: "form-select w-full"
                }, register("state_id", {
                  required: {
                    value: true,
                    message: "El campo es requerido"
                  }
                })), {
                  onChange: (e) => handleState(e),
                  children: [dataPlant.map((stateDetails) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: stateDetails.location.state_id,
                    children: stateDetails.location.state
                  }, stateDetails.id, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 312,
                    columnNumber: 23
                  }, globalThis)), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    disabled: true,
                    children: "--Selecciona el estado--"
                  }, void 0, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 318,
                    columnNumber: 21
                  }, globalThis), state.map((state2) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    value: state2.id,
                    children: state2.state
                  }, state2.id, false, {
                    fileName: _jsxFileName$t,
                    lineNumber: 320,
                    columnNumber: 23
                  }, globalThis))]
                }), void 0, true, {
                  fileName: _jsxFileName$t,
                  lineNumber: 301,
                  columnNumber: 19
                }, globalThis), errors.state_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.state_id.message
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 326,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 296,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 294,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Ciudad", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 336,
                  columnNumber: 19
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 334,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", __spreadProps(__spreadValues({
                disabled: cityEnable,
                className: "form-select w-full"
              }, register("city_id", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                }
              })), {
                children: [dataPlant.map((cityDetails) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: cityDetails.location.city_id,
                  children: cityDetails.location.city
                }, cityDetails.id, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 348,
                  columnNumber: 21
                }, globalThis)), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  disabled: true,
                  children: "--Selecciona la ciudad--"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 354,
                  columnNumber: 19
                }, globalThis), city.map((city2) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                  value: city2.id,
                  children: city2.city
                }, city2.id, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 356,
                  columnNumber: 21
                }, globalThis))]
              }), void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 338,
                columnNumber: 17
              }, globalThis), errors.city_id && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.city_id.message
              }, void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 362,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$t,
              lineNumber: 333,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$t,
            lineNumber: 258,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "mt-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(MyMap, {}, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 370,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$t,
            lineNumber: 369,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "grid gap-5 md:grid-cols-3 mt-8",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mt-5",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Direcci\xF3n", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 376,
                  columnNumber: 28
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 375,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                onChange: setValue("address", mapAddress),
                className: "form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed",
                autoComplete: "off",
                type: "text"
              }, register("address", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
                pattern: {
                  value: /[a-zA-Z]/,
                  message: "El formato no es correcto"
                }
              })), void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 378,
                columnNumber: 17
              }, globalThis), errors.address && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.address.message
              }, void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 396,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$t,
              lineNumber: 374,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mt-5",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Longitud", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 404,
                  columnNumber: 27
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 403,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                disabled: true,
                onChange: setValue("longitude", lng),
                maxLength: "35",
                className: "form-input w-full  disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed ",
                autoComplete: "off",
                type: "text"
              }, register("longitude", {
                required: {
                  value: false,
                  message: "El campo es requerido"
                }
              })), void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 406,
                columnNumber: 17
              }, globalThis), errors.longitude && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.longitude.message
              }, void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 421,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$t,
              lineNumber: 402,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "mt-5",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["latitud", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 429,
                  columnNumber: 26
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 428,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                disabled: true,
                onChange: setValue("latitude", lat),
                maxLength: "35",
                className: "form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed",
                autoComplete: "off",
                type: "text"
              }, register("latitude", {
                required: {
                  value: false,
                  message: "El campo es requerido"
                }
              })), void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 431,
                columnNumber: 17
              }, globalThis), errors.latitude && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.latitude.message
              }, void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 446,
                columnNumber: 19
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$t,
              lineNumber: 427,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$t,
            lineNumber: 372,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("article", {
            className: "mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
              className: "text-2xl text-slate-800 font-bold mb-6",
              children: "Observaciones"
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 453,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "border-t border-slate-200"
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 456,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$t,
            lineNumber: 452,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "mt-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  children: "Referencia de como llegar a la planta"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 462,
                  columnNumber: 19
                }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("textarea", __spreadValues({
                  maxLength: "150",
                  className: "form-input w-full",
                  type: "text",
                  autoComplete: "off"
                }, register("observations", {
                  required: {
                    value: false,
                    message: "El campo es requerido"
                  },
                  maxLength: {
                    value: 150,
                    message: "sol\xF3 se permiten 150 caracteres"
                  }
                })), void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 465,
                  columnNumber: 19
                }, globalThis), errors.observations && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-red-500 text-sm",
                  children: errors.observations.message
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 482,
                  columnNumber: 21
                }, globalThis)]
              }, void 0, true, {
                fileName: _jsxFileName$t,
                lineNumber: 461,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 459,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$t,
            lineNumber: 458,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
            className: "w-full flex space-x-6 justify-center items-center mt-10",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "m-1.5",
              children: loading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 492,
                columnNumber: 19
              }, globalThis) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                  type: "submit",
                  className: "btn bg-emerald-500 hover:bg-emerald-600 text-white",
                  children: "Guardar"
                }, void 0, false, {
                  fileName: _jsxFileName$t,
                  lineNumber: 495,
                  columnNumber: 21
                }, globalThis)
              }, void 0, false)
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 490,
              columnNumber: 15
            }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "m-1.5",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                onClick: (e) => {
                  e.stopPropagation();
                  setDangerModalOpen(true);
                },
                type: "button",
                className: "btn border-slate-200 hover:border-slate-300 text-emerald-500 hover:bg-red-500 hover:text-slate-50",
                children: "Cancelar"
              }, void 0, false, {
                fileName: _jsxFileName$t,
                lineNumber: 504,
                columnNumber: 17
              }, globalThis)
            }, void 0, false, {
              fileName: _jsxFileName$t,
              lineNumber: 503,
              columnNumber: 15
            }, globalThis)]
          }, void 0, true, {
            fileName: _jsxFileName$t,
            lineNumber: 489,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$t,
          lineNumber: 147,
          columnNumber: 11
        }, globalThis)]
      }, void 0, true, {
        fileName: _jsxFileName$t,
        lineNumber: 140,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$t,
      lineNumber: 110,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalCorfirmAndReturnPlant, {}, void 0, false, {
      fileName: _jsxFileName$t,
      lineNumber: 519,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true);
};
var _jsxFileName$s = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/plant/PlantUpdate.jsx";
const PlantUpdate = () => {
  const {
    sidebarOpen,
    setSidebarOpen
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$s,
      lineNumber: 13,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$s,
        lineNumber: 18,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PlantUpdateForm, {}, void 0, false, {
          fileName: _jsxFileName$s,
          lineNumber: 21,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$s,
        lineNumber: 20,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$s,
      lineNumber: 16,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$s,
    lineNumber: 11,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$r = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/company/SettingsSidebar.jsx";
function SettingsSidebar() {
  const location = useLocation();
  const {
    pathname
  } = location;
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-slate-200 min-w-60 md:space-y-3",
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "text-xs font-semibold text-slate-400 uppercase mb-3",
        children: "Configuraciones"
      }, void 0, false, {
        fileName: _jsxFileName$r,
        lineNumber: 12,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
        className: "flex flex-nowrap md:block mr-3 md:mr-0",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
          className: "mr-0.5 md:mr-0 md:mb-0.5",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(NavLink, {
            end: true,
            to: "/company/profile",
            className: `flex items-center px-2.5 py-2 rounded whitespace-nowrap ${pathname.includes("/company/profile") && "bg-secondary"}`,
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: `w-4 h-4 shrink-0 fill-current text-slate-400 mr-2 ${pathname.includes("/company/profile") && "text-primary"}`,
              viewBox: "0 0 16 16",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z"
              }, void 0, false, {
                fileName: _jsxFileName$r,
                lineNumber: 28,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$r,
              lineNumber: 23,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
              className: `text-sm font-medium ${pathname.includes("/company/profile") ? "text-primary" : "hover:text-slate-700"}`,
              children: "Mi perfil"
            }, void 0, false, {
              fileName: _jsxFileName$r,
              lineNumber: 30,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$r,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$r,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$r,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$r,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$r,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var _jsxFileName$q = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/company/helpers/LogoDropzone.jsx";
const baseStyle = {
  padding: "20px",
  width: "80px",
  height: "10px",
  borderRadius: 4,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#D8F6F0",
  color: "#0DB1AC",
  transition: "border .3s ease-in-out",
  cursor: "pointer"
};
const activeStyle = {
  borderColor: "#0DB1AC"
};
const acceptStyle = {
  borderColor: "#0DB1AC"
};
const rejectStyle = {
  borderColor: "#0DB1AC"
};
function LogoDropzone({
  logo,
  setLogo,
  supplierData
}) {
  const onDrop = react.exports.useCallback((acceptedFiles) => {
    setLogo(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"]
    },
    multiple: false
  });
  const style2 = react.exports.useMemo(() => __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, baseStyle), isDragActive ? activeStyle : {}), isDragAccept ? acceptStyle : {}), isDragReject ? rejectStyle : {}), [isDragActive, isDragReject, isDragAccept]);
  const thumbs = logo.map((file) => /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
      className: "rounded-full w-20 h-20 bg-no-repeat bg-cover",
      src: file.preview,
      alt: "Logo"
    }, void 0, false, {
      fileName: _jsxFileName$q,
      lineNumber: 69,
      columnNumber: 7
    }, this)
  }, file.name, false, {
    fileName: _jsxFileName$q,
    lineNumber: 68,
    columnNumber: 5
  }, this));
  react.exports.useEffect(() => () => {
    logo.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [logo]);
  useForm();
  const containerLogo = () => {
    if (logo.length) {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("aside", {
        children: thumbs
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 94,
        columnNumber: 14
      }, this);
    } else if (supplierData) {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "mr-1",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          name: "img_product",
          className: "w-20 h-20 rounded-full",
          src: supplierData,
          width: "80",
          height: "80",
          alt: "User upload"
        }, void 0, false, {
          fileName: _jsxFileName$q,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 97,
        columnNumber: 9
      }, this);
    } else {
      return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "mr-1",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
          name: "img_product",
          className: "w-20 h-20 rounded-full",
          src: sinLogo,
          width: "80",
          height: "80",
          alt: "User upload"
        }, void 0, false, {
          fileName: _jsxFileName$q,
          lineNumber: 111,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 110,
        columnNumber: 9
      }, this);
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
    className: "flex flex-row-reverse justify-end items-center",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", __spreadProps(__spreadValues({
      className: "flex justify-center items-center ml-5"
    }, getRootProps({
      style: style2
    })), {
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({}, getInputProps()), void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 129,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
        className: "text-primary text-sm font-semibold hover:text-slate-500",
        children: "Cambiar"
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 130,
        columnNumber: 9
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName$q,
      lineNumber: 126,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        children: containerLogo()
      }, void 0, false, {
        fileName: _jsxFileName$q,
        lineNumber: 135,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$q,
      lineNumber: 134,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$q,
    lineNumber: 125,
    columnNumber: 5
  }, this);
}
var _jsxFileName$p = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/company/ProfilePanel.jsx";
function ProfilePanel() {
  const [supplierData, setSupplierData] = react.exports.useState([]);
  const [logo, setLogo] = react.exports.useState([]);
  const navigate = useNavigate();
  const {
    bannerErrorOpen,
    setBannerErrorOpen,
    loading,
    setLoading
  } = react.exports.useContext(StateContext);
  const {
    handleSubmit,
    register,
    setValue,
    formState: {
      errors
    }
  } = useForm();
  const supplierId = localStorage.getItem("supplier_id");
  const changeLogo = async () => {
    let formData = new FormData();
    formData.append("logo", logo[0]);
    fetch(`http://supplier.hubmine.mx/api/suppliers/upload-logo/${supplierId}/`, {
      method: "POST",
      body: formData
    }).then((response) => response.json());
  };
  const getDetailsSupplier = async () => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/details?supplier-id=${supplierId}`).then((response) => response.json()).then((json) => {
      setSupplierData(json[0].bussiness_logo);
      setValue("commercial_brand", json[0].commercial_brand);
      setValue("bussiness_email", json[0].bussiness_email);
      setValue("bussiness_phone", json[0].bussiness_phone);
      setValue("rfc", json[0].rfc);
      setValue("social_reason", json[0].social_reason);
    });
  };
  react.exports.useEffect(() => {
    getDetailsSupplier();
  }, []);
  const profileUpdate = async (data) => {
    fetch(`http://supplier.hubmine.mx/api/suppliers/update/${supplierId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status === 200) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/company/profile");
        }, 1500);
      } else {
        setLoading(true);
        setBannerErrorOpen(true);
        setTimeout(() => {
          setLoading(false);
          setBannerErrorOpen(false);
        }, 1500);
      }
    });
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "grow",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "p-6 space-y-6",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
        className: "text-xl text-slate-800 font-bold mb-5",
        children: "Logo de la compa\xF1ia"
      }, void 0, false, {
        fileName: _jsxFileName$p,
        lineNumber: 91,
        columnNumber: 9
      }, this), bannerErrorOpen && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "space-y-3",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
          type: "error",
          open: bannerErrorOpen,
          setOpen: setBannerErrorOpen,
          children: "Lo sentimos, al parecer tenemos problema con nuestro servidor, vuelva a intentar m\xE1s tarde."
        }, void 0, false, {
          fileName: _jsxFileName$p,
          lineNumber: 99,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$p,
        lineNumber: 98,
        columnNumber: 11
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex items-center",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LogoDropzone, {
            supplierData,
            logo,
            setLogo
          }, void 0, false, {
            fileName: _jsxFileName$p,
            lineNumber: 111,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$p,
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$p,
        lineNumber: 109,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$p,
      lineNumber: 90,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
      onSubmit: handleSubmit(profileUpdate),
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "p-6 space-y-6",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
            className: "text-xl leading-snug text-slate-800 font-bold mb-1",
            children: "Perfil del negocio"
          }, void 0, false, {
            fileName: _jsxFileName$p,
            lineNumber: 123,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
            className: "text-sm",
            children: "Editas los datos de tu compa\xF1ia."
          }, void 0, false, {
            fileName: _jsxFileName$p,
            lineNumber: 126,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sm:w-1/3",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Nombre de la empresa", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$p,
                  lineNumber: 131,
                  columnNumber: 39
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$p,
                lineNumber: 130,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                maxLength: "30",
                className: "form-input w-full ",
                autoComplete: "off",
                type: "text"
              }, register("commercial_brand", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: "El formato no es correcto"
                }
              })), void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 133,
                columnNumber: 17
              }, this), errors.commercial_brand && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.commercial_brand.message
              }, void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 150,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$p,
              lineNumber: 128,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sm:w-1/3",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["Tel\xE9fono", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$p,
                  lineNumber: 159,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$p,
                lineNumber: 157,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                className: "form-input w-full",
                autoComplete: "off",
                type: "number"
              }, register("bussiness_phone", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
                pattern: {
                  value: /[0-9]/,
                  message: "El formato no es correcto"
                }
              })), void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 161,
                columnNumber: 17
              }, this), errors.bussiness_phone && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.bussiness_phone.message
              }, void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 177,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$p,
              lineNumber: 156,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sm:w-1/3",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                className: "block text-sm font-medium mb-1",
                children: ["RFC", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                  className: "text-rose-500",
                  children: "*"
                }, void 0, false, {
                  fileName: _jsxFileName$p,
                  lineNumber: 185,
                  columnNumber: 22
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$p,
                lineNumber: 184,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
                maxLength: "13",
                className: "uppercase form-input w-full ",
                autoComplete: "off",
                type: "text"
              }, register("rfc", {
                required: {
                  value: true,
                  message: "El campo es requerido"
                },
                pattern: {
                  value: /[a-zA-Z0-9]/,
                  message: "El formato no es correcto"
                },
                minLength: {
                  value: 13,
                  message: "El RFC debe de tener 13 caracteres"
                }
              })), void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 187,
                columnNumber: 17
              }, this), " ", errors.rfc && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-red-500 text-sm",
                children: errors.rfc.message
              }, void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 208,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$p,
              lineNumber: 183,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$p,
            lineNumber: 127,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$p,
          lineNumber: 122,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
            className: "text-xl leading-snug text-slate-800 font-bold mb-1",
            children: "Correo electr\xF3nico"
          }, void 0, false, {
            fileName: _jsxFileName$p,
            lineNumber: 217,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "text-sm",
            children: "Edita el correo electr\xF3nico de tu compa\xF1ia."
          }, void 0, false, {
            fileName: _jsxFileName$p,
            lineNumber: 220,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "sm:w-1/3 mt-5",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
              className: "block text-sm font-medium mb-1",
              children: ["Email", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-rose-500",
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 226,
                columnNumber: 22
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$p,
              lineNumber: 225,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
              maxLength: "35",
              className: "form-input w-full",
              autoComplete: "off",
              type: "email"
            }, register("bussiness_email", {
              required: {
                value: true,
                message: "El campo es requerido"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto"
              }
            })), void 0, false, {
              fileName: _jsxFileName$p,
              lineNumber: 228,
              columnNumber: 15
            }, this), " ", errors.bussiness_email && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
              className: "text-red-500 text-sm",
              children: errors.bussiness_email.message
            }, void 0, false, {
              fileName: _jsxFileName$p,
              lineNumber: 245,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$p,
            lineNumber: 224,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$p,
          lineNumber: 216,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("section", {
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
            className: "text-xl leading-snug text-slate-800 font-bold mb-1",
            children: "Raz\xF3n social"
          }, void 0, false, {
            fileName: _jsxFileName$p,
            lineNumber: 253,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
            className: "text-sm",
            children: "Edita la raz\xF3n social de tu compa\xF1ia."
          }, void 0, false, {
            fileName: _jsxFileName$p,
            lineNumber: 256,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "sm:w-1/3 mt-5",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
              className: "block text-sm font-medium mb-1",
              children: ["Raz\xF3n social", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-rose-500",
                children: "*"
              }, void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 260,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$p,
              lineNumber: 259,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", __spreadValues({
              maxLength: "30",
              className: "form-input w-full uppercase",
              autoComplete: "off",
              type: "text"
            }, register("social_reason", {
              required: {
                value: true,
                message: "El campo es requerido"
              },
              pattern: {
                value: /[a-zA-Z0-9]/,
                message: "El formato no es correcto"
              }
            })), void 0, false, {
              fileName: _jsxFileName$p,
              lineNumber: 262,
              columnNumber: 15
            }, this), errors.social_reason && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
              className: "text-red-500 text-sm",
              children: errors.social_reason.message
            }, void 0, false, {
              fileName: _jsxFileName$p,
              lineNumber: 279,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$p,
            lineNumber: 257,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$p,
          lineNumber: 252,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("footer", {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex flex-col px-6 py-5 border-t border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex self-end space-x-3",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Link, {
                to: "/",
                className: "btn border-slate-200 hover:border-slate-300 text-slate-600",
                children: "Salir"
              }, void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 290,
                columnNumber: 17
              }, this), loading ? /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(LoadingButton, {}, void 0, false, {
                fileName: _jsxFileName$p,
                lineNumber: 296,
                columnNumber: 19
              }, this) : /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                  onClick: changeLogo,
                  type: "submit",
                  className: "btn bg-secondary hover:bg-primary hover:text-white text-primary ml-3",
                  children: "Guardar cambios"
                }, void 0, false, {
                  fileName: _jsxFileName$p,
                  lineNumber: 299,
                  columnNumber: 21
                }, this)
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName$p,
              lineNumber: 289,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$p,
            lineNumber: 288,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$p,
          lineNumber: 287,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$p,
        lineNumber: 120,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$p,
      lineNumber: 119,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$p,
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
var _jsxFileName$o = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/partials/company/Profile.jsx";
const Profile = () => {
  const {
    sidebarOpen,
    setSidebarOpen
  } = react.exports.useContext(StateContext);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$o,
      lineNumber: 14,
      columnNumber: 7
    }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$o,
        lineNumber: 19,
        columnNumber: 9
      }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-2xl md:text-3xl text-slate-800 font-bold",
              children: "Mi compa\xF1ia \u{1F477}\u{1F3FB}\u200D\u2640\uFE0F\u{1F477}\u{1F3FB}\u200D\u2642\uFE0F"
            }, void 0, false, {
              fileName: _jsxFileName$o,
              lineNumber: 26,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$o,
            lineNumber: 24,
            columnNumber: 13
          }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "bg-white shadow-lg rounded-sm mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex flex-col md:flex-row md:-mr-px",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(SettingsSidebar, {}, void 0, false, {
                fileName: _jsxFileName$o,
                lineNumber: 34,
                columnNumber: 17
              }, globalThis), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ProfilePanel, {}, void 0, false, {
                fileName: _jsxFileName$o,
                lineNumber: 35,
                columnNumber: 17
              }, globalThis)]
            }, void 0, true, {
              fileName: _jsxFileName$o,
              lineNumber: 33,
              columnNumber: 15
            }, globalThis)
          }, void 0, false, {
            fileName: _jsxFileName$o,
            lineNumber: 32,
            columnNumber: 13
          }, globalThis)]
        }, void 0, true, {
          fileName: _jsxFileName$o,
          lineNumber: 22,
          columnNumber: 11
        }, globalThis)
      }, void 0, false, {
        fileName: _jsxFileName$o,
        lineNumber: 21,
        columnNumber: 9
      }, globalThis)]
    }, void 0, true, {
      fileName: _jsxFileName$o,
      lineNumber: 17,
      columnNumber: 7
    }, globalThis)]
  }, void 0, true, {
    fileName: _jsxFileName$o,
    lineNumber: 12,
    columnNumber: 5
  }, globalThis);
};
var _jsxFileName$n = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/Tooltip.jsx";
function Tooltip({
  children,
  className,
  bg,
  size,
  position
}) {
  const [tooltipOpen, setTooltipOpen] = react.exports.useState(false);
  const positionOuterClasses = (position2) => {
    switch (position2) {
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2";
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2";
    }
  };
  const sizeClasses = (size2) => {
    switch (size2) {
      case "lg":
        return "min-w-72  p-3";
      case "md":
        return "min-w-56 p-3";
      case "sm":
        return "min-w-44 p-2";
      default:
        return "p-2";
    }
  };
  const positionInnerClasses = (position2) => {
    switch (position2) {
      case "right":
        return "ml-2";
      case "left":
        return "mr-2";
      case "bottom":
        return "mt-2";
      default:
        return "mb-2";
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: `relative ${className}`,
    onMouseEnter: () => setTooltipOpen(true),
    onMouseLeave: () => setTooltipOpen(false),
    onFocus: () => setTooltipOpen(true),
    onBlur: () => setTooltipOpen(false),
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      className: "block",
      "aria-haspopup": "true",
      "aria-expanded": tooltipOpen,
      onClick: (e) => e.preventDefault(),
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "w-4 h-4 fill-current text-slate-400",
        viewBox: "0 0 16 16",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
        }, void 0, false, {
          fileName: _jsxFileName$n,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$n,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$n,
      lineNumber: 61,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: `z-10 absolute ${positionOuterClasses(position)}`,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
        show: tooltipOpen,
        tag: "div",
        className: `rounded overflow-hidden ${bg === "dark" ? "bg-slate-800" : "bg-white border border-slate-200 shadow-lg"} ${sizeClasses(size)} ${positionInnerClasses(position)}`,
        enter: "transition ease-out duration-200 transform",
        enterStart: "opacity-0 -translate-y-2",
        enterEnd: "opacity-100 translate-y-0",
        leave: "transition ease-out duration-200",
        leaveStart: "opacity-100",
        leaveEnd: "opacity-0",
        children
      }, void 0, false, {
        fileName: _jsxFileName$n,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$n,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$n,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
var _jsxFileName$m = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/component/FormPage.jsx";
function FormPage() {
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  const [toggle1, setToggle1] = react.exports.useState(true);
  const [toggle2, setToggle2] = react.exports.useState(false);
  const [toggle3, setToggle3] = react.exports.useState(false);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$m,
      lineNumber: 19,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$m,
        lineNumber: 25,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-2xl md:text-3xl text-slate-800 font-bold",
              children: "Form \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$m,
              lineNumber: 32,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 31,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-8 mt-8",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Input Types"
                }, void 0, false, {
                  fileName: _jsxFileName$m,
                  lineNumber: 42,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "grid gap-5 md:grid-cols-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "default",
                        children: "Default"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 48,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        id: "default",
                        className: "form-input w-full",
                        type: "text"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 49,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 47,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 45,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex items-center justify-between",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                          className: "block text-sm font-medium mb-1",
                          htmlFor: "tooltip",
                          children: "W/ Tooltip"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 58,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                          className: "ml-2",
                          bg: "dark",
                          size: "md",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "text-sm text-slate-200",
                            children: "Excepteur sint occaecat cupidata non proident, sunt."
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 60,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 59,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 57,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        id: "tooltip",
                        className: "form-input w-full",
                        type: "text"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 63,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 56,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 54,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "mandatory",
                        children: ["Mandatory ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          className: "text-rose-500",
                          children: "*"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 71,
                          columnNumber: 105
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 71,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        id: "mandatory",
                        className: "form-input w-full",
                        type: "text",
                        required: true
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 72,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 70,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 68,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "prefix",
                        children: "W/ Prefix"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 80,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "relative",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          id: "prefix",
                          className: "form-input w-full pl-12",
                          type: "text"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 82,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "absolute inset-0 right-auto flex items-center pointer-events-none",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-sm text-slate-400 font-medium px-3",
                            children: "USD"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 84,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 83,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 81,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 79,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 77,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "suffix",
                        children: "W/ Suffix"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 94,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "relative",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          id: "suffix",
                          className: "form-input w-full pr-8",
                          type: "text"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 96,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "absolute inset-0 left-auto flex items-center pointer-events-none",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-sm text-slate-400 font-medium px-3",
                            children: "%"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 98,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 97,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 95,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 93,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 91,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "placeholder",
                        children: "W/ Placeholder"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 108,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        id: "placeholder",
                        className: "form-input w-full",
                        type: "text",
                        placeholder: "Something cool..."
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 109,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 107,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 105,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "icon",
                        children: "W/ Icon"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 117,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "relative",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          id: "icon",
                          className: "form-input w-full pl-9",
                          type: "text"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 119,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "absolute inset-0 right-auto flex items-center pointer-events-none",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            className: "w-4 h-4 fill-current text-slate-400 shrink-0 ml-3 mr-2",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z"
                            }, void 0, false, {
                              fileName: _jsxFileName$m,
                              lineNumber: 122,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 121,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 120,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 118,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 116,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 114,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                          className: "block text-sm font-medium mb-1",
                          htmlFor: "supporting-text",
                          children: "W/ Supporting Text"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 134,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          id: "supporting-text",
                          className: "form-input w-full",
                          type: "text"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 135,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 133,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-xs mt-1",
                        children: "Supporting text goes here!"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 137,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 132,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 130,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "form-search",
                        children: "Search"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 145,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "relative",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          id: "form-search",
                          className: "form-input w-full pl-9",
                          type: "search"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 147,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                          className: "absolute inset-0 right-auto group",
                          type: "submit",
                          "aria-label": "Search",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            className: "w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 mr-2",
                            viewBox: "0 0 16 16",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                            }, void 0, false, {
                              fileName: _jsxFileName$m,
                              lineNumber: 150,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                            }, void 0, false, {
                              fileName: _jsxFileName$m,
                              lineNumber: 151,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$m,
                            lineNumber: 149,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 148,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 146,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 144,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 142,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$m,
                  lineNumber: 43,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$m,
                lineNumber: 41,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Input Sizes"
                }, void 0, false, {
                  fileName: _jsxFileName$m,
                  lineNumber: 163,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "grid gap-5 md:grid-cols-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "small",
                        children: "Small"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 169,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        id: "small",
                        className: "form-input w-full px-2 py-1",
                        type: "text"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 170,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 168,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 166,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "normal",
                        children: "Default"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 178,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        id: "normal",
                        className: "form-input w-full",
                        type: "text"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 179,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 177,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 175,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "large",
                        children: "Large"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 187,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        id: "large",
                        className: "form-input w-full px-4 py-3",
                        type: "text"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 188,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 186,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 184,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$m,
                  lineNumber: 164,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$m,
                lineNumber: 162,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Input States"
                }, void 0, false, {
                  fileName: _jsxFileName$m,
                  lineNumber: 198,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "grid gap-5 md:grid-cols-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                        className: "block text-sm font-medium mb-1",
                        htmlFor: "disabled",
                        children: "Disabled"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 204,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        id: "disabled",
                        className: "form-input w-full disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed",
                        type: "text",
                        placeholder: "Something cool...",
                        disabled: true
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 205,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 203,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 201,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                          className: "block text-sm font-medium mb-1",
                          htmlFor: "error",
                          children: ["Error ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-rose-500",
                            children: "*"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 214,
                            columnNumber: 99
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$m,
                          lineNumber: 214,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          id: "error",
                          className: "form-input w-full border-rose-300",
                          type: "text"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 215,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 213,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-xs mt-1 text-rose-500",
                        children: "This field is required!"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 217,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 212,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 210,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                          className: "block text-sm font-medium mb-1",
                          htmlFor: "success",
                          children: ["Success ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "text-rose-500",
                            children: "*"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 226,
                            columnNumber: 103
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$m,
                          lineNumber: 226,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          id: "success",
                          className: "form-input w-full border-emerald-300",
                          type: "text"
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 227,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 225,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-xs mt-1 text-emerald-500",
                        children: "Sounds good!"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 229,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 224,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 222,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$m,
                  lineNumber: 199,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$m,
                lineNumber: 197,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Select"
                }, void 0, false, {
                  fileName: _jsxFileName$m,
                  lineNumber: 239,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                  className: "block text-sm font-medium mb-1",
                  htmlFor: "country",
                  children: "Country"
                }, void 0, false, {
                  fileName: _jsxFileName$m,
                  lineNumber: 240,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("select", {
                  id: "country",
                  className: "form-select",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    children: "Italy"
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 242,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    children: "USA"
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 243,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("option", {
                    children: "United Kingdom"
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 244,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$m,
                  lineNumber: 241,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$m,
                lineNumber: 238,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Checkbox"
                }, void 0, false, {
                  fileName: _jsxFileName$m,
                  lineNumber: 250,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        type: "checkbox",
                        className: "form-checkbox"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 256,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-sm ml-2",
                        children: "Active"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 257,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 255,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 253,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        type: "checkbox",
                        className: "form-checkbox"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 265,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-sm ml-2",
                        children: "Selected"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 266,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 264,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 262,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        type: "checkbox",
                        className: "form-checkbox disabled:bg-slate-50",
                        disabled: true
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 274,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-sm ml-2",
                        children: "Disabled"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 275,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 273,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 271,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$m,
                  lineNumber: 251,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$m,
                lineNumber: 249,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Radio"
                }, void 0, false, {
                  fileName: _jsxFileName$m,
                  lineNumber: 285,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        type: "radio",
                        name: "radio-buttons",
                        className: "form-radio"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 291,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-sm ml-2",
                        children: "Active"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 292,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 290,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 288,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        type: "radio",
                        name: "radio-buttons",
                        className: "form-radio"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 300,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-sm ml-2",
                        children: "Selected"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 301,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 299,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 297,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                        type: "radio",
                        name: "radio-buttons",
                        className: "form-radio disabled:bg-slate-50",
                        disabled: true
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 309,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        className: "text-sm ml-2",
                        children: "Disabled"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 310,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 308,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 306,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$m,
                  lineNumber: 286,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$m,
                lineNumber: 284,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Toggle Switch"
                }, void 0, false, {
                  fileName: _jsxFileName$m,
                  lineNumber: 320,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3 w-24",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "form-switch",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          type: "checkbox",
                          id: "switch-1",
                          className: "sr-only",
                          checked: toggle1,
                          onChange: () => setToggle1(!toggle1)
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 327,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                          className: "bg-slate-400",
                          htmlFor: "switch-1",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "bg-white shadow-sm",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 329,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "sr-only",
                            children: "Switch label"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 330,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$m,
                          lineNumber: 328,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 326,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm text-slate-400 italic ml-2",
                        children: toggle1 ? "On" : "Off"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 333,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 325,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 323,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3 w-24",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "form-switch",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          type: "checkbox",
                          id: "switch-2",
                          className: "sr-only",
                          checked: toggle2,
                          onChange: () => setToggle2(!toggle2)
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 342,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                          className: "bg-slate-400",
                          htmlFor: "switch-2",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "bg-white shadow-sm",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 344,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "sr-only",
                            children: "Switch label"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 345,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$m,
                          lineNumber: 343,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 341,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm text-slate-400 italic ml-2",
                        children: toggle2 ? "On" : "Off"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 348,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 340,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 338,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-3 w-32",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "form-switch",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                          type: "checkbox",
                          id: "switch-3",
                          className: "sr-only",
                          checked: toggle3,
                          onChange: () => setToggle3(!toggle3),
                          disabled: true
                        }, void 0, false, {
                          fileName: _jsxFileName$m,
                          lineNumber: 357,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                          className: "bg-slate-400",
                          htmlFor: "switch-3",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "bg-white shadow-sm",
                            "aria-hidden": "true"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 359,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                            className: "sr-only",
                            children: "Switch label"
                          }, void 0, false, {
                            fileName: _jsxFileName$m,
                            lineNumber: 360,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$m,
                          lineNumber: 358,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$m,
                        lineNumber: 356,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm text-slate-400 italic ml-2",
                        children: "Disabled"
                      }, void 0, false, {
                        fileName: _jsxFileName$m,
                        lineNumber: 363,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$m,
                      lineNumber: 355,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$m,
                    lineNumber: 353,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$m,
                  lineNumber: 321,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$m,
                lineNumber: 319,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$m,
              lineNumber: 38,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$m,
            lineNumber: 35,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$m,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$m,
        lineNumber: 27,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$m,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$m,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}
var _jsxFileName$l = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/DropdownClassic.jsx";
function DropdownClassic() {
  const options = [{
    id: 0,
    period: "Today"
  }, {
    id: 1,
    period: "Last 7 Days"
  }, {
    id: 2,
    period: "Last Month"
  }, {
    id: 3,
    period: "Last 12 Months"
  }, {
    id: 4,
    period: "All Time"
  }];
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const [selected, setSelected] = react.exports.useState(2);
  const trigger = react.exports.useRef(null);
  const dropdown = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative inline-flex",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      ref: trigger,
      className: "btn justify-between min-w-44 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600",
      "aria-label": "Select date range",
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
        className: "flex items-center",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
          children: options[selected].period
        }, void 0, false, {
          fileName: _jsxFileName$l,
          lineNumber: 67,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$l,
        lineNumber: 66,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "shrink-0 ml-1 fill-current text-slate-400",
        width: "11",
        height: "7",
        viewBox: "0 0 11 7",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          d: "M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z"
        }, void 0, false, {
          fileName: _jsxFileName$l,
          lineNumber: 70,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$l,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$l,
      lineNumber: 58,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      show: dropdownOpen,
      tag: "div",
      className: "z-10 absolute top-full left-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
      enter: "transition ease-out duration-100 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-100",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: dropdown,
        className: "font-medium text-sm text-slate-600",
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children: options.map((option) => {
          return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            tabIndex: "0",
            className: `flex items-center w-full hover:bg-slate-50 py-1 px-3 cursor-pointer ${option.id === selected && "text-primary"}`,
            onClick: () => {
              setSelected(option.id);
              setDropdownOpen(false);
            },
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: `shrink-0 mr-2 fill-current text-primary ${option.id !== selected && "invisible"}`,
              width: "12",
              height: "9",
              viewBox: "0 0 12 9",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z"
              }, void 0, false, {
                fileName: _jsxFileName$l,
                lineNumber: 100,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$l,
              lineNumber: 99,
              columnNumber: 19
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
              children: option.period
            }, void 0, false, {
              fileName: _jsxFileName$l,
              lineNumber: 102,
              columnNumber: 19
            }, this)]
          }, option.id, true, {
            fileName: _jsxFileName$l,
            lineNumber: 93,
            columnNumber: 17
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName$l,
        lineNumber: 84,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$l,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$l,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
var _jsxFileName$k = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/DropdownFull.jsx";
function DropdownFull() {
  const options = [{
    id: 0,
    period: "Most Popular"
  }, {
    id: 1,
    period: "Newest"
  }, {
    id: 2,
    period: "Lowest Price"
  }, {
    id: 3,
    period: "Highest Price"
  }];
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const [selected, setSelected] = react.exports.useState(0);
  const trigger = react.exports.useRef(null);
  const dropdown = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative inline-flex w-full",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      ref: trigger,
      className: "btn w-full justify-between min-w-44 bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600",
      "aria-label": "Select date range",
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
        className: "flex items-center",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
          children: options[selected].period
        }, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$k,
        lineNumber: 62,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "shrink-0 ml-1 fill-current text-slate-400",
        width: "11",
        height: "7",
        viewBox: "0 0 11 7",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          d: "M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z"
        }, void 0, false, {
          fileName: _jsxFileName$k,
          lineNumber: 66,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$k,
        lineNumber: 65,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$k,
      lineNumber: 54,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      show: dropdownOpen,
      tag: "div",
      className: "z-10 absolute top-full left-0 w-full bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1",
      enter: "transition ease-out duration-100 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-100",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: dropdown,
        className: "font-medium text-sm text-slate-600 divide-y divide-slate-200",
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children: options.map((option) => {
          return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            tabIndex: "0",
            className: `flex items-center justify-between w-full hover:bg-slate-50 py-2 px-3 cursor-pointer ${option.id === selected && "text-primary"}`,
            onClick: () => {
              setSelected(option.id);
              setDropdownOpen(false);
            },
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
              children: option.period
            }, void 0, false, {
              fileName: _jsxFileName$k,
              lineNumber: 95,
              columnNumber: 19
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: `shrink-0 mr-2 fill-current text-primary ${option.id !== selected && "invisible"}`,
              width: "12",
              height: "9",
              viewBox: "0 0 12 9",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z"
              }, void 0, false, {
                fileName: _jsxFileName$k,
                lineNumber: 97,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$k,
              lineNumber: 96,
              columnNumber: 19
            }, this)]
          }, option.id, true, {
            fileName: _jsxFileName$k,
            lineNumber: 89,
            columnNumber: 17
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName$k,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$k,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$k,
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
var _jsxFileName$j = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/DropdownFilter.jsx";
function DropdownFilter({
  align
}) {
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const trigger = react.exports.useRef(null);
  const dropdown = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative inline-flex",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      ref: trigger,
      className: "btn bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600",
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
        className: "sr-only",
        children: "Filter"
      }, void 0, false, {
        fileName: _jsxFileName$j,
        lineNumber: 43,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("wbr", {}, void 0, false, {
        fileName: _jsxFileName$j,
        lineNumber: 43,
        columnNumber: 48
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "w-4 h-4 fill-current",
        viewBox: "0 0 16 16",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          d: "M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z"
        }, void 0, false, {
          fileName: _jsxFileName$j,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$j,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$j,
      lineNumber: 36,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      show: dropdownOpen,
      tag: "div",
      className: `origin-top-right z-10 absolute top-full min-w-56 bg-white border border-slate-200 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: dropdown,
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-xs font-semibold text-slate-400 uppercase pt-1.5 pb-2 px-4",
          children: "Filters"
        }, void 0, false, {
          fileName: _jsxFileName$j,
          lineNumber: 60,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
          className: "mb-4",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "py-1 px-3",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                type: "checkbox",
                className: "form-checkbox"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 64,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-sm font-medium ml-2",
                children: "Direct VS Indirect"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 65,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$j,
              lineNumber: 63,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$j,
            lineNumber: 62,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "py-1 px-3",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                type: "checkbox",
                className: "form-checkbox"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 70,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-sm font-medium ml-2",
                children: "Real Time Value"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 71,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$j,
              lineNumber: 69,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$j,
            lineNumber: 68,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "py-1 px-3",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                type: "checkbox",
                className: "form-checkbox"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 76,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-sm font-medium ml-2",
                children: "Top Channels"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 77,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$j,
              lineNumber: 75,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$j,
            lineNumber: 74,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "py-1 px-3",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                type: "checkbox",
                className: "form-checkbox"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 82,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-sm font-medium ml-2",
                children: "Sales VS Refunds"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 83,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$j,
              lineNumber: 81,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$j,
            lineNumber: 80,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "py-1 px-3",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                type: "checkbox",
                className: "form-checkbox"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 88,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-sm font-medium ml-2",
                children: "Last Order"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 89,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$j,
              lineNumber: 87,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$j,
            lineNumber: 86,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
            className: "py-1 px-3",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
              className: "flex items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                type: "checkbox",
                className: "form-checkbox"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 94,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                className: "text-sm font-medium ml-2",
                children: "Total Spent"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 95,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$j,
              lineNumber: 93,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$j,
            lineNumber: 92,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$j,
          lineNumber: 61,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "py-2 px-3 border-t border-slate-200 bg-slate-50",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
            className: "flex items-center justify-between",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                className: "btn-xs bg-white border-slate-200 hover:border-slate-300 text-slate-500 hover:text-slate-600",
                children: "Clear"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 102,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$j,
              lineNumber: 101,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                className: "btn-xs bg-primary hover:bg-indigo-600 text-white",
                onClick: () => setDropdownOpen(false),
                onBlur: () => setDropdownOpen(false),
                children: "Apply"
              }, void 0, false, {
                fileName: _jsxFileName$j,
                lineNumber: 105,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$j,
              lineNumber: 104,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$j,
            lineNumber: 100,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$j,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$j,
        lineNumber: 59,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$j,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$j,
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
var DropdownImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAD/ElEQVR4Ae2axXorRxCFq+by3VyT2NkENTecrC4zMz5A3sIw3mUXfoLQNsywCTOzMSiIhWZ7ZrpSU25NmGFGX/p8UneV8Pzq023E63edg3aWBVHIABgAA2AADIABMAAGwAAYAANw9VU39HTbbQzgurNbNvdv2zKQ6LHbEqBYfAsBerrz27b0b98mGO0FUG+MLi42AJFrdr9je//OHYPJhN1Om7hQehuImCEYAZOJ/M4dA7t2DqaSdnsAFEtvE0+BeQwmaVLJ/O5dA3v2CEbMASqVjzxvQawHEAKCXLJSCXvvnoF9+5x0yo4vgFJe+dv3CMQ4sAQkkCwIYipx2b59gwcOCEYMAeQselPME0tAQNTaGNJzqA4eHDx4yMmk7dgBlMvvKd+TJcBl51oUVrpIJ/OHDg0ePuxkMnaMAFxvfrL6MZBsgnA/i3QlM2kezKTzR444R486WcGIGkBUKLzV8qgllUzCxQPKLuFeWuJFOHp08NhxJ5u1owcold5CvY918kH6oAmF4UCo78dcxj5xwuFLLmdHCTC/0KjVRmUF9L5FSZNuxDFJp4VIROHj2f3Jk0OnTju9ghEBAKtQfDtcAVG4CsGgG11ryp88PpfdyAxnzg719m6MAqDwpvgKP2nkWawShkAo+QlZfunxuWz+7Fnn7PmhC/4Yxkr4h6SIFmZ5EPlKEciVS1KuxyVXvk++y6PyPd/3lL64ynU9Hj3X95Y8d8lnGG/F1wsrp8H6DwHSqesBqJVsZCJEUhRwoGUBIykgkHv0GMzyYFkTIrmbrX+zsPJFz/oKRP8dQCp5HeiDkidFSodFWEhnXbWSREIgt+IyE+IifDFjPb+04ssINvHaNR2dnRcF7nTukaVDjhZpKtAi7Tx8+IL/RWXprpq6dwm/d/+frkA6dR0p0oenUmISpBNJQlQAoS+Ss4Bj1p2oTD87701AqIgArkcLKYi5nJhIIsGAAAmxFSENB7OL46Xa07NL4yCKEmDVynXdnbYEwyImQFRilIH0kW9ZchgBWgA+TM+PFSaf4BFE0QMkE1ezRUAdaH2qy74Ux0ra4NqcHv2q9PjU7Gi8vp1OZ663GACAlAq//xEICb5lcd+YHvlo5PaPxu7Q7uMDYFkrE91XinVAxiC9AgIRDI2p4Xc+vvm9T29tzIzAzxV5hHq6L1+1ar18/CTBRzn1iYHqzeHRiYfqzc8gVOwA5ADFIOcKEclXgMCqNYdHxh6sNbT1WANkUtcSkYW4nKdK7dOR0Qeq9U9BFHeAjo6LV6/pANFk9dOR4ftD620BIN/AIVYqnwyP3F+taevtBLB69fpXXrmxItajkvl/IQNgAAyAATAABsAAGAADYAD+vwDfAQSHHlNp5b1mAAAAAElFTkSuQmCC";
var DropdownImage01 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAIAAAAn5KxJAAACwUlEQVR4Ae3ZhY4sVRDG8a9GcIfxSwybXhxi133d5QV4i5Umztvg7hDB3dfdd8e9u0/RPYXG0DvTm5z/7mjsl0pVbOjx8xM4CgXw5zRUQzVUQzVUQzVUQzVUQx9+6Ik7bjeOANSyyqdOTJ05NR25w/A1dHv7cyK64/b0mdNTZ89MRyOGT6HZ3EKtlgURQK7y3Nnp8+dnYlHDj8e0vfMFmAlgZgCxiHHh/PSlizOxmOE7KAMMEBG8PK6rvHxpurNzJi5cP0D3D7637ZrnY0ggmS65yq6umZ4eMxE32g9Vyt7d/RoeDES/UfH7MkTTPT0zff1mMmG0DSpt7XzmGRnMoqQ/LoP3RO500/395sCAmUwabYPu7nytHFsmyr8tgUxUkmsDEon04KA5NGymUkYboJZd3T/8QSZKALxnAkAyU4kIzPJNKmkMj5ijY+axYx2tg0pbW5+D8HsEUbOn/+0jyTde7HI7RkdnxieevPPvcUP4P3JsVSk57DjMrBw4jqNs5ShWlrIt23af3Y+WYzccq2FbdffZadQs940d3KiFigi0CpqIPQ5WIEDJRhIoAHZkvF4A2AtMMmArsFG6+n07sA6pBdBQ6Nrbb+uAnBIxiLjpBZouIrkqRhNMqDmrWfudOlZlkK2DxiIPEwVFI2dPEJ184Qllb8uN5f3CmxVrGZBaDI09BvI84gT9fkIEOXaUqotbB6+V6kuQWg8NBELRyEMyNRYmmIhAQlWFyuL69iuFygKkdkHvuP3+cPhaVlCqyST2jM2Z5orzq+sv5krzkNoLjcceBUNum5WSs8nkZ5dWXsgW5iD5Ahp9DM0ZKvaw2fzs/OJzmdwsJJ9Ab73l7muuuVWxAiib+2lu/tnD7E+QfAWNxx9jcCYzOzv/zGFGiPAjNBy6/sOPnjoQ4hVO/86koe1MQzVUQzVUQzVUQzX0ZynAXXojKHwUAAAAAElFTkSuQmCC";
var DropdownImage02 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAIAAAAn5KxJAAACxklEQVR4Ae3Yg3YkXRAA4Ax/7h7Gxjq2bdtO3m5t27bGNuNmtiodP8BMcOsiGX+n6jZFOVV9IfshCJRACZRACXR3ECiBEiiBEmhJaalWo7FYLHsdmpuXl52VZbc73r97azKb9y40NCysq6tLIhZLJGKr1fbm9WujybRH1+jo6NiRo/+DVSqBEMMyePHipd5g3HPQ0rKytNRUKWYVrdDFEpHJZHn69JlOb9hD0NjYuNbWZskaEbVSMWYXvWJYBg8fPdFo9XsCCrap6cl//v4baEL1EQlWyCyG2GAw3bv/QKXRBX8/WldXf+LEMUGJSUWpkFQRTvi/WKc33rpzX6nSBBN67FhKY0MDktAkOJEI/2+mVqBrtLrrN+/+VqqDA5XL5bMzM3K5bFtGRcIyFVaC8CSy0S1RabRXrt3+pVAF4RDa3t6WmJiwWf1N5XaueNszMCnUmouXb/z4pQwoNDU1tbamWqg4bPgCa4dbsiO7kHLhf1gG5y5e+/ZTESDosWPHcnNyOI7lYXAsyzCsMHEMBE3jBI2iMVZWaAobtULRgS59TXVVWFgYK0AxUItUDBaNqEQuWhFJLYOXZgIKlclkvb09IashgMSOA3TgZBkObEgFE0VhboE8v7C0MD8P7wv0xpSYkFBcUsxzPGYUkChEMRBZ/F8oOxr9c/Met3uz4oGGlpWXxcXGQtExeKAhkl0vPc4URXt9fpvNtri0HMxDaP9AH2zCkE8GMgow9DIsNqS6PR44mZqfXwjyITQ6Oqampmo9mzix0BhsrNPlVqs1Pr9/T5yUFBUVpRxLAdwqL+yaMKMOh0OhULg93j10mtc/MPD3X/I1I4bDbv/+44fL5d5jlyKhYS2tzWtI3m6zf/3yxeF07sVLkZy83LQzqRar9fOnj3a7Y+9e3BWXlGjUatjvHPAbEARKoARKoARKoARKoARKoH8AYsIHTwOnSfsAAAAASUVORK5CYII=";
var DropdownImage03 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAIAAAAn5KxJAAACzElEQVR4Ae3ZQ5QzWRjG8eet5LNtdVgZ27Zt2/ZMKvvZr2a2sz9j27atto3k1n0ab2s3/FLV59x/I05+KUP2OOwszIQ8xCsHdVAHdVAHddDoc1AHddBZJ1ye3OrPACgH++ZdfP/iy4qzlRtbaPjdxxBJbsktv/z+1Vc8MG+bH1Mo635ib4eIADJ3m7/+ygc2X11cWOPHcWYy331CEgAJAAtq/JpritlrgyUpP2bQ7z/RKyIgAILkolTev6648w3BsrQfG+ivX6M8CJDjVooISAGWpvK731jc5+ZgZcaPHorQlH/8nMRYgvFk4qosS+X3vzk45LbSGuVGBgUq334kIgBIqlWvjl2nklem8offXjrmjmBdthAZdGSIIjQCjHGnD1uCeo36RUYG6gl3BqfcVdqYK0QA5dBA+ddvCIA6/AgRKldkOltbn/PPuDs4597SlnyhelBt8NuPdWAShDa1DNArOt0KQX3mppx//r3BpfeXtvl/i5vE/1HFmI6efhgjHMlaE1praW1oaUwlNLZirbGsmLA8+mtHfgdNOGTsws7adY3dC6sGTWZ2gyVFSAtLeBCKBQArEOgUaq0OWF2Kze+o3fzjWws7aqFVASpz5nmb8xB4BMdYtDodkJMzkwKFAOe0/rnim9fntv8JrWrQRGonJBKgtcDUVCqcthQQ6jObf1/21WuzWn6HVmWol9lNQZ7oCoq0k1zRK17Tb3M/eyXR/Bu0CKCJZDK1M0EPoAXGrTK+TCLR9Kv30Yte468Rr0K9LQXMmQMISfEwsRQCwbD+5/DJh/jUw5iujGqIJnK7ja8qPY/GEBAwrP2p8t6zYd3PmCpyaHo3qJQQiK37ufz2U6b2R2gxgcqGtCxaCoYE+OcP5bceN3+OE+MF9XK7Qxj+8YN547Hwj++hxRCKOQuGHnnQ/vEdtn/uPJODRpmDOqiDOqiDOqiDOugwlYBKM1pXDEQAAAAASUVORK5CYII=";
var _jsxFileName$i = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/DropdownSwitch.jsx";
function DropdownSwitch({
  align
}) {
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const trigger = react.exports.useRef(null);
  const dropdown = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      ref: trigger,
      className: "grow flex items-center truncate",
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
        className: "w-8 h-8 rounded-full mr-2",
        src: DropdownImage,
        width: "32",
        height: "32",
        alt: "Group 01"
      }, void 0, false, {
        fileName: _jsxFileName$i,
        lineNumber: 48,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "truncate",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
          className: "text-sm font-medium",
          children: "Acme Inc."
        }, void 0, false, {
          fileName: _jsxFileName$i,
          lineNumber: 50,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$i,
        lineNumber: 49,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "w-3 h-3 shrink-0 ml-1 fill-current text-slate-400",
        viewBox: "0 0 12 12",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"
        }, void 0, false, {
          fileName: _jsxFileName$i,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$i,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$i,
      lineNumber: 41,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      className: `origin-top-right z-10 absolute top-full min-w-60 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
      show: dropdownOpen,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
            className: "font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3",
            href: "#0",
            onClick: () => setDropdownOpen(false),
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "grow flex items-center truncate",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  className: "w-7 h-7 rounded-full mr-2",
                  src: DropdownImage01,
                  width: "28",
                  height: "28",
                  alt: "Channel 01"
                }, void 0, false, {
                  fileName: _jsxFileName$i,
                  lineNumber: 75,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "truncate",
                  children: "Acme Inc."
                }, void 0, false, {
                  fileName: _jsxFileName$i,
                  lineNumber: 76,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$i,
                lineNumber: 74,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                className: "w-3 h-3 shrink-0 fill-current text-primary ml-1",
                viewBox: "0 0 12 12",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                  d: "M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                }, void 0, false, {
                  fileName: _jsxFileName$i,
                  lineNumber: 79,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$i,
                lineNumber: 78,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$i,
              lineNumber: 73,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$i,
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$i,
          lineNumber: 71,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
            className: "font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3",
            href: "#0",
            onClick: () => setDropdownOpen(false),
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "grow flex items-center truncate",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  className: "w-7 h-7 rounded-full mr-2",
                  src: DropdownImage02,
                  width: "28",
                  height: "28",
                  alt: "Channel 02"
                }, void 0, false, {
                  fileName: _jsxFileName$i,
                  lineNumber: 88,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "truncate",
                  children: "Acme Limited"
                }, void 0, false, {
                  fileName: _jsxFileName$i,
                  lineNumber: 89,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$i,
                lineNumber: 87,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$i,
              lineNumber: 86,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$i,
            lineNumber: 85,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$i,
          lineNumber: 84,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
            className: "font-medium text-sm text-slate-600 hover:text-slate-800 block py-1.5 px-3",
            href: "#0",
            onClick: () => setDropdownOpen(false),
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex items-center justify-between",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "grow flex items-center truncate",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                  className: "w-7 h-7 rounded-full mr-2",
                  src: DropdownImage03,
                  width: "28",
                  height: "28",
                  alt: "Channel 03"
                }, void 0, false, {
                  fileName: _jsxFileName$i,
                  lineNumber: 98,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "truncate",
                  children: "Acme Srl"
                }, void 0, false, {
                  fileName: _jsxFileName$i,
                  lineNumber: 99,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$i,
                lineNumber: 97,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$i,
              lineNumber: 96,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$i,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$i,
          lineNumber: 94,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$i,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$i,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$i,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
var _jsxFileName$h = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/DropdownEditMenu.jsx";
function DropdownEditMenu(_e) {
  var _f = _e, {
    children,
    align
  } = _f, rest = __objRest(_f, [
    "children",
    "align"
  ]);
  const [dropdownOpen, setDropdownOpen] = react.exports.useState(false);
  const trigger = react.exports.useRef(null);
  const dropdown = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!dropdown.current)
        return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target))
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!dropdownOpen || keyCode !== 27)
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", __spreadProps(__spreadValues({}, rest), {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
      ref: trigger,
      className: `bg-white text-slate-400 hover:text-slate-500 rounded-full ${dropdownOpen && "bg-slate-100 text-slate-500"}`,
      "aria-haspopup": "true",
      onClick: () => setDropdownOpen(!dropdownOpen),
      "aria-expanded": dropdownOpen,
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
        className: "sr-only",
        children: "Menu"
      }, void 0, false, {
        fileName: _jsxFileName$h,
        lineNumber: 45,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "w-8 h-8 fill-current",
        viewBox: "0 0 32 32",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("circle", {
          cx: "16",
          cy: "16",
          r: "2"
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 47,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("circle", {
          cx: "10",
          cy: "16",
          r: "2"
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 48,
          columnNumber: 11
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("circle", {
          cx: "22",
          cy: "16",
          r: "2"
        }, void 0, false, {
          fileName: _jsxFileName$h,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$h,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$h,
      lineNumber: 38,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      show: dropdownOpen,
      tag: "div",
      className: `origin-top-right z-10 absolute top-full min-w-36 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`,
      enter: "transition ease-out duration-200 transform",
      enterStart: "opacity-0 -translate-y-2",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-out duration-200",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
        ref: dropdown,
        onFocus: () => setDropdownOpen(true),
        onBlur: () => setDropdownOpen(false),
        children
      }, void 0, false, {
        fileName: _jsxFileName$h,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$h,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName$h,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var _jsxFileName$g = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/Datepicker.jsx";
function Datepicker({
  align
}) {
  const options = {
    mode: "range",
    static: true,
    monthSelectorType: "static",
    dateFormat: "M j, Y",
    defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
    prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
      const customClass = align ? align : "";
      instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
    },
    onChange: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "relative",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Flatpickr, {
      className: "form-input pl-9 text-slate-500 hover:text-slate-600 font-medium focus:border-slate-300 w-60",
      options
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 28,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "absolute inset-0 right-auto flex items-center pointer-events-none",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
        className: "w-4 h-4 fill-current text-slate-500 ml-3",
        viewBox: "0 0 16 16",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
          d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z"
        }, void 0, false, {
          fileName: _jsxFileName$g,
          lineNumber: 31,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$g,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$g,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$g,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
var _jsxFileName$f = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/component/DropdownPage.jsx";
function DropdownPage() {
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$f,
      lineNumber: 21,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$f,
        lineNumber: 26,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-2xl md:text-3xl text-slate-800 font-bold",
              children: "Dropdown \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$f,
              lineNumber: 32,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$f,
            lineNumber: 31,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-8 mt-8 mb-80",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Classic Dropdown"
                }, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 42,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownClassic, {}, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 46,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 41,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "w-80",
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Full-width Dropdown"
                }, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 52,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownFull, {}, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 55,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 51,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Filter"
                }, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 60,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownFilter, {}, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 63,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 59,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Profile"
                }, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 68,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Logout, {}, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 71,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 67,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Switch Account"
                }, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 76,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownSwitch, {}, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 79,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 75,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Notification"
                }, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 84,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownNotifications, {}, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 87,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 83,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Help Center"
                }, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 92,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownHelp, {}, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 95,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 91,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Quick Selection"
                }, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 100,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownEditMenu, {
                  className: "relative inline-flex",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                      className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
                      href: "#0",
                      children: "Option 1"
                    }, void 0, false, {
                      fileName: _jsxFileName$f,
                      lineNumber: 105,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$f,
                    lineNumber: 104,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                      className: "font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3",
                      href: "#0",
                      children: "Option 2"
                    }, void 0, false, {
                      fileName: _jsxFileName$f,
                      lineNumber: 112,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$f,
                    lineNumber: 111,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                      className: "font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3",
                      href: "#0",
                      children: "Remove"
                    }, void 0, false, {
                      fileName: _jsxFileName$f,
                      lineNumber: 119,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$f,
                    lineNumber: 118,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$f,
                  lineNumber: 103,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 99,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: ["Datepicker (built with", " ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                    className: "underline hover:no-underline",
                    href: "https://github.com/flatpickr/flatpickr",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "flatpickr"
                  }, void 0, false, {
                    fileName: _jsxFileName$f,
                    lineNumber: 132,
                    columnNumber: 21
                  }, this), ")"]
                }, void 0, true, {
                  fileName: _jsxFileName$f,
                  lineNumber: 130,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Datepicker, {}, void 0, false, {
                  fileName: _jsxFileName$f,
                  lineNumber: 141,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$f,
                lineNumber: 129,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$f,
              lineNumber: 39,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$f,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$f,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$f,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$f,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$f,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var _jsxFileName$e = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/Banner2.jsx";
function Banner2({
  children,
  className,
  type,
  open,
  setOpen
}) {
  const typeIcon = (type2) => {
    switch (type2) {
      case "warning":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
          }, void 0, false, {
            fileName: _jsxFileName$e,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 15,
          columnNumber: 11
        }, this);
      case "error":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
          }, void 0, false, {
            fileName: _jsxFileName$e,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 21,
          columnNumber: 11
        }, this);
      case "success":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
          }, void 0, false, {
            fileName: _jsxFileName$e,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 27,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
          }, void 0, false, {
            fileName: _jsxFileName$e,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$e,
          lineNumber: 33,
          columnNumber: 11
        }, this);
    }
  };
  const typeColor = (type2) => {
    switch (type2) {
      case "warning":
        return "bg-amber-100 border-amber-200 text-amber-600";
      case "error":
        return "bg-rose-100 border-rose-200 text-rose-600";
      case "success":
        return "bg-emerald-100 border-emerald-200 text-emerald-600";
      default:
        return "bg-indigo-100 border-indigo-200 text-primary";
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: open && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: `px-4 py-2 rounded-sm text-sm border ${typeColor(type)}`,
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex w-full justify-between items-start",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex",
            children: [typeIcon(type), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 61,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$e,
            lineNumber: 59,
            columnNumber: 15
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            className: "opacity-70 hover:opacity-80 ml-3 mt-[3px]",
            onClick: () => setOpen(false),
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sr-only",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 66,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-4 h-4 fill-current",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
              }, void 0, false, {
                fileName: _jsxFileName$e,
                lineNumber: 68,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$e,
              lineNumber: 67,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$e,
            lineNumber: 65,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$e,
          lineNumber: 58,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$e,
        lineNumber: 57,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$e,
      lineNumber: 56,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
var _jsxFileName$d = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/Toast.jsx";
function Toast({
  children,
  className,
  type,
  open,
  setOpen
}) {
  const typeIcon = (type2) => {
    switch (type2) {
      case "warning":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
          }, void 0, false, {
            fileName: _jsxFileName$d,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 15,
          columnNumber: 11
        }, this);
      case "error":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
          }, void 0, false, {
            fileName: _jsxFileName$d,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 21,
          columnNumber: 11
        }, this);
      case "success":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
          }, void 0, false, {
            fileName: _jsxFileName$d,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 27,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
          }, void 0, false, {
            fileName: _jsxFileName$d,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$d,
          lineNumber: 33,
          columnNumber: 11
        }, this);
    }
  };
  const typeColor = (type2) => {
    switch (type2) {
      case "warning":
        return "bg-amber-500";
      case "error":
        return "bg-rose-500";
      case "success":
        return "bg-emerald-500";
      default:
        return "bg-primary";
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: open && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: `inline-flex min-w-80 px-4 py-2 rounded-sm text-sm text-white ${typeColor(type)}`,
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex w-full justify-between items-start",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex",
            children: [typeIcon(type), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "font-medium",
              children
            }, void 0, false, {
              fileName: _jsxFileName$d,
              lineNumber: 61,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$d,
            lineNumber: 59,
            columnNumber: 15
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            className: "opacity-70 hover:opacity-80 ml-3 mt-[3px]",
            onClick: () => setOpen(false),
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sr-only",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName$d,
              lineNumber: 66,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-4 h-4 fill-current",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
              }, void 0, false, {
                fileName: _jsxFileName$d,
                lineNumber: 68,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$d,
              lineNumber: 67,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$d,
            lineNumber: 65,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$d,
          lineNumber: 58,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$d,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$d,
      lineNumber: 56,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
var _jsxFileName$c = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/Toast2.jsx";
function Toast2({
  children,
  className,
  type,
  open,
  setOpen
}) {
  const typeIcon = (type2) => {
    switch (type2) {
      case "warning":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
          }, void 0, false, {
            fileName: _jsxFileName$c,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$c,
          lineNumber: 15,
          columnNumber: 11
        }, this);
      case "error":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
          }, void 0, false, {
            fileName: _jsxFileName$c,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$c,
          lineNumber: 21,
          columnNumber: 11
        }, this);
      case "success":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
          }, void 0, false, {
            fileName: _jsxFileName$c,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$c,
          lineNumber: 27,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current opacity-80 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
          }, void 0, false, {
            fileName: _jsxFileName$c,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$c,
          lineNumber: 33,
          columnNumber: 11
        }, this);
    }
  };
  const typeColor = (type2) => {
    switch (type2) {
      case "warning":
        return "bg-amber-100 border-amber-200 text-amber-600";
      case "error":
        return "bg-rose-100 border-rose-200 text-rose-600";
      case "success":
        return "bg-emerald-100 border-emerald-200 text-emerald-600";
      default:
        return "bg-indigo-100 border-indigo-200 text-primary";
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: open && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: `inline-flex min-w-80 px-4 py-2 rounded-sm text-sm border ${typeColor(type)}`,
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex w-full justify-between items-start",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex",
            children: [typeIcon(type), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children
            }, void 0, false, {
              fileName: _jsxFileName$c,
              lineNumber: 61,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$c,
            lineNumber: 59,
            columnNumber: 15
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            className: "opacity-70 hover:opacity-80 ml-3 mt-[3px]",
            onClick: () => setOpen(false),
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sr-only",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName$c,
              lineNumber: 66,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-4 h-4 fill-current",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
              }, void 0, false, {
                fileName: _jsxFileName$c,
                lineNumber: 68,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$c,
              lineNumber: 67,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$c,
            lineNumber: 65,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$c,
          lineNumber: 58,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$c,
        lineNumber: 57,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$c,
      lineNumber: 56,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
var _jsxFileName$b = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/Toast3.jsx";
function Toast3({
  children,
  className,
  type,
  open,
  setOpen
}) {
  const typeIcon = (type2) => {
    switch (type2) {
      case "warning":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current text-amber-500 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
          }, void 0, false, {
            fileName: _jsxFileName$b,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$b,
          lineNumber: 15,
          columnNumber: 11
        }, this);
      case "error":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current text-rose-500 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
          }, void 0, false, {
            fileName: _jsxFileName$b,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$b,
          lineNumber: 21,
          columnNumber: 11
        }, this);
      case "success":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current text-emerald-500 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
          }, void 0, false, {
            fileName: _jsxFileName$b,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$b,
          lineNumber: 27,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current text-primary mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
          }, void 0, false, {
            fileName: _jsxFileName$b,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$b,
          lineNumber: 33,
          columnNumber: 11
        }, this);
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: open && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "inline-flex min-w-80 px-4 py-2 rounded-sm text-sm bg-white shadow-lg border border-slate-200 text-slate-600",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex w-full justify-between items-start",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex",
            children: [typeIcon(type), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children
            }, void 0, false, {
              fileName: _jsxFileName$b,
              lineNumber: 48,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$b,
            lineNumber: 46,
            columnNumber: 15
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            className: "opacity-70 hover:opacity-80 ml-3 mt-[3px]",
            onClick: () => setOpen(false),
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sr-only",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName$b,
              lineNumber: 53,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-4 h-4 fill-current",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
              }, void 0, false, {
                fileName: _jsxFileName$b,
                lineNumber: 55,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$b,
              lineNumber: 54,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$b,
            lineNumber: 52,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$b,
          lineNumber: 45,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$b,
        lineNumber: 44,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$b,
      lineNumber: 43,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
var _jsxFileName$a = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/Notification.jsx";
function Notification({
  children,
  className,
  type,
  open,
  setOpen
}) {
  const typeIcon = (type2) => {
    switch (type2) {
      case "warning":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current text-amber-500 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
          }, void 0, false, {
            fileName: _jsxFileName$a,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$a,
          lineNumber: 15,
          columnNumber: 11
        }, this);
      case "error":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current text-rose-500 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"
          }, void 0, false, {
            fileName: _jsxFileName$a,
            lineNumber: 22,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$a,
          lineNumber: 21,
          columnNumber: 11
        }, this);
      case "success":
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current text-emerald-500 mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
          }, void 0, false, {
            fileName: _jsxFileName$a,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$a,
          lineNumber: 27,
          columnNumber: 11
        }, this);
      default:
        return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
          className: "w-4 h-4 shrink-0 fill-current text-primary mt-[3px] mr-3",
          viewBox: "0 0 16 16",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
            d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
          }, void 0, false, {
            fileName: _jsxFileName$a,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$a,
          lineNumber: 33,
          columnNumber: 11
        }, this);
    }
  };
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: open && /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className,
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        className: "inline-flex flex-col max-w-lg px-4 py-2 rounded-sm text-sm bg-white shadow-lg border border-slate-200 text-slate-600",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "flex w-full justify-between items-start",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex",
            children: [typeIcon(type), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              children
            }, void 0, false, {
              fileName: _jsxFileName$a,
              lineNumber: 48,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$a,
            lineNumber: 46,
            columnNumber: 15
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
            className: "opacity-70 hover:opacity-80 ml-3 mt-[3px]",
            onClick: () => setOpen(false),
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "sr-only",
              children: "Close"
            }, void 0, false, {
              fileName: _jsxFileName$a,
              lineNumber: 53,
              columnNumber: 17
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
              className: "w-4 h-4 fill-current",
              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
              }, void 0, false, {
                fileName: _jsxFileName$a,
                lineNumber: 55,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$a,
              lineNumber: 54,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$a,
            lineNumber: 52,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$a,
          lineNumber: 45,
          columnNumber: 13
        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "text-right mt-1",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
            className: "font-medium text-primary hover:text-indigo-600",
            href: "#0",
            children: "Action ->"
          }, void 0, false, {
            fileName: _jsxFileName$a,
            lineNumber: 60,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$a,
          lineNumber: 59,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName$a,
        lineNumber: 44,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$a,
      lineNumber: 43,
      columnNumber: 9
    }, this)
  }, void 0, false);
}
var _jsxFileName$9 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/component/AlertPage.jsx";
function AlertPage() {
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  const [bannerWarningOpen, setBannerWarningOpen] = react.exports.useState(true);
  const [bannerErrorOpen, setBannerErrorOpen] = react.exports.useState(true);
  const [bannerSuccessOpen, setBannerSuccessOpen] = react.exports.useState(true);
  const [bannerInfoOpen, setBannerInfoOpen] = react.exports.useState(true);
  const [banner2WarningOpen, setBanner2WarningOpen] = react.exports.useState(true);
  const [banner2ErrorOpen, setBanner2ErrorOpen] = react.exports.useState(true);
  const [banner2SuccessOpen, setBanner2SuccessOpen] = react.exports.useState(true);
  const [banner2InfoOpen, setBanner2InfoOpen] = react.exports.useState(true);
  const [toastWarningOpen, setToastWarningOpen] = react.exports.useState(true);
  const [toastErrorOpen, setToastErrorOpen] = react.exports.useState(true);
  const [toastSuccessOpen, setToastSuccessOpen] = react.exports.useState(true);
  const [toastInfoOpen, setToastInfoOpen] = react.exports.useState(true);
  const [toast2WarningOpen, setToast2WarningOpen] = react.exports.useState(true);
  const [toast2ErrorOpen, setToast2ErrorOpen] = react.exports.useState(true);
  const [toast2SuccessOpen, setToast2SuccessOpen] = react.exports.useState(true);
  const [toast2InfoOpen, setToast2InfoOpen] = react.exports.useState(true);
  const [toast3WarningOpen, setToast3WarningOpen] = react.exports.useState(true);
  const [toast3ErrorOpen, setToast3ErrorOpen] = react.exports.useState(true);
  const [toast3SuccessOpen, setToast3SuccessOpen] = react.exports.useState(true);
  const [toast3InfoOpen, setToast3InfoOpen] = react.exports.useState(true);
  const [notificationWarningOpen, setNotificationWarningOpen] = react.exports.useState(true);
  const [notificationErrorOpen, setNotificationErrorOpen] = react.exports.useState(true);
  const [notificationSuccessOpen, setNotificationSuccessOpen] = react.exports.useState(true);
  const [notificationInfoOpen, setNotificationInfoOpen] = react.exports.useState(true);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$9,
      lineNumber: 44,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 50,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-2xl md:text-3xl text-slate-800 font-bold",
              children: "Alert & Banner \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$9,
              lineNumber: 57,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 56,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-8 mt-8",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Banner"
                }, void 0, false, {
                  fileName: _jsxFileName$9,
                  lineNumber: 67,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
                    type: "warning",
                    open: bannerWarningOpen,
                    setOpen: setBannerWarningOpen,
                    children: "We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 70,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
                    type: "success",
                    open: bannerSuccessOpen,
                    setOpen: setBannerSuccessOpen,
                    children: "We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 74,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
                    type: "error",
                    open: bannerErrorOpen,
                    setOpen: setBannerErrorOpen,
                    children: "We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 78,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner, {
                    open: bannerInfoOpen,
                    setOpen: setBannerInfoOpen,
                    children: "We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 82,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$9,
                  lineNumber: 68,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$9,
                lineNumber: 66,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Banner 2"
                }, void 0, false, {
                  fileName: _jsxFileName$9,
                  lineNumber: 91,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner2, {
                    type: "warning",
                    open: banner2WarningOpen,
                    setOpen: setBanner2WarningOpen,
                    children: "We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 94,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner2, {
                    type: "success",
                    open: banner2SuccessOpen,
                    setOpen: setBanner2SuccessOpen,
                    children: "We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 98,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner2, {
                    type: "error",
                    open: banner2ErrorOpen,
                    setOpen: setBanner2ErrorOpen,
                    children: "We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 102,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Banner2, {
                    open: banner2InfoOpen,
                    setOpen: setBanner2InfoOpen,
                    children: "We\u2019re currently experiencing an increase in inquiries. There may be a delay in responses from the Support."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 106,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$9,
                  lineNumber: 92,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$9,
                lineNumber: 90,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Toast"
                }, void 0, false, {
                  fileName: _jsxFileName$9,
                  lineNumber: 115,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast, {
                    type: "warning",
                    open: toastWarningOpen,
                    setOpen: setToastWarningOpen,
                    children: "A warning toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 118,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast, {
                    type: "success",
                    open: toastSuccessOpen,
                    setOpen: setToastSuccessOpen,
                    children: "A successful toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 122,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast, {
                    type: "error",
                    open: toastErrorOpen,
                    setOpen: setToastErrorOpen,
                    children: "A dangerous toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 126,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast, {
                    open: toastInfoOpen,
                    setOpen: setToastInfoOpen,
                    children: "An informational toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 130,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$9,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$9,
                lineNumber: 114,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Toast 2"
                }, void 0, false, {
                  fileName: _jsxFileName$9,
                  lineNumber: 139,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast2, {
                    type: "warning",
                    open: toast2WarningOpen,
                    setOpen: setToast2WarningOpen,
                    children: "A warning toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 142,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast2, {
                    type: "success",
                    open: toast2SuccessOpen,
                    setOpen: setToast2SuccessOpen,
                    children: "A successful toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 146,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast2, {
                    type: "error",
                    open: toast2ErrorOpen,
                    setOpen: setToast2ErrorOpen,
                    children: "A dangerous toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 150,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast2, {
                    open: toast2InfoOpen,
                    setOpen: setToast2InfoOpen,
                    children: "An informational toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 154,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$9,
                  lineNumber: 140,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$9,
                lineNumber: 138,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Toast 3"
                }, void 0, false, {
                  fileName: _jsxFileName$9,
                  lineNumber: 163,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast3, {
                    type: "warning",
                    open: toast3WarningOpen,
                    setOpen: setToast3WarningOpen,
                    children: "A warning toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 166,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast3, {
                    type: "success",
                    open: toast3SuccessOpen,
                    setOpen: setToast3SuccessOpen,
                    children: "A successful toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 170,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast3, {
                    type: "error",
                    open: toast3ErrorOpen,
                    setOpen: setToast3ErrorOpen,
                    children: "A dangerous toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 174,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Toast3, {
                    open: toast3InfoOpen,
                    setOpen: setToast3InfoOpen,
                    children: "An informational toast."
                  }, void 0, false, {
                    fileName: _jsxFileName$9,
                    lineNumber: 178,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$9,
                  lineNumber: 164,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$9,
                lineNumber: 162,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Notification"
                }, void 0, false, {
                  fileName: _jsxFileName$9,
                  lineNumber: 187,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "space-y-3",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Notification, {
                    type: "warning",
                    open: notificationWarningOpen,
                    setOpen: setNotificationWarningOpen,
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "font-medium text-slate-800 mb-1",
                      children: "Merged Pull Request"
                    }, void 0, false, {
                      fileName: _jsxFileName$9,
                      lineNumber: 191,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore."
                    }, void 0, false, {
                      fileName: _jsxFileName$9,
                      lineNumber: 192,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$9,
                    lineNumber: 190,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Notification, {
                    type: "success",
                    open: notificationSuccessOpen,
                    setOpen: setNotificationSuccessOpen,
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "font-medium text-slate-800 mb-1",
                      children: "Merged Pull Request"
                    }, void 0, false, {
                      fileName: _jsxFileName$9,
                      lineNumber: 196,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore."
                    }, void 0, false, {
                      fileName: _jsxFileName$9,
                      lineNumber: 197,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$9,
                    lineNumber: 195,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Notification, {
                    type: "error",
                    open: notificationErrorOpen,
                    setOpen: setNotificationErrorOpen,
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "font-medium text-slate-800 mb-1",
                      children: "Merged Pull Request"
                    }, void 0, false, {
                      fileName: _jsxFileName$9,
                      lineNumber: 201,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore."
                    }, void 0, false, {
                      fileName: _jsxFileName$9,
                      lineNumber: 202,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$9,
                    lineNumber: 200,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Notification, {
                    open: notificationInfoOpen,
                    setOpen: setNotificationInfoOpen,
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "font-medium text-slate-800 mb-1",
                      children: "Merged Pull Request"
                    }, void 0, false, {
                      fileName: _jsxFileName$9,
                      lineNumber: 206,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      children: "Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore."
                    }, void 0, false, {
                      fileName: _jsxFileName$9,
                      lineNumber: 207,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$9,
                    lineNumber: 205,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$9,
                  lineNumber: 188,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$9,
                lineNumber: 186,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$9,
              lineNumber: 63,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$9,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$9,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$9,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$9,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$9,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
var _jsxFileName$8 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/ModalBasic.jsx";
function ModalBasic({
  children,
  id,
  title,
  modalOpen,
  setModalOpen
}) {
  const modalContent = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!modalOpen || modalContent.current.contains(target))
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!modalOpen || keyCode !== 27)
        return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
      show: modalOpen,
      enter: "transition ease-out duration-200",
      enterStart: "opacity-0",
      enterEnd: "opacity-100",
      leave: "transition ease-out duration-100",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      "aria-hidden": "true"
    }, void 0, false, {
      fileName: _jsxFileName$8,
      lineNumber: 37,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      id,
      className: "fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6",
      role: "dialog",
      "aria-modal": "true",
      show: modalOpen,
      enter: "transition ease-in-out duration-200",
      enterStart: "opacity-0 translate-y-4",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-in-out duration-200",
      leaveStart: "opacity-100 translate-y-0",
      leaveEnd: "opacity-0 translate-y-4",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: modalContent,
        className: "bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full",
        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-5 py-3 border-b border-slate-200",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "flex justify-between items-center",
            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "font-semibold text-slate-800",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName$8,
              lineNumber: 66,
              columnNumber: 15
            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
              className: "text-slate-400 hover:text-slate-500",
              onClick: (e) => {
                e.stopPropagation();
                setModalOpen(false);
              },
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "sr-only",
                children: "Close"
              }, void 0, false, {
                fileName: _jsxFileName$8,
                lineNumber: 68,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                className: "w-4 h-4 fill-current",
                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                  d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
                }, void 0, false, {
                  fileName: _jsxFileName$8,
                  lineNumber: 70,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$8,
                lineNumber: 69,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$8,
              lineNumber: 67,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName$8,
            lineNumber: 65,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$8,
          lineNumber: 64,
          columnNumber: 11
        }, this), children]
      }, void 0, true, {
        fileName: _jsxFileName$8,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$8,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
var _jsxFileName$7 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/ModalCookies.jsx";
function ModalCookies({
  children,
  id,
  title,
  modalOpen,
  setModalOpen
}) {
  const modalContent = react.exports.useRef(null);
  react.exports.useEffect(() => {
    const clickHandler = ({
      target
    }) => {
      if (!modalOpen || modalContent.current.contains(target))
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });
  react.exports.useEffect(() => {
    const keyHandler = ({
      keyCode
    }) => {
      if (!modalOpen || keyCode !== 27)
        return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
      show: modalOpen,
      enter: "transition ease-out duration-200",
      enterStart: "opacity-0",
      enterEnd: "opacity-100",
      leave: "transition ease-out duration-100",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      "aria-hidden": "true"
    }, void 0, false, {
      fileName: _jsxFileName$7,
      lineNumber: 37,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      id,
      className: "fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6",
      role: "dialog",
      "aria-modal": "true",
      show: modalOpen,
      enter: "transition ease-in-out duration-200",
      enterStart: "opacity-0 translate-y-4",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-in-out duration-200",
      leaveStart: "opacity-100 translate-y-0",
      leaveEnd: "opacity-0 translate-y-4",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: modalContent,
        className: "bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "p-5",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-2",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "flex justify-between items-center",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                className: "text-lg font-semibold text-slate-800",
                children: title
              }, void 0, false, {
                fileName: _jsxFileName$7,
                lineNumber: 67,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                className: "text-slate-400 hover:text-slate-500",
                onClick: (e) => {
                  e.stopPropagation();
                  setModalOpen(false);
                },
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "sr-only",
                  children: "Close"
                }, void 0, false, {
                  fileName: _jsxFileName$7,
                  lineNumber: 69,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                  className: "w-4 h-4 fill-current",
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                    d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
                  }, void 0, false, {
                    fileName: _jsxFileName$7,
                    lineNumber: 71,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName$7,
                  lineNumber: 70,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$7,
                lineNumber: 68,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$7,
              lineNumber: 66,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$7,
            lineNumber: 65,
            columnNumber: 13
          }, this), children]
        }, void 0, true, {
          fileName: _jsxFileName$7,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$7,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$7,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
var _jsxFileName$6 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/components/ModalAction.jsx";
function ModalAction({
  children,
  id,
  modalOpen
}) {
  const modalContent = react.exports.useRef(null);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(jsxDevRuntime.exports.Fragment, {
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      className: "fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity",
      show: modalOpen,
      enter: "transition ease-out duration-200",
      enterStart: "opacity-0",
      enterEnd: "opacity-100",
      leave: "transition ease-out duration-100",
      leaveStart: "opacity-100",
      leaveEnd: "opacity-0",
      "aria-hidden": "true"
    }, void 0, false, {
      fileName: _jsxFileName$6,
      lineNumber: 10,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Transition, {
      id,
      className: "fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6",
      role: "dialog",
      "aria-modal": "true",
      show: modalOpen,
      enter: "transition ease-in-out duration-200",
      enterStart: "opacity-0 translate-y-4",
      enterEnd: "opacity-100 translate-y-0",
      leave: "transition ease-in-out duration-200",
      leaveStart: "opacity-100 translate-y-0",
      leaveEnd: "opacity-0 translate-y-4",
      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
        ref: modalContent,
        className: "bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full",
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "p-6",
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "relative",
            children
          }, void 0, false, {
            fileName: _jsxFileName$6,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$6,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$6,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$6,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
var AnnouncementIcon = "/assets/announcement-icon.90ad60fe.svg";
var ModalImage = "/assets/modal-image.f36b2fb4.jpg";
var _jsxFileName$5 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/component/ModalPage.jsx";
function ModalPage() {
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  const [basicModalOpen, setBasicModalOpen] = react.exports.useState(false);
  const [scrollbarModalOpen, setScrollbarModalOpen] = react.exports.useState(false);
  const [cookiesModalOpen, setCookiesModalOpen] = react.exports.useState(false);
  const [successModalOpen, setSuccessModalOpen] = react.exports.useState(false);
  const [dangerModalOpen, setDangerModalOpen] = react.exports.useState(false);
  const [infoModalOpen, setInfoModalOpen] = react.exports.useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = react.exports.useState(false);
  const [newsletterModalOpen, setNewsletterModalOpen] = react.exports.useState(false);
  const [announcementModalOpen, setAnnouncementModalOpen] = react.exports.useState(false);
  const [integrationModalOpen, setIntegrationModalOpen] = react.exports.useState(false);
  const [newsModalOpen, setNewsModalOpen] = react.exports.useState(false);
  const [planModalOpen, setPlanModalOpen] = react.exports.useState(false);
  react.exports.useState(false);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$5,
      lineNumber: 36,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$5,
        lineNumber: 42,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-2xl md:text-3xl text-slate-800 font-bold",
              children: "Modal \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$5,
              lineNumber: 49,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$5,
            lineNumber: 48,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-8 mt-8",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Basic"
                }, void 0, false, {
                  fileName: _jsxFileName$5,
                  lineNumber: 59,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-1.5",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "basic-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setBasicModalOpen(true);
                      },
                      children: "Basic Modal"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 65,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBasic, {
                      id: "basic-modal",
                      modalOpen: basicModalOpen,
                      setModalOpen: setBasicModalOpen,
                      title: "Basic Modal",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "px-5 pt-4 pb-1",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "font-medium text-slate-800 mb-2",
                            children: "Let\u2019s Talk Paragraph"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 70,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "space-y-2",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 72,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 73,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 71,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 69,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$5,
                        lineNumber: 68,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "px-5 py-4",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "flex flex-wrap justify-end space-x-2",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                            onClick: (e) => {
                              e.stopPropagation();
                              setBasicModalOpen(false);
                            },
                            children: "Close"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 80,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                            children: "I Understand"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 81,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 79,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$5,
                        lineNumber: 78,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 66,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 63,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "scrollbar-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setScrollbarModalOpen(true);
                      },
                      children: "Modal w/ Scroll Bar"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 92,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBasic, {
                      id: "scrollbar-modal",
                      modalOpen: scrollbarModalOpen,
                      setModalOpen: setScrollbarModalOpen,
                      title: "Modal w/ Scroll Bar",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "px-5 py-4",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "font-medium text-slate-800 mb-2",
                            children: "Let\u2019s Talk Paragraph"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 97,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "space-y-2",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 99,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 100,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 101,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 102,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 103,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Mattis enim ut tellus elementum el fringilla est ullamcorper eget nulla. Enim eu turpis egestas pretium aenean pharetra magna. Aliquam id diam maecenas ultricies mi eget us mauris vitae ultricies leo integer t malesuada fames ac turpis egestas maecenas pharetra volutpat lacus laoreet non."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 104,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 98,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 96,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$5,
                        lineNumber: 95,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "sticky bottom-0 px-5 py-4 bg-white border-t border-slate-200",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "flex flex-wrap justify-end space-x-2",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                            onClick: (e) => {
                              e.stopPropagation();
                              setScrollbarModalOpen(false);
                            },
                            children: "Close"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 111,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                            children: "I Understand"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 112,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 110,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$5,
                        lineNumber: 109,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 93,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 90,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "cookies-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setCookiesModalOpen(true);
                      },
                      children: "Cookies"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 122,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalCookies, {
                      id: "cookies-modal",
                      modalOpen: cookiesModalOpen,
                      setModalOpen: setCookiesModalOpen,
                      title: "We use cookies \u{1F36A}",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm mb-5",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "space-y-2",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 127,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                            children: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 128,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 126,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$5,
                        lineNumber: 125,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex flex-wrap justify-end space-x-2",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                          className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                          onClick: (e) => {
                            e.stopPropagation();
                            setCookiesModalOpen(false);
                          },
                          children: "Decline"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 133,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                          className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                          onClick: (e) => {
                            e.stopPropagation();
                            setCookiesModalOpen(false);
                          },
                          children: "I Accept"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 134,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 132,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 123,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 120,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$5,
                  lineNumber: 60,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$5,
                lineNumber: 58,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Feedback"
                }, void 0, false, {
                  fileName: _jsxFileName$5,
                  lineNumber: 145,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-1.5",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "success-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setSuccessModalOpen(true);
                      },
                      children: "Success Modal"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 151,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBlank, {
                      id: "success-modal",
                      modalOpen: successModalOpen,
                      setModalOpen: setSuccessModalOpen,
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "p-5 flex space-x-4",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-emerald-100",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            className: "w-4 h-4 shrink-0 fill-current text-emerald-500",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 157,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 156,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 155,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "mb-2",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              className: "text-lg font-semibold text-slate-800",
                              children: "Upgrade your Subscription?"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 164,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 163,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "text-sm mb-10",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              className: "space-y-2",
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                                children: "Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum."
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 169,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 168,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 167,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex flex-wrap justify-end space-x-2",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                              className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                              onClick: (e) => {
                                e.stopPropagation();
                                setSuccessModalOpen(false);
                              },
                              children: "Cancel"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 174,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                              className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                              children: "Yes, Upgrade it"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 175,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 173,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 161,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 153,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 152,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 149,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "danger-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setDangerModalOpen(true);
                      },
                      children: "Danger Modal"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 186,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBlank, {
                      id: "danger-modal",
                      modalOpen: dangerModalOpen,
                      setModalOpen: setDangerModalOpen,
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "p-5 flex space-x-4",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-100",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            className: "w-4 h-4 shrink-0 fill-current text-rose-500",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 192,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 191,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 190,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "mb-2",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              className: "text-lg font-semibold text-slate-800",
                              children: "Delete 1 customer?"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 199,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 198,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "text-sm mb-10",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              className: "space-y-2",
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                                children: "Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum."
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 204,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 203,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 202,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex flex-wrap justify-end space-x-2",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                              className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                              onClick: (e) => {
                                e.stopPropagation();
                                setDangerModalOpen(false);
                              },
                              children: "Cancel"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 209,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                              className: "btn-sm bg-rose-500 hover:bg-rose-600 text-white",
                              children: "Yes, Delete it"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 210,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 208,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 196,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 188,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 187,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 184,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "info-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setInfoModalOpen(true);
                      },
                      children: "Info Modal"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 221,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBlank, {
                      id: "info-modal",
                      modalOpen: infoModalOpen,
                      setModalOpen: setInfoModalOpen,
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "p-5 flex space-x-4",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-100",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            className: "w-4 h-4 shrink-0 fill-current text-primary",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 227,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 226,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 225,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "mb-2",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              className: "text-lg font-semibold text-slate-800",
                              children: "Create new Event?"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 234,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 233,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "text-sm mb-10",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              className: "space-y-2",
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                                children: "Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum."
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 239,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 238,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 237,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "flex flex-wrap justify-end space-x-2",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                              className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                              onClick: (e) => {
                                e.stopPropagation();
                                setInfoModalOpen(false);
                              },
                              children: "Cancel"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 244,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                              className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                              children: "Yes, Create it"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 245,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 243,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 231,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 223,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 222,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 219,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$5,
                  lineNumber: 146,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$5,
                lineNumber: 144,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Product"
                }, void 0, false, {
                  fileName: _jsxFileName$5,
                  lineNumber: 258,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-1.5",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "feedback-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setFeedbackModalOpen(true);
                      },
                      children: "Send Feedback"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 264,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBasic, {
                      id: "feedback-modal",
                      modalOpen: feedbackModalOpen,
                      setModalOpen: setFeedbackModalOpen,
                      title: "Send Feedback",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "px-5 py-4",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "font-medium text-slate-800 mb-3",
                            children: "Let us know what you think \u{1F64C}"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 269,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 268,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "space-y-3",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                              className: "block text-sm font-medium mb-1",
                              htmlFor: "name",
                              children: ["Name ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                className: "text-rose-500",
                                children: "*"
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 273,
                                columnNumber: 101
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName$5,
                              lineNumber: 273,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                              id: "name",
                              className: "form-input w-full px-2 py-1",
                              type: "text",
                              required: true
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 274,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 272,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                              className: "block text-sm font-medium mb-1",
                              htmlFor: "email",
                              children: ["Email ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                className: "text-rose-500",
                                children: "*"
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 277,
                                columnNumber: 103
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName$5,
                              lineNumber: 277,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                              id: "email",
                              className: "form-input w-full px-2 py-1",
                              type: "email",
                              required: true
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 278,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 276,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                              className: "block text-sm font-medium mb-1",
                              htmlFor: "feedback",
                              children: ["Message ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                className: "text-rose-500",
                                children: "*"
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 281,
                                columnNumber: 108
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName$5,
                              lineNumber: 281,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("textarea", {
                              id: "feedback",
                              className: "form-textarea w-full px-2 py-1",
                              rows: "4",
                              required: true
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 282,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 280,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 271,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 267,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "px-5 py-4 border-t border-slate-200",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "flex flex-wrap justify-end space-x-2",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                            onClick: (e) => {
                              e.stopPropagation();
                              setFeedbackModalOpen(false);
                            },
                            children: "Cancel"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 289,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                            children: "Send"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 290,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 288,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$5,
                        lineNumber: 287,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 265,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 262,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "newsletter-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setNewsletterModalOpen(true);
                      },
                      children: "Newsletter"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 300,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalAction, {
                      id: "newsletter-modal",
                      modalOpen: newsletterModalOpen,
                      setModalOpen: setNewsletterModalOpen,
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "mb-2 text-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "mb-3",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            className: "inline-flex w-12 h-12 rounded-full shrink-0 fill-current",
                            viewBox: "0 0 48 48",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("rect", {
                              className: "text-indigo-100",
                              width: "48",
                              height: "48",
                              rx: "24"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 307,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              className: "text-indigo-300",
                              d: "M19 16h7a8 8 0 110 16h-7V16z"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 308,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              className: "text-primary",
                              d: "M26 24l-7-6v5h-8v2h8v5z"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 309,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 306,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 305,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-lg font-semibold text-slate-800",
                          children: "Subscribe to the Newsletter!"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 312,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 303,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm mb-6",
                          children: "Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum."
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 316,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("form", {
                          className: "flex max-w-sm m-auto",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "grow mr-2",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("label", {
                              htmlFor: "subscribe-form",
                              className: "sr-only",
                              children: "Leave your Email"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 322,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("input", {
                              id: "subscribe-form",
                              className: "form-input w-full px-2 py-1",
                              type: "email"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 323,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 321,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            type: "submit",
                            className: "btn-sm bg-primary hover:bg-indigo-600 text-white whitespace-nowrap",
                            children: "Subscribe"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 325,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 320,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs text-slate-500 italic mt-3",
                          children: "I respect your privacy. No spam. Unsubscribe at any time!"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 327,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 315,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 301,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 298,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "announcement-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setAnnouncementModalOpen(true);
                      },
                      children: "Announcement"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 338,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalAction, {
                      id: "announcement-modal",
                      modalOpen: announcementModalOpen,
                      setModalOpen: setAnnouncementModalOpen,
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "mb-2 text-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "inline-flex mb-2",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                            src: AnnouncementIcon,
                            width: "80",
                            height: "80",
                            alt: "Announcement"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 344,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 343,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-lg font-semibold text-slate-800",
                          children: "You Unlocked Level 2!"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 346,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 341,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm mb-5",
                          children: "Semper eget duis at tellus at urna condimentum mattis pellentesque lacus suspendisse faucibus interdum."
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 350,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "space-y-3",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                            children: "Claim your Reward ->"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 355,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                              className: "font-medium text-sm text-primary hover:text-indigo-600",
                              href: "#0",
                              onClick: (e) => {
                                e.preventDefault();
                                setAnnouncementModalOpen(true);
                              },
                              children: "Not Now!"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 357,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 356,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 354,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 349,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 339,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 336,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "integration-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setIntegrationModalOpen(true);
                      },
                      children: "Integration"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 368,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalAction, {
                      id: "integration-modal",
                      modalOpen: integrationModalOpen,
                      setModalOpen: setIntegrationModalOpen,
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "mb-5 text-center",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "inline-flex items-center justify-center space-x-3 mb-4",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 32 32",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("defs", {
                              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("linearGradient", {
                                x1: "28.538%",
                                y1: "20.229%",
                                x2: "100%",
                                y2: "108.156%",
                                id: "nl-a",
                                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("stop", {
                                  stopColor: "#A5B4FC",
                                  stopOpacity: "0",
                                  offset: "0%"
                                }, void 0, false, {
                                  fileName: _jsxFileName$5,
                                  lineNumber: 378,
                                  columnNumber: 35
                                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("stop", {
                                  stopColor: "#A5B4FC",
                                  offset: "100%"
                                }, void 0, false, {
                                  fileName: _jsxFileName$5,
                                  lineNumber: 379,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName$5,
                                lineNumber: 377,
                                columnNumber: 33
                              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("linearGradient", {
                                x1: "88.638%",
                                y1: "29.267%",
                                x2: "22.42%",
                                y2: "100%",
                                id: "nl-b",
                                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("stop", {
                                  stopColor: "#38BDF8",
                                  stopOpacity: "0",
                                  offset: "0%"
                                }, void 0, false, {
                                  fileName: _jsxFileName$5,
                                  lineNumber: 382,
                                  columnNumber: 35
                                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("stop", {
                                  stopColor: "#38BDF8",
                                  offset: "100%"
                                }, void 0, false, {
                                  fileName: _jsxFileName$5,
                                  lineNumber: 383,
                                  columnNumber: 35
                                }, this)]
                              }, void 0, true, {
                                fileName: _jsxFileName$5,
                                lineNumber: 381,
                                columnNumber: 33
                              }, this)]
                            }, void 0, true, {
                              fileName: _jsxFileName$5,
                              lineNumber: 376,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("rect", {
                              fill: "#6366F1",
                              width: "32",
                              height: "32",
                              rx: "16"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 386,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z",
                              fill: "#4F46E5"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 387,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z",
                              fill: "url(#nl-a)"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 388,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z",
                              fill: "url(#nl-b)"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 389,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 375,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            className: "h-4 w-4 fill-current text-slate-400",
                            viewBox: "0 0 16 16",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M5 3V0L0 4l5 4V5h8a1 1 0 000-2H5zM11 11H3a1 1 0 000 2h8v3l5-4-5-4v3z"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 393,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 392,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("rect", {
                              fill: "#E0E7FF",
                              width: "48",
                              height: "48",
                              rx: "24"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 397,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M34 24c0-1.38-1.126-2.5-2.515-2.5A2.507 2.507 0 0028.97 24c0 1.38 1.126 2.5 2.515 2.5A2.507 2.507 0 0034 24",
                              fill: "#34D399"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 398,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M31.112 31.07a10.024 10.024 0 01-4.582 2.615c-.8.205-1.64.315-2.506.315a10.007 10.007 0 01-7.553-3.426A9.943 9.943 0 0114 24c0-2.517.932-4.816 2.471-6.574A10.007 10.007 0 0124.024 14a10.024 10.024 0 017.088 2.93l-3.544 3.535A5.003 5.003 0 0024.024 19a5.006 5.006 0 00-5.012 5l.001.13A5.007 5.007 0 0024.024 29c1.384 0 2.637-.56 3.544-1.465l3.544 3.536z",
                              fill: "#6366F1"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 399,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 396,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 373,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-lg font-semibold text-slate-800",
                          children: "Connect Mosaic with your Cruip account"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 402,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 371,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm mb-5",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "font-medium text-slate-800 mb-3",
                          children: "Mosaic would like to:"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 406,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                          className: "space-y-2 mb-5",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                            className: "flex items-center",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                              className: "w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2",
                              viewBox: "0 0 12 12",
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                                d: "M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 410,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 409,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              children: "Lorem ipsum dolor sit amet"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 412,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 408,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                            className: "flex items-center",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                              className: "w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2",
                              viewBox: "0 0 12 12",
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                                d: "M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 416,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 415,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              children: "Semper eget duis at tellus at urna"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 418,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 414,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                            className: "flex items-center",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                              className: "w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2",
                              viewBox: "0 0 12 12",
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                                d: "M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 422,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 421,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              children: "Lorem ipsum dolor sit amet"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 424,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 420,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                            className: "flex items-center",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                              className: "w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2",
                              viewBox: "0 0 12 12",
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                                d: "M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z"
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 428,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 427,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              children: "Suspendisse faucibus interdum"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 430,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 426,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 407,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs text-slate-500",
                          children: ["By clicking on Allow access, you authorize Mosaic to use your information in accordance with its ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                            className: "text-primary hover:text-indigo-600",
                            href: "#0",
                            children: "Privacy Policy"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 433,
                            columnNumber: 164
                          }, this), ". You can stop it at any time on the integrations page of your Mosaic account."]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 433,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 405,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "flex flex-wrap justify-end space-x-2",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                          className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                          onClick: (e) => {
                            e.stopPropagation();
                            setIntegrationModalOpen(false);
                          },
                          children: "Cancel"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 437,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                          className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                          children: "Allow Access"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 438,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 436,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 369,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 366,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "news-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setNewsModalOpen(true);
                      },
                      children: "What's New"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 447,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBlank, {
                      id: "news-modal",
                      modalOpen: newsModalOpen,
                      setModalOpen: setNewsModalOpen,
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "relative",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("img", {
                          className: "w-full",
                          src: ModalImage,
                          width: "460",
                          height: "200",
                          alt: "New on Mosaic"
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 450,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                          className: "absolute top-0 right-0 mt-5 mr-5 text-slate-50 hover:text-white",
                          onClick: (e) => {
                            e.stopPropagation();
                            setNewsModalOpen(false);
                          },
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "sr-only",
                            children: "Close"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 453,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                            className: "w-4 h-4 fill-current",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                              d: "M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 455,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 454,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 452,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 449,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "p-5",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "mb-2",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "mb-3",
                            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                              className: "text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1",
                              children: "New on Mosaic"
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 463,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 462,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "text-lg font-semibold text-slate-800",
                            children: "Help your team work faster with X \u{1F3C3}\u200D\u2642\uFE0F"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 465,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 461,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm mb-5",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "space-y-2",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "You might not be aware of this fact, but every frame, digital video, canvas, responsive design, and image often has a rectangular shape that is exceptionally precise in proportion (or ratio)."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 470,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("p", {
                              children: "The ratio has to be well-defined to make shapes fit into different and distinct mediums, such as computer, movies, television and camera screens."
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 471,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 469,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 468,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "flex flex-wrap justify-end space-x-2",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                            onClick: (e) => {
                              e.stopPropagation();
                              setNewsModalOpen(false);
                            },
                            children: "Cool, I Got it"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 476,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$5,
                          lineNumber: 475,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$5,
                        lineNumber: 459,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 448,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 445,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "btn bg-primary hover:bg-indigo-600 text-white",
                      "aria-controls": "feedback-modal",
                      onClick: (e) => {
                        e.stopPropagation();
                        setPlanModalOpen(true);
                      },
                      children: "Change your Plan"
                    }, void 0, false, {
                      fileName: _jsxFileName$5,
                      lineNumber: 486,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalBasic, {
                      id: "feedback-modal",
                      modalOpen: planModalOpen,
                      setModalOpen: setPlanModalOpen,
                      title: "Change your Plan",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "px-5 pt-4 pb-1",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "mb-4",
                            children: "Upgrade or downgrade your plan:"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 491,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                            className: "space-y-2 mb-4",
                            children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                                className: "w-full h-full text-left py-3 px-4 rounded bg-white border-2 border-indigo-400 shadow-sm duration-150 ease-in-out",
                                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                  className: "flex items-center",
                                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                    className: "w-4 h-4 border-4 border-primary rounded-full mr-3"
                                  }, void 0, false, {
                                    fileName: _jsxFileName$5,
                                    lineNumber: 497,
                                    columnNumber: 37
                                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                    className: "grow",
                                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                      className: "flex flex-wrap items-center justify-between mb-0.5",
                                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                        className: "font-medium text-slate-800",
                                        children: ["Mosaic Light ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                          className: "text-xs italic text-slate-500 align-top",
                                          children: "Current Plan"
                                        }, void 0, false, {
                                          fileName: _jsxFileName$5,
                                          lineNumber: 500,
                                          columnNumber: 99
                                        }, this)]
                                      }, void 0, true, {
                                        fileName: _jsxFileName$5,
                                        lineNumber: 500,
                                        columnNumber: 41
                                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                          className: "font-medium text-emerald-600",
                                          children: "$39.00"
                                        }, void 0, false, {
                                          fileName: _jsxFileName$5,
                                          lineNumber: 501,
                                          columnNumber: 47
                                        }, this), "/mo"]
                                      }, void 0, true, {
                                        fileName: _jsxFileName$5,
                                        lineNumber: 501,
                                        columnNumber: 41
                                      }, this)]
                                    }, void 0, true, {
                                      fileName: _jsxFileName$5,
                                      lineNumber: 499,
                                      columnNumber: 39
                                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                      className: "text-sm",
                                      children: "2 MB \xB7 1 member \xB7 500 block limits"
                                    }, void 0, false, {
                                      fileName: _jsxFileName$5,
                                      lineNumber: 503,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName$5,
                                    lineNumber: 498,
                                    columnNumber: 37
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName$5,
                                  lineNumber: 496,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 495,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 494,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                                className: "w-full h-full text-left py-3 px-4 rounded bg-white border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out",
                                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                  className: "flex items-center",
                                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                    className: "w-4 h-4 border-2 border-slate-300 rounded-full mr-3"
                                  }, void 0, false, {
                                    fileName: _jsxFileName$5,
                                    lineNumber: 511,
                                    columnNumber: 37
                                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                    className: "grow",
                                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                      className: "flex flex-wrap items-center justify-between mb-0.5",
                                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                        className: "font-semibold text-slate-800",
                                        children: ["Mosaic Basic ", /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                          className: "text-xs italic text-primary align-top",
                                          children: "Best Value \u2728"
                                        }, void 0, false, {
                                          fileName: _jsxFileName$5,
                                          lineNumber: 514,
                                          columnNumber: 101
                                        }, this)]
                                      }, void 0, true, {
                                        fileName: _jsxFileName$5,
                                        lineNumber: 514,
                                        columnNumber: 41
                                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                          className: "font-medium text-emerald-600",
                                          children: "$59.00"
                                        }, void 0, false, {
                                          fileName: _jsxFileName$5,
                                          lineNumber: 515,
                                          columnNumber: 47
                                        }, this), "/mo"]
                                      }, void 0, true, {
                                        fileName: _jsxFileName$5,
                                        lineNumber: 515,
                                        columnNumber: 41
                                      }, this)]
                                    }, void 0, true, {
                                      fileName: _jsxFileName$5,
                                      lineNumber: 513,
                                      columnNumber: 39
                                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                      className: "text-sm",
                                      children: "5 MB \xB7 2 members \xB7 1000 block limits"
                                    }, void 0, false, {
                                      fileName: _jsxFileName$5,
                                      lineNumber: 517,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName$5,
                                    lineNumber: 512,
                                    columnNumber: 37
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName$5,
                                  lineNumber: 510,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 509,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 508,
                              columnNumber: 31
                            }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                              children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                                className: "w-full h-full text-left py-3 px-4 rounded bg-white border border-slate-200 hover:border-slate-300 shadow-sm duration-150 ease-in-out",
                                children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                  className: "flex items-center",
                                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                    className: "w-4 h-4 border-2 border-slate-300 rounded-full mr-3"
                                  }, void 0, false, {
                                    fileName: _jsxFileName$5,
                                    lineNumber: 525,
                                    columnNumber: 37
                                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                    className: "grow",
                                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                      className: "flex flex-wrap items-center justify-between mb-0.5",
                                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                        className: "font-semibold text-slate-800",
                                        children: "Mosaic Plus"
                                      }, void 0, false, {
                                        fileName: _jsxFileName$5,
                                        lineNumber: 528,
                                        columnNumber: 41
                                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                                          className: "font-medium text-emerald-600",
                                          children: "$79.00"
                                        }, void 0, false, {
                                          fileName: _jsxFileName$5,
                                          lineNumber: 529,
                                          columnNumber: 47
                                        }, this), "/mo"]
                                      }, void 0, true, {
                                        fileName: _jsxFileName$5,
                                        lineNumber: 529,
                                        columnNumber: 41
                                      }, this)]
                                    }, void 0, true, {
                                      fileName: _jsxFileName$5,
                                      lineNumber: 527,
                                      columnNumber: 39
                                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                                      className: "text-sm",
                                      children: "10 MB \xB7 5 members \xB7 Unlimited block limits"
                                    }, void 0, false, {
                                      fileName: _jsxFileName$5,
                                      lineNumber: 531,
                                      columnNumber: 39
                                    }, this)]
                                  }, void 0, true, {
                                    fileName: _jsxFileName$5,
                                    lineNumber: 526,
                                    columnNumber: 37
                                  }, this)]
                                }, void 0, true, {
                                  fileName: _jsxFileName$5,
                                  lineNumber: 524,
                                  columnNumber: 35
                                }, this)
                              }, void 0, false, {
                                fileName: _jsxFileName$5,
                                lineNumber: 523,
                                columnNumber: 33
                              }, this)
                            }, void 0, false, {
                              fileName: _jsxFileName$5,
                              lineNumber: 522,
                              columnNumber: 31
                            }, this)]
                          }, void 0, true, {
                            fileName: _jsxFileName$5,
                            lineNumber: 493,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "text-xs text-slate-500",
                            children: "Your workspace\u2019s Mosaic Light Plan is set to $39 per month and will renew on August 9, 2021."
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 537,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 490,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$5,
                        lineNumber: 489,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "px-5 py-4",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "flex flex-wrap justify-end space-x-2",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm border-slate-200 hover:border-slate-300 text-slate-600",
                            onClick: (e) => {
                              e.stopPropagation();
                              setPlanModalOpen(false);
                            },
                            children: "Cancel"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 543,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                            className: "btn-sm bg-primary hover:bg-indigo-600 text-white",
                            children: "Change Plan"
                          }, void 0, false, {
                            fileName: _jsxFileName$5,
                            lineNumber: 544,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$5,
                          lineNumber: 542,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$5,
                        lineNumber: 541,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$5,
                      lineNumber: 487,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$5,
                    lineNumber: 484,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$5,
                  lineNumber: 259,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$5,
                lineNumber: 257,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$5,
              lineNumber: 55,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$5,
            lineNumber: 52,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$5,
          lineNumber: 45,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$5,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$5,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$5,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}
var _jsxFileName$4 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/component/TabsPage.jsx";
function TabsPage() {
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$4,
      lineNumber: 14,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$4,
        lineNumber: 20,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-2xl md:text-3xl text-slate-800 font-bold",
              children: "Tabs \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 27,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$4,
            lineNumber: 26,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-8 mt-8",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Simple"
                }, void 0, false, {
                  fileName: _jsxFileName$4,
                  lineNumber: 37,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "mb-8 border-b border-slate-200",
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                    className: "text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-primary whitespace-nowrap",
                        href: "#0",
                        children: "Account"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 42,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 41,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-slate-500 hover:text-slate-600 whitespace-nowrap",
                        href: "#0",
                        children: "Notifications"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 45,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 44,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-slate-500 hover:text-slate-600 whitespace-nowrap",
                        href: "#0",
                        children: "Integrations"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 48,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 47,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-slate-500 hover:text-slate-600 whitespace-nowrap",
                        href: "#0",
                        children: "Plans"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 51,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 50,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-slate-500 hover:text-slate-600 whitespace-nowrap",
                        href: "#0",
                        children: "Billing"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 54,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 53,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$4,
                    lineNumber: 40,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName$4,
                  lineNumber: 39,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$4,
                lineNumber: 36,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "With Underline"
                }, void 0, false, {
                  fileName: _jsxFileName$4,
                  lineNumber: 63,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "relative mb-8",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "absolute bottom-0 w-full h-px bg-slate-200",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName$4,
                    lineNumber: 66,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                    className: "relative text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "block pb-3 text-primary whitespace-nowrap border-b-2 border-primary",
                        href: "#0",
                        children: "Account"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 69,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 68,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap",
                        href: "#0",
                        children: "Notifications"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 72,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 71,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap",
                        href: "#0",
                        children: "Integrations"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 75,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 74,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap",
                        href: "#0",
                        children: "Plans"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 78,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 77,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "block pb-3 text-slate-500 hover:text-slate-600 whitespace-nowrap",
                        href: "#0",
                        children: "Billing"
                      }, void 0, false, {
                        fileName: _jsxFileName$4,
                        lineNumber: 81,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 80,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$4,
                    lineNumber: 67,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$4,
                  lineNumber: 65,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$4,
                lineNumber: 62,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "With Icons"
                }, void 0, false, {
                  fileName: _jsxFileName$4,
                  lineNumber: 90,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "mb-8 border-b border-slate-200",
                  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                    className: "text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar",
                    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-primary whitespace-nowrap flex items-center",
                        href: "#0",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "w-4 h-4 shrink-0 fill-current mr-2",
                          viewBox: " 0 0 16 16",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M12.311 9.527c-1.161-.393-1.85-.825-2.143-1.175A3.991 3.991 0 0012 5V4c0-2.206-1.794-4-4-4S4 1.794 4 4v1c0 1.406.732 2.639 1.832 3.352-.292.35-.981.782-2.142 1.175A3.942 3.942 0 001 13.26V16h14v-2.74c0-1.69-1.081-3.19-2.689-3.733zM6 4c0-1.103.897-2 2-2s2 .897 2 2v1c0 1.103-.897 2-2 2s-2-.897-2-2V4zm7 10H3v-.74c0-.831.534-1.569 1.33-1.838 1.845-.624 3-1.436 3.452-2.422h.436c.452.986 1.607 1.798 3.453 2.422A1.943 1.943 0 0113 13.26V14z"
                          }, void 0, false, {
                            fileName: _jsxFileName$4,
                            lineNumber: 97,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 96,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          children: "Account"
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 99,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$4,
                        lineNumber: 95,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 94,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center",
                        href: "#0",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "w-4 h-4 shrink-0 fill-current text-slate-400 mr-2",
                          viewBox: " 0 0 16 16",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8zM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1z"
                          }, void 0, false, {
                            fileName: _jsxFileName$4,
                            lineNumber: 105,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 104,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          children: "Notifications"
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 107,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$4,
                        lineNumber: 103,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 102,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center",
                        href: "#0",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "w-4 h-4 shrink-0 fill-current text-slate-400 mr-2",
                          viewBox: " 0 0 16 16",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M3.414 2L9 7.586V16H7V8.414l-5-5V6H0V1a1 1 0 011-1h5v2H3.414zM15 0a1 1 0 011 1v5h-2V3.414l-3.172 3.172-1.414-1.414L12.586 2H10V0h5z"
                          }, void 0, false, {
                            fileName: _jsxFileName$4,
                            lineNumber: 113,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 112,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          children: "Integrations"
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 115,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$4,
                        lineNumber: 111,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 110,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center",
                        href: "#0",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "w-4 h-4 shrink-0 fill-current text-slate-400 mr-2",
                          viewBox: " 0 0 16 16",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M5 9h11v2H5V9zM0 9h3v2H0V9zm5 4h6v2H5v-2zm-5 0h3v2H0v-2zm5-8h7v2H5V5zM0 5h3v2H0V5zm5-4h11v2H5V1zM0 1h3v2H0V1z"
                          }, void 0, false, {
                            fileName: _jsxFileName$4,
                            lineNumber: 121,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 120,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          children: "Plans"
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 123,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$4,
                        lineNumber: 119,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 118,
                      columnNumber: 23
                    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                      className: "pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8",
                      children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("a", {
                        className: "text-slate-500 hover:text-slate-600 whitespace-nowrap flex items-center",
                        href: "#0",
                        children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                          className: "w-4 h-4 shrink-0 fill-current text-slate-400 mr-2",
                          viewBox: " 0 0 16 16",
                          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                            d: "M15 4c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-1.7 0-3-1.3-3-3V3c0-1.7 1.3-3 3-3h7c.6 0 1 .4 1 1v3h4zM2 3v1h7V2H3c-.6 0-1 .4-1 1zm12 11V6H2v7c0 .6.4 1 1 1h11zm-3-5h2v2h-2V9z"
                          }, void 0, false, {
                            fileName: _jsxFileName$4,
                            lineNumber: 129,
                            columnNumber: 29
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 128,
                          columnNumber: 27
                        }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                          children: "Billing"
                        }, void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 131,
                          columnNumber: 27
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName$4,
                        lineNumber: 127,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 126,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName$4,
                    lineNumber: 93,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName$4,
                  lineNumber: 92,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$4,
                lineNumber: 89,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "With Container"
                }, void 0, false, {
                  fileName: _jsxFileName$4,
                  lineNumber: 141,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("ul", {
                  className: "flex flex-wrap -m-1",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                    className: "m-1",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-primary text-white duration-150 ease-in-out",
                      children: "Account"
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 145,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$4,
                    lineNumber: 144,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                    className: "m-1",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out",
                      children: "Notifications"
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 148,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$4,
                    lineNumber: 147,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                    className: "m-1",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out",
                      children: "Integrations"
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 151,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$4,
                    lineNumber: 150,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                    className: "m-1",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out",
                      children: "Plans"
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 154,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$4,
                    lineNumber: 153,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("li", {
                    className: "m-1",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("button", {
                      className: "inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out",
                      children: "Billing"
                    }, void 0, false, {
                      fileName: _jsxFileName$4,
                      lineNumber: 157,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$4,
                    lineNumber: 156,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$4,
                  lineNumber: 143,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$4,
                lineNumber: 140,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$4,
              lineNumber: 33,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$4,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$4,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$4,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$4,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$4,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var _jsxFileName$3 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/component/BadgePage.jsx";
function BadgePage() {
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$3,
      lineNumber: 14,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$3,
        lineNumber: 20,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-2xl md:text-3xl text-slate-800 font-bold",
              children: "Badge \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$3,
              lineNumber: 27,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 26,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-8 mt-8",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Basic Small"
                }, void 0, false, {
                  fileName: _jsxFileName$3,
                  lineNumber: 37,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-1.5",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-xs inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1",
                      children: "Working on"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 41,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 39,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-xs inline-flex font-medium bg-sky-100 text-sky-600 rounded-full text-center px-2.5 py-1",
                      children: "Exciting news"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 46,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 44,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-xs inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1",
                      children: "Product"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 51,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 49,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-xs inline-flex font-medium bg-amber-100 text-amber-600 rounded-full text-center px-2.5 py-1",
                      children: "Announcement"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 56,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 54,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-xs inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1",
                      children: "Bug Fix"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 61,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 59,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-xs inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1",
                      children: "Customer Stories"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 66,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 64,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-xs inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-1",
                      children: "All Stories"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 71,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 69,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-xs inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1",
                      children: "All Stories"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 76,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 74,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$3,
                  lineNumber: 38,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$3,
                lineNumber: 36,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Basic Large"
                }, void 0, false, {
                  fileName: _jsxFileName$3,
                  lineNumber: 84,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-1.5",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm inline-flex font-medium bg-indigo-100 text-indigo-600 rounded-full text-center px-2.5 py-1",
                      children: "Working on"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 88,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 86,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm inline-flex font-medium bg-sky-100 text-sky-600 rounded-full text-center px-2.5 py-1",
                      children: "Exciting news"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 93,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 91,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm inline-flex font-medium bg-emerald-100 text-emerald-600 rounded-full text-center px-2.5 py-1",
                      children: "Product"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 98,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 96,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm inline-flex font-medium bg-amber-100 text-amber-600 rounded-full text-center px-2.5 py-1",
                      children: "Announcement"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 103,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 101,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm inline-flex font-medium bg-rose-100 text-rose-600 rounded-full text-center px-2.5 py-1",
                      children: "Bug Fix"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 108,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 106,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm inline-flex font-medium bg-blue-100 text-blue-600 rounded-full text-center px-2.5 py-1",
                      children: "Customer Stories"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 113,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 111,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm inline-flex font-medium bg-slate-100 text-slate-500 rounded-full text-center px-2.5 py-1",
                      children: "All Stories"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 118,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 116,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm inline-flex font-medium bg-slate-700 text-slate-100 rounded-full text-center px-2.5 py-1",
                      children: "All Stories"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 123,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$3,
                  lineNumber: 85,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$3,
                lineNumber: 83,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Basic with Icon"
                }, void 0, false, {
                  fileName: _jsxFileName$3,
                  lineNumber: 131,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-1.5",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "inline-flex items-center text-xs font-medium text-slate-100 bg-slate-700 rounded-full text-center px-2 py-0.5",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                        className: "w-3 h-3 shrink-0 fill-current text-amber-500 mr-1",
                        viewBox: "0 0 12 12",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                          d: "M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"
                        }, void 0, false, {
                          fileName: _jsxFileName$3,
                          lineNumber: 137,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$3,
                        lineNumber: 136,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        children: "Special Offer"
                      }, void 0, false, {
                        fileName: _jsxFileName$3,
                        lineNumber: 139,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$3,
                      lineNumber: 135,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 133,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "inline-flex items-center text-sm font-medium text-slate-100 bg-slate-700 rounded-full text-center px-2 py-0.5",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("svg", {
                        className: "w-3 h-3 shrink-0 fill-current text-amber-500 mr-1",
                        viewBox: "0 0 12 12",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("path", {
                          d: "M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z"
                        }, void 0, false, {
                          fileName: _jsxFileName$3,
                          lineNumber: 147,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$3,
                        lineNumber: 146,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("span", {
                        children: "Special Offer"
                      }, void 0, false, {
                        fileName: _jsxFileName$3,
                        lineNumber: 149,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$3,
                      lineNumber: 145,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 143,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$3,
                  lineNumber: 132,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$3,
                lineNumber: 130,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Basic for Charts"
                }, void 0, false, {
                  fileName: _jsxFileName$3,
                  lineNumber: 158,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-1.5",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full",
                      children: "+29%"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 162,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 160,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-1.5",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full",
                      children: "-14%"
                    }, void 0, false, {
                      fileName: _jsxFileName$3,
                      lineNumber: 167,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$3,
                    lineNumber: 165,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$3,
                  lineNumber: 159,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$3,
                lineNumber: 157,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$3,
              lineNumber: 33,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 30,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$3,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$3,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$3,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$3,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var _jsxFileName$2 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/pages/component/TooltipPage.jsx";
function TooltipPage() {
  const [sidebarOpen, setSidebarOpen] = react.exports.useState(false);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
    className: "flex h-screen overflow-hidden",
    children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Sidebar, {
      sidebarOpen,
      setSidebarOpen
    }, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 15,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white",
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Header, {
        sidebarOpen,
        setSidebarOpen
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 21,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("main", {
        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto",
          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "mb-8",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h1", {
              className: "text-2xl md:text-3xl text-slate-800 font-bold",
              children: "Tooltip \u2728"
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 27,
            columnNumber: 13
          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
            className: "border-t border-slate-200",
            children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
              className: "space-y-8 mt-8",
              children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Tooltip Types"
                }, void 0, false, {
                  fileName: _jsxFileName$2,
                  lineNumber: 38,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-4",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs whitespace-nowrap",
                          children: "Just a tip"
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 45,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 44,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Label White"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 48,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 42,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 41,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        bg: "dark",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs text-slate-200 whitespace-nowrap",
                          children: "Just a tip"
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 56,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 55,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Label Dark"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 59,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 53,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 52,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        size: "md",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs",
                          children: "Excepteur sint occaecat cupidata non proident, sunt in."
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 67,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 66,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Basic White"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 70,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 64,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 63,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        size: "md",
                        bg: "dark",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs text-slate-200",
                          children: "Excepteur sint occaecat cupidata non proident, sunt in."
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 78,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 77,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Basic Dark"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 81,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 75,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 74,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        size: "lg",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm font-medium text-slate-500",
                          children: "Excepteur sint occaecat cupidata non proident, sunt in."
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 89,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 88,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Large White"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 92,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 86,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 85,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        size: "lg",
                        bg: "dark",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-sm font-medium text-slate-200",
                          children: "Excepteur sint occaecat cupidata non proident, sunt in."
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 100,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 99,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Large Dark"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 103,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 97,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 96,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        size: "lg",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "font-medium text-slate-800 mb-0.5",
                            children: "Let\u2019s Talk Paragraph"
                          }, void 0, false, {
                            fileName: _jsxFileName$2,
                            lineNumber: 112,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                          }, void 0, false, {
                            fileName: _jsxFileName$2,
                            lineNumber: 113,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$2,
                          lineNumber: 111,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 110,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Rich White"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 117,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 108,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 107,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        size: "lg",
                        bg: "dark",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs",
                          children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "font-medium text-slate-200 mb-0.5",
                            children: "Let\u2019s Talk Paragraph"
                          }, void 0, false, {
                            fileName: _jsxFileName$2,
                            lineNumber: 126,
                            columnNumber: 29
                          }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                            className: "text-slate-400",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                          }, void 0, false, {
                            fileName: _jsxFileName$2,
                            lineNumber: 127,
                            columnNumber: 29
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName$2,
                          lineNumber: 125,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 124,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Rich Dark"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 131,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 122,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$2,
                  lineNumber: 39,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$2,
                lineNumber: 37,
                columnNumber: 17
              }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("h2", {
                  className: "text-2xl text-slate-800 font-bold mb-6",
                  children: "Tooltip Position"
                }, void 0, false, {
                  fileName: _jsxFileName$2,
                  lineNumber: 140,
                  columnNumber: 19
                }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                  className: "flex flex-wrap items-center -m-4",
                  children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs whitespace-nowrap",
                          children: "Just a tip"
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 147,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 146,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Top"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 150,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 144,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 143,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        position: "bottom",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs whitespace-nowrap",
                          children: "Just a tip"
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 158,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 157,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Bottom"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 161,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 155,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 154,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        position: "left",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs whitespace-nowrap",
                          children: "Just a tip"
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 169,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 168,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Left"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 172,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 166,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 165,
                    columnNumber: 21
                  }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                    className: "m-4",
                    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                      className: "flex items-center space-x-2",
                      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Tooltip, {
                        position: "right",
                        children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                          className: "text-xs whitespace-nowrap",
                          children: "Just a tip"
                        }, void 0, false, {
                          fileName: _jsxFileName$2,
                          lineNumber: 180,
                          columnNumber: 27
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 179,
                        columnNumber: 25
                      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV("div", {
                        className: "text-sm font-medium text-slate-500",
                        children: "Right"
                      }, void 0, false, {
                        fileName: _jsxFileName$2,
                        lineNumber: 183,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName$2,
                      lineNumber: 177,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 176,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName$2,
                  lineNumber: 141,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName$2,
                lineNumber: 139,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$2,
              lineNumber: 34,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 31,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName$2,
          lineNumber: 24,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$2,
      lineNumber: 18,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName$2,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var _jsxFileName$1 = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/App.jsx";
function App() {
  const location = useLocation();
  react.exports.useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({
      top: 0
    });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);
  return /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(StateProvider, {
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Routes, {
      children: [/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/signin",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PublicRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Signin, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 69,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 68,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 65,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/code/generator",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PublicRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PhoneCodeGenerator, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 77,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 76,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 73,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        exact: true,
        path: "/code/validation",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateCodeValidation, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ValidationCode, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 86,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 85,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 81,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/signup",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateSignup, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Signup, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 95,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 94,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 91,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/reset-password",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PublicRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ResetPassword, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 103,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 102,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 99,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/multiStep",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateMultistepForm, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(MultiStepForm, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 111,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 110,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 107,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/multiStep/end",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateMultistepForm, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(MultiStepFormEnd, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 119,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 118,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 115,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        exact: true,
        path: "/",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Dashboard, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 129,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 128,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 124,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        exact: true,
        path: "/products/create",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ProductCreate, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 139,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 138,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 134,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        exact: true,
        path: "/products/list",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ProductList, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 148,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 147,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 143,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        exact: true,
        path: "/plant/create",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PlantCreate, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 158,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 157,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 153,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        exact: true,
        path: "/plant/list",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PlantList, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 167,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 166,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 162,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        exact: true,
        path: "/plant/update/:id",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PlantUpdate, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 176,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 175,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 171,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        exact: true,
        path: "/company/profile",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PrivateRoute, {
          children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Profile, {}, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 186,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 185,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 181,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/component/form",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(FormPage, {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 191,
          columnNumber: 48
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 191,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/component/dropdown",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(DropdownPage, {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 192,
          columnNumber: 52
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 192,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/component/alert",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(AlertPage, {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 193,
          columnNumber: 49
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 193,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/component/modal",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(ModalPage, {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 194,
          columnNumber: 49
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 194,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/component/tabs",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(TabsPage, {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 195,
          columnNumber: 48
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 195,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/component/badge",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(BadgePage, {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 196,
          columnNumber: 49
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 196,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "/component/tooltip",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(TooltipPage, {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 197,
          columnNumber: 51
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 197,
        columnNumber: 9
      }, this), /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(Route, {
        path: "*",
        element: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(PageNotFound, {}, void 0, false, {
          fileName: _jsxFileName$1,
          lineNumber: 198,
          columnNumber: 34
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$1,
        lineNumber: 198,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName$1,
      lineNumber: 63,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
var index = "";
var _jsxFileName = "/Users/obm_89/Documents/hubmine/supplier-dashboard2.0/src/main.jsx";
ReactDOM.render(/* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(React.StrictMode, {
  children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(BrowserRouter, {
    children: /* @__PURE__ */ jsxDevRuntime.exports.jsxDEV(App, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, globalThis)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, globalThis)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, globalThis), document.getElementById("root"));
