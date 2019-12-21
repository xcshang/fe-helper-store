<template>
  <div>
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
      ]
    };
  },

  methods: {
    //获取表格数据
    getTableData(type) {
      let sendData = { ...this.pageData };
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