<template>
  <div class="overview-tab dashboard-tab">
      <div class="d-flex overview-row flex-row w-100 justify-content-sm-around justify-content-xs-start">

        <div class="overview-col">
          <div class="overview-item">
            <div class="overview-icon-container">
              <i class="i-vuestic-vue"></i>
            </div>
            Built with Vue.js framework
          </div>
          <div class="overview-item">
            <div class="overview-icon-container">
              <i class="i-vuestic-free"></i>
            </div>
            Absolutely free for everyone
          </div>
          <div class="overview-item">
            <div class="overview-icon-container">
              <i class="i-vuestic-fresh"></i>
            </div>
            Fresh and crisp design
          </div>
        </div>

        <div class="gutter"></div>

        <div class="overview-col">
          <div class="overview-item">
            <div class="overview-icon-container">
              <i class="i-vuestic-responsive"></i>
            </div>
            Responsive and optimized for mobile
          </div>
          <div class="overview-item">
            <div class="overview-icon-container">
              <i class="i-vuestic-rich"></i>
            </div>
            Tons of useful components
          </div>
          <div class="overview-item">
            <div class="overview-icon-container">
              <i class="i-vuestic-clean-code"></i>
            </div>
            Completely jQuery free
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'overview-tab',
    components: {

    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .overview-item {
    display: flex;
    align-items: center;
    height: 55px;
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: bold;

    .overview-icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      min-width: 85px;
      max-width: 85px;
      height: 100%;
    }
  }

  .gutter {
    max-width: 1rem;
    min-width: 1rem;

    @include media-breakpoint-down(xs) {
      display: none;
    }
  }

  .overview-row {
    @include media-breakpoint-down(xs) {
      flex-wrap: wrap;
    }
  }


</style>
