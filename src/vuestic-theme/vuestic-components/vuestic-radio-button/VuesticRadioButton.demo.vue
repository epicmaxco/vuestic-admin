<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <vuestic-radio-button
        v-model="selectedOption"
        option="one"
        :label="object"
        optionKey="default"
      >
      </vuestic-radio-button>
      <vuestic-radio-button
        v-model="selectedOption"
        option="two"
        label="Two"
      >
      </vuestic-radio-button>
      <vuestic-radio-button
        v-model="selectedOption"
        option="three"
        label="Three"
      >
      </vuestic-radio-button>
      <vuestic-radio-button
        v-model="selectedOption1"
        option="four"
        label="Four"
        disabled
      >
      </vuestic-radio-button>
      <vuestic-radio-button
        v-model="selectedOption1"
        option="five"
        label="Five"
        disabled
      >
      </vuestic-radio-button>
    </div>
    <div class="demo-container__item" style="width: 500px;">
      {{ selectedOption }}
    </div>
  </div>
</template>

<script>
import VuesticRadioButton from './VuesticRadioButton '

export default {
  components: { VuesticRadioButton },
  data () {
    return {
      selectedOption: 'one',
      selectedOption1: 'four',
      selectedOption2: 'five',
      object: {
        type: String,
        default: 'One'
      }
    }
  },
}
</script>
