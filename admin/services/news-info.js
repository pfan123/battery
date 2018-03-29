/**
 * 用户业务操作
 */

const newsModel = require('../model/news-info')

const news = {

  /**
   * 创建系统信息
   * @param  {object} info 系统信息
   * @return {object}      创建结果
   */
  async create( info ) {
    let result = await newsModel.create(info)
    return result
  },

  /**
   * 获取新闻文章列表信息
   * @return {object|null}      查找结果
   */
  async getNewsList( ) {
    let resultData = await newsModel.getNewsList()
    return resultData
  },

  /**
   * 获取新闻文章摘要信息
   * @return {object|null}      查找结果
   */
  async getNewsAbstract( ) {
    let resultData = await newsModel.getNewsAbstract()
    return resultData
  },

  /**
   * 获取新闻文章内容
   * @return {object|null}      查找结果
   */
  async getNewsContent( ) {
    let resultData = await newsModel.getNewsContent()
    return resultData
  },

  /**
   * 根据id获取新闻文章
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async getNewsInfo( formData ) {
    let resultData = await newsModel.getNewsInfo( formData.id )
    return resultData
  },  

  /**
   * 更新新闻文章信息
   * @param  {object} formData 新闻表单信息
   * @return {object}          新闻文章信息更新操作结果
   */
  async updateNewsInfo( formData ) {
    let resultData 
    if(formData.id){
      resultData = await newsModel.updateNewsInfo({
        title: formData.title,
        ftitle: formData.ftitle,
        abstract: formData.abstract,
        fabstract: formData.fabstract,
        content: formData.content,
        fcontent: formData.fcontent,
        src: formData.src,
        author: formData.author,
        modified_time: (new Date()).valueOf()
      }, formData.id)
    }else{
      resultData = await newsModel.create({
        title: formData.title,
        ftitle: formData.ftitle,
        abstract: formData.abstract,
        fabstract: formData.fabstract,
        content: formData.content,
        fcontent: formData.fcontent,
        src: formData.src,        
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
  async deteNews( formData ) {
    let resultData 
    resultData = await newsModel.deteNews( formData.id )
    return resultData
  }  
}

module.exports = {
  news
}

