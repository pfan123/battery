const config = require('../config')

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const path = require('path')
const webpack = require('webpack')
const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware')
const webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')
 
module.exports = (app, serve, callback) => {
  const compiler = webpack(webpackConfig)
  
  const koaDevMiddleware = devMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    noInfo: true,
    historyApiFallback: true //使用 HTML5 History API 时, 任意的 404 响应都可能需要被替代为 index.html
  })

  const koaHotMiddleware = hotMiddleware(compiler, {
    log: false,
    heartbeat: 2000
  })  

  // force page reload when html-webpack-plugin template changes
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      koaHotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })  

  app.use(koaDevMiddleware)
  app.use(koaHotMiddleware)

  const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
  app.use(serve(staticPath, './static', true))

  let _resolve
  const readyPromise = new Promise(resolve => {
    _resolve = resolve
  })
  
  console.log('> Starting dev server...')
  koaDevMiddleware.waitUntilValid(() => {
    callback && callback()
    _resolve()
  })  
}


