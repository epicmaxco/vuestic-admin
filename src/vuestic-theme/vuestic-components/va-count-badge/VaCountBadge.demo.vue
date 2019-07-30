<template>
  <VbDemo>
    <VbCard title="0">
      <va-count-badge :number="0">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="1 sign">
      <va-count-badge :number="1">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="2 signs">
      <va-count-badge :number="12">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="3 sign">
      <va-count-badge :number="999">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="4 sign">
      <va-count-badge :number="1234">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="5 sign">
      <va-count-badge :number="12345">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="6 sign">
      <va-count-badge :number="123456">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="7 sign">
      <va-count-badge :number="1234567">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="8 sign">
      <va-count-badge :number="12345678">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="9 sign">
      <va-count-badge :number="123456789">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="14 sign">
      <va-count-badge :number="12345678912345">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="Colored with theme">
      <va-count-badge :number="5" color="info">Statuses</va-count-badge>
    </VbCard>
    <VbCard title="Colored with color">
      <va-count-badge :number="5" color="#25A626">Statuses</va-count-badge>
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
