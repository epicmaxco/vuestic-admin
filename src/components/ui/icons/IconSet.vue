<template>
  <div class="icon-set">
    <va-card class="icon-set__header mb-4 py-3">
      <div class="va-row">
        <div class="flex md4 xs12 pl-5 icon-set__header__text">
          <h2 class="my-0">{{ set.name }}</h2>
          <router-link :to="{ name: 'icon-sets' }">
            {{ $t('icons.back') }}
          </router-link>
        </div>

        <div class="flex md4 xs12">
          <div class="form-group with-icon-left">
            <div class="input-group">
              <input
                v-model="search"
                id="input-icon-left"
                name="input-icon-left"
                required
              />
              <va-icon name="fa fa-search icon-left input-icon"/>
              <label class="control-label" for="input-icon-left">
                {{ $t('icons.search') }}
              </label>
              <va-icon name="bar"/>
            </div>
          </div>
        </div>

        <div class="d-flex flex align--center md4 xs12 px-4 vuestic-icon-set__header__range">
          <h4 class="ma-2 shrink">A</h4>
          <va-slider
            value-visible
            v-model="iconSize"
            :label-value="`${iconSize}px`"
            :min="slider.min"
            :max="slider.max"
          >
          </va-slider>
          <h2 class="ma-2 shrink">A</h2>
        </div>
      </div>
    </va-card>

    <va-card
      v-for="(list, index) in filteredLists"
      :key="index"
      :title="list.name"
      class="flex md12"
    >
      <span v-if="list.icons.length === 0">
        {{ $t('icons.none') }}
      </span>
      <div class="va-row">
        <div
          class="flex flex-center xs3 md1 mb-2 icon-grid-container"
          style="flex-direction: column"
          v-for="icon in list.icons"
          :key="icon"
        >
          <div class="vuestic-icon mb-3 pt-3">
            <va-icon :name="iconClass(icon)" :size="iconSize">{{iconData(icon)}}</va-icon>
          </div>
          <div class="icon-text">
            {{ icon }}
          </div>
        </div>
      </div>
    </va-card>
  </div>
</template>

<script>
export default {
  name: 'icon-set',
  props: {
    name: {
      type: String,
    },

    sets: {
      type: Array,
    },
  },
  data () {
    return {
      search: '',
      iconSize: 30,
      slider: {
        formatter: v => `${v}px`,
        min: 20,
        max: 40,
      },
    }
  },
  computed: {
    set () {
      for (let set of this.sets) {
        if (set.href === this.name) return set
      }
    },
    filteredLists () {
      if (!this.search) {
        // If nothing is searched - we return all sets
        return this.set.lists
      }

      const foundIcons = []
      this.set.lists.forEach(list => {
        list.icons.forEach(icon => {
          if (!icon.toUpperCase().includes(this.search.toUpperCase())) {
            return
          }
          // Same icon could be included in different sets.
          if (foundIcons.includes(icon)) {
            return
          }
          foundIcons.push(icon)
        })
      })

      // We return all found icons as a single set.
      return [{
        name: 'Found Icons',
        icons: foundIcons,
      }]
    },
  },
  methods: {
    iconClass (icon) {
      return this.set.prefix === 'material-icons' ? this.set.prefix : `${this.set.prefix} ${this.set.prefix}-${icon}`
    },
    iconData (icon) {
      return this.set.prefix === 'material-icons' ? icon : ''
    },
  },
}
</script>

<style lang="scss">
.icon-set {
  .icon-grid-container {
    &:hover {
      color: $white;
      background-color: $brand-primary;
      cursor: pointer;
    }

    .icon-text {
      font-size: .6rem;
    }
  }
}
</style>
