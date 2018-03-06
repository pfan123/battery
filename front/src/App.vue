<template>
  <div id="app">
    <bat-header></bat-header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <bat-footer></bat-footer>
  </div>
</template>

<script>
    import Header from './components/common/Header.vue'
    import Footer from './components/common/Footer.vue'

    export default {
      name: 'page',
      data() {
          return {
            msg: 'Welcome to Battery Site' 
          };
      },

      components: { 
        'bat-header': Header,
        'bat-footer': Footer
      },

      created () {

      },

      mounted () {

      },

      methods: {

      }
    };
</script>

<style lang="stylus">

</style>
