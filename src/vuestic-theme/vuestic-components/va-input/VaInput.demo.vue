<template>
  <VbDemo>
    <VbContainer title="Simple Input">
      <va-input
        v-model="empty"
      />
    </VbContainer>
    <VbContainer title="Input Password">
      <va-input
        v-model="text"
        type="password"
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
      >
        <va-icon
          class="pb-1"
          icon="fa fa-anchor"
        />
      </va-input>
    </VbContainer>
    <VbContainer title="Input With Button">
      <va-input
        v-model="text"
        label="Name"
      >
        <va-button small>
          Upload File
        </va-button>
      </va-input>
    </VbContainer>
    <VbContainer title="Input With Prepend Slot">
      <va-input
        v-model="text"
        label="Name"
      >
        <va-icon
          class="pb-1"
          slot="prepend"
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
      />
    </VbContainer>
    <VbContainer title="Input With Error">
      <va-input
        v-model="text"
        label="Name"
        success
      />
    </VbContainer>
    <VbContainer title="Input With Error Message">
      <va-input
        v-model="text"
        label="Name"
        error
        :error-messages="errorMessages"/>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaInput from './VaInput'
import VaButton from './../va-button/VaButton'
import VaIcon from './../va-icon/VaIcon'

export default {
  components: {
    VaInput,
    VaButton,
    VaIcon
  },
  data () {
    return {
      empty: '',
      text: 'Vuestic',
      phone: '33 310-86-24',
      messages: ['Required field'],
      errorMessages: ['Detailed error message']
    }
  }
}
</script>
