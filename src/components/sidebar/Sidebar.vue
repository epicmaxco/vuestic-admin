<template>
  <va-sidebar
    :width="width"
    :minimized="minimized"
    :minimized-width="minimizedWidth"
    :animated="animated"
    :hover-color="pictonBlue"
    :hover-opacity="0.1"
    :active-color="lightPictonBlue"
  >
    <menu-minimized v-if="minimized" :items="items" />
    <menu-accordion v-else :items="items" />
  </va-sidebar>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useColors } from 'vuestic-ui'
  import NavigationRoutes from './NavigationRoutes'
  import MenuAccordion from './menu/MenuAccordion.vue'
  import MenuMinimized from './menu/MenuMinimized.vue'

  withDefaults(
    defineProps<{
      width?: string
      color?: string
      animated?: boolean
      minimized?: boolean
      minimizedWidth?: string
    }>(),
    {
      width: '16rem',
      color: 'secondary',
      animated: true,
      minimized: true,
      minimizedWidth: undefined,
    },
  )

  const items = ref(NavigationRoutes.routes)
  const pictonBlue = useColors().getColor('picton-blue')
  const lightPictonBlue = useColors().setHSLAColor(pictonBlue, { a: 0.1 })
</script>

<style lang="scss">
  .va-sidebar {
    &__menu {
      background-color: var(--va-white, #fff);
      padding: 2rem 0;
    }

    &-item {
      &__icon {
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__title {
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1.4;
    }
  }
</style>
