<template>
  <va-page-not-found without-button class="va-page-not-found-search">
    <template>
      <va-input
        placeholder="Search on the menu"
        :style="{'align-items': 'flex-start'}"
        v-model="inputValue"
        class="va-page-not-found-search__input mb-4"
        removable
      />
      <div class="row va-page-not-found-search__links">
        <ul
          class="va-page-not-found-search__list flex xs3 lg1 mx-2 mb-2"
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
    </template>
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

  &__links {
    margin: 0 -30%;
    width: 160%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__list {
    color: $white;
  }

  @include media-breakpoint-down(md) {
    .va-page-not-found-search__links {
      margin: 0;
      width: 100%;
    }
  }

  @include media-breakpoint-down(xs) {
    .va-page-not-found-search {
    }
  }
}
</style>
