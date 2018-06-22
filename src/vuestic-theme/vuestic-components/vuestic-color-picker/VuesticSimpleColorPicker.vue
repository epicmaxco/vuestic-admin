<template>
  <div class="vuestic-simple-color-picker">
    <ul class="vuestic-colors" style="padding-top: 15px">
      <span class="vuestic-color-item dot" v-for="c in palette"
            :aria-label="'color:' + c"
            @click="handlerClick(c)"
            :class="{'dot-selected': isSelected(c)}"
            :style="{background: c}"
      />
    </ul>
  </div>
</template>

<script scoped>
  const defaultColors = [
    '#4ae387', '#49b2e3', '#f81953', '#161616', '#f7cc36'
  ]
  export default {
    name: 'vuestic-simple-color-picker',
    props: {
      palette: {
        type: Array,
        default () {
          return defaultColors
        }
      },
    },
    data () {
      return {
        selectedColor: ''
      }
    },
    methods: {
      handlerClick (c) {
        this.selectedColor = c
        this.$emit('input', c)
      },
      isSelected (c) {
        return this.selectedColor === c
      }
    }
  }
</script>

<style>
  .dot {
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }

  .dot-selected {
    border: solid 3px #6088b3;
  }

  .vuestic-colors {
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .vuestic-color-item {
    list-style: none;
    width: 15px;
    height: 15px;
    float: left;
    margin-right: 5px;
    margin-bottom: 5px;
    position: relative;
    cursor: pointer;
  }
</style>
