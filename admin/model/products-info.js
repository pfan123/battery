const dbUtils = require('../utils/db-util')

const sys = {

  /**
   * 数据库创建用户
   * @param  {object} model 用户数据模型
   * @return {object}       mysql执行结果
   */
  async create ( model ) {
    let result = await dbUtils.insertData( 'products_info', model )
    return result
  },


  /**
   * 更新产品信息
   * @param  {object} values 更新字段
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async updateProductsInfo( values, id ) {
    let result = await dbUtils.updateData(
        'products_info', values, id)
    return result
  },

  /**
   * 根据id获取产品信息
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async getProductsInfo( id ) {
    let result = await dbUtils.findDataById(
        'products_info', id)
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },  

  /**
   * 根据category获取产品信息
   * @param  {String} category 分类
   * @return {object|null}         查找结果
   */
  async getCateProductsList( category ) {
    let _sql = `
    SELECT id, title, ftitle, author, create_time, modified_time, price, link, src1, src2, src3, src4, src5, category, fcategory from products_info
      where category="${category}"`
    let result = await dbUtils.query( _sql )   
    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  },    
 
  /**
   * 获取产品列表信息
   * @return {object|null}     查找结果
   */
  async getProductsList( ) {
    let result = await dbUtils.select(
      'products_info',
      ['id', 'title', 'ftitle', 'author', 'create_time', 'modified_time', 'src1', 'src2', 'src3', 'src4', 'src5', 'category', 'fcategory', "price"])
    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  },

  /**
   * 获取产品分类列表信息
   * @return {object|null}     查找结果
   */
  async getProductsCateList( ) {
    let result = await dbUtils.select(
      'products_info',
      ['category', 'fcategory'])
    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  },

  /**
   * 获取产品摘要信息
   * @return {object|null}     查找结果
   */
  async getProductsAbstract( ) {
    let result = await dbUtils.select(
      'products_info',
      ['id', 'title', 'ftitle', 'author', 'abstract', 'fabstract', 'src', 'create_time', 'modified_time'])
    if ( !Array.isArray(result) && result.length > 0 ) {
      result = null
    }
    return result
  },

  /**
   * 获取产品内容
   * @return {object|null}     查找结果
   */
  async getProductsContent( ) {
    let result = await dbUtils.select(
      'products_info',
      ['id', 'title', 'ftitle', 'author', 'content', 'fcontent', 'src', 'modified_time'])
    if ( Array.isArray(result) && result.length > 0 ) {
      result = result[0]
    } else {
      result = null
    }
    return result
  },
  
  /**
   * 删除产品
   * @return {object|null}     查找结果
   */
  async deteProducts( id ) {
    let result = await dbUtils.deleteDataById(
      'products_info', id)
    return result
  }    
}


module.exports = sys
