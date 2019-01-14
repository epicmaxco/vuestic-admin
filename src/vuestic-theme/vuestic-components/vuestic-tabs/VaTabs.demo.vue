<template>
  <div class="demo-container va-row column">
    <div class="demo-container__item" style="width: 100%">
      <va-tabs
        v-model="value"
        :right="option==='align-right'"
        :grow="option == 'grow'"
        :color="color"
        :hide-slider="hideSlider"
      >
        <va-tab v-for="n in count" :key="n">{{'item' + n}}</va-tab>
      </va-tabs>
      <div v-for="item in count" :key="item">
        <p v-if="'item' + item === value">{{'item' + item}}</p>
      </div>
    </div>
    <div class="demo-container__item">
      <button @click="count++">add item</button>
    </div>
    <div class="demo-container__item">
      <vuestic-radio-button
        v-for="value in options"
        :key="value"
        v-model="option"
        :option="value"
      />
    </div>
    <div class="demo-container__item">
      <vuestic-checkbox v-model="hideSlider" label="hide-slider"/>
    </div>
    <div class="demo-container__item">
      <vuestic-advanced-color-picker v-model="color"/>
    </div>
  </div>
</template>

<script>
import VaTabs from './VaTabs'
import VaTab from './VaTab'
import VuesticCheckbox from '../vuestic-checkbox/VuesticCheckbox'
import VuesticRadioButton from '../vuestic-radio-button/VuesticRadioButton'
import VuesticAdvancedColorPicker
  from '../vuestic-color-picker/VuesticAdvancedColorPicker'

export default {
  components: {
    VuesticAdvancedColorPicker,
    VuesticRadioButton,
    VuesticCheckbox,
    VaTabs,
    VaTab
  },
  data () {
    return {
      count: 4,
      value: 'item1',
      options: ['default', 'align-right', 'grow'],
      option: 'default',
      color: 'White',
      hideSlider: false
    }
  }
}
</script>
