<template>
  <div class="va-file-upload-undo">
    File was successfully deleted
    <va-button @click="$emit('recover')">Undo</va-button>
  </div>
</template>

<script>
import VaButton from '../va-button/VaButton'
export default {
  name: 'va-file-upload-undo',
  components: { VaButton },
}
</script>
