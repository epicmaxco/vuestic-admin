<template>
  <div class="row">
    <div class="col-md-12">
      <vuestic-widget class="color-buttons" :headerText="$t('cards.cards')">
        <div class="row">
          <div class="col-sm-6 col-lg-4  d-flex justify-content-center">
            <div class="btn-toolbar  d-inline-flex" role="toolbar"
                 aria-label="Toolbar with button groups">
              <div class="btn-group" role="group" aria-label="First group">
                <button type="button"
                        class="btn btn-primary btn-micro"
                        @click="layout = 'fixed'"
                        :class="{'focus': layout === 'fixed'}"
                >
                  Fixed
                </button>
                <button type="button"
                        class="btn btn-primary btn-micro"
                        @click="layout = 'floating'"
                        :class="{'focus': layout === 'floating'}"
                >
                  Floating
                </button>
              </div>
            </div>
          </div>
        </div>
      </vuestic-widget>
    </div>

    <div class="col-md-12">
      <vuestic-card-container :layout="layout">
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
      </vuestic-card-container>
    </div>
  </div>
</template>

<script>
  import VuesticCard
    from '../../../vuestic-theme/vuestic-components/vuestic-card/VuesticCard'
  import VuesticCardContainer
    from '../../../vuestic-theme/vuestic-components/vuestic-card/VuesticCardContainer'

  export default {
    name: 'cards',
    components: { VuesticCardContainer, VuesticCard },
    data () {
      return { layout: 'floating' }
    },
  }
</script>

<style lang="scss">

</style>
