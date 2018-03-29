<template>
  <div class="news_wrapper">
    <div v-if="banners.length > 1">
      <bat-banner :banners="banners"></bat-banner>
    </div>  
    <div v-else>
      <bat-image v:if="banners.length == 1" :image="banners[0]"></bat-image>
    </div>  
    <bat-category :cateList="cateList"></bat-category>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Image from '../components/common/Image.vue'
    import Category from '../components/Category.vue'

    export default {
      name: 'product',
      asyncData ({ store, type }) {
        return store.dispatch('FETCH_PAGE_DATA', { type })
      },         
      data() {
          return {
               
          };
      },

      components: { 
        'bat-banner': Banner,
        'bat-image': Image, 
        'bat-category': Category
      },

      computed: {
        banners () {
          return this.$store.getters.bannerList
        },
        cateList () {
            return this.$store.getters.getCateList
        }                  
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