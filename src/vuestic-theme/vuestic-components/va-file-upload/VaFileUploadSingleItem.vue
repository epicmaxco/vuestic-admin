<template>
  <div class="file-upload-single-item">
    <div class="file-upload-single-item-name">
      {{ file.name }}
    </div>
    <va-button flat @click="$emit('remove')" color="danger" small>
      Delete
    </va-button>
  </div>
</template>

<script>
import VaButton from '../va-button/VaButton'

export default {
  name: 'va-file-upload-single-item',
  components: { VaButton },
  props: {
    file: {
      type: Object,
    },
  },
}
</script>

<style lang='scss'>
.file-upload-single-item {
  display: flex;
  align-items: center;

  &-name {
    margin-right: 1rem;
  }
}
</style>
