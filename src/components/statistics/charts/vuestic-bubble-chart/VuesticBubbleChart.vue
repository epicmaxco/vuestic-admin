<template>
  <div class='donut-chart'>
    <bubble-chart :options="options" :data="data"></bubble-chart>
  </div>
</template>

<script>
  import BubbleChart from './BubbleChart'

  export default {
    name: 'vuestic-donut-chart',
    props: ['data', 'options'],
    components: {
      BubbleChart
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
