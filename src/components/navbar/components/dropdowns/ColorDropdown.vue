<template>
  <VaDropdown :offset="[13, 0]" class="color-dropdown pointer" stick-to-edges>
    <template #anchor>
      <VaIconColor />
    </template>

    <VaDropdownContent class="color-dropdown__content pl-8 pr-8 pt-2 pb-2">
      <VaButtonToggle
        v-model="currentTheme"
        :options="themeOptions"
        class="color-dropdown__toggle"
        grow
        outline
        round
        size="small"
      />

      <table class="w-full my-4">
        <ColorDropdownItem
          v-for="colorName in colorNames"
          :key="colorName"
          :color-name="colorName"
          class="color-picker-dropdown"
        />
      </table>
    </VaDropdownContent>
  </VaDropdown>
</template>

<script lang="ts" setup>
import VaIconColor from '../../../icons/VaIconColor.vue'
import ColorDropdownItem from './ColorDropdownItem.vue'
import { useColors } from 'vuestic-ui'
import { ref, watchEffect } from 'vue'

const { presets, applyPreset, colors } = useColors()

const currentTheme = ref('light')

watchEffect(() => {
  applyPreset(currentTheme.value)
})

const themeOptions = Object.keys(presets.value).map((themeName) => ({
  value: themeName,
  label: themeName,
}))
const colorNames = Object.keys(colors)
</script>

<style lang="scss" scoped>
.color-dropdown {
  &__icon {
    position: relative;
    display: flex;
    align-items: center;
  }

  .va-dropdown__anchor {
    display: inline-block;
  }

  &__toggle {
    width: 100%;
    display: flex;
    justify-content: stretch;
  }
}

.button-restore {
  display: flex;
  margin: 0.375rem auto;
}
</style>
