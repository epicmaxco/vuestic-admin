<template>
  <div class="vuestic-vertical-timeline-item">
    <div class="vuestic-vertical-timeline-item__date">
      <div v-if="type=='label'" class="vuestic-vertical-timeline-item__date-content">
        {{ date }}
      </div>
    </div>
    <div class="vuestic-vertical-timeline-item__line">
      <simple-vertical-indicator
        :step="step"
        :isActive="step.isActive"
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
    date: {
      default: 'April 10 15:00'
    },
    type: {
      type: String,
      validator: (val) => ['label', 'simple', 'centered'].includes(val),
      default: 'simple'
    }
  },
}
</script>

<style lang="scss">
$line-width: 40px;

.vuestic-vertical-timeline-item {
  display: flex;
  &__date {
    padding-top: 5%;
    padding-right: 2%;
    flex: 1 1 20%;
    text-align: end;
  }
  &__line {
    @include flex-center();
    flex-direction: column;
    flex: 0 0 $line-width;
    text-align: center;
    position: relative;
  }
  &__content {
    flex: 1 1 40%;
    // HACK Remove after card fix (see https://github.com/epicmaxco/vuestic-admin/issues/307)
    .vuestic-card {
      width: calc(100% - 1.1875rem * 2);
    }
  }
}
</style>
