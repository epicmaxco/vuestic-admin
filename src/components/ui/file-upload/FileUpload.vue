<template>
  <div class="file-upload-page">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="$t('fileUpload.advancedMediaGallery')">
          <vuestic-file-upload
              type="gallery"
              dropzone
              v-model="advancedGallery"
          />
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('fileUpload.advancedUploadList')">
          <vuestic-file-upload
              dropzone
              v-model="advancedList"
          />
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('fileUpload.single')">
          <vuestic-file-upload
              type="single"
              v-model="single"
          />
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('fileUpload.mediaGallery')">
          <vuestic-file-upload
              type="gallery"
              v-model="gallery"
          />
        </vuestic-widget>
      </div>

      <div class="col-md-12">
        <vuestic-widget :headerText="$t('fileUpload.uploadList')">
          <vuestic-file-upload
              v-model="list"
          />
        </vuestic-widget>
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
        list: []
      }
    }
  }
</script>