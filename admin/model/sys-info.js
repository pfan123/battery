const dbUtils = require('../utils/db-util')

const sys = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create ( model ) {
    let result = await dbUtils.insertData( 'sys_info', model )
    return result
  },


  /**
   * 更新系统信息
   * @param  {object} values 更新字段
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async updateSysInfo( values, id ) {
    let result = await dbUtils.updateData(
      'sys_info', values, id)

    return result
  },



  /**
   * 获取系统信息
   * @return {object|null}     查找结果
   */
  async getSysInfo( ) {
    let result = await dbUtils.select(
      'sys_info',
      ['id', 'title', 'keyword', 'detail', 'logo1', 'logo2', 'favicon'])
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },

}


module.exports = sys
