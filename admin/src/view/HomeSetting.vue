<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title">{{contentInfo.title}}</h2>
    <div class="sys_input_block">
      <h4>首页幻灯片模块</h4>
      <el-input v-model="sysInfo.siteName" placeholder="请输入站点名称" width="400"></el-input>
    </div>
    <div class="sys_input_block">
      <h4>站点描述</h4>
      <el-input v-model="sysInfo.siteDesc" placeholder="请输入站点描述" width="400"></el-input>
    </div>    
    <div class="sys_input_block">
      <h4>站点关键词</h4>
      <el-input v-model="sysInfo.siteKeywords" placeholder="请输入站点关键词" width="400"></el-input>
    </div>   

    <el-button type="primary">提交</el-button>   
  </div>
</template>

<script>
export default {
  name: 'sys',
  props: {
    contentInfo: Object,
    required: true
  },     
  data() {
    return {
      sysInfo: {
        siteName: "网站",
        siteDesc: '',
        siteKeywords: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$http.post('/user/signIn.json', {
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
  .sys_setting_title
    font-size 18px
    font-weight normal
    margin-bottom 16px

  .sys_input_block
    margin-bottom 14px

    h4
      font-weight normal
      font-size 14px
      margin-bottom 8px
</style>
