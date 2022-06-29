<template>
  <va-card>
    <va-card-title>
      {{ t("dashboard.currentVisitors") }}
    </va-card-title>
    <line-map class="dashboard-map" :map-data="lineMapData" />
  </va-card>
</template>

<script setup lang="ts">
  import { computed, onMounted, ref, watch } from "vue";
  import { useGlobalConfig } from "vuestic-ui";
  const { getGlobalConfig } = useGlobalConfig();
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  import LineMap from "../../../components/maps/LineMap.vue";
  import { getLineMapData } from "../../../data/maps/LineMapData";

  const lineMapData = ref<unknown>({ lineMapData: { cities: [], mainCity: "" } });

  onMounted(() => {
    lineMapData.value = getLineMapData(theme.value);
  });

  const theme = computed(() => getGlobalConfig().colors!);

  watch(
    theme,
    () => {
      lineMapData.value = getLineMapData(theme.value);
    },
    { immediate: true },
  );
</script>

<style>
  .dashboard-map {
    height: 380px;
  }
</style>
