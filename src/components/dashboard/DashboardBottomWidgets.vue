<template>
  <div class="row bottom-widgets">
    <div class="col-md-6 d-flex">
      <widget class="no-h-padding no-v-padding">
        <vuestic-feed :initialPosts="posts"></vuestic-feed>
      </widget>
    </div>
    <div class="col-md-6 d-flex">
      <widget class="business-posts">
        <vuestic-social-news class="vuestic-social-news" :news="news" :url="'http://instagram.com/smartapant'"></vuestic-social-news>
      </widget>
    </div>
  </div>
</template>

<script>
  import Widget from 'components/common/widget/Widget'
  import VuesticFeed from '../common/vuestic-feed/VuesticFeed.vue'
  import VuesticSocialNews from '../common/vuestic-social-news/VuesticSocialNews.vue'

  export default {
    name: 'dashboard-bottom-widgets',
    components: {
      VuesticSocialNews,
      VuesticFeed,
      Widget
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
            text: 'have just started a live video',
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
