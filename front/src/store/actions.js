import {
  getSysInfo,
  fetchHomePage,
  fetchProductsPage,
  fetchProductsDetailPage,
  fetchNewsPage,
  fetchNewsArticlesPage,
  fetchAboutPage,
  fetchContactPage,
  fetchFaqPage,
  getFaqList
} from '../api'

export default {
  FETCH_SYS_INFO: ({ commit }) => {
    return getSysInfo().then( json => {
      commit('SET_SYS_INFO', { json })
    }).catch( err => commit('SET_SYS_INFO', { }))
  },

  FETCH_PAGE_DATA: ({ commit, dispatch, state }, { type, page }) => {
    commit('SET_ACTIVE_TYPE', { type })
    if(type == "home"){
      return fetchHomePage().then( result => {
        commit('SET_SYS_INFO', { json: result[0] })
        commit('SET_BANNER_LIST', { json: result[1] })
        commit('SET_HOMEPRO_LIST', { json: result[2] })
        commit('SET_NEWS_LIST', { json: result[3] })
      }).catch( err => err)
    }else if(type == "product"){
      return fetchProductsPage().then( result => {
        commit('SET_SYS_INFO', { json: result[0] })
        commit('SET_BANNER_LIST', { json: result[1] })
        commit('SET_CATEGORY_LIST', { json: result[2] })
      }).catch( err => err)      
    }else if(type == "detail"){
      return fetchProductsDetailPage(page).then( result => {
        commit('SET_SYS_INFO', { json: result[0] })
        commit('SET_BANNER_LIST', { json: result[1] })
        commit('SET_PRO_CONTENT', { json: result[2] })
      }).catch( err => err)        
    }else if(type == "news"){
      return fetchNewsPage().then( result => {
        commit('SET_SYS_INFO', { json: result[0] })
        commit('SET_BANNER_LIST', { json: result[1] })
        commit('SET_NEWS_LIST', { json: result[2] })
      }).catch( err => err)  
    }else if(type == "newsarticles"){
      return fetchNewsArticlesPage(page).then( result => {
        commit('SET_SYS_INFO', { json: result[0] })
        commit('SET_BANNER_LIST', { json: result[1] })
        commit('SET_NEWS_ARTICLE', { json: result[2] })
      }).catch( err => err)               
    }else if(type == "about"){
      return fetchAboutPage().then( result => {
        commit('SET_SYS_INFO', { json: result[0] })
        commit('SET_BANNER_LIST', { json: result[1] })
        commit('SET_NEWS_LIST', { json: result[2] })
      }).catch( err => err)      
    }else if(type == "contact"){
      return fetchContactPage().then( result => {
        commit('SET_SYS_INFO', { json: result[0] })
        commit('SET_BANNER_LIST', { json: result[1] })
        commit('SET_NEWS_LIST', { json: result[2] })
      }).catch( err => err)      
    }else if(type == "faq"){
      return fetchFaqPage().then( result => {
        commit('SET_SYS_INFO', { json: result[0] })
        commit('SET_BANNER_LIST', { json: result[1] })
        commit('SET_FAQ_LIST', { json: result[2] })
      }).catch( err => err)      
    }
  }

}
