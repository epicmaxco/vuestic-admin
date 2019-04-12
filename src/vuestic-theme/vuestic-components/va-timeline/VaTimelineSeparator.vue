<script>
const $root = 'va-timeline-separator'

export default {
  name: $root,
  functional: true,
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
  },
  render (createElement, context) {
    return createElement(
      'div',
      {
        class: {
          [$root]: true,
          [`${$root}--vertical`]: context.props.vertical,
        },
      },
      [
        createElement('div', {
          class: {
            [`${$root}__line`]: true,
            [`${$root}__line--active`]: context.props.activePrevious,
          },
          style: {
            backgroundColor: context.props.activePrevious ? context.parent.$themes[context.props.color] : '#dddddd',
          },
        }),
        createElement('div', {
          class: {
            [`${$root}__center`]: true,
            [`${$root}__center--active`]: context.props.active,
          },
          style: {
            backgroundColor: context.props.active ? context.parent.$themes[context.props.color] : '#dddddd',
          },
        }),
        createElement('div', {
          class: {
            [`${$root}__line`]: true,
            [`${$root}__line--active`]: context.props.activeNext,
          },
          style: {
            backgroundColor: context.props.activeNext ? context.parent.$themes[context.props.color] : '#dddddd',
          },
        }),
      ],
    )
  },
}
</script>

<style lang="scss">
@import '../../vuestic-sass/resources/resources';

.va-timeline-separator {
  display: flex;
  align-items: center;

  &--vertical {
    flex-direction: column;
  }

  &__line {
    transition: background-color ease .5s;
    width: .125rem;
    height: .125rem;
    flex: 1;
  }

  &__center {
    transition: background-color ease .5s;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: .5rem;
  }
}
</style>
