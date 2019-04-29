<template>
  <VbDemo>
    <VbCard title="With tab">
      <va-tabs :value="1">
        <va-tab>One</va-tab>
        <va-tab>Two</va-tab>
      </va-tabs>
      <va-separator/>
    </VbCard>
    <VbCard title="With card">
      <va-card>
        Some
        <va-separator/>
        Some
      </va-card>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaSeparator from './VaSeparator.vue'
import VaTabs from '../va-tabs/VaTabs'
import VaTab from '../va-tabs/VaTab'
import VaCard from './VaCard'

export default {
  components: {
    VaCard,
    VaTab,
    VaTabs,
    VaSeparator,
  },
}
</script>
