"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["src_components_nft_select-wallet_tsx"],{

/***/ "./src/assets/images/metamask.svg":
/*!****************************************!*\
  !*** ./src/assets/images/metamask.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/metamask.3285bae2.svg\",\"height\":319,\"width\":319});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2ltYWdlcy9tZXRhbWFzay5zdmcuanMiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsMkVBQTJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaW1hZ2VzL21ldGFtYXNrLnN2Zz8xZGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9tZXRhbWFzay4zMjg1YmFlMi5zdmdcIixcImhlaWdodFwiOjMxOSxcIndpZHRoXCI6MzE5fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/images/metamask.svg\n"));

/***/ }),

/***/ "./src/components/nft/select-wallet.tsx":
/*!**********************************************!*\
  !*** ./src/components/nft/select-wallet.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectWallet; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_extends.mjs */ \"./node_modules/@swc/helpers/src/_extends.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/image */ \"./src/components/ui/image.tsx\");\n/* harmony import */ var _assets_images_metamask_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/metamask.svg */ \"./src/assets/images/metamask.svg\");\n/* harmony import */ var _lib_hooks_use_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/hooks/use-connect */ \"./src/lib/hooks/use-connect.tsx\");\n/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modal-views/context */ \"./src/components/modal-views/context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SelectWallet(_param) {\n    var props = (0,_swc_helpers_src_extends_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, _param);\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_lib_hooks_use_connect__WEBPACK_IMPORTED_MODULE_3__.WalletContext), address = ref.address, connectToWallet = ref.connectToWallet, error = ref.error;\n    var closeModal = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__.useModal)().closeModal;\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        if (address) closeModal();\n    }, [\n        address,\n        closeModal\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n        className: \"relative z-50 mx-auto w-[440px] max-w-full rounded-lg bg-white px-9 py-16 dark:bg-light-dark\"\n    }, props), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-4 text-center text-2xl font-medium uppercase text-gray-900 dark:text-white\",\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/nft/select-wallet.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-sm leading-loose tracking-tight text-gray-600 dark:text-gray-400\",\n                children: \"By connecting your wallet, you agree to our Terms of Service and our Privacy Policy.\"\n            }, void 0, false, {\n                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/nft/select-wallet.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-12 flex h-14 w-full cursor-pointer items-center justify-between rounded-lg bg-gradient-to-l from-[#ffdc24] to-[#ff5c00] px-4 text-base text-white transition-all hover:-translate-y-0.5\",\n                onClick: connectToWallet,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"MetaMask\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/nft/select-wallet.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"h-auto w-9\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: _assets_images_metamask_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                            alt: \"metamask\"\n                        }, void 0, false, {\n                            fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/nft/select-wallet.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/nft/select-wallet.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/nft/select-wallet.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-3 text-center text-xs text-red-500\",\n                children: \"Please install Metamask plugin in your browser in order to connect wallet.\"\n            }, void 0, false, {\n                fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/nft/select-wallet.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        ]\n    }), void 0, true, {\n        fileName: \"/Users/namasiahongkong/Downloads/Criptic - React Next Web3 NFT Crypto Dashboard/Criptic/dex/src/components/nft/select-wallet.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n};\n_s(SelectWallet, \"uaCFdcP3gKVr9gx3avxXEbZheHY=\", false, function() {\n    return [\n        _components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__.useModal\n    ];\n});\n_c = SelectWallet;\nvar _c;\n$RefreshReg$(_c, \"SelectWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uZnQvc2VsZWN0LXdhbGxldC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEM7QUFDYztBQUNBO0FBQ0k7QUFDZDs7QUFFL0IsU0FBU00sWUFBWSxDQUFDLE1BQVksRUFBRTtRQUFUQyxLQUFLLGdGQUFWLE1BQVk7O0lBQy9DLElBQTRDSCxHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0YsaUVBQWEsQ0FBQyxFQUE3RE0sT0FBTyxHQUE2QkosR0FBeUIsQ0FBN0RJLE9BQU8sRUFBRUMsZUFBZSxHQUFZTCxHQUF5QixDQUFwREssZUFBZSxFQUFFQyxLQUFLLEdBQUtOLEdBQXlCLENBQW5DTSxLQUFLO0lBQ3ZDLElBQU0sVUFBWSxHQUFLUCx5RUFBUSxFQUFFLENBQXpCUSxVQUFVO0lBQ2xCTixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJRyxPQUFPLEVBQUVHLFVBQVUsRUFBRSxDQUFDO0tBQzNCLEVBQUU7UUFBQ0gsT0FBTztRQUFFRyxVQUFVO0tBQUMsQ0FBQyxDQUFDO0lBRTFCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQ0ZDLFNBQVMsRUFBQyw4RkFBOEY7T0FDcEdOLEtBQUs7OzBCQUVULDhEQUFDTyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsK0VBQStFOzBCQUFDLGdCQUU5Rjs7Ozs7b0JBQUs7MEJBQ0wsOERBQUNFLEdBQUM7Z0JBQUNGLFNBQVMsRUFBQyxtRkFBbUY7MEJBQUMsc0ZBR2pHOzs7OztvQkFBSTswQkFFSiw4REFBQ0QsS0FBRztnQkFDRkMsU0FBUyxFQUFDLDRMQUE0TDtnQkFDdE1HLE9BQU8sRUFBRVAsZUFBZTs7a0NBRXhCLDhEQUFDUSxNQUFJO2tDQUFDLFVBQVE7Ozs7OzRCQUFPO2tDQUNyQiw4REFBQ0EsTUFBSTt3QkFBQ0osU0FBUyxFQUFDLFlBQVk7a0NBQzFCLDRFQUFDYiw0REFBSzs0QkFBQ2tCLEdBQUcsRUFBRWpCLG1FQUFZOzRCQUFFa0IsR0FBRyxFQUFDLFVBQVU7Ozs7O2dDQUFHOzs7Ozs0QkFDdEM7Ozs7OztvQkFDSDtZQUVMVCxLQUFLLGtCQUNKLDhEQUFDSyxHQUFDO2dCQUFDRixTQUFTLEVBQUMsdUNBQXVDOzBCQUFDLDRFQUdyRDs7Ozs7b0JBQUk7Ozs7OztZQUVGLENBQ047Q0FDSDtHQXRDdUJQLFlBQVk7O1FBRVhILHFFQUFROzs7QUFGVEcsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uZnQvc2VsZWN0LXdhbGxldC50c3g/NWI0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnQC9jb21wb25lbnRzL3VpL2ltYWdlJztcbmltcG9ydCBtZXRhbWFza0xvZ28gZnJvbSAnQC9hc3NldHMvaW1hZ2VzL21ldGFtYXNrLnN2Zyc7XG5pbXBvcnQgeyBXYWxsZXRDb250ZXh0IH0gZnJvbSAnQC9saWIvaG9va3MvdXNlLWNvbm5lY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudHMvbW9kYWwtdmlld3MvY29udGV4dCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdFdhbGxldCh7IC4uLnByb3BzIH0pIHtcbiAgY29uc3QgeyBhZGRyZXNzLCBjb25uZWN0VG9XYWxsZXQsIGVycm9yIH0gPSB1c2VDb250ZXh0KFdhbGxldENvbnRleHQpO1xuICBjb25zdCB7IGNsb3NlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGFkZHJlc3MpIGNsb3NlTW9kYWwoKTtcbiAgfSwgW2FkZHJlc3MsIGNsb3NlTW9kYWxdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotNTAgbXgtYXV0byB3LVs0NDBweF0gbWF4LXctZnVsbCByb3VuZGVkLWxnIGJnLXdoaXRlIHB4LTkgcHktMTYgZGFyazpiZy1saWdodC1kYXJrXCJcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBmb250LW1lZGl1bSB1cHBlcmNhc2UgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cbiAgICAgICAgQ29ubmVjdCBXYWxsZXRcbiAgICAgIDwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIGxlYWRpbmctbG9vc2UgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgQnkgY29ubmVjdGluZyB5b3VyIHdhbGxldCwgeW91IGFncmVlIHRvIG91ciBUZXJtcyBvZiBTZXJ2aWNlIGFuZCBvdXJcbiAgICAgICAgUHJpdmFjeSBQb2xpY3kuXG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtMTIgZmxleCBoLTE0IHctZnVsbCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtbGcgYmctZ3JhZGllbnQtdG8tbCBmcm9tLVsjZmZkYzI0XSB0by1bI2ZmNWMwMF0gcHgtNCB0ZXh0LWJhc2UgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbCBob3ZlcjotdHJhbnNsYXRlLXktMC41XCJcbiAgICAgICAgb25DbGljaz17Y29ubmVjdFRvV2FsbGV0fVxuICAgICAgPlxuICAgICAgICA8c3Bhbj5NZXRhTWFzazwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC1hdXRvIHctOVwiPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e21ldGFtYXNrTG9nb30gYWx0PVwibWV0YW1hc2tcIiAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWNlbnRlciB0ZXh0LXhzIHRleHQtcmVkLTUwMFwiPlxuICAgICAgICAgIFBsZWFzZSBpbnN0YWxsIE1ldGFtYXNrIHBsdWdpbiBpbiB5b3VyIGJyb3dzZXIgaW4gb3JkZXIgdG8gY29ubmVjdFxuICAgICAgICAgIHdhbGxldC5cbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsIm1ldGFtYXNrTG9nbyIsIldhbGxldENvbnRleHQiLCJ1c2VNb2RhbCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJTZWxlY3RXYWxsZXQiLCJwcm9wcyIsImFkZHJlc3MiLCJjb25uZWN0VG9XYWxsZXQiLCJlcnJvciIsImNsb3NlTW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJvbkNsaWNrIiwic3BhbiIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/nft/select-wallet.tsx\n"));

/***/ })

}]);