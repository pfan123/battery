<template>
    <div class="mission">
        <div class="mission_inner">
            <h3>企业文化</h3>
            <div class="mission_list">
                <div class="mission_item left">
                    <div class="mission_img">
                        <img src="https://yun.pfan123.com/images/temp/mission-1.png">
                    </div>
                    <div class="mission_info">
                        <h4><em>企业使命</em> ／ 专业成就普惠金融</h4>
                        <span>专注努力以为体，博采众长以为用，打造专业的风控体系，专业成就普惠金融</span>
                    </div>
                </div>
                <div class="mission_item right">
                    <div class="mission_img">
                        <img src="https://yun.pfan123.com/images/temp/mission-2.png">
                    </div>
                    <div class="mission_info">
                        <h4><em>企业愿景</em> ／ 立足于小，谋求于大</h4>
                        <span>立足于小微企业，成就中国普惠金融的大局，立足于小微企业，助力每一个从小做起的小微企业的大梦想</span>
                    </div>
                </div>
                <div class="mission_item left">
                    <div class="mission_img">
                        <img src="https://yun.pfan123.com/images/temp/mission-3.png">
                    </div>
                    <div class="mission_info">
                        <h4><em>企业文化</em> ／ 快乐、高效、负责</h4>
                        <span>快乐是我们追求的工作氛围、高效是我们追求的工作能力、负责是我们追求的工作态度</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-mission',

    data() {
        return {

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
    .mission 
        height 635px
        width 100%
        background url(https://yun.pfan123.com/images/temp/missionBg.png) repeat-x
        padding 46px 0 36px
        clear both
        overflow hidden
    
    .mission_inner 
        margin 0 auto
        width 1136px
        min-width 1136px
        overflow hidden  
    
    .mission h3 
        font-size 25px
        color #fff
        font-weight 400
        text-align center
        line-height 1.1
        margin-bottom 40px
    
    .mission_item 
        height 178px
        background #fff
        position relative
        margin-bottom 12px
        overflow hidden
        transition all .5s ease
    
    .mission_itemhover 
        transform translateX(-5px)
    
    .mission_img 
        height 178px
        width 297px
        position absolute
        top 0
        background #ddd
    
    .mission_img img 
        width 100%
        display block
    
    .mission_item.left .mission_info 
        padding-left 316px
    
    .mission_item.right .mission_info 
        padding-right 297px
    
    .mission_item.left .mission_img 
        left 0
    
    .mission_item.right .mission_img 
        right 0
    
    .mission_item.right .mission_info 
        padding-left 46px
    
    .mission_info h4 
        color #333
        font-size 20px
        font-weight 400
        line-height 1.1
        margin-bottom 18px
        padding-top 62px
    
    .mission_info h4 em 
        font-weight 700
    
    .mission_info span 
        font-size 15px
        color #666
        line-height 1.1
        display block
    
</style>