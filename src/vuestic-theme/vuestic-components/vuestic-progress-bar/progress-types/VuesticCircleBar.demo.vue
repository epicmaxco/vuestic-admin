<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px;">
      <div class="row">
        <div class="col-lg-4">
          <circle-bar
            :value="35"
            text="round"
            color="warning"
            background-color="white"
          />
        </div>
        <div class="col-lg-4">
          <circle-bar
            :value="65"
            color="info"
            background-color="white"
          />
        </div>
        <div class="col-lg-4">
          <circle-bar
            :value="95"
            color="danger"
            background-color="white"
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
