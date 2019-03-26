<template>
  <VbDemo>
    <VbContainer style="width: 100%">
      <va-tabs
        v-model="value"
        :right="option === 'align-right'"
        :grow="option == 'grow'"
        :color="color"
        :hide-slider="hideSlider"
      >
        <va-tab>{{'item1item1item1item1item1'}}</va-tab>
        <va-tab
          v-for="item in count"
          :key="item"
        >
          {{'item'+ item}}
        </va-tab>
      </va-tabs>
      {{value}}
    </VbContainer>
    <VbContainer>
      <button @click="count++">add item</button>
      <button @click="count--">remove item</button>
    </VbContainer>
    <VbContainer>
      <vuestic-radio-button
        v-for="value in options"
        :key="value"
        v-model="option"
        :option="value"
      />
    </VbContainer>
    <VbContainer>
      <vuestic-checkbox v-model="hideSlider" label="hide-slider"/>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VuesticCheckbox from '../vuestic-checkbox/VuesticCheckbox'
import VuesticRadioButton from '../vuestic-radio-button/VuesticRadioButton'
import VuesticAdvancedColorPicker
  from '../vuestic-color-picker/VuesticAdvancedColorPicker'

export default {
  components: {
    VuesticAdvancedColorPicker,
    VuesticRadioButton,
    VuesticCheckbox,
  },
  data () {
    return {
      count: 6,
      value: 4,
      options: ['default', 'align-right', 'grow'],
      option: 'default',
      color: 'White',
      hideSlider: false,
    }
  },
}
</script>
