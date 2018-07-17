<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <div class="row">
        <div class="col-lg-4">
          <vertical-bar :value="55" type="vertical" size="thin"/>
        </div>
        <div class="col-lg-4">
          <vertical-bar :value="75" type="vertical" text="second"/>
        </div>
        <div class="col-lg-4">
          <vertical-bar :value="100" type="vertical" size="thick"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VerticalBar from './../progress-types/VerticalProgressBar'

export default {
  components: {
    VerticalBar,
  }
}
</script>
