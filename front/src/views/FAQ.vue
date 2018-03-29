<template>
  <div class="index_wrapper">
    <div v-if="banners.length > 1">
      <bat-banner :banners="banners"></bat-banner>
    </div>  
    <div v-else>
      <bat-image v:if="banners.length == 1" :image="banners[0]"></bat-image>
    </div> 
    <bat-feature :feats="feats"></bat-feature>
    <bat-question :faqList="faqList"></bat-question>
    <bat-form></bat-form>
    
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Image from '../components/common/Image.vue'
    import Feature from '../components/Feature.vue'
    import Form from '../components/Form.vue'
    import Question from '../components/Question.vue'

    export default {
      name: 'faq',    
      asyncData ({ store, type }) {
        return store.dispatch('FETCH_PAGE_DATA', { type })
      },         
      data() {
          return {          
            feats: [
                {
                    src: "/public/images/faq_icon1.png",
                    title: "提交问题",
                    ftitle: "Submit questions",
                    desc: "反馈遇到问题，匹配问题分类，上报处理",
                    fdesc: "Feedback problems, matching problem classification, report processing."
                },
                {
                    src: "/public/images/faq_icon2.png",
                    title: "等待处理",
                    ftitle: "Waiting to be processed",
                    desc: "采用自主研发的小微信贷核心技术体系",
                    fdesc: ""                
                },
                {
                    src: "/public/images/faq_icon3.png",
                    title: "反馈处理中",
                    ftitle: "Feedback processing",
                    desc: "服务实体经济符合国家政策方针",
                    fdesc: ""                
                },
                {
                    src: "/public/images/faq_icon4.png",
                    title: "已完成",
                    ftitle: "completed",
                    desc: "提供快捷简便的提供快捷简便的专业化个人融资服务",
                    fdesc: ""                
                }                                    
            ]                           
          };
      },

      components: { 
        'bat-banner': Banner,
        'bat-image': Image,   
        'bat-feature': Feature,
        'bat-form': Form,
        'bat-question': Question
      },

      computed: {
        banners () {
          return this.$store.getters.bannerList
        },
        faqList () {
          return this.$store.getters.faqList
        }        
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