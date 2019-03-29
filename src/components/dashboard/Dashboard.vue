<template>
  <div class="dashboard">
    <div class="va-row">
      <div class="flex xs12 lg6">
        <dashboard-line-chart />
      </div>
      <div class="flex xs12 md6 lg3">
        <dashboard-donut-chart />
      </div>
      <div class="flex xs12 md6 lg3">
        <dashboard-progress-bars />
      </div>
    </div>

    <dashboard-info-block />
  </div>
</template>

<script>
import DashboardLineChart from './DashboardLineChart'
import DashboardDonutChart from './DashboardDonutChart'
import DashboardProgressBars from './DashboardProgressBars'
import DashboardInfoBlock from './DashboardInfoBlock'

export default {
  name: 'dashboard',
  components: {
    DashboardLineChart,
    DashboardDonutChart,
    DashboardProgressBars,
    DashboardInfoBlock
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
