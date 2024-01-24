import CardListItem from './PaymentCardListItem.vue'
import { PaymentSystemType, PaymentCard } from '../../types'

export default {
  title: 'CardListItem',
  component: CardListItem,
  tags: ['autodocs'],
}

export const Default = () => ({
  components: { CardListItem },
  data() {
    return {
      card: {
        id: '1',
        name: 'Main card',
        isPrimary: true,
        paymentSystem: PaymentSystemType.Visa,
        cardNumberMasked: '****1679',
        expirationDate: '09/24',
      } satisfies PaymentCard,
      lastEvent: '___',
    }
  },
  template: `
    <CardListItem
        :card="card"
        @remove="lastEvent = 'remove'"
        @edit="lastEvent = 'edit'"
    />
    <br>
    <p>Last event: <span data-testid>{{ lastEvent }}</span></p>
  `,
})
