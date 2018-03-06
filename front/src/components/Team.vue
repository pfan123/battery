<template>
    <div class="team">
        <div class="team_wrap">
            <h3>团队介绍</h3>
            <div class="team_list clearfix">
                <div class="team_item">
                    <div class="team_item_inner">
                        <div class="team_img">
                            <img src="http://temp.im/250x218">
                        </div>
                        <div class="team_info">
                            <h4>杨守伟 / 董事长<span>(创始人)</span></h4>
                            <div class="team_info_desc">哈尔滨工业投资集团高管，历任哈尔滨轻工资产经营公司办公室副主任、改革处副处长，哈尔滨工业资产经营公司战略发展副部长、部长，哈尔滨古铁市场有限公司总经理，现为公司法人股东哈工投高管、哈尔滨鑫瑞融资租赁有限公司董事长。</div>
                        </div>
                    </div>
                </div>
                <div class="team_item">
                    <div class="team_item_inner">
                        <div class="team_img">
                            <img src="http://temp.im/250x218">
                        </div>
                        <div class="team_info">
                            <h4>向亚珍 / 财务总监<span>(创始人)</span></h4>
                            <div class="team_info_desc">小额贷款行业从业经验10年以上，曾任中安信业高管，历任店长、区域经理、融资总监，曾任深圳市中安财富资产管理有限公司执行董事；深圳市普惠安投资管理有限公司董事总经理。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-team',

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
    .team
        background #f4f4f4
        padding 40px 0 50px

    .team_wrap
        margin 0 auto
        width 1136px
        min-width 1136px
        overflow hidden  

    .team h3
        font-size 25px
        letter-spacing 3px
        color #333
        font-weight 400
        text-align center
        line-height 1.1
        margin-bottom 47px
    
    .team_list
        margin-right -38px
    
    .team_item
        float left
        text-align center
        width 50%
        margin-bottom 30px
        height 218px
    
    .team_item_inner
        margin-right 38px
        position relative
        background #fff
        height 100%
        overflow hidden
        transition all .5s ease
    
    .team_item_innerhover
        transform translateY(-5px)
        box-shadow 0 2px 10px rgba(0, 0, 0, .1)
    
    .team_img
        width 249px
        height 218px
        background #ddd
        position absolute
        left 0
        top 0
    
    .team_img img
        width 100%
        display block
    
    .team_info
        padding-left 275px
        padding-right 28px
        text-align left
    
    .team_info h4
        font-size 15px
        color #333
        font-weight 400
        line-height 1.1
        margin-bottom 20px
        padding-top 30px
    
    .team_info h4 span
        font-size 12px
        color #666
        margin-left 5px
    
    .team_info .team_info_desc
        font-size 13px
        color #666
        line-height 1.7
    
</style>