<template>
  <div class="extra">
    <widget headerText="Alerts">
      <div class="alert alert-success with-close" role="alert">
        <span class="badge badge-pill badge-success">SUCCESS</span>
        You successfully read this important alert message.
        <i class="fa fa-close alert-close"></i>
      </div>
      <div class="alert alert-info with-close" role="alert">
        <span class="badge badge-pill badge-info">INFO</span>
        This alert needs your attention, but it's not super important.
        <i class="fa fa-close alert-close"></i>
      </div>
      <div class="alert alert-warning with-close" role="alert">
        <span class="badge badge-pill badge-warning">WARNING</span>
        Better check yourself, you're not looking too good.
        <i class="fa fa-close alert-close"></i>
      </div>
      <div class="alert alert-danger with-close" role="alert">
        <span class="badge badge-pill badge-danger">DANGER</span>
        Change a few things up and try submitting again.
        <i class="fa fa-close alert-close"></i>
      </div>
    </widget>
    <div class="tabs">
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
    <div class="profile-card">
      <div class="row">
        <div class="col-md-12">
          <widget header-text="Profile Card">
            <div class="container d-flex justify-content-center">
              <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'"></vuestic-profile-card>
            </div>
          </widget>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticTabs from 'components/common/vuestic-tabs/VuesticTabs.vue'
  import Widget from 'components/common/widget/Widget'
  import VuesticProfileCard from 'components/common/vuestic-profile-card/VuesticProfileCard.vue'

  export default {
    name: 'extra',
    components: {
      Widget,
      VuesticTabs,
      VuesticProfileCard
    }
  }
</script>
