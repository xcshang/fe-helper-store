
<template>
    <Table :columns="FEHPVBcolumns" :data="FEHPVBdata">
    <template slot-scope="{ row, index }" slot="action">
        slot
    </template>
</Table>
</template>
<script>
export default { 
	
	data(){
		return {
			FEHPVBcolumns: [
                    {
                        title: '',
                        key: ''
                    },
                    {
                        title: 'Action',
                        slot: 'action'
                    }
                ],
                FEHPVBdata: []
		}
	}
}
</script>
