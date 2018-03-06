<template>
  <div class="header" v-show="!hide">
    <div class="header_inner">
      <h2 class="header_logo"><a href="/">深圳绿行科技有限公司</a></h2>
    </div>
    <ul class="header_nav g_cf">
        <li v-for = "item in menu"  :class="[route == item.link ? 'cur': '']"> 
          <a :href="item.link" class="header_nav_a">{{isEnglish ? item.ftitle : item.title}}</a>
        </li>
        <li class="tap_lang" v-on:click="tapLang"><i :class="[isEnglish ? 'icon eng':'icon']"></i>{{isEnglish ? 'English' : '中文'}}</li>
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
        isEnglish: true,
        menu: [
          { title: '主页', ftitle: 'HOME', link: 'index'},
          { title: '产品中心', ftitle: 'Products', link: 'products'},
          { title: '新闻中心', ftitle: 'News Center', link: 'news'},
          { title: '关于我们', ftitle: 'About Us', link: 'aboutus'},
          { title: '联系我们', ftitle: 'Contact Us', link: 'contactus'},
          { title: '疑难解答', ftitle: 'FAQ', link: 'faq'},
        ]
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
    }, 300, false), false)
  },

  methods: {
    tapLang(){
      this.isEnglish = !this.isEnglish
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
    overflow hidden
  .header_logo
    padding-top 19px
    a
      width 390px
      height 48px
      background url('http://temp.im/390x48') no-repeat
      background-size 100% auto
      display block
      cursor pointer
      text-indent -9999px
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