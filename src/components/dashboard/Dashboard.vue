<template>
  <div class="dashboard">
    <div class="va-row row-equal">
      <div class="flex xs12 xl6">
        <dashboard-line-chart />
      </div>
      <div class="flex xs12 md6 xl3">
        <dashboard-donut-chart />
      </div>
      <div class="flex xs12 md6 xl3">
        <dashboard-progress-bars />
      </div>
    </div>

    <dashboard-info-block />

    <!--<dashboard-table />-->

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
import DashboardLineChart from './DashboardLineChart'
import DashboardDonutChart from './DashboardDonutChart'
import DashboardProgressBars from './DashboardProgressBars'
import DashboardInfoBlock from './DashboardInfoBlock'
import DashboardTable from './DashboardTable'
import DashboardTabs from './DashboardTabs'
import DashboardMap from './DashboardMap'

export default {
  name: 'dashboard',
  components: {
    DashboardLineChart,
    DashboardDonutChart,
    DashboardProgressBars,
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
