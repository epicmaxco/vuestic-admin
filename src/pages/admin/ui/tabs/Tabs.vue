<template>
  <div class="tabs grid grid-cols-12 gap-6">
    <va-card class="col-span-12 md:col-span-6">
      <va-card-title>{{ t('tabs.alignment') }}</va-card-title>
      <va-card-content class="grid grid-cols-12 gap-6">
        <div class="col-span-12">
          <va-tabs v-model="tabValue" style="width: 100%; min-width: 250px">
            <template #tabs>
              <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </va-tab>
            </template>
          </va-tabs>
        </div>
        <div class="col-span-12">
          <va-tabs v-model="tabValue" right style="width: 100%; min-width: 250px">
            <template #tabs>
              <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </va-tab>
            </template>
          </va-tabs>
        </div>
        <div class="col-span-12">
          <va-tabs v-model="tabValue" center style="width: 100%; min-width: 250px">
            <template #tabs>
              <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </va-tab>
            </template>
          </va-tabs>
        </div>
      </va-card-content>
    </va-card>

    <div class="col-span-12 md:col-span-6 grid grid-cols-12 gap-6">
      <va-card class="col-span-12">
        <va-card-title>{{ t('tabs.overflow') }}</va-card-title>
        <va-card-content>
          <va-tabs v-model="tabValue">
            <template #tabs>
              <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </va-tab>
              <va-tab> Somewhat long long long long long long long long long text </va-tab>
            </template>
          </va-tabs>
        </va-card-content>
      </va-card>

      <va-card class="col-span-12">
        <va-card-title>{{ t('tabs.hidden') }}</va-card-title>
        <va-card-content>
          <va-tabs v-model="tabValue" hide-slider>
            <template #tabs>
              <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </va-tab>
            </template>
          </va-tabs>
        </va-card-content>
      </va-card>
    </div>

    <va-card class="col-span-12">
      <va-card-title>{{ t('tabs.grow') }}</va-card-title>
      <va-card-content>
        <va-tabs v-model="tabValue" class="w-fill" grow>
          <template #tabs>
            <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
              {{ title }}
            </va-tab>
          </template>
        </va-tabs>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const tabTitles = ref(['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'])
  const tabValue = ref(1)
</script>
