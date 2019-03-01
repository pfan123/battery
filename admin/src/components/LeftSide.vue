<template>
  <div class="leftside">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="item in leftSide"><a :class="{cur: item.routename == curRoute }" href="javascript:;" @click="toLink(item.link, item.routename)" target="_blank">{{item.name}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'leftside',
  props: {
    leftSide: Array,
    required: true
  },  
  data() {
    return {
      title: '管理后台',
      curRoute: 'Sys'
    }
  },
  created(){
    this.curRoute = this.$route.name
  },    
  methods: {
    toLink(link, curRoute){
      this.$router.push({ path: link })
      this.curRoute = curRoute
      this.$emit('toLink', curRoute)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .leftside
    position fixed
    width 180px
    height 100%
    top 0
    bottom 0
    background #323232

    h3
      background #2196F3
      font-size 18px
      height 50px
      line-height 50px
      text-align center
      color #fff
      margin 0
    ul
      list-style-type none
      padding 0
      background #323232
      margin 0

    a
      display block
      font-size 14px
      height 50px
      line-height 50px
      color #999
      text-decoration none
      text-align center

      &.cur 
        color #fff
        background #504e4e  

      &:hover
        color #fff
        background #504e4e


</style>
