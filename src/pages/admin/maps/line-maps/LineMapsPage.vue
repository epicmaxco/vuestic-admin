<template>
  <div class="line-maps-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="line-maps-page__widget" title="Line Maps">
          <line-map v-model="mainCity" :map-data="cities" :home-city="homeCity" style="height: 75vh" />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import LineMap from '../../../../components/maps/LineMap.vue'
  import { linaMapData } from '../../../../data/maps/lineMapData'

  const mainCity = ref(linaMapData.mainCity)
  const homeCity = ref(linaMapData.homeCity)
  const cities = ref(linaMapData.cities)
</script>
