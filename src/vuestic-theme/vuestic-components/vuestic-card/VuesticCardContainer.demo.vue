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
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
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
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </vuestic-card>
        <vuestic-card>
          Running out of pages in your passport. Two trailer park girls go
          around the outside.
        </vuestic-card>
      </vuestic-card-container>
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
      return { layout: 'fixed' }
    },
  }
</script>

