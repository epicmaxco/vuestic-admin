<template>
  <div class="login">
    <h2 class="login__header">{{'auth.welcome' | translate}}</h2>
    <form method="post" action="/auth/login" name="login">
      <div class="form-group">
        <vuestic-input :title="$t('auth.email')"/>
      </div>
      <div class="form-group">
        <vuestic-input type="password" :title="$t('auth.password')"/>
      </div>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.login' | translate}}
        </button>
        <router-link class='link' :to="{name: 'signup'}">{{'auth.createAccount' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import VuesticInput from './../../../vuestic-theme/vuestic-components/vuestic-input/VuesticInput'

export default {
  name: 'login',
  components: {
    VuesticInput
  }
}
</script>

<style lang="scss">
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }
    .login__header {
      text-align: center;
    }
    width: 21.375rem;
    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
