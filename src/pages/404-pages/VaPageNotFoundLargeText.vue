<template>
  <va-page-not-found class="va-page-not-found-large-text">
    <template #image>
      <div class="va-page-not-found-large-text__number">404</div>
    </template>
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
    // color: $white;
    font-weight: 600;


    @media screen and (max-width: 600px) {
      font-size: 6rem;
    }
  }
}
</style>
