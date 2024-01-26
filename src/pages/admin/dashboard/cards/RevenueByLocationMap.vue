<template>
  <VaCard class="flex flex-col">
    <VaCardTitle class="flex items-center justify-between">
      <h1 class="card-title text-secondary font-bold uppercase">Revenue by location</h1>
    </VaCardTitle>
    <VaCardContent class="flex-1 flex overflow-hidden">
      <VaAspectRatio class="w-full md:min-h-72 overflow-hidden">
        <Map :chart-data="data" class="dashboard-map flex-1" />
      </VaAspectRatio>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { VaCard } from 'vuestic-ui'
import countriesGeoJSON from '../../../../data/geo.json'
import Map from '../../../../components/va-charts/chart-types/Map.vue'
import type { ChartData } from 'chart.js'

const getRevenue = (countryName: string) => {
  if (['United States of America', 'Canada', 'United Kingdom', 'China', 'Japan'].includes(countryName)) {
    return 10
  }

  if (['Antarctica', 'Greenland'].includes(countryName)) {
    return 0
  }

  return Math.random() * 10
}

const data: ChartData<'choropleth', { feature: any; value: number }[], string> = {
  labels: countriesGeoJSON.features.map((d) => d.properties.name),
  datasets: [
    {
      label: 'Countries',
      data: countriesGeoJSON.features.map((d) => ({ feature: d, value: getRevenue(d.properties.name) })),
    },
  ],
}
</script>

<style lang="scss" scoped>
.va-card--flex {
  display: flex;
  flex-direction: column;
}
</style>
