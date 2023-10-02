<template>
  <va-accordion v-model="accordionValue" class="sidebar-accordion va-sidebar__menu__inner" multiple>
    <va-collapse v-for="(route, idx) in items" :key="idx">
      <template #header>
        <va-sidebar-item :active="isRouteActive(route)" :to="route.children ? undefined : { name: route.name }">
          <va-sidebar-item-content class="p-0" :class="{ 'va-sidebar-item--active': isRouteActive(route) }">
            <va-icon
              :name="route.meta.icon"
              class="va-sidebar-item__symbol"
              :class="{ 'va-sidebar-item--active': isRouteActive(route) }"
              size="1.25rem"
            />

            <va-sidebar-item-title>
              {{ t(route.displayName) }}
            </va-sidebar-item-title>

            <va-icon
              v-if="route.children"
              color="secondary"
              :name="accordionValue[idx] ? 'expand_less' : 'expand_more'"
            />
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
      <template v-for="(child, index) in route.children" :key="index">
        <va-sidebar-item :active="isRouteActive(child)" :to="{ name: child.name }">
          <va-sidebar-item-content class="p-0 pl-7" :class="{ 'va-sidebar-item--active': isRouteActive(child) }">
            <va-sidebar-item-title>
              {{ t(child.displayName) }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </va-collapse>
  </va-accordion>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { INavigationRoute } from '../NavigationRoutes'
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const props = withDefaults(
    defineProps<{
      items?: INavigationRoute[]
    }>(),
    {
      items: () => [],
    },
  )

  const accordionValue = ref<boolean[]>([])

  onMounted(() => {
    accordionValue.value = props.items.map((item) => isItemExpanded(item))
  })

  // function isGroup(item: INavigationRoute) {
  //   return !!item.children
  // }

  function isRouteActive(item: INavigationRoute) {
    return item.name === useRoute().name
  }

  function isItemExpanded(item: INavigationRoute): boolean {
    if (!item.children) {
      return false
    }

    const isCurrentItemActive = isRouteActive(item)
    const isChildActive = !!item.children.find((child) =>
      child.children ? isItemExpanded(child) : isRouteActive(child),
    )

    return isCurrentItemActive || isChildActive
  }
</script>

<style>
  .va-sidebar-item {
    border-left: initial;
    padding: 0.75rem 0.5rem 0.75rem 1rem;
  }
  .va-sidebar__item__content {
    min-height: initial;
  }
  .va-sidebar-item__symbol {
    font-family: 'Material Symbols Outlined';
    color: var(--va-secondary);
    width: 1.25rem;
  }
  .va-sidebar-item--active {
    color: var(--va-primary);
  }
  .va-collapse {
    cursor: pointer;
  }
  .va-collapse__content {
    padding: 0;
  }
</style>
