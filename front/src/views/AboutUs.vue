<template>
  <div class="about_wrapper">
    <bat-image :image="image"></bat-image>
    <bat-introduce></bat-introduce>
    <bat-team></bat-team>
    <bat-mission></bat-mission>
  </div>
</template>

<script>
    import Image from '../components/common/Image.vue'
    import Introduce from '../components/Introduce.vue'
    import Team from '../components/Team.vue'
    import Mission from '../components/Mission.vue'

    export default {
      name: 'aboutus',
      data() {
          return {
            image:{
                height: '480px',
                src: 'https://yun.pfan123.com/images/banner/hdBanner-8.jpg'
            }                         
          };
      },

      components: { 
        'bat-image': Image,
        'bat-introduce': Introduce,
        'bat-team': Team,
        'bat-mission': Mission
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