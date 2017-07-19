<template>
  <div class='pie-chart'>
    <pie-chart :options="options" :data="data"></pie-chart>
  </div>
</template>

<script>
  import PieChart from './PieChart'

  export default {
    name: 'vuestic-pie-chart',
    props: ['data', 'options'],
    components: {
      PieChart
    }
  }
</script>

<style lang='scss'>
  @import '../../../../sass/_variables.scss';
  @import '../../../../../node_modules/ammap3/ammap/ammap.css';

  .pie-chart {
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
