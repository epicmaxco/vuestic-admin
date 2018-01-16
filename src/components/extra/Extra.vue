<template>
  <div class="extra">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'extra.alerts.title' | translate">
          <vuestic-alert type="success" :withCloseBtn="true">
            <span class="badge badge-pill badge-success">{{'extra.alerts.success' | translate}}</span>
          {{'extra.alerts.successMessage' | translate}}
            <i class="fa fa-close alert-close"></i>
          </vuestic-alert>
          <vuestic-alert type="info" :withCloseBtn="true">
            <span class="badge badge-pill badge-info">{{'extra.alerts.info' | translate}}</span>
          {{'extra.alerts.infoMessage' | translate}}
          </vuestic-alert>
          <vuestic-alert type="warning" :withCloseBtn="true">
            <span class="badge badge-pill badge-warning">{{'extra.alerts.warning' | translate}}</span>
          {{'extra.alerts.warningMessage' | translate}}
          </vuestic-alert>
          <vuestic-alert type="danger" :withCloseBtn="true">
            <span class="badge badge-pill badge-danger">{{'extra.alerts.danger' | translate}}</span>
          {{'extra.alerts.dangerMessage' | translate}}
          </vuestic-alert>
        </vuestic-widget>
      </div>
    </div>

    <vuestic-widget class="no-v-padding">
      <vuestic-tabs class="tabs" :names="[$t('extra.chart'), $t('extra.setupProfile'), $t('extra.overview')]">
        <div slot="Overview" class="d-flex justify-content-center">
          <overview-tab></overview-tab>
        </div>
        <div slot="Chart" class="d-flex justify-content-center">
          <vuestic-chart v-bind:data="chartData" type="line"></vuestic-chart>
        </div>
        <div slot="Setup Profile" class="d-flex justify-content-center">
          <setup-profile-tab wizardType="simple"></setup-profile-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>

    <div class="row">
      <div class="col-md-4 d-flex">
        <vuestic-widget :headerText="$t('extra.profileCard')" class="profile-card-widget">
          <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'" photoSource="http://i.imgur.com/NLrdqsk.png"
                                :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
          </vuestic-profile-card>
        </vuestic-widget>
      </div>
      <div class="col-md-8 d-flex">
        <vuestic-widget :headerText="$t('extra.chat')" class="chat-widget">
          <vuestic-chat v-model="chatMessages"></vuestic-chat>
        </vuestic-widget>
      </div>
    </div>

    <div class="row bottom-widgets">
      <div class="col-md-6 d-flex">
        <vuestic-widget class="no-h-padding no-v-padding">
          <vuestic-feed :initialPosts="posts"></vuestic-feed>
        </vuestic-widget>
      </div>
      <div class="col-md-6 d-flex">
        <vuestic-widget class="business-posts">
          <vuestic-social-news :news="news" :url="'http://instagram.com/smartapant'"></vuestic-social-news>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import OverviewTab from 'components/dashboard/features-tab/FeaturesTab.vue'
  import SetupProfileTab from 'components/dashboard/setup-profile-tab/SetupProfileTab.vue'
  import chartData from 'data/charts/LineChartData'

  export default {
    name: 'extra',
    components: {
      SetupProfileTab,
      OverviewTab
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
            name: 'Irina Myatelskaya',
            text: 'joined the network',
            photoURL: 'http://i.imgur.com/VuTDC8u.png'
          },
          {
            name: 'Andrei Hrabouski',
            text: 'has just started a live video',
            photoURL: 'http://i.imgur.com/W3mGrmW.png'
          },
          {
            name: 'Evan You',
            text: 'joined the network',
            photoURL: 'http://i.imgur.com/D7DOGBH.jpg'
          }
        ],
        news: [
          {
            photoURL: 'http://i.imgur.com/PiTDDcA.png'
          },
          {
            photoURL: 'http://i.imgur.com/M6GugaM.png'
          },
          {
            photoURL: 'http://i.imgur.com/vEy3fRU.png'
          },
          {
            photoURL: 'http://i.imgur.com/Xrywphx.png'
          },
          {
            photoURL: 'http://i.imgur.com/dqVtQGY.png'
          },
          {
            photoURL: 'http://i.imgur.com/qP7rTCy.png'
          },
          {
            photoURL: 'http://i.imgur.com/6YLsM43.png'
          },
          {
            photoURL: 'http://i.imgur.com/9PAOx55.png'
          },
          {
            photoURL: 'http://i.imgur.com/mVpc04D.png'
          },
          {
            photoURL: 'http://i.imgur.com/WdbTSLn.png'
          },
          {
            photoURL: 'http://i.imgur.com/ZXRIHfk.png'
          }
        ],
        chartData: chartData
      }
    }
  }
</script>

<style lang="scss">
  .tabs {
    .overview-tab {
      .explore-row {
        display: none !important;
      }
    }
  }

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
