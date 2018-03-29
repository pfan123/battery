<template>
    <div class="news">
        <h3 class="news_title">{{ isEnglish ? 'NEWS' : '新闻中心'}}</h3>
        <div class="news_wrap g_cf">
            <a class="news_item" v-for=" item in list"  :href="'/newsarticles/'+item.id">
                <div class="news_img">
                    <img :src="item.src">
                </div>
                <div class="news_subtitle line1">
                    {{isEnglish ? item.ftitle : item.title}}
                </div>
                <div class="news_desc line2" >
                    {{isEnglish ? item.fabstract : item.abstract}}
                </div>
            </a>                   
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-news',

    props: {
        list: {
            type: Array,
            required: true
        }
    }, 
    
    data() {
        return {

        }
    },

    computed: {
        isEnglish () {
            return this.$store.getters.getIsEnglish     
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
    margin 0 32px 0 0
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
    padding 0 4px
    height 35px
    line-height 35px
    position relative
    font-size 16px
    color #333
   
    .news_desc
        padding 0 4px
        color #888
        font-size 14px
        height 42px
</style>