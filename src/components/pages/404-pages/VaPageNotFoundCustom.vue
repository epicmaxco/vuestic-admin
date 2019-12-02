<template>
  <va-page-not-found va-page-not-found-custom>
    <img
      slot="image"
      src="https://i.imgur.com/wodIng5.png"
      class="va-page-not-found-custom__image mb-3"
    />
  </va-page-not-found>
</template>

<script>
import VaPageNotFound from './VaPageNotFound'

export default {
  name: 'va-page-not-found-custom',
  components: {
    VaPageNotFound,
  },
}
</script>

<style lang="scss">
.va-page-not-found-custom {
  &__image {
    width: 150%;
    margin: 0 -25%;
    min-width: 20rem;

    @include media-breakpoint-down(sm) {
      margin: 0;
      width: 100%;
    }
  }
}
</style>
