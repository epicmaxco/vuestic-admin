<template>
  <svg class="va-icon-menu" xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 24 18">
    <g fill="none" fill-rule="nonzero" transform="translate(1 -3)">
      <path d="M0 0h24v24H0z" />
      <rect width="20" height="2" x="2" y="3" :fill="color" rx="1" />
      <path :fill="color" d="M11 11h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2zM1 11h5a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z" />
      <rect width="20" height="2" x="2" y="19" :fill="color" rx="1" />
      <path :stroke="color" stroke-width="2" d="M4 9l-3 3 3 3" />
    </g>
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
  .va-icon-menu {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
</style>
