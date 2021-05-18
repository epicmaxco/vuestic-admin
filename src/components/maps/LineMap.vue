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
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'line-map',

  props: ['mapData'],
  watch: {
    mapData () {
      this.addDataToMap()
      this.map.validateData()
    },
  },
  data () {
    return {
      dataProvider: {
        mapVar: AmCharts.maps.worldLow,
      },
    }
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    },
    map () {
      return new AmCharts.AmMap()
    },
  },
  methods: {
    drawMap () {
      /* global AmCharts */
      this.map.areasSettings = {
        unlistedAreasColor: '#eee',
        unlistedAreasAlpha: 1,
        outlineColor: '#fff',
        outlineThickness: 2,
      }
      this.map.imagesSettings = {
        color: this.theme.info,
        rollOverColor: this.theme.info,
        selectedColor: this.theme.primary,
      }
      this.map.linesSettings = {
        color: this.theme.info,
        alpha: 0.4,
      }
      this.addDataToMap()
      this.map.dataProvider = this.dataProvider
      this.map.backgroundZoomsToTop = true
      this.map.linesAboveImages = true

      this.map.write(this.$el)
    },
    addDataToMap () {
      this.dataProvider.linkToObject = this.mapData.mainCity
      this.dataProvider.images = this.mapData.cities
    },
  },
  mounted () {
    this.drawMap()
  },
}
</script>
