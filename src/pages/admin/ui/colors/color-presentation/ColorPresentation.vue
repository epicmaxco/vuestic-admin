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
  import { computed, defineProps, ref } from 'vue'

  const props = withDefaults(
    defineProps<{
      color?: string
      variant?: string[]
      width: number
      name?: string
      description?: string
    }>(),
    {
      color: '',
      variant: () => [],
      name: '',
      description: '',
    },
  )

  const popoverOptions = ref({
    content: 'Click to copy the color to clipboard',
    placement: 'right',
  })

  const computedBackground = computed(() => {
    const { getColor, getGradientBackground } = useColors()

    const colorComputed = getColor(props.color)

    if (props.variant.includes('gradient')) {
      return getGradientBackground(colorComputed)
    }

    return colorComputed
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
    hiddenInput.value.select()
    document.execCommand('copy')
    notify()
  }

  function notify() {
    useToast().init({
      message: "The color's copied to your clipboard",
      position: 'bottom-right',
    })
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
