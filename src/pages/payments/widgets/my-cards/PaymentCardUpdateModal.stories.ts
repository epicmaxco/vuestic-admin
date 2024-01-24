import PaymentCardUpdateModal from './PaymentCardUpdateModal.vue'
import { PaymentSystemType, PaymentCard } from '../../types'

export default {
  components: { PaymentCardUpdateModal },
  title: 'PaymentCardUpdateModal',
  component: PaymentCardUpdateModal,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { PaymentCardUpdateModal },
  data() {
    return {
      showModal: false,
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
    <va-button @click="showModal = !showModal">
      Show modal
    </va-button>
    <PaymentCardUpdateModal :payment-card="paymentCard" v-if="showModal" @close="showModal = false"/>
  `,
})
