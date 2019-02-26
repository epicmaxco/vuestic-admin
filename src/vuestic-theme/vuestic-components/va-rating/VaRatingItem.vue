<template>
  <div class="va-rating-item">
    <i
      :class="iconClassesComputed"
      class="va-rating-item__icon"
      @mousemove="onHover"
      @mouseleave="removeHover"
      @click="onClick()"
    />
  </div>
</template>

<script>
export default {
  name: 'va-rating-item',
  props: {
    value: {
      type: Boolean
    },
    icon: {
      type: String,
      default: 'fa fa-star'
    },
    isRatingHover: {
      type: Boolean
    },
    halfIcon: {
      type: String
    },
    size: {
      type: String
    },
    isHalf: {
      type: Boolean
    },
    iconClasses: {
      type: String
    },
    color: {
      type: String
    },
    emptyIcon: {
      type: String,
      default: 'fa fa-star-o'
    },
    hover: {
      type: Boolean
    }
  },
  data () {
    return {
      extraClasses: '',
      hoverValue: ''
    }
  },
  computed: {
    iconClassesComputed () {
      if (!this.isRatingHover && !this.value && !this.isHalf) {
        return this.emptyIcon
      }
      if (!this.isRatingHover && this.value) {
        return this.icon
      }
      if (this.isRatingHover && !this.hover) {
        return this.emptyIcon
      }
      if (this.isRatingHover && this.hover && this.hoverValue !== 0.5) {
        return this.iconClasses + this.icon
      }
      if (!this.halfIcon) {
        return this.iconClasses + this.extraClasses
      }
      return this.halfIcon
    }
  },
  methods: {
    onClick () {
      if (this.extraClasses === this.halfIcon) {
        this.$emit('click', 0.5)
      } else {
        this.$emit('click', 1)
      }
    },
    onHover (item) {
      if (this.halfIcon) {
        const size = Number(this.size.replace(/[^-0-9]/gim, ''))
        if (size / item.offsetX >= 2) {
          this.hoverValue = 0.5
          this.$emit('hover', 0.5)
          this.extraClasses = this.halfIcon
        } else {
          this.hoverValue = 1
          this.$emit('hover', 1)
          this.extraClasses = this.icon
        }
      }
    },
    removeHover () {
      if (this.halfIcon) {
        this.extraClasses = ''
        this.hoverValue = 0
        if (this.value) {
          this.iconClasses = this.icon
          return
        }
        if (this.emptyIcon) {
          this.iconClasses = this.emptyIcon
          return
        }
        this.iconClasses = this.icon + 'text--secondary'
      }
    }
  }
}
</script>

<style lang="scss">
.va-rating-item {
  margin: 0.1rem;
  &__icon {}
}
</style>
