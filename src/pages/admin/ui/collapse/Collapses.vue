<template>
  <div class="collapse-page">
    <div class="row">
      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ t('collapse.basic') }}</va-card-title>
          <va-card-content>
            <va-accordion v-model="basicAccordionValue">
              <va-collapse :header="t('collapse.firstHeader')">
                <div class="pa-3">
                  <p class="display-3">{{ t('collapse.content.title') }}</p>
                  <div>
                    {{ t('collapse.content.text') }}
                  </div>
                </div>
              </va-collapse>
              <va-collapse :header="t('collapse.secondHeader')">
                <div class="pa-3">
                  <p class="display-3">{{ t('collapse.content.title') }}</p>
                  <div>
                    {{ t('collapse.content.text') }}
                  </div>
                </div>
              </va-collapse>
            </va-accordion>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ t('collapse.collapseWithBackground') }}</va-card-title>
          <va-card-content>
            <va-accordion v-model="colorAccordionValue">
              <va-collapse :header="t('collapse.firstHeader')" color="success" color-all>
                <div class="pa-3">
                  <p class="display-3">{{ t('collapse.content.title') }}</p>
                  <div>
                    {{ t('collapse.content.text') }}
                  </div>
                </div>
              </va-collapse>
              <va-collapse :header="t('collapse.secondHeader')" color="warning" color-all>
                <div class="pa-3">
                  <p class="display-3">{{ t('collapse.content.title') }}</p>
                  <div>
                    {{ t('collapse.content.text') }}
                  </div>
                </div>
              </va-collapse>
            </va-accordion>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex xs12">
        <va-card>
          <va-card-title>{{ t('collapse.collapseWithCustomHeader') }}</va-card-title>
          <va-card-content>
            <va-accordion v-model="customHeaderAccordionValue">
              <va-collapse class="mb-4">
                <template #header>
                  <va-button style="width: 100%">
                    {{ t('collapse.firstHeader') }}
                  </va-button>
                </template>
                <div class="pa-3">
                  <p class="display-3">{{ t('collapse.content.title') }}</p>
                  <div>
                    {{ t('collapse.content.text') }}
                  </div>
                </div>
              </va-collapse>
              <va-collapse>
                <template #header>
                  <va-button style="width: 100%">
                    {{ t('collapse.secondHeader') }}
                  </va-button>
                </template>
                <div>
                  <p class="display-3">{{ t('collapse.content.title') }}</p>
                  <div class="pa-3">
                    {{ t('collapse.content.text') }}
                  </div>
                </div>
              </va-collapse>
            </va-accordion>
          </va-card-content>
        </va-card>
      </div>
    </div>
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
