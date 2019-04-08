<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <va-timeline-separator/>
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <va-timeline-separator vertical/>
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <va-timeline-separator active/>
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <va-timeline-separator activePrevious/>
    </div>
    <div class="demo-container__item" style="width: 100px; height: 100px">
      <va-timeline-separator activeNext/>
    </div>
  </div>
</template>

<script>
import VaTimelineSeparator from './VaTimelineSeparator.vue'

export default {
  components: {
    VaTimelineSeparator,
  },
}
</script>
