<template>
  <div ref="mapRef" class="line-map fill-height">Line Map</div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, watch } from "vue";
  import { useGlobalConfig } from "vuestic-ui";
  const { getGlobalConfig } = useGlobalConfig();

  import { getLineMapData } from "../../data/maps/LineMapData";
  import "amcharts3";
  import "amcharts3/amcharts/plugins/responsive/responsive.js";
  import "amcharts3/amcharts/serial.js";
  import "amcharts3/amcharts/themes/light";
  import "ammap3";
  import "ammap3/ammap/maps/js/worldLow";

  const props = defineProps<{
    mapData: ReturnType<typeof getLineMapData>;
  }>();

  const mapRef = ref();

  onMounted(() => {
    addDataToMap();
    map.value.validateData();

    drawMap();
  });

  const dataProvider = ref({
    mapVar: ((window as any).AmCharts as any).maps.worldLow,
  });

  const theme = computed(() => getGlobalConfig().colors);

  const map = computed(() => new ((window as any).AmCharts as any).AmMap());

  function drawMap() {
    map.value.areasSettings = {
      unlistedAreasColor: "#eee",
      unlistedAreasAlpha: 1,
      outlineColor: "#fff",
      outlineThickness: 2,
    };
    map.value.imagesSettings = {
      color: theme.value?.info,
      rollOverColor: theme.value?.info,
      selectedColor: theme.value?.primary,
    };
    map.value.linesSettings = {
      color: theme.value?.info,
      alpha: 0.4,
    };

    addDataToMap();

    map.value.dataProvider = dataProvider.value;
    map.value.backgroundZoomsToTop = true;
    map.value.linesAboveImages = true;

    map.value.write(mapRef.value);
  }

  function addDataToMap() {
    (dataProvider.value as any).linkToObject = props.mapData.mainCity;
    (dataProvider.value as any).images = props.mapData.cities;
  }
</script>
