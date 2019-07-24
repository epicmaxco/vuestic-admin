<template>
  <VbDemo>
    <VbCard title="Default">
      <va-input-wrapper :messages="messages">
        Input
      </va-input-wrapper>
    </VbCard>

    <VbCard title="Slots scheme">
      <va-input-wrapper :messages="messages">
        <div slot="prepend" style="width: 30px; height: 30px; border: 1px dotted black;" class="flex-center">
          <va-icon name="fa fa-volume-off"/>
        </div>
        <div style="width: 200px; height: 30px; border: 1px dotted black;">Default Slot</div>
        <div slot="append" style="width: 30px; height: 30px; border: 1px dotted black;" class="flex-center">
          <va-icon name="fa fa-volume-up"/>
        </div>
      </va-input-wrapper>
    </VbCard>

    <VbCard title="Error">
      <va-input-wrapper
        :errorMessages="errorMessages"
      >
        <div>Default Slot</div>
      </va-input-wrapper>
    </VbCard>

    <VbCard title="Error">
      <va-input-wrapper
        :errorMessages="errorMessages"
      >
        <div>Default Slot</div>
      </va-input-wrapper>
    </VbCard>

    <VbCard title="Input Wrapper For Checkbox and Radio Button">
      <va-input-wrapper :messages="messages">
        <va-checkbox name="agree-to-terms" v-model="agreedToTerms">
          <template slot="label">
            I agree to
            <a class="link" href="javascript:void(0);">Terms of use.</a>
          </template>
        </va-checkbox>
      </va-input-wrapper>

      <va-input-wrapper :messages="messages">
        <va-radio-button
          option="option1"
          v-model="radioSelectedOption"
          label="Radio"
        />
      </va-input-wrapper>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaInputWrapper from './VaInputWrapper'
import VaButton from './../va-button/VaButton'
import VaIcon from './../va-icon/VaIcon'
import VaCheckbox from '../va-checkbox/VaCheckbox'
import VaRadioButton from '../va-radio-button/VaRadioButton'

export default {
  components: {
    VaCheckbox,
    VaInputWrapper,
    VaButton,
    VaIcon,
    VaRadioButton,
  },
  data () {
    return {
      empty: '',
      agreedToTerms: false,
      radioSelectedOption: false,
      text: 'Vuestic',
      messages: ['Required field'],
      errorMessages: ['Detailed error message', 'Detailed error message', 'Detailed error message'],
    }
  },
}
</script>
