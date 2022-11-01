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
              track-label-visible
              :track-label="`${config.size}px`"
              :min="sliderSize.min"
              :max="sliderSize.max"
            />
            <span class="shrink pl-3 spinners__size-bigger">A</span>
          </div>

          <div class="d-flex flex xs12 lg4 align--center">
            <va-icon-slower class="shrink pr-3 spinners__duration-slower" />
            <va-slider
              v-model="config.duration"
              track-label-visible
              :min="sliderDuration.min"
              :max="sliderDuration.max"
            />
            <va-icon-faster class="shrink pl-3 spinners__duration-faster" />
          </div>

          <div class="d-flex flex justify-center xs12 lg4">
            <va-color-palette v-model="spinnersColor" :palette="paletteArray" />
          </div>
        </div>

        <div class="content">
          <hr class="separator" />
        </div>

        <div v-for="(group, i) in groups" :key="i" class="row">
          <div v-for="item in group" :key="item" class="flex sm6 xs12 lg3">
            <div class="va-text-center pb-4">
              <div class="justify-center d-flex align-center spinner-box">
                <component
                  :is="getComponent(item)"
                  :animation-duration="config.duration"
                  :color="computedSpinnersColor"
                  :size="config.size"
                />
              </div>
              <div>{{ item }}</div>
            </div>
          </div>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'
  import * as spinners from 'epic-spinners'

  import VaIconFaster from '../../../../components/icons/VaIconFaster.vue'
  import VaIconSlower from '../../../../components/icons/VaIconSlower.vue'

  type SpinnersItems = keyof typeof spinners

  const { t } = useI18n()
  const { getColor } = useColors()

  const config = ref({
    size: 70,
    group: 4,
    duration: 2000,
  })

  const spinnersColor = ref('primary')

  const sliderSize = ref({
    formatter: (v: number) => `${v}px`,
    min: 40,
    max: 100,
  })

  const sliderDuration = ref({
    min: 1000,
    max: 3000,
  })

  const computedSpinnersColor = computed(() => getColor(spinnersColor.value))

  const groups = computed(() => groupItems(Object.keys(spinners) as SpinnersItems[], config.value.group))

  const paletteArray = computed(() => ['primary', 'success', 'danger', 'warning', 'dark'])

  function groupItems(items: SpinnersItems[], groupSize: number) {
    const grouped = []

    for (let i = 0; i < items.length; i += groupSize) {
      grouped.push(items.slice(i, i + groupSize))
    }

    return grouped
  }

  const getComponent = (item: SpinnersItems) => spinners[item]
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
