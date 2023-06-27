<template>
  <div class="flex flex-col gap-6">
    <va-card>
      <va-card-title>{{ t('chips.chips.title') }}</va-card-title>
      <va-card-content class="my-3 flex flex-col gap-8">
        <div class="flex flex-wrap gap-2">
          <va-chip shadow color="primary">{{ t('chips.chips.primary') }}</va-chip>
          <va-chip shadow color="secondary">{{ t('chips.chips.secondary') }}</va-chip>
          <va-chip shadow color="success">{{ t('chips.chips.success') }}</va-chip>
          <va-chip shadow color="info">{{ t('chips.chips.info') }}</va-chip>
          <va-chip shadow color="danger">{{ t('chips.chips.danger') }}</va-chip>
          <va-chip shadow color="warning">{{ t('chips.chips.warning') }}</va-chip>
          <va-chip shadow color="gray">{{ t('chips.chips.gray') }}</va-chip>
          <va-chip shadow color="dark">{{ t('chips.chips.dark') }}</va-chip>
        </div>
        <div class="flex flex-wrap gap-2">
          <va-chip outline color="primary">{{ t('chips.chips.primary') }}</va-chip>
          <va-chip outline color="secondary">{{ t('chips.chips.secondary') }}</va-chip>
          <va-chip outline color="success">{{ t('chips.chips.success') }}</va-chip>
          <va-chip outline color="info">{{ t('chips.chips.info') }}</va-chip>
          <va-chip outline color="danger">{{ t('chips.chips.danger') }}</va-chip>
          <va-chip outline color="warning">{{ t('chips.chips.warning') }}</va-chip>
          <va-chip outline color="gray">{{ t('chips.chips.gray') }}</va-chip>
          <va-chip outline color="dark">{{ t('chips.chips.dark') }}</va-chip>
        </div>
      </va-card-content>
    </va-card>

    <va-card>
      <va-card-title>{{ t('chips.badges.title') }}</va-card-title>
      <va-card-content class="my-3 flex flex-col gap-8">
        <div class="flex flex-wrap gap-2">
          <va-badge color="primary" :text="t('chips.badges.primary')" />
          <va-badge color="secondary" :text="t('chips.badges.secondary')" />
          <va-badge color="success" :text="t('chips.badges.success')" />
          <va-badge color="info" :text="t('chips.badges.info')" />
          <va-badge color="danger" :text="t('chips.badges.danger')" />
          <va-badge color="warning" :text="t('chips.badges.warning')" />
          <va-badge color="gray" :text="t('chips.badges.gray')" />
          <va-badge color="dark" :text="t('chips.badges.dark')" />
        </div>
        <div class="flex flex-wrap gap-2">
          <va-badge color="primary" :text="t('chips.badges.primary')" transparent />
          <va-badge color="secondary" :text="t('chips.badges.secondary')" transparent />
          <va-badge color="success" :text="t('chips.badges.success')" transparent />
          <va-badge color="info" :text="t('chips.badges.info')" transparent />
          <va-badge color="danger" :text="t('chips.badges.danger')" transparent />
          <va-badge color="warning" :text="t('chips.badges.warning')" transparent />
          <va-badge color="gray" :text="t('chips.badges.gray')" transparent />
          <va-badge color="dark" :text="t('chips.badges.dark')" transparent />
        </div>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>
