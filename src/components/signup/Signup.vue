<template>
  <div class="signup">
    <h2>Create New Account</h2>
    <form method="post" action="#" name="signup">
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" required="required"/>
          <label class="control-label" for="email">EMAIL</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" required="required"/>
          <label class="control-label" for="password">PASSWORD</label><i class="bar"></i>
        </div>
      </div>
      <div class="abc-checkbox abc-checkbox-primary">
        <input id="checkbox1" type="checkbox">
        <label for="checkbox1">
          <span class="abc-label-text">I agree to <router-link to="">Terms of Use.</router-link></span>
        </label>
      </div>
      <div class="d-flex align-items-center justify-content-between down-container">
        <button v-on:click="handler" class="btn btn-primary" type="submit">
          SIGN UP
        </button>
        <router-link to="/login">Already joined?</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'signup',
    methods: {
      ...mapMutations(['authorize']),
      handler () {
        this.authorize(true)
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../node_modules/bootstrap/scss/variables';
  @import '../../sass/variables';
  .signup {
    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 2.3125rem;
    }
  }
</style>
