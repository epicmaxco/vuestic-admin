<template>
  <va-dropdown
    class="color-dropdown"
    :offset="[0, 13]"
    position="bottom"
  >
    <template #anchor>
      <va-icon-color :color="theme.navbarTextColor"/>
    </template>

    <div class="color-dropdown__content pl-4 pr-4 pt-2 pb-2">
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
    </div>
  </va-dropdown>
</template>

<script>
import { setupColors } from 'vuestic-ui'
import VaIconColor from '@/components/icons/VaIconColor'
import ColorDropdownItem from './ColorDropdownItem'
import { ref, computed } from 'vue'
import { COLOR_THEMES, THEME_NAMES } from '@/services/vuestic-ui/colors'


export default {
  emits: ['change-theme'],
  components: {
    VaIconColor, ColorDropdownItem
  },
  setup() {
    const { setColors, getColors } = setupColors()

    const buttonToggleOptions = [
      { label: 'Original', value: THEME_NAMES.DEFAULT },
      { label: 'Corporate', value: THEME_NAMES.CORPORATE },
    ]

    const themeName = ref(THEME_NAMES.DEFAULT)

    const selectedTheme = getColors()

    const selectedThemeName = computed({
      get: () => themeName.value,
      set: (newThemeName) => { 
        themeName.value = newThemeName
        const theme = COLOR_THEMES.find((theme) => theme.name === newThemeName)
        setColors(theme.colors)
      }
    })

    const colorNames = computed(() => Object.keys(selectedTheme))

    return { selectedThemeName, colorNames, buttonToggleOptions, theme: selectedTheme }
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

  &__content {
    background-color: $dropdown-background;
    box-shadow: $gray-box-shadow;
    border-radius: 0.5rem;
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
