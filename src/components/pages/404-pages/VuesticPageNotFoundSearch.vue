<template>
  <div class="vuestic-page-not-found-search">
    <div class="vuestic-page-not-found-search__content">
      <div class="not-found-wallpaper">
        <router-link class="i-vuestic vuestic-page-not-found-search__i-vuestic" :to="{path: '/'}"/>
      </div>
      <div class="not-found-wallpaper">
        <h3 class="vuestic-page-not-found-search__text">The page's gonna fishing.</h3>
      </div>
      <div class="not-found-wallpaper col-md-12">
        <div class="row vuestic-page-not-found-search__message">
          <h4 class="vuestic-page-not-found-search__text-small">If you fell that it's not right, please send us a message at &nbsp</h4>
          <a href="mailto:hello@epicmax.co">hi@epicmax.co</a>
        </div>
      </div>
      <div class="not-found-wallpaper">
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
      <div class="not-found-wallpaper col-md-12 vuestic-page-not-found-search__not-found-wallpaper-list">
        <ul class="vuestic-page-not-found-search__list" v-for="category in filterItems">
          {{ category.categoryName }}
          <li class="vuestic-page-not-found-search__list-element" v-for="item in category.items">
            <router-link :to="{ path: item.itemLink }">
              {{ item.itemName}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="not-found-wallpaper vuestic-page-not-found-search__not-found-wallpaper-sad">
      <img src="https://i.imgur.com/hu80UGU.png" class="vuestic-page-not-found-search__sad-image"/>
    </div>
    <div class="made-by-footer">
      <span>
        ©2018. Made by &nbsp
        <a href="http://epicmax.co"> Epicmax</a>
      </span>
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
        {
          categoryName: 'Statistics',
          items: [
            {
              itemName: 'Charts',
              itemLink: './admin/statistics/charts'
            },
            {
              itemName: 'Progress bars',
              itemLink: './admin/statistics/progress-bars'
            }
          ]
        }
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
        arr = arr.filter(function (category) {
          return category.items.length > 0
        })
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
  background-color: $top-nav-bg;

  &__sad-image {
    width: 50%;
    height: 100%;
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

  &__i-vuestic {
    margin-top: 100px;
  }

  &__list {
    color: white;
  }

  &__input {
    width: 310px;
  }

  &__not-found-wallpaper-sad {
    position: absolute;
    height: 30%;
    bottom: 0;
    padding-left: 1000px;
  }

  .not-found-wallpaper {
    background-color: $top-nav-bg;
    overflow: hidden;
    display: flex;
    align-items: fle    x-start;
    justify-content: center;
    .i-vuestic {
      z-index: 2;
      height: $auth-wallpaper-ivuestic-h;
      width: 100%;
    }
  }

  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-search {
      height: $auth-mobile-main-h;

      &__message {
        justify-content: center;
      }

      &__list {
        padding-left: 20px;
      }

      &__list-element {
        font-size: 10px;
      }

      &__not-found-wallpaper-list {
        font-size: 10px;
        padding: 0;
      }

      &__i-vuestic {
        margin-top: 5%;
      }

      &__not-found-wallpaper-sad {
        padding: 0;
        height: 25%;
      }

      &__text-small {
        font-size: 15px;
      }
    }
  }
  .made-by-footer {
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    padding-bottom: $made-by-footer-pb;
    position: absolute;
    bottom: 0;
    height: calc(#{$layout-padding} + #{$widget-mb});
    width: 100%;
  }
}
</style>
