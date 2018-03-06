<template>
  <div class="news_wrapper">
    <bat-image :image="image"></bat-image>
    <bat-news></bat-news>
  </div>
</template>

<script>
    import Image from '../components/common/Image.vue'
    import News from '../components/common/News.vue'

    export default {
      name: 'news',
      data() {
          return {
            msg: 'Welcome to Your Vue.js App',
            image:{
                height: '480px',
                src: '/public/images/news_banner.jpg'
            }                      
          };
      },

      components: { 
        'bat-image': Image,
        'bat-news': News
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