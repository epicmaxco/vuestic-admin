<template>
  <va-card>
    <va-card-title>
      {{ t("dashboard.currentVisitors") }}
    </va-card-title>
    <line-map class="dashboard-map" :map-data="lineMapData" />
  </va-card>
</template>

<script>
  import LineMap from "../../../components/maps/LineMap.vue";
  import { getLineMapData } from "../../../data/maps/LineMapData";
  import { useGlobalConfig } from "vuestic-ui";
  import { useI18n } from "vue-i18n";

  export default {
    name: "DashboardMap",
    components: {
      LineMap,
    },
    setup() {
      const { t } = useI18n();
      return { t };
    },
    data() {
      return {
        lineMapData: { cities: [], mainCity: "" },
      };
    },
    computed: {
      theme() {
        return useGlobalConfig().getGlobalConfig().colors;
      },
    },
    watch: {
      "themesOptions.activeThemeName": {
        // hack for trigger change themes
        handler() {
          this.lineMapData = getLineMapData(this.theme);
        },
        immediate: true,
      },
    },
    mounted() {
      this.lineMapData = getLineMapData(this.theme);
    },
    methods: {
      addAddress(address) {
        this.lineMapData = {
          ...this.lineMapData,
          cities: this.lineMapData.cities.map((city) => ({
            ...city,
            color: city.title === address.city ? this.theme.success : city.color,
          })),
        };
      },
    },
  };
</script>

<style>
  .dashboard-map {
    height: 380px;
  }
</style>
