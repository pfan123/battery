import axios from 'axios'
import dateTime from '../util/datetime'
const host = "http://127.0.0.1:8180"
const domain = "//admin.cygereen.com"

/**
 * getSysInfo 获取系统信息
 */
export const getSysInfo = () => {
  return new Promise( (resolve, reject) => {
    axios.get(`${host}/api/dashboard/getSysInfo.json`).then( res => {
      if(res.status == 200){
        let json = res.data.data
        res.data.data.logo1 = `${domain}` + res.data.data.logo1
        res.data.data.logo2 = `${domain}` + res.data.data.logo2
        res.data.data.favicon = `${domain}` + res.data.data.favicon
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })
}

/**
 * getBannerList 获取banner信息
 * @param  type 分类 
 */
export const getBannerList = (type) => {
  return new Promise( (resolve, reject) => {
    axios.post(`${host}/api/dashboard/getImgListCate.json`, {type}).then( res => {
      if(res.status == 200){
        let json = res.data.data
        json = json.map( item => {
          return {
            src: `${domain}` + item.src,
            link: item.link,
            tags: item.tags
          }
        })
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })
}

/**
 * getHomeProductsList 获取产品列表
 * @param 
 */
export const getHomeProductsList = ( ) => {
  return new Promise( (resolve, reject) => {
    axios.get(`${host}/api/dashboard/getProductsList.json`).then( res => {
      if(res.status == 200){
        let json = res.data.data
        json = json.sort( (a, b) => {
          return  b.modified_time - a.modified_time
        })        
        json = json.map( item => {
          return {
            id: item.id,
            title: item.title,
            ftitle: item.ftitle,
            abstract: item.abstract,
            fabstract: item.fabstract,
            src: `${domain}` + (item.src1||item.src2 || item.src3 || item.src4 || item.src5),
            date: dateTime.parseStampToFormat(Number(item.modified_time), 'YYYY-MM-DD hh:mm:ss')             
          }
        })
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })  
}

/**
 * getProductsCateList 获取产品分类列表
 * @param 
 */
export const getProductsCateList = ( ) => {
  return new Promise( (resolve, reject) => {
    axios.get(`${host}/api/dashboard/getProductsCateList.json`).then( res => {
      if(res.status == 200){
        let json = res.data.data.map( (item, idx) => {
          let bool = false
          if(idx == 0)bool=true
          return {
            'category': item.category,
            'fcategory': item.fcategory,
            'active': bool
          }
        })
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })  
}

/**
 * getProductsCateList 获取产品分类列表
 * @param 
 */
export const getCategoryList = ( category, sdomain ) => {
  let vhost = sdomain || host
  return new Promise( (resolve, reject) => {
    axios.post(`${vhost}/api/dashboard/getCateProductsList.json`, { category }).then( res => {
      if(res.status == 200){
        let json = res.data.data
        json.sort( (a, b) => {
          let c, d
          c = a.modified_time || a.create_time
          d = b.modified_time || b.create_time
          return d - c
        })
        json.forEach( item => {
          item.src = `${domain}` + item.src
        })
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })  
}

/**
 * getProductsInfo 获取产品类
 * @param  page 页面id 
 */
export const getProductsInfo = (page) => {
  return new Promise( (resolve, reject) => {
    axios.post(`${host}/api/dashboard/getProductsInfo.json`, {id: page }).then( res => {
      if(res.status == 200){
        let json = res.data.data
        json = {
            title: json.title,
            ftitle: json.ftitle,
            category: json.category,
            fcategory: json.fcategory,
            abstract: json.abstract,
            fabstract: json.fabstract,
            content: json.content,
            fcontent: json.fcontent,
            link: json.link,
            price: json.price,
            src: `${domain}` + (json.src1 || json.src2 || json.src3 || json.src4 || json.src5),
            src1:  json.src1 ? `${domain}` + json.src1 : null,        
            src2: json.src2 ? `${domain}` + json.src2 : null,        
            src3: json.src3 ? `${domain}` + json.src3 : null,        
            src4: json.src4 ? `${domain}` + json.src4 : null,       
            src5: json.src5 ? `${domain}` + json.src5 : null      
        }
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })
}

/**
 * getNewsList 获取新闻信息
 * @param  type 分类 
 */
export const getNewsList = (type) => {
  return new Promise( (resolve, reject) => {
    axios.get(`${host}/api/dashboard/getNewsAbstract.json`).then( res => {
      if(res.status == 200){
        let json = res.data.data
        json = json.sort( (a, b) => {
          return  b.modified_time - a.modified_time
        })        
        json = json.map( item => {
          return {
            id: item.id,
            title: item.title,
            ftitle: item.ftitle,
            abstract: item.abstract,
            fabstract: item.fabstract,
            src: `${domain}` + item.src,
            date: dateTime.parseStampToFormat(Number(item.modified_time), 'YYYY-MM-DD hh:mm:ss')             
          }
        })
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })
}

/**
 * getNewsContent 获取新闻内容
 * @param  type 分类 
 */
export const getNewsContent = (page) => {
  return new Promise( (resolve, reject) => {
    axios.post(`${host}/api/dashboard/getNewsInfo.json`, {id: page }).then( res => {
      if(res.status == 200){
        let json = res.data.data
        json = {
            id: json.id,
            title: json.title,
            ftitle: json.ftitle,
            abstract: json.abstract,
            fabstract: json.fabstract,
            content: json.content,
            fcontent: json.fcontent,
            src: `${domain}` + json.src,
            date: dateTime.parseStampToFormat(Number(json.modified_time), 'YYYY-MM-DD hh:mm:ss')             
        }
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })
}

/**
 * getFaqList 获取疑难问题信息
 * @param  type 分类 
 */
export const getFaqList = () => {
  return new Promise( (resolve, reject) => {
    axios.get(`${host}/api/dashboard/getFaqList.json`).then( res => {
      if(res.status == 200){
        let json = res.data.data
        json = json.map( item => {
          return {
            title: item.title,
            ftitle: item.ftitle,
            desc: item.detail,
            fdesc: item.fdetail
          }
        })        
        resolve(json)
      }else{
        reject({})
      }   
    }).catch( err => reject(err))
  })
}

/**
 * fetchHomePage 获取home数据
 */
export function fetchHomePage () {
  return Promise.all([getSysInfo(), getBannerList("home"), getHomeProductsList(), getNewsList()])
}

/**
 * fetchProductsPage 获取产品页数据
 */
export function fetchProductsPage () {
  return Promise.all([getSysInfo(), getBannerList("product"), getProductsCateList()])
}

/**
 * fetchProductsDetailPage 获取产品详情数据
 */
export function fetchProductsDetailPage (page) {
  return Promise.all([getSysInfo(), getBannerList("product"), getProductsInfo(page)])
}


/**
 * fetchProductsPage 获取新闻页数据
 */
export function fetchNewsPage () {
  return Promise.all([getSysInfo(), getBannerList("news"), getNewsList()])
}

/**
 * fetchProductsPage 获取新闻页数据
 */
export function fetchNewsArticlesPage (page) {
  return Promise.all([getSysInfo(), getBannerList("news"), getNewsContent(page)])
}


/**
 * fetchProductsPage 获取关于我们页数据
 */
export function fetchAboutPage () {
  return Promise.all([getSysInfo(), getBannerList("about"), getNewsList()])
}

/**
 * fetchProductsPage 获取联系我们页数据
 */
export function fetchContactPage () {
  return Promise.all([getSysInfo(), getBannerList("contact"), getNewsList()])
}

/**
 * fetchProductsPage 获取疑难解答页数据
 */
export function fetchFaqPage () {
  return Promise.all([getSysInfo(), getBannerList("faq"), getFaqList()])
}
