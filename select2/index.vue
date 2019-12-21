
<template>
	<Select  style="width:200px">
    <OptionGroup label="Hot Cities">
        <Option v-for="item in FEHPVBcityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </OptionGroup>
    <OptionGroup label="Other Cities">
        <Option v-for="item in FEHPVBcityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </OptionGroup>
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
