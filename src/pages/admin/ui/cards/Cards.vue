<template>
  <div class="cards">
    <div class="cards-container row d-flex wrap align--start">
      <template v-for="loop in listLoops" :key="loop + '-0'">
        <div class="flex xs12 sm6">
          <va-card>
            <va-card-title>{{ t('cards.title.default') }}</va-card-title>
            <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6">
          <va-card>
            <va-card-title>
              {{ t('cards.title.withControls') }}
              <va-spacer />
              <va-button class="mr-1" size="small" icon="refresh" />
              <va-button size="small" icon="gear" />
            </va-card-title>
            <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6">
          <va-card>
            <va-card-title>
              <va-icon class="mr-3" name="cogs" />
              {{ t('cards.title.customHeader') }}
            </va-card-title>
            <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6">
          <va-card>
            <va-card-content>
              <p>{{ t('cards.title.withoutHeader') }}</p>
              {{ t('cards.contentTextLong') }}
            </va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6 lg4 xl3">
          <va-card>
            <va-image src="https://picsum.photos/300/200/?image=1043" style="height: 200px" />
            <va-card-title>{{ t('cards.title.withImage') }}</va-card-title>
            <va-card-content>{{ t('cards.contentText') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6 lg4 xl3">
          <va-card>
            <va-image src="https://picsum.photos/300/200/?image=898" style="height: 200px">
              <va-card-title text-color="#fff">{{ t('cards.title.withTitleOnImage') }}</va-card-title>
            </va-image>
            <va-card-content>{{ t('cards.contentText') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6 lg4 xl3">
          <va-card>
            <va-image src="https://picsum.photos/300/200/?image=898" style="height: 200px">
              <va-button class="ma-0">
                {{ t('cards.button.readMore') }}
              </va-button>
            </va-image>
          </va-card>
        </div>

        <div class="flex xs12 sm6 lg4 xl3">
          <va-card stripe stripe-color="danger">
            <va-card-title>{{ t('cards.title.withStripe') }}</va-card-title>
            <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6 lg4 xl3">
          <va-card color="success">
            <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6 lg4 xl3">
          <va-card color="danger">
            <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6 lg4 xl3">
          <va-card stripe stripe-color="info">
            <va-card-title>{{ t('cards.title.withStripe') }}</va-card-title>
            <va-card-content>{{ t('cards.contentTextLong') }}</va-card-content>
          </va-card>
        </div>

        <div class="flex xs12 sm6 lg4 xl3">
          <va-card>
            <va-image src="https://picsum.photos/300/200/?image=1067" style="height: 200px">
              <va-card-title text-color="#fff">{{ t('cards.title.withTitleOnImage') }}</va-card-title>
            </va-image>
            <va-card-content>{{ t('cards.contentText') }}</va-card-content>
          </va-card>
        </div>
      </template>
    </div>

    <va-inner-loading class="flex-center py-3" style="width: 100%" :loading="isLoading">
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

<style lang="scss">
  .cards-container {
    .va-card {
      margin: 0;
    }
  }
</style>
