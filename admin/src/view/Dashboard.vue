<template>
  <div class="dashboard">
    <left-side :leftSide="leftSide" v-on:toLink="tabRoute"></left-side>
    <div class="admin_topbar g_cf">首页/{{contentInfo.title}} <i>{{username}}</i></div>
    <div class="admin_container">
       <router-view :contentInfo="contentInfo" :author="username"></router-view>
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
          name: 'Banner图片管理',
          link: '/dashboard/banners',
          routename: 'BannerSys'
        },
        {
          name: '产品列表',
          link: '/dashboard/products',
          routename: 'ProSys'
        }, 
        {
          name: '新闻列表',
          link: '/dashboard/news',
          routename: 'NewSys'
        }, 
        // {
        //   name: '关于我们管理',
        //   link: '/dashboard/about',
        //   routename: 'AboutSys'
        // }, 
        // {
        //   name: '联系我们管理',
        //   link: '/dashboard/contact',
        //   routename: 'ContactSys'
        // },   
        {
          name: '疑难问题列表',
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
    //console.log(222,this.$route)
  },  

  methods: {
    tabRoute(route){
      switch (route){
        case 'Sys':  
        this.contentInfo.title = "系统设置"
        break;
        case 'BannerSys':  
        this.contentInfo.title = "Banner图片管理"
        break;       
        case 'ProSys':  
        this.contentInfo.title = "产品列表"
        break;   
        case 'NewSys':  
        this.contentInfo.title = "新闻列表"
        break;     
        // case 'AboutSys':  
        // this.contentInfo.title = "关于我们管理"
        // break;    
        // case 'ContactSys':  
        // this.contentInfo.title = "联系我们管理"
        break;     
        case 'FAQSys':  
        this.contentInfo.title = "疑难问题列表"
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
