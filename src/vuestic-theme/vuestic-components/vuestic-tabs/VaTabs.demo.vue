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
        <va-tab v-for="n in count" :key="n">{{'item' + n}}</va-tab>
      </va-tabs>
      <div v-for="item in count" :key="item">
        <p v-if="'item' + item === value">{{'item' + item}}</p>
      </div>
    </VbContainer>
    <VbContainer>
      <button @click="count++">add item</button>
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
