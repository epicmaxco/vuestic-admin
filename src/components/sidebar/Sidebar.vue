<template>
  <va-sidebar :width="width" :minimized="minimized" :minimized-width="minimizedWidth">
    <menu-minimized v-if="minimized" :items="items" />
    <menu-accordion v-else :items="items" />
  </va-sidebar>
</template>

<script setup lang="ts">
  import { computed, ref } from "vue";
  import NavigationRoutes from "./NavigationRoutes";

  import { useGlobalConfig } from "vuestic-ui";
  import MenuAccordion from "./menu/MenuAccordion.vue";
  import MenuMinimized from "./menu/MenuMinimized.vue";

  const props = withDefaults(
    defineProps<{
      width?: string;
      color?: string;
      minimized?: boolean;
      minimizedWidth?: string;
    }>(),
    {
      width: "16rem",
      color: "secondary",
      minimized: true,
      minimizedWidth: undefined,
    },
  );

  console.log(props.minimized, props.width, props.minimizedWidth);

  const items = ref(NavigationRoutes.routes);

  const computedClass = computed(() => {
    return {
      "app-sidebar--minimized": props.minimized,
    };
  });

  const colors = computed(() => useGlobalConfig().getGlobalConfig().colors);
</script>

<style lang="scss">
  .va-sidebar {
    .va-collapse__body {
      margin-top: 0 !important;
    }

    &__menu {
      padding: 2rem 0;
      &__inner {
        padding-bottom: 8rem;
      }
    }

    &-item {
      &-content {
        padding: 0.75rem 1rem;
      }

      &__icon {
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .va-sidebar {
    flex-shrink: 0;
  }
</style>
