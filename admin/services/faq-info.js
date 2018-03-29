/**
 * 用户业务操作
 */

const faqModel = require('../model/faq-info')

module.exports = {

  /**
   * 创建疑难问题
   * @param  {object} info 系统信息
   * @return {object}      创建结果
   */
  async create( info ) {
    let result = await faqModel.create(info)
    return result
  },

  /**
   * 获取疑难问题列表信息
   * @return {object|null}      查找结果
   */
  async getFaqList( ) {
    let resultData = await faqModel.getFaqList()
    return resultData
  },

  /**
   * 根据id获取疑难问题
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async getFaqInfo( formData ) {
    let resultData = await faqModel.getFaqInfo( formData.id )
    return resultData
  },  

  /**
   * 更新疑难问题信息
   * @param  {object} formData 新闻表单信息
   * @return {object}          疑难问题信息更新操作结果
   */
  async updateFaqInfo( formData ) {
    let resultData 
    if(formData.id){
      resultData = await faqModel.updateFaqInfo({
        title: formData.title,
        ftitle: formData.ftitle,
        detail: formData.detail,
        fdetail: formData.fdetail,
        author: formData.author,
        modified_time: (new Date()).valueOf()
      }, formData.id)
    }else{
      resultData = await faqModel.create({
        title: formData.title,
        ftitle: formData.ftitle,
        detail: formData.detail,
        fdetail: formData.fdetail,
        author: formData.author,
        modified_time: (new Date()).valueOf(),
        create_time: (new Date()).valueOf()
      })      
    }

    return resultData
  },

  /**
   * 删除疑难问题
   * @param  {object} formData 新闻表单信息
   * @return {object}         
   */
  async deteFaq( formData ) {
    let resultData 
    resultData = await faqModel.deteFaq( formData.id )
    return resultData
  }  
}
