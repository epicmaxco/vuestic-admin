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

    const children = [
      createElement(
        VuesticTimelineSeparator,
        {
          props,
        },
      ),
    ]

    if (this.$slots.before) {
      children.unshift(
        createElement(
          'div',
          {
            class: `${$root}__before`,
            props,
          },
          this.$slots.before,
        ),
      )
    }

    if (this.$slots.after) {
      children.push(
        createElement(
          'div',
          {
            class: `${$root}__after`,
            props,
          },
          this.$slots.after,
        ),
      )
    }

    return createElement(
      'div',
      {
        class: {
          [$root]: true,
          [`${$root}--vertical`]: this.vertical,
        },
      },
      children,
    )
  },
}
</script>

<style lang="scss">
@import '../../../../sass/resources/resources';

.vuestic-timeline-item {
  display: flex;
  flex-direction: column;
  &__before, &__after {
    flex: 1;
    padding: 0.5rem 1rem;
  }
  &--vertical {
    .vuestic-timeline-item__before, .vuestic-timeline-item__after {
      padding: 1rem 0.5rem;
    }

    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
  }
  &__title {
    text-align: center;
    color: $vue-green;
    font-weight: 700;
    font-size: $font-size-mini;
    text-transform: uppercase;
  }
}
</style>
