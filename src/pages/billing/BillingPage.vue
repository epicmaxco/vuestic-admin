<template>
  <h1 class="page-title">Billing information</h1>

  <va-skeleton-group v-if="cardStore.loading">
    <va-skeleton class="mb-4" variant="square" height="120px" />
    <va-skeleton class="mb-4" variant="square" height="120px" />
    <va-skeleton variant="square" height="120px" />
  </va-skeleton-group>

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
