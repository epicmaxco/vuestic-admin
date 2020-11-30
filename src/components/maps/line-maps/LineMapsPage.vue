<template>
  <div class="line-maps-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="line-maps-page__widget">
          <va-card-title>Line Maps</va-card-title>
          <va-card-content>
            <line-map
              :map-data="lineMapData"
              style="height: 65vh;"
            />
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import LineMap from './LineMap'
import { getLineMapData } from '../../../data/maps/LineMapData'

export default {
  name: 'line-maps-page',
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
