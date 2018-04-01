webpackJsonp([4],{

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

/***/ 178:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Map.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Map_defaultExport = ({
    name: 'bat-mission',

    props: {
        mapInfo: {
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
        return {};
    },


    components: {},

    created: function created() {},
    mounted: function mounted() {},


    methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-186e5028","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Map.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map"},[_c('div',{staticClass:"map_wrap"},[_c('div',{staticClass:"map_float"},[_c('div',{staticClass:"map_phone"},[_vm._v(_vm._s(_vm.isEnglish ? 'Service hotline' : '服务热线')+": "),_c('span',[_vm._v("40088-10115")])]),_c('div',{staticClass:"map_sel"},[_c('select',_vm._l((_vm.mapInfo.branch),function(item){return _c('option',{attrs:{"selected":""},domProps:{"value":item.id}},[_vm._v(_vm._s(_vm.isEnglish ? item.ftitle : item.title))])}))]),_c('div',{staticClass:"map_adress",attrs:{"id":"map_adress"}},[_vm._v(_vm._s(_vm.isEnglish ? _vm.mapInfo.ftitle : _vm.mapInfo.address)+"\n                "),_c('br'),_vm._v(_vm._s(_vm.isEnglish ? 'Landline phone' : '联系方式')+": "+_vm._s(_vm.mapInfo.telnum))])]),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"map_content"},[_c('img',{attrs:{"src":"/public/images/map.jpg","alt":""}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Map_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/Map.vue
function injectStyle (ssrContext) {
  __webpack_require__(179)
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
  Map_defaultExport,
  components_Map_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Map_defaultExport = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/views/ContactUs.vue
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





/* harmony default export */ var ContactUs_defaultExport = ({
  name: 'contact',
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        type = _ref.type;

    return store.dispatch('FETCH_PAGE_DATA', { type: type });
  },
  data: function data() {
    return {
      mapInfo: {
        tel: '40088-10115',
        branch: [{ title: '深圳总部', ftitle: 'Shenzhen headquarters', id: 0 }],
        address: '广东省深圳市龙华区三联路跟清泉路交汇处',
        faddress: 'guangdong province ',
        telnum: '40088-10115'
      }
    };
  },


  components: {
    'bat-banner': __WEBPACK_IMPORTED_MODULE_0__components_common_Banner_vue__["a" /* default */],
    'bat-image': __WEBPACK_IMPORTED_MODULE_1__components_common_Image_vue__["a" /* default */],
    'bat-map': src_components_Map_defaultExport
  },

  computed: {
    banners: function banners() {
      return this.$store.getters.bannerList;
    }
  },

  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1e22b304","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/views/ContactUs.vue
var ContactUs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact_wrapper"},[(_vm.banners.length > 1)?_c('div',[_c('bat-banner',{attrs:{"banners":_vm.banners}})],1):_c('div',[_c('bat-image',{attrs:{"v:if":"banners.length == 1","image":_vm.banners[0]}})],1),_c('bat-map',{attrs:{"mapInfo":_vm.mapInfo}})],1)}
var ContactUs_staticRenderFns = []
var ContactUs_esExports = { render: ContactUs_render, staticRenderFns: ContactUs_staticRenderFns }
/* harmony default export */ var views_ContactUs_defaultExport = (ContactUs_esExports);
// CONCATENATED MODULE: ./front/src/views/ContactUs.vue
function ContactUs_injectStyle (ssrContext) {
  __webpack_require__(178)
}
var ContactUs_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var ContactUs___vue_template_functional__ = false
/* styles */
var ContactUs___vue_styles__ = ContactUs_injectStyle
/* scopeId */
var ContactUs___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var ContactUs___vue_module_identifier__ = null
var ContactUs_Component = ContactUs_normalizeComponent(
  ContactUs_defaultExport,
  views_ContactUs_defaultExport,
  ContactUs___vue_template_functional__,
  ContactUs___vue_styles__,
  ContactUs___vue_scopeId__,
  ContactUs___vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (ContactUs_Component.exports);


/***/ })

});