import type { Stripe } from 'stripe'

export enum PaymentSystemType {
  Visa = 'visa',
  MasterCard = 'mastercard',
}

export const paymentSystemTypeOptions = Object.values(PaymentSystemType)

export type PaymentCard = Stripe.PaymentMethod.Card & {
  id: string // Unique payment method ID from Stripe
  isPrimary?: boolean // Custom property for UI logic (optional)
  created: number // Unix timestamp
}

export interface BillingAddress {
  id: string
  name: string
  isPrimary: boolean // show Primary badge
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}
