<template>
    <div class="products">
        <h3 class="products_title">产品展示</h3>
        <el-carousel :interval="5000" arrow="always" height="700px">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="products_wrap g_cf">          
                    <a class="products_item"  href="/detail">
                        <img src="http://www.unitpackpower.com/img/S004H.jpg" class="products_img">
                        <p class="products_subtitle line2">
                            CYGEREEN 1400W LiFePO4 battery 20AH electric bike battery pack 48V / LFP Battery With
                        </p>
                    </a>
                    <a class="products_item"  href="/detail">
                        <img src="http://www.unitpackpower.com/img/S015H.jpg" class="products_img">
                        <p class="products_subtitle line2">
                            CYGEREEN 1400W LiFePO4 battery 20AH electric bike battery pack 48V / LFP Battery With
                        </p>
                    </a>
                    <a class="products_item"  href="/detail">
                        <img src="http://www.unitpackpower.com/img/S013H.jpg" class="products_img">
                        <p class="products_subtitle line2">
                            CYGEREEN 1400W LiFePO4 battery 20AH electric bike battery pack 48V / LFP Battery With
                        </p>
                    </a>
                    <a class="products_item"  href="/detail">
                        <img src="http://www.unitpackpower.com/img/S004H.jpg" class="products_img">
                        <p class="products_subtitle line2">
                            CYGEREEN 1400W LiFePO4 battery 20AH electric bike battery pack 48V / LFP Battery With
                        </p>
                    </a>     
                    <a class="products_item"  href="/detail">
                        <img src="http://www.unitpackpower.com/img/S004H.jpg" class="products_img">
                        <p class="products_subtitle line2">
                            CYGEREEN 1400W LiFePO4 battery 20AH electric bike battery pack 48V / LFP Battery With
                        </p>
                    </a>
                    <a class="products_item"  href="/detail">
                        <img src="http://www.unitpackpower.com/img/S015H.jpg" class="products_img">
                        <p class="products_subtitle line2">
                            CYGEREEN 1400W LiFePO4 battery 20AH electric bike battery pack 48V / LFP Battery With
                        </p>
                    </a>
                    <a class="products_item"  href="/detail">
                        <img src="http://www.unitpackpower.com/img/S013H.jpg" class="products_img">
                        <p class="products_subtitle line2">
                            CYGEREEN 1400W LiFePO4 battery 20AH electric bike battery pack 48V / LFP Battery With
                        </p>
                    </a>
                    <a class="products_item"  href="/detail">
                        <img src="http://www.unitpackpower.com/img/S004H.jpg" class="products_img">
                        <p class="products_subtitle line2">
                            CYGEREEN 1400W LiFePO4 battery 20AH electric bike battery pack 48V / LFP Battery With
                        </p>
                    </a>                     
                </div>           
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
  export default {
    name: 'bat-products',

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
  .products
    background #fff
    padding 40px 0 15px
  
  .products_title
    font-size 28px
    color #333
    text-align center
    font-weight normal
    margin-bottom 30px
  
  .products_wrap
    margin 0 auto
    width 1136px
    height 700px
    min-width 1136px
    padding 10px 0 0
    overflow hidden    
  
  .products_item
    display block
    margin 0 32px 32px 0
    float left
    width 258px
    _width 258px
    border 1px solid #eee
    background #fff
    transition: all .5s ease;
    &:nth-child(4n)
      margin-right 0
    &:hover
      transform translateY(-5px)
      box-shadow 0 2px 10px rgba(0, 0, 0, .1)
      border-color #FF0036
      .products_img
        opacity .7

  .products_img
    width 100%
    height 260px
    opacity 1
    margin-bottom 10px
    transition all .6s ease
  
  .products_subtitle
    font-size 16px
    color #333 
    font-weight normal 
    height 40px
    margin-bottom 12px
    line-height 20px
    padding 0 10px
  
  .products_subtitle i
    width 10px
    height 18px
    background url('https://yun.pfan123.com/images/icon/queryArrow.png') no-repeat
    position absolute
    right 6px
    top 50%
    margin-top -9px

  .el-carousel__item
    background #fff !important
  
</style>