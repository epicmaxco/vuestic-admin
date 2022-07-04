<template>
  <component :is="chartComponent" ref="chart" class="va-chart" :chart-options="options" :chart-data="data" />
</template>

<script setup lang="ts">
  // These are used, but eslint won't understand it because they're used as dynamic components
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import PieChart from './chart-types/PieChart'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import BubbleChart from './chart-types/BubbleChart'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import DonutChart from './chart-types/DonutChart'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import HorizontalBarChart from './chart-types/HorizontalBarChart'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import VerticalBarChart from './chart-types/VerticalBarChart'
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import LineChart from './chart-types/LineChart'
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
