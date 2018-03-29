const dbUtils = require('../utils/db-util')

const sys = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create ( model ) {
    let result = await dbUtils.insertData( 'news_info', model )
    return result
  },


  /**
   * 更新新闻文章
   * @param  {object} values 更新字段
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async updateNewsInfo( values, id ) {
    let result = await dbUtils.updateData(
        'news_info', values, id)

    return result
  },

  /**
   * 根据id获取新闻文章
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async getNewsInfo( id ) {
    let result = await dbUtils.findDataById(
        'news_info', id)
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },  
 
  /**
   * 获取新闻文章列表信息
   * @return {object|null}     查找结果
   */
  async getNewsList( ) {
    let result = await dbUtils.select(
      'news_info',
      ['id', 'title', 'ftitle', 'author', 'create_time', 'modified_time'])
    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  },

  /**
   * 获取新闻文章摘要信息
   * @return {object|null}     查找结果
   */
  async getNewsAbstract( ) {
    let result = await dbUtils.select(
      'news_info',
      ['id', 'title', 'ftitle', 'author', 'abstract', 'fabstract', 'src', 'create_time', 'modified_time'])
    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  },

  /**
   * 获取新闻文章内容
   * @return {object|null}     查找结果
   */
  async getNewsContent( ) {
    let result = await dbUtils.select(
      'news_info',
      ['id', 'title', 'ftitle', 'author', 'content', 'fcontent', 'src', 'modified_time'])
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
  async deteNews( id ) {
    let result = await dbUtils.deleteDataById(
      'news_info', id)
    return result
  }    
}


module.exports = sys
