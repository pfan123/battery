<template>
    <div class="news">
        <h3 class="news_title">{{ isEnglish ? 'NEWS' : '新闻中心'}}</h3>
        <div class="newslist_wrap g_cf">
            <a class="item g_cf" v-for="item in newslist" :href="'/newsarticles/'+item.id">          
                <div class="item_img">
                    <img :src="item.src">
                </div>
                <div class="item_content">
                    <div class="title line1">{{isEnglish ? item.ftitle : item.title}}</div>
                    <div class="date">{{item.date}}</div>
                    <div class="desc">{{isEnglish ? item.fabstract : item.abstract}}</div>
                </div>                  
            </a>      
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-news',

    props: {
        newslist: {
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
    background #f4f4f4
    padding 40px 0 50px
  
  .news_title
    font-size 28px
    color #333
    text-align center
    font-weight normal
    margin-bottom 30px
  
  .newslist_wrap
    margin 0 auto
    width 1136px
    min-width 1136px
    overflow hidden    
    
    .item
        background #fff
        display block 
        border-radius 2px
        margin-bottom 25px
        cursor pointer
        box-shadow 0 2px 2px rgba(0,0,0,.1)
        transition all .5s ease
        -webkit-transition all .5s ease

        &:hover
            transform translateY(-5px)
            -webkit-transform translateY(-5px)
            box-shadow 0 2px 10px rgba(0, 0, 0, .1)
            -webkit-box-shadow 0 2px 10px rgba(0, 0, 0, .1)
        

        .item_img
            display block
            width  258px
            height 185px
            float left
            overflow hidden

            img 
                width 100% 
                height 100%
                
        .item_content
            margin-left 258px
            padding 20px

        .title
            font-size 20px
            color #333
            margin-bottom 6px

        .date
            font-size 14px
            color #666
            margin-bottom 10px

        .desc
            font-size 16px
            color #5d5d5d           

</style>