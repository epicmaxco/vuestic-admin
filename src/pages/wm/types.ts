export enum PaymentSystemType {
  Visa = 'visa',
  MasterCard = 'mastercard',
}

export const paymentSystemTypeOptions = Object.values(PaymentSystemType)

export interface PaymentCard {
  id: string
  name: string
  isPrimary: boolean // show Primary badge
  paymentSystem: PaymentSystemType // Enum or union type for various payment systems
  cardNumberMasked: string // ****1679
  expirationDate: string // 09/24
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
