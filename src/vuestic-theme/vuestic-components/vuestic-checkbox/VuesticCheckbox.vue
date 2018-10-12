<template>
  <div class="vuestic-checkbox" @click="selected = !selected">
    <span class="vuestic-checkbox__icon selected"
          v-if="selected && !disabled"
    >
      <span class="icon">
        <i class="ion ion-md-checkmark" aria-hidden="true"/>
      </span>
    </span>
    <input class="vuestic-checkbox__icon"
           v-else
    />
    <label :for="id">
      <span class="vuestic-checkbox__label-text">
        <slot name="label">{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
function generateRandomId () {
  return Math.floor(Math.random() * Math.pow(10, 10))
}

export default {
  name: 'vuestic-checkbox',
  props: {
    label: String,
    value: {
      type: Boolean,
      required: true
    },
    id: {
      type: String,
      default () {
        // We require unique id to show label
        return 'label-' + generateRandomId()
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selected: {
      set (selected) {
        if (!this.readonly) {
          this.$emit('input', selected)
        }
      },
      get () {
        return this.value
      }
    }
  }
}
</script>

<style lang="scss">
.vuestic-checkbox {
  cursor: pointer;
  display: inline-flex;
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 1.375rem;
    width: 1.375rem;
    color: $white;
    border: solid 0.125rem $lighter-gray;
    @at-root {
      &.selected {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.375rem;
        width: 1.375rem;
        color: $white;
        background-color: $vue-green;
        border: 0;
      }
    }
  }
  &__abc-label-text {
    display: inline-block;
    position: relative;
    top: 2px;
    padding-left: 13px;
  }
}
</style>
