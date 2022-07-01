<template>
  <div v-if="isMounted" class="charts">
    <div class="row">
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ t('charts.verticalBarChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="verticalBarChartData" type="vertical-bar" />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ t('charts.horizontalBarChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="horizontalBarChartData" type="horizontal-bar" />
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ t('charts.lineChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="lineChartData" type="line" />
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ t('charts.pieChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="pieChartData" type="pie" />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ t('charts.donutChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="donutChartData" type="donut" />
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget">
          <va-card-title>{{ t('charts.bubbleChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="bubbleChartData" type="bubble" />
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import VaChart from '../../../../components/va-charts/VaChart.vue'
  import { useLineChartData } from '../../../../data/charts/LineChartData'
  import { useBubbleChartData } from '../../../../data/charts/BubbleChartData'
  import { usePieChartData } from '../../../../data/charts/PieChartData'
  import { useDonutChartData } from '../../../../data/charts/DonutChartData'
  import { useVerticalBarChartData } from '../../../../data/charts/VerticalBarChartData'
  import { useHorizontalBarChartData } from '../../../../data/charts/HorizontalBarChartData'
  import { useGlobalConfig } from 'vuestic-ui'
  import { useI18n } from 'vue-i18n'

  const { getLineChartData } = useLineChartData()
  const { getBubbleChartData } = useBubbleChartData()
  const { getPieChartData } = usePieChartData()
  const { getDonutChartData } = useDonutChartData()
  const { getVerticalBarChartData } = useVerticalBarChartData()
  const { getHorizontalBarChartData } = useHorizontalBarChartData()
  const { getGlobalConfig } = useGlobalConfig()
  const { t } = useI18n()

  const bubbleChartData = ref<ReturnType<typeof getBubbleChartData>>()
  const lineChartData = ref<ReturnType<typeof getLineChartData>>()
  const pieChartData = ref<ReturnType<typeof getPieChartData>>()
  const donutChartData = ref<ReturnType<typeof getDonutChartData>>()
  const verticalBarChartData = ref<ReturnType<typeof getVerticalBarChartData>>()
  const horizontalBarChartData = ref<ReturnType<typeof getHorizontalBarChartData>>()
  const isMounted = ref(false)

  const theme = computed(() => getGlobalConfig().colors!)

  onMounted(() => {
    isMounted.value = true
    bubbleChartData.value = getBubbleChartData(theme.value)
    lineChartData.value = getLineChartData(theme.value, 0)
    pieChartData.value = getPieChartData(theme.value)
    donutChartData.value = getDonutChartData(theme.value)
    verticalBarChartData.value = getVerticalBarChartData(theme.value)
    horizontalBarChartData.value = getHorizontalBarChartData(theme.value)
  })

  // function refreshData() {
  //   lineChartData.value = getLineChartData(theme.value, 0)
  // }
</script>

<style lang="scss">
  .chart-widget {
    .va-card__body {
      height: 550px;
    }
  }
</style>
