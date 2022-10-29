"use strict";
exports.id = 4779;
exports.ids = [4779];
exports.modules = {

/***/ 4779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoinSelectView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_static_coin_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5063);
/* harmony import */ var _components_icons_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(138);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5335);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__]);
_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function CoinSelectView({ onSelect  }) {
    const { closeModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_4__/* .useModal */ .d)();
    let { 0: searchKeyword , 1: setSearchKeyword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    let coinListData = _data_static_coin_list__WEBPACK_IMPORTED_MODULE_2__/* .coinList */ .p;
    if (searchKeyword.length > 0) {
        coinListData = _data_static_coin_list__WEBPACK_IMPORTED_MODULE_2__/* .coinList.filter */ .p.filter(function(item) {
            const name = item.name;
            return name.match(searchKeyword) || name.toLowerCase().match(searchKeyword) && name;
        });
    }
    function handleSelectedCoin(item) {
        onSelect(item.id);
        closeModal();
    }
    function handleSelectedCoinOnKeyDown(event, item) {
        if (event.code === "Enter") {
            onSelect(item.id);
            closeModal();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full rounded-lg bg-white text-sm shadow-large dark:bg-dark xs:w-[400px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "p-6 text-lg font-medium uppercase text-gray-900 dark:text-white",
                children: "Pay with"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search__WEBPACK_IMPORTED_MODULE_3__/* .SearchIcon */ .W, {
                        className: "absolute left-6 h-full text-gray-700"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "search",
                        autoFocus: true,
                        onChange: (e)=>setSearchKeyword(e.target.value),
                        placeholder: "Search Your Coin by Name",
                        className: "w-full border-y border-x-0 border-dashed border-gray-200 py-3.5 pl-14 pr-6 text-sm focus:border-gray-300 focus:ring-0 dark:border-gray-700 dark:bg-light-dark focus:dark:border-gray-600"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                role: "listbox",
                className: "min-h-[200px] py-3",
                children: coinListData.length > 0 ? coinListData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                        role: "listitem",
                        tabIndex: index,
                        onClick: ()=>handleSelectedCoin(item),
                        onKeyDown: (event)=>handleSelectedCoinOnKeyDown(event, item),
                        className: "flex cursor-pointer items-center gap-2 py-3 px-6 outline-none hover:bg-gray-100 focus:bg-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-900",
                        children: [
                            item.icon,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "uppercase",
                                children: item.name
                            })
                        ]
                    }, item.id)) : // FIXME: need coin not found svg from designer
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    className: "px-6 py-20 text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "mb-2 text-base",
                            children: "Ops! not found"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-gray-500",
                            children: "Try another keyword for search"
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ coinList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_tether__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9186);
/* harmony import */ var _components_icons_bnb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7290);
/* harmony import */ var _components_icons_usdc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9637);
/* harmony import */ var _components_icons_doge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6957);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2660);





 // TODO PB アイコン不明につき、仮で設置

const coinList = [
    {
        id: _constants__WEBPACK_IMPORTED_MODULE_5__/* .CURRENCY_ID.USDT */ .Qi.USDT,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_tether__WEBPACK_IMPORTED_MODULE_1__/* .Tether */ .Z, {}),
        name: "Tether USD"
    },
    {
        id: _constants__WEBPACK_IMPORTED_MODULE_5__/* .CURRENCY_ID.USDC */ .Qi.USDC,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_usdc__WEBPACK_IMPORTED_MODULE_3__/* .Usdc */ .V, {}),
        name: "USD Coin"
    },
    {
        id: _constants__WEBPACK_IMPORTED_MODULE_5__/* .CURRENCY_ID.BUSD */ .Qi.BUSD,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_bnb__WEBPACK_IMPORTED_MODULE_2__/* .Bnb */ .m, {}),
        name: "Binance USD"
    },
    {
        id: _constants__WEBPACK_IMPORTED_MODULE_5__/* .CURRENCY_ID.DF */ .Qi.DF,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_doge__WEBPACK_IMPORTED_MODULE_4__/* .Doge */ .S, {}),
        name: "DF TOKEN"
    },
    {
        id: _constants__WEBPACK_IMPORTED_MODULE_5__/* .CURRENCY_ID.PB */ .Qi.PB,
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_doge__WEBPACK_IMPORTED_MODULE_4__/* .Doge */ .S, {}),
        name: "PB TOKEN"
    }, 
];


/***/ })

};
;