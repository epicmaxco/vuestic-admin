<template>
  <div class="vuestic-page-not-found-search">
    <div class="auth-wallpaper">
      <router-link class="i-vuestic vuestic-page-not-found-search__i-vuestic" :to="{path: '/'}"/>
    </div>
    <div class="nav d-lg-none">
      <router-link class="i-vuestic" :to="{path: '/'}"/>
    </div>
    <div class="auth-wallpaper">
      <div class="row">
        <div class="col-12 d-none d-lg-flex">
          <h3 class="vuestic-page-not-found-search__text">The page's gonna fishing.</h3>
        </div>
      </div>
    </div>
    <div class="auth-wallpaper">
      <div class="row">
        <div class="col-12 d-none d-lg-flex">
          <h4 class="vuestic-page-not-found-search__text-small">If you fell that it's not right, please send us a message at &nbsp</h4>
          <a href="mailto:hello@epicmax.co">hi@epicmax.co</a>
        </div>
      </div>
    </div>
    <div class="auth-wallpaper">
      <div class="row">
        <div class="col-12 d-none d-lg-flex">
          <div class="form-group">
            <div class="input-group vuestic-page-not-found-search__input">
              <input
                placeholder="Search on the menu"
                style="color: white"
                v-model="inputValue"
              >
              <i class="bar"
                 :style="'width: ' + 310 + 'px'"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-wallpaper">
      <div class="row">
        <div class="col-12 d-none d-lg-flex">
          <ul class="vuestic-page-not-found-search__ul" v-for="category in filterItems">
            {{ category.categoryName }}
            <li v-for="item in category.items">
              <router-link :to="{ path: item.itemLink }">
                {{ item.itemName}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="auth-wallpaper vuestic-page-not-found-search__auth-wallpaper-sad">
      <div class="i-vuestic-sad vuestic-page-not-found-search__i-vuestic-sad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-page-not-found-search',
  data () {
    return {
      categories: [
        {
          categoryName: 'Forms',
          items: [
            {
              itemName: 'Form Elements',
              itemLink: './admin/forms/form-elements'
            },
            {
              itemName: 'Form Wizards',
              itemLink: './admin/forms/form-wizards'
            },
            {
              itemName: 'Medium Editor',
              itemLink: './admin/forms/medium-editor'
            }
          ],
        },
        {
          categoryName: 'Dashboard',
          items: [
            {
              itemName: 'Dashboard',
              itemLink: './admin/dashboard'
            }
          ]
        },
        {
          categoryName: 'UI Elements',
          items: [
            {
              itemName: 'Typography',
              itemLink: './admin/ui/typography'
            },
            {
              itemName: 'Buttons',
              itemLink: './admin/ui/buttons'
            },
            {
              itemName: 'Color Pickers',
              itemLink: './admin/ui/color-pickers'
            },
            {
              itemName: 'Notifications',
              itemLink: './admin/ui/notifications'
            },
            {
              itemName: 'Icons',
              itemLink: './admin/ui/icons'
            },
            {
              itemName: 'Spinners',
              itemLink: './admin/ui/spinners'
            },
            {
              itemName: 'Grid',
              itemLink: './admin/ui/grid'
            },
            {
              itemName: 'Modals',
              itemLink: './admin/ui/modals'
            },
            {
              itemName: 'File Upload',
              itemLink: './admin/ui/file-upload'
            },
            {
              itemName: 'Tree View',
              itemLink: './admin/ui/tree-view'
            }
          ]
        },
        {
          categoryName: 'Auth',
          items: [
            {
              itemName: 'Login',
              itemLink: './auth/login'
            },
            {
              itemName: 'Sign up',
              itemLink: './auth/signup'
            }
          ],
        },
        {
          categoryName: 'Maps',
          items: [
            {
              itemName: 'Google Maps',
              itemLink: './admin/maps/google-maps'
            },
            {
              itemName: 'Yandex Maps',
              itemLink: './admin/maps/yandex-maps'
            },
            {
              itemName: 'Leaflet Maps',
              itemLink: './admin/maps/leaflet-maps'
            },
            {
              itemName: 'Bubble Maps',
              itemLink: './admin/maps/bubble-maps'
            },
            {
              itemName: 'Line Maps',
              itemLink: './admin/maps/line-maps'
            }
          ],
        },
      ],
      inputValue: ''
    }
  },
  computed: {
    filterItems () {
      let arr = JSON.parse(JSON.stringify(this.categories))
      if (this.inputValue !== '') {
        for (let i = 0; i < this.categories.length; i++) {
          arr[i].items = this.categories[i].items.filter(item => item.itemName.search(this.inputValue) !== -1)
        }
        return arr
      } else {
        return this.categories
      }
    }
  }
}
</script>

<style lang="scss">
.vuestic-page-not-found-search {
  height: 100vh;
  margin: 0;
  background-color: $top-nav-bg;

  &__i-vuestic {
    margin-top: 100px;
  }

  &__i-vuestic-sad {
  }

  &__ul {
    color: white;
  }

  &__input {
    width: 310px;
  }

  &__auth-wallpaper-sad {
    padding-left: 1000px;
  }

  &__text {
    padding-top: 50px;
    color: white;
  }

  &__text-small {
    font-family: SourceSansPro;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #bbb4b2;
  }

  .nav {
    display: flex;
    height: $top-mobile-nav-height;
    background-color: $top-nav-bg;
    .i-vuestic {
      height: $auth-mobile-nav-ivuestic-h;
      width: 100%;
    }
  }

  .oblique {
    position: absolute;
    background-color: $auth-wallpaper-oblique-line;
    left: calc(50% - 27% / 2);
    transform: rotate(15deg);
    width: 27%;
    height: 115%;
  }

  .auth-content {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  .auth-wallpaper {
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .i-vuestic {
      z-index: 2;
      height: $auth-wallpaper-ivuestic-h;
      width: 100%;
    }
  }

  @include media-breakpoint-down(md) {
    .main {
      height: $auth-mobile-main-h;
      .auth-content {
        align-items: flex-start;
        padding-top: $auth-content-padding-t;
      }
    }
  }
}
</style>
