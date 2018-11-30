<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-tabs v-model="value">
        <va-tab v-for="n in 3" :value="'item' + n" v-bind:key="n">item {{ n }}</va-tab>
        <va-tab v-for="n in 3" slot="content" :value="'item' + n" v-bind:key="n"> item content {{ n }}</va-tab>
      </va-tabs>
    </div>
  </div>
</template>

<script>
import VaTabs from './VaTabs'
import VaTab from './VaTab'

export default {
  components: {
    VaTabs,
    VaTab
  },
  data () {
    return {
      value: 'item 1'
    }
  }
}
</script>
