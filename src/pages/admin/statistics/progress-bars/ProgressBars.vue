<template>
  <div class="progress-bars flex flex-col gap-10">
    <horizontal-bars />
    <bars-state />
    <circle-bars />
    <colorful-bars />
  </div>
</template>

<script setup lang="ts">
  import HorizontalBars from './Widgets/HorizontalBars.vue'
  import CircleBars from './Widgets/CircleBars.vue'
  import BarsState from './Widgets/BarsState.vue'
  import ColorfulBars from './Widgets/ColorfulBars.vue'
</script>
