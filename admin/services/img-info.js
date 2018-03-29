/**
 * 用户业务操作
 */

const imgModel = require('../model/img-info')

module.exports = {

  /**
   * 创建图片
   * @param  {object} info 系统信息
   * @return {object}      创建结果
   */
  async create( info ) {
    let result = await imgModel.create(info)
    return result
  },

  /**
   * 获取图片列表信息
   * @return {object|null}      查找结果
   */
  async getImgList( ) {
    let resultData = await imgModel.getImgList( )
    return resultData
  },

  /**
   * 根据分类获取图片列表信息
   * @return {object|null}      查找结果
   */
  async getImgListCate({type = false}) {
    let resultData = await imgModel.getImgListCate(type)
    return resultData
  },  

  /**
   * 根据id获取图片信息
   * @param  {String} id 索引值
   * @return {object|null}         查找结果
   */
  async getImgInfo( formData ) {
    let resultData = await imgModel.getImgInfo( formData.id )
    return resultData
  },  

  /**
   * 更新图片信息
   * @param  {object} formData 图片表单信息
   * @return {object}          图片信息更新操作结果
   */
  async updateImgInfo( formData ) {
    let resultData 
    if(formData.id){
      resultData = await imgModel.updateImgInfo({
        src: formData.src,
        tags: formData.tags,
        link: formData.link,
        categroy: formData.categroy,
        author: formData.author,
        modified_time: (new Date()).valueOf()
      }, formData.id)
    }else{
      resultData = await imgModel.create({
        src: formData.src,
        tags: formData.tags,
        link: formData.link,
        categroy: formData.categroy,
        author: formData.author,
        modified_time: (new Date()).valueOf(),
        create_time: (new Date()).valueOf()
      })      
    }

    return resultData
  },

  /**
   * 删除疑难问题
   * @param  {object} formData 图片表单信息
   * @return {object}         
   */
  async deteImg( formData ) {
    let resultData 
    resultData = await imgModel.deteImg( formData.id )
    return resultData
  }  
}
