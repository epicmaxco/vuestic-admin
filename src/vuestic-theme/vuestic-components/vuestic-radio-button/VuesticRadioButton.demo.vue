<template>
  <div class="demo-container" style="width: 200px;">
    <div class="demo-container__item" style="width: 200px;">
      <vuestic-radio-button
        :label="'forms.controls.radio' | translate"
        :id="'radio1'"
        :value="'option1'"
        :name="'radio'"
        v-model="radioModel"/>
      <vuestic-radio-button
        :label="'forms.controls.radio' | translate"
        :id="'radio2'"
        :value="'option2'"
        :name="'radio'"
        v-model="radioModel"/>
      <vuestic-radio-button
        :label="'forms.controls.radio' | translate"
        :id="'radio3'"
        :value="'option3'"
        :name="'radio'"
        v-model="radioModel"/>
      <vuestic-radio-button
        :label="'Disabled'"
        :id="'radio3'"
        :value="'option4'"
        :name="'radio'"
        disabled
        v-model="radioModel"/>
    </div>
  </div>
</template>

<script>
import VuesticRadioButton from './VuesticRadioButton'
export default {
  components: {
    VuesticRadioButton
  },
  data () {
    return {
      radioModel: 'option1'
    }
  }
}
</script>
