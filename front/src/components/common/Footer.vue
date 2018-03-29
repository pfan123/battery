<template>
  <div class="footer">
    <a class="footer_brand" href="/"><img :src="logo" alt=""></a>
    <p class="footer_info line1" v-cloak>{{Copyright}}</p>
    <p class="footer_info line1" v-cloak>{{Address}}</p>
  </div>
</template>

<script>
export default {
  name: 'bat-footer',

  data() {
      return {
        src: 'http://temp.im/144x64',
        Copyright: 'Copyright © 2018 深圳绿行科技有限公司 版权所有 备案号：粤ICP备14079927号  ICP证粤B2-20160194',
        Address: '地址：广东省深圳市龙华区三联路跟清泉路交汇处清泉大厦九楼 座机：0755－86160888'
      };
  },
  computed: {
    logo () {
      return this.$store.getters.sysInfo.logo2
    }
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
.footer
  background-color #181818
  width 100%
  height  120px
  padding: 12px 0
  .footer_brand
    display block
    width 144px
    height 64px
    margin: 0 auto 12px
    img
      width 100%
      height 100%
  .footer_info
    color #272723
    font-size 12px
    text-align center
    color #6b6b65
</style>