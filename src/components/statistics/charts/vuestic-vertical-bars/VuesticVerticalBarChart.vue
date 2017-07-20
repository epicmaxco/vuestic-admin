<template>
  <div class='donut-chart'>
    <vertical-bar-chart :options="options" :data="data"></vertical-bar-chart>
  </div>
</template>

<script>
  import VerticalBarChart from './VerticalBarChart'

  export default {
    name: 'vuestic-vertical-bar-chart',
    props: ['data', 'options'],
    components: {
      VerticalBarChart
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
