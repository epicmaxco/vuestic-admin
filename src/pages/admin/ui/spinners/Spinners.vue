<template>
  <VaCard class="spinners">
    <VaCardTitle>{{ t('spinners.title') }}</VaCardTitle>
    <VaCardContent>
      <div class="grid grid-cols-12 gap-6">
        <div class="flex col-span-12 lg:col-span-4 items-center">
          <span class="pr-4 spinners__size-smaller">A</span>
          <VaSlider
            v-model="config.size"
            :max="sliderSize.max"
            :min="sliderSize.min"
            :track-label="`${config.size}px`"
            class="flex-grow"
            track-label-visible
          />
          <span class="pl-4 spinners__size-bigger">A</span>
        </div>

        <div class="flex col-span-12 lg:col-span-4 items-center">
          <VaIconSlower class="pr-4 spinners__duration-slower" />
          <VaSlider
            v-model="config.duration"
            :max="sliderDuration.max"
            :min="sliderDuration.min"
            class="flex-grow"
            track-label-visible
          />
          <VaIconFaster class="pl-4 spinners__duration-faster" />
        </div>

        <VaColorPalette v-model="spinnersColor" :palette="paletteArray" class="col-span-12 lg:col-span-4" />
      </div>

      <VaDivider class="py-3" />

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
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
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
