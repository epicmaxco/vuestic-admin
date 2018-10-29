<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input"
            v-model="simple"
          />
          <label class="control-label" for="simple-input">Simple</label>
          <i class="bar"></i>
        </div>
      </div>

      {{ simple }}
    </div>
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input-2"
            v-model="range"
            :config="{mode: 'range'}"
          />
          <label class="control-label" for="simple-input-2">Range</label>
          <i class="bar"></i>
        </div>
      </div>

      {{ range }}
    </div>
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input-4"
            v-model="dayTime"
            :config="{enableTime: true}"
            @on-change="doSomethingOnChange"
          />
          <label class="control-label" for="simple-input-4">Day time</label>
          <i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input-3"
            v-model="dayTime"
            :config="{enableTime: true}"
          />
          <label class="control-label" for="simple-input-3">Day time</label>
          <i class="bar"></i>
        </div>
      </div>
      {{ dayTime }}
    </div>
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input-5"
            v-model="readableDayTime"
            :config="{
              altInput: true,
              altFormat: 'F j, Y',
              dateFormat: 'Y-m-d',
            }"
            @on-change="doSomethingOnChange"
          />
          <label class="control-label" for="simple-input-5">Human
            readable</label>
          <i class="bar"></i>
        </div>
      </div>
      {{ readableDayTime }}
    </div>
  </div>
</template>

<script>
import VuesticDatePicker from './VuesticDatePicker.vue'
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
