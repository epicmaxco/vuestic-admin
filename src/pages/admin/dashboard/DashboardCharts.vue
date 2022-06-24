<template>
  <div class="row row-equal">
    <div class="flex xs12 xl6">
      <va-card v-if="lineChartData">
        <va-card-title>
          <h1>{{ t("dashboard.charts.trendyTrends") }}</h1>
          <div class="mr-0 text-right">
            <va-button size="small" color="danger" :disabled="lineChartData.labels.length < 2" @click="deleteSection">
              {{ t("dashboard.charts.showInMoreDetail") }}
            </va-button>
          </div>
        </va-card-title>
        <va-card-content>
          <va-chart ref="lineChart" class="chart" :data="lineChartData" type="line" />
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card class="d-flex">
        <va-card-title>
          <h1>{{ t("dashboard.charts.loadingSpeed") }}</h1>
          <div class="mr-0 text-right">
            <va-button icon="print" flat class="mr-0" @click="printChart" />
          </div>
        </va-card-title>
        <va-card-content v-if="donutChartData">
          <va-chart class="chart chart--donut" :data="donutChartData" type="donut" />
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <dashboard-contributors-chart />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from "vue";
  import { getDonutChartData } from "../../../data/charts/DonutChartData";
  import { getLineChartData } from "../../../data/charts/LineChartData";
  import VaChart from "../../../components/va-charts/VaChart.vue";
  import DashboardContributorsChart from "./DashboardContributorsList.vue";
  import { useGlobalConfig } from "vuestic-ui";
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  const lineChartData = ref(null);
  const donutChartData = ref(null);
  const lineChartFirstMonthIndex = ref(0);

  const theme = ref(useGlobalConfig().getGlobalConfig().colors);
  const donutChartDataURL = computed(() => {
    return document.querySelector(".chart--donut canvas").toDataURL("image/png");
  });

  watch(theme, () => {
    lineChartData.value = getLineChartData(theme.value);
    donutChartData.value = getDonutChartData(theme.value);
  });

  // "themes.primary"() {
  //   this.lineChartData = getLineChartData(this.theme);
  //   this.donutChartData = getDonutChartData(this.theme);
  // },
  //
  // "themes.info"() {
  //   this.lineChartData = getLineChartData(this.theme);
  //   this.donutChartData = getDonutChartData(this.theme);
  // },
  //
  // "themes.danger"() {
  //   this.donutChartData = getDonutChartData(this.theme);
  // },

  const lineChart = ref();

  // onMounted(() => {
  lineChartData.value = getLineChartData(theme.value);
  donutChartData.value = getDonutChartData(theme.value);
  // });

  function deleteSection() {
    lineChartFirstMonthIndex.value += 1;
    lineChartData.value = getLineChartData(theme.value, lineChartFirstMonthIndex);
    lineChart.value.refresh();
  }

  function printChart() {
    const win = window.open("", "Print", "height=600,width=800");
    win.document.write(`<br><img src='${donutChartDataURL.value}'/>`);
    // TODO: find better solution how to remove timeout
    setTimeout(() => {
      win.document.close();
      win.focus();
      win.print();
      win.close();
    }, 200);
  }
</script>

<style scoped>
  .chart {
    height: 400px;
  }
  .text-right {
    text-align: right;
  }
</style>
