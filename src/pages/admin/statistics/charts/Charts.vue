<template>
  <div class="charts">
    <div class="row">
      <div class="flex md6 xs12">
        <va-card v-if="barChartDataGenerated" class="chart-widget">
          <va-card-title>{{ t('charts.verticalBarChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="barChartDataGenerated" type="bar" />
          </va-card-content>
        </va-card>
      </div>

      <div class="flex md6 xs12">
        <va-card v-if="horizontalBarChartDataGenerated" class="chart-widget">
          <va-card-title>{{ t('charts.horizontalBarChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="horizontalBarChartDataGenerated" type="horizontal-bar" />
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md12 xs12">
        <va-card v-if="lineChartDataGenerated" class="chart-widget">
          <va-card-title>{{ t('charts.lineChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="lineChartDataGenerated" type="line" />
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md6 xs12">
        <va-card v-if="pieChartDataGenerated" class="chart-widget">
          <va-card-title>{{ t('charts.pieChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="pieChartDataGenerated" type="pie" />
          </va-card-content>
        </va-card>
      </div>

      <div class="flex md6 xs12">
        <va-card v-if="doughnutChartDataGenerated" class="chart-widget">
          <va-card-title>{{ t('charts.donutChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="doughnutChartDataGenerated" type="doughnut" />
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md12 xs12">
        <va-card v-if="bubbleChartDataGenerated" class="chart-widget">
          <va-card-title>{{ t('charts.bubbleChart') }}</va-card-title>
          <va-card-content>
            <va-chart :data="bubbleChartDataGenerated" type="bubble" />
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useChartData } from '../../../../data/charts/composables/useChartData'
  import {
    lineChartData,
    doughnutChartData,
    bubbleChartData,
    pieChartData,
    barChartData,
    horizontalBarChartData,
  } from '../../../../data/charts'
  import VaChart from '../../../../components/va-charts/VaChart.vue'

  const lineChartDataGenerated = useChartData(lineChartData, 0.7)
  const doughnutChartDataGenerated = useChartData(doughnutChartData)
  const bubbleChartDataGenerated = useChartData(bubbleChartData, 0.9)
  const pieChartDataGenerated = useChartData(pieChartData)
  const barChartDataGenerated = useChartData(barChartData)
  const horizontalBarChartDataGenerated = useChartData(horizontalBarChartData)

  const { t } = useI18n()
</script>

<style lang="scss">
  .chart-widget {
    .va-card__content {
      height: 450px;
    }
  }
</style>
