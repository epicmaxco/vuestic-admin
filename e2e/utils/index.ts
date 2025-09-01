import { expect } from '@playwright/test'
import type { Page } from 'playwright-core'

export const testApiMocksPage = async (config: { page: Page; url: string; apiMocks?: Record<string, object> }) => {
  const { page, url, apiMocks } = config

  if (apiMocks && Object.keys(apiMocks).length > 0) {
    for (const [routeShort, mockResponse] of Object.entries(apiMocks)) {
      await page.route(`*/**/${routeShort}`, async (route) => {
        await route.fulfill({ json: mockResponse })
      })
    }
  }

  await page.goto(url, { waitUntil: 'networkidle' })

  await page.waitForSelector('#app', { state: 'visible' })

  await expect(page).toHaveScreenshot({ fullPage: true })
}
