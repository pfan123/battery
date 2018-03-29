/**
 * 用户业务操作
 */

const sysModel = require('../model/sys-info')
const userCode = {

  ERROR_USER_NAME: '用户名格式为6-16位的小写字母，包括-、_',

  ERROR_EMAIL: '请输入正确的邮箱地址',

  ERROR_PASSWORD: '密码长度应该为6-16',

  ERROR_PASSWORD_CONFORM: '两次密码不一致',

  ERROR_SYS: '系统错误',

  FAIL_EMAIL_IS_EXIST: '邮箱已被注册',

  FAIL_USER_NAME_IS_EXIST: '用户名已被注册',

  FAIL_USER_NAME_OR_PASSWORD_ERROR: '用户名或登录密码错误',

  FAIL_USER_NO_LOGIN: '用户未登录',

  FAIL_USER_NO_EXIST: '用户不存在',

}

const sys = {

  /**
   * 创建系统信息
   * @param  {object} info 系统信息
   * @return {object}      创建结果
   */
  async create( info ) {
    let result = await sysModel.create(info)
    return result
  },

  /**
   * 获取系统信息
   * @param  {object} formData 查找的表单数据
   * @return {object|null}      查找结果
   */
  async getSysInfo( ) {
    let resultData = await sysModel.getSysInfo()
    return resultData
  },

  /**
   * 更新系统信息
   * @param  {object} formData 系统表单信息
   * @return {object}          系统信息更新操作结果
   */
  async updateSysInfo( formData ) {
    let resultData = await sysModel.updateSysInfo({
      title: formData.title,
      keyword: formData.keyword,
      detail: formData.detail,
      logo1: formData.logo1,
      logo2: formData.logo2,
      favicon: formData.favicon,
      modified_time: (new Date()).valueOf(),
      modified_time: (new Date()).valueOf()
    }, formData.id)
    return resultData
  }

}

module.exports = {
  sys
}
