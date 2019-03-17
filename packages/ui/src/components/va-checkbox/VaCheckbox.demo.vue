<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-checkbox v-model="value">
        <div slot="label">
         Selected
        </div>
      </va-checkbox>
      <va-checkbox v-model="value" label="Readonly" readonly/>
      <va-checkbox v-model="value" label="Disabled" disabled/>
      <va-checkbox v-model="value" error label="Error" isError/>
      <va-checkbox v-model="value" errorMessages="errorMessages" label="Error-message"/>
      <va-checkbox v-model="value" :errorMessages="errorMessages" :errorCount="2" label="Error-message"/>
      <va-checkbox v-model="value" error disabled label="Error + disabled"/>
    </div>
  </div>
</template>

<script>
import VaCheckbox from './VaCheckbox'

export default {
  components: {
    VaCheckbox
  },
  data () {
    return {
      value: true,
      errorMessages: ['error message 1', 'error message 2']
    }
  }
}
</script>
