<script>
const getPropsData = (slot) => {
  return slot && slot.componentOptions && slot.componentOptions.propsData
}
const getIsActive = (slot) => {
  const propsData = getPropsData(slot)
  if (!propsData) {
    return false
  }

  return !!(propsData.active || propsData.active === '') // Check because for boolean empty prop means true
}
const processSlots = (context) => {
  const slots = context.slots().default

  slots.forEach((slot, index) => {
    const propsData = getPropsData(slot)

    if (!propsData) {
      return
    }

    // Pass down vertical prop.
    propsData.vertical = context.props.vertical

    if (context.props.centered) {
      // Every second slot will be inverted
      propsData.inverted = !!(index % 2)
    }

    if (index === 0) {
      propsData.isFirst = true
    }
    if (index === slots.length - 1) {
      propsData.isLast = true
    }

    const currentSlotActive = propsData.active || propsData.active === '' // Check because for boolean empty prop means true.

    // For inactive slot we props are default.
    if (!currentSlotActive) {
      return
    }

    if (index === 0) {
      propsData.activePrevious = currentSlotActive
    }

    if (index === slots.length - 1) {
      propsData.activeNext = currentSlotActive
    }

    const previousSlotActive = getIsActive(slots[index - 1])
    if (previousSlotActive) {
      propsData.activePrevious = true
    }

    const nextSlotActive = getIsActive(slots[index + 1])
    if (nextSlotActive) {
      propsData.activeNext = true
    }
  })

  return slots
}

const $root = 'vuestic-timeline'

export default {
  name: $root,
  functional: true,
  props: {
    vertical: Boolean,
    centered: Boolean,
  },
  render (createElement, context) {
    const classes = {
      [$root]: true,
      [`${$root}--vertical`]: context.props.vertical,
    }
    if (context.data.staticClass) {
      classes[context.data.staticClass] = true
    }

    return createElement(
      'div',
      {
        class: classes,
        style: context.data.staticStyle,
      },
      processSlots(context),
    )
  },
}
</script>

<style lang="scss">
$timeline-outer-spacing: 2rem;

.vuestic-timeline {
  display: flex;
  flex-wrap: nowrap;
  &--vertical {
    flex-direction: column;
    padding-left: $timeline-outer-spacing;
    padding-right: $timeline-outer-spacing;
  }
  &:not(.vuestic-timeline--vertical) {
    padding-top: $timeline-outer-spacing;
    padding-bottom: $timeline-outer-spacing;
  }
  .vuestic-timeline-item {
    flex: 1;
  }
  .vuestic-timeline-item--vertical {
    .vuestic-timeline-separator--vertical .vuestic-timeline-separator__line {
      &:first-child {
        flex: 0 0 1rem;
      }
    }

    &.vuestic-timeline-item--is-first {
      .vuestic-timeline-separator--vertical .vuestic-timeline-separator__line {
        &:first-child {
          flex-basis: 2rem;
        }
      }

      .vuestic-timeline-item__after, .vuestic-timeline-item__before {
        padding-top: $timeline-outer-spacing;
      }
    }
    &.vuestic-timeline-item--vertical.vuestic-timeline-item--is-last {
      .vuestic-timeline-item__after, .vuestic-timeline-item__before {
        padding-bottom: $timeline-outer-spacing;
      }
    }
  }

  :not(.vuestic-timeline-item--vertical) {
    &.vuestic-timeline-item--is-first {
      .vuestic-timeline-item__after, .vuestic-timeline-item__before {
        padding-left: $timeline-outer-spacing;
      }
    }
    &.vuestic-timeline-item--is-last {
      .vuestic-timeline-item__after, .vuestic-timeline-item__before {
        padding-right: $timeline-outer-spacing;
      }
    }
  }
}
</style>
