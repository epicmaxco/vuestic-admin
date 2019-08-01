<template>
  <div class="line-map fill-height">
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
  watch: {
    mapData: {
      handler () {
        this.drawMap()
      },
      deep: true,
    },
  },
  methods: {
    drawMap () {
      /* global AmCharts */
      let map

      map = new AmCharts.AmMap()

      let dataProvider = {
        mapVar: AmCharts.maps.worldLow,
      }
      map.areasSettings = {
        unlistedAreasColor: '#eee',
        unlistedAreasAlpha: 1,
        outlineColor: '#fff',
        outlineThickness: 2,
      }
      map.imagesSettings = {
        color: this.$themes['info'],
        rollOverColor: this.$themes['info'],
        selectedColor: this.$themes['primary'],
      }
      map.linesSettings = {
        color: this.$themes['info'],
        alpha: 0.4,
      }

      dataProvider.linkToObject = this.mapData.mainCity
      dataProvider.images = this.mapData.cities
      map.dataProvider = dataProvider
      map.backgroundZoomsToTop = true
      map.linesAboveImages = true

      map.write(this.$el)
    },
  },
  mounted () {
    this.drawMap()
  },
}
</script>
