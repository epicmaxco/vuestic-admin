<template>
  <div class="login">
    <h2>Welcome!</h2>
    <form method="post" action="#" name="login">
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
      <div class="d-flex align-items-center justify-content-between down-container">
        <button v-on:click="asdf" class="btn btn-primary" type="submit">
          LOGIN
        </button>
        <router-link to="/signup">Create account</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    name: 'login',
    methods: {
      ...mapMutations(['authorize']),
      asdf () {
        this.authorize(true)
        this.$router.push({path: '/'})
      }
    }
  }
</script>

<style lang="scss">
  .login {
    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
