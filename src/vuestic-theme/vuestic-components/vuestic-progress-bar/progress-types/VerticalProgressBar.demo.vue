<template>
  <div class="demo-container">
    <div class="demo-container__item" style="width: 300px">
      <div class="va-row">
        <div class="flex lg4">
          <vertical-bar :value="55" theme="Warning" type="vertical"
                        size="thin"/>
        </div>
        <div class="flex lg4">
          <vertical-bar :value="75" theme="Danger" type="vertical" size="basic"
                        text="second"/>
        </div>
        <div class="flex lg4">
          <vertical-bar :value="100" theme="Info" size="thick"/>
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
  },
}
</script>
