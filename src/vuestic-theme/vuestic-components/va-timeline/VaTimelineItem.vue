<script>
import VaTimelineSeparator from './VaTimelineSeparator.vue'

export const $root = 'va-timeline-item'

export default {
  name: $root,
  props: {
    color: {
      type: String,
      default: 'success',
    },
    vertical: {
      type: Boolean,
    },
    active: {
      type: Boolean,
    },
    activePrevious: {
      type: Boolean,
    },
    activeNext: {
      type: Boolean,
    },
    isFirst: {
      type: Boolean,
    },
    isLast: {
      type: Boolean,
    },
    inverted: {
      type: Boolean,
    },
  },
  render (createElement) {
    const props = {
      color: this.color,
      vertical: this.vertical,
      active: this.active,
      activePrevious: this.activePrevious,
      activeNext: this.activeNext,
    }

    const children = [
      createElement(
        VaTimelineSeparator,
        {
          props,
        },
      ),
    ]

    const before = this.inverted ? this.$slots.after : this.$slots.before

    if (before) {
      children.unshift(
        createElement(
          'div',
          {
            class: `${$root}__before`,
            props,
          },
          before,
        ),
      )
    }

    const after = this.inverted ? this.$slots.before : this.$slots.after
    if (after) {
      children.push(
        createElement(
          'div',
          {
            class: `${$root}__after`,
            props,
          },
          after,
        ),
      )
    }

    return createElement(
      'div',
      {
        class: {
          [$root]: true,
          [`${$root}--vertical`]: this.vertical,
          [`${$root}--is-first`]: this.isFirst,
          [`${$root}--is-last`]: this.isLast,
        },
      },
      children,
    )
  },
}
</script>

<style lang="scss">
@import '../../vuestic-sass/resources/resources';

.va-timeline-item {
  display: flex;
  flex-direction: column;

  &__before, &__after {
    flex: 1;
  }

  &--vertical {
    .va-timeline-item__before,
    .va-timeline-item__after {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }

    .va-timeline-item__before {
      padding-right: 1rem;
    }

    .va-timeline-item__after {
      padding-left: 1rem;
    }
  }

  &__before {
    .va-timeline-item__text {
      float: right;
    }
  }

  &__after {
    .va-timeline-item__text {
      float: left;
    }
  }

  &:not(&--vertical) {
    .va-timeline-item__before,
    .va-timeline-item__after {
      padding-right: 1rem;
      padding-left: 1rem;
    }

    .va-timeline-item__before {
      padding-bottom: 0.5rem;
    }

    .va-timeline-item__after {
      padding-top: 1rem;
    }
  }

  &--vertical {
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

  &__description {
    margin-top: 0.25rem;
    text-align: center;
  }

  &__text {
    line-height: 1;
  }
}
</style>
