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
        <div slot="Overview" class="d-flex justify-content-center">
          Overview
        </div>
        <div slot="Data Visualization" class="d-flex justify-content-center">
          Data Visualisation
        </div>
        <div slot="Users & Members" class="d-flex justify-content-center">
          Users & Members
        </div>
        <div slot="Setup Profile" class="d-flex justify-content-center">
          Setup Profile
        </div>
      </vuestic-tabs>
    </widget>

    <div class="row">
      <div class="col-md-4 d-flex">
        <widget header-text="Profile Card" class="profile-card-widget">
          <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'" photoSource="http://i.imgur.com/UTc7Fne.png"
                                :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
          </vuestic-profile-card>
        </widget>
      </div>
      <div class="col-md-8 d-flex">
        <widget header-text="Chat" class="chat-widget">
          <vuestic-chat v-model="chatMessages"></vuestic-chat>
        </widget>
      </div>
    </div>

    <div class="row bottom-widgets">
      <div class="col-md-6 d-flex">
        <widget class="no-h-padding no-v-padding">
          <vuestic-feed :initialPosts="posts"></vuestic-feed>
        </widget>
      </div>
      <div class="col-md-6 d-flex">
        <widget class="business-posts">
          <vuestic-social-news :news="news" :url="'http://instagram.com'"></vuestic-social-news>
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
  import VuesticFeed from '../common/vuestic-feed/VuesticFeed.vue'
  import VuesticSocialNews from '../common/vuestic-social-news/VuesticSocialNews.vue'

  export default {
    name: 'extra',
    components: {
      VuesticSocialNews,
      VuesticFeed,
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
            text: 'Should I bring a lightbox with me?',
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
        ],
        posts: [
          {
            name: 'Andrei Hrabouski',
            text: 'have just started a live video',
            photoURL: '/static/img/andrei-hrabouski.jpg'
          },
          {
            name: 'Vasily Savitsky',
            text: 'joined the network',
            photoURL: '/static/img/vasily-savitsky.jpg'
          },
          {
            name: 'Yarik Adamovich',
            text: 'joined the network',
            photoURL: '/static/img/yarik-adamovich.jpg'
          }
        ],
        news: [
          {
            photoURL: '/static/img/andrei-hrabouski.jpg'
          },
          {
            photoURL: '/static/img/vasily-savitsky.jpg'
          },
          {
            photoURL: '/static/img/yarik-adamovich.jpg'
          },
          {
            photoURL: '/static/img/alexander-rudnik.jpg'
          },
          {
            photoURL: '/static/img/yarik-adamovich.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .profile-card-widget, .chat-widget {
    width: 100%;
    .widget-body {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
      }
    }
  }

  .bottom-widgets {
    > div[class^='col'] {
      & > div {
        width: 100%;
      }
    }
  }
</style>
