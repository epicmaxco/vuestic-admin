<template>
  <div class="spinners">
    <va-card>
      <va-card-title>{{ t('spinners.title') }}</va-card-title>
      <va-card-content>
        <div class="row mt-0">
          <div class="d-flex flex xs12 lg4 align--center">
            <span class="shrink pr-3 spinners__size-smaller">A</span>
            <va-slider
              v-model="config.size"
              value-visible
              :label-value="`${config.size}px`"
              :min="sliderSize.min"
              :max="sliderSize.max"
            />
            <span class="shrink pl-3 spinners__size-bigger">A</span>
          </div>

          <div class="d-flex flex xs12 lg4 align--center">
            <va-icon-slower class="shrink pr-3 spinners__duration-slower" />
            <va-slider v-model="currentDuration" value-visible :min="sliderDuration.min" :max="sliderDuration.max" />
            <va-icon-faster class="shrink pl-3 spinners__duration-faster" />
          </div>

          <div class="d-flex flex justify--center xs12 lg4">
            <va-color-palette v-model="spinnersColor" :palette="paletteArray" />
          </div>
        </div>

        <div class="content">
          <hr class="separator" />
        </div>

        <div v-for="(group, i) in groups" :key="i" class="row">
          <div v-for="item in group" :key="item" class="flex sm6 xs12 lg3">
            <div class="text--center pb-4">
              <div class="flex-center spinner-box">
                <component :is="item" :animation-duration="speed" :color="computedSpinnersColor" :size="config.size">
                </component>
              </div>
              <div>{{ t(item) }}</div>
            </div>
          </div>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  /**
   * HIDDEN FROM THE ADMIN! SEE src/components/sidebar/NavigationRoutes.ts AND src/pages/admin/ui/route.ts TO REVEAL.
   * ALSO INSTALL THE DEPENDENCY "epic-spinners": "^1.1.0" (OR HIGHER WHEN IT'S UPDATED)!
   */

  // import * as spinners from 'epic-spinners'
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'
  import VaIconFaster from '../../../../components/icons/VaIconFaster.vue'
  import VaIconSlower from '../../../../components/icons/VaIconSlower.vue'

  const config = ref({
    size: 80,
    group: 4,
    duration: 1500,
  })

  const currentDuration = ref(1500)

  const spinnersColor = ref('primary')

  const sliderSize = ref({
    formatter: (v: number) => `${v}px`,
    min: 40,
    max: 100,
  })

  const sliderDuration = ref({
    min: 1000,
    max: 2000,
  })

  const { t } = useI18n()
  const { getColor } = useColors()

  const computedSpinnersColor = computed(() => {
    return getColor(spinnersColor.value)
  })

  const speed = computed(() => {
    return sliderDuration.value.min + sliderDuration.value.max - currentDuration.value
  })

  const groups = computed(() => {
    // return groupItems(Object.keys(spinners), config.value.group)
    return []
  })

  const paletteArray = computed(() => {
    return ['primary', 'success', 'danger', 'warning', 'dark']
  })

  // function groupItems(items: never[], groupSize: number) {
  //   const grouped = []
  //
  //   for (let i = 0; i < items.length; i += groupSize) {
  //     grouped.push(items.slice(i, i + groupSize))
  //   }
  //
  //   return grouped
  // }
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
