<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-widget class="color-buttons" :headerText="$t('cards.cards')">
        <div class="row">
          <div class="col-lg-12">
            <div class="cards-container">
              <template v-for="loop in listLoops">
                <vuestic-card
                  title-on-image
                  overlay
                  image="https://picsum.photos/300/200/?image=1043"
                >
                  <template slot="title">
                    {{ $t('cards.title.overlayAndTextOnImage') }}
                  </template>
                  {{ $t('cards.contentText') }}
                  <p class="pt-3 mb-0">
                    <a class="pr-2 card-link-secondary" href="#">
                      {{ $t('cards.link.secondaryAction') }}
                    </a>
                  </p>
                </vuestic-card>

                <vuestic-card
                  image="https://picsum.photos/300/200/?image=898"
                >
                  <template slot="title">
                    {{ $t('cards.title.normal') }}
                  </template>
                  {{ $t('cards.contentText') }}
                  <p class="pt-3 mb-0">
                    <a href="#">{{ $t('cards.link.readFull') }}</a>
                  </p>
                </vuestic-card>

                <vuestic-card
                  image="https://picsum.photos/300/200/?image=1052"
                  title-on-image
                  overlay
                >
                  <template slot="title">
                    {{ $t('cards.title.titleOnImageNoOverlay') }}
                  </template>
                  {{ $t('cards.contentText') }}
                </vuestic-card>

                <vuestic-card
                  image="https://picsum.photos/300/200/?image=1067"
                >
                  Short one
                  <p class="mb-0 mt-2">
                    <a href="#" class="pr-2">{{ $t('cards.link.action1') }}</a>
                    <a class="card-link-secondary" href="#">
                      {{ $t('cards.link.action2') }}</a>
                  </p>
                </vuestic-card>

                <vuestic-card
                  stripe="warning"
                  image="https://picsum.photos/300/200/?image=1058"
                >
                  <p class="mb-0">
                    <a href="#" class="pr-2">{{ $t('cards.link.edit') }}</a>
                    <a href="#" class="pr-2">{{ $t('cards.link.setAsDefault') }}</a>
                    <a href="#">{{ $t('cards.link.delete') }}</a>
                  </p>
                </vuestic-card>

                <vuestic-card
                  theme="bright"
                >
                  <template slot="title">
                    {{ $t('cards.title.bright') }}
                  </template>
                  {{ $t('cards.contentText') }}
                  <p class="pt-3 mb-0">
                    <a href="#" class="pr-2">{{ $t('cards.link.edit') }}</a>
                    <a href="#" class="pr-2">{{ $t('cards.link.setAsDefault') }}</a>
                    <a href="#">{{ $t('cards.link.delete') }}</a>
                  </p>
                </vuestic-card>

                <vuestic-card
                  image="https://picsum.photos/300/200/?image=997"
                >
                  {{ $t('cards.contentText') }}
                  <p class="pt-3 mb-0">
                    <button class="btn btn-primary btn-micro">
                      {{ $t('cards.button.main') }}
                    </button>
                    <a class="ml-2 mb-0" href="#">{{ $t('cards.button.cancel') }}</a>
                  </p>
                </vuestic-card>

                <vuestic-card
                  stripe="success"
                >
                  <p slot="title">{{ $t('cards.title.stripeNoImage') }}</p>
                  {{ $t('cards.contentText') }}
                </vuestic-card>

                <vuestic-card
                  image="https://picsum.photos/300/200/?image=1013"
                  theme="dark"
                >
                  <p slot="title">{{ $t('cards.title.dark') }}</p>
                  {{ $t('cards.contentText') }}
                  <p class="pt-3 mb-0">
                    <a href="#" class="pr-2">{{ $t('cards.link.edit') }}</a>
                    <a href="#" class="pr-2">{{ $t('cards.link.setAsDefault') }}</a>
                    <a href="#">{{ $t('cards.link.delete') }}</a>
                  </p>
                </vuestic-card>

                <vuestic-card
                  image="https://picsum.photos/300/200/?image=885"
                >
                  <div class="d-flex">
                    <p>{{ $t('cards.contentText') }}</p>
                    <div
                      class="btn btn-primary btn-with-icon btn-micro rounded-icon">
                      <div class="btn-with-icon-content">
                        <i class="ion-md-cloud-outline ion"></i>
                      </div>
                    </div>
                  </div>
                </vuestic-card>

                <vuestic-card
                  image="https://picsum.photos/300/200/?image=1003"
                >
                  <p>{{ $t('cards.contentText') }}</p>
                  <div class="card-separator"/>
                  <p class="mb-0">
                    <a href="#">{{ $t('cards.link.traveling') }}</a>
                    /
                    <a href="#">{{ $t('cards.link.france') }}</a>
                  </p>
                </vuestic-card>

                <vuestic-card theme="dark">
                  <p slot="title">{{ $t('cards.title.dark') }}</p>
                  {{ $t('cards.contentText') }}
                  <p class="pt-3 mb-0">
                    <a class="pr-2" href="#">{{ $t('cards.link.review') }}</a>
                    <a href="#">{{ $t('cards.link.feedback') }}</a>
                  </p>
                </vuestic-card>
                <!--<vuestic-card v-for="card in cards"
                              :key="card.id"
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
                </vuestic-card>-->
              </template>
            </div>
          </div>
          <div class="col-lg-12 d-lg-flex align-items-center justify-content-center">
            <div class="pt-3">
              <button class="btn btn-primary" @click="addCards(20)">
                Show 20 More
              </button>
            </div>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import VuesticCard from '../../../vuestic-theme/vuestic-components/vuestic-card/VuesticCard'

  export default {
    name: 'cards',
    components: { VuesticCard },
    data () {
      return {
        layout: 'floating',
        listLoops: 1,
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
    methods: {
      addCards (limit) {
        let arrayCopyCount = 0
        let cardsNumber = this.cards.length
        let cardsBalance = 0


        for (let i = 1; ; i++) {
          if ((cardsNumber * i) > limit) {
            arrayCopyCount = i - 1
            cardsBalance = limit - (cardsNumber * (i - 1))
            break
          }
        }

        for (let j = 0; j < arrayCopyCount; j++) {
          this.cards = this.cards.concat(this.cards)
        }

        for (let k = 0; k <= cardsBalance - 1; k++) {
          this.cards.push(this.cards[k])
        }
      }
    },
  }
</script>

<style lang="scss">
  @import '../../../sass/variables';

  $singleGutter: #{(19/16)}rem;

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    margin: -$singleGutter;
    align-items: flex-start;
  }

  .cards-label {
    color: $vue-green;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
</style>
