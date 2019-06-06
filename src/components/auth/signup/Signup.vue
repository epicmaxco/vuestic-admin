<template>
  <form class="signup" @submit.prevent="onsubmit()">
    <va-input
      class="mb-4"
      v-model="email"
      type="email"
      :label="$t('auth.email')"
      :error="!!emailErrors.length"
      :error-messages="emailErrors"
    />
    <va-input
      class="mb-4"
      v-model="password"
      type="password"
      :label="$t('auth.password')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />
    <div class="d-flex align--center justify--space-between mb-4">
      <va-checkbox
        v-model="agreedToTerms"
        class="mb-0"
        :error="!!agreedToTermsErrors.length"
        :errorMessages="agreedToTermsErrors"
      >
        <template slot="label">
          {{ $t('auth.agree') }}
          <span class="link">{{ $t('auth.termsOfUse') }}</span>
        </template>
      </va-checkbox>
      <router-link class="ml-1" :to="{name: 'recover-password'}">
        {{$t('auth.recover_password')}}
      </router-link>
    </div>
    <div class="flex-center">
      <va-button type="submit" class="my-0">{{ $t('auth.sign_up') }}</va-button>
    </div>
  </form>
</template>

<script>
import VaInputWrapper
  from '../../../vuestic-theme/vuestic-components/va-input/VaInputWrapper'

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
      this.emailErrors = this.email ? [] : ['Email is required']
      this.passwordErrors = this.password ? [] : ['Password is required']
      this.agreedToTermsErrors = this.agreedToTerms ? [] : ['You must agree to the terms of use to continue']
      if (!this.formReady) {
        return
      }
      this.$router.push({ name: 'dashboard' })
    },
  },
  computed: {
    formReady () {
      return !(this.emailErrors.length || this.passwordErrors.length || this.agreedToTermsErrors.length)
    },
  },
}
</script>

<style lang="scss">
@import '../../../vuestic-theme/vuestic-sass/resources/resources';

.login {

}
</style>
