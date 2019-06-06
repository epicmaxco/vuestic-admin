<template>
  <div
    class="va-rating-item"
    @keyup.enter="onEnter()"
    @mousemove="onHover"
    @click="onClick()"
    @mouseleave="removeHover"
  >
    <i
      :class="iconClassesComputed"
      class="va-rating-item__icon"
    />
  </div>
</template>

<script>
export default {
  name: 'va-rating-item',
  props: {
    value: {
      type: Number,
    },
    icon: {
      type: String,
      default: 'fa fa-star',
    },
    isRatingHover: {
      type: Boolean,
    },
    halfIcon: {
      type: String,
    },
    iconClasses: {
      type: String,
    },
    emptyIcon: {
      type: String,
      default: 'fa fa-star-o',
    },
  },
  data () {
    return {
      onHoverClasses: '',
      hoverValue: '',
    }
  },
  computed: {
    iconClassesComputed () {
      if (!this.isRatingHover && this.value === 0.5 && this.halfIcon) {
        return this.halfIcon
      }
      if (!this.isRatingHover && this.value === 0 && this.value !== 0.5) {
        return this.emptyIcon
      }
      if (!this.isRatingHover && this.value !== 0) {
        return this.icon
      }
      if (this.isRatingHover && this.value === 0 && this.halfIcon) {
        return this.emptyIcon
      }
      if (this.isRatingHover && this.value !== 0 && this.hoverValue !== 0.5) {
        return this.iconClasses + this.icon
      }
      if (!this.halfIcon) {
        return this.iconClasses + this.onHoverClasses
      }
      return this.halfIcon
    },
  },
  methods: {
    onClick () {
      if (this.onHoverClasses === this.halfIcon && this.halfIcon) {
        this.$emit('click', 0.5)
      } else {
        this.$emit('click', 1)
      }
    },
    onEnter () {
      if (this.value === 0.5) {
        this.$emit('click', 1)
      } else {
        this.$emit('click', 0.5)
      }
    },
    onHover (item) {
      if (this.halfIcon) {
        const size = this.$el.clientHeight
        if (size / item.offsetX >= 2 || item.offsetX <= 0) {
          this.hoverValue = 0.5
          this.$emit('hover', 0.5)
          this.onHoverClasses = this.halfIcon
        } else {
          this.hoverValue = 1
          this.$emit('hover', 1)
          this.onHoverClasses = this.icon
        }
      }
    },
    removeHover () {
      if (this.halfIcon) {
        this.onHoverClasses = ''
        this.hoverValue = 0
      }
    },
  },
}
</script>

<style lang="scss">
.va-rating-item {

}
</style>
