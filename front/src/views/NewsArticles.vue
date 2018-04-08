<template>
  <div class="news_wrapper">
    <div v-if="banners.length > 1">
      <bat-banner :banners="banners"></bat-banner>
    </div>  
    <div v-else-if="banners.length == 1" >
      <bat-image :image="banners[0]"></bat-image>
    </div> 

    <div class="news_article">
       <div class="news_article_title">{{isEnglish ? article.ftitle : article.title}}</div>
       <p class="news_article_date">发表时间：{{article.date}}</p>
       <div class="news_article_content" v-html="isEnglish ? article.fcontent : article.content"></div>
    </div>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Image from '../components/common/Image.vue'

    export default {
      name: 'newsarticles',
      asyncData ({ store, type, route }) {
        let page = route.params.page
        return store.dispatch('FETCH_PAGE_DATA', { type, page })
      },  
      
      computed: {
        isEnglish () {
            return this.$store.getters.getIsEnglish     
        },        
        banners () {
          return this.$store.getters.bannerList
        },
        article () {
          return this.$store.getters.getNewsArticle
        }  
      },   
            
      data() {
          return {   

          }
      },

      components: { 
        'bat-banner': Banner,
        'bat-image': Image
      },    

      created () {

      },

      mounted () {

      },

      methods: {

      }
    };
</script>

<style lang="stylus">
 .news_wrapper
  background #f4f4f4

  .news_article
    margin 50px auto
    width 1056px  
    _width 1136px  
    min-height 200px
    overflow hidden 
    background #fff
    box-shadow 0 2px 2px rgba(0,0,0,.1)    
    padding 40px

    &_title
      text-align center
      font-size 25px
      color #333 

    &_date
      text-align center  
      margin 10px 

    &_content
      font-size 14px
      color #333    
      text-indent 25px
</style>