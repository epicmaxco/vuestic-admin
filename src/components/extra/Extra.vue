<template>
  <div class="extra">
    <div class="va-row">
      <div class="flex xs12">
        <va-card
          :headerText="$t('extra.tabs.title')"
          class="no-v-padding"
        >
          <va-tabs grow v-model="value">
            <va-tab>
              {{$t('extra.tabs.setupProfile')}}
            </va-tab>
            <va-tab>
              {{$t('extra.tabs.maps')}}
            </va-tab>
            <va-tab>
              {{$t('extra.tabs.overview')}}
            </va-tab>
          </va-tabs>
          <va-separator/>
          <setup-profile-tab wizardType="simple" v-if="value === 0"/>
          <leaflet-map v-if="value === 1"/>
          <overview-tab v-if="value === 2"/>
        </va-card>
      </div>
    </div>

    <div class="va-row">
      <div class="flex md4">
        <va-card
          :headerText="$t('extra.profileCard')"
          class="profile-card-widget"
        >
          <va-profile-card
            :name="'Veronique Lee'"
            :location="'Malaga, Spain'"
            photoSource="https://i.imgur.com/NLrdqsk.png"
            :social="{twitter: 'twitter.com', facebook: 'facebook.com',
            instagram: 'instagram.com'}"
          />
        </va-card>
      </div>
      <div class="flex md8">
        <va-card :headerText="$t('extra.chat')" class="chat-widget">
          <va-chat v-model="chatMessages"/>
        </va-card>
      </div>
    </div>
    <div class="va-row bottom-widgets">
      <div class="flex md6">
        <va-card class="no-h-padding no-v-padding">
          <va-feed :initialPosts="posts"/>
        </va-card>
      </div>
      <div class="flex md6">
        <va-card class="business-posts">
          <va-social-news
            :news="news"
            url="https://instagram.com/smartapant"
          />
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import OverviewTab from 'components/dashboard/dashboard-old/features-tab/FeaturesTab.vue'
import SetupProfileTab from 'components/dashboard/dashboard-old/setup-profile-tab/SetupProfileTab.vue'
import LeafletMap from 'components/maps/leaflet-maps/LeafletMap.vue'
import VaProfileCard
  from '../../vuestic-theme/vuestic-components/va-profile-card/VaProfileCard'

export default {
  name: 'extra',
  components: {
    VaProfileCard,
    LeafletMap,
    SetupProfileTab,
    OverviewTab,
  },
  data () {
    return {
      value: 0,
      chatMessages: [
        {
          text: 'Hello! So glad you liked my work. Do you want me to shoot you?',
          yours: false,
        },
        {
          text: 'Yeah, that would be cool. Maybe this Sunday at 3 pm?',
          yours: true,
        },
        {
          text: 'Sounds great! See you later!',
          yours: false,
        },
        {
          text: 'Should I bring a lightbox with me?',
          yours: true,
        },
        {
          text: 'No, thanks. There is no need. Can we set up a meeting earlier?',
          yours: false,
        },
        {
          text: 'I\'m working on Vuestic, so let\'s meet at 3pm. Thanks!',
          yours: true,
        },
      ],
      posts: [
        {
          name: 'Irina Myatelskaya',
          text: 'joined the network',
          photoURL: 'https://i.imgur.com/VuTDC8u.png',
        },
        {
          name: 'Andrei Hrabouski',
          text: 'has just started a live video',
          photoURL: 'https://i.imgur.com/W3mGrmW.png',
        },
        {
          name: 'Evan You',
          text: 'joined the network',
          photoURL: 'https://i.imgur.com/D7DOGBH.jpg',
        },
      ],
      news: [
        {
          photoURL: 'https://i.imgur.com/PiTDDcA.png',
        },
        {
          photoURL: 'https://i.imgur.com/M6GugaM.png',
        },
        {
          photoURL: 'https://i.imgur.com/vEy3fRU.png',
        },
        {
          photoURL: 'https://i.imgur.com/Xrywphx.png',
        },
        {
          photoURL: 'https://i.imgur.com/dqVtQGY.png',
        },
        {
          photoURL: 'https://i.imgur.com/qP7rTCy.png',
        },
        {
          photoURL: 'https://i.imgur.com/6YLsM43.png',
        },
        {
          photoURL: 'https://i.imgur.com/9PAOx55.png',
        },
        {
          photoURL: 'https://i.imgur.com/mVpc04D.png',
        },
        {
          photoURL: 'https://i.imgur.com/WdbTSLn.png',
        },
        {
          photoURL: 'https://i.imgur.com/ZXRIHfk.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  .maps-tab {
    height: 500px;
  }
}

.profile-card-widget, .chat-widget {
  width: 100%;
}
</style>
