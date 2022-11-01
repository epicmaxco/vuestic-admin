<template>
  <div ref="mapRef" class="bubble-map" />
</template>

<script setup lang="ts">
  import { computed, onMounted, onUpdated, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
  import * as am5 from '@amcharts/amcharts5'
  import * as am5map from '@amcharts/amcharts5/map'
  import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
  import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
  import { useColors } from 'vuestic-ui'

  import { PointGeoCoord, CountryItem, getValueBounds, getItemRadius } from '../../../../data/maps/bubbleMapData'

  const bulletSizes = { min: 3, max: 30 }

  const titleHTML = `
  <div style="text-align: center">
    <h2 style="font-size: 16px; margin-bottom: 8px">Population of the World in 2011</h2>
    <p style="font-size: 12px">source: Gapminder</p>
  <div>`

  const props = defineProps<{
    mapData: {
      latLng: Record<string, PointGeoCoord>
      data: CountryItem[]
    }
  }>()

  const { getColor, colors } = useColors()

  const mapRef = ref()
  const mapRoot = shallowRef()
  const mapChart = shallowRef()
  const mapPolygonSeries = shallowRef()
  const mapPointSeries = shallowRef()
  const mapZoomControl = shallowRef()

  const pointData = computed(() =>
    props.mapData.data.map((country) => ({
      ...country,
      ...props.mapData.latLng[country.code],
    })),
  )

  const bulletBounds = computed(() => ({
    min: (Math.PI * bulletSizes.min ** 2) / 4,
    max: (Math.PI * bulletSizes.max ** 2) / 4,
  }))

  const valueBounds = computed(() => getValueBounds(pointData.value))

  const createMap = () => {
    const root = am5.Root.new(mapRef.value)

    root.setThemes([am5themes_Animated.new(root)])

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        minZoomLevel: 1,
        maxZoomLevel: 10,
      }),
    )

    const zoomControl = chart.set('zoomControl', am5map.ZoomControl.new(root, {}))

    // polygon series
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ['AQ'],
      }),
    )

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(getColor(colors.secondary)),
      fillOpacity: 0.2,
      strokeWidth: 0.5,
    })

    // title
    chart.children.push(
      am5.Label.new(root, {
        html: titleHTML,
        y: 15,
        x: am5.percent(50),
        centerX: am5.percent(50),
      }),
    )

    // point series
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: 'latitude',
        longitudeField: 'longitude',
      }),
    )

    pointSeries.bullets.push((root, series, dataItem) => {
      const itemData = dataItem.dataContext as CountryItem

      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: getItemRadius(itemData, valueBounds.value, bulletBounds.value),
          fill: am5.color(itemData.color),
          opacity: 0.6,
          tooltipText: '{name}: {value}',
        }),
      })
    })

    // set map data
    pointSeries.data.setAll(pointData.value)

    // assign objects to refs
    mapRoot.value = root
    mapChart.value = chart
    mapZoomControl.value = zoomControl
    mapPointSeries.value = pointSeries
    mapPolygonSeries.value = polygonSeries
  }

  const setPointSeriesData = () => {
    mapPointSeries.value.data.setAll(pointData.value)
  }

  const updateChartDataOnChangeTheme = () => {
    if (mapRoot.value) {
      mapPolygonSeries.value.mapPolygons.template.setAll({
        fill: am5.color(getColor(colors.secondary)),
      })
    }
  }

  const updateChartDataOnUpdateProps = () => {
    if (mapRoot.value) {
      setPointSeriesData()
    }
  }

  const disposeMap = () => {
    if (mapRoot.value) {
      mapRoot.value.dispose()
    }
  }

  onMounted(createMap)
  onUpdated(updateChartDataOnUpdateProps)
  watch(colors, updateChartDataOnChangeTheme)
  onBeforeUnmount(disposeMap)
</script>

<style lang="scss" scoped>
  .bubble-map {
    border-radius: inherit;

    :deep(div),
    :deep(canvas) {
      border-radius: inherit;
    }
  }
</style>
