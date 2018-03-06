<template>
    <div class="detail_wrap">
        <div class="detail_top g_cf">
            <div class="detail_top_lf">
                <div class="detail_top_pic">
                    <img src="http://www.unitpackpower.com/images/U007-.JPG" alt="">
                </div>
                <div class="detail_style_pic g_cf">
                    <span><img src="http://www.unitpackpower.com/images/U007-.JPG" alt=""></span>
                    <span><img src="http://www.unitpackpower.com/images/U007-.JPG" alt=""></span>
                    <span><img src="http://www.unitpackpower.com/images/U007-.JPG" alt=""></span>
                    <span><img src="http://www.unitpackpower.com/images/U007-.JPG" alt=""></span>
                    <span><img src="http://www.unitpackpower.com/images/U007-.JPG" alt=""></span>
                </div>
            </div>

            <div class="detail_top_rg">
                <h3>49寸拼接系列</h3>
                <div class="detail_txt">
                    产品概述：<br />独特性能，极窄边框设计，拼接缝隙更小，智能无限拼接，IP网络流媒体解码，采用创维V12数字引擎、自动消残影、智能温控、智能背光灯区域调节及原装进口工业级液晶面板，LED背光源，更环保节能，对视频图像画面处理更清晰、景深层次更强。
                </div>
            </div>                
        </div>
        
        <div class="detail_pro">
            <div class="detail_pro_menu g_cf">
                <a href="" class="on">产品介绍</a>
                <a href="">规格参数</a>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-detail',

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
    .detail_wrap
        background #fff
        margin 46px auto 40px
        width 1136px
        min-width 1136px
        overflow hidden  
        padding 30px
    
    .detail_top
        margin-bottom 30px

    .detail_top_lf
        width 472px
        float left
        .detail_top_pic
            height 472px
            border 1px solid #eee            
            margin-bottom 18px
            img     
                width 100%
                height 100%
        
    .detail_style_pic
        span 
            display block
            width 78px
            _width 80px
            height 78px
            _height 80px
            border 1px solid #eee  
            float left
            margin-right 18px
            cursor pointer
            &:last-child
                margin 0
            img 
                width 100%
                height 100%

    .detail_top_rg
        padding 20px 0 0 25px
        margin-left 472px
        h3
            color: #282828
            font-size: 35px;
            padding-bottom: 32px;
            border-bottom: 1px dashed #cbcbcb;
        .detail_txt
            padding: 30px 0
            color: #282828
            line-height: 30px

    .detail_pro_menu
        line-height 60px
        height 60px
        background: #544d4c;
        a
            display block
            float left
            width: 250px
            height 100%
            font-size: 18px;
            color #fff
            text-align center
            &.on
                background: #0055d3;
</style>