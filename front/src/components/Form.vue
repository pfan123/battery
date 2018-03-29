<template>
    <div class="form_wrapper">
        <div class="form_info" v-if="isEnglish">
            <h4 class="form_title">{{feedBack.ftitle}}</h4>
            <p class="form_desc">{{feedBack.fdetail}}</p>
            <div class="form_input g_cf">
              <label for="">{{feedBack.fquestionTit}}：</label><input type="text" placeholder="">
            </div>
            <div class="form_input g_cf">
              <label for="">{{feedBack.fquestionDesc}}：</label><textarea  rows="3" cols="20"></textarea>
            </div>
            <div class="form_input g_cf">
              <label for="">email: </label><input type="text" placeholder="">
            </div>

            <input type="button" value="confirm" class="form_button">
        </div>
        <div class="form_info" v-else>
            <h4 class="form_title">{{feedBack.title}}</h4>
            <p class="form_desc">{{feedBack.detail}}</p>
            <div class="form_input g_cf">
              <label for="">{{feedBack.questionTit}}：</label><input type="text" placeholder="请输入问题标题">
            </div>
            <div class="form_input g_cf">
              <label for="">{{feedBack.questionDesc}}：</label><textarea  rows="3" cols="20">请输入详细问题</textarea>
            </div>
            <div class="form_input g_cf">
              <label for="">email: </label><input type="text" placeholder="请输入您的email">
            </div>

            <input type="button" value="提交" class="form_button">          
        </div>
    </div>
</template>

<script>
export default {
  name: 'bat-form',

  data() {
      return {
        feedBack: {
          title: "问题反馈",
          ftitle: "OTHER QUESTIONS",
          detail: "我们将收到您的信息48小时内来为你解答问题",
          fdetail: "We receive your information within 24 hours to answer your questions for you",
          questionTit: "问题标题",
          fquestionTit: "Your question title",
          questionDesc: "问题详情",
          fquestionDesc: "Your question details"
        }
      };
  },
  computed: {
    isEnglish () {
      return this.$store.getters.getIsEnglish     
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
  .form_wrapper
    background #f4f4f4
    width 1136px
    margin 0 auto 50px
    overflow hidden

  .form_info
    position relative
    background #fff  
    padding 40px 40px
    overflow hidden

    .form_title
      font-size 25px
      letter-spacing 3px
      color #333
      font-weight 400
      text-align center
      line-height 1.1
      margin-bottom 16px
      
    .form_desc
      font-size 16px
      letter-spacing 2px
      color #888686
      text-align center
      margin-bottom 36px

    .form_input
      width 800px
      margin 0 auto 40px

      label
        display block
        float left
        font-size 16px
        line-height 48px
        color #666
        width 170px
        _width 185px
        padding-right 15px
        text-align right

      input 
        diaplay block
        height 48px
        _height 50px
        line-height 48px
        border 1px solid #999
        width 605px
        _width 645px
        padding 0 4px
        color #999
        font-size 14px
        &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
          color #999
          font-size 14px
        }
        &::-moz-placeholder { /* Firefox 19+ */
          color #999
          font-size 14px
        }
        &:-ms-input-placeholder { /* IE 10+ */
          color #999
          font-size 14px
        }
        &:-moz-placeholder { /* Firefox 18- */
          color #999
          font-size 14px
        }
      textarea
        display block
        border 1px solid #999
        width 605px
        _width 645px
        padding 4px        
        height 200px
        color #999
        font-size 14px

  .form_button
    width 300px
    height 50px
    line-height 50px
    color #fff
    display block
    background #e82022
    margin 0 auto
    font-size 18px
    border 0
    letter-spacing 2px
    cursor pointer
    &:hover{
      opacity .9
    }

</style>