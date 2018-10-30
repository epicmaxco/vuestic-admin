<template>
  <div class="square-with-icon">
    <span class="icon">
      <i :class="iconClass" aria-hidden="true"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'square-with-icon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.square-with-icon {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.375rem;
  width: 1.375rem;
  color: $white;
  background-color: $vue-green;
}
</style>
