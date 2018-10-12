<template>
  <div class="demo-container" style="width: 300px">
    <div class="demo-container-item" style="margin-left: 5rem">
      <vuestic-checkbox v-model="value1" style="margin-top: 5rem; margin-bottom: 1rem;"/>
      <vuestic-checkbox v-model="value3" :readonly="true" style="margin-bottom: 1rem;"/>
      <vuestic-checkbox v-model="value2" :disabled="true"/>
    </div>
  </div>
</template>

<script>
import VuesticCheckbox from './VuesticCheckbox'

export default {
  components: {
    VuesticCheckbox
  },
  data () {
    return {
      value1: true,
      value2: true,
      value3: true
    }
  }
}
</script>
