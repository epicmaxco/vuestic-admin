<template>
  <div class="collapse-page grid grid-cols-12 gap-6">
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('collapse.basic') }}</VaCardTitle>
      <VaCardContent>
        <VaAccordion v-model="basicAccordionValue">
          <VaCollapse :header="t('collapse.firstHeader')">
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </VaCollapse>
          <VaCollapse :header="t('collapse.secondHeader')">
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </VaCollapse>
        </VaAccordion>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('collapse.collapseWithBackground') }}</VaCardTitle>
      <VaCardContent>
        <VaAccordion v-model="colorAccordionValue">
          <VaCollapse :header="t('collapse.firstHeader')" color="success" color-all>
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </VaCollapse>
          <VaCollapse :header="t('collapse.secondHeader')" color="warning" color-all>
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </VaCollapse>
        </VaAccordion>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('collapse.collapseWithCustomHeader') }}</VaCardTitle>
      <VaCardContent>
        <VaAccordion v-model="customHeaderAccordionValue">
          <VaCollapse class="mb-8">
            <template #header>
              <VaButton class="w-full">
                {{ t('collapse.firstHeader') }}
              </VaButton>
            </template>
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </VaCollapse>
          <VaCollapse>
            <template #header>
              <VaButton class="w-full">
                {{ t('collapse.secondHeader') }}
              </VaButton>
            </template>
            <div>
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div class="p-4">
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </VaCollapse>
        </VaAccordion>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const basicAccordionValue = ref([false, false])
const colorAccordionValue = ref([false, false])
const customHeaderAccordionValue = ref([false, false])
</script>
