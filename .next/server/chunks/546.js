"use strict";
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 4856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ RangeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function RangeIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "15",
        height: "11",
        viewBox: "0 0 15 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M8.33281 2.8H0.85C0.518629 2.8 0.25 2.53137 0.25 2.2C0.25 1.86863 0.518629 1.6 0.85 1.6H8.33281C8.59399 0.676598 9.44298 0 10.45 0C11.457 0 12.306 0.676598 12.5672 1.6H13.65C13.9814 1.6 14.25 1.86863 14.25 2.2C14.25 2.53137 13.9814 2.8 13.65 2.8H12.5672C12.306 3.7234 11.457 4.4 10.45 4.4C9.44298 4.4 8.59399 3.7234 8.33281 2.8ZM9.45 2.2C9.45 1.64772 9.89772 1.2 10.45 1.2C11.0023 1.2 11.45 1.64772 11.45 2.2C11.45 2.75228 11.0023 3.2 10.45 3.2C9.89772 3.2 9.45 2.75228 9.45 2.2Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.16719 9.2H13.65C13.9814 9.2 14.25 8.93137 14.25 8.6C14.25 8.26863 13.9814 8 13.65 8H6.16719C5.90602 7.0766 5.05702 6.4 4.05 6.4C3.04298 6.4 2.19398 7.0766 1.93281 8H0.85C0.518629 8 0.25 8.26863 0.25 8.6C0.25 8.93137 0.518629 9.2 0.85 9.2H1.93281C2.19398 10.1234 3.04298 10.8 4.05 10.8C5.05702 10.8 5.90602 10.1234 6.16719 9.2ZM3.05 8.6C3.05 8.04772 3.49772 7.6 4.05 7.6C4.60228 7.6 5.05 8.04772 5.05 8.6C5.05 9.15229 4.60228 9.6 4.05 9.6C3.49772 9.6 3.05 9.15229 3.05 8.6Z",
                fill: "currentColor"
            })
        ]
    });
}


/***/ }),

/***/ 9433:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TradeLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(551);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9292);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9535);
/* harmony import */ var _components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2565);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3813);
/* harmony import */ var _components_icons_range_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4856);
/* harmony import */ var _components_icons_export_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9895);
/* harmony import */ var _lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8768);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3741);
/* harmony import */ var _lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_4__, _layouts_dashboard__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















// dynamic import
const Listbox = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 138).then(__webpack_require__.bind(__webpack_require__, 1138)), {
    loadableGenerated: {
        modules: [
            "../layouts/_trade-layout.tsx -> " + "@/components/ui/list-box"
        ]
    }
});
const tradeMenu = [
    {
        name: "Swap",
        value: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].swap */ .Z.swap
    },
    {
        name: "Liquidity",
        value: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].liquidity */ .Z.liquidity
    },
    {
        name: "Vote",
        value: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].vote */ .Z.vote
    }, 
];
function ActiveNavLink({ href , title , isActive , className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        href: href,
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("relative z-[1] inline-flex items-center py-1.5 px-3", className),
        activeClassName: "font-medium text-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: title
            }),
            isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {
                className: "absolute left-0 right-0 bottom-0 -z-[1] h-full w-full rounded-lg bg-brand shadow-large",
                layoutId: "activeNavLinkIndicator"
            })
        ]
    });
}
function TradeLayout({ children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_14__/* .useIsMounted */ .t)();
    const breakpoint = (0,_lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_13__/* .useBreakpoint */ .G)();
    const currentPath = tradeMenu.findIndex((item)=>item.value === router.pathname);
    let { 0: selectedMenuItem , 1: setSelectedMenuItem  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tradeMenu[0]);
    function handleRouteOnSelect(path) {
        router.push(path);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSelectedMenuItem(tradeMenu[currentPath]);
    }, [
        currentPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "pt-8 text-sm xl:pt-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto w-full max-w-lg rounded-lg bg-white p-5 pt-4 shadow-card dark:bg-light-dark xs:p-6 xs:pt-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "mb-5 min-h-[40px] border-b border-dashed border-gray-200 pb-4 uppercase tracking-wider dark:border-gray-700 xs:mb-6 xs:pb-5 xs:tracking-wide",
                        children: [
                            isMounted && [
                                "xs"
                            ].indexOf(breakpoint) !== -1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Listbox, {
                                options: tradeMenu,
                                selectedOption: selectedMenuItem,
                                onChange: setSelectedMenuItem,
                                onSelect: (path)=>handleRouteOnSelect(path),
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        href: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].charts */ .Z.charts,
                                        className: "inline-flex items-center justify-between gap-1.5 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700/70",
                                        children: [
                                            "Charts",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_export_icon__WEBPACK_IMPORTED_MODULE_12__/* .ExportIcon */ .H, {
                                                className: "h-auto w-2.5"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "inline-flex items-center justify-between gap-1.5 rounded-md px-3 py-2 uppercase text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700/70",
                                        children: [
                                            "Settings",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_range_icon__WEBPACK_IMPORTED_MODULE_11__/* .RangeIcon */ .P, {
                                                className: "h-auto w-3"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "hidden items-center justify-between text-gray-600 dark:text-gray-400 sm:flex",
                                children: [
                                    tradeMenu.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ActiveNavLink, {
                                            href: item.value,
                                            title: item.name,
                                            isActive: item.value === router.pathname
                                        }, item.name)),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        href: "/",
                                        className: "inline-flex items-center gap-1.5 py-1.5 px-3",
                                        children: [
                                            "Charts",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_export_icon__WEBPACK_IMPORTED_MODULE_12__/* .ExportIcon */ .H, {
                                                className: "h-auto w-2.5"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        variant: "transparent",
                                        shape: "circle",
                                        size: "small",
                                        className: "dark:text-white",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_range_icon__WEBPACK_IMPORTED_MODULE_11__/* .RangeIcon */ .P, {})
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                        exitBeforeEnter: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {
                            initial: "exit",
                            animate: "enter",
                            exit: "exit",
                            variants: (0,_lib_framer_motion_fade_in_bottom__WEBPACK_IMPORTED_MODULE_15__/* .fadeInBottom */ .o)("easeIn", 0.25),
                            children: children
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ fadeInBottom)
/* harmony export */ });
function fadeInBottom(type = "spring", duration = 0.5, translateY = 60) {
    return {
        enter: {
            y: 0,
            opacity: 1,
            transition: {
                type,
                duration
            }
        },
        exit: {
            y: translateY,
            opacity: 0,
            transition: {
                type,
                duration
            }
        }
    };
}


/***/ }),

/***/ 8768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useBreakpoint)
/* harmony export */ });
/* harmony import */ var react_use_lib_factory_createBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1324);
/* harmony import */ var react_use_lib_factory_createBreakpoint__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_factory_createBreakpoint__WEBPACK_IMPORTED_MODULE_0__);

const breakPoints = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1440,
    "3xl": 1780,
    "4xl": 2160
};
const useBreakpoint = react_use_lib_factory_createBreakpoint__WEBPACK_IMPORTED_MODULE_0___default()(breakPoints);


/***/ }),

/***/ 5269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* reexport default from dynamic */ react_use_lib_useClickAway__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useClickAway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(302);
/* harmony import */ var react_use_lib_useClickAway__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useClickAway__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 8378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useLockBodyScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLockBodyScroll(freezeBodyScroll) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let paddingRight = document.documentElement.style.paddingRight;
        let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        if (freezeBodyScroll) {
            document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
            window.document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.removeProperty("overflow");
        }
        return ()=>{
            document.documentElement.style.paddingRight = paddingRight;
        };
    }, [
        freezeBodyScroll
    ]);
}


/***/ }),

/***/ 2332:
/***/ ((module) => {

module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

/***/ })

};
;