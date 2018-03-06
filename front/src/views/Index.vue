<template>
  <div class="index_wrapper">
    <bat-banner :banners="banners"></bat-banner>
    <bat-feature :feats="feats"></bat-feature>
    <bat-product></bat-product>
    <bat-profile></bat-profile>
    <bat-news></bat-news>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Feature from '../components/Feature.vue'
    import Product from '../components/common/Product.vue'
    import Profile from '../components/common/Profile.vue'
    import News from '../components/common/News.vue'

    export default {
      name: 'index',
      data() {
          return {
            msg: 'Welcome to Your Vue.js App',
            banners: [
              {
                link: '/',
                src: 'https://yun.pfan123.com/images/banner/hdBanner-1.png'
              },
              {
                link: '/',
                src: 'https://yun.pfan123.com/images/banner/hdBanner-2.png'
              },
              {
                link: '/',
                src: 'https://yun.pfan123.com/images/banner/hdBanner-4.png'
              },
              {
                link: '/',
                src: 'http://temp.im/1900x480'
              }                                       
            ],
            feats: [
                {
                    src: "https://yun.pfan123.com/images/icon/kwIcon-1.png",
                    title: "国资控股",
                    ftitle: "",
                    desc: "由哈尔滨工业投资集团控股国有混合制企业",
                    fdesc: ""
                },
                {
                    src: "https://yun.pfan123.com/images/icon/kwIcon-2.png",
                    title: "自主研发",
                    ftitle: "",
                    desc: "采用自主研发的小微信贷核心技术体系",
                    fdesc: ""                
                },
                {
                    src: "https://yun.pfan123.com/images/icon/kwIcon-3.png",
                    title: "普惠金融",
                    ftitle: "",
                    desc: "服务实体经济符合国家政策方针",
                    fdesc: ""                
                },
                {
                    src: "https://yun.pfan123.com/images/icon/kwIcon-4.png",
                    title: "专业定制",
                    ftitle: "",
                    desc: "提供快捷简便的提供快捷简便的专业化个人融资服务",
                    fdesc: ""                
                }                                    
            ]                        
          };
      },

      components: { 
        'bat-banner': Banner,
        'bat-feature': Feature,
        'bat-product': Product,
        'bat-profile': Profile,
        'bat-news': News
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