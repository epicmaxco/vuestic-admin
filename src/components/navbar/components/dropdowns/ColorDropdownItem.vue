<template>
  <tr>
    <td class="color">
      <va-color-indicator :color="theme[colorName]" />
    </td>
    <td>
      {{ colorName }}
    </td>
  </tr>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useColors } from 'vuestic-ui'
  const { getColors } = useColors()

  defineProps<{
    colorName: string
  }>()

  const theme = computed(() => {
    return getColors()
  })
</script>

<style lang="scss" scoped>
  .color {
    width: 16px;
    height: 16px;
    &-bordered {
      border: 1px solid var(--va-gray);
      border-radius: 50%;
    }
  }
  td {
    color: var(--va-gray);
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    vertical-align: middle;
    &:first-child {
      padding-right: 0;
    }
  }
</style>
