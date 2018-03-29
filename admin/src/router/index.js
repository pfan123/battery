import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Logout from '@/view/Login'
import Dashboard from '@/view/Dashboard'
import Sys from '@/view/SysSetting'
import BannerSys from '@/view/BannerSetting'
import BanEditor from '@/view/BanEditor'
import ProSys from '@/view/ProSetting'
import ProductEdit from '@/view/ProEditor'
import NewSys from '@/view/NewSetting'
import NewEditor from '@/view/NewEditor'
import AboutSys from '@/view/AboutSetting'
import ContactSys from '@/view/ContactSetting'
import FAQSys from '@/view/FaqSetting'
import FaqEditor from '@/view/FaqEditor'

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
          path: '/dashboard/banners',
          name: 'BannerSys',
          component: BannerSys
        },
        {
          path: '/dashboard/banedit/:id',
          name: 'editBan',
          component: BanEditor
        },        
        {
          path: '/dashboard/products',
          name: 'ProSys',
          component: ProSys
        },
        {
          path: '/dashboard/products/:id',
          name: 'editProduct',
          component: ProductEdit
        },          
        {
          path: '/dashboard/news',
          name: 'NewSys',
          component: NewSys
        },
        {
          path: '/dashboard/edit/:id',
          name: 'editNews',
          component: NewEditor
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
        },
        {
          path: '/dashboard/faqedit/:id',
          name: 'editFaq',
          component: FaqEditor
        }                                                                               
      ]
    },    
    { path: '/', redirect: '/admin/login' }
  ]
});
