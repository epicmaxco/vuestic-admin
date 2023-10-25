// src/stores/cards.ts

import { defineStore } from 'pinia'
import { sleep } from '../services/utils'
import { PaymentSystemType, PaymentCard } from '../pages/payments/types' // adjust the import path accordingly

// Simulated fetch function
const fetchPaymentCards = async () => {
  await sleep(1000)
  return [
    {
      id: '1',
      name: 'Main Card',
      isPrimary: true,
      paymentSystem: PaymentSystemType.Visa,
      cardNumberMasked: '****1679',
      expirationDate: '0924',
    },
    {
      id: '2',
      name: 'Online Shopping',
      isPrimary: false,
      paymentSystem: PaymentSystemType.MasterCard,
      cardNumberMasked: '****8921',
      expirationDate: '1123',
    },
    {
      id: '3',
      name: 'Backup Visa',
      isPrimary: false,
      paymentSystem: PaymentSystemType.MasterCard,
      cardNumberMasked: '****4523',
      expirationDate: '1222',
    },
  ]
}

export const usePaymentCardsStore = defineStore({
  id: 'paymentCards',
  state: () => ({
    paymentCards: [] as PaymentCard[],
    loading: false,
  }),
  getters: {
    allPaymentCards: (state) => state.paymentCards,
  },
  actions: {
    async load() {
      this.loading = true
      this.paymentCards = await fetchPaymentCards()
      this.loading = false
    },
    create(card: PaymentCard) {
      console.log('card', card)
      this.paymentCards.unshift(card)
    },
    update(card: PaymentCard) {
      const index = this.paymentCards.findIndex((existingCard) => existingCard.id === card.id)
      if (index !== -1) {
        this.paymentCards.splice(index, 1, card)
      }
    },
    remove(cardId: string) {
      this.paymentCards = this.paymentCards.filter((card) => card.id !== cardId)
    },
  },
})
