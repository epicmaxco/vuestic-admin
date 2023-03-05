<template>
  <div class="file-upload grid grid-cols-12 gap-6">
    <va-card class="col-span-12">
      <va-card-title>{{ t('fileUpload.advancedMediaGallery') }}</va-card-title>
      <va-card-content>
        <va-file-upload v-model="advancedGallery" type="gallery" file-types=".png, .jpg, .jpeg, .gif" dropzone />
      </va-card-content>
    </va-card>
    <va-card class="col-span-12">
      <va-card-title>{{ t('fileUpload.advancedUploadList') }}</va-card-title>
      <va-card-content>
        <va-file-upload v-model="advancedList" dropzone />
      </va-card-content>
    </va-card>
    <va-card class="col-span-12">
      <va-card-title>{{ t('fileUpload.single') }}</va-card-title>
      <va-card-content>
        <va-file-upload v-model="single" type="single" />
      </va-card-content>
    </va-card>
    <va-card class="col-span-12">
      <va-card-title>{{ t('fileUpload.mediaGallery') }}</va-card-title>
      <va-card-content>
        <va-file-upload v-model="gallery" type="gallery" file-types=".png, .jpg, .jpeg, .gif" />
      </va-card-content>
    </va-card>
    <va-card class="col-span-12">
      <va-card-title>{{ t('fileUpload.uploadList') }}</va-card-title>
      <va-card-content>
        <va-file-upload v-model="list" />
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const advancedGallery = ref([])
  const advancedList = ref([])
  const single = ref([])
  const gallery = ref([])
  const list = ref([])
</script>
