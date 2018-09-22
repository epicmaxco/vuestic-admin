<script>
import VuesticTimelineSeparator from './VuesticTimelineSeparator.vue'

export const $root = 'vuestic-timeline-item'

export default {
  name: $root,
  props: {
    vertical: Boolean,
    active: Boolean,
    activePrevious: Boolean,
    activeNext: Boolean,
  },
  render (createElement) {
    const props = {
      vertical: this.vertical,
      active: this.active,
      activePrevious: this.activePrevious,
      activeNext: this.activeNext,
    }

    return createElement(
      'div',
      {
        class: {
          [$root]: true,
          [`${$root}--vertical`]: this.vertical,
        },
      },
      [
        createElement(
          VuesticTimelineSeparator,
          {
            props,
          },
        ),
        this.$slots.default,
      ],
    )
  },
}
</script>

<style lang="scss">
.vuestic-timeline-item {
  display: flex;
  flex-direction: column;
  &--vertical {
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }
}
</style>
