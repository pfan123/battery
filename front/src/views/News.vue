<template>
  <div class="news_wrapper">
    <div v-if="banners.length > 1">
      <bat-banner :banners="banners"></bat-banner>
    </div>  
    <div v-else-if="banners.length == 1" >
      <bat-image :image="banners[0]"></bat-image>
    </div> 
    <bat-newslist :newslist="List"></bat-newslist>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Image from '../components/common/Image.vue'
    import NewsList from '../components/NewsList.vue'

    export default {
      name: 'news',
      asyncData ({ store, type }) {
        return store.dispatch('FETCH_PAGE_DATA', { type })
      },  
      
      computed: {
        banners () {
          return this.$store.getters.bannerList
        },
        List () {
          return this.$store.getters.newsList
        }        
      },   
            
      data() {
          return {   

          }
      },

      components: { 
        'bat-banner': Banner,
        'bat-image': Image, 
        'bat-newslist': NewsList
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

</style>