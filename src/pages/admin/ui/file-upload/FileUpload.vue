<template>
  <div class="file-upload">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('fileUpload.advancedMediaGallery') }}</va-card-title>
          <va-card-content>
            <va-file-upload
              type="gallery"
              file-types=".png, .jpg, .jpeg, .gif"
              dropzone
              v-model="advancedGallery"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('fileUpload.advancedUploadList') }}</va-card-title>
          <va-card-content>
            <va-file-upload
              dropzone
              v-model="advancedList"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('fileUpload.single') }}</va-card-title>
          <va-card-content>
            <va-file-upload
              type="single"
              v-model="single"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('fileUpload.mediaGallery') }}</va-card-title>
          <va-card-content>
            <va-file-upload
              type="gallery"
              file-types=".png, .jpg, .jpeg, .gif"
              v-model="gallery"
            />
          </va-card-content>
        </va-card>
      </div>
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ $t('fileUpload.uploadList') }}</va-card-title>
          <va-card-content>
            <va-file-upload
              v-model="list"
            />
          </va-card-content>
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
