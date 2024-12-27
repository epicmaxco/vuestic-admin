<template>
  <div
    class="min-h-[114px] p-4 rounded-lg border border-dashed border-backgroundBorder flex flex-col sm:flex-row items-start sm:items-center gap-6"
  >
    <div class="flex flex-col gap-2 flex-grow">
      <div class="text-lg font-bold">{{ billingDetails?.name || 'Unnamed Card' }}</div>
      <div class="flex gap-4 items-center">
        <PaymentSystem :type="card.brand" />
        <div>
          <div class="text-[15px] font-bold mb-2 capitalize">{{ card.display_brand }} **** {{ card.last4 }}</div>
          <div class="text-secondary">Expires {{ card.exp_month }}/{{ card.exp_year }}</div>
        </div>
      </div>
      <div class="text-sm text-secondary">Added on {{ creationDate }}</div>
    </div>
    <div class="w-full sm:w-auto flex-none flex sm:block">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import type { PaymentCard } from '../../pages/payments/types'
import PaymentSystem from '../../pages/payments/payment-system/PaymentSystem.vue'

const props = defineProps<{
  card: PaymentCard
  billingDetails?: {
    name?: string
  }
}>()

const creationDate = computed(() => {
  return props.card.created ? new Date(props.card.created * 1000).toLocaleDateString() : 'Unknown'
})
</script>
