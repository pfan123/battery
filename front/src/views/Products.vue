<template>
  <div class="news_wrapper">
    <bat-banner :banners="banners"></bat-banner>
    <bat-category></bat-category>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Category from '../components/Category.vue'

    export default {
      name: 'products',
      data() {
          return {
            msg: 'Welcome to Your Vue.js App',
            banners: [
              {
                link: '/',
                src: 'https://yun.pfan123.com/images/banner/hdBanner-1.png'
              },
              {
                link: '/',
                src: 'https://yun.pfan123.com/images/banner/hdBanner-2.png'
              },
              {
                link: '/',
                src: 'https://yun.pfan123.com/images/banner/hdBanner-4.png'
              },
              {
                link: '/',
                src: 'http://temp.im/1900x480'
              }                                       
            ]                 
          };
      },

      components: { 
        'bat-banner': Banner,
        'bat-category': Category
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