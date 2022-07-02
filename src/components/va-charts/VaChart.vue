<template>
  <component :is="chartComponent" ref="chart" class="va-chart" :chart-options="options" :chart-data="data" />
</template>

<script setup lang="ts">
  import { chartTypesMap } from './VaChartConfigs'
  import { computed, defineProps, ref } from 'vue'

  const props = defineProps<{
    // TODO: Provide better types for this prop. See GeneratedData and VaChartData
    data?: any
    options?: Record<string, never>
    type: keyof typeof chartTypesMap
  }>()

  const chartComponent = computed(() => chartTypesMap[props.type])

  const chart = ref()

  function refresh() {
    chart.value.refresh()
  }

  defineExpose({ refresh })
</script>

<style lang="scss">
  .va-chart {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > * {
      height: 100%;
      width: 100%;
    }

    canvas {
      width: 100%;
      height: auto;
      min-height: 320px;
    }
  }
</style>
