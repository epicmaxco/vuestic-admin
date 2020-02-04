<template>
  <div class="dashboard">
    <dashboard-charts />
    <dashboard-info-block />
    <div class="row">
      <div class="flex xs12">
        <dashboard-table />
      </div>
    </div>
    <div class="row row-equal">
      <div class="flex xs12 lg6">
        <dashboard-tabs @submit="addAddressToMap"/>
      </div>
      <div class="flex xs12 lg6">
        <dashboard-map ref="dashboardMap"/>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCharts from './DashboardCharts'
import DashboardInfoBlock from './DashboardInfoBlock'
import DashboardTable from './DashboardTable'
import DashboardTabs from './DashboardTabs'
import DashboardMap from './DashboardMap'

export default {
  name: 'dashboard',
  components: {
    DashboardCharts,
    DashboardInfoBlock,
    DashboardTable,
    DashboardTabs,
    DashboardMap,
  },
  methods: {
    addAddressToMap ({ city, country }) {
      this.$refs.dashboardMap.addAddress({ city: city.text, country })
    },
  },
}
</script>

<style lang="scss">
  .row-equal .flex {
    .va-card {
      height: 100%;
    }
  }

  .dashboard {
    .va-card {
      margin-bottom: 0 !important;
    }
  }
</style>
