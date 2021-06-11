<template>
  <va-dropdown
    class="color-dropdown"
    :offset="[0, 13]"
    position="bottom"
  >
    <template #anchor>
      <va-icon-color />
    </template>

    <va-dropdown-content class="color-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <va-button-toggle
        v-model="selectedThemeName"
        :options="buttonToggleOptions"
        outline
        size="small"
        style="max-width: 100%;"
      />

      <table style="width: 100%;">
        <color-dropdown-item class="color-picker-dropdown" v-for="colorName in colorNames" :key="colorName" :colorName="colorName"/>
      </table>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script>
import { useColors } from 'vuestic-ui'
import VaIconColor from '@/components/icons/VaIconColor'
import ColorDropdownItem from './ColorDropdownItem'
import { computed, onMounted } from 'vue'
import { THEME_NAMES, useTheme } from '@/services/vuestic-ui/themes'
import { useRouter } from 'vue-router'

export default {
  emits: ['change-theme'],
  components: {
    VaIconColor, ColorDropdownItem
  },
  setup() {
    const { getColors } = useColors()

    const buttonToggleOptions = [
      { label: 'Light', value: THEME_NAMES.LIGHT },
      { label: 'Semi-Dark', value: THEME_NAMES.SEMI_DARK },
      // { label: 'Dark', value: THEME_NAMES.DARK },
      { label: 'Original', value: THEME_NAMES.ORIGINAL },
    ]

    const { setTheme, themeName } = useTheme()

    const colors = getColors()

    const selectedThemeName = computed({
      get: () => themeName.value,
      set: (newThemeName) => setTheme(newThemeName)
    })

    const router = useRouter()

    const themeNameFromUrl = () => {
      const themeName = router.currentRoute.value.query.theme

      if (themeName === 'semi-dark') {
        return THEME_NAMES.SEMI_DARK
      } else if (themeName === 'dark') {
        return THEME_NAMES.DARK
      } else if (themeName === 'original') {
        return THEME_NAMES.ORIGINAL
      } else {
        return THEME_NAMES.LIGHT
      }
    }

    onMounted(() => {
      setTheme(themeNameFromUrl())
    })

    const colorNames = computed(() => Object.keys(colors))

    return { selectedThemeName, colorNames, buttonToggleOptions }
  }
}
</script>

<style lang="scss" scoped>

.color-dropdown {
  cursor: pointer;

  &__icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}

.button-restore {
  display: flex;
  margin: 0.375rem auto;
}

table { 
  margin: 1rem 0;
}
</style>
