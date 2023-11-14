<template>
  <div class="flex gap-2">
    <VaIconMenuCollapsed
      :class="{ 'x-flip': isSidebarMinimized }"
      :color="collapseIconColor"
      @click="isSidebarMinimized = !isSidebarMinimized"
    />

    <VaBreadcrumbs>
      <va-breadcrumbs-item v-for="item in items" :key="item.label" :label="item.label" />
    </VaBreadcrumbs>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'
  import VaIconMenuCollapsed from '../icons/VaIconMenuCollapsed.vue'
  import { storeToRefs } from 'pinia'
  import { useGlobalStore } from '../../stores/global-store'

  const { isSidebarMinimized } = storeToRefs(useGlobalStore())

  const route = useRoute()
  const { t } = useI18n()

  const items = computed(() => {
    return route.matched.map((route) => {
      return {
        label: t(route.name),
        to: route.path,
      }
    })
  })

  const { getColor } = useColors()

  const collapseIconColor = computed(() => getColor('secondary'))
</script>

<style lang="scss" scoped>
  .x-flip {
    transform: scaleX(-100%);
  }
</style>
