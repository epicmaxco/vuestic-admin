<template>
  <form @submit.prevent="onsubmit" class="login">
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
    <div class="va-row align--start justify--space-between mb-3">
      <va-input-wrapper :error="!!agreedToTermsErrors.length" :errorMessages="agreedToTermsErrors">
        <va-checkbox v-model="agreedToTerms" class="mb-0" :error="!!agreedToTermsErrors.length">
          <template slot="label">
            {{ $t('auth.agree') }}
            <span class="link" @click.stop="$router.push('#')">{{ $t('auth.termsOfUse') }}</span>
          </template>
        </va-checkbox>
      </va-input-wrapper>
      <router-link :to="{name: 'recover-password'}" style="line-height: 2rem;">{{$t('auth.recover_password')}}</router-link>
    </div>
    <div class="va-row justify--center">
      <va-button type="submit" class="my-0">{{ $t('auth.sign_up') }}</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'signup',
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
  formReady () {
    return !this.emailErrors.length && !this.passwordErrors.length && !this.agreedToTermsErrors.length
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
        this.agreedToTermsErrors = ['Agree the terms of use']
      } else {
        this.agreedToTermsErrors = []
      }
      if (!this.formReady) {
        return
      }
      this.$router.push({ name: 'dashboard' })
    },
  },
}
</script>
