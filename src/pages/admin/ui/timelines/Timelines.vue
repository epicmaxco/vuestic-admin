<template>
  <div class="timelines">
    <div class="grid grid-cols-12">
      <div class="flex col-span-12">
        <va-card no-padding-h style="overflow-x: auto">
          <va-card-title>{{ t('timelines.horizontalSimple') }}</va-card-title>
          <va-card-content>
            <va-timeline style="min-width: 400px">
              <va-timeline-item active>
                <template #before>
                  <div class="title va-text-center" :style="{ color: colors.primary }">
                    {{ t('timelines.firstDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ t('timelines.horizontalActionFirst') }}
                  </div>
                </template>
              </va-timeline-item>
              <va-timeline-item active>
                <template #before>
                  <div class="title va-text-center" :style="{ color: colors.primary }">
                    {{ t('timelines.secondDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ t('timelines.horizontalActionSecond') }}
                  </div>
                </template>
              </va-timeline-item>
              <va-timeline-item>
                <template #before>
                  <div class="title title--gray va-text-center">
                    {{ t('timelines.thirdDate') }}
                  </div>
                  <div class="va-timeline-item__description">
                    {{ t('timelines.horizontalActionThird') }}
                  </div>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex col-span-12">
        <va-card no-padding-h style="overflow-x: auto" class="timelines__horizontal-long">
          <va-card-title>{{ t('timelines.horizontalCards') }}</va-card-title>
          <va-card-content>
            <va-timeline align-top style="min-width: 600px" class="timelines__horizontal-long__timeline">
              <va-timeline-item active>
                <template #before>
                  <div class="title va-text-center" :style="{ color: colors.primary }">
                    {{ t('timelines.firstDate') }}
                  </div>
                </template>
                <template #after>
                  <va-card stripe stripe-color="warning" class="mb-0">
                    <va-card-title>{{ t('timelines.titleDateFirst') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentFirst') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item active>
                <template #before>
                  <div class="title va-text-center" :style="{ color: colors.primary }">
                    {{ t('timelines.secondDate') }}
                  </div>
                </template>
                <template #after>
                  <va-card stripe stripe-color="info" class="mb-0">
                    <va-card-title>{{ t('timelines.titleDateSecond') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentSecond') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item>
                <template #before>
                  <div class="title title--gray va-text-center">
                    {{ t('timelines.thirdDate') }}
                  </div>
                </template>
                <template #after>
                  <va-card stripe stripe-color="info" class="mb-0">
                    <va-card-title>{{ t('timelines.titleDateThird') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentThird') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex col-span-12">
        <va-card no-padding-v>
          <va-card-title>{{ t('timelines.verticalLabel') }}</va-card-title>
          <va-card-content>
            <va-timeline vertical>
              <va-timeline-item active>
                <template #before>
                  <span class="title va-timeline-item__text" :style="{ color: colors.primary }">
                    {{ t('timelines.firstDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card stripe stripe-color="success" class="mb-0">
                    <va-card-title>{{ t('timelines.titleFirst') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentFirst') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item active>
                <template #before>
                  <span class="title va-timeline-item__text" :style="{ color: colors.primary }">
                    {{ t('timelines.secondDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card stripe stripe-color="success" class="mb-0">
                    <va-card-title>{{ t('timelines.titleSecond') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentSecond') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item>
                <template #before>
                  <span class="title title--gray va-timeline-item__text">
                    {{ t('timelines.thirdDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card stripe stripe-color="success">
                    <va-card-title>{{ t('timelines.titleThird') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentThird') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>

      <div class="flex col-span-12">
        <va-card no-padding-v>
          <va-card-title>{{ t('timelines.verticalCentered') }}</va-card-title>
          <va-card-content>
            <va-timeline vertical centered style="min-width: 300px">
              <va-timeline-item color="danger" active>
                <template #before>
                  <span class="title title--danger va-timeline-item__text" :style="{ color: colors.danger }">
                    {{ t('timelines.firstDate') }}
                  </span>
                </template>
                <template class="after">
                  <va-card stripe stripe-color="danger" class="mb-0">
                    <va-card-title>{{ t('timelines.titleFirst') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentFirst') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item color="danger" active>
                <template #before>
                  <span class="title title--danger va-timeline-item__text" :style="{ color: colors.danger }">
                    {{ t('timelines.secondDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card stripe stripe-color="danger">
                    <va-card-title>{{ t('timelines.titleSecond') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentSecond') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
              <va-timeline-item color="danger" active>
                <template #before>
                  <span class="title title--danger va-timeline-item__text" :style="{ color: colors.danger }">
                    {{ t('timelines.thirdDate') }}
                  </span>
                </template>
                <template #after>
                  <va-card stripe stripe-color="danger" class="mb-0">
                    <va-card-title>{{ t('timelines.titleThird') }}</va-card-title>
                    <va-card-content>{{ t('timelines.contentThird') }}</va-card-content>
                  </va-card>
                </template>
              </va-timeline-item>
            </va-timeline>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  /**
   * HIDDEN FROM THE ADMIN! SEE src/components/sidebar/NavigationRoutes.ts AND src/pages/admin/ui/route.ts TO REVEAL.
   */

  import { useI18n } from 'vue-i18n'
  import { useColors } from 'vuestic-ui'

  const { t } = useI18n()
  const { colors } = useColors()
</script>
