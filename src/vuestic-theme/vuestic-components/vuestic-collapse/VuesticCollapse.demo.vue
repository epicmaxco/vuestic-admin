<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <vuestic-collapse v-model="expand">
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
      </vuestic-collapse>
    </div>
  </div>
</template>

<script>
import VuesticCollapse from './VuesticCollapse'

export default {
  components: { VuesticCollapse },
  data () {
    return {
      expand: false,
    }
  },
}
</script>
