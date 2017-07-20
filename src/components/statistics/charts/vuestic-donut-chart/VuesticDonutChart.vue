<template>
  <div class='donut-chart'>
    <donut-chart :options="options" :data="data"></donut-chart>
  </div>
</template>

<script>
  import DonutChart from './DonutChart'

  export default {
    name: 'vuestic-donut-chart',
    props: ['data', 'options'],
    components: {
      DonutChart
    }
  }
</script>

<style lang='scss'>
  @import '../../../../sass/_variables.scss';

  .donut-chart {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      height: 100%;
      width: 100%;
    }

    canvas {
      width: 100%;
      height: auto;
    }
  }
</style>
