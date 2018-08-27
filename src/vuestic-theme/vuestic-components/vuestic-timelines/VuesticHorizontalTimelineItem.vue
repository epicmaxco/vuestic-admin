<template>
  <div class="vuestic-horizontal-timeline-item">
    <div v-if="type==='simple'" class="vuestic-horizontal-timeline-item__date">
      {{ date }}
    </div>
    <div v-if="type==='simple'" class="vuestic-horizontal-timeline-item__text">
      {{ content }}
    </div>
    <div class="vuestic-horizontal-timeline-item__line">
      <simple-horizontal-indicator
        class="vuestic-horizontal-timeline-item__indicator"
        :isActive="isActive"
        :indexCurrent="indexCurrent"
        :indexMax="indexMax"
      />
    </div>
    <div class="vuestic-horizontal-timeline-item__content" v-if="type==='card'">
      <vuestic-card
        class="vuestic-horizontal-timeline-item__card"
        :class="{'vuestic-card--stripe-success': theme==='base'}"
        :theme="theme"
      >
        <span class="vuestic-horizontal-timeline-item__date" slot="title"> <slot name="date"/> </span>
        <slot name="content"/>
      </vuestic-card>
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
    date: {
      type: String
    },
    content: {},
    isActive: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    indexCurrent: {
      type: Number,
      default: 0
    },
    indexMax: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: 'base'
    }
  }
}
</script>

<style lang="scss">
$line-width: 40px;

.vuestic-horizontal-timeline-item {
  width: 100%;
  &__date {
    padding-top: 5%;
    padding-right: 2%;
    text-align: center;
    color: $vue-green;
    font-weight: bold;
    font-family: SourceSansPro;
    font-weight: bold;
    font-size: 14px;
  }
  &__text {
    text-align: center;
    font-family: SourceSansPro;
    font-size: $font-size-root;
  }
  &__line {
    width: 100%;
    text-align: center;
  }
  &__indicator {
    .wizard-step-line.wizard-step-line {
      width: 100%;
    }
    .completed-line {
      background-color: $vue-green
    }
  }
  &__content {
    padding-right: 10px;
    padding-left: 10px;
    .vuestic-card {
      width: 80%;
    }
  }
  @include media-breakpoint-down(xs) {
    &__card {
      min-width: 300px;
    }
  }
  & &__card {
    width: 90%;
  }
}
</style>
