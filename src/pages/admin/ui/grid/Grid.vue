<template>
  <div class="grid row">
    <div class="flex xs:col-span-12">
      <va-card>
        <va-card-title>{{ t('grid.fixed') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs:col-span-12">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-12</div>
            </div>
            <div v-for="i in 2" :key="`6${i}`" class="flex xs:col-span-6">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-6</div>
            </div>
            <div v-for="i in 3" :key="`4${i}`" class="flex xs:col-span-4">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-4</div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
    <div class="flex xs:col-span-12">
      <va-card>
        <va-card-title>{{ t('grid.desktop') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div v-for="i in 3" :key="`4${i}`" class="flex xs:col-span-6 lg:col-span-4">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-4</div>
            </div>
          </div>
          <div class="row">
            <div v-for="i in 6" :key="i" class="flex xs:col-span-4 lg:col-span-2">
              <div class="grid__container va-text-center" :style="computedStyle">xs2</div>
            </div>
          </div>
          <div class="row">
            <div v-for="i in 12" :key="i" class="flex xs:col-span-3 lg:col-span-1">
              <div class="grid__container va-text-center" :style="computedStyle">xs1</div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs:col-span-12">
      <va-card>
        <va-card-title>{{ t('grid.responsive') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs:col-span-12 md:col-span-4">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-12 md:col-span-4</div>
            </div>
          </div>
          <div class="row">
            <div class="flex xs:col-span-8 md:col-span-3">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-8 md:col-span-3</div>
            </div>
            <div class="flex xs:col-span-4 md:col-span-9">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-4 md:col-span-9</div>
            </div>
          </div>
          <div class="row">
            <div class="flex xs:col-span-3 md:col-span-4">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-3 md:col-span-4</div>
            </div>
            <div class="flex xs:col-span-6 md:col-span-4">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-6 md:col-span-4</div>
            </div>
            <div class="flex xs:col-span-3 md:col-span-4">
              <div class="grid__container va-text-center" :style="computedStyle">xs:col-span-3 md:col-span-4</div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex xs:col-span-12">
      <va-card>
        <va-card-title>{{ t('grid.offsets') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs:col-span-6 md:col-span-6 offset-md6">
              <div class="grid__container va-text-center" :style="computedStyle">
                xs:col-span-6 md:col-span-6 offset-md6
              </div>
            </div>
          </div>
          <div class="flex md:col-span-6 offset-md3">
            <div class="grid__container va-text-center" :style="computedStyle">md:col-span-6 offset-md3</div>
          </div>
          <div class="row">
            <div class="flex md:col-span-4">
              <div class="grid__container va-text-center" :style="computedStyle">md:col-span-4</div>
            </div>
            <div class="flex md:col-span-4 offset-md4">
              <div class="grid__container va-text-center" :style="computedStyle">md:col-span-4 offset-md4</div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useColors, useElementTextColor } from 'vuestic-ui'

  const { t } = useI18n()
  const { colors } = useColors()
  const textColor = useElementTextColor(colors.primary)
  const computedStyle = computed(() => ({
    backgroundColor: colors.primary,
    color: textColor.value,
  }))
</script>

<style lang="scss">
  .grid {
    &__container {
      min-height: 3rem;
      border-radius: 0.5rem;
      padding: 1rem;
      box-sizing: border-box;
    }
  }
</style>
