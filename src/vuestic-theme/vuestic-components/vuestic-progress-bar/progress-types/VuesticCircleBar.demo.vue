<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px;">
      <div class="row">
        <div class="col-lg-4">
          <circle-bar
            :value="35"
            text="round"
            background-theme="White"
          />
        </div>
        <div class="col-lg-4">
          <circle-bar
            :value="65"
            theme="Info"
            background-theme="White"
          />
        </div>
        <div class="col-lg-4">
          <circle-bar
            :value="95"
            theme="Danger"
            background-theme="White"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import CircleBar from './../progress-types/CircleProgressBar'

export default {
  components: {
    CircleBar
  }
}
</script>
