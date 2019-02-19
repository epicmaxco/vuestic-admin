<template>
  <div class="va-star">
    <i
      :class="iconClassesComputed"
      :style="iconStyles"
      class="va-star__icon"
      @mousemove="onHover"
      @mouseleave="removeHover"
      @click="onClick()"
      width="50"
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
      type: String
    },
    iconStyles: {
      type: Object
    },
    color: {
      type: String
    },
    emptyIcon: {
      type: String
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
      if (this.halfIcon) {
        if (this.isRatingHover) {
          return this.hover ? this.hoverValue !== 0.5 ? this.iconClasses + this.icon
            : this.halfIcon : this.emptyIcon
        }
        return this.value ? this.icon : this.isHalf ? this.halfIcon : this.emptyIcon
      }
      return this.iconClasses + this.extraClasses
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
.va-star {
  padding: 0.1rem;
  &__icon {
  }
}
</style>
