<template>
  <div>
    <!--search start-->
    <div class="FEsearchForm">
      <div class="FEsearchForm-item">
        <span class="FEsearchForm-title">姓名</span>
        <Input v-model="searchData.name" placeholder="请输入姓名" clearable />
      </div>
      <div class="FEsearchForm-btn">
        <Button type="primary" @click="searchHandle">搜索</Button>
        <Button @click="resetSearchHandle">重置</Button>
      </div>
    </div>
    <!--search end-->

    <!--table start-->
    <Table :columns="columns" :data="tableData"></Table>
    <div class="FEpageBox">
      <Page
        v-if="pageTotal"
        show-sizer
        show-total
        :total="pageTotal"
        :current="pageData.pageNo"
        :pageSize="pageData.pageSize"
        @on-change="pageChange"
        @on-page-size-change="pageSizeChange"
      />
    </div>
    <!--table end-->
  </div>
</template>
<script>
import ajax from "js/ajax";
import tableMixin from "js/tableMixin";
export default {
  mixins: [tableMixin],
  data() {
    return {
      columns: [
        {
          title: "姓名",
          key: "name"
        }
      ],
      tableData: [
        {
          id: 1,
          name: "Tom"
        }
      ],
      //搜索数据
      searchData: {
        name: ""
      }
    };
  },

  methods: {
    //获取表格数据
    getTableData(type) {
      let sendData = { ...this.pageData, ...this.searchValue };
      //console.log(sendData);
      ajax.post("api", sendData).then(data => {
        this.pageTotal = data.pageTotal;
        this.tableData = data;
      });
    }
  },
  mounted() {
    //this.getTableData()
  }
};
</script>