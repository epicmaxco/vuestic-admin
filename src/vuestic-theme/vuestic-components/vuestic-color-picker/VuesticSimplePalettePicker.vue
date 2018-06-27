<template>
  <div class="vuestic-simple-palette-picker">
    <ul class="vuestic-simple-palette-picker__colors">
      <span
        class="vuestic-simple-palette-picker__item vuestic-simple-palette-picker__dot"
        v-for="c in palette"
        :aria-label="'color:' + c"
        @click="handlerClick(c)"
        :class="{'vuestic-simple-palette-picker__dot-selected': isSelected(c)}"
        :style="{background: c}"
      />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'vuestic-simple-palette-picker',
    props: {
      palette: {
        type: Array,
        required: true
      },
      value: {
        default: ''
      }
    },
    computed: {
      valueProxy: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        },
      },
    },
    methods: {
      handlerClick (c) {
        this.valueProxy = c
      },
      isSelected (c) {
        return this.value === c
      }
    }
  }
</script>

<style lang="scss">
  .vuestic-simple-palette-picker {

    &__colors {
      overflow: hidden;
      padding: 0;
      margin: 0;
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
  }
</style>
