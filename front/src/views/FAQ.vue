<template>
  <div class="index_wrapper">
    <bat-image :image="image"></bat-image>
    <bat-feature :feats="feats"></bat-feature>
    <bat-question ></bat-question>
    <bat-form></bat-form>
    
  </div>
</template>

<script>
    import Image from '../components/common/Image.vue'
    import Feature from '../components/Feature.vue'
    import Form from '../components/Form.vue'
    import Question from '../components/Question.vue'

    export default {
      name: 'index',
      data() {
          return {
            msg: 'Welcome to Your Vue.js App',
            image:{
                height: '480px',
                src: '/public/images/faq.jpg'
            },                                    
            feats: [
                {
                    src: "/public/images/faq_icon1.png",
                    title: "提交问题",
                    ftitle: "",
                    desc: "反馈遇到问题，匹配问题分类，上报处理",
                    fdesc: ""
                },
                {
                    src: "/public/images/faq_icon2.png",
                    title: "等待处理",
                    ftitle: "",
                    desc: "采用自主研发的小微信贷核心技术体系",
                    fdesc: ""                
                },
                {
                    src: "/public/images/faq_icon3.png",
                    title: "反馈处理中",
                    ftitle: "",
                    desc: "服务实体经济符合国家政策方针",
                    fdesc: ""                
                },
                {
                    src: "/public/images/faq_icon4.png",
                    title: "已完成",
                    ftitle: "",
                    desc: "提供快捷简便的提供快捷简便的专业化个人融资服务",
                    fdesc: ""                
                }                                    
            ]                           
          };
      },

      components: { 
        'bat-image': Image,
        'bat-feature': Feature,
        'bat-form': Form,
        'bat-question': Question
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