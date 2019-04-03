<template>
  <VbDemo>
    <VbContainer title="Simple Input Wrapper">
      <va-input-wrapper/>
    </VbContainer>
    <VbContainer title="Input Wrapper With Messages">
      <va-input-wrapper
        :messages="messages"
      />
    </VbContainer>
    <VbContainer title="Error Input Wrapper">
      <va-input-wrapper
        error
      />
    </VbContainer>
    <VbContainer title="Success Input Wrapper">
      <va-input-wrapper
        success
      />
    </VbContainer>
    <VbContainer title="Error Input Wrapper With Messages">
      <va-input-wrapper
        error
        :error-messages="errorMessages"
      />
    </VbContainer>
    <VbContainer title="Input Wrapper With Default Slot">
      <va-input-wrapper>
        <va-button>Button</va-button>
      </va-input-wrapper>
    </VbContainer>
    <VbContainer title="Input Wrapper With Slot">
      <va-input-wrapper>
        <va-icon
          class="pb-1"
          slot="prepend"
          icon="fa fa-anchor"
        />
      </va-input-wrapper>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaInputWrapper from './VaInputWrapper'
import VaButton from './../va-button/VaButton'
import VaIcon from './../va-icon/VaIcon'

export default {
  components: {
    VaInputWrapper,
    VaButton,
    VaIcon,
  },
  data () {
    return {
      empty: '',
      text: 'Vuestic',
      messages: ['Required field'],
      errorMessages: ['Detailed error message'],
    }
  },
}
</script>
