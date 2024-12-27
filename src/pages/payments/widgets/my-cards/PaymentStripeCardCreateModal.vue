<template>
  <VaModal hide-default-actions model-value size="small" close-button @cancel="emits('close')">
    <h3 class="va-h4 mb-4">Add payment card</h3>

    <!-- Notice Section -->
    <VaAlert color="info" class="mb-4">
      Please use
      <a
        href="https://docs.stripe.com/testing?testing-method=card-numbers"
        target="_blank"
        class="text-primary underline"
        >Stripe test cards</a
      >
      for testing purposes.
    </VaAlert>

    <PaymentStripeCardAdd @cancel="emits('close')" @save="saveCard" />
  </VaModal>
</template>

<script lang="ts" setup>
import { useToast } from 'vuestic-ui'

import PaymentStripeCardAdd from './PaymentStripeCardAdd.vue'
import { useStripePaymentCardsStore } from '../../../../stores/stripe-cards'

import type { Stripe } from 'stripe'

const emits = defineEmits(['close'])
const store = useStripePaymentCardsStore()
const { init } = useToast()

const saveCard = async (paymentMethod: Stripe.PaymentMethod) => {
  await store.create(paymentMethod.id)
  init({ message: "You've successfully added a new payment card", color: 'success' })
  emits('close')
}
</script>
