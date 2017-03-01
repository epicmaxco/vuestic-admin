<template>
  <div class='line-map'>
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
      drawMap () {
        /* global AmCharts */
        let map

        map = new AmCharts.AmMap()

        let dataProvider = {
          mapVar: AmCharts.maps.worldLow
        }
        map.areasSettings = {
          unlistedAreasColor: '#FFCC00'
        }
        map.imagesSettings = {
          color: '#CC0000',
          rollOverColor: '#CC0000',
          selectedColor: '#000000'
        }
        map.linesSettings = {
          color: '#CC0000',
          alpha: 0.4
        }

        dataProvider.linkToObject = this.mapData.mainCity
        dataProvider.images = this.mapData.cities
        map.dataProvider = dataProvider
        map.backgroundZoomsToTop = true
        map.linesAboveImages = true

        map.write(this.$el)
      }
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
