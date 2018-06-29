<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <button @click="layout = 'fixed'">Fixed</button>
      <button @click="layout = 'floating'">Floating</button>
      <vuestic-card-container :layout="layout">
        <vuestic-card>
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </vuestic-card>
        <vuestic-card>
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </vuestic-card>
        <vuestic-card>
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </vuestic-card>
        <vuestic-card>
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </vuestic-card>
      </vuestic-card-container>
      <div v-masonry transition-duration="0.3s" class="test-container" item-selector=".item" column-width="#test-width">
        <div id="test-width"></div>
        <div class="test-gutter"></div>
        <div v-masonry-tile class="item" v-for="(item, index) in blocks">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticCardContainer from './VuesticCardContainer.vue'
  import VuesticCard from './VuesticCard'

  const Variables = require('../../../sass/_variables.scss')

  export default {
    created () {
      console.log('Variables', Variables)
    },
    components: {
      VuesticCard,
      VuesticCardContainer,
    },
    data () {
      return {
        layout: 'floating',
        blocks: [
          {
            name: 'Vlad'
          },
          {
            name: 'Sanya works as a front-end developer in Epicmax and feel himself wonderful'
          },
          {
            name: 'Pasha'
          },
          {
            name: 'Leha'
          }
        ]
      }
    },
    updated () {
      this.$redrawVueMasonry()
    }
  }
</script>

<style lang="scss">
  @import '../../../sass/variables';

  .test-container {
    width: 800px;
  }

  .test-gutter {
    width: 50px;
  }

  #test-width, .item {
    width: 25%;
  }
</style>

