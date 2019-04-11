<template>
  <form class="login" @submit="onsubmit">
    <div class="va-row mb-4">
      <va-input
        v-model="email"
        type="email"
        :label="$t('auth.email')"
        :error="!!emailErrors.length"
        :error-messages="emailErrors"
      />
    </div>
    <div class="va-row mb-4">
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
  components: {},
  data () {
    return {
      email: '',
      password: '',
      keepLoggedIn: false,
      emailErrors: [],
      passwordErrors: [],
    }
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
      if (!this.emailErrors.length && !this.passwordErrors.length) {
        this.$router.push({ name: 'dashboard' })
      }
    },
  },
}
</script>

<style lang="scss">
.login {
  background: $white;
  width: 32.5rem;
  padding: 2.875rem 5rem 1.875rem;
  @include media-breakpoint-down(md) {
    width: 100%;
  }
  &__actions {
    margin-bottom: 2rem;
  }
}
</style>
