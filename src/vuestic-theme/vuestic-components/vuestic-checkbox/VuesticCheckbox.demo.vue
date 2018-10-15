<template>
  <div class="demo-container" style="width: 300px">
    <div class="demo-container-item" style="margin-left: 5rem">
      <vuestic-checkbox v-model="value1" label="Selected" style="margin-top: 5rem; margin-bottom: 1rem;"/>
      <vuestic-checkbox v-model="value3" label="Readonly" :readonly="true" style="margin-bottom: 1rem;"/>
      <vuestic-checkbox v-model="value2" label="Disabled" :disabled="true"/>
      <vuestic-checkbox v-model="value4" label="Error" :isError="true" />
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
      value3: true,
      value4: true
    }
  }
}
</script>
