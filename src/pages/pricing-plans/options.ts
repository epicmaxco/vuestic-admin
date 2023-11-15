export type PricingPlans = {
  title: string
  model: string
  badges?: string[]
  description: string
  price: number
  priceMonth: number
  features: Feature[]
}

type Feature = {
  description: string
  isAvailable: boolean
}

const features = [
  'Up to 10 Active Users',
  'Up to 30 Project Integrations',
  'Analytics Module',
  'Finance Module',
  'Accounting Module',
  'Network Platform',
  'Unlimited Cloud Spase',
]

export const pricingPlans: PricingPlans[] = [
  {
    title: 'Startup',
    model: 'Startup',
    description: 'Optimal for 10+ team size and new startup',
    price: 39,
    priceMonth: 5,
    features: features.map((d, i) => ({ description: d, isAvailable: i < 3 })),
  },
  {
    title: 'Advanced',
    model: 'Advanced',
    description: 'Optimal for 100+ team size and grown company',
    price: 339,
    priceMonth: 35,
    features: features.map((d, i) => ({ description: d, isAvailable: i < 5 })),
    badges: ['Popular choice'],
  },
  {
    title: 'Enterprise',
    model: 'Enterprise',
    description: 'Optimal for 1000+ team and enterpise',
    price: 999,
    priceMonth: 100,
    features: features.map((d) => ({ description: d, isAvailable: true })),
  },
]
