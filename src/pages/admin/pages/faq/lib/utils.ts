export type Category = {
  id: string
  icon: string
  name: string
  intro: string
}

export function filterCategories(searchValue: string, categories: Category[]) {
  const value = searchValue.trim().toLowerCase()
  if (value.length === 0) {
    return categories
  }
  return categories.filter((category) => {
    return category.intro.toLowerCase().includes(value) || category.name.toLowerCase().includes(value)
  })
}

export const wait = (timeout = 1000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}
