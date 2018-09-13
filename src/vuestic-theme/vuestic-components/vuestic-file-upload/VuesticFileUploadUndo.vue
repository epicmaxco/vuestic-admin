<template>
  <div class="vuestic-file-upload-undo">
    {{ $t('fileUpload.fileDeleted') }}
    <button type="button"
            class="btn-text btn-text--primary"
            @click="$emit('recover')">
      {{ $t('fileUpload.undo') }}?
    </button>
  </div>
</template>

<script>
export default {
  name: 'vuestic-file-upload-undo',
}
</script>
