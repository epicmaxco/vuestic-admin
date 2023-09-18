<template>
  <div>
    <h1 class="va-h1">How can we help you?</h1>
    <form class="mb-4" @submit.prevent="fakeSearchHandler">
      <va-input v-model="searchValue" placeholder="Search"
        ><template #appendInner> <span class="material-icons icon">search</span> </template></va-input
      >
    </form>
    <PopularCategories :categories="filteredCategories" />
    <CTA />
    <PopularQuestions />
    <va-card class="mb-4 p-6">
      <navigation-section />
    </va-card>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'

  import PopularCategories from './Widgets/popularCategories/PopularCategories.vue'
  import PopularQuestions from './Widgets/popularQuestions/PopularQuestions.vue'
  import CTA from './Widgets/CTA/CTA.vue'
  import NavigationSection from './Widgets/navigationSection/NavigationSection.vue'

  import categories from './lib/popularCategories.json'
  import { filterCategories } from './lib/utils'

  const searchValue = ref('')

  const fakeSearchHandler = () => {
    console.log("Isn't vuestic fantastic?")
  }

  const filteredCategories = computed(() => {
    return filterCategories(searchValue.value, categories)
  })
</script>

<style>
  .icon {
    color: var(--va-secondary);
  }
</style>
