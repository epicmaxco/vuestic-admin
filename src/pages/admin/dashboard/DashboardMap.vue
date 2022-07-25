<template>
  <va-card>
    <va-card-title>
      {{ t('dashboard.currentVisitors') }}
    </va-card-title>
    <line-map v-model="mainCity" :map-data="cities" :home-city="homeCity" class="dashboard-map" />
  </va-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  import LineMap from '../../../components/maps/LineMap.vue'
  import { linaMapData } from '../../../data/maps/lineMapData'

  const { t } = useI18n()

  const cities = ref(linaMapData.cities)
  const mainCity = ref('Vilnius')
  const homeCity = ref('Vilnius')

  function addAddress(address: { city: { text: string }; country: string }) {
    address
    // lineMapData.value = {
    //   ...lineMapData.value,
    //   cities: lineMapData.value.cities.map((city) => ({
    //     ...city,
    //     // color: city.title === address.city ? theme.value.success : city.color,
    //   })),
    // }
  }

  defineExpose({ addAddress })
</script>

<style>
  .dashboard-map {
    height: 380px;
  }
</style>
