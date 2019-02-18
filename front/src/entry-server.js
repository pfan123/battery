import { createApp } from './app'
import axios from 'axios'

const isDev = process.env.NODE_ENV !== 'production'
const host = 'http://127.0.0.1:8180'
// axios.get(`${host}/api/dashboard/getSysInfo.json`).then( res => {
//   if(res.status == 200){
//     console.log("resres", res.data)
//   }
// }).catch(function (error) {
//   console.log(error);
// });

/* eslint-disable */
const getinfo = axios.get(`${host}/api/dashboard/getSysInfo.json`)
/* eslint-enable */

// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
export default context => new Promise((resolve, reject) => {
  const s = isDev && Date.now()
  const { app, router, store } = createApp()

  const { url } = context
  const fullPath = router.resolve(url).route.fullPath

  if (fullPath !== url) {
    reject({ url: fullPath })
  }

    // set router's location
  router.push(url)

    // wait until router has resolved possible async hooks
  router.onReady(() => {
    const matchedComponents = router.getMatchedComponents()
      // no matched routes
    if (!matchedComponents.length) {
      reject({ code: 404 })
    }

      // const matchedComponentsRouter = matchedComponents.map(({ asyncData }) => asyncData && asyncData({
      //   store,
      //   route: router.currentRoute
      // }))
    const matchedComponentsRouter = matchedComponents.map(Component => {
      if (Component.asyncData) {
        return Component.asyncData({
          type: Component.name,
          store,
          route: router.currentRoute
        })
      }
      return {}
    })

    Promise.all(matchedComponentsRouter).then(res => {
      isDev && console.log(`数据预拉取时间 data pre-fetch: ${Date.now() - s}ms`)

      context.state = store.state
      const sysInfo = store.state.sysInfo
      context.title = sysInfo.title
      context.head = `<meta name="keywords" content="${sysInfo.keyword}"><meta name="description" content="${sysInfo.detail}"><link rel="icon" href="${host}${sysInfo.favicon}">`

        // console.error("context.state", context.state)

      resolve(app)
    }).catch(reject)
  }, reject)
})
