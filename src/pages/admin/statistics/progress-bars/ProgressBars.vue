<template>
  <div class="progress-bars flex flex-col gap-10">
    <HorizontalBars />
    <BarsState />
    <CircleBars />
    <ColorfulBars />
  </div>
</template>

<script lang="ts" setup>
import HorizontalBars from './Widgets/HorizontalBars.vue'
import CircleBars from './Widgets/CircleBars.vue'
import BarsState from './Widgets/BarsState.vue'
import ColorfulBars from './Widgets/ColorfulBars.vue'
</script>
