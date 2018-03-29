<template>
  <div class="about_wrapper">
    <div v-if="banners.length > 1">
      <bat-banner :banners="banners"></bat-banner>
    </div>  
    <div v-else>
      <bat-image v:if="banners.length == 1" :image="banners[0]"></bat-image>
    </div> 
    <bat-introduce :introduce="introduce"></bat-introduce>
    <bat-team></bat-team>
    <bat-mission :mission="mission"></bat-mission>
  </div>
</template>

<script>
    import Banner from '../components/common/Banner.vue'
    import Image from '../components/common/Image.vue'
    import Introduce from '../components/Introduce.vue'
    import Team from '../components/Team.vue'
    import Mission from '../components/Mission.vue'

    export default {
      name: 'about',
      asyncData ({ store, type }) {
        return store.dispatch('FETCH_PAGE_DATA', { type })
      },        
      data() {
          return {
            introduce: {
              title: '公司简介',
              ftitle: 'COMPANY PROFILE',
              desc: '深圳绿行科技有限公司成立于2014年7月，总部位于深圳CBD中航中心，是由著名国资企业控股，金融及互联网行业各领域专家联合成立，专注于中国普惠金融事业发展，以协助银行与非银行等金融机构，为小微企业、个体工商户及白领人群提供快速、便捷、免抵押、免担保的小微信贷金融服务。吉信金融立足于小微企业，成就中国普惠金融的大局，将互联网技术与金融相结合，自主研发“Just.吉信金融自成立以来发展迅速，目前已拥有员工200多名，已在全国14个省、累计30个城市建立了覆盖2亿人群的金融服务网络，业务发展势头强劲，市场份额扩张迅速，品牌价值不断攀升。吉信金融以专业的态度，专注深耕小微信贷领域，通过一站式网贷平台服务广大客户，助力每一个从小做起的小微企业实现梦想，服务社会。',
              fdesc: 'Green line in shenzhen technology co., LTD. Was established in July 2014, the headquarters is located in the CBD of shenzhen catic center, is a famous state-owned asset holding enterprises, set up a joint financial and Internet industry experts in each field, focus on China '
            },
            mission: {
              title: '企业文化',
              ftitle: 'Corporate mission',     
              list: [
                {
                  title: '企业使命',
                  ftitle: 'Corporate mission',    
                  desc: '专业成就普惠金融',
                  fdesc: 'Professional achievements',
                  detail: '专注努力以为体，博采众长以为用，打造专业的风控体系，专业成就普惠金融',
                  fdetail: 'Focus on trying to think that the body, the broad masses of people think ',
                  src: 'https://yun.pfan123.com/images/temp/mission-1.png'    
                },
                {
                  title: '企业愿景',
                  ftitle: 'Corporate mission',    
                  desc: ' 立足于小，谋求于大',
                  fdesc: 'Professional achievements',
                  detail: '专注努力以为体，博采众长以为用，打造专业的风控体系，专业成就普惠金融',
                  fdetail: 'Focus on trying to think that the body, the broad masses of people think ',
                  src: 'https://yun.pfan123.com/images/temp/mission-2.png'        
                },
                {
                  title: '企业文化',
                  ftitle: 'Corporate mission',    
                  desc: ' 快乐、高效、负责',
                  fdesc: 'Professional achievements',
                  detail: '专注努力以为体，博采众长以为用，打造专业的风控体系，专业成就普惠金融',
                  fdetail: 'Focus on trying to think that the body, the broad masses of people think ',
                  src: 'https://yun.pfan123.com/images/temp/mission-3.png'        
                }                        
              ]       
            }                          
          }
      },

      components: { 
        'bat-banner': Banner,
        'bat-image': Image, 
        'bat-introduce': Introduce,
        'bat-team': Team,
        'bat-mission': Mission
      },

      computed: {
        banners () {
          return this.$store.getters.bannerList
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