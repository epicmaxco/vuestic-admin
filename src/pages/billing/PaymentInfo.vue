<template>
  <va-card class="mb-6">
    <va-card-content>
      <h2 class="block-title">Payment info</h2>
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
          <va-button preset="primary" @click="initiateSwitch"
            >Switch to {{ paymentPlan.isYearly ? 'monthly' : 'annual' }}</va-button
          >
          <div v-if="!paymentPlan.isYearly" class="mt-2 text-regularSmall">
            <span>{{ paymentPlan.priceYear }}&nbsp;/year</span>
            <span class="text-danger ml-1">save 16%</span>
          </div>
        </div>
      </div>

      <template v-if="paymentCard">
        <va-divider />

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
            <va-button preset="primary">Change card</va-button>
          </div>
        </div>
      </template>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
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

  const initiateSwitch = () => {}
</script>
