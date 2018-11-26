<template>
  <div class="vuestic-page-not-found-search">
    <div class="vuestic-page-not-found-search__content">
      <div class="vuestic-page-not-found-search__wallpaper">
        <router-link class="i-vuestic vuestic-page-not-found-search__i-vuestic"
                     :to="{path: '/'}"/>
      </div>
      <div class="vuestic-page-not-found-search__wallpaper">
        <h3 class="vuestic-page-not-found-search__text">The page's gone
          fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-search__wallpaper flex md12">
        <div class="va-row vuestic-page-not-found-search__message">
          <h4 class="vuestic-page-not-found-search__text-small">
            If you feel that it's not right, please send us a message at &nbsp;
          </h4>
          <a href="mailto:hello@epicmax.co">hello@epicmax.co</a>
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
      <div
        class="vuestic-page-not-found-search__wallpaper vuestic-page-not-found-search__not-found-wallpaper-list">
        <div class="vuestic-page-not-found-search__wrapper">
          <ul
            class="vuestic-page-not-found-search__list"
            v-for="(category, index) in filterItems"
            :key="index"
          >
            {{ category.categoryName }}
            <li
              class="vuestic-page-not-found-search__list-element"
              v-for="(item, index) in category.items"
              :key="index"
            >
              <router-link :to="{ path: item.itemLink }">
                {{ item.itemName}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <vuestic-page-not-found-sad-wallpaper/>
    <made-by-component/>
  </div>
</template>

<script>
import CategoriesConfig from './CategoriesConfig'
import MadeByComponent from './MadeByComponent'
import VuesticPageNotFoundSadWallpaper
  from './VuesticPageNotFoundSadWallpaper.vue'

export default {
  name: 'vuestic-page-not-found-search',
  components: {
    MadeByComponent,
    VuesticPageNotFoundSadWallpaper,
  },
  data () {
    return {
      categories: CategoriesConfig,
      inputValue: '',
    }
  },
  computed: {
    filterItems () {
      if (this.inputValue.length >= 1) {
        return this.categories.map(
          category => {
            return {
              categoryName: category.categoryName,
              items: category.items.filter(item => item.itemName.toUpperCase()
                .search(this.inputValue.toUpperCase()) !== -1),
            }
          },
        ).filter(category => category.items.length >= 1)
      } else {
        return this.categories
      }
    },
  },
}
</script>

<style lang="scss">
.vuestic-page-not-found-search {
  min-height: 100vh;
  padding-bottom: 84px;
  background-color: $top-nav-bg;

  &__text {
    padding-top: 50px;
    color: white;
  }
  &__text-small {
    font-size: $font-size-root;
    line-height: 1.5;
    text-align: center;
    color: white;
    font-weight: normal;
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
  &__wallpaper {
    max-height: 40%;
    display: flex;
    justify-content: center;

    a {
      margin-top: 2rem;
    }
  }
  &__i-vuestic {
    z-index: 2;
    height: $auth-wallpaper-ivuestic-h;
    width: 100%;
  }
  &__message {
    justify-content: center;
  }
  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-search {
      height: $auth-mobile-main-h;

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
      &__text-small {
        font-size: 15px;
      }
      &__wrapper {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
