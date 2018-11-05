<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 900px;">
      <div class="row">
        <div class="col-lg-6">
          <vuestic-button tag="button" disabled>
            <span slot="title">Large Button</span>
          </vuestic-button>
        </div>
        <div class="col-lg-6">
          <vuestic-button small :color="'vuestic-blue'">
            <span slot="title">Large Button</span>
          </vuestic-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VuesticButton from './VuesticButton'

export default {
  components: {
    VuesticButton
  }
}
</script>
