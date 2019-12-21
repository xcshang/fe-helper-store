<!--
 * @Author: your name
 * @Date: 2019-11-19 14:30:26
 * @LastEditTime: 2019-11-19 15:42:26
 * @LastEditors: Please set LastEditors
 * @Description: 测试组件的页面，测试完从router.js注释~
 </script>
 * @FilePath: \billing-web\src\views\test.vue
 -->
<template>
  <div>
    <div v-if="FEHPVBdefaultSingleMonth">
      <month-picker
      :outerMonth="FEHPVBdefaultSingleMonth"
      :spanTitle="'选择年月'"
      @single-month-change="FEHPVBhandleSingleChange"></month-picker>
    </div>   
  </div>
</template>

<script>
import FEHPVBmonthPicker from "@/feHelper/datePicker4/monthPicker.vue"
export default {
  name: "test",

  components:{
    "month-picker": FEHPVBmonthPicker
  },

  data(){
    return{
      FEHPVBdefaultSingleMonth: undefined,
    }
  },

  methods:{
    FEHPVBhandleSingleChange(){
      // TODO: what you want~
    },
    // set default single month WHEN mount
    FEHPVBsetDefaultSingleMonth(){
      // TODO: what you want here
      this.FEHPVBdefaultSingleMonth = "2019-10"
    }, 
  },

  mounted(){
    this.FEHPVBsetDefaultSingleMonth()
  }
}
</script>

<style>
</style>