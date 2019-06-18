<template>
  <div class="dashboard">
    <dashboard-charts />
    <dashboard-info-block />
    <div class="va-row">
      <div class="flex xs12">
        <dashboard-table />
      </div>
    </div>
    <div class="va-row row-equal">
      <div class="flex xs12 lg6">
        <dashboard-tabs />
      </div>
      <div class="flex xs12 lg6">
        <dashboard-map />
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
    launchEpicmaxToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link',
        },
      })
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
