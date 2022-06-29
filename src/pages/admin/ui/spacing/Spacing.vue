<template>
  <div class="spacing flex xs12 md12">
    <va-card>
      <va-card-title>{{ t("spacing.title") }}</va-card-title>
      <va-card-content>
        <spacing-playgroud :title="''" />
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  import SpacingPlaygroud from "./SpacingPlaygroud.vue";
</script>
