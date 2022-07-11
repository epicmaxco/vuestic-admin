import { useColors } from 'vuestic-ui'

export function useChartColors() {
  const { setHSLAColor, getColor } = useColors()

  const generateHSLAColors = (colors: string[], alfa = 0.6) =>
    colors.map((color) => setHSLAColor(getColor(color), { a: alfa }))

  const generateColors = (colors: string[]) => colors.map((color) => getColor(color))

  return { generateColors, generateHSLAColors }
}
