<template>
    <div class="news">
        <h3 class="news_title">新闻中心</h3>
        <div class="news_wrap g_cf">
            <a class="news_item"  href="./message-list.html?type=1">
                <div class="news_img">
                    <img src="https://yun.pfan123.com/images/temp/klImg-1.png">
                </div>
                <div class="news_subtitle">
                    行业资讯
                    <i></i>
                </div>
                <div class="news_list" ></div>
            </a>

            <a class="news_item"  href="./message-list.html?type=1">
                <div class="news_img">
                    <img src="http://temp.im/352x216">
                </div>
                <div class="news_subtitle">
                    行业资讯
                    <i></i>
                </div>
                <div class="news_list" ></div>
            </a>
            
            <a class="news_item"  href="./message-list.html?type=1">
                <div class="news_img">
                    <img src="https://yun.pfan123.com/images/temp/klImg-3.png">
                </div>
                <div class="news_subtitle">
                    行业资讯
                    <i></i>
                </div>
                <div class="news_list" ></div>
            </a>   

            <a class="news_item"  href="./message-list.html?type=1">
                <div class="news_img">
                    <img src="https://yun.pfan123.com/images/temp/klImg-3.png">
                </div>
                <div class="news_subtitle">
                    行业资讯
                    <i></i>
                </div>
                <div class="news_list" ></div>
            </a>                     
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-news',

    data() {
        return {

        }
    },

    components: {

    },

    created () {

    },

    mounted () {

    },

    methods: {

    }
  }
</script>

<style lang="stylus">
  .news
    background #fff
    padding 40px 0 50px
  
  .news_title
    font-size 28px
    color #333
    text-align center
    font-weight normal
    margin-bottom 40px
  
  .news_wrap
    margin 0 auto
    width 1136px
    min-width 1136px
    overflow hidden    
  
  .news_item
    display block
    margin 0 32px 20px 0
    float left
    width 258px
    _width 258px
    &:nth-child(4n)
      margin-right 0
    &:hover
        .news_img
            opacity 1
        .news_list
            color #cb0909
  .news_img
    position relative
    width 100%
    padding-top 61.3%
    opacity .7
    transition all .6s ease
  
  .news_imghover
    opacity 1
  
  .news_img img
    position absolute 
    width 100%
    height 100%
    top 0
    left 0
    display block
  
  .news_subtitle
    height 46px
    line-height 46px
    position relative
    border-bottom 1px solid #e7e5e6
    font-size 20px
    color #333
  
  .news_subtitle i
    width 10px
    height 18px
    background url('https://yun.pfan123.com/images/icon/queryArrow.png') no-repeat
    position absolute
    right 6px
    top 50%
    margin-top -9px
  
  .news_list
    padding-top 20px
  
  .news_list p
    line-height 1.1
    margin-bottom 18px
    color #666
</style>