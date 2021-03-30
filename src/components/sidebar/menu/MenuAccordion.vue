<template>
  <va-accordion class="sidebar-accordion" v-model="accordionValue" multiply>
    <va-collapse v-for="(route, idx) in items" :key="idx">
      <template #header>
        <sidebar-item
          v-if="isGroup(route)"
          :title="$t(route.displayName)"
          :icon="route.meta.icon"
          :group-expanded="accordionValue[idx]"
        />
        <sidebar-item
          v-else
          :title="$t(route.displayName)"
          :icon="route.meta.icon"
          :to="{ name: route.name }"
          :active="isActiveRoute(route)"
        />
      </template>
      <template v-for="(child, index) in route.children" :key="index">
        <sidebar-item
          :title="$t(child.displayName)"
          :icon="''"
          :to="{ name: child.name }"
          :active="isActiveRoute(child)"
        />
      </template>
    </va-collapse>
  </va-accordion>
</template>

<script>
import SidebarItem from "../SidebarItem";

export default {
  name: "AppMenuAccordion",
  components: { SidebarItem },
  props: {
    items: { type: Array, default: () => [] }
  },
  computed: {
    accordionValue() {
      return this.items.map(i => this.isItemExpanded(i));
    }
  },
  methods: {
    isGroup(item) {
      return !!item.children;
    },
    isActiveRoute(item) {
      return item.name === this.$route.name;
    },
    isItemExpanded(item) {
      if (!item.children) {
        return false;
      }

      const isCurrentItemActive = this.isActiveRoute(item);
      const isChildActive = !!item.children.find(child =>
        child.children ? this.isItemExpanded(child) : this.isActiveRoute(child)
      );

      return isCurrentItemActive || isChildActive;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>