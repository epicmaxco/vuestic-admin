<template>
  <div class="va-file-upload-undo">
    {{ $t('fileUpload.fileDeleted') }}
    <va-button @click="$emit('recover')">
      {{ $t('fileUpload.undo') }}
    </va-button>
  </div>
</template>

<script>
export default {
  name: 'va-file-upload-undo',
}
</script>
