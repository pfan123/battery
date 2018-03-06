<template>
  <div class="dashboard">
    <left-side :leftSide="leftSide" v-on:toLink="tabRoute"></left-side>
    <div class="admin_topbar g_cf">首页/{{contentInfo.title}} <i>{{username}}</i></div>
    <div class="admin_container">
       <router-view :contentInfo="contentInfo"></router-view>
    </div>
  </div>
</template>

<script>
import LeftSide from '@/components/LeftSide'

export default {
  name: 'dashboard',
  props: {
    username: String,
    required: true
  },    
  data() {
    return {
      contentInfo: {
        title: "系统设置"
      },
      leftSide: [
        {
          name: '系统设置',
          link: '/dashboard',
          routename: 'Sys'
        },        
        {
          name: '首页管理',
          link: '/dashboard/home',
          routename: 'HomeSys'
        },
        {
          name: '产品中心管理',
          link: '/dashboard/products',
          routename: 'ProSys'
        }, 
        {
          name: '新闻中心管理',
          link: '/dashboard/news',
          routename: 'NewSys'
        }, 
        {
          name: '关于我们管理',
          link: '/dashboard/about',
          routename: 'AboutSys'
        }, 
        {
          name: '联系我们管理',
          link: '/dashboard/contact',
          routename: 'ContactSys'
        },   
        {
          name: '疑难解答管理',
          link: '/dashboard/faq',
          routename: 'FAQSys'
        }                                        
      ]
    }
  },
  components: { 
    'left-side': LeftSide
  },  
  created(){
    console.log(222,this.$route)
  },  

  methods: {
    tabRoute(route){
      switch (route){
        case 'Sys':  
        this.contentInfo.title = "系统设置"
        break;
        case 'HomeSys':  
        this.contentInfo.title = "首页管理"
        break;       
        case 'ProSys':  
        this.contentInfo.title = "产品中心管理"
        break;   
        case 'NewSys':  
        this.contentInfo.title = "新闻中心管理"
        break;     
        case 'AboutSys':  
        this.contentInfo.title = "关于我们管理"
        break;    
        case 'ContactSys':  
        this.contentInfo.title = "联系我们管理"
        break;     
        case 'FAQSys':  
        this.contentInfo.title = "疑难解答管理"
        break;                                       
      }
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .dashboard
     background #f9f9f9

  .admin_topbar
    background #fff
    height 50px
    line-height 50px
    font-size 14px
    text-align left 
    margin 0 0 16px 180px
    padding 0 20px

    i 
      float right

  .admin_container
    margin 0 0 0 180px
    background #fff
    min-height 600px
    padding: 20px
</style>
