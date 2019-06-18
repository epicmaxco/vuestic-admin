<template>
  <va-card :title="$t('dashboard.currentVisitors')">
    <line-map
      class="dashboard-map"
      :map-data="lineMapData"
    />
  </va-card>
</template>

<script>
import LineMap from '@/components/maps/line-maps/LineMap'
import LineMapData from '@/data/maps/LineMapData'

export default {
  name: 'dashboard-map',
  components: {
    LineMap,
  },
  data () {
    return {
      lineMapData: LineMapData,
    }
  },
}
</script>

<style>
  .dashboard-map {
    height: 380px;
  }
</style>
