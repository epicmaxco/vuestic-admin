<template>
  <div class="bubble-maps-page">
    <VaCard class="bubble-maps-page__widget" title="Bubble Maps">
      <BubbleMap :map-data="bubbleMapData" style="height: 75vh" />
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
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
