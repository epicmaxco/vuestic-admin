<template>
  <va-dropdown
    class="color-dropdown"
    :offset="[0, 13]"
    position="bottom"
  >
    <template #anchor>
      <va-icon-color />
    </template>

    <div class="color-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <va-button-toggle
        v-model="selectedThemeName"
        :options="buttonToggleOptions"
        outline
        size="small"
        style="max-width: 100%;"
      />

      <color-dropdown-item class="color-picker-dropdown" v-for="colorName in colorNames" :key="colorName" :colorName="colorName"/>
    </div>
  </va-dropdown>
</template>

<script>
import { useTheme } from 'vuestic-ui'
import VaIconColor from '@/iconset/VaIconColor'
import ColorDropdownItem from './ColorDropdownItem'
import { ref, computed } from 'vue'

const THEME_NAMES = {
  DEFAULT: 'DEFAULT',
  CORPORATE: 'CORPORATE',
}

const COLOR_THEMES = [
  {
    name: THEME_NAMES.DEFAULT,
    colors: {
      primary: '#40e583',
      secondary: '#002c85',
      success: '#40e583',
      info: '#2c82e0',
      danger: '#e34b4a',
      warning: '#ffc200',
      gray: '#babfc2',
      dark: '#34495e',
    },
  },
  {
    name: THEME_NAMES.CORPORATE,
    colors: {
      primary: '#6c7fee',
      secondary: '#6e7ff1',
      success: '#8ddc88',
      info: '#71baff',
      danger: '#f8706d',
      warning: '#ffd652',
      gray: '#8396a5',
      dark: '#34495e',
    },
  },
]

export default {
  emits: ['change-theme'],
  components: {
    VaIconColor, ColorDropdownItem
  },
  setup() {
    const { setTheme, getTheme } = useTheme()

    const buttonToggleOptions = [
      { label: 'Original', value: THEME_NAMES.DEFAULT },
      { label: 'Corporate', value: THEME_NAMES.CORPORATE },
    ]

    const themeName = ref(THEME_NAMES.DEFAULT)

    const selectedTheme = getTheme()

    const selectedThemeName = computed({
      get: () => themeName.value,
      set: (newThemeName) => { 
        themeName.value = newThemeName
        const theme = COLOR_THEMES.find((theme) => theme.name === newThemeName)
        setTheme(theme.colors)
      }
    })

    const colorNames = computed(() => Object.keys(selectedTheme))

    return { selectedThemeName, colorNames, buttonToggleOptions }
  }
}
</script>

<style lang="scss">

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

    .color-picker-dropdown {
      display: flex;
      justify-content: center;

      &__badge {
        /* Badges have 0.5rem to the right by default */
        margin-left: 0.5rem;
      }
    }
  }

  .va-dropdown__anchor {
    display: inline-block;
  }
}

.button-restore {
  display: flex;
  margin: 0.375rem auto;
}
</style>
