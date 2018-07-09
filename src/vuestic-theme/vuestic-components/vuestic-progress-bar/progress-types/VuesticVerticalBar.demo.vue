<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <div class="row">
        <div class="col-lg-4">
          <vuestic-progress-bar :value="55" type="vertical" size="thin"/>
        </div>
        <div class="col-lg-4">
          <vuestic-progress-bar :value="75" type="vertical" text="second"/>
        </div>
        <div class="col-lg-4">
          <vuestic-progress-bar :value="100" type="vertical" size="thick" animated="true"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VuesticProgressBar from './../VuesticProgressBar'

export default {
  components: {
    VuesticProgressBar,
  }
}
</script>
