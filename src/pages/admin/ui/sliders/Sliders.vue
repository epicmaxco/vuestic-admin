<template>
  <div class="sliders">
    <div class="row">
      <div class="flex md12">
        <va-card>
          <va-card-title>{{ t('sliders.slider') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.primary }">{{ t('sliders.simple') }}</div>
              <va-slider v-model="value" />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.danger }">{{ t('sliders.value') }}</div>
              <va-slider v-model="value" color="danger" track-label-visible />
            </div>
            <div class="flex d-flex xs12 lg6 xl4 mb-2">
              <va-slider v-model="value" :label="t('sliders.label')" color="info" track-label-visible />
            </div>
            <div class="flex d-flex xs12 lg6 xl4 mb-2">
              <va-slider v-model="value" :label="t('sliders.label')" invert-label color="warning" track-label-visible />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.primary }">{{ t('sliders.labelPlusIcon') }}</div>
              <va-slider v-model="value" :label="t('sliders.label')" icon-append="music" />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.danger }">
                {{ t('sliders.labelPlusIcon') }}
              </div>
              <va-slider
                v-model="value"
                color="danger"
                :label="t('sliders.label')"
                invert-label
                icon-prepend="music"
                track-label-visible
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.primary }">{{ t('sliders.pins') }}</div>
              <va-slider v-model="value" pins :step="20" />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title title--warning mb-3" :style="{ color: theme?.warning }">
                {{ t('sliders.pinsAndValue') }}
              </div>
              <va-slider v-model="value" pins :step="10" color="warning" track-label-visible />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.primary }">{{ t('sliders.withInput') }}</div>
              <va-slider v-model="value" track-label-visible>
                <template #prepend>
                  <va-input v-model.number="value" style="width: 70px" type="number"></va-input>
                </template>
              </va-slider>
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.info }">{{ t('sliders.withIcons') }}</div>
              <va-slider
                v-model="value"
                color="info"
                icon-prepend="volume_off"
                icon-append="volume_up"
                track-label-visible
              />
            </div>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex md12">
        <va-card>
          <va-card-title>{{ t('sliders.range') }}</va-card-title>
          <va-card-content class="row">
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.primary }">{{ t('sliders.simple') }}</div>
              <va-slider v-model="value2" range />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.danger }">{{ t('sliders.value') }}</div>
              <va-slider v-model="value2" range color="danger" track-label-visible />
            </div>
            <div class="flex d-flex xs12 lg6 xl4 mb-2">
              <va-slider v-model="value2" range :label="t('sliders.label')" color="info" track-label-visible />
            </div>
            <div class="flex d-flex xs12 lg6 xl4 mb-2">
              <va-slider
                v-model="value2"
                range
                :label="t('sliders.label')"
                invert-label
                color="warning"
                track-label-visible
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.primary }">{{ t('sliders.labelPlusIcon') }}</div>
              <va-slider v-model="value2" range :label="t('sliders.label')" icon-append="music" />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.danger }">{{ t('sliders.labelPlusIcon') }}</div>
              <va-slider
                v-model="value2"
                range
                color="danger"
                :label="t('sliders.label')"
                icon-prepend="music"
                invert-label
                track-label-visible
              />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.primary }">{{ t('sliders.pins') }}</div>
              <va-slider v-model="value2" range pins :step="20" />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title title--warning mb-3" :style="{ color: theme?.warning }">
                {{ t('sliders.pinsAndValue') }}
              </div>
              <va-slider v-model="value2" range pins :step="10" color="warning" track-label-visible />
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.primary }">{{ t('sliders.withInput') }}</div>
              <va-slider v-model="value2" range track-label-visible>
                <template #prepend>
                  <va-input v-model.number="value2[0]" style="width: 70px" type="number"></va-input>
                </template>
                <template #append>
                  <va-input v-model.number="value2[1]" style="width: 70px" type="number"></va-input>
                </template>
              </va-slider>
            </div>
            <div class="flex xs12 lg6 xl4 mb-2">
              <div class="title mb-3" :style="{ color: theme?.info }">{{ t('sliders.withIcons') }}</div>
              <va-slider
                v-model="value2"
                range
                color="info"
                icon-prepend="volume_off"
                icon-append="volume_up"
                track-label-visible
              />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useGlobalConfig } from 'vuestic-ui'

  const { t } = useI18n()
  const { getGlobalConfig } = useGlobalConfig()

  const theme = computed(() => getGlobalConfig().colors)

  const value = ref(90)
  const value2 = ref([20, 60])
</script>
