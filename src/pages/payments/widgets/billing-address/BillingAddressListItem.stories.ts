import BillingAddressListItem from './BillingAddressListItem.vue'
import { BillingAddress } from '../../types'

export default {
  title: 'BillingAddressListItem',
  component: BillingAddressListItem,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { BillingAddressListItem },
  data() {
    return {
      address: {
        id: '1',
        name: 'Home Address',
        isPrimary: false,
        street: 'Ap #285-7193 Ullamcorper Avenue',
        city: 'Amesbury',
        state: 'HI',
        postalCode: '93373',
        country: 'US',
      } satisfies BillingAddress,
      lastEvent: '___',
    }
  },
  template: `
    <BillingAddressListItem
        :billingAddress="address"
        @remove="lastEvent = 'remove'"
        @edit="lastEvent = 'edit'"
    />
    <br>
    <p>Last event: <span data-testid="lastEvent">{{ lastEvent }}</span></p>
  `,
})
