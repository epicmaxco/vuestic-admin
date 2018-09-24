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
      processSlots(context),
    )
  },
}
</script>

<style lang="scss">
.vuestic-timeline {
  display: flex;
  flex-wrap: nowrap;
  &--vertical {
    flex-direction: column;
  }

  .vuestic-timeline-item {
    flex: 1;
  }
}
</style>
