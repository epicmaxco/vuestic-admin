<template>
  <VbDemo class="file-upload">
      <VbCard title="basic">
        <va-file-upload v-model="basic" type="single"/>
      </VbCard>
      <VbCard :title="$t('fileUpload.advancedMediaGallery')">
        <va-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          dropzone
          v-model="advancedGallery"
        />
      </VbCard>
      <VbCard :title="$t('fileUpload.advancedUploadList')">
        <va-file-upload
          dropzone
          v-model="advancedList"
        />
      </VbCard>
      <VbCard :title="$t('fileUpload.single')">
        <va-file-upload
          type="single"
          v-model="single"
        />
      </VbCard>
      <VbCard :title="$t('fileUpload.mediaGallery')">
        <va-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          v-model="gallery"
        />
      </VbCard>
      <VbCard :title="$t('fileUpload.uploadList')">
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
      single: [],
      gallery: [],
      list: [],
    }
  },
}
</script>
