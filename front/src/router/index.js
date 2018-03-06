import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Index = () => import('../views/Index.vue')
const AboutUs = () => import('../views/AboutUs.vue')
const ContactUs = () => import('../views/ContactUs.vue')
const News = () => import('../views/News.vue')
const FAQ = () => import('../views/FAQ.vue')
const Products = () => import('../views/Products.vue')
const Detail = () => import('../views/Detail.vue')
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/index/:page(\\d+)?', component: Index, name: 'index' },
      { path: '/aboutus/:page(\\d+)?', component: AboutUs, name: 'aboutus' },
      { path: '/contactus/:page(\\d+)?', component: ContactUs, name: 'contactus' },
      { path: '/news/:page(\\d+)?', component: News, name: 'news' },
      { path: '/faq/:page(\\d+)?', component: FAQ, name: 'faq' },
      { path: '/products/:page(\\d+)?', component: Products, name: 'products' },
      { path: '/detail/:page(\\d+)?', component: Detail, name: 'detail' },
      { path: '/top/:page(\\d+)?', component: createListView('top') },
      { path: '/new/:page(\\d+)?', component: createListView('new') },
      { path: '/show/:page(\\d+)?', component: createListView('show') },
      { path: '/ask/:page(\\d+)?', component: createListView('ask') },
      { path: '/job/:page(\\d+)?', component: createListView('job') },
      { path: '/item/:id(\\d+)', component: ItemView },
      { path: '/user/:id', component: UserView },
      { path: '/', redirect: '/index' }
    ]
  })
}
