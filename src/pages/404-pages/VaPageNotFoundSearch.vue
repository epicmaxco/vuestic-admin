<template>
  <va-page-not-found without-button class="va-page-not-found-search">
    <va-input
      placeholder="Search on the menu"
      :style="{'align-items': 'flex-start'}"
      v-model="inputValue"
      class="va-page-not-found-search__input mb-4"
      removable
    />
    <div class="row va-page-not-found-search__links">
      <ul
        class="va-page-not-found-search__list flex xs6 md3 lg1 mb-2"
        v-for="(category, index) in filterItems"
        :key="index"
      >
        {{ category.categoryName }}
        <li
          class="va-page-not-found-search__list-element"
          v-for="(item, index) in category.items"
          :key="index"
        >
          <router-link :to="{ path: item.itemLink }" class="link">
            {{ item.itemName }}
          </router-link>
        </li>
      </ul>
    </div>
  </va-page-not-found>
</template>

<script>
import CategoriesConfig from './CategoriesConfig'
import VaPageNotFound from './VaPageNotFound'

export default {
  name: 'va-page-not-found-search',
  components: {
    VaPageNotFound,
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
.va-page-not-found-search {
  &__input {
    width: 310px;
    flex: 0 0 auto;
  }

  ul {
    margin: 0;
  }

  &__links {
    margin: 0 -30%;
    width: 160%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // text-align: center  
  }

  &__list {
    // color: $white;
  }

  @media screen and (max-width: 1024px) {
    .va-page-not-found-search__links {
      width: 100%;
      margin: 0;
    }
  }

  @media screen and (max-width: 480px) {
    .va-page-not-found-search__links {
      flex-direction: column;
      width: 33%;
    }
  }

  // @include media-breakpoint-down(xs) {
  //   .va-page-not-found-search {
  //   }
  // }
}
</style>
