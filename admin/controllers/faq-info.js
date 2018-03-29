const faqInfoService = require('../services/faq-info')

module.exports = {

  /**
   * 获取疑难问题列表信息
   * @param  {obejct} ctx 上下文对象
   */
  async getFaqList( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let faqResult = await faqInfoService.getFaqList()
    if ( faqResult ) {
      result.success = true
      result.data = faqResult
    } else {
      result.code = 'FAIL_FAQLIST_FAIL',
      result.message = "获取疑难问题列表信息失败，请刷新重试"
    }
    ctx.body = result
  },

  /**
   * 获取某条疑难问题信息
   * @param   {obejct} ctx 上下文对象
   */
  async getFaqInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let faqResult = await faqInfoService.getFaqInfo( formData )
    if ( faqResult ) {
      result.success = true
      result.data = faqResult
    } else {
      result.code = 'FAIL_FAQINFO_FAIL',
      result.message = "获取疑难问题信息失败，请刷新重试"
    }    
    ctx.body = result
  },

  /**
   * 更新疑难问题信息
   * @param   {obejct} ctx 上下文对象
   */
  async updateFaqInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let faqResult = faqInfoService.updateFaqInfo( formData )
    if ( faqResult.code == "-1" ) {
      result.code = 'FAIL_FAQINFO_FAIL',
      result.message = "疑难问题信息更新失败"      
    } else {
      result.success = true
      result.data = faqResult
    }
    ctx.body = result
  },

  /**
   * 删除疑难问题
   * @param   {obejct} ctx 上下文对象
   */
  async deteFaq( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let faqResult = faqInfoService.deteFaq( formData )
    if ( faqResult.code == "-1" ) {
      result.code = 'FAIL_SYSINFO_NO_EXIST',
      result.message = "系统删除失败"      
    } else {
      result.success = true
      result.data = faqResult
    }
    ctx.body = result
  }
}
