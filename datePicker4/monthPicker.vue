<!--
 * @Author: your name
 * @Date: 2019-11-19 14:29:08
 * @LastEditTime: 2019-11-19 15:42:18
 * @LastEditors: Please set LastEditors
 * @Description: 月份选择器
 * @FilePath: \billing-web\src\views\searchHeader\components\monthPicker.vue
 * @Des: 1.默认日期由外部提供 2.当前月之后的月份不允许选中 3.月份改变时通知父组件
 -->
<template>
  <div v-if="outerMonth">
      <span 
        v-if="spanTitle"
        class="span-title"
      >{{spanTitle}}:</span>
      <DatePicker
        v-model="singleMonth"
        format="yyyy-MM"
        type="month"
        placeholder="选择年月"
        style="width: 110px"
        :options="optionsEnd"
        @on-change="handleChangeMonth"
        :clearable="false"
      ></DatePicker>
    </div>
</template>

<script>
export default {
  name: "monthPicker",

  props:{
    // 从父组件传入默认时间
    outerMonth: {
      type: String,
      default: undefined,
      required: true
    },
    // 从父组件传入时间选择器之间的标题
    spanTitle: {
      type: String,
      default: undefined,
      required: false
    }
  },

  data(){
    return{
      // 选择的月份
      singleMonth: "",
      // 大于当前月的月份不可选
      optionsEnd: {
        disabledDate (date) {
          return date && date.valueOf() > Date.now() - 86400000;
        }
      },
    };
  },

  methods:{
    // 响应月份改变
    handleChangeMonth(month){
      this.$emit("single-month-change", month)
    },
    // set detault Date
    setDefaultDate(){
      this.singleMonth = this.outerMonth
    }
  },

  mounted(){
    this.setDefaultDate()
  }
}
</script>

<style>
.span-title{
  display: inline-block;
  height: 28px;
  line-height: 28px;
  margin-right: 14px;
}
</style>