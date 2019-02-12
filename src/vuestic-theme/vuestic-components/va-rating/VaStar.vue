<template>
  <div class="va-star">
    <i
      :class="iconClasses"
      class="va-star__icon"
      :style="computedStylesIcon"
      @click="setCurrentValue(item)"
    />
  </div>
</template>

<script>
export default {
  name: 'va-star',
  props: {
    value: {
      type: Boolean
    },
    icon: {
      type: String,
      default: 'fa fa-star'
    },
    emptyIcon: {
      type: String
    },
    iconClasses: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.va-star {

}
</style>
