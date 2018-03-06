<template>
    <div class="question_wrapper">
        <div class="question_info">
            <h4 class="question_title">Question   /   常见问题</h4>

            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="创维液晶屏出现哪些现象需要更换屏幕？" name="1">
                <div class="question_desc">1、漏液：流水块状，显示黑色或彩色，多伴随着玻璃破碎；</div>
                <div class="question_desc">2、横竖亮线：直线状白色或黑色线条，有些为彩条状；</div>
                <div class="question_desc">3、黑斑：云朵状黑色不规则斑纹，多为屏幕内进灰尘引起。</div>
              </el-collapse-item>
              <el-collapse-item title="这种电池是什么型号的？" name="2">
                <div class="question_desc">锂离子电池，化学名是Li(NiCoMn)O2</div>
              </el-collapse-item>
              <el-collapse-item title="锂离子电池镍氢电池的区别是什么铅酸蓄电池？" name="3">
                <div class="question_desc">锂离子电池循环寿命长，正常的生命周期是600-800倍而且重量轻，体积小。</div>
              </el-collapse-item>
              <el-collapse-item title="电池有危险吗" name="4">
                <div class="question_desc">首先我们用高品质和品牌电池。第二我们所有的电池BMS在充电，保护电池过充、过放电电流，短，所以它的使用是很安全的。</div>
              </el-collapse-item>
            </el-collapse>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'bat-question',

  data() {
      return {
        activeNames: ['1']
      };
  },

  components: {

  },

  created () {

  },

  mounted () {

  },

  methods: {
      handleChange(val) {
        console.log(val);
      }
  }
}
</script>

<style lang="stylus">
  .question_wrapper
    background #f4f4f4
    width 1136px
    margin 0 auto 50px
    overflow hidden

  .question_info
    position relative
    background #fff  
    padding 40px 30px
    overflow hidden

    .question_title
      font-size 25px
      letter-spacing 3px
      color #333
      font-weight 400
      text-align center
      line-height 1.1
      margin-bottom 16px
    .el-collapse-item__header
      height 50px
      line-height 50px
      font-size 16px
    .question_desc
      font-size 14px
      color #666
      line-height 28px
</style>