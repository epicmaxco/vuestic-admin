<template>
  <va-modal hide-default-actions model-value size="small" @cancel="emits('close')">
    <h3 class="va-h4 mb-4">Add Payment Card</h3>
    <PaymentCardEdit :payment-card="paymentCard" submit-text="Add Card" @save="updateCard" @cancel="emits('close')" />
  </va-modal>
</template>

<script setup lang="ts">
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
    init({ message: "You've successfully created a new Payment Card", color: 'success' })
    emits('close')
  }
</script>
