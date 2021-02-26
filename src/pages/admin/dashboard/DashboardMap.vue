<template>
  <va-card :title="$t('dashboard.currentVisitors')">
    <line-map
      class="dashboard-map"
      :map-data="lineMapData"
    />
  </va-card>
</template>

<script>
import LineMap from '@/components/maps/LineMap'
import { getLineMapData } from '@/data/maps/LineMapData'
import { useTheme } from 'vuestic-ui'

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
      return useTheme().getTheme()
    },
  },
  methods: {
    addAddress (address) {
      this.lineMapData = {
        ...this.lineMapData,
        cities: this.lineMapData.cities.map(city => ({
          ...city,
          color: city.title === address.city ? this.$themes.success : city.color,
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
