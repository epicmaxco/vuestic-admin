export const toCSV = (data: Record<string, any>[]) => {
  const headers = Object.keys(data[0])
  const csv = [
    headers.join(','),
    ...data.map((row) => headers.map((fieldName) => JSON.stringify(row[fieldName])).join(',')),
  ].join('\r\n')
  return csv
}

export const downloadAsCSV = (data: Record<string, any>[], filename: string) => {
  const csv = toCSV(data)

  const blob = new Blob([csv], { type: 'text/csv' })

  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = filename
  link.click()
}
