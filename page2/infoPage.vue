<!--
 * @Description: float在右边的有提示信息的分页器
 * @Author: your name
 * @Date: 2019-10-18 15:42:07
 * @LastEditTime: 2019-11-22 17:59:51
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div
      class="page-box"
    >
      <Page
        :total="totalItems"
        :current="pageInfo.pageNum"
        :page-size="pageInfo.pageSize"
        @on-change="changePageNum"      
        @on-page-size-change="changePageSize"
        show-sizer
        show-elevator
        class="PageClass"
      />
      <span class="PageSpanClass">共{{pages}}页，{{total}}条数据</span>
  </div>
</template>

<script>
import '@/feHelper/page2/style.css'
export default {
  name: 'infoPage',
  props:{
    pages:{ // 总页数
      type: Number,
      default: 0,
      required: false
    },
    total:{ // 总数据数
      type: Number,
      default: 0,
      required: true
    }
    // TODO:增加自定义pageSize！！！
  },
  computed: {
    totalItems () {
      return this.total
    }
  },
  data () {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 10
      } 
    }
  },
  methods:{
    // 页码改变
    changePageNum( el ){
      this.pageInfo.pageNum = el
      let pageParams = this.pageInfo
      this.$emit('changePage', pageParams)
    },
    // 页面大小改变
    changePageSize( el ){
      this.pageInfo.pageSize = el
      let pageParams = this.pageInfo
      this.$emit('changePage', pageParams)
    },
    // 页码重置
    resetCurrent(){
      this.pageInfo.pageNum = 1
      let pageParams = this.pageInfo
      this.$emit('changePage', pageParams)
    }
  }
}
</script>

