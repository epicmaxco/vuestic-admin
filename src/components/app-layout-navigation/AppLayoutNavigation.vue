<template>
  <div class="flex gap-2">
    <VaIconMenuCollapsed
      class="cursor-pointer"
      :class="{ 'x-flip': !isSidebarMinimized }"
      :color="collapseIconColor"
      @click="isSidebarMinimized = !isSidebarMinimized"
    />

    <nav class="flex items-center">
      <VaBreadcrumbs>
        <VaBreadcrumbsItem label="Home" :to="{ name: 'dashboard' }" />
        <VaBreadcrumbsItem
          v-for="item in items"
          :key="item.label"
          :label="item.label"
          @click="handleBreadcrumbClick(item)"
        />
      </VaBreadcrumbs>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useColors } from 'vuestic-ui'
import VaIconMenuCollapsed from '../icons/VaIconMenuCollapsed.vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '../../stores/global-store'
import NavigationRoutes from '../sidebar/NavigationRoutes'

const { isSidebarMinimized } = storeToRefs(useGlobalStore())

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

type BreadcrumbNavigationItem = {
  label: string
  to: string
  hasChildren: boolean
}

const findRouteName = (name: string) => {
  const traverse = (routers: any[]): string => {
    for (const router of routers) {
      if (router.name === name) {
        return router.displayName
      }
      if (router.children) {
        const result = traverse(router.children)
        if (result) {
          return result
        }
      }
    }
    return ''
  }

  return traverse(NavigationRoutes.routes)
}

const items = computed(() => {
  const result: { label: string; to: string; hasChildren: boolean }[] = []
  route.matched.forEach((route) => {
    const labelKey = findRouteName(route.name as string)
    if (!labelKey) {
      return
    }
    result.push({
      label: t(labelKey),
      to: route.path,
      hasChildren: route.children && route.children.length > 0,
    })
  })
  return result
})

const { getColor } = useColors()

const collapseIconColor = computed(() => getColor('secondary'))

const handleBreadcrumbClick = (item: BreadcrumbNavigationItem) => {
  if (!item.hasChildren) {
    router.push(item.to)
  }
}
</script>

<style lang="scss" scoped>
.x-flip {
  transform: scaleX(-100%);
}
</style>
