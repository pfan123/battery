<template>
    <div class="map">
        <div class="map_wrap">
            <div class="map_float">
                <div class="map_phone">服务热线: <span>40088-10115</span>
                </div>
                <div class="map_sel">
                    <select>
                        <option value="114.088895,22.549487" selected="">深圳总部</option>
                    </select>
                </div>
                <div class="map_adress" id="map_adress">广东省深圳市龙华区三联路跟清泉路交汇处
                    <br>联系方式: 40088-10115</div>
            </div>
            <div class="map_content"><img src="/public/images/map.jpg" alt=""></div>
        </div>
        
        <!-- <iframe class="map_content" scrolling="no" frameborder="0" src="http://api.map.baidu.com/marker?location=39.916979519873,116.41004950566&title=我的位置&content=百度奎科大厦&output=html"></iframe> -->
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
    .map 
        height 580px
        width 100%
        
    .map_wrap
        width 1136px
        margin auto
        overflow hidden 
        padding-top 80px

    .map_content 
        width 645px
        height 400px
        overflow hidden
    
    .map_float 
        margin-top 76px
        width 411px
        float left
        margin-right 80px
    
    .map_sel 
        height 52px
        line-height 52px
        width 405px
        border none
        background #e7181a
        overflow hidden
        margin-bottom 5px
        padding 0 10px
    
    .map_sel select 
        border none
        background transparent
        height 100%
        width 100%
        color #fff
        font-size 20px
        padding 0
    
    .map_sel select option 
        color #333
        padding 0
    
    .map_phone 
        font-size 20px
        text-align left
        width 395px
        background #e7181a
        color #fff
        padding 0 15px
        height 52px
        line-height 52px
        margin-bottom 5px
        letter-spacing 3px
    
    .map_phone span 
        letter-spacing 3px
        font-weight 700
    
    .map_adress 
        width 395px
        background #e7181a
        font-size 15px
        color #fff
        padding 15px 15px
    
</style>