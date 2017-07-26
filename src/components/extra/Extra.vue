<template>
  <div class="extra">
    <div class="row">
      <div class="col-md-12">
        <widget headerText="Alerts">
          <vuestic-alert type="success" :withCloseBtn="true">
            <span class="badge badge-pill badge-success">SUCCESS</span>
            You successfully read this important alert message.
            <i class="fa fa-close alert-close"></i>
          </vuestic-alert>
          <vuestic-alert type="info" :withCloseBtn="true">
            <span class="badge badge-pill badge-info">INFO</span>
            This alert needs your attention, but it's not super important.
          </vuestic-alert>
          <vuestic-alert type="warning" :withCloseBtn="true">
            <span class="badge badge-pill badge-warning">WARNING</span>
            Better check yourself, you're not looking too good.
          </vuestic-alert>
          <vuestic-alert type="danger" :withCloseBtn="true">
            <span class="badge badge-pill badge-danger">DANGER</span>
            Change a few things up and try submitting again.
          </vuestic-alert>
        </widget>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <vuestic-tabs :names="['Overview', 'Data Visualization', 'Users & Members', 'Setup Profile']">
          <div slot="Overview">
            Overview
          </div>
          <div slot="Data Visualization">
            Data Visualisation
          </div>
          <div slot="Users & Members">
            Users & Members
          </div>
          <div slot="Setup Profile">
            Setup Profile
          </div>
        </vuestic-tabs>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <widget header-text="Profile Card">
          <div class="container d-flex justify-content-center">
            <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'"></vuestic-profile-card>
          </div>
        </widget>
      </div>
      <div class="col-md-8">
        <widget header-text="Chat">
          <vuestic-chat></vuestic-chat>
        </widget>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticTabs from 'components/common/vuestic-tabs/VuesticTabs.vue'
  import Widget from 'components/common/widget/Widget'
  import VuesticProfileCard from 'components/common/vuestic-profile-card/VuesticProfileCard.vue'
  import VuesticAlert from 'components/common/vuestic-alert/VuesticAlert'
  import VuesticChat from 'components/common/vuestic-chat/VuesticChat'

  export default {
    name: 'extra',
    components: {
      Widget,
      VuesticTabs,
      VuesticProfileCard,
      VuesticAlert,
      VuesticChat
    }
  }
</script>
