<template>
  <div class="sys_setting">
    <h2 class="sys_setting_title g_cf">{{title}} <el-button class="news_sendbtn" type="primary" @click="onLinkEdit">发布新闻</el-button></h2>
    <el-table
      :data="tableData"
      border
      style="width: 100%;margin-bottom: 30px" >
      <el-table-column
        prop="title"
        label="标题">
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
      title: "新闻列表",
      dialogVisible: false,
      dialogMsg: '',      
      tableData: []
    }
  },
  methods: {
    onLinkEdit(){
      this.$router.push({ path: `/dashboard/edit/create` })
    },
    
    handleClose(done) {
      done()
    },  

    dialogConfirm(){
      this.dialogVisible = false
      if(newsId && type == "edit")this.$router.push({ path: `/dashboard/edit/${newsId}` })
      if(newsId && type == "dete"){
        this.$http.post('/api/dashboard/deteNews.json', { id: newsId }).then( ({ data }) => {
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
      this.dialogMsg = "确认要修改新闻文章吗？"
      newsId = id
      type = "edit"
    },

    deteNews(id) {
      this.dialogVisible = true
      this.dialogMsg = "确认要删除新闻文章吗？"
      newsId = id
      type = "dete"      
    }
    
  },

  created(){
      this.$http.get('/api/dashboard/getNewsList.json').then( ({ data }) => {
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
</style>
