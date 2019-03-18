<template>
  <VbDemo>
    <VbContainer title="Simple Input">
      <va-input
        v-model="empty"
      />
    </VbContainer>
    <VbContainer title="Input With Placeholder">
      <va-input
        v-model="empty"
        placeholder="Name"
      />
    </VbContainer>
    <VbContainer title="Input With Label">
      <va-input
        v-model="empty"
        label="Name"
      />
    </VbContainer>
    <VbContainer title="Input With Message">
      <va-input
        v-model="text"
        :messages="messages"/>
    </VbContainer>
    <VbContainer title="Input With Icon">
      <va-input
        v-model="text"
        label="Name"
        error
        :messages="messages"
        :error-messages="messages">
      </va-input>
    </VbContainer>
    <VbContainer title="Input With Error">
      <va-input
        v-model="text"
        label="Name"
        error
        :error-messages="messages"/>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaInput from './VaInput'

export default {
  components: {
    VaInput
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
