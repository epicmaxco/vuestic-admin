<template>
  <va-dropdown
    v-for="(route, idx) in items"
    :key="idx"
    v-model="dropdownsValue[idx]"
    position="right"
    fixed
    :offset="[0, 8]"
    :prevent-overflow="false"
  >
    <template #anchor>
      <va-sidebar-item :active="isItemChildsActive(route)" :to="route.children ? undefined : { name: route.name }">
        <va-sidebar-item-content>
          <va-sidebar-item-title>
            <va-icon :name="route.meta.icon" class="va-sidebar-item__icon" />
          </va-sidebar-item-title>
          <va-icon
            v-if="route.children"
            class="more_icon"
            :name="dropdownsValue[idx] ? 'chevron_left' : 'chevron_right'"
          />
        </va-sidebar-item-content>
      </va-sidebar-item>
    </template>
    <div class="sidebar-item__children">
      <template v-for="(child, index) in route.children" :key="index">
        <va-sidebar-item :active="isRouteActive(child)" :to="{ name: child.name }">
          <va-sidebar-item-content>
            <va-sidebar-item-title>
              {{ t(child.displayName) }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </div>
  </va-dropdown>
</template>

<script setup lang="ts">
  import { useGlobalConfig } from "vuestic-ui";
  import { INavigationRoute } from "../NavigationRoutes";
  import { computed, ref } from "vue";
  import { useRoute } from "vue-router";
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  const props = withDefaults(
    defineProps<{
      items?: INavigationRoute[];
    }>(),
    {
      items: () => [],
    },
  );

  const dropdownsValue = ref<INavigationRoute[]>([]);

  const theme = computed(() => useGlobalConfig().getGlobalConfig().colors);

  function isGroup(item: INavigationRoute) {
    return !!item.children;
  }

  function isRouteActive(item: INavigationRoute) {
    return item.name === useRoute().name;
  }

  function isItemChildsActive(item: INavigationRoute) {
    if (!item.children) {
      return false;
    }

    const isCurrentItemActive = isRouteActive(item);
    const isChildActive = !!item.children.find((child) =>
      child.children ? isItemChildsActive(child) : isRouteActive(child),
    );

    return isCurrentItemActive || isChildActive;
  }
</script>

<style lang="scss" scoped>
  .sidebar-item {
    position: relative;
    &__children {
      max-height: 60vh;
      overflow-y: auto;
      overflow-x: visible;
      min-width: 8rem;
      color: var(--va-gray);
      background: var(--va-white);
      box-shadow: var(--va-box-shadow);
    }
  }

  .va-sidebar-item {
    &__icon {
      margin: 0;
    }

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
