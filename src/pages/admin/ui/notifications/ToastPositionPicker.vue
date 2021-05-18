<template>
  <div class="toast-position-picker mr-4">
    <div class="position-boxes-row d-flex">
      <div class="position-box"
        @click="updatePosition('top-left')"
        :class="{'selected': isBoxSelected('top-left')}"
        :style="computedStyle">
      </div>
      <!-- <div class="position-box"
        @click="updatePosition('top-center')"
        :class="{'selected': isBoxSelected('top-center')}"
        :style="computedStyle">
      </div> -->
      <div class="position-box"
        @click="updatePosition('top-right')"
        :class="{'selected': isBoxSelected('top-right')}"
        :style="computedStyle">
      </div>
    </div>
    <div class="position-boxes-row d-flex">
      <div class="position-box"
        @click="updatePosition('bottom-left')"
        :class="{'selected': isBoxSelected('bottom-left')}"
        :style="computedStyle">
      </div>
      <!-- <div class="position-box"
        @click="updatePosition('bottom-center')"
        :class="{'selected': isBoxSelected('bottom-center')}"
        :style="computedStyle">
      </div> -->
      <div class="position-box"
        @click="updatePosition('bottom-right')"
        :class="{'selected': isBoxSelected('bottom-right')}"
        :style="computedStyle">
      </div>
    </div>
  </div>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'toast-position-picker',

  props: {
    modelValue: {
      type: String,
      default: 'bottom-center',
    },
  },

  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors
    },
    computedStyle () {
      return {
        backgroundColor: this.theme.primary,
      }
    },
  },

  methods: {
    updatePosition (position) {
      this.$emit('update:modelValue', position)
    },

    isBoxSelected (position) {
      return this.modelValue === position
    },
  },
}
</script>

<style lang='scss' scoped>
.toast-position-picker {
  width: 112px;
  height: 76px;
}

.position-boxes-row {
  flex-direction: row;

  &:first-child {
    margin-bottom: 2px;
  }
}

.position-box {
  height: 36px;
  width: 36px;
  margin-right: 2px;
  cursor: pointer;
  opacity: 0.3;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.6;
  }

  &.selected {
    opacity: 1;
  }
}
</style>
