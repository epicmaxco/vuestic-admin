<template>
  <form @submit="onsubmit" class="login">
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
      <va-checkbox v-model="agreedToTerms" class="mb-0" :error="!!agreedToTermsErrors.length">
        <template slot="label">
          {{ $t('auth.agree') }}
          <a class="link" href="#">{{ $t('auth.termsOfUse') }}</a>
        </template>
      </va-checkbox>
      <router-link :to="{name: 'recover-password'}">{{$t('auth.recover_password')}}</router-link>
    </div>
    <div class="va-row justify--center">
      <va-button type="submit" class="my-0">{{ $t('auth.sign_up') }}</va-button>
    </div>
  </form>
</template>

<script>
import VaInputWrapper from '../../../vuestic-theme/vuestic-components/va-input/VaInputWrapper'
export default {
  name: 'signup',
  components: { VaInputWrapper },
  data () {
    return {
      email: '',
      password: '',
      agreedToTerms: false,
      emailErrors: [],
      passwordErrors: [],
      agreedToTermsErrors: [],
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
      if (!this.agreedToTerms) {
        this.agreedToTermsErrors = ['Agree']
      } else {
        this.agreedToTermsErrors = []
      }
      if (!this.emailErrors.length && !this.passwordErrors.length) {
        this.$router.push({ name: 'dashboard' })
      }
    },
  },
}
</script>

<style lang="scss">
</style>
