<template>
    <div class="index_image" >
        <span v-bind:style="{ backgroundImage: 'url(' + image.src + ')' }"></span>  
    </div>
</template>

<script>
export default {
  name: 'bat-image',
  props: {
    image: {
      type: Object,
      required: true      
    }
  },
  data() {
      return {
        
      };
  },

  components: {
    
  },

  created () {

  },

  mounted () {

  },

  methods: {

  }
}
</script>

<style lang="stylus">
  .index_image
    width 100%
    height 480px
    
  .index_image span 
    height 100%
    background-repeat no-repeat
    background-position center center
    display block
</style>