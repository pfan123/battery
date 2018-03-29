<template>
    <div class="category g_cf">
        <h3 class="category_title">{{isEnglish ? "Products" : "产品中心"}}</h3>
        <div class="category_left g_cf">
            <a href="javascript:;" v-for="(item, index) in cateList" :key="item.category" @click="tabCate(index)"  :class="{actived: item.active}">{{isEnglish ? item.fcategory : item.category}}</a>
        </div>
        <div class="category_right g_cf">
            <a v-if="productList[curCate]" v-for=" (item, index) in productList[curCate]" class="product_item" :key="index"  :href="'/detail/'+item.id">
                <div class="product_pic">
                    <img :src="item.src" alt="">
                </div>
                <div class="product_info">
                    <h4 class="product_item_title line2">
                        {{isEnglish ? item.ftitle : item.title}}
                    </h4>
                    <p class="product_price">$ {{item.price}} / piece</p>
                    <span class="product_pay" @click="goLink($event, item.link)">直接购买</span>
                </div>
            </a>                      
        </div>
    </div>
</template>

<script>
  import { getCategoryList } from '../api/index.js'
  export default {
    name: 'bat-category',

    props: {
        cateList: {
            type: Array,
            required: true
        }   
    }, 

    data() {
        return {
            curCate: ""
        }
    },

    computed: {
        isEnglish () {
            return this.$store.getters.getIsEnglish     
        },     
        productList () {
            return this.$store.getters.getProductList     
        }           
    },

    created () {
        let productList = {}
        this.cateList.map( item => {
            productList[item.category] = ""
        })
        this.curCate = this.cateList[0].category
        getCategoryList(this.curCate).then( data => {
            productList[this.curCate] = data
            this.$store.commit('SET_PRODUCT_LIST', {json: productList})
        })
    },

    mounted () {

    },

    methods: {
        tabCate(index){
            this.cateList.forEach( item => {
                item.active = false
            })
            this.cateList[index].active = true
            this.curCate = this.cateList[index].category
            this.setProductList()
        },
        setProductList(){
            getCategoryList(this.curCate).then( data => {
                this.productList[this.curCate] = data
                this.$store.commit('SET_PRODUCT_LIST', {json: this.productList})
            })
        },
        goLink(event, link){
            if (event) event.preventDefault()
            location.href = link
        }        
    } 
  }
</script>

<style lang="stylus">
    .category 
        padding 20px
        background #fff
        min-height 400px

    .category_title
        color #313131
        font-size 18px  
        font-weight normal  
        height 60px
        line-height 60px
        border-bottom 1px solid #ddd
        margin-bottom 20px

    .category_left
        width 180px
        float left
        margin-right 20px
        a
            display block
            height 36px
            line-height 36px
            font-size 16px
            &.actived
                color #e01222

    .category_right
        .product_item
            display block
            width 226px
            float left
            margin 0 30px 30px 0
            cursor pointer
            &_title
                font-size 14px
                color #666 
                font-weight normal 
                height 38px
                margin-bottom 6px
                line-height 18px

        .product_pic
            border 1px solid #ededed
            width 226px
            height 220px  
            _height 226px  
            padding 2px
            
            img 
                display block     
                width 100% 
                height 100%

        .product_info
            padding 4px 8px 0
            height 108px
            _height 112px

        .product_price
            font-size 14px
            color #e01222
            margin-bottom 12px
        
        .product_pay
            display block
            height 36px
            line-height 36px
            text-align center 
            font-size 14px
            background #e01222
            color #fff
            border-radius 2px
            
            &:hover
                opacity .9
</style>