<template>
  <div class="spacing-playground">
    <div class="row">
      <div class="flex xs12 sm6 md4">
        <va-select
          v-model="selectedMarginDirection"
          :options="directionList"
          :label="t('spacingPlayground.margin')"
          :max-height="null"
          no-clear
        />
      </div>
      <div class="flex xs12 sm6 md2">
        <va-select
          v-model="selectedMarginSize"
          :options="sizesList"
          :label="t('spacingPlayground.value')"
          :max-height="null"
          no-clear
        />
      </div>
      <div class="flex xs12 sm6 md4">
        <va-select
          v-model="selectedPaddingDirection"
          :options="directionList"
          :label="t('spacingPlayground.padding')"
          :max-height="null"
          no-clear
        />
      </div>
      <div class="flex xs12 sm6 md2">
        <va-select
          v-model="selectedPaddingSize"
          :options="sizesList"
          :label="t('spacingPlayground.value')"
          :max-height="null"
          no-clear
        />
      </div>
    </div>

    <div v-if="selectedMarginClass || selectedPaddingClass" class="row">
      <div class="flex xs12 content">
        <pre class="code">class="{{ (selectedMarginClass + ' ' + selectedPaddingClass).trim() }}"</pre>
      </div>
    </div>
    <div class="row">
      <div class="flex xs12">
        <div class="playground-component">
          <div class="playground-component__margin" :class="selectedMarginClass">
            <div class="playground-component__padding" :class="selectedPaddingClass">
              <div class="playground-component__inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="flex xs12 sm6">
        <color-presentation color="#ffd093" :name="t('spacingPlayground.margin')" :width="40" />
      </div>
      <div class="flex xs12 sm6">
        <color-presentation color="#c9f7db" :name="t('spacingPlayground.padding')" :width="40" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import ColorPresentation from '../colors/color-presentation/ColorPresentation.vue'

  const { t } = useI18n()

  const directionList = ref(['a', 'y', 'x', 't', 'r', 'b', 'l'])
  const sizesList = ref(['1', '2', '3', '4', '5', 'auto'])
  const selectedMarginDirection = ref('y')
  const selectedPaddingDirection = ref('x')
  const selectedMarginSize = ref('3')
  const selectedPaddingSize = ref('3')

  const selectedMarginClass = computed(() => {
    return selectedMarginDirection.value && selectedMarginSize.value
      ? `m${selectedMarginDirection.value}-${selectedMarginSize.value}`
      : ''
  })

  const selectedPaddingClass = computed(() => {
    return selectedPaddingDirection.value && selectedPaddingSize.value
      ? `p${selectedPaddingDirection.value}-${selectedPaddingSize.value}`
      : ''
  })
</script>

<style lang="scss">
  .spacing-playground {
    .playground-component {
      display: flex;
      background-color: #ffd093;

      &__margin {
        width: 100%;
      }

      &__padding {
        background-color: #c9f7db;
      }

      &__inner {
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.2);
        height: 20px;
      }
    }
  }
</style>
