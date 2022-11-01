<template>
  <div ref="mapRef" class="line-map" />
</template>

<script setup lang="ts">
  import { ref, toRef, computed, onMounted, onBeforeUnmount, watch, shallowRef, onUpdated } from 'vue'
  import * as am5 from '@amcharts/amcharts5'
  import * as am5map from '@amcharts/amcharts5/map'
  import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
  import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
  import { useColors } from 'vuestic-ui'

  import {
    planeSVG,
    useMapData,
    CityItem,
    getGeoBounds,
    generateLineSeriesData,
    compareStrings,
  } from '../../data/maps/lineMapData'

  const generateLabelText = (city?: string) => (city ? `Flights from ${city}` : '')

  const generateButtonText = (city: string) => `Show flights from ${city}`

  const props = withDefaults(
    defineProps<{
      mapData: CityItem[]
      homeCity: string
      modelValue: string
    }>(),
    {
      homeCity: 'New York',
      modelValue: 'New York',
    },
  )

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>()

  const { colors } = useColors()
  const mapRef = ref()
  const mapRoot = shallowRef()
  const mapChart = shallowRef()
  const mapPolygonSeries = shallowRef()
  const mapPointSeries = shallowRef()
  const mapLineSeries = shallowRef()
  const mapZoomControl = shallowRef()
  const mapLabelText = shallowRef()
  const mapLabelSvg = shallowRef()
  const mapHomeCityButton = shallowRef()

  const mainCity = computed({
    get() {
      return props.modelValue
    },
    set(value) {
      emit('update:modelValue', value)
    },
  })

  const mapPointSeriesData = useMapData(toRef(props, 'mapData'))

  const mapLineSeriesData = computed(() => {
    const item = getItemByMainCityTitle()
    return generateLineSeriesData(item)
  })

  const getItemByMainCityTitle = () =>
    mapPointSeriesData.value.find(({ title }) => compareStrings(title, mainCity.value))

  const zoomToGeoBounds = () => {
    const item = getItemByMainCityTitle()
    const geoBounds = getGeoBounds(item)

    if (geoBounds) {
      mapChart.value.zoomToGeoBounds(geoBounds)
    }
  }

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
      fill: am5.color(colors.secondary),
      fillOpacity: 0.4,
      strokeWidth: 0.5,
    })

    polygonSeries.events.on('datavalidated', zoomToGeoBounds)

    // point series
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: 'latitude',
        longitudeField: 'longitude',
      }),
    )

    // point series bullets
    const bulletTemplate = am5.Template.new({}) as am5.Template<am5.Graphics>
    bulletTemplate.events.on('click', (ev) => {
      mainCity.value = (ev as any).target._dataItem.dataContext.title
    })

    pointSeries.bullets.push((root, series, dataItem) => {
      const itemData = dataItem.dataContext as CityItem
      const isMainCity = compareStrings(itemData.title, mainCity.value)

      return am5.Bullet.new(root, {
        sprite: am5.Graphics.new(
          root,
          {
            svgPath: itemData.svgPath,
            x: am5.percent(50),
            y: am5.percent(50),
            centerX: am5.percent(50),
            centerY: am5.percent(50),
            fill: am5.color(isMainCity ? colors.primary : itemData.color),
            scale: isMainCity ? 1.5 : 1,
            tooltipText: '{title}',
          },
          bulletTemplate,
        ),
      })
    })

    // line series
    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}))

    lineSeries.mapLines.template.setAll({
      stroke: am5.color(colors.primary),
      strokeWidth: 2,
      strokeOpacity: 0.5,
    })

    // set map data
    pointSeries.data.setAll(mapPointSeriesData.value)
    lineSeries.data.setAll(mapLineSeriesData.value as unknown[])

    // label 'Flights from ...'
    const labelContainer = chart.children.push(
      am5.Container.new(root, {
        x: 15,
        y: 15,
        layout: root.horizontalLayout,
      }),
    )

    const labelSvg = labelContainer.children.push(
      am5.Graphics.new(root, {
        svgPath: planeSVG,
        fill: am5.color(colors.info),
      }),
    )

    const labelText = labelContainer.children.push(
      am5.Label.new(root, {
        text: generateLabelText(getItemByMainCityTitle()?.title),
        fill: am5.color(colors.info),
        fontSize: 22,
        lineHeight: am5.p100,
      }),
    )

    // button 'Show flights from homeCity'
    const homeCityButton = chart.children.push(
      am5.Button.new(root, {
        x: 15,
        y: 45,
        label: am5.Label.new(root, {
          text: generateButtonText(props.homeCity),
          paddingTop: 0,
          marginRight: 0,
          paddingBottom: 0,
          marginLeft: 0,
        }),
        visible: false,
      }),
    )

    homeCityButton.events.on('click', () => {
      mainCity.value = props.homeCity
      homeCityButton.hide()
    })

    // assign objects to refs
    mapRoot.value = root
    mapChart.value = chart
    mapZoomControl.value = zoomControl
    mapPointSeries.value = pointSeries
    mapLineSeries.value = lineSeries
    mapPolygonSeries.value = polygonSeries
    mapLabelSvg.value = labelSvg
    mapLabelText.value = labelText
    mapHomeCityButton.value = homeCityButton
  }

  const setPointSeriesData = () => {
    mapPointSeries.value.data.setAll(mapPointSeriesData.value)
  }

  const setLineSeriesData = () => {
    mapLineSeries.value.data.setAll(mapLineSeriesData.value ?? [])
  }

  const updateInteractiveElements = () => {
    mapLabelText.value.set('text', generateLabelText(getItemByMainCityTitle()?.title))
    mapHomeCityButton.value[compareStrings(props.homeCity, mainCity.value) ? 'hide' : 'show']?.()
  }

  const updateChartDataOnChangeTheme = () => {
    if (mapRoot.value) {
      mapPolygonSeries.value.mapPolygons.template.setAll({
        fill: am5.color(colors.secondary),
      })

      mapLineSeries.value.mapLines.template.setAll({
        stroke: am5.color(colors.primary),
      })

      mapLabelText.value.set('fill', am5.color(colors.info))
      mapLabelSvg.value.set('fill', am5.color(colors.info))

      setPointSeriesData()
    }
  }

  const updateChartDataOnUpdateProps = () => {
    if (mapRoot.value) {
      setPointSeriesData()
      setLineSeriesData()
      updateInteractiveElements()
      zoomToGeoBounds()
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
  .line-map {
    border-radius: inherit;

    :deep(div),
    :deep(canvas) {
      border-radius: inherit;
    }
  }
</style>
