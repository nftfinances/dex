"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 3078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AuthorInformation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/button/index.ts + 4 modules
var ui_button = __webpack_require__(9535);
// EXTERNAL MODULE: ./src/components/ui/links/anchor-link.tsx
var anchor_link = __webpack_require__(3813);
;// CONCATENATED MODULE: ./src/components/icons/info-icon.tsx

function InfoIcon(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6 5.14286C6.28403 5.14286 6.51429 5.37311 6.51429 5.65714V9.08571C6.51429 9.36975 6.28403 9.6 6 9.6C5.71597 9.6 5.48571 9.36975 5.48571 9.08571V5.65714C5.48571 5.37311 5.71597 5.14286 6 5.14286Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6 3.94286C6.37871 3.94286 6.68571 3.63585 6.68571 3.25714C6.68571 2.87843 6.37871 2.57143 6 2.57143C5.62129 2.57143 5.31429 2.87843 5.31429 3.25714C5.31429 3.63585 5.62129 3.94286 6 3.94286Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM6 1.02857C3.25436 1.02857 1.02857 3.25436 1.02857 6C1.02857 8.74564 3.25436 10.9714 6 10.9714C8.74564 10.9714 10.9714 8.74564 10.9714 6C10.9714 3.25436 8.74564 1.02857 6 1.02857Z",
                fill: "currentColor"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/author/author-information.tsx




function AuthorInformation({ className ="md:hidden" , data  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `${className}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border-y border-dashed border-gray-200 py-5 dark:border-gray-700 xl:py-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-2 text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white",
                        children: "Bio"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-sm leading-6 tracking-tighter text-gray-600 dark:text-gray-400",
                        children: data?.bio
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border-y border-dashed border-gray-200 py-5 dark:border-gray-700 xl:py-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-2 text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white",
                        children: "Social"
                    }),
                    data?.socials?.map((social)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(anchor_link/* default */.Z, {
                            href: social?.link,
                            className: "mb-2 flex items-center gap-x-2 text-sm tracking-tight text-gray-600 transition last:mb-0 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white",
                            children: [
                                social?.icon,
                                social?.title
                            ]
                        }, social?.id))
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border-y border-dashed border-gray-200 py-5 dark:border-gray-700 xl:py-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-2 text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white",
                        children: "Links"
                    }),
                    data?.links?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(anchor_link/* default */.Z, {
                            href: item?.link,
                            className: "mb-2 flex items-center text-sm tracking-tight text-gray-600 transition last:mb-0 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white",
                            children: item?.link
                        }, item?.id))
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-y border-dashed border-gray-200 py-5 dark:border-gray-700 xl:py-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white",
                    children: [
                        "Joined ",
                        data?.created_at
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                color: "gray",
                className: "mt-5 h-8 font-normal text-gray-600 hover:text-gray-900 dark:bg-gray-600 dark:text-gray-200 dark:hover:text-white md:h-9 md:px-4 lg:mt-6",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(InfoIcon, {
                            className: "h-3 w-3"
                        }),
                        " report"
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 9166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TransactionHistory)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/button/index.ts + 4 modules
var ui_button = __webpack_require__(9535);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(3879);
// EXTERNAL MODULE: ./src/components/icons/long-arrow-right.tsx
var long_arrow_right = __webpack_require__(6823);
;// CONCATENATED MODULE: ./src/components/icons/long-arrow-up.tsx

const LongArrowUp = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M13.3333 6.41421L16.9596 10.0404C17.3501 10.431 17.9832 10.431 18.3738 10.0404C18.7643 9.64991 18.7643 9.01675 18.3738 8.62623L13.0404 3.29289C12.6499 2.90237 12.0168 2.90237 11.6262 3.29289L6.29289 8.62623C5.90237 9.01675 5.90237 9.64992 6.29289 10.0404C6.68342 10.431 7.31658 10.431 7.70711 10.0404L11.3333 6.41421L11.3333 21C11.3333 21.5523 11.781 22 12.3333 22C12.8856 22 13.3333 21.5523 13.3333 21L13.3333 6.41421Z",
            fill: "currentColor"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/icons/verified-icon.tsx

const VerifiedIcon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15.2342 7.99993C15.2342 11.9948 11.9958 15.2333 8.00091 15.2333C4.00605 15.2333 0.767578 11.9948 0.767578 7.99993C0.767578 4.00507 4.00605 0.766602 8.00091 0.766602C11.9958 0.766602 15.2342 4.00507 15.2342 7.99993Z",
                fill: "#50AD64",
                stroke: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.3809 8.73873L8.10887 10.1387C8.07459 10.1545 8.03729 10.1627 7.99954 10.1627C7.96179 10.1627 7.92449 10.1545 7.89021 10.1387L4.61821 8.73873C4.59017 8.72635 4.5588 8.72373 4.5291 8.73127C4.4994 8.73881 4.47309 8.75609 4.45436 8.78035C4.43563 8.8046 4.42557 8.83443 4.42578 8.86507C4.426 8.89572 4.43647 8.9254 4.45554 8.94939L7.78087 13.2267C7.80684 13.2599 7.84002 13.2868 7.87791 13.3052C7.9158 13.3237 7.95739 13.3333 7.99954 13.3333C8.04169 13.3333 8.08328 13.3237 8.12117 13.3052C8.15906 13.2868 8.19224 13.2599 8.21821 13.2267L11.5435 8.94939C11.5626 8.9254 11.5731 8.89572 11.5733 8.86507C11.5735 8.83443 11.5634 8.8046 11.5447 8.78035C11.526 8.75609 11.4997 8.73881 11.47 8.73127C11.4403 8.72373 11.4089 8.72635 11.3809 8.73873Z",
                fill: "#86FDAA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.99953 10.1627V13.3334C7.95746 13.3329 7.91603 13.3231 7.87821 13.3046C7.8404 13.2862 7.80715 13.2596 7.78087 13.2267L4.45554 8.94939C4.43647 8.9254 4.426 8.89572 4.42578 8.86507C4.42557 8.83443 4.43563 8.8046 4.45436 8.78035C4.47309 8.75609 4.4994 8.73881 4.5291 8.73127C4.5588 8.72373 4.59017 8.72635 4.6182 8.73873L7.8902 10.1387C7.92448 10.1545 7.96178 10.1627 7.99953 10.1627Z",
                fill: "#6DE08E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.6163 7.14386L8.21625 2.77319C8.19086 2.74001 8.15817 2.71313 8.12071 2.69463C8.08325 2.67613 8.04203 2.6665 8.00025 2.6665C7.95847 2.6665 7.91725 2.67613 7.8798 2.69463C7.84234 2.71313 7.80964 2.74001 7.78425 2.77319L4.38425 7.14386C4.35901 7.17704 4.34165 7.21552 4.33347 7.25639C4.32529 7.29727 4.32651 7.33947 4.33705 7.3798C4.34758 7.42013 4.36714 7.45754 4.39426 7.4892C4.42138 7.52086 4.45535 7.54593 4.49358 7.56253L7.89358 9.0212C7.92738 9.03528 7.96364 9.04253 8.00025 9.04253C8.03687 9.04253 8.07312 9.03528 8.10692 9.0212L11.5069 7.56253C11.5452 7.54593 11.5791 7.52086 11.6062 7.4892C11.6334 7.45754 11.6529 7.42013 11.6635 7.3798C11.674 7.33947 11.6752 7.29727 11.667 7.25639C11.6589 7.21552 11.6415 7.17704 11.6163 7.14386Z",
                fill: "#86FDAA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.6667 7.36517L8 6.05317V2.6665C8.04168 2.66703 8.08272 2.67688 8.1201 2.69534C8.15747 2.7138 8.19024 2.74039 8.216 2.77317L11.616 7.14384C11.64 7.17483 11.657 7.21069 11.6657 7.24892C11.6745 7.28714 11.6748 7.32681 11.6667 7.36517Z",
                fill: "#6DE08E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.00065 6.05322V9.04256C7.96404 9.04244 7.92781 9.03519 7.89398 9.02122L4.49398 7.56256C4.45319 7.54529 4.41727 7.51826 4.38937 7.48385C4.36147 7.44944 4.34245 7.4087 4.33398 7.36522L8.00065 6.05322Z",
                fill: "#6DE08E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.00067 2.6665V6.05317L4.33401 7.36517C4.32586 7.32681 4.32618 7.28714 4.33493 7.24892C4.34368 7.21069 4.36065 7.17483 4.38467 7.14384L7.78467 2.77317C7.81043 2.74039 7.8432 2.7138 7.88057 2.69534C7.91795 2.67688 7.95899 2.66703 8.00067 2.6665Z",
                fill: "#5FC77D"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/icons/gas-icon.tsx

const GasIcon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M14.5697 2.09766L13.2363 0.764313C13.1061 0.634094 12.8952 0.634094 12.765 0.764313C12.6348 0.894531 12.6348 1.10547 12.765 1.23566L13.8626 2.33331L12.765 3.43097C12.7025 3.49347 12.6673 3.57809 12.6673 3.66666V4.66666C12.6673 5.40203 13.2653 6 14.0007 6V11.6667C14.0007 11.8506 13.8513 12 13.6673 12C13.4834 12 13.334 11.8506 13.334 11.6667V11C13.334 10.4486 12.8854 10 12.334 10H12.0007V1.33334C12.0007 0.597969 11.4027 0 10.6673 0H4.00067C3.26533 0 2.66733 0.597969 2.66733 1.33334V13.3333C1.93198 13.3333 1.33398 13.9313 1.33398 14.6667V15.6667C1.33398 15.8509 1.48308 16 1.66733 16H13.0007C13.1849 16 13.334 15.8509 13.334 15.6667V14.6667C13.334 13.9313 12.736 13.3333 12.0007 13.3333V10.6667H12.334C12.5179 10.6667 12.6674 10.8161 12.6674 11V11.6667C12.6674 12.2181 13.1159 12.6667 13.6674 12.6667C14.2188 12.6667 14.6674 12.2181 14.6674 11.6667V2.33334C14.6673 2.24478 14.6322 2.16016 14.5697 2.09766ZM10.6673 5.67284C10.6673 5.85709 10.5182 6.00619 10.334 6.00619H4.33398C4.14973 6.00619 4.00064 5.85709 4.00064 5.67284V1.66666C4.00064 1.48241 4.14973 1.33331 4.33398 1.33331H10.334C10.5182 1.33331 10.6673 1.48241 10.6673 1.66666V5.67284Z",
            fill: "currentColor"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/icons/question-icon.tsx

const QuestionIcon = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M11.4384 16.6042C11.0808 16.6042 10.7916 16.315 10.7916 15.9574C10.7916 15.1114 10.9116 14.3806 11.1504 13.7662C11.3256 13.303 11.61 12.8362 12.0012 12.3646C12.2892 12.0214 12.8052 11.5198 13.5516 10.8622C14.298 10.2034 14.7828 9.67898 15.0072 9.28778C15.2316 8.89658 15.342 8.46938 15.342 8.00618C15.342 7.16738 15.0144 6.43178 14.3604 5.79698C13.7064 5.16218 12.9036 4.84538 11.9532 4.84538C11.0352 4.84538 10.2684 5.13338 9.65397 5.70818C9.20517 6.12818 8.86797 6.72098 8.64477 7.48658C8.49117 8.01218 7.97877 8.34818 7.43517 8.28338C6.74637 8.20178 6.29277 7.52018 6.48957 6.85418C6.79197 5.83058 7.29837 5.00618 8.00757 4.37978C8.99277 3.50738 10.296 3.07178 11.9172 3.07178C13.6332 3.07178 15.0024 3.53858 16.0248 4.47338C17.0472 5.40818 17.5572 6.53738 17.5572 7.86218C17.5572 8.62898 17.3772 9.33578 17.0184 9.98138C16.6596 10.6282 15.9564 11.4142 14.9112 12.3406C14.2092 12.9634 13.7496 13.423 13.5336 13.7182C13.3176 14.0134 13.158 14.353 13.0548 14.7358C12.978 15.0202 12.9252 15.4378 12.8964 15.9862C12.8784 16.3318 12.5916 16.603 12.246 16.603H11.4384V16.6042ZM10.6716 19.7002C10.6716 19.0222 11.2212 18.4726 11.8992 18.4726C12.5772 18.4726 13.1268 19.0222 13.1268 19.7002C13.1268 20.3782 12.5772 20.9278 11.8992 20.9278C11.2212 20.9278 10.6716 20.3782 10.6716 19.7002Z",
            fill: "currentColor"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/author/transaction-history-card.tsx







function TransactionHistoryCard({ item  }) {
    const { name , avatar , date , time , currencyType , gasFee , transactionMethod , transactionMethodLogo , transactionFromAvatar , transactionFrom , transactionAmount , transactionType ,  } = item ?? {};
    const bgColor = transactionType === "credited" ? "#D2D786" : "#F2C672";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "rounded-lg bg-white p-4 text-sm shadow-card dark:bg-light-dark sm:p-5 md:p-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between border-b border-dashed border-gray-200 pb-3.5 dark:border-gray-700 sm:pb-5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center font-medium ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* default */.Z, {
                                src: avatar,
                                alt: "wallet",
                                width: 24,
                                height: 24,
                                placeholder: "blur",
                                className: "rounded-full"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "truncate -tracking-wider text-gray-900 ltr:ml-2 rtl:mr-2 dark:text-white",
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "truncate text-xs -tracking-wide text-gray-600 ltr:pl-2 rtl:pr-2 dark:text-gray-400 xs:text-sm ",
                        children: date
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-9 gap-x-3 pt-4 md:gap-x-5 md:pt-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-span-4 flex flex-col gap-2.5 sm:flex-row sm:gap-x-4 md:flex-col 2xl:flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center lg:w-1/2",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white md:h-9 md:w-9 xl:h-10 xl:w-10",
                                        style: {
                                            backgroundColor: bgColor
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(LongArrowUp, {
                                                className: `h-5 w-5 xl:h-6 xl:w-6 ${transactionType === "credited" ? "rotate-180" : "rotate-0"}`
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "absolute top-0 ltr:-right-1.5 rtl:-left-1.5",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(VerifiedIcon, {
                                                    className: "h-4 w-4"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col truncate ltr:ml-2.5 rtl:mr-2.5 xl:ltr:ml-4 xl:rtl:mr-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "mb-0.5 font-medium -tracking-wider text-gray-900 dark:text-white",
                                                children: transactionType === "credited" ? "Receive" : "Send"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xs text-gray-400",
                                                children: time
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center lg:w-1/2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-600/5 text-gray-600 dark:text-gray-400 md:h-9 md:w-9 xl:h-10 xl:w-10",
                                        children: transactionFromAvatar ? /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* default */.Z, {
                                            src: transactionFromAvatar,
                                            alt: transactionFrom,
                                            width: 40,
                                            height: 40,
                                            className: "rounded-full"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(QuestionIcon, {
                                            className: "h-5 w-5 lg:h-6 lg:w-6"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col truncate ltr:ml-2.5 rtl:mr-2.5 xl:ltr:ml-4 xl:rtl:mr-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mb-0.5 text-xs text-gray-400",
                                                children: "From"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "truncate font-medium -tracking-wider text-gray-900 dark:text-white",
                                                children: transactionFrom
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-span-1 flex items-center text-gray-600 dark:text-gray-400 ltr:sm:pl-3 rtl:sm:pr-3 ltr:md:pl-0 rtl:md:pr-0 ltr:lg:pl-3 rtl:lg:pr-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(long_arrow_right/* LongArrowRight */.R, {
                            className: "h-5 w-5 rtl:rotate-180 md:h-6 md:w-6 lg:h-5 lg:w-5 xl:h-7 xl:w-7"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "col-span-4 flex flex-col gap-2.5 sm:flex-row sm:gap-x-4 md:flex-col 2xl:flex-row",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center lg:w-1/2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-600/5 text-gray-600 dark:text-gray-400 md:h-9 md:w-9 xl:h-10 xl:w-10",
                                        children: transactionMethodLogo ? /*#__PURE__*/ jsx_runtime_.jsx(ui_image/* default */.Z, {
                                            src: transactionMethodLogo,
                                            alt: transactionMethod,
                                            width: 40,
                                            height: 40,
                                            className: "rounded-full",
                                            placeholder: "blur"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(QuestionIcon, {
                                            className: "h-5 w-5 xl:h-6 xl:w-6"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col truncate ltr:ml-2.5 rtl:mr-2.5 xl:ltr:ml-4 xl:rtl:mr-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "mb-0.5 text-xs text-gray-400",
                                                children: [
                                                    "+",
                                                    transactionAmount
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                className: "font-medium -tracking-wider text-gray-900 dark:text-white",
                                                children: transactionMethod
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center lg:w-1/2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-600/5 text-gray-600 dark:text-gray-400 md:h-9 md:w-9 xl:h-10 xl:w-10",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(GasIcon, {
                                            className: "h-4 w-4"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col truncate ltr:ml-2.5 rtl:mr-2.5 xl:ltr:ml-4 xl:rtl:mr-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mb-0.5 text-xs text-gray-400",
                                                children: "Gas Fee"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                                className: "font-medium -tracking-wider text-gray-900 dark:text-white",
                                                children: [
                                                    gasFee,
                                                    currencyType
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/data/static/author-profile.tsx + 10 modules
var author_profile = __webpack_require__(2670);
;// CONCATENATED MODULE: ./src/components/author/transaction-history.tsx



// static data

function TransactionHistory() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-4 flex md:mb-5 md:justify-end xl:mb-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                    className: "w-full shadow-button md:w-auto md:px-5",
                    size: "small",
                    shape: "rounded",
                    children: "DOWNLOAD CSV"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "space-y-4 md:space-y-5 xl:space-y-6",
                children: author_profile/* transactionHistory */.ZH?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(TransactionHistoryCard, {
                        item: item
                    }, item?.id))
            })
        ]
    });
};


/***/ }),

/***/ 2540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TransactionSearchForm)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/ui/list-card.tsx
var list_card = __webpack_require__(5415);
;// CONCATENATED MODULE: ./src/assets/images/avalanche.svg
/* harmony default export */ const avalanche = ({"src":"/_next/static/media/avalanche.a059c315.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./src/assets/images/anchor.svg
/* harmony default export */ const images_anchor = ({"src":"/_next/static/media/anchor.89a312fc.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./src/assets/images/cappasity.svg
/* harmony default export */ const cappasity = ({"src":"/_next/static/media/cappasity.a2361a5b.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./src/assets/images/pancake-bunny.svg
/* harmony default export */ const pancake_bunny = ({"src":"/_next/static/media/pancake-bunny.2c04e85a.svg","height":24,"width":24});
// EXTERNAL MODULE: ./src/assets/images/currency/ethereum.svg
var ethereum = __webpack_require__(1623);
// EXTERNAL MODULE: ./src/components/icons/search.tsx
var search = __webpack_require__(138);
;// CONCATENATED MODULE: ./src/components/author/transaction-search-form.tsx








const searchFilter = [
    {
        id: 1,
        name: "AVALANCHE",
        logo: avalanche
    },
    {
        id: 2,
        name: "ETHEREUM",
        logo: ethereum/* default */.Z
    },
    {
        id: 3,
        name: "CAPPASITY",
        logo: cappasity
    },
    {
        id: 4,
        name: "ANCHOR",
        logo: images_anchor
    },
    {
        id: 5,
        name: "PANCAKEBUNNY",
        logo: pancake_bunny
    }, 
];
function TransactionSearchForm() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "block",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                className: "relative flex w-full rounded-full",
                noValidate: true,
                role: "search",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    className: "flex flex-1 items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            className: "h-12 w-full rounded-full border border-gray-200 py-1 text-sm text-gray-900 placeholder:text-gray-600 focus:border-gray-900 focus:outline-none ltr:pr-5 ltr:pl-11 rtl:pl-5 rtl:pr-11 dark:border-gray-600 dark:bg-light-dark dark:text-white dark:placeholder:text-gray-400 dark:focus:border-gray-500 sm:ltr:pl-14 sm:rtl:pr-14 xl:ltr:pl-16 xl:rtl:pr-16",
                            placeholder: "Filter by protocol, token, event, etc...",
                            autoComplete: "off",
                            type: "search"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute flex h-full w-10 items-center justify-center text-gray-600 ltr:left-0 ltr:pl-2 rtl:right-0 rtl:pr-2 dark:text-white sm:w-14 sm:ltr:pl-3 sm:rtl:pr-3 xl:w-16",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(search/* SearchIcon */.W, {
                                className: "h-4 w-4"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-4 flex flex-wrap gap-3 sm:mt-5 lg:mt-6",
                children: searchFilter?.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                        role: "button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(list_card/* default */.Z, {
                            item: item,
                            className: "shrink-0 rounded-full p-2 transition-transform hover:-translate-y-0.5 hover:bg-gray-50 focus:-translate-y-0.5 focus:bg-gray-50 ltr:pr-5 rtl:pl-5"
                        })
                    }, item?.id))
            })
        ]
    });
};


/***/ }),

/***/ 3869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Check = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "14",
        height: "10",
        viewBox: "0 0 14 10",
        fill: "none",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M13.0303 0.96967C13.3232 1.26256 13.3232 1.73744 13.0303 2.03033L6.03033 9.03033C5.73744 9.32322 5.26256 9.32322 4.96967 9.03033L0.96967 5.03033C0.676777 4.73744 0.676777 4.26256 0.96967 3.96967C1.26256 3.67678 1.73744 3.67678 2.03033 3.96967L5.5 7.43934L11.9697 0.96967C12.2626 0.676777 12.7374 0.676777 13.0303 0.96967Z",
            fill: "currentColor"
        })
    });
};


/***/ }),

/***/ 6823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ LongArrowRight)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function LongArrowRight(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 18 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12.7197 1.28033C12.4268 0.987437 12.4268 0.512563 12.7197 0.21967C13.0126 -0.0732233 13.4874 -0.0732233 13.7803 0.21967L17.7803 4.21967C17.9268 4.36612 18 4.55806 18 4.75C18 4.85169 17.9798 4.94866 17.9431 5.03709C17.9065 5.12555 17.8522 5.20842 17.7803 5.28033L13.7803 9.28033C13.4874 9.57322 13.0126 9.57322 12.7197 9.28033C12.4268 8.98744 12.4268 8.51256 12.7197 8.21967L15.4393 5.5H0.75C0.335787 5.5 0 5.16421 0 4.75C0 4.33579 0.335787 4 0.75 4H15.4393L12.7197 1.28033Z",
            fill: "currentColor"
        })
    });
}


/***/ }),

/***/ 5633:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProfileTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_param_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _components_ui_list_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5415);
/* harmony import */ var _components_author_transaction_search_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2540);
/* harmony import */ var _components_author_transaction_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9166);
/* harmony import */ var _components_ui_collection_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5595);
/* harmony import */ var _data_static_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(589);
/* harmony import */ var _data_static_author_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2670);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_param_tab__WEBPACK_IMPORTED_MODULE_1__]);
_components_ui_param_tab__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// static data


function ProfileTab() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_param_tab__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        tabMenu: [
            {
                title: "Collection",
                path: "collection"
            },
            {
                title: "Portfolio",
                path: "portfolio"
            },
            {
                title: "History",
                path: "history"
            }, 
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_param_tab__WEBPACK_IMPORTED_MODULE_1__/* .TabPanel */ .x, {
                className: "focus:outline-none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid gap-4 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-5 xl:gap-6 3xl:grid-cols-3 4xl:grid-cols-4",
                    children: _data_static_collections__WEBPACK_IMPORTED_MODULE_6__/* .collections */ .s?.map((collection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_collection_card__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            item: collection
                        }, collection?.id))
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_param_tab__WEBPACK_IMPORTED_MODULE_1__/* .TabPanel */ .x, {
                className: "focus:outline-none",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-8 md:space-y-10 xl:space-y-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4",
                            children: _data_static_author_profile__WEBPACK_IMPORTED_MODULE_7__/* .authorWallets */ .gu?.map((wallet)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_list_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    item: wallet,
                                    variant: "medium"
                                }, wallet?.id))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-heading-style mb-3 uppercase text-gray-900 dark:text-white",
                                    children: "Protocols"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2",
                                    children: _data_static_author_profile__WEBPACK_IMPORTED_MODULE_7__/* .authorProtocols */ .rV?.map((protocol)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_list_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            item: protocol,
                                            variant: "large"
                                        }, protocol?.id))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "block",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-heading-style mb-3 uppercase text-gray-900 dark:text-white",
                                    children: "Networks"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4",
                                    children: _data_static_author_profile__WEBPACK_IMPORTED_MODULE_7__/* .authorNetworks */ .pK?.map((network)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_list_card__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            item: network,
                                            variant: "medium"
                                        }, network?.id))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_param_tab__WEBPACK_IMPORTED_MODULE_1__/* .TabPanel */ .x, {
                className: "focus:outline-none",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-8 xl:space-y-9",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_author_transaction_search_form__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_author_transaction_history__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CollectionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3879);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3813);




function CollectionCard({ item , className =""  }) {
    const { name , slug , title , cover_image , image , number_of_artwork , user  } = item ?? {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("group relative overflow-hidden rounded-lg transition-transform hover:-translate-y-1", className),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative flex aspect-[8/11] w-full justify-center overflow-hidden rounded-lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    src: cover_image,
                    placeholder: "blur",
                    layout: "fill",
                    quality: 100,
                    objectFit: "cover",
                    alt: name
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute top-0 left-0 z-[5] flex h-full w-full flex-col justify-between bg-gradient-to-t from-black p-5 md:p-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        href: slug,
                        className: "absolute top-0 left-0 z-10 h-full w-full"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between gap-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "inline-flex h-8 shrink-0 items-center rounded-2xl bg-white/20 px-4 text-xs font-medium uppercase -tracking-wide text-white backdrop-blur-[40px]",
                                children: name
                            }),
                            image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-16 w-16 rounded-lg bg-white/20 p-2 backdrop-blur-[40px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    src: image,
                                    alt: name,
                                    width: 48,
                                    height: 48,
                                    className: "rounded-[6px]"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "mb-1.5 truncate text-lg font-medium -tracking-wider text-white",
                                children: title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "text-sm font-medium -tracking-wide text-[#B6AAA2]",
                                children: [
                                    number_of_artwork,
                                    " Artworks"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                href: user?.slug,
                                className: "relative z-10 mt-3.5 inline-flex items-center rounded-3xl bg-white/20 p-2 backdrop-blur-[40px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex shrink-0 items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            //@ts-ignore
                                            src: user?.avatar,
                                            alt: user?.name,
                                            width: 24,
                                            height: 24,
                                            className: "rounded-full"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "truncate text-sm -tracking-wide text-white ltr:ml-2 ltr:pr-2 rtl:mr-2 rtl:pl-2",
                                        children: [
                                            "@",
                                            user?.name
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 2670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pK": () => (/* binding */ authorNetworks),
  "rV": () => (/* binding */ authorProtocols),
  "gu": () => (/* binding */ authorWallets),
  "ZH": () => (/* binding */ transactionHistory)
});

;// CONCATENATED MODULE: ./src/assets/images/portfolio/wallet.svg
/* harmony default export */ const wallet = ({"src":"/_next/static/media/wallet.8a45e058.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/assets/images/portfolio/nft.svg
/* harmony default export */ const nft = ({"src":"/_next/static/media/nft.d91683d5.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/assets/images/portfolio/deposit.svg
/* harmony default export */ const deposit = ({"src":"/_next/static/media/deposit.32fbbfad.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/assets/images/portfolio/claimable.svg
/* harmony default export */ const claimable = ({"src":"/_next/static/media/claimable.58babc2f.svg","height":32,"width":32});
;// CONCATENATED MODULE: ./src/assets/images/portfolio/poolto-gether.svg
/* harmony default export */ const poolto_gether = ({"src":"/_next/static/media/poolto-gether.7f67a4c8.svg","height":40,"width":40});
;// CONCATENATED MODULE: ./src/assets/images/portfolio/uniswap.svg
/* harmony default export */ const uniswap = ({"src":"/_next/static/media/uniswap.c61798be.svg","height":40,"width":40});
;// CONCATENATED MODULE: ./src/assets/images/portfolio/pancake.svg
/* harmony default export */ const pancake = ({"src":"/_next/static/media/pancake.3978dfae.svg","height":40,"width":40});
;// CONCATENATED MODULE: ./src/assets/images/portfolio/curve.svg
/* harmony default export */ const curve = ({"src":"/_next/static/media/curve.846ed970.svg","height":40,"width":40});
// EXTERNAL MODULE: ./src/assets/images/currency/bitcoin.svg
var bitcoin = __webpack_require__(3438);
// EXTERNAL MODULE: ./src/assets/images/currency/ethereum.svg
var ethereum = __webpack_require__(1623);
;// CONCATENATED MODULE: ./src/assets/images/user-1.png
/* harmony default export */ const user_1 = ({"src":"/_next/static/media/user-1.d4b43d77.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBElEQVR42hWMzUrDQACEZ3/SpDSilxiUQpUWit4K0orHPI5P4EEPvoDePenJF/AqehL1pGhBpWBBCbaoMW2TTZvdrNuPgYFh+DDHrW4G50eHV92LM3Gytyu2mhvXiyurAQys3qgH36P0uNOodigIv3184a+fg7Uky1u+570xxZxTm7P2TnMdX+EQhBIQaDx8DP0SQY1OpG57FQcLZQejVMCmFCgKEw1V6G1eNkM4Fuj2+igxhifT74MfLDkWhNSgNqd3OSH4ExlAgZkqEGczyLlF5vfMdSuh0beidLr8O04RJQKRMAelnnWe7bM0mfRLFu+lCjWLMt/iTMZC3Gg5PXCz+PIf2Bp1AiYkNeMAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/assets/images/user-2.png
/* harmony default export */ const user_2 = ({"src":"/_next/static/media/user-2.83edef50.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAk0lEQVR42gGIAHf/AAAZYmGqwsLyqPJ2wUhgKBkAS2F+upj0ov2Q/Xz0Zro1YQBtwZL0ov+n/5v/m/9/9D3CAHTym/27/7D/kf+X/3n9MvIAXPJ5/ar/mv9s/3j/Yv0m8gA7w0P1fP+H/3X/df9R9B3CAB5kF7xB9HL9gf1w9T27AGMACx4GZBTCQvJZ8kbEFWUAHUTOTKN8I5aOAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/data/static/author-profile.tsx
// Profile Wallet Data




const authorWallets = [
    {
        id: 1,
        name: "WALLET",
        logo: wallet,
        balance: "$2,518.78"
    },
    {
        id: 2,
        name: "NFT\u2019S",
        logo: nft,
        balance: "$152.00"
    },
    {
        id: 3,
        name: "DEPOSITS",
        logo: deposit,
        balance: "$2,215.43"
    },
    {
        id: 4,
        name: "CLAIMABLE",
        logo: claimable,
        balance: "$150.60"
    }, 
];
// Profile Protocols Data




const authorProtocols = [
    {
        id: 1,
        name: "POOLTOGETHER",
        coinType: "Ethereum",
        logo: poolto_gether,
        balance: "$2,215.43"
    },
    {
        id: 2,
        name: "CURVE",
        coinType: "Ethereum",
        logo: curve,
        balance: "$2,215.43"
    },
    {
        id: 3,
        name: "UNISWAP",
        coinType: "Ethereum",
        logo: uniswap,
        balance: "$2,215.43"
    },
    {
        id: 4,
        name: "PANCAKE SWAP",
        coinType: "BSC",
        logo: pancake,
        balance: "$2,215.43"
    }, 
];
// Profile Protocols Data


const authorNetworks = [
    {
        id: 1,
        name: "BTC",
        logo: bitcoin/* default */.Z,
        balance: "$2,518.78"
    },
    {
        id: 2,
        name: "ETH",
        logo: ethereum/* default */.Z,
        balance: "$152.00"
    }, 
];
// Author Transaction History Data


const transactionHistory = [
    {
        id: 1,
        name: "Spy Thirtythree",
        avatar: user_2,
        date: "February 7, 2022",
        time: "10:13 AM",
        transactionType: "credited",
        transactionFrom: "Stefen365",
        transactionFromAvatar: user_1,
        transactionMethodLogo: "",
        transactionMethod: "Verse",
        transactionAmount: 9.85,
        gasFee: 0.0519,
        currencyType: "ETH"
    },
    {
        id: 2,
        name: "Spy Thirtythree",
        avatar: user_2,
        date: "February 7, 2022",
        time: "10:13 AM",
        transactionType: "debited",
        transactionFrom: "Stefen365",
        transactionFromAvatar: user_1,
        transactionMethodLogo: "",
        transactionMethod: "Verse",
        transactionAmount: 3000000.0,
        gasFee: 0.0519,
        currencyType: "ETH"
    },
    {
        id: 3,
        name: "Spy Thirtythree",
        avatar: user_2,
        date: "February 7, 2022",
        time: "10:13 AM",
        transactionType: "credited",
        transactionFrom: "Stefen365",
        transactionFromAvatar: user_1,
        transactionMethodLogo: "",
        transactionMethod: "Verse",
        transactionAmount: 9.85,
        gasFee: 0.0519,
        currencyType: "ETH"
    }, 
];


/***/ }),

/***/ 6678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t": () => (/* binding */ authorData)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/assets/images/profile-cover.jpg
/* harmony default export */ const profile_cover = ({"src":"/_next/static/media/profile-cover.56ac09da.jpg","height":448,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAIACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAoB//xAAbEAABBAMAAAAAAAAAAAAAAAACAAMREwEUQv/aAAgBAQABPwAH39ObTmkusr//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
// EXTERNAL MODULE: ./src/assets/images/author.jpg
var author = __webpack_require__(1572);
// EXTERNAL MODULE: ./src/components/icons/brands/instagram.tsx
var instagram = __webpack_require__(1335);
// EXTERNAL MODULE: ./src/components/icons/brands/twitter.tsx
var twitter = __webpack_require__(505);
// EXTERNAL MODULE: ./src/assets/images/avatar/4.png
var _4 = __webpack_require__(5949);
// EXTERNAL MODULE: ./src/assets/images/avatar/2.png
var _2 = __webpack_require__(2901);
// EXTERNAL MODULE: ./src/assets/images/avatar/3.png
var _3 = __webpack_require__(5575);
// EXTERNAL MODULE: ./src/assets/images/avatar/1.png
var _1 = __webpack_require__(8918);
// EXTERNAL MODULE: ./src/assets/images/avatar/6.png
var _6 = __webpack_require__(2227);
;// CONCATENATED MODULE: ./src/data/static/author.tsx










const authorData = {
    id: 157896,
    name: "Spy Thirtythree",
    user_name: "Cameronwilliamson",
    wallet_key: "0x9Af568442868356c7aE834A47614600002545476555555555772d9F5B87e9b",
    created_at: "November 2021",
    cover_image: {
        id: 1,
        thumbnail: profile_cover,
        original: profile_cover
    },
    avatar: {
        id: 1,
        thumbnail: author/* default */.Z,
        original: author/* default */.Z
    },
    bio: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
    following: "1,504",
    followers: "1,845",
    followed_by: [
        {
            id: 1,
            name: "Thirtythree",
            slug: "thirtythree",
            avatar: {
                id: 1,
                thumbnail: _4/* default */.Z,
                original: _4/* default */.Z
            }
        },
        {
            id: 2,
            name: "Thirtythree",
            slug: "thirtythree",
            avatar: {
                id: 1,
                thumbnail: _2/* default */.Z,
                original: _2/* default */.Z
            }
        },
        {
            id: 3,
            name: "Thirtythree",
            slug: "thirtythree",
            avatar: {
                id: 1,
                thumbnail: _3/* default */.Z,
                original: _3/* default */.Z
            }
        },
        {
            id: 4,
            name: "Thirtythree",
            slug: "thirtythree",
            avatar: {
                id: 1,
                thumbnail: _1/* default */.Z,
                original: _1/* default */.Z
            }
        },
        {
            id: 5,
            name: "Thirtythree",
            slug: "thirtythree",
            avatar: {
                id: 1,
                thumbnail: _6/* default */.Z,
                original: _6/* default */.Z
            }
        }, 
    ],
    socials: [
        {
            id: 1,
            title: "@dontbesovasya",
            link: "https://dontbesovasya.io",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(twitter/* Twitter */.t, {
                className: "w-4"
            })
        },
        {
            id: 2,
            title: "@dontbesovasya",
            link: "https://dontbesovasya.io",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(instagram/* Instagram */.m, {
                className: "w-4"
            })
        }, 
    ],
    links: [
        {
            id: 1,
            title: "@dontbesovasya",
            link: "https://dontbesovasya.io"
        },
        {
            id: 2,
            title: "@dontbesovasya",
            link: "https://dontbesovasya.io"
        }, 
    ]
};


/***/ }),

/***/ 589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ collections)
});

;// CONCATENATED MODULE: ./src/assets/images/collection/grid/1.jpg
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.d89a279c.jpg","height":368,"width":270,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAwX/2gAMAwEAAhADEAAAAIQBT//EAB0QAAECBwAAAAAAAAAAAAAAABEAAQIDBAUSIVH/2gAIAQEAAT8Ak3CjGMTAHfV//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACA//aAAgBAgEBPwByqz//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMEYf/aAAgBAwEBPwBWpcP/2Q=="});
;// CONCATENATED MODULE: ./src/assets/images/collection/grid/2.jpg
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.da1a3bbe.jpg","height":368,"width":270,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAJQK/8QAHBAAAgICAwAAAAAAAAAAAAAAAgMBBAARBRMi/9oACAEBAAE/ALaeLGpVYKQ7Gke4DUT5z//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AK//2Q=="});
;// CONCATENATED MODULE: ./src/assets/images/collection/grid/3.jpg
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.89ebc0f7.jpg","height":368,"width":270,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAgEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAALCqf//EABsQAAICAwEAAAAAAAAAAAAAAAEDAgQAERKx/9oACAEBAAE/AK4hZilZa0jgsMwdb7Pmf//EABcRAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAIAQIBAT8AylOEf//EABkRAAIDAQAAAAAAAAAAAAAAAAEyAAIDIf/aAAgBAwEBPwDSy8Cif//Z"});
;// CONCATENATED MODULE: ./src/assets/images/collection/grid/4.jpg
/* harmony default export */ const _4 = ({"src":"/_next/static/media/4.74841b1c.jpg","height":368,"width":270,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAKYqf//EABwQAAICAgMAAAAAAAAAAAAAAAEDAgUAUQQSQ//aAAgBAQABPwCdLXsYDx1KSRHzh1Egd7Of/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
;// CONCATENATED MODULE: ./src/assets/images/collection/grid/5.jpg
/* harmony default export */ const _5 = ({"src":"/_next/static/media/5.9dca2da8.jpg","height":368,"width":270,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAKLP/8QAHRAAAgEEAwAAAAAAAAAAAAAAAgMFAAEEIRITgv/aAAgBAQABPwCDz1xscDM5BmB30zr5+d1//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});
;// CONCATENATED MODULE: ./src/assets/images/collection/grid/6.jpg
/* harmony default export */ const _6 = ({"src":"/_next/static/media/6.78ad5cf7.jpg","height":368,"width":270,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAlwfSf//EABwQAQACAQUAAAAAAAAAAAAAAAECAxEABBITIf/aAAgBAQABPwC6hdlVb1Qkc8AeYE1//8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIAInL/2gAIAQIBAT8ARzbRn//EABoRAAICAwAAAAAAAAAAAAAAAAEDAAIRElL/2gAIAQMBAT8AUy2pz0Z//9k="});
;// CONCATENATED MODULE: ./src/assets/images/collection/grid/7.jpg
/* harmony default export */ const _7 = ({"src":"/_next/static/media/7.de2465aa.jpg","height":368,"width":270,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIhN/wD/xAAeEAACAQMFAAAAAAAAAAAAAAABAwQAAgUGERMUYv/aAAgBAQABPwDUvbzsKGop4WWsLCNifNf/xAAXEQEAAwAAAAAAAAAAAAAAAAABAAIR/9oACAECAQE/AKrk/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECIf/aAAgBAwEBPwClp//Z"});
;// CONCATENATED MODULE: ./src/assets/images/collection/grid/8.jpg
/* harmony default export */ const _8 = ({"src":"/_next/static/media/8.d5cf3f01.jpg","height":368,"width":270,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAAAwEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAqDyv/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIDBAUAEhMicf/aAAgBAQABPwDFUcbXiRphE/IgI7bwPDr/xAAZEQACAwEAAAAAAAAAAAAAAAABAwACEmH/2gAIAQIBAT8AcctuOz//xAAaEQACAgMAAAAAAAAAAAAAAAABAgADBBFB/9oACAEDAQE/AMcG2it2ZtkcM//Z"});
// EXTERNAL MODULE: ./src/assets/images/avatar/4.png
var avatar_4 = __webpack_require__(5949);
// EXTERNAL MODULE: ./src/assets/images/avatar/2.png
var avatar_2 = __webpack_require__(2901);
// EXTERNAL MODULE: ./src/assets/images/avatar/3.png
var avatar_3 = __webpack_require__(5575);
// EXTERNAL MODULE: ./src/assets/images/avatar/1.png
var avatar_1 = __webpack_require__(8918);
// EXTERNAL MODULE: ./src/assets/images/avatar/6.png
var avatar_6 = __webpack_require__(2227);
// EXTERNAL MODULE: ./src/assets/images/collection/collection-1.jpg
var collection_1 = __webpack_require__(18);
// EXTERNAL MODULE: ./src/assets/images/collection/collection-2.jpg
var collection_2 = __webpack_require__(6723);
// EXTERNAL MODULE: ./src/assets/images/collection/collection-3.jpg
var collection_3 = __webpack_require__(7596);
// EXTERNAL MODULE: ./src/assets/images/collection/collection-4.jpg
var collection_4 = __webpack_require__(2050);
;// CONCATENATED MODULE: ./src/assets/images/collection/collection-5.jpg
/* harmony default export */ const collection_5 = ({"src":"/_next/static/media/collection-5.0f331391.jpg","height":48,"width":48,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAK4u/8QAHhAAAQIHAQAAAAAAAAAAAAAAAgEDAAQFERMVcdH/2gAIAQEAAT8AdOobZgbtjK416a+pH//EABoRAAICAwAAAAAAAAAAAAAAAAIDAAESE0L/2gAIAQIBAT8AQwj2ZcsIan//xAAaEQACAgMAAAAAAAAAAAAAAAABAgADERNC/9oACAEDAQE/ALkVNeOqwTP/2Q=="});
;// CONCATENATED MODULE: ./src/assets/images/collection/collection-6.jpg
/* harmony default export */ const collection_6 = ({"src":"/_next/static/media/collection-6.c8c14afe.jpg","height":48,"width":48,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABAEBAAAAAAAAAAAAAAAAAAAABv/aAAwDAQACEAMQAAAAmBt9/8QAHBAAAwABBQAAAAAAAAAAAAAAAQIRBAADITFB/9oACAEBAAE/AGOYMlLtOqFzyZGWdj23X//EABkRAAIDAQAAAAAAAAAAAAAAABEhAAECMf/aAAgBAgEBPwDTCCrk/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAEQMhQf/aAAgBAwEBPwDFYD2xa3Y75P/Z"});
;// CONCATENATED MODULE: ./src/data/static/collections.tsx



















const collections = [
    {
        id: 1,
        name: "Artbyck",
        slug: "nft-details",
        title: "Intutive Motion",
        cover_image: _1,
        number_of_artwork: 3,
        image: collection_1/* default */.Z,
        user: {
            avatar: avatar_4/* default */.Z,
            name: "Cameronwilliamson",
            slug: "cameronwilliamson"
        }
    },
    {
        id: 2,
        name: "Artbyck",
        slug: "nft-details",
        title: "Intutive Motion",
        cover_image: _2,
        number_of_artwork: 3,
        image: collection_2/* default */.Z,
        user: {
            avatar: avatar_2/* default */.Z,
            name: "Cameronwilliamson",
            slug: "cameronwilliamson"
        }
    },
    {
        id: 3,
        name: "Artbyck",
        slug: "nft-details",
        title: "Intutive Motion",
        cover_image: _3,
        number_of_artwork: 3,
        image: collection_3/* default */.Z,
        user: {
            avatar: avatar_3/* default */.Z,
            name: "Cameronwilliamson",
            slug: "cameronwilliamson"
        }
    },
    {
        id: 4,
        name: "Artbyck",
        slug: "nft-details",
        title: "Intutive Motion",
        cover_image: _4,
        number_of_artwork: 3,
        image: collection_4/* default */.Z,
        user: {
            avatar: avatar_1/* default */.Z,
            name: "Cameronwilliamson",
            slug: "cameronwilliamson"
        }
    },
    {
        id: 5,
        name: "Artbyck",
        slug: "nft-details",
        title: "Intutive Motion",
        cover_image: _5,
        number_of_artwork: 3,
        image: collection_5,
        user: {
            avatar: avatar_6/* default */.Z,
            name: "Cameronwilliamson",
            slug: "cameronwilliamson"
        }
    },
    {
        id: 6,
        name: "Artbyck",
        slug: "nft-details",
        title: "Intutive Motion",
        cover_image: _6,
        number_of_artwork: 3,
        image: collection_6,
        user: {
            avatar: avatar_1/* default */.Z,
            name: "Cameronwilliamson",
            slug: "cameronwilliamson"
        }
    },
    {
        id: 7,
        name: "Artbyck",
        slug: "nft-details",
        title: "Intutive Motion",
        cover_image: _7,
        number_of_artwork: 3,
        image: collection_2/* default */.Z,
        user: {
            avatar: avatar_4/* default */.Z,
            name: "Cameronwilliamson",
            slug: "cameronwilliamson"
        }
    },
    {
        id: 8,
        name: "Artbyck",
        slug: "nft-details",
        title: "Intutive Motion",
        cover_image: _8,
        number_of_artwork: 3,
        image: collection_1/* default */.Z,
        user: {
            avatar: avatar_2/* default */.Z,
            name: "Cameronwilliamson",
            slug: "cameronwilliamson"
        }
    }, 
];


/***/ }),

/***/ 2086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* reexport */ (useCopyToClipboard_default()))
});

;// CONCATENATED MODULE: external "react-use/lib/useCopyToClipboard"
const useCopyToClipboard_namespaceObject = require("react-use/lib/useCopyToClipboard");
var useCopyToClipboard_default = /*#__PURE__*/__webpack_require__.n(useCopyToClipboard_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/hooks/use-copy-to-clipboard.ts



/***/ }),

/***/ 3316:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_hooks_use_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2086);
/* harmony import */ var _layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9292);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9535);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3879);
/* harmony import */ var _components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3813);
/* harmony import */ var _components_icons_copy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4804);
/* harmony import */ var _components_icons_check__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3869);
/* harmony import */ var _components_author_author_information__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3078);
/* harmony import */ var _components_profile_profile_tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5633);
/* harmony import */ var _data_static_author__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__, _components_profile_profile_tab__WEBPACK_IMPORTED_MODULE_11__]);
([_layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__, _components_profile_profile_tab__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// static data

const getStaticProps = async ()=>{
    return {
        props: {}
    };
};
const AuthorProfilePage = ()=>{
    const address = "0x9Af568442868356c7aE834A4761462d9F5B87e9b";
    let { 0: copyButtonStatus , 1: setCopyButtonStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    let [_, copyToClipboard] = (0,_lib_hooks_use_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__/* .useCopyToClipboard */ .m)();
    const handleCopyToClipboard = ()=>{
        copyToClipboard(address);
        setCopyButtonStatus(true);
        setTimeout(()=>{
            setCopyButtonStatus(copyButtonStatus);
        }, 2500);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: "Profile",
                description: "Criptic - React Next Web3 NFT Crypto Dashboard Template"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative h-36 w-full overflow-hidden rounded-lg sm:h-44 md:h-64 xl:h-80 2xl:h-96 3xl:h-[448px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            src: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.cover_image?.thumbnail,
                            placeholder: "blur",
                            layout: "fill",
                            objectFit: "cover",
                            alt: "Cover Image"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mx-auto flex w-full shrink-0 flex-col md:px-4 xl:px-6 3xl:max-w-[1700px] 3xl:px-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative z-10 mx-auto -mt-12 h-24 w-24 shrink-0 overflow-hidden rounded-full border-[5px] border-white shadow-large dark:border-gray-500 sm:-mt-14 sm:h-28 sm:w-28 md:mx-0 md:-mt-16 md:h-32 md:w-32 xl:mx-0 3xl:-mt-20 3xl:h-40 3xl:w-40 3xl:border-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    src: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.avatar?.thumbnail,
                                    placeholder: "blur",
                                    layout: "fill",
                                    objectFit: "cover",
                                    className: "rounded-full",
                                    alt: "Author"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex w-full flex-col pt-4 md:flex-row md:pt-10 lg:flex-row xl:pt-12",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "shrink-0 border-dashed border-gray-200 dark:border-gray-700 md:w-72 ltr:md:border-r md:ltr:pr-7 rtl:md:border-l md:rtl:pl-7 lg:ltr:pr-10 lg:rtl:pl-10 xl:ltr:pr-14 xl:rtl:pl-14 2xl:w-80 3xl:w-96 3xl:ltr:pr-16 3xl:rtl:pl-16",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center ltr:md:text-left rtl:md:text-right",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                        className: "text-xl font-medium tracking-tighter text-gray-900 dark:text-white xl:text-2xl",
                                                        children: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.name
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-1 text-sm font-medium tracking-tighter text-gray-600 dark:text-gray-400 xl:mt-3",
                                                        children: [
                                                            "@",
                                                            _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.user_name
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "mt-5 inline-flex h-9 items-center rounded-full bg-white shadow-card dark:bg-light-dark xl:mt-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "inline-flex h-full shrink-0 grow-0 items-center rounded-full bg-gray-900 px-4 text-xs text-white sm:text-sm",
                                                                children: [
                                                                    "#",
                                                                    _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.id
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text w-28 grow-0 truncate text-ellipsis bg-center text-xs text-gray-500 ltr:pl-4 rtl:pr-4 dark:text-gray-300 sm:w-32 sm:text-sm",
                                                                children: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.wallet_key
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex cursor-pointer items-center px-4 text-gray-500 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
                                                                title: "Copy Address",
                                                                onClick: handleCopyToClipboard,
                                                                children: copyButtonStatus ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_check__WEBPACK_IMPORTED_MODULE_9__/* .Check */ .J, {
                                                                    className: "h-auto w-3.5 text-green-500"
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_copy__WEBPACK_IMPORTED_MODULE_8__/* .Copy */ .C, {
                                                                    className: "h-auto w-3.5"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mt-10 flex flex-wrap items-center justify-center gap-6 border-y border-dashed border-gray-200 py-5 text-center dark:border-gray-700 md:justify-start ltr:md:text-left rtl:md:text-right xl:mt-12 xl:gap-8 xl:py-6",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mb-1.5 text-lg font-medium tracking-tighter text-gray-900 dark:text-white",
                                                                children: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.following
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-sm tracking-tighter text-gray-600 dark:text-gray-400",
                                                                children: "Following"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mb-1.5 text-lg font-medium tracking-tighter text-gray-900 dark:text-white",
                                                                children: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.followers
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text-sm tracking-tighter text-gray-600 dark:text-gray-400",
                                                                children: "Followers"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        color: "white",
                                                        className: "shadow-card dark:bg-light-dark md:h-10 md:px-5 xl:h-12 xl:px-7",
                                                        children: "Follow"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "border-y border-dashed border-gray-200 py-5 text-center dark:border-gray-700 ltr:md:text-left rtl:md:text-right xl:py-6",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mb-2 text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white",
                                                        children: "Followed by"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-center md:justify-start",
                                                        children: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t?.followed_by?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                href: "/",
                                                                className: "relative -ml-2 h-8 w-8 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-card first:ml-0 dark:border-gray-500",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                    src: item?.avatar?.thumbnail,
                                                                    height: 28,
                                                                    width: 28,
                                                                    className: "rounded-full",
                                                                    alt: item?.name
                                                                })
                                                            }, item?.id))
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "mt-4",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_anchor_link__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                            href: "/",
                                                            className: "text-sm tracking-tighter text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
                                                            children: "View All"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_author_author_information__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                className: "hidden md:block",
                                                data: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "grow pt-6 pb-9 md:-mt-2.5 md:pt-1.5 md:pb-0 md:ltr:pl-7 md:rtl:pr-7 lg:ltr:pl-10 lg:rtl:pr-10 xl:ltr:pl-14 xl:rtl:pr-14 3xl:ltr:pl-16 3xl:rtl:pr-16",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_profile_tab__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_author_author_information__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        data: _data_static_author__WEBPACK_IMPORTED_MODULE_12__/* .authorData */ .t
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorProfilePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

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

/***/ 1324:
/***/ ((module) => {

module.exports = require("react-use/lib/factory/createBreakpoint");

/***/ }),

/***/ 302:
/***/ ((module) => {

module.exports = require("react-use/lib/useClickAway");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,292,36,177,731,22], () => (__webpack_exec__(3316)));
module.exports = __webpack_exports__;

})();