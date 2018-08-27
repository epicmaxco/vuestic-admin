<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      {{ expand }}
      <vuestic-collapse :isOpen="expand">
        <button slot="header">
          Toggle collapse
        </button>
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
      </vuestic-collapse>
    </div>
    <div class="col-lg-12">
      <button class="btn btn-primary" @click="expand = !expand">
        <span> Second Button </span>
      </button>
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
