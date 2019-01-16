<template>
  <div class="login">
    <h2>{{ $t('auth.welcome') }}</h2>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">
            {{ $t('auth.email') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">
            {{ $t('auth.password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div
        class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <va-button type="submit">
          {{ $t('auth.login') }}
        </va-button>
        <va-button flat tag="router-link" :to="{ name: 'signup' }">
          {{ $t('auth.createAccount') }}
        </va-button>
      </div>
    </form>
  </div>
</template>

<script>
import VaButton from '../../../vuestic-theme/vuestic-components/va-button/VaButton'

export default {
  name: 'login',
  components: {
    VaButton
  },
}
</script>

<style lang="scss">
.login {

  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      display: none;
    }
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}
</style>
