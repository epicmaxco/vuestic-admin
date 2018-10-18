<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 500px;">
      <vuestic-radio-button
        v-model="selectedOption"
        option="one"
      >
        One
      </vuestic-radio-button>
      <vuestic-radio-button
        v-model="selectedOption"
        option="two"
      >
        Two
      </vuestic-radio-button>
      <vuestic-radio-button
        v-model="selectedOption"
        option="three"
      >
        Three
      </vuestic-radio-button>
      <vuestic-radio-button
        v-model="selectedOption1"
        option="four"
        disable
      >
        Four
      </vuestic-radio-button>
      <vuestic-radio-button
        v-model="selectedOption1"
        option="five"
        disable
      >
        Five
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
      selectedOption2: 'five'
    }
  },
}
</script>
