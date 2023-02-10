<template>
  <div class="bubble-maps-page">
    <va-card class="bubble-maps-page__widget" title="Bubble Maps">
      <bubble-map :map-data="bubbleMapData" style="height: 75vh" />
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import BubbleMap from './BubbleMap.vue'
  import { bubbleMapData } from '../../../../data/maps/bubbleMapData'
</script>

<style lang="scss">
  .line-maps-page__widget {
    .va-card__inner {
      border-radius: inherit;
    }
  }
</style>
