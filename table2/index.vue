
<template>
	<Table height="200" :columns="FEHPVBcolumns" :data="FEHPVBdata"></Table>
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
            FEHPVBdata: []
		}
	}
}
</script>
