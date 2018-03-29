<template>
    <div class="introduce">
        <div class="introduce_wrap">
            <div class="introduce_inner">
                <h3>{{isEnglish ? introduce.ftitle : introduce.title}}</h3>
                <div class="introduce_text" v-html="isEnglish ? introduce.fdesc : introduce.desc">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'bat-introduce',

    props: {
        introduce: {
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
    .introduce
        background #fff
        padding 46px 0 40px

    .introduce_wrap
        margin 0 auto
        width 1136px
        min-width 1136px
        overflow hidden  

    .introduce h3
        font-size 25px
        letter-spacing 3px
        color #333
        font-weight 400
        text-align center
        line-height 1.1
        margin-bottom 38px

    .introduce_text
        padding 0 100px
        font-size 13px
        color #666
        text-indent 26px
        line-height 2.2

</style>