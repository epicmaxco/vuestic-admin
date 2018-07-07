<template>
  <div class="demo-container">
    <div class="demo-container__item">
      <button @click="layout = 'fixed'">Fixed</button>
      <button @click="layout = 'floating'">Floating</button>
      <vuestic-card-container :layout="layout" v-masonry horizontal-order="true"
                              item-selector=".vuestic-card" column-width="#sizer">
          <div id="sizer"></div>
          <vuestic-card v-for="card in cards"
                        :key="card.id"
                        v-masonry-tile
                        :theme="card.content.theme"
                        :stripe="card.stripe"
                        :image="card.image"
                        :title-on-image="card.title.onImage"
                        :overlay="card.overlay">
            <template v-if="card.title.value !== ''" slot="title">
              {{ $t(card.title.value) }}
            </template>
            <span v-if="!card.buttons || (card.buttons && !card.buttons.default)">
                    {{ $t(card.content.value) }}
                  </span>
            <div v-if="card.separator" class="card-separator"/>
            <div v-if="card.buttons && card.buttons.default" class="d-flex">
              <p>{{ $t('cards.contentText') }}</p>
              <div
                class="btn btn-primary btn-with-icon btn-micro rounded-icon">
                <div class="btn-with-icon-content">
                  <i class="ion-md-cloud-outline ion"></i>
                </div>
              </div>
            </div>
            <p v-if="card.buttons && !card.buttons.default" class="pt-3 mb-0">
              <button class="btn btn-primary btn-micro">
                {{ $t('cards.button.main') }}
              </button>
              <a class="ml-2 mb-0" href="#">{{ $t('cards.button.cancel') }}</a>
            </p>
            <p v-if="card.links"
               :class="{'pt-3': card.links.container === 'extended', 'mt-2': card.links.container === 'collapsed'}"
               class="mb-0">
              <a v-if="card.links.primary" href="#">{{ $t(card.links.primary) }}</a>
              <a v-if="card.links.secondary" class="pr-2 card-link-secondary" href="#">
                {{ $t(card.links.secondary) }}
              </a>
              <a v-if="card.links.actions" href="#" :class="{'pr-2': !action.newLine}"
                 v-for="action in card.links.actions">
                {{ $t(action.value)}}
              </a>
            </p>
          </vuestic-card>
      </vuestic-card-container>
      <div v-masonry transition-duration="0.3s" class="test-container" item-selector=".item" column-width="#test-width">
        <div id="test-width"></div>
        <div class="test-gutter"></div>
        <div v-masonry-tile class="item" v-for="(item, index) in blocks">
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticCardContainer from './VuesticCardContainer.vue'
  import VuesticCard from './VuesticCard'

  const Variables = require('../../../sass/_variables.scss')

  export default {
    created () {
      console.log('Variables', Variables)
    },
    components: {
      VuesticCard,
      VuesticCardContainer,
    },
    data () {
      return {
        layout: 'floating',
        blocks: [
          {
            name: 'Vlad'
          },
          {
            name: 'Sanya works as a front-end developer in Epicmax and feel himself wonderful'
          },
          {
            name: 'Pasha'
          },
          {
            name: 'Leha'
          }
        ],
        cards: [
          {
            id: 1,
            image: 'https://picsum.photos/300/200/?image=1043',
            overlay: true,
            separator: false,
            stripe: '',
            title: {
              value: 'cards.title.overlayAndTextOnImage',
              onImage: true
            },
            content: {
              value: 'cards.contentText',
              theme: ''
            },
            links: {
              container: 'extended',
              secondary: 'cards.link.secondaryAction'
            }
          },
          {
            id: 2,
            image: 'https://picsum.photos/300/200/?image=898',
            overlay: false,
            separator: false,
            stripe: '',
            title: {
              value: 'cards.title.normal',
              onImage: false
            },
            content: {
              value: 'cards.contentText',
              theme: ''
            },
            links: {
              container: 'extended',
              primary: 'cards.link.readFull'
            }
          },
          {
            id: 3,
            image: 'https://picsum.photos/300/200/?image=1052',
            overlay: true,
            separator: false,
            stripe: '',
            title: {
              value: 'cards.title.titleOnImageNoOverlay',
              onImage: true
            },
            content: {
              value: 'cards.contentText',
              theme: ''
            }
          },
          {
            id: 4,
            overlay: false,
            separator: false,
            stripe: '',
            title: {
              value: '',
              onImage: false
            },
            content: {
              value: 'Short one',
              theme: ''
            },
            image: 'https://picsum.photos/300/200/?image=1067',
            links: {
              container: 'collapsed',
              primary: 'cards.link.action1',
              secondary: 'cards.link.action2',
            }
          },
          {
            id: 5,
            overlay: false,
            separator: false,
            stripe: 'warning',
            title: {
              value: '',
              onImage: false
            },
            content: {
              value: '',
              theme: ''
            },
            image: 'https://picsum.photos/300/200/?image=1058',
            links: {
              container: 'basic',
              actions: [
                { value: 'cards.link.edit' },
                { value: 'cards.link.setAsDefault' },
                { value: 'cards.link.delete', newLine: true }
              ]
            }
          },
          {
            id: 6,
            overlay: false,
            separator: false,
            stripe: '',
            title: {
              value: 'cards.title.bright',
              onImage: false
            },
            content: {
              value: 'cards.contentText',
              theme: 'bright'
            },
            links: {
              container: 'extended',
              actions: [
                { value: 'cards.link.edit' },
                { value: 'cards.link.setAsDefault' },
                { value: 'cards.link.delete', newLine: true }
              ]
            }
          },
          {
            id: 7,
            overlay: false,
            separator: false,
            stripe: '',
            title: {
              value: '',
              onImage: false
            },
            image: 'https://picsum.photos/300/200/?image=997',
            content: {
              value: 'cards.contentText',
              theme: ''
            },
            buttons: {
              default: false
            }
          },
          {
            id: 8,
            overlay: false,
            separator: false,
            stripe: 'success',
            title: {
              value: 'cards.title.stripeNoImage',
              onImage: false
            },
            content: {
              value: 'cards.contentText',
              theme: ''
            }
          },
          {
            id: 9,
            overlay: false,
            separator: false,
            stripe: '',
            image: 'https://picsum.photos/300/200/?image=1013',
            title: {
              value: 'cards.title.dark',
              onImage: false
            },
            content: {
              value: 'cards.contentText',
              theme: 'dark'
            },
            links: {
              container: 'extended',
              actions: [
                { value: 'cards.link.edit' },
                { value: 'cards.link.setAsDefault' },
                { value: 'cards.link.delete', newLine: true }
              ]
            }
          },
          {
            id: 10,
            overlay: false,
            separator: false,
            stripe: '',
            title: {
              value: '',
              onImage: false
            },
            image: 'https://picsum.photos/300/200/?image=885',
            content: {
              value: 'cards.contentText',
              theme: ''
            },
            buttons: {
              default: true
            }
          },
          {
            id: 11,
            overlay: false,
            separator: true,
            stripe: '',
            title: {
              value: '',
              onImage: false
            },
            image: 'https://picsum.photos/300/200/?image=1003',
            content: {
              value: 'cards.contentText',
              theme: ''
            },
            links: {
              container: 'basic',
              actions: [
                { value: 'cards.link.traveling', newLine: true },
                { value: 'cards.link.france', newLine: true }
              ]
            }
          },
          {
            id: 12,
            overlay: false,
            separator: false,
            stripe: '',
            title: {
              value: 'cards.title.dark',
              onImage: false
            },
            content: {
              value: 'cards.contentText',
              theme: 'dark'
            },
            links: {
              container: 'extended',
              actions: [
                { value: 'cards.link.review' },
                { value: 'cards.link.feedback', newLine: true }
              ]
            }
          },
        ]
      }
    },
    updated () {
      this.$redrawVueMasonry()
    }
  }
</script>

<style lang="scss">
  @import '../../../sass/variables';

  .test-container {
    width: 800px;
  }

  .test-gutter {
    width: 50px;
  }

  #test-width, #sizer, .item {
    width: 25%;
  }
</style>

