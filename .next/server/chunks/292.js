"use strict";
exports.id = 292;
exports.ids = [292];
exports.modules = {

/***/ 5054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useDrawer)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const drawerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    isOpen: false,
    view: "DASHBOARD_SIDEBAR"
});
function useDrawer() {
    const [state, setState] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(drawerAtom);
    const openDrawer = (view)=>setState({
            ...state,
            isOpen: true,
            view
        });
    const closeDrawer = ()=>setState({
            ...state,
            isOpen: false
        });
    return {
        ...state,
        openDrawer,
        closeDrawer
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ChevronDown(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "11",
        height: "6",
        viewBox: "0 0 11 6",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.6635 0.336517C10.9719 0.644826 10.9719 1.14469 10.6635 1.453L6.45302 5.66353C6.14471 5.97184 5.64484 5.97184 5.33653 5.66353L1.12601 1.453C0.817699 1.14469 0.817699 0.644826 1.12601 0.336517C1.43432 0.0282085 1.93418 0.0282085 2.24249 0.336517L5.89478 3.9888L9.54706 0.336517C9.85537 0.0282085 10.3552 0.0282085 10.6635 0.336517Z",
            fill: "currentColor"
        })
    });
}


/***/ }),

/***/ 2440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ChevronForward)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ChevronForward = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "6",
        height: "10",
        viewBox: "0 0 6 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.231232 0.231232C0.53954 -0.0770772 1.03941 -0.0770772 1.34772 0.231232L5.55824 4.44176C5.86655 4.75007 5.86655 5.24993 5.55824 5.55824L1.34772 9.76877C1.03941 10.0771 0.53954 10.0771 0.231232 9.76877C-0.0770772 9.46046 -0.0770772 8.96059 0.231232 8.65228L3.88352 5L0.231232 1.34772C-0.0770772 1.03941 -0.0770772 0.53954 0.231232 0.231232Z",
            fill: "currentColor"
        })
    });
};


/***/ }),

/***/ 7577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Close)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Close(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M1.46445 8.53542L8.53552 1.46436",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M1.46446 1.46458L8.53552 8.53564",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round"
            })
        ]
    });
}


/***/ }),

/***/ 4773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ExchangeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ExchangeIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "16",
        height: "14",
        viewBox: "0 0 16 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.38615 1.32163C3.68849 1.01929 3.68849 0.529097 3.38615 0.226756C3.08381 -0.0755854 2.59361 -0.0755854 2.29127 0.226756L0.226756 2.29127C-0.0755854 2.59361 -0.0755854 3.08381 0.226756 3.38615L2.29127 5.45066C2.59361 5.75301 3.08381 5.75301 3.38615 5.45066C3.68849 5.14832 3.68849 4.65813 3.38615 4.35579L2.64326 3.6129H13.1613C13.5889 3.6129 13.9355 3.26628 13.9355 2.83871C13.9355 2.41113 13.5889 2.06452 13.1613 2.06452H2.64326L3.38615 1.32163Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.6139 8.48482C12.3115 8.78716 12.3115 9.27735 12.6139 9.57969L13.3567 10.3226H2.83871C2.41113 10.3226 2.06452 10.6692 2.06452 11.0968C2.06452 11.5243 2.41113 11.871 2.83871 11.871H13.3567L12.6139 12.6139C12.3115 12.9162 12.3115 13.4064 12.6139 13.7087C12.9162 14.0111 13.4064 14.0111 13.7087 13.7087L15.7732 11.6442C16.0756 11.3419 16.0756 10.8517 15.7732 10.5493L13.7087 8.48482C13.4064 8.18248 12.9162 8.18248 12.6139 8.48482Z",
                fill: "currentColor"
            })
        ]
    });
}


/***/ }),

/***/ 2197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ FlashIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FlashIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "15",
        height: "20",
        viewBox: "0 0 15 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.61379 0.309937C9.89044 0.427717 10.07 0.699327 10.07 1V7.99819H14C14.2667 7.99819 14.5133 8.13982 14.6478 8.37018C14.7822 8.60053 14.7842 8.88494 14.653 9.11714L14.1609 9.988C12.2948 13.2906 9.9149 16.2752 7.11058 18.8298L6.31506 19.5544C6.0955 19.7545 5.7786 19.8061 5.50693 19.686C5.23526 19.566 5.06 19.297 5.06 19V12.0611H1C0.585786 12.0611 0.25 11.7254 0.25 11.3111C0.25 11.177 0.285225 11.051 0.346932 10.9421C2.10572 7.69064 4.3575 4.73117 7.02222 2.16895L8.80017 0.459375C9.0169 0.250976 9.33715 0.192157 9.61379 0.309937ZM2.28458 10.5611H5.81C6.22421 10.5611 6.56 10.8969 6.56 11.3111V17.2945C8.9786 15.009 11.0517 12.3827 12.7134 9.49819H9.32C8.90579 9.49819 8.57 9.1624 8.57 8.74819V2.76162L8.06188 3.25019C5.8111 5.4144 3.86782 7.87442 2.28458 10.5611Z",
            fill: "currentColor"
        })
    });
};


/***/ }),

/***/ 2364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ HomeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const HomeIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "17",
        height: "18",
        viewBox: "0 0 17 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.72358 2.08684C8.86926 1.26707 7.52039 1.26707 6.66607 2.08684L2.12596 6.44333C2.01472 6.55007 1.9399 6.68911 1.91209 6.84075C1.3683 9.80622 1.32816 12.8421 1.79336 15.8209L1.90378 16.528H4.8247V10.4326C4.8247 10.0261 5.15422 9.69656 5.5607 9.69656H10.8289C11.2354 9.69656 11.565 10.0261 11.565 10.4326V16.528H14.4859L14.5963 15.8209C15.0615 12.8421 15.0213 9.80622 14.4776 6.84075C14.4498 6.68911 14.3749 6.55007 14.2637 6.44333L9.72358 2.08684ZM5.6469 1.02471C7.07077 -0.341571 9.31888 -0.341571 10.7427 1.02471L15.2829 5.38121C15.6171 5.70191 15.8419 6.11965 15.9254 6.57525C16.499 9.70339 16.5414 12.9058 16.0507 16.0481L15.8733 17.1839C15.7999 17.6537 15.3953 18 14.9199 18H10.8289C10.4225 18 10.0929 17.6705 10.0929 17.264V11.1686H6.29671V17.264C6.29671 17.6705 5.96719 18 5.5607 18H1.46976C0.994319 18 0.589727 17.6537 0.516367 17.1839L0.338978 16.0481C-0.15174 12.9058 -0.109398 9.70339 0.464225 6.57525C0.54777 6.11965 0.772579 5.70191 1.10679 5.38121L5.6469 1.02471Z",
            fill: "currentColor"
        })
    });
};


/***/ }),

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PoolIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PoolIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "12",
        height: "16",
        viewBox: "0 0 12 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5.42352 4.76612C5.55462 4.89722 5.73242 4.97087 5.91781 4.97087C6.10321 4.97087 6.28101 4.89722 6.4121 4.76612L7.34414 3.83408C7.54407 3.63416 7.60387 3.3335 7.49568 3.07229C7.38748 2.81108 7.13259 2.64076 6.84986 2.64076H4.98577C4.70304 2.64076 4.44815 2.81108 4.33995 3.07229C4.23176 3.3335 4.29156 3.63416 4.49148 3.83408L5.42352 4.76612Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5.42352 11.2339C5.55462 11.1028 5.73242 11.0291 5.91781 11.0291C6.10321 11.0291 6.28101 11.1028 6.4121 11.2339L7.34414 12.1659C7.54407 12.3658 7.60387 12.6665 7.49568 12.9277C7.38748 13.1889 7.13259 13.3592 6.84986 13.3592H4.98577C4.70304 13.3592 4.44815 13.1889 4.33995 12.9277C4.23176 12.6665 4.29156 12.3658 4.49148 12.1659L5.42352 11.2339Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6.98876 8L7.16332 7.84959C9.00451 6.26325 10.5353 4.349 11.678 2.20408C12.1264 1.36238 11.5697 0.336125 10.6196 0.253059L9.52586 0.157427C7.12508 -0.052476 4.71056 -0.0524757 2.30979 0.157428L1.216 0.25306C0.265927 0.336127 -0.290782 1.36238 0.15763 2.20408C1.30033 4.349 2.83114 6.26325 4.67232 7.84959L4.84689 8L4.67232 8.15041C2.83114 9.73675 1.30033 11.651 0.15763 13.7959C-0.290782 14.6376 0.265927 15.6639 1.216 15.7469L2.30979 15.8426C4.71056 16.0525 7.12508 16.0525 9.52586 15.8426L10.6196 15.7469C11.5697 15.6639 12.1264 14.6376 11.678 13.7959C10.5353 11.651 9.00451 9.73675 7.16332 8.15041L6.98876 8ZM5.92122 7.0738C5.92164 7.07364 5.92241 7.07335 5.92387 7.07208L6.25077 6.79044C7.93507 5.33926 9.33974 3.59265 10.3958 1.63688L9.40409 1.55018C7.08434 1.34736 4.75131 1.34736 2.43156 1.55018L1.43987 1.63688C2.49591 3.59265 3.90058 5.33926 5.58488 6.79044L5.91177 7.07208C5.91271 7.07289 5.91336 7.0733 5.91382 7.07354C5.91408 7.07367 5.91367 7.07348 5.91382 7.07354C5.91453 7.07379 5.91631 7.07433 5.91782 7.07433C5.91934 7.07433 5.92051 7.07406 5.92122 7.0738ZM5.92387 8.92792C5.92241 8.92665 5.92164 8.92636 5.92122 8.9262C5.92088 8.92608 5.92044 8.92595 5.9199 8.92585C5.91932 8.92574 5.91862 8.92567 5.91782 8.92567C5.91631 8.92567 5.91514 8.92594 5.91443 8.9262C5.91401 8.92636 5.91324 8.92665 5.91177 8.92792L5.58488 9.20956C3.90058 10.6607 2.49591 12.4073 1.43987 14.3631L2.43156 14.4498C4.75131 14.6526 7.08434 14.6526 9.40409 14.4498L10.3958 14.3631C9.33974 12.4074 7.93507 10.6607 6.25077 9.20956L5.92387 8.92792Z",
                fill: "currentColor"
            })
        ]
    });
}


/***/ }),

/***/ 1245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ PowerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PowerIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "17",
        height: "17",
        viewBox: "0 0 17 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M6.55714 4.69417C6.55714 4.51664 6.37314 4.40018 6.2189 4.48807C4.82534 5.28213 3.88571 6.78133 3.88571 8.5C3.88571 11.0484 5.9516 13.1143 8.5 13.1143C11.0484 13.1143 13.1143 11.0484 13.1143 8.5C13.1143 6.78133 12.1747 5.28213 10.7811 4.48807C10.6269 4.40018 10.4429 4.51664 10.4429 4.69416V5.89287C10.4429 5.9676 10.4776 6.03774 10.5348 6.08593C11.2212 6.66507 11.6571 7.53162 11.6571 8.5C11.6571 10.2436 10.2436 11.6571 8.5 11.6571C6.75636 11.6571 5.34286 10.2436 5.34286 8.5C5.34286 7.53162 5.77885 6.66507 6.46524 6.08593C6.52235 6.03774 6.55714 5.9676 6.55714 5.89287V4.69417Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M9.22857 3.64286C9.22857 3.24048 8.90238 2.91429 8.5 2.91429C8.09762 2.91429 7.77143 3.24048 7.77143 3.64286V8.5C7.77143 8.90238 8.09762 9.22857 8.5 9.22857C8.90238 9.22857 9.22857 8.90238 9.22857 8.5V3.64286Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5ZM8.5 1.45714C4.61034 1.45714 1.45714 4.61034 1.45714 8.5C1.45714 12.3897 4.61034 15.5429 8.5 15.5429C12.3897 15.5429 15.5429 12.3897 15.5429 8.5C15.5429 4.61034 12.3897 1.45714 8.5 1.45714Z",
                fill: "currentColor"
            })
        ]
    });
}


/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SearchIcon = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.3851 12.4457C8.73488 14.5684 4.85544 14.4013 2.39866 11.9445C-0.237379 9.3085 -0.237379 5.03464 2.39866 2.3986C5.0347 -0.23744 9.30856 -0.23744 11.9446 2.3986C14.4014 4.85538 14.5685 8.73481 12.4458 11.3851L17.6014 16.5407C17.8943 16.8336 17.8943 17.3085 17.6014 17.6014C17.3085 17.8943 16.8337 17.8943 16.5408 17.6014L11.3851 12.4457ZM3.45932 10.8839C1.40907 8.83363 1.40907 5.50951 3.45932 3.45926C5.50957 1.40901 8.83369 1.40901 10.8839 3.45926C12.9327 5.50801 12.9342 8.82875 10.8885 10.8794C10.8869 10.8809 10.8854 10.8823 10.8839 10.8839C10.8824 10.8854 10.8809 10.8869 10.8794 10.8884C8.82882 12.9341 5.50807 12.9326 3.45932 10.8839Z",
            fill: "currentColor"
        })
    });
};


/***/ }),

/***/ 5335:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const modalAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
    isOpen: false,
    view: "SEARCH_VIEW"
});
function useModal() {
    const [state, setState] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(modalAtom);
    const openModal = (view)=>setState({
            ...state,
            isOpen: true,
            view
        });
    const closeModal = ()=>setState({
            ...state,
            isOpen: false
        });
    return {
        ...state,
        openModal,
        closeModal
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7279:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WalletConnect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9535);
/* harmony import */ var _lib_hooks_use_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9306);
/* harmony import */ var _components_ui_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3008);
/* harmony import */ var _components_ui_transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6604);
/* harmony import */ var _components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2565);
/* harmony import */ var _components_icons_chevron_forward__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2440);
/* harmony import */ var _components_icons_power__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1245);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5335);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_4__, _components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__]);
([_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_4__, _components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function WalletConnect() {
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_8__/* .useModal */ .d)();
    const { address , disconnectWallet , balance  } = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_lib_hooks_use_connect__WEBPACK_IMPORTED_MODULE_2__/* .WalletContext */ .z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: address ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-3 sm:gap-6 lg:gap-8",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__/* .Menu */ .v, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Button */ .v.Button, {
                                className: "block h-10 w-10 overflow-hidden rounded-full border-3 border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large dark:border-gray-700 sm:h-12 sm:w-12"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_4__/* .Transition */ .u, {
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 translate-y-4",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "ease-in duration-300",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-4",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Items */ .v.Items, {
                                    className: "absolute -right-20 mt-3 w-72 origin-top-right rounded-lg bg-white shadow-large dark:bg-gray-900 sm:-right-14",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v.Item, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "border-b border-dashed border-gray-200 p-3 dark:border-gray-700",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    href: "/liquidity",
                                                    className: "flex items-center gap-3 rounded-lg py-2.5 px-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "h-8 w-8 rounded-full border-2 border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:border-gray-700"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "grow uppercase",
                                                            children: "View Your Pool"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_forward__WEBPACK_IMPORTED_MODULE_6__/* .ChevronForward */ .Q, {})
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v.Item, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v.Item, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "border-b border-dashed border-gray-200 px-6 py-5 dark:border-gray-700",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "flex items-center justify-between gap-3",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-sm font-medium -tracking-tighter text-gray-600 dark:text-gray-400",
                                                                    children: "Balance"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "rounded-lg bg-gray-100 px-2 py-1 text-sm tracking-tighter dark:bg-gray-800",
                                                                    children: [
                                                                        address.slice(0, 6),
                                                                        "...",
                                                                        address.slice(address.length - 6)
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "mt-3 font-medium uppercase tracking-wider text-gray-900 dark:text-white",
                                                            children: [
                                                                balance,
                                                                " BNB"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v.Item, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "p-3",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex cursor-pointer items-center gap-3 rounded-lg py-2.5 px-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800",
                                                    onClick: disconnectWallet,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_power__WEBPACK_IMPORTED_MODULE_7__/* .PowerIcon */ .P, {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "grow uppercase",
                                                            children: "Disconnect"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    href: "/swap",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        className: "shadow-main hover:shadow-large",
                        children: "SWAP"
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            onClick: ()=>openModal("WALLET_CONNECT_VIEW"),
            className: "shadow-main hover:shadow-large",
            children: "CONNECT"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony import */ var _components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5335);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9535);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__]);
_components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SearchButton({ ...props }) {
    const { openModal  } = (0,_components_modal_views_context__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        ...props,
        onClick: ()=>openModal("SEARCH_VIEW"),
        shape: "circle",
        "aria-label": "Search",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search__WEBPACK_IMPORTED_MODULE_1__/* .SearchIcon */ .W, {
            className: "h-auto w-3.5 sm:w-auto"
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ button_button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/button/button-drip.tsx



function ButtonDrip({ x =0 , y =0 , color , fullWidth , onCompleted  }) {
    const dripRef = (0,external_react_.useRef)(null);
    let top = Number.isNaN(+y) ? 0 : y - 10;
    let left = Number.isNaN(+x) ? 0 : x - 10;
    (0,external_react_.useEffect)(()=>{
        if (!dripRef.current) return;
        dripRef.current.addEventListener("animationend", onCompleted);
        return ()=>{
            if (!dripRef.current) return;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            dripRef.current.removeEventListener("animationend", onCompleted);
        };
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        ref: dripRef,
        className: "drip absolute inset-0 block",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            className: external_classnames_default()("absolute h-4 w-4", fullWidth ? "animate-drip-expand-large" : "animate-drip-expand"),
            style: {
                top,
                left
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    fill: color,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        width: "100%",
                        height: "100%",
                        rx: "10"
                    })
                })
            })
        })
    });
};
ButtonDrip.displayName = "ButtonDrip";

;// CONCATENATED MODULE: ./src/components/ui/loader.tsx


const variants = {
    blink: "animate-blink",
    scaleUp: "animate-scale-up",
    moveUp: "animate-move-up"
};
const sizes = {
    small: "w-1.5 h-1.5",
    medium: "w-2.5 h-2.5",
    large: "w-3 h-3"
};
function handleLoaderPosition(size) {
    return size === "small" ? "relative top-1.5" : "relative top-3";
}
function handleVariantClasses(variant, size) {
    return variant === "moveUp" && size === "small" ? "animate-move-up-small" : variants[variant];
}
function Loader({ tag ="div" , size ="medium" , variant ="moveUp" , showOnlyThreeDots , className  }) {
    let Component = tag;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        className: external_classnames_default()("flex items-center gap-2", variant === "moveUp" && handleLoaderPosition(size), className),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()("bg-current rounded-full", handleVariantClasses(variant, size), sizes[size])
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()("animation-delay-200 bg-current rounded-full", handleVariantClasses(variant, size), sizes[size])
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()("animation-delay-500 bg-current rounded-full", handleVariantClasses(variant, size), sizes[size])
            }),
            variant === "moveUp" && !showOnlyThreeDots ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()("animation-delay-700 bg-current rounded-full", handleVariantClasses(variant, size), sizes[size])
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/ui/button/button-loader.tsx


function ButtonLoader({ size , variant  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "absolute inset-0 h-full w-full flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Loader, {
            tag: "span",
            size: size,
            variant: variant,
            showOnlyThreeDots: true
        })
    });
};
ButtonLoader.displayName = "ButtonLoader";

;// CONCATENATED MODULE: ./src/components/ui/button/button.tsx





const shapes = {
    rounded: [
        "rounded-md sm:rounded-lg"
    ],
    pill: [
        "rounded-full"
    ],
    circle: [
        "rounded-full"
    ]
};
const button_variants = {
    ghost: [
        "bg-transparent"
    ],
    solid: [
        "text-white"
    ],
    transparent: [
        "bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
    ]
};
const colors = {
    primary: [
        "text-brand",
        "bg-brand",
        "border-brand"
    ],
    white: [
        "text-gray-900",
        "bg-white",
        "border-white"
    ],
    gray: [
        "text-gray-900",
        "bg-gray-100",
        "border-gray-100"
    ],
    success: [
        "text-green-500",
        "bg-green-500",
        "border-green-500"
    ],
    info: [
        "text-blue-500",
        "bg-blue-500",
        "border-blue-500"
    ],
    warning: [
        "text-yellow-500",
        "bg-yellow-500",
        "border-yellow-500"
    ],
    danger: [
        "text-red-500",
        "bg-red-500",
        "border-red-500"
    ]
};
const button_sizes = {
    large: [
        "px-7 sm:px-9 h-11 sm:h-13",
        "w-11 h-11 sm:w-13 sm:h-13"
    ],
    medium: [
        "px-5 sm:px-8 h-10 sm:h-12",
        "h-10 w-10 sm:w-12 sm:h-12"
    ],
    small: [
        "px-7 h-10",
        "w-10 h-10"
    ],
    mini: [
        "px-4 h-8",
        "w-8 h-8"
    ]
};
const Button = /*#__PURE__*/ (0,external_react_.forwardRef)(({ children , className , isLoading , disabled , fullWidth , shape ="pill" , variant ="solid" , color ="primary" , size ="medium" , loaderSize ="small" , loaderVariant ="scaleUp" , onClick , ...buttonProps }, ref)=>{
    let { 0: dripShow , 1: setDripShow  } = (0,external_react_.useState)(false);
    let { 0: dripX , 1: setDripX  } = (0,external_react_.useState)(0);
    let { 0: dripY , 1: setDripY  } = (0,external_react_.useState)(0);
    const colorClassNames = colors[color];
    const sizeClassNames = button_sizes[size];
    const buttonRef = (0,external_react_.useRef)(null);
    (0,external_react_.useImperativeHandle)(ref, ()=>buttonRef.current);
    function dripCompletedHandle() {
        setDripShow(false);
        setDripX(0);
        setDripY(0);
    }
    const clickHandler = (event)=>{
        if (!isLoading && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDripShow(true);
            setDripX(event.clientX - rect.left);
            setDripY(event.clientY - rect.top);
        }
        onClick && onClick(event);
    };
    let buttonColorClassNames = "";
    let buttonDripColor = "";
    switch(variant){
        case "ghost":
            buttonColorClassNames = `border-2 border-solid ${colorClassNames[0]} ${colorClassNames[2]}`;
            buttonDripColor = "rgba(0, 0, 0, 0.1)";
            break;
        case "transparent":
            buttonColorClassNames = `${colorClassNames[0]} ${disabled || isLoading ? "" : "hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-800"} `;
            buttonDripColor = "rgba(0, 0, 0, 0.1)";
            break;
        default:
            buttonColorClassNames = `${colorClassNames[1]} ${colorClassNames[2]}`;
            buttonDripColor = "rgba(255, 255, 255, 0.3)";
            break;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        ref: buttonRef,
        onClick: clickHandler,
        className: external_classnames_default()("relative inline-flex shrink-0 items-center justify-center overflow-hidden text-center text-xs font-medium tracking-wider outline-none transition-all sm:text-sm", !disabled ? buttonColorClassNames : "cursor-not-allowed bg-gray-100 text-gray-400", disabled || isLoading || variant === "transparent" ? "" : "hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none", isLoading && "pointer-events-auto cursor-default focus:outline-none", fullWidth && "w-full", color === "white" || color === "gray" ? "text-gray-900 dark:text-white" : button_variants[variant], shapes[shape], shape === "circle" ? `${sizeClassNames[1]}` : `${sizeClassNames[0]}`, className),
        disabled: disabled,
        ...buttonProps,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: external_classnames_default()(isLoading && "invisible opacity-0"),
                children: children
            }),
            isLoading && /*#__PURE__*/ jsx_runtime_.jsx(ButtonLoader, {
                size: loaderSize,
                variant: loaderVariant
            }),
            dripShow && /*#__PURE__*/ jsx_runtime_.jsx(ButtonDrip, {
                x: dripX,
                y: dripY,
                color: [
                    "white",
                    "gray"
                ].indexOf(color) !== -1 ? "rgba(0, 0, 0, 0.1)" : buttonDripColor,
                fullWidth: fullWidth,
                onCompleted: dripCompletedHandle
            })
        ]
    });
});
Button.displayName = "Button";
/* harmony default export */ const button_button = (Button);

;// CONCATENATED MODULE: ./src/components/ui/button/index.ts



/***/ }),

/***/ 9752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var _lib_hooks_use_measure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7409);
/* harmony import */ var _components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2565);
/* harmony import */ var _components_icons_chevron_down__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4423);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function MenuItem({ name , icon , href , dropdownItems  }) {
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let [ref, { height  }] = (0,_lib_hooks_use_measure__WEBPACK_IMPORTED_MODULE_5__/* .useMeasure */ .x)();
    let { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let isChildrenActive = dropdownItems && dropdownItems.some((item)=>item.href === pathname);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isChildrenActive) {
            setIsOpen(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-2 min-h-[48px] list-none last:mb-0",
        children: dropdownItems?.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("relative flex h-12 cursor-pointer items-center justify-between whitespace-nowrap  rounded-lg px-4 text-sm transition-all", isChildrenActive ? "text-white" : "text-gray-500 hover:text-brand dark:hover:text-white"),
                    onClick: ()=>setIsOpen(!isOpen),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "z-[1] flex items-center ltr:mr-3 rtl:ml-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "ltr:mr-3 rtl:ml-3",
                                    children: icon
                                }),
                                name
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: `z-[1] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_down__WEBPACK_IMPORTED_MODULE_7__/* .ChevronDown */ ._, {})
                        }),
                        isChildrenActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {
                            className: "absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large",
                            layoutId: "menu-item-active-indicator"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        height: isOpen ? height : 0
                    },
                    className: "ease-[cubic-bezier(0.33, 1, 0.68, 1)] overflow-hidden transition-all duration-[350ms]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        ref: ref,
                        children: dropdownItems.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "first:pt-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    href: item.href,
                                    className: "flex items-center rounded-lg p-3 text-sm text-gray-500 transition-all before:h-1 before:w-1 before:rounded-full before:bg-gray-500 hover:text-brand ltr:pl-6 before:ltr:mr-5 rtl:pr-6 before:rtl:ml-5 dark:hover:text-white",
                                    activeClassName: "!text-brand dark:!text-white dark:before:!bg-white before:!bg-brand before:!w-2 before:!h-2 before:-ml-0.5 before:ltr:!mr-[18px] before:rtl:!ml-[18px] !font-medium",
                                    children: item.name
                                })
                            }, index))
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            href: href,
            className: "relative flex h-12 items-center whitespace-nowrap rounded-lg px-4 text-sm text-gray-500 transition-all hover:text-brand dark:hover:text-white",
            activeClassName: " !text-white",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "relative z-[1] ltr:mr-3 rtl:ml-3",
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "relative z-[1]",
                    children: [
                        " ",
                        name
                    ]
                }),
                href === pathname && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.span, {
                    className: "absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-brand shadow-large",
                    layoutId: "menu-item-active-indicator"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hamburger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9535);


function Hamburger({ isOpen , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        "aria-label": "Hamburger",
        shape: "circle",
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: "sm:w-auo h-auto w-6",
            width: "30",
            height: "30",
            viewBox: "0 0 100 100",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    className: "ease-[cubic-bezier(0.4, 0, 0.2, 1)] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms]",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "6",
                    strokeLinecap: "round",
                    strokeDasharray: isOpen ? "90 207" : "60 207",
                    strokeDashoffset: isOpen ? "-134" : "0",
                    d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    className: "ease-[cubic-bezier(0.4, 0, 0.2, 1)] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms]",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "6",
                    strokeLinecap: "round",
                    strokeDasharray: isOpen ? "1 60" : "60 60",
                    strokeDashoffset: isOpen ? "-30" : "0",
                    d: "M 20,50 H 80"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    className: "ease-[cubic-bezier(0.4, 0, 0.2, 1)] transition-[stroke-dasharray,stroke-dashoffset] duration-[600ms]",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "6",
                    strokeLinecap: "round",
                    strokeDasharray: isOpen ? "90 207" : "60 207",
                    strokeDashoffset: isOpen ? "-134" : "0",
                    d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                })
            ]
        })
    });
};


/***/ }),

/***/ 3879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* reexport default from dynamic */ next_image__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 2565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3813);




const ActiveLink = ({ href , className , activeClassName ="active" , ...props })=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        href: href,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
            [activeClassName]: pathname === href
        }),
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActiveLink);


/***/ }),

/***/ 3813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const AnchorLink = ({ href , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...props
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnchorLink);


/***/ }),

/***/ 9201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ui_logo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(3879);
// EXTERNAL MODULE: ./src/components/ui/links/anchor-link.tsx
var anchor_link = __webpack_require__(3813);
// EXTERNAL MODULE: ./src/lib/hooks/use-is-mounted.ts
var use_is_mounted = __webpack_require__(3741);
// EXTERNAL MODULE: ./src/lib/hooks/use-is-dark-mode.ts
var use_is_dark_mode = __webpack_require__(269);
;// CONCATENATED MODULE: ./src/assets/images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.a183ce2b.svg","height":500,"width":500});
;// CONCATENATED MODULE: ./src/assets/images/logo-white.svg
/* harmony default export */ const logo_white = ({"src":"/_next/static/media/logo-white.a183ce2b.svg","height":500,"width":500});
;// CONCATENATED MODULE: ./src/components/ui/logo.tsx







const Logo = (props)=>{
    const isMounted = (0,use_is_mounted/* useIsMounted */.t)();
    const { isDarkMode  } = (0,use_is_dark_mode/* useIsDarkMode */.G)();
    return /*#__PURE__*/ jsx_runtime_.jsx(anchor_link/* default */.Z, {
        href: "/",
        className: "flex w-28 outline-none sm:w-32 4xl:w-36",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
            className: "relative flex overflow-hidden",
            children: [
                isMounted && isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* default */.Z, {
                    src: logo_white,
                    alt: "DREAM FINANCE",
                    priority: true
                }),
                isMounted && !isDarkMode && /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* default */.Z, {
                    src: logo,
                    alt: "DREAM FINANCE",
                    priority: true
                })
            ]
        })
    });
};
/* harmony default export */ const ui_logo = (Logo);


/***/ }),

/***/ 3008:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* reexport safe */ _headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Menu)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_0__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Scrollbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(153);
/* harmony import */ var overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__);




function Scrollbar({ options , style , className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(overlayscrollbars_react__WEBPACK_IMPORTED_MODULE_2__.OverlayScrollbarsComponent, {
        options: {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("os-theme-thin", className),
            scrollbars: {
                autoHide: "scroll"
            },
            ...options
        },
        style: style,
        ...props
    });
};


/***/ }),

/***/ 6604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* reexport safe */ _headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Transition)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_0__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const routes = {
    home: "/",
    swap: "/swap",
    liquidity: "/liquidity",
    liquidityPosition: "/liquidity-position",
    farms: "/farms",
    farmsTwo: "/farms-2",
    createNft: "/create-nft",
    nftDetails: "/nft-details",
    search: "/search",
    notification: "/notification",
    vote: "/vote",
    proposals: "/proposals",
    createProposal: "/proposals/create",
    charts: "/charts",
    profile: "/profile",
    portfolio: "/profile?view=portfolio",
    history: "/profile?view=history"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);


/***/ }),

/***/ 1148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9201);
/* harmony import */ var _components_ui_collapsible_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7024);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9535);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(551);
/* harmony import */ var _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5054);
/* harmony import */ var _components_icons_home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2364);
/* harmony import */ var _components_icons_pool__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4178);
/* harmony import */ var _components_icons_exchange__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4773);
/* harmony import */ var _components_icons_close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7577);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_collapsible_menu__WEBPACK_IMPORTED_MODULE_3__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_7__]);
([_components_ui_collapsible_menu__WEBPACK_IMPORTED_MODULE_3__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const menuItems = [
    {
        name: "Home",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_home__WEBPACK_IMPORTED_MODULE_8__/* .HomeIcon */ .t, {}),
        href: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].home */ .Z.home
    },
    {
        name: "Swap",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_exchange__WEBPACK_IMPORTED_MODULE_10__/* .ExchangeIcon */ .D, {}),
        href: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].swap */ .Z.swap
    },
    {
        name: "Liquidity",
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_pool__WEBPACK_IMPORTED_MODULE_9__/* .PoolIcon */ .k, {}),
        href: _config_routes__WEBPACK_IMPORTED_MODULE_6__/* ["default"].liquidity */ .Z.liquidity
    }, 
];
function Sidebar({ className  }) {
    const { closeDrawer  } = (0,_components_drawer_views_context__WEBPACK_IMPORTED_MODULE_7__/* .useDrawer */ .y)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("top-0 z-40 h-full w-full max-w-full border-dashed border-gray-200 bg-body ltr:left-0 ltr:border-r rtl:right-0 rtl:border-l dark:border-gray-700 dark:bg-dark xs:w-80 xl:fixed  xl:w-72 2xl:w-80", className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative flex h-24 items-center justify-between overflow-hidden px-6 py-4 2xl:px-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            title: "Close",
                            color: "white",
                            shape: "circle",
                            variant: "transparent",
                            size: "small",
                            onClick: closeDrawer,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close__WEBPACK_IMPORTED_MODULE_11__/* .Close */ .x, {
                                className: "h-auto w-2.5"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                style: {
                    height: "calc(100% - 96px)"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-6 pb-5 2xl:px-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-12",
                        children: menuItems.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_collapsible_menu__WEBPACK_IMPORTED_MODULE_3__/* .MenuItem */ .s, {
                                name: item.name,
                                href: item.href,
                                icon: item.icon,
                                dropdownItems: item.dropdownItems
                            }, index))
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9292:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* unused harmony export Header */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_use_window_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7235);
/* harmony import */ var _components_icons_flash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2197);
/* harmony import */ var _components_ui_hamburger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6238);
/* harmony import */ var _components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2565);
/* harmony import */ var _components_search_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6688);
/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3741);
/* harmony import */ var _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5054);
/* harmony import */ var _layouts_dashboard_sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1148);
/* harmony import */ var _components_nft_wallet_connect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7279);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_search_button__WEBPACK_IMPORTED_MODULE_7__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_9__, _layouts_dashboard_sidebar__WEBPACK_IMPORTED_MODULE_10__, _components_nft_wallet_connect__WEBPACK_IMPORTED_MODULE_11__]);
([_components_search_button__WEBPACK_IMPORTED_MODULE_7__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_9__, _layouts_dashboard_sidebar__WEBPACK_IMPORTED_MODULE_10__, _components_nft_wallet_connect__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function NotificationButton() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        href: "/notifications",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-100 bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:border-gray-700 dark:bg-light-dark dark:text-white sm:h-12 sm:w-12",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_flash__WEBPACK_IMPORTED_MODULE_4__/* .FlashIcon */ .q, {
                    className: "h-auto w-3 sm:w-auto"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-brand shadow-light sm:h-3 sm:w-3"
                })
            ]
        })
    });
}
function HeaderRightArea() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative order-last flex shrink-0 items-center gap-3 sm:gap-6 lg:gap-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationButton, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_nft_wallet_connect__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
        ]
    });
}
function Header() {
    const { openDrawer  } = (0,_components_drawer_views_context__WEBPACK_IMPORTED_MODULE_9__/* .useDrawer */ .y)();
    const isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_8__/* .useIsMounted */ .t)();
    let windowScroll = (0,_lib_hooks_use_window_scroll__WEBPACK_IMPORTED_MODULE_3__/* .useWindowScroll */ .b)();
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: `fixed top-0 z-30 w-full transition-all duration-300 ltr:right-0 rtl:left-0 ltr:xl:pl-72 rtl:xl:pr-72 ltr:2xl:pl-80 rtl:2xl:pr-80 ${isMounted && windowScroll.y > 10 ? "h-16 bg-gradient-to-b from-white to-white/80 shadow-card backdrop-blur dark:from-dark dark:to-dark/80 sm:h-20" : "h-16 sm:h-24"}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 3xl:px-12",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "block ltr:mr-1 rtl:ml-1 ltr:sm:mr-3 rtl:sm:ml-3 xl:hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_hamburger__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                isOpen: isOpen,
                                onClick: ()=>openDrawer("DASHBOARD_SIDEBAR"),
                                variant: "transparent",
                                className: "dark:text-white"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                            variant: "transparent",
                            className: "dark:text-white"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HeaderRightArea, {})
            ]
        })
    });
}
function Layout({ children , contentClassName  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "ltr:xl:pl-72 rtl:xl:pr-72 ltr:2xl:pl-80 rtl:2xl:pr-80",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_dashboard_sidebar__WEBPACK_IMPORTED_MODULE_10__["default"], {
                className: "hidden xl:block"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("min-h-[100vh] px-4 pt-24 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:px-10 xl:pb-24 3xl:px-12", contentClassName),
                children: children
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ WalletProvider),
/* harmony export */   "z": () => (/* binding */ WalletContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2840);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_3__);




const web3modalStorageKey = "WEB3_CONNECT_CACHED_PROVIDER";
const WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const WalletProvider = ({ children  })=>{
    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { 0: balance , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const web3Modal =  false && 0;
    /* This effect will fetch wallet address if user has already connected his/her wallet */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        async function checkConnection() {
            try {
                if (window && window.ethereum) {
                    // Check if web3modal wallet connection is available on storage
                    if (localStorage.getItem(web3modalStorageKey)) {
                        await connectToWallet();
                    }
                } else {
                    console.log("window or window.ethereum is not available");
                }
            } catch (error) {
                console.log(error, "Catch error Account is not connected");
            }
        }
        checkConnection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const setWalletAddress = async (provider)=>{
        try {
            const signer = provider.getSigner();
            if (signer) {
                const web3Address = await signer.getAddress();
                setAddress(web3Address);
                getBalance(provider, web3Address);
            }
        } catch (error) {
            console.log("Account not connected; logged from setWalletAddress function");
        }
    };
    const getBalance = async (provider, walletAddress)=>{
        const walletBalance = await provider.getBalance(walletAddress);
        const balanceInEth = ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.utils.formatEther(walletBalance);
        setBalance(balanceInEth);
    };
    const disconnectWallet = ()=>{
        setAddress(undefined);
        web3Modal && web3Modal.clearCachedProvider();
    };
    const checkIfExtensionIsAvailable = ()=>{
        if (window && window.web3 === undefined || window && window.ethereum === undefined) {
            setError(true);
            web3Modal && web3Modal.toggleModal();
        }
    };
    const connectToWallet = async ()=>{
        try {
            setLoading(true);
            checkIfExtensionIsAvailable();
            const connection = web3Modal && await web3Modal.connect();
            const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(connection);
            await subscribeProvider(connection);
            setWalletAddress(provider);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error, "got this error on connectToWallet catch block while connecting the wallet");
        }
    };
    const subscribeProvider = async (connection)=>{
        connection.on("close", ()=>{
            disconnectWallet();
        });
        connection.on("accountsChanged", async (accounts)=>{
            if (accounts?.length) {
                setAddress(accounts[0]);
                const provider = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.providers.Web3Provider(connection);
                getBalance(provider, accounts[0]);
            } else {
                disconnectWallet();
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WalletContext.Provider, {
        value: {
            address,
            balance,
            loading,
            error,
            connectToWallet,
            disconnectWallet
        },
        children: children
    });
};


/***/ }),

/***/ 269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useIsDarkMode)
/* harmony export */ });
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_0__);

function useIsDarkMode() {
    const { resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_0__.useTheme)();
    return {
        isDarkMode: resolvedTheme === "dark"
    };
}


/***/ }),

/***/ 3741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useIsMounted)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useIsMounted() {
    const { 0: mounted , 1: setMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setMounted(true), []);
    return mounted;
}


/***/ }),

/***/ 7409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* reexport default from dynamic */ react_use_lib_useMeasure__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useMeasure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(538);
/* harmony import */ var react_use_lib_useMeasure__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useMeasure__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* reexport default from dynamic */ react_use_lib_useWindowScroll__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var react_use_lib_useWindowScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3174);
/* harmony import */ var react_use_lib_useWindowScroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_use_lib_useWindowScroll__WEBPACK_IMPORTED_MODULE_0__);



/***/ })

};
;