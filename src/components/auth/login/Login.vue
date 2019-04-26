<template>
  <form class="login" @submit.prevent="onsubmit">
    <div class="va-row mb-2">
      <va-input
        v-model="email"
        type="email"
        :label="$t('auth.email')"
        :error="!!emailErrors.length"
        :error-messages="emailErrors"
      />
    </div>
    <div class="va-row mb-2">
      <va-input
        v-model="password"
        type="password"
        :label="$t('auth.password')"
        :error="!!passwordErrors.length"
        :error-messages="passwordErrors"
      />
    </div>
    <div class="va-row align--center justify--space-between login__actions">
      <va-checkbox v-model="keepLoggedIn" class="mb-0" :label="$t('auth.keep_logged_in')"/>
      <router-link :to="{name: 'recover-password'}">{{$t('auth.recover_password')}}</router-link>
    </div>
    <div class="va-row justify--center">
      <va-button type="submit" class="my-0">{{ $t('auth.login') }}</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      keepLoggedIn: false,
      emailErrors: [],
      passwordErrors: [],
    }
  },
  computed: {
    formReady () {
      return !this.emailErrors.length && !this.passwordErrors.length
    },
  },
  methods: {
    onsubmit () {
      if (!this.email) {
        this.emailErrors = ['Email is required']
      } else {
        this.emailErrors = []
      }
      if (!this.password) {
        this.passwordErrors = ['Password is required']
      } else {
        this.passwordErrors = []
      }
      if (!this.formReady) {
        return
      }
      this.$router.push({ name: 'dashboard' })
    },
  },
}
</script>

<style lang="scss">
.login {
  padding: 2.875rem 3.75rem .625rem;
  @include media-breakpoint-down(sm){
    padding: .875rem 0 0;
  }
  &__actions {
    margin-bottom: 2rem;
  }
}
</style>
