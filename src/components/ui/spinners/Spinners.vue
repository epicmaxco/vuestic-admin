<template>
  <div class="spinners">
    <va-card :title="$t('spinners.title')">
      <div class="row mt-0">
        <div class="d-flex flex xs12 lg4 align--center">
          <span class="shrink pr-3 spinners__size-smaller">A</span>
          <va-slider
            value-visible
            v-model="config.size"
            :label-value="`${config.size}px`"
            :min="sliderSize.min"
            :max="sliderSize.max"
          />
          <span class="shrink pl-3 spinners__size-bigger">A</span>
        </div>

        <div class="d-flex flex xs12 lg4 align--center">
          <va-icon-slower class="shrink pr-3 spinners__duration-slower"/>
          <va-slider
            value-visible
            v-model="currentDuration"
            :min="sliderDuration.min"
            :max="sliderDuration.max"
          />
          <va-icon-faster class="shrink pl-3 spinners__duration-faster"/>
        </div>

        <div class="d-flex flex justify--center xs12 lg4">
          <va-palette-custom
            :palette="paletteArray"
            v-model="spinnersColor"
            class="justify--center"
          />
        </div>
      </div>

      <div class="content">
        <hr class="separator">
      </div>

      <div
        v-for="(group, i) in groups"
        :key="i"
        class="row"
      >
        <div
          v-for="item in group"
          :key="item"
          class="flex sm6 lg3"
        >
          <div class="text--center pb-4">
            <div class="flex-center spinner-box">
              <component
                :animation-duration="speed"
                :is="item"
                :color="spinnersColor"
                :size="config.size"
              >
              </component>
            </div>
            <div>{{ $t(item) }}</div>
          </div>
        </div>
      </div>
    </va-card>
  </div>
</template>

<script>
import * as spinners from 'epic-spinners'
import { mapGetters } from 'vuex'
import VaIconFaster from '../../../iconset/VaIconFaster'
import VaIconSlower from '../../../iconset/VaIconSlower'

export default {
  components: {
    ...spinners,
    VaIconFaster,
    VaIconSlower,
  },
  data () {
    return {
      config: {
        size: 80,
        group: 4,
        duration: 1500,
      },
      spinnersColor: this.$themes.primary,
      currentDuration: 1500,
      sliderSize: {
        formatter: v => `${v}px`,
        min: 40,
        max: 100,
      },
      sliderDuration: {
        min: 1000,
        max: 2000,
      },
    }
  },
  computed: {
    ...mapGetters(['palette']),

    speed () {
      return this.sliderDuration.min + this.sliderDuration.max - this.currentDuration
    },

    groups () {
      return this.groupItems(Object.keys(spinners), this.config.group)
    },

    paletteArray () {
      const t = this.$themes
      return [t.primary, t.warning, t.danger]
    },
  },

  filters: {
    displayName (name) {
      return name.replace('Spinner', '').match(/[A-Z][a-z]+/g).join(' ')
    },
  },
  methods: {
    groupItems (items, groupSize) {
      const grouped = []

      for (let i = 0; i < items.length; i += groupSize) {
        grouped.push(items.slice(i, i + groupSize))
      }

      return grouped
    },
  },
}
</script>

<style lang="scss">
.spinners {
  &__size {
    &-smaller,
    &-bigger {
      width: 40px;
      text-align: center;
      font-weight: 600;
    }

    &-smaller {
      font-size: 1rem;
    }

    &-bigger {
      font-size: 1.3rem;
    }
  }

  &__duration {
    &-slower,
    &-faster {
      transform: translateY(-1px);
    }
  }

  .spinner-box {
    height: 140px;
  }
}
</style>
