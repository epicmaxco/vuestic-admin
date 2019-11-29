<template>
  <va-page-not-found class="va-page-not-found-large-text">
    <div class="va-page-not-found-large-text__number" slot="image">404</div>
  </va-page-not-found>
</template>

<script>
import VaPageNotFound from './VaPageNotFound'

export default {
  name: 'va-page-not-found-large-text',
  components: {
    VaPageNotFound,
  },
}
</script>

<style lang="scss">
.va-page-not-found-large-text {
  &__number {
    font-size: 21rem;
    color: $white;
    font-weight: 600;

    @include media-breakpoint-down(xs) {
      font-size: 12rem;
    }
  }
}
</style>
