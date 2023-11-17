<template>
  <VaCard>
    <VaCardTitle>
      {{ t('dashboard.currentVisitors') }}
    </VaCardTitle>
    <LineMap v-model="mainCity" :home-city="homeCity" :map-data="cities" class="dashboard-map" />
  </VaCard>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import LineMap from '../../../components/maps/LineMap.vue'
import { lineMapData, compareStrings } from '../../../data/maps/lineMapData'

const { t } = useI18n()

const cities = ref(lineMapData.cities)
const mainCity = ref('Vilnius')
const homeCity = ref('Vilnius')

function addAddress(address: { city: string; country: string }) {
  cities.value = cities.value.map((mapItem) =>
    compareStrings(mapItem.title, address.city) && compareStrings(mapItem.country, address.country)
      ? { ...mapItem, color: 'success' }
      : mapItem,
  )
}

defineExpose({ addAddress })
</script>

<style>
.dashboard-map {
  height: 380px;
}
</style>
