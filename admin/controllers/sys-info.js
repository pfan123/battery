const sysInfoService = require('../services/sys-info').sys

module.exports = {

  /**
   * 登录操作
   * @param  {obejct} ctx 上下文对象
   */
  async getSysInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let sysResult = await sysInfoService.getSysInfo()

    if ( sysResult ) {
      result.success = true
      result.data = sysResult
    } else {
      result.code = 'FAIL_SYSINFO_NO_EXIST',
      result.message = "系统信息获取失败"
    }

    ctx.body = result
  },

  /**
   * 注册操作
   * @param   {obejct} ctx 上下文对象
   */
  async updateSysInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let sysResult = sysInfoService.updateSysInfo( formData )
    if ( sysResult.code == "-1" ) {
      result.code = 'FAIL_SYSINFO_NO_EXIST',
      result.message = "系统信息更新失败"      
    } else {
      result.success = true
      result.data = sysResult
    }
    ctx.body = result
  }

}
