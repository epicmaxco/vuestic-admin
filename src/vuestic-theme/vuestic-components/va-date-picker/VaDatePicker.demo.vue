<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-date-picker
        v-model="simple"
      />
      simple
    </div>
    <div class="demo-container__item">
      <vuestic-date-picker
        v-model="range"
        mode="range"
      />
      range
    </div>
    <div class="demo-container__item">
      <vuestic-date-picker
        v-model="dayTime"
        enableTime
      />
      time
    </div>
    <div class="demo-container__item">
      <vuestic-date-picker
        v-model="multiple"
        mode="multiple"
      />
      multiple dates
    </div>
  </div>
</template>

<script>
import VuesticDatePicker from './VaDatePicker.vue'
import VueFlatpickrComponent from 'vue-flatpickr-component'

export default {
  components: { VuesticDatePicker, VueFlatpickrComponent },
  data () {
    return {
      simple: null,
      range: null,
      dayTime: null,
      multiple: null,
    }
  }
}
</script>
