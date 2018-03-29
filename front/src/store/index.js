import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      isEnglish: true, //是否英文
      sysInfo: {},  //系统信息
      activeType: null,  //活动页面
      bannerList: [],   //banner列表
      homeProList: [],  //首页产品列表
      newsList: [],    //news列表
      cateList: [],    //分类列表
      productList: {}, //分类产品列表
      proContent: {}, //产品内容
      newsArticles: {},   //news文章
      faqList: [],     //faq列表
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
    actions,
    mutations,
    getters
  })
}
