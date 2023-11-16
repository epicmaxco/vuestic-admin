<template>
  <VaDropdown
    v-for="(route, idx) in items"
    :key="idx"
    v-model="dropdownsValue[idx]"
    placement="right-start"
    prevent-overflow
    :offset="[1, 0]"
  >
    <template #anchor>
      <VaSidebarItem :active="isItemChildsActive(route)" :to="route.children ? undefined : { name: route.name }">
        <VaSidebarItemContent>
          <VaIcon :name="route.meta.icon" class="va-sidebar-item__icon" />
          <VaIcon
            v-if="route.children"
            class="more_icon"
            :name="dropdownsValue[idx] ? 'chevron_left' : 'chevron_right'"
          />
        </VaSidebarItemContent>
      </VaSidebarItem>
    </template>
    <div class="sidebar-item__children">
      <template v-for="(child, index) in route.children" :key="index">
        <VaSidebarItem :active="isRouteActive(child)" :to="{ name: child.name }">
          <VaSidebarItemContent>
            <VaSidebarItemTitle>
              {{ t(child.displayName) }}
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </template>
    </div>
  </VaDropdown>
</template>

<script setup lang="ts">
  import { INavigationRoute } from '../NavigationRoutes'
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  withDefaults(
    defineProps<{
      items?: INavigationRoute[]
    }>(),
    {
      items: () => [],
    },
  )

  const dropdownsValue = ref([])

  // function isGroup(item: INavigationRoute) {
  //   return !!item.children
  // }

  function isRouteActive(item: INavigationRoute) {
    return item.name === useRoute().name
  }

  function isItemChildsActive(item: INavigationRoute): boolean {
    if (!item.children) {
      return false
    }

    const isCurrentItemActive = isRouteActive(item)

    let isChildActive = false
    if (item.children) {
      isChildActive = !!item.children.find((child) =>
        child.children ? isItemChildsActive(child) : isRouteActive(child),
      )
    }

    return isCurrentItemActive || isChildActive
  }
</script>

<style lang="scss">
  .sidebar-item {
    &__children {
      max-height: 60vh;
      overflow-y: auto;
      overflow-x: visible;
      width: 16rem;
      color: var(--va-gray);
      background: var(--va-white, #fff);
      box-shadow: var(--va-box-shadow);
    }
  }

  .va-sidebar-item {
    &-content {
      position: relative;

      .more_icon {
        text-align: center;
        position: absolute;
        bottom: 0.5rem;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
</style>
