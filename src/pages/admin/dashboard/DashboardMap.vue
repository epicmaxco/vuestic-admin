<template>
  <va-card >
    <va-card-title>
      {{ $t('dashboard.currentVisitors') }}
    </va-card-title>
    <line-map
      class="dashboard-map"
      :map-data="lineMapData"
      style="height: 400px;"
    />
  </va-card>
</template>

<script>
import LineMap from '@/components/maps/LineMap'
import { getLineMapData } from '@/data/maps/LineMapData'
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'dashboard-map',
  components: {
    LineMap,
  },
  data () {
    return {
      lineMapData: { cities: [], mainCity: '' },
    }
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    },
  },
  methods: {
    addAddress (address) {
      this.lineMapData = {
        ...this.lineMapData,
        cities: this.lineMapData.cities.map(city => ({
          ...city,
          color: city.title === address.city ? this.theme.success : city.color,
        })),
      }
    },
  },
  mounted () {
    this.lineMapData = getLineMapData(this.theme)
  },
  watch: {
    '$themesOptions.activeThemeName': { // hack for trigger change themes
      handler () {
        this.lineMapData = getLineMapData(this.theme)
      },
      immediate: true,
    },
  },
}
</script>

<style>
  .dashboard-map {
    height: 380px;
  }
</style>
