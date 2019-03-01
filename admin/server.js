require('./build/check-versions')();

const fs = require('fs');
const path = require('path');
const LRU = require('lru-cache');  // 内存键值对存储管理

const resolve = file => path.resolve(__dirname, file);
// const opn = require('opn');
const { uploadPicture } = require('./utils/upload');

const isProd = process.env.NODE_ENV === 'production';
const useMicroCache = process.env.MICRO_CACHE !== 'false';
/* eslint-disable */
const serverInfo =
  `koa/${require('koa/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`;
/* eslint-enable */

const Koa = require('koa');

const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const config = require('./sysConfig.js');
const crossOrigin = require('../lib/crossOrigin');
const crsfToken = require('../lib/setCrsfToken');
// 配置允许跨域请求
app.use(crossOrigin());
// http自定义csrftoken属性，预防csrf
app.use(crsfToken(10));

const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
};

// 配置session中间件
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig),
}));

const readFile = (path, cb) => new Promise((resolve) => {
  fs.readFile(path, 'utf8', (err, data) => {
    cb(err);
    resolve(data);
  });
});


const staticCache = require('koa-static-cache');
// https://github.com/koajs/static-cache  参数设置，配置 prefix 提供的文件创建虚拟路径前缀  类似app.use('/static', express.static('public')) http://expressjs.com/zh-cn/starter/static-files.html
const serve = (pf, path, cache) => staticCache(resolve(path), {
  maxAge: cache && isProd ? 365 * 24 * 60 * 60 : 0,
  dynamic: true,
  gzip: true,
  prefix: pf,
});

app
.use(serve('/static', './dist/static', true))
.use(serve('/upload', './upload', true));

// 配置HTTP请求体解析中间件，支持content-type：json, form and text
app.use(bodyParser());
// 配置控制台个性日志中间件
app.use(logger());


// 1-second microcache.
// https://www.nginx.com/blog/benefits-of-microcaching-nginx/
const microCache = LRU({
  max: 100,
  maxAge: 1000,
});

// since this app has no user-specific content, every page is micro-cacheable.
// if your app involves user-specific content, you need to implement custom
// logic to determine whether a request is cacheable based on its url and
// headers.
const isCacheable = () => useMicroCache;

function render(ctx, resolve) {
  const req = ctx.request;
  const res = ctx.response;
  const s = Date.now();

  ctx.set('Content-Type', 'text/html');
  ctx.set('Server', serverInfo);

  const handleError = (err) => {
    if (err.url) {
      ctx.redirect(err.url);
    } else if (err.code === 404) {
      ctx.status = 404;
      ctx.body = '404 | Page Not Found';
    } else {
      // Render Error Page or Redirect
      ctx.status = 500;
      ctx.body = '500 | Internal Server Error';
      console.error(`error during render : ${req.url}`);
      console.error(err.stack);
    }
    resolve();
  };

  const cacheable = isCacheable(req);
  // 缓存 html 结构处理
  if (cacheable) {
    const hit = microCache.get(req.url);
    if (hit) {
      if (!isProd) {
        console.log('cache hit!');
      }
      ctx.body = hit;
      return;
    }
  }

  if (!/^\/api\//.test(req.url)) {
    (async () => {
      let error = false;
      const html = await readFile(path.join(__dirname, './dist/index.html'), (err) => {
        if (err) error = true;
      });
      if (error) {
        return handleError(res);
      }
      ctx.body = html;
      if (cacheable) {
        microCache.set(req.url, html);
      }
      console.log(`整个服务端渲染的耗时 whole request: ${Date.now() - s}ms`);
      resolve();
      
    })();
  }
}

const userInfoController = require('./controllers/user-info');

router.get('/api/user/getUserInfo.json', userInfoController.getLoginUserInfo);
router.post('/api/user/signIn.json', userInfoController.signIn);

const sysInfoController = require('./controllers/sys-info')
;

router.get('/api/dashboard/getSysInfo.json', sysInfoController.getSysInfo);
router.post('/api/dashboard/updateSysInfo.json', sysInfoController.updateSysInfo);

const productsInfoController = require('./controllers/products-info');

router.get('/api/dashboard/getProductsList.json', productsInfoController.getProductsList);
router.get('/api/dashboard/getProductsCateList.json', productsInfoController.getProductsCateList);
router.post('/api/dashboard/getCateProductsList.json', productsInfoController.getCateProductsList);
router.get('/api/dashboard/getProductsAbstract.json', productsInfoController.getProductsAbstract);
router.post('/api/dashboard/updateProductsInfo.json', productsInfoController.updateProductsInfo);
router.post('/api/dashboard/getProductsInfo.json', productsInfoController.getProductsInfo);
router.post('/api/dashboard/deteProducts.json', productsInfoController.deteProducts);

const newsInfoController = require('./controllers/news-info');

router.get('/api/dashboard/getNewsList.json', newsInfoController.getNewsList);
router.get('/api/dashboard/getNewsAbstract.json', newsInfoController.getNewsAbstract);
router.post('/api/dashboard/updateNewsInfo.json', newsInfoController.updateNewsInfo);
router.post('/api/dashboard/getNewsInfo.json', newsInfoController.getNewsInfo);
router.post('/api/dashboard/deteNews.json', newsInfoController.deteNews);

const faqInfoController = require('./controllers/faq-info');

router.get('/api/dashboard/getFaqList.json', faqInfoController.getFaqList);
router.post('/api/dashboard/updateFaqInfo.json', faqInfoController.updateFaqInfo);
router.post('/api/dashboard/getFaqInfo.json', faqInfoController.getFaqInfo);
router.post('/api/dashboard/deteFaq.json', faqInfoController.deteFaq);

const imgInfoController = require('./controllers/img-info');

router.get('/api/dashboard/getImgList.json', imgInfoController.getImgList);
router.post('/api/dashboard/getImgListCate.json', imgInfoController.getImgListCate);
router.post('/api/dashboard/updateImgInfo.json', imgInfoController.updateImgInfo);
router.post('/api/dashboard/getImgInfo.json', imgInfoController.getImgInfo);
router.post('/api/dashboard/deteImg.json', imgInfoController.deteImg);


// const uploadImgController = require('./controllers/uploadImg')
router.post('/api/dashboard/uploadImg.json', async (ctx) => {
  const serverFilePath = path.join(__dirname, 'upload-files');
    // 上传文件事件
  const result = await uploadPicture(ctx, {
    fileType: 'album', // common or album
    path: serverFilePath,
  });

  console.error('uploadImg', result);
  ctx.body = result;
});


if (isProd) {
  // router.get('/dashboard/', (ctx, next) => {
  router.get('*', (ctx, next) => new Promise((resolve) => {
    render(ctx, resolve);
  }));
} else {
  const s = Date.now();
  // In development: setup the dev server with watch and hot-reload,
  readyPromise = require('./build/koa-setup-server')(app, serve, () => {
    console.log(`整个服务端渲染的耗时 whole request: ${Date.now() - s}ms`);
  });
}

app
.use(router.routes())
.use(router.allowedMethods());

const port = config.port || 8180;
app.listen(port, () => {
  // opn(`http://localhost:${port}`);
  console.log(`server started at localhost:${port}`);
});

/**
 * 异常日志打印
 */
process.on('uncaughtException', (err) => {
  console.log(process.pid);
  console.log(`Caught exception:${err}`);
  console.log(`${curTime()}server error!`);
});


/** 生成当前时间* */
function curTime() {
  const date = new Date();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const currentDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const mm = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `[${date.getFullYear()}-${month}-${currentDate} ${hh}:${mm}]`;
  // 返回格式：yyyy-MM-dd hh:mm
}
