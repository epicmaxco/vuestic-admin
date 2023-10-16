export enum PaymentSystemType {
  Visa = 'visa',
  MasterCard = 'mastercard',
}

export interface CardInfo {
  id: string
  name: string
  isPrimary: boolean // show Primary badge
  paymentSystem: PaymentSystemType // Enum or union type for various payment systems
  cardNumberMasked: string // ****1679
  expirationDate: string // 09/24
}
