<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <va-tabs v-model="value" :titles="titles">
        <va-tab value="item 1"> aaaaa </va-tab>
        <va-tab value="item 2"> afafa</va-tab>
        <va-tab value="item 3">  fafa</va-tab>
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
      value: 'item 1',
      titles: ['item 1', 'item 2', 'item 3']
    }
  }
}
</script>
