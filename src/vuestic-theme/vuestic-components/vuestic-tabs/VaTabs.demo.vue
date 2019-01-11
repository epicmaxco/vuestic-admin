<template>
  <div class="demo-container va-row column">
    <div class="demo-container__item">
      <va-tabs
        v-model="value"
        :right="alignValue==='align-right'"
        :grow="alignValue == 'grow'"
        :color="color"
      >
        <va-tab>item1</va-tab>
        <va-tab disabled>item2</va-tab>
        <va-tab>item3</va-tab>
      </va-tabs>
      <p v-if="value === 'item1'">First</p>
      <p v-if="value === 'item2'">Second</p>
      <p v-if="value === 'item3'">Third</p>
    </div>
    <div class="demo-container__item">
      <button @click="count++">add item</button>
    </div>
    <div class="demo-container__item">
      <vuestic-radio-button
        v-for="value in alignValues"
        :key="value"
        v-model="alignValue"
        :option="value"
      />
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
      count: 3,
      value: 'item1',
      alignValues: ['default', 'align-right', 'grow'],
      alignValue: 'default',
      color: 'White'
    }
  }
}
</script>
