<template>
  <div>
    <Select filterable remote :remote-method="FEHPVBselectSearch" style="width:200px">
      <Option
        v-for="item in FEHPVBselectData"
        :value="item.value"
        :key="item.value"
      >{{ item.label }}</Option>
    </Select>
  </div>
</template>
<script>

export default {
  data() {
    return {
      FEHPVBselectData: [],
      FEHPVBtimeout: null
    };
  },

  methods: {
    FEHPVBselectSearch(v) {
      if (this.FEHPVBtimeout) {
        clearTimeout(this.FEHPVBtimeout);
      }
      let sendData = {
        keyword: v
      };
      this.FEHPVBtimeout = setTimeout(() => {
        /*
        ajax.get("api", sendData).then(data => {
          this.FEHPVBselectData = data.list;
        });
        */
      }, 300);
    }
  }
};
</script>
<style>
</style>