<template>
  <div>
    <div class="flex md12">
      <div class="cards-container">
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
            <div class="flex">
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
        </template>
      </div>
    </div>
    <div class="flex md12 align--center justify--center">
      <div class="pre-loader-container">
        <vuestic-pre-loader v-show="isShown"
                            class="pre-loader"></vuestic-pre-loader>
        <div v-if="!isShown">
          <button class="btn btn-primary" @click="addCards()">
            Show More
          </button>
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
  components: { VuesticCard },
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
  display: flex;
  flex-wrap: wrap;
  margin: -$singleGutter;
  align-items: flex-start;
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

.pre-loader-container {
  height: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
