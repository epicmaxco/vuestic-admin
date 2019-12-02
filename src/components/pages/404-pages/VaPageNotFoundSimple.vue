<template>
  <va-page-not-found class="va-page-not-found-simple">
    <va-icon-vuestic slot="image"/>
  </va-page-not-found>
</template>

<script>
import VaIconVuestic from '../../../iconset/VaIconVuestic'
import VaPageNotFound from './VaPageNotFound'

export default {
  name: 'vuestic-page-not-found-simple',
  components: {
    VaPageNotFound,
    VaIconVuestic,
  },
}
</script>

<style lang="scss">
.va-page-not-found-simple {
  .va-icon-vuestic {
    width: 19rem;
    height: 2rem;
    max-width: 100%;
    margin-bottom: 13%;
  }
}
</style>
