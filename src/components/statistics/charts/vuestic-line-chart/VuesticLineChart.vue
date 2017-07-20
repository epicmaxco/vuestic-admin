<template>
  <div class='donut-chart'>
    <line-chart :options="options" :data="data"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart'

  export default {
    name: 'vuestic-line-chart',
    props: ['data', 'options'],
    components: {
      LineChart
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
