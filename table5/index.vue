<template>
  <Table border :columns="columns6" :data="data5"></Table>
</template>
<script>
export default {
  data() {
    return {
      columns6: [
        {
          title: "Date",
          key: "date"
        },
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age",
          //过滤条件数组
          filters: [
            {
              label: "Greater than 25",
              value: 1
            },
            {
              label: "Less than 25",
              value: 2
            }
          ],
          filterMultiple: false, //单选，不指定表示多选
          //本地过滤
          filterRemote(value, row) {
            //处理过滤
          }
        },
        {
          title: "Address",
          key: "address",
          //过滤条件数组
          filters: [
            {
              label: "New York",
              value: "New York"
            },
            {
              label: "London",
              value: "London"
            }
          ],
          //使用远程过滤
          filterRemote(value, row) {
            //处理过滤
          }
        }
      ],
      data5: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        }
      ]
    };
  }
};
</script>
