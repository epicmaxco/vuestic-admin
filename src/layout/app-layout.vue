<template>
  <div class="app-layout">
    <navbar />
    <div class="app-layout__content">
      <sidebar/>
      <div class="app-layout__page">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import { useTheme } from 'vuestic-ui'
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar/Navbar.vue';

export default {
  name: 'app-layout',

  components: {
    Navbar, Sidebar
  },

  computed: {
    theme() {
      const theme = useTheme()
      return theme ? theme.getTheme() : null
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
