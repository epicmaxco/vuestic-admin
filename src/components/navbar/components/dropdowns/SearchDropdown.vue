<template>
  <VaDropdown :offset="[13, 0]" stick-to-edges :close-on-content-click="false">
    <template #anchor>
      <VaButton preset="secondary" color="textPrimary">
        <VaIcon name="search" />
      </VaButton>
    </template>
    <VaDropdownContent class="p-0 m-0">
      <div class="w-screen py-12 px-4 bg-gray-100 grid grid-cols-6">
        <VaInput
          :placeholder="t('search.placeholder')"
          color="textPrimary"
          class="bg-white text-3xl py-4 rounded md:col-start-2 md:col-span-4 col-span-6"
          autofocus
        >
          <template #prependInner>
            <VaIcon name="search" color="secondary" size="2rem" />
          </template>
        </VaInput>
      </div>
    </VaDropdownContent>
  </VaDropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.va-input-wrapper {
  --va-input-wrapper-border-width: 0;
}

.va-dropdown__anchor {
  display: inline-block;
}
</style>
