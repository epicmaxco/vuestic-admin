<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-date-picker
        v-model="simple"
      />
      {{ simple }}
    </div>
    <div class="demo-container__item">
      <vuestic-date-picker
        v-model="range"
        mode="range"
      />
      {{ range }}
    </div>
    <div class="demo-container__item">
      <vuestic-date-picker
        v-model="dayTime"
        enableTime
      />
      {{ dayTime }}
    </div>
    <div class="demo-container__item">
      <vuestic-date-picker
        v-model="readableDayTime"
        mode="multiple"
      />
      {{ readableDayTime }}
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
      four: null,
      readableDayTime: null,
    }
  },
  methods: {
    doSomethingOnChange (input) {
      // eslint-disable-next-line no-console
      // console.log('onChange', input)
    },
  },
}
</script>
