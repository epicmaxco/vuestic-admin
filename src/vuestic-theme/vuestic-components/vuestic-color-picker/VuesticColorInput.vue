<template>
  <div class="vuestic-color-input">
            <span
              class="vuestic-color-input__item vuestic-color-input__dot"
              @click="handlerClick"
              :style="{background: value}"
              :class="{'vuestic-color-input__dot-selected': isShown}"/>
    <div class="form-group">
      <div class="input-group">
        <input
          :readonly="disabled"
          v-model=value
          placeholder="input color"
        >
        <i class="bar"/>
      </div>
    </div>
    <div v-if="isShown === true">
      <vuestic-advanced-color-picker :value="value"
                                     @input="onModelChange"/>
    </div>
  </div>
</template>

<script>
  import VuesticAdvancedColorPicker from './VuesticAdvancedColorPicker'

  export default {
    name: 'vuestic-color-input',
    components: {
      VuesticAdvancedColorPicker
    },
    props: {
      value: {
        default: ''
      },
      show: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        color: '',
        mutableShow: this.show
      }
    },
    computed: {
      isShown () {
        return this.mutableShow
      }
    },
    methods: {
      handlerClick () {
        if (this.mutableShow) {
          this.mutableShow = false
        } else {
          this.mutableShow = true
        }
      },
      onModelChange (model) {
        this.$emit('input', model)
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-color-input {

    &__item {
      list-style: none;
      width: 15px;
      height: 15px;
      float: left;
      margin-right: 5px;
      margin-bottom: 5px;
      position: relative;
      cursor: pointer;
    }
    &__dot-selected {
      border: solid 3px #6088b3;
    }
    &__dot {
      margin-left: 10px;
      height: 15px;
      width: 15px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
    }
  }
</style>
