<template>
  <VaCard class="flex flex-col">
    <VaCardTitle class="flex items-center justify-between">
      <h1 class="card-title text-secondary font-bold uppercase">Revenue by location</h1>
    </VaCardTitle>
    <VaCardContent class="flex-1 flex">
      <LMap
        class="dashboard-map flex-1 min-h-72"
        :zoom="zoom"
        :center="center"
        style="height: 100%"
        :use-global-leaflet="false"
      >
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LGeoJson :geojson="geoJson" :options-style="styleCountry" />
      </LMap>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VaCard } from 'vuestic-ui'
import { LMap, LTileLayer, LGeoJson } from '@vue-leaflet/vue-leaflet'
import type { PointExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import countriesGeoJSON from '../../../../data/geo.json'

const styleCountry = () => {
  const revenue = Math.floor(Math.random() * 1000)
  const color = getColor(revenue)
  return {
    fillColor: color,
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  }
}

function getColor(revenue: number) {
  return revenue >= 1000
    ? '#084594'
    : revenue > 700
      ? '#2171b5'
      : revenue > 500
        ? '#4292c6'
        : revenue > 300
          ? '#6baed6'
          : revenue > 200
            ? '#9ecae1'
            : revenue > 100
              ? '#c6dbef'
              : revenue > 50
                ? '#deebf7'
                : '#f7fbff'
}

const center = ref<PointExpression>([20, 0])
const zoom = ref(2)
const geoJson = countriesGeoJSON as GeoJSON.FeatureCollection
</script>

<style lang="scss" scoped>
.va-card--flex {
  display: flex;
  flex-direction: column;
}

.dashboard-map {
  &.leaflet-container {
    background: transparent;
  }

  [fill='#aad3df'] {
    outline: 1px solid red;
  }
}
</style>
