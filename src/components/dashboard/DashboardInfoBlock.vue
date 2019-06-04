<template>
  <div class="va-row row-equal">
    <div class="flex xl6 xs12">
      <div class="va-row">
        <div
          class="flex xs4"
          v-for="(info, idx) in infoTiles"
          :key="idx"
        >
          <va-card class="mb-4" :color="info.color">
            <p class="display-2 text-white mb-0">{{ info.value }}</p>
            <p>{{ info.text }}</p>
          </va-card>
        </div>
      </div>

      <div class="va-row">
        <div class="flex xs12 md6">
          <va-card>
            <p class="display-2 text-primary mb-0">291</p>
            <p>completed pull requests</p>
          </va-card>
        </div>
        <div class="flex xs12 md6">
          <va-card>
            <div class="va-row row-separated">
              <div class="flex xs4">
                <p class="display-2 text-primary mb-0">3</p>
                <p>users</p>
              </div>
              <div class="flex xs4">
                <p class="display-2 text-info mb-0">24</p>
                <p>points</p>
              </div>
              <div class="flex xs4">
                <p class="display-2 text-warning mb-0">91</p>
                <p>units</p>
              </div>
            </div>
          </va-card>
        </div>
      </div>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card
        stripe="info"
        title="Component reach theme"
      >
        Buying the right telescope to take your love of astronomy to the
        next level is a big next step.

        <div class="va-row mt-3">
          <va-button color="success">
            View Library
          </va-button>
        </div>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card
        image="https://i.imgur.com/qSykGko.jpg"
        square
        titleOnImage
      >
        <template slot="header">
          <va-button
            flat
            icon-right="ion ion-ios-arrow-forward"
            color="success"
          >
            Explore gallery
          </va-button>
        </template>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardInfoBlock',
  data () {
    return {
      infoTiles: [{
        color: 'success',
        value: '803',
        text: 'commits',
        icon: '',
      }, {
        color: 'danger',
        value: '57',
        text: 'components',
        icon: '',
      }, {
        color: 'info',
        value: '5',
        text: 'team members',
        icon: '',
      }],
    }
  },
}
</script>

<style lang="scss">
  .row-separated .flex + .flex{
    border-left: 1px solid #e3eaeb;
  }
</style>
