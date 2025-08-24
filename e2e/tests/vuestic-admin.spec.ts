import { test } from '@playwright/test'

import { testApiMocksPage } from '../utils'

import { getProjectsStub, getUsersStub } from '../stubs'

const pageMocks: {
  name: string
  url: string
  apiMocks?: Record<string, object>
}[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
  },
  {
    name: 'Settings',
    url: '/settings',
  },
  {
    name: 'Preferences',
    url: '/preferences',
  },
  {
    name: 'Users',
    url: '/users',
    apiMocks: {
      '/projects': getProjectsStub,
      '/users': getUsersStub,
    },
  },
  {
    name: 'Projects',
    url: '/projects',
    apiMocks: {
      '/projects': getProjectsStub,
      '/users': getUsersStub,
    },
  },
  {
    name: 'Payments',
    url: '/payments',
  },
  {
    name: 'Payment Methods',
    url: '/payments/payment-methods',
  },
  {
    name: 'Billing',
    url: '/payments/billing',
  },
  {
    name: 'Pricing Plans',
    url: '/payments/pricing-plans',
  },
  {
    name: 'FAQ',
    url: '/faq',
  },
  {
    name: 'Auth',
    url: '/auth',
  },
  {
    name: 'Login',
    url: '/auth/login',
  },
  {
    name: 'Sign Up',
    url: '/auth/signup',
  },
  {
    name: 'Recover Password',
    url: '/auth/recover-password',
  },
  {
    name: 'Recover Password Email',
    url: '/auth/recover-password-email',
  },
  {
    name: '404',
    url: '/404',
  },
]

for (const item of pageMocks) {
  test(item.name, async ({ page }) => {
    await testApiMocksPage({
      page,
      ...item,
    })
  })
}
