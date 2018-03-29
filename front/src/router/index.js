import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const Index = () => import('../views/Index.vue')
const AboutUs = () => import('../views/AboutUs.vue')
const ContactUs = () => import('../views/ContactUs.vue')
const News = () => import('../views/News.vue')
const NewsArticles = () => import('../views/NewsArticles.vue')
const FAQ = () => import('../views/FAQ.vue')
const Products = () => import('../views/Products.vue')
const Detail = () => import('../views/Detail.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/index/:page(\\d+)?', component: Index, name: 'home' },
      { path: '/aboutus/:page(\\d+)?', component: AboutUs, name: 'about' },
      { path: '/contactus/:page(\\d+)?', component: ContactUs, name: 'contact' },
      { path: '/news/:page(\\d+)?', component: News, name: 'news' },
      { path: '/newsarticles/:page(\\d+)?', component: NewsArticles, name: 'newsarticles' },
      { path: '/faq/:page(\\d+)?', component: FAQ, name: 'faq' },
      { path: '/products/:page(\\d+)?', component: Products, name: 'product' },
      { path: '/detail/:page(\\d+)?', component: Detail, name: 'detail' },
      { path: '/', redirect: '/index' }
    ]
  })
}
