<template>
  <div class="line-maps-page">
    <va-card class="line-maps-page__widget" title="Line Maps">
      <line-map v-model="mainCity" :map-data="cities" :home-city="homeCity" style="height: 75vh" />
    </va-card>
  </div>
</template>

<script setup lang="ts">
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
