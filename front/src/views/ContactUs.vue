<template>
  <div class="contact_wrapper">
    <div v-if="banners.length > 1">
      <bat-banner :banners="banners"></bat-banner>
    </div>  
    <div v-else-if="banners.length == 1" >
      <bat-image :image="banners[0]"></bat-image>
    </div> 
    <bat-map :mapInfo="mapInfo"></bat-map>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Image from '../components/common/Image.vue'
    import Map from '../components/Map.vue'

    export default {
      name: 'contact',
      asyncData ({ store, type }) {
        return store.dispatch('FETCH_PAGE_DATA', { type })
      },         
      data() {
          return {
            mapInfo: {
              tel: '40088-10115',
              branch: [
                {title: '深圳总部', ftitle: 'Shenzhen headquarters', id: 0}
              ],
              address: '广东省深圳市龙华区三联路跟清泉路交汇处',
              faddress: 'guangdong province ',
              telnum: '40088-10115'
            }
          };
      },

      components: { 
        'bat-banner': Banner,
        'bat-image': Image, 
        'bat-map': Map,
      },

      computed: {
        banners () {
          return this.$store.getters.bannerList
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