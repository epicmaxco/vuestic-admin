<template>
  <div class="dashboard">
    <dashboard-charts />

    <dashboard-info-block />

    <div class="grid grid-cols-12 gap-6">
      <dashboard-tabs class="col-span-12 lg:col-span-6" @submit="addAddressToMap" />

      <DashboardMap ref="dashboardMap" class="col-span-12 lg:col-span-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import DashboardCharts from './DashboardCharts.vue'
  import DashboardInfoBlock from './DashboardInfoBlock.vue'
  import DashboardTabs from './DashboardTabs.vue'
  import DashboardMap from './DashboardMap.vue'

  const dashboardMap = ref()

  function addAddressToMap({ city, country }: { city: { text: string }; country: string }) {
    dashboardMap.value.addAddress({ city: city.text, country })
  }
</script>

<style lang="scss">
  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
      &__title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
