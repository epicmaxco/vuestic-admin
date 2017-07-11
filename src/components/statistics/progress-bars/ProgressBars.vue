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
            <div class="pb-container">
              <progress-bar :value="72" size="thin"></progress-bar>
            </div>
          </div>
          <div class="col-4">
            Thick
            <div class="pb-container">
              <progress-bar :value="72" size="thick"></progress-bar>
            </div>
          </div>
          <div class="col-4">
            Basic Vertical
            <div class="pb-container">
              <div v-on:mouseenter="$refs.vBasic.value = 100"
                   v-on:mouseleave="$refs.vBasic.value = 0">
                <progress-bar type="vertical" :value="72" ref="vBasic"></progress-bar>
              </div>
            </div>
          </div>
          <div class="col-4">
            Thin Vertical
            <div class="pb-container">
              <progress-bar type="vertical" size="thin" :value="72"></progress-bar>
            </div>
          </div>
          <div class="col-4">
            Circle
            <div class="pb-container">
              <!--<progress-bar type="circle" value="72"></progress-bar>-->
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

