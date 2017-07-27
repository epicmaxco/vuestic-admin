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
      <div class="col-md-4 d-flex align-content-stretch flex-wrap">
        <widget header-text="Profile Card" class="profile-card-widget">
          <vuestic-profile-card :name="'Veronique Lee'" :location="'Malaga, Spain'"
                                :social="{twitter: 'twitter.com', facebook: 'facebook.com',
                                  instagram: 'instagram.com'}">
          </vuestic-profile-card>
        </widget>
      </div>
      <div class="col-md-8 d-flex align-content-stretch flex-wrap">
        <widget header-text="Chat" class="chat-widget">
          <vuestic-chat v-model="chatMessages"></vuestic-chat>
        </widget>
      </div>
    </div>

    <div class="row bottom-widgets">
      <div class="col-md-6">
        <widget class="feed">
          <div class="post">
            <div class="photo"></div>
            <div class="underscored">
              <span class="name">Anthony Stark</span> <span class="text">have just started a live video.</span>
              <button class="btn btn-micro btn-primary btn-with-icon rounded-icon">
                <div class="btn-with-icon-content">
                  <span class="entypo entypo-plus icon"></span>
                </div>
              </button>
            </div>
          </div>
          <div class="post">
            <div class="photo"></div>
            <div class="underscored">
              <span class="name">Anthony Stark</span> <span class="text">have just started a live video.</span>
              <button class="btn btn-micro btn-primary btn-with-icon rounded-icon">
                <div class="btn-with-icon-content">
                  <span class="entypo entypo-plus icon"></span>
                </div>
              </button>
            </div>
          </div>
          <div class="post">
            <div class="photo"></div>
            <div class="underscored">
              <span class="name">Anthony Stark</span> <span class="text">have just started a live video.</span>
              <button class="btn btn-micro btn-primary btn-with-icon rounded-icon">
                <div class="btn-with-icon-content">
                  <span class="entypo entypo-plus icon"></span>
                </div>
              </button>
            </div>
          </div>
        </widget>
      </div>
      <div class="col-md-6">
        <widget class="business-posts">
          <div class="d-flex justify-content-between align-items-center text-w-btn">
            <span>That was users have posted about your business.</span>
            <button class="btn btn-micro btn-primary">VIEW</button>
          </div>
          <div class="d-flex justify-content-between photos">
            <div class="photo" v-for="i in 5"></div>
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
  @import "../../sass/variables";
  @import "../../../node_modules/bootstrap/scss/variables";
  @import "../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .profile-card-widget, .chat-widget {
    width: 100%;
    .widget-body {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: stretch;
      & > div {
        width: 100%;
      }
    }
  }

  .bottom-widgets {
    div[class^='col'] {
      /*padding-right: 7px;*/
      /*padding-left: 7px;*/
    }

    .feed {
      .post {
        width: 100%;
        display: flex;
        .photo {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: $gray;
        }
        span {
          font-size: $font-size-sm;
        }
        .btn {
          .btn-with-icon-content {
            margin: 0;
            width: 100%;
            height: 100%;
            span {
              font-size: 2rem;
            }
          }
        }
      }
    }

    .business-posts .widget-body {
      padding-left: 31px !important; // WTF
      padding-right: 0 !important; // WTF
      .text-w-btn {
        padding-right: 21px;
        padding-bottom: 25px;
        span {
          font-size: $font-size-sm;
        }
      }
      .photos {
        padding-right: 11%;
        .photo {
          background-color: $gray;
          @include media-breakpoint-up(lg) {
            width: 4.8vw;
            height: 4.8vw;
          }
          @include media-breakpoint-between(sm, md) {
            width: 6vw;
            height: 6vw;
          }
          @include media-breakpoint-between(xs, sm) {
            width: 12vw;
            height: 12vw;
          }
        }
      }
    }
  }
</style>
