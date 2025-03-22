<template>
  <VaModal hide-default-actions model-value size="small" close-button @cancel="emits('close')">
    <h3 class="va-h4 mb-4">Add payment card</h3>
    <PaymentCardEdit :payment-card="paymentCard" submit-text="Add Card" @cancel="emits('close')" @save="updateCard" />
  </VaModal>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import PaymentCardEdit from './PaymentCardEdit.vue'
import { PaymentCard, PaymentSystemType } from '../../types'
import { usePaymentCardsStore } from '../../../../stores/payment-cards'
import { useToast } from 'vuestic-ui'

const isModalOpen = ref(false)

const emits = defineEmits(['close'])
const store = usePaymentCardsStore()
const { init } = useToast()

const paymentCard = reactive({
  id: Math.ceil(Math.random() * 100) + '',
  name: '',
  isPrimary: false,
  paymentSystem: PaymentSystemType.Visa,
  cardNumberMasked: '',
  expirationDate: '',
} satisfies PaymentCard)

const updateCard = (card: PaymentCard) => {
  isModalOpen.value = false
  store.create(card)
  init({ message: "You've successfully created a new payment card", color: 'success' })
  emits('close')
}
</script>
