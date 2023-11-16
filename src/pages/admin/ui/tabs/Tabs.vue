<template>
  <div class="tabs grid grid-cols-12 gap-6">
    <VaCard class="col-span-12 md:col-span-6">
      <VaCardTitle>{{ t('tabs.alignment') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <div class="col-span-12">
          <VaTabs v-model="tabValue" style="width: 100%; min-width: 250px">
            <template #tabs>
              <VaTab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </VaTab>
            </template>
          </VaTabs>
        </div>
        <div class="col-span-12">
          <VaTabs v-model="tabValue" right style="width: 100%; min-width: 250px">
            <template #tabs>
              <VaTab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </VaTab>
            </template>
          </VaTabs>
        </div>
        <div class="col-span-12">
          <VaTabs v-model="tabValue" center style="width: 100%; min-width: 250px">
            <template #tabs>
              <VaTab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </VaTab>
            </template>
          </VaTabs>
        </div>
      </VaCardContent>
    </VaCard>

    <div class="col-span-12 md:col-span-6 grid grid-cols-12 gap-6">
      <VaCard class="col-span-12">
        <VaCardTitle>{{ t('tabs.overflow') }}</VaCardTitle>
        <VaCardContent>
          <VaTabs v-model="tabValue">
            <template #tabs>
              <VaTab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </VaTab>
              <VaTab> Somewhat long long long long long long long long long text</VaTab>
            </template>
          </VaTabs>
        </VaCardContent>
      </VaCard>

      <VaCard class="col-span-12">
        <VaCardTitle>{{ t('tabs.hidden') }}</VaCardTitle>
        <VaCardContent>
          <VaTabs v-model="tabValue" hide-slider>
            <template #tabs>
              <VaTab v-for="title in tabTitles.slice(0, 3)" :key="title">
                {{ title }}
              </VaTab>
            </template>
          </VaTabs>
        </VaCardContent>
      </VaCard>
    </div>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('tabs.grow') }}</VaCardTitle>
      <VaCardContent>
        <VaTabs v-model="tabValue" class="w-fill" grow>
          <template #tabs>
            <VaTab v-for="title in tabTitles.slice(0, 3)" :key="title">
              {{ title }}
            </VaTab>
          </template>
        </VaTabs>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const tabTitles = ref(['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'])
const tabValue = ref(1)
</script>
