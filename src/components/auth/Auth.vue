<script>
  import Vue from 'vue'
  import VueRouter from 'vue-router'
  import lazyLoading from './../../store/modules/menu/lazyLoading'

  Vue.use(VueRouter)


  const Auth = {
    template: `
    <div id="app" class="app">
      <app-layout/>
    </div>
    `
  }

  const router = new VueRouter({
    routes: [
      { path: '/auth',
        component: Auth,
        children: [
          {
            name: 'Login',
            path: '/login',
            component: lazyLoading('auth/login/Login'),
            meta: {
              default: false,
              title: 'menu.login',
              newWindow: true
            }
          },
          {
            name: 'Signup',
            path: '/signup',
            component: lazyLoading('auth/signup/Signup'),
            meta: {
              default: false,
              title: 'menu.signUp',
              newWindow: true
            }
          }
        ]
      }
    ]
  })

  export default router

</script>

<style lang="scss">
  // @import '../../../sass/variables';
  @import '~bootstrap/scss/mixins/breakpoints';
  @import "~bootstrap/scss/functions";
  @import '~bootstrap/scss/variables';
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

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
