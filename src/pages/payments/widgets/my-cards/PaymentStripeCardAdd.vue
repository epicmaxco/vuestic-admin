<template>
  <VaForm ref="form" @submit.prevent="submit">
    <VaInput
      v-model="cardholderName"
      :rules="[(v) => !!v || 'Cardholder Name is required']"
      class="mb-4"
      label="Cardholder Name"
    />

    <div class="mb-4">
      <label for="card-element">Card Details</label>
      <StripeElements
        v-if="stripeLoaded"
        v-slot="{ elements }"
        ref="elms"
        stripe-key="pk_test_51QMQglG0RyyEe7XHRvDnZREz1UjN8w3IM0X8klwml2yDf2JcCpHM7WzqFNK1UpXJRTo0jr7uUNDM5CD2syxGLojV00wrOHlZb9"
      >
        <StripeElement ref="cardElement" :elements="elements" />
      </StripeElements>
    </div>

    <div class="flex justify-end gap-3">
      <VaButton color="secondary" preset="secondary" @click="emits('cancel')">Cancel</VaButton>
      <VaButton @click="submit">Save Card</VaButton>
    </div>
  </VaForm>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
import { useToast } from 'vuestic-ui'

import { StripeElements, StripeElement } from 'vue-stripe-js'

import type { Stripe } from 'stripe'

const emits = defineEmits(['save', 'cancel'])

const stripeLoaded = ref(false)
const elms = ref(null)
const cardElement = ref(null)
const cardholderName = ref('')
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

  const { error, paymentMethod } = (await elms.value.instance.createPaymentMethod({
    type: 'card',
    card: cardElement.value.stripeElement,
    billing_details: { name: cardholderName.value },
  })) as { error?: Stripe.errors.StripeError; paymentMethod?: Stripe.PaymentMethod }
  console.log('stripe add', paymentMethod)
  if (error) {
    init({ message: error.message, color: 'error' })
  } else {
    emits('save', {
      id: paymentMethod.id,
      brand: paymentMethod.card.brand,
      last4: paymentMethod.card.last4,
    })
    init({ message: 'Card added successfully', color: 'success' })
  }
}

onBeforeMount(() => {
  if (window.Stripe) {
    stripeLoaded.value = true
    return
  }

  loadStripe(
    'pk_test_51QMQglG0RyyEe7XHRvDnZREz1UjN8w3IM0X8klwml2yDf2JcCpHM7WzqFNK1UpXJRTo0jr7uUNDM5CD2syxGLojV00wrOHlZb9',
  )
    .then((stripeInstance) => {
      console.log('stripe loaded', stripeInstance)
      stripeLoaded.value = true
    })
    .catch((error) => {
      console.error('stripe load error', error)
    })
})
</script>

<style scoped>
/* Custom styles for Stripe Element */
#card-element {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
