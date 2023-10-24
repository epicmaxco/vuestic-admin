import BillingAddressList from './BillingAddressList.vue'

export default {
  title: 'BillingAddressList',
  component: BillingAddressList,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { BillingAddressList },
  template: `
    <BillingAddressList/>
  `,
})
