<template>
  <div class="vuestic-icon-set">
    <vuestic-widget class="header">
      <div class="row">
        <div class="header-text col-lg-4">
          <h2>{{ set.name }}</h2>
          <router-link :to="{ name: 'icon-sets' }">
            {{ $t('icons.back') }}
          </router-link>
        </div>

        <div class="search col-lg-4">
          <div class="form-group with-icon-left">
            <div class="input-group">
              <input
                v-model="selector"
                id="input-icon-left"
                name="input-icon-left"
                required
              />
              <i class="fa fa-search icon-left input-icon"></i>
              <label class="control-label" for="input-icon-left">
                {{ 'icons.search' | translate }}
              </label>
              <i class="bar"></i>
            </div>
          </div>
        </div>

        <div class="range col-lg-4">
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
      v-for="(list, index) in validatedLists"
      :key="index"
      :headerText="list.name"
      class="col-12"
    >
      <span v-if="list.icons.length === 0">
        {{ 'icons.none' | translate }}
      </span>
      <div
        v-for="i in Math.floor(list.icons.length / 8 + 1)"
        :key="i"
        class="row vuestic-icon-container"
      >
        <div
          v-for="j in 8"
          :key="j"
          v-if="list.icons[(i - 1) * 8 + j - 1]"
          class="col-8-custom icon-grid-container"
        >
          <div class="vuestic-icon">
            <span
              :class="iconClass(list.icons[(i - 1) * 8 + j - 1])"
              :style="`font-size: ${iconSize}px`"
              aria-hidden="true"
            />
          </div>
          <div class="icon-text">
            {{ list.icons[(i - 1) * 8 + j - 1] }}
          </div>
        </div>
      </div>
    </vuestic-widget>
  </div>
</template>

<script>
export default {
  name: 'set',

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
      selector: '',
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

    validatedLists () {
      if (this.selector === '') {
        return this.set.lists
      }

      let result = [
        {
          name: 'Found Icons',
          icons: [],
        },
      ]

      this.set.lists.forEach(list => {
        list.icons.forEach(icon => {
          if (icon.match(this.selector)) {
            result[0].icons.push(icon)
          }
        })
      })

      return result
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
  .header {
    padding: 1.75rem 0 1.125rem;
    background-color: white;

    .header-text {
      padding-left: 2.5rem;
      text-align: left;

      h2 {
        margin-bottom: 0;
      }
    }

    .search {
      display: flex;
      align-items: center;
      justify-content: center;

      .input-group {
        width: 13.25rem;
      }
    }

    .range {
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

  .vuestic-icon-container {
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
}
</style>
