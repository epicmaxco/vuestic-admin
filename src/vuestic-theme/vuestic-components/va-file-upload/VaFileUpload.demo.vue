<template>
  <VbDemo class="file-upload">
      <VbCard title="basic">
        <va-file-upload v-model="basic" type="single"/>
      </VbCard>
      <VbCard title="advanced gallery">
        <va-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          dropzone
          v-model="advancedGallery"
        />
      </VbCard>
      <VbCard title="advanced list">
        <va-file-upload
          dropzone
          v-model="advancedList"
        />
      </VbCard>
      <VbCard title="gallery">
        <va-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          v-model="gallery"
        />
      </VbCard>
      <VbCard title="list">
        <va-file-upload
          v-model="list"
        />
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
      advancedGallery: [],
      advancedList: [],
      gallery: [],
      list: [],
    }
  },
}
</script>
