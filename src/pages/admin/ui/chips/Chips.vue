<template>
  <div class="flex flex-col gap-6">
    <VaCard>
      <VaCardTitle>{{ t('chips.chips.title') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-col gap-8">
        <div class="flex flex-wrap gap-2">
          <VaChip color="primary" shadow>{{ t('chips.chips.primary') }}</VaChip>
          <VaChip color="secondary" shadow>{{ t('chips.chips.secondary') }}</VaChip>
          <VaChip color="success" shadow>{{ t('chips.chips.success') }}</VaChip>
          <VaChip color="info" shadow>{{ t('chips.chips.info') }}</VaChip>
          <VaChip color="danger" shadow>{{ t('chips.chips.danger') }}</VaChip>
          <VaChip color="warning" shadow>{{ t('chips.chips.warning') }}</VaChip>
          <VaChip color="gray" shadow>{{ t('chips.chips.gray') }}</VaChip>
          <VaChip color="dark" shadow>{{ t('chips.chips.dark') }}</VaChip>
        </div>
        <div class="flex flex-wrap gap-2">
          <VaChip color="primary" outline>{{ t('chips.chips.primary') }}</VaChip>
          <VaChip color="secondary" outline>{{ t('chips.chips.secondary') }}</VaChip>
          <VaChip color="success" outline>{{ t('chips.chips.success') }}</VaChip>
          <VaChip color="info" outline>{{ t('chips.chips.info') }}</VaChip>
          <VaChip color="danger" outline>{{ t('chips.chips.danger') }}</VaChip>
          <VaChip color="warning" outline>{{ t('chips.chips.warning') }}</VaChip>
          <VaChip color="gray" outline>{{ t('chips.chips.gray') }}</VaChip>
          <VaChip color="dark" outline>{{ t('chips.chips.dark') }}</VaChip>
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard>
      <VaCardTitle>{{ t('chips.badges.title') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-col gap-8">
        <div class="flex flex-wrap gap-2">
          <VaBadge :text="t('chips.badges.primary')" color="primary" />
          <VaBadge :text="t('chips.badges.secondary')" color="secondary" />
          <VaBadge :text="t('chips.badges.success')" color="success" />
          <VaBadge :text="t('chips.badges.info')" color="info" />
          <VaBadge :text="t('chips.badges.danger')" color="danger" />
          <VaBadge :text="t('chips.badges.warning')" color="warning" />
          <VaBadge :text="t('chips.badges.gray')" color="gray" />
          <VaBadge :text="t('chips.badges.dark')" color="dark" />
        </div>
        <div class="flex flex-wrap gap-2">
          <VaBadge :text="t('chips.badges.primary')" color="primary" transparent />
          <VaBadge :text="t('chips.badges.secondary')" color="secondary" transparent />
          <VaBadge :text="t('chips.badges.success')" color="success" transparent />
          <VaBadge :text="t('chips.badges.info')" color="info" transparent />
          <VaBadge :text="t('chips.badges.danger')" color="danger" transparent />
          <VaBadge :text="t('chips.badges.warning')" color="warning" transparent />
          <VaBadge :text="t('chips.badges.gray')" color="gray" transparent />
          <VaBadge :text="t('chips.badges.dark')" color="dark" transparent />
        </div>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
