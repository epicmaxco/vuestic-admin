<template>
  <va-card class="flex dashboard-contributors-list">
    <va-card-title>
      <h1>{{ t('dashboard.charts.topContributors') }}</h1>
      <div class="mr-0 va-text-right">
        <a class="mr-0 va-link" :disabled="contributors.length <= step" @click="showNext">
          {{ t('dashboard.charts.showNextFive') }}
        </a>
      </div>
    </va-card-title>

    <va-card-content>
      <va-inner-loading :loading="loading" style="width: 100%">
        <div v-for="(contributor, idx) in visibleList" :key="idx" class="mb-4">
          <va-progress-bar :model-value="getPercent(contributor.contributions)" :color="getProgressBarColor(idx)">
            {{ contributor.contributions }} {{ t('dashboard.charts.commits') }}
          </va-progress-bar>
          <p class="mt-2">{{ contributor.login }}</p>
        </div>
      </va-inner-loading>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import axios from 'axios'

  const { t } = useI18n()

  interface IContributor {
    contributions: number
    login: string
  }

  const contributors = ref<IContributor[]>([])
  const loading = ref(false)
  const progressMax = ref(392)
  const visibleList = ref<IContributor[]>([])
  const step = ref(5)
  const page = ref(0)

  onMounted(() => {
    loadContributorsList()
  })

  async function loadContributorsList() {
    loading.value = true
    const { data } = await axios.get<IContributor[]>(
      'https://api.github.com/repos/epicmaxco/vuestic-admin/contributors',
    )
    contributors.value = data
    progressMax.value = Math.max(...contributors.value.map(({ contributions }) => contributions))
    showNext()
    loading.value = false
  }

  function getPercent(val: number) {
    return (val / progressMax.value) * 100
  }

  function showNext() {
    visibleList.value = contributors.value.slice(page.value * step.value, page.value * step.value + step.value)
    page.value += 1

    const maxPages = (contributors.value.length - 1) / step.value

    if (page.value > maxPages) {
      page.value = 0
    }
  }

  function getProgressBarColor(idx: number) {
    const themeColors = ['primary', 'success', 'info', 'danger', 'warning']

    if (idx < themeColors.length) {
      return themeColors[idx]
    }

    // Get random color if idx out of colors array
    const keys = Object.keys(themeColors)
    return themeColors[keys[(keys.length * Math.random()) << 0] as unknown as number]
  }
</script>

<style scoped lang="scss">
  .dashboard-contributors-list {
    flex-direction: column;

    .inner-loading {
      height: 100%;
    }
  }
</style>
