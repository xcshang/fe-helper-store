
<template>
	<Table :columns="FEHPVBcolumns" :data="FEHPVBdata1"></Table>
</template>
<script>
export default { 
	
	data(){
		return {
			FEHPVBcolumns: [
                {
                    title: '',
                    key: ''
                }
            ],
            FEHPVBdata1: []
		}
	}
}
</script>
