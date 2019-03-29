<template>
  <div class="va-row">
    <div class="flex md6">

    </div>

    <div class="flex md3">
      <va-card
        stripe="info"
        title="Component reach theme"
      >
        Buying the right telescope to take your love of astronomy to the
        next level is a big next step in the development.
        What an extraordinary example.

        <div class="va-row mt-3">
          <va-button color="success">
            View Library
          </va-button>
          <va-button
            flat
            color="gray"
            class="ml-2"
          >
            Ignore
          </va-button>
        </div>
      </va-card>
    </div>
    <div class="flex md3">
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
        icon: ''
      }, {
        color: 'danger',
        value: '57',
        text: 'components',
        icon: ''
      }, {
        color: 'info',
        value: '5',
        text: 'team members',
        icon: ''
      }]
    }
  }
}
</script>
