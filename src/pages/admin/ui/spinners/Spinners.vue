<template>
  <va-card class="spinners">
    <va-card-title>{{ t('spinners.title') }}</va-card-title>
    <va-card-content>
      <div class="grid grid-cols-12 gap-6">
        <div class="flex col-span-12 lg:col-span-4 items-center">
          <span class="pr-4 spinners__size-smaller">A</span>
          <va-slider
            v-model="config.size"
            class="flex-grow"
            track-label-visible
            :track-label="`${config.size}px`"
            :min="sliderSize.min"
            :max="sliderSize.max"
          />
          <span class="pl-4 spinners__size-bigger">A</span>
        </div>

        <div class="flex col-span-12 lg:col-span-4 items-center">
          <va-icon-slower class="pr-4 spinners__duration-slower" />
          <va-slider
            v-model="config.duration"
            class="flex-grow"
            track-label-visible
            :min="sliderDuration.min"
            :max="sliderDuration.max"
          />
          <va-icon-faster class="pl-4 spinners__duration-faster" />
        </div>

        <va-color-palette v-model="spinnersColor" class="col-span-12 lg:col-span-4" :palette="paletteArray" />
      </div>

      <va-divider class="py-3" />

      <div v-for="(group, i) in groups" :key="i" class="grid grid-cols-12 gap-6">
        <div v-for="item in group" :key="item" class="sm:col-span-6 col-span-12 lg:col-span-3 flex flex-col">
          <div class="h-[140px] flex justify-center items-center">
            <component
              :is="getComponent(item)"
              :animation-duration="config.duration"
              :color="computedSpinnersColor"
              :size="config.size"
            />
          </div>
          <div class="text-center">{{ item }}</div>
        </div>
      </div>
    </va-card-content>
  </va-card>
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
        width: 40px;
        text-align: center;
        font-weight: 600;
      }
    }
  }
</style>
