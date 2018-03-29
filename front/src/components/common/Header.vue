<template>
  <div class="header" v-show="!hide">
    <div class="header_inner">
      <h2 class="header_logo"><a href="/"><img :src="logo" alt=""><span>深圳绿行科技有限公司</span></a></h2>
    </div>
    <ul class="header_nav g_cf">
        <li v-for = "item in menu"  :class="[route == item.name ? 'cur': '']"> 
          <a :href="item.link" class="header_nav_a">{{isEnglish ? item.ftitle : item.title}}</a>
        </li>
        <li class="tap_lang" @click="tapLang"><i :class="[isEnglish ? 'icon eng':'icon']"></i>{{isEnglish ? 'English' : '中文'}}</li>
    </ul>    
  </div>
</template>

<script>
import {throttle} from '../../util/utils.js'

export default {
  name: 'bat-header',
  data() {
      return {
        hide: false,
        route: 'index',
        menu: [
          { title: '主页', ftitle: 'HOME', name: 'home', link: '/index'},
          { title: '产品中心', ftitle: 'Products', name: 'product', link: '/products'},
          { title: '新闻中心', ftitle: 'News Center', name: 'news', link: '/news'},
          { title: '关于我们', ftitle: 'About Us', name: 'about', link: '/aboutus'},
          { title: '联系我们', ftitle: 'Contact Us', name: 'contact', link: '/contactus'},
          { title: '疑难解答', ftitle: 'FAQ', name: 'faq', link: '/faq'},
        ]
      }
  },
  computed: {
    logo () {
      return this.$store.getters.sysInfo.logo1
    },
    isEnglish () {
      return this.$store.getters.getIsEnglish     
    }
  },
  components: {

  },

  created () {
    
  },

  mounted () {
    this.route = this.$route.name
    window.addEventListener("scroll", throttle(()=>{
        if(document.documentElement.scrollTop > 85){
          this.hide = true
        }else{
          this.hide = false
        }      
    }, 200, false), false)
    if(localStorage.getItem('local_isEnglish')){
      this.$store.commit("SET_ISENGLISH", JSON.parse(localStorage.getItem('local_isEnglish')).isEnglish)
    }
  },

  methods: {
    tapLang(){
      let bool = !this.isEnglish
      this.$store.commit("SET_ISENGLISH", bool)
      localStorage.setItem('local_isEnglish', JSON.stringify({'isEnglish':  bool}))
    }
  }
}
</script>

<style lang="stylus">
.header
  position fixed
  top 0
  left 0
  right 0
  z-index 100
  height 85px
  line-height 85px
  .header_inner
    position relative
    margin 0 auto
    width 1135px
    min-width 1135px
  .header_logo
    padding-top 19px
    a
      width 390px
      height 48px
      background-size 100% auto
      display block
      cursor pointer
      overflow hidden
      position relative
      span 
        line-height 200px
        text-indent -9999px
      img 
        position absolute
        width 100% 
        height 100%
        top 0
        left 0
        
  .header_nav
    position absolute
    right 0
    top 0
    bottom 0
    li
      float left
      margin-right 10px
      padding 0 10px
      position relative
      cursor pointer   
      .header_nav_a
        font-size 16px
        color #f4f4f4
      &.cur::after
        content ''
        height 2px
        background #fff
        position absolute
        left 5px
        right 5px
        bottom 24px   
      &.tap_lang
        color #fff
      .icon
        display inline-block
        width 30px
        height 19px
        vertical-align middle
        margin-right 5px
        background url('/public/images/language.png') 0 -19px
        &.eng
          background-position 0 0
          
</style>