<template>
  <div class="color-presentation">
    <va-popover color="info" :placement="popoverOptions.placement" :message="popoverOptions.content">
      <div class="color-presentation__color" :style="computedStyle" @click="colorCopy()"></div>
    </va-popover>

    <div v-if="name || description" class="color-presentation__description">
      <div class="color-presentation__name">{{ name }}</div>
      <div class="color-presentation__text">{{ description }}</div>
    </div>

    <input ref="hiddenInput" :value="computedBackground" class="hidden-input" />
  </div>
</template>

<script setup lang="ts">
  import { useColors, useToast } from 'vuestic-ui'
  import { computed, ref } from 'vue'

  const props = withDefaults(
    defineProps<{
      color?: string
      variant?: string[]
      width?: number
      name?: string
      description?: string
    }>(),
    {
      color: '',
      variant: () => [],
      width: 0,
      name: '',
      description: '',
    },
  )

  const popoverOptions = ref({
    content: 'Click to copy the color to clipboard',
    placement: 'right',
  })

  const { getColor, getGradientBackground } = useColors()

  const computedBackground = computed(() => {
    const color = getColor(props.color)

    if (props.variant.includes('gradient')) {
      return getGradientBackground(color)
    }

    return color
  })

  const computedStyle = computed(() => {
    const calcFilter = () => {
      if (props.variant.includes('hovered')) {
        return 'brightness(115%)'
      }
      if (props.variant.includes('pressed')) {
        return 'brightness(85%)'
      }
    }

    return {
      background: computedBackground.value,
      filter: calcFilter(),
      width: props.width ? `${props.width}px` : '',
    }
  })

  const hiddenInput = ref()

  function colorCopy() {
    navigator.clipboard?.writeText?.(hiddenInput.value.value).then(notify)
  }

  const { init } = useToast()

  function notify() {
    init({
      message: "The color's copied to your clipboard",
      position: 'bottom-right',
      color: getColor(props.color),
    })
  }
</script>

<style lang="scss">
  .color-presentation {
    display: flex;
    align-items: center;
    margin-bottom: 1.125rem;

    .v-popover {
      width: 80px;
      height: 40px;

      span {
        outline: none !important;
      }
    }

    &__color {
      height: 40px;
      width: 80px;
      margin-right: 0.25rem;
      cursor: pointer;
      border-radius: 4px;
      overflow: hidden;
    }

    &__description {
      margin-left: 1rem;
      min-width: 100px;
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
