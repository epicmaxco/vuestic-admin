<template>
  <div class="signup">
    <h2>{{ $t('auth.createNewAccount') }}</h2>
    <form method="post" action="/#/auth/signup" name="signup">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">{{ $t('auth.email') }}</label><va-icon icon="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">{{ $t('auth.password') }}</label><va-icon icon="bar"/>
        </div>
      </div>
      <vuestic-checkbox name="agree-to-terms" v-model="agreedToTerms">
        <template slot="label">
          {{ $t('auth.agree') }}
          <a class="link" href="#">{{ $t('auth.termsOfUse') }}</a>
        </template>
      </vuestic-checkbox>
      <div
        class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <va-button type="submit">
          {{ $t('auth.signUp') }}
        </va-button>
        <va-button flat :to="{ name: 'login' }">
          {{ $t('auth.alreadyJoined') }}
        </va-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
      agreedToTerms: true,
    }
  },
}
</script>

<style lang="scss">
.signup {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 2.6875rem;
  }
}
</style>
