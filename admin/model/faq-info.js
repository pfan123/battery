const dbUtils = require('../utils/db-util')

const sys = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create ( model ) {
    let result = await dbUtils.insertData( 'sys_faq', model )
    return result
  },


  /**
   * 更新疑难问题
   * @param  {object} values 更新字段
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async updateFaqInfo( values, id ) {
    let result = await dbUtils.updateData(
        'sys_faq', values, id)

    return result
  },

  /**
   * 根据id获取更新疑难问题
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async getFaqInfo( id ) {
    let result = await dbUtils.findDataById(
        'sys_faq', id)
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },  
 
  /**
   * 获取更新疑难问题列表信息
   * @return {object|null}     查找结果
   */
  async getFaqList( ) {
    let result = await dbUtils.select(
      'sys_faq',
      ['id', 'title', 'ftitle', 'detail', 'fdetail', 'author', 'create_time', 'modified_time'])
    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  },

  /**
   * 获取更新疑难问题
   * @return {object|null}     查找结果
   */
  async getFaqContent( ) {
    let result = await dbUtils.select(
      'sys_faq',
      ['id', 'title', 'ftitle', 'detail', 'fdetail'])
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },
  
  /**
   * 删除新闻文章
   * @return {object|null}     查找结果
   */
  async deteFaq( id ) {
    let result = await dbUtils.deleteDataById(
      'sys_faq', id)
    return result
  }    
}


module.exports = sys
