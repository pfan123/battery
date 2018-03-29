const inspect = require('util').inspect
const path = require('path')
const os = require('os')
const fs = require('fs')
const Busboy = require('busboy')
const UtilType = require('./type')
const UtilDatetime = require('./datetime')

/**
 * 同步创建文件目录
 * @param  {string} dirname 目录绝对地址
 * @return {boolean}        创建目录结果
 */
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */
function getSuffixName( fileName ) {
  let nameList = fileName.split('.')
  return nameList[nameList.length - 1]
}

/**
 * 上传文件
 * @param  {object} ctx     koa上下文
 * @param  {object} options 文件上传参数 fileType文件类型， path文件存放路径
 * @return {promise}         
 */
function uploadPicture( ctx, options) {
  let req = ctx.req
  let res = ctx.res
  let busboy = new Busboy({headers: req.headers})

  let pictureType = 'common'
  if ( UtilType.isJSON( options ) && UtilType.isString( options.pictureType ) ) {
    pictureType = options.pictureType
  }

  let picturePath = path.join(
    __dirname, 
    '../upload/img/', 
    pictureType, 
    UtilDatetime.parseStampToFormat(null, 'YYYYMMDD'))

  let mkdirResult = mkdirsSync( picturePath )
  

  return new Promise((resolve, reject) => {
    let result = { 
      success: false,
      code: '',
      message: '',
      data: null
    }

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log('File-file [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype)
      

      let pictureName = Math.random().toString(16).substr(2) + '.' + getSuffixName(filename)
      let _uploadFilePath = path.join( picturePath, pictureName )
      console.log(_uploadFilePath)
      
      let saveTo = path.join(_uploadFilePath)
      file.pipe(fs.createWriteStream(saveTo))
      let reToPath = path.join('/', path.relative('admin', path.relative(process.cwd(), _uploadFilePath)))
      // file.on('data', function(data) {
      //   console.log('File-data [' + fieldname + '] got ' + data.length + ' bytes')
      // })

      file.on('end', function() {
        console.log('File-end [' + fieldname + '] Finished')
        result.success = true
        result.data = {path: reToPath}
        resolve(result)
      })
    })

    // busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
    //   console.log('Field-field [' + fieldname + ']: value: ' + inspect(val))
    // })
    // busboy.on('finish', function() {
    //   console.log('Done parsing form!')
    // })

    busboy.on('error', function(err) {
      console.log('File-error')
      reject(result)
    })

    req.pipe(busboy)
  })
    
} 


module.exports =  {
  uploadPicture,
}





