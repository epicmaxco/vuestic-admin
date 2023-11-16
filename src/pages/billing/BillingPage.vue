<template>
  <h1 class="h1">Billing information</h1>

  <VaSkeletonGroup v-if="cardStore.loading">
    <VaSkeleton class="mb-4" variant="square" height="120px" />
    <VaSkeleton class="mb-4" variant="square" height="120px" />
    <VaSkeleton variant="square" height="120px" />
  </VaSkeletonGroup>

  <template v-else>
    <MembeshipTier />
    <PaymentInfo />
    <Invoices />
  </template>
</template>

<script setup lang="ts">
  import MembeshipTier from './MembeshipTier.vue'
  import PaymentInfo from './PaymentInfo.vue'
  import { usePaymentCardsStore } from '../../stores/payment-cards'
  import Invoices from './Invoices.vue'

  const cardStore = usePaymentCardsStore()
  cardStore.load()
</script>
