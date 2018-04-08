<template>
  <div class="news_wrapper">
    <div v-if="banners.length > 1">
      <bat-banner :banners="banners"></bat-banner>
    </div>  
    <div v-else-if="banners.length == 1" >
      <bat-image :image="banners[0]"></bat-image>
    </div> 
    <bat-detail :proContent="proContent"></bat-detail>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Image from '../components/common/Image.vue'
    import Detail from '../components/Detail.vue'

    export default {
      name: 'detail',
      asyncData ({ store, type, route }) {
        let page = route.params.page
        return store.dispatch('FETCH_PAGE_DATA', { type, page })
      },   
           
      computed: {
        banners () {
          return this.$store.getters.bannerList
        },
        proContent () {
          return this.$store.getters.getProductContent
        }                 
      },        

      data() {
          return {

          }
      },

      components: { 
        'bat-banner': Banner,
        'bat-image': Image,
        'bat-detail': Detail
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