<template>
  <div class="row bottom-widgets">
    <div class="col-md-6 d-flex">
      <vuestic-widget class="no-h-padding no-v-padding">
        <vuestic-feed :initialPosts="posts"></vuestic-feed>
      </vuestic-widget>
    </div>
    <div class="col-md-6 d-flex">
      <vuestic-widget class="business-posts">
        <vuestic-social-news class="vuestic-social-news" :news="news" :url="'http://instagram.com/smartapant'"></vuestic-social-news>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import VuesticWidget from '../vuestic-components/vuestic-widget/VuesticWidget'
  import VuesticFeed from '../vuestic-components/vuestic-feed/VuesticFeed.vue'
  import VuesticSocialNews from '../vuestic-components/vuestic-social-news/VuesticSocialNews.vue'

  export default {
    name: 'dashboard-bottom-widgets',
    components: {
      VuesticSocialNews,
      VuesticFeed,
      VuesticWidget
    },
    data () {
      return {
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
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

  .bottom-widgets {
    > div[class^='col'] {
      & > div {
        width: 100%;
      }
    }
  }
</style>
