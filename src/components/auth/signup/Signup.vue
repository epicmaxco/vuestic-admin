<template>
  <div class="signup">
    <h2>{{'auth.createNewAccount' | translate}}</h2>
    <form method="post" action="/auth/signup" name="signup">
      <div class="form-group">
        <vuestic-input :title="$t('auth.email')"/>
      </div>
      <div class="form-group">
        <vuestic-input type="password" :title="$t('auth.password')"/>
      </div>
      <vuestic-checkbox
        :id="'checkbox1'"
        v-model="checkboxOneModel">
        <template slot="label">{{'auth.agree' | translate}}
          <router-link to="">{{'auth.termsOfUse' | translate}}</router-link>
        </template>
      </vuestic-checkbox>
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-between down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.signUp' | translate}}
        </button>
        <router-link class='link' :to="{name: 'login'}">{{'auth.alreadyJoined' | translate}}</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import VuesticInput from './../../../vuestic-theme/vuestic-components/vuestic-input/VuesticInput'

  export default {
    name: 'signup',
    components: {
      VuesticInput
    },
    data () {
      return {
        checkboxOneModel: true
      }
    }
  }
</script>

<style lang="scss">
  .signup {
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

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 2.6875rem;
    }
  }
</style>
