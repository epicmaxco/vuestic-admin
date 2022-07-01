<template>
  <div class="auth-layout row align-content--center">
    <div class="flex xs12 pa-3 flex-center">
      <router-link class="py-5 flex-center" to="/">
        <vuestic-logo height="32" />
      </router-link>
    </div>

    <div class="flex xs12 pa-3">
      <div class="d-flex justify--center">
        <va-card class="auth-layout__card">
          <va-card-content>
            <va-tabs v-model="tabIndex" center>
              <template #tabs>
                <va-tab name="login">{{ t('auth.login') }}</va-tab>
                <va-tab name="signup">{{ t('auth.createNewAccount') }}</va-tab>
              </template>
            </va-tabs>

            <va-separator />

            <div class="pa-3">
              <router-view />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticLogo from '../components/VuesticLogo.vue'
  import { useI18n } from 'vue-i18n'

  export default {
    name: 'AuthLayout',
    components: { VuesticLogo },
    setup() {
      const { t } = useI18n()
      return { t }
    },
    data() {
      return {
        selectedTabIndex: 0,
      }
    },
    computed: {
      tabIndex: {
        set(tabName) {
          this.$router.push({ name: tabName })
        },
        get() {
          return this.$route.name
        },
      },
    },
  }
</script>

<style lang="scss">
  .auth-layout {
    min-height: 100vh;
    background-image: linear-gradient(to right, var(--va-background), var(--va-white));

    &__card {
      width: 100%;
      max-width: 600px;
    }
  }
</style>
