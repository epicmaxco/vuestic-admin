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
import { useStore } from 'vuex';
import { computed, onBeforeUnmount, onMounted } from 'vue';
import Sidebar from '@/components/sidebar/Sidebar';
import Navbar from '@/components/navbar/Navbar.vue';


export default {
  name: 'app-layout',

  components: {
    Navbar, Sidebar
  },

  setup() {   
    const store = useStore()
    const isSidebarMinimized = computed(() => store.state.isSidebarMinimized)

    const updateSidebarCollapsedState = () => {
      store.commit('updateSidebarCollapsedState', window.innerWidth <= 575)
    }

    onMounted(() => {
      window.addEventListener('resize', updateSidebarCollapsedState)     
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateSidebarCollapsedState)
    })

    updateSidebarCollapsedState()

    return {
      isSidebarMinimized
    }
  }
}
</script>

<style lang="scss" scoped>
.app-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__navbar {
    min-height: 4rem;
  }

  &__content {
    display: flex;
    height: calc(100vh - 4rem);
    position: relative;
    flex: 1;
    .va-sidebar {
      position: relative;
      height: 100%;
    }
    @media screen and (max-width: 950px) {
      height: calc(100vh - 6.5rem);
    }
    .va-sidebar:not(.va-sidebar--minimized) {
      @media screen and (max-width: 575px) {
        width: 100% !important;
        position: absolute;
      }
    }
  }
  &__page {
    flex-grow: 2;
    overflow-y: scroll;
    z-index: 0;
  }
}
</style>
