<template>
  <VbDemo>
    <VbContainer title="Design">
      <div style="height: 200px; overflow-y: scroll">
        <img src="http://i68.tinypic.com/ne84fs.png" alt="">
      </div>
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
          icon="fa fa-anchor"
        />
      </va-input>
    </VbContainer>
    <VbContainer title="Input With Button">
      <va-input
        v-model="text"
        label="Name"
      >
        <va-button style="margin-right: 0;" small>
          Upload
        </va-button>
      </va-input>
    </VbContainer>
    <VbContainer title="Input With Prepend Slot">
      <va-input
        v-model="text"
        label="Name"
      >
        <va-icon
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
    <VbContainer title="Input With Success">
      <va-input
        v-model="text"
        label="Name"
        success
      />
    </VbContainer>
    <VbContainer title="Success and Removable">
      <va-input
        v-model="text"
        label="Name"
        removable
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
    VaIcon,
  },
  data () {
    return {
      empty: '',
      text: 'Vuestic',
      phone: '33 310-86-24',
      messages: ['Required field'],
      errorMessages: ['Detailed error message'],
    }
  },
}
</script>
