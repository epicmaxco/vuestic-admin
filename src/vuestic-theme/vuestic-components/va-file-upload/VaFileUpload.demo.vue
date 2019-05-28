<template>
  <VbDemo class="file-upload" style="width: 100%">
      <VbCard title="types">
        <p>list (default)</p>
        <va-file-upload v-model="basic"/>
        <p>single</p>
        <va-file-upload v-model="single" type="single"/>
        <p>gallery</p>
        <va-file-upload v-model="gallery" type="gallery"/>
      </VbCard>
  </VbDemo>
</template>

<script>
import VaFileUpload from './VaFileUpload'
export default {
  components: { VaFileUpload },
  data () {
    return {
      basic: [],
      single: [],
      gallery: [],
    }
  },
}
</script>
