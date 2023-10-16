<template>
  <va-sidebar v-model="writableVisible" :width="sidebarWidth" :color="color">
    <va-accordion v-model="value" multiple>
      <va-collapse v-for="(route, key) in navigationRoutes" :key="key">
        <template #header="{ value: isCollapsed }">
          <va-sidebar-item
            :to="route.path"
            :active="routeHasActiveChild(route)"
            :active-color="activeColor"
            :text-color="routeHasActiveChild(route) ? 'primary' : 'textPrimary'"
            hover-opacity="0.10"
            @click="onSidebarItemClick"
          >
            <va-sidebar-item-content class="py-3 pr-2 pl-4">
              <va-icon :name="route.icon" />
              <va-sidebar-item-title class="flex justify-between">
                {{ route.name }}
                <va-icon v-show="route.children" :name="isCollapsed ? 'va-arrow-up' : 'va-arrow-down'" />
              </va-sidebar-item-title>
            </va-sidebar-item-content>
          </va-sidebar-item>
        </template>
        <template #body>
          <div v-for="(childRoute, key) in route.children" :key="key">
            <va-sidebar-item
              :to="childRoute.path"
              :active="isActiveChildRoute(childRoute)"
              :active-color="activeColor"
              :text-color="isActiveChildRoute(childRoute) ? 'primary' : 'textPrimary'"
              hover-opacity="0.10"
              @click="onSidebarItemClick"
            >
              <va-sidebar-item-content class="py-3 pr-2 pl-11">
                <va-sidebar-item-title>
                  {{ childRoute.name }}
                </va-sidebar-item-title>
              </va-sidebar-item-content>
            </va-sidebar-item>
          </div>
        </template>
      </va-collapse>
    </va-accordion>
    <div class="mt-10">
      <div v-for="(route, key) in navigationRoutes_2" :key="key">
        <va-sidebar-item :to="route.path" :active-color="activeColor" hover-opacity="0.10" @click="onSidebarItemClick">
          <va-sidebar-item-content class="py-3 pr-2 pl-4">
            <va-icon name="tag" />
            <va-sidebar-item-title class="flex justify-between">
              {{ route.name }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </div>
    </div>
    <va-spacer class="mt-10" />
    <div v-for="(route, key) in settings" :key="key">
      <va-sidebar-item :to="route.path" :active-color="activeColor" hover-opacity="0.10" @click="onSidebarItemClick">
        <va-sidebar-item-content class="py-3 pr-2 pl-4">
          <va-icon :name="route.icon" />
          <va-sidebar-item-title class="flex justify-between">
            {{ route.name }}
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </div>
  </va-sidebar>
</template>
<script lang="ts">
  import { defineComponent, watch, ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  import { useColors } from 'vuestic-ui'

  import { navigationRoutes, navigationRoutes_2, settings, type NavigationRoute } from './routes'

  export default defineComponent({
    name: 'AdminSidebar',
    props: {
      visible: { type: Boolean, default: true },
      mobile: { type: Boolean, default: false },
    },
    emits: ['update:visible'],
    setup: (props, { emit }) => {
      const { getColor, colorToRgba } = useColors()
      const route = useRoute()

      const value = ref<boolean[]>([])
      const writableVisible = computed({
        get: () => props.visible,
        set: (v: boolean) => emit('update:visible', v),
      })

      const isActiveChildRoute = (child: NavigationRoute) => route.path === child.path

      const routeHasActiveChild = (section: NavigationRoute) => {
        if (!section.children) {
          return route.path.endsWith(`${section.path}`)
        }

        return section.children.some(({ path }) => route.path.endsWith(`${path}`))
      }

      const setActiveExpand = () => (value.value = navigationRoutes.map((route) => routeHasActiveChild(route) || false))

      const onSidebarItemClick = (section: NavigationRoute) => {
        if (props.mobile && !section.children) {
          emit('update:visible', false)
        }
      }

      const sidebarWidth = computed(() => (props.mobile ? '100%' : '280px'))
      const color = computed(() => getColor('background-secondary'))
      const activeColor = computed(() => colorToRgba(getColor('focus'), 0.1))

      watch(() => route.fullPath, setActiveExpand, { immediate: true })

      return {
        writableVisible,
        sidebarWidth,
        value,
        color,
        activeColor,
        navigationRoutes,
        navigationRoutes_2,
        settings,
        routeHasActiveChild,
        isActiveChildRoute,
        onSidebarItemClick,
      }
    },
  })
</script>
<style lang="scss">
  .va-sidebar__menu {
    padding: 16px 0px;
  }
</style>
