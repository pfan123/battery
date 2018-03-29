const productsInfoService = require('../services/products-info').products

Array.prototype.unique = function(key) {
  var arr = this;
  var n = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
      if (key === undefined) {
          if (n.indexOf(arr[i]) == -1) n.push(arr[i]);
      } else {
          inner: {
              var has = false;
              for (var j = 0; j < n.length; j++) {
                  if (arr[i][key] == n[j][key]) {
                      has = true;
                      break inner;
                  }
              }
          }
          if (!has) {
              n.push(arr[i]);
          }
      }
  }
  return n;
}

module.exports = {

  /**
   * 获取产品列表信息
   * @param  {obejct} ctx 上下文对象
   */
  async getProductsList( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let proResult = await productsInfoService.getProductsList()
    if ( proResult ) {
      result.success = true
      result.data = proResult
    } else {
      result.code = 'FAIL_PRODUCTSLIST_FAIL',
      result.message = "获取产品列表信息失败，请刷新重试"
    }
    ctx.body = result
  },

  /**
   * 获取产品分类列表信息
   * @param  {obejct} ctx 上下文对象
   */
  async getProductsCateList( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let proResult = await productsInfoService.getProductsCateList()
    if ( proResult ) {
      result.success = true
      result.data = proResult.unique("category")
    } else {
      result.code = 'FAIL_PRODUCTSLIST_FAIL',
      result.message = "获取产品分类列表信息失败，请刷新重试"
    }
    ctx.body = result
  },

  /**
   * 根据category获取产品信息
   * @param  {obejct} ctx 上下文对象
   */
  async getCateProductsList( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let proResult = await productsInfoService.getCateProductsList( formData )
    if ( proResult ) {
      result.success = true
      result.data = proResult.map( item => {
        return {
          id: item.id,
          author: item.author,
          title: item.title,
          ftitle: item.ftitle,
          category: item.category,
          fcategory: item.fcategory,
          create_time: item.create_time,
          modified_time: item.modified_time,
          price: item.price,  
          link: item.link,
          src: (item.src1 || item.src2 || item.src3 || item.src4 || item.src5)     
        }
      })
    } else {
      result.code = 'FAIL_PRODUCTSLIST_FAIL',
      result.message = "获取产品分类列表信息失败，请刷新重试"
    }
    ctx.body = result
  },  

  /**
   * 获取产品摘要信息
   * @param  {obejct} ctx 上下文对象
   */
  async getProductsAbstract( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let proResult = await productsInfoService.getProductsAbstract()
    if ( proResult ) {
      result.success = true
      result.data = proResult
    } else {
      result.code = 'FAIL_PRODUCTSLIST_FAIL',
      result.message = "获取产品列表信息失败，请刷新重试"
    }
    ctx.body = result
  },  

  /**
   * 获取产品内容
   * @param  {obejct} ctx 上下文对象
   */
  async getProductsContent( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: ''
    }
    
    let proResult = await productsInfoService.getProductsContent()
    if ( proResult ) {
      result.success = true
      result.data = proResult
    } else {
      result.code = 'FAIL_PRODUCTSLIST_FAIL',
      result.message = "获取产品列表信息失败，请刷新重试"
    }
    ctx.body = result
  },   

  /**
   * 获取某条产品信息
   * @param   {obejct} ctx 上下文对象
   */
  async getProductsInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let proResult = await productsInfoService.getProductsInfo( formData )
    if ( proResult ) {
      result.success = true
      result.data = proResult
    } else {
      result.code = 'FAIL_PRODUCTSINFO_FAIL',
      result.message = "获取产品信息失败，请刷新重试"
    }    
    ctx.body = result
  },

  /**
   * 更新产品信息
   * @param   {obejct} ctx 上下文对象
   */
  async updateProductsInfo( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let proResult = productsInfoService.updateProductsInfo( formData )
    if ( proResult.code == "-1" ) {
      result.code = 'FAIL_PRODUCTSINFO_FAIL',
      result.message = "产品信息更新失败"      
    } else {
      result.success = true
      result.data = proResult
    }
    ctx.body = result
  },

  /**
   * 删除产品
   * @param   {obejct} ctx 上下文对象
   */
  async deteProducts( ctx ) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null
    }

    let proResult = productsInfoService.deteProducts( formData )
    if ( proResult.code == "-1" ) {
      result.code = 'FAIL_PRODUCTSINFO_NO_EXIST',
      result.message = "系统删除失败"      
    } else {
      result.success = true
      result.data = proResult
    }
    ctx.body = result
  }
}
