<template>
  <div>
    <Table :columns="columns5" :data="data5" @on-sort-change="sortChange"></Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns5: [
        {
          title: "Date",
          key: "date",
          sortable: "custom"
        }
      ],
      data5: [
        {
          name: "John Brown",
          age: 18,
          address: "New York",
          date: "2016-10-03"
        }
      ]
    };
  },
  methods: {
    /* 
      远程排序实现,这里发送ajax请求并重写表格数据
      column
      key：排序依据的指标
      order：排序的顺序，值为 asc 或 desc 
    */
    sortChange(column) {
      console.log(column);
    }
  }
};
</script>
<style></style>