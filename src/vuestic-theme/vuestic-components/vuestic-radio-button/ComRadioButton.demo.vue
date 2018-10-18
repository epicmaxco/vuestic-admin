<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 500px;">
      <com-radio-button
        v-model="selectedOption"
        option="one"
      >
        One
      </com-radio-button>
      <com-radio-button
        v-model="selectedOption"
        option="two"
      >
        Two
      </com-radio-button>
      <com-radio-button
        v-model="selectedOption"
        option="three"
      >
        Three
      </com-radio-button>
    </div>
    <div class="demo-container__item" style="width: 500px;">
     {{ selectedOption }}
    </div>
  </div>
</template>

<script>
import ComRadioButton from './ComRadioButton '

export default {
  components: { ComRadioButton },
  data () {
    return {
      selectedOption: 'one',
    }
  },
}
</script>
