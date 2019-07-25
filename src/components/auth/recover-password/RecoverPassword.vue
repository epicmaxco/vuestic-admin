<template>
  <form @submit.prevent="onsubmit" class="login">
    <div class="row mb-2">
      <va-input
        v-model="email"
        type="email"
        :label="$t('auth.email')"
        :error="!!emailErrors.length"
        :error-messages="emailErrors"
      />
    </div>
    <div class="row justify--center">
      <va-button type="submit" class="my-0">{{ $t('auth.reset_password') }}</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'recover-password',
  data () {
    return {
      email: '',
      emailErrors: [],
    }
  },
  methods: {
    onsubmit () {
      if (!this.email) {
        this.emailErrors = ['Email is required']
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss">
</style>
