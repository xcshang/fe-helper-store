<template>
  <RadioGroup
    v-model="FEHPVBvalueOfDateType"
    type="button"
    @on-change="FEHPVBhandleChangeTabs"
  >
    <Radio label="A">选项1</Radio>
    <Radio label="B">选项2</Radio>
    <Radio label="C">选项3</Radio>
    <Radio label="D">选项4</Radio>
  </RadioGroup>
</template>

<script>
import '@feHelper/radio3/style.less'
export default {
  name: 'radio3',
  data() {
    return {
      FEHPVBvalueOfDateType: 'A'
    }
  },
  methods: {
    FEHPVBhandleChangeTabs() {
      // TODO:
    }
  }
}
</script>

<style></style>
