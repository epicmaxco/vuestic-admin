<template>
  <div class="cards">
    <div class="cards-container grid grid-cols-12 items-start gap-6 wrap">
      <template v-for="loop in listLoops" :key="loop + '-0'">
        <VaCard class="col-span-12 sm:col-span-6">
          <VaCardTitle>{{ t('cards.title.default') }}</VaCardTitle>
          <VaCardContent>{{ t('cards.contentTextLong') }}</VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6">
          <VaCardTitle>
            {{ t('cards.title.withControls') }}
            <VaSpacer />
            <VaButton class="mr-1" icon="refresh" size="small" />
            <VaButton icon="gear" size="small" />
          </VaCardTitle>
          <VaCardContent>{{ t('cards.contentTextLong') }}</VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6">
          <VaCardTitle>
            <VaIcon class="mr-4" name="cogs" />
            {{ t('cards.title.customHeader') }}
          </VaCardTitle>
          <VaCardContent>{{ t('cards.contentTextLong') }}</VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6">
          <VaCardContent>
            <p>{{ t('cards.title.withoutHeader') }}</p>
            {{ t('cards.contentTextLong') }}
          </VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6 md:col-span-3">
          <VaImage src="https://picsum.photos/300/200/?image=1043" style="height: 200px" />
          <VaCardTitle>{{ t('cards.title.withImage') }}</VaCardTitle>
          <VaCardContent>{{ t('cards.contentText') }}</VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6 md:col-span-3">
          <VaImage src="https://picsum.photos/300/200/?image=898" style="height: 200px">
            <VaCardTitle text-color="#fff">{{ t('cards.title.withTitleOnImage') }}</VaCardTitle>
          </VaImage>
          <VaCardContent>{{ t('cards.contentText') }}</VaCardContent>
        </VaCard>

        <VaCard class="w-full col-span-12 sm:col-span-6 md:col-span-3">
          <VaImage src="https://picsum.photos/300/200/?image=898" style="height: 200px">
            <VaButton class="m-0">
              {{ t('cards.button.readMore') }}
            </VaButton>
          </VaImage>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="danger">
          <VaCardTitle>{{ t('cards.title.withStripe') }}</VaCardTitle>
          <VaCardContent>{{ t('cards.contentTextLong') }}</VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6 md:col-span-3" color="success">
          <VaCardContent>{{ t('cards.contentTextLong') }}</VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6 md:col-span-3" color="danger">
          <VaCardContent>{{ t('cards.contentTextLong') }}</VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6 md:col-span-3" stripe stripe-color="info">
          <VaCardTitle>{{ t('cards.title.withStripe') }}</VaCardTitle>
          <VaCardContent>{{ t('cards.contentTextLong') }}</VaCardContent>
        </VaCard>

        <VaCard class="col-span-12 sm:col-span-6 md:col-span-3">
          <VaImage class="h-[200px]" src="https://picsum.photos/300/200/?image=1067">
            <VaCardTitle text-color="#fff">{{ t('cards.title.withTitleOnImage') }}</VaCardTitle>
          </VaImage>
          <VaCardContent>{{ t('cards.contentText') }}</VaCardContent>
        </VaCard>
      </template>
    </div>

    <VaInnerLoading :loading="isLoading" class="w-full py-4 justify-center">
      <VaButton @click="addCards()">
        {{ t('cards.button.showMore') }}
      </VaButton>
    </VaInnerLoading>
  </div>
</template>

<script lang="ts" setup>
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
