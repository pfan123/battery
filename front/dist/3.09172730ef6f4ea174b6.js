webpackJsonp([3],{

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

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/NewsList.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NewsList_defaultExport = ({
    name: 'bat-news',

    props: {
        newslist: {
            type: Array,
            required: true
        }
    },

    data: function data() {
        return {};
    },


    computed: {
        isEnglish: function isEnglish() {
            return this.$store.getters.getIsEnglish;
        }
    },

    components: {},

    created: function created() {},
    mounted: function mounted() {},


    methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-544f2e58","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/NewsList.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news"},[_c('h3',{staticClass:"news_title"},[_vm._v(_vm._s(_vm.isEnglish ? 'NEWS' : '新闻中心'))]),_c('div',{staticClass:"newslist_wrap g_cf"},_vm._l((_vm.newslist),function(item){return _c('a',{staticClass:"item g_cf",attrs:{"href":'/newsarticles/'+item.id}},[_c('div',{staticClass:"item_img"},[_c('img',{attrs:{"src":item.src}})]),_c('div',{staticClass:"item_content"},[_c('div',{staticClass:"title line1"},[_vm._v(_vm._s(_vm.isEnglish ? item.ftitle : item.title))]),_c('div',{staticClass:"date"},[_vm._v(_vm._s(item.date))]),_c('div',{staticClass:"desc"},[_vm._v(_vm._s(_vm.isEnglish ? item.fabstract : item.abstract))])])])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_NewsList_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/NewsList.vue
function injectStyle (ssrContext) {
  __webpack_require__(181)
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
  NewsList_defaultExport,
  components_NewsList_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_NewsList_defaultExport = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/views/News.vue
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





/* harmony default export */ var News_defaultExport = ({
  name: 'news',
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        type = _ref.type;

    return store.dispatch('FETCH_PAGE_DATA', { type: type });
  },


  computed: {
    banners: function banners() {
      return this.$store.getters.bannerList;
    },
    List: function List() {
      return this.$store.getters.newsList;
    }
  },

  data: function data() {
    return {};
  },


  components: {
    'bat-banner': __WEBPACK_IMPORTED_MODULE_0__components_common_Banner_vue__["a" /* default */],
    'bat-image': __WEBPACK_IMPORTED_MODULE_1__components_common_Image_vue__["a" /* default */],
    'bat-newslist': src_components_NewsList_defaultExport
  },

  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-a21bdbfe","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/views/News.vue
var News_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news_wrapper"},[(_vm.banners.length > 1)?_c('div',[_c('bat-banner',{attrs:{"banners":_vm.banners}})],1):(_vm.banners.length == 1)?_c('div',[_c('bat-image',{attrs:{"image":_vm.banners[0]}})],1):_vm._e(),_c('bat-newslist',{attrs:{"newslist":_vm.List}})],1)}
var News_staticRenderFns = []
var News_esExports = { render: News_render, staticRenderFns: News_staticRenderFns }
/* harmony default export */ var views_News_defaultExport = (News_esExports);
// CONCATENATED MODULE: ./front/src/views/News.vue
function News_injectStyle (ssrContext) {
  __webpack_require__(180)
}
var News_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var News___vue_template_functional__ = false
/* styles */
var News___vue_styles__ = News_injectStyle
/* scopeId */
var News___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var News___vue_module_identifier__ = null
var News_Component = News_normalizeComponent(
  News_defaultExport,
  views_News_defaultExport,
  News___vue_template_functional__,
  News___vue_styles__,
  News___vue_scopeId__,
  News___vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (News_Component.exports);


/***/ })

});