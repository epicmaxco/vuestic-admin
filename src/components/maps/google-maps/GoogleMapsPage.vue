<template>
  <div class="google-maps-page">
    <div class="row">
      <div class="flex md12 xs12">
        <va-card
          class="google-maps-page__widget"
          title="Google Maps"
        >
          <google-map style="height: 65vh;" />
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
