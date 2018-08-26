<template>
  <div class="index_wrapper">
    <div v-if="banners.length > 1">
      <bat-banner :banners="banners"></bat-banner>
    </div>  
    <div v-else-if="banners.length == 1" >
      <bat-image :image="banners[0]"></bat-image>
    </div>  
    <bat-feature :feats="feats"></bat-feature>
    <bat-product :homeProList="homeProList"></bat-product>
    <bat-profile :profileInfo="profileInfo"></bat-profile>
    <bat-news :list="newLists"></bat-news>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Image from '../components/common/Image.vue'
    import Feature from '../components/Feature.vue'
    import Product from '../components/common/Product.vue'
    import Profile from '../components/common/Profile.vue'
    import News from '../components/common/News.vue'

    export default {
      name: 'home',     
      asyncData ({ store, type }) {
        return store.dispatch('FETCH_PAGE_DATA', { type })
      },      
      data() {
          return {
            feats: [
                {
                    src: "/public/images/kwIcon-1.png",
                    title: "国资控股",
                    ftitle: "State-owned asset holding",
                    desc: "由哈尔滨工业投资集团控股国有混合制企业",
                    fdesc: ""
                },
                {
                    src: "/public/images/kwIcon-2.png",
                    title: "自主研发",
                    ftitle: "Independent research and development",
                    desc: "采用自主研发的小微信贷核心技术体系",
                    fdesc: ""                
                },
                {
                    src: "/public/images/kwIcon-3.png",
                    title: "普惠金融",
                    ftitle: "Pratt &whitney financial",
                    desc: "服务实体经济符合国家政策方针",
                    fdesc: ""                
                },
                {
                    src: "/public/images/kwIcon-4.png",
                    title: "专业定制",
                    ftitle: "Professional custom",
                    desc: "提供快捷简便的提供快捷简便的专业化个人融资服务",
                    fdesc: ""                
                }                                    
            ],
            profileInfo: {
              title: '公司简介',
              ftitle: 'COMPANY PROFILE',
              desc: '深圳绿行科技有限公司成立于2014年7月，总部位于深圳CBD中航中心，是由著名国资企业控股，金融及互联网行业各领域专家联合成立，专注于中国普惠金融事业发展，以协助银行与非银行等金融机构，为小微企业、个体工商户及白领人群提供快速、便捷、免抵押、免担保的小微信贷金融服务。',
              fdesc: 'Green line in shenzhen technology co., LTD. Was established in July 2014, the headquarters is located in the CBD of shenzhen catic center, is a famous state-owned asset holding enterprises, set up a joint financial and Internet industry experts in each field, focus on China '
            }                        
          };
      },

      components: { 
        'bat-banner': Banner,
        'bat-image': Image,        
        'bat-feature': Feature,
        'bat-product': Product,
        'bat-profile': Profile,
        'bat-news': News
      },
      computed: {
        banners () {
          return this.$store.getters.bannerList
        },
        newLists () {
          return this.$store.getters.newsList.slice(0, 4)
        },   
        homeProList () {
          return this.$store.getters.getHomeProList.slice(0, 40)
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