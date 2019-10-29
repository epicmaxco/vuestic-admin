<template>
  <va-card class="sets-list" :title="$t('icons.title')">
    <div class="row">
      <div
        class="flex lg6 xs12 mb-4 sets-list__set fill-height"
        v-for="(set, index) in sets"
        :key="index"
      >
        <router-link :to="{path: set.href}" style="color: inherit;">
          <div class="sets-list__set__content">
            <div class="sets-list__set__content__overlay flex-center pa-3 fill-height">
              <va-button :to="{path: set.href}" append>
                {{set.name.toUpperCase()}}
              </va-button>
            </div>

            <template v-for="(filteredList, index) in set.filteredLists">
              <div
                class="row pa-3"
                :key="index"
                v-if="filteredList.length !== 2"
              >
                <div
                  class="flex xs2 flex-center"
                  v-for="(icon, index) in filteredList"
                  :key="index"
                >
                  <div class="sets-list__icon pa-3 flex-center vuestic-icon">
                    <va-icon :name="iconClass(set, icon)">{{iconData(set, icon)}}</va-icon>
                  </div>
                </div>
              </div>
              <div
                class="row pa-3"
                :class="index === 1 ? 'sets-list__set__content--middle' : ''"
                :key="index"
                v-if="filteredList.length === 2"
              >
                <div class="flex xs2 flex-center">
                  <div class="sets-list__icon pa-3 flex-center vuestic-icon">
                    <va-icon :name="iconClass(set, filteredList[0])">{{iconData(set, filteredList[0])}}</va-icon>
                  </div>
                </div>
                <div class="flex xs8"/>
                <div class="flex xs2 flex-center">
                  <div class="sets-list__icon pa-3 flex-center vuestic-icon">
                    <va-icon :name="iconClass(set, filteredList[1])">{{iconData(set, filteredList[1])}}</va-icon>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </router-link>
      </div>
    </div>
  </va-card>
</template>

<script>
export default {
  name: 'iconsList',
  props: ['sets'],
  methods: {
    iconClass (set, icon) {
      return set.prefix === 'material-icons' ? set.prefix : set.prefix + ' ' + set.prefix + '-' + icon
    },
    iconData (set, icon) {
      return set.prefix === 'material-icons' ? icon : ''
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
    position: relative;

    &__content {
      position: relative;
      background-color: $light-gray;

      &--middle {
        @include media-breakpoint-down(sm) {
          > * {
            visibility: hidden;
          }
        }
      }

      &__overlay {
        padding: 0;
        margin: 0;
        width: 100%;
        position: absolute;
        z-index: 2;
      }
    }
  }
}
</style>
