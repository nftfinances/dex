"use strict";
exports.id = 291;
exports.ids = [291];
exports.modules = {

/***/ 2291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShareView)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-use"
var external_react_use_ = __webpack_require__(3837);
// EXTERNAL MODULE: external "react-share"
var external_react_share_ = __webpack_require__(6158);
// EXTERNAL MODULE: ./src/components/icons/copy.tsx
var copy = __webpack_require__(4804);
// EXTERNAL MODULE: ./src/components/icons/brands/instagram.tsx
var instagram = __webpack_require__(1335);
// EXTERNAL MODULE: ./src/components/icons/brands/twitter.tsx
var twitter = __webpack_require__(505);
;// CONCATENATED MODULE: ./src/components/icons/brands/facebook.tsx

function Facebook(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M14.2 2.875C12.9734 2.875 11.797 3.36228 10.9296 4.22963C10.0623 5.09699 9.575 6.27337 9.575 7.5V10.075H7.1C6.97574 10.075 6.875 10.1757 6.875 10.3V13.7C6.875 13.8243 6.97574 13.925 7.1 13.925H9.575V20.9C9.575 21.0243 9.67574 21.125 9.8 21.125H13.2C13.3243 21.125 13.425 21.0243 13.425 20.9V13.925H15.9219C16.0252 13.925 16.1152 13.8547 16.1402 13.7546L16.9902 10.3546C17.0257 10.2126 16.9183 10.075 16.7719 10.075H13.425V7.5C13.425 7.29446 13.5067 7.09733 13.652 6.95199C13.7973 6.80665 13.9945 6.725 14.2 6.725H16.8C16.9243 6.725 17.025 6.62426 17.025 6.5V3.1C17.025 2.97574 16.9243 2.875 16.8 2.875H14.2Z",
            fill: "currentColor"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/icons/brands/telegram.tsx

function Telegram(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18.4831 19.7901L18.4838 19.7883L18.5012 19.7448L21.5 4.62577V4.57666C21.5 4.19996 21.3608 3.8711 21.0579 3.67384C20.7928 3.50118 20.4881 3.48889 20.2744 3.50511C20.0483 3.52226 19.8352 3.57868 19.6877 3.62564C19.6118 3.6498 19.5483 3.67307 19.5028 3.69068C19.48 3.69952 19.4615 3.70702 19.4481 3.7126L19.4349 3.71816L2.71508 10.2771L2.71048 10.2787C2.70145 10.282 2.68951 10.2865 2.67508 10.2921C2.64633 10.3033 2.60719 10.3193 2.56121 10.3402C2.47093 10.3811 2.34619 10.4442 2.21969 10.5308C2.00484 10.678 1.59572 11.0263 1.6648 11.5785C1.72202 12.0359 2.03733 12.3264 2.2499 12.4768C2.36384 12.5575 2.47286 12.6156 2.55269 12.6536C2.59313 12.6729 2.62749 12.6876 2.65308 12.698C2.66591 12.7032 2.67663 12.7074 2.68493 12.7106L2.69556 12.7145L2.70235 12.7171L5.62759 13.7019C5.61772 13.8854 5.63592 14.0725 5.68459 14.2572L7.14988 19.8156C7.32361 20.4746 7.91984 20.9337 8.60141 20.9332C9.21234 20.9328 9.75417 20.5632 9.98435 20.0118L12.272 17.5657L16.201 20.5779L16.2569 20.6023C16.6138 20.7581 16.9474 20.8074 17.2523 20.7658C17.5568 20.7242 17.7987 20.5965 17.9805 20.4511C18.1594 20.308 18.2819 20.1465 18.359 20.0249C18.3982 19.9631 18.4274 19.9088 18.4476 19.8679C18.4578 19.8474 18.4658 19.8301 18.4718 19.8165L18.4794 19.7991L18.4821 19.7927L18.4831 19.7901ZM7.13499 13.8748C7.10169 13.7485 7.15397 13.6151 7.26426 13.5451L17.1863 7.24417C17.1863 7.24417 17.7699 6.88987 17.749 7.24417C17.749 7.24417 17.8532 7.30673 17.5404 7.59846C17.2438 7.87554 10.4688 14.4166 9.78322 15.0785C9.74365 15.1167 9.72003 15.1605 9.70608 15.2137L8.60028 19.4332L7.13499 13.8748Z",
            fill: "currentColor"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/nft/share-view.tsx









function ShareView({ nftSlug ="#"  }) {
    const nftUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}`;
    let { 0: copyButtonStatus , 1: setCopyButtonStatus  } = (0,external_react_.useState)("Copy");
    let [_, copyToClipboard] = (0,external_react_use_.useCopyToClipboard)();
    const handleCopyToClipboard = ()=>{
        copyToClipboard(nftUrl);
        setCopyButtonStatus("Copied!");
        setTimeout(()=>{
            setCopyButtonStatus(copyButtonStatus);
        }, 1000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-2xl border border-gray-200 bg-white px-5 pt-5 pb-7 dark:border-gray-700 dark:bg-light-dark sm:px-7 sm:pb-8 sm:pt-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-lg font-medium uppercase -tracking-wide text-gray-900 ltr:text-left rtl:text-right dark:text-white lg:text-xl",
                children: "Share this NFT"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap gap-2 pt-4 md:gap-2.5 xl:pt-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "product-share flex flex-shrink-0 flex-wrap items-center gap-2 md:gap-2.5",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_share_.TwitterShareButton, {
                                url: nftUrl,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-md flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 xl:h-14 xl:w-14",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(twitter/* Twitter */.t, {
                                            className: "h-5 w-5 lg:h-6 lg:w-6"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mt-2 block text-xs -tracking-widest text-gray-600 dark:text-gray-400",
                                        children: "Twitter"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_share_.FacebookShareButton, {
                                url: nftUrl,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-md flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 xl:h-14 xl:w-14",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Facebook, {
                                            className: "h-5 w-5 lg:h-6 lg:w-6"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mt-2 block text-xs -tracking-widest text-gray-600 dark:text-gray-400",
                                        children: "Facebook"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_share_.TelegramShareButton, {
                                url: nftUrl,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-md flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 xl:h-14 xl:w-14",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Telegram, {
                                            className: "h-5 w-5 lg:h-6 lg:w-6"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mt-2 block text-xs -tracking-widest text-gray-600 dark:text-gray-400",
                                        children: "Telegram"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_share_.LinkedinShareButton, {
                                url: nftUrl,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-md flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 xl:h-14 xl:w-14",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(instagram/* Instagram */.m, {
                                            className: "h-5 w-5 lg:h-6 lg:w-6"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mt-2 block text-xs -tracking-widest text-gray-600 dark:text-gray-400",
                                        children: "Linkedin"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: handleCopyToClipboard,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-md flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:text-gray-400 xl:h-14 xl:w-14",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(copy/* Copy */.C, {
                                    className: "h-4 w-4 lg:h-5 lg:w-5"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-2 block text-xs -tracking-widest text-gray-600 dark:text-gray-400",
                                children: copyButtonStatus
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;