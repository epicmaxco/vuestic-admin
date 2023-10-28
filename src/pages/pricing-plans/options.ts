export type PricingPlans = {
  title: string
  model: string
  badges?: string[]
  description: string
  price: number
  features: Feature[]
  class?: string
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
    features: features.map((d, i) => ({ description: d, isAvailable: i < 3 })),
    class: '!bg-[#F7F9F9]',
  },
  {
    title: 'Advanced',
    model: 'Advanced',
    description: 'Optimal for 100+ team size and grown company',
    price: 339,
    features: features.map((d, i) => ({ description: d, isAvailable: i < 5 })),
    badges: ['Popular choice'],
    class: '!md:py-10 !bg-[#ECFDE6]'
  },
  {
    title: 'Enterprise',
    model: 'Enterprise',
    description: 'Optimal for 1000+ team and enterpise',
    price: 999,
    features: features.map(d => ({ description: d, isAvailable: true })),
    class: '!bg-[#F7F9F9]',
  }
]