<template>
  <div class="vuestic-horizontal-timeline-item">
    <div v-if="type==='simple'" class="vuestic-horizontal-timeline-item__date">
      {{ date }}
    </div>
    <div v-if="type==='simple'" class="vuestic-horizontal-timeline-item__text">
      {{ step.content }}
    </div>
    <div class="vuestic-horizontal-timeline-item__line">
      <simple-horizontal-indicator
        class="vuestic-horizontal-timeline-item__line-indicator"
        :step="step"
        :isActive="isActive"
        :indexCurrent="indexCurrent"
        :indexMax="indexMax"
      />
    </div>
    <div class="vuestic-horizontal-timeline-item__content">
      <slot/>
    </div>
  </div>
</template>

<script>
import SimpleHorizontalIndicator
  from '../../../vuestic-theme/vuestic-components/vuestic-wizard/indicators/SimpleHorizontalIndicator'

export default {
  name: 'vuestic-horizontal-timeline-item',
  components: {
    SimpleHorizontalIndicator
  },
  props: {
    step: {},
    date: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    indexCurrent: {},
    indexMax: {}
  }
}
</script>

<style lang="scss">
$line-width: 40px;

.vuestic-horizontal-timeline-item {
  &__date {
    padding-top: 5%;
    padding-right: 2%;
    text-align: center;
    color: $vue-green
  }
  &__text {
    padding-top: 5%;
    text-align: center;
  }
  &__line {
    text-align: center;
  }
  &__line-indicator {
    .wizard-step-line.wizard-step-line {
      width: 100%;
    }
  }
  &__content {
    max-height: 152px;
    .vuestic-card {
      width: 80%;
    }
  }
}
</style>
