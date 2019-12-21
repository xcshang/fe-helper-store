<template>
  <div>
    <div id="chart-area" style="width:500px;height:300px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  methods: {
    createChart(data) {
      let xAxisData = [];
      let seriesData = [];
      data.forEach(item => {
        xAxisData.push(item.name);
        seriesData.push(item.value);
      });
      let option = {
        grid: {
          left: "1%",
          right: "0",
          bottom: "1%",
          containLabel: true
        },
        title: {
          text: "顶部显示数据"
        },
        xAxis: {
          type: "category",
          data: xAxisData
        },
        yAxis: {
          type: "value"
        },
        color: "#5a7ef8",
        series: [
          {
            data: seriesData,
            barMinHeight: 1,
            barMaxWidth: 30,
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            }
          }
        ]
      };
      let myChart = echarts.init(document.getElementById(`chart-area`));
      myChart.setOption(option);
    }
  },

  mounted() {
    let chartData = [{ name: "北京", value: 100 }, { name: "杭州", value: 50 }];
    this.createChart(chartData);
  }
};
</script>
<style></style>