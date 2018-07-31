<template>
  <div class="not-found-pages row">
    <div class="col-md-12">
      <div class="row">
        <vuestic-card
          class="not-found-pages__cards"
          image="https://i.imgur.com/GzUR0Wz.png">
          {{ 'Advanced layout' }}
          <div class="not-found-pages__button-container  pt-3 mb-0">
            <router-link :to="{ path: '/pages/not-found-advanced' }">
              <button class="btn btn-primary not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </div>
        </vuestic-card>
        <vuestic-card
          class="not-found-pages__cards"
          image="https://i.imgur.com/HttcXPi.png">
          {{ 'Simple' }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <router-link :to="{ path: '/pages/not-found-simple' }">
              <button class="btn btn-primary not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </div>
        </vuestic-card>
        <vuestic-card
          class="not-found-pages__cards"
          image="https://i.imgur.com/dlcZMiG.png">
          {{ 'Custom image' }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <router-link :to="{ path: '/pages/not-found-custom' }">
              <button class="btn btn-primary not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </div>
        </vuestic-card>
        <vuestic-card
          class="not-found-pages__cards"
          image="https://i.imgur.com/qcOlDz7.png">
          {{ 'Large text heading' }}
          <div class="not-found-pages__button-container pt-3 mb-0">
            <router-link :to="{ path: '/pages/not-found-large-text' }">
              <button class="btn btn-primary not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </div>
        </vuestic-card>
      </div>
    </div>
  </div>
</template>

<script>

import VuesticWidget
  from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'
import VuesticCard
  from '../../../vuestic-theme/vuestic-components/vuestic-card/VuesticCard'

export default {
  name: 'not-found-pages',
  components: {
    VuesticCard,
    VuesticWidget
  }
}
</script>

<style lang="scss">
.not-found-pages {
  &__cards {
    min-width: 220px;
    text-align: center;
  }
  &__button-container {
    text-align: center;
  }
  &__advanced-button {
    font-size: $font-size-root;
    font-weight: $font-weight-bold;
    letter-spacing: 1.3px;
    line-height: 6px;
    text-align: center;
    padding-left: 40px;
    justify-content: center;
    width: 180px;
    background-color: $vue-green;
    box-shadow: $greeny-box-shadow;
  }
}
</style>
