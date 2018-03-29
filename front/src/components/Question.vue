<template>
    <div class="question_wrapper">
        <div class="question_info">
            <h4 class="question_title">{{ isEnglish ? 'Question' : '常见问题'}}</h4>

            <el-collapse v-model="activeNames" @change="handleChange">
              <div v-for="(item, index) in faqList">
                <el-collapse-item  :title="isEnglish ? item.ftitle : item.title" :name="index+1">
                  <div class="question_desc" v-html="isEnglish ? item.fdesc : item.desc"></div>
                </el-collapse-item>
              </div>
            </el-collapse>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'bat-question',

  props: {
      faqList: {
          type: Array,
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
        activeNames: ['1']
      };
  },

  components: {

  },

  created () {
    
  },

  mounted () {

  },

  methods: {
      handleChange(val) {
        console.log(val);
      }
  }
}
</script>

<style lang="stylus">
  .question_wrapper
    background #f4f4f4
    width 1136px
    margin 0 auto 50px
    overflow hidden

  .question_info
    position relative
    background #fff  
    padding 40px 30px
    overflow hidden

    .question_title
      font-size 25px
      letter-spacing 3px
      color #333
      font-weight 400
      text-align center
      line-height 1.1
      margin-bottom 16px
    .el-collapse-item__header
      height 50px
      line-height 50px
      font-size 16px
    .question_desc
      font-size 14px
      color #666
      line-height 28px
</style>