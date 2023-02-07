<template>
  <div class="progress-bars">
    <div class="grid grid-cols-12 mb-4">
      <div class="flex xs:col-span-12 mb-12">
        <horizontal-bars />
      </div>
    </div>
    <div class="grid grid-cols-12 mb-4">
      <div class="flex xs:col-span-12">
        <bars-state />
      </div>
    </div>
    <div class="grid grid-cols-12 mb-4">
      <div class="flex xs:col-span-12">
        <circle-bars />
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="flex xs:col-span-12">
        <colorful-bars />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import HorizontalBars from './Widgets/HorizontalBars.vue'
  import CircleBars from './Widgets/CircleBars.vue'
  import BarsState from './Widgets/BarsState.vue'
  import ColorfulBars from './Widgets/ColorfulBars.vue'
</script>
