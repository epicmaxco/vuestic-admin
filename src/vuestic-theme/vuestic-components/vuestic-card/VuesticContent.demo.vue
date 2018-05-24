<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-content>
        <p>The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain highlighted text zebra are endangered.</p>
        <a class="vuestic-content-link" href="#">Link</a>
        <a class="vuestic-content-link-secondary" href="#">Secondary link</a>
      </vuestic-content>
    </div>
  </div>
</template>

<script>
  import VuesticContent from './VuesticContent.vue'

  export default {
    components: {
      VuesticContent,
    },
  }
</script>
