<template>
  <div class="signup row">
    <div class="left-side col-6">
      <div class="content">
        <h1>Welcome!</h1>
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
          <button class="btn btn-primary" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
    <div class="right-side col-6">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'UnauthorizedLayout'
  }
</script>

<style lang="scss">
  .signup {
    height: 100%;
    margin: 0;
    .right-side {
      background-color: #333333;
    }
    .left-side {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
    }
  }
</style>
