import { onBeforeMount, ref } from 'vue'
import { loadStripe } from '@stripe/stripe-js'

import { STRIPE_PUBLIC_KEY } from '../config/stripe'

const stripeLoaded = ref(false)
const stripeInstance = ref(null) // Store the actual Stripe instance

export const useStripe = () => {
  onBeforeMount(async () => {
    if (stripeInstance.value) {
      stripeLoaded.value = true

      return
    }

    loadStripe(STRIPE_PUBLIC_KEY)
      .then((stripe) => {
        console.log('stripe loaded', stripe)
        stripeInstance.value = stripe // Save the stripe instance
        stripeLoaded.value = true
      })
      .catch((error) => {
        console.error('stripe load error', error)
      })
  })

  return { stripeLoaded, stripeInstance }
}
