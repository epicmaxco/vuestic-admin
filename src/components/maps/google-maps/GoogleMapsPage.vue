<template>
  <div class="google-maps-page">
    <div class="va-row">
      <div class="flex md12 xs12">
        <va-card
          class="google-maps-page__widget"
          title="Google Maps"
        >
          <google-map/>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from './GoogleMap'

export default {
  name: 'google-maps-page',
  components: {
    GoogleMap,
  },
}
</script>

<style lang="scss">
.google-maps-page {
  &__widget {
    .va-card__body {
      height: 65vh;
    }
  }
}
</style>
