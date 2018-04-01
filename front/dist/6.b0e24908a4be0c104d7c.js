webpackJsonp([6],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/common/Banner.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Banner_defaultExport = ({
    name: 'bat-banner',
    props: {
        banners: {
            type: Array,
            required: true
        }
    },
    data: function data() {
        return {};
    },


    components: {},

    created: function created() {},
    mounted: function mounted() {},


    methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-61797a68","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/common/Banner.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index_banner"},[_c('el-carousel',{attrs:{"height":"480px"}},_vm._l((_vm.banners),function(item){return _c('el-carousel-item',{key:item.src},[_c('a',{staticClass:"index_banner_img",attrs:{"href":item.link}},[_c('span',{style:({ backgroundImage: 'url(' + item.src + ')' })})])])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var common_Banner_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/common/Banner.vue
function injectStyle (ssrContext) {
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Banner_defaultExport,
  common_Banner_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/common/Image.vue
//
//
//
//
//
//

/* harmony default export */ var Image_defaultExport = ({
  name: 'bat-image',
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {};
  },


  components: {},

  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-e2e1af78","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/common/Image.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index_image"},[_c('span',{style:({ backgroundImage: 'url(' + _vm.image.src + ')' })})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var common_Image_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/common/Image.vue
function injectStyle (ssrContext) {
  __webpack_require__(167)
}
var normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Image_defaultExport,
  common_Image_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Category.vue
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index_js__ = __webpack_require__(71);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Category_defaultExport = ({
    name: 'bat-category',

    props: {
        cateList: {
            type: Array,
            required: true
        }
    },

    data: function data() {
        return {
            curCate: ""
        };
    },


    computed: {
        isEnglish: function isEnglish() {
            return this.$store.getters.getIsEnglish;
        },
        productList: function productList() {
            return this.$store.getters.getProductList;
        }
    },

    created: function created() {
        var _this = this;

        var productList = {};
        this.cateList.map(function (item) {
            productList[item.category] = "";
        });
        this.curCate = this.cateList[0].category;
        Object(__WEBPACK_IMPORTED_MODULE_0__api_index_js__["i" /* getCategoryList */])(this.curCate).then(function (data) {
            productList[_this.curCate] = data;
            _this.$store.commit('SET_PRODUCT_LIST', { json: productList });
        });
    },
    mounted: function mounted() {},


    methods: {
        tabCate: function tabCate(index) {
            this.cateList.forEach(function (item) {
                item.active = false;
            });
            this.cateList[index].active = true;
            this.curCate = this.cateList[index].category;
            this.setProductList();
        },
        setProductList: function setProductList() {
            var _this2 = this;

            Object(__WEBPACK_IMPORTED_MODULE_0__api_index_js__["i" /* getCategoryList */])(this.curCate).then(function (data) {
                _this2.productList[_this2.curCate] = data;
                _this2.$store.commit('SET_PRODUCT_LIST', { json: _this2.productList });
            });
        },
        goLink: function goLink(event, link) {
            if (event) event.preventDefault();
            location.href = link;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-24819fbd","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Category.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category g_cf"},[_c('h3',{staticClass:"category_title"},[_vm._v(_vm._s(_vm.isEnglish ? "Products" : "产品中心"))]),_c('div',{staticClass:"category_left g_cf"},_vm._l((_vm.cateList),function(item,index){return _c('a',{key:item.category,class:{actived: item.active},attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.tabCate(index)}}},[_vm._v(_vm._s(_vm.isEnglish ? item.fcategory : item.category))])})),_c('div',{staticClass:"category_right g_cf"},_vm._l((_vm.productList[_vm.curCate]),function(item,index){return (_vm.productList[_vm.curCate])?_c('a',{key:index,staticClass:"product_item",attrs:{"href":'/detail/'+item.id}},[_c('div',{staticClass:"product_pic"},[_c('img',{attrs:{"src":item.src,"alt":""}})]),_c('div',{staticClass:"product_info"},[_c('h4',{staticClass:"product_item_title line2"},[_vm._v("\n                    "+_vm._s(_vm.isEnglish ? item.ftitle : item.title)+"\n                ")]),_c('p',{staticClass:"product_price"},[_vm._v("$ "+_vm._s(item.price)+" / piece")]),_c('span',{staticClass:"product_pay",on:{"click":function($event){_vm.goLink($event, item.link)}}},[_vm._v("直接购买")])])]):_vm._e()}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Category_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/Category.vue
function injectStyle (ssrContext) {
  __webpack_require__(187)
}
var normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Category_defaultExport,
  components_Category_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Category_defaultExport = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/views/Products.vue
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Banner_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Image_vue__ = __webpack_require__(166);
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Products_defaultExport = ({
  name: 'product',
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        type = _ref.type;

    return store.dispatch('FETCH_PAGE_DATA', { type: type });
  },
  data: function data() {
    return {};
  },


  components: {
    'bat-banner': __WEBPACK_IMPORTED_MODULE_0__components_common_Banner_vue__["a" /* default */],
    'bat-image': __WEBPACK_IMPORTED_MODULE_1__components_common_Image_vue__["a" /* default */],
    'bat-category': src_components_Category_defaultExport
  },

  computed: {
    banners: function banners() {
      return this.$store.getters.bannerList;
    },
    cateList: function cateList() {
      return this.$store.getters.getCateList;
    }
  },

  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-809cf2b4","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/views/Products.vue
var Products_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news_wrapper"},[(_vm.banners.length > 1)?_c('div',[_c('bat-banner',{attrs:{"banners":_vm.banners}})],1):_c('div',[_c('bat-image',{attrs:{"v:if":"banners.length == 1","image":_vm.banners[0]}})],1),_c('bat-category',{attrs:{"cateList":_vm.cateList}})],1)}
var Products_staticRenderFns = []
var Products_esExports = { render: Products_render, staticRenderFns: Products_staticRenderFns }
/* harmony default export */ var views_Products_defaultExport = (Products_esExports);
// CONCATENATED MODULE: ./front/src/views/Products.vue
function Products_injectStyle (ssrContext) {
  __webpack_require__(186)
}
var Products_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var Products___vue_template_functional__ = false
/* styles */
var Products___vue_styles__ = Products_injectStyle
/* scopeId */
var Products___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Products___vue_module_identifier__ = null
var Products_Component = Products_normalizeComponent(
  Products_defaultExport,
  views_Products_defaultExport,
  Products___vue_template_functional__,
  Products___vue_styles__,
  Products___vue_scopeId__,
  Products___vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Products_Component.exports);


/***/ })

});