<template>
  <div class="file-upload grid grid-cols-12 gap-6">
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('fileUpload.advancedMediaGallery') }}</VaCardTitle>
      <VaCardContent>
        <VaFileUpload v-model="advancedGallery" type="gallery" file-types=".png, .jpg, .jpeg, .gif" dropzone />
      </VaCardContent>
    </VaCard>
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('fileUpload.advancedUploadList') }}</VaCardTitle>
      <VaCardContent>
        <VaFileUpload v-model="advancedList" dropzone />
      </VaCardContent>
    </VaCard>
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('fileUpload.single') }}</VaCardTitle>
      <VaCardContent>
        <VaFileUpload v-model="single" type="single" />
      </VaCardContent>
    </VaCard>
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('fileUpload.mediaGallery') }}</VaCardTitle>
      <VaCardContent>
        <VaFileUpload v-model="gallery" type="gallery" file-types=".png, .jpg, .jpeg, .gif" />
      </VaCardContent>
    </VaCard>
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('fileUpload.uploadList') }}</VaCardTitle>
      <VaCardContent>
        <VaFileUpload v-model="list" />
      </VaCardContent>
    </VaCard>
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
