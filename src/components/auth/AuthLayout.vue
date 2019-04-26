<template>
  <div class="auth-layout ma-0 justify--center">
    <div class="flex-center flex-column auth-layout__inner">
      <va-icon-vuestic/>
      <va-card class="auth-layout__form">
        <va-tabs
          v-model="selectedTabIndex"
          slot="header"
          center
        >
          <va-tab
            v-for="title in tabTitles"
            :key="title"
          >
            {{$t(`auth.${title}`)}}
          </va-tab>
        </va-tabs>
        <router-view/>
      </va-card>
    </div>
  </div>
</template>

<script>
// d-none and d-lg-flex were deleted, bug will be fixed in the nearest update
import VaIconVuestic
  from '../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconVuestic'

export default {
  name: 'AuthLayout',
  components: { VaIconVuestic },
  data () {
    return {
      selectedTabIndex: 0,
      tabTitles: ['login', 'createNewAccount'],
    }
  },
  watch: {
    selectedTabIndex (value) {
      if (value === 0) {
        this.$router.push({ name: 'login' })
      }
      if (value === 1) {
        this.$router.push({ name: 'signup' })
      }
    },
    $route (value) {
      this.setSelectedTabIndex()
    },
  },
  mounted () {
    this.setSelectedTabIndex()
  },
  methods: {
    setSelectedTabIndex () {
      if (this.$route.name === 'login') {
        this.selectedTabIndex = 0
      }
      if (this.$route.name === 'signup') {
        this.selectedTabIndex = 1
      }
      if (this.$route.name === 'recover-password') {
        this.selectedTabIndex = 2
      }
    },
  },
}
</script>

<style lang="scss">
.auth-layout {
  min-height: 100vh;
  background-image: linear-gradient(to right, #0e4ac4, #002c85);
  padding-top: 12%;

  &__form {
    max-width: 32.5rem;
    width: 100%;
    .va-card__header {
      border-bottom: 1px solid $light-gray3;
      .va-card__header-inner {
        padding-bottom: 0;
        justify-content: center;
        align-items: flex-end;
      }
    }
  }

  .va-icon-vuestic {
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
    margin-bottom: 5.625rem;
  }

  @include media-breakpoint-down(sm) {
    padding: 8% 5% 0;
  }
}
</style>
