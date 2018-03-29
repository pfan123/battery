<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title">{{contentInfo.title}}</h2>
    <div class="sys_input_block">
      <h4>站点名称：</h4>
      <el-input v-model="sysInfo.title" placeholder="请输入站点名称" width="400"></el-input>
    </div>
    <div class="sys_input_block">
      <h4>站点描述：</h4>
      <el-input v-model="sysInfo.detail" placeholder="请输入站点描述" width="400"></el-input>
    </div>    
    <div class="sys_input_block">
      <h4>LOGO（390x40）：</h4>
      <img v-if="sysInfo.logo1" :src="sysInfo.logo1" alt="" class="logo1_size">
      <el-input class="sys_input" :disabled="true" v-model="sysInfo.logo1" placeholder="展示logo路径" width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess1">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">390x40</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>      
    <div class="sys_input_block">
      <h4>Favicon（140x140）：</h4>
      <img  v-if="sysInfo.favicon" :src="sysInfo.favicon" alt="" class="favicon_size">
      <el-input class="sys_input" :disabled="true" v-model="sysInfo.favicon" placeholder="展示favicon路径"  width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess2">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">140x140</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>     
    <div class="sys_input_block">
      <h4>页脚LOGO（144x64）：</h4>
      <img v-if="sysInfo.logo2" :src="sysInfo.logo2" alt="" class="logo2_size">
      <el-input class="sys_input" :disabled="true" v-model="sysInfo.logo2" placeholder="展示页脚logo路径" width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess3">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">144x64</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>            
    <div class="sys_input_block">
      <h4>站点关键词：</h4>
      <el-input v-model="sysInfo.keyword" placeholder="请输入站点关键词" width="400"></el-input>
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
let type

export default {
  name: 'sys',
  props: {
    contentInfo: Object,
    required: true
  },  

  data() {
    return {
      dialogVisible: false,
      dialogMsg: '',          
      fileList: [],
      sysInfo: {
        title: '',
        keyword: '',
        detail: '',        
        logo1: '',
        logo2: '',
        favicon: '',
        id: '',        
      }
    }
  },

  mounted() {
      this.$http.get('/api/dashboard/getSysInfo.json').then( ({ data }) => {
        if(data.success){
          let json = data.data
          this.sysInfo = {
            title: json.title,
            detail: json.detail,
            keyword: json.keyword,
            logo1: json.logo1,
            logo2: json.logo2,
            favicon: json.favicon,  
            id: json.id,                      
          }
        }else{
          alert("抱歉，系统信息获取失败！请刷新页面重试。")
        }
      } ).catch(err => console.error(err))
  },

  methods: {
    handleClose(done) {
      done()
    },  

    dialogConfirm(){
      this.dialogVisible = false

      if(type == "confrim"){
        let { title, detail, keyword, logo1, logo2, favicon, id } = this.sysInfo
        this.$http.post('/api/dashboard/updateSysInfo.json', {
          title,
          detail,
          keyword,
          logo1,
          logo2,
          favicon,
          id
        }).then( ({ data }) => {
          if(!data.success){
            this.dialogVisible = true
            this.dialogMsg = "抱歉，系统信息更新失败！请刷新页面重试。" 
            type = ''           
          }
        } ).catch(err => console.error(err))     
      }
    },  

    onSubmit() {
      this.dialogVisible = true
      this.dialogMsg = "确认要提交修改吗？"   
      type = "confrim"   
    },
    
    handleSuccess1(file){
      this.sysInfo.logo1 = file.data.path
    },

    handleSuccess2(file){
      this.sysInfo.favicon = file.data.path
    },

    handleSuccess3(file){
      this.sysInfo.logo2 = file.data.path
    }          
  }  
}
</script>

<style lang="stylus" scoped>
  .sys_setting_title
    font-size 18px
    font-weight normal
    margin-bottom 20px

  .sys_input_block
    margin-bottom 20px

    h4
      font-weight normal
      font-size 14px
      margin-bottom 8px
    
    .sys_input
      margin-bottom 10px    

  .logo1_size
    width 390px
    height 40px
    margin 10px

  .favicon_size
    width 60px
    height 60px    
    margin 10px

  .logo2_size
    width 144px
    height 64px   
    margin 10px     
</style>
