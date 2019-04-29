<template>
  <div class="va-color-presentation">
    <va-tooltip
      :placement="tooltipOptions.placement"
      :message="tooltipOptions.content"
    >
      <div
        class="va-color-presentation__color"
        :style="computedStyle"
        @click="colorCopy">
      </div>
    </va-tooltip>
    <div class="va-color-presentation__description" v-if="name || description">
      <div class="va-color-presentation__name">{{name}}</div>
      <div class="va-color-presentation__text">{{description}}</div>
    </div>
  </div>

</template>

<script>
import VuesticTooltip from '../va-tooltip/VaTooltip'

// NOTE This component is a tad weird.
// It's not part of presentation nor is it UI component.
// Could be seen as `playground` of sorts.

export default {
  name: 'va-color-presentation',
  components: { VuesticTooltip },
  props: {
    color: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 40,
    },
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      tooltipOptions: {
        content: 'Click to copy color to clipboard',
        placement: 'right',
      },
    }
  },
  computed: {
    computedStyle () {
      return {
        background: this.color,
        width: `${this.width}px`,
      }
    },
  },
  methods: {
    colorCopy () {
      this.$copyText(this.color)
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-color-presentation {
  display: flex;
  margin-bottom: 16px;

  &__color {
    height: 40px;
  }

  &__description {
    margin-left: 8px;
  }

  &__name {
    color: $vue-darkest-blue;
  }

  &__text {
    color: $brand-secondary;
  }
}
</style>
