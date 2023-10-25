import PaymentSystem from './PaymentSystem.vue'

export default {
  title: 'PaymentSystem',
  component: PaymentSystem,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { PaymentSystem },
  template: `
    <PaymentSystem type="visa"/>
    <br>
    <PaymentSystem type="mastercard"/>
  `,
})
