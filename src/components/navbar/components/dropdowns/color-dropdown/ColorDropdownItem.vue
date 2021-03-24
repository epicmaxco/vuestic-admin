<template>
  <tr>
    <td class="color">
      <!-- TODO: Replace with ColorIndicator -->
      <div class="color color-bordered" :style="{ background: theme[colorName]}"/>
    </td>
    <td>
      {{ colorName }}
    </td>
  </tr>
</template>

<script>
import { useTheme } from 'vuestic-ui'

export default {
  props: {
    colorName: { type: String, required: true }
  },
  computed: {
    theme() {
      return useTheme().getColors()
    }
  }
}
</script>

<style lang="scss" scoped>
  .color {
    width: 16px;
    height: 16px;
    &-bordered {
      border: 1px solid rgb(83, 83, 83);
      border-radius: 50%;
    }
  }
  td {
    color: black;
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    vertical-align: middle;
    &:first-child {
      padding-right: 0;
    }
  }
</style>