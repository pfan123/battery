webpackJsonp([5],{

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

/***/ 188:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Detail.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Detail_defaultExport = ({
    name: 'bat-detail',
    props: {
        proContent: {
            type: Object,
            required: true
        }
    },
    computed: {
        isEnglish: function isEnglish() {
            return this.$store.getters.getIsEnglish;
        }
    },
    data: function data() {
        return {
            curSrc: ""
        };
    },


    components: {},

    created: function created() {
        this.curSrc = this.proContent.src;
    },
    mounted: function mounted() {},


    methods: {
        onMouseOver: function onMouseOver(value) {
            this.curSrc = value;
        }
    }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6376964e","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Detail.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail_wrap"},[_c('div',{staticClass:"detail_top g_cf"},[_c('div',{staticClass:"detail_top_lf"},[_c('div',{staticClass:"detail_top_pic"},[_c('img',{attrs:{"src":_vm.curSrc,"alt":""}})]),_c('div',{staticClass:"detail_style_pic g_cf"},[(_vm.proContent.src1)?_c('span',{class:[_vm.curSrc == _vm.proContent.src1 ? 'actived' : ''],on:{"mouseover":function($event){_vm.onMouseOver(_vm.proContent.src1)}}},[_c('img',{attrs:{"src":_vm.proContent.src1,"alt":""}})]):_vm._e(),(_vm.proContent.src2)?_c('span',{class:[_vm.curSrc == _vm.proContent.src2 ? 'actived' : ''],on:{"mouseover":function($event){_vm.onMouseOver(_vm.proContent.src2)}}},[_c('img',{attrs:{"src":_vm.proContent.src2,"alt":""}})]):_vm._e(),(_vm.proContent.src3)?_c('span',{class:[_vm.curSrc == _vm.proContent.src3 ? 'actived' : ''],on:{"mouseover":function($event){_vm.onMouseOver(_vm.proContent.src3)}}},[_c('img',{attrs:{"src":_vm.proContent.src3,"alt":""}})]):_vm._e(),(_vm.proContent.src4)?_c('span',{class:[_vm.curSrc == _vm.proContent.src4 ? 'actived' : ''],on:{"mouseover":function($event){_vm.onMouseOver(_vm.proContent.src4)}}},[_c('img',{attrs:{"src":_vm.proContent.src4,"alt":""}})]):_vm._e(),(_vm.proContent.src5)?_c('span',{class:[_vm.curSrc == _vm.proContent.src5 ? 'actived' : ''],on:{"mouseover":function($event){_vm.onMouseOver(_vm.proContent.src5)}}},[_c('img',{attrs:{"src":_vm.proContent.src5,"alt":""}})]):_vm._e()])]),_c('div',{staticClass:"detail_top_rg"},[_c('h3',[_vm._v(_vm._s(_vm.isEnglish ? _vm.proContent.ftitle : _vm.proContent.title))]),_c('div',{staticClass:"detail_txt"},[_vm._v("\n                产品概述："),_c('br'),_vm._v(_vm._s(_vm.isEnglish ? _vm.proContent.fabstract : _vm.proContent.abstract)+"独特性能，极窄边框设计，拼接缝隙更小，智能无限拼接，IP网络流媒体解码，采用创维V12数字引擎、自动消残影、智能温控、智能背光灯区域调节及原装进口工业级液晶面板，LED背光源，更环保节能，对视频图像画面处理更清晰、景深层次更强。\n            ")]),(_vm.proContent.price)?_c('div',{staticClass:"detail_price"},[_vm._v("$ "),_c('span',[_vm._v(_vm._s(_vm.proContent.price))])]):_vm._e(),(_vm.proContent.link)?_c('a',{staticClass:"detail_btn",attrs:{"href":_vm.proContent.link}},[_vm._v("立即购买")]):_vm._e()])]),_c('div',{staticClass:"detail_pro"},[_vm._m(0),_c('div',{staticClass:"detail_pro_content g_cf",domProps:{"innerHTML":_vm._s(_vm.isEnglish ? _vm.proContent.fcontent : _vm.proContent.content)}})])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail_pro_menu g_cf"},[_c('a',{staticClass:"on",attrs:{"href":"javascript:;"}},[_vm._v("产品介绍")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Detail_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/Detail.vue
function injectStyle (ssrContext) {
  __webpack_require__(189)
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
  Detail_defaultExport,
  components_Detail_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Detail_defaultExport = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/views/Detail.vue
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





/* harmony default export */ var views_Detail_defaultExport = ({
  name: 'detail',
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        type = _ref.type,
        route = _ref.route;

    var page = route.params.page;
    return store.dispatch('FETCH_PAGE_DATA', { type: type, page: page });
  },


  computed: {
    banners: function banners() {
      return this.$store.getters.bannerList;
    },
    proContent: function proContent() {
      return this.$store.getters.getProductContent;
    }
  },

  data: function data() {
    return {};
  },


  components: {
    'bat-banner': __WEBPACK_IMPORTED_MODULE_0__components_common_Banner_vue__["a" /* default */],
    'bat-image': __WEBPACK_IMPORTED_MODULE_1__components_common_Image_vue__["a" /* default */],
    'bat-detail': src_components_Detail_defaultExport
  },

  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-12717187","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/views/Detail.vue
var Detail_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news_wrapper"},[(_vm.banners.length > 1)?_c('div',[_c('bat-banner',{attrs:{"banners":_vm.banners}})],1):_c('div',[_c('bat-image',{attrs:{"v:if":"banners.length == 1","image":_vm.banners[0]}})],1),_c('bat-detail',{attrs:{"proContent":_vm.proContent}})],1)}
var Detail_staticRenderFns = []
var Detail_esExports = { render: Detail_render, staticRenderFns: Detail_staticRenderFns }
/* harmony default export */ var src_views_Detail_defaultExport = (Detail_esExports);
// CONCATENATED MODULE: ./front/src/views/Detail.vue
function Detail_injectStyle (ssrContext) {
  __webpack_require__(188)
}
var Detail_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var Detail___vue_template_functional__ = false
/* styles */
var Detail___vue_styles__ = Detail_injectStyle
/* scopeId */
var Detail___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Detail___vue_module_identifier__ = null
var Detail_Component = Detail_normalizeComponent(
  views_Detail_defaultExport,
  src_views_Detail_defaultExport,
  Detail___vue_template_functional__,
  Detail___vue_styles__,
  Detail___vue_scopeId__,
  Detail___vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Detail_Component.exports);


/***/ })

});