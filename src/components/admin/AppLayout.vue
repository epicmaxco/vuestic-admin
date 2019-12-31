<template>
  <app-page-layout
    class="app-layout"
    :is-top-bar.sync="isTopBar"
    :minimized.sync="minimized"
    :mobile-width="mobileWidth"
  >
    <app-navbar
      class="app-layout__navbar"
      :is-top-bar.sync="isTopBar"
      :minimized.sync="minimized"
    />
    <app-topbar
      class="app-layout__topbar"
      v-if="isTopBar"
    />
    <div class="app-layout__container">
      <app-sidebar
        class="app-layout__sidebar"
        v-if="!isTopBar"
        :minimized="minimized"
      />
      <div
        class="app-layout__main"
        :class="{'app-layout__main--top': isTopBar}"
      >
        <main
          class="app-layout__main-layout layout fluid gutter--xl"
          slot="content"
          role="main"
        >
          <router-view/>
        </main>
      </div>
    </div>
  </app-page-layout>
</template>

<script>
import AppPageLayout from './AppPageLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppTopbar from './app-topbar/AppTopbar'
import AppSidebar from './app-sidebar/AppSidebar'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    AppPageLayout,
    AppNavbar,
    AppTopbar,
    AppSidebar,
  },
  data () {
    return {
      isTopBar: false,
      minimized: false,
      mobileWidth: 767,
    }
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>

<style lang="scss">

.app-layout {
  display: flex;
  flex-direction: column;

  &__container {
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    // TODO Probably there is a better way to achieve this.
    height: calc(100% - 65px);

    @include media-breakpoint-down(sm) {
      height: calc(100% - 110px);
    }
  }

  &__main {
    box-sizing: border-box;
    width: 100%;
    position: relative;
    max-height: 100%;
    min-height: 100%;

    &--top {
    }

    &-layout {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      overflow: auto;
      box-sizing: border-box;
      min-height: 100%;
      margin: 0;
    }
  }
}
</style>
