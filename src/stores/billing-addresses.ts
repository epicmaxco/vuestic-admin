import { defineStore } from 'pinia'
import { sleep } from '../services/utils'
import { BillingAddress } from '../pages/payments/types' // adjust the import path accordingly

// Simulated fetch function
const fetchBillingAddresses = async () => {
  await sleep(1000)
  return [
    {
      id: '1',
      name: 'Home address',
      isPrimary: true,
      street: 'Ap #285-7193 Ullamcorper Avenue',
      city: 'Amesbury',
      state: 'HI',
      postalCode: '93373',
      country: 'US',
    },
    {
      id: '2',
      name: 'Office address',
      isPrimary: false,
      street: 'P.O. Box 847, 8011 Nisl St.',
      city: 'Morgantown',
      state: 'IN',
      postalCode: '46160',
      country: 'US',
    },
    {
      id: '3',
      name: 'Vacation home',
      isPrimary: false,
      street: '883-2699 Egestas Rd.',
      city: 'Frederick',
      state: 'NE',
      postalCode: '20620',
      country: 'US',
    },
  ] as BillingAddress[]
}

export const useBillingAddressesStore = defineStore({
  id: 'billingAddresses',
  state: () => ({
    billingAddresses: [] as BillingAddress[],
    loading: false,
  }),
  getters: {
    allBillingAddresses: (state) => state.billingAddresses,
  },
  actions: {
    async load() {
      this.loading = true
      this.billingAddresses = await fetchBillingAddresses()
      this.loading = false
    },
    create(address: BillingAddress) {
      this.billingAddresses.unshift(address)
    },
    update(address: BillingAddress) {
      const index = this.billingAddresses.findIndex((existingCard) => existingCard.id === address.id)
      if (index !== -1) {
        this.billingAddresses.splice(index, 1, address)
      }
    },
    remove(addressId: string) {
      this.billingAddresses = this.billingAddresses.filter((address) => address.id !== addressId)
    },
  },
})
