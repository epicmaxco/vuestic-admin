<template>
  <div class="dashboard">
    <dashboard-charts />
    <dashboard-info-block />
    <div class="row row-equal">
      <div class="flex xs12 lg6">
        <dashboard-tabs @submit="addAddressToMap" />
      </div>
      <div class="flex xs12 lg6">
        <dashboard-map ref="dashboardMap" />
      </div>
    </div>
  </div>
</template>

<script>
  import DashboardCharts from "./DashboardCharts.vue";
  import DashboardInfoBlock from "./DashboardInfoBlock.vue";
  import DashboardTabs from "./DashboardTabs.vue";
  import DashboardMap from "./DashboardMap.vue";

  export default {
    name: "Dashboard",
    components: {
      DashboardCharts,
      DashboardInfoBlock,
      DashboardTabs,
      DashboardMap,
    },
    methods: {
      addAddressToMap({ city, country }) {
        this.$refs.dashboardMap.addAddress({ city: city.text, country });
      },
    },
  };
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
      &__title {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
