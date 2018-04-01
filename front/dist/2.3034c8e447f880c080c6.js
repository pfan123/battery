webpackJsonp([2],{

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

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Introduce.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Introduce_defaultExport = ({
    name: 'bat-introduce',

    props: {
        introduce: {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6a22be5a","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Introduce.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"introduce"},[_c('div',{staticClass:"introduce_wrap"},[_c('div',{staticClass:"introduce_inner"},[_c('h3',[_vm._v(_vm._s(_vm.isEnglish ? _vm.introduce.ftitle : _vm.introduce.title))]),_c('div',{staticClass:"introduce_text",domProps:{"innerHTML":_vm._s(_vm.isEnglish ? _vm.introduce.fdesc : _vm.introduce.desc)}})])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Introduce_defaultExport = (esExports);
// CONCATENATED MODULE: ./front/src/components/Introduce.vue
function injectStyle (ssrContext) {
  __webpack_require__(175)
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
  Introduce_defaultExport,
  components_Introduce_defaultExport,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Introduce_defaultExport = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Team.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Team_defaultExport = ({
  name: 'bat-team',

  data: function data() {
    return {};
  },


  components: {},

  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-efa6e290","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Team.vue
var Team_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Team_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"team"},[_c('div',{staticClass:"team_wrap"},[_c('h3',[_vm._v("团队介绍")]),_c('div',{staticClass:"team_list clearfix"},[_c('div',{staticClass:"team_item"},[_c('div',{staticClass:"team_item_inner"},[_c('div',{staticClass:"team_img"},[_c('img',{attrs:{"src":"http://temp.im/250x218"}})]),_c('div',{staticClass:"team_info"},[_c('h4',[_vm._v("杨守伟 / 董事长"),_c('span',[_vm._v("(创始人)")])]),_c('div',{staticClass:"team_info_desc"},[_vm._v("哈尔滨工业投资集团高管，历任哈尔滨轻工资产经营公司办公室副主任、改革处副处长，哈尔滨工业资产经营公司战略发展副部长、部长，哈尔滨古铁市场有限公司总经理，现为公司法人股东哈工投高管、哈尔滨鑫瑞融资租赁有限公司董事长。")])])])]),_c('div',{staticClass:"team_item"},[_c('div',{staticClass:"team_item_inner"},[_c('div',{staticClass:"team_img"},[_c('img',{attrs:{"src":"http://temp.im/250x218"}})]),_c('div',{staticClass:"team_info"},[_c('h4',[_vm._v("向亚珍 / 财务总监"),_c('span',[_vm._v("(创始人)")])]),_c('div',{staticClass:"team_info_desc"},[_vm._v("小额贷款行业从业经验10年以上，曾任中安信业高管，历任店长、区域经理、融资总监，曾任深圳市中安财富资产管理有限公司执行董事；深圳市普惠安投资管理有限公司董事总经理。")])])])])])])])}]
var Team_esExports = { render: Team_render, staticRenderFns: Team_staticRenderFns }
/* harmony default export */ var components_Team_defaultExport = (Team_esExports);
// CONCATENATED MODULE: ./front/src/components/Team.vue
function Team_injectStyle (ssrContext) {
  __webpack_require__(176)
}
var Team_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var Team___vue_template_functional__ = false
/* styles */
var Team___vue_styles__ = Team_injectStyle
/* scopeId */
var Team___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Team___vue_module_identifier__ = null
var Team_Component = Team_normalizeComponent(
  Team_defaultExport,
  components_Team_defaultExport,
  Team___vue_template_functional__,
  Team___vue_styles__,
  Team___vue_scopeId__,
  Team___vue_module_identifier__
)

/* harmony default export */ var src_components_Team_defaultExport = (Team_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Mission.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Mission_defaultExport = ({
    name: 'bat-mission',

    props: {
        mission: {
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6f96ab0d","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Mission.vue
var Mission_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mission"},[_c('div',{staticClass:"mission_inner"},[_c('h3',[_vm._v(_vm._s(_vm.isEnglish ? _vm.mission.ftitle : _vm.mission.title))]),_c('div',{staticClass:"mission_list"},_vm._l((_vm.mission.list),function(item,index){return _c('div',{class:[index%2==0 ? 'mission_item left' : 'mission_item right']},[_c('div',{staticClass:"mission_img"},[_c('img',{attrs:{"src":item.src}})]),_c('div',{staticClass:"mission_info"},[_c('h4',[_c('em',[_vm._v(_vm._s(_vm.isEnglish ? item.ftitle : item.title))]),_vm._v(" ／ "+_vm._s(_vm.isEnglish ? item.fdesc: item.desc))]),_c('span',[_vm._v(_vm._s(_vm.isEnglish ? item.fdetail: item.detail))])])])}))])])}
var Mission_staticRenderFns = []
var Mission_esExports = { render: Mission_render, staticRenderFns: Mission_staticRenderFns }
/* harmony default export */ var components_Mission_defaultExport = (Mission_esExports);
// CONCATENATED MODULE: ./front/src/components/Mission.vue
function Mission_injectStyle (ssrContext) {
  __webpack_require__(177)
}
var Mission_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var Mission___vue_template_functional__ = false
/* styles */
var Mission___vue_styles__ = Mission_injectStyle
/* scopeId */
var Mission___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Mission___vue_module_identifier__ = null
var Mission_Component = Mission_normalizeComponent(
  Mission_defaultExport,
  components_Mission_defaultExport,
  Mission___vue_template_functional__,
  Mission___vue_styles__,
  Mission___vue_scopeId__,
  Mission___vue_module_identifier__
)

/* harmony default export */ var src_components_Mission_defaultExport = (Mission_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/views/AboutUs.vue
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
//
//







/* harmony default export */ var AboutUs_defaultExport = ({
  name: 'about',
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        type = _ref.type;

    return store.dispatch('FETCH_PAGE_DATA', { type: type });
  },
  data: function data() {
    return {
      introduce: {
        title: '公司简介',
        ftitle: 'COMPANY PROFILE',
        desc: '深圳绿行科技有限公司成立于2014年7月，总部位于深圳CBD中航中心，是由著名国资企业控股，金融及互联网行业各领域专家联合成立，专注于中国普惠金融事业发展，以协助银行与非银行等金融机构，为小微企业、个体工商户及白领人群提供快速、便捷、免抵押、免担保的小微信贷金融服务。吉信金融立足于小微企业，成就中国普惠金融的大局，将互联网技术与金融相结合，自主研发“Just.吉信金融自成立以来发展迅速，目前已拥有员工200多名，已在全国14个省、累计30个城市建立了覆盖2亿人群的金融服务网络，业务发展势头强劲，市场份额扩张迅速，品牌价值不断攀升。吉信金融以专业的态度，专注深耕小微信贷领域，通过一站式网贷平台服务广大客户，助力每一个从小做起的小微企业实现梦想，服务社会。',
        fdesc: 'Green line in shenzhen technology co., LTD. Was established in July 2014, the headquarters is located in the CBD of shenzhen catic center, is a famous state-owned asset holding enterprises, set up a joint financial and Internet industry experts in each field, focus on China '
      },
      mission: {
        title: '企业文化',
        ftitle: 'Corporate mission',
        list: [{
          title: '企业使命',
          ftitle: 'Corporate mission',
          desc: '专业成就普惠金融',
          fdesc: 'Professional achievements',
          detail: '专注努力以为体，博采众长以为用，打造专业的风控体系，专业成就普惠金融',
          fdetail: 'Focus on trying to think that the body, the broad masses of people think ',
          src: 'https://yun.pfan123.com/images/temp/mission-1.png'
        }, {
          title: '企业愿景',
          ftitle: 'Corporate mission',
          desc: ' 立足于小，谋求于大',
          fdesc: 'Professional achievements',
          detail: '专注努力以为体，博采众长以为用，打造专业的风控体系，专业成就普惠金融',
          fdetail: 'Focus on trying to think that the body, the broad masses of people think ',
          src: 'https://yun.pfan123.com/images/temp/mission-2.png'
        }, {
          title: '企业文化',
          ftitle: 'Corporate mission',
          desc: ' 快乐、高效、负责',
          fdesc: 'Professional achievements',
          detail: '专注努力以为体，博采众长以为用，打造专业的风控体系，专业成就普惠金融',
          fdetail: 'Focus on trying to think that the body, the broad masses of people think ',
          src: 'https://yun.pfan123.com/images/temp/mission-3.png'
        }]
      }
    };
  },


  components: {
    'bat-banner': __WEBPACK_IMPORTED_MODULE_0__components_common_Banner_vue__["a" /* default */],
    'bat-image': __WEBPACK_IMPORTED_MODULE_1__components_common_Image_vue__["a" /* default */],
    'bat-introduce': src_components_Introduce_defaultExport,
    'bat-team': src_components_Team_defaultExport,
    'bat-mission': src_components_Mission_defaultExport
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-675e20b4","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/views/AboutUs.vue
var AboutUs_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"about_wrapper"},[(_vm.banners.length > 1)?_c('div',[_c('bat-banner',{attrs:{"banners":_vm.banners}})],1):_c('div',[_c('bat-image',{attrs:{"v:if":"banners.length == 1","image":_vm.banners[0]}})],1),_c('bat-introduce',{attrs:{"introduce":_vm.introduce}}),_c('bat-team'),_c('bat-mission',{attrs:{"mission":_vm.mission}})],1)}
var AboutUs_staticRenderFns = []
var AboutUs_esExports = { render: AboutUs_render, staticRenderFns: AboutUs_staticRenderFns }
/* harmony default export */ var views_AboutUs_defaultExport = (AboutUs_esExports);
// CONCATENATED MODULE: ./front/src/views/AboutUs.vue
function AboutUs_injectStyle (ssrContext) {
  __webpack_require__(174)
}
var AboutUs_normalizeComponent = __webpack_require__(14)
/* script */


/* template */

/* template functional */
var AboutUs___vue_template_functional__ = false
/* styles */
var AboutUs___vue_styles__ = AboutUs_injectStyle
/* scopeId */
var AboutUs___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var AboutUs___vue_module_identifier__ = null
var AboutUs_Component = AboutUs_normalizeComponent(
  AboutUs_defaultExport,
  views_AboutUs_defaultExport,
  AboutUs___vue_template_functional__,
  AboutUs___vue_styles__,
  AboutUs___vue_scopeId__,
  AboutUs___vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (AboutUs_Component.exports);


/***/ })

});