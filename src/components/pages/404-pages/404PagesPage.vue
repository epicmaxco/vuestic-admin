<template>
  <div class="not-found-pages row">
    <div class="col-md-12">
      <div class="widget">
        <div class="widget-header">
          404 pages
        </div>
      </div>
      <div class="row">
        <vuestic-card
          image="https://i.imgur.com/GzUR0Wz.png">
          {{ 'Advanced layout' }}
          <p class="pt-3 mb-0">
            <router-link :to="{ path: '/pages/not-found-advanced' }">
              <button class="btn btn-primary not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </p>
        </vuestic-card>
        <vuestic-card
          image="https://i.imgur.com/HttcXPi.png">
          {{ 'Simple' }}
          <p class="pt-3 mb-0">
            <router-link :to="{ path: '/pages/not-found-simple' }">
              <button class="btn btn-primary not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </p>
        </vuestic-card>
        <vuestic-card
          image="https://i.imgur.com/dlcZMiG.png">
          {{ 'Custom image' }}
          <p class="pt-3 mb-0">
            <router-link :to="{ path: '/pages/not-found-custom' }">
              <button class="btn btn-primary not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </p>
        </vuestic-card>
        <vuestic-card
          image="https://i.imgur.com/qcOlDz7.png">
          {{ 'Large text heading' }}
          <p class="pt-3 mb-0">
            <router-link :to="{ path: '/pages/not-found-large-text' }">
              <button class="btn btn-primary not-found-pages__advanced-button">
                {{ 'View Example' }}
              </button>
            </router-link>
          </p>
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
  &__advanced-button {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1.3px;
    padding-top: 14px;
    text-align: left;
    color: #ffffff;
    line-height: 6px;
    padding-left: 30px;
    height: 36px;
    background-color: #4ae387;
    box-shadow: 0 4px 9.6px 0.4px rgba(79, 206, 145, 0.5);
  }
}
</style>
