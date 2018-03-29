<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title">{{title}}</h2>
    <div class="sys_input_block">
      <h4>中文名称：</h4>
      <el-input v-model="products.title" placeholder="请输入中文标题" width="400"></el-input>
    </div>
    <div class="sys_input_block">
      <h4>英文名称：</h4>
      <el-input v-model="products.ftitle" placeholder="请输入英文标题" width="400"></el-input>
    </div>    
    <div class="sys_input_block">
      <h4>产品所属分类: </h4>
      <el-input v-if="isHideSelect" v-model="products.category" :disabled="true"  width="400"></el-input>
      <el-select  v-else v-model="products.fcategory" placeholder="请选择" @change="change">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>           
    <div class="upload-mod">
      <h4>商品图片1：</h4>
      <img v-if="products.src1" :src="products.src1" alt="">
      <el-input class="news_input" :disabled="true" v-model="products.src1" placeholder="商品图片1" width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess1">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">220x220</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>      
    <div class="upload-mod">
      <h4>商品图片2：</h4>
      <img v-if="products.src2" :src="products.src2" alt="">
      <el-input class="news_input" :disabled="true" v-model="products.src2" placeholder="商品图片2" width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess2">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">220x220</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>    
    <div class="upload-mod">
      <h4>商品图片3：</h4>
      <img v-if="products.src3" :src="products.src3" alt="">
      <el-input class="news_input" :disabled="true" v-model="products.src3" placeholder="商品图片3" width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess3">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">220x220</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>      
    <div class="upload-mod">
      <h4>商品图片4：</h4>
      <img v-if="products.src4" :src="products.src4" alt="">
      <el-input class="news_input" :disabled="true" v-model="products.src4" placeholder="商品图片4" width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess4">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">220x220</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>     
    <div class="upload-mod">
      <h4>商品图片5：</h4>
      <img v-if="products.src5" :src="products.src5" alt="">
      <el-input class="news_input" :disabled="true" v-model="products.src5" placeholder="商品图片5" width="400"></el-input>
      <el-upload
        class="upload-demo"
        action="/api/dashboard/uploadImg.json"
        :multiple="false"
        :show-file-list="false"
        :on-success="handleSuccess5">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">上传大小标准 <b style="color: red">220x220</b>，只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>   
    </div>                        
    <div class="sys_input_block">
      <h4>产品中文产品概述：</h4>
      <el-input  type="textarea" autosize v-model="products.abstract" placeholder="请输入中文摘要" width="400"></el-input>
    </div>   
    <div class="sys_input_block">
      <h4>产品英文产品概述：</h4>
      <el-input   type="textarea" autosize v-model="products.fabstract" placeholder="请输入英文摘要" width="400"></el-input>
    </div>    
    <div class="sys_input_block">
      <h4>请输入产品购买链接：</h4>
      <el-input v-model="products.link" placeholder="请输入产品购买链接" width="400"></el-input>
    </div>        
    <div class="sys_input_block">
      <h4>产品价格（美元价格）：</h4>
      <el-input v-model="products.price" placeholder="请输入产品价格" width="400"></el-input>
    </div>             
    <div class="sys_input_block">
      <h4>产品中文详情内容：</h4>
      <my-vue-editor :contains="products.content" :content="products.content" @change='cnUpdate' ></my-vue-editor>
    </div>      
    <div class="sys_input_block">
      <h4>产品英文详情内容：</h4>
      <my-vue-editor :contains="products.fcontent" :content="products.fcontent" @change='englishUpdate' ></my-vue-editor>
    </div>      
    <el-button type="primary" @click="onSubmit">提交</el-button>   

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div v-if="isCreateCate">
        <div class="sys_input_block">
          <h4>中文分类名：</h4>
          <el-input v-model="category" placeholder="请输入中文分类名"></el-input>
        </div> 
        <div class="sys_input_block">
          <h4>英文分类名：</h4>
          <el-input v-model="fcategory" placeholder="请输入英文分类名"></el-input>
        </div>         
        <el-button type="primary" @click="categoryConfirm">确 定</el-button>
      </div>
      <div v-else>
        <span>{{dialogMsg}}</span>
        <div style="margin-top: 10px">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogConfirm">确 定</el-button>
        </span>  
        </div>      
      </div>
    </el-dialog>        
  </div>
</template>

<script>
let proId //操作新闻文章id
let type
export default {
  name: 'sys',
  props: {
    author: String,
    required: true
  },     
  data() {
    return {
      cateArr: [],
      isCreateCate: false,
      isHideSelect: false,
      dialogVisible: false,
      dialogMsg: '',
      title: '',
      category: '',  //新输入分类
      fcategory: '',
      products: {
        title: '',
        ftitle: '',
        fcategory: '',
        category: '',
        abstract: '',        
        fabstract: '',
        content: '',
        fcontent: '',
        src1: '',
        src2: '',
        src3: '',
        src4: '',
        src5: '',
        link: '',
        price: ''
      },
      options: [
      {
        value: 'create',
        label: '创建分类'
      }]         
    }
  },
  methods: {
    onSubmit() {
      this.dialogVisible = true
      type = "edit"
      this.dialogMsg = "您确定要提交吗？"   
    },

    handleSuccess1(file){
      this.products.src1 = file.data.path
    },

    handleSuccess2(file){
      this.products.src2 = file.data.path
    },

    handleSuccess3(file){
      this.products.src3 = file.data.path
    },   
    
    handleSuccess4(file){
      this.products.src4 = file.data.path
    },       

    handleSuccess5(file){
      this.products.src5 = file.data.path
    },       

    change(e){
      if(e == "create"){
        this.dialogVisible = true
        this.isCreateCate = true
      }else{
        this.cateArr.map( item => {
          if( e == item.fcategory){
            this.products.category = item.category
          }
        })
      }
    },

    categoryConfirm(e){
      let flag = false
      this.options.map( item => {
        if(item.value == this.fcategory.replace(/(^\s*)|(\s*$)/g, "") || item.label == this.category.replace(/(^\s*)|(\s*$)/g, "")){
          flag = true
        }
      })
      

      if(this.fcategory != '' && this.category != ''){
        if(flag){
          alert("抱歉，您创建的分类名与已有的重复，请重新填写")
          this.category = ""
          this.fcategory = ""        
          return 
        }
        this.options.unshift({value: this.fcategory, label: this.category})
        this.products.category = this.category
        this.products.fcategory = this.fcategory
        this.isHideSelect = true
        this.isCreateCate = false
        this.dialogVisible = false
      }else{
        alert("请认真填写中文分类、英文分类，必填")
      }

    },

    handleClose(done) {
      this.isHideSelect = false
      done()
    },  

    dialogConfirm(){
      this.dialogVisible = false
      if(type == "edit"){
        this.$http.post('/api/dashboard/updateProductsInfo.json', {
          title: this.products.title,
          ftitle: this.products.ftitle,
          category: this.products.category,
          fcategory: this.products.fcategory,          
          abstract: this.products.abstract,
          fabstract: this.products.fabstract,
          price: this.products.price,
          src1: this.products.src1,
          src2: this.products.src2,
          src3: this.products.src3,
          src4: this.products.src4,
          src5: this.products.src5,
          link: this.products.link,
          content: this.products.content,
          fcontent: this.products.fcontent,
          author: this.author,
          id: this.products.id
        }).then( ({ data }) => {
          if(data.success){
            this.$router.push({ path: '/dashboard/products' })
          }else{
            this.dialogVisible = true
            this.dialogMsg = "产品信息更新失败，请重试～～"            
          }
        } ).catch(err => console.error(err))        
      }
    },
    cnUpdate(data){
      this.products.content = data
    },
    englishUpdate(data){
      this.products.fcontent = data
    } 
  },
  created(){
    //拉取分类
    this.$http.get("/api/dashboard/getProductsCateList.json").then( ({ data }) => {
      if(data.success){
        this.cateArr = data.data
        this.cateArr.map(item => {
          this.options.unshift({
            value: item.fcategory,
            label: item.category
          })
        })
        
      }else{
        this.dialogMsg = "抱歉，产品分类拉取失败，请刷新页面重试～～"
      }
    }).catch(err => console.error(err))    
  },
  mounted() {
    proId = this.$route.params.id 
    if(proId == "create"){
      this.title = "发布产品信息"   
    }else{
      this.title = "编辑产品信息"
      this.$http.post('/api/dashboard/getProductsInfo.json', {
        id: proId
      }).then( ({ data }) => {
        if(data.success){
          this.products = data.data
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
