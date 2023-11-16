<template>
  <VaSidebar :animated="animated" :minimized="minimized" :minimized-width="minimizedWidth" :width="width">
    <MenuMinimized v-if="minimized" :items="items" />
    <MenuAccordion v-else :items="items" />
  </VaSidebar>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
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
</script>

<style lang="scss">
  .va-sidebar {
    &__menu {
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
  }
</style>
