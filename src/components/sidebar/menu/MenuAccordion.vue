<template>
  <va-accordion class="sidebar-accordion va-sidebar__menu__inner" v-model="accordionValue" multiply>
    <va-collapse v-for="(route, idx) in items" :key="idx">
      <template #header>
        <va-sidebar-item :active="isRouteActive(route)" :to="route.children ? undefined : { name: route.name }">
          <va-sidebar-item-content>
            <va-icon :name="route.meta.icon" class="va-sidebar-item__icon"/>

            <va-sidebar-item-title>
              {{ $t(route.displayName) }}
            </va-sidebar-item-title>

            <va-icon v-if="route.children" :name="accordionValue[idx] ? 'expand_less' : 'expand_more'" />
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
      <template v-for="(child, index) in route.children" :key="index">
        <va-sidebar-item :active="isRouteActive(child)" :to="{ name: child.name }">
          <va-sidebar-item-content>
            <div class="va-sidebar-item__icon"/>

            <va-sidebar-item-title>
              {{ $t(child.displayName) }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </va-collapse>
  </va-accordion>
</template>

<script>
export default {
  name: "AppMenuAccordion",
  props: {
    items: { type: Array, default: () => [] }
  },
  data () {
    return {
      accordionValue: []
    }
  },
  mounted () {
    this.accordionValue = this.items.map(i => this.isItemExpanded(i));
  },
  methods: {
    isGroup(item) {
      return !!item.children;
    },
    isRouteActive(item) {
      return item.name === this.$route.name;
    },
    isItemExpanded(item) {
      if (!item.children) {
        return false;
      }

      const isCurrentItemActive = this.isRouteActive(item);
      const isChildActive = !!item.children.find(child =>
        child.children ? this.isItemExpanded(child) : this.isRouteActive(child)
      );

      return isCurrentItemActive || isChildActive;
    }
  },
};
</script>

<style lang="scss" scoped>

</style>