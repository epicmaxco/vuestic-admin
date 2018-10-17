<template>
  <div class="demo-container" style="width: 300px">
    <div class="demo-container-item" style="margin-left: 5rem">
      <vuestic-checkbox v-model="value" label="Selected" style="margin-top: 5rem; margin-bottom: 1rem;"/>
      <vuestic-checkbox v-model="value" label="Readonly" :readonly="true" style="margin-bottom: 1rem;"/>
      <vuestic-checkbox v-model="value" label="Disabled" :disabled="true"/>
      <vuestic-checkbox v-model="value" error label="Error" :isError="true"/>
      <vuestic-checkbox v-model="value" errorMessage="error message" label="Error-message"/>
      <vuestic-checkbox v-model="value" error disabled label="Error + disabled" :isError="true"/>
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
      value: true
    }
  }
}
</script>
