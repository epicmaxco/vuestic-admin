<template>
  <div class="row row-equal">
    <div class="flex xl6 xs12">
      <div class="row">
        <div
          class="flex xs12 sm4"
          v-for="(info, idx) in infoTiles"
          :key="idx"
        >
          <va-card class="mb-4" :color="info.color">
            <va-card-content>
              <p class="display-2 mb-0" style="color: white;">{{ info.value }}</p>
              <p style="color: white;">{{$t('dashboard.info.' + info.text)}}</p>              
            </va-card-content>
          </va-card>
        </div>
      </div>

      <div class="row">
        <div class="flex xs12 md6">
          <va-card>
            <va-card-content>
              <p class="display-2 mb-1" :style="{color: theme.primary}">291</p>
              <p class="no-wrap">{{$t('dashboard.info.completedPullRequests')}}</p>              
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 md6">
          <va-card>
            <va-card-content>
              <div class="row row-separated">
                <div class="flex xs4">
                  <p class="display-2 mb-1 text--center" :style="{color: theme.primary}">3</p>
                  <p class="text--center mb-1">{{$t('dashboard.info.users')}}</p>
                </div>
                <div class="flex xs4">
                  <p class="display-2 mb-1 text--center" :style="{color: theme.info}">24</p>
                  <p class="text--center no-wrap mb-1">{{$t('dashboard.info.points')}}</p>
                </div>
                <div class="flex xs4">
                  <p class="display-2 mb-1 text--center" :style="{color: theme.warning}">91</p>
                  <p class="text--center mb-1">{{$t('dashboard.info.units')}}</p>
                </div>
              </div>
            </va-card-content>

          </va-card>
        </div>
      </div>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card stripe stripe-color="info"> 
        <va-card-title>
          {{ $t('dashboard.info.componentRichTheme') }}
        </va-card-title>
        <va-card-content>
          <p class="rich-theme-card-text">
            Buying the right telescope to take your love of astronomy to the
            next level is a big next step.
          </p>


          <div class="mt-3">
            <va-button color="primary" target="_blank" href="https://github.com/epicmaxco/vuestic-ui">
              {{$t('dashboard.info.viewLibrary')}}
            </va-button>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12 md6 xl3">
      <va-card class="image-card">
        <va-image
          :src="images[0]"
          style="height: 200px;"
        />
        <va-card-title>
          <va-button
            flat
            icon-right="ion_arrow_forward"
            color="primary"
            class="ma-0"
            @click="showModal"
          >
            {{$t('dashboard.info.exploreGallery')}}
          </va-button>
        </va-card-title>
      </va-card>
    </div>
    <va-modal v-model="modal">
      <div style="position: relative;">
        <va-button @click="showPrevImage" color="#fff" icon="chevron-left" flat style="position: absolute; top: 50%;"/>
        <va-button @click="showNextImage" color="#fff" icon="chevron-right" flat style="position: absolute; top: 50%; right: 0;"/>
        <transition>
          <img :src="images[currentImageIndex]" style="height: 50vh; max-width: 100%;">
        </transition>
      </div>
    </va-modal>
  </div>
</template>

<script>
import { useGlobalConfig } from 'vuestic-ui'

export default {
  name: 'DashboardInfoBlock',
  data () {
    return {
      infoTiles: [{
        color: 'success',
        value: '803',
        text: 'commits',
        icon: '',
      }, {
        color: 'danger',
        value: '57',
        text: 'components',
        icon: '',
      }, {
        color: 'info',
        value: '5',
        text: 'teamMembers',
        icon: '',
      }],
      modal: false,
      currentImageIndex: 0,
      images: [
        'https://i.imgur.com/qSykGko.jpg',
        'https://i.imgur.com/jYwT08D.png',
        'https://i.imgur.com/9930myH.jpg',
        'https://i.imgur.com/2JxhWD6.jpg',
        'https://i.imgur.com/MpiOWbM.jpg',
      ],
    }
  },
  methods: {
    showModal () {
      this.modal = true
    },
    showPrevImage () {
      this.currentImageIndex = !this.currentImageIndex ? this.images.length - 1 : this.currentImageIndex - 1
    },
    showNextImage () {
      this.currentImageIndex = this.currentImageIndex === this.images.length - 1 ? 0 : this.currentImageIndex + 1
    },
  },
  computed: {
    theme() {
      return useGlobalConfig().getGlobalConfig().colors || {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background);
    }

    // @include media-breakpoint-down(xs) {
    //   p:not(.display-2) {
    //     font-size: 0.875rem;
    //   }
    // }
  }

  .rich-theme-card-text {
    line-height: 24px;
  }

  .dashboard {
    .va-card__header--over {
      // @include media-breakpoint-up(md) {
      //   padding-top: 0 !important;
      // }
    }

    .va-card__image {
      // @include media-breakpoint-up(md) {
      //   padding-bottom: 0 !important;
      // }
    }
    // .image-card {
    //   position: relative;
    //   .va-button {
    //     position: absolute;
    //   }
    // }
  }
</style>
