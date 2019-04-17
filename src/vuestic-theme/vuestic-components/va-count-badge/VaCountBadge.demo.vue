<template>
  <VbDemo>
    <VbCard width="150px" title="0">
      Statuses <va-count-badge :number="0"/>
    </VbCard>
    <VbCard width="150px" title="1 sign">
      Statuses <va-count-badge :number="1"/>
    </VbCard>
    <VbCard width="150px" title="2 signs">
      Statuses <va-count-badge :number="12"/>
    </VbCard>
    <VbCard width="150px" title="3 sign">
      Statuses <va-count-badge :number="999"/>
    </VbCard>
    <VbCard width="150px" title="4 sign">
      Statuses <va-count-badge :number="1234"/>
    </VbCard>
    <VbCard width="150px" title="5 sign">
      Statuses <va-count-badge :number="12345"/>
    </VbCard>
    <VbCard width="150px" title="6 sign">
      Statuses <va-count-badge :number="123456"/>
    </VbCard>
    <VbCard width="150px" title="7 sign">
      Statuses <va-count-badge :number="1234567"/>
    </VbCard>
    <VbCard width="150px" title="8 sign">
      Statuses <va-count-badge :number="12345678"/>
    </VbCard>
    <VbCard width="150px" title="9 sign">
      Statuses <va-count-badge :number="123456789"/>
    </VbCard>
    <VbCard width="150px" title="14 sign">
      Statuses <va-count-badge :number="12345678912345"/>
    </VbCard>
    <VbCard width="150px" title="Colored with theme">
      Statuses <va-count-badge :number="5" color="info"/>
    </VbCard>
    <VbCard width="150px" title="Colored with color">
      Statuses <va-count-badge :number="5" color="#25A626"/>
    </VbCard>
  </VbDemo>
</template>

<script>
import VaCountBadge from './VaCountBadge'
export default {
  components: { VaCountBadge },
}
</script>

<style lang="scss" scoped>
</style>
