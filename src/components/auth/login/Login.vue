<template>
  <form class="login" @submit.prevent="onsubmit">
      <va-input
        class="mb-2"
        v-model="email"
        type="email"
        :label="$t('auth.email')"
        :error="!!emailErrors.length"
        :error-messages="emailErrors"
      />
    <div>
      <va-input
        class="mb-2"
        v-model="password"
        type="password"
        :label="$t('auth.password')"
        :error="!!passwordErrors.length"
        :error-messages="passwordErrors"
      />
    </div>
    <div class="d-flex align--center justify--space-between mb-4">
      <va-checkbox v-model="keepLoggedIn" class="mb-0" :label="$t('auth.keep_logged_in')"/>
      <router-link class="ml-1" :to="{name: 'recover-password'}">{{$t('auth.recover_password')}}</router-link>
    </div>
    <div class="flex-center">
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
      this.emailErrors = this.email ? [] : ['Email is required']
      this.passwordErrors = this.password ? [] : ['Password is required']
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

}
</style>
