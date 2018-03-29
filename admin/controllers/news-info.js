const newsInfoService = require('../services/news-info').news

module.exports = {

  /**
   * 获取新闻文章列表信息
   * @param  {obejct} ctx 上下文对象
   */
  async getNewsList( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let newsResult = await newsInfoService.getNewsList()
    if ( newsResult ) {
      result.success = true
      result.data = newsResult
    } else {
      result.code = 'FAIL_NEWSLIST_FAIL',
      result.message = "获取新闻列表信息失败，请刷新重试"
    }
    ctx.body = result
  },

  /**
   * 获取新闻文章摘要信息
   * @param  {obejct} ctx 上下文对象
   */
  async getNewsAbstract( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let newsResult = await newsInfoService.getNewsAbstract()
    if ( newsResult ) {
      result.success = true
      result.data = newsResult
    } else {
      result.code = 'FAIL_NEWSLIST_FAIL',
      result.message = "获取新闻列表信息失败，请刷新重试"
    }
    ctx.body = result
  },  

  /**
   * 获取新闻文章内容
   * @param  {obejct} ctx 上下文对象
   */
  async getNewsContent( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let newsResult = await newsInfoService.getNewsContent()
    if ( newsResult ) {
      result.success = true
      result.data = newsResult
    } else {
      result.code = 'FAIL_NEWSLIST_FAIL',
      result.message = "获取新闻列表信息失败，请刷新重试"
    }
    ctx.body = result
  },   

  /**
   * 获取某条新闻文章信息
   * @param   {obejct} ctx 上下文对象
   */
  async getNewsInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let newsResult = await newsInfoService.getNewsInfo( formData )
    if ( newsResult ) {
      result.success = true
      result.data = newsResult
    } else {
      result.code = 'FAIL_NEWSINFO_FAIL',
      result.message = "获取新闻文章信息失败，请刷新重试"
    }    
    ctx.body = result
  },

  /**
   * 更新新闻文章信息
   * @param   {obejct} ctx 上下文对象
   */
  async updateNewsInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let newsResult = newsInfoService.updateNewsInfo( formData )
    if ( newsResult.code == "-1" ) {
      result.code = 'FAIL_NEWSINFO_FAIL',
      result.message = "新闻文章信息更新失败"      
    } else {
      result.success = true
      result.data = newsResult
    }
    ctx.body = result
  },

  /**
   * 删除新闻文章
   * @param   {obejct} ctx 上下文对象
   */
  async deteNews( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let newsResult = newsInfoService.deteNews( formData )
    if ( newsResult.code == "-1" ) {
      result.code = 'FAIL_SYSINFO_NO_EXIST',
      result.message = "系统删除失败"      
    } else {
      result.success = true
      result.data = newsResult
    }
    ctx.body = result
  }
}
