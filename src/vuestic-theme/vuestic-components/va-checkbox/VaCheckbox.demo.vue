<template>
  <VbDemo>
    <VbContainer title="Default">
      <va-checkbox v-model="value" label="Selected"/>
    </VbContainer>
    <VbContainer title="Long label">
      <va-checkbox
        style="width: 200px"
        v-model="value"
        label="Long long long long long long long long long long long long long long long label"
      />
    </VbContainer>
    <VbContainer title="Readonly">
      <va-checkbox v-model="value" label="Readonly" readonly/>
    </VbContainer>
    <VbContainer title="Disabled">
      <va-checkbox v-model="value" label="Disabled" disabled/>
    </VbContainer>
    <VbContainer title="Disabled to normal comparison">
      <va-checkbox :value="false" label="Disabled and false" disabled/>
      <va-checkbox :value="false" label="false"/>
      <va-checkbox :value="true" label="Disabled and true" disabled/>
      <va-checkbox :value="true" label="true"/>
    </VbContainer>

    <VbContainer title="Error">
      <va-checkbox v-model="value" label="Error" error/>
    </VbContainer>
    <VbContainer title="String error message">
      <va-checkbox
        v-model="value"
        label="Error messages"
        :errorMessages="stringErrorMessage"
      />
    </VbContainer>
    <VbContainer title="Array error messages">
      <va-checkbox
        v-model="value"
        :errorMessages="errorMessages"
        label="Multiple error messages"
      />
    </VbContainer>
    <VbContainer title="Array error messages with maxed limit">
      <va-checkbox
        style="width: 200px"
        v-model="value"
        :errorMessages="errorMessages"
        :errorCount="3"
        label="Label"
      />
    </VbContainer>
    <VbContainer title="Errors + disabled">
      <va-checkbox
        v-model="value"
        error
        disabled
        label="Error + disabled"
      />
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaCheckbox from './VaCheckbox'

export default {
  components: {
    VaCheckbox,
  },
  data () {
    return {
      value: true,
      stringErrorMessage: 'String error message',
      errorMessages: ['Error message', 'Another error message', 'Long long long long long long long long long long long long long long error message'],
    }
  },
}
</script>
