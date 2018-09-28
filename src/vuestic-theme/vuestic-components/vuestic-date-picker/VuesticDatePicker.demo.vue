<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input"
            v-model="one"
          />
          <label class="control-label" for="simple-input">Simple</label>
          <i class="bar"></i>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input-2"
            v-model="two"
            :config="{mode: 'range'}"
          />
          <label class="control-label" for="simple-input-2">Range</label>
          <i class="bar"></i>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input-3"
            v-model="three"
            :config="{enableTime: true}"
          />
          <label class="control-label" for="simple-input-3">Day time</label>
          <i class="bar"></i>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input-4"
            v-model="three"
            :config="{enableTime: true}"
            @on-change="doSomethingOnChange"
          />
          <label class="control-label" for="simple-input-4">Day time</label>
          <i class="bar"></i>
        </div>
      </div>
    </div>
    <div class="demo-container__item">
      <div class="form-group">
        <div class="input-group">
          <vuestic-date-picker
            id="simple-input-5"
            v-model="three"
            :config="{
              altInput: true,
              altFormat: 'F j, Y',
              dateFormat: 'Y-m-d',
            }"
            @on-change="doSomethingOnChange"
          />
          <label class="control-label" for="simple-input-5">Human readable</label>
          <i class="bar"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticDatePicker from './VuesticDatePicker.vue'

export default {
  components: { VuesticDatePicker },
  data () {
    return {
      one: null,
      two: null,
      three: null,
    }
  },
  methods: {
    doSomethingOnChange (input) {
      // eslint-disable-next-line no-console
      console.log('input', input)
    },
  },
}
</script>
