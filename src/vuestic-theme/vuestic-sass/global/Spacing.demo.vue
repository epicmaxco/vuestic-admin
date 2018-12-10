<template>
  <div class="va-layout gutter-md">
    <div class="va-row">
      <h3>Spacing playground</h3>
    </div>
    <div class="va-row">
      <div class="flex xs2">
        <span>m</span><vuestic-simple-select :options="directionList" :value="selectedMarginDirection"/>
      </div>
      <div class="flex xs2">
        <span>-</span><vuestic-simple-select :options="sizesList" :value="selectedMarginSize"/>
      </div>
      <div class="flex xs2 offset-2">
        <span>p</span><vuestic-simple-select :options="directionList" :value="selectedPaddingDirection"/>
      </div>
      <div class="flex xs2">
        <span>-</span><vuestic-simple-select :options="sizesList" :value="selectedPaddingSize"/>
      </div>
    </div>
    <div class="va-row">
      <div class="flex xs6">{{selectedMarginClass}}</div>
      <div class="flex xs6">{{selectedPaddingClass}}</div>
    </div>
    <div class="va-row">
      <div class="flex xs12">
        <div class="playground-component">
          <div class="playground-component__margin" :class="selectedMarginClass">
            <div :class="selectedPaddingClass" class="playground-component__padding">
              <div class="playground-component__inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticSimpleSelect from '../../vuestic-components/vuestic-simple-select/VuesticSimpleSelect'

export default {
  components: { VuesticSimpleSelect },
  data () {
    return {
      directionList: ['a', 'y', 'x', 't', 'r', 'b', 'l'],
      selectedMarginDirection: '',
      selectedPaddingDirection: '',
      sizesList: ['1', '2', '3', '4', '5', 'auto'],
      selectedMarginSize: '',
      selectedPaddingSize: '',
    }
  },
  computed: {
    selectedMarginClass () {
      return `m${this.selectedMarginDirection}-${this.selectedMarginSize}`
    },
    selectedPaddingClass () {
      return `p${this.selectedPaddingDirection}-${this.selectedPaddingSize}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .flex {
    display: flex;
    align-items: baseline;
  }
  .playground-component {
    background-color: orange;
    &__padding {
      background-color: green;
    }
    &__inner {
      background-color: white;
      height: 10px;
    }
  }
</style>
