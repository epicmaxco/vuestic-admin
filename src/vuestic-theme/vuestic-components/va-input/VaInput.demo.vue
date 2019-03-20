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
        v-model="text"
        label="Name"
      />
    </VbContainer>
    <VbContainer title="Input With Message">
      <va-input
        v-model="text"
        :messages="messages"/>
    </VbContainer>
    <VbContainer title="Disabled Input">
      <va-input
        v-model="text"
        disabled
      />
    </VbContainer>
    <VbContainer title="Readonly Input">
      <va-input
        v-model="text"
        readonly
      />
    </VbContainer>
    <VbContainer title="Input With Icon">
      <va-input
        v-model="text"
        label="Name"
        :messages="messages"
        prepend-icon="fa fa-anchor"
        append-icon="fa fa-anchor"
      >
        <va-icon
          icon="fa fa-anchor"
        />
      </va-input>
    </VbContainer>
    <VbContainer title="Removable Icon">
      <va-input
        v-model="text"
        removable
      >
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
