<template>
  <div ref="mapRef" class="bubble-map fill-height" />
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  import 'amcharts3'
  import 'amcharts3/amcharts/plugins/responsive/responsive.js'
  import 'amcharts3/amcharts/serial.js'
  import 'amcharts3/amcharts/themes/light'
  import 'ammap3'
  import 'ammap3/ammap/maps/js/worldLow'

  const props = defineProps<{
    mapData: {
      latLng: Record<string, { latitude: number; longitude: number }>
      data: {
        code: string
        name: string
        value: number
        color: string
      }[]
    }
  }>()

  const mapRef = ref()

  onMounted(() => {
    drawMap()
  })

  function drawMap() {
    const minBulletSize = 3
    const maxBulletSize = 70

    let min = Infinity
    let max = -Infinity

    ;((window as any).AmCharts as any).theme = ((window as any).AmCharts as any).themes.light

    // get min and max values
    props.mapData.data.forEach((dataItem) => {
      const value = dataItem.value

      if (value < min) {
        min = value
      }

      if (value > max) {
        max = value
      }
    })

    // build map
    const map = new ((window as any).AmCharts as any).AmMap()
    map.projection = 'winkel3'

    map.addTitle('Population of the World in 2011', 14, 1, 1, false)
    map.addTitle('source: Gapminder', 11, 1, 1, 1, false)

    map.areasSettings = {
      unlistedAreasColor: '#eee',
      unlistedAreasAlpha: 1,
      outlineColor: '#fff',
      outlineThickness: 2,
    }

    map.imagesSettings = {
      balloonText: '<span style="font-size:14px"><b>[[title]]</b>: [[value]]</span>',
      alpha: 0.75,
    }

    const dataProvider = {
      mapVar: ((window as any).AmCharts as any).maps.worldLow,
      images: [] as {
        type: string
        width: number
        height: number
        color: string
        longitude: number
        latitude: number
        title: string
        value: number
      }[],
    }

    // create circle for each country
    // it's better to use circle square to show difference between values, not a radius
    const maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI
    const minSquare = minBulletSize * minBulletSize * 2 * Math.PI

    // create circle for each country
    props.mapData.data.forEach((dataItem) => {
      const value = dataItem.value

      // calculate size of a bubble
      let square = ((value - min) / (max - min)) * (maxSquare - minSquare) + minSquare
      if (square < minSquare) {
        square = minSquare
      }

      const size = Math.sqrt(square / (Math.PI * 2))
      const id = dataItem.code

      dataProvider.images.push({
        type: 'circle',
        width: size,
        height: size,
        color: dataItem.color,
        longitude: props.mapData.latLng[id].longitude,
        latitude: props.mapData.latLng[id].latitude,
        title: dataItem.name,
        value: value,
      })
    })

    map.dataProvider = dataProvider
    map.write(mapRef.value)
  }
</script>
