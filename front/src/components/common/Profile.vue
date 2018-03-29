<template>
    <div class="profile_wrapper">
        <div class="profile_inner">
            <div class="profile_info">
                <h4>{{isEnglish ? profileInfo.ftitle : profileInfo.title}}</h4>
                <div class="profile_txt" v-html="isEnglish ? profileInfo.fdesc : profileInfo.desc"></div>
            </div>
            <div class="profile_img">
                <img src="https://yun.pfan123.com/images/temp/profile.png" alt="公司简介">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'bat-profile',

  props: {
      profileInfo: {
          type: Object,
          required: true
      }
  }, 

  computed: {
      isEnglish () {
        return this.$store.getters.getIsEnglish     
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
  .profile_wrapper
    height 390px
    padding 50px 0
    overflow hidden
    background #f4f4f4
    width 1136px
    margin 0 auto

  .profile_inner
    height 390px
    position relative
    background #fff
    overflow hidden

  .profile_info
    padding-right 302px
    padding-top 40px
    height 310px
    overflow hidden

  .profile_info h4
    font-size 25px
    letter-spacing 3px
    color #333
    font-weight 400
    text-align center
    line-height 1.1
    margin-bottom 20px

  .profile_txt
    font-size 14px
    color #333
    padding 0 57px
    line-height 2.3
    text-indent 25px

  .profile_img
    width 302px
    height 389px
    position absolute
    top 0
    right 0

  .profile_img img
    width 100%
    display block

</style>