<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title">{{title}}</h2>
    <div class="upload-mod">
      <div class="preview_wrap" v-if = "info.src">
        <i class="icon" @click="deleImg"></i>
        <img class="preview_img" :src="info.src">
      </div>
      <el-upload
        class="upload-demo"
        drag
        action="/api/dashboard/uploadImg.json"
        :on-preview="handlePreview"
        :on-change="handleChange"
        :on-remove="handleRemove"      
        list-type="picture"
        :multiple="false"
        :on-success="handleSuccess"
        v-if = "!info.src"
        >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>      
      <div class="el-upload__tip" slot="tip">上传大小标准 <b style="color: red">1900x480</b>，只能上传jpg/png文件，且不超过500kb</div>  
    </div>   
    <div class="sys_input_block">
      <h4>图片标签（用逗号分隔）: </h4>
      <el-input v-model="info.tags" placeholder="请输入图标标签" width="400"></el-input>
    </div>
    <div class="sys_input_block">
      <h4>Link(如无外链跳转， 请不填): </h4>
      <el-input v-model="info.link" placeholder="请输入跳转链接, 如无可以不输入" width="400"></el-input>
    </div>    
    <div class="sys_input_block">
      <h4>分类: </h4>
      <el-select v-model="info.categroy" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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
let banId //图片模块问题id
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
      info: {
        tags: '',
        link: '',
        src: '',
        categroy: ''
      },
      options: [{
        value: 'home',
        label: '首页'
      }, {
        value: 'product',
        label: '产品中心'
      }, {
        value: 'news',
        label: '新闻中心'
      }, {
        value: 'about',
        label: '关于我们'
      }, {
        value: 'contact',
        label: '联系我们'
      }, {
        value: 'faq',
        label: '疑难解答'
      }]      
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleChange(file) {

    },
    handlePreview(file) {

    },
    handleSuccess(file){
      this.info.src = file.data.path
    },

    onSubmit() {
      this.dialogVisible = true
      type = "edit"
      this.dialogMsg = "您确定要提交吗？"   
    },

    handleClose(done) {
      done()
    },  

    deleImg(){
      this.info.src = ''
    },

    dialogConfirm(){
      this.dialogVisible = false
      if(type == "edit"){
        this.$http.post('/api/dashboard/updateImgInfo.json', {
          src: this.info.src,
          tags: this.info.tags,
          link: this.info.link,
          categroy: this.info.categroy,
          author: this.author,
          id: this.info.id
        }).then( ({ data }) => {
          if(data.success){
            this.$router.push({ path: '/dashboard/banners' })
          }else{
            this.dialogVisible = true
            this.dialogMsg = "图片模块更新失败，请重试～～"            
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
    banId = this.$route.params.id 
    if(/home|product|news|about|contact|faq/.test(banId)){
      this.info.categroy = banId
      this.title = "上传图片"   
    }else{
      this.title = "编辑图片"
      this.$http.post('/api/dashboard/getImgInfo.json', {
        id: banId
      }).then( ({ data }) => {
        if(data.success){
          this.info = data.data
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
    margin 20px 0

    h4
      font-weight normal
      font-size 14px
      margin-bottom 8px

  .preview_wrap
    width 460px
    padding 10px 0 10px 10px
    border 1px solid #c0ccda
    border-radius 8px
    position relative

    &:hover
      .icon
        display block 

    .preview_img
      width 380px
      height 96px
    
    .icon
      position absolute
      display none
      top 0
      right 0
      cursor pointer
      opacity .75
      color #606266
      width 50px
      height 50px
      background url('/static/img/close.png')


</style>
