export const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const repeatArray = (count: number, array: any[]) => {
  return Array.from({ length: Math.ceil(count / array.length) }, () => array).flat().sort(() => Math.random() - 0.5).slice(0, count)
}
