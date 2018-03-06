<template>
    <div class="profile_wrapper">
        <div class="profile_inner">
            <div class="profile_info">
                <h4>公司简介</h4>
                <div class="profile_txt">
                    <p>深圳绿行科技有限公司成立于2014年7月，总部位于深圳CBD中航中心，是由著名国资企业控股，金融及互联网行业各领域专家联合成立，专注于中国普惠金融事业发展，以协助银行与非银行等金融机构，为小微企业、个体工商户及白领人群提供快速、便捷、免抵押、免担保的小微信贷金融服务。</p>
                    <p>吉信金融立足于小微企业，成就中国普惠金融的大局，将互联网技术与金融相结合，自主研发“Just Thinking”核心科技风控系统，以更具效率的方式向银行、持牌金融机构提供安全、稳定、持续的金融资产，同时也为广大客户带来更加“简单、快捷、方便”的零售信贷服务体验。</p>
                    <p>吉信金融自成立以来发展迅速，目前已拥有员工200多名，已在全国14个省、累计30个城市建立了覆盖2亿人群的金融服务网络，业务发展势头强劲，市场份额扩张迅速，品牌价值不断攀升。吉信金融以专业的态度，专注深耕小微信贷领域，通过一站式网贷平台服务广大客户，助力每一个从小做起的小微企业实现梦想，服务社会。</p>
                </div>
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
    font-size 13px
    color #333
    padding 0 57px

  .profile_txt p
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