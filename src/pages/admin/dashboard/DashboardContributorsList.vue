<template>
  <va-card class="d-flex dashboard-contributors-list">
    <va-card-title>
      <h1>{{ t("dashboard.charts.topContributors") }}</h1>
      <div class="mr-0 text-right">
        <a class="mr-0 link" :disabled="contributors.length <= step" @click="showNext">
          {{ t("dashboard.charts.showNextFive") }}
        </a>
      </div>
    </va-card-title>

    <va-card-content>
      <va-inner-loading :loading="loading" style="width: 100%">
        <div v-for="(contributor, idx) in visibleList" :key="idx" class="mb-3">
          <va-progress-bar :model-value="getPercent(contributor.contributions)" :color="getProgressBarColor(idx)">
            {{ contributor.contributions }} {{ t("dashboard.charts.commits") }}
          </va-progress-bar>
          <p class="mt-2">{{ contributor.login }}</p>
        </div>
      </va-inner-loading>
    </va-card-content>
  </va-card>
</template>

<script>
  import axios from "axios";
  import { useGlobalConfig } from "vuestic-ui";

  import { useI18n } from "vue-i18n";

  export default {
    name: "DashboardContributorsList",
    setup() {
      const { t } = useI18n();
      return { t };
    },
    data() {
      return {
        contributors: [],
        loading: false,
        progressMax: 392,
        visibleList: [],
        step: 5,
        page: 0,
      };
    },
    computed: {
      theme() {
        return useGlobalConfig().getGlobalConfig().colors;
      },
    },
    mounted() {
      this.loadContributorsList();
    },
    methods: {
      async loadContributorsList() {
        this.loading = true;
        const { data } = await axios.get("https://api.github.com/repos/epicmaxco/vuestic-admin/contributors");
        this.contributors = data;
        this.progressMax = Math.max(...this.contributors.map(({ contributions }) => contributions));
        this.showNext();
        this.loading = false;
      },
      getPercent(val) {
        return (val / this.progressMax) * 100;
      },
      showNext() {
        this.visibleList = this.contributors.slice(this.page * this.step, this.page * this.step + this.step);
        this.page += 1;

        const maxPages = (this.contributors.length - 1) / this.step;

        if (this.page > maxPages) {
          this.page = 0;
        }
      },
      getProgressBarColor(idx) {
        const themeColors = ["primary", "success", "info", "danger", "warning"];

        if (idx < themeColors.length) {
          return themeColors[idx];
        }

        // Get random color if idx out of colors array
        const keys = Object.keys(themeColors);
        return themeColors[keys[(keys.length * Math.random()) << 0]];
      },
    },
  };
</script>

<style scoped lang="scss">
  .dashboard-contributors-list {
    flex-direction: column;

    .inner-loading {
      height: 100%;
    }
  }
</style>
