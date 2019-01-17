<template>
  <div class="vuestic-icon-set">
    <vuestic-widget class="vuestic-icon-set__header">
      <div class="va-row">
        <div class=" flex md4 xs12 vuestic-icon-set__header__text">
          <h2>{{ set.name }}</h2>
          <router-link :to="{ name: 'icon-sets' }">
            {{ $t('icons.back') }}
          </router-link>
        </div>

        <div class=" flex md4 xs12">
          <div class="form-group with-icon-left">
            <div class="input-group">
              <input
                v-model="search"
                id="input-icon-left"
                name="input-icon-left"
                required
              />
              <i class="fa fa-search icon-left input-icon"/>
              <label class="control-label" for="input-icon-left">
                {{ $t('icons.search') }}
              </label>
              <i class="bar"></i>
            </div>
          </div>
        </div>

        <div class=" flex md4 xs12 vuestic-icon-set__header__range">
          <h4>A</h4>
          <vuestic-slider
            :options="slider"
            v-model="iconSize"
          >
          </vuestic-slider>
          <h2>A</h2>
        </div>
      </div>
    </vuestic-widget>

    <vuestic-widget
      v-for="(list, index) in filteredLists"
      :key="index"
      :headerText="list.name"
      class="flex md12"
    >
      <span v-if="list.icons.length === 0">
        {{ $t('icons.none') }}
      </span>
      <div class="va-row">
        <div
          class="flex xs3 md1 icon-grid-container"
          v-for="icon in list.icons"
          :key="icon"
        >
          <div class="vuestic-icon">
            <span
              :class="iconClass(icon)"
              :style="`font-size: ${iconSize}px`"
              aria-hidden="true"
            />
          </div>
          <div class="icon-text">
            {{ icon }}
          </div>
        </div>
      </div>
    </vuestic-widget>
  </div>
</template>

<script>
export default {
  name: 'vuestic-icon-set',
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
      return `${this.set.prefix} ${this.set.prefix}-${icon}`
    },
  },
}
</script>

<style lang="scss">
.vuestic-icon-set {
  &__header {
    padding: 1.75rem 0 1.125rem;
    background-color: white;

    &__text {
      padding-left: 2.5rem;
      text-align: left;

      h2 {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    &__range {
      display: flex;
      align-items: center;
      padding-right: 2rem;
      padding-left: 2rem;

      h2, h4 {
        flex-grow: 0;
        margin: .5rem;
      }

      .vuestic-slider {
        flex-grow: 1;
      }
    }

    margin-bottom: 2rem;
  }

  .icon-grid-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    position: relative;
    float: left;
    height: 6rem;
    min-height: 1px;
    margin: 0 0 .5rem;
    text-align: center;

    &:hover {
      color: white;
      background-color: $brand-primary;
      cursor: pointer;
    }

    .vuestic-icon {
      margin: 0 0 1rem;
      padding: 1rem 0 0;
    }

    .icon-text {
      font-size: .6rem;
      text-align: center;
    }
  }
}
</style>
