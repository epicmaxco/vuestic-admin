<template>
  <div class="grid row">
    <div class="flex xs12 md12">
      <va-card>
        <va-card-title>{{ t('grid.fixed') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs12">
              <div class="grid__container flex-center" :style="computedStyle">xs12</div>
            </div>
            <div v-for="i in 2" :key="`6${i}`" class="flex xs6">
              <div class="grid__container flex-center" :style="computedStyle">xs6</div>
            </div>
            <div v-for="i in 3" :key="`4${i}`" class="flex xs4">
              <div class="grid__container flex-center" :style="computedStyle">xs4</div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
    <div class="flex md12 xs12">
      <va-card>
        <va-card-title>{{ t('grid.desktop') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div v-for="i in 3" :key="`4${i}`" class="flex xs6 lg4">
              <div class="grid__container flex-center" :style="computedStyle">xs4</div>
            </div>
          </div>
          <div class="row">
            <div v-for="i in 6" :key="i" class="flex xs4 lg2">
              <div class="grid__container flex-center" :style="computedStyle">xs2</div>
            </div>
          </div>
          <div class="row">
            <div v-for="i in 12" :key="i" class="flex xs3 lg1">
              <div class="grid__container flex-center" :style="computedStyle">xs1</div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex md12 xs12">
      <va-card>
        <va-card-title>{{ t('grid.responsive') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs12 md4">
              <div class="grid__container flex-center" :style="computedStyle">xs12 md4</div>
            </div>
          </div>
          <div class="row">
            <div class="flex xs8 md3">
              <div class="grid__container flex-center" :style="computedStyle">xs8 md3</div>
            </div>
            <div class="flex xs4 md9">
              <div class="grid__container flex-center" :style="computedStyle">xs4 md9</div>
            </div>
          </div>
          <div class="row">
            <div class="flex xs3 md4">
              <div class="grid__container flex-center" :style="computedStyle">xs3 md4</div>
            </div>
            <div class="flex xs6 md4">
              <div class="grid__container flex-center" :style="computedStyle">xs6 md4</div>
            </div>
            <div class="flex xs3 md4">
              <div class="grid__container flex-center" :style="computedStyle">xs3 md4</div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>

    <div class="flex md12 xs12">
      <va-card>
        <va-card-title>{{ t('grid.offsets') }}</va-card-title>
        <va-card-content>
          <div class="row">
            <div class="flex xs6 md6 offset--md6">
              <div class="grid__container flex-center" :style="computedStyle">xs6 md6 offset--md6</div>
            </div>
          </div>
          <div class="flex md6 offset--md3">
            <div class="grid__container flex-center" :style="computedStyle">md6 offset--md3</div>
          </div>
          <div class="row">
            <div class="flex md4">
              <div class="grid__container flex-center" :style="computedStyle">md4</div>
            </div>
            <div class="flex md4 offset--md4">
              <div class="grid__container flex-center" :style="computedStyle">md4 offset--md4</div>
            </div>
          </div>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useGlobalConfig } from 'vuestic-ui'

  const { t } = useI18n()

  const theme = ref(useGlobalConfig().getGlobalConfig().colors!)

  const computedStyle = computed(() => ({ backgroundColor: theme.value.primary }))
</script>

<style lang="scss">
  .grid {
    &__container {
      min-height: 3rem;
      color: var(--va-white);
      border-radius: 0.5rem;
      padding: 1rem;
      box-sizing: border-box;
    }
  }
</style>
