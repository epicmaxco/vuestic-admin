<template>
  <div class="icons">
    <router-view :sets="sets"></router-view>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { IconSet } from './types'

  const sets = computed<IconSet[]>(() => {
    const sets = import.meta.globEager('./sets/*.json', {})

    return Object.values(sets)
      .reverse()
      .map((module) => {
        addFilteredListsTo(module.default)
        return module.default
      })
  })

  function addFilteredListsTo(set: IconSet) {
    // This allows us to add icons to icon set.
    const list = set.lists[0].icons
    const filteredLists = []

    filteredLists.push(list.slice(0, 6))
    filteredLists.push(list.slice(6, 8))
    filteredLists.push(list.slice(8, 14))

    set.filteredLists = filteredLists
  }
</script>
