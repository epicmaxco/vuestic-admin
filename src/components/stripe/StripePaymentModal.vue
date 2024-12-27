<template>
  <VaModal :model-value="display" close-button hide-default-actions title="Select a Payment Method">
    <CardList>
      <template #card-actions="{ card }">
        <VaButton v-if="stripeLoaded" :disabled="paymentProcessing" @click.stop="pay(card.id)">
          {{ paymentProcessing && payingCardId == card.id ? 'Processing...' : 'Pay' }}
        </VaButton>
      </template>
    </CardList>
  </VaModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useToast } from 'vuestic-ui'
import { useStripePaymentCardsStore } from '../../stores/stripe-cards'
import { useStripe } from '../../composables/useStripe'
import CardList from '../../components/stripe/StripeCardList.vue'

enum PaymentStatus {
  Paid = 'paid',
  Void = 'void',
  Uncollectible = 'uncollectible',
}

const props = defineProps<{
  display: boolean
  amount: number
  billingDetails?: Record<string, unknown>
}>()

const emits = defineEmits<{
  (e: 'success', invoice: unknown): void
  (e: 'close'): void
}>()

const { init } = useToast()
const store = useStripePaymentCardsStore()
const { stripeLoaded } = useStripe()

const paymentProcessing = ref<boolean>(false)
const payingCardId = ref<string | null>(null)

const handlePaymentStatus = (status: PaymentStatus) => {
  switch (status) {
    case PaymentStatus.Paid:
      init({ message: 'Payment Successful!', color: 'success' })
      break
    case PaymentStatus.Void:
      init({ message: 'Payment Failed. Please try again.', color: 'error' })
      break
    case PaymentStatus.Uncollectible:
      init({
        message: 'Payment cannot be completed due to insufficient funds or an invalid/blocked card.',
        color: 'warning',
      })
      break
    default:
      init({ message: 'Unknown payment status.', color: 'info' })
  }
}

const pay = async (cardId: string) => {
  paymentProcessing.value = true
  payingCardId.value = cardId
  try {
    const invoice = await store.processPayment(cardId, props.amount * 100)
    handlePaymentStatus(invoice?.status)
    emits('success', invoice)
  } catch (error) {
    console.error('Error processing payment:', error)
    init({ message: 'An error occurred during payment processing.', color: 'error' })
  } finally {
    paymentProcessing.value = false
    emits('close')
  }
}
</script>
