<template>
  <div class="icon-set">
    <VaCard class="icon-set__header mb-8 pb-4">
      <VaCardTitle>
        <h2 :style="{ color: colors.dark }" class="ml-2">
          {{ iconSet.name }}
        </h2>
      </VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6 items-start justify-between">
        <VaButton
          :to="{ name: 'icon-sets' }"
          border-color="primary"
          class="col-span-full md:col-span-2"
          color="primary"
          preset="outline"
        >
          {{ t('icons.back') }}
        </VaButton>

        <VaInput v-model="search" :label="t('icons.search')" class="col-span-full md:col-span-5" clearable>
          <template #prependInner>
            <VaIcon class="icon-left input-icon" name="search" />
          </template>
        </VaInput>

        <div class="icon-set__header__size col-span-full md:col-span-5 flex items-center">
          <span :style="{ color: colors.dark }" class="m-2 pr-2 icon-set__header__size--smaller">A</span>
          <VaSlider
            v-model="iconSize"
            :label-value="`${iconSize}px`"
            :max="slider.max"
            :min="slider.min"
            class="flex-1"
            value-visible
          >
          </VaSlider>
          <span :style="{ color: colors.dark }" class="m-2 pl-2 icon-set__header__size--bigger">A</span>
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard v-for="(list, index) in filteredLists" :key="index" class="col-span-12 text-[0.6rem]">
      <VaCardTitle>
        {{ list.name }}
      </VaCardTitle>
      <VaCardContent class="grid grid-cols-4 md:grid-cols-12 gap-4">
        <span v-if="!list.icons.length">
          {{ t('icons.none') }}
        </span>
        <div v-for="icon in list.icons" :key="icon" class="flex flex-col">
          <div class="vuestic-icon mb-4 text-center">
            <VaIcon :name="iconName(icon)" :size="iconSize" />
          </div>
          <div class="w-15 truncate text-center">
            {{ icon }}
          </div>
        </div>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { useColors } from 'vuestic-ui'
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import { IconSet } from './types'

const { colors } = useColors()
const { t } = useI18n()

const props = defineProps<{
  name: string
  sets: IconSet[]
}>()

const search = ref('')
const iconSize = ref(30)
const slider = ref({
  formatter: (v: never) => `${v}px`,
  min: 20,
  max: 40,
})

const iconSet = computed((): IconSet => {
  for (const set of props.sets) {
    if (set.href === props.name) {
      return set
    }
  }

  return { name: '', href: '', prefix: '', lists: [], filteredLists: [] }
})

const filteredLists = computed(() => {
  if (!search.value) {
    // If nothing is searched - we return all sets
    return iconSet.value.lists
  }

  const foundIcons: string[] = []
  iconSet.value.lists.forEach((list) => {
    list.icons.forEach((icon) => {
      if (!icon.toUpperCase().includes(search.value.toUpperCase())) {
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
  return [
    {
      name: 'Found Icons',
      icons: foundIcons,
    },
  ]
})

const iconName = (icon: string) => `${iconSet.value.prefix}-${icon}`
</script>

<style lang="scss">
.icon-set {
  &__header {
    &__size {
      &--smaller,
      &--bigger {
        font-weight: 600;
      }

      &--smaller {
        line-height: 1em;
        font-size: 1em;
      }

      &--bigger {
        line-height: 1.3em;
        font-size: 1.3em;
      }
    }
  }
}
</style>
