<template>
  <div
    class="vuestic-vertical-timeline-item"
    :class="{'reverse': type==='centered'}"
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
        class="vuestic-vertical-timeline-item__indicator"
        :isActive="isActive"
      />
    </div>
    <div class="vuestic-vertical-timeline-item__content">
      <vuestic-card
        class="vuestic-vertical-timeline-item__card"
        :theme="theme"
        :class="{'vuestic-card--stripe-success': theme==='base'}"
      >
        <span v-if="type==='simple' " class="vuestic-vertical-timeline-item__date" slot="title"> <slot name="date"/> </span>
        <span v-if="type!=='simple' " class="vuestic-vertical-timeline-item__date" slot="title"> <slot name="title"/> </span>
        <slot name="content"/>
      </vuestic-card>
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
    date: {},
    type: {
      type: String,
      validator: (val) => ['label', 'simple', 'centered'].includes(val),
      default: 'simple'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'base'
    }
  },
}
</script>

<style lang="scss">
$line-width: 40px;

.vuestic-vertical-timeline-item {
  display: flex;
  &.reverse {
    @media(min-width: 900px) {
      flex-direction: row-reverse;
    }
  }
  &__date {
    &.reverse {
      @media(min-width: 900px) {
        padding-left: 0;
      }
    }
    padding-top: 5%;
    padding-left: 30%;
    padding-right: 2%;
    flex: 1 1 40%;
    text-align: end;
    font-family: SourceSansPro;
    font-size: $font-size-root;
    @include media-breakpoint-down(xs) {
      padding-left: 0;
    }
  }
  &__line {
    @include flex-center();
    flex-direction: column;
    flex: 0 0 $line-width;
    padding-left: 25px;
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
    padding-top: 20px;
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
