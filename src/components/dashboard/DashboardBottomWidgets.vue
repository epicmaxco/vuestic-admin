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
            photoURL: 'http://i.imgur.com/LUi43z7.png'
          },
          {
            name: 'Andrei Hrabouski',
            text: 'has just started a live video',
            photoURL: 'http://i.imgur.com/nryPD3a.png'
          },
          {
            name: 'Evan You',
            text: 'joined the network',
            photoURL: 'http://i.imgur.com/tnVJojM.jpgg'
          }
        ],
        news: [
          {
            photoURL: 'http://i.imgur.com/QIqhHkO.png'
          },
          {
            photoURL: 'http://i.imgur.com/zIn9PMX.png'
          },
          {
            photoURL: 'http://i.imgur.com/26unzKs.png'
          },
          {
            photoURL: 'http://i.imgur.com/LwRuhvE.png'
          },
          {
            photoURL: 'http://i.imgur.com/9r5kq6n.png'
          },
          {
            photoURL: 'http://i.imgur.com/KEYj5qO.png'
          },
          {
            photoURL: 'http://i.imgur.com/C5FolB4.png'
          },
          {
            photoURL: 'http://i.imgur.com/tDUFhhw.png'
          },
          {
            photoURL: 'http://i.imgur.com/pLdLBRx.png'
          },
          {
            photoURL: 'http://i.imgur.com/FPufYyY.png'
          },
          {
            photoURL: 'http://i.imgur.com/pgrHrPu.png'
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
