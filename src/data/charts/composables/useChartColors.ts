import { computed, ref } from '@vue/reactivity'
import { watch } from 'vue'
import { useColors, useGlobalConfig } from 'vuestic-ui'

type chartColors = string | string[]

export function useChartColors(chartColors = [] as chartColors, alfa = 0.6) {
  const { getGlobalConfig } = useGlobalConfig()
  const { setHSLAColor, getColor } = useColors()

  const generateHSLAColors = (colors: chartColors) =>
    typeof colors === 'string'
      ? setHSLAColor(getColor(colors), { a: alfa })
      : colors.map((color) => setHSLAColor(getColor(color), { a: alfa }))

  const generateColors = (colors: chartColors) =>
    typeof colors === 'string' ? getColor(colors) : colors.map((color) => getColor(color))

  const generatedHSLAColors = ref(generateHSLAColors(chartColors))
  const generatedColors = ref(generateColors(chartColors))

  const theme = computed(() => getGlobalConfig().colors!)

  watch(theme, () => {
    generatedHSLAColors.value = generateHSLAColors(chartColors)
    generatedColors.value = generateColors(chartColors)
  })

  return {
    generateHSLAColors,
    generateColors,
    generatedColors,
    generatedHSLAColors,
  }
}
