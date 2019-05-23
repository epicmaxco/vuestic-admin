<template>
  <VbDemo>
    <VbCard style="max-width: 600px; width: 100%; background: darkblue">
      <app-search v-model="search"/>
    </VbCard>
    <VbCard style="max-width: 600px; width: 100%; background: darkblue">
      <div class="va-row">
        <app-search :search.sync="search"/>
        <span>text</span>
      </div>
    </VbCard>
  </VbDemo>
</template>

<script>
import AppSearch from './AppSearch.vue'
export default {
  components: {
    AppSearch,
  },
  data () {
    return {
      search: '',
    }
  },
}
</script>
