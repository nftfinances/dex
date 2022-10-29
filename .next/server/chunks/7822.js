"use strict";
exports.id = 7822;
exports.ids = [7822];
exports.modules = {

/***/ 7822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CurrencySwapIcons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_bitcoin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var _components_icons_ethereum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9074);
/* harmony import */ var _components_icons_tether__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9186);
/* harmony import */ var _components_icons_bnb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7290);
/* harmony import */ var _components_icons_usdc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9637);
/* harmony import */ var _components_icons_cardano__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9121);
/* harmony import */ var _components_icons_doge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6957);








const coinIcons = {
    BTC: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_bitcoin__WEBPACK_IMPORTED_MODULE_1__/* .Bitcoin */ .p, {}),
    ETH: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_ethereum__WEBPACK_IMPORTED_MODULE_2__/* .Ethereum */ .k, {}),
    USDT: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_tether__WEBPACK_IMPORTED_MODULE_3__/* .Tether */ .Z, {}),
    BNB: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_bnb__WEBPACK_IMPORTED_MODULE_4__/* .Bnb */ .m, {}),
    USDC: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_usdc__WEBPACK_IMPORTED_MODULE_5__/* .Usdc */ .V, {}),
    ADA: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_cardano__WEBPACK_IMPORTED_MODULE_6__/* .Cardano */ .P, {}),
    DOGE: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_doge__WEBPACK_IMPORTED_MODULE_7__/* .Doge */ .S, {})
};
function CurrencySwapIcons({ from , to  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative",
                        children: coinIcons[from]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "ltr:-ml-1.5 rtl:-mr-1.5",
                        children: coinIcons[to]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "whitespace-nowrap text-sm font-medium uppercase text-black ltr:ml-3 rtl:mr-3 dark:text-white",
                children: [
                    from,
                    "-",
                    to
                ]
            })
        ]
    });
};


/***/ })

};
;