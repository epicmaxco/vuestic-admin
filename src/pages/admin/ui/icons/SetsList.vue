<template>
  <div class="grid grid-cols-12 gap-6">
    <va-card v-for="(set, index) in sets" :key="index" class="va-card-wrapper relative lg:col-span-6 col-span-12 py-3">
      <router-link class="text-[inherit]" :to="{ path: `icons/${set.href}` }" append>
        <div class="absolute inset-0 flex justify-center items-center z-10">
          <va-button>
            {{ set.name.toUpperCase() }}
          </va-button>
        </div>

        <template v-for="(filteredList, i) in set.filteredLists">
          <div v-if="filteredList.length !== 2" :key="i" class="py-3 grid grid-cols-6">
            <div v-for="(icon, j) in filteredList" :key="j" class="col-span-1 flex justify-center items-center">
              <va-icon :name="iconName(set, icon)" />
            </div>
          </div>

          <div
            v-if="filteredList.length === 2"
            :key="i"
            class="py-12 grid grid-cols-12"
            :class="{ 'sets-list__set__content--middle': i === 1 }"
          >
            <div class="col-span-2 flex justify-center items-center">
              <va-icon :name="iconName(set, filteredList[0])" />
            </div>
            <div class="col-span-8" />
            <div class="col-span-2 flex justify-center items-center">
              <va-icon :name="iconName(set, filteredList[1])" />
            </div>
          </div>
        </template>
      </router-link>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { IconSet } from './types'

  defineProps<{
    sets: IconSet[]
  }>()

  const iconName = (set: IconSet, icon: string) => `${set.prefix}-${icon}`
</script>
