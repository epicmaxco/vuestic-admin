// Fetch payment cards from Stripe
import type { Stripe } from 'stripe'

const SERVER_BASE = ' http://localhost:3000'

export const stripeFetchCards = async (customerId = 'cus_test_hardcoded_id') => {
  try {
    const response = await fetch(`${SERVER_BASE}/api/payment-method?customerId=${customerId}`)
    if (!response.ok) {
      throw new Error(`Error fetching payment methods: ${response.statusText}`)
    }
    const data = (await response.json()).data as Stripe.PaymentMethod[]
    return data
  } catch (error) {
    console.error('stripeFetchCards error:', error)
    throw error // Re-throw the error so it can be handled by the caller
  }
}

export const stripeAddCard = async (paymentMethodId: string) => {
  try {
    const response = await fetch(`${SERVER_BASE}/api/payment-method`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customerId: 'cus_test_hardcoded_id',
        paymentMethodId,
      }),
    })

    if (!response.ok) {
      throw new Error(`Error adding payment method: ${response.statusText}`)
    }

    const data = (await response.json()).data as Stripe.PaymentMethod
    console.log(data)
    return data
  } catch (error) {
    console.error('stripeAddCard error:', error)
    throw error // Re-throw the error so it can be handled by the caller
  }
}

export const stripeRemoveCard = async (paymentMethodId: string) => {
  try {
    const response = await fetch(`${SERVER_BASE}/api/payment-method/${paymentMethodId}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error(`Error removing payment method: ${response.statusText}`)
    }
  } catch (error) {
    console.error('stripeRemoveCard error:', error)
    throw error // Re-throw the error so it can be handled by the caller
  }
}
