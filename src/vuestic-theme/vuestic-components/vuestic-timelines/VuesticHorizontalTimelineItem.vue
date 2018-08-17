<template>
  <div class="vuestic-horizontal-timeline-item">
    <div class="vuestic-horizontal-timeline-item__date">
      <div class="vuestic-horizontal-timeline-item__date-content">
        {{ date }}
      </div>
    </div>
    <div class="vuestic-horizontal-timeline-item__line">
      <simple-horizontal-indicator
        :step="step"
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
  },
}
</script>

<style lang="scss">
$line-width: 40px;

.vuestic-horizontal-timeline-item {
  &__date {
    padding-top: 5%;
    padding-right: 2%;
    text-align: center;
  }
  &__line {
    .wizard-step-line.wizard-step-line {
      width: 100%;
    }
    text-align: center;
  }
  &__content {
    // HACK Remove after card fix (see https://github.com/epicmaxco/vuestic-admin/issues/307)
    .vuestic-card {
      width: 80%;
    }
  }
}
</style>
