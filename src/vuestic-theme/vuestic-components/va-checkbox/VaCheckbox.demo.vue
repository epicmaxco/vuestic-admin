<template>
  <VbDemo>
    <VbCard title="Default">
      <va-checkbox v-model="value" label="Selected"/>
    </VbCard>
    <VbCard title="Long label">
      <va-checkbox
        style="width: 200px"
        v-model="value"
        label="Long long long long long long long long long long long long long long long label"
      />
    </VbCard>
    <VbCard title="Readonly">
      <va-checkbox v-model="value" label="Readonly" readonly/>
    </VbCard>
    <VbCard title="Disabled">
      <va-checkbox v-model="value" label="Disabled" disabled/>
    </VbCard>
    <VbCard title="Disabled to normal comparison">
      <va-checkbox :value="false" label="Disabled and false" disabled/>
      <va-checkbox :value="false" label="false"/>
      <va-checkbox :value="true" label="Disabled and true" disabled/>
      <va-checkbox :value="true" label="true"/>
    </VbCard>
    <VbCard title="Indeterminate">
      <va-checkbox v-model="value" label="Indeterminate" indeterminate/>
    </VbCard>

    <VbCard title="Error">
      <va-checkbox v-model="value" label="Error" error/>
    </VbCard>
    <VbCard title="String error message">
      <va-checkbox
        v-model="value"
        label="Error messages"
        :errorMessages="stringErrorMessage"
      />
    </VbCard>
    <VbCard title="Array error messages">
      <va-checkbox
        v-model="value"
        :errorMessages="errorMessages"
        label="Multiple error messages"
      />
    </VbCard>
    <VbCard title="Array error messages with maxed limit">
      <va-checkbox
        style="width: 200px"
        v-model="value"
        :errorMessages="errorMessages"
        :errorCount="3"
        label="Label"
      />
    </VbCard>
    <VbCard title="Errors + disabled">
      <va-checkbox
        v-model="value"
        error
        disabled
        label="Error + disabled"
      />
    </VbCard>
    <VbCard title="No label">
      <va-checkbox v-model="value"/>
    </VbCard>
    <VbCard title="Accepts id">
      <va-checkbox
        :value="true"
        id="checkbox-id"
      />
    </VbCard>
    <VbCard title="Accepts name">
      <va-checkbox
        :value="true"
        name="checkbox-name"
      />
    </VbCard>
    <VbCard title="Array as model">
      {{selection}}
      <va-checkbox v-model="selection" array-value='one' label="one"/>
      <va-checkbox v-model="selection" array-value='two' label="two"/>
      <va-checkbox v-model="selection" array-value='three' label="three"/>
      <va-checkbox v-model="selection" array-value='four' label="four"/>
    </VbCard>
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
      selection: [],
      stringErrorMessage: 'String error message',
      errorMessages: ['Error message', 'Another error message', 'Long long long long long long long long long long long long long long error message'],
    }
  },
}
</script>
