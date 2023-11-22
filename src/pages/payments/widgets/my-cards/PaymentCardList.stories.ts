import PaymentCardList from './PaymentCardList.vue'

export default {
  title: 'PaymentCardList',
  component: PaymentCardList,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { PaymentCardList },
  template: `
    <PaymentCardList/>
  `,
})
