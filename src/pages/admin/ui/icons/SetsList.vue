<template>
  <div class="row">
    <div
      class="va-card-wrapper flex lg6 xs12"
      v-for="(set, index) in sets"
      :key="index"
    >
      <va-card>
        <router-link
          :to="{ path: `icons/${set.href}` }"
          append
          style="color: inherit"
        >
          <div class="sets-list__set__content">
            <div
              class="sets-list__set__content__overlay flex-center pa-3 fill-height"
            >
              <va-button>
                {{ set.name.toUpperCase() }}
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
                    <va-icon :name="iconClass(set, icon)"></va-icon>
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
                    <va-icon :name="iconClass(set, filteredList[0])"></va-icon>
                  </div>
                </div>
                <div class="flex xs8" />
                <div class="flex xs2 flex-center">
                  <div class="sets-list__icon pa-3 flex-center vuestic-icon">
                    <va-icon :name="iconClass(set, filteredList[1])"></va-icon>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </router-link>
      </va-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sets: { type: Array, required: true },
  },
  methods: {
    iconClass(set, icon) {
      return `${set.prefix}-${icon}`;
    },
  },
};
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
