<template>
  <div class="collapse-page grid grid-cols-12 gap-6">
    <va-card class="col-span-12">
      <va-card-title>{{ t('collapse.basic') }}</va-card-title>
      <va-card-content>
        <va-accordion v-model="basicAccordionValue">
          <va-collapse :header="t('collapse.firstHeader')">
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </va-collapse>
          <va-collapse :header="t('collapse.secondHeader')">
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </va-collapse>
        </va-accordion>
      </va-card-content>
    </va-card>

    <va-card class="col-span-12">
      <va-card-title>{{ t('collapse.collapseWithBackground') }}</va-card-title>
      <va-card-content>
        <va-accordion v-model="colorAccordionValue">
          <va-collapse :header="t('collapse.firstHeader')" color="success" color-all>
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </va-collapse>
          <va-collapse :header="t('collapse.secondHeader')" color="warning" color-all>
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </va-collapse>
        </va-accordion>
      </va-card-content>
    </va-card>

    <va-card class="col-span-12">
      <va-card-title>{{ t('collapse.collapseWithCustomHeader') }}</va-card-title>
      <va-card-content>
        <va-accordion v-model="customHeaderAccordionValue">
          <va-collapse class="mb-8">
            <template #header>
              <va-button class="w-full">
                {{ t('collapse.firstHeader') }}
              </va-button>
            </template>
            <div class="p-4">
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div>
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </va-collapse>
          <va-collapse>
            <template #header>
              <va-button class="w-full">
                {{ t('collapse.secondHeader') }}
              </va-button>
            </template>
            <div>
              <p class="va-h3">{{ t('collapse.content.title') }}</p>
              <div class="p-4">
                {{ t('collapse.content.text') }}
              </div>
            </div>
          </va-collapse>
        </va-accordion>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const basicAccordionValue = ref([false, false])
  const colorAccordionValue = ref([false, false])
  const customHeaderAccordionValue = ref([false, false])
</script>
