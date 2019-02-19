<template>
  <div class="login">
    <div class="display-2 text--center my-4">{{ $t('auth.welcome') }}</div>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">
            {{ $t('auth.email') }}
          </label>
          <va-icon icon="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">
            {{ $t('auth.password') }}
          </label>
          <va-icon icon="bar"/>
        </div>
      </div>
      <div
        class="d-flex align--center justify--space-between">
        <va-button type="submit">
          {{ $t('auth.login') }}
        </va-button>
        <va-button flat :to="{ name: 'signup' }">
          {{ $t('auth.createAccount') }}
        </va-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss">
.login {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding: 0 2rem;
  }

  width: 21.375rem;
}
</style>
