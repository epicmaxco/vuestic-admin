<template>
  <div
    class="vuestic-vertical-timeline-item"
  >
    <div
      v-if="type==='label' || type==='centered'"
      class="vuestic-vertical-timeline-item__date"
      :class="{'reverse':type==='centered'}"
    >
      <div
        v-if="type==='label' || type==='centered'"
        class="vuestic-vertical-timeline-item__date-content"
        :class="{'reverse':type==='centered'}"
      >
        {{ date }}
      </div>
    </div>
    <div class="vuestic-vertical-timeline-item__line">
      <simple-vertical-indicator
        :step="step"
        :isActive="isActive"
      />
    </div>
    <div class="vuestic-vertical-timeline-item__content">
      <slot/>
    </div>
  </div>
</template>

<script>
import SimpleVerticalIndicator
  from '../../../vuestic-theme/vuestic-components/vuestic-wizard/indicators/SimpleVerticalIndicator'

export default {
  name: 'vuestic-vertical-timeline-item',
  components: {
    SimpleVerticalIndicator
  },
  props: {
    step: {},
    date: {},
    type: {
      type: String,
      validator: (val) => ['label', 'simple', 'centered'].includes(val),
      default: 'simple'
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
$line-width: 40px;

.vuestic-vertical-timeline-item {
  display: flex;
  &__date {
    &.reverse {
      flex: 1 1 40%;
    }
    padding-top: 5%;
    padding-right: 2%;
    flex: 1 1 4%;
    text-align: end;
    font-family: SourceSansPro;
    font-size: $font-size-root;
  }
  &__line {
    @include flex-center();
    flex-direction: column;
    flex: 0 0 $line-width;
    text-align: center;
    position: relative;
    width: 10px;
    .wizard-steps.wizard-steps {
      padding: 0;
      width: 10px;
      .wizard-step {
        width: 10px;
      }
    }
  }
  &__content {
    flex: 1 1 40%;
    padding-bottom: 20px;
    min-width: 250px;
    @include media-breakpoint-down(xs) {
      flex: 1 1 60%;
    }
    .vuestic-card {
      width: calc(100% - 1.1875rem * 2);
    }
  }
}
</style>
