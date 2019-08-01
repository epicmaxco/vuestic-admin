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
import { getLineMapData } from '../../data/maps/LineMapData'

export default {
  name: 'dashboard-map',
  components: {
    LineMap,
  },
  computed: {
    lineMapData () {
      return getLineMapData(this.$themes)
    },
  },
}
</script>

<style>
  .dashboard-map {
    height: 380px;
  }
</style>
