<template>
  <div class="vuestic-colors-presentation">
    <vuestic-tooltip :options="tooltipOptions">
      <div class="vuestic-colors-presentation__color" :style="computedStyle" @click="colorCopy"></div>
    </vuestic-tooltip>
    <div class="vuestic-colors-presentation__description" v-if="name || description">
      <div class="vuestic-colors-presentation__name link">{{name}}</div>
      <div class="vuestic-colors-presentation__text">{{description}}</div>
    </div>
  </div>

</template>

<script>
import VuesticTooltip from '../vuestic-tooltip/VuesticTooltip'

export default {
  name: 'vuestic-colors-presentation',

  components: { VuesticTooltip },

  props: {
    color: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 40
    },
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      tooltipOptions: {
        content: 'Click to copy color to clipboard',
        placement: 'right'
      }
    }
  },

  computed: {
    computedStyle () {
      return {
        background: this.color,
        width: `${this.width}px`
      }
    }
  },

  methods: {
    colorCopy () {
      this.$copyText(this.color)
    }
  }
}
</script>

<style lang="scss">
  @import "../../vuestic-sass/resources/resources";

  .vuestic-colors-presentation {
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
      color: $va-link-color-secondary;
    }
  }
</style>
