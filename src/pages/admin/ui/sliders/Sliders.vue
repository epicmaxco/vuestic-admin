<template>
  <div class="sliders grid grid-cols-12 gap-6">
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('sliders.slider') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.primary }">{{ t('sliders.simple') }}</div>
          <VaSlider v-model="value" />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.danger }">{{ t('sliders.value') }}</div>
          <VaSlider v-model="value" color="danger" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.info }">{{ t('sliders.label') }}</div>
          <VaSlider v-model="value" :label="t('sliders.label')" color="info" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.warning }">{{ t('sliders.label') }}</div>
          <VaSlider v-model="value" :label="t('sliders.label')" invert-label color="warning" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.primary }">
            {{ t('sliders.labelPlusIcon') }}
          </div>
          <VaSlider v-model="value" :label="t('sliders.label')" icon-append="music" />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.danger }">
            {{ t('sliders.labelPlusIcon') }}
          </div>
          <VaSlider
            v-model="value"
            color="danger"
            :label="t('sliders.label')"
            invert-label
            icon-prepend="music"
            track-label-visible
          />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.primary }">{{ t('sliders.pins') }}</div>
          <VaSlider v-model="value" pins :step="20" />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title title--warning mb-4" :style="{ color: colors.warning }">
            {{ t('sliders.pinsAndValue') }}
          </div>
          <VaSlider v-model="value" pins :step="10" color="warning" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.primary }">{{ t('sliders.withInput') }}</div>
          <VaSlider v-model="value" track-label-visible>
            <template #prepend>
              <VaInput v-model.number="value" style="width: 70px" type="number"></VaInput>
            </template>
          </VaSlider>
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.info }">{{ t('sliders.withIcons') }}</div>
          <VaSlider
            v-model="value"
            color="info"
            icon-prepend="volume_off"
            icon-append="volume_up"
            track-label-visible
          />
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('sliders.range') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.primary }">{{ t('sliders.simple') }}</div>
          <VaSlider v-model="value2" range />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.danger }">{{ t('sliders.value') }}</div>
          <VaSlider v-model="value2" range color="danger" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.info }">{{ t('sliders.label') }}</div>
          <VaSlider v-model="value2" range :label="t('sliders.label')" color="info" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.warning }">{{ t('sliders.label') }}</div>
          <VaSlider
            v-model="value2"
            range
            :label="t('sliders.label')"
            invert-label
            color="warning"
            track-label-visible
          />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.primary }">
            {{ t('sliders.labelPlusIcon') }}
          </div>
          <VaSlider v-model="value2" range :label="t('sliders.label')" icon-append="music" />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.danger }">
            {{ t('sliders.labelPlusIcon') }}
          </div>
          <VaSlider
            v-model="value2"
            range
            color="danger"
            :label="t('sliders.label')"
            icon-prepend="music"
            invert-label
            track-label-visible
          />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.primary }">{{ t('sliders.pins') }}</div>
          <VaSlider v-model="value2" range pins :step="20" />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title title--warning mb-4" :style="{ color: colors.warning }">
            {{ t('sliders.pinsAndValue') }}
          </div>
          <VaSlider v-model="value2" range pins :step="10" color="warning" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.primary }">{{ t('sliders.withInput') }}</div>
          <VaSlider v-model="value2" range track-label-visible>
            <template #prepend>
              <VaInput v-model.number="value2[0]" style="width: 70px" type="number"></VaInput>
            </template>
            <template #append>
              <VaInput v-model.number="value2[1]" style="width: 70px" type="number"></VaInput>
            </template>
          </VaSlider>
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div class="title mb-4" :style="{ color: colors.info }">{{ t('sliders.withIcons') }}</div>
          <VaSlider
            v-model="value2"
            range
            color="info"
            icon-prepend="volume_off"
            icon-append="volume_up"
            track-label-visible
          />
        </div>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'

  const { t } = useI18n()
  const { colors } = useColors()

  const value = ref(90)
  const value2 = ref([20, 60])
</script>
