
<template>
	<Select style="width:200px" clearable>
        <Option v-for="item in data" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
