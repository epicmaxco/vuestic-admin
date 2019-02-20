export const setPaginationRange = (value, visiblePages, pages, currentRange) => {
  let start = 0

  const paginationMiddlePage = visiblePages / 2,
    firstRangePage = currentRange[0],
    lastRangePage = currentRange[currentRange.length - 1]

  if (value - paginationMiddlePage <= 0 || value > pages) {
    start = 1
   } else {
    start = value + paginationMiddlePage > pages
    ? pages - visiblePages + 1
    : Math.ceil(value - paginationMiddlePage)
  }

  if (currentRange.length === 0 || start === 1 || value === firstRangePage
    || value === lastRangePage || value === pages) {
    currentRange = []

    for (let i = 0; i < visiblePages; i++) {
      currentRange.push(start + i)
    }
  }
  return currentRange
}
