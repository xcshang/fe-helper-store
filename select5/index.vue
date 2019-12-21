
<template>
	<Select filterable style="width:200px">
        <Option v-for="item in FEHPVBcityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
export default { 
	data(){
		return {
			FEHPVBcityList: [
                {
                    value: 'NewYork',
                    label: 'NewYork'
                },
                {
                    value: 'London',
                    label: 'London'
                }
            ]
		}
	}
}
</script>
