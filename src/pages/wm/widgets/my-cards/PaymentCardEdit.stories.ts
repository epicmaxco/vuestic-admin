import PaymentCardEdit from './PaymentCardEdit.vue'
import { PaymentSystemType, PaymentCard } from '../../types'

export default {
  title: 'PaymentCardEdit',
  component: PaymentCardEdit,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { PaymentCardEdit },
  data() {
    return {
      lastEvent: '',
      paymentCard: {
        id: '1',
        name: 'Main card',
        isPrimary: true,
        paymentSystem: PaymentSystemType.Visa,
        cardNumberMasked: '****1679',
        expirationDate: '09/24',
      } satisfies PaymentCard,
    }
  },
  template: `
    <PaymentCardEdit
        :paymentCard="paymentCard"
        submitText="Update Card"
        @save="lastEvent = 'save'"
        @cancel="lastEvent = 'cancel'"
    />
    <br>
    <p>Last event: <span data-testid>{{ lastEvent }}</span></p>`,
})

export const Empty = () => ({
  components: { PaymentCardEdit },
  data() {
    return {
      paymentCard: {
        id: '',
        name: '',
        isPrimary: false,
        paymentSystem: PaymentSystemType.Visa,
        cardNumberMasked: '',
        expirationDate: '',
      } satisfies PaymentCard,
    }
  },
  template: `
    <PaymentCardEdit
        :paymentCard="paymentCard"
        submitText="Create Card"
    />`,
})
