<template>
  <div class="color-dot flex-center"
       @click="$emit('click')"
       :class="{'color-dot--selected': selected}"
  >
    <div
      class="color-dot__core"
      :style="{'background-color': color}"
    />
  </div>
</template>

<script>
export default {
  name: 'color-dot',
  props: {
    color: {
      type: String,
      default: '',
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.color-dot {
  width: 1.5rem;
  height: 1.5rem;
  min-width: 1.5rem;
  cursor: pointer;

  border-radius: 50%;
  border: solid 0.125rem transparent;

  &--selected {
    border-color: $vue-darkest-blue;
  }

  &__core {
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }
}
</style>
