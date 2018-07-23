<template>
  <div class="not-found-pages row">
    <div class="col-md-12">
      <vuestic-widget :headerText="'404 Pages'">
        <div class="row">
          <div class="col-md-3">
            <div class="not-found-pages__advanced-wallpaper">
              <img src="https://i.imgur.com/GzUR0Wz.png not-found-pages__advanced-pic"/>
              <div class="not-found-pages__container">
                <h6 class="not-found-pages__advanced-text">Advanced layout</h6>
                <router-link :to="{ path: '/pages/not-found-advanced' }">
                  <button class="btn btn-primary not-found-pages__advanced-button">
                    {{ 'View Example' }}
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="not-found-pages__simple-wallpaper">
              <img src="https://i.imgur.com/HttcXPi.png"/>
              <div class="not-found-pages__container">
                <h6 class="not-found-pages__advanced-text">Simple</h6>
                <router-link :to="{ path: '/pages/not-found-simple' }">
                  <button class="btn btn-primary not-found-pages__advanced-button">
                    {{ 'View Example' }}
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="not-found-pages__simple-wallpaper">
              <img src="https://i.imgur.com/dlcZMiG.png"/>
              <div class="not-found-pages__container">
                <h6 class="not-found-pages__advanced-text">Custom image</h6>
                <router-link :to="{ path: '/pages/not-found-custom' }">
                  <button class="btn btn-primary not-found-pages__advanced-button">
                    {{ 'View Example' }}
                  </button>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="not-found-pages__simple-wallpaper">
              <img src="https://i.imgur.com/qcOlDz7.png"/>
              <div class="not-found-pages__container">
                <h6 class="not-found-pages__advanced-text">Large text heading</h6>
                <router-link :to="{ path: '/pages/not-found-custom' }">
                  <button class="btn btn-primary not-found-pages__advanced-button">
                    {{ 'View Example' }}
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>

import VuesticWidget
  from '../../../vuestic-theme/vuestic-components/vuestic-widget/VuesticWidget'

export default {
  name: 'not-found-pages',
  components: {
    VuesticWidget
  }
}
</script>

<style lang="scss">
.not-found-pages {
  display: flex;
  &__container {
    height: 40%;
    text-align: center;
  }

  &__advanced-text {
    margin-top: 6%;
  }

  &__advanced-button {
    text-align: center;
    line-height: 6px;
    padding-left: 30px;
    margin-top: 5%;
    width: 187px;
    height: 36px;
    border-radius: 18px;
    background-color: #4ae387;
    box-shadow: 0 4px 9.6px 0.4px rgba(79, 206, 145, 0.5);
  }

  &__advanced-wallpaper {
    width: 240px;
    height: 268px;
    background-color: #ffffff;
    box-shadow: 0 8px 14.7px 1.3px rgba(188, 207, 190, 0.5);
  }

  &__simple-wallpaper {
    width: 240px;
    height: 268px;
    background-color: #ffffff;
    box-shadow: 0 8px 14.7px 1.3px rgba(188, 207, 190, 0.5);
  }

  &__advanced-pic {

  }
}
</style>
