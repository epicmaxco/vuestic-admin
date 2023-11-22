<template>
  <VaCard class="mb-6">
    <VaCardContent>
      <h3 class="h3">Payment info</h3>
      <div class="flex items-center justify-between md:justify-items-stretch">
        <div
          class="flex grow flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-1 justify-between items-start md:items-center"
        >
          <div class="md:w-48">
            <p class="mb-1">Payment plan</p>
            <p class="font-bold">
              {{ paymentPlan.isYearly ? paymentPlan.priceYear : paymentPlan.priceMonth }}&nbsp;/{{
                paymentPlan.isYearly ? 'yearly' : 'monthly'
              }}
            </p>
          </div>
        </div>
        <div class="md:w-48 flex flex-col justify-end items-end">
          <VaButton :to="{ name: 'pricing-plans' }" preset="primary"
            >Switch to {{ paymentPlan.isYearly ? 'monthly' : 'annual' }}
          </VaButton>
          <div v-if="!paymentPlan.isYearly" class="mt-2 text-regularSmall">
            <span>{{ paymentPlan.priceYear }}&nbsp;/year</span>
            <span class="text-danger ml-1">save 16%</span>
          </div>
        </div>
      </div>

      <template v-if="paymentCard">
        <VaDivider />

        <div class="flex items-center justify-between md:justify-items-stretch">
          <div
            class="flex grow flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-1 justify-between items-start md:items-center"
          >
            <div class="md:w-48">
              <p class="mb-1">Payment method</p>
              <p class="font-bold capitalize">{{ paymentCard.paymentSystem }} {{ paymentCard.cardNumberMasked }}</p>
            </div>
          </div>
          <div class="md:w-48 flex justify-end">
            <VaButton :to="{ name: 'payments' }" preset="primary">Change card</VaButton>
          </div>
        </div>
      </template>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { usePaymentCardsStore } from '../../stores/payment-cards'
import { computed } from 'vue'

const paymentPlan = {
  id: '1',
  name: 'Gold',
  isYearly: false,
  type: 'current',
  padletsUsed: 19,
  padletsTotal: '20',
  priceMonth: '$6.99',
  priceYear: '$69.99',
  switchToYearlySave: '16%',
  uploadLimit: '100MB',
}

const cardStore = usePaymentCardsStore()

const paymentCard = computed(() => cardStore.currentPaymentCard)
</script>
