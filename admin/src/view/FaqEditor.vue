<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title">{{title}}</h2>
    <div class="sys_input_block">
      <h4>中文标题</h4>
      <el-input v-model="news.title" placeholder="请输入中文标题" width="400"></el-input>
    </div>
    <div class="sys_input_block">
      <h4>英文标题</h4>
      <el-input v-model="news.ftitle" placeholder="请输入英文标题" width="400"></el-input>
    </div>      
    <div class="sys_input_block">
      <h4>中文详情内容</h4>
      <my-vue-editor :contains="news.detail" :content="news.detail" @change='cnUpdate' ></my-vue-editor>
    </div>      
    <div class="sys_input_block">
      <h4>英文详情内容</h4>
      <my-vue-editor :contains="news.fdetail" :content="news.fdetail" @change='englishUpdate' ></my-vue-editor>
    </div>      
    <el-button type="primary" @click="onSubmit">提交</el-button>   

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>{{dialogMsg}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogConfirm">确 定</el-button>
      </span>
    </el-dialog>        
  </div>
</template>

<script>
let faqId //操作疑难问题id
let type
export default {
  name: 'sys',
  props: {
    author: String,
    required: true
  },     
  data() {
    return {
      dialogVisible: false,
      dialogMsg: '',
      title: '',
      news: {

      }
    }
  },
  methods: {
    onSubmit() {
      this.dialogVisible = true
      type = "edit"
      this.dialogMsg = "您确定要提交吗？"   
    },

    handleClose(done) {
      done()
    },  

    dialogConfirm(){
      this.dialogVisible = false
      if(type == "edit"){
        this.$http.post('/api/dashboard/updateFaqInfo.json', {
          title: this.news.title,
          ftitle: this.news.ftitle,
          detail: this.news.content,
          fdetail: this.news.fcontent,
          author: this.author,
          id: this.news.id
        }).then( ({ data }) => {
          if(data.success){
            this.$router.push({ path: '/dashboard/faq' })
          }else{
            this.dialogVisible = true
            this.dialogMsg = "疑难问题信息更新失败，请重试～～"            
          }
        } ).catch(err => console.error(err))        
      }
    },
    cnUpdate(data){
      this.news.content = data
    },
    englishUpdate(data){
      this.news.fcontent = data
    }   
  },
  mounted() {
    faqId = this.$route.params.id 
    if(faqId == "create"){
      this.title = "创建疑难问题"   
    }else{
      this.title = "编辑疑难问题"
      this.$http.post('/api/dashboard/getFaqInfo.json', {
        id: faqId
      }).then( ({ data }) => {
        if(data.success){
          console.error("getFaqInfo", data.data)
          this.news = data.data
        }
      } ).catch(err => console.error(err))      
    }
  }
}
</script>

<style lang="stylus" scoped>
  .sys_setting_title
    font-size 18px
    font-weight normal
    margin-bottom 16px

  .sys_input_block
    margin-bottom 20px

    h4
      font-weight normal
      font-size 14px
      margin-bottom 8px

</style>
