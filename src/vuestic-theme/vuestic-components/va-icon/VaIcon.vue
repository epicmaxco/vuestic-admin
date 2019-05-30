<template>
  <i class="va-icon"
     :class="[iconName, iconClass]"
     :style="iconStyle"
  ><slot/></i>
</template>

<script>
export default {
  name: 'va-icon',
  props: {
    icon: {
      type: [String, Array],
    },
    small: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
    size: {
      type: [String, Number],
    },
    fixedWidth: {
      type: Boolean,
    },
    rotation: {
      type: [String, Number],
    },
    color: {
      type: String,
    },
  },
  data () {
    return {
      iconName: null,
    }
  },
  computed: {
    iconClass () {
      return {
        'va-icon--large': this.large,
        'va-icon--small': this.small,
        'va-icon--fixed': this.fixedWidth,
      }
    },
    iconStyle () {
      return {
        transform: 'rotate(' + this.rotation + 'deg)',
        fontSize: typeof this.size === 'number' ? this.size + 'px' : this.size,
        color: this.$themes[this.color] || this.color,
      }
    },
  },
  mounted () {
    if (this.$slots.default) {
      if (this.icon.includes('mdi')) {
        this.iconName = 'material-icons'
      } else {
        this.iconName = `${this.icon} ${this.icon}-${this.$slots.default[0].text.trim()}`
        this.$el.innerHTML = ''
        this.$el.innerText = ''
      }
    } else {
      this.iconName = this.icon
    }
  },
}
</script>

<style lang="scss">
@import "../../vuestic-sass/resources/resources";

.va-icon {
  display: inline-block;
  letter-spacing: normal;

  &--large {
    font-size: $icon-lg-size;
  }

  &--small {
    font-size: $icon-sm-size;
  }

  &--fixed {
    width: $icon-fixed-width;
    text-align: center;
  }
}
</style>
