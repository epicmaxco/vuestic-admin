<template>
  <svg class="va-icon-menu" height="18" viewBox="0 0 24 18" width="23" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="nonzero" transform="translate(1 -3)">
      <path d="M0 0h24v24H0z" />
      <rect :fill="color" height="2" rx="1" width="20" x="2" y="3" />
      <path :fill="color" d="M11 11h10a1 1 0 0 1 0 2H11a1 1 0 0 1 0-2zM1 11h5a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z" />
      <rect :fill="color" height="2" rx="1" width="20" x="2" y="19" />
      <path :stroke="color" d="M4 9l-3 3 3 3" stroke-width="2" />
    </g>
  </svg>
</template>

<script lang="ts" setup>
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
