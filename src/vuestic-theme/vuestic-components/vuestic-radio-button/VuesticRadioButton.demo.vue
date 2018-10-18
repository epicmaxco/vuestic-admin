<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 200px;">
      <vuestic-radio-button
        :label="'forms.controls.radio' | translate"
        :id="'radio1'"
        :value="{id: 4}"
        :name="'radio'"
        v-model="radioModel"
      />
      <vuestic-radio-button
        :label="'forms.controls.radio' | translate"
        :id="'radio2'"
        :value="Two"
        :name="'radio'"
        v-model="radioModel"
      />
      <vuestic-radio-button
        :label="'forms.controls.radio' | translate"
        :id="'radio3'"
        :value="'option3'"
        :name="'radio'"
        v-model="radioModel"
      />
      <vuestic-radio-button
        :label="'Disabled'"
        :id="'radio3'"
        :value="'option4'"
        :name="'radio'"
        disabled
        v-model="radioModel"
      />
    </div>

    <div class="demo-container__item" style="width: 200px;">
      <vuestic-radio-button
        v-for="option in options"
        :key="option.id"
        :label="option.name"
        :option="option"
        v-model="selectedOption"
      />
    </div>
    <div class="demo-container__item" style="width: 200px;">
      <vuestic-radio-button
        v-for="option in options"
        :key="option.id"
        :label="option.name"
        :option="option"
        v-model="selectedOption"
      />
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
      radioModel: 'option1',

      options: [
        { id: 1, name: 'One' },
        { id: 2, name: 'Two' },
      ],
      selectedOption: null,
    }
  }
}
</script>
