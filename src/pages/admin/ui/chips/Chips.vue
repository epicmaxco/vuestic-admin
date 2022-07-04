<template>
  <div class="row">
    <div class="flex xs12">
      <va-card>
        <va-card-title>{{ t('chips.chips.title') }}</va-card-title>
        <va-card-content class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-chip shadow class="mb-2 mr-2" color="primary">{{ t('chips.chips.primary') }}</va-chip>
                <va-chip shadow class="mb-2 mr-2" color="secondary">{{ t('chips.chips.secondary') }}</va-chip>
                <va-chip shadow class="mb-2 mr-2" color="success">{{ t('chips.chips.success') }}</va-chip>
                <va-chip shadow class="mb-2 mr-2" color="info">{{ t('chips.chips.info') }}</va-chip>
                <va-chip shadow class="mb-2 mr-2" color="danger">{{ t('chips.chips.danger') }}</va-chip>
                <va-chip shadow class="mb-2 mr-2" color="warning">{{ t('chips.chips.warning') }}</va-chip>
                <va-chip shadow class="mb-2 mr-2" color="gray">{{ t('chips.chips.gray') }}</va-chip>
                <va-chip shadow class="mb-2 mr-2" color="dark">{{ t('chips.chips.dark') }}</va-chip>
              </div>
            </div>
            <div class="row">
              <div class="flex xs12">
                <va-chip outline class="mb-2 mr-2" color="primary">{{ t('chips.chips.primary') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="secondary">{{ t('chips.chips.secondary') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="success">{{ t('chips.chips.success') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="info">{{ t('chips.chips.info') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="danger">{{ t('chips.chips.danger') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="warning">{{ t('chips.chips.warning') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="gray">{{ t('chips.chips.gray') }}</va-chip>
                <va-chip outline class="mb-2 mr-2" color="dark">{{ t('chips.chips.dark') }}</va-chip>
              </div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs12">
      <va-card>
        <va-card-title>{{ t('chips.badges.title') }}</va-card-title>
        <va-card-content class="row">
          <div class="flex xs12">
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2 mr-2" color="primary" :text="t('chips.badges.primary')" />
                <va-badge class="mb-2 mr-2" color="secondary" :text="t('chips.badges.secondary')" />
                <va-badge class="mb-2 mr-2" color="success" :text="t('chips.badges.success')" />
                <va-badge class="mb-2 mr-2" color="info" :text="t('chips.badges.info')" />
                <va-badge class="mb-2 mr-2" color="danger" :text="t('chips.badges.danger')" />
                <va-badge class="mb-2 mr-2" color="warning" :text="t('chips.badges.warning')" />
                <va-badge class="mb-2 mr-2" color="gray" :text="t('chips.badges.gray')" />
                <va-badge class="mb-2 mr-2" color="dark" :text="t('chips.badges.dark')" />
              </div>
            </div>
            <div class="row">
              <div class="flex xs12">
                <va-badge class="mb-2 mr-2" color="primary" :text="t('chips.badges.primary')" transparent />
                <va-badge class="mb-2 mr-2" color="secondary" :text="t('chips.badges.secondary')" transparent />
                <va-badge class="mb-2 mr-2" color="success" :text="t('chips.badges.success')" transparent />
                <va-badge class="mb-2 mr-2" color="info" :text="t('chips.badges.info')" transparent />
                <va-badge class="mb-2 mr-2" color="danger" :text="t('chips.badges.danger')" transparent />
                <va-badge class="mb-2 mr-2" color="warning" :text="t('chips.badges.warning')" transparent />
                <va-badge class="mb-2 mr-2" color="gray" :text="t('chips.badges.gray')" transparent />
                <va-badge class="mb-2 mr-2" color="dark" :text="t('chips.badges.dark')" transparent />
              </div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()
</script>
