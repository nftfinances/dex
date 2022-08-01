"use strict";
exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 6545:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFrom": () => (/* binding */ SearchFrom),
/* harmony export */   "Tag": () => (/* binding */ Tag),
/* harmony export */   "default": () => (/* binding */ SearchView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_icons_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(138);
/* harmony import */ var _components_ui_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6604);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3813);
/* harmony import */ var _lib_hooks_use_click_away__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5269);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5335);
/* harmony import */ var _components_icons_close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_transition__WEBPACK_IMPORTED_MODULE_3__, _components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__]);
([_components_ui_transition__WEBPACK_IMPORTED_MODULE_3__, _components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Tag({ label , link  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        href: link,
        className: "mr-2.5 mt-2.5 inline-flex transform rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium tracking-tighter text-gray-900 shadow-light outline-none transition-transform duration-200 last:mr-0 hover:-translate-y-0.5 hover:bg-gray-50 focus:-translate-y-0.5 focus:bg-gray-50 dark:bg-gray-800 dark:text-white xs:mr-3 xs:mt-3 xs:px-3 xs:py-2 xs:text-sm",
        children: label
    });
}
const tags = [
    {
        label: "illustration",
        link: "#"
    },
    {
        label: "3d",
        link: "#"
    },
    {
        label: "animation",
        link: "#"
    },
    {
        label: "digital",
        link: "#"
    },
    {
        label: "fanart",
        link: "#"
    },
    {
        label: "concept",
        link: "#"
    },
    {
        label: "sports",
        link: "#"
    },
    {
        label: "fantasy",
        link: "#"
    },
    {
        label: "abstract",
        link: "#"
    },
    {
        label: "colorful",
        link: "#"
    },
    {
        label: "modern",
        link: "#"
    }, 
];
function SearchFrom({ placeholder ="Search..."  }) {
    const { closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__/* .useModal */ .d)();
    let { 0: showSuggestion , 1: setShowSuggestion  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,_lib_hooks_use_click_away__WEBPACK_IMPORTED_MODULE_5__/* .useClickAway */ .V)(ref, ()=>{
        setShowSuggestion(false);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative",
        ref: ref,
        onFocus: ()=>setShowSuggestion(true),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "relative flex w-full rounded-full",
                noValidate: true,
                role: "search",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "flex w-full items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "h-12 w-full appearance-none rounded-full border-2 border-gray-200 py-1 text-sm tracking-tighter text-gray-900 outline-none transition-all placeholder:text-gray-600 focus:border-gray-900 ltr:pr-5 ltr:pl-11 rtl:pl-5 rtl:pr-11 dark:border-gray-600 dark:bg-light-dark dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500 sm:ltr:pl-14 sm:rtl:pr-14 xl:ltr:pl-16 xl:rtl:pr-16",
                                placeholder: placeholder,
                                autoComplete: "off"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "pointer-events-none absolute flex h-full w-10 cursor-pointer items-center justify-center text-gray-600 hover:text-gray-900 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-white sm:w-14 sm:ltr:pl-3 sm:rtl:pr-3 xl:w-16",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search__WEBPACK_IMPORTED_MODULE_2__/* .SearchIcon */ .W, {
                                    className: "h-4 w-4"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white ltr:ml-3.5 rtl:ml-3.5 dark:bg-light-dark xl:hidden",
                        onClick: ()=>closeModal(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close__WEBPACK_IMPORTED_MODULE_7__/* .Close */ .x, {
                            className: "h-auto w-3 text-gray-600 dark:text-white"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_3__/* .Transition */ .u, {
                show: showSuggestion,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0 translate-y-4",
                enterTo: "opacity-100 translate-y-0",
                leave: "ease-in duration-300",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-4",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "absolute left-0 top-full mt-3.5 w-full rounded-lg bg-white p-5 shadow-large dark:bg-light-dark xs:mt-4 xs:p-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "mb-2 text-sm font-medium tracking-tighter text-gray-900 dark:text-white xs:mb-2.5 xs:text-base",
                            children: "Tags"
                        }),
                        tags.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
                                label: tag.label,
                                link: tag.link
                            }, index))
                    ]
                })
            })
        ]
    });
}
function SearchView({ ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative z-50 mx-auto w-full max-w-full xs:w-[480px] sm:w-[600px] lg:w-[900px]",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchFrom, {})
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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