import { defineStore } from 'pinia'
import { stripeFetchInvoices } from '../services/stripe'

export interface Invoice {
  id: string
  amount_due: number
  currency: string
  status: string
  created: number
}

export const useInvoicesStore = defineStore({
  id: 'invoices',
  state: () => ({
    invoices: [] as Invoice[],
    loading: false,
    hasMore: true,
    lastInvoiceId: null as string | null, // The ID of the last invoice for pagination
  }),
  actions: {
    async load() {
      await this.loadInvoices(null)
    },

    async loadMore() {
      if (!this.hasMore) return

      await this.loadInvoices(this.lastInvoiceId)
    },

    async loadInvoices(startingAfter: string | null) {
      // Avoid duplicate requests or unnecessary requests
      if (this.loading) return

      this.loading = true

      try {
        const response = await stripeFetchInvoices(startingAfter)
        const { invoices, has_more } = response.data

        const newInvoices = invoices.map((invoice: Invoice) => ({
          id: invoice.id,
          amount_due: invoice.amount_due,
          currency: invoice.currency,
          status: invoice.status,
          created: invoice.created,
        })) as Invoice[]
        // Update invoices (only append if not the initial load)

        this.invoices = [].concat(this.invoices, newInvoices)

        this.hasMore = has_more
        this.lastInvoiceId = invoices.length > 0 ? invoices[invoices.length - 1].id : this.lastInvoiceId
      } catch (error) {
        console.error('Error loading invoices:', error)
      } finally {
        this.loading = false
      }
    },

    // Clear all invoices and reset state
    clear() {
      this.invoices = []
      this.loading = false
      this.hasMore = true
      this.lastInvoiceId = null
    },
  },
})
