<template>
  <div class="spacing-playground layout gutter--md">
    <div class="row">
      <h3>Spacing playground</h3>
    </div>
    <div class="row">
      <div class="flex xs3">
        <span>m</span>
        <va-select :options="directionList" v-model="selectedMarginDirection"/>
      </div>
      <div class="flex xs2">
        <span>-</span>
        <va-select :options="sizesList" v-model="selectedMarginSize"/>
      </div>
      <div class="flex xs3 offset-2">
        <span>p</span>
        <va-select :options="directionList" v-model="selectedPaddingDirection"/>
      </div>
      <div class="flex xs2">
        <span>-</span>
        <va-select :options="sizesList" v-model="selectedPaddingSize"/>
      </div>
    </div>
    <div class="row">
      <div class="flex xs6">{{selectedMarginClass}}</div>
      <div class="flex xs6">{{selectedPaddingClass}}</div>
    </div>
    <div class="row">
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
    <div class="row">
      <div class="flex xs12">
        <va-color-presentation color="#c9f7db" name="padding"/>
        <va-color-presentation color="#ffd093" name="margin"/>
      </div>
    </div>
  </div>
</template>

<script>
import VaSelect from '../../vuestic-components/va-select/VaSelect'
import VaColorPresentation
  from '../../vuestic-components/va-color-presentation/VaColorPresentation'

export default {
  name: 'spacing-playgroud',
  components: { VaColorPresentation, VaSelect },
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
    display: flex;
    background-color: #ffd093;

    &__margin {
      width: 100%;
    }
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
