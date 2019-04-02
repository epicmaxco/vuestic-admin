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
        <va-tab>{{'item0'}}</va-tab>
        <va-tab>{{'item1item1itemitem1temitem1temitem1temitem1'}}</va-tab>
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
      <va-radio-button
        v-for="value in options"
        :key="value"
        v-model="option"
        :option="value"
      />
    </VbContainer>
    <VbContainer>
      <va-checkbox v-model="hideSlider" label="hide-slider"/>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaCheckbox from '../va-checkbox/VaCheckbox'
import VaRadioButton from '../va-radio-button/VaRadioButton'
import VaAdvancedColorPicker
  from '../va-color-picker/VaAdvancedColorPicker'

export default {
  components: {
    VaAdvancedColorPicker,
    VaRadioButton,
    VaCheckbox,
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
