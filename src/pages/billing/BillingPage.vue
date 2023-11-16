<template>
  <h1 class="h1">Billing information</h1>

  <VaSkeletonGroup v-if="cardStore.loading">
    <VaSkeleton class="mb-4" height="120px" variant="square" />
    <VaSkeleton class="mb-4" height="120px" variant="square" />
    <VaSkeleton height="120px" variant="square" />
  </VaSkeletonGroup>

  <template v-else>
    <MembeshipTier />
    <PaymentInfo />
    <Invoices />
  </template>
</template>

<script lang="ts" setup>
  import MembeshipTier from './MembeshipTier.vue'
  import PaymentInfo from './PaymentInfo.vue'
  import { usePaymentCardsStore } from '../../stores/payment-cards'
  import Invoices from './Invoices.vue'

  const cardStore = usePaymentCardsStore()
  cardStore.load()
</script>
