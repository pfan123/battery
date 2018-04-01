webpackJsonp([0],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Feature.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Feature_defaultExport = ({
    name: 'bat-feature',

    props: {
        feats: {
            type: Array,
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-99e2b92a","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Feature.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feat_keyword"},[_c('div',{staticClass:"feat_keyword_list g_cf"},_vm._l((_vm.feats),function(item){return _c('div',{key:item.src,staticClass:"feat_keyword_item"},[_c('div',{staticClass:"feat_keyword_icon"},[_c('img',{attrs:{"src":item.src,"alt":""}})]),(_vm.isEnglish)?_c('div',{staticClass:"feat_keyword_info"},[_c('h4',[_vm._v(_vm._s(item.ftitle))]),_c('p',{staticClass:"line2"},[_vm._v(_vm._s(item.fdesc))])]):_c('div',{staticClass:"feat_keyword_info"},[_c('h4',[_vm._v(_vm._s(item.title))]),_c('p',{staticClass:"line2"},[_vm._v(_vm._s(item.desc))])])])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Feature_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/Feature.vue
function injectStyle (ssrContext) {
  __webpack_require__(169)
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
  Feature_defaultExport,
  components_Feature_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/common/Product.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Product_defaultExport = ({
    name: 'bat-products',
    props: {
        homeProList: {
            type: Array,
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
            len: ''
        };
    },


    components: {},

    created: function created() {
        this.len = Math.ceil(this.homeProList.length / 8);
    },
    mounted: function mounted() {},


    methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ec62adb2","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/common/Product.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"products"},[_c('h3',{staticClass:"products_title"},[_vm._v(_vm._s(_vm.isEnglish ? 'PRODUCT DISPLAY' : '产品展示'))]),_c('el-carousel',{attrs:{"interval":5000,"arrow":"always","height":"700px"}},_vm._l((_vm.len),function(index){return _c('el-carousel-item',{key:index},[_c('div',{staticClass:"products_wrap g_cf"},_vm._l((_vm.homeProList.slice((index-1)*8, index*8)),function(item){return _c('a',{staticClass:"products_item",attrs:{"href":'/detail/'+item.id}},[_c('img',{staticClass:"products_img",attrs:{"src":item.src}}),_c('p',{staticClass:"products_subtitle line2"},[_vm._v("sddsddds\n                        "+_vm._s(_vm.isEnglish ? item.ftitle : item.title)+"\n                    ")])])}))])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var common_Product_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/common/Product.vue
function injectStyle (ssrContext) {
  __webpack_require__(171)
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
  Product_defaultExport,
  common_Product_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_common_Product_defaultExport = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/common/Profile.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Profile_defaultExport = ({
    name: 'bat-profile',

    props: {
        profileInfo: {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0790c3d7","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/common/Profile.vue
var Profile_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile_wrapper"},[_c('div',{staticClass:"profile_inner"},[_c('div',{staticClass:"profile_info"},[_c('h4',[_vm._v(_vm._s(_vm.isEnglish ? _vm.profileInfo.ftitle : _vm.profileInfo.title))]),_c('div',{staticClass:"profile_txt",domProps:{"innerHTML":_vm._s(_vm.isEnglish ? _vm.profileInfo.fdesc : _vm.profileInfo.desc)}})]),_vm._m(0)])])}
var Profile_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile_img"},[_c('img',{attrs:{"src":"https://yun.pfan123.com/images/temp/profile.png","alt":"公司简介"}})])}]
var Profile_esExports = { render: Profile_render, staticRenderFns: Profile_staticRenderFns }
/* harmony default export */ var common_Profile_defaultExport = (Profile_esExports);
// CONCATENATED MODULE: ./front/src/components/common/Profile.vue
function Profile_injectStyle (ssrContext) {
  __webpack_require__(172)
}
var Profile_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var Profile___vue_template_functional__ = false
/* styles */
var Profile___vue_styles__ = Profile_injectStyle
/* scopeId */
var Profile___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Profile___vue_module_identifier__ = null
var Profile_Component = Profile_normalizeComponent(
  Profile_defaultExport,
  common_Profile_defaultExport,
  Profile___vue_template_functional__,
  Profile___vue_styles__,
  Profile___vue_scopeId__,
  Profile___vue_module_identifier__
)

/* harmony default export */ var components_common_Profile_defaultExport = (Profile_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/common/News.vue
//
//
//
//
//
//
//
//
//
//
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
    name: 'bat-news',

    props: {
        list: {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6fc0694c","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/common/News.vue
var News_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"news"},[_c('h3',{staticClass:"news_title"},[_vm._v(_vm._s(_vm.isEnglish ? 'NEWS' : '新闻中心'))]),_c('div',{staticClass:"news_wrap g_cf"},_vm._l((_vm.list),function(item){return _c('a',{staticClass:"news_item",attrs:{"href":'/newsarticles/'+item.id}},[_c('div',{staticClass:"news_img"},[_c('img',{attrs:{"src":item.src}})]),_c('div',{staticClass:"news_subtitle line1"},[_vm._v("\n                "+_vm._s(_vm.isEnglish ? item.ftitle : item.title)+"\n            ")]),_c('div',{staticClass:"news_desc line2"},[_vm._v("\n                "+_vm._s(_vm.isEnglish ? item.fabstract : item.abstract)+"\n            ")])])}))])}
var News_staticRenderFns = []
var News_esExports = { render: News_render, staticRenderFns: News_staticRenderFns }
/* harmony default export */ var common_News_defaultExport = (News_esExports);
// CONCATENATED MODULE: ./front/src/components/common/News.vue
function News_injectStyle (ssrContext) {
  __webpack_require__(173)
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
  common_News_defaultExport,
  News___vue_template_functional__,
  News___vue_styles__,
  News___vue_scopeId__,
  News___vue_module_identifier__
)

/* harmony default export */ var components_common_News_defaultExport = (News_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/views/Index.vue
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_common_Banner_vue__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_Image_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Feature_vue__ = __webpack_require__(168);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var Index_defaultExport = ({
  name: 'home',
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        type = _ref.type;

    return store.dispatch('FETCH_PAGE_DATA', { type: type });
  },
  data: function data() {
    return {
      feats: [{
        src: "https://yun.pfan123.com/images/icon/kwIcon-1.png",
        title: "国资控股",
        ftitle: "State-owned asset holding",
        desc: "由哈尔滨工业投资集团控股国有混合制企业",
        fdesc: ""
      }, {
        src: "https://yun.pfan123.com/images/icon/kwIcon-2.png",
        title: "自主研发",
        ftitle: "Independent research and development",
        desc: "采用自主研发的小微信贷核心技术体系",
        fdesc: ""
      }, {
        src: "https://yun.pfan123.com/images/icon/kwIcon-3.png",
        title: "普惠金融",
        ftitle: "Pratt &whitney financial",
        desc: "服务实体经济符合国家政策方针",
        fdesc: ""
      }, {
        src: "https://yun.pfan123.com/images/icon/kwIcon-4.png",
        title: "专业定制",
        ftitle: "Professional custom",
        desc: "提供快捷简便的提供快捷简便的专业化个人融资服务",
        fdesc: ""
      }],
      profileInfo: {
        title: '公司简介',
        ftitle: 'COMPANY PROFILE',
        desc: '深圳绿行科技有限公司成立于2014年7月，总部位于深圳CBD中航中心，是由著名国资企业控股，金融及互联网行业各领域专家联合成立，专注于中国普惠金融事业发展，以协助银行与非银行等金融机构，为小微企业、个体工商户及白领人群提供快速、便捷、免抵押、免担保的小微信贷金融服务。',
        fdesc: 'Green line in shenzhen technology co., LTD. Was established in July 2014, the headquarters is located in the CBD of shenzhen catic center, is a famous state-owned asset holding enterprises, set up a joint financial and Internet industry experts in each field, focus on China '
      }
    };
  },


  components: {
    'bat-banner': __WEBPACK_IMPORTED_MODULE_0__components_common_Banner_vue__["a" /* default */],
    'bat-image': __WEBPACK_IMPORTED_MODULE_1__components_common_Image_vue__["a" /* default */],
    'bat-feature': __WEBPACK_IMPORTED_MODULE_2__components_Feature_vue__["a" /* default */],
    'bat-product': components_common_Product_defaultExport,
    'bat-profile': components_common_Profile_defaultExport,
    'bat-news': components_common_News_defaultExport
  },
  computed: {
    banners: function banners() {
      return this.$store.getters.bannerList;
    },
    newLists: function newLists() {
      return this.$store.getters.newsList.slice(0, 4);
    },
    homeProList: function homeProList() {
      return this.$store.getters.getHomeProList.slice(0, 40);
    }
  },
  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-08ce592c","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/views/Index.vue
var Index_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index_wrapper"},[(_vm.banners.length > 1)?_c('div',[_c('bat-banner',{attrs:{"banners":_vm.banners}})],1):_c('div',[_c('bat-image',{attrs:{"v:if":"banners.length == 1","image":_vm.banners[0]}})],1),_c('bat-feature',{attrs:{"feats":_vm.feats}}),_c('bat-product',{attrs:{"homeProList":_vm.homeProList}}),_c('bat-profile',{attrs:{"profileInfo":_vm.profileInfo}}),_c('bat-news',{attrs:{"list":_vm.newLists}})],1)}
var Index_staticRenderFns = []
var Index_esExports = { render: Index_render, staticRenderFns: Index_staticRenderFns }
/* harmony default export */ var views_Index_defaultExport = (Index_esExports);
// CONCATENATED MODULE: ./front/src/views/Index.vue
function Index_injectStyle (ssrContext) {
  __webpack_require__(170)
}
var Index_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var Index___vue_template_functional__ = false
/* styles */
var Index___vue_styles__ = Index_injectStyle
/* scopeId */
var Index___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Index___vue_module_identifier__ = null
var Index_Component = Index_normalizeComponent(
  Index_defaultExport,
  views_Index_defaultExport,
  Index___vue_template_functional__,
  Index___vue_styles__,
  Index___vue_scopeId__,
  Index___vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Index_Component.exports);


/***/ })

});