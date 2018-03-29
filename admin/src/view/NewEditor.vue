<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title">{{title}}</h2>
    <div class="sys_input_block">
      <h4>中文标题：</h4>
      <el-input v-model="news.title" placeholder="请输入中文标题" width="400"></el-input>
    </div>
    <div class="sys_input_block">
      <h4>英文标题：</h4>
      <el-input v-model="news.ftitle" placeholder="请输入英文标题" width="400"></el-input>
    </div>    
    <div class="upload-mod">
      <h4>文章摘要图片：</h4>
      <img v-if="news.src" :src="news.src" alt="">
      <el-input class="news_input" :disabled="true" v-model="news.src" placeholder="展示页脚logo路径" width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">258x185</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>           
    <div class="sys_input_block">
      <h4>中文摘要：</h4>
      <el-input type="textarea" v-model="news.abstract" placeholder="请输入中文摘要" width="400"></el-input>
    </div>   
    <div class="sys_input_block">
      <h4>英文摘要：</h4>
      <el-input type="textarea" v-model="news.fabstract" placeholder="请输入英文摘要" width="400"></el-input>
    </div>           
    <div class="sys_input_block">
      <h4>中文文章内容：</h4>
      <my-vue-editor :contains="news.content" :content="news.content" @change='cnUpdate' ></my-vue-editor>
    </div>      
    <div class="sys_input_block">
      <h4>英文文章内容：</h4>
      <my-vue-editor :contains="news.fcontent" :content="news.fcontent" @change='englishUpdate' ></my-vue-editor>
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
let newsId //操作新闻文章id
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
        title: '',
        ftitle: '',
        abstract: '',        
        fabstract: '',
        content: '',
        fcontent: '',
        src: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.dialogVisible = true
      type = "edit"
      this.dialogMsg = "您确定要提交吗？"   
    },

    handleSuccess(file){
      this.news.src = file.data.path
    },

    handleClose(done) {
      done()
    },  

    dialogConfirm(){
      this.dialogVisible = false
      if(type == "edit"){
        this.$http.post('/api/dashboard/updateNewsInfo.json', {
          title: this.news.title,
          ftitle: this.news.ftitle,
          abstract: this.news.abstract,
          fabstract: this.news.fabstract,
          content: this.news.content,
          fcontent: this.news.fcontent,
          author: this.author,
          src: this.news.src,
          id: this.news.id
        }).then( ({ data }) => {
          if(data.success){
            this.$router.push({ path: '/dashboard/news' })
          }else{
            this.dialogVisible = true
            this.dialogMsg = "新闻文章信息更新失败，请重试～～"            
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
    newsId = this.$route.params.id 
    if(newsId == "create"){
      this.title = "创建新闻"   
    }else{
      this.title = "编辑新闻"
      this.$http.post('/api/dashboard/getNewsInfo.json', {
        id: newsId
      }).then( ({ data }) => {
        if(data.success){
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

  .upload-mod
    margin-bottom 20px
    img 
      width 258px
      height 185px
      margin-bottom 4px
    h4
      font-weight normal
      font-size 14px
      margin-bottom 8px  
    .news_input
      margin-bottom 8px  
</style>
