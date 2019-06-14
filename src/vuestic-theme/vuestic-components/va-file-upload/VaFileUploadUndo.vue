<template>
  <div class="va-file-upload-undo">
    <span>File was successfully deleted</span>
    <va-button @click="$emit('recover')" outline small class="va-file-upload-undo__button">Undo</va-button>
  </div>
</template>

<script>
import VaButton from '../va-button/VaButton'
export default {
  name: 'va-file-upload-undo',
  components: { VaButton },
}
</script>
<style lang="scss" scoped>
.va-file-upload-undo {
  height: 1.5rem;
  &__button {
    line-height: 1.1428;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
