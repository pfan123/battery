/**
 * 用户业务操作
 */

const productsModel = require('../model/products-info')

const products = {

  /**
   * 创建系统信息
   * @param  {object} info 系统信息
   * @return {object}      创建结果
   */
  async create( info ) {
    let result = await productsModel.create(info)
    return result
  },

  /**
   * 获取新闻文章列表信息
   * @return {object|null}      查找结果
   */
  async getProductsList( ) {
    let resultData = await productsModel.getProductsList()
    return resultData
  },

  /**
   * 获取产品分类列表信息
   * @return {object|null}     查找结果
   */
  async getProductsCateList( ){
    let resultData = await productsModel.getProductsCateList()
    return resultData
  },

  /**
   * 获取产品分类列表信息
   * @return {object|null}     查找结果
   */
  async getCateProductsList( formData ){
    let resultData = await productsModel.getCateProductsList(formData.category)
    return resultData
  },  

  /**
   * 获取新闻文章摘要信息
   * @return {object|null}      查找结果
   */
  async getProductsAbstract( ) {
    let resultData = await productsModel.getProductsAbstract()
    return resultData
  },

  /**
   * 获取新闻文章内容
   * @return {object|null}      查找结果
   */
  async getProductsContent( ) {
    let resultData = await productsModel.getProductsContent()
    return resultData
  },

  /**
   * 根据id获取新闻文章
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async getProductsInfo( formData ) {
    let resultData = await productsModel.getProductsInfo( formData.id )
    return resultData
  },  

  /**
   * 更新新闻文章信息
   * @param  {object} formData 新闻表单信息
   * @return {object}          新闻文章信息更新操作结果
   */
  async updateProductsInfo( formData ) {
    let resultData 
    if(formData.id){
      resultData = await productsModel.updateProductsInfo({
        title: formData.title,
        ftitle: formData.ftitle,
        category: formData.category,
        fcategory: formData.fcategory,          
        abstract: formData.abstract,
        fabstract: formData.fabstract,
        price: formData.price,
        src1: formData.src1,
        src2: formData.src2,
        src3: formData.src3,
        src4: formData.src4,
        src5: formData.src5,
        link: formData.link,        
        content: formData.content,
        fcontent: formData.fcontent,
        author: formData.author,
        modified_time: (new Date()).valueOf()
      }, formData.id)
    }else{
      resultData = await productsModel.create({
        title: formData.title,
        ftitle: formData.ftitle,
        category: formData.category,
        fcategory: formData.fcategory,          
        abstract: formData.abstract,
        fabstract: formData.fabstract,
        price: formData.price,
        src1: formData.src1,
        src2: formData.src2,
        src3: formData.src3,
        src4: formData.src4,
        src5: formData.src5,
        link: formData.link,        
        content: formData.content,
        fcontent: formData.fcontent,
        author: formData.author,
        modified_time: (new Date()).valueOf(),
        create_time: (new Date()).valueOf()
      })      
    }

    return resultData
  },

  /**
   * 删除新闻文章
   * @param  {object} formData 新闻表单信息
   * @return {object}         
   */
  async deteProducts( formData ) {
    let resultData 
    resultData = await productsModel.deteProducts( formData.id )
    return resultData
  }  
}

module.exports = {
  products
}

