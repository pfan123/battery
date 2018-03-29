<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title">{{contentInfo.title}}</h2>
    <div class="sys_input_block">
      <h4 class="g_cf">首页幻灯片模块 <el-button class="upload_btn" type="primary" @click="onUpload('home')">上传<i class="el-icon-upload el-icon--right"></i></el-button></h4>
      <el-table
        :data="tableData.home"
        border
        style="width: 100%">
        <el-table-column
          label="缩略图" width="210">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt="" class="thump_size">
          </template>          
        </el-table-column>
        <el-table-column
          prop="tags"
          label="标签">
        </el-table-column>        
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="modified_time"
          label="修改日期">
          </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
          <el-button @click="editImg(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click="deteImg(scope.row.id, 'home')" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="sys_input_block">
      <h4 class="g_cf">产品中心幻灯片模块 <el-button class="upload_btn" type="primary" @click="onUpload('product')">上传<i class="el-icon-upload el-icon--right"></i></el-button></h4>
      <el-table
        :data="tableData.product"
        border
        style="width: 100%">
        <el-table-column
          label="缩略图" width="210">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt="" class="thump_size">
          </template>          
        </el-table-column>
        <el-table-column
          prop="tags"
          label="标签">
        </el-table-column>        
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="modified_time"
          label="修改日期">
          </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
          <el-button @click="editImg(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click="deteImg(scope.row.id, 'product')" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>  

    <div class="sys_input_block">
      <h4 class="g_cf">新闻中心幻灯片模块 <el-button class="upload_btn" type="primary" @click="onUpload('news')">上传<i class="el-icon-upload el-icon--right"></i></el-button></h4>
      <el-table
        :data="tableData.news"
        border
        style="width: 100%">
        <el-table-column
          label="缩略图" width="210">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt="" class="thump_size">
          </template>          
        </el-table-column>
        <el-table-column
          prop="tags"
          label="标签">
        </el-table-column>        
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="modified_time"
          label="修改日期">
          </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
          <el-button @click="editImg(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click="deteImg(scope.row.id, 'news')" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div> 

    <div class="sys_input_block">
      <h4 class="g_cf">关于我们幻灯片模块 <el-button class="upload_btn" type="primary" @click="onUpload('about')">上传<i class="el-icon-upload el-icon--right"></i></el-button></h4>
      <el-table
        :data="tableData.about"
        border
        style="width: 100%">
        <el-table-column
          label="缩略图" width="210">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt="" class="thump_size">
          </template>          
        </el-table-column>
        <el-table-column
          prop="tags"
          label="标签">
        </el-table-column>        
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="modified_time"
          label="修改日期">
          </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
          <el-button @click="editImg(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click="deteImg(scope.row.id, 'about')" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div> 

    <div class="sys_input_block">
      <h4 class="g_cf">联系我们幻灯片模块 <el-button class="upload_btn" type="primary" @click="onUpload('contact')">上传<i class="el-icon-upload el-icon--right"></i></el-button></h4>
      <el-table
        :data="tableData.contact"
        border
        style="width: 100%">
        <el-table-column
          label="缩略图" width="210">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt="" class="thump_size">
          </template>          
        </el-table-column>
        <el-table-column
          prop="tags"
          label="标签">
        </el-table-column>        
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="modified_time"
          label="修改日期">
          </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
          <el-button @click="editImg(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click="deteImg(scope.row.id, 'contact')" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div> 

    <div class="sys_input_block">
      <h4 class="g_cf">疑难解答幻灯片模块 <el-button class="upload_btn" type="primary" @click="onUpload('faq')">上传<i class="el-icon-upload el-icon--right"></i></el-button></h4>
      <el-table
        :data="tableData.faq"
        border
        style="width: 100%">
        <el-table-column
          label="缩略图" width="210">
          <template slot-scope="scope">
            <img :src="scope.row.src" alt="" class="thump_size">
          </template>          
        </el-table-column>
        <el-table-column
          prop="tags"
          label="标签">
        </el-table-column>        
        <el-table-column
          prop="author"
          label="作者">
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="发布日期">
        </el-table-column>
        <el-table-column
          prop="modified_time"
          label="修改日期">
          </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
          <el-button @click="editImg(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click="deteImg(scope.row.id, 'faq')" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div> 

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
import dateTime from '../utils/datetime'
let banId //图片模块问题id
let type
let categroy

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
      tableData: {}
    }
  },
  methods: {
    onUpload(type){
      if(type){
        this.$router.push({ path: `/dashboard/banedit/${type}` })
      }
    },

    handleClose(done) {
      done()
    },  

    dialogConfirm(){
      this.dialogVisible = false
      if(banId && type == "edit")this.$router.push({ path: `/dashboard/banedit/${banId}` })
      if(banId && type == "dete"){
        this.$http.post('/api/dashboard/deteImg.json', { id: banId }).then( ({ data }) => {
          if(data.success){
            let list = this.tableData[categroy]
            for(let i = list.length - 1; i>=0; i--){
              let item = list[i]
              if(item.id == banId){
                list.splice(i, 1)
                break;
              }
            }
            type = ''
          }else{
            this.dialogVisible = true
            this.dialogMsg = "系统删除失败，请重试～～"
          }
        }).catch(err => console.error(err))
      }
    },  

    editImg(id) {
      this.dialogVisible = true
      this.dialogMsg = "确认要修改图片模块吗？"
      banId = id
      type = "edit"
    },

    deteImg(id, cate) {
      this.dialogVisible = true
      this.dialogMsg = "确认要删除图片模块吗？"
      banId = id
      type = "dete"  
      categroy = cate 
    }    
  },

  created(){
      this.$http.get('/api/dashboard/getImgList.json').then( ({ data }) => {
        if(data.success){
          let json = data.data
          // 优先取 modified_time 进行排序
          for(let key in json){
            json[key].sort( (a, b) => {
              let c, d
              c = a.modified_time || a.create_time
              d = b.modified_time || b.create_time
              return d - c
            })
            json[key].forEach( item => {
              if(item.create_time)item.create_time = dateTime.parseStampToFormat( Number(item.create_time), 'YYYY-MM-DD hh:mm:ss' )
              if(item.modified_time)item.modified_time = dateTime.parseStampToFormat( Number(item.modified_time), 'YYYY-MM-DD hh:mm:ss' )
            })            
          }
          this.tableData = json
        }else{
          this.dialogMsg = "抱歉，疑难问题列表拉取失败，请刷新页面重试～～"
        }
      }).catch(err => console.error(err))
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
    margin-bottom 20px

    h4
      font-weight normal
      font-size 16px
      margin-bottom 8px
      height 48px
      line-height 36px
      
    .upload_btn
      float right
    
    .thump_size
      width 190px
      height 48px
      margin-top 5px
</style>
