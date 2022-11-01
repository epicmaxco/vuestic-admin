<template>
  <va-dropdown class="color-dropdown" :offset="[13, 0]" position="bottom">
    <template #anchor>
      <va-icon-color />
    </template>

    <va-dropdown-content class="color-dropdown__content pl-4 pr-4 pt-2 pb-2">
      <va-button-toggle v-model="currentTheme" :options="themeOptions" outline size="small" style="max-width: 100%" />

      <table style="width: 100%">
        <color-dropdown-item
          v-for="colorName in colorNames"
          :key="colorName"
          class="color-picker-dropdown"
          :color-name="colorName"
        />
      </table>
    </va-dropdown-content>
  </va-dropdown>
</template>

<script setup lang="ts">
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
