<template>
  <div class="color-presentation">
    <va-popover
      color="info"
      :placement="popoverOptions.placement"
      :message="popoverOptions.content"
    >
      <div
        class="color-presentation__color"
        :style="computedStyle"
        @click="colorCopy()">
      </div>
    </va-popover>

    <div class="color-presentation__description" v-if="name || description">
      <div class="color-presentation__name">{{name}}</div>
      <div class="color-presentation__text">{{description}}</div>
    </div>

    <input :value="computedBackground" ref="hiddenInput" class="hidden-input" />
  </div>
</template>

<script>
import { useColors } from 'vuestic-ui'


// NOTE This component is a tad weird.
// It's not part of presentation nor is it UI component.
// Could be seen as `playground` of sorts.
export default {
  name: 'color-presentation',
  props: {
    color: {
      type: String,
      default: '',
    },
    variant: {
      type: Array,
      default: () => [],
    },
    width: {
      type: Number,
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
      popoverOptions: {
        content: 'Click to copy the color to clipboard',
        placement: 'right',
      },
    }
  },
  computed: {
    computedBackground () {
      const { getColor, getGradientBackground } = useColors()

      const colorComputed = getColor(this.color)

      if (this.variant.includes('gradient')) {
        return getGradientBackground(colorComputed)
      }

      return colorComputed
    },
    computedStyle () {
      const calcFilter = () => {
        if (this.variant.includes('hovered')) {return 'brightness(115%)'}
        if (this.variant.includes('pressed')) {return 'brightness(85%)'}
      }

      return {
        background: this.computedBackground,
        filter: calcFilter(),
        width: this.width ? `${this.width}px` : '',
      }
    },
  },
  methods: {
    colorCopy () {
      this.$refs.hiddenInput.select()
      document.execCommand('copy')
      this.notify()
    },
    notify () {
      this.$vaToast.init({
        message: "The color's copied to your clipboard",
        position: 'bottom-right',
      })
    },
  },
}
</script>

<style lang="scss">
.color-presentation {
  display: flex;
  align-items: center;
  margin-bottom: 1.125rem;

  .v-popover {
    width: 40px;
    height: 40px;

    span {
      outline: none !important;
    }
  }

  &__color {
    height: 40px;
    width: 40px;
    margin-right: 0.25rem;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
  }

  &__description {
    margin-left: 1rem;
  }

  &__name {
    color: var(--va-dark);
    padding-bottom: 4px;
  }

  &__text {
    color: var(--va-secondary);
  }

  .hidden-input {
    width: 0;
    padding: 0;
    opacity: 0;
    user-select: none;
  }
}
</style>
