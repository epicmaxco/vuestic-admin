<template>
  <VaCard class="flex dashboard-contributors-list">
    <VaCardTitle>
      <h1>{{ t('dashboard.charts.topContributors') }}</h1>
      <div class="mr-0 va-text-right">
        <a :disabled="contributors.length <= step" class="mr-0 va-link" @click="showNext">
          {{ t('dashboard.charts.showNextFive') }}
        </a>
      </div>
    </VaCardTitle>

    <VaCardContent>
      <VaInnerLoading :loading="loading" style="width: 100%">
        <div v-for="(contributor, idx) in visibleList" :key="idx" class="mb-4">
          <VaProgressBar :color="getProgressBarColor(idx)" :model-value="getPercent(contributor.contributions)">
            {{ contributor.contributions }} {{ t('dashboard.charts.commits') }}
          </VaProgressBar>
          <p class="mt-2">{{ contributor.login }}</p>
        </div>
      </VaInnerLoading>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
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
  const { data } = await axios.get<IContributor[]>('https://api.github.com/repos/epicmaxco/vuestic-admin/contributors')
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

<style lang="scss" scoped>
.dashboard-contributors-list {
  flex-direction: column;

  .inner-loading {
    height: 100%;
  }
}
</style>
