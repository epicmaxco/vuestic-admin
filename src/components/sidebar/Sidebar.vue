<template>
  <va-sidebar :minimized="minimized" :style="{ color: theme.gray }">
    <menu-minimized v-if="minimized" :items="items" />
    <menu-accordion v-else :items="items" />
  </va-sidebar>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui';
import MenuAccordion from './menu/MenuAccordion.vue';
import MenuMinimized from './menu/MenuMinimized.vue';
import NavigationRoutes from './NavigationRoutes';


export default {
  name: "app-sidebar",
  components: {
    MenuAccordion,
    MenuMinimized,
  },
  props: {
    minimized: {
      type: Boolean,
      required: true
    },
    color: {
      type: String,
      default: "secondary"
    }
  },
  data() {
    return {
      items: NavigationRoutes.routes,
    };
  },
  computed: {
    computedClass() {
      return {
        "app-sidebar--minimized": this.minimized
      };
    },
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    },
  },
};
</script>

<style lang="scss">
.va-sidebar {
  .va-collapse__body {
    margin-top: 0 !important;
  }
}
</style>

<style lang="scss" scoped>
.va-sidebar {
  padding: 2rem 0;
  flex-shrink: 0;
}

.va-sidebar--minimized {
  width: auto !important;
}
</style>
