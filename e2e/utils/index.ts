import { expect } from '@playwright/test'
import type { Page } from 'playwright-core'

export const testApiMocksPage = async (config: {
  page: Page
  url: string
  apiMocks?: Record<string, object>
  delayMs?: number
}) => {
  const { page, url, apiMocks, delayMs } = config

  if (apiMocks && Object.keys(apiMocks).length > 0) {
    for (const [routeShort, mockResponse] of Object.entries(apiMocks)) {
      await page.route(`*/**/${routeShort}`, async (route) => {
        await route.fulfill({ json: mockResponse })
      })
    }
  }

  await page.goto(url, { waitUntil: 'networkidle' })

  //! Temporary hard fix
  await page.waitForTimeout(delayMs ?? 5000)

  await expect(page).toHaveScreenshot({ fullPage: true })
}
