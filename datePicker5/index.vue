<template>
  <DatePicker type="date" :options="FEHPVBdateOption" placeholder="Select date" style="width: 200px"></DatePicker>
</template>
<script>
export default {
  data() {
    return {
      FEHPVBdateOption: {
        disabledDate(date) {
          if (date) {
            let v = date.valueOf();
            let now = Date.now();
            const ms = 86400000;
            //之后日期
            if (v > now + 2 * ms) {
              return true;
            }
            //之前日期
            if (v < now - 3 * ms) {
              return true;
            }
          }
        }
      }
    };
  }
};
</script>
