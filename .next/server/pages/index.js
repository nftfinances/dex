"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ ArrowUp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ArrowUp = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "10",
        height: "12",
        viewBox: "0 0 10 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M1.43184 4.87415C1.16148 5.14451 0.723135 5.14451 0.452772 4.87415C0.182409 4.60379 0.182409 4.16544 0.452772 3.89508L4.14508 0.202772C4.41544 -0.0675908 4.85379 -0.0675907 5.12415 0.202772L8.81646 3.89508C9.08682 4.16544 9.08682 4.60379 8.81646 4.87415C8.5461 5.14451 8.10775 5.14451 7.83739 4.87415L5.32692 2.36369L5.32692 11.3077C5.32692 11.69 5.01697 12 4.63461 12C4.25226 12 3.94231 11.69 3.94231 11.3077L3.94231 2.36369L1.43184 4.87415Z",
            fill: "currentColor"
        })
    });
};


/***/ }),

/***/ 6275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TopCurrencyTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__(2154);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(3655);
// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(7024);
// EXTERNAL MODULE: ./src/components/icons/chevron-down.tsx
var chevron_down = __webpack_require__(4423);
// EXTERNAL MODULE: ./src/components/icons/tether.tsx
var tether = __webpack_require__(9186);
// EXTERNAL MODULE: ./src/components/icons/bnb.tsx
var bnb = __webpack_require__(7290);
// EXTERNAL MODULE: ./src/components/icons/usdc.tsx
var usdc = __webpack_require__(9637);
// EXTERNAL MODULE: ./src/components/icons/cardano.tsx
var cardano = __webpack_require__(9121);
// EXTERNAL MODULE: ./src/components/icons/doge.tsx
var doge = __webpack_require__(6957);
;// CONCATENATED MODULE: ./src/data/static/top-currency-data.tsx






const TopCurrencyData = [
    {
        id: 1,
        coin: {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(tether/* Tether */.Z, {}),
            symbol: "USDT",
            name: "Tether USD"
        },
        prices: [
            {
                name: 1,
                value: 12187.44
            },
            {
                name: 2,
                value: 21356.99
            },
            {
                name: 3,
                value: 37698.98
            },
            {
                name: 4,
                value: 39587.55
            },
            {
                name: 5,
                value: 29577.4
            },
            {
                name: 6,
                value: 31577.4
            },
            {
                name: 7,
                value: 47577.4
            },
            {
                name: 8,
                value: 36577.4
            },
            {
                name: 9,
                value: 28577.4
            }, 
        ],
        usd_price: "1.01",
        usd_price_change_24h: 0.5,
        usd_marketcap: "72.35 B",
        usd_volume_24h: "25.43 B"
    },
    {
        id: 2,
        coin: {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(bnb/* Bnb */.m, {}),
            symbol: "BNB",
            name: "Binance Coin"
        },
        prices: [
            {
                name: 1,
                value: 15187.44
            },
            {
                name: 2,
                value: 16356.99
            },
            {
                name: 3,
                value: 17698.98
            },
            {
                name: 4,
                value: 37587.55
            },
            {
                name: 5,
                value: 17577.4
            },
            {
                name: 6,
                value: 20577.4
            },
            {
                name: 7,
                value: 29577.4
            },
            {
                name: 8,
                value: 33577.4
            },
            {
                name: 9,
                value: 39577.4
            }, 
        ],
        usd_price: "302.45",
        usd_price_change_24h: 0.06,
        usd_marketcap: "42.41 B",
        usd_volume_24h: "13.98 B"
    },
    {
        id: 3,
        coin: {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(usdc/* Usdc */.V, {}),
            symbol: "USDC",
            name: "USD Coin"
        },
        prices: [
            {
                name: 1,
                value: 10187.44
            },
            {
                name: 2,
                value: 21356.99
            },
            {
                name: 3,
                value: 34698.98
            },
            {
                name: 4,
                value: 35587.55
            },
            {
                name: 5,
                value: 45577.4
            },
            {
                name: 6,
                value: 39577.4
            },
            {
                name: 7,
                value: 28577.4
            },
            {
                name: 8,
                value: 33577.4
            },
            {
                name: 9,
                value: 20577.4
            }, 
        ],
        usd_price: "1.00",
        usd_price_change_24h: 0.0,
        usd_marketcap: "28.33 B",
        usd_volume_24h: "5.54 B"
    },
    {
        id: 4,
        coin: {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(cardano/* Cardano */.P, {}),
            symbol: "PB",
            name: "PB TOKEN"
        },
        prices: [
            {
                name: 1,
                value: 25187.44
            },
            {
                name: 2,
                value: 21356.99
            },
            {
                name: 3,
                value: 34698.98
            },
            {
                name: 4,
                value: 37587.55
            },
            {
                name: 5,
                value: 17577.4
            },
            {
                name: 6,
                value: 26577.4
            },
            {
                name: 7,
                value: 23577.4
            },
            {
                name: 8,
                value: 18577.4
            },
            {
                name: 9,
                value: 28577.4
            }, 
        ],
        usd_price: "0.5797",
        usd_price_change_24h: 2.6,
        usd_marketcap: "19.16 B",
        usd_volume_24h: "1.5 B"
    },
    {
        id: 5,
        coin: {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(doge/* Doge */.S, {}),
            symbol: "DF",
            name: "DF TOKEN"
        },
        prices: [
            {
                name: 1,
                value: 9187.44
            },
            {
                name: 2,
                value: 21356.99
            },
            {
                name: 3,
                value: 34698.98
            },
            {
                name: 4,
                value: 37587.55
            },
            {
                name: 5,
                value: 17577.4
            },
            {
                name: 6,
                value: 55577.4
            },
            {
                name: 7,
                value: 49577.4
            },
            {
                name: 8,
                value: 28577.4
            },
            {
                name: 9,
                value: 28577.4
            }, 
        ],
        usd_price: "0.0823",
        usd_price_change_24h: 1.06,
        usd_marketcap: "10.77 B",
        usd_volume_24h: "345.43 M"
    }, 
];

// EXTERNAL MODULE: ./src/lib/hooks/use-breakpoint.ts
var use_breakpoint = __webpack_require__(8768);
// EXTERNAL MODULE: ./src/lib/hooks/use-is-mounted.ts
var use_is_mounted = __webpack_require__(3741);
;// CONCATENATED MODULE: ./src/components/top-currency/currency-table.tsx










const COLUMNS = [
    {
        Header: "#",
        accessor: "id",
        minWidth: 60,
        maxWidth: 80
    },
    {
        Header: "Name",
        accessor: "coin",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>// <div className="ltr:text-right rtl:text-left">{value}</div>
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-5 grid grid-cols-3 gap-4 text-sm text-gray-900 last:mb-0 dark:text-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-2 flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "w-6 shrink-0",
                            children: value.icon
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "flex flex-col gap-0.5",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "whitespace-nowrap text-xs font-medium capitalize",
                                    children: value.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xs font-normal text-gray-500 dark:text-gray-400",
                                    children: value.symbol
                                })
                            ]
                        })
                    ]
                })
            }),
        minWidth: 140,
        maxWidth: 260
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",
                children: "Price"
            }),
        accessor: "usd_price",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ltr:text-right rtl:text-left",
                children: [
                    "$",
                    value
                ]
            }),
        minWidth: 100,
        maxWidth: 140
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",
                children: "24H Change"
            }),
        accessor: "usd_price_change_24h",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `ltr:text-right rtl:text-left ${value > 0 ? "text-green-500" : "text-red-500"}`,
                children: [
                    value,
                    "%"
                ]
            }),
        minWidth: 100,
        maxWidth: 140
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",
                children: "24H Volume"
            }),
        accessor: "usd_volume_24h",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "ltr:text-right rtl:text-left",
                children: [
                    "$",
                    value
                ]
            }),
        minWidth: 100,
        maxWidth: 140
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",
                children: "Market Cap"
            }),
        accessor: "usd_marketcap",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-end",
                children: [
                    "$",
                    value
                ]
            }),
        minWidth: 100,
        maxWidth: 140
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",
                children: "7D Chart"
            }),
        accessor: "prices",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-10 w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.AreaChart, {
                        data: value,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                    id: "liquidity-gradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                            offset: "5%",
                                            stopColor: "#bc9aff",
                                            stopOpacity: 0.5
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                            offset: "100%",
                                            stopColor: "#7645D9",
                                            stopOpacity: 0
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Area, {
                                type: "natural",
                                dataKey: "value",
                                stroke: "#7645D9",
                                strokeWidth: 1.5,
                                fill: "url(#liquidity-gradient)",
                                dot: false
                            })
                        ]
                    })
                })
            }),
        minWidth: 200,
        maxWidth: 300
    }, 
];
function TopCurrencyTable() {
    const isMounted = (0,use_is_mounted/* useIsMounted */.t)();
    const breakpoint = (0,use_breakpoint/* useBreakpoint */.G)();
    const data = external_react_default().useMemo(()=>TopCurrencyData, []);
    const columns = external_react_default().useMemo(()=>COLUMNS, []);
    const { getTableProps , getTableBodyProps , state , headerGroups , page , prepareRow ,  } = (0,external_react_table_.useTable)({
        // @ts-ignore
        columns,
        data
    }, external_react_table_.useSortBy, external_react_table_.useResizeColumns, external_react_table_.useFlexLayout, external_react_table_.usePagination);
    const { pageIndex  } = state;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-tl-lg rounded-tr-lg bg-white px-4 pt-6 dark:bg-light-dark md:px-8 md:pt-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col items-center justify-between border-b border-dashed border-gray-200 pb-5 dark:border-gray-700 md:flex-row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "mb-3 shrink-0 text-lg font-medium uppercase text-black dark:text-white sm:text-xl md:mb-0 md:text-2xl",
                        children: "Top Cryptocurrency"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "-mx-0.5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                    style: {
                        width: "100%"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-0.5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                            ...getTableProps(),
                            className: "transaction-table w-full border-separate border-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    className: "text-sm text-gray-500 dark:text-gray-300",
                                    children: headerGroups.map((headerGroup, idx)=>/*#__PURE__*/ (0,external_react_.createElement)("tr", {
                                            ...headerGroup.getHeaderGroupProps(),
                                            key: idx
                                        }, headerGroup.headers.map((column, idx)=>/*#__PURE__*/ (0,external_react_.createElement)("th", {
                                                ...column.getHeaderProps(column.getSortByToggleProps()),
                                                key: idx,
                                                className: "group bg-white px-2 py-5 font-normal first:rounded-bl-lg last:rounded-br-lg ltr:first:pl-8 ltr:last:pr-8 rtl:first:pr-8 rtl:last:pl-8 dark:bg-light-dark md:px-4"
                                            }, /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    column.render("Header"),
                                                    column.canResize && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        ...column.getResizerProps(),
                                                        className: `resizer ${column.isResizing ? "isResizing" : ""}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ltr:ml-1 rtl:mr-1",
                                                        children: column.isSorted ? column.isSortedDesc ? /*#__PURE__*/ jsx_runtime_.jsx(chevron_down/* ChevronDown */._, {}) : /*#__PURE__*/ jsx_runtime_.jsx(chevron_down/* ChevronDown */._, {
                                                            className: "rotate-180"
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(chevron_down/* ChevronDown */._, {
                                                            className: "rotate-180 opacity-0 transition group-hover:opacity-50"
                                                        })
                                                    })
                                                ]
                                            })))))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                    ...getTableBodyProps(),
                                    className: "text-xs font-medium text-gray-900 dark:text-white 3xl:text-sm",
                                    children: page.map((row, idx)=>{
                                        prepareRow(row);
                                        return /*#__PURE__*/ (0,external_react_.createElement)("tr", {
                                            ...row.getRowProps(),
                                            key: idx,
                                            className: "mb-3 items-center rounded-lg bg-white uppercase shadow-card last:mb-0 dark:bg-light-dark"
                                        }, row.cells.map((cell, idx)=>{
                                            return /*#__PURE__*/ (0,external_react_.createElement)("td", {
                                                ...cell.getCellProps(),
                                                key: idx,
                                                className: "px-2 py-4 tracking-[1px] ltr:first:pl-4 ltr:last:pr-4 rtl:first:pr-8 rtl:last:pl-8 md:px-4 md:py-6 md:ltr:first:pl-8 md:ltr:last:pr-8 3xl:py-5"
                                            }, cell.render("Cell"));
                                        }));
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 6454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TransactionTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-table"
var external_react_table_ = __webpack_require__(2154);
// EXTERNAL MODULE: ./src/components/ui/button/index.ts + 4 modules
var ui_button = __webpack_require__(9535);
// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(7024);
// EXTERNAL MODULE: ./src/components/icons/chevron-down.tsx
var chevron_down = __webpack_require__(4423);
// EXTERNAL MODULE: ./src/components/icons/long-arrow-right.tsx
var long_arrow_right = __webpack_require__(6823);
// EXTERNAL MODULE: ./src/components/icons/long-arrow-left.tsx
var long_arrow_left = __webpack_require__(278);
;// CONCATENATED MODULE: ./src/components/icons/link-icon.tsx

const LinkIcon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10.1933 8.36944C10.0493 8.36944 9.90532 8.3146 9.79563 8.20463C8.91842 7.32741 7.49108 7.32712 6.61359 8.20463C6.39421 8.42428 6.03759 8.42428 5.81821 8.20463C5.59856 7.98497 5.59856 7.62891 5.81821 7.40925C7.13418 6.093 9.27532 6.09328 10.591 7.40925C10.8107 7.62891 10.8107 7.98497 10.591 8.20463C10.4813 8.3146 10.337 8.36944 10.1933 8.36944Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.79564 11.5782C8.93137 11.5782 8.06709 11.2492 7.40925 10.5913C7.18959 10.3717 7.18959 10.0156 7.40925 9.79594C7.62862 9.57628 7.98525 9.57628 8.20462 9.79594C9.08183 10.6732 10.5092 10.6734 11.3867 9.79594C11.606 9.57628 11.9627 9.57628 12.182 9.79594C12.4017 10.0156 12.4017 10.3717 12.182 10.5913C11.5239 11.2492 10.6596 11.5782 9.79564 11.5782Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.7841 10.7558C11.6401 10.7558 11.4961 10.701 11.3864 10.591C11.1667 10.3714 11.1667 10.0153 11.3864 9.79564L14.5285 6.65353C14.7479 6.43387 15.1045 6.43387 15.3239 6.65353C15.5436 6.87318 15.5436 7.22924 15.3239 7.4489L12.1818 10.591C12.0721 10.701 11.9281 10.7558 11.7841 10.7558Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.05121 15.4887C6.90721 15.4887 6.76321 15.4339 6.65353 15.3239C6.43387 15.1043 6.43387 14.7482 6.65353 14.5285L8.40993 12.7721C8.6293 12.5524 8.98592 12.5524 9.2053 12.7721C9.42495 12.9918 9.42495 13.3478 9.2053 13.5675L7.4489 15.3239C7.33921 15.4339 7.19521 15.4887 7.05121 15.4887Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3.07378 11.5113C2.92978 11.5113 2.78578 11.4564 2.67609 11.3465C2.45644 11.1268 2.45644 10.7707 2.67609 10.5511L5.81822 7.40925C6.03788 7.18959 6.39422 7.18959 6.61359 7.40925C6.83325 7.6289 6.83325 7.98497 6.61359 8.20462L3.47147 11.3465C3.3615 11.4561 3.2175 11.5113 3.07378 11.5113Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M9.19237 5.39297C9.04837 5.39297 8.90465 5.33813 8.79469 5.22844C8.57503 5.00878 8.57503 4.65272 8.79469 4.43278L10.5511 2.67609C10.7707 2.45644 11.1268 2.45644 11.3467 2.67609C11.5664 2.89575 11.5664 3.25181 11.3467 3.47175L9.59034 5.22844C9.48037 5.33784 9.33609 5.39297 9.19237 5.39297Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5.0625 16.2942C4.19259 16.2942 3.32269 15.9708 2.67609 15.3239C1.38234 14.0302 1.38234 11.8446 2.67609 10.5508C2.89547 10.3312 3.25209 10.3312 3.47147 10.5508C3.69112 10.7705 3.69112 11.1265 3.47147 11.3462C2.60915 12.2085 2.60915 13.6659 3.47147 14.5282C4.33378 15.3906 5.79122 15.3906 6.65353 14.5282C6.8729 14.3086 7.22953 14.3086 7.4489 14.5282C7.66856 14.7479 7.66856 15.104 7.4489 15.3236C6.80231 15.9708 5.9324 16.2942 5.0625 16.2942Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.9262 7.61372C14.7822 7.61372 14.6382 7.55887 14.5285 7.4489C14.3089 7.22925 14.3089 6.87319 14.5285 6.65353C15.3909 5.79122 15.3909 4.33378 14.5285 3.47147C13.6662 2.60915 12.2088 2.60915 11.3465 3.47147C11.1271 3.69112 10.7705 3.69112 10.5511 3.47147C10.3314 3.25181 10.3314 2.89575 10.5511 2.67609C11.8448 1.38234 14.0305 1.38234 15.3242 2.67609C16.618 3.96984 16.618 6.15544 15.3242 7.44919C15.2142 7.55887 15.0702 7.61372 14.9262 7.61372Z",
                fill: "currentColor"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/data/static/transaction-data.tsx
const TransactionData = [
    {
        id: 0,
        transactionType: "Buy",
        createdAt: "12 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.2231345",
            usdBalance: "11,032.24"
        }
    },
    {
        id: 1,
        transactionType: "Sell",
        createdAt: "13 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.231345",
            usdBalance: "1,032.24"
        }
    },
    {
        id: 2,
        transactionType: "Buy",
        createdAt: "14 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.3231345",
            usdBalance: "21,032.24"
        }
    },
    {
        id: 3,
        transactionType: "Sell",
        createdAt: "15 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.531345",
            usdBalance: "1,232.24"
        }
    },
    {
        id: 4,
        transactionType: "Buy",
        createdAt: "16 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.1931345",
            usdBalance: "9,032.24"
        }
    },
    {
        id: 5,
        transactionType: "Buy",
        createdAt: "17 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.4231345",
            usdBalance: "31,032.24"
        }
    },
    {
        id: 6,
        transactionType: "Buy",
        createdAt: "18 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.8231345",
            usdBalance: "61,032.24"
        }
    },
    {
        id: 7,
        transactionType: "Buy",
        createdAt: "19 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.1431345",
            usdBalance: "4,032.24"
        }
    },
    {
        id: 8,
        transactionType: "Buy",
        createdAt: "20 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.3131345",
            usdBalance: "41,032.24"
        }
    },
    {
        id: 9,
        transactionType: "Buy",
        createdAt: "21 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.5431345",
            usdBalance: "65,032.24"
        }
    },
    {
        id: 10,
        transactionType: "Buy",
        createdAt: "22 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.7531345",
            usdBalance: "68,032.24"
        }
    },
    {
        id: 11,
        transactionType: "Buy",
        createdAt: "23 january 2022",
        symbol: "BTC",
        status: "Pending",
        address: "0898hshiw36...",
        amount: {
            balance: "0.2931345",
            usdBalance: "21,032.24"
        }
    }, 
];

// EXTERNAL MODULE: ./src/lib/hooks/use-breakpoint.ts
var use_breakpoint = __webpack_require__(8768);
// EXTERNAL MODULE: ./src/lib/hooks/use-is-mounted.ts
var use_is_mounted = __webpack_require__(3741);
;// CONCATENATED MODULE: ./src/components/transaction/transaction-table.tsx













const COLUMNS = [
    {
        Header: "ID",
        accessor: "id",
        minWidth: 60,
        maxWidth: 80
    },
    {
        Header: "Type",
        accessor: "transactionType",
        minWidth: 60,
        maxWidth: 80
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto rtl:mr-auto",
                children: "Date"
            }),
        accessor: "createdAt",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:text-right rtl:text-left",
                children: value
            }),
        minWidth: 160,
        maxWidth: 220
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto rtl:mr-auto",
                children: "Asset"
            }),
        accessor: "symbol",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:text-right rtl:text-left",
                children: value
            }),
        minWidth: 80,
        maxWidth: 120
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto rtl:mr-auto",
                children: "Status"
            }),
        accessor: "status",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:text-right rtl:text-left",
                children: value
            }),
        minWidth: 100,
        maxWidth: 180
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto rtl:mr-auto",
                children: "Address"
            }),
        accessor: "address",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-end",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(LinkIcon, {
                        className: "h-[18px] w-[18px] ltr:mr-2 rtl:ml-2"
                    }),
                    " ",
                    value
                ]
            }),
        minWidth: 220,
        maxWidth: 280
    },
    {
        Header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ltr:ml-auto rtl:mr-auto",
                children: "Amount"
            }),
        accessor: "amount",
        // @ts-ignore
        Cell: ({ cell: { value  }  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col -tracking-[1px] ltr:text-right rtl:text-left",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                        className: "mb-0.5 flex text-base ltr:justify-end rtl:justify-start md:mb-1.5 md:text-lg lg:text-base 3xl:text-2xl",
                        children: [
                            value.balance,
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "inline-block ltr:ml-1.5 rtl:mr-1.5 md:ltr:ml-2 md:rtl:mr-2",
                                children: "BTC"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: [
                            "$",
                            value.usdBalance
                        ]
                    })
                ]
            }),
        minWidth: 200,
        maxWidth: 300
    }, 
];
function TransactionTable() {
    const isMounted = (0,use_is_mounted/* useIsMounted */.t)();
    const breakpoint = (0,use_breakpoint/* useBreakpoint */.G)();
    const data = external_react_default().useMemo(()=>TransactionData, []);
    const columns = external_react_default().useMemo(()=>COLUMNS, []);
    const { getTableProps , getTableBodyProps , canPreviousPage , canNextPage , pageOptions , state , headerGroups , page , nextPage , previousPage , prepareRow ,  } = (0,external_react_table_.useTable)({
        // @ts-ignore
        columns,
        data,
        initialState: {
            pageSize: 5
        }
    }, external_react_table_.useSortBy, external_react_table_.useResizeColumns, external_react_table_.useFlexLayout, external_react_table_.usePagination);
    const { pageIndex  } = state;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-tl-lg rounded-tr-lg bg-white px-4 pt-6 dark:bg-light-dark md:px-8 md:pt-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col items-center justify-between border-b border-dashed border-gray-200 pb-5 dark:border-gray-700 md:flex-row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "mb-3 shrink-0 text-lg font-medium uppercase text-black dark:text-white sm:text-xl md:mb-0 md:text-2xl",
                        children: "Transaction History"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "-mx-0.5",
                children: /*#__PURE__*/ jsx_runtime_.jsx(scrollbar/* default */.Z, {
                    style: {
                        width: "100%"
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-0.5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                            ...getTableProps(),
                            className: "transaction-table w-full border-separate border-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    className: "text-sm text-gray-500 dark:text-gray-300",
                                    children: headerGroups.map((headerGroup, idx)=>/*#__PURE__*/ (0,external_react_.createElement)("tr", {
                                            ...headerGroup.getHeaderGroupProps(),
                                            key: idx
                                        }, headerGroup.headers.map((column, idx)=>/*#__PURE__*/ (0,external_react_.createElement)("th", {
                                                ...column.getHeaderProps(column.getSortByToggleProps()),
                                                key: idx,
                                                className: "group bg-white px-2 py-5 font-normal first:rounded-bl-lg last:rounded-br-lg ltr:first:pl-8 ltr:last:pr-8 rtl:first:pr-8 rtl:last:pl-8 dark:bg-light-dark md:px-4"
                                            }, /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [
                                                    column.render("Header"),
                                                    column.canResize && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        ...column.getResizerProps(),
                                                        className: `resizer ${column.isResizing ? "isResizing" : ""}`
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ltr:ml-1 rtl:mr-1",
                                                        children: column.isSorted ? column.isSortedDesc ? /*#__PURE__*/ jsx_runtime_.jsx(chevron_down/* ChevronDown */._, {}) : /*#__PURE__*/ jsx_runtime_.jsx(chevron_down/* ChevronDown */._, {
                                                            className: "rotate-180"
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(chevron_down/* ChevronDown */._, {
                                                            className: "rotate-180 opacity-0 transition group-hover:opacity-50"
                                                        })
                                                    })
                                                ]
                                            })))))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                    ...getTableBodyProps(),
                                    className: "text-xs font-medium text-gray-900 dark:text-white 3xl:text-sm",
                                    children: page.map((row, idx)=>{
                                        prepareRow(row);
                                        return /*#__PURE__*/ (0,external_react_.createElement)("tr", {
                                            ...row.getRowProps(),
                                            key: idx,
                                            className: "mb-3 items-center rounded-lg bg-white uppercase shadow-card last:mb-0 dark:bg-light-dark"
                                        }, row.cells.map((cell, idx)=>{
                                            return /*#__PURE__*/ (0,external_react_.createElement)("td", {
                                                ...cell.getCellProps(),
                                                key: idx,
                                                className: "px-2 py-4 tracking-[1px] ltr:first:pl-4 ltr:last:pr-4 rtl:first:pr-8 rtl:last:pl-8 md:px-4 md:py-6 md:ltr:first:pl-8 md:ltr:last:pr-8 3xl:py-5"
                                            }, cell.render("Cell"));
                                        }));
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-3 flex items-center justify-center rounded-lg bg-white px-5 py-4 text-sm shadow-card dark:bg-light-dark lg:py-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center gap-5",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                            onClick: ()=>previousPage(),
                            disabled: !canPreviousPage,
                            title: "Previous",
                            shape: "circle",
                            variant: "transparent",
                            size: "small",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(long_arrow_left/* LongArrowLeft */.S, {
                                className: "h-auto w-4 rtl:rotate-180"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                "Page",
                                " ",
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                    className: "font-semibold",
                                    children: [
                                        pageIndex + 1,
                                        " of ",
                                        pageOptions.length
                                    ]
                                }),
                                " "
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                            onClick: ()=>nextPage(),
                            disabled: !canNextPage,
                            title: "Next",
                            shape: "circle",
                            variant: "transparent",
                            size: "small",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(long_arrow_right/* LongArrowRight */.R, {
                                className: "h-auto w-4 rtl:rotate-180"
                            })
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 713:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CoinSlider)
/* harmony export */ });
/* unused harmony export CoinCard */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3879);
/* harmony import */ var _components_icons_arrow_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6222);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function CoinCard({ name , symbol , logo , balance , usdBalance , change , isChangePositive , color ="#FDEDD4"  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative rounded-lg p-6 xl:p-8",
        style: {
            backgroundColor: color
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: "mb-8 text-sm font-medium uppercase tracking-wider text-gray-900",
                children: name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative h-20 lg:h-24 xl:h-28 3xl:h-36",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    src: logo,
                    alt: name,
                    layout: "fill",
                    objectFit: "contain",
                    objectPosition: 0
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-8 mb-2 text-sm font-medium tracking-wider text-gray-900 lg:text-lg 2xl:text-xl 3xl:text-2xl",
                children: [
                    balance,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "uppercase",
                        children: [
                            " ",
                            symbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between text-xs font-medium 2xl:text-sm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "tracking-wider text-gray-600",
                        children: [
                            usdBalance,
                            " USD"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: `flex items-center  ${isChangePositive ? "text-green-500" : "text-red-500"}`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `ltr:mr-2 rtl:ml-2 ${!isChangePositive ? "rotate-180" : ""}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_arrow_up__WEBPACK_IMPORTED_MODULE_2__/* .ArrowUp */ .a, {})
                            }),
                            change
                        ]
                    })
                ]
            })
        ]
    });
}
function CoinSlider({ coins  }) {
    const sliderBreakPoints = {
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        1700: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        2200: {
            slidesPerView: 4,
            spaceBetween: 24
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_3__.Scrollbar,
                swiper__WEBPACK_IMPORTED_MODULE_3__.A11y
            ],
            spaceBetween: 24,
            slidesPerView: 1,
            scrollbar: {
                draggable: true
            },
            breakpoints: sliderBreakPoints,
            observer: true,
            dir: "ltr",
            children: coins.map((coin)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CoinCard, {
                        id: coin.id,
                        name: coin.name,
                        symbol: coin.symbol,
                        logo: coin.logo,
                        balance: coin.balance,
                        usdBalance: coin.usdBalance,
                        change: coin.change,
                        isChangePositive: coin.isChangePositive,
                        color: coin.color
                    })
                }, coin.id))
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LiquidityChart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(3655);
;// CONCATENATED MODULE: ./src/data/static/liquidity.tsx
const LiquidityData = [
    {
        dailyVolumeUSD: "333270564",
        date: 1659349928,
        totalLiquidityUSD: "3703090662",
        name: "02"
    },
    {
        dailyVolumeUSD: "321547973",
        date: 1659349928,
        totalLiquidityUSD: "3871908727",
        name: "03"
    },
    {
        dailyVolumeUSD: "492601964",
        date: 1659349928,
        totalLiquidityUSD: "4149219813",
        name: "04"
    },
    {
        dailyVolumeUSD: "588566822",
        date: 1659349928,
        totalLiquidityUSD: "3941875556",
        name: "05"
    },
    {
        dailyVolumeUSD: "702812550",
        date: 1659349928,
        totalLiquidityUSD: "3922395813",
        name: "06"
    },
    {
        dailyVolumeUSD: "530502539",
        date: 1659349928,
        totalLiquidityUSD: "3976251625",
        name: "07"
    },
    {
        dailyVolumeUSD: "762940634",
        date: 1659349928,
        totalLiquidityUSD: "3815788580",
        name: "08"
    },
    {
        dailyVolumeUSD: "888690463",
        date: 1659349928,
        totalLiquidityUSD: "3814132882",
        name: "09"
    },
    {
        dailyVolumeUSD: "949235732",
        date: 1659349928,
        totalLiquidityUSD: "4075538381",
        name: "10"
    },
    {
        dailyVolumeUSD: "721523311",
        date: 1659349928,
        totalLiquidityUSD: "4004433541",
        name: "11"
    },
    {
        dailyVolumeUSD: "621665245",
        date: 1659349928,
        totalLiquidityUSD: "4053222290",
        name: "12"
    },
    {
        dailyVolumeUSD: "596334595",
        date: 1659349928,
        totalLiquidityUSD: "4063003713",
        name: "13"
    },
    {
        dailyVolumeUSD: "522772374",
        date: 1659349928,
        totalLiquidityUSD: "4222396366",
        name: "14"
    },
    {
        dailyVolumeUSD: "598390916",
        date: 1659349928,
        totalLiquidityUSD: "4287632800",
        name: "15"
    },
    {
        dailyVolumeUSD: "558345299",
        date: 1659349928,
        totalLiquidityUSD: "4275282121",
        name: "16"
    },
    {
        dailyVolumeUSD: "589481920",
        date: 1659349928,
        totalLiquidityUSD: "4023020582",
        name: "17"
    },
    {
        dailyVolumeUSD: "548449241",
        date: 1659349928,
        totalLiquidityUSD: "4151293071",
        name: "18"
    },
    {
        dailyVolumeUSD: "547792029",
        date: 1659349928,
        totalLiquidityUSD: "4035278927",
        name: "19"
    },
    {
        dailyVolumeUSD: "410398073",
        date: 1659349928,
        totalLiquidityUSD: "4058540362",
        name: "20"
    },
    {
        dailyVolumeUSD: "479219596",
        date: 1659349928,
        totalLiquidityUSD: "4121875852",
        name: "21"
    }, 
];

;// CONCATENATED MODULE: ./src/components/ui/liquidity-chart.tsx





function CustomAxis({ x , y , payload  }) {
    const date = (0,external_date_fns_.format)(new Date(payload.value * 1000), "d");
    return /*#__PURE__*/ jsx_runtime_.jsx("g", {
        transform: `translate(${x},${y})`,
        className: "text-xs text-gray-500 md:text-sm",
        children: /*#__PURE__*/ jsx_runtime_.jsx("text", {
            x: 0,
            y: 0,
            dy: 10,
            textAnchor: "end",
            fill: "currentColor",
            children: date
        })
    });
}
const numberAbbr = (number)=>{
    if (number < 1e3) return number;
    if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + "K";
    if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + "M";
    if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + "B";
    if (number >= 1e12) return +(number / 1e12).toFixed(1) + "T";
};
function LiquidityChart() {
    let { 0: date , 1: setDate  } = (0,external_react_.useState)(1659349928);
    let { 0: liquidity , 1: setLiquidity  } = (0,external_react_.useState)("547792029");
    const formattedDate = (0,external_date_fns_.format)(new Date(date * 1000), "MMMM d, yyyy");
    const dailyLiquidity = numberAbbr(liquidity);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mb-1.5 text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 sm:mb-2 sm:text-base",
                children: "Liquidity"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-1 text-base font-medium text-gray-900 dark:text-white sm:text-xl",
                children: dailyLiquidity
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-xs text-gray-600 dark:text-gray-400 sm:text-sm",
                children: formattedDate
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-5 h-64 sm:mt-8 2xl:h-72 3xl:h-[340px] 4xl:h-[480px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.AreaChart, {
                        data: LiquidityData,
                        margin: {
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        onMouseMove: (data)=>{
                            if (data.isTooltipActive) {
                                setDate(data.activePayload && data.activePayload[0].payload.date);
                                setLiquidity(data.activePayload && data.activePayload[0].payload.dailyVolumeUSD);
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                                    id: "liquidity-gradient",
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                            offset: "5%",
                                            stopColor: "#bc9aff",
                                            stopOpacity: 0.5
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                            offset: "100%",
                                            stopColor: "#7645D9",
                                            stopOpacity: 0
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.XAxis, {
                                dataKey: "date",
                                tickLine: false,
                                axisLine: false,
                                tick: /*#__PURE__*/ jsx_runtime_.jsx(CustomAxis, {}),
                                interval: 0,
                                tickMargin: 5
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Tooltip, {
                                content: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                cursor: {
                                    stroke: "#7645D9"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Area, {
                                type: "linear",
                                dataKey: "dailyVolumeUSD",
                                stroke: "#7645D9",
                                strokeWidth: 1.5,
                                fill: "url(#liquidity-gradient)"
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 9799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ OverviewChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3655);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);


const data = [
    {
        name: "Page A",
        uv: 1200,
        pv: 800
    },
    {
        name: "Page B",
        uv: 2600,
        pv: 100
    },
    {
        name: "Page C",
        uv: 1900,
        pv: 1600
    },
    {
        name: "Page D",
        uv: 2280,
        pv: 1508
    },
    {
        name: "Page E",
        uv: 1290,
        pv: 3500
    },
    {
        name: "Page F",
        uv: 1690,
        pv: 3000
    },
    {
        name: "Page G",
        uv: 2590,
        pv: 4500
    }, 
];
function OverviewChart() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "rounded-lg bg-gray-900 p-6 text-white dark:bg-light-dark sm:p-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "text-xl font-medium tracking-tighter text-white sm:text-3xl",
                children: "74.8%"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mt-2 mb-1 text-xs font-medium text-gray-400 sm:text-sm",
                children: "Compare to $1,812 last week"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-60 w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.ResponsiveContainer, {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(recharts__WEBPACK_IMPORTED_MODULE_1__.LineChart, {
                        data: data,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {
                                type: "natural",
                                dataKey: "pv",
                                stroke: "#1E40AF",
                                strokeWidth: 4,
                                dot: false
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(recharts__WEBPACK_IMPORTED_MODULE_1__.Line, {
                                type: "natural",
                                dataKey: "uv",
                                stroke: "#1F2937",
                                strokeWidth: 4,
                                dot: false
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 8897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TopPools)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/icons/bitcoin.tsx
var bitcoin = __webpack_require__(134);
// EXTERNAL MODULE: ./src/components/icons/ethereum.tsx
var ethereum = __webpack_require__(9074);
// EXTERNAL MODULE: ./src/components/icons/tether.tsx
var tether = __webpack_require__(9186);
// EXTERNAL MODULE: ./src/components/icons/bnb.tsx
var bnb = __webpack_require__(7290);
// EXTERNAL MODULE: ./src/components/icons/usdc.tsx
var usdc = __webpack_require__(9637);
// EXTERNAL MODULE: ./src/components/icons/cardano.tsx
var cardano = __webpack_require__(9121);
// EXTERNAL MODULE: ./src/components/icons/doge.tsx
var doge = __webpack_require__(6957);
;// CONCATENATED MODULE: ./src/data/static/token-data.tsx








const TopTokensData = [
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(bitcoin/* Bitcoin */.p, {}),
        code: "BTC",
        name: "Bitcoin",
        volume: "256.5M"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(ethereum/* Ethereum */.k, {}),
        code: "ETH",
        name: "Ethereum",
        volume: "740.7M"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(tether/* Tether */.Z, {}),
        code: "USDT",
        name: "Tether USD",
        volume: "566.2M"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(bnb/* Bnb */.m, {}),
        code: "BUSD",
        name: "Binance USD",
        volume: "396.4M"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(usdc/* Usdc */.V, {}),
        code: "USDC",
        name: "USD Coin",
        volume: "145.1M"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(cardano/* Cardano */.P, {}),
        code: "ADA",
        name: "Cardano",
        volume: "267.3M"
    },
    {
        icon: /*#__PURE__*/ jsx_runtime_.jsx(doge/* Doge */.S, {}),
        code: "DOGE",
        name: "Doge Coin",
        volume: "421.9M"
    }, 
];
const TopPoolsData = [
    {
        from: "USDT",
        to: "USDC",
        volume: "402.5M"
    },
    {
        from: "USDC",
        to: "BNB",
        volume: "356.4M"
    },
    {
        from: "USDT",
        to: "BNB",
        volume: "295.6M"
    }, 
];

// EXTERNAL MODULE: ./src/components/ui/currency-swap-icons.tsx
var currency_swap_icons = __webpack_require__(7822);
;// CONCATENATED MODULE: ./src/components/ui/top-pools.tsx



function TopPools() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mb-6 text-base font-medium uppercase",
                children: "Top Pools"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-5 grid grid-cols-3 gap-4 text-sm text-gray-500 dark:text-gray-400",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-span-2",
                        children: "Pool"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "Volume"
                    })
                ]
            }),
            TopPoolsData.map((pool, index)=>{
                let from = pool.from;
                let to = pool.to;
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-5 grid grid-cols-3 gap-4 text-sm text-gray-900 last:mb-0 dark:text-white",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-span-2 flex items-center gap-2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(currency_swap_icons/* default */.Z, {
                                from: from,
                                to: to
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: pool.volume
                        })
                    ]
                }, index);
            })
        ]
    });
};


/***/ }),

/***/ 5837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ VolumeChart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: external "recharts"
var external_recharts_ = __webpack_require__(3655);
;// CONCATENATED MODULE: ./src/data/static/volume.tsx
const VolumeData = [
    {
        dailyVolumeUSD: "333270564",
        date: 1659349928,
        totalLiquidityUSD: "3703090662",
        name: "02"
    },
    {
        dailyVolumeUSD: "411547973",
        date: 1659349928,
        totalLiquidityUSD: "4871908727",
        name: "03"
    },
    {
        dailyVolumeUSD: "582601964",
        date: 1659349928,
        totalLiquidityUSD: "5949219813",
        name: "04"
    },
    {
        dailyVolumeUSD: "678566822",
        date: 1659349928,
        totalLiquidityUSD: "3941875556",
        name: "05"
    },
    {
        dailyVolumeUSD: "702812550",
        date: 1659349928,
        totalLiquidityUSD: "3922395813",
        name: "06"
    },
    {
        dailyVolumeUSD: "530502539",
        date: 1659349928,
        totalLiquidityUSD: "3976251625",
        name: "07"
    },
    {
        dailyVolumeUSD: "762940634",
        date: 1659349928,
        totalLiquidityUSD: "3815788580",
        name: "08"
    },
    {
        dailyVolumeUSD: "888690463",
        date: 1659349928,
        totalLiquidityUSD: "3814132882",
        name: "09"
    },
    {
        dailyVolumeUSD: "949235732",
        date: 1659349928,
        totalLiquidityUSD: "4075538381",
        name: "10"
    },
    {
        dailyVolumeUSD: "721523311",
        date: 1659349928,
        totalLiquidityUSD: "4004433541",
        name: "11"
    },
    {
        dailyVolumeUSD: "621665245",
        date: 1659349928,
        totalLiquidityUSD: "4053222290",
        name: "12"
    },
    {
        dailyVolumeUSD: "696334595",
        date: 1659349928,
        totalLiquidityUSD: "4063003713",
        name: "13"
    },
    {
        dailyVolumeUSD: "722772374",
        date: 1659349928,
        totalLiquidityUSD: "4222396366",
        name: "14"
    },
    {
        dailyVolumeUSD: "698390916",
        date: 1659349928,
        totalLiquidityUSD: "4287632800",
        name: "15"
    },
    {
        dailyVolumeUSD: "558345299",
        date: 1659349928,
        totalLiquidityUSD: "4275282121",
        name: "16"
    },
    {
        dailyVolumeUSD: "589481920",
        date: 1659349928,
        totalLiquidityUSD: "4023020582",
        name: "17"
    },
    {
        dailyVolumeUSD: "548449241",
        date: 1659349928,
        totalLiquidityUSD: "4151293071",
        name: "18"
    },
    {
        dailyVolumeUSD: "547792029",
        date: 1659349928,
        totalLiquidityUSD: "4035278927",
        name: "19"
    },
    {
        dailyVolumeUSD: "510398073",
        date: 1659349928,
        totalLiquidityUSD: "4058540362",
        name: "20"
    },
    {
        dailyVolumeUSD: "679219596",
        date: 1659349928,
        totalLiquidityUSD: "4121875852",
        name: "21"
    }, 
];

;// CONCATENATED MODULE: ./src/components/ui/volume-chart.tsx





function CustomAxis({ x , y , payload  }) {
    const date = (0,external_date_fns_.format)(new Date(payload.value * 1000), "d");
    return /*#__PURE__*/ jsx_runtime_.jsx("g", {
        transform: `translate(${x},${y})`,
        className: "text-sm text-gray-500",
        children: /*#__PURE__*/ jsx_runtime_.jsx("text", {
            x: 0,
            y: 0,
            dy: 10,
            textAnchor: "end",
            fill: "currentColor",
            children: date
        })
    });
}
const numberAbbr = (number)=>{
    if (number < 1e3) return number;
    if (number >= 1e3 && number < 1e6) return +(number / 1e3).toFixed(1) + "K";
    if (number >= 1e6 && number < 1e9) return +(number / 1e6).toFixed(1) + "M";
    if (number >= 1e9 && number < 1e12) return +(number / 1e9).toFixed(1) + "B";
    if (number >= 1e12) return +(number / 1e12).toFixed(1) + "T";
};
function VolumeChart() {
    let { 0: date , 1: setDate  } = (0,external_react_.useState)(1659349928);
    let { 0: volume , 1: setVolume  } = (0,external_react_.useState)("547792029");
    const formattedDate = (0,external_date_fns_.format)(new Date(date * 1000), "MMMM d, yyyy");
    const dailyVolume = numberAbbr(volume);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mb-1.5 text-sm uppercase tracking-wider text-gray-600 dark:text-gray-400 sm:mb-2 sm:text-base",
                children: "Volume 24h"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-1 text-base font-medium text-gray-900 dark:text-white sm:text-xl",
                children: dailyVolume
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-xs text-gray-600 dark:text-gray-400 sm:text-sm",
                children: formattedDate
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-5 h-56 sm:mt-8 lg:h-64 2xl:h-72 3xl:h-[340px] 4xl:h-[480px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.ResponsiveContainer, {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_recharts_.BarChart, {
                        data: VolumeData,
                        margin: {
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        },
                        onMouseMove: (data)=>{
                            if (data.isTooltipActive) {
                                setDate(data.activePayload && data.activePayload[0].payload.date);
                                setVolume(data.activePayload && data.activePayload[0].payload.dailyVolumeUSD);
                            }
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.XAxis, {
                                dataKey: "date",
                                tickLine: false,
                                axisLine: false,
                                tick: /*#__PURE__*/ jsx_runtime_.jsx(CustomAxis, {}),
                                interval: 0,
                                tickMargin: 5
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Tooltip, {
                                content: /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {}),
                                cursor: {
                                    strokeWidth: 0,
                                    fill: "#dffdff"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_recharts_.Bar, {
                                type: "monotone",
                                dataKey: "dailyVolumeUSD",
                                fill: "#1FC7D4"
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 2972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ coinSlideData)
});

;// CONCATENATED MODULE: ./src/assets/images/coin/bitcoin.svg
/* harmony default export */ const bitcoin = ({"src":"/_next/static/media/bitcoin.81bd702b.svg","height":155,"width":112});
;// CONCATENATED MODULE: ./src/assets/images/coin/tether.svg
/* harmony default export */ const tether = ({"src":"/_next/static/media/tether.2812ac25.svg","height":155,"width":169});
;// CONCATENATED MODULE: ./src/assets/images/coin/cardano.svg
/* harmony default export */ const cardano = ({"src":"/_next/static/media/cardano.67050fa6.svg","height":137,"width":148});
;// CONCATENATED MODULE: ./src/assets/images/coin/binance.svg
/* harmony default export */ const binance = ({"src":"/_next/static/media/binance.72164c61.svg","height":155,"width":155});
;// CONCATENATED MODULE: ./src/data/static/coin-slide-data.tsx
//images




const coinSlideData = [
    {
        id: "0",
        name: "DF TOKEN",
        symbol: "DF",
        balance: "0.2231345",
        usdBalance: "11,032.24",
        logo: bitcoin,
        change: "+12.5%",
        isChangePositive: true,
        color: "#FDEDD4"
    },
    {
        id: "1",
        name: "Tether",
        symbol: "USDT",
        balance: "1.2345",
        usdBalance: "1,032.24",
        logo: tether,
        change: "-1.5%",
        isChangePositive: false,
        color: "#E1F9F1"
    },
    {
        id: "2",
        name: "PB TOKEN",
        symbol: "PB",
        balance: "1.2370",
        usdBalance: "532.94",
        logo: cardano,
        change: "+12.5%",
        isChangePositive: true,
        color: "#DBE3FF"
    },
    {
        id: "3",
        name: "Binance",
        symbol: "BUSD",
        balance: "240.55",
        usdBalance: "340.24",
        logo: binance,
        change: "+1.5%",
        isChangePositive: true,
        color: "#FBF5D5"
    }, 
];


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

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9292);
/* harmony import */ var _components_ui_coin_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(713);
/* harmony import */ var _components_ui_overview_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9799);
/* harmony import */ var _components_ui_liquidity_chart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6378);
/* harmony import */ var _components_ui_volume_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5837);
/* harmony import */ var _components_ui_top_pools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8897);
/* harmony import */ var _components_transaction_transaction_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6454);
/* harmony import */ var _components_top_currency_currency_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6275);
/* harmony import */ var _data_static_coin_slide_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2972);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_2__, _components_ui_coin_card__WEBPACK_IMPORTED_MODULE_3__]);
([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_2__, _components_ui_coin_card__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const getStaticProps = async ()=>{
    return {
        props: {}
    };
};
const HomePage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: "DREAM FINANCE",
                description: "DREAM FINANCE INNOVATIVE WEB3 DEX"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mb-8 w-full sm:mb-0 sm:w-1/2 sm:ltr:pr-6 sm:rtl:pl-6 md:w-[calc(100%-256px)] lg:w-[calc(100%-288px)] 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_coin_card__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    coins: _data_static_coin_slide_data__WEBPACK_IMPORTED_MODULE_10__/* .coinSlideData */ .$
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full sm:w-1/2 md:w-64 lg:w-72 2xl:w-80 3xl:w-[358px]"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-8 grid gap-6 sm:my-10 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_liquidity_chart__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_volume_chart__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-8 sm:my-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_top_currency_currency_table__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full lg:w-[calc(100%-288px)] ltr:lg:pr-6 rtl:lg:pl-6 2xl:w-[calc(100%-320px)] 3xl:w-[calc(100%-358px)]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_transaction_transaction_table__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "order-first mb-8 grid w-full grid-cols-1 gap-6 sm:mb-10 sm:grid-cols-2 lg:order-1 lg:mb-0 lg:flex lg:w-72 lg:flex-col 2xl:w-80 3xl:w-[358px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_overview_chart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_top_pools__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 153:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2154:
/***/ ((module) => {

module.exports = require("react-table");

/***/ }),

/***/ 1324:
/***/ ((module) => {

module.exports = require("react-use/lib/factory/createBreakpoint");

/***/ }),

/***/ 538:
/***/ ((module) => {

module.exports = require("react-use/lib/useMeasure");

/***/ }),

/***/ 3174:
/***/ ((module) => {

module.exports = require("react-use/lib/useWindowScroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = require("recharts");

/***/ }),

/***/ 2840:
/***/ ((module) => {

module.exports = require("web3modal");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,292,486,121,74,822,154], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();