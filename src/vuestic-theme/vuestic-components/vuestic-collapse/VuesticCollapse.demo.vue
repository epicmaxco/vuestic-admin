<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <div class="row">
        <div class="col-lg-12">
          <vuestic-collapse :isOpen="expand">
            <div slot="header">
              <button class="btn btn-primary">
                <span> First Button </span>
              </button>
            </div>
            <div slot="body">
              <div> Expand content </div>
              <div> Expand content </div>
              <div> Expand content </div>
              <div> Expand content </div>
              <div> Expand content </div>
              <div> Expand content </div>
            </div>
          </vuestic-collapse>
        </div>
        <div class="col-lg-12">
          <button class="btn btn-primary" @click="toggleCollapse()">
            <span> Second Button </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticCollapse from './VuesticCollapse'

  export default {
    components: { VuesticCollapse },
    data () {
      return {
        expand: false
      }
    },
    methods: {
      toggleCollapse () {
        this.expand = !this.expand
      }
    }
  }
</script>
