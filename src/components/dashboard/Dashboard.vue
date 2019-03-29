<template>
  <div class="dashboard">
    <div class="va-row">
      <div class="flex md6">
        <dashboard-line-chart />
      </div>
      <div class="flex md3">
        <dashboard-donut-chart />
      </div>
      <div class="flex md3">

      </div>
    </div>
  </div>
</template>

<script>
import DashboardLineChart from './DashboardLineChart'
import DashboardDonutChart from './DashboardDonutChart'
import DashboardProgressBars from './DashboardProgressBars'

export default {
  name: 'dashboard',
  components: {
    DashboardLineChart,
    DashboardDonutChart,
    DashboardProgressBars
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
