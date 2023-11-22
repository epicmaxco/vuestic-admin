<template>
  <div class="line-maps-page">
    <VaCard class="line-maps-page__widget" title="Line Maps">
      <LineMap v-model="mainCity" :home-city="homeCity" :map-data="cities" style="height: 75vh" />
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import LineMap from '../../../../components/maps/LineMap.vue'
import { lineMapData } from '../../../../data/maps/lineMapData'

const mainCity = ref(lineMapData.mainCity)
const homeCity = ref(lineMapData.homeCity)
const cities = ref(lineMapData.cities)
</script>

<style lang="scss">
.line-maps-page__widget {
  .va-card__inner {
    border-radius: inherit;
  }
}
</style>
