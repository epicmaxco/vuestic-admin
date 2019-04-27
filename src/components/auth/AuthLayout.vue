<template>
  <div class="auth-layout flex-center flex-column">
    <router-link class="auth-layout__container" to="/">
      <va-icon-vuestic class="auth-layout__logo"/>
    </router-link>

    <div class="auth-layout__card">
      <va-card>
        <va-tabs
          v-model="tabIndex"
          center
        >
          <va-tab>
            {{$t('auth.login')}}
          </va-tab>
          <va-tab>
            {{$t('auth.createNewAccount')}}
          </va-tab>
        </va-tabs>
        <va-separator/>

        <div class="auth-layout__form">
          <router-view/>
        </div>
      </va-card>
    </div>
  </div>
</template>

<script>
import VaIconVuestic
  from '../../vuestic-theme/vuestic-components/va-icon/va-iconset/VaIconVuestic'
import VaSeparator
  from '../../vuestic-theme/vuestic-components/va-card/VaSeparator'

const tabs = [
  'login',
  'signup',
]

export default {
  name: 'AuthLayout',
  components: { VaSeparator, VaIconVuestic },
  data () {
    return {
      selectedTabIndex: 0,
      tabTitles: ['login', 'createNewAccount'],
    }
  },
  computed: {
    tabIndex: {
      set (tabIndex) {
        this.$router.push({ name: tabs[tabIndex] })
      },
      get () {
        return tabs.indexOf(this.$route.name)
      },
    },
  },
}
</script>

<style lang="scss">
@import "../../vuestic-theme/vuestic-sass/resources/resources";

.auth-layout {
  min-height: 100vh;
  background-image: linear-gradient(to right, #0e4ac4, #002c85);
  padding: 1rem;

  &__card {
    height: 30rem;
    @include media-breakpoint-down(xs) {
      width: 100%;
    }
  }

  &__form {
    padding: .875rem 0 0;
    @include media-breakpoint-up(sm) {
      padding: 2.875rem 3.75rem .625rem;
      width: 30rem;
    }
  }

  &__container {
    height: $auth-logo-height;
    width: 100%;
    margin-bottom: 5.625rem;
  }

  &__logo {
    height: 100%;
    width: 100%;
    margin-bottom: 5.625rem;
  }

  @include media-breakpoint-down(sm) {
    padding-top: 6%;
  }
}
</style>
