export const normalizeValue = (value, minValue = 0, maxValue = 100) => {
  if (value <= minValue) {
    return minValue
  }

  if (value >= maxValue) {
    return maxValue
  }

  return value
}
