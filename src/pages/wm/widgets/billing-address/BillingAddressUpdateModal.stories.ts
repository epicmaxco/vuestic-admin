import BillingAddressUpdateModal from './BillingAddressUpdateModal.vue'
import { BillingAddress } from '../../types'

export default {
  components: { BillingAddressUpdateModal },
  title: 'BillingAddressUpdateModal',
  component: BillingAddressUpdateModal,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { BillingAddressUpdateModal },
  data() {
    return {
      showModal: false,
      billingAddress: {
        id: '1',
        name: '',
        isPrimary: false,
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
      } satisfies BillingAddress,
    }
  },
  template: `
    <va-button @click="showModal = !showModal">
      Show modal
    </va-button>
    <BillingAddressUpdateModal :billingAddress="billingAddress" v-if="showModal" @close="showModal = false"/>
  `,
})
