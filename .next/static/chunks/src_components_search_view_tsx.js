"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_search_view_tsx"],{

/***/ "./src/components/search/view.tsx":
/*!****************************************!*\
  !*** ./src/components/search/view.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchFrom\": function() { return /* binding */ SearchFrom; },\n/* harmony export */   \"Tag\": function() { return /* binding */ Tag; },\n/* harmony export */   \"default\": function() { return /* binding */ SearchView; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_extends.mjs */ \"./node_modules/@swc/helpers/src/_extends.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_icons_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/icons/search */ \"./src/components/icons/search.tsx\");\n/* harmony import */ var _components_ui_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/transition */ \"./src/components/ui/transition.tsx\");\n/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/links/anchor-link */ \"./src/components/ui/links/anchor-link.tsx\");\n/* harmony import */ var _lib_hooks_use_click_away__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/hooks/use-click-away */ \"./src/lib/hooks/use-click-away.ts\");\n/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/modal-views/context */ \"./src/components/modal-views/context.tsx\");\n/* harmony import */ var _components_icons_close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/icons/close */ \"./src/components/icons/close.tsx\");\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Tag(param) {\n    var label = param.label, link = param.link;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        href: link,\n        className: \"mr-2.5 mt-2.5 inline-flex transform rounded-lg bg-white px-2.5 py-1.5 text-xs font-medium tracking-tighter text-gray-900 shadow-light outline-none transition-transform duration-200 last:mr-0 hover:-translate-y-0.5 hover:bg-gray-50 focus:-translate-y-0.5 focus:bg-gray-50 dark:bg-gray-800 dark:text-white xs:mr-3 xs:mt-3 xs:px-3 xs:py-2 xs:text-sm\",\n        children: label\n    }, void 0, false, {\n        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Tag;\nvar tags = [\n    {\n        label: \"illustration\",\n        link: \"#\"\n    },\n    {\n        label: \"3d\",\n        link: \"#\"\n    },\n    {\n        label: \"animation\",\n        link: \"#\"\n    },\n    {\n        label: \"digital\",\n        link: \"#\"\n    },\n    {\n        label: \"fanart\",\n        link: \"#\"\n    },\n    {\n        label: \"concept\",\n        link: \"#\"\n    },\n    {\n        label: \"sports\",\n        link: \"#\"\n    },\n    {\n        label: \"fantasy\",\n        link: \"#\"\n    },\n    {\n        label: \"abstract\",\n        link: \"#\"\n    },\n    {\n        label: \"colorful\",\n        link: \"#\"\n    },\n    {\n        label: \"modern\",\n        link: \"#\"\n    }, \n];\nfunction SearchFrom(param) {\n    var _placeholder = param.placeholder, placeholder = _placeholder === void 0 ? \"Search...\" : _placeholder;\n    var _this = this;\n    _s();\n    var closeModal = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__.useModal)().closeModal;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showSuggestion = ref[0], setShowSuggestion = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_lib_hooks_use_click_away__WEBPACK_IMPORTED_MODULE_5__.useClickAway)(ref1, function() {\n        setShowSuggestion(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        ref: ref1,\n        onFocus: function() {\n            return setShowSuggestion(true);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"relative flex w-full rounded-full\",\n                noValidate: true,\n                role: \"search\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"flex w-full items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"h-12 w-full appearance-none rounded-full border-2 border-gray-200 py-1 text-sm tracking-tighter text-gray-900 outline-none transition-all placeholder:text-gray-600 focus:border-gray-900 ltr:pr-5 ltr:pl-11 rtl:pl-5 rtl:pr-11 dark:border-gray-600 dark:bg-light-dark dark:text-white dark:placeholder:text-gray-500 dark:focus:border-gray-500 sm:ltr:pl-14 sm:rtl:pr-14 xl:ltr:pl-16 xl:rtl:pr-16\",\n                                placeholder: placeholder,\n                                autoComplete: \"off\"\n                            }, void 0, false, {\n                                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"pointer-events-none absolute flex h-full w-10 cursor-pointer items-center justify-center text-gray-600 hover:text-gray-900 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-white sm:w-14 sm:ltr:pl-3 sm:rtl:pr-3 xl:w-16\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons_search__WEBPACK_IMPORTED_MODULE_2__.SearchIcon, {\n                                    className: \"h-4 w-4\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white ltr:ml-3.5 rtl:ml-3.5 dark:bg-light-dark xl:hidden\",\n                        onClick: function() {\n                            return closeModal();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons_close__WEBPACK_IMPORTED_MODULE_7__.Close, {\n                            className: \"h-auto w-3 text-gray-600 dark:text-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_transition__WEBPACK_IMPORTED_MODULE_3__.Transition, {\n                show: showSuggestion,\n                enter: \"ease-out duration-300\",\n                enterFrom: \"opacity-0 translate-y-4\",\n                enterTo: \"opacity-100 translate-y-0\",\n                leave: \"ease-in duration-300\",\n                leaveFrom: \"opacity-100 translate-y-0\",\n                leaveTo: \"opacity-0 translate-y-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute left-0 top-full mt-3.5 w-full rounded-lg bg-white p-5 shadow-large dark:bg-light-dark xs:mt-4 xs:p-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mb-2 text-sm font-medium tracking-tighter text-gray-900 dark:text-white xs:mb-2.5 xs:text-base\",\n                            children: \"Tags\"\n                        }, void 0, false, {\n                            fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, this),\n                        tags.map(function(tag, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                                label: tag.label,\n                                link: tag.link\n                            }, index, false, {\n                                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchFrom, \"Rk+7vkj2ED0sbQTIwQK1WTeuDgo=\", false, function() {\n    return [\n        _components_modal_views_context__WEBPACK_IMPORTED_MODULE_6__.useModal,\n        _lib_hooks_use_click_away__WEBPACK_IMPORTED_MODULE_5__.useClickAway\n    ];\n});\n_c1 = SearchFrom;\nfunction SearchView(_param) {\n    var props = (0,_swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, _param);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({\n        className: \"relative z-50 mx-auto w-full max-w-full xs:w-[480px] sm:w-[600px] lg:w-[900px]\"\n    }, props), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchFrom, {}, void 0, false, {\n            fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n            lineNumber: 138,\n            columnNumber: 7\n        }, this)\n    }), void 0, false, {\n        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/search/view.tsx\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, this);\n};\n_c2 = SearchView;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Tag\");\n$RefreshReg$(_c1, \"SearchFrom\");\n$RefreshReg$(_c2, \"SearchView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvdmlldy50c3g/YmYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9pY29ucy9zZWFyY2gnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ0AvY29tcG9uZW50cy91aS90cmFuc2l0aW9uJztcbmltcG9ydCBBbmNob3JMaW5rIGZyb20gJ0AvY29tcG9uZW50cy91aS9saW5rcy9hbmNob3ItbGluayc7XG5pbXBvcnQgeyB1c2VDbGlja0F3YXkgfSBmcm9tICdAL2xpYi9ob29rcy91c2UtY2xpY2stYXdheSc7XG5pbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gJ0AvY29tcG9uZW50cy9tb2RhbC12aWV3cy9jb250ZXh0JztcbmltcG9ydCB7IENsb3NlIH0gZnJvbSAnQC9jb21wb25lbnRzL2ljb25zL2Nsb3NlJztcblxudHlwZSBUYWdQcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgbGluazogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRhZyh7IGxhYmVsLCBsaW5rIH06IFRhZ1Byb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEFuY2hvckxpbmtcbiAgICAgIGhyZWY9e2xpbmt9XG4gICAgICBjbGFzc05hbWU9XCJtci0yLjUgbXQtMi41IGlubGluZS1mbGV4IHRyYW5zZm9ybSByb3VuZGVkLWxnIGJnLXdoaXRlIHB4LTIuNSBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSB0cmFja2luZy10aWdodGVyIHRleHQtZ3JheS05MDAgc2hhZG93LWxpZ2h0IG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgbGFzdDptci0wIGhvdmVyOi10cmFuc2xhdGUteS0wLjUgaG92ZXI6YmctZ3JheS01MCBmb2N1czotdHJhbnNsYXRlLXktMC41IGZvY3VzOmJnLWdyYXktNTAgZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgeHM6bXItMyB4czptdC0zIHhzOnB4LTMgeHM6cHktMiB4czp0ZXh0LXNtXCJcbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9BbmNob3JMaW5rPlxuICApO1xufVxuXG50eXBlIFNlYXJjaEZyb21Qcm9wcyA9IHtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG59O1xuXG5jb25zdCB0YWdzID0gW1xuICB7XG4gICAgbGFiZWw6ICdpbGx1c3RyYXRpb24nLFxuICAgIGxpbms6ICcjJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnM2QnLFxuICAgIGxpbms6ICcjJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYW5pbWF0aW9uJyxcbiAgICBsaW5rOiAnIycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2RpZ2l0YWwnLFxuICAgIGxpbms6ICcjJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnZmFuYXJ0JyxcbiAgICBsaW5rOiAnIycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2NvbmNlcHQnLFxuICAgIGxpbms6ICcjJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnc3BvcnRzJyxcbiAgICBsaW5rOiAnIycsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ2ZhbnRhc3knLFxuICAgIGxpbms6ICcjJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnYWJzdHJhY3QnLFxuICAgIGxpbms6ICcjJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnY29sb3JmdWwnLFxuICAgIGxpbms6ICcjJyxcbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnbW9kZXJuJyxcbiAgICBsaW5rOiAnIycsXG4gIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoRnJvbSh7IHBsYWNlaG9sZGVyID0gJ1NlYXJjaC4uLicgfTogU2VhcmNoRnJvbVByb3BzKSB7XG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgbGV0IFtzaG93U3VnZ2VzdGlvbiwgc2V0U2hvd1N1Z2dlc3Rpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICB1c2VDbGlja0F3YXkocmVmLCAoKSA9PiB7XG4gICAgc2V0U2hvd1N1Z2dlc3Rpb24oZmFsc2UpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIiByZWY9e3JlZn0gb25Gb2N1cz17KCkgPT4gc2V0U2hvd1N1Z2dlc3Rpb24odHJ1ZSl9PlxuICAgICAgPGZvcm1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LWZ1bGwgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICByb2xlPVwic2VhcmNoXCJcbiAgICAgID5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMiB3LWZ1bGwgYXBwZWFyYW5jZS1ub25lIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcHktMSB0ZXh0LXNtIHRyYWNraW5nLXRpZ2h0ZXIgdGV4dC1ncmF5LTkwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTYwMCBmb2N1czpib3JkZXItZ3JheS05MDAgbHRyOnByLTUgbHRyOnBsLTExIHJ0bDpwbC01IHJ0bDpwci0xMSBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOmJnLWxpZ2h0LWRhcmsgZGFyazp0ZXh0LXdoaXRlIGRhcms6cGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ncmF5LTUwMCBzbTpsdHI6cGwtMTQgc206cnRsOnByLTE0IHhsOmx0cjpwbC0xNiB4bDpydGw6cHItMTZcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgZmxleCBoLWZ1bGwgdy0xMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGx0cjpsZWZ0LTAgbHRyOnBsLTIgcnRsOnJpZ2h0LTAgcnRsOnByLTIgZGFyazp0ZXh0LXdoaXRlIHNtOnctMTQgc206bHRyOnBsLTMgc206cnRsOnByLTMgeGw6dy0xNlwiPlxuICAgICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLTEyIHctMTIgc2hyaW5rLTAgY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBsdHI6bWwtMy41IHJ0bDptbC0zLjUgZGFyazpiZy1saWdodC1kYXJrIHhsOmhpZGRlblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfVxuICAgICAgICA+XG4gICAgICAgICAgPENsb3NlIGNsYXNzTmFtZT1cImgtYXV0byB3LTMgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtd2hpdGVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgc2hvdz17c2hvd1N1Z2dlc3Rpb259XG4gICAgICAgIGVudGVyPVwiZWFzZS1vdXQgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTRcIlxuICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiXG4gICAgICAgIGxlYXZlPVwiZWFzZS1pbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCJcbiAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMCB0cmFuc2xhdGUteS00XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLWZ1bGwgbXQtMy41IHctZnVsbCByb3VuZGVkLWxnIGJnLXdoaXRlIHAtNSBzaGFkb3ctbGFyZ2UgZGFyazpiZy1saWdodC1kYXJrIHhzOm10LTQgeHM6cC02XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0cmFja2luZy10aWdodGVyIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlIHhzOm1iLTIuNSB4czp0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgIFRhZ3NcbiAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8VGFnIGtleT17aW5kZXh9IGxhYmVsPXt0YWcubGFiZWx9IGxpbms9e3RhZy5saW5rfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoVmlldyh7IC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTUwIG14LWF1dG8gdy1mdWxsIG1heC13LWZ1bGwgeHM6dy1bNDgwcHhdIHNtOnctWzYwMHB4XSBsZzp3LVs5MDBweF1cIlxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIDxTZWFyY2hGcm9tIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJTZWFyY2hJY29uIiwiVHJhbnNpdGlvbiIsIkFuY2hvckxpbmsiLCJ1c2VDbGlja0F3YXkiLCJ1c2VNb2RhbCIsIkNsb3NlIiwiVGFnIiwibGFiZWwiLCJsaW5rIiwiaHJlZiIsImNsYXNzTmFtZSIsInRhZ3MiLCJTZWFyY2hGcm9tIiwicGxhY2Vob2xkZXIiLCJjbG9zZU1vZGFsIiwic2hvd1N1Z2dlc3Rpb24iLCJzZXRTaG93U3VnZ2VzdGlvbiIsInJlZiIsImRpdiIsIm9uRm9jdXMiLCJmb3JtIiwibm9WYWxpZGF0ZSIsInJvbGUiLCJpbnB1dCIsImF1dG9Db21wbGV0ZSIsInNwYW4iLCJvbkNsaWNrIiwic2hvdyIsImVudGVyIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsImgzIiwibWFwIiwidGFnIiwiaW5kZXgiLCJTZWFyY2hWaWV3IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/search/view.tsx\n"));

/***/ }),

/***/ "./src/lib/hooks/use-click-away.ts":
/*!*****************************************!*\
  !*** ./src/lib/hooks/use-click-away.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useClickAway\": function() { return /* reexport safe */ react_use_lib_useClickAway__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var react_use_lib_useClickAway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-use/lib/useClickAway */ \"./node_modules/react-use/lib/useClickAway.js\");\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2hvb2tzL3VzZS1jbGljay1hd2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvaG9va3MvdXNlLWNsaWNrLWF3YXkudHM/NDA1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNsaWNrQXdheSB9IGZyb20gJ3JlYWN0LXVzZS9saWIvdXNlQ2xpY2tBd2F5JztcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwidXNlQ2xpY2tBd2F5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/hooks/use-click-away.ts\n"));

/***/ }),

/***/ "./node_modules/react-use/lib/useClickAway.js":
/*!****************************************************!*\
  !*** ./node_modules/react-use/lib/useClickAway.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar util_1 = __webpack_require__(/*! ./misc/util */ \"./node_modules/react-use/lib/misc/util.js\");\nvar defaultEvents = ['mousedown', 'touchstart'];\nvar useClickAway = function (ref, onClickAway, events) {\n    if (events === void 0) { events = defaultEvents; }\n    var savedCallback = react_1.useRef(onClickAway);\n    react_1.useEffect(function () {\n        savedCallback.current = onClickAway;\n    }, [onClickAway]);\n    react_1.useEffect(function () {\n        var handler = function (event) {\n            var el = ref.current;\n            el && !el.contains(event.target) && savedCallback.current(event);\n        };\n        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {\n            var eventName = events_1[_i];\n            util_1.on(document, eventName, handler);\n        }\n        return function () {\n            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {\n                var eventName = events_2[_i];\n                util_1.off(document, eventName, handler);\n            }\n        };\n    }, [events, ref]);\n};\nexports[\"default\"] = useClickAway;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2xpYi91c2VDbGlja0F3YXkuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYyxtQkFBTyxDQUFDLDRDQUFPO0FBQzdCLGFBQWEsbUJBQU8sQ0FBQyw4REFBYTtBQUNsQztBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHNCQUFzQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxzQkFBc0I7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlL2xpYi91c2VDbGlja0F3YXkuanM/ZDQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL21pc2MvdXRpbFwiKTtcbnZhciBkZWZhdWx0RXZlbnRzID0gWydtb3VzZWRvd24nLCAndG91Y2hzdGFydCddO1xudmFyIHVzZUNsaWNrQXdheSA9IGZ1bmN0aW9uIChyZWYsIG9uQ2xpY2tBd2F5LCBldmVudHMpIHtcbiAgICBpZiAoZXZlbnRzID09PSB2b2lkIDApIHsgZXZlbnRzID0gZGVmYXVsdEV2ZW50czsgfVxuICAgIHZhciBzYXZlZENhbGxiYWNrID0gcmVhY3RfMS51c2VSZWYob25DbGlja0F3YXkpO1xuICAgIHJlYWN0XzEudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2F2ZWRDYWxsYmFjay5jdXJyZW50ID0gb25DbGlja0F3YXk7XG4gICAgfSwgW29uQ2xpY2tBd2F5XSk7XG4gICAgcmVhY3RfMS51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGVsID0gcmVmLmN1cnJlbnQ7XG4gICAgICAgICAgICBlbCAmJiAhZWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBzYXZlZENhbGxiYWNrLmN1cnJlbnQoZXZlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIGV2ZW50c18xID0gZXZlbnRzOyBfaSA8IGV2ZW50c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50c18xW19pXTtcbiAgICAgICAgICAgIHV0aWxfMS5vbihkb2N1bWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBldmVudHNfMiA9IGV2ZW50czsgX2kgPCBldmVudHNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnRzXzJbX2ldO1xuICAgICAgICAgICAgICAgIHV0aWxfMS5vZmYoZG9jdW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2V2ZW50cywgcmVmXSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gdXNlQ2xpY2tBd2F5O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-use/lib/useClickAway.js\n"));

/***/ })

}]);