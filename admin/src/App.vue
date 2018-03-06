<template>
  <div id="app">
    <router-view :username="userName"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      userName: ''
    }
  },
  beforeCreate() {
    //判断是否登陆跳转
    this.$http.get('/user/getUserInfo.json').then( ({ data }) => {
      if(data.data){
        this.userName = data.data.userName
        this.$router.push({ path: '/dashboard' })
      }
    }).catch((err) => {
        this.$router.push({ name: 'Login' })
    })
  },
  mounted() {

  },
  methods: {

  }  
}
</script>
