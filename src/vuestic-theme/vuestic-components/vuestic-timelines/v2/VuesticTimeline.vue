<script>
const getPropsData = (slot) => {
  return slot && slot.componentOptions && slot.componentOptions.propsData
}
const getIsActive = (slot) => {
  const propsData = getPropsData(slot)
  return !!(propsData && propsData.active)
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

    // For inactive slot we props are default.
    if (!propsData.active) {
      return
    }

    if (index === 0) {
      propsData.activePrevious = propsData.active
    }
    if (index === slots.length - 1) {
      propsData.activeNext = propsData.active
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
  &--vertical {
    flex-direction: column;
  }
}
</style>
