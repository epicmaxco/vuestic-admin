import BillingAddressEdit from './BillingAddressEdit.vue'
import { BillingAddress } from '../../types'

export default {
  title: 'BillingAddressEdit',
  component: BillingAddressEdit,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { BillingAddressEdit },
  data() {
    return {
      lastEvent: '',
      billingAddress: {
        id: '1',
        name: 'Name',
        isPrimary: false,
        street: 'Ap #285-7193 Ullamcorper Avenue',
        city: 'Amesbury',
        state: 'HI',
        postalCode: '93373',
        country: 'US',
      } satisfies BillingAddress,
    }
  },
  template: `
    <BillingAddressEdit
        :billingAddress="billingAddress"
        submitText="Update"
        @save="lastEvent = 'save'"
        @cancel="lastEvent = 'cancel'"
    />
    <br>
    <p>Last event: <span data-testid="lastEvent">{{ lastEvent }}</span></p>`,
})

export const Empty = () => ({
  components: { BillingAddressEdit },
  data() {
    return {
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
    <BillingAddressEdit
        :billingAddress="billingAddress"
        submitText="Create"
    />`,
})
