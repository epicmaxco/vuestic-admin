<template>
  <div class="sliders grid grid-cols-12 gap-6">
    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('sliders.slider') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.primary }" class="title mb-4">{{ t('sliders.simple') }}</div>
          <VaSlider v-model="value" />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.danger }" class="title mb-4">{{ t('sliders.value') }}</div>
          <VaSlider v-model="value" color="danger" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.info }" class="title mb-4">{{ t('sliders.label') }}</div>
          <VaSlider v-model="value" :label="t('sliders.label')" color="info" track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.warning }" class="title mb-4">{{ t('sliders.label') }}</div>
          <VaSlider v-model="value" :label="t('sliders.label')" color="warning" invert-label track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.primary }" class="title mb-4">
            {{ t('sliders.labelPlusIcon') }}
          </div>
          <VaSlider v-model="value" :label="t('sliders.label')" icon-append="music" />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.danger }" class="title mb-4">
            {{ t('sliders.labelPlusIcon') }}
          </div>
          <VaSlider
            v-model="value"
            :label="t('sliders.label')"
            color="danger"
            icon-prepend="music"
            invert-label
            track-label-visible
          />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.primary }" class="title mb-4">{{ t('sliders.pins') }}</div>
          <VaSlider v-model="value" :step="20" pins />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.warning }" class="title title--warning mb-4">
            {{ t('sliders.pinsAndValue') }}
          </div>
          <VaSlider v-model="value" :step="10" color="warning" pins track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.primary }" class="title mb-4">{{ t('sliders.withInput') }}</div>
          <VaSlider v-model="value" track-label-visible>
            <template #prepend>
              <VaInput v-model.number="value" style="width: 70px" type="number"></VaInput>
            </template>
          </VaSlider>
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.info }" class="title mb-4">{{ t('sliders.withIcons') }}</div>
          <VaSlider
            v-model="value"
            color="info"
            icon-append="volume_up"
            icon-prepend="volume_off"
            track-label-visible
          />
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12">
      <VaCardTitle>{{ t('sliders.range') }}</VaCardTitle>
      <VaCardContent class="grid grid-cols-12 gap-6">
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.primary }" class="title mb-4">{{ t('sliders.simple') }}</div>
          <VaSlider v-model="value2" range />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.danger }" class="title mb-4">{{ t('sliders.value') }}</div>
          <VaSlider v-model="value2" color="danger" range track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.info }" class="title mb-4">{{ t('sliders.label') }}</div>
          <VaSlider v-model="value2" :label="t('sliders.label')" color="info" range track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.warning }" class="title mb-4">{{ t('sliders.label') }}</div>
          <VaSlider
            v-model="value2"
            :label="t('sliders.label')"
            color="warning"
            invert-label
            range
            track-label-visible
          />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.primary }" class="title mb-4">
            {{ t('sliders.labelPlusIcon') }}
          </div>
          <VaSlider v-model="value2" :label="t('sliders.label')" icon-append="music" range />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.danger }" class="title mb-4">
            {{ t('sliders.labelPlusIcon') }}
          </div>
          <VaSlider
            v-model="value2"
            :label="t('sliders.label')"
            color="danger"
            icon-prepend="music"
            invert-label
            range
            track-label-visible
          />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.primary }" class="title mb-4">{{ t('sliders.pins') }}</div>
          <VaSlider v-model="value2" :step="20" pins range />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.warning }" class="title title--warning mb-4">
            {{ t('sliders.pinsAndValue') }}
          </div>
          <VaSlider v-model="value2" :step="10" color="warning" pins range track-label-visible />
        </div>
        <div class="flex flex-col col-span-12 lg:col-span-6 xl:col-span-4 mb-2">
          <div :style="{ color: colors.primary }" class="title mb-4">{{ t('sliders.withInput') }}</div>
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
          <div :style="{ color: colors.info }" class="title mb-4">{{ t('sliders.withIcons') }}</div>
          <VaSlider
            v-model="value2"
            color="info"
            icon-append="volume_up"
            icon-prepend="volume_off"
            range
            track-label-visible
          />
        </div>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useColors } from 'vuestic-ui'

const { t } = useI18n()
const { colors } = useColors()

const value = ref(90)
const value2 = ref([20, 60])
</script>
