<template>
  <div class="progress-bars">
    <div class="grid grid-cols-12 gap-8">
      <horizontal-bars class="col-span-full" />
      <bars-state class="col-span-full" />
      <circle-bars class="col-span-full" />
      <colorful-bars class="col-span-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import HorizontalBars from './Widgets/HorizontalBars.vue'
  import CircleBars from './Widgets/CircleBars.vue'
  import BarsState from './Widgets/BarsState.vue'
  import ColorfulBars from './Widgets/ColorfulBars.vue'
</script>
