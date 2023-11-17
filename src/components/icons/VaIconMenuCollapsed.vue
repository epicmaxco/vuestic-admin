<template>
  <svg class="va-icon-menu-collapsed" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="nonzero">
      <path d="M0 0h24v24H0z" />
      <rect :fill="color" height="2" rx="1" width="20" x="2" y="3" />
      <path
        :fill="color"
        d="M3 11h10a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zM20.993 11l-2.7-2.7-1.414 1.414L18.164 11H16a1 1 0 0 0 0 2h2.179l-1.3 1.3 1.414 1.414L21.007 13A1 1 0 0 0 21 11h-.007z"
      />
      <rect :fill="color" height="2" rx="1" width="20" x="2" y="19" />
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
.va-icon-menu-collapsed {
  display: inline-block;
  width: 24px;
  height: 24px;
}
</style>
