<template>
  <h1 class="h1">Billing information</h1>

  <VaSkeletonGroup v-if="cardStore.loading">
    <VaSkeleton class="mb-4" height="160px" variant="squared" />
    <VaSkeleton class="mb-4" height="160px" variant="squared" />
    <VaSkeleton height="360px" variant="squared" />
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
