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

    <widget class="no-padding no-v-padding no-h-padding">
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
    </widget>

    <div class="row">
      <div class="col-md-4">
        <widget header-text="Profile Card" class="profile-card-widget">
          <div class="profile-card-container">
            <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'"
                                  :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
            </vuestic-profile-card>
          </div>
        </widget>
      </div>
      <div class="col-md-8">
        <widget header-text="Chat" class="chat-widget">
          <div class="chat-container">
            <vuestic-chat v-model="chatMessages"></vuestic-chat>
          </div>
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
    },
    data () {
      return {
        chatMessages: [
          {
            text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
            yours: false
          },
          {
            text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
            yours: true
          },
          {
            text: 'Sounds great! See you later!',
            yours: false
          },
          {
            text: 'Should I bring a lightbox with mer?',
            yours: true
          },
          {
            text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
            yours: false
          },
          {
            text: 'I\'m working on Vuestic, so let\'s meet at 3pm. Thanks!',
            yours: true
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .profile-card-widget, .chat-widget {
    height: 100%;
    .profile-card-container, .chat-container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>
