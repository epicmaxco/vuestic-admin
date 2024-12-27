import { defineStore } from 'pinia'
import { stripeAddCard, stripeFetchCards, stripeRemoveCard, stripeCreatePayment } from '../services/stripe'

import type { PaymentCard } from '../pages/payments/types'

export const useStripePaymentCardsStore = defineStore({
  id: 'stripeCards',
  state: () => ({
    paymentCards: [] as PaymentCard[],
    loading: false,
  }),
  actions: {
    async load() {
      this.loading = true
      try {
        const paymentMethods = await stripeFetchCards()
        this.paymentCards = paymentMethods.map((paymentMethod) => ({
          id: paymentMethod.id,
          created: paymentMethod.created,
          ...paymentMethod.card,
          billingDetails: paymentMethod.billing_details,
        })) as PaymentCard[]
      } catch (error) {
        console.error('Error loading payment cards:', error)
      } finally {
        this.loading = false
      }
    },
    async create(paymentMethodId: string) {
      try {
        const paymentMethod = await stripeAddCard(paymentMethodId)
        const card = {
          id: paymentMethod.id,
          created: paymentMethod.created,
          ...paymentMethod.card,
          billingDetails: paymentMethod.billing_details,
        } as PaymentCard

        this.paymentCards.push(card)
      } catch (error) {
        console.error('Error creating payment card:', error)
        throw error
      }
    },
    async remove(paymentMethodId: string) {
      try {
        await stripeRemoveCard(paymentMethodId)
        this.paymentCards = this.paymentCards.filter((card) => card.id !== paymentMethodId)
      } catch (error) {
        console.error('Error removing payment card:', error)
      }
    },
    async processPayment(paymentMethodId: string, amount: number) {
      try {
        const response = await stripeCreatePayment({
          amount, // Replace with actual amount
          currency: 'usd',
          paymentMethod: paymentMethodId,
          confirm: true,
        })
        return response
      } catch (error) {
        console.error('Error processing payment:', error)
        throw error
      }
    },
  },
})
