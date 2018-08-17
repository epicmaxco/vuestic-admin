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
    type: {}
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
      color: $vue-green;
      width: 100%;
    }
  }
  &__content {
    // HACK Remove after card fix (see https://github.com/epicmaxco/vuestic-admin/issues/307)
    .vuestic-card {
      width: 80%;
    }
  }
}
</style>
