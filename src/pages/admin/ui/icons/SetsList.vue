<template>
  <div class="grid grid-cols-12 gap-6">
    <VaCard v-for="(set, index) in sets" :key="index" class="va-card-wrapper relative lg:col-span-6 col-span-12 py-3">
      <RouterLink :to="{ path: `icons/${set.href}` }" append class="text-[inherit]">
        <div class="absolute inset-0 flex justify-center items-center z-10">
          <VaButton>
            {{ set.name.toUpperCase() }}
          </VaButton>
        </div>

        <template v-for="(filteredList, i) in set.filteredLists">
          <div v-if="filteredList.length !== 2" :key="i" class="py-3 grid grid-cols-6">
            <div v-for="(icon, j) in filteredList" :key="j" class="col-span-1 flex justify-center items-center">
              <VaIcon :name="iconName(set, icon)" />
            </div>
          </div>

          <div
            v-if="filteredList.length === 2"
            :key="i"
            :class="{ 'sets-list__set__content--middle': i === 1 }"
            class="py-12 grid grid-cols-12"
          >
            <div class="col-span-2 flex justify-center items-center">
              <VaIcon :name="iconName(set, filteredList[0])" />
            </div>
            <div class="col-span-8" />
            <div class="col-span-2 flex justify-center items-center">
              <VaIcon :name="iconName(set, filteredList[1])" />
            </div>
          </div>
        </template>
      </RouterLink>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { IconSet } from './types'

defineProps<{
  sets: IconSet[]
}>()

const iconName = (set: IconSet, icon: string) => `${set.prefix}-${icon}`
</script>
