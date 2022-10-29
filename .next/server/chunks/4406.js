"use strict";
exports.id = 4406;
exports.ids = [4406];
exports.modules = {

/***/ 5136:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems),
/* harmony export */   "default": () => (/* binding */ DrawerMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9201);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9535);
/* harmony import */ var _components_ui_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3008);
/* harmony import */ var _components_ui_transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6604);
/* harmony import */ var _components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2565);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7024);
/* harmony import */ var _components_icons_chevron_forward__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2440);
/* harmony import */ var _components_icons_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7577);
/* harmony import */ var _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5054);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_5__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_10__]);
([_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__, _components_ui_transition__WEBPACK_IMPORTED_MODULE_5__, _components_drawer_views_context__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MenuLinks = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Explore",
        dropDownItems: [
            {
                name: "Farms",
                href: "/farms"
            },
            {
                name: "Swap",
                href: "/swap"
            },
            {
                name: "Liquidity",
                href: "/liquidity"
            }, 
        ]
    },
    {
        name: "NFT",
        dropDownItems: [
            {
                name: "Explore NFT",
                href: "/search"
            },
            {
                name: "Create NFT",
                href: "/create-nft"
            },
            {
                name: "NFT details",
                href: "/nft-details"
            }, 
        ]
    },
    {
        name: "Vote",
        href: "/vote"
    }, 
];
function MenuItems() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center xl:px-10 2xl:px-14 3xl:px-24",
        children: MenuLinks.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: item.dropDownItems ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative mx-4 first:ml-0 last:mr-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu */ .v, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Button */ .v.Button, {
                                className: "text-sm font-medium uppercase text-gray-600 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
                                children: item.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 translate-y-4",
                                enterTo: "opacity-100 translate-y-0",
                                leave: "ease-in duration-300",
                                leaveFrom: "opacity-100 translate-y-0",
                                leaveTo: "opacity-0 translate-y-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Items */ .v.Items, {
                                    className: "absolute left-0 mt-5 w-64 origin-top-right rounded-lg bg-white p-3 shadow-large dark:bg-gray-900",
                                    children: item.dropDownItems.map((dropDownItem, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v.Item, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                href: dropDownItem.href,
                                                className: "block rounded-lg px-3 py-2 text-sm font-medium uppercase text-gray-900 transition hover:bg-gray-50 dark:text-white dark:hover:bg-gray-700",
                                                activeClassName: "!bg-gray-100 dark:!bg-gray-800 my-1 last:mb-0 first:mt-0",
                                                children: dropDownItem.name
                                            })
                                        }, index))
                                })
                            })
                        ]
                    })
                }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    href: item.href,
                    className: "mx-4 text-sm font-medium uppercase text-gray-600 transition first:ml-0 last:mr-0 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white",
                    activeClassName: "text-gray-900",
                    children: item.name
                }, index)
            }))
    });
}
function DrawerMenu() {
    const { closeDrawer  } = (0,_components_drawer_views_context__WEBPACK_IMPORTED_MODULE_10__/* .useDrawer */ .y)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative w-full max-w-full bg-white dark:bg-dark xs:w-80",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex h-24 items-center justify-between overflow-hidden px-6 py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            title: "Close",
                            color: "white",
                            shape: "circle",
                            variant: "transparent",
                            size: "small",
                            onClick: closeDrawer,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_close__WEBPACK_IMPORTED_MODULE_9__/* .Close */ .x, {
                                className: "h-auto w-2.5"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                style: {
                    height: "calc(100% - 96px)"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col px-6 pb-16 sm:pb-20",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu */ .v, {
                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Button */ .v.Button, {
                                            className: "flex items-center justify-between border-t border-dashed py-3.5 text-justify text-sm font-medium uppercase text-gray-900 transition first:border-t-0 hover:text-gray-900 dark:text-white dark:hover:text-white",
                                            children: [
                                                "Explore",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_forward__WEBPACK_IMPORTED_MODULE_8__/* .ChevronForward */ .Q, {
                                                    className: `ml-3 transition-transform ${open ? "rotate-90" : ""}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                            enter: "ease-in-out duration-200",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leave: "ease-in-out duration-200",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Items */ .v.Items, {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v.Item, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            href: "/",
                                                            className: "mb-3.5 flex items-center text-sm font-normal uppercase text-gray-600 before:mr-3.5 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-gray-600 dark:text-gray-400 dark:before:bg-gray-400 dark:hover:text-white",
                                                            activeClassName: "!text-gray-900 dark:!text-white dark:before:!bg-white before:!bg-gray-900 before:scale-125",
                                                            children: "Collection"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v.Item, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            href: "/profile",
                                                            className: "mb-3.5 flex items-center text-sm font-normal uppercase text-gray-600 before:mr-3.5 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-gray-600 dark:text-gray-400 dark:before:bg-gray-400 dark:hover:text-white",
                                                            activeClassName: "!text-gray-900 dark:!text-white dark:before:!bg-white before:!bg-gray-900 before:scale-125",
                                                            children: "Trending"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v.Item, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            href: "/",
                                                            className: "mb-3.5 flex items-center text-sm font-normal uppercase text-gray-600 before:mr-3.5 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-gray-600 dark:text-gray-400 dark:before:bg-gray-400 dark:hover:text-white",
                                                            activeClassName: "!text-gray-900 dark:!text-white dark:before:!bg-white before:!bg-gray-900 before:scale-125",
                                                            children: "Browse"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "/",
                            className: "border-t border-dashed py-3.5 text-sm font-medium uppercase text-gray-900 transition first:border-t-0 hover:text-gray-900 dark:border-gray-700 dark:text-white",
                            activeClassName: "text-gray-900 dark:text-white",
                            children: "Feed"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "/",
                            className: "border-t border-dashed py-3.5 text-sm font-medium uppercase text-gray-900 transition first:border-t-0 hover:text-gray-900 dark:border-gray-700 dark:text-white",
                            activeClassName: "text-gray-900 dark:text-white",
                            children: "Activity"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu */ .v, {
                            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Button */ .v.Button, {
                                            className: "flex items-center justify-between border-t border-dashed py-3.5 text-justify text-sm font-medium uppercase text-gray-900 transition first:border-t-0 hover:text-gray-900 dark:border-gray-700 dark:text-white dark:hover:text-white",
                                            children: [
                                                "Account",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_chevron_forward__WEBPACK_IMPORTED_MODULE_8__/* .ChevronForward */ .Q, {
                                                    className: `ml-3 transition-transform ${open ? "rotate-90" : ""}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_transition__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                            enter: "ease-in-out duration-200",
                                            enterFrom: "opacity-0",
                                            enterTo: "opacity-100",
                                            leave: "ease-in-out duration-200",
                                            leaveFrom: "opacity-100",
                                            leaveTo: "opacity-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Items */ .v.Items, {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v.Item, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            href: "/",
                                                            className: "mb-3.5 flex items-center text-sm font-normal uppercase text-gray-600 before:mr-3.5 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-gray-600 dark:text-gray-400 dark:before:bg-gray-400 dark:hover:text-white",
                                                            activeClassName: "!text-gray-900 dark:!text-white dark:before:!bg-white before:!bg-gray-900 before:scale-125",
                                                            children: "View profile"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v.Item, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            href: "/",
                                                            className: "mb-3.5 flex items-center text-sm font-normal uppercase text-gray-600 before:mr-3.5 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-gray-600 dark:text-gray-400 dark:before:bg-gray-400 dark:hover:text-white",
                                                            activeClassName: "!text-gray-900 dark:!text-white dark:before:!bg-white before:!bg-gray-900 before:scale-125",
                                                            children: "settings"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v.Item, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            href: "/",
                                                            className: "mb-3.5 flex items-center text-sm font-normal uppercase text-gray-600 before:mr-3.5 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-gray-600 dark:text-gray-400 dark:before:bg-gray-400 dark:hover:text-white",
                                                            activeClassName: "!text-gray-900 dark:!text-white dark:before:!bg-white before:!bg-gray-900 before:scale-125",
                                                            children: "help"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_menu__WEBPACK_IMPORTED_MODULE_4__/* .Menu.Item */ .v.Item, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            href: "/",
                                                            className: "mb-3.5 flex items-center text-sm font-normal uppercase text-gray-600 before:mr-3.5 before:block before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-gray-600 dark:text-gray-400 dark:before:bg-gray-400 dark:hover:text-white",
                                                            activeClassName: "!text-gray-900 dark:!text-white dark:before:!bg-white before:!bg-gray-900 before:scale-125",
                                                            children: "Disconnect"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_links_active_link__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            href: "/",
                            className: "border-t border-dashed py-3.5 text-sm font-medium uppercase text-gray-900 transition first:border-t-0 hover:text-gray-900 dark:border-gray-700 dark:text-white",
                            activeClassName: "text-gray-900 dark:text-white",
                            children: "Notification"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute left-0 bottom-4 z-10 w-full px-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    fullWidth: true,
                    children: "Connect"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;