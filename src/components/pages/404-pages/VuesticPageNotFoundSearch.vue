<template>
  <div class="vuestic-page-not-found-search">
    <div class="vuestic-page-not-found-search__content">
      <div class="vuestic-page-not-found-search__wallpaper d-flex justify--center">
        <h3 class="vuestic-page-not-found-search__text pt-5">The page's gone
          fishing.</h3>
      </div>
      <div class="vuestic-page-not-found-search__wallpaper flex md12">
        <div class="va-row justify--center vuestic-page-not-found-search__message">
          <span class="vuestic-page-not-found-search__text-small mt-4">
            If you feel that it's not right, please send us a message at &nbsp;
          </span>
          <a class="mt-4" href="mailto:hello@epicmax.co">hello@epicmax.co</a>
        </div>
      </div>
      <div class="vuestic-page-not-found-search__wallpaper d-flex justify--center">
        <div class="form-group">
          <div class="input-group vuestic-page-not-found-search__input">
            <input
              placeholder="Search on the menu"
              style="color: white"
              v-model="inputValue"
            >
            <va-icon icon="bar" :style="'width: ' + 310 + 'px'"/>
          </div>
        </div>
      </div>
      <div class="vuestic-page-not-found-search__wallpaper d-flex justify--center
        vuestic-page-not-found-search__not-found-wallpaper__list">
        <div class="va-row vuestic-page-not-found-search__wrapper">
          <ul
            class="flex md2 xs4 vuestic-page-not-found-search__list"
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
                {{ item.itemName }}
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

  &__input {
    width: 310px;
  }

  &__wallpaper {
    max-height: 40%;
    color: $white;
  }

  &__wrapper {
    margin: 0 30%;
  }

  @include media-breakpoint-down(xs) {
    .vuestic-page-not-found-search {

      &__list-element {
        font-size: 13px;
      }

      &__text-small {
        font-size: 15px;
      }

      &__wrapper {
        margin: 0;
      }
    }
  }
}
</style>
