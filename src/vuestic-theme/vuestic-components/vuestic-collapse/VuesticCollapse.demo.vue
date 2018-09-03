<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <vuestic-collapse v-model="isOpen">
        <div slot="header">
          <button class="btn btn-primary">
            <span> First Button </span>
          </button>
        </div>
        <div slot="body">
          <div style="padding: 10px;">
            <div> Expand content </div>
            <div> Expand content </div>
            <div> Expand content </div>
            <div> Expand content </div>
            <div> Expand content </div>
            <div> Expand content </div>
          </div>
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
        isOpen: false
      }
    },
  }
</script>
