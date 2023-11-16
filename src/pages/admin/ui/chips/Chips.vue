<template>
  <div class="flex flex-col gap-6">
    <VaCard>
      <VaCardTitle>{{ t('chips.chips.title') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-col gap-8">
        <div class="flex flex-wrap gap-2">
          <VaChip shadow color="primary">{{ t('chips.chips.primary') }}</VaChip>
          <VaChip shadow color="secondary">{{ t('chips.chips.secondary') }}</VaChip>
          <VaChip shadow color="success">{{ t('chips.chips.success') }}</VaChip>
          <VaChip shadow color="info">{{ t('chips.chips.info') }}</VaChip>
          <VaChip shadow color="danger">{{ t('chips.chips.danger') }}</VaChip>
          <VaChip shadow color="warning">{{ t('chips.chips.warning') }}</VaChip>
          <VaChip shadow color="gray">{{ t('chips.chips.gray') }}</VaChip>
          <VaChip shadow color="dark">{{ t('chips.chips.dark') }}</VaChip>
        </div>
        <div class="flex flex-wrap gap-2">
          <VaChip outline color="primary">{{ t('chips.chips.primary') }}</VaChip>
          <VaChip outline color="secondary">{{ t('chips.chips.secondary') }}</VaChip>
          <VaChip outline color="success">{{ t('chips.chips.success') }}</VaChip>
          <VaChip outline color="info">{{ t('chips.chips.info') }}</VaChip>
          <VaChip outline color="danger">{{ t('chips.chips.danger') }}</VaChip>
          <VaChip outline color="warning">{{ t('chips.chips.warning') }}</VaChip>
          <VaChip outline color="gray">{{ t('chips.chips.gray') }}</VaChip>
          <VaChip outline color="dark">{{ t('chips.chips.dark') }}</VaChip>
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard>
      <VaCardTitle>{{ t('chips.badges.title') }}</VaCardTitle>
      <VaCardContent class="my-3 flex flex-col gap-8">
        <div class="flex flex-wrap gap-2">
          <VaBadge color="primary" :text="t('chips.badges.primary')" />
          <VaBadge color="secondary" :text="t('chips.badges.secondary')" />
          <VaBadge color="success" :text="t('chips.badges.success')" />
          <VaBadge color="info" :text="t('chips.badges.info')" />
          <VaBadge color="danger" :text="t('chips.badges.danger')" />
          <VaBadge color="warning" :text="t('chips.badges.warning')" />
          <VaBadge color="gray" :text="t('chips.badges.gray')" />
          <VaBadge color="dark" :text="t('chips.badges.dark')" />
        </div>
        <div class="flex flex-wrap gap-2">
          <VaBadge color="primary" :text="t('chips.badges.primary')" transparent />
          <VaBadge color="secondary" :text="t('chips.badges.secondary')" transparent />
          <VaBadge color="success" :text="t('chips.badges.success')" transparent />
          <VaBadge color="info" :text="t('chips.badges.info')" transparent />
          <VaBadge color="danger" :text="t('chips.badges.danger')" transparent />
          <VaBadge color="warning" :text="t('chips.badges.warning')" transparent />
          <VaBadge color="gray" :text="t('chips.badges.gray')" transparent />
          <VaBadge color="dark" :text="t('chips.badges.dark')" transparent />
        </div>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>
