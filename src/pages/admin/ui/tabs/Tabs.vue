<template>
  <div class="grid row">
    <div class="flex xs12 md6">
      <va-card class="fill-height" style="overflow-x: auto">
        <va-card-title>{{ t('tabs.alignment') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs12">
              <va-tabs v-model="tabValue" style="width: 100%; min-width: 250px">
                <template #tabs>
                  <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                    {{ title }}
                  </va-tab>
                </template>
              </va-tabs>
            </div>
            <div class="flex xs12">
              <va-tabs v-model="tabValue" right style="width: 100%; min-width: 250px">
                <template #tabs>
                  <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                    {{ title }}
                  </va-tab>
                </template>
              </va-tabs>
            </div>
            <div class="flex xs12">
              <va-tabs v-model="tabValue" center style="width: 100%; min-width: 250px">
                <template #tabs>
                  <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                    {{ title }}
                  </va-tab>
                </template>
              </va-tabs>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
    <div class="flex xs12 md6">
      <div class="row column">
        <div class="flex">
          <va-card>
            <va-card-title>{{ t('tabs.overflow') }}</va-card-title>
            <va-card-content>
              <div class="row">
                <div class="flex xs12">
                  <va-tabs v-model="tabValue">
                    <template #tabs>
                      <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                        {{ title }}
                      </va-tab>
                      <va-tab> Somewhat long long long long long long long long long text </va-tab>
                    </template>
                  </va-tabs>
                </div>
              </div>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex">
          <va-card>
            <va-card-title>{{ t('tabs.hidden') }}</va-card-title>
            <va-card-content>
              <div class="row">
                <div class="flex xs12">
                  <va-tabs v-model="tabValue" hide-slider>
                    <template #tabs>
                      <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                        {{ title }}
                      </va-tab>
                    </template>
                  </va-tabs>
                </div>
              </div>
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>

    <div class="flex xs12">
      <va-card style="overflow-x: auto">
        <va-card-title>{{ t('tabs.grow') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs12">
              <va-tabs v-model="tabValue" grow style="width: 100%">
                <template #tabs>
                  <va-tab v-for="title in tabTitles.slice(0, 3)" :key="title">
                    {{ title }}
                  </va-tab>
                </template>
              </va-tabs>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  const tabTitles = ref(['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'])
  const tabValue = ref(1)
</script>
