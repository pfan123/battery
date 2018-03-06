/**
 * 用户业务操作
 */

const validator = require('validator')
const userModel = require('../model/user-info')
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

const user = {

  /**
   * 创建用户
   * @param  {object} user 用户信息
   * @return {object}      创建结果
   */
  async create( user ) {
    let result = await userModel.create(user)
    return result
  },

  /**
   * 查找存在用户信息
   * @param  {object} formData 查找的表单数据
   * @return {object|null}      查找结果
   */
  async getExistOne( formData ) {
    let resultData = await userModel.getExistOne({
      'email': formData.email,
      'name': formData.userName
    })
    return resultData
  },

  /**
   * 登录业务操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录业务操作结果
   */
  async signIn( formData ) {
    let resultData = await userModel.getOneByUserNameAndPassword({
      'password': formData.password,
      'name': formData.userName})
    return resultData
  },


  /**
   * 根据用户名查找用户业务操作
   * @param  {string} userName 用户名
   * @return {object|null}     查找结果
   */
  async getUserInfoByUserName( userName ) {
    
    let resultData = await userModel.getUserInfoByUserName( userName ) || {}
    let userInfo = {
      // id: resultData.id,
      email: resultData.email,
      userName: resultData.name,
      detailInfo: resultData.detail_info,
      createTime: resultData.create_time
    }
    return userInfo
  },


  /**
   * 检验用户注册数据
   * @param  {object} userInfo 用户注册数据
   * @return {object}          校验结果
   */
  validatorSignUp( userInfo ) {
    let result = {
      success: false,
      message: '',
    }

    if ( /[a-z0-9\_\-]{6,16}/.test(userInfo.userName) === false ) {
      result.message = userCode.ERROR_USER_NAME
      return result
    }
    if ( !validator.isEmail( userInfo.email ) ) {
      result.message = userCode.ERROR_EMAIL
      return result
    }
    if ( !/[\w+]{6,16}/.test( userInfo.password )  ) {
      result.message = userCode.ERROR_PASSWORD
      return result
    }
    if ( userInfo.password !== userInfo.confirmPassword ) {
      result.message = userCode.ERROR_PASSWORD_CONFORM
      return result
    }

    result.success = true

    return result
  }

}

module.exports = {
  userCode,
  user
}
