<template>
  <div v-if="isMounted" class="charts">
    <div class="row">
      <div class="flex md6 xs12">
        <va-card class="chart-widget" :title="t('charts.verticalBarChart')">
          <va-card-content>
            <va-chart :data="verticalBarChartData" type="vertical-bar" />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card class="chart-widget" :title="t('charts.horizontalBarChart')">
          <va-card-content>
            <va-chart :data="horizontalBarChartData" type="horizontal-bar" />
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget" :title="t('charts.lineChart')">
          <va-card-content>
            <va-chart :data="lineChartData" type="line" />
          </va-card-content>
        </va-card>
      </div>
    </div>

    <div class="row">
      <div class="flex md6 xs12">
        <va-card class="chart-widget" :title="t('charts.pieChart')">
          <va-card-content>
            <va-chart :data="pieChartData" type="pie" />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex md6 xs12">
        <va-card class="chart-widget" :title="t('charts.donutChart')">
          <va-card-content>
            <va-chart :data="donutChartData" type="donut" />
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="row">
      <div class="flex md12 xs12">
        <va-card class="chart-widget" :title="t('charts.bubbleChart')">
          <va-card-content>
            <va-chart :data="bubbleChartData" type="bubble" />
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import VaChart from "../../../../components/va-charts/VaChart.vue";
  import { useLineChartData } from "../../../../data/charts/LineChartData";
  const { getLineChartData } = useLineChartData();
  import { useBubbleChartData } from "../../../../data/charts/BubbleChartData";
  const { getBubbleChartData } = useBubbleChartData();
  import { usePieChartData } from "../../../../data/charts/PieChartData";
  const { getPieChartData } = usePieChartData();
  import { useDonutChartData } from "../../../../data/charts/DonutChartData";
  const { getDonutChartData } = useDonutChartData();
  import { useVerticalBarChartData } from "../../../../data/charts/VerticalBarChartData";
  const { getVerticalBarChartData } = useVerticalBarChartData();
  import { useHorizontalBarChartData } from "../../../../data/charts/HorizontalBarChartData";
  const { getHorizontalBarChartData } = useHorizontalBarChartData();
  import { useGlobalConfig } from "vuestic-ui";
  const { getGlobalConfig } = useGlobalConfig();
  import { useI18n } from "vue-i18n";
  import { computed, onMounted, ref } from "vue";
  const { t } = useI18n();

  const bubbleChartData = ref<ReturnType<typeof getBubbleChartData>>(null);
  const lineChartData = ref<ReturnType<typeof getLineChartData>>(null);
  const pieChartData = ref<ReturnType<typeof getPieChartData>>(null);
  const donutChartData = ref<ReturnType<typeof getDonutChartData>>(null);
  const verticalBarChartData = ref<ReturnType<typeof getVerticalBarChartData>>(null);
  const horizontalBarChartData = ref<ReturnType<typeof getHorizontalBarChartData>>(null);
  const isMounted = ref(false);

  const theme = computed(() => getGlobalConfig().colors!);

  onMounted(() => {
    isMounted.value = true;
    bubbleChartData.value = getBubbleChartData(theme.value);
    lineChartData.value = getLineChartData(theme.value, 0);
    pieChartData.value = getPieChartData(theme.value);
    donutChartData.value = getDonutChartData(theme.value);
    verticalBarChartData.value = getVerticalBarChartData(theme.value);
    horizontalBarChartData.value = getHorizontalBarChartData(theme.value);
  });

  function refreshData() {
    lineChartData.value = getLineChartData(theme.value, 0);
  }
</script>

<style lang="scss">
  .chart-widget {
    .va-card__body {
      height: 550px;
    }
  }
</style>
