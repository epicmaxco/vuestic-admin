<template>
  <div class="vuestic-dropdown"
       :class="{'vuestic-dropdown--arrow': arrow}"
  >
    <div
      class="vuestic-dropdown__content"
      v-show="show"
      ref="content"
    >
      <slot/>
    </div>
    <span
      class="vuestic-dropdown__actuator"
      :class="{'vuestic-dropdown__actuator--arrow': arrow && show}"
      @click="toggleDropdown"
      ref="actuator"
    >
      <slot name="actuator"/>
    </span>
  </div>
</template>

<script>
import Popper from 'popper.js'

export default {
  name: 'vuestic-dropdown',
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      show: false,
      popper: null,
    }
  },
  methods: {
    toggleDropdown () {
      this.show = !this.show

      if (!this.show) {
        this.removeListener()
        setTimeout(() => {
          this.popper && this.popper.destroy()
        }, 10)
        return
      }

      this.addListener()
      setTimeout(() => {
        this.popper = new Popper(this.$refs.actuator, this.$refs.content, {
          placement: this.placement,
        })
      })
    },

    checkDropdown (e) {
      const clickedButton = e.target.closest('.vuestic-dropdown__actuator') || e.target
      if (clickedButton === this.$refs.actuator) {
        return
      }
      this.toggleDropdown()
    },
    addListener () {
      document.addEventListener('click', this.checkDropdown)
    },
    removeListener () {
      document.removeEventListener('click', this.checkDropdown)
    },
  },
  beforeDestroy () {
    this.removeListener()
  },
}
</script>

<style lang="scss">
.vuestic-dropdown {
  position: relative;

  &__content {
    position: absolute;
    width: 100%;
    min-width: 10rem;
    padding: 0;
    background-color: $darkest-gray;
    z-index: 10;
    margin: 0.75rem;
    box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, .5);
  }

  &__actuator {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }

  &--arrow {
    .vuestic-dropdown__actuator--arrow:after {
      position: absolute;
      width: 0;
      height: 0;
      display: block;
      content: "";
      border-style: solid;
      z-index: 10;
    }

    .vuestic-dropdown__content {
      max-width: 16rem;
      margin: 1.125rem;
    }

    // HACK Override bootstrap.
    .dropdown-item {
      &.active {
        color: $vue-green;
      }
    }
  }
}

[x-placement^=top] + .vuestic-dropdown__actuator--arrow:after {
  top: -1.125rem;
  left: calc(50% - 10px);
  border-width: 10px 10px 0 10px;
  border-color: $darkest-gray transparent transparent transparent;
}

[x-placement^=right] + .vuestic-dropdown__actuator--arrow:after {
  right: -1.125rem;
  top: calc(50% - 10px);
  border-width: 10px 10px 10px 0;
  border-color: transparent $darkest-gray transparent transparent;
}

[x-placement^=bottom] + .vuestic-dropdown__actuator--arrow:after {
  bottom: -1.125rem;
  left: calc(50% - 10px);
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent $darkest-gray transparent;
}

[x-placement^=left] + .vuestic-dropdown__actuator--arrow:after {
  left: -1.125rem;
  top: calc(50% - 10px);
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent $darkest-gray;
}
</style>
