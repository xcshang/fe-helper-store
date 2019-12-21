
<template>
    <Table :columns="FEHPVBcolumns" :data="FEHPVBdata"></Table>
</Table>
</template>
<script>
export default { 
  
  data(){
    return {
      FEHPVBcolumns: [
            {
                title: '操作',
                key: '',
                render: (h, params) => {
                return <div><a href="javascript:;">编辑</a></div>
                }
            }
        ],
        FEHPVBdata: []
    }
  }
}
</script>
