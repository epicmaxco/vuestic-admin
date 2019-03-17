<template>
  <div class="vuestic-file-upload-undo">
    {{ $t('fileUpload.fileDeleted') }}
    <va-button @click="$emit('recover')">
      {{ $t('fileUpload.undo') }}
    </va-button>
  </div>
</template>

<script>
export default {
  name: 'vuestic-file-upload-undo',
}
</script>
