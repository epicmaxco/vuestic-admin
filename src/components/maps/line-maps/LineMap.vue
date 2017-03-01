<template>
  <div class="line-map">
    Line Map
  </div>
</template>

<script>
  import 'amcharts3'
  import 'amcharts3/amcharts/plugins/responsive/responsive.js'
  import 'amcharts3/amcharts/serial.js'
  import 'amcharts3/amcharts/themes/light'

  import 'ammap3'
  import 'ammap3/ammap/maps/js/worldLow'

  export default {
    name: 'line-map',

    props: ['mapData'],

    methods: {
      drawMap () {}
    },

    mounted () {
      this.drawMap()
    }
  }
</script>

<style lang='scss'>
  @import '../../../sass/_variables.scss';
  @import '../../../../node_modules/ammap3/ammap/ammap.css';

  .line-map {
    height: $widget-content-viewport-height;
  }
</style>
