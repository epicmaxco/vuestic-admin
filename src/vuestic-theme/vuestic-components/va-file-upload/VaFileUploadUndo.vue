<template>
  <div class="va-file-upload-undo">
    <span>File was successfully deleted</span>
    <va-button @click="$emit('recover')" outline small>Undo</va-button>
  </div>
</template>

<script>
import VaButton from '../va-button/VaButton'
export default {
  name: 'va-file-upload-undo',
  components: { VaButton },
}
</script>
