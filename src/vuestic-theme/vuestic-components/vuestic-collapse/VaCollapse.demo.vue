<template>
  <VbDemo>
    <VbContainer style="width: 900px;">
      <va-collapse v-model="expand">
        <button class="btn btn-info" slot="header">
          Toggle collapse
        </button>
        <div slot="body" style="padding: 10px;">
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
        </div>
      </va-collapse>
      <va-collapse v-model="expand" withBackground>
        <span slot="header"> Expand This Block </span>
        <div slot="body">
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content Expand
          content Expand content Expand content Expand content Expand content
          Expand content Expand content Expand content Expand content
        </div>
      </va-collapse>
    </VbContainer>
  </VbDemo>
</template>

<script>
import VaCollapse from './VaCollapse'

export default {
  components: { VaCollapse },
  data () {
    return {
      expand: false,
    }
  },
}
</script>
