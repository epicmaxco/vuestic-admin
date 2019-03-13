<template>
  <div class="cards">
    <div class="flex md12">
      <div class="cards-container va-row d-flex wrap align--start">
        <!-- eslint-disable vue/valid-v-for -->
        <template v-for="loop in listLoops">
          <vuestic-card
            :key="loop"
            title-on-image
            overlay
            image="https://picsum.photos/300/200/?image=1043">
            <template slot="title">
              {{ $t('cards.title.overlayAndTextOnImage') }}
            </template>
            {{ $t('cards.contentText') }}
            <p class="pt-3 mb-0">
              <va-button flat color="gray" href="#">
                {{ $t('cards.link.secondaryAction') }}
              </va-button>
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
              <va-button flat href="#">
                {{ $t('cards.link.readFull') }}
              </va-button>
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
              <va-button flat href="#">
                {{ $t('cards.link.action1') }}
              </va-button>
              <va-button color="gray" flat href="#">
                {{ $t('cards.link.action2') }}
              </va-button>
            </p>
          </vuestic-card>

          <vuestic-card
            stripe="warning"
            image="https://picsum.photos/300/200/?image=1058"
          >
            <p class="mb-0">
              <va-button flat href="#">
                {{ $t('cards.link.edit') }}
              </va-button>
              <va-button flat href="#">
                {{ $t('cards.link.setAsDefault') }}
              </va-button>
              <va-button flat href="#">
                {{ $t('cards.link.delete') }}
              </va-button>
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
              <va-button color="dark" flat href="#">
                {{ $t('cards.link.edit') }}
              </va-button>
              <va-button color="dark" flat href="#">
                {{ $t('cards.link.setAsDefault') }}
              </va-button>
              <va-button color="dark" flat href="#">
                {{ $t('cards.link.delete') }}
              </va-button>
            </p>
          </vuestic-card>

          <vuestic-card
            image="https://picsum.photos/300/200/?image=997"
          >
            {{ $t('cards.contentText') }}
            <p class="pt-3 mb-0">
              <va-button>
                {{ $t('cards.button.main') }}
              </va-button>
              <va-button flat href="#">
                {{ $t('cards.button.cancel') }}
              </va-button>
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
              <va-button flat href="#">
                {{ $t('cards.link.edit') }}
              </va-button>
              <va-button flat href="#">
                {{ $t('cards.link.setAsDefault') }}
              </va-button>
              <va-button flat href="#">
                {{ $t('cards.link.delete') }}
              </va-button>
            </p>
          </vuestic-card>

          <vuestic-card
            image="https://picsum.photos/300/200/?image=885"
          >
            <div class="flex">
              <p>{{ $t('cards.contentText') }}</p>
              <va-button icon="ion-md-cloud-outline ion"/>
            </div>
          </vuestic-card>

          <vuestic-card
            image="https://picsum.photos/300/200/?image=1003"
          >
            <p>{{ $t('cards.contentText') }}</p>
            <div class="card-separator"/>
            <p class="mb-0">
              <va-button flat href="#">
                {{ $t('cards.link.traveling') }}
              </va-button>
              /
              <va-button flat href="#">
                {{ $t('cards.link.france') }}
              </va-button>
            </p>
          </vuestic-card>

          <vuestic-card theme="dark">
            <p slot="title">{{ $t('cards.title.dark') }}</p>
            {{ $t('cards.contentText') }}
            <p class="pt-3 mb-0">
              <va-button flat href="#">
                {{ $t('cards.link.review') }}
              </va-button>
              <va-button flat href="#">
                {{ $t('cards.link.feedback') }}
              </va-button>
            </p>
          </vuestic-card>
        </template>
      </div>
    </div>
    <div class="flex md12">
      <div class="pre-loader-container flex-center my-5">
        <vuestic-pre-loader
          v-show="isShown"
          class="pre-loader"/>
        <div v-if="!isShown">
          <va-button @click="addCards()">
            Show More
          </va-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticCard
  from '../../../vuestic-theme/vuestic-components/vuestic-card/VuesticCard'

export default {
  name: 'cards',
  components: {
    VuesticCard,
  },
  data () {
    return {
      listLoops: 1,
      isShown: false,
    }
  },
  methods: {
    addCards () {
      this.isShown = true
      setTimeout(() => {
        this.isShown = false
        ++this.listLoops
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
$singleGutter: #{(19/16)}rem;

.cards-container {
  margin: -$singleGutter;
  .vuestic-card {
    margin: $singleGutter;

    width: calc(33% - #{$singleGutter} * 2);

    @include media-breakpoint-only(xl) {
      width: calc(25% - #{$singleGutter} * 2);
    }

    @include media-breakpoint-only(lg) {
      width: calc(33.3% - #{$singleGutter} * 2);
    }

    @include media-breakpoint-only(sm) {
      width: calc(50% - #{$singleGutter} * 2);
    }

    @include media-breakpoint-only(xs) {
      width: calc(100% - #{$singleGutter} * 2);
    }
  }
}
</style>
