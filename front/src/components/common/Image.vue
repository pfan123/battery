<template>
    <div class="index_image" :style="{ height: image.height }">
        <span v-bind:style="{ backgroundImage: 'url(' + image.src + ')' }"></span>  
    </div>
</template>

<script>
export default {
  name: 'bat-image',
  props: {
    image: Object,
    required: true
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
    
  .index_image span 
    height 100%
    background-repeat no-repeat
    background-position center center
    display block
</style>