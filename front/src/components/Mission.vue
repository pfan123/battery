<template>
    <div class="mission">
        <div class="mission_inner">
            <h3>{{isEnglish ? mission.ftitle : mission.title}}</h3>
            <div class="mission_list">
                <div v-for="(item, index) in mission.list" :class="[index%2==0 ? 'mission_item left' : 'mission_item right']">
                    <div class="mission_img">
                        <img :src="item.src">
                    </div>
                    <div class="mission_info">
                        <h4><em>{{isEnglish ? item.ftitle : item.title}}</em> ／ {{isEnglish ? item.fdesc: item.desc}}</h4>
                        <span>{{isEnglish ? item.fdetail: item.detail}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-mission',

    props: {
        mission: {
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