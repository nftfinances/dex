"use strict";
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/metamask.3285bae2.svg","height":319,"width":319});

/***/ }),

/***/ 8148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectWallet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3879);
/* harmony import */ var _assets_images_metamask_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/* harmony import */ var _lib_hooks_use_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9306);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5335);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__]);
_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SelectWallet({ ...props }) {
    const { address , connectToWallet , error  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_lib_hooks_use_connect__WEBPACK_IMPORTED_MODULE_3__/* .WalletContext */ .z);
    const { closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__/* .useModal */ .d)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (address) closeModal();
    }, [
        address,
        closeModal
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative z-50 mx-auto w-[440px] max-w-full rounded-lg bg-white px-9 py-16 dark:bg-light-dark",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "mb-4 text-center text-2xl font-medium uppercase text-gray-900 dark:text-white",
                children: "Connect Wallet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-center text-sm leading-loose tracking-tight text-gray-600 dark:text-gray-400",
                children: "By connecting your wallet, you agree to our Terms of Service and our Privacy Policy."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-12 flex h-14 w-full cursor-pointer items-center justify-between rounded-lg bg-gradient-to-l from-[#ffdc24] to-[#ff5c00] px-4 text-base text-white transition-all hover:-translate-y-0.5",
                onClick: connectToWallet,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "MetaMask"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "h-auto w-9",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            src: _assets_images_metamask_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                            alt: "metamask"
                        })
                    })
                ]
            }),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-3 text-center text-xs text-red-500",
                children: "Please install Metamask plugin in your browser in order to connect wallet."
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;