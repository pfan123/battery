<template>
  <div class="feat_keyword">
      <div class="feat_keyword_list g_cf">
          <div class="feat_keyword_item" v-for="item in feats" :key="item.src">
              <div class="feat_keyword_icon"><img :src="item.src" alt=""></div>
              <div class="feat_keyword_info">
                  <h4>{{item.title}}</h4>
                  <p class="line2">{{item.desc}}</p>
              </div>
          </div>
      </div>
  </div>  
</template>

<script>
export default {
  name: 'bat-feature',
  
  props: {
    feats: Array,
    required: true
  },

  data() {
      return {

      };
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
    .feat_keyword
        background #fff
        width 100%
        height 140px
        margin-bottom 50px
    .feat_keyword_list
        padding-top 34px
        margin 0 auto
        width 1135px
        min-width 1135px 
        overflow auto       
    .feat_keyword_item
        width 25%
        float left
        position relative
        cursor pointer
        transition all .3s ease
        &:hover
            transform translateY(-3px)

    .feat_keyword_icon
        position absolute
        left 0
        top 0
    .feat_keyword_icon img
        width 52px
        height 52px
        display block
    .feat_keyword_info
        padding-left 70px
    .feat_keyword_info h4
        font-size 18px
        font-weight 400
        color #333
        line-height 1.1
        margin-bottom 6px
    .feat_keyword_info p
        display block
        font-size 13px
        color #666
        margin-bottom 4px
        padding-right 50px
</style>