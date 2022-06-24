<template>
  <div class="line-map fill-height">Line Map</div>
</template>

<script setup lang="ts">
  import "amcharts3";
  import "amcharts3/amcharts/plugins/responsive/responsive.js";
  import "amcharts3/amcharts/serial.js";
  import "amcharts3/amcharts/themes/light";

  import "ammap3";
  import "ammap3/ammap/maps/js/worldLow";
  import { useGlobalConfig } from "vuestic-ui";
  import { computed, onMounted, ref, watch } from "vue";

  const props = defineProps<{
    mapData: any;
  }>();

  watch(props.mapData, () => {
    addDataToMap();
    map.value.validateData();
  });

  onMounted(() => {
    drawMap();
  });

  const dataProvider = ref({
    mapVar: AmCharts.maps.worldLow,
  });

  const map = computed(() => {
    return new AmCharts.AmMap();
  });

  const theme = computed(() => {
    return useGlobalConfig().getGlobalConfig().colors;
  });

  function drawMap() {
    /* global AmCharts */
    map.value.areasSettings = {
      unlistedAreasColor: "#eee",
      unlistedAreasAlpha: 1,
      outlineColor: "#fff",
      outlineThickness: 2,
    };
    map.value.imagesSettings = {
      color: theme.value.info,
      rollOverColor: theme.value.info,
      selectedColor: theme.value.primary,
    };
    map.value.linesSettings = {
      color: theme.value.info,
      alpha: 0.4,
    };
    addDataToMap();
    map.value.dataProvider = dataProvider.value;
    map.value.backgroundZoomsToTop = true;
    map.value.linesAboveImages = true;

    map.value.write();
  }

  function addDataToMap() {
    dataProvider.value.mapVar.linkToObject = props.mapData.mainCity;
    dataProvider.value.mapVar.images = props.mapData.cities;
  }
</script>
