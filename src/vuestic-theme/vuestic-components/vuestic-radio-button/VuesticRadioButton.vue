<template>
  <div class="vuestic-radio-button" :class="{
      'vuestic-radio-button--unselected' : !checkState,
      'vuestic-radio-button--disabled' : disabled
    }"
  >
    <div class="vuestic-radio-button__circle-container">
      <div class="vuestic-radio-button__circle">
        <div class="vuestic-radio-button__circle-inside"/>
      </div>
      <input
        class="vuestic-radio-button__input"
        type="radio"
        :name="name"
        :id="id"
        :value="value"
        :checked="checkState"
        @change="onChange"
        :disabled="disabled"
      >
    </div>
    <label :for="id">
      <span class="vuestic-radio-button__label">{{ label }}</span>
    </label>
  </div>
</template>

<script>

export default {
  name: 'vuestic-radio-button',
  props: {
    label: String,
    value: {
      default: '',
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      default: undefined,
    },
  },
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  mounted () {
    if (this.checked && !this.checkState) {
      this.toggle()
    }
  },
  methods: {
    onChange () {
      this.toggle()
    },
    toggle () {
      this.$emit('input', this.checkState ? '' : this.value)
    },
  },
  computed: {
    checkState () {
      if (this.modelValue === undefined) {
        return this.checked
      }
      return this.modelValue === this.value
    },
  },
  watch: {
    checked (newValue) {
      if (newValue !== this.checkState) {
        this.toggle()
      }
    },
  },
}
</script>

<style lang="scss">
.vuestic-radio-button {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  #{&}__input {
    position: absolute;
    cursor: pointer;
    opacity: 0;
    width: 20px;
    height: 20px;
    @at-root {
      .vuestic-radio-button--disabled#{&} {
        cursor: initial;
      }
    }
  }
  #{&}__circle {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    display: block;
    position: absolute;
    border: $vue-green solid 2px;
    display: flex;
    justify-content: center;
    @at-root {
      .vuestic-radio-button--unselected#{&} {
        border: $gray solid 2px;
      }

      .vuestic-radio-button--disabled#{&} {
        opacity: 0.4;
      }
    }
  }
  &__circle-container {
    width: 20px;
    height: 20px;
  }
  #{&}__circle-inside {
    width: 5px;
    height: 5px;
    border-radius: 4px;
    position: absolute;
    border: $vue-green solid 4px;
    margin-top: 3.5px;
    @at-root {
      .vuestic-radio-button--unselected#{&} {
        display: none;
      }
    }
  }
  &__label {
    margin-left: 0.5rem;
  }
}
</style>
