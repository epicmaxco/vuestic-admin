import CardList from './PaymentCardList.vue'

export default {
  title: 'CardList',
  component: CardList,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { CardList },
  template: `
    <CardList/>
  `,
})
