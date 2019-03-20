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
    <VbContainer title="Input Wrapper With Prepend Slot">
      <va-input-wrapper>
        <va-icon
          slot="prepend"
          icon="fa fa-anchor"
        />
      </va-input-wrapper>
    </VbContainer>
    <VbContainer title="Input Wrapper With Append Slot">
      <va-input-wrapper>
        <va-icon
          slot="prepend"
          icon="fa fa-anchor"
        />
      </va-input-wrapper>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaInputWrapper from './VaInputWrapper'

export default {
  components: {
    VaInputWrapper
  },
  data () {
    return {
      empty: '',
      text: 'Vuestic',
      messages: ['Required field'],
      errorMessages: ['Detailed error message']
    }
  }
}
</script>
