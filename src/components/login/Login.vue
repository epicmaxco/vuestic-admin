<template>
  <div class="login">
    <h1>Welcome!</h1>
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
      <div class="d-flex align-items-center justify-content-between">
        <button class="btn btn-primary" type="submit">
          LOGIN
        </button>
        <router-link to="/signup">Create account</router-link>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    template: 'test',
    beforeCreate () {
      console.log('test')
    }
  }
</script>

<style lang="scss">
  .login {
    h1 {
      text-align: center;
    }
    width: 21.375rem;
  }
</style>
