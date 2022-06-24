<template>
  <div class="progress-bars">
    <div class="row">
      <div class="flex xs12">
        <horizontal-bars />
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <bars-state />
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <circle-bars />
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <colorful-bars />
      </div>
    </div>
  </div>
</template>

<script>
  import HorizontalBars from "./Widgets/HorizontalBars.vue";
  import CircleBars from "./Widgets/CircleBars.vue";
  import BarsState from "./Widgets/BarsState.vue";
  import ColorfulBars from "./Widgets/ColorfulBars.vue";
  import { useI18n } from "vue-i18n";

  export default {
    name: "ProgressBars",
    components: { HorizontalBars, CircleBars, BarsState, ColorfulBars },
    setup() {
      const { t } = useI18n();
      return { t };
    },
  };
</script>
