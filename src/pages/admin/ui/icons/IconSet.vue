<template>
  <div class="icon-set">
    <va-card class="icon-set__header mb-4 pb-3">
      <va-card-title>
        <h2 class="my-0 ml-2" :style="{ color: theme.dark }">
          {{ iconSet.name }}
        </h2>
      </va-card-title>
      <va-card-content class="row">
        <div class="flex md4 xs12 flex-center">
          <va-button outline :to="{ name: 'icon-sets' }">
            {{ t('icons.back') }}
          </va-button>
        </div>

        <div class="flex md4 xs12 flex-center">
          <va-input v-model="search" :label="t('icons.search')" clearable>
            <template #prependInner>
              <va-icon class="icon-left input-icon" name="search" />
            </template>
          </va-input>
        </div>

        <div class="flex md4 xs12 flex-center content icon-set__header__size">
          <span class="ma-2 pr-2 shrink icon-set__header__size--smaller" :style="{ color: theme.dark }">A</span>
          <va-slider
            v-model="iconSize"
            value-visible
            style="flex: 1"
            :label-value="`${iconSize}px`"
            :min="slider.min"
            :max="slider.max"
          >
          </va-slider>
          <span class="ma-2 pl-2 shrink icon-set__header__size--bigger" :style="{ color: theme.dark }">A</span>
        </div>
      </va-card-content>
    </va-card>

    <va-card v-for="(list, index) in filteredLists" :key="index" class="flex md12">
      <va-card-title>
        {{ list.name }}
      </va-card-title>
      <va-card-content class="row">
        <span v-if="list.icons.length === 0">
          {{ t('icons.none') }}
        </span>
        <div
          v-for="icon in list.icons"
          :key="icon"
          class="flex flex-center xs3 md1 mb-2 icon-grid-container"
          style="flex-direction: column"
        >
          <div class="vuestic-icon mb-3 pt-3">
            <va-icon :name="iconName(icon)" :size="iconSize" />
          </div>
          <div class="icon-text">
            {{ icon }}
          </div>
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { useGlobalConfig } from 'vuestic-ui'
  import { useI18n } from 'vue-i18n'
  import { computed, ref } from 'vue'
  import { IconSet } from './types'

  const { getGlobalConfig } = useGlobalConfig()
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

  const theme = computed(() => getGlobalConfig().colors!)

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
    .icon-grid-container {
      .icon-text {
        font-size: 0.6rem;
      }
    }

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
