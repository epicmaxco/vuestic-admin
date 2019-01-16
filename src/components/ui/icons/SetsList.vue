<template>
  <div class="sets-list row">
    <div class="col-md-12">
      <vuestic-widget :headerText="$t('icons.title')">
        <div class="row">
          <div
            class="small-set col-lg-6"
            v-for="(set, index) in sets"
            :key="index"
          >
            <div class="set-content">
              <div class="overlay">
                <va-button tag="router-link" :to="{path: set.href}" append>
                  {{ set.name.toUpperCase() }}
                </va-button>
              </div>
            </div>

            <template v-for="(filteredList, index) in set.filteredLists">
              <div
                class="va-row"
                :key="index"
                v-if="filteredList.length !== 2"
              >
                <div
                  class="flex xs2 flex-center"
                  v-for="(icon, index) in filteredList"
                  :key="index"
                >
                  <div class="sets-list__icon flex-center vuestic-icon">
                    <va-icon :icon="iconClass(set, icon)"/>
                  </div>
                </div>
              </div>
              <div
                class="va-row"
                :key="index"
                v-if="filteredList.length === 2"
              >
                <div class="flex xs2 flex-center">
                  <div class="sets-list__icon flex-center vuestic-icon">
                    <va-icon :icon="iconClass(set, filteredList[0])"/>
                  </div>
                </div>
                <div class="flex xs8"/>
                <div class="flex xs2 flex-center">
                  <div class="sets-list__icon flex-center vuestic-icon">
                    <va-icon :icon="iconClass(set, filteredList[1])"/>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
import VaButton from '../../../vuestic-theme/vuestic-components/va-button/VaButton'

export default {
  name: 'iconsList',
  components: {
    VaButton
  },
  props: ['sets'],
  methods: {
    iconClass (set, icon) {
      return set.prefix + ' ' + set.prefix + '-' + icon
    },
  },
}
</script>

<style lang="scss">
.sets-list {
  &__icon {
    height: 1.5rem;
    max-width: 1.5rem;
  }

  &__set {
    margin: 0 0 1.5rem;
    height: 100%;
    position: relative;

    .btn {
      width: 13.75rem;
      padding-left: 0;
      padding-right: 0;
      text-align: center;
    }

    &__content {
      background-color: $light-gray;

      > div {
        padding: 1rem;

        div[class^="col"] {
          padding: 0;
          margin: 1rem 0;

          .vuestic-icon {
            font-size: .85rem;
            text-align: center;
          }
        }
      }

      &__overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        @include va-flex-center();
        z-index: 2;
      }
    }
  }
}
</style>
