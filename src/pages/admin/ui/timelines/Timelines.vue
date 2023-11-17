<template>
  <div class="timelines">
    <div class="grid grid-cols-12">
      <div class="flex col-span-12">
        <VaCard no-padding-h style="overflow-x: auto">
          <VaCardTitle>{{ t('timelines.horizontalSimple') }}</VaCardTitle>
          <VaCardContent>
            <VaTimeline style="min-width: 400px">
              <VaTimelineItem active>
                <template #before>
                  <div :style="{ color: colors.primary }" class="title va-text-center">
                    {{ t('timelines.firstDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ t('timelines.horizontalActionFirst') }}
                  </div>
                </template>
              </VaTimelineItem>
              <VaTimelineItem active>
                <template #before>
                  <div :style="{ color: colors.primary }" class="title va-text-center">
                    {{ t('timelines.secondDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ t('timelines.horizontalActionSecond') }}
                  </div>
                </template>
              </VaTimelineItem>
              <VaTimelineItem>
                <template #before>
                  <div class="title title--gray va-text-center">
                    {{ t('timelines.thirdDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ t('timelines.horizontalActionThird') }}
                  </div>
                </template>
              </VaTimelineItem>
            </VaTimeline>
          </VaCardContent>
        </VaCard>
      </div>

      <div class="flex col-span-12">
        <VaCard class="timelines__horizontal-long" no-padding-h style="overflow-x: auto">
          <VaCardTitle>{{ t('timelines.horizontalCards') }}</VaCardTitle>
          <VaCardContent>
            <VaTimeline align-top class="timelines__horizontal-long__timeline" style="min-width: 600px">
              <VaTimelineItem active>
                <template #before>
                  <div :style="{ color: colors.primary }" class="title va-text-center">
                    {{ t('timelines.firstDate') }}
                  </div>
                </template>
                <template #after>
                  <VaCard class="mb-0" stripe stripe-color="warning">
                    <VaCardTitle>{{ t('timelines.titleDateFirst') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentFirst') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
              <VaTimelineItem active>
                <template #before>
                  <div :style="{ color: colors.primary }" class="title va-text-center">
                    {{ t('timelines.secondDate') }}
                  </div>
                </template>
                <template #after>
                  <VaCard class="mb-0" stripe stripe-color="info">
                    <VaCardTitle>{{ t('timelines.titleDateSecond') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentSecond') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
              <VaTimelineItem>
                <template #before>
                  <div class="title title--gray va-text-center">
                    {{ t('timelines.thirdDate') }}
                  </div>
                </template>
                <template #after>
                  <VaCard class="mb-0" stripe stripe-color="info">
                    <VaCardTitle>{{ t('timelines.titleDateThird') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentThird') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
            </VaTimeline>
          </VaCardContent>
        </VaCard>
      </div>

      <div class="flex col-span-12">
        <VaCard no-padding-v>
          <VaCardTitle>{{ t('timelines.verticalLabel') }}</VaCardTitle>
          <VaCardContent>
            <VaTimeline vertical>
              <VaTimelineItem active>
                <template #before>
                  <span :style="{ color: colors.primary }" class="title va-timeline-item__text">
                    {{ t('timelines.firstDate') }}
                  </span>
                </template>
                <template #after>
                  <VaCard class="mb-0" stripe stripe-color="success">
                    <VaCardTitle>{{ t('timelines.titleFirst') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentFirst') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
              <VaTimelineItem active>
                <template #before>
                  <span :style="{ color: colors.primary }" class="title va-timeline-item__text">
                    {{ t('timelines.secondDate') }}
                  </span>
                </template>
                <template #after>
                  <VaCard class="mb-0" stripe stripe-color="success">
                    <VaCardTitle>{{ t('timelines.titleSecond') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentSecond') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
              <VaTimelineItem>
                <template #before>
                  <span class="title title--gray va-timeline-item__text">
                    {{ t('timelines.thirdDate') }}
                  </span>
                </template>
                <template #after>
                  <VaCard stripe stripe-color="success">
                    <VaCardTitle>{{ t('timelines.titleThird') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentThird') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
            </VaTimeline>
          </VaCardContent>
        </VaCard>
      </div>

      <div class="flex col-span-12">
        <VaCard no-padding-v>
          <VaCardTitle>{{ t('timelines.verticalCentered') }}</VaCardTitle>
          <VaCardContent>
            <VaTimeline centered style="min-width: 300px" vertical>
              <VaTimelineItem active color="danger">
                <template #before>
                  <span :style="{ color: colors.danger }" class="title title--danger va-timeline-item__text">
                    {{ t('timelines.firstDate') }}
                  </span>
                </template>
                <template class="after">
                  <VaCard class="mb-0" stripe stripe-color="danger">
                    <VaCardTitle>{{ t('timelines.titleFirst') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentFirst') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
              <VaTimelineItem active color="danger">
                <template #before>
                  <span :style="{ color: colors.danger }" class="title title--danger va-timeline-item__text">
                    {{ t('timelines.secondDate') }}
                  </span>
                </template>
                <template #after>
                  <VaCard stripe stripe-color="danger">
                    <VaCardTitle>{{ t('timelines.titleSecond') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentSecond') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
              <VaTimelineItem active color="danger">
                <template #before>
                  <span :style="{ color: colors.danger }" class="title title--danger va-timeline-item__text">
                    {{ t('timelines.thirdDate') }}
                  </span>
                </template>
                <template #after>
                  <VaCard class="mb-0" stripe stripe-color="danger">
                    <VaCardTitle>{{ t('timelines.titleThird') }}</VaCardTitle>
                    <VaCardContent>{{ t('timelines.contentThird') }}</VaCardContent>
                  </VaCard>
                </template>
              </VaTimelineItem>
            </VaTimeline>
          </VaCardContent>
        </VaCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * HIDDEN FROM THE ADMIN! SEE src/components/sidebar/NavigationRoutes.ts AND src/pages/admin/ui/route.ts TO REVEAL.
 */

import { useI18n } from 'vue-i18n'
import { useColors } from 'vuestic-ui'

const { t } = useI18n()
const { colors } = useColors()
</script>
