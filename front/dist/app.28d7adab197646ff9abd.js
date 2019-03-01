webpackJsonp([9],{

/***/ 164:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(83);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./front/src/util/datetime.js
var monthEnum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

var dayEnum = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

var timeEnum = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '04', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

var datatime = {
  parseStampToFormat: function parseStampToFormat(timestamp, type) {
    var _date = void 0;
    if (timestamp) {
      _date = new Date(timestamp);
    } else {
      _date = new Date();
    }

    var yearNum = _date.getFullYear();
    var monthNum = monthEnum[_date.getMonth()];
    var dayNum = dayEnum[_date.getDate() - 1];
    var hourNum = timeEnum[_date.getHours()];
    var minNum = timeEnum[_date.getMinutes()];
    var secNum = timeEnum[_date.getSeconds()];

    type = type || 'YYYY/MM/DD/hh/mm/ss';
    var parseDatetime = type.replace('YYYY', yearNum).replace('MM', monthNum).replace('DD', dayNum).replace('hh', hourNum).replace('mm', minNum).replace('ss', secNum);

    return parseDatetime;
  },
  getNowDatetime: function getNowDatetime() {
    var timestamp = new Date().getTime();
    var nowDatetime = this.parseStampToFormat(timestamp);
    return nowDatetime;
  }
};

/* harmony default export */ var datetime = (datatime);
// CONCATENATED MODULE: ./front/src/api/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return api_getSysInfo; });
/* unused harmony export getBannerList */
/* unused harmony export getHomeProductsList */
/* unused harmony export getProductsCateList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return api_getCategoryList; });
/* unused harmony export getProductsInfo */
/* unused harmony export getNewsList */
/* unused harmony export getNewsContent */
/* unused harmony export getFaqList */
/* harmony export (immutable) */ __webpack_exports__["d"] = fetchHomePage;
/* harmony export (immutable) */ __webpack_exports__["h"] = fetchProductsPage;
/* harmony export (immutable) */ __webpack_exports__["g"] = fetchProductsDetailPage;
/* harmony export (immutable) */ __webpack_exports__["f"] = fetchNewsPage;
/* harmony export (immutable) */ __webpack_exports__["e"] = fetchNewsArticlesPage;
/* harmony export (immutable) */ __webpack_exports__["a"] = fetchAboutPage;
/* harmony export (immutable) */ __webpack_exports__["b"] = fetchContactPage;
/* harmony export (immutable) */ __webpack_exports__["c"] = fetchFaqPage;


var host = "http://127.0.0.1:8180";
// const domain = "//admin.cygereen.com"
var domain = "//admin.pfan123.com"; //临时方案

/**
 * getSysInfo 获取系统信息
 */
var api_getSysInfo = function getSysInfo() {
  return new Promise(function (resolve, reject) {
    axios_default.a.get(host + '/api/dashboard/getSysInfo.json').then(function (res) {
      if (res.status == 200) {
        var json = res.data.data;
        res.data.data.logo1 = '' + domain + res.data.data.logo1;
        res.data.data.logo2 = '' + domain + res.data.data.logo2;
        res.data.data.favicon = '' + domain + res.data.data.favicon;
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * getBannerList 获取banner信息
 * @param  type 分类 
 */
var api_getBannerList = function getBannerList(type) {
  return new Promise(function (resolve, reject) {
    axios_default.a.post(host + '/api/dashboard/getImgListCate.json', { type: type }).then(function (res) {
      if (res.status == 200) {
        var json = res.data.data;
        json = json.map(function (item) {
          return {
            src: '' + domain + item.src,
            link: item.link,
            tags: item.tags
          };
        });
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * getHomeProductsList 获取产品列表
 * @param 
 */
var api_getHomeProductsList = function getHomeProductsList() {
  return new Promise(function (resolve, reject) {
    axios_default.a.get(host + '/api/dashboard/getProductsList.json').then(function (res) {
      if (res.status == 200) {
        var json = res.data.data;
        json = json.sort(function (a, b) {
          return b.modified_time - a.modified_time;
        });
        json = json.map(function (item) {
          return {
            id: item.id,
            title: item.title,
            ftitle: item.ftitle,
            abstract: item.abstract,
            fabstract: item.fabstract,
            src: '' + domain + (item.src1 || item.src2 || item.src3 || item.src4 || item.src5),
            date: datetime.parseStampToFormat(Number(item.modified_time), 'YYYY-MM-DD hh:mm:ss')
          };
        });
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * getProductsCateList 获取产品分类列表
 * @param 
 */
var api_getProductsCateList = function getProductsCateList() {
  return new Promise(function (resolve, reject) {
    axios_default.a.get(host + '/api/dashboard/getProductsCateList.json').then(function (res) {
      if (res.status == 200) {
        var json = res.data.data.map(function (item, idx) {
          var bool = false;
          if (idx == 0) bool = true;
          return {
            'category': item.category,
            'fcategory': item.fcategory,
            'active': bool
          };
        });
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * getProductsCateList 获取产品分类列表
 * @param 
 */
var api_getCategoryList = function getCategoryList(category, sdomain) {
  var vhost = sdomain || host;
  return new Promise(function (resolve, reject) {
    axios_default.a.post(vhost + '/api/dashboard/getCateProductsList.json', { category: category }).then(function (res) {
      if (res.status == 200) {
        var json = res.data.data;
        json.sort(function (a, b) {
          var c = void 0,
              d = void 0;
          c = a.modified_time || a.create_time;
          d = b.modified_time || b.create_time;
          return d - c;
        });
        json.forEach(function (item) {
          item.src = '' + domain + item.src;
        });
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * getProductsInfo 获取产品类
 * @param  page 页面id 
 */
var api_getProductsInfo = function getProductsInfo(page) {
  return new Promise(function (resolve, reject) {
    axios_default.a.post(host + '/api/dashboard/getProductsInfo.json', { id: page }).then(function (res) {
      if (res.status == 200) {
        var json = res.data.data;
        json = {
          title: json.title,
          ftitle: json.ftitle,
          category: json.category,
          fcategory: json.fcategory,
          abstract: json.abstract,
          fabstract: json.fabstract,
          content: json.content,
          fcontent: json.fcontent,
          link: json.link,
          price: json.price,
          src: '' + domain + (json.src1 || json.src2 || json.src3 || json.src4 || json.src5),
          src1: json.src1 ? '' + domain + json.src1 : null,
          src2: json.src2 ? '' + domain + json.src2 : null,
          src3: json.src3 ? '' + domain + json.src3 : null,
          src4: json.src4 ? '' + domain + json.src4 : null,
          src5: json.src5 ? '' + domain + json.src5 : null
        };
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * getNewsList 获取新闻信息
 * @param  type 分类 
 */
var api_getNewsList = function getNewsList(type) {
  return new Promise(function (resolve, reject) {
    axios_default.a.get(host + '/api/dashboard/getNewsAbstract.json').then(function (res) {
      if (res.status == 200) {
        var json = res.data.data;
        json = json.sort(function (a, b) {
          return b.modified_time - a.modified_time;
        });
        json = json.map(function (item) {
          return {
            id: item.id,
            title: item.title,
            ftitle: item.ftitle,
            abstract: item.abstract,
            fabstract: item.fabstract,
            src: '' + domain + item.src,
            date: datetime.parseStampToFormat(Number(item.modified_time), 'YYYY-MM-DD hh:mm:ss')
          };
        });
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * getNewsContent 获取新闻内容
 * @param  type 分类 
 */
var api_getNewsContent = function getNewsContent(page) {
  return new Promise(function (resolve, reject) {
    axios_default.a.post(host + '/api/dashboard/getNewsInfo.json', { id: page }).then(function (res) {
      if (res.status == 200) {
        var json = res.data.data;
        json = {
          id: json.id,
          title: json.title,
          ftitle: json.ftitle,
          abstract: json.abstract,
          fabstract: json.fabstract,
          content: json.content,
          fcontent: json.fcontent,
          src: '' + domain + json.src,
          date: datetime.parseStampToFormat(Number(json.modified_time), 'YYYY-MM-DD hh:mm:ss')
        };
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * getFaqList 获取疑难问题信息
 * @param  type 分类 
 */
var api_getFaqList = function getFaqList() {
  return new Promise(function (resolve, reject) {
    axios_default.a.get(host + '/api/dashboard/getFaqList.json').then(function (res) {
      if (res.status == 200) {
        var json = res.data.data;
        json = json.map(function (item) {
          return {
            title: item.title,
            ftitle: item.ftitle,
            desc: item.detail,
            fdesc: item.fdetail
          };
        });
        resolve(json);
      } else {
        reject({});
      }
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/**
 * fetchHomePage 获取home数据
 */
function fetchHomePage() {
  return Promise.all([api_getSysInfo(), api_getBannerList("home"), api_getHomeProductsList(), api_getNewsList()]);
}

/**
 * fetchProductsPage 获取产品页数据
 */
function fetchProductsPage() {
  return Promise.all([api_getSysInfo(), api_getBannerList("product"), api_getProductsCateList()]);
}

/**
 * fetchProductsDetailPage 获取产品详情数据
 */
function fetchProductsDetailPage(page) {
  return Promise.all([api_getSysInfo(), api_getBannerList("product"), api_getProductsInfo(page)]);
}

/**
 * fetchProductsPage 获取新闻页数据
 */
function fetchNewsPage() {
  return Promise.all([api_getSysInfo(), api_getBannerList("news"), api_getNewsList()]);
}

/**
 * fetchProductsPage 获取新闻页数据
 */
function fetchNewsArticlesPage(page) {
  return Promise.all([api_getSysInfo(), api_getBannerList("news"), api_getNewsContent(page)]);
}

/**
 * fetchProductsPage 获取关于我们页数据
 */
function fetchAboutPage() {
  return Promise.all([api_getSysInfo(), api_getBannerList("about"), api_getNewsList()]);
}

/**
 * fetchProductsPage 获取联系我们页数据
 */
function fetchContactPage() {
  return Promise.all([api_getSysInfo(), api_getBannerList("contact"), api_getNewsList()]);
}

/**
 * fetchProductsPage 获取疑难解答页数据
 */
function fetchFaqPage() {
  return Promise.all([api_getSysInfo(), api_getBannerList("faq"), api_getFaqList()]);
}

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var filters_namespaceObject = {};
__webpack_require__.d(filters_namespaceObject, "host", function() { return host; });
__webpack_require__.d(filters_namespaceObject, "timeAgo", function() { return timeAgo; });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.common.js
var vue_common = __webpack_require__(0);
var vue_common_default = /*#__PURE__*/__webpack_require__.n(vue_common);

// EXTERNAL MODULE: ./node_modules/es6-promise/auto.js
var auto = __webpack_require__(77);
var auto_default = /*#__PURE__*/__webpack_require__.n(auto);

// CONCATENATED MODULE: ./front/src/util/utils.js
/**
 * 数组去重
 */
var unqieArr = function unqieArr(arr) {
  if (Object.prototype.toString.call(arr) != "[object Array]") {
    arr = [];
  }
  var len = arr.length,
      obj = {},
      newArr = [];

  while (len--) {
    if (obj[arr[len]] !== arr[len]) {
      obj[arr[len]] = arr[len];
      newArr.push(arr[len]);
    }
  }
  return newArr.reverse();
};

/**
 * 数组去初undefined、null、‘’
 */
var cleanArr = function cleanArr(arr) {
  if (Object.prototype.toString.call(arr) != "[object Array]") {
    arr = [];
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === undefined || arr[i] === null || arr[i] == 'undefined' || arr[i] == '') {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

/**
*
* @param fn {Function}   实际要执行的函数
* @param threshhold {Number}  执行间隔，单位是毫秒（ms）
* @param type {String}  是否第一次执行
* @return {Function}     返回一个“节流”函数
*/

var throttle = function throttle(fn, threshhold, type) {
  // 记录是否可执行
  var isRun = true;

  // 定时器
  var timer;

  type = type || true;

  // 默认间隔为 200ms
  threshhold || (threshhold = 200);

  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function () {

    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this;
    var args = arguments;

    //第一次执行
    if (type && 'undefined' == typeof timer) {
      fn();
    }

    if (!isRun) return;

    isRun = false;

    //保证间隔时间内执行
    timer = setTimeout(function () {
      fn.apply(context, args);
      isRun = true;
    }, threshhold);

    var now = +new Date();
  };
};

/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  延迟时间，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“防反跳 debounce”了的函数
 */

var debounce = function debounce(fn, delay) {

  // 定时器，用来 setTimeout
  var timer;

  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
  return function () {

    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this;
    var args = arguments;

    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer);

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay || 0);
  };
};
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/common/Header.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Header = ({
  name: 'bat-header',
  data: function data() {
    return {
      hide: false,
      route: 'index',
      menu: [{ title: '主页', ftitle: 'HOME', name: 'home', link: '/index' }, { title: '产品中心', ftitle: 'Products', name: 'product', link: '/products' }, { title: '新闻中心', ftitle: 'News Center', name: 'news', link: '/news' },
      // { title: '关于我们', ftitle: 'About Us', name: 'about', link: '/aboutus'},
      { title: '联系我们', ftitle: 'Contact Us', name: 'contact', link: '/contactus' }, { title: '疑难解答', ftitle: 'FAQ', name: 'faq', link: '/faq' }]
    };
  },

  computed: {
    logo: function logo() {
      return this.$store.getters.sysInfo.logo1;
    },
    isEnglish: function isEnglish() {
      return this.$store.getters.getIsEnglish;
    }
  },
  components: {},

  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    this.route = this.$route.name;
    window.addEventListener("scroll", throttle(function () {
      if (document.documentElement.scrollTop > 85) {
        _this.hide = true;
      } else {
        _this.hide = false;
      }
    }, 200, false), false);
    if (localStorage.getItem('local_isEnglish')) {
      this.$store.commit("SET_ISENGLISH", JSON.parse(localStorage.getItem('local_isEnglish')).isEnglish);
    }
  },


  methods: {
    tapLang: function tapLang() {
      var bool = !this.isEnglish;
      this.$store.commit("SET_ISENGLISH", bool);
      localStorage.setItem('local_isEnglish', JSON.stringify({ 'isEnglish': bool }));
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6d313b57","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/common/Header.vue
var Header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hide),expression:"!hide"}],staticClass:"header"},[_c('div',{staticClass:"header_inner"},[_c('h2',{staticClass:"header_logo"},[_c('a',{attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.logo,"alt":""}}),_c('span',[_vm._v("深圳绿行科技有限公司")])])])]),_c('ul',{staticClass:"header_nav g_cf"},[_vm._l((_vm.menu),function(item){return _c('li',{class:[_vm.route == item.name ? 'cur': '']},[_c('a',{staticClass:"header_nav_a",attrs:{"href":item.link}},[_vm._v(_vm._s(_vm.isEnglish ? item.ftitle : item.title))])])}),_c('li',{staticClass:"tap_lang",on:{"click":_vm.tapLang}},[_c('i',{class:[_vm.isEnglish ? 'icon eng':'icon']}),_vm._v(_vm._s(_vm.isEnglish ? 'English' : '中文'))])],2)])}
var staticRenderFns = []
var esExports = { render: Header_render, staticRenderFns: staticRenderFns }
/* harmony default export */ var common_Header = (esExports);
// CONCATENATED MODULE: ./front/src/components/common/Header.vue
function injectStyle (ssrContext) {
  __webpack_require__(80)
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
  Header,
  common_Header,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var components_common_Header = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/common/Footer.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var Footer = ({
  name: 'bat-footer',

  data: function data() {
    return {
      src: 'http://temp.im/144x64',
      Copyright: 'Copyright © 2018 深圳绿行科技有限公司 版权所有 备案号：粤ICP备14079927号  ICP证粤B2-20160194',
      Address: '地址：广东省深圳市龙华区三联路跟清泉路交汇处清泉大厦九楼 座机：0755－86160888'
    };
  },

  computed: {
    logo: function logo() {
      return this.$store.getters.sysInfo.logo2;
    }
  },
  components: {},

  created: function created() {},
  mounted: function mounted() {},


  methods: {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02491465","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/common/Footer.vue
var Footer_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_c('a',{staticClass:"footer_brand",attrs:{"href":"/"}},[_c('img',{attrs:{"src":_vm.logo,"alt":""}})]),_c('p',{staticClass:"footer_info line1"},[_vm._v(_vm._s(_vm.Copyright))]),_c('p',{staticClass:"footer_info line1"},[_vm._v(_vm._s(_vm.Address))])])}
var Footer_staticRenderFns = []
var Footer_esExports = { render: Footer_render, staticRenderFns: Footer_staticRenderFns }
/* harmony default export */ var common_Footer = (Footer_esExports);
// CONCATENATED MODULE: ./front/src/components/common/Footer.vue
function Footer_injectStyle (ssrContext) {
  __webpack_require__(81)
}
var Footer_normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var Footer___vue_template_functional__ = false
/* styles */
var Footer___vue_styles__ = Footer_injectStyle
/* scopeId */
var Footer___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var Footer___vue_module_identifier__ = null
var Footer_Component = Footer_normalizeComponent(
  Footer,
  common_Footer,
  Footer___vue_template_functional__,
  Footer___vue_styles__,
  Footer___vue_scopeId__,
  Footer___vue_module_identifier__
)

/* harmony default export */ var components_common_Footer = (Footer_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/App.vue
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var App = ({
  name: 'page',
  data: function data() {
    return {};
  },


  components: {
    'bat-header': components_common_Header,
    'bat-footer': components_common_Footer
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0b01e625","hasScoped":false,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('bat-header'),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[_c('router-view',{staticClass:"view"})],1),_c('bat-footer')],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var src_App = (App_esExports);
// CONCATENATED MODULE: ./front/src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__(79)
}
var App_normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var front_src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(82);

// EXTERNAL MODULE: ./front/src/api/index.js + 1 modules
var api = __webpack_require__(72);

// CONCATENATED MODULE: ./front/src/store/actions.js


/* harmony default export */ var actions = ({
  FETCH_SYS_INFO: function FETCH_SYS_INFO(_ref) {
    var commit = _ref.commit;
    return Object(api["j" /* getSysInfo */])().then(function (json) {
      commit('SET_SYS_INFO', { json: json });
    }).catch(function (err) {
      return commit('SET_SYS_INFO', {});
    });
  },

  FETCH_PAGE_DATA: function FETCH_PAGE_DATA(_ref2, _ref3) {
    var commit = _ref2.commit,
        dispatch = _ref2.dispatch,
        state = _ref2.state;
    var type = _ref3.type,
        page = _ref3.page;

    commit('SET_ACTIVE_TYPE', { type: type });
    if (type == 'home') {
      return Object(api["d" /* fetchHomePage */])().then(function (result) {
        commit('SET_SYS_INFO', { json: result[0] });
        commit('SET_BANNER_LIST', { json: result[1] });
        commit('SET_HOMEPRO_LIST', { json: result[2] });
        commit('SET_NEWS_LIST', { json: result[3] });
      }).catch(function (err) {
        return err;
      });
    } else if (type == 'product') {
      return Object(api["h" /* fetchProductsPage */])().then(function (result) {
        commit('SET_SYS_INFO', { json: result[0] });
        commit('SET_BANNER_LIST', { json: result[1] });
        commit('SET_CATEGORY_LIST', { json: result[2] });
      }).catch(function (err) {
        return err;
      });
    } else if (type == 'detail') {
      return Object(api["g" /* fetchProductsDetailPage */])(page).then(function (result) {
        commit('SET_SYS_INFO', { json: result[0] });
        commit('SET_BANNER_LIST', { json: result[1] });
        commit('SET_PRO_CONTENT', { json: result[2] });
      }).catch(function (err) {
        return err;
      });
    } else if (type == 'news') {
      return Object(api["f" /* fetchNewsPage */])().then(function (result) {
        commit('SET_SYS_INFO', { json: result[0] });
        commit('SET_BANNER_LIST', { json: result[1] });
        commit('SET_NEWS_LIST', { json: result[2] });
      }).catch(function (err) {
        return err;
      });
    } else if (type == 'newsarticles') {
      return Object(api["e" /* fetchNewsArticlesPage */])(page).then(function (result) {
        commit('SET_SYS_INFO', { json: result[0] });
        commit('SET_BANNER_LIST', { json: result[1] });
        commit('SET_NEWS_ARTICLE', { json: result[2] });
      }).catch(function (err) {
        return err;
      });
    } else if (type == 'about') {
      return Object(api["a" /* fetchAboutPage */])().then(function (result) {
        commit('SET_SYS_INFO', { json: result[0] });
        commit('SET_BANNER_LIST', { json: result[1] });
        commit('SET_NEWS_LIST', { json: result[2] });
      }).catch(function (err) {
        return err;
      });
    } else if (type == 'contact') {
      return Object(api["b" /* fetchContactPage */])().then(function (result) {
        commit('SET_SYS_INFO', { json: result[0] });
        commit('SET_BANNER_LIST', { json: result[1] });
        commit('SET_NEWS_LIST', { json: result[2] });
      }).catch(function (err) {
        return err;
      });
    } else if (type == 'faq') {
      return Object(api["c" /* fetchFaqPage */])().then(function (result) {
        commit('SET_SYS_INFO', { json: result[0] });
        commit('SET_BANNER_LIST', { json: result[1] });
        commit('SET_FAQ_LIST', { json: result[2] });
      }).catch(function (err) {
        return err;
      });
    }
  }

});
// CONCATENATED MODULE: ./front/src/store/mutations.js
/* harmony default export */ var mutations = ({
  SET_SYS_INFO: function SET_SYS_INFO(state, _ref) {
    var json = _ref.json;

    if (json) state.sysInfo = json;
  },

  SET_BANNER_LIST: function SET_BANNER_LIST(state, _ref2) {
    var json = _ref2.json;

    if (json) state.bannerList = json;
  },

  SET_HOMEPRO_LIST: function SET_HOMEPRO_LIST(state, _ref3) {
    var json = _ref3.json;

    if (json) state.homeProList = json;
  },

  SET_CATEGORY_LIST: function SET_CATEGORY_LIST(state, _ref4) {
    var json = _ref4.json;

    if (json) state.cateList = json;
  },

  SET_PRODUCT_LIST: function SET_PRODUCT_LIST(state, _ref5) {
    var json = _ref5.json;

    if (json) state.productList = json;
  },

  SET_PRO_CONTENT: function SET_PRO_CONTENT(state, _ref6) {
    var json = _ref6.json;

    if (json) state.proContent = json;
  },

  SET_NEWS_LIST: function SET_NEWS_LIST(state, _ref7) {
    var json = _ref7.json;

    if (json) state.newsList = json;
  },

  SET_NEWS_ARTICLE: function SET_NEWS_ARTICLE(state, _ref8) {
    var json = _ref8.json;

    if (json) state.newsArticles = json;
  },

  SET_FAQ_LIST: function SET_FAQ_LIST(state, _ref9) {
    var json = _ref9.json;

    if (json) state.faqList = json;
  },

  SET_ACTIVE_TYPE: function SET_ACTIVE_TYPE(state, _ref10) {
    var type = _ref10.type;

    state.activeType = type;
  },

  SET_ISENGLISH: function SET_ISENGLISH(state, bool) {
    state.isEnglish = bool;
  }
});
// CONCATENATED MODULE: ./front/src/store/getters.js
/* harmony default export */ var getters = ({
  sysInfo: function sysInfo(state) {
    return state.sysInfo;
  },
  bannerList: function bannerList(state) {
    return state.bannerList;
  },
  newsList: function newsList(state) {
    return state.newsList;
  },
  getHomeProList: function getHomeProList(state) {
    return state.homeProList;
  },
  getCateList: function getCateList(state) {
    return state.cateList;
  },
  getProductList: function getProductList(state) {
    return state.productList;
  },
  getProductContent: function getProductContent(state) {
    return state.proContent;
  },
  getNewsArticle: function getNewsArticle(state) {
    return state.newsArticles;
  },
  faqList: function faqList(state) {
    return state.faqList;
  },
  getIsEnglish: function getIsEnglish(state) {
    return state.isEnglish;
  }
});
// CONCATENATED MODULE: ./front/src/store/index.js






vue_common_default.a.use(vuex_esm["a" /* default */]);

function createStore() {
  return new vuex_esm["a" /* default */].Store({
    state: {
      isEnglish: true, // 是否英文
      sysInfo: {}, // 系统信息
      activeType: null, // 活动页面
      bannerList: [], // banner列表
      homeProList: [], // 首页产品列表
      newsList: [], // news列表
      cateList: [], // 分类列表
      productList: {}, // 分类产品列表
      proContent: {}, // 产品内容
      newsArticles: {}, // news文章
      faqList: [], // faq列表
      itemsPerPage: 20,
      items: {/* [id: number]: Item */},
      users: {/* [id: string]: User */},
      lists: {
        top: [/* number */],
        new: [],
        show: [],
        ask: [],
        job: []
      }
    },
    actions: actions,
    mutations: mutations,
    getters: getters
  });
}
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(102);

// CONCATENATED MODULE: ./front/src/router/index.js



vue_common_default.a.use(vue_router_esm["a" /* default */]);

// route-level code splitting
var Index = function Index() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 192));
};
var AboutUs = function AboutUs() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 193));
};
var ContactUs = function ContactUs() {
  return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 194));
};
var News = function News() {
  return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 195));
};
var NewsArticles = function NewsArticles() {
  return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 196));
};
var FAQ = function FAQ() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 197));
};
var Products = function Products() {
  return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 198));
};
var Detail = function Detail() {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 199));
};

function createRouter() {
  return new vue_router_esm["a" /* default */]({
    mode: 'history',
    scrollBehavior: function scrollBehavior() {
      return { y: 0 };
    },
    routes: [{ path: '/index/:page(\\d+)?', component: Index, name: 'home' }, { path: '/aboutus/:page(\\d+)?', component: AboutUs, name: 'about' }, { path: '/contactus/:page(\\d+)?', component: ContactUs, name: 'contact' }, { path: '/news/:page(\\d+)?', component: News, name: 'news' }, { path: '/newsarticles/:page(\\d+)?', component: NewsArticles, name: 'newsarticles' }, { path: '/faq/:page(\\d+)?', component: FAQ, name: 'faq' }, { path: '/products/:page(\\d+)?', component: Products, name: 'product' }, { path: '/detail/:page(\\d+)?', component: Detail, name: 'detail' }, { path: '/', redirect: '/index' }]
  });
}
// EXTERNAL MODULE: ./node_modules/vuex-router-sync/index.js
var vuex_router_sync = __webpack_require__(103);
var vuex_router_sync_default = /*#__PURE__*/__webpack_require__.n(vuex_router_sync);

// CONCATENATED MODULE: ./front/src/util/title.js
function getTitle(vm) {
  var title = vm.$options.title;

  if (title) {
    return typeof title === 'function' ? title.call(vm) : title;
  }
}

var serverTitleMixin = {
  created: function created() {
    var title = getTitle(this);
    if (title) {
      this.$ssrContext.title = 'Vue HN 2.0 | ' + title;
    }
  }
};

var clientTitleMixin = {
  mounted: function mounted() {
    var title = getTitle(this);
    if (title) {
      document.title = 'Vue HN 2.0 | ' + title;
    }
  }
};

/* harmony default export */ var title = ( false ? serverTitleMixin : clientTitleMixin);
// CONCATENATED MODULE: ./front/src/util/filters.js
function host(url) {
  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  var parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}

function timeAgo(time) {
  var between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour');
  }
  return pluralize(~~(between / 86400), ' day');
}

function pluralize(time, label) {
  if (time === 1) {
    return time + label;
  }
  return time + label + 's';
}
// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__(104);
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./front/src/assets/css/reset.styl
var css_reset = __webpack_require__(164);
var reset_default = /*#__PURE__*/__webpack_require__.n(css_reset);

// CONCATENATED MODULE: ./front/src/app.js










vue_common_default.a.use(element_ui_common_default.a);
// mixin for handling title
vue_common_default.a.mixin(title);

// register global utility filters.
Object.keys(filters_namespaceObject).forEach(function (key) {
  vue_common_default.a.filter(key, filters_namespaceObject[key]);
});

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
function createApp() {
  // create store and router instances
  var store = createStore();
  var router = createRouter();

  // sync the router with the vuex store.
  // this registers `store.state.route`
  Object(vuex_router_sync["sync"])(store, router);

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  var app = new vue_common_default.a({
    router: router,
    store: store,
    render: function render(h) {
      return h(front_src_App);
    }
  });

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app: app, router: router, store: store };
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./front/src/components/ProgressBar.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProgressBar = ({
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 3000,
      height: '2px',
      color: '#ffca2b',
      failedColor: '#ff0000'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        _this2.$nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8fcefc34","hasScoped":true,"preserveWhitespace":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./front/src/components/ProgressBar.vue
var ProgressBar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress",style:({
  'width': _vm.percent+'%',
  'height': _vm.height,
  'background-color': _vm.canSuccess? _vm.color : _vm.failedColor,
  'opacity': _vm.show ? 1 : 0
})})}
var ProgressBar_staticRenderFns = []
var ProgressBar_esExports = { render: ProgressBar_render, staticRenderFns: ProgressBar_staticRenderFns }
/* harmony default export */ var components_ProgressBar = (ProgressBar_esExports);
// CONCATENATED MODULE: ./front/src/components/ProgressBar.vue
function ProgressBar_injectStyle (ssrContext) {
  __webpack_require__(165)
}
var ProgressBar_normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var ProgressBar___vue_template_functional__ = false
/* styles */
var ProgressBar___vue_styles__ = ProgressBar_injectStyle
/* scopeId */
var ProgressBar___vue_scopeId__ = "data-v-8fcefc34"
/* moduleIdentifier (server only) */
var ProgressBar___vue_module_identifier__ = null
var ProgressBar_Component = ProgressBar_normalizeComponent(
  ProgressBar,
  components_ProgressBar,
  ProgressBar___vue_template_functional__,
  ProgressBar___vue_styles__,
  ProgressBar___vue_scopeId__,
  ProgressBar___vue_module_identifier__
)

/* harmony default export */ var src_components_ProgressBar = (ProgressBar_Component.exports);

// CONCATENATED MODULE: ./front/src/entry-client.js





// global progress bar
var bar = vue_common_default.a.prototype.$bar = new vue_common_default.a(src_components_ProgressBar).$mount();
document.body.appendChild(bar.$el);

// a global mixin that calls `asyncData` when a route component's params change
vue_common_default.a.mixin({
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var asyncData = this.$options.asyncData;

    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      }).then(next).catch(next);
    } else {
      next();
    }
  }
});

var _createApp = createApp(),
    entry_client_app = _createApp.app,
    entry_client_router = _createApp.router,
    entry_client_store = _createApp.store;

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.


if (window.__INITIAL_STATE__) {
  entry_client_store.replaceState(window.__INITIAL_STATE__);
}

// wait until router has resolved all async before hooks
// and async components...
entry_client_router.onReady(function () {
  // Add router hook for handling asyncData.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  entry_client_router.beforeResolve(function (to, from, next) {
    var matched = entry_client_router.getMatchedComponents(to);
    var prevMatched = entry_client_router.getMatchedComponents(from);
    var diffed = false;
    var activated = matched.filter(function (c, i) {
      return diffed || (diffed = prevMatched[i] !== c);
    });
    var asyncDataHooks = activated.map(function (c) {
      return c.asyncData;
    }).filter(function (_) {
      return _;
    });
    if (!asyncDataHooks.length) {
      return next();
    }

    bar.start();
    Promise.all(asyncDataHooks.map(function (hook) {
      return hook({ store: entry_client_store, route: to });
    })).then(function () {
      bar.finish();
      next();
    }).catch(next);
  });

  // actually mount to DOM
  entry_client_app.$mount('#app');
});

// service worker
// if ('https:' === location.protocol && navigator.serviceWorker) {
//   navigator.serviceWorker.register('/service-worker.js')
// }

if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js');
}

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 80:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[73]);