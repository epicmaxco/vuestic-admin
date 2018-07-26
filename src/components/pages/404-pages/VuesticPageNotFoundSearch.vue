<template>
  <div class="vuestic-page-not-found-search">
    <div class="vuestic-page-not-found-search__content">
      <div class="vuestic-page-not-found-search__wallpaper">
        <router-link class="i-vuestic vuestic-page-not-found-search__i-vuestic" :to="{path: '/'}"/>
      </div>
      <div class="vuestic-page-not-found-search__wallpaper">
        <h3 class="vuestic-page-not-found-search__text">The page's gonna fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-search__wallpaper col-md-12">
        <div class="row vuestic-page-not-found-search__message">
          <h4 class="vuestic-page-not-found-search__text-small">If you fell that it's not right, please send us a message at &nbsp</h4>
          <a href="mailto:hello@epicmax.co">hi@epicmax.co</a>
        </div>
      </div>
      <div class="vuestic-page-not-found-search__wallpaper">
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
      <div class="vuestic-page-not-found-search__wallpaper col-md-12 vuestic-page-not-found-search__not-found-wallpaper-list">
        <div class="vuestic-page-not-found-search__wrapper">
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
    </div>
    <div class="vuestic-page-not-found-search__wallpaper vuestic-page-not-found-search__not-found-wallpaper-sad">
      <img src="https://i.imgur.com/hu80UGU.png" class="vuestic-page-not-found-search__sad-image"/>
    </div>
    <div class="vuestic-page-not-found-search__footer">
      <span>
        ©2018. Made by &nbsp
        <a href="http://epicmax.co"> Epicmax</a>
      </span>
    </div>
  </div>
</template>

<script>
import CategoriesConfig from './CategoriesConfig'
export default {
  name: 'vuestic-page-not-found-search',
  data () {
    return {
      categories: CategoriesConfig,
      inputValue: ''
    }
  },
  computed: {
    filterItems () {
      if (this.inputValue.length >= 1) {
        return this.categories.map(
          category => {
            return {
              categoryName: category.categoryName,
              items: category.items.filter(item => item.itemName.search(this.inputValue) !== -1)
            }
          }
        ).filter(category => category.items.length >= 1)
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
    width: 505px;
    height: 400px;
    bottom: 0;
  }

  &__text {
    padding-top: 50px;
    color: white;
  }

  &__text-small {
    font-size: 16px;
    line-height: 1.5;
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
    overflow: hidden;
    position: absolute;
    height: 40%;
    width: 100%;
    bottom: 0;
    padding-left: 80%;
  }

  &__wallpaper {
    max-height: 40%;
    display: flex;
    justify-content: center;
  }

  &__i-vuestic {
    z-index: 2;
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
  }

  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-search {
      height: $auth-mobile-main-h;

      &__sad-image {
        width: 260px;
        height: 200px;
        padding-left: 100px;
        bottom: 0;
      }

      &__message {
        justify-content: center;
      }

      &__list-element {
        font-size: 13px;
      }

      &__not-found-wallpaper-list {
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

      &__wrapper {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  &__footer {
    display: flex;
    color: white;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  &__wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
