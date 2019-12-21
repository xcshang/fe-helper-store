<template>
  <div>
    {{selectedData}}
    <Table
      :columns="columns"
      :data="tableData"
      @on-select="selectID"
      @on-select-cancel="selectCancel"
      @on-select-all="selectAll"
      @on-select-all-cancel="selectAllCancel"
    ></Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "id",
          key: "id"
        }
      ],
      tableData: [],
      rowId: "id",
      //要发送过后端的选择数据，
      selectedData: {
        isAll: false, //全选
        in: [], //数组内为已选择
        out: [] //数组内为排除选择
      }
    };
  },

  methods: {
    getTableData() {
      this.tableData = [{ id: 1 }, { id: 2 }, { id: 3 }];
      this.initSelect();
    },

    //每次重新获取表格数据的初始化选择
    initSelect() {
      this.tableData.forEach(item => {
        //全选
        if (this.selectedData.isAll) {
          item._checked = true;
        } else {
          item._checked =
            this.selectedData.in.indexOf(item[this.rowId]) !== -1
              ? true
              : false;
        }
      });
    },

    //更改已选择数据
    changeSelected(t, id) {
      //全选
      if (t === "all") {
        this.selectedData.isAll = true;
      }
      //取消全选
      if (t === "allCancel") {
        this.selectedData.isAll = false;
      }
      if (t === "all" || t === "allCancel") {
        this.selectedData.in = [];
        this.selectedData.out = [];
      }
      //选择一个
      if (t === "add") {
        if (this.selectedData.isAll) {
          this.delSeleced("out", id);
        } else {
          this.selectedData.in.push(id);
        }
      }
      //取消一个
      if (t === "cancel") {
        if (this.selectedData.isAll) {
          this.selectedData.out.push(id);
        } else {
          this.delSeleced("in", id);
        }
      }
    },

    //删除一个选择
    delSeleced(t, id) {
      for (var i = 0; i < this.selectedData[t].length; i++) {
        let tId = this.selectedData[t][i];
        if (id === tId) {
          this.selectedData[t].splice(i, 1);
          break;
        }
      }
    },

    //选择一行数据
    selectID(selection, row) {
      let id = row[this.rowId];
      this.changeSelected("add", id);
    },

    //取消一个选择
    selectCancel(selection, row) {
      let id = row[this.rowId];
      this.changeSelected("cancel", id);
    },

    //选择所有
    selectAll() {
      this.changeSelected("all");
    },

    //取消所有选择
    selectAllCancel() {
      this.changeSelected("allCancel");
    }
  },

  mounted() {
    this.getTableData();
  }
};
</script>
<style></style>