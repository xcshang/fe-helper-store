<template>
	<div>
		<Input placeholder="输入框"></Input>
		<Select placeholder="选择框">
	        <Option value="beijing">York</Option>
	    </Select>
	    <DatePicker type="date" placeholder="日期"></DatePicker>
	    <DatePicker type="month" placeholder="年"></DatePicker>
	    <DatePicker type="month" placeholder="年月"></DatePicker>
	    <TimePicker type="time" placeholder="时间"></TimePicker>
	    <RadioGroup>
	        <Radio label="male">单选</Radio>
	    </RadioGroup>
	    <CheckboxGroup>
	        <Checkbox label="多选"></Checkbox>
	    </CheckboxGroup>
	    <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="textarea"></Input>
	</div>
</template>
<script>
    export default {
    }
</script>
