<template>
  <div class="row">
    <vuestic-widget :headerText="$t('spinners.customize')" class="col-sm-12">
      <div class="row">
        <div class="col-sm-6">
          <span>{{'spinners.color' | translate}}</span>
          <vuestic-color v-model="selectedColor"></vuestic-color>
        </div>
        <div class="col-sm-6">
          {{'spinners.size' | translate}}
          <vuestic-slider
            :options="config.slider"
            v-model="selectedSize">
          </vuestic-slider>
        </div>
      </div>
    </vuestic-widget>
    <vuestic-widget :headerText="$t('spinners.title')" class="col-sm-12">
        <div v-for="(group, i) in groups" :key="i" class="row">
          <div v-for="item in group" :key="item" class="col-sm-12 col-md-3">
            <div class="spinner-box-container">
              <div class="spinner-box">
                <component
                  :is="item"
                  :color="selectedColor"
                  :size="selectedSize">
                </component>
              </div>
              <span>{{item | displayName}}</span>
            </div>
          </div>
        </div>
        <div class="row align-center">
          <div class="col text-center">
            {{'spinners.poweredBy' | translate}}
            <a :href="'http://epic-spinners.epicmax.co/'" target="_blank">Epic Spinners</a>
          </div>
        </div>
    </vuestic-widget>
  </div>
</template>

<script>
  import * as spinners from 'epic-spinners'
  import store from 'vuex-store'
  import VuesticColor from 'components/vuestic-components/vuestic-color/VuesticColor'
  import VuesticSlider from 'components/vuestic-components/vuestic-slider/VuesticSlider'

  export default {
    components: {
      ...spinners,
      VuesticColor,
      VuesticSlider
    },
    data: function () {
      return {
        config: {
          group: 4,
          slider: {
            min: 40,
            max: 80
          }
        },
        selectedColor: store.getters.palette.primary,
        selectedSize: 70
      }
    },
    computed: {
      groups () {
        return this.groupItems(Object.keys(spinners), this.config.group)
      }
    },
    filters: {
      displayName (name) {
        return name.replace('Spinner', '').match(/[A-Z][a-z]+/g).join(' ')
      }
    },
    methods: {
      groupItems (items, groupSize) {
        let grouped = []

        for (let i = 0; i < items.length; i += groupSize) {
          grouped.push(items.slice(i, i + groupSize))
        }

        return grouped
      }
    }
  }
</script>

<style lang="scss" scoped>
  .spinner-box-container {
    text-align: center;
    padding-bottom: 40px;

    span {
      font-size: .8rem;
    }
  }

  .spinner-box {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
