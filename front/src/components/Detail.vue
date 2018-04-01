<template>
    <div class="detail_wrap">
        <div class="detail_top g_cf">
            <div class="detail_top_lf">
                <div class="detail_top_pic">
                    <img :src="curSrc" alt="">
                </div>
                <div class="detail_style_pic g_cf">
                    <span v-if="proContent.src1" :class="[curSrc == proContent.src1 ? 'actived' : '']" @mouseover="onMouseOver(proContent.src1)"><img :src="proContent.src1" alt=""></span>
                    <span v-if="proContent.src2" :class="[curSrc == proContent.src2 ? 'actived' : '']" @mouseover="onMouseOver(proContent.src2)"><img :src="proContent.src2" alt=""></span>
                    <span v-if="proContent.src3" :class="[curSrc == proContent.src3 ? 'actived' : '']" @mouseover="onMouseOver(proContent.src3)"><img :src="proContent.src3" alt=""></span>
                    <span v-if="proContent.src4" :class="[curSrc == proContent.src4 ? 'actived' : '']" @mouseover="onMouseOver(proContent.src4)"><img :src="proContent.src4" alt=""></span>
                    <span v-if="proContent.src5" :class="[curSrc == proContent.src5 ? 'actived' : '']" @mouseover="onMouseOver(proContent.src5)"><img :src="proContent.src5" alt=""></span>
                </div>
            </div>

            <div class="detail_top_rg">
                <h3>{{isEnglish ? proContent.ftitle : proContent.title}}</h3>
                <div class="detail_txt">
                    产品概述：<br />{{isEnglish ? proContent.fabstract : proContent.abstract}}独特性能，极窄边框设计，拼接缝隙更小，智能无限拼接，IP网络流媒体解码，采用创维V12数字引擎、自动消残影、智能温控、智能背光灯区域调节及原装进口工业级液晶面板，LED背光源，更环保节能，对视频图像画面处理更清晰、景深层次更强。
                </div>   
                <div class="detail_price" v-if="proContent.price">$ <span>{{ proContent.price }}</span></div>
                <a v-if="proContent.link" class="detail_btn" :href="proContent.link">立即购买</a>          
            </div>                
        </div>
        
        <div class="detail_pro">
            <div class="detail_pro_menu g_cf">
                <a href="javascript:;" class="on">产品介绍</a>
                <!-- <a href="">规格参数</a> -->
            </div>
            <div class="detail_pro_content g_cf" v-html="isEnglish ? proContent.fcontent : proContent.content"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-detail',
    props: {
        proContent: {
            type: Object,
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
            curSrc: ""
        }
    },

    components: {

    },

    created () {
        this.curSrc = this.proContent.src
    },

    mounted () {
        
    },

    methods: {
        onMouseOver(value){
            this.curSrc = value
        }   
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
            height 470px
            _height 472px
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
            &.actived
                border-color #e6382f
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
            max-height 270px
        .detail_price
            font-size 16px
            color #e33333  
            height 36px
            line-height 36px
            margin-bottom 30px
            span    
                font-size 24px
                font-weight bold
                
        .detail_btn
            display block
            font-size 14px
            background #e6382f
            width 220px
            height 40px
            line-height 40px
            color #fff
            text-align center
            border-radius 2px
            &:hover
                opacity .9

    .detail_pro_menu
        line-height 60px
        height 60px
        background #544d4c
        margin-bottom 30px
        a
            display block
            float left
            width: 250px
            height 100%
            font-size 18px
            color #fff
            text-align center
            &.on
                background #0055d3

    .detail_pro_content
        text-indent 25px
        font-size 14px
</style>