<template>
  <vuestic-widget class="sets-list" :headerText="$t('icons.title')">
    <div class="va-row">
      <div
        class="flex lg6 xs12 sets-list__set"
        v-for="(set, index) in sets"
        :key="index"
      >
        <div class="sets-list__set__content">
          <div class="sets-list__set__content__overlay">
            <router-link :to="{path: set.href}" append>
              <div class="btn btn-primary btn">{{set.name.toUpperCase()}}
              </div>
            </router-link>
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
                  <i :class="iconClass(set, icon)" aria-hidden="true"></i>
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
                  <i
                    :class="iconClass(set, filteredList[0])"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div class="flex xs8"/>
              <div class="flex xs2 flex-center">
                <div class="sets-list__icon flex-center vuestic-icon">
                  <i
                    :class="iconClass(set, filteredList[1])"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </template>

        </div>
      </div>
    </div>
  </vuestic-widget>
</template>

<script>
export default {
  name: 'iconsList',
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
