"use strict";
exports.id = 462;
exports.ids = [462];
exports.modules = {

/***/ 4462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuctionCountdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4449);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_2__);



const renderer = ({ days , hours , minutes , seconds , completed  })=>{
    if (completed) {
        return null;
    } else {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-3 text-base font-medium -tracking-wider text-gray-900 dark:text-gray-100 xs:text-lg md:gap-5 md:text-xl xl:text-2xl",
            children: [
                !!days && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "shrink-0 3xl:w-20",
                    children: [
                        (0,react_countdown__WEBPACK_IMPORTED_MODULE_2__.zeroPad)(days),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "md:hidden",
                            children: "d"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 md:block",
                            children: "Days"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "shrink-0 3xl:w-20",
                    children: [
                        (0,react_countdown__WEBPACK_IMPORTED_MODULE_2__.zeroPad)(hours),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "md:hidden",
                            children: "h"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 md:block",
                            children: "Hours"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "shrink-0 3xl:w-20",
                    children: [
                        (0,react_countdown__WEBPACK_IMPORTED_MODULE_2__.zeroPad)(minutes),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "md:hidden",
                            children: "m"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 md:block",
                            children: "Minutes"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "shrink-0 3xl:w-20",
                    children: [
                        (0,react_countdown__WEBPACK_IMPORTED_MODULE_2__.zeroPad)(seconds),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "md:hidden",
                            children: "s"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "hidden truncate pt-2.5 text-sm -tracking-wide text-gray-600 dark:text-gray-400 md:block",
                            children: "Seconds"
                        })
                    ]
                })
            ]
        });
    }
};
function AuctionCountdown({ date  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_countdown__WEBPACK_IMPORTED_MODULE_2___default()), {
        date: date,
        renderer: renderer
    });
};


/***/ })

};
;