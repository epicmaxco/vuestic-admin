<template>
  <div class="vuestic-simple-color-picker">
    <ul class="vuestic-colors">
      <span class="vuestic-color-item vuestic-color-picker-dot"
            v-for="c in palette"
            :aria-label="'color:' + c"
            @click="handlerClick(c)"
            :class="{'vuestic-color-picker-dot-selected': isSelected(c)}"
            :style="{background: c}"
      />
    </ul>
  </div>
</template>

<script scoped>

  export default {
    name: 'vuestic-simple-color-picker',
    props: {
      palette: {
        type: Array,
        required: true
      },
      selectedColor: ''
    },
    data () {
      return {
        selectedColorLocal: this.selectedColor
      }
    },
    methods: {
      handlerClick (c) {
        this.selectedColorLocal = c
        this.$emit('input', c)
      },
      isSelected (c) {
        return this.selectedColorLocal === c
      }
    }
  }
</script>

<style>
  .vuestic-color-picker-dot {
    margin-left: 10px;
    height: 15px;
    width: 15px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }

  .vuestic-color-picker-dot-selected {
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
