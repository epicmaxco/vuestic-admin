<template>
  <div class="spacing-playground va-layout gutter--md">
    <div class="va-row">
      <h3>Spacing playground</h3>
    </div>
    <div class="va-row">
      <div class="flex xs3">
        <span>m</span>
        <vuestic-simple-select :options="directionList" v-model="selectedMarginDirection"/>
      </div>
      <div class="flex xs2">
        <span>-</span>
        <vuestic-simple-select :options="sizesList" v-model="selectedMarginSize"/>
      </div>
      <div class="flex xs3 offset-2">
        <span>p</span>
        <vuestic-simple-select :options="directionList" v-model="selectedPaddingDirection"/>
      </div>
      <div class="flex xs2">
        <span>-</span>
        <vuestic-simple-select :options="sizesList" v-model="selectedPaddingSize"/>
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
    <div class="va-row">
      <div class="flex xs12">
        <vuestic-color-presentation color="#c9f7db" name="padding"/>
        <vuestic-color-presentation color="#ffd093" name="margin"/>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticSimpleSelect from '../vuestic-simple-select/VuesticSimpleSelect'
import VuesticColorPresentation
  from '../vuestic-color-presentation/VuesticColorPresentation'

export default {
  name: 'spacing-playgroud',
  components: { VuesticColorPresentation, VuesticSimpleSelect },
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
      return (this.selectedMarginDirection && this.selectedMarginSize)
        ? `m${this.selectedMarginDirection}-${this.selectedMarginSize}`
        : ''
    },
    selectedPaddingClass () {
      return (this.selectedPaddingDirection && this.selectedPaddingSize)
        ? `p${this.selectedPaddingDirection}-${this.selectedPaddingSize}`
        : ''
    },
  },
}
</script>

<style lang="scss">
.spacing-playground {
  .playground-component {
    background-color: #ffd093;

    &__padding {
      background-color: #c9f7db;
    }

    &__inner {
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.2);
      height: 20px;
    }
  }
}
</style>
