<!--
 * @Author: your name
 * @Date: 2019-11-08 19:01:51
 * @LastEditTime: 2019-11-22 17:58:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fe-helper\fe-helper-store\infoPage\index.vue
 -->
<template>
  <info-page
    :pages="FEHPVBinfoPage.pages"
    :total="FEHPVBinfoPage.total"
    @changePage="FEHPVBhandleChangePage"
    ref="FEHPVBmyInfoPage"
  />
</template>

<script>
import p_infoPage from '@/feHelper/page2/infoPage.vue'
import '@/feHelper/page2/style.css'
import FEHPVButil from '@/feHelper/page2/util.js'
export default {
  components:{
    'info-page':p_infoPage
  },
  data () {
    return {
      // pages总页数， total总条目数（required）。
      FEHPVBinfoPage: {
        pages: 1,
        total: 1,
      }
    }
  },

  methods: {
    // 处理换页的函数
    FEHPVBhandleChangePage: FEHPVButil.throttle(function (pageParams) {
      // pageParams.pageNum 当前的页数 pageParams.pageSize 当前页面展示多少条数据~
      // TODO: 当页码改变的时候write your codes here~ 
    }, 300),

    // 重置页码：NOTE:（进行了一次页码改变，所以会emit changePage事件，注意不要多次请求刷新~~）
    FEHPVBresetPages () {
      this.$refs['FEHPVBmyInfoPage'].resetCurrent() 
    },
  }
}
</script>
