(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  components: {
    BBreadcrumb: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBreadcrumb"],
    BBreadcrumbItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBreadcrumbItem"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  setup: function setup() {
    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    return {
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/app-auto-suggest/useAutoSuggest */ "./resources/js/src/@core/components/app-auto-suggest/useAutoSuggest.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search-and-bookmark-data */ "./resources/js/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BNavbarNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BNavItem"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BTooltip"],
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BNavItemDropdown"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BFormInput"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5___default.a,
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__["BDropdownItem"]
  },
  setup: function setup() {
    var searchAndBookmarkDataPages = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["ref"])(_search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_10__["default"].pages);
    var bookmarks = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["ref"])(_search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_10__["default"].pages.data.filter(function (page) {
      return page.isBookmarked;
    }));
    var currentSelected = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["ref"])(-1);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60
    };
    var userData = Object(_auth_utils__WEBPACK_IMPORTED_MODULE_11__["getUserData"])();

    var _useAutoSuggest = Object(_core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_6__["default"])({
      data: {
        pages: searchAndBookmarkDataPages.value
      },
      searchLimit: 6
    }),
        searchQuery = _useAutoSuggest.searchQuery,
        resetsearchQuery = _useAutoSuggest.resetsearchQuery,
        filteredData = _useAutoSuggest.filteredData;

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["watch"])(searchQuery, function (val) {
      _store__WEBPACK_IMPORTED_MODULE_9__["default"].commit('app/TOGGLE_OVERLAY', Boolean(val));
    });
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["watch"])(filteredData, function (val) {
      currentSelected.value = val.pages && !val.pages.length ? -1 : 0;
    });

    var suggestionSelected = function suggestionSelected() {
      var suggestion = filteredData.value.pages[currentSelected.value];
      _router__WEBPACK_IMPORTED_MODULE_8__["default"].push(suggestion.route)["catch"](function () {});
      resetsearchQuery();
    };

    var toggleBookmarked = function toggleBookmarked(item) {
      // Find Index of item/page in bookmarks' array
      var pageIndexInBookmarks = bookmarks.value.findIndex(function (i) {
        return i.route === item.route;
      }); // If index is > -1 => Item is bookmarked => Remove item from bookmarks array using index
      // Else => Item is not bookmarked => Add item to bookmarks' array

      if (pageIndexInBookmarks > -1) {
        bookmarks.value[pageIndexInBookmarks].isBookmarked = false;
        bookmarks.value.splice(pageIndexInBookmarks, 1);
      } else {
        bookmarks.value.push(item);
        bookmarks.value[bookmarks.value.length - 1].isBookmarked = true;
      }
    };

    return {
      bookmarks: bookmarks,
      perfectScrollbarSettings: perfectScrollbarSettings,
      currentSelected: currentSelected,
      suggestionSelected: suggestionSelected,
      toggleBookmarked: toggleBookmarked,
      // AutoSuggest
      searchQuery: searchQuery,
      resetsearchQuery: resetsearchQuery,
      filteredData: filteredData,
      userData: userData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavItem"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        skin = _useAppConfig.skin;

    var isDark = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return skin.value === 'dark';
    });
    return {
      skin: skin,
      isDark: isDark
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _libs_acl_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/acl/config */ "./resources/js/src/libs/acl/config.js");
/* harmony import */ var _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/auth/jwt/useJwt */ "./resources/js/src/auth/jwt/useJwt.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/filter */ "./resources/js/src/@core/utils/filter.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"]
  },
  data: function data() {
    return {
      userData: Object(_auth_utils__WEBPACK_IMPORTED_MODULE_4__["getUserData"])(),
      // userData: JSON.parse(localStorage.getItem('userData')),
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_3__["avatarText"]
    };
  },
  methods: {
    logout: function logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__["default"].jwtConfig.storageTokenKeyName);
      localStorage.removeItem(_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__["default"].jwtConfig.storageRefreshTokenKeyName); // Remove userData from localStorage

      localStorage.removeItem('userData'); // Reset ability

      this.$ability.update(_libs_acl_config__WEBPACK_IMPORTED_MODULE_1__["initialAbility"]); // Redirect to login page

      this.$router.push({
        name: 'auth-login'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _components_vertical_nav_menu_items_VerticalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vertical-nav-menu-items/VerticalNavMenuItems.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue");
/* harmony import */ var _useVerticalNavMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useVerticalNavMenu */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    VerticalNavMenuItems: _components_vertical_nav_menu_items_VerticalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true
    },
    navMenuItems: {
      type: Array,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenu = Object(_useVerticalNavMenu__WEBPACK_IMPORTED_MODULE_6__["default"])(props),
        isMouseHovered = _useVerticalNavMenu.isMouseHovered,
        isVerticalMenuCollapsed = _useVerticalNavMenu.isVerticalMenuCollapsed,
        collapseTogglerIcon = _useVerticalNavMenu.collapseTogglerIcon,
        toggleCollapsed = _useVerticalNavMenu.toggleCollapsed,
        updateMouseHovered = _useVerticalNavMenu.updateMouseHovered;

    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        skin = _useAppConfig.skin; // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`


    var shallShadowBottom = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["provide"])('isMouseHovered', isMouseHovered);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    var collapseTogglerIconFeather = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return collapseTogglerIcon.value === 'unpinned' ? 'CircleIcon' : 'DiscIcon';
    }); // App Name

    var _$themeConfig$app = _themeConfig__WEBPACK_IMPORTED_MODULE_4__["$themeConfig"].app,
        appName = _$themeConfig$app.appName,
        appLogoImage = _$themeConfig$app.appLogoImage,
        appLogoImageWhite = _$themeConfig$app.appLogoImageWhite,
        appLogoIcon = _$themeConfig$app.appLogoIcon,
        appLogoIconWhite = _$themeConfig$app.appLogoIconWhite;
    return {
      perfectScrollbarSettings: perfectScrollbarSettings,
      isVerticalMenuCollapsed: isVerticalMenuCollapsed,
      collapseTogglerIcon: collapseTogglerIcon,
      toggleCollapsed: toggleCollapsed,
      isMouseHovered: isMouseHovered,
      updateMouseHovered: updateMouseHovered,
      collapseTogglerIconFeather: collapseTogglerIconFeather,
      // Shadow Bottom
      shallShadowBottom: shallShadowBottom,
      // Skin
      skin: skin,
      // App Name
      appName: appName,
      appLogoImage: appLogoImage,
      appLogoImageWhite: appLogoImageWhite,
      appLogoIcon: appLogoIcon
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");
/* harmony import */ var _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-nav-menu-header */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js");
/* harmony import */ var _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vertical-nav-menu-link/VerticalNavMenuLink.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue");
/* harmony import */ var _useVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useVerticalNavMenuGroup */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js");
/* harmony import */ var _mixinVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixinVerticalNavMenuGroup */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // Composition Function



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VerticalNavMenuGroup',
  components: {
    VerticalNavMenuHeader: _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_4__["default"],
    VerticalNavMenuLink: _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"]
  },
  mixins: [_mixinVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenuGr = Object(_useVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__["default"])(props.item),
        isOpen = _useVerticalNavMenuGr.isOpen,
        isActive = _useVerticalNavMenuGr.isActive,
        updateGroupOpen = _useVerticalNavMenuGr.updateGroupOpen,
        updateIsActive = _useVerticalNavMenuGr.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_3__["useUtils"])(),
        canViewVerticalNavMenuGroup = _useAclUtils.canViewVerticalNavMenuGroup;

    return {
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["resolveVerticalNavMenuItemComponent"],
      isOpen: isOpen,
      isActive: isActive,
      updateGroupOpen: updateGroupOpen,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuGroup: canViewVerticalNavMenuGroup,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vertical-nav-menu-header */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js");
/* harmony import */ var _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vertical-nav-menu-link/VerticalNavMenuLink.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue");
/* harmony import */ var _vertical_nav_menu_group_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-nav-menu-group/VerticalNavMenuGroup.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue");
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VerticalNavMenuHeader: _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    VerticalNavMenuLink: _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VerticalNavMenuGroup: _vertical_nav_menu_group_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup: function setup() {
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["provide"])('openGroups', Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]));
    return {
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["resolveVerticalNavMenuItemComponent"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _useVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useVerticalNavMenuLink */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js");
/* harmony import */ var _mixinVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixinVerticalNavMenuLink */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  mixins: [_mixinVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenuLi = Object(_useVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item),
        isActive = _useVerticalNavMenuLi.isActive,
        linkProps = _useVerticalNavMenuLi.linkProps,
        updateIsActive = _useVerticalNavMenuLi.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_0__["useUtils"])(),
        canViewVerticalNavMenuLink = _useAclUtils.canViewVerticalNavMenuLink;

    return {
      isActive: isActive,
      linkProps: linkProps,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuLink: canViewVerticalNavMenuLink,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ul[data-v-acb23946] {\n  list-style: none;\n}[dir] ul[data-v-acb23946] {\n  padding: 0;\n  margin: 0;\n}\n[dir] p[data-v-acb23946] {\n  margin: 0;\n}\n.nav-bookmar-content-overlay[data-v-acb23946] {\n  position: fixed;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  transition: all 0.7s;\n  z-index: -1;\n}\n[dir] .nav-bookmar-content-overlay[data-v-acb23946] {\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: all 0.7s;\n}\n[dir=ltr] .nav-bookmar-content-overlay[data-v-acb23946] {\n  left: 0;\n  right: 0;\n}\n[dir=rtl] .nav-bookmar-content-overlay[data-v-acb23946] {\n  right: 0;\n  left: 0;\n}\n.nav-bookmar-content-overlay[data-v-acb23946]:not(.show) {\n  pointer-events: none;\n}\n.nav-bookmar-content-overlay.show[data-v-acb23946] {\n  z-index: 10;\n  opacity: 1;\n}\n[dir] .nav-bookmar-content-overlay.show[data-v-acb23946] {\n  cursor: pointer;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*=========================================================================================\n    File Name: vertical-menu.scss\n    Description: A classic vertical modern style menu with expand and collops support. It support\n    light & dark version, flipped layout, right side icons, native scroll and borders menu\n    item separation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-layout.vertical-menu-modern .main-menu {\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  backface-visibility: hidden;\n}\n[dir] .vertical-layout.vertical-menu-modern .main-menu {\n  transform: translate3d(0, 0, 0);\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a {\n  align-items: center;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n  flex-shrink: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg, [dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  margin-right: 1.1rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg, [dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  margin-left: 1.1rem;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  font-size: 11px;\n  height: 11px;\n  width: 11px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg, [dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-right: 1.45rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg, [dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-left: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > i:before,\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > svg:before {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n  transform: rotate(0deg);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(-90deg);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-left: 260px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-right: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  width: 80px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: right;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded {\n  width: 260px;\n  z-index: 1000;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle {\n  display: block;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav {\n  left: 80px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav {\n  right: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle {\n  display: none;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-left: 2.2rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-right: 2.2rem;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal {\n  display: block;\n  font-size: 1.285rem;\n  width: 18px;\n  height: 18px;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child {\n  margin-bottom: 1.25rem !important;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  color: #565656;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  background: whitesmoke;\n  box-shadow: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header span {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  transform: rotate(0deg);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(-90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text {\n  display: inline;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation {\n  overflow: visible;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li.navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li > a {\n  text-overflow: inherit;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-left: 80px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-right: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav {\n  width: calc(100vw - (100vw - 100%) - 4.4rem - 74px);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  width: calc(100vw - (100vw - 100%) - 74px);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  left: 74px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  right: 74px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .toggle-icon, [dir=ltr] .vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-right: 0.425rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .toggle-icon, [dir=rtl] .vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-left: 0.425rem;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus {\n  outline: none;\n}\n@media (min-width: 992px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 260px;\n}\n}\n@media (max-width: 1199.98px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n}\n.vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .content, [dir=ltr] .vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .content, [dir=rtl] .vertical-layout.vertical-menu-modern .footer {\n    margin-right: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-right: 0;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n    width: 0;\n}\n}\n@media (max-width: 767.98px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n}\n.vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .content, [dir=ltr] .vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .content, [dir=rtl] .vertical-layout.vertical-menu-modern .footer {\n    margin-right: 0;\n}\n}\n@keyframes fadein {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadeout {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n[dir=ltr] .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    animation: none;\n}\n[dir=rtl] .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    animation: none;\n}\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .vertical-overlay-menu .content {\n  margin-left: 0;\n}\n[dir=rtl] .vertical-overlay-menu .content {\n  margin-right: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  width: 260px;\n}\n[dir=ltr] .vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .navbar .navbar-header {\n  float: right;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n}\n[dir] .vertical-overlay-menu .main-menu, [dir] .vertical-overlay-menu.menu-hide .main-menu {\n  transform: translate3d(0, 0, 0);\n}\n[dir=ltr] .vertical-overlay-menu .main-menu, [dir=ltr] .vertical-overlay-menu.menu-hide .main-menu {\n  left: -260px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu, [dir=rtl] .vertical-overlay-menu.menu-hide .main-menu {\n  right: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-left: 14px;\n  float: right;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  transform: rotate(0deg);\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(-90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu.menu-open .main-menu {\n  transform: translate3d(260px, 0, 0);\n}\n[dir=rtl] .vertical-overlay-menu.menu-open .main-menu {\n  transform: translate3d(-260px, 0, 0);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
    ? _c(
        "b-row",
        { staticClass: "content-header" },
        [
          _c(
            "b-col",
            {
              staticClass: "content-header-left mb-2",
              attrs: { cols: "12", md: "9" },
            },
            [
              _c(
                "b-row",
                { staticClass: "breadcrumbs-top" },
                [
                  _c("b-col", { attrs: { cols: "12" } }, [
                    _c(
                      "h2",
                      {
                        staticClass:
                          "content-header-title float-left pr-1 mb-0",
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.t(_vm.$route.meta.pageTitle)) +
                            "\n          "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "breadcrumb-wrapper" },
                      [
                        _c(
                          "b-breadcrumb",
                          [
                            _c(
                              "b-breadcrumb-item",
                              { attrs: { to: "/" } },
                              [
                                _c("feather-icon", {
                                  staticClass: "align-text-top",
                                  attrs: { icon: "HomeIcon", size: "16" },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.$route.meta.breadcrumb, function (item) {
                              return _c(
                                "b-breadcrumb-item",
                                {
                                  key: item.text,
                                  attrs: { active: item.active, to: item.to },
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.t(item.text)) +
                                      "\n              "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", { staticClass: "clearfix mb-0" }, [
    _c(
      "span",
      { staticClass: "float-md-left d-block d-md-inline-block mt-25" },
      [
        _vm._v(
          "\n    COPYRIGHT  © " + _vm._s(new Date().getFullYear()) + "\n    "
        ),
        _c(
          "b-link",
          {
            staticClass: "ml-25",
            attrs: { href: "https://www.uping.co.uk", target: "_blank" },
          },
          [_vm._v("UPING")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "d-none d-sm-inline-block" }, [
          _vm._v(", All rights Reserved"),
        ]),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "float-md-right d-none d-md-block" },
      [
        _vm._v("Hand-crafted & Made with\n    "),
        _c("feather-icon", {
          staticClass: "text-danger stroke-current",
          attrs: { icon: "HeartIcon", size: "21" },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=acb23946&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=acb23946&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-navbar-nav",
    { staticClass: "nav" },
    [
      _vm._l(_vm.bookmarks, function (bookmark, index) {
        return _vm.userData.is_admin == 1
          ? _c(
              "b-nav-item",
              {
                key: index,
                attrs: { id: "bookmark-" + index, to: bookmark.route },
              },
              [
                _vm.userData.is_admin == 1
                  ? _c("feather-icon", {
                      attrs: { icon: bookmark.icon, size: "21" },
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("b-tooltip", {
                  attrs: {
                    triggers: "hover",
                    target: "bookmark-" + index,
                    title: bookmark.title,
                    delay: { show: 1000, hide: 50 },
                  },
                }),
              ],
              1
            )
          : _vm._e()
      }),
      _vm._v(" "),
      _vm.userData.is_admin == 1
        ? _c(
            "b-nav-item-dropdown",
            {
              attrs: { "link-classes": "bookmark-star", lazy: "" },
              on: { hidden: _vm.resetsearchQuery },
            },
            [
              _c("feather-icon", {
                staticClass: "text-warning",
                attrs: { slot: "button-content", icon: "StarIcon", size: "21" },
                slot: "button-content",
              }),
              _vm._v(" "),
              _c(
                "li",
                { staticStyle: { "min-width": "300px" } },
                [
                  _c(
                    "div",
                    { staticClass: "p-1" },
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "boomark-search-input",
                          placeholder: "Explore UPING...",
                          autofocus: "",
                        },
                        model: {
                          value: _vm.searchQuery,
                          callback: function ($$v) {
                            _vm.searchQuery = $$v
                          },
                          expression: "searchQuery",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      staticClass:
                        "search-list search-list-bookmark scroll-area",
                      class: {
                        show:
                          _vm.filteredData.pages &&
                          _vm.filteredData.pages.length,
                      },
                      attrs: {
                        settings: _vm.perfectScrollbarSettings,
                        tagname: "ul",
                      },
                    },
                    [
                      _vm._l(
                        _vm.filteredData.pages || _vm.bookmarks,
                        function (suggestion, index) {
                          return _c(
                            "b-dropdown-item",
                            {
                              key: index,
                              staticClass:
                                "suggestion-group-suggestion cursor-pointer",
                              attrs: {
                                "link-class": "d-flex align-items-center",
                                to: suggestion.route,
                              },
                              on: {
                                mouseenter: function ($event) {
                                  _vm.currentSelected = index
                                },
                              },
                            },
                            [
                              _c("feather-icon", {
                                staticClass: "mr-75",
                                attrs: { icon: suggestion.icon, size: "18" },
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "align-middle" }, [
                                _vm._v(_vm._s(suggestion.title)),
                              ]),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass: "ml-auto",
                                class: {
                                  "text-warning": suggestion.isBookmarked,
                                },
                                attrs: { icon: "StarIcon", size: "16" },
                                on: {
                                  click: function ($event) {
                                    $event.stopPropagation()
                                    $event.preventDefault()
                                    return _vm.toggleBookmarked(suggestion)
                                  },
                                },
                              }),
                            ],
                            1
                          )
                        }
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                !(
                                  _vm.filteredData.pages &&
                                  _vm.filteredData.pages.length
                                ) && _vm.searchQuery,
                              expression:
                                "!(filteredData.pages && filteredData.pages.length) && searchQuery",
                            },
                          ],
                          attrs: { disabled: "" },
                        },
                        [_vm._v("\n          No Results Found.\n        ")]
                      ),
                    ],
                    2
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-nav-item",
    {
      on: {
        click: function ($event) {
          _vm.skin = _vm.isDark ? "light" : "dark"
        },
      },
    },
    [
      _c("feather-icon", {
        attrs: { size: "21", icon: (_vm.isDark ? "Sun" : "Moon") + "Icon" },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=75d5934c&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=75d5934c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-user",
      attrs: {
        right: "",
        "toggle-class": "d-flex align-items-center dropdown-user-link",
      },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function () {
            return [
              _c("div", { staticClass: "d-sm-flex d-none user-nav" }, [
                _c("p", { staticClass: "user-name font-weight-bolder mb-0" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.userData.fullName || _vm.userData.username) +
                      "\n      "
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "user-status" },
                  [
                    _c(
                      "b-badge",
                      { attrs: { variant: "light-success", pill: "" } },
                      [_c("small", [_vm._v(_vm._s(_vm.userData.name))])]
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-avatar",
                {
                  staticClass: "badge-minimal",
                  attrs: {
                    size: "40",
                    src: _vm.userData.avatar,
                    variant: "light-primary",
                    badge: "",
                    "badge-variant": "success",
                  },
                },
                [
                  !_vm.userData.fullName
                    ? _c("feather-icon", {
                        attrs: { icon: "UserIcon", size: "22" },
                      })
                    : _vm._e(),
                ],
                1
              ),
            ]
          },
          proxy: true,
        },
      ]),
    },
    [
      _vm._v(" "),
      _vm.userData.is_admin == 1
        ? _c(
            "b-dropdown-item",
            {
              attrs: {
                to: { name: "admin-account-setting" },
                "link-class": "d-flex align-items-center",
              },
            },
            [
              _c("feather-icon", {
                staticClass: "mr-50",
                attrs: { size: "16", icon: "UserIcon" },
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Profile")]),
            ],
            1
          )
        : _c(
            "b-dropdown-item",
            {
              attrs: {
                to: { name: "partner-account-setting" },
                "link-class": "d-flex align-items-center",
              },
            },
            [
              _c("feather-icon", {
                staticClass: "mr-50",
                attrs: { size: "16", icon: "UserIcon" },
              }),
              _vm._v(" "),
              _c("span", [_vm._v("Profile")]),
            ],
            1
          ),
      _vm._v(" "),
      _c("b-dropdown-divider"),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: { "link-class": "d-flex align-items-center" },
          on: { click: _vm.logout },
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "LogOutIcon" },
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Logout")]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass,
      ],
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content-wrapper",
          class: _vm.contentWidth === "boxed" ? "container p-0" : null,
        },
        [
          _vm._t("breadcrumb", function () {
            return [_c("app-breadcrumb")]
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-body" },
            [
              _c(
                "transition",
                { attrs: { name: _vm.routerTransition, mode: "out-in" } },
                [_vm._t("default")],
                2
              ),
            ],
            1
          ),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass,
      ],
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(
            "div",
            {
              staticClass: "content-area-wrapper",
              class: _vm.contentWidth === "boxed" ? "container p-0" : null,
            },
            [
              _vm._t("breadcrumb", function () {
                return [_c("app-breadcrumb")]
              }),
              _vm._v(" "),
              _c("portal-target", {
                attrs: { name: "content-renderer-sidebar-left", slim: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "content-right" }, [
                _c("div", { staticClass: "content-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "content-body" },
                    [_vm._t("default")],
                    2
                  ),
                ]),
              ]),
            ],
            2
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass,
      ],
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(
            "div",
            {
              staticClass: "content-wrapper clearfix",
              class: _vm.contentWidth === "boxed" ? "container p-0" : null,
            },
            [
              _vm._t("breadcrumb", function () {
                return [_c("app-breadcrumb")]
              }),
              _vm._v(" "),
              _c("div", { staticClass: "content-detached content-right" }, [
                _c("div", { staticClass: "content-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "content-body" },
                    [_vm._t("default")],
                    2
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("portal-target", {
                attrs: {
                  name: "content-renderer-sidebar-detached-left",
                  slim: "",
                },
              }),
            ],
            2
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "main-menu menu-fixed menu-accordion menu-shadow",
      class: [
        {
          expanded:
            !_vm.isVerticalMenuCollapsed ||
            (_vm.isVerticalMenuCollapsed && _vm.isMouseHovered),
        },
        _vm.skin === "light" || _vm.skin === "bordered"
          ? "menu-light"
          : "menu-dark",
      ],
      on: {
        mouseenter: function ($event) {
          return _vm.updateMouseHovered(true)
        },
        mouseleave: function ($event) {
          return _vm.updateMouseHovered(false)
        },
      },
    },
    [
      _c(
        "div",
        { staticClass: "navbar-header expanded" },
        [
          _vm._t(
            "header",
            function () {
              return [
                _c("ul", { staticClass: "nav navbar-nav flex-row" }, [
                  _c(
                    "li",
                    { staticClass: "nav-item mr-auto" },
                    [
                      _c(
                        "b-link",
                        { staticClass: "navbar-brand", attrs: { to: "/" } },
                        [
                          _c("span", { staticClass: "brand-logo" }),
                          _vm._v(" "),
                          _c(
                            "h2",
                            { staticClass: "brand-text" },
                            [
                              _vm.skin === "light"
                                ? _c("b-img", {
                                    attrs: {
                                      src: _vm.appLogoImage,
                                      alt: "logo",
                                      width: "115",
                                      height: "32",
                                    },
                                  })
                                : _vm.skin === "dark"
                                ? _c("b-img", {
                                    attrs: {
                                      src: _vm.appLogoImageWhite,
                                      alt: "logo",
                                      width: "115",
                                      height: "32",
                                    },
                                  })
                                : _vm._e(),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item nav-toggle" },
                    [
                      _c(
                        "b-link",
                        { staticClass: "nav-link modern-nav-toggle" },
                        [
                          _c("feather-icon", {
                            staticClass: "d-block d-xl-none",
                            attrs: { icon: "XIcon", size: "20" },
                            on: { click: _vm.toggleVerticalMenuActive },
                          }),
                          _vm._v(" "),
                          _c("feather-icon", {
                            staticClass:
                              "d-none d-xl-block collapse-toggle-icon",
                            attrs: {
                              icon: _vm.collapseTogglerIconFeather,
                              size: "20",
                            },
                            on: { click: _vm.toggleCollapsed },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ]
            },
            {
              toggleVerticalMenuActive: _vm.toggleVerticalMenuActive,
              toggleCollapsed: _vm.toggleCollapsed,
              collapseTogglerIcon: _vm.collapseTogglerIcon,
            }
          ),
        ],
        2
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "shadow-bottom",
        class: { "d-block": _vm.shallShadowBottom },
      }),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "main-menu-content scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings, tagname: "ul" },
          on: {
            "ps-scroll-y": function (evt) {
              _vm.shallShadowBottom = evt.srcElement.scrollTop > 0
            },
          },
        },
        [
          _c("vertical-nav-menu-items", {
            staticClass: "navigation navigation-main",
            attrs: { items: _vm.navMenuItems },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canViewVerticalNavMenuGroup(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item has-sub",
          class: {
            open: _vm.isOpen,
            disabled: _vm.item.disabled,
            "sidebar-group-active": _vm.isActive,
          },
        },
        [
          _c(
            "b-link",
            {
              staticClass: "d-flex align-items-center",
              on: {
                click: function () {
                  return _vm.updateGroupOpen(!_vm.isOpen)
                },
              },
            },
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title text-truncate" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title))),
              ]),
              _vm._v(" "),
              _vm.item.tag
                ? _c(
                    "b-badge",
                    {
                      staticClass: "mr-1 ml-auto",
                      attrs: {
                        pill: "",
                        variant: _vm.item.tagVariant || "primary",
                      },
                    },
                    [_vm._v("\n      " + _vm._s(_vm.item.tag) + "\n    ")]
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            {
              staticClass: "menu-content",
              attrs: { tag: "ul" },
              model: {
                value: _vm.isOpen,
                callback: function ($$v) {
                  _vm.isOpen = $$v
                },
                expression: "isOpen",
              },
            },
            _vm._l(_vm.item.children, function (child) {
              return _c(_vm.resolveNavItemComponent(child), {
                key: child.header || child.title,
                ref: "groupChild",
                refInFor: true,
                tag: "component",
                attrs: { item: child },
              })
            }),
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    _vm._l(_vm.items, function (item) {
      return _c(_vm.resolveNavItemComponent(item), {
        key: item.header || item.title,
        tag: "component",
        attrs: { item: item },
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canViewVerticalNavMenuLink(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item",
          class: {
            active: _vm.isActive,
            disabled: _vm.item.disabled,
          },
        },
        [
          _c(
            "b-link",
            _vm._b(
              { staticClass: "d-flex align-items-center" },
              "b-link",
              _vm.linkProps,
              false
            ),
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title text-truncate" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title))),
              ]),
              _vm._v(" "),
              _vm.item.tag
                ? _c(
                    "b-badge",
                    {
                      staticClass: "mr-1 ml-auto",
                      attrs: {
                        pill: "",
                        variant: _vm.item.tagVariant || "primary",
                      },
                    },
                    [_vm._v("\n      " + _vm._s(_vm.item.tag) + "\n    ")]
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/@core/components/app-auto-suggest/useAutoSuggest.js":
/*!******************************************************************************!*\
  !*** ./resources/js/src/@core/components/app-auto-suggest/useAutoSuggest.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAutoSuggest; });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");










function useAutoSuggest(props) {
  var filteredData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_9__["ref"])({});
  /**
   * Filter group against provided query
   * Grp Structure:
   * {
   *    key: 'title',
   *    data: [
   *      title: 'Admin', img: 'someImage.png',
   *      title: 'Template', img: 'otherImage.png',
   *    ]
   * }
   * @param {Object} grp Group object to perform filter on
   * @param {String} query Query string to filter
   */

  var filterGrp = function filterGrp(grp, query) {
    var exactEle = grp.data.filter(function (item) {
      return item[grp.key].toLowerCase().startsWith(query.toLowerCase());
    });
    var containEle = grp.data.filter( // prettier-ignore
    function (item) {
      return !item[grp.key].toLowerCase().startsWith(query.toLowerCase()) && item[grp.key].toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    return exactEle.concat(containEle).slice(0, props.searchLimit);
  };

  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_9__["ref"])('');

  var resetsearchQuery = function resetsearchQuery() {
    searchQuery.value = '';
  };

  var handleSearchQueryUpdate = function handleSearchQueryUpdate(val) {
    if (val === '') {
      filteredData.value = {};
    } else {
      var queriedData = {};
      var dataGrps = Object.keys(props.data);
      dataGrps.forEach(function (grp, i) {
        queriedData[dataGrps[i]] = filterGrp(props.data[grp], val);
      });
      filteredData.value = queriedData;
    }
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_9__["watch"])(searchQuery, function (val) {
    return handleSearchQueryUpdate(val);
  });
  return {
    searchQuery: searchQuery,
    resetsearchQuery: resetsearchQuery,
    filteredData: filteredData
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppBreadcrumb.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBreadcrumb.vue?vue&type=template&id=0c43242a& */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a&");
/* harmony import */ var _AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBreadcrumb.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/AppBreadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBreadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBreadcrumb.vue?vue&type=template&id=0c43242a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppFooter.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppFooter.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=3448057c& */ "./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=3448057c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bookmarks_vue_vue_type_template_id_acb23946_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=template&id=acb23946&scoped=true& */ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=acb23946&scoped=true&");
/* harmony import */ var _Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Bookmarks_vue_vue_type_style_index_0_id_acb23946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true& */ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bookmarks_vue_vue_type_template_id_acb23946_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bookmarks_vue_vue_type_template_id_acb23946_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "acb23946",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_acb23946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=acb23946&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_acb23946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_acb23946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_acb23946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_acb23946_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=acb23946&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=acb23946&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_acb23946_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=template&id=acb23946&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=acb23946&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_acb23946_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_acb23946_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkToggler.vue?vue&type=template&id=81eb8db0& */ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0&");
/* harmony import */ var _DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarkToggler.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkToggler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkToggler.vue?vue&type=template&id=81eb8db0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDropdown_vue_vue_type_template_id_75d5934c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDropdown.vue?vue&type=template&id=75d5934c& */ "./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=75d5934c&");
/* harmony import */ var _UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDropdown.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDropdown_vue_vue_type_template_id_75d5934c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDropdown_vue_vue_type_template_id_75d5934c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=75d5934c&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=75d5934c& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_75d5934c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDropdown.vue?vue&type=template&id=75d5934c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=75d5934c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_75d5934c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_75d5934c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// prettier-ignore
/* harmony default export */ __webpack_exports__["default"] = ({
  pages: {
    key: 'title',
    data: [{
      title: 'Calendar App',
      route: {
        name: 'apps-calendar'
      },
      icon: 'CalendarIcon',
      isBookmarked: true
    }, {
      title: 'UK Leads',
      route: {
        name: 'apps-uk-lead-list'
      },
      icon: 'FilterIcon',
      isBookmarked: true
    }, {
      title: 'US Leads',
      route: {
        name: 'apps-us-lead-list'
      },
      icon: 'FilterIcon',
      isBookmarked: true
    }, {
      title: 'Mappings',
      route: {
        name: 'apps-mapping-list'
      },
      icon: 'UserIcon',
      isBookmarked: true
    }, {
      title: 'Buyer',
      route: {
        name: 'apps-buyer-list'
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, // { title: 'Access Control', route: { name: 'access-control' }, icon: 'ShieldIcon', isBookmarked: false },
    // { title: 'Account Settings', route: { name: 'pages-account-setting' }, icon: 'SettingsIcon', isBookmarked: false },
    // { title: 'Advance Card', route: { name: 'card-advance' }, icon: 'CreditCardIcon', isBookmarked: false },
    // { title: 'Alerts', route: { name: 'components-alert' }, icon: 'AlertTriangleIcon', isBookmarked: false },
    // { title: 'Analytics Cards', route: { name: 'card-analytic' }, icon: 'CreditCardIcon', isBookmarked: false },
    // { title: 'Apex Chart', route: { name: 'charts-apex-chart' }, icon: 'PieChartIcon', isBookmarked: false },
    // { title: 'Aspect', route: { name: 'components-aspect' }, icon: 'AirplayIcon', isBookmarked: false },
    // { title: 'Auto Suggest', route: { name: 'extensions-auto-suggest' }, icon: 'AlignLeftIcon', isBookmarked: false },
    // { title: 'Avatar', route: { name: 'components-avatar' }, icon: 'UserIcon', isBookmarked: false },
    // { title: 'Badge', route: { name: 'components-badge' }, icon: 'TagIcon', isBookmarked: false },
    // { title: 'Basic Card', route: { name: 'card-basic' }, icon: 'CreditCardIcon', isBookmarked: false },
    // { title: 'Blog Detail', route: { name: 'pages-blog-detail', params: { id: 1 } }, icon: 'FileTextIcon', isBookmarked: false },
    // { title: 'Blog Edit', route: { name: 'pages-blog-edit', params: { id: 1 } }, icon: 'FileTextIcon', isBookmarked: false },
    // { title: 'Blog List', route: { name: 'pages-blog-list' }, icon: 'FileTextIcon', isBookmarked: false },
    // { title: 'Breadcrumb', route: { name: 'components-breadcrumb' }, icon: 'HomeIcon', isBookmarked: false },
    // { title: 'BS Table', route: { name: 'table-bs-table' }, icon: 'GridIcon', isBookmarked: false },
    // { title: 'Button Group', route: { name: 'components-button-group' }, icon: 'BoldIcon', isBookmarked: false },
    // { title: 'Button Toolbar', route: { name: 'components-button-toolbar' }, icon: 'BoldIcon', isBookmarked: false },
    // { title: 'Button', route: { name: 'components-button' }, icon: 'BoldIcon', isBookmarked: false },
    // { title: 'Calendar Component', route: { name: 'components-calendar' }, icon: 'CalendarIcon', isBookmarked: false },
    // { title: 'Card Actions', route: { name: 'card-action' }, icon: 'CreditCardIcon', isBookmarked: false },
    // { title: 'Carousel', route: { name: 'components-carousel' }, icon: 'CopyIcon', isBookmarked: false },
    // { title: 'Chartjs', route: { name: 'charts-chartjs' }, icon: 'PieChartIcon', isBookmarked: false },
    // { title: 'Chat', route: { name: 'apps-chat' }, icon: 'MessageSquareIcon', isBookmarked: false },
    // { title: 'Checkbox', route: { name: 'forms-element-checkbox' }, icon: 'CheckSquareIcon', isBookmarked: false },
    // { title: 'Checkout', route: { name: 'apps-e-commerce-checkout' }, icon: 'DollarSignIcon', isBookmarked: false },
    // { title: 'Clipboard', route: { name: 'extensions-clipboard' }, icon: 'ClipboardIcon', isBookmarked: false },
    // { title: 'Collapse', route: { name: 'components-collapse' }, icon: 'PlusIcon', isBookmarked: false },
    // { title: 'Colors', route: { name: 'ui-colors' }, icon: 'DropletIcon', isBookmarked: false },
    // { title: 'Coming Soon', route: { name: 'misc-coming-soon' }, icon: 'ClockIcon', isBookmarked: false },
    // { title: 'Context Menu', route: { name: 'extensions-context-menu' }, icon: 'MoreVerticalIcon', isBookmarked: false },
    // { title: 'Dashboard Analytics', route: { name: 'dashboard-analytics' }, icon: 'ActivityIcon', isBookmarked: false },
    // { title: 'Dashboard ECommerce', route: { name: 'dashboard-ecommerce' }, icon: 'ShoppingCartIcon', isBookmarked: false },
    // { title: 'Date Time Picker', route: { name: 'extensions-date-time-picker' }, icon: 'ClockIcon', isBookmarked: false },
    // { title: 'Drag & Drop', route: { name: 'extensions-drag-and-drop' }, icon: 'CopyIcon', isBookmarked: false },
    // { title: 'Dropdown', route: { name: 'components-dropdown' }, icon: 'MoreHorizontalIcon', isBookmarked: false },
    // { title: 'Echart', route: { name: 'charts-echart' }, icon: 'PieChartIcon', isBookmarked: false },
    // { title: 'Email', route: { name: 'apps-email' }, icon: 'MailIcon', isBookmarked: false },
    // { title: 'Embed', route: { name: 'components-embed' }, icon: 'TvIcon', isBookmarked: false },
    // { title: 'Error 404', route: { name: 'error-404' }, icon: 'AlertTriangleIcon', isBookmarked: false },
    // { title: 'Error', route: { name: 'misc-error' }, icon: 'AlertTriangleIcon', isBookmarked: false },
    // { title: 'FAQ', route: { name: 'pages-faq' }, icon: 'HelpCircleIcon', isBookmarked: false },
    // { title: 'Feather', route: { name: 'ui-feather' }, icon: 'FeatherIcon', isBookmarked: false },
    // { title: 'File Input', route: { name: 'forms-element-file-input' }, icon: 'FileIcon', isBookmarked: false },
    // { title: 'Forgot Password V1', route: { name: 'auth-forgot-password-v1' }, icon: 'KeyIcon', isBookmarked: false },
    // { title: 'Forgot Password V2', route: { name: 'auth-forgot-password-v2' }, icon: 'KeyIcon', isBookmarked: false },
    // { title: 'Form Datepicker', route: { name: 'forms-element-datepicker' }, icon: 'ClockIcon', isBookmarked: false },
    // { title: 'Form Layout', route: { name: 'form-layout' }, icon: 'GridIcon', isBookmarked: false },
    // { title: 'Form Rating', route: { name: 'forms-element-rating' }, icon: 'StarIcon', isBookmarked: false },
    // { title: 'Form Repeater', route: { name: 'form-repeater' }, icon: 'StarIcon', isBookmarked: false },
    // { title: 'Form Tag', route: { name: 'forms-element-tag' }, icon: 'TagIcon', isBookmarked: false },
    // { title: 'Form Timepicker', route: { name: 'forms-element-timepicker' }, icon: 'ClockIcon', isBookmarked: false },
    // { title: 'Form Validation', route: { name: 'form-validation' }, icon: 'CheckCircleIcon', isBookmarked: false },
    // { title: 'Form Wizard', route: { name: 'form-wizard' }, icon: 'GitCommitIcon', isBookmarked: false },
    // { title: 'Good Table', route: { name: 'table-good-table' }, icon: 'GridIcon', isBookmarked: false },
    // { title: 'I18n', route: { name: 'extensions-i18n' }, icon: 'GlobeIcon', isBookmarked: false },
    // { title: 'Image', route: { name: 'components-image' }, icon: 'ImageIcon', isBookmarked: false },
    // { title: 'Input Group', route: { name: 'forms-element-input-group' }, icon: 'TypeIcon', isBookmarked: false },
    // { title: 'Input Mask', route: { name: 'forms-element-input-mask' }, icon: 'TypeIcon', isBookmarked: false },
    // { title: 'Input', route: { name: 'forms-element-input' }, icon: 'TypeIcon', isBookmarked: false },
    {
      title: 'Invoice Add',
      route: {
        name: 'apps-invoice-add'
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice Edit',
      route: {
        name: 'apps-invoice-edit',
        params: {
          id: 4987
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice List',
      route: {
        name: 'apps-invoice-list'
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice Preview',
      route: {
        name: 'apps-invoice-preview',
        params: {
          id: 4987
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, // { title: 'Knowledge Base Category', route: { name: 'pages-knowledge-base-category' }, icon: 'InfoIcon', isBookmarked: false, },
    // { title: 'Knowledge Base Question', route: { name: 'pages-knowledge-base-question' }, icon: 'InfoIcon', isBookmarked: false, },
    // { title: 'Knowledge Base', route: { name: 'pages-knowledge-base' }, icon: 'InfoIcon', isBookmarked: false },
    // { title: 'Leaflet', route: { name: 'maps-leaflet' }, icon: 'MapPinIcon', isBookmarked: false },
    // { title: 'List Group', route: { name: 'components-list-group' }, icon: 'ListIcon', isBookmarked: false },
    // { title: 'Login V1', route: { name: 'auth-login-v1' }, icon: 'LogInIcon', isBookmarked: false },
    // { title: 'Login V2', route: { name: 'auth-login-v2' }, icon: 'LogInIcon', isBookmarked: false },
    // { title: 'Media Objects', route: { name: 'components-media' }, icon: 'ImageIcon', isBookmarked: false },
    // { title: 'Modal', route: { name: 'components-modal' }, icon: 'CopyIcon', isBookmarked: false },
    // { title: 'Nav', route: { name: 'components-nav' }, icon: 'CreditCardIcon', isBookmarked: false },
    // { title: 'Not Authorized', route: { name: 'misc-not-authorized' }, icon: 'XOctagonIcon', isBookmarked: false },
    // { title: 'Overlay', route: { name: 'components-overlay' }, icon: 'CopyIcon', isBookmarked: false },
    // { title: 'Pagination Nav', route: { name: 'components-pagination-nav' }, icon: 'HashIcon', isBookmarked: false },
    // { title: 'Pagination', route: { name: 'components-pagination' }, icon: 'HashIcon', isBookmarked: false },
    // { title: 'Pill Badge', route: { name: 'components-pill-badge' }, icon: 'TagIcon', isBookmarked: false },
    // { title: 'Pill', route: { name: 'components-pill' }, icon: 'TagIcon', isBookmarked: false },
    // { title: 'Popover', route: { name: 'components-popover' }, icon: 'TagIcon', isBookmarked: false },
    // { title: 'Pricing', route: { name: 'pages-pricing' }, icon: 'DollarSignIcon', isBookmarked: false },
    // { title: 'Product Details', route: { name: 'apps-e-commerce-product-details', params: { slug: 'apple-watch-series-5-27' } }, icon: 'BoxIcon', isBookmarked: false, },
    // { title: 'Profile', route: { name: 'pages-profile' }, icon: 'UserIcon', isBookmarked: false },
    // { title: 'Progress', route: { name: 'components-progress' }, icon: 'ChevronsRightIcon', isBookmarked: false },
    // { title: 'Quill Editor', route: { name: 'extensions-quill-editor' }, icon: 'TypeIcon', isBookmarked: false },
    // { title: 'Radio', route: { name: 'forms-element-radio' }, icon: 'DiscIcon', isBookmarked: false },
    // { title: 'Register V1', route: { name: 'auth-register-v1' }, icon: 'UserPlusIcon', isBookmarked: false },
    // { title: 'Register V2', route: { name: 'auth-register-v2' }, icon: 'UserPlusIcon', isBookmarked: false },
    // { title: 'Reset Password V1', route: { name: 'auth-reset-password-v1' }, icon: 'KeyIcon', isBookmarked: false },
    // { title: 'Reset Password V2', route: { name: 'auth-reset-password-v2' }, icon: 'KeyIcon', isBookmarked: false },
    // { title: 'Select', route: { name: 'forms-element-select' }, icon: 'AlignCenterIcon', isBookmarked: false },
    // { title: 'Shop', route: { name: 'apps-e-commerce-shop' }, icon: 'ArchiveIcon', isBookmarked: false },
    // { title: 'Sidebar', route: { name: 'components-sidebar' }, icon: 'SidebarIcon', isBookmarked: false },
    // { title: 'Slider', route: { name: 'extensions-slider' }, icon: 'GitCommitIcon', isBookmarked: false },
    // { title: 'Spinbutton', route: { name: 'forms-element-spinbutton' }, icon: 'TypeIcon', isBookmarked: false },
    // { title: 'Spinner', route: { name: 'components-spinner' }, icon: 'LoaderIcon', isBookmarked: false },
    // { title: 'Statistics Cards', route: { name: 'card-statistic' }, icon: 'CreditCardIcon', isBookmarked: false },
    // { title: 'Sweet Alert', route: { name: 'extensions-sweet-alert' }, icon: 'BellIcon', isBookmarked: false },
    // { title: 'Swiper', route: { name: 'extensions-swiper' }, icon: 'ImageIcon', isBookmarked: false },
    // { title: 'Switch', route: { name: 'forms-element-switch' }, icon: 'ToggleRightIcon', isBookmarked: false },
    // { title: 'Tab', route: { name: 'components-tab' }, icon: 'CreditCardIcon', isBookmarked: false },
    // { title: 'Textarea', route: { name: 'forms-element-textarea' }, icon: 'TypeIcon', isBookmarked: false },
    // { title: 'Time', route: { name: 'components-time' }, icon: 'ClockIcon', isBookmarked: false },
    // { title: 'Timeline', route: { name: 'components-timeline' }, icon: 'GitCommitIcon', isBookmarked: false },
    // { title: 'Toastification', route: { name: 'extensions-toastification' }, icon: 'BellIcon', isBookmarked: false },
    // { title: 'Toasts', route: { name: 'components-toasts' }, icon: 'BellIcon', isBookmarked: false },
    {
      title: 'Todo',
      route: {
        name: 'apps-todo'
      },
      icon: 'CheckSquareIcon',
      isBookmarked: false
    }, // { title: 'Tooltip', route: { name: 'components-tooltip' }, icon: 'CopyIcon', isBookmarked: false },
    // { title: 'Tour', route: { name: 'extensions-tour' }, icon: 'GlobeIcon', isBookmarked: false },
    // // { title: 'Tree', route: { name: 'extensions-tree' }, icon: 'GitCommitIcon', isBookmarked: false },
    // { title: 'Typography', route: { name: 'ui-typography' }, icon: 'TypeIcon', isBookmarked: false },
    // { title: 'Under Maintenance', route: { name: 'misc-under-maintenance' }, icon: 'MonitorIcon', isBookmarked: false },
    {
      title: 'Users Edit',
      route: {
        name: 'apps-users-edit',
        params: {
          id: 21
        }
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Users List',
      route: {
        name: 'apps-users-list'
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Users View',
      route: {
        name: 'apps-users-view',
        params: {
          id: 21
        }
      },
      icon: 'UserIcon',
      isBookmarked: false
    } // { title: 'Vue Select', route: { name: 'extensions-vue-select' }, icon: 'AlignCenterIcon', isBookmarked: false },
    // { title: 'Wishlist', route: { name: 'apps-e-commerce-wishlist' }, icon: 'HeartIcon', isBookmarked: false },
    ]
  },
  files: {
    key: 'file_name',
    data: [{
      file_name: "Joe's CV",
      from: 'Stacy Watson',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./resources/js/src/assets/images/icons/doc.png"),
      size: '1.7 mb'
    }, {
      file_name: 'Passport Image',
      from: 'Ben Sinitiere',
      icon: __webpack_require__(/*! @/assets/images/icons/jpg.png */ "./resources/js/src/assets/images/icons/jpg.png"),
      size: ' 52 kb'
    }, {
      file_name: 'Questions',
      from: 'Charleen Patti',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./resources/js/src/assets/images/icons/doc.png"),
      size: '1.5 gb'
    }, {
      file_name: 'Parenting Guide',
      from: 'Doyle Blatteau',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./resources/js/src/assets/images/icons/doc.png"),
      size: '2.3 mb'
    }, {
      file_name: 'Class Notes',
      from: 'Gwen Greenlow',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./resources/js/src/assets/images/icons/doc.png"),
      size: ' 30 kb'
    }, {
      file_name: 'Class Attendance',
      from: 'Tom Alred',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      size: '52 mb'
    }, {
      file_name: 'Company Salary',
      from: 'Nellie Dezan',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      size: '29 mb'
    }, {
      file_name: 'Company Logo',
      from: 'Steve Sheldon',
      icon: __webpack_require__(/*! @/assets/images/icons/jpg.png */ "./resources/js/src/assets/images/icons/jpg.png"),
      size: '1.3 mb'
    }, {
      file_name: 'Crime Rates',
      from: 'Sherlock Holmes',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      size: '37 kb'
    }, {
      file_name: 'Ulysses',
      from: 'Theresia Wrenne',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./resources/js/src/assets/images/icons/pdf.png"),
      size: '7.2 mb'
    }, {
      file_name: 'War and Peace',
      from: 'Goldie Highnote',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./resources/js/src/assets/images/icons/pdf.png"),
      size: '10.5 mb'
    }, {
      file_name: 'Vedas',
      from: 'Ajay Patel',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./resources/js/src/assets/images/icons/pdf.png"),
      size: '8.3 mb'
    }, {
      file_name: 'The Trial',
      from: 'Sirena Linkert',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./resources/js/src/assets/images/icons/pdf.png"),
      size: '1.5 mb'
    }]
  },
  contacts: {
    key: 'name',
    data: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
      name: 'Rena Brant',
      email: 'nephrod@preany.co.uk',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Mariano Packard',
      email: 'seek@sparaxis.org',
      time: '14/01/2018'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-24.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg"),
      name: 'Risa Montufar',
      email: 'vagary@unblist.org',
      time: '10/08/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-15.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg"),
      name: 'Maragaret Cimo',
      email: 'designed@insanely.net',
      time: '01/12/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      name: 'Jona Prattis',
      email: 'unwieldable@unblist.org',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
      name: 'Edmond Chicon',
      email: 'museist@anaphyte.co.uk',
      time: '15/11/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Abbey Darden',
      email: 'astema@defectively.co.uk',
      time: '07/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
      name: 'Seema Moallankamp',
      email: 'fernando@storkish.co.uk',
      time: '13/08/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Charleen Warmington',
      email: 'furphy@cannibal.net',
      time: '11/08/1891'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Geri Linch',
      email: 'insignia@markab.org',
      time: '18/01/2015'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Shellie Muster',
      email: 'maxillary@equalize.co.uk',
      time: '26/07/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg"),
      name: 'Jesenia Vanbramer',
      email: 'hypotony@phonetist.net',
      time: '12/09/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Mardell Channey',
      email: 'peseta@myrica.com',
      time: '11/11/2019'
    }]
  }
});
/* eslint-enable */

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24&");
/* harmony import */ var _LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac&");
/* harmony import */ var _LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererLeft.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88&");
/* harmony import */ var _LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=template&id=2f85298e& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e&");
/* harmony import */ var _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=template&id=2f85298e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54&");
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenuGroup; });
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");


// eslint-disable-next-line object-curly-newline



function useVerticalNavMenuGroup(item) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.verticalMenu.isVerticalMenuCollapsed;
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(isVerticalMenuCollapsed, function (val) {
    /* eslint-disable no-use-before-define */
    // * Handles case if routing is done outside of vertical menu
    // i.e. From Customizer Collapse or Using Link
    if (!isMouseHovered.value) {
      if (val) isOpen.value = false;else if (!val && isActive.value) isOpen.value = true;
    }
    /* eslint-enable */

  }); // ------------------------------------------------
  // isMouseHovered
  // ------------------------------------------------

  var isMouseHovered = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["inject"])('isMouseHovered'); // Collapse menu when menu is collapsed and show on open

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(isMouseHovered, function (val) {
    if (isVerticalMenuCollapsed.value) {
      // * we have used `val && val && isActive.value` to only open active menu on mouseEnter and close all menu on mouseLeave
      // * If we don't use `isActive.value` with `val` it can open other groups which are not active as well
      // eslint-disable-next-line no-use-before-define
      isOpen.value = val && isActive.value;
    }
  }); // ------------------------------------------------
  // openGroups
  // ------------------------------------------------

  var openGroups = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["inject"])('openGroups'); // Collapse other groups if one group is opened

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(openGroups, function (currentOpenGroups) {
    var clickedGroup = currentOpenGroups[currentOpenGroups.length - 1]; // If current group is not clicked group or current group is not active => Proceed with closing it
    // eslint-disable-next-line no-use-before-define

    if (clickedGroup !== item.title && !isActive.value) {
      // If clicked group is not child of current group
      // eslint-disable-next-line no-use-before-define
      if (!doesHaveChild(clickedGroup)) isOpen.value = false;
    }
  }); // ------------------------------------------------
  // isOpen
  // ------------------------------------------------

  var isOpen = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(isOpen, function (val) {
    // if group is opened push it to the array
    if (val) openGroups.value.push(item.title);
  });

  var updateGroupOpen = function updateGroupOpen(val) {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val;
  }; // ------------------------------------------------
  // isActive
  // ------------------------------------------------


  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(isActive, function (val) {
    /*
      If menu is collapsed and not hovered(optional) then don't open group
    */
    if (val) {
      if (!isVerticalMenuCollapsed.value) isOpen.value = val;
    } else {
      isOpen.value = val;
    }
  });

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_4__["isNavGroupActive"])(item.children);
  }; // ------------------------------------------------
  // Other Methods
  // ------------------------------------------------


  var doesHaveChild = function doesHaveChild(title) {
    return item.children.some(function (child) {
      return child.title === title;
    });
  };

  return {
    isOpen: isOpen,
    isActive: isActive,
    updateGroupOpen: updateGroupOpen,
    openGroups: openGroups,
    isMouseHovered: isMouseHovered,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");



var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["useUtils"])(),
    t = _useI18nUtils.t;

var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_1__["useUtils"])(),
    canViewVerticalNavMenuHeader = _useAclUtils.canViewVerticalNavMenuHeader;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  render: function render(h) {
    var span = h('span', {}, t(this.item.header));
    var icon = h('feather-icon', {
      props: {
        icon: 'MoreHorizontalIcon',
        size: '18'
      }
    });

    if (canViewVerticalNavMenuHeader(this.item)) {
      return h('li', {
        "class": 'navigation-header text-truncate'
      }, [span, icon]);
    }

    return h();
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuItems.vue?vue&type=template&id=4db36714& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714&");
/* harmony import */ var _VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuItems.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItems.vue?vue&type=template&id=4db36714& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8&");
/* harmony import */ var _VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuLink.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenuLink; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");


function useVerticalNavMenuLink(item) {
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  var linkProps = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["navLinkProps"])(item);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavLinkActive"])(item);
  };

  return {
    isActive: isActive,
    linkProps: linkProps,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenu; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");


function useVerticalNavMenu(props) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', val);
    }
  }); // ------------------------------------------------
  // collapseTogglerIcon
  // ------------------------------------------------

  var collapseTogglerIcon = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (props.isVerticalMenuActive) {
      return isVerticalMenuCollapsed.value ? 'unpinned' : 'pinned';
    }

    return 'close';
  });
  var isMouseHovered = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateMouseHovered = function updateMouseHovered(val) {
    isMouseHovered.value = val;
  };

  var toggleCollapsed = function toggleCollapsed() {
    isVerticalMenuCollapsed.value = !isVerticalMenuCollapsed.value;
  };

  return {
    isMouseHovered: isMouseHovered,
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    collapseTogglerIcon: collapseTogglerIcon,
    toggleCollapsed: toggleCollapsed,
    updateMouseHovered: updateMouseHovered
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/useVerticalLayout.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/useVerticalLayout.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalLayout; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");


function useVerticalLayout(navbarType, footerType) {
  var isVerticalMenuActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);

  var toggleVerticalMenuActive = function toggleVerticalMenuActive() {
    isVerticalMenuActive.value = !isVerticalMenuActive.value;
  };

  var currentBreakpoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('xl');
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
  });
  var layoutClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var classes = [];

    if (currentBreakpoint.value === 'xl') {
      classes.push('vertical-menu-modern');
      classes.push(isVerticalMenuCollapsed.value ? 'menu-collapsed' : 'menu-expanded');
    } else {
      classes.push('vertical-overlay-menu');
      classes.push(isVerticalMenuActive.value ? 'menu-open' : 'menu-hide');
    } // Navbar


    classes.push("navbar-".concat(navbarType.value)); // Footer

    if (footerType.value === 'sticky') classes.push('footer-fixed');
    if (footerType.value === 'static') classes.push('footer-static');
    if (footerType.value === 'hidden') classes.push('footer-hidden');
    return classes;
  }); // ------------------------------------------------
  // Resize handler for Breakpoint
  // ------------------------------------------------

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(currentBreakpoint, function (val) {
    isVerticalMenuActive.value = val === 'xl';
  });

  var resizeHandler = function resizeHandler() {
    // ? This closes vertical menu when title bar is shown/hidden in mobile browsers.
    // ? We will watch for breakpoint to overcome this issue
    // isVerticalMenuActive.value = window.innerWidth >= 1200
    // ! You can use store getter to get breakpoint
    if (window.innerWidth >= 1200) currentBreakpoint.value = 'xl';else if (window.innerWidth >= 992) currentBreakpoint.value = 'lg';else if (window.innerWidth >= 768) currentBreakpoint.value = 'md';else if (window.innerWidth >= 576) currentBreakpoint.value = 'sm';else currentBreakpoint.value = 'xs';
  };

  var overlayClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (currentBreakpoint.value !== 'xl' && isVerticalMenuActive.value) return 'show';
    return null;
  });
  var navbarTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (navbarType.value === 'sticky') return 'fixed-top';
    if (navbarType.value === 'static') return 'navbar-static-top';
    if (navbarType.value === 'hidden') return 'd-none';
    return 'floating-nav';
  });
  var footerTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (footerType.value === 'static') return 'footer-static';
    if (footerType.value === 'hidden') return 'd-none';
    return '';
  });
  return {
    isVerticalMenuActive: isVerticalMenuActive,
    toggleVerticalMenuActive: toggleVerticalMenuActive,
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    layoutClasses: layoutClasses,
    overlayClasses: overlayClasses,
    navbarTypeClass: navbarTypeClass,
    footerTypeClass: footerTypeClass,
    resizeHandler: resizeHandler
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/utils.js":
/*!*************************************************!*\
  !*** ./resources/js/src/@core/layouts/utils.js ***!
  \*************************************************/
/*! exports provided: resolveVerticalNavMenuItemComponent, resolveHorizontalNavMenuItemComponent, resolveNavDataRouteName, isNavLinkActive, isNavGroupActive, navLinkProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVerticalNavMenuItemComponent", function() { return resolveVerticalNavMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHorizontalNavMenuItemComponent", function() { return resolveHorizontalNavMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveNavDataRouteName", function() { return resolveNavDataRouteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavLinkActive", function() { return isNavLinkActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavGroupActive", function() { return isNavGroupActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navLinkProps", function() { return navLinkProps; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/utils */ "./resources/js/src/@core/utils/utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");






/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */

var resolveVerticalNavMenuItemComponent = function resolveVerticalNavMenuItemComponent(item) {
  if (item.header) return 'vertical-nav-menu-header';
  if (item.children) return 'vertical-nav-menu-group';
  return 'vertical-nav-menu-link';
};
/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */

var resolveHorizontalNavMenuItemComponent = function resolveHorizontalNavMenuItemComponent(item) {
  if (item.children) return 'horizontal-nav-menu-group';
  return 'horizontal-nav-menu-link';
};
/**
 * Return route name for navigation link
 * If link is string then it will assume it is route-name
 * IF link is object it will resolve the object and will return the link
 * @param {Object, String} link navigation link object/string
 */

var resolveNavDataRouteName = function resolveNavDataRouteName(link) {
  if (Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_4__["isObject"])(link.route)) {
    var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(link.route),
        route = _router$resolve.route;

    return route.name;
  }

  return link.route;
};
/**
 * Check if nav-link is active
 * @param {Object} link nav-link object
 */

var isNavLinkActive = function isNavLinkActive(link) {
  // Matched routes array of current route
  var matchedRoutes = _router__WEBPACK_IMPORTED_MODULE_3__["default"].currentRoute.matched; // Check if provided route matches route's matched route

  var resolveRoutedName = resolveNavDataRouteName(link);
  if (!resolveRoutedName) return false;
  return matchedRoutes.some(function (route) {
    return route.name === resolveRoutedName || route.meta.navActiveLink === resolveRoutedName;
  });
};
/**
 * Check if nav group is
 * @param {Array} children Group children
 */

var isNavGroupActive = function isNavGroupActive(children) {
  // Matched routes array of current route
  var matchedRoutes = _router__WEBPACK_IMPORTED_MODULE_3__["default"].currentRoute.matched;
  return children.some(function (child) {
    // If child have children => It's group => Go deeper(recursive)
    if (child.children) {
      return isNavGroupActive(child.children);
    } // else it's link => Check for matched Route


    return isNavLinkActive(child, matchedRoutes);
  });
};
/**
 * Return b-link props to use
 * @param {Object, String} item navigation routeName or route Object provided in navigation data
 */
// prettier-ignore

var navLinkProps = function navLinkProps(item) {
  return Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["computed"])(function () {
    var props = {}; // If route is string => it assumes => Create route object from route name
    // If route is not string => It assumes it's route object => returns route object

    if (item.route) props.to = typeof item.route === 'string' ? {
      name: item.route
    } : item.route;else {
      props.href = item.href;
      props.target = '_blank';
      props.rel = 'nofollow';
    }
    if (!props.target) props.target = item.target || null;
    return props;
  });
};

/***/ }),

/***/ "./resources/js/src/@core/libs/acl/index.js":
/*!**************************************************!*\
  !*** ./resources/js/src/@core/libs/acl/index.js ***!
  \**************************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/libs/acl/utils.js");


var useUtils = function useUtils() {
  return Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils__WEBPACK_IMPORTED_MODULE_1__);
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/@core/libs/acl/utils.js":
/*!**************************************************!*\
  !*** ./resources/js/src/@core/libs/acl/utils.js ***!
  \**************************************************/
/*! exports provided: can, canViewVerticalNavMenuLink, canViewVerticalNavMenuGroup, canViewVerticalNavMenuHeader, canViewHorizontalNavMenuLink, canViewHorizontalNavMenuHeaderLink, canViewHorizontalNavMenuGroup, canViewHorizontalNavMenuHeaderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "can", function() { return can; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuLink", function() { return canViewVerticalNavMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuGroup", function() { return canViewVerticalNavMenuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuHeader", function() { return canViewVerticalNavMenuHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuLink", function() { return canViewHorizontalNavMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuHeaderLink", function() { return canViewHorizontalNavMenuHeaderLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuGroup", function() { return canViewHorizontalNavMenuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuHeaderGroup", function() { return canViewHorizontalNavMenuHeaderGroup; });
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



/**
 * Returns ability result if ACL is configured or else just return true
 * Useful if you don't know if ACL is configured or not
 * Used in @core files to handle absence of ACL without errors
 * @param {String} action CASL Actions // https://casl.js.org/v4/en/guide/intro#basics
 * @param {String} subject CASL Subject // https://casl.js.org/v4/en/guide/intro#basics
 */

var can = function can(action, subject) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["getCurrentInstance"])().proxy;
  return vm.$can ? vm.$can(action, subject) : true;
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewVerticalNavMenuLink = function canViewVerticalNavMenuLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style

var canViewVerticalNavMenuGroup = function canViewVerticalNavMenuGroup(item) {
  // ! This same logic is used in canViewHorizontalNavMenuGroup and canViewHorizontalNavMenuHeaderGroup. So make sure to update logic in them as well
  var hasAnyVisibleChild = item.children.some(function (i) {
    return can(i.action, i.resource);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewVerticalNavMenuHeader = function canViewVerticalNavMenuHeader(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewHorizontalNavMenuLink = function canViewHorizontalNavMenuLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewHorizontalNavMenuHeaderLink = function canViewHorizontalNavMenuHeaderLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style

var canViewHorizontalNavMenuGroup = function canViewHorizontalNavMenuGroup(item) {
  // ? Same logic as canViewVerticalNavMenuGroup
  var hasAnyVisibleChild = item.children.some(function (i) {
    return can(i.action, i.resource);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
}; // eslint-disable-next-line arrow-body-style

var canViewHorizontalNavMenuHeaderGroup = function canViewHorizontalNavMenuHeaderGroup(item) {
  // ? Same logic as canViewVerticalNavMenuGroup but with extra content
  // eslint-disable-next-line arrow-body-style
  var hasAnyVisibleChild = item.children.some(function (grpOrItem) {
    // If it have children => It's grp
    // Call ACL function based on grp/link
    return grpOrItem.children ? canViewHorizontalNavMenuGroup(grpOrItem) : canViewHorizontalNavMenuLink(grpOrItem);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
};

/***/ }),

/***/ "./resources/js/src/@core/libs/i18n/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/@core/libs/i18n/index.js ***!
  \***************************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/libs/i18n/utils.js");


var useUtils = function useUtils() {
  return Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils__WEBPACK_IMPORTED_MODULE_1__);
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/@core/libs/i18n/utils.js":
/*!***************************************************!*\
  !*** ./resources/js/src/@core/libs/i18n/utils.js ***!
  \***************************************************/
/*! exports provided: t, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");

/**
 * Returns translated string if i18n package is available to Vue
 * If i18n is not configured then it will simply return what is being passed
 * Useful if you don't know if i18n is configured or not
 * Used in @core files to handle absence of i18n without errors
 * @param {String} key i18n key to use for translation
 */

var t = function t(key) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])().proxy;
  return vm.$t ? vm.$t(key) : key;
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/@core/utils/filter.js":
/*!************************************************!*\
  !*** ./resources/js/src/@core/utils/filter.js ***!
  \************************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/utils/utils.js");














var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./resources/js/src/@core/utils/utils.js":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/utils/utils.js ***!
  \***********************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var _Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_3__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./resources/js/src/assets/images/icons/jpg.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/jpg.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/master-uping-new/resources/js/src/assets/images/icons/jpg.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/pdf.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/pdf.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/master-uping-new/resources/js/src/assets/images/icons/pdf.png";

/***/ }),

/***/ "./resources/js/src/navigation/vertical/advertisers.js":
/*!*************************************************************!*\
  !*** ./resources/js/src/navigation/vertical/advertisers.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Advertisers List'
}, {
  title: 'Advertisers',
  icon: 'UsersIcon',
  children: [{
    title: 'List',
    route: 'apps-advertiser-list'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/buyers.js":
/*!********************************************************!*\
  !*** ./resources/js/src/navigation/vertical/buyers.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Buyers List'
}, {
  title: 'Buyers',
  icon: 'UsersIcon',
  children: [{
    title: 'List',
    route: 'apps-buyers-list'
  }]
}, {
  title: 'Buyer Tiers',
  icon: 'ListIcon',
  children: [{
    title: 'List',
    route: 'apps-buyer-tier-list'
  }]
}, {
  title: 'Filters',
  icon: 'FilterIcon',
  children: [{
    title: 'List',
    route: 'apps-buyer-filter-list'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/dashboard.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/navigation/vertical/dashboard.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Dashboard',
  icon: 'HomeIcon',
  children: [{
    title: 'Leads',
    children: [{
      title: 'UK',
      route: 'admin-dashboard-leads-uk' // meta: { requiresAuth: true }

    }, {
      title: 'USA',
      route: 'admin-dashboard-leads-us'
    }]
  }, {
    title: 'Offer',
    route: 'dashboard-offer'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/navigation/vertical/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard */ "./resources/js/src/navigation/vertical/dashboard.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users */ "./resources/js/src/navigation/vertical/users.js");
/* harmony import */ var _partners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partners */ "./resources/js/src/navigation/vertical/partners.js");
/* harmony import */ var _buyers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buyers */ "./resources/js/src/navigation/vertical/buyers.js");
/* harmony import */ var _advertisers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advertisers */ "./resources/js/src/navigation/vertical/advertisers.js");
/* harmony import */ var _leads__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./leads */ "./resources/js/src/navigation/vertical/leads.js");
/* harmony import */ var _offers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offers */ "./resources/js/src/navigation/vertical/offers.js");
/* harmony import */ var _reports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reports */ "./resources/js/src/navigation/vertical/reports.js");
/* harmony import */ var _techarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./techarea */ "./resources/js/src/navigation/vertical/techarea.js");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapping */ "./resources/js/src/navigation/vertical/mapping.js");
/* harmony import */ var _invoices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./invoices */ "./resources/js/src/navigation/vertical/invoices.js");



/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/










 // Array of sections

/* harmony default export */ __webpack_exports__["default"] = ([].concat(Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_dashboard__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_users__WEBPACK_IMPORTED_MODULE_3__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_buyers__WEBPACK_IMPORTED_MODULE_5__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_partners__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_mapping__WEBPACK_IMPORTED_MODULE_11__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_advertisers__WEBPACK_IMPORTED_MODULE_6__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_leads__WEBPACK_IMPORTED_MODULE_7__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_reports__WEBPACK_IMPORTED_MODULE_9__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_offers__WEBPACK_IMPORTED_MODULE_8__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_invoices__WEBPACK_IMPORTED_MODULE_12__["default"]), Object(_Users_tomjameson_PhpstormProjects_uping_master_master_uping_new_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_techarea__WEBPACK_IMPORTED_MODULE_10__["default"])));

/***/ }),

/***/ "./resources/js/src/navigation/vertical/invoices.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/navigation/vertical/invoices.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Finance'
}, {
  title: 'Invoices',
  icon: 'UserIcon',
  children: [{
    title: 'List',
    route: 'apps-invoice-list'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/leads.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/navigation/vertical/leads.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Leads'
}, {
  title: 'Lead',
  icon: 'TrendingUpIcon',
  children: [{
    title: 'UK',
    route: 'apps-uk-lead-list'
  }, {
    title: 'USA',
    route: 'apps-us-lead-list'
  }, {
    title: 'CA',
    route: 'apps-ca-lead-list'
  }, {
    title: 'CF',
    route: 'apps-cf-lead-list'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/mapping.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/navigation/vertical/mapping.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Mapping'
}, {
  title: 'Mappings',
  icon: 'ActivityIcon',
  children: [{
    title: 'List',
    route: 'apps-mapping-list'
  }]
}, {
  title: 'Postbacks',
  icon: 'ActivityIcon',
  children: [{
    title: 'List',
    route: 'apps-postback-list'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/offers.js":
/*!********************************************************!*\
  !*** ./resources/js/src/navigation/vertical/offers.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Offers'
}, {
  title: 'Offer',
  icon: 'ListIcon',
  children: [{
    title: 'List',
    route: 'apps-admin-offers'
  }, {
    title: 'Create',
    route: 'apps-admin-offer-add'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/partners.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/navigation/vertical/partners.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Partner List'
}, {
  title: 'Partners',
  icon: 'UsersIcon',
  children: [{
    title: 'List',
    route: 'apps-admin-partner-list'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/reports.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/navigation/vertical/reports.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Reports'
}, {
  title: 'Report',
  icon: 'BarChartIcon',
  tagVariant: 'light-warning',
  children: [{
    title: 'UK Reports',
    route: 'apps-admin-report-uk-list' // meta: { requiresAuth: true }

  }, {
    title: 'US Reports',
    route: 'apps-admin-report-us-list' // meta: { requiresAuth: true }

  }, {
    title: 'Click Reports',
    route: 'apps-admin-report-offer-list' // meta: { requiresAuth: true }

  }, {
    title: 'Referral Reports',
    route: 'apps-admin-report-referral-list' // meta: { requiresAuth: true }

  }, {
    title: 'Postback Reports',
    route: 'apps-admin-report-postback-list' // meta: { requiresAuth: true }

  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/techarea.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/navigation/vertical/techarea.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Tech Area'
}, {
  title: 'Tech',
  icon: 'UserIcon',
  children: [{
    title: 'Horizon',
    route: 'apps-horizon'
  }, {
    title: 'Telescope',
    route: 'apps-telescope'
  }]
}, {
  title: 'API Docs',
  icon: 'CodeIcon',
  children: [{
    title: 'UK Docs',
    route: 'admin-api-docs-uk'
  }, {
    title: 'US Docs',
    route: 'admin-api-docs-us'
  }]
}]);

/***/ }),

/***/ "./resources/js/src/navigation/vertical/users.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/navigation/vertical/users.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Users List'
}, {
  title: 'Users',
  icon: 'UsersIcon',
  children: [{
    title: 'List',
    route: 'apps-users-list'
  } // {
  //   title: 'View',
  //   route: { name: 'apps-users-view', params: { id: 21 } },
  // },
  // {
  //   title: 'Edit',
  //   route: { name: 'apps-users-edit', params: { id: 21 } },
  // },
  ]
}]);

/***/ })

}]);