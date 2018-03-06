import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Logout from '@/view/Login'
import Dashboard from '@/view/Dashboard'
import Sys from '@/view/SysSetting'
import HomeSys from '@/view/HomeSetting'
import ProSys from '@/view/ProSetting'
import NewSys from '@/view/NewSetting'
import AboutSys from '@/view/AboutSetting'
import ContactSys from '@/view/ContactSetting'
import FAQSys from '@/view/FaqSetting'

Vue.use(Router);

export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),  
  routes: [
    { path: '/admin/login', component: Login, name: 'Login' },
    { path: '/admin/logout', component: Logout, name: 'Logout' },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'Dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'Sys',
          component: Sys
        },
        {
          path: '/dashboard/home',
          name: 'HomeSys',
          component: HomeSys
        },
        {
          path: '/dashboard/products',
          name: 'ProSys',
          component: ProSys
        },
        {
          path: '/dashboard/news',
          name: 'NewSys',
          component: NewSys
        },
        {
          path: '/dashboard/about',
          name: 'AboutSys',
          component: AboutSys
        },
        {
          path: '/dashboard/contact',
          name: 'ContactSys',
          component: ContactSys
        },
        {
          path: '/dashboard/faq',
          name: 'FAQSys',
          component: FAQSys
        }                                                                  
      ]
    },    
    { path: '/', redirect: '/admin/login' }
  ]
});
