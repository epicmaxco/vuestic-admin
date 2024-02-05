<template>
  <VaCard class="flex flex-col">
    <VaCardTitle class="flex items-center justify-between">
      <h1 class="card-title text-secondary font-bold uppercase">Revenue by location</h1>
    </VaCardTitle>
    <VaCardContent class="flex-1 flex overflow-hidden">
      <VaAspectRatio class="w-full md:min-h-72 overflow-hidden relative flex items-center">
        <Map v-if="geoJson" :data="data" class="dashboard-map flex-1 h-full" />
        <VaProgressCircle v-else indeterminate class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </VaAspectRatio>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { VaCard } from 'vuestic-ui'
import type countriesGeoJSON from '../../../../data/geo.json'
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

const geoJson = ref<typeof countriesGeoJSON | null>(null)

onMounted(async () => {
  geoJson.value = (await import('../../../../data/geo.json')).default
})

const data = computed<ChartData<'choropleth', { feature: any; value: number }[], string>>(() => {
  if (!geoJson.value) {
    return {
      labels: [],
      datasets: [],
    }
  }

  return {
    labels: geoJson.value.features.map((d) => d.properties.name),
    datasets: [
      {
        label: 'Countries',
        data: geoJson.value.features.map((d) => ({ feature: d, value: getRevenue(d.properties.name) })),
      },
    ],
  }
})
</script>

<style lang="scss" scoped>
.va-card--flex {
  display: flex;
  flex-direction: column;
}
</style>
