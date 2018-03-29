<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title g_cf">{{title}} <el-button class="news_sendbtn" type="primary" @click="onLinkEdit">发布产品</el-button></h2>
    <div class="product_cate">选择产品分类：  
      <span v-for="(item, idx) in cateArr" class="cate_item">
        <el-button  v-if="item.status" type="primary" size="small" @click="tabCate(item.category, idx)">{{item.category}}</el-button>
        <el-button  v-else type="info" size="small"  @click="tabCate(item.category, idx)">{{item.category}}</el-button>
      </span>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%;margin-bottom: 30px" >
      <el-table-column
        prop="title"
        label="产品名称">
      </el-table-column>
      <el-table-column
        label="缩略图" width="120">
        <template slot-scope="scope">
          <img :src="scope.row.src" alt="" class="thump_size">
        </template>          
      </el-table-column>      
      <el-table-column
        prop="category"
        label="产品分类">
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
          <el-button @click="editNews(scope.row.id)" type="text" size="small">修改</el-button>
          <el-button @click="deteNews(scope.row.id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

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
let newsId //操作新闻文章id
let type

export default {
  name: 'sys',
  props: {
    contentInfo: Object,
    required: true
  },     
  data() {
    return {
      title: "产品列表",
      dialogVisible: false,
      dialogMsg: '', 
      cateArr: [],     
      tableData: []
    }
  },
  methods: {
    onLinkEdit(){
      this.$router.push({ path: `/dashboard/products/create` })
    },
    
    handleClose(done) {
      done()
    },  

    dialogConfirm(){
      this.dialogVisible = false
      if(newsId && type == "edit")this.$router.push({ path: `/dashboard/products/${newsId}` })
      if(newsId && type == "dete"){
        this.$http.post('/api/dashboard/deteProducts.json', { id: newsId }).then( ({ data }) => {
          if(data.success){
            for(let i = this.tableData.length - 1; i>=0; i--){
              let item = this.tableData[i]
              if(item.id == newsId){
                this.tableData.splice(i, 1)
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

    editNews(id) {
      this.dialogVisible = true
      this.dialogMsg = "确认要修改产品信息吗？"
      newsId = id
      type = "edit"
    },

    deteNews(id) {
      this.dialogVisible = true
      this.dialogMsg = "确认要删除产品模块吗？"
      newsId = id
      type = "dete"      
    },

    getCategoryList(category){
        this.$http.post("/api/dashboard/getCateProductsList.json", { category }).then( ({ data }) => {
          if(data.success){
          let json = data.data
          // 优先取 modified_time 进行排序
          json.sort( (a, b) => {
            let c, d
            c = a.modified_time || a.create_time
            d = b.modified_time || b.create_time
            return d - c
          })
          json.forEach( item => {
            if(item.create_time)item.create_time = dateTime.parseStampToFormat( Number(item.create_time), 'YYYY-MM-DD hh:mm:ss' )
            if(item.modified_time)item.modified_time = dateTime.parseStampToFormat( Number(item.modified_time), 'YYYY-MM-DD hh:mm:ss' )
          })
          this.tableData = json
          }else{
            this.dialogMsg = "抱歉，新闻列表拉取失败，请刷新页面重试～～"
          }
        }).catch(err => console.error(err))  
    },

    tabCate(category, idx) {
      this.cateArr.forEach( item => {
        item.status = false
      })
      this.cateArr[idx].status = true
      this.getCategoryList(category)
    }
    
  },

  created(){
      this.$http.get("/api/dashboard/getProductsCateList.json").then( ({ data }) => {
        if(data.success){
          this.cateArr = data.data.map( (item, idx) => {
            let bool = false
            if(idx == 0)bool=true
            return {
              'category': item.category,
              'status': bool
            }
          })
          this.getCategoryList( this.cateArr[0].category )
        }else{
          this.dialogMsg = "抱歉，产品分类拉取失败，请刷新页面重试～～"
        }
      }).catch(err => console.error(err))
  },

  mounted() {
    
  },

  filters: {

  }
}
</script>

<style lang="stylus" scoped>
  .sys_setting_title
    font-size 18px
    font-weight normal
    margin-bottom 16px

  .news_sendbtn
    float right
  
  .product_cate
    margin-bottom 15px

  .thump_size
    width 100px
    height 100px
    margin-top 5px  

  .cate_item
    margin-right 10px  
</style>
