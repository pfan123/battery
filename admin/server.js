require('./build/check-versions')()

const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')  //内存键值对存储管理
const favicon = require('koa-favicon')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')
const opn = require('opn')
const proxy = require('koa-proxy')

const isProd = process.env.NODE_ENV === 'production'
const useMicroCache = process.env.MICRO_CACHE !== 'false'
const serverInfo =
  `koa/${require('koa/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const Koa = require('koa')
const app = new Koa()
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')  
const logger = require('koa-logger')  

const readFile = (path, cb) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      cb(err)
      resolve(data)
    })
  } )
}


const staticCache = require('koa-static-cache')
//https://github.com/koajs/static-cache  参数设置，配置 prefix 提供的文件创建虚拟路径前缀  类似app.use('/static', express.static('public')) http://expressjs.com/zh-cn/starter/static-files.html
const serve = (pf, path, cache) => staticCache(resolve(path), {
  maxAge: cache && isProd ? 365 * 24 * 60 * 60 : 0,
  gzip: true,
  prefix: pf
})

app.use(serve('/static', './dist/static', true))
// 配置HTTP请求体解析中间件，支持content-type：json, form and text 
app.use(bodyParser())
// 配置控制台个性日志中间件
app.use(logger())


// 1-second microcache.
// https://www.nginx.com/blog/benefits-of-microcaching-nginx/
const microCache = LRU({
  max: 100,
  maxAge: 1000
})

// since this app has no user-specific content, every page is micro-cacheable.
// if your app involves user-specific content, you need to implement custom
// logic to determine whether a request is cacheable based on its url and
// headers.
const isCacheable = req => useMicroCache

function render (ctx, next, resolve) {
  let req = ctx.request
  let res = ctx.response
  const s = Date.now()

  ctx.set("Content-Type", "text/html")
  ctx.set("Server", serverInfo)

  const handleError = err => {
    if (err.url) {
      ctx.redirect(err.url)
    } else if(err.code === 404) {
      ctx.status = 404
      ctx.body = '404 | Page Not Found'
    } else {
      // Render Error Page or Redirect
      ctx.status = 500
      ctx.body = '500 | Internal Server Error'
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
    resolve()
    return ;
  }

  const cacheable = isCacheable(req)
  //缓存 html 结构处理
  if (cacheable) {
    const hit = microCache.get(req.url)
    if (hit) {
      if (!isProd) {
        console.log(`cache hit!`)
      }
      ctx.body = hit
      return
    }
  }

  // if(req.url == '/' || req.url == '/index'){
    ( async () => {
       let error = false
       let html = await readFile(path.join(__dirname, './dist/index.html'), err => {
         if (err) error = true  
       })
        if(error){
          return handleError(res)
        }
        ctx.body = html  
        if (cacheable) {
          microCache.set(req.url, html)
        }
        console.log(`整个服务端渲染的耗时 whole request: ${Date.now() - s}ms`)
        resolve()           
    })() 
  // }
}

if (isProd) {
  router.get('*', (ctx, next) => {
      return new Promise( (resolve, reject) => {
        render(ctx, next, resolve)
      })
  })
} else {
  const s = Date.now()
  // In development: setup the dev server with watch and hot-reload,

  readyPromise = require('./build/koa-setup-server')(app, serve, () => {
    console.log(`整个服务端渲染的耗时 whole request: ${Date.now() - s}ms`)
  })
}

app
.use(router.routes())
.use(router.allowedMethods());

const port = process.env.PORT || 8080
app.listen(port, () => {
  opn('http://localhost:' + port)
  console.log(`server started at localhost:${port}`)
})
