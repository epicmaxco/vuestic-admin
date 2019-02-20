<template>
  <div class="va-rating-item">
    <i
      :class="iconClassesComputed"
      :style="iconStyles"
      class="va-rating-item__icon"
      @mousemove="onHover"
      @mouseleave="removeHover"
      @click="onClick()"
      width="50"
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
    isHalf: {
      type: Boolean
    },
    iconClasses: {
      type: String,
      default: 'fa fa-star'
    },
    iconStyles: {
      type: Object,
      default: () => {
        return {
          fontSize: 'medium',
          cursor: 'pointer'
        }
      }
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
    // iconClassesComputed () {
    //   if (this.halfIcon) {
    //     if (this.isRatingHover) {
    //       if (this.hover) {
    //         if (this.hoverValue !== 0.5) {
    //           return this.iconClasses + this.icon
    //         } else {
    //           return this.halfIcon
    //         }
    //       } else {
    //         return this.emptyIcon
    //       }
    //     } else {
    //       if (this.value) {
    //         return this.icon
    //       } else if (this.isHalf) {
    //         return this.halfIcon
    //       } else {
    //         return this.emptyIcon
    //       }
    //     }
    //   }
    //   return this.iconClasses + this.extraClasses
    // },
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
        const size = Number(this.iconStyles.fontSize.replace(/[^-0-9]/gim, ''))
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
        } else {
          if (this.emptyIcon) {
            this.iconClasses = this.emptyIcon
          } else {
            this.iconClasses = this.icon + 'text--secondary'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.va-rating-item {
  padding: 0.1rem;
  &__icon {
  }
}
</style>
