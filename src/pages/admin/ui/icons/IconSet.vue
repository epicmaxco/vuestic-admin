<template>
  <div class="icon-set">
    <va-card class="icon-set__header mb-8 pb-4">
      <va-card-title>
        <h2 class="ml-2" :style="{ color: colors.dark }">
          {{ iconSet.name }}
        </h2>
      </va-card-title>
      <va-card-content class="grid grid-cols-12 gap-6 items-start justify-between">
        <va-button
          class="col-span-full md:col-span-2"
          preset="outline"
          border-color="primary"
          color="primary"
          :to="{ name: 'icon-sets' }"
        >
          {{ t('icons.back') }}
        </va-button>

        <va-input v-model="search" class="col-span-full md:col-span-5" :label="t('icons.search')" clearable>
          <template #prependInner>
            <va-icon class="icon-left input-icon" name="search" />
          </template>
        </va-input>

        <div class="icon-set__header__size col-span-full md:col-span-5 flex items-center">
          <span class="m-2 pr-2 icon-set__header__size--smaller" :style="{ color: colors.dark }">A</span>
          <va-slider
            v-model="iconSize"
            class="flex-1"
            :label-value="`${iconSize}px`"
            :min="slider.min"
            :max="slider.max"
            value-visible
          >
          </va-slider>
          <span class="m-2 pl-2 icon-set__header__size--bigger" :style="{ color: colors.dark }">A</span>
        </div>
      </va-card-content>
    </va-card>

    <va-card v-for="(list, index) in filteredLists" :key="index" class="col-span-12">
      <va-card-title>
        {{ list.name }}
      </va-card-title>
      <va-card-content class="flex flex-wrap gap-3">
        <span v-if="!list.icons.length">
          {{ t('icons.none') }}
        </span>
        <div v-for="icon in list.icons" :key="icon" class="flex flex-col text-[0.6rem]">
          <div class="vuestic-icon mb-4 text-center">
            <va-icon :name="iconName(icon)" :size="iconSize" />
          </div>
          <div class="icon-text text-center">
            {{ icon }}
          </div>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
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
