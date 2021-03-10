<template>
  <div class="app-layout">
    <navbar />
    <div class="app-layout__content">
      <sidebar :minimized="isSidebarMinimized"/>
      <div class="app-layout__page">
        <div class="layout fluid gutter--xl">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTheme } from 'vuestic-ui'
import { useStore } from 'vuex';
import { computed } from 'vue';
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar/Navbar.vue';


export default {
  name: 'app-layout',

  components: {
    Navbar, Sidebar
  },

  setup() {
    const theme = useTheme().getTheme()
    
    const store = useStore()
    const isSidebarMinimized = computed(() => store.state.isSidebarMinimized)

    return {
      theme,
      isSidebarMinimized
    }
  }
}
</script>

<style lang="scss" scoped>
  $navbar-height: 4rem;

  .app-layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
    &__content {
      display: flex;
      height: calc(100vh - 4rem);
      .va-sidebar {
        position: relative;
        height: 100%;
      }
    }
    &__page {
      flex-grow: 2;
      overflow-y: scroll;
    }
  }
</style>
