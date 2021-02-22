<template>
  <div class="app-layout">
    <va-navbar class="app-layout__navbar">
      test
      <template v-slot:logo>
        <vuestic-logo/>
      </template>
      <template v-slot:center>
        <span
          class="app-navbar__text"
          style="color: #f3f3f3"
        >
          <!-- :style="{color: this.$themes.gray}" -->
          {{$t('navbar.messageUs')}}&nbsp;
          <a
            href="mailto:hello@epicmax.co"
            target="_blank"
          >
            <!-- :style="{color: this.$themes.primary}" -->
            hello@epicmax.co
          </a>
        </span>
      </template>
    </va-navbar>
    <div class="app-layout__content">
      <sidebar/>
      <router-view class="app-layout__page"/>
    </div>
  </div>
</template>

<script>
import { useTheme } from 'vuestic-ui'
import VuesticLogo from './components/vuestic-logo.vue'
import Sidebar from './components/sidebar.vue';

export default {
  name: 'app-layout',

  components: {
    VuesticLogo, Sidebar
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
