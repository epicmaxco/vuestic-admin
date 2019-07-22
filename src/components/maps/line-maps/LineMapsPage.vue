<template>
  <div class="line-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card
          class="line-maps-page__widget"
          title="Line Maps"
        >
          <line-map
            :map-data="lineMapData"
            style="height: 65vh;"
          />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import LineMap from './LineMap'
import LineMapData from 'data/maps/LineMapData'

export default {
  name: 'line-maps-page',
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
