const dbUtils = require('../utils/db-util')

const sys = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create ( model ) {
    let result = await dbUtils.insertData( 'img_info', model )
    return result
  },


  /**
   * 更新图片
   * @param  {object} values 更新字段
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async updateImgInfo( values, id ) {
    let result = await dbUtils.updateData(
        'img_info', values, id)

    return result
  },

  /**
   * 根据id获取图片信息
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async getImgInfo( id ) {
    let result = await dbUtils.findDataById(
        'img_info', id)
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },  
 
  /**
   * 获取图片列表信息
   * @return {object|null}     查找结果
   */
  async getImgList( type ) {
    let result = await dbUtils.select(
        'img_info',
        ['id', 'src', 'tags', 'link', 'categroy', 'author', 'create_time', 'modified_time'])            

    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  },

   /**
   * 根据分类获取图片列表信息
   * @return {object|null}     查找结果
   */
  async getImgListCate( type ) {
    let result = await dbUtils.findDataByCategroy('img_info', type)  

    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  }, 
  
  /**
   * 删除新闻文章
   * @return {object|null}     查找结果
   */
  async deteImg( id ) {
    let result = await dbUtils.deleteDataById(
      'img_info', id)
    return result
  }    
}


module.exports = sys
