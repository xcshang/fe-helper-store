<template>
  <div>
    <!--tool start-->
    <div class="FEtoolBtnBar">
      <div class="FEtoolBtn" style="top:15px">
        <Button type="primary" @click="editRow">新增</Button>
        <Button type="primary" @click="exportBtn">导出</Button>
      </div>
    </div>
    <!--tool end-->

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
    <Table
      :columns="columns"
      :data="tableData"
      @on-select="selectID"
      @on-select-cancel="selectCancel"
      @on-select-all="selectAll"
      @on-select-all-cancel="selectAllCancel"
    ></Table>
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

    <!--del modal start-->
    <Modal v-model="showDelModal" title="删除" footer-hide :closable="false">
      <div>
        确认删除吗？
        <div slot="footer" class="FEmodalBtnBox">
          <div class="FEmodalBtn">
            <Button @click="delOK" type="error">确认</Button>
            <Button @click="showDelModal=false">取消</Button>
          </div>
        </div>
      </div>
    </Modal>
    <!--del modal end-->

    <!--edit modal start-->
    <Modal v-model="showEditModal" title="新增/编辑" footer-hide :closable="false">
      <div>
        <!--form start-->
        <Form ref="formRef" :model="cRow" :rules="ruleValidate" :label-width="100">
          <FormItem label="姓名" prop="name">
            <Input v-model="cRow.name" placeholder="请输入" clearable />
          </FormItem>
          <FormItem></FormItem>
        </Form>
        <!--form end-->
        <div slot="footer" class="FEmodalBtnBox">
          <div class="FEmodalBtn">
            <Button type="primary" @click="editOK">确认</Button>
            <Button @click="showEditModal=false">取消</Button>
          </div>
        </div>
      </div>
    </Modal>
    <!--edit modal end-->

    <!--export modal start-->
    <Modal v-model="showExportModal" title="导出" footer-hide :closable="false">
      <div>
        确认导出吗？
        <div slot="footer" class="FEmodalBtnBox">
          <div class="FEmodalBtn">
            <Button @click="exportOK" type="primary">确认</Button>
            <Button @click="showExportModal=false">取消</Button>
          </div>
        </div>
      </div>
    </Modal>
    <!--export modal end-->
  </div>
</template>
<script>
import ajax from "js/ajax";
import tableMixin from "js/tableMixin";
export default {
  mixins: [tableMixin],
  data() {
    return {
      showDelModal: false,
      showEditModal: false,
      showExportModal: false,
      cRow: {},
      columns: [
        {
          type: "selection"
        },
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "操作",
          render: (h, params) => {
            return (
              <div>
                <a
                  href="javascript:;"
                  onClick={this.delRow.bind(null, params.row)}
                >
                  删除
                </a>
                &nbsp;|&nbsp;
                <a
                  href="javascript:;"
                  onClick={this.editRow.bind(null, params.row)}
                >
                  编辑
                </a>
              </div>
            );
          }
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
      },
      //表单验证
      ruleValidate: {
        name: [
          {
            required: true,
            message: "姓名不能为空"
          }
        ]
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
    },

    //删除一行数据
    delRow(row) {
      row = row || {};
      this.cRow = row;
      this.showDelModal = true;
    },

    //确认删除一行数据
    delOK() {
      let sendData = {
        id: this.cRow.id
      };
      ajax.post("api", sendData).then(data => {
        this.showDelModal = false;
        this.$Message.success("删除成功");
        this.getTableData();
      });
    },

    //编辑一行数据
    editRow(row) {
      this.$refs.formRef.resetFields();
      this.cRow = Object.assign({}, row);
      this.showEditModal = true;
    },

    //确认编辑一行数据
    editOK() {
      this.$refs.formRef.validate(valid => {
        if (valid) {
          //验证成功处理
          let sendData = { ...this.cRow };
          ajax.post("api", sendData).then(data => {
            this.showEditModal = false;
            this.$Message.success("操作成功");
            this.getTableData();
          });
        } else {
          this.$Message.error("表单数据有误，请核对");
        }
      });
    },

    //导出
    exportBtn() {
      if (!this.selectedData.isAll) {
        if (!this.selectedData.out.length && !this.selectedData.in.length) {
          this.$Message.error("请选择要导出的数据");
          return;
        }
      }
      this.showExportModal = true;
    },

    //确认导出
    exportOK() {
      let sendData = { ...this.selectedData };
      ajax.post("api", sendData).then(data => {
        this.showExportModal = false;
        this.$Message.success("导出成功");
      });
    }
  },
  mounted() {
    //this.getTableData()
  }
};
</script>