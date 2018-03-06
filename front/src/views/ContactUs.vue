<template>
  <div class="contact_wrapper">
    <bat-image :image="image"></bat-image>
    <bat-map></bat-map>
  </div>
</template>

<script>
    import Image from '../components/common/Image.vue'
    import Map from '../components/Map.vue'

    export default {
      name: 'aboutus',
      data() {
          return {
            image:{
                height: '480px',
                src: '/public/images/contactus.jpg'
            }            
          };
      },

      components: { 
        'bat-image': Image,
        'bat-map': Map,
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