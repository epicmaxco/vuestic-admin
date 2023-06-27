<template>
  <div class="cards">
    <div class="cards-container grid grid-cols-12 items-start gap-6 wrap">
      <template v-for="loop in listLoops" :key="loop + '-0'">
        <va-card class="col-span-12 sm:col-span-6">
          <va-card-title>{{ t('cards.title.default') }}</va-card-title>
          <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6">
          <va-card-title>
            {{ t('cards.title.withControls') }}
            <va-spacer />
            <va-button class="mr-1" size="small" icon="refresh" />
            <va-button size="small" icon="gear" />
          </va-card-title>
          <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6">
          <va-card-title>
            <va-icon class="mr-4" name="cogs" />
            {{ t('cards.title.customHeader') }}
          </va-card-title>
          <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6">
          <va-card-content>
            <p>{{ t('cards.title.withoutHeader') }}</p>
            {{ t('cards.contentTextLong') }}
          </va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6 md:col-span-3">
          <va-image src="https://picsum.photos/300/200/?image=1043" style="height: 200px" />
          <va-card-title>{{ t('cards.title.withImage') }}</va-card-title>
          <va-card-content>{{ t('cards.contentText') }}</va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6 md:col-span-3">
          <va-image src="https://picsum.photos/300/200/?image=898" style="height: 200px">
            <va-card-title text-color="#fff">{{ t('cards.title.withTitleOnImage') }}</va-card-title>
          </va-image>
          <va-card-content>{{ t('cards.contentText') }}</va-card-content>
        </va-card>

        <va-card class="w-full col-span-12 sm:col-span-6 md:col-span-3">
          <va-image src="https://picsum.photos/300/200/?image=898" style="height: 200px">
            <va-button class="m-0">
              {{ t('cards.button.readMore') }}
            </va-button>
          </va-image>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="danger">
          <va-card-title>{{ t('cards.title.withStripe') }}</va-card-title>
          <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6 md:col-span-3" color="success">
          <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6 md:col-span-3" color="danger">
          <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="info">
          <va-card-title>{{ t('cards.title.withStripe') }}</va-card-title>
          <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
        </va-card>

        <va-card class="col-span-12 sm:col-span-6 md:col-span-3">
          <va-image class="h-[200px]" src="https://picsum.photos/300/200/?image=1067">
            <va-card-title text-color="#fff">{{ t('cards.title.withTitleOnImage') }}</va-card-title>
          </va-image>
          <va-card-content>{{ t('cards.contentText') }}</va-card-content>
        </va-card>
      </template>
    </div>

    <va-inner-loading class="w-full py-4 justify-center" :loading="isLoading">
      <va-button @click="addCards()">
        {{ t('cards.button.showMore') }}
      </va-button>
    </va-inner-loading>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const listLoops = ref(1)
  const isLoading = ref(false)

  function addCards() {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
      ++listLoops.value
    }, 1000)
  }
</script>
