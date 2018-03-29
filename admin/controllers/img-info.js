const imgInfoService = require('../services/img-info')

module.exports = {

  /**
   * 获取图片列表信息
   * @param  {obejct} ctx 上下文对象
   */
  async getImgList( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let imgResult = await imgInfoService.getImgList( )
    let temp = {}
    if ( imgResult ) {
      imgResult.forEach( item => {
        if(!temp[item.categroy])temp[item.categroy] = []
        temp[item.categroy].push(item)
      })      
      result.success = true
      result.data = temp
    } else {
      result.code = 'FAIL_IMGLIST_FAIL',
      result.message = "获取图片列表信息失败，请刷新重试"
    }

    ctx.body = result
  },

  /**
   * 获取分类图片列表信息
   * @param  {obejct} ctx 上下文对象
   */
  async getImgListCate( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    if(!formData.type){
      result.data = []
      ctx.body = result
      return 
    }    
    
    let imgResult = await imgInfoService.getImgListCate( formData )
    if ( imgResult ) {   
      result.success = true
      result.data = imgResult
    } else {
      result.code = 'FAIL_IMGLIST_FAIL',
      result.message = "获取图片列表信息失败，请刷新重试"
    }

    ctx.body = result
  },
  

  /**
   * 获取某条图片信息
   * @param   {obejct} ctx 上下文对象
   */
  async getImgInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let imgResult = await imgInfoService.getImgInfo( formData )
    if ( imgResult ) {
      result.success = true
      result.data = imgResult
    } else {
      result.code = 'FAIL_IMGINFO_FAIL',
      result.message = "获取图片信息失败，请刷新重试"
    }    
    ctx.body = result
  },

  /**
   * 更新图片信息
   * @param   {obejct} ctx 上下文对象
   */
  async updateImgInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let imgResult = imgInfoService.updateImgInfo( formData )
    if ( imgResult.code == "-1" ) {
      result.code = 'FAIL_IMGINFO_FAIL',
      result.message = "图片信息更新失败"      
    } else {
      result.success = true
      result.data = imgResult
    }
    ctx.body = result
  },

  /**
   * 删除图片
   * @param   {obejct} ctx 上下文对象
   */
  async deteImg( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let imgResult = imgInfoService.deteImg( formData )
    if ( imgResult.code == "-1" ) {
      result.code = 'FAIL_SYSINFO_NO_EXIST',
      result.message = "系统删除失败"      
    } else {
      result.success = true
      result.data = imgResult
    }
    ctx.body = result
  }
}
