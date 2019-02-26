export const setPaginationRange = (value, visiblePages, pages) => {
  let start = 0,
    range = []

  const paginationMiddlePage = visiblePages / 2

  if (value - paginationMiddlePage <= 0 || value > pages) {
    start = 1
  } else {
    start = value + paginationMiddlePage > pages
      ? pages - visiblePages + 1
      : Math.ceil(value - paginationMiddlePage)
  }

  for (let i = 0; i < visiblePages; i++) {
    range.push(start + i)
  }

  return range
}
