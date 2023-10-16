<template>
  <h1 class="va-h1 text-4xl md:text-5xl">How can we help you?</h1>
  <Categories />
  <RequestDemo />
  <Questions />
  <Navigation />
</template>

<script setup>
  import Categories from './widgets/Categories.vue'
  import Questions from './widgets/Questions.vue'
  import RequestDemo from './widgets/RequestDemo.vue'
  import Navigation from './widgets/Navigation.vue'
</script>
