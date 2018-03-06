<template>
  <div class="news_wrapper">
    <bat-image :image="image"></bat-image>
    <bat-detail></bat-detail>
  </div>
</template>

<script>
    import Image from '../components/common/Image.vue'
    import Detail from '../components/Detail.vue'

    export default {
      name: 'products',
      data() {
          return {
            msg: 'Welcome to Your Vue.js App',
            image:{
                height: '480px',
                src: '/public/images/faq.jpg'
            }
          };
      },

      components: { 
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