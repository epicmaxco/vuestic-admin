<template>
  <div class="dropdown"
       :class="{'arrow': arrow}"
  >
    <div class="dropdown-content"
         v-show="show"
         ref="dropdownContent">
      <slot/>
    </div>
    <span
      class="dropdown-button"
      :class="{'dropdown-button--arrow': show}"
      @click="toggleDropdown"
      ref="dropdownButton"
    >
      <slot name="dropdown-button"/>
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
      default: 'bottom'
    },
    arrow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false,
      popper: null
    }
  },
  methods: {
    toggleDropdown () {
      this.show = !this.show
      setTimeout(() => {
        this.popper = new Popper(this.$refs.dropdownButton, this.$refs.dropdownContent, {
          placement: this.placement
        })
      })
      if (this.show) {
        document.addEventListener('click', this.checkDropdown)
      } else {
        document.removeEventListener('click', this.checkDropdown)
      }
    },

    checkDropdown (e) {
      const clickedButton = e.target.closest('.dropdown-button') || e.target
      if (clickedButton !== this.$refs.dropdownButton) {
        this.show = false
        this.popper.destroy()
        document.removeEventListener('click', this.checkDropdown)
      }
    },
  }
}
</script>

<style lang="scss">
  .dropdown {
    .dropdown-button {
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

    &.arrow {
      .dropdown-button--arrow:after {
        position: absolute;
        width: 0;
        height: 0;
        display: block;
        content: "";
        border-style: solid;
        z-index: 10;
      }

      .dropdown-content {
        max-width: 16rem;
        margin: 1.125rem;
      }

      .dropdown-item {
        &.active {
          color: #4ae387;
        }
      }
    }
  }

  [x-placement^=bottom] + .dropdown-button--arrow {
    &:after {
      bottom: -1.125rem;
      left: calc(50% - 10px);
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #333 transparent;
    }
  }
  [x-placement^=left] + .dropdown-button--arrow {
    &:after {
      left: -1.125rem;
      top: calc(50% - 10px);
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent #333;
    }
  }
  [x-placement^=right] + .dropdown-button--arrow {
    &:after {
      right: -1.125rem;
      top: calc(50% - 10px);
      border-width: 10px 10px 10px 0;
      border-color: transparent #333 transparent transparent;
    }
  }
  [x-placement^=top] + .dropdown-button--arrow {
    &:after {
      top: -1.125rem;
      left: calc(50% - 10px);
      border-width: 10px 10px 0 10px;
      border-color: #333 transparent transparent transparent;
    }
  }

  .dropdown-content {
    position: absolute;
    width: 100%;
    min-width: 10rem;
    padding: 0;
    background-color: #333;
    z-index: 10;
    margin: 0.75rem;
    box-shadow: 0 4px 9.6px 0.4px rgba(74,227,135,.5);
  }
</style>
