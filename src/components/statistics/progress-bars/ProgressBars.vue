<template>
  <div class="progress-bars">
    <div class="row">
      <widget class="col-12" headerText="Progress Bars">
        <div class="row">
          <div class="col-4 pb-container">
            Basic
            <div class="" v-on:mouseenter="$refs.hBasic.value = 100"
                 v-on:mouseleave="$refs.hBasic.value = 0">
              <progress-bar :value="0" ref="hBasic">
              </progress-bar>
            </div>
          </div>
          <div class="col-4">
            Thin
            <div class="" v-on:mouseenter="$refs.hThin.value = 100"
                 v-on:mouseleave="$refs.hThin.value = 0">
              <progress-bar size="thin" ref="hThin">
              </progress-bar>
            </div>
          </div>
          <div class="col-4">
            Thick
            <div class="" v-on:mouseenter="$refs.hThick.value = 100"
                 v-on:mouseleave="$refs.hThick.value = 0">
              <progress-bar size="thick" ref="hThick">
              </progress-bar>
            </div>
          </div>
          <div class="col-4">
            Basic Vertical
            <div class="pb-container">
              <div v-on:mouseenter="$refs.vBasic.value = 100"
                   v-on:mouseleave="$refs.vBasic.value = 0">
                <progress-bar type="vertical" ref="vBasic"></progress-bar>
              </div>
            </div>
          </div>
          <div class="col-4">
            Thin Vertical
            <div class="" v-on:mouseenter="$refs.vThin.value = 100"
                 v-on:mouseleave="$refs.vThin.value = 0">
              <progress-bar size="thin" type="vertical" ref="vThin">
              </progress-bar>
            </div>
          </div>
          <div class="col-4">
            Circle
            <div class="pb-container">
              <div v-on:mouseenter="$refs.circle.value = 100"
                   v-on:mouseleave="$refs.circle.value = 0">
                <progress-bar type="circle" ref="circle"></progress-bar>
              </div>
            </div>
          </div>
        </div>
      </widget>
    </div>
  </div>
</template>

<script>
  import Widget from '../../common/widget/Widget'
  import ProgressBar from './ProgressBar.vue'

  export default {
    components: {
      Widget,
      ProgressBar
    },
    name: 'progress-bars',
    methods: {
      mouse (ref, flag) {
        console.log('test')
        let value = flag ? 100 : 0
        this.$refs[ref].setValue(value)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../sass/mixins";

  .pb-container {
    height: 120px;
  }
</style>

