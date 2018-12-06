<template>
  <blockquote class="vuestic-blockquote">
    <div class="vuestic-blockquote__line"/>
    <div class="vuestic-blockquote__content">
      <slot></slot>
    </div>
  </blockquote>
</template>

<script>
export default {
  name: 'vuestic-blockquote',
  props: {}
}
</script>

<style lang="scss">
.vuestic-blockquote {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: inline-flex;
  &__line {
    margin-right: 1rem;
    width: 0.25rem;
    border-radius: 0.125rem;
    background-color: $vue-green;
  }
}
</style>
