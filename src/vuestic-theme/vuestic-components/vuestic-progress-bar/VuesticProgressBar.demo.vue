<template>
  <div class="row">
    <div class="col-sm-4 col-12">
      <div class="pb-container">
        <vuestic-progress-bar size="thick" :value="30" :color="'info'" :disabled="true">
        </vuestic-progress-bar>
      </div>
    </div>
    <div class="col-sm-4 col-12">
      <div class="pb-container">
        <vuestic-progress-bar :value="55" :color="'danger'" :type="'vertical'" :disabled="true">
        </vuestic-progress-bar>
      </div>
    </div>
    <div class="col-sm-4 col-12">
      <div class="pb-container">
        <vuestic-progress-bar :value="15" :color="'warning'" :type="'circle'" :background-color="'white'" :disabled="true">
        </vuestic-progress-bar>
      </div>
    </div>
  </div>
</template>

<script>

import VuesticProgressBar from './VuesticProgressBar'

export default {
  components: {
    VuesticProgressBar
  },
}
</script>
