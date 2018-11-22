<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-tag name="Company" removable />
    </div>
  </div>
</template>

<script>
import VuesticTag from './VuesticTag.vue'
import { logMixin } from '../vuestic-popup/quasar/mixins/logMixin'

export default {
  mixins: [logMixin],
  components: {
    VuesticTag,
  },
}
</script>
