<template>
  <VbDemo>
    <VbCard title="Design">
      <div style="height: 200px; overflow-y: scroll">
        <img src="http://i68.tinypic.com/ne84fs.png" alt="">
      </div>
    </VbCard>
    <VbCard title="Placeholder">
      <va-input
        v-model="empty"
        placeholder="Name"
      />
    </VbCard>
    <VbCard title="Label">
      <va-input
        v-model="text"
        label="Name"
      />
    </VbCard>
    <VbCard title="Label long">
      <va-input
        v-model="text"
        label="Name long long long long long long long long long long long long"
      />
    </VbCard>
    <VbCard title="Message">
      <va-input
        v-model="text"
        :messages="messages"
      />
    </VbCard>
    <VbCard title="Disabled">
      <va-input
        v-model="text"
        disabled
      />
    </VbCard>
    <VbCard title="Readonly Input">
      <va-input
        v-model="text"
        readonly
      />
    </VbCard>
    <VbCard title="Icon">
      <va-input
        v-model="text"
        label="Name"
      >
        <va-icon slot="append" name="fa fa-anchor"/>
      </va-input>
    </VbCard>
    <VbCard title="Button">
      <va-input
        v-model="text"
        label="Name"
      >
        <va-button slot="append" style="margin-right: 0;" small>
          Upload
        </va-button>
      </va-input>
    </VbCard>
    <VbCard title="Prepend Slot">
      <va-input
        v-model="text"
        label="Name"
      >
        <va-icon
          slot="prepend"
          name="fa fa-anchor"
        />
      </va-input>
    </VbCard>
    <VbCard title="Append Slot">
      <va-input
        v-model="text"
        label="Name"
      >
        <va-icon
          slot="append"
          name="fa fa-anchor"
        />
      </va-input>
    </VbCard>
    <VbCard title="Removable Icon">
      <va-input
        v-model="text"
        removable
      >
      </va-input>
    </VbCard>
    <VbCard title="Error">
      <va-input
        v-model="text"
        label="Name"
        error
      />
    </VbCard>
    <VbCard title="Success">
      <va-input
        v-model="text"
        label="Name"
        success
      />
    </VbCard>
    <VbCard title="Success and Removable">
      <va-input
        v-model="text"
        label="Name"
        removable
        success
        :messages="successMessages"
      />
    </VbCard>
    <VbCard title="Error Message">
      <va-input
        v-model="text"
        label="Name"
        error
        :error-messages="errorMessages"
      />
    </VbCard>
    <VbCard title="Error count 2">
      <va-input
        v-model="text"
        label="Name"
        error
        :errorCount="2"
        :error-messages="['one', 'two']"
      />
    </VbCard>
    <VbCard title="Textarea">
      <va-input
        v-model="text"
        label="Name"
        type="textarea"
      />
    </VbCard>
    <VbCard title="Textarea limits">
      <va-input
        v-model="text"
        label="Name"
        type="textarea"
        :minRows="3"
        :maxRows="8"
      />
    </VbCard>
    <VbCard title="Textarea autosize">
      <va-input
        v-model="text"
        label="Name"
        type="textarea"
        autosize
      />
    </VbCard>
    <VbCard title="Textarea autosize limits">
      <va-input
        v-model="text"
        label="Name"
        type="textarea"
        autosize
        :minRows="3"
        :maxRows="8"
      />
    </VbCard>
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
      text: 'Vuestic\nLine 2\nLine 3\nLine 4\nLine 5',
      phone: '33 310-86-24',
      messages: ['Required field'],
      errorMessages: ['Detailed error message'],
      successMessages: ['Success message'],
    }
  },
}
</script>
