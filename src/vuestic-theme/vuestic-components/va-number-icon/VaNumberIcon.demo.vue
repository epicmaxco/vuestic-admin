<template>
  <VbDemo>
    <VbContainer title="0">
      <va-number-icon :number="0">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="1 sign">
      <va-number-icon :number="1">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="2 signs">
      <va-number-icon :number="12">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="3 sign">
      <va-number-icon :number="999">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="4 sign">
      <va-number-icon :number="1234">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="5 sign">
      <va-number-icon :number="12345">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="6 sign">
      <va-number-icon :number="123456">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="7 sign">
      <va-number-icon :number="1234567">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="8 sign">
      <va-number-icon :number="12345678">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="9 sign">
      <va-number-icon :number="123456789">Statuses</va-number-icon>
    </VbContainer>
    <VbContainer title="14 sign">
      <va-number-icon :number="12345678912345">Statuses</va-number-icon>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaNumberIcon from './VaNumberIcon'
export default {
  components: { VaNumberIcon }
}
</script>

<style lang="scss" scoped>
</style>
