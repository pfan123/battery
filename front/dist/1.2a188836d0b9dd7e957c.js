webpackJsonp([1],{

/***/ 166:
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

/* harmony default export */ var Banner = ({
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index_banner"},[_c('el-carousel',{attrs:{"height":"480px"}},_vm._l((_vm.banners),function(item){return _c('el-carousel-item',{key:item.src},[_c('a',{staticClass:"index_banner_img",attrs:{"href":item.link}},[_c('span',{style:({ backgroundImage: 'url(' + item.src + ')' })})])])}),1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var common_Banner = (esExports);
// CONCATENATED MODULE: ./front/src/components/common/Banner.vue
function injectStyle (ssrContext) {
  __webpack_require__(167)
}
var normalizeComponent = __webpack_require__(15)
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
  Banner,
  common_Banner,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_common_Banner = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 167:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/common/Image.vue
//
//
//
//
//
//

/* harmony default export */ var Image = ({
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
/* harmony default export */ var common_Image = (esExports);
// CONCATENATED MODULE: ./front/src/components/common/Image.vue
function injectStyle (ssrContext) {
  __webpack_require__(169)
}
var normalizeComponent = __webpack_require__(15)
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
  Image,
  common_Image,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_common_Image = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 169:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/* harmony default export */ var Feature = ({
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"feat_keyword"},[_c('div',{staticClass:"feat_keyword_list g_cf"},_vm._l((_vm.feats),function(item){return _c('div',{key:item.src,staticClass:"feat_keyword_item"},[_c('div',{staticClass:"feat_keyword_icon"},[_c('img',{attrs:{"src":item.src,"alt":""}})]),(_vm.isEnglish)?_c('div',{staticClass:"feat_keyword_info"},[_c('h4',[_vm._v(_vm._s(item.ftitle))]),_c('p',{staticClass:"line2"},[_vm._v(_vm._s(item.fdesc))])]):_c('div',{staticClass:"feat_keyword_info"},[_c('h4',[_vm._v(_vm._s(item.title))]),_c('p',{staticClass:"line2"},[_vm._v(_vm._s(item.desc))])])])}),0)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Feature = (esExports);
// CONCATENATED MODULE: ./front/src/components/Feature.vue
function injectStyle (ssrContext) {
  __webpack_require__(171)
}
var normalizeComponent = __webpack_require__(15)
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
  Feature,
  components_Feature,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Feature = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 171:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 185:
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./front/src/components/common/Banner.vue + 2 modules
var Banner = __webpack_require__(166);

// EXTERNAL MODULE: ./front/src/components/common/Image.vue + 2 modules
var Image = __webpack_require__(168);

// EXTERNAL MODULE: ./front/src/components/Feature.vue + 2 modules
var Feature = __webpack_require__(170);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Form.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Form = ({
  name: 'bat-form',

  data: function data() {
    return {
      feedBack: {
        title: "问题反馈",
        ftitle: "OTHER QUESTIONS",
        detail: "我们将收到您的信息48小时内来为你解答问题",
        fdetail: "We receive your information within 24 hours to answer your questions for you",
        questionTit: "问题标题",
        fquestionTit: "Your question title",
        questionDesc: "问题详情",
        fquestionDesc: "Your question details"
      }
    };
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-23802dae","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Form.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form_wrapper"},[(_vm.isEnglish)?_c('div',{staticClass:"form_info"},[_c('h4',{staticClass:"form_title"},[_vm._v(_vm._s(_vm.feedBack.ftitle))]),_c('p',{staticClass:"form_desc"},[_vm._v(_vm._s(_vm.feedBack.fdetail))]),_c('div',{staticClass:"form_input g_cf"},[_c('label',{attrs:{"for":""}},[_vm._v(_vm._s(_vm.feedBack.fquestionTit)+"：")]),_c('input',{attrs:{"type":"text","placeholder":""}})]),_c('div',{staticClass:"form_input g_cf"},[_c('label',{attrs:{"for":""}},[_vm._v(_vm._s(_vm.feedBack.fquestionDesc)+"：")]),_c('textarea',{attrs:{"rows":"3","cols":"20"}})]),_vm._m(0),_c('input',{staticClass:"form_button",attrs:{"type":"button","value":"confirm"}})]):_c('div',{staticClass:"form_info"},[_c('h4',{staticClass:"form_title"},[_vm._v(_vm._s(_vm.feedBack.title))]),_c('p',{staticClass:"form_desc"},[_vm._v(_vm._s(_vm.feedBack.detail))]),_c('div',{staticClass:"form_input g_cf"},[_c('label',{attrs:{"for":""}},[_vm._v(_vm._s(_vm.feedBack.questionTit)+"：")]),_c('input',{attrs:{"type":"text","placeholder":"请输入问题标题"}})]),_c('div',{staticClass:"form_input g_cf"},[_c('label',{attrs:{"for":""}},[_vm._v(_vm._s(_vm.feedBack.questionDesc)+"：")]),_c('textarea',{attrs:{"rows":"3","cols":"20"}},[_vm._v("请输入详细问题")])]),_vm._m(1),_c('input',{staticClass:"form_button",attrs:{"type":"button","value":"提交"}})])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form_input g_cf"},[_c('label',{attrs:{"for":""}},[_vm._v("email: ")]),_c('input',{attrs:{"type":"text","placeholder":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form_input g_cf"},[_c('label',{attrs:{"for":""}},[_vm._v("email: ")]),_c('input',{attrs:{"type":"text","placeholder":"请输入您的email"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Form = (esExports);
// CONCATENATED MODULE: ./front/src/components/Form.vue
function injectStyle (ssrContext) {
  __webpack_require__(186)
}
var normalizeComponent = __webpack_require__(15)
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
  Form,
  components_Form,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Form = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/Question.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Question = ({
  name: 'bat-question',

  props: {
    faqList: {
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
      activeNames: ['1']
    };
  },


  components: {},

  created: function created() {},
  mounted: function mounted() {},


  methods: {
    handleChange: function handleChange(val) {
      console.log(val);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-924ad5de","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/Question.vue
var Question_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"question_wrapper"},[_c('div',{staticClass:"question_info"},[_c('h4',{staticClass:"question_title"},[_vm._v(_vm._s(_vm.isEnglish ? 'Question' : '常见问题'))]),_c('el-collapse',{on:{"change":_vm.handleChange},model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},_vm._l((_vm.faqList),function(item,index){return _c('div',[_c('el-collapse-item',{attrs:{"title":_vm.isEnglish ? item.ftitle : item.title,"name":index+1}},[_c('div',{staticClass:"question_desc",domProps:{"innerHTML":_vm._s(_vm.isEnglish ? item.fdesc : item.desc)}})])],1)}),0)],1)])}
var Question_staticRenderFns = []
var Question_esExports = { render: Question_render, staticRenderFns: Question_staticRenderFns }
/* harmony default export */ var components_Question = (Question_esExports);
// CONCATENATED MODULE: ./front/src/components/Question.vue
function Question_injectStyle (ssrContext) {
  __webpack_require__(187)
}
var Question_normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var Question___vue_template_functional__ = false
/* styles */
var Question___vue_styles__ = Question_injectStyle
/* scopeId */
var Question___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Question___vue_module_identifier__ = null
var Question_Component = Question_normalizeComponent(
  Question,
  components_Question,
  Question___vue_template_functional__,
  Question___vue_styles__,
  Question___vue_scopeId__,
  Question___vue_module_identifier__
)

/* harmony default export */ var src_components_Question = (Question_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/views/FAQ.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var FAQ = ({
  name: 'faq',
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        type = _ref.type;

    return store.dispatch('FETCH_PAGE_DATA', { type: type });
  },
  data: function data() {
    return {
      feats: [{
        src: "/public/images/faq_icon1.png",
        title: "提交问题",
        ftitle: "Submit questions",
        desc: "反馈遇到问题，匹配问题分类，上报处理",
        fdesc: "Feedback problems, matching problem classification, report processing."
      }, {
        src: "/public/images/faq_icon2.png",
        title: "等待处理",
        ftitle: "Waiting to be processed",
        desc: "采用自主研发的小微信贷核心技术体系",
        fdesc: ""
      }, {
        src: "/public/images/faq_icon3.png",
        title: "反馈处理中",
        ftitle: "Feedback processing",
        desc: "服务实体经济符合国家政策方针",
        fdesc: ""
      }, {
        src: "/public/images/faq_icon4.png",
        title: "已完成",
        ftitle: "completed",
        desc: "提供快捷简便的提供快捷简便的专业化个人融资服务",
        fdesc: ""
      }]
    };
  },


  components: {
    'bat-banner': Banner["a" /* default */],
    'bat-image': Image["a" /* default */],
    'bat-feature': Feature["a" /* default */],
    'bat-form': src_components_Form,
    'bat-question': src_components_Question
  },

  computed: {
    banners: function banners() {
      return this.$store.getters.bannerList;
    },
    faqList: function faqList() {
      return this.$store.getters.faqList;
    }
  },

  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6d6b23f5","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/views/FAQ.vue
var FAQ_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"index_wrapper"},[(_vm.banners.length > 1)?_c('div',[_c('bat-banner',{attrs:{"banners":_vm.banners}})],1):(_vm.banners.length == 1)?_c('div',[_c('bat-image',{attrs:{"image":_vm.banners[0]}})],1):_vm._e(),_c('bat-feature',{attrs:{"feats":_vm.feats}}),_c('bat-question',{attrs:{"faqList":_vm.faqList}}),_c('bat-form')],1)}
var FAQ_staticRenderFns = []
var FAQ_esExports = { render: FAQ_render, staticRenderFns: FAQ_staticRenderFns }
/* harmony default export */ var views_FAQ = (FAQ_esExports);
// CONCATENATED MODULE: ./front/src/views/FAQ.vue
function FAQ_injectStyle (ssrContext) {
  __webpack_require__(185)
}
var FAQ_normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var FAQ___vue_template_functional__ = false
/* styles */
var FAQ___vue_styles__ = FAQ_injectStyle
/* scopeId */
var FAQ___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var FAQ___vue_module_identifier__ = null
var FAQ_Component = FAQ_normalizeComponent(
  FAQ,
  views_FAQ,
  FAQ___vue_template_functional__,
  FAQ___vue_styles__,
  FAQ___vue_scopeId__,
  FAQ___vue_module_identifier__
)

/* harmony default export */ var src_views_FAQ = __webpack_exports__["default"] = (FAQ_Component.exports);


/***/ })

});