<template>
    <div class="file-upload__single-item">
        <div class="file-upload__single-item-name">
            {{ file.name }}
        </div>
        <button type="button"
                class="btn-text btn-text--primary"
                @click="$emit('remove')">
            {{ $t('fileUpload.delete') }}
        </button>
    </div>
</template>

<script>
  export default {
    name: 'vuestic-file-upload-single-item',
    props: {
      file: {
        type: Object
      }
    },
  }
</script>

<style lang='scss' scoped>
    .file-upload__single-item {
        display: flex;
        &-name {
            margin-right: 15px;
        }
    }
</style>