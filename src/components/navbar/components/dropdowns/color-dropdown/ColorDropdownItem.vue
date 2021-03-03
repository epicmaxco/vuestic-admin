<template>
  <va-dropdown class="mt-1 mb-1">
    <template #anchor>
      <va-badge
        :color="colorName"
        :text="colorName"
      />
    </template>
    
    <!-- <va-advanced-color-picker
      class="my-1"
      v-model="theme.dark"
    /> -->
  </va-dropdown>
</template>

<script>
import { useTheme } from 'vuestic-ui'

export default {
  props: {
    colorName: { type: String, required: true }
  },
  computed: {
    theme() {
      return useTheme().getTheme()
    }
  }
}
</script>