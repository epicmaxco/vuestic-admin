<template>
  <VbDemo class="file-upload">
    <VbCard title="types" style="width: 100%">
      <p>list (default)</p>
      <va-file-upload v-model="basic"/>
      <p>single</p>
      <va-file-upload v-model="single" type="single"/>
      <p>gallery</p>
      <va-file-upload v-model="gallery" type="gallery"/>
    </VbCard>
    <VbCard title="dropzone" style="width: 100%">
      <p>list</p>
      <va-file-upload v-model="basic" dropzone/>
      <p>gallery</p>
      <va-file-upload v-model="gallery" type="gallery" dropzone/>
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
