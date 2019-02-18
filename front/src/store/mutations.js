export default {
  SET_SYS_INFO: (state, { json }) => {
    if (json)state.sysInfo = json
  },

  SET_BANNER_LIST: (state, { json }) => {
    if (json)state.bannerList = json
  },

  SET_HOMEPRO_LIST: (state, { json }) => {
    if (json)state.homeProList = json
  },

  SET_CATEGORY_LIST: (state, { json }) => {
    if (json)state.cateList = json
  },

  SET_PRODUCT_LIST: (state, { json }) => {
    if (json)state.productList = json
  },

  SET_PRO_CONTENT: (state, { json }) => {
    if (json)state.proContent = json
  },

  SET_NEWS_LIST: (state, { json }) => {
    if (json)state.newsList = json
  },

  SET_NEWS_ARTICLE: (state, { json }) => {
    if (json)state.newsArticles = json
  },

  SET_FAQ_LIST: (state, { json }) => {
    if (json)state.faqList = json
  },

  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_ISENGLISH: (state, bool) => {
    state.isEnglish = bool
  }
}
