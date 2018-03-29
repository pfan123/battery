<template>
  <div class="login">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <el-form label-position="right" ref="form" :model="form" label-width="40px">
            <p class="align-center" label-width="0">{{title}}</p>
            <el-form-item label="账号">
              <el-input auto-complete="on" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" auto-complete="on" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      title: '管理后台',
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$http.post('/api/user/signIn.json', {
        userName: this.form.name,
        password: this.form.password,
        source: 'form'
      }).then( ({ data }) => {
        if(data.success){
          this.$router.push({ path: '/dashboard' })
        }
      } ).catch(err => console.error(err))
    }
  },
  mounted() {

  }
}
</script>

<style lang="stylus" scoped>
  .login
    position absolute 
    left 0
    right 0
    top 50%
    transform translateY(-65%)

    .align-center
      font-size 30px
      text-align center
      margin-bottom 30px

    .el-button--primary
      width 100%

</style>
