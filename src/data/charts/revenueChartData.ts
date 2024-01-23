export const earningsColor = '#49A8FF'
export const expensesColor = '#154EC1'

export const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export type Revenues = {
  month: string
  earning: number
  expenses: number
}

export const generateRevenues = (months: string[]): Revenues[] => {
  return months.map((month: string) => {
    const earning = Math.floor(Math.random() * 100000 + 10000)
    return {
      month,
      earning,
      expenses: Math.floor(earning * Math.random()),
    }
  })
}

export const getRevenuePerMonth = (month: string, revenues: Revenues[]): Revenues => {
  const revenue = revenues.find((revenue) => revenue.month === month)
  return revenue || { month, earning: 0, expenses: 0 }
}

export const formatMoney = (amount: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}
