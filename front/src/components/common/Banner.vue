<template>
    <div class="index_banner">
      <el-carousel height="480px">
        <el-carousel-item v-for="item in banners" :key="item.src">
          <a class="index_banner_img" :href="item.link"> 
            <span v-bind:style="{ backgroundImage: 'url(' + item.src + ')' }"></span>
          </a>
        </el-carousel-item>
      </el-carousel>    
    </div>
</template>

<script>
export default {
  name: 'bat-banner',
  props: {
    banners: {
        type: Array,
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
  .index_banner_img
    display block
    height 100%
    
  .index_banner_img span 
    height 100%
    background-repeat no-repeat
    background-position center center
    display block

  .el-carousel__item:nth-child(2n)
     background-color #99a9bf
  .el-carousel__item:nth-child(2n+1)
     background-color #d3dce6  
</style>