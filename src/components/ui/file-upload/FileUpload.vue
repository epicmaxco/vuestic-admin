<template>
  <div class="file-upload">
    <div class="row">
      <div class="flex xs12">
        <va-card :title="$t('fileUpload.advancedMediaGallery')">
          <va-file-upload
            type="gallery"
            file-types=".png, .jpg, .jpeg, .gif"
            dropzone
            v-model="advancedGallery"
          />
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card :title="$t('fileUpload.advancedUploadList')">
          <va-file-upload
            dropzone
            v-model="advancedList"
          />
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card :title="$t('fileUpload.single')">
          <va-file-upload
            type="single"
            v-model="single"
          />
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card :title="$t('fileUpload.mediaGallery')">
          <va-file-upload
            type="gallery"
            file-types=".png, .jpg, .jpeg, .gif"
            v-model="gallery"
          />
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card :title="$t('fileUpload.uploadList')">
          <va-file-upload
            v-model="list"
          />
        </va-card>
      </div>
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
