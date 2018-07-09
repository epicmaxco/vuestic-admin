<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px;">
      <div class="row">
        <div class="col-lg-4">
          <vuestic-progress-bar
            :value="35"
            text="round"
            type="circle"
            color="warning"
            background-color="white"
          />
        </div>
        <div class="col-lg-4">
          <vuestic-progress-bar
            :value="65"
            type="circle"
            color="info"
            background-color="white"
            :animated="true"
          />
        </div>
        <div class="col-lg-4">
          <vuestic-progress-bar
            :value="95"
            type="circle"
            color="danger"
            background-color="white"
            :animated="true"
          />
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
