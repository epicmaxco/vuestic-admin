<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" :fill="color">
    <path
      fill-rule="nonzero"
      d="M20 2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2zm-2 0l-8 5-8-5h16zm0 12H2V4l8 5 8-5v10z"
    />
  </svg>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      color?: string
    }>(),
    {
      color: 'inherit',
    },
  )
</script>

<style lang="scss">
  .va-icon-message {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
</style>
