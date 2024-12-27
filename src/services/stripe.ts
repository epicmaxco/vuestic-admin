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
        // customerId: 'cus_test_hardcoded_id',
        paymentMethodId,
      }),
    })

    if (!response.ok) {
      throw new Error(`Error adding payment method: ${response.statusText}`)
    }

    const data = (await response.json()).data as Stripe.PaymentMethod

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

export const stripeCreatePaymentIntent = async (payload: any) => {
  try {
    const response = await fetch(`${SERVER_BASE}/api/payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Error creating payment intent: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('stripeRemoveCard error:', error)
    throw error // Re-throw the error so it can be handled by the caller
  }
}

export const stripeCreatePayment = async (payload: any) => {
  try {
    const response = await fetch(`${SERVER_BASE}/api/payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`Error creating payment intent: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('stripeRemoveCard error:', error)
    throw error // Re-throw the error so it can be handled by the caller
  }
}

export const stripeFetchInvoices = async (startingAfter: string | null = null) => {
  try {
    // Construct the URL with query params
    const url = new URL(`${SERVER_BASE}/api/invoices`)
    if (startingAfter) {
      url.searchParams.append('starting_after', startingAfter)
    }

    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`Error fetching invoices: ${response.statusText}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('stripeFetchInvoices error:', error)
    throw error // Re-throw the error so it can be handled by the caller
  }
}
