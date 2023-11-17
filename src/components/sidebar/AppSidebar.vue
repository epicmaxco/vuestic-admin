<template>
  <va-sidebar v-model="writableVisible" :width="sidebarWidth" :color="color" :minimized="mobile">
    <va-accordion v-model="value" multiple>
      <va-collapse v-for="(route, key) in navigationRoutes.routes" :key="key">
        <template #header="{ value: isCollapsed }">
          <va-sidebar-item
            :to="route.children ? undefined : { name: route.name }"
            :active="routeHasActiveChild(route)"
            :active-color="activeColor"
            :text-color="textColor(route)"
            hover-opacity="0.10"
          >
            <va-sidebar-item-content class="py-3 pr-2 pl-4">
              <va-icon :name="route.meta.icon" size="20px" :color="iconColor(route)" />
              <va-sidebar-item-title class="flex justify-between items-center leading-5 font-semibold">
                {{ t(route.displayName) }}
                <va-icon v-if="route.children" :name="arrowDirection(isCollapsed)" size="20px" />
              </va-sidebar-item-title>
            </va-sidebar-item-content>
          </va-sidebar-item>
        </template>
        <template #body>
          <div v-for="(childRoute, key) in route.children" :key="key">
            <va-sidebar-item
              :to="{ name: childRoute.name }"
              :active="isActiveChildRoute(childRoute)"
              :active-color="activeColor"
              :text-color="textColor(childRoute)"
              hover-opacity="0.10"
            >
              <va-sidebar-item-content class="py-3 pr-2 pl-11">
                <va-sidebar-item-title class="leading-5 font-semibold">
                  {{ t(childRoute.displayName) }}
                </va-sidebar-item-title>
              </va-sidebar-item-content>
            </va-sidebar-item>
          </div>
        </template>
      </va-collapse>
    </va-accordion>
  </va-sidebar>
</template>
<script lang="ts">
  import { defineComponent, watch, ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'

  import navigationRoutes, { type INavigationRoute } from './NavigationRoutes'

  export default defineComponent({
    name: 'Sidebar',
    props: {
      visible: { type: Boolean, default: true },
      mobile: { type: Boolean, default: false },
    },
    emits: ['update:visible'],

    setup: (props, { emit }) => {
      const { getColor, colorToRgba } = useColors()
      const route = useRoute()
      const { t } = useI18n()

      const value = ref<boolean[]>([])

      const writableVisible = computed({
        get: () => props.visible,
        set: (v: boolean) => emit('update:visible', v),
      })

      const isActiveChildRoute = (child: INavigationRoute) => route.name === child.name

      const routeHasActiveChild = (section: INavigationRoute) => {
        if (!section.children) {
          return route.path.endsWith(`${section.name}`)
        }

        return section.children.some(({ name }) => route.path.endsWith(`${name}`))
      }

      const setActiveExpand = () =>
        (value.value = navigationRoutes.routes.map((route: INavigationRoute) => routeHasActiveChild(route)))

      const sidebarWidth = computed(() => (props.mobile ? '100%' : '280px'))
      const color = computed(() => getColor('background-secondary'))
      const activeColor = computed(() => colorToRgba(getColor('focus'), 0.1))

      const iconColor = (route: INavigationRoute) => (routeHasActiveChild(route) ? 'primary' : 'secondary')
      const textColor = (route: INavigationRoute) => (routeHasActiveChild(route) ? 'primary' : 'textPrimary')
      const arrowDirection = (state: boolean) => (state ? 'va-arrow-up' : 'va-arrow-down')

      watch(() => route.fullPath, setActiveExpand, { immediate: true })

      return {
        writableVisible,
        sidebarWidth,
        value,
        color,
        activeColor,
        navigationRoutes,
        routeHasActiveChild,
        isActiveChildRoute,
        t,
        iconColor,
        textColor,
        arrowDirection,
      }
    },
  })
</script>
