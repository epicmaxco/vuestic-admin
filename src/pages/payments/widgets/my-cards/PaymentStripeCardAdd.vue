<template>
  <VaForm ref="form" @submit.prevent="submit">
    <VaInnerLoading :loading="processingCardSave" />
    <VaInput
      v-model="cardholderName"
      :rules="[(v) => !!v || 'Cardholder Name is required']"
      class="mb-4"
      label="Cardholder Name"
    />

    <div class="mb-4">
      <label for="card-element">Card Details</label>
      <StripeElements v-if="stripeLoaded" v-slot="{ elements }" ref="elms" :stripe-key="STRIPE_PUBLIC_KEY">
        <StripeElement ref="cardElement" :elements="elements" :options="{ hidePostalCode: true }" />
      </StripeElements>
    </div>

    <div class="flex justify-end gap-3">
      <VaButton color="secondary" preset="secondary" @click="emits('cancel')">Cancel</VaButton>
      <VaButton @click="submit">Save Card</VaButton>
    </div>
  </VaForm>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast, VaInnerLoading } from 'vuestic-ui'
import { StripeElements, StripeElement } from 'vue-stripe-js'

import { useStripe } from '../../../../composables/useStripe'

import { STRIPE_PUBLIC_KEY } from '../../../../config/stripe'

import type { Stripe } from 'stripe'

const emits = defineEmits(['save', 'cancel'])

const { stripeLoaded } = useStripe()

const elms = ref(null)
const cardElement = ref(null)
const cardholderName = ref('')
const processingCardSave = ref(false)
const { init } = useToast()

const submit = async () => {
  if (!cardholderName.value) {
    init({ message: 'Cardholder Name is required', color: 'warning' })
    return
  }

  if (!elms.value?.instance) {
    init({ message: 'Stripe initialization failed', color: 'error' })
    return
  }
  processingCardSave.value = true
  const { error, paymentMethod } = (await elms.value.instance.createPaymentMethod({
    type: 'card',
    card: cardElement.value.stripeElement,
    billing_details: { name: cardholderName.value },
  })) as { error?: Stripe.errors.StripeError; paymentMethod?: Stripe.PaymentMethod }
  if (error) {
    init({ message: error.message, color: 'error' })
  } else {
    emits('save', {
      id: paymentMethod.id,
      brand: paymentMethod.card.brand,
      last4: paymentMethod.card.last4,
    })
  }
}
</script>

<style scoped>
/* Custom styles for Stripe Element */
#card-element {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
