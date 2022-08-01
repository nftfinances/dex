"use strict";
exports.id = 36;
exports.ids = [36];
exports.modules = {

/***/ 36:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ParamTab),
/* harmony export */   "x": () => (/* reexport safe */ _components_ui_tab__WEBPACK_IMPORTED_MODULE_5__.x4)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4423);
/* harmony import */ var _components_ui_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(875);
/* harmony import */ var _lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8768);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3741);
/* harmony import */ var _lib_hooks_use_click_away__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_tab__WEBPACK_IMPORTED_MODULE_5__]);
_components_ui_tab__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function ParamTab({ tabMenu , children  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_7__/* .useIsMounted */ .t)();
    const breakpoint = (0,_lib_hooks_use_breakpoint__WEBPACK_IMPORTED_MODULE_6__/* .useBreakpoint */ .G)();
    const dropdownEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    let { 0: selectedTabIndex , 1: setSelectedTabIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let { 0: visibleMobileMenu , 1: setVisibleMobileMenu  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function handleTabChange(index) {
        router.push({
            pathname: router.pathname,
            query: {
                view: tabMenu[index].path
            }
        }, undefined, {
            scroll: false,
            shallow: true
        });
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router?.query?.view) {
            setSelectedTabIndex(tabMenu.findIndex((item)=>router.query.view === item.path));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        router.query
    ]);
    (0,_lib_hooks_use_click_away__WEBPACK_IMPORTED_MODULE_8__/* .useClickAway */ .V)(dropdownEl, ()=>{
        setVisibleMobileMenu(false);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_tab__WEBPACK_IMPORTED_MODULE_5__/* .Tab.Group */ .OK.Group, {
        selectedIndex: selectedTabIndex,
        onChange: (index)=>handleTabChange(index),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tab__WEBPACK_IMPORTED_MODULE_5__/* .Tab.List */ .OK.List, {
                className: "relative mb-6 bg-body text-sm uppercase before:absolute before:left-0 before:bottom-0 before:w-full before:rounded-sm before:bg-gray-200 dark:bg-dark dark:before:bg-gray-800 sm:gap-8 sm:rounded-none md:before:h-0.5",
                children: isMounted && [
                    "xs",
                    "sm"
                ].indexOf(breakpoint) !== -1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    ref: dropdownEl,
                    className: "rounded-lg border-2 border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>setVisibleMobileMenu(!visibleMobileMenu),
                            className: "flex w-full items-center justify-between py-2.5 px-4 uppercase text-gray-400 dark:text-gray-300 sm:px-5 sm:py-3.5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-medium text-gray-900 dark:text-gray-100",
                                    children: tabMenu[selectedTabIndex].title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* .ChevronDown */ ._, {
                                    className: "h-auto w-3.5"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("absolute top-full left-0 z-10 mt-1 grid w-full gap-0.5 rounded-lg border border-gray-200 bg-white p-2 text-left shadow-large dark:border-gray-700 dark:bg-gray-800 xs:gap-1", visibleMobileMenu ? "visible opacity-100" : "invisible opacity-0"),
                            children: tabMenu.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>setVisibleMobileMenu(false),
                                    className: "w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tab__WEBPACK_IMPORTED_MODULE_5__/* .TabItem */ .E2, {
                                        className: "w-full",
                                        children: item.title
                                    })
                                }, item.path))
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex gap-6 md:gap-8 xl:gap-10 3xl:gap-12",
                    children: tabMenu.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tab__WEBPACK_IMPORTED_MODULE_5__/* .TabItem */ .E2, {
                            children: item.title
                        }, item.path))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_tab__WEBPACK_IMPORTED_MODULE_5__/* .TabPanels */ .nP, {
                children: children
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 875:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E2": () => (/* binding */ TabItem),
/* harmony export */   "OK": () => (/* reexport safe */ _headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab),
/* harmony export */   "nP": () => (/* binding */ TabPanels),
/* harmony export */   "x4": () => (/* binding */ TabPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





//
// Tab Item framer motion variant
//
function TabItem({ children , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab, {
        className: ({ selected  })=>classnames__WEBPACK_IMPORTED_MODULE_3___default()("relative py-2 uppercase tracking-wider hover:text-gray-900 focus:outline-none dark:hover:text-gray-100 xs:py-2.5 sm:py-3", {
                "font-medium text-brand dark:text-gray-100": selected,
                "text-gray-600 dark:text-gray-400": !selected
            }, className),
        children: ({ selected  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "flex w-full justify-between px-3 md:px-0",
                        children: children
                    }),
                    selected && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                        className: "absolute left-0 right-0 bottom-0 -z-[1] h-0.5 w-full rounded-lg bg-brand dark:bg-gray-400 md:z-0",
                        layoutId: "activeTabIndicator"
                    })
                ]
            })
    });
}
//
// Tab Panels framer motion variant
//
function TabPanels({ children , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panels, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
            exitBeforeEnter: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: children
            })
        })
    });
}
//
// Tab Panel framer motion variant
//
function TabPanel({ children , className  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panel, {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
            animate: {
                opacity: 1,
                y: 0
            },
            initial: {
                opacity: 0,
                y: 32
            },
            exit: {
                opacity: 0,
                y: -32
            },
            transition: {
                duration: 0.2
            },
            children: children
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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



/***/ })

};
;