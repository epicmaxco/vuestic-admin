<template>
  <div>
    <h1 class="va-h1">How can we help you?</h1>
    <form class="mb-4" @submit.prevent="">
      <va-input v-model="searchValue" placeholder="Search"
        ><template #appendInner> <span class="material-icons icon">search</span> </template></va-input
      >
    </form>
    <PopularCategories :categories="filteredCategories" />
    <CTA />

    <va-card class="mb-4">
      <va-card-title class="pb-4">
        <h2 class="text-xl normal-case">Popular questions</h2>
      </va-card-title>
      <va-card-content>
        <va-accordion v-model="accordionsState">
          <va-collapse header="How do I reload a page?">
            <div class="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
          <va-collapse header="What is a Secure Key?">
            <p class="mb-4 text-sm">
              A Secure Key is an extra layer of security that helps look after you and your money by generating a
              unique, single use security code every time you log on or authorise a payment. There are two types of
              Secure Key - a Digital version that works as part of the Mobile Banking App - perfect if you have a
              smartphone or tablet. Or, you can use a Physical version that is a little key ring that looks like a mini
              calculator.
            </p>
            <p class="mb-4 text-sm">
              We recommend setting up a Digital Secure Key. It’s built into the first direct Banking App, and if you
              have the right type of smartphone you can use your fingerprint or face recognition to seamlessly log on or
              authorise payments.
            </p>
            <a href="#" class="va-link text-sm">Find out more about Secure Keys <va-icon name="chevron_right" /></a>
          </va-collapse>
          <va-collapse header="Third question">
            <div class="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
          <va-collapse header="Fourth question">
            <div class="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
          <va-collapse header="Fifth question">
            <div class="p-4 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo veniam provident voluptates consequuntur
              nostrum cumque possimus unde asperiores magnam rem.
            </div>
          </va-collapse>
        </va-accordion>
      </va-card-content>
    </va-card>
    <va-card class="mb-4 p-6">
      <navigation-section />
    </va-card>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'

  import PopularCategories from './Widgets/popularCategories/PopularCategories.vue'
  import CTA from './Widgets/CTA/CTA.vue'
  import NavigationSection from './Widgets/navigationSection/NavigationSection.vue'

  import categories from './lib/popularCategories.json'
  import { filterCategories } from './lib/utils'

  const searchValue = ref('')

  const accordionsState = ref([false, true, false, false])
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
