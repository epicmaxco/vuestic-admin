<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 1500px;">
      <div class="row">
        <div class="col-lg-4">
          <vuestic-button tag="button" :color="'vuestic-green'">
            <span slot="title">Default Button</span>
          </vuestic-button>
        </div>
        <div class="col-lg-4">
          <vuestic-button large :color="'vuestic-blue'">
            <span slot="title">Large Button</span>
          </vuestic-button>
        </div>
        <div class="col-lg-4">
          <vuestic-button small :color="'vuestic-red'">
            <span slot="title">Small Button</span>
          </vuestic-button>
        </div>
      </div>
      <div class="row" style="margin-top: 100px;">
        <div class="col-lg-4">
          <vuestic-button tag="button" :color="'vuestic-yellow'">
            <span slot="title">Default Button</span>
          </vuestic-button>
        </div>
        <div class="col-lg-4">
          <vuestic-button large :color="'vuestic-gray'">
            <span slot="title">Large Button</span>
          </vuestic-button>
        </div>
        <div class="col-lg-4">
          <vuestic-button small :color="'vuestic-dark'">
            <span slot="title">Small Button</span>
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
