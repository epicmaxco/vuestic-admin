<template>
  <div class="file-upload">
    <div class="flex md12">
      <va-card :title="$t('fileUpload.advancedMediaGallery')">
        <vuestic-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          dropzone
          v-model="advancedGallery"
        />
      </va-card>
    </div>

    <div class="flex md12">
      <va-card :title="$t('fileUpload.advancedUploadList')">
        <vuestic-file-upload
          dropzone
          v-model="advancedList"
        />
      </va-card>
    </div>

    <div class="flex md12">
      <va-card :title="$t('fileUpload.single')">
        <vuestic-file-upload
          type="single"
          v-model="single"
        />
      </va-card>
    </div>

    <div class="flex md12">
      <va-card :title="$t('fileUpload.mediaGallery')">
        <vuestic-file-upload
          type="gallery"
          :file-types="'.png, .jpg, .jpeg, .gif'"
          v-model="gallery"
        />
      </va-card>
    </div>

    <div class="flex md12">
      <va-card :title="$t('fileUpload.uploadList')">
        <vuestic-file-upload
          v-model="list"
        />
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'file-upload',
  data () {
    return {
      advancedGallery: [],
      advancedList: [],
      single: [],
      gallery: [],
      list: [],
    }
  },
}
</script>
