import { Chart, TooltipModel } from 'chart.js'
import { computePosition, flip, shift } from '@floating-ui/dom'

const getOrCreateTooltip = (chart: Chart) => {
  let tooltipEl = chart.canvas.parentNode?.querySelector('div')

  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)'
    tooltipEl.style.borderRadius = '3px'
    tooltipEl.style.color = 'white'
    tooltipEl.style.opacity = '1'
    tooltipEl.style.pointerEvents = 'none'
    tooltipEl.style.position = 'absolute'
    // tooltipEl.style.transform = 'translate(-50%, 0)'
    tooltipEl.style.left = '0'
    tooltipEl.style.top = '0'
    tooltipEl.style.transition = 'all .1s ease'
    tooltipEl.style.height = 'min-content'
    tooltipEl.style.maxWidth = '200px'
    tooltipEl.style.zIndex = '9999'

    const table = document.createElement('table')
    table.style.margin = '0px'

    tooltipEl.appendChild(table)
    chart.canvas.parentNode?.appendChild(tooltipEl)
  }

  return tooltipEl
}

export const externalTooltipHandler = (context: { chart: Chart; tooltip: TooltipModel<any> }) => {
  // Tooltip Element
  const { chart, tooltip } = context
  const tooltipEl = getOrCreateTooltip(chart)

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = '0'
    return
  }

  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || []
    const bodyLines = tooltip.body.map((b) => b.lines)

    const tableHead = document.createElement('thead')

    titleLines.forEach((title) => {
      const tr = document.createElement('tr')
      tr.style.borderWidth = '0'

      const th = document.createElement('th')
      th.style.borderWidth = '0'
      const text = document.createTextNode(title)

      th.appendChild(text)
      tr.appendChild(th)
      tableHead.appendChild(tr)
    })

    const tableBody = document.createElement('tbody')
    bodyLines.forEach((body, i) => {
      const colors = tooltip.labelColors[i]

      const span = document.createElement('span')
      span.style.background = String(colors.backgroundColor)
      span.style.borderColor = String(colors.borderColor)
      span.style.borderWidth = '2px'
      span.style.marginRight = '10px'
      span.style.height = '10px'
      span.style.width = '10px'
      span.style.display = 'inline-block'

      const tr = document.createElement('tr')
      tr.style.backgroundColor = 'inherit'
      tr.style.borderWidth = '0'

      const td = document.createElement('td')
      td.style.borderWidth = '0'

      const text = document.createTextNode(body as any)

      td.appendChild(span)
      td.appendChild(text)
      tr.appendChild(td)
      tableBody.appendChild(tr)
    })

    const tableRoot = tooltipEl.querySelector('table')

    // Remove old children
    while (tableRoot?.firstChild) {
      tableRoot.firstChild.remove()
    }

    // Add new children
    tableRoot?.appendChild(tableHead)
    tableRoot?.appendChild(tableBody)
  }

  // Display, position, and set styles for font
  tooltipEl.style.opacity = '1'
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px'

  computePosition(chart.canvas.parentNode! as HTMLElement, tooltipEl!, {
    placement: 'top',
    middleware: [flip(), shift()],
  }).then(({ x, y }) => {
    Object.assign(tooltipEl!.style, {
      left: `${x}px`,
      top: `${y}px`,
    })
  })
}
