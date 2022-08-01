<template>
  <va-page-not-found without-button class="va-page-not-found-search">
    <va-input
      v-model="inputValue"
      placeholder="Search on the menu"
      :style="{ 'align-items': 'flex-start' }"
      class="va-page-not-found-search__input mb-4"
      clearable
    />
    <div class="row va-page-not-found-search__links">
      <ul
        v-for="(category, index) in filterItems"
        :key="index"
        class="va-page-not-found-search__list flex xs6 md3 lg1 mb-2"
      >
        <li class="mb-2">
          {{ category.categoryName }}
        </li>
        <li v-for="(item, j) in category.items" :key="j" class="va-page-not-found-search__list-element">
          <router-link :to="{ path: item.itemLink }" class="link">
            {{ item.itemName }}
          </router-link>
        </li>
      </ul>
    </div>
  </va-page-not-found>
</template>

<script setup lang="ts">
  import CategoriesConfig from './CategoriesConfig'
  import VaPageNotFound from './VaPageNotFound.vue'
  import { computed, ref } from 'vue'

  const categories = ref(CategoriesConfig)
  const inputValue = ref('')

  const filterItems = computed(() => {
    if (inputValue.value.length >= 1) {
      return categories.value
        .map((category) => {
          return {
            categoryName: category.categoryName,
            items: category.items.filter(
              (item) => item.itemName.toUpperCase().search(inputValue.value.toUpperCase()) !== -1,
            ),
          }
        })
        .filter((category) => category.items.length >= 1)
    } else {
      return categories.value
    }
  })
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
