<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <vuestic-checkbox v-model="value" label="Selected"/>
      <vuestic-checkbox v-model="value" label="Readonly" :readonly="true"/>
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
