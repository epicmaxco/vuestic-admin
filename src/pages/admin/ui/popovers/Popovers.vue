<template>
  <div class="tooltips grid grid-cols-12 items-start gap-6">
    <VaCard class="col-span-12 md:col-span-6">
      <VaCardTitle>{{ t('popovers.popoverStyle') }}</VaCardTitle>
      <VaCardContent>
        <VaSelect v-model="popover.color" class="mb-8" label="color scheme" :options="colors" />
        <VaSelect v-model="popover.icon" class="mb-8" label="icon (font-awesome)" :options="icons" track-by="icon" />
        <VaInput v-model="popover.title" class="mb-8" label="Title" />
        <VaInput v-model="popover.message" class="mb-8" label="Message" />
        <div class="popover-example mt-5">
          <VaPopover
            :icon="popover.icon.icon"
            :color="popover.color"
            :title="popover.title"
            :message="popover.message"
            placement="right"
            open
          >
            <VaButton>
              {{ t('notificationsPage.popovers.showPopover') }}
            </VaButton>
          </VaPopover>
        </div>
      </VaCardContent>
    </VaCard>

    <VaCard class="col-span-12 md:col-span-6">
      <VaCardTitle>{{ t('popovers.popoverPlacement') }}</VaCardTitle>
      <VaCardContent>
        <p class="my-2 mx-2">
          Any text can be used for
          <VaPopover placement="bottom" message="Bottom tooltip">
            <a class="va-link">
              {{ t('notificationsPage.popovers.bottomTooltip') }}
            </a>
          </VaPopover>
          tooltip showcase. Just anything you can possibly imagine to test
          <VaPopover placement="right" message="Right tooltip">
            <a class="va-link">
              {{ t('notificationsPage.popovers.rightTooltip') }}
            </a>
          </VaPopover>
          tooltip. But it can appear on the
          <VaPopover placement="left" message="Left tooltip">
            <a class="va-link">
              {{ t('notificationsPage.popovers.leftTooltip') }}
            </a>
          </VaPopover>
          . Or just
          <VaPopover placement="top" message="Top tooltip">
            <a class="va-link">
              {{ t('notificationsPage.popovers.topTooltip') }}
            </a>
          </VaPopover>
          the item.
        </p>
      </VaCardContent>
    </VaCard>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const icons = ref([
    {
      icon: 'print',
      text: 'print',
    },
    {
      icon: 'star',
      text: 'star',
    },
  ])

  const colors = ref(['success', 'info', 'danger', 'warning', 'gray', 'dark'])

  const popover = ref({
    title: 'Hey folks!',
    message: 'This tooltip is amazing :D',
    icon: {
      icon: 'print',
      text: 'print',
    },
    color: 'warning',
  })
</script>
