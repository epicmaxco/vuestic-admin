<template>
  <div class="vuestic-blockquote">
    <div class="vuestic-blockquote__content">
      <div class="vuestic-blockquote__line"/>
      <div class="va-row column">
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
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
  &__content {
    display: inline-flex;
  }
  &__line {
    margin-right: 1rem;
    width: 0.4rem;
    border-radius: 0.1rem;
    background-color: $vue-green;
  }
}
</style>
