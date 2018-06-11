<template>
  <div class="charts-page">
    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'charts.verticalBarChart' | translate">
          <vuestic-chart :data="verticalBarChartData" type="vertical-bar"></vuestic-chart>
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'charts.horizontalBarChart' | translate">
          <vuestic-chart :data="horizontalBarChartData" type="horizontal-bar"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget" :headerText="'charts.lineChart' | translate">
          <vuestic-chart :data="lineChartData" type="line"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'charts.pieChart' | translate">
          <vuestic-chart :data="pieChartData" type="pie"></vuestic-chart>
        </vuestic-widget>
      </div>
      <div class="col-md-6">
        <vuestic-widget class="chart-widget" :headerText="'charts.donutChart' | translate">
          <vuestic-chart :data="donutChartData" type="donut"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-widget class="chart-widget" :headerText="'charts.bubbleChart' | translate">
          <vuestic-chart :data="bubbleChartData" type="bubble"></vuestic-chart>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import LineChartData from 'data/charts/LineChartData'
  import BubbleChartData from 'data/charts/BubbleChartData'
  import PieChartData from 'data/charts/PieChartData'
  import DonutChartData from 'data/charts/DonutChartData'
  import VerticalBarChartData from 'data/charts/VerticalBarChartData'
  import HorizontalBarChartData from 'data/charts/HorizontalBarChartData'
  import SidebarLink from '../../admin/app-sidebar/components/SidebarLink'

  export default {
    name: 'charts',
    components: {
      SidebarLink
    },

    data: function () {
      return {
        bubbleChartData: BubbleChartData,
        lineChartData: LineChartData,
        pieChartData: PieChartData,
        donutChartData: DonutChartData,
        verticalBarChartData: VerticalBarChartData,
        horizontalBarChartData: HorizontalBarChartData
      }
    },
  }
</script>

<style lang="scss">
  .widget.chart-widget {
    .widget-body {
      height: 550px;
    }
  }
</style>
